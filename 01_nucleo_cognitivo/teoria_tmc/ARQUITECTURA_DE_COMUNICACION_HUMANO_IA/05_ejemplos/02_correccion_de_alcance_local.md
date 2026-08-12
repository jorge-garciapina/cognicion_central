# Ejemplo 2 — Corrección de alcance local

## Prompt

```text
El snapshot no debe incluir versiones sustituidas.
```

## Interpretación arquitectónica

Aunque el prompt tiene forma declarativa, funciona como comando de restricción y corrección sobre un objetivo delimitado.

## Normalización

```yaml
command:
  id: CMD-EX-002
  authority: HUMAN
  carrier: PROMPT
  operations:
    - UPDATE_VALIDATOR
    - RESTRICT
  scope:
    level: LOCAL
    targets:
      - SNAPSHOT_GENERATOR
      - SNAPSHOT_VALIDATOR
  payload:
    rule: EXCLUDE_SUPERSEDED_VERSIONS
  expected_effects:
    - UPDATE_PROJECTION_RULE
  prohibited_effects:
    - DELETE_VERSION_HISTORY
    - MODIFY_CANONICAL_SOURCE
  persistence:
    requested: CHAT_STATE
```

## Organización del backend

```yaml
affected_components:
  - id: SNAPSHOT_GENERATOR
    action: APPLY_FILTER
  - id: SNAPSHOT_VALIDATOR
    action: ADD_CHECK
  - id: VERSION_REGISTRY
    action: READ_STATUS
```

## Integración

```text
Estado anterior:
el snapshot incluye elementos activos y sustituidos.

Comando:
excluir sustituidos de la proyección.

Estado nuevo:
el historial conserva versiones sustituidas,
pero el snapshot operativo ya no las muestra por defecto.
```

## Validación

- Se modifica la proyección, no el historial.
- El alcance permanece local al snapshot.
- No se eliminan fuentes.
- La regla puede revertirse mediante otro comando.

## Snapshot resultante

```yaml
snapshot_policy:
  include:
    - ACTIVE
    - PENDING
  exclude:
    - SUPERSEDED
  history_preserved: true
```

