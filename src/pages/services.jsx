import Link from 'next/link';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../styles/Page.module.css';
import homeStyles from '../styles/Home.module.css';

export default function Services() {
	return (
		<>
			<SEO
				title="Our Services - Louise Cochrane Counselling"
				description="Explore Louise Cochrane Counselling's range of counselling services designed to support your mental health and wellbeing."
				path="/services"
			/>
			<Header />
			<main className={styles.main} id='main-content'>
				<div className={styles.container}>
					{/* <AnimatedSection delay={0} animation="fadeIn">
						<p className={styles.sectionTitleSmall}>SERVICES</p>
					</AnimatedSection> */}
					<AnimatedSection delay={200} animation='fadeIn'>
						<h2 className={styles.pageTitle}>
							Comprehensive Counselling Services
						</h2>
					</AnimatedSection>

					<AnimatedSection delay={300} animation='fadeInUp'>
						<section id='children' className={styles.contentSection}>
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
									Your child might benefit from counselling if they're
									struggling with worries or anxiety, having trouble at school,
									experiencing friendship difficulties, or dealing with big
									changes like a family separation or moving house. Maybe they
									seem withdrawn, have angry outbursts, or are having trouble
									sleeping. Perhaps they're finding it hard to express how
									they're feeling, or you've noticed they're not quite
									themselves lately.
								</p>
								<p>
									Sessions with children often involve play, drawing, stories,
									or activities, whatever helps them express themselves. It's
									not like adult counselling where we just talk. Your child
									might build something, play a game, or read a book together
									while we explore what's on their mind. Each child's session
									always ends with a game or activity of their choice, helping
									them leave on a positive, regulated note and reinforcing that
									counselling is a supportive and enjoyable space. The focus is
									always on the child's unique needs, working at their pace, and
									collaborating with families and schools where appropriate to
									create a supportive environment that fosters lasting, positive
									change.
								</p>
							</div>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation='slideInLeft'>
						<section id='adolescents' className={styles.contentSection}>
							<div className={styles.serviceCard}>
								<h2>Adolescents</h2>
								<p>
									Adolescent counselling provides a safe and confidential space
									for teenagers to explore their thoughts, emotions, and
									experiences. Adolescence can be a time of rapid change,
									uncertainty, and pressure.
								</p>
								<p>
									You might be here because school feels overwhelming,
									relationships are complicated, or you're not sure who you are
									yet. Maybe you're feeling anxious about exams, struggling with
									friendships, or just feel different and don't know why.
									Perhaps you're finding it hard to talk to your parents,
									feeling low or anxious, or having trouble with self-esteem.
									There's no problem too small or too big, if it matters to you,
									it matters here.
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

					<AnimatedSection delay={500} animation='slideInRight'>
						<section id='adults' className={styles.contentSection}>
							<div className={styles.serviceCard}>
								<h2>Adults</h2>
								<p>
									Adult counselling offers a safe, non-judgemental space to
									explore life's challenges and develop strategies for positive
									change.
								</p>
								<p>
									You might be here because you're feeling stuck, overwhelmed,
									or just not quite yourself. Perhaps you're struggling with
									anxiety or low mood, going through a difficult relationship,
									or dealing with a major life change like a job loss,
									bereavement, or becoming a parent. Maybe you find yourself
									repeating the same patterns, struggling with stress at work,
									or feeling like you need someone to talk to outside your usual
									circles. Whatever brings you here, counselling can help.
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

					<AnimatedSection delay={600} animation='fadeIn'>
						<div className={styles.backButtonContainer}>
							<Link
								href='/#services-section'
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
