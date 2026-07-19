'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import { animate, stagger } from 'animejs';

import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  // Scroll listener for sticky active states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu open/close animation
  useEffect(() => {
    if (isOpen && menuRef.current) {
      // Open animation
      animate(menuRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 350,
        easing: 'easeOutQuad',
      });

      // Stagger link entries from the right
      if (linksRef.current) {
        animate(Array.from(linksRef.current.children), {
          opacity: [0, 1],
          translateX: [20, 0],
          delay: stagger(50, { start: 100 }),
          duration: 300,
          easing: 'easeOutCubic',
        });
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo-container" onClick={closeMenu}>
          <Image 
            src="/images/logo.png" 
            alt="OptiVir Ads Logo" 
            width={160} 
            height={48} 
            style={{ objectFit: 'contain', height: '38px', width: 'auto' }}
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="desktop-actions">
          <Link href="/free-marketing-audit" className="btn-white">
            Free Audit
          </Link>
        </div>

        {/* Mobile Toggler */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div ref={menuRef} className="mobile-nav-overlay">
          <div ref={linksRef} className="mobile-links-container">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link 
              href="/free-marketing-audit" 
              className="btn-primary mobile-btn-cta"
              onClick={closeMenu}
            >
              Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
