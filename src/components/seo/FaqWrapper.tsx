import React from 'react';
import { getPageFaqs } from '@/lib/wordpress';
import FaqSchema from '@/components/seo/FaqSchema';
import FaqSection from '@/components/FaqSection';

interface FaqWrapperProps {
  pageKey: string;
}

export default async function FaqWrapper({ pageKey }: FaqWrapperProps) {
  const faqs = await getPageFaqs(pageKey);

  if (!faqs || faqs.length === 0) return null;

  return (
    <>
      <FaqSchema faqs={faqs} />
      <FaqSection faqs={faqs} />
    </>
  );
}
