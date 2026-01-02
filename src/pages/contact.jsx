import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import homeStyles from "../styles/Home.module.css";

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
			<main id="main-content" style={{ padding: 0, margin: 0, width: "100%", paddingBottom: "4rem" }}>
				<div className={homeStyles.bookingSectionWrapper} style={{ marginBottom: "2rem", minHeight: "auto" }}>
					<BookingForm />
				</div>
			</main>
			<Footer />
		</>
	);
}
