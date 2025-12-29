import Head from 'next/head';
import styles from '../styles/ComingSoon.module.css';
import AnimatedSection from '../components/AnimatedSection';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon - The Holding Space Jersey</title>
        <meta name="description" content="The Holding Space Jersey - Coming Soon" />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <AnimatedSection delay={0} animation="fadeInUp">
            <h1 className={styles.title}>Coming Soon</h1>
          </AnimatedSection>

          <AnimatedSection delay={100} animation="fadeInUp">
            <p className={styles.message}>
              We're putting the finishing touches on our website.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fadeInUp">
            <p className={styles.submessage}>
              Please check back soon or contact us directly if you need assistance.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} animation="fadeInUp">
            <a 
              href="mailto:hello@theholdingspacejersey.co.uk" 
              className={styles.contactLink}
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
