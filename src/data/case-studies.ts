import type { Locale } from '~/data/portfolio';

export interface CaseStudy {
  metaTitle: string;
  metaDescription: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  visitLabel: string;
  url: string;
  facts: Array<[string, string]>;
  screenshot: { src: string; alt: string; caption: string; width: number; height: number };
  problem: { kicker: string; title: string; paragraphs: string[] };
  built: { kicker: string; title: string; groups: Array<{ title: string; items: string[] }> };
  architecture: {
    kicker: string;
    title: string;
    layers: Array<{ label: string; name: string; detail: string; core?: boolean }>;
  };
  highlights: { kicker: string; title: string; items: Array<{ title: string; text: string }> };
  next: { kicker: string; title: string; back: string };
}

export const CHATT_WORLD_PATHS: Record<Locale, string> = {
  en: '/work/chatt-world/',
  es: '/es/work/chatt-world/',
};

export const CHATT_WORLD: Record<Locale, CaseStudy> = {
  en: {
    metaTitle: 'Chatt World case study · Ismael Hurtado',
    metaDescription:
      "How I designed and built Chatt World, a group chat that translates every message into each reader's language: realtime with Fastify and WebSockets, a React PWA and PostgreSQL.",
    backLabel: 'All work',
    eyebrow: 'Case study · Own product',
    title: 'Chatt World',
    lead: "A group chat where every message arrives in each reader's language, so people who don't share a language can talk in the same group.",
    visitLabel: 'Visit chatt-world.com',
    url: 'https://chatt-world.com',
    facts: [
      ['Role', 'Product, design and full stack development'],
      ['Launched', 'September 2026'],
      ['Platform', 'Web app, installable as a PWA'],
      ['Stack', 'Fastify, WebSockets, PostgreSQL, React, Zustand'],
    ],
    screenshot: {
      src: '/work/chatt-world-landing.webp',
      alt: 'Chatt World landing page with a sample conversation in Portuguese and Japanese, translated into English for the reader',
      caption: 'The public page of chatt-world.com: the original message on top, the translation underneath.',
      width: 2560,
      height: 1520,
    },
    problem: {
      kicker: '01 · The problem',
      title: 'Groups split by language',
      paragraphs: [
        'Mixed-language groups usually fall back to one shared language, or people copy messages into a translator and paste the answer back.',
        'I wanted each person to write naturally in their own language and read everyone else in theirs, inside a chat that feels as complete as the apps they already use.',
      ],
    },
    built: {
      kicker: '02 · What I built',
      title: 'A complete chat, translated for every reader',
      groups: [
        {
          title: 'Conversation',
          items: [
            "Translation on arrival or on demand, using the author's language as a hint",
            'Replies, mentions, edits, deletes and pinned messages',
            'Reactions and five types of polls',
            'Link previews protected against SSRF',
          ],
        },
        {
          title: 'Presence and alerts',
          items: [
            'Online status and typing indicators',
            'Read receipts per message, also in private chats',
            'Notification bell and Web Push as an installable PWA',
          ],
        },
        {
          title: 'Community',
          items: [
            'News feed with comments and likes',
            'Friends and contacts with online status',
            'Themes and chat backgrounds saved to the account',
          ],
        },
        {
          title: 'Global by design',
          items: [
            "Interface in each user's language",
            'Right-to-left scripts supported',
            'Public landing page and SEO in English',
          ],
        },
      ],
    },
    architecture: {
      kicker: '03 · Architecture',
      title: 'How it fits together',
      layers: [
        { label: 'Frontend', name: 'React PWA', detail: 'Zustand state, service worker and Web Push' },
        {
          label: 'Edge',
          name: 'Cloudflare and Nginx',
          detail: 'Turnstile on sign-in and a strict content security policy',
        },
        {
          label: 'API and realtime',
          name: 'Fastify and WebSockets',
          detail: 'Messages, presence, translation and revocable sessions',
          core: true,
        },
        {
          label: 'Data and media',
          name: 'PostgreSQL',
          detail: 'Plus a separate processor that resizes photos and videos',
        },
      ],
    },
    highlights: {
      kicker: '04 · Engineering highlights',
      title: 'Built to be trusted',
      items: [
        {
          title: 'Security',
          text: 'Server-side sessions that users can revoke, single-use links to change a password, bot protection on sign-in and a strict content security policy.',
        },
        {
          title: 'Load testing',
          text: 'Load tests with k6 surfaced six failures under concurrency, and I fixed each of them.',
        },
        {
          title: 'Media pipeline',
          text: 'Photos and videos are resized by a separate processor, with thumbnails shown in the conversation.',
        },
      ],
    },
    next: { kicker: 'Next', title: 'See more products and experience', back: 'Back to all work' },
  },
  es: {
    metaTitle: 'Caso de estudio Chatt World · Ismael Hurtado',
    metaDescription:
      'Cómo diseñé y construí Chatt World, un chat de grupos que traduce cada mensaje al idioma de cada lector: tiempo real con Fastify y WebSockets, una PWA en React y PostgreSQL.',
    backLabel: 'Todo el trabajo',
    eyebrow: 'Caso de estudio · Producto propio',
    title: 'Chatt World',
    lead: 'Un chat de grupos donde cada mensaje llega en el idioma de cada lector, para que personas que no comparten idioma conversen en el mismo grupo.',
    visitLabel: 'Visitar chatt-world.com',
    url: 'https://chatt-world.com',
    facts: [
      ['Rol', 'Producto, diseño y desarrollo full stack'],
      ['Lanzamiento', 'Septiembre 2026'],
      ['Plataforma', 'App web, instalable como PWA'],
      ['Stack', 'Fastify, WebSockets, PostgreSQL, React, Zustand'],
    ],
    screenshot: {
      src: '/work/chatt-world-landing.webp',
      alt: 'Página de inicio de Chatt World con una conversación de ejemplo en portugués y japonés, traducida al inglés para el lector',
      caption: 'La página pública de chatt-world.com: el mensaje original arriba y la traducción debajo.',
      width: 2560,
      height: 1520,
    },
    problem: {
      kicker: '01 · El problema',
      title: 'Grupos divididos por el idioma',
      paragraphs: [
        'Los grupos con varios idiomas suelen terminar usando uno solo, o la gente copia los mensajes en un traductor y pega la respuesta de vuelta.',
        'Quería que cada persona escribiera con naturalidad en su idioma y leyera a los demás en el suyo, dentro de un chat tan completo como las apps que ya usa.',
      ],
    },
    built: {
      kicker: '02 · Qué construí',
      title: 'Un chat completo, traducido para cada lector',
      groups: [
        {
          title: 'Conversación',
          items: [
            'Traducción al llegar o a pedido, con el idioma del autor como pista',
            'Respuestas, menciones, edición, borrado y mensajes fijados',
            'Reacciones y cinco tipos de encuestas',
            'Vistas previas de enlaces protegidas contra SSRF',
          ],
        },
        {
          title: 'Presencia y avisos',
          items: [
            'Estado en línea e indicador de escritura',
            'Confirmación de lectura por mensaje, también en privados',
            'Campana de avisos y Web Push como PWA instalable',
          ],
        },
        {
          title: 'Comunidad',
          items: [
            'Noticias con comentarios y «me gusta»',
            'Amigos y contactos con estado en línea',
            'Temas y fondos de chat guardados en la cuenta',
          ],
        },
        {
          title: 'Global desde el diseño',
          items: [
            'Interfaz en el idioma de cada usuario',
            'Soporte para escrituras de derecha a izquierda',
            'Página pública y SEO en inglés',
          ],
        },
      ],
    },
    architecture: {
      kicker: '03 · Arquitectura',
      title: 'Cómo encaja todo',
      layers: [
        { label: 'Frontend', name: 'PWA en React', detail: 'Estado con Zustand, service worker y Web Push' },
        {
          label: 'Borde',
          name: 'Cloudflare y Nginx',
          detail: 'Turnstile en el acceso y una política de seguridad de contenido estricta',
        },
        {
          label: 'API y tiempo real',
          name: 'Fastify y WebSockets',
          detail: 'Mensajes, presencia, traducción y sesiones revocables',
          core: true,
        },
        {
          label: 'Datos y medios',
          name: 'PostgreSQL',
          detail: 'Más un procesador aparte que reduce fotos y videos',
        },
      ],
    },
    highlights: {
      kicker: '04 · Ingeniería',
      title: 'Hecho para ser confiable',
      items: [
        {
          title: 'Seguridad',
          text: 'Sesiones en el servidor que el usuario puede revocar, enlaces de un solo uso para cambiar la contraseña, protección anti-bots en el acceso y una política de seguridad de contenido estricta.',
        },
        {
          title: 'Pruebas de carga',
          text: 'Las pruebas de carga con k6 revelaron seis fallos bajo concurrencia, y corregí cada uno.',
        },
        {
          title: 'Procesamiento de medios',
          text: 'Un procesador aparte reduce las fotos y videos, con miniaturas en la conversación.',
        },
      ],
    },
    next: { kicker: 'Siguiente', title: 'Ver más productos y experiencia', back: 'Volver a todo el trabajo' },
  },
};
