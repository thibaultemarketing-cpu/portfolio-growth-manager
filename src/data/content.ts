// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 CONTENU DU SITE — Modifie ce fichier pour personnaliser
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const siteConfig = {
  // ✏️ Informations personnelles
  name: "Thibault GOMEZ",
  role: "Growth Manager",
  email: "thibault.emarketing@gmail.com",
  linkedin: "https://www.linkedin.com/in/thibault-gomez-a78558153/",
  cvUrl: "/images/CV-Thibault-2026-Growth-Manager.pdf",
  location: "Toulon - Zone Varoise - Télétravail",
  availability: "Disponible immédiatement",

  // ✏️ Images
  images: {
    hero: "/images/thibault-hero-new.png",
    working: "/images/working-photo.png",
    portrait: "/images/thibault-portrait.png",
    logo: "/images/Logo-Photo.png",
    backgroundWork: "/images/background-work.png",
  },

  // ✏️ Meta / SEO
  meta: {
    title: "Thibault GOMEZ | Growth Manager & Responsable Marketing Digital",
    description:
      "Growth Manager avec 8 ans d'expérience en e-commerce B2C. Expert SEO, Amazon Ads (ACoS 14%), CRO et Data/BI. Basé à Toulon, disponible en télétravail. Découvrez mon parcours et mes résultats.",
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const heroContent = {
  // ✏️ Adapte la headline à ton positionnement
  headline: "Besoin d'un Growth Manager pour votre entreprise ?",
  subheadline:
    "Growth Manager avec 6+ ans d'expérience. J'aligne acquisition, activation et rétention pour générer une croissance mesurable et durable.",
  ctaPrimary: "Me recruter",
  ctaSecondary: "Télécharger mon CV",
  // ✏️ Les métriques clés affichées dans le hero
  stats: [
    { value: "+320%", label: "Croissance moyenne générée" },
    { value: "2M€+", label: "Revenue additionnel créé" },
    { value: "50+", label: "Projets growth menés" },
    { value: "4.5x", label: "ROI moyen par client" },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// QUI SUIS-JE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const aboutMe = {
  title: "Qui suis-je ?",
  subtitle: "Au-delà des métriques, la personne derrière la stratégie.",
  paragraphs: [
    "Je suis Thibault, Growth Manager passionné par l'intersection entre stratégie business, data et créativité. Depuis plus de 6 ans, j'accompagne des entreprises — de la startup au grand groupe — dans la structuration et l'accélération de leur croissance.",
    "Mon parcours m'a appris qu'une croissance durable ne se construit pas avec des hacks isolés, mais avec une vision claire, une exécution rigoureuse et une vraie compréhension du produit et de ses utilisateurs.",
    "Ce qui me motive au quotidien ? Transformer des hypothèses en résultats concrets, aligner les équipes autour d'objectifs communs et voir l'impact direct de mon travail sur les métriques qui comptent.",
  ],
  // ✏️ Personnalise ces traits
  traits: [
    { label: "Esprit analytique", icon: "Brain", color: "bg-brand-600" },
    { label: "Orienté résultats", icon: "Target", color: "bg-rose-500" },
    { label: "Ownership", icon: "Users", color: "bg-emerald-500" },
    { label: "Polyvalent", icon: "Lightbulb", color: "bg-amber-500" },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MA RECHERCHE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const mySearch = {
  title: "Ma recherche",
  subtitle: "Le poste idéal que je vise aujourd'hui.",
  description:
    "Après 6 ans d'expérience en growth et marketing digital, je recherche un poste en CDI où je pourrai mettre mon expertise au service d'une entreprise ambitieuse, avec un vrai impact sur la stratégie de croissance.",
  criteria: [
    {
      icon: "Briefcase",
      label: "Type de contrat",
      value: "CDI",
    },
    {
      icon: "Target",
      label: "Poste visé",
      value: "Growth Manager / Responsable Marketing Digital",
    },
    {
      icon: "ShoppingBag",
      label: "Secteur",
      value: "B2C",
    },
    {
      icon: "MapPin",
      label: "Localisation",
      value: "Zone varoise ou télétravail",
    },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CE QUE J'APPORTE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const valuePropositions = {
  title: "Mes Compétences :",
  subtitle: "Un impact concret sur vos métriques business, pas juste des recommandations.",
  items: [
    {
      icon: "TrendingUp",
      title: "Stratégie & Audit",
      description:
        "Vision full-funnel (AARRR), benchmark concurrentiel et définition de KPIs business réels (CAC, LTV, Marges).",
    },
    {
      icon: "Target",
      title: "Acquisition & Ads",
      description:
        "Expert Amazon Ads, Meta Ads (UGC/Retargeting) et Google Ads orientés conversion.",
    },
    {
      icon: "FlaskConical",
      title: "SEO / GEO & Content",
      description:
        "Domination sémantique, audit technique et stratégie éditoriale (Blog expert, vidéo, infographie).",
    },
    {
      icon: "Layers",
      title: "Conversion & CRO",
      description:
        "Optimisation de l'UX/UI sur Prestashop/WordPress, A/B testing et création de landing pages haute performance.",
    },
    {
      icon: "BarChart3",
      title: "Data & Analytics",
      description:
        "Tracking avancé (GTM/GA4) et création de dashboards BI automatisés pour un pilotage en temps réel.",
    },
    {
      icon: "Zap",
      title: "Automation & CRM",
      description:
        "Automatisation des process (n8n), onboarding client et marketing automation (Brevo/Mailchimp).",
    },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXPÉRIENCES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const experiences = {
  title: "Mon Parcours & Diplômes",
  subtitle: "Expérience professionnelle et formation : un profil construit sur le terrain.",
  items: [
    {
      company: "UrbanHello",
      role: "Growth Manager",
      period: "2018 — 2026",
      duration: "8 ans",
      context: "CDI · Télétravail",
      description: "Pilotage complet de la stratégie digitale d'un produit B2C connecté pendant 8 ans.",
      description2: "Vision full-funnel de l'acquisition à la fidélisation, avec un focus constant sur la rentabilité, le pricing et la marge.",
      tags: ["Stratégie digitale", "B2C", "Full Funnel", "Growth", "E-commerce"],
    },
    {
      company: "UFR Ingémédia",
      role: "Master Ingénierie des Médias",
      period: "2016 — 2018",
      duration: "2 ans",
      context: "Bac +5 · Toulon",
      description: "Formation pluridisciplinaire mêlant communication digitale, UX et gestion de projets numériques.",
      description2: "Cursus orienté projets concrets avec une approche centrée utilisateur et performance.",
      tags: ["Communication digitale", "UX", "Stratégie de contenu", "Gestion de projets"],
    },
    {
      company: "UFR Ingémédia",
      role: "Licence Information & Communication",
      period: "2015 — 2016",
      duration: "1 an",
      context: "Bac +3 · Toulon",
      description: "Fondamentaux de la communication digitale, des médias et des usages numériques.",
      description2: "Bases solides en stratégie de communication et création de contenu.",
      tags: ["Communication", "Médias", "Usages numériques", "Contenu"],
    },
    {
      company: "Université de La Garde",
      role: "Licence Lettres Modernes",
      period: "2013 — 2015",
      duration: "2 ans",
      context: "Bac +3 · La Garde",
      description: "Formation centrée sur l'analyse, la rédaction et la structuration de la pensée.",
      description2: "Un socle solide en argumentation et expression écrite, au service d'un contenu clair et impactant.",
      tags: ["Rédaction", "Analyse", "Argumentation", "Contenu"],
    },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DEEP DIVE — EXPÉRIENCE URBANHELLO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const deepDive = {
  title: "8 ans, 1 produit, une vision 360°",
  subtitle: "Mon expérience chez UrbanHello en tant que responsable marketing digital",

  // BLOC 1 — Présentation de Rémi
  product: {
    title: "Rémi, le réveil éducatif connecté",
    highlights: [
      "Réveil intelligent pour enfants — rythme jour/nuit et gestion du sommeil",
      "Produit connecté : app mobile, firmware, mises à jour",
      "Marché B2C de niche — puériculture connectée",
      "Seul responsable marketing digital pendant 8 ans (CDI, télétravail)",
      "Pilotage intégral : de l'acquisition à la fidélisation post-achat",
    ],
    tags: ["IoT", "B2C", "E-commerce", "Puériculture", "App mobile", "Premium"],
    traits: [
      { label: "Produit connecté", detail: "App mobile, firmware, écosystème technique" },
      { label: "Marché de niche", detail: "Puériculture connectée, cible parentale spécifique" },
      { label: "Produit Premium", detail: "Prix élevé dans un marché sensible au budget" },
      { label: "Concurrence forte", detail: "Face aux géants (Philips, etc.) et au low-cost" },
    ],
  },

  // BLOC 2 — Les défis du produit
  challenges: {
    title: "Les défis liés au produit",
    items: [
      {
        label: "Faire connaître un produit de niche",
        detail: "Comment générer de la visibilité quand votre cible est ultra-spécifique et le marché dominé par des grandes marques ?",
      },
      {
        label: "Justifier un prix premium",
        detail: "Convaincre des parents de payer plus cher pour un réveil alors que des alternatives existent à 15€.",
      },
      {
        label: "Gérer la complexité d'un produit connecté",
        detail: "Firmware, app mobile, SAV technique : le marketing doit aussi éduquer et rassurer sur la technologie.",
      },
      {
        label: "Budget limité & petite équipe",
        detail: "Maximiser les résultats avec un budget marketing restreint et une équipe réduite, en priorisant les actions à fort ROI.",
      },
    ],
  },

  // BLOC 3 — Ce que j'ai fait
  work: {
    title: "Mes principales missions chez UrbanHello :",
    description: "Pilotage global de la croissance d'un produit connecté (IoT). Gestion autonome de l'écosystème : acquisition, conversion, data et automatisation.",
    areas: [
      {
        title: "SEO & Acquisition Organique",
        summary: "Audit sémantique et technique complet, création d'un blog expert, stratégie de contenu et optimisation on-page.",
        progress: [
          { name: "Audit sémantique & technique" },
          { name: "Blog expert & contenu" },
          { name: "Optimisation on-page" },
          { name: "Suivi SEMrush / GSC" },
        ],
        results: [
          { value: "#1", label: "Google sur tous les mots-clés stratégiques" },
          { value: "+63%", label: "Trafic organique entre 2025 et 2026" },
        ],
      },
      {
        title: "Marketplaces & Performance Ads",
        summary: "Gestion Amazon (Contenu A+, promotions) et Marketplaces. Pilotage Amazon Ads, campagnes Meta (Remarketing/UGC) et Google Ads ciblées.",
        progress: [
          { name: "Amazon Ads (ACoS 14%)" },
          { name: "Meta Ads (UGC/Retargeting)" },
          { name: "Google Ads" },
          { name: "Contenu A+ & Marketplaces" },
        ],
        results: [
          { value: "14%", label: "ACoS meilleures campagnes" },
          { value: "4.5", label: "ROAS moyen sur Amazon Ads" },
        ],
      },
      {
        title: "CRO & Stratégie Promotionnelle",
        summary: "Création site e-commerce & landing pages. A/B testing et CRO (pop-up, offres). Analyse du parcours client via le framework AARRR.",
        progress: [
          { name: "Site e-commerce & landing pages" },
          { name: "A/B testing & CRO" },
          { name: "Stratégie promotionnelle" },
          { name: "Framework AARRR" },
        ],
        results: [
          { value: "+33%", label: "Ventes en périodes de promotions" },
        ],
      },
      {
        title: "Data, BI & Automation",
        summary: "Création d'un dashboard BI automatisé. Automatisation de l'onboarding et du SAV. Suivi multi-canal : ROI, marges. Centralisation ventes multi-canal.",
        progress: [
          { name: "Dashboards BI automatisés" },
          { name: "Automatisation onboarding & SAV" },
          { name: "Suivi multi-canal (ROI, marges)" },
          { name: "Centralisation ventes" },
        ],
        results: [
          { value: "9", label: "Dashboards automatisés" },
          { value: "4", label: "Process client automatisés" },
        ],
      },
    ],
  },

  // BLOC 4 — Ce que ça m'a apporté
  gains: {
    title: "Ce que ces 8 ans m'ont apporté",
    items: [
      { label: "Vision full funnel", detail: "Capacité à relier chaque action marketing à un impact business concret, de l'acquisition au réachat." },
      { label: "Autonomie complète", detail: "Expérience rare d'avoir piloté seul l'intégralité du périmètre digital d'une entreprise." },
      { label: "Culture data", detail: "Chaque décision guidée par la donnée : test, mesure, itération, optimisation." },
      { label: "Polyvalence technique", detail: "Maîtrise d'un écosystème complet : analytics, ads, CMS, automation, no-code." },
      { label: "Expertise B2C", detail: "Compréhension fine de la psychologie client, du parcours d'achat et de la saisonnalité." },
      { label: "Résilience", detail: "8 ans à résoudre des problèmes différents chaque jour, s'adapter et se réinventer." },
    ],
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CASE STUDIES / RÉSULTATS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const caseStudies = {
  title: "Case Studies",
  subtitle: "Contexte, approche et impact de mes principales missions.",
  items: [
    {
      title: "E-commerce & CRO (Prestashop)",
      context: "Refonte du site e-commerce dans un objectif d'optimisation du taux de conversion (CRO). Produit complexe (multi-fonctions) nécessitant différentes approches pour être compris et valorisé.",
      approach: [
        "Refonte complète du site Prestashop (UX/UI, branding, parcours utilisateur)",
        "Création de pages de vente adaptées aux différents usages produit",
        "Conception de landing pages orientées conversion",
        "Mise en place de bannières, pop-ups et stratégies promotionnelles",
        "Création d'un blog expert (articles, vidéos, outils interactifs)",
        "Déploiement d'un espace FAQ / SAV pour lever les freins",
        "Automatisation marketing (email, onboarding, collecte d'avis)",
      ],
      impact: "Création d'un site e-commerce performant et orienté conversion, permettant une meilleure compréhension du produit.",
      image: "/images/Mockup-Clean4.png",
    },
    {
      title: "SEO & Content Strategy",
      context: "Marché concurrentiel avec besoin de développer un canal d'acquisition durable et scalable.",
      approach: [
        "Audit SEO complet (technique, sémantique, concurrentiel)",
        "Sélection stratégique des mots-clés produits et éditoriaux",
        "Structuration du contenu en SILO thématique",
        "Optimisation on-page & technique (maillage, performance, structure)",
        "Déploiement d'une stratégie de contenu long terme",
        "Suivi via SEMrush & Google Search Console",
        "Début d'intégration d'une logique GEO (Generative SEO)",
      ],
      impact: "Top positions sur les mots-clés stratégiques, avec un SEO devenu levier majeur d'acquisition et +63% de trafic organique entre 2025 et 2026.",
      image: "/images/Mockup-Clean2.png",
    },
    {
      title: "Marketplaces & Performance Ads",
      context: "Amazon était un canal à fort potentiel mais sous-exploité, avec des fiches produit et des campagnes limitant la performance.",
      approach: [
        "Refonte des fiches produit (contenu A+, visuels premium, copywriting conversion)",
        "Optimisation SEO Amazon (recherche mots-clés via Helium10, structuration contenu)",
        "Structuration des campagnes Amazon Ads par objectif",
        "Lancement de campagnes Meta Ads (UGC & retargeting)",
        "Optimisation continue : enchères, mots-clés, analyse des performances",
      ],
      impact: "ACoS maîtrisé à 14 % avec un ROAS moyen de 4.5, et montée en puissance d'Amazon comme canal rentable.",
      image: "/images/Mockup-Clean3.png",
    },
    {
      title: "Data & Business Intelligence",
      context: "Données marketing fragmentées entre plusieurs canaux, limitant la prise de décision.",
      approach: [
        "Création d'un dashboard BI automatisé (Google Sheets)",
        "Centralisation des données (site e-commerce, marketplaces, campagnes)",
        "Suivi des KPIs : ROI, marges, performance des actions marketing",
        "Analyse de l'impact des promotions et de l'élasticité prix",
        "Automatisation du reporting",
      ],
      impact: "Vision unifiée des performances, permettant un pilotage data-driven et une optimisation continue des stratégies marketing et pricing.",
      image: "/images/Mockup-Clean1.png",
    },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONTACT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const contactContent = {
  title: "Discutons",
  subtitle:
    "Vous cherchez un Growth Manager qui délivre ? Contactez-moi pour en discuter.",
  formFields: {
    name: "Votre nom",
    email: "Votre email",
    company: "Entreprise (optionnel)",
    message: "Votre message",
    submit: "Envoyer le message",
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CTA FINAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const finalCta = {
  headline: "Prêt à structurer votre croissance ?",
  subheadline:
    "Je suis disponible pour un nouveau challenge. Discutons de ce que je peux apporter à votre équipe.",
  ctaPrimary: "Me contacter",
  ctaSecondary: "Télécharger mon CV",
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NAVIGATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const navigation = [
  { label: "Profil", href: "#about" },
  { label: "Compétences", href: "#value" },
  { label: "Parcours", href: "#experience" },
  { label: "Expérience", href: "#deepdive" },
  { label: "Contact", href: "#contact" },
];
