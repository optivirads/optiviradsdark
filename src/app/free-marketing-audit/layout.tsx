import { getPageMetadata } from '@/lib/wordpress';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('free-marketing-audit');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/free-marketing-audit`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/free-marketing-audit`,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-share-1200x630.png`,
          width: 1200,
          height: 630,
          alt: 'Free Marketing Audit by OptiVir Ads',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/images/og-share-1200x630.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function FreeMarketingAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
