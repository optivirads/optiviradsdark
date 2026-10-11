import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Code, 
  ArrowRight, 
  ArrowLeft,
  Cpu,
  Laptop,
  CheckCircle2,
  Sparkles,
  Dumbbell
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getServiceMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  return getServiceMetadata('web-development');
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
      "url": "https://www.optivirads.com"
    },
    "areaServed": ["IN", "AE", "QA"],
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

      {/* Industry Booking Engines: Salons & Gyms */}
      <section style={{ padding: '4rem 0', background: 'rgba(15, 27, 50, 0.55)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--brand-crimson)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Industry Website Solutions
            </span>
            <h2 className="section-title">Salon &amp; Gym Website Design in Kerala &amp; GCC</h2>
            <p className="section-subtitle">
              Most salon and gym websites lose customers because they take 5+ seconds to load and hide contact buttons. We build friction-free booking sites engineered to turn mobile visitors into confirmed appointments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Salon Website Card */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge purple" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0 }}>Salon Website Design Kerala</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hair Studios, Bridal Parlours &amp; Spas</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                A visual portfolio website that highlights your best bridal hairstyles, hair treatments, and service menus. Equipped with instant WhatsApp booking buttons and automated Google Maps directions so clients can reserve a chair in 2 taps.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Sub-1.0s mobile loading speed on all 4G/5G devices</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Interactive service menu with transparent pricing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Direct 1-tap WhatsApp appointment booking trigger</li>
              </ul>
              <Link href="/contact" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', fontWeight: 600 }}>
                Request Salon Website Demo →
              </Link>
            </div>

            {/* Gym Website Card */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge cyan" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <Dumbbell size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0 }}>Gym Website Design Kerala</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fitness Clubs, CrossFit Boxes &amp; PT Trainers</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                A dynamic lead-generation website designed to sign up new members. Showcases trainer credentials, class schedules, member transformations, and an automated Free 1-Day Trial Pass download funnel.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Free 1-Day Pass digital voucher download with phone capture</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Weekly trainer schedule &amp; membership tier pricing tables</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Google Maps integration with 1-click gym navigation</li>
              </ul>
              <Link href="/contact" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', fontWeight: 600 }}>
                Request Gym Funnel Architecture →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables, Fees & Who It Suits */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '20px' }}>
            <h2 className="section-h2 text-center" style={{ marginBottom: '1rem' }}>
              What Is Included, Who It Suits &amp; Transparent Fees
            </h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Built from scratch on Next.js. Fast, secure, zero recurring page-builder subscription costs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Who It Suits Best:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Local businesses whose current website takes over 3 seconds to load on mobile.</li>
                  <li>Salons and gyms spending on ads but losing visitors before they contact.</li>
                  <li>Professional practices needing Google Maps LocalBusiness schema and SEO tags.</li>
                  <li>Founders wanting custom, modern design without heavy WordPress plugin bloat.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>What Every Website Includes:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>100% custom Next.js &amp; React code (sub-1.0s mobile load speed).</li>
                  <li>Fully responsive design tested across iOS, Android, tablets, and desktops.</li>
                  <li>Google Analytics 4 &amp; Meta Pixel conversion event integration.</li>
                  <li>LocalBusiness, Service &amp; FAQ JSON-LD schema markup built-in.</li>
                  <li>WhatsApp chat widget, SSL certificate, and Google Search Console indexing.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Website Investment Guide:</h3>
                <div style={{ background: 'rgba(15, 27, 50, 0.75)', border: '1px solid rgba(248, 246, 243, 0.1)', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    High-Converting Lead Landing Page:
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>
                    ₹18,500 – ₹25,000 (One-time) · Built in 5–7 days. Perfect for ad campaigns and single-service promotion.
                  </p>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    Complete Multi-Page Business Website:
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                    ₹38,000 – ₹65,000 (One-time) · 5–10 pages, service menus, team, blog, and complete local SEO architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Case Box */}
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(176, 31, 58, 0.08)', border: '1px solid rgba(176, 31, 58, 0.25)', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--brand-ivory)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Real Local Case: Kerala Fitness Studio Landing Page
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                A Calicut gym replaced their slow 7-second WordPress website with our custom Next.js landing page with a 1-tap Free Trial Pass button. With zero change in their Instagram ad spend, their mobile <strong>conversion rate rose from 2.8% to 8.4%</strong>, delivering 3x more weekly trial pass leads for the exact same marketing budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Web Dev Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '2rem 0 4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Custom Web Development Agency in Kerala &amp; Lead Generation Websites
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As a specialist <strong>custom web development agency in Kerala</strong>, OptiVir Ads engineers lightning-fast, high-converting digital web applications using modern Next.js and React technology stacks. Unlike bloated WordPress page builders or slow template sites, our custom <strong>Next.js development company services</strong> deliver fast page load times and excellent Core Web Vitals scores that directly improve Google organic rankings.
                </p>
                <p>
                  Looking to drive immediate traffic to your new website? Explore our{' '}
                  <Link href="/services/google-advertising" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Search PPC Advertising
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/google-maps-marketing" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Maps Business Profile Marketing
                  </Link>.
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '10px', marginTop: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1rem' }}>Free Website Performance Review</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Get practical suggestions on speed, mobile experience, and conversion opportunities for your business.</p>
                  <Link href="/free-marketing-audit" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Get Your Free Review →
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
