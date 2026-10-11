'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'flip-up' | 'none';
  distance?: number;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 20,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Calculate CSS transform based on direction with 3D perspective flip-and-rise physics
  const getTransform = (revealed: boolean) => {
    if (revealed) {
      return 'perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)';
    }
    switch (direction) {
      case 'up':
      case 'flip-up':
        return `perspective(1200px) rotateX(12deg) translate3d(0, ${distance}px, 0) scale3d(0.97, 0.97, 0.97)`;
      case 'down':
        return `perspective(1200px) rotateX(-12deg) translate3d(0, -${distance}px, 0) scale3d(0.97, 0.97, 0.97)`;
      case 'left':
        return `perspective(1200px) rotateY(-8deg) translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `perspective(1200px) rotateY(8deg) translate3d(-${distance}px, 0, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(isVisible),
        transformOrigin: direction === 'up' || direction === 'flip-up' ? '50% 100%' : 'center center',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        width: '100%',
        height: '100%',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
