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
