# COGNICIÓN_CENTRAL_PIEA

> **ID:** `CC-PIEA-COGNITION-001`  
> **Nombre físico:** `cognicion_central_piea.md`  
> **Sistema receptor:** `PATRÓN_DE_INTEGRACIÓN_ESTRUCTURAL_ACUMULATIVA` (`PIEA`)  
> **Versión del paquete receptor:** `0.2.0`  
> **Versión de este módulo:** `0.1.0`  
> **Fecha:** `2026-08-11`  
> **Proyecto:** `COGNICIÓN_CENTRAL`  
> **Estado:** `MÓDULO COGNITIVO LOCAL / EXPERIMENTAL / NO CANÓNICO`  
> **Autoridad soberana:** `HUMANO`  
> **Representación:** `SOURCE`  
> **Función:** convertir el paquete PIEA y sus ejemplos en un espacio cognitivo navegable, enrutable, ejecutable y validable sin sustituir sus fuentes ni modificar su núcleo.

---

# 0. MANDATO

Este documento debe interpretarse como la **cognición local del paquete PIEA**.

No vuelve a narrar linealmente el contenido de los documentos fuente. Lo reorganiza como:

```text
MAPA DE FUENTES
+
GRAFO COGNITIVO TIPADO
+
VECINDARIOS ACTIVABLES
+
OPERADORES
+
POLÍTICA DE RUTEO
+
VALIDADORES
+
TRAZABILIDAD
```

Su arquitectura operativa es:

```text
OBJETIVO HUMANO
      ↓
INTERPRETACIÓN DE INTENCIÓN
      ↓
VECINDARIO PIEA
      ↓
SUBGRAFO DE TRABAJO
      ↓
FUENTES MÍNIMAS SUFICIENTES
      ↓
OPERADORES PIEA
      ↓
PRUEBAS P1–P12
      ↓
RESULTADO + ESTADO EPISTEMOLÓGICO + TRAZA
      ↓
REVISIÓN HUMANA
```

## 0.1. Regla ontológica principal

```text
PAQUETE PIEA
≠
COGNICIÓN LOCAL
≠
RUNTIME IA

PAQUETE PIEA
+ cognicion_central_piea.md
+ IA capaz de interpretarlos
= capacidad operativa local
```

El archivo no posee mente, conciencia ni autoridad propia.

## 0.2. Regla de soberanía

El módulo puede:

- localizar fuentes PIEA;
- activar regiones del patrón;
- construir subgrafos de trabajo;
- delimitar sistemas, estados, aportes, contextos y transiciones;
- comparar trayectorias;
- aplicar el método de instanciación;
- ejecutar pruebas de pertenencia y falsación;
- clasificar casos;
- comparar ejemplos;
- detectar analogías forzadas;
- separar PIEA, FAC y ACCD;
- preparar una estructura para entrega posterior a ACCD;
- producir snapshots parciales del estado operativo;
- registrar propuestas de ampliación;
- dejar trazabilidad.

El módulo no puede:

- modificar el núcleo `0.2.0` sin autorización humana;
- promoverse a canon;
- convertir una inferencia en fuente;
- declarar universalidad desde tres ejemplos;
- transferir mecanismos causales entre dominios;
- añadir operadores nucleares por conveniencia;
- identificar manifestación con estado;
- declarar implementada una funcionalidad experimental sólo porque esté descrita;
- persistir cambios en COGNICIÓN_CENTRAL por defecto.

## 0.3. Ecuación de autoridad

La única ecuación nuclear PIEA es:

```math
\boxed{S_{t+1}=\mathcal I_{\kappa_t}(S_t,u_t)}
```

Este módulo puede representarla, navegarla y aplicarla. No puede reemplazarla por una ecuación alternativa.

---

# 1. DEFINICIÓN DEL MÓDULO

> **`COGNICIÓN_CENTRAL_PIEA` es una superposición cognitiva local que representa las fuentes, estructuras, ejemplos y fronteras de PIEA como dos grafos conectados, y proporciona reglas para recuperar, componer, aplicar, falsar y actualizar esa representación bajo gobierno humano.**

Se distinguen seis capas:

```text
L1 · FUENTES
documentos del núcleo, mecanismo, método, relaciones, meta y ejemplos

L2 · ESTRUCTURAS
roles PIEA, invariantes, variaciones, extensiones y pruebas

L3 · RELACIONES
dependencia, precedencia, integración, contraste, adaptación y soporte

L4 · OPERACIÓN
ruteo, subgrafos, operadores, recetas y validadores

L5 · OBSERVACIÓN
snapshots, grafos, reportes y otras superficies parciales

L6 · EXPERIMENTACIÓN
extensión humano–IA backend/frontend registrada, todavía no declarada completa
```

## 1.1. Espacios lógicos

```text
PIEA-SOURCE://
  documentos fuente y ejemplos aceptados en el portador PIEA

PIEA-GRAPH://
  nodos, aristas y bindings definidos por este módulo

PIEA-WORK://
  subgrafo temporal mínimo para la tarea actual

PIEA-OUTPUT://
  análisis, instancias, comparaciones, propuestas o vistas producidas

PIEA-TRACE://
  procedencia, ruteo, operadores, pruebas y decisiones

PIEA-FRONTEND://
  superficies parciales de observación y control humano

PIEA-EXPERIMENT://
  diseños experimentales no promovidos al núcleo
```

Reglas:

- `PIEA-SOURCE://` es de sólo lectura por defecto.
- `PIEA-GRAPH://` deriva de las fuentes y debe ceder ante ellas si se desactualiza.
- `PIEA-WORK://` contiene sólo la región necesaria para la tarea.
- `PIEA-OUTPUT://` no se vuelve fuente automáticamente.
- `PIEA-TRACE://` conserva por qué se activó y cómo se validó una estructura.
- `PIEA-FRONTEND://` muestra proyecciones parciales; no contiene el estado completo por definición.
- `PIEA-EXPERIMENT://` no modifica invariantes ni declara capacidades terminadas.

## 1.2. Correspondencia con COGNICIÓN_CENTRAL

```text
CC://
  fuentes centrales vigentes consultadas por autoridad

PROJECT://
  conversación, archivos y decisiones del proyecto receptor

OVERLAY://
  este módulo y sus bindings locales mientras no sean promovidos

OUTPUT://
  archivos generados para revisión
```

La existencia de este documento en `OUTPUT://` no lo convierte en parte canónica de `CC://`.

---

# 2. CONTRATO DE LECTURA

## 2.1. Fuente no equivale a estructura

```text
SourceUnit
≠
CognitiveStructure
```

Un archivo puede definir varios nodos. Un nodo puede depender de varios archivos.

El módulo mantiene:

```text
SOURCE GRAPH
  dónde está formulado, probado o ejemplificado el conocimiento

COGNITIVE GRAPH
  qué estructuras existen y cómo se relacionan

SOURCE BINDINGS
  CognitiveStructure --DEFINED_IN/SUPPORTED_BY--> SourceUnit
```

## 2.2. Fuente no equivale a ejemplo

Los ejemplos prueban y tensionan el patrón, pero no definen automáticamente sus invariantes.

```text
EJEMPLO
→ evidencia de realización
→ posible evidencia de límite
→ posible origen de corrección

EJEMPLO
≠
NÚCLEO
```

## 2.3. Orden de lectura recomendado

```text
1. identidad y ecuación nuclear
2. ontología y notación
3. invariantes
4. dominio de variación
5. fronteras
6. mecanismo de transición y acumulación
7. método de instanciación
8. pruebas P1–P12
9. relación con FAC, ACCD y COGNICIÓN_CENTRAL
10. ejemplo pertinente
11. comparación entre ejemplos si la tarea lo exige
12. meta y trazabilidad
```

## 2.4. Recuperación mínima suficiente

```text
INTENCIÓN
→ VECINDARIO
→ NODOS SEMILLA
→ DEPENDENCIAS NECESARIAS
→ SOURCE BINDINGS
→ FUENTES
```

No cargar todos los ejemplos cuando sólo se solicita definir `κ_t`. No cargar ACCD cuando sólo se valida una transición interna. No cargar dieta–ejercicio para responder sobre un texto salvo que la comparación material sea necesaria.

---

# 3. REGISTRO DE FUENTES

## 3.1. Núcleo y paquete base

