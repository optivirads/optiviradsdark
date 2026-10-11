import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OptiVir Ads | Performance Digital Marketing Agency',
    short_name: 'OptiVir Ads',
    description: 'Performance digital marketing agency in Kerala helping small businesses grow through SEO, Google Ads, and Meta Ads.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1B32',
    theme_color: '#0F1B32',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
