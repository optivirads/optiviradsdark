import React from 'react';

export default function OrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OptiVir Ads",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "sameAs": [
      "https://facebook.com/optivirads",
      "https://www.instagram.com/optivirads",
      "https://www.linkedin.com/company/optivirads"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919995037109",
      "contactType": "customer service",
      "email": "services@optivirads.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Malayalam", "Hindi"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
