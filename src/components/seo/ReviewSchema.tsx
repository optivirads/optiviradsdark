import React from 'react';
import { ReviewItem, getAggregateRating } from '@/lib/reviews';

interface ReviewSchemaProps {
  reviews: ReviewItem[];
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';
  const metrics = getAggregateRating(reviews);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    'name': 'OptiVir Ads',
    'url': baseUrl,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': metrics.ratingValue,
      'reviewCount': metrics.reviewCount,
      'bestRating': metrics.bestRating,
      'worstRating': metrics.worstRating
    },
    'review': reviews.map((r) => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': r.authorName
      },
      'datePublished': r.date,
      'reviewBody': r.reviewText,
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': r.rating,
        'bestRating': 5,
        'worstRating': 1
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Google Business Profile'
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
