import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { ServicesTeaser } from '@/components/ServicesTeaser';
import { ProjectInquiryForm } from '@/components/ProjectInquiryForm';
import { Language } from '@/lib/translations';

interface HomePageProps {
  language: Language;
}

const formTranslations = {
  title: {
    fi: 'Pyydä ilmainen arvio projektistasi',
    en: 'Request a free project estimate',
  },
};

const HomePage = ({ language }: HomePageProps) => {
  return (
    <>
      <Hero language={language} />
      
      {/* Credibility Section - Moved up */}
      <Credibility language={language} />

      {/* Project Inquiry Form Section - Moved down */}
      <section className="py-20 bg-accent/30">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {formTranslations.title[language]}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <ProjectInquiryForm language={language} />
          </motion.div>
        </div>
      </section>

      {/* Services Teaser */}
      <ServicesTeaser language={language} />
    </>
  );
};

export default HomePage;
