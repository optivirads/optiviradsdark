'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* ── Campaign strategy verticals ─────────────────────────── */
const STRATEGIES = [
  { label: 'Google Ads (Search & Display)', roasMultiplier: 3.3, cpcBase: 35 },
  { label: 'Meta Ads (Facebook & Instagram)', roasMultiplier: 2.8, cpcBase: 22 },
  { label: 'SEO & Content Marketing', roasMultiplier: 4.5, cpcBase: 0 },
  { label: 'Email Marketing', roasMultiplier: 5.2, cpcBase: 0 },
  { label: 'LinkedIn Ads (B2B)', roasMultiplier: 2.1, cpcBase: 120 },
  { label: 'YouTube Ads', roasMultiplier: 3.0, cpcBase: 18 },
];

/* ── INR formatter ────────────────────────────────────────── */
function formatINR(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}

/* ── Custom range slider ─────────────────────────────────── */
interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
}

function Slider({ label, value, min, max, step, format, onChange, minLabel, maxLabel }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="roas-slider-group">
      <div className="roas-slider-top">
        <span className="roas-slider-label">{label}</span>
        <span className="roas-slider-val">{format(value)}</span>
      </div>
      <div className="roas-track-wrap">
        {/* Background track */}
        <div className="roas-track-bg">
          <div className="roas-track-fill" style={{ width: `${pct}%` }} />
        </div>
        {/* Thumb dot */}
        <div
          className="roas-thumb-dot"
          style={{ left: `calc(${pct}% - ${pct * 0.18}px)` }}
        />
        {/* Invisible native range input for interaction */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roas-range-input"
        />
      </div>
      <div className="roas-slider-limits">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}


/* ── Main component ───────────────────────────────────────── */
export default function RoasCalculator() {
  const [strategyIdx, setStrategyIdx] = useState(0);
  const [budget, setBudget] = useState(50000);
  const [convRate, setConvRate] = useState(2.5);
  const [dealValue, setDealValue] = useState(2000);

  const strategy = STRATEGIES[strategyIdx];

  /* Derived outputs */
  const clicks = strategy.cpcBase > 0 ? Math.round(budget / strategy.cpcBase) : Math.round(budget / 20);
  const leads = Math.round(clicks * (convRate / 100));
  const revenue = Math.round(leads * dealValue);
  const roas = budget > 0 ? revenue / budget : 0;

  /* Animate revenue on change */
  const revRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = revRef.current;
    if (!el) return;
    el.style.transform = 'scale(1.04)';
    el.style.opacity = '0.8';
    const t = setTimeout(() => {
      el.style.transform = 'scale(1)';
      el.style.opacity = '1';
    }, 120);
    return () => clearTimeout(t);
  }, [revenue]);

  return (
    <div className="roas-calc-card">
      {/* Dot particles decoration */}
      <div className="roas-dots roas-dots-tl" />
      <div className="roas-dots roas-dots-br" />

      <div className="roas-calc-inner">
        {/* ── Left: inputs ──────────────────────────── */}
        <div className="roas-inputs-col">
          {/* Campaign Strategy dropdown */}
          <div className="roas-field">
            <label className="roas-field-label">Campaign Strategy / Focus</label>
            <div className="roas-select-wrap">
              <select
                value={strategyIdx}
                onChange={(e) => setStrategyIdx(Number(e.target.value))}
                className="roas-select"
              >
                {STRATEGIES.map((s, i) => (
                  <option key={i} value={i}>{s.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="roas-select-icon" />
            </div>
          </div>

          {/* Sliders */}
          <Slider
            label="Monthly Budget Allocation"
            value={budget}
            min={10000}
            max={500000}
            step={5000}
            format={formatINR}
            onChange={setBudget}
            minLabel="₹10,000"
            maxLabel="₹5,00,000"
          />

          <Slider
            label="Conversion Rate"
            value={convRate}
            min={0.5}
            max={10}
            step={0.1}
            format={(v) => `${v.toFixed(1)}%`}
            onChange={setConvRate}
            minLabel="0.5%"
            maxLabel="10.0%"
          />

          <Slider
            label="Average Deal / Sale Value"
            value={dealValue}
            min={500}
            max={50000}
            step={500}
            format={formatINR}
            onChange={setDealValue}
            minLabel="₹500"
            maxLabel="₹50,000"
          />
        </div>

        {/* ── Right: outputs ────────────────────────── */}
        <div className="roas-outputs-col">
          <div className="roas-out-label">ESTIMATED MONTHLY REVENUE</div>
          <div
            ref={revRef}
            className="roas-out-revenue"
            style={{ transition: 'transform 0.12s ease, opacity 0.12s ease' }}
          >
            {formatINR(revenue)}
          </div>

          <div className="roas-out-row">
            <div className="roas-out-cell">
              <div className="roas-out-label">ESTIMATED LEADS / SALES</div>
              <div className="roas-out-num">{leads.toLocaleString('en-IN')}</div>
            </div>
            <div className="roas-out-cell">
              <div className="roas-out-label">PROJECTED PIPELINE ROAS</div>
              <div className="roas-out-num">{roas.toFixed(1)}×</div>
            </div>
          </div>

          <Link
            href="/free-marketing-audit"
            className="roas-cta-btn"
          >
            UNLOCK THIS PIPELINE <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        .roas-calc-card {
          position: relative;
          background: rgba(6, 12, 30, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 3rem 3.5rem;
          overflow: hidden;
        }

        /* dot-pattern overlays */
        .roas-dots {
          position: absolute;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(circle, rgba(0,255,135,0.18) 1px, transparent 1px);
          background-size: 18px 18px;
          pointer-events: none;
        }
        .roas-dots-tl { top: -30px; left: -30px; }
        .roas-dots-br { bottom: -30px; right: -30px; }

        .roas-calc-inner {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .roas-calc-card { padding: 2rem 1.5rem; }
          .roas-calc-inner { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* ── Inputs ── */
        .roas-inputs-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .roas-field { display: flex; flex-direction: column; gap: 0.6rem; }

        .roas-field-label {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
        }

        .roas-select-wrap {
          position: relative;
        }

        .roas-select {
          width: 100%;
          padding: 0.875rem 2.5rem 0.875rem 1.125rem;
          background: rgba(8, 15, 37, 0.7);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9375rem;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .roas-select:focus {
          border-color: var(--accent-green);
        }

        .roas-select-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
        }

        /* ── Slider ── */
        .roas-slider-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .roas-slider-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .roas-slider-label {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #ffffff;
        }

        .roas-slider-val {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--accent-green);
        }

        .roas-track-wrap {
          position: relative;
          height: 20px;
          display: flex;
          align-items: center;
        }

        .roas-track-bg {
          position: absolute;
          left: 0; right: 0;
          height: 4px;
          border-radius: 99px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .roas-track-fill {
          height: 100%;
          background: var(--accent-green);
          border-radius: 99px;
          transition: width 0.1s ease;
        }

        .roas-thumb-dot {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent-green);
          box-shadow: 0 0 12px rgba(0,255,135,0.55);
          transform: translateX(-50%);
          top: 50%;
          margin-top: -9px;
          pointer-events: none;
          z-index: 2;
          transition: left 0.08s ease;
        }

        .roas-range-input {
          position: absolute;
          left: 0; right: 0;
          width: 100%;
          height: 20px;
          opacity: 0;
          cursor: pointer;
          margin: 0;
          z-index: 3;
        }

        .roas-slider-limits {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .roas-outputs-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-left: 1rem;
          border-left: 1px solid rgba(255,255,255,0.06);
        }

        @media (max-width: 900px) {
          .roas-outputs-col {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.06);
            padding-left: 0;
            padding-top: 2rem;
          }
        }

        .roas-out-label {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: -0.75rem;
        }

        .roas-out-revenue {
          font-family: var(--font-serif);
          font-size: 3.25rem;
          font-weight: 800;
          color: var(--accent-green);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        @media (max-width: 600px) {
          .roas-out-revenue { font-size: 2.5rem; }
        }

        .roas-out-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          padding-top: 0.5rem;
        }

        .roas-out-cell {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .roas-out-num {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
        }

        .roas-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background: var(--accent-green);
          color: #030712;
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 1rem 2rem;
          border-radius: 999px;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          margin-top: 0.5rem;
        }

        .roas-cta-btn:hover {
          background: #00e07a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,255,135,0.35);
        }
      `}</style>
    </div>
  );
}
