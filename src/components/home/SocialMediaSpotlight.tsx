import React from 'react';
import Link from 'next/link';
import { 
  Video, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Share2, 
  Bookmark, 
  Heart 
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

function InstagramIcon({ size = 16, color = '#E1306C' }: { size?: number; color?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke={color} 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function SocialMediaSpotlight() {
  const whatsappUrl = `https://wa.me/919995037109?text=${encodeURIComponent(
    "Hi OptiVir Ads team, I'd like to get more enquiries and bookings through Instagram Reels & social media management."
  )}`;

  const features = [
    {
      title: 'Scripted in Malayalam & English',
      desc: 'Hooks and storytelling crafted specifically for local audiences in Kannur, Calicut, Kochi, and GCC expats.',
    },
    {
      title: 'High-Impact Reels Production',
      desc: 'Shot at your business location, color-graded, and edited with trending audio, smooth transitions, and subtitles.',
    },
    {
      title: 'Active DM & Comment Lead Handling',
      desc: 'We monitor your post comments and direct messages so every curious customer gets a swift, helpful response.',
    },
    {
      title: 'Organic to Paid Ad Amplification',
      desc: 'We turn your highest-performing reels into laser-targeted Facebook & Instagram ads that generate direct WhatsApp leads.',
    },
  ];

  return (
    <section className="social-spotlight-section" id="social-spotlight">
      <span id="social-media-reels" style={{ position: 'relative', top: '-100px', display: 'block', visibility: 'hidden' }} />
      <div className="container">
        <div className="social-spotlight-grid">
          
          {/* Left Column: Value & Features */}
          <div className="social-text-col">
            <ScrollReveal direction="left" delay={50}>
              <div className="hero-eyebrow-pill" style={{ marginBottom: '1rem' }}>
                <InstagramIcon size={14} color="#E1306C" /> SOCIAL MEDIA &amp; REELS PRODUCTION
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Turn Instagram Reels Into Real <span className="text-gradient-green">WhatsApp Enquiries &amp; Customers.</span>
              </h2>
              <p className="social-desc">
                We handle your entire social media presence—from concept, on-location shooting, and Malayalam/English scripting to high-converting Meta Ads. You never have to worry about what to post tomorrow.
              </p>

              <div className="social-features-list">
                {features.map((feat, idx) => (
                  <div key={idx} className="social-feature-item">
                    <CheckCircle2 size={18} className="social-check" />
                    <div>
                      <h4 className="social-feat-title">{feat.title}</h4>
                      <p className="social-feat-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-cta-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <MessageCircle size={18} /> Chat About Social Media Plans
                </a>
                <Link href="/services/social-media-management" prefetch={false} className="social-link-secondary">
                  View Full Service Details <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Mockup / Reel Preview Frame */}
          <div className="social-visual-col">
            <ScrollReveal direction="right" delay={100}>
              <div className="reel-phone-frame">
                <div className="reel-phone-notch" />
                
                {/* Simulated Reel Card */}
                <div className="reel-screen">
                  <div className="reel-badge">
                    <Video size={12} /> REEL SHOWCASE
                  </div>

                  <div className="reel-play-circle">
                    <Play size={24} fill="#ffffff" />
                  </div>

                  <div className="reel-meta-bottom">
                    <div className="reel-caption-tag">
                      <Sparkles size={13} style={{ color: '#FCD34D' }} /> On-Location Shoot &amp; Local Ad
                    </div>
                    <p className="reel-caption-title">
                      Showcasing signature clinic services &amp; customer transformations.
                    </p>
                    <div className="reel-metrics-bar">
                      <span><Heart size={14} /> 4.2k</span>
                      <span><Share2 size={14} /> 1.8k</span>
                      <span><Bookmark size={14} /> 940</span>
                    </div>
                  </div>
                </div>

                {/* Floating Notification Chips */}
                <div className="floating-notif notif-wa">
                  <span className="notif-dot wa-bg" />
                  <div>
                    <b>New WhatsApp Enquiry</b>
                    <span>&ldquo;Can I book an appointment for Saturday?&rdquo;</span>
                  </div>
                </div>

                <div className="floating-notif notif-ad">
                  <span className="notif-dot ad-bg" />
                  <div>
                    <b>Meta Ad Campaign</b>
                    <span>Targeted within 10 km of your business</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
