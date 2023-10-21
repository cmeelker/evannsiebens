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
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
      },
      {
        protocol: "https",
        hostname: "vumbnail.com",
        pathname: `/**`,
      },
    ],
  },
};
