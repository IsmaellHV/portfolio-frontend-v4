export type Locale = 'es' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  socials: SocialLink[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  place: string;
  bullets: string[];
  stack: string[];
}

export interface FeaturedProduct {
  title: string;
  logo?: string;
  badge: string;
  accent: boolean;
  meta: string;
  summary: string;
  highlights: string[];
  role: string;
  stack: string[];
  caseStudy?: string;
  link?: string;
}

export interface ProductCard {
  title: string;
  kind: string;
  note?: string;
  link?: string;
  linkLabel?: string;
  description: string;
  stack: string[];
  image: { src: string; alt: string };
}

export interface SkillGroup {
  title: string;
  items: string;
}

export interface Education {
  degree: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface ChatMessage {
  name: string;
  lang: string;
  original: string;
  translation: string;
  time: string;
}

export interface ChatPreview {
  readerLang: string;
  messages: ChatMessage[];
  reply: { text: string; time: string };
}

export interface PortfolioData {
  profile: Profile;
  hero: { eyebrow: string; title: string; lead: string };
  chat: ChatPreview;
  experiences: Experience[];
  featuredProducts: FeaturedProduct[];
  products: ProductCard[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  contact: {
    roles: string[];
    workMode: string;
    timeZone: string;
    timeZoneNote: string;
  };
}

const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ihurtadov/' },
  { platform: 'GitHub', url: 'https://github.com/IsmaellHV' },
];

export const PORTFOLIO_BY_LOCALE: Record<Locale, PortfolioData> = {
  en: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Senior Full Stack Engineer · AI and LLM',
      summary:
        'Senior Full Stack Engineer in Lima, Peru. 10+ years building React, Node.js and TypeScript platforms, plus self-hosted LLMs and RAG.',
      socials: SOCIALS,
    },
    hero: {
      eyebrow: 'Senior Full Stack Engineer · AI and LLM · Lima, Peru',
      title: 'I build full stack and AI software, from idea to production.',
      lead: '10+ years shipping React, Node.js and TypeScript platforms with hexagonal architecture, plus self-hosted LLMs and RAG. My experience spans mortgage lending, government, telecom and internet providers, in Peru and Mexico.',
    },
    chat: {
      readerLang: 'EN',
      messages: [
        {
          name: 'Anna',
          lang: 'pt',
          original: 'Bom dia! Vamos nos ver amanhã às dez?',
          translation: 'Good morning! Shall we meet tomorrow at ten?',
          time: '9:41 AM',
        },
        {
          name: 'Kenji',
          lang: 'ja',
          original: 'いいね！地図は僕が持っていくよ。',
          translation: 'Great! I’ll bring the map.',
          time: '9:41 AM',
        },
      ],
      reply: { text: 'Perfect! I’ll bring the coffee.', time: '9:42 AM' },
    },
    experiences: [
      {
        company: 'Sicred Informática Ltda',
        role: 'Senior Full Stack Developer',
        period: 'Jan 2026 to Sep 2026',
        place: 'Mexico · Remote',
        bullets: [
          'Built DAEFlow, the FOVISSSTE mortgage case origination platform, and a field Construction Verification system with a mobile app',
          'Built a legal document comparison platform with a self-hosted LLM that summarizes case files',
          'Defined the platform architecture and automated CI/CD; deployed services to a Kubernetes test cluster',
        ],
        stack: ['NestJS', 'Fastify', 'Prisma', 'React Native', 'Python', 'Ollama', 'Kubernetes'],
      },
      {
        company: 'Municipalidad de Lima',
        role: 'Senior Programmer Analyst',
        period: 'Jul 2023 to Dec 2025',
        place: 'Lima · Hybrid',
        bullets: [
          "Part of the team that built SIAM, the city's microservices ecosystem",
          'Built the business licenses module with digital signature and the LimaBot citizen chatbot',
          'Integrated the government PIDE services: RENIEC, SAT and Immigration',
        ],
        stack: ['Node.js', 'NestJS', 'TypeScript', 'React', 'OpenAI', 'Docker'],
      },
      {
        company: 'Urban Transport Authority (ATU)',
        role: 'Programmer Analyst',
        period: 'Jan 2021 to Jan 2023',
        place: 'Lima · Hybrid',
        bullets: [
          'Built the TUPA payment gateway: procedure catalog, debt lookup, online payment and QR receipts',
          'Built the infractions, access control and payments inquiry modules',
        ],
        stack: ['Node.js', 'TypeScript', 'Express', 'SQL Server', 'Niubiz'],
      },
      {
        company: 'Cobra Perú',
        role: 'Systems Analyst',
        period: 'Dec 2014 to Dec 2020',
        place: 'Lima · On-site',
        bullets: [
          'Led the selection and training of the web development team',
          'Built GIA, the administration system for the Andean region, integrated with the Navision ERP',
          'Built BI dashboards for senior management on Telefónica del Perú indicators',
        ],
        stack: ['Node.js', 'SocketCluster', 'SQL Server', 'MongoDB', 'Power BI'],
      },
    ],
    featuredProducts: [
      {
        title: 'Chatt World',
        logo: '/work/chatt-world-logo.svg',
        badge: 'Own product',
        accent: true,
        meta: 'Live · chatt-world.com',
        summary:
          "Group chat that translates every message into each reader's own language, so mixed-language groups talk naturally.",
        highlights: [
          'Real-time messaging with replies, mentions, reactions, polls and read receipts',
          'Installable PWA with Web Push notifications',
          "Interface in each user's language, including right-to-left scripts",
        ],
        role: 'Product, design and full stack development',
        stack: ['Fastify', 'WebSockets', 'PostgreSQL', 'React', 'Zustand', 'Web Push'],
        caseStudy: '/work/chatt-world/',
        link: 'https://chatt-world.com',
      },
      {
        title: 'BizPeru',
        badge: 'Platform',
        accent: false,
        meta: 'Internet provider · Peru',
        summary:
          'Management system for an internet provider: customers, billing, payments and network operations in one place.',
        highlights: [
          'SUNAT electronic invoicing: receipts, invoices and credit notes',
          'Online card and Yape payments with Izipay and Culqi',
          'WhatsApp assistant with AI and MikroTik and SmartOLT automation',
        ],
        role: 'Architecture and full stack development',
        stack: ['Node.js', 'MySQL', 'React', 'Nubefact', 'Meta Cloud API', 'OpenAI'],
      },
    ],
    products: [
      {
        title: 'Atalaya',
        kind: 'AI project',
        note: 'Computer vision',
        description:
          'Detects missing personal protective equipment on live video, with RTSP cameras, alerts and a web dashboard.',
        stack: ['YOLO11n', 'PyTorch', 'OpenCV', 'FastAPI'],
        image: { src: '/work/atalaya.webp', alt: 'Atalaya sign-in page with a camera view detecting workers' },
      },
      {
        title: 'Tawa Telcom',
        kind: 'Website',
        link: 'https://tawatelcom.com.pe',
        linkLabel: 'tawatelcom.com.pe',
        description:
          'Website for an internet provider with a server-side AI assistant, an integrated complaints book and structured-data SEO.',
        stack: ['Next.js 16', 'Tailwind CSS 4', 'TypeScript'],
        image: { src: '/work/tawa.webp', alt: 'Tawa Telcom home page' },
      },
      {
        title: 'Notes',
        kind: 'Own product',
        link: 'https://ismaelhv.com/notes/',
        linkLabel: 'ismaelhv.com/notes',
        description:
          'Notes and tasks in one place, with nested notebooks, a Today view, a journal, relevance search and an AI writer.',
        stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'TipTap'],
        image: { src: '/work/notes.webp', alt: 'Notes public home page' },
      },
      {
        title: 'waHub',
        kind: 'Own product',
        link: 'https://ismaelhv.com/wahub/',
        linkLabel: 'ismaelhv.com/wahub',
        description: 'Connects WhatsApp numbers to AI agents through a visual flow editor, for automated replies.',
        stack: ['NestJS', 'Baileys', 'Next.js', 'React Flow', 'OpenAI'],
        image: { src: '/work/wahub.webp', alt: 'waHub home page with an automation flow preview' },
      },
      {
        title: 'FastLink',
        kind: 'Own product',
        link: 'https://ismaelhv.com/fastlink/',
        linkLabel: 'ismaelhv.com/fastlink',
        description: 'A free URL shortener with captcha protection: no account, no tracking, a short link in one step.',
        stack: ['Astro', 'React', 'Tailwind CSS', 'Turnstile'],
        image: { src: '/work/fastlink.webp', alt: 'FastLink home page with the URL shortener form' },
      },
      {
        title: 'DevTools',
        kind: 'Own product',
        link: 'https://ismaelhv.com/tools/',
        linkLabel: 'ismaelhv.com/tools',
        description:
          'Developer utilities that run in the browser without uploading data: encoding, JWT, AES, QR codes, JSON and more.',
        stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
        image: { src: '/work/tools.webp', alt: 'DevTools home page with the list of browser tools' },
      },
    ],
    skills: [
      {
        title: 'Frontend and mobile',
        items: 'React, Next.js, React Native, Expo, Tailwind CSS, RSuite, React Three Fiber',
      },
      {
        title: 'Backend',
        items: 'Node.js, NestJS, Fastify, Express, FastAPI, Prisma, WebSockets, REST, hexagonal architecture, DDD',
      },
      { title: 'AI', items: 'OpenAI, Ollama, LangChain, agents, RAG, computer vision with YOLO' },
      {
        title: 'Data and DevOps',
        items: 'PostgreSQL, SQL Server, MongoDB, Docker, Kubernetes (k3s), GitHub Actions, Cloudflare, AWS, Power BI',
      },
    ],
    education: [
      { degree: 'M.Sc. in Artificial Intelligence', detail: 'Universidad César Vallejo · in progress' },
      {
        degree: 'M.Sc. in Systems and Computer Engineering',
        detail: 'Universidad Nacional Mayor de San Marcos · coursework completed',
      },
      { degree: 'Statistical Engineering', detail: "Universidad Nacional de Trujillo · bachelor's degree, top decile" },
    ],
    certifications: [
      { name: 'Kubernetes', issuer: 'Udemy', year: '2026' },
      { name: 'SOLID Principles and Clean Code', issuer: 'Udemy', year: '2024' },
      { name: 'Chatbots with OpenAI', issuer: 'Platzi', year: '2024' },
      { name: 'BI Analytics and Big Data', issuer: 'UNALM', year: '2020' },
    ],
    contact: {
      roles: ['Senior Full Stack Engineer', 'Software Engineer, AI and LLM'],
      workMode: 'Remote, or hybrid and on site in Lima',
      timeZone: 'Lima, GMT-5',
      timeZoneNote: 'Overlaps with US and Latin American teams',
    },
  },
  es: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Senior Full Stack Engineer · IA y LLM',
      summary:
        'Senior Full Stack Engineer en Lima, Perú. Más de 10 años construyendo plataformas con React, Node.js y TypeScript, además de LLM self-hosted y RAG.',
      socials: SOCIALS,
    },
    hero: {
      eyebrow: 'Senior Full Stack Engineer · IA y LLM · Lima, Perú',
      title: 'Desarrollo software full stack e IA, de la idea a producción.',
      lead: 'Más de 10 años desarrollando plataformas con React, Node.js y TypeScript sobre arquitectura hexagonal, además de LLM self-hosted y RAG. Mi experiencia abarca crédito hipotecario, sector público, telecomunicaciones y proveedores de internet, en Perú y México.',
    },
    chat: {
      readerLang: 'ES',
      messages: [
        {
          name: 'Ana',
          lang: 'pt',
          original: 'Bom dia! Vamos nos ver amanhã às dez?',
          translation: '¡Buenos días! ¿Quedamos mañana a las diez?',
          time: '9:41',
        },
        {
          name: 'Kenji',
          lang: 'ja',
          original: 'いいね！地図は僕が持っていくよ。',
          translation: '¡Genial! Yo llevo el mapa.',
          time: '9:41',
        },
      ],
      reply: { text: '¡Perfecto! Llevo el café.', time: '9:42' },
    },
    experiences: [
      {
        company: 'Sicred Informática Ltda',
        role: 'Desarrollador Full Stack Senior',
        period: 'Ene 2026 a Sep 2026',
        place: 'México · Remoto',
        bullets: [
          'Desarrollé DAEFlow, la plataforma de originación de expedientes hipotecarios FOVISSSTE, y el sistema de Verificación de Obra en campo con app móvil',
          'Construí una plataforma de comparación de documentos jurídicos con un LLM self-hosted que resume expedientes',
          'Definí la arquitectura de la plataforma y automaticé el CI/CD; desplegué servicios en un clúster de pruebas con Kubernetes',
        ],
        stack: ['NestJS', 'Fastify', 'Prisma', 'React Native', 'Python', 'Ollama', 'Kubernetes'],
      },
      {
        company: 'Municipalidad de Lima',
        role: 'Analista Programador Senior',
        period: 'Jul 2023 a Dic 2025',
        place: 'Lima · Híbrido',
        bullets: [
          'Formé parte del equipo que desarrolló el SIAM, el ecosistema de microservicios de la ciudad',
          'Desarrollé el módulo de Licencias de Funcionamiento con firma digital y el chatbot ciudadano LimaBot',
          'Integré los servicios del PIDE del Estado: RENIEC, SAT y Migraciones',
        ],
        stack: ['Node.js', 'NestJS', 'TypeScript', 'React', 'OpenAI', 'Docker'],
      },
      {
        company: 'Autoridad de Transporte Urbano (ATU)',
        role: 'Analista Programador',
        period: 'Ene 2021 a Ene 2023',
        place: 'Lima · Híbrido',
        bullets: [
          'Desarrollé la pasarela de pagos TUPA: catálogo de trámites, consulta de deudas, pago en línea y constancia con QR',
          'Desarrollé los módulos de infracciones, control de accesos y consulta de pagos',
        ],
        stack: ['Node.js', 'TypeScript', 'Express', 'SQL Server', 'Niubiz'],
      },
      {
        company: 'Cobra Perú',
        role: 'Analista de Sistemas',
        period: 'Dic 2014 a Dic 2020',
        place: 'Lima · Presencial',
        bullets: [
          'Lideré la selección y formación del equipo de desarrollo web',
          'Construí GIA, el sistema administrativo de la Zona Andina, integrado al ERP Navision',
          'Construí tableros de BI para la alta dirección sobre los indicadores de Telefónica del Perú',
        ],
        stack: ['Node.js', 'SocketCluster', 'SQL Server', 'MongoDB', 'Power BI'],
      },
    ],
    featuredProducts: [
      {
        title: 'Chatt World',
        logo: '/work/chatt-world-logo.svg',
        badge: 'Producto propio',
        accent: true,
        meta: 'En línea · chatt-world.com',
        summary:
          'Chat de grupos que traduce cada mensaje al idioma de cada lector, para que los grupos con varios idiomas conversen con naturalidad.',
        highlights: [
          'Mensajería en tiempo real con respuestas, menciones, reacciones, encuestas y confirmación de lectura',
          'PWA instalable con notificaciones Web Push',
          'Interfaz en el idioma de cada usuario, incluidas las escrituras de derecha a izquierda',
        ],
        role: 'Producto, diseño y desarrollo full stack',
        stack: ['Fastify', 'WebSockets', 'PostgreSQL', 'React', 'Zustand', 'Web Push'],
        caseStudy: '/es/work/chatt-world/',
        link: 'https://chatt-world.com',
      },
      {
        title: 'BizPeru',
        badge: 'Plataforma',
        accent: false,
        meta: 'Proveedor de internet · Perú',
        summary:
          'Sistema de gestión para un proveedor de internet: clientes, facturación, cobros y operación de red en un solo lugar.',
        highlights: [
          'Facturación electrónica SUNAT: boletas, facturas y notas de crédito',
          'Cobros en línea con tarjeta y Yape mediante Izipay y Culqi',
          'Asistente de WhatsApp con IA y automatización con MikroTik y SmartOLT',
        ],
        role: 'Arquitectura y desarrollo full stack',
        stack: ['Node.js', 'MySQL', 'React', 'Nubefact', 'Meta Cloud API', 'OpenAI'],
      },
    ],
    products: [
      {
        title: 'Atalaya',
        kind: 'Proyecto de IA',
        note: 'Visión computacional',
        description:
          'Detecta la falta de equipos de protección personal en video en vivo, con cámaras RTSP, alertas y un panel web.',
        stack: ['YOLO11n', 'PyTorch', 'OpenCV', 'FastAPI'],
        image: { src: '/work/atalaya.webp', alt: 'Acceso de Atalaya con una cámara que detecta trabajadores' },
      },
      {
        title: 'Tawa Telcom',
        kind: 'Sitio web',
        link: 'https://tawatelcom.com.pe',
        linkLabel: 'tawatelcom.com.pe',
        description:
          'Sitio de un proveedor de internet con asistente de IA en el servidor, Libro de Reclamaciones integrado y SEO con datos estructurados.',
        stack: ['Next.js 16', 'Tailwind CSS 4', 'TypeScript'],
        image: { src: '/work/tawa.webp', alt: 'Página de inicio de Tawa Telcom' },
      },
      {
        title: 'Notes',
        kind: 'Producto propio',
        link: 'https://ismaelhv.com/notes/',
        linkLabel: 'ismaelhv.com/notes',
        description:
          'Notas y tareas en un solo lugar, con cuadernos anidados, vista Hoy, diario, búsqueda por relevancia y redactor con IA.',
        stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'TipTap'],
        image: { src: '/work/notes.webp', alt: 'Portada pública de Notes' },
      },
      {
        title: 'waHub',
        kind: 'Producto propio',
        link: 'https://ismaelhv.com/wahub/',
        linkLabel: 'ismaelhv.com/wahub',
        description:
          'Conecta números de WhatsApp con agentes de IA mediante un editor visual de flujos, para respuestas automáticas.',
        stack: ['NestJS', 'Baileys', 'Next.js', 'React Flow', 'OpenAI'],
        image: { src: '/work/wahub.webp', alt: 'Página de inicio de waHub con un flujo de automatización' },
      },
      {
        title: 'FastLink',
        kind: 'Producto propio',
        link: 'https://ismaelhv.com/fastlink/',
        linkLabel: 'ismaelhv.com/fastlink',
        description: 'Acortador de URLs gratuito con protección captcha: sin cuenta, sin rastreo, un enlace corto en un paso.',
        stack: ['Astro', 'React', 'Tailwind CSS', 'Turnstile'],
        image: { src: '/work/fastlink.webp', alt: 'Página de FastLink con el formulario para acortar enlaces' },
      },
      {
        title: 'DevTools',
        kind: 'Producto propio',
        link: 'https://ismaelhv.com/tools/',
        linkLabel: 'ismaelhv.com/tools',
        description:
          'Utilidades para desarrolladores que se ejecutan en el navegador sin subir datos: codificación, JWT, AES, códigos QR, JSON y más.',
        stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
        image: { src: '/work/tools.webp', alt: 'Página de DevTools con la lista de herramientas' },
      },
    ],
    skills: [
      {
        title: 'Frontend y móvil',
        items: 'React, Next.js, React Native, Expo, Tailwind CSS, RSuite, React Three Fiber',
      },
      {
        title: 'Backend',
        items: 'Node.js, NestJS, Fastify, Express, FastAPI, Prisma, WebSockets, REST, arquitectura hexagonal, DDD',
      },
      { title: 'IA', items: 'OpenAI, Ollama, LangChain, agentes, RAG, visión computacional con YOLO' },
      {
        title: 'Datos y DevOps',
        items: 'PostgreSQL, SQL Server, MongoDB, Docker, Kubernetes (k3s), GitHub Actions, Cloudflare, AWS, Power BI',
      },
    ],
    education: [
      { degree: 'Maestría en Inteligencia Artificial', detail: 'Universidad César Vallejo · en curso' },
      {
        degree: 'Maestría en Ingeniería de Sistemas e Informática',
        detail: 'Universidad Nacional Mayor de San Marcos · egresado',
      },
      { degree: 'Ingeniería Estadística', detail: 'Universidad Nacional de Trujillo · bachiller, décimo superior' },
    ],
    certifications: [
      { name: 'Kubernetes', issuer: 'Udemy', year: '2026' },
      { name: 'Principios SOLID y Clean Code', issuer: 'Udemy', year: '2024' },
      { name: 'Chatbots con OpenAI', issuer: 'Platzi', year: '2024' },
      { name: 'BI Analytics y Big Data', issuer: 'UNALM', year: '2020' },
    ],
    contact: {
      roles: ['Senior Full Stack Engineer', 'Software Engineer, IA y LLM'],
      workMode: 'Remoto, o híbrido y presencial en Lima',
      timeZone: 'Lima, GMT-5',
      timeZoneNote: 'Coincide con equipos de EE. UU. y Latinoamérica',
    },
  },
};

export const getPortfolioData = (locale: Locale): PortfolioData => PORTFOLIO_BY_LOCALE[locale];
