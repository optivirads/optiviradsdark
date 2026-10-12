'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'flip-up' | 'none';
  distance?: number;
  stagger?: number;
  rotate?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 850,
  direction = 'up',
  distance = 50,
  rotate = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Trigger when element actually enters the visible viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasFinished(true);
      }, delay + duration + 60);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, duration]);

  // Calculate CSS transform based on direction, rotating when rotate is true
  const getTransform = () => {
    if (hasFinished) return 'none';
    if (isVisible) {
      return rotate ? 'rotate(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(0, 0, 0)';
    }
    if (rotate) {
      switch (direction) {
        case 'up':
        case 'flip-up':
          return `rotate(-180deg) translate3d(0, ${distance}px, 0) scale3d(0.9, 0.9, 0.9)`;
        case 'down':
          return `rotate(180deg) translate3d(0, -${distance}px, 0) scale3d(0.9, 0.9, 0.9)`;
        case 'left':
          return `rotate(-180deg) translate3d(${distance}px, 0, 0) scale3d(0.9, 0.9, 0.9)`;
        case 'right':
          return `rotate(180deg) translate3d(-${distance}px, 0, 0) scale3d(0.9, 0.9, 0.9)`;
        default:
          return 'translate3d(0, 0, 0)';
      }
    }
    switch (direction) {
      case 'up':
      case 'flip-up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transformOrigin: rotate ? 'center center' : undefined,
        transition: hasFinished
          ? 'none'
          : `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        width: '100%',
        height: '100%',
        willChange: hasFinished ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
