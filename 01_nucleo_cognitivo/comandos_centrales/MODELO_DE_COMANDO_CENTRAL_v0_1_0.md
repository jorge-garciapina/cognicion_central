# MODELO DE COMANDO CENTRAL

**ID:** `CC-CMD-MODEL`  
**Versión:** `0.1.0`  
**Estado:** `PROVISIONAL`

## 1. Definición

Un **Comando Central** es la representación operativa, tipada y trazable de una intención humana dentro de COGNICION_CENTRAL.

```text
PROMPT = manifestación lingüística
COMANDO = objeto operacional normalizado
```

El comando no reemplaza al prompt: conserva su procedencia.

## 2. CommandEnvelope

```yaml
command:
  id: CMD-<runtime>-<sequence>
  schema_version: 0.1.0

  provenance:
    original_prompt:
    received_at:
    conversation_or_session:

  actor:
    type: HUMAN
    authority: HUMAN

  intent:
    verb:
    target:
    objective:

  scope:
    logical_spaces: []
    project_scope:
    entity_scope:

  context:
    explicit: []
    inferred: []

  constraints: []
  permissions: []

  expected_output: []

  persistence:
    mode: NONE
    target_space:

  risk:
    level: R0
    reasons: []

  execution_policy:
    mode: CC-NORMAL
    human_gate_required: false
    stop_conditions: []

  validation_policy:
    validators: []
    final_human_validation: false

  runtime:
    required_capabilities: []
    selected_capabilities: []
    unavailable_capabilities: []

  lifecycle:
    state: DRAFT

  plan: []
  trace: []
  result:
  artifacts: []
  events: []
```

## 3. Campos explícitos vs inferidos

Cada campo debe poder clasificarse:

```text
EXPLICIT
INFERRED_HIGH_CONFIDENCE
INFERRED_LOW_CONFIDENCE
UNRESOLVED
```

Campos críticos de riesgo alto no deben resolverse por inferencia de baja confianza.

## 4. Identidad del comando

Dos prompts diferentes pueden normalizarse al mismo tipo de comando, pero no son el mismo evento.

```text
"analiza X"
"quiero entender X en detalle"

→ pueden compartir verb=ANALYZE
→ conservan prompts y provenance distintos
```

## 5. Invariantes

- debe existir actor humano o autoridad explícitamente delegada;
- el prompt original no se sobrescribe;
- target y objetivo no se confunden;
- scope debe ser explícito antes de persistir;
- persistence debe ser explícita o `NONE`;
- riesgo no otorga permisos;
- resultado no equivale a evidencia;
- propuesta no equivale a cambio aplicado;
- `CC://` permanece de sólo lectura por defecto.

## 6. Estados terminales

Un comando puede finalizar como:

```text
COMPLETED
COMPLETED_WITH_WARNINGS
REJECTED
CANCELLED
BLOCKED_BY_AUTHORITY
BLOCKED_BY_CAPABILITY
FAILED
WAITING_HUMAN_VALIDATION
WAITING_HUMAN_MATERIALIZATION
```
