import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import QuoteForm from '@/components/forms/QuoteForm';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.quote.title,
    description: dict.seo.quote.description,
    path: '/quote',
  });
}

export default async function QuotePage() {
  const dict = await getDictionary();

  return (
    <div>
      <PageHeader
        title={dict.quote.title}
        description={dict.quote.subtitle}
        accent="secondary"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
              <QuoteForm dict={dict} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
