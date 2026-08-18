# Validación de materialización MRRE 0.1.0

**Fecha:** 2026-08-17  
**Alcance:** estructura documental, contratos, referencias, preservación histórica y cobertura fuente.  
**Resultado:** `PASS_MATERIALIZATION / DOMAIN_RUNS_PENDING / HUMAN_REVIEW_REQUIRED`.

| Control | Resultado | Evidencia |
|---|---:|---|
| fuentes leídas | 48 IDs auditados; 2 620 archivos; 5 715 266 bytes | cobertura con huellas agregadas |
| JSON fuente ACCD | 2 476 válidos; 0 errores | lectura/parse recursivo |
| archivos obligatorios del scaffolding | 66/66 | comparación de árbol |
| archivos del paquete | 125; 0 vacíos; 0 directorios vacíos | inventario local |
| YAML | 29/29 parseados | `js-yaml` |
| JSON Schemas | 7/7 compilados | AJV draft 2020-12 |
| manifiesto | 58 refs existentes | resolución de rutas |
| registry runtime | 10 componentes; dependencias válidas | validación de IDs/archivos |
| índice federado | 130/130 patrones; 0 duplicados | tabla exhaustiva |
| enlaces Markdown | 130 internos; 0 rotos | resolución desde archivo origen |
| Mermaid | fences balanceados; 55 archivos activos con diagramas | revisión estática |
| rutas explícitas de fixtures/adapters | 13/13 existentes | resolución absoluta controlada |
| antecedentes movidos | 8/8 blobs idénticos a `HEAD` | hash Git de contenido |

## Límites de esta validación

- Se verificó sintaxis/estructura de Mermaid, no renderizado semántico con CLI porque no existe renderer local disponible.
- Los fixtures Collar, Reuters y Aspiradora están materializados, pero sus runs de dominio no se ejecutaron; el baseline los mantiene pendientes.
- Puente del Valle permanece correctamente bloqueado por `analisis-de-estructuras.pdf / PATH_PENDING_CONFIRMATION`.
- Las fuentes multimodales adjuntas pendientes no fueron inventadas; el fixture sólo prueba metadata sintética y comportamiento de ausencia.
- Pasar esta validación no promueve el paquete a canon. Requiere revisión humana y ejecución de suites de dominio.

## Dictamen

El paquete está materializado y navegable como miembro candidato de `COGNICIÓN_CENTRAL`. Puede ser configurado por MCCR y consumido mediante sus schemas; no debe declararse runtime implementado ni conocimiento canónico hasta ejecutar pruebas y aprobar promoción.

Este informe queda como baseline 0.1. La revisión operativa 0.2 se valida con [MRRE-VAL-DOC](04_validacion_de_referencias_y_operabilidad.md) y su decisión se registra en [MRRE-DECISION-0.2](../90_historial/decisiones_historicas/DECISION_REVISION_OPERATIVA_0_2_0.md).
