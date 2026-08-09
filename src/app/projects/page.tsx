import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import ProjectGallery from '@/components/projects/ProjectGallery';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.projects.title,
    description: dict.seo.projects.description,
    path: '/projects',
  });
}

export default async function ProjectsPage() {
  const dict = await getDictionary();

  return (
    <div>
      <PageHeader title={dict.projects.title} description={dict.projects.subtitle} />
      <section className="py-12 sm:py-16">
        <Container>
          <ProjectGallery dict={dict} />
        </Container>
      </section>
    </div>
  );
}
