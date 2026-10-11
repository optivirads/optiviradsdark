import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Target, 
  ArrowRight, 
  ArrowLeft,
  MousePointerClick,
  Crosshair
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getServiceMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  return getServiceMetadata('google-advertising');
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
      "url": "https://www.optivirads.com"
    },
    "areaServed": ["IN", "AE", "QA"],
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

      {/* Deliverables, Fees & Who It Suits */}
      <section style={{ padding: '4rem 0', background: 'rgba(15, 27, 50, 0.55)' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '20px' }}>
            <h2 className="section-h2 text-center" style={{ marginBottom: '1rem' }}>
              Who Google Ads Suits, What Is Included &amp; Transparent Fees
            </h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Precision PPC engineered to intercept ready buyers with zero wasted click budget.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Who Google Ads Suits:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Local clinics, dental practices, salons, and gyms targeting urgent local searches.</li>
                  <li>Home improvement, interior design, and real estate brands needing verified enquiries.</li>
                  <li>High-ticket B2B service firms and industrial suppliers in Kerala and the GCC.</li>
                  <li>Businesses ready to pay for direct phone calls and high-intent quotation requests.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>What Is Included Every Month:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Commercial &amp; transactional keyword mapping (exact &amp; phrase-match clusters).</li>
                  <li>Continuous negative keyword sweeps to eliminate non-buyer search terms.</li>
                  <li>Responsive Search Ad (RSA) copywriting with high-CTR headline testing.</li>
                  <li>Conversion tracking setup (Google Tag Manager, call tracking &amp; offline CRM sync).</li>
                  <li>Weekly bid adjustments and transparent monthly Looker Studio reports.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Investment &amp; Fee Guide:</h3>
                <div style={{ background: 'rgba(15, 27, 50, 0.75)', border: '1px solid rgba(248, 246, 243, 0.1)', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    Local Search Campaign (Kannur / Kerala):
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>
                    Ad spend: ₹15,000 – ₹35,000/mo + management fee (₹12,500/mo). Average cost per qualified call: ₹85 – ₹160.
                  </p>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    High-Growth / GCC Regional (Dubai &amp; Qatar):
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                    Ad spend: 3,000 – 10,000 AED/mo + management fee (1,800 AED/mo). Value-based Smart Bidding with automated Target CPA constraints.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Case Box */}
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(176, 31, 58, 0.08)', border: '1px solid rgba(176, 31, 58, 0.25)', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--brand-ivory)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Real Local Case: Kannur Healthcare Practice Ad Optimization
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                A medical clinic in Kannur was spending ₹45,000/month on Google Ads with generic broad-match keywords, resulting in irrelevant enquiries at ₹280/call. After our negative keyword sweeps and restructuring into geo-targeted exact-match ad groups, their <strong>cost-per-call dropped to ₹84</strong>, doubling verified patient appointment bookings while slashing monthly ad wastage by 42%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded PPC Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '2rem 0 4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Google Ads Agency in Kannur &amp; High-Intent PPC Management Kerala
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As an experienced <strong>Google Ads agency in Kannur</strong> and performance-led <strong>Google Ads management partner across Kerala</strong>, OptiVir Ads engineers paid search campaigns designed for maximum profitability and customer acquisition velocity. We eliminate ad budget wastage through tightly structured Single Keyword Ad Groups (SKAGs), automated Target CPA rules, and offline conversion tracking.
                </p>
                <p>
                  For businesses looking to capture both paid search and organic local foot-traffic, combine your PPC strategy with our{' '}
                  <Link href="/services/google-maps-marketing" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Maps Business Profile Marketing
                  </Link>{' '}
                  or scale visually with our{' '}
                  <Link href="/services/meta-advertising" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Meta (Facebook &amp; Instagram) Advertising Services
                  </Link>.
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '10px', marginTop: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>Calculate Your Campaign Potential</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Estimate potential leads, clicks, and projected returns for your advertising budget.</p>
                  <Link href="/free-tools/roas-calculator" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Try the Free ROAS Calculator →
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
