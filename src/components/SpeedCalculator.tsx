import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language, translations } from '@/lib/translations';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SpeedCalculatorProps {
  language: Language;
}

const labels = {
  title: { fi: 'Nopeuslaskuri', en: 'Speed ROI Calculator' },
  subtitle: {
    fi: 'Laske kuinka paljon hidas sivusto maksaa sinulle.',
    en: 'Calculate how much a slow website is costing you.',
  },
  visitors: { fi: 'Kävijämäärä / kk', en: 'Monthly Visitors' },
  value: { fi: 'Keskikaupan arvo (€)', en: 'Average Order Value (€)' },
  conversion: { fi: 'Nykyinen konversio (%)', en: 'Current Conversion Rate (%)' },
  speed: { fi: 'Sivuston latausnopeus', en: 'Website Load Speed' },
  speedOptions: {
    '1': { fi: 'Alle 1s', en: '< 1s' },
    '2': { fi: '1-3s', en: '1-3s' },
    '3': { fi: '3-5s', en: '3-5s' },
    '4': { fi: 'Yli 5s', en: '> 5s' },
  },
  resultPrefix: {
    fi: 'Menetät arviolta',
    en: 'You are losing an estimated',
  },
  resultSuffix: {
    fi: 'kuukaudessa hitaan latausajan vuoksi.',
    en: 'per month due to slow load times.',
  },
  cta: { fi: 'Nopeutetaan sivustosi', en: 'Speed up your site' },
};

export const SpeedCalculator = ({ language }: SpeedCalculatorProps) => {
  const [visitors, setVisitors] = useState<number | string>(10000);
  const [value, setValue] = useState<number | string>(50);
  const [conversion, setConversion] = useState<number | string>(2);
  const [speed, setSpeed] = useState('2');

  const numVisitors = visitors === '' ? 0 : Number(visitors);
  const numValue = value === '' ? 0 : Number(value);
  const numConversion = conversion === '' ? 0 : Number(conversion);

  const konversioDecimal = numConversion / 100;
  let multiplier = 0;
  if (speed === '2') multiplier = 0.32;
  if (speed === '3') multiplier = 0.90;
  if (speed === '4') multiplier = 1.23;
  const currentRevenue = numVisitors * konversioDecimal * numValue;
  const lostRevenue = Math.round(currentRevenue * multiplier);

  const handleChange = (setter: (v: number | string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === '') {
      setter('');
    } else {
      setter(Number(raw));
    }
  };

  return (
    <section className="py-28 mesh-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tighter">
            {labels.title[language]}
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            {labels.subtitle[language]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/8 rounded-full blur-3xl" />

          <div className="relative z-10 grid sm:grid-cols-2 gap-5 mb-8">
            <div className="space-y-2">
              <Label className="text-sm font-bold text-foreground">{labels.visitors[language]}</Label>
              <Input
                type="number"
                min={0}
                value={visitors}
                onChange={handleChange(setVisitors)}
                className="glass rounded-xl border-border/40 bg-background/50 focus:bg-background/80 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-foreground">{labels.value[language]}</Label>
              <Input
                type="number"
                min={0}
                value={value}
                onChange={handleChange(setValue)}
                className="glass rounded-xl border-border/40 bg-background/50 focus:bg-background/80 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-foreground">{labels.conversion[language]}</Label>
              <Input
                type="number"
                min={0}
                max={100}
                step={0.1}
                value={conversion}
                onChange={handleChange(setConversion)}
                className="glass rounded-xl border-border/40 bg-background/50 focus:bg-background/80 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-foreground">{labels.speed[language]}</Label>
              <Select value={speed} onValueChange={setSpeed}>
                <SelectTrigger className="glass rounded-xl border-border/40 bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(['1', '2', '3', '4'] as const).map((v) => (
                    <SelectItem key={v} value={v}>
                      {labels.speedOptions[v][language]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <motion.div
            key={lostRevenue}
            initial={{ scale: 0.97, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-2xl bg-primary/5 border border-primary/15 p-6 text-center"
          >
            {lostRevenue > 0 ? (
              <>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Gauge className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    {language === 'fi' ? 'Tulos' : 'Result'}
                  </span>
                </div>
                <p className="text-foreground text-lg">
                  {labels.resultPrefix[language]}{' '}
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">
                    {lostRevenue.toLocaleString('fi-FI')} €
                  </span>{' '}
                  {labels.resultSuffix[language]}
                </p>
                <Link
                  to="/about"
                  className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-card-hover transition-all duration-300 group"
                >
                  {labels.cta[language]}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </>
            ) : (
              <p className="text-foreground font-bold">
                {language === 'fi'
                  ? 'Hienoa! Sivustosi nopeus ei hidasta myyntiäsi. 🚀'
                  : 'Great! Your site speed isn\'t slowing down your sales. 🚀'}
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Fact Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {translations.speedCalc.factBox[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
