import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import homeStyles from "../styles/Home.module.css";

export default function Contact() {
	return (
		<>
			<SEO
				title="Contact Us - Louise Cochrane Counselling"
				description="Get in touch with Louise Cochrane Counselling. We're here to support you on your journey to better mental health."
				path="/contact"
			/>
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
