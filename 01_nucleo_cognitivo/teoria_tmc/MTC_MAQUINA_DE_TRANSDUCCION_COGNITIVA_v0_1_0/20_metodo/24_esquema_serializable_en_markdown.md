# Esquema serializable de una instancia MTC

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Propósito

Proporcionar una forma portable de registrar instancias sin crear archivos YAML separados. El bloque YAML vive dentro de este Markdown.

```yaml
mtc_instance:
  meta:
    id: MTC-INSTANCE-000
    version: 0.1.0
    status: proposed
    source_scope: []

  operator:
    id:
    objective:
    knowledge_scope:

  receiver:
    id:
    type: individual|group|institution

  motivational_structure:
    desires: []
    goals: []
    fears: []
    obligations: []
    norms: []
    identity: []
    incentives: []
    costs: []

  intervention:
    id:
    type:
    channels: []
    payload_structure: []

  cognitive_state:
    initial:
      nodes: []
      edges: []
      dominant_subgraphs: []
    trajectory: []
    target:
      nodes: []
      edges: []
      action_readiness:

  transformations:
    - id:
      input:
      operation:
      output:

  transductions:
    - id:
      source_domain:
      target_domain:
      interface:
      conditions: []

  action:
    id:
    preconditions: []

  capability:
    id:
    type:
    state: preexisting|enhanced|constructed

  context:
    actors: []
    institutions: []
    rules: []
    material_conditions: []

  manifestation:
    id:
    observable_state_change:

  evaluation:
    goal:
    metrics: []

  feedback:
    observable_signals: []
    update_targets: []

  contracts:
    epistemic: {}
    ethical: {}
    authority: {}
    traceability: {}

  validation:
    membership_tests: []
    warnings: []
    failures: []
```

## 2. Regla

El esquema es descriptivo y portable. No constituye todavía un esquema de validación ejecutable. Una futura implementación puede convertirlo en JSON Schema, Zod o tipos de software, pero este paquete mantiene todos los archivos en Markdown como fue solicitado.
