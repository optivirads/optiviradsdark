export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Predefined mock metadata matching the OptiVir Ads branding and sections
const MOCK_METADATA: Record<string, PageMetadata> = {
  home: {
    title: "Scale Your Business with Precision-Engineered Digital Marketing | OptiVir Ads",
    description: "Specializing in SEO, high-intent Google Ads, and data-driven Meta campaigns for ambitious brands looking to dominate their market.",
  },
  services: {
    title: "Premium Marketing Capabilities & ROI-First Campaigns | OptiVir Ads",
    description: "Explore our engineered digital marketing capabilities including Dominating Local Markets, High-Conversion Acquisition, and Authority Engineering.",
  },
  about: {
    title: "About Us | OptiVir Ads: ROI-First Methodology & Transparency",
    description: "Learn about the OptiVir advantage. We treat your budget like our own, combining analytical rigor with creative intuition to scale your business.",
  },
  blog: {
    title: "Digital Marketing Blog: Growth Insights & Tactics | OptiVir Ads",
    description: "Read the latest digital marketing advice, Google Ads guides, local SEO strategies, and ROI-centric advertising tips from our marketing engineers.",
  },
  contact: {
    title: "Contact Us: Schedule Your Free Strategy Session | OptiVir Ads",
    description: "Ready to scale? Connect with our dedicated account management team for a precision-engineered digital marketing audit.",
  },
  "get-started": {
    title: "Free Audit & Strategy Session Onboarding | OptiVir Ads",
    description: "Submit your details and get a precision marketing audit designed to uncover predictable, scalable revenue growth opportunities.",
  },
  "social-media-management": {
    title: "Professional Social Media Management (SMM) Services | OptiVir Ads",
    description: "Nurture customer trust and build community growth through active, custom social media management and visual copywriting campaigns.",
  },
  "meta-advertising": {
    title: "Meta (Facebook & Instagram) Advertising Agency | OptiVir Ads",
    description: "Drive scalable customer acquisition and ROAS using targeted Facebook & Instagram Meta ad campaigns, custom creatives, and high-converting funnels.",
  },
  "google-advertising": {
    title: "Google Search PPC Advertising & Lead Generation Services | OptiVir Ads",
    description: "Capture high-intent search queries with precision Google Search and Shopping campaigns optimized for Target Cost-Per-Acquisition.",
  },
  "niche-platform-advertising": {
    title: "B2B LinkedIn, Pinterest, & Reddit Paid Advertising | OptiVir Ads",
    description: "Expand your acquisition reach using targeted native campaigns on LinkedIn, Pinterest, and Reddit tailored to your niche audiences.",
  },
  "search-engine-optimization": {
    title: "High-Intent SEO Services & Local Search Domination | OptiVir Ads",
    description: "Build search engine authority with local search optimization, semantic content strategies, technical site speed tuning, and high-value backlink structures.",
  },
  "content-marketing": {
    title: "Content Marketing & Conversion Copywriting Services | OptiVir Ads",
    description: "Engage prospect audiences with educational blog clusters, case studies, automated email sequences, and conversion-focused copy assets.",
  },
  "web-development": {
    title: "Custom Web Development & Conversion Landing Pages | OptiVir Ads",
    description: "High-performance custom web applications built on React and Next.js, optimized for page load speeds, usability, and responsive design.",
  },
  "email-marketing": {
    title: "High-Converting Email Marketing & Retention Automation | OptiVir Ads",
    description: "Maximize customer lifetime value through cart abandonment triggers, welcome drip flows, and segmented newsletter campaigns.",
  },
  "analytics-operations": {
    title: "Attribution Tracking, GA4, & Server-Side Tagging | OptiVir Ads",
    description: "Eliminate data gaps with tag manager audits, Google Analytics 4, and server-side tracking configurations for clean return reports.",
  },
  "branding": {
    title: "Premium Branding & Corporate Identity Design | OptiVir Ads",
    description: "Build a lasting brand identity. We design premium logos, typography, visual style guides, and positioning frameworks that command market share.",
  },
};

