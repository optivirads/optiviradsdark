'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Crosshair, 
  Rocket, 
  Eye, 
  Shield, 
  CheckCircle2, 
  TrendingUp, 
  GitBranch, 
  Handshake, 
  Zap, 
  BarChart3, 
  ArrowRight
} from 'lucide-react';
import { animate, stagger } from 'animejs';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import { getClientLogos, ClientLogo, MOCK_CLIENTS } from '@/lib/wordpress';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

import FaqAccordion from '@/components/faq/FaqAccordion';
import { fetchPageFaqs } from '@/app/actions';
import { FAQItemData } from '@/types/faq';

export default function Home() {
  const [clients, setClients] = useState<ClientLogo[]>(MOCK_CLIENTS);
  const [faqs, setFaqs] = useState<FAQItemData[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [clientsData, faqsData] = await Promise.all([
          getClientLogos(),
          fetchPageFaqs('home')
        ]);
        setClients(clientsData);
        setFaqs(faqsData.map(f => ({ question: f.question, answer: f.answer })));
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    // Animate hero items on load
    animate('.hero-description', {
      translateY: [15, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 500,
      easing: 'easeOutExpo',
    });

    animate('.hero-cta-btn', {
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: 'easeOutExpo',
    });

    animate('.hero-card-item', {
      translateX: [30, 0],
      opacity: [0, 1],
      delay: stagger(100, { start: 700 }),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  // Create a duplicated list for seamless marquee scrolling
  const marqueeClients = Array.from({ length: 16 }).flatMap(() => clients);

  return (
    <div className="home-page">
      {/* Dynamic SEO JSON-LD Schemas */}
      <OrganizationSchema />
      <LocalBusinessSchema />

      {/* Background Grid Pattern */}
      <div className="grid-overlay" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container-grid">
          <div className="hero-text-content">
            <TextReveal 
              text="Scale Your Business with Precision-Engineered Digital Marketing." 
              className="hero-headline" 
              tag="h1"
              delay={150}
              duration={1000}
            />
            <p className="hero-description" style={{ opacity: 0 }}>
              Specializing in Social Media Management, Meta & Google Ads, high-intent SEO, conversion copywriting, and premium custom Web Development.
            </p>
            <div className="hero-actions">
              <Link href="/free-marketing-audit" className="btn-primary hero-cta-btn" style={{ opacity: 0 }}>
                Free Audit & Strategy Session <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="hero-cards-stack">
            <div className="glow-card-left-border green hero-card-item" style={{ opacity: 0 }}>
              <div className="card-stack-icon green">
                <Search size={18} />
              </div>
              <div className="card-stack-info">
                <h3 className="card-stack-title">Strategic SEO & Content</h3>
                <p className="card-stack-desc">Commanding search authority and high-value content to capture intent organic traffic.</p>
              </div>
            </div>

            <div className="glow-card-left-border purple hero-card-item" style={{ opacity: 0 }}>
              <div className="card-stack-icon purple">
                <Crosshair size={18} />
              </div>
              <div className="card-stack-info">
                <h3 className="card-stack-title">Omnichannel Paid Ads</h3>
                <p className="card-stack-desc">Hyper-targeted Meta, Google, and niche platform ad campaigns optimized for ROAS.</p>
              </div>
            </div>

            <div className="glow-card-left-border cyan hero-card-item" style={{ opacity: 0 }}>
              <div className="card-stack-icon cyan">
                <Rocket size={18} />
              </div>
              <div className="card-stack-info">
                <h3 className="card-stack-title">Web Dev & SMM</h3>
                <p className="card-stack-desc">Custom conversion-rate engineered sites coupled with active social community management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Capabilities Section */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Premium Capabilities</h2>
            <p className="section-subtitle">Engineered solutions designed for scalable and predictable revenue growth.</p>
          </div>

          <ScrollReveal stagger={150} delay={100} direction="up">
            <div className="capabilities-grid">
              <div className="glass-card capability-card">
                <div className="icon-badge cyan">
                  <Eye size={22} />
                </div>
                <h3 className="capability-card-title">Dominating Local Markets</h3>
                <p className="capability-card-desc">
                  We build localized search supremacy, ensuring your business captures the lion's share of regional intent and drives footfall or local inquiries via organic search authority.
                </p>
              </div>

              <div className="glass-card capability-card">
                <div className="icon-badge green">
                  <Zap size={22} />
                </div>
                <h3 className="capability-card-title">High-Conversion Acquisition</h3>
                <p className="capability-card-desc">
                  Deploying aggressive, profit-focused campaign execution across Google and Meta, optimized ruthlessly for cost-per-acquisition and lead quality.
                </p>
              </div>

              <div className="glass-card capability-card">
                <div className="icon-badge purple">
                  <Shield size={22} />
                </div>
                <h3 className="capability-card-title">Authority Engineering</h3>
                <p className="capability-card-desc">
                  Crafting compelling, narrative-driven content and conversion rate optimization assets that position your brand as the indisputable market leader and trusted choice.
                </p>
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
                Data-Driven Precision. <br />
                <span className="text-gradient-green">Human-Centric Results.</span>
              </h2>
              <p className="precision-desc">
                We don't just run ads, we engineer growth engines. By combining deep analytical rigor with creative intuition, we build marketing systems that scale predictably and sustainably for your small business.
              </p>
              
              <ul className="precision-list">
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Transparent reporting and metrics.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Dedicated account management.</span>
                </li>
                <li className="precision-list-item">
                  <CheckCircle2 className="list-checkmark" size={18} />
                  <span>Agile strategies that adapt to market shifts.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="precision-image-wrapper">
              <Image 
                src="/images/office_space.png" 
                alt="OptiVir Ads Modern Corridor Office Space" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="precision-image"
                priority
              />
              <div className="image-overlay-border" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients Scrolling Logo Ticker Section */}
      <section className="clients-ticker-section">
        <div className="container text-center">
          <p className="clients-ticker-subtitle">Trusted by ambitious brands and growth-focused businesses</p>
        </div>
        <div className="ov-client-marquee mt-10" aria-label="Client logos">
          <div className="ov-client-track">
            {marqueeClients.map((client, idx) => (
              <ClientLogoItem key={`client-${client.id}-${idx}`} name={client.name} url={client.logoUrl} />
            ))}
          </div>
        </div>
      </section>

      {/* The OptiVir Advantage Section */}
      <section className="advantage-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The OptiVir Advantage</h2>
            <p className="section-subtitle">Uncompromising performance and transparency.</p>
          </div>

          <div className="advantage-grid-layout">
            {/* Left Big Column */}
            <div className="advantage-left-column">
              <ScrollReveal direction="up" delay={100}>
                <div className="glass-card advantage-roi-card">
                  <div className="icon-badge purple">
                    <TrendingUp size={22} />
                  </div>
                  <h3 className="capability-card-title">ROI-First Methodology</h3>
                  <p className="capability-card-desc">
                    We treat your budget like our own. Every campaign is continuously tracked, analyzed, and optimized to ensure maximum capital efficiency and measurable business growth.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="advantage-sub-card">
                  <div className="sub-card-left">
                    <span className="sub-card-label">Procedures Framework:</span>
                    <span className="sub-card-value">Leveraging agile scrum methodologies.</span>
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
                    <h3 className="advantage-cell-title">Strategic Partnerships</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    Develop attention-directing partnerships. We partner closely to dominate your unique market vertical.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <div className="glass-card advantage-cell-card">
                  <div className="advantage-cell-header">
                    <div className="icon-badge cyan">
                      <Zap size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Agile Execution</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    Rapid deployment and iteration leading to outmaneuvering competition in real-time.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="glass-card advantage-cell-card">
                  <div className="advantage-cell-header">
                    <div className="icon-badge purple">
                      <BarChart3 size={22} />
                    </div>
                    <h3 className="advantage-cell-title">Transparent Performance</h3>
                  </div>
                  <p className="advantage-cell-desc">
                    Crystal-clear reporting dashboards. No vanity metrics, no hidden fees, just raw performance data.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      <FaqAccordion faqs={faqs} />
    </div>
  );
}

function ClientLogoItem({ name, url }: { name: string; url: string }) {
  if (url) {
    return (
      <Image 
        src={url} 
        alt={`${name} logo`} 
        width={150} 
        height={70} 
        className="ov-client-logo" 
        style={{ objectFit: 'contain' }}
      />
    );
  }

  // Fallback inline SVGs for mock clients
  switch (name.toLowerCase()) {
    case 'nexus':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M20 10L10 15l10 5 10-5-10-5zM10 25l10 5 10-5M10 20l10 5 10-5" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">NEXUS</text>
          </svg>
        </div>
      );
    case 'vertex':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 10l10 20L30 10M15 15l5 10 5-10" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">VERTEX</text>
          </svg>
        </div>
      );
    case 'aero':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 20c5-5 15-5 20 0M12 15c4-4 12-4 16 0M14 25c3-3 9-3 12 0" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">AERO</text>
          </svg>
        </div>
      );
    case 'pulse':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 20h6l3-8 4 16 3-8h6" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">PULSE</text>
          </svg>
        </div>
      );
    case 'zenith':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <polygon points="20,8 24,16 32,16 26,22 28,30 20,25 12,30 14,22 8,16 16,16" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">ZENITH</text>
          </svg>
        </div>
      );
    case 'apex':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 28l10-16 10 16M15 20h10" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">APEX</text>
          </svg>
        </div>
      );
    default:
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <span className="client-logo-text">{name}</span>
        </div>
      );
  }
}
