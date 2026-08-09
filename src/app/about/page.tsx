import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import PageHeader from '@/components/shared/PageHeader';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.about.title,
    description: dict.seo.about.description,
    path: '/about',
  });
}

export default async function AboutPage() {
  const dict = await getDictionary();

  return (
    <div>
      <PageHeader title={dict.about.title} description={dict.about.subtitle} />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {dict.about.story.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {dict.about.story.description}
              </p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-8 sm:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">
                {dict.about.experience.years}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{dict.about.experience.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {dict.about.experience.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {dict.about.vision.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.vision.description}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {dict.about.mission.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.mission.description}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {dict.about.brands.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{dict.about.brands.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {dict.about.brands.items.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900"
              >
                {brand}
              </span>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50 border border-gray-100 p-6 sm:p-8 max-w-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {dict.about.brands.quality.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {dict.about.brands.quality.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <SectionTitle title={dict.about.values.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(['quality', 'integrity', 'reliability', 'innovation'] as const).map((value, index) => {
              const data = dict.about.values[value];
              const colors = [
                'bg-primary/10 text-primary',
                'bg-secondary/10 text-secondary',
                'bg-gold/10 text-gold',
                'bg-green/10 text-green',
              ];

              return (
                <div key={value} className="text-center sm:text-right">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors[index]} flex items-center justify-center mx-auto sm:mx-0 mb-3`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{data.title}</h4>
                  <p className="text-gray-600 text-sm">{data.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
