"use client";

import { motion } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/20",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
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
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px]",
            "border border-black/5 dark:border-white/10",
            "shadow-[0_8px_32px_0_rgba(255,127,0,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  paragraph?: string;
  ctaLabel?: string;
}

function HeroGeometric({
  badge = "Michel Media | Modernia digiosaamista",
  title1 = "Verkkosivut, jotka",
  title2 = "skaalaavat liiketoimintaasi.",
  paragraph = "Suomalaista digiosaamista – Modernit verkkosivut ja yksilöllinen palvelu.",
  ctaLabel = "Ota yhteyttä",
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fcfcfc] dark:bg-[#030303]"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
      }}
    >
      {/* Ambient orange glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl" />

      {/* Floating elegant shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-orange-500/20 dark:from-orange-500/20"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-orange-500/20 dark:from-orange-500/15"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-orange-500/25 dark:from-orange-500/20"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-orange-500/30 dark:from-orange-500/25"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-orange-500/25 dark:from-orange-500/20"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tighter leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent",
                  "bg-gradient-to-r from-primary via-primary to-primary/70"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-800 dark:text-slate-100 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              {paragraph}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                to="/contact#kontakt"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-full",
                  "bg-orange-500 text-white font-semibold text-base",
                  "shadow-[0_10px_40px_-5px_rgba(249,115,22,0.6)]",
                  "hover:bg-orange-600 hover:shadow-[0_15px_50px_-5px_rgba(249,115,22,0.7)]",
                  "transition-colors duration-300"
                )}
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { HeroGeometric };
