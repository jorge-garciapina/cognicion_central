# ONTOLOGÍA DE VERBOS Y TARGETS

**Versión:** `0.1.0`

## 1. Familias de verbos

### Lectura y recuperación

```text
CONSULT
SEARCH
LOCATE
READ
SHOW_STATE
TRACE
```

Efecto por defecto: sólo lectura.

### Comprensión y transformación cognitiva

```text
ANALYZE
COMPARE
CLASSIFY
MAP
EXPLAIN
SYNTHESIZE
SIMULATE
EVALUATE
```

Efecto por defecto: resultado en conversación o `OUTPUT://`; sin persistencia canónica.

### Producción

```text
GENERATE
DESIGN
COMPILE
BUILD
MATERIALIZE
EXPORT
```

Efecto por defecto: `OUTPUT_PROPOSAL` o artefacto generado.

### Desarrollo estructural

```text
FORMALIZE
REGISTER
SEPARATE
MERGE
PROMOTE
DEPRECATE
REFACTOR
UPDATE
```

Requieren distinguir propuesta de persistencia.

### Control

```text
AUTHORIZE
REJECT
PAUSE
RESUME
CANCEL
RETRY
ROLLBACK_REQUEST
```

Operan sobre comandos, propuestas o estados inequívocos.

### Acción externa

```text
SEND
PUBLISH
CREATE_EXTERNAL
MODIFY_EXTERNAL
DELETE_EXTERNAL
```

Requieren herramienta real y autorización proporcional al impacto.

## 2. Resolución de sinónimos

Ejemplos:

```text
"búscame", "encuentra", "localiza" → SEARCH/LOCATE
"desglosa", "estudia", "examínalo" → ANALYZE
"ponlos lado a lado" → COMPARE
"haz un PDF" → GENERATE/MATERIALIZE según runtime
"integra esto" → PROPOSE_UPDATE o UPDATE según contexto y autorización
"guárdalo" → resolver destino antes de persistir
```

## 3. Tipos de target

```text
TARGET.FILE
TARGET.STRUCTURE
TARGET.APPLICATION
TARGET.METHOD
TARGET.PROJECT
TARGET.ENTITY
TARGET.CORPUS
TARGET.ARTIFACT
TARGET.COMMAND
TARGET.OUTPUT
TARGET.LOGICAL_SPACE
TARGET.EXTERNAL_RESOURCE
```

## 4. Resolución de targets

Orden recomendado:

1. referencia explícita actual;
2. alias registrado;
3. contexto del proyecto;
4. registro de archivos;
5. registro semántico de estructuras;
6. búsqueda cognitiva;
7. aclaración humana.

No usar una coincidencia semántica débil para resolver un target de persistencia.
