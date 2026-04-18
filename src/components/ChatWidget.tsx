import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowLeft, ArrowRight, Send, Copy, Check } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { Textarea } from '@/components/ui/textarea';

interface ChatWidgetProps {
  language: Language;
}

const TOTAL_STEPS = 4;

export const ChatWidget = ({ language }: ChatWidgetProps) => {
  const t = translations.chat;
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0..3 questions, 4 = success
  const [answers, setAnswers] = useState<string[]>(['', '', '', '']);
  const [copied, setCopied] = useState(false);

  const setAnswer = (idx: number, value: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  const buildEmailBody = () => {
    const labels = t.emailLabels;
    const lines = [
      labels.intro[language],
      '',
      `${labels.solution[language]}: ${answers[0] || '-'}`,
      `${labels.scope[language]}: ${answers[1] || '-'}`,
      `${labels.timeline[language]}: ${answers[2] || '-'}`,
      '',
      `${labels.details[language]}:`,
      answers[3] || '-',
    ];
    return lines.join('\n');
  };

  const handleSubmit = () => {
    const body = buildEmailBody();
    const subject =
      language === 'fi'
        ? 'Tarjouspyyntö: Verkkosivuprojekti'
        : 'Quote request: Website project';
    window.location.href = `mailto:info@michelmedia.fi?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStep(TOTAL_STEPS);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildEmailBody());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers(['', '', '', '']);
    setCopied(false);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(reset, 300);
  };

  const handleOptionPick = (value: string) => {
    setAnswer(step, value);
    setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)), 150);
  };

  const currentQuestion = step < TOTAL_STEPS ? t.steps[step] : null;
  const isTextStep = step === 3;
  const canGoNext = isTextStep ? true : !!answers[step];

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.triggerLabel[language]}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:shadow-card-hover transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm glass rounded-2xl overflow-hidden shadow-xl border border-border/50"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border/40 flex items-start justify-between bg-primary/5">
              <div>
                <h3 className="font-extrabold text-foreground tracking-tight">
                  {t.title[language]}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {step < TOTAL_STEPS
                    ? `${t.step[language]} ${step + 1} ${t.of[language]} ${TOTAL_STEPS}`
                    : t.subtitle[language]}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg hover:bg-foreground/5 text-muted-foreground transition-colors"
                aria-label={t.close[language]}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            {step < TOTAL_STEPS && (
              <div className="h-1 bg-border/40">
                <motion.div
                  className="h-full bg-primary"
                  initial={false}
                  animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />
              </div>
            )}

            {/* Body */}
            <div className="p-5 min-h-[280px] max-h-[60vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {currentQuestion && (
                  <motion.div
                    key={`q-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-sm font-bold text-foreground mb-4">
                      {currentQuestion.question[language]}
                    </p>

                    {!isTextStep && 'options' in currentQuestion && (
                      <div className="space-y-2">
                        {currentQuestion.options.map((opt) => {
                          const label = opt[language];
                          const selected = answers[step] === label;
                          return (
                            <button
                              key={label}
                              onClick={() => handleOptionPick(label)}
                              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                                selected
                                  ? 'bg-primary text-primary-foreground border-primary'
                                  : 'bg-background/40 text-foreground border-border/40 hover:border-primary/50 hover:bg-primary/5'
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {isTextStep && 'placeholder' in currentQuestion && (
                      <Textarea
                        value={answers[3]}
                        onChange={(e) => setAnswer(3, e.target.value)}
                        placeholder={currentQuestion.placeholder[language]}
                        className="min-h-[140px] rounded-xl bg-background/50 border-border/40 resize-none"
                      />
                    )}
                  </motion.div>
                )}

                {step === TOTAL_STEPS && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-5">
                      <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Check className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-extrabold text-foreground tracking-tight">
                        {t.successTitle[language]}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t.successText[language]}
                      </p>
                    </div>

                    <div className="border-t border-border/40 pt-4">
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                        {t.fallbackText[language]}
                      </p>
                      <Textarea
                        readOnly
                        value={buildEmailBody()}
                        className="min-h-[120px] text-xs rounded-xl bg-background/50 border-border/40 font-mono resize-none"
                      />
                      <button
                        onClick={handleCopy}
                        className={`mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                          copied
                            ? 'bg-green-500 text-white'
                            : 'bg-primary text-primary-foreground hover:shadow-card-hover'
                        }`}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? t.copied[language] : t.copy[language]}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer nav */}
            {step < TOTAL_STEPS && (
              <div className="px-5 py-3 border-t border-border/40 flex items-center justify-between bg-background/30">
                <button
                  onClick={() => setStep((s) => Math.max(s - 1, 0))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.back[language]}
                </button>

                {isTextStep ? (
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:shadow-card-hover transition-all"
                  >
                    {t.submit[language]}
                    <Send className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))}
                    disabled={!canGoNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-primary-foreground disabled:opacity-30 disabled:pointer-events-none hover:shadow-card-hover transition-all"
                  >
                    {t.next[language]}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
