import Faq from '@/components/faq/Faq';
import { LOCATIONS } from "@/lib/locations";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS[city.toLowerCase()];

  if (!location) {
    return {
      title: "Location Not Found | OptiVir Ads",
      description: "The requested location could not be found.",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `/locations/${location.slug}`,
      siteName: "OptiVir Ads",
      images: [{ url: "/images/office_space.png", width: 1200, height: 630, alt: `OptiVir Ads in ${location.city}` }],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = LOCATIONS[city.toLowerCase()];

  if (!location) notFound();

  const isDubai = location.slug === 'dubai';

  const metrics = isDubai ? [
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
      title: "Search Engine Optimization (SEO)",
      desc: `Capturing local search intent and scaling organic positioning across ${location.region}.`,
      icon: <Search size={20} />,
      color: "green",
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
    { label: "PageSpeed", val: "100/100" },
    { label: "Cadence", val: "Weekly" },
  ];

  return (
    <main className="loc-page">
      {/* Schema */}
      <LocalBusinessSchema
        name={`OptiVir Ads - ${location.city}`}
        description={location.metaDescription}
        url={`https://optivir.com/locations/${location.slug}`}
        telephone={location.telephone}
        address={location.address}
        geo={location.geo}
        image="https://optivir.com/images/logo.png"
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
          <span>Locations</span>
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
                Schedule Free Audit <ArrowRight size={16} />
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
                    <h4 className="loc-contact-label">Office Location</h4>
                    <p className="loc-contact-val">
                      {location.address.streetAddress}<br />
                      {location.address.addressLocality}, {location.address.addressRegion}
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
                      growth@optivir.com<br />
                      services@optivirads.com
                    </p>
                  </div>
                </div>

                <Link href="/free-marketing-audit" className="btn-primary">
                  Request Free Account Audit <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>

      {/* FAQ */}
      <Faq pageKey={location.slug} />

      <style>{`
        /* ── Page shell ── */
        .loc-page {
          min-height: 100vh;
          background: var(--bg-primary);
          padding-top: 6rem;
          padding-bottom: 0;
          position: relative;
          overflow: hidden;
        }

        .loc-container {
          position: relative;
          z-index: 2;
          padding-bottom: 6rem;
        }

        /* Ambient blobs */
        .loc-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .loc-blob-1 {
          width: 600px; height: 600px;
          top: -120px; right: -200px;
          background: radial-gradient(circle, rgba(0,255,135,0.055) 0%, transparent 70%);
        }
        .loc-blob-2 {
          width: 700px; height: 700px;
          top: 40%; left: -250px;
          background: radial-gradient(circle, rgba(139,92,246,0.045) 0%, transparent 70%);
        }

        /* Breadcrumb */
        .loc-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          letter-spacing: 0.03em;
        }
        .loc-breadcrumb a { color: var(--text-muted); transition: color 0.2s; }
        .loc-breadcrumb a:hover { color: var(--accent-cyan); }
        .loc-breadcrumb .active { color: #ffffff; }

        /* Badge */
        .loc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-green);
          background: rgba(0,255,135,0.07);
          border: 1px solid rgba(0,255,135,0.2);
          border-radius: 999px;
          padding: 0.35rem 0.9rem;
          margin-bottom: 1.5rem;
        }
        .loc-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: pulse-loc 2s ease-in-out infinite;
        }
        @keyframes pulse-loc {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        /* Hero */
        .loc-hero {
          margin-bottom: 6rem;
          margin-top: 2rem;
          max-width: 860px;
        }
        .loc-hero-title {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1.12;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
          .loc-hero-title { font-size: 2.25rem; }
        }
        .loc-hero-sub {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 700px;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }
        .loc-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Accent gradient text */
        .loc-accent {
          background: linear-gradient(135deg, var(--accent-green) 0%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Section spacing */
        .loc-section { margin-bottom: 7rem; }
        .loc-section-header { text-align: center; margin-bottom: 3.5rem; }
        .loc-section-title {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        @media (max-width: 768px) {
          .loc-section-title { font-size: 1.75rem; }
        }
        .loc-section-sub {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .loc-body-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .text-center { text-align: center; }

        /* Metrics */
        .loc-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .loc-metrics-grid { grid-template-columns: 1fr; }
        }
        .loc-metric-card { padding: 2.25rem; }
        .loc-metric-val {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }
        .loc-metric-card:hover .loc-metric-val { color: var(--accent-green); }
        .loc-metric-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .loc-metric-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Two-col layout */
        .loc-two-col {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 5rem;
          align-items: flex-start;
        }
        @media (max-width: 960px) {
          .loc-two-col { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* Services left */
        .loc-services-left { display: flex; flex-direction: column; gap: 2rem; }
        .loc-focus-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem;
        }
        .loc-focus-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(0,255,135,0.08);
          color: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,255,135,0.15);
          flex-shrink: 0;
        }
        .loc-focus-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.35rem;
        }
        .loc-focus-val {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #ffffff;
        }

        /* Services list */
        .loc-services-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .loc-svc-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem;
          border-radius: 14px;
          transition: background 0.2s;
        }
        .loc-svc-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(8,15,37,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .loc-svc-item:hover .loc-svc-icon { color: #ffffff; }
        .loc-svc-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.35rem;
          transition: color 0.2s;
        }
        .loc-svc-item:hover .loc-svc-title { color: var(--accent-green); }
        .loc-svc-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* Blueprint */
        .loc-blueprint-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .loc-blueprint-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) {
          .loc-blueprint-grid { grid-template-columns: 1fr; }
        }
        .loc-blueprint-card {
          padding: 2rem;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.75rem;
          position: relative;
        }
        .loc-blueprint-num {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 800;
          color: rgba(0,255,135,0.1);
          line-height: 1;
          transition: color 0.3s;
        }
        .loc-blueprint-card:hover .loc-blueprint-num { color: rgba(0,255,135,0.22); }
        .loc-blueprint-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          transition: color 0.2s;
        }
        .loc-blueprint-card:hover .loc-blueprint-title { color: var(--accent-green); }
        .loc-blueprint-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* Why us */
        .loc-why-card { padding: 3.5rem; position: relative; }
        .loc-why-blob {
          position: absolute;
          top: 0; right: 0;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .loc-why-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .loc-why-li {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .loc-why-check {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: rgba(0,255,135,0.08);
          color: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .loc-proof-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .loc-proof-cell {
          padding: 1.75rem;
          background: rgba(8,15,37,0.6);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          text-align: center;
        }
        .loc-proof-val {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-green);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .loc-proof-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 600;
        }

        /* Capabilities */
        .loc-caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 960px) {
          .loc-caps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) {
          .loc-caps-grid { grid-template-columns: 1fr; }
        }
        .loc-cap-card { padding: 2rem; display: flex; flex-direction: column; gap: 0.875rem; }
        .loc-cap-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(0,242,254,0.07);
          color: var(--accent-cyan);
          border: 1px solid rgba(0,242,254,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loc-cap-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }
        .loc-cap-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Contact CTA */
        .loc-cta-card { padding: 4rem; overflow: hidden; }
        .loc-cta-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
        }
        .loc-cta-inner .loc-section-title { margin-bottom: 1rem; }
        .loc-contact-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 760px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 2.5rem;
          margin-top: 1rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .loc-cta-card { padding: 2.5rem 1.5rem; }
          .loc-contact-strip { grid-template-columns: 1fr; }
        }
        .loc-contact-item { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
        .loc-contact-icon {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(8,15,37,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }
        .loc-contact-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }
        .loc-contact-val {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </main>
  );
}
