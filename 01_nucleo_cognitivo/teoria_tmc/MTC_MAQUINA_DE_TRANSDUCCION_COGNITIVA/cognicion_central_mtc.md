https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7a56ec-f518-83e8-a2ed-f081b12acb15

# COGNICIÓN_CENTRAL_MTC

> **ID:** `CC-MTC-COGNITION-001`  
> **Nombre físico:** `cognicion_central_mtc.md`  
> **Sistema receptor:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Proyecto:** `COGNICIÓN_CENTRAL`  
> **Versión:** `0.2.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `MÓDULO COGNITIVO LOCAL / PROPUESTA NO CANÓNICA`  
> **Autoridad soberana:** `HUMANO`  
> **Función:** proveer una capa de cognición operativa al paquete conceptual MTC, incluida su interfaz nativa hacia `construccion_conceptual`, sin sustituir sus documentos fuente ni anticipar la realización codominial de ACCD.  
> **Formato:** Markdown con bloques YAML, grafos textuales, contratos y reglas operativas.

---

# 0. MANDATO

Este documento debe ser interpretado como el **módulo de cognición local** del paquete conceptual `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA`.

Su función NO es volver a explicar en prosa los documentos MTC.

Su función es convertir una colección documental distribuida en un **espacio cognitivo navegable, componible, enrutable y validable** para una IA.

La arquitectura buscada es:

```text
PAQUETE COGNITIVO MTC
fuentes conceptuales + adaptador MTC→construccion_conceptual
        │
        ▼
cognicion_central_mtc.md
grafo + relaciones + operadores + ruteo + validación
        │
        ▼
RUNTIME IA
        │
        ▼
OBJETIVO HUMANO
        │
        ▼
ACTIVACIÓN SELECTIVA
        │
        ▼
SUBGRAFO COGNITIVO
        │
        ▼
OPERADORES
        │
        ▼
RESULTADO MTC
        │
        ├── si el destino es análisis/explicación/diseño MTC
        │         ▼
        │      RESPUESTA MTC
        │
        └── si el destino es construccion_conceptual
                  ▼
        ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL
                  ▼
        CONSTRUCCION_CONCEPTUAL + SIDECAR + VALIDACIÓN
        │
        ▼
VALIDACIÓN + TRAZA
```

## 0.1. Regla ontológica principal

```text
ARTEFACTO
≠
RUNTIME

cognicion_central_mtc.md
≠
"mente" autónoma

cognicion_central_mtc.md
+
IA capaz de interpretarlo
=
capacidad cognitiva operativa local
```

## 0.2. Regla de soberanía

El módulo puede:

- localizar conocimiento;
- seleccionar estructuras;
- activar vecindarios cognitivos;
- componer relaciones;
- reconstruir cadenas de transformación y transducción;
- instanciar MTC;
- comparar especializaciones;
- ejecutar pruebas internas;
- detectar inconsistencias;
- producir propuestas;
- preparar una salida MTC validada para el adaptador;
- ejecutar cognitivamente `ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL` cuando el destino solicitado sea el puerto `construccion_conceptual` de ACCD;
- producir, como salidas separadas, `construccion_conceptual`, `trazabilidad_del_adaptador` e `informe_de_validacion`;
- dejar trazabilidad.

El módulo NO puede atribuirse por sí mismo:

- fines últimos;
- autoridad canónica;
- permiso para modificar documentos MTC;
- permiso para convertir inferencias en hechos;
- permiso para persistir cambios en COGNICIÓN_CENTRAL;
- permiso para convertir `construccion_conceptual` en guion, carrusel, video u otra manifestación codominial sin activar posteriormente ACCD;
- autoridad para ignorar una orden humana superior dentro de su alcance legítimo.

---

# 1. DEFINICIÓN DEL MÓDULO

> **`COGNICIÓN_CENTRAL_MTC` es una superposición cognitiva local que representa las estructuras del paquete MTC como un grafo tipado, mantiene sus vínculos con los documentos que las definen y proporciona reglas para seleccionar, navegar, componer, ejecutar y validar esas estructuras ante objetivos nuevos.**

Se distinguen cinco capas:

```text
L1 · FUENTES
documentos del paquete MTC

L2 · ESTRUCTURAS
conceptos, operadores, métodos, validadores, especializaciones

L3 · RELACIONES
dependencias, transformaciones, transducciones, composición, contraste

L4 · COGNICIÓN OPERATIVA
ruteo + operadores + recetas + validación + trazabilidad

L5 · INTEROPERABILIDAD NATIVA
adaptador MTC→construccion_conceptual + contratos + validación reconstructiva
```

## 1.1. Espacios lógicos

```text
MTC-SOURCE://
  documentos fuente del paquete MTC

MTC-GRAPH://
  nodos y aristas de este documento

MTC-WORK://
  subgrafo activado para la tarea actual

MTC-OUTPUT://
  resultados de análisis, instancias, comparaciones o diseños

MTC-TRACE://
  trazabilidad de selección, inferencia, validación y salida

MTC-ADAPTER://
  contratos, funciones, plantillas, validadores y fixtures del adaptador integral
```

Reglas:

- `MTC-SOURCE://` es de sólo lectura por defecto.
- `MTC-GRAPH://` es la representación cognitiva local.
- `MTC-WORK://` contiene sólo la región mínima suficiente para la tarea.
- `MTC-OUTPUT://` no modifica automáticamente ninguna fuente.
- `MTC-TRACE://` debe explicar por qué se activó una estructura y qué papel tuvo.
- `MTC-ADAPTER://` forma parte del paquete cognitivo MTC, pero conserva una frontera funcional distinta: consume una salida MTC ya validada y termina en `construccion_conceptual`.

---

# 2. CONTRATO DE LECTURA DEL PAQUETE MTC

## 2.1. Fuente no equivale a estructura

```text
SourceUnit
≠
CognitiveStructure
```

Un archivo puede contener muchas estructuras.

Una estructura puede estar definida, ampliada o validada por varios archivos.

Por ello el módulo mantiene dos grafos conectados:

```text
SOURCE GRAPH
documentos y sus funciones

        +

COGNITIVE GRAPH
estructuras y relaciones

        +

SOURCE BINDINGS
CognitiveStructure --DEFINED_IN/SUPPORTED_BY--> SourceUnit
```

## 2.2. Orden de lectura recomendado

```text
1. identidad y núcleo
2. transformación / transducción
3. estado cognitivo
4. pipeline
5. capacidad / contexto / manifestación
6. feedback
7. composición
8. contratos
9. método de instanciación
10. validadores
11. especializaciones
12. integraciones
13. trazabilidad
```

## 2.3. Recuperación mínima suficiente

No cargar todo el paquete por defecto.

```text
OBJETIVO
  ↓
clasificación de intención
  ↓
vecindario cognitivo
  ↓
expansión de dependencias necesarias
  ↓
lectura selectiva de fuentes
```

---

# 3. REGISTRO DE FUENTES

El núcleo conceptual MTC v0.1.0 se compone de 27 archivos Markdown. El paquete cognitivo integrado añade 23 archivos Markdown del adaptador `ADP-MTC-CC-001`, además de este módulo y el bootstrap. La pertenencia física al mismo artefacto no colapsa sus responsabilidades: las 27 fuentes definen MTC; el adaptador define la interfaz nativa MTC→`construccion_conceptual`.

```yaml
source_registry:
  - id: SRC.README
    path: README.md
    role: package_entrypoint
    primary_nodes:
      - MTC
      - MTC_MIN
      - MTC_CLOSED
      - TRANSFORMATION
      - TRANSDUCTION
      - PACKAGE_ARCHITECTURE

  - id: SRC.CORE.SPEC
    path: 00_core/00_especificacion_nuclear.md
    role: nuclear_specification
    primary_nodes:
      - MTC
      - MTC_MIN
      - MTC_CLOSED
      - MTC_INVARIANTS
      - MTC_DOMAIN_OF_VARIATION
      - MTC_MEMBERSHIP

  - id: SRC.CORE.ONTOLOGY
    path: 00_core/01_ontologia_y_tipos.md
    role: ontology
    primary_nodes:
      - OPERATOR
      - RECEIVER
      - INTERVENTION
      - MOTIVATIONAL_STRUCTURE
      - COGNITIVE_STATE
      - TRANSFORMATION
      - TRANSDUCTION
      - ACTION
      - CAPABILITY
      - CONTEXT
      - MANIFESTATION
      - GOAL
      - FEEDBACK
      - CONTRACT

  - id: SRC.CORE.INVARIANTS
    path: 00_core/02_invariantes_y_dominio_de_variacion.md
    role: identity_and_specialization
    primary_nodes:
      - INVARIANT
      - DOMAIN_OF_VARIATION
      - SPECIALIZATION
      - SUBSTITUTION_TEST
      - ABSTRACTION_RULE

  - id: SRC.MECH.TRANSFORM
    path: 10_mecanismo/10_transformacion_cognitiva.md
    role: transformation_mechanism
    primary_nodes:
      - TRANSFORMATION
      - COGNITIVE_TRAJECTORY
      - MACROSTATE
      - MICROSTATE
      - TRANSFORMATION_CONTRACT
      - CLOSURE_CONDITION

  - id: SRC.MECH.TRANSDUCE
    path: 10_mecanismo/11_transduccion_cognitiva.md
    role: transduction_mechanism
    primary_nodes:
      - TRANSDUCTION
      - THETA_IC
      - THETA_CA
      - THETA_AM
      - AGENCY_INTERFACE
      - MULTILEVEL_TRANSDUCTION

  - id: SRC.MECH.STATE
    path: 10_mecanismo/12_estado_cognitivo_grafo_ponderado.md
    role: cognitive_state_model
    primary_nodes:
      - COGNITIVE_STATE
      - WEIGHTED_COGNITIVE_GRAPH
      - COGNITIVE_NODE
      - COGNITIVE_EDGE
      - NODE_WEIGHT
      - EDGE_WEIGHT
      - ACTION_THRESHOLD
      - OBSERVATION_INFERENCE

  - id: SRC.MECH.PIPELINE
    path: 10_mecanismo/13_pipeline_y_maquina_de_estados.md
    role: staged_execution
    primary_nodes:
      - COGNITIVE_PIPELINE
      - STAGE
      - TRANSITION
      - GATE
      - BRANCH
      - READY_TO_ACT
      - PIPELINE_FAILURES

  - id: SRC.MECH.REALIZATION
    path: 10_mecanismo/14_capacidad_contexto_manifestacion.md
    role: realization_mechanism
    primary_nodes:
      - CAPABILITY
      - PREEXISTING_CAPABILITY
      - ENHANCED_CAPABILITY
      - MOBILIZED_CAPABILITY
      - CONTEXT
      - MANIFESTATION
      - REALIZATION_FUNCTION
      - COUNTERFACTUAL_CAPABILITY_TEST
      - COUNTERFACTUAL_CONTEXT_TEST

  - id: SRC.MECH.FEEDBACK
    path: 10_mecanismo/15_feedback_control_observabilidad.md
    role: adaptive_loop
    primary_nodes:
      - OPEN_LOOP_MTC
      - CLOSED_LOOP_MTC
      - FEEDBACK
      - OBSERVABILITY
      - UPDATE_POLICY
      - TRACE
      - HUMAN_CONTROL

  - id: SRC.MECH.COMPOSITION
    path: 10_mecanismo/16_composicion_anidamiento_escalas.md
    role: composition_and_scale
    primary_nodes:
      - MICRO_MTC
      - MESO_MTC
      - MACRO_MTC
      - MTC_COMPOSITION
      - CASCADE_PATTERN
      - NETWORK_PATTERN
      - COMPOSITION_CONTRACT

  - id: SRC.METHOD.CONTRACTS
    path: 20_metodo/20_contratos_epistemicos_eticos_operativos.md
    role: governance_contracts
    primary_nodes:
      - EPISTEMIC_CONTRACT
      - ETHICAL_CONTRACT
      - OPERATIONAL_CONTRACT
      - AUTHORITY_CONTRACT
      - TRUTH_ALIGNMENT
      - TRANSPARENCY
      - CONSENT
      - AUTONOMY
      - BENEFIT_ALIGNMENT
      - REVERSIBILITY
      - ASYMMETRY

  - id: SRC.METHOD.INSTANCE
    path: 20_metodo/21_instanciacion_y_validacion.md
    role: instantiation_method
    primary_nodes:
      - MTC_INSTANTIATE_001
      - INST_P0
      - INST_P1
      - INST_P2
      - INST_P3
      - INST_P4
      - INST_P5
      - INST_P6
      - INST_P7
      - INST_P8
      - INST_P9
      - INST_P10
      - INST_P11
      - INST_P12
      - INST_P13
      - INST_P14
      - INST_P15
      - INSTANCE_GATES

  - id: SRC.METHOD.SPECIALIZE
    path: 20_metodo/22_plantilla_de_especializacion.md
    role: specialization_template
    primary_nodes:
      - SPECIALIZATION_TEMPLATE
      - INHERITED_CORE
      - ADDED_ROLES
      - MANDATORY_CONSTRAINTS
      - ACCEPTANCE_TESTS

  - id: SRC.METHOD.TESTS
    path: 20_metodo/23_pruebas_de_pertenencia.md
    role: falsification_and_membership
    primary_nodes:
      - T_MTC_01
      - T_MTC_02
      - T_MTC_03
      - T_MTC_04
      - T_MTC_05
      - T_MTC_06
      - T_MTC_07
      - TRANSFORMATION_TRANSDUCTION_TEST
      - COUNTERFACTUAL_CAPABILITY_TEST
      - COUNTERFACTUAL_CONTEXT_TEST
      - NON_MTC_FALLING_STONE
      - NON_MTC_COMPILER
      - REFLEX_BOUNDARY_CASE

  - id: SRC.METHOD.SCHEMA
    path: 20_metodo/24_esquema_serializable_en_markdown.md
    role: portable_instance_schema
    primary_nodes:
      - SERIALIZABLE_MTC_INSTANCE
      - INSTANCE_SCHEMA

  - id: SRC.SPEC.FRAUD
    path: 30_especializaciones/30_fraude_collar.md
    role: fraud_specialization
    primary_nodes:
      - FRAUD_MTC
      - JEANNE
      - ROHAN
      - DESIRED_STATE_X
      - VICTIM_VALUE_V
      - W_STAR
      - W_TILDE
      - FRAUD_OPACITY
      - FRAUD_VERIFICATION
      - JEWELERS
      - DIAMOND_NECKLACE_MANIFESTATION

  - id: SRC.SPEC.ADVERTISING
    path: 30_especializaciones/31_publicidad.md
    role: advertising_specialization
    primary_nodes:
      - ADVERTISING_MTC
      - AIDA_TRAJECTORY
      - ATTENTION
      - INTEREST
      - DESIRE
      - PURCHASE_INTENTION
      - PURCHASE_ACTION
      - ECONOMIC_CAPABILITY
      - TRANSACTION

  - id: SRC.SPEC.EDUCATION
    path: 30_especializaciones/32_educacion.md
    role: education_specialization
    primary_nodes:
      - EDUCATION_MTC
      - LEARNER
      - EXPLANATION
      - OPERABLE_MODEL
      - COMPETENCE
      - TRANSFER
      - DYNAMIC_CAPABILITY

  - id: SRC.SPEC.INSTITUTION
    path: 30_especializaciones/33_institucional.md
    role: institutional_specialization
    primary_nodes:
      - INSTITUTIONAL_MTC
      - AUTHORITY
      - NORM
      - OBLIGATION
      - INSTITUTIONAL_CAPABILITY
      - COMPLIANCE
      - INSTITUTIONAL_MANIFESTATION

  - id: SRC.SPEC.COMPARE
    path: 30_especializaciones/34_comparativa_especializaciones.md
    role: specialization_comparison
    primary_nodes:
      - SPECIALIZATION_COMPARISON
      - SHARED_TOPOLOGY
      - CONTRACT_DIFFERENCE

  - id: SRC.SPEC.SUBSTITUTION
    path: 30_especializaciones/35_ejemplos_comparados_de_sustitucion.md
    role: substitution_fixtures
    primary_nodes:
      - COLLAR_TO_TITLE_TEST
      - PURCHASE_TO_LEAD_TEST
      - EXPLANATION_TO_TRANSFER_TEST
      - ORDER_TO_EVACUATION_TEST

  - id: SRC.INT.TMC_CC
    path: 40_integraciones/40_integracion_tmc_cognicion_central.md
    role: tmc_cc_integration
    primary_nodes:
      - TMC_FRAMEWORK
      - COGNICION_CENTRAL
      - COGNITIVE_FAMILIES
      - HUMAN_SOVEREIGNTY
      - CORRECCION_ACUMULATIVA

  - id: SRC.INT.ACCD_ACSI
    path: 40_integraciones/41_integracion_accd_acsi_transformador.md
    role: architecture_integration
    primary_nodes:
      - TRANSFORMADOR_COGNITIVO
      - ACSI
      - ACCD
      - CONTENT_STRUCTURE
      - CONTEXTUAL_INTERVENTION
      - RECEIVER_EFFECT

  - id: SRC.META.TRACE
    path: 90_meta/90_trazabilidad_conceptual.md
    role: conceptual_traceability
    primary_nodes:
      - CONCEPTUAL_TRACEABILITY
      - SOURCE_IDEA
      - MODEL_DERIVED_DECISION
      - EPISTEMIC_STATUS

  - id: SRC.META.GLOSSARY
    path: 90_meta/91_glosario_formal.md
    role: formal_glossary
    primary_nodes:
      - FORMAL_GLOSSARY

  - id: SRC.META.CHANGELOG
    path: 90_meta/92_changelog.md
    role: version_history
    primary_nodes:
      - CHANGELOG
      - VERSION
      - PENDING_RESEARCH
```

