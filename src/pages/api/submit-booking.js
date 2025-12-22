import { Resend } from "resend";

// Initialize Resend API
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
	// Only allow POST requests
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		// Get form data from request body
		const { name, email, phone, message } = req.body;

		// Validate required fields
		if (!name || !email) {
			return res.status(400).json({
				message: "Name and email are required",
				error: "validation_error",
			});
		}

		// Validate Resend API key is configured
		if (!process.env.RESEND_API_KEY) {
			console.error("RESEND_API_KEY is not configured");
			return res.status(500).json({
				message:
					"Email service is not configured. Please contact the site administrator.",
				error: "configuration_error",
			});
		}

		// Get recipient email from environment variable
		const recipientEmail = process.env.CONTACT_EMAIL;

		// Get sender email (should be verified in Resend)
		const senderEmail = process.env.RESEND_FROM_EMAIL || "hello@theholdingspace.co.uk";

		if (!recipientEmail) {
			console.error("CONTACT_EMAIL is not configured");
			return res.status(500).json({
				message: "Email recipient is not configured.",
				error: "configuration_error",
			});
		}

		// Format the email content
		const emailSubject = `New Booking Enquiry from ${name}`;
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
						<h2>New Booking Enquiry - The Holding Space</h2>
					</div>
					<div class="content">
						<div class="field">
							<div class="label">Name:</div>
							<div class="value">${name}</div>
						</div>
						<div class="field">
							<div class="label">Email:</div>
							<div class="value">${email}</div>
						</div>
						${
							phone
								? `
						<div class="field">
							<div class="label">Phone:</div>
							<div class="value">${phone}</div>
						</div>
						`
								: ""
						}
						${
							message
								? `
						<div class="field">
							<div class="label">Message:</div>
							<div class="value">${message.replace(/\n/g, "<br>")}</div>
						</div>
						`
								: ""
						}
					</div>
					<div class="footer">
						<p>This email was sent from the booking form on your website.</p>
						<p>Submitted at: ${new Date().toLocaleString("en-GB", {
							timeZone: "Europe/London",
						})}</p>
					</div>
				</div>
			</body>
			</html>
		`;

		const emailText = `
New Booking Enquiry

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${message ? `\nMessage:\n${message}` : ""}

---
Submitted at: ${new Date().toLocaleString("en-GB", {
			timeZone: "Europe/London",
		})}
		`.trim();

		// Send email using Resend
		try {
			const data = await resend.emails.send({
				from: `The Holding Space <${senderEmail}>`,
				to: [recipientEmail],
				replyTo: email,
				subject: emailSubject,
				html: emailHtml,
				text: emailText,
			});

			// Success
			return res.status(200).json({
				message: "Form submitted successfully",
				success: true,
				emailId: data.id,
			});
		} catch (resendError) {
			console.error("Resend error:", resendError);
			return res.status(500).json({
				message: "Failed to send email. Please try again later.",
				error: "email_send_error",
			});
		}
	} catch (error) {
		console.error("Form submission error:", error);
		return res.status(500).json({
			message: "An unexpected error occurred. Please try again later.",
			error: "server_error",
		});
	}
}
