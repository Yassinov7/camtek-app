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
    <section className="py-20 bg-gradient-to-r from-primary via-blue-700 to-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.home.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {dict.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={`/${locale}/contact`} variant="secondary" size="lg">
              {dict.home.cta.contactUs}
            </Button>
            <Button
              href={`/${locale}/quote`}
              variant="gold"
              size="lg"
            >
              {dict.home.cta.getQuote}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
