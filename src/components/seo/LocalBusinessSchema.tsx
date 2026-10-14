import React from 'react';
import { ReviewItem, getAggregateRating, CURATED_REVIEWS } from '@/lib/reviews';

export interface LocalBusinessSchemaProps {
  id?: string;
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
  id,
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

  const businessId = id || `${baseUrl}/#localbusiness`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "name": name || "OptiVir Ads",
    "description": description || "Performance digital marketing, Google Ads, Meta Ads, and SEO agency in Kerala & GCC.",
    "image": image || `${baseUrl}/images/brand/OptiVir-Ads-Original-Horizontal-Colour-1200.png`,
    "logo": `${baseUrl}/images/brand/OptiVir-Ads-Original-Symbol-512.png`,
    "@id": businessId,
    "url": url || baseUrl,
    "parentOrganization": {
      "@id": `${baseUrl}/#organization`
    },
    "telephone": telephone || "+919995037109",
    "email": "services@optivirads.com",
    "priceRange": "$$",
    "currenciesAccepted": "INR, AED, USD",
    "paymentAccepted": "Credit Card, UPI, Bank Transfer",
    "knowsAbout": [
      "Search Engine Optimization (SEO)",
      "Google Ads Management",
      "Meta Advertising",
      "Google Maps Marketing",
      "Local SEO",
      "Next.js Web Development",
      "Conversion Rate Optimization"
    ],
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
      "https://www.linkedin.com/company/optivirads",
      "https://www.google.com/maps?cid=16994082006733929099",
      "https://www.google.com/search?kgmid=/g/11z85cd8tn"
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
    "hasMap": "https://www.google.com/maps?cid=16994082006733929099",
    "areaServed": [
      { "@type": "City", "name": "Kannur" },
      { "@type": "City", "name": "Kochi" },
      { "@type": "City", "name": "Calicut" },
      { "@type": "AdministrativeArea", "name": "Kerala" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Ras Al Khaimah" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "City", "name": "Doha" },
      { "@type": "Country", "name": "Qatar" }
    ],
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

