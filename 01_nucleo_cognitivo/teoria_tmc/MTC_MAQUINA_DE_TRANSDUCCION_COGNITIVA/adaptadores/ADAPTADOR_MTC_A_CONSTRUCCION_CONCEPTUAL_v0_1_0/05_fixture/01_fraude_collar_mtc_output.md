# Fixture — MTC_OUTPUT del fraude del collar

Este archivo simula la vista de entrega que MTC produce para el adaptador. No sustituye la instancia completa del paquete MTC ni pretende resolver la historiografía del caso.

```yaml
mtc_output_para_adaptador:
  meta:
    task_id: FIX-COLLAR-001
    mtc_version: 0.1.0
    status: complete
    source_scope:
      - 30_especializaciones/30_fraude_collar.md
      - 10_mecanismo/10_transformacion_cognitiva.md
      - 10_mecanismo/11_transduccion_cognitiva.md
      - 10_mecanismo/14_capacidad_contexto_manifestacion.md

  membership:
    result: accepted
    tests_run: [T_MTC_01, T_MTC_02, T_MTC_03, T_MTC_04, T_MTC_05, T_MTC_06, T_MTC_07]
    passed: [state_action, capability_manifestation, context, typed_transductions]
    failed: []
    warnings:
      - La formalización MTC no sustituye la evidencia histórica externa.

  mtc_instance:
    operator:
      id: jeanne
      objective: obtener_control_material_del_collar
    receiver:
      id: rohan
      type: individual
    motivational_structure:
      goals: [recuperar_favor_de_la_reina]
      identity: [persona_de_alto_rango]
      incentives: [reconciliacion_y_prestigio]
    intervention:
      id: intervencion_fraudulenta
      type: narrativa_y_senales_falsas
      payload_structure: [acceso_aparente, correspondencia_falsa, encuentro_escenificado]
    cognitive_state:
      initial:
        dominant_subgraphs: [deseo_de_rehabilitacion, duda_sobre_acceso]
      trajectory:
        - aumenta_confianza_en_acceso_de_jeanne
        - disminuye_objecion_de_fraude
        - aumenta_disposicion_a_intermediar
      target:
        action_readiness: suficiente_para_intermediar
    transformations:
      - id: tau_confianza
        input: duda_y_deseo_de_rehabilitacion
        operation: reponderar_senales_y_objeciones
        output: confianza_operativa_en_la_narrativa
    transductions:
      - id: theta_ic
        source_domain: informacion_social
        target_domain: cognicion
        interface: interpretacion_de_senales
      - id: theta_ca
        source_domain: cognicion
        target_domain: conducta
        interface: agencia_de_rohan
      - id: theta_am
        source_domain: conducta_capacidad_contexto
        target_domain: estado_externo
        interface: reconocimiento_social_de_los_joyeros
    action:
      id: rohan_intermedia_y_compromete_su_nombre
    capability:
      id: prestigio_social_de_rohan
      type: social
      state: preexisting
    context:
      actors: [joyeros]
      institutions: [jerarquias_y_credito_social_del_antiguo_regimen]
      rules: [reconocimiento_del_rango_y_reputacion]
    manifestation:
      id: collar_disponible_para_jeanne
      observable_state_change: el_control_material_del_collar_cambia
    evaluation:
      goal: acceso_material_al_collar
    feedback:
      observable_signals: []
      update_targets: []
    contracts:
      epistemic:
        distinguish_model_from_historical_fact: true
      ethical:
        specialization: adversarial_fraud
    validation:
      warnings: []
      failures: []

  mechanism_chains:
    - mechanism_id: MEC-COLLAR-01
      ordered_claims: [CL-01, CL-02, CL-03, CL-04, CL-05, CL-06, CL-07, CL-08]
      involved_components: [I, EC, tau, theta_CA, A, V, K, theta_AM, M]
      boundaries: [information_to_cognition, cognition_to_action, capability_in_context_to_manifestation]
      relevance: nuclear

  preservation_obligations:
    non_collapse_pairs:
      - [EC, A]
      - [V, M]
      - [transformation, transduction]
    causal_or_functional_chains:
      - I_to_EC_to_A_to_V_to_K_to_M
    required_context_conditions:
      - los_joyeros_reconocen_el_prestigio_de_rohan
    specialization_constraints:
      - W_tilde_differs_from_W_star
      - objetivo_del_operador_no_alineado_con_el_receptor

  composition:
    pattern: cascade
    local_machines:
      - jeanne_to_rohan
      - rohan_to_joyeros
    interfaces:
      - accion_de_rohan_funciona_como_senal_para_los_joyeros

  claims:
    - claim_id: CL-01
      proposition: La intervención fraudulenta no produce directamente la transferencia material del collar.
      function_in_model: reject_direct_causation
      involved_components: [I, M]
      epistemic_status: MODEL_DERIVED
      supported_by: [INV-MTC-10, THETA_CHAIN]

    - claim_id: CL-02
      proposition: La intervención modifica la configuración cognitiva relevante de Rohan.
      function_in_model: cognitive_transformation
      involved_components: [I, EC, tau]
      epistemic_status: MODEL_DERIVED
      supported_by: [tau_confianza]

    - claim_id: CL-03
      proposition: La configuración alcanzada aumenta la disposición de Rohan a actuar como intermediario.
      function_in_model: cognition_to_action_interface
      involved_components: [EC, theta_CA, A]
      epistemic_status: MODEL_DERIVED
      supported_by: [theta_ca]

    - claim_id: CL-04
      proposition: La acción de Rohan moviliza una capacidad social preexistente.
      function_in_model: capability_mobilization
      involved_components: [A, V]
      epistemic_status: MODEL_DERIVED
      supported_by: [OP_IDENTIFY_CAPABILITY]

    - claim_id: CL-05
      proposition: La capacidad movilizada es el prestigio social de Rohan.
      function_in_model: capability_identification
      involved_components: [V]
      epistemic_status: SOURCE_SYNTHESIS
      supported_by: [IF-MTC-002, FRAUD_GRAPH]

    - claim_id: CL-06
      proposition: El prestigio sólo puede producir este efecto dentro de un contexto que lo reconoce.
      function_in_model: context_condition
      involved_components: [V, K]
      epistemic_status: MODEL_DERIVED
      supported_by: [INV-MTC-07, OP_COUNTERFACTUAL_CONTEXT]

    - claim_id: CL-07
      proposition: La respuesta de los joyeros media entre el prestigio movilizado y la entrega del collar.
      function_in_model: contextual_interface
      involved_components: [K, theta_AM, M]
      epistemic_status: MODEL_DERIVED
      supported_by: [theta_am]

    - claim_id: CL-08
      proposition: El collar disponible para Jeanne es la manifestación, no la capacidad que la produjo.
      function_in_model: non_collapse_v_m
      involved_components: [V, M]
      epistemic_status: SOURCE_SYNTHESIS
      supported_by: [INV-MTC-05, IF-MTC-002]

  abstraction:
    invariants:
      - cognitive_state_precedes_and_orients_action
      - action_mobilizes_capability
      - capability_requires_context
      - capability_differs_from_manifestation
    variation_domain:
      - concrete_false_signals
      - concrete_social_asset
      - concrete_manifestation_object

  trace:
    activated_neighborhoods: [FRAUD, COGNITIVE_CHANGE, TRANSDUCTION_CHAIN, SOCIAL_REALIZATION, VALIDATION]
    consulted_sources:
      - 30_especializaciones/30_fraude_collar.md
      - 10_mecanismo/10_transformacion_cognitiva.md
      - 10_mecanismo/11_transduccion_cognitiva.md
      - 10_mecanismo/14_capacidad_contexto_manifestacion.md
    executed_operators:
      - OP_TRACE_TRANSFORMATION
      - OP_TRACE_TRANSDUCTION
      - OP_IDENTIFY_ACTION
      - OP_IDENTIFY_CAPABILITY
      - OP_IDENTIFY_CONTEXT
      - OP_IDENTIFY_MANIFESTATION
      - OP_VALIDATE_MEMBERSHIP
      - OP_MARK_EPISTEMIC_STATUS

  unresolved_gaps:
    - La causalidad histórica fina requiere fuentes externas y queda fuera del fixture MTC.
```

