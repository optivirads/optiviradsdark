import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.optivirads.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/manifest.webmanifest',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/blog/the-ultimate-guide-to-local-seo-for-kerala-businesses-in-2026',
        destination: '/blog/local-seo-domination-blueprint',
        permanent: true,
      },
      {
        source: '/services/seo',
        destination: '/services/search-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/google-ads',
        destination: '/services/google-advertising',
        permanent: true,
      },
      {
        source: '/services/meta-ads',
        destination: '/services/meta-advertising',
        permanent: true,
      },
      {
        source: '/services/ppc',
        destination: '/services/google-advertising',
        permanent: true,
      },
      {
        source: '/services/social-media',
        destination: '/services/social-media-management',
        permanent: true,
      },
      {
        source: '/services/smm',
        destination: '/services/social-media-management',
        permanent: true,
      },
      {
        source: '/services/web-dev',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/tos',
        destination: '/terms-of-service',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
