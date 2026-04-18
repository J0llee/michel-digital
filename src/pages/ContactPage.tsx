import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface ContactPageProps {
  language: Language;
}

const cardSpring = { type: 'spring' as const, stiffness: 280, damping: 22 };

const ContactPage = ({ language }: ContactPageProps) => {
  const t = translations.about.contact;

  const cards = [
    {
      icon: Mail,
      label: language === 'fi' ? 'Sähköposti' : 'Email',
      value: t.email,
      href: `mailto:${t.email}`,
    },
    {
      icon: Phone,
      label: language === 'fi' ? 'Puhelin' : 'Phone',
      value: t.phone[language],
      href: `tel:${t.phone[language]}`,
    },
    {
      icon: MapPin,
      label: language === 'fi' ? 'Osoite' : 'Address',
      value: t.address,
      href: undefined,
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen mesh-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
            {t.title[language]}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.subtitle[language]}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <div className="glass-card rounded-3xl p-7 h-full flex flex-col group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  {card.label}
                </p>
                <p className="text-foreground font-bold text-lg leading-snug break-words whitespace-pre-line">
                  {card.value}
                </p>
              </div>
            );
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, transition: cardSpring }}
              >
                {card.href ? (
                  <a href={card.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-3 overflow-hidden">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Maaherrankatu+26,+50100+Mikkeli&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Michel Media Location"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
