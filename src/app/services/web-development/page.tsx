import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Zap,
  Cpu,
  Laptop
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('web-development');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/web-development',
    },
  };
}

export default function WebDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development & CRO",
    "serviceType": "Next.js & Custom Web Development Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Custom Next.js and React website development optimized for Core Web Vitals, speed, and conversion flow velocity."
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
          { name: 'Web Development & CRO', url: '/services/web-development' },
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
              <Code size={28} />
            </div>
            <TextReveal 
              text="Custom Web Development" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Engineer high-performance, conversion-rate optimized websites using Next.js and React, coded for loading speed and complete search index accessibility.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Request a Custom Website Proposal <ArrowRight size={16} />
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
              <h2 className="section-h2">High-Performance Frameworks for Growth</h2>
              <p className="body-text">
                Generic drag-and-drop page builders load heavy third-party assets and bloated layout files. This slows down page speeds, hurting both your Google organic search positions and mobile user conversion rates.
              </p>
              <p className="body-text">
                We custom-engineer fast web interfaces using Next.js. By utilizing static exports, optimized server caching, responsive layout configurations, and semantic code structures, we deliver a premium UX that turns incoming ad clicks into revenue pipelines.
              </p>
              
              <h3 className="section-h3">Technical Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Next.js Static Generation:</strong> Page speeds loading under 1.2s to maximize user retention.</li>
                <li><strong>UX-Driven Layout Design:</strong> Clear typography hierarchy and call-to-actions built to limit friction.</li>
                <li><strong>Semantic Code Architecture:</strong> Schema structures, structured layout tags, and alt descriptors.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Load Velocity Target</h4>
              <div className="feature-kpi-number text-gradient-cyan">&lt;1.2s</div>
              <p className="feature-kpi-desc">Average loading speed maintained across both desktop and mobile client layouts.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Cpu size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Next.js Framework</span>
                    <p className="kpi-desc">Deploying server-side rendering for optimal indexability and fast interactions.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Laptop size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">CRO Optimization</span>
                    <p className="kpi-desc">Clean, simple navigation pathways designed to increase submission conversions.</p>
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
          <h2 className="section-h2 text-center">Development Framework</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">UX/UI Blueprinting</h3>
              <p className="step-desc">Staging wireframes and high-fidelity layouts designed to minimize user friction.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Custom Code Sprints</h3>
              <p className="step-desc">Writing clean React components and optimizing image and code assets for load speed.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Technical Schema Launch</h3>
              <p className="step-desc">Deploying page files, configuring hosting setups, and verifying Google console indexing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Web Dev Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Premier Custom Next.js Web Development Agency in Kerala
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As a specialist <strong>custom web development agency in Kerala</strong>, OptiVir Ads engineers lightning-fast, high-converting digital web applications using modern Next.js and React technology stacks. Unlike bloated WordPress page builders or slow template sites, our custom <strong>Next.js development company services</strong> deliver sub-1.2 second load times and perfect 100/100 Core Web Vitals scores that directly improve Google organic rankings.
                </p>
                <p>
                  Our <strong>landing page design and conversion rate optimization (CRO)</strong> engineering ensures every visitor experiences frictionless navigation, mobile responsiveness, and intuitive Call-To-Action flows designed to convert paid ad traffic into qualified customer leads.
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '10px', marginTop: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>Next.js vs. WordPress Performance Benchmark</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>See why custom React web applications outperform legacy CMS builders in speed, security, and conversion rate.</p>
                  <Link href="/blog/nextjs-vs-wordpress-performance" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Read the Next.js vs. WordPress Performance Breakdown →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="web-development" />
    </div>
  );
}
