# Plantilla de informe de validación

```yaml
validation_report:
  task_id:
  adapter_version: 0.1.0

  input:
    mtc_status:
    membership_result:
    claims_received:
    unresolved_gaps: []

  output:
    ideas_emitted:
    relations_emitted:
    discarded_claims:

  gates:
    QG_ADP_01_contract: PASS|FAIL
    QG_ADP_02_membership: PASS|FAIL
    QG_ADP_03_sufficiency: PASS|PARTIAL|FAIL
    QG_ADP_04_no_duplication: PASS|FAIL
    QG_ADP_05_no_accd_anticipation: PASS|FAIL
    QG_ADP_06_idea_function: PASS|FAIL
    QG_ADP_07_non_collapse: PASS|FAIL
    QG_ADP_08_conceptual_graph: PASS|FAIL
    QG_ADP_09_epistemology: PASS|FAIL
    QG_ADP_10_accd_schema: PASS|FAIL
    QG_ADP_11_reconstructability: PASS|PARTIAL|FAIL
    QG_ADP_12_traceability: PASS|PARTIAL|FAIL

  reconstructive_tests:
    principal_chain:
    capability_vs_manifestation:
    cognitive_state_vs_action:
    context:
    transformation_vs_transduction:
    invariants:
    composition_interfaces:

  warnings: []
  failures: []
  result: COMPLETED|PARTIAL|BLOCKED
```

