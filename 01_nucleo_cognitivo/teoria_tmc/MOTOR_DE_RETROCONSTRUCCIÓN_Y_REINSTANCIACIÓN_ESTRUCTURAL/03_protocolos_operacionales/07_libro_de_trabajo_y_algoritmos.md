# Libro de trabajo y algoritmos MRRE

**ID:** `MRRE-WORKBOOK`  
**Versión:** `0.2.0`  
**Uso:** copiar las plantillas pertinentes a un directorio de run y completarlas con evidencia; no rellenar campos desconocidos por inferencia silenciosa.

## 1. Convenciones

- `OBS-*`: observación reversible del portador.
- `SRC-*`: afirmación o recurso fuente.
- `INF-*`: inferencia estructural.
- `HYP-*`: hipótesis candidata.
- `HD-*`: decisión humana.
- `ART-*`: artefacto producido.
- `SG-*`: subgrafo.
- `CH-*`: chain.
- `CA-*`: arquitectura candidata.
- `SK-*`: esqueleto.
- `BND-*`: binding.
- `VAL-*`: resultado de prueba.

Toda arista a Cognición Central se expresa conforme a [MRRE-REF-NORM-01](../00_gobierno/06_norma_de_referencias_y_citacion.md). Los artefactos usan los schemas de [MRRE-SCHEMAS](../02_contratos_y_schemas/mrre_result.schema.yaml).

## Plantilla A — `CASE_SPEC`

```yaml
case_spec:
  case_id: CASE-...
  request_id: REQ-...
  run_id: RUN-...
  operation_sequence: [RETROCONSTRUIR]
  purpose: "qué se pretende descubrir, preservar o transferir"
  expected_result:
    statement: "orientación, no respuesta preescrita"
    acceptance_criteria: []
    forbidden_shortcuts: []
  authority:
    source_scope: []
    allowed_transformations: [analyze]
    binding_authority: HUMAN | PLAN | NONE
    persistence_allowed: false
    promotion_allowed: false
  source_policy:
    required: []
    optional: []
    forbidden: []
    missing_behavior: WAITING_SOURCE
  epistemic_ceiling: STRUCTURAL_INFERENCE
  target_resolutions: [document, section, paragraph, sentence, clause, token]
  termination:
    complete_if: []
    partial_if: []
    fail_if: []
```

## Plantilla B — `MANIFESTATION_RECORD`

```yaml
manifestation_record:
  artifact_id: ART-MAN-...
  manifestation_id: MAN-...
  carrier:
    mode: embedded | relative_reference | content_addressed
    relative_path: null
    content_hash: null
    immutable_copy: false
  modality: text | image | sequence | audio | video | spa | behavior_record | structured_data | composite
  version: "..."
  acquisition_context: {}
  locators:
    - {locator_id: LOC-01, kind: line_range, value: "L1-L5"}
  source_citations:
    - {id: SRC-..., relative_path: ../../..., relation: EJEMPLO}
  integrity_status: VERIFIED | UNVERIFIED | MISSING
```

## Plantilla C — `STRUCTURAL_FIELD_AND_CUT`

```yaml
schema_version: "0.1.0"
field:
  field_id: FIELD-...
  identity_statement: "hipótesis de identidad y su criterio"
  boundary:
    in_scope: []
    out_of_scope: []
  contexts: []
  layers: []
  nodes: []
  edges: []
  source_bindings: []
  conflicts: []
  missing_regions: []
cuts:
  - cut_id: CUT-...
    field_ref: FIELD-...
    orientation:
      expected_result_ref: ER-...
      function: "..."
      receiver_profile_ref: null
    inclusions: []
    exclusions: []
    prominence: []
    omissions: []
    local_roles: []
    resolution: paragraph
    trace_refs: []
```

## Plantilla D — `SEGMENTATION_GRAPH`

```yaml
segmentation_graph:
  artifact_id: ART-SEG-...
  carrier_ref: ART-MAN-...
  units:
    - unit_id: U-01
      locator_ref: LOC-01
      level: clause
      literal_or_digest: "texto breve o hash"
      parent_ref: U-P01
      child_refs: []
      overlaps_with: []
      observable_markers: []
      epistemic_status: OBSERVATION
  ordering_edges: []
  containment_edges: []
  segmentation_alternatives: []
  reversibility_test: PASS | PARTIAL | FAIL
```

