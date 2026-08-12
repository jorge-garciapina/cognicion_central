# Catálogo de ejemplos de normalización de comandos

## Identidad

```yaml
document:
  id: AC-HIA-EJ-NORM-001
  version: 0.2.0
  lifecycle: DEVELOPMENT
  authority: HUMAN

recommended_location:
  path: 05_ejemplos/04_catalogo_de_normalizacion_de_comandos.md
  operation: ADD
```

## Propósito

Este catálogo muestra cómo intervenciones humanas expresadas en lenguaje natural se convierten en comandos normalizados. Complementa `02_modelo_operativo/06_normalizacion_de_comandos.md` mediante casos breves y comparables.

Los ejemplos son fixtures de ejecución mental. No sustituyen el esquema, los validadores ni la autoridad humana.

## Patrón de lectura

```text
lenguaje natural
→ interpretación operacional
→ comando normalizado
→ observación de gobierno
```

## 1. Consulta de relación

### Lenguaje natural

```text
¿Qué relación existe entre PIEA y el backend cognitivo?
```

```yaml
operation: QUERY_RELATION
targets:
  - PIEA
  - COGNITIVE_BACKEND
scope:
  level: LOCAL
expected_results:
  - EXPLANATION
  - RELATION_GRAPH
persistence:
  requested: false
```

Una pregunta funciona como comando aunque no tenga forma imperativa.

## 2. Restricción y sustitución

### Lenguaje natural

```text
No utilices la versión anterior del paquete.
```

```yaml
operations:
  - RESTRICT
  - SUPERSEDE
target: PREVIOUS_PACKAGE_VERSION
effects:
  operational_authority: DISABLED
  history_preserved: true
scope:
  level: TASK
```

La versión permanece en historial, pero pierde vigencia operativa.

## 3. Proyección del estado

### Lenguaje natural

```text
Muestra el estado actual como un grafo Mermaid.
```

```yaml
operation: PROJECT_STATE
source: CURRENT_OPERATIONAL_STATE
scope:
  level: CHAT
representation:
  type: MERMAID_GRAPH
persistence:
  requested: false
```

Proyectar no equivale a persistir ni a mostrar el estado completo.

## 4. Corrección local

### Lenguaje natural

```text
En este párrafo, cambia “comentario” por “comando”.
```

```yaml
operation: CORRECT_TERM
target:
  type: PARAGRAPH
  selection: CURRENT_SELECTION
replacement:
  from: COMMENT
  to: COMMAND
scope:
  level: LOCAL
exclusions:
  - OTHER_SECTIONS
```

La selección del frontend forma parte del contexto de normalización.

## 5. Directiva de proyecto

### Lenguaje natural

```text
En adelante, todas las correcciones de este proyecto deben conservar la versión anterior en el historial.
```

```yaml
operation: DEFINE_POLICY
scope:
  level: PROJECT
  temporal_extent: CURRENT_AND_FUTURE_OPERATIONS
payload:
  rule: PRESERVE_SUPERSEDED_VERSIONS
applies_to:
  - CORRECTION
  - REPLACEMENT
```

“En adelante” introduce extensión temporal; “este proyecto” delimita el dominio.

## 6. Activación de estructura

### Lenguaje natural

```text
Usa PIEA para integrar las siguientes correcciones.
```

```yaml
operations:
  - ACTIVATE_STRUCTURE
  - SET_INTEGRATION_POLICY
target: PATRON_DE_INTEGRACION_ESTRUCTURAL_ACUMULATIVA@0.2.0
scope:
  level: TASK
payload:
  applies_to: FOLLOWING_CORRECTIONS
```

La activación se limita a la tarea; no modifica PIEA.

## 7. Desactivación temporal

### Lenguaje natural

```text
Para esta respuesta no uses ACCD.
```

```yaml
operation: DEACTIVATE_STRUCTURE
target: ACCD
scope:
  level: OUTPUT
temporal_extent: CURRENT_RESPONSE
persistence:
  requested: false
```

La desactivación no cambia el estado de ACCD para operaciones futuras.

