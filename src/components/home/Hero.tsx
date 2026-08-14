'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import { COMPANY } from '@/lib/constants';
import type { Dictionary } from '@/i18n/dictionaries';

interface HeroProps {
  dict: Dictionary;
}

const newPublicAsset = (relativePath: string) => encodeURI(`/new public/${relativePath}`);

export default function Hero({ dict }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroPoster = newPublicAsset('advertise posters/حماية منزلك الذكية - انت في اي مكان ... منزلك تحت الحماية - بوستر نصي مع صور مناسبة.jpg');
  const heroVideoMobile = newPublicAsset('video/فيديو عن مسكة باب حديثة وذكية توفر ميزات امان حديثة.mp4');
  const heroVideoDesktop = newPublicAsset('video/فيديو يتكلم عن عروض الكاميرات وتوفر جميع انوعها داخلية خارجية -وايفاي او سلكي -ايضا موجود مقوي سيفس انترنت -مع صوت.mp4');
  const [reduceMotion, setReduceMotion] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyMotion = () => setReduceMotion(motionMq.matches);
    applyMotion();
    motionMq.addEventListener('change', applyMotion);

    // Let the poster paint first, then load video on all screen sizes
    let cancelled = false;
    const start = () => {
      if (!cancelled && !motionMq.matches) setLoadVideo(true);
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(start, { timeout: 900 });
    } else {
      timeoutId = setTimeout(start, 200);
    }

    return () => {
      cancelled = true;
      motionMq.removeEventListener('change', applyMotion);
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !loadVideo) return;

    const play = async () => {
      try {
        await el.play();
      } catch {
        // Autoplay can fail on some mobile browsers; poster stays visible
      }
    };

    play();
  }, [loadVideo]);

  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroPoster}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden
        />

        {loadVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            onLoadedData={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden
          >
            <source src={heroVideoMobile} type="video/mp4" media="(max-width: 767px)" />
            <source src={heroVideoDesktop} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/40" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-28">
        <div className="max-w-2xl text-center sm:text-right mx-auto sm:mx-0 sm:mr-0">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
          >
            {dict.home.hero.brand}
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs sm:text-sm text-white/90 mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-green" />
            {dict.home.hero.badge}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug"
          >
            {dict.home.hero.title}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mx-auto sm:mx-0"
          >
            {dict.home.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:justify-start"
          >
            <Link
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto min-h-12 gap-2 text-base">
                {dict.home.hero.ctaWhatsapp}
              </Button>
            </Link>
            <Button href="/quote" variant="secondary" size="lg" className="w-full sm:w-auto min-h-12 text-base">
              {dict.home.hero.ctaQuote}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
