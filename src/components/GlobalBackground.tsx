import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  parallaxFactor?: number;
  scrollY: number;
}

const FloatingShape = ({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-orange-500/20',
  parallaxFactor = 0.1,
  scrollY,
}: ShapeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
      style={{ transform: `translateY(${scrollY * parallaxFactor}px)` }}
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px]',
            'border border-black/5 dark:border-white/10',
            'shadow-[0_8px_32px_0_rgba(255,127,0,0.15)]',
            "after:absolute after:inset-0 after:rounded-full",
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  );
};

export const GlobalBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
    >
      {/* Persistent orange mist glow */}
      <div className="ambient-glow" />

      {/* Floating shapes spread across the viewport */}
      <FloatingShape
        scrollY={scrollY}
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-orange-500/20 dark:from-orange-500/20"
        parallaxFactor={0.08}
        className="left-[-10%] md:left-[-5%] top-[8%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-orange-500/20 dark:from-orange-500/15"
        parallaxFactor={0.15}
        className="right-[-5%] md:right-[0%] top-[55%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        gradient="from-orange-500/25 dark:from-orange-500/20"
        parallaxFactor={0.05}
        className="left-[5%] md:left-[10%] top-[120%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-orange-500/30 dark:from-orange-500/25"
        parallaxFactor={0.12}
        className="right-[15%] md:right-[20%] top-[5%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        gradient="from-orange-500/25 dark:from-orange-500/20"
        parallaxFactor={0.18}
        className="left-[20%] md:left-[25%] top-[35%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={0.8}
        width={400}
        height={100}
        rotate={8}
        gradient="from-orange-500/20 dark:from-orange-500/15"
        parallaxFactor={0.1}
        className="right-[10%] md:right-[15%] top-[90%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={0.9}
        width={250}
        height={70}
        rotate={-12}
        gradient="from-orange-500/25 dark:from-orange-500/20"
        parallaxFactor={0.07}
        className="left-[15%] md:left-[20%] top-[160%]"
      />
      <FloatingShape
        scrollY={scrollY}
        delay={1.0}
        width={350}
        height={90}
        rotate={18}
        gradient="from-orange-500/20 dark:from-orange-500/15"
        parallaxFactor={0.13}
        className="right-[5%] md:right-[8%] top-[195%]"
      />
    </div>
  );
};
