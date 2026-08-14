import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import { COMPANY } from '@/lib/constants';

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

  const contactMethods = [
    { label: dict.contact.info.phone, value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { label: dict.contact.info.whatsapp, value: COMPANY.whatsapp, href: COMPANY.whatsappLink },
    { label: 'Instagram', value: `@${COMPANY.instagramPrimary}`, href: COMPANY.instagramPrimaryUrl },
    { label: 'Instagram', value: `@${COMPANY.instagramSecondary}`, href: COMPANY.instagramSecondaryUrl },
    { label: dict.contact.info.location, value: COMPANY.locationAr, href: COMPANY.mapSearchUrl },
  ];

  return (
    <div>
      <PageHeader
        title={dict.quote.title}
        description={dict.quote.subtitle}
        accent="secondary"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.4fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-primary/10 to-white p-5 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">وسائل التواصل</h2>
                <p className="text-sm text-gray-600 mb-5">تواصل معنا مباشرة عبر الهاتف أو واتساب أو حساباتنا على الإنستغرام.</p>
                <div className="space-y-3">
                  {contactMethods.map((item) => (
                    <a
                      key={`${item.label}-${item.value}`}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-700 transition-colors hover:border-primary hover:text-primary"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-green shrink-0" aria-hidden />
                      <span>
                        <span className="font-semibold text-gray-900">{item.label}:</span> {item.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">اطلب عرض سعر مباشر</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                ارسل تفاصيل مشروعك على واتساب أو اتصل بنا مباشرة، وسنرسل لك عرض السعر المناسب حسب طبيعة الموقع والاحتياج.
              </p>
              <div className="space-y-3">
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-gray-200 bg-whatsapp/5 p-4 text-gray-800 hover:border-whatsapp hover:bg-whatsapp/10 transition-colors">
                  <span className="font-semibold">طلب عبر واتساب</span>
                  <span className="text-sm">{COMPANY.whatsapp}</span>
                </a>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center justify-between rounded-xl border border-gray-200 bg-primary/5 p-4 text-gray-800 hover:border-primary hover:bg-primary/10 transition-colors">
                  <span className="font-semibold">اتصال مباشر</span>
                  <span className="text-sm">{COMPANY.phone}</span>
                </a>
                <a href={COMPANY.instagramPrimaryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-800 hover:border-primary hover:bg-primary/5 transition-colors">
                  <span className="font-semibold">Instagram</span>
                  <span className="text-sm">@{COMPANY.instagramPrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
