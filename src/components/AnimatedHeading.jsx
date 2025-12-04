"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedHeading.module.css";

const AnimatedHeading = ({
	children,
	delay = 0,
	className = "",
	as: Component = "h2",
	style = "style-2", // 'none' or 'style-2'
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [letters, setLetters] = useState([]);
	const headingRef = useRef(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		// Split text into words, then letters
		const textContent =
			typeof children === "string"
				? children
				: typeof children === "object" && children?.props?.children
				? String(children.props.children)
				: String(children || "");

		if (textContent) {
			const words = textContent.split(" ");
			const letterArray = words.map((word, wordIndex) => ({
				word,
				letters: word.split("").map((letter, letterIndex) => ({
					letter,
					wordIndex,
					letterIndex,
					key: `${wordIndex}-${letterIndex}`,
				})),
				key: `word-${wordIndex}`,
			}));
			setLetters(letterArray);
		}
	}, [children, isMounted]);

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
				rootMargin: "0px 0px -50px 0px",
			}
		);

		if (headingRef.current) {
			observer.observe(headingRef.current);
		}

		return () => {
			if (headingRef.current) {
				observer.unobserve(headingRef.current);
			}
		};
	}, [isMounted]);

	// During SSR and initial mount, render without animation to prevent hydration mismatch
	if (!isMounted) {
		return <Component className={className}>{children}</Component>;
	}

	if (style === "none" || !children) {
		return (
			<Component
				ref={headingRef}
				className={`${className} ${isVisible ? styles.visible : styles.hidden}`}
				style={{ animationDelay: `${delay}ms` }}>
				{children}
			</Component>
		);
	}

	return (
		<Component ref={headingRef} className={className}>
			{letters.map((wordObj, index) => (
				<span key={wordObj.key}>
					<span
						className={styles.wordWrapper}
						style={{ display: "inline-block" }}>
						{wordObj.letters.map((letterObj) => (
							<span
								key={letterObj.key}
								className={`${styles.letter} ${
									isVisible ? styles.letterVisible : styles.letterHidden
								}`}
								style={{
									animationDelay: `${
										delay +
										letterObj.wordIndex * 50 +
										letterObj.letterIndex * 30
									}ms`,
								}}>
								{letterObj.letter}
							</span>
						))}
					</span>
					{index < letters.length - 1 && " "}
				</span>
			))}
		</Component>
	);
};

export default AnimatedHeading;
