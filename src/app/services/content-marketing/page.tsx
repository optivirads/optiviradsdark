import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  PenTool, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Zap,
  Edit,
  Mail
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getPageMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('content-marketing');
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: 'https://optivirads.com/services/content-marketing',
    },
  };
}

export default function ContentMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Marketing & Copywriting",
    "serviceType": "Content Marketing & Copywriting Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://optivirads.com"
    },
    "areaServed": "IN",
    "description": "Establish brand trust and capture conversions. High-performing copy templates, search authority blog clusters, and scriptwriting."
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
              <PenTool size={28} />
            </div>
            <TextReveal 
              text="Content Marketing & Copywriting" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Draft narratives that educate, optimize keyword-intent copy configurations, and automate conversion funnels across blogs, pages, and emails.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Get a Custom Content Blueprint <ArrowRight size={16} />
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
              <h2 className="section-h2">Building Trust: Narrative Assets That Convert</h2>
              <p className="body-text">
                Most agencies write generic articles that sit unindexed on client domains. We build conversion-rate optimized content systems. Every asset is structured using emotional hook layouts and intent-driven answers to resolve transactional questions.
              </p>
              <p className="body-text">
                From structural landing pages to email drip sequences that prevent list fatigue, we combine copywriting principles with search keyword constraints to rank on Google while converting cold clicks into pipeline.
              </p>
              
              <h3 className="section-h3">Core Deliverables:</h3>
              <ul className="bullets-styled">
                <li><strong>Conversion Copywriting:</strong> Crafting direct-response copy configurations optimized for page conversions.</li>
                <li><strong>Topical Authority Clusters:</strong> Keyword maps and articles targeting industry-specific intent loops.</li>
                <li><strong>Automated Nurture Scripting:</strong> Writing email flows to educate subscribers and decrease friction.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Conversion Rate Target</h4>
              <div className="feature-kpi-number text-gradient-purple">45%</div>
              <p className="feature-kpi-desc">Average conversion improvement from cold subscriber status to sales pipeline registration.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <Edit size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Direct-Response Copy</span>
                    <p className="kpi-desc">Using proven headline formats and psychological triggers to encourage clicks.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Mail size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Nurture Funnels</span>
                    <p className="kpi-desc">Staging automated email drips to address buyer objections sustainably.</p>
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
          <h2 className="section-h2 text-center">Content Creation Lifecycle</h2>
          <div className="method-steps-grid">
            <div className="method-step glass-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Intent Mapping</h3>
              <p className="step-desc">Identifying competitor ranking gaps and high-conversion target keywords.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Copywriting Staging</h3>
              <p className="step-desc">Drafting and optimizing text layouts with structured headers and calls to action.</p>
            </div>
            <div className="method-step glass-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Nurture Automation</h3>
              <p className="step-desc">Configuring email and CRM sequence builders to automate communication channels.</p>
            </div>
          </div>
        </div>
      </section>

      <Faq pageKey="content-marketing" />
    </div>
  );
}
