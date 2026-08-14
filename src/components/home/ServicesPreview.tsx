'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/shared/SectionTitle';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { services } from '@/data/services';
import type { Dictionary } from '@/i18n/dictionaries';

interface ServicesPreviewProps {
  dict: Dictionary;
}

const servicePosterMap: Record<string, string> = {
  indoor: '/new public/advertise posters/راقب كل شي من مكانك - حلول مراقبة متكاملة -داخلي خارجي - بوستر نصي مع صور مناسبة.jpg',
  outdoor: '/new public/advertise posters/كاميرات ip احترافية للمباني السكنية- بوستر نصي مع صور مناسبة.jpg',
  dvr: '/new public/ستاند حائطي يستعرض الكاميرات والاجهزة مثبتة عليه.jpg',
  wifi: '/new public/advertise posters/انترنت اسرع حياة اسرع - مع مقوي شبكات wifi- بوستر نصي مع صور مناسبة.jpg',
  mobile: '/new public/advertise posters/حماية منزلك الذكية - انت في اي مكان ... منزلك تحت الحماية - بوستر نصي مع صور مناسبة.jpg',
  maintenance: '/new public/advertise posters/لا تترك امنك للصدفة- احم مايهمك قبل فوات الاوان -بوستر نصي مع صور مناسبة.jpg',
  security: '/new public/advertise posters/حلول مراقبة احترافية - امانك اولويتنا - بوستر نصي مع صور مناسبة.jpg',
};

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

export default function ServicesPreview({ dict }: ServicesPreviewProps) {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <Container>
        <SectionTitle title={dict.home.services.title} subtitle={dict.home.services.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {featuredServices.map((service, index) => {
            const serviceData = dict.services[service.id as keyof typeof dict.services] as
              | { title: string; description: string }
              | undefined;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="relative h-56 w-full overflow-hidden bg-white sm:h-64">
                  <Image
                    src={servicePosterMap[service.id] || servicePosterMap.security}
                    alt={serviceData?.title || service.id}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/20">
                      {iconMap[service.icon] || iconMap.Shield}
                    </div>
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm border border-white/20">
                      {dict.projects.filter[service.id === 'security' ? 'commercial' : service.id === 'indoor' ? 'residential' : 'commercial']}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {serviceData?.title || service.id}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {serviceData?.description || ''}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    {dict.services.learnMore}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto min-h-12">
            {dict.home.services.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
