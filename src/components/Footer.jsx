import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.quickLinksSection}>
						<h3 className={styles.quickLinksTitle}>Quick Links</h3>
						<ul className={styles.quickLinksList}>
							<li>
								<Link
									href="/#common-concerns-section"
									className={styles.quickLink}>
									Common Questions
								</Link>
							</li>
							<li>
								<Link
									href="/#what-to-expect-section"
									className={styles.quickLink}>
									About Sessions
								</Link>
							</li>
							<li>
								<Link href="/confidentiality" className={styles.quickLink}>
									Confidentiality
								</Link>
							</li>
							<li>
								<Link href="/privacy-policy" className={styles.quickLink}>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.locationSection}>
						<h3 className={styles.locationTitle}>Location</h3>
						<p className={styles.locationText}>
							Suite 19 Bourne House, Francis Street
							<br />
							St Helier, Jersey JE2 4QB
						</p>
						<Image
							src="/images/mbacp.svg"
							alt="MBACP accredited professional body logo"
							className={styles.accreditationLogo}
							width={140}
							height={60}
						/>
						<div className={styles.socialLinks}>
							<a
								href="https://www.linkedin.com/in/louise-mollet-b8a1b4a4/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
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
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61588529589925/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
								aria-label="Follow on Facebook">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
								aria-label="Follow on Instagram">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect
										x="2"
										y="2"
										width="20"
										height="20"
										rx="5"
										ry="5"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="12"
										cy="12"
										r="4"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className={styles.copyright}>
					<p>
						&copy; {currentYear} Louise Cochrane Counselling. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
