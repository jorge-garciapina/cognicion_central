# Fixture — Trazabilidad del adaptador

```yaml
trazabilidad_del_adaptador:
  meta:
    adapter_id: ADP-MTC-CC-001
    adapter_version: 0.1.0
    task_id: FIX-COLLAR-001
    mtc_output_id: MTC-OUT-COLLAR-001
    construccion_conceptual_id: CC-COLLAR-001

  derivaciones_por_idea:
    - idea_id: mentira_no_produce_directamente_resultado_material
      source_claim_ids: [CL-01]
      mtc_components: [I, M, transduction_chain]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 10_mecanismo/11_transduccion_cognitiva.md
      epistemic_statuses: [MODEL_DERIVED]
      adapter_operations: [select, propositional_decomposition, rank]
      preservation_obligations: [no_direct_I_to_M]
      role_decision: nuclear porque evita una causalidad mágica.
      weight_decision: alta pérdida reconstructiva si se omite.
      presence_decision: reiterada porque organiza inicio y cierre del mecanismo.

    - idea_id: intervencion_reconfigura_cognicion_de_rohan
      source_claim_ids: [CL-02]
      mtc_components: [I, EC, tau]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 10_mecanismo/10_transformacion_cognitiva.md
        - 30_especializaciones/30_fraude_collar.md
      epistemic_statuses: [MODEL_DERIVED]
      adapter_operations: [select, propositional_decomposition]
      preservation_obligations: [transformation_precedes_action]
      role_decision: nuclear porque explica la operación cognitiva.

    - idea_id: configuracion_cognitiva_habilita_accion
      source_claim_ids: [CL-03]
      mtc_components: [EC, theta_CA, A]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 10_mecanismo/11_transduccion_cognitiva.md
      epistemic_statuses: [MODEL_DERIVED]
      adapter_operations: [select, bridge_detection, relate]
      preservation_obligations: [EC_not_equal_A]
      role_decision: puente porque conecta cognición y conducta sin colapsarlas.

    - idea_id: accion_moviliza_prestigio_preexistente
      source_claim_ids: [CL-04, CL-05]
      mtc_components: [A, V]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 10_mecanismo/14_capacidad_contexto_manifestacion.md
        - 30_especializaciones/30_fraude_collar.md
      epistemic_statuses: [MODEL_DERIVED, SOURCE_SYNTHESIS]
      adapter_operations: [merge_compatible_claims, propositional_decomposition]
      preservation_obligations: [action_mobilizes_capability]
      role_decision: nuclear porque identifica el recurso generativo.

    - idea_id: prestigio_requiere_contexto_que_lo_reconozca
      source_claim_ids: [CL-06]
      mtc_components: [V, K]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 10_mecanismo/14_capacidad_contexto_manifestacion.md
      epistemic_statuses: [MODEL_DERIVED]
      adapter_operations: [select, propositional_decomposition, relate]
      preservation_obligations: [context_required]
      role_decision: nuclear porque elimina el salto entre prestigio y efecto.

    - idea_id: joyeros_median_entre_prestigio_y_entrega
      source_claim_ids: [CL-07]
      mtc_components: [K, theta_AM, M]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 10_mecanismo/11_transduccion_cognitiva.md
      epistemic_statuses: [MODEL_DERIVED]
      adapter_operations: [select, contextualize_relation]
      preservation_obligations: [contextual_interface]
      role_decision: complementaria porque concreta el contexto sin definir el núcleo.

    - idea_id: collar_disponible_es_manifestacion
      source_claim_ids: [CL-08]
      mtc_components: [M]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 30_especializaciones/30_fraude_collar.md
      epistemic_statuses: [SOURCE_SYNTHESIS]
      adapter_operations: [select, definitional_formulation]
      preservation_obligations: [manifestation_identification]
      role_decision: derivada porque expresa el estado externo resultante.

    - idea_id: capacidad_y_manifestacion_son_distintas
      source_claim_ids: [CL-05, CL-08]
      mtc_components: [V, M]
      mechanism_ids: [MEC-COLLAR-01]
      source_paths:
        - 00_core/00_especificacion_nuclear.md
        - 10_mecanismo/11_transduccion_cognitiva.md
      epistemic_statuses: [SOURCE_SYNTHESIS]
      adapter_operations: [preserve_non_collapse, contrastive_formulation]
      preservation_obligations: [V_not_equal_M]
      role_decision: contrastiva por preservar una diferencia ontológica decisiva.
      weight_decision: 1.00 porque su pérdida invalida el fixture.

  descartes:
    - source_claim_id: concrete_signal_inventory
      reason: peripheral
      preservation_impact: none
    - source_claim_id: later_trial_consequences
      reason: peripheral
      preservation_impact: none

  unresolved_gaps:
    - Los detalles históricos finos no fueron completados por el adaptador.
```

