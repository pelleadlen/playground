/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    tailwindStyledComponents: true,
  },
};

module.exports = nextConfig;
