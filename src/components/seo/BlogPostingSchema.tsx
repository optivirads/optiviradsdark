import React from 'react';

export interface BlogPostingSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  authorName?: string;
  imageUrl?: string;
}

export default function BlogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  authorName = 'OptiVir Editorial Team',
  imageUrl,
}: BlogPostingSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`
    },
    "url": `${baseUrl}/blog/${slug}`,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "OptiVir Ads",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`
      }
    },
    "image": imageUrl || `${baseUrl}/images/logo.png`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
