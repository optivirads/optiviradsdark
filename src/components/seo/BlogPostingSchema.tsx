import React from 'react';

export interface BlogPostingSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorJobTitle?: string;
  imageUrl?: string;
}

export default function BlogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName = 'Abhinand C',
  authorJobTitle = 'Digital Marketing Strategist',
  imageUrl,
}: BlogPostingSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const formatIsoDate = (d: string) => {
    try {
      const parsed = new Date(d);
      return isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
    } catch {
      return new Date().toISOString();
    }
  };

  const isoPublished = formatIsoDate(datePublished);
  const isoModified = dateModified ? formatIsoDate(dateModified) : isoPublished;

  const resolvedImage = imageUrl
    ? (imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`)
    : `${baseUrl}/images/og-share-1200x630.png`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${baseUrl}/blog/${slug}#article`,
    "headline": title,
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`
    },
    "url": `${baseUrl}/blog/${slug}`,
    "datePublished": isoPublished,
    "dateModified": isoModified,
    "inLanguage": "en-US",
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": authorJobTitle,
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "OptiVir Ads",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/brand/OptiVir-Ads-Original-Symbol-512.png`,
        "width": 512,
        "height": 512
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": resolvedImage,
      "width": 1200,
      "height": 630
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
