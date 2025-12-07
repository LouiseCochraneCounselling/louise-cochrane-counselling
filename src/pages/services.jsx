import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import Typewriter from '../components/Typewriter';
import styles from '../styles/Page.module.css';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - LC Counselling</title>
        <meta name="description" content="Explore our range of counselling services designed to support your mental health and wellbeing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <AnimatedSection delay={0} animation="fadeIn">
            <h3 className={styles.sectionTitleSmall}>SERVICES</h3>
          </AnimatedSection>
          <Typewriter
            as="h1"
            className={styles.pageTitle}
            text="Comprehensive Counselling Services"
            speed={60}
            delay={300}
            showCursor={true}
            loop={false}
          />
          
          <AnimatedSection delay={200} animation="fadeInUp">
            <section className={styles.contentSection}>
              <h2>Individual Counselling</h2>
              <p>
                One-to-one counselling sessions tailored to your individual needs. I work with 
                you to explore your concerns, develop understanding, and create strategies for 
                positive change. Each session is personalised to address your unique circumstances 
                and goals.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={300} animation="slideInLeft">
            <section className={styles.contentSection}>
              <h2>Areas I Support</h2>
              <ul className={styles.serviceList}>
                <li>Anxiety and stress management</li>
                <li>Depression and low mood</li>
                <li>Relationship difficulties</li>
                <li>Grief and loss</li>
                <li>Self-esteem and confidence</li>
                <li>Life transitions and change</li>
                <li>Work-related stress</li>
                <li>Personal development</li>
              </ul>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="slideInRight">
            <section className={styles.contentSection}>
              <h2>How It Works</h2>
              <p>
                My counselling process begins with an initial consultation where we discuss your 
                needs and goals. From there, we'll work together to develop a plan that feels 
                right for you. Sessions are typically 50 minutes long and can be arranged to 
                suit your schedule.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={500} animation="fadeInUp">
            <section className={styles.contentSection}>
              <h2>Confidentiality</h2>
              <p>
                All sessions are conducted in strict confidence. I am committed to providing 
                a safe and secure environment where you can speak openly about your concerns 
                without fear of judgement. Your privacy and confidentiality are my top priorities.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={600} animation="scaleIn">
            <section className={styles.contentSection}>
              <h2>Next Steps</h2>
              <p>
                If you're interested in learning more about my services or would like to book 
                an initial consultation, please get in touch via the contact form. I'll respond 
                promptly to discuss how I can support you on your journey.
              </p>
            </section>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

