import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedImage from "../components/AnimatedImage";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Counselling Services - Professional Support for Your Wellbeing
				</title>
				<meta
					name="description"
					content="Professional counselling services offering support for your mental health and wellbeing."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				{/* Hero Section */}
				<section className={styles.heroSection}>
					<div className={styles.heroBackground}></div>
					<div className={styles.heroContainer}>
						<div className={styles.heroContent}>
							<AnimatedHeading
								as="h1"
								className={styles.heroTitle}
								style="style-2"
								delay={100}>
								Welcome to LC Counselling
							</AnimatedHeading>

							<AnimatedSection delay={600}>
								<ul className={styles.heroList}>
									<li>
										<i className="far fa-check-circle"></i>
										<span>Individual Counselling</span>
									</li>
									<li>
										<i className="far fa-check-circle"></i>
										<span>Couple Counselling</span>
									</li>
									<li>
										<i className="far fa-check-circle"></i>
										<span>Child Counselling</span>
									</li>
									<li>
										<i className="far fa-check-circle"></i>
										<span>Family Counselling</span>
									</li>
								</ul>
							</AnimatedSection>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section className={styles.aboutSection}>
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
							<AnimatedSection delay={0}>
								<h3 className={styles.sectionTitleSmall}>ABOUT US</h3>
							</AnimatedSection>
							<AnimatedHeading
								as="h2"
								className={styles.aboutTitle}
								style="style-2"
								delay={100}>
								Guiding minds, healing hearts, finding peace
							</AnimatedHeading>
							<AnimatedSection delay={200}>
								<p className={styles.aboutDescription}>
									At our mental therapy and counseling center, we are dedicated
									to guiding individuals on a journey toward inner peace and
									resilience.
								</p>
							</AnimatedSection>
							<div className={styles.aboutGrid}>
								<AnimatedSection delay={300}>
									<div className={styles.aboutCard}>
										<h2 className={styles.aboutCardTitle}>Our Vision</h2>
										<p>
											Our vision is to create a world where mental wellness is
											accessible, stigma-free, and empowering, enabling
											individuals to lead.
										</p>
									</div>
								</AnimatedSection>
								<AnimatedSection delay={400}>
									<div className={styles.aboutCard}>
										<h2 className={styles.aboutCardTitle}>Our Mission</h2>
										<ul className={styles.missionList}>
											<li>
												<i className="far fa-check-circle"></i>
												<span>Provide Compassionate Care</span>
											</li>
											<li>
												<i className="far fa-check-circle"></i>
												<span>Promote Mental Wellness</span>
											</li>
											<li>
												<i className="far fa-check-circle"></i>
												<span>Encourage Lifelong Healing</span>
											</li>
										</ul>
									</div>
								</AnimatedSection>
							</div>
							<div className={styles.aboutButtons}>
								<AnimatedSection delay={500}>
									<Link href="/about" className={styles.aboutButton}>
										Learn More
									</Link>
								</AnimatedSection>
							</div>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section className={styles.servicesSection}>
					<div className={styles.servicesContainer}>
						<div className={styles.servicesHeader}>
							<AnimatedSection delay={0}>
								<h3 className={styles.sectionTitleSmall}>SERVICES</h3>
							</AnimatedSection>
							<AnimatedHeading
								as="h2"
								className={styles.servicesTitle}
								style="style-2"
								delay={100}>
								Comprehensive services care for mind and wellness
							</AnimatedHeading>
							<AnimatedSection delay={200}>
								<Link href="/services" className={styles.viewAllButton}>
									View All Services
								</Link>
							</AnimatedSection>
						</div>
						<div className={styles.servicesGrid}>
							{[
								{
									title: "personalized individual therapy",
									// image: "/images/service-image-1.jpg",
									link: "/services/individual",
								},
								{
									title: "supportive couples counseling",
									// image: "/images/service-image-2.jpg",
									link: "/services/couples",
								},
								{
									title: "youth and adolescent counseling",
									// image: "/images/service-image-3.jpg",
									link: "/services/youth",
								},
								{
									title: "anxiety and depression support",
									//  image: "/images/service-image-4.jpg",
									link: "/services/anxiety",
								},
								{
									title: "stress and anger management",
									// image: "/images/service-image-5.jpg",
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
										<h2 className={styles.serviceItemTitle}>{service.title}</h2>
										<Link href={service.link} className={styles.serviceButton}>
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
				<section className={styles.whyChooseSection}>
					<div className={styles.whyChooseContainer}>
						<div className={styles.whyChooseImages}>
							<AnimatedImage
								src="/images/why-choose-img-1.jpg"
								alt="Why Choose Us"
								className={styles.whyChooseImg1}
								animationStyle="style-1"
								delay={0}
							/>
							<AnimatedImage
								src="/images/why-choose-img-2.jpg"
								alt="Why Choose Us"
								className={styles.whyChooseImg2}
								animationStyle="style-1"
								delay={100}
							/>
						</div>
						<div className={styles.whyChooseContent}>
							<AnimatedSection delay={0}>
								<h3 className={styles.sectionTitleSmall}>WHY CHOOSE US</h3>
							</AnimatedSection>
							<AnimatedHeading
								as="h2"
								className={styles.whyChooseTitle}
								style="style-2"
								delay={100}>
								Trusted Care, Lasting Positive Change
							</AnimatedHeading>
							<AnimatedSection delay={200}>
								<p className={styles.whyChooseDescription}>
									With a commitment to compassionate, evidence-based care, we
									empower individuals to create lasting positive change in their
									lives. Our team of experienced therapists provides.
								</p>
							</AnimatedSection>
							<div className={styles.whyChooseGrid}>
								{[
									{
										icon: "fas fa-user-md",
										title: "Experienced Professionals",
										description:
											"Our team consists of licensed therapists with years of experience in mental health counselling.",
									},
									{
										icon: "fas fa-users",
										title: "Client-Centered Approach",
										description:
											"We tailor our therapy methods to meet your unique needs and personal circumstances.",
									},
									{
										icon: "fas fa-shield-alt",
										title: "Safe And Confidential Environment",
										description:
											"Your privacy is our priority. All sessions are conducted in a secure, confidential setting.",
									},
									{
										icon: "fas fa-chart-line",
										title: "Commitment To Growth",
										description:
											"We're dedicated to helping you achieve lasting positive change and personal development.",
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
									<h2 className={styles.whyChooseBottomTitle}>
										Choosing Us for Mental Wellness
									</h2>
									<p>
										Choosing us for your mental wellness means partnering with a
										dedicated team of professionals committed to your growth and
										healing. Our holistic approach combines evidence-based
										therapies, personalized support, and a compassionate.
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
				<BookingForm />
			</main>
			<Footer />
		</>
	);
}
