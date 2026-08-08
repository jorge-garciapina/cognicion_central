# BITACORA DE REORGANIZACION

## ORG-EVT-0001

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: REORGANIZE_REPOSITORY
policy: ORG-CC 1.0.0
scope: all_existing_files
previous_top_level:
  - artefacto
  - cNode
  - contexto
  - ejemplos
  - main
  - cognitive_atlas.owl
  - eb-definicion-conceptual.txt
  - grafo-de-discusion.txt
new_top_level:
  - 00_gobierno
  - 01_nucleo_cognitivo
  - 02_metodos_y_herramientas
  - 03_aplicaciones
  - 04_conocimiento_y_contexto
  - 05_casos_y_ejemplos
  - 06_artefactos_generados
  - 90_historial
  - 99_entrada
principles:
  - operational_function_first
  - human_sovereignty
  - canonical_precedence
  - one_primary_location
  - immutable_history
  - explicit_intake
  - traceable_moves
content_policy: preserve_original_file_content
files_moved: 54
integrity:
  sha256_before_after_matches: 54
  missing_destinations: 0
  remaining_old_paths: 0
  pdf_files_reopened: 13
  ndjson_artifacts_validated: 8
  ontology_xml_validated: true
  scripts_syntax_checked: 2
```

### Resultado esperado

- Separar el gobierno de las aplicaciones.
- Separar documentos activos de versiones históricas.
- Distinguir fuente, artefacto, caso y realización derivada.
- Crear una puerta única para futuros archivos.
- Hacer posible la recuperación selectiva por parte de humanos e IA.

## ORG-EVT-0002

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: INGEST_AND_CLASSIFY_EXTERNAL_FILES
policy: ORG-CC 1.1.0
scope:
  explicit_files_received: 10
  broad_folder_excluded: C:/Users/rodri/OneDrive/Documentos/
  exclusion_reason: carpeta personal heterogénea no presentada como unidad cognitiva delimitada
intake:
  route: 99_entrada
  content_policy: preserve_source_and_copy_exact_bytes
  source_files_preserved: 10
classification:
  CORE: 1
  APP: 9
new_subareas:
  - 03_aplicaciones/creacion_de_contenido/biblioteca_escenica_composable
  - 03_aplicaciones/creacion_de_contenido/modelos_expresivos
  - 03_aplicaciones/creacion_de_contenido/referencias_de_estilo
records_assigned:
  first: FILE-CC-055
  last: FILE-CC-064
integrity:
  sha256_source_destination_matches: 10
  missing_destinations: 0
  originals_missing_after_copy: 0
  ndjson_artifacts_validated: 1
  ndjson_records_validated: 5
relations_detected:
  - FILE-CC-056 coincide con un registro interno de FILE-CC-029
  - un registro interno de FILE-CC-055 coincide con FILE-CC-016
governance_change:
  previous_policy: ORG-CC 1.0.0
  current_policy: ORG-CC 1.1.0
  compatibility: minor
```

### Decisión de organización

- La Arquitectura Cognitiva Fractal se incorpora al núcleo porque define una capacidad reusable entre dominios y escalas.
- La Biblioteca Escénica Composable se conserva como aplicación en desarrollo con modelo, descripción de estado y protocolo propios.
- Los textos sobre canales, capas y composición ascendente se agrupan como modelos expresivos provisionales de creación de contenido.
- El artefacto de estilo se conserva como referencia aplicada y debe recuperarse por registros internos, no cargarse indiscriminadamente.

## ORG-EVT-0003

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: INGEST_AND_CLASSIFY_EXTERNAL_FILES
policy: ORG-CC 1.2.0
scope:
  explicit_files_received: 13
intake:
  route: 99_entrada
  content_policy: preserve_source_and_copy_exact_bytes
  source_files_preserved: 13
classification:
  CORE: 5
  METHOD: 2
  APP: 3
  HIST: 3
new_subareas:
  - 03_aplicaciones/creacion_de_contenido/youtube
  - 02_metodos_y_herramientas/artefactos/prompts
  - 02_metodos_y_herramientas/ingenieria_de_estructuras_cognitivas
  - 90_historial/desarrollo_conceptual/biblioteca_escenica_composable
  - 90_historial/desarrollo_conceptual/teoria_tmc
