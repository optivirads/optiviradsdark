import React from 'react';

export default function WebApplicationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${baseUrl}/free-tools/roas-calculator#app`,
    "name": "ROAS & ROI Calculator for Ad Campaigns",
    "description": "Calculate projected return on ad spend (ROAS), break-even thresholds, target CPA, and monthly profit pipelines across Google Ads and Meta Ads campaigns.",
    "url": `${baseUrl}/free-tools/roas-calculator`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and modern web browser support",
    "featureList": [
      "ROAS Projection Calculator",
      "Target Cost Per Acquisition (CPA) Estimator",
      "Break-even Threshold Modeling",
      "Multi-Currency Revenue Analysis (INR, AED, USD)",
      "Dynamic Profit Velocity Projections"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
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
