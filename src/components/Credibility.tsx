import { motion } from 'framer-motion';
import { Language, translations } from '@/lib/translations';

interface CredibilityProps {
  language: Language;
}

export const Credibility = ({ language }: CredibilityProps) => {
  const t = translations.credibility;

  return (
    <section className="py-24 bg-transparent">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-10 md:p-14">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {/* Large decorative quote mark */}
            <div className="absolute -top-4 left-10">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">"</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-8 tracking-tight">
              {t.stat[language]}
            </p>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                {t.source[language]} · {t.citation}
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};