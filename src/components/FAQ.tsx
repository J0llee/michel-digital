import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  language: Language;
}

export const FAQ = ({ language }: FAQProps) => {
  const t = translations.faq;

  return (
    <section className="py-28 bg-transparent">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tighter">
            {t.title[language]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {t.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5 text-base">
                  {item.q[language]}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