records_assigned:
  first: FILE-CC-065
  last: FILE-CC-077
integrity:
  sha256_source_destination_matches: 13
  missing_destinations: 0
  originals_missing_after_copy: 0
  text_files_utf8_validated: 12
  pdf_files_reopened: 1
  pdf_pages_rendered_and_inspected: 20
relations_detected:
  - FILE-CC-072 coincide con un registro interno de FILE-CC-028
  - FILE-CC-069 incorpora copias exactas de FILE-CC-014, FILE-CC-016 y FILE-CC-017
  - FILE-CC-069 incorpora materialize-src-from-jsonl.cjs, localizado sólo como registro interno de FILE-CC-028
  - FILE-CC-068 es antecedente genealógico de documentos activos de la Biblioteca Escénica Composable y de modelos expresivos
  - FILE-CC-077 es la base superada por la definición detallada FILE-CC-076
governance_change:
  previous_policy: ORG-CC 1.1.0
  current_policy: ORG-CC 1.2.0
  compatibility: minor
```

### Decisión de organización

- Los protocolos de títulos y las notas sobre miniaturas quedan en una subárea YouTube, mientras el modelo de composición divulgativa permanece entre los modelos expresivos reutilizables.
- El compilador cognitivo se conserva como prompt de artefacto y la Ingeniería de Estructuras Cognitivas como método; sus componentes embebidos se registran como relaciones, no como fuentes independientes nuevas.
- Los documentos vigentes sobre TMC, integración universal y rol operativo se mantienen en el núcleo con autoridad de trabajo; sus mapas, antecedentes y versiones superadas pasan al historial.
- `analisis-de-estructuras.pdf` se conserva en cNode como introducción de trabajo y no adquiere precedencia sobre la especificación activa.

## ORG-EVT-0004

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: INGEST_CLASSIFY_AND_RESOLVE_DUPLICATE
policy: ORG-CC 1.3.0
scope:
  explicit_files_received: 9
  unique_files_ingested: 8
  exact_duplicates_resolved: 1
intake:
  route: 99_entrada
  content_policy: preserve_source_and_copy_exact_bytes
  source_files_preserved: 9
classification:
  METHOD: 1
  APP: 3
  CONTEXT: 4
new_subareas:
  - 02_metodos_y_herramientas/diseno_atencional
  - 03_aplicaciones/campos_atencionales
  - 03_aplicaciones/campos_atencionales/modelos
  - 03_aplicaciones/creacion_de_contenido/video_corto
  - 04_conocimiento_y_contexto/memoria_conceptual/pipelines_cognitivos
  - 04_conocimiento_y_contexto/fuentes_externas/teorias_cognitivas_y_discursivas
records_assigned:
  first: FILE-CC-078
  last: FILE-CC-085
duplicate_resolution:
  received: C:/Users/rodri/OneDrive/Escritorio/cognitive-apps/documentos-de-investigacion/work-spaces/documentos-empresa/analisis-de-estructuras.pdf
  resolved_to: FILE-CC-071
  reason: identical_sha256
  new_copy_created: false
  new_id_created: false
integrity:
  sha256_source_destination_matches: 8
  missing_destinations: 0
  originals_missing_after_copy: 0
  text_files_utf8_validated: 7
  pdf_files_reopened: 1
  pdf_pages_rendered_and_inspected: 25
  duplicate_sha256_matches: 1
relations_detected:
  - FILE-CC-078 desarrolla pipelines cognitivos en relación con TMC, cNode, grafos ponderados y acciones observables
  - FILE-CC-081 declara nueve modelos fuente todavía no materializados como archivos independientes
  - FILE-CC-083 a FILE-CC-085 formalizan síntesis de teorías ya mencionadas dentro de FILE-CC-027, sin duplicar sus registros
  - FILE-CC-079 y FILE-CC-082 se complementan como aplicación por plataforma y método transversal de atención variable
governance_change:
  previous_policy: ORG-CC 1.2.0
  current_policy: ORG-CC 1.3.0
  compatibility: minor
```

### Decisión de organización

