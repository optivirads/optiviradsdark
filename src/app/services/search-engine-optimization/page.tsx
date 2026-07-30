import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Zap,
  Globe,
  Activity
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('search-engine-optimization');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://www.optivirads.com/services/search-engine-optimization',
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
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
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

      {/* Expanded SEO Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Proven Local SEO Company in Kannur & Comprehensive Organic Search Growth
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As an industry-leading <strong>SEO company in Kannur and Kochi</strong>, OptiVir Ads delivers tailored organic acquisition campaigns for Kerala service businesses, regional e-commerce stores, and national brands. Our search engineers go far beyond standard keyword insertion — we conduct comprehensive <strong>technical SEO audits</strong>, resolve crawl budget bottlenecks, build semantic topic clusters, and engineer nested JSON-LD structured data that forces Google to acknowledge your domain authority.
                </p>
                <p>
                  For businesses targeting localized buyer intent, appearing in the top 3 spots of Google’s Local Map Pack is critical. Our <strong>Google Map Pack ranking agency strategies</strong> integrate geo-coordinate LocalBusiness schema, NAP-consistent local directory citations, and review velocity optimization to place your business in front of customers exactly when commercial intent is highest.
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '10px', marginTop: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>Read Our Organic Search Strategy Blueprint</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Discover our complete framework for capturing regional search volume and outranking local competitors.</p>
                  <Link href="/blog/local-seo-kerala-blueprint" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Explore the Local SEO Kerala Growth Blueprint →
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
