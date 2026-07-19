import { Metadata } from 'next';
import Link from 'next/link';
import RoasCalculator from '@/components/RoasCalculator';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import { BarChart3, TrendingUp, ShieldCheck, Zap, Target, Users, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free ROAS & ROI Calculator for Ad Campaigns | OptiVir Ads',
  description: 'Calculate your Return on Ad Spend (ROAS) instantly. A free marketing tool by OptiVir Ads to forecast campaign profitability, leads, and revenue.',
  openGraph: {
    title: 'Free ROAS & ROI Calculator',
    description: 'Calculate your Return on Ad Spend (ROAS) instantly. Forecast campaign profitability, leads, and revenue.',
    url: '/free-tools/roas-calculator',
  }
};

const BENCHMARKS = [
  { channel: 'Google Search Ads', avgRoas: '3.5×', cpc: '₹28–55', best: 'High-intent B2C & Services' },
  { channel: 'Meta (FB/IG) Ads', avgRoas: '2.8×', cpc: '₹18–35', best: 'Brand awareness & Retargeting' },
  { channel: 'SEO + Content', avgRoas: '4.5×', cpc: 'Organic', best: 'Long-term authority building' },
  { channel: 'Email Marketing', avgRoas: '5.2×', cpc: '₹1–3', best: 'Retention & upsell campaigns' },
  { channel: 'LinkedIn Ads', avgRoas: '2.1×', cpc: '₹95–150', best: 'B2B enterprise & SaaS' },
  { channel: 'YouTube Ads', avgRoas: '3.0×', cpc: '₹12–25', best: 'Product launches & TOFU' },
];

const HOW_IT_WORKS = [
  { icon: <Target size={22} />, title: 'Pick Your Channel', desc: 'Select the marketing channel that matches your campaign focus — Google, Meta, SEO, Email, LinkedIn, or YouTube.' },
  { icon: <BarChart3 size={22} />, title: 'Set Your Parameters', desc: 'Adjust your monthly budget, expected conversion rate, and average deal or sale value using the interactive sliders.' },
  { icon: <TrendingUp size={22} />, title: 'See Real Projections', desc: 'Instantly see your estimated monthly revenue, projected leads/sales, and pipeline ROAS based on industry benchmarks.' },
  { icon: <Zap size={22} />, title: 'Unlock Your Pipeline', desc: 'Book a free audit and let our growth engineers turn these projections into a live, optimised campaign.' },
];

const TRUST_STATS = [
  { val: '₹4.2Cr+', label: 'Ad Spend Managed' },
  { val: '4.1×', label: 'Average Client ROAS' },
  { val: '130+', label: 'Campaigns Launched' },
  { val: '98%', label: 'Client Retention Rate' },
];

