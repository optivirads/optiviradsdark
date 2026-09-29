'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroBackgroundAnimation() {
  return (
    <div className="hero-3d-scene-container" aria-hidden="true">
      {/* ── Base 3D Artwork Backdrop (Seamless composite: clean dark cyber space left + full 3D visual right) ── */}
      <div className="hero-3d-image-wrap">
        <Image
          src="/images/hero-bg-3d.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-3d-bg-img"
        />
        {/* Vignette mask: dark on left for pristine headline contrast, transparent on right for full visual clarity */}
        <div className="hero-3d-vignette-overlay" />
      </div>

      {/* ── Layer 1: Volumetric Aurora Glows behind 3D components ── */}
      <div className="hero-3d-aurora-glow glow-target" />
      <div className="hero-3d-aurora-glow glow-bars" />
      <div className="hero-3d-aurora-glow glow-meta" />

      {/* ── Layer 2: Animated SVG Arrow & Flowing Electric Laser Surge ── */}
      <svg
        className="hero-arrow-svg-stage"
        viewBox="0 0 1024 576"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff87" stopOpacity="0" />
            <stop offset="35%" stopColor="#00ff87" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.2" />
          </linearGradient>

          <filter id="neonBeamGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Electric laser bolt traveling up the arrow trajectory */}
        <path
          d="M 545 330 C 605 320, 680 270, 735 220 C 790 170, 830 125, 860 95"
          stroke="url(#laserBeamGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          className="arrow-laser-beam"
          filter="url(#neonBeamGlow)"
        />

        {/* Waypoint 1: Launch Node */}
        <circle cx="585" cy="318" r="4.5" className="arrow-waypoint-node node-p1" />
        <circle cx="585" cy="318" r="10" className="arrow-waypoint-pulse pulse-p1" />

        {/* Waypoint 2: Mid-Ascent Node */}
        <circle cx="695" cy="255" r="5" className="arrow-waypoint-node node-p2" />
        <circle cx="695" cy="255" r="12" className="arrow-waypoint-pulse pulse-p2" />

        {/* Waypoint 3: Target Approach Node */}
        <circle cx="788" cy="172" r="5.5" className="arrow-waypoint-node node-p3" />
        <circle cx="788" cy="172" r="14" className="arrow-waypoint-pulse pulse-p3" />

        {/* Target Arrow Tip */}
        <polygon
          points="865,92 846,95 856,112"
          fill="#ffffff"
          className="arrow-tip-head"
          filter="url(#neonBeamGlow)"
        />
      </svg>

      {/* ── Layer 3: Bullseye Target Sonar Ripples & Center Radiance ── */}
      <div className="hero-target-hotspot">
        <div className="bullseye-ring ring-1" />
        <div className="bullseye-ring ring-2" />
        <div className="bullseye-ring ring-3" />
        <div className="bullseye-core-flare" />
      </div>

      {/* ── Layer 4: Vertical Energy Surges on the 4 Emerald Glass Pillars ── */}
      <div className="hero-bars-shimmer-stage">
        <div className="pillar-shimmer-box pshimmer-1">
          <div className="pillar-surge-light surge-1" />
          <div className="pillar-cap-glow" />
        </div>
        <div className="pillar-shimmer-box pshimmer-2">
          <div className="pillar-surge-light surge-2" />
          <div className="pillar-cap-glow" />
        </div>
        <div className="pillar-shimmer-box pshimmer-3">
          <div className="pillar-surge-light surge-3" />
          <div className="pillar-cap-glow" />
        </div>
        <div className="pillar-shimmer-box pshimmer-4">
          <div className="pillar-surge-light surge-4" />
          <div className="pillar-cap-glow" />
        </div>
      </div>

      {/* ── Layer 5: Specular Light Sheen Sweeps over Google & Meta Ads Glass Tabs ── */}
      <div className="hero-tab-sheen-spot spot-google-sheen">
        <div className="glass-sheen-sweep sheen-google" />
        <div className="glass-tab-border-aura aura-google" />
      </div>

      <div className="hero-tab-sheen-spot spot-meta-sheen">
        <div className="glass-sheen-sweep sheen-meta" />
        <div className="glass-tab-border-aura aura-meta" />
      </div>

      {/* ── Layer 6: Crystal Diamond Star Flares & Glints ── */}
      <div className="crystal-star-glint glint-prism-left" />
      <div className="crystal-star-glint glint-prism-top" />
      <div className="crystal-star-glint glint-prism-right" />

      {/* ── Layer 7: Podium Front Status LEDs ── */}
      <div className="hero-podium-leds-bar">
        <div className="podium-led-dot led-1" />
        <div className="podium-led-dot led-2" />
        <div className="podium-led-dot led-3" />
      </div>

      {/* ── Layer 8: Ambient Drifting Cyber Sparks ── */}
      <div className="cyber-spark spark-p1" />
      <div className="cyber-spark spark-p2" />
      <div className="cyber-spark spark-p3" />
      <div className="cyber-spark spark-p4" />
      <div className="cyber-spark spark-p5" />
    </div>
  );
}
