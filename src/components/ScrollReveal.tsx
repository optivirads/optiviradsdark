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
  duration = 800,
  direction = 'up',
  distance = 30,
  stagger = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRevealed) {
            setHasRevealed(true);
            
            const element = containerRef.current;
            if (!element) return;

            const targets = stagger > 0 
              ? Array.from(element.children) 
              : element;

            let translateX: any = 0;
            let translateY: any = 0;

            if (direction === 'up') translateY = [distance, 0];
            if (direction === 'down') translateY = [-distance, 0];
            if (direction === 'left') translateX = [distance, 0];
            if (direction === 'right') translateX = [-distance, 0];

            animate(targets, {
              opacity: [0, 1],
              translateX: translateX,
              translateY: translateY,
              duration: duration,
              delay: stagger > 0 ? animeStagger(stagger, { start: delay }) : delay,
              easing: 'easeOutQuart',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [direction, distance, delay, duration, stagger, hasRevealed]);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: hasRevealed ? 1 : 0,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
