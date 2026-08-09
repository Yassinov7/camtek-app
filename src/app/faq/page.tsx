import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import Button from '@/components/shared/Button';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.faq.title,
    description: dict.seo.faq.description,
    path: '/faq',
  });
}

export default async function FAQPage() {
  const dict = await getDictionary();

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader title={dict.faq.title} description={dict.faq.subtitle} />

      <section className="py-12 sm:py-16 bg-slate-50">
        <Container>
          <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
            {dict.faq.items.map((item, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-base sm:text-lg font-semibold text-slate-900 min-h-11">
                  {item.question}
                  <span className="text-primary shrink-0 text-xl" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}

            <div className="rounded-2xl border border-primary/20 bg-white p-6 sm:p-8 text-center mt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {dict.faq.contactPrompt}
              </h2>
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto min-h-12">
                {dict.faq.contactButton}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
