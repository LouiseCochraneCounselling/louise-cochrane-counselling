'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedSection.module.css';

const AnimatedSection = ({ children, delay = 0, className = '', animation = 'fadeInUp' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMounted]);

  const animationClass = animation === 'fadeInUp' ? styles.fadeInUp : styles.fadeIn;

  // During SSR and initial mount, render without animation to prevent hydration mismatch
  // Use suppressHydrationWarning to prevent React from complaining about class differences
  if (!isMounted) {
    return (
      <div 
        className={className} 
        style={{ animationDelay: `${delay}ms` }}
        suppressHydrationWarning
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animationClass : styles.hidden}`}
      style={{ animationDelay: `${delay}ms` }}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

