export type Locale = 'es' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  status: string;
  tagline: string;
  summary: string;
  socials: SocialLink[];
}

export interface Stat {
  num: string;
  label: string;
}

export interface ExperienceRole {
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  period: string;
  duration?: string;
  current?: boolean;
  location?: string;
  roles: ExperienceRole[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year?: string;
  client?: string;
  link?: string;
  image?: string;
  github?: string;
}

export interface About {
  paragraphs: string[];
  meta: Array<[string, string]>;
}

export interface SectionTitles {
  about: string;
  aboutHeadline: string;
  experience: string;
  experienceHeadline: string;
  projects: string;
  projectsHeadline: string;
}

export interface PortfolioData {
  profile: Profile;
  sections: SectionTitles;
  about: About;
  experiences: Experience[];
  featuredProjects: Project[];
  stats: Stat[];
}

export interface LocaleMessages {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  actions: {
    viewAllProjects: string;
    viewFullExperience: string;
    backHome: string;
    visitProject: string;
    workTogether: string;
    seeProjects: string;
    theme: string;
  };
  pages: {
    projectsTitle: string;
    experienceTitle: string;
  };
  contact: {
    kicker: string;
    headline: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    errorGeneric: string;
    errorCaptcha: string;
    errorRequiredName: string;
    errorRequiredEmail: string;
    errorInvalidEmail: string;
    errorRequiredMessage: string;
  };
}

export const PORTFOLIO_BY_LOCALE: Record<Locale, PortfolioData> = {
  es: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Senior Full-Stack Engineer · IA / LLM',
      status: 'Lima, PE',
      tagline: 'Construyo productos web y móviles que combinan rendimiento, diseño cuidado y automatización con IA.',
      summary: 'Construyo productos web y móviles con enfoque en rendimiento, UX y automatización con IA.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov' },
      ],
    },
    sections: {
      about: 'Acerca de mí',
      aboutHeadline: 'Ingeniero Full-Stack centrado en producto, performance y craft.',
      experience: 'Experiencia',
      experienceHeadline: 'Roles donde he construido cosas reales.',
      projects: 'Trabajo seleccionado',
      projectsHeadline: 'Trabajo seleccionado.',
    },
    about: {
      paragraphs: [
        'Soy un desarrollador Full-Stack apasionado con buen ojo para el diseño y motivación por el rendimiento. Trabajo en tecnología desde 2014 y como desarrollador profesional desde 2016, perfeccionando habilidades tanto en frontend como en backend.',
        'Me especializo en la intersección entre sistemas backend complejos e interfaces intuitivas. Actualmente exploro las potencialidades de la IA en el desarrollo de software, automatizando flujos de trabajo y creando aplicaciones más inteligentes.',
      ],
      meta: [
        ['Ubicación', 'Lima, Perú'],
        ['Idiomas', 'Español (nativo) · Inglés (intermedio)'],
        ['Enfoque', 'Web · Mobile · IA'],
      ],
    },
    stats: [
      { num: '10+', label: 'Años en tech' },
      { num: '20+', label: 'Sistemas en producción' },
      { num: '6+', label: 'Empresas / clientes' },
    ],
    experiences: [
      {
        company: 'Sicred Informática Ltda',
        period: 'Ene 2026 — Sep 2026',
        duration: '9 meses',
        location: 'México, crédito hipotecario · Remoto',
        roles: [
          {
            role: 'Desarrollador Full Stack Senior',
            period: 'Ene 2026 — Sep 2026',
            description: [
              'Desarrollé una plataforma de microservicios (NestJS + Fastify + Prisma) para la gestión de promotores y operaciones de crédito, con app móvil (React Native + Expo) y frontend web (React + RSuite + Tailwind), bajo arquitectura Hexagonal + DDD + Clean.',
              'Desarrollo DAEFlow, la plataforma de originación de expedientes hipotecarios FOVISSSTE: flujo del expediente por etapas, notarías y seguimiento, con tableros de mercado, mapas y comparación de entidades financieras.',
              'Construí el sistema de Verificación de Obra en campo: microservicios para órdenes RUV, asignación, avance, bitácora de obra y los formatos de INFONAVIT; app móvil (React Native + Expo) con geolocalización, mapas, almacenamiento local (SQLite) y avisos en tiempo real; panel web con mapas (Leaflet).',
              'Construí una plataforma de comparación de documentos jurídicos con un microservicio de OCR propio en Python (FastAPI + PyMuPDF + Tesseract) y un motor de IA self-hosted (Ollama) que contrasta documentos y resume expedientes en un chat.',
              'Automaticé el CI/CD con GitHub Actions (QA y producción: Docker Buildx, versionado semántico, escaneo de secretos con gitleaks) y reforcé la seguridad con Cloudflare (WAF, rate limiting, Turnstile), rate limiting por aplicación y Helmet.',
            ],
            tags: ['NestJS', 'React Native', 'Prisma', 'Python', 'Ollama', 'Cloudflare'],
          },
        ],
      },
      {
        company: 'Municipalidad Metropolitana de Lima',
        period: 'Jul 2023 — Dic 2025',
        duration: '2 años 6 meses',
        location: 'Cercado de Lima — Sistema SIAM',
        roles: [
          {
            role: 'Analista Programador Senior · Locación de servicios, híbrido',
            period: 'Jul 2023 — Dic 2025',
            description: [
              'Formé parte del equipo que desarrolló el SIAM, un ecosistema de microservicios Node.js/TypeScript con Docker, CI/CD por módulo (GitHub Actions) y arquitectura Hexagonal + DDD.',
              'Desarrollé módulos del Sistema de Fiscalización Electrónica (foto y videopapeletas): APIs REST, visor geoespacial (deck.gl/Leaflet) y streaming de video para la evidencia.',
              'Desarrollé el módulo de Licencias de Funcionamiento del SIAM (NestJS, Hexagonal + DDD): giros de negocio con restricción por zona, clasificación de riesgo e ITSE, permisos de anuncios publicitarios y el flujo de solicitud hasta la emisión de la licencia con resolución firmada digitalmente.',
              'Integré Firma Perú (PCM) para la firma digital de resoluciones y papeletas, cumpliendo estándares de trazabilidad y seguridad documental.',
              'Construí LimaBot, chatbot de atención al ciudadano con OpenAI/GPT que resuelve consultas sobre trámites, servicios y TUPA.',
              'Integré las interoperabilidades con el PIDE del Estado (RENIEC, SAT y Migraciones) para el intercambio seguro de datos entre entidades.',
            ],
            tags: ['React', 'NestJS', 'OpenAI', 'deck.gl', 'Docker'],
          },
        ],
      },
      {
        company: 'ATU — Autoridad de Transporte Urbano',
        period: 'Ene 2021 — Ene 2023',
        duration: '2 años',
        location: 'Lima y Callao, Perú',
        roles: [
          {
            role: 'Analista Programador · Híbrido',
            period: 'Ene 2021 — Ene 2023',
            description: [
              'Implementé el módulo de papeletas del Sistema de Registro de Actividades (SRA) mediante APIs REST (Node.js/Express, SOLID), mejorando la eficiencia en la administración de infracciones.',
              'Desarrollé el módulo TUPA de la Pasarela de Pagos (pasarela.atu.gob.pe) con transacciones seguras (JWT) e integración del proveedor Niubiz, optimizando los pagos en línea.',
              'Creé los módulos de ingreso de personal autorizado y visitas (Ficha Sintomatológica) y de consulta de pagos y deudas (SISATU), reforzando el control de accesos y el acceso a información financiera.',
              'Diseñé el módulo de gestión de almacén y órdenes de trabajo (Sistema de Gestión Operativa) y realicé mejoras y mantenimiento del sistema de convocatoria (SISCON).',
            ],
            tags: ['Node.js', 'Express', 'SQL Server', 'Niubiz'],
          },
        ],
      },
      {
        company: 'Cobra Perú',
        period: 'Dic 2014 — Dic 2020',
        duration: '6 años',
        location: 'Lima — Telecomunicaciones (cliente Telefónica del Perú)',
        roles: [
          {
            role: 'Analista de Sistemas — Central · Presencial',
            period: 'Nov 2018 — Dic 2020',
            description: [
              'Lideré la selección y formación del equipo de desarrollo web (JS/Node.js) e implementé el sistema GIA de gestión integral de administración (Zona Andina); administré bases de datos (SQL Server 2016, MongoDB) y tableros de BI (Qlik Sense, Power BI) para la alta dirección.',
            ],
            tags: ['JavaScript', 'Node.js', 'Qlik Sense', 'Power BI'],
          },
          {
            role: 'Analista Programador — Telecomunicaciones',
            period: 'Jul 2016 — Oct 2018',
            description: [
              'Desarrollé módulos y reportes de producción y calidad (JS/Node.js) y automaticé el envío de indicadores por correo (C# + SQL Server 2016).',
            ],
            tags: ['JavaScript', 'Node.js', 'C#', 'SQL Server'],
          },
          {
            role: 'Desarrollador BD / Analista Programador',
            period: 'Oct 2015 — Jun 2016',
            description: [
              'Construí procedimientos almacenados de indicadores (SQL Server 2008 R2) y automaticé la generación de backups de base de datos.',
            ],
            tags: ['SQL Server'],
          },
          {
            role: 'Analista Estadístico',
            period: 'Dic 2014 — Sep 2015',
            description: [
              'Analicé indicadores de producción y calidad del cliente Telefónica del Perú y construí tableros y KPIs (Power BI) para la toma de decisiones.',
            ],
            tags: ['Power BI', 'SQL Server', 'C#'],
          },
        ],
      },
    ],
    featuredProjects: [
      {
        id: '01',
        title: 'Tawa Telcom',
        description:
          'Sitio web del operador de internet Tawa Telcom: consulta de cobertura, planes para hogar y empresas, y pago de recibos en línea (tarjeta y Yape). Fibra óptica y enlaces inalámbricos en Perú.',
        tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        year: '2026',
        client: 'Tawa Telecomunicaciones',
        link: 'https://tawatelcom.com.pe',
      },
      {
        id: '02',
        title: 'Notes',
        description:
          'Notas y tareas en el mismo sitio: marcas una línea como tarea dentro de cualquier nota y aparece sola en «Hoy» con su contexto. Cuadernos anidados, diario, búsqueda por relevancia, redactor con IA y notas compartidas por enlace.',
        tags: ['React', 'NestJS', 'PostgreSQL', 'OpenAI'],
        year: '2026',
        client: 'Personal',
        link: 'https://ismaelhv.com/notes/',
      },
      {
        id: '03',
        title: 'FastLink',
        description:
          'Acortador de URLs gratis, rápido y privado. Protección anti-bots con Cloudflare Turnstile y soporte multi-idioma.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/fastlink/',
        github: 'https://github.com/IsmaellHV/fastlink',
        image: '/src/assets/projects/fastlink.png',
      },
      {
        id: '04',
        title: 'DevTools',
        description:
          'Set de utilidades para desarrolladores en el navegador: Base64, QR, JSON, AES, JWT y más. Todo se ejecuta localmente, sin uploads.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/tools/',
        github: 'https://github.com/IsmaellHV/tools',
        image: '/src/assets/projects/tools.png',
      },
      {
        id: '05',
        title: 'waHub',
        description:
          'Hub para conectar números de WhatsApp con agentes IA y automatizar respuestas. Pensado para agencias y desarrolladores.',
        tags: ['Next.js', 'React', 'TypeScript', 'AI'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/wahub/',
        github: 'https://github.com/IsmaellHV/wahub-frontend',
        image: '/src/assets/projects/wahub.png',
      },
      {
        id: '06',
        title: 'Exandal: calidad e IA',
        description:
          'Para Exandal Holding Group (agroindustria): amplié su sistema de calidad en Node.js integrado a SAP HANA y balanzas; construí el módulo de Tickets (Gantt, KPIs), ExcoBot (OpenAI con function calling sobre SAP) y un chatbot RAG híbrido de calidad e inocuidad.',
        tags: ['Node.js', 'SAP HANA', 'OpenAI', 'RAG'],
        client: 'Exandal Holding Group',
      },
      {
        id: '07',
        title: 'BizPeru: atención y pagos',
        description:
          'Para BizPeru (ISP y WiFi): su sistema de gestión (Node.js, MySQL, React) con facturación electrónica SUNAT vía Nubefact (boletas, facturas y notas de crédito), cobros en línea con Izipay y Culqi (tarjeta y Yape), asistente de WhatsApp con OpenAI (Meta Cloud API) y automatización de red con MikroTik y SmartOLT.',
        tags: ['Node.js', 'Facturación SUNAT', 'Izipay', 'Culqi', 'MikroTik'],
        client: 'BizPeru',
      },
    ],
  },
  en: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Senior Full-Stack Engineer · AI / LLM',
      status: 'Lima, PE',
      tagline:
        'I build web and mobile products that pair performance with thoughtful design and AI-powered automation.',
      summary: 'Building web and mobile products focused on performance, UX, and AI automation.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov' },
      ],
    },
    sections: {
      about: 'About me',
      aboutHeadline: 'Full-stack engineer focused on product, performance, and craft.',
      experience: 'Experience',
      experienceHeadline: "Where I've built real things.",
      projects: 'Selected work',
      projectsHeadline: 'Selected work.',
    },
    about: {
      paragraphs: [
        "I'm a passionate full-stack developer with an eye for design and a drive for performance. I've been in tech since 2014 and shipping professionally since 2016, refining both frontend and backend craft.",
        "I sit at the intersection of complex backend systems and intuitive interfaces. Right now I'm exploring AI in software development — automating workflows and building smarter apps.",
      ],
      meta: [
        ['Location', 'Lima, Peru'],
        ['Languages', 'Spanish (native) · English (intermediate)'],
        ['Focus', 'Web · Mobile · AI'],
      ],
    },
    stats: [
      { num: '10+', label: 'Years in tech' },
      { num: '20+', label: 'Shipped systems' },
      { num: '6+', label: 'Companies / clients' },
    ],
    experiences: [
      {
        company: 'Sicred Informática Ltda',
        period: 'Jan 2026 — Sep 2026',
        duration: '9 mos',
        location: 'Mexico, mortgage lending · Remote',
        roles: [
          {
            role: 'Senior Full Stack Developer',
            period: 'Jan 2026 — Sep 2026',
            description: [
              'Developed a microservices platform (NestJS + Fastify + Prisma) for credit-agent management and operations, with a mobile app (React Native + Expo) and web frontend (React + RSuite + Tailwind), under a Hexagonal + DDD + Clean architecture.',
              'Developing DAEFlow, the FOVISSSTE mortgage case origination platform: stage-based case workflow, notaries and follow-up, with market dashboards, maps and comparison of financial institutions.',
              'Built the on-site Construction Verification system: microservices for RUV orders, assignment, progress, construction logbook and INFONAVIT report formats; a mobile app (React Native + Expo) with geolocation, maps, local storage (SQLite) and real-time alerts; and a web dashboard with maps (Leaflet).',
              'Built a legal-document comparison platform with an in-house OCR microservice in Python (FastAPI + PyMuPDF + Tesseract) and a self-hosted AI engine (Ollama) that contrasts documents and summarizes case files in a chat.',
              'Automated CI/CD with GitHub Actions (QA and production: Docker Buildx, semantic versioning, gitleaks secret scanning) and hardened security with Cloudflare (WAF, rate limiting, Turnstile), app-level rate limiting and Helmet.',
            ],
            tags: ['NestJS', 'React Native', 'Prisma', 'Python', 'Ollama', 'Cloudflare'],
          },
        ],
      },
      {
        company: 'Municipalidad Metropolitana de Lima',
        period: 'Jul 2023 — Dec 2025',
        duration: '2 yrs 6 mos',
        location: 'Lima — SIAM System',
        roles: [
          {
            role: 'Senior Programmer Analyst · Service contract, hybrid',
            period: 'Jul 2023 — Dic 2025',
            description: [
              'Was part of the team that developed SIAM, a Node.js/TypeScript microservices ecosystem with Docker, per-module CI/CD (GitHub Actions) and a Hexagonal + DDD architecture.',
              'Developed modules of the Electronic Enforcement System (photo and video tickets): REST APIs, a geospatial viewer (deck.gl/Leaflet) and video streaming for evidence.',
              'Developed the Business Operating Licenses module of SIAM (NestJS, Hexagonal + DDD): business activities with zoning restrictions, risk classification and ITSE (safety inspection), advertising permits, and the application workflow through to license issuance with a digitally signed resolution.',
              'Integrated Firma Perú (PCM) for the digital signing of resolutions and tickets, meeting document traceability and security standards.',
              'Built LimaBot, a citizen-support chatbot with OpenAI/GPT that resolves queries about procedures, services and TUPA.',
              'Integrated the government PIDE interoperability services (RENIEC, SAT and Immigration) for secure data exchange across public agencies.',
            ],
            tags: ['React', 'NestJS', 'OpenAI', 'deck.gl', 'Docker'],
          },
        ],
      },
      {
        company: 'ATU — Urban Transport Authority',
        period: 'Jan 2021 — Jan 2023',
        duration: '2 yrs',
        location: 'Lima & Callao, Peru',
        roles: [
          {
            role: 'Programmer Analyst · Hybrid',
            period: 'Jan 2021 — Jan 2023',
            description: [
              'Implemented the tickets module of the Activity Registry System (SRA) via REST APIs (Node.js/Express, SOLID), improving the efficiency of infraction management.',
              'Developed the TUPA module of the Payment Gateway (pasarela.atu.gob.pe) with secure transactions (JWT) and the Niubiz provider integration, streamlining online payments.',
              'Created the authorized-personnel and visitor access modules (symptomatology record) and the payments and debt inquiry module (SISATU), strengthening access control and access to financial information.',
              'Designed the warehouse and work-order management module (Operational Management System) and carried out improvements and maintenance of the recruitment system (SISCON).',
            ],
            tags: ['Node.js', 'Express', 'SQL Server', 'Niubiz'],
          },
        ],
      },
      {
        company: 'Cobra Perú',
        period: 'Dec 2014 — Dec 2020',
        duration: '6 yrs',
        location: 'Lima — Telecommunications (client: Telefónica del Perú)',
        roles: [
          {
            role: 'Systems Analyst — Head Office · On-site',
            period: 'Nov 2018 — Dec 2020',
            description: [
              'Led the selection and training of the web development team (JS/Node.js) and implemented the GIA integrated administration management system (Andean Zone); administered databases (SQL Server 2016, MongoDB) and BI dashboards (Qlik Sense, Power BI) for senior management.',
            ],
            tags: ['JavaScript', 'Node.js', 'Qlik Sense', 'Power BI'],
          },
          {
            role: 'Programmer Analyst — Telecommunications',
            period: 'Jul 2016 — Oct 2018',
            description: [
              'Developed modules and production/quality reports (JS/Node.js) and automated the delivery of indicators by email (C# + SQL Server 2016).',
            ],
            tags: ['JavaScript', 'Node.js', 'C#', 'SQL Server'],
          },
          {
            role: 'Database Developer / Programmer Analyst',
            period: 'Oct 2015 — Jun 2016',
            description: [
              'Built stored procedures for indicators (SQL Server 2008 R2) and automated database backup generation.',
            ],
            tags: ['SQL Server'],
          },
          {
            role: 'Statistical Analyst',
            period: 'Dec 2014 — Sep 2015',
            description: [
              'Analyzed production and quality indicators for the client Telefónica del Perú and built dashboards and KPIs (Power BI) for decision-making.',
            ],
            tags: ['Power BI', 'SQL Server', 'C#'],
          },
        ],
      },
    ],
    featuredProjects: [
      {
        id: '01',
        title: 'Tawa Telcom',
        description:
          'Website for ISP Tawa Telcom: coverage lookup, home and business plans, and online bill payment (card and Yape). Fiber and fixed-wireless internet in Peru.',
        tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        year: '2026',
        client: 'Tawa Telecomunicaciones',
        link: 'https://tawatelcom.com.pe',
      },
      {
        id: '02',
        title: 'Notes',
        description:
          'Notes and tasks in one place: mark a line as a task inside any note and it shows up in Today with its context. Nested notebooks, a journal, ranked full-text search, an AI writing assistant and read-only share links.',
        tags: ['React', 'NestJS', 'PostgreSQL', 'OpenAI'],
        year: '2026',
        client: 'Personal',
        link: 'https://ismaelhv.com/notes/',
      },
      {
        id: '03',
        title: 'FastLink',
        description:
          'Free, fast and privacy-friendly URL shortener. Cloudflare Turnstile protection and multi-language support.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/fastlink/',
        github: 'https://github.com/IsmaellHV/fastlink',
        image: '/src/assets/projects/fastlink.png',
      },
      {
        id: '04',
        title: 'DevTools',
        description:
          'Set of in-browser developer utilities: Base64, QR, JSON, AES, JWT and more. Everything runs locally — no uploads.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/tools/',
        github: 'https://github.com/IsmaellHV/tools',
        image: '/src/assets/projects/tools.png',
      },
      {
        id: '05',
        title: 'waHub',
        description:
          'Hub to connect WhatsApp numbers with AI agents and automate replies. Built for agencies and developers.',
        tags: ['Next.js', 'React', 'TypeScript', 'AI'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/wahub/',
        github: 'https://github.com/IsmaellHV/wahub-frontend',
        image: '/src/assets/projects/wahub.png',
      },
      {
        id: '06',
        title: 'Exandal: quality and AI',
        description:
          'For Exandal Holding Group (agro-industry): extended its Node.js quality system integrated with SAP HANA and industrial scales; built the Tickets module (Gantt, KPIs), ExcoBot (OpenAI function calling over SAP) and a hybrid-retrieval RAG chatbot for quality and food safety.',
        tags: ['Node.js', 'SAP HANA', 'OpenAI', 'RAG'],
        client: 'Exandal Holding Group',
      },
      {
        id: '07',
        title: 'BizPeru: support and payments',
        description:
          'For BizPeru (ISP and WiFi): its management system (Node.js, MySQL, React) with SUNAT electronic invoicing through Nubefact (receipts, invoices and credit notes), online payments with Izipay and Culqi (card and Yape), a WhatsApp assistant with OpenAI (Meta Cloud API) and network automation with MikroTik and SmartOLT.',
        tags: ['Node.js', 'SUNAT e-invoicing', 'Izipay', 'Culqi', 'MikroTik'],
        client: 'BizPeru',
      },
    ],
  },
};

