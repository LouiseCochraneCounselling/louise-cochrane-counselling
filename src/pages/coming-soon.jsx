import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/ComingSoon.module.css";
import ComingSoonForm from "../components/ComingSoonForm";

export default function ComingSoon() {
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [isExpired, setIsExpired] = useState(false);

	// Target date: February 1, 2026
	const targetDate = new Date("2026-02-01T00:00:00").getTime();

	useEffect(() => {
		const calculateCountdown = () => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			if (difference <= 0) {
				setIsExpired(true);
				setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				return;
			}

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setCountdown({ days, hours, minutes, seconds });
		};

		// Calculate immediately
		calculateCountdown();

		// Update every second
		const interval = setInterval(calculateCountdown, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Head>
				<title>Coming Soon - The Holding Space Jersey</title>
				<meta
					name="description"
					content="The Holding Space Jersey - Coming Soon"
				/>
			</Head>
			<div className={styles.container}>
				<div className={styles.leftSection}>
					<div className={styles.leftContent}>
						<h1 className={styles.businessName}>The Holding Space Jersey</h1>
						<h2 className={styles.title}>Coming Soon</h2>
						<p className={styles.message}>
							We're putting the finishing touches on our website, but we will be
							here for you soon...
						</p>

						<div className={styles.countdownSection}>
							<div className={styles.countdownContainer}>
								<div className={styles.countdownCircle}>
									<span className={styles.countdownNumber}>
										{isExpired ? "00" : String(countdown.days).padStart(2, "0")}
									</span>
									<span className={styles.countdownLabel}>Days</span>
								</div>
								<div className={styles.countdownCircle}>
									<span className={styles.countdownNumber}>
										{isExpired
											? "00"
											: String(countdown.hours).padStart(2, "0")}
									</span>
									<span className={styles.countdownLabel}>Hours</span>
								</div>
								<div className={styles.countdownCircle}>
									<span className={styles.countdownNumber}>
										{isExpired
											? "00"
											: String(countdown.minutes).padStart(2, "0")}
									</span>
									<span className={styles.countdownLabel}>Mins</span>
								</div>
								<div className={styles.countdownCircle}>
									<span className={styles.countdownNumber}>
										{isExpired
											? "00"
											: String(countdown.seconds).padStart(2, "0")}
									</span>
									<span className={styles.countdownLabel}>Sec</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.rightSection}>
					<ComingSoonForm />
				</div>
			</div>
		</>
	);
}
