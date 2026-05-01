# frontend-desde-cero

## Objetivo

Curso de frontend para personas que empiezan desde cero. Cada clase es una página HTML independiente con contenido interactivo y explicaciones claras.

## Stack y setup

- HTML, CSS y JS puros (sin frameworks).
- Cada página `.html` linkea su CSS y JS como archivos externos (nunca inline).
- Para correrlo alcanza con abrir los HTML en un navegador o usar un live-server.

## Reglas del proyecto

- **CSS y JS siempre externos**: nunca `<style>` ni `<script>` inline dentro del HTML.
- **Estilo consistente**: todas las páginas comparten la misma estructura visual y navegación entre clases.
- **Navegación**: cada página debe tener links a las demás clases.

## Flujo de creación de clases

El proyecto usa 3 agentes en cadena:

1. **Guionista** (`guionista.md`) — Investiga el tema en internet y produce un guión de la clase.
2. **Profesor** (`profesor.md`) — Toma el guión, diseña cómo explicarlo de forma fácil e interactiva, y genera un plan de implementación con gráficos/ilustraciones si son necesarios.
3. **Implementador** (`implementador.md`) — Toma el plan del profesor y genera el HTML + CSS + JS externos, verifica errores y mantiene consistencia con las demás páginas.

## Notas del proyecto

- Overview y contexto: ver `notas/index.md`.
- Convenciones generales sobre `notas/` y `diario/` están en `~/.claude/CLAUDE.md`.
- En los bloques de sesión del diario, usar exactamente este nombre de proyecto: **frontend-desde-cero**.