export const MESSAGES_BY_LOCALE: Record<Locale, LocaleMessages> = {
  es: {
    nav: {
      about: 'Acerca',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    actions: {
      viewAllProjects: 'Ver todos los proyectos',
      viewFullExperience: 'Ver experiencia completa',
      backHome: 'Volver al inicio',
      visitProject: 'Visitar proyecto',
      workTogether: 'Trabajemos juntos',
      seeProjects: 'Ver proyectos',
      theme: 'Tema',
    },
    pages: {
      projectsTitle: 'Proyectos',
      experienceTitle: 'Experiencia',
    },
    contact: {
      kicker: 'Contacto',
      headline: 'Conversemos sobre tu próximo proyecto.',
      description: 'Escríbeme y te responderé en menos de 24 horas.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿En qué puedo ayudarte?',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
      success: 'Mensaje enviado. Te responderé pronto.',
      errorGeneric: 'No se pudo enviar el mensaje. Intenta nuevamente.',
      errorCaptcha: 'Verifica el captcha antes de enviar.',
      errorRequiredName: 'Ingresa tu nombre.',
      errorRequiredEmail: 'Ingresa tu correo.',
      errorInvalidEmail: 'Correo no válido.',
      errorRequiredMessage: 'Ingresa un mensaje.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    actions: {
      viewAllProjects: 'View all projects',
      viewFullExperience: 'View full experience',
      backHome: 'Back to home',
      visitProject: 'Visit project',
      workTogether: "Let's work together",
      seeProjects: 'See projects',
      theme: 'Theme',
    },
    pages: {
      projectsTitle: 'Projects',
      experienceTitle: 'Experience',
    },
    contact: {
      kicker: 'Contact',
      headline: "Let's talk about your next project.",
      description: 'Drop me a message and I will reply within 24 hours.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can I help?',
      submit: 'Send message',
      submitting: 'Sending...',
      success: 'Message sent. I will reply soon.',
      errorGeneric: 'Could not send the message. Please try again.',
      errorCaptcha: 'Complete the captcha before submitting.',
      errorRequiredName: 'Enter your name.',
      errorRequiredEmail: 'Enter your email.',
      errorInvalidEmail: 'Invalid email.',
      errorRequiredMessage: 'Enter a message.',
    },
  },
};

export const getPortfolioData = (locale: Locale): PortfolioData => {
  return PORTFOLIO_BY_LOCALE[locale];
};
