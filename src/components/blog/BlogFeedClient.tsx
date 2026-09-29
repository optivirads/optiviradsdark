'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, BookOpen, Search, X } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { BlogPost } from '@/lib/wordpress';

interface BlogFeedClientProps {
  posts: BlogPost[];
  initialQuery?: string;
}

export default function BlogFeedClient({ posts, initialQuery = '' }: BlogFeedClientProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const q = searchQuery.toLowerCase().trim();
    return posts.filter((post) =>
      (post.title && post.title.toLowerCase().includes(q)) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(q))
    );
  }, [posts, searchQuery]);

  useEffect(() => {
    if (filteredPosts && filteredPosts.length > 0) {
      // Stagger entrance animation on mount and filter
      animate('.blog-feed-card', {
        translateY: [20, 0],
        opacity: [0.3, 1],
        delay: stagger(80, { start: 100 }),
        duration: 600,
        easing: 'easeOutExpo',
      });
    }
  }, [filteredPosts]);

  return (
    <div className="blog-feed-container">
      {/* Interactive Search Bar for Google SearchAction & Readers */}
      <div style={{ maxWidth: '520px', margin: '0 auto 3rem', position: 'relative' }}>
        <Search
          size={18}
          style={{
            position: 'absolute',
            left: '1.1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted, #94a3b8)',
            pointerEvents: 'none',
          }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search guides, Google Ads tactics, SEO blueprints..."
          aria-label="Search blog articles"
          style={{
            width: '100%',
            padding: '0.85rem 2.8rem 0.85rem 3rem',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            aria-label="Clear search query"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted, #94a3b8)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="blog-empty-state glass-card text-center" style={{ padding: '3rem 1.5rem', borderRadius: '1rem' }}>
          <BookOpen size={48} className="empty-icon" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3>No Articles Match &ldquo;{searchQuery}&rdquo;</h3>
          <p style={{ color: 'var(--text-muted, #94a3b8)', marginTop: '0.5rem' }}>
            Try searching for broader marketing terms like &ldquo;SEO&rdquo;, &ldquo;Google Ads&rdquo;, or &ldquo;Meta&rdquo;.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}
