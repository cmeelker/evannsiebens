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
};
