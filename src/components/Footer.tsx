import { Heart, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '@/lib/translations';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Michel <span className="text-primary">Digital</span>
            </h3>
            <p className="text-background/70 max-w-sm">
              {language === 'fi'
                ? 'Moderneja verkkosivuja paikallisella otteella.'
                : 'Modern websites with a local touch.'}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.contact[language]}</h4>
            <div className="space-y-3 text-background/70">
              <a
                href="mailto:hello@micheldigital.fi"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@micheldigital.fi
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                Mikkeli, Finland
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Michel Digital. {t.rights[language]}
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            {t.madeWith[language]} <Heart className="w-4 h-4 text-primary" /> {t.inMikkeli[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};
