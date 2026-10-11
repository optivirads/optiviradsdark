import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Search, 
  ArrowRight, 
  ArrowLeft,
  Globe,
  Activity,
  CheckCircle2
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getServiceMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';
  const url = `${baseUrl}/services/search-engine-optimization`;
  const title = 'SEO Services in Kerala & GCC | Search Engine Optimization | OptiVir Ads';
  const description = 'Dominate Google search results and Local Map Pack with technical SEO, schema architecture, Core Web Vitals tuning, and high-intent keyword ranking by OptiVir Ads.';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-share-1200x630.png`,
          width: 1200,
          height: 630,
          alt: 'OptiVir Ads Search Engine Optimization Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-share-1200x630.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SearchEngineOptimizationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Search Engine Optimization",
    "serviceType": "SEO Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://www.optivirads.com"
    },
    "areaServed": ["IN", "AE", "QA"],
    "description": "Organic search domination. Schema mapping, core web vitals speed adjustments, and competitor intent conquest."
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
          { name: 'Search Engine Optimization', url: '/services/search-engine-optimization' },
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
              <Search size={28} />
            </div>
            <TextReveal 
              text="Search Engine Optimization" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Sustain compound organic traffic, map advanced metadata schema, and conquer high-value search phrases without ad costs.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Get a Free Technical SEO Audit <ArrowRight size={16} />
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
              <h2 className="section-h2">Topical Authority: The Key to Organic Domination</h2>
              <p className="body-text">
                Traditional keyword-stuffing methods no longer work. Google&apos;s Hummingbird and BERT algorithms crawl websites for conceptual intent. We map your domain structure to establish complete semantic clusters—siloing content logically to signal topical trust.
              </p>
              <p className="body-text">
                By cleaning up crawl bottlenecks, injecting specific structured data schemas, and writing content clusters that resolve the exact query intents of target buyers, we build a compound asset that continuously drives leads without ad cost leaks.
              </p>
              
              <h3 className="section-h3">Technical Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Semantic Topic Siloing:</strong> Structuring content hierarchies to dominate commercial keywords.</li>
                <li><strong>JSON-LD Schema Markup:</strong> Injecting specific metadata schemas (Service, FAQPage, Breadcrumb).</li>
                <li><strong>Core Web Vitals Speed Auditing:</strong> Coding layouts to score green on Web Vitals indexes.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Traffic Impact</h4>
              <div className="feature-kpi-number text-gradient-green">+140%</div>
              <p className="feature-kpi-desc">Average organic search traffic growth tracked within 6 months of campaign setup.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Globe size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Semantic Authority</span>
                    <p className="kpi-desc">Structuring topical directories to rank for broad clusters and related entities.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Activity size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Technical Indexing</span>
                    <p className="kpi-desc">Speeding up database lookups and static renderings to maximize crawl indexing frequency.</p>
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
          <h2 className="section-h2 text-center">SEO Domination Lifecycle</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Technical Cleanliness Sweep</h3>
              <p className="step-desc">Resolving structural redirect loops, broken scripts, and crawl-budget barriers.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Intent Mapping</h3>
              <p className="step-desc">Targeting high-volume keywords with transaction-level search intent maps.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Schema Serialization</h3>
              <p className="step-desc">Configuring rich metadata schemas to trigger Google search card snippets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables, Fees & Who It Suits */}
      <section style={{ padding: '4rem 0', background: 'rgba(15, 27, 50, 0.55)' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '20px' }}>
            <h2 className="section-h2 text-center" style={{ marginBottom: '1rem' }}>
              Who SEO Suits, What Is Included &amp; Transparent Monthly Retainers
            </h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Compound organic rankings that build permanent enterprise value without ongoing ad spend leaks.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Who SEO Suits Best:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Established businesses tired of rising cost-per-click on Google and Meta Ads.</li>
                  <li>Healthcare clinics, hospitals, educational institutions, and B2B manufacturers.</li>
                  <li>Local service providers wanting to capture high-volume &ldquo;near me&rdquo; and regional searches.</li>
                  <li>Brands building long-term domain equity and authority in Kerala and GCC markets.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>What Is Included Every Month:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Comprehensive technical crawl audit (fixing 404s, redirect chains &amp; Core Web Vitals).</li>
                  <li>Semantic topic cluster keyword research mapped to commercial intent.</li>
                  <li>On-page content optimization and JSON-LD schema (FAQPage, Service, Organization).</li>
                  <li>High-quality contextual backlink acquisition from authoritative industry publications.</li>
                  <li>Monthly Google Search Console ranking and organic conversion progression report.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Transparent Retainer Guide:</h3>
                <div style={{ background: 'rgba(15, 27, 50, 0.75)', border: '1px solid rgba(248, 246, 243, 0.1)', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    Local Market Authority (Kerala):
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>
                    ₹16,500 – ₹24,000/month · Technical cleanups, on-page optimization, 4 high-authority content assets, local schema, and rank tracking.
                  </p>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    Regional &amp; GCC Expansion (UAE / Qatar):
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                    1,800 – 3,500 AED/month · Multi-regional search clusters, bilingual English/Arabic technical SEO, and enterprise backlink acquisition.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Case Box */}
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(176, 31, 58, 0.08)', border: '1px solid rgba(176, 31, 58, 0.25)', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--brand-ivory)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Real Local Case: Kerala Commercial B2B Manufacturer
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                A commercial packaging supplier in Kerala had zero organic traffic from Google. Over 5 months, we published 14 semantic topic cluster articles and resolved 82 technical indexing errors. Today, they rank <strong>#1 on Google for 18 primary commercial keywords</strong>, receiving over <strong>1,400 monthly organic organic visitors and 35+ verified wholesale enquiries per month</strong> completely free of ad costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded SEO Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '2rem 0 4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Performance SEO Agency in Kerala &amp; Strategic Organic Search Domination
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  Recognized as a leading <strong>SEO company in Kerala</strong> and trusted search optimization partner in Kannur, Calicut, and Kochi, OptiVir Ads engineers sustainable organic ranking engines. We look beyond vanity keyword rankings to focus strictly on commercial and transactional queries that generate verified customer sales.
                </p>
                <p>
                  Need local Map Pack visibility in your immediate neighborhood? Explore our dedicated{' '}
                  <Link href="/services/google-maps-marketing" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Maps Marketing &amp; Business Profile Optimization
                  </Link>{' '}
                  page, or learn how paid search pairs with organic growth via our{' '}
                  <Link href="/services/google-advertising" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Ads (PPC) Management Services
                  </Link>.
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '10px', marginTop: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>Read Our Organic Search Strategy Blueprint</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Discover our complete framework for capturing regional search volume and outranking local competitors.</p>
                  <Link href="/blog/the-ultimate-guide-to-local-seo-for-kerala-businesses-in-2026" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Read the Local SEO Guide for Kerala Businesses →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="search-engine-optimization" />
    </div>
  );
}
