// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Bỏ qua lỗi eslint khi build
  },
};

module.exports = nextConfig;