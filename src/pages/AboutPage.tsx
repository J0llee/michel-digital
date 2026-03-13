import { motion } from 'framer-motion';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import joelPhoto from '@/assets/team/joel-v2.jpg';
import valentinPhoto from '@/assets/team/valentin.jpg';
import walfordPhoto from '@/assets/team/walford.jpg';

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
  const teamPhotos = [joelPhoto, valentinPhoto, walfordPhoto];

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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-28">
          {teamT.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, transition: cardSpring }}
              className="group text-center"
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-6 mx-auto w-52 aspect-square overflow-hidden rounded-3xl block shadow-xl hover:shadow-card-hover transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-foreground">LinkedIn</span>
                  </div>
                </div>
                <img
                  src={teamPhotos[index]}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center 15%' }}
                />
              </a>
              <h3 className="text-xl font-extrabold text-foreground mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-medium">{member.role[language]}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Subtle accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-10 text-center tracking-tight">
              {t.contact.title[language]}
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-lg">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-bold block">
                      {t.contact.company}
                    </span>
                    <span className="text-muted-foreground text-base">
                      {t.contact.address}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center gap-4 text-lg group/link"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/link:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary font-medium hover:underline">{t.contact.email}</span>
                </a>

                <a
                  href="tel:0451331813"
                  className="flex items-center gap-4 text-lg group/link"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/link:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary font-medium hover:underline">{t.contact.phone[language]}</span>
                </a>
              </div>

              {/* Google Maps */}
              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8977897876!2d27.272854!3d61.6876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469a1e7c8f5e4b0f%3A0x0!2sPorrassalmenkatu%2011%2C%2050100%20Mikkeli!5e0!3m2!1sen!2sfi!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Michel Media Location"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;