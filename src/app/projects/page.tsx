import Link from 'next/link';
import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { services } from '@/data/services';

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
  const serviceTitleMap = {
    indoor: dict.services.indoor.title,
    outdoor: dict.services.outdoor.title,
    dvr: dict.services.dvr.title,
    wifi: dict.services.wifi.title,
    mobile: dict.services.mobile.title,
    maintenance: dict.services.maintenance.title,
    security: dict.services.security.title,
  } as const;

  return (
    <div>
      <PageHeader title={dict.projects.title} description={dict.projects.subtitle} />

      <section className="py-10 sm:py-12 bg-slate-50">
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">خدماتنا المتكاملة</h2>
              <Link href="/services" className="text-sm font-semibold text-primary hover:underline">عرض الخدمات</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary"
                >
                  {serviceTitleMap[service.id] || service.id}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <ProjectGallery dict={dict} />
        </Container>
      </section>
    </div>
  );
}
