import React from 'react';

export default function WebSiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OptiVir Ads",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/blog?q={search_term_string}`,
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
