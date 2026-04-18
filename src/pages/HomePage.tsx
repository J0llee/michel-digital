import { HeroGeometric } from '@/components/ui/shape-landing-hero';
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
      <HeroGeometric />
      <Credibility language={language} />
      <ProcessTimeline language={language} />
      <SpeedCalculator language={language} />
      <ServicesTeaser language={language} />
      <FAQ language={language} />
    </div>
  );
};

export default HomePage;
