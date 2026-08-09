'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import type { Dictionary } from '@/i18n/dictionaries';

interface NavbarProps {
  dict: Dictionary;
}

export default function Navbar({ dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = NAV_LINKS.map((link) => ({
    href: link.href,
    label: dict.nav[link.key as keyof typeof dict.nav],
  }));

  const isHome = pathname === '/';
  const showTransparent = isHome && !scrolled;
  const iconDark = !showTransparent || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        showTransparent && !isOpen
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="التنقل الرئيسي">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 min-w-0">
            <Image
              src="/logo.jpeg"
              alt={COMPANY.nameAr}
              width={44}
              height={44}
              priority
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-white/20 bg-white/10 shrink-0"
            />
            <div className="flex flex-col items-start min-w-0">
              <span
                className={`text-lg sm:text-xl font-bold truncate ${
                  showTransparent && !isOpen ? 'text-white' : 'text-gray-800'
                }`}
              >
                {COMPANY.nameAr}
              </span>
              <span
                className={`text-[10px] sm:text-xs truncate ${
                  showTransparent && !isOpen ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                {COMPANY.taglineAr}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary text-white'
                      : showTransparent
                        ? 'hover:bg-white/15 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/quote"
              className="hidden xs:inline-flex sm:inline-flex rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-white"
            >
              {dict.nav.quote}
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className={`p-2.5 rounded-lg transition-colors min-h-11 min-w-11 flex items-center justify-center ${
                iconDark ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1 border-t border-gray-100 bg-white">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl text-base font-medium min-h-12 ${
                      pathname === item.href
                        ? 'bg-primary text-white'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 pt-2 pb-3 grid grid-cols-2 gap-2">
                  <Link
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center min-h-12 rounded-xl bg-whatsapp text-white font-semibold text-sm"
                  >
                    واتساب
                  </Link>
                  <Link
                    href="/quote"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center min-h-12 rounded-xl bg-secondary text-white font-semibold text-sm"
                  >
                    {dict.nav.quote}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
