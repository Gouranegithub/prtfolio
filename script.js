const spotlight = document.querySelector(".spotlight");
const counters = document.querySelectorAll("[data-count]");
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".timeline-card");
const reveals = document.querySelectorAll(".section, .timeline-card, .credential-card");
const skillNodes = document.querySelectorAll(".node[data-skill]");
const skillTitle = document.querySelector(".skill-inspector-title");
const skillCopy = document.querySelector(".skill-inspector-copy");
const skillExperienceList = document.querySelector("#skill-experience-list");
const skillProjectList = document.querySelector("#skill-project-list");
const themeToggle = document.querySelector(".theme-toggle");
const langToggle = document.querySelector(".lang-toggle");
const themeOptions = document.querySelectorAll(".theme-option");
const langOptions = document.querySelectorAll(".lang-option");

const themeStorageKey = "portfolio-theme";
const languageStorageKey = "portfolio-language";

let currentTheme = document.body.dataset.theme || "light";
let currentLanguage = document.documentElement.lang || "en";
let activeSkillKey = null;

const uiText = {
  en: {
    page_title: "Abdellah Gourane | Data Engineer Portfolio",
    page_description:
      "Interactive portfolio for Abdellah Gourane, Data Engineer and AI-focused Software Engineer.",
    lang_switcher: "Language switcher",
    theme_switcher: "Theme switcher",
    lang_en: "English",
    lang_fr: "French",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_certifications: "Certifications",
    nav_hobbies: "Hobbies",
    nav_contact: "Contact",
    theme_light: "Light",
    theme_dark: "Dark",
    hero_eyebrow: "Profile",
    hero_lede:
      "With hands-on experience at Oracle, I work across Gen AI, data engineering, analytics, and software delivery, with work spanning SDK development, ETL workflows, reporting, and data-driven products. I also started my PhD at INPT on March 30, 2026.",
    proof_oracle: "Oracle experience",
    proof_phd: "PhD at INPT",
    proof_genai: "Gen AI and data engineering",
    workflow_data: "Data",
    workflow_ingest: "ingest",
    workflow_pipeline: "Pipeline",
    workflow_transform: "transform",
    workflow_ai: "AI",
    workflow_reason: "reason",
    workflow_insight: "Insight",
    workflow_deliver: "deliver",
    cta_resume: "Open Resume",
    cta_experience: "My Experience",
    contact_github_short: "GitHub",
    contact_linkedin_short: "LinkedIn",
    portrait_alt: "Abdellah Gourane portrait",
    personal_note_label: "Personal Note",
    personal_note_value: "I enjoy working where data, AI, and real impact come together.",
    signal_certifications: "Certifications",
    signal_roles: "Roles",
    signal_languages: "Languages",
    section_experience: "Experience",
    filter_all: "All",
    filter_software: "Software Engineering",
    filter_engineering: "Data Engineering",
    filter_analytics: "Data Analytics",
    filter_genai: "Gen AI",
    location_casablanca: "Casablanca, Morocco",
    exp_oracle_title: "Software Engineer • Gen AI SDK Development",
    exp_oracle_date: "Dec 2025 – Apr 2026",
    exp_oracle_desc:
      "Collaborating on the development, optimization, and maintenance of an internal Gen AI SDK, with a focus on robustness, scale, and measurable quality.",
    exp_oracle_b1: "Extended SDK capabilities with new features and tooling.",
    exp_oracle_b2: "Improved performance, reliability, and technical support workflows.",
    exp_oracle_b3: "Ran benchmarks and comparative tests around RAG and NL2SQL scenarios.",
    exp_netsuite_title: "Intern • Data Science",
    exp_netsuite_date: "Feb 2025 – Sep 2025",
    exp_netsuite_desc:
      "Worked on transaction automation and recurring-transaction detection, combining scripting, synthetic data, and algorithm refinement.",
    exp_netsuite_b1: "Automated transaction generation through SuiteScript.",
    exp_netsuite_b2: "Grouped and analyzed data to identify recurring candidates.",
    exp_netsuite_b3: "Improved detection performance and execution stability.",
    exp_attijari_title: "Intern • Data Analyst",
    exp_attijari_date: "Jul 2024 – Aug 2024",
    exp_attijari_desc:
      "Focused on ETL tasks, reporting optimization, and KPI follow-up across ODS, DWH, and Data Mart pipelines.",
    exp_attijari_b1: "Built ETL tasks for data movement across enterprise systems.",
    exp_attijari_b2: "Used SAP BusinessObjects for decision-ready reporting.",
    exp_attijari_b3: "Tracked KPIs to improve performance visibility and decisions.",
    exp_tasmim_title: "Intern • Data Engineer",
    exp_tasmim_date: "Aug 2023",
    exp_tasmim_desc:
      "Built a football-data extraction and transformation workflow, then delivered a searchable dynamic website on top of it.",
    exp_tasmim_b1: "Extracted match data from a public website.",
    exp_tasmim_b2: "Cleaned and transformed datasets for usability.",
    exp_tasmim_b3: "Created a user-facing search experience for match discovery.",
    section_capabilities: "Capabilities",
    section_technical_skills: "Technical Skills",
    skill_node_ml: "Machine Learning",
    skill_context: "Skill Context",
    skill_touch: "Touch a skill",
    skill_copy_default: "Hover a skill on desktop or tap it on mobile to see where I used it.",
    skill_list_experience: "Experience",
    skill_list_projects: "Projects",
    what_i_work_on: "What I work on",
    strength_1_title: "Gen AI Engineering",
    strength_1_desc: "SDK work, RAG experiments, NL2SQL evaluation, and applied LLM workflows.",
    strength_2_title: "Data Engineering",
    strength_2_desc: "ETL pipelines, data transformation, workflow design, and automation.",
    strength_3_title: "Analytics",
    strength_3_desc: "Reporting, KPI tracking, business analysis, and decision-support data.",
    strength_4_title: "Software Delivery",
    strength_4_desc: "Python applications, web products, debugging, and production-oriented development.",
    section_personal_projects: "Personal Projects",
    project_news_company: "Spark Streaming Application",
    project_news_title: "Real-time data processing for live news subtitles",
    project_news_date: "May 2024",
    project_news_desc:
      "Extracted subtitles from a live YouTube news stream, consumed the flow through Kafka, processed it with Spark Streaming, and used LangChain in the pipeline.",
    project_news_b1: "Kafka and Spark Streaming for real-time ingestion and processing.",
    project_news_b2: "LangChain integration for language-model driven analysis.",
    project_news_b3: "Docker-based setup for Kafka, Spark, and Zookeeper services.",
    project_view_repo: "View Project Repository",
    section_credentials: "Credentials",
    section_education: "Education",
    edu_phd_title: "PhD at INPT",
    edu_phd_date: "Started on Mar 30, 2026",
    edu_eng_title: "Engineering Degree • Data Engineer",
    edu_eng_date: "INPT, Rabat • Sep 2022 – Jun 2025",
    edu_cpge_title: "Preparatory Classes • TSI",
    edu_cpge_date: "CPGE Moulay Abdellah Safi • Sep 2020 – Jul 2022",
    section_languages: "Languages",
    language_french: "French",
    language_english: "English",
    language_arabic: "Arabic",
    level_intermediate: "Intermediate",
    level_native: "Native",
    section_certifications: "Certifications",
    section_hobbies: "Hobbies & Activities",
    hob_type_visual: "Visual Work",
    hob_type_community: "Community",
    hob_type_volunteer: "Volunteer Work",
    hob_photo_title: "Photography",
    hob_video_title: "Video Editing",
    hob_photo_desc: "Selected visual work and photography collection.",
    hob_video_desc: "Edited video work and portfolio samples.",
    hob_club_desc: "Community involvement and social activities.",
    hob_caravane_desc: "Volunteer project and related activity record.",
    contact_email: "Email Abdellah",
    contact_github: "View GitHub",
    contact_linkedin: "View LinkedIn",
    tag_internship: "Internship",
    footer_copyright: "© 2026 Abdellah Gourane",
  },
  fr: {
    page_title: "Abdellah Gourane | Portfolio Data et IA",
    page_description:
      "Portfolio interactif d'Abdellah Gourane, ingenieur data et ingenieur IA avec experience Oracle.",
    lang_switcher: "Sélecteur de langue",
    theme_switcher: "Sélecteur de thème",
    lang_en: "Anglais",
    lang_fr: "Français",
    nav_experience: "Expérience",
    nav_skills: "Compétences",
    nav_certifications: "Certifications",
    nav_hobbies: "Loisirs",
    nav_contact: "Contact",
    theme_light: "Clair",
    theme_dark: "Sombre",
    hero_eyebrow: "Profil",
    hero_lede:
      "Avec une expérience concrète chez Oracle, je travaille sur la Gen AI, la data engineering, l'analytics et le développement logiciel, avec des missions autour du développement de SDK, des workflows ETL, du reporting et de produits guidés par la donnée. J'ai aussi commencé mon doctorat à l'INPT le 30 mars 2026.",
    proof_oracle: "Expérience Oracle",
    proof_phd: "Doctorat à l'INPT",
    proof_genai: "Gen AI et data engineering",
    workflow_data: "Data",
    workflow_ingest: "ingestion",
    workflow_pipeline: "Pipeline",
    workflow_transform: "transformation",
    workflow_ai: "IA",
    workflow_reason: "raisonnement",
    workflow_insight: "Impact",
    workflow_deliver: "livrer",
    cta_resume: "Ouvrir le CV",
    cta_experience: "Mon expérience",
    contact_github_short: "GitHub",
    contact_linkedin_short: "LinkedIn",
    portrait_alt: "Portrait d'Abdellah Gourane",
    personal_note_label: "Note personnelle",
    personal_note_value: "J'aime travailler là où la donnée, l'IA et l'impact concret se rejoignent.",
    signal_certifications: "Certifications",
    signal_roles: "Rôles",
    signal_languages: "Langues",
    section_experience: "Expérience",
    filter_all: "Tout",
    filter_software: "Ingénierie logicielle",
    filter_engineering: "Ingénierie data",
    filter_analytics: "Analyse de données",
    filter_genai: "Gen AI",
    location_casablanca: "Casablanca, Maroc",
    exp_oracle_title: "Software Engineer • Développement de SDK Gen AI",
    exp_oracle_date: "Déc 2025 – Avr 2026",
    exp_oracle_desc:
      "Je contribue au développement, à l'optimisation et à la maintenance d'un SDK Gen AI interne, avec un vrai focus sur la robustesse, le passage à l'échelle et la qualité mesurable.",
    exp_oracle_b1: "Extension des capacités du SDK avec de nouvelles fonctionnalités et des outils complémentaires.",
    exp_oracle_b2: "Amélioration des performances, de la fiabilité et des workflows de support technique.",
    exp_oracle_b3: "Réalisation de benchmarks et de tests comparatifs autour de scénarios RAG et NL2SQL.",
    exp_netsuite_title: "Stage • Data Science",
    exp_netsuite_date: "Fév 2025 – Sep 2025",
    exp_netsuite_desc:
      "J'ai travaillé sur l'automatisation de transactions et la détection de transactions récurrentes, en combinant scripting, données synthétiques et ajustements algorithmiques.",
    exp_netsuite_b1: "Automatisation de la génération de transactions via SuiteScript.",
    exp_netsuite_b2: "Regroupement et analyse des données pour identifier les transactions récurrentes candidates.",
    exp_netsuite_b3: "Amélioration de la performance de détection et de la stabilité d'exécution.",
    exp_attijari_title: "Stage • Data Analyst",
    exp_attijari_date: "Juil 2024 – Août 2024",
    exp_attijari_desc:
      "Je me suis concentré sur les tâches ETL, l'optimisation du reporting et le suivi des KPI à travers les flux ODS, DWH et Data Mart.",
    exp_attijari_b1: "Construction de tâches ETL pour le mouvement de données entre systèmes d'entreprise.",
    exp_attijari_b2: "Utilisation de SAP BusinessObjects pour un reporting orienté décision.",
    exp_attijari_b3: "Suivi des KPI pour améliorer la visibilité sur la performance et la prise de décision.",
    exp_tasmim_title: "Stage • Data Engineer",
    exp_tasmim_date: "Août 2023",
    exp_tasmim_desc:
      "J'ai construit un workflow d'extraction et de transformation de données de matchs, puis livré un site dynamique avec recherche dessus.",
    exp_tasmim_b1: "Extraction des données de matchs depuis un site public.",
    exp_tasmim_b2: "Nettoyage et transformation des datasets pour les rendre exploitables.",
    exp_tasmim_b3: "Création d'une expérience de recherche orientée utilisateur pour retrouver les matchs.",
    section_capabilities: "Domaines",
    section_technical_skills: "Compétences techniques",
    skill_node_ml: "Machine Learning",
    skill_context: "Contexte",
    skill_touch: "Touchez une compétence",
    skill_copy_default: "Survolez une compétence sur desktop ou touchez-la sur mobile pour voir où je l'ai utilisée.",
    skill_list_experience: "Expérience",
    skill_list_projects: "Projets",
    what_i_work_on: "Ce sur quoi je travaille",
    strength_1_title: "Ingénierie Gen AI",
    strength_1_desc: "Développement de SDK, expérimentation RAG, évaluation NL2SQL et workflows appliqués autour des LLM.",
    strength_2_title: "Ingénierie data",
    strength_2_desc: "Pipelines ETL, transformation de données, conception de workflows et automatisation.",
    strength_3_title: "Analytics",
    strength_3_desc: "Reporting, suivi des KPI, analyse métier et données d'aide à la décision.",
    strength_4_title: "Livraison logicielle",
    strength_4_desc: "Applications Python, produits web, débogage et développement orienté production.",
    section_personal_projects: "Projets personnels",
    project_news_company: "Application Spark Streaming",
    project_news_title: "Traitement temps réel de sous-titres d'actualités en direct",
    project_news_date: "Mai 2024",
    project_news_desc:
      "J'ai extrait les sous-titres d'un flux YouTube d'actualités en direct, consommé le flux via Kafka, traité les données avec Spark Streaming et utilisé LangChain dans le pipeline.",
    project_news_b1: "Kafka et Spark Streaming pour l'ingestion et le traitement en temps réel.",
    project_news_b2: "Intégration de LangChain pour une analyse pilotée par modèles de langage.",
    project_news_b3: "Mise en place Docker pour Kafka, Spark et Zookeeper.",
    project_view_repo: "Voir le dépôt du projet",
    section_credentials: "Parcours",
    section_education: "Formation",
    edu_phd_title: "Doctorat à l'INPT",
    edu_phd_date: "Débuté le 30 mars 2026",
    edu_eng_title: "Diplôme d'ingénieur • Data Engineer",
    edu_eng_date: "INPT, Rabat • Sep 2022 – Juin 2025",
    edu_cpge_title: "Classes préparatoires • TSI",
    edu_cpge_date: "CPGE Moulay Abdellah Safi • Sep 2020 – Juil 2022",
    section_languages: "Langues",
    language_french: "Français",
    language_english: "Anglais",
    language_arabic: "Arabe",
    level_intermediate: "Intermédiaire",
    level_native: "Langue maternelle",
    section_certifications: "Certifications",
    section_hobbies: "Loisirs & activités",
    hob_type_visual: "Visuel",
    hob_type_community: "Communauté",
    hob_type_volunteer: "Bénévolat",
    hob_photo_title: "Photographie",
    hob_video_title: "Montage vidéo",
    hob_photo_desc: "Sélection de travaux visuels et de photographie.",
    hob_video_desc: "Travaux de montage vidéo et extraits de portfolio.",
    hob_club_desc: "Implication communautaire et activités sociales.",
    hob_caravane_desc: "Projet bénévole et trace des activités associées.",
    contact_email: "Envoyer un email",
    contact_github: "Voir GitHub",
    contact_linkedin: "Voir LinkedIn",
    tag_internship: "Stage",
    footer_copyright: "© 2026 Abdellah Gourane",
  },
};

