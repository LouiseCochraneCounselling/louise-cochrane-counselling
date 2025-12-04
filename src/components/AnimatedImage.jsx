'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedImage.module.css';

const AnimatedImage = ({ 
  src, 
  alt, 
  className = '',
  delay = 0,
  animationStyle = 'none' // 'none', 'style-1'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const imageRef = useRef(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isMounted]);

  const animationClass = animationStyle === 'style-1' ? styles.style1 : '';

  // During SSR and initial mount, render without animation to prevent hydration mismatch
  if (!isMounted) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${className}`}
      />
    );
  }

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`${styles.image} ${className} ${animationClass} ${isVisible ? styles.imageVisible : styles.imageHidden}`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );
};

export default AnimatedImage;

