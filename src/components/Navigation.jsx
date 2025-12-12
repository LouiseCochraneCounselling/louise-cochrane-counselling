'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.menuContainer}`) && !event.target.closest(`.${styles.menuButton}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.headerContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoContainer}>
              {!logoError ? (
                <img 
                  src="/images/logo.svg" 
                  alt="The Holding Space Logo" 
                  className={styles.logoImg}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className={styles.logoText}>The Holding Space</span>
              )}
            </div>
          </Link>
        </div>

        {/* Menu Section */}
        <div className={styles.menuSection}>
          <div className={styles.menuWrapper}>
            <button 
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className={styles.hamburgerIcon}></span>
              <span className={styles.hamburgerIcon}></span>
              <span className={styles.hamburgerIcon}></span>
            </button>

            <div className={`${styles.menuContainer} ${isOpen ? styles.menuOpen : ''}`}>
              <ul className={styles.navList}>
                <li>
                  <Link href="/" onClick={closeMenu} className={styles.navLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={closeMenu} className={styles.navLink}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={closeMenu} className={styles.navLink}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeMenu} className={styles.navLink}>
                    Contact Us
                  </Link>
                </li>
                <li className={styles.mobileOnly}>
                  <Link href="/contact" onClick={closeMenu} className={styles.navLink}>
                    Book Appointment
                  </Link>
                </li>
              </ul>
              <div className={styles.menuClosePanel}>
                <button 
                  className={styles.menuClose}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Overlay */}
            {isOpen && (
              <div 
                className={styles.menuOverlay}
                onClick={closeMenu}
                aria-hidden="true"
              ></div>
            )}
          </div>

          {/* Book Appointment Button - Hidden on tablet/mobile */}
          <div className={styles.buttonSection}>
            <Link href="/contact" className={styles.appointmentButton}>
              <span className={styles.buttonText}>Book An Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
