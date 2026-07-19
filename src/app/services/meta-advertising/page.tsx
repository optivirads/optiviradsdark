import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Megaphone, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Zap,
  Layers,
  Compass
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('meta-advertising');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/meta-advertising',
    },
  };
}

export default function MetaAdvertisingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meta Advertising",
    "serviceType": "Facebook & Instagram Advertising Agency",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Disrupt scroll behavior with visual ad creative testing and programmatic value-based bidding filters across Facebook and Instagram channels."
  };

  
  return (
    <div className="service-detail-page theme-purple">
      {/* Schema Injection */}
      
      <div className="grid-overlay" />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <Link href="/services" className="back-link">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="hero-content">
            <div className="icon-badge purple animate-float">
              <Megaphone size={28} />
            </div>
            <TextReveal 
              text="Meta Advertising (FB & IG)" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Command attention, deploy programmatic budget controls, and maximize conversions across Facebook and Instagram networks.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Request a Paid Ads Audit <ArrowRight size={16} />
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
              <h2 className="section-h2">Disrupting the Feed: Scalable Social Performance</h2>
              <p className="body-text">
                Most ad spend is wasted because agencies scale budgets too quickly, triggering bidding learning resets, or they run single creatives that rapidly fatigue. Our Meta Ads framework utilizes a creative sandbox methodology to continuously feed the algorithm with high-intent visual hook combinations.
              </p>
              <p className="body-text">
                By combining value-based custom targeting (using offline conversion values) with clean server-side data mapping via the Conversions API, we ensure that Meta targets users with maximum lifetime value potential.
              </p>
              
              <h3 className="section-h3">Advanced Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Creative Sandbox Matrices:</strong> Systematic, ongoing verification of copywriting hooks and layout styles.</li>
                <li><strong>Conversions API (CAPI) Tracking:</strong> Multi-tier server data loops to prevent browser tracking loss.</li>
                <li><strong>Dynamic Catalog Optimization:</strong> Retargeting setups customized for specific ecommerce catalog views.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">ROAS Target</h4>
              <div className="feature-kpi-number text-gradient-purple">4.2x</div>
              <p className="feature-kpi-desc">Average ROAS target maintained across ecommerce and acquisition pipelines.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Zap size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Rapid Creative Sandbox</span>
                    <p className="kpi-desc">Testing dynamic copy hooks and video frames before scaling budgets.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Layers size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Lookalike Optimization</span>
                    <p className="kpi-desc">Custom seed lists mapping top-performing buyers to locate similar profiles.</p>
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
          <h2 className="section-h2 text-center">Paid Campaign Lifecycle</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Creative Sandbox Setup</h3>
              <p className="step-desc">Staging multiple visual combinations and hooks to confirm baseline conversion rates.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Tracker Compliance Audit</h3>
              <p className="step-desc">Ensuring server-side Conversions API matches standard browser pixel fires perfectly.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Staged Budget Scaling</h3>
              <p className="step-desc">Applying budget optimization filters at scale without triggering algorithm learning resets.</p>
            </div>
          </div>
        </div>
      </section>

      <Faq pageKey="meta-advertising" />
    </div>
  );
}
