"use client";

import { motion } from 'framer-motion';

interface InstagramButtonProps {
  locale: string;
  href: string;
  handle: string;
  offsetClass?: string;
  bottomOffset?: number; // pixels from bottom
}

export default function InstagramButton({ locale, href, handle, offsetClass = 'right-6', bottomOffset = 24 }: InstagramButtonProps) {
  const isRtl = locale === 'ar';
  const position = isRtl ? offsetClass.replace('right', 'left') : offsetClass;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on Instagram @${handle}`}
      className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400 text-white shadow-lg hover:opacity-95 transition-all duration-300 ${position}`}
      style={{ bottom: `${bottomOffset}px` }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
    >
      <span className="absolute inset-0 rounded-full opacity-20" />
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current relative z-10">
        <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 17.2C9.34784 17.2 7.2 15.0522 7.2 12.4C7.2 9.74784 9.34784 7.6 12 7.6C14.6522 7.6 16.8 9.74784 16.8 12.4C16.8 15.0522 14.6522 17.2 12 17.2ZM18.2 7.1C17.7392 7.1 17.34 6.7008 17.34 6.24C17.34 5.7792 17.7392 5.38 18.2 5.38C18.6608 5.38 19.06 5.7792 19.06 6.24C19.06 6.7008 18.6608 7.1 18.2 7.1Z" />
      </svg>
    </motion.a>
  );
}
