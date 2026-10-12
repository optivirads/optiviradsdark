'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Globe, 
  Target, 
  DollarSign, 
  User, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Sparkles, 
  MessageCircle, 
  Search,
  Calendar,
  Dumbbell,
  Scissors,
  Stethoscope,
  Store,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

function InstagramIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { animate, stagger } from 'animejs';
import TextReveal from '@/components/TextReveal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ReviewSchema from '@/components/seo/ReviewSchema';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import { CURATED_REVIEWS } from '@/lib/reviews';

const BUSINESS_CATEGORIES = [
  { id: 'salon', label: 'Salon, Spa & Beauty', icon: Scissors },
  { id: 'gym', label: 'Gym & Fitness Center', icon: Dumbbell },
  { id: 'clinic', label: 'Clinic & Healthcare', icon: Stethoscope },
  { id: 'retail', label: 'Retail & Local Store', icon: Store },
  { id: 'other', label: 'Other Small Business', icon: Building2 },
];

const FOCUS_OPTIONS = [
  { 
    id: 'appointments', 
    label: 'More Appointment Bookings & Visits', 
    desc: 'Fill open slots and generate consistent appointments for salons, spas, and clinics.' 
  },
  { 
    id: 'trials', 
    label: 'Trial Enquiries & Memberships', 
    desc: 'Attract qualified local people who want gym day passes, trials, and memberships.' 
  },
  { 
    id: 'calls', 
    label: 'Direct Phone Calls & WhatsApp Messages', 
    desc: 'Connect interested customers straight to your phone or WhatsApp chat.' 
  },
  { 
    id: 'local-seo', 
    label: 'Rank #1 on Google Search & Maps (Local SEO)', 
    desc: 'Get found when nearby customers search "near me" or your service in your city.' 
  },
  { 
    id: 'meta-ads', 
    label: 'Meta Ads (Instagram & Facebook)', 
    desc: 'Targeted visual ad campaigns to reach relevant local buyers in Kerala or the GCC.' 
  },
  { 
    id: 'google-ads', 
    label: 'Google Search Ads (PPC)', 
    desc: 'Capture active buyers searching for urgent services right now.' 
  },
];

const BUDGET_OPTIONS = [
  { id: 'starter', label: 'Under ₹15,000 / mo (Under AED 700)', sub: 'Just getting started with paid marketing' },
  { id: 'growth', label: '₹15,000 – ₹40,000 / mo (AED 700 – AED 1,800)', sub: 'Growing local visibility & steady enquiries' },
  { id: 'scale', label: '₹40,000 – ₹1,00,000 / mo (AED 1,800 – AED 4,500)', sub: 'Scaling appointments across multiple branches or city' },
  { id: 'enterprise', label: '₹1,00,000+ / mo (AED 4,500+)', sub: 'Aggressive market expansion across Kerala / GCC' },
  { id: 'guidance', label: 'Not sure yet — need recommendation', sub: 'Help me figure out the right budget to test with' },
];

