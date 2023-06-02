/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.semifinals.co"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://github.com/Semifinals",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