## 8. Aprobación limitada

### Lenguaje natural

```text
Apruebo el contenido, pero todavía no lo guardes en el paquete.
```

```yaml
command_graph:
  nodes:
    - id: C1
      operation: APPROVE
      target: CURRENT_CONTENT
      effect: CONTENT_ACCEPTED
    - id: C2
      operation: RESTRICT
      target: PERSISTENCE
      effect: DO_NOT_WRITE
  edges:
    - from: C2
      relation: CONSTRAINS
      to: C1
```

Aprobar contenido no implica autorizar persistencia.

## 9. Rechazo sin borrado

### Lenguaje natural

```text
Descarta esta propuesta, pero consérvala para trazabilidad.
```

```yaml
operations:
  - REJECT
  - PRESERVE_HISTORY
target: CURRENT_PROPOSAL
effects:
  lifecycle: REJECTED
  history: PRESERVED
  operational_authority: DISABLED
```

Rechazar y borrar son operaciones diferentes.

## 10. Persistencia explícita

### Lenguaje natural

```text
Guarda el resultado como 04_configuracion_canonica_de_la_arquitectura.md.
```

```yaml
operation: PERSIST
target: CURRENT_RESULT
destination:
  filename: 04_configuracion_canonica_de_la_arquitectura.md
  folder: 01_nucleo
requires:
  - WRITE_CAPABILITY
  - DESTINATION_AVAILABLE
```

El destino está explícito, pero la ejecución depende de permisos reales.

## 11. Detención por ausencia

### Lenguaje natural

```text
Busca la definición de FAC; si no la encuentras, no prosigas y reporta la ausencia.
```

```yaml
command_graph:
  nodes:
    - id: C1
      operation: RETRIEVE_DEFINITION
      target: FAC
    - id: C2
      operation: STOP
      condition: FAC_DEFINITION_NOT_FOUND
    - id: C3
      operation: REPORT_ABSENCE
      condition: FAC_DEFINITION_NOT_FOUND
  edges:
    - from: C1
      relation: CONDITION_FOR
      to: C2
    - from: C2
      relation: PRODUCES_INPUT_FOR
      to: C3
```

El sistema no rellena la ausencia inventando una función para FAC.

## 12. Comandos coordinados

### Lenguaje natural

```text
Lee los dos documentos y compáralos.
```

```yaml
command_graph:
  nodes:
    - id: C1
      operation: READ
      target: DOCUMENT_A
    - id: C2
      operation: READ
      target: DOCUMENT_B
    - id: C3
      operation: COMPARE
      targets: [DOCUMENT_A, DOCUMENT_B]
  edges:
    - from: C1
      relation: PRODUCES_INPUT_FOR
      to: C3
    - from: C2
      relation: PRODUCES_INPUT_FOR
      to: C3
```

Las lecturas pueden ejecutarse en paralelo; la comparación depende de ambas.

## 13. Secuencia obligatoria

### Lenguaje natural

```text
Primero valida el esquema y después genera el archivo.
```

```yaml
command_graph:
  nodes:
    - id: C1
      operation: VALIDATE_SCHEMA
    - id: C2
      operation: GENERATE_FILE
  edges:
    - from: C1
      relation: BEFORE
      to: C2
    - from: C1
      relation: BLOCKS_ON_FAILURE
      to: C2
```

“Primero” establece control de flujo, no énfasis retórico.

## 14. Restricción transversal

### Lenguaje natural

```text
Analiza todos los archivos, pero no modifiques ninguno.
```

```yaml
operation: ANALYZE
targets: ALL_SELECTED_FILES
scope:
  level: TASK
constraints:
  prohibited:
    - WRITE
    - REPLACE
    - DELETE
    - PERSIST_CHANGES
```

La prohibición gobierna toda la ejecución.

## 15. Generación con invariantes

### Lenguaje natural

```text
Mejora el guion, conserva la estructura narrativa y no cambies el orden de los eventos.
```

