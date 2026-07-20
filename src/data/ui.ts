import type { Locale } from '~/data/portfolio';

/**
 * v4-only UI strings. Kept out of portfolio.ts so that file stays an exact
 * copy of v3's (it gets re-synced when the shared data changes).
 */
export interface UIStrings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  nav: { experience: string; projects: string; about: string; contact: string };
  hero: { downloadCV: string; view3D: string; contact: string };
  stats: string;
  experienceKicker: string;
  projectsKicker: string;
  aboutKicker: string;
  contactKicker: string;
  contactHeadline: string;
  contactBody: string;
  contactCta: string;
  footer: { rights: string };
  themeToggle: string;
  langSwitch: string;
  current: string;
  visit: string;
  code: string;
  previousVersions: string;
}

export const UI_BY_LOCALE: Record<Locale, UIStrings> = {
  en: {
    metaTitle: 'Ismael Hurtado — Senior Full-Stack Engineer · AI / LLM',
    metaDescription:
      'Senior Full-Stack Engineer based in Lima, Peru. 10+ years building web and mobile products with Node.js, React, NestJS and AI/LLM automation. Download my CV or explore the interactive 3D world.',
    keywords:
      'ismael hurtado, senior full-stack engineer, ai engineer, llm, node.js developer, react developer, nestjs, lima peru, portfolio, cv',
    nav: { experience: 'Experience', projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: { downloadCV: 'Download CV', view3D: 'Explore the 3D world', contact: 'Contact me' },
    stats: 'At a glance',
    experienceKicker: 'Experience · 2014 — today',
    projectsKicker: 'Selected work',
    aboutKicker: 'About',
    contactKicker: 'Contact',
    contactHeadline: "Let's talk about your next project.",
    contactBody: 'Drop me a line and I will reply within 24 hours.',
    contactCta: 'Write me',
    footer: { rights: 'All rights reserved.' },
    themeToggle: 'Toggle theme',
    langSwitch: 'Cambiar a español',
    current: 'Present',
    visit: 'Visit',
    code: 'Code',
    previousVersions: 'Previous versions',
  },
  es: {
    metaTitle: 'Ismael Hurtado — Senior Full-Stack Engineer · IA / LLM',
    metaDescription:
      'Senior Full-Stack Engineer en Lima, Perú. Más de 10 años construyendo productos web y móviles con Node.js, React, NestJS y automatización con IA/LLM. Descarga mi CV o explora el mundo 3D interactivo.',
    keywords:
      'ismael hurtado, senior full-stack engineer, ingeniero ia, llm, desarrollador node.js, desarrollador react, nestjs, lima peru, portafolio, cv',
    nav: { experience: 'Experiencia', projects: 'Proyectos', about: 'Acerca', contact: 'Contacto' },
    hero: { downloadCV: 'Descargar CV', view3D: 'Explorar el mundo 3D', contact: 'Contáctame' },
    stats: 'En resumen',
    experienceKicker: 'Experiencia · 2014 — hoy',
    projectsKicker: 'Trabajo seleccionado',
    aboutKicker: 'Acerca de mí',
    contactKicker: 'Contacto',
    contactHeadline: 'Conversemos sobre tu próximo proyecto.',
    contactBody: 'Escríbeme y te responderé en menos de 24 horas.',
    contactCta: 'Escríbeme',
    footer: { rights: 'Todos los derechos reservados.' },
    themeToggle: 'Cambiar tema',
    langSwitch: 'Switch to English',
    current: 'Actual',
    visit: 'Visitar',
    code: 'Código',
    previousVersions: 'Versiones anteriores',
  },
};
