'use client';

import React from 'react';
import Image from 'next/image';
import { ClientLogo } from '@/lib/wordpress';

interface ClientsTickerProps {
  clients: ClientLogo[];
}

const DEFAULT_CLIENTS: ClientLogo[] = [
  { id: 30, name: "Hijabi Ladies Beauty Salon", logoUrl: "/images/clients/hijabi-salon.jpeg" },
  { id: 32, name: "Ameen Al Arab Cleaning", logoUrl: "/images/clients/ameen-al-arab.jpeg" },
];

const isExcludedLogo = (client: ClientLogo) => {
  const name = (client.name || '').toLowerCase();
  const url = (client.logoUrl || '').toLowerCase();
  // Exclude the Gold OV logo
  if (name.includes('gold') || url.includes('gold-logo') || url.includes('logo-transparent-gold')) {
    return true;
  }
  // Exclude the square/tall logo version of Ameen Al Arab (keep the rectangular banner one)
  if (url.includes('client-logo-1') || url.includes('logo--scaled') || name.includes('al noor')) {
    return true;
  }
  return false;
};

export default function ClientsTicker({ clients }: ClientsTickerProps) {
  // Filter out any excluded logos from WordPress props
  const validPropClients = (clients && clients.length > 0)
    ? clients.filter(c => Boolean(c.logoUrl) && !isExcludedLogo(c))
    : [];

  const combinedClients = [...validPropClients];
  for (const def of DEFAULT_CLIENTS) {
    if (!combinedClients.some(c => c.name.toLowerCase().trim() === def.name.toLowerCase().trim())) {
      combinedClients.push(def);
    }
  }

  const baseClients = combinedClients.length > 0 ? combinedClients : DEFAULT_CLIENTS;

  // Build a single cycle wide enough to span and exceed wide screens (at least 20 items)
  let singleCycle: ClientLogo[] = [];
  while (singleCycle.length < 20) {
    singleCycle = [...singleCycle, ...baseClients];
  }

  // Exactly 2 identical cycles so translating by -50% produces a seamless, continuous infinite loop with zero jump
  const marqueeClients = [...singleCycle, ...singleCycle];

  return (
    <section className="clients-ticker-section">
      <div className="container text-center">
        <p className="clients-ticker-subtitle">Trusted by ambitious brands and growth-focused businesses</p>
      </div>
      <div className="ov-client-marquee mt-10" aria-label="Client logos">
        <div className="ov-client-track">
          {marqueeClients.map((client, idx) => (
            <div 
              key={`client-${client.id}-${idx}`} 
              className="ov-client-logo"
              aria-hidden={idx >= singleCycle.length ? "true" : undefined}
            >
              {client.logoUrl ? (
                <Image 
                  src={client.logoUrl} 
                  alt={`${client.name} logo`} 
                  width={160} 
                  height={56} 
                  loading="lazy"
                  unoptimized
                  draggable={false}
                  style={{ objectFit: 'contain', width: 'auto', maxHeight: '48px' }}
                />
              ) : (
                <span className="client-logo-text">{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
