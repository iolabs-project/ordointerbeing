/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.ordointerbeing.id" },
      { protocol: "https", hostname: "i0.wp.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = nextConfig