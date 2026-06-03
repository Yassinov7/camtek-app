export const COMPANY = {
  name: 'CamTek',
  nameAr: 'كامتيك',
  tagline: 'Security Solutions',
  taglineAr: 'حلول أمنية',
  phone: '+965 55222997',
  whatsapp: '+965 55222997',
  whatsappLink: 'https://wa.me/96555222997',
  email: 'info@camtek.kw',
  instagram: 'camtek.ku',
  instagramUrl: 'https://instagram.com/camtek.ku',
  location: 'Kuwait',
  locationAr: 'الكويت',
  yearsOfExperience: 10,
};

export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'quote', href: '/quote' },
  { key: 'contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: COMPANY.instagramUrl, icon: 'Instagram' },
] as const;
