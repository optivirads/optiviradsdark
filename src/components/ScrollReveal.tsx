'use client';

import React, { useEffect, useRef, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const [effectiveDelay, setEffectiveDelay] = useState(delay);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setEffectiveDelay(Math.min(delay, 120));
    } else {
      setEffectiveDelay(delay);
    }
  }, [delay]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '100px 0px 50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Calculate CSS transform based on direction
  const getTransform = (revealed: boolean) => {
    if (revealed) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up': return `translate3d(0, ${distance}px, 0)`;
      case 'down': return `translate3d(0, -${distance}px, 0)`;
      case 'left': return `translate3d(${distance}px, 0, 0)`;
      case 'right': return `translate3d(-${distance}px, 0, 0)`;
      default: return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(isVisible),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${effectiveDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${effectiveDelay}ms`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