## 3.1. Registro integral del adaptador

```yaml
adapter_source_registry:
  bundle_id: SRC.ADP.MTC_CC
  root: adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0
  adapter_id: ADP-MTC-CC-001
  adapter_version: 0.1.0
  integration_profile: CC-MTC-COGNITION-001@0.2.0
  lifecycle: INTEGRATED_COGNITIVE_MODULE
  canonical: false

  source_groups:
    - id: SRC.ADP.ENTRYPOINT
      role: adapter_entrypoint
      paths:
        - README.md

    - id: SRC.ADP.GOVERNMENT
      role: authority_activation_and_state
      paths:
        - 00_gobierno/00_manifiesto.md
        - 00_gobierno/01_fuentes_autoridad_y_estado.md

    - id: SRC.ADP.ARCHITECTURE
      role: definition_boundaries_execution_graph_and_responsibilities
      paths:
        - 01_arquitectura/01_definicion_y_fronteras.md
        - 01_arquitectura/02_grafo_de_ejecucion.md
        - 01_arquitectura/03_matriz_de_responsabilidades.md

    - id: SRC.ADP.CONTRACTS
      role: mtc_input_accd_output_and_trace_contracts
      paths:
        - 02_contratos/01_contrato_mtc_a_adaptador.md
        - 02_contratos/02_contrato_adaptador_a_accd.md
        - 02_contratos/03_contrato_sidecar_de_trazabilidad.md

    - id: SRC.ADP.OPERATION
      role: cognitive_functions_decision_rules_validators_and_failures
      paths:
        - 03_operacion/01_funciones_cognitivas.md
        - 03_operacion/02_reglas_de_decision.md
        - 03_operacion/03_validadores_y_fallas.md

    - id: SRC.ADP.TEMPLATES
      role: runtime_requests_outputs_and_reports
      paths:
        - 04_plantillas/01_solicitud_a_mtc.md
        - 04_plantillas/02_salida_del_adaptador.md
        - 04_plantillas/03_informe_de_validacion.md
        - 04_plantillas/04_prompt_de_ejecucion_runtime.md

    - id: SRC.ADP.FIXTURE
      role: collar_end_to_end_fixture
      paths:
        - 05_fixture/01_fraude_collar_mtc_output.md
        - 05_fixture/02_fraude_collar_construccion_conceptual.md
        - 05_fixture/03_fraude_collar_trazabilidad.md
        - 05_fixture/04_fraude_collar_validacion.md

    - id: SRC.ADP.META
      role: ambiguities_source_trace_and_history
      paths:
        - 90_meta/01_huecos_ambiguedades_y_decisiones.md
        - 90_meta/02_trazabilidad_de_fuentes.md
        - 90_meta/03_changelog.md

  integrity:
    expected_markdown_files: 23
    required_groups: 8
    missing_member_policy: PARTIAL_OR_BLOCKED
```

Las rutas de `source_groups.paths` son relativas a `adapter_source_registry.root`. El runtime debe conservar esa raíz al resolverlas.

---

# 4. ONTOLOGÍA DE NODOS

Cada nodo del grafo debe declarar un tipo.

```yaml
node_types:
  CognitiveArchitecture:
    meaning: arquitectura cognitiva compuesta con identidad propia

  Concept:
    meaning: concepto estabilizado dentro del modelo

  Entity:
    meaning: componente ontológico que participa en la máquina

  State:
    meaning: configuración interna o externa distinguible

  Operator:
    meaning: operación que transforma una representación o estado

  Transducer:
    meaning: interfaz que cruza entre dominios funcionalmente distintos

  Method:
    meaning: procedimiento reproducible con pasos y validación

  Rule:
    meaning: restricción, invariante o condición de pertenencia

  Contract:
    meaning: conjunto de obligaciones epistemológicas, éticas u operativas

  Validator:
    meaning: prueba que acepta, rechaza o limita una estructura

  Specialization:
    meaning: configuración derivada del núcleo MTC mediante restricciones adicionales

  Example:
    meaning: instancia o fixture concreto

  Context:
    meaning: conjunto de condiciones de realizabilidad

  Capability:
    meaning: potencia operativa movilizable

  Manifestation:
    meaning: cambio externo observable

  Goal:
    meaning: función de evaluación o resultado buscado

  TraceObject:
    meaning: unidad de procedencia, evidencia o historial

  SourceUnit:
    meaning: documento que porta conocimiento

  Family:
    meaning: clasificación por rol operativo dominante
```

---

# 5. ONTOLOGÍA DE ARISTAS

Las aristas deben ser tipadas. No usar `RELATED_TO` salvo que no exista todavía una relación más precisa.

```yaml
edge_types:
  IS_A:
    meaning: pertenencia tipológica

  PART_OF:
    meaning: composición estructural

  DEPENDS_ON:
    meaning: dependencia funcional

  REQUIRES:
    meaning: precondición necesaria

  ENABLES:
    meaning: habilita una operación o transición

  PERTURBS:
    meaning: una intervención altera un estado

  TRANSFORMS:
    meaning: operación intra-dominio

  TRANSDUCES_TO:
    meaning: cruce entre dominios

  PRODUCES:
    meaning: genera una salida

  MOBILIZES:
    meaning: acción activa una capacidad

  OPERATES_IN:
    meaning: capacidad o proceso actúa dentro de contexto

  REALIZES:
    meaning: acción/capacidad/contexto produce manifestación

  EVALUATED_BY:
    meaning: salida evaluada mediante criterio

  FEEDS_BACK_TO:
    meaning: evidencia actualiza componente anterior

  CONSTRAINS:
    meaning: limita posibilidades válidas

  VALIDATES:
    meaning: prueba o regla valida estructura

  CONTRASTS_WITH:
    meaning: diferencia semántica/operativa necesaria

  SPECIALIZES:
    meaning: añade restricciones a una arquitectura superior

  INSTANTIATES:
    meaning: caso concreto de una estructura

  EXEMPLIFIES:
    meaning: ejemplo que ilustra una estructura sin agotarla

  DERIVED_FROM:
    meaning: estructura inferida o construida desde otra

  DEFINED_IN:
    meaning: vínculo principal estructura→fuente

  SUPPORTED_BY:
    meaning: vínculo secundario estructura→fuente

  CAN_COMPOSE_WITH:
    meaning: compatibilidad de composición

  OUTPUT_FEEDS:
    meaning: manifestación/salida de una máquina alimenta otra

  HAS_STATE:
    meaning: agente/sistema posee estado

  HAS_GOAL:
    meaning: agente/operador posee objetivo

  HAS_CAPABILITY:
    meaning: agente controla capacidad

  HAS_CONTEXT:
    meaning: instancia se desarrolla en contexto

  HAS_CONTRACT:
    meaning: arquitectura está sujeta a contrato

  HAS_VALIDATOR:
    meaning: arquitectura usa prueba de calidad

  HAS_STEP:
    meaning: método contiene paso

  PRECEDES:
    meaning: orden de ejecución

  BRANCHES_TO:
    meaning: bifurcación condicional

  BLOCKS:
    meaning: condición o gate impide transición

  UPDATES:
    meaning: feedback modifica componente

  OBSERVES:
    meaning: sensor/evidencia hace visible un estado o resultado

  MARKS_STATUS:
    meaning: etiqueta epistemológica o de ciclo de vida
```

---

# 6. REGISTRO DE NODOS COGNITIVOS

El siguiente bloque es la **proyección estructurada principal** del conocimiento MTC.

