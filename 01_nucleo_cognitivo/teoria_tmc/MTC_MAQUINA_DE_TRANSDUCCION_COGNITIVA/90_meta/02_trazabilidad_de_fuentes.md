# Trazabilidad de fuentes

| Decisión del adaptador | Fuente principal | Tipo |
|---|---|---|
| MTC conserva comprensión, reconstrucción y pertenencia | `cognicion_central_mtc.md`; `21_instanciacion_y_validacion.md` | SOURCE_SYNTHESIS |
| Adaptador consume operadores sin duplicarlos | `cognicion_central_mtc.md`, secciones 9–12 | SOURCE_DIRECT |
| `mtc_instance` como base estructural | `20_metodo/21_instanciacion_y_validacion.md`; `24_esquema_serializable_en_markdown.md` | SOURCE_DIRECT |
| Etiquetas epistemológicas | `cognicion_central_mtc.md`, sección 16 | SOURCE_DIRECT |
| Sidecar separado | ausencia de campo epistemológico ACCD + obligación MTC de traza | DESIGN_DECISION |
| Objeto intermedio transitorio | heterogeneidad de contratos y validación antes de compresión | DESIGN_DECISION |
| ACCD recibe construcción, no guion | prompt humano; protocolo de video corto | SOURCE_SYNTHESIS |
| Forma compuesta de `construccion_conceptual` | Grafo de Regiones ACCD | SOURCE_DIRECT |
| Cinco componentes mínimos de `idea_activa` | `def_idea_activa.json` | SOURCE_DIRECT |
| Categorías válidas de formulación, rol, presencia y relación | nodos y definiciones del Grafo de Regiones | SOURCE_DIRECT |
| `peso_relativo ∈ [0,1]` | `peso_relativo.json` | SOURCE_DIRECT |
| `idea_id` y texto concreto como interoperabilidad | protocolo de video y ejemplos cátaros/Fouquet | SOURCE_SYNTHESIS |
| Rechazar enums sólo ejemplificados | precedencia del grafo formal sobre ejemplos | DESIGN_DECISION |
| Validación reconstructiva | criterio humano de fidelidad MTC + invariantes MTC | SOURCE_SYNTHESIS |
| Fixture `V = prestigio`, `M = collar disponible` | especialización del collar y comando humano | SOURCE_SYNTHESIS |

## Direcciones conceptuales

```text
MTC-SOURCE://cognicion_central_mtc.md
MTC-SOURCE://20_metodo/21_instanciacion_y_validacion.md
MTC-SOURCE://20_metodo/24_esquema_serializable_en_markdown.md
MTC-SOURCE://30_especializaciones/30_fraude_collar.md
MTC-SOURCE://90_meta/90_trazabilidad_conceptual.md

CC://03_aplicaciones/sistema-de-transferencia-accd/definiciones/
CC://03_aplicaciones/sistema-de-transferencia-accd/grafo_de_regiones/
CC://03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/
CC://03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/ejemplos/
```

## Distinción de procedencia

```text
fuentes MTC
  → definen qué estructura fue reconstruida

fuentes ACCD
  → definen qué forma debe tener la construcción conceptual

adaptador
  → decide cómo derivar una de la otra

fixture
  → prueba esa derivación; no define reglas generales
```