const skillMap = {
  en: {
    python: {
      title: "Python",
      copy: "Used across my Oracle work, analytics tasks, automation, and project delivery.",
      experience: [
        { label: "Oracle • Gen AI SDK Development", href: "#experience-oracle" },
        { label: "Oracle NetSuite • Data Science Internship", href: "#experience-netsuite" },
      ],
      projects: [{ label: "News Streaming Analysis", href: "#project-news-streaming-analysis" }],
    },
    sql: {
      title: "SQL",
      copy: "Mainly used in data engineering and Gen AI evaluation workflows.",
      experience: [
        { label: "Oracle • Gen AI SDK Development", href: "#experience-oracle" },
        { label: "Attijariwafa Bank • Data Analyst Internship", href: "#experience-attijari" },
      ],
      projects: [],
    },
    django: {
      title: "Django",
      copy: "Used to build a dynamic web experience on top of collected football data.",
      experience: [{ label: "Groupe TasmimWeb • Data Engineer Internship", href: "#experience-tasmimweb" }],
      projects: [],
    },
    ml: {
      title: "Machine Learning",
      copy: "Applied in data science work and in LLM-adjacent evaluation and experimentation.",
      experience: [
        { label: "Oracle NetSuite • Data Science Internship", href: "#experience-netsuite" },
        { label: "Oracle • Gen AI SDK Development", href: "#experience-oracle" },
      ],
      projects: [{ label: "News Streaming Analysis", href: "#project-news-streaming-analysis" }],
    },
    rag: {
      title: "RAG",
      copy: "Used in benchmarking and evaluation work around Gen AI systems.",
      experience: [{ label: "Oracle • Gen AI SDK Development", href: "#experience-oracle" }],
      projects: [],
    },
    langchain: {
      title: "LangChain",
      copy: "Used in LLM workflows and project experimentation.",
      experience: [{ label: "Oracle • Gen AI SDK Development", href: "#experience-oracle" }],
      projects: [{ label: "News Streaming Analysis", href: "#project-news-streaming-analysis" }],
    },
    langflow: {
      title: "LangFlow",
      copy: "Part of my Gen AI tooling stack in Oracle SDK work.",
      experience: [{ label: "Oracle • Gen AI SDK Development", href: "#experience-oracle" }],
      projects: [],
    },
    n8n: {
      title: "n8n",
      copy: "Part of my automation-oriented toolkit for faster workflows and orchestration.",
      experience: [],
      projects: [],
    },
    datastage: {
      title: "IBM DataStage",
      copy: "Used in enterprise ETL and reporting-oriented data workflows.",
      experience: [{ label: "Attijariwafa Bank • Data Analyst Internship", href: "#experience-attijari" }],
      projects: [],
    },
  },
  fr: {
    python: {
      title: "Python",
      copy: "Je l'utilise dans mon travail chez Oracle, dans l'analytics, l'automatisation et les projets personnels.",
      experience: [
        { label: "Oracle • Développement de SDK Gen AI", href: "#experience-oracle" },
        { label: "Oracle NetSuite • Stage Data Science", href: "#experience-netsuite" },
      ],
      projects: [{ label: "News Streaming Analysis", href: "#project-news-streaming-analysis" }],
    },
    sql: {
      title: "SQL",
      copy: "Je l'utilise surtout dans les workflows de data engineering et d'évaluation Gen AI.",
      experience: [
        { label: "Oracle • Développement de SDK Gen AI", href: "#experience-oracle" },
        { label: "Attijariwafa Bank • Stage Data Analyst", href: "#experience-attijari" },
      ],
      projects: [],
    },
    django: {
      title: "Django",
      copy: "Je l'ai utilisé pour construire une expérience web dynamique autour de données de matchs.",
      experience: [{ label: "Groupe TasmimWeb • Stage Data Engineer", href: "#experience-tasmimweb" }],
      projects: [],
    },
    ml: {
      title: "Machine Learning",
      copy: "Je l'ai appliqué dans le travail data science et dans des tâches d'évaluation autour des LLM.",
      experience: [
        { label: "Oracle NetSuite • Stage Data Science", href: "#experience-netsuite" },
        { label: "Oracle • Développement de SDK Gen AI", href: "#experience-oracle" },
      ],
      projects: [{ label: "News Streaming Analysis", href: "#project-news-streaming-analysis" }],
    },
    rag: {
      title: "RAG",
      copy: "Je l'utilise dans les benchmarks et les évaluations autour des systèmes Gen AI.",
      experience: [{ label: "Oracle • Développement de SDK Gen AI", href: "#experience-oracle" }],
      projects: [],
    },
    langchain: {
      title: "LangChain",
      copy: "Je l'utilise dans des workflows LLM et dans l'expérimentation projet.",
      experience: [{ label: "Oracle • Développement de SDK Gen AI", href: "#experience-oracle" }],
      projects: [{ label: "News Streaming Analysis", href: "#project-news-streaming-analysis" }],
    },
    langflow: {
      title: "LangFlow",
      copy: "Il fait partie de mon stack d'outils Gen AI dans le travail SDK chez Oracle.",
      experience: [{ label: "Oracle • Développement de SDK Gen AI", href: "#experience-oracle" }],
      projects: [],
    },
    n8n: {
      title: "n8n",
      copy: "Il fait partie de mon outillage orienté automatisation et orchestration.",
      experience: [],
      projects: [],
    },
    datastage: {
      title: "IBM DataStage",
      copy: "Je l'ai utilisé dans des workflows ETL et reporting en contexte entreprise.",
      experience: [{ label: "Attijariwafa Bank • Stage Data Analyst", href: "#experience-attijari" }],
      projects: [],
    },
  },
};

