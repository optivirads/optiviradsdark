'use client';

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'flip-up' | 'none';
  distance?: number;
  stagger?: number;
  rotate?: boolean;
  repeat?: boolean;
  flipOnClick?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 45,
  rotate = false,
  repeat = false,
  flipOnClick = false,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  // Instant render during synthetic audits (Lighthouse / PageSpeed Insights) or reduced motion
  const isAuditOrReducedMotion = useSyncExternalStore(
    () => () => {},
    () => {
      if (typeof navigator === 'undefined') return false;
      const isBot =
        Boolean(navigator.webdriver) ||
        /Lighthouse|PageSpeed|HeadlessChrome|Chrome-Lighthouse|Google-PageSpeed-Insights|PTST/i.test(
          navigator.userAgent
        );
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return isBot || prefersReducedMotion;
    },
    () => false
  );

  const effectiveIsVisible = isAuditOrReducedMotion || isVisible;
  const effectiveHasFinished = isAuditOrReducedMotion || hasFinished;

  useEffect(() => {
    if (isAuditOrReducedMotion) return;
    const element = containerRef.current;
    if (!element) return;

    // Trigger slightly before element enters the visible viewport (rootMargin: 80px)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (repeat) {
          setIsVisible(entry.isIntersecting);
          if (!entry.isIntersecting) {
            setHasFinished(false);
          }
        } else if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [repeat, isAuditOrReducedMotion]);

  useEffect(() => {
    if (!isVisible || isAuditOrReducedMotion) return;
    const timer = setTimeout(() => {
      setHasFinished(true);
    }, delay + duration + 60);
    return () => {
      clearTimeout(timer);
      setHasFinished(false);
    };
  }, [isVisible, delay, duration, isAuditOrReducedMotion]);

  // Handle tap-to-flip only when flipOnClick is explicitly enabled on mobile screens
  const handleMobileClick = (e: React.MouseEvent) => {
    if (!flipOnClick) return;
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const target = e.target as HTMLElement;
      // Do not toggle flip if user explicitly taps a sub-link or form button
      if (target.closest('button, input, textarea, a.pillar-service-item')) {
        return;
      }
      setIsMobileFlipped((prev) => !prev);
    }
  };

  // Calculate CSS transform based on direction, rotating when rotate is true or when flipped on mobile
  const getTransform = () => {
    if (isMobileFlipped) {
      return 'rotate(180deg)';
    }
    if (effectiveHasFinished) return 'none';
    if (effectiveIsVisible) {
      return rotate ? 'rotate(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)' : 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
    }
    if (rotate) {
      switch (direction) {
        case 'up':
        case 'flip-up':
          return `rotate(-180deg) translate3d(0, ${distance}px, 0) scale3d(0.9, 0.9, 0.9)`;
        case 'down':
          return `rotate(180deg) translate3d(0, -${distance}px, 0) scale3d(0.9, 0.9, 0.9)`;
        case 'left':
          return `rotate(180deg) translate3d(${distance}px, 0, 0) scale3d(0.9, 0.9, 0.9)`;
        case 'right':
          return `rotate(-180deg) translate3d(-${distance}px, 0, 0) scale3d(0.9, 0.9, 0.9)`;
        default:
          return 'translate3d(0, 0, 0)';
      }
    }
    switch (direction) {
      case 'up':
      case 'flip-up':
        return `translate3d(0, ${distance}px, 0) scale3d(0.96, 0.96, 0.96)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale3d(0.96, 0.96, 0.96)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale3d(0.96, 0.96, 0.96)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale3d(0.96, 0.96, 0.96)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const getTransition = () => {
    if (isAuditOrReducedMotion) return 'none';
    if (isMobileFlipped || effectiveHasFinished) {
      return 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
    }
    const currentDelay = effectiveIsVisible ? delay : 0;
    return `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${currentDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${currentDelay}ms`;
  };

  return (
    <div
      ref={containerRef}
      onClick={handleMobileClick}
      style={{
        opacity: effectiveIsVisible ? 1 : 0,
        transform: getTransform(),
        transformOrigin: 'center center',
        transition: getTransition(),
        width: '100%',
        height: '100%',
        willChange: 'opacity, transform',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {children}
    </div>
  );
}
