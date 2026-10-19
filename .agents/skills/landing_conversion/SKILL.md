---
name: Landing Conversion
description: Guía la redacción, estructura, formularios y medición de las landing comerciales de Digicore Studio, usando solo información confirmada y sin prometer resultados.
---

# Landing comercial de Digicore

Complementa a `digicore_designer` (visual), `frontend_developer` (código), `seo_specialist` (búsqueda) y `system_architect` (datos e integraciones). Aquí solo se decide qué se dice, en qué orden y cómo se mide. No impone herramientas nuevas.

## Contexto confirmado
- Digicore Studio se presenta como un estudio profesional de desarrollo web, con voz institucional y énfasis en proceso, calidad y entregables ("Estrategia · Diseño · Desarrollo"). No usar "trabajo solo", "atención directa conmigo" ni una firma personal como protagonista. No inventar empleados, departamentos, retratos de equipo, certificaciones, testimonios ni métricas; tampoco hace falta explicar la estructura interna.
- Público inicial: pequeños negocios y profesionistas en México.
- Oferta: tres paquetes de sitio web (Presencia, Profesional recomendado y Crecimiento; ver `src/lib/paquetes.ts`) y dos páginas independientes con cotización según alcance: Ads y marketing digital y Ecommerce. Renovación estándar desde $2,490 + IVA/año en Presencia y Profesional. Sin buzones de correo incluidos; el correo empresarial es un adicional. No publicar nombres de proveedores de infraestructura salvo que ayuden a una decisión del cliente.
- Presupuesto inicial de $5,000 MXN mensuales exclusivos para Google Ads. No garantiza contactos, ventas ni ingresos. Es información interna.
- El objetivo económico del fundador es privado: no aparece en contenido público.

## Portafolio
Encargos de clientes realizados por Digicore Studio. Publicados en `src/lib/proyectos.ts` con enlace y captura verificados: Clínica Integral del Peso, La Trinchera México, Beckatex, Club Triple Impacto y BPB Abogados. (The Klan queda fuera hasta confirmar enlace y estado.)
- Antes de publicar un caso, comprobar estado, alcance demostrable, imágenes y enlaces. Código existente no equivale a funcionalidad validada en producción.
- No inventar resultados, testimonios ni métricas. No publicar datos privados de clientes o usuarios.
- Mostrar los proyectos más relevantes para el comprador, no todos por defecto.

## Principios
1. Cada landing tiene un público, una oferta y una acción principal.
2. Coherencia entre búsqueda, anuncio, contenido y contacto.
3. Lenguaje comprensible sin conocimientos técnicos.
4. Beneficios explicados con funciones y entregables concretos.
5. Voz institucional: proceso, calidad y entregables; sin firma personal como protagonista.
6. No prometer ventas, posiciones en Google ni plazos sin respaldo.
7. No inventar precios, revisiones incluidas, mantenimiento ni condiciones de contratación.
8. No usar diagnósticos ni cuestionarios que aparenten analizar datos si devuelven una conclusión fija.
9. La información opcional no bloquea el trabajo: avanzar con lo confirmado y registrar pendientes. No publicar placeholders ni compromisos inventados.

## Estructura orientativa
Oferta y público; acción principal ("Solicitar propuesta"); casos de proyectos; alcance del servicio; enfoque del estudio; nuestro proceso; preguntas frecuentes; contacto. Adaptar el orden si hay una razón clara; no es una plantilla rígida. Omitir una sección antes que rellenarla con contenido no confirmado.

## Formularios y seguimiento
- Pedir solo lo útil para iniciar la conversación.
- Texto del botón, acción y confirmación deben coincidir.
- Comprobar que los campos se validan y se almacenan correctamente (rutas en `src/app/api`).
- Estados de carga, error y éxito. Disparar el éxito solo cuando el servidor confirme la recepción.
- Un clic en WhatsApp es señal de interés, no conversación ni venta.
- Distinguir: contacto recibido, contacto calificado, propuesta y venta.
- No enviar datos personales en eventos o parámetros de analítica.
- No inventar identificadores de Google Ads o Analytics; evitar duplicar conversiones entre integraciones.
- Definir e implementar medición solo dentro del alcance autorizado.

## Criterios de entrega
- Oferta comprensible y consistente; evidencia real.
- Sin enlaces rotos ni páginas incompletas en el recorrido principal.
- Formulario con estados de carga, error y éxito.
- Revisión móvil, escritorio y teclado; si no hubo navegador, informarlo.
- Sin afirmaciones comerciales no verificadas.
- Informe de pruebas y de datos pendientes.
- Sin despliegue ni activación de campañas salvo encargo explícito.
