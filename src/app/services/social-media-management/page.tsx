import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare,
  BarChart,
  CheckCircle2
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';

import { getServiceMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  return getServiceMetadata('social-media-management');
}

export default function SocialMediaManagementPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/social-media-management#service`,
    "url": `${baseUrl}/services/social-media-management`,
    "name": "Social Media Management",
    "serviceType": "Social Media Marketing Agency Services",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      "name": "OptiVir Ads",
      "url": baseUrl
    },
    "areaServed": ["IN", "AE", "QA"],
    "description": "Transform your social profiles into high-engagement brand equity. Custom calendars, reply playbooks, and community cultivation."
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
          { name: 'Social Media Management', url: '/services/social-media-management' },
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

      {/* Packages & Pricing Tiers */}
      <section style={{ padding: '4rem 0', background: 'rgba(15, 27, 50, 0.55)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--brand-crimson)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Transparent Packages
            </span>
            <h2 className="section-title">Social Media Management Packages in Kerala &amp; GCC</h2>
            <p className="section-subtitle">
              High-quality visual reels, consistent brand storytelling, and active community engagement—tailored for local businesses, salons, gyms, and lifestyle brands.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Starter Package */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Local Essentials</span>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Starter Presence</h3>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-ivory)', marginBottom: '1rem' }}>
                ₹12,500 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Ideal for single-location salons, boutique studios, and local practitioners maintaining an active, polished Instagram presence.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.825rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> 12 High-definition posts / reels per month</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Profile bio &amp; highlight icon rebranding</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Professional copywriting &amp; local hashtag research</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Monthly reach &amp; engagement analysis report</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem' }}>
                Select Starter Plan
              </Link>
            </div>

            {/* Growth Tier */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px', border: '1px solid rgba(176, 31, 58, 0.4)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '20px', background: 'var(--brand-crimson)', color: '#ffffff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                Most Popular
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Accelerated Reach</span>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Growth &amp; Engagement</h3>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-ivory)', marginBottom: '1rem' }}>
                ₹22,500 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month (or 1,200 AED)</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Built for gyms, salons, restaurants, and retail brands looking for regular viral reels, story sequences, and daily community replies.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.825rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> 20 Tailored reels &amp; carousel assets per month</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> 15 Interactive Story prompts (polls, Q&amp;As, offers)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Daily comment &amp; DM reply management (Mon–Sat)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Monthly paid ad boost setup for top-performing organic reels</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem' }}>
                Select Growth Plan
              </Link>
            </div>

            {/* Enterprise / GCC Tier */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Multi-Channel / GCC</span>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Market Authority Pack</h3>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-ivory)', marginBottom: '1rem' }}>
                ₹42,000 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month (or 2,200 AED)</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Complete multi-channel social management across Instagram, Facebook, and LinkedIn with bilingual English &amp; Arabic copy capabilities.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.825rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> 30 Multi-channel posts/reels across Instagram, FB &amp; LinkedIn</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Full scriptwriting, voiceover integration &amp; motion graphics</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Dedicated Account Manager &amp; weekly strategy alignment</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Looker Studio automated live social analytics dashboard</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem' }}>
                Consult on Enterprise
              </Link>
            </div>
          </div>

          {/* Real Local Example Box */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h4 style={{ color: 'var(--brand-ivory)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
              Real Example: Kozhikode Lifestyle &amp; Fitness Brand
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
              An active fitness centre in Kozhikode struggled with dormant Instagram engagement. We introduced a 20-reel monthly schedule highlighting member transformation mini-interviews and trainer technique tips. Within 90 days, their <strong>Instagram engagement jumped by 142%</strong>, profile visits doubled, and they generated an average of <strong>38 organic WhatsApp membership enquiries per month</strong> completely without ad spend.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded Social Media Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '2rem 0 4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Instagram Management Services Kerala &amp; Social Media Packages
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  OptiVir Ads is a high-engagement <strong>social media management agency in Kerala</strong> transforming social profiles into active brand equity. As an established <strong>Instagram growth agency in Kannur and Kochi</strong>, we craft custom social content calendars, carousel designs, reel scriptwriting, and community management playbooks.
                </p>
                <p>
                  Want to amplify your organic social reach with paid customer acquisition? Combine social management with our{' '}
                  <Link href="/services/meta-advertising" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Meta (Facebook &amp; Instagram) Advertising Services
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/google-maps-marketing" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Maps Business Profile Marketing
                  </Link>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="social-media-management" />
    </div>
  );
}
