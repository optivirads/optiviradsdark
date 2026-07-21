'use client';

import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

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
  duration = 1000,
  mode = 'words',
}: TextRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  const Tag = tag;

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.reveal-item');
    
    animate(elements, {
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.95, 1],
      duration: duration,
      delay: stagger(mode === 'chars' ? 25 : 60, { start: delay }),
      easing: 'easeOutElastic(1, 0.85)',
    });
  }, [delay, duration, mode]);

  const items = mode === 'words' ? text.split(' ') : text.split('');

  return (
    <Tag ref={containerRef} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', overflow: 'hidden' }}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className="reveal-item"
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            opacity: 0,
            transform: 'translateY(20px)',
            marginRight: mode === 'words' ? '0.22em' : '0',
          }}
        >
          {item}
        </span>
      ))}
    </Tag>
  );
}
