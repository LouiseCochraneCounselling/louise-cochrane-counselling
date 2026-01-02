"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
	const router = useRouter();
	const MAX_MESSAGE_LENGTH = 2500;
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");
	const [showInfo, setShowInfo] = useState(false);
	const [showConfidentiality, setShowConfidentiality] = useState(false);
	const [fieldErrors, setFieldErrors] = useState({});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		// Clear field error when user starts typing
		if (fieldErrors[e.target.name]) {
			setFieldErrors({
				...fieldErrors,
				[e.target.name]: undefined,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");

		const form = e.target;

		// Build form data object with all fields
		const formDataObj = {
			name: formData.name.trim(),
			email: formData.email.trim(),
			phone: (formData.phone || "").trim(),
			message: (formData.message || "").trim(),
		};

		// Validate required fields
		const errors = {};
		if (!formDataObj.name || !formDataObj.name.trim()) {
			errors.name = "First name is required";
		}
		if (!formDataObj.email || !formDataObj.email.trim()) {
			errors.email = "Email address is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDataObj.email)) {
			errors.email = "Please enter a valid email address";
		}
		
		if (Object.keys(errors).length > 0) {
			setFieldErrors(errors);
			setStatus("error");
			return;
		}
		
		setFieldErrors({});

		try {
			// Submit to Next.js API route
			const response = await fetch("/api/submit-booking", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formDataObj),
			});

			// Check if response is ok before parsing JSON
			if (!response.ok) {
				// Try to parse error response
				let errorData;
				try {
					errorData = await response.json();
				} catch (parseError) {
					errorData = { message: `Server error: ${response.status} ${response.statusText}` };
				}
				setStatus("error");
				setFieldErrors({ submit: errorData.message || "Sorry, there was an error sending your message. Please try again." });
				return;
			}

			const result = await response.json();

			// Check if result has success flag
			if (result.success === true) {
				form.reset();
				setFormData({ name: "", phone: "", email: "", message: "" });
				setFieldErrors({});
				setStatus("");
				// Redirect to success page
				// Use window.location for more reliable redirect
				window.location.href = "/booking-success";
			} else {
				setStatus("error");
				// Show specific error message from API if available
				const errorMessage = result.message || "Sorry, there was an error sending your message. Please try again.";
				setFieldErrors({ submit: errorMessage });
			}
		} catch (error) {
			// Log error in development only
			if (process.env.NODE_ENV === "development") {
				console.error("Form submission error:", error);
			}
			setStatus("error");
			setFieldErrors({ submit: "Sorry, there was an error sending your message. Please try again." });
		}
	};

	return (
		<section className={styles.bookingSection}>
			<div className={styles.backgroundImage}>
				<div className={styles.overlay}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.textContent}>
					<h2 className={styles.mainHeading}>Get in Touch</h2>
					<p className={styles.subheading}>
						This form is just an initial enquiry—there's no commitment. I'll respond within 24-48 hours to discuss how I might support you and answer any questions you have. Everything you share here is confidential.
					</p>
				</div>
				<form
					name="booking"
					method="POST"
					onSubmit={handleSubmit}
					className={styles.bookingForm}
					noValidate>
					{/* Aria-live region for form errors */}
					<div
						role="alert"
						aria-live="polite"
						aria-atomic="true"
						className="sr-only">
						{Object.keys(fieldErrors).length > 0 && (
							<span>
								Form has errors: {Object.values(fieldErrors).join(". ")}
							</span>
						)}
					</div>
					
					<div className={styles.formRow}>
						<div className={styles.formGroup}>
							<label htmlFor="name" className={styles.formLabel}>
								First Name <span aria-label="required">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className={styles.formInput}
								placeholder="First Name *"
								autoComplete="name"
								aria-required="true"
								aria-invalid={fieldErrors.name ? "true" : "false"}
								aria-errormessage={fieldErrors.name ? "name-error" : undefined}
							/>
							{fieldErrors.name && (
								<span id="name-error" className={styles.fieldError} role="alert">
									{fieldErrors.name}
								</span>
							)}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="phone" className={styles.formLabel}>
								Phone <span className={styles.optionalLabel}>(optional)</span>
							</label>
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
						<label htmlFor="email" className={styles.formLabel}>
							E-mail Address <span aria-label="required">*</span>
						</label>
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
							aria-invalid={fieldErrors.email ? "true" : "false"}
							aria-errormessage={fieldErrors.email ? "email-error" : undefined}
						/>
						{fieldErrors.email && (
							<span id="email-error" className={styles.fieldError} role="alert">
								{fieldErrors.email}
							</span>
						)}
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="message" className={styles.formLabel}>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="6"
							className={styles.formTextarea}
							placeholder="Please let me know what you'd like to discuss, your preferred times for sessions, or any questions you have. All information is confidential."
							maxLength={MAX_MESSAGE_LENGTH}
						/>
						<div className={styles.characterCounter}>
							<span
								className={
									formData.message.length > MAX_MESSAGE_LENGTH * 0.9
										? styles.characterCounterWarning
										: ""
								}>
								{formData.message.length} / {MAX_MESSAGE_LENGTH}
							</span>
						</div>
					</div>

					<div className={styles.infoAccordion}>
						<button
							type="button"
							className={styles.infoToggle}
							onClick={() => setShowInfo(!showInfo)}
							aria-expanded={showInfo}
							aria-controls="after-submit-info">
							<span>What happens after I submit this form?</span>
							<svg
								className={`${styles.infoToggleIcon} ${showInfo ? styles.infoToggleIconOpen : ""}`}
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 10L12 15L17 10"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
						{showInfo && (
							<div id="after-submit-info" className={styles.infoContent}>
								<p>
									After you submit this form, I'll receive your message via email. I aim to respond within 24-48 hours (usually sooner). In my response, I'll suggest some potential appointment times and answer any questions you have.
								</p>
								<p>
									There's no obligation, we can discuss whether working together feels right for you. Everything you share here is confidential and will only be used to respond to your enquiry.
								</p>
							</div>
						)}
					</div>

					<div className={styles.infoAccordion}>
						<button
							type="button"
							className={styles.infoToggle}
							onClick={() => setShowConfidentiality(!showConfidentiality)}
							aria-expanded={showConfidentiality}
							aria-controls="confidentiality-info">
							<span>Your privacy is important</span>
							<svg
								className={`${styles.infoToggleIcon} ${showConfidentiality ? styles.infoToggleIconOpen : ""}`}
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 10L12 15L17 10"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
						{showConfidentiality && (
							<div id="confidentiality-info" className={styles.infoContent}>
								<p>
									Everything we discuss is confidential. I won't share what you tell me with anyone else, except in rare situations where there's a serious risk of harm (I'll explain these clearly if they ever come up). For children and young people, I'll explain confidentiality in an age-appropriate way.
								</p>
								<p>
									You can read more about this on our <Link href="/confidentiality" className={styles.infoLink}>confidentiality page</Link>.
								</p>
							</div>
						)}
					</div>

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

					{fieldErrors.submit && (
						<p 
							id="submit-error"
							className={`${styles.formMessage} ${styles.error}`}
							role="alert"
							aria-live="polite">
							{fieldErrors.submit}
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default BookingForm;
