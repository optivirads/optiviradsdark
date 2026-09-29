import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog: Growth Insights & Tactics | OptiVir Ads',
  description: 'Read the latest digital marketing advice, Google Ads guides, local SEO strategies, and ROI-centric advertising tips from our marketing engineers.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