- El PDF sobre pipelines se conserva como memoria conceptual `RAW`: contiene ideas valiosas, pero también exploración libre, correcciones internas, capturas de conversación y una página final vacía.
- Los modelos backend/frontend y pertenencia racionalizada forman una aplicación propia de campos atencionales porque organizan audiencia, participación, recurrencia y conversión.
- `Progressive Attention Enhancement` se trata como método transversal porque sus capas y pruebas pueden aplicarse a múltiples medios.
- Las síntesis de Event Segmentation Theory, Rhetorical Structure Theory y Structure Building Framework se conservan como contexto secundario, no como fuentes académicas primarias.
- El documento comparativo de video corto permanece en creación de contenido y requiere revalidación temporal de las recomendaciones específicas de cada plataforma.

## ORG-EVT-0005

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: INGEST_CLASSIFY_AND_RESOLVE_DEPENDENCIES
policy: ORG-CC 1.4.0
scope:
  explicit_files_received: 9
  unique_files_ingested: 9
  exact_duplicates_resolved: 0
intake:
  route: 99_entrada
  content_policy: preserve_source_and_copy_exact_bytes
  source_files_preserved: 9
classification:
  APP: 6
  CONTEXT: 3
new_subareas:
  - 03_aplicaciones/campos_atencionales/modelos/principios_psicologicos
  - 04_conocimiento_y_contexto/fuentes_externas/psicologia_cognitiva_y_consumidor
records_assigned:
  first: FILE-CC-086
  last: FILE-CC-094
dependencies_resolved:
  owner: FILE-CC-081
  materialized: 3
  still_unresolved: 6
  files:
    - FILE-CC-089
    - FILE-CC-090
    - FILE-CC-093
integrity:
  sha256_source_destination_matches: 9
  missing_destinations: 0
  originals_missing_after_copy: 0
  text_files_utf8_validated: 6
  pdf_files_reopened: 3
  pdf_pages_rendered_and_inspected: 67
relations_detected:
  - FILE-CC-086 limita el uso de reportes verbales como acceso directo a las causas de una respuesta y aporta un control para modelos de autorreferencia y racionalización
  - FILE-CC-087 fundamenta y delimita el modelo aplicado FILE-CC-094 mediante la teoría de la brecha de información
  - FILE-CC-088 fundamenta y modera el modelo aplicado FILE-CC-093 mediante la relación entre contacto, propiedad percibida, reacción afectiva y valoración
  - FILE-CC-092 funciona como puente de adaptación entre principios abstractos y los modelos aplicados FILE-CC-089 a FILE-CC-091, FILE-CC-093 y FILE-CC-094
governance_change:
  previous_policy: ORG-CC 1.3.0
  current_policy: ORG-CC 1.4.0
  compatibility: minor
```

### Decisión de organización

- Las seis formulaciones operativas permanecen en la aplicación de campos atencionales: persiguen objetivos de reconocimiento, pertenencia, personalización, persuasión o conversión y no constituyen por sí mismas teoría universal del núcleo.
- Los tres artículos se conservan por separado como `PRIMARY_SOURCE`; apoyan o limitan modelos, pero no adquieren autoridad canónica y sus conclusiones no deben extrapolarse fuera de sus diseños y alcances.
- El modelo de curiosidad debe recuperar a Loewenstein para la brecha de información; el modelo de propiedad debe recuperar a Peck y Shu y conservar la valencia del contacto como moderador de la valoración.
- Nisbett y Wilson funciona además como límite metodológico: una explicación verbal plausible no demuestra acceso introspectivo al proceso causal que produjo una respuesta.
- La incorporación materializa tres dependencias declaradas por `FILE-CC-081`; las seis restantes continúan registradas como deudas.

## ORG-EVT-0006

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: CREATE_PROVISIONAL_APPLICATION
policy: ORG-CC 1.5.0
target: BUSQUEDA_COGNITIVA
scope:
  generated_source_documents: 1
  generated_readmes: 1
classification:
  APP: 1
new_subareas:
  - 03_aplicaciones/busqueda_cognitiva
records_assigned:
  first: FILE-CC-095
  last: FILE-CC-095
origin:
  type: internal_generation_from_human_command
  intake_route: direct_to_classified_destination
  external_source_preservation_required: false
status:
  lifecycle: PROVISIONAL
  canonical_integration: false
  implementation: conceptual_specification_only
integrity:
  text_files_utf8_validated: 2
  missing_destinations: 0
  registered_sha256_matches: 1
relations_detected:
  - FILE-CC-095 formaliza la búsqueda en catálogo anticipada por la Ingeniería de Estructuras Cognitivas
  - FILE-CC-095 puede proporcionar anclas, puentes y contraejemplos a APRENDIZAJE_ESTRUCTURAL
  - FILE-CC-095 requiere REGISTRO_DE_ESTRUCTURAS_COGNITIVAS y MAPA_DE_DEPENDENCIAS para alcanzar operación sistemática
governance_change:
  previous_policy: ORG-CC 1.4.0
  current_policy: ORG-CC 1.5.0
  compatibility: minor
```

