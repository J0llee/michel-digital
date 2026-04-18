import { motion } from 'framer-motion';
import { ArrowRight, Gift, Users, Code2, Rocket } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface ProcessTimelineProps {
  language: Language;
}

const icons = [Gift, Users, Code2, Rocket];

export const ProcessTimeline = ({ language }: ProcessTimelineProps) => {
  const t = translations.process;

  return (
    <section className="py-28 bg-transparent">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tighter">
            {t.title[language]}
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal */}
          <div className="hidden md:flex items-start justify-between gap-2">
            {t.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex items-start flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex-1 text-center"
                  >
                    <div className="glass-card rounded-3xl p-6 mb-4 relative group hover:shadow-card-hover transition-shadow duration-300">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-extrabold">
                        {i + 1}
                      </div>
                      <h3 className="font-extrabold text-foreground mb-2 tracking-tight">
                        {step.title[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description[language]}
                      </p>
                    </div>
                  </motion.div>
                  {i < t.steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                      className="flex items-center pt-16 px-1"
                    >
                      <ArrowRight className="w-6 h-6 text-primary/40" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-4">
            {t.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5 flex items-start gap-4 relative"
                >
                  <div className="absolute -top-2 -left-2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-extrabold">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-foreground mb-1 tracking-tight">
                      {step.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description[language]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
