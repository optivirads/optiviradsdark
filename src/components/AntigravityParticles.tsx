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
  colorRgb: string;
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
      const maxParticles = isMobile ? 24 : 50;
      const colorPalette = [
        '0, 242, 254',    // Cyan glow
        '0, 255, 135',    // Neon green glow
        '225, 45, 75',    // Crimson glow
        '248, 246, 243',  // Ivory pearl
      ];
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        // Grains sized ~2.4px to 5.0px radius (5px to 10px diameter) so they are clearly visible
        const radius = Math.random() * (isMobile ? 1.8 : 2.4) + 2.4;
        const baseAlpha = Math.random() * 0.3 + 0.45;
        const colorRgb = colorPalette[i % colorPalette.length];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.4),
          vy: -Math.random() * (isMobile ? 0.35 : 0.5) - 0.15, // Floating upwards defying gravity
          radius,
          alpha: baseAlpha,
          baseAlpha,
          colorRgb,
        });
      }
    };

    const resizeCanvas = (force = false) => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      const widthChanged = Math.abs(newWidth - lastWidth) > 5;
      const heightChanged = Math.abs(newHeight - lastHeight) > 120;

      if (force || lastWidth === 0 || widthChanged || heightChanged) {
        lastWidth = newWidth;
        lastHeight = newHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;

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
      const connectionDistance = isMobile ? 95 : 125;
      const mouseRadius = isMobile ? 110 : 160;

      // Update and draw particles
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Reset if floated off top
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

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
            p.alpha = Math.min(p.baseAlpha * 1.8, 0.95);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.05;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        // Draw soft luminescent halo for visible grain presence
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.2);
        halo.addColorStop(0, `rgba(${p.colorRgb}, ${p.alpha * 0.7})`);
        halo.addColorStop(0.5, `rgba(${p.colorRgb}, ${p.alpha * 0.25})`);
        halo.addColorStop(1, `rgba(${p.colorRgb}, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Draw solid grain core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorRgb}, ${Math.min(p.alpha * 1.3, 0.95)})`;
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
            const opacity = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(${p1.colorRgb}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${p2.colorRgb}, ${opacity * 0.8})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    let isPageVisible = true;
    const updateFrame = () => {
      if (!isPageVisible) return;
      drawParticles();
      animationFrameId = requestAnimationFrame(updateFrame);
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateFrame);
      }
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
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    let startTimeout: NodeJS.Timeout;
    const startParticleEngine = () => {
      resizeCanvas(true);
      updateFrame();
    };

    startTimeout = setTimeout(startParticleEngine, 100);

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
        opacity: 0.88,
        display: 'block',
      }}
    />
  );
}