### Decisión de organización

- BÚSQUEDA_COGNITIVA se conserva como cApp de infraestructura metodológica dentro de aplicaciones, no como núcleo ni herramienta aislada, porque ensambla capacidades y ofrece una interfaz operable a humanos y otras cApps.
- La aplicación reconoce dos activadores mínimos: consulta explícita del humano y necesidad interna heredada de un comando autorizado.
- La creación del documento está autorizada; su promoción al canon queda pendiente de decisiones y pruebas adicionales.

## ORG-EVT-0007

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: INGEST_AND_CLASSIFY_EXTERNAL_FILES
policy: ORG-CC 1.6.0
scope:
  explicit_files_received: 3
  broad_folder_excluded: C:/Users/rodri/OneDrive/Escritorio/
  exclusion_reason: contenedor personal heterogéneo no presentado como unidad cognitiva delimitada
classification:
  APP: 1
  HIST: 2
new_subareas:
  - 03_aplicaciones/creacion_de_contenido/accd
  - 90_historial/desarrollo_conceptual/campos_atencionales
records_assigned:
  first: FILE-CC-096
  last: FILE-CC-098
origin:
  type: external_files_selected_by_human
  intake_route: 99_entrada
  external_source_preservation_required: true
integrity:
  source_destination_sha256_matches: 3
  registered_sha256_matches: 3
  missing_destinations: 0
relations_detected:
  - FILE-CC-097 es una nota germinal de la distinción entre sección y realización que FILE-CC-096 desarrolla formalmente
  - FILE-CC-098 materializa una dependencia declarada por FILE-CC-081, pero su condición legacy impide tratarla como autoridad activa
  - FILE-CC-096 enlaza ACCD, MAANC, Event Segmentation Theory, instancia contextual, realización, protocolo y manifestación codominial
governance_change:
  previous_policy: ORG-CC 1.5.0
  current_policy: ORG-CC 1.6.0
  compatibility: minor
```

### Decisión de organización

- `base_teorica_ecuacion_de_protocolo_ACCD.md` queda en la aplicación de creación de contenido porque formaliza la operación productiva de la ACCD; su incorporación no lo convierte en canon ni en teoría transversal aprobada.
- `ideas_de_diseno1.md` queda en genealogía por ser una nota exploratoria cuyo núcleo fue desarrollado posteriormente con más precisión.
- `modelo_entidades_organizadoras_atencion.md` queda en genealogía porque su ruta original está marcada `legacy` y existe fuera del repositorio un entendimiento posterior que corrige la jerarquía a `campo_atencional → UOA`.
- La dependencia correspondiente de `FILE-CC-081` queda localizada, aunque sólo mediante una fuente sustituida; cinco de sus nueve dependencias continúan sin archivo independiente.
- `C:/Users/rodri/OneDrive/Escritorio/` queda fuera del alcance: para futuros ingresos se aceptarán archivos explícitos o una subcarpeta temática delimitada, no el contenedor personal completo.

## ORG-EVT-0008

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: CREATE_COGNITIVE_SEARCH_EXAMPLE
policy: ORG-CC 1.6.0
target: BUSQUEDA_COGNITIVA/EX-BC-001
scope:
  persistent_files_consulted_before_generation: 155
  generated_source_documents: 1
  generated_readmes: 1
  updated_readmes: 1
  external_web: false
classification:
  APP: 1
new_subareas:
  - 03_aplicaciones/busqueda_cognitiva/ejemplos
records_assigned:
  first: FILE-CC-099
  last: FILE-CC-099
origin:
  type: internal_generation_from_human_command
  intake_route: direct_to_classified_destination
  external_source_preservation_required: false
search_execution:
  operation: SEARCH_COGNITIVE_STRUCTURES
  target_structure: FAC-Fabrica-de-Adaptaciones-Contextuales
  activation: explicit_human_query
  history_included_for_genealogy: true
  pdf_text_extraction: true
  relevant_pdf_pages_visually_inspected: 4
  qualified_results: 13
  complementary_results: 1
  source_files_modified: 0
status:
  lifecycle: PROVISIONAL
  canonical_integration: false
  implementation: documented_manual_execution
integrity:
  text_files_utf8_validated: 3
  missing_destinations: 0
  registered_sha256_matches: 1
relations_detected:
  - la definición completa de FAC en FILE-CC-004 gobierna la calificación de las manifestaciones parciales
  - FILE-CC-096 formaliza el tramo estructura e instancia contextual hacia manifestación mediante protocolo
  - FILE-CC-019 contiene la configuración del caso, la entidad federada y la proyección hacia múltiples superficies
  - FILE-CC-036 y FILE-CC-003 aportan analogías industrial y culinaria con límites declarados
  - las representaciones repetidas dentro de artefactos no se cuentan como corroboraciones independientes
governance_change:
  previous_policy: ORG-CC 1.6.0
  current_policy: ORG-CC 1.6.0
  compatibility: unchanged
```

