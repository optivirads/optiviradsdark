import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Zap,
  TrendingUp,
  Inbox
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('email-marketing');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/email-marketing',
    },
  };
}

export default function EmailMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Email Marketing & Automation",
    "serviceType": "Email & CRM Automation Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Automated email newsletters, cart abandonment setups, and CRM list segmentation filters to maximize customer retention."
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
              <Mail size={28} />
            </div>
            <TextReveal 
              text="Email Marketing & Automation" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Maximize subscriber lifetime value, design automated cart recovery sequences, and structure CRM list segment filters for optimal inbox delivery.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Audit My CRM Sequences <ArrowRight size={16} />
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
              <h2 className="section-h2">Unlocking Revenue From Existing Traffic</h2>
              <p className="body-text">
                Acquiring a new customer is up to five times more expensive than retaining an existing one. Most brands leave substantial capital on the table by failing to engage their subscriber database with automated recovery flows.
              </p>
              <p className="body-text">
                We construct complete lifecycle email funnels. From welcome strategies that hook new sign-ups, to transactional abandonment triggers, to post-purchase sequences that cross-sell and build loyalty, we ensure your email channel drives up to 30% of total company revenue.
              </p>
              
              <h3 className="section-h3">Automation Core Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Automated Abandonment Flows:</strong> Cart and checkout triggers designed to recover lost pipeline.</li>
                <li><strong>List Segmentation Models:</strong> Filtering campaigns based on purchase frequency and engagement.</li>
                <li><strong>Inbox Deliverability Compliance:</strong> Implementing proper DMARC/DKIM protocols to bypass spam filters.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Retention Revenue Target</h4>
              <div className="feature-kpi-number text-gradient-purple">+28%</div>
              <p className="feature-kpi-desc">Average baseline email contribution to total company sales tracked within 90 days.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Inbox size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Inbox Deliverability</span>
                    <p className="kpi-desc">Domain warming and layout structuring to avoid promotion and spam tabs.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <TrendingUp size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Flow Automation</span>
                    <p className="kpi-desc">Mapping triggers to send high-context messaging based on user actions.</p>
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
          <h2 className="section-h2 text-center">Lifecycle Email Framework</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Database Pruning</h3>
              <p className="step-desc">Cleaning inactive profiles and validating DNS security protocols (SPF/DKIM/DMARC).</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Flow Staging</h3>
              <p className="step-desc">Coding welcome, cart recovery, and customer win-back sequence templates.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Segment Campaigns</h3>
              <p className="step-desc">Deploying newsletters targeted specifically to VIP buyer segments to prevent list fatigue.</p>
            </div>
          </div>
        </div>
      </section>

      <Faq pageKey="email-marketing" />
    </div>
  );
}