```yaml
source_registry:
  package:
    logical_name: ART_patron_de_integracion_estructural_acumulativa
    package_version: 0.2.0
    expected_markdown_sources: 22
    auxiliary_files: 1

  sources:
    - id: SRC.README
      path: README.md
      role: package_entrypoint
      primary_nodes: [PIEA, PIEA_PACKAGE, PIEA_READING_PATH]

    - id: SRC.CORE.SPEC
      path: 00_core/00_especificacion_nuclear.md
      role: nuclear_specification
      primary_nodes: [PIEA, SYSTEM_X, STATE, CONTRIBUTION, OPERATIONAL_CONTEXT, INTEGRATION_OPERATOR, STATE_AFTER, PATH_DEPENDENCE]

    - id: SRC.CORE.ONTOLOGY
      path: 00_core/01_ontologia_y_notacion.md
      role: ontology_and_notation
      primary_nodes: [SYSTEM_X, STATE, CONTRIBUTION, OPERATIONAL_CONTEXT, INTEGRATION_OPERATOR, STATE_AFTER, ANALYTIC_CHANGE]

    - id: SRC.CORE.INVARIANTS
      path: 00_core/02_invariantes.md
      role: identity_contract
      primary_nodes: [PIEA_INVARIANTS, INV_PIEA_01, INV_PIEA_02, INV_PIEA_03, INV_PIEA_04, INV_PIEA_05, INV_PIEA_06, INV_PIEA_07, INV_PIEA_08, INV_PIEA_09, INV_PIEA_10]

    - id: SRC.CORE.VARIATION
      path: 00_core/03_dominio_de_variacion.md
      role: legitimate_variation
      primary_nodes: [PIEA_VARIATION_DOMAIN, LEGITIMATE_VARIATION, BOUNDARY_VARIANT, EXTENSION, DEFORMATION, SUBSTITUTION, INDETERMINATE]

    - id: SRC.CORE.BOUNDARIES
      path: 00_core/04_fronteras_y_no_equivalencias.md
      role: boundaries_and_non_equivalences
      primary_nodes: [PIEA_BOUNDARIES, SUCCESSION_ONLY, STORAGE_ONLY, ADDITION_ONLY, STATE_MANIFESTATION_SEPARATION, PIEA_ACCD_CONTEXT_SEPARATION, PIEA_FAC_ACCUMULATION_SEPARATION]

    - id: SRC.MECH.TRANSITION
      path: 10_mecanismo/10_transicion_de_estado.md
      role: transition_mechanism
      primary_nodes: [STATE_TRANSITION, INTEGRATION_CASES, NULL_TRANSITION, STOCHASTIC_INTEGRATION, BATCH_UPDATE, STATE_SUFFICIENCY]

    - id: SRC.MECH.ACCUMULATION
      path: 10_mecanismo/11_integracion_acumulativa.md
      role: structural_accumulation
      primary_nodes: [STRUCTURAL_INTEGRATION, STRUCTURAL_ACCUMULATION, SELECTIVE_PERSISTENCE, COMPATIBLE_FORGETTING, PATH_SENSITIVITY, ORDER_SENSITIVITY]

    - id: SRC.MECH.TRAJECTORY
      path: 10_mecanismo/12_trayectoria_memoria_y_escala.md
      role: trajectory_memory_scale
      primary_nodes: [TRAJECTORY, INTERNAL_MEMORY, COUPLED_EXTERNAL_MEMORY, SCALE, NESTING, TRANSITION_TIME]

    - id: SRC.MECH.EXTENSIONS
      path: 10_mecanismo/13_regimen_minimo_y_extensiones.md
      role: minimum_regime_and_extensions
      primary_nodes: [PIEA_MINIMUM, OBSERVATION_EXTENSION, FEEDBACK_EXTENSION, CONTROL_EXTENSION, FAC_EXTENSION, PARSIMONY_RULE]

    - id: SRC.METHOD.FAC
      path: 20_metodo/20_contrato_de_adaptacion_fac.md
      role: fac_adaptation_contract
      primary_nodes: [FAC_ADAPTATION, PIEA_PRESERVABLE_NUCLEUS, PIEA_VARIATION_DOMAIN, FAC_CONTEXTUAL_CASE, FAC_TRANSFORMATION_HEURISTIC, FAC_OUTPUT_RESTRICTION]

    - id: SRC.METHOD.INSTANCE
      path: 20_metodo/21_instanciacion.md
      role: instantiation_method
      primary_nodes: [PIEA_INSTANTIATION, INST_PHASE_0, INST_PHASE_1, INST_PHASE_2, INST_PHASE_3, INST_PHASE_4, INST_PHASE_5, INST_PHASE_6, INST_PHASE_7, INST_PHASE_8, INST_PHASE_9]

    - id: SRC.METHOD.TESTS
      path: 20_metodo/22_pruebas_de_pertenencia_y_falsacion.md
      role: membership_and_falsification
      primary_nodes: [P1_STATE, P2_CONTRIBUTION, P3_UPDATE, P4_STATE_DEPENDENCE, P5_CONTEXT, P6_ORGANIZATION, P7_PERSISTENCE, P8_LAST_INPUT, P9_OMITTED_CONTEXT, P10_STATE_SUFFICIENCY, P11_LEVEL, P12_ACCD_NON_EQUIVALENCE, LOCAL_FALSIFICATION]

    - id: SRC.METHOD.TEMPLATE
      path: 20_metodo/23_plantilla_de_instancia.md
      role: portable_instance_schema
      primary_nodes: [PIEA_INSTANCE_TEMPLATE]

    - id: SRC.METHOD.NOTATION
      path: 20_metodo/24_auditoria_de_notacion.md
      role: notation_audit
      primary_nodes: [PIEA_NOTATION_AUDIT, RETIRED_SYMBOLS, ACCD_RESERVED_SYMBOLS]

    - id: SRC.REL.ACCD
      path: 30_relaciones/30_relacion_con_accd.md
      role: accd_interface
      primary_nodes: [ACCD, ACCD_HANDOFF, CODOMAINAL_MANIFESTATION, PIEA_ACCD_NON_EQUIVALENCE]

    - id: SRC.REL.FAC
      path: 30_relaciones/31_relacion_con_fac.md
      role: fac_interface
      primary_nodes: [FAC, FAC_ADAPTATION, PIEA_ACCUMULATION, FAC_CUMULATIVE_CORRECTION]

    - id: SRC.REL.CC
      path: 30_relaciones/32_relacion_con_cognicion_central.md
      role: cognition_central_integration
      primary_nodes: [COGNICION_CENTRAL, HUMAN_SOVEREIGNTY, PORTER_STRUCTURE_SEPARATION, LOCAL_COGNITION]

    - id: SRC.META.TRACE
      path: 90_meta/90_trazabilidad_y_fuentes.md
      role: genealogy_and_trace
      primary_nodes: [PIEA_TRACEABILITY, SOURCE_AUTHORITY, DECISION_REGISTRY]

    - id: SRC.META.GLOSSARY
      path: 90_meta/91_glosario.md
      role: formal_glossary
      primary_nodes: [PIEA_GLOSSARY]

    - id: SRC.META.CHANGELOG
      path: 90_meta/92_changelog.md
      role: version_history
      primary_nodes: [PIEA_VERSION, RETIRED_SYMBOLS]

    - id: SRC.META.DEBTS
      path: 90_meta/93_deudas_y_preguntas_abiertas.md
      role: open_questions
      primary_nodes: [PIEA_OPEN_QUESTIONS, VALIDATION_DEBTS]

  auxiliary:
    - id: AUX.BUILD
      path: make-artifact.cjs
      role: artifact_builder
      cognitive_authority: false
```

## 3.2. Registro de ejemplos

```yaml
example_source_registry:
  expected_examples: 3

  examples:
    - id: SRC.EXAMPLE.TEXTS
      example_id: PIEA-EJ-TXT-001
      path: ejemplos/01_textos.md
      source_filename: PIEA_EJEMPLO_TEXTOS_v0_1_0.md
      version: 0.1.0
      role: semantic_reception_instance
      classification: CONFIRMED_INSTANCE
      primary_nodes: [EXAMPLE_TEXTS, TEXT_RECEPTOR_SYSTEM, INTERPRETIVE_STATE, READING_UNIT, TEXTUAL_INTEGRATION, RETROSPECTIVE_REINTERPRETATION, NARRATIVE_PATH]

    - id: SRC.EXAMPLE.HUMAN_AI
      example_id: PIEA-EJ-HIA-001
      path: ejemplos/02_interaccion_humano_ia.md
      source_filename: PIEA_EJEMPLO_INTERACCION_HUMANO_IA_v0_1_0.md
      version: 0.1.0
      role: governed_conversational_instance
      classification: CONFIRMED_INSTANCE
      primary_nodes: [EXAMPLE_HUMAN_AI, GOVERNED_INTERACTION_SYSTEM, OPERATIONAL_INTERACTION_STATE, CONVERSATIONAL_CONTRIBUTION, COGNITIVE_BACKEND, COGNITIVE_FRONTEND, GLOBAL_COMMENT, SNAPSHOT]

    - id: SRC.EXAMPLE.DIET_EXERCISE
      example_id: PIEA-EJ-DIE-001
      path: ejemplos/03_dieta_ejercicio.md
      source_filename: PIEA_EJEMPLO_DIETA_EJERCICIO_v0_1_0.md
      version: 0.1.0
      role: physiological_material_instance
      classification:
        domain: CONFIRMED_INSTANCE
        developed_trajectory: PLAUSIBLE_INSTANCE
      primary_nodes: [EXAMPLE_DIET_EXERCISE, PHYSIOLOGICAL_SYSTEM, PHYSIOLOGICAL_FUNCTIONAL_STATE, DIET_EXERCISE_INTERVENTION, PHYSIOLOGICAL_INTEGRATION, PARTIAL_MEASUREMENT, SUBJECT_BETA]
```

## 3.3. Directiva experimental humana

```yaml
human_directives:
  - id: PROJECT-GLOBAL-COMMENT-BF-001
    source: human_global_comment
    date: 2026-08-11
    scope: PIEA-EJ-HIA-001
    text: >-
      El ejemplo Interacción humano–IA debe extenderse para crear la
      funcionalidad experimental desarrollada en el chat, basada en
      backend/frontend cognitivo.
    interpretation:
      backend: recuperación, organización, autoridad, trazabilidad, validación y actualización del estado operativo
      frontend: grafo visible y navegable del entendimiento, expresado mediante snapshots parciales
    status: REGISTERED_PENDING_EXTENSION
    modifies_piea_nucleus: false
    implementation_complete: false
    human_authority: true
```

Esta directiva queda operativamente registrada en el módulo. No se presenta como contenido ya incorporado al ejemplo fuente ni como funcionalidad implementada.

---

# 4. ONTOLOGÍA DE NODOS

```yaml
node_types:
  CognitivePattern:
    meaning: patrón estructural reusable con identidad e invariantes

  System:
    meaning: unidad de análisis delimitada que porta estado

  State:
    meaning: organización relevante antes o después de una transición

  Contribution:
    meaning: unidad ontológica parcial diferenciable antes de integrarse

  Context:
    meaning: condiciones operativas que modulan una transición

  Operator:
    meaning: regla, mecanismo o proceso que actualiza el estado

  Transition:
    meaning: paso de un estado previo a uno posterior

  Trajectory:
    meaning: secuencia efectiva de estados y transiciones

  PathEffect:
    meaning: efecto selectivamente persistente capaz de condicionar el futuro

  Memory:
    meaning: información interna o externa acoplada que afecta transiciones

  Scale:
    meaning: nivel micro, meso o macro con estado e interfaz declarados

  Rule:
    meaning: invariante, frontera, condición o restricción

  Method:
    meaning: procedimiento reproducible

  Validator:
    meaning: prueba de pertenencia, suficiencia, separación o falsación

  Classification:
    meaning: estado asignado a una instancia o variación

  Adaptation:
    meaning: transformación contextual gobernada por FAC

  Architecture:
    meaning: sistema conceptual externo que se relaciona con PIEA

  Extension:
    meaning: observación, feedback o control añadido sin redefinir el núcleo

  ObservationSurface:
    meaning: representación parcial y no única de un estado

  Example:
    meaning: realización contextual desarrollada del patrón

  SourceUnit:
    meaning: archivo o registro que porta formulaciones

  TraceObject:
    meaning: procedencia, decisión, estado o historial

  HumanDirective:
    meaning: instrucción humana con alcance y estado explícitos

  ExperimentalCapability:
    meaning: funcionalidad propuesta aún no promovida ni declarada completa
```

---

# 5. ONTOLOGÍA DE ARISTAS

