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

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

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
									<br />I lived and worked in Singapore for three years, gaining
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

				{/* Is Counselling Right For Me Section */}
				<section className={styles.counsellingReflectionSection}>
					<div className={styles.counsellingReflectionContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<h3 className={styles.sectionTitleSmall}>IS COUNSELLING RIGHT FOR ME?</h3>
						</AnimatedSection>
						<AnimatedSection delay={200} animation="fadeInUp">
							<p className={styles.counsellingReflectionIntro}>
								You might be wondering if counselling is right for you. There's no threshold you need to meet, if you're experiencing something difficult, counselling can help.
							</p>
						</AnimatedSection>
						<AnimatedSection delay={300} animation="fadeInUp">
							<div className={styles.reflectionPrompts}>
								<ul className={styles.reflectionList}>
									<li>Are you going through something that feels overwhelming?</li>
									<li>Do you find yourself feeling stuck, repeating the same patterns?</li>
									<li>Would it help to talk through something with someone outside your usual circles?</li>
									<li>Are you curious about understanding yourself or your relationships better?</li>
								</ul>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={400} animation="fadeInUp">
							<p className={styles.counsellingReflectionConclusion}>
								If any of these resonate, counselling might be worth exploring. The first session is a chance to see if it feels right, there's no commitment beyond that.
							</p>
						</AnimatedSection>
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
					</div>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* Services Section */}
				<section id="services-section" className={styles.servicesSection}>
					<div className={styles.servicesContainer}>
						<div className={styles.servicesHeader}>
							<AnimatedSection delay={0} animation="fadeIn">
								<h3 className={styles.sectionTitleSmall}>SERVICES I OFFER</h3>
							</AnimatedSection>
							<Typewriter
								as="h2"
								className={styles.servicesTitle}
								text="Comprehensive Counselling Services"
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
										<Link
											href={service.link}
											className={styles.serviceItemLink}
											aria-label={`Learn more about ${service.title} services`}>
											<div className={styles.serviceItem}>
												<AnimatedImage
													src={service.image}
													alt={service.title}
													className={styles.serviceImage}
													animationStyle="style-1"
													delay={index * 50}
												/>
												<h3 className={styles.serviceCardTitle}>{service.title}</h3>
												<div className={styles.serviceCardIndicator}>
													<span className={styles.serviceCardIndicatorText}>View Details</span>
													<svg
														className={styles.serviceCardIndicatorIcon}
														width="20"
														height="20"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M9 18L15 12L9 6"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</div>
										</Link>
									</div>
								</AnimatedSection>
							))}
						</div>
						<AnimatedSection delay={600} animation="fadeIn">
							<div className={styles.exploreMoreContainer}>
								<a
									href="#booking-section"
									className={styles.exploreMoreButton}>
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
				<div className={styles.sectionDivider}></div>

				{/* What to Expect Section */}
				<section id="what-to-expect-section" className={styles.whatToExpectSection}>
					<div className={styles.whatToExpectContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<h3 className={styles.sectionTitleSmall}>WHAT TO EXPECT</h3>
						</AnimatedSection>
						<Typewriter
							as="h2"
							className={styles.whatToExpectTitle}
							text="Your First Session"
							speed={60}
							delay={500}
							showCursor={true}
							loop={false}
						/>
						<AnimatedSection delay={200} animation="fadeInUp">
							<div className={styles.expectSteps}>
								<div className={styles.expectStep}>
									<h4 className={styles.expectStepTitle}>Before the session</h4>
									<p className={styles.expectStepText}>
										You'll receive an email confirming the time and location. There's no need to prepare anything specific.
									</p>
								</div>
								<div className={styles.expectStep}>
									<h4 className={styles.expectStepTitle}>When you arrive</h4>
									<p className={styles.expectStepText}>
										You'll find a quiet, comfortable space. There's no receptionist, it's just the two of us, which helps create privacy.
									</p>
								</div>
								<div className={styles.expectStep}>
									<h4 className={styles.expectStepTitle}>The session itself</h4>
									<p className={styles.expectStepText}>
										The first session is different from ongoing sessions. I'll ask you what brings you here, what you're hoping for, and how you'd like to work together. You don't need to share everything immediately, we'll go at your pace.
									</p>
								</div>
								<div className={styles.expectStep}>
									<h4 className={styles.expectStepTitle}>After the session</h4>
									<p className={styles.expectStepText}>
										There's no pressure to commit to more sessions. We'll discuss what felt helpful and whether continuing feels right for you.
									</p>
								</div>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={600} animation="fadeIn">
							<div className={styles.exploreMoreContainer}>
								<a href="#booking-section" className={styles.exploreMoreButton}>
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
				<div className={styles.sectionDivider}></div>

				{/* Common Concerns Section */}
				<section id="common-concerns-section" className={styles.commonConcernsSection}>
					<div className={styles.commonConcernsContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<h3 className={styles.sectionTitleSmall}>COMMON CONCERNS</h3>
						</AnimatedSection>
						<Typewriter
							as="h2"
							className={styles.commonConcernsTitle}
							text="Questions You Might Have"
							speed={60}
							delay={500}
							showCursor={true}
							loop={false}
						/>
						<AnimatedSection delay={200} animation="fadeInUp">
							<div className={styles.concernsList}>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>What if I don't know what to say?</h4>
									<p className={styles.concernAnswer}>
										That's completely normal. Many people worry about this, but you don't need to have everything figured out. We'll start where you are, and I'll help guide the conversation. Sometimes silence is valuable too, we can sit with what's unsaid.
									</p>
								</div>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>What if I get emotional?</h4>
									<p className={styles.concernAnswer}>
										Being emotional in counselling is normal and welcome. This is a safe space for whatever you're feeling. I won't be uncomfortable or judgemental, emotions are part of what we're here to explore.
									</p>
								</div>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>What if it doesn't help?</h4>
									<p className={styles.concernAnswer}>
										That's a valid concern. Therapy is a collaborative process, and if something isn't working, we'll talk about it. Sometimes the approach needs to change, or it might be that another counsellor or type of support would be a better fit. The first session is a chance to see if we're a good match.
									</p>
								</div>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>Will everything I say be confidential?</h4>
									<p className={styles.concernAnswer}>
										Yes, everything we discuss is confidential. There are rare exceptions where I might need to share information, such as if there's a serious risk of harm, but I'll always aim to discuss this with you first. For children and young people, I'll explain confidentiality in an age-appropriate way. You can read more about this on our <Link href="/confidentiality" className={styles.concernLink}>confidentiality page</Link>.
									</p>
								</div>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={600} animation="fadeIn">
							<div className={styles.exploreMoreContainer}>
								<a href="#booking-section" className={styles.exploreMoreButton}>
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
				<div className={styles.sectionDivider}></div>

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
