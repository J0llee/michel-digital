import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface CredibilityProps {
  language: Language;
}

export const Credibility = ({ language }: CredibilityProps) => {
  const t = translations.credibility;

  return (
    <section className="py-16 bg-[hsl(var(--credibility))]">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
              {t.stat[language]}
            </p>
            
            <p className="text-sm text-muted-foreground">
              {t.source[language]}: <span className="font-medium">{t.citation}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
