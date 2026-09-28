import { getPageMetadata } from '@/lib/wordpress';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('services');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/services`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/services`,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
