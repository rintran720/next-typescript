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

module.exports = nextConfig;
