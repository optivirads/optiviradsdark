import React from 'react';

interface ServiceItemProps {
  name: string;
  description: string;
  urlPath?: string;
}

export default function ServiceSchema({ services }: { services?: ServiceItemProps[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const defaultServices: ServiceItemProps[] = [
    {
      name: "Search Engine Optimization (SEO)",
      description: "Dominating local search results and building regional organic authority to drive inquiries and traffic.",
      urlPath: "/services/search-engine-optimization"
    },
    {
      name: "Google Search PPC Advertising",
      description: "High-intent client customer acquisition through Google Search Ads and target CPA optimization.",
      urlPath: "/services/google-advertising"
    },
    {
      name: "Meta (Facebook & Instagram) Advertising",
      description: "Data-driven audience targeting and creative funnel building for lead generation and brand awareness.",
      urlPath: "/services/meta-advertising"
    },
    {
      name: "Custom Web Development",
      description: "Fast, conversion-rate engineered responsive websites optimized for high conversion performance.",
      urlPath: "/services/web-development"
    }
  ];

  const serviceList = services || defaultServices;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "OptiVir Ads",
      "url": baseUrl
    },
    "serviceType": "Digital Marketing Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Acquisition Catalog",
      "itemListElement": serviceList.map((srv) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv.name,
          "description": srv.description,
          "url": srv.urlPath ? `${baseUrl}${srv.urlPath}` : undefined
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
