import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-8">
          عذراً، لم نتمكن من العثور على الصفحة المطلوبة. يمكنك العودة للرئيسية أو طلب عرض سعر.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-12 rounded-lg bg-primary px-6 py-3 text-white font-semibold"
          >
            الرئيسية
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center min-h-12 rounded-lg bg-secondary px-6 py-3 text-white font-semibold"
          >
            طلب عرض سعر
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
