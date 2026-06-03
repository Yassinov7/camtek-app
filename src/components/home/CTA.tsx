'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import type { Dictionary } from '@/i18n/dictionaries';

interface CTAProps {
  locale: string;
  dict: Dictionary;
}

export default function CTA({ locale, dict }: CTAProps) {
  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-r from-primary via-blue-700 to-primary">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-4xl border border-white/10 bg-white/10 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {dict.home.cta.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
                {dict.home.cta.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button href={`/${locale}/contact`} variant="secondary" size="lg">
                {dict.home.cta.contactUs}
              </Button>
              <Button href={`/${locale}/quote`} variant="gold" size="lg">
                {dict.home.cta.getQuote}
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {dict.home.cta.features.map((feature: { title: string; description: string }, index: number) => (
              <div key={index} className="rounded-3xl bg-white/10 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.28em] text-blue-100 mb-2">{feature.title}</p>
                <p className="text-sm leading-6 text-blue-50/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
