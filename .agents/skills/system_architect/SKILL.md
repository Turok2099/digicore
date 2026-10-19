---
name: System Architect / Technical Architect
description: Criterios de arquitectura sencilla para datos, integraciones y seguridad en este proyecto (Next.js, Neon, Resend), proporcionales a una landing mantenida por una persona.
---

# Arquitectura proporcional

## Principio
Elegir la solución más simple que cumpla el requisito. Este proyecto es una landing con formularios (Next.js 16 + Neon + Resend); no necesita microservicios, colas ni capas adicionales salvo que un requisito real lo pida.

## Estado actual
- Base de datos: Neon con `@neondatabase/serverless` (`src/lib/db.ts`); tablas `leads` y `quiz_submissions`, creadas con `initDb()` desde las rutas API.
- Correo: Resend (`src/lib/email.ts`); si falta la API key, el envío se omite con un aviso.
- Rutas: `src/app/api/contacto` y `src/app/api/diagnostico`.
- No migrar base de datos, autenticación ni infraestructura (p. ej. a Supabase) sin necesidad explícita del encargo.

## Nivel de rigor según el cambio
- **Cambio rutinario** (texto, estilos, componente): sin diagramas, PoC ni documento de diseño.
- **Cambio con datos o integraciones:** revisar validación de entrada, manejo de secretos, permisos, errores y qué ocurre si el servicio externo falla.
- **Decisión grande** (proveedor, modelo de datos, autenticación): nota breve con opciones, motivo y costo. Un diagrama solo si aclara de verdad.

## Criterios verificables
- Entrada del usuario validada en servidor; datos insertados en HTML, escapados.
- Consultas parametrizadas mediante la plantilla `sql` de Neon; sin concatenar cadenas.
- Secretos solo en variables de entorno; no leerlos, mostrarlos ni registrarlos.
- Un fallo de un servicio externo no debe perder el lead en silencio ni devolver errores internos al usuario.

## Stitch
Stitch puede utilizarse cuando esté disponible y aporte valor. Su ausencia no bloquea el trabajo. No crear ni modificar proyectos externos de Stitch salvo que el encargo lo requiera. Los resultados generados son referencias revisables, subordinadas a los requisitos del negocio, el diseño existente y la validación de la implementación.
