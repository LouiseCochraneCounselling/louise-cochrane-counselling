import Link from "next/link";
import styles from "./ExploreMoreButton.module.css";

const ExploreMoreButton = ({ href, text = "Explore More", iconDirection = "down" }) => {
	const arrowPath = iconDirection === "up" 
		? "M7 14L12 9L17 14" 
		: "M7 10L12 15L17 10";

	return (
		<div className={styles.container}>
			<Link href={href} className={styles.button}>
				<span className={styles.text}>{text}</span>
				<svg
					className={styles.icon}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d={arrowPath}
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</div>
	);
};

export default ExploreMoreButton;