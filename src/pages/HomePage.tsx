import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { SpeedCalculator } from '@/components/SpeedCalculator';
import { ServicesTeaser } from '@/components/ServicesTeaser';
import { FAQ } from '@/components/FAQ';
import { Language } from '@/lib/translations';

interface HomePageProps {
  language: Language;
}

const HomePage = ({ language }: HomePageProps) => {
  return (
    <>
      <Hero language={language} />
      <Credibility language={language} />
      <ProcessTimeline language={language} />
      <SpeedCalculator language={language} />
      <ServicesTeaser language={language} />
      <FAQ language={language} />
    </>
  );
};

export default HomePage;
