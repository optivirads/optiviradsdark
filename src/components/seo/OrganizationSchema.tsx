import React from 'react';

export default function OrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "OptiVir Ads",
    "legalName": "OptiVir Ads",
    "alternateName": ["OptiVir", "OptiVir Ads Marketing Agency", "OptiVir Agency"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/brand/OptiVir-Ads-Original-Symbol-512.png`,
      "width": 512,
      "height": 512,
      "caption": "OptiVir Ads Logo"
    },
    "image": `${baseUrl}/images/brand/OptiVir-Ads-Original-Horizontal-Colour-1200.png`,
    "description": "Performance digital marketing agency specializing in high-intent Search Engine Optimization (SEO), Google Ads (PPC), Meta Ads, Google Maps marketing, and conversion web development for businesses across Kerala and the GCC.",
    "slogan": "ROAS-First Marketing Systems",
    "sameAs": [
      "https://facebook.com/optivirads",
      "https://www.instagram.com/optivirads",
      "https://www.linkedin.com/company/optivirads"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Green Building, Talap",
      "addressLocality": "Kannur",
      "addressRegion": "Kerala",
      "postalCode": "670002",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919995037109",
        "contactType": "sales",
        "email": "services@optivirads.com",
        "areaServed": ["IN", "AE", "QA", "SA"],
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+919995037109",
        "contactType": "customer support",
        "email": "services@optivirads.com",
        "availableLanguage": ["English", "Malayalam"]
      }
    ],
    "knowsAbout": [
      "Search Engine Optimization (SEO)",
      "Google Ads Management",
      "Pay-Per-Click (PPC) Advertising",
      "Meta Advertising (Facebook & Instagram)",
      "Google Maps Marketing & GBP Optimization",
      "Local Search Domination",
      "Next.js Web Development",
      "Conversion Rate Optimization (CRO)",
      "Social Media Marketing (SMM)",
      "Server-Side Tagging & GA4 Analytics"
    ],
    "areaServed": [
      { "@type": "City", "name": "Kannur" },
      { "@type": "City", "name": "Kochi" },
      { "@type": "City", "name": "Calicut" },
      { "@type": "AdministrativeArea", "name": "Kerala" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Qatar" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Capabilities",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Search Engine Optimization (SEO)",
          "url": `${baseUrl}/services/search-engine-optimization`
        },
        {
          "@type": "OfferCatalog",
          "name": "Google Advertising (PPC)",
          "url": `${baseUrl}/services/google-advertising`
        },
        {
          "@type": "OfferCatalog",
          "name": "Meta Advertising",
          "url": `${baseUrl}/services/meta-advertising`
        },
        {
          "@type": "OfferCatalog",
          "name": "Google Maps Marketing",
          "url": `${baseUrl}/services/google-maps-marketing`
        },
        {
          "@type": "OfferCatalog",
          "name": "Custom Web Development",
          "url": `${baseUrl}/services/web-development`
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
