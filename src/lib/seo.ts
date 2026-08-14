import { Metadata } from 'next';
import { COMPANY } from './constants';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export function generateSeoMetadata({ title, description, path = '' }: SeoProps): Metadata {
  const url = `https://camtek.kw${path || ''}`;

  return {
    metadataBase: new URL('https://camtek.kw'),
    title: `${title} | ${COMPANY.nameAr}`,
    description,
    keywords: [
      'كاميرات مراقبة الكويت',
      'تركيب كاميرات',
      'كامتيك',
      'أنظمة أمنية',
      'CCTV Kuwait',
      COMPANY.nameAr,
      ...COMPANY.serviceAreas,
    ],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: `${title} | ${COMPANY.nameAr}`,
      description,
      url,
      siteName: COMPANY.nameAr,
      locale: 'ar_KW',
      type: 'website',
      images: ['/logo.jpeg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${COMPANY.nameAr}`,
      description,
      images: ['/logo.jpeg'],
    },
  };
}
