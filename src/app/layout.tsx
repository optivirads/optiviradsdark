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
    title: meta.title || 'OptiVir Ads | Performance Digital Marketing Agency',
    description: meta.description || 'Data-driven performance digital marketing agency specializing in SEO, Google Ads, Meta Ads, and custom Web Development.',
    openGraph: {
      title: meta.title || 'OptiVir Ads | Performance Digital Marketing Agency',
      description: meta.description || 'Data-driven performance digital marketing agency specializing in SEO, Google Ads, Meta Ads, and custom Web Development.',
      url: baseUrl,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/optivir-brand-logo.png`,
          width: 1200,
          height: 360,
          alt: 'OptiVir Ads Digital Marketing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title || 'OptiVir Ads',
      description: meta.description,
      images: [`${baseUrl}/images/optivir-brand-logo.png`],
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
