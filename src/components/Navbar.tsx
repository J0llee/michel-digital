import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, translations } from '@/lib/translations';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = translations.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.home[language] },
    { href: '/services', label: t.services[language] },
    { href: '/references', label: t.references[language] },
    { href: '/about', label: t.about[language] },
    { href: '/contact', label: t.contact[language] },
  ];

  const toggleLanguage = () => {
    onLanguageChange(language === 'fi' ? 'en' : 'fi');
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled
          ? 'glass shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-slate-800 dark:text-slate-100 hover:text-primary hover:bg-foreground/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-6 bg-border mx-2" />

            <ThemeToggle
              className="text-slate-800 dark:text-slate-100 hover:bg-foreground/5"
            />

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-foreground/5 hover:bg-foreground/10 text-slate-800 dark:text-slate-100"
            >
              <Globe className="w-4 h-4" />
              {language === 'fi' ? 'EN' : 'FI'}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle className="text-foreground" />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-foreground/5 text-sm font-semibold"
            >
              <Globe className="w-4 h-4 text-primary" />
              {language === 'fi' ? 'EN' : 'FI'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled || location.pathname !== '/'
                  ? 'text-foreground'
                  : 'text-primary-foreground'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-1 glass rounded-2xl p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
