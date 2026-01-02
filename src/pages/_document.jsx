import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</Head>
			<body>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								// Prevent browser scroll restoration
								if ('scrollRestoration' in window.history) {
									window.history.scrollRestoration = 'manual';
								}
								
								// Set a flag on page unload to detect refresh
								window.addEventListener('beforeunload', function() {
									sessionStorage.setItem('is-refreshing', 'true');
								});
								
								// Check if this is a page refresh
								var isRefreshing = sessionStorage.getItem('is-refreshing') === 'true';
								
								// On page refresh, reset to #home
								if (isRefreshing) {
									sessionStorage.removeItem('is-refreshing');
									
									// Scroll to top immediately
									window.scrollTo(0, 0);
									
									// Replace any hash with #home
									if (window.location.hash && window.location.hash !== '#home') {
										window.history.replaceState(null, '', '#home');
									}
									
									// Also set scroll position after a brief delay to ensure it sticks
									setTimeout(function() {
										window.scrollTo(0, 0);
									}, 0);
								} else {
									// On fresh load (not refresh), just scroll to top
									window.scrollTo(0, 0);
								}
							})();
						`,
					}}
				/>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
