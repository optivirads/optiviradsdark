import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  TrendingUp,
  GitBranch,
  Handshake,
  Zap,
  BarChart3,
  Search,
  Crosshair,
  Rocket,
  ArrowRight,
  Layers,
  Target,
  Cpu,
  Award,
  Globe,
  LineChart,
  Repeat
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getClientLogos, getPageFaqs, getPageMetadata } from '@/lib/wordpress';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import ReviewSchema from '@/components/seo/ReviewSchema';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import ClientsTicker from '@/components/home/ClientsTicker';
import GrowthHeroVisual from '@/components/hero/GrowthHeroVisual';
import { getReviews } from '@/lib/reviews';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('home');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  return {
    title: meta.title || 'OptiVir Ads | Growth Marketing Agency for Kerala & GCC Businesses',
    description: meta.description || 'We help businesses acquire more customers through paid advertising, local SEO, social media and conversion-focused digital experiences across Kerala and the GCC.',
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: meta.title || 'OptiVir Ads | Growth Marketing Agency for Kerala & GCC Businesses',
      description: meta.description || 'We help businesses acquire more customers through paid advertising, local SEO, social media and conversion-focused digital experiences across Kerala and the GCC.',
      url: baseUrl,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: 'OptiVir Ads Growth Marketing Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title || 'OptiVir Ads | Growth Marketing Agency for Kerala & GCC',
      description: meta.description || 'We help businesses acquire more customers through paid advertising, local SEO, social media and conversion-focused digital experiences across Kerala and the GCC.',
      images: [`${baseUrl}/images/logo.png`],
    },
  };
}

