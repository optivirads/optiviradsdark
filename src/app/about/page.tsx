'use client';

import React from 'react';
import { Cpu, RefreshCw, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

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

    </div>
  );
}

