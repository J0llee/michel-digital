import { Check, Sparkles, Wrench, PenTool, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';

interface ServicesTeaserProps {
  language: Language;
}

const cardSpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
};

export const ServicesTeaser = ({ language }: ServicesTeaserProps) => {
  const t = translations.services;

  return (
    <section className="py-28 mesh-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tighter">
            {t.title[language]}
          </h2>
        </motion.div>

        {/* Bento Grid - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {/* Website - Primary / Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, transition: cardSpring }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full w-fit mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {t.website.keyPoint[language]}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3 tracking-tight">
                {t.website.title[language]}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.website.description[language]}
              </p>
              <ul className="space-y-2.5 mb-8">
                {t.website.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group/btn"
                >
                  {t.website.price[language]}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Modifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: cardSpring }}
            className="glass-card rounded-3xl p-7 flex flex-col group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <PenTool className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-extrabold text-foreground mb-1 tracking-tight">
              {t.modifications.title[language]}
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl font-extrabold text-primary">{t.modifications.price[language]}</span>
              <span className="text-muted-foreground text-sm font-medium">{t.modifications.period[language]}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t.modifications.description[language]}
            </p>
            <ul className="space-y-2 mb-5">
              {t.modifications.features[language].slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group/btn"
              >
                {t.website.price[language]}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: cardSpring }}
            className="glass-card rounded-3xl p-7 flex flex-col group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-extrabold text-foreground mb-1 tracking-tight">
              {t.maintenance.title[language]}
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl font-extrabold text-primary">{t.maintenance.price[language]}</span>
              <span className="text-muted-foreground text-sm font-medium">{t.maintenance.period[language]}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t.maintenance.description[language]}
            </p>
            <ul className="space-y-2 mb-5">
              {t.maintenance.features[language].slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group/btn"
              >
                {t.website.price[language]}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Inline text link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
          >
            {t.readMore[language]}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
