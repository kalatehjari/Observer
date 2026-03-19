/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined,  // Force server-side rendering (no static export)
  trailingSlash: true,
};

module.exports = nextConfig;
