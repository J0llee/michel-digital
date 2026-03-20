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
      fi: 'Modernia digiosaamista – Verkkosivut, jotka skaalaavat liiketoimintaasi.',
      en: 'Modern Digital Excellence – Websites that scale your business.',
    },
    subtext: {
      fi: 'Mikkeliläistä digiosaamista - Modernit verkkosivut paikallisella otteella. Tämä verkkosivu on 100% meidän itsemme suunnittelema ja toteuttama käyttäen uusimpia työkaluja ja teknologioita.',
      en: "This website was 100% designed and built by us using the latest tools and technology. We are currently building our portfolio – join our growth story.",
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
        a: { fi: 'Olemme sitoutuneita Aalto-yliopiston opiskelijoita, jotka tekevät työtä suurella intohimolla. Kanssamme et maksa ison toimiston byrokratiasta, vaan saat henkilökohtaista palvelua, suoran kontaktin tekijöihin ja laadukkaan lopputuloksen ilman välikäsiä.', en: 'We are dedicated Aalto University students working with immense passion. With us, you don\'t pay for big-agency overhead. You get personalized service, direct communication with the developers, and premium quality without middlemen.' },
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
      fi: 'Olemme päätoimisia Aalto-yliopiston opiskelijoita, ja nuori ikämme on suurin valttikorttimme. Opintojemme ansiosta elämme ja hengitämme alan kehitystä, joten saat sivuillesi aina markkinoiden tuoreimmat ja tehokkaimmat teknologiat. Koska emme pyöritä ison toimiston raskasta koneistoa emmekä tavoittele sokeasti voittojen maksimointia, pystymme tarjoamaan ensiluokkaista laatua erittäin kilpailukykyiseen hintaan. Kanssamme et maksa byrokratiasta, vaan panostamme kaiken aikamme ja resurssimme täydellisen asiakaskokemuksen rakentamiseen – aidosti välittäen ja täysin ilman välikäsiä.',
      en: 'We are full-time Aalto University students, and our youth is our greatest asset. Thanks to our studies, we live and breathe industry trends, ensuring your site always features the latest and most effective technologies on the market. Because we don\'t run a large agency\'s heavy machinery and aren\'t blindly chasing profit maximization, we can offer first-class quality at a highly competitive price. With us, you\'re not paying for bureaucracy – we invest all our time and resources into building the perfect customer experience, with genuine care and absolutely no middlemen.',
    },
    teamTitle: { fi: 'Tiimi', en: 'The Team' },
    contact: {
      title: { fi: 'Yhteystiedot', en: 'Contact Us' },
      company: 'Michel Media',
      address: 'Maaherrankatu 26, 50100 Mikkeli',
      location: 'Mikkeli, Finland',
      email: 'info@michelmedia.fi',
      phone: { fi: '0451331813', en: '0451331813' },
    },
  },
  team: {
    title: { fi: 'Tiimi', en: 'The Team' },
    intro: {
      fi: 'Olemme Joel ja Valentin – kaksi nuorta, osaavaa opiskelijaa Mikkelistä.',
      en: 'We are Joel and Valentin – two young, skilled students from Mikkeli.',
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
    inMikkeli: { fi: 'Mikkelissä', en: 'in Mikkeli' },
  },
} as const;
