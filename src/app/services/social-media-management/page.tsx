import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare,
  Sparkles,
  BarChart
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('social-media-management');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/social-media-management',
    },
  };
}

export default function SocialMediaManagementPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management",
    "serviceType": "Social Media Marketing Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Transform your social profiles into high-engagement brand equity. Custom calendars, reply playbooks, and community cultivation."
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
              <Users size={28} />
            </div>
            <TextReveal 
              text="Social Media Management" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Scale organic brand trust, foster community interaction, and drive high-intent sales conversions through narrative-driven calendar planning.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Book a Free Consultation <ArrowRight size={16} />
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
              <h2 className="section-h2">Organic Channels: The Heart of Customer Retention</h2>
              <p className="body-text">
                Relying purely on paid acquisition leaves your brand vulnerable to rising ad costs. An active, authentic social media presence serves as the baseline proof of authority. 
              </p>
              <p className="body-text">
                We handle the heavy lifting: mapping out narrative themes, designing custom post layouts, writing high-conversion captions, and scheduling assets at peak engagement windows. We treat your social channels not just as billboard space, but as active client relationship hubs.
              </p>
              
              <h3 className="section-h3">Core Capabilities:</h3>
              <ul className="bullets-styled">
                <li><strong>Creative Layout & Asset Calendars:</strong> Multi-channel layouts, photography editing, and graphic planning.</li>
                <li><strong>Reply & Engagement Architecture:</strong> Dedicated daily community monitoring and response pipelines.</li>
                <li><strong>Account Performance Tracking:</strong> Monitoring follower growth, engagement velocity, and conversion attribution.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Performance Target</h4>
              <div className="feature-kpi-number text-gradient-cyan">+78%</div>
              <p className="feature-kpi-desc">Average organic social engagement velocity boost within 90 days.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <MessageSquare size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Active Conversations</span>
                    <p className="kpi-desc">DMs and comment replies structured to guide leads toward booking portals.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <BarChart size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Community Growth</span>
                    <p className="kpi-desc">Steady follower acquisition utilizing targeted hashtag and profile setups.</p>
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
          <h2 className="section-h2 text-center">Our SMM Framework</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Brand Voice Alignment</h3>
              <p className="step-desc">Documenting typography, copywriting tone, and grid layouts matching your business values.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Calendar Sandboxing</h3>
              <p className="step-desc">Drafting and staging 30 days of high-fidelity social assets for complete client review and optimization.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Interaction Handover</h3>
              <p className="step-desc">Publishing content and deploying daily reply pipelines to maximize reach and conversion loops.</p>
            </div>
          </div>
        </div>
      </section>

      <Faq pageKey="social-media-management" />
    </div>
  );
}
