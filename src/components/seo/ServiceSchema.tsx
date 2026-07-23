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
      name: "Custom Web Development & CRO",
      description: "Fast, conversion-rate engineered responsive websites optimized for high conversion performance.",
      urlPath: "/services/web-development"
    },
    {
      name: "Analytics & Marketing Operations",
      description: "Server-side tag manager tracking, iOS 14 attribution mapping, and Looker Studio data consolidation.",
      urlPath: "/services/analytics-operations"
    },
    {
      name: "Branding & Corporate Identity",
      description: "Establish a cohesive, memorable corporate brand, custom logos, and messaging frameworks.",
      urlPath: "/services/branding"
    },
    {
      name: "Content Marketing & Copywriting",
      description: "High-performing copy templates, search authority blog clusters, and scriptwriting.",
      urlPath: "/services/content-marketing"
    },
    {
      name: "Email Marketing & Automation",
      description: "Automated email newsletters, cart abandonment setups, and CRM list segmentation filters.",
      urlPath: "/services/email-marketing"
    },
    {
      name: "Niche Platform Advertising",
      description: "Custom B2B advertising campaigns on LinkedIn, Snapchat, and Twitter/X.",
      urlPath: "/services/niche-platform-advertising"
    },
    {
      name: "Social Media Management",
      description: "Custom calendars, reply playbooks, and high-engagement social media management.",
      urlPath: "/services/social-media-management"
    }
  ];

  const serviceList = services || defaultServices;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#organization`,
      "name": "OptiVir Ads",
      "url": baseUrl
    },
    "serviceType": "Digital Marketing Services",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q1320623",
      "https://www.wikidata.org/wiki/Q180711",
      "https://www.wikidata.org/wiki/Q3884",
      "https://www.wikidata.org/wiki/Q386415",
      "https://www.wikidata.org/wiki/Q105809153"
    ],
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
