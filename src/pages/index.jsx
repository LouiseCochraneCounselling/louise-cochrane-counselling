import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedImage from "../components/AnimatedImage";
import Typewriter from "../components/Typewriter";
import ScrollCue from "../components/ScrollCue";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					The Holding Space Jersey - Professional Support for Your Wellbeing
				</title>
				<meta
					name="description"
					content="The Holding Space Jersey offers professional counselling services and support for your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main} id="main-content">
				{/* Hero Section */}
				<section className={styles.heroSection}>
					<h1 className={styles.visuallyHidden}>
						The Holding Space Jersey - Professional Counselling Services
					</h1>
					<div className={styles.heroBackground}></div>
					<div className={styles.heroContainer}>
						<div className={styles.heroContent}>
							<div className={styles.heroLogoWrapper}>
								<img
									src="/images/logo.svg"
									alt="The Holding Space Jersey"
									className={styles.heroLogo}
								/>
							</div>
							<ScrollCue />
						</div>
					</div>
				</section>

				{/* About Section */}
				<section
					id="about-section"
					data-next-section
					className={styles.aboutSection}>
					<div className={styles.aboutContainer}>
						<div className={styles.aboutImages}>
							<AnimatedImage
								src="/images/me.jpg"
								alt="About me"
								className={styles.aboutMainImage}
								animationStyle="style-1"
								delay={0}
							/>
						</div>
						<div className={styles.aboutContent}>
							<AnimatedSection delay={0} animation="fadeIn">
								<h3 className={styles.sectionTitleSmall}>ABOUT ME</h3>
							</AnimatedSection>
							<Typewriter
								as="h2"
								className={styles.aboutTitle}
								text="Guiding minds, healing hearts, finding peace"
								speed={60}
								delay={500}
								showCursor={true}
								loop={false}
							/>
							<AnimatedSection delay={200} animation="slideInRight">
								<p className={styles.aboutDescription}>
									I am an empathetic and passionate, person-centred Counsellor
									with over eight years of experience supporting the mental
									health and wellbeing of children, young people, adults and
									families. I have worked across a range of settings, including
									schools, agencies, private practice, and international
									environments, with a strong focus on creating safe, trusting
									therapeutic relationships.
									<br />
									<br />
									I lived and worked in Singapore for three years, gaining
									valuable international experience in both private practice and
									an international school setting. Working with clients from
									diverse cultural backgrounds has deepened my understanding of
									identity, transition, belonging, and the unique challenges
									faced by children, young people, and families living in
									international or multicultural contexts.
								</p>
							</AnimatedSection>
							{/* All Links - Horizontal */}
							<AnimatedSection delay={300} animation="fadeIn">
								<div className={styles.aboutContentLinks}>
									<a
										href="#services-section"
										className={styles.scrollToContactLink}>
										<span className={styles.scrollToContactText}>
											Click to view my services
										</span>
									</a>
									<span className={styles.linkSeparator}></span>
									<Link href="/approach" className={styles.scrollToContactLink}>
										<span className={styles.scrollToContactText}>
											Click to read about my journey
										</span>
									</Link>
									<span className={styles.linkSeparator}></span>
									<Link href="/approach" className={styles.scrollToContactLink}>
										<span className={styles.scrollToContactText}>
											Click to read about my approach
										</span>
									</Link>
								</div>
							</AnimatedSection>
						</div>
					</div>
					<AnimatedSection delay={500} animation="fadeIn">
						<div className={styles.exploreMoreContainer}>
							<a href="#services-section" className={styles.exploreMoreButton}>
								<span className={styles.exploreMoreText}>Explore More</span>
								<svg
									className={styles.exploreMoreIcon}
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7 10L12 15L17 10"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</AnimatedSection>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* Services Section */}
				<section id="services-section" className={styles.servicesSection}>
					<div className={styles.servicesContainer}>
						<div className={styles.servicesHeader}>
							<AnimatedSection delay={0} animation="fadeIn">
								<h3 className={styles.sectionTitleSmall}>SERVICES</h3>
							</AnimatedSection>
							<Typewriter
								as="h2"
								className={styles.servicesTitle}
								text="Comprehensive services care for mind and wellness"
								speed={60}
								delay={500}
								showCursor={true}
								loop={false}
							/>
						</div>
						<div className={styles.servicesGrid}>
							{[
								{
									title: "Children – 8 years +",
									image: "/ch8.jpg",
									link: "/services#children",
								},
								{
									title: "Adolescents",
									image: "/adolescent.jpg",
									link: "/services#adolescents",
								},
								{
									title: "Adults",
									image: "/adult.jpg",
									link: "/services#adults",
								},
							].map((service, index) => (
								<AnimatedSection key={index} delay={index * 100}>
									<div className={styles.serviceItemWrapper}>
										<h2 className={styles.serviceItemTitle}>{service.title}</h2>
										<div className={styles.serviceItem}>
											<AnimatedImage
												src={service.image}
												alt={service.title}
												className={styles.serviceImage}
												animationStyle="style-1"
												delay={index * 50}
											/>
											<Link href={service.link} className={styles.serviceButton}>
												Read More
											</Link>
										</div>
									</div>
								</AnimatedSection>
							))}
						</div>
						<AnimatedSection delay={600} animation="fadeIn">
							<div className={styles.exploreMoreContainer}>
								<a href="#why-choose-section" className={styles.exploreMoreButton}>
									<span className={styles.exploreMoreText}>Explore More</span>
									<svg
										className={styles.exploreMoreIcon}
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7 10L12 15L17 10"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
							</div>
						</AnimatedSection>
					</div>
				</section>

				{/* Section Divider */}
				<div className={`${styles.sectionDivider} ${styles.showDesktop} ${styles.showTablet} ${styles.hideMobile}`}></div>

				{/* How I Can Help Section */}
				<section id="why-choose-section" className={styles.whyChooseSection}>
					<div className={styles.whyChooseContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<h3 className={styles.sectionTitleSmall}>HOW I CAN HELP</h3>
						</AnimatedSection>
						<Typewriter
							as="h2"
							className={styles.whyChooseTitle}
							text="Trusted Care, Lasting Positive Change"
							speed={60}
							delay={500}
							showCursor={true}
							loop={false}
						/>
						<AnimatedSection delay={200} animation="slideInLeft">
							<p className={styles.whyChooseDescription}>
								As a qualified counsellor with international experience, I
								bring a unique perspective to my practice. Having worked in
								Singapore and now serving the Jersey community, I understand
								the importance of culturally sensitive, compassionate care
								tailored to each individual's needs.
							</p>
						</AnimatedSection>
						<div className={styles.whyChooseList}>
							{[
								{
									icon: "fas fa-graduation-cap",
									title: "Fully Qualified",
									description:
										"I have completed all required counselling courses and qualifications, ensuring you receive professional, evidence-based support.",
								},
								{
									icon: "fas fa-globe",
									title: "International Experience",
									description:
										"My experience working as a counsellor in Singapore has given me valuable insights into supporting diverse clients from various backgrounds.",
								},
								{
									icon: "fas fa-home",
									title: "Local to Jersey",
									description:
										"Born and raised in Jersey, I understand the unique needs of our local community and am committed to providing accessible counselling services.",
								},
								{
									icon: "fas fa-heart",
									title: "Personalised Care",
									description:
										"As an independent practitioner, I provide one-on-one attention and tailor each session to your specific needs and goals.",
								},
							].map((item, index) => (
								<AnimatedSection key={index} delay={300 + index * 100}>
									<div className={styles.whyChooseItem}>
										<div className={styles.whyChooseIcon}>
											<i className={item.icon}></i>
										</div>
										<div className={styles.whyChooseItemContent}>
											<h3 className={styles.whyChooseItemTitle}>
												{item.title}
											</h3>
											<p className={styles.whyChooseItemDescription}>
												{item.description}
											</p>
										</div>
									</div>
								</AnimatedSection>
							))}
						</div>
					</div>
					<AnimatedSection delay={700} animation="fadeIn">
						<div className={styles.exploreMoreContainer}>
							<a href="#booking-section" className={styles.exploreMoreButton}>
								<span className={styles.exploreMoreText}>Contact Me</span>
								<svg
									className={styles.exploreMoreIcon}
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7 10L12 15L17 10"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</AnimatedSection>
				</section>

				{/* Booking Form */}
				<div id="booking-section" className={styles.bookingSectionWrapper}>
					<BookingForm />
					<AnimatedSection delay={400} animation="fadeIn">
						<div className={styles.exploreMoreContainer}>
							<a href="#" className={styles.exploreMoreButton}>
								<span className={styles.exploreMoreText}>Back to Top</span>
								<svg
									className={styles.exploreMoreIcon}
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7 14L12 9L17 14"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</AnimatedSection>
				</div>
			</main>
			<Footer />
		</>
	);
}
