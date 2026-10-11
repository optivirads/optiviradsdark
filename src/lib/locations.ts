export interface LocationData {
  city: string;
  slug: string;
  region: string;
  country: string;
  heroHeading: string;
  heroSubheading: string;
  metaTitle: string;
  metaDescription: string;
  isRemote: boolean;
  servingModel: string;
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

export const HEADQUARTERS_ADDRESS = {
  streetAddress: "Green Building, Talap",
  addressLocality: "Kannur",
  addressRegion: "Kerala",
  postalCode: "670002",
  addressCountry: "IN"
};

export const HEADQUARTERS_GEO = {
  latitude: 11.8745,
  longitude: 75.3704
};

export const LOCATIONS: Record<string, LocationData> = {
  kannur: {
    city: "Kannur",
    slug: "kannur",
    region: "Kerala",
    country: "India",
    heroHeading: "Digital Marketing Company in Kannur",
    heroSubheading: "Driving local dominance and predictable client acquisition. Specializing in Google Maps optimization, Google Ads agency management, and targeted Instagram & Facebook ads for Kannur businesses.",
    metaTitle: "Digital Marketing Company in Kannur | Google Ads & Local SEO | OptiVir Ads",
    metaDescription: "OptiVir Ads is a performance-focused digital marketing company in Kannur, Kerala. Specializing in Google Business Profile optimization, Google Ads, and Meta advertising for local businesses.",
    isRemote: false,
    servingModel: "Kerala Headquarters & Local Office",
    address: HEADQUARTERS_ADDRESS,
    geo: HEADQUARTERS_GEO,
    telephone: "+91 9995037109",
    primaryServiceFocus: "Google Maps SEO & High-Intent Paid Ads",
    serviceDescription: "For businesses in Kannur and across Kerala, local search visibility is critical. Our Kannur-based growth engineers structure localized Google Business Profile strategies to rank in the Map 3-Pack, alongside high-converting Google Search and Instagram ad funnels for salons, clinics, gyms, and retail showrooms."
  },
  calicut: {
    city: "Calicut",
    slug: "calicut",
    region: "Kerala",
    country: "India",
    heroHeading: "Digital Marketing Agency for Calicut Businesses",
    heroSubheading: "Helping businesses across Kozhikode and Malabar capture market share through Google Maps optimization Kerala, high-intent Google Ads, and targeted social media marketing.",
    metaTitle: "Digital Marketing for Calicut Businesses | Local SEO & Ads | OptiVir Ads",
    metaDescription: "OptiVir Ads helps Kozhikode and Calicut businesses attract more local customers with Google Maps optimization in Kerala, Google Search Ads, and targeted social media campaigns.",
    isRemote: true,
    servingModel: "Serving businesses in Calicut from our Kerala headquarters",
    address: HEADQUARTERS_ADDRESS,
    geo: HEADQUARTERS_GEO,
    telephone: "+91 9995037109",
    primaryServiceFocus: "Google Maps SEO & Local Lead Generation",
    serviceDescription: "Kozhikode is Malabar's trade and commercial epicentre. We manage high-intent Google Search campaigns and localized Google Maps optimization from our Kerala office to help Calicut businesses capture nearby customers looking for their services."
  },
  dubai: {
    city: "Dubai",
    slug: "dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    heroHeading: "Performance Marketing Agency for Dubai & UAE Businesses",
    heroSubheading: "Premier Google Ads agency and lead generation company for Dubai enterprises. Scalable B2B lead generation, bilingual social media marketing, and high-converting Next.js websites engineered from Kerala at 50% lower agency overheads.",
    metaTitle: "Performance Marketing & Google Ads Agency Dubai | OptiVir Ads",
    metaDescription: "OptiVir Ads serves businesses in Dubai from Kerala. High-performing Google Ads agency management, SEO services in Dubai, and precision Meta lead generation at exceptional ROI.",
    isRemote: true,
    servingModel: "Serving businesses in Dubai from Kerala",
    address: HEADQUARTERS_ADDRESS,
    geo: HEADQUARTERS_GEO,
    telephone: "+91 9995037109",
    primaryServiceFocus: "Enterprise Google Ads & Lead Generation",
    serviceDescription: "We partner remotely with businesses and founders in Dubai to deliver high-performing Google Search campaigns, technical SEO agency services, and precision Meta advertising tailored to regional UAE audiences—without the excessive overhead of local agency retainers."
  },
  "ras-al-khaimah": {
    city: "Ras Al Khaimah",
    slug: "ras-al-khaimah",
    region: "Ras Al Khaimah",
    country: "United Arab Emirates",
    heroHeading: "Digital Marketing Agency in Ras Al Khaimah (RAK)",
    heroSubheading: "Helping commercial enterprises, Free Zone businesses, and local salons & spas in RAK attract clients with targeted Google Search PPC, social media marketing, and local SEO.",
    metaTitle: "Digital Marketing Agency Ras Al Khaimah | Social Media & PPC | OptiVir Ads",
    metaDescription: "OptiVir Ads serves businesses in Ras Al Khaimah from Kerala. Full-service digital marketing agency in RAK, social media management, Google Ads, and salon marketing in Ras Al Khaimah.",
    isRemote: true,
    servingModel: "Serving businesses in Ras Al Khaimah from Kerala",
    address: HEADQUARTERS_ADDRESS,
    geo: HEADQUARTERS_GEO,
    telephone: "+91 9995037109",
    primaryServiceFocus: "B2B Lead Generation & Localized Advertising",
    serviceDescription: "Ras Al Khaimah is growing rapidly as an industrial, tourism, and wellness hub. We provide performance marketing, social media marketing in RAK, and salon marketing in Ras Al Khaimah to help local enterprises attract commercial enquiries and maximize return on ad spend."
  },
  qatar: {
    city: "Doha",
    slug: "qatar",
    region: "Doha",
    country: "Qatar",
    heroHeading: "Digital Marketing Company in Qatar & Doha",
    heroSubheading: "Partnering with businesses across Doha and Qatar. Precision Google Ads management, SEO agency Doha strategies, and specialized salon & gym marketing funnels engineered from Kerala.",
    metaTitle: "Digital Marketing Company Qatar | SEO Agency Doha & Google Ads | OptiVir Ads",
    metaDescription: "OptiVir Ads serves businesses in Qatar from Kerala. Leading digital marketing company in Qatar, SEO agency Doha services, salon marketing, and gym lead generation services in Qatar.",
    isRemote: true,
    servingModel: "Serving businesses in Qatar from Kerala",
    address: HEADQUARTERS_ADDRESS,
    geo: HEADQUARTERS_GEO,
    telephone: "+91 9995037109",
    primaryServiceFocus: "Search Advertising & Lead Generation",
    serviceDescription: "Working remotely with Qatar-based businesses, our dedicated marketing engineers structure intent-based search campaigns, social media ads, and salon advertising in Doha, alongside gym lead generation services in Qatar that turn clicks into confirmed bookings."
  }
};