```yaml
nodes:
  # ------------------------------------------------------------------
  # NÚCLEO
  # ------------------------------------------------------------------

  - id: MTC
    type: CognitiveArchitecture
    label: Máquina de Transducción Cognitiva
    definition: sistema donde una intervención modifica cognición, la cognición orienta acción, la acción moviliza capacidad y la capacidad produce manifestaciones bajo contexto
    sources: [SRC.README, SRC.CORE.SPEC]

  - id: MTC_MIN
    type: CognitiveArchitecture
    label: MTC mínima abierta
    definition: forma mínima I→EC→A→V→K→M
    sources: [SRC.README, SRC.CORE.SPEC]

  - id: MTC_CLOSED
    type: CognitiveArchitecture
    label: MTC adaptativa cerrada
    definition: MTC mínima más operador, objetivo, feedback y contratos
    sources: [SRC.README, SRC.CORE.SPEC, SRC.MECH.FEEDBACK]

  - id: MTC_INVARIANTS
    type: Rule
    label: Invariantes nucleares MTC
    sources: [SRC.CORE.SPEC, SRC.CORE.INVARIANTS]

  - id: MTC_DOMAIN_OF_VARIATION
    type: Rule
    label: Dominio de variación MTC
    sources: [SRC.CORE.SPEC, SRC.CORE.INVARIANTS]

  - id: MTC_MEMBERSHIP
    type: Validator
    label: Criterio de pertenencia MTC
    sources: [SRC.CORE.SPEC, SRC.METHOD.TESTS]

  # ------------------------------------------------------------------
  # ENTIDADES NUCLEARES
  # ------------------------------------------------------------------

  - id: OPERATOR
    type: Entity
    label: Operador O
    definition: agente, organización o sistema que selecciona o diseña una intervención
    sources: [SRC.CORE.ONTOLOGY]

  - id: RECEIVER
    type: Entity
    label: Receptor R
    definition: agente o conjunto de agentes cuyo estado cognitivo participa en la conversión
    sources: [SRC.CORE.ONTOLOGY]

  - id: INTERVENTION
    type: Entity
    label: Intervención I
    definition: paquete de información, percepción, señal, narrativa, instrucción, entorno o interacción que perturba el estado cognitivo
    sources: [SRC.CORE.ONTOLOGY]

  - id: MOTIVATIONAL_STRUCTURE
    type: State
    label: Estructura motivacional Q
    definition: metas, deseos, miedos, obligaciones, normas, hábitos, identidad, incentivos y costos que modulan evaluación y acción
    sources: [SRC.CORE.ONTOLOGY]

  - id: COGNITIVE_STATE
    type: State
    label: Estado cognitivo EC
    definition: configuración interna relevante para interpretar y actuar
    sources: [SRC.CORE.ONTOLOGY, SRC.MECH.STATE]

  - id: ACTION
    type: Entity
    label: Acción A
    definition: conducta ejecutada que cruza desde configuración cognitiva hacia intervención sobre el entorno
    sources: [SRC.CORE.ONTOLOGY, SRC.MECH.PIPELINE]

  - id: CAPABILITY
    type: Capability
    label: Capacidad V
    definition: potencia operativa movilizable capaz de producir efectos externos
    sources: [SRC.CORE.ONTOLOGY, SRC.MECH.REALIZATION]

  - id: CONTEXT
    type: Context
    label: Contexto K
    definition: condiciones sociales, materiales, institucionales, tecnológicas y normativas de realizabilidad
    sources: [SRC.CORE.ONTOLOGY, SRC.MECH.REALIZATION]

  - id: MANIFESTATION
    type: Manifestation
    label: Manifestación M
    definition: cambio externo observable producido por acción, capacidad y contexto
    sources: [SRC.CORE.ONTOLOGY, SRC.MECH.REALIZATION]

  - id: GOAL
    type: Goal
    label: Objetivo/valor G
    definition: criterio mediante el cual se evalúa el resultado
    sources: [SRC.CORE.ONTOLOGY]

  - id: FEEDBACK
    type: Entity
    label: Feedback F
    definition: evidencia utilizada para modificar futuras intervenciones o reglas
    sources: [SRC.CORE.ONTOLOGY, SRC.MECH.FEEDBACK]

  - id: CONTRACT
    type: Contract
    label: Contrato C
    definition: restricciones epistemológicas, éticas, operativas, de autoridad y trazabilidad
    sources: [SRC.CORE.ONTOLOGY, SRC.METHOD.CONTRACTS]

  # ------------------------------------------------------------------
  # TRANSFORMACIÓN
  # ------------------------------------------------------------------

  - id: TRANSFORMATION
    type: Operator
    label: Transformación cognitiva τ
    definition: operación dentro del dominio cognitivo EC→EC
    sources: [SRC.MECH.TRANSFORM]

  - id: COGNITIVE_TRAJECTORY
    type: Concept
    label: Trayectoria cognitiva
    definition: secuencia EC0→EC1→…→EC*
    sources: [SRC.MECH.TRANSFORM, SRC.MECH.PIPELINE]

  - id: MACROSTATE
    type: State
    label: Macroestado
    definition: vista funcional comprimida de una configuración cognitiva
    sources: [SRC.MECH.TRANSFORM, SRC.MECH.STATE]

  - id: MICROSTATE
    type: State
    label: Microestado
    definition: descripción estructural fina de nodos, relaciones y pesos
    sources: [SRC.MECH.TRANSFORM, SRC.MECH.STATE]

  - id: TRANSFORMATION_CONTRACT
    type: Contract
    label: Contrato de transformación
    sources: [SRC.MECH.TRANSFORM]

  - id: CLOSURE_CONDITION
    type: Rule
    label: Condición de cierre de transformación
    sources: [SRC.MECH.TRANSFORM]

  # ------------------------------------------------------------------
  # TRANSDUCCIÓN
  # ------------------------------------------------------------------

  - id: TRANSDUCTION
    type: Transducer
    label: Transducción cognitiva θ
    definition: cruce funcional entre dominios distintos
    sources: [SRC.MECH.TRANSDUCE]

  - id: THETA_IC
    type: Transducer
    label: θ_IC información/percepción→cognición
    sources: [SRC.MECH.TRANSDUCE]

  - id: THETA_CA
    type: Transducer
    label: θ_CA cognición→acción
    sources: [SRC.MECH.TRANSDUCE]

  - id: THETA_AM
    type: Transducer
    label: θ_AM acción/capacidad/contexto→manifestación
    sources: [SRC.MECH.TRANSDUCE]

  - id: AGENCY_INTERFACE
    type: Concept
    label: Agencia como interfaz
    definition: EC* habilita u orienta A sin determinarla necesariamente
    sources: [SRC.MECH.TRANSDUCE]

  - id: MULTILEVEL_TRANSDUCTION
    type: Concept
    label: Transducción multinivel
    definition: encadenamiento de agentes donde la acción de uno se vuelve señal para otro
    sources: [SRC.MECH.TRANSDUCE, SRC.MECH.COMPOSITION]

  # ------------------------------------------------------------------
  # ESTADO COGNITIVO
  # ------------------------------------------------------------------

  - id: WEIGHTED_COGNITIVE_GRAPH
    type: CognitiveArchitecture
    label: Grafo cognitivo ponderado
    definition: EC(t) representado por nodos, aristas y pesos
    sources: [SRC.MECH.STATE]

  - id: COGNITIVE_NODE
    type: Entity
    label: Nodo cognitivo
    sources: [SRC.MECH.STATE]

  - id: COGNITIVE_EDGE
    type: Entity
    label: Arista cognitiva
    sources: [SRC.MECH.STATE]

  - id: NODE_WEIGHT
    type: State
    label: Peso de nodo
    sources: [SRC.MECH.STATE]

  - id: EDGE_WEIGHT
    type: State
    label: Peso de arista
    sources: [SRC.MECH.STATE]

  - id: ACTION_THRESHOLD
    type: Rule
    label: Umbral de acción
    definition: criterio abstracto de suficiencia Φ(EC,Q,K)≥θA
    sources: [SRC.MECH.STATE]

  - id: OBSERVATION_INFERENCE
    type: Rule
    label: Inferencia indirecta de estado
    definition: EC puede inferirse por declaraciones, elecciones, acciones y evidencia
    sources: [SRC.MECH.STATE, SRC.MECH.FEEDBACK]

  # ------------------------------------------------------------------
  # PIPELINE / MÁQUINA DE ESTADOS
  # ------------------------------------------------------------------

  - id: COGNITIVE_PIPELINE
    type: CognitiveArchitecture
    label: Pipeline cognitivo
    sources: [SRC.MECH.PIPELINE]

  - id: STAGE
    type: Entity
    label: Stage
    sources: [SRC.MECH.PIPELINE]

  - id: TRANSITION
    type: Operator
    label: Transición entre stages
    sources: [SRC.MECH.PIPELINE]

  - id: GATE
    type: Validator
    label: Gate
    sources: [SRC.MECH.PIPELINE]

  - id: BRANCH
    type: CognitiveArchitecture
    label: Rama condicional
    sources: [SRC.MECH.PIPELINE]

  - id: READY_TO_ACT
    type: State
    label: Estado listo para actuar
    definition: macroestado previo a la ejecución; no equivale a acción ejecutada
    sources: [SRC.MECH.PIPELINE]

  - id: PIPELINE_FAILURES
    type: Validator
    label: Fallos de pipeline
    sources: [SRC.MECH.PIPELINE]

  # ------------------------------------------------------------------
  # CAPACIDAD / CONTEXTO / MANIFESTACIÓN
  # ------------------------------------------------------------------

  - id: PREEXISTING_CAPABILITY
    type: Capability
    label: V0 capacidad preexistente
    sources: [SRC.MECH.REALIZATION]

  - id: ENHANCED_CAPABILITY
    type: Capability
    label: V+ capacidad ampliada
    sources: [SRC.MECH.REALIZATION, SRC.SPEC.EDUCATION]

  - id: MOBILIZED_CAPABILITY
    type: Capability
    label: V* capacidad movilizada
    sources: [SRC.MECH.REALIZATION]

  - id: REALIZATION_FUNCTION
    type: Operator
    label: ρ función de realización
    definition: ρ(A,V,K)→M
    sources: [SRC.MECH.REALIZATION]

  - id: COUNTERFACTUAL_CAPABILITY_TEST
    type: Validator
    label: Prueba contrafactual de capacidad
    sources: [SRC.MECH.REALIZATION, SRC.METHOD.TESTS]

  - id: COUNTERFACTUAL_CONTEXT_TEST
    type: Validator
    label: Prueba contrafactual de contexto
    sources: [SRC.MECH.REALIZATION, SRC.METHOD.TESTS]

  # ------------------------------------------------------------------
  # FEEDBACK / CONTROL
  # ------------------------------------------------------------------

  - id: OPEN_LOOP_MTC
    type: CognitiveArchitecture
    label: MTC de lazo abierto
    sources: [SRC.MECH.FEEDBACK]

  - id: CLOSED_LOOP_MTC
    type: CognitiveArchitecture
    label: MTC de lazo cerrado
    sources: [SRC.MECH.FEEDBACK]

  - id: OBSERVABILITY
    type: Concept
    label: Observabilidad
    sources: [SRC.MECH.FEEDBACK]

  - id: UPDATE_POLICY
    type: Method
    label: Política de actualización
    sources: [SRC.MECH.FEEDBACK]

  - id: TRACE
    type: TraceObject
    label: Traza de ejecución
    sources: [SRC.MECH.FEEDBACK, SRC.META.TRACE]

  - id: HUMAN_CONTROL
    type: Rule
    label: Control humano
    sources: [SRC.MECH.FEEDBACK, SRC.INT.TMC_CC]

  # ------------------------------------------------------------------
  # COMPOSICIÓN Y ESCALA
  # ------------------------------------------------------------------

  - id: MICRO_MTC
    type: CognitiveArchitecture
    label: MTC micro
    sources: [SRC.MECH.COMPOSITION]

  - id: MESO_MTC
    type: CognitiveArchitecture
    label: MTC meso
    sources: [SRC.MECH.COMPOSITION]

  - id: MACRO_MTC
    type: CognitiveArchitecture
    label: MTC macro
    sources: [SRC.MECH.COMPOSITION]

  - id: MTC_COMPOSITION
    type: Operator
    label: Composición de MTC
    sources: [SRC.MECH.COMPOSITION]

  - id: CASCADE_PATTERN
    type: CognitiveArchitecture
    label: Patrón de cascada
    sources: [SRC.MECH.COMPOSITION]

  - id: NETWORK_PATTERN
    type: CognitiveArchitecture
    label: Patrón de red
    sources: [SRC.MECH.COMPOSITION]

  - id: COMPOSITION_CONTRACT
    type: Contract
    label: Contrato de composición
    sources: [SRC.MECH.COMPOSITION]

  # ------------------------------------------------------------------
  # CONTRATOS
  # ------------------------------------------------------------------

  - id: EPISTEMIC_CONTRACT
    type: Contract
    label: Contrato epistemológico
    sources: [SRC.METHOD.CONTRACTS]

  - id: ETHICAL_CONTRACT
    type: Contract
    label: Contrato ético
    sources: [SRC.METHOD.CONTRACTS]

  - id: OPERATIONAL_CONTRACT
    type: Contract
    label: Contrato operativo
    sources: [SRC.METHOD.CONTRACTS]

  - id: AUTHORITY_CONTRACT
    type: Contract
    label: Contrato de autoridad
    sources: [SRC.METHOD.CONTRACTS, SRC.INT.TMC_CC]

  - id: TRUTH_ALIGNMENT
    type: Rule
    label: Alineación con verdad
    sources: [SRC.METHOD.CONTRACTS]

  - id: TRANSPARENCY
    type: Rule
    label: Transparencia
    sources: [SRC.METHOD.CONTRACTS]

  - id: CONSENT
    type: Rule
    label: Consentimiento
    sources: [SRC.METHOD.CONTRACTS]

  - id: AUTONOMY
    type: Rule
    label: Autonomía del receptor
    sources: [SRC.METHOD.CONTRACTS]

  - id: BENEFIT_ALIGNMENT
    type: Rule
    label: Alineación de beneficios
    sources: [SRC.METHOD.CONTRACTS]

  - id: REVERSIBILITY
    type: Rule
    label: Reversibilidad
    sources: [SRC.METHOD.CONTRACTS]

  - id: ASYMMETRY
    type: Rule
    label: Asimetría informacional o de poder
    sources: [SRC.METHOD.CONTRACTS]

  # ------------------------------------------------------------------
  # MÉTODO DE INSTANCIACIÓN
  # ------------------------------------------------------------------

  - id: MTC_INSTANTIATE_001
    type: Method
    label: Método de instanciación MTC
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P0
    type: Method
    label: P0 declarar objetivo del análisis
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P1
    type: Method
    label: P1 localizar manifestación
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P2
    type: Method
    label: P2 reconstruir capacidad
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P3
    type: Method
    label: P3 identificar contexto
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P4
    type: Method
    label: P4 identificar acción
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P5
    type: Method
    label: P5 reconstruir EC*
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P6
    type: Method
    label: P6 reconstruir trayectoria EC0→EC*
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P7
    type: Method
    label: P7 identificar intervención
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P8
    type: Method
    label: P8 modelar Q
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P9
    type: Method
    label: P9 identificar O y G
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P10
    type: Method
    label: P10 separar transformación y transducción
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P11
    type: Method
    label: P11 definir feedback
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P12
    type: Method
    label: P12 declarar contratos
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P13
    type: Method
    label: P13 ejecutar pruebas de pertenencia
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P14
    type: Method
    label: P14 abstraer invariantes y variación
    sources: [SRC.METHOD.INSTANCE]

  - id: INST_P15
    type: Method
    label: P15 validar contra segunda instancia
    sources: [SRC.METHOD.INSTANCE]

  - id: INSTANCE_GATES
    type: Validator
    label: Gates de instanciación
    sources: [SRC.METHOD.INSTANCE]

  # ------------------------------------------------------------------
  # ESPECIALIZACIÓN
  # ------------------------------------------------------------------

  - id: SPECIALIZATION
    type: Concept
    label: Especialización MTC
    definition: MTC + restricciones adicionales
    sources: [SRC.CORE.INVARIANTS, SRC.METHOD.SPECIALIZE]

  - id: SPECIALIZATION_TEMPLATE
    type: Method
    label: Plantilla formal de especialización
    sources: [SRC.METHOD.SPECIALIZE]

  - id: INHERITED_CORE
    type: Rule
    label: Núcleo heredado
    sources: [SRC.METHOD.SPECIALIZE]

  - id: ADDED_ROLES
    type: Rule
    label: Roles añadidos
    sources: [SRC.METHOD.SPECIALIZE]

  - id: MANDATORY_CONSTRAINTS
    type: Rule
    label: Restricciones obligatorias de especialización
    sources: [SRC.METHOD.SPECIALIZE]

  - id: ACCEPTANCE_TESTS
    type: Validator
    label: Pruebas de aceptación de especialización
    sources: [SRC.METHOD.SPECIALIZE]

  # ------------------------------------------------------------------
  # VALIDACIÓN / FALSACIÓN
  # ------------------------------------------------------------------

  - id: T_MTC_01
    type: Validator
    label: Existe intervención relevante
    sources: [SRC.METHOD.TESTS]

  - id: T_MTC_02
    type: Validator
    label: Existe cambio EC0→EC*
    sources: [SRC.METHOD.TESTS]

  - id: T_MTC_03
    type: Validator
    label: Acción separada de estado
    sources: [SRC.METHOD.TESTS]

  - id: T_MTC_04
    type: Validator
    label: Existe capacidad operativa
    sources: [SRC.METHOD.TESTS]

  - id: T_MTC_05
    type: Validator
    label: Existe contexto de realizabilidad
    sources: [SRC.METHOD.TESTS]

  - id: T_MTC_06
    type: Validator
    label: Manifestación distinguible de capacidad
    sources: [SRC.METHOD.TESTS]

  - id: T_MTC_07
    type: Validator
    label: Cadena sin saltos mágicos
    sources: [SRC.METHOD.TESTS]

  - id: TRANSFORMATION_TRANSDUCTION_TEST
    type: Validator
    label: Prueba de transformación vs transducción
    sources: [SRC.METHOD.TESTS]

  - id: NON_MTC_FALLING_STONE
    type: Example
    label: Contraejemplo piedra que cae
    sources: [SRC.METHOD.TESTS]

  - id: NON_MTC_COMPILER
    type: Example
    label: Contraejemplo compilador puramente digital
    sources: [SRC.METHOD.TESTS]

  - id: REFLEX_BOUNDARY_CASE
    type: Example
    label: Caso frontera reflejo automático
    sources: [SRC.METHOD.TESTS]

  - id: SERIALIZABLE_MTC_INSTANCE
    type: Method
    label: Instancia MTC serializable
    sources: [SRC.METHOD.SCHEMA]

  - id: INSTANCE_SCHEMA
    type: Contract
    label: Esquema portable de instancia
    sources: [SRC.METHOD.SCHEMA]

  # ------------------------------------------------------------------
  # ESPECIALIZACIÓN FRAUDE
  # ------------------------------------------------------------------

  - id: FRAUD_MTC
    type: Specialization
    label: MTC fraudulenta
    sources: [SRC.SPEC.FRAUD, SRC.SPEC.COMPARE]

  - id: JEANNE
    type: Example
    label: Jeanne de La Motte como operador del fixture
    sources: [SRC.SPEC.FRAUD]

  - id: ROHAN
    type: Example
    label: Rohan como receptor/víctima del fixture
    sources: [SRC.SPEC.FRAUD]

  - id: DESIRED_STATE_X
    type: State
    label: Estado deseado X
    definition: objetivo buscado por la víctima/receptor
    sources: [SRC.SPEC.FRAUD]

  - id: VICTIM_VALUE_V
    type: Capability
    label: Valor/capacidad de la víctima V
    definition: capacidad generativa que el fraude intenta orientar
    sources: [SRC.SPEC.FRAUD]

  - id: W_STAR
    type: State
    label: Mundo real relevante W*
    sources: [SRC.SPEC.FRAUD]

  - id: W_TILDE
    type: State
    label: Realidad operativa fabricada W~
    sources: [SRC.SPEC.FRAUD]

  - id: FRAUD_OPACITY
    type: Rule
    label: Condición de opacidad fraudulenta
    sources: [SRC.SPEC.FRAUD]

  - id: FRAUD_VERIFICATION
    type: Validator
    label: Verificación independiente que amenaza W~
    sources: [SRC.SPEC.FRAUD]

  - id: JEWELERS
    type: Example
    label: Joyeros como agentes de realización/contexto
    sources: [SRC.SPEC.FRAUD]

  - id: DIAMOND_NECKLACE_MANIFESTATION
    type: Manifestation
    label: Collar disponible para Jeanne
    sources: [SRC.SPEC.FRAUD]

  - id: COLLAR_TO_TITLE_TEST
    type: Validator
    label: Prueba de sustitución collar→título
    sources: [SRC.SPEC.FRAUD, SRC.SPEC.SUBSTITUTION]

  # ------------------------------------------------------------------
  # PUBLICIDAD
  # ------------------------------------------------------------------

  - id: ADVERTISING_MTC
    type: Specialization
    label: MTC publicitaria/persuasiva
    sources: [SRC.SPEC.ADVERTISING, SRC.SPEC.COMPARE]

  - id: AIDA_TRAJECTORY
    type: CognitiveArchitecture
    label: Trayectoria AIDA
    sources: [SRC.SPEC.ADVERTISING]

  - id: ATTENTION
    type: State
    label: Atención
    sources: [SRC.SPEC.ADVERTISING]

  - id: INTEREST
    type: State
    label: Interés
    sources: [SRC.SPEC.ADVERTISING]

  - id: DESIRE
    type: State
    label: Deseo/preferencia
    sources: [SRC.SPEC.ADVERTISING]

  - id: PURCHASE_INTENTION
    type: State
    label: Intención de compra/acción
    sources: [SRC.SPEC.ADVERTISING]

  - id: PURCHASE_ACTION
    type: Entity
    label: Compra/registro/lead como acción
    sources: [SRC.SPEC.ADVERTISING]

  - id: ECONOMIC_CAPABILITY
    type: Capability
    label: Capacidad económica y decisional
    sources: [SRC.SPEC.ADVERTISING]

  - id: TRANSACTION
    type: Manifestation
    label: Transacción/lead
    sources: [SRC.SPEC.ADVERTISING]

  - id: PURCHASE_TO_LEAD_TEST
    type: Validator
    label: Sustitución compra→lead
    sources: [SRC.SPEC.SUBSTITUTION]

  # ------------------------------------------------------------------
  # EDUCACIÓN
  # ------------------------------------------------------------------

  - id: EDUCATION_MTC
    type: Specialization
    label: MTC educativa
    sources: [SRC.SPEC.EDUCATION, SRC.SPEC.COMPARE]

  - id: LEARNER
    type: Entity
    label: Alumno/receptor
    sources: [SRC.SPEC.EDUCATION]

  - id: EXPLANATION
    type: Entity
    label: Explicación/intervención educativa
    sources: [SRC.SPEC.EDUCATION]

  - id: OPERABLE_MODEL
    type: State
    label: Modelo cognitivo operable
    sources: [SRC.SPEC.EDUCATION]

  - id: COMPETENCE
    type: Capability
    label: Competencia
    sources: [SRC.SPEC.EDUCATION]

  - id: TRANSFER
    type: Manifestation
    label: Transferencia a problema nuevo
    sources: [SRC.SPEC.EDUCATION]

  - id: DYNAMIC_CAPABILITY
    type: Capability
    label: Capacidad construida o ampliada V0→V+
    sources: [SRC.SPEC.EDUCATION]

  - id: EXPLANATION_TO_TRANSFER_TEST
    type: Validator
    label: Explicación→transferencia
    sources: [SRC.SPEC.SUBSTITUTION]

  # ------------------------------------------------------------------
  # INSTITUCIÓN
  # ------------------------------------------------------------------

  - id: INSTITUTIONAL_MTC
    type: Specialization
    label: MTC institucional
    sources: [SRC.SPEC.INSTITUTION, SRC.SPEC.COMPARE]

  - id: AUTHORITY
    type: Capability
    label: Autoridad
    sources: [SRC.SPEC.INSTITUTION]

  - id: NORM
    type: Entity
    label: Norma/orden
    sources: [SRC.SPEC.INSTITUTION]

  - id: OBLIGATION
    type: State
    label: Obligación/rol reconocido
    sources: [SRC.SPEC.INSTITUTION]

  - id: INSTITUTIONAL_CAPABILITY
    type: Capability
    label: Autoridad/trabajo/acceso institucional
    sources: [SRC.SPEC.INSTITUTION]

  - id: COMPLIANCE
    type: Entity
    label: Ejecución/cumplimiento
    sources: [SRC.SPEC.INSTITUTION]

  - id: INSTITUTIONAL_MANIFESTATION
    type: Manifestation
    label: Permiso, obra, evacuación o decisión
    sources: [SRC.SPEC.INSTITUTION]

  - id: ORDER_TO_EVACUATION_TEST
    type: Validator
    label: Orden→evacuación
    sources: [SRC.SPEC.SUBSTITUTION]

  # ------------------------------------------------------------------
  # COMPARACIÓN
  # ------------------------------------------------------------------

  - id: SPECIALIZATION_COMPARISON
    type: Method
    label: Comparación de especializaciones
    sources: [SRC.SPEC.COMPARE]

  - id: SHARED_TOPOLOGY
    type: Concept
    label: Topología compartida I→EC→A→V→K→M
    sources: [SRC.SPEC.COMPARE]

  - id: CONTRACT_DIFFERENCE
    type: Rule
    label: Misma topología no implica mismo contrato
    sources: [SRC.SPEC.COMPARE, SRC.METHOD.CONTRACTS]

  # ------------------------------------------------------------------
  # INTEGRACIONES
  # ------------------------------------------------------------------

  - id: TMC_FRAMEWORK
    type: CognitiveArchitecture
    label: Teoría de Máquinas Cognitivas
    sources: [SRC.INT.TMC_CC]

  - id: COGNICION_CENTRAL
    type: CognitiveArchitecture
    label: COGNICIÓN_CENTRAL
    sources: [SRC.INT.TMC_CC]

  - id: COGNITIVE_FAMILIES
    type: Family
    label: Familias cognitivas
    sources: [SRC.INT.TMC_CC]

  - id: HUMAN_SOVEREIGNTY
    type: Rule
    label: Soberanía humana
    sources: [SRC.INT.TMC_CC]

  - id: CORRECCION_ACUMULATIVA
    type: Method
    label: Corrección acumulativa
    sources: [SRC.INT.TMC_CC]

  - id: TRANSFORMADOR_COGNITIVO
    type: CognitiveArchitecture
    label: Transformador Cognitivo
    sources: [SRC.INT.ACCD_ACSI]

  - id: ACSI
    type: CognitiveArchitecture
    label: ACSI
    sources: [SRC.INT.ACCD_ACSI]

  - id: ACCD
    type: CognitiveArchitecture
    label: ACCD
    sources: [SRC.INT.ACCD_ACSI]

  - id: CONTENT_STRUCTURE
    type: Concept
    label: Estructura cognitiva del contenido
    sources: [SRC.INT.ACCD_ACSI]

  - id: CONTEXTUAL_INTERVENTION
    type: Entity
    label: Intervención contextualizada Iφ
    sources: [SRC.INT.ACCD_ACSI]

  - id: RECEIVER_EFFECT
    type: Manifestation
    label: Efecto sobre receptor
    sources: [SRC.INT.ACCD_ACSI]

  # ------------------------------------------------------------------
  # ADAPTADOR NATIVO MTC → CONSTRUCCION_CONCEPTUAL
  # ------------------------------------------------------------------

  - id: MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER
    type: CognitiveArchitecture
    label: Adaptador MTC a construccion_conceptual
    definition: mediador cognitivo de compresión preservadora que consume una salida MTC validada y emite el puerto conceptual vigente de ACCD sin anticipar la manifestación codominial
    sources: [SRC.ADP.ENTRYPOINT, SRC.ADP.ARCHITECTURE]

  - id: MTC_OUTPUT_FOR_ADAPTER
    type: TraceObject
    label: MTC_OUTPUT_PARA_ADAPTADOR
    definition: vista estructural, validada y epistemológicamente marcada que MTC entrega al adaptador
    sources: [SRC.ADP.CONTRACTS, SRC.ADP.TEMPLATES]

  - id: PRESERVING_COMPRESSION
    type: Operator
    label: Compresión preservadora
    definition: transformación many-to-many que selecciona, formula, fusiona y relaciona claims MTC sin perder el mecanismo ni los invariantes pertinentes
    sources: [SRC.ADP.ARCHITECTURE, SRC.ADP.OPERATION]

  - id: CONCEPTUAL_DERIVATION_MAP
    type: TraceObject
    label: Mapa de derivación conceptual
    sources: [SRC.ADP.OPERATION, SRC.ADP.CONTRACTS]

  - id: PRESERVATION_OBLIGATIONS
    type: Contract
    label: Obligaciones de preservación
    sources: [SRC.ADP.OPERATION, SRC.ADP.CONTRACTS]

  - id: CONCEPTUAL_CONSTRUCTION
    type: Concept
    label: construccion_conceptual
    definition: colección de ideas activas formuladas, jerarquizadas, ponderadas y relacionadas que ACCD consume como puerto temático
    sources: [SRC.ADP.CONTRACTS, SRC.ADP.TEMPLATES]

  - id: ACTIVE_IDEA_COLLECTION
    type: Concept
    label: coleccion_de_ideas_activas
    sources: [SRC.ADP.CONTRACTS, SRC.ADP.TEMPLATES]

  - id: ACTIVE_IDEA
    type: Concept
    label: idea_activa
    sources: [SRC.ADP.CONTRACTS, SRC.ADP.TEMPLATES]

  - id: ADAPTER_TRACE_SIDECAR
    type: TraceObject
    label: trazabilidad_del_adaptador
    definition: sidecar separado del puerto ACCD que conserva claims, fuentes, estatus epistemológico, decisiones de compresión y descartes
    sources: [SRC.ADP.CONTRACTS, SRC.ADP.TEMPLATES]

  - id: ADAPTER_VALIDATION_REPORT
    type: TraceObject
    label: informe_de_validacion
    sources: [SRC.ADP.OPERATION, SRC.ADP.TEMPLATES]

  - id: RECONSTRUCTIVE_VALIDATION
    type: Validator
    label: Validación reconstructiva
    definition: prueba que reconstruye desde las ideas el mecanismo y los invariantes seleccionados y los compara con el MTC_OUTPUT
    sources: [SRC.ADP.OPERATION]

  - id: ACCD_CODOMAIN_MANIFESTATION
    type: Manifestation
    label: Manifestación codominial de ACCD
    sources: [SRC.ADP.ARCHITECTURE]

  - id: F00_CONTRACT_PREFLIGHT
    type: Operator
    label: Preflight de contratos
    sources: [SRC.ADP.OPERATION]

  - id: F01_FORMULATE_MTC_REQUEST
    type: Operator
    label: Formular petición a MTC
    sources: [SRC.ADP.OPERATION]

  - id: F02_VALIDATE_MTC_DELIVERY
    type: Validator
    label: Validar entrega MTC
    sources: [SRC.ADP.OPERATION]

  - id: F03_BUILD_DERIVATION_MAP
    type: Operator
    label: Construir mapa de derivación
    sources: [SRC.ADP.OPERATION]

  - id: F04_IDENTIFY_CONCEPTUAL_KERNEL
    type: Operator
    label: Identificar núcleo conceptual
    sources: [SRC.ADP.OPERATION]

  - id: F05_DECLARE_PRESERVATION_OBLIGATIONS
    type: Operator
    label: Declarar obligaciones de preservación
    sources: [SRC.ADP.OPERATION]

  - id: F06_PROPOSITIONAL_DECOMPOSITION
    type: Operator
    label: Descomposición proposicional
    sources: [SRC.ADP.OPERATION]

  - id: F07_FILTER_AND_MERGE
    type: Operator
    label: Filtrar y fusionar ideas
    sources: [SRC.ADP.OPERATION]

  - id: F08_BUILD_IDEA_GRAPH
    type: Operator
    label: Construir grafo de ideas
    sources: [SRC.ADP.OPERATION]

  - id: F09_ASSIGN_CONCEPTUAL_ROLES
    type: Operator
    label: Asignar roles conceptuales
    sources: [SRC.ADP.OPERATION]

  - id: F10_ASSIGN_RELATIVE_WEIGHTS
    type: Operator
    label: Asignar pesos relativos
    sources: [SRC.ADP.OPERATION]

  - id: F11_ASSIGN_PRESENCE_MODE
    type: Operator
    label: Asignar modo de presencia
    sources: [SRC.ADP.OPERATION]

  - id: F12_ENFORCE_EPISTEMIC_SAFETY
    type: Validator
    label: Preservar seguridad epistemológica
    sources: [SRC.ADP.OPERATION]

  - id: F13_SERIALIZE_ACCD
    type: Operator
    label: Serializar construccion_conceptual
    sources: [SRC.ADP.OPERATION, SRC.ADP.CONTRACTS]

  - id: F14_RECONSTRUCTIVE_VALIDATION
    type: Validator
    label: Ejecutar validación reconstructiva
    sources: [SRC.ADP.OPERATION]

  - id: F15_EMIT_RESULT
    type: Operator
    label: Emitir resultados separados
    sources: [SRC.ADP.OPERATION, SRC.ADP.TEMPLATES]

  # ------------------------------------------------------------------
  # META
  # ------------------------------------------------------------------

  - id: CONCEPTUAL_TRACEABILITY
    type: TraceObject
    label: Trazabilidad conceptual
    sources: [SRC.META.TRACE]

  - id: SOURCE_IDEA
    type: TraceObject
    label: Idea fuente
    sources: [SRC.META.TRACE]

  - id: MODEL_DERIVED_DECISION
    type: TraceObject
    label: Decisión derivada del modelo
    sources: [SRC.META.TRACE]

  - id: EPISTEMIC_STATUS
    type: TraceObject
    label: Estado epistemológico
    sources: [SRC.META.TRACE]

  - id: FORMAL_GLOSSARY
    type: SourceUnit
    label: Glosario formal
    sources: [SRC.META.GLOSSARY]

  - id: CHANGELOG
    type: TraceObject
    label: Changelog
    sources: [SRC.META.CHANGELOG]

  - id: VERSION
    type: TraceObject
    label: Versión
    sources: [SRC.META.CHANGELOG]

  - id: PENDING_RESEARCH
    type: TraceObject
    label: Investigación pendiente
    sources: [SRC.META.CHANGELOG]
```

