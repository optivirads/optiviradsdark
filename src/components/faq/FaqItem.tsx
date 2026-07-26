'use client';

import React, { useId } from 'react';
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
        <span
          aria-hidden="true"
          className={`faq-chevron-wrap ${isOpen ? 'faq-chevron-open' : ''}`}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'inline-flex'
          }}
        >
          <ChevronDown size={16} strokeWidth={1.75} className="faq-chevron-icon" />
        </span>
      </button>

      {/* Answer panel with pure CSS grid accordion transition */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden'
        }}
      >
        <div style={{ minHeight: 0 }}>
          <div className="faq-answer-inner" style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.25s ease-out' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
