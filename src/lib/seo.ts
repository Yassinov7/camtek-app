import { Metadata } from 'next';
import { COMPANY } from './constants';

interface SeoProps {
  title: string;
  description: string;
  locale: string;
  path: string;
}

export function generateSeoMetadata({ title, description, locale, path }: SeoProps): Metadata {
  const url = `https://camtek.kw/${locale}${path}`;
  
  return {
    title: `${title} | ${COMPANY.name} ${COMPANY.tagline}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        'en-US': `https://camtek.kw/en${path}`,
        'ar': `https://camtek.kw/ar${path}`,
      },
    },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url,
      siteName: COMPANY.name,
      locale: locale === 'ar' ? 'ar_KW' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/offer1.jpeg',
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${COMPANY.name}`,
      description,
      images: ['/offer1.jpeg'],
    },
  };
}
