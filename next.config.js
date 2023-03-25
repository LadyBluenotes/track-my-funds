/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api : {
    bodyParser: false
  },
  PublicRuntimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
}

module.exports = nextConfig
