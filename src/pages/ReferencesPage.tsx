import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '@/lib/translations';
import gasthausImg from '@/assets/gasthaus.jpg';

interface ReferencesPageProps {
  language: Language;
}

const references = [
  {
    title: 'Gasthaus Mikkeli',
    description: {
      fi: 'Moderni ja kutsuva verkkosivusto perinteikkäälle mikkeliläiselle majoituspalvelulle. Toteutettu nopealla toimitusajalla ja optimoitu sujuvaan asiakaskokemukseen.',
      en: 'A modern and inviting website for a traditional local accommodation service. Delivered quickly and optimized for a seamless customer experience.',
    },
    image: gasthausImg,
    url: 'https://gasthausmikkeli.fi',
    tags: { fi: ['Verkkosivut', 'Majoitus', 'Mikkeli'], en: ['Website', 'Accommodation', 'Mikkeli'] },
  },
];

const ReferencesPage = ({ language }: ReferencesPageProps) => {
  const t = translations.references;
  const visitLabel = language === 'fi' ? 'Vieraile sivustolla' : 'Visit Website';

  return (
    <section className="pt-32 pb-24 min-h-screen mesh-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tighter">
            {t.title[language]}
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {language === 'fi'
              ? 'Esimerkkejä työmme laadusta:'
              : 'Examples of the quality of our work:'}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="max-w-4xl mx-auto grid gap-8">
          {references.map((ref, i) => (
            <motion.div
              key={ref.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl overflow-hidden relative group"
            >
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/8 rounded-full blur-3xl" />

              <div className="md:flex">
                {/* Browser Mockup */}
                <div className="md:w-3/5 p-5 pb-0 md:pb-5 md:pr-0">
                  <div className="rounded-2xl overflow-hidden border border-border/30 bg-muted/30">
                    {/* Browser top bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-muted/50 border-b border-border/20">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                      <span className="ml-3 text-[10px] text-muted-foreground/50 font-mono truncate">
                        gasthausmikkeli.fi
                      </span>
                    </div>
                    {/* Image */}
                    <div className="overflow-hidden">
                      <motion.img
                        src={ref.image}
                        alt={ref.title}
                        className="w-full h-auto object-cover transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-center relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ref.tags[language].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
                    {ref.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {ref.description[language]}
                  </p>

                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group/btn w-fit"
                  >
                    {visitLabel}
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesPage;
