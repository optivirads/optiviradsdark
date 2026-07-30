export interface LocationData {
  city: string;
  slug: string;
  region: string;
  country: string;
  heroHeading: string;
  heroSubheading: string;
  metaTitle: string;
  metaDescription: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  primaryServiceFocus: string;
  serviceDescription: string;
}

export const LOCATIONS: Record<string, LocationData> = {
  kannur: {
    city: "Kannur",
    slug: "kannur",
    region: "Kerala",
    country: "India",
    heroHeading: "Elite Digital Marketing & SEO Agency in Kannur",
    heroSubheading: "Driving local dominance and global scale for businesses in Kerala. We build predictable acquisition engines using advanced SEO, Meta Ads, and Google PPC.",
    metaTitle: "Best Digital Marketing & SEO Agency in Kannur | OptiVir Ads",
    metaDescription: "OptiVir Ads is the top-rated digital marketing agency in Kannur, Kerala. We specialize in local SEO, Google Ads, and Meta advertising for high-growth businesses.",
    address: {
      streetAddress: "Green Building, Talap",
      addressLocality: "Kannur",
      addressRegion: "Kerala",
      postalCode: "670002",
      addressCountry: "IN"
    },
    geo: {
      latitude: 11.8745,
      longitude: 75.3704
    },
    telephone: "+91 9995037109",
    primaryServiceFocus: "Local SEO & Performance Marketing",
    serviceDescription: "For businesses in Kannur and across Kerala, local search visibility is critical. Our Kannur-based growth teams engineer localized SEO strategies that push your brand to the top of the Google Map Pack, combined with highly-targeted Meta campaigns that engage your specific regional demographics."
  },
  dubai: {
    city: "Dubai",
    slug: "dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    heroHeading: "Precision Performance Marketing Agency in Dubai",
    heroSubheading: "Scaling enterprise and e-commerce brands across the GCC with data-driven Google Ads, high-converting Meta campaigns, and Authority SEO.",
    metaTitle: "Premium Digital Marketing & Performance Agency in Dubai | OptiVir Ads",
    metaDescription: "Scale your GCC business with OptiVir Ads. We are a leading digital marketing agency in Dubai specializing in high-ROAS PPC, Meta Ads, and Enterprise SEO.",
    address: {
      streetAddress: "Business Bay",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE"
    },
    geo: {
      latitude: 25.1856,
      longitude: 55.2764
    },
    telephone: "+91 9995037109",
    primaryServiceFocus: "Enterprise Google Ads & Lead Generation",
    serviceDescription: "The GCC market requires aggressive, high-converting strategies. Our Dubai-focused campaigns prioritize aggressive Google Search intent capture and hyper-targeted Meta advertising designed to yield maximum Return on Ad Spend (ROAS) in a highly competitive regional market."
  }
};
