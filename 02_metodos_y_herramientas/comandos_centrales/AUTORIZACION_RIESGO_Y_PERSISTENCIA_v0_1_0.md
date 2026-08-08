# AUTORIZACIÓN, RIESGO Y PERSISTENCIA

**Versión:** `0.1.0`

## 1. Principio

```text
CAPACIDAD ≠ PERMISO
PERMISO ≠ AUTORIZACIÓN ACTUAL
RESULTADO ≠ PERSISTENCIA
```

## 2. Niveles de riesgo operacional

### R0 — consulta local

Lectura, explicación o formato sin efectos persistentes.

Ejemplos: mostrar estado, definir término.

### R1 — análisis

Transformación cognitiva reversible sin escribir fuentes.

Ejemplos: comparar, clasificar, trazar.

### R2 — generación

Produce outputs o artefactos nuevos, pero no modifica fuentes canónicas.

Ejemplos: PDF, propuesta, diseño, código descargable.

### R3 — propuesta de cambio estructural

Propone modificaciones a proyectos, registros, configuraciones o canon, pero todavía no las aplica.

Debe mostrar destino y efectos esperados.

### R4 — persistencia

Escritura, reemplazo, promoción, deprecación, eliminación o cambio de estado persistente.

Requiere autorización humana explícita sobre el cambio específico.

### R5 — acción externa crítica

Acciones que afectan sistemas, personas, repositorios o servicios externos de forma material.

Requiere herramientas reales y controles de plataforma; el Command Center no puede rebajar esas exigencias.

## 3. Modos de persistencia

```text
NONE
SESSION_ONLY
OUTPUT_PROPOSAL
PROJECT_PATCH
CANONICAL_CHANGE_REQUESTED
CANONICAL_CHANGE_APPLIED
```

## 4. Regla de escritura en CC://

`CC://` es de sólo lectura por defecto.

Para pasar a escritura deben cumplirse:

```text
objetivo explícito
+ target inequívoco
+ autorización humana
+ capacidad técnica real
+ plan de versionado/trazabilidad
+ validación
```

## 5. Cuando no existe capacidad de escritura

No afirmar "ya actualicé el canon".

Usar:

```text
status: WAITING_HUMAN_MATERIALIZATION
persistence: PROJECT_PATCH
```

y generar el patch o artefacto necesario.

## 6. Autorizaciones cortas

Expresiones como:

```text
"sí"
"apruebo"
"hazlo"
```

son válidas sólo si existe un único cambio pendiente, claramente mostrado en el turno inmediatamente pertinente. Si hay ambigüedad, pedir identificación.

## 7. Revocación

La autoridad humana puede cancelar una autorización no ejecutada. Una acción ya ejecutada sólo puede revertirse si existe operación de rollback real y autorizada.
