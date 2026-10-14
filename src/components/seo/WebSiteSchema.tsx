import React from 'react';

export default function WebSiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "OptiVir Ads",
    "alternateName": "OptiVir",
    "url": baseUrl,
    "description": "Performance digital marketing agency in Kerala & GCC specializing in SEO, Google Ads, Meta Ads, and Next.js Web Development.",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "inLanguage": ["en-US", "ml-IN"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
