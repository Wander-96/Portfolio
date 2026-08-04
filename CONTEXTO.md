# Contexto del Proyecto: Portfolio Architecture & Engineering

## 1. Identidad y Propósito del Proyecto
- **Autor:** Santiago (Fullstack Developer & QA, ex-Diseñador Sonoro).
- **Propósito:** Un portfolio técnico de élite que demuestre no solo habilidades de frontend, sino un enfoque de ingeniería riguroso, arquitectura escalable y mentalidad de Quality Assurance (QA).
- **Estética (UI/UX):** Estilo brutalista, modo oscuro por defecto (`dark`), bordes finos (`border-hairline`), y un fuerte contraste tipográfico (Serif para títulos, Monoespaciada para metadatos/sistema).

## 2. Stack Tecnológico (Core)
- **Framework:** Next.js (App Router, versión moderna con React 19).
- **Estilos:** Tailwind CSS v4 (utilizando el nuevo `@tailwindcss/postcss` y `@theme inline`).
- **Animaciones:** Framer Motion.
- **Iconografía:** Lucide React & React Icons.
- **Tipografía:** Google Fonts (`EB Garamond` para Serif, `Space Mono` para Mono).
- **Lenguaje:** TypeScript estricto.

## 3. Arquitectura del Repositorio
La estructura sigue un modelo modular y limpio:
- `/app`: Configuración del enrutador de Next.js (`layout.tsx`, `page.tsx`, `globals.css`).
- `/components`: 
  - `/layout`: Componentes estructurales (`Navbar`, `Footer`).
  - `/sections`: Secciones de la página (`Hero`, `About`, `Skills`).
  - `/ui`: Componentes atómicos reusables (`TerminalButton`).
- `/lib`: Lógica de negocio y utilidades.
  - `/i18n`: Sistema de internacionalización propio.
- `/public`: Assets estáticos (imágenes como `fondo_port.png`).

## 4. Decisiones de Ingeniería Implementadas
- **Internacionalización (i18n) Custom:** En lugar de depender de librerías pesadas como `next-i18next`, se construyó un contexto de React nativo (`LanguageContext`) con soporte para ES, EN, y PT en `/lib/i18n/translations.ts`. Menor fricción, cero dependencias extra y tipado estricto.
- **CSS Modular con Tailwind v4:** Uso de CSS nativo extendido para utilidades específicas (ej. `.border-hairline`), evitando saturar el DOM con clases interminables.
- **Semántica y Accesibilidad:** Uso correcto de etiquetas HTML5 (`<section>`, `<main>`), y clases como `focus:outline-none` emparejadas con estados focus visibles para navegación por teclado (aún mejorable).

## 5. Estado Actual (WIP - Work in Progress)
- **Completado:** Hero Section, About Me, Skills, Navbar, Footer, Sistema Multi-idioma, Tipografías globales.
- **Pendiente:** Sección de Proyectos (Case Studies), Contacto (Formulario con validación y prevención de Spam), y Tests (Unit/E2E para validar el enfoque QA).

## 6. Próximos Pasos (Visión Antigravity Top 1%)
1. **Case Studies Ejecutivos:** Los proyectos no deben ser una simple grilla. Deben ser estudios de caso detallando: Problema, Arquitectura, Seguridad, Performance y Testing.
2. **Hardening:** Implementar `Content Security Policy` (CSP) estricta en el `next.config.ts`.
3. **Performance:** Asegurarse de que el fondo del Hero (`fondo_port.png`) esté optimizado (WebP/AVIF), servido desde el componente `<Image />` de Next.js con `priority` para un FCP perfecto.
4. **Testing:** Agregar Cypress o Playwright para demostrar la mentalidad QA con tests E2E reales corriendo en un pipeline de GitHub Actions.
