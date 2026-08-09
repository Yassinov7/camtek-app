export const COMPANY = {
  name: 'CamTek',
  nameAr: 'كامتيك',
  tagline: 'Security Solutions',
  taglineAr: 'حلول أمنية',
  phone: '+965 55222997',
  whatsapp: '+965 55222997',
  whatsappLink: 'https://wa.me/96555222997',
  email: 'info@camtek.kw',
  instagramPrimary: 's.h.s.cctv',
  instagramPrimaryUrl: 'https://instagram.com/s.h.s.cctv',
  instagramSecondary: 'camtek.ku',
  instagramSecondaryUrl: 'https://instagram.com/camtek.ku',
  location: 'Kuwait',
  locationAr: 'الكويت',
  /** Service coverage — update street address when you have a fixed shop pin */
  addressLocalityAr: 'الكويت',
  addressCountry: 'KW',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Kuwait&hl=ar&z=10&output=embed',
  mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Kuwait',
  serviceAreas: [
    'العاصمة',
    'حولي',
    'الفروانية',
    'الجهراء',
    'الأحمدي',
    'مبارك الكبير',
  ],
  yearsOfExperience: 10,
  openingHoursAr: 'السبت - الخميس: 8 صباحاً - 8 مساءً',
  openingHoursSpec: {
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'] as const,
    opens: '08:00',
    closes: '20:00',
  },
};

export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'faq', href: '/faq' },
  { key: 'quote', href: '/quote' },
  { key: 'contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: COMPANY.instagramPrimaryUrl, handle: COMPANY.instagramPrimary },
  { name: 'Instagram', url: COMPANY.instagramSecondaryUrl, handle: COMPANY.instagramSecondary },
] as const;

export const DEVELOPER = {
  name: 'mhmmdyassine',
  role: 'مهندس برمجيات',
  phone: '+963935787445',
  instagram: 'mhmmdyassine',
  instagramUrl: 'https://instagram.com/mhmmdyassine',
};