### Decisión de organización

- El ejemplo queda dentro de la aplicación porque prueba su contrato de consulta y resultado; no es una fuente del núcleo ni un índice generado del repositorio.
- La búsqueda incluyó historial sólo para genealogía y conservó la precedencia de las fuentes activas.
- Las coincidencias se calificaron por niveles `L0` a `L6`; ninguna coincidencia léxica aislada fue presentada como equivalencia estructural.
- La persistencia del informe está autorizada por el comando humano, pero sus inferencias no se promueven al canon ni modifican las fuentes examinadas.

## ORG-EVT-0009

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: INGEST_AND_CLASSIFY_EXTERNAL_FILES
policy: ORG-CC 1.7.0
scope:
  explicit_files_received: 9
  source_container: C:/Users/rodri/OneDrive/Escritorio/cognitive-apps/documentos-de-investigacion/no-categorizados
classification:
  METHOD: 6
  APP: 2
  HIST: 1
new_subareas:
  - 02_metodos_y_herramientas/artefactos/company_code
  - 02_metodos_y_herramientas/transferencia_estructural
  - 03_aplicaciones/company_code
  - 03_aplicaciones/entendimiento_de_proyectos
  - 90_historial/desarrollo_conceptual/transferencia_estructural
records_assigned:
  first: FILE-CC-100
  last: FILE-CC-108
origin:
  type: external_files_selected_by_human
  intake_route: 99_entrada
  external_source_preservation_required: true
integrity:
  source_destination_sha256_matches: 9
  registered_sha256_matches: 9
  exact_duplicates_in_registry: 0
  exact_copies_in_serialized_artifacts: 0
  missing_destinations: 0
relations_detected:
  - FILE-CC-103 es la versión sustituida por FILE-CC-104
  - FILE-CC-100, FILE-CC-101 y FILE-CC-108 proporcionan los métodos coordinados por FILE-CC-106
  - FILE-CC-102, FILE-CC-104 y FILE-CC-105 desarrollan operaciones presentes en el entendimiento fractal serializado por FILE-CC-028
  - FILE-CC-107 declara una cApp estable, pero conserva una anomalía sintáctica y se registra como WORKING
governance_change:
  previous_policy: ORG-CC 1.6.0
  current_policy: ORG-CC 1.7.0
  compatibility: minor
