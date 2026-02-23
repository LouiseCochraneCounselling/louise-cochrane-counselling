import { Resend } from 'resend';

// Initialize Resend API
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Simple in-memory rate limiter for serverless environments
 * Tracks requests per IP address within a time window
 */
const rateLimitStore = new Map();

/**
 * Rate limit configuration
 * Max 5 submissions per IP per 15 minutes
 */
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Get client IP address from request
 * @param {object} req - Next.js request object
 * @returns {string} - Client IP address
 */
function getClientIP(req) {
	// Check various headers for IP (Vercel, Cloudflare, etc.)
	const forwarded = req.headers['x-forwarded-for'];
	if (forwarded) {
		return forwarded.split(',')[0].trim();
	}
	const realIP = req.headers['x-real-ip'];
	if (realIP) {
		return realIP;
	}
	const cfConnectingIP = req.headers['cf-connecting-ip'];
	if (cfConnectingIP) {
		return cfConnectingIP;
	}
	// Fallback to connection remote address
	return req.socket?.remoteAddress || 'unknown';
}

/**
 * Check if IP address has exceeded rate limit
 * @param {string} ip - Client IP address
 * @returns {object} - { allowed: boolean, remaining: number, resetTime: number }
 */
function checkRateLimit(ip) {
	const now = Date.now();
	const ipData = rateLimitStore.get(ip);

	// Clean up old entries periodically (every 100 requests)
	if (Math.random() < 0.01) {
		for (const [key, value] of rateLimitStore.entries()) {
			if (now - value.firstRequest > RATE_LIMIT_WINDOW_MS) {
				rateLimitStore.delete(key);
			}
		}
	}

	if (!ipData) {
		// First request from this IP
		rateLimitStore.set(ip, {
			count: 1,
			firstRequest: now,
		});
		return {
			allowed: true,
			remaining: RATE_LIMIT_MAX_REQUESTS - 1,
			resetTime: now + RATE_LIMIT_WINDOW_MS,
		};
	}

	// Check if window has expired
	if (now - ipData.firstRequest > RATE_LIMIT_WINDOW_MS) {
		// Reset window
		rateLimitStore.set(ip, {
			count: 1,
			firstRequest: now,
		});
		return {
			allowed: true,
			remaining: RATE_LIMIT_MAX_REQUESTS - 1,
			resetTime: now + RATE_LIMIT_WINDOW_MS,
		};
	}

	// Check if limit exceeded
	if (ipData.count >= RATE_LIMIT_MAX_REQUESTS) {
		const resetTime = ipData.firstRequest + RATE_LIMIT_WINDOW_MS;
		return {
			allowed: false,
			remaining: 0,
			resetTime: resetTime,
		};
	}

	// Increment count
	ipData.count++;
	rateLimitStore.set(ip, ipData);

	return {
		allowed: true,
		remaining: RATE_LIMIT_MAX_REQUESTS - ipData.count,
		resetTime: ipData.firstRequest + RATE_LIMIT_WINDOW_MS,
	};
}

/**
 * Escape HTML special characters to prevent XSS attacks
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
function escapeHtml(str) {
	if (typeof str !== 'string') return '';
	const map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#x27;',
		'/': '&#x2F;',
	};
	return str.replace(/[&<>"'/]/g, (s) => map[s]);
}

/**
 * Sanitize string for use in email subject line
 * Removes newlines and limits length
 * @param {string} str - String to sanitize
 * @param {number} maxLength - Maximum length (default: 100)
 * @returns {string} - Sanitized string
 */
