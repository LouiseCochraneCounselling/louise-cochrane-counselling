import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import styles from "../styles/BookingSuccess.module.css";
import homeStyles from "../styles/Home.module.css";

export default function BookingSuccess() {
	return (
		<>
			<Head>
				<title>Message Sent - The Holding Space Jersey</title>
				<meta
					name="description"
					content="Your booking enquiry has been successfully submitted. We'll be in touch within 24-48 hours."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main} id="main-content">
				<div className={styles.container}>
					<AnimatedSection delay={0} animation="fadeIn">
						<div className={styles.successIcon}>
							<svg
								className={styles.checkmark}
								viewBox="0 0 52 52"
								xmlns="http://www.w3.org/2000/svg">
								<circle
									className={styles.checkmarkCircle}
									cx="26"
									cy="26"
									r="25"
									fill="none"
								/>
								<path
									className={styles.checkmarkCheck}
									fill="none"
									d="M14.1 27.2l7.1 7.2 16.7-16.8"
								/>
							</svg>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={200} animation="fadeInUp">
						<h1 className={styles.title}>
							Thank You! Your Message Has Been Sent
						</h1>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="fadeInUp">
						<div className={styles.content}>
							<p className={styles.message}>
								I have received your booking enquiry and will respond to you via
								email within 24-48 hours with next steps.
							</p>

							<div className={styles.infoBox}>
								<p className={styles.infoText}>
									<strong>What happens next?</strong>
								</p>
								<ul className={styles.infoList}>
									<li>
										Please check your inbox (and spam folder) for my reply
									</li>
									<li>
										I'll provide information about available appointment times
									</li>
									<li>
										We can discuss how I can best support you on your journey
									</li>
								</ul>
							</div>

							<div className={styles.contactBox}>
								<p className={styles.contactText}>
									If you haven't received a reply within 48 hours, please check
									your spam folder or contact me directly at{" "}
									<a
										href="mailto:hello@theholdingspacejersey.co.uk"
										className={styles.emailLink}>
										hello@theholdingspacejersey.co.uk
									</a>
								</p>
							</div>

							<div className={styles.actions}>
								<Link href="/" className={homeStyles.scrollToContactLink}>
									<span className={homeStyles.scrollToContactText}>
										Return back to home
									</span>
								</Link>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</main>
			<Footer />
		</>
	);
}
