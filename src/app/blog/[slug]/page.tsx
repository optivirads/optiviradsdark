import Faq from '@/components/faq/Faq';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/wordpress';
import BlogPostingSchema from '@/components/seo/BlogPostingSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

type Params = Promise<{ slug: string }>;

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';
  
  if (!post) {
    return {
      title: "Post Not Found | OptiVir Ads",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.metaTitle || `${post.title} | OptiVir Ads`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'OptiVir Ads',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.dateIso || post.date,
      modifiedTime: post.dateModifiedIso || post.dateIso || post.date,
      authors: [post.author || 'Abhinand C'],
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const authorName = post.author || 'Abhinand C';
  const authorJobTitle = post.authorTitle || 'Digital Marketing Strategist';

  return (
    <article className="blog-post-page">
      <BlogPostingSchema
        title={post.title}
        description={post.metaDescription || post.excerpt}
        slug={slug}
        datePublished={post.dateIso || post.date}
        dateModified={post.dateModifiedIso || post.dateIso || post.date}
        authorName={authorName}
        authorJobTitle={authorJobTitle}
        imageUrl={post.featuredImage}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Insights', url: '/blog' },
          { name: post.title, url: `/blog/${slug}` },
        ]}
      />
      <div className="grid-overlay" />

      {/* Header Panel */}
      <section className="post-header-section">
        <div className="container">
          <Link href="/blog" className="back-to-blog-link">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          
          <div className="post-meta-top">
            <span className="post-meta-item"><Calendar size={14} /> {post.date}</span>
            <span className="post-meta-item"><User size={14} /> {authorName} · {authorJobTitle}</span>
          </div>

          <h1 className="post-title-main">{post.title}</h1>
        </div>
      </section>

      {/* Content body */}
      <section className="post-body-section">
        <div className="container post-container-layout">
          {post.featuredImage && (
            <div className="post-featured-image-wrapper glass-card" style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
              <Image 
                src={post.featuredImage} 
                alt={post.title || "OptiVir Ads Case Study Cover"} 
                fill
                className="post-featured-image"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
          )}
          <div className="glass-card post-content-card">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Byline / E-E-A-T Box */}
            <div className="author-bio-box" style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(176,31,58,0.3), rgba(15,27,50,0.8))', border: '2px solid rgba(176,31,58,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>
                AC
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>{authorName}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-crimson)', fontWeight: 600, background: 'rgba(176,31,58,0.12)', padding: '0.2rem 0.6rem', borderRadius: '9999px', border: '1px solid rgba(176,31,58,0.3)' }}>
                    {authorJobTitle}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.55' }}>
                  Founder &amp; Performance Marketer at OptiVir Ads. Engineering ROI-driven search architectures, high-intent Google PPC systems, and conversion funnels for businesses across Kerala and the GCC.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles Footer */}
          {relatedPosts.length > 0 && (
            <div className="related-articles-area">
              <h3 className="related-area-title">Related Marketing Blueprints</h3>
              <div className="related-grid">
                {relatedPosts.map((related) => (
                  <div key={related.id} className="glass-card related-card">
                    <span className="related-date">{related.date}</span>
                    <h4 className="related-title">
                      <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                    </h4>
                    <p className="related-excerpt">{related.excerpt}</p>
                    <Link href={`/blog/${related.slug}`} className="related-action-link">
                      Read Blueprint <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

          <Faq pageKey={post.slug} />
      </article>
  );
}
