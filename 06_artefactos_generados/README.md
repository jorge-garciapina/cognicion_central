# 06_artefactos_generados

Destino de nuevas fotografías cognitivas, exportaciones y serializaciones producidas por el sistema.

## Regla de admisión

Cada salida debe indicar proyecto de origen, fecha, versión, herramienta generadora y hash cuando corresponda. Un artefacto generado no sustituye automáticamente a las fuentes vivas que representa.

Los artefactos activos heredados están ubicados junto al módulo que sirven y registrados como `ARTIFACT_SNAPSHOT`; esta carpeta se reserva para nuevas salidas controladas.

## Subáreas

- `busqueda_cognitiva`: fotografías estadísticas e índices producidos por ejecuciones auditables de BÚSQUEDA_COGNITIVA.

## Papel dentro del artefacto integral

- **Función:** conservar las salidas reproducibles que el sistema produce sin confundirlas con sus fuentes vivas.
- **Entradas:** ejecución gobernada, corpus, parámetros, herramienta, fecha, versión y reglas de exclusión.
- **Salidas:** snapshots, índices, exportaciones, hashes y evidencia computacional auditable.
- **Consumidores:** recuperación, comparación temporal, análisis, reconstrucción y validación de resultados.
- **Límite:** un artefacto generado es una fotografía; no modifica sus fuentes, no crea corroboración independiente y no hereda autoridad canónica.
