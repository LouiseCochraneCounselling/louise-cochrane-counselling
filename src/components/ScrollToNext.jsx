"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./ScrollToNext.module.css";

const ScrollToNext = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [isAtBottom, setIsAtBottom] = useState(false);
	const [currentTarget, setCurrentTarget] = useState("about-section");
	const [currentLabel, setCurrentLabel] = useState("Learn More");
	const buttonRef = useRef(null);

	const sections = [
		{ id: "about-section" },
		{ id: "services-section" },
		{ id: "why-choose-section" },
		{ id: "booking-section" },
	];

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted || !buttonRef.current) return;

		// Find which section this button belongs to
		const button = buttonRef.current;
		const container = button.closest('[data-scroll-button-container]');
		
		// Check if button is in hero section (no container, directly in heroSection)
		const heroSection = button.closest('.heroSection');
		let currentSectionIndex = -1;

		if (heroSection && !container) {
			// Hero section - index -1 means it's before all sections
			currentSectionIndex = -1;
		} else if (container) {
			// Find which section this button belongs to by checking parent sections
			for (let i = 0; i < sections.length; i++) {
				const section = document.getElementById(sections[i].id);
				if (section && section.contains(container)) {
					currentSectionIndex = i;
					break;
				}
			}
		}

		// Set initial target and label based on section
		const updateTargetAndLabel = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;

			setIsAtBottom(isNearBottom);

			// Hero section (index -1) -> scroll to about-section
			if (currentSectionIndex === -1) {
				setCurrentTarget("about-section");
				setCurrentLabel("Learn More");
			} else if (currentSectionIndex >= 0) {
				// If at bottom of page and this is the last section, show "Return to Top"
				if (isNearBottom && currentSectionIndex === sections.length - 1) {
					setCurrentTarget("top");
					setCurrentLabel("Return to Top");
				} else {
					// Otherwise, scroll to next section - always show "Learn More"
					const nextIndex = currentSectionIndex + 1;
					if (nextIndex < sections.length) {
						setCurrentTarget(sections[nextIndex].id);
						setCurrentLabel("Learn More");
					} else {
						setCurrentTarget("top");
						setCurrentLabel("Return to Top");
					}
				}
			}
		};

		updateTargetAndLabel();

		const handleScroll = () => {
			updateTargetAndLabel();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, [isMounted]);

	const handleClick = (e) => {
		e.preventDefault();

		if (currentTarget === "top") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			const targetElement = document.getElementById(currentTarget);
			if (targetElement) {
				// Scroll to show the bottom part of the section
				// Get the section's position and height
				const sectionRect = targetElement.getBoundingClientRect();
				const sectionTop = sectionRect.top + window.pageYOffset;
				const sectionHeight = targetElement.offsetHeight;
				const windowHeight = window.innerHeight;
				
				// Calculate position to show bottom 60% of the section
				// This ensures the section content is visible but we're showing more towards the bottom
				const scrollPosition = sectionTop + (sectionHeight * 0.4) - (windowHeight * 0.2);

				window.scrollTo({
					top: Math.max(0, scrollPosition),
					behavior: "smooth",
				});
			}
		}
	};

	if (!isMounted) return null;

	return (
		<button
			ref={buttonRef}
			onClick={handleClick}
			className={styles.scrollButton}
			aria-label={currentLabel}
			type="button">
			<span className={styles.buttonText}>{currentLabel}</span>
			<div className={styles.chevronContainer}>
				<svg
					className={`${styles.chevron} ${isAtBottom ? styles.chevronUp : ""}`}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d={isAtBottom ? "M7 14L12 9L17 14" : "M7 10L12 15L17 10"}
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</button>
	);
};

export default ScrollToNext;

