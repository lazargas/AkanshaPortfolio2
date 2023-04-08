/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config, { nextRuntime }) {
    if (typeof nextRuntime === "undefined") {
          config.resolve.fallback = {
                    ...config.resolve.fallback,
                    fs: false,
            };  
    }
    return config;
  },
}

module.exports = nextConfig
