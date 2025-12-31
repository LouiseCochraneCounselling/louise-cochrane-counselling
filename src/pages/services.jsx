import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import Typewriter from "../components/Typewriter";
import styles from "../styles/Page.module.css";
import homeStyles from "../styles/Home.module.css";

export default function Services() {
	return (
		<>
			<Head>
				<title>Our Services - The Holding Space Jersey</title>
				<meta
					name="description"
					content="Explore The Holding Space Jersey range of counselling services designed to support your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<AnimatedSection delay={0} animation="fadeIn">
						<h3 className={styles.sectionTitleSmall}>SERVICES</h3>
					</AnimatedSection>
					<Typewriter
						as="h1"
						className={styles.pageTitle}
						text="Comprehensive Counselling Services"
						speed={60}
						delay={300}
						showCursor={true}
						loop={false}
					/>

					<AnimatedSection delay={200} animation="fadeInUp">
						<section id="children" className={styles.contentSection}>
							<div className={styles.serviceCard}>
								<h2>Children – 8 years +</h2>
								<p>
									Child counselling provides a safe and supportive space for
									children to express their thoughts, feelings, and experiences
									in ways that feel comfortable to them. Through play, books,
									conversation, and age-appropriate activities, children can
									explore emotions, develop a toolbox of coping strategies, and
									build resilience.
								</p>
								<p>
									Counselling can support children experiencing a range of
									different challenges, including anxiety, low mood, behavioural
									challenges, relationship difficulties, or difficulties at
									school. It also helps them navigate life transitions, family
									changes or experiences that feel overwhelming.
								</p>
								<p>
									The focus is always on the child's unique needs, working at
									their pace, and collaborating with families and schools where
									appropriate to create a supportive environment that fosters
									lasting, positive change.
								</p>
							</div>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="slideInLeft">
						<section id="adolescents" className={styles.contentSection}>
							<div className={styles.serviceCard}>
								<h2>Adolescents</h2>
								<p>
									Adolescent counselling provides a safe and confidential space
									for teenagers to explore their thoughts, emotions, and
									experiences. Adolescence can be a time of rapid change,
									uncertainty, and pressure, and counselling helps young people
									navigate challenges such as anxiety, low mood, stress,
									self-esteem issues, emotionally based school avoidance,
									relationships, and identity.
								</p>
								<p>
									Through a collaborative, supportive approach, adolescents can
									develop coping strategies, build resilience, and gain insight
									into their emotions and behaviours. When appropriate,
									counselling can involve families or schools to create a wider
									network of support and understanding.
								</p>
							</div>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="slideInRight">
						<section id="adults" className={styles.contentSection}>
							<div className={styles.serviceCard}>
								<h2>Adults</h2>
								<p>
									Adult counselling offers a safe, non-judgemental space to
									explore life's challenges and develop strategies for positive
									change. Adults may seek support for a range of issues,
									including anxiety, depression, stress, relationship
									difficulties, grief, life transitions, or challenges related
									to work and family.
								</p>
								<p>
									The counselling process is collaborative and tailored to each
									individual's needs, helping clients gain clarity, build
									resilience, and develop practical coping skills. Sessions
									provide a supportive environment to reflect, process
									experiences, and work towards meaningful and lasting personal
									growth.
								</p>
							</div>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={500} animation="fadeIn">
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
