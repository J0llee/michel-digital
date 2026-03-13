export type Language = 'fi' | 'en';

export const translations = {
  nav: {
    home: { fi: 'Etusivu', en: 'Home' },
    services: { fi: 'Palvelut', en: 'Services' },
    references: { fi: 'Referenssit', en: 'References' },
    about: { fi: 'Meistä', en: 'About Us' },
  },
  hero: {
    headline: {
      fi: 'Verkkosivut, jotka muuttavat kävijät asiakkaiksi - Valitse Michel Media.',
      en: 'Digital Excellence from Mikkeli – Modern websites with a local touch.',
    },
    subtext: {
      fi: 'Mikkeliläistä digiosaamista - Modernit verkkosivut paikallisella otteella. Tämä verkkosivu on 100% meidän itsemme suunnittelema ja toteuttama käyttäen uusimpia työkaluja ja teknologioita.',
      en: "This website was 100% designed and built by us using the latest tools and technology. We are currently building our portfolio – join our growth story.",
    },
    cta: { fi: 'Ota yhteyttä', en: 'Contact Us' },
  },
  credibility: {
    stat: {
      fi: 'Tiesitkö? Stanfordin yliopiston tutkimuksen mukaan 75 % ihmisistä arvioi yrityksen luotettavuutta pelkästään sen verkkosivujen ulkoasun perusteella.',
      en: "Did you know? According to research from Stanford University, 75% of users make judgments about a company's credibility based on their website's design.",
    },
    citation: 'Stanford Web Credibility Research',
    source: { fi: 'Lähde', en: 'Source' },
  },
  services: {
    title: { fi: 'Palvelut & Hinnoittelu', en: 'Services & Pricing' },
    readMore: { fi: 'Tutustu tarkemmin palveluihin', en: 'Read more about services' },
    website: {
      title: { fi: 'Verkkosivuprojekti', en: 'Custom Website' },
      price: { fi: 'Ota yhteyttä', en: 'Contact Us' },
      keyPoint: { fi: 'Toimitus 1 viikossa', en: 'Delivery in 1 week' },
      description: {
        fi: 'Moderni, mobiilioptimoitu nettisivu yrityksellesi.',
        en: 'Modern, mobile-optimized website for your business.',
      },
      detailedDescription: {
        fi: 'Avaimet käteen -toteutus. Saat modernin, nopean ja mobiilioptimoidun sivuston. Lupaamme valmiin sivuston yhden viikon toimitusajalla materiaalien saapumisesta.',
        en: 'Turnkey solution. You get a modern, fast, and mobile-optimized site. We guarantee delivery within one week of receiving the materials.',
      },
      features: {
        fi: ['Räätälöity design', 'Mobiilioptimointi', 'SEO-perusasetukset', 'Nopea toimitus'],
        en: ['Custom design', 'Mobile optimization', 'Basic SEO setup', 'Fast delivery'],
      },
    },
    modifications: {
      title: { fi: 'Muutostyöt ja päivitykset', en: 'Modifications & Updates' },
      price: { fi: '60€', en: '60€' },
      period: { fi: '/ h', en: '/ h' },
      keyPoint: { fi: 'Tuntiveloitus', en: 'Hourly rate' },
      description: {
        fi: 'Joustavaa ja nopeaa apua sivustosi kehittämiseen.',
        en: 'Flexible and fast help for your website.',
      },
      detailedDescription: {
        fi: 'Joustavaa ja nopeaa apua sivustosi kehittämiseen, muokkaamiseen ja päivittämiseen asiantuntijalta tuntiveloituksella.',
        en: 'Flexible and fast help for developing, editing, and updating your website by an expert, billed hourly.',
      },
      features: {
        fi: ['Sisältöpäivitykset', 'Uudet ominaisuudet', 'Visuaaliset muutokset', 'Nopea palvelu'],
        en: ['Content updates', 'New features', 'Visual changes', 'Fast service'],
      },
    },
    maintenance: {
      title: { fi: 'Kasvu & Ylläpito', en: 'Growth & Maintenance' },
      price: { fi: 'Alkaen 75€', en: 'Starting at 75€' },
      period: { fi: '/ kk', en: '/ mo' },
      keyPoint: { fi: 'Jatkuva optimointi & myynnin kasvu', en: 'Continuous Optimization & Sales Growth' },
      description: {
        fi: 'Hallinta, optimointi ja tilastollinen seuranta. Pidämme sivusi iskussa.',
        en: 'Management, optimization, and analytics. We keep your site running smoothly.',
      },
      detailedDescription: {
        fi: 'Emme vain ylläpidä, vaan kehitämme. Seuraamme kävijädataa ja analytiikkaa aktiivisesti. Muokkaamme sivustoa datan perusteella jatkuvasti houkuttelevammaksi ja myyvemmäksi.',
        en: "We don't just maintain; we improve. We actively track visitor data and analytics. We continuously optimize the site based on data to be more attractive and drive more sales.",
      },
      features: {
        fi: ['Sisällönhallinta', 'Analytiikka', 'Tietoturvapäivitykset', 'Jatkuva tuki'],
        en: ['Content management', 'Analytics', 'Security updates', 'Ongoing support'],
      },
    },
    cta: {
      title: { fi: 'Valmis aloittamaan?', en: 'Ready to get started?' },
      description: {
        fi: 'Ota yhteyttä, niin keskustellaan miten voimme auttaa yritystäsi kasvamaan verkossa.',
        en: "Get in touch and let's discuss how we can help your business grow online.",
      },
      emailLabel: { fi: 'Lähetä meille sähköpostia', en: 'Send us an email' },
      teamLabel: {
        fi: 'Tai ota suoraan yhteyttä tiimimme jäseneen',
        en: 'Or reach out directly to a team member',
      },
      teamLink: { fi: 'Tutustu tiimiin', en: 'Meet the team' },
    },
  },
  references: {
    title: { fi: 'Referenssit', en: 'References' },
    comingSoon: { fi: 'Tulossa pian!', en: 'Coming Soon!' },
    description: {
      fi: 'Työskentelemme parhaillaan ensimmäisten asiakasprojektiemme parissa. Tämä verkkosivu on paras todiste osaamisestamme – suunniteltu ja toteutettu kokonaan itse.',
      en: "We're currently working on our first client projects. This website is the best proof of our skills – designed and built entirely by ourselves.",
    },
  },
  about: {
    title: { fi: 'Meistä', en: 'About Us' },
    story: {
      fi: 'Olemme kolme Aalto-yliopiston kauppatieteiden opiskelijaa Mikkelin kampukselta. Meitä yhdistää intohimo teknologiaan, internetiin ja ensiluokkaiseen asiakaspalveluun. Meille täydellisyys ei ole vain tavoite, vaan perusominaisuus. Työskentelemme suurella sydämellä ja henkilökohtaisella otteella ja rakennamme verkkosivut alusta loppuun itse.',
      en: 'We are three Business students from Aalto University Mikkeli Campus, united by a passion for technology, the internet, and exceptional customer service. For us, perfection is not just a goal, but a standard feature. We work with a dedicated, hands-on approach, building websites entirely ourselves.',
    },
    teamTitle: { fi: 'Tiimi', en: 'The Team' },
    contact: {
      title: { fi: 'Yhteystiedot', en: 'Contact Us' },
      company: 'Michel Media',
      address: 'Porrassalmenkatu 11 A 7, 50100 Mikkeli',
      location: 'Mikkeli, Finland',
      email: 'info@michelmedia.fi',
      phone: { fi: '0451331813', en: '0451331813' },
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