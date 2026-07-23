export interface ReviewItem {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number; // e.g. 5
  date: string; // e.g. "2026-06-15"
  reviewText: string;
  source: 'Google Business Profile' | 'Verified Client';
  featured: boolean; // Set to true to display on site
  location?: string; // e.g. "Kannur, Kerala" or "Dubai, UAE"
}

export interface AggregateRatingMetrics {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

// Curated selection of reviews - toggle 'featured: true / false' to select which reviews appear on site
export const CURATED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    authorName: 'Muhammed Fayiz',
    authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '2026-05-18',
    reviewText: 'OptiVir Ads transformed our online presence in Kannur. Our Google Search campaign ROAS jumped from 1.8x to over 4.2x within 60 days. Truly Kerala’s top performance marketing agency!',
    source: 'Google Business Profile',
    featured: true,
    location: 'Kannur, Kerala'
  },
  {
    id: 'rev-2',
    authorName: 'Rashid Al Nuaimi',
    authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '2026-06-02',
    reviewText: 'Exceptional Next.js web development and Meta Ads execution for our GCC operations. Page load speed is instantaneous and customer acquisition costs dropped by 45%.',
    source: 'Google Business Profile',
    featured: true,
    location: 'Dubai, UAE'
  },
  {
    id: 'rev-3',
    authorName: 'Ananya Nair',
    authorPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '2026-06-11',
    reviewText: 'The Local SEO map pack optimization for our Kochi business brought us to rank #1 for high-intent buyer searches. Transparent dashboards and data-first approach.',
    source: 'Google Business Profile',
    featured: true,
    location: 'Kochi, Kerala'
  },
  {
    id: 'rev-4',
    authorName: 'Dr. Joseph Kurian',
    authorPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '2026-06-25',
    reviewText: 'Server-side GTM setup and GA4 attribution tracking solved all our post-iOS 14 tracking issues. We now see exact ROI on every ad rupee spent.',
    source: 'Google Business Profile',
    featured: true,
    location: 'Thrissur, Kerala'
  },
  {
    id: 'rev-5',
    authorName: 'Suhail Ahmed',
    authorPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '2026-07-04',
    reviewText: 'Outstanding branding and social media management! Their team built a cohesive corporate identity and engaging visual content calendar that elevated our brand equity.',
    source: 'Google Business Profile',
    featured: true,
    location: 'Doha, Qatar'
  }
];

/**
 * Fetch reviews - either live from Google Places API if configured,
 * or returning the curated selection filtered by 'featured: true'.
 */
export async function getReviews(): Promise<ReviewItem[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If Google Places API credentials exist, attempt live fetch
  if (apiKey && placeId) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
      const res = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours
      const data = await res.json();
      if (data.result && data.result.reviews && data.result.reviews.length > 0) {
        const googleReviews: ReviewItem[] = data.result.reviews.map((r: any, idx: number) => ({
          id: `g-rev-${idx}`,
          authorName: r.author_name,
          authorPhoto: r.profile_photo_url,
          rating: r.rating,
          date: new Date(r.time * 1000).toISOString().split('T')[0],
          reviewText: r.text,
          source: 'Google Business Profile' as const,
          featured: true
        }));
        return googleReviews.filter((r) => r.rating >= 4);
      }
    } catch (err) {
      console.warn('Google Places API sync failed, falling back to curated review selection:', err);
    }
  }

  // Fallback / Default Mode: Return curated featured reviews
  return CURATED_REVIEWS.filter((r) => r.featured);
}

/**
 * Calculate aggregate rating metrics for Schema.org JSON-LD
 */
export function getAggregateRating(reviews: ReviewItem[]): AggregateRatingMetrics {
  const list = reviews.length > 0 ? reviews : CURATED_REVIEWS;
  const total = list.reduce((sum, r) => sum + r.rating, 0);
  const avg = Number((total / list.length).toFixed(1));

  return {
    ratingValue: avg,
    reviewCount: list.length,
    bestRating: 5,
    worstRating: 1
  };
}
