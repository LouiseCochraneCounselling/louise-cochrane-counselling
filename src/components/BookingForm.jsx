"use client";

import { useState } from "react";
import { useRouter } from "next/router";
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

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
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
		if (!formDataObj.name || !formDataObj.email) {
			setStatus("error");
			return;
		}

		try {
			// Submit to Next.js API route
			const response = await fetch("/api/submit-booking", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formDataObj),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				form.reset();
				setFormData({ name: "", phone: "", email: "", message: "" });
				// Redirect to success page
				router.push("/booking-success");
			} else {
				setStatus("error");
			}
		} catch (error) {
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
						Contact to book/answer any enquires
					</p>
				</div>
				<form
					name="booking"
					method="POST"
					onSubmit={handleSubmit}
					className={styles.bookingForm}>
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
							/>
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
						/>
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
