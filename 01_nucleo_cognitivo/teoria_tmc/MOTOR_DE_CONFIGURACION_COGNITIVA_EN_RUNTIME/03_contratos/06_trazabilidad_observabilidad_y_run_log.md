# Trazabilidad, observabilidad y run log

**ID:** `MCCR-CON-TRACE-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

La traza hace reconstruible por qué un plan existe, qué se descartó, qué se ejecutó y qué cambió. El run log registra eventos; no funciona como memoria canónica ni como prueba automática de verdad.

## Responsabilidad

Este documento es responsable de:

- IDs y enlaces de procedencia
- eventos mínimos por C0–C12 y ejecución
- redacción segura de datos sensibles

No es responsable de:

- registrar cadenas privadas de razonamiento
- persistir sin autorización
- contar duplicados como evidencia independiente

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| BUILD/PLAN_EVENTS | decisiones y veredictos | REQUIRED |
| SOURCE_REFS | rutas, hashes y versiones | REQUIRED |
| PERSISTENCE_POLICY | destino y retención | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Asignar `trace_id` y correlación con comando/plan.
2. Registrar entradas/salidas observables de cada etapa.
3. Guardar razones de poda/selección y validadores.
4. Redactar secretos y datos fuera de alcance.
5. Mantener log efímero por defecto.
6. Persistir sólo mediante comando y destino autorizados.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| MCCR_TRACE | grafo/lista de procedencia | MCCR |
| RUN_LOG | eventos operativos | MCCR |
| AUDIT_PROJECTION | vista humana sin datos privados | MCCR |

## Especificación

```yaml
run_event:
  event_id:
  trace_id:
  parent_command_id:
  plan_id:
  stage:
  event_type:
  input_refs: []
  decision_or_verdict:
  output_refs: []
  source_labels: []
  observed_at:
  persistence: EPHEMERAL
```

Eventos mínimos: admisión, snapshot, recuperación, restricción, poda, candidato, validación, selección, materialización, prevalidación, handoff, cambio de estado, resultado y replan. Se registra la justificación comunicable, no el razonamiento interno privado del modelo.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La traza no amplía memoria ni autoridad.
- Cada evento distingue fuente, inferencia y decisión.

## Ejemplo operativo

La selección de Plan B enlaza comando, archivo ACCD, snapshot de capacidad, validadores PASS y preferencia “fidelidad”. El auditor puede reconstruirla sin ver razonamiento oculto.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Fuente sin versión/hash disponible | registrar ruta y limitación |
| Destino de log no autorizado | mantener efímero |
| Dato sensible innecesario | redactar o excluir |

## Relaciones y límites

AC-HIA `TRACE_MANAGER` coordina persistencia; MCCR produce eventos de planificación compatibles.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- C0–C12 son reconstruibles.
- No se exponen cadenas privadas.
- Persistencia es explícita.
