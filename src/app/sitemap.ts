import { MetadataRoute } from 'next';
import { serviceIds } from '@/data/services';

const pages = ['', '/about', '/services', '/projects', '/faq', '/contact', '/quote'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://camtek.kw';

  const main = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: (page === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: page === '' ? 1.0 : page === '/quote' || page === '/contact' ? 0.9 : 0.8,
  }));

  const servicePages = serviceIds.map((id) => ({
    url: `${baseUrl}/services/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...main, ...servicePages];
}
