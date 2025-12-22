import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { References } from '@/components/References';
import { Team } from '@/components/Team';
import { Footer } from '@/components/Footer';
import { Language } from '@/lib/translations';

const Index = () => {
  const [language, setLanguage] = useState<Language>('fi');

  return (
    <main className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <References language={language} />
      <Team language={language} />
      <Footer language={language} />
    </main>
  );
};

export default Index;
