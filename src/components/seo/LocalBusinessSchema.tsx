import React from 'react';

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
}

export default function LocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  image,
  address,
  geo,
}: LocalBusinessSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name || "OptiVir Ads",
    "description": description,
    "image": image || `${baseUrl}/images/logo.png`,
    "@id": `${baseUrl}/#organization`,
    "url": url || baseUrl,
    "telephone": telephone || "+919995037109",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      ...(address || {
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670001",
        "addressCountry": "IN"
      })
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
    "serviceArea": ["Kannur", "Kerala", "UAE", "Qatar", "GCC", "Worldwide"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
