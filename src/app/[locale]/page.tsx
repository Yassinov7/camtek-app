import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = hasLocale(locale) ? await getDictionary(locale) : null;
  return generateSeoMetadata({
    title: dict?.home?.hero?.title || 'Home',
    description: dict?.home?.hero?.subtitle || 'Professional security solutions in Kuwait',
    locale,
    path: '/',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ProjectsPreview locale={locale} dict={dict} />
      <WhyChooseUs dict={dict} />
      <ServicesPreview locale={locale} dict={dict} />
      <Testimonials dict={dict} />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
