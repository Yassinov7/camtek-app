'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  const otherLabel = locale === 'ar' ? 'EN' : 'عربي';

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  const newPath = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <Link
      href={newPath}
      className="px-3 py-1.5 text-sm font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
    >
      {otherLabel}
    </Link>
  );
}