const MOCK_FAQS: Record<string, FaqItem[]> = {
  home: [
    { question: "What are the core digital marketing services offered by OptiVir Ads in Kerala?", answer: "OptiVir Ads offers a comprehensive range of data-driven services including high-intent Search Engine Optimization (SEO), ROI-focused Google Ads (PPC), target Meta Ads campaigns (Facebook & Instagram), conversion copywriting, custom Next.js Web Development, and advanced Analytics & Tagging configuration." },
    { question: "How does OptiVir Ads stand out from other digital marketing agencies in Kochi?", answer: "Unlike generic agencies that track vanity metrics like clicks and impressions, OptiVir Ads is a performance-first digital marketing agency. We build value-based bidding strategies, integrate offline CRM sales tracking, and set up server-side tag managers so you can see exactly which marketing channels drive closed-won revenue." },
    { question: "Do you provide localized digital marketing services outside India?", answer: "Yes, our digital marketing company manages high-growth regional and international campaigns for enterprise and e-commerce brands across the GCC (specifically Dubai and Qatar), the United Kingdom, and North America, utilizing specialized localized search and ad targeting strategies." },
    { question: "What is the cost of hiring a professional digital marketing company in Kerala?", answer: "The cost of digital marketing services varies depending on campaign complexity, industry competition, and required ad budgets. We construct custom pricing models based on project scope, offering performance-tied structures or fixed monthly retainers that guarantee ROI-oriented focus." },
    { question: "How quickly can your growth marketing team start optimizing our campaigns?", answer: "Our standard onboarding phase takes 5 to 7 business days. This includes auditing your existing analytics, setting up GTM containers, performing comprehensive search intent gap research, and building a 30-day campaign rollout blueprint." }
  ],
  "search-engine-optimization": [
    { question: "What are the primary SEO services offered by OptiVir Ads to rank in Kerala?", answer: "We offer technical SEO audits, localized search optimization (GMB management), semantic schema markup generation, in-depth keyword gap research, and authority link-building strategies to help Kerala-based businesses rank high on Google." },
    { question: "How long does it take to see tangible organic traffic results from search engine optimization?", answer: "Organic SEO typically takes 3 to 6 months to display significant ranking increases. Highly competitive keywords can take longer, but our local SEO strategies capture immediate search intent early on to drive qualified inquiries." },
    { question: "How do you define Local SEO and Google Map Pack rankings?", answer: "Local SEO focuses on optimizing your digital presence to rank in local map packs and geographically focused searches (e.g., 'SEO agency in Kannur'). We structure nested LocalBusiness schema, maintain active NAP consistency, and run citation campaigns to dominate local map results." },
    { question: "Do you guarantee number one rankings on Google search engine result pages?", answer: "No ethical SEO company guarantees #1 organic rankings due to Google's dynamic algorithm shifts. We do, however, guarantee a transparent, data-driven optimization methodology that has consistently increased rankings, organic traffic, and click-through rates." },
    { question: "How does having optimized FAQ schema benefit my organic search rankings?", answer: "By dynamically injecting structured QA schema, Google's search crawlers can parse and display your questions directly in 'People Also Ask' (PAA) and rich search snippets, significantly expanding your desktop and mobile search visibility." }
  ],
  "google-advertising": [
    { question: "What digital advertising models do you build for Google Ads in Kerala?", answer: "We set up search campaigns capturing active commercial intent, Performance Max (PMax) setups for e-commerce, Google Shopping feeds, remarketing campaigns, and localized call-only ads tailored for local business directories." },
    { question: "What is a healthy target ROAS benchmark for PPC campaigns?", answer: "A profitable ROAS depends on profit margins, but a baseline target is 300% to 500% (3x to 5x return). We construct negative keyword safeguards and smart bidding parameters to push campaigns toward these profitability metrics." },
    { question: "How does OptiVir Ads eliminate budget waste on Google Ads campaigns?", answer: "We optimize ad accounts by adding broad negatives daily, excluding low-intent search queries, restricting geographical parameters, and mapping server-side offline conversions to prevent bidding on invalid leads." },
    { question: "Do you offer Google Ads management services for small businesses and startups?", answer: "Yes, we work with both local startups and enterprise brands, adjusting our smart bidding models, copy styles, and budget distributions to align with your unique scale and market segment." },
    { question: "How do you write high-converting copy for Google search advertisements?", answer: "We construct conversion-driven PPC ad copy focused on direct benefits, dynamic keyword insertion, strong calls-to-action, and optimized ad extensions to maximize click-through rates (CTR)." }
  ],
  "meta-advertising": [
    { question: "How do Meta Ads differ from Google Search Ads in terms of purchase intent?", answer: "Google Ads captures existing search intent (users searching for solutions), while Meta Ads (Facebook & Instagram) drives visual demand disruption. We target audiences based on demographics and interests, creating awareness before intent begins." },
    { question: "What creative formats do you utilize for high-performing Facebook and Instagram Ads?", answer: "We design high-hook vertical video reels, graphic matrices, multi-product carousels, and client testimonial grids optimized for scroll-stopping interaction." },
    { question: "How does the Meta Conversions API (CAPI) improve attribution accuracy?", answer: "CAPI sends conversion events directly from our server rather than relying on browser pixels. This bypasses ad-blockers and iOS privacy restrictions, providing accurate tracking and better custom audience optimization." },
    { question: "How do you run custom and Lookalike audience targeting on Meta platforms?", answer: "We build custom audiences from your website visitors, customer lists, and video viewers, then command Meta's AI to find high-probability lookalike profiles to scale your customer acquisition." },
    { question: "What is your approach to testing copy and visual hooks for Meta Ads?", answer: "We execute dynamic creative testing (DCT) models, auditing multiple visual hooks, copy hooks, and CTA buttons simultaneously to isolate the best-performing combinations for scaling budgets." }
  ],
  "social-media-management": [
    { question: "What social channels does your management team optimize in Kerala?", answer: "We manage and optimize Instagram, Facebook, LinkedIn, YouTube, and regional social channels with custom aesthetic grid design, vertical reel production, and targeted calendar copy." },
    { question: "How do you increase community engagement rates on business social profiles?", answer: "We establish reply sequencing guidelines, prompt active conversations through Q&A formats, and design shareable, value-first carousel graphics to organically boost saves and shares." },
    { question: "Do you manage influencer collaboration campaigns in Kerala?", answer: "Yes, we manage micro-influencer activations across Kerala, selecting creators whose demographics match your customer profiles, and optimizing briefs for actual brand conversions." },
    { question: "How often should businesses post updates to maintain algorithmic visibility?", answer: "We recommend publishing 3 to 5 high-value posts weekly, combined with daily active stories, to feed the platform algorithms and remain visible to active followers." },
    { question: "Do you provide analytical reports detailing our monthly social growth?", answer: "Yes, we distribute dashboard reports detailing reach, engagement multipliers, profile clicks, and inquiry generation, keeping you informed on community health." }
  ],
  "web-development": [
    { question: "Why does OptiVir Ads build websites using Next.js instead of standard WordPress templates?", answer: "We build custom Next.js websites because they deliver superior speed, static generation capabilities, mobile-responsive layout options, and robust native SEO performance compared to heavy WordPress themes." },
    { question: "What is your process for designing conversion-optimized landing pages?", answer: "We map out friction-free UX/UI layouts, write persuasive direct-response copy, place clear Call-To-Action indicators, and test page elements to maximize lead generation rates." },
    { question: "How does website page loading speed affect search engine rankings?", answer: "Google uses Core Web Vitals (including loading speed) as a ranking factor. Faster websites keep visitors engaged, reducing bounce rates and directly lifting search engine visibility." },
    { question: "Are your custom Next.js web applications mobile-responsive and accessible?", answer: "Yes, we write layouts that adjust across mobile, tablet, and desktop screens, following modern web accessibility guidelines for semantic HTML and clean styling." },
    { question: "Do you integrate custom APIs and CRM connections into our web pages?", answer: "Yes, we build secure server endpoints, linking your web forms directly with WhatsApp APIs, CRM databases, or email automation software for instant lead processing." }
  ],
  "content-marketing": [
    { question: "How do you research content topics to rank for digital marketing services in Kochi?", answer: "We perform in-depth keyword analysis, investigate competitor link matrices, and check what questions are frequently asked by local businesses to build authority content hubs." },
    { question: "What content formats do you write to capture high-tier customer leads?", answer: "We write localized blog posts, downloadable whitepapers, case study assets, and drip email scripts focused on solving specific business marketing problems." },
    { question: "How do you align content creation with our active sales funnel?", answer: "We write informational content for top-of-funnel search intent, detailed case studies for middle-of-funnel evaluation, and direct CTA assets for bottom-of-funnel conversions." },
    { question: "Do you provide copywriting services for our active ad campaigns?", answer: "Yes, our team writes conversion-focused ad copy, search headlines, and sales hooks for Google Ads, Meta Ads, and video production scripts." },
    { question: "How do you measure the performance of content marketing campaigns?", answer: "We track organic impressions, click volumes, page reading times, and form submissions to measure the ROI generated by our content strategies." }
  ],
  "email-marketing": [
    { question: "What email marketing automation platforms do you configure?", answer: "We configure and optimize Mailchimp, Klaviyo, ActiveCampaign, and regional email sending platforms, tailoring setups to match your operational scale." },
    { question: "How do you build automated email sequence flows for our sales funnel?", answer: "We set up welcome series, cart abandonment reminders, re-engagement campaigns, and transactional drip sequences to guide prospects toward conversions." },
    { question: "What is your approach to email list segmentation?", answer: "We segment lists by customer purchase history, past email activity, geographical details, and sign-up source to deliver highly relevant campaigns." },
    { question: "How do you optimize email campaigns to prevent delivery to spam folders?", answer: "We set up clean SPF/DKIM/DMARC records, clean inactive addresses weekly, write balanced HTML structures, and test subject lines to keep delivery rates high." },
    { question: "How do you analyze email newsletter click and conversion statistics?", answer: "We map clicks with UTM tags to analyze metrics inside Google Analytics, measuring the exact sales contributions of each email broadcast." }
  ],
  "analytics-operations": [
    { question: "Why is GA4 attribution tracking setup important for our campaigns?", answer: "GA4 lets us measure exactly which search terms, locations, and ad creatives drive inquiries, allowing you to allocate your marketing budget to the most profitable channels." },
    { question: "How do you set up server-side tracking to preserve campaign attribution data?", answer: "We configure server containers using Google Tag Manager to route conversion events directly, bypassing browser ad-blockers and keeping attribution metrics accurate." },
    { question: "What dashboards do you build to help us monitor our advertising ROAS?", answer: "We build unified Looker Studio dashboards displaying real-time PPC spend, cost-per-lead, conversion rates, and revenue returns across channels." },
    { question: "Can you audit and clean up our existing Google Tag Manager configurations?", answer: "Yes, we execute GTM audits, removing duplicate tags, optimizing variables, and establishing clean data layers to prevent double-counting conversions." },
    { question: "Do you set up offline conversion tracking for our sales pipeline?", answer: "Yes, we link your CRM database with Google and Meta APIs, sending offline closed-won sales back to ad platforms to train bidding algorithms." }
  ],
  kannur: [
    { question: "Why should businesses in Kannur invest in localized SEO services?", answer: "Localized SEO ensures your business ranks at the top of Google Map Pack results for search intent in Kannur (e.g., 'digital marketing in Kannur'). This drives walk-ins and local leads." },
    { question: "How does OptiVir Ads support local startups and brands in Kannur?", answer: "We build custom local campaigns, managing active Google Ads, local search optimization, and social media management to help Kannur brands capture regional market share." },
    { question: "Can we visit your office in Kannur for a marketing consultation?", answer: "Yes, our team is located in Kannur (Green building, Talap). You can schedule a strategy session to review your digital footprint and plan campaigns." },
    { question: "Do you run print-to-digital campaigns for Kannur businesses?", answer: "Yes, we bridge print and digital media, optimizing QR codes and local search campaigns to capture local traffic from traditional print formats." },
    { question: "What localized keywords do you target for businesses in Kerala?", answer: "We target search queries such as 'best marketing company in Kerala', 'SEO services Kannur', and localized terms to connect you with nearby buyers." }
  ],
  dubai: [
    { question: "How does OptiVir Ads manage high-growth campaigns for Dubai and GCC brands?", answer: "We engineer targeted PPC campaigns, custom Meta ads, and authority SEO to scale e-commerce and enterprise brands across the competitive Dubai and GCC markets." },
    { question: "What is your approach to multi-currency ad bidding in the GCC?", answer: "We structure campaign parameters in AED, QAR, or USD, aligning smart bidding metrics with regional purchase value patterns for peak ROAS." },
    { question: "Do you customize Meta creatives for the diverse Dubai demographics?", answer: "Yes, we produce visual ad hooks in English and Arabic, tailoring copy and visuals to connect with local and expat audiences in the UAE." },
    { question: "How do you scale lead generation for Dubai real estate and B2B services?", answer: "We run high-intent search ads, LinkedIn B2B campaigns, and custom landing page funnels, optimizing targeting for high-net-worth individuals." },
    { question: "Can we coordinate remote campaigns from Dubai with your team?", answer: "Yes, we run synchronized communications via Slack, WhatsApp, and video calls, providing transparent daily reporting for our GCC clients." }
  ],
  "scale-google-ads-roi": [
    { question: "What is the primary danger when scaling Google Ads budgets?", answer: "When scaling PPC budgets too quickly, Google's algorithms expand targeting to lower-intent search queries. This increases cost-per-acquisition (CPA) and dilutes your overall return on investment (ROI)." },
    { question: "What is the 20% budget rule for PPC scaling?", answer: "To prevent resetting Google's smart bidding learning phase, campaign budgets should not be increased by more than 15-20% at a time. This keeps performance stable." },
    { question: "How do negative keyword lists prevent budget waste during scaling?", answer: "Adding negative search parameters daily ensures your ads do not show for informational or low-intent queries as Google expands its targeting search radius." },
    { question: "How does Target CPA adjustment force bid efficiency?", answer: "Gradually lowering your Target CPA constraint forces Google's smart bidding algorithms to prioritize high-converting leads, maintaining efficiency as spend increases." },
    { question: "Why is offline conversion tracking critical for scaling e-commerce ads?", answer: "Mapping offline sales back to Google training data ensures the algorithm bids on keywords that close revenue, rather than just driving form sign-ups." }
  ],
  "local-seo-domination-blueprint": [
    { question: "What is the most common mistake made in Local SEO setups?", answer: "Many businesses set up a basic Google Business Profile but fail to link nested LocalBusiness schema, maintain active updates, or build local link velocity." },
    { question: "How does LocalBusiness schema benefit regional rankings?", answer: "Schema provides search crawlers with explicit structured data regarding your coordinates, operating hours, local reviews, and service regions, boosting visibility." },
    { question: "How do neighborhood-level landing pages capture local intent?", answer: "Creating landing pages for specific neighborhoods and suburbs increases local relevance for Google's algorithm, letting you capture traffic for localized queries." },
    { question: "How does review velocity affect Google Map Pack ranks?", answer: "Google ranks profiles with a steady stream of new reviews higher. Establishing automated post-service review requests builds ranking authority." },
    { question: "What are local citations and how do they build organic trust?", answer: "Local citations are listings of your name, address, and phone number (NAP) on local directories. Consistency across these directories signals operational legitimacy to Google." }
  ],
  "meta-ads-vs-google-ads": [
    { question: "When should a business prioritize Google Search Ads over Meta Ads?", answer: "Google Ads should be prioritized when capturing active commercial search intent (e.g., 'hire SEO agency'). These users have immediate problems and are ready to buy." },
    { question: "When are Meta Ads superior to Google PPC campaigns?", answer: "Meta Ads (Facebook/Instagram) are superior for visually appealing products or when introducing new solutions to market niches that aren't actively searching." },
    { question: "How can businesses run a hybrid Google and Meta marketing funnel?", answer: "A hybrid funnel uses Google Ads to capture searchers at the bottom of the funnel, and Meta Ads to retarget them with social proof to close sales." },
    { question: "Why do Meta Ads suffer from creative fatigue faster than Google Ads?", answer: "Social feeds move fast. Audiences get tired of seeing the same visual ad hooks. Regular graphic and video creative updates are required to maintain ROAS." },
    { question: "How do you budget across Google Search and Meta Ads?", answer: "We analyze acquisition cost data across platforms, allocating budget dynamically to channels displaying the highest return metrics." }
  ],
  branding: [
    { question: "What is a corporate brand guidelines book?", answer: "A brand guidelines book is a comprehensive manual defining your brand's visual identity, including color palettes, logo variations, typography hierarchies, layout templates, and tone-of-voice directives to maintain consistency." },
    { question: "Why should we invest in professional corporate identity design?", answer: "A professional corporate identity establishes instant trust, commands higher pricing leverage, differentiates your business from competitors, and builds long-term brand equity in the minds of consumers." },
    { question: "How long does a branding and corporate identity project take?", answer: "A typical corporate branding engagement takes 4 to 6 weeks, covering research, conceptual layout, logo design, feedback cycles, and finalized style guide delivery." },
    { question: "Do you design trademarks and stationery materials?", answer: "Yes, we design comprehensive brand collateral including business cards, letterheads, email signatures, packaging layouts, and social media templates optimized for print and digital environments." },
    { question: "What is a brand positioning framework?", answer: "A brand positioning framework defines your unique value proposition, target demographic mapping, core elevator pitch, and tone-of-voice guidelines that drive all advertising and marketing copy." }
  ]
};

