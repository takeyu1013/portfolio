/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
