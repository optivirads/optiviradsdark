import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Mail, MapPin, ChevronRight, Lock } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | OptiVir Ads Growth Marketing Agency',
  description: 'Learn how OptiVir Ads collects, protects, and handles personal data and client analytics. Transparent privacy standards for our digital marketing services.',
  alternates: {
    canonical: `${baseUrl}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | OptiVir Ads',
    description: 'Learn how OptiVir Ads collects, protects, and handles personal data and client analytics.',
    url: `${baseUrl}/privacy-policy`,
    siteName: 'OptiVir Ads',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <main className="loc-page" style={{ paddingBottom: '6rem' }}>
      <BreadcrumbSchema
        items={[
          { name: 'Privacy Policy', url: '/privacy-policy' },
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
          <span className="active">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="loc-hero" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <div className="loc-badge">
            <ShieldCheck size={14} className="text-gradient-green" style={{ color: 'var(--accent-green)' }} />
            Data Protection & Privacy
          </div>
          <h1 className="loc-hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0' }}>
            Privacy Policy
          </h1>
          <p className="loc-hero-sub" style={{ margin: 0, color: 'var(--text-muted)' }}>
            Last updated: {lastUpdated} · Effective immediately
          </p>
        </header>

        {/* Content Body */}
        <article className="glass-card" style={{ padding: '2.5rem', borderRadius: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={18} style={{ color: 'var(--accent-cyan)' }} /> 1. Overview & Commitment
            </h2>
            <p>
              OptiVir Ads (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a performance-driven digital marketing agency headquartered in Kannur, Kerala, India. We are deeply committed to respecting your privacy and safeguarding any personal data, business analytics, and marketing information shared with us through our website (<strong>optivirads.com</strong>) or during professional client engagements.
            </p>
            <p>
              This Privacy Policy explains what information we collect, why we collect it, how it is secured, and how you can exercise your privacy rights under applicable data protection laws.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              2. Information We Collect
            </h2>
            <p>We may collect information directly from you or automatically through your use of our digital assets:</p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Voluntary Inquiries:</strong> When you submit a contact form, request a free marketing audit, or contact us via email or WhatsApp, we collect your name, business email address, phone number, company name, website URL, and campaign requirements.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Client Campaign Assets:</strong> Under formal service engagements, we may process advertising accounts, Google Analytics data, Tag Manager containers, and audience lists strictly to optimize marketing performance.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Technical & Usage Data:</strong> Automated logs including IP address, browser type, device identifiers, referring URLs, and page engagement data via privacy-focused analytics to optimize website speed and user experience.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              3. How We Use Your Data
            </h2>
            <p>All information collected is used strictly for legitimate business and client-service operations:</p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>To deliver bespoke digital marketing audits, SEO audits, Google Ads optimizations, and strategic consultation.</li>
              <li style={{ marginBottom: '0.5rem' }}>To respond directly to inquiries sent to <a href="mailto:services@optivirads.com" style={{ color: 'var(--accent-cyan)' }}>services@optivirads.com</a> or phone calls.</li>
              <li style={{ marginBottom: '0.5rem' }}>To maintain system security, verify technical integrity, and prevent fraudulent submissions.</li>
              <li style={{ marginBottom: '0.5rem' }}>To comply with statutory legal and tax obligations.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              4. Zero Data Selling & Third-Party Disclosures
            </h2>
            <p>
              <strong style={{ color: '#fff' }}>We do not sell, rent, trade, or monetize your personal or client data to third parties.</strong> Data is only shared with trusted service infrastructure providers (such as hosting providers, SMTP transactional email providers, and official ad platforms including Google Ads and Meta Business Manager) exclusively for the execution of our services under strict confidentiality standards.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              We utilize essential cookies and analytics tags to measure website performance, ensure interactive components function accurately, and monitor ad conversion efficacy. You can modify your browser settings at any time to reject non-essential cookies without affecting core website navigation.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              6. Data Security & Storage
            </h2>
            <p>
              We enforce multi-factor authentication, end-to-end TLS/SSL encryption across all web interactions, and industry-standard security protocols to prevent unauthorized access, loss, or disclosure of information.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              7. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections or updates, or ask for the deletion of your contact records from our active databases. To make a request, contact our team directly at <a href="mailto:services@optivirads.com" style={{ color: 'var(--accent-cyan)' }}>services@optivirads.com</a>.
            </p>
          </section>

          <section style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '1rem' }}>
              8. Contacting Us
            </h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our team:</p>
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