// Rich, high-quality mock blog posts
const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How to Scale Google Ads Campaigns Without Decreasing ROI",
    slug: "scale-google-ads-roi",
    excerpt: "Scaling PPC campaigns often leads to a drop in return on ad spend (ROAS). Learn our engineered framework for scaling spend while maintaining or improving lead quality.",
    date: "July 12, 2026",
    author: "OptiVir Growth Team",
    featuredImage: "/images/blog-google-ads.png",
    metaTitle: "Scaling Google Ads: Keep ROAS High | OptiVir Ads",
    metaDescription: "Scaling Google Ads spend doesn't have to dilute your ROI. Discover how to scale budgets while filtering low-quality intent and driving high-converting leads.",
    content: `
      <p>Every digital marketer faces a common hurdle: you've built a Google Ads campaign that generates a fantastic return on investment, but as soon as you increase the budget, your cost-per-acquisition (CPA) shoots up and your ROI plummets.</p>
      
      <h2>Why ROI Drops When Scaling</h2>
      <p>When you scale a PPC campaign, Google's algorithms try to find more conversions by bidding on broader match terms, wider audiences, and lower-intent queries. Without proper guardrails, this leads to budget waste on clicks that never convert. This is why standard budget scaling fails.</p>

      <h2>The Precision-Scaling Framework</h2>
      <p>At OptiVir, we counter this dilution through a strict four-step framework:</p>
      <ul>
        <li><strong>Negative Keyword Saturation:</strong> Before scaling, review your search terms report and add negatives relentlessly. Ensure your ads never fire on informational or low-intent queries.</li>
        <li><strong>Staged Budget Increases:</strong> Never increase a campaign budget by more than 20% at a time. Large jumps reset the smart bidding learning phase, causing volatile performance.</li>
        <li><strong>Target CPA (tCPA) Micro-adjustments:</strong> Instead of just increasing budget, gradually lower your target CPA constraint to force the algorithm to bid only on higher-probability conversions.</li>
        <li><strong>Value-Based Bidding:</strong> Integrate offline conversion tracking so Google bids on the leads that actually close and generate revenue, not just simple contact form submissions.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Precision advertising is about buying the right clicks, not the most clicks. By implementing tight negative keyword guardrails and using value-based bidding, you can scale your marketing budget predictably while keeping your bottom-line ROI secure.</p>
    `
  },
  {
    id: 2,
    title: "The Blueprint for Local SEO Domination: 5 Tactics for Local Supremacy",
    slug: "local-seo-domination-blueprint",
    excerpt: "Dominating local search results requires more than just a basic Google Business Profile. Discover the five advanced strategies to capture local market share and drive foot traffic.",
    date: "July 05, 2026",
    author: "OptiVir SEO Specialists",
    featuredImage: "/images/blog-local-seo.png",
    metaTitle: "Local SEO Domination: 5 Advanced Tactics | OptiVir Ads",
    metaDescription: "Tired of losing local customers to competitors? Here is our engineered blueprint to command organic local search authority and drive qualified store traffic.",
    content: `
      <p>For service businesses and brick-and-mortar brands, local search is the single most valuable acquisition channel. Over 46% of all Google searches have local intent. If you aren't visible at the top of the 'Map Pack', you're handing market share to your competitors.</p>
      
      <h2>1. Hyper-Localized Schema Markup</h2>
      <p>Standard schema is no longer enough. To stand out, implement nested LocalBusiness schema containing geo-coordinates, specific service areas, and localized review markup. This provides search engines with explicit structured data regarding your exact operating location.</p>

      <h2>2. Neighborhood-Level Content Architecture</h2>
      <p>Don't just target major cities. Create dedicated landing pages for specific neighborhoods and suburbs. Integrate local landmarks, transit details, and localized testimonials to establish high contextual relevance for Google's local algorithm.</p>

      <h2>3. The Velocity & Sentiment Velocity Loop</h2>
      <p>Reviews are a primary ranking factor. Focus on review velocity (how frequently you get reviews) and review keywords. Establish an automated system that texts or emails clients immediately post-service, encouraging them to mention specific services and locations in their reviews.</p>

      <h2>4. Dynamic Google Business Profile Updates</h2>
      <p>Treat your Google Business Profile (GBP) like a social feed. Post weekly updates, add new high-resolution geotagged images, and proactively answer questions in the Q&A section. Active profiles signal to Google that your business is operating and highly engaged with consumers.</p>

      <h2>5. Hyper-Local Citations and Niche Link Building</h2>
      <p>While global backlinks are great, local backlinks hold massive weight for local queries. Secure placements on local business directories, community blogs, local chamber of commerce directories, and sponsor regional athletic teams or events to build localized authority.</p>
    `
  },
  {
    id: 3,
    title: "Meta Ads vs. Google Ads: Choosing the Right Growth Engine",
    slug: "meta-ads-vs-google-ads",
    excerpt: "Should your business prioritize search intent or visual disruption? We break down the differences and help you allocate your ad spend for maximum growth.",
    date: "June 28, 2026",
    author: "OptiVir Acquisition Team",
    featuredImage: "/images/blog-meta-vs-google.png",
    metaTitle: "Meta Ads vs Google Ads: Which is Best? | OptiVir Ads",
    metaDescription: "Struggling to allocate your digital marketing budget? Read our deep dive into the strengths of Meta Ads vs. Google Ads, and learn how to construct a balanced marketing engine.",
    content: `
      <p>One of the most frequent questions we receive from ambitious founders is: <em>'Where should I invest my ad budget first—Google Ads or Meta Ads?'</em></p>
      <p>The answer depends entirely on your product, business model, and where your audience sits in the buying journey.</p>
      
      <h2>Google Ads: Capturing Active Intent</h2>
      <p>Google Ads is an intent-based channel. When someone searches for 'emergency plumber near me' or 'enterprise CRM software', they have an active problem and are looking for a solution. They are ready to buy.</p>
      <ul>
        <li><strong>Pros:</strong> Exceptionally high conversion rates; targets high-intent leads at the bottom of the funnel.</li>
        <li><strong>Cons:</strong> High cost-per-click (CPC) in competitive industries; search volume is capped by how many people are actively searching.</li>
      </ul>

      <h2>Meta Ads: Driving Visual Disruption & Demand</h2>
      <p>Meta Ads (Facebook and Instagram) is an audience-based channel. Users are not searching for solutions; they are consuming content. Your ad must disrupt their feed, capture their attention, and generate desire for a product they might not have known existed.</p>
      <ul>
        <li><strong>Pros:</strong> Vast audience reach; highly visual storytelling format; lower cost-per-click; excellent for generating brand awareness and interest.</li>
        <li><strong>Cons:</strong> Lower immediate purchase intent; requires continuous creative testing to prevent ad fatigue.</li>
      </ul>

      <h2>The Hybrid Growth Engine</h2>
      <p>For most mid-to-large scale businesses, the ultimate setup is not an 'either-or' choice, but a collaborative framework. Use Google Search to capture high-intent buyers, Meta Ads to introduce the brand to new target demographics, and Meta retargeting to nurture prospects who visited your site via Google but didn't immediately convert.</p>
    `
  }
];

