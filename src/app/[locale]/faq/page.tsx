import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import Button from '@/components/shared/Button';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = hasLocale(locale) ? await getDictionary(locale) : null;

  return generateSeoMetadata({
    title: dict?.faq?.title || 'FAQ',
    description: dict?.faq?.subtitle || 'Frequently asked questions about our security services',
    locale,
    path: '/faq',
  });
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="pt-20">
      <div className="bg-linear-to-r from-primary to-blue-700 py-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.faq.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{dict.faq.subtitle}</p>
          </div>
        </Container>
      </div>

      <section className="py-20 bg-slate-50">
        <Container>
          <SectionTitle title={dict.faq.title} subtitle={dict.faq.subtitle} />
          <div className="grid gap-6">
            {dict.faq.items.map((item, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-slate-900">
                  {item.question}
                  <span className="text-primary transition-transform duration-300 group-open:rotate-180">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}

            <div className="rounded-4xl border border-primary/20 bg-white p-8 text-center shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{dict.faq.contactPrompt}</h2>
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                {dict.faq.contactButton}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
