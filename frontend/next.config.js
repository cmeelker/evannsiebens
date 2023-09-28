/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `https://evannsiebens-strapi-xtkdr.ondigitalocean.app/admin`,
        permanent: true,
        basePath: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "evannsiebens-strapi.ams3.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};
