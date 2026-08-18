# Matriz de cobertura

## Invariantes y requisitos nucleares

| ID | Procedencia | Archivo/schema/componente | Positiva | Negativa | Estado |
|---|---|---|---|---|---|
| `INV-MRRE-01` | `PAT-COG-001/028` | manifestation schema / trace | `T-PORTEADOR-01` | `NEG-01` | covered |
| `INV-MRRE-02` | `015/024/029` | field builder | `T-REUTERS-01` | `NEG-04` | covered |
| `INV-MRRE-03` | `024/025/092` | field-cut schema / cut engine | `T-REUTERS-02` | `NEG-03` | covered |
| `INV-MRRE-04` | `012/070` | subgraph schema/reconstructor | `T-TEXT-SG-01` | `NEG-06` | covered |
| `INV-MRRE-05` | `026/095` | segmenter | `T-VACUUM-LEX-01` | `NEG-05` | covered |
| `INV-MRRE-06` | `016/093` | ontology/ledger | `T-NETWORKS-01` | `NEG-07` | covered |
| `INV-MRRE-07` | `073/097/108` | trace schema/ledger | `T-EPISTEMIC-01` | `NEG-08` | covered |
| `INV-MRRE-08` | `076…079/104` | binding schema/selector | `T-BIND-01` | `NEG-09` | covered |
| `INV-MRRE-09` | `079/103` | selector/engine | `T-GAP-01` | `NEG-10` | covered |
| `INV-MRRE-10` | `064…068` | skeleton schema/inferer | `T-SKELETON-01` | `NEG-16` | covered |
| `INV-MRRE-11` | `078/081/120` | comparison protocol | `T-COMPARE-01` | `NEG-18` | covered |
| `INV-MRRE-12` | `042/114` | feedback protocol | `T-FEEDBACK-01` | `NEG-11` | covered |
| `INV-MRRE-13` | `108/115/126` | result schema/government | `T-PROMOTION-01` | `NEG-15` | covered |
| `INV-MRRE-14` | `030…039/124/125` | authority/ledger | `T-AUTH-01` | `NEG-12` | covered |
| `INV-MRRE-15` | `089/090` | manifest/ACCD adapter | `T-NO-ACCD-01` | `NEG-COUPLE-01` | covered |
| `INV-MRRE-16` | `099/100/101` | multicorpus/regression | `T-MULTICORPUS-01` | `NEG-14` | covered |

## Cobertura documental del scaffolding

| Validador | Evidencia materializada |
|---|---|
| `SC-V1` completitud | todos los archivos del árbol y README de zonas |
| `SC-V2` suficiencia | responsabilidad, contrato, fuentes, relaciones y aceptación por archivo |
| `SC-V3` contexto | gobierno, no-colapsos, absorción histórica |
| `SC-V4` transferibilidad | manifest, schemas, fixtures y rutas exactas |
| `SC-V5` construcción humana | orden, glosario y protocolos |
| `SC-V6` agentiva | manifest y registry declarativos |
| `SC-V7` gobierno | gates y promoción humana |

## Dependencia de revalidación

Cambiar un schema reejecuta V0, componentes consumidores, integraciones y fixtures. Cambiar invariante reejecuta todos los tests positivos/negativos de su fila. Cambiar patrón reevalúa usos del índice federado. `MRRE_MANIFEST.yaml`, registry y esta matriz deben permanecer sincronizados.

La matriz se ejecuta mediante [MRRE-VAL-PLAN](01_plan_de_verificacion_y_validacion.md), usa patrones del [MRRE-PATTERN-INDEX](../05_acervo_estructural/01_indice_federado_de_patrones_mrre.md) y casos de [MRRE-CASE-INDEX](../09_casos_y_ejemplos/README.md). La operabilidad y citas se cubren adicionalmente con [MRRE-VAL-DOC](04_validacion_de_referencias_y_operabilidad.md).
