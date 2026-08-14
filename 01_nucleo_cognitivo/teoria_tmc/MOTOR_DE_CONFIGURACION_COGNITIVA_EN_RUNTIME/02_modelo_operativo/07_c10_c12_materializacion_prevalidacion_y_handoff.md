# C10–C12: materialización, prevalidación y handoff

**ID:** `MCCR-OPS-C10C12-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

La configuración elegida sólo puede abandonar MCCR después de convertirse en contrato completo, superar prevalidación y ser aceptada por el consumidor.

## Responsabilidad

Este documento es responsable de:

- C10 materialización
- C11 prevalidación integral
- C12 protocolo de entrega/acuse

No es responsable de:

- iniciar ejecución antes del acuse
- ocultar transformaciones del adaptador
- marcar como entregado un plan rechazado

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| SELECTED_CONFIGURATION | elección C9 | REQUIRED |
| PLAN_SCHEMA | contrato del núcleo | REQUIRED |
| CONSUMER_PROFILE | backend/adaptador/runtime | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. C10 asignar identidad, versión, pasos, bindings, gates, validadores y trazas.
2. C11 comprobar schema, autoridad, snapshot, puertos, fallos y persistencia.
3. Elevar el estado a `READY_FOR_HANDOFF` sólo si todo pasa.
4. C12 envolver el plan y enviarlo al consumidor.
5. Registrar `HANDOFF_ACCEPTED` o rechazo con causa.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| EXECUTION_PLAN | plan completo | MCCR |
| PREVALIDATION_REPORT | veredictos | MCCR |
| HANDOFF_RECEIPT | aceptación/rechazo | MCCR |

## Especificación

```yaml
handoff_envelope:
  envelope_id:
  plan_ref:
  plan_hash:
  expected_consumer:
  required_capability_snapshot:
  authority_token_or_reference:
  start_preconditions: []
  accepted_result_types: []
  event_channel:
  persistence_policy:

handoff_receipt:
  status: ACCEPTED | REJECTED
  consumer:
  observed_capability_delta: []
  reason:
```

Si el consumidor observa que el snapshot caducó, rechaza; MCCR no reetiqueta el plan viejo como válido. El rechazo crea un evento para replanificación.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- El hash/identidad del plan entregado coincide con el prevalidado.
- Un rechazo no se interpreta como ejecución fallida.

## Ejemplo operativo

El backend acepta `Π-video-002` sólo si conserva acceso a los archivos ACCD y capacidad textual. Si el archivo fuente cambió, rechaza con `SOURCE_SNAPSHOT_CHANGED` y solicita nueva versión.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Schema incompleto | C11 FAIL, volver a C10 |
| Snapshot cambió | rechazar y replanificar |
| Consumidor no reconocido | no entregar |

## Relaciones y límites

C12 es la frontera exacta MCCR→AC-HIA/runtime. El adaptador de host compila después del handoff.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Existe acuse verificable.
- El plan entregado es el validado.
- El rechazo tiene ruta de retorno.
