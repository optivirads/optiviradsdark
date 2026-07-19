'use server';

import { getPageFaqs } from '@/lib/wordpress';

export async function fetchPageFaqs(pageKey: string) {
  return await getPageFaqs(pageKey);
}
