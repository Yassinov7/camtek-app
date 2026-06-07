import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import ProjectGallery from '@/components/projects/ProjectGallery';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = hasLocale(locale) ? await getDictionary(locale) : null;
  return generateSeoMetadata({
    title: dict?.projects?.title || 'Projects',
    description: dict?.projects?.subtitle || 'Our projects',
    locale,
    path: '/projects',
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div className="bg-linear-to-r from-primary to-blue-700 py-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.projects.title}</h1>
            <p className="text-xl text-blue-100">{dict.projects.subtitle}</p>
          </div>
        </Container>
      </div>

      {/* Gallery */}
      <section className="py-20">
        <Container>
          <ProjectGallery locale={locale} dict={dict} />
        </Container>
      </section>
    </div>
  );
}
