import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import Typewriter from "../components/Typewriter";
import styles from "../styles/Page.module.css";
import homeStyles from "../styles/Home.module.css";

export default function Approach() {
	return (
		<>
			<Head>
				<title>My Journey & Approach - The Holding Space</title>
				<meta
					name="description"
					content="Learn about my journey as a counsellor and my therapeutic approach to supporting your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<AnimatedSection delay={0} animation="fadeIn">
						<h3 className={styles.sectionTitleSmall}>MY JOURNEY & APPROACH</h3>
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

					<AnimatedSection delay={200} animation="slideInLeft">
						<section className={styles.contentSection}>
							<h2>My Journey</h2>
							<p>
								With over eight years of experience, I have worked across a range of settings including schools, agencies, private practice, and international environments. My three years in Singapore, working in both private practice and an international school setting, have given me valuable insights into supporting clients from diverse cultural backgrounds and understanding the unique challenges faced by children, young people, and families in international or multicultural contexts.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="slideInRight">
						<section className={styles.contentSection}>
							<h2>My Approach</h2>
							<p>
								My approach is collaborative, thoughtful, and tailored to the individual needs of each client. Working with me feels like having a conversation with someone who is genuinely interested in understanding your world. I won't give you advice or tell you what to do, instead, we'll explore together what's happening for you and what might help.
							</p>
							<p>
								I am trained in Cognitive Behavioural Therapy (CBT) and integrate elements from other evidence-based approaches, including Dialectical Behaviour Therapy (DBT) and Acceptance and Commitment Therapy (ACT). This means we might look at how your thoughts, feelings, and behaviours are connected, and I'll always check in with you about what's helpful and what isn't. I use age-appropriate interventions that support emotional regulation, resilience, and self-understanding.
							</p>
							<p>
								You're the expert on your own life. My role is to create a safe space where you can explore, reflect, and find your own way forward. I have extensive experience working alongside families, schools, and multidisciplinary teams, recognising the importance of creating supportive environments around young people to foster lasting, positive change.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="fadeIn">
						<div className={styles.backButtonContainer}>
							<Link href="/#about-section" className={homeStyles.scrollToContactLink}>
								<span className={homeStyles.scrollToContactText}>
									Return back to home
								</span>
							</Link>
						</div>
					</AnimatedSection>
				</div>
			</main>
			<Footer />
		</>
	);
}
