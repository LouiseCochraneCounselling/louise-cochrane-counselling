'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Clients R&P',
      text: 'If someone hasn\'t said this lately, you\'re really good at your job and we do appreciate you. I\'m hopeful that journeying with you together will have a positive mindset shift for how we make "life choices".'
    },
    {
      id: 2,
      name: 'Sarah M.',
      text: 'The counselling sessions have been incredibly helpful. I feel more confident and better equipped to handle life\'s challenges. The support and understanding I received was exactly what I needed.'
    },
    {
      id: 3,
      name: 'James T.',
      text: 'I was hesitant at first, but the non-judgemental approach and safe space created during our sessions made all the difference. I\'ve learned so much about myself and feel more at peace.'
    },
    {
      id: 4,
      name: 'Emma L.',
      text: 'The support my child received was outstanding. The counsellor was patient, understanding, and used creative approaches that really resonated with my child. Highly recommend.'
    },
    {
      id: 5,
      name: 'Michael R.',
      text: 'Professional, compassionate, and genuinely caring. The sessions helped me work through difficult experiences and develop healthier coping strategies. Thank you for everything.'
    },
    {
      id: 6,
      name: 'Lisa K.',
      text: 'I felt heard and understood from the very first session. The guidance and support I received has been transformative. I\'m grateful for the positive impact it\'s had on my life.'
    }
  ];

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start auto-scroll if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }

    // Cleanup on unmount or when paused state changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsPaused(true); // Pause when manually navigating
    // Resume after 8 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsPaused(true); // Pause when manually navigating
    // Resume after 8 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    // Resume auto-scroll after a short delay when mouse leaves
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.testimonialsWrapper}>
          <button
            onClick={handlePrevious}
            className={styles.navButtonLeft}
            aria-label="Previous testimonial"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div 
            className={styles.testimonialCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <blockquote className={styles.testimonialText}>
              {testimonials[currentIndex].text}
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <p className={styles.authorName}>{testimonials[currentIndex].name}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className={styles.navButtonRight}
            aria-label="Next testimonial"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

