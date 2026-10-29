export interface TechnologyVisual {
  iconClass: string;
  iconKind: 'devicon' | 'bootstrap';
  accent: string;
}

const fallback: TechnologyVisual = {
  iconClass: 'bi bi-code-square',
  iconKind: 'bootstrap',
  accent: '#1d4ed8',
};

const catalog: Record<string, TechnologyVisual> = {
  Python: {
    iconClass: 'devicon-python-plain colored',
    iconKind: 'devicon',
    accent: '#3776ab',
  },
  Django: {
    iconClass: 'devicon-django-plain colored',
    iconKind: 'devicon',
    accent: '#0c4b33',
  },
  'Django REST Framework': {
    iconClass: 'bi bi-braces-asterisk',
    iconKind: 'bootstrap',
    accent: '#a30000',
  },
  PostgreSQL: {
    iconClass: 'devicon-postgresql-plain colored',
    iconKind: 'devicon',
    accent: '#336791',
  },
  Angular: {
    iconClass: 'devicon-angularjs-plain colored',
    iconKind: 'devicon',
    accent: '#dd0031',
  },
  JavaScript: {
    iconClass: 'devicon-javascript-plain colored',
    iconKind: 'devicon',
    accent: '#c8a600',
  },
  Git: {
    iconClass: 'devicon-git-plain colored',
    iconKind: 'devicon',
    accent: '#f05032',
  },
  Laravel: {
    iconClass: 'devicon-laravel-original colored',
    iconKind: 'devicon',
    accent: '#ff2d20',
  },
  Bootstrap: {
    iconClass: 'devicon-bootstrap-plain colored',
    iconKind: 'devicon',
    accent: '#7952b3',
  },
  Ionic: {
    iconClass: 'devicon-ionic-original colored',
    iconKind: 'devicon',
    accent: '#3880ff',
  },
  jQuery: {
    iconClass: 'devicon-jquery-plain colored',
    iconKind: 'devicon',
    accent: '#0769ad',
  },
  Stripe: {
    iconClass: 'bi bi-stripe',
    iconKind: 'bootstrap',
    accent: '#635bff',
  },
  PayPal: {
    iconClass: 'bi bi-paypal',
    iconKind: 'bootstrap',
    accent: '#003087',
  },
  SAP: {
    iconClass: 'bi bi-building-gear',
    iconKind: 'bootstrap',
    accent: '#0a6ed1',
  },
  NetSuite: {
    iconClass: 'bi bi-diagram-3-fill',
    iconKind: 'bootstrap',
    accent: '#4b5563',
  },
  Linux: {
    iconClass: 'devicon-linux-plain',
    iconKind: 'devicon',
    accent: '#111827',
  },
  Nginx: {
    iconClass: 'devicon-nginx-original colored',
    iconKind: 'devicon',
    accent: '#009639',
  },
  Gunicorn: {
    iconClass: 'bi bi-server',
    iconKind: 'bootstrap',
    accent: '#499848',
  },
  VPS: {
    iconClass: 'bi bi-server',
    iconKind: 'bootstrap',
    accent: '#1d4ed8',
  },
};

export function getTechnologyVisual(name: string): TechnologyVisual {
  return catalog[name] ?? fallback;
}
