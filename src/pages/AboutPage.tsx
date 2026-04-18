import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import joelPhoto from '@/assets/team/joel-v2.jpg';
import valentinPhoto from '@/assets/team/valentin.jpg';

interface AboutPageProps {
  language: Language;
}

const cardSpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
};

const AboutPage = ({ language }: AboutPageProps) => {
  const t = translations.about;
  const teamT = translations.team;
  const teamPhotos = [joelPhoto, valentinPhoto];

  return (
    <div className="pt-32 pb-24 min-h-screen mesh-gradient">
      <div className="container px-6">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-8 tracking-tighter">
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
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tighter">
            {t.teamTitle[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamT.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, transition: cardSpring }}
              className="group text-center"
            >
              <div
                className="relative mb-6 mx-auto w-52 overflow-hidden rounded-3xl block shadow-xl transition-all duration-500"
                style={{ aspectRatio: '4/5' }}
              >
                <img
                  src={teamPhotos[index]}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    member.name === 'Valentin Lehtola' ? 'object-top' : ''
                  }`}
                  style={member.name !== 'Valentin Lehtola' ? { objectPosition: 'center 15%' } : undefined}
                />
              </div>
              <h3 className="text-xl font-extrabold text-foreground mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-medium mb-3">{member.role[language]}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