export default function FreeMarketingAudit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    city: '',
    category: 'salon',
    presenceType: 'instagram' as 'instagram' | 'website' | 'maps' | 'fresh',
    presenceValue: '',
    focus: ['appointments'] as string[],
    budget: 'growth',
    name: '',
    phone: '',
    email: '',
    deliveryMethod: 'whatsapp' as 'whatsapp' | 'email',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isDone) {
      animate('.step-content-item', {
        translateY: [15, 0],
        opacity: [0, 1],
        delay: stagger(70, { start: 50 }),
        duration: 500,
        easing: 'easeOutExpo',
      });
    }
  }, [step, isDone]);

  const isStep1Valid = () => {
    if (!formData.company.trim()) return false;
    if (!formData.city.trim()) return false;
    if (formData.presenceType !== 'fresh' && !formData.presenceValue.trim()) return false;
    return true;
  };

  const isStep2Valid = () => formData.focus.length > 0;
  const isStep3Valid = () => !!formData.budget;
  const isStep4Valid = () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    return formData.name.trim().length > 1 && formData.phone.trim().length >= 7 && emailValid;
  };

  const handleNext = () => {
    if (step === 1 && !isStep1Valid()) return;
    if (step === 2 && !isStep2Valid()) return;
    if (step === 3 && !isStep3Valid()) return;

    animate('.step-inner', {
      translateX: -20,
      opacity: 0,
      duration: 220,
      easing: 'easeInQuad',
      complete: () => {
        setStep(step + 1);
        setTimeout(() => {
          animate('.step-inner', {
            translateX: [20, 0],
            opacity: [0, 1],
            duration: 350,
            easing: 'easeOutExpo',
          });
        }, 20);
      }
    });
  };

  const handleBack = () => {
    if (step === 1) return;

    animate('.step-inner', {
      translateX: 20,
      opacity: 0,
      duration: 220,
      easing: 'easeInQuad',
      complete: () => {
        setStep(step - 1);
        setTimeout(() => {
          animate('.step-inner', {
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 350,
            easing: 'easeOutExpo',
          });
        }, 20);
      }
    });
  };

  const toggleFocus = (value: string) => {
    const active = [...formData.focus];
    if (active.includes(value)) {
      if (active.length > 1) {
        setFormData({ ...formData, focus: active.filter((item) => item !== value) });
      }
    } else {
      setFormData({ ...formData, focus: [...active, value] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep4Valid()) return;

    setIsSubmitting(true);

    const categoryLabel = BUSINESS_CATEGORIES.find(c => c.id === formData.category)?.label || formData.category;
    const focusLabels = formData.focus.map(f => FOCUS_OPTIONS.find(o => o.id === f)?.label || f).join(', ');
    const budgetLabel = BUDGET_OPTIONS.find(b => b.id === formData.budget)?.label || formData.budget;
    const onlinePresenceText = formData.presenceType === 'fresh' 
      ? 'Starting fresh (no profile yet)' 
      : `${formData.presenceType.toUpperCase()}: ${formData.presenceValue}`;

    const formattedMessage = `[FREE MARKETING AUDIT REQUEST - 3 PRACTICAL IMPROVEMENTS]
Business Name: ${formData.company}
Business Category: ${categoryLabel}
Location / City: ${formData.city}
Online Presence: ${onlinePresenceText}
Priority Focus: ${focusLabels}
Monthly Budget: ${budgetLabel}
Contact Person: ${formData.name}
WhatsApp / Phone: ${formData.phone}
Email: ${formData.email}
Delivery Preference: ${formData.deliveryMethod === 'whatsapp' ? 'WhatsApp (+ Email)' : 'Email'}
Enquiry Keyword: GROW`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: `${formData.company} (${formData.city})`,
          message: formattedMessage
        }),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      animate('.get-started-box', {
        scale: 0.96,
        opacity: 0,
        duration: 350,
        easing: 'easeInQuad',
        complete: () => {
          setIsSubmitting(false);
          setIsDone(true);
          setTimeout(() => {
            animate('.success-banner-item', {
              translateY: [20, 0],
              opacity: [0, 1],
              delay: stagger(90),
              duration: 550,
              easing: 'easeOutExpo',
            });
          }, 40);
        }
      });
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong submitting your request. Please try again or message us on WhatsApp.');
    }
  };

  const progressPercent = ((step - 1) / 3) * 100;

  const getPresencePlaceholder = () => {
    switch (formData.presenceType) {
      case 'instagram':
        return '@yourbrand or instagram.com/yourbrand';
      case 'website':
        return 'https://yourbusiness.com';
      case 'maps':
        return 'Business Name as listed on Google Maps (e.g. Cut & Style Kannur)';
      default:
        return '';
    }
  };

  const getPresenceLabel = () => {
    switch (formData.presenceType) {
      case 'instagram':
        return 'Instagram Profile or Handle';
      case 'website':
        return 'Website Address (URL)';
      case 'maps':
        return 'Google Maps Business Listing Name or Link';
      default:
        return '';
    }
  };

  return (
    <div className="get-started-page">
      <BreadcrumbSchema items={[{ name: 'Free Marketing Audit', url: '/free-marketing-audit' }]} />
      <div className="grid-overlay" />

      {/* Page Title & Brand Guide Hook */}
      <section className="onboarding-hero">
        <div className="container text-center">
          <div className="hero-eyebrow-pill" style={{ margin: '0 auto 1.25rem' }}>
            <span className="eyebrow-dot" /> 3 PRACTICAL IMPROVEMENTS · 100% FREE
          </div>
          <TextReveal 
            text="Get a Free Marketing Audit for Your Business" 
            className="onboarding-title" 
            tag="h1" 
            delay={100}
            duration={800}
          />
          <p className="onboarding-subtitle" style={{ maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            Get three practical improvements for your ads or online presence. 
            We review how local customers find you, why viewers aren&apos;t converting, and how to attract more relevant enquiries.
          </p>

          <div className="audit-trust-strip">
            <span className="audit-trust-badge">
              <CheckCircle size={15} /> No website required
            </span>
            <span className="audit-trust-badge">
              <CheckCircle size={15} /> Delivered via WhatsApp within 24–48h
            </span>
            <span className="audit-trust-badge">
              <CheckCircle size={15} /> Built for Kerala &amp; GCC businesses
            </span>
          </div>
        </div>
      </section>

      {/* 3 Practical Improvements Guarantee Section */}
      <section className="audit-benefits-section">
        <div className="container max-w-700">
          <div className="audit-benefits-grid">
            <div className="audit-benefit-card">
              <span className="audit-benefit-num">
                <Search size={14} /> Improvement 1
              </span>
              <h3 className="audit-benefit-title">Local Google Visibility</h3>
              <p className="audit-benefit-desc">
                We check whether nearby customers can find you on Google Search and Maps when looking for your services in your city.
              </p>
            </div>

            <div className="audit-benefit-card">
              <span className="audit-benefit-num">
                <Target size={14} /> Improvement 2
              </span>
              <h3 className="audit-benefit-title">Ads &amp; Creative Hook</h3>
              <p className="audit-benefit-desc">
                We identify why your Instagram reels, posts, or ads get views but few actual messages, booking requests, or footfall.
              </p>
            </div>

            <div className="audit-benefit-card">
              <span className="audit-benefit-num">
                <TrendingUp size={14} /> Improvement 3
              </span>
              <h3 className="audit-benefit-title">Enquiry &amp; Booking Flow</h3>
              <p className="audit-benefit-desc">
                We inspect how easily an interested buyer can call, message on WhatsApp, or book an appointment with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Multi-Step Box */}
      <section className="onboarding-form-section">
        <div className="container max-w-700">
          {!isDone ? (
            <div className="glass-card get-started-box">
              {/* Progress Tracker */}
              <div className="onboarding-progress-bar-wrapper">
                <div className="progress-bar-labels">
                  <span>Free Audit Questionnaire</span>
                  <span>Step {step} of 4</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${progressPercent}%`, 
                      transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                    }} 
                  />
                </div>
              </div>

              {/* Form Content Steps */}
              <div className="step-content-area">
                {/* Step 1: Business Details & Online Presence */}
                {step === 1 && (
                  <div className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <Building2 size={18} /> Tell us about your business
                    </h3>

                    {/* Business Category Chips */}
                    <div className="input-group step-content-item" style={{ opacity: 0, marginBottom: '1.25rem' }}>
                      <label className="input-label">Business Category</label>
                      <div className="audit-chips-grid">
                        {BUSINESS_CATEGORIES.map((cat) => {
                          const Icon = cat.icon;
                          const isSelected = formData.category === cat.id;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, category: cat.id })}
                              className={`audit-chip-btn ${isSelected ? 'active' : ''}`}
                            >
                              <Icon size={14} />
                              <span>{cat.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="company">Business / Brand Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        required 
                        placeholder="e.g. Luxe Unisex Salon, Apex Fitness Gym, City Dental"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input-field" 
                      />
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="city">City &amp; Region</label>
                      <input 
                        type="text" 
                        id="city" 
                        required 
                        placeholder="e.g. Kannur, Kochi, Calicut, Dubai, Sharjah, Doha"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="input-field" 
                      />
                    </div>

                    {/* Online Presence Choice: Instagram / Website / Google Maps / Fresh */}
                    <div className="input-group step-content-item" style={{ opacity: 0, marginTop: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <label className="input-label">Where can we review your business?</label>
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-crimson)', fontWeight: 600 }}>No website needed</span>
                      </div>
                      
                      <div className="audit-presence-tabs">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, presenceType: 'instagram' })}
                          className={`audit-tab-btn ${formData.presenceType === 'instagram' ? 'active' : ''}`}
                        >
                          <span className="audit-tab-dot" />
                          <InstagramIcon size={15} />
                          <span>Instagram Page</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, presenceType: 'website' })}
                          className={`audit-tab-btn ${formData.presenceType === 'website' ? 'active' : ''}`}
                        >
                          <span className="audit-tab-dot" />
                          <Globe size={15} />
                          <span>Website</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, presenceType: 'maps' })}
                          className={`audit-tab-btn ${formData.presenceType === 'maps' ? 'active' : ''}`}
                        >
                          <span className="audit-tab-dot" />
                          <MapPin size={15} />
                          <span>Google Maps Listing</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, presenceType: 'fresh', presenceValue: '' })}
                          className={`audit-tab-btn ${formData.presenceType === 'fresh' ? 'active' : ''}`}
                        >
                          <span className="audit-tab-dot" />
                          <Sparkles size={15} />
                          <span>Starting Fresh (No profile yet)</span>
                        </button>
                      </div>

                      {formData.presenceType !== 'fresh' ? (
                        <div style={{ marginTop: '0.5rem' }}>
                          <label className="input-label" htmlFor="presenceValue" style={{ fontSize: '0.8rem' }}>
                            {getPresenceLabel()}
                          </label>
                          <input
                            type="text"
                            id="presenceValue"
                            placeholder={getPresencePlaceholder()}
                            value={formData.presenceValue}
                            onChange={(e) => setFormData({ ...formData, presenceValue: e.target.value })}
                            className="input-field"
                            required
                          />
                        </div>
                      ) : (
                        <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.03)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', marginTop: '0.5rem' }}>
                          No problem! We will build a starter roadmap tailored for your city and niche to launch your local visibility.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: What is your main priority? */}
                {step === 2 && (
                  <div className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <Target size={18} /> What is your primary priority?
                    </h3>
                    <p className="step-instruction step-content-item" style={{ opacity: 0 }}>
                      Select the outcomes that matter most to your business right now.
                    </p>
                    
                    <div className="step-options-list step-content-item" style={{ opacity: 0 }}>
                      {FOCUS_OPTIONS.map((opt) => {
                        const isSelected = formData.focus.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleFocus(opt.id)}
                            className={`onboarding-choice-btn ${isSelected ? 'active' : ''}`}
                            style={{ alignItems: 'flex-start' }}
                          >
                            <span className="choice-checkbox" style={{ marginTop: '3px' }} />
                            <div>
                              <div style={{ fontWeight: 600, color: isSelected ? '#ffffff' : 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                {opt.label}
                              </div>
                              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                {opt.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Estimated Monthly Ad Budget */}
                {step === 3 && (
                  <div className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <DollarSign size={18} /> What is your estimated monthly marketing budget?
                    </h3>
                    <p className="step-instruction step-content-item" style={{ opacity: 0 }}>
                      This helps us tailor practical suggestions that fit your realistic investment level.
                    </p>
                    
                    <div className="step-options-list step-content-item" style={{ opacity: 0 }}>
                      {BUDGET_OPTIONS.map((opt) => {
                        const isSelected = formData.budget === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: opt.id })}
                            className={`onboarding-choice-btn radio ${isSelected ? 'active' : ''}`}
                            style={{ alignItems: 'flex-start' }}
                          >
                            <span className="choice-radio-dot" style={{ marginTop: '3px' }} />
                            <div>
                              <div style={{ fontWeight: 600, color: isSelected ? '#ffffff' : 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                {opt.label}
                              </div>
                              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                                {opt.sub}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: Where to deliver results */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <User size={18} /> Where should we send your 3 improvements?
                    </h3>
                    <p className="step-instruction step-content-item" style={{ opacity: 0 }}>
                      We deliver your review in plain English (or Malayalam) with zero sales pressure.
                    </p>
                    
                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="name">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="e.g. Rahul Nair, Sarah Al-Mansoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field" 
                      />
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="phone">
                        WhatsApp / Phone Number <span style={{ color: 'var(--accent-crimson)' }}>*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        placeholder="e.g. +91 99950 37109 or +971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field" 
                      />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                        Include country code (+91 for India, +971 for UAE, +974 for Qatar).
                      </span>
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="email">Work or Personal Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="e.g. rahul@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field" 
                      />
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label">Preferred Delivery Method</label>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, deliveryMethod: 'whatsapp' })}
                          className={`audit-chip-btn ${formData.deliveryMethod === 'whatsapp' ? 'active' : ''}`}
                        >
                          <MessageCircle size={14} /> WhatsApp Message (Fastest)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, deliveryMethod: 'email' })}
                          className={`audit-chip-btn ${formData.deliveryMethod === 'email' ? 'active' : ''}`}
                        >
                          <Globe size={14} /> Email
                        </button>
                      </div>
                    </div>

                    {/* Hidden submit trigger */}
                    <button id="hidden-submit" type="submit" style={{ display: 'none' }} />
                  </form>
                )}
              </div>

              {/* Navigation controls */}
              <div className="onboarding-controls step-content-item" style={{ opacity: 0 }}>
                {step > 1 ? (
                  <button onClick={handleBack} className="btn-secondary">
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button 
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !isStep1Valid()) ||
                      (step === 2 && !isStep2Valid()) ||
                      (step === 3 && !isStep3Valid())
                    }
                    className="btn-primary disabled-fade"
                  >
                    Next Step <ArrowRight size={14} />
                  </button>
                ) : (
                  <button 
                    onClick={() => document.getElementById('hidden-submit')?.click()}
                    disabled={!isStep4Valid() || isSubmitting}
                    className="btn-primary disabled-fade"
                  >
                    {isSubmitting ? 'Submitting Details...' : 'Get My 3 Improvements'} <CheckCircle size={14} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Onboarding Completed Success panel */
            <div className="glass-card success-banner-box text-center">
              <div className="success-icon success-banner-item" style={{ opacity: 0, color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                <CheckCircle size={58} />
              </div>
              <h2 className="success-title success-banner-item" style={{ opacity: 0, fontSize: '1.75rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                Free Marketing Audit Requested!
              </h2>
              <p className="success-desc success-banner-item" style={{ margin: '0 auto 1.5rem', maxWidth: '520px', opacity: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Thank you, <strong>{formData.name}</strong>. We&apos;ve received the details for <strong>{formData.company}</strong> ({formData.city}). 
                Our team is reviewing your online presence and will deliver your <strong>3 practical improvements</strong> to <strong>{formData.phone}</strong> within 24–48 hours.
              </p>

              <div className="success-banner-item" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', alignItems: 'center', opacity: 0 }}>
                <a 
                  href={`https://wa.me/919995037109?text=${encodeURIComponent(`Hi OptiVir Ads team, I just requested a free marketing audit for my business (${formData.company} in ${formData.city}). Keyword: GROW`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem' }}
                >
                  <MessageCircle size={16} /> Chat on WhatsApp Now (Keyword: GROW)
                </a>

                <Link href="/" className="btn-secondary" style={{ marginTop: '0.5rem' }}>
                  Return Home <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}

          {/* Instant DM / WhatsApp Alternative Card from Brand Guide Page 6 & 7 */}
          {!isDone && (
            <div className="audit-fasttrack-card">
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageCircle size={16} style={{ color: 'var(--accent-crimson)' }} /> Prefer an instant reply on WhatsApp or Instagram?
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Send keyword <strong>&quot;GROW&quot;</strong> to get your marketing audit via quick voice note or chat.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/919995037109?text=GROW"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.8125rem' }}
                >
                  WhatsApp &quot;GROW&quot;
                </a>
                <a 
                  href="https://instagram.com/optivirads"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.8125rem' }}
                >
                  Instagram DM &quot;GROW&quot;
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <ReviewSchema reviews={CURATED_REVIEWS} />
      <ReviewsSection reviews={CURATED_REVIEWS} title="What Business Owners Say About Working With OptiVir Ads" />
    </div>
  );
}
