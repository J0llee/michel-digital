import { motion } from 'framer-motion';
import { Language, translations } from '@/lib/translations';
import joelPhoto from '@/assets/team/joel.png';
import valentinPhoto from '@/assets/team/valentin.png';
import walfordPhoto from '@/assets/team/walford.png';

interface TeamProps {
  language: Language;
}

export const Team = ({ language }: TeamProps) => {
  const t = translations.team;

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
    <section id="team" className="py-24 bg-secondary/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.intro[language]}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {t.members.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={teamPhotos[index]}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role[language]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
