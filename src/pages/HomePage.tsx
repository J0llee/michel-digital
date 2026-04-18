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
    <div className="bg-background mesh-gradient">
      <Hero language={language} />
      <Credibility language={language} />
      <ProcessTimeline language={language} />
      <SpeedCalculator language={language} />
      <ServicesTeaser language={language} />
      <FAQ language={language} />
    </div>
  );
};

export default HomePage;
