import { getPageMetadata } from '@/lib/wordpress';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('free-marketing-audit');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://www.optivirads.com/free-marketing-audit',
    },
  };
}

export default function FreeMarketingAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
