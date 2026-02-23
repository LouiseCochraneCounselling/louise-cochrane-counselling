import Head from 'next/head';

const SITE_URL = 'https://louisecochranecounselling.com';
const SITE_NAME = 'Louise Cochrane Counselling';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.jpg`;

export default function SEO({ title, description, path = '', image, noIndex = false }) {
	const url = `${SITE_URL}${path}`;
	const ogImage = image || DEFAULT_OG_IMAGE;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			{noIndex && <meta name="robots" content="noindex, nofollow" />}

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
