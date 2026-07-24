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
    alternates: {
      canonical: './',
    },
    openGraph: {
      title: meta.title || 'OptiVir Ads | Performance Digital Marketing Agency',
      description: meta.description || 'Data-driven performance digital marketing agency specializing in SEO, Google Ads, Meta Ads, and custom Web Development.',
      url: baseUrl,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: 'OptiVir Ads Digital Marketing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title || 'OptiVir Ads',
      description: meta.description,
      images: [`${baseUrl}/images/logo.png`],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
      <head />
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
