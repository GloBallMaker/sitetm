import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang } from '@/data/content';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (uk: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('uk');

  useEffect(() => {
    const stored = localStorage.getItem('tm-lang') as Lang | null;
    if (stored === 'uk' || stored === 'en') {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('tm-lang', lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (uk: string, en: string) => (lang === 'uk' ? uk : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
