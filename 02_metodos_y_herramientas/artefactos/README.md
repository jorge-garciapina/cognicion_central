# Método y herramientas de artefactos

Contiene la definición activa de artefacto, el método de uso y scripts para generar o refinar serializaciones.

## Distinciones

- Un artefacto es una fotografía cognitiva, no el proyecto vivo.
- Los scripts son herramientas; sus salidas pertenecen a `06_artefactos_generados`.
- Las versiones conceptuales sustituidas y sus correcciones se conservan en `90_historial/artefactos`.
- Los prompts que coordinan este ciclo se conservan en `prompts`; las copias de código incluidas dentro de ellos no sustituyen los scripts de esta carpeta.
- `company_code` reúne contratos y prompts reutilizables para serializar, analizar y reconstruir proyectos de software mediante JSONL/NDJSON.

## Papel dentro del artefacto integral

- **Función:** proporcionar el ciclo técnico que convierte un proyecto vivo en una fotografía transportable y permite analizarla o materializarla.
- **Entradas:** árbol del proyecto, reglas de exclusión, metadatos, codificación y parámetros de captura.
- **Salidas:** snapshots JSONL/NDJSON, refinamientos, descripciones y procesos de reconstrucción.
- **Consumidores:** mantenimiento, COMPANY CODE, análisis de repositorios y futuras exportaciones de COGNICION_CENTRAL.
- **Límite:** la fotografía no sustituye el proyecto vivo ni garantiza completitud cuando hay exclusiones, truncados, binarios o secretos.
