/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site into the `out` folder on build
  output: 'export',
  // Ensures paths like `/about/` work well on static hosts
  trailingSlash: true,
  images: {
    // Disable image optimization for static export compatibility
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
