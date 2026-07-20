'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Search, Crosshair, Rocket, ArrowRight } from 'lucide-react';
import { animate, stagger } from 'animejs';

export default function HeroAnimations() {
  useEffect(() => {
    // Animate hero items on client mount
    animate('.hero-description', {
      translateY: [15, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 500,
      easing: 'easeOutExpo',
    });

    animate('.hero-cta-btn', {
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: 'easeOutExpo',
    });

    animate('.hero-card-item', {
      translateX: [30, 0],
      opacity: [0, 1],
      delay: stagger(100, { start: 700 }),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <>
      <div className="hero-text-content">
        <h1 className="hero-headline">
          Scale Your Business with Precision-Engineered Digital Marketing.
        </h1>
        <p className="hero-description" style={{ opacity: 0 }}>
          Specializing in Social Media Management, Meta & Google Ads, high-intent SEO, conversion copywriting, and premium custom Web Development.
        </p>
        <div className="hero-actions">
          <Link href="/free-marketing-audit" className="btn-primary hero-cta-btn" style={{ opacity: 0 }}>
            Free Audit & Strategy Session <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Right Column Stack */}
      <div className="hero-cards-stack">
        <div className="glow-card-left-border green hero-card-item" style={{ opacity: 0 }}>
          <div className="card-stack-icon green">
            <Search size={18} />
          </div>
          <div className="card-stack-info">
            <h3 className="card-stack-title">Strategic SEO & Content</h3>
            <p className="card-stack-desc">Commanding search authority and high-value content to capture intent organic traffic.</p>
          </div>
        </div>

        <div className="glow-card-left-border purple hero-card-item" style={{ opacity: 0 }}>
          <div className="card-stack-icon purple">
            <Crosshair size={18} />
          </div>
          <div className="card-stack-info">
            <h3 className="card-stack-title">Omnichannel Paid Ads</h3>
            <p className="card-stack-desc">Hyper-targeted Meta, Google, and niche platform ad campaigns optimized for ROAS.</p>
          </div>
        </div>

        <div className="glow-card-left-border cyan hero-card-item" style={{ opacity: 0 }}>
          <div className="card-stack-icon cyan">
            <Rocket size={18} />
          </div>
          <div className="card-stack-info">
            <h3 className="card-stack-title">Web Dev & SMM</h3>
            <p className="card-stack-desc">Custom conversion-rate engineered sites coupled with active social community management.</p>
          </div>
        </div>
      </div>
    </>
  );
}
