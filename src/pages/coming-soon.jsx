import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/ComingSoon.module.css';
import AnimatedSection from '../components/AnimatedSection';

export default function ComingSoon() {
  const [dots, setDots] = useState('');
  const [daysLeft, setDaysLeft] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  // Target date: February 1, 2026
  const targetDate = new Date('2026-02-01T00:00:00').getTime();

  useEffect(() => {
    const calculateDaysLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return 0;
      }

      return Math.floor(difference / (1000 * 60 * 60 * 24));
    };

    // Calculate immediately
    setDaysLeft(calculateDaysLeft());

    // Update every 15 seconds
    const interval = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Coming Soon - The Holding Space Jersey</title>
        <meta name="description" content="The Holding Space Jersey - Coming Soon" />
      </Head>
      <div className={styles.container}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.content}>
          <AnimatedSection delay={0} animation="fadeInUp">
            <h1 className={styles.title}>
              Coming Soon<span className={styles.dots}>{dots}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fadeInUp">
            <p className={styles.message}>
              We're putting the finishing touches on our website.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fadeInUp">
            <p className={styles.submessage}>
              Please check back soon or contact us directly if you need assistance.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={600} animation="scaleIn">
            <div className={styles.whiteboard}>
              {isExpired ? (
                <div className={styles.whiteboardText}>
                  <span className={styles.whiteboardNumber}>0</span>
                  <span className={styles.whiteboardLabel}>Days</span>
                </div>
              ) : (
                <div className={styles.whiteboardText}>
                  <span className={styles.whiteboardNumber}>{daysLeft}</span>
                  <span className={styles.whiteboardLabel}>Days Left</span>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={800} animation="scaleIn">
            <a 
              href="mailto:hello@theholdingspacejersey.co.uk" 
              className={styles.contactLink}
            >
              <span className={styles.buttonText}>Contact Us</span>
              <span className={styles.buttonArrow}>→</span>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
