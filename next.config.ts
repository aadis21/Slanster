// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.vecteezy.com", "www.skubiq.com"], // add the external domain here
  },
};

module.exports = nextConfig;
