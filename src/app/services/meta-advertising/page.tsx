import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Megaphone, 
  ArrowRight, 
  ArrowLeft,
  Zap,
  Layers,
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
  return getServiceMetadata('meta-advertising');
}

export default function MetaAdvertisingPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/meta-advertising#service`,
    "url": `${baseUrl}/services/meta-advertising`,
    "name": "Meta Advertising",
    "serviceType": "Facebook & Instagram Advertising Agency",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      "name": "OptiVir Ads",
      "url": baseUrl
    },
    "areaServed": ["IN", "AE", "QA"],
    "description": "Disrupt scroll behavior with visual ad creative testing and programmatic value-based bidding filters across Facebook and Instagram channels."
  };

  return (
    <div className="service-detail-page theme-purple">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Meta Advertising', url: '/services/meta-advertising' },
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

      {/* Industry Spotlight: Salons & Gyms */}
      <section style={{ padding: '4rem 0', background: 'rgba(15, 27, 50, 0.55)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--brand-crimson)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Specialized Industry Playbooks
            </span>
            <h2 className="section-title">Digital Marketing for Salons &amp; Gyms in Kerala &amp; GCC</h2>
            <p className="section-subtitle">
              Visual Instagram and Facebook ads are the highest-ROI acquisition channels for beauty salons, spas, and fitness centres. Here is how we turn scrollers into booked clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Salon Card */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge purple" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0 }}>Salon &amp; Spa Marketing Playbook</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hair Studios, Spas &amp; Bridal Artists</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Visual transformations, bridal makeup showcases, and weekend slot promotions targeted within a 5–10 km radius. We connect Instagram Reel ads directly to WhatsApp click-to-chat with automated appointment booking prompts.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Geo-radius Instagram Reels targeting nearby residents</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Seasonal bridal &amp; keratin package campaigns</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Average Cost-Per-Booking: ₹65 – ₹110 in Kerala</li>
              </ul>
              <Link href="/contact" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', fontWeight: 600 }}>
                Discuss Salon Growth Strategy →
              </Link>
            </div>

            {/* Gym Card */}
            <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge cyan" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <Dumbbell size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0 }}>Gym &amp; Fitness Lead Generation</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fitness Clubs, CrossFit &amp; Personal Trainers</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Drive monthly memberships and annual passes through high-energy gym tour videos, transformation social proof, and irresistible 1-day free guest pass vouchers that capture contact info instantly.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--brand-ivory)', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Free 1-Day Trial Pass instant lead generation funnels</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Automated WhatsApp pass delivery with follow-up reminders</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brand-crimson)" /> Average Cost-Per-Trial-Lead: ₹45 – ₹80 in Kerala</li>
              </ul>
              <Link href="/contact" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', fontWeight: 600 }}>
                Discuss Gym Membership Campaigns →
              </Link>
            </div>
          </div>

          {/* 4-Step Pipeline: How Enquiries Become Bookings */}
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.75rem', textAlign: 'center' }}>
              How Enquiries Become Bookings: The 4-Step Conversion Loop
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', marginBottom: '2rem', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
              Getting clicks is easy; turning them into paying clients requires zero friction. Here is our tested lead conversion pipeline:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: 'rgba(15, 27, 50, 0.7)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(248, 246, 243, 0.08)' }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700 }}>STEP 01</span>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', margin: '0.5rem 0' }}>Scroll-Stopping Ad Hook</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: '1.5', margin: 0 }}>
                  High-quality Reel showing real salon results or gym energy, addressing local viewers with a clear, time-sensitive incentive.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 27, 50, 0.7)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(248, 246, 243, 0.08)' }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700 }}>STEP 02</span>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', margin: '0.5rem 0' }}>1-Tap WhatsApp Click</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: '1.5', margin: 0 }}>
                  Zero lengthy forms. The user taps directly into WhatsApp with a pre-filled message asking about pricing or available time slots.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 27, 50, 0.7)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(248, 246, 243, 0.08)' }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700 }}>STEP 03</span>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', margin: '0.5rem 0' }}>Instant Slot / Voucher Reply</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: '1.5', margin: 0 }}>
                  An automated greeting instantly offers available appointment slots or sends their personalized digital day-pass voucher.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 27, 50, 0.7)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(248, 246, 243, 0.08)' }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.75rem', color: 'var(--brand-crimson)', fontWeight: 700 }}>STEP 04</span>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', margin: '0.5rem 0' }}>Confirmed Booking &amp; Reminder</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: '1.5', margin: 0 }}>
                  Front desk confirms the reservation, followed by an automated 2-hour reminder to prevent no-shows and ensure high visit rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Pricing Guide */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '20px' }}>
            <h2 className="section-h2 text-center" style={{ marginBottom: '1rem' }}>
              What Is Included, Who It Suits &amp; Investment Guide
            </h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Transparent pricing, tested creative deliverables, and zero hidden agency charges.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Who Meta Ads Suits Best:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Local salons, beauty parlours, bridal studios, and wellness spas.</li>
                  <li>Gyms, crossfit boxes, martial arts academies, and yoga studios.</li>
                  <li>Boutique retail brands and D2C e-commerce stores across Kerala and the GCC.</li>
                  <li>Businesses needing fast, visual customer reach in Kannur, Calicut, Kochi, or Dubai.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>What Is Included Every Month:</h3>
                <ul className="bullets-styled" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <li>Custom vertical Reel scripting and graphic ad design (8–16 ad assets/month).</li>
                  <li>Server-side Meta Conversions API (CAPI) setup and pixel audit.</li>
                  <li>Target audience matrix testing (geo-radius, interest-matched &amp; lookalike models).</li>
                  <li>Click-to-WhatsApp link generator and chat greeting sequence configuration.</li>
                  <li>Bi-weekly budget scaling and weekly WhatsApp performance summaries.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--brand-crimson)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Typical Investment Benchmarks:</h3>
                <div style={{ background: 'rgba(15, 27, 50, 0.75)', border: '1px solid rgba(248, 246, 243, 0.1)', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    Local Single Location (Kerala):
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>
                    Ad spend: ₹15,000 – ₹25,000/mo + management fee (₹12,000/mo). Average leads: 120–250 enquiries/mo.
                  </p>
                  <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>
                    Multi-Branch / GCC (Dubai &amp; Qatar):
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                    Ad spend: 2,500 – 6,000 AED/mo + management fee (1,500 AED/mo). Average leads: 180–400 high-intent enquiries/mo.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Case Study Box */}
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(176, 31, 58, 0.08)', border: '1px solid rgba(176, 31, 58, 0.25)', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--brand-ivory)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Real Local Case: Kannur Boutique Salon Bridal Campaign
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                We ran a 21-day targeted Instagram Reel campaign for a bridal studio in Kannur targeting brides-to-be within a 15 km radius. With an ad spend of ₹14,200, the campaign generated <strong>74 direct WhatsApp enquiries and 22 confirmed bridal package bookings</strong> at a cost per booked bride of just ₹645—generating over ₹3,80,000 in booked revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Meta Ads Content & Knowledge Deep Dive */}
      <section className="service-deep-dive-section" style={{ padding: '2rem 0 4rem 0', position: 'relative' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '16px' }}>
              <h2 className="section-h2" style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Facebook Ads Agency in Kannur &amp; Instagram Advertising Services Kerala
              </h2>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As a performance-led <strong>Facebook ads agency in Kannur</strong> and specialist <strong>Instagram advertising services partner across Kerala and the GCC</strong>, OptiVir Ads crafts visual conversion funnels that disrupt social scroll behavior. Our creative testing methodology pairs high-hook Reels with server-side <strong>Meta Conversions API (CAPI)</strong> to capture 100% of conversion data and keep cost-per-lead as low as possible.
                </p>
                <p>
                  Looking to combine social ads with organic local search? Pair Meta advertising with our{' '}
                  <Link href="/services/google-maps-marketing" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Google Maps Marketing &amp; Business Profile Optimization
                  </Link>{' '}
                  or build a fast-converting website with our{' '}
                  <Link href="/services/web-development" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline', fontWeight: 600 }}>
                    Custom Web Development Services
                  </Link>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq pageKey="meta-advertising" />
    </div>
  );
}
