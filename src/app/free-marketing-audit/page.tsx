'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  Globe, 
  MapPin, 
  Target, 
  Star, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Phone,
  Check,
  XCircle,
  CheckCircle2
} from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ReviewSchema from '@/components/seo/ReviewSchema';
import { CURATED_REVIEWS } from '@/lib/reviews';

const GOAL_OPTIONS = [
  { id: 'calls', label: 'More calls and enquiries' },
  { id: 'maps', label: 'Better Google Maps ranking' },
  { id: 'cpl', label: 'Lower cost per lead from ads' },
  { id: 'unsure', label: 'Not sure, tell me what\'s wrong' },
];

export default function FreeMarketingAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    websiteOrMaps: '',
    phone: '',
    email: '',
    goal: 'calls',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('get-audit');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = document.getElementById('audit-name');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 350);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.websiteOrMaps.trim() || formData.phone.trim().length < 7) {
      alert('Please fill in your name, website/Google Maps link, and WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    const goalLabel = GOAL_OPTIONS.find((g) => g.id === formData.goal)?.label || formData.goal;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    const submissionEmail = formData.email.trim() || `whatsapp-${cleanPhone || 'lead'}@optivirads-audit.com`;

    const formattedMessage = `[OPTIVIR ADS FREE AUDIT REQUEST - 3 PRIORITY FIXES]
Name: ${formData.name}
Website / Google Maps Link: ${formData.websiteOrMaps}
WhatsApp Number: ${formData.phone}
Email: ${formData.email.trim() || 'Not specified (Requested via WhatsApp)'}
Primary Goal: ${goalLabel}
Capacity: 5 Free Audits / Month Slot
Delivery Format: Top 3 Actionable Fixes (Within 48h via WhatsApp)
Enquiry Source: 2-Column Direct Response Landing Page`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: submissionEmail,
          company: formData.websiteOrMaps,
          message: formattedMessage,
        }),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitting(false);
      setIsDone(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong submitting your request. Please message us directly on WhatsApp at +91 99950 37109.');
    }
  };

  return (
    <div className="audit-landing-page">
      <BreadcrumbSchema items={[{ name: 'Free Marketing Audit', url: '/free-marketing-audit' }]} />
      <ReviewSchema reviews={CURATED_REVIEWS} />
      <div className="grid-overlay" />

      {/* ── Section 1: Above-the-Fold 2-Column Split Hero ── */}
      <section className="container" style={{ paddingTop: '1.5rem', paddingBottom: '3.5rem' }}>
        <div className="audit-hero-grid">
          {/* Left Column: Big Promise Headline, Benefits, and CTAs */}
          <div className="audit-hero-pitch">
            {/* Step 1: Eyebrow Copy (Target Avatar + Verified Social Proof) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div className="hero-eyebrow-pill" style={{ margin: 0 }}>
                <span className="eyebrow-dot" /> RATED 5.0 ON GOOGLE · FOR KERALA &amp; GCC BUSINESSES
              </div>
              <span className="audit-slots-badge">
                <span className="audit-pulse-dot" /> 2 of 5 Free Audit Slots Open This Month
              </span>
            </div>

            {/* Step 2: Honest Promise Headline */}
            <h1 className="audit-hero-headline" style={{ fontSize: '2.8rem', lineHeight: '1.15' }}>
              Find out exactly where your website and ads are losing enquiries, free.
            </h1>

            {/* Step 3: Sub-headline */}
            <p className="audit-hero-subtitle" style={{ fontSize: '1.05rem', lineHeight: '1.65' }}>
              We personally audit your website, Google Maps listing and ad setup, then deliver the 3 priority fixes most likely to bring in more calls and leads within 48 hours. No agency jargon. No payment.
            </p>

            {/* Step 4: Immediate Action + Quiet WhatsApp Link */}
            <div className="audit-hero-actions">
              <a 
                href="#get-audit" 
                onClick={scrollToForm}
                className="btn-primary audit-hero-btn"
                style={{ fontSize: '1.025rem', padding: '0.9rem 1.85rem' }}
              >
                Get My 3 Fixes <ArrowRight size={16} />
              </a>
              <a 
                href="https://wa.me/919995037109?text=AUDIT" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="audit-whatsapp-quiet-link"
              >
                <MessageCircle size={15} /> Prefer WhatsApp? Chat directly
              </a>
            </div>

            {/* 3 Compact Benefit Rows (The 3 Fixes Scope) */}
            <div className="audit-compact-benefits-list">
              <div className="audit-compact-benefit-row">
                <div className="benefit-row-icon-wrap">
                  <Globe size={18} />
                </div>
                <div className="benefit-row-text">
                  <h3 className="benefit-row-title">1. Website &amp; Mobile Speed Check</h3>
                  <p className="benefit-row-desc">
                    Is it fast on mobile? Does it make a visitor call or fill the form? So you stop paying for clicks that bounce.
                  </p>
                </div>
              </div>

              <div className="audit-compact-benefit-row">
                <div className="benefit-row-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div className="benefit-row-text">
                  <h3 className="benefit-row-title">2. Google Maps &amp; Local Search Check</h3>
                  <p className="benefit-row-desc">
                    Are nearby customers finding you before competitors when searching &ldquo;near me&rdquo; in your city? So you get more local calls.
                  </p>
                </div>
              </div>

              <div className="audit-compact-benefit-row">
                <div className="benefit-row-icon-wrap">
                  <Target size={18} />
                </div>
                <div className="benefit-row-text">
                  <h3 className="benefit-row-title">3. Ads, Creative Hook &amp; Tracking Check</h3>
                  <p className="benefit-row-desc">
                    Is your budget going to buyers, and is every enquiry being tracked? So you know your real cost per lead.
                  </p>
                </div>
              </div>
            </div>

            {/* Below-CTA Trust Strip */}
            <div className="audit-micro-trust">
              <span className="micro-trust-item">
                <Star size={14} fill="#F59E0B" color="#F59E0B" /> Rated 5.0 on Google (5 verified reviews)
              </span>
              <span className="micro-trust-item">
                <CheckCircle size={14} /> 100% Free · No sales pitch
              </span>
              <span className="micro-trust-item">
                <Clock size={14} /> Delivered within 48 hours
              </span>
            </div>
          </div>

          {/* Right Column: Direct High-Converting Audit Form Card */}
          <div className="audit-hero-form-col" id="get-audit">
            {!isDone ? (
              <div className="glass-card audit-form-card">
                <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
                  <div className="hero-eyebrow-pill" style={{ margin: '0 auto 0.65rem' }}>
                    <span className="eyebrow-dot" /> LIMITED TO 5 FREE AUDITS / MONTH
                  </div>
                  <h2 style={{ fontSize: '1.65rem', color: '#ffffff', margin: '0 0 0.35rem', fontWeight: 700 }}>
                    Get your free audit
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 auto', lineHeight: '1.5' }}>
                    Fill in the 3 fields below (under a minute). We review your site, listing and ads within 48 hours.
                  </p>
                </div>

                {/* 4 Process Steps */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.45rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle size={13} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                      1. Fill 3 simple fields
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle size={13} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                      2. We review in 48 hours
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle size={13} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                      3. Get top 3 fixes
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle size={13} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                      4. Yours to keep free
                    </span>
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Field 1: Name */}
                  <div className="input-group">
                    <label className="input-label" htmlFor="audit-name">
                      Your name <span style={{ color: 'var(--accent-crimson)' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="audit-name" 
                      required 
                      placeholder="e.g. Rahul Nair, Sarah Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field" 
                    />
                  </div>

                  {/* Field 2: Website or Google Maps link */}
                  <div className="input-group">
                    <label className="input-label" htmlFor="audit-link">
                      Website or Google Maps link <span style={{ color: 'var(--accent-crimson)' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="audit-link" 
                      required 
                      placeholder="e.g. yourbusiness.com or Google Maps business name"
                      value={formData.websiteOrMaps}
                      onChange={(e) => setFormData({ ...formData, websiteOrMaps: e.target.value })}
                      className="input-field" 
                    />
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      No website? You can enter your Instagram handle or Google Maps name.
                    </span>
                  </div>

                  {/* Field 3: WhatsApp Number */}
                  <div className="input-group">
                    <label className="input-label" htmlFor="audit-phone">
                      WhatsApp number <span style={{ color: 'var(--accent-crimson)' }}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="audit-phone" 
                      required 
                      placeholder="e.g. +91 99950 37109 or +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field" 
                    />
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      We deliver your 3 fixes directly to your WhatsApp. Include country code.
                    </span>
                  </div>

                  {/* Optional Email */}
                  <div className="input-group">
                    <label className="input-label" htmlFor="audit-email">
                      Email address <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional backup)</span>
                    </label>
                    <input 
                      type="email" 
                      id="audit-email" 
                      placeholder="e.g. rahul@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field" 
                    />
                  </div>

                  {/* Field 4: What do you want most? */}
                  <div className="input-group">
                    <label className="input-label">What do you want most?</label>
                    <div className="audit-goal-grid">
                      {GOAL_OPTIONS.map((opt) => {
                        const isSelected = formData.goal === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, goal: opt.id })}
                            className={`audit-goal-btn ${isSelected ? 'active' : ''}`}
                            style={{ padding: '0.65rem 0.85rem', fontSize: '0.8rem' }}
                          >
                            <span className={`choice-radio-dot ${isSelected ? 'checked' : ''}`}>
                              {isSelected && <span className="choice-radio-inner" />}
                            </span>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* No-pressure promise box */}
                  <div className="audit-promise-box" style={{ margin: '0.5rem 0', padding: '0.85rem 1rem' }}>
                    <div className="audit-promise-item" style={{ fontSize: '0.8rem' }}>
                      <ShieldCheck size={16} style={{ color: 'var(--accent-crimson)', flexShrink: 0, marginTop: '1px' }} />
                      <span>
                        <strong>No-pressure promise:</strong> The audit is yours to keep, whether you hire us or not. Capped at 5 free audits/month for deep manual review.
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary btn-audit-submit disabled-fade"
                    style={{ padding: '0.95rem', fontSize: '1rem', marginTop: '0.25rem' }}
                  >
                    {isSubmitting ? 'Preparing Your Audit...' : 'Send Me My Free Audit'} <ArrowRight size={15} />
                  </button>

                  {/* Alternative Direct WhatsApp Link */}
                  <div style={{ textAlign: 'center', marginTop: '0.65rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', margin: '0 0 0.25rem' }}>
                      Prefer to skip the form? Send your link directly:
                    </p>
                    <a 
                      href="https://wa.me/919995037109?text=AUDIT" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'underline' }}
                    >
                      <MessageCircle size={13} color="#10B981" /> WhatsApp keyword &ldquo;AUDIT&rdquo; to +91 99950 37109
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Panel */
              <div className="glass-card success-banner-box text-center" style={{ padding: '3.5rem 2rem' }}>
                <div style={{ color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                  <CheckCircle size={54} />
                </div>
                <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.65rem', fontWeight: 700 }}>
                  Audit Request Received!
                </h2>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '460px', margin: '0 auto 1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. We&apos;ve received the details for <strong>{formData.websiteOrMaps}</strong>. 
                  Our team is manually reviewing your assets, and will deliver your <strong>3 top fixes</strong> to <strong>{formData.phone}</strong> within 48 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                  <a 
                    href={`https://wa.me/919995037109?text=${encodeURIComponent(`Hi OptiVir Ads team, I just requested a free marketing audit for ${formData.name} (${formData.websiteOrMaps}). Keyword: AUDIT`)}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                    style={{ padding: '0.85rem 1.65rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <MessageCircle size={16} /> Fast-track on WhatsApp (Keyword: AUDIT)
                  </a>

                  <Link href="/" className="btn-secondary" style={{ marginTop: '0.25rem' }}>
                    Return Home <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 2: Does this sound familiar? (Pain Points) ── */}
      <section className="audit-pain-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            <div className="hero-eyebrow-pill" style={{ margin: '0 auto 1rem' }}>
              <span className="eyebrow-dot" /> THE REALITY FOR LOCAL BUSINESSES
            </div>
            <h2 className="section-title" style={{ fontSize: '2.35rem', marginBottom: '0.75rem' }}>
              Does this sound familiar?
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.025rem', color: 'var(--text-secondary)' }}>
              Most business owners in Kerala and the GCC experience the exact same marketing frustration before getting clarity.
            </p>
          </div>

          <div className="audit-pain-grid">
            <div className="audit-pain-card">
              <div className="audit-pain-num">1</div>
              <p className="audit-pain-text">
                You&apos;re spending money on ads, SEO or social. Or you&apos;re about to. But the phone isn&apos;t ringing the way it should.
              </p>
            </div>

            <div className="audit-pain-card">
              <div className="audit-pain-num">2</div>
              <p className="audit-pain-text">
                Your agency sends reports full of clicks and impressions. You can&apos;t tell what&apos;s actually working or bringing in customers.
              </p>
            </div>

            <div className="audit-pain-card">
              <div className="audit-pain-num">3</div>
              <p className="audit-pain-text">
                You&apos;re not sure if the problem is the ads, the website, or your Google listing. So you keep paying and hoping.
              </p>
            </div>

            <div className="audit-pain-card">
              <div className="audit-pain-num">4</div>
              <p className="audit-pain-text">
                Competitors with worse services are ranking above you on Google Maps and winning local customers right in your neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: What you get in your free audit (The 3 Fixes Scope) ── */}
      <section className="audit-details-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <div className="hero-eyebrow-pill" style={{ margin: '0 auto 1rem' }}>
              <span className="eyebrow-dot" /> ZERO FLUFF · PRACTICAL BREAKDOWN
            </div>
            <h2 className="section-title" style={{ fontSize: '2.35rem', marginBottom: '0.75rem' }}>
              What you get in your free audit
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.075rem', color: '#ffffff', fontWeight: 500 }}>
              You get a clear answer to one question: <em>where are my enquiries leaking, and what do I fix first?</em>
            </p>
          </div>

          <div className="audit-details-grid">
            {/* Pillar 1: Website */}
            <div className="audit-detail-card">
              <span className="audit-detail-pill">
                <Globe size={14} /> Audit Area 1
              </span>
              <h3 className="audit-detail-title">Website check</h3>
              <p className="audit-detail-desc">
                Is it fast on mobile? Does it make a visitor call or fill the form? So you stop paying for clicks that bounce within three seconds.
              </p>
              <ul className="audit-detail-checklist">
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Mobile loading speed on 4G/5G Kerala &amp; GCC networks
                </li>
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Above-the-fold tap-to-call &amp; WhatsApp click friction
                </li>
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Copy clarity: Do visitors know why to choose you?
                </li>
              </ul>
            </div>

            {/* Pillar 2: Google Maps & Local Search */}
            <div className="audit-detail-card">
              <span className="audit-detail-pill">
                <MapPin size={14} /> Audit Area 2
              </span>
              <h3 className="audit-detail-title">Google Maps &amp; local search check</h3>
              <p className="audit-detail-desc">
                Are nearby customers finding you before your competitors when searching &ldquo;near me&rdquo; in your city? So you get more local calls.
              </p>
              <ul className="audit-detail-checklist">
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Google Business Profile categories &amp; primary keyword rank
                </li>
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Customer review count, velocity and response health
                </li>
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Competitor map-pack positioning in your local radius
                </li>
              </ul>
            </div>

            {/* Pillar 3: Ads & Tracking */}
            <div className="audit-detail-card">
              <span className="audit-detail-pill">
                <Target size={14} /> Audit Area 3
              </span>
              <h3 className="audit-detail-title">Ads &amp; tracking check</h3>
              <p className="audit-detail-desc">
                Is your budget going to buyers, and is every enquiry being tracked? So you know your real cost per lead.
              </p>
              <ul className="audit-detail-checklist">
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Ad targeting waste: negative keywords &amp; audience overlap
                </li>
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Creative hook retention: why viewers scroll past without DMing
                </li>
                <li className="audit-detail-check-item">
                  <CheckCircle size={14} /> Full conversion tracking: GA4, Meta Pixel &amp; call logs
                </li>
              </ul>
            </div>
          </div>

          {/* Real-World Diagnostic Examples */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <span className="hero-eyebrow-pill" style={{ margin: '0 auto 0.75rem' }}>
              <span className="eyebrow-dot" /> REALISTIC DIAGNOSTICS
            </span>
            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', margin: '0 0 0.5rem', fontWeight: 700 }}>
              Real Examples of What We Find in Audits
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
              We don&apos;t generate generic software scores. Here are 3 actual, specific leaks we recently diagnosed for local business owners:
            </p>

            <div className="audit-sample-grid">
              <div className="audit-sample-card">
                <span className="audit-sample-tag">Diagnostic Example: Website</span>
                <p className="audit-sample-found">
                  <strong>The Leak:</strong> Mobile phone number on hero banner was plain text instead of a tap-to-call link, causing mobile searchers to leave without dialing.
                </p>
                <p className="audit-sample-fix">
                  <strong>The Fix:</strong> Added a high-contrast sticky WhatsApp / call bar, instantly removing customer friction.
                </p>
              </div>

              <div className="audit-sample-card">
                <span className="audit-sample-tag">Diagnostic Example: Google Maps</span>
                <p className="audit-sample-found">
                  <strong>The Leak:</strong> Listed under generic secondary category &ldquo;Consultant&rdquo; instead of specific primary category for their city, invisible in the top 3 map pack.
                </p>
                <p className="audit-sample-fix">
                  <strong>The Fix:</strong> Adjusted primary category and service attributes, pulling them directly into nearby local search results.
                </p>
              </div>

              <div className="audit-sample-card">
                <span className="audit-sample-tag">Diagnostic Example: Meta Ads</span>
                <p className="audit-sample-found">
                  <strong>The Leak:</strong> Ad campaigns targeting broad statewide radius with no local radius boundaries, spending 35% of ad budget on users 150km away.
                </p>
                <p className="audit-sample-fix">
                  <strong>The Fix:</strong> Geofenced ad delivery strictly to active buyers within their realistic client travel radius.
                </p>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div style={{ marginTop: '2.5rem', padding: '1.75rem 2rem', background: 'rgba(176, 31, 58, 0.12)', border: '1px solid rgba(176, 31, 58, 0.35)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 0 0.35rem', fontWeight: 600 }}>
                Your top 3 fixes, in order.
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', margin: 0, maxWidth: '620px' }}>
                Plain language, no jargon. Delivered within 48 hours. You can do them yourself or with us.
              </p>
            </div>
            <a href="#get-audit" onClick={scrollToForm} className="btn-primary" style={{ padding: '0.85rem 1.75rem', whiteSpace: 'nowrap' }}>
              Claim My Free Audit <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why most marketing reports don't help you (The OptiVir Lead-Leak Method) ── */}
      <section className="lead-leak-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="hero-eyebrow-pill" style={{ margin: '0 auto 1rem' }}>
              <span className="eyebrow-dot" /> THE OPTIVIR LEAD-LEAK AUDIT METHOD
            </div>
            <h2 className="section-title" style={{ fontSize: '2.35rem', marginBottom: '0.85rem' }}>
              Why most marketing reports don&apos;t help you
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#ffffff', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
              Most agencies show you clicks and impressions. <strong>Those don&apos;t pay your rent.</strong>
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              We trace the full path: <em>search &rarr; click &rarr; visit &rarr; call or form &rarr; enquiry.</em> Wherever people drop off is where your money leaks.
            </p>
          </div>

          {/* Visual Funnel */}
          <div className="lead-leak-funnel">
            <div className="lead-leak-step">
              <span className="lead-leak-step-badge">Stage 1</span>
              <h4 className="lead-leak-step-title">Google / Meta Search</h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', margin: 0 }}>Buyer actively looks for service</p>
              <span className="lead-leak-warning">&times; Wrong keywords?</span>
            </div>

            <div className="lead-leak-step">
              <span className="lead-leak-step-badge">Stage 2</span>
              <h4 className="lead-leak-step-title">Ad or Map Click</h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', margin: 0 }}>Viewer clicks on your listing</p>
              <span className="lead-leak-warning">&times; Weak hook?</span>
            </div>

            <div className="lead-leak-step">
              <span className="lead-leak-step-badge">Stage 3</span>
              <h4 className="lead-leak-step-title">Website / Profile Visit</h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', margin: 0 }}>Prospect arrives on your page</p>
              <span className="lead-leak-warning">&times; Slow mobile bounce?</span>
            </div>

            <div className="lead-leak-step">
              <span className="lead-leak-step-badge">Stage 4</span>
              <h4 className="lead-leak-step-title">Call or WhatsApp Message</h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', margin: 0 }}>Customer takes action</p>
              <span className="lead-leak-warning">&times; Hidden phone link?</span>
            </div>

            <div className="lead-leak-step" style={{ borderColor: 'rgba(176, 31, 58, 0.45)', background: 'rgba(176, 31, 58, 0.1)' }}>
              <span className="lead-leak-step-badge" style={{ color: 'var(--accent-crimson)' }}>Final Stage</span>
              <h4 className="lead-leak-step-title" style={{ color: '#ffffff' }}>Qualified Local Enquiries</h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', margin: 0 }}>Direct phone calls &amp; WhatsApp chats</p>
              <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600, background: 'rgba(16, 185, 129, 0.12)', padding: '0.25rem 0.5rem', borderRadius: '6px', marginTop: '0.25rem' }}>✓ Actual Enquiries</span>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '1.5rem auto 0' }}>
            That&apos;s why the OptiVir Lead-Leak Audit looks at your website, listing and ads <strong>together</strong>, not one at a time.
          </p>
        </div>
      </section>

      {/* ── Section 5: Radical Honesty Box (Zero Fake Promises) ── */}
      <section className="container">
        <div className="audit-honest-promise-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={22} style={{ color: 'var(--accent-crimson)' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
              Radical Honesty: What We Promise (And What We Don&apos;t)
            </h3>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 1rem' }}>
            Too many digital agencies sell fantasy figures like &ldquo;10x revenue overnight&rdquo; or &ldquo;1,000 guaranteed clients next week.&rdquo; We don&apos;t operate like that.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: '#EF4444', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                <XCircle size={15} /> What We DON&apos;T Promise:
              </span>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                No magical overnight riches, no automated generic software scores, and no high-pressure sales calls trying to push long contracts.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: '#10B981', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                <CheckCircle2 size={15} /> What We DO Promise:
              </span>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                A manual, honest review of your online assets. We pinpoint exactly where real people are dropping off, and hand you the top 3 practical steps to fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Who's doing your audit ── */}
      <section className="audit-who-section">
        <div className="container" style={{ maxWidth: '940px' }}>
          <div className="audit-who-card">
            <div className="hero-eyebrow-pill" style={{ margin: '0 0 1rem' }}>
              <span className="eyebrow-dot" /> KANNUR &middot; KERALA &middot; GCC
            </div>

            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '0 0 1rem', fontWeight: 700 }}>
              Who&apos;s doing your audit
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '0 0 1.25rem' }}>
              <strong>OptiVir Ads</strong> is a Kannur-based team running SEO, Google Ads, Meta Ads and Google Maps marketing for businesses across Kerala and the GCC.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Your audit is conducted personally by an experienced performance marketer who actively runs live ad campaigns in Kerala and the UAE. No automated generic scanner reports. You receive honest analysis of what is actually driving or hindering local sales.
            </p>

            {/* Proof Numbers */}
            <div className="audit-who-stats-grid">
              <div className="audit-who-stat-cell">
                <div className="audit-who-stat-num">5.0 ★</div>
                <div className="audit-who-stat-label">Google Rating</div>
              </div>
              <div className="audit-who-stat-cell">
                <div className="audit-who-stat-num">48h</div>
                <div className="audit-who-stat-label">Delivery Time</div>
              </div>
              <div className="audit-who-stat-cell">
                <div className="audit-who-stat-num">5 / mo</div>
                <div className="audit-who-stat-label">Capped Free Audits</div>
              </div>
              <div className="audit-who-stat-cell">
                <div className="audit-who-stat-num">Kerala &amp; GCC</div>
                <div className="audit-who-stat-label">Regional Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: What clients say (Verified Reviews) ── */}
      <section className="audit-pain-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            <div className="hero-eyebrow-pill" style={{ margin: '0 auto 1rem' }}>
              <span className="eyebrow-dot" /> VERIFIED REVIEWS
            </div>
            <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
              What clients say
            </h2>
            <p className="section-subtitle" style={{ fontSize: '0.975rem', color: 'var(--text-secondary)' }}>
              Real feedback from business owners partnering with OptiVir Ads.
            </p>
          </div>

          <div className="audit-reviews-grid">
            <div className="audit-quote-card">
              <p className="audit-quote-text">
                &ldquo;Our Google Search campaigns now bring consistent, qualified local calls every week.&rdquo;
              </p>
              <div className="audit-quote-author">
                <span className="audit-quote-name">Muhammed Fayiz</span>
                <span className="audit-quote-source">Kannur &middot; Google review</span>
              </div>
            </div>

            <div className="audit-quote-card">
              <p className="audit-quote-text">
                &ldquo;Fast loading landing pages and clear weekly reporting.&rdquo;
              </p>
              <div className="audit-quote-author">
                <span className="audit-quote-name">Rashid Al Nuaimi</span>
                <span className="audit-quote-source">Dubai &middot; Google review</span>
              </div>
            </div>

            <div className="audit-quote-card">
              <p className="audit-quote-text">
                &ldquo;The local search and Google Maps optimization brought genuine enquiries for our services.&rdquo;
              </p>
              <div className="audit-quote-author">
                <span className="audit-quote-name">Ananya Nair</span>
                <span className="audit-quote-source">Kochi &middot; Google review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Buyer-Driven Questions (FAQ) ── */}
      <section className="audit-landing-faq-section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="hero-eyebrow-pill" style={{ margin: '0 auto 1rem' }}>
              <span className="eyebrow-dot" /> STRAIGHTFORWARD ANSWERS
            </div>
            <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
              Questions
            </h2>
            <p className="section-subtitle" style={{ fontSize: '0.975rem', color: 'var(--text-secondary)' }}>
              Everything you need to know about our free audit.
            </p>
          </div>

          <div className="audit-landing-faq-grid">
            <div className="audit-faq-card">
              <h4 className="audit-faq-q">Is it really free?</h4>
              <p className="audit-faq-a">
                Yes, 100% free. No card required, no surprise bill. You receive an honest diagnostic breakdown and top 3 fixes you can implement right away.
              </p>
            </div>

            <div className="audit-faq-card">
              <h4 className="audit-faq-q">Do I need to be an existing client?</h4>
              <p className="audit-faq-a">
                No. This audit is open to any business owner in Kerala or the GCC running (or about to run) Google, Maps, or Meta ads who wants to stop losing enquiries.
              </p>
            </div>

            <div className="audit-faq-card">
              <h4 className="audit-faq-q">Will you try to sell me something?</h4>
              <p className="audit-faq-a">
                No high-pressure sales pitch. We will clearly show you where your enquiries are leaking. If you would like our team to fix them and manage your campaigns, we can talk. If not, the audit and action plan are completely yours to keep.
              </p>
            </div>

            <div className="audit-faq-card">
              <h4 className="audit-faq-q">What do you need from me?</h4>
              <p className="audit-faq-a">
                Just your name, your website link or Google Maps listing name, and your WhatsApp number so we can deliver your breakdown. No passwords or backend access needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: The Masterclass P.S. Closing Strategy ── */}
      <section className="audit-landing-bottom-cta">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="audit-ps-card">
            <span className="hero-eyebrow-pill">
              <span className="eyebrow-dot" /> THE BOTTOM LINE
            </span>

            <p style={{ fontSize: '1.15rem', color: '#ffffff', lineHeight: '1.65', margin: 0, fontWeight: 500 }}>
              <strong>P.S.</strong> If your marketing isn&apos;t bringing in the enquiries you expected, here&apos;s the short version: we&apos;ll audit your website, Google listing and ads for free and show you the 3 fixes to make first within 48 hours. Strictly capped at 5 per month to ensure quality. It&apos;s yours to keep.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Every month you wait is another month of paying for traffic that doesn&apos;t turn into calls.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
              <a 
                href="#get-audit" 
                onClick={scrollToForm}
                className="btn-primary audit-hero-btn"
                style={{ fontSize: '1.05rem', padding: '0.95rem 2rem' }}
              >
                Get My Free Audit <ArrowRight size={16} />
              </a>
              <a 
                href="https://wa.me/919995037109?text=AUDIT" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ padding: '0.95rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageCircle size={16} /> WhatsApp &ldquo;AUDIT&rdquo;
              </a>
            </div>
          </div>

          {/* Simple Bottom Legal Bar */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            &copy; OptiVir Ads &middot; Kannur, Kerala &middot; <a href="mailto:services@optivirads.com" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>services@optivirads.com</a> &middot; <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Privacy Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
