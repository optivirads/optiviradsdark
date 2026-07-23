import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Zap,
  Activity,
  ShieldAlert
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('analytics-operations');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/analytics-operations',
    },
  };
}

export default function AnalyticsOperationsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Analytics & Marketing Operations",
    "serviceType": "Marketing Analytics & Tracking Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Server-side tag manager tracking, iOS 14 attribution mapping, and Looker Studio data consolidation."
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
          { name: 'Analytics & Operations', url: '/services/analytics-operations' },
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
              <BarChart3 size={28} />
            </div>
            <TextReveal 
              text="Analytics & Operations" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Configure server-side conversion tracking, resolve ad-block data loss, and build clean consolidated Looker Studio reporting dashboards.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Audit My Tracking Infrastructure <ArrowRight size={16} />
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
              <h2 className="section-h2">Attribution Accuracy: The Foundation of Scale</h2>
              <p className="body-text">
                If your tracking setups are misreporting, Google and Meta&apos;s smart bidding algorithms will optimize campaigns for the wrong user actions. Browser ad-blockers and privacy regulations systematically erase conversion matches.
              </p>
              <p className="body-text">
                We implement clean server-side containers using Google Tag Manager and Cloud platforms. By sending secure, hashed customer details directly to Meta and Google, we restore data integrity, stabilize bidding algorithms, and lower client cost-per-acquisition metrics.
              </p>
              
              <h3 className="section-h3">Technical Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Server-Side Tagging:</strong> Cloud server tracking endpoints to preserve attribution data accuracy.</li>
                <li><strong>Advanced GA4 E-commerce Audits:</strong> Custom event parameters, checkout funnels, and retention tracking.</li>
                <li><strong>Consolidated Dashboard Portals:</strong> Clear Looker Studio templates reporting clean cross-channel ROAS metrics.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Tracking Accuracy</h4>
              <div className="feature-kpi-number text-gradient-green">99.8%</div>
              <p className="feature-kpi-desc">Verified data mapping accuracy, eliminating conversion misattribution issues.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Activity size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Event Deduplication</span>
                    <p className="kpi-desc">Correctly matching browser pixel fires with server-side API payloads to avoid double counting.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <ShieldAlert size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Attribution Safeguard</span>
                    <p className="kpi-desc">Bypassing browser-based tracking limits to preserve ad account target algorithms.</p>
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
          <h2 className="section-h2 text-center">Analytics Setup Roadmap</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Attribution Audit</h3>
              <p className="step-desc">Identifying pixel data drop-off rates and testing Google Tag Manager trigger fires.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Server Container Build</h3>
              <p className="step-desc">Staging secure server container endpoints in Google Cloud platform environments.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">dashboard deployment</h3>
              <p className="step-desc">Consolidating cross-channel ad accounts spend datasets into a live Looker Studio interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Analytics Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Server-Side GTM & GA4 Analytics Setup Agency in India
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  OptiVir Ads is a specialist <strong>GA4 setup agency in India</strong> building robust, server-side data infrastructure for multi-channel brands. Our analytics engineers implement <strong>server-side Google Tag Manager (sGTM) containers</strong> on Google Cloud Platform, bypassing browser ad-blockers, ITP cookie expirations, and signal loss to recover 100% of conversion event data.
                </p>
                <p>
                  We unify ad spend datasets from Google Ads, Meta Ads, and organic search into custom <strong>Looker Studio automated dashboards</strong> with multi-touch revenue attribution modeling, providing business owners with real-time ROAS visibility.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="analytics-operations" />
    </div>
  );
}
