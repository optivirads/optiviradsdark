'use client';

import React, { useState } from 'react';
import { Check, Minus, MessageCircle, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export interface PricingFeature {
  label: string;
  detail: string;
  included: boolean;
}

export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  daily: string;
  tagline: string;
  badge: string | null;
  featured: boolean;
  whatsappMsg: string;
  features: PricingFeature[];
  ctaClass: string;
}

interface PricingCardsGridProps {
  packages: PricingPackage[];
}

export default function PricingCardsGrid({ packages }: PricingCardsGridProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (cardName: string) => {
    setActiveCard((prev) => (prev === cardName ? null : cardName));
  };

  return (
    <div className="pricing-cards-grid">
      {packages.map((pkg, idx) => {
        const waLink = `https://wa.me/919995037109?text=${encodeURIComponent(pkg.whatsappMsg)}`;
        const isRisen = activeCard === pkg.name;

        return (
          <ScrollReveal 
            key={pkg.name} 
            direction="none" 
            rotate={false} 
            repeat={true} 
            delay={idx * 100}
            duration={550}
          >
            <div 
              className={`pricing-card ${pkg.featured ? 'featured' : ''} ${isRisen ? 'is-risen' : ''}`}
              onClick={() => toggleCard(pkg.name)}
              tabIndex={0}
              role="region"
              aria-label={`${pkg.name} pricing package`}
            >
              {pkg.badge && (
                <div className="pricing-badge">
                  <Sparkles size={13} /> {pkg.badge}
                </div>
              )}

              <div className="pricing-card-header">
                <h2 className="plan-name">{pkg.name}</h2>
                <p className="plan-for">{pkg.tagline}</p>
                <div className="plan-price-wrap">
                  <span className="plan-price">{pkg.price}</span>
                  <span className="plan-period">{pkg.period}</span>
                </div>
                <div className="plan-daily">{pkg.daily}</div>
              </div>

              <div className="plan-features-list-wrap">
                <span className="plan-features-title">What&apos;s Included:</span>
                <ul className="plan-features-list">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className={`plan-feature-item ${feat.included ? 'included' : 'excluded'}`}>
                      {feat.included ? (
                        <Check size={16} className="feature-check" />
                      ) : (
                        <Minus size={16} className="feature-minus" />
                      )}
                      <div>
                        <b className="feat-label">{feat.label}:</b>{' '}
                        <span className="feat-detail">{feat.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-cta-wrap">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`plan-cta-btn ${pkg.ctaClass}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle size={17} /> Get Started on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

