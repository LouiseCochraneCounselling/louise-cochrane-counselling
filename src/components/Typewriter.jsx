"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Typewriter.module.css";

const Typewriter = ({
	text,
	speed = 100,
	delay = 0,
	className = "",
	as: Component = "h1",
	showCursor = true,
	onComplete,
	loop = false,
	loopDelay = 10000, // 10 seconds default
}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMounted, setIsMounted] = useState(false);
	const [hasStarted, setHasStarted] = useState(false);
	const [isTyping, setIsTyping] = useState(true);
	const [isInView, setIsInView] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Intersection Observer to detect when element is in view
	useEffect(() => {
		if (!isMounted || !elementRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
				} else {
					setIsInView(false);
					// Reset when out of view if looping
					if (loop) {
						setDisplayedText("");
						setCurrentIndex(0);
						setIsTyping(true);
						setHasStarted(false);
					}
				}
			},
			{
				threshold: 0.2, // Start when 20% visible
				rootMargin: "0px 0px -50px 0px",
			}
		);

		observer.observe(elementRef.current);

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [isMounted, loop]);

	// Start typing when in view
	useEffect(() => {
		if (!isMounted || !isInView || !text) return;

		const startTimer = setTimeout(() => {
			setHasStarted(true);
		}, delay);

		return () => clearTimeout(startTimer);
	}, [isInView, delay, isMounted, text]);

	// Typing effect
	useEffect(() => {
		if (!isMounted || !hasStarted || !text || !isInView) return;

		if (isTyping && currentIndex < text.length) {
			const timer = setTimeout(() => {
				setDisplayedText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timer);
		} else if (currentIndex === text.length) {
			setIsTyping(false);
			if (onComplete) {
				onComplete();
			}

			// If looping and still in view, reset after delay
			if (loop && isInView) {
				const resetTimer = setTimeout(() => {
					setDisplayedText("");
					setCurrentIndex(0);
					setIsTyping(true);
				}, loopDelay);

				return () => clearTimeout(resetTimer);
			}
		}
	}, [currentIndex, text, speed, hasStarted, isMounted, onComplete, loop, loopDelay, isTyping, isInView]);

	// During SSR, render full text without animation
	if (!isMounted) {
		return <Component className={className}>{text}</Component>;
	}

	return (
		<Component className={className}>
			<span ref={elementRef} style={{ display: 'inline-block' }}>
				{displayedText}
				{showCursor && (
					<span className={styles.cursor} aria-hidden="true">
						|
					</span>
				)}
			</span>
		</Component>
	);
};

export default Typewriter;

