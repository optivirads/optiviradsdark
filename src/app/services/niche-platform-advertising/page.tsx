import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('niche-platform-advertising');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/niche-platform-advertising',
    },
  };
}

export default function NichePlatformAdvertisingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Niche Platform Advertising",
    "serviceType": "B2B & Niche Social Advertising Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Custom campaigns on LinkedIn, Snapchat, and Twitter/X utilizing B2B firmographics and native vertical layouts."
  };

  return (
    <div className="service-detail-page theme-cyan">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Niche Platform Advertising', url: '/services/niche-platform-advertising' },
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
            <div className="icon-badge cyan animate-float">
              <Compass size={28} />
            </div>
            <TextReveal 
              text="Niche Platform Ads" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Scale conversion campaigns outside the search network. Target specific job titles on LinkedIn, Gen Z on Snapchat, and live topics on Twitter/X.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Book B2B or Niche Ads Consultation <ArrowRight size={16} />
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
              <h2 className="section-h2">Expanding Beyond Mainstream Channels</h2>
              <p className="body-text">
                While Google and Meta are industry standard, B2B software systems and high-ticket service companies require highly refined profile matches. Broad demographic targeting on mainstream platforms often leaks budget. 
              </p>
              <p className="body-text">
                We design specific platform strategies: using LinkedIn firmographics to filter by company size, department seniority, and job function; utilizing Snapchat&apos;s interactive lenses to connect with mobile-first consumers; and placing real-time topic ads on Twitter/X to target tech-centric and finance communities.
              </p>
              
              <h3 className="section-h3">Channel Core Capabilities:</h3>
              <ul className="bullets-styled">
                <li><strong>LinkedIn Account-Based Marketing:</strong> Direct list uploads and targeting parameters to filter buying committees.</li>
                <li><strong>Snapchat Immersive Lenses & Video:</strong> Designing fast vertical video hook styles optimized for younger demographics.</li>
                <li><strong>Twitter/X Keyword Context Targeting:</strong> Displaying ads matching trending hashtags and search phrases in real-time.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Pipeline Return Target</h4>
              <div className="feature-kpi-number text-gradient-cyan">2.8x</div>
              <p className="feature-kpi-desc">Average multiplier on qualified B2B pipeline values versus traditional social ads.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Users size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">B2B Lead Generation</span>
                    <p className="kpi-desc">Collecting lead forms directly within LinkedIn to avoid page redirect drop-offs.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Target size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Demographic Match</span>
                    <p className="kpi-desc">Leveraging Snap vertical creatives to direct mobile users to ecommerce carts.</p>
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
          <h2 className="section-h2 text-center">Niche Ads Workflow</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Firmographic Siloing</h3>
              <p className="step-desc">Extracting company lists, buyer profiles, and seniority levels for targeted segmenting.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Creative Localizing</h3>
              <p className="step-desc">Creating native vertical files for Snap and tech-centric copy variants for Twitter/X feeds.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Attribution Safeguard</h3>
              <p className="step-desc">Configuring custom platform conversion pixels to track cross-channel pipeline value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Niche Platform Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                B2B LinkedIn Ads & Niche Platform Advertising Agency
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As a leading <strong>LinkedIn B2B ads agency in India</strong>, OptiVir Ads connects enterprise brands with decision-makers using precise firmographic targeting, job title filters, and Matched Audience lists. Our <strong>niche platform advertising strategies</strong> expand beyond standard ad networks to capture high-value buyer attention across LinkedIn, Pinterest, Twitter/X, and Reddit.
                </p>
                <p>
                  For brands targeting Middle East consumer markets, our <strong>Snapchat ads agency services for the GCC region</strong> deploy vertical full-screen video ads and AR lens experiences engineered for viral engagement and low cost-per-swipe rates.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="niche-platform-advertising" />
    </div>
  );
}
