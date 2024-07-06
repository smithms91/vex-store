/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.shopify.com" }
    ]
  },
  reactStrictMode: true
};

export default nextConfig;
