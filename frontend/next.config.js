/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'encoding')
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    }
    return config
  },
}

module.exports = nextConfig
