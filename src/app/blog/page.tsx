import React from 'react';
import { Metadata } from 'next';
import { getBlogPosts, getPageMetadata } from '@/lib/wordpress';
import TextReveal from '@/components/TextReveal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogFeedClient from '@/components/blog/BlogFeedClient';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetadata('blog');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  return {
    title: meta.title || 'Digital Marketing Blog: Growth Insights & Tactics | OptiVir Ads',
    description: meta.description || 'Practical digital marketing guides, Google Ads scaling frameworks, local SEO blueprints, and ROAS optimization strategies by Abhinand C and the OptiVir team.',
    alternates: {
      canonical: `${baseUrl}/blog`,
    },
    openGraph: {
      title: 'Digital Marketing Blog: Growth Insights & Tactics | OptiVir Ads',
      description: meta.description || 'Practical digital marketing guides, Google Ads scaling frameworks, local SEO blueprints, and ROAS optimization strategies by Abhinand C and the OptiVir team.',
      url: `${baseUrl}/blog`,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-share-1200x630.png`,
          width: 1200,
          height: 630,
          alt: 'OptiVir Ads Digital Marketing Blog',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Digital Marketing Blog: Growth Insights & Tactics | OptiVir Ads',
      description: meta.description || 'Practical digital marketing guides, Google Ads scaling frameworks, local SEO blueprints, and ROAS optimization strategies by Abhinand C and the OptiVir team.',
      images: [`${baseUrl}/images/og-share-1200x630.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

interface BlogPageProps {
  searchParams?: Promise<{ q?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const [posts, params] = await Promise.all([
    getBlogPosts(),
    searchParams,
  ]);
  const initialQuery = params?.q || '';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": ["Blog", "CollectionPage"],
    "@id": `${baseUrl}/blog#blog`,
    "name": "OptiVir Digital Marketing Blog",
    "description": "Practical digital marketing guides, Google Ads scaling frameworks, local SEO blueprints, and ROAS optimization strategies by Abhinand C and the OptiVir team.",
    "url": `${baseUrl}/blog`,
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${baseUrl}/blog/${post.slug}`,
        "name": post.title,
        "description": post.excerpt,
      }))
    }
  };

  return (
    <div className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <BreadcrumbSchema items={[{ name: 'Insights', url: '/blog' }]} />
      <div className="grid-overlay" />

      {/* Hero Header */}
      <section className="blog-hero">
        <div className="container text-center">
          <TextReveal 
            text="OptiVir Marketing Blog" 
            className="blog-title" 
            tag="h1" 
            delay={150}
            duration={1000}
          />
          <p className="blog-subtitle">
            Engineered acquisition advice, scaling strategies, and actionable performance marketing insights by Abhinand C, Digital Marketing Strategist.
          </p>
        </div>
      </section>

      {/* Grid: Posts (SSR rendered with interactive client hydration) */}
      <section className="blog-feed-section">
        <div className="container">
          <BlogFeedClient posts={posts} initialQuery={initialQuery} />
        </div>
      </section>
    </div>
  );
}
