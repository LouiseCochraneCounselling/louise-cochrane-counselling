import styles from "./Footer.module.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.brandSection}>
						<h2 className={styles.brandName}>The Holding Space Jersey</h2>
						<p className={styles.brandTagline}>
							Qualified Counsellor and BACP Registered Member
						</p>
					</div>
					<div className={styles.linksSection}>
						<nav className={styles.nav}>
							<a href="/services">Services</a>
							<a href="/contact">Contact</a>
							<a href="/confidentiality">Confidentiality</a>
						</nav>
					</div>
					<div className={styles.locationSection}>
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