const setActiveOptions = (options, selectedKey, datasetKey) => {
  options.forEach((option) => {
    const isActive = option.dataset[datasetKey] === selectedKey;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });
};

const renderSkillList = (target, items) => {
  if (!target) {
    return;
  }

  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    li.appendChild(link);
    target.appendChild(li);
  });
};

const setActiveSkill = (skillKey) => {
  activeSkillKey = skillKey;
  const skill = skillMap[currentLanguage][skillKey];
  if (!skill) {
    return;
  }

  skillNodes.forEach((node) => {
    node.classList.toggle("is-active", node.dataset.skill === skillKey);
  });

  if (skillTitle) {
    skillTitle.textContent = skill.title;
  }

  if (skillCopy) {
    skillCopy.textContent = skill.copy;
  }

  renderSkillList(skillExperienceList, skill.experience);
  renderSkillList(skillProjectList, skill.projects);
};

const applyTheme = (theme) => {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  themeToggle?.setAttribute("data-active", theme);
  setActiveOptions(themeOptions, theme, "themeChoice");
  window.localStorage.setItem(themeStorageKey, theme);
};

const applyLanguage = (language) => {
  currentLanguage = language;
  const text = uiText[language];

  document.documentElement.lang = language;
  document.title = text.page_title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", text.page_description);
  }

  langToggle?.setAttribute("data-active", language);
  langToggle?.setAttribute("aria-label", text.lang_switcher);
  themeToggle?.setAttribute("aria-label", text.theme_switcher);
  setActiveOptions(langOptions, language, "langChoice");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (text[key]) {
      node.textContent = text[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (text[key]) {
      node.setAttribute("alt", text[key]);
    }
  });

  if (activeSkillKey) {
    setActiveSkill(activeSkillKey);
  } else {
    skillNodes.forEach((node) => node.classList.remove("is-active"));
    if (skillTitle) {
      skillTitle.textContent = text.skill_touch;
    }
    if (skillCopy) {
      skillCopy.textContent = text.skill_copy_default;
    }
    renderSkillList(skillExperienceList, []);
    renderSkillList(skillProjectList, []);
  }

  window.localStorage.setItem(languageStorageKey, language);
};

