import { Check, Sparkles, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';

interface ServicesTeaserProps {
  language: Language;
}

export const ServicesTeaser = ({ language }: ServicesTeaserProps) => {
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
    <section className="py-24 bg-secondary/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title[language]}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Website Project Card */}
          <motion.div
            variants={cardVariants}
            className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t.website.title[language]}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-primary">{t.website.price}</span>
            </div>
            <p className="text-muted-foreground mb-6">
              {t.website.description[language]}
            </p>
            <ul className="space-y-3">
              {t.website.features[language].slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Maintenance Card */}
          <motion.div
            variants={cardVariants}
            className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t.maintenance.title[language]}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-primary">{t.maintenance.price}</span>
              <span className="text-muted-foreground">{t.maintenance.period[language]}</span>
            </div>
            <p className="text-muted-foreground mb-6">
              {t.maintenance.description[language]}
            </p>
            <ul className="space-y-3">
              {t.maintenance.features[language].slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-4 shadow-lg shadow-primary/25"
          >
            {t.readMore[language]}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
