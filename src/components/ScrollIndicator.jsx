"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		// Hide indicator after user starts scrolling
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		const aboutSection = document.getElementById("about-section");
		if (aboutSection) {
			// Calculate position to show the top of the section
			const sectionRect = aboutSection.getBoundingClientRect();
			const sectionTop = sectionRect.top + window.pageYOffset;
			const offset = 80; // Offset for header

			window.scrollTo({
				top: sectionTop - offset,
				behavior: "smooth",
			});
		}
	};

	if (!isMounted) return null;

	return (
		<div className={`${styles.scrollIndicator} ${isVisible ? styles.visible : styles.hidden}`}>
			<div className={styles.line}>
				<div className={styles.movingSegment}></div>
			</div>
			<button
				onClick={handleClick}
				className={styles.arrowButton}
				aria-label="Scroll to next section"
				type="button">
				<svg
					className={styles.arrow}
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8 3L8 13M8 13L12 9M8 13L4 9"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ScrollIndicator;

