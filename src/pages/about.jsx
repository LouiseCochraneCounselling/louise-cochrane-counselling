import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Page.module.css";

export default function About() {
	return (
		<>
			<Head>
				<title>About Me - Louise Cochrane</title>
				<meta
					name="description"
					content="Learn about our counselling services and approach to supporting your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<h1 className={styles.pageTitle}>About Us</h1>

					<section className={styles.contentSection}>
						<h2>Our Mission</h2>
						<p>
							We are dedicated to providing professional, compassionate
							counselling services that support individuals on their journey
							towards improved mental health and wellbeing. Our approach is
							client-centred, ensuring that each person receives personalised
							support tailored to their unique circumstances and needs.
						</p>
					</section>

					<section className={styles.contentSection}>
						<h2>Our Approach</h2>
						<p>
							We believe in creating a safe, non-judgemental space where clients
							can explore their thoughts, feelings, and experiences. Our
							counsellors are trained professionals who use evidence-based
							approaches to support you in understanding yourself better and
							developing strategies to navigate life's challenges.
						</p>
					</section>

					<section className={styles.contentSection}>
						<h2>What to Expect</h2>
						<p>
							When you reach out to us, we'll work together to understand your
							needs and determine the best way forward. Our sessions are
							confidential, and we're committed to providing a supportive
							environment where you can feel heard and understood.
						</p>
					</section>

					<section className={styles.contentSection}>
						<h2>Get in Touch</h2>
						<p>
							If you'd like to learn more about our services or discuss how we
							might be able to support you, please don't hesitate to contact us.
							We're here to help.
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
