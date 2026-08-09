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
    openGraph: {
      title: `${title} | ${COMPANY.nameAr}`,
      description,
      url,
      siteName: COMPANY.nameAr,
      locale: 'ar_KW',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${COMPANY.nameAr}`,
      description,
    },
  };
}
