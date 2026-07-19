'use client';

import React, { useEffect, useRef } from 'react';
import { animate, random } from 'animejs';

export default function AmbientOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const orbs = containerRef.current.querySelectorAll('.orb-item');

    orbs.forEach((orb, i) => {
      animate(orb, {
        translateX: () => random(-150, 150),
        translateY: () => random(-150, 150),
        scale: () => random(0.8, 1.4),
        opacity: () => random(0.08, 0.18),
        duration: () => random(20000, 30000),
        delay: i * 1500,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="ambient-glow" style={{ zIndex: 0 }}>
      <div className="glow-orb orb-1 orb-item" style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(150px)', mixBlendMode: 'screen' }} />
      <div className="glow-orb orb-2 orb-item" style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(150px)', mixBlendMode: 'screen' }} />
      <div className="glow-orb orb-3 orb-item" style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(150px)', mixBlendMode: 'screen' }} />
    </div>
  );
}
