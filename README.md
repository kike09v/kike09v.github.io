# Portfolio de José Enrique Reyes

Portfolio profesional bilingüe construido con Angular. Español está disponible en
`/` e inglés en `/en`.

## Requisitos

- Node.js 24 LTS
- npm 11 o una versión compatible

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4317/`. Si ese puerto está
ocupado, puede iniciarse en el puerto alternativo:

```bash
npx ng serve --port 4321
```

## Editar el contenido

Todos los textos, datos profesionales y traducciones se encuentran en:

```text
src/app/core/data/profile.ts
```

Modifica los objetos `es` y `en` para mantener ambos idiomas sincronizados. Los
componentes no contienen textos profesionales.

La aplicación usa componentes standalone organizados por responsabilidad:

- `src/app/core/`: datos, modelos y servicios.
- `src/app/shared/`: componentes reutilizables.
- `src/app/layout/`: shell principal con navegación y footer.
- `src/app/features/`: página y secciones del portfolio.

## Pruebas

```bash
npm test
```

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/kike09v.github.io/browser/`. El script de build
también crea `en/index.html` para servir la ruta inglesa directamente y
`404.html` como fallback para GitHub Pages.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` ejecuta las pruebas, genera el
build y publica el artefacto cuando hay un push a `main`.

En la configuración del repositorio:

1. Abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
3. Publica cambios en la rama `main`.

La URL esperada para el repositorio `kike09v.github.io` es:

```text
https://kike09v.github.io/
```

Este proyecto es independiente del repositorio de perfil `kike09v/kike09v` y no
modifica su README.