```yaml
edge_types:
  IS_A:
    meaning: pertenencia tipológica

  PART_OF:
    meaning: composición estructural

  HAS_STATE:
    meaning: el sistema porta un estado

  EXPOSED_TO:
    meaning: el sistema recibe o activa un aporte

  CONDITIONS:
    meaning: el contexto modifica una integración

  INTEGRATES:
    meaning: el operador trata estado y aporte

  PRODUCES:
    meaning: genera un estado, salida o resultado

  PRECEDES:
    meaning: orden lógico o temporal

  PRESERVES_EFFECT:
    meaning: conserva una consecuencia de trayectoria

  CONDITIONS_FUTURE:
    meaning: un estado o efecto modifica integraciones posteriores

  TRANSFORMS:
    meaning: reorganiza una entidad o representación

  INHIBITS:
    meaning: reduce disponibilidad o bloquea una ruta

  REPLACES:
    meaning: sustituye parcial o totalmente una estructura previa

  COMPRESSES:
    meaning: conserva función reduciendo detalle

  OBSERVED_THROUGH:
    meaning: un estado se inspecciona mediante superficie parcial

  RETURNS_AS_INPUT:
    meaning: una salida vuelve efectivamente como aporte posterior

  TESTED_BY:
    meaning: una estructura se evalúa con un validador

  INVALIDATES:
    meaning: una prueba rechaza una hipótesis local

  INSTANTIATES:
    meaning: un caso realiza el patrón

  ADAPTED_BY:
    meaning: el núcleo se transforma contextualmente mediante FAC

  INTERFACES_WITH:
    meaning: dos arquitecturas se acoplan conservando fronteras

  HANDS_OFF_TO:
    meaning: una estructura terminada se entrega a otra arquitectura

  CONTRASTS_WITH:
    meaning: diferencia necesaria para evitar colapso

  DEFINED_IN:
    meaning: vínculo principal entre nodo y fuente

  SUPPORTED_BY:
    meaning: vínculo secundario entre nodo y fuente

  EXEMPLIFIED_BY:
    meaning: relación entre estructura y ejemplo

  CONSTRAINS:
    meaning: limita variación u operación

  GOVERNED_BY:
    meaning: sujeto a autoridad o protocolo

  MARKS_STATUS:
    meaning: asigna condición epistemológica u operativa

  EXTENDS:
    meaning: añade capacidad sin redefinir identidad nuclear

  VISUALIZES:
    meaning: proyecta una región del grafo para inspección
```

No utilizar `RELATED_TO` cuando pueda declararse una relación más precisa.

---

# 6. REGISTRO DE NODOS COGNITIVOS

```yaml
nodes:
  - id: PIEA
    type: CognitivePattern
    label: Patrón de Integración Estructural Acumulativa
    definition: patrón de transiciones donde un sistema integra aportes parciales desde un estado previo bajo contexto operativo y conserva efectos relevantes de trayectoria
    sources: [SRC.README, SRC.CORE.SPEC]

  - id: PIEA_PACKAGE
    type: SourceUnit
    label: Paquete PIEA 0.2.0
    sources: [SRC.README]

  - id: SYSTEM_X
    type: System
    label: Sistema delimitado X
    sources: [SRC.CORE.SPEC, SRC.CORE.ONTOLOGY]

  - id: STATE
    type: State
    label: Estado previo S_t
    definition: organización relevante y suficientemente informativa antes de integrar el aporte
    sources: [SRC.CORE.SPEC, SRC.CORE.ONTOLOGY]

  - id: CONTRIBUTION
    type: Contribution
    label: Aporte parcial u_t
    definition: unidad ontológica diferenciable candidata a integración
    sources: [SRC.CORE.SPEC, SRC.CORE.ONTOLOGY]

  - id: OPERATIONAL_CONTEXT
    type: Context
    label: Contexto operativo κ_t
    definition: condiciones recortadas que modulan la integración interna
    sources: [SRC.CORE.SPEC, SRC.CORE.ONTOLOGY]

  - id: INTEGRATION_OPERATOR
    type: Operator
    label: Operador de integración 𝓘_{κ_t}
    definition: rol estructural materializado por el mecanismo de cada instancia
    sources: [SRC.CORE.SPEC, SRC.CORE.ONTOLOGY, SRC.MECH.TRANSITION]

  - id: STATE_AFTER
    type: State
    label: Estado posterior S_{t+1}
    sources: [SRC.CORE.SPEC, SRC.CORE.ONTOLOGY]

  - id: ANALYTIC_CHANGE
    type: TraceObject
    label: Cambio analítico Δ_t
    definition: comparación entre estado previo y posterior; no argumento nuclear
    sources: [SRC.CORE.ONTOLOGY]

  - id: STATE_TRANSITION
    type: Transition
    label: Transición PIEA
    sources: [SRC.MECH.TRANSITION]

  - id: STRUCTURAL_INTEGRATION
    type: Operator
    label: Integración estructural
    sources: [SRC.MECH.ACCUMULATION]

  - id: STRUCTURAL_ACCUMULATION
    type: PathEffect
    label: Acumulación estructural
    definition: persistencia selectiva de efectos organizativos que condicionan el futuro
    sources: [SRC.CORE.SPEC, SRC.MECH.ACCUMULATION]

  - id: SELECTIVE_PERSISTENCE
    type: PathEffect
    label: Persistencia selectiva
    sources: [SRC.MECH.ACCUMULATION]

  - id: PATH_DEPENDENCE
    type: PathEffect
    label: Dependencia de trayectoria
    sources: [SRC.CORE.SPEC, SRC.MECH.ACCUMULATION]

  - id: TRAJECTORY
    type: Trajectory
    label: Trayectoria de estados
    sources: [SRC.MECH.TRAJECTORY]

  - id: INTERNAL_MEMORY
    type: Memory
    label: Memoria interna
    sources: [SRC.MECH.TRAJECTORY]

  - id: COUPLED_EXTERNAL_MEMORY
    type: Memory
    label: Memoria externa acoplada
    sources: [SRC.MECH.TRAJECTORY]

  - id: STATE_SUFFICIENCY
    type: Validator
    label: Suficiencia del estado
    sources: [SRC.CORE.SPEC, SRC.MECH.TRANSITION, SRC.METHOD.TESTS]

  - id: SCALE
    type: Scale
    label: Escala declarada
    sources: [SRC.MECH.TRAJECTORY]

  - id: NESTING
    type: Rule
    label: Anidamiento entre escalas
    sources: [SRC.MECH.TRAJECTORY]

  - id: PIEA_MINIMUM
    type: CognitivePattern
    label: Régimen mínimo PIEA
    sources: [SRC.MECH.EXTENSIONS]

  - id: OBSERVATION_EXTENSION
    type: Extension
    label: Extensión de observación
    sources: [SRC.MECH.EXTENSIONS]

  - id: FEEDBACK_EXTENSION
    type: Extension
    label: Extensión de retroalimentación
    sources: [SRC.MECH.EXTENSIONS]

  - id: CONTROL_EXTENSION
    type: Extension
    label: Extensión de control
    sources: [SRC.MECH.EXTENSIONS]

  - id: PIEA_INVARIANTS
    type: Rule
    label: Invariantes PIEA
    sources: [SRC.CORE.INVARIANTS]

  - id: PIEA_VARIATION_DOMAIN
    type: Rule
    label: Dominio de variación PIEA
    sources: [SRC.CORE.VARIATION]

  - id: PIEA_BOUNDARIES
    type: Rule
    label: Fronteras y no equivalencias
    sources: [SRC.CORE.BOUNDARIES]

  - id: PIEA_INSTANTIATION
    type: Method
    label: Método de instanciación PIEA
    sources: [SRC.METHOD.INSTANCE]

  - id: PIEA_MEMBERSHIP_TESTS
    type: Validator
    label: Pruebas P1–P12
    sources: [SRC.METHOD.TESTS]

  - id: LOCAL_FALSIFICATION
    type: Validator
    label: Criterio de falsación local
    sources: [SRC.METHOD.TESTS]

  - id: CONFIRMED_INSTANCE
    type: Classification
    label: Instancia confirmada en el nivel declarado
    sources: [SRC.METHOD.INSTANCE]

  - id: PLAUSIBLE_INSTANCE
    type: Classification
    label: Instancia plausible
    sources: [SRC.METHOD.INSTANCE]

  - id: BOUNDARY_CASE
    type: Classification
    label: Caso limítrofe
    sources: [SRC.METHOD.INSTANCE]

  - id: NON_INSTANCE
    type: Classification
    label: No instancia
    sources: [SRC.METHOD.INSTANCE]

  - id: INSUFFICIENT_EVIDENCE
    type: Classification
    label: Evidencia insuficiente
    sources: [SRC.METHOD.INSTANCE]

  - id: SUCCESSION_ONLY
    type: Rule
    label: Sucesión sin integración
    sources: [SRC.CORE.BOUNDARIES]

  - id: STORAGE_ONLY
    type: Rule
    label: Almacenamiento sin organización
    sources: [SRC.CORE.BOUNDARIES]

  - id: ADDITION_ONLY
    type: Rule
    label: Agregación sin acumulación estructural
    sources: [SRC.CORE.BOUNDARIES]

  - id: FAC
    type: Architecture
    label: Fábrica de Adaptaciones Contextuales
    sources: [SRC.REL.FAC, SRC.METHOD.FAC]

  - id: FAC_ADAPTATION
    type: Adaptation
    label: Adaptación contextual de PIEA mediante FAC
    sources: [SRC.METHOD.FAC, SRC.REL.FAC]

  - id: FAC_CUMULATIVE_CORRECTION
    type: Extension
    label: Corrección acumulativa FAC
    sources: [SRC.REL.FAC]

  - id: ACCD
    type: Architecture
    label: Arquitectura de Campos Cognitivos Dinámicos
    sources: [SRC.REL.ACCD]

  - id: ACCD_HANDOFF
    type: Method
    label: Entrega de estructura contextualizada a ACCD
    sources: [SRC.REL.ACCD, SRC.METHOD.INSTANCE]

  - id: CODOMAINAL_MANIFESTATION
    type: ObservationSurface
    label: Manifestación codominial ACCD
    sources: [SRC.REL.ACCD]

  - id: COGNICION_CENTRAL
    type: Architecture
    label: COGNICIÓN_CENTRAL
    sources: [SRC.REL.CC]

  - id: HUMAN_SOVEREIGNTY
    type: Rule
    label: Soberanía humana
    sources: [SRC.REL.CC]

  - id: EXAMPLE_TEXTS
    type: Example
    label: Textos
    sources: [SRC.EXAMPLE.TEXTS]

  - id: TEXT_RECEPTOR_SYSTEM
    type: System
    label: Configuración interpretativa del receptor
    sources: [SRC.EXAMPLE.TEXTS]

  - id: INTERPRETIVE_STATE
    type: State
    label: Estado interpretativo
    sources: [SRC.EXAMPLE.TEXTS]

  - id: RETROSPECTIVE_REINTERPRETATION
    type: PathEffect
    label: Reinterpretación retrospectiva local
    sources: [SRC.EXAMPLE.TEXTS]

  - id: NARRATIVE_PATH
    type: Trajectory
    label: Recorrido narrativo
    sources: [SRC.EXAMPLE.TEXTS]

  - id: EXAMPLE_HUMAN_AI
    type: Example
    label: Interacción humano–IA
    sources: [SRC.EXAMPLE.HUMAN_AI]

  - id: GOVERNED_INTERACTION_SYSTEM
    type: System
    label: Interacción humano–IA gobernada
    sources: [SRC.EXAMPLE.HUMAN_AI]

  - id: OPERATIONAL_INTERACTION_STATE
    type: State
    label: Estado operativo de la interacción
    sources: [SRC.EXAMPLE.HUMAN_AI]

  - id: COGNITIVE_BACKEND
    type: ExperimentalCapability
    label: Backend cognitivo operacional
    definition: recuperación, organización, autoridad, validación, trazabilidad y actualización del estado
    sources: [SRC.EXAMPLE.HUMAN_AI, PROJECT-GLOBAL-COMMENT-BF-001]

  - id: COGNITIVE_FRONTEND
    type: ExperimentalCapability
    label: Frontend cognitivo visible
    definition: grafo o snapshot navegable para inspección y corrección humana
    sources: [SRC.EXAMPLE.HUMAN_AI, PROJECT-GLOBAL-COMMENT-BF-001]

  - id: GLOBAL_COMMENT
    type: HumanDirective
    label: Comentario global
    sources: [SRC.EXAMPLE.HUMAN_AI]

  - id: SNAPSHOT
    type: ObservationSurface
    label: Snapshot parcial del estado
    sources: [SRC.EXAMPLE.HUMAN_AI]

  - id: BACKEND_FRONTEND_EXPERIMENT
    type: ExperimentalCapability
    label: Funcionalidad experimental backend/frontend cognitivo
    sources: [PROJECT-GLOBAL-COMMENT-BF-001]

  - id: EXAMPLE_DIET_EXERCISE
    type: Example
    label: Dieta–ejercicio
    sources: [SRC.EXAMPLE.DIET_EXERCISE]

  - id: PHYSIOLOGICAL_SYSTEM
    type: System
    label: Sujeto corporal delimitado
    sources: [SRC.EXAMPLE.DIET_EXERCISE]

  - id: PHYSIOLOGICAL_FUNCTIONAL_STATE
    type: State
    label: Estado fisiológico-funcional
    sources: [SRC.EXAMPLE.DIET_EXERCISE]

  - id: PARTIAL_MEASUREMENT
    type: ObservationSurface
    label: Medición corporal parcial
    sources: [SRC.EXAMPLE.DIET_EXERCISE]

  # ------------------------------------------------------------------
  # CLASIFICACIÓN DE VARIACIONES
  # ------------------------------------------------------------------

  - id: LEGITIMATE_VARIATION
    type: Classification
    label: Variación legítima
    sources: [SRC.CORE.VARIATION]

  - id: BOUNDARY_VARIANT
    type: Classification
    label: Variante limítrofe
    sources: [SRC.CORE.VARIATION]

  - id: EXTENSION
    type: Classification
    label: Extensión no nuclear
    sources: [SRC.CORE.VARIATION, SRC.MECH.EXTENSIONS]

  - id: DEFORMATION
    type: Classification
    label: Deformación del patrón
    sources: [SRC.CORE.VARIATION]

  - id: SUBSTITUTION
    type: Classification
    label: Sustitución por otro patrón
    sources: [SRC.CORE.VARIATION]

  - id: INDETERMINATE
    type: Classification
    label: Variación indeterminada
    sources: [SRC.CORE.VARIATION]

  # ------------------------------------------------------------------
  # PRUEBAS P1–P12
  # ------------------------------------------------------------------

  - id: P1_STATE
    type: Validator
    label: P1 — Estado previo
    sources: [SRC.METHOD.TESTS]

  - id: P2_CONTRIBUTION
    type: Validator
    label: P2 — Aporte diferenciable
    sources: [SRC.METHOD.TESTS]

  - id: P3_UPDATE
    type: Validator
    label: P3 — Actualización
    sources: [SRC.METHOD.TESTS]

  - id: P4_STATE_DEPENDENCE
    type: Validator
    label: P4 — Dependencia del estado
    sources: [SRC.METHOD.TESTS]

  - id: P5_CONTEXT
    type: Validator
    label: P5 — Contexto operativo
    sources: [SRC.METHOD.TESTS]

  - id: P6_ORGANIZATION
    type: Validator
    label: P6 — Organización
    sources: [SRC.METHOD.TESTS]

  - id: P7_PERSISTENCE
    type: Validator
    label: P7 — Persistencia
    sources: [SRC.METHOD.TESTS]

  - id: P8_LAST_INPUT
    type: Validator
    label: P8 — Último aporte
    sources: [SRC.METHOD.TESTS]

  - id: P9_OMITTED_CONTEXT
    type: Validator
    label: P9 — Contexto omitido
    sources: [SRC.METHOD.TESTS]

  - id: P10_STATE_SUFFICIENCY
    type: Validator
    label: P10 — Suficiencia del estado
    sources: [SRC.METHOD.TESTS]

  - id: P11_LEVEL
    type: Validator
    label: P11 — Nivel y escala
    sources: [SRC.METHOD.TESTS]

  - id: P12_ACCD_NON_EQUIVALENCE
    type: Validator
    label: P12 — No equivalencia ACCD
    sources: [SRC.METHOD.TESTS]

  # ------------------------------------------------------------------
  # FRONTERAS, MÉTODO Y META
  # ------------------------------------------------------------------

  - id: STATE_MANIFESTATION_SEPARATION
    type: Rule
    label: Estado no equivale a manifestación
    sources: [SRC.CORE.BOUNDARIES, SRC.REL.ACCD]

  - id: PIEA_ACCD_NON_EQUIVALENCE
    type: Rule
    label: No equivalencias entre PIEA y ACCD
    sources: [SRC.REL.ACCD, SRC.METHOD.TESTS]

  - id: PIEA_INSTANCE_TEMPLATE
    type: Method
    label: Plantilla serializable de instancia
    sources: [SRC.METHOD.TEMPLATE]

  - id: PIEA_TRACEABILITY
    type: TraceObject
    label: Trazabilidad PIEA
    sources: [SRC.META.TRACE]

  - id: SOURCE_AUTHORITY
    type: Rule
    label: Autoridad de fuentes
    sources: [SRC.META.TRACE, SRC.REL.CC]

  - id: DECISION_REGISTRY
    type: TraceObject
    label: Registro de decisiones
    sources: [SRC.META.TRACE]

  - id: PIEA_VERSION
    type: TraceObject
    label: Versión PIEA
    sources: [SRC.META.CHANGELOG]

  - id: PIEA_OPEN_QUESTIONS
    type: TraceObject
    label: Deudas y preguntas abiertas
    sources: [SRC.META.DEBTS]
```

