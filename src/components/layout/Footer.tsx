import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, NAV_LINKS, SOCIAL_LINKS, DEVELOPER } from '@/lib/constants';
import { services, type ServiceId } from '@/data/services';
import type { Dictionary } from '@/i18n/dictionaries';

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = NAV_LINKS.map((link) => ({
    href: link.href,
    label: dict.nav[link.key as keyof typeof dict.nav],
  }));

  const serviceLinks = services.map((service) => {
    const entry = dict.services[service.id as ServiceId];
    return {
      href: `/services/${service.id}`,
      label: entry.title,
    };
  });

  const contactMethods = [
    { label: dict.contact.info.phone, value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { label: dict.contact.info.whatsapp, value: COMPANY.whatsapp, href: COMPANY.whatsappLink },
    { label: 'Instagram', value: `@${COMPANY.instagramPrimary}`, href: COMPANY.instagramPrimaryUrl },
    { label: 'Instagram', value: `@${COMPANY.instagramSecondary}`, href: COMPANY.instagramSecondaryUrl },
    { label: dict.contact.info.location, value: COMPANY.locationAr, href: COMPANY.mapSearchUrl },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10 rounded-3xl border border-white/10 bg-gradient-to-r from-primary/15 via-white/5 to-primary/10 p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">CamTek</p>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">حلول أمنية احترافية في الكويت</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition-all"
              >
                واتساب الآن
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt={COMPANY.nameAr}
                width={52}
                height={52}
                className="h-12 w-12 rounded-xl object-cover ring-2 ring-white/10"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{COMPANY.nameAr}</h3>
                <p className="text-xs text-slate-400">{COMPANY.taglineAr}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">{dict.footer.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{dict.footer.ourServices}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{dict.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              {contactMethods.map((item) => (
                <li key={`${item.label}-${item.value}`}>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
                    <span className="font-medium text-slate-400">{item.label}:</span> {item.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-white">{dict.footer.followUs}</h4>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-primary hover:ring-primary"
                    aria-label={`انستغرام ${s.handle}`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {currentYear} {COMPANY.nameAr}. {dict.footer.rights}.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            {dict.footer.developerLinkText}{' '}
            <a href={DEVELOPER.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
              @{DEVELOPER.instagram}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
