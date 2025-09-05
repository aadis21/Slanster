// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "static.vecteezy.com",
      "www.skubiq.com",
      "img.freepik.com",
      "encrypted-tbn0.gstatic.com",
      "i.pravatar.cc",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

module.exports = nextConfig;
