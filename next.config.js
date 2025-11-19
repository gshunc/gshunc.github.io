/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
      {
        protocol: "https",
        hostname: "books.google.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
