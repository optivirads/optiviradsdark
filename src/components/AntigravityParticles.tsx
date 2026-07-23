'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
}

export default function AntigravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastWidth = 0;
    let lastHeight = 0;

    const checkIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

    const initParticles = (width: number, height: number) => {
      const isMobile = checkIsMobile();
      // Optimized particle density (25 mobile / 45 desktop) for 60fps & sub-50ms main-thread cost
      const maxParticles = isMobile ? 25 : 45;
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        const radius = Math.random() * 1.5 + 1;
        const baseAlpha = Math.random() * 0.4 + 0.15;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.5 - 0.15, // Floating upwards defying gravity
          radius,
          alpha: baseAlpha,
          baseAlpha,
        });
      }
    };


    const resizeCanvas = (force = false) => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // On mobile browsers, scrolling toggles toolbars, firing resize with small height diffs.
      // Ignore small height changes to prevent resetting canvas bitmap during scroll.
      const widthChanged = Math.abs(newWidth - lastWidth) > 5;
      const heightChanged = Math.abs(newHeight - lastHeight) > 120; // Orientation change or large resize

      if (force || lastWidth === 0 || widthChanged || heightChanged) {
        lastWidth = newWidth;
        lastHeight = newHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Only recreate particles if initial load or significant resize/orientation change
        if (particles.length === 0 || widthChanged || heightChanged) {
          initParticles(newWidth, newHeight);
        }
      }
    };

    const drawParticles = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const isMobile = checkIsMobile();
      const connectionDistance = isMobile ? 110 : 120;
      const mouseRadius = isMobile ? 140 : 150;

      // Update and draw particles
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Reset if floated off top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Mouse/Touch interaction (repulsion field & glow effect)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
            p.alpha = Math.min(p.baseAlpha * 2.2, 0.85);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.05;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha})`; // Cyan neon glow
        ctx.fill();
      });

      // Draw connecting mesh lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(0, 242, 254, ${opacity})`); // Cyan
            gradient.addColorStop(1, `rgba(0, 255, 135, ${opacity})`); // Green

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const updateFrame = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(updateFrame);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    const handleResize = () => resizeCanvas(false);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    let startTimeout: NodeJS.Timeout;
    const startParticleEngine = () => {
      resizeCanvas(true);
      updateFrame();
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(startParticleEngine, { timeout: 800 });
    } else {
      startTimeout = setTimeout(startParticleEngine, 300);
    }

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <canvas
      ref={canvasRef}
      className="antigravity-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
        display: 'block',
      }}
    />
  );
}


