/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    minimumCacheTTL: 31536000,
  },
  swcMinify: true,
};

module.exports = nextConfig;
