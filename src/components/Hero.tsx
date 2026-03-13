import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';
import heroBg from '@/assets/hero-bg.png';
import { useRef } from 'react';

interface HeroProps {
  language: Language;
}

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.1 + i * 0.04,
      duration: 0.6,
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  }),
};

export const Hero = ({ language }: HeroProps) => {
  const t = translations.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const headlineWords = t.headline[language].split(' ');

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark vignette overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"
      />

      {/* Radial glow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(28_89%_55%/0.1)_0%,_transparent_60%)]" />

      <motion.div style={{ y: contentY }} className="container relative z-10 px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Staggered word-reveal headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-8 tracking-tighter">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 80 }}
            className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
          >
            {t.subtext[language]}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 120 }}
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-card-hover transition-all duration-300 shadow-xl"
            >
              {t.cta[language]}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};