/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'],
      unoptimized: true
    },
    // Enable static exports
    output: 'standalone',
  }
  
  module.exports = nextConfig