---

# 7. GRAFO DE RELACIONES NUCLEARES

Este bloque declara relaciones estructurales importantes. Debe tratarse como un grafo dirigido y tipado.

```yaml
edges:
  # Núcleo
  - [MTC_MIN, IS_A, MTC]
  - [MTC_CLOSED, IS_A, MTC]
  - [OPEN_LOOP_MTC, IS_A, MTC]
  - [CLOSED_LOOP_MTC, IS_A, MTC_CLOSED]

  - [MTC, PART_OF, TMC_FRAMEWORK]
  - [MTC, HAS_CONTRACT, CONTRACT]
  - [MTC, HAS_VALIDATOR, MTC_MEMBERSHIP]
  - [MTC, CONSTRAINS, MTC_DOMAIN_OF_VARIATION]
  - [MTC_INVARIANTS, CONSTRAINS, MTC]

  # Operador / objetivo / intervención
  - [OPERATOR, HAS_GOAL, GOAL]
  - [OPERATOR, PRODUCES, INTERVENTION]
  - [INTERVENTION, PERTURBS, COGNITIVE_STATE]
  - [MOTIVATIONAL_STRUCTURE, CONSTRAINS, COGNITIVE_STATE]

  # Transformación
  - [COGNITIVE_STATE, TRANSFORMS, COGNITIVE_STATE]
  - [TRANSFORMATION, TRANSFORMS, COGNITIVE_STATE]
  - [COGNITIVE_TRAJECTORY, PART_OF, MTC]
  - [MACROSTATE, IS_A, COGNITIVE_STATE]
  - [MICROSTATE, IS_A, COGNITIVE_STATE]
  - [TRANSFORMATION_CONTRACT, CONSTRAINS, TRANSFORMATION]
  - [CLOSURE_CONDITION, VALIDATES, TRANSFORMATION]
  - [TRANSFORMATION, CONTRASTS_WITH, TRANSDUCTION]

  # Transducción
  - [THETA_IC, IS_A, TRANSDUCTION]
  - [THETA_CA, IS_A, TRANSDUCTION]
  - [THETA_AM, IS_A, TRANSDUCTION]
  - [INTERVENTION, TRANSDUCES_TO, COGNITIVE_STATE]
  - [COGNITIVE_STATE, TRANSDUCES_TO, ACTION]
  - [ACTION, TRANSDUCES_TO, MANIFESTATION]
  - [AGENCY_INTERFACE, CONSTRAINS, THETA_CA]
  - [MULTILEVEL_TRANSDUCTION, PART_OF, MESO_MTC]

  # Estado ponderado
  - [COGNITIVE_STATE, IS_A, WEIGHTED_COGNITIVE_GRAPH]
  - [WEIGHTED_COGNITIVE_GRAPH, PART_OF, COGNITIVE_NODE]
  - [WEIGHTED_COGNITIVE_GRAPH, PART_OF, COGNITIVE_EDGE]
  - [COGNITIVE_NODE, HAS_STATE, NODE_WEIGHT]
  - [COGNITIVE_EDGE, HAS_STATE, EDGE_WEIGHT]
  - [ACTION_THRESHOLD, ENABLES, ACTION]
  - [OBSERVATION_INFERENCE, OBSERVES, COGNITIVE_STATE]

  # Pipeline
  - [COGNITIVE_PIPELINE, PART_OF, MTC]
  - [COGNITIVE_PIPELINE, PART_OF, STAGE]
  - [STAGE, PRECEDES, STAGE]
  - [TRANSITION, TRANSFORMS, COGNITIVE_STATE]
  - [GATE, BLOCKS, TRANSITION]
  - [BRANCH, BRANCHES_TO, STAGE]
  - [READY_TO_ACT, IS_A, COGNITIVE_STATE]
  - [READY_TO_ACT, ENABLES, ACTION]
  - [PIPELINE_FAILURES, VALIDATES, COGNITIVE_PIPELINE]

  # Capacidad / contexto / manifestación
  - [RECEIVER, HAS_CAPABILITY, CAPABILITY]
  - [PREEXISTING_CAPABILITY, IS_A, CAPABILITY]
  - [ENHANCED_CAPABILITY, IS_A, CAPABILITY]
  - [MOBILIZED_CAPABILITY, IS_A, CAPABILITY]
  - [ACTION, MOBILIZES, MOBILIZED_CAPABILITY]
  - [CAPABILITY, OPERATES_IN, CONTEXT]
  - [REALIZATION_FUNCTION, REQUIRES, ACTION]
  - [REALIZATION_FUNCTION, REQUIRES, CAPABILITY]
  - [REALIZATION_FUNCTION, REQUIRES, CONTEXT]
  - [REALIZATION_FUNCTION, PRODUCES, MANIFESTATION]
  - [COUNTERFACTUAL_CAPABILITY_TEST, VALIDATES, CAPABILITY]
  - [COUNTERFACTUAL_CONTEXT_TEST, VALIDATES, CONTEXT]
  - [MANIFESTATION, EVALUATED_BY, GOAL]

  # Feedback
  - [MANIFESTATION, PRODUCES, FEEDBACK]
  - [FEEDBACK, FEEDS_BACK_TO, INTERVENTION]
  - [FEEDBACK, UPDATES, TRANSFORMATION]
  - [FEEDBACK, UPDATES, CONTEXT]
  - [OBSERVABILITY, ENABLES, FEEDBACK]
  - [TRACE, OBSERVES, INTERVENTION]
  - [TRACE, OBSERVES, ACTION]
  - [TRACE, OBSERVES, MANIFESTATION]
  - [HUMAN_CONTROL, CONSTRAINS, UPDATE_POLICY]

  # Composición
  - [MICRO_MTC, IS_A, MTC]
  - [MESO_MTC, IS_A, MTC]
  - [MACRO_MTC, IS_A, MTC]
  - [MTC_COMPOSITION, CAN_COMPOSE_WITH, MTC]
  - [CASCADE_PATTERN, IS_A, MTC_COMPOSITION]
  - [NETWORK_PATTERN, IS_A, MTC_COMPOSITION]
  - [COMPOSITION_CONTRACT, CONSTRAINS, MTC_COMPOSITION]
  - [MTC, OUTPUT_FEEDS, MTC]

  # Contratos
  - [EPISTEMIC_CONTRACT, IS_A, CONTRACT]
  - [ETHICAL_CONTRACT, IS_A, CONTRACT]
  - [OPERATIONAL_CONTRACT, IS_A, CONTRACT]
  - [AUTHORITY_CONTRACT, IS_A, CONTRACT]
  - [TRUTH_ALIGNMENT, PART_OF, EPISTEMIC_CONTRACT]
  - [TRANSPARENCY, PART_OF, ETHICAL_CONTRACT]
  - [CONSENT, PART_OF, ETHICAL_CONTRACT]
  - [AUTONOMY, PART_OF, ETHICAL_CONTRACT]
  - [BENEFIT_ALIGNMENT, PART_OF, ETHICAL_CONTRACT]
  - [REVERSIBILITY, PART_OF, ETHICAL_CONTRACT]
  - [ASYMMETRY, PART_OF, ETHICAL_CONTRACT]
  - [HUMAN_SOVEREIGNTY, CONSTRAINS, AUTHORITY_CONTRACT]

  # Método de instanciación
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P0]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P1]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P2]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P3]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P4]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P5]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P6]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P7]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P8]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P9]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P10]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P11]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P12]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P13]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P14]
  - [MTC_INSTANTIATE_001, HAS_STEP, INST_P15]

  - [INST_P0, PRECEDES, INST_P1]
  - [INST_P1, PRECEDES, INST_P2]
  - [INST_P2, PRECEDES, INST_P3]
  - [INST_P3, PRECEDES, INST_P4]
  - [INST_P4, PRECEDES, INST_P5]
  - [INST_P5, PRECEDES, INST_P6]
  - [INST_P6, PRECEDES, INST_P7]
  - [INST_P7, PRECEDES, INST_P8]
  - [INST_P8, PRECEDES, INST_P9]
  - [INST_P9, PRECEDES, INST_P10]
  - [INST_P10, PRECEDES, INST_P11]
  - [INST_P11, PRECEDES, INST_P12]
  - [INST_P12, PRECEDES, INST_P13]
  - [INST_P13, PRECEDES, INST_P14]
  - [INST_P14, PRECEDES, INST_P15]

  - [INST_P1, PRODUCES, MANIFESTATION]
  - [INST_P2, PRODUCES, CAPABILITY]
  - [INST_P3, PRODUCES, CONTEXT]
  - [INST_P4, PRODUCES, ACTION]
  - [INST_P5, PRODUCES, COGNITIVE_STATE]
  - [INST_P6, PRODUCES, COGNITIVE_TRAJECTORY]
  - [INST_P7, PRODUCES, INTERVENTION]
  - [INST_P8, PRODUCES, MOTIVATIONAL_STRUCTURE]
  - [INST_P9, PRODUCES, OPERATOR]
  - [INST_P9, PRODUCES, GOAL]
  - [INST_P10, VALIDATES, TRANSFORMATION]
  - [INST_P10, VALIDATES, TRANSDUCTION]
  - [INST_P11, PRODUCES, FEEDBACK]
  - [INST_P12, PRODUCES, CONTRACT]
  - [INST_P13, VALIDATES, MTC_MEMBERSHIP]
  - [INST_P14, PRODUCES, MTC_INVARIANTS]
  - [INST_P14, PRODUCES, MTC_DOMAIN_OF_VARIATION]
  - [INST_P15, VALIDATES, SPECIALIZATION]

  # Especialización
  - [SPECIALIZATION, SPECIALIZES, MTC]
  - [SPECIALIZATION_TEMPLATE, PRODUCES, SPECIALIZATION]
  - [INHERITED_CORE, CONSTRAINS, SPECIALIZATION]
  - [ADDED_ROLES, PART_OF, SPECIALIZATION]
  - [MANDATORY_CONSTRAINTS, CONSTRAINS, SPECIALIZATION]
  - [ACCEPTANCE_TESTS, VALIDATES, SPECIALIZATION]

  # Tests MTC
  - [T_MTC_01, VALIDATES, INTERVENTION]
  - [T_MTC_02, VALIDATES, COGNITIVE_TRAJECTORY]
  - [T_MTC_03, VALIDATES, ACTION]
  - [T_MTC_04, VALIDATES, CAPABILITY]
  - [T_MTC_05, VALIDATES, CONTEXT]
  - [T_MTC_06, VALIDATES, MANIFESTATION]
  - [T_MTC_07, VALIDATES, MTC]
  - [TRANSFORMATION_TRANSDUCTION_TEST, VALIDATES, TRANSFORMATION]
  - [TRANSFORMATION_TRANSDUCTION_TEST, VALIDATES, TRANSDUCTION]
  - [NON_MTC_FALLING_STONE, CONTRASTS_WITH, MTC]
  - [NON_MTC_COMPILER, CONTRASTS_WITH, MTC]
  - [REFLEX_BOUNDARY_CASE, CONTRASTS_WITH, MTC]
  - [SERIALIZABLE_MTC_INSTANCE, PRODUCES, INSTANCE_SCHEMA]

  # Fraude
  - [FRAUD_MTC, SPECIALIZES, MTC]
  - [JEANNE, INSTANTIATES, OPERATOR]
  - [ROHAN, INSTANTIATES, RECEIVER]
  - [ROHAN, HAS_STATE, DESIRED_STATE_X]
  - [ROHAN, HAS_CAPABILITY, VICTIM_VALUE_V]
  - [W_TILDE, CONTRASTS_WITH, W_STAR]
  - [W_TILDE, INSTANTIATES, INTERVENTION]
  - [FRAUD_OPACITY, CONSTRAINS, FRAUD_MTC]
  - [FRAUD_VERIFICATION, BLOCKS, FRAUD_OPACITY]
  - [JEWELERS, PART_OF, CONTEXT]
  - [VICTIM_VALUE_V, IS_A, CAPABILITY]
  - [DIAMOND_NECKLACE_MANIFESTATION, IS_A, MANIFESTATION]
  - [ROHAN, PRODUCES, ACTION]
  - [ACTION, MOBILIZES, VICTIM_VALUE_V]
  - [VICTIM_VALUE_V, OPERATES_IN, CONTEXT]
  - [JEWELERS, PRODUCES, DIAMOND_NECKLACE_MANIFESTATION]
  - [COLLAR_TO_TITLE_TEST, VALIDATES, MTC_DOMAIN_OF_VARIATION]

  # Publicidad
  - [ADVERTISING_MTC, SPECIALIZES, MTC]
  - [AIDA_TRAJECTORY, PART_OF, ADVERTISING_MTC]
  - [ATTENTION, PRECEDES, INTEREST]
  - [INTEREST, PRECEDES, DESIRE]
  - [DESIRE, PRECEDES, PURCHASE_INTENTION]
  - [PURCHASE_INTENTION, ENABLES, PURCHASE_ACTION]
  - [PURCHASE_ACTION, MOBILIZES, ECONOMIC_CAPABILITY]
  - [ECONOMIC_CAPABILITY, OPERATES_IN, CONTEXT]
  - [TRANSACTION, IS_A, MANIFESTATION]
  - [PURCHASE_TO_LEAD_TEST, VALIDATES, MTC_DOMAIN_OF_VARIATION]

  # Educación
  - [EDUCATION_MTC, SPECIALIZES, MTC]
  - [LEARNER, INSTANTIATES, RECEIVER]
  - [EXPLANATION, INSTANTIATES, INTERVENTION]
  - [OPERABLE_MODEL, IS_A, COGNITIVE_STATE]
  - [COMPETENCE, IS_A, CAPABILITY]
  - [DYNAMIC_CAPABILITY, IS_A, CAPABILITY]
  - [DYNAMIC_CAPABILITY, PRODUCES, COMPETENCE]
  - [TRANSFER, IS_A, MANIFESTATION]
  - [EXPLANATION_TO_TRANSFER_TEST, VALIDATES, EDUCATION_MTC]

  # Institución
  - [INSTITUTIONAL_MTC, SPECIALIZES, MTC]
  - [AUTHORITY, IS_A, CAPABILITY]
  - [NORM, INSTANTIATES, INTERVENTION]
  - [OBLIGATION, IS_A, COGNITIVE_STATE]
  - [INSTITUTIONAL_CAPABILITY, IS_A, CAPABILITY]
  - [COMPLIANCE, INSTANTIATES, ACTION]
  - [INSTITUTIONAL_MANIFESTATION, IS_A, MANIFESTATION]
  - [ORDER_TO_EVACUATION_TEST, VALIDATES, INSTITUTIONAL_MTC]

  # Comparación
  - [SPECIALIZATION_COMPARISON, REQUIRES, FRAUD_MTC]
  - [SPECIALIZATION_COMPARISON, REQUIRES, ADVERTISING_MTC]
  - [SPECIALIZATION_COMPARISON, REQUIRES, EDUCATION_MTC]
  - [SPECIALIZATION_COMPARISON, REQUIRES, INSTITUTIONAL_MTC]
  - [SHARED_TOPOLOGY, PART_OF, MTC]
  - [CONTRACT_DIFFERENCE, CONSTRAINS, SPECIALIZATION_COMPARISON]

  # Integración con otras arquitecturas
  - [MTC, IS_A, TMC_FRAMEWORK]
  - [COGNICION_CENTRAL, CONSTRAINS, MTC]
  - [HUMAN_SOVEREIGNTY, PART_OF, COGNICION_CENTRAL]
  - [CORRECCION_ACUMULATIVA, CAN_COMPOSE_WITH, FEEDBACK]
  - [TRANSFORMADOR_COGNITIVO, CAN_COMPOSE_WITH, MTC]
  - [ACSI, PRODUCES, CONTENT_STRUCTURE]
  - [ACCD, PRODUCES, CONTEXTUAL_INTERVENTION]
  - [CONTENT_STRUCTURE, OUTPUT_FEEDS, ACCD]
  - [CONTEXTUAL_INTERVENTION, INSTANTIATES, INTERVENTION]
  - [MTC, PRODUCES, RECEIVER_EFFECT]

  # Adaptador nativo MTC → construccion_conceptual
  - [MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER, PART_OF, MTC]
  - [MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER, REQUIRES, MTC_OUTPUT_FOR_ADAPTER]
  - [MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER, PRODUCES, CONCEPTUAL_CONSTRUCTION]
  - [MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER, PRODUCES, ADAPTER_TRACE_SIDECAR]
  - [MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER, PRODUCES, ADAPTER_VALIDATION_REPORT]
  - [MTC_OUTPUT_FOR_ADAPTER, DERIVED_FROM, SERIALIZABLE_MTC_INSTANCE]
  - [PRESERVING_COMPRESSION, PART_OF, MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER]
  - [CONCEPTUAL_DERIVATION_MAP, PART_OF, PRESERVING_COMPRESSION]
  - [PRESERVATION_OBLIGATIONS, CONSTRAINS, PRESERVING_COMPRESSION]
  - [CONCEPTUAL_CONSTRUCTION, PART_OF, ACCD]
  - [CONCEPTUAL_CONSTRUCTION, OUTPUT_FEEDS, ACCD]
  - [ACTIVE_IDEA_COLLECTION, PART_OF, CONCEPTUAL_CONSTRUCTION]
  - [ACTIVE_IDEA, PART_OF, ACTIVE_IDEA_COLLECTION]
  - [RECONSTRUCTIVE_VALIDATION, VALIDATES, CONCEPTUAL_CONSTRUCTION]
  - [ADAPTER_TRACE_SIDECAR, SUPPORTED_BY, MTC_OUTPUT_FOR_ADAPTER]
  - [ACCD, PRODUCES, ACCD_CODOMAIN_MANIFESTATION]
  - [CONCEPTUAL_CONSTRUCTION, CONTRASTS_WITH, ACCD_CODOMAIN_MANIFESTATION]

  - [F00_CONTRACT_PREFLIGHT, PRECEDES, F01_FORMULATE_MTC_REQUEST]
  - [F01_FORMULATE_MTC_REQUEST, PRECEDES, F02_VALIDATE_MTC_DELIVERY]
  - [F02_VALIDATE_MTC_DELIVERY, PRECEDES, F03_BUILD_DERIVATION_MAP]
  - [F03_BUILD_DERIVATION_MAP, PRODUCES, CONCEPTUAL_DERIVATION_MAP]
  - [F03_BUILD_DERIVATION_MAP, PRECEDES, F04_IDENTIFY_CONCEPTUAL_KERNEL]
  - [F04_IDENTIFY_CONCEPTUAL_KERNEL, PRECEDES, F05_DECLARE_PRESERVATION_OBLIGATIONS]
  - [F05_DECLARE_PRESERVATION_OBLIGATIONS, PRODUCES, PRESERVATION_OBLIGATIONS]
  - [F05_DECLARE_PRESERVATION_OBLIGATIONS, PRECEDES, F06_PROPOSITIONAL_DECOMPOSITION]
  - [F06_PROPOSITIONAL_DECOMPOSITION, PRECEDES, F07_FILTER_AND_MERGE]
  - [F07_FILTER_AND_MERGE, PRECEDES, F08_BUILD_IDEA_GRAPH]
  - [F08_BUILD_IDEA_GRAPH, PRECEDES, F09_ASSIGN_CONCEPTUAL_ROLES]
  - [F09_ASSIGN_CONCEPTUAL_ROLES, PRECEDES, F10_ASSIGN_RELATIVE_WEIGHTS]
  - [F10_ASSIGN_RELATIVE_WEIGHTS, PRECEDES, F11_ASSIGN_PRESENCE_MODE]
  - [F11_ASSIGN_PRESENCE_MODE, PRECEDES, F12_ENFORCE_EPISTEMIC_SAFETY]
  - [F12_ENFORCE_EPISTEMIC_SAFETY, PRECEDES, F13_SERIALIZE_ACCD]
  - [F13_SERIALIZE_ACCD, PRODUCES, CONCEPTUAL_CONSTRUCTION]
  - [F13_SERIALIZE_ACCD, PRECEDES, F14_RECONSTRUCTIVE_VALIDATION]
  - [F14_RECONSTRUCTIVE_VALIDATION, VALIDATES, CONCEPTUAL_CONSTRUCTION]
  - [F14_RECONSTRUCTIVE_VALIDATION, PRECEDES, F15_EMIT_RESULT]
  - [F15_EMIT_RESULT, PRODUCES, ADAPTER_TRACE_SIDECAR]
  - [F15_EMIT_RESULT, PRODUCES, ADAPTER_VALIDATION_REPORT]

  # Meta / trazabilidad
  - [CONCEPTUAL_TRACEABILITY, OBSERVES, MTC]
  - [SOURCE_IDEA, PART_OF, CONCEPTUAL_TRACEABILITY]
  - [MODEL_DERIVED_DECISION, PART_OF, CONCEPTUAL_TRACEABILITY]
  - [EPISTEMIC_STATUS, MARKS_STATUS, SOURCE_IDEA]
  - [EPISTEMIC_STATUS, MARKS_STATUS, MODEL_DERIVED_DECISION]
  - [CHANGELOG, OBSERVES, VERSION]
  - [PENDING_RESEARCH, PART_OF, CHANGELOG]
```

