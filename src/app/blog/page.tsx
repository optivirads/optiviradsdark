'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { getBlogPosts, BlogPost } from '@/lib/wordpress';
import TextReveal from '@/components/TextReveal';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        console.error("Error loading blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  useEffect(() => {
    if (!loading && posts.length > 0) {
      // Stagger entrance of loaded posts
      animate('.blog-feed-card', {
        translateY: [20, 0],
        opacity: [0, 1],
        delay: stagger(100, { start: 200 }),
        duration: 800,
        easing: 'easeOutExpo',
      });
    }
  }, [loading, posts]);

  return (
    <div className="blog-page">
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
            Engineered acquisition advice, scaling strategies, and deep insights from our performance specialists.
          </p>
        </div>
      </section>

      {/* Grid: Posts */}
      <section className="blog-feed-section">
        <div className="container">
          {loading ? (
            <div className="blog-loading-wrapper">
              <div className="loading-spinner" />
              <p>Fetching insights from WordPress...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="blog-empty-state glass-card text-center">
              <BookOpen size={48} className="empty-icon" />
              <h3>No Articles Found</h3>
              <p>Check back soon. We are syncing latest content from our backend.</p>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {posts.map((post) => (
                <article key={post.id} className="glass-card blog-feed-card" style={{ opacity: 0 }}>
                  {post.featuredImage && (
                    <div className="blog-card-image-wrapper">
                      <Image 
                        src={post.featuredImage} 
                        alt={post.title || "OptiVir Ads Case Study"} 
                        fill
                        className="blog-card-image"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="blog-card-body">
                    <div className="card-meta">
                      <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                      <span className="meta-item"><User size={14} /> {post.author}</span>
                    </div>
                    
                    <h3 className="blog-card-headline">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card-action">
                      <Link href={`/blog/${post.slug}`} className="read-more-link">
                        Read Blueprint <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

