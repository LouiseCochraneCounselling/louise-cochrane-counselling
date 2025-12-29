import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Check environment variable (case-insensitive check)
  // Try both uppercase and the exact case the user might have set
  const enableComingSoon = 
    process.env.ENABLE_COMING_SOON || 
    process.env.Enable_coming_soon ||
    process.env.enable_coming_soon;

  // Coming soon is enabled if:
  // - Variable is not set (defaults to enabled)
  // - Variable is set to 'true', '1', or any truthy value except 'false' or '0'
  let isComingSoonEnabled = true; // Default to enabled
  
  if (enableComingSoon) {
    const value = enableComingSoon.toLowerCase().trim();
    if (value === 'false' || value === '0') {
      isComingSoonEnabled = false;
    } else if (value === 'true' || value === '1') {
      isComingSoonEnabled = true;
    }
    // If it's any other value, default to enabled
  }

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

  // Debug logging (will appear in Vercel function logs)
  console.log('[Middleware Debug]', {
    hostname,
    pathname,
    enableComingSoon,
    isComingSoonEnabled,
    isVercelDeployment,
    isCustomDomain,
  });

  // If accessing via custom domain and not already on coming-soon page, redirect
  if (isCustomDomain && pathname !== '/coming-soon') {
    const url = request.nextUrl.clone();
    url.pathname = '/coming-soon';
    console.log('[Middleware] Redirecting to /coming-soon');
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