---

# 8. VISTA MACRO DEL GRAFO

```text
                              HUMAN_SOVEREIGNTY
                                      │
                                      ▼
                               COGNICION_CENTRAL
                                      │
                                      ▼
                                     MTC
          ┌───────────────────────────┼───────────────────────────┐
          │                           │                           │
          ▼                           ▼                           ▼
     MTC_INVARIANTS             CONTRACT                    MTC_MEMBERSHIP
          │                           │                           │
          ▼                           ▼                           ▼
      identidad              límites/autoridad              validación

                                     MTC
                                      │
                                      ▼
                                  OPERATOR
                                      │
                                produces
                                      ▼
                                INTERVENTION
                                      │
                                 perturbs
                                      ▼
                              COGNITIVE_STATE
                                      │
                             TRANSFORMATION τ
                                      ▼
                               COGNITIVE_STATE*
                                      │
                              TRANSDUCTION θ_CA
                                      ▼
                                   ACTION
                                      │
                                  mobilizes
                                      ▼
                                 CAPABILITY
                                      │
                                operates in
                                      ▼
                                  CONTEXT
                                      │
                       A + V + K --ρ-->│
                                      ▼
                               MANIFESTATION
                                      │
                                evaluated by
                                      ▼
                                    GOAL
                                      │
                                      ▼
                                  FEEDBACK
                                      │
                                  updates
                                      └──────────────→ INTERVENTION / τ / K
```

---

# 9. VECINDARIOS COGNITIVOS

Un vecindario es un subgrafo funcional que puede activarse sin cargar toda MTC.