const WP_API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Helper to fetch from WordPress REST API or fallback to mock data
async function wpFetch<T>(endpoint: string, fallback: T): Promise<T> {
  if (!WP_API_URL) {
    return fallback;
  }
  
  try {
    let url = "";
    const baseUrl = WP_API_URL.replace(/\/$/, "");
    const cleanEndpoint = endpoint.replace(/^\//, "");
    
    if (baseUrl.includes("/wp-json")) {
      if (baseUrl.endsWith("/wp/v2") && cleanEndpoint.startsWith("wp/v2/")) {
        url = `${baseUrl}/${cleanEndpoint.substring(6)}`;
      } else {
        url = `${baseUrl}/${cleanEndpoint}`;
      }
    } else {
      url = `${baseUrl}/wp-json/${cleanEndpoint}`;
    }
    
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: ["wordpress"] }, // Cache for 1 hour
    });
    
    if (!res.ok) {
      console.warn(`WordPress API returned status ${res.status} for ${endpoint} (URL: ${url}). Falling back to mock data.`);
      return fallback;
    }
    
    return await res.json();
  } catch (error) {
    console.error(`Error fetching from WordPress API for ${endpoint}:`, error);
    return fallback;
  }
}

/**
 * Fetch SEO metadata for a page. If WordPress backend provides this info, it parses it,
 * otherwise returns optimized local defaults.
 */
