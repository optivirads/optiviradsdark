import React from 'react';
import { getPageFaqs } from '@/lib/wordpress';
import { generateFaqSchema } from '@/lib/schema/faq';
import { FAQItemData } from '@/types/faq';
import FaqAccordion from './FaqAccordion';

interface FaqProps {
  pageKey?: string;
  localFaqs?: FAQItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default async function Faq({
  pageKey,
  localFaqs,
  title,
  subtitle,
  className,
}: FaqProps) {
  let faqs: FAQItemData[] = [];

  // 1. If pageKey is provided, attempt to load from WordPress/Mock pipeline
  if (pageKey) {
    const wpFaqs = await getPageFaqs(pageKey);
    // Convert FaqItem to FAQItemData structure
    faqs = wpFaqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }));
  }

  // 2. If no faqs loaded from CMS and localFaqs prop is supplied, use it
  if (faqs.length === 0 && localFaqs && localFaqs.length > 0) {
    faqs = localFaqs;
  }

  if (faqs.length === 0) return null;

  // 3. Generate schema structures
  const schema = generateFaqSchema(faqs);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <FaqAccordion
        faqs={faqs}
        title={title}
        subtitle={subtitle}
        className={className}
      />
    </>
  );
}
