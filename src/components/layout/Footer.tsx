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

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt={COMPANY.nameAr}
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{COMPANY.nameAr}</h3>
                <p className="text-xs text-gray-400">{COMPANY.taglineAr}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{dict.footer.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{dict.footer.ourServices}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{dict.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsappLink} className="hover:text-white transition-colors">
                  واتساب: {COMPANY.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li>{COMPANY.locationAr}</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">{dict.footer.followUs}</h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={`انستغرام ${s.handle}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} {COMPANY.nameAr}. {dict.footer.rights}.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {dict.footer.developerLinkText}{' '}
            <a
              href={DEVELOPER.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @{DEVELOPER.instagram}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
