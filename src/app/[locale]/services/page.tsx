import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import { services } from '@/data/services';
import { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = hasLocale(locale) ? await getDictionary(locale) : null;
  return generateSeoMetadata({
    title: dict?.services?.title || 'Services',
    description: dict?.services?.subtitle || 'Security services',
    locale,
    path: '/services',
  });
}

const iconMap: Record<string, ReactNode> = {
  CameraIndoor: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  CameraOutdoor: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Server: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Smartphone: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Wrench: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Shield: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default async function ServicesPage({
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.services.title}</h1>
            <p className="text-xl text-blue-100">{dict.services.subtitle}</p>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="rounded-4xl bg-white p-10 shadow-xl border border-gray-100">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.about.brands.title}</h2>
                <p className="text-gray-600 leading-relaxed">{dict.about.brands.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {dict.about.brands.items.map((brand) => (
                    <span key={brand} className="rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-4xl bg-primary/5 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.about.brands.quality.title}</h3>
                <p className="text-gray-600 leading-relaxed">{dict.about.brands.quality.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const serviceData = dict.services[service.id as keyof typeof dict.services] as {
                title: string;
                description: string;
                features: string[];
              } | undefined;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {iconMap[service.icon] || iconMap.Shield}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {serviceData?.title || service.id}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {serviceData?.description || ''}
                  </p>
                  <ul className="space-y-2">
                    {(serviceData?.features || service.features).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
