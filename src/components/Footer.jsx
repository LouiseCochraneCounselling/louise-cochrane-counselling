import styles from "./Footer.module.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.section}>
						<h3>The Holding Space Counselling</h3>
						<p>Qualified Counsellor and BACP Registered Member</p>
					</div>
					<div className={styles.section}>
						<h3>Location</h3>
						<address style={{ fontStyle: "normal", lineHeight: "1.6" }}>
							Suite 19 Bourne House
							<br />
							Francis Street
							<br />
							St Helier, Jersey
							<br />
							JE2 4QB
						</address>
					</div>
					<div className={styles.section}>
						<h3>Contact</h3>
						<p>Contact to book/answer any enquires</p>
					</div>
					<div className={styles.section}>
						<h3>Information</h3>
						<ul className={styles.links}>
							<li>
								<a href="/services">Services</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
							<li>
								<a href="/confidentiality">Confidentiality</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					<p>&copy; {currentYear} The Holding Space. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
