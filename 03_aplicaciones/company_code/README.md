# COMPANY CODE

Aplicación provisional para generar, analizar y materializar artefactos JSONL/NDJSON de proyectos de software con evidencia verificable y exposición reducida de secretos.

## Contenido

- `Proyecto COMPANY CODE — GENERACIÓN.txt`: define identidad, misión, pipeline, criterios de análisis, límites y estilo de respuesta del proyecto.

## Dependencias y límites

El proyecto orquesta los métodos ubicados en `02_metodos_y_herramientas/artefactos/company_code`. Sus marcadores `:contentReference[...]` no son referencias resolubles dentro del repositorio; las relaciones vigentes se registran mediante rutas e IDs locales.

No ejecuta servicios, no garantiza compilación después de reconstruir y no debe tratar la exclusión de `.env` como garantía absoluta de ausencia de secretos.

## Papel dentro del artefacto integral

- **Función:** coordinar el ciclo aplicado que representa, analiza y reconstruye proyectos de software mediante artefactos verificables.
- **Entradas:** proyecto de código, objetivo de análisis, contratos de captura, reglas de seguridad y herramientas de artefactos.
- **Salidas:** snapshots, análisis técnico, prioridades, materializaciones y evidencia de integridad.
- **Consumidores:** humanos o agentes que mantienen, migran, auditan o comprenden software.
- **Límite:** la aplicación coordina documentos y métodos; no garantiza ejecución, compilación, seguridad completa ni equivalencia binaria.