## Plantilla E — `SUBGRAPH_AND_CHAIN_SET`

```yaml
subgraphs:
  - schema_version: "0.1.0"
    subgraph_id: SG-01
    graph_kind: discursive
    focal_node: {node_id: N-01, node_type: event, payload_ref: U-01, local_role: trigger}
    related_nodes: []
    typed_edges: []
    dependencies: {prior: [], simultaneous: [], subsequent: [], presupposed: []}
    context: {}
    function_hypotheses: []
    effect_hypotheses: []
    epistemic_status: reconstruction_traceable
    source_bindings: []
    alternatives: []
chains:
  - chain_id: CH-01
    chain_type: causal | enabling | transductive | argumentative | identity | temporal | narrative | control | mixed
    ordered_node_refs: []
    ordered_edge_refs: []
    entry_state_ref: null
    exit_state_ref: null
    necessary_conditions: []
    sufficient_conditions: []
    branch_refs: []
    cycle_refs: []
    source_bindings: []
    removal_tests: []
    status: SUPPORTED_LOCAL | AMBIGUOUS | WEAK | FALSIFIED
```

## Plantilla F — `CANDIDATE_ARCHITECTURE`

```yaml
candidate_architecture:
  architecture_id: CA-01
  purpose_hypothesis: "función explicada por la candidata"
  member_subgraph_refs: []
  member_chain_refs: []
  interfaces: []
  topology:
    kind: chain | tree | dag | cyclic_graph | multiplex | hybrid
    entry_refs: []
    exit_refs: []
  invariants_candidate: []
  predictions: []
  falsifiers: []
  unresolved_gaps: []
  alternatives: []
  epistemic_status: STRUCTURAL_INFERENCE
```

## Plantilla G — `STRUCTURAL_SKELETON`

```yaml
schema_version: "0.1.0"
skeleton_id: SK-01
derived_from: [CA-01]
purpose_contract: "..."
roles:
  - role_id: ROLE-01
    function: "..."
    cardinality: "1 | 0..1 | 1..n"
    admissibility_constraints: []
    forbidden_bindings: []
relations: []
invariants: []
variation_domain: []
optional_regions: []
known_counterexamples: []
source_trace_refs: []
```

## Plantilla H — `BINDING_AND_DIFF`

```yaml
binding:
  schema_version: "0.1.0"
  binding_id: BND-01
  skeleton_ref: SK-01
  target_field_ref: FIELD-TARGET-01
  assignments:
    - role_ref: ROLE-01
      candidate_ref: CAND-01
      retrieval_basis: []
      equivalence_tests: []
      constraints_satisfied: []
      authority_ref: HD-BIND-01
      status: accepted | rejected | unbound
  unresolved_gaps: []
structure_preservation_diff:
  - element_ref: ROLE-01
    status: PRESERVED | MODIFIED_ALLOWED | LOST | ADDED_JUSTIFIED | UNBOUND_GAP | FORBIDDEN_INVENTION
    evidence_refs: []
    impact: "..."
```

## Algoritmo A — Navegación estructural sin matching

```text
INPUT: manifestaciones M, scope S, expected_result E
1. inventariar cada portador y contexto por separado
2. proponer identidades focales; marcar criterio y alternativa
3. declarar frontera in_scope/out_of_scope
4. identificar capas observables sin usar aún nombres de patrón
5. construir nodos/edges observados y source_asserted
6. registrar conflictos, versiones, ausencias y dependencias externas
7. cambiar resolución arriba/abajo y registrar pérdida
8. construir SEARCH_SIGNATURE con roles/relaciones/necesidades
OUTPUT: FIELD, CUTS, SEARCH_SIGNATURE, MISSING_REGION_REPORT
```

**Prueba:** si al ocultar los nombres de catálogo la descripción del campo cambia radicalmente, hubo matching prematuro. Véase [MRRE-PROC-NAVIGATE](01_navegacion_estructural.md).

## Algoritmo B — Segmentación multiescala