export default async function Home() {
  const [clients, faqs, reviews] = await Promise.all([
    getClientLogos(),
    getPageFaqs('home'),
    getReviews()
  ]);

  // Convert FaqItem to FAQItemData structure for the Accordion
  const accordionFaqs = faqs.map(f => ({
    question: f.question,
    answer: f.answer
  }));

  return (
    <div className="home-page">
      {/* Dynamic SEO JSON-LD Schemas */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <ReviewSchema reviews={reviews} />

      {/* Background Grid Pattern */}
      <div className="grid-overlay" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container-grid">
          <div className="hero-text-content">
            <div className="hero-eyebrow-pill">
              <span className="eyebrow-dot" /> GROWTH MARKETING AGENCY
            </div>
            <h1 className="hero-headline">
              Growth Marketing Agency for <span className="text-gradient-green">Kerala &amp; GCC Businesses</span>
            </h1>
            <p className="hero-description animate-hero-desc">
              We help businesses acquire more customers through paid advertising (Google Ads &amp; Meta Ads), local SEO, social media, and conversion-focused digital experiences. From attracting the right audience to turning visits into enquiries and measuring what drives revenue, we build and optimize the systems behind sustainable customer growth across Kerala and the GCC.
            </p>
            <div className="hero-actions">
              <Link href="/free-marketing-audit" className="btn-primary hero-cta-btn animate-hero-cta">
                Get Your Free Growth Audit <ArrowRight size={16} />
              </Link>
              <Link href="#what-we-do" className="btn-secondary hero-cta-btn animate-hero-cta">
                View Our Work
              </Link>
            </div>
            <div className="hero-outcomes-grid">
              <div className="outcome-item">
                <TrendingUp size={16} className="outcome-icon" />
                <span>More Traffic</span>
              </div>
              <div className="outcome-item">
                <Target size={16} className="outcome-icon" />
                <span>Quality Leads</span>
              </div>
              <div className="outcome-item">
                <Zap size={16} className="outcome-icon" />
                <span>Higher Conversions</span>
              </div>
              <div className="outcome-item">
                <BarChart3 size={16} className="outcome-icon" />
                <span>Revenue Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Independent SVG/React Growth Marketing Visual */}
          <div className="hero-visual-column">
            <GrowthHeroVisual />
          </div>
        </div>
      </section>

      {/* What We Do - 4-Pillar Growth System */}
      <section className="what-we-do-section" id="what-we-do">
        <div className="container">
          <div className="section-header text-center">
            <span className="pillar-step-badge green" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              The 4-Pillar Revenue Engine
            </span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Most agencies sell disconnected tactics. We engineer an interconnected 4-pillar growth architecture where each channel feeds and amplifies the next—turning cold visitors into high-value, repeat clients.
            </p>
          </div>

          {/* Growth Pipeline Connection Bar */}
          <div className="growth-pipeline-bar">
            <div className="pipeline-step">
              <span className="pipeline-step-num">01</span>
              <span>Paid Acquisition</span>
            </div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step">
              <span className="pipeline-step-num">02</span>
              <span>Organic Growth</span>
            </div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step">
              <span className="pipeline-step-num">03</span>
              <span>Conversion</span>
            </div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step">
              <span className="pipeline-step-num">04</span>
              <span>Retention</span>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <ScrollReveal stagger={120} delay={100} direction="up">
            <div className="growth-pillars-grid">
              
              {/* Pillar 1: Paid Acquisition */}
              <div className="glass-card pillar-card cyan">
                <div className="pillar-header">
                  <div>
                    <span className="pillar-step-badge">Pillar 01 · Acquire</span>
                    <h3 className="pillar-title">Paid Acquisition</h3>
                  </div>
                  <div className="card-stack-icon cyan">
                    <Crosshair size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Capture immediate, scalable customer demand with mathematically tested ad campaigns that generate positive cash-flow return.
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/google-advertising" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Google Ads</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Search, Shopping &amp; Performance Max ads targeting buyers with commercial intent.
                    </p>
                  </Link>
                  <Link href="/services/meta-advertising" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Meta Ads</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Hyper-targeted Facebook &amp; Instagram creative campaigns engineered for low CPA.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Pillar 2: Organic Growth */}
              <div className="glass-card pillar-card green">
                <div className="pillar-header">
                  <div>
                    <span className="pillar-step-badge green">Pillar 02 · Compound</span>
                    <h3 className="pillar-title">Organic Growth</h3>
                  </div>
                  <div className="card-stack-icon green">
                    <Search size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Build enduring search authority and top Google rankings so qualified clients discover your business without paying per click.
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/search-engine-optimization" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Local SEO</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Google Maps 3-Pack domination &amp; citation building across Kannur, Calicut &amp; GCC.
                    </p>
                  </Link>
                  <Link href="/services/content-marketing" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Content Strategy</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Authoritative content clusters that capture high-intent organic search volume.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Pillar 3: Conversion */}
              <div className="glass-card pillar-card purple">
                <div className="pillar-header">
                  <div>
                    <span className="pillar-step-badge purple">Pillar 03 · Convert</span>
                    <h3 className="pillar-title">Conversion</h3>
                  </div>
                  <div className="card-stack-icon purple">
                    <Layers size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Traffic without conversions is wasted ad budget. We optimize the entire user journey to turn casual clicks into booked calls and sales.
                </p>
                <div className="pillar-services-list">
                  <Link href="/free-marketing-audit" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Landing Pages</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Persuasion-architected, friction-free landing page experiences tested for maximum conversion.
                    </p>
                  </Link>
                  <Link href="/services/web-development" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Web Development</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Sub-second custom Next.js web applications built for 100/100 Core Web Vitals.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Pillar 4: Retention */}
              <div className="glass-card pillar-card emerald">
                <div className="pillar-header">
                  <div>
                    <span className="pillar-step-badge emerald">Pillar 04 · Retain</span>
                    <h3 className="pillar-title">Retention</h3>
                  </div>
                  <div className="card-stack-icon" style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#34d399' }}>
                    <Repeat size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Acquiring a client is only the starting point. We engineer automated retention loops that maximize customer lifetime value (LTV).
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/social-media-management" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Social Media</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Brand positioning, community building &amp; social proof across Instagram and LinkedIn.
                    </p>
                  </Link>
                  <Link href="/services/email-marketing" className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Email Retention</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Automated onboarding funnels, reactivation workflows &amp; lifecycle newsletters.
                    </p>
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Data-Driven Precision Section */}
      <section className="precision-section">
        <div className="container precision-container-grid">
          <ScrollReveal direction="left" delay={100}>
            <div className="precision-content">
              <h2 className="precision-title">
                Data-Driven Search Engine Optimization (SEO) & Paid Media Precision
              </h2>
              <p className="precision-desc">
                At OptiVir Ads, we do not rely on guesswork or vanity metrics. We construct robust digital marketing growth engines that deliver clear, measurable bottom-line revenue. By pairing deep technical analytics with strategic creative execution, we scale your business predictably across all major digital customer acquisition channels.
              </p>

              <ul className="precision-list">
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Real-time custom performance dashboards and transparent conversion tracking.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Dedicated senior account strategist overseeing every aspect of your growth campaigns.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Agile optimization sprints designed to outpace evolving search algorithms and market shifts.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Server-side Tag Manager containers and Meta Conversion API (CAPI) data integration.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="precision-image-wrapper">
              <Image
                src="/images/office_space.png"
                alt="OptiVir Ads Modern Digital Marketing Agency Office Environment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="precision-image"
              />
              <div className="image-overlay-border" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Growth Framework Deep Dive */}
      <section className="framework-section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Comprehensive Digital Marketing Strategy & Execution Framework</h2>
            <p className="section-subtitle">Four systematic pillars that transform casual website visitors into loyal, paying clients for your business.</p>
          </div>

          <ScrollReveal direction="up" delay={100}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge green" style={{ marginBottom: '1rem' }}>
                  <Target size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>1. Market Audit & Intent Mapping</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  We analyze search queries, target audience purchase behavior, competitor ad strategies, and funnel friction points to build a tailored digital marketing growth blueprint.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge cyan" style={{ marginBottom: '1rem' }}>
                  <Cpu size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>2. High-Speed Conversion Web Build</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Developing lightning-fast, mobile-responsive Next.js custom web applications and landing pages optimized for 100/100 Core Web Vitals and high conversion velocity.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge purple" style={{ marginBottom: '1rem' }}>
                  <Layers size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>3. Multi-Channel Campaign Scaling</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Executing synchronized Google Search & Shopping ads, Meta retargeting campaigns, authoritative SEO content creation, and active social media management.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge green" style={{ marginBottom: '1rem' }}>
                  <BarChart3 size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>4. First-Party Analytics Optimization</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Continuous A/B ad copy testing, server-side conversion tracking, smart bidding adjustments, and customer lifetime value (LTV) expansion strategies.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose OptiVir Section */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Partner with OptiVir Ads as Your Digital Marketing Agency?</h2>
            <p className="section-subtitle">Delivering measurable competitive advantages through technical innovation and performance transparency.</p>
          </div>

          <ScrollReveal direction="up" delay={150}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge cyan" style={{ marginBottom: '1rem' }}>
                  <Award size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>Proven ROAS Performance</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  Our performance marketing strategies focus entirely on profit margins and return on ad spend. By optimizing your Google Ads and Meta Ads campaigns for conversion quality, we reduce overall customer acquisition costs while scaling lead volume.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge green" style={{ marginBottom: '1rem' }}>
                  <Globe size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>End-to-End Technical Mastery</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  From advanced schema structured data and Next.js full-stack web development to server-side Google Tag Manager containers, we deploy cutting-edge engineering techniques that give your site a distinct competitive edge in Google search rankings.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge purple" style={{ marginBottom: '1rem' }}>
                  <LineChart size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>Unmatched Accountability</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  No complex marketing jargon or inflated vanity metrics. We provide clear, transparent reporting that details exact spend, impression share, conversion volume, cost per acquisition, and net profit contribution across all marketing channels.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients Scrolling Logo Ticker Section */}
      <ClientsTicker clients={clients} />

      {/* The OptiVir Advantage Section */}
      <section className="advantage-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The OptiVir Advantage: ROAS-First Marketing Systems</h2>
            <p className="section-subtitle">Uncompromising performance marketing standards, financial accountability, and operational clarity.</p>
          </div>

          <div className="advantage-grid-layout">
            {/* Left Big Column */}
            <div className="advantage-left-column">
              <ScrollReveal direction="up" delay={100}>
                <div className="glass-card advantage-roi-card">
                  <div className="icon-badge purple">
                    <TrendingUp size={22} />
                  </div>
                  <h3 className="capability-card-title">ROI-First Paid Media Methodology</h3>
                  <p className="capability-card-desc">
                    We treat every advertising dollar with strict fiscal responsibility. Every campaign is continuously tracked, audited, and optimized to eliminate wasteful click spend and deliver maximum net profitability for your business.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="advantage-sub-card">
                  <div className="sub-card-left">
                    <span className="sub-card-label">Procedures Framework:</span>
                    <span className="sub-card-value">Agile sprint cycles and weekly performance tuning.</span>
                  </div>
                  <div className="sub-card-icon">
                    <GitBranch size={20} />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Multi-Card Grid */}
            <div className="advantage-right-grid">
              <ScrollReveal direction="up" delay={150}>
                <div className="glass-card advantage-cell-card span-two-cols">
                  <div className="advantage-cell-header">
                    <div className="icon-badge green">
                      <Handshake size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Strategic Growth Partnerships</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    We operate as an extended internal growth team for your enterprise, providing proactive strategy, rapid iteration, and direct access to senior digital marketing engineers.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <div className="glass-card advantage-cell-card">
                  <div className="advantage-cell-header">
                    <div className="icon-badge cyan">
                      <Zap size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Agile Execution Speed</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    Rapid ad campaign deployment and swift strategy adjustments that keep your business steps ahead of market competition.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="glass-card advantage-cell-card">
                  <div className="advantage-cell-header">
                    <div className="icon-badge purple">
                      <BarChart3 size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Transparent Performance Analytics</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    Unfiltered data dashboards revealing exact Cost Per Lead (CPL), Customer Acquisition Cost (CAC), and verified Return on Investment (ROI).
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Agency Authority Overview & Regional Footprint */}
      <section className="home-seo-authority-section" style={{ padding: '5rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Leading Growth Marketing Agency for Kerala &amp; GCC Businesses
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  OptiVir Ads is a premier <strong>growth marketing agency in Kerala</strong> engineering predictable revenue growth pipelines for ambitious local and international brands. Recognized as a top <strong>SEO and digital marketing company in Kannur and Calicut</strong> and a trusted <strong>performance advertising partner for GCC enterprises across Dubai, Ras Al Khaimah, and Qatar</strong>, we combine data-driven search architecture with server-side analytics to turn digital web traffic into verified corporate profit.
                </p>
                <p>
                  Whether you require hyper-targeted <strong>Google Maps Local Pack SEO in Kannur and Calicut</strong>, high-ROI <strong>Meta &amp; Google advertising campaigns across Kerala and the GCC</strong>, or custom <strong>Next.js web development agency services</strong> engineered for sub-1.0 second mobile page loading speed, our specialist team executes with surgical precision. We eliminate ad budget wastage through server-side Tag Manager containers, advanced Meta CAPI implementations, and value-focused Google Smart Bidding strategies.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Local Organic Search Authority</h4>
                    <p style={{ fontSize: '0.85rem' }}>Structured LocalBusiness schema graphs, Google Business Profile management, and geographic citation building for top Google rankings.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>High-Performance Paid Advertising</h4>
                    <p style={{ fontSize: '0.85rem' }}>Google Search, Shopping, and Meta campaigns optimized ruthlessly for Target CPA and maximum Return on Ad Spend (ROAS).</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Custom Web Application Development</h4>
                    <p style={{ fontSize: '0.85rem' }}>Next.js and React web applications engineered for 100/100 Core Web Vitals, maximum mobile speed, and conversion efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verified Google Business Reviews Section */}
      <section style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Client Testimonials & Performance Marketing Success Stories</h2>
            <p className="section-subtitle">See how our data-driven SEO, Google Ads, and Meta ad campaigns drive tangible business growth.</p>
          </div>
          <ReviewsSection reviews={reviews} />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: '2rem 0 4rem 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Frequently Asked Questions About Our Digital Marketing Agency Services</h2>
            <p className="section-subtitle">Clear answers to common questions about our SEO, paid advertising, and web development processes.</p>
          </div>
          <FaqAccordion faqs={accordionFaqs} />
        </div>
      </section>
    </div>
  );
}
