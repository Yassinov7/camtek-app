import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/i18n/dictionaries';
import { generateSeoMetadata } from '@/lib/seo';
import Container from '@/components/shared/Container';
import PageHeader from '@/components/shared/PageHeader';
import Button from '@/components/shared/Button';
import { services, type ServiceId } from '@/data/services';
import { projects } from '@/data/projects';
import { ReactNode } from 'react';
import ServicesVideoSelector from '@/components/services/ServicesVideoSelector';

const servicePosterMap: Record<string, string> = {
  indoor: '/new public/advertise posters/راقب كل شي من مكانك - حلول مراقبة متكاملة -داخلي خارجي - بوستر نصي مع صور مناسبة.jpg',
  outdoor: '/new public/advertise posters/كاميرات ip احترافية للمباني السكنية- بوستر نصي مع صور مناسبة.jpg',
  dvr: '/new public/ستاند حائطي يستعرض الكاميرات والاجهزة مثبتة عليه.jpg',
  wifi: '/new public/advertise posters/انترنت اسرع حياة اسرع - مع مقوي شبكات wifi- بوستر نصي مع صور مناسبة.jpg',
  mobile: '/new public/advertise posters/حماية منزلك الذكية - انت في اي مكان ... منزلك تحت الحماية - بوستر نصي مع صور مناسبة.jpg',
  maintenance: '/new public/advertise posters/لا تترك امنك للصدفة- احم مايهمك قبل فوات الاوان -بوستر نصي مع صور مناسبة.jpg',
  security: '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
};

const videoGallery = [
  {
    title: 'عروض كاميرات خارجية وداخلية',
    description: 'مقاطع توضح الحلول المتكاملة للمنازل والمكاتب مع تغطية كاملة للداخل والخارج.',
    src: '/new public/video/فيديو يتكلم عن عروض الكاميرات وتوفر جميع انوعها داخلية خارجية -وايفاي او سلكي -ايضا موجود مقوي سيفس انترنت -مع صوت.mp4',
  },
  {
    title: 'تركيب كاميرا داخلية احترافي',
    description: 'ن showcase عملي لتركيب الكاميرات الداخلية مع جودة الصورة ووضوح الزاوية.',
    src: '/new public/video/فيديو يوضح تركيب احترافي لكاميرا داخلية.mp4',
  },
  {
    title: 'التحكم عبر الهاتف',
    description: 'تجربة مباشرة للعرض المرئي ومراقبة النظام عن بُعد عبر التطبيق.',
    src: '/new public/video/فيديو يوضح التحكم باحدى الكاميرات عبر تطبيق الهاتف وتحريكها ورؤية النتيجة.mp4',
  },
  {
    title: 'بوابات ذكية وحلول أمان متقدمة',
    description: 'حلول أمان ذكية للمنزل مع أتمتة الوصول وإدارة الدخول بشكل أنيق وآمن.',
    src: '/new public/video/فيديو عن مسكة باب حديثة وذكية توفر ميزات امان حديثة.mp4',
  },
];

export async function generateMetadata() {
  const dict = await getDictionary();
  return generateSeoMetadata({
    title: dict.seo.services.title,
    description: dict.seo.services.description,
    path: '/services',
  });
}

const iconMap: Record<string, ReactNode> = {
  CameraIndoor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  CameraOutdoor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Server: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Smartphone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Wifi: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12.5a14.5 14.5 0 0114 0M8.5 16a9.5 9.5 0 017 0M12 20h.01" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Wrench: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default async function ServicesPage() {
  const dict = await getDictionary();

  return (
    <div>
      <PageHeader title={dict.services.title} description={dict.services.subtitle} />

      <section className="py-10 sm:py-14 bg-slate-50">
        <Container>
          <ServicesVideoSelector videoGallery={videoGallery} />

          <div className="mt-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{dict.about.brands.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{dict.about.brands.description}</p>
            <div className="flex flex-wrap gap-2">
              {dict.about.brands.items.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">خدماتنا وأبرز المشاريع</h2>
            <p className="text-gray-600 max-w-2xl">نقدم حلول أمنية، شبكات، ومتابعة مباشرة مع تركيبات عملية في كل نقطة — ومشاريعنا تعكس نفس الجودة والتفاصيل.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service) => {
              const serviceData = dict.services[service.id as ServiceId] as {
                title: string;
                description: string;
                features: string[];
              };

              return (
                <article
                  key={service.id}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-white sm:h-64">
                    <Image
                      src={servicePosterMap[service.id] || servicePosterMap.security}
                      alt={serviceData.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-sm">
                      {iconMap[service.icon] || iconMap.Shield}
                    </div>
                  </div>

                  <div className="flex flex-col p-5 sm:p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{serviceData.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {serviceData.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {serviceData.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-green shrink-0" aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-auto">
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center justify-center min-h-11 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {dict.services.learnMore}
                      </Link>
                      <Button href="/quote" variant="secondary" size="sm" className="w-full min-h-11">
                        {dict.services.requestQuote}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">مكتبة الفيديوهات</h2>
            <p className="text-gray-600 max-w-2xl">نستخدم جميع مقاطع الفيديو المتاحة لتعكس واقع الحلول الأمنية، تركيب الكاميرات، والأنظمة الذكية التي نقدمها.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {videoGallery.map((video) => (
              <div key={video.src} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <video
                  className="h-60 w-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">مشاريعنا المميزة</h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-primary hover:underline">
              عرض جميع المشاريع
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {projects.slice(0, 4).map((project) => {
              const projectData = dict.projects[project.id as keyof typeof dict.projects] as {
                name: string;
                location: string;
                cameras: string;
                summary?: string;
              } | undefined;

              return (
                <article key={project.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="relative aspect-[16/11] overflow-hidden bg-white">
                    <Image src={project.image} alt={projectData?.name || project.id} fill className="object-contain p-2" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{projectData?.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{projectData?.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
