"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");

		// Build form data object with all fields
		// Netlify Forms requires form-name to match the form name attribute
		const formDataObj = {
			"form-name": "booking",
			name: formData.name.trim(),
			email: formData.email.trim(),
			phone: (formData.phone || "").trim(),
			message: (formData.message || "").trim(),
		};

		// Encode as URLSearchParams for Netlify Forms
		const encoded = new URLSearchParams(formDataObj).toString();

		console.log("Submitting form with data:", formDataObj);

		try {
			// Submit to Netlify Forms endpoint
			// For Next.js Runtime v5, submit directly to root with proper encoding
			// Netlify Forms intercepts POST requests to any path
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: encoded,
			});

			console.log("Form submission response:", {
				status: response.status,
				statusText: response.statusText,
				ok: response.ok,
				url: response.url,
			});

			// Netlify Forms returns HTML (200) or redirect (302) on success
			// Any 2xx status code indicates success
			if (response.ok || response.status === 302 || response.status === 200) {
				setStatus("success");
				form.reset();
				setFormData({ name: "", phone: "", email: "", message: "" });
			} else {
				// Try to get response text for debugging
				let errorText = "";
				try {
					errorText = await response.text();
					console.error("Error response body:", errorText.substring(0, 500));
				} catch (e) {
					console.error("Could not read error response:", e);
				}
				
				console.error("Form submission failed:", {
					status: response.status,
					statusText: response.statusText,
					url: response.url,
					preview: errorText.substring(0, 200),
				});
				setStatus("error");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setStatus("error");
		}
	};

	return (
		<section className={styles.bookingSection}>
			<div className={styles.backgroundImage}>
				<div className={styles.overlay}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.textContent}>
					<h2 className={styles.mainHeading}>Book Your Initial Consultation</h2>
					<p className={styles.subheading}>
						Take the first step towards support and healing
					</p>
				</div>
				<form
					name="booking"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					action="/"
					onSubmit={handleSubmit}
					className={styles.bookingForm}>
					<input type="hidden" name="form-name" value="booking" />
					<p className={styles.hidden}>
						<label>
							Don't fill this out if you're human: <input name="bot-field" />
						</label>
					</p>

					<div className={styles.formRow}>
						<div className={styles.formGroup}>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className={styles.formInput}
								placeholder="Name *"
								autoComplete="name"
								aria-required="true"
							/>
						</div>
						<div className={styles.formGroup}>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className={styles.formInput}
								placeholder="Phone (optional)"
								autoComplete="tel"
								inputMode="tel"
							/>
						</div>
					</div>

					<div className={styles.formGroup}>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className={styles.formInput}
							placeholder="E-mail Address *"
							autoComplete="email"
							inputMode="email"
							aria-required="true"
						/>
					</div>

					<div className={styles.formGroup}>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="6"
							className={styles.formTextarea}
							placeholder="Please let me know what you'd like to discuss, your preferred times for sessions, or any questions you have. All information is confidential."
						/>
					</div>

					<p className={styles.privacyNote}>
						<i className="fas fa-shield-alt" aria-hidden="true"></i>
						Your information is confidential and will only be used to contact
						you about your enquiry.
					</p>

					<button
						type="submit"
						className={styles.submitButton}
						disabled={status === "sending"}>
						{status === "sending" ? (
							<span className={styles.spinner}></span>
						) : (
							"Send Message"
						)}
					</button>

					{status === "success" && (
						<div className={`${styles.formMessage} ${styles.success}`}>
							<p>
								<strong>Thank you! Your message has been sent.</strong>
							</p>
							<p>
								I'll respond to you via email within 24-48 hours with next
								steps. Please check your inbox (and spam folder) for my reply.
							</p>
						</div>
					)}
					{status === "error" && (
						<p className={`${styles.formMessage} ${styles.error}`}>
							Sorry, there was an error sending your message. Please try again.
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default BookingForm;
