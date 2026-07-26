'use client';

import React from 'react';
import Image from 'next/image';
import { ClientLogo } from '@/lib/wordpress';

interface ClientsTickerProps {
  clients: ClientLogo[];
}

export default function ClientsTicker({ clients }: ClientsTickerProps) {
  // Create a duplicated list for seamless marquee scrolling - using 3 replicates to keep DOM size highly performant
  const marqueeClients = Array.from({ length: 3 }).flatMap(() => clients);

  return (
    <section className="clients-ticker-section">
      <div className="container text-center">
        <p className="clients-ticker-subtitle">Trusted by ambitious brands and growth-focused businesses</p>
      </div>
      <div className="ov-client-marquee mt-10" aria-label="Client logos">
        <div className="ov-client-track">
          {marqueeClients.map((client, idx) => (
            <ClientLogoItem key={`client-${client.id}-${idx}`} name={client.name} url={client.logoUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogoItem({ name, url }: { name: string; url: string }) {
  if (url) {
    return (
      <Image 
        src={url} 
        alt={`${name} logo`} 
        width={150} 
        height={70} 
        className="ov-client-logo" 
        style={{ objectFit: 'contain' }}
      />
    );
  }

  // Fallback inline SVGs for mock clients
  switch (name.toLowerCase()) {
    case 'nexus':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M20 10L10 15l10 5 10-5-10-5zM10 25l10 5 10-5M10 20l10 5 10-5" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">NEXUS</text>
          </svg>
        </div>
      );
    case 'vertex':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 10l10 20L30 10M15 15l5 10 5-10" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">VERTEX</text>
          </svg>
        </div>
      );
    case 'aero':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 20c5-5 15-5 20 0M12 15c4-4 12-4 16 0M14 25c3-3 9-3 12 0" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">AERO</text>
          </svg>
        </div>
      );
    case 'pulse':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 20h6l3-8 4 16 3-8h6" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">PULSE</text>
          </svg>
        </div>
      );
    case 'zenith':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <polygon points="20,8 24,16 32,16 26,22 28,30 20,25 12,30 14,22 8,16 16,16" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">ZENITH</text>
          </svg>
        </div>
      );
    case 'apex':
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <svg viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="client-logo-svg" style={{ width: '120px', height: '40px' }}>
            <path d="M10 28l10-16 10 16M15 20h10" />
            <text x="45" y="25" fill="currentColor" fontSize="13" fontFamily="var(--font-jakarta)" fontWeight="700" letterSpacing="2" stroke="none">APEX</text>
          </svg>
        </div>
      );
    default:
      return (
        <div className="ov-client-logo flex items-center justify-center">
          <span className="client-logo-text">{name}</span>
        </div>
      );
  }
}
