import Link from 'next/link';
import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import Button from '@/components/shared/Button';
import { services, type ServiceId } from '@/data/services';
import { ReactNode } from 'react';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.services.title,
    description: dict.seo.services.description,
    path: '/services',
  });
}

const iconMap: Record<string, ReactNode> = {
  CameraIndoor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  CameraOutdoor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Server: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Smartphone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Wrench: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default async function ServicesPage() {
  const dict = await getDictionary();

  return (
    <div>
      <PageHeader title={dict.services.title} description={dict.services.subtitle} />

      <section className="py-10 sm:py-14 bg-slate-50">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{dict.about.brands.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{dict.about.brands.description}</p>
            <div className="flex flex-wrap gap-2">
              {dict.about.brands.items.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service) => {
              const serviceData = dict.services[service.id as ServiceId] as {
                title: string;
                description: string;
                features: string[];
              };

              return (
                <article
                  key={service.id}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {iconMap[service.icon] || iconMap.Shield}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{serviceData.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {serviceData.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {serviceData.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-green shrink-0" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center justify-center min-h-11 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {dict.services.learnMore}
                    </Link>
                    <Button href="/quote" variant="secondary" size="sm" className="w-full min-h-11">
                      {dict.services.requestQuote}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
