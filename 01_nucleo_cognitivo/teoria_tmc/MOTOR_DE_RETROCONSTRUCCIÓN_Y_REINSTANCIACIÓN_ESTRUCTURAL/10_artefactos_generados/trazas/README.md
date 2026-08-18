# Trazas

Guarda sidecars de procedencia y run logs separados de artefactos semánticos, con enlaces bidireccionales. La separación evita contaminar contenido, no autoriza perder vínculo.

Cada sidecar valida con [MRRE-SCHEMA-TRACE](../../02_contratos_y_schemas/epistemic_trace.schema.yaml) y debe responder fuente→resultado y resultado→fuente. El productor normativo es [MRRE-COMP-TRACE](../../04_runtime/componentes/08_trace_graph.md), adaptado del contrato [SRC-MCCR-RUNLOG](../../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/06_trazabilidad_observabilidad_y_run_log.md).
