/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  serverComponentsExternalPackages: ["@tremor/react"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