```

### Decisión de organización

- Los contratos de generación, análisis y reconstrucción de artefactos se conservan como métodos reutilizables; la definición del proyecto COMPANY CODE se conserva como aplicación que los coordina.
- El código incluido dentro de `artifact-description.txt` permanece embebido y no recibe representación `SCRIPT`; `artifact-writter.txt` tampoco es un script porque su slot de implementación está vacío.
- `meta-metafora-v1.txt` se conserva en historial y `meta-metafora-v2.txt` pasa a ser la fuente activa provisional. La versión posterior no adquiere autoridad canónica por su número.
- El metamodelo fractal y la elevación de nivel permanecen en métodos: operacionalizan capacidades reutilizables, pero no sustituyen la Arquitectura Cognitiva Fractal del núcleo.
- La cApp de POV se conserva como `WORKING` aunque autodeclare estado estable; su signo `+` residual y la ausencia de prueba de ejecución deben resolverse antes de promoverla.
- Los marcadores `:contentReference[...]` de COMPANY CODE no se consideran referencias persistentes; sus dependencias se registran mediante rutas e IDs locales.

## ORG-EVT-0010

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: SEARCH_AND_FORMALIZE_FREQUENT_COGNITIVE_STRUCTURES
policy: ORG-CC 1.8.0
scope:
  physical_files_examined: 171
  raw_document_units: 978
  unique_exact_content_units: 760
  exact_duplicate_groups: 145
  artifact_carriers_ndjson: 9
  artifact_internal_records: 816
  generated_source_documents: 11
  generated_artifacts: 1
  generated_readmes: 3
  updated_readmes: 4
classification:
  CORE: 11
  ARTIFACT: 1
new_subareas:
  - 01_nucleo_cognitivo/registro_estructuras_cognitivas
  - 06_artefactos_generados/busqueda_cognitiva
records_assigned:
  first: FILE-CC-109
  last: FILE-CC-120
origin:
  type: internal_generation_from_human_command
  intake_route: direct_to_classified_destination
  external_source_preservation_required: false
search_execution:
  operation: SEARCH_FREQUENT_COGNITIVE_STRUCTURES
  activation: explicit_human_query
  candidate_signatures_tested: 16
  minimum_unique_units: 90
  minimum_main_areas: 6
  selected_structures: 10
  history_included_for_genealogy: true
  pdfs_text_extracted: 18
  relevant_pdf_pages_visually_inspected: 6
  parse_errors: 0
  pdf_errors: 0
status:
  registry_lifecycle: LIVE
  entry_lifecycle: PROVISIONAL
  canonical_integration: false
  implementation: documented_computational_execution
integrity:
  registered_sha256_matches: 12
  missing_destinations: 0
  exact_duplicate_groups_collapsed_for_frequency: 145
relations_detected:
  - el registro semántico separa estructura cognitiva, manifestación y portador físico
  - las diez estructuras frecuentes se solapan y pueden componerse como sistema sin formar categorías exclusivas
  - FILE-CC-120 conserva el detalle computacional y FILE-CC-109 gobierna la lectura semántica de sus resultados
  - la frecuencia documental no concede verdad, precedencia ni autoridad canónica
governance_change:
  previous_policy: ORG-CC 1.7.0
  current_policy: ORG-CC 1.8.0
  compatibility: minor
```

### Decisión de organización

- El registro de estructuras se integra en `01_nucleo_cognitivo` porque gobierna capacidades cognitivas reutilizables y no sólo ubicaciones físicas; queda separado de `REGISTRO_DE_ARCHIVOS.md`.
- El detalle masivo de firmas, conteos, coincidencias y alias se conserva en `06_artefactos_generados`, de modo que una fotografía estadística no se confunda con la identidad de una estructura.
- Las diez entradas se aceptan como `A3 / PROVISIONAL`: pueden usarse para recuperación y composición, pero requieren validación adicional antes de fusión, división o promoción.
- El canon no se modifica. La orden autoriza integración al núcleo activo, no promoción automática a `A1`.
- El conteo colapsa contenido normalizado exactamente duplicado y no interpreta repeticiones dentro de artefactos serializados como corroboraciones independientes.

## ORG-EVT-0011

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: STANDARDIZE_READMES_AS_ARTIFACT_INTERFACES
policy: ORG-CC 1.9.0
scope:
  artifact_boundary: entire_repository
  persistent_directories: 61
  readmes_reviewed: 62
  readmes_updated: 62
  readmes_created: 0
  registered_source_files_modified: 0
artifact_identity:
  id: CC-ARTEFACTO-INTEGRAL
  representation: live_repository
  entrypoint: README.md
  serialization_semantics: versioned_snapshot
