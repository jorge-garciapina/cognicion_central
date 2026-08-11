# Contrato MTC → Adaptador

## 1. Decisión arquitectónica

Los objetos actuales de MTC son necesarios, pero no bastan por separado:

- `mtc_instance` contiene la reconstrucción estructural;
- `trace_record` contiene ruteo, fuentes, operadores, claims y validaciones;
- la política epistemológica contiene las etiquetas válidas;
- `OP_ABSTRACT`, `OP_VALIDATE_MEMBERSHIP` y otros operadores producen resultados complementarios.

No se requiere inventar un segundo esquema canónico de MTC. Se requiere una **vista de entrega** que reúna esos outputs existentes con granularidad de claim. Esta vista se llama `MTC_OUTPUT_PARA_ADAPTADOR` y pertenece a la interfaz local, no al núcleo MTC.

## 2. Solicitud que el adaptador formula a MTC

```yaml
peticion_mtc_para_construccion_conceptual:
  task_id:
  intent: prepare_conceptual_construction
  phenomenon_or_realization:
  analysis_goal: explain|describe|compare|validate
  requested_scope: minimal_sufficient
  required_operations:
    - OP_RECOVER
    - OP_BUILD_WORKING_SUBGRAPH
    - OP_RECONSTRUCT_MTC
    - OP_VALIDATE_MEMBERSHIP
    - OP_ABSTRACT
    - OP_MARK_EPISTEMIC_STATUS
  conditional_operations:
    - OP_TRACE_TRANSFORMATION
    - OP_TRACE_TRANSDUCTION
    - OP_IDENTIFY_Q
    - OP_IDENTIFY_ACTION
    - OP_IDENTIFY_CAPABILITY
    - OP_IDENTIFY_CONTEXT
    - OP_IDENTIFY_MANIFESTATION
    - OP_TRACE_FEEDBACK
    - OP_COMPOSE
    - OP_VALIDATE_CONTRACTS
  required_views:
    - validated_mtc_instance
    - mechanism_chains
    - relevant_invariants
    - variation_domain
    - composition_boundaries
    - claim_level_epistemic_trace
    - unresolved_gaps
```

La lista de operaciones no obliga a ejecutarlas todas. MTC activa únicamente las necesarias para el caso.

## 3. Vista de entrega

```yaml
mtc_output_para_adaptador:
  meta:
    task_id:
    mtc_version:
    status: complete|partial|rejected
    source_scope: []

  membership:
    result: accepted|provisional|rejected|undetermined
    tests_run: []
    passed: []
    failed: []
    warnings: []

  mtc_instance:
    operator: {}
    receiver: {}
    motivational_structure: {}
    intervention: {}
    cognitive_state: {}
    transformations: []
    transductions: []
    action: {}
    capability: {}
    context: {}
    manifestation: {}
    evaluation: {}
    feedback: {}
    contracts: {}
    validation: {}

  mechanism_chains:
    - mechanism_id:
      ordered_claims: []
      involved_components: []
      boundaries: []
      relevance:

  preservation_obligations:
    non_collapse_pairs: []
    causal_or_functional_chains: []
    required_context_conditions: []
    specialization_constraints: []

  composition:
    pattern: single|cascade|nested|network
    local_machines: []
    interfaces: []

  claims:
    - claim_id:
      proposition:
      function_in_model:
      involved_components: []
      epistemic_status: SOURCE_DIRECT|SOURCE_SYNTHESIS|MODEL_DERIVED|INFERENCE|HYPOTHESIS|DESIGN_DECISION|EXTERNAL_FACT
      supported_by: []
      evidence_refs: []
      unresolved_dependencies: []

  abstraction:
    invariants: []
    variation_domain: []

  trace:
    activated_neighborhoods: []
    activated_nodes: []
    consulted_sources: []
    executed_operators: []
    validations: []

  unresolved_gaps: []
```

## 4. Campos obligatorios para iniciar

El adaptador requiere al menos:

```text
membership.result
mtc_instance.cognitive_state
mtc_instance.transformations
mtc_instance.transductions
mtc_instance.action
mtc_instance.capability
mtc_instance.context
mtc_instance.manifestation
mechanism_chains
preservation_obligations
claims[].epistemic_status
trace.consulted_sources
trace.executed_operators
```

Los elementos opcionales de MTC (`Q`, `F`, composición, contratos especializados) son obligatorios sólo cuando MTC declara que su omisión rompería el caso.

## 5. Reglas de aceptación

```text
ACCEPT
  membership = accepted|provisional
  y el mecanismo relevante es reconstruible
  y cada claim importante tiene estatus epistemológico.

REQUEST_EXTENSION
  faltan partes que MTC puede producir mediante operadores existentes.

PARTIAL
  el humano autoriza salida parcial y los huecos pueden declararse sin rellenarlos.

REJECT
  membership = rejected
  o V/M, EC/A o transformación/transducción permanecen colapsados
  o la estructura se sostiene con inferencias sin marcar.
```

## 6. Regla de no duplicación

El adaptador puede pedir `OP_TRACE_TRANSDUCTION`; no contiene una implementación alternativa de ese operador. Puede pedir invariantes a `OP_ABSTRACT`; no vuelve a abstraer la instancia como si MTC no existiera. Su primera operación propia comienza al evaluar la relevancia conceptual de los resultados ya producidos.

