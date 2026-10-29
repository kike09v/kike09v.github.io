import {
  Language,
  ProfileContent,
} from '../models/profile.models';

const shared = {
  name: 'José Enrique Reyes B.',
  email: 'jerb5665@gmail.com',
  github: 'https://github.com/kike09v',
  linkedIn: 'https://www.linkedin.com/in/engineer-jose-enrique-reyes',
} as const;

export const contactLinks = shared;

export const profiles = {
  es: {
    language: 'es',
    locale: 'es_VE',
    seo: {
      title: 'José Enrique Reyes | Ingeniero de Sistemas y Arquitecto Backend',
      description:
        'Portfolio de José Enrique Reyes, Ingeniero de Sistemas y Arquitecto Backend Full-Stack especializado en Django, ERPs y sistemas B2B.',
    },
    accessibility: {
      skipToContent: 'Saltar al contenido principal',
      openNavigation: 'Abrir navegación',
      closeNavigation: 'Cerrar navegación',
      primaryNavigation: 'Navegación principal',
      languageSelector: 'Selector de idioma',
      currentLanguage: 'Idioma actual',
      externalLink: 'Abre en una pestaña nueva',
    },
    navigation: [
      { label: 'Perfil', sectionId: 'perfil' },
      { label: 'Experiencia', sectionId: 'experiencia' },
      { label: 'Proyectos', sectionId: 'proyectos' },
      { label: 'Stack', sectionId: 'stack' },
      { label: 'Formación', sectionId: 'formacion' },
      { label: 'Contacto', sectionId: 'contacto' },
    ],
    hero: {
      availability: 'Venezuela',
      name: shared.name,
      role: 'Ingeniero de Sistemas y Arquitecto Backend Full-Stack',
      introduction:
        'Diseño backends, integro ERPs y convierto procesos de negocio en sistemas que los equipos pueden operar.',
      primaryAction: 'Conversemos',
      secondaryAction: 'Ver experiencia',
      experienceLabel: 'Experiencia',
      experienceValue: 'Más de 8 años',
      locationLabel: 'Modalidad',
      locationValue: 'Remoto o híbrido',
    },
    profile: {
      eyebrow: 'Perfil',
      title: 'Arquitectura técnica conectada con la operación.',
      paragraphs: [
        'Ingeniero de Sistemas con experiencia construyendo soluciones backend, integrando plataformas empresariales y acompañando su despliegue.',
        'Mi trabajo se concentra en comprender el modelo del negocio, convertirlo en una arquitectura mantenible y entregar sistemas que funcionen en el día a día.',
      ],
      focusTitle: 'Áreas de enfoque',
      focusAreas: [
        'Backends con Python y Django',
        'Sistemas B2B y ERPs',
        'Datos, inventario y partida doble',
        'Despliegue en infraestructura Linux',
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Liderazgo técnico y ejecución.',
      recentLabel: 'Experiencia reciente',
      earlierLabel: 'Trayectoria anterior',
      items: [
        {
          role: 'Consultor independiente y Arquitecto de Soluciones',
          period: 'feb. 2026—actualidad',
          description:
            'Diseño y desarrollo soluciones transaccionales SaaS y ERP para empresas B2B, desde el modelado de datos y la arquitectura backend con Django hasta el despliegue en VPS Linux.',
          technologies: ['Python', 'Django', 'PostgreSQL'],
        },
        {
          role: 'Coordinador de Sistemas',
          organization: 'TRT Overseas LLC',
          period: 'oct. 2023—ene. 2026',
          description:
            'Lideré el equipo de sistemas y la migración a NetSuite y SAP. Coordiné la digitalización de ventas con Listaso y la gestión de inventario y notas de crédito para siete almacenes.',
          technologies: ['SAP', 'NetSuite'],
        },
        {
          role: 'Desarrollador Full-Stack',
          organization: 'Turpial Development',
          period: 'jun. 2021—abr. 2023',
          description:
            'Desarrollé interfaces Angular para productos financieros y colaboré en backends Django, análisis de transacciones y digitalización documental para operaciones internas.',
          technologies: ['Angular', 'Django', 'Git'],
        },
        {
          role: 'Desarrollador Front-End',
          organization: 'Pago Chinchin',
          period: 'jun. 2020—jun. 2021',
          description:
            'Desarrollé la landing y el entorno privado en Angular, incluyendo módulos de recarga, pago de servicios, tarjetas de regalo y control de acceso.',
          technologies: ['Angular', 'JavaScript', 'Git'],
        },
        {
          role: 'Desarrollador Web',
          organization: 'Tecnofep C.A.',
          period: 'jul. 2019—jun. 2020',
          description:
            'Coordiné un MVP de BackOffice para logística y recursos humanos, con gestión de flota, clientes, permisos, auditoría y dashboards operativos.',
          technologies: ['Laravel', 'Bootstrap', 'Git'],
        },
        {
          role: 'Desarrollador Full-Stack',
          organization: 'Desarrollo y Diseño S.O.S.',
          period: 'abr. 2018—may. 2019',
          description:
            'Desarrollé plataformas de comercio electrónico y reservas, integraciones con Stripe y PayPal, importación de productos mediante Excel y gestión de roles y permisos.',
          technologies: ['Bootstrap', 'Git', 'Stripe', 'PayPal'],
        },
        {
          role: 'Desarrollador Junior',
          organization: 'Soluciones Medianet, C.A.',
          period: 'nov. 2017—abr. 2018',
          description:
            'Implementé interfaces con Bootstrap y jQuery y colaboré en aplicaciones híbridas desarrolladas con Ionic para clientes de servicios profesionales.',
          technologies: ['Bootstrap', 'jQuery', 'Ionic', 'Git'],
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Sistemas con lógica de negocio real.',
      intro:
        'Una selección de productos centrados en operaciones financieras y experiencias web en tiempo real.',
      technologyLabel: 'Tecnologías',
      items: [
        {
          name: 'Sistema de gestión financiera',
          label: 'Caso de estudio anonimizado',
          description:
            'Aplicación empresarial para registrar y controlar operaciones financieras mediante un modelo contable de partida doble.',
          technologies: [
            'Django',
            'PostgreSQL',
            'VPS',
            'Linux',
            'Nginx',
            'Gunicorn',
          ],
        },
        {
          name: 'World Cup Predictions',
          label: 'Proyecto open-source',
          description:
            'Aplicación web open-source de quinielas deportivas con tablas de posiciones en tiempo real.',
          technologies: ['Django'],
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Tecnología al servicio del producto.',
      intro:
        'Herramientas utilizadas para modelar, construir, integrar y desplegar soluciones empresariales.',
      items: [
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Angular',
        'SAP',
        'NetSuite',
        'Linux',
        'Nginx',
        'Gunicorn',
      ],
    },
    education: {
      eyebrow: 'Formación',
      title: 'Base académica.',
      item: {
        degree: 'Ingeniero de Sistemas',
        institution: 'Universidad Bicentenaria de Aragua (UBA)',
        period: '2013—2019',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Construyamos algo que funcione.',
      text: 'Disponible para conversar sobre sistemas B2B, arquitectura backend, integraciones ERP y oportunidades remotas.',
      emailLabel: 'Escríbeme',
      linksLabel: 'También puedes encontrarme en',
    },
    footer: {
      statement: 'Ingeniería enfocada en sistemas que el negocio puede operar.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    language: 'en',
    locale: 'en_US',
    seo: {
      title: 'José Enrique Reyes | Systems Engineer & Backend Architect',
      description:
        'Portfolio of José Enrique Reyes, a Systems Engineer and Full-Stack Backend Architect focused on Django, ERPs, and B2B systems.',
    },
    accessibility: {
      skipToContent: 'Skip to main content',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      primaryNavigation: 'Primary navigation',
      languageSelector: 'Language selector',
      currentLanguage: 'Current language',
      externalLink: 'Opens in a new tab',
    },
    navigation: [
      { label: 'Profile', sectionId: 'profile' },
      { label: 'Experience', sectionId: 'experience' },
      { label: 'Projects', sectionId: 'projects' },
      { label: 'Stack', sectionId: 'stack' },
      { label: 'Education', sectionId: 'education' },
      { label: 'Contact', sectionId: 'contact' },
    ],
    hero: {
      availability: 'Venezuela',
      name: shared.name,
      role: 'Systems Engineer & Full-Stack Backend Architect',
      introduction:
        'I design backends, integrate ERPs, and turn business processes into systems teams can operate.',
      primaryAction: 'Let’s talk',
      secondaryAction: 'View experience',
      experienceLabel: 'Experience',
      experienceValue: '8+ years',
      locationLabel: 'Work model',
      locationValue: 'Remote or hybrid',
    },
    profile: {
      eyebrow: 'Profile',
      title: 'Technical architecture connected to operations.',
      paragraphs: [
        'Systems Engineer experienced in building backend solutions, integrating enterprise platforms, and supporting their deployment.',
        'My work centers on understanding the business model, translating it into maintainable architecture, and delivering systems that perform in day-to-day operations.',
      ],
      focusTitle: 'Focus areas',
      focusAreas: [
        'Python and Django backends',
        'B2B systems and ERPs',
        'Data, inventory, and double-entry accounting',
        'Deployment on Linux infrastructure',
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Technical leadership and execution.',
      recentLabel: 'Recent experience',
      earlierLabel: 'Earlier career',
      items: [
        {
          role: 'Independent Consultant & Solutions Architect',
          period: 'Feb. 2026—present',
          description:
            'I design and build transactional SaaS and ERP solutions for B2B companies, from data modeling and Django backend architecture to deployment on Linux VPS infrastructure.',
          technologies: ['Python', 'Django', 'PostgreSQL'],
        },
        {
          role: 'Systems Coordinator',
          organization: 'TRT Overseas LLC',
          period: 'Oct. 2023—Jan. 2026',
          description:
            'Led the systems team and the migration to NetSuite and SAP. Coordinated sales digitization with Listaso and inventory and credit-note data management for seven warehouses.',
          technologies: ['SAP', 'NetSuite'],
        },
        {
          role: 'Full-Stack Developer',
          organization: 'Turpial Development',
          period: 'Jun. 2021—Apr. 2023',
          description:
            'Built Angular interfaces for financial products and contributed to Django backends, transaction analysis, and document digitization for internal operations.',
          technologies: ['Angular', 'Django', 'Git'],
        },
        {
          role: 'Front-End Developer',
          organization: 'Pago Chinchin',
          period: 'Jun. 2020—Jun. 2021',
          description:
            'Built the public landing page and private Angular application, including funding, bill payment, gift card, and access-control modules.',
          technologies: ['Angular', 'JavaScript', 'Git'],
        },
        {
          role: 'Web Developer',
          organization: 'Tecnofep C.A.',
          period: 'Jul. 2019—Jun. 2020',
          description:
            'Coordinated a BackOffice MVP for logistics and human resources, covering fleet, client, permissions, auditing, and operational dashboard management.',
          technologies: ['Laravel', 'Bootstrap', 'Git'],
        },
        {
          role: 'Full-Stack Developer',
          organization: 'Desarrollo y Diseño S.O.S.',
          period: 'Apr. 2018—May 2019',
          description:
            'Built e-commerce and booking platforms, Stripe and PayPal integrations, Excel-based product imports, and role and permission management.',
          technologies: ['Bootstrap', 'Git', 'Stripe', 'PayPal'],
        },
        {
          role: 'Junior Developer',
          organization: 'Soluciones Medianet, C.A.',
          period: 'Nov. 2017—Apr. 2018',
          description:
            'Implemented interfaces with Bootstrap and jQuery and contributed to Ionic hybrid applications for professional-services clients.',
          technologies: ['Bootstrap', 'jQuery', 'Ionic', 'Git'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Systems built around real business logic.',
      intro:
        'A selection of products focused on financial operations and real-time web experiences.',
      technologyLabel: 'Technologies',
      items: [
        {
          name: 'Financial Management System',
          label: 'Anonymized case study',
          description:
            'Enterprise application for recording and managing financial operations through a double-entry accounting model.',
          technologies: [
            'Django',
            'PostgreSQL',
            'VPS',
            'Linux',
            'Nginx',
            'Gunicorn',
          ],
        },
        {
          name: 'World Cup Predictions',
          label: 'Open-source project',
          description:
            'Open-source sports prediction web app with real-time standings.',
          technologies: ['Django'],
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Technology in service of the product.',
      intro:
        'Tools used to model, build, integrate, and deploy enterprise solutions.',
      items: [
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Angular',
        'SAP',
        'NetSuite',
        'Linux',
        'Nginx',
        'Gunicorn',
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic foundation.',
      item: {
        degree: 'Systems Engineer',
        institution: 'Universidad Bicentenaria de Aragua (UBA)',
        period: '2013—2019',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something that works.',
      text: 'Available to discuss B2B systems, backend architecture, ERP integrations, and remote opportunities.',
      emailLabel: 'Email me',
      linksLabel: 'You can also find me on',
    },
    footer: {
      statement: 'Engineering focused on systems the business can operate.',
      backToTop: 'Back to top',
    },
  },
} satisfies Record<Language, ProfileContent>;
