import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(
        (component) => component.MainLayout,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/portfolio-page/portfolio-page').then(
            (component) => component.PortfolioPage,
          ),
        data: { language: 'es' },
        title:
          'José Enrique Reyes | Ingeniero de Sistemas y Arquitecto Backend',
      },
      {
        path: 'en',
        loadComponent: () =>
          import('./features/portfolio-page/portfolio-page').then(
            (component) => component.PortfolioPage,
          ),
        data: { language: 'en' },
        title: 'José Enrique Reyes | Systems Engineer & Backend Architect',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
