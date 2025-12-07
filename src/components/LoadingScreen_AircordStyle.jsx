"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen_AircordStyle.module.css";

const LoadingScreen_AircordStyle = ({ onLoaded }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(() => {
						setIsLoading(false);
						onLoaded?.();
					}, 300);
					return 100;
				}
				return prev + 2;
			});
		}, 30);

		return () => clearInterval(interval);
	}, [onLoaded]);

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

