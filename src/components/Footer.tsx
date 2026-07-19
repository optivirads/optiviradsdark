'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Share2 } from 'lucide-react';

export default function Footer() {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title: 'OptiVir Ads',
          text: 'OptiVir Ads - Kerala-based digital marketing agency helping small businesses grow through SEO, PPC, and strategy.',
          url: window.location.origin,
        }).catch(console.error);
      } else {
        navigator.clipboard.writeText(window.location.origin);
        alert('Link copied to clipboard!');
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <h3 className="footer-title brand-title">OptiVir Ads</h3>
          <p className="footer-desc">
            Kerala-based digital marketing agency helping small businesses grow through SEO, Google Ads, Meta Ads, social media marketing, and practical digital strategy.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="footer-links-column">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links-list">
            <li><Link href="/services/search-engine-optimization" className="footer-link">SEO Services</Link></li>
            <li><Link href="/services/google-advertising" className="footer-link">Google Ads</Link></li>
            <li><Link href="/services/meta-advertising" className="footer-link">Meta Ads</Link></li>
            <li><Link href="/services/social-media-management" className="footer-link">Social Media Marketing</Link></li>
            <li><Link href="/services/branding" className="footer-link">Branding Identity</Link></li>
          </ul>
        </div>

        {/* Column 3: Company & Resources */}
        <div className="footer-links-column">
          <h4 className="footer-title">Company & Resources</h4>
          <ul className="footer-links-list">
            <li><Link href="/about" className="footer-link">About OptiVir Ads</Link></li>
            <li><Link href="/blog" className="footer-link">Digital Marketing Blog</Link></li>
            <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
            <li><Link href="/free-tools/roas-calculator" className="footer-link">Free ROAS Calculator</Link></li>
          </ul>
        </div>

        {/* Column 4: Locations */}
        <div className="footer-links-column">
          <h4 className="footer-title">Locations</h4>
          <ul className="footer-links-list">
            <li><Link href="/locations/kannur" className="footer-link">SEO in Kannur</Link></li>
            <li><Link href="/locations/dubai" className="footer-link">Marketing in Dubai</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="footer-links-column">
          <h4 className="footer-title">Connect</h4>
          <div className="footer-connect-icons">
            <button onClick={handleShare} className="connect-icon-btn" aria-label="Share Website">
              <Share2 size={18} />
            </button>
            <a href="mailto:services@optivirads.com" className="connect-icon-btn" aria-label="Email Us">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/company/optivirads" target="_blank" rel="noopener noreferrer" className="connect-icon-btn" aria-label="LinkedIn Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.instagram.com/optivirads" target="_blank" rel="noopener noreferrer" className="connect-icon-btn" aria-label="Instagram Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com/optivirads" target="_blank" rel="noopener noreferrer" className="connect-icon-btn" aria-label="Facebook Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          <p className="footer-location-text">
            Kannur, Kerala, India
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copyright-text">
          &copy; 2025 OptiVir Ads. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
