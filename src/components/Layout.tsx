import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GlobalBackground } from '@/components/GlobalBackground';
import { Language } from '@/lib/translations';

interface LayoutProps {
  children: ReactNode;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Layout = ({ children, language, onLanguageChange }: LayoutProps) => {
  return (
    <main className="relative min-h-screen bg-background">
      <GlobalBackground />
      <div className="relative z-10">
        <Navbar language={language} onLanguageChange={onLanguageChange} />
        {children}
        <Footer language={language} />
      </div>
    </main>
  );
};