readme_contract:
  required_fields:
    - function
    - inputs
    - outputs
    - consumers
    - boundary
  child_readmes_with_complete_contract: 61
  root_manifest_complete: true
classification:
  documentation_interfaces: 62
  new_operational_units: 0
integrity:
  directories_without_readme: 0
  child_contracts_complete: 61
  duplicate_contract_blocks: 0
  broken_readme_links: 0
  utf8_files_validated: 65
  canonical_source_modified: false
governance_change:
  previous_policy: ORG-CC 1.8.0
  current_policy: ORG-CC 1.9.0
  compatibility: minor
status:
  canonical_integration: false
  physical_reorganization: false
  source_content_rewritten: false
```

### Decisión de organización

- El repositorio completo se reconoce como unidad de interpretación y futura serialización; sus carpetas funcionan como subunidades con contratos explícitos.
- El README raíz declara identidad, frontera, flujo global, mapa funcional, orden de lectura y reglas de integridad.
- Los 61 README de carpeta declaran para qué sirve la unidad, qué consume, qué produce, quién utiliza sus salidas y qué interpretación debe evitarse.
- La unidad integral no obliga a cargar todo el corpus en cada operación: la recuperación continúa guiada por autoridad, función, dependencias y pertinencia.
- Los README siguen siendo interfaces organizativas sin ID de archivo fuente. Esta operación no cambia rutas, clases, hashes de fuentes registradas ni el canon.

## ORG-EVT-0012

```yaml
date: 2026-08-08
issued_by: HUMAN
operation: CREATE_CENTRAL_CHATGPT_INSTALLATION_PROMPT
policy: ORG-CC 1.9.0
scope:
  generated_source_documents: 1
  updated_readmes: 2
  updated_governance_records: 3
  external_official_product_documentation_consulted: true
classification:
  GOV: 1
records_assigned:
  first: FILE-CC-121
  last: FILE-CC-121
origin:
  type: internal_generation_from_human_command
  intake_route: direct_to_classified_destination
  external_source_preservation_required: false
protocol_contract:
  logical_artifact: COGNICION_CENTRAL
  physical_distribution: single_txt
  bootstrap_path: 00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
  supported_record_schemas:
    - path_plus_text
    - address_plus_content
    - path_rel_plus_content
  logical_namespaces: 4
  installation_modes: 3
  bootstrap_phases: 6
  contextual_installation: overlay
  central_namespace_default: read_only
status:
  authority: A2
  lifecycle: LIVE
  canonical_integration: false
  central_artifact_generated: false
  implementation: documented_bootstrap_and_installation_protocol
integrity:
  utf8_validated: true
  start_delimiters: 1
  end_delimiters: 1
  missing_destinations: 0
  registered_sha256_matches: 1
relations_detected:
  - el protocolo convierte el artefacto TXT en un repositorio virtual direccionable en vez de tratarlo como texto monolítico
  - la instalación separa CC, proyecto receptor, overlay contextual y salidas generadas
  - BÚSQUEDA_COGNITIVA y el registro semántico funcionan como mecanismos de recuperación de estructuras dentro del artefacto
  - el generador actual requiere un manifiesto de arranque y hash global antes de producir una distribución autosuficiente
governance_change:
  previous_policy: ORG-CC 1.9.0
  current_policy: ORG-CC 1.9.0
  compatibility: unchanged
```

### Decisión de organización

- El prompt se ubica en `00_gobierno/protocolos` porque gobierna la interpretación e instalación del artefacto completo; no pertenece a una aplicación sectorial ni sustituye el canon.
- Se distingue explícitamente de `03_aplicaciones/creacion_de_contenido/prompt_central.md`, cuyo alcance permanece limitado a esa aplicación.
- La instalación predeterminada usa una superposición contextual: COGNICION_CENTRAL permanece como fuente de sólo lectura y el proyecto receptor conserva su propia identidad.
- El protocolo puede pegarse en las instrucciones de un proyecto o recuperarse como bloque de arranque del único TXT. La mera presencia del prompt dentro de una fuente no equivale a su ejecución.
- El artefacto central todavía no fue generado en esta operación. La adaptación y prueba del empaquetador queda registrada como deuda antes de distribuir una versión autosuficiente.
