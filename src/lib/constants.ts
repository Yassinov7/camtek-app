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
  yearsOfExperience: 10,
};

export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: COMPANY.instagramPrimaryUrl, handle: COMPANY.instagramPrimary },
  { name: 'Instagram', url: COMPANY.instagramSecondaryUrl, handle: COMPANY.instagramSecondary },
] as const;

export const DEVELOPER = {
  name: 'mhmmdyassine',
  role: 'Software Engineer',
  phone: '+963935787445',
  instagram: 'mhmmdyassine',
  instagramUrl: 'https://instagram.com/mhmmdyassine',
};
