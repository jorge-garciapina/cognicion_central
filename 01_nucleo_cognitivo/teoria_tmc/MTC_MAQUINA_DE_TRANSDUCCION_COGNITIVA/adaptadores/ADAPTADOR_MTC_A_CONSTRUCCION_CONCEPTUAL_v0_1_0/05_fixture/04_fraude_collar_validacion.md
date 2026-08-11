# Fixture — Resultado de validación

```yaml
validation_report:
  task_id: FIX-COLLAR-001
  adapter_version: 0.1.0

  input:
    mtc_status: complete
    membership_result: accepted
    claims_received: 8
    unresolved_gaps:
      - causalidad_historica_fina_fuera_del_fixture

  output:
    ideas_emitted: 8
    relations_emitted: 16
    discarded_claims: 2

  gates:
    QG_ADP_01_contract: PASS
    QG_ADP_02_membership: PASS
    QG_ADP_03_sufficiency: PASS
    QG_ADP_04_no_duplication: PASS
    QG_ADP_05_no_accd_anticipation: PASS
    QG_ADP_06_idea_function: PASS
    QG_ADP_07_non_collapse: PASS
    QG_ADP_08_conceptual_graph: PASS
    QG_ADP_09_epistemology: PASS
    QG_ADP_10_accd_schema: PASS
    QG_ADP_11_reconstructability: PASS
    QG_ADP_12_traceability: PASS

  reconstructive_tests:
    principal_chain: PASS
    capability_vs_manifestation: PASS
    cognitive_state_vs_action: PASS
    context: PASS
    transformation_vs_transduction: PASS
    invariants: PASS
    composition_interfaces: PARTIAL

  warnings:
    - La cascada Jeanne→Rohan→joyeros se preserva conceptualmente, pero el fixture no desarrolla dos instancias MTC completas por separado.
    - El resultado prueba la arquitectura del adaptador, no la verdad histórica exhaustiva del caso.

  failures: []
  result: COMPLETED
```

## Reconstrucción obtenida desde las ideas

```text
intervención fraudulenta
  → reconfiguración cognitiva de Rohan
    → disposición a actuar
      → acción de intermediación
        → movilización de prestigio preexistente
          → reconocimiento contextual por los joyeros
            → entrega del collar
              → collar disponible para Jeanne

prestigio V ≠ collar disponible M
```

La reconstrucción conserva la mediación cognitiva, la interfaz cognición→acción, la movilización de capacidad, la condición contextual y la distinción capacidad/manifestación. No contiene decisiones de video.

