# TRAZABILIDAD Y EVENTOS DE COMANDO

**Versión:** `0.1.0`

## 1. Trace operacional

El trace registra qué ocurrió durante una ejecución sin pretender exponer razonamiento privado interno.

Formato sugerido:

```yaml
trace_event:
  time:
  command_id:
  stage:
  action:
  target:
  capability:
  input_refs: []
  output_refs: []
  status:
  notes:
```

## 2. Eventos útiles

```text
COMMAND_RECEIVED
COMMAND_INTERPRETED
COMMAND_NORMALIZED
TARGET_RESOLVED
SOURCE_LOADED
CAPABILITY_SELECTED
CAPABILITY_UNAVAILABLE
PLAN_CREATED
HUMAN_AUTHORIZATION_REQUESTED
HUMAN_AUTHORIZATION_GRANTED
EXECUTION_STARTED
STEP_COMPLETED
VALIDATION_RUN
OUTPUT_CREATED
PERSISTENCE_REQUESTED
PERSISTENCE_BLOCKED
PERSISTENCE_APPLIED
COMMAND_COMPLETED
COMMAND_CANCELLED
```

## 3. Trace vs registro canónico

No confundir:

```text
TRACE DE EJECUCIÓN
→ puede existir para cualquier operación

REGISTRO CANÓNICO DE COMANDOS HUMANOS
→ sólo comandos que cambian estado canónico según el canon vigente
```

## 4. Trazabilidad conceptual

Si el comando transforma una idea o estructura, puede enlazar su output con `ART_trazabilidad-conceptual` o el método vigente correspondiente.

## 5. Evidencia

El trace demuestra que una operación fue intentada o ejecutada; no demuestra por sí solo que el resultado sea verdadero o correcto.

```text
TRACE ≠ VALIDACIÓN EPISTÉMICA
```

## 6. Observabilidad en interfaz

En `CC-TRACE` mostrar sólo eventos de alto nivel. En `CC-DEV` mostrar la secuencia completa disponible.
