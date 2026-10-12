import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AntigravityParticles from '@/components/AntigravityParticles';
import ThirdPartyScripts from '@/components/seo/ThirdPartyScripts';
import { getPageMetadata } from '@/lib/wordpress';
import './globals.css';


const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};


// Dynamic metadata fetched from WordPress API for root fallback
export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('home');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title || 'Digital Marketing Agency in Kannur, Kerala | OptiVir Ads',
    description: meta.description || 'OptiVir Ads is a digital marketing agency in Kannur, Kerala specializing in Local SEO, Google Ads, Meta Ads, and data-driven client growth.',
    openGraph: {
      title: meta.title || 'Digital Marketing Agency in Kannur, Kerala | OptiVir Ads',
      description: meta.description || 'OptiVir Ads is a digital marketing agency in Kannur, Kerala specializing in Local SEO, Google Ads, Meta Ads, and data-driven client growth.',
      url: baseUrl,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-share-1200x630.png`,
          width: 1200,
          height: 630,
          alt: 'OptiVir Ads Growth Marketing Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title || 'Digital Marketing Agency in Kannur, Kerala | OptiVir Ads',
      description: meta.description || 'OptiVir Ads is a digital marketing agency in Kannur, Kerala specializing in Local SEO, Google Ads, Meta Ads, and data-driven client growth.',
      images: [`${baseUrl}/images/og-share-1200x630.png`],
    },
    keywords: [
      'Digital Marketing Agency Kerala',
      'Digital Marketing Agency Kannur',
      'SEO Services Kerala',
      'Google Ads Agency Kerala',
      'Meta Ads Agency Kerala',
      'Local SEO Kerala',
      'Google Maps Marketing Kannur',
      'Performance Marketing GCC',
      'Next.js Web Development Kerala'
    ],
    icons: {
      icon: [
        { url: '/images/brand/OptiVir-Ads-Original-Symbol-32.png?v=3', sizes: '32x32', type: 'image/png' },
        { url: '/images/brand/OptiVir-Ads-Original-Symbol-192.png?v=3', sizes: '192x192', type: 'image/png' },
        { url: '/icon.png?v=3', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/images/brand/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico?v=3',
    },
    manifest: '/manifest.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || undefined,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
      other: {
        ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : {}),
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/brand/OptiVir-Ads-Original-Symbol-32.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/brand/OptiVir-Ads-Original-Symbol-192.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/brand/apple-touch-icon.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM Context for AI Search" />
      </head>
      <body suppressHydrationWarning style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        {/* Google Tag Manager (noscript fallback) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Meta Pixel Code (noscript fallback image) */}
        {pixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        <ThirdPartyScripts />
        <AntigravityParticles />
        <Header />
        <main style={{ flex: 1, paddingTop: '80px', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
