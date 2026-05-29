export const languages = ['en', 'pt', 'es'] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = 'en';

export const SITE_URL = 'https://ipanemainstitutional.com';

export function isLanguage(value: string | undefined): value is Language {
  return !!value && (languages as readonly string[]).includes(value);
}
