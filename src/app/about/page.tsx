import React from 'react';
import { Cpu, RefreshCw, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { FAQItemData } from '@/types/faq';
import { CURATED_REVIEWS } from '@/lib/reviews';

const aboutFaqs: FAQItemData[] = [
  {
    question: "What makes OptiVir Ads different from other digital marketing agencies in Kerala?",
    answer: "OptiVir Ads is built on real business results and complete transparency. Unlike agencies that focus on vanity metrics like &ldquo;likes&rdquo; or &ldquo;impressions&rdquo;, we focus on what really matters to a business owner: phone calls, WhatsApp bookings, and paying customers. We treat your advertising budget with the same care as our own and keep you informed with straightforward, plain-English reports."
  },
  {
    question: "What types of businesses does OptiVir Ads serve in Kerala and internationally?",
    answer: "We serve local service businesses in Kannur and across Kerala (healthcare, legal, home services, restaurants), e-commerce brands across India and the GCC, B2B technology and SaaS companies, real estate developers in Dubai and Kochi, educational institutions, and growth-stage startups across multiple verticals. Our campaigns scale from ₹15,000/month local awareness campaigns to multi-lakh monthly performance marketing accounts for enterprise clients."
  },
  {
    question: "How does OptiVir Ads onboard new clients and start delivering results?",
    answer: "Our onboarding process is structured for speed and precision: Days 1-2 — access handover and deep audit of your analytics, ad accounts, website, and competitor landscape; Days 3-4 — keyword research, audience segmentation, and campaign architecture planning; Days 5-7 — account setup, pixel and tracking configuration, ad creative briefing; Day 8 onwards — campaign launch with daily monitoring. Most clients see initial performance data and early wins within the first 2 to 3 weeks of campaign launch."
  },
  {
    question: "Does OptiVir Ads provide white-label digital marketing services for Kerala agencies?",
    answer: "Yes. We offer white-label digital marketing services for agencies, consultancies, and media companies across Kerala and India who want to expand their service offerings without hiring full-time specialists. This includes white-label Google Ads management, Meta advertising, SEO, and analytics reporting delivered under your brand. Contact our team via WhatsApp at +91 9995037109 to discuss white-label partnership terms and pricing structures."
  },
  {
    question: "How can I contact OptiVir Ads for a free digital marketing consultation?",
    answer: "You can reach OptiVir Ads through multiple channels: WhatsApp us directly at +91 9995037109 for an immediate response (fastest method), email us at services@optivirads.com, or fill in our Free Marketing Audit form on this website. Our Kannur office (Green Building, Talap) also welcomes in-person visits. We offer a comprehensive free digital marketing audit covering your SEO health, ad account performance, competitor gaps, and a prioritized 90-day growth roadmap — at zero cost or obligation."
  }
];

export default function About() {
  const values = [
    {
      icon: <Cpu size={22} />,
      title: "Decisions Based on Real Numbers",
      desc: "We don't guess what might work. Every ad budget, keyword choice, and campaign decision is guided by actual customer enquiries and search data."
    },
    {
      icon: <Eye size={22} />,
      title: "Complete Transparency",
      desc: "You always see what we see. We provide plain-English reports showing where every rupee is spent and how many genuine calls and leads come in."
    },
    {
      icon: <RefreshCw size={22} />,
      title: "Continuous Weekly Improvement",
      desc: "Online marketing changes constantly. We test and refine your ad creatives, headlines, and pages every week so your business stays ahead of competitors."
    }
  ];

  const methodologySteps = [
    {
      number: "01",
      title: "Deep Review",
      desc: "We review your existing ads, website, Google Maps profile, and local competitors to identify what is working and where enquiries are being lost."
    },
    {
      number: "02",
      title: "Clean Setup",
      desc: "We fix your tracking, update your Google Maps listing, design your content, and set up your ads so every dollar is spent on real local buyers."
    },
    {
      number: "03",
      title: "Smart Scaling",
      desc: "Once we see which ads bring in the most calls at the lowest cost, we safely increase budget on the winners to bring you more customers."
    },
    {
      number: "04",
      title: "Ongoing Optimization",
      desc: "We continually test new video hooks, headlines, and call-to-action buttons to ensure you get the maximum number of enquiries from your traffic."
    }
  ];

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl}/about#webpage`,
    "url": `${baseUrl}/about`,
    "name": "About OptiVir Ads | Performance Digital Marketing Agency",
    "description": "Learn about OptiVir Ads, our engineering methodology, data rigor, and digital marketing strategy led by Abhinand C, Digital Marketing Strategist.",
    "mainEntity": {
      "@id": `${baseUrl}/#organization`
    },
    "about": {
      "@type": "Person",
      "@id": `${baseUrl}/about#abhinand-c`,
      "name": "Abhinand C",
      "jobTitle": "Digital Marketing Strategist",
      "url": `${baseUrl}/about`,
      "worksFor": {
        "@id": `${baseUrl}/#organization`
      }
    }
  };

  return (
    <div className="about-page">
      {/* Dynamic SEO JSON-LD Schemas */}
      <BreadcrumbSchema items={[{ name: 'About Us', url: '/about' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <FAQSchema faqs={aboutFaqs} />

      <div className="grid-overlay" />

      {/* Hero Header */}
      <section className="about-hero">
        <div className="container text-center">
          <TextReveal 
            text="Helping Businesses Grow and Attract Customers" 
            className="about-title" 
            tag="h1" 
            delay={150}
            duration={1000}
          />
          <p className="about-subtitle">
            We are a digital marketing team in Kerala dedicated to helping local businesses and GCC brands attract more customers through honest, results-driven marketing.
          </p>
        </div>
      </section>

      {/* Grid Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Operating Principles</h2>
            <p className="section-subtitle">The guidelines that define our methodology and commitment to client success.</p>
          </div>

          <ScrollReveal stagger={120} delay={100} rotate={false}>
            <div className="values-grid">
              {values.map((val, idx) => (
                <div key={idx} className="glass-card value-card">
                  <div className="icon-badge cyan">
                    {val.icon}
                  </div>
                  <h3 className="value-card-title">{val.title}</h3>
                  <p className="value-card-desc">{val.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our 4-Step Process</h2>
            <p className="section-subtitle">How we turn online traffic into steady customer enquiries for your business.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line" />
            
            {methodologySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`timeline-item ${isEven ? 'left' : 'right'}`}>
                  <ScrollReveal direction={isEven ? 'left' : 'right'} delay={100}>
                    <div className="glass-card timeline-card">
                      <div className="timeline-number-badge">{step.number}</div>
                      <h3 className="timeline-step-title">{step.title}</h3>
                      <p className="timeline-step-desc">{step.desc}</p>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Search Crawler & AI Entity Verification (Hidden from human visual layout) */}
      <div id="abhinand-c" className="sr-only" aria-hidden="false">
        <h2>Leadership &amp; Performance Strategy</h2>
        <p>
          OptiVir Ads is led by Abhinand C, Founder and Digital Marketing Strategist. 
          Specializing in high-intent Google PPC systems, data-driven Meta ad campaigns, 
          server-side attribution, and technical local SEO across Kerala and the GCC.
        </p>
      </div>

      {/* Verified Google Business Reviews */}
      <ReviewsSection reviews={CURATED_REVIEWS} />

      {/* FAQ Section */}
      <FaqAccordion faqs={aboutFaqs} />

    </div>
  );
}

