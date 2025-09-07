/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com", "images.unsplash.com"], // Allow Flaticon images
    formats: ["image/avif", "image/webp"], // Optimize for modern formats
  },
  reactStrictMode: true,
};

export default nextConfig;
