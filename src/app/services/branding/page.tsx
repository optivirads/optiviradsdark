import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Award,
  Layers,
  Crown
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('branding');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://www.optivirads.com/services/branding',
    },
  };
}

export default function BrandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Branding & Corporate Identity",
    "serviceType": "Brand Strategy & Logo Design Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Establish a cohesive, memorable corporate brand. Custom logos, typographic layouts, brand guidelines books, and message frameworks that command trust."
  };

  return (
    <div className="service-detail-page theme-purple">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Branding & Corporate Identity', url: '/services/branding' },
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
            <div className="icon-badge purple animate-float">
              <Palette size={28} />
            </div>
            <TextReveal 
              text="Branding & Corporate Identity" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Build a distinctive, high-trust corporate identity. Custom logos, style guide books, and messaging frameworks designed to capture market share.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Build My Brand Identity <ArrowRight size={16} />
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
              <h2 className="section-h2">Distinctive Identity that Commands Value</h2>
              <p className="body-text">
                A professional corporate brand establishes instant legitimacy. In competitive digital ecosystems, a disjointed visual presentation dilutes conversion potential and inflates customer acquisition costs.
              </p>
              <p className="body-text">
                Our branding service structures cohesive assets that bridge traditional layouts and modern digital feeds. We analyze competitive styling landscapes, draft responsive logos, define typographic hierarchies, and frame clear brand statements to keep all marketing aligned.
              </p>
              
              <h3 className="section-h3">Strategic Core Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Corporate Style Guidelines:</strong> Comprehensive brand books covering logo placement rules, sizing parameters, and palette values.</li>
                <li><strong>Cohesive Visual Systems:</strong> Custom color palettes, typography matches, letterheads, and corporate business card structures.</li>
                <li><strong>Messaging & Positioning:</strong> Voice tone blueprints, demographic message mapping, and core value proposition framing.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Brand Recognition Lift</h4>
              <div className="feature-kpi-number text-gradient-purple">+65%</div>
              <p className="feature-kpi-desc">Average increase in customer trust metrics and visual recall margins through cohesive style guide sets.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Layers size={16} className="kpi-icon text-purple-400" />
                  <div>
                    <span className="kpi-title">Cohesive Guidelines</span>
                    <p className="kpi-desc">Structuring detailed brand guidelines books to maintain consistency across all media channels.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Award size={16} className="kpi-icon text-purple-400" />
                  <div>
                    <span className="kpi-title">Visual Credibility</span>
                    <p className="kpi-desc">Crafting premium logos and typographic grids that project instant market authority.</p>
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
          <h2 className="section-h2 text-center">Identity Engineering Lifecycle</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Audit & Position</h3>
              <p className="step-desc">Analyzing competitive branding layouts, identifying style gaps, and defining brand positioning maps.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Visual Drafting</h3>
              <p className="step-desc">Creating responsive logo designs, auditing typography scales, and drafting color palette models.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Guidelines Release</h3>
              <p className="step-desc">Compiling visual templates, packaging style guide rules, and publishing unified corporate assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Branding Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Strategic Branding Agency in Kannur & Corporate Identity Design
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As a leading <strong>branding agency in Kannur and Kochi</strong>, OptiVir Ads crafts memorable corporate identities, custom logo systems, and visual positioning frameworks that command trust. Our <strong>corporate identity design team in Kerala</strong> translates business values into cohesive visual assets that elevate your brand above regional competitors.
                </p>
                <p>
                  We deliver comprehensive <strong>brand guideline books</strong> covering typography hierarchies, HSL color palettes, responsive logo applications, tone-of-voice messaging, and social media media kits designed for multi-channel consistency.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="branding" />
    </div>
  );
}
