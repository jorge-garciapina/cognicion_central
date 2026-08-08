# CICLO DE VIDA DEL COMANDO

**Versión:** `0.1.0`

## Estados

```text
DRAFT
  ↓
INTERPRETED
  ↓
NORMALIZED
  ↓
VALIDATED
  ↓
AUTHORIZED / AUTO_AUTHORIZED
  ↓
PLANNED
  ↓
EXECUTING
  ├→ PAUSED
  ├→ BLOCKED_BY_AUTHORITY
  ├→ BLOCKED_BY_CAPABILITY
  └→ FAILED
  ↓
VALIDATING_RESULT
  ↓
WAITING_HUMAN_VALIDATION cuando aplique
  ↓
COMPLETED / COMPLETED_WITH_WARNINGS
  ↓
PERSISTENCE_STAGE cuando fue autorizado
  ↓
WAITING_HUMAN_MATERIALIZATION o PERSISTED
```

## Reglas de transición

- no pasar a `AUTHORIZED` si el gate requerido no fue satisfecho;
- no pasar a `PERSISTED` por mera generación de output;
- `CANCELLED` es terminal salvo creación de un nuevo comando;
- `RETRY` crea un nuevo intento dentro del mismo comando o un comando derivado, preservando trace;
- `PAUSED` no implica fallo;
- un resultado validado puede existir sin persistencia.

## Puntos de control humanos

### V0 — interpretación

Opcional en riesgo bajo; obligatorio en `CC-STRICT`.

### V1 — autorización de impacto

Obligatorio en R3-R5.

### V2 — validación de resultado

Obligatorio si el comando declaró final human validation.

### V3 — autorización de persistencia

Separada de la autorización para analizar/generar cuando el destino sea `CC://`.

## Cancelación

El humano puede escribir:

```text
CANCELA EL COMANDO ACTUAL
```

Si hay más de un comando activo, debe especificarse ID.
