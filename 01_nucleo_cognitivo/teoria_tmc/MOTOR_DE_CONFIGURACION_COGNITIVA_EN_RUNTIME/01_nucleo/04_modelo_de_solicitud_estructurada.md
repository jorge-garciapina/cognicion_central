# Modelo de solicitud estructurada

**ID:** `MCCR-CORE-REQUEST-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR recibe una representación generada por AC-HIA/backend, no una carga técnica que el humano deba redactar. La solicitud conserva lenguaje original, interpretación, incertidumbre y autoridad.

## Responsabilidad

Este documento es responsable de:

- contrato mínimo de entrada MCCR
- procedencia de campos inferidos
- reglas ante ambigüedad

No es responsable de:

- reemplazar la normalización NC-00–NC-12 de AC-HIA
- inventar preferencias omitidas
- convertir una inferencia en decisión humana

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| HUMAN_COMMAND_EVENT | portador original, vía AC-HIA | REQUIRED |
| NORMALIZED_COMMAND_GRAPH | operaciones, objetivos y control | REQUIRED |
| LOCAL_STATE_AND_HOST | estado y capacidades | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Referenciar el evento y grafo normalizado.
2. Extraer objetivo, resultado, alcance, autoridad, persistencia y restricciones.
3. Resolver sólo inferencias reversibles y etiquetarlas.
4. Abrir `OPEN_DECISION` si la ambigüedad cambia materialmente el plan.
5. Emitir la solicitud con snapshot temporal.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| MCCR_REQUEST | entrada situada a C0 | MCCR |
| CLARIFICATION_REQUEST | decisión humana requerida | MCCR |

## Especificación

```yaml
mccr_request:
  request_id:
  parent_command_id:
  original_carrier_ref:
  normalized_command_graph_ref:
  objective:
  expected_result:
  scope:
  authority:
  persistence:
  explicit_constraints: []
  inferred_requirements:
    - value:
      label: INFERENCE
      evidence:
      reversible: true
  preferences: []
  relevant_state_refs: []
  host_profile_ref:
  ambiguity: []
  issued_at:
```

`Q_t` es sólo el alias matemático local para esta solicitud en el instante `t`. No debe aparecer en la interfaz humana salvo que ayude a explicar una traza.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- El portador original permanece referenciado.
- Campos inferidos conservan etiqueta y evidencia.

## Ejemplo operativo

Humano: “Haz un video corto ACCD, sólo como borrador”. AC-HIA normaliza `CREATE`, objetivo video, persistencia efímera y resultado borrador. MCCR recibe eso; no pide al humano una instancia contextual ni una lista YAML.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Resultado esperado materialmente ambiguo | pedir aclaración |
| Autoridad no resoluble | detener antes de C1 |
| Preferencia ausente | marcar `UNKNOWN`; no bloquear |

## Relaciones y límites

AC-HIA es responsable de normalización. MCCR añade sólo campos situados indispensables para configurar y conserva referencias al grafo original.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- El humano no debe formalizar la solicitud.
- Cada inferencia es visible.
- La ambigüedad material detiene.
