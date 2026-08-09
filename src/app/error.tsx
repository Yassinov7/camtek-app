'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-24">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">صار خطأ غير متوقع</h1>
        <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
          حاول مرة ثانية. إذا المشكلة استمرت، تواصل معنا على واتساب ونساعدك مباشرة.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center min-h-12 rounded-lg bg-primary px-6 py-3 text-white font-semibold"
          >
            إعادة المحاولة
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-12 rounded-lg border border-gray-300 px-6 py-3 text-gray-800 font-semibold"
          >
            الرئيسية
          </Link>
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-12 rounded-lg bg-whatsapp px-6 py-3 text-white font-semibold"
          >
            واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
