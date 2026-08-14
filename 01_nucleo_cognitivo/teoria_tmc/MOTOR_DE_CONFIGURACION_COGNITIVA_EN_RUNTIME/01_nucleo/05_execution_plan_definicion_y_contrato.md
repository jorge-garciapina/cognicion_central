# EXECUTION_PLAN: definición y contrato

**ID:** `MCCR-CORE-PLAN-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Un `EXECUTION_PLAN` es una configuración operacional identificada, prevalidada y lista para handoff. Dice qué debe ocurrir y con qué bindings; no afirma que ya ocurrió.

## Responsabilidad

Este documento es responsable de:

- schema mínimo del plan
- condiciones de materialización y handoff
- diferencia entre plan, ejecución y resultado

No es responsable de:

- contener secretos o mecanismos privados del host
- autorizar acciones fuera del comando
- servir como certificado de éxito final

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| SELECTED_CONFIGURATION | candidato válido elegido | REQUIRED |
| VALIDATION_EVIDENCE | veredictos duros y preferencias | REQUIRED |
| HANDOFF_PROFILE | adaptador y consumidor | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Asignar identidad, versión y genealogía.
2. Congelar referencias de solicitud, fuentes y capacidades.
3. Materializar subgrafo, pasos, entradas/salidas, bindings y gates.
4. Adjuntar validadores, fallos, rollback/replan y persistencia.
5. Prevalidar el contrato completo.
6. Entregar al backend/runtime autorizado.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| EXECUTION_PLAN | contrato versionado | MCCR |
| HANDOFF_ENVELOPE | plan, capacidades y condiciones de aceptación | MCCR |

## Especificación

```yaml
execution_plan:
  plan_id:
  version:
  supersedes:
  parent_command_id:
  request_id:
  state: STRUCTURALLY_VALID
  objective_binding: {}
  authority_and_scope: {}
  source_snapshot: []
  capability_snapshot: []
  active_subgraph: {nodes: [], edges: []}
  steps:
    - step_id:
      operation:
      component_ref:
      runtime_binding:
      inputs: []
      outputs: []
      preconditions: []
      postconditions: []
      validators: []
      on_failure:
  hard_constraint_evidence: []
  soft_objective_assessment: []
  gates: []
  stop_conditions: []
  persistence_policy: {}
  monitoring_and_replan: {}
  provenance: []
  unresolved_non_blocking: []
```

Estados y transiciones completas se definen en `02_modelo_operativo/10_estados_y_maquina_de_estados_del_plan.md`. Un handoff sólo acepta `READY_FOR_HANDOFF`.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Cada paso tiene productor, consumidor y validación.
- El snapshot de capacidad no se sustituye por suposiciones.

## Ejemplo operativo

El plan de video declara `S1 validar construcción`, `S2 construir instancia`, `S3 aplicar protocolo`, `S4 validar codominio`, `S5 emitir borrador`; todos los pasos apuntan a fuentes y bindings. El texto final aún no existe.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Paso sin binding obligatorio | no alcanzar `READY_FOR_HANDOFF` |
| Plan modificado tras validación | crear nueva versión y revalidar |
| Runtime devuelve salida | clasificarla como resultado, no como modificación del plan |

## Relaciones y límites

AC-HIA define el intercambio `EXECUTION_REQUEST → EXECUTION_PLAN`; MCCR especializa el contenido sin afirmar equivalencia con `IDENTITY_SELECTION`.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- El schema soporta cadena, gates, fallos y trazas.
- Plan y resultado son distintos.
- El handoff exige prevalidación.
