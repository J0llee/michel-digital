import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Language } from '@/lib/translations';

interface LayoutProps {
  children: ReactNode;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Layout = ({ children, language, onLanguageChange }: LayoutProps) => {
  return (
    <main className="min-h-screen">
      <Navbar language={language} onLanguageChange={onLanguageChange} />
      {children}
      <Footer language={language} />
    </main>
  );
};
