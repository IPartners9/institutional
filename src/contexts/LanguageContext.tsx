import React, { createContext, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from '@/utils/translations';
import { languages, defaultLanguage, type Language } from '@/lib/languages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ lang: Language; children: ReactNode }> = ({ lang, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const language: Language = (languages as readonly string[]).includes(lang) ? lang : defaultLanguage;

  // Language is URL-driven: switching locale navigates to the same path under the new prefix.
  const setLanguage = (newLang: Language) => {
    const rest = location.pathname.replace(/^\/(en|pt|es)(?=\/|$)/, '');
    navigate(`/${newLang}${rest || ''}${location.hash || ''}`);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing
        let fallback: any = translations['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
