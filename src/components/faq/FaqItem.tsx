'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { FAQItemData } from '@/types/faq';
import { renderSanitizedHtml } from '@/lib/safeHtml';

interface FaqItemProps extends FAQItemData {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  id?: string;
}

export default function FaqItem({
  question,
  answer,
  link,
  index,
  isOpen,
  onToggle,
  id,
}: FaqItemProps) {
  const uid = useId();
  const buttonId = `faq-btn-${index}-${uid.replace(/:/g, '')}`;
  const panelId  = `faq-panel-${index}-${uid.replace(/:/g, '')}`;

  // Lazy-render panel content only after it has been opened once
  const [hasOpened, setHasOpened] = useState(isOpen);
  if (isOpen && !hasOpened) {
    setHasOpened(true);
  }

  // Full keyboard support (Enter / Space)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      id={id}
      className={`faq-item-card ${isOpen ? 'faq-item-open' : 'faq-item-closed'}`}
    >
      {/* Trigger button */}
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="faq-trigger group"
      >
        <span className={`faq-question ${isOpen ? 'faq-question-open' : ''}`}>
          {question}
        </span>

        {/* Chevron icon — rotates 180° when panel is open */}
        <motion.span
          aria-hidden="true"
          className={`faq-chevron-wrap ${isOpen ? 'faq-chevron-open' : ''}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={16} strokeWidth={1.75} className="faq-chevron-icon" />
        </motion.span>
      </button>

      {/* Animated answer panel: height 0 → auto with opacity fade */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="faq-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height:  { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.22, ease: 'easeOut' },
            }}
            style={{ overflow: 'hidden' }}
          >
            {/* Inner wrapper keeps padding outside animated height so CLS is zero */}
            <div className="faq-answer-inner">
              {hasOpened && (
                <>
                  <div className="faq-answer-text">
                    {renderSanitizedHtml(answer)}
                  </div>

                  {link && (
                    <a
                      href={link.url}
                      className="faq-answer-link"
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.text}
                      <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                    </a>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
