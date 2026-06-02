/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/integrations",
        destination: "/automation",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
