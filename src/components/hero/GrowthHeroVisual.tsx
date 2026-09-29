'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

// Pre-defined bar metrics in the 600 x 460 SVG coordinate space
const BARS_DATA = [
  { id: 1, x: 95, width: 26, height: 75, triggerX: 95 },
  { id: 2, x: 155, width: 26, height: 115, triggerX: 155 },
  { id: 3, x: 215, width: 26, height: 160, triggerX: 215 },
  { id: 4, x: 275, width: 26, height: 210, triggerX: 275 },
  { id: 5, x: 335, width: 26, height: 265, triggerX: 335 },
  { id: 6, x: 395, width: 26, height: 320, triggerX: 395 },
  { id: 7, x: 455, width: 26, height: 375, triggerX: 455 },
];

const SVG_PATH_D = 'M 45 405 C 160 400, 270 340, 365 240 C 430 172, 480 120, 520 80';
const TARGET_POINT = { x: 520, y: 80 };
const TARGET_TRIGGER_RATIO = 0.38; // Reveal target when arrow reaches ~38% of path

export default function GrowthHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Animation states
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [totalLength, setTotalLength] = useState(650);
  const [arrowPos, setArrowPos] = useState({ x: 45, y: 405, angle: -15 });
  const [targetPulse, setTargetPulse] = useState(false);
  const [chartFadeOpacity, setChartFadeOpacity] = useState(1);

  // Mouse Parallax (desktop only)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
    if (mq.matches) {
      setProgress(1);
      setHasStarted(true);
      setChartFadeOpacity(1);
    }
  }, []);

  // Measure path length on mount
  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len > 0) {
        setTotalLength(len);
      }
    }
  }, []);

  // Viewport trigger using IntersectionObserver
  useEffect(() => {
    if (isReducedMotion) return;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          // Calm initial state: brief rest pause before growth begins
          const timer = setTimeout(() => {
            setHasStarted(true);
          }, 350);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasStarted, isReducedMotion]);

  // Main synchronized growth animation loop (infinite repeating cycle)
  useEffect(() => {
    if (!hasStarted || isReducedMotion) return;

    const GROWTH_DURATION = 2800; // 2.8s dynamic rising curve
    const PEAK_DURATION = 1600;   // 1.6s celebrate at destination with target pulse
    const FADE_DURATION = 500;    // 0.5s gentle fade out
    const RESET_PAUSE = 300;      // 0.3s resting reset before next cycle
    const TOTAL_CYCLE = GROWTH_DURATION + PEAK_DURATION + FADE_DURATION + RESET_PAUSE; // 5.2s

    let startTime: number | null = null;
    let animationFrameId: number;

    // Cubic ease-out: starts with purposeful momentum, smoothly glides into target
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const cycleTime = elapsed % TOTAL_CYCLE;

      if (cycleTime < GROWTH_DURATION) {
        // Phase 1: Rising Growth
        const rawT = cycleTime / GROWTH_DURATION;
        const currentP = easeOutCubic(rawT);
        setProgress(currentP);
        setTargetPulse(false);
        setChartFadeOpacity(1);

        // Derive Arrow position and orientation from path
        if (pathRef.current && totalLength > 0) {
          const currentDistance = currentP * totalLength;
          const pt = pathRef.current.getPointAtLength(currentDistance);
          const delta = 2;
          const nextDist = Math.min(totalLength, currentDistance + delta);
          const nextPt = pathRef.current.getPointAtLength(nextDist);
          const rad = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x);
          const deg = (rad * 180) / Math.PI;

          setArrowPos({ x: pt.x, y: pt.y, angle: deg });
        }
      } else if (cycleTime < GROWTH_DURATION + PEAK_DURATION) {
        // Phase 2: Peak Celebration at destination
        setProgress(1);
        setTargetPulse(true);
        setChartFadeOpacity(1);

        if (pathRef.current && totalLength > 0) {
          const pt = TARGET_POINT;
          setArrowPos({ x: pt.x, y: pt.y, angle: -42 });
        }
      } else if (cycleTime < GROWTH_DURATION + PEAK_DURATION + FADE_DURATION) {
        // Phase 3: Smooth graceful fade out
        const fadeProgress = (cycleTime - (GROWTH_DURATION + PEAK_DURATION)) / FADE_DURATION;
        setChartFadeOpacity(Math.max(0, 1 - fadeProgress));
      } else {
        // Phase 4: Reset & rest before next loop starts
        setProgress(0);
        setTargetPulse(false);
        setChartFadeOpacity(0);
        setArrowPos({ x: 45, y: 405, angle: -15 });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, totalLength, isReducedMotion]);

  // Mouse Parallax Handler (desktop only)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallaxOffset({ x, y });
  }, [isReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setParallaxOffset({ x: 0, y: 0 });
  }, []);

  // Target orb reveal progress (0 before threshold, 0 -> 1 after)
  const targetRevealRatio = isReducedMotion
    ? 1
    : progress < TARGET_TRIGGER_RATIO
    ? 0
    : Math.min(1, (progress - TARGET_TRIGGER_RATIO) / (1 - TARGET_TRIGGER_RATIO));

  const targetScale = 0.7 + 0.3 * targetRevealRatio;
  const targetOpacity = targetRevealRatio;

  // Parallax transforms for 3 depth layers
  const bgTransform = `translate3d(${parallaxOffset.x * 6}px, ${parallaxOffset.y * 6}px, 0)`;
  const midTransform = `translate3d(${parallaxOffset.x * 10}px, ${parallaxOffset.y * 10}px, 0)`;
  const fgTransform = `translate3d(${parallaxOffset.x * 14}px, ${parallaxOffset.y * 14}px, 0)`;

  return (
    <div
      ref={containerRef}
      className="growth-visual-root"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      {/* ── LAYER 1: BACKGROUND (Grid, Ambient Glows, Micro-Particles) ── */}
      <div className="growth-layer background-layer" style={{ transform: bgTransform }}>
        {/* Subtle Cyber Perspective Grid */}
        <div className="growth-bg-grid" />

        {/* Ambient Volumetric Glow Blobs */}
        <div className="ambient-glow glow-emerald" />
        <div className="ambient-glow glow-cyan" />
        <div className="ambient-glow glow-purple" />

        {/* Subtle Micro Dust Particles */}
        <div className="growth-particle p-1" />
        <div className="growth-particle p-2" />
        <div className="growth-particle p-3" />
        <div className="growth-particle p-4" />
        <div className="growth-particle p-5" />
      </div>

      {/* ── LAYER 2: MIDGROUND (Google & Meta 3D Glass Tabs, Prisms) ── */}
      <div className="growth-layer midground-layer" style={{ transform: midTransform }}>
        {/* Floating Google Ads 3D Glass Tab Icon */}
        <div className="growth-3d-glass-tab tab-google-3d">
          <div className="glass-icon-wrapper">
            <img
              src="/images/google-ads-glass-3d.webp"
              alt="Google Ads"
              className="glass-tab-3d-img"
              draggable={false}
            />
            {/* Specular flare sweep */}
            <div className="tab-glass-flare-sweep" />
          </div>
        </div>

        {/* Floating Meta Ads 3D Glass Tab Icon */}
        <div className="growth-3d-glass-tab tab-meta-3d">
          <div className="glass-icon-wrapper">
            <img
              src="/images/meta-ads-glass-3d.webp"
              alt="Meta Ads"
              className="glass-tab-3d-img"
              draggable={false}
            />
            {/* Specular flare sweep */}
            <div className="tab-glass-flare-sweep sweep-delayed" />
          </div>
        </div>

        {/* 3–4 Translucent Geometric Prisms */}
        <div className="growth-prism prism-top">
          <svg width="48" height="48" viewBox="0 0 50 50" fill="none">
            <polygon points="25,4 46,25 25,46 4,25" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.2" fill="rgba(139, 92, 246, 0.08)" />
            <line x1="25" y1="4" x2="25" y2="46" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" />
            <line x1="4" y1="25" x2="46" y2="25" stroke="rgba(0, 255, 135, 0.3)" strokeWidth="1" />
          </svg>
        </div>

        <div className="growth-prism prism-left">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <polygon points="20,3 37,35 3,35" stroke="rgba(0, 255, 135, 0.35)" strokeWidth="1" fill="rgba(0, 255, 135, 0.06)" />
            <line x1="20" y1="3" x2="20" y2="35" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="1" />
          </svg>
        </div>

        <div className="growth-prism prism-right">
          <svg width="44" height="44" viewBox="0 0 46 46" fill="none">
            <polygon points="23,3 43,15 43,37 23,43 3,37 3,15" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" fill="rgba(0, 242, 254, 0.06)" />
            <polygon points="23,10 37,20 37,34 23,38 9,34 9,20" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
      </div>

      {/* ── LAYER 3: FOREGROUND (Unified SVG Chart: Growth Bars, Path, Arrow, Target) ── */}
      <div className="growth-layer foreground-layer" style={{ transform: fgTransform }}>
        <svg
          className="growth-svg-canvas"
          viewBox="0 0 600 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Emerald Growth Line Gradient */}
            <linearGradient id="growthLineGrad" x1="45" y1="405" x2="520" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00ff87" />
              <stop offset="0.65" stopColor="#00f2fe" />
              <stop offset="1" stopColor="#00ff87" />
            </linearGradient>

            {/* Glass Bar Vertical Fill Gradient */}
            <linearGradient id="barGlassFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ff87" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#00f2fe" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.04" />
            </linearGradient>

            {/* Target Outer Ripple Gradient */}
            <radialGradient id="targetGlowRadial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff87" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#00f2fe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00ff87" stopOpacity="0" />
            </radialGradient>

            {/* Filters */}
            <filter id="emeraldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur1" />
              <feGaussianBlur stdDeviation="8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="orbPulseFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── ANIMATED GROWTH STAGE (INFINITELY REPEATS SMOOTHLY) ── */}
          <g
            className="growth-anim-stage"
            style={{
              opacity: isReducedMotion ? 1 : chartFadeOpacity,
              transition: 'opacity 0.25s ease',
            }}
          >
            {/* ── 1. GROWTH BARS (Unified in same coordinate space) ── */}
            <g className="growth-bars-group">
              {BARS_DATA.map((bar) => {
                // Calculate progressive reveal: when arrow passes bar.triggerX
                const isRevealed = arrowPos.x >= bar.triggerX || isReducedMotion;
                const barRevealP = isReducedMotion
                  ? 1
                  : isRevealed
                  ? Math.min(1, Math.max(0, (arrowPos.x - bar.triggerX) / 45))
                  : 0;

                const scaleY = barRevealP;
                const barOpacity = barRevealP * 0.8;
                const barY = 420 - bar.height;

                return (
                  <g
                    key={bar.id}
                    className="growth-bar-unit"
                    style={{
                      transformOrigin: `${bar.x + bar.width / 2}px 420px`,
                      transform: `scaleY(${scaleY})`,
                      opacity: barOpacity,
                      transition: isReducedMotion ? 'none' : 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.28s ease',
                    }}
                  >
                    {/* Glass Pillar Body */}
                    <rect
                      x={bar.x}
                      y={barY}
                      width={bar.width}
                      height={bar.height}
                      rx="5"
                      fill="url(#barGlassFill)"
                      stroke="rgba(0, 255, 135, 0.4)"
                      strokeWidth="1"
                    />
                    {/* Neon Top-Cap Highlight */}
                    <line
                      x1={bar.x + 2}
                      y1={barY + 1}
                      x2={bar.x + bar.width - 2}
                      y2={barY + 1}
                      stroke="#ffffff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      filter="url(#emeraldGlowFilter)"
                    />
                  </g>
                );
              })}
            </g>

            {/* ── 2. BASELINE AXIS ── */}
            <line
              x1="40"
              y1="420"
              x2="550"
              y2="420"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />

            {/* ── 3. GROWTH PATH (PROGRESSIVELY DRAWN) ── */}
            {/* Faint Guide Trail */}
            <path
              d={SVG_PATH_D}
              stroke="rgba(0, 255, 135, 0.12)"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
            />

            {/* Hidden reference path for measurements */}
            <path
              ref={pathRef}
              d={SVG_PATH_D}
              stroke="transparent"
              strokeWidth="1"
              fill="none"
            />

            {/* Main Glowing Emerald Growth Line */}
            <path
              d={SVG_PATH_D}
              stroke="url(#growthLineGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#emeraldGlowFilter)"
              style={{
                strokeDasharray: totalLength,
                strokeDashoffset: isReducedMotion ? 0 : totalLength * (1 - progress),
                opacity: progress > 0.005 || isReducedMotion ? 1 : 0,
              }}
            />

            {/* ── 4. ARROWHEAD (TRAVELS WITH PATH END) ── */}
            {(progress > 0.01 || isReducedMotion) && (
              <g
                transform={`translate(${isReducedMotion ? TARGET_POINT.x : arrowPos.x}, ${isReducedMotion ? TARGET_POINT.y : arrowPos.y}) rotate(${isReducedMotion ? -42 : arrowPos.angle})`}
              >
                {/* Glowing Arrowhead Polygon */}
                <polygon
                  points="8,0 -8,-6 -4,0 -8,6"
                  fill="#ffffff"
                  filter="url(#emeraldGlowFilter)"
                />
              </g>
            )}

            {/* ── 5. TARGET / ORB AT TOP-RIGHT DESTINATION ── */}
            <g
              className={`growth-target-group ${targetPulse ? 'target-settled-pulse' : ''}`}
              transform={`translate(${TARGET_POINT.x}, ${TARGET_POINT.y}) scale(${targetScale})`}
              style={{
                opacity: targetOpacity,
                transition: isReducedMotion ? 'none' : 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              {/* Sonar Ripple Rings */}
              <circle cx="0" cy="0" r="32" stroke="rgba(0, 255, 135, 0.35)" strokeWidth="1.2" fill="none" className="target-sonar-ring r-outer" />
              <circle cx="0" cy="0" r="20" stroke="rgba(0, 255, 135, 0.65)" strokeWidth="1.4" fill="none" className="target-sonar-ring r-mid" />
              <circle cx="0" cy="0" r="10" stroke="rgba(0, 242, 254, 0.85)" strokeWidth="1.5" fill="none" />

              {/* Glowing Bullseye Center Orb */}
              <circle cx="0" cy="0" r="5.5" fill="#ffffff" filter="url(#orbPulseFilter)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
