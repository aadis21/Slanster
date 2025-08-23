// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.vecteezy.com", "www.skubiq.com", "img.freepik.com"],
  },
};

module.exports = nextConfig;
