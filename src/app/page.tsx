import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    path: '/',
  });
}

export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <>
      <Hero dict={dict} />
      <ProjectsPreview dict={dict} />
      <WhyChooseUs dict={dict} />
      <ServicesPreview dict={dict} />
      <Testimonials dict={dict} />
      <CTA dict={dict} />
    </>
  );
}
