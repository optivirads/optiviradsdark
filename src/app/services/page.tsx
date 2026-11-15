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
    desc: 'Turn your social media pages into a steady source of customer interest and enquiries. We plan monthly content calendars, script and edit engaging Reels, and handle daily follower conversations.',
    bullets: [
      'Content Planning & Design: Custom branded graphics, carousels, and videos scheduled regularly.',
      'Active Customer Replies: Prompt responses to comments and DMs so interested buyers get help right away.',
      'Profile Optimization: Clear bio, highlight covers, and direct links that make contacting you effortless.'
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
    desc: 'Reach interested local customers across Instagram and Facebook. We design thumb-stopping video ads, write compelling Malayalam and English copy, and target people ready to buy.',
    bullets: [
      'Creative Testing: We test different video hooks, headlines, and offers to keep your cost per lead low.',
      'Accurate Lead Tracking: Tracking every phone call, form, and WhatsApp message so you know what works.',
      'Customer Follow-Up Ads: Showing targeted reminders to people who viewed your profile or website.'
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
    desc: 'Appear at the top of Google when local customers search for your exact services. You only pay when an interested customer clicks.',
    bullets: [
      'High-Intent Searches: Showing your business to people searching with ready-to-buy intent.',
      'Negative Keyword Filtering: Blocking wasted budget on irrelevant or free searches.',
      'Fast Landing Pages: Mobile-friendly pages designed to turn clicks into phone calls.'
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
    desc: 'Reach specific audiences and professionals on LinkedIn, Snapchat, and X/Twitter. Ideal for B2B contracts, youth marketing, or targeted demographic campaigns.',
    bullets: [
      'B2B LinkedIn Campaigns: Reach company decision makers, business owners, and professionals.',
      'Snapchat Vertical Video Ads: Dynamic vertical video ads that reach younger local shoppers and students.',
      'Twitter/X Topic Campaigns: Focused ads placed alongside trending local and industry discussions.'
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
    desc: 'Help nearby customers find your website organically on Google without ongoing ad spend. We optimize your website structure, create helpful content, and fix ranking issues.',
    bullets: [
      'Google Ranking Optimization: Helping your service pages appear in top search results and snippets.',
      'Helpful Content: Answering the questions your local customers are actively searching for.',
      'Website Speed & Health: Fixing site speed and mobile layout so visitors stay and search engines trust you.'
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
    desc: 'Get into the Google Maps Top 3 in your city so nearby customers call you before your competitors. Complete Google Business Profile setup, photo updates, and review collection.',
    bullets: [
      'Top 3 Map Optimization: Proper categories, service menus, city geotagging, and weekly photo updates.',
      'Review Collection System: Simple WhatsApp workflows and QR codes to help happy clients leave 5-star reviews.',
      'Local Directory Consistency: Ensuring your business name, address, and phone number match across all online directories.'
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
    desc: 'Build customer trust with helpful, well-written content. From educational blog posts and video scripts to persuasive website copy that turns visitors into enquiries.',
    bullets: [
      'Action-Oriented Website Copy: Clear, straightforward wording that encourages visitors to call or message.',
      'Customer Email Updates: Simple email updates that keep your past clients coming back.',
      'Helpful Visual Guides: Informative graphics and guides that answer common customer questions.'
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
    desc: 'Fast, modern websites and landing pages built to turn visitors into phone calls and WhatsApp messages. Loads instantly on any smartphone.',
    bullets: [
      'Sub-2-Second Mobile Speed: Modern code that loads smoothly even on slower mobile data connections.',
      'One-Tap Contact Buttons: Prominent WhatsApp and direct call buttons placed within easy thumb reach.',
      'Search Engine Ready: Built with clean code so Google can easily index and rank your pages.'
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
    desc: 'Stay in touch with your existing customer base and bring them back. We set up automated welcome messages, appointment reminders, and seasonal promotional emails.',
    bullets: [
      'Automated Follow-Ups: Automated messages for new inquiries, bookings, and customer check-ins.',
      'Customer Groups: Sending the right message to the right customers based on what they bought.',
      'Promotional Newsletters: Clean, attractive announcements for festive offers and seasonal sales.'
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
    desc: 'Give your business a clean, professional, and trustworthy visual identity. We design memorable logos, select cohesive colors and fonts, and create branded business materials.',
    bullets: [
      'Logo & Brand Guidelines: A clean, modern logo design with complete usage guidelines.',
      'Business Materials: Cohesive colors, fonts, letterheads, business cards, and social media templates.',
      'Clear Brand Message: A simple, compelling value proposition that explains why customers should choose you.'
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
    desc: 'Know exactly which ads, posts, and search terms bring paying customers. Clear, simple monthly reports with zero confusing marketing jargon.',
    bullets: [
      'Accurate Enquiry Tracking: Tracking every phone call, form submission, and WhatsApp booking.',
      "Ad-Blocker Proof Tracking: Setting up direct tracking so data isn't lost and budgets aren't wasted.",
      'Simple Visual Dashboard: A clean, easy-to-read summary showing your leads, costs, and returns.'
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
                <ScrollReveal 
                  key={service.id} 
                  delay={index * 60} 
                  direction="up" 
                  distance={35}
                  rotate={false}
                  repeat={true}
                  duration={500}
                >
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
