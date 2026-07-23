import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  MousePointerClick,
  Crosshair,
  TrendingUp
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('google-advertising');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/google-advertising',
    },
  };
}

export default function GoogleAdvertisingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Advertising",
    "serviceType": "Google PPC Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Target bottom-of-funnel buyers. High-intent keyword architectures, value-based Smart Bidding, and ad waste reduction loops."
  };

  return (
    <div className="service-detail-page theme-green">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Google Advertising', url: '/services/google-advertising' },
        ]}
      />
      <div className="grid-overlay" />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <Link href="/services" className="back-link">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="hero-content">
            <div className="icon-badge green animate-float">
              <Target size={28} />
            </div>
            <TextReveal 
              text="Google Ads (Search & Display)" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Intercept commercial intent, optimize bid auctions programmatically, and lock in bottom-of-funnel customer conversions.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Analyze My Ad Accounts <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Details */}
      <section className="service-details-body">
        <div className="container grid-two-columns">
          {/* Main Info */}
          <ScrollReveal direction="left">
            <div className="info-main-content">
              <h2 className="section-h2">Bottom-of-Funnel Intent Capture</h2>
              <p className="body-text">
                Google Search remains the single most efficient acquisition channel because it targets users at the exact millisecond they express a desire to buy. Most agencies waste budget by targeting generic, high-volume broad terms.
              </p>
              <p className="body-text">
                Our team maps exact-match and phrase-match campaign structures targeting transaction-level keywords. We design custom-engineered landing templates to minimize path friction, ensuring that high-CPC click traffic translates directly into sales pipeline pipelines.
              </p>
              
              <h3 className="section-h3">Strategic Core Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>High-Intent Search Structures:</strong> Bidding strictly on transactional and brand-intent keyword clusters.</li>
                <li><strong>Negative Keyword Mapping:</strong> Continuous exclusion sweeps to isolate irrelevant traffic.</li>
                <li><strong>Smart Auction Optimization:</strong> Value-based bid rules aligned with your back-end profit margins.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Cost-Per-Lead Impact</h4>
              <div className="feature-kpi-number text-gradient-green">-35%</div>
              <p className="feature-kpi-desc">Average reduction in acquisition cost-per-lead through negative keyword isolation.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <MousePointerClick size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Intent Capture</span>
                    <p className="kpi-desc">Locking down commercial terms to ensure budget is spent only on ready buyers.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Crosshair size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Auction Bidding</span>
                    <p className="kpi-desc">Integrating Smart Bidding algorithms to dynamically capture high-conversion slots.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology */}
      <section className="service-methodology">
        <div className="container">
          <h2 className="section-h2 text-center">Google Campaign Engineering Lifecycle</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Intent Clustering</h3>
              <p className="step-desc">Mapping commercial search queries and building a baseline dictionary of negative phrases.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Campaign Siloing</h3>
              <p className="step-desc">Configuring tightly grouped single-theme ad groups matching targeted search terms.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Smart Bidding Shift</h3>
              <p className="step-desc">Transitioning to value-based bidding filters once baseline lead generation patterns stabilize.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded PPC Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                High-Intent Google Ads Agency in Kerala & Precision PPC Management
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As a performance-led <strong>Google Ads agency in Kerala</strong>, OptiVir Ads engineers paid search campaigns designed for maximum profitability and customer acquisition velocity. Our <strong>PPC management services in Kochi</strong> and across India eliminate wasteful ad spend by constructing granular, high-intent Single Keyword Ad Groups (SKAGs), continuous negative keyword exclusions, and automated Target CPA optimization models.
                </p>
                <p>
                  Whether running high-value B2B lead generation campaigns or e-commerce Google Shopping ads across India and the GCC, our certified search specialists continuously optimize ad copy quality scores, landing page alignment, and bidding strategy to yield a compounding 3.5×+ Return on Ad Spend (ROAS).
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '10px', marginTop: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>Read Our PPC Scaling Blueprint</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Learn how we structure Google Search & Smart Bidding campaigns to lower customer acquisition costs.</p>
                  <Link href="/blog/google-ads-scaling-blueprint" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Explore the Google Ads Profitability Guide →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="google-advertising" />
    </div>
  );
}
