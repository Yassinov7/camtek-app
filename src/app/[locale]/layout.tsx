import { Geist, Geist_Mono, Noto_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { getDictionary, hasLocale } from '@/i18n/dictionaries';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import InstagramButton from '@/components/layout/InstagramButton';
import { COMPANY } from '@/lib/constants';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: isRtl ? 'كامتيك للحلول الأمنية' : 'CamTek Security Solutions',
    description: isRtl
      ? 'تركيب احترافي لكاميرات المراقبة للمنازل والشركات والمصانع في جميع أنحاء الكويت'
      : 'Professional surveillance camera installation for homes, businesses, and industries across Kuwait',
    url: 'https://camtek.kw',
    telephone: '+96555222997',
    image: 'https://camtek.kw/offer1.jpeg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KW',
      addressLocality: isRtl ? 'الكويت' : 'Kuwait',
    },
    areaServed: {
      '@type': 'Country',
      name: isRtl ? 'الكويت' : 'Kuwait',
    },
    priceRange: '$$',
    openingHours: 'Sa-Th 08:00-20:00',
    sameAs: ['https://www.instagram.com/camtek.ku'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
    },
  };

  return (
    <html
      lang={locale}
      dir={dir}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton locale={locale} />
        <InstagramButton locale={locale} href={COMPANY.instagramPrimaryUrl} handle={COMPANY.instagramPrimary} offsetClass="right-20" />
        <InstagramButton locale={locale} href={COMPANY.instagramSecondaryUrl} handle={COMPANY.instagramSecondary} offsetClass="right-36" />
      </body>
    </html>
  );
}
