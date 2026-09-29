import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
