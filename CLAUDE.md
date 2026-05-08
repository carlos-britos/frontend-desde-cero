# frontend-desde-cero

## Objetivo

Curso de frontend para personas que empiezan desde cero. Cada clase es una página con contenido interactivo y explicaciones claras.

## Stack y setup

- **React 19** + **TypeScript** + **Vite** como bundler.
- **react-router** para navegación entre clases (SPA).
- CSS puro en archivos externos (un `.css` por componente/página).
- `npm run dev` para desarrollo, `npm run build` para producción.

## Estructura del proyecto

```
src/
  App.tsx              — rutas principales
  main.tsx             — entry point
  styles/              — reset, tokens y estilos globales
  components/          — componentes reutilizables (Layout, FlipCard, Checklist, etc.)
  hooks/               — hooks custom (useScrollProgress, useIntersectionObserver, etc.)
  pages/
    HomePage.tsx       — página principal con grilla de clases
    Clase01.../        — cada clase es un directorio con su .tsx principal, .css y subcomponentes
clases/                — HTMLs originales (legacy, no se usan en la app React)
```

## Reglas del proyecto

- **CSS siempre externo**: nunca estilos inline ni `style=""` (atributos propios de SVG como `fill`, `stroke`, etc. sí están permitidos).
- **Estilo consistente**: todas las páginas comparten la misma estructura visual a través del componente `Layout`.
- **Navegación**: el `Layout` provee la navegación entre clases; cada página nueva se agrega como ruta en `App.tsx`.
- **Índice en la homepage**: cada clase nueva se agrega en `HomePage.tsx` dentro de la grilla de tarjetas (`ClaseCard`).
- **Componentes reutilizables**: si un patrón interactivo se repite entre clases, extraerlo a `src/components/`.

## Flujo de creación de clases

El proyecto usa 3 agentes en cadena:

1. **Guionista** (`guionista.md`) — Investiga el tema en internet y produce un guión de la clase.
2. **Profesor** (`profesor.md`) — Toma el guión, diseña cómo explicarlo de forma fácil e interactiva, y genera un plan de implementación con gráficos/ilustraciones si son necesarios.
3. **Implementador** (`implementador.md`) — Toma el plan del profesor y genera los componentes React (`.tsx` + `.css`), verifica errores y mantiene consistencia con las demás páginas.

## Notas del proyecto

- Overview y contexto: ver `notas/index.md`.
- Convenciones generales sobre `notas/` y `diario/` están en `~/.claude/CLAUDE.md`.
- En los bloques de sesión del diario, usar exactamente este nombre de proyecto: **frontend-desde-cero**.
