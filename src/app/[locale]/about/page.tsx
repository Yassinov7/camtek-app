import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = hasLocale(locale) ? await getDictionary(locale) : null;
  return generateSeoMetadata({
    title: dict?.about?.title || 'About Us',
    description: dict?.about?.subtitle || 'About CamTek',
    locale,
    path: '/about',
  });
}

export default async function AboutPage({
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.about.title}</h1>
            <p className="text-xl text-blue-100">{dict.about.subtitle}</p>
          </div>
        </Container>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{dict.about.story.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {dict.about.story.description}
              </p>
            </div>
            <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{dict.about.experience.years}</div>
                <h3 className="text-2xl font-semibold text-gray-900">{dict.about.experience.title}</h3>
                <p className="text-gray-600 mt-2">{dict.about.experience.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.about.vision.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.vision.description}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.about.mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.mission.description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted Brands */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-center">
            <div>
              <SectionTitle title={dict.about.brands.title} />
              <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
                {dict.about.brands.description}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {dict.about.brands.items.map((brand) => (
                  <span key={brand} className="rounded-3xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 shadow-sm">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-4xl bg-white p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.about.brands.quality.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.brands.quality.description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <Container>
          <SectionTitle title={dict.about.values.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(['quality', 'integrity', 'reliability', 'innovation'] as const).map((value, index) => {
              const data = dict.about.values[value] as { title: string; description: string };
              const colors = ['bg-primary/10 text-primary', 'bg-secondary/10 text-secondary', 'bg-gold/10 text-gold', 'bg-green/10 text-green'];
              
              return (
                <div key={value} className="text-center">
                  <div className={`w-16 h-16 rounded-2xl ${colors[index]} flex items-center justify-center mx-auto mb-4`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{data?.title}</h4>
                  <p className="text-gray-600 text-sm">{data?.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