export async function getPageMetadata(pageKey: string): Promise<PageMetadata> {
  const fallback = MOCK_METADATA[pageKey] || MOCK_METADATA.home;
  
  if (!WP_API_URL) {
    return fallback;
  }

  // Look for page metadata from the WordPress pages endpoint (by slug)
  try {
    const pages = await wpFetch<any[]>(`wp/v2/pages?slug=${pageKey}`, []);
    if (pages && pages.length > 0) {
      const page = pages[0];
      
      // Attempt to extract title/desc from Yoast SEO fields, RankMath, or default fields
      const title = page.yoast_head_json?.title || 
                    page.title?.rendered || 
                    fallback.title;
      const description = page.yoast_head_json?.description || 
                          page.excerpt?.rendered?.replace(/<[^>]*>/g, "") || 
                          fallback.description;
      
      return { title, description };
    }
  } catch (err) {
    console.warn(`Error resolving page metadata from WordPress for ${pageKey}. Using fallback.`);
  }

  return fallback;
}

const LOCAL_IMAGES = [
  "/images/logo.png",
  "/images/office_space.png",
  "/images/blog-google-ads.png",
  "/images/blog-local-seo.png",
  "/images/blog-meta-vs-google.png"
];

function localImageExists(imagePath: string | undefined): boolean {
  if (!imagePath) return false;
  return LOCAL_IMAGES.includes(imagePath);
}

