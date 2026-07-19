export interface FAQItemData {
  question: string;
  answer: string; // supports rich text/HTML
  link?: {
    text: string;
    url: string;
  };
}

export interface FAQProps {
  faqs: FAQItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
}
