/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/space-portfolio",
  assetPrefix: "/space-portfolio",
  //basePath: process.env.NODE_ENV === "production" ? "/space-portfolio" : "",
  //assetPrefix: process.env.NODE_ENV === "production" ? "/space-portfolio" : "",
  output: "export", // <=== enables static exports
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
