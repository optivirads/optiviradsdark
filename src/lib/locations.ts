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
  calicut: {
    city: "Calicut",
    slug: "calicut",
    region: "Kerala",
    country: "India",
    heroHeading: "Premier Digital Marketing & SEO Agency in Calicut",
    heroSubheading: "Driving market dominance and high-ROI customer acquisition for ambitious businesses in Kozhikode and across Malabar. Local Map Pack SEO, high-intent Google Ads, and Meta advertising.",
    metaTitle: "Best Digital Marketing & SEO Agency in Calicut | OptiVir Ads",
    metaDescription: "OptiVir Ads is a premier digital marketing agency in Calicut (Kozhikode). We engineer high-ROAS Google Ads, local SEO, and Meta advertising for scaling businesses.",
    address: {
      streetAddress: "Mavoor Road",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673004",
      addressCountry: "IN"
    },
    geo: {
      latitude: 11.2588,
      longitude: 75.7804
    },
    telephone: "+91 9995037109",
    primaryServiceFocus: "Local Map Pack SEO & Retail Lead Generation",
    serviceDescription: "Kozhikode is Malabar's trade and commercial epicentre. We build localized search engine dominance and precision-targeted paid media funnels that capture high-intent commercial buyers across Calicut and Kerala."
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
  },
  "ras-al-khaimah": {
    city: "Ras Al Khaimah",
    slug: "ras-al-khaimah",
    region: "Ras Al Khaimah",
    country: "United Arab Emirates",
    heroHeading: "Performance Digital Marketing Agency in Ras Al Khaimah",
    heroSubheading: "Accelerating business growth for industrial, hospitality, and free-zone enterprises in RAK with targeted Google Search PPC, bilingual Meta advertising, and Enterprise SEO.",
    metaTitle: "Top Digital Marketing & PPC Agency in Ras Al Khaimah (RAK) | OptiVir Ads",
    metaDescription: "Scale your UAE business with OptiVir Ads in Ras Al Khaimah. We specialize in high-intent Google PPC, bilingual Meta ads, and ROI-driven digital growth strategies.",
    address: {
      streetAddress: "Al Nakheel",
      addressLocality: "Ras Al Khaimah",
      addressRegion: "Ras Al Khaimah",
      postalCode: "00000",
      addressCountry: "AE"
    },
    geo: {
      latitude: 25.7895,
      longitude: 55.9432
    },
    telephone: "+91 9995037109",
    primaryServiceFocus: "B2B Free-Zone Lead Generation & Tourism PPC",
    serviceDescription: "Ras Al Khaimah is rapidly expanding as a commercial and tourism powerhouse in the UAE. Our RAK performance campaigns capture high-intent commercial queries and deploy localized Arabic & English paid ads to deliver predictable return on ad spend."
  },
  qatar: {
    city: "Doha",
    slug: "qatar",
    region: "Doha",
    country: "Qatar",
    heroHeading: "High-ROAS Digital Marketing & Paid Media Agency in Qatar",
    heroSubheading: "Capturing high-value commercial intent and scaling premium brands across Doha and the GCC with precision Google Search Ads, targeted Meta & Snapchat campaigns, and Authority SEO.",
    metaTitle: "Leading Digital Marketing & PPC Agency in Qatar (Doha) | OptiVir Ads",
    metaDescription: "OptiVir Ads is a premier digital marketing agency in Qatar. Data-backed Google Ads, targeted Meta campaigns, and high-intent SEO engineered for the GCC market.",
    address: {
      streetAddress: "West Bay",
      addressLocality: "Doha",
      addressRegion: "Doha",
      postalCode: "00000",
      addressCountry: "QA"
    },
    geo: {
      latitude: 25.2854,
      longitude: 51.5310
    },
    telephone: "+91 9995037109",
    primaryServiceFocus: "High-Intent Search PPC & GCC Omnichannel Acquisition",
    serviceDescription: "The Qatari market commands high purchasing power and demands precision-engineered marketing. We deploy advanced Smart Bidding, negative search filters, and bilingual creative assets designed to maximize client ROAS across Doha."
  }
};
