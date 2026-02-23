import Link from "next/link";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import styles from "../styles/Page.module.css";
import homeStyles from "../styles/Home.module.css";

export default function Approach() {
	return (
		<>
			<SEO
				title="My Approach - Louise Cochrane Counselling"
				description="Learn about Louise Cochrane's therapeutic approach to supporting your mental health and wellbeing."
				path="/journey-approach"
			/>
			<Header />
			<main className={styles.main} id="main-content">
				<div className={styles.container}>
					<AnimatedSection delay={200} animation="slideInRight">
						<section id="my-approach-section" className={styles.contentSection}>
							<h2>My Approach</h2>
							<p>
								My approach is collaborative, thoughtful, and tailored to the
								individual needs of each client. Working with me feels like
								having a conversation with someone who is genuinely interested
								in understanding your world. I won't give you advice or tell you
								what to do, instead, we'll explore together what's happening for
								you and what might help.
							</p>
							<p>
								I am a person centred, humanistic counsellor, trained in
								Cognitive Behavioural Therapy (CBT) and integrate elements from
								other evidence-based approaches, including Dialectical Behaviour
								Therapy (DBT) and Acceptance and Commitment Therapy (ACT). This
								means we might look at how your thoughts, feelings, and
								behaviours are connected, and I'll always check in with you
								about what's helpful and what isn't. I use age-appropriate
								interventions that support emotional regulation, resilience, and
								self-understanding.
							</p>
							<p>
								You're the expert on your own life. My role is to create a safe
								space where you can explore, reflect, and find your own way
								forward. I have extensive experience working alongside families,
								schools, and multidisciplinary teams, recognising the importance
								of creating supportive environments around young people to
								foster lasting, positive change.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="fadeIn">
						<div className={styles.backButtonContainer}>
							<Link
								href="/#about-section"
								className={homeStyles.scrollToContactLink}>
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
