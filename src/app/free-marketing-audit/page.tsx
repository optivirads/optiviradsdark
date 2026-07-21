'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Target, DollarSign, User, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { animate, stagger } from 'animejs';
import TextReveal from '@/components/TextReveal';

export default function FreeMarketingAudit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    website: '',
    company: '',
    focus: [] as string[],
    budget: '',
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const budgetOptions = [
    { label: 'Under ₹20,000 / mo', value: '<20k' },
    { label: '₹20,000 – ₹50,000 / mo', value: '20k-50k' },
    { label: '₹50,000 – ₹1,50,000 / mo', value: '50k-150k' },
    { label: '₹1,50,000+ / mo', value: '150k+' },
  ];

  const focusOptions = [
    { label: 'Search Engine Optimization (SEO)', value: 'seo' },
    { label: 'Google Search PPC Ads', value: 'google-ads' },
    { label: 'Meta (Facebook/Instagram) Ads', value: 'meta-ads' },
    { label: 'Conversion Rate Optimization (CRO)', value: 'cro' },
  ];

  useEffect(() => {
    if (!isDone) {
      animate('.step-content-item', {
        translateY: [15, 0],
        opacity: [0, 1],
        delay: stagger(80, { start: 100 }),
        duration: 600,
        easing: 'easeOutExpo',
      });
    }
  }, [step, isDone]);

  const handleNext = () => {
    if (step === 1 && (!formData.website || !formData.company)) return;
    if (step === 2 && formData.focus.length === 0) return;
    if (step === 3 && !formData.budget) return;

    animate('.step-inner', {
      translateX: -20,
      opacity: 0,
      duration: 250,
      easing: 'easeInQuad',
      complete: () => {
        setStep(step + 1);
        setTimeout(() => {
          animate('.step-inner', {
            translateX: [20, 0],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutExpo',
          });
        }, 30);
      }
    });
  };

  const handleBack = () => {
    if (step === 1) return;

    animate('.step-inner', {
      translateX: 20,
      opacity: 0,
      duration: 250,
      easing: 'easeInQuad',
      complete: () => {
        setStep(step - 1);
        setTimeout(() => {
          animate('.step-inner', {
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutExpo',
          });
        }, 30);
      }
    });
  };

  const toggleFocus = (value: string) => {
    const active = [...formData.focus];
    if (active.includes(value)) {
      setFormData({ ...formData, focus: active.filter((item) => item !== value) });
    } else {
      setFormData({ ...formData, focus: [...active, value] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `[ONBOARDING FREE AUDIT REQUEST]\nWebsite: ${formData.website}\nSelected Focus Areas: ${formData.focus.join(', ')}\nMonthly Ad Budget: ${formData.budget}`
        }),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      // Staggered success panel fade out
      animate('.get-started-box', {
        scale: 0.95,
        opacity: 0,
        duration: 400,
        easing: 'easeInQuad',
        complete: () => {
          setIsSubmitting(false);
          setIsDone(true);
          setTimeout(() => {
            animate('.success-banner-item', {
              translateY: [20, 0],
              opacity: [0, 1],
              delay: stagger(100),
              duration: 600,
              easing: 'easeOutExpo',
            });
          }, 50);
        }
      });
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong submitting your request. Please try again.');
    }
  };

  const progressPercent = ((step - 1) / 3) * 100;

  return (
    <div className="get-started-page">
      <div className="grid-overlay" />

      {/* Page Title */}
      <section className="onboarding-hero">
        <div className="container text-center">
          <TextReveal 
            text="Initiate Your Performance Audit" 
            className="onboarding-title" 
            tag="h1" 
            delay={150}
            duration={1000}
          />
          <p className="onboarding-subtitle">
            Provide details about your business goals. We&apos;ll crawl your marketing profiles and build an acquisition analysis.
          </p>
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
                  <span>Audit Onboarding</span>
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
                {step === 1 && (
                  <div className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <Globe size={18} /> Tell us about your website
                    </h3>
                    
                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="company">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        required 
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input-field" 
                      />
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="website">Website URL</label>
                      <input 
                        type="url" 
                        id="website" 
                        required 
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="input-field" 
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <Target size={18} /> What is your primary marketing focus?
                    </h3>
                    <p className="step-instruction step-content-item" style={{ opacity: 0 }}>Select all that apply.</p>
                    
                    <div className="step-options-list step-content-item" style={{ opacity: 0 }}>
                      {focusOptions.map((opt) => {
                        const isSelected = formData.focus.includes(opt.value);
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleFocus(opt.value)}
                            className={`onboarding-choice-btn ${isSelected ? 'active' : ''}`}
                          >
                            <span className="choice-checkbox" />
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <DollarSign size={18} /> What is your estimated monthly marketing budget?
                    </h3>
                    
                    <div className="step-options-list step-content-item" style={{ opacity: 0 }}>
                      {budgetOptions.map((opt) => {
                        const isSelected = formData.budget === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: opt.value })}
                            className={`onboarding-choice-btn radio ${isSelected ? 'active' : ''}`}
                          >
                            <span className="choice-radio-dot" />
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit} className="step-inner">
                    <h3 className="step-heading step-content-item" style={{ opacity: 0 }}>
                      <User size={18} /> Who should we send the audit results to?
                    </h3>
                    
                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field" 
                      />
                    </div>

                    <div className="input-group step-content-item" style={{ opacity: 0 }}>
                      <label className="input-label" htmlFor="email">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field" 
                      />
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
                  <div /> // Spacer
                )}

                {step < 4 ? (
                  <button 
                    onClick={handleNext}
                    disabled={
                      (step === 1 && (!formData.website || !formData.company)) ||
                      (step === 2 && formData.focus.length === 0) ||
                      (step === 3 && !formData.budget)
                    }
                    className="btn-primary disabled-fade"
                  >
                    Next Step <ArrowRight size={14} />
                  </button>
                ) : (
                  <button 
                    onClick={() => document.getElementById('hidden-submit')?.click()}
                    disabled={!formData.name || !formData.email || isSubmitting}
                    className="btn-primary disabled-fade"
                  >
                    {isSubmitting ? 'Generating Plan...' : 'Generate My Audit'} <CheckCircle size={14} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Onboarding Completed Success panel */
            <div className="glass-card success-banner-box text-center">
              <div className="success-icon success-banner-item" style={{ opacity: 0 }}>
                <CheckCircle size={54} />
              </div>
              <h2 className="success-title success-banner-item" style={{ opacity: 0 }}>Audit Initiated</h2>
              <p className="success-desc success-banner-item" style={{ margin: '0 auto 2rem', opacity: 0 }}>
                Thank you, <strong>{formData.name}</strong>. We&apos;ve initiated crawling on <strong>{formData.website}</strong>. 
                Our marketing engineers will draft your ROI audit and email it to <strong>{formData.email}</strong> shortly.
              </p>
              <div className="success-banner-item" style={{ opacity: 0 }}>
                <Link href="/" className="btn-secondary">
                  Return Home <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

