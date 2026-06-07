'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import type { Dictionary } from '@/i18n/dictionaries';

interface HeroProps {
  locale: string;
  dict: Dictionary;
}

export default function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_420px] items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 mb-6"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-green animate-pulse" />
              <span className="text-sm font-medium">{dict.home.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {dict.home.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              {dict.home.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="https://wa.me/96555222997" target="_blank">
                <Button variant="whatsapp" size="lg" className="gap-2">
                  {dict.home.hero.ctaWhatsapp}
                </Button>
              </Link>
              <Button href={`/${locale}/contact`} variant="secondary" size="lg">
                {dict.home.hero.ctaQuote}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {dict.home.hero.features.map((feature: { title: string; description: string }, index: number) => (
                <div key={index} className="rounded-3xl bg-white/10 border border-white/10 p-5 text-left">
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-100 mb-2">
                    {feature.title}
                  </p>
                  <p className="text-sm leading-6 text-slate-200">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="space-y-6 text-white">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-100 mb-3">{dict.home.hero.quickTitle}</p>
                <h2 className="text-3xl font-bold">{dict.home.hero.quickValue}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">{dict.home.hero.quickDescription}</p>
              </div>
              <div className="grid gap-4">
                {dict.home.hero.highlights.map((item: { title: string; description: string }, index: number) => (
                  <div key={index} className="rounded-3xl bg-white/5 p-5">
                    <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
