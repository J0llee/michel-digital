import { Clock, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '@/lib/translations';

interface ReferencesPageProps {
  language: Language;
}

const ReferencesPage = ({ language }: ReferencesPageProps) => {
  const t = translations.references;

  return (
    <section className="pt-32 pb-24 min-h-screen mesh-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tighter">
            {t.title[language]}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-14 text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

            {/* Decorative elements */}
            <div className="absolute top-6 left-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary/50" />
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary/50" />
              </div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-2xl flex items-center justify-center"
            >
              <span className="text-4xl">🚀</span>
            </motion.div>

            <h2 className="text-3xl font-extrabold text-foreground mb-4 tracking-tight">
              {t.comingSoon[language]}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
              {t.description[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesPage;