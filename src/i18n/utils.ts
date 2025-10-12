import en from './en.json';
import es from './es.json';
import de from './de.json';

export const languages = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
};

export const defaultLang = 'en';

const translations = {
  en,
  es,
  de,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
