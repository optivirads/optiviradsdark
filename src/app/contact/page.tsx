'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send, ArrowRight } from 'lucide-react';
import { animate, stagger } from 'animejs';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!isSubmitted) {
      animate('.contact-form-item', {
        translateY: [15, 0],
        opacity: [0, 1],
        delay: stagger(80, { start: 300 }),
        duration: 800,
        easing: 'easeOutExpo',
      });
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit message.');
      }

      // Out animation
      animate('.contact-form', {
        scale: 0.95,
        opacity: 0,
        duration: 300,
        easing: 'easeInQuad',
        complete: () => {
          setIsSubmitted(true);
          setIsSubmitting(false);
          // Staggered success panel animation
          setTimeout(() => {
            animate('.success-animate-item', {
              translateY: [20, 0],
              opacity: [0, 1],
              delay: stagger(100),
              duration: 600,
              easing: 'easeOutExpo',
            });
          }, 50);
        }
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
      
      // Briefly animate error text in
      setTimeout(() => {
        animate('.contact-error-msg', {
          translateY: [10, 0],
          opacity: [0, 1],
          duration: 400,
          easing: 'easeOutExpo'
        });
      }, 50);
    }
  };

  return (
    <div className="contact-page">
      {/* Dynamic SEO JSON-LD Schemas */}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Contact', url: '/contact' }]} />

      <div className="grid-overlay" />

      {/* Hero Header */}
      <section className="contact-hero">
        <div className="container text-center">
          <TextReveal 
            text="Schedule Your Strategy Session" 
            className="contact-title" 
            tag="h1" 
            delay={150}
            duration={1000}
          />
          <p className="contact-subtitle">
            Connect with our digital marketing engineers to schedule a complete performance audit and layout your growth blueprint.
          </p>
        </div>
      </section>

      {/* Grid: Info + Form */}
      <section className="contact-section">
        <div className="container contact-grid-layout">
          {/* Info Side */}
          <ScrollReveal direction="left" delay={150}>
            <div className="contact-info-panel">
              <h2 className="info-title">Let's Discuss Your Pipeline</h2>
              <p className="info-desc">
                Speak with us about your business goals, marketing challenges, and growth plan. Working with businesses across Kannur, Kerala, India, UAE, Qatar, and the GCC.
              </p>

              <div className="info-channels">
                <div className="info-channel-item">
                  <div className="channel-icon">
                    <Mail size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Email OptiVir Ads</span>
                    <a href="mailto:services@optivirads.com" className="channel-value">services@optivirads.com</a>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem', maxWidth: '280px', lineHeight: '1.4' }}>
                      For SEO, Google Ads, Meta Ads, social media marketing, and project enquiries.
                    </p>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon">
                    <Phone size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Call for Consultation</span>
                    <a href="tel:+919995037109" className="channel-value">+91 9995037109</a>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">Kannur, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <div className="contact-form-container">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="glass-card contact-form">
                <div className="input-group contact-form-item" style={{ opacity: 0 }}>
                  <label className="input-label" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="input-field" 
                  />
                </div>

                <div className="input-group contact-form-item" style={{ opacity: 0 }}>
                  <label className="input-label" htmlFor="email">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-field" 
                  />
                </div>

                <div className="input-group contact-form-item" style={{ opacity: 0 }}>
                  <label className="input-label" htmlFor="company">Company URL / Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="company.com"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="input-field" 
                  />
                </div>

                <div className="input-group contact-form-item" style={{ opacity: 0 }}>
                  <label className="input-label" htmlFor="message">How Can We Help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    placeholder="Describe your current marketing goals or challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input-field" 
                  />
                </div>

                {errorMsg && (
                  <p className="contact-error-msg contact-form-item" style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                    {errorMsg}
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary contact-form-item w-full justify-center" 
                  style={{ opacity: 0 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="glass-card contact-success-card">
                <div className="success-icon success-animate-item" style={{ opacity: 0 }}>
                  <CheckCircle size={48} />
                </div>
                <h3 className="success-title success-animate-item" style={{ opacity: 0 }}>Inquiry Received</h3>
                <p className="success-desc success-animate-item" style={{ opacity: 0 }}>
                  Thank you, <strong>{formData.name}</strong>. Our digital strategy team will analyze your business profile and contact you at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <div className="success-animate-item" style={{ opacity: 0 }}>
                  <button onClick={() => { setIsSubmitted(false); setFormData({name:'',email:'',company:'',message:''}); }} className="btn-secondary">
                    Send Another Message <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

