# Decisión de revisión operativa MRRE 0.2.0

**ID:** `MRRE-DECISION-0.2`  
**Fecha:** `2026-08-18`  
**Estado:** `IMPLEMENTED_CANDIDATE / HUMAN_REVIEW_REQUIRED`

## Problema aceptado

La materialización 0.1 era estructuralmente completa respecto del scaffolding, pero insuficientemente operable: las fuentes se mencionaban sin enlaces científicos relativos, los ejemplos no exponían artefactos intermedios, los procesos carecían de instrucciones suficientes y el README no funcionaba como mapa profundo.

## Cambios decididos

1. norma obligatoria `[ID](ruta-relativa)` y bibliografía navegable;
2. README reconstruido como puerta operativa;
3. manual P0–P13 y workbook de artefactos/algoritmos;
4. expansión de kernel, protocolos, componentes, especializaciones e integraciones;
5. cinco dossiers con fuente, segmentación, grafos, chains, arquitectura, esqueleto, alternativas y validación o bloqueo justificado;
6. schemas nuevos para `CASE_SPEC`, `SEGMENTATION_GRAPH` y `CHAIN/CANDIDATE_ARCHITECTURE`;
7. componente runtime `CHAIN_ARCHITECTURE_ASSEMBLER`;
8. validador ejecutable de referencias y operabilidad;
9. versión del paquete elevada a `0.2.0` sin promoverla a canon.

## Compatibilidad y límites

Los antecedentes preservados y catálogos no fueron reescritos. Los schemas 0.1 existentes permanecen compatibles; los contratos nuevos usan 0.2. Los runs de casos son referencias documentales reproducibles y no equivalen a runtime de software ni a validación universal de dominio.

Puente del Valle continúa `WAITING_SOURCE`; los adjuntos multimodales no identificados siguen pendientes. La revisión no inventa esas fuentes.

## Evidencia

- especificación vigente: `README.md`, `MRRE_MANIFEST.yaml`;
- norma: `00_gobierno/06_norma_de_referencias_y_citacion.md`;
- manual/workbook: `01_kernel_estable/09_manual_de_operacion_para_agentes.md`, `03_protocolos_operacionales/07_libro_de_trabajo_y_algoritmos.md`;
- casos: `09_casos_y_ejemplos/`;
- validación: `08_validacion_y_pruebas/04_validacion_de_referencias_y_operabilidad.md`.

La decisión puede reabrirse si el validador falla, una fuente cambia, un schema resulta insuficiente o una ejecución de dominio falsifica un invariante.
