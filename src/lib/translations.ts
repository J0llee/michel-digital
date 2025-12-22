export type Language = 'fi' | 'en';

export const translations = {
  nav: {
    services: { fi: 'Palvelut', en: 'Services' },
    references: { fi: 'Referenssit', en: 'References' },
    about: { fi: 'Meistä', en: 'About Us' },
  },
  hero: {
    headline: {
      fi: 'Mikkeliläistä digiosaamista – Modernit verkkosivut paikallisella otteella.',
      en: 'Digital Excellence from Mikkeli – Modern websites with a local touch.',
    },
    subtext: {
      fi: 'Tämä verkkosivu on 100% meidän itsemme suunnittelema ja toteuttama käyttäen uusimpia työkaluja ja teknologioita. Rakennamme parhaillaan portfoliotamme – tule mukaan kasvutarinaan.',
      en: "This website was 100% designed and built by us using the latest tools and technology. We are currently building our portfolio – join our growth story.",
    },
    cta: { fi: 'Ota yhteyttä', en: 'Contact Us' },
  },
  services: {
    title: { fi: 'Palvelut & Hinnoittelu', en: 'Services & Pricing' },
    website: {
      title: { fi: 'Verkkosivuprojekti', en: 'Website Project' },
      price: '500€',
      description: {
        fi: 'Moderni, mobiilioptimoitu nettisivu yrityksellesi.',
        en: 'Modern, mobile-optimized website for your business.',
      },
      features: {
        fi: ['Räätälöity design', 'Mobiilioptimointi', 'SEO-perusasetukset', 'Nopea toimitus'],
        en: ['Custom design', 'Mobile optimization', 'Basic SEO setup', 'Fast delivery'],
      },
    },
    maintenance: {
      title: { fi: 'Kasvu & Ylläpito', en: 'Growth & Maintenance' },
      price: '45€',
      period: { fi: '/ kk (min. 3 kk)', en: '/ month (min. 3 months)' },
      description: {
        fi: 'Hallinta, optimointi ja tilastollinen seuranta. Pidämme sivusi iskussa.',
        en: 'Management, optimization, and analytics. We keep your site running smoothly.',
      },
      features: {
        fi: ['Sisällönhallinta', 'Analytiikka', 'Tietoturvapäivitykset', 'Jatkuva tuki'],
        en: ['Content management', 'Analytics', 'Security updates', 'Ongoing support'],
      },
    },
  },
  references: {
    title: { fi: 'Referenssit', en: 'References' },
    comingSoon: { fi: 'Tulossa pian', en: 'Coming Soon' },
    description: {
      fi: 'Työskentelemme parhaillaan ensimmäisten asiakasprojektiemme parissa. Tämä verkkosivu on paras todiste osaamisestamme – suunniteltu ja toteutettu kokonaan itse.',
      en: "We're currently working on our first client projects. This website is the best proof of our skills – designed and built entirely by ourselves.",
    },
  },
  team: {
    title: { fi: 'Tiimi', en: 'The Team' },
    intro: {
      fi: 'Olemme Joel, Valentin ja Walford – kolme nuorta, osaavaa opiskelijaa Mikkelistä.',
      en: 'We are Joel, Valentin, and Walford – three young, skilled students from Mikkeli.',
    },
  members: [
      { name: 'Joel Korte', role: { fi: 'Kehittäjä', en: 'Developer' }, linkedin: 'https://www.linkedin.com/in/joel-korte/' },
      { name: 'Valentin Lehtola', role: { fi: 'Kehittäjä', en: 'Developer' }, linkedin: 'https://www.linkedin.com/in/valentin-lehtola/' },
      { name: 'Walford Geers', role: { fi: 'Kehittäjä', en: 'Developer' }, linkedin: 'https://www.linkedin.com/in/walford-geers/' },
    ],
  },
  footer: {
    contact: { fi: 'Yhteystiedot', en: 'Contact' },
    rights: { fi: 'Kaikki oikeudet pidätetään.', en: 'All rights reserved.' },
    madeWith: { fi: 'Tehty', en: 'Made with' },
    inMikkeli: { fi: 'Mikkelissä', en: 'in Mikkeli' },
  },
} as const;
