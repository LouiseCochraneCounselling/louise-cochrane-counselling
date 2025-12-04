import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Counselling Services</h3>
            <p>Professional counselling support for your wellbeing.</p>
          </div>
          <div className={styles.section}>
            <h3>Contact</h3>
            <p>Get in touch via our contact form</p>
          </div>
          <div className={styles.section}>
            <h3>Information</h3>
            <ul className={styles.links}>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Counselling Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

