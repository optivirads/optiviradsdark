import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCATIONS } from '@/lib/locations';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import TextReveal from '@/components/TextReveal';
import {
  MapPin,
  ArrowRight,
  TrendingUp,
  Globe2,
  ChevronRight,
  Phone,
  MessageCircle,
  Building2,
  ShieldCheck
} from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

export const metadata: Metadata = {
  title: 'Service Coverage & Locations | OptiVir Ads Growth Marketing Agency',
  description: 'Explore OptiVir Ads service coverage areas across Kerala (Kannur HQ, Calicut) and the GCC (Dubai, Ras Al Khaimah, Qatar). Physical office in Kannur; serving clients regionally.',
  alternates: {
    canonical: `${baseUrl}/locations`,
  },
  openGraph: {
    title: 'Service Coverage & Locations | OptiVir Ads',
    description: 'Explore OptiVir Ads service coverage areas across Kerala and the GCC. Physical headquarters in Kannur, Kerala.',
    url: `${baseUrl}/locations`,
    siteName: 'OptiVir Ads',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Coverage & Locations | OptiVir Ads',
    description: 'Explore OptiVir Ads service coverage areas across Kerala and the GCC. Physical headquarters in Kannur, Kerala.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LocationsHubPage() {
  const locationList = Object.values(LOCATIONS);
  const keralaLocations = locationList.filter(l => l.country === 'India');
  const gccLocations = locationList.filter(l => l.country !== 'India');

  const hubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': locationList.map((loc, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': `OptiVir Ads - ${loc.city}`,
      'url': `${baseUrl}/locations/${loc.slug}`,
      'description': loc.metaDescription,
    })),
  };

  return (
    <main className="loc-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
        ]}
      />

      <div className="grid-overlay" aria-hidden="true" />
      <div className="loc-blob loc-blob-1" aria-hidden="true" />
      <div className="loc-blob loc-blob-2" aria-hidden="true" />

      <div className="container loc-container">
        {/* Breadcrumb */}
        <nav className="loc-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={12} />
          <span className="active">Locations</span>
        </nav>

        {/* Hero */}
        <header className="loc-hero" style={{ textAlign: 'center', margin: '0 auto 4rem', maxWidth: '820px' }}>
          <div className="loc-badge" style={{ justifyContent: 'center' }}>
            <span className="loc-badge-dot" />
            Global Reach · Regional Domination
          </div>

          <TextReveal
            text="Strategic Regional Growth Hubs"
            className="loc-hero-title"
            tag="h1"
            delay={100}
            duration={900}
          />

          <p className="loc-hero-sub" style={{ margin: '1rem auto 2rem', maxWidth: '640px' }}>
            We combine localized market intuition with data-driven paid advertising and SEO engines to build market leaders across Kerala and the GCC.
          </p>
        </header>

        {/* Section: Kerala Growth Hubs */}
        <section className="loc-section" aria-labelledby="kerala-hubs-title">
          <div className="loc-section-header" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Building2 size={20} className="text-gradient-green" style={{ color: 'var(--accent-green)' }} />
              <h2 id="kerala-hubs-title" className="loc-section-title" style={{ fontSize: '1.75rem', margin: 0 }}>
                Kerala Operations & Local Dominance
              </h2>
            </div>
            <p className="loc-body-text" style={{ margin: 0 }}>
              Precision Map Pack SEO, retail lead engines, and hyper-targeted Meta advertising for regional enterprises.
            </p>
          </div>

          <div className="loc-blueprint-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {keralaLocations.map((loc) => (
              <div key={loc.slug} className="glass-card loc-blueprint-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={18} style={{ color: 'var(--accent-green)' }} />
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{loc.city}</h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'rgba(0,255,135,0.1)', color: 'var(--accent-green)', border: '1px solid rgba(0,255,135,0.25)' }}>
                      {loc.region}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    Focus: {loc.primaryServiceFocus}
                  </p>

                  <p className="loc-blueprint-desc" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {loc.heroSubheading}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="btn-primary"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    View {loc.city} Hub <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`https://wa.me/919995037109?text=${encodeURIComponent(`Hi OptiVir Ads team, I am interested in growth marketing services for my business in ${loc.city}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-green)', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: GCC & International Hubs */}
        <section className="loc-section" aria-labelledby="gcc-hubs-title" style={{ marginTop: '4rem' }}>
          <div className="loc-section-header" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Globe2 size={20} style={{ color: 'var(--accent-cyan)' }} />
              <h2 id="gcc-hubs-title" className="loc-section-title" style={{ fontSize: '1.75rem', margin: 0 }}>
                GCC Enterprise & Commercial Expansion
              </h2>
            </div>
            <p className="loc-body-text" style={{ margin: 0 }}>
              High-ROAS Google Search intent harvesting and bilingual creative acquisition across UAE and Qatar.
            </p>
          </div>

          <div className="loc-blueprint-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {gccLocations.map((loc) => (
              <div key={loc.slug} className="glass-card loc-blueprint-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={18} style={{ color: 'var(--accent-cyan)' }} />
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{loc.city}</h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'rgba(0,242,254,0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(0,242,254,0.25)' }}>
                      {loc.country}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--accent-green)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    Focus: {loc.primaryServiceFocus}
                  </p>

                  <p className="loc-blueprint-desc" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {loc.heroSubheading}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="btn-primary"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    View {loc.city} Hub <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`https://wa.me/919995037109?text=${encodeURIComponent(`Hi OptiVir Ads team, I am interested in performance marketing in ${loc.city}, ${loc.country}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-green)', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Operational Guarantee */}
        <section className="loc-section" style={{ marginTop: '4rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div>
                <TrendingUp size={28} style={{ color: 'var(--accent-green)', margin: '0 auto 0.75rem' }} />
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Targeted Regional Intent</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Granular geo-targeting and negative term exclusions ensure zero wasted ad spend.</p>
              </div>
              <div>
                <ShieldCheck size={28} style={{ color: 'var(--accent-cyan)', margin: '0 auto 0.75rem' }} />
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Server-Side Attribution</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Pixel-accurate conversion tracking bypassing ad blockers across international borders.</p>
              </div>
              <div>
                <Phone size={28} style={{ color: 'var(--accent-green)', margin: '0 auto 0.75rem' }} />
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Centralized Support</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Dedicated account leadership available via WhatsApp, phone, and weekly reporting.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
