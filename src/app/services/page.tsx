import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  Target, 
  Megaphone, 
  Users, 
  Compass, 
  PenTool, 
  Code, 
  ArrowRight,
  Mail,
  BarChart3,
  Palette,
  MapPin
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import ServicesRoiCalculator from '@/components/services/ServicesRoiCalculator';
import { FAQItemData } from '@/types/faq';
import { CURATED_REVIEWS } from '@/lib/reviews';

const servicesFaqs: FAQItemData[] = [
  {
    question: "What is the most effective digital marketing service for a small business in Kerala?",
    answer: "For most Kerala small businesses, a combined Local SEO and Google Ads approach delivers the fastest measurable ROI. Local SEO builds long-term Map Pack visibility while Google Search Ads immediately capture active buyers. Together, they cover both immediate acquisition (paid) and compounding long-term growth (organic) — maximizing customer acquisition at efficient cost-per-lead rates."
  },
  {
    question: "How much should a Kerala business budget for digital marketing per month?",
    answer: "Local service businesses in Kannur or Kochi typically invest ₹20,000 to ₹60,000/month in ad spend plus management fees. Growth-stage brands targeting state-wide Kerala markets invest ₹75,000 to ₹2,00,000/month. National and GCC-focused campaigns range from ₹2,00,000 to ₹10,00,000+/month. We build custom budget models during our free audit session based on your industry, competition, and target geography."
  },
  {
    question: "Can OptiVir Ads manage multiple digital marketing channels simultaneously for our business?",
    answer: "Yes. We manage fully integrated multi-channel digital marketing strategies, coordinating Google Ads, Meta Ads, SEO, Social Media Management, Content Marketing, and Analytics simultaneously. Campaigns are never siloed — Google Ads and Meta Ads share audience data, SEO keyword research informs paid bidding strategy, and social content reinforces ad messaging for consistent brand experiences across every customer touchpoint."
  },
  {
    question: "Do you offer performance-based digital marketing pricing for Kerala businesses?",
    answer: "Yes. For qualified campaigns with sufficient historical data, we offer performance-tied engagement models where a portion of our fees is linked to agreed KPIs — such as cost-per-lead targets, ROAS benchmarks, or organic traffic growth milestones. This aligns our incentives directly with your business success. WhatsApp us at +91 9995037109 to discuss if your account qualifies for performance-based pricing."
  },
  {
    question: "How does OptiVir Ads report campaign performance across all digital marketing services?",
    answer: "All clients receive custom Looker Studio dashboards aggregating performance data from Google Ads, Meta Ads, GA4, Google Search Console, and social media platforms in a single unified view. We deliver weekly summary emails with key metric highlights and monthly in-depth strategy reviews where we present performance analysis, optimization actions taken, and the upcoming 30-day plan. Full transparency — no black-box reporting, no hidden metrics."
  }
];

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": servicesFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const servicesData = [
  {
    id: 'smm',
    title: 'Social Media Management',
    slug: 'social-media-management',
    icon: <Users size={24} />,
    badgeClass: 'cyan',
    desc: 'Transform your social channels into high-engagement brand equity. We design creative calendars, construct community engagement playbooks, and manage active customer conversations.',
    bullets: [
      'Content Calendar & Creation: Multi-channel graphic design, layout, and scheduling.',
      'Community Cultivation: Direct reply sequencing to turn followers into brand advocates.',
      'Profile Architecture: Optimization of channel bios, link-in-bios, and visual grids.'
    ],
    metric: 'Engagement Rate Boost',
    metricValue: '+78%'
  },
  {
    id: 'meta',
    title: 'Meta Advertising (FB & IG)',
    slug: 'meta-advertising',
    icon: <Megaphone size={24} />,
    badgeClass: 'purple',
    desc: 'Disrupt scrolling behavior with high-performance video and visual ad hooks. We optimize ad accounts using advanced custom audiences, Lookalikes, and creative matrix testing.',
    bullets: [
      'Creative Matrix Testing: Systematic auditing of copy hooks, videos, and layouts.',
      'Conversion API Setup: Precision pixel mapping to match offline sale values.',
      'Retargeting funnels: Dedicated lead-nurturing setups to close warm traffic.'
    ],
    metric: 'Average Target ROAS',
    metricValue: '4.2x'
  },
  {
    id: 'google',
    title: 'Google Ads (Search & Display)',
    slug: 'google-advertising',
    icon: <Target size={24} />,
    badgeClass: 'green',
    desc: 'Intercept active buyers search queries. We construct highly optimized Search structures, configure automated bidding models, and design conversion-first landing pages.',
    bullets: [
      'Intent Keyword Dominance: Bidding on high-revenue commercial and search intent queries.',
      'Value-Based Bidding: Integrating Google Smart Bidding to target high-tier buyers.',
      'Negative Keyword Exclusion: Preventing ad spend leak on generic and low-intent searches.'
    ],
    metric: 'Average Cost-Per-Lead',
    metricValue: '-35%'
  },
  {
    id: 'other-ads',
    title: 'Niche Platform Advertising',
    slug: 'niche-platform-advertising',
    icon: <Compass size={24} />,
    badgeClass: 'cyan',
    desc: 'Capture B2B decision makers and target demographic niches. We deploy structured lead generation and brand awareness campaigns on LinkedIn, Snapchat, and Twitter/X.',
    bullets: [
      'B2B LinkedIn Campaigns: Hyper-targeted to job titles, industries, and firmographics.',
      'Snapchat Vertical Video Ads: Dynamic vertical creatives capturing Gen Z and millennial buyers.',
      'Twitter/X Topic Targeting: Display ads aligned with live industry conversations and interests.'
    ],
    metric: 'Niche B2B Pipeline Value',
    metricValue: '2.8x'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    slug: 'search-engine-optimization',
    icon: <Search size={24} />,
    badgeClass: 'green',
    desc: 'Acquire high-intent traffic without ongoing ad spend. We implement advanced schema, capture regional search intent, and resolve core technical issues that limit ranking.',
    bullets: [
      'Semantic Search Optimization: Structuring data and schema to maximize Google snippet views.',
      'Content Conquest: In-depth competitor content gap research to target high-volume phrases.',
      'Technical Core Auditing: Speeding up site loading and layout to satisfy Web Vitals.'
    ],
    metric: 'Organic Traffic Growth',
    metricValue: '+140%'
  },
  {
    id: 'google-maps',
    title: 'Google Maps Marketing & GBP',
    slug: 'google-maps-marketing',
    icon: <MapPin size={24} />,
    badgeClass: 'cyan',
    desc: 'Dominate the Google Map 3-Pack in Kannur, Kerala, and the GCC. Complete Google Business Profile setup, local citations, review collection workflows, and monthly call tracking.',
    bullets: [
      'Map 3-Pack Optimization: Category mapping, geo-tagged photos, and service menus.',
      'Review Velocity System: Front-desk QR code stands & automated WhatsApp review requests.',
      'Local Geo-Citations: NAP directory consistency & LocalBusiness schema implementation.'
    ],
    metric: 'Local Call Discovery',
    metricValue: '+180%'
  },
  {
    id: 'content',
    title: 'Content Marketing & Creation',
    slug: 'content-marketing',
    icon: <PenTool size={24} />,
    badgeClass: 'purple',
    desc: 'Nurture customer trust through value-first narrative assets. From educational blog clusters and email sequence setups to compelling video scripts and copy scripts.',
    bullets: [
      'Conversion Landing Copy: Bulletproof, action-oriented copy focused on removing friction.',
      'Automated Email Sequences: Content setups to nurture leads and re-engage cold lists.',
      'Rich Media Assets: Custom infographics, guides, and downloadables to capture emails.'
    ],
    metric: 'Lead-to-Sale Conversion',
    metricValue: '45%'
  },
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    slug: 'web-development',
    icon: <Code size={24} />,
    badgeClass: 'cyan',
    desc: 'We engineer blazingly fast custom web applications and conversion pages utilizing React and Next.js, optimized for search engines, speed, and responsive design.',
    bullets: [
      'Next.js Framework: Speed, SEO compatibility, and static page generation.',
      'Frictionless UX/UI Layouts: Streamlined navigation designs built to maximize conversion rates.',
      'Mobile-Responsive Engineering: Cross-device visual styling and speed tuning.'
    ],
    metric: 'Core Web Vitals Speed',
    metricValue: '<1.2s'
  },
  {
    id: 'email',
    title: 'Email Marketing & Automation',
    slug: 'email-marketing',
    icon: <Mail size={24} />,
    badgeClass: 'purple',
    desc: 'Maximize customer lifetime value and retention. We design high-converting email newsletters, automated customer sequence flows, and personalized SMS marketing.',
    bullets: [
      'Automated Workflows: Cart abandonment, welcome series, and post-purchase nurture flows.',
      'Audience Segmentation: Targeting subscriber lists based on purchase history and interaction behavior.',
      'Campaign Broadcasts: Beautiful newsletter designs and seasonal promotional copywriting.'
    ],
    metric: 'Avg. Email Contribution',
    metricValue: '+28%'
  },
  {
    id: 'branding',
    title: 'Branding & Corporate Identity',
    slug: 'branding',
    icon: <Palette size={24} />,
    badgeClass: 'purple',
    desc: 'Build a distinctive, cohesive corporate brand that commands market share. We design premium logos, curate color and typography systems, build visual style guide books, and frame corporate positioning statements.',
    bullets: [
      'Corporate Logo & Style Guides: Unique visual logo design, sub-branding layout rules, and complete asset usage guides.',
      'Corporate Identity Assets: Brand color systems, corporate typography matrices, letterheads, and business card collateral.',
      'Brand Positioning Maps: Audience message tailoring, tone-of-voice frameworks, and competitive positioning statements.'
    ],
    metric: 'Brand Recognition Lift',
    metricValue: '+65%'
  },
  {
    id: 'analytics',
    title: 'Analytics & Operations',
    slug: 'analytics-operations',
    icon: <BarChart3 size={24} />,
    badgeClass: 'green',
    desc: 'Eliminate attribution tracking blind spots. We deploy server-side tracking, configure GA4 dashboards, and clean up pixel mapping to give you exact ROI reports.',
    bullets: [
      'GA4 & Tag Manager Setup: Clean event tracking, custom user values, and funnel tracking.',
      'Server-Side Tracking: Bypassing browser ad-blockers to preserve attribution data accuracy.',
      'Consolidated Dashboards: Real-time Looker Studio reports detailing spend and returns.'
    ],
    metric: 'Data Tracking Accuracy',
    metricValue: '99.8%'
  }
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Dynamic SEO JSON-LD Schemas */}
      <ServiceSchema />
      <BreadcrumbSchema items={[{ name: 'Services', url: '/services' }]} />

      <div className="grid-overlay" />

      {/* Header Banner */}
      <section className="services-hero">
        <div className="container text-center">
          <TextReveal 
            text="Engineered Marketing Services" 
            className="services-title" 
            tag="h1" 
            delay={150}
            duration={1000}
          />
          <p className="services-subtitle">
            Uncompromising, performance-first operations designed to eliminate acquisition waste, scale conversions, and build lasting organic market authority.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service, index) => {
              const isLast = index === servicesData.length - 1;
              return (
                <ScrollReveal key={service.id} delay={index * 50} direction="up" stagger={0}>
                  <div className={`glass-card service-card ${isLast ? 'featured-card' : ''}`}>
                    <div className="service-card-main-content">
                      <div className="service-card-header">
                        <div className={`icon-badge ${service.badgeClass}`}>
                          {service.icon}
                        </div>
                        <h2 className="service-card-title">{service.title}</h2>
                      </div>
                      <p className="service-card-desc">{service.desc}</p>
                    </div>
                    <ul className="service-card-bullets">
                      {service.bullets.map((bullet, idx) => {
                        const splitIdx = bullet.indexOf(':');
                        if (splitIdx > -1) {
                          const boldText = bullet.substring(0, splitIdx + 1);
                          const restText = bullet.substring(splitIdx + 1);
                          return (
                            <li key={idx}>
                              <strong>{boldText}</strong>{restText}
                            </li>
                          );
                        }
                        return <li key={idx}>{bullet}</li>;
                      })}
                    </ul>
                    <div className="service-card-footer">
                      <div className="service-card-metric-info">
                        <span className="service-card-metric-label">{service.metric}</span>
                        <span className="service-card-metric-value">{service.metricValue}</span>
                      </div>
                      <Link href={`/services/${service.slug}`} className="service-card-link">
                        Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <ServicesRoiCalculator />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />

      {/* Regional Locations Cross-Linking */}
      <section className="services-locations-section" style={{ padding: '3.5rem 0 1rem', position: 'relative' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ff3366', fontWeight: 600 }}>
              Regional Operations &amp; Coverage
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', margin: '0.75rem 0 1rem', color: '#ffffff' }}>
              Delivering Growth Across Kerala &amp; the GCC
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 1.75rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our performance digital marketing and search engine strategies are actively deployed for local businesses, clinics, salons, and commercial enterprises across our core operating regions:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/locations/kannur" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                Kannur (HQ)
              </Link>
              <Link href="/locations/calicut" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                Calicut (Kozhikode)
              </Link>
              <Link href="/locations/kochi" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                Kochi (Ernakulam)
              </Link>
              <Link href="/locations/dubai" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                Dubai (UAE)
              </Link>
              <Link href="/locations/ras-al-khaimah" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                Ras Al Khaimah
              </Link>
              <Link href="/locations/qatar" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                Qatar (Doha)
              </Link>
              <Link href="/locations" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
                View All Coverage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Business Reviews */}
      <ReviewsSection reviews={CURATED_REVIEWS} />

      {/* FAQ Section */}
      <FaqAccordion faqs={servicesFaqs} />

    </div>
  );
}
