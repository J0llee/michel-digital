import { Check, Sparkles, Wrench, PenTool, Clock, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';

interface ServicesPageProps {
  language: Language;
}

const cardSpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
};

const ServicesPage = ({ language }: ServicesPageProps) => {
  const t = translations.services;

  return (
    <section className="pt-32 pb-24 min-h-screen mesh-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tighter">
            {t.title[language]}
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Website Project - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, transition: cardSpring }}
            className="md:col-span-2 glass-card rounded-3xl p-10 relative overflow-hidden group"
          >
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:gap-12">
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">
                      {t.website.keyPoint[language]}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight">
                  {t.website.title[language]}
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.website.detailedDescription[language]}
                </p>

                <div className="mt-auto">
                  <Link
                    to="/about"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-card-hover transition-all duration-300"
                  >
                    {t.website.price[language]}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 mt-8 md:mt-0 md:border-l md:border-border/50 md:pl-12 flex flex-col justify-center">
                <h3 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                  {language === 'fi' ? 'Sisältää' : 'Includes'}
                </h3>
                <div className="grid gap-3">
                  {t.website.features[language].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: cardSpring }}
            className="glass-card rounded-3xl p-8 flex flex-col group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
            </div>

            <h2 className="text-xl font-extrabold text-foreground mb-2 tracking-tight">
              {t.modifications.title[language]}
            </h2>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-extrabold text-primary">{t.modifications.price[language]}</span>
              <span className="text-muted-foreground font-medium">{t.modifications.period[language]}</span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.modifications.detailedDescription[language]}
            </p>

            <div className="border-t border-border/50 pt-5 mb-6">
              <ul className="space-y-2.5">
                {t.modifications.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group/btn"
              >
                {t.website.price[language]}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Maintenance Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: cardSpring }}
            className="glass-card rounded-3xl p-8 flex flex-col group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary">
                  {t.maintenance.keyPoint[language]}
                </span>
              </div>
            </div>

            <h2 className="text-xl font-extrabold text-foreground mb-2 tracking-tight">
              {t.maintenance.title[language]}
            </h2>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-extrabold text-primary">{t.maintenance.price[language]}</span>
              <span className="text-muted-foreground font-medium">{t.maintenance.period[language]}</span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.maintenance.detailedDescription[language]}
            </p>

            <div className="border-t border-border/50 pt-5 mb-6">
              <ul className="space-y-2.5">
                {t.maintenance.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group/btn"
              >
                {t.website.price[language]}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-20 glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
              {t.cta.title[language]}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              {t.cta.description[language]}
            </p>

            <a
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-bold hover:shadow-card-hover transition-all duration-300 mb-6"
              href="mailto:info@michelmedia.fi"
            >
              <Mail className="w-5 h-5" />
              info@michelmedia.fi
            </a>

            <p className="text-muted-foreground mb-4 text-sm">
              {t.cta.teamLabel[language]}
            </p>

            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
              {t.cta.teamLink[language]}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
