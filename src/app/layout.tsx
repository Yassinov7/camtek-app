import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import { getDictionary } from '@/i18n/dictionaries';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { COMPANY } from '@/lib/constants';
import '@/app/globals.css';

const notoArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://camtek.kw'),
  title: {
    default: 'تركيب كاميرات مراقبة الكويت | كامتيك',
    template: '%s | كامتيك',
  },
  description:
    'كامتيك — تركيب احترافي لكاميرات المراقبة وأنظمة الأمان للمنازل والشركات والمنشآت الصناعية في جميع أنحاء الكويت.',
  other: {
    'theme-color': '#1E40AF',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://camtek.kw/#business',
  name: 'كامتيك للحلول الأمنية',
  description:
    'تركيب احترافي لكاميرات المراقبة للمنازل والشركات والمصانع في جميع أنحاء الكويت',
  url: 'https://camtek.kw',
  telephone: '+96555222997',
  email: COMPANY.email,
  image: 'https://camtek.kw/logo.jpeg',
  address: {
    '@type': 'PostalAddress',
    addressCountry: COMPANY.addressCountry,
    addressLocality: COMPANY.addressLocalityAr,
  },
  areaServed: COMPANY.serviceAreas.map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  })),
  priceRange: '$$',
  openingHoursSpecification: COMPANY.openingHoursSpec.days.map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day,
    opens: COMPANY.openingHoursSpec.opens,
    closes: COMPANY.openingHoursSpec.closes,
  })),
  sameAs: [COMPANY.instagramPrimaryUrl, COMPANY.instagramSecondaryUrl],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary();

  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className={`${notoArabic.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-arabic">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          تخطي إلى المحتوى
        </a>
        <Navbar dict={dict} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer dict={dict} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
