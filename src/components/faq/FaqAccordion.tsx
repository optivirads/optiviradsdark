'use client';

import React, { useState } from 'react';
import FaqItem from './FaqItem';
import { FAQItemData } from '@/types/faq';

interface FaqAccordionProps {
  faqs: FAQItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FaqAccordion({
  faqs,
  title,
  subtitle,
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number, question: string) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    // GA4 event tracking for engagement analytics
    if (isOpening) {
      const anyWindow = window as unknown as { gtag?: (command: string, action: string, params: Record<string, unknown>) => void };
      if (typeof anyWindow.gtag === 'function') {
        anyWindow.gtag('event', 'faq_open', {
          event_category: 'Engagement',
          event_label: question,
          page_path: window.location.pathname,
        });
      }
    }
  };

  const displayTitle = title ?? (
    <>
      Questions We{' '}
      <span className="faq-title-accent">Actually Get Asked.</span>
    </>
  );

  const displaySubtitle = subtitle ?? (
    <>
      Answered directly. If yours isn&rsquo;t here, just{' '}
      <a
        href="https://wa.me/919995037109"
        target="_blank"
        rel="noopener noreferrer"
        className="faq-subtitle-link"
      >
        WhatsApp us
      </a>{' '}
      and we&rsquo;ll answer in plain English.
    </>
  );

  return (
    <section
      className={`faq-section ${className}`}
      aria-labelledby="faq-section-title"
    >
      {/* Ambient emerald glow — purely decorative */}
      <div className="faq-glow" aria-hidden="true" />

      <div className="faq-container">
        {/* ── Section header ── */}
        <div className="faq-header">
          <span className="faq-eyebrow" aria-hidden="true">FAQ</span>
          <h2 id="faq-section-title" className="faq-title">
            {displayTitle}
          </h2>
          <p className="faq-subtitle">{displaySubtitle}</p>
        </div>

        {/* ── Accordion list ── */}
        {faqs.length > 0 ? (
          <div className="faq-list" role="list">
            {faqs.map((faq, idx) => (
              <div key={idx} role="listitem">
                <FaqItem
                  id={`faq-card-${idx}`}
                  index={idx}
                  question={faq.question}
                  answer={faq.answer}
                  link={faq.link}
                  isOpen={openIndex === idx}
                  onToggle={() => handleToggle(idx, faq.question)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="faq-empty">
            <p>No questions available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
