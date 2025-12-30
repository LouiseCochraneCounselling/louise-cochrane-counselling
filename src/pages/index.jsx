import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedImage from "../components/AnimatedImage";
import Typewriter from "../components/Typewriter";
import ScrollIndicator from "../components/ScrollIndicator";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// AIRCORD STYLE - Remove this import to revert
import { USE_AIRCORD_STYLE } from "../config/featureFlags";
import LoadingScreen_AircordStyle from "../components/LoadingScreen_AircordStyle";

export default function Home() {
	// AIRCORD STYLE - Remove this state to revert
	const [isLoaded, setIsLoaded] = useState(!USE_AIRCORD_STYLE);

	// Debug middleware - check if we should be redirected
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Check debug API
			fetch('/api/debug-middleware')
				.then(res => res.json())
				.then(data => {
					console.log('🔍 [Middleware Debug API]', data);
					if (data.middlewareShouldRedirect) {
						console.warn('⚠️ [Middleware] You should be redirected to /coming-soon but middleware may not be working');
					}
				})
				.catch(err => console.error('❌ [Middleware Debug] Error:', err));

			// Check if middleware headers are present
			fetch(window.location.pathname, { method: 'HEAD' })
				.then(res => {
					const middlewareHeader = res.headers.get('X-Middleware-Executed');
					const shouldRedirect = res.headers.get('X-Middleware-Should-Redirect');
					const hostname = res.headers.get('X-Middleware-Hostname');
					
					console.log('🔍 [Middleware Headers]', {
						'X-Middleware-Executed': middlewareHeader,
						'X-Middleware-Should-Redirect': shouldRedirect,
						'X-Middleware-Hostname': hostname,
						'X-Middleware-Path': res.headers.get('X-Middleware-Path'),
					});

					if (!middlewareHeader) {
						console.error('❌ [Middleware] Middleware is NOT running! X-Middleware-Executed header is missing.');
					} else if (shouldRedirect === 'true') {
						console.warn('⚠️ [Middleware] Middleware detected redirect needed but redirect did not happen. Check Vercel logs.');
					}
				})
				.catch(err => console.error('❌ [Middleware Headers] Error:', err));
		}
	}, []);

	// #region agent log
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const heroBg = document.querySelector(`.${styles.heroBackground}`);
			const heroSection = document.querySelector(`.${styles.heroSection}`);
			const computedBg = heroBg ? window.getComputedStyle(heroBg) : null;
			const computedSection = heroSection ? window.getComputedStyle(heroSection) : null;
			const cssVar = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-mauve');
			
			fetch('http://127.0.0.1:7243/ingest/a21c6cec-5927-421c-b6eb-9c88a6d6b774',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.jsx:useEffect',message:'Hero background debug',data:{heroBgExists:!!heroBg,heroSectionExists:!!heroSection,heroBgWidth:heroBg?.offsetWidth,heroBgHeight:heroBg?.offsetHeight,heroBgBgColor:computedBg?.backgroundColor,heroBgBgImage:computedBg?.backgroundImage,heroSectionBgColor:computedSection?.backgroundColor,cssVarValue:cssVar.trim(),heroBgOpacity:computedBg?.opacity,heroBgZIndex:computedBg?.zIndex},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D,E'})}).catch(()=>{});
		}
	}, [isLoaded, styles.heroBackground, styles.heroSection]);
	// #endregion agent log

	// AIRCORD STYLE - Remove this useEffect to revert
	useEffect(() => {
		if (USE_AIRCORD_STYLE) {
			if (document.fonts) {
				document.fonts.ready.then(() => {
					setTimeout(() => setIsLoaded(true), 500);
				});
			} else {
				setTimeout(() => setIsLoaded(true), 1500);
			}
		}
	}, []);

	// AIRCORD STYLE - Memoize callback to prevent useEffect re-runs in LoadingScreen
	const handleLoaded = useCallback(() => {
		setIsLoaded(true);
	}, []);

	// #region agent log
	useEffect(() => {
		if (typeof window !== 'undefined' && isLoaded) {
			setTimeout(() => {
				const heroBg = document.querySelector(`.${styles.heroBackground}`);
				const heroSection = document.querySelector(`.${styles.heroSection}`);
				if (heroBg && heroSection) {
					const computedBg = window.getComputedStyle(heroBg);
					const computedSection = window.getComputedStyle(heroSection);
					const cssVar = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-mauve');
					const rect = heroBg.getBoundingClientRect();
					
					// Check pseudo-elements via computed styles
					const beforeBgColor = window.getComputedStyle(heroBg, '::before').backgroundColor;
					const afterBgImage = window.getComputedStyle(heroBg, '::after').backgroundImage;
					const afterOpacity = window.getComputedStyle(heroBg, '::after').opacity;
					
					fetch('http://127.0.0.1:7243/ingest/a21c6cec-5927-421c-b6eb-9c88a6d6b774',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.jsx:useEffect-delayed-postfix',message:'Post-fix verification',data:{heroBgWidth:rect.width,heroBgHeight:rect.height,heroBgBgColor:computedBg.backgroundColor,heroBgBgImage:computedBg.backgroundImage,beforeBgColor:beforeBgColor,afterBgImage:afterBgImage,afterOpacity:afterOpacity,heroSectionBgColor:computedSection.backgroundColor,cssVarValue:cssVar.trim()},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'FIX'})}).catch(()=>{});
				}
			}, 500);
		}
	}, [isLoaded, styles.heroBackground, styles.heroSection]);
	// #endregion agent log

	return (
		<>
			{/* AIRCORD STYLE - Remove this component to revert */}
			{USE_AIRCORD_STYLE && (
				<LoadingScreen_AircordStyle onLoaded={handleLoaded} />
			)}

			{(!USE_AIRCORD_STYLE || isLoaded) && (
				<>
					<Head>
						<title>
							The Holding Space - Professional Support for Your Wellbeing
						</title>
						<meta
							name="description"
							content="The Holding Space offers professional counselling services and support for your mental health and wellbeing."
						/>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<Header />
					<main className={styles.main}>
					{/* Hero Section */}
					<section className={styles.heroSection}>
						<div className={styles.heroBackground}></div>
						<div className={styles.heroContainer}>
							<div className={styles.heroContent}>
								{/* Hero content removed - logo is now the hero background */}
							</div>
						</div>
						<ScrollIndicator />
					</section>

						{/* About Section */}
						<section id="about-section" className={styles.aboutSection}>
							<div
								className={styles.aboutContainer}
								data-scroll-button-container>
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
											Born and raised in Jersey, I have dedicated my career to
											helping individuals navigate life's challenges. After
											completing comprehensive counselling training and
											qualifications, I gained valuable experience working as a
											counsellor in Singapore, where I supported diverse clients
											from various cultural backgrounds. Now back in Jersey, I
											am committed to providing compassionate, professional
											counselling services to my local community.
										</p>
									</AnimatedSection>
									<div className={styles.aboutGrid}>
										<AnimatedSection delay={300} animation="slideInLeft">
											<div className={styles.aboutCard}>
												<h2 className={styles.aboutCardTitle}>My Journey</h2>
												<p>
													From Jersey to Singapore and back again, my journey
													has been shaped by diverse experiences and a deep
													commitment to helping others. I've completed all
													required counselling qualifications and gained
													invaluable experience working with clients across
													different cultures and backgrounds.
												</p>
											</div>
										</AnimatedSection>
										<AnimatedSection delay={400} animation="slideInRight">
											<div className={styles.aboutCard}>
												<h2 className={styles.aboutCardTitle}>My Approach</h2>
												<ul className={styles.missionList}>
													<li>
														<i className="far fa-check-circle"></i>
														<span>Qualified and Experienced Counsellor</span>
													</li>
													<li>
														<i className="far fa-check-circle"></i>
														<span>International Experience in Singapore</span>
													</li>
													<li>
														<i className="far fa-check-circle"></i>
														<span>Compassionate, Client-Centred Care</span>
													</li>
												</ul>
											</div>
										</AnimatedSection>
									</div>
									<div className={styles.aboutButtons}>
										<AnimatedSection delay={500} animation="scaleIn">
											<Link href="/about" className={styles.aboutButton}>
												Learn More
											</Link>
										</AnimatedSection>
									</div>
								</div>
							</div>
						</section>

						{/* Services Section */}
						<section id="services-section" className={styles.servicesSection}>
							<div
								className={styles.servicesContainer}
								data-scroll-button-container>
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
									<AnimatedSection delay={200} animation="scaleIn">
										<Link href="/services" className={styles.viewAllButton}>
											View All Services
										</Link>
									</AnimatedSection>
								</div>
								<div className={styles.servicesGrid}>
									{[
										{
											title: "personalised individual therapy",
											image:
												"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=80",
											link: "/services/individual",
										},
										{
											title: "supportive couples counselling",
											image:
												"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=800&fit=crop&q=80",
											link: "/services/couples",
										},
										{
											title: "youth and adolescent counselling",
											image:
												"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop&q=80",
											link: "/services/youth",
										},
										{
											title: "anxiety and depression support",
											image:
												"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop&q=80",
											link: "/services/anxiety",
										},
										{
											title: "stress and anger management",
											image:
												"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&q=80",
											link: "/services/stress",
										},
									].map((service, index) => (
										<AnimatedSection key={index} delay={index * 100}>
											<div className={styles.serviceItem}>
												<AnimatedImage
													src={service.image}
													alt={service.title}
													className={styles.serviceImage}
													animationStyle="style-1"
													delay={index * 50}
												/>
												<h2 className={styles.serviceItemTitle}>
													{service.title}
												</h2>
												<Link
													href={service.link}
													className={styles.serviceButton}>
													<span>Read More</span>
													<svg
														width="20"
														height="21"
														viewBox="0 0 20 21"
														fill="none">
														<path
															d="M1.66619 11.0955H16.3212L11.9104 15.5063C11.8308 15.5832 11.7673 15.6752 11.7236 15.7768C11.6799 15.8785 11.6569 15.9879 11.656 16.0985C11.655 16.2092 11.6761 16.3189 11.718 16.4213C11.7599 16.5237 11.8218 16.6168 11.9 16.695C11.9783 16.7733 12.0713 16.8351 12.1737 16.877C12.2761 16.9189 12.3859 16.94 12.4965 16.9391C12.6072 16.9381 12.7165 16.9151 12.8182 16.8714C12.9199 16.8278 13.0118 16.7643 13.0887 16.6847L18.922 10.8513C19.0783 10.6951 19.166 10.4832 19.166 10.2622C19.166 10.0412 19.0783 9.82929 18.922 9.67301L13.0887 3.83968C12.9315 3.68788 12.721 3.60389 12.5025 3.60578C12.284 3.60768 12.075 3.69532 11.9205 3.84983C11.766 4.00434 11.6784 4.21335 11.6765 4.43185C11.6746 4.65034 11.7586 4.86085 11.9104 5.01801L16.3212 9.42885H1.66619C1.44518 9.42885 1.23322 9.51664 1.07694 9.67292C0.920658 9.82921 0.832861 10.0412 0.832861 10.2622C0.832861 10.4832 0.920658 10.6952 1.07694 10.8514C1.23322 11.0077 1.44518 11.0955 1.66619 11.0955Z"
															fill="currentColor"></path>
													</svg>
												</Link>
											</div>
										</AnimatedSection>
									))}
								</div>
							</div>
						</section>

						{/* Why Choose Us Section */}
						<section
							id="why-choose-section"
							className={styles.whyChooseSection}>
							<div
								className={styles.whyChooseContainer}
								data-scroll-button-container>
								<div className={styles.whyChooseImages}>
									<AnimatedImage
										src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&q=80"
										alt="Professional Counselling in Jersey"
										className={styles.whyChooseImg1}
										animationStyle="style-1"
										delay={0}
									/>
									<AnimatedImage
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80"
										alt="Compassionate Counselling Services"
										className={styles.whyChooseImg2}
										animationStyle="style-1"
										delay={100}
									/>
								</div>
								<div className={styles.whyChooseContent}>
									<AnimatedSection delay={0} animation="fadeIn">
										<h3 className={styles.sectionTitleSmall}>WHY CHOOSE US</h3>
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
											bring a unique perspective to my practice. Having worked
											in Singapore and now serving the Jersey community, I
											understand the importance of culturally sensitive,
											compassionate care tailored to each individual's needs.
										</p>
									</AnimatedSection>
									<div className={styles.whyChooseGrid}>
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
													<h3 className={styles.whyChooseItemTitle}>
														{item.title}
													</h3>
													<p className={styles.whyChooseItemDescription}>
														{item.description}
													</p>
												</div>
											</AnimatedSection>
										))}
									</div>
									<div className={styles.whyChooseBottom}>
										<AnimatedSection delay={700}>
											<Typewriter
												as="h2"
												className={styles.whyChooseBottomTitle}
												text="Choosing Us for Mental Wellness"
												speed={60}
												delay={800}
												showCursor={true}
												loop={false}
											/>
											<p>
												Choosing me as your counsellor means working with
												someone who is fully qualified, experienced, and
												dedicated to your wellbeing. My journey from Jersey to
												Singapore and back has enriched my practice, allowing me
												to offer compassionate, culturally aware counselling
												that respects your unique story and supports your path
												toward healing and growth.
											</p>
											<Link href="/contact" className={styles.whyChooseButton}>
												Contact Us
											</Link>
										</AnimatedSection>
									</div>
								</div>
							</div>
						</section>

						{/* Booking Form */}
						<div id="booking-section">
							<BookingForm />
						</div>
					</main>
					<Footer />
				</>
			)}
		</>
	);
}
