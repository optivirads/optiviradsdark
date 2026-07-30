import React from 'react';
import { ReviewItem, getAggregateRating, CURATED_REVIEWS } from '@/lib/reviews';

export interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  image?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  reviews?: ReviewItem[];
}

export default function LocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  image,
  address,
  geo,
  reviews,
}: LocalBusinessSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const reviewList = reviews && reviews.length > 0 ? reviews : CURATED_REVIEWS;
  const metrics = getAggregateRating(reviewList);

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name || "OptiVir Ads",
    "description": description || "Leading digital marketing, Google Ads, Meta Ads, and SEO agency in Kerala & GCC.",
    "image": image || `${baseUrl}/images/logo.png`,
    "@id": `${baseUrl}/#organization`,
    "url": url || baseUrl,
    "telephone": telephone || "+919995037109",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address?.streetAddress || "Green Building, Talap",
      "addressLocality": address?.addressLocality || "Kannur",
      "addressRegion": address?.addressRegion || "Kerala",
      "postalCode": address?.postalCode || "670002",
      "addressCountry": address?.addressCountry || "IN"
    },
    "geo": geo ? {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    } : {
      "@type": "GeoCoordinates",
      "latitude": 11.8745,
      "longitude": 75.3704
    },
    "sameAs": [
      "https://facebook.com/optivirads",
      "https://www.instagram.com/optivirads",
      "https://www.linkedin.com/company/optivirads"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "serviceArea": ["Kannur", "Kerala", "UAE", "Qatar", "GCC", "Worldwide"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": metrics.ratingValue,
      "reviewCount": metrics.reviewCount,
      "bestRating": metrics.bestRating,
      "worstRating": metrics.worstRating
    },
    "review": reviewList.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.authorName
      },
      "datePublished": r.date,
      "reviewBody": r.reviewText,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "publisher": {
        "@type": "Organization",
        "name": r.source || "Google Business Profile"
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

