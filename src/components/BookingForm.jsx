'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.mainHeading}>Book An Appointment Now!</h2>
          <p className={styles.subheading}>MAKE A BOOKING WITH OUR ONLINE FORM</p>
        </div>
        <form
          name="booking"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={styles.bookingForm}
        >
          <input type="hidden" name="form-name" value="booking" />
          <p className={styles.hidden}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
                placeholder="Name *"
                autoComplete="name"
                aria-required="true"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={styles.formInput}
                placeholder="Phone *"
                autoComplete="tel"
                inputMode="tel"
                aria-required="true"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="E-mail Address *"
              autoComplete="email"
              inputMode="email"
              aria-required="true"
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={styles.formTextarea}
              placeholder="Message"
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={status === 'sending'}>
            {status === 'sending' ? (
              <span className={styles.spinner}></span>
            ) : (
              'Send Message'
            )}
          </button>

          {status === 'success' && (
            <p className={`${styles.formMessage} ${styles.success}`}>
              Thank you! Your message has been sent. We'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className={`${styles.formMessage} ${styles.error}`}>
              Sorry, there was an error sending your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookingForm;

