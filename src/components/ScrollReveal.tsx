'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger as animeStagger } from 'animejs';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 20,
  stagger = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(true);

  useEffect(() => {
    // Graceful subtle entrance animation after paint
    const element = containerRef.current;
    if (!element) return;

    const targets = stagger > 0 
      ? Array.from(element.children) 
      : element;

    let translateX: number | number[] = 0;
    let translateY: number | number[] = 0;

    if (direction === 'up') translateY = [distance, 0];
    if (direction === 'down') translateY = [-distance, 0];
    if (direction === 'left') translateX = [distance, 0];
    if (direction === 'right') translateX = [-distance, 0];

    animate(targets, {
      translateX: translateX,
      translateY: translateY,
      duration: duration,
      delay: stagger > 0 ? animeStagger(stagger, { start: delay }) : delay,
      easing: 'easeOutQuart',
    });
  }, [direction, distance, delay, duration, stagger]);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: 1,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}

