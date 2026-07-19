import Faq from '@/components/faq/Faq';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/wordpress';
import ScrollReveal from '@/components/ScrollReveal';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found | OptiVir Ads",
    };
  }

  return {
    title: post.metaTitle || `${post.title} | OptiVir Ads`,
    description: post.metaDescription || post.excerpt,
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

  return (
    <article className="blog-post-page">
      <div className="grid-overlay" />

      {/* Header Panel */}
      <section className="post-header-section">
        <div className="container">
          <Link href="/blog" className="back-to-blog-link">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          
          <div className="post-meta-top">
            <span className="post-meta-item"><Calendar size={14} /> {post.date}</span>
            <span className="post-meta-item"><User size={14} /> {post.author}</span>
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
          <ScrollReveal direction="up" delay={200}>
            <div className="glass-card post-content-card">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </ScrollReveal>

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
