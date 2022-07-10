/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.capy.lol"],
  },
};

module.exports = nextConfig;