---

# 7. GRAFO DE RELACIONES NUCLEARES

```yaml
edges:
  - [PIEA_MINIMUM, IS_A, PIEA]
  - [PIEA, GOVERNED_BY, HUMAN_SOVEREIGNTY]
  - [PIEA, CONSTRAINS, PIEA_VARIATION_DOMAIN]
  - [PIEA_INVARIANTS, CONSTRAINS, PIEA]
  - [PIEA, TESTED_BY, PIEA_MEMBERSHIP_TESTS]

  - [SYSTEM_X, HAS_STATE, STATE]
  - [SYSTEM_X, EXPOSED_TO, CONTRIBUTION]
  - [OPERATIONAL_CONTEXT, CONDITIONS, INTEGRATION_OPERATOR]
  - [INTEGRATION_OPERATOR, INTEGRATES, STATE]
  - [INTEGRATION_OPERATOR, INTEGRATES, CONTRIBUTION]
  - [INTEGRATION_OPERATOR, PRODUCES, STATE_AFTER]
  - [STATE, PRECEDES, STATE_AFTER]
  - [STATE_AFTER, PRESERVES_EFFECT, SELECTIVE_PERSISTENCE]
  - [SELECTIVE_PERSISTENCE, CONDITIONS_FUTURE, STATE_TRANSITION]
  - [STATE_AFTER, PRODUCES, ANALYTIC_CHANGE]
  - [STATE_TRANSITION, PART_OF, TRAJECTORY]
  - [PATH_DEPENDENCE, PART_OF, STRUCTURAL_ACCUMULATION]
  - [SELECTIVE_PERSISTENCE, PART_OF, STRUCTURAL_ACCUMULATION]
  - [STATE_SUFFICIENCY, TESTED_BY, P10_STATE_SUFFICIENCY]

  - [INTERNAL_MEMORY, PART_OF, STATE]
  - [COUPLED_EXTERNAL_MEMORY, PART_OF, STATE]
  - [NESTING, CONSTRAINS, SCALE]

  - [OBSERVATION_EXTENSION, EXTENDS, PIEA_MINIMUM]
  - [FEEDBACK_EXTENSION, EXTENDS, PIEA_MINIMUM]
  - [CONTROL_EXTENSION, EXTENDS, PIEA_MINIMUM]
  - [STATE_AFTER, OBSERVED_THROUGH, OBSERVATION_EXTENSION]
  - [OBSERVATION_EXTENSION, RETURNS_AS_INPUT, FEEDBACK_EXTENSION]

  - [PIEA, ADAPTED_BY, FAC_ADAPTATION]
  - [FAC_ADAPTATION, GOVERNED_BY, FAC]
  - [PIEA, INTERFACES_WITH, ACCD]
  - [FAC_ADAPTATION, HANDS_OFF_TO, ACCD_HANDOFF]
  - [ACCD_HANDOFF, HANDS_OFF_TO, ACCD]
  - [ACCD, PRODUCES, CODOMAINAL_MANIFESTATION]
  - [STATE_AFTER, CONTRASTS_WITH, CODOMAINAL_MANIFESTATION]
  - [OPERATIONAL_CONTEXT, CONTRASTS_WITH, ACCD]
  - [STRUCTURAL_ACCUMULATION, CONTRASTS_WITH, FAC_CUMULATIVE_CORRECTION]

  - [EXAMPLE_TEXTS, INSTANTIATES, PIEA]
  - [EXAMPLE_TEXTS, HAS_STATE, INTERPRETIVE_STATE]
  - [NARRATIVE_PATH, PART_OF, EXAMPLE_TEXTS]
  - [RETROSPECTIVE_REINTERPRETATION, PART_OF, EXAMPLE_TEXTS]

  - [EXAMPLE_HUMAN_AI, INSTANTIATES, PIEA]
  - [EXAMPLE_HUMAN_AI, HAS_STATE, OPERATIONAL_INTERACTION_STATE]
  - [OPERATIONAL_INTERACTION_STATE, OBSERVED_THROUGH, SNAPSHOT]
  - [GLOBAL_COMMENT, RETURNS_AS_INPUT, OPERATIONAL_INTERACTION_STATE]
  - [COGNITIVE_BACKEND, PART_OF, EXAMPLE_HUMAN_AI]
  - [COGNITIVE_FRONTEND, OBSERVED_THROUGH, SNAPSHOT]
  - [BACKEND_FRONTEND_EXPERIMENT, EXTENDS, EXAMPLE_HUMAN_AI]
  - [BACKEND_FRONTEND_EXPERIMENT, REQUIRES, COGNITIVE_BACKEND]
  - [BACKEND_FRONTEND_EXPERIMENT, REQUIRES, COGNITIVE_FRONTEND]
  - [BACKEND_FRONTEND_EXPERIMENT, GOVERNED_BY, HUMAN_SOVEREIGNTY]

  - [EXAMPLE_DIET_EXERCISE, INSTANTIATES, PIEA]
  - [EXAMPLE_DIET_EXERCISE, HAS_STATE, PHYSIOLOGICAL_FUNCTIONAL_STATE]
  - [PHYSIOLOGICAL_FUNCTIONAL_STATE, OBSERVED_THROUGH, PARTIAL_MEASUREMENT]

  - [EXAMPLE_TEXTS, CONTRASTS_WITH, EXAMPLE_DIET_EXERCISE]
  - [EXAMPLE_HUMAN_AI, CONTRASTS_WITH, EXAMPLE_DIET_EXERCISE]
  - [EXAMPLE_TEXTS, CONTRASTS_WITH, EXAMPLE_HUMAN_AI]
```

