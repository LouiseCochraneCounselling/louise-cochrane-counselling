import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import AnimatedSection from "../components/AnimatedSection";
``;
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedImage from "../components/AnimatedImage";
import Image from "next/image";
import ScrollCue from "../components/ScrollCue";
import ExploreMoreButton from "../components/ExploreMoreButton";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	// Ensure page always starts at top on page refresh, regardless of hash in URL
	useEffect(() => {
		if (typeof window === "undefined") return;

		// On component mount (page load/refresh), ensure we're at #home
		// The _document.jsx script handles the initial scroll, this is a backup
		if (window.location.hash && window.location.hash !== "#home") {
			window.history.replaceState(null, "", "#home");
		}

		// Scroll to #home section (top of page) as backup
		const homeSection = document.getElementById("home");
		if (homeSection) {
			setTimeout(() => {
				homeSection.scrollIntoView({ behavior: "instant", block: "start" });
			}, 10);
		} else {
			window.scrollTo(0, 0);
		}

		// Disable scroll restoration for this page load
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}
	}, []);

	return (
		<>
			<Head>
				<title>
					Louise Cochrane Counselling - Professional Support for Your Wellbeing
				</title>
				<meta
					name="description"
					content="Louise Cochrane Counselling offers professional counselling services and support for your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main} id="main-content">
				{/* Hero Section */}
				<section id="home" className={styles.heroSection}>
					<h1 className={styles.visuallyHidden}>
						Louise Cochrane Counselling - Professional Counselling Services
					</h1>
					<div className={styles.heroBackground}></div>
					<div className={styles.heroContainer}>
						<div className={styles.heroContent}>
							<div className={styles.heroLogoWrapper}>
								<Image
									src="/images/logo.svg"
									alt="Louise Cochrane Counselling"
									width={750}
									height={375}
									className={styles.heroLogo}
									sizes="(max-width: 639px) 90vw, (max-width: 1024px) 50vw, 500px"
									aria-hidden="true"
									priority
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
								src="/images/me.jpeg"
								alt="About me"
								className={styles.aboutMainImage}
								animationStyle="style-1"
								delay={0}
								width={480}
								height={540}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
							/>
							<div className={styles.aboutImageMeta}>
								<div className={styles.aboutImageBadge}>
									<img
										src="/images/mbacp.svg"
										alt="MBACP accredited professional body logo"
										className={styles.aboutAccreditationLogo}
									/>
								</div>
								<div className={styles.aboutImageBadge}>
									<a
										href="https://www.linkedin.com/in/louise-mollet-b8a1b4a4/"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.linkedinLink}
										aria-label="Connect on LinkedIn">
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
												fill="currentColor"
											/>
										</svg>
										<span>LinkedIn</span>
									</a>
								</div>
							</div>
						</div>
						<div className={styles.aboutContent}>
							<AnimatedSection delay={0} animation="fadeIn">
								<h2 className={styles.sectionTitleSmall}>ABOUT ME</h2>
							</AnimatedSection>
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
									<Link
										href="/journey-approach#my-approach-section"
										className={styles.scrollToContactLink}>
										<span className={styles.scrollToContactText}>
											Click to read about my approach
										</span>
									</Link>
								</div>
							</AnimatedSection>
						</div>
					</div>
					<AnimatedSection delay={500} animation="fadeIn">
						<ExploreMoreButton href="#is-counselling-right-for-me" />
					</AnimatedSection>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* Is Counselling Right For Me Section */}

				<section
					className={styles.counsellingReflectionSection}
					id="is-counselling-right-for-me">
					<div className={styles.counsellingReflectionContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<h2 className={styles.sectionTitleSmall}>
								IS COUNSELLING RIGHT FOR ME?
							</h2>
						</AnimatedSection>
						<AnimatedSection delay={200} animation="fadeInUp">
							<p className={styles.counsellingReflectionIntro}>
								You might be wondering if counselling is right for you. There's
								no threshold you need to meet, if you're experiencing something
								difficult, counselling can help.
							</p>
						</AnimatedSection>
						<AnimatedSection delay={300} animation="fadeInUp">
							<div className={styles.reflectionPrompts}>
								<ul className={styles.reflectionList}>
									<li>
										Are you going through something that feels overwhelming?
									</li>
									<li>
										Do you find yourself feeling stuck, repeating the same
										patterns?
									</li>
									<li>
										Would it help to talk through something with someone outside
										your usual circles?
									</li>
									<li>
										Are you curious about understanding yourself or your
										relationships better?
									</li>
								</ul>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={400} animation="fadeInUp">
							<p className={styles.counsellingReflectionConclusion}>
								If any of these resonate, counselling might be worth exploring.
								The first session is a chance to see if it feels right, there's
								no commitment beyond that.
							</p>
						</AnimatedSection>
						<AnimatedSection delay={500} animation="fadeIn">
							<ExploreMoreButton href="#services-section" />
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
								<p className={styles.sectionTitleSmall}>SERVICES I OFFER</p>
							</AnimatedSection>
							{/* <AnimatedSection delay={200} animation="fadeIn">
								<h2 className={styles.servicesTitle}>
									Comprehensive Counselling Services
								</h2>
							</AnimatedSection> */}
						</div>
						<div className={styles.servicesGrid}>
							{[
								{
									title: "Children – 8 years +",
									image: "/images/ch8.jpg",
									link: "/services#children",
								},
								{
									title: "Adolescents",
									image: "/images/adolescent.jpg",
									link: "/services#adolescents",
								},
								{
									title: "Adults",
									image: "/images/adult.jpg",
									link: "/services#adults",
								},
							].map((service, index) => (
								<AnimatedSection key={index} delay={index * 100}>
									<div className={styles.serviceItemWrapper}>
										<h3 className={styles.serviceItemTitle}>{service.title}</h3>
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
													width={600}
													height={400}
													sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
												/>
												<h4 className={styles.serviceCardTitle}>
													{service.title}
												</h4>
												<div className={styles.serviceCardIndicator}>
													<span className={styles.serviceCardIndicatorText}>
														View Details
													</span>
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
							<ExploreMoreButton href="#what-to-expect-section" />
						</AnimatedSection>
					</div>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* What to Expect Section */}
				<section
					id="what-to-expect-section"
					className={styles.whatToExpectSection}>
					<div className={styles.whatToExpectContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<p className={styles.sectionTitleSmall}>WHAT TO EXPECT</p>
						</AnimatedSection>
						{/* <AnimatedSection delay={200} animation="fadeIn">
							<h2 className={styles.whatToExpectTitle}>
								What to Expect From Sessions
							</h2>
						</AnimatedSection> */}
						<AnimatedSection delay={300} animation="fadeInUp">
							<div className={styles.whatToExpectContent}>
								<div className={styles.expectSection}>
									<h4 className={styles.expectSectionTitle}>Session Length</h4>
									<p className={styles.expectSectionText}>
										A counselling session is 50 minutes. For children, session
										length is flexible and can be adjusted if needed, including
										shorter sessions (such as around 30 minutes), depending on
										the child's needs and capacity.
									</p>
								</div>
								<div className={styles.expectSection}>
									<h4 className={styles.expectSectionTitle}>
										Session Frequency
									</h4>
									<p className={styles.expectSectionText}>
										Sessions are commonly held weekly, especially at the
										beginning of therapy, as this helps build consistency and
										momentum. That said, frequency is always flexible and can
										change over time depending on individual needs, goals, and
										circumstances.
									</p>
								</div>
								<div className={styles.expectSection}>
									<h4 className={styles.expectSectionTitle}>
										How Sessions Progress
									</h4>
									<p className={styles.expectSectionText}>
										Counselling is not a rigid or one-size-fits-all process.
										Sessions are tailored to each individual, and we move at a
										pace that feels safe and supportive for you (or your child).
									</p>
									<p className={styles.expectSectionText}>
										In general, early sessions focus on getting to know each
										other, building trust and a sense of safety, and
										understanding what has brought you to counselling and what
										you'd like support with.
									</p>
									<p className={styles.expectSectionText}>
										As sessions continue, we work collaboratively to explore
										thoughts, feelings, and experiences, develop understanding,
										coping strategies, and emotional awareness, and support
										positive change and growth in a way that feels manageable.
										There is no fixed agenda — sessions are guided by what feels
										most important to you at the time.
									</p>
								</div>
								<div className={styles.expectSection}>
									<h4 className={styles.expectSectionTitle}>
										Working With Children
									</h4>
									<p className={styles.expectSectionText}>
										Sessions with children are designed to be engaging,
										creative, and age-appropriate. Rather than relying solely on
										conversation, sessions may include play-based activities,
										games, books and stories, drawing, videos, or other creative
										tools. These approaches help children explore and express
										feelings in ways that feel natural and safe for them.
									</p>
									<p className={styles.expectSectionText}>
										Each child's session always ends with a game or activity of
										their choice, helping them leave on a positive, regulated
										note and reinforcing that counselling is a supportive and
										enjoyable space.
									</p>
								</div>
								<div className={styles.expectSection}>
									<h4 className={styles.expectSectionTitle}>
										Your First Session
									</h4>
									<p className={styles.expectSectionText}>
										The first session is a chance to get to know each other.
										I'll ask you what brings you here, what you're hoping for,
										and how you'd like to work together. You don't need to share
										everything immediately, we'll go at your pace. There's no
										pressure to commit to more sessions — we'll discuss what
										felt helpful and whether continuing feels right for you.
									</p>
								</div>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={600} animation="fadeIn">
							<ExploreMoreButton href="#counselling-room-section" />
						</AnimatedSection>
					</div>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* Counselling Room Section */}
				<section
					id="counselling-room-section"
					className={styles.counsellingRoomSection}>
					<div className={styles.counsellingRoomContainer}>
						<AnimatedSection delay={0} animation="fadeIn">
							<p className={styles.sectionTitleSmall}>THE COUNSELLING ROOM</p>
						</AnimatedSection>
						{/* <AnimatedSection delay={200} animation='fadeIn'>
							<h2 className={styles.counsellingRoomTitle}>
								A Welcoming and Comfortable Environment
							</h2>
						</AnimatedSection> */}
						<AnimatedSection delay={300} animation="fadeInUp">
							<div className={styles.counsellingRoomContent}>
								<div className={styles.counsellingRoomText}>
									<p className={styles.counsellingRoomDescription}>
										I understand that coming to counselling can feel daunting,
										especially if you're not sure what to expect. That's why I
										want you to see the space where our sessions will take place
										— a warm, comfortable, and private room designed to help you
										feel safe and at ease.
									</p>
									<p className={styles.counsellingRoomDescription}>
										The counselling room is a calm and welcoming environment
										where you can feel free to be yourself. It's a space where
										you can share what's on your mind without judgment, explore
										your thoughts and feelings, and work towards positive change
										at your own pace.
									</p>
									<p className={styles.counsellingRoomDescription}>
										Whether you're coming alone, with your child, or as a
										family, the room is set up to be flexible and accommodating
										to your needs. There's comfortable seating, natural light,
										and a peaceful atmosphere that helps create a sense of
										safety and trust.
									</p>
								</div>
								<div className={styles.counsellingRoomImages}>
									<AnimatedImage
										src="/images/room.jpeg"
										alt="Warm and cozy counselling room with comfortable sofa where two people can sit and have a conversation in a safe, welcoming environment"
										className={styles.counsellingRoomImage}
										animationStyle="style-1"
										delay={300}
										width={480}
										height={320}
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
									/>
								</div>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={600} animation="fadeIn">
							<ExploreMoreButton href="#common-concerns-section" />
						</AnimatedSection>
					</div>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* Common Concerns Section */}
				<section
					id="common-concerns-section"
					className={styles.commonConcernsSection}>
					<div className={styles.commonConcernsContainer}>
						{/* <AnimatedSection delay={0} animation='fadeIn'>
							<p className={styles.sectionTitleSmall}>COMMON CONCERNS</p>
						</AnimatedSection> */}
						<AnimatedSection delay={200} animation="fadeIn">
							<h2 className={styles.commonConcernsTitle}>
								Questions You Might Have
							</h2>
						</AnimatedSection>
						<AnimatedSection delay={300} animation="fadeInUp">
							<div className={styles.concernsList}>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>
										What if I don't know what to say?
									</h4>
									<p className={styles.concernAnswer}>
										That's completely normal. Many people worry about this, but
										you don't need to have everything figured out. We'll start
										where you are, and I'll help guide the conversation.
										Sometimes silence is valuable too, we can sit with what's
										unsaid.
									</p>
								</div>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>
										What if I get emotional?
									</h4>
									<p className={styles.concernAnswer}>
										Being emotional in counselling is normal and welcome. This
										is a safe space for whatever you're feeling. I won't be
										uncomfortable or judgemental, emotions are part of what
										we're here to explore.
									</p>
								</div>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>
										What if it doesn't help?
									</h4>
									<p className={styles.concernAnswer}>
										That's a valid concern. Therapy is a collaborative process,
										and if something isn't working, we'll talk about it.
										Sometimes the approach needs to change, or it might be that
										another counsellor or type of support would be a better fit.
										The first session is a chance to see if we're a good match.
									</p>
								</div>
								<div className={styles.concernItem}>
									<h4 className={styles.concernQuestion}>
										Will everything I say be confidential?
									</h4>
									<p className={styles.concernAnswer}>
										Yes, everything we discuss is confidential. There are rare
										exceptions where I might need to share information, such as
										if there's a serious risk of harm, but I'll always aim to
										discuss this with you first. For children and young people,
										I'll explain confidentiality in an age-appropriate way. You
										can read more about this on our{" "}
										<Link
											href="/confidentiality"
											className={styles.concernLink}>
											confidentiality page
										</Link>
										.
									</p>
								</div>
							</div>
						</AnimatedSection>
						<AnimatedSection delay={600} animation="fadeIn">
							<ExploreMoreButton href="#booking-section" />
						</AnimatedSection>
					</div>
				</section>

				{/* Section Divider */}
				<div className={styles.sectionDivider}></div>

				{/* Booking Form */}
				<div id="booking-section" className={styles.bookingSectionWrapper}>
					<BookingForm />
					<AnimatedSection delay={400} animation="fadeIn">
						<ExploreMoreButton
							href="#home"
							text="Back to Top"
							iconDirection="up"
						/>
					</AnimatedSection>
				</div>
			</main>
			<Footer />
		</>
	);
}