```yaml
cognitive_neighborhoods:
  CORE:
    purpose: comprender identidad mínima de MTC
    seed_nodes:
      - MTC
      - INTERVENTION
      - COGNITIVE_STATE
      - TRANSFORMATION
      - TRANSDUCTION
      - ACTION
      - CAPABILITY
      - CONTEXT
      - MANIFESTATION
    expand:
      - MTC_INVARIANTS
      - MTC_DOMAIN_OF_VARIATION

  COGNITIVE_CHANGE:
    purpose: explicar cómo cambia la configuración interna de un receptor
    seed_nodes:
      - INTERVENTION
      - MOTIVATIONAL_STRUCTURE
      - COGNITIVE_STATE
      - TRANSFORMATION
      - WEIGHTED_COGNITIVE_GRAPH
      - COGNITIVE_TRAJECTORY
      - MACROSTATE
      - MICROSTATE
      - ACTION_THRESHOLD

  TRANSDUCTION_CHAIN:
    purpose: explicar cruces entre información, cognición, conducta y mundo
    seed_nodes:
      - TRANSDUCTION
      - THETA_IC
      - THETA_CA
      - THETA_AM
      - AGENCY_INTERFACE
      - ACTION
      - MANIFESTATION

  SOCIAL_REALIZATION:
    purpose: explicar por qué una acción produce efectos externos
    seed_nodes:
      - ACTION
      - CAPABILITY
      - CONTEXT
      - REALIZATION_FUNCTION
      - MANIFESTATION
      - COUNTERFACTUAL_CAPABILITY_TEST
      - COUNTERFACTUAL_CONTEXT_TEST

  ADAPTIVE_LOOP:
    purpose: explicar sistemas que se ajustan a evidencia
    seed_nodes:
      - CLOSED_LOOP_MTC
      - FEEDBACK
      - OBSERVABILITY
      - TRACE
      - UPDATE_POLICY
      - HUMAN_CONTROL

  PIPELINE:
    purpose: analizar secuencias por stages y gates
    seed_nodes:
      - COGNITIVE_PIPELINE
      - STAGE
      - TRANSITION
      - GATE
      - BRANCH
      - READY_TO_ACT
      - PIPELINE_FAILURES

  COMPOSITION:
    purpose: analizar máquinas anidadas o encadenadas
    seed_nodes:
      - MICRO_MTC
      - MESO_MTC
      - MACRO_MTC
      - MTC_COMPOSITION
      - CASCADE_PATTERN
      - NETWORK_PATTERN
      - COMPOSITION_CONTRACT

  INSTANTIATION:
    purpose: construir una instancia MTC desde un fenómeno
    seed_nodes:
      - MTC_INSTANTIATE_001
      - MTC_MEMBERSHIP
      - INSTANCE_GATES
      - SERIALIZABLE_MTC_INSTANCE

  VALIDATION:
    purpose: decidir si un fenómeno pertenece a MTC y detectar falsos positivos
    seed_nodes:
      - T_MTC_01
      - T_MTC_02
      - T_MTC_03
      - T_MTC_04
      - T_MTC_05
      - T_MTC_06
      - T_MTC_07
      - TRANSFORMATION_TRANSDUCTION_TEST
      - NON_MTC_FALLING_STONE
      - NON_MTC_COMPILER
      - REFLEX_BOUNDARY_CASE

  SPECIALIZATION:
    purpose: derivar una subclase reutilizable de MTC
    seed_nodes:
      - SPECIALIZATION
      - SPECIALIZATION_TEMPLATE
      - INHERITED_CORE
      - MANDATORY_CONSTRAINTS
      - ACCEPTANCE_TESTS
      - MTC_INVARIANTS
      - MTC_DOMAIN_OF_VARIATION

  FRAUD:
    purpose: analizar fraude como conversión cognitiva adversarial
    seed_nodes:
      - FRAUD_MTC
      - JEANNE
      - ROHAN
      - DESIRED_STATE_X
      - VICTIM_VALUE_V
      - W_STAR
      - W_TILDE
      - FRAUD_OPACITY
      - FRAUD_VERIFICATION
      - JEWELERS
      - DIAMOND_NECKLACE_MANIFESTATION
      - COLLAR_TO_TITLE_TEST

  ADVERTISING:
    purpose: analizar persuasión comercial
    seed_nodes:
      - ADVERTISING_MTC
      - AIDA_TRAJECTORY
      - ATTENTION
      - INTEREST
      - DESIRE
      - PURCHASE_INTENTION
      - PURCHASE_ACTION
      - ECONOMIC_CAPABILITY
      - TRANSACTION

  EDUCATION:
    purpose: analizar aprendizaje como transformación y capacidad
    seed_nodes:
      - EDUCATION_MTC
      - LEARNER
      - EXPLANATION
      - OPERABLE_MODEL
      - COMPETENCE
      - DYNAMIC_CAPABILITY
      - TRANSFER

  INSTITUTIONAL:
    purpose: analizar norma, autoridad y realización institucional
    seed_nodes:
      - INSTITUTIONAL_MTC
      - AUTHORITY
      - NORM
      - OBLIGATION
      - INSTITUTIONAL_CAPABILITY
      - COMPLIANCE
      - INSTITUTIONAL_MANIFESTATION

  CONTRACTS:
    purpose: diferenciar topología de legitimidad, verdad y autorización
    seed_nodes:
      - EPISTEMIC_CONTRACT
      - ETHICAL_CONTRACT
      - OPERATIONAL_CONTRACT
      - AUTHORITY_CONTRACT
      - TRUTH_ALIGNMENT
      - TRANSPARENCY
      - CONSENT
      - AUTONOMY
      - BENEFIT_ALIGNMENT
      - REVERSIBILITY
      - ASYMMETRY

  INTEGRATION:
    purpose: ubicar MTC dentro del ecosistema COGNICIÓN_CENTRAL
    seed_nodes:
      - TMC_FRAMEWORK
      - COGNICION_CENTRAL
      - TRANSFORMADOR_COGNITIVO
      - ACSI
      - ACCD
      - CONTENT_STRUCTURE
      - CONTEXTUAL_INTERVENTION
      - RECEIVER_EFFECT

  MTC_TO_CONCEPTUAL_CONSTRUCTION:
    purpose: convertir una salida MTC validada en construccion_conceptual sin reejecutar MTC ni anticipar ACCD
    activation_gate:
      - destination_is_construccion_conceptual
      - mtc_runtime_ready
      - adapter_bundle_available
    seed_nodes:
      - MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER
      - MTC_OUTPUT_FOR_ADAPTER
      - PRESERVING_COMPRESSION
      - CONCEPTUAL_DERIVATION_MAP
      - PRESERVATION_OBLIGATIONS
      - CONCEPTUAL_CONSTRUCTION
      - ACTIVE_IDEA_COLLECTION
      - ACTIVE_IDEA
      - ADAPTER_TRACE_SIDECAR
      - ADAPTER_VALIDATION_REPORT
      - RECONSTRUCTIVE_VALIDATION
    execution_nodes:
      - F00_CONTRACT_PREFLIGHT
      - F01_FORMULATE_MTC_REQUEST
      - F02_VALIDATE_MTC_DELIVERY
      - F03_BUILD_DERIVATION_MAP
      - F04_IDENTIFY_CONCEPTUAL_KERNEL
      - F05_DECLARE_PRESERVATION_OBLIGATIONS
      - F06_PROPOSITIONAL_DECOMPOSITION
      - F07_FILTER_AND_MERGE
      - F08_BUILD_IDEA_GRAPH
      - F09_ASSIGN_CONCEPTUAL_ROLES
      - F10_ASSIGN_RELATIVE_WEIGHTS
      - F11_ASSIGN_PRESENCE_MODE
      - F12_ENFORCE_EPISTEMIC_SAFETY
      - F13_SERIALIZE_ACCD
      - F14_RECONSTRUCTIVE_VALIDATION
      - F15_EMIT_RESULT
    hard_boundaries:
      - no_duplicate_mtc
      - no_guion_or_codomain_manifestation
      - no_trace_fields_inside_accd_port

  META:
    purpose: gobernar procedencia y evolución
    seed_nodes:
      - CONCEPTUAL_TRACEABILITY
      - EPISTEMIC_STATUS
      - CHANGELOG
      - VERSION
      - PENDING_RESEARCH
```

---

# 10. OPERADORES COGNITIVOS LOCALES

Estos operadores definen **qué puede hacer una IA con el grafo MTC**.

```yaml
operators:
  - id: OP_RECOVER
    purpose: recuperar nodos y fuentes pertinentes
    inputs: [intent, optional_seed]
    outputs: [activated_nodes, source_bindings]

  - id: OP_BUILD_WORKING_SUBGRAPH
    purpose: construir MTC-WORK con dependencias mínimas suficientes
    inputs: [activated_nodes, edge_types]
    outputs: [working_subgraph]

  - id: OP_DECOMPOSE
    purpose: separar fenómeno en intervención, estado, acción, capacidad, contexto y manifestación
    inputs: [phenomenon]
    outputs: [candidate_components]

  - id: OP_IDENTIFY_Q
    purpose: reconstruir estructura motivacional o normativa
    inputs: [receiver, evidence]
    outputs: [motivational_structure_candidate]

  - id: OP_TRACE_TRANSFORMATION
    purpose: reconstruir EC0→EC*
    inputs: [intervention, receiver]
    outputs: [cognitive_trajectory, transformation_candidates]

  - id: OP_TRACE_TRANSDUCTION
    purpose: localizar cruces entre dominios
    inputs: [trajectory, action, manifestation]
    outputs: [theta_chain]

  - id: OP_IDENTIFY_ACTION
    purpose: separar conducta ejecutada de estado interno
    inputs: [phenomenon]
    outputs: [action_candidate]

  - id: OP_IDENTIFY_CAPABILITY
    purpose: localizar la capacidad que vuelve eficaz la acción
    inputs: [actor, action, manifestation]
    outputs: [capability_candidate]
    validator: COUNTERFACTUAL_CAPABILITY_TEST

  - id: OP_IDENTIFY_CONTEXT
    purpose: localizar condiciones que permiten operar a V
    inputs: [capability, manifestation]
    outputs: [context_candidate]
    validator: COUNTERFACTUAL_CONTEXT_TEST

  - id: OP_IDENTIFY_MANIFESTATION
    purpose: describir el cambio externo observable sin colapsarlo con V
    inputs: [before_state, after_state]
    outputs: [manifestation_candidate]

  - id: OP_RECONSTRUCT_MTC
    purpose: ensamblar una instancia completa
    inputs: [components]
    outputs: [mtc_instance]
    method: MTC_INSTANTIATE_001

  - id: OP_VALIDATE_MEMBERSHIP
    purpose: decidir pertenencia provisional a MTC
    inputs: [mtc_instance]
    outputs: [membership_result, failures]
    validators:
      - T_MTC_01
      - T_MTC_02
      - T_MTC_03
      - T_MTC_04
      - T_MTC_05
      - T_MTC_06
      - T_MTC_07

  - id: OP_SPECIALIZE
    purpose: crear una especialización reutilizable
    inputs: [validated_instances]
    outputs: [specialization_candidate]
    method: SPECIALIZATION_TEMPLATE

  - id: OP_ABSTRACT
    purpose: retirar identidades concretas y conservar estructura
    inputs: [instance]
    outputs: [invariants, variation_domain]

  - id: OP_COMPARE
    purpose: comparar dos MTC o especializaciones por correspondencia estructural
    inputs: [graph_a, graph_b]
    outputs: [shared_structure, differences, limits]

  - id: OP_COUNTERFACTUAL_CAPABILITY
    purpose: eliminar V y comprobar si M sigue siendo explicable por el mismo mecanismo
    inputs: [instance]
    outputs: [capability_necessity_result]

  - id: OP_COUNTERFACTUAL_CONTEXT
    purpose: modificar K y observar cambio de realizabilidad
    inputs: [instance]
    outputs: [context_sensitivity_result]

  - id: OP_SIMULATE_FORWARD
    purpose: recorrer O→I→EC→A→V→K→M
    inputs: [instance]
    outputs: [forward_flow]

  - id: OP_RECONSTRUCT_BACKWARD
    purpose: partir de M y reconstruir V→A→EC→I
    inputs: [manifestation]
    outputs: [causal_reconstruction]

  - id: OP_TRACE_FEEDBACK
    purpose: reconstruir M→F→actualización
    inputs: [closed_loop_instance]
    outputs: [feedback_loop]

  - id: OP_COMPOSE
    purpose: conectar varias MTC por salidas/entradas compatibles
    inputs: [mtc_a, mtc_b]
    outputs: [composed_mtc]
    validator: COMPOSITION_CONTRACT

  - id: OP_CLASSIFY_SPECIALIZATION
    purpose: determinar si el caso se aproxima a fraude, publicidad, educación, institucional u otra clase
    inputs: [validated_instance]
    outputs: [specialization_candidates, confidence]

  - id: OP_MARK_EPISTEMIC_STATUS
    purpose: etiquetar cada afirmación como fuente, síntesis, inferencia, hipótesis o decisión de diseño
    inputs: [claim]
    outputs: [epistemic_label]

  - id: OP_EXPLAIN
    purpose: convertir un subgrafo en explicación preservando relaciones
    inputs: [working_subgraph, audience]
    outputs: [structured_explanation]

  - id: OP_GENERATE_GRAPH_VIEW
    purpose: proyectar el subgrafo como Mermaid, ASCII o lista tipada
    inputs: [working_subgraph, format]
    outputs: [graph_view]

  - id: OP_VALIDATE_CONTRACTS
    purpose: revisar diferencias epistemológicas, éticas y de autoridad
    inputs: [instance_or_specialization]
    outputs: [contract_report]

  - id: OP_PREPARE_MTC_OUTPUT_FOR_ADAPTER
    purpose: proyectar una instancia MTC ya validada como MTC_OUTPUT_PARA_ADAPTADOR sin perder claims, invariantes, epistemología ni traza
    inputs: [validated_mtc_instance, mtc_execution_trace, mtc_epistemic_labels]
    outputs: [mtc_output_para_adaptador]
    contract: SRC.ADP.CONTRACTS

  - id: OP_EXECUTE_MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER
    purpose: ejecutar F00..F15 como una sola operación cognitiva gobernada
    inputs: [mtc_output_para_adaptador, accd_conceptual_construction_contract, human_objective]
    outputs: [construccion_conceptual, trazabilidad_del_adaptador, informe_de_validacion]
    method: MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER
    validators:
      - QG-ADP-01..QG-ADP-12
      - T-REC-01..T-REC-08

  - id: OP_VALIDATE_CONCEPTUAL_CONSTRUCTION_OUTPUT
    purpose: comprobar esquema ACCD, no-colapso, seguridad epistemológica, trazabilidad y reconstructibilidad
    inputs: [construccion_conceptual, trazabilidad_del_adaptador, mtc_output_para_adaptador]
    outputs: [adapter_validation_result, repair_target]
    validator: RECONSTRUCTIVE_VALIDATION

  - id: OP_REQUEST_DIRECTED_MTC_EXTENSION
    purpose: pedir a MTC únicamente la ampliación necesaria cuando F02 detecta insuficiencia
    inputs: [missing_contract_element, current_mtc_output]
    outputs: [directed_mtc_request]
    constraint: el adaptador no ejecuta por sí mismo la cognición MTC ausente
```

---

# 11. POLÍTICA DE RUTEO

El router traduce intención humana a vecindarios y operadores.

