'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import type { Dictionary } from '@/i18n/dictionaries';

interface CTAProps {
  dict: Dictionary;
}

export default function CTA({ dict }: CTAProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 bg-linear-to-r from-primary via-blue-700 to-primary">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/10 p-6 sm:p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="text-center sm:text-right">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 leading-snug">
                {dict.home.cta.title}
              </h2>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                {dict.home.cta.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-start">
              <Button href="/quote" variant="gold" size="lg" className="w-full sm:w-auto min-h-12">
                {dict.home.cta.getQuote}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto min-h-12 border-white text-white hover:bg-white hover:text-primary">
                {dict.home.cta.contactUs}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
