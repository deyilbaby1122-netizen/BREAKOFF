/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    workerThreads: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    dirs: [],
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
