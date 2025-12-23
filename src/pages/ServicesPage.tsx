import { Check, Sparkles, Wrench, Clock, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';

interface ServicesPageProps {
  language: Language;
}

const ServicesPage = ({ language }: ServicesPageProps) => {
  const t = translations.services;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title[language]}
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Website Project Card */}
          <motion.div
            variants={cardVariants}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  {t.website.keyPoint[language]}
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t.website.title[language]}
            </h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-primary">{t.website.price}</span>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {t.website.detailedDescription[language]}
            </p>
            
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-foreground mb-4">
                {language === 'fi' ? 'Sisältää:' : 'Includes:'}
              </h3>
              <ul className="space-y-3">
                {t.website.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Maintenance Card */}
          <motion.div
            variants={cardVariants}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  {t.maintenance.keyPoint[language]}
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t.maintenance.title[language]}
            </h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-primary">{t.maintenance.price}</span>
              <span className="text-muted-foreground text-lg">{t.maintenance.period[language]}</span>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {t.maintenance.detailedDescription[language]}
            </p>
            
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-foreground mb-4">
                {language === 'fi' ? 'Sisältää:' : 'Includes:'}
              </h3>
              <ul className="space-y-3">
                {t.maintenance.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-16 bg-accent/30 rounded-2xl p-8 md:p-12 text-center border border-border"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.cta.title[language]}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t.cta.description[language]}
          </p>
          
          <a
            href="mailto:hello@micheldigital.fi"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors mb-6"
          >
            <Mail className="w-5 h-5" />
            hello@micheldigital.fi
          </a>
          
          <p className="text-muted-foreground mb-4">
            {t.cta.teamLabel[language]}
          </p>
          
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {t.cta.teamLink[language]}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
