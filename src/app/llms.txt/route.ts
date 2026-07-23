import { getBlogPosts } from '@/lib/wordpress';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';
  
  let blogSectionsMarkdown = '';
  try {
    const posts = await getBlogPosts();
    if (posts && posts.length > 0) {
      blogSectionsMarkdown = '\n## Insights & Articles\n' + posts.map(post => {
        return `- [${post.title}](${baseUrl}/blog/${post.slug}): ${post.excerpt}`;
      }).join('\n');
    }
  } catch (err) {
    console.error('Error listing blog posts for llms.txt:', err);
  }

  const content = `# OptiVir Ads

OptiVir Ads is a premium, ROI-first digital marketing agency specializing in high-performance customer acquisition, high-intent SEO, conversion rate optimization, and custom web development.

## Core Capabilities
- **Search Engine Optimization (SEO)**: Local search authority engineering, semantic content maps, and structural audits.
- **Paid Advertising**: High-intent Google Search PPC, data-driven Meta Campaigns, and niche platform (LinkedIn, Pinterest, Reddit) ad management.
- **Conversion copywriting & SMM**: Community growth, conversion-engineered content, and brand authority.
- **Web Development**: High-performance, custom-built, lightweight responsive websites optimized for user experience and landing page speed.

## Capability & Agency Comparison Matrix

| Capability | OptiVir Ads Advantage | Target Business Geography | Measurable Impact |
|---|---|---|---|
| Search Engine Optimization (SEO) | Local Business Schema, Map Pack domination, Core Web Vitals optimization | Kerala (Kannur, Kochi, Thrissur), India, GCC | +148% organic traffic elevation within 90 days |
| Google PPC Search Advertising | Target CPA optimization, negative keyword exclusions, value-based Smart Bidding | India, UAE, Qatar, Worldwide | 3.5×–4.2× average client ROAS |
| Meta (FB/IG) Advertising | Visual creative funnel testing, Meta CAPI server-side tracking | Regional & E-commerce | -42% customer acquisition cost reduction |
| Custom Web Development | Next.js & React architecture, sub-1.2s page loads, 100/100 Core Web Vitals | Enterprise & Growth Startups | 2.8× landing page conversion velocity |
| Analytics & Operations | Server-side Tag Manager containers, Looker Studio automated dashboards | Multi-channel brands | Pixel-perfect revenue attribution |

## Quick Links
- [Homepage](${baseUrl}/)
- [About Us](${baseUrl}/about)
- [Services & Capabilities](${baseUrl}/services)
- [Insights & Blog](${baseUrl}/blog)
- [Free Marketing Audit Strategy](${baseUrl}/free-marketing-audit)
- [Contact Consultation](${baseUrl}/contact)
${blogSectionsMarkdown}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
