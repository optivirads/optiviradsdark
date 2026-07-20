'use client';

import React from 'react';
import { Cpu, RefreshCw, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { FAQItemData } from '@/types/faq';

const aboutFaqs: FAQItemData[] = [
  {
    question: "What makes OptiVir Ads different from other digital marketing agencies in Kerala?",
    answer: "OptiVir Ads is built on performance accountability, technical depth, and radical transparency. Unlike agencies that show vanity metrics, we build server-side attribution systems that track revenue. We handle everything from GA4 configuration to Meta CAPI setup and value-based Google Smart Bidding, treating your marketing budget as our own capital and making only data-justified decisions."
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

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": aboutFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function About() {
  const values = [
    {
      icon: <Cpu size={22} />,
      title: "Data Rigor",
      desc: "We make no decisions based on gut feel. Every budget allocation, bid adjustment, and keyword focus is backed by structural search numbers and conversion data."
    },
    {
      icon: <Eye size={22} />,
      title: "Radical Transparency",
      desc: "Our clients see exactly what we see. We configure raw analytics integrations so you see actual revenue, ROAS, and customer values with no reports filtration."
    },
    {
      icon: <RefreshCw size={22} />,
      title: "Iteration Velocity",
      desc: "Digital markets shift daily. We apply agile principles to marketing, running rapid testing loops on creatives and landing pages to stay ahead of the competition."
    }
  ];

  const methodologySteps = [
    {
      number: "01",
      title: "Deep-Dive Audit",
      desc: "We analyze your historic ad accounts performance, search consoles, competitor keyword gaps, and user interaction maps to isolate immediate leaks."
    },
    {
      number: "02",
      title: "Precision Setup",
      desc: "We install pixel trackers, value-based conversion scripts, clean landing templates, and establish structured campaigns to capture existing commercial intent."
    },
    {
      number: "03",
      title: "Staged Scaling",
      desc: "Once a profitable cost-per-lead baseline is verified, we run micro-budget budget increases to scale acquisition without trigger algorithm reset."
    },
    {
      number: "04",
      title: "Continuous CRO",
      desc: "We continuously A/B test ad copy hooks, form structures, and page speed parameters to squeeze maximum conversion value out of incoming clicks."
    }
  ];

  return (
    <div className="about-page">
      {/* Dynamic SEO JSON-LD Schemas */}
      <BreadcrumbSchema items={[{ name: 'About Us', url: '/about' }]} />

      <div className="grid-overlay" />

      {/* Hero Header */}
      <section className="about-hero">
        <div className="container text-center">
          <TextReveal 
            text="The Science of Scaling Brands" 
            className="about-title" 
            tag="h1" 
            delay={150}
            duration={1000}
          />
          <p className="about-subtitle">
            We are a team of performance marketing engineers dedicated to building predictable, scalable customer acquisition systems.
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

          <ScrollReveal stagger={120} delay={100}>
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
            <h2 className="section-title">The Engineering Loop</h2>
            <p className="section-subtitle">How we take a chaotic market presence and transform it into a predictable growth machine.</p>
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


      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />

      {/* FAQ Section */}
      <FaqAccordion faqs={aboutFaqs} />

    </div>
  );
}

