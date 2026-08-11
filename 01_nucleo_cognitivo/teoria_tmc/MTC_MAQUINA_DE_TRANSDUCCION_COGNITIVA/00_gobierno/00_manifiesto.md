# Manifiesto

```yaml
adapter_manifest:
  id: ADP-MTC-CC-001
  logical_name: ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL
  version: 0.1.0
  date: 2026-08-10
  authority: HUMAN
  lifecycle: INTEGRATED_COGNITIVE_MODULE
  canonical: false
  mode: COGNITIVE_RUNTIME_SPECIFICATION
  integrated_into:
    module: cognicion_central_mtc.md
    module_version: 0.2.0
    bootstrap: como_leer_el_artefacto_adjunto.md
    bootstrap_version: 0.2.0
    neighborhood: MTC_TO_CONCEPTUAL_CONSTRUCTION
    router_intent: convert_mtc_to_construccion_conceptual
  source_space:
    - MTC-SOURCE://
    - MTC-GRAPH://
    - CC://03_aplicaciones/sistema-de-transferencia-accd/
  package_space: MTC-ADAPTER://
  work_space: ADAPTER-WORK://
  output_spaces:
    - MTC-OUTPUT://
    - MTC-TRACE://
  consumes:
    - validated_mtc_instance
    - mtc_execution_trace
    - mtc_epistemic_labels
    - accd_construccion_conceptual_contract
  emits:
    - construccion_conceptual
    - trazabilidad_del_adaptador
    - informe_de_validacion
  persistence:
    default: false
    promotion_requires_human: true
```

## Criterio de activación

Activar este adaptador únicamente cuando:

```text
1. MTC está instalada cognitivamente en el runtime;
2. existe una realización o caso identificable;
3. MTC puede entregar una instancia validada o una salida parcial declarada;
4. el destino requerido es construccion_conceptual de ACCD;
5. no se está pidiendo todavía una manifestación codominial.
```

## Estados de ejecución

```text
READY
  contratos localizados y entrada suficiente.

PARTIAL
  puede producirse una construcción parcial, pero existen huecos visibles.

BLOCKED_MTC
  MTC no validó pertenencia o no entregó estructura suficiente.

BLOCKED_ACCD
  no puede resolverse el contrato vigente de construccion_conceptual.

INVALID_OUTPUT
  la serialización o la validación reconstructiva falló.

COMPLETED
  construcción, sidecar e informe emitidos.
```

## Criterio de éxito

Una ejecución es `COMPLETED` cuando un runtime puede:

- reconstruir y validar el caso mediante MTC;
- derivar ideas activas sin copiar la ontología de MTC;
- preservar mecanismos e invariantes seleccionados;
- usar únicamente valores vigentes de ACCD;
- entregar `construccion_conceptual` al protocolo ACCD;
- auditar cada idea desde el sidecar;
- y evitar toda decisión audiovisual prematura.
