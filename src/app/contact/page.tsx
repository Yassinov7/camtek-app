import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import { COMPANY } from '@/lib/constants';

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.contact.title,
    description: dict.seo.contact.description,
    path: '/contact',
  });
}

export default async function ContactPage() {
  const dict = await getDictionary();

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: dict.contact.info.phone,
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: dict.contact.info.whatsapp,
      value: COMPANY.whatsapp,
      href: COMPANY.whatsappLink,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: dict.contact.info.location,
      value: COMPANY.locationAr,
      href: COMPANY.mapSearchUrl,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      label: dict.contact.info.instagram,
      value: `@${COMPANY.instagramPrimary}`,
      href: COMPANY.instagramPrimaryUrl,
    },
  ];

  return (
    <div>
      <PageHeader title={dict.contact.title} description={dict.contact.subtitle} />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gradient-to-r from-primary/10 via-white to-slate-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900">تواصل مباشر</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center min-h-11 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">اتصال مباشر</a>
              <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-11 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors">واتساب</a>
              <a href={COMPANY.instagramPrimaryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-11 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors">Instagram</a>
              <a href={COMPANY.instagramSecondaryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-11 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors">CamTek</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{dict.footer.contactInfo}</h2>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-semibold text-gray-900">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{dict.contact.info.hours}</p>
                  <p className="font-semibold text-gray-900">{COMPANY.openingHoursAr}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-white">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  {dict.contact.serviceAreasTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {COMPANY.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">تواصل مباشر وسريع</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  إذا كنت تريد عرضاً سريعاً أو تحتاج استشارة فورية، ارسل رسالة واتساب أو اتصل مباشرة معنا، وسنرد لك خلال ساعات العمل.
                </p>
                <div className="space-y-3">
                  <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-gray-200 bg-whatsapp/5 p-4 text-gray-800 hover:border-whatsapp hover:bg-whatsapp/10 transition-colors">
                    <span className="font-semibold">واتساب</span>
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
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="bg-slate-50 px-5 sm:px-8 py-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{dict.contact.mapTitle}</h2>
              <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-3xl">{dict.contact.mapDescription}</p>
            </div>
            <iframe
              title="منطقة خدمة كامتيك في الكويت"
              src={COMPANY.mapEmbedUrl}
              className="w-full h-[320px] sm:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
