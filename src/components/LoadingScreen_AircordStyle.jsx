"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./LoadingScreen_AircordStyle.module.css";

const LoadingScreen_AircordStyle = ({ onLoaded }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	
	// Use ref to store callback so effect only runs once on mount
	// This prevents the interval from being cleared and recreated on every render
	const onLoadedRef = useRef(onLoaded);
	
	// Update ref when callback changes (but don't trigger effect re-run)
	useEffect(() => {
		onLoadedRef.current = onLoaded;
	}, [onLoaded]);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(() => {
						setIsLoading(false);
						// Use ref to access latest callback without dependency
						onLoadedRef.current?.();
					}, 300);
					return 100;
				}
				return prev + 2;
			});
		}, 30);

		return () => clearInterval(interval);
		// Empty dependency array - effect only runs once on mount
		// onLoaded is accessed via ref to avoid re-running effect
	}, []);

	if (!isLoading) return null;

	return (
		<div className={styles.loadingScreen}>
			<div className={styles.loadingContent}>
				<div className={styles.loadingText}>LOADING</div>
				<div className={styles.progressBar}>
					<div
						className={styles.progressFill}
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen_AircordStyle;

