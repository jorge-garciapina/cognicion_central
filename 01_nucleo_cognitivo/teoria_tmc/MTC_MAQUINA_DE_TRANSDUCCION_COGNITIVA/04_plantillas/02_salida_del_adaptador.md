# Plantilla de salida del adaptador

## 1. Puerto ACCD

```yaml
construccion_conceptual:
  coleccion_de_ideas_activas:
    ideas_activas:
      - idea_id: idea_001
        formulacion_de_la_idea: proposicion_relacional
        formulacion_textual_de_la_idea: >-
          <proposición completa y comprensible>
        rol_conceptual: nuclear
        peso_relativo: 0.90
        modo_de_presencia: explicita
        relaciones_con_otras_ideas:
          - idea_relacionada: idea_002
            tipo_de_relacion: condicion
            descripcion_de_la_relacion: >-
              <explicación concreta de la relación>
```

## 2. Sidecar

```yaml
trazabilidad_del_adaptador:
  meta:
    adapter_id: ADP-MTC-CC-001
    adapter_version: 0.1.0
    task_id: TASK-000
    mtc_output_id:
    construccion_conceptual_id:

  derivaciones_por_idea:
    - idea_id: idea_001
      source_claim_ids: []
      mtc_components: []
      mechanism_ids: []
      source_paths: []
      operators_used_by_mtc: []
      epistemic_statuses: []
      adapter_operations:
        - select
        - propositional_decomposition
        - relate
        - rank
      preservation_obligations: []
      discarded_alternatives: []
      formulation_decision:
      role_decision:
      weight_decision:
      presence_decision:

  relaciones_derivadas: []
  descartes: []
  unresolved_gaps: []
```

## 3. Regla de separación

Los dos bloques pueden vivir en archivos distintos. Si viven en un mismo documento de auditoría, el runtime debe extraer y entregar a ACCD únicamente el bloque `construccion_conceptual`.

