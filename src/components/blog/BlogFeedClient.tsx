'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { BlogPost } from '@/lib/wordpress';

export default function BlogFeedClient({ posts }: { posts: BlogPost[] }) {
  useEffect(() => {
    if (posts && posts.length > 0) {
      // Stagger entrance animation on mount
      animate('.blog-feed-card', {
        translateY: [20, 0],
        opacity: [0.3, 1],
        delay: stagger(80, { start: 100 }),
        duration: 600,
        easing: 'easeOutExpo',
      });
    }
  }, [posts]);

  if (!posts || posts.length === 0) {
    return (
      <div className="blog-empty-state glass-card text-center">
        <BookOpen size={48} className="empty-icon" />
        <h3>No Articles Found</h3>
        <p>Check back soon. We are syncing latest content from our backend.</p>
      </div>
    );
  }

  return (
    <div className="blog-posts-grid">
      {posts.map((post) => (
        <article key={post.id} className="glass-card blog-feed-card">
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
            
            <h2 className="blog-card-headline">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            
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
  );
}
