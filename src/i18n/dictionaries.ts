import 'server-only';

const dictionaries = {
  en: () => import('@/messages/en.json').then((m) => m.default),
  ar: () => import('@/messages/ar.json').then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const hasLocale = (locale: string): locale is keyof typeof dictionaries =>
  locale in dictionaries;

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
