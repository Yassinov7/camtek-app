'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/shared/SectionTitle';
import Container from '@/components/shared/Container';
import { testimonials } from '@/data/testimonials';
import type { Dictionary } from '@/i18n/dictionaries';

interface TestimonialsProps {
  dict: Dictionary;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`تقييم ${rating} من 5`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const testimonialKeys = ['t1', 't2', 't3', 't4'] as const;

export default function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <Container>
        <SectionTitle
          title={dict.home.testimonials.title}
          subtitle={dict.home.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => {
            const key = testimonialKeys[index];
            const translated = dict.home.testimonials[key] as {
              name: string;
              company: string;
              text: string;
            };

            return (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5 sm:p-6"
              >
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {translated.text}
                </p>
                <footer className="mt-5 pt-4 border-t border-gray-200">
                  <cite className="not-italic font-semibold text-gray-900 block">
                    {translated.name}
                  </cite>
                  <p className="text-sm text-gray-500 mt-0.5">{translated.company}</p>
                </footer>
              </motion.blockquote>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
