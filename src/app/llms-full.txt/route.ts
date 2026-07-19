import { getBlogPosts } from '@/lib/wordpress';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';
  
  let blogContentsMarkdown = '';
  try {
    const posts = await getBlogPosts();
    if (posts && posts.length > 0) {
      blogContentsMarkdown = '\n## Blog Content Archive\n' + posts.map(post => {
        // Strip HTML tags from content for clean markdown presentation
        const cleanContent = post.content.replace(/<[^>]*>/g, '').trim();
        return `### ${post.title}\nURL: ${baseUrl}/blog/${post.slug}\nPublished: ${post.date}\nAuthor: ${post.author}\n\n${cleanContent}\n\n---`;
      }).join('\n\n');
    }
  } catch (err) {
    console.error('Error compiling blog posts for llms-full.txt:', err);
  }

  const content = `# OptiVir Ads - Full Context

Complete system context, documentation, services, and blog archive for OptiVir Ads.

## Services Documentation
- **Local SEO Supremacy**: Structured schemas, local citations, Map Pack optimization.
- **High-Conversion Paid Traffic**: Structured ad campaign parameters, negative keywords filters, conversion-driven bidding.
- **Custom React/Next.js Dev**: Fast loading speeds, dynamic layouts, fully responsive systems.

## Contact Information
- **Phone**: +91 9995037109
- **Email**: services@optivirads.com
- **Locations**: Point of presence in Kannur, Kerala, India (serving UAE, Qatar, GCC and worldwide).
${blogContentsMarkdown}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
