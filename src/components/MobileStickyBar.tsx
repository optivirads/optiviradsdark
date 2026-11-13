'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/919995037109?text=${encodeURIComponent(
    "Hi OptiVir Ads team, I'd like a free marketing audit for my business. I want to get more calls and enquiries."
  )}`;

  return (
    <div className="mobile-sticky-action-bar" aria-label="Mobile quick actions">
      <a href="tel:+919995037109" className="sticky-btn sticky-btn-call" aria-label="Call OptiVir Ads">
        <Phone size={16} />
        <span>Call</span>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn sticky-btn-whatsapp"
        aria-label="Free Marketing Audit on WhatsApp"
      >
        <MessageCircle size={16} />
        <span>Free Audit</span>
      </a>
    </div>
  );
}

