import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  MapPin, 
  ArrowRight, 
  ArrowLeft,
  Star,
  CheckCircle2,
  PhoneCall,
  Navigation,
  Building2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import { getServiceMetadata } from '@/lib/wordpress';
import Faq from '@/components/faq/Faq';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateMetadata(): Promise<Metadata> {
  return getServiceMetadata('google-maps-marketing');
}

export default function GoogleMapsMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Maps Marketing & Business Profile Optimization",
    "serviceType": "Local SEO & Google Maps Optimization",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": "https://www.optivirads.com"
    },
    "areaServed": ["IN", "AE", "QA"],
    "description": "Dominate Google Map Pack rankings in Kannur, Kerala, and the GCC. Complete Google Business Profile setup, local citation building, review generation, and local call reporting."
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
          { name: 'Google Maps Marketing', url: '/services/google-maps-marketing' },
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
              <MapPin size={28} />
            </div>
            <TextReveal 
              text="Google Maps Marketing & Business Profile Optimization" 
              className="service-title" 
              tag="h1" 
              delay={100}
            />
            <p className="service-subtitle">
              Rank in the Google Map 3-Pack. Turn nearby searches across Kannur, Kerala, and the GCC into phone calls, directions, and booked appointments.
            </p>
            <div className="hero-cta-wrapper">
              <Link href="/free-marketing-audit" className="btn-primary">
                Get a Free Google Maps Audit <ArrowRight size={16} />
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
              <h2 className="section-h2">Why the Google Map 3-Pack Drives 70% of Local Enquiries</h2>
              <p className="body-text">
                When nearby customers search for services on their phones—whether it is a salon, a gym, a dental clinic, or an interior design showroom—Google shows the <strong>Map 3-Pack before organic website links</strong>.
              </p>
              <p className="body-text">
                Most businesses in Kerala and the GCC have incomplete Google Business Profiles: missing secondary categories, inconsistent addresses (NAP errors), zero review response strategy, and no geo-tagged photo updates. Our Google Maps optimization protocol ensures your profile outranks nearby competitors and earns high trust.
              </p>
              
              <h3 className="section-h3">Our 4-Pillar Maps Methodology:</h3>
              <ul className="bullets-styled">
                <li><strong>Profile Setup &amp; Category Precision:</strong> Primary and secondary category mapping, comprehensive service menus, and verification support.</li>
                <li><strong>Local Citations &amp; Schema:</strong> Consistent NAP records across trusted regional directories and nested LocalBusiness JSON-LD website markup.</li>
                <li><strong>Automated Review Generation:</strong> Front-desk QR code stands and automated WhatsApp review request workflows to build review velocity.</li>
                <li><strong>Transparent Monthly Reporting:</strong> Monthly metrics detailing phone calls, direction requests, website clicks, and geo-grid rank maps.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Features Card */}
          <ScrollReveal direction="right">
            <div className="glass-card feature-kpi-card">
              <h4 className="feature-kpi-label">Local Discovery Impact</h4>
              <div className="feature-kpi-number text-gradient-cyan">+180%</div>
              <p className="feature-kpi-desc">Average increase in customer calls and direction requests within 60 days of Map Pack optimization.</p>
              
              <div className="kpi-breakdown-list">
                <div className="kpi-item">
                  <PhoneCall size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Direct Phone Calls</span>
                    <p className="kpi-desc">High-intent customers calling directly from Google search without visiting a website.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Navigation size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">Store &amp; Clinic Directions</span>
                    <p className="kpi-desc">Guiding nearby foot-traffic straight to your salon, fitness center, or retail location.</p>
                  </div>
                </div>
                <div className="kpi-item">
                  <Star size={16} className="kpi-icon" />
                  <div>
                    <span className="kpi-title">5-Star Social Proof</span>
                    <p className="kpi-desc">Systematic review generation that positions your business as the undisputed local market leader.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who This Service Suits */}
      <section style={{ padding: '3.5rem 0', background: 'rgba(15, 27, 50, 0.45)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Who Google Maps Marketing Suits</h2>
            <p className="section-subtitle">
              Engineered specifically for local service businesses and walk-in locations looking for more customer calls and visits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="icon-badge cyan" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <Sparkles size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>Salons, Spas &amp; Wellness</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Capture nearby residents searching for hair styling, bridal makeup, skincare, and spa treatments. Turn weekend availability into booked slots.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="icon-badge green" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <Building2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>Gyms &amp; Fitness Centres</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Rank #1 when fitness enthusiasts search &ldquo;gym near me&rdquo;, personal training, or crossfit. Drive direct WhatsApp enquiries for free day-passes.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="icon-badge purple" style={{ padding: '0.5rem', width: 'auto', height: 'auto' }}>
                  <ShieldCheck size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>Clinics &amp; Professional Practices</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Ideal for dental practices, physiotherapy clinics, legal consultants, and home service providers where trust and immediate proximity are paramount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Investment Benchmark */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '20px' }}>
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              <h2 className="section-h2 text-center" style={{ marginBottom: '1rem' }}>
                What Is Included &amp; Transparent Pricing
              </h2>
              <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                Clear deliverables, zero lock-in contracts, and transparent pricing tailored for Kerala and GCC businesses.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {/* Single Location Package */}
                <div style={{ background: 'rgba(15, 27, 50, 0.75)', border: '1px solid rgba(248, 246, 243, 0.1)', borderRadius: '16px', padding: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Single Location</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Local Map Pack Growth</h3>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-ivory)', marginBottom: '1.25rem' }}>
                    ₹9,900 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month (or 750 AED)</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Complete GBP setup, category optimization &amp; photo tagging</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> 20+ High-authority local Kerala/GCC business citations</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Weekly profile posts &amp; offer updates</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Review QR code generator &amp; review reply templates</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Monthly call, direction &amp; geo-grid rank report</li>
                  </ul>
                  <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                    Claim Your Local Area
                  </Link>
                </div>

                {/* Multi-Location / Competitive Tier */}
                <div style={{ background: 'rgba(15, 27, 50, 0.75)', border: '1px solid rgba(176, 31, 58, 0.35)', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '20px', background: 'var(--brand-crimson)', color: '#ffffff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                    Most Popular
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>High-Competition / Multi-Branch</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Market Dominance Pack</h3>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-ivory)', marginBottom: '1.25rem' }}>
                    ₹17,500 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month (or 1,350 AED)</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> All Single Location features with multi-radius coverage</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> 50+ Premium regional citations with duplicate cleanup</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Bi-weekly geo-signal updates &amp; product catalog additions</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Automated WhatsApp review collection sequence setup</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--brand-crimson)" /> Website LocalBusiness schema code implementation</li>
                  </ul>
                  <Link href="/free-marketing-audit" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                    Get Free Feasibility Review
                  </Link>
                </div>
              </div>

              {/* Real Example Box */}
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(176, 31, 58, 0.08)', border: '1px solid rgba(176, 31, 58, 0.25)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--brand-ivory)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  Real Local Example: Kannur Wellness &amp; Hair Studio
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                  A local salon in Kannur ranked #11 for &ldquo;bridal makeup Kannur&rdquo; and &ldquo;hair salon near me&rdquo;. Following our category restructure, 35 verified local citations, and a WhatsApp review system that added 42 five-star reviews in 45 days, the salon jumped to <strong>#2 in the Google Map Pack</strong>, generating an additional <strong>68 direct phone calls and 110 direction requests per month</strong> without spending on paid ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section style={{ padding: '2rem 0 4rem 0' }}>
        <div className="container text-center">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Combine Google Maps with our performance marketing channels for maximum client acquisition:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/services/google-advertising" style={{ color: 'var(--brand-ivory)', border: '1px solid rgba(248, 246, 243, 0.15)', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
              Google Search Ads (PPC) →
            </Link>
            <Link href="/services/meta-advertising" style={{ color: 'var(--brand-ivory)', border: '1px solid rgba(248, 246, 243, 0.15)', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
              Instagram &amp; Facebook Meta Ads →
            </Link>
            <Link href="/services/search-engine-optimization" style={{ color: 'var(--brand-ivory)', border: '1px solid rgba(248, 246, 243, 0.15)', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
              Organic Website SEO Services →
            </Link>
          </div>
        </div>
      </section>

      <Faq pageKey="google-maps-marketing" />
    </div>
  );
}
