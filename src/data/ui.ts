import type { Locale } from '~/data/portfolio';

/** Interface copy. Content (experience, products, skills) lives in portfolio.ts. */
export interface UIStrings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  skipLink: string;
  nav: { label: string; experience: string; work: string; skills: string; contact: string };
  themeToggle: string;
  downloadCV: string;
  viewExperience: string;
  chatFigure: string;
  chatCaption: string;
  readCaseStudy: string;
  visitSite: string;
  experience: { kicker: string; title: string; fullHistory: string };
  work: { kicker: string; title: string; lead: string; role: string; stack: string };
  skills: { kicker: string; title: string; education: string; certifications: string };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    roles: string;
    workMode: string;
    timeZone: string;
    cvEn: string;
    cvEs: string;
  };
  footer: { place: string; version: string };
}

export const UI_BY_LOCALE: Record<Locale, UIStrings> = {
  en: {
    metaTitle: 'Ismael Hurtado · Senior Full Stack Engineer, AI and LLM',
    metaDescription:
      'Senior Full Stack Engineer in Lima, Peru. 10+ years building React, Node.js and TypeScript platforms, plus self-hosted LLMs and RAG. Experience, selected products and CV.',
    keywords:
      'ismael hurtado, senior full stack engineer, ai engineer, llm, node.js developer, react developer, nestjs, lima peru, portfolio, cv',
    skipLink: 'Skip to content',
    nav: { label: 'Main', experience: 'Experience', work: 'Work', skills: 'Skills', contact: 'Contact' },
    themeToggle: 'Toggle dark theme',
    downloadCV: 'Download CV',
    viewExperience: 'View experience',
    chatFigure: 'Preview of Chatt World, a chat I built',
    chatCaption: 'Chatt World, a product I designed and built',
    readCaseStudy: 'Read case study',
    visitSite: 'Visit site',
    experience: { kicker: '01 · Experience', title: 'Where I have worked', fullHistory: 'Full history in the CV' },
    work: {
      kicker: '02 · Selected work',
      title: 'Selected products',
      lead: 'Products I designed, built and run, from internet provider platforms to my own apps.',
      role: 'Role',
      stack: 'Stack',
    },
    skills: {
      kicker: '03 · Skills',
      title: 'What I work with',
      education: 'Education',
      certifications: 'Recent certifications',
    },
    contact: {
      kicker: '04 · Contact',
      title: 'Open to full-time roles',
      lead: 'Senior full stack or AI engineering positions, working inside a product or engineering team.',
      roles: 'Roles',
      workMode: 'Work mode',
      timeZone: 'Time zone',
      cvEn: 'CV in English',
      cvEs: 'CV en español',
    },
    footer: { place: 'Lima, Peru', version: 'Version' },
  },
  es: {
    metaTitle: 'Ismael Hurtado · Senior Full Stack Engineer, IA y LLM',
    metaDescription:
      'Senior Full Stack Engineer en Lima, Perú. Más de 10 años construyendo plataformas con React, Node.js y TypeScript, además de LLM self-hosted y RAG. Experiencia, productos destacados y CV.',
    keywords:
      'ismael hurtado, senior full stack engineer, ingeniero ia, llm, desarrollador node.js, desarrollador react, nestjs, lima peru, portafolio, cv',
    skipLink: 'Saltar al contenido',
    nav: { label: 'Principal', experience: 'Experiencia', work: 'Trabajo', skills: 'Habilidades', contact: 'Contacto' },
    themeToggle: 'Activar tema oscuro',
    downloadCV: 'Descargar CV',
    viewExperience: 'Ver experiencia',
    chatFigure: 'Vista previa de Chatt World, un chat que construí',
    chatCaption: 'Chatt World, un producto que diseñé y construí',
    readCaseStudy: 'Leer caso de estudio',
    visitSite: 'Visitar sitio',
    experience: { kicker: '01 · Experiencia', title: 'Dónde he trabajado', fullHistory: 'Historial completo en el CV' },
    work: {
      kicker: '02 · Trabajo seleccionado',
      title: 'Productos destacados',
      lead: 'Productos que diseñé, construí y opero, desde plataformas para proveedores de internet hasta apps propias.',
      role: 'Rol',
      stack: 'Stack',
    },
    skills: {
      kicker: '03 · Habilidades',
      title: 'Con qué trabajo',
      education: 'Educación',
      certifications: 'Certificaciones recientes',
    },
    contact: {
      kicker: '04 · Contacto',
      title: 'Abierto a puestos a tiempo completo',
      lead: 'Puestos senior de full stack o de ingeniería de IA, dentro de un equipo de producto o de ingeniería.',
      roles: 'Roles',
      workMode: 'Modalidad',
      timeZone: 'Zona horaria',
      cvEn: 'CV in English',
      cvEs: 'CV en español',
    },
    footer: { place: 'Lima, Perú', version: 'Versión' },
  },
};
