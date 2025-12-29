import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Check if coming soon mode is enabled (defaults to enabled)
  // Accepts: undefined, 'true', '1', or any value except 'false' or '0'
  const enableComingSoon = process.env.ENABLE_COMING_SOON;
  const isComingSoonEnabled = 
    enableComingSoon === undefined || 
    enableComingSoon === '' || 
    enableComingSoon === 'true' || 
    enableComingSoon === '1' ||
    (enableComingSoon !== 'false' && enableComingSoon !== '0');

  // If coming soon is disabled, allow all requests
  if (!isComingSoonEnabled) {
    return NextResponse.next();
  }

  // Allow access to Vercel deployment URLs (includes preview deployments)
  const isVercelDeployment = 
    hostname.includes('.vercel.app') || 
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1');

  // Block the custom domain (theholdingspacejersey.co.uk) - handles both www and non-www
  const isCustomDomain = 
    hostname.includes('theholdingspacejersey.co.uk') ||
    hostname === 'theholdingspacejersey.co.uk' ||
    hostname === 'www.theholdingspacejersey.co.uk';

  // If accessing via custom domain and not already on coming-soon page, redirect
  if (isCustomDomain && pathname !== '/coming-soon') {
    const url = request.nextUrl.clone();
    url.pathname = '/coming-soon';
    return NextResponse.redirect(url);
  }

  // Allow all other requests (Vercel URLs, localhost, etc.)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