const savedTheme = window.localStorage.getItem(themeStorageKey);
if (savedTheme === "light" || savedTheme === "dark") {
  applyTheme(savedTheme);
} else {
  applyTheme(currentTheme);
}

const savedLanguage = window.localStorage.getItem(languageStorageKey);
if (savedLanguage === "en" || savedLanguage === "fr") {
  applyLanguage(savedLanguage);
} else {
  applyLanguage(currentLanguage);
}

themeOptions.forEach((option) => {
  option.addEventListener("click", () => applyTheme(option.dataset.themeChoice));
});

langOptions.forEach((option) => {
  option.addEventListener("click", () => applyLanguage(option.dataset.langChoice));
});

skillNodes.forEach((node) => {
  const activate = () => setActiveSkill(node.dataset.skill);
  node.addEventListener("mouseenter", activate);
  node.addEventListener("focus", activate);
  node.addEventListener("touchstart", activate, { passive: true });
});

document.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  spotlight?.style.setProperty("--spot-x", `${x}%`);
  spotlight?.style.setProperty("--spot-y", `${y}%`);
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    let firstVisible = null;

    cards.forEach((card) => {
      const tags = card.dataset.tags ?? "";
      const visible = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !visible);
      card.classList.remove("is-active");

      if (visible && !firstVisible) {
        firstVisible = card;
      }
    });

    firstVisible?.classList.add("is-active");
  });
});

document.querySelector(".chip.active")?.click();

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const node = entry.target;
      const target = Number(node.dataset.count || 0);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 24));

      const tick = () => {
        value = Math.min(target, value + step);
        node.textContent = value;
        if (value < target) {
          window.requestAnimationFrame(tick);
        }
      };

      tick();
      observer.unobserve(node);
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));
