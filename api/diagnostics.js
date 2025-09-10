// Diagnostic endpoint to check Node.js version and environment
export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const diagnostics = {
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    nodeEnv: process.env.NODE_ENV,
    vercelRegion: process.env.VERCEL_REGION,
    vercelEnv: process.env.VERCEL_ENV,
    awsRegion: process.env.AWS_REGION,
    fromEmail: process.env.FROM_EMAIL,
    toEmail: process.env.TO_EMAIL,
    awsAccessKeyExists: !!process.env.AWS_ACCESS_KEY_ID,
    awsSecretKeyExists: !!process.env.AWS_SECRET_ACCESS_KEY,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    method: req.method,
    url: req.url
  };

  console.log('=== DIAGNOSTIC ENDPOINT CALLED ===');
  console.log('Diagnostics:', JSON.stringify(diagnostics, null, 2));
  console.log('==================================');

  return res.status(200).json({
    success: true,
    message: 'Diagnostic information',
    diagnostics
  });
}
