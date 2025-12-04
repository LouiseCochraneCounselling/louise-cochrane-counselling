import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Counselling Services</title>
        <meta name="description" content="Explore our range of counselling services designed to support your mental health and wellbeing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Our Services</h1>
          
          <section className={styles.contentSection}>
            <h2>Individual Counselling</h2>
            <p>
              One-to-one counselling sessions tailored to your individual needs. We work with 
              you to explore your concerns, develop understanding, and create strategies for 
              positive change.
            </p>
          </section>

          <section className={styles.contentSection}>
            <h2>Areas We Support</h2>
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

          <section className={styles.contentSection}>
            <h2>How It Works</h2>
            <p>
              Our counselling process begins with an initial consultation where we discuss your 
              needs and goals. From there, we'll work together to develop a plan that feels 
              right for you. Sessions are typically 50 minutes long and can be arranged to 
              suit your schedule.
            </p>
          </section>

          <section className={styles.contentSection}>
            <h2>Confidentiality</h2>
            <p>
              All sessions are conducted in strict confidence. We are committed to providing 
              a safe and secure environment where you can speak openly about your concerns 
              without fear of judgement.
            </p>
          </section>

          <section className={styles.contentSection}>
            <h2>Next Steps</h2>
            <p>
              If you're interested in learning more about our services or would like to book 
              an initial consultation, please get in touch via our contact form. We'll respond 
              promptly to discuss how we can support you.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

