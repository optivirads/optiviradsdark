'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
        <div className="mobile-nav-overlay">
          <div className="mobile-links-container">
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