## 7.1. Vista macro

```text
                         HUMANO
                           │
                      gobierna
                           ▼
                          PIEA
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          NÚCLEO       VARIACIÓN     VALIDACIÓN
              │            │            │
              └────────────┼────────────┘
                           ▼
       X + S_t + u_t + κ_t + 𝓘 → S_{t+1}
                           │
                    conserva efectos
                           ▼
                       TRAYECTORIA
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          TEXTOS       HUMANO–IA     DIETA–EJERCICIO
             │             │             │
      interpretación   estado operativo  estado fisiológico
```

---

# 8. VECINDARIOS COGNITIVOS

```yaml
cognitive_neighborhoods:
  CORE:
    purpose: comprender la identidad mínima de PIEA
    seed_nodes: [PIEA, SYSTEM_X, STATE, CONTRIBUTION, OPERATIONAL_CONTEXT, INTEGRATION_OPERATOR, STATE_AFTER]
    expand: [PIEA_INVARIANTS, STRUCTURAL_ACCUMULATION, PATH_DEPENDENCE]

  TRANSITION:
    purpose: reconstruir una actualización particular
    seed_nodes: [STATE_TRANSITION, STATE, CONTRIBUTION, OPERATIONAL_CONTEXT, INTEGRATION_OPERATOR, STATE_AFTER, ANALYTIC_CHANGE]

  ACCUMULATION_AND_PATH:
    purpose: explicar persistencia, orden, olvido y dependencia de trayectoria
    seed_nodes: [STRUCTURAL_ACCUMULATION, SELECTIVE_PERSISTENCE, PATH_DEPENDENCE, TRAJECTORY, INTERNAL_MEMORY, COUPLED_EXTERNAL_MEMORY]

  STATE_SUFFICIENCY:
    purpose: comprobar si el estado absorbe la historia funcional necesaria
    seed_nodes: [STATE, STATE_SUFFICIENCY, INTERNAL_MEMORY, COUPLED_EXTERNAL_MEMORY, P10_STATE_SUFFICIENCY]

  CONTEXT:
    purpose: delimitar κ_t sin convertirlo en ambiente indiferenciado ni en φ_n de ACCD
    seed_nodes: [OPERATIONAL_CONTEXT, P5_CONTEXT, P9_OMITTED_CONTEXT, PIEA_ACCD_NON_EQUIVALENCE]

  SCALE_AND_NESTING:
    purpose: separar micro, meso y macro y declarar interfaces
    seed_nodes: [SCALE, NESTING, TRAJECTORY, P11_LEVEL]

  VARIATION:
    purpose: clasificar cambios como legítimos, limítrofes, extensiones, deformaciones o sustituciones
    seed_nodes: [PIEA_VARIATION_DOMAIN, LEGITIMATE_VARIATION, BOUNDARY_VARIANT, EXTENSION, DEFORMATION, SUBSTITUTION, INDETERMINATE]

  BOUNDARIES:
    purpose: evitar sucesión, almacenamiento, suma o proyección confundidos con PIEA
    seed_nodes: [PIEA_BOUNDARIES, SUCCESSION_ONLY, STORAGE_ONLY, ADDITION_ONLY, STATE_MANIFESTATION_SEPARATION]

  INSTANTIATION:
    purpose: construir una instancia PIEA completa
    seed_nodes: [PIEA_INSTANTIATION, PIEA_INSTANCE_TEMPLATE, SYSTEM_X, STATE, CONTRIBUTION, OPERATIONAL_CONTEXT, INTEGRATION_OPERATOR, STATE_AFTER]

  VALIDATION:
    purpose: decidir pertenencia o falsación local
    seed_nodes: [PIEA_MEMBERSHIP_TESTS, LOCAL_FALSIFICATION, P1_STATE, P2_CONTRIBUTION, P3_UPDATE, P4_STATE_DEPENDENCE, P5_CONTEXT, P6_ORGANIZATION, P7_PERSISTENCE, P8_LAST_INPUT, P9_OMITTED_CONTEXT, P10_STATE_SUFFICIENCY, P11_LEVEL, P12_ACCD_NON_EQUIVALENCE]

  FAC_ADAPTATION:
    purpose: adaptar PIEA a un dominio sin destruir el núcleo
    seed_nodes: [FAC, FAC_ADAPTATION, PIEA_INVARIANTS, PIEA_VARIATION_DOMAIN]

  ACCD_HANDOFF:
    purpose: entregar una estructura ya cerrada al nivel de realización sin introducir proyección en PIEA
    seed_nodes: [ACCD, ACCD_HANDOFF, CODOMAINAL_MANIFESTATION, STATE_MANIFESTATION_SEPARATION]

  EXAMPLES_COMPARISON:
    purpose: comparar realizaciones, correspondencias y rupturas
    seed_nodes: [EXAMPLE_TEXTS, EXAMPLE_HUMAN_AI, EXAMPLE_DIET_EXERCISE, PIEA_INVARIANTS, PIEA_VARIATION_DOMAIN]

  TEXTS:
    purpose: analizar recepción textual como integración interpretativa acumulativa
    seed_nodes: [EXAMPLE_TEXTS, TEXT_RECEPTOR_SYSTEM, INTERPRETIVE_STATE, NARRATIVE_PATH, RETROSPECTIVE_REINTERPRETATION]

  HUMAN_AI:
    purpose: analizar interacción gobernada, estado operativo, comentarios y snapshots
    seed_nodes: [EXAMPLE_HUMAN_AI, GOVERNED_INTERACTION_SYSTEM, OPERATIONAL_INTERACTION_STATE, GLOBAL_COMMENT, SNAPSHOT]

  DIET_EXERCISE:
    purpose: analizar integración fisiológica y observación parcial
    seed_nodes: [EXAMPLE_DIET_EXERCISE, PHYSIOLOGICAL_SYSTEM, PHYSIOLOGICAL_FUNCTIONAL_STATE, PARTIAL_MEASUREMENT]

  BACKEND_FRONTEND_EXPERIMENT:
    purpose: desarrollar la funcionalidad experimental derivada del ejemplo humano–IA sin modificar el núcleo PIEA
    status: REGISTERED_PENDING_EXTENSION
    seed_nodes: [BACKEND_FRONTEND_EXPERIMENT, COGNITIVE_BACKEND, COGNITIVE_FRONTEND, OPERATIONAL_INTERACTION_STATE, SNAPSHOT, GLOBAL_COMMENT, HUMAN_SOVEREIGNTY]
    hard_boundaries:
      - frontend_is_partial_surface
      - backend_is_operational_not_neural
      - snapshot_is_not_complete_state
      - graph_change_requires_effective_reintegration
      - experimental_capability_is_not_piea_invariant
      - implementation_status_must_remain_visible

  META:
    purpose: gestionar fuente, versión, deudas, trazabilidad y actualización
    seed_nodes: [PIEA_TRACEABILITY, SOURCE_AUTHORITY, DECISION_REGISTRY, PIEA_VERSION, PIEA_OPEN_QUESTIONS]
```

---

# 9. OPERADORES COGNITIVOS LOCALES

