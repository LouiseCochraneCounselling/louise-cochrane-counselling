import Link from "next/link";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import styles from "../styles/Page.module.css";
import homeStyles from "../styles/Home.module.css";

export default function PrivacyPolicy() {
	return (
		<>
			<SEO
				title="Privacy Policy - Louise Cochrane Counselling"
				description="Privacy policy for Louise Cochrane Counselling. Learn how we collect, use, and protect your personal data."
				path="/privacy-policy"
			/>
			<Header />
			<main className={styles.main} id="main-content">
				<div className={styles.container}>
					<AnimatedSection delay={0} animation="fadeIn">
						<p className={styles.sectionTitleSmall}>PRIVACY POLICY</p>
					</AnimatedSection>

					<AnimatedSection delay={200} animation="fadeInUp">
						<section className={styles.contentSection}>
							<br />
							<h2>Who We Are</h2>
							<p>
								Louise Cochrane Counselling provides counselling services for
								adults, children, and young people. We are the data controller
								for personal information collected through this website and
								during the counselling relationship.
							</p>
							<p>
								<strong>Address:</strong> Suite 19 Bourne House, Francis Street,
								St Helier, Jersey JE2 4QB
								<br />
								<strong>Email:</strong>{" "}
								<a href="mailto:hello@louisecochranecounselling.com">
									hello@louisecochranecounselling.com
								</a>
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={300} animation="fadeInUp">
						<section className={styles.contentSection}>
							<h2>What Data We Collect</h2>
							<p>
								<strong>Via the website enquiry form:</strong>
							</p>
							<ul className={styles.serviceList}>
								<li>First name (required)</li>
								<li>Email address (required)</li>
								<li>Phone number (optional)</li>
								<li>
									Message (optional, up to 2,500 characters), which may include
									sensitive information about your health or wellbeing
								</li>
							</ul>
							<p>
								Your IP address is also collected automatically when you submit
								the form, solely for the purpose of preventing misuse (rate
								limiting). It is held in temporary server memory for a maximum
								of 15 minutes and is not stored permanently.
							</p>
							<p>
								<strong>
									During the counselling relationship (not via this website):
								</strong>
							</p>
							<ul className={styles.serviceList}>
								<li>Full name, address, phone number, and email address</li>
								<li>GP details and relevant medical or health information</li>
								<li>Session notes and records</li>
							</ul>
							<p>
								This practice-level data is collected through signed client
								agreements and during counselling sessions, not through the
								website.
							</p>

							<h2>How We Collect Your Data</h2>
							<ul className={styles.serviceList}>
								<li>
									Through the enquiry form on this website when you contact us
								</li>
								<li>
									Through signed client agreements at the start of the
									counselling relationship
								</li>
								<li>During counselling sessions</li>
							</ul>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={400} animation="slideInLeft">
						<section className={styles.contentSection}>
							<h2>Why We Process Your Data</h2>
							<p>We process your personal data for the following purposes:</p>
							<ul className={styles.serviceList}>
								<li>
									<strong>Responding to your enquiry:</strong> when you submit
									the contact form, your information is forwarded to us by email
									so we can respond to you
								</li>
								<li>
									<strong>Providing counselling services:</strong> to manage the
									therapeutic relationship, maintain appropriate records, and
									fulfil our professional obligations
								</li>
								<li>
									<strong>Website security:</strong> IP addresses are used
									temporarily for rate limiting to prevent misuse of the contact
									form
								</li>
								<li>
									<strong>Website performance:</strong> anonymised performance
									metrics are collected to help us maintain a well-functioning
									website
								</li>
							</ul>

							<h2>Special Category Data</h2>
							<p>
								As a counselling service, we recognise that information you
								share, whether through the enquiry form or during sessions, may
								include details about your mental or physical health. This is
								classified as special category data under data protection law
								and is given additional protection.
							</p>
							<p>
								We process this data on the basis of your explicit consent
								and/or where it is necessary for the provision of health or
								social care services. You may withdraw your consent at any time
								by contacting us.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={500} animation="slideInRight">
						<section className={styles.contentSection}>
							<h2>Who We Share Your Data With</h2>
							<p>
								We do not sell or share your personal data for marketing
								purposes. Your data is only shared with the following parties as
								necessary to operate this service:
							</p>
							<ul className={styles.serviceList}>
								<li>
									<strong>Resend</strong> (resend.com): our email delivery
									provider, which transmits your enquiry form submission to us.
									Resend acts as a data processor on our behalf
								</li>
								<li>
									<strong>Vercel</strong> (vercel.com): our website hosting
									provider, through which all website traffic passes. Vercel
									also provides anonymised website performance monitoring
								</li>
								<li>
									<strong>Google Fonts</strong> (fonts.googleapis.com): fonts
									used on this website are loaded from Google's servers, which
									means your IP address and browser information are shared with
									Google when you visit this site
								</li>
								<li>
									<strong>Cloudflare</strong> (cdnjs.cloudflare.com): icons used
									on this website are loaded from Cloudflare's content delivery
									network, which receives your IP address and browser
									information
								</li>
							</ul>
							<p>
								In the context of the counselling relationship, anonymised
								information may be discussed in clinical supervision to support
								professional practice. In rare circumstances, information may be
								shared with relevant authorities where there is a safeguarding
								concern. Please see our{" "}
								<Link href="/confidentiality">
									Confidentiality &amp; Safeguarding
								</Link>{" "}
								page for details.
							</p>

							<h2>International Data Transfers</h2>
							<p>
								Some of the third-party services we use (Resend, Vercel, Google,
								Cloudflare, and Unsplash) are based in or operate infrastructure
								in the United States. Where your data is transferred outside of
								Jersey or the UK, we rely on appropriate safeguards such as
								Standard Contractual Clauses or equivalent measures to protect
								your information.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={600} animation="fadeInUp">
						<section className={styles.contentSection}>
							<h2>How We Store and Protect Your Data</h2>
							<ul className={styles.serviceList}>
								<li>
									This website does not use a database. Form data is not stored
									on our servers. Your enquiry is forwarded to us by email and
									then removed from server memory
								</li>
								<li>
									All data transmitted through this website is encrypted using
									HTTPS
								</li>
								<li>
									Form inputs are sanitised to prevent misuse (such as code
									injection or email header manipulation)
								</li>
								<li>
									Rate limiting is applied to the contact form to prevent abuse
								</li>
								<li>
									Sensitive configuration (such as API keys) are stored securely
									in encrypted environment variables and never exposed to
									visitors
								</li>
							</ul>

							<h2>How Long We Keep Your Data</h2>
							<p>
								<strong>Website enquiry data:</strong> The website itself does
								not retain any personal data beyond the time it takes to send
								you a confirmation and forward your enquiry to us. The temporary
								rate-limiting data (IP address) is held for a maximum of 15
								minutes.
							</p>
							<p>
								<strong>Enquiry emails:</strong> Once your enquiry reaches our
								email inbox, it is retained for no more than 7 years.
							</p>
							<p>
								<strong>Client records and session notes:</strong> Records
								relating to the counselling relationship are retained for no
								more than 7 years in accordance with BACP (British Association
								for Counselling and Psychotherapy) guidance and our professional
								obligations.
							</p>

							<h2>Cookies and Website Tracking</h2>
							<ul className={styles.serviceList}>
								<li>This website does not set any cookies</li>
								<li>
									There is no behavioural tracking, user profiling, or analytics
									tracking (such as Google Analytics)
								</li>
								<li>
									Vercel Speed Insights is used to collect anonymised website
									performance metrics (such as page load times). This does not
									collect personal data or track individual behaviour
								</li>
								<li>
									A small piece of temporary browser storage (sessionStorage) is
									used for a scroll-position feature. It contains no personal
									data and is cleared when you close the browser tab
								</li>
							</ul>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={700} animation="slideInLeft">
						<section className={styles.contentSection}>
							<h2>Your Rights</h2>
							<p>Under data protection law, you have the right to:</p>
							<ul className={styles.serviceList}>
								<li>
									<strong>Access:</strong> request a copy of the personal data
									we hold about you
								</li>
								<li>
									<strong>Rectification:</strong> ask us to correct any
									inaccurate or incomplete data
								</li>
								<li>
									<strong>Erasure:</strong> ask us to delete your personal data
									where there is no compelling reason for us to continue
									processing it
								</li>
								<li>
									<strong>Restriction:</strong> ask us to limit how we use your
									data
								</li>
								<li>
									<strong>Portability:</strong> request your data in a
									structured, commonly used format
								</li>
								<li>
									<strong>Objection:</strong> object to the processing of your
									personal data
								</li>
								<li>
									<strong>Withdraw consent:</strong> where processing is based
									on your consent, you may withdraw it at any time by contacting
									us
								</li>
							</ul>
							<p>
								To exercise any of these rights, please contact us at{" "}
								<a href="mailto:hello@louisecochranecounselling.com">
									hello@louisecochranecounselling.com
								</a>
								.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={800} animation="slideInRight">
						<section className={styles.contentSection}>
							<h2>Children and Young People</h2>
							<p>
								We provide counselling services for children and young people.
								Where a child or young person's data is collected, we handle it
								with particular care. For clients under 18, parental or guardian
								consent is obtained as part of the counselling agreement
								process. Children and young people's privacy is respected in
								line with our{" "}
								<Link href="/confidentiality">
									Confidentiality &amp; Safeguarding
								</Link>{" "}
								commitments.
							</p>

							<h2>Contact and Complaints</h2>
							<p>
								If you have any questions about this privacy policy or wish to
								exercise your data protection rights, please contact us:
							</p>
							<p>
								<strong>Email:</strong>{" "}
								<a href="mailto:hello@louisecochranecounselling.com">
									hello@louisecochranecounselling.com
								</a>
								<br />
								<strong>Address:</strong> Suite 19 Bourne House, Francis Street,
								St Helier, Jersey JE2 4QB
							</p>
							<p>
								If you are not satisfied with how we have handled your data, you
								have the right to complain to the relevant supervisory
								authority:
							</p>
							<p>
								<strong>
									Jersey Office of the Information Commissioner (JOIC)
								</strong>
								<br />
								2nd Floor, 5 Castle Street, St Helier, Jersey JE2 3BT
								<br />
								Website:{" "}
								<a
									href="https://jerseyoic.org"
									target="_blank"
									rel="noopener noreferrer">
									jerseyoic.org
								</a>
								<br />
								Email:{" "}
								<a href="mailto:enquiries@jerseyoic.org">
									enquiries@jerseyoic.org
								</a>
								<br />
								Telephone: +44 (0) 1534 716530
							</p>
							<p>
								For clients based in the UK, you may also contact the
								Information Commissioner's Office (ICO) at{" "}
								<a
									href="https://ico.org.uk"
									target="_blank"
									rel="noopener noreferrer">
									ico.org.uk
								</a>
								.
							</p>
							<p style={{ fontStyle: "italic" }}>
								This policy was last updated on 23rd February 2026.
							</p>
						</section>
					</AnimatedSection>

					<AnimatedSection delay={900} animation="fadeIn">
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
