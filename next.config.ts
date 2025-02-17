import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  output: "standalone",
};

export default nextConfig;
