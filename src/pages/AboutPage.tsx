import { motion } from 'framer-motion';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { ProjectInquiryForm } from '@/components/ProjectInquiryForm';
import joelPhoto from '@/assets/team/joel.png';
import valentinPhoto from '@/assets/team/valentin.png';
import walfordPhoto from '@/assets/team/walford.png';

interface AboutPageProps {
  language: Language;
}

const formTranslations = {
  title: {
    fi: 'Pyydä ilmainen arvio projektistasi',
    en: 'Request a free project estimate',
  },
};

const AboutPage = ({ language }: AboutPageProps) => {
  const t = translations.about;
  const teamT = translations.team;

  const teamPhotos = [joelPhoto, valentinPhoto, walfordPhoto];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-6">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t.title[language]}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.story[language]}
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.teamTitle[language]}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {teamT.members.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="group text-center"
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-2xl block shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Linkedin className="w-10 h-10 text-background" />
                </div>
                <img
                  src={teamPhotos[index]}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role[language]}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 max-w-2xl mx-auto"
        >
          <div className="bg-accent/30 rounded-2xl p-8 md:p-12 border border-border text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t.contact.title[language]}
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-lg">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">
                  {t.contact.company}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {t.contact.location}
                </span>
              </div>

              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center justify-center gap-3 text-lg text-primary hover:underline transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{t.contact.email}</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{t.contact.phone[language]}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Inquiry Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            {formTranslations.title[language]}
          </h2>
          <ProjectInquiryForm language={language} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
