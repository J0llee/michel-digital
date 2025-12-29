import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { ServicesTeaser } from '@/components/ServicesTeaser';
import { ProjectInquiryForm } from '@/components/ProjectInquiryForm';
import { Language, translations } from '@/lib/translations';

interface HomePageProps {
  language: Language;
}

const HomePage = ({ language }: HomePageProps) => {
  const t = translations.form;

  return (
    <>
      <Hero language={language} />
      
      {/* Inquiry Form Section */}
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
              {t.sectionTitle[language]}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <ProjectInquiryForm language={language} />
          </motion.div>
        </div>
      </section>

      <Credibility language={language} />
      <ServicesTeaser language={language} />
    </>
  );
};

export default HomePage;
