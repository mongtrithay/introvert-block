/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ['res.cloudinary.com'], // Explicitly add Cloudinary domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow any HTTPS host
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "9999", // Allow localhost images
      },
    ],
  },
};



export default nextConfig;
