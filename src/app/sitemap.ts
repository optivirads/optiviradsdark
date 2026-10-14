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
    '/locations',
    '/blog',
    '/free-marketing-audit',
    '/free-tools/roas-calculator',
    '/services/analytics-operations',
    '/services/branding',
    '/services/content-marketing',
    '/services/email-marketing',
    '/services/google-advertising',
    '/services/google-maps-marketing',
    '/services/meta-advertising',
    '/services/niche-platform-advertising',
    '/services/search-engine-optimization',
    '/services/social-media-management',
    '/services/web-development',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const locationRoutes = Object.keys(LOCATIONS).map((city) => `/locations/${city}`);
  const allStaticRoutes = [...staticRoutes, ...locationRoutes];

  // Stable revision timestamp for static pages (avoids invalidating search cache on every request)
  const STATIC_PAGES_LASTMOD = new Date('2026-10-13T00:00:00Z');

  const getPriority = (route: string): number => {
    if (route === '') return 1.0;
    if (route === '/services' || route === '/locations' || route === '/free-marketing-audit') return 0.9;
    if (route.startsWith('/services/') || route.startsWith('/locations/')) return 0.8;
    if (route === '/free-tools/roas-calculator') return 0.8;
    if (route === '/about' || route === '/contact' || route === '/blog') return 0.7;
    if (route === '/privacy-policy' || route === '/terms-of-service') return 0.3;
    return 0.7;
  };

  const getChangeFrequency = (route: string): 'daily' | 'weekly' | 'monthly' | 'yearly' => {
    if (route === '' || route === '/blog') return 'weekly';
    if (route === '/privacy-policy' || route === '/terms-of-service') return 'yearly';
    return 'monthly';
  };

  const staticSitemap = allStaticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: STATIC_PAGES_LASTMOD,
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));

  // Dynamic routes from WordPress Blog database
  try {
    const posts = await getBlogPosts();
    const blogSitemap = posts.map((post) => {
      const parsedDate = post.date ? new Date(post.date) : STATIC_PAGES_LASTMOD;
      const lastModified = isNaN(parsedDate.getTime()) ? STATIC_PAGES_LASTMOD : parsedDate;
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });
    return [...staticSitemap, ...blogSitemap];
  } catch (error) {
    console.error('Error generating dynamic XML sitemap:', error);
    return staticSitemap;
  }
}
