import styles from "./Footer.module.css";
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
								<Link href="/#common-concerns-section" className={styles.quickLink}>
									Common Questions
								</Link>
							</li>
							<li>
								<Link href="/#what-to-expect-section" className={styles.quickLink}>
									About Sessions
								</Link>
							</li>
							<li>
								<Link href="/confidentiality" className={styles.quickLink}>
									Confidentiality
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
					</div>
				</div>
				<div className={styles.copyright}>
					<p>
						&copy; {currentYear} The Holding Space Jersey. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