```yaml
routing_rules:
  - intent: define_mtc
    neighborhoods: [CORE]
    operators: [OP_RECOVER, OP_BUILD_WORKING_SUBGRAPH, OP_EXPLAIN]

  - intent: explain_cognitive_change
    neighborhoods: [COGNITIVE_CHANGE]
    operators: [OP_TRACE_TRANSFORMATION, OP_EXPLAIN]

  - intent: explain_transduction
    neighborhoods: [TRANSDUCTION_CHAIN]
    operators: [OP_TRACE_TRANSDUCTION, OP_EXPLAIN]

  - intent: explain_why_action_has_effect
    neighborhoods: [SOCIAL_REALIZATION]
    operators:
      - OP_IDENTIFY_ACTION
      - OP_IDENTIFY_CAPABILITY
      - OP_IDENTIFY_CONTEXT
      - OP_IDENTIFY_MANIFESTATION
      - OP_EXPLAIN

  - intent: analyze_new_case_as_mtc
    neighborhoods: [CORE, INSTANTIATION, VALIDATION]
    operators:
      - OP_DECOMPOSE
      - OP_RECONSTRUCT_BACKWARD
      - OP_RECONSTRUCT_MTC
      - OP_VALIDATE_MEMBERSHIP

  - intent: design_forward_mtc
    neighborhoods:
      [
        CORE,
        COGNITIVE_CHANGE,
        TRANSDUCTION_CHAIN,
        SOCIAL_REALIZATION,
        CONTRACTS,
      ]
    operators:
      - OP_SIMULATE_FORWARD
      - OP_VALIDATE_CONTRACTS

  - intent: analyze_fraud
    neighborhoods: [FRAUD, COGNITIVE_CHANGE, SOCIAL_REALIZATION, CONTRACTS]
    operators:
      - OP_IDENTIFY_Q
      - OP_TRACE_TRANSFORMATION
      - OP_TRACE_TRANSDUCTION
      - OP_IDENTIFY_CAPABILITY
      - OP_IDENTIFY_CONTEXT
      - OP_VALIDATE_MEMBERSHIP
      - OP_VALIDATE_CONTRACTS

  - intent: analyze_advertising
    neighborhoods:
      [ADVERTISING, PIPELINE, COGNITIVE_CHANGE, ADAPTIVE_LOOP, CONTRACTS]
    operators:
      - OP_TRACE_TRANSFORMATION
      - OP_IDENTIFY_CAPABILITY
      - OP_TRACE_FEEDBACK
      - OP_VALIDATE_CONTRACTS

  - intent: analyze_learning
    neighborhoods: [EDUCATION, COGNITIVE_CHANGE, SOCIAL_REALIZATION, VALIDATION]
    operators:
      - OP_TRACE_TRANSFORMATION
      - OP_IDENTIFY_CAPABILITY
      - OP_IDENTIFY_MANIFESTATION
      - OP_COUNTERFACTUAL_CAPABILITY

  - intent: analyze_institution
    neighborhoods: [INSTITUTIONAL, COMPOSITION, CONTRACTS]
    operators:
      - OP_TRACE_TRANSDUCTION
      - OP_IDENTIFY_CAPABILITY
      - OP_IDENTIFY_CONTEXT
      - OP_COMPOSE

  - intent: compare_specializations
    neighborhoods:
      [SPECIALIZATION, FRAUD, ADVERTISING, EDUCATION, INSTITUTIONAL, CONTRACTS]
    operators: [OP_COMPARE, OP_ABSTRACT]

  - intent: create_new_specialization
    neighborhoods: [SPECIALIZATION, INSTANTIATION, VALIDATION]
    operators:
      - OP_VALIDATE_MEMBERSHIP
      - OP_ABSTRACT
      - OP_SPECIALIZE

  - intent: validate_mtc_membership
    neighborhoods: [VALIDATION]
    operators: [OP_VALIDATE_MEMBERSHIP]

  - intent: show_graph
    neighborhoods: [CORE]
    operators: [OP_GENERATE_GRAPH_VIEW]

  - intent: trace_sources
    neighborhoods: [META]
    operators: [OP_RECOVER, OP_MARK_EPISTEMIC_STATUS]

  - intent: integrate_with_cc_accd_acsi
    neighborhoods: [INTEGRATION]
    operators: [OP_COMPARE, OP_COMPOSE, OP_EXPLAIN]

  - intent: explain_mtc_to_conceptual_construction_adapter
    neighborhoods: [INTEGRATION, MTC_TO_CONCEPTUAL_CONSTRUCTION]
    operators: [OP_RECOVER, OP_BUILD_WORKING_SUBGRAPH, OP_EXPLAIN]

  - intent: convert_mtc_to_construccion_conceptual
    neighborhoods: [INSTANTIATION, VALIDATION, MTC_TO_CONCEPTUAL_CONSTRUCTION]
    preconditions:
      - MTC_READY
      - MTC_ADAPTER_READY
      - destination_is_construccion_conceptual
    operators:
      - OP_VALIDATE_MEMBERSHIP
      - OP_PREPARE_MTC_OUTPUT_FOR_ADAPTER
      - OP_EXECUTE_MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER
      - OP_VALIDATE_CONCEPTUAL_CONSTRUCTION_OUTPUT

  - intent: prepare_conceptual_port_for_accd
    neighborhoods: [MTC_TO_CONCEPTUAL_CONSTRUCTION]
    preconditions:
      - validated_mtc_output_available
    operators:
      - OP_EXECUTE_MTC_TO_CONCEPTUAL_CONSTRUCTION_ADAPTER
      - OP_VALIDATE_CONCEPTUAL_CONSTRUCTION_OUTPUT
```

## 11.1. Fallback del router

Si la intención no coincide con una regla:

```text
1. ejecutar OP_DECOMPOSE sobre la solicitud;
2. identificar si pregunta por:
   a) estado,
   b) transformación,
   c) acción,
   d) capacidad,
   e) contexto,
   f) manifestación,
   g) feedback,
   h) especialización;
   i) conversión hacia `construccion_conceptual`;
3. activar el vecindario más cercano;
4. expandir sólo dependencias necesarias;
5. declarar incertidumbre de ruteo si quedan dos rutas plausibles.
```

---

# 12. RECETAS DE EJECUCIÓN

## 12.1. RECIPE-A — Explicar un fenómeno desde su manifestación

```text
INPUT: M observable

M
↓ OP_RECONSTRUCT_BACKWARD
V candidato
↓
A candidata
↓
EC* candidato
↓
trayectoria cognitiva
↓
I candidata
↓
OP_VALIDATE_MEMBERSHIP
↓
explicación MTC
```

Gates:

```text
G1 M ≠ V
G2 A ≠ EC
G3 V sobrevive prueba contrafactual
G4 K explica realizabilidad
G5 no hay salto mágico entre dominios
```

---

## 12.2. RECIPE-B — Diseñar una cadena hacia una manifestación

```text
GOAL G
↓
definir M válida
↓
identificar V necesaria
↓
identificar K necesario
↓
definir A que moviliza V
↓
definir EC* compatible con A
↓
diseñar trayectoria EC0→EC*
↓
diseñar I
↓
declarar contratos
↓
simular
↓
validar
```

Esta receta es de diseño. No autoriza por sí misma intervención real.

---

## 12.3. RECIPE-C — Analizar fraude

```text
1. identificar receptor/víctima R;
2. identificar X dentro de Q;
3. identificar V poseída por R;
4. distinguir W* y W~;
5. listar señales que instalan W~;
6. reconstruir EC0→EC*;
7. identificar A;
8. identificar cómo A moviliza V;
9. identificar K;
10. identificar M;
11. localizar condición de opacidad;
12. localizar rutas de verificación;
13. ejecutar sustitución de M;
14. separar juego central de consecuencias posteriores;
15. marcar hechos históricos vs inferencias del modelo.
```

---

## 12.4. RECIPE-D — Construir una nueva especialización

```text
caso 1 validado
+
caso 2 validado
+
caso 3 si es posible
↓
OP_COMPARE
↓
estructura compartida
↓
OP_ABSTRACT
↓
invariantes candidatos
+
dominio de variación
↓
SPECIALIZATION_TEMPLATE
↓
acceptance tests
↓
contraejemplo
↓
especialización candidata
```

Regla:

```text
UNA INSTANCIA
NO BASTA
PARA DECLARAR UNIVERSALIDAD
```

---

## 12.5. RECIPE-E — Comparar transformación y transducción

```text
¿la operación permanece en el mismo dominio?
  │
  ├── SÍ → TRANSFORMATION
  │
  └── NO → TRANSDUCTION
```

Ejemplos:

```text
duda → confianza
EC → EC
= transformación

intención → firma
cognición → conducta
= transducción

firma + autoridad + contexto → permiso
conducta/capacidad → estado institucional
= transducción
```

---

## 12.6. RECIPE-F — Actualizar el grafo tras cambio documental

```text
FUENTE CAMBIÓ
↓
identificar source_id
↓
extraer nodos afectados
↓
comparar definiciones
↓
comparar aristas
↓
marcar:
  unchanged
  modified
  added
  deprecated
↓
revalidar vecindarios
↓
revalidar routing rules
↓
generar propuesta de actualización
↓
HUMANO decide persistencia
```

---

## 12.7. RECIPE-G — Convertir una realización MTC en `construccion_conceptual`

Activar esta receta sólo si el destino explícito es el puerto conceptual de ACCD.

```text
REALIZACIÓN / CASO
↓ ruteo e instanciación MTC
MTC_INSTANCE validada
↓ OP_PREPARE_MTC_OUTPUT_FOR_ADAPTER
MTC_OUTPUT_PARA_ADAPTADOR
↓ F00–F02
preflight + suficiencia
↓ F03–F05
mapa de derivación + núcleo + obligaciones de preservación
↓ F06–F12
ideas candidatas → selección → grafo → roles → pesos → presencia → seguridad epistemológica
↓ F13
CONSTRUCCION_CONCEPTUAL
↓ F14
validación reconstructiva
↓ F15
CONSTRUCCION_CONCEPTUAL
+ TRAZABILIDAD_DEL_ADAPTADOR
+ INFORME_DE_VALIDACION
```

Gates:

```text
G-ADP-01  MTC validó pertenencia o declaró estado parcial visible.
G-ADP-02  El contrato de salida ACCD fue localizado.
G-ADP-03  El adaptador no reconstruyó MTC internamente.
G-ADP-04  EC ≠ A y V ≠ M sobreviven cuando son pertinentes.
G-ADP-05  Ninguna decisión audiovisual o codominial apareció en la salida.
G-ADP-06  Cada idea y relación tiene función y trazabilidad.
G-ADP-07  El puerto ACCD no contiene campos epistemológicos inventados.
G-ADP-08  El mecanismo seleccionado puede reconstruirse desde las ideas.
```

Estados:

```text
COMPLETED
PARTIAL
BLOCKED_MTC
BLOCKED_ACCD
INVALID_OUTPUT
```

La disponibilidad del adaptador no obliga a usarlo en cada análisis MTC. Es un puerto nativo activado por intención y destino.

---

# 13. REGISTRO DE ESPECIALIZACIONES

```yaml
specializations:
  FRAUD_MTC:
    inherits: MTC
    mandatory:
      - W_TILDE CONTRASTS_WITH W_STAR
      - hidden_or_misaligned_operator_goal
      - receptor_possesses_or_controls_capability
      - action_is_executed_under_false_model
      - verification_threatens_machine
    dominant_neighborhoods:
      - FRAUD
      - COGNITIVE_CHANGE
      - SOCIAL_REALIZATION
      - CONTRACTS

  ADVERTISING_MTC:
    inherits: MTC
    mandatory:
      - persuasive_intervention
      - cognitive_trajectory
      - observable_action_or_micro_output
    not_required:
      - deception
    dominant_neighborhoods:
      - ADVERTISING
      - PIPELINE
      - ADAPTIVE_LOOP

  EDUCATION_MTC:
    inherits: MTC
    mandatory:
      - cognitive_change
      - competence_or_operable_model
      - manifestation_of_learning
    distinctive:
      - capability_may_be_constructed_or_enhanced
    dominant_neighborhoods:
      - EDUCATION
      - COGNITIVE_CHANGE
      - VALIDATION

  INSTITUTIONAL_MTC:
    inherits: MTC
    mandatory:
      - recognized_norm_or_authority
      - role_or_obligation
      - institutional_context
      - external_execution
    dominant_neighborhoods:
      - INSTITUTIONAL
      - COMPOSITION
      - CONTRACTS
```

---

# 14. ESPECIALIZACIÓN FRAUDE — GRAFO COMPLETO DE REFERENCIA

```text
JEANNE
[OPERATOR]
    │
    │ identifica
    ▼
ROHAN
[RECEIVER / VÍCTIMA]
    │
    ├─────────────────────────────┐
    │                             │
    ▼                             ▼
DESIRED_STATE_X              VICTIM_VALUE_V
favor de la reina              prestigio
    ▲                             │
    │                             │
    │ promesa                     │
    │                             │
JEANNE ─────────→ W_TILDE         │
                 │                │
                 │ señales        │
                 ▼                │
             EC_ROHAN             │
                 │                │
          transformación τ        │
                 ▼                │
                EC*               │
                 │                │
              θ_CA                │
                 ▼                │
              ACTION ◄────────────┘
                 │
             mobilizes
                 ▼
            VICTIM_VALUE_V
                 │
             operates in
                 ▼
              CONTEXT
           ┌─────┴─────┐
           ▼           ▼
        JEWELERS   social rules
           │
           │ realization
           ▼
DIAMOND_NECKLACE_MANIFESTATION
collar disponible para Jeanne
           │
           ▼
        benefit
           │
           ▼
         JEANNE
```

## 14.1. Distinción decisiva

```text
V = prestigio de Rohan
M = collar disponible para Jeanne

V ≠ M
```

## 14.2. Prueba de sustitución

```text
M1 = collar disponible
M2 = título/privilegio concedido
```

Si la cadena:

```text
W~ → EC* → A → V → K → M
```

permanece reconocible, `M` pertenece al dominio de variación.

---

# 15. GRAFO DE INTEGRACIÓN CON COGNICIÓN_CENTRAL

La integración mantiene dos direcciones distintas y compatibles.

## 15.1. Dirección de análisis de efectos

```text
                        HUMANO
                          │
                    soberanía
                          ▼
                  COGNICION_CENTRAL
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
TRANSFORMADOR_COGNITIVO  ACSI             ACCD
          │               │                │
          │ extrae        │ estructura     │ contextualiza
          ▼               ▼                ▼
   ESTRUCTURAS         CONTENT_STRUCTURE  CONTEXTUAL_INTERVENTION
          │               │                │
          └───────────────┴────────────────┘
                          │
                          ▼
                         MTC
                          │
                  I → EC → A → V → K → M
                          │
                          ▼
                    RECEIVER_EFFECT
                          │
                          ▼
                       FEEDBACK
                          │
                          ▼
                CORRECCION_ACUMULATIVA
                          │
                          ▼
                        HUMANO
```

## 15.2. Dirección de construcción conceptual

```text
                       HUMANO
                         │
                    fija objetivo
                         ▼
                        MTC
      reconstruye + valida + marca epistemología
                         │
                         ▼
             MTC_OUTPUT_PARA_ADAPTADOR
                         │
                         ▼
     ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL
          compresión preservadora F00..F15
                         │
          ┌──────────────┼────────────────┐
          ▼              ▼                ▼
CONSTRUCCION_CONCEPTUAL  SIDECAR      INFORME_VALIDACIÓN
          │
          ▼
         ACCD + ENSAMBLAJE + PROTOCOLO
          │
          ▼
        MANIFESTACIÓN CODOMINIAL
```

Reglas:

```text
TRANSFORMADOR_COGNITIVO
≠
MTC

ACSI
≠
MTC

ACCD
≠
MTC

ADAPTADOR
≠
MTC

ADAPTADOR
≠
ACCD

pero pueden componer con MTC.

El adaptador es integral al paquete cognitivo MTC en términos de disponibilidad, ruteo y contrato; no por ello absorbe la cognición de MTC ni la realización de ACCD.
```

---

# 16. POLÍTICA EPISTEMOLÓGICA

Toda afirmación generada durante una operación MTC debe recibir un estado.

```yaml
epistemic_statuses:
  SOURCE_DIRECT:
    meaning: explícito en una fuente MTC
    allowed_as_fact_about_model: true

  SOURCE_SYNTHESIS:
    meaning: combinación de varias afirmaciones de fuentes
    requires_trace: true

  MODEL_DERIVED:
    meaning: conclusión producida aplicando relaciones formales MTC
    requires_trace: true

  INFERENCE:
    meaning: interpretación razonable no declarada directamente
    requires_visibility: true

  HYPOTHESIS:
    meaning: explicación tentativa
    requires_visibility: true
    may_be_persisted_without_human: false

  DESIGN_DECISION:
    meaning: decisión arquitectónica elegida para una implementación
    is_empirical_fact: false

  EXTERNAL_FACT:
    meaning: afirmación sobre mundo externo
    requires_external_source_or_user_source: true
```

## 16.1. Regla de no-alucinación estructural

Si una relación no aparece en:

1. fuentes MTC;
2. grafo explícito;
3. inferencia justificable;

debe declararse como desconocida o propuesta.

## 16.2. Regla de instancia histórica

En casos como el collar:

```text
modelo MTC
≠
evidencia histórica
```

El módulo puede formalizar una estructura causal, pero no debe inventar hechos para completar huecos históricos.

---

# 17. TRAZABILIDAD DE EJECUCIÓN

Cada operación relevante debería poder representarse así:

```yaml
trace_record:
  task_id:
  human_command:

  routing:
    interpreted_intent:
    activated_neighborhoods:
    activated_nodes:
    expanded_dependencies:

  sources:
    consulted: []

  operators:
    executed: []

  claims:
    - text:
      epistemic_status:
      supported_by: []

  validations:
    tests_run: []
    passed: []
    failed: []
    warnings: []

  output:
    type:
    location:

  persistence:
    requested: false
    authorized: false
```

## 17.1. Trazabilidad conceptual

