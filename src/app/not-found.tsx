import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Home, Compass, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | OptiVir Ads',
  description: 'The requested page could not be found. Explore our high-intent digital marketing services, case studies, and insights.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="not-found-page" style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      position: 'relative',
      zIndex: 2,
    }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          borderRadius: '9999px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          color: '#f87171',
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          marginBottom: '1.5rem',
        }}>
          ERROR 404
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-muted, #94a3b8)',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}>
          The page or capability you were looking for doesn&apos;t exist, may have moved to an updated URL, or is temporarily unavailable.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link
            href="/"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Home size={18} /> Return Home
          </Link>
          <Link
            href="/services"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Compass size={18} /> Our Services
          </Link>
          <Link
            href="/blog"
            className="btn btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--text-main, #fff)',
            }}
          >
            <BookOpen size={18} /> Growth Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
