# Contrato del sidecar de trazabilidad

## 1. Necesidad

El esquema formal de `idea_activa` no contiene un campo epistemológico ni una referencia a MTC. Añadirlos alteraría ACCD. Eliminarlos rompería la exigencia MTC de no convertir inferencias en hechos.

Por ello el adaptador emite un sidecar separado:

```yaml
trazabilidad_del_adaptador:
  meta:
    adapter_id: ADP-MTC-CC-001
    adapter_version: 0.1.0
    task_id:
    mtc_output_id:
    construccion_conceptual_id:

  derivaciones_por_idea:
    - idea_id:
      source_claim_ids: []
      mtc_components: []
      mechanism_ids: []
      source_paths: []
      operators_used_by_mtc: []
      epistemic_statuses: []
      adapter_operations: []
      preservation_obligations: []
      discarded_alternatives: []
      formulation_decision:
      role_decision:
      weight_decision:
      presence_decision:

  relaciones_derivadas:
    - from_idea:
      to_idea:
      accd_relation_type:
      derived_from_mtc_relations: []
      rationale:
      epistemic_status:

  descartes:
    - source_claim_id:
      reason: duplicate|peripheral|tautological|unsupported|covered_by_other_idea
      preservation_impact: none|low|medium|high

  validation:
    schema: {}
    reconstructability: {}
    epistemic_safety: {}
    boundary_compliance: {}

  unresolved_gaps: []
```

## 2. Regla de propagación epistemológica

Cuando una idea integra varias afirmaciones:

```text
SOURCE_DIRECT + MODEL_DERIVED
  → la formulación puede afirmar lo directo y debe señalar como explicación lo derivado.

INFERENCE
  → la formulación debe usar lenguaje inferencial visible.

HYPOTHESIS
  → la formulación debe declarar posibilidad o provisionalidad.

EXTERNAL_FACT
  → requiere fuente externa o dato aportado por el humano.

DESIGN_DECISION
  → no debe redactarse como hecho del caso.
```

La etiqueta más débil no contamina automáticamente toda la idea si la formulación separa las cláusulas. Si no pueden separarse, se aplica el estatus más cauteloso.

## 3. Regla de entrega

```text
ACCD recibe:
  construccion_conceptual

auditoría recibe:
  construccion_conceptual
  + trazabilidad_del_adaptador
  + informe_de_validacion
```

El sidecar puede persistirse junto con la salida si el humano lo autoriza. No forma parte de la instancia contextual ni de la manifestación codominial.

