import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import { isServiceId, serviceIds, services, type ServiceId } from '@/data/services';
import PageHeader from '@/components/shared/PageHeader';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { COMPANY } from '@/lib/constants';

type ServiceContent = {
  title: string;
  description: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  whoFor: string[];
  process: string[];
  features: string[];
};

const serviceImageMap: Record<ServiceId, string> = {
  indoor: '/new public/advertise posters/راقب كل شي من مكانك - حلول مراقبة متكاملة -داخلي خارجي - بوستر نصي مع صور مناسبة.jpg',
  outdoor: '/new public/advertise posters/كاميرات ip احترافية للمباني السكنية- بوستر نصي مع صور مناسبة.jpg',
  dvr: '/new public/ستاند حائطي يستعرض الكاميرات والاجهزة مثبتة عليه.jpg',
  wifi: '/new public/advertise posters/انترنت اسرع حياة اسرع - مع مقوي شبكات wifi- بوستر نصي مع صور مناسبة.jpg',
  mobile: '/new public/advertise posters/حماية منزلك الذكية - انت في اي مكان ... منزلك تحت الحماية - بوستر نصي مع صور مناسبة.jpg',
  maintenance: '/new public/advertise posters/لا تترك امنك للصدفة- احم مايهمك قبل فوات الاوان -بوستر نصي مع صور مناسبة.jpg',
  security: '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
};

const serviceGalleryMap: Record<ServiceId, string[]> = {
  indoor: [
    '/new public/نتيجة كاميرا داخلية لمراقبة المنزل 1.jpg',
    '/new public/نتيجة كاميرا داخلية لمراقبة المنزل 2.jpg',
    '/new public/صورة تظهر شاشة مراقبة الكاميرات للمنزل كاملا داخليا وخارجيا.jpg',
  ],
  outdoor: [
    '/new public/advertise posters/كاميرات ip احترافية للمباني السكنية- بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/راقب كل شي من مكانك - حلول مراقبة متكاملة -داخلي خارجي - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
  ],
  dvr: [
    '/new public/ستاند حائطي يستعرض الكاميرات والاجهزة مثبتة عليه.jpg',
    '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/كاميرات ip احترافية للمباني السكنية- بوستر نصي مع صور مناسبة.jpg',
  ],
  wifi: [
    '/new public/advertise posters/انترنت اسرع حياة اسرع - مع مقوي شبكات wifi- بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/راقب كل شي من مكانك - حلول مراقبة متكاملة -داخلي خارجي - بوستر نصي مع صور مناسبة.jpg',
  ],
  mobile: [
    '/new public/advertise posters/حماية منزلك الذكية - انت في اي مكان ... منزلك تحت الحماية - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/امان بيتك يبدا من هنا - عرض خاص بدءا من 99د.ك - بوستر نصي اعلاني مع صور مناسبة.jpg',
  ],
  maintenance: [
    '/new public/advertise posters/لا تترك امنك للصدفة- احم مايهمك قبل فوات الاوان -بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/كاميرات ip احترافية للمباني السكنية- بوستر نصي مع صور مناسبة.jpg',
  ],
  security: [
    '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/امانك اولويتنا - احدث تقنيات المراقبة -حماية متكاملة ليل ونهار - بوستر نصي مع صور مناسبة.jpg',
    '/new public/advertise posters/راقب كل شي من مكانك - حلول مراقبة متكاملة -داخلي خارجي - بوستر نصي مع صور مناسبة.jpg',
  ],
};

export function generateStaticParams() {
  return serviceIds.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceId(slug)) {
    return generateSeoMetadata({
      title: 'خدمة غير موجودة',
      description: 'الصفحة المطلوبة غير متوفرة',
      path: `/services/${slug}`,
    });
  }

  const dict = await getDictionary();
  const service = dict.services[slug] as ServiceContent;

  return generateSeoMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceId(slug)) notFound();

  const dict = await getDictionary();
  const service = dict.services[slug] as ServiceContent;
  const otherServices = services.filter((s) => s.id !== slug);
  const heroImage = serviceImageMap[slug as ServiceId];
  const galleryImages = serviceGalleryMap[slug as ServiceId] ?? [heroImage];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.seoDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'كامتيك للحلول الأمنية',
      telephone: COMPANY.phone,
      areaServed: 'KW',
    },
    areaServed: {
      '@type': 'Country',
      name: 'الكويت',
    },
    url: `https://camtek.kw/services/${slug}`,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={service.title}
        description={service.description}
        eyebrow="خدمات كامتيك"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mb-6">
            <Link
              href="/services"
              className="text-sm font-medium text-primary hover:underline inline-flex min-h-11 items-center"
            >
              ← {dict.services.backToServices}
            </Link>
          </div>

          <div className="mb-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="relative h-[22rem] sm:h-[26rem] w-full bg-white">
                <Image
                  src={heroImage}
                  alt={service.title}
                  fill
                  priority
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="max-w-lg text-xl font-bold text-white sm:text-2xl">{service.title}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {galleryImages.slice(0, 3).map((image, index) => (
                <div key={`${image}-${index}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-36 sm:h-40 lg:h-36 w-full bg-white">
                    <Image
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 33vw, 18vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-8">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {dict.services.whoForTitle}
                </h2>
                <ul className="space-y-3">
                  {service.whoFor.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {dict.services.processTitle}
                </h2>
                <ol className="space-y-3">
                  {service.process.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm sm:text-base text-gray-700"
                    >
                      <span className="font-bold text-primary shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">وش يشمله العرض عادة؟</h2>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-green shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/quote" variant="secondary" size="lg" className="w-full min-h-12">
                    {dict.services.requestQuote}
                  </Button>
                  <Button
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    size="lg"
                    className="w-full min-h-12"
                  >
                    واتساب
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                <h2 className="text-base font-bold text-gray-900 mb-3">خدمات ثانية</h2>
                <ul className="space-y-2">
                  {otherServices.map((s) => {
                    const other = dict.services[s.id as ServiceId] as { title: string };
                    return (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.id}`}
                          className="text-sm text-primary hover:underline min-h-10 inline-flex items-center"
                        >
                          {other.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 text-center sm:text-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{dict.services.ctaTitle}</h2>
            <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-2xl sm:mr-0 mx-auto">
              {dict.services.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-start">
              <Button href="/quote" variant="secondary" size="lg" className="w-full sm:w-auto min-h-12">
                {dict.services.requestQuote}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto min-h-12 border-white text-white hover:bg-white hover:text-slate-900">
                {dict.nav.contact}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
