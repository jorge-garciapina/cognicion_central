# Contratos de intercambio

## Propósito

Los contratos desacoplan componentes. Permiten cambiar frontend, backend, modelo o representación sin borrar la identidad de la arquitectura.

## Contrato humano → frontend

```yaml
contract: HUMAN_INPUT
accepts:
  - NATURAL_LANGUAGE_PROMPT
  - UI_SELECTION
  - APPROVAL_EVENT
  - REJECTION_EVENT
  - CORRECTION_EVENT
produces:
  - REGISTERED_CARRIER
  - CANDIDATE_COMMANDS
preserves:
  - RAW_HUMAN_EXPRESSION
  - HUMAN_AUTHORITY
must_not:
  - SILENTLY_CHANGE_SCOPE
  - DISCARD_EXPLICIT_RESTRICTIONS
```

## Contrato frontend → arquitectura local

```yaml
contract: COMMAND_CAPTURE
requires:
  - carrier
  - candidate_operation
  - candidate_targets
  - scope_or_ambiguity
produces:
  - NORMALIZED_COMMAND
  - CLARIFICATION_REQUEST
preserves:
  - provenance
  - relation_to_raw_prompt
```

## Contrato arquitectura local → backend

```yaml
contract: EXECUTION_REQUEST
requires:
  - command_id
  - normalized_operation
  - scope
  - authority
  - relevant_state_reference
  - expected_result
  - prohibited_effects
optional:
  - required_components
  - preferred_runtime
  - persistence_destination
produces:
  - EXECUTION_PLAN
  - INCOMPATIBILITY_REPORT
  - CAPABILITY_ABSENCE
```

## Contrato backend → sistema anfitrión

```yaml
contract: HOST_OPERATION
requires:
  - executable_instruction
  - selected_capability
  - input_payload
  - permissions
  - runtime_constraints
produces:
  - RAW_RESULT
  - TOOL_ERROR
  - PERMISSION_ERROR
  - UNSUPPORTED_OPERATION
```

El formato específico depende del adaptador.

## Contrato sistema anfitrión → backend

```yaml
contract: RAW_RESULT_INGESTION
requires:
  - raw_result_or_error
  - origin
  - runtime_metadata
produces:
  - CLASSIFIED_RESULT
preserves:
  - provenance
  - error_state
  - tool_identity
must_not:
  - MARK_AS_HUMAN_DECISION
  - MARK_AS_CANON_AUTOMATICALLY
```

## Contrato backend → arquitectura local

```yaml
contract: REINTEGRATION_PROPOSAL
requires:
  - command_id
  - result_class
  - epistemic_status
  - provenance
  - validation_report
  - proposed_effects
produces:
  - INTEGRATION_CANDIDATE
  - HUMAN_DECISION_REQUEST
  - REJECTED_RESULT
```

## Contrato arquitectura local → frontend

```yaml
contract: PROJECTION_DATA
requires:
  - state_reference
  - projection_scope
  - audience
  - purpose
produces:
  - VIEW_MODEL
includes_as_needed:
  - structures
  - commands
  - sources
  - changes
  - open_questions
  - decisions
  - validation_state
```

## Contrato frontend → humano

```yaml
contract: HUMAN_INSPECTION_SURFACE
requires:
  - view_model
  - representation
produces:
  - HUMAN_PERCEPTIBLE_MANIFESTATION
  - AVAILABLE_CONTROLS
must_support_as_applicable:
  - inspect
  - navigate
  - correct
  - approve
  - reject
  - change_resolution
```

## Regla de compatibilidad

Un intercambio es compatible cuando:

1. la salida del componente emisor satisface la entrada del receptor;
2. se preservan autoridad y procedencia;
3. el alcance no se amplía silenciosamente;
4. el runtime posee la capacidad requerida;
5. los efectos prohibidos permanecen bloqueados;
6. existe un validador apropiado para los riesgos relevantes.

