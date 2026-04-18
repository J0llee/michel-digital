export type Language = 'fi' | 'en';

export const translations = {
  nav: {
    home: { fi: 'Etusivu', en: 'Home' },
    services: { fi: 'Palvelut', en: 'Services' },
    references: { fi: 'Referenssit', en: 'References' },
    about: { fi: 'Meistä', en: 'About Us' },
    contact: { fi: 'Yhteystiedot', en: 'Contact' },
  },
  hero: {
    badge: {
      fi: 'Michel Media | Modernia digiosaamista',
      en: 'Michel Media | Modern Digital Expertise',
    },
    title1: {
      fi: 'Verkkosivut, jotka',
      en: 'Websites that',
    },
    title2: {
      fi: 'skaalaavat liiketoimintaasi.',
      en: 'scale your business.',
    },
    paragraph: {
      fi: 'Suomalaista digiosaamista\nModernit verkkosivut ja yksilöllinen palvelu.',
      en: 'Finnish digital expertise\nModern websites with a personal touch.',
    },
    headline: {
      fi: 'Modernia digiosaamista – Verkkosivut, jotka skaalaavat liiketoimintaasi.',
      en: 'Modern Digital Excellence – Websites that scale your business.',
    },
    subtext: {
      fi: 'Huipputason digiosaamista – modernit verkkosivut ammattimaisella otteella. Tämä verkkosivu on 100% meidän itsemme suunnittelema ja toteuttama käyttäen uusimpia työkaluja ja teknologioita.',
      en: 'Top-tier digital expertise – modern websites built with a professional touch. This website was 100% designed and built by us using the latest tools and technology.',
    },
    cta: { fi: 'Ota yhteyttä', en: 'Contact Us' },
  },
  process: {
    title: { fi: 'Kuinka toimimme', en: 'Our Process' },
    steps: [
      { title: { fi: 'Ilmaiset demosivut', en: 'Free Demo Site' }, description: { fi: 'Näytämme mihin pystymme – ilman sitoumuksia.', en: 'We show what we can do – no strings attached.' } },
      { title: { fi: 'Projektin aloituspalaveri', en: 'Project Kick-off' }, description: { fi: 'Käymme läpi tavoitteet ja aikataulun.', en: 'We review goals and timeline together.' } },
      { title: { fi: 'Suunnittelu & Koodaus', en: 'Design & Coding' }, description: { fi: 'Rakennamme sivuston alusta loppuun.', en: 'We build the site from start to finish.' } },
      { title: { fi: 'Julkaisu', en: 'Launch' }, description: { fi: 'Sivusto julkaistaan ja koulutamme sinut.', en: 'The site goes live and we train you.' } },
    ],
  },
  credibility: {
    stat: {
      fi: 'Tiesitkö? Stanfordin yliopiston tutkimuksen mukaan 75 % ihmisistä arvioi yrityksen luotettavuutta pelkästään sen verkkosivujen ulkoasun perusteella.',
      en: "Did you know? According to research from Stanford University, 75% of users make judgments about a company's credibility based on their website's design.",
    },
    citation: 'Stanford Web Credibility Research',
    source: { fi: 'Lähde', en: 'Source' },
  },
  speedCalc: {
    factBox: {
      fi: 'Tiesitkö? Google analysoi 11 miljoonaa laskeutumissivua ja totesi, että kun latausaika nousee yhdestä sekunnista kolmeen, sivustolta välittömästi poistuvien määrä kasvaa 32 %. Yli 5 sekunnin latausaika lähes kaksinkertaistaa menetetyt asiakkaat.',
      en: 'Did you know? Google research shows that as page load time goes from 1 to 3 seconds, bounce rate increases by 32%. A load time over 5 seconds nearly doubles lost customers.',
    },
  },
  services: {
    title: { fi: 'Palvelut & Hinnoittelu', en: 'Services & Pricing' },
    readMore: { fi: 'Tutustu palveluihin', en: 'Explore our services' },
    website: {
      title: { fi: 'Verkkosivuprojekti', en: 'Custom Website' },
      price: { fi: 'Ota yhteyttä', en: 'Contact Us' },
      keyPoint: { fi: 'Toimitus 2 viikossa', en: 'Delivery in 2 weeks' },
      description: {
        fi: 'Moderni, mobiilioptimoitu nettisivu yrityksellesi.',
        en: 'Modern, mobile-optimized website for your business.',
      },
      detailedDescription: {
        fi: 'Avaimet käteen -toteutus. Saat modernin, nopean ja mobiilioptimoidun sivuston.',
        en: 'Turnkey solution. You get a modern, fast, and mobile-optimized website.',
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
        fi: 'Joustavaa ja nopeaa apua sivustosi kehittämiseen asiantuntijalta tuntiveloituksella.',
        en: 'Flexible and fast help for developing your website by an expert, billed hourly.',
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
        fi: 'Emme vain ylläpidä, vaan kehitämme. Seuraamme kävijädataa ja analytiikkaa aktiivisesti.',
        en: "We don't just maintain, we develop. We actively track visitor data and analytics.",
      },
      features: {
        fi: ['Sisällönhallinta', 'Analytiikka', 'Tietoturvapäivitykset', 'Jatkuva tuki'],
        en: ['Content management', 'Analytics', 'Security updates', 'Continuous support'],
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
  faq: {
    title: { fi: 'Usein kysytyt kysymykset', en: 'Frequently Asked Questions' },
    items: [
      {
        q: { fi: 'Kuka omistaa sivuston oikeudet?', en: 'Who owns the rights to the website?' },
        a: { fi: 'Kun projekti on maksettu ja verkkosivut luovutettu, asiakas omistaa ne täysin. Meillä ei ole enää mitään oikeuksia luovutettuun sivustoon tai sen koodiin.', en: 'Once the project is paid for and handed over, the client has 100% ownership. We retain no rights to the delivered website or its code.' },
      },
      {
        q: { fi: 'Mitä jos haluan muutoksia sivustoon myöhemmin?', en: 'What if I want changes to the website later?' },
        a: { fi: 'Luovutamme verkkosivut helppokäyttöisen sisällönhallinta- ja hosting-järjestelmän kanssa, jolla voit tehdä muutoksia itse. Jos kuitenkin haluat täysin vaivattoman kokemuksen, teemme päivityksiä puolestasi joustavalla tuntiveloituksella.', en: 'We deliver websites with a highly user-friendly hosting and editing system. However, if you prefer a "hands-off" experience, we can handle modifications for you on an hourly basis.' },
      },
      {
        q: { fi: 'Miksi valita teidät eikä isoa mainostoimistoa?', en: 'Why choose you over a large agency?' },
        a: { fi: 'Tarjoamme huipputason digiosaamista ilman ison toimiston raskasta byrokratiaa. Käytämme aina markkinoiden tuoreimpia ja tehokkaimpia teknologioita, ja koska kustannusrakenteemme on kevyt, pystymme tarjoamaan ensiluokkaista laatua erittäin kilpailukykyiseen hintaan. Kanssamme et maksa välikäsistä – panostamme kaiken aikamme ja resurssimme täydellisen asiakaskokemuksen rakentamiseen aidosti välittäen.', en: "We offer top-tier digital expertise without the heavy bureaucracy of a large agency. We always use the latest and most effective technologies on the market, and because our cost structure is lean, we can deliver first-class quality at a highly competitive price. With us, you don't pay for middlemen – we invest all our time and resources into building the perfect customer experience with genuine care." },
      },
      {
        q: { fi: 'Mitä "ilmaiset demosivut" käytännössä tarkoittaa?', en: 'What does "free demo site" mean in practice?' },
        a: { fi: 'Se ei sisällä piilokuluja tai sitoutumispakkoa! Teemme ilmaisen esittelyversion, joka näyttää, mihin pystymme. Voimme käyttää sitä projektin pohjana tai aloittaa täysin tyhjältä pöydältä. Tavoitteena on antaa sinulle konkreettinen kuva työmme laadusta ennen ostopäätöstä.', en: 'It means no hidden costs and zero commitment! We create a free showcase version of your potential site to demonstrate our capabilities. We can use it as a starting point or begin from a completely blank slate.' },
      },
      {
        q: { fi: 'Miten sivuston ylläpito ja päivitykset hoituvat julkaisun jälkeen?', en: 'How are maintenance and updates handled after launch?' },
        a: { fi: 'Jokainen sivusto sisältää helppokäyttöisen hallintajärjestelmän. Jos kuitenkin haluat ulkoistaa kaiken ylläpidon ja saada tarkkaa dataa kävijöistä ja analytiikasta, voit valita "Kasvu & Ylläpito" -kuukausipakettimme.', en: 'Every website comes with an easy-to-use content management system. However, if you want to completely free yourself from maintenance or require detailed analytics, you can opt for our "Growth & Maintenance" monthly package.' },
      },
    ],
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
      fi: 'Tarjoamme huipputason digiosaamista ammattimaisella ja henkilökohtaisella otteella. Käytämme markkinoiden tuoreimpia ja tehokkaimpia teknologioita, ja koska kustannusrakenteemme on kevyt, pystymme tarjoamaan ensiluokkaista laatua erittäin kilpailukykyiseen hintaan. Kanssamme et maksa byrokratiasta tai välikäsistä – panostamme kaiken aikamme täydellisen asiakaskokemuksen rakentamiseen.',
      en: "We deliver top-tier digital expertise with a professional and personal touch. We use the latest and most effective technologies on the market, and because our cost structure is lean, we can offer first-class quality at a highly competitive price. With us, you don't pay for bureaucracy or middlemen – we invest all our time into building the perfect customer experience.",
    },
    teamTitle: { fi: 'Tiimi', en: 'The Team' },
    contact: {
      title: { fi: 'Yhteystiedot', en: 'Contact Us' },
      subtitle: {
        fi: 'Olemme tavoitettavissa – ota rohkeasti yhteyttä.',
        en: "We're here to help – feel free to reach out.",
      },
      company: 'Michel Media',
      address: 'Maaherrankatu 26 A18, 50100 Mikkeli',
      location: 'Mikkeli, Finland',
      email: 'info@michelmedia.fi',
      phone: { fi: '0451331813', en: '0451331813' },
    },
  },
  team: {
    title: { fi: 'Tiimi', en: 'The Team' },
    intro: {
      fi: 'Olemme Joel ja Valentin – kaksi nuorta, intohimoista kehittäjää.',
      en: 'We are Joel and Valentin – two young, passionate developers.',
    },
    members: [
      { name: 'Joel Korte', role: { fi: 'Kehittäjä', en: 'Developer' }, linkedin: 'https://www.linkedin.com/in/joel-korte/' },
      { name: 'Valentin Lehtola', role: { fi: 'Kehittäjä', en: 'Developer' }, linkedin: 'https://www.linkedin.com/in/valentin-lehtola/' },
    ],
  },
  footer: {
    contact: { fi: 'Yhteystiedot', en: 'Contact' },
    rights: { fi: 'Kaikki oikeudet pidätetään.', en: 'All rights reserved.' },
    madeWith: { fi: 'Tehty', en: 'Made with' },
    inMikkeli: { fi: 'Suomessa', en: 'in Finland' },
  },
  chat: {
    triggerLabel: { fi: 'Avaa keskustelu', en: 'Open chat' },
    title: { fi: 'Pyydä tarjous', en: 'Request a Quote' },
    subtitle: { fi: 'Vastaa muutamaan kysymykseen', en: 'Answer a few quick questions' },
    back: { fi: 'Takaisin', en: 'Back' },
    next: { fi: 'Seuraava', en: 'Next' },
    submit: { fi: 'Lähetä', en: 'Submit' },
    skip: { fi: 'Ohita', en: 'Skip' },
    step: { fi: 'Vaihe', en: 'Step' },
    of: { fi: '/', en: 'of' },
    steps: [
      {
        question: {
          fi: 'Millaista verkkosivuratkaisua etsitte?',
          en: 'What kind of website solution are you looking for?',
        },
        options: [
          { fi: 'Uudet sivut', en: 'New website' },
          { fi: 'Sivustouudistus', en: 'Website redesign' },
          { fi: 'Pienkehitys / Muutos', en: 'Small changes / updates' },
          { fi: 'Verkkokauppa', en: 'E-commerce' },
        ],
      },
      {
        question: {
          fi: 'Kuinka laaja projekti on kyseessä?',
          en: 'How large is the project?',
        },
        options: [
          { fi: 'Suppea (1-3 sivua)', en: 'Small (1-3 pages)' },
          { fi: 'Keskikokoinen (4-10 sivua)', en: 'Medium (4-10 pages)' },
          { fi: 'Laaja (yli 10 sivua)', en: 'Large (10+ pages)' },
        ],
      },
      {
        question: {
          fi: 'Mikä on projektin tavoiteaikataulu?',
          en: 'What is the target timeline?',
        },
        options: [
          { fi: 'Mahdollisimman pian', en: 'As soon as possible' },
          { fi: '1 kuukauden sisällä', en: 'Within 1 month' },
          { fi: '2-3 kuukauden sisällä', en: 'Within 2-3 months' },
          { fi: 'Ei kiirettä', en: 'No rush' },
        ],
      },
      {
        question: {
          fi: 'Vapaamuotoiset lisätiedot (valinnainen):',
          en: 'Additional details (optional):',
        },
        placeholder: {
          fi: 'Kerro lisää projektistasi...',
          en: 'Tell us more about your project...',
        },
      },
    ],
    successTitle: {
      fi: 'Kiitos!',
      en: 'Thank you!',
    },
    successText: {
      fi: 'Sähköpostisovelluksesi pitäisi nyt aueta.',
      en: 'Your email app should now be opening.',
    },
    fallbackText: {
      fi: 'Eikö sähköpostisi auennut? Kopioi tästä yhteydenottopyyntösi ja lähetä se osoitteeseen info@michelmedia.fi:',
      en: "Didn't your email open? Copy your request below and send it to info@michelmedia.fi:",
    },
    copy: { fi: 'Kopioi', en: 'Copy' },
    copied: { fi: 'Kopioitu!', en: 'Copied!' },
    close: { fi: 'Sulje', en: 'Close' },
    emailLabels: {
      solution: { fi: 'Ratkaisu', en: 'Solution' },
      scope: { fi: 'Laajuus', en: 'Scope' },
      timeline: { fi: 'Aikataulu', en: 'Timeline' },
      details: { fi: 'Lisätiedot', en: 'Additional details' },
      intro: {
        fi: 'Hei! Haluaisin pyytää tarjouksen verkkosivuprojektista. Tässä tietoni:',
        en: "Hi! I'd like to request a quote for a website project. Here are my details:",
      },
    },
  },
} as const;
