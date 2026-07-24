import React from 'react';
import { ReviewItem, getAggregateRating, CURATED_REVIEWS } from '@/lib/reviews';

interface ReviewSchemaProps {
  reviews?: ReviewItem[];
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';
  const reviewList = reviews && reviews.length > 0 ? reviews : CURATED_REVIEWS;
  const metrics = getAggregateRating(reviewList);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    'name': 'OptiVir Ads',
    'url': baseUrl,
    'image': `${baseUrl}/images/logo.png`,
    'telephone': '+919995037109',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'OptiVir Headquarters, South Bazar',
      'addressLocality': 'Kannur',
      'addressRegion': 'Kerala',
      'postalCode': '670002',
      'addressCountry': 'IN'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': metrics.ratingValue,
      'reviewCount': metrics.reviewCount,
      'bestRating': metrics.bestRating,
      'worstRating': metrics.worstRating
    },
    'review': reviewList.map((r) => ({
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
        'name': r.source || 'Google Business Profile'
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

