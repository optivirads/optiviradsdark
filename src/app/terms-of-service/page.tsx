import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Mail, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

export const metadata: Metadata = {
  title: 'Terms of Service | OptiVir Ads Digital Marketing Agency',
  description: 'Terms and Conditions governing digital marketing, SEO, Google Ads, Meta Ads, and web development services provided by OptiVir Ads.',
  alternates: {
    canonical: `${baseUrl}/terms-of-service`,
  },
  openGraph: {
    title: 'Terms of Service | OptiVir Ads',
    description: 'Terms and Conditions governing digital marketing, SEO, Google Ads, Meta Ads, and web development services provided by OptiVir Ads.',
    url: `${baseUrl}/terms-of-service`,
    siteName: 'OptiVir Ads',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <main className="loc-page" style={{ paddingBottom: '6rem' }}>
      <BreadcrumbSchema
        items={[
          { name: 'Terms of Service', url: '/terms-of-service' },
        ]}
      />

      <div className="grid-overlay" aria-hidden="true" />
      <div className="loc-blob loc-blob-1" aria-hidden="true" />
      <div className="loc-blob loc-blob-2" aria-hidden="true" />

      <div className="container loc-container" style={{ maxWidth: '920px' }}>
        {/* Breadcrumb */}
        <nav className="loc-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={12} />
          <span className="active">Terms of Service</span>
        </nav>

        {/* Header */}
        <header className="loc-hero" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <div className="loc-badge">
            <FileText size={14} className="text-gradient-green" style={{ color: 'var(--accent-green)' }} />
            Legal Agreement
          </div>
          <h1 className="loc-hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0' }}>
            Terms of Service
          </h1>
          <p className="loc-hero-sub" style={{ margin: 0, color: 'var(--text-muted)' }}>
            Last updated: {lastUpdated} · Effective immediately
          </p>
        </header>

        {/* Content Body */}
        <article className="glass-card" style={{ padding: '2.5rem', borderRadius: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-green)' }} /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website <strong>optivirads.com</strong> or entering into a service agreement with OptiVir Ads (&ldquo;OptiVir Ads,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, you should refrain from using our website and services.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              2. Scope of Services
            </h2>
            <p>
              OptiVir Ads provides performance digital marketing, Search Engine Optimization (SEO), Google Maps Marketing, Google Ads (PPC), Meta Ads management, web development, and digital marketing consulting services. Specific deliverables, project milestones, KPIs, and fee structures are governed by individual client proposals or Service Level Agreements (SLAs).
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              3. Client Responsibilities & Ad Spend
            </h2>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Access & Permissions:</strong> Clients must provide timely access to ad accounts, CMS dashboards, domain DNS settings, and tracking containers required to perform agreed scopes of work.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Third-Party Media Budgets:</strong> Unless explicitly billed as a consolidated gross media retainer, advertising spend is paid directly by the client to advertising platforms (Google Ads, Meta Ads) via their registered payment method.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Compliance:</strong> Clients warrant that all creative assets, claims, and product offerings comply with applicable local laws, industry regulations, and platform advertising policies.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              4. Intellectual Property
            </h2>
            <p>
              Unless otherwise specified in a formal written contract:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                All proprietary frameworks, software tools, custom scripts, internal bidding templates, and analytical methodologies developed by OptiVir Ads remain the exclusive intellectual property of OptiVir Ads.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Upon complete receipt of professional fee payments, custom creative assets, ad copy, and code developed specifically for the client transfer to the client for their ongoing use.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              5. Performance & Guarantees Disclaimer
            </h2>
            <p>
              While OptiVir Ads utilizes industry-leading search strategies, rigorous data modeling, and performance best practices to maximize ROAS and traffic, third-party search engines and ad networks frequently alter search algorithms, auction costs, and platform policies. Consequently, outside of specific mutually contracted performance benchmarks, OptiVir Ads does not guarantee absolute top ranking positions or specific conversion volume.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, OptiVir Ads shall not be liable for any indirect, incidental, special, or consequential damages resulting from platform downtime, third-party ad network suspensions, or data discrepancies beyond our reasonable control. Total liability shall not exceed the fees paid to OptiVir Ads during the preceding three (3) months of service.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Kannur, Kerala, India.
            </p>
          </section>

          <section style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              8. Contact & Notice
            </h2>
            <p>For questions regarding these Terms or formal legal correspondence:</p>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Email: <a href="mailto:services@optivirads.com" style={{ color: 'var(--accent-cyan)' }}>services@optivirads.com</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-green)' }} />
                <span>Physical Office: Green Building, Talap, Kannur, Kerala 670002, India</span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
