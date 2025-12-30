import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Send } from 'lucide-react';
import { Language } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ProjectInquiryFormProps {
  language: Language;
}

type ProjectType = 'new-website' | 'redesign' | 'ecommerce' | 'other';
type Timeline = 'urgent' | 'one-month' | 'no-rush';

interface FormData {
  projectType: ProjectType | null;
  timeline: Timeline | null;
  budget: string;
  features: string[];
  name: string;
  email: string;
  phone: string;
  company: string;
}

const translations = {
  title: {
    fi: 'Pyydä ilmainen arvio projektistasi',
    en: 'Request a free project estimate',
  },
  step1: {
    title: {
      fi: 'Millainen projekti on kyseessä?',
      en: 'What type of project?',
    },
    options: {
      'new-website': { fi: 'Uudet nettisivut', en: 'New Website' },
      redesign: { fi: 'Sivuston uudistus', en: 'Website Redesign' },
      ecommerce: { fi: 'Verkkokauppa', en: 'E-commerce' },
      other: { fi: 'Muu / Pienkehitys', en: 'Other / Small Development' },
    },
  },
  step2: {
    title: {
      fi: 'Aikataulu ja budjetti',
      en: 'Timeline & Budget',
    },
    timeline: {
      label: { fi: 'Aikataulu', en: 'Timeline' },
      options: {
        urgent: { fi: 'Kiireellinen (< 2 viikkoa)', en: 'Urgent (< 2 weeks)' },
        'one-month': { fi: '1 kuukauden sisällä', en: 'Within 1 month' },
        'no-rush': { fi: 'Ei kiirettä', en: 'No rush' },
      },
    },
    budget: {
      label: { fi: 'Arvioitu budjetti (€)', en: 'Estimated budget (€)' },
      placeholder: { fi: 'esim. 500-1000', en: 'e.g. 500-1000' },
    },
  },
  step3: {
    title: {
      fi: 'Tärkeimmät ominaisuudet',
      en: 'Key Features',
    },
    options: {
      languages: { fi: 'Kieliversiot (FI/EN)', en: 'Multi-language (FI/EN)' },
      booking: { fi: 'Ajanvarausjärjestelmä', en: 'Booking system' },
      blog: { fi: 'Blogi / Uutiset', en: 'Blog / News' },
      social: { fi: 'Some-integraatiot', en: 'Social media integrations' },
      analytics: { fi: 'Analytiikka', en: 'Analytics' },
      seo: { fi: 'SEO-optimointi', en: 'SEO optimization' },
    },
  },
  step4: {
    title: {
      fi: 'Yhteystietosi',
      en: 'Your Contact Info',
    },
    name: { fi: 'Nimi', en: 'Name' },
    email: { fi: 'Sähköposti', en: 'Email' },
    phone: { fi: 'Puhelinnumero', en: 'Phone number' },
    company: { fi: 'Yritys (valinnainen)', en: 'Company (optional)' },
  },
  buttons: {
    next: { fi: 'Seuraava', en: 'Next' },
    previous: { fi: 'Edellinen', en: 'Previous' },
    submit: { fi: 'Lähetä', en: 'Submit' },
  },
  success: {
    title: { fi: 'Kiitos!', en: 'Thank you!' },
    message: {
      fi: 'Olemme yhteydessä pian.',
      en: "We'll be in touch soon.",
    },
  },
  stepIndicator: { fi: 'Vaihe', en: 'Step' },
};

export const ProjectInquiryForm = ({ language }: ProjectInquiryFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: null,
    timeline: null,
    budget: '',
    features: [],
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const t = translations;

  const handleProjectTypeSelect = (type: ProjectType) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleTimelineSelect = (timeline: Timeline) => {
    setFormData({ ...formData, timeline });
  };

  const handleFeatureToggle = (feature: string) => {
    const features = formData.features.includes(feature)
      ? formData.features.filter((f) => f !== feature)
      : [...formData.features, feature];
    setFormData({ ...formData, features });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form Data sent to Michel Digital email:', formData);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.projectType !== null;
      case 2:
        return formData.timeline !== null;
      case 3:
        return true;
      case 4:
        return formData.name.trim() !== '' && formData.email.trim() !== '';
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

  const [[page, direction], setPage] = useState([1, 0]);

  const paginate = (newDirection: number) => {
    if (newDirection > 0 && step < 4) {
      setPage([step + 1, newDirection]);
      setStep(step + 1);
    } else if (newDirection < 0 && step > 1) {
      setPage([step - 1, newDirection]);
      setStep(step - 1);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-10 h-10 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {t.success.title[language]}
        </h3>
        <p className="text-muted-foreground">{t.success.message[language]}</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-background rounded-2xl p-6 md:p-10 border border-border shadow-lg">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full transition-colors ${
              s === step
                ? 'bg-primary'
                : s < step
                ? 'bg-primary/50'
                : 'bg-muted'
            }`}
          />
        ))}
        <span className="ml-4 text-sm text-muted-foreground">
          {t.stepIndicator[language]} {step}/4
        </span>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
                {t.step1.title[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(
                  Object.keys(t.step1.options) as Array<
                    keyof typeof t.step1.options
                  >
                ).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleProjectTypeSelect(type as ProjectType)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.projectType === type
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium text-foreground">
                      {t.step1.options[type][language]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Timeline & Budget */}
          {step === 2 && (
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
                {t.step2.title[language]}
              </h3>
              <div className="space-y-6">
                <div>
                  <Label className="text-foreground mb-3 block">
                    {t.step2.timeline.label[language]}
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(
                      Object.keys(t.step2.timeline.options) as Array<
                        keyof typeof t.step2.timeline.options
                      >
                    ).map((option) => (
                      <button
                        key={option}
                        onClick={() => handleTimelineSelect(option as Timeline)}
                        className={`p-3 rounded-xl border-2 transition-all text-center text-sm ${
                          formData.timeline === option
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium text-foreground">
                          {t.step2.timeline.options[option][language]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="budget"
                    className="text-foreground mb-3 block"
                  >
                    {t.step2.budget.label[language]}
                  </Label>
                  <Input
                    id="budget"
                    type="text"
                    placeholder={t.step2.budget.placeholder[language]}
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Features */}
          {step === 3 && (
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
                {t.step3.title[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  Object.keys(t.step3.options) as Array<
                    keyof typeof t.step3.options
                  >
                ).map((feature) => (
                  <button
                    key={feature}
                    onClick={() => handleFeatureToggle(feature)}
                    className={`p-4 rounded-xl border-2 transition-all text-left flex items-center gap-3 ${
                      formData.features.includes(feature)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        formData.features.includes(feature)
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}
                    >
                      {formData.features.includes(feature) && (
                        <Check className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <span className="font-medium text-foreground">
                      {t.step3.options[feature][language]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === 4 && (
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
                {t.step4.title[language]}
              </h3>
              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    {t.step4.name[language]} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-background"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    {t.step4.email[language]} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-background"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    {t.step4.phone[language]}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="company"
                    className="text-foreground mb-2 block"
                  >
                    {t.step4.company[language]}
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange('company', e.target.value)
                    }
                    className="bg-background"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => paginate(-1)}
          disabled={step === 1}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.buttons.previous[language]}
        </Button>

        {step < 4 ? (
          <Button
            onClick={() => paginate(1)}
            disabled={!canProceed()}
            className="gap-2"
          >
            {t.buttons.next[language]}
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed()}
            className="gap-2"
          >
            {t.buttons.submit[language]}
            <Send className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
