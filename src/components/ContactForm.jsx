'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: (formData.phone || '').trim(),
          message: (formData.message || '').trim(),
        })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatus('success');
        form.reset();
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form 
        name="contact" 
        method="POST" 
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >

        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Get in Touch</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className={styles.formFields}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              <span className={styles.labelText}>Full Name</span>
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
                autoComplete="name"
                inputMode="text"
                aria-required="true"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              <span className={styles.labelText}>Email Address</span>
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
                autoComplete="email"
                inputMode="email"
                aria-required="true"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              <span className={styles.labelText}>Phone Number</span>
              <span className={styles.optional}>(Optional)</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.formInput}
                autoComplete="tel"
                inputMode="tel"
                placeholder="07123 456789"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              <span className={styles.labelText}>Your Message</span>
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className={styles.formTextarea}
                aria-required="true"
                placeholder="Tell us how we can help you..."
              />
            </div>
          </div>
        </div>

        <div className={styles.formActions}>
          <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={status === 'sending'}
          >
            <span className={styles.buttonText}>
              {status === 'sending' ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </span>
          </button>
        </div>

        {status === 'success' && (
          <div className={`${styles.formMessage} ${styles.success}`}>
            <svg className={styles.messageIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <strong>Message Sent Successfully!</strong>
              <p>Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
            </div>
          </div>
        )}
        {status === 'error' && (
          <div className={`${styles.formMessage} ${styles.error}`}>
            <svg className={styles.messageIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <strong>Oops! Something went wrong</strong>
              <p>Please try again or contact us directly if the problem persists.</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

