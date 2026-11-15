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
  ArrowRight,
  Layers,
  Target,
  Cpu,
  Award,
  Globe,
  LineChart,
  Repeat,
  MessageCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getClientLogos, getPageFaqs, getPageMetadata } from '@/lib/wordpress';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import ClientsTicker from '@/components/home/ClientsTicker';
import GrowthHeroVisual from '@/components/hero/GrowthHeroVisual';
import ProblemSolutions from '@/components/home/ProblemSolutions';
import SocialMediaSpotlight from '@/components/home/SocialMediaSpotlight';
import { getReviews } from '@/lib/reviews';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('home');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  return {
    title: meta.title || 'Digital Marketing Agency in Kannur, Kerala | OptiVir Ads',
    description: meta.description || 'OptiVir Ads is a digital marketing agency in Kannur, Kerala specializing in Local SEO, Google Ads, Meta Ads, and data-driven client growth.',
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: meta.title || 'Digital Marketing Agency in Kannur, Kerala | OptiVir Ads',
      description: meta.description || 'OptiVir Ads is a digital marketing agency in Kannur, Kerala specializing in Local SEO, Google Ads, Meta Ads, and data-driven client growth.',
      url: baseUrl,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-share-1200x630.png`,
          width: 1200,
          height: 630,
          alt: 'OptiVir Ads Growth Marketing Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title || 'Digital Marketing Agency in Kannur, Kerala | OptiVir Ads',
      description: meta.description || 'OptiVir Ads is a digital marketing agency in Kannur, Kerala specializing in Local SEO, Google Ads, Meta Ads, and data-driven client growth.',
      images: [`${baseUrl}/images/og-share-1200x630.png`],
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
      <LocalBusinessSchema reviews={reviews} />
      <WebSiteSchema />
      <FAQSchema faqs={accordionFaqs} />

      {/* Background Grid Pattern */}
      <div className="grid-overlay" />

      {/* Top Value Strip (CRO Announcement Strip) */}
      <div className="home-top-strip">
        <div className="container strip-inner">
          <span className="strip-text">
            Free marketing audit for Kerala &amp; GCC businesses<span className="strip-more">: we review your Instagram, Google Maps &amp; ads</span>.
          </span>
          <Link href="/free-marketing-audit" prefetch={false} className="strip-link">
            Get yours &rarr;
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container-grid">
          <div className="hero-text-content">
            <div className="hero-eyebrow-pill">
              <span className="eyebrow-dot" /> GROWTH MARKETING FOR KERALA &amp; GCC BUSINESSES
            </div>
            <h1 className="hero-headline">
              More enquiries. More customers. <span className="text-gradient-green">More reasons to choose your business.</span>
            </h1>
            <p className="hero-description animate-hero-desc">
              We help businesses across Kerala and the GCC attract customers through Instagram Reels, Google Maps, Facebook &amp; Google Ads. Whether you’re starting online or scaling ad campaigns, we’ll help you choose your next step.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/free-marketing-audit" prefetch={false} className="btn-primary hero-cta-btn animate-hero-cta">
                Get a Free Marketing Audit <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/919995037109?text=${encodeURIComponent("Hi OptiVir Ads team, I'd like to get more enquiries and bookings for my business. Keyword: GROW")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hero-cta-btn animate-hero-cta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageCircle size={16} style={{ color: 'var(--accent-crimson)' }} /> Chat on WhatsApp
              </a>
            </div>
            <p style={{ fontSize: '0.9375rem', color: '#CBD5E1', margin: '0.75rem 0 0', lineHeight: '1.5', maxWidth: '460px' }}>
              Get three practical improvements for your ads or online presence.{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>No website needed.</span>
            </p>

            {/* Reassurance Ticks */}
            <ul className="hero-ticks-list">
              <li><CheckCircle2 size={15} className="tick-icon" /> Nothing posted without your approval</li>
              <li><CheckCircle2 size={15} className="tick-icon" /> You own 100% of your accounts &amp; data</li>
              <li><CheckCircle2 size={15} className="tick-icon" /> Malayalam &amp; English creative team</li>
            </ul>

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

      {/* Sound familiar? Problem vs Solution Section */}
      <ProblemSolutions />

      {/* What We Do Section */}
      <section className="what-we-do-section" id="what-we-do">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Help more people find your business, choose you and come back.
            </p>
          </div>

          {/* Growth Process Pipeline Strip */}
          <ScrollReveal direction="up" delay={50} rotate={false}>
            <div className="growth-pipeline-container">
              <nav aria-label="Growth engine steps" className="growth-pipeline-bar">
                <a href="#step-reach-customers" className="pipeline-step">
                  <span className="pipeline-step-num">01</span>
                  <div className="pipeline-step-text">
                    <span className="pipeline-step-title">Reach New Customers</span>
                    <span className="pipeline-step-sub">Paid Acquisition</span>
                  </div>
                </a>
                <div className="pipeline-arrow-wrap" aria-hidden="true">
                  <ArrowRight size={14} className="pipeline-arrow" />
                </div>
                <a href="#step-get-found" className="pipeline-step">
                  <span className="pipeline-step-num">02</span>
                  <div className="pipeline-step-text">
                    <span className="pipeline-step-title">Get Found on Google</span>
                    <span className="pipeline-step-sub">Organic Growth</span>
                  </div>
                </a>
                <div className="pipeline-arrow-wrap" aria-hidden="true">
                  <ArrowRight size={14} className="pipeline-arrow" />
                </div>
                <a href="#step-turn-enquiries" className="pipeline-step">
                  <span className="pipeline-step-num">03</span>
                  <div className="pipeline-step-text">
                    <span className="pipeline-step-title">Turn Enquiries into Bookings</span>
                    <span className="pipeline-step-sub">Conversion</span>
                  </div>
                </a>
                <div className="pipeline-arrow-wrap" aria-hidden="true">
                  <ArrowRight size={14} className="pipeline-arrow" />
                </div>
                <a href="#step-bring-back" className="pipeline-step">
                  <span className="pipeline-step-num">04</span>
                  <div className="pipeline-step-text">
                    <span className="pipeline-step-title">Bring Customers Back</span>
                    <span className="pipeline-step-sub">Retention</span>
                  </div>
                </a>
              </nav>
            </div>
          </ScrollReveal>

          {/* 4 Pillars Grid */}
          <div className="growth-pillars-grid">
            
            {/* Card 1: Reach New Customers */}
            <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={60} duration={580}>
              <div className="glass-card pillar-card cyan" id="step-reach-customers">
                <div className="pillar-header">
                  <div>
                    <h3 className="pillar-title">Reach New Customers</h3>
                  </div>
                  <div className="card-stack-icon cyan">
                    <Crosshair size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Reach potential customers through ads on Google, Instagram and Facebook.
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/google-advertising" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Google Ads</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Target buyers actively searching for your services with search and map campaigns.
                    </p>
                  </Link>
                  <Link href="/services/meta-advertising" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Instagram &amp; Facebook Ads</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Targeted visual campaigns across Instagram and Facebook to attract local clients.
                    </p>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Get Found on Google */}
            <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={160} duration={580}>
              <div className="glass-card pillar-card green" id="step-get-found">
                <div className="pillar-header">
                  <div>
                    <h3 className="pillar-title">Get Found on Google</h3>
                  </div>
                  <div className="card-stack-icon green">
                    <Search size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Help nearby customers find your business when they search for services like yours.
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/search-engine-optimization" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Google Maps &amp; Search</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Optimize your Google Business Profile and local search visibility for nearby customers.
                    </p>
                  </Link>
                  <Link href="/services/content-marketing" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Helpful Website Content</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Informative pages and guides that answer customer questions and build trust.
                    </p>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Turn Enquiries into Bookings */}
            <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={260} duration={580}>
              <div className="glass-card pillar-card purple" id="step-turn-enquiries">
                <div className="pillar-header">
                  <div>
                    <h3 className="pillar-title">Turn Enquiries into Bookings</h3>
                  </div>
                  <div className="card-stack-icon purple">
                    <Layers size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Make it easy for interested customers to call, message or book—and follow up with those who haven’t booked yet.
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/web-development" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Pages That Generate Enquiries</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Mobile-ready pages and business websites that make it simple for visitors to reach out.
                    </p>
                  </Link>
                  <Link href="/contact" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Enquiry Follow-Up</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Quick follow-ups via WhatsApp, message or call so interested leads become booked clients.
                    </p>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Bring Customers Back */}
            <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={360} duration={580}>
              <div className="glass-card pillar-card emerald" id="step-bring-back">
                <div className="pillar-header">
                  <div>
                    <h3 className="pillar-title">Bring Customers Back</h3>
                  </div>
                  <div className="card-stack-icon" style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#34d399' }}>
                    <Repeat size={20} />
                  </div>
                </div>
                <p className="pillar-summary">
                  Encourage repeat visits with timely reminders, useful updates and relevant offers.
                </p>
                <div className="pillar-services-list">
                  <Link href="/services/social-media-management" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Social Media</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Consistent posts, reels and updates to keep your brand top-of-mind with customers.
                    </p>
                  </Link>
                  <Link href="/services/email-marketing" prefetch={false} className="pillar-service-item">
                    <div className="pillar-service-top">
                      <span className="pillar-service-name">Customer Emails &amp; Reminders</span>
                      <ArrowRight size={15} className="pillar-service-arrow" />
                    </div>
                    <p className="pillar-service-desc">
                      Automated reminders, seasonal promotions and loyalty messages to drive repeat visits.
                    </p>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Action Button Below Cards */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link
              href="/free-marketing-audit"
              prefetch={false}
              className="btn-primary"
              style={{ padding: '0.95rem 2.25rem', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'none' }}
            >
              Get a Free Marketing Audit <ArrowRight size={18} />
            </Link>
            <p style={{ fontSize: '0.9375rem', color: '#CBD5E1', marginTop: '0.75rem', lineHeight: '1.5' }}>
              Three practical improvements for your ads or online presence.{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>No website needed.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social Media & Instagram Reels Spotlight */}
      <SocialMediaSpotlight />

      {/* Data-Driven Precision Section */}
      <section className="precision-section">
        <div className="container precision-container-grid">
          <ScrollReveal direction="left" delay={100} rotate={false}>
            <div className="precision-content">
              <h2 className="precision-title">
                Clear Marketing That Brings In Real, Paying Customers
              </h2>
              <p className="precision-desc">
                You don&apos;t need vanity metrics like random &ldquo;likes&rdquo; or confusing reports. You need a steady flow of calls, WhatsApp enquiries, and walk-ins that grow your business. We set up ads and search rankings that show you exactly where your money goes and how many real customers come through your door.
              </p>

              <ul className="precision-list">
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Simple monthly reports showing your exact spend, leads, and cost per enquiry.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>A dedicated campaign manager who coordinates directly with you on WhatsApp.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Weekly tuning of your ads to lower your costs and focus on what brings results.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Accurate lead tracking so you never waste money on ads that don&apos;t work.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} rotate={false}>
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
      <section className="framework-section" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">A Simple 4-Step Plan to Grow Your Business Online</h2>
            <p className="section-subtitle">How we guide local customers from finding you on Google or Instagram to calling and visiting your business.</p>
          </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={60} duration={580}>
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div className="icon-badge green" style={{ marginBottom: '1rem' }}>
                    <Target size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>1. Learn Your Market &amp; Customers</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    We study what nearby customers in your city are actually searching for, review your competitors, and find the fastest way to get you calls and bookings.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={160} duration={580}>
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div className="icon-badge cyan" style={{ marginBottom: '1rem' }}>
                    <Cpu size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>2. Fast, Easy-to-Use Web Pages</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    We build fast, clean mobile pages where visitors can easily tap to call you, send a WhatsApp message, or book an appointment in seconds.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={260} duration={580}>
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div className="icon-badge purple" style={{ marginBottom: '1rem' }}>
                    <Layers size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>3. Targeted Ads &amp; Social Media</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    We run focused ads on Google and Instagram directly to people in your city, paired with engaging Reels and posts that keep your business top of mind.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" distance={45} rotate={true} repeat={true} delay={360} duration={580}>
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div className="icon-badge green" style={{ marginBottom: '1rem' }}>
                    <BarChart3 size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>4. Weekly Improvements &amp; Reporting</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    We review your results every week, stop what isn&apos;t working, double down on ads that bring paying customers, and keep your ad costs low.
                  </p>
                </div>
              </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Why Choose OptiVir Section */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Business Owners in Kerala &amp; the GCC Choose Us</h2>
            <p className="section-subtitle">Practical marketing, transparent costs, and a team that treats your budget like our own.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            <ScrollReveal direction="up" delay={100}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge cyan" style={{ marginBottom: '1rem' }}>
                  <Award size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>Focus on Real Returns</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  We don&apos;t celebrate &ldquo;impressions&rdquo; or &ldquo;reach&rdquo; if your phone isn&apos;t ringing. Every campaign is built to bring you qualified enquiries, store visits, and measurable business growth.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge green" style={{ marginBottom: '1rem' }}>
                  <Globe size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>Modern, Reliable Setup</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  From fast websites that load instantly on mobile to properly optimized Google Maps profiles, we make sure your online presence works smoothly and ranks ahead of competitors.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="icon-badge purple" style={{ marginBottom: '1rem' }}>
                  <LineChart size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>100% Plain English Reports</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  No confusing technical terms or vanity charts. Every month, you get a straightforward summary showing what you spent, how many calls and leads came in, and what we&apos;re improving next.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clients Scrolling Logo Ticker Section */}
      <ClientsTicker clients={clients} />

      {/* The OptiVir Advantage Section */}
      <section className="advantage-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The OptiVir Difference: Built Around Your Bottom Line</h2>
            <p className="section-subtitle">Honest advice, zero budget waste, and clear communication every step of the way.</p>
          </div>

          <div className="advantage-grid-layout">
            {/* Left Big Column */}
            <div className="advantage-left-column">
              <ScrollReveal direction="up" delay={100}>
                <div className="glass-card advantage-roi-card">
                  <div className="icon-badge purple">
                    <TrendingUp size={22} />
                  </div>
                  <h3 className="capability-card-title">Every Rupee Counted</h3>
                  <p className="capability-card-desc">
                    We treat your advertising budget with great care. Every campaign is monitored and adjusted weekly to eliminate wasted clicks and direct your budget to people ready to buy.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="advantage-sub-card">
                  <div className="sub-card-left">
                    <span className="sub-card-label">Weekly Hands-On Tuning:</span>
                    <span className="sub-card-value">We check your campaigns every week and adjust bids so your costs stay down.</span>
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
                    <h3 className="advantage-cell-title">Like Having Your Own In-House Team</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    We work closely alongside you as your dedicated marketing partner, responding quickly on WhatsApp and handling everything from copywriting to video editing.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <div className="glass-card advantage-cell-card">
                  <div className="advantage-cell-header">
                    <div className="icon-badge cyan">
                      <Zap size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Fast Turnaround</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    From approved scripts to live ads and social posts, we move quickly so your offers reach customers without unnecessary delays.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="glass-card advantage-cell-card">
                  <div className="advantage-cell-header">
                    <div className="icon-badge purple">
                      <BarChart3 size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Clear, Honest Numbers</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    Direct monthly reporting showing exactly what each customer enquiry cost, how many leads came in, and where to invest next.
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
          <ScrollReveal direction="up" delay={150} rotate={false}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                A Digital Marketing Partner for Kerala &amp; GCC Businesses
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  OptiVir Ads is a <strong>digital marketing agency in Kerala</strong> that helps local and regional businesses get found by the right customers and turn online interest into real sales. Based in Kannur, we work with clinics, showrooms, restaurants, and growing companies across Kerala (including Calicut, Kochi, and Trivandrum) as well as business owners across Dubai and the wider GCC.
                </p>
                <p>
                  Whether you need your business to rank #1 on <strong>Google Maps in Kannur or Calicut</strong>, high-performing <strong>Google and Instagram ads across Kerala and the GCC</strong> that bring regular phone calls, or a fast, modern website that makes messaging you effortless—our team handles the technical work so you can focus on running your business.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Local Google Maps &amp; Search</h4>
                    <p style={{ fontSize: '0.85rem' }}>Complete Google Business Profile setup, customer review collection, and local search optimization so nearby customers call you first.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Targeted Google &amp; Instagram Ads</h4>
                    <p style={{ fontSize: '0.85rem' }}>Local ads that show directly to people interested in your services, managed weekly so you get more customer enquiries for your budget.</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Fast Mobile Websites</h4>
                    <p style={{ fontSize: '0.85rem' }}>Clean, modern websites that load instantly on any smartphone and make calling or messaging on WhatsApp as simple as one tap.</p>
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
