/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      dangerouslyAllowSVG: true,
      domains: ["cdn.dribbble.com", "images.unsplash.com",'aceternity.com', 'images.unsplash.com', 'static.wixstatic.com'],
      contentSecurityPolicy: "script-src 'self'",
    },
  };
  
  export default nextConfig;
