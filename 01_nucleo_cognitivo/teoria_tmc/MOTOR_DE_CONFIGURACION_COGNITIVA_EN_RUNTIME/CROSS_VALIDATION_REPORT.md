# Informe de validación cruzada

**Build:** `MCCR-CANDIDATE-0.1.0-20260814`  
**Fecha:** `2026-08-14`  
**Resultado:** `PASS`

| ID | Prueba | Estado | Evidencia |
|---|---|---|---|
| T01 | Inventario de 58 documentos | PASS | 58 rutas esperadas |
| T02 | Sin guías de construcción | PASS | búsqueda de marcadores |
| T03 | Gobierno candidato/no canónico | PASS | README y ficha |
| T04 | Flujo C0–C12 completo | PASS | pipeline contiene C0...C12 |
| T05 | Ciclo post-ejecución/replan | PASS | documento post-ejecución |
| T06 | Contrato NO_FEASIBLE_PLAN | PASS | contrato y fixture |
| T07 | Fixtures con campos obligatorios | PASS | 10 fixtures |
| T08 | Fronteras de integración | PASS | 7 integraciones |
| T09 | No se infla implementación | PASS | runtime/Orquestador |
| T10 | Procedencia epistemológica | PASS | documentos con etiquetas/fuentes |

## Validación semántica de segunda pasada

- `VALID` precede a `OPTIMAL` en núcleo, pipeline, contratos y fixture comparativo.
- `NO_FEASIBLE_PLAN` conserva el objetivo y no relaja reglas duras.
- AC-HIA normaliza/coordina/ejecuta; MCCR especializa planificación.
- Registro y Búsqueda recuperan; MCCR selecciona; runtime ejecuta; validadores juzgan.
- MTC y ACCD conservan identidad y contratos de dominio.
- Los diez fixtures tienen oráculos positivos y negativos.
- Las propuestas de integración no fueron aplicadas.

## Resultado de estado

`CANDIDATE_WITH_OPEN_DECISIONS / NON_CANONICAL`: contenido completo, pruebas documentales PASS, decisiones de gobierno/implementación pendientes.
