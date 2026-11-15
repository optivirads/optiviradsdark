import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tag, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  CreditCard,
  Building2, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Zap, 
  Phone
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PricingCardsGrid from '@/components/pricing/PricingCardsGrid';

export const metadata: Metadata = {
  title: 'Digital Marketing Packages & Pricing Kerala & GCC | OptiVir Ads',
  description: 'Transparent digital marketing packages for businesses in Kerala & the GCC. Plans start from ₹15,000/month for Instagram Reels, Meta Ads, and Google Maps Local SEO.',
  alternates: {
    canonical: 'https://www.optivirads.com/pricing',
  },
  openGraph: {
    title: 'Digital Marketing Packages & Pricing Kerala & GCC | OptiVir Ads',
    description: 'Transparent digital marketing packages for businesses in Kerala & the GCC. Plans start from ₹15,000/month for Instagram Reels, Meta Ads, and Google Maps Local SEO.',
    url: 'https://www.optivirads.com/pricing',
    siteName: 'OptiVir Ads',
    type: 'website',
    images: [
      {
        url: 'https://www.optivirads.com/images/og-share-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'OptiVir Ads Pricing and Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Packages & Pricing Kerala & GCC | OptiVir Ads',
    description: 'Transparent digital marketing packages for businesses in Kerala & the GCC. Plans start from ₹15,000/month for Instagram Reels, Meta Ads, and Google Maps Local SEO.',
    images: ['https://www.optivirads.com/images/og-share-1200x630.png'],
  },
  keywords: [
    'Digital Marketing Cost Kerala',
    'Digital Marketing Packages Kerala',
    'Social Media Marketing Pricing Kerala',
    'Instagram Reels Agency Pricing Kannur',
    'Google Ads Packages Calicut',
    'Local SEO Pricing Kochi',
    'Digital Marketing Agency Dubai Pricing',
    'Performance Marketing Retainer UAE'
  ],
};

const PRICING_FAQS = [
  {
    question: 'What is the cost of digital marketing in Kerala for small businesses?',
    answer: 'Digital marketing packages for small to medium businesses in Kerala typically range between ₹15,000 and ₹45,000 per month. OptiVir Ads offers three transparent tiers: Basic (₹15,000/mo) for local presence on Google Maps and Instagram, Starter (₹29,000/mo) for multi-channel video and paid ads, and Growth (₹45,000/mo) for full customer acquisition funnels across Kerala and the GCC.',
  },
  {
    question: 'Is advertising spend included in your monthly agency fee?',
    answer: 'No. Ad budget is paid directly to Meta (Facebook & Instagram) or Google from your own corporate card or payment method. We manage, audit, and optimize your campaigns without markup, ensuring you maintain 100% account ownership and fiscal transparency.',
  },
  {
    question: 'How quickly can our business expect inquiries from paid ads and Reels?',
    answer: 'Most Kerala businesses see initial inquiries and phone calls within 7 to 14 days of launching properly targeted Google Search and Meta ad campaigns. Organic reach and Google Maps 3-Pack rankings compound over 60 to 90 days as search engines recognize consistent local signals and review velocity.',
  },
  {
    question: 'Why should we choose OptiVir Ads instead of hiring an in-house employee?',
    answer: 'An in-house digital marketer in Kerala typically costs ₹25,000 to ₹45,000/month in base salary alone, plus software licenses, hardware, and employer taxes—while offering only one person’s skill set. Partnering with OptiVir Ads gives you access to senior performance media buyers, Malayalam and English copywriters, video editors, and technical SEO engineers starting at ₹15,000/month with zero downtime or sick leaves.',
  },
  {
    question: 'Do you manage campaigns for businesses in Dubai and the GCC?',
    answer: 'Yes. We run bilingual marketing campaigns in Arabic, English, and Malayalam for businesses across Dubai, Abu Dhabi, Ras Al Khaimah, and Qatar. From our Kerala headquarters, we deliver high-performing Google Ads, Meta campaigns, and fast modern websites at roughly half the cost of local GCC agencies—with the exact same or better quality.',
  },
  {
    question: 'Are there any long-term lock-in contracts?',
    answer: 'No long-term lock-in contracts. Our services operate on month-to-month retainers. We recommend a 90-day initial commitment because advertising algorithms and organic search authority require time to compound and deliver maximum return on ad spend (ROAS).',
  },
];

export default function PricingPage() {
  const breadcrumbItems = [
    { name: 'Pricing & Packages', url: '/pricing' }
  ];

  const packages = [
    {
      name: 'Basic Presence',
      price: '₹15,000',
      period: '/month',
      daily: 'About ₹500 a day',
      tagline: 'Ideal for local retail stores, clinics, salons, and local services establishing a credible digital footprint.',
      badge: null,
      featured: false,
      whatsappMsg: "Hi OptiVir Ads, I'm interested in the Basic Presence Plan (₹15,000/month). Please share more details.",
      features: [
        {
          label: 'Instagram & Facebook Content',
          detail: '4 designed brand posts per month tailored to your local offers',
          included: true,
        },
        {
          label: 'Instagram Reels Production',
          detail: '2 scripted and edited vertical video Reels per month',
          included: true,
        },
        {
          label: 'Google Business Profile (Maps)',
          detail: 'Google Maps ranking & profile setup so nearby customers find you easily',
          included: true,
        },
        {
          label: 'Meta Ad Campaigns',
          detail: 'Basic ad setup targeting nearby customers within your city',
          included: true,
        },
        {
          label: 'Transparent Performance Report',
          detail: 'Monthly plain-English breakdown of reach, phone calls & customer inquiries',
          included: true,
        },
        {
          label: 'Direct WhatsApp Coordination',
          detail: 'All content reviewed and approved by you before going live',
          included: true,
        },
        {
          label: 'Daily DM & Comment Management',
          detail: 'Handling incoming social media inquiries and customer messages',
          included: false,
        },
        {
          label: 'Google Search PPC Ads',
          detail: 'High-intent search advertising for active service buyers',
          included: false,
        },
      ],
      ctaClass: 'btn-secondary',
    },
    {
      name: 'Starter Scale',
      price: '₹29,000',
      period: '/month',
      daily: 'About ₹967 a day',
      tagline: 'For growing businesses expanding from organic posting into predictable paid customer acquisition.',
      badge: 'MOST POPULAR · BEST VALUE',
      featured: true,
      whatsappMsg: "Hi OptiVir Ads, I'm interested in the Starter Scale Plan (₹29,000/month). Please share more details.",
      features: [
        {
          label: 'Multi-Channel Brand Content',
          detail: '6 custom designed brand posts per month across your social pages',
          included: true,
        },
        {
          label: 'Instagram Reels Production',
          detail: '4 scripted and edited video Reels per month with local hooks',
          included: true,
        },
        {
          label: 'Google Search or Meta Ads',
          detail: 'Targeted ads set up and managed weekly to bring in customer enquiries',
          included: true,
        },
        {
          label: 'Google Business Profile Management',
          detail: 'Weekly photo updates, offer highlights, and local search monitoring',
          included: true,
        },
        {
          label: 'Monthly Growth Analytics',
          detail: 'Simple monthly report detailing phone calls, enquiries, and cost per lead',
          included: true,
        },
        {
          label: 'Direct WhatsApp Approval',
          detail: 'Zero posts or ads published without your explicit confirmation',
          included: true,
        },
        {
          label: 'Daily DM & Comment Handling',
          detail: 'Live customer messaging response management',
          included: false,
        },
        {
          label: 'Advanced Ad Tracking',
          detail: 'Ad-blocker proof tracking setup to prevent lost leads',
          included: false,
        },
      ],
      ctaClass: 'btn-primary',
    },
    {
      name: 'Growth Engine',
      price: '₹45,000',
      period: '/month',
      daily: 'About ₹1,500 a day',
      tagline: 'Engineered for ambitious businesses requiring consistent weekly inquiries, calls, and footfall.',
      badge: 'FULL FUNNEL · BEST ROI',
      featured: false,
      whatsappMsg: "Hi OptiVir Ads, I'm interested in the Growth Engine Plan (₹45,000/month). Let's discuss onboarding.",
      features: [
        {
          label: 'Full Social Media Presence',
          detail: '10 custom designed brand posts across Instagram, Facebook & Google',
          included: true,
        },
        {
          label: 'High-Impact Reels Production',
          detail: '8 scripted and edited Reels with Malayalam & English hooks and trending audio',
          included: true,
        },
        {
          label: 'Meta & Google Ads Management',
          detail: 'Both Google and Instagram/Facebook ads actively managed and optimized weekly',
          included: true,
        },
        {
          label: 'Google Maps Top-3 Ranking',
          detail: 'Regular updates, local directory listings, and a system to collect positive reviews',
          included: true,
        },
        {
          label: 'Daily Inquiry & DM Handling',
          detail: 'Prompt replies to Instagram comments and messages so interested buyers never wait',
          included: true,
        },
        {
          label: 'Accurate Lead Tracking',
          detail: 'Complete tracking set up so you know exactly which ads generate calls and WhatsApp bookings',
          included: true,
        },
        {
          label: 'Dedicated Campaign Manager',
          detail: 'Direct access to your dedicated marketing manager via private WhatsApp group',
          included: true,
        },
        {
          label: 'Weekly Campaign Tuning',
          detail: 'Weekly budget reviews and adjustments to get you the most enquiries for your spend',
          included: true,
        },
      ],
      ctaClass: 'btn-secondary',
    }
  ];

  const comparisonRows = [
    {
      aspect: 'Monthly Financial Investment',
      diy: 'Your personal time (distracting from core business)',
      inHouse: '₹25,000 – ₹45,000 salary + PC + software + taxes',
      optivir: 'From ₹15,000/month (Clear predictable flat fee)',
    },
    {
      aspect: 'Reels Scripting & Video Editing',
      diy: '❌ Inconsistent phone clips, amateur audio',
      inHouse: 'Limited to that employee’s personal editing level',
      optivir: '✅ High-retention Reels scripted in Malayalam & English with viral hooks',
    },
    {
      aspect: 'Targeted Local Paid Ads',
      diy: 'Usually "Boost Post" button (wasting money on broad reach)',
      inHouse: 'Basic in-platform manager knowledge, rarely split-tested',
      optivir: '✅ Managed weekly by ad specialists who target buyers in your city and stop wasted spend',
    },
    {
      aspect: 'Google Maps 3-Pack Rankings',
      diy: 'Often left dormant or outdated',
      inHouse: 'Treated as an afterthought chore',
      optivir: '✅ Regular photo updates, local listings, and a simple review system that helps you rank higher',
    },
    {
      aspect: 'Technical Tracking & Analytics',
      diy: '❌ Guesswork based on social "likes"',
      inHouse: 'Basic vanity metrics (impressions, follower counts)',
      optivir: '✅ Accurate tracking set up so you see exact customer enquiries and know what works',
    },
    {
      aspect: 'Staff Leave, Vacations & Illness',
      diy: '❌ Marketing pauses completely when you get busy',
      inHouse: '❌ Work halts when your staff member takes leave',
      optivir: '✅ A full agency team working for you with zero sick leaves or interruptions',
    },
    {
      aspect: 'Strategic Performance Reporting',
      diy: '❌ No actionable data',
      inHouse: 'Unstructured subjective reports',
      optivir: '✅ A clear, plain-English monthly report showing your exact enquiries, calls, and spend',
    },
  ];

  return (
    <div className="pricing-page-wrapper">
      {/* Dynamic SEO JSON-LD Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={PRICING_FAQS} />

      {/* Hero Section */}
      <section className="pricing-hero-section">
        <div className="container">
          <div className="pricing-hero-content text-center">
            <div className="hero-eyebrow-pill" style={{ marginBottom: '1.25rem' }}>
              <Tag size={14} style={{ color: '#00FF87' }} /> TRANSPARENT PRICING · KERALA &amp; GCC
            </div>
            <h1 className="pricing-hero-title">
              Clear, Predictable Monthly Packages. <br className="hidden-mobile" />
              <span className="text-gradient-green">No Hidden Fees. No Confusing Jargon.</span>
            </h1>
            <p className="pricing-hero-subtitle">
              Whether you operate a dental clinic in Kannur, a retail showroom in Kochi, or an enterprise in Dubai, our growth packages are engineered around one metric: <strong>verified customer inquiries and tangible business growth.</strong>
            </p>

            <div className="pricing-trust-strip">
              <span className="trust-pill"><CheckCircle2 size={15} /> Month-to-month flexibility</span>
              <span className="trust-pill"><CheckCircle2 size={15} /> 100% account &amp; data ownership</span>
              <span className="trust-pill"><CheckCircle2 size={15} /> Zero agency markup on ad spend</span>
              <span className="trust-pill"><CheckCircle2 size={15} /> Malayalam &amp; English creative team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards Grid */}
      <section className="pricing-grid-section" id="packages">
        <div className="container">
          <PricingCardsGrid packages={packages} />

          {/* Operational Policy Notes */}
          <ScrollReveal direction="up" delay={150}>
            <div className="plan-notes-grid">
              <div className="plan-note-card">
                <CreditCard size={20} className="note-icon" />
                <div>
                  <b>Ad budget is always separate</b>
                  <p>Ad spend is billed directly to Meta or Google from your own credit card. You retain full control over how much you spend.</p>
                </div>
              </div>
              <div className="plan-note-card">
                <Clock size={20} className="note-icon" />
                <div>
                  <b>90-day compounding cycle</b>
                  <p>Ad targeting algorithms, customer retargeting pools, and Google search rankings compound over 3 months of consistent optimization.</p>
                </div>
              </div>
              <div className="plan-note-card">
                <ShieldCheck size={20} className="note-icon" />
                <div>
                  <b>50% advance milestone</b>
                  <p>Start with a 50% retainer advance; the balance is due after your first month&apos;s content calendar and Reels are approved.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Enterprise & GCC Custom Scope Card */}
          <ScrollReveal direction="up" delay={180}>
            <div className="enterprise-custom-banner">
              <div className="enterprise-custom-content">
                <div className="enterprise-custom-tag">
                  <Building2 size={15} /> ENTERPRISE &amp; GCC CLIENTS
                </div>
                <h3 className="enterprise-custom-title">
                  Need a Custom Web App, Multi-Branch Marketing, or GCC Advertising?
                </h3>
                <p className="enterprise-custom-desc">
                  We create custom marketing packages for multi-location businesses, medical centers, and larger brands in Kerala and the GCC that need custom web design, advanced lead tracking, and multi-city advertising campaigns.
                </p>
              </div>
              <div className="enterprise-custom-action">
                <Link href="/contact" prefetch={false} className="btn-primary">
                  Request Custom Scope <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AEO / GEO Fact Sheet & Answer Section */}
      <section className="aeo-answer-section">
        <div className="container">
          <ScrollReveal direction="up" delay={80}>
            <div className="section-header text-center">
              <span className="eyebrow-pill">
                <HelpCircle size={14} className="eyebrow-icon" /> 2026 PRICING GUIDE
              </span>
              <h2 className="section-title">
                Digital Marketing Cost in Kerala: <span className="text-gradient-green">The 2026 Price Breakdown</span>
              </h2>
              <p className="section-subtitle">
                Clear benchmarks and straightforward answers to common investment questions for Kerala and GCC business owners.
              </p>
            </div>
          </ScrollReveal>

          {/* Direct Answer Definition Box (Optimized for Google Featured Snippets & AI Overviews) */}
          <ScrollReveal direction="up" delay={120}>
            <div className="aeo-snippet-box">
              <div className="snippet-badge">
                <Zap size={14} /> DIRECT ANSWER FOR BUSINESS OWNERS
              </div>
              <p className="snippet-text">
                <strong>How much does digital marketing cost in Kerala?</strong> A professional digital marketing agency in Kerala typically charges between <strong>₹15,000 and ₹45,000 per month</strong> for small-to-medium businesses. Basic social media management and Google Maps setup start at <strong>₹15,000/month</strong>, while comprehensive performance marketing—including scripted Instagram Reels, Google Search PPC ads, and weekly conversion optimization—ranges from <strong>₹29,000 to ₹45,000/month</strong>. Advertising spend (paid directly to Meta or Google) is managed separately and usually begins at <strong>₹5,000 to ₹15,000/month</strong> for local businesses.
              </p>
            </div>
          </ScrollReveal>

          {/* Detailed Agency Comparison Table */}
          <ScrollReveal direction="up" delay={150}>
            <div className="comparison-table-wrapper" style={{ marginTop: '3.5rem' }}>
              <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
                <span className="eyebrow-pill">INVESTMENT COMPARISON</span>
                <h3 className="section-title" style={{ fontSize: '1.75rem' }}>
                  Doing It Yourself vs. Hiring Staff vs. <span className="text-gradient-green">OptiVir Ads</span>
                </h3>
              </div>

              <div className="table-responsive-box">
                <table className="agency-compare-table">
                  <thead>
                    <tr>
                      <th>What You Receive</th>
                      <th>Doing It Yourself</th>
                      <th>Hiring In-House Staff</th>
                      <th className="highlight-col">OptiVir Ads Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="row-title"><b>{row.aspect}</b></td>
                        <td className="row-diy">{row.diy}</td>
                        <td className="row-inhouse">{row.inHouse}</td>
                        <td className="row-us highlight-col">{row.optivir}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Frequently Asked Questions Section (AEO/GEO Optimized) */}
      <section className="pricing-faq-section">
        <div className="container">
          <ScrollReveal direction="up" delay={80}>
            <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
              <span className="eyebrow-pill">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="section-title">
                Everything You Need to Know <span className="text-gradient-green">Before Getting Started</span>
              </h2>
              <p className="section-subtitle">
                Clear answers to common questions regarding onboarding, ad spend, timelines, and reporting.
              </p>
            </div>
          </ScrollReveal>

          <div className="pricing-faq-grid">
            {PRICING_FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" delay={100 + idx * 50}>
                <div className="pricing-faq-card">
                  <h3 className="faq-card-question">
                    <HelpCircle size={18} className="faq-q-icon" /> {faq.question}
                  </h3>
                  <p className="faq-card-answer">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Final Call to Action Box */}
          <ScrollReveal direction="up" delay={150}>
            <div className="pricing-final-cta-card">
              <div className="cta-left">
                <h3 className="cta-heading">Not Sure Which Package Fits Your Current Stage?</h3>
                <p className="cta-sub">
                  Send us your business website or Google Maps link. We will conduct a free 3-point diagnostic audit of your Instagram, Google Maps, and local search visibility within 48 hours.
                </p>
              </div>
              <div className="cta-right">
                <a
                  href={`https://wa.me/919995037109?text=${encodeURIComponent("Hi OptiVir Ads team, I'd like a free marketing audit to determine which package fits my business best.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <MessageCircle size={18} /> Get Free Audit on WhatsApp
                </a>
                <a href="tel:+919995037109" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} /> Call +91 9995037109
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}

