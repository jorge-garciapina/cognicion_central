# NO_FEASIBLE_PLAN, fallos y degradación

**ID:** `MCCR-CON-NFP-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

`NO_FEASIBLE_PLAN` es una salida útil y rigurosa: prueba que, bajo el snapshot y las restricciones actuales, no se encontró o no existe una configuración válida. Nunca autoriza degradación silenciosa.

## Responsabilidad

Este documento es responsable de:

- tipos de inviabilidad
- schema de salida
- alternativas, aclaración y degradación autorizada

No es responsable de:

- confundir fallo técnico con contradicción del problema
- prometer imposibilidad global con búsqueda parcial
- cambiar el resultado para “ayudar”

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| FAILED_SEARCH_OR_VALIDATION | C5/C7/C9 | REQUIRED |
| PRUNING_AND_VALIDATION_TRACE | evidencia | REQUIRED |
| RECOVERY_STATUS | cobertura de fuentes | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Clasificar `CONSTRAINT_CONFLICT`, `MISSING_CAPABILITY`, `MISSING_DEPENDENCY`, `AUTHORITY_BLOCK`, `SOURCE_NOT_FOUND` o `SEARCH_INCOMPLETE`.
2. Construir núcleo mínimo insatisfacible cuando sea posible.
3. Distinguir imposibilidad demostrada de cobertura incompleta.
4. Enumerar cambios que podrían restaurar factibilidad sin aplicarlos.
5. Solicitar decisión humana si implican cambiar objetivo/regla/permiso.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| NO_FEASIBLE_PLAN | razón, evidencia y opciones | MCCR |
| DEGRADATION_PROPOSAL | alternativa no aplicada | MCCR |

## Especificación

```yaml
no_feasible_plan:
  request_id:
  snapshot_id:
  status: NO_FEASIBLE_PLAN
  classification:
  conflicting_constraints: []
  missing_capabilities_or_dependencies: []
  minimal_explanation:
  search_coverage:
  evidence_refs: []
  alternatives_requiring_human_change: []
  safe_next_actions: []
  goal_changed: false
```

Una degradación es válida sólo si ya pertenece al resultado aceptable o el humano la autoriza. Se genera entonces una nueva solicitud/versión; no se reescribe la anterior.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- `goal_changed` permanece false en la salida.
- Cobertura parcial nunca se expresa como imposibilidad universal.

## Ejemplo operativo

El humano exige “video final” y también “ninguna manifestación audiovisual ni alternativa textual”. Las reglas se contradicen. MCCR devuelve el núcleo conflictivo y pregunta qué requisito cambiar; no produce un artículo y lo llama video.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Error del host | clasificar `EXECUTION_FAILURE`, no `NO_FEASIBLE_PLAN` retrospectivo |
| Fuente no localizada | `SOURCE_NOT_FOUND` con cobertura |
| Alternativa requiere permiso | proponer, no ejecutar |

## Relaciones y límites

Es salida terminal de planificación y vuelve al frontend humano mediante AC-HIA.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- La causa está clasificada.
- No se cambia el objetivo.
- Las opciones requieren decisión explícita cuando corresponde.
