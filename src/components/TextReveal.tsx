'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  duration?: number;
  mode?: 'words' | 'chars';
}

export default function TextReveal({
  text,
  className = '',
  tag = 'h2',
  delay = 0,
  duration = 800,
  mode = 'words',
}: TextRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Tag = tag;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = mode === 'words' ? text.split(' ') : text.split('');
  const staggerMs = mode === 'chars' ? 25 : 60;

  return (
    <Tag ref={containerRef} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', overflow: 'hidden' }}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className="reveal-item"
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * staggerMs}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + idx * staggerMs}ms`,
            marginRight: mode === 'words' ? '0.22em' : '0',
          }}
        >
          {item}
        </span>
      ))}
    </Tag>
  );
}
