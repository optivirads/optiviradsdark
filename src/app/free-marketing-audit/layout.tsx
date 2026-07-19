import { getPageMetadata } from '@/lib/wordpress';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('free-marketing-audit');
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function FreeMarketingAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
