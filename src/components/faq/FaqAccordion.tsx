'use client';

import React, { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import FaqItem from './FaqItem';
import { FAQItemData } from '@/types/faq';


interface FaqAccordionProps {
  faqs: FAQItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

// Helper to convert questions into clean URL slugs
const getQuestionSlug = (question: string) => {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export default function FaqAccordion({
  faqs,
  title,
  subtitle,
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  const displayTitle = title || (
    <>
      Questions We <span className="text-emerald-400 font-bold">Actually Get Asked.</span>
    </>
  );

  const displaySubtitle = subtitle || (
    <>
      Answered directly. If yours is not here, just{" "}
      <a
        href="https://wa.me/919446469696"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors"
      >
        WhatsApp us
      </a>{" "}
      and we will answer in plain English.
    </>
  );

  // 1. Staggered Entrance Animation using anime.js
  useEffect(() => {
    if (hasAnimatedRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimatedRef.current = true;

            // Stagger reveal cards
            animate('.faq-item-card', {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 800,
              delay: stagger(80, { start: 100 }),
              easing: 'easeOutQuart',
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Handle Item Toggle Action
  const handleToggle = (index: number, question: string) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    // Fire GA4 Event tracking if expanding
    if (isOpening) {
      const anyWindow = window as any;
      if (typeof anyWindow.gtag === 'function') {
        anyWindow.gtag('event', 'faq_open', {
          event_category: 'Engagement',
          event_label: question,
          page_path: window.location.pathname
        });
      }
    }
  };

  return (
    <>
      <section
        ref={containerRef}
        className={`py-32 relative border-t border-neutral-900/60 bg-[#030712] overflow-hidden ${className}`}
      >
        {/* Background Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[900px] relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold mb-4 block">
              Transparency
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-serif text-white leading-tight">
              {displayTitle}
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {displaySubtitle}
            </p>
          </div>

          <div className="space-y-8 min-h-[100px]">
            {faqs.length > 0 ? (
              faqs.map((faq, originalIndex) => {
                return (
                  <FaqItem
                    key={originalIndex}
                    id={`faq-card-${originalIndex}`}
                    index={originalIndex}
                    question={faq.question}
                    answer={faq.answer}
                    link={faq.link}
                    isOpen={openIndex === originalIndex}
                    onToggle={() => handleToggle(originalIndex, faq.question)}
                  />
                );
              })
            ) : (
              <div className="text-center py-12 border border-dashed border-neutral-800 rounded-xl">
                <p className="text-neutral-500 text-base">No questions available.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
