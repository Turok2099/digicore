---
name: SEO Specialist / Technical SEO
description: Criterios de SEO técnico y de contenido para la landing comercial de Digicore Studio, con foco en metadatos, semántica, indexabilidad y rendimiento, sin promesas de posicionamiento.
---

# SEO para una landing comercial

## Alcance y límites
El SEO técnico ayuda a que las páginas se rastreen, se entiendan y carguen bien; no garantiza posiciones. Distinguir tres frentes: **técnico** (metadatos, semántica, indexación, rendimiento), **contenido** (qué responde cada página) y **adquisición** (enlaces, campañas, redes). Aquí se trabaja sobre todo el primero y se apoya el segundo.

## Prioridades para la landing
1. Título y descripción únicos y fieles al contenido (Metadata API de Next.js; ver `src/app/layout.tsx`).
2. Semántica: un H1, jerarquía de encabezados coherente, texto alternativo útil, enlaces con texto descriptivo.
3. Indexabilidad: `robots.ts`, `sitemap.ts` y canonical acordes al propósito de cada página.
4. Rendimiento: imágenes optimizadas, fuentes con `next/font`, sin scripts bloqueantes innecesarios. Medir cuando sea posible; no prometer puntuaciones.

## Reglas
- No crear páginas por sector o ciudad sin contenido útil propio y una necesidad real.
- Datos estructurados (JSON-LD) solo si son pertinentes y verificables con datos reales del negocio.
- No inventar reseñas, calificaciones, resultados, casos, direcciones ni datos empresariales.
- No afirmar que se consultó Search Console, Analytics, PageSpeed u otra herramienta sin acceso y evidencia. Sin acceso, proponer qué medir y cómo.
- La indexación depende del propósito de la página. Usar `noindex` solo si es duplicada, privada o sin valor de búsqueda; recibir tráfico de anuncios no implica `noindex`.
- `src/lib/seo-keywords.json` es referencia; escribir para personas y evitar relleno.
- Priorizar recomendaciones por esfuerzo frente a impacto esperado, indicando que el impacto es una estimación.

## Stitch
Stitch es opcional. Cualquier referencia de diseño, incluida la de Stitch si se usó, es revisable y no acredita rendimiento, accesibilidad ni estabilidad visual: eso se comprueba en la implementación.
