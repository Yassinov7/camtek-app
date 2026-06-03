import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const pages = ['', '/about', '/services', '/projects', '/quote', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://camtek.kw';

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : 0.8,
    }))
  );
}
