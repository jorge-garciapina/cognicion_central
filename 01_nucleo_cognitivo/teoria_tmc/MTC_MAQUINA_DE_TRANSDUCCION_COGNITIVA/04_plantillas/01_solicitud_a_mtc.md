# Plantilla de solicitud a MTC

```yaml
peticion_mtc_para_construccion_conceptual:
  task_id: TASK-000

  human_objective:
    operation: construir_construccion_conceptual
    phenomenon_or_realization: |
      <describir o referenciar la realización>
    analysis_goal: explain

  scope:
    retrieval: minimal_sufficient
    allow_partial: false
    external_fact_completion: forbidden

  cognitive_need: |
    Reconstruye y valida la realización como MTC. Entrega una vista estructural
    orientada a que otro módulo decida qué mecanismos, relaciones, distinciones
    e invariantes deben convertirse en materia conceptual. No generes guion,
    instancia contextual ni manifestación ACCD.

  required_results:
    - validated_mtc_instance
    - membership_result
    - mechanism_chains
    - relevant_invariants
    - non_collapse_pairs
    - variation_domain
    - composition_boundaries
    - claim_level_epistemic_trace
    - unresolved_gaps

  operations_to_consider:
    required:
      - OP_RECOVER
      - OP_BUILD_WORKING_SUBGRAPH
      - OP_RECONSTRUCT_MTC
      - OP_VALIDATE_MEMBERSHIP
      - OP_ABSTRACT
      - OP_MARK_EPISTEMIC_STATUS
    conditional:
      - OP_IDENTIFY_Q
      - OP_TRACE_TRANSFORMATION
      - OP_TRACE_TRANSDUCTION
      - OP_IDENTIFY_ACTION
      - OP_IDENTIFY_CAPABILITY
      - OP_IDENTIFY_CONTEXT
      - OP_IDENTIFY_MANIFESTATION
      - OP_TRACE_FEEDBACK
      - OP_COMPOSE
      - OP_VALIDATE_CONTRACTS

  delivery_contract: MTC_OUTPUT_PARA_ADAPTADOR
```

## Regla de uso

El runtime puede adaptar el contenido de `cognitive_need`, pero no debe imponer que todas las operaciones condicionales se ejecuten. MTC conserva el ruteo y la activación selectiva.

