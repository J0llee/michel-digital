import { Clock, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '@/lib/translations';

interface ReferencesProps {
  language: Language;
}

export const References = ({ language }: ReferencesProps) => {
  const t = translations.references;

  return (
    <section id="references" className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title[language]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-accent to-secondary rounded-3xl p-12 text-center border-2 border-dashed border-primary/20">
            {/* Decorative elements */}
            <div className="absolute top-6 left-6">
              <Clock className="w-8 h-8 text-primary/40" />
            </div>
            <div className="absolute bottom-6 right-6">
              <Code className="w-8 h-8 text-primary/40" />
            </div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <span className="text-4xl">🚀</span>
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t.comingSoon[language]}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.description[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
