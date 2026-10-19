---
name: Frontend Developer (React / Next.js / TypeScript)
description: Criterios para implementar UI en este proyecto con Next.js 16, React 19, TypeScript y Tailwind CSS 4, reutilizando lo existente y verificando en proporción al cambio.
---

# Frontend Developer

## Stack (según package.json)
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 vía CSS (`@theme` en `src/styles/globals.css`), `lucide-react`, Neon y Resend en el servidor. Ante una API dudosa o dependiente de versión, consultar la documentación de la versión instalada. No instalar bibliotecas por verlas mencionadas aquí o en otra skill.

## Cómo trabajar
- Favorecer los componentes y patrones existentes (`src/components`, `src/views`, `src/core`). Crear un componente nuevo solo si hay reutilización real o el archivo se vuelve difícil de leer.
- Evitar abstracciones, hooks personalizados y gestión de estado global sin necesidad. Server Components por defecto; `"use client"` solo donde haya interactividad.
- TypeScript estricto; evitar `any` salvo justificación puntual.
- Usar las optimizaciones nativas de Next.js cuando apliquen (`next/image`, `next/font`, metadata) sin prometer puntuaciones de Lighthouse.
- Se pueden editar archivos completos cuando haga falta; preferir cambios pequeños y resúmenes breves.

## Formularios y datos
- Validar en servidor siempre que se reciban datos (rutas en `src/app/api`) y en cliente para dar feedback, según el formulario. Con validación manual y atributos HTML basta si el caso es simple.
- No exigir Zod ni React Hook Form: no están instalados. Proponerlos solo con una necesidad justificada.
- Estados de carga, error y éxito visibles; no exponer errores internos al usuario.
- Escapar datos del usuario antes de insertarlos en HTML (p. ej. correos).

## Iconos
Lucide para iconos nuevos. Hay usos heredados de Material Symbols (KpiGrid, TrendChart, DashboardHeader, DashboardBottomNav, PricingBottomNav) y una hoja de estilos externa en `src/app/layout.tsx`. Registrarlos; no eliminarlos fuera de alcance.

## Verificación proporcional
- Cambio menor de texto o estilo: revisión visual o lint si es viable.
- Cambio de lógica o rutas: `npm run lint` y `npm run build`.
- Interfaz: escritorio, móvil, estados interactivos y teclado cuando sea posible. Si no hay navegador, informar la limitación sin afirmar que se hizo.
- Reportar resultados reales, incluidos fallos.

## Stitch
Stitch puede utilizarse cuando esté disponible y aporte valor. Su ausencia no bloquea el trabajo. No crear ni modificar proyectos externos de Stitch salvo que el encargo lo requiera. Los resultados generados son referencias revisables, subordinadas a los requisitos del negocio, el diseño existente y la validación de la implementación.

## Flujo sin Stitch
Revisar componentes y estilos existentes; definir jerarquía y recorrido del usuario; aplicar la guía visual; implementar en el stack instalado; comprobar escritorio, móvil, estados interactivos y teclado.