export default function RoasCalculatorPage() {
  return (
    <main className="roas-page">
      <OrganizationSchema />

      {/* Background grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Ambient glow blobs */}
      <div className="roas-blob roas-blob-1" aria-hidden="true" />
      <div className="roas-blob roas-blob-2" aria-hidden="true" />

      <div className="container roas-container">

        {/* Breadcrumbs */}
        <nav className="roas-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={12} />
          <span>Free Tools</span>
          <ChevronRight size={12} />
          <span className="active">ROAS Calculator</span>
        </nav>

        {/* ── Hero ──────────────────────────────────────────── */}
        <header className="roas-hero-header">
          <div className="roas-badge">
            <span className="roas-badge-dot" />
            Free Marketing Intelligence Tool
          </div>
          <h1 className="roas-hero-title">Calculate Your Growth Potential</h1>
          <p className="roas-hero-sub">
            Select a service vertical and adjust parameters to see standard projections of your sales pipeline growth.
          </p>
        </header>

        {/* ── Calculator ────────────────────────────────────── */}
        <section className="roas-tool-wrap" aria-label="ROAS Calculator">
          <RoasCalculator />
        </section>

        {/* ── Trust Strip ───────────────────────────────────── */}
        <section className="roas-trust-strip" aria-label="Performance stats">
          {TRUST_STATS.map((s, i) => (
            <div key={i} className="roas-trust-item">
              <div className="roas-trust-val">{s.val}</div>
              <div className="roas-trust-label">{s.label}</div>
            </div>
          ))}
        </section>

        {/* ── How it works ──────────────────────────────────── */}
        <section className="roas-section" aria-labelledby="how-it-works-heading">
          <div className="roas-section-header">
            <h2 id="how-it-works-heading" className="roas-section-title">How the Calculator Works</h2>
            <p className="roas-section-sub">Four steps to your personalised revenue projection.</p>
          </div>
          <div className="roas-steps-grid">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="roas-step-card glass-card">
                <div className="roas-step-num">0{i + 1}</div>
                <div className="roas-step-icon">{step.icon}</div>
                <h3 className="roas-step-title">{step.title}</h3>
                <p className="roas-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benchmark Table ───────────────────────────────── */}
        <section className="roas-section" aria-labelledby="benchmarks-heading">
          <div className="roas-section-header">
            <h2 id="benchmarks-heading" className="roas-section-title">Industry ROAS Benchmarks</h2>
            <p className="roas-section-sub">
              Standard performance metrics across digital marketing channels for Indian & GCC markets.
            </p>
          </div>
          <div className="roas-table-wrap glass-card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="roas-table">
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Avg. ROAS</th>
                  <th>Est. CPC</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARKS.map((row, i) => (
                  <tr key={i}>
                    <td className="roas-table-channel">{row.channel}</td>
                    <td className="roas-table-roas">{row.avgRoas}</td>
                    <td>{row.cpc}</td>
                    <td className="roas-table-best">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="roas-table-note">
            * Benchmarks represent median performance across OptiVir-managed campaigns. Actual results vary by industry, targeting, and creative quality.
          </p>
        </section>

        {/* ── SEO Guide ─────────────────────────────────────── */}
        <section className="roas-section roas-guide-section" aria-labelledby="guide-heading">
          <div className="roas-guide-grid">
            <div className="roas-guide-content">
              <h2 id="guide-heading" className="roas-section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                What is a Good ROAS?
              </h2>
              <p>
                Return on Ad Spend (ROAS) is the single metric that dictates whether your digital marketing engine is scalable or a money drain.
                A ROAS of <strong>1×</strong> means you break even. For every ₹1 you spend, you generate ₹1 in revenue — zero profit.
              </p>
              <p>
                For service businesses in India, a target ROAS between <strong>3× to 5×</strong> is considered healthy and profitable.
                E-commerce brands often need 4×+ to account for Cost of Goods Sold (COGS) and logistics.
              </p>
              <p>
                In high-competition GCC markets (Dubai, Abu Dhabi), blended ROAS benchmarks sit closer to <strong>2.5× to 4×</strong> due to
                elevated CPCs and audience saturation on premium platforms.
              </p>

              <h3 className="roas-guide-h3">3 Proven Ways to Improve Your ROAS</h3>
              <ol className="roas-guide-list">
                {[
                  { title: 'Decrease CPC', body: 'Improve your ad Quality Score on Google or Relevance Score on Meta. Tighter audience targeting and better creative reduces wasted spend and brings CPC down by 20–40%.' },
                  { title: 'Increase Landing Page Conversion Rate', body: 'Traffic is worthless if the page doesn\'t convert. Optimise above-the-fold content, load speed (target <2.5s LCP), and add strong social proof to push CVR from 1% to 3%+.' },
                  { title: 'Raise Average Deal / Order Value', body: 'Introduce bundled offers, upsells, or higher-tier service packages. A 20% increase in AOV can double your ROAS without spending a single extra rupee on ads.' },
                ].map((item, i) => (
                  <li key={i} className="roas-guide-li">
                    <span className="roas-guide-num">{i + 1}</span>
                    <div>
                      <strong>{item.title}:</strong> {item.body}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="roas-guide-aside">
              <div className="roas-aside-card glass-card">
                <ShieldCheck size={28} className="roas-aside-icon" />
                <h3 className="roas-aside-title">Free ROAS Audit</h3>
                <p className="roas-aside-body">
                  Is your current ad spend delivering below 2× ROAS? Our growth engineers will diagnose your campaigns for free and show you exactly where budget is leaking.
                </p>
                <ul className="roas-aside-ul">
                  {['Full account audit (Google + Meta)', 'Conversion tracking verification', 'Audience overlap & waste analysis', 'Actionable ROAS improvement plan'].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link href="/free-marketing-audit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
                  Request Free Audit
                </Link>
              </div>

              <div className="roas-aside-formula glass-card">
                <p className="roas-formula-label">ROAS Formula</p>
                <div className="roas-formula">
                  <div className="roas-formula-top">Revenue Generated</div>
                  <div className="roas-formula-divider" />
                  <div className="roas-formula-bottom">Ad Spend</div>
                </div>
                <p className="roas-formula-example">
                  e.g. ₹1,66,000 ÷ ₹50,000 = <strong>3.3× ROAS</strong>
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── CTA Section ───────────────────────────────────── */}
        <section className="roas-cta-section glass-card" aria-labelledby="cta-heading">
          <div className="roas-cta-inner">
            <Users size={32} className="roas-cta-icon" />
            <h2 id="cta-heading" className="roas-cta-title">Ready to Hit Your Target ROAS?</h2>
            <p className="roas-cta-sub">
              Our growth engineers specialise in turning underperforming campaigns into predictable, high-ROAS revenue engines.
              Book a free 30-minute strategy call — no hard sell, just data.
            </p>
            <div className="roas-cta-actions">
              <Link href="/free-marketing-audit" className="btn-primary">
                Get Free Marketing Audit
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .roas-page {
          min-height: 100vh;
          background: var(--bg-primary);
          padding: 7rem 0 8rem;
          position: relative;
          overflow: hidden;
        }

        .roas-container {
          position: relative;
          z-index: 2;
        }

        /* Glow blobs */
        .roas-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .roas-blob-1 {
          width: 500px; height: 500px;
          top: -100px; right: -150px;
          background: radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%);
        }
        .roas-blob-2 {
          width: 600px; height: 600px;
          bottom: 0; left: -200px;
          background: radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%);
        }

        /* Breadcrumb */
        .roas-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 3.5rem;
        }
        .roas-breadcrumb a { color: var(--text-muted); transition: color 0.2s; }
        .roas-breadcrumb a:hover { color: var(--accent-cyan); }
        .roas-breadcrumb .active { color: #ffffff; }

        /* Badge */
        .roas-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-green);
          background: rgba(0,255,135,0.07);
          border: 1px solid rgba(0,255,135,0.2);
          border-radius: 999px;
          padding: 0.35rem 0.9rem;
          margin-bottom: 1.25rem;
        }
        .roas-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* Hero */
        .roas-hero-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .roas-hero-title {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        @media (max-width: 768px) {
          .roas-hero-title { font-size: 2.1rem; }
        }
        .roas-hero-sub {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 560px;
          margin: 0 auto;
        }

        /* Tool */
        .roas-tool-wrap { margin-bottom: 5rem; }

        /* Trust strip */
        .roas-trust-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 7rem;
        }
        @media (max-width: 768px) {
          .roas-trust-strip { grid-template-columns: repeat(2, 1fr); }
        }
        .roas-trust-item {
          background: rgba(8, 15, 37, 0.6);
          backdrop-filter: blur(10px);
          padding: 2rem 1.5rem;
          text-align: center;
        }
        .roas-trust-val {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-green);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .roas-trust-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 600;
        }

        /* Section common */
        .roas-section { margin-bottom: 7rem; }
        .roas-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .roas-section-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .roas-section-sub {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* How it works steps */
        .roas-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .roas-steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) {
          .roas-steps-grid { grid-template-columns: 1fr; }
        }
        .roas-step-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 2rem;
          position: relative;
        }
        .roas-step-num {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 800;
          color: rgba(0,255,135,0.12);
          line-height: 1;
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
        }
        .roas-step-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(0,255,135,0.08);
          color: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,255,135,0.15);
          margin-bottom: 0.5rem;
        }
        .roas-step-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }
        .roas-step-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Benchmark table */
        .roas-table-wrap { border-radius: 16px; }
        .roas-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }
        .roas-table thead tr {
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .roas-table th {
          padding: 1rem 1.5rem;
          text-align: left;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }
        .roas-table tbody tr {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s;
        }
        .roas-table tbody tr:last-child { border-bottom: none; }
        .roas-table tbody tr:hover { background: rgba(255,255,255,0.02); }
        .roas-table td {
          padding: 1rem 1.5rem;
          color: var(--text-secondary);
        }
        .roas-table-channel { color: #ffffff; font-weight: 600; }
        .roas-table-roas {
          color: var(--accent-green);
          font-weight: 700;
          font-family: var(--font-serif);
          font-size: 1rem;
        }
        .roas-table-best { color: var(--text-muted); font-size: 0.8125rem; }
        .roas-table-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 1rem;
          text-align: center;
          font-style: italic;
        }

        /* Guide section */
        .roas-guide-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: flex-start;
        }
        @media (max-width: 960px) {
          .roas-guide-grid { grid-template-columns: 1fr; }
        }
        .roas-guide-content {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          line-height: 1.75;
        }
        .roas-guide-content p { margin-bottom: 1.25rem; }
        .roas-guide-content strong { color: #ffffff; }
        .roas-guide-h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 2.5rem 0 1.25rem;
        }
        .roas-guide-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roas-guide-li {
          display: flex;
          gap: 1rem;
          font-size: 0.9375rem;
        }
        .roas-guide-num {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(0,255,135,0.1);
          color: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        /* Aside */
        .roas-guide-aside {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 7rem;
        }
        .roas-aside-card { padding: 2rem; }
        .roas-aside-icon { color: var(--accent-green); margin-bottom: 1rem; }
        .roas-aside-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        .roas-aside-body {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .roas-aside-ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .roas-aside-ul li {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          padding-left: 1.25rem;
          position: relative;
        }
        .roas-aside-ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-green);
        }

        /* Formula card */
        .roas-aside-formula { padding: 1.75rem; text-align: center; }
        .roas-formula-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .roas-formula {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .roas-formula-top, .roas-formula-bottom {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }
        .roas-formula-divider {
          width: 70%;
          height: 1px;
          background: rgba(0,255,135,0.4);
        }
        .roas-formula-example {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }
        .roas-formula-example strong { color: var(--accent-green); }

        /* CTA section */
        .roas-cta-section {
          text-align: center;
          padding: 4rem;
        }
        @media (max-width: 768px) {
          .roas-cta-section { padding: 2.5rem 1.5rem; }
        }
        .roas-cta-inner {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .roas-cta-icon { color: var(--accent-green); }
        .roas-cta-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }
        .roas-cta-sub {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .roas-cta-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }
      `}</style>
    </main>
  );
}
