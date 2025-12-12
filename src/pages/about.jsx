import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import Typewriter from "../components/Typewriter";
import styles from "../styles/Page.module.css";

export default function About() {
	return (
		<>
			<Head>
				<title>About - The Holding Space</title>
				<meta
					name="description"
					content="Learn about The Holding Space counselling services and approach to supporting your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<AnimatedSection delay={0} animation="fadeIn">
						<h3 className={styles.sectionTitleSmall}>ABOUT ME</h3>
					</AnimatedSection>
					<Typewriter
						as="h1"
						className={styles.pageTitle}
						text="My Journey and Approach"
						speed={60}
						delay={300}
						showCursor={true}
						loop={false}
					/>

					<AnimatedSection delay={200} animation="fadeInUp">
						<section className={styles.contentSection}>
							<h2>My Story</h2>
							<p>
								Born and raised in Jersey, I have dedicated my career to helping
								individuals navigate life's challenges. After completing
								comprehensive counselling training and qualifications, I gained
								valuable experience working as a counsellor in Singapore, where I
								supported diverse clients from various cultural backgrounds. Now
								back in Jersey, I am committed to providing compassionate,
								professional counselling services to my local community.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="slideInLeft">
						<section className={styles.contentSection}>
							<h2>My Approach</h2>
							<p>
								I believe in creating a safe, non-judgemental space where clients
								can explore their thoughts, feelings, and experiences. As a
								qualified counsellor, I use evidence-based approaches to support
								you in understanding yourself better and developing strategies to
								navigate life's challenges. My practice is client-centred, ensuring
								that each person receives personalised support tailored to their
								unique circumstances and needs.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="slideInRight">
						<section className={styles.contentSection}>
							<h2>What to Expect</h2>
							<p>
								When you reach out to me, we'll work together to understand your
								needs and determine the best way forward. Our sessions are
								confidential, and I'm committed to providing a supportive
								environment where you can feel heard and understood. Each session
								is typically 50 minutes long and can be arranged to suit your
								schedule.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={500} animation="fadeInUp">
						<section className={styles.contentSection}>
							<h2>Get in Touch</h2>
							<p>
								If you'd like to learn more about my services or discuss how I
								might be able to support you, please don't hesitate to contact me.
								I'm here to help you on your journey towards improved mental health
								and wellbeing.
							</p>
						</section>
					</AnimatedSection>
				</div>
			</main>
			<Footer />
		</>
	);
}