1. crea una unidad documento/portador;
2. divide por cambios funcionales además de marcas formales;
3. conserva jerarquía y orden;
4. permite solapamiento cuando una unidad sirve a más de una función;
5. crea spans mínimos para relaciones críticas;
6. expande la unidad si el contexto cambia su interpretación;
7. prueba reversibilidad hacia el portador;
8. guarda segmentaciones alternativas cuando cambien la arquitectura.

La unidad funciona como mNode encapsulable adaptado de [SRC-MAANC-COMPOSITION](../../../../04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/modelo-composicion-cognitiva.md), no como frase autosuficiente.

## Algoritmo C — Reconstrucción de subgrafo

Para cada unidad `U`:

```text
FOCAL = entidades/estados/operaciones explícitos en U
NEIGHBORHOOD = prior + simultaneous + subsequent + presupposed
EDGES_OBSERVED = conectores, sintaxis, layout, orden, identidad explícita
EDGES_INFERRED = relaciones necesarias para explicar función/efecto

para cada edge e:
  registrar source_locator
  registrar type y direction
  registrar epistemic_status
  proponer alternativa si e no es observable
  declarar falsifier

emitir SG sólo si el focal y su vecindad explican más que U aislada
```

El resultado se valida con [MRRE-SCHEMA-SUBGRAPH](../02_contratos_y_schemas/reconstructed_subgraph.schema.yaml).

## Algoritmo D — Detección y prueba de chains

### D1. Generación de rutas

1. selecciona nodos de entrada: estado inicial, pregunta, perturbación, objetivo o premisa;
2. selecciona nodos de salida: efecto, decisión, manifestación, conclusión o estado cambiado;
3. enumera rutas dirigidas compatibles con tiempo y contexto;
4. colapsa duplicados sólo si preservan los mismos edges y source bindings;
5. conserva bifurcaciones y ciclos como estructuras, no como ruido.

### D2. Tipado

| Tipo de chain | Edge dominante | Pregunta de prueba |
|---|---|---|
| `causal` | `CAUSES/CONTRIBUTES_TO` | ¿cambiar X cambia Y bajo condiciones declaradas? |
| `enabling` | `ENABLES/REQUIRES` | ¿sin X la transición queda bloqueada? |
| `transductive` | `TRANSFORMS/REALIZES` | ¿qué cambia de tipo entre etapas? |
| `argumentative` | `SUPPORTS/ATTACKS/QUALIFIES` | ¿la conclusión pierde soporte al retirar la premisa? |
| `identity` | `IS_SAME_AS/REPLACES/INSTANTIATES` | ¿se preserva identidad o sólo etiqueta? |
| `temporal` | `PRECEDES/OVERLAPS` | ¿el orden es necesario o sólo narrativo? |
| `narrative` | `SETS_UP/REVEALS/RESOLVES` | ¿qué expectativa o tensión se transforma? |
| `control` | `OBSERVES/FEEDBACK/ADJUSTS` | ¿la salida modifica una etapa anterior? |

### D3. Pruebas de cada chain

```yaml
removal_test:
  target: edge_or_node_id
  operation: REMOVE | INVERT | SUBSTITUTE | DELAY
  expected_loss: "función o evidencia que debería perderse"
  observed_loss: "resultado del análisis"
  verdict: CRITICAL | SUPPORTING | REDUNDANT | SPURIOUS | UNDETERMINED
```

Una lista ordenada no es un chain hasta que sus transiciones tengan tipo, evidencia y prueba. El contraste cadena rígida/red distribuida puede estudiarse en [SRC-MRRE-READING](../90_historial/antecedentes/lectura.md) como ejemplo, no como definición universal.

## Algoritmo E — Arquitectura y esqueleto

1. agrupa chains que comparten propósito, estados o interfaces;
2. identifica topología global;
3. separa material concreto de rol funcional;
4. propone invariantes sólo cuando su remoción rompe el propósito;
5. declara regiones opcionales y variación permitida;
6. construye un contraejemplo léxicamente parecido pero estructuralmente inválido;
7. construye una instancia léxicamente distinta pero estructuralmente válida;
8. conserva alternativas si dos topologías explican la evidencia.

## Algoritmo F — Retrieval, equivalencia y binding

