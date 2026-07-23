import React from 'react';

export default function WebApplicationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ROAS & ROI Calculator for Ad Campaigns",
    "url": `${baseUrl}/free-tools/roas-calculator`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "OptiVir Ads",
      "url": baseUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