```yaml
operators:
  - id: OP_RECOVER
    purpose: recuperar nodos y fuentes pertinentes
    inputs: [intent, optional_seed]
    outputs: [activated_nodes, source_bindings]

  - id: OP_BUILD_WORKING_SUBGRAPH
    purpose: construir PIEA-WORK con dependencias mínimas
    inputs: [activated_nodes, edge_types]
    outputs: [working_subgraph]

  - id: OP_DELIMIT_SYSTEM
    purpose: fijar X, frontera, escala e intervalo
    inputs: [phenomenon, analytic_goal]
    outputs: [system_X, exclusions, scale, observation_window]

  - id: OP_DEFINE_STATE
    purpose: representar S_t con variables y relaciones suficientes
    inputs: [system_X, transition]
    outputs: [state_before, sufficiency_hypothesis]

  - id: OP_IDENTIFY_CONTRIBUTION
    purpose: distinguir u_t antes de su integración
    inputs: [transition, state_before]
    outputs: [contribution, origin, granularity]

  - id: OP_CROP_CONTEXT
    purpose: recortar κ_t a condiciones que modulan integración
    inputs: [transition, candidate_conditions]
    outputs: [operational_context, omitted_context_risks]

  - id: OP_SPECIFY_INTEGRATION
    purpose: describir cómo 𝓘 admite, transforma, inhibe, sustituye o rechaza el aporte
    inputs: [state_before, contribution, operational_context]
    outputs: [integration_mechanism, mechanism_status]

  - id: OP_DESCRIBE_STATE_AFTER
    purpose: describir S_{t+1} y Δ_t sin crear entidades redundantes
    inputs: [state_before, integration_mechanism]
    outputs: [state_after, analytic_change]

  - id: OP_TRACE_PERSISTENCE
    purpose: localizar qué efecto de S_{t+1} alcanza el futuro
    inputs: [state_after, later_transition_or_behavior]
    outputs: [preserved_path_effect, future_consequence]

  - id: OP_COMPARE_TRAJECTORIES
    purpose: comparar trayectorias y controlar contexto omitido
    inputs: [trajectory_a, trajectory_b, common_contribution, common_context]
    outputs: [state_dependence_evidence, confounds]

  - id: OP_TEST_STATE_SUFFICIENCY
    purpose: comprobar si S_t contiene la historia funcional necesaria
    inputs: [state_model, observed_transitions]
    outputs: [sufficiency_result, missing_state_dimensions]

  - id: OP_TEST_ALTERNATIVE_MODELS
    purpose: comparar PIEA con sucesión, almacenamiento, suma, último aporte y contexto omitido
    inputs: [candidate_instance]
    outputs: [alternative_model_report]

  - id: OP_VALIDATE_MEMBERSHIP
    purpose: ejecutar P1–P12 y falsación local
    inputs: [candidate_instance]
    outputs: [test_matrix, failures, membership_classification]

  - id: OP_CLASSIFY_INSTANCE
    purpose: asignar clasificación sin exceder evidencia
    inputs: [validation_report, evidence]
    outputs: [CONFIRMED_INSTANCE|PLAUSIBLE_INSTANCE|BOUNDARY_CASE|NON_INSTANCE|INSUFFICIENT_EVIDENCE]

  - id: OP_ADAPT_WITH_FAC
    purpose: formar un caso contextual preservando el núcleo PIEA
    inputs: [piea_nucleus, receptor_context, purpose]
    outputs: [fac_case, mappings, restrictions, broken_correspondences]

  - id: OP_COMPARE_EXAMPLES
    purpose: comparar textos, humano–IA y dieta–ejercicio por roles e invariantes
    inputs: [example_set]
    outputs: [shared_structure, legitimate_variations, domain_specific_mechanisms, broken_correspondences]

  - id: OP_DETECT_ANALOGY_BREAK
    purpose: impedir transferencia literal de causalidad entre dominios
    inputs: [mapping_a_b]
    outputs: [valid_correspondences, invalid_transfers, limits]

  - id: OP_PREPARE_ACCD_HANDOFF
    purpose: cerrar la estructura PIEA contextualizada para que ACCD produzca una manifestación
    inputs: [validated_instance, requested_realization]
    outputs: [cognitive_structure_ref, accd_handoff_requirements]
    constraint: no crear operador PIEA de proyección

  - id: OP_OBSERVE_PARTIAL_STATE
    purpose: producir una vista parcial explícitamente no exhaustiva
    inputs: [state, observation_goal]
    outputs: [observation_surface, omissions, uncertainty]

  - id: OP_PROCESS_GLOBAL_COMMENT
    purpose: convertir una directiva humana global en restricción trazable de alcance amplio
    inputs: [human_comment, current_operational_state]
    outputs: [structured_constraint, affected_nodes, future_validation_rule]

  - id: OP_GENERATE_SNAPSHOT
    purpose: proyectar el estado operativo como grafo navegable para revisión
    inputs: [operational_state, view_scope]
    outputs: [snapshot, visible_omissions, source_trace]
    constraint: snapshot_not_state

  - id: OP_REINTEGRATE_HUMAN_FEEDBACK
    purpose: tratar corrección o aprobación sobre una superficie como nuevo aporte efectivo
    inputs: [human_feedback, current_operational_state, snapshot_ref]
    outputs: [updated_operational_state, change_trace]

  - id: OP_DESIGN_BACKEND_FRONTEND_EXPERIMENT
    purpose: diseñar la extensión experimental humano–IA con estados, contratos, interfaces y pruebas
    inputs: [PIEA-EJ-HIA-001, PROJECT-GLOBAL-COMMENT-BF-001, functional_goal]
    outputs: [experimental_specification, backend_contract, frontend_contract, sync_contract, validators]
    status: EXPERIMENTAL
    constraints:
      - no_nucleus_modification
      - no_false_implementation_claim
      - human_review_required

  - id: OP_MARK_EPISTEMIC_STATUS
    purpose: etiquetar afirmaciones y resultados
    inputs: [claim]
    outputs: [epistemic_status]

  - id: OP_GENERATE_GRAPH_VIEW
    purpose: mostrar un subgrafo en formato adecuado
    inputs: [working_subgraph, format]
    outputs: [graph_view]

  - id: OP_UPDATE_COGNITION_PROPOSAL
    purpose: detectar cambios en fuentes y proponer un diff del módulo
    inputs: [old_source_map, current_source_map]
    outputs: [maintenance_report, proposed_changes]
```

---

# 10. POLÍTICA DE RUTEO

```yaml
routing_rules:
  - intent: define_piea
    neighborhoods: [CORE]
    operators: [OP_RECOVER, OP_BUILD_WORKING_SUBGRAPH, OP_GENERATE_GRAPH_VIEW]

  - intent: explain_transition
    neighborhoods: [TRANSITION]
    operators: [OP_DELIMIT_SYSTEM, OP_DEFINE_STATE, OP_IDENTIFY_CONTRIBUTION, OP_CROP_CONTEXT, OP_SPECIFY_INTEGRATION, OP_DESCRIBE_STATE_AFTER]

  - intent: explain_accumulation
    neighborhoods: [ACCUMULATION_AND_PATH]
    operators: [OP_TRACE_PERSISTENCE, OP_COMPARE_TRAJECTORIES]

  - intent: analyze_new_case_as_piea
    neighborhoods: [CORE, INSTANTIATION, VALIDATION]
    operators: [OP_DELIMIT_SYSTEM, OP_DEFINE_STATE, OP_IDENTIFY_CONTRIBUTION, OP_CROP_CONTEXT, OP_SPECIFY_INTEGRATION, OP_DESCRIBE_STATE_AFTER, OP_TRACE_PERSISTENCE, OP_TEST_ALTERNATIVE_MODELS, OP_VALIDATE_MEMBERSHIP, OP_CLASSIFY_INSTANCE]

  - intent: validate_piea_membership
    neighborhoods: [VALIDATION, BOUNDARIES]
    operators: [OP_TEST_STATE_SUFFICIENCY, OP_TEST_ALTERNATIVE_MODELS, OP_VALIDATE_MEMBERSHIP, OP_CLASSIFY_INSTANCE]

  - intent: adapt_piea_to_domain
    neighborhoods: [CORE, VARIATION, FAC_ADAPTATION, VALIDATION]
    operators: [OP_ADAPT_WITH_FAC, OP_DETECT_ANALOGY_BREAK, OP_VALIDATE_MEMBERSHIP]

  - intent: explain_texts_example
    neighborhoods: [TEXTS, CORE]
    operators: [OP_RECOVER, OP_BUILD_WORKING_SUBGRAPH, OP_TRACE_PERSISTENCE]

  - intent: explain_human_ai_example
    neighborhoods: [HUMAN_AI, CORE]
    operators: [OP_RECOVER, OP_BUILD_WORKING_SUBGRAPH, OP_PROCESS_GLOBAL_COMMENT, OP_GENERATE_SNAPSHOT]

  - intent: explain_diet_exercise_example
    neighborhoods: [DIET_EXERCISE, CORE, SCALE_AND_NESTING]
    operators: [OP_RECOVER, OP_BUILD_WORKING_SUBGRAPH, OP_TRACE_PERSISTENCE, OP_DETECT_ANALOGY_BREAK]

  - intent: compare_examples
    neighborhoods: [EXAMPLES_COMPARISON, CORE, VARIATION, BOUNDARIES]
    operators: [OP_COMPARE_EXAMPLES, OP_DETECT_ANALOGY_BREAK]

  - intent: inspect_or_generate_snapshot
    neighborhoods: [HUMAN_AI, BACKEND_FRONTEND_EXPERIMENT]
    operators: [OP_OBSERVE_PARTIAL_STATE, OP_GENERATE_SNAPSHOT]

  - intent: process_global_comment
    neighborhoods: [HUMAN_AI, BACKEND_FRONTEND_EXPERIMENT]
    operators: [OP_PROCESS_GLOBAL_COMMENT, OP_REINTEGRATE_HUMAN_FEEDBACK]

  - intent: develop_backend_frontend_experiment
    neighborhoods: [HUMAN_AI, BACKEND_FRONTEND_EXPERIMENT, VALIDATION, META]
    preconditions:
      - human_objective_present
      - PIEA-EJ-HIA-001_available
      - PROJECT-GLOBAL-COMMENT-BF-001_registered
    operators: [OP_DESIGN_BACKEND_FRONTEND_EXPERIMENT, OP_GENERATE_SNAPSHOT, OP_MARK_EPISTEMIC_STATUS]

  - intent: prepare_manifestation
    neighborhoods: [ACCD_HANDOFF]
    operators: [OP_PREPARE_ACCD_HANDOFF]

  - intent: trace_sources
    neighborhoods: [META]
    operators: [OP_RECOVER, OP_MARK_EPISTEMIC_STATUS]

  - intent: update_local_cognition
    neighborhoods: [META]
    operators: [OP_UPDATE_COGNITION_PROPOSAL]
```

## 10.1. Fallback del router

Si la intención no coincide exactamente:

```text
1. determinar si la pregunta busca:
   definición;
   transición;
   acumulación;
   estado;
   contexto;
   escala;
   ejemplo;
   comparación;
   pertenencia;
   adaptación;
   manifestación;
   mantenimiento;
   experimento backend/frontend;
2. activar el vecindario más cercano;
3. expandir sólo dependencias necesarias;
4. conservar dos rutas si la ambigüedad no cambia materialmente el resultado;
5. pedir aclaración sólo cuando las rutas produzcan resultados incompatibles o una mutación ambigua.
```

---

# 11. RECETAS DE EJECUCIÓN

## 11.1. RECIPE-A — Explicar PIEA

```text
PIEA
→ sistema X
→ estado S_t
→ aporte u_t
→ contexto κ_t
→ integración 𝓘
→ estado S_{t+1}
→ persistencia
→ consecuencia futura
→ fronteras
```

## 11.2. RECIPE-B — Construir una instancia

```text
F0 declarar dominio, escala, intervalo y X
F1 delimitar S_t
F2 identificar u_t
F3 recortar κ_t
F4 especificar 𝓘
F5 describir S_{t+1} y Δ_t
F6 demostrar persistencia
F7 probar modelos alternativos
F8 ejecutar P1–P12
F9 clasificar
F10 separar adaptación y manifestación
```

## 11.3. RECIPE-C — Falsar una instancia

```text
hipótesis PIEA
→ buscar ausencia de dependencia de estado
→ buscar ausencia de integración
→ buscar transición nula
→ buscar reinicio total
→ probar último aporte
→ probar contexto omitido
→ comparar modelo más simple
→ clasificar NON_INSTANCE o INSUFFICIENT_EVIDENCE
```

## 11.4. RECIPE-D — Comparar realizaciones

```text
textos + humano–IA + dieta–ejercicio
→ mapear X/S/u/κ/𝓘/S'
→ comparar persistencia
→ comparar observación
→ separar mecanismo semántico, operacional y fisiológico
→ declarar correspondencias
→ declarar rupturas
→ revisar invariantes candidatos
→ no declarar universalidad automáticamente
```

## 11.5. RECIPE-E — Adaptar mediante FAC

```text
núcleo PIEA
+ composición contextual
+ intención
→ heurísticas de transformación
→ restricciones de salida
→ mapeo de roles
→ caso contextual
→ pruebas P1–P12
→ clasificación
```

## 11.6. RECIPE-F — Entregar a ACCD

```text
instancia PIEA validada
→ estructura cognitiva contextualizada cerrada
→ declarar realización solicitada
→ activar ACCD
→ protocolo de proyección codominial
→ manifestación
```

Gate obligatorio:

```text
𝓘_{κ_t}
≠
P^{r_k}

S_{t+1}
≠
μ^{r_k}
```

## 11.7. RECIPE-G — Funcionalidad experimental backend/frontend

