import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Send } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface ProjectInquiryFormProps {
  language: Language;
}

interface FormData {
  projectType: string;
  timeline: string;
  budget: string;
  features: string[];
  name: string;
  email: string;
  phone: string;
  company: string;
}

export const ProjectInquiryForm = ({ language }: ProjectInquiryFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    timeline: '',
    budget: '',
    features: [],
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const t = translations.form;

  const projectTypes = [
    { value: 'new', label: t.projectTypes.new[language] },
    { value: 'redesign', label: t.projectTypes.redesign[language] },
    { value: 'ecommerce', label: t.projectTypes.ecommerce[language] },
    { value: 'other', label: t.projectTypes.other[language] },
  ];

  const timelines = [
    { value: 'urgent', label: t.timelines.urgent[language] },
    { value: '1month', label: t.timelines.oneMonth[language] },
    { value: 'flexible', label: t.timelines.flexible[language] },
  ];

  const featureOptions = [
    { value: 'multilingual', label: t.features.multilingual[language] },
    { value: 'booking', label: t.features.booking[language] },
    { value: 'blog', label: t.features.blog[language] },
    { value: 'social', label: t.features.social[language] },
  ];

  const handleProjectTypeSelect = (type: string) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleFeatureToggle = (feature: string) => {
    const current = formData.features;
    if (current.includes(feature)) {
      setFormData({ ...formData, features: current.filter((f) => f !== feature) });
    } else {
      setFormData({ ...formData, features: [...current, feature] });
    }
  };

  const handleSubmit = () => {
    console.log('Form Data sent to Michel Digital email:', formData);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.projectType !== '';
      case 2:
        return formData.timeline !== '';
      case 3:
        return true;
      case 4:
        return formData.email !== '' && formData.name !== '';
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-4">{t.success.title[language]}</h3>
        <p className="text-muted-foreground">{t.success.message[language]}</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-background rounded-2xl p-6 md:p-10 shadow-xl border border-border">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all duration-300 ${
              s === step ? 'w-8 bg-primary' : s < step ? 'w-6 bg-primary/50' : 'w-6 bg-muted'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" custom={step}>
        {/* Step 1: Project Type */}
        {step === 1 && (
          <motion.div
            key="step1"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              {t.step1.title[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <motion.button
                  key={type.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProjectTypeSelect(type.value)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formData.projectType === type.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <span className="font-medium text-foreground">{type.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Timeline & Budget */}
        {step === 2 && (
          <motion.div
            key="step2"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              {t.step2.title[language]}
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t.step2.timelineLabel[language]}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timelines.map((tl) => (
                    <motion.button
                      key={tl.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, timeline: tl.value })}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        formData.timeline === tl.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-foreground">{tl.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t.step2.budgetLabel[language]}
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder={t.step2.budgetPlaceholder[language]}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Features */}
        {step === 3 && (
          <motion.div
            key="step3"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              {t.step3.title[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureOptions.map((feature) => (
                <motion.button
                  key={feature.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleFeatureToggle(feature.value)}
                  className={`p-4 rounded-xl border-2 text-left flex items-center gap-3 transition-all ${
                    formData.features.includes(feature.value)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      formData.features.includes(feature.value)
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {formData.features.includes(feature.value) && (
                      <Check className="w-3 h-3 text-primary-foreground" />
                    )}
                  </div>
                  <span className="font-medium text-foreground">{feature.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <motion.div
            key="step4"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              {t.step4.title[language]}
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.step4.name[language]}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.step4.email[language]}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.step4.phone[language]}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder={t.step4.company[language]}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setStep(step - 1)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            step === 1
              ? 'invisible'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          {t.nav.back[language]}
        </motion.button>

        {step < 4 ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              canProceed()
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            {t.nav.next[language]}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              canProceed()
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            {t.nav.submit[language]}
            <Send className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </div>
  );
};