```yaml
operation: TRANSFORM
target: SCRIPT
objective: IMPROVE_NARRATIVE_QUALITY
constraints:
  preserved:
    - NARRATIVE_STRUCTURE
    - EVENT_ORDER
  prohibited:
    - ADD_UNSUPPORTED_EVENTS
```

“Mejorar” queda gobernado por invariantes explícitos.

## 16. Referencia elíptica resoluble

### Estado previo

```yaml
pending_proposal:
  id: PROP-17
  operation: GENERATE_MARKDOWN
  status: WAITING_FOR_HUMAN
```

### Lenguaje natural

```text
Hazlo.
```

```yaml
operation: APPROVE_AND_EXECUTE
target: PROP-17
reference_resolution:
  expression: "lo"
  resolved_to: pending_proposal
  confidence: HIGH
```

El referente procede del estado; no se deduce del prompt aislado.

## 17. Referencia ambigua

### Lenguaje natural

```text
Añádelo al anterior.
```

```yaml
normalization_status: WAITING_FOR_HUMAN
unresolved_reference:
  expression: "anterior"
  alternatives:
    - PREVIOUS_RESPONSE
    - PREVIOUS_DOCUMENT
material_difference: true
required_action: ASK_HUMAN
```

La arquitectura conserva alternativas en lugar de inventar el referente.

## 18. Alcance regional

### Lenguaje natural

```text
Aplica esta terminología a toda la sección de backend, pero no al resto del paquete.
```

```yaml
operation: APPLY_TERMINOLOGY
scope:
  level: REGIONAL
  target: BACKEND_SECTION_SUBGRAPH
  exclusions:
    - OTHER_PACKAGE_SECTIONS
```

`REGIONAL` cubre una región compuesta sin ampliar el efecto a todo el paquete.

## 19. Snapshot con exclusiones

### Lenguaje natural

```text
Genera un snapshot del chat y no incluyas versiones sustituidas.
```

```yaml
operation: GENERATE_SNAPSHOT
scope:
  level: CHAT
include:
  - ACTIVE_STRUCTURES
  - HUMAN_COMMANDS
  - OPEN_QUESTIONS
exclude:
  - SUPERSEDED_VERSIONS
representation:
  type: SNAPSHOT
persistence:
  requested: false
```

La exclusión modifica la vista, no borra el historial.

## 20. Varios efectos en un prompt

### Lenguaje natural

```text
Formaliza el diseño como paquete, devuelve un ZIP y no generes todavía los documentos de instalación.
```

```yaml
command_graph:
  nodes:
    - id: C1
      operation: FORMALIZE
      target: DESIGN
      result: COGNITIVE_PACKAGE
    - id: C2
      operation: PACKAGE
      target: C1.OUTPUT
      representation: ZIP
    - id: C3
      operation: RESTRICT
      target: INSTALLATION_DOCUMENTS
      effect: DO_NOT_GENERATE
  edges:
    - from: C1
      relation: PRODUCES_INPUT_FOR
      to: C2
    - from: C3
      relation: CONSTRAINS
      to: C1
```

## Cobertura

```yaml
example_coverage:
  operations:
    - QUERY
    - CORRECT
    - REPLACE
    - RESTRICT
    - ACTIVATE
    - DEACTIVATE
    - APPROVE
    - REJECT
    - PROJECT
    - PERSIST
    - STOP
  scopes:
    - LOCAL
    - REGIONAL
    - TASK
    - CHAT
    - PROJECT
  compositions:
    - SEQUENCE
    - COORDINATION
    - CONDITION
    - TRANSVERSAL_RESTRICTION
    - AMBIGUITY
    - REFERENCE_RESOLUTION
```

## Criterios de aceptación

Un ejemplo es válido cuando:

1. conserva la intervención humana;
2. no elimina negaciones ni restricciones;
3. separa operación, objetivo y alcance;
4. muestra dependencias cuando hay varios comandos;
5. no presupone persistencia;
6. no inventa autoridad;
7. trata la ambigüedad material de forma explícita;
8. puede ser procesado por los contratos del paquete.

