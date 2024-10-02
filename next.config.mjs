/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  //basePath: process.env.NODE_ENV === "production" ? "/space-portfolio" : "",
  //output: "export", // <=== enables static exports
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
