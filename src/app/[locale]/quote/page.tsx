import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import QuoteForm from '@/components/forms/QuoteForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = hasLocale(locale) ? await getDictionary(locale) : null;
  return generateSeoMetadata({
    title: dict?.quote?.title || 'Request Quote',
    description: dict?.quote?.subtitle || 'Request a free quote',
    locale,
    path: '/quote',
  });
}

export default async function QuotePage({
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
      <div className="bg-linear-to-r from-secondary to-orange-600 py-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.quote.title}</h1>
            <p className="text-xl text-orange-100">{dict.quote.subtitle}</p>
          </div>
        </Container>
      </div>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <QuoteForm locale={locale} dict={dict} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
