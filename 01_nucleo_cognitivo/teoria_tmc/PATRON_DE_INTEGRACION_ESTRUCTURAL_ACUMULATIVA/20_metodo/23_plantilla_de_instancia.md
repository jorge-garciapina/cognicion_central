# Plantilla de instancia PIEA

```yaml
piea_instance:
  id:
  title:
  version:
  status: DRAFT | REVIEWED | VALIDATED | REJECTED

  scope:
    domain:
    system_X:
    scale:
    transition_index_meaning:
    observation_window:

  state_before:
    symbol: S_t
    representation:
    relevant_components: []
    relevant_relations: []
    sufficiency_justification:

  contribution:
    symbol: u_t
    description:
    origin:
    granularity:

  operational_context:
    symbol: kappa_t
    conditions: []
    uncertainties: []

  integration:
    symbol: I_kappa_t
    mechanism_type:
    mechanism_description:
    admission_or_filtering:
    transformations: []

  state_after:
    symbol: S_t_plus_1
    representation:
    relevant_change:
    preserved_path_effect:
    future_consequence:

  invariants:
    system_delimited:
    state_present:
    contribution_differentiated:
    integration_present:
    state_dependence:
    contextual_conditioning:
    state_updated:
    selective_persistence:
    structural_nonreducibility:
    transition_traceability:

  alternative_models:
    succession_only:
    storage_only:
    addition_only:
    last_input_only:
    omitted_context:

  fac_adaptation:
    source_nucleus:
    contextual_composition:
    transformation_heuristics: []
    output_restrictions: []
    valid_correspondences: []
    broken_correspondences: []

  accd_handoff:
    required: false
    cognitive_structure_ref:
    realization_ref:
    protocol_ref:
    note: "Complete only when a separate codominial manifestation is requested."

  evidence:
    observations: []
    sources: []
    counterevidence: []
    unknowns: []

  classification:
    result: CONFIRMED_INSTANCE | PLAUSIBLE_INSTANCE | BOUNDARY_CASE | NON_INSTANCE | INSUFFICIENT_EVIDENCE
    rationale:
```

La plantilla no constituye un ejemplo desarrollado. Es un contrato vacío para futuras realizaciones.

