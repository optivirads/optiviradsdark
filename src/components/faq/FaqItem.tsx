'use client';

import React, { useState, useEffect } from 'react';
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
  const [hasOpened, setHasOpened] = useState(isOpen);

  // Lazy render panels only once they have been opened
  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
    }
  }, [isOpen]);

  // Handle keyboard interaction (Enter / Space)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  const buttonId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      id={id}
      className={`faq-item-card border transition-all duration-500 rounded-[20px] backdrop-blur-sm overflow-hidden ${isOpen
        ? 'bg-[#080d0a]/30 border-emerald-500/10 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.05)]'
        : 'bg-[#060608]/40 border-neutral-900/50 hover:bg-[#09090c]/50 hover:border-neutral-800/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]'
        }`}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 cursor-pointer group"
      >
        <span className={`text-base md:text-lg font-medium pr-8 transition-colors duration-300 leading-snug tracking-tight ${isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
          }`}>
          {question}
        </span>

        {/* Premium circular animated plus/minus icon */}
        <div className={`w-11 h-11 rounded-full border flex items-center justify-center relative flex-shrink-0 transition-all duration-300 ${isOpen
          ? 'border-emerald-500/30 bg-emerald-950/20'
          : 'border-neutral-800/60 bg-neutral-950/80 group-hover:border-neutral-600'
          }`}>
          {/* Horizontal line */}
          <span className={`w-3.5 h-[2px] rounded-full transition-colors duration-300 absolute ${isOpen ? 'bg-emerald-400' : 'bg-neutral-400 group-hover:bg-white'
            }`} />
          {/* Vertical line that rotates and fades out */}
          <span className={`w-[2px] h-3.5 rounded-full transition-all duration-300 absolute ${isOpen
            ? 'rotate-90 scale-0 opacity-0 bg-emerald-400'
            : 'bg-neutral-400 group-hover:bg-white'
            }`} />
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
      >
        <div className="overflow-hidden">
          {hasOpened && (
            <div className="border-t border-neutral-900/60 pt-6 pb-10 px-8 md:px-10 flex flex-col gap-4">
              {/* Safe parsed text rendering with improved line-height & spacing */}
              <div className="text-neutral-400 text-sm md:text-base leading-relaxed font-light space-y-4">
                {renderSanitizedHtml(answer)}
              </div>
              {link && (
                <div className="mt-2">
                  <a
                    href={link.url}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    {link.text}
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