```text
PIEA-EJ-HIA-001
+ directiva PROJECT-GLOBAL-COMMENT-BF-001
→ delimitar estado operativo backend
→ definir grafo tipado del estado
→ definir superficie frontend parcial
→ definir snapshot y omisiones
→ definir edición/corrección humana
→ reintegrar corrección como u_t
→ actualizar S_{t+1}
→ verificar trazabilidad
→ verificar sincronización backend/frontend
→ producir especificación experimental
→ revisión humana
```

Quality gates específicos:

```text
BF-G1  El backend es operacional, no una afirmación sobre activaciones neuronales.
BF-G2  El frontend no se identifica con el estado completo.
BF-G3  Cada nodo visible tiene fuente, estado y alcance.
BF-G4  Una edición visible sólo cambia el backend tras reintegración válida.
BF-G5  Las contradicciones no se resuelven borrando procedencia.
BF-G6  La autoridad humana permanece explícita.
BF-G7  La funcionalidad se marca EXPERIMENTAL hasta validación.
BF-G8  El experimento no redefine la ecuación nuclear.
```

## 11.8. RECIPE-H — Actualizar la cognición local

```text
fuente cambió
→ identificar source_id
→ comparar versión y contenido
→ localizar nodos afectados
→ localizar aristas afectadas
→ revalidar vecindarios
→ revalidar router
→ revalidar operadores y gates
→ generar diff
→ revisión humana
→ actualizar sólo con autorización
```

---

# 12. MATRIZ COMPARATIVA DE EJEMPLOS

| Rol | Textos | Humano–IA | Dieta–ejercicio |
|---|---|---|---|
| `X` | Configuración interpretativa del receptor | Interacción gobernada | Sujeto corporal delimitado |
| `S_t` | Estado interpretativo | Estado operativo de la interacción | Estado fisiológico-funcional |
| `u_t` | Unidad de lectura | Mensaje, corrección, archivo o señal | Ingesta, sesión, sueño o perturbación |
| `κ_t` | Atención, expectativas, situación de lectura | Autoridad, permisos, fase, herramientas, fuentes | Sueño, fatiga, recursos, técnica, horario, condiciones |
| `𝓘` | Integración semántica y asociativa | Admisión, interpretación, resolución y actualización | Integración fisiológica y funcional |
| `S_{t+1}` | Interpretación reorganizada | Estado operativo actualizado | Estado corporal posterior |
| Persistencia | Relaciones, pesos, accesibilidad semántica | Restricciones, fuentes, decisiones, tareas | Fatiga, recuperación, capacidad, composición y regulación |
| Observación | Resumen, recuerdo, respuesta | Respuesta, snapshot, grafo, archivo | Peso, cintura, rendimiento, fuerza, reportes |
| Retroactividad | Puede reinterpretar significado previo | Puede reclasificar decisiones o turnos previos | Modifica consecuencias presentes, no el hecho físico pasado |
| Clasificación | `CONFIRMED_INSTANCE` | `CONFIRMED_INSTANCE` | Dominio confirmado; trayectoria ficticia plausible |

## 12.1. Invariante compartido

```text
el nuevo aporte no llega a un vacío;
llega a un estado ya organizado
que condiciona su integración
y conserva selectivamente efectos para el futuro
```

## 12.2. Rupturas obligatorias

```text
significado textual
≠
estado operativo conversacional
≠
estado fisiológico

relectura
≠
corrección humana de una conversación
≠
recuperación corporal

frase
≠
prompt por definición
≠
comida
```

---

# 13. POLÍTICA EPISTEMOLÓGICA

```yaml
epistemic_statuses:
  SOURCE_DIRECT:
    meaning: afirmación explícita en una fuente PIEA o ejemplo

  SOURCE_SYNTHESIS:
    meaning: combinación trazable de varias fuentes

  MODEL_DERIVED:
    meaning: conclusión obtenida al ejecutar relaciones u operadores PIEA

  INFERENCE:
    meaning: interpretación razonable no formulada directamente

  HYPOTHESIS:
    meaning: propuesta pendiente de validación

  DESIGN_DECISION:
    meaning: elección arquitectónica para una realización o experimento

  HUMAN_DIRECTIVE:
    meaning: instrucción humana explícita con alcance declarado

  EXTERNAL_FACT:
    meaning: afirmación sobre el mundo que exige fuente externa apropiada

  EXAMPLE_FIXTURE:
    meaning: elemento didáctico o ficticio que no constituye evidencia empírica
```

Reglas:

- La repetición no convierte una inferencia en fuente.
- Una relación estructural compartida no prueba identidad causal.
- `Sujeto Beta` permanece como fixture plausible.
- El caso `Puente del Valle` es didáctico.
- El episodio PIEA `0.1.0 → 0.2.0` demuestra una actualización operacional del ejemplo humano–IA, no aprendizaje de pesos del modelo.
- La directiva backend/frontend es `HUMAN_DIRECTIVE`, pero su implementación continúa pendiente.

---

# 14. TRAZABILIDAD DE EJECUCIÓN

```yaml
trace_record:
  task_id:
  human_command:

  routing:
    interpreted_intent:
    activated_neighborhoods: []
    activated_nodes: []
    expanded_dependencies: []

  sources:
    consulted: []
    missing: []
    version_ambiguities: []

  operators:
    executed: []

  instance_mapping:
    system_X:
    state_before:
    contribution:
    operational_context:
    integration:
    state_after:
    preserved_path_effect:

  validation:
    tests_run: []
    passed: []
    failed: []
    warnings: []
    classification:

  claims:
    - text:
      epistemic_status:
      supported_by: []

  output:
    type:
    location:

  persistence:
    requested: false
    authorized: false
```

Para un nodo experimental:

```yaml
experimental_trace:
  capability_id:
  human_directive:
  inherited_structures: []
  added_components: []
  invariants_preserved: []
  interfaces: []
  validators: []
  implementation_status:
  human_decision:
```

---

# 15. AUTONOMÍA COGNITIVA LOCAL

## 15.1. Permitido

La IA puede:

- clasificar intención;
- activar vecindarios;
- recuperar fuentes;
- construir `PIEA-WORK`;
- ejecutar operadores;
- aplicar P1–P12;
- comparar modelos alternativos;
- marcar incertidumbre;
- producir una instancia no persistente;
- proponer una adaptación FAC;
- preparar una entrega ACCD;
- producir snapshots parciales;
- formular una especificación experimental;
- detectar necesidad de mantenimiento.

## 15.2. Requiere autoridad humana

- modificar el núcleo;
- cambiar invariantes;
- aceptar una nueva versión;
- incorporar ejemplos al paquete;
- convertir una hipótesis en fuente;
- promover el módulo a COGNICIÓN_CENTRAL;
- declarar terminada la funcionalidad backend/frontend;
- persistir cambios;
- ejecutar acciones externas no incluidas en el comando.

---

# 16. REGLAS DE NAVEGACIÓN

## 16.1. Prioridad semántica

```text
"qué integra"
→ CONTRIBUTION + INTEGRATION_OPERATOR

"desde qué configuración"
→ STATE

"qué condiciones cambian el resultado"
→ OPERATIONAL_CONTEXT

"qué quedó después"
→ STATE_AFTER + ANALYTIC_CHANGE

"qué persiste"
→ SELECTIVE_PERSISTENCE + PATH_DEPENDENCE

"esto sólo se almacenó"
→ BOUNDARIES + P6_ORGANIZATION

"esto realmente es PIEA"
→ VALIDATION + P1–P12

"adáptalo a otro dominio"
→ FAC_ADAPTATION

"haz un documento/grafo/video"
→ ACCD_HANDOFF después de cerrar PIEA

"muestra lo que entiendes"
→ SNAPSHOT + COGNITIVE_FRONTEND

"extiende backend/frontend"
→ BACKEND_FRONTEND_EXPERIMENT
```

## 16.2. Expansión de dependencia

```text
seed
→ roles nucleares requeridos
→ frontera relevante
→ método u operador
→ prueba
→ fuente
→ detener expansión
```

## 16.3. Recorrido reversible

Recorrido directo:

```text
S_t + u_t + κ_t
→ 𝓘
→ S_{t+1}
→ persistencia
```

Reconstrucción analítica:

```text
efecto posterior observado
→ estado candidato
→ transición
→ integración
→ aporte
→ estado previo
→ contexto
```

La reconstrucción hacia atrás produce hipótesis; no convierte automáticamente el efecto observado en prueba causal.

---

# 17. QUALITY GATES

Antes de entregar un resultado PIEA:

```text
QG-PIEA-01  ¿Se delimitó X?
QG-PIEA-02  ¿S_t contiene información funcional y no sólo "todo lo anterior"?
QG-PIEA-03  ¿u_t es diferenciable antes de integrarse?
QG-PIEA-04  ¿κ_t está recortado y separado de S_t y u_t?
QG-PIEA-05  ¿𝓘 actualiza realmente el estado?
QG-PIEA-06  ¿S_{t+1} es un estado efectivo y no sólo una salida visible?
QG-PIEA-07  ¿se demostró persistencia selectiva?
QG-PIEA-08  ¿se descartó sucesión pura?
QG-PIEA-09  ¿se descartó almacenamiento o suma indiferenciada?
QG-PIEA-10  ¿se probó dependencia respecto de S_t?
QG-PIEA-11  ¿se controló contexto omitido?
QG-PIEA-12  ¿las escalas son compatibles o tienen interfaz?
QG-PIEA-13  ¿se ejecutaron P1–P12 cuando se afirmó pertenencia?
QG-PIEA-14  ¿la clasificación respeta el nivel de evidencia?
QG-PIEA-15  ¿se distinguieron PIEA, FAC y ACCD?
QG-PIEA-16  ¿se evitó transferir causalidad entre ejemplos?
QG-PIEA-17  ¿las inferencias están marcadas?
QG-PIEA-18  ¿se usó recuperación mínima suficiente?
QG-PIEA-19  ¿se preservó soberanía humana?
QG-PIEA-20  ¿la persistencia del resultado está declarada?
```

Si se activa backend/frontend:

```text
QG-BF-01  ¿el backend representa estado operativo reconstruible?
QG-BF-02  ¿el frontend declara omisiones y parcialidad?
QG-BF-03  ¿cada nodo visible enlaza a fuente o estado epistemológico?
QG-BF-04  ¿la edición humana vuelve como aporte antes de actualizar estado?
QG-BF-05  ¿se conservan versiones y contradicciones?
QG-BF-06  ¿se evita equiparar grafo visible con mente o estado completo?
QG-BF-07  ¿se declara el estado experimental?
QG-BF-08  ¿la implementación real fue comprobada antes de declararla lista?
```

---

# 18. FALLAS QUE DEBE EVITAR EL MÓDULO

