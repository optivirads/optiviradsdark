import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { ReviewItem, getAggregateRating } from '@/lib/reviews';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  title?: string;
  subtitle?: string;
}

export default function ReviewsSection({
  reviews = [],
  title = "Verified Client Reviews & Google Business Rating",
  subtitle = "Real ROI performance results and client feedback powered by data-driven search architecture."
}: ReviewsSectionProps) {
  const safeReviews = Array.isArray(reviews) && reviews.length > 0 ? reviews : [];
  const metrics = getAggregateRating(safeReviews);

  if (safeReviews.length === 0) {
    return null;
  }

  return (
    <section className="reviews-section" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={150}>
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            {/* Google Business Rating Badge Header */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                marginBottom: '1.25rem'
              }}
            >
              {/* Google G Logo SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                {metrics.ratingValue} / 5.0
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ({metrics.reviewCount} Verified Reviews)
              </span>
            </div>

            <h2 className="section-title" style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem' }}>
              {title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {safeReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Rating & Source */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <CheckCircle2 size={12} /> {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <p style={{ color: '#e0e0e0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {rev.authorPhoto ? (
                  // Using standard img element to ensure arbitrary external URLs never throw Next.js hostname errors
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={rev.authorPhoto}
                    alt={rev.authorName}
                    width={44}
                    height={44}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                      color: '#000',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem'
                    }}
                  >
                    {rev.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
                    {rev.authorName}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>
                    {rev.location ? rev.location : 'Verified Client'} • {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
