import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/wordpress';
import { LOCATIONS } from '@/lib/locations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.optivirads.com';

  // Static core routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/free-marketing-audit',
    '/free-tools/roas-calculator',
    '/services/analytics-operations',
    '/services/branding',
    '/services/content-marketing',
    '/services/email-marketing',
    '/services/google-advertising',
    '/services/meta-advertising',
    '/services/niche-platform-advertising',
    '/services/search-engine-optimization',
    '/services/social-media-management',
    '/services/web-development',
  ];

  const locationRoutes = Object.keys(LOCATIONS).map((city) => `/locations/${city}`);
  const allStaticRoutes = [...staticRoutes, ...locationRoutes];

  const staticSitemap = allStaticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/locations') ? 0.7 : 0.8,
  }));

  // Dynamic routes from WordPress Blog database
  try {
    const posts = await getBlogPosts();
    const blogSitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
    return [...staticSitemap, ...blogSitemap];
  } catch (error) {
    console.error('Error generating dynamic XML sitemap:', error);
    return staticSitemap;
  }
}
