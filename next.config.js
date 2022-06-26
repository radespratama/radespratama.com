/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'cdn.sanity.io'],
  },
  swcMinify: false,
};

module.exports = nextConfig;