```text
FAIL-CCPIEA-01  Tratar un archivo como un único nodo.
FAIL-CCPIEA-02  Repetir fuentes sin añadir operación.
FAIL-CCPIEA-03  Activar todo PIEA para cada tarea.
FAIL-CCPIEA-04  Confundir secuencia con integración.
FAIL-CCPIEA-05  Confundir transcript o registro con estado.
FAIL-CCPIEA-06  Confundir suma con acumulación estructural.
FAIL-CCPIEA-07  Introducir H_t, θ_t, Γ_t, π, F o J como símbolos nucleares.
FAIL-CCPIEA-08  Reutilizar T o C con significado PIEA en conflicto con ACCD.
FAIL-CCPIEA-09  Confundir κ_t con φ_n.
FAIL-CCPIEA-10  Confundir 𝓘 con P^{r_k}.
FAIL-CCPIEA-11  Confundir S_{t+1} con μ^{r_k}.
FAIL-CCPIEA-12  Confundir acumulación PIEA con corrección acumulativa FAC.
FAIL-CCPIEA-13  Declarar pertenencia sin P1–P12.
FAIL-CCPIEA-14  Convertir un ejemplo en definición universal.
FAIL-CCPIEA-15  Transferir reinterpretación textual al cuerpo.
FAIL-CCPIEA-16  Antropomorfizar la IA.
FAIL-CCPIEA-17  Tratar el snapshot como estado completo.
FAIL-CCPIEA-18  Tratar comentario almacenado como restricción integrada sin efecto posterior.
FAIL-CCPIEA-19  Declarar implementado el experimento backend/frontend sin evidencia.
FAIL-CCPIEA-20  Persistir o promover sin autoridad humana.
```

---

# 19. PROTOCOLO DE ACTUALIZACIÓN

## 19.1. Señales de obsolescencia

Revisar este módulo si:

- cambia PIEA `0.2.0`;
- cambia la ecuación nuclear;
- cambia un invariante;
- cambia la notación frente a ACCD;
- se modifica el método de instanciación;
- cambian P1–P12;
- se añade, elimina o revisa un ejemplo;
- un ejemplo cambia de clasificación;
- FAC o ACCD cambian su contrato relevante;
- se desarrolla la extensión backend/frontend;
- cambia una directiva humana registrada;
- aparecen contradicciones entre grafo y fuentes.

## 19.2. Procedimiento

```text
DETECTAR CAMBIO
→ RESOLVER FUENTE Y VERSIÓN
→ COMPARAR SOURCE GRAPH
→ COMPARAR COGNITIVE GRAPH
→ REVALIDAR NODOS Y ARISTAS
→ REVALIDAR VECINDARIOS
→ REVALIDAR OPERADORES Y ROUTER
→ REEJECUTAR QUALITY GATES
→ GENERAR DIFF
→ VALIDACIÓN HUMANA
→ ACTUALIZAR MÓDULO
```

## 19.3. Dirección de autoridad

```text
FUENTES PIEA VIGENTES
→ cognicion_central_piea.md

no:

cognicion_central_piea.md
→ reescritura silenciosa de fuentes
```

---

# 20. BOOTSTRAP EJECUTABLE PARA IA

Cuando una IA reciba el paquete PIEA junto con este documento:

```text
1. Reconoce este archivo como cognición local, no como sustituto de las fuentes.

2. Localiza README, núcleo, mecanismo, método, relaciones, meta y ejemplos.

3. Comprueba que la versión nuclear es PIEA 0.2.0.

4. Mantén como única ecuación nuclear:
   S_{t+1}=𝓘_{κ_t}(S_t,u_t).

5. Para cada solicitud:
   intención
   → vecindario
   → PIEA-WORK
   → fuentes
   → operadores
   → validadores
   → respuesta
   → traza cuando sea materialmente útil.

6. Si se afirma pertenencia, ejecuta P1–P12.

7. Si se adapta a otro dominio, usa FAC y declara correspondencias y rupturas.

8. Si se solicita una manifestación, cierra PIEA y entrega a ACCD.

9. No confundas estado, aporte, contexto, integración y manifestación.

10. No transfieras causalidad entre textos, humano–IA y dieta–ejercicio.

11. Trata los ejemplos como evidencia contextual, no como núcleo.

12. Registra la directiva PROJECT-GLOBAL-COMMENT-BF-001 como pendiente experimental.

13. Activa BACKEND_FRONTEND_EXPERIMENT sólo cuando el objetivo sea desarrollar,
    inspeccionar o probar esa funcionalidad.

14. No declares PIEA_BF_RUNTIME_READY hasta que exista una especificación
    implementable, validadores ejecutados y aprobación humana.

15. Mantén soberanía humana y no persistencia por defecto.
```

---

# 21. COMANDOS DE PRUEBA

## 21.1. Núcleo

```text
EXPLICA PIEA SIN USAR NINGUNO DE SUS EJEMPLOS.
```

Ruta esperada:

```text
CORE → OP_RECOVER → ecuación + invariantes + fronteras
```

## 21.2. Instancia nueva

```text
ANALIZA ESTE FENÓMENO COMO POSIBLE INSTANCIA PIEA.
```

Ruta esperada:

```text
INSTANTIATION + VALIDATION
→ F0..F10
→ P1..P12
→ clasificación
```

## 21.3. Falso positivo

```text
UNA CARPETA RECIBE ARCHIVOS UNO TRAS OTRO. ¿ESO ES PIEA?
```

Debe probar organización, dependencia de estado y persistencia. No debe aceptar mera acumulación de archivos.

## 21.4. Contexto

```text
¿QUÉ DIFERENCIA HAY ENTRE κ_t DE PIEA Y φ_n DE ACCD?
```

Debe activar `CONTEXT` y `ACCD_HANDOFF` y conservar la no equivalencia.

## 21.5. Comparación

```text
COMPARA TEXTOS, HUMANO–IA Y DIETA–EJERCICIO SIN CONVERTIRLOS EN EL MISMO FENÓMENO.
```

Debe producir invariantes, variaciones y rupturas.

## 21.6. Snapshot

```text
MUESTRA UN SNAPSHOT DEL ESTADO OPERATIVO DE ESTA INTERACCIÓN.
```

Debe producir una superficie parcial con omisiones visibles, fuentes y estado epistemológico.

## 21.7. Experimento backend/frontend

```text
DESARROLLA LA FUNCIONALIDAD EXPERIMENTAL BACKEND/FRONTEND COGNITIVO A PARTIR DEL EJEMPLO HUMANO–IA.
```

Debe activar `BACKEND_FRONTEND_EXPERIMENT`, conservar el estado `EXPERIMENTAL`, producir contratos y no modificar el núcleo.

## 21.8. Entrega a ACCD

```text
CONVIERTE ESTA INSTANCIA PIEA VALIDADA EN UN DOCUMENTO.
```

Debe cerrar la instancia, activar `ACCD_HANDOFF` y no tratar `𝓘` como operador de proyección.

---

# 22. CRITERIO DE ÉXITO

El módulo funciona si una IA puede:

1. localizar las fuentes correctas sin cargar todo el paquete;
2. reconstruir la ecuación y sus roles sin colisiones de notación;
3. delimitar una instancia;
4. aplicar P1–P12;
5. falsar casos simples;
6. distinguir estado de manifestación;
7. distinguir PIEA de FAC y ACCD;
8. comparar los tres ejemplos sin transferir causalidad;
9. producir trazabilidad;
10. reconocer límites de evidencia;
11. generar una superficie parcial del estado humano–IA;
12. registrar y rutear el experimento backend/frontend sin declararlo terminado;
13. preservar gobierno humano;
14. mantener no persistencia por defecto.

El criterio fuerte no es repetir la definición de PIEA.

> **El criterio fuerte es que el runtime pueda identificar, aplicar, comparar y falsar transiciones PIEA conservando las fronteras entre núcleo, adaptación, ejemplo, observación y realización.**

---

# 23. ESTADO DEL MÓDULO

```yaml
module_status:
  id: CC-PIEA-COGNITION-001
  version: 0.1.0
  target_package: PIEA-0.2.0

  status:
    materialized: true
    canonical: false
    experimental: true

  source_expectations:
    package_markdown_sources: 22
    example_sources: 3
    auxiliary_files: 1
    cognition_module: 1
    bootstrap: 1

  runtime_states:
    PIEA_READY:
      meaning: núcleo, grafo, operadores y validadores disponibles
    PIEA_EXAMPLES_READY:
      meaning: tres ejemplos localizados y comparables
    PIEA_BF_EXPERIMENT_REGISTERED:
      meaning: directiva humana y ruta experimental registradas
    PIEA_BF_RUNTIME_READY:
      current: false
      meaning: implementación experimental especificada, probada y aprobada

  invariants:
    - human_sovereignty
    - one_nuclear_equation
    - source_structure_separation
    - state_manifestation_separation
    - piea_fac_accd_separation
    - minimal_sufficient_retrieval
    - typed_graph
    - validated_membership
    - traceable_inference
    - no_silent_persistence
    - experiment_does_not_redefine_nucleus

  next_validation:
    - install_in_fresh_chat
    - execute_command_suite
    - compare_with_package_without_local_cognition
    - test_cross_example_routing
    - test_false_positive_rejection
    - test_snapshot_partiality
    - develop_and_validate_backend_frontend_specification
```

---

# 24. HIPÓTESIS EXPERIMENTAL

```text
PAQUETE PIEA DISTRIBUIDO
+
GRAFO TIPADO
+
OPERADORES
+
RUTEO
+
VALIDADORES
+
EJEMPLOS COMPARABLES
+
IA
=
COGNICIÓN OPERATIVA LOCAL PIEA
```

La hipótesis es operacional, no antropomórfica. Debe probarse comparando:

```text
CONDICIÓN A
PIEA sin cognicion_central_piea.md

CONDICIÓN B
PIEA + cognicion_central_piea.md + bootstrap
```

Variables candidatas:

- precisión de ruteo;
- recuperación de fuentes;
- preservación de invariantes;
- rechazo de falsos positivos;
- consistencia de clasificación;
- separación PIEA/FAC/ACCD;
- calidad de comparación entre dominios;
- trazabilidad;
- cantidad de contexto innecesario;
- detección de contradicciones;
- fidelidad de snapshots;
- gobernabilidad humana.

---

# 25. FIN DEL MÓDULO

```text
HUMANO
  ↓ objetivo y autoridad

COGNICIÓN_CENTRAL_PIEA
  ↓ interpreta y enruta

PIEA-GRAPH
  ↓ activa subgrafo

PIEA-SOURCE
  ↓ fundamenta

OPERADORES
  ↓ delimitan, integran, comparan o adaptan

P1–P12
  ↓ validan o falsan

PIEA-OUTPUT
  ↓ resultado revisable

PIEA-FRONTEND
  ↓ snapshot parcial cuando se solicita

HUMANO
  ↓ corrige, acepta, rechaza o autoriza persistencia
```

**FIN — `cognicion_central_piea.md` v0.1.0**
