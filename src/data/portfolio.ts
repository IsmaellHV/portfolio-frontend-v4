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
        company: 'SICRED — México',
        period: 'May 2025 — Jul 2026',
        duration: '1 año',
        location: 'Remoto',
        roles: [
          {
            role: 'Full-Stack Developer · Freelance',
            period: 'May 2025 — Jul 2026',
            description: [
              'Desarrollé una plataforma de microservicios (NestJS + Fastify + Prisma) para la gestión de promotores y operaciones de crédito, bajo arquitectura Hexagonal + DDD + Clean.',
              'Construí la aplicación móvil (React Native + Expo, TypeScript) y el frontend web (React + RSuite + Tailwind) que consumen los microservicios.',
              'Construí una plataforma de comparación de documentos jurídicos con un microservicio de OCR propio en Python (FastAPI + PyMuPDF + Tesseract) que digitaliza PDFs escaneados y un motor de IA self-hosted (Ollama) que contrasta documentos y resume expedientes en un chat.',
              'Automaticé el CI/CD con GitHub Actions (entornos QA y producción): build y push de imágenes con Docker Buildx, versionado semántico y escaneo de secretos (gitleaks), con orquestación de contenedores en Docker Compose.',
              'Reforcé la seguridad con Cloudflare (WAF, rate limiting y Turnstile anti-bot) y protegí las APIs a nivel de aplicación con rate limiting (Fastify) y cabeceras de seguridad (Helmet).',
            ],
            tags: ['NestJS', 'React Native', 'Prisma', 'Python', 'Ollama', 'Cloudflare'],
          },
        ],
      },
      {
        company: 'Exandal Holding Group',
        period: 'Jul 2025 — Jun 2026',
        duration: '1 año',
        location: 'Lima, Perú — Agroindustria',
        roles: [
          {
            role: 'Full-Stack Developer · Autónomo',
            period: 'Jul 2025 — Jun 2026',
            description: [
              'Mantuve y amplié el sistema de gestión y análisis de calidad agroindustrial (ensayos de laboratorio, trazabilidad por lote) en Node.js.',
              'Amplié las integraciones del sistema: SAP (HANA vía driver hdb), balanzas por SerialPort y reportería en Excel/PDF.',
              'Desarrollé el módulo de Tickets (mesa de ayuda interna sobre SAP HANA): flujo de asignación, proceso, revisión y cierre con prioridades, adjuntos, notas con acuse de lectura, notificaciones por correo, planificador Gantt y un panel de reportes/KPIs.',
              'Construí ExcoBot, un chatbot con OpenAI (function calling) que entrega la trazabilidad de órdenes SAP en lenguaje natural, con gráficos de indicadores (KPI).',
              'Diseñé un chatbot con RAG de recuperación híbrida para trazar resultados de calidad e inocuidad.',
            ],
            tags: ['Node.js', 'SAP HANA', 'OpenAI', 'RAG'],
          },
        ],
      },
      {
        company: 'BizPeru',
        period: 'Ene 2025 — Dic 2025',
        duration: '1 año',
        location: 'Remoto, Perú — ISP / WiFi',
        roles: [
          {
            role: 'Full-Stack Developer · Freelance',
            period: 'Ene 2025 — Dic 2025',
            description: [
              'Construí un chatbot de WhatsApp (whatsapp-web.js + OpenAI) con gestión multi-sesión y comunicación en tiempo real (SocketCluster) para atención al cliente.',
              'Integré la pasarela de pago Niubiz en la tienda online (checkout con tokenización de tarjeta y captura del cargo), con backend NestJS + Fastify + Prisma y frontend Next.js 16 + Tailwind.',
              'Automaticé la red ISP: aprovisioné hotspots WiFi en MikroTik (RouterOS API) e integré SmartOLT (fibra óptica), con facturación y vouchers en PDF.',
              'Configuré el CI/CD con GitHub Actions (build y push de imágenes con Docker Buildx y versionado semántico) y orquesté los servicios con Docker Compose.',
              'Protegí las APIs con Cloudflare (WAF, rate limiting y Turnstile anti-bot) y endurecí la aplicación con rate limiting (Express/Fastify) y cabeceras de seguridad (Helmet).',
            ],
            tags: ['NestJS', 'Next.js', 'OpenAI', 'MikroTik', 'Cloudflare'],
          },
        ],
      },
      {
        company: 'Municipalidad Metropolitana de Lima',
        period: 'Jun 2023 — Mar 2026',
        duration: '3 años',
        location: 'Cercado de Lima — Sistema SIAM',
        roles: [
          {
            role: 'Analista Programador Senior · Híbrido',
            period: 'Jun 2023 — Mar 2026',
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
        period: 'Dic 2020 — Ene 2023',
        duration: '2 años',
        location: 'Lima y Callao, Perú',
        roles: [
          {
            role: 'Analista Programador · Híbrido',
            period: 'Dic 2020 — Ene 2023',
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
        period: 'Dic 2014 — Ene 2021',
        duration: '6 años',
        location: 'Lima — Telecomunicaciones (cliente Telefónica del Perú)',
        roles: [
          {
            role: 'Analista de Sistemas — Central · Presencial',
            period: 'Nov 2018 — Ene 2021',
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
        title: 'Portfolio v1',
        description: 'Portfolio personal v1 construido con React, TailwindCSS, NodeJS y TypeScript.',
        tags: ['React', 'Tailwind', 'Node.js', 'TypeScript'],
        year: '2024',
        client: 'Personal',
        link: 'https://v1.ismaelhv.com/',
        github: 'https://github.com/IsmaellHV/portfolio-frontend-v1',
        image: '/src/assets/projects/portfolio-v1.png',
      },
      {
        id: '02',
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
        id: '03',
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
        id: '04',
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
        company: 'SICRED — Mexico',
        period: 'May 2025 — Jul 2026',
        duration: '1 yr',
        location: 'Remote',
        roles: [
          {
            role: 'Full-Stack Developer · Freelance',
            period: 'May 2025 — Jul 2026',
            description: [
              'Developed a microservices platform (NestJS + Fastify + Prisma) for credit-agent management and operations, under a Hexagonal + DDD + Clean architecture.',
              'Built the mobile app (React Native + Expo, TypeScript) and the web frontend (React + RSuite + Tailwind) that consume the microservices.',
              'Built a legal-document comparison platform with an in-house OCR microservice in Python (FastAPI + PyMuPDF + Tesseract) that digitizes scanned PDFs, and a self-hosted AI engine (Ollama) that contrasts documents and summarizes case files in a chat.',
              'Automated CI/CD with GitHub Actions (QA and production environments): image build and push with Docker Buildx, semantic versioning and secret scanning (gitleaks), with container orchestration in Docker Compose.',
              'Hardened security with Cloudflare (WAF, rate limiting and Turnstile anti-bot) and protected the APIs at application level with rate limiting (Fastify) and security headers (Helmet).',
            ],
            tags: ['NestJS', 'React Native', 'Prisma', 'Python', 'Ollama', 'Cloudflare'],
          },
        ],
      },
      {
        company: 'Exandal Holding Group',
        period: 'Jul 2025 — Jun 2026',
        duration: '1 yr',
        location: 'Lima, Peru — Agro-industry',
        roles: [
          {
            role: 'Full-Stack Developer · Self-employed',
            period: 'Jul 2025 — Jun 2026',
            description: [
              'Maintained and extended the agro-industrial quality management and analysis system (lab tests, per-lot traceability) in Node.js.',
              'Extended the system integrations: SAP (HANA via the hdb driver), scale devices over SerialPort and Excel/PDF reporting.',
              'Developed the Tickets module (internal help desk on SAP HANA): assignment, in-progress, review and closing workflow with priorities, attachments, notes with read receipts, email notifications, a Gantt planner and a reports/KPIs dashboard.',
              'Built ExcoBot, an OpenAI chatbot (function calling) that delivers SAP order traceability in natural language, with KPI charts.',
              'Designed a RAG chatbot with hybrid retrieval to trace quality and food-safety results.',
            ],
            tags: ['Node.js', 'SAP HANA', 'OpenAI', 'RAG'],
          },
        ],
      },
      {
        company: 'BizPeru',
        period: 'Jan 2025 — Dec 2025',
        duration: '1 yr',
        location: 'Remote, Peru — ISP / WiFi',
        roles: [
          {
            role: 'Full-Stack Developer · Freelance',
            period: 'Jan 2025 — Dec 2025',
            description: [
              'Built a WhatsApp chatbot (whatsapp-web.js + OpenAI) with multi-session management and real-time communication (SocketCluster) for customer support.',
              'Integrated the Niubiz payment gateway into the online store (checkout with card tokenization and charge capture), with a NestJS + Fastify + Prisma backend and a Next.js 16 + Tailwind frontend.',
              'Automated the ISP network: provisioned WiFi hotspots on MikroTik (RouterOS API) and integrated SmartOLT (fiber optics), with PDF invoicing and vouchers.',
              'Configured CI/CD with GitHub Actions (image build and push with Docker Buildx and semantic versioning) and orchestrated the services with Docker Compose.',
              'Protected the APIs with Cloudflare (WAF, rate limiting and Turnstile anti-bot) and hardened the application with rate limiting (Express/Fastify) and security headers (Helmet).',
            ],
            tags: ['NestJS', 'Next.js', 'OpenAI', 'MikroTik', 'Cloudflare'],
          },
        ],
      },
      {
        company: 'Municipalidad Metropolitana de Lima',
        period: 'Jun 2023 — Mar 2026',
        duration: '3 yrs',
        location: 'Lima — SIAM System',
        roles: [
          {
            role: 'Senior Programmer Analyst · Hybrid',
            period: 'Jun 2023 — Mar 2026',
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
        period: 'Dec 2020 — Jan 2023',
        duration: '2 yrs',
        location: 'Lima & Callao, Peru',
        roles: [
          {
            role: 'Programmer Analyst · Hybrid',
            period: 'Dec 2020 — Jan 2023',
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
        period: 'Dec 2014 — Jan 2021',
        duration: '6 yrs',
        location: 'Lima — Telecommunications (client: Telefónica del Perú)',
        roles: [
          {
            role: 'Systems Analyst — Head Office · On-site',
            period: 'Nov 2018 — Jan 2021',
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
        title: 'Portfolio v1',
        description: 'Personal portfolio v1 built with React, TailwindCSS, NodeJS and TypeScript.',
        tags: ['React', 'Tailwind', 'Node.js', 'TypeScript'],
        year: '2024',
        client: 'Personal',
        link: 'https://v1.ismaelhv.com/',
        github: 'https://github.com/IsmaellHV/portfolio-frontend-v1',
        image: '/src/assets/projects/portfolio-v1.png',
      },
      {
        id: '02',
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
        id: '03',
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
        id: '04',
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
