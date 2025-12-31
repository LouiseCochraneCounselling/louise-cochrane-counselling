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
							<p>
								I am an empathetic and passionate, person-centred Counsellor
								with over eight years of experience supporting the mental health
								and wellbeing of children, young people, adults and families. I
								have worked across a range of settings, including schools,
								agencies, private practice, and international environments, with
								a strong focus on creating safe, trusting therapeutic
								relationships.
							</p>
							<p>
								I lived and worked in Singapore for three years, gaining
								valuable international experience in both private practice and
								an international school setting. Working with clients from
								diverse cultural backgrounds has deepened my understanding of
								identity, transition, belonging, and the unique challenges faced
								by children, young people, and families living in international
								or multicultural contexts.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="slideInLeft">
						<section className={styles.contentSection}>
							<h2>My Approach</h2>
							<p>
								My approach is collaborative, thoughtful, and tailored to the
								individual needs of each client. I am trained in Cognitive
								Behavioural Therapy (CBT) and integrate elements from other
								evidence-based approaches, including Dialectical Behaviour
								Therapy (DBT) and Acceptance and Commitment Therapy (ACT), using
								age-appropriate interventions that support emotional regulation,
								resilience, and self-understanding.
							</p>
							<p>
								I have extensive experience working alongside families, schools,
								and multidisciplinary teams, recognising the importance of
								creating supportive environments around young people to foster
								lasting, positive change.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="slideInRight">
						<section className={styles.contentSection}>
							<h2>My Commitment</h2>
							<p>
								Above all, I aim to offer a warm, non-judgemental space where
								clients feel heard, respected, and supported to move forward at
								their own pace.
							</p>
						</section>
					</AnimatedSection>
				</div>
			</main>
			<Footer />
		</>
	);
}