function sanitizeSubject(str, maxLength = 100) {
	if (typeof str !== 'string') return '';
	return str
		.replace(/[\r\n]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.substring(0, maxLength);
}

/**
 * Sanitize and escape message text for HTML email
 * Converts newlines to <br> tags after escaping HTML
 * @param {string} str - Message text
 * @returns {string} - Sanitized HTML string
 */
function sanitizeMessage(str) {
	if (typeof str !== 'string') return '';
	const escaped = escapeHtml(str);
	return escaped.replace(/\n/g, '<br>');
}

export default async function handler(req, res) {
	// Only allow POST requests
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	// Rate limiting check
	const clientIP = getClientIP(req);
	const rateLimit = checkRateLimit(clientIP);

	if (!rateLimit.allowed) {
		const resetTimeSeconds = Math.ceil(
			(rateLimit.resetTime - Date.now()) / 1000
		);
		return res.status(429).json({
			message: `Too many requests. Please try again in ${resetTimeSeconds} seconds.`,
			error: 'rate_limit_exceeded',
			retryAfter: resetTimeSeconds,
		});
	}

	// Set rate limit headers
	res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS);
	res.setHeader('X-RateLimit-Remaining', rateLimit.remaining);
	res.setHeader('X-RateLimit-Reset', Math.ceil(rateLimit.resetTime / 1000));

	try {
		// Get form data from request body
		let { name, email, phone, message } = req.body;

		// Validate required fields
		if (!name || !email) {
			return res.status(400).json({
				message: 'Name and email are required',
				error: 'validation_error',
			});
		}

		// Sanitize all input
		name = String(name || '').trim();
		email = String(email || '').trim();
		phone = phone ? String(phone).trim() : '';
		message = message ? String(message).trim() : '';

		// Additional validation after sanitization
		if (!name || !email) {
			return res.status(400).json({
				message: 'Name and email are required',
				error: 'validation_error',
			});
		}

		// Basic email format validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({
				message: 'Invalid email format',
				error: 'validation_error',
			});
		}

		// Validate Resend API key is configured
		if (!process.env.RESEND_API_KEY) {
			if (process.env.NODE_ENV === 'development') {
				console.error(
					'[API Error] RESEND_API_KEY environment variable is not configured'
				);
				console.error(
					'[API Error] Please configure RESEND_API_KEY in Vercel environment variables.'
				);
			}
			return res.status(500).json({
				message:
					'Email service is not configured. Please contact the site administrator.',
				error: 'configuration_error',
				details:
					process.env.NODE_ENV === 'development'
						? 'RESEND_API_KEY is missing. Please configure it in Vercel environment variables.'
						: undefined,
			});
		}

		// Get recipient email from environment variable
		// Sanitize to prevent header injection
		const rawRecipientEmail = process.env.CONTACT_EMAIL;
		if (!rawRecipientEmail) {
			if (process.env.NODE_ENV === 'development') {
				console.error(
					'[API Error] CONTACT_EMAIL environment variable is not configured'
				);
				console.error(
					'[API Error] Please set CONTACT_EMAIL in Vercel Project Settings → Environment Variables'
				);
				console.error('[API Error] Current environment:', {
					hasResendKey: !!process.env.RESEND_API_KEY,
					hasContactEmail: false,
					hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
				});
			}
			return res.status(500).json({
				message:
					'Email service is not configured. Please contact the site administrator.',
				error: 'configuration_error',
				details:
					process.env.NODE_ENV === 'development'
						? 'CONTACT_EMAIL is missing. Please set it in Vercel environment variables.'
						: undefined,
			});
		}
		// Remove any newlines, carriage returns, or other control characters
		const recipientEmail = String(rawRecipientEmail)
			.replace(/[\r\n]/g, '')
			.trim();

		// Get sender email (should be verified in Resend)
		// Sanitize to prevent header injection
		const rawSenderEmail =
			process.env.RESEND_FROM_EMAIL || 'hello@louisecochranecounselling.com';
		// Remove any newlines, carriage returns, or other control characters
		const senderEmail = String(rawSenderEmail)
			.replace(/[\r\n]/g, '')
			.trim();

		// Log configuration status in development only
		if (process.env.NODE_ENV === 'development') {
			console.log('[API Info] Email configuration:', {
				recipientEmail: recipientEmail,
				senderEmail: senderEmail,
				hasResendKey: !!process.env.RESEND_API_KEY,
			});
		}

		// Sanitize inputs for email
		const sanitizedName = escapeHtml(name);
		const sanitizedEmail = escapeHtml(email);
		const sanitizedPhone = phone ? escapeHtml(phone) : '';
		const sanitizedMessage = message ? sanitizeMessage(message) : '';
		const sanitizedSubject = sanitizeSubject(name);

		// Format the email content
		const emailSubject = `New Booking Enquiry from ${sanitizedSubject}`;
		const emailHtml = `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<style>
					body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
					.container { max-width: 600px; margin: 0 auto; padding: 20px; }
					.header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
					.content { padding: 20px; }
					.field { margin-bottom: 15px; }
					.label { font-weight: bold; color: #555; }
					.value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 3px; }
					.footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h2>New Booking Enquiry - (${sanitizedName})</h2>
					</div>
					<div class="content">
						<div class="field">
							<div class="label">Name:</div>
							<div class="value">${sanitizedName}</div>
						</div>
						<div class="field">
							<div class="label">Email:</div>
							<div class="value">${sanitizedEmail}</div>
						</div>
						${
							sanitizedPhone
								? `
						<div class="field">
							<div class="label">Phone:</div>
							<div class="value">${sanitizedPhone}</div>
						</div>
						`
								: ''
						}
						${
							sanitizedMessage
								? `
						<div class="field">
							<div class="label">Message:</div>
							<div class="value">${sanitizedMessage}</div>
						</div>
						`
								: ''
						}
					</div>
					<div class="footer">
						<p>This email was sent from the booking form on your website.</p>
						<p>Submitted at: ${new Date().toLocaleString('en-GB', {
							timeZone: 'Europe/London',
						})}. If you would like it updated, please contact Steve Lewis.</p>
					</div>
				</div>
			</body>
			</html>
		`;

		const emailText = `
New Booking Enquiry

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${message ? `\nMessage:\n${message}` : ''}

---
Submitted at: ${new Date().toLocaleString('en-GB', {
			timeZone: 'Europe/London',
		})}
		`.trim();

		// Send email using Resend
		try {
			// Validate email format for replyTo to prevent injection
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			const replyToEmail = emailRegex.test(sanitizedEmail)
				? sanitizedEmail
				: senderEmail; // Fallback to sender if invalid

			const data = await resend.emails.send({
				from: `Booking Form - [Louise Cochrane Counselling] <${senderEmail}>`,
				to: [recipientEmail],
				replyTo: replyToEmail,
				subject: emailSubject,
				html: emailHtml,
				text: emailText,
			});

			// Send confirmation email to the enquirer
			const confirmationHtml = `
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8">
					<style>
						body { font-family: Georgia, serif; line-height: 1.7; color: #444; background-color: #fdf9f7; margin: 0; padding: 0; }
						.wrapper { background-color: #fdf9f7; padding: 40px 20px; }
						.container { max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; }
						.header { background-color: #ede8e3; padding: 36px 40px 28px; text-align: center; }
						.header h1 { font-size: 22px; font-weight: normal; color: #5a5a5a; letter-spacing: 0.04em; margin: 0 0 4px; }
						.header p { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #8a8a8a; margin: 0; }
						.body { padding: 36px 40px; }
						.body p { font-size: 15px; color: #555; margin: 0 0 18px; }
						.summary { background-color: #faf7f5; border-left: 3px solid #c9b8aa; padding: 16px 20px; margin: 24px 0; border-radius: 0 4px 4px 0; }
						.summary p { margin: 6px 0; font-size: 14px; color: #666; }
						.summary strong { color: #444; }
						.footer { padding: 24px 40px; border-top: 1px solid #ede8e3; text-align: center; }
						.footer p { font-size: 12px; color: #999; margin: 0; line-height: 1.6; }
					</style>
				</head>
				<body>
					<div class="wrapper">
						<div class="container">
							<div class="header">
								<h1>Louise Cochrane</h1>
								<p>Counselling</p>
							</div>
							<div class="body">
								<p>Dear ${sanitizedName},</p>
								<p>Thank you for getting in touch. I've received your enquiry and will get back to you within 24–48 hours.</p>
								<p>Here's a copy of what you submitted:</p>
								<div class="summary">
									<p><strong>Name:</strong> ${sanitizedName}</p>
									<p><strong>Email:</strong> ${sanitizedEmail}</p>
									${sanitizedPhone ? `<p><strong>Phone:</strong> ${sanitizedPhone}</p>` : ''}
									${sanitizedMessage ? `<p><strong>Message:</strong> ${sanitizedMessage}</p>` : ''}
								</div>
								<p>If you have any urgent questions in the meantime, please don't hesitate to reply to this email.</p>
								<p>Warm regards,<br>Louise Cochrane</p>
							</div>
							<div class="footer">
								<p>Louise Cochrane Counselling &nbsp;·&nbsp; Suite 19 Bourne House, Francis Street, St Helier, Jersey JE2 4QB</p>
								<p style="margin-top: 8px;">This is an automated confirmation of your enquiry.</p>
							</div>
						</div>
					</div>
				</body>
				</html>
			`;

			const confirmationText = `
Dear ${name},

Thank you for getting in touch. I've received your enquiry and will get back to you within 24–48 hours.

Here's a copy of what you submitted:

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}${message ? `Message: ${message}\n` : ''}
If you have any urgent questions in the meantime, please reply to this email.

Warm regards,
Louise Cochrane
Louise Cochrane Counselling
			`.trim();

			// Send confirmation — fire and don't block success on failure
			resend.emails.send({
				from: `Louise Cochrane Counselling <${senderEmail}>`,
				to: [email],
				replyTo: recipientEmail,
				subject: 'Your enquiry has been received — Louise Cochrane Counselling',
				html: confirmationHtml,
				text: confirmationText,
			}).catch((err) => {
				if (process.env.NODE_ENV === 'development') {
					console.error('[API] Confirmation email failed:', err?.message);
				}
			});

			// Success
			return res.status(200).json({
				message: 'Form submitted successfully',
				success: true,
				emailId: data.id,
			});
		} catch (resendError) {
			// Provide more specific error messages based on common Resend errors
			let errorMessage = 'Failed to send email. Please try again later.';
			if (resendError?.message?.includes('domain')) {
				errorMessage =
					'Email sending failed: Domain verification issue. Please verify your sender domain in Resend.';
			} else if (
				resendError?.message?.includes('API key') ||
				resendError?.statusCode === 401
			) {
				errorMessage =
					'Email sending failed: Invalid API key. Please check your RESEND_API_KEY configuration.';
			} else if (resendError?.message?.includes('rate limit')) {
				errorMessage =
					'Email sending failed: Rate limit exceeded. Please try again later.';
			}

			return res.status(500).json({
				message: errorMessage,
				error: 'email_send_error',
				details:
					process.env.NODE_ENV === 'development'
						? resendError?.message
						: undefined,
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: 'An unexpected error occurred. Please try again later.',
			error: 'server_error',
			details:
				process.env.NODE_ENV === 'development' ? error?.message : undefined,
		});
	}
}