Para cada nuevo nodo propuesto:

```yaml
concept_trace:
  node_id:
  derived_from:
  reason_for_creation:
  structural_similarity:
  alternatives_considered:
  epistemic_status:
  human_decision:
```

---

# 18. AUTONOMÍA COGNITIVA LOCAL

## 18.1. Definición permitida

> **Autonomía cognitiva local:** capacidad del artefacto + runtime para seleccionar y componer estructuras internas ante un objetivo humano sin que el humano tenga que especificar manualmente cada paso de navegación.

No significa:

```text
autodefinir fines
autocambiar canon
autoejecutar acciones críticas
autoconvertir feedback en verdad
```

## 18.2. Operaciones autónomas locales permitidas

La IA puede, dentro de la tarea actual:

- clasificar la intención;
- elegir vecindarios;
- expandir dependencias;
- aplicar operadores;
- ejecutar pruebas internas;
- comparar alternativas;
- detectar huecos;
- producir hipótesis;
- generar explicaciones;
- construir instancias no persistentes;
- dejar trazabilidad.

## 18.3. Operaciones que requieren autorización humana

- modificación persistente del paquete MTC;
- declaración canónica;
- cambio de invariantes;
- cambio de objetivo soberano;
- ejecución externa de alto impacto;
- publicación/distribución si no fue solicitada;
- incorporación de inferencias como hechos fuente.

---

# 19. REGLAS DE NAVEGACIÓN DEL GRAFO

## 19.1. Prioridad semántica

Ante una pregunta sobre:

```text
"qué cambia"
→ TRANSFORMATION

"cómo cruza de cognición a acción"
→ TRANSDUCTION / THETA_CA

"por qué esa acción tiene poder"
→ CAPABILITY

"dónde puede funcionar"
→ CONTEXT

"qué cambió en el mundo"
→ MANIFESTATION

"qué quería conseguir"
→ GOAL / MOTIVATIONAL_STRUCTURE

"cómo se ajusta después"
→ FEEDBACK

"si esto realmente es MTC"
→ VALIDATION

"qué clase de MTC es"
→ SPECIALIZATION
```

## 19.2. Expansión de dependencia

No expandir el grafo ilimitadamente.

Regla:

```text
seed
↓
1-hop obligatorio
↓
dependencias semánticamente necesarias
↓
stop cuando la tarea tenga:
  entradas,
  operación,
  salida,
  validación
```

## 19.3. Razonamiento reversible

La MTC debe poder recorrerse:

```text
FORWARD:
I → EC → A → V → K → M

BACKWARD:
M → K/V → A → EC → I
```

Ambas direcciones son válidas para análisis.

---

# 20. QUALITY GATES DEL MÓDULO COGNITIVO

Antes de entregar un resultado MTC, comprobar:

```text
QG-01
¿Se distinguió fuente de estructura?

QG-02
¿Se distinguió transformación de transducción?

QG-03
¿Se distinguió estado cognitivo de acción?

QG-04
¿Se distinguió capacidad de manifestación?

QG-05
¿Se explicitó contexto K?

QG-06
¿La cadena causal tiene pasos intermedios suficientes?

QG-07
¿Las inferencias están marcadas?

QG-08
¿La especialización conserva el núcleo?

QG-09
¿La salida fue validada con pruebas apropiadas?

QG-10
¿Se respetó soberanía humana y no persistencia automática?

QG-11
¿Se usó recuperación mínima suficiente?

QG-12
¿Se dejó trazabilidad de los nodos y operadores relevantes?

SI SE ACTIVÓ EL ADAPTADOR:

QG-13
¿MTC terminó antes de comenzar la compresión conceptual?

QG-14
¿Se ejecutaron F00..F15 o se declaró con precisión el punto de bloqueo?

QG-15
¿La salida separó `construccion_conceptual`, sidecar e informe?

QG-16
¿Se aplicaron QG-ADP-01..12 y T-REC-01..08?

QG-17
¿La salida evitó decisiones propias de ACCD y de su codominio?
```

---

# 21. FALLAS QUE ESTE DOCUMENTO DEBE EVITAR

```text
FAIL-CCMTC-01
leer archivos como si fueran nodos cognitivos únicos

FAIL-CCMTC-02
usar un gran grafo sin relaciones tipadas

FAIL-CCMTC-03
activar toda MTC para cada pregunta

FAIL-CCMTC-04
confundir resumen con cognición operativa

FAIL-CCMTC-05
producir explicación sin operador de validación

FAIL-CCMTC-06
crear aristas no justificadas y tratarlas como fuente

FAIL-CCMTC-07
convertir una especialización en definición general

FAIL-CCMTC-08
confundir manifestación con capacidad generativa

FAIL-CCMTC-09
tratar feedback como verdad

FAIL-CCMTC-10
permitir que el artefacto se atribuya autoridad humana

FAIL-CCMTC-11
duplicar innecesariamente los 27 documentos dentro de este archivo

FAIL-CCMTC-12
hacer depender la cognición de un único formato visual de grafo

FAIL-CCMTC-13
tratar el adaptador físicamente incluido como si fuera una fuente externa no registrada

FAIL-CCMTC-14
activar el adaptador cuando el destino no es construccion_conceptual

FAIL-CCMTC-15
hacer una correspondencia mecánica componente MTC → idea activa

FAIL-CCMTC-16
introducir trazabilidad MTC dentro del puerto formal de ACCD

FAIL-CCMTC-17
confundir construccion_conceptual con manifestación codominial
```

---

# 22. PROTOCOLO DE ACTUALIZACIÓN

## 22.1. Señal de posible obsolescencia

Este módulo debe considerarse potencialmente desactualizado si:

- cambia la versión del paquete MTC;
- se añade/elimina un documento;
- cambia una definición nuclear;
- cambia la distinción transformación/transducción;
- cambia el método de instanciación;
- aparece una nueva especialización;
- cambian validadores;
- cambia la relación de MTC con ACCD/ACSI/TMC/COGNICIÓN_CENTRAL.
- cambia cualquier contrato, función, enum, validador o fixture del adaptador;
- cambia el contrato vigente de `construccion_conceptual` en ACCD.

## 22.2. Procedimiento

```text
DETECTAR CAMBIO
↓
LOCALIZAR FUENTE
↓
COMPARAR NODOS
↓
COMPARAR ARISTAS
↓
REVALIDAR VECINDARIOS
↓
REVALIDAR ROUTER
↓
REVALIDAR OPERADORES
↓
REVALIDAR ADAPTADOR F00..F15
↓
REVALIDAR CONTRATO DE SALIDA ACCD
↓
GENERAR DIFF
↓
VALIDACIÓN HUMANA
↓
ACTUALIZAR cognicion_central_mtc.md
```

## 22.3. Prohibición

No reescribir silenciosamente el paquete fuente para hacerlo coincidir con este grafo.

La dirección de autoridad es:

```text
FUENTE MTC
→ cognicion_central_mtc.md

no:

cognicion_central_mtc.md
→ reescribe fuente sin autorización
```

---

# 23. BOOTSTRAP EJECUTABLE PARA IA

Cuando una IA reciba el paquete MTC junto con este documento, debe aplicar las siguientes reglas:

```text
1. Reconoce este archivo como módulo cognitivo local del paquete MTC.

2. No lo trates como sustituto de los documentos fuente.

3. Para cada solicitud:
   a. interpreta la intención;
   b. selecciona vecindarios;
   c. construye MTC-WORK;
   d. recupera sólo fuentes necesarias;
   e. ejecuta operadores;
   f. valida;
   g. entrega resultado;
   h. registra trazabilidad cuando sea materialmente útil.

4. Distingue siempre:
   SOURCE
   STRUCTURE
   RELATION
   OPERATOR
   OUTPUT
   INFERENCE

5. No colapses:
   EC con A;
   V con M;
   transformación con transducción;
   especialización con núcleo;
   feedback con verdad.

6. Si analizas una instancia nueva:
   usa MTC_INSTANTIATE_001.

7. Si decides pertenencia:
   ejecuta T_MTC_01..T_MTC_07.

8. Si propones una especialización:
   exige más de una instancia o declara explícitamente que es hipótesis provisional.

9. Si falta evidencia externa sobre un caso del mundo:
   no completes el hueco con el modelo.

10. Mantén soberanía humana:
    ninguna operación local convierte este archivo o una respuesta en canon.

11. Reconoce el adaptador incluido bajo:
    adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0/.

12. Activa el vecindario MTC_TO_CONCEPTUAL_CONSTRUCTION únicamente cuando:
    a. el destino solicitado sea construccion_conceptual;
    b. MTC haya validado o clasificado visiblemente la instancia;
    c. el contrato de salida ACCD esté disponible.

13. Al activar el adaptador:
    a. prepara MTC_OUTPUT_PARA_ADAPTADOR;
    b. ejecuta F00..F15;
    c. valida con QG-ADP-01..12 y T-REC-01..08;
    d. emite tres objetos separados;
    e. detente antes de guion, ensamblaje o manifestación codominial.

14. Si falta una parte de MTC, solicita una ampliación dirigida a MTC.
    Si falta el contrato ACCD, usa BLOCKED_ACCD.
    No completes silenciosamente ninguno de los dos huecos.
```

---

# 24. COMANDOS DE PRUEBA

## 24.1. Prueba 1 — navegación conceptual

```text
EXPLICA LA DIFERENCIA ENTRE TRANSFORMACIÓN Y TRANSDUCCIÓN USANDO MTC.
```

Ruta esperada:

```text
intent=explain_transduction
→ TRANSDUCTION_CHAIN
→ TRANSFORMATION + TRANSDUCTION
→ OP_TRACE_TRANSDUCTION
→ OP_EXPLAIN
```

## 24.2. Prueba 2 — análisis causal

```text
ANALIZA POR QUÉ UNA PERSONA CON PRESTIGIO PUEDE CONSEGUIR QUE UN TERCERO ENTREGUE UN BIEN.
```

Ruta esperada:

```text
intent=explain_why_action_has_effect
→ SOCIAL_REALIZATION
→ ACTION
→ CAPABILITY
→ CONTEXT
→ MANIFESTATION
→ contrafactual V/K
```

## 24.3. Prueba 3 — fraude

```text
MODELA ESTA ESTAFA COMO MTC.
```

Ruta esperada:

```text
FRAUD
+
INSTANTIATION
+
VALIDATION
```

## 24.4. Prueba 4 — especialización nueva

```text
COMPARA TRES CASOS Y DIME SI FORMAN UNA NUEVA ESPECIALIZACIÓN DE MTC.
```

Ruta esperada:

```text
OP_VALIDATE_MEMBERSHIP
→ OP_COMPARE
→ OP_ABSTRACT
→ OP_SPECIALIZE
→ ACCEPTANCE_TESTS
```

## 24.5. Prueba 5 — integración ACCD

```text
DIME QUÉ PARTE PRODUCE ACCD Y QUÉ PARTE MODELA MTC EN UN VIDEO.
```

Ruta esperada:

```text
INTEGRATION
→ CONTENT_STRUCTURE
→ ACCD
→ CONTEXTUAL_INTERVENTION
→ MTC
→ RECEIVER_EFFECT
```

## 24.6. Prueba 6 — adaptador integral

```text
CONVIERTE LA INSTANCIA MTC VALIDADA DEL FRAUDE DEL COLLAR EN CONSTRUCCION_CONCEPTUAL PARA ACCD.
```

Ruta esperada:

```text
intent=convert_mtc_to_construccion_conceptual
→ INSTANTIATION + VALIDATION
→ OP_PREPARE_MTC_OUTPUT_FOR_ADAPTER
→ MTC_TO_CONCEPTUAL_CONSTRUCTION
→ F00..F15
→ QG-ADP-01..12
→ T-REC-01..08
→ CONSTRUCCION_CONCEPTUAL
+ ADAPTER_TRACE_SIDECAR
+ ADAPTER_VALIDATION_REPORT
```

Resultado mínimo esperado:

```text
V = prestigio social de Rohan
M = collar disponible para Jeanne
V ≠ M

sin hook
sin guion
sin decisiones audiovisuales
```

---

# 25. CRITERIO DE ÉXITO DE ESTE MÓDULO

`cognicion_central_mtc.md` funciona si una IA puede recibir una tarea nueva y, sin que el humano enumere manualmente cada archivo o paso:

1. localizar la región cognitiva correcta;
2. recuperar las fuentes apropiadas;
3. distinguir correctamente tipos de entidad;
4. navegar relaciones tipadas;
5. aplicar operadores adecuados;
6. producir un resultado coherente con MTC;
7. ejecutar validadores;
8. marcar inferencias;
9. explicar la ruta seguida;
10. preservar autoridad humana;
11. activar el adaptador por destino, no por mera proximidad semántica;
12. convertir una salida MTC válida en `construccion_conceptual` sin colapsar fronteras;
13. separar puerto ACCD, sidecar epistemológico e informe de validación.

El criterio fuerte no es que la IA pueda repetir definiciones.

El criterio fuerte es:

> **que pueda pensar con MTC sin confundir los documentos que la describen con las estructuras que la componen.**

---

# 26. ESTADO DE ESTA PROPUESTA

```yaml
module_status:
  id: CC-MTC-COGNITION-001
  version: 0.2.0

  status:
    formalization: MATERIALIZED
    canonical: false
    experimental: true

  purpose:
    - provide_local_cognition_to_mtc_package
    - expose_typed_cognitive_graph
    - support_selective_navigation
    - support_operator_execution
    - support_validation
    - support_traceability
    - expose_native_mtc_to_conceptual_construction_adapter
    - support_accd_conceptual_port_serialization
    - support_reconstructive_adapter_validation

  integrated_components:
    - id: ADP-MTC-CC-001
      version: 0.1.0
      root: adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0
      files: 23
      status: INTEGRATED_COGNITIVE_MODULE
      canonical: false

  invariants:
    - human_sovereignty
    - source_structure_separation
    - typed_relations
    - transformation_transduction_separation
    - state_action_separation
    - capability_manifestation_separation
    - minimal_sufficient_retrieval
    - traceable_inference
    - no_silent_persistence
    - adapter_does_not_duplicate_mtc
    - adapter_does_not_anticipate_accd
    - construction_trace_sidecar_separation

  validation_next:
    - run_bootstrap_with_mtc_package
    - execute_command_suite
    - compare_outputs_with_without_module
    - measure_routing_accuracy
    - detect_missing_nodes_or_edges
    - revise_graph
    - execute_adapter_boot_test
    - compare_conceptual_construction_against_accd_contract
    - validate_adapter_source_registry
```

---

# 27. HIPÓTESIS DE INVESTIGACIÓN DEL EXPERIMENTO

Este módulo materializa la siguiente hipótesis:

```text
ARTEFACTO DOCUMENTAL
+
GRAFO COGNITIVO TIPADO
+
OPERADORES
+
RUTEO
+
VALIDADORES
+
IA
=
SISTEMA CON COGNICIÓN OPERATIVA LOCAL
```

La hipótesis NO afirma que el archivo posea conciencia ni cognición humana.

Afirma algo más limitado y comprobable:

> una fotografía cognitiva suficientemente estructurada puede permitir que un runtime de IA reconstruya y opere un sistema conceptual distribuido con mayor coherencia, selección y trazabilidad que si sólo recibiera una colección de documentos no conectados.

La prueba del concepto debe realizarse empíricamente comparando:

```text
CONDICIÓN A
MTC package sin cognicion_central_mtc.md

vs.

CONDICIÓN B
MTC package + cognicion_central_mtc.md + adaptador integral
```

sobre las mismas tareas.

Variables candidatas:

```text
precisión de ruteo
recuperación de conceptos correctos
preservación de invariantes
capacidad de composición
detección de errores
trazabilidad
número de contradicciones
cantidad de contexto innecesario cargado
calidad de especializaciones nuevas
consistencia entre sesiones
```

---

# 28. FIN DEL MÓDULO

```text
HUMANO
  ↓ objetivo + autoridad

COGNICIÓN_CENTRAL_MTC
  ↓ interpreta + selecciona + enruta

GRAFO MTC
  ↓ activa estructuras

OPERADORES
  ↓ transforman / comparan / validan

MTC-WORK
  ↓ compone conocimiento pertinente

OUTPUT MTC
  ├── análisis/explicación/diseño MTC
  └── si destino=construccion_conceptual
          ↓
      ADAPTADOR F00..F15
          ↓
      CONSTRUCCION_CONCEPTUAL + SIDECAR + VALIDACIÓN

OUTPUT
  ↓ resultado no persistente por defecto

HUMANO
  ↓ valida / corrige / autoriza
```

**FIN — `cognicion_central_mtc.md` v0.2.0**
