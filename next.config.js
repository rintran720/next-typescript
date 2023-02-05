/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
});

const ContentSecurityPolicy = `
  base-uri 'self';
  object-src 'none';
  script-src 'unsafe-inline' 'self' 'unsafe-eval' https://vitals.vercel-insights.com;
  style-src 'unsafe-inline' 'self' 'unsafe-eval' https://fonts.googleapis.com;
`;

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

nextConfig.headers = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: securityHeaders,
    },
  ];
};

module.exports = nextConfig;
