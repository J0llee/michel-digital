import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { ServicesTeaser } from '@/components/ServicesTeaser';
import { Language } from '@/lib/translations';

interface HomePageProps {
  language: Language;
}

const HomePage = ({ language }: HomePageProps) => {
  return (
    <>
      <Hero language={language} />
      
      {/* Credibility Section */}
      <Credibility language={language} />

      {/* Services Teaser */}
      <ServicesTeaser language={language} />
    </>
  );
};

export default HomePage;
