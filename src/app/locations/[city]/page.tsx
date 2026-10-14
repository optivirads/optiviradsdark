import Faq from '@/components/faq/Faq';
import { LOCATIONS } from "@/lib/locations";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import {
  Search, Compass, Target, MapPin, Phone, Mail,
  ArrowRight, BarChart3, TrendingUp, CheckCircle2,
  ChevronRight, Zap, Shield, Globe2, Users2
} from "lucide-react";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS[city.toLowerCase()];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  if (!location) {
    return {
      title: "Location Not Found | OptiVir Ads",
      description: "The requested location could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${baseUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${baseUrl}/locations/${location.slug}`,
      siteName: "OptiVir Ads",
      images: [{ url: `${baseUrl}/images/office_space.png`, width: 1200, height: 630, alt: `OptiVir Ads in ${location.city}` }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [`${baseUrl}/images/office_space.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = LOCATIONS[city.toLowerCase()];

  if (!location) notFound();

  const isGcc = location.country === 'United Arab Emirates' || location.country === 'Qatar';

  const metrics = isGcc ? [
    { val: "5.4×", label: "Avg. ROI Achieved", desc: "ROAS benchmark across search & social platforms" },
    { val: "−42%", label: "CPC Reduction", desc: "Average savings through intent negative exclusions" },
    { val: "+165%", label: "Market Growth", desc: "Year-over-year pipeline traffic amplification" },
  ] : [
    { val: "Top 3", label: "Local Pack Rank", desc: "Average positioning for high-intent search queries" },
    { val: "+148%", label: "Traffic Elevation", desc: "Boost in organic local profile interactions" },
    { val: "+84%", label: "Lead Generation", desc: "Increase in call actions and direct web leads" },
  ];

  const services = [
    {
      title: "Google Maps & Local Profile Marketing",
      desc: `Ranking in the Google Map 3-Pack across ${location.city} to turn nearby searches into direct phone calls and bookings.`,
      icon: <MapPin size={20} />,
      color: "green",
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: `Capturing local search intent and scaling organic positioning across ${location.region}.`,
      icon: <Search size={20} />,
      color: "cyan",
    },
    {
      title: "Google Search Ads (PPC)",
      desc: "High-intent lead generation campaigns optimized for ROAS and Target Acquisition Cost.",
      icon: <Target size={20} />,
      color: "purple",
    },
    {
      title: `Meta Ads (Facebook & Instagram)`,
      desc: `Targeted visual acquisition campaigns engaging buyers throughout ${location.country}.`,
      icon: <Compass size={20} />,
      color: "cyan",
    },
  ];

  const blueprint = [
    { step: "01", name: "Audit & Discovery", desc: "Search intent audits and reverse-engineering of competitors' local keyword profiles and ad strategies." },
    { step: "02", name: "Technical Foundation", desc: "Inject nested local schema, optimise Core Web Vitals, and build PageSpeed-dominant rendering pipelines." },
    { step: "03", name: "Campaign Launch", desc: "Deploy search ads and localised Meta creatives directly targeting the regional audience with precision." },
    { step: "04", name: "Revenue Scaling", desc: "Optimize for conversion value using clean GA4 attribution, value-based bidding, and weekly iteration." },
  ];

  const whyUs = [
    "Zero vanity metrics: we measure conversions and closed revenue",
    "Advanced server-side tracking for pixel-perfect attribution",
    "Continuous A/B testing of headlines, assets, and landing copy",
    "Fully automated sitemaps, structured data, and entity coverage",
  ];

  const proofStats = [
    { label: "Data Accuracy", val: "99.8%" },
    { label: "Client ROAS", val: "4.2×" },
    { label: "PageSpeed", val: "98/100" },
    { label: "Cadence", val: "Weekly" },
  ];

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  const remoteServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/locations/${location.slug}#service`,
    "name": `${location.primaryServiceFocus} - OptiVir Ads ${location.city}`,
    "serviceType": "Digital Marketing & Performance Advertising",
    "description": location.metaDescription,
    "url": `${baseUrl}/locations/${location.slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      "name": "OptiVir Ads",
      "url": baseUrl,
      "telephone": "+919995037109",
      "hasMap": "https://www.google.com/maps?cid=16994082006733929099",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Green Building, Talap",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670002",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": location.city
      },
      {
        "@type": "AdministrativeArea",
        "name": location.region
      },
      {
        "@type": "Country",
        "name": location.country
      }
    ]
  };

  return (
    <main className="loc-page">
      {/* Schema */}
      {location.isRemote ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(remoteServiceSchema) }}
        />
      ) : (
        <LocalBusinessSchema
          id={`${baseUrl}/#localbusiness`}
          name="OptiVir Ads"
          description={location.metaDescription}
          url={`${baseUrl}/locations/${location.slug}`}
          telephone={location.telephone}
          address={location.address}
          geo={location.geo}
          image={`${baseUrl}/images/brand/OptiVir-Ads-Original-Horizontal-Colour-1200.png`}
        />
      )}
      <BreadcrumbSchema
        items={[
          { name: 'Locations', url: '/locations' },
          { name: location.city, url: `/locations/${location.slug}` },
        ]}
      />

      {/* Background */}
      <div className="grid-overlay" aria-hidden="true" />
      <div className="loc-blob loc-blob-1" aria-hidden="true" />
      <div className="loc-blob loc-blob-2" aria-hidden="true" />

      <div className="container loc-container">

        {/* ── Breadcrumbs ─────────────────────────────────── */}
        <nav className="loc-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={12} />
          <Link href="/locations">Locations</Link>
          <ChevronRight size={12} />
          <span className="active">{location.city}</span>
        </nav>

        {/* ── Hero ─────────────────────────────────────────── */}
        <header className="loc-hero">
          <div className="loc-badge">
            <span className="loc-badge-dot" />
            Regional Operations · {location.city}, {location.region}
          </div>

          <TextReveal
            text={location.heroHeading}
            className="loc-hero-title"
            tag="h1"
            delay={100}
            duration={900}
          />

          <ScrollReveal direction="up" delay={200}>
            <p className="loc-hero-sub">{location.heroSubheading}</p>
            <div className="loc-hero-actions">
              <Link href="/free-marketing-audit" className="btn-primary">
                Get a Free Marketing Audit <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </header>

        {/* ── Performance Stats ────────────────────────────── */}
        <section className="loc-section" aria-label="Performance metrics">
          <ScrollReveal stagger={150} delay={100}>
            <div className="loc-metrics-grid">
              {metrics.map((m, i) => (
                <div key={i} className="glass-card loc-metric-card">
                  <div className="loc-metric-val">{m.val}</div>
                  <h3 className="loc-metric-label">{m.label}</h3>
                  <p className="loc-metric-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ── Localized Services ───────────────────────────── */}
        <section className="loc-section" aria-labelledby="services-heading">
          <div className="loc-two-col">
            <ScrollReveal direction="left">
              <div className="loc-services-left">
                <h2 id="services-heading" className="loc-section-title">
                  Dominating the <span className="loc-accent">{location.city} Market</span>
                </h2>
                <p className="loc-body-text">{location.serviceDescription}</p>
                <div className="glass-card loc-focus-card">
                  <div className="loc-focus-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="loc-focus-label">Primary Strategic Focus</p>
                    <p className="loc-focus-val">{location.primaryServiceFocus}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={100} delay={150}>
              <div className="loc-services-list">
                {services.map((svc, i) => (
                  <div key={i} className={`glow-card-left-border ${svc.color} loc-svc-item`}>
                    <div className="loc-svc-icon">{svc.icon}</div>
                    <div>
                      <h3 className="loc-svc-title">{svc.title}</h3>
                      <p className="loc-svc-desc">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 4-Step Blueprint ─────────────────────────────── */}
        <section className="loc-section" aria-labelledby="blueprint-heading">
          <div className="loc-section-header">
            <h2 id="blueprint-heading" className="loc-section-title text-center">Our 4-Step Local Domination Blueprint</h2>
            <p className="loc-section-sub">How we scale search, acquisition, and conversion in {location.city}.</p>
          </div>
          <ScrollReveal stagger={100}>
            <div className="loc-blueprint-grid">
              {blueprint.map((item, i) => (
                <div key={i} className="glass-card loc-blueprint-card">
                  <div className="loc-blueprint-num">{item.step}</div>
                  <h3 className="loc-blueprint-title">{item.name}</h3>
                  <p className="loc-blueprint-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ── Why OptiVir ──────────────────────────────────── */}
        <section className="loc-section" aria-labelledby="why-heading">
          <div className="glass-card loc-why-card">
            <div className="loc-why-blob" aria-hidden="true" />
            <div className="loc-two-col" style={{ alignItems: 'center' }}>
              <div>
                <h2 id="why-heading" className="loc-section-title">
                  Why Regional Brands Partner with OptiVir
                </h2>
                <p className="loc-body-text" style={{ marginBottom: '2rem' }}>
                  We treat client advertising budgets like our own. Our analytical mindset, paired with creative campaigns, turns standard marketing into a predictable revenue system.
                </p>
                <ul className="loc-why-list">
                  {whyUs.map((feat, i) => (
                    <li key={i} className="loc-why-li">
                      <div className="loc-why-check"><CheckCircle2 size={13} /></div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="loc-proof-grid">
                {proofStats.map((item, i) => (
                  <div key={i} className="loc-proof-cell">
                    <div className="loc-proof-val">{item.val}</div>
                    <div className="loc-proof-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Capabilities Strip ───────────────────────────── */}
        <section className="loc-section" aria-label="Core capabilities">
          <div className="loc-caps-grid">
            {[
              { icon: <Globe2 size={22} />, title: 'Local & International SEO', desc: 'Rank in Google Map Pack and organic results for high-intent searches in your target market.' },
              { icon: <BarChart3 size={22} />, title: 'Data-Driven PPC', desc: 'Precision-targeted Google and Meta campaigns built to maximize ROAS from day one.' },
              { icon: <Shield size={22} />, title: 'Conversion Tracking', desc: 'Server-side event tracking with GA4 and Meta CAPI for pixel-accurate attribution.' },
              { icon: <TrendingUp size={22} />, title: 'Growth Analytics', desc: 'Custom dashboards and monthly strategy reports so you always know what\'s working.' },
              { icon: <Zap size={22} />, title: 'Speed Optimisation', desc: 'Technical performance audits targeting 95+ PageSpeed scores for ranking advantage.' },
              { icon: <Users2 size={22} />, title: 'Audience Strategy', desc: 'First-party data, lookalike modelling, and retargeting stacks that reduce CAC over time.' },
            ].map((cap, i) => (
              <div key={i} className="glass-card loc-cap-card">
                <div className="loc-cap-icon">{cap.icon}</div>
                <h3 className="loc-cap-title">{cap.title}</h3>
                <p className="loc-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact CTA ──────────────────────────────────── */}
        <section className="loc-section" aria-labelledby="cta-heading">
          <ScrollReveal direction="up">
            <div className="glass-card loc-cta-card">
              <div className="loc-cta-inner">
                <h2 id="cta-heading" className="loc-section-title">
                  Ready to dominate {location.city}?
                </h2>
                <p className="loc-body-text" style={{ maxWidth: 560, margin: '0 auto 2.5rem', textAlign: 'center' }}>
                  Let&apos;s engineer a predictable, data-driven revenue engine for your business. Book a free account audit with our dedicated growth team.
                </p>

                <div className="loc-contact-strip">
                  <div className="loc-contact-item">
                    <div className="loc-contact-icon"><MapPin size={18} /></div>
                    <h4 className="loc-contact-label">{location.isRemote ? "Service Delivery" : "Office Location (HQ)"}</h4>
                    <p className="loc-contact-val">
                      {location.isRemote ? (
                        <>
                          {location.servingModel}<br />
                          <span style={{ fontSize: '0.8rem', opacity: 0.85 }}>Office: Green Building, Talap, Kannur</span>
                        </>
                      ) : (
                        <>
                          {location.address.streetAddress}<br />
                          {location.address.addressLocality}, {location.address.addressRegion} {location.address.postalCode}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="loc-contact-item">
                    <div className="loc-contact-icon"><Phone size={18} /></div>
                    <h4 className="loc-contact-label">Call Operations</h4>
                    <p className="loc-contact-val">
                      {location.telephone}<br />
                      Mon – Sat, 9 AM – 6 PM
                    </p>
                  </div>
                  <div className="loc-contact-item">
                    <div className="loc-contact-icon"><Mail size={18} /></div>
                    <h4 className="loc-contact-label">Email Inquiry</h4>
                    <p className="loc-contact-val">
                      services@optivirads.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link href="/free-marketing-audit" className="btn-primary">
                    Get a Free Marketing Audit <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`https://wa.me/919995037109?text=${encodeURIComponent(`Hi OptiVir Ads team, I would like to consult regarding digital marketing in ${location.city}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    Quick WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* FAQ */}
      <Faq pageKey={location.slug} />
    </main>
  );
}
