/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.pixabay.com"],
  },
  env: {
    ALCHEMY_ID: process.env["ALCHEMY_ID"],
  },
};

module.exports = nextConfig;
