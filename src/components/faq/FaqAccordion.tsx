'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FaqItem from './FaqItem';
import { FAQItemData } from '@/types/faq';

interface FaqAccordionProps {
  faqs: FAQItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

// Container + item variants for staggered reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function FaqAccordion({
  faqs,
  title,
  subtitle,
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger stagger animation once the section enters the viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      className={`faq-section ${className}`}
      aria-labelledby="faq-section-title"
    >
      {/* Ambient emerald glow — purely decorative */}
      <div className="faq-glow" aria-hidden="true" />

      <div className="faq-container">
        {/* ── Section header ── */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="faq-eyebrow" aria-hidden="true">FAQ</span>
          <h2 id="faq-section-title" className="faq-title">
            {displayTitle}
          </h2>
          <p className="faq-subtitle">{displaySubtitle}</p>
        </motion.div>

        {/* ── Accordion list ── */}
        {faqs.length > 0 ? (
          <motion.div
            className="faq-list"
            role="list"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                role="listitem"
                variants={itemVariants}
              >
                <FaqItem
                  id={`faq-card-${idx}`}
                  index={idx}
                  question={faq.question}
                  answer={faq.answer}
                  link={faq.link}
                  isOpen={openIndex === idx}
                  onToggle={() => handleToggle(idx, faq.question)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="faq-empty">
            <p>No questions available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
