# Validadores y fallas

## 1. Quality gates

### `QG-ADP-01 · Contrato`

¿Se recuperaron la versión MTC y el contrato vigente de ACCD?

### `QG-ADP-02 · Pertenencia`

¿MTC aceptó provisionalmente el caso y dejó visibles fallas o advertencias?

### `QG-ADP-03 · Suficiencia`

¿La salida contiene mecanismos, invariantes, claims y trazabilidad suficientes?

### `QG-ADP-04 · No duplicación`

¿El adaptador consumió operadores MTC sin reimplementarlos?

### `QG-ADP-05 · No anticipación`

¿La salida carece de decisiones de plataforma, audiencia, guion, bloques, visuales y audio?

### `QG-ADP-06 · Función de ideas`

¿Cada idea cumple una función verificable?

### `QG-ADP-07 · No-colapso`

¿Sobreviven `EC ≠ A`, `V ≠ M` y las distinciones específicas pertinentes?

### `QG-ADP-08 · Grafo conceptual`

¿Las relaciones se justifican entre ideas y no son copias sintácticas de aristas MTC?

### `QG-ADP-09 · Epistemología`

¿Ninguna inferencia o hipótesis se presenta como hecho?

### `QG-ADP-10 · Esquema ACCD`

¿Categorías, pesos, cardinalidades, ids y referencias son válidos?

### `QG-ADP-11 · Reconstrucción`

¿Un revisor puede recuperar el mecanismo seleccionado desde las ideas sin consultar el MTC_OUTPUT?

### `QG-ADP-12 · Trazabilidad`

¿Cada idea puede rastrearse a claims, componentes y fuentes?

## 2. Pruebas reconstructivas

```text
T-REC-01  reconstruir cadena principal.
T-REC-02  identificar capacidad sin confundirla con manifestación.
T-REC-03  identificar estado cognitivo sin confundirlo con acción.
T-REC-04  localizar contexto que vuelve realizable la capacidad.
T-REC-05  distinguir transformación de transducción.
T-REC-06  recuperar invariantes seleccionados.
T-REC-07  recuperar interfaces de cascada si existen.
T-REC-08  distinguir fuente, modelo e hipótesis mediante sidecar y modalidad.
```

No se exige reconstruir nombres, fechas o detalles descartados que MTC clasificó como dominio de variación o periferia.

## 3. Fallas

```text
FAIL-ADP-01  mtc_field_to_idea_mapping
  cada componente MTC se convirtió automáticamente en una idea.

FAIL-ADP-02  ontology_dump
  la salida enumera I, EC, A, V, K y M sin explicar el mecanismo.

FAIL-ADP-03  summary_only
  la salida reduce el caso, pero no preserva relaciones ni invariantes.

FAIL-ADP-04  duplicated_mtc
  el adaptador ejecuta su propio router o reconstrucción MTC.

FAIL-ADP-05  anticipated_accd
  la salida incluye hook, guion, ritmo, imágenes o bloques.

FAIL-ADP-06  epistemic_flattening
  una inferencia aparece como hecho.

FAIL-ADP-07  capability_manifestation_collapse
  V y M se expresan como equivalentes.

FAIL-ADP-08  state_action_collapse
  EC y A se expresan como la misma unidad.

FAIL-ADP-09  invalid_enum
  se usa un valor de ejemplo no declarado en ACCD.

FAIL-ADP-10  orphan_relation
  una relación apunta a un id inexistente.

FAIL-ADP-11  decorative_relation
  la descripción no explica cómo se relacionan las ideas.

FAIL-ADP-12  weight_confidence_confusion
  el peso se usa como certeza epistemológica.

FAIL-ADP-13  hidden_completion
  se rellenan huecos históricos o causales sin fuente.

FAIL-ADP-14  overpreservation
  todo detalle MTC se declara invariante.

FAIL-ADP-15  trace_in_accd_port
  se añaden campos MTC al objeto que consume ACCD.
```

## 4. Política de reparación

| Falla | Retorno |
|---|---|
| entrada o traza insuficiente | solicitar ampliación a MTC |
| mala selección o formulación | volver a `F06` |
| relación, rol, peso o presencia incoherente | volver a `F08`–`F11` |
| enum o serialización inválida | volver a `F13` |
| decisión ACCD anticipada | eliminarla y registrar descarte |
| hecho externo ausente | marcar hueco; no completar |
| contrato ACCD ambiguo | bloquear o usar perfil documentado con advertencia |

## 5. Estado final

```yaml
validation_report:
  schema: PASS|FAIL
  reconstructability: PASS|PARTIAL|FAIL
  epistemic_safety: PASS|FAIL
  no_collapse: PASS|FAIL
  responsibility_boundaries: PASS|FAIL
  traceability: PASS|PARTIAL|FAIL
  result: COMPLETED|PARTIAL|BLOCKED
  warnings: []
  failures: []
```

