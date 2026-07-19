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

      <Faq pageKey="web-development" />
    </div>
  );
}
