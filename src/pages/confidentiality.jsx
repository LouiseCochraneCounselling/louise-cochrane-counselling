import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import styles from "../styles/Page.module.css";
import homeStyles from "../styles/Home.module.css";

export default function Confidentiality() {
	return (
		<>
			<Head>
				<title>Confidentiality & Safeguarding - Louise Cochrane Counselling</title>
				<meta
					name="description"
					content="Learn about confidentiality, safeguarding, and privacy policies at Louise Cochrane Counselling."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main} id="main-content">
				<div className={styles.container}>
					<AnimatedSection delay={0} animation="fadeIn">
						<p className={styles.sectionTitleSmall}>
							CONFIDENTIALITY & SAFEGUARDING
						</p>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="fadeInUp">
						<section className={styles.contentSection}>
							{/* <h2>Confidentiality</h2> */}
							<br></br>
							<p>
								Confidentiality is a fundamental part of counselling and helps
								create a safe and trusting therapeutic space. Everything shared
								in counselling is treated with respect and kept confidential in
								line with the BACP Ethical Framework and relevant legal and
								safeguarding responsibilities.
							</p>
							<p>
								What you share in sessions will not be disclosed to anyone
								without your consent. Personal information is stored securely
								and handled in accordance with data protection and privacy
								regulations.
							</p>
							<p>
								For children and young people, confidentiality is explained in
								an age-appropriate way. While parents or carers may wish to know
								what is discussed in sessions, the child or young person's
								privacy is respected wherever possible to support trust and
								openness in the therapeutic relationship.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="slideInLeft">
						<section className={styles.contentSection}>
							<h2>Limits to Confidentiality</h2>
							<p>
								There are some situations where confidentiality may need to be
								broken. This would only happen when there is:
							</p>
							<ul className={styles.serviceList}>
								<li>A risk of serious harm to yourself or someone else</li>
								<li>
									A safeguarding concern involving a child or vulnerable person
								</li>
								<li>A legal requirement to disclose information</li>
							</ul>
							<p>
								If a concern arises, I will always aim to discuss this with you
								(or with the young person, where appropriate) before sharing
								information, unless doing so would increase risk.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={500} animation="slideInRight">
						<section className={styles.contentSection}>
							<h2>Safeguarding</h2>
							<p>
								Safeguarding is about protecting the wellbeing and safety of
								children, young people, and vulnerable adults. I have a
								professional duty to act if there are concerns about abuse,
								neglect, or significant harm. In such cases, information may be
								shared with relevant services or professionals to ensure
								appropriate support and protection.
							</p>
							<p>
								I work collaboratively and transparently wherever possible,
								keeping your wellbeing at the centre of any decisions made.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={600} animation="fadeInUp">
						<section className={styles.contentSection}>
							<p style={{ textAlign: "center" }}>
								For details on how we collect, use, and protect your personal
								data, please see our{" "}
								<Link href="/privacy-policy">Privacy Policy</Link>.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={700} animation="fadeIn">
						<div className={styles.backButtonContainer}>
							<Link href="/" className={homeStyles.scrollToContactLink}>
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
