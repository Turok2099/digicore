---
name: Template Skill
description: Una plantilla base para crear nuevas habilidades.
---

# Template Skill

Esta es una plantilla para crear "Skills" (Habilidades) para tu Agente Asistente (Antigravity). Las habilidades extienden mis capacidades permitiéndome especializarme en tareas complejas mediante instrucciones persistentes, scripts y recursos.

## Estructura de una Habilidad

Cada habilidad vive en su propia carpeta bajo `.agents/skills/nombre_de_la_habilidad/` y DEBE contener:

1. **`SKILL.md` (Requerido):** Este archivo. Debe incluir el frontmatter YAML (`name`, `description`) en la parte superior, seguido de las instrucciones detalladas en Markdown que debo seguir cuando use esta habilidad.

Dependiendo de la complejidad, puedes incluir carpetas adicionales:
- **`scripts/`**: Utilidades y scripts que extiendan mis capacidades.
- **`examples/`**: Implementaciones de referencia y patrones de uso.
- **`resources/`**: Archivos adicionales, plantillas o cualquier asset necesario.

## Cómo usar el Sistema de Habilidades

Cuando me asignes una tarea en este proyecto y una habilidad de este directorio parezca relevante (por ejemplo, me pides "Ejecuta la habilidad de despliegue"), leeré automáticamente el archivo `SKILL.md` correspondiente y seguiré sus directivas al pie de la letra, exactamente como lo has documentado.

### Reglas para Definir Instrucciones
1. Sé extremadamente específico sobre las herramientas que debo usar o los scripts que debo ejecutar.
2. Define claramente cómo debo interpretar los resultados.
3. Puedes añadir scripts de Node o Powershell en la subcarpeta `scripts/` y pedirme en el `SKILL.md` que los ejecute.
