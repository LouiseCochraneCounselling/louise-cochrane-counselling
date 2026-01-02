'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AnimatedImage.module.css';

const AnimatedImage = ({ 
  src, 
  alt, 
  className = '',
  delay = 0,
  animationStyle = 'none', // 'none', 'style-1'
  width,
  height,
  fill,
  sizes,
  priority = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMounted]);

  const animationClass = animationStyle === 'style-1' ? styles.style1 : '';
  const visibilityClass = isVisible ? styles.imageVisible : styles.imageHidden;

  // During SSR and initial mount, render without animation to prevent hydration mismatch
  if (!isMounted) {
    if (fill) {
      return (
        <div className={`${styles.imageWrapper} ${className}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.image}
            sizes={sizes}
            priority={priority}
          />
        </div>
      );
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={`${styles.image} ${className}`}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  if (fill) {
    return (
      <div 
        ref={containerRef}
        className={`${styles.imageWrapper} ${className} ${animationClass} ${visibilityClass}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.imageContainer} ${className} ${animationClass} ${visibilityClass}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={styles.image}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
};

export default AnimatedImage;