// Fetch a fallback media item from WordPress if local assets are missing
async function getFallbackWordPressImage(postId: number): Promise<string | undefined> {
  if (!WP_API_URL) return undefined;
  try {
    const media = await wpFetch<any[]>("wp/v2/media?per_page=10", []);
    if (media && media.length > 0) {
      const index = postId % media.length;
      return media[index].source_url;
    }
  } catch (err) {
    console.warn("Failed to fetch fallback media from WordPress:", err);
  }
  return undefined;
}

/**
 * Fetch all blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!WP_API_URL) {
    return MOCK_POSTS;
  }

  try {
    const wpPosts = await wpFetch<any[]>("wp/v2/posts?_embed", []);
    if (!wpPosts || wpPosts.length === 0) {
      const resolvedMock = await Promise.all(MOCK_POSTS.map(async (post) => {
        if (post.featuredImage && !localImageExists(post.featuredImage)) {
          const fallback = await getFallbackWordPressImage(post.id);
          if (fallback) {
            return { ...post, featuredImage: fallback };
          }
        }
        return post;
      }));
      return resolvedMock;
    }

    const posts = await Promise.all(wpPosts.map(async (post) => {
      // Find featured image if embedded
      let featuredImage = undefined;
      const embeddedMedia = post._embedded?.["wp:featuredmedia"];
      if (embeddedMedia && embeddedMedia.length > 0) {
        featuredImage = embeddedMedia[0].source_url;
      }

      // If no image is provided, or if the image is a local path that is missing, obtain from WP backend
      if (!featuredImage || (featuredImage.startsWith("/") && !localImageExists(featuredImage))) {
        const fallback = await getFallbackWordPressImage(post.id);
        if (fallback) {
          featuredImage = fallback;
        }
      }

      // Find author name if embedded
      let author = "OptiVir Team";
      const embeddedAuthor = post._embedded?.["author"];
      if (embeddedAuthor && embeddedAuthor.length > 0) {
        author = embeddedAuthor[0].name;
      }

      return {
        id: post.id,
        title: post.title?.rendered || "Untitled Post",
        slug: post.slug,
        excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim() || "",
        content: post.content?.rendered || "",
        date: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author,
        featuredImage,
        metaTitle: post.yoast_head_json?.title || post.title?.rendered,
        metaDescription: post.yoast_head_json?.description || post.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim(),
      };
    }));

    return posts;
  } catch (error) {
    console.error("Failed to map blog posts from WordPress. Using mock posts instead.", error);
    return MOCK_POSTS;
  }
}

/**
 * Fetch a single blog post by its slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!WP_API_URL) {
    return MOCK_POSTS.find((p) => p.slug === slug) || null;
  }

  try {
    const wpPosts = await wpFetch<any[]>(`wp/v2/posts?slug=${slug}&_embed`, []);
    if (!wpPosts || wpPosts.length === 0) {
      const mockPost = MOCK_POSTS.find((p) => p.slug === slug);
      if (mockPost) {
        if (mockPost.featuredImage && !localImageExists(mockPost.featuredImage)) {
          const fallback = await getFallbackWordPressImage(mockPost.id);
          if (fallback) {
            return { ...mockPost, featuredImage: fallback };
          }
        }
        return mockPost;
      }
      return null;
    }

    const post = wpPosts[0];
    
    let featuredImage = undefined;
    const embeddedMedia = post._embedded?.["wp:featuredmedia"];
    if (embeddedMedia && embeddedMedia.length > 0) {
      featuredImage = embeddedMedia[0].source_url;
    }

    if (!featuredImage || (featuredImage.startsWith("/") && !localImageExists(featuredImage))) {
      const fallback = await getFallbackWordPressImage(post.id);
      if (fallback) {
        featuredImage = fallback;
      }
    }

    let author = "OptiVir Team";
    const embeddedAuthor = post._embedded?.["author"];
    if (embeddedAuthor && embeddedAuthor.length > 0) {
      author = embeddedAuthor[0].name;
    }

    return {
      id: post.id,
      title: post.title?.rendered || "Untitled Post",
      slug: post.slug,
      excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim() || "",
      content: post.content?.rendered || "",
      date: new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      author,
      featuredImage,
      metaTitle: post.yoast_head_json?.title || post.title?.rendered,
      metaDescription: post.yoast_head_json?.description || post.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim(),
    };
  } catch (error) {
    console.error(`Error resolving blog post by slug: ${slug}. Using mock fallback.`, error);
    const mockPost = MOCK_POSTS.find((p) => p.slug === slug) || null;
    if (mockPost && mockPost.featuredImage && !localImageExists(mockPost.featuredImage)) {
      const fallback = await getFallbackWordPressImage(mockPost.id);
      if (fallback) {
        return { ...mockPost, featuredImage: fallback };
      }
    }
    return mockPost;
  }
}

export interface ClientLogo {
  id: number;
  name: string;
  logoUrl: string;
}

export const MOCK_CLIENTS: ClientLogo[] = [
  { id: 101, name: "Nexus", logoUrl: "" },
  { id: 102, name: "Vertex", logoUrl: "" },
  { id: 103, name: "Aero", logoUrl: "" },
  { id: 104, name: "Pulse", logoUrl: "" },
  { id: 105, name: "Zenith", logoUrl: "" },
  { id: 106, name: "Apex", logoUrl: "" },
];

export async function getClientLogos(): Promise<ClientLogo[]> {
  if (!WP_API_URL) {
    return MOCK_CLIENTS;
  }

  // 1. Try 'brands' custom post type
  try {
    const wpBrands = await wpFetch<any[]>("wp/v2/brands?_embed", []);
    if (wpBrands && wpBrands.length > 0) {
      return wpBrands.map((brand) => {
        let logoUrl = "";
        const embeddedMedia = brand._embedded?.["wp:featuredmedia"];
        if (embeddedMedia && embeddedMedia.length > 0) {
          logoUrl = embeddedMedia[0].source_url;
        }
        return {
          id: brand.id,
          name: brand.title?.rendered || "Brand",
          logoUrl
        };
      });
    }
  } catch (err) {
    console.warn("Failed to fetch custom 'brands' post type from WordPress:", err);
  }

  // 2. Try 'clients' custom post type
  try {
    const wpClients = await wpFetch<any[]>("wp/v2/clients?_embed", []);
    if (wpClients && wpClients.length > 0) {
      return wpClients.map((client) => {
        let logoUrl = "";
        const embeddedMedia = client._embedded?.["wp:featuredmedia"];
        if (embeddedMedia && embeddedMedia.length > 0) {
          logoUrl = embeddedMedia[0].source_url;
        }
        return {
          id: client.id,
          name: client.title?.rendered || "Client",
          logoUrl
        };
      });
    }
  } catch (err) {
    console.warn("Failed to fetch custom 'clients' post type from WordPress:", err);
  }

  // 3. Try standard posts under category 'brands'
  try {
    const wpPosts = await wpFetch<any[]>("wp/v2/posts?category_name=brands&_embed", []);
    if (wpPosts && wpPosts.length > 0) {
      return wpPosts.map((post) => {
        let logoUrl = "";
        const embeddedMedia = post._embedded?.["wp:featuredmedia"];
        if (embeddedMedia && embeddedMedia.length > 0) {
          logoUrl = embeddedMedia[0].source_url;
        }
        return {
          id: post.id,
          name: post.title?.rendered || "Brand",
          logoUrl
        };
      });
    }
  } catch (err) {
    console.warn("Failed to fetch standard posts under 'brands' category from WordPress:", err);
  }

  // 4. Try standard posts under category 'clients'
  try {
    const wpPosts = await wpFetch<any[]>("wp/v2/posts?category_name=clients&_embed", []);
    if (wpPosts && wpPosts.length > 0) {
      return wpPosts.map((post) => {
        let logoUrl = "";
        const embeddedMedia = post._embedded?.["wp:featuredmedia"];
        if (embeddedMedia && embeddedMedia.length > 0) {
          logoUrl = embeddedMedia[0].source_url;
        }
        return {
          id: post.id,
          name: post.title?.rendered || "Client",
          logoUrl
        };
      });
    }
  } catch (err) {
    console.warn("Failed to fetch standard posts under 'clients' category from WordPress:", err);
  }

  return MOCK_CLIENTS;
}

export async function getPageFaqs(pageKey: string): Promise<FaqItem[]> {
  const fallbackFaqs = MOCK_FAQS[pageKey] || MOCK_FAQS.home;

  if (!WP_API_URL) {
    return fallbackFaqs;
  }

  try {
    const pages = await wpFetch<any[]>(`wp/v2/pages?slug=${pageKey}`, []);
    if (pages && pages.length > 0) {
      const page = pages[0];
      
      // 1. Try ACF (Advanced Custom Fields)
      if (page.acf?.faqs && Array.isArray(page.acf.faqs)) {
        return page.acf.faqs.map((item: any) => ({
          question: item.question || item.title || "",
          answer: item.answer || item.content || ""
        }));
      }

      if (page.acf?.faq && Array.isArray(page.acf.faq)) {
        return page.acf.faq.map((item: any) => ({
          question: item.question || item.title || "",
          answer: item.answer || item.content || ""
        }));
      }

      // 2. Try page metadata custom fields
      if (page.metadata?.faqs && Array.isArray(page.metadata.faqs)) {
        return page.metadata.faqs.map((item: any) => ({
          question: item.question || "",
          answer: item.answer || ""
        }));
      }
      
      // 3. Try Yoast SEO Schema Graph
      if (page.yoast_head_json?.schema?.['@graph']) {
        const graph = page.yoast_head_json.schema['@graph'];
        const faqPage = graph.find((node: any) => node['@type'] === 'FAQPage');
        
        if (faqPage && faqPage.mainEntity) {
          return faqPage.mainEntity.map((entity: any) => ({
            question: entity.name,
            answer: entity.acceptedAnswer?.text || "" // Retain formatting for rich text answers
          }));
        }
      }
    }
  } catch (err) {
    console.warn(`Error resolving FAQs from WordPress for ${pageKey}. Using fallback.`);
  }

  return fallbackFaqs;
}