```text
SEARCH_SIGNATURE(role) = función + relaciones + restricciones + contexto + cardinalidad
CANDIDATES = retrieve(SEARCH_SIGNATURE)

para candidato c:
  test_function(c)
  test_relations(c)
  test_topology(c)
  test_context(c)
  test_forbidden_bindings(c)
  registrar PASS/PARTIAL/FAIL por prueba

si equivalence != PASS:
  no crear binding aceptado
si authority ausente:
  binding = proposed_waiting_authority
si no hay candidato:
  UNBOUND_GAP
```

La separación operacionaliza `PAT-COG-076…082` en [SRC-CAT-MRRE-02](../05_acervo_estructural/CATALOGO_COMPLEMENTARIO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_2_0.md).

## Algoritmo G — Reingreso y validación

1. trata la nueva instancia como manifestación independiente;
2. repite navegación, segmentación, subgrafos, chains y esqueleto;
3. compara el esqueleto recuperado con el esqueleto objetivo;
4. produce diff por rol, edge, chain e invariante;
5. ejecuta casos negativos y remoción;
6. clasifica pérdida como permitida, crítica o indeterminada;
7. sólo declara preservación dentro del propósito y dominio probados.

## 2. Vocabulario mínimo de edges

| Familia | Tipos recomendados |
|---|---|
| composición | `CONTAINS`, `PART_OF`, `INTERFACES_WITH` |
| identidad | `IS_SAME_AS`, `INSTANCE_OF`, `REPLACES`, `REFERS_TO` |
| temporal | `PRECEDES`, `FOLLOWS`, `OVERLAPS`, `PERSISTS` |
| causal/funcional | `CAUSES`, `CONTRIBUTES_TO`, `ENABLES`, `BLOCKS`, `REQUIRES`, `REALIZES` |
| cognitiva | `ACTIVATES`, `REWEIGHTS`, `SUPPRESSES`, `ORIENTS`, `TRANSFORMS` |
| discursiva | `SUPPORTS`, `ATTACKS`, `QUALIFIES`, `EXEMPLIFIES`, `CONTRASTS` |
| control | `OBSERVES`, `SIGNALS`, `FEEDBACK_TO`, `ADJUSTS` |
| procedencia | `ASSERTED_BY`, `OBSERVED_IN`, `DERIVED_FROM`, `VALIDATED_BY` |

No crees un edge nuevo sólo por estilo. Si ninguno expresa la relación, define el nuevo tipo, su inversa, dominio, rango y pruebas.

## 3. Registro de decisiones

```yaml
decision:
  decision_id: DEC-...
  phase: P0..P13
  question: "..."
  alternatives_considered: []
  selected: "..."
  rationale: "..."
  evidence_refs: []
  authority_ref: null
  reversible: true
  reopen_if: []
```

## 4. Ejemplo compacto de chain correcto

En el caso de la aspiradora, el texto fuente está embebido en [CASE-MRRE-VACUUM-INPUT](../09_casos_y_ejemplos/aspiradora/inputs/fixture.yaml). Una reconstrucción aceptable no escribe sólo “motor → succión → polvo”; produce:

```mermaid
flowchart LR
    M["motor activo"] -->|"ENABLES"| V["ventilador gira"]
    V -->|"CONTRIBUTES_TO"| P["diferencia de presión"]
    P -->|"CAUSES bajo conducto abierto"| F["flujo de aire"]
    F -->|"TRANSPORTS"| T["partículas"]
    T -->|"DEPOSITS_IN"| D["filtro/depósito"]
```

Cada edge apunta a un span y pasa una prueba de remoción. El dossier completo está en [CASE-MRRE-VACUUM](../09_casos_y_ejemplos/aspiradora/DOSSIER_OPERATIVO.md).

## 5. Condición de completitud

Un run sólo está completo si:

- las entradas y fuentes son recuperables;
- los artefactos A0–A10 aplicables existen;
- cada transformación puede recorrerse en ambos sentidos;
- los chains se probaron, no sólo se dibujaron;
- las alternativas materiales están preservadas;
- los bindings críticos tienen autoridad;
- la validación declara qué no se probó;
- todas las referencias usan rutas relativas resolubles.

El checklist automatizable está en [MRRE-VAL-DOC](../08_validacion_y_pruebas/04_validacion_de_referencias_y_operabilidad.md).
