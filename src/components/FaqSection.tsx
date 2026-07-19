'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/lib/wordpress';

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({ 
  faqs, 
  title,
  subtitle
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All collapsed by default

  if (!faqs || faqs.length === 0) return null;

  // Visual header elements matching the user screenshot
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

  return (
    <section className="py-24 relative border-t border-neutral-900/50 bg-[#030712] overflow-hidden">
      {/* Background Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-serif text-white">
            {displayTitle}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-neutral-950/80 border-emerald-500/20 shadow-[0_4px_30px_rgba(16,185,129,0.03)]' 
                    : 'bg-neutral-900/10 border-neutral-800/80 hover:bg-neutral-900/20 hover:border-neutral-700/80'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="text-base md:text-lg font-medium pr-8 flex items-start gap-4 transition-colors">
                    <span className="text-emerald-400 font-mono font-semibold select-none flex-shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className={`transition-colors duration-200 ${isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                      {faq.question}
                    </span>
                  </span>
                  <span className="text-xl md:text-2xl font-light text-neutral-400 select-none flex-shrink-0 transition-colors group-hover:text-white">
                    {isOpen ? '−' : '＋'}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 px-6' : 'grid-rows-[0fr] opacity-0 pb-0 px-6 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-900/60 pt-4 text-neutral-400 text-sm md:text-base leading-relaxed font-light pl-9">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
