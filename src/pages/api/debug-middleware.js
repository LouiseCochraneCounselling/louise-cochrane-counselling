export default async function handler(req, res) {
  // Get hostname from headers
  const hostname = req.headers.host || '';
  const url = req.url || '';
  
  // Check environment variable
  const enableComingSoon = 
    process.env.ENABLE_COMING_SOON || 
    process.env.Enable_coming_soon ||
    process.env.enable_coming_soon;

  // Determine if it's a custom domain
  const isCustomDomain = 
    hostname.includes('theholdingspacejersey.co.uk') ||
    hostname === 'theholdingspacejersey.co.uk' ||
    hostname === 'www.theholdingspacejersey.co.uk';

  const isVercelDeployment = 
    hostname.includes('.vercel.app') || 
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1');

  // Return debug info
  return res.status(200).json({
    hostname,
    url,
    enableComingSoon: enableComingSoon || 'NOT SET (defaults to enabled)',
    isCustomDomain,
    isVercelDeployment,
    allEnvVars: {
      ENABLE_COMING_SOON: process.env.ENABLE_COMING_SOON || 'not set',
      Enable_coming_soon: process.env.Enable_coming_soon || 'not set',
      enable_coming_soon: process.env.enable_coming_soon || 'not set',
    },
    middlewareShouldRedirect: isCustomDomain && !isVercelDeployment,
    message: 'Visit this endpoint to debug middleware behavior. Check browser console or Network tab.',
  });
}
