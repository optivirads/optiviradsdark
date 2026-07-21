import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Eye, 
  Shield, 
  CheckCircle2, 
  TrendingUp, 
  GitBranch, 
  Handshake, 
  Zap, 
  BarChart3,
  Search,
  Crosshair,
  Rocket,
  ArrowRight
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getClientLogos, getPageFaqs } from '@/lib/wordpress';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FaqAccordion from '@/components/faq/FaqAccordion';
import ClientsTicker from '@/components/home/ClientsTicker';

export default async function Home() {
  const [clients, faqs] = await Promise.all([
    getClientLogos(),
    getPageFaqs('home')
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

      {/* Background Grid Pattern */}
      <div className="grid-overlay" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container-grid">
          <div className="hero-text-content">
            <h1 className="hero-headline">
              Scale Your Business with Precision-Engineered Digital Marketing.
            </h1>
            <p className="hero-description animate-hero-desc">
              Specializing in Social Media Management, Meta & Google Ads, high-intent SEO, conversion copywriting, and premium custom Web Development.
            </p>
            <div className="hero-actions">
              <Link href="/free-marketing-audit" className="btn-primary hero-cta-btn animate-hero-cta">
                Free Audit & Strategy Session <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="hero-cards-stack">
            <div className="glow-card-left-border green hero-card-item animate-hero-card-0">
              <div className="card-stack-icon green">
                <Search size={18} />
              </div>
              <div className="card-stack-info">
                <h3 className="card-stack-title">Strategic SEO & Content</h3>
                <p className="card-stack-desc">Commanding search authority and high-value content to capture intent organic traffic.</p>
              </div>
            </div>

            <div className="glow-card-left-border purple hero-card-item animate-hero-card-1">
              <div className="card-stack-icon purple">
                <Crosshair size={18} />
              </div>
              <div className="card-stack-info">
                <h3 className="card-stack-title">Omnichannel Paid Ads</h3>
                <p className="card-stack-desc">Hyper-targeted Meta, Google, and niche platform ad campaigns optimized for ROAS.</p>
              </div>
            </div>

            <div className="glow-card-left-border cyan hero-card-item animate-hero-card-2">
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
                  We build localized search supremacy, ensuring your business captures the lion&apos;s share of regional intent and drives footfall or local inquiries via organic search authority.
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
                We don&apos;t just run ads, we engineer growth engines. By combining deep analytical rigor with creative intuition, we build marketing systems that scale predictably and sustainably for your small business.
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
              />
              <div className="image-overlay-border" />
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

      <FaqAccordion faqs={accordionFaqs} />
    </div>
  );
}
