import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import styles from "../styles/Page.module.css";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Us - The Holding Space Jersey</title>
				<meta
					name="description"
					content="Get in touch with The Holding Space Jersey counselling services. We're here to support you on your journey to better mental health."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main} id="main-content">
				<div className={styles.container}>
					<BookingForm />
				</div>
			</main>
			<Footer />
		</>
	);
}
