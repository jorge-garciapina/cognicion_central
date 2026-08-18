https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0/c/6a838386-f640-83e8-94ca-3255f87b2d43

# SCAFFOLDING RECONSTRUCTIVO DE LA ARQUITECTURA DEL MRRE

**Paquete:** `MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL`  
**Sigla:** `MRRE`  
**ID provisional:** `PC-MRRE`  
**Versión del scaffolding:** `0.2.0`  
**Fecha:** `2026-08-17`  
**Estado:** `PROVISIONAL / RECONSTRUCTIVO / NO CANÓNICO / PENDIENTE DE MATERIALIZACIÓN`  
**Ámbito:** `COGNICIÓN_CENTRAL`

---

## 0. Naturaleza y función de este documento

Este documento no es todavía la versión materializada del paquete MRRE. Es un **scaffolding estructural y contextual** destinado a permitir que el paquete sea construido posteriormente, archivo por archivo o mediante un agente de repositorio, sin depender del chat original y sin volver a definir desde cero conceptos que ya existen en `COGNICIÓN_CENTRAL`.

Para cada archivo previsto se especifican:

1. responsabilidad dentro del paquete;
2. contenido obligatorio;
3. conocimiento que reutiliza de `COGNICIÓN_CENTRAL`;
4. razón de la reutilización;
5. forma de adaptación al MRRE;
6. referencias exactas a rutas, patrones, intuiciones o decisiones;
7. relaciones con otros archivos del paquete;
8. criterios mínimos para considerar reconstruido correctamente el archivo.

La descripción utiliza identificadores `SRC-*` definidos en el registro de fuentes de la sección 3. Una referencia como `SRC-CAT-MRRE-02 / PAT-COG-076` debe leerse como una referencia exacta al patrón indicado dentro del archivo cuya ruta completa aparece en ese registro.

---

## 1. Decisiones humanas y restricciones no negociables

La materialización futura debe conservar las siguientes decisiones:

- MRRE es un miembro de `COGNICIÓN_CENTRAL`; no es un sistema autónomo que vuelva a inventar su gobierno, su epistemología o su ontología general.
- Su nombre de trabajo es `MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL` y su ID provisional es `PC-MRRE`.
- Su kernel estable deriva principalmente de Construcción Conceptual/MAANC y del Kernel de Ingeniería, pero **no copia literalmente** esos sistemas.
- El kernel contiene procedimientos, invariantes, contratos, validadores y criterios de falsación. No contiene una plantilla editorial universal.
- Cada manifestación puede producir un esqueleto diferente. `KERNEL_ESTABLE ≠ ESQUELETO_FIJO`.
- MRRE debe navegar estructuralmente la información nueva antes de buscar equivalencias en el acervo.
- La unidad mínima útil no es necesariamente la oración ni la proposición aislada, sino el `SUBGRAFO_DE_EFECTO` situado dentro de una arquitectura mayor.
- La manifestación es una materialización parcial y situada: `MANIFESTACIÓN ≠ ARQUITECTURA_TOTAL`.
- Deben distinguirse como mínimo `G_D` —grafo discursivo—, `G_P` —red proyectada—, `G_R` —red realizada—, `G_A` —red activada— y `G_U` —grafo actualizado—. No pueden colapsarse en una sola red.
- Recuperación, equivalencia y binding son operaciones distintas.
- Un hueco estructural debe conservarse como hueco; no autoriza invención.
- MCCR configura módulos, profundidad, mecanismos, umbrales y consumidor. MRRE ejecuta el análisis estructural.
- ACCD es un consumidor o realizador posible; no forma parte obligatoria del kernel MRRE.
- La autoridad humana gobierna fines, fuentes autorizadas, restricciones, aceptación, persistencia, promoción canónica y ejecuciones críticas.
- Capacidades, operaciones, estados y fases deben documentarse como protocolos ejecutables, no como listas nominales.
- Todo término técnico debe definirse localmente o referenciarse mediante paquete, ruta, sección y responsabilidad.
- Los ejemplos prueban y tensionan el kernel; no lo definen.

---

## 2. Árbol objetivo tentativo

```text
MOTOR_DE_RETROCONSTRUCCION_Y_REINSTANCIACION_ESTRUCTURAL/
├── README.md
├── MRRE_MANIFEST.yaml
│
├── 00_gobierno/
│   ├── 01_ficha_del_paquete.md
│   ├── 02_autoridad_soberania_y_limites.md
│   ├── 03_estado_versionado_y_decisiones.md
│   ├── 04_fuentes_genealogia_y_dependencias.md
│   └── 05_preguntas_abiertas.md
│
├── 01_kernel_estable/
│   ├── 01_definicion_fronteras_e_invariantes.md
│   ├── 02_kernel_de_ingenieria_y_maanc.md
│   ├── 03_ontologia_minima.md
│   ├── 04_modelo_formal_mrre.md
│   ├── 05_reglas_de_no_colapso.md
│   ├── 06_criterios_de_aceptacion_y_falsacion.md
│   ├── 07_protocolo_general_mrre.md
│   └── 08_glosario_y_bibliografia_de_procedencia.md
│
├── 02_contratos_y_schemas/
│   ├── manifestation_input.schema.yaml
│   ├── structural_field_and_cut.schema.yaml
│   ├── reconstructed_subgraph.schema.yaml
│   ├── structural_skeleton.schema.yaml
│   ├── reinstantiation_binding.schema.yaml
│   ├── epistemic_trace.schema.yaml
│   └── mrre_result.schema.yaml
│
├── 03_protocolos_operacionales/
│   ├── 01_navegacion_estructural.md
│   ├── 02_retroconstruccion.md
│   ├── 03_triangulacion_multimanifestacion.md
│   ├── 04_reinstanciacion.md
│   ├── 05_comparacion_y_transferencia.md
│   └── 06_feedback_y_actualizacion.md
│
├── 04_runtime/
│   ├── 01_grafo_de_ejecucion.md
│   ├── 02_maquina_de_estados.md
│   ├── 03_registro_de_componentes.yaml
│   ├── 04_manejo_de_fallas_y_recuperacion.md
│   └── componentes/
│       ├── 01_field_builder.md
│       ├── 02_cut_engine.md
│       ├── 03_multiscale_segmenter.md
│       ├── 04_subgraph_reconstructor.md
│       ├── 05_skeleton_inferer.md
│       ├── 06_structure_selector.md
│       ├── 07_reinstantiation_engine.md
│       ├── 08_trace_graph.md
│       ├── 09_epistemic_ledger.md
│       └── 10_validation_orchestrator.md
│
├── 05_acervo_estructural/
│   ├── 01_indice_federado_de_patrones_mrre.md
│   ├── CATALOGO_COMPLEMENTARIO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_2_0.md
│   ├── CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_3_0.md
│   ├── 02_taxonomia_de_esqueletos_estructurales.md
│   ├── 03_registro_de_arquitecturas_retroconstruidas.yaml
│   ├── 04_registro_de_invariantes_aprendidos.md
│   └── 05_mapa_de_procedencia_estructural.md
│
├── 06_especializaciones/
│   ├── 01_retroconstruccion_textual.md
│   ├── 02_campo_de_acontecimientos.md
│   ├── 03_explicacion_de_mecanismos.md
│   ├── 04_mapa_argumentativo.md
│   ├── 05_trayectoria_narrativa_expositiva.md
│   ├── 06_proyeccion_instruccional.md
│   └── 07_manifestaciones_multimodales.md
│
├── 07_integraciones/
│   ├── 01_AC_HIA_MRRE.md
│   ├── 02_MCCR_MRRE.md
│   ├── 03_MTC_MRRE.md
│   ├── 04_ASIOO_MRRE.md
│   ├── 05_CONSCIENCIA_Y_SOBERANIA_MRRE.md
│   ├── 06_ACCD_MRRE.md
│   └── 07_APRENDIZAJE_ESTRUCTURAL_MRRE.md
│
├── 08_validacion_y_pruebas/
│   ├── 01_plan_de_verificacion_y_validacion.md
│   ├── 02_metricas_y_umbrales.md
│   ├── 03_matriz_de_cobertura.md
│   ├── fixtures/
│   ├── expected_results/
│   ├── negative_cases/
│   └── regression/
│
├── 09_casos_y_ejemplos/
│   ├── caso_del_collar/
│   ├── reuters/
│   ├── aspiradora/
│   ├── puente_del_valle/
│   └── triangulacion_multimodal/
│
├── 10_artefactos_generados/
│   ├── analisis/
│   ├── arquitecturas_retroconstruidas/
│   ├── reinstanciaciones/
│   ├── comparaciones/
│   └── trazas/
│
└── 90_historial/
    ├── antecedentes/
    ├── versiones_superadas/
    └── decisiones_historicas/
```

El árbol incorpora un ajuste respecto del esbozo anterior: los componentes y especializaciones reciben archivos explícitos en lugar de quedar como carpetas vacías. Esto vuelve el scaffolding accionable desde la primera materialización.

---

## 3. Registro de fuentes exactas dentro de COGNICIÓN_CENTRAL

### 3.1 Fuentes propias y antecedentes directos de MRRE

| ID                  | Ruta exacta                                                                                                                                                               | Uso principal                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SRC-MRRE-DESIGN`   | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL/DISENO_INTEGRAL_NUEVO_PAQUETE_v0_1_0.md`                                         | Identidad funcional, invariantes, ontología, contratos, componentes, especializaciones, validación y primer árbol documental.                     |
| `SRC-MRRE-SUBGRAPH` | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL/MANIFESTACION_LINGUISTICA_COMO_SUBGRAFO_MRRE_v0_1.md`                            | Subgrafo de efecto, deslinealización, multirresolución, redes `G_K/G_D/G_P/G_R/G_A/G_U`, gradiente epistemológico y reinstanciación.              |
| `SRC-CAT-MRRE-02`   | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL/CATALOGO_COMPLEMENTARIO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_2_0.md` | Patrones `PAT-COG-064…115`: aparato estable/configuración dinámica, inducción, reinstanciación, runtime, protocolos, epistemología y scaffolding. |
| `SRC-CAT-MRRE-03`   | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL/CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_3_0.md`      | Patrones `PAT-COG-116…125`, ledger de intuiciones y conexiones MRRE–ASIOO–Consciencia/Soberanía.                                                  |
| `SRC-MRRE-EXAMPLE`  | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL/ejemplo.md`                                                                      | Antecedente de caso; debe conservarse como evidencia histórica hasta clasificarlo.                                                                |
| `SRC-MRRE-READING`  | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL/lectura.md`                                                                      | Antecedente interpretativo; no gobierna el kernel hasta ser auditado.                                                                             |

### 3.2 Catálogos federados obligatorios

| ID                 | Ruta exacta                                                                                                                                                            | Uso principal                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SRC-CAT-CS-01`    | `01_nucleo_cognitivo/teoria_tmc/CONSCIENCIA_Y_SOBERANIA/CATALOGO_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_1_0.md`                                                 | Patrones `PAT-COG-001…063`: fuentes, redes, manifestación, retroconstrucción, gobierno, aprendizaje, adaptación, acción y sistemas orientados a objetivos.                          |
| `SRC-CAT-ASIOO-04` | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA DE SISTEMAS INTEGRADOS ORIENTADOS A OBJETIVOS/CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_4_0.md` | Patrones `PAT-COG-126…130`: estratificación arquitectura/aplicación/chain/ejecución, objetivo como transición, composición topológica, rutas/cortes y procedimientos precompilados. |

Estos catálogos se federan; no deben copiarse íntegramente dentro del MRRE. El archivo `05_acervo_estructural/01_indice_federado_de_patrones_mrre.md` registrará qué patrones consume cada operación.

### 3.3 Construcción Conceptual, MAANC y Kernel de Ingeniería

| ID                        | Ruta exacta                                                                                                                | Uso principal                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `SRC-KI-11`               | `04_conocimiento_y_contexto/memoria_conceptual/incubacion-conceptual/ingenieria/kernel-de-ingenieria-1-1.txt`              | Portada A–I, ciclo F1–F7, decisiones D1–D10, métricas, V&V, umbrales, antipatrones, trazabilidad y fractalidad.                            |
| `SRC-MAANC-UNDERSTANDING` | `04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/entendimiento_construccion_conceptual_MAANC_EST.md` | Estructura cognitiva activa, módulos MAANC, segmentación, corriente conceptual, desacoplamiento entre construcción conceptual y protocolo. |
| `SRC-MAANC-COMPOSITION`   | `04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/modelo-composicion-cognitiva.md`                    | mNodes componibles, selección, alineación, articulación, síntesis, validación, relaciones tipadas, trazabilidad y transferencia.           |
| `SRC-MAANC-STRUCTURAL`    | `04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/modelo_instrucciones_procesamiento_estructural.md`  | Extracción estructural, `segmento_fuente`, rol operativo, función local, estructura interna, conexiones, moldes y reglas negativas.        |
| `SRC-MAANC-MACRO`         | `04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/modelo_arquitectura_macro_narrativo_cognitiva/`     | Familia de analizadores que deben tratarse como observadores configurables, no como pipeline fijo.                                         |

### 3.4 AC-HIA y scaffolding

| ID                        | Ruta exacta                                                                                                                                          | Uso principal                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `SRC-ACHIA-DEF`           | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/01_nucleo/01_definicion_y_limites.md`                                         | Frontera entre interfaz humana, frontend, normalización, backend y runtime.                                                            |
| `SRC-ACHIA-NORMALIZATION` | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`                          | Modelo de comando normalizado, fases NC-00…NC-12, autoridad, alcance, restricciones, referencias, resultados esperados y trazabilidad. |
| `SRC-ACHIA-CONTRACTS`     | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`                                  | Contratos entre capas y artefactos de intercambio.                                                                                     |
| `SRC-ACHIA-VALIDATORS`    | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`                                               | Validación de comandos, estado, handoffs y resultados.                                                                                 |
| `SRC-ACHIA-SCAFFOLD`      | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/04_funcionalidades/04_scaffolding_cognitivo_para_construccion_de_paquetes.md` | Scaffolding estructural/contextual, materialización diferida, guía por archivo, orden de dependencias y validadores SC-V1…SC-V7.       |

### 3.5 MCCR

| ID                  | Ruta exacta                                                                                                                                  | Uso principal                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `SRC-MCCR-DEF`      | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/01_definicion_naturaleza_y_problema.md`                | Naturaleza transversal de MCCR y frontera configuración/ejecución.              |
| `SRC-MCCR-TOPOLOGY` | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/02_topologia_componentes_y_responsabilidades.md`       | Componentes y responsabilidades del configurador.                               |
| `SRC-MCCR-CONFIG`   | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/03_modelo_de_configuracion_operacional.md`             | Contrato de configuración, procedimiento, salida, invariantes y gates.          |
| `SRC-MCCR-REQUEST`  | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/04_modelo_de_solicitud_estructurada.md`                | Solicitud estructurada que puede transportar objetivos y restricciones al MRRE. |
| `SRC-MCCR-PLAN`     | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/05_execution_plan_definicion_y_contrato.md`            | Contrato del plan que activa componentes MRRE.                                  |
| `SRC-MCCR-GRAPHS`   | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/06_grafos_possible_available_active.md`                | Distinción `G_possible → G_available(t) → G_active(Q_t)`.                       |
| `SRC-MCCR-PIPELINE` | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/02_modelo_operativo/02_pipeline_c0_c12.md`                       | Estructura de stages con entradas, salidas, decisiones, fallos y gates.         |
| `SRC-MCCR-STATE`    | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/02_modelo_operativo/10_estados_y_maquina_de_estados_del_plan.md` | Estados y transiciones del plan.                                                |
| `SRC-MCCR-RUNLOG`   | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/06_trazabilidad_observabilidad_y_run_log.md`        | Observabilidad, eventos, decisiones, run log y trazabilidad de ejecución.       |
| `SRC-MCCR-AUTH`     | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/07_autoridad_permisos_validadores_y_gates.md`       | Autoridad, permisos y gates aplicables al runtime.                              |
| `SRC-MCCR-FAILURES` | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/05_no_feasible_plan_fallos_y_degradacion.md`        | Fallos tipados, plan no factible, degradación y recuperación.                   |
| `SRC-MCCR-GLOSSARY` | `01_nucleo_cognitivo/teoria_tmc/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/08_glosario_notacion_y_bibliografia_de_procedencia.md` | Precedente para cierre léxico y procedencia término por término.                |

### 3.6 MTC, PIEA, ASIOO y Consciencia/Soberanía

| ID                         | Ruta exacta                                                                                                                                   | Uso principal                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `SRC-MTC-CORE`             | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/00_core/00_especificacion_nuclear.md`                                   | Definición, fronteras, invariantes y pertenencia de MTC.                                                              |
| `SRC-MTC-ONTOLOGY`         | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/00_core/01_ontologia_y_tipos.md`                                        | Tipos de estado, operador, intervención, acción, capacidad, contexto y manifestación.                                 |
| `SRC-MTC-STATE`            | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/12_estado_cognitivo_grafo_ponderado.md`                    | Estado cognitivo como grafo ponderado, umbrales y observación indirecta.                                              |
| `SRC-MTC-PIPELINE`         | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/13_pipeline_y_maquina_de_estados.md`                       | Cadena de transformación/transducción y estados.                                                                      |
| `SRC-MTC-MANIFESTATION`    | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/14_capacidad_contexto_manifestacion.md`                    | Distinción capacidad/contexto/manifestación y prueba contrafactual.                                                   |
| `SRC-MTC-FEEDBACK`         | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/15_feedback_control_observabilidad.md`                     | Feedback, control, observabilidad y límites inferenciales.                                                            |
| `SRC-MTC-INSTANTIATE`      | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/20_metodo/21_instanciacion_y_validacion.md`                             | Procedimiento P0–P15 para instanciación, contraste y validación.                                                      |
| `SRC-MTC-COLLAR`           | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/30_especializaciones/30_fraude_collar.md`                               | Especialización MTC del caso del collar.                                                                              |
| `SRC-MTC-ADAPTER-FIXTURES` | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0/05_fixture/` | Fixtures de salida MTC, construcción conceptual, trazabilidad y validación.                                           |
| `SRC-PIEA-CORE`            | `01_nucleo_cognitivo/teoria_tmc/PATRON_DE_INTEGRACION_ESTRUCTURAL_ACUMULATIVA/00_core/00_especificacion_nuclear.md`                           | Integración sucesiva de aportes y estado relacional acumulado.                                                        |
| `SRC-PIEA-TRANSITION`      | `01_nucleo_cognitivo/teoria_tmc/PATRON_DE_INTEGRACION_ESTRUCTURAL_ACUMULATIVA/10_mecanismo/10_transicion_de_estado.md`                        | Incorporación, transformación, reponderación, inhibición, sustitución y rechazo.                                      |
| `SRC-CS-OPS`               | `01_nucleo_cognitivo/teoria_tmc/CONSCIENCIA_Y_SOBERANIA/ARQUITECTURA_DE_OPERACIONES_Y_EFECTOS_COGNITIVOS_v0_1_0.md`                           | Operación como reconfiguración de grafo, red de efectos, manifestación parcial, triple red, triangulación y gobierno. |

### 3.7 ACCD, aprendizaje y gobierno central

| ID                  | Ruta exacta                                                                                 | Uso principal                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `SRC-ACCD-EQUATION` | `03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md`     | Campo temático, módulos MAANC, instancia contextual, protocolo de proyección, codominio y manifestación codominial. |
| `SRC-ACCD-REGIONS`  | `03_aplicaciones/sistema-de-transferencia-accd/grafo_de_regiones/`                          | Modelo materializado de regiones, dimensiones, campos, valores y relaciones contextuales.                           |
| `SRC-AE-README`     | `03_aplicaciones/aprendizaje_estructural/README.md`                                         | Responsabilidad del paquete de aprendizaje estructural dentro de COGNICIÓN_CENTRAL.                                 |
| `SRC-CC-INSTALL`    | `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt` | Soberanía humana, espacios lógicos, precedencia, recuperación mínima suficiente y no persistencia silenciosa.       |

Cuando una fuente adjunta —por ejemplo `APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf`— no tenga ruta materializada verificable dentro de `ART_cognicion_central(7).txt`, debe registrarse como `ATTACHED_SOURCE / PATH_PENDING_CONFIRMATION` y no se le debe inventar una ruta canónica.

---

## 4. Guía ampliada por archivo

## 4.1 Archivos raíz

### `README.md`

**Responsabilidad.** Será la puerta de entrada humana y agentiva al MRRE. Debe permitir entender qué problema resuelve, qué operaciones ofrece, cómo se invoca y qué documentos deben recuperarse primero, sin cargar todo el paquete.

**Contenido obligatorio.** Identidad `PC-MRRE`; definición breve; estado no canónico/candidato; operaciones `RETROCONSTRUIR`, `REINSTANCIAR`, `COMPARAR`, `TRIANGULAR` y `VALIDAR`; entradas y salidas; mapa de carpetas; secuencia mínima de lectura; relación `AC-HIA → MCCR → MRRE → consumidor`; ejemplo mínimo; límites y regla de no persistencia automática.

**Qué reutiliza y cómo.** Toma de `SRC-ACHIA-DEF` el principio de interfaz y recuperación selectiva; de `SRC-ACHIA-SCAFFOLD` la lectura por arquitectura y dependencias; de `SRC-CAT-ASIOO-04 / PAT-COG-126` la estratificación entre arquitectura, aplicación, chain, ejecución y resultado; de `SRC-CAT-MRRE-02 / PAT-COG-089` la independencia del núcleo respecto del consumidor.

**Relaciones internas.** Apunta a `MRRE_MANIFEST.yaml`, `00_gobierno/01_ficha_del_paquete.md`, `01_kernel_estable/07_protocolo_general_mrre.md`, `04_runtime/01_grafo_de_ejecucion.md` y `07_integraciones/`.

**Criterio reconstructivo.** Una persona o agente que sólo lea este archivo debe saber qué es MRRE, qué no es, qué archivo abrir después y por qué una ejecución concreta no define el kernel.

### `MRRE_MANIFEST.yaml`

**Responsabilidad.** Proveer un índice estructurado y validable del paquete. No describe la teoría; declara qué existe, su estado y cómo se conecta.

**Contenido obligatorio.** `package_id`, nombre, versión, estado, autoridad, rutas canónicas, entry points, componentes, capacidades, dependencias requeridas/opcionales, contratos, schemas, especializaciones, validadores, fixtures, artefactos y compatibilidad. Cada elemento deberá tener ID, versión, estado y archivo responsable.

**Qué reutiliza y cómo.** Adapta la lógica de manifiesto y registro de capacidades de AC-HIA y MCCR (`SRC-ACHIA-CONTRACTS`, `SRC-MCCR-TOPOLOGY`); usa `PAT-COG-086` para contratos fronterizos, `PAT-COG-090` para adaptadores y routing y `PAT-COG-098` para cierre léxico y referencia responsable.

**Relaciones internas.** Debe mantenerse sincronizado con `04_runtime/03_registro_de_componentes.yaml`, `05_acervo_estructural/01_indice_federado_de_patrones_mrre.md` y `08_validacion_y_pruebas/03_matriz_de_cobertura.md`.

**Criterio reconstructivo.** Ningún componente puede aparecer sin archivo, contrato y estado; ninguna dependencia puede declararse sólo por nombre sin ruta o adaptador responsable.

---

## 4.2 `00_gobierno/`

### `00_gobierno/01_ficha_del_paquete.md`

**Responsabilidad.** Fijar la identidad funcional y administrativa del MRRE dentro de `COGNICIÓN_CENTRAL`.

**Contenido obligatorio.** Nombre e ID; problema; alcance; clase de paquete; objetos de trabajo; operaciones; entradas; salidas; consumidores; autoridad; estado epistemológico; dependencias; incompatibilidades y criterios de pertenencia. Debe distinguir el paquete candidato de sus antecedentes `[NUEVO PAQUETE]`.

**Qué reutiliza y cómo.** Parte de `SRC-MRRE-DESIGN`, secciones 0–2 y 18; adopta de `SRC-MTC-CORE` el formato definición/problema/fronteras/invariantes/pertenencia; y de `SRC-CAT-ASIOO-04 / PAT-COG-126` la separación entre arquitectura MRRE y ejecuciones.

**Relaciones internas.** Es referenciada por README, manifiesto, kernel y todos los archivos de integración.

**Criterio reconstructivo.** Debe poder responder sin ambigüedad: “¿qué transforma MRRE, desde qué objeto, hacia qué objeto, con qué autoridad y con qué límites?”.

### `00_gobierno/02_autoridad_soberania_y_limites.md`

**Responsabilidad.** Traducir la soberanía humana general de COGNICIÓN_CENTRAL a decisiones concretas del MRRE.

**Contenido obligatorio.** Autoridad sobre fines, fuentes, alcance, profundidad, inferencias aceptables, elección entre alternativas, bindings, publicación, persistencia y promoción. Debe definir gates humanos, acciones reversibles, acciones críticas y estados `WAITING_HUMAN_DECISION`.

**Qué reutiliza y cómo.** Toma de `SRC-CC-INSTALL` precedencia y no persistencia silenciosa; de `SRC-CAT-CS-01` los patrones `PAT-COG-030…039`, especialmente locus de gobierno, responsabilidad ≠ ejecución, autoridad ≠ capacidad, veto/validación y protección teleológica; de `SRC-CAT-MRRE-03` los patrones `PAT-COG-124/125` para intensidad y descomposición funcional del gobierno; de `SRC-MCCR-AUTH` permisos y gates.

**Adaptación.** El humano no selecciona manualmente cada microrelación, pero conserva autoridad sobre criterios, umbrales, promoción y cierre. La opacidad microgenerativa de un analizador no puede convertirse en opacidad sobre las decisiones que modifican el acervo.

**Relaciones internas.** Gobierna `01_kernel_estable/06_criterios_de_aceptacion_y_falsacion.md`, `04_runtime/04_manejo_de_fallas_y_recuperacion.md`, `05_acervo_estructural/04_registro_de_invariantes_aprendidos.md` y todas las integraciones.

**Criterio reconstructivo.** Toda operación persistente o epistemológicamente fuerte debe tener propietario de autoridad, gate y salida en caso de no autorización.

### `00_gobierno/03_estado_versionado_y_decisiones.md`

**Responsabilidad.** Mantener la historia viva del diseño sin confundir propuestas, decisiones humanas, inferencias y versiones promovidas.

**Contenido obligatorio.** Leyenda de estados; esquema de versionado; ledger de decisiones; relación `supersedes/superseded_by`; impacto sobre dependientes; reglas de promoción; formato de decisión con alternativas, evidencia y responsable.

**Qué reutiliza y cómo.** Adapta el protocolo D1–D10 y la trazabilidad de `SRC-KI-11`; usa `PAT-COG-097` para estados protocolarios, `PAT-COG-106` para espacios de autoridad, `PAT-COG-108` para precedencia epistemológica, `PAT-COG-114` para revalidación retroactiva y `PAT-COG-115` para candidato → revisión → promoción.

**Relaciones internas.** Alimenta `90_historial/`, invalida o revalida entradas del manifiesto, del acervo y de la matriz de cobertura.

**Criterio reconstructivo.** Debe ser posible reconstruir por qué una decisión existe, qué reemplazó, qué archivos afecta y qué pruebas deben repetirse.

### `00_gobierno/04_fuentes_genealogia_y_dependencias.md`

**Responsabilidad.** Ser el mapa genealógico normativo del paquete. Debe impedir que MRRE reescriba como propias estructuras ya existentes o que herede módulos incompatibles por semejanza nominal.

**Contenido obligatorio.** Para cada fuente: ruta exacta, autoridad, concepto tomado, razón, transformación aplicada, elementos excluidos, archivos MRRE consumidores y pruebas de compatibilidad.

**Herencias obligatorias.**

- De `SRC-KI-11`: formulación, modelado, descomposición, V&V, operación iterativa, decisiones auditables, umbrales, antipatrones y trazabilidad. Se adaptan a hipótesis estructurales, no a productos físicos.
- De `SRC-MAANC-UNDERSTANDING`: estructuras cognitivas activas, familias, roles, modos de presencia, relaciones, segmentación y analizadores. Se convierten en observadores configurables; no se copia `integrador_ACCD` como cierre obligatorio.
- De `SRC-MAANC-COMPOSITION`: selección, alineación, articulación, síntesis, validación, invariantes, dominio de variación y trazabilidad de mNodes. Se adaptan a composición de subgrafos y esqueletos.
- De `SRC-ACHIA-DEF`, `SRC-ACHIA-NORMALIZATION`, `SRC-ACHIA-CONTRACTS`, `SRC-ACHIA-VALIDATORS` y `SRC-ACHIA-SCAFFOLD`: comando humano, normalización, frontend/backend y scaffolding. AC-HIA entrega una solicitud operable; no ejecuta retroconstrucción.
- De `SRC-MCCR-DEF`, `SRC-MCCR-CONFIG`, `SRC-MCCR-REQUEST`, `SRC-MCCR-PLAN`, `SRC-MCCR-GRAPHS`, `SRC-MCCR-PIPELINE`, `SRC-MCCR-STATE`, `SRC-MCCR-RUNLOG` y `SRC-MCCR-AUTH`: reducción de capacidades, configuración, plan, estados y run log. MCCR selecciona cómo ejecutar; MRRE conserva la semántica del análisis.
- De `SRC-MTC-CORE`, `SRC-MTC-ONTOLOGY`, `SRC-MTC-STATE`, `SRC-MTC-PIPELINE`, `SRC-MTC-MANIFESTATION`, `SRC-MTC-FEEDBACK` y `SRC-MTC-INSTANTIATE`: estados, transformaciones, capacidad, contexto, manifestación, feedback y observación indirecta. MRRE los usa cuando el objeto reconstruido contiene cambio cognitivo; no sustituye MTC.
- De `SRC-CAT-ASIOO-04` y `SRC-CAT-MRRE-03`: objetivo, función–información–coordinación, capacidad dependiente de topología, rutas y cortes funcionales, representación operable y gobierno. Se usan para retroconstruir sistemas orientados a objetivos.
- De `SRC-CAT-CS-01` y `SRC-CS-OPS`: fuente/material/mediación/recepción, redes, soberanía, red de efectos, manifestación parcial y triangulación.
- De `SRC-ACCD-EQUATION` y `SRC-ACCD-REGIONS`: campo, corte, instancia contextual, protocolo y codominio. Se usan en handoffs opcionales; corte semántico e instancia contextual permanecen distintos.
- De `SRC-AE-README`: pruebas de comprensión y transferencia; su desarrollo detallado requiere las fuentes adjuntas identificadas como no materializadas cuando corresponda.

**Relaciones internas.** Es la fuente central de `01_kernel_estable/02_kernel_de_ingenieria_y_maanc.md`, `01_kernel_estable/03_ontologia_minima.md`, `07_integraciones/` y `05_acervo_estructural/05_mapa_de_procedencia_estructural.md`.

**Criterio reconstructivo.** Ninguna herencia puede quedar como “inspirado por X”. Debe indicar exactamente qué se toma, cómo cambia, qué no se toma y qué archivo verifica la adaptación.

### `00_gobierno/05_preguntas_abiertas.md`

**Responsabilidad.** Conservar incertidumbres de diseño para evitar cierres artificiales.

**Contenido obligatorio.** Pregunta, origen, impacto, alternativas, evidencia necesaria, archivos afectados, responsable de decisión y estado. Debe incluir al menos: tipología definitiva de esqueletos; equivalencia estructural; límite entre inferencia funcional e intención; triangulación; estimación de red activada; métricas topológicas; aprendizaje de invariantes y multimodalidad.

**Qué reutiliza y cómo.** Toma las preguntas de `SRC-MRRE-DESIGN`, sección 28; `SRC-CS-OPS`, sección 35; `SRC-CAT-MRRE-02`, preguntas abiertas; y `SRC-CAT-ASIOO-04`, sección 6. Usa `PAT-COG-073`, `PAT-COG-080` y `PAT-COG-103` para mantener alternativas e incertidumbre sin invención.

**Relaciones internas.** Cada pregunta debe enlazar sus dependientes y las pruebas que podrían cerrarla.

**Criterio reconstructivo.** Una pregunta no puede desaparecer por el solo hecho de que un archivo posterior adopte provisionalmente una alternativa.

---

## 4.3 `01_kernel_estable/`

### `01_kernel_estable/01_definicion_fronteras_e_invariantes.md`

**Responsabilidad.** Formular el núcleo estable del MRRE y separar invariantes de dominio de variación.

**Contenido obligatorio.** Definición de retroconstrucción, reinstanciación, manifestación, arquitectura candidata y esqueleto; problema resuelto; criterios de pertenencia; fronteras con extracción, resumen, clasificación, ACCD, MTC, MCCR y aprendizaje; invariantes y variables por ejecución.

**Qué reutiliza y cómo.** Parte de `SRC-MRRE-DESIGN`, secciones 2–5; `SRC-MRRE-SUBGRAPH`, secciones 0, 17–23; `PAT-COG-064` aparato estable/configuración dinámica; `PAT-COG-065` dos transformaciones; `PAT-COG-089` núcleo independiente del consumidor; `PAT-COG-091` especialización por restricciones añadidas; y `PAT-COG-126` estratificación.

**Invariantes mínimos.** Manifestación ≠ arquitectura; campo ≠ corte; nodo ≠ función aislada; proyectada ≠ realizada ≠ activada; observación ≠ inferencia; recuperación ≠ equivalencia ≠ binding; esqueleto ≠ plantilla editorial; feedback ≠ verdad; ejecución ≠ canon.

**Relaciones internas.** Gobierna ontología, modelo formal, no-colapsos, protocolos, schemas y validación.

**Criterio reconstructivo.** Cada elemento estable debe vincularse con una fuente y cada elemento variable debe indicar qué contrato permite su variación.

### `01_kernel_estable/02_kernel_de_ingenieria_y_maanc.md`

**Responsabilidad.** Materializar la genealogía metodológica más importante del MRRE y convertirla en una adaptación operativa verificable.

**Contenido obligatorio — Kernel de Ingeniería.** Debe mapear `SRC-KI-11` así:

- `F1 FORMULACIÓN` → objetivo MRRE, portador, alcance, restricciones, autoridad y criterios de aceptación.
- `F2 MODELADO` → representación de manifestación, fuente, contexto y estados epistemológicos.
- `F3 ARQUITECTURA/DESCOMPOSICIÓN` → segmentación multiescala, nodos, relaciones, dependencias y subgrafos.
- `F4 OPTIMIZACIÓN` → comparación de hipótesis bajo parsimonia, cobertura y restricciones, sin convertir “mejor score” en verdad.
- `F5 CONTROL/RIESGO` → gates, límites inferenciales, perfiles de riesgo, autoridad y planes de degradación.
- `F6 V&V` → modelos alternativos, contrapruebas, corpus, `STRUCTURE_PRESERVATION_DIFF` y validación por reingreso.
- `F7 OPERACIÓN/MEJORA` → run logs, feedback, actualización del acervo y promoción humana explícita.

La Portada A–I se adapta a propósito, invariantes, objetos MRRE, interfaces/schemas, métricas por capa, validaciones duras, cadencia de revisión, aprendizaje y trazabilidad. D1–D10 se reutiliza para decisiones de diseño o selección entre hipótesis, no para cada microinferencia.

**Contenido obligatorio — MAANC.** Debe mapear `SRC-MAANC-UNDERSTANDING`, sección 14: extractor de macroestructura, detector expositivo, segmentador funcional, trayectoria narrativa, relaciones retóricas, coherencia, situación cognitiva, análisis intencional-atencional, esquemas narrativos, moves, metadiscurso y argumentación. Esos módulos se registran como **observadores posibles** configurados por MCCR. Sus outputs se integran mediante una arquitectura conceptual genérica; `integrador_ACCD` se desacopla y se convierte en adaptador opcional.

De `SRC-MAANC-COMPOSITION` se toman mNode, fuente/segmento, rol operativo, invariantes, variación, transferibilidad, selección, alineación, articulación, síntesis y validación. De `SRC-MAANC-STRUCTURAL` se toman orden textual, función local, estructura interna, conexiones y reglas negativas.

**Patrones de apoyo.** `PAT-COG-066`, `067`, `068`, `070`, `071`, `072`, `073`, `076`, `084`, `085`, `086`, `096`, `098`, `104` y `105` de `SRC-CAT-MRRE-02`.

**Relaciones internas.** Alimenta el protocolo general, los componentes `multiscale_segmenter`, `subgraph_reconstructor`, `skeleton_inferer`, `structure_selector` y el plan de V&V.

**Criterio reconstructivo.** Debe ser posible señalar para cada fase o módulo: fuente exacta, transformación semántica, contrato de entrada/salida, condición de activación, riesgo y razón para no copiarlo literalmente.

### `01_kernel_estable/03_ontologia_minima.md`

**Responsabilidad.** Definir sólo los tipos que MRRE necesita para operar y comunicar sus resultados, reutilizando ontologías existentes cuando sea posible.

**Objetos obligatorios y procedencia.**

- `MANIFESTATION`: materialización parcial observable. Procede de `SRC-MTC-MANIFESTATION`, `SRC-CS-OPS` secciones 18–20 y `PAT-COG-015/024/029`.
- `STRUCTURAL_FIELD`: campo relacional mayor desde el cual puede producirse o reconstruirse un corte. Procede de `SRC-MRRE-DESIGN` secciones 5–9, `PAT-COG-074/075` y el modelo regional `SRC-ACCD-REGIONS`.
- `ORIENTED_CUT`: selección situada de regiones, nodos y relaciones bajo orientación/resultado. Procede de `PAT-COG-015/024/025`, `INT-CORTE-CONTEXTUAL-COMO-PROYECCION-DE-GRAFO-MAYOR-001` y `SRC-ACCD-EQUATION`, manteniendo corte ≠ instancia contextual.
- `NODE/mNODE`: unidad encapsulable que puede abrirse como subgrafo. Procede de `SRC-MAANC-COMPOSITION`, `SRC-MAANC-STRUCTURAL`, `PAT-COG-011/070` y `SRC-MRRE-SUBGRAPH`.
- `TYPED_EDGE/RELATION`: vínculo con semántica, dirección, condiciones, alcance y procedencia. Se deriva de las relaciones compositivas de `SRC-MAANC-COMPOSITION`, de `PAT-COG-085` y del objeto candidato de `SRC-MRRE-SUBGRAPH`.
- `SUBGRAPH_OF_EFFECT`: conjunto mínimo relacional cuya configuración explica una contribución o efecto. Procede de `PAT-COG-012/017/026`, `INT-MRRE-UNIDAD-RETROCONSTRUIBLE-COMO-SUBGRAFO-DE-EFECTO-001` y `SRC-MRRE-SUBGRAPH`, secciones 7–9.
- `STRUCTURAL_SKELETON`: roles, relaciones, invariantes y variaciones abstraídos de materiales particulares. Procede de `PAT-COG-065/067/068` y la doble transformación de `SRC-CAT-MRRE-02`.
- `BINDING`: asignación trazable de un material candidato a un rol contractual del esqueleto. Procede de `PAT-COG-077/078/079/104`; no equivale a recuperación ni semejanza.
- `CANDIDATE_ARCHITECTURE`: hipótesis estructural con cobertura, evidencia, incertidumbre y alternativas. Procede de `PAT-COG-065/073/080/103/108`.
- `INVARIANT` y `VARIATION_DOMAIN`: lo que debe preservarse y lo que puede cambiar. Proceden de `SRC-KI-11`, `SRC-MTC-CORE`, `SRC-PIEA-CORE`, `PAT-COG-045/068`.
- `REINSTANTIATION`: población de un esqueleto mediante bindings válidos y posterior prueba de preservación. Procede de `PAT-COG-076…082`; se relaciona con `SRC-MTC-INSTANTIATE` pero no es la misma operación que instanciar MTC.
- `PROJECTED_NETWORK`, `REALIZED_NETWORK`, `ACTIVATED_NETWORK`: estados no colapsables de diseño, materialización y activación. Proceden de `PAT-COG-016/093`, `INT-TRIPLE-RED-PROYECTADA-REALIZADA-ACTIVADA-001` y `SRC-MRRE-SUBGRAPH`, sección 11.
- `EXPECTED_RESULT`: orientación que selecciona y pondera un corte; no es la salida materializada. Procede de `PAT-COG-025`, `INT-EXPECTED-RESULT-SELECCION-001` y `SRC-ACHIA-NORMALIZATION`.
- `EPISTEMIC_STATUS`: observación, fuente, síntesis, inferencia, hipótesis, decisión o resultado. Procede de `PAT-COG-097/108`, `SRC-MRRE-DESIGN`, sección 10.3, y `SRC-KI-11`.

**Deducción.** Estos objetos no se introducen por preferencia terminológica: cada uno existe porque colapsarlo con otro elimina una operación necesaria o rompe trazabilidad.

**Relaciones internas.** La ontología tipa todos los schemas, componentes, protocolos y artefactos generados.

**Criterio reconstructivo.** Cada tipo debe incluir definición, criterios de identidad, campos mínimos, operaciones permitidas, no-equivalencias, fuente y al menos un ejemplo/contraejemplo.

### `01_kernel_estable/04_modelo_formal_mrre.md`

**Responsabilidad.** Expresar el flujo del MRRE de forma compacta sin convertir símbolos en sustitutos de los procedimientos.

**Contenido obligatorio.** Definiciones de conjuntos y funciones para portadores, manifestaciones, campos, cortes, subgrafos, arquitecturas candidatas, esqueletos, materiales nuevos, bindings, reinstanciaciones, evidencia y trazas. Debe representar al menos:

```text
M → Â → Σ
Σ + D_nuevo → B → I_nueva
MANIFESTACIÓN → SEGMENTACIÓN → SUBGRAFOS → ARQUITECTURA → ESQUELETO
RED_PROYECTADA → RED_REALIZADA → RED_ACTIVADA → ESTADO_ACTUALIZADO
```

**Qué reutiliza y cómo.** Usa `SRC-MRRE-DESIGN`, sección 7; `SRC-MRRE-SUBGRAPH`, secciones 6, 11, 19, 20 y 25; `PAT-COG-065/071/081/093`; `SRC-MTC-STATE` para grafos ponderados cuando aplique; `SRC-MCCR-GRAPHS` para no confundir grafos de capacidades con grafos cognitivos.

**Relaciones internas.** Debe referenciar los schemas como serializaciones concretas y el protocolo general como interpretación procedimental.

**Criterio reconstructivo.** Todo símbolo debe tener definición operacional, tipo, dominio, codominio, evidencia requerida y archivo que implementa o valida la operación.

### `01_kernel_estable/05_reglas_de_no_colapso.md`

**Responsabilidad.** Consolidar separaciones cuyo incumplimiento produciría errores estructurales difíciles de detectar.

**Contenido obligatorio.** Tabla de objetos no equivalentes, síntoma del colapso, daño, detector y recuperación. Debe incluir: fuente/material/mediación/recepción; grafo de fuentes/grafo cognitivo/bindings; campo/corte/instancia contextual; manifestación/arquitectura; oración/subgrafo; nodo/función; projected/realized/activated; recuperación/equivalencia/binding; verificación/validación; feedback/verdad; capacidad/autoridad; configuración/ejecución; aplicación/chain; ejemplo/kernel; output/canon.

**Qué reutiliza y cómo.** `SRC-CAT-CS-01`, sección 3; `SRC-CAT-MRRE-02`, sección 9; `SRC-CAT-MRRE-03`, sección 5; `SRC-CAT-ASIOO-04`, sección 4; `SRC-MRRE-SUBGRAPH`, sección 23; `SRC-KI-11`, antipatrones A1–A8.

**Relaciones internas.** Cada regla debe convertirse en validador o negative case dentro de `08_validacion_y_pruebas/`.

**Criterio reconstructivo.** Ninguna regla puede quedar como advertencia retórica: debe declarar qué campos, estados o gates permiten detectarla.

### `01_kernel_estable/06_criterios_de_aceptacion_y_falsacion.md`

**Responsabilidad.** Establecer cuándo una arquitectura candidata es suficientemente útil, cuándo debe permanecer abierta y qué podría refutarla.

**Contenido obligatorio.** Criterios por capa: fidelidad al portador, cobertura, consistencia relacional, parsimonia, trazabilidad, alternativas, compatibilidad causal, preservación estructural, utilidad para el consumidor y autoridad. Debe distinguir verificación interna, validación contra propósito, falsación local y evaluación receptoral.

**Qué reutiliza y cómo.** De `SRC-KI-11`: V&V, pruebas mínimas y umbrales; de `PAT-COG-073`: certeza abductiva; `PAT-COG-080`: alternativas sobrevivientes; `PAT-COG-082`: reingreso; `PAT-COG-093`: fronteras causales; `PAT-COG-099/100`: fixtures; `SRC-MRRE-DESIGN`, secciones 23–24.

**Relaciones internas.** Produce criterios para `validation_orchestrator`, métricas, expected results, negative cases y promotion gates.

**Criterio reconstructivo.** Cada criterio debe indicar evidencia, método, umbral o regla, falso positivo conocido y acción ante fallo.

### `01_kernel_estable/07_protocolo_general_mrre.md`

**Responsabilidad.** Definir el procedimiento invariante que especializaciones y ejecuciones concretas deben instanciar.

**Contenido obligatorio.** Para cada fase: responsabilidad, trigger, inputs, precondiciones, procedimiento, artefactos, outputs, gates, fallos, recuperación, ejemplo, contraejemplo y aceptación. Ciclo mínimo: recibir solicitud; delimitar; registrar portador; navegar; segmentar; construir nodos/relaciones; deslinealizar; reconstruir subgrafos; proponer arquitecturas; derivar esqueletos; comparar alternativas; validar; reinstanciar si se solicita; producir trazas; solicitar promoción humana cuando corresponda.

**Qué reutiliza y cómo.** Adapta F1–F7 de `SRC-KI-11`; las etapas de `SRC-MRRE-SUBGRAPH`, sección 25; `PAT-COG-096` lista→protocolo; `PAT-COG-097` estado protocolario; `PAT-COG-102` fallo tipado; `PAT-COG-105` recuperación mínima; y `PAT-COG-130` precoordinación mediante procedimiento reusable.

**Relaciones internas.** Es superclase operacional de `03_protocolos_operacionales/` y fuente para el grafo de runtime.

**Criterio reconstructivo.** Debe poder ejecutarse sobre dos dominios heterogéneos sin cambiar sus fases invariantes, aunque cambien analizadores, profundidad y esqueleto resultante.

### `01_kernel_estable/08_glosario_y_bibliografia_de_procedencia.md`

**Responsabilidad.** Cerrar el vocabulario y permitir rastrear cada término al lugar donde fue definido, adaptado o introducido.

**Contenido obligatorio.** Término, definición MRRE, sinónimos prohibidos, paquete de origen, ruta, sección/patrón, transformación semántica, archivo MRRE responsable y estado. Debe incluir también un registro de fuentes adjuntas sin ruta confirmada.

**Qué reutiliza y cómo.** Sigue `PAT-COG-098` cierre léxico; `PAT-COG-104` separación de grafos y bindings; `SRC-MCCR-GLOSSARY` como precedente documental.

**Relaciones internas.** Es referenciado por ontología, schemas, integraciones y validadores de referencias.

**Criterio reconstructivo.** Ningún término técnico del paquete puede depender exclusivamente de memoria conversacional o de una ruta implícita.

---

## 4.4 `02_contratos_y_schemas/`

Los schemas no deben fijar una única forma de esqueleto. Su función es estabilizar intercambios y preservar identidad, procedencia, incertidumbre y posibilidad de extensión. Todos deberán declarar versión, campos obligatorios/opcionales, referencias, enums extensibles, invariantes, ejemplos válidos e inválidos y reglas de compatibilidad.

### `02_contratos_y_schemas/manifestation_input.schema.yaml`

**Responsabilidad.** Registrar el portador observable sin sustituirlo por una interpretación prematura.

**Contenido obligatorio.** ID, modalidad, bytes o referencia, unidades observables, orden, fuente, versión, fecha, contexto de producción/recepción, alcance autorizado, idioma, transformaciones previas, metadatos, restricciones y hash cuando exista. Debe admitir texto, imagen, secuencia, audio, video, SPA, conducta registrada y manifestaciones compuestas.

**Qué reutiliza y cómo.** `PAT-COG-001` separa fuente/material/mediación/recepción; `PAT-COG-003/004` tipa materiales de orden 1/2 y fuentes mixtas; `PAT-COG-005` registra distancia de observabilidad; `PAT-COG-028` exige trazabilidad; `SRC-MTC-MANIFESTATION` distingue capacidad, contexto y manifestación; `SRC-MRRE-SUBGRAPH` impide asumir que el portador contiene toda la arquitectura.

**Relaciones internas.** Entrada de `field_builder`, `multiscale_segmenter` y protocolo de retroconstrucción; alimenta `epistemic_trace.schema.yaml`.

**Criterio reconstructivo.** Debe ser posible volver al portador exacto y diferenciar lo observado de cualquier normalización o interpretación derivada.

### `02_contratos_y_schemas/structural_field_and_cut.schema.yaml`

**Responsabilidad.** Representar el campo reconstruido y uno o varios cortes orientados sin destruir el campo fuente.

**Contenido obligatorio.** `field_id`, boundary, contexts, layers, nodes, edges, source bindings, conflicts, missing regions; para el corte: orientación, expected result, inclusiones, exclusiones, prominencia, omisiones justificadas, roles locales, resolución y vínculo reversible al campo.

**Qué reutiliza y cómo.** Contratos `SOURCE_TO_FIELD` y `FIELD_TO_ORIENTED_CUT` de `SRC-MRRE-DESIGN`, sección 19; `PAT-COG-015/024/025`, `074/075/083/092`; `SRC-ACCD-EQUATION` para campo, instancia y proyección, manteniendo `ORIENTED_CUT ≠ CONTEXTUAL_INSTANCE`.

**Relaciones internas.** Salida de `field_builder` y `cut_engine`; entrada de `structure_selector`, triangulación y schemas de subgrafo.

**Criterio reconstructivo.** Cada elemento del corte debe poder rastrearse al campo y cada omisión relevante debe conservar razón y efecto esperado.

### `02_contratos_y_schemas/reconstructed_subgraph.schema.yaml`

**Responsabilidad.** Serializar la unidad retroconstruible central del MRRE.

**Contenido obligatorio.** `focal_node`, `related_nodes`, `typed_edges`, dependencias previas/simultáneas/subsecuentes/presupuestas, input state, projected output state, trajectory position, context, epistemic status, source bindings, function/effect hypotheses, alternatives y confidence. Debe admitir subgrafos anidados y vistas multirresolución.

**Qué reutiliza y cómo.** Objeto candidato de `SRC-MRRE-SUBGRAPH`, sección 24; `PAT-COG-011/012/013/017/070/095`; relaciones y campos de mNode de `SRC-MAANC-COMPOSITION` y `SRC-MAANC-STRUCTURAL`.

**Relaciones internas.** Salida de `subgraph_reconstructor`; insumo de `skeleton_inferer`, `trace_graph`, comparación y validación.

**Criterio reconstructivo.** Un subgrafo válido debe expresar por qué el efecto depende de la configuración relacional y no sólo del nodo focal.

### `02_contratos_y_schemas/structural_skeleton.schema.yaml`

**Responsabilidad.** Representar la abstracción reinstanciable obtenida después de separar estructura y materiales particulares.

**Contenido obligatorio.** Roles/slots contractuales, relaciones, cardinalidades, orden, topología, invariantes, variaciones permitidas, contextos válidos, condiciones de suficiencia, rutas funcionales, cut-sets si están evidenciados, huecos, alternativas, certeza y procedencia desde la arquitectura reconstruida.

**Qué reutiliza y cómo.** `PAT-COG-065/067/068/069/078/081/128/129`; `SRC-MRRE-SUBGRAPH`, secciones 17 y 20; `SRC-KI-11` para interfaces, invariantes y validaciones. No toma una plantilla editorial ni presupone slots universales.

**Relaciones internas.** Salida de `skeleton_inferer`; entrada de `reinstantiation_engine`, taxonomía de esqueletos y `reinstantiation_binding.schema.yaml`.

**Criterio reconstructivo.** Debe poder distinguir qué relación es necesaria, opcional, contextual o sólo hipotética y mostrar su origen en la arquitectura candidata.

### `02_contratos_y_schemas/reinstantiation_binding.schema.yaml`

**Responsabilidad.** Registrar la población de roles del esqueleto con materiales de un dominio nuevo.

**Contenido obligatorio.** Referencias al esqueleto y campo nuevo; candidato recuperado; rol; evidencia; tipo de equivalencia; prueba contractual; incompatibilidades; huecos; alternativas; decisión; autoridad; estado y diff previsto. Debe distinguir `retrieval`, `equivalence_assessment` y `binding`.

**Qué reutiliza y cómo.** `PAT-COG-076…081`, `PAT-COG-104`, arquitectura de reinstanciación sin invención de `SRC-CAT-MRRE-02`, sección 8.2; `SRC-MAANC-COMPOSITION` para superficie de transferencia y validación.

**Relaciones internas.** Producido por `structure_selector` y consumido por `reinstantiation_engine`; se valida mediante `STRUCTURE_PRESERVATION_DIFF`.

**Criterio reconstructivo.** Un binding no puede aprobarse sólo por semejanza léxica; debe satisfacer rol, relaciones, contexto, invariantes y restricciones.

### `02_contratos_y_schemas/epistemic_trace.schema.yaml`

**Responsabilidad.** Mantener la cadena de procedencia y derivación de cada objeto MRRE.

**Contenido obligatorio.** Actor o módulo, tiempo, input refs, operación, output refs, source spans, epistemic status, inferential rule, alternatives, confidence, decisión humana, versión y hashes. Debe admitir trazabilidad bidireccional y multiescala.

**Qué reutiliza y cómo.** `PAT-COG-028/072/073/097/104/106/108`; sidecar de trazabilidad de `SRC-MAANC-COMPOSITION`; `SRC-MCCR-RUNLOG`; Portada A–I y D9 de `SRC-KI-11`.

**Relaciones internas.** Schema común de `trace_graph`, `epistemic_ledger`, protocolos, artefactos y registros del acervo.

**Criterio reconstructivo.** Debe permitir dos recorridos: fuente → resultado y resultado → fuente/decisiones, sin perder cambios de resolución.

### `02_contratos_y_schemas/mrre_result.schema.yaml`

**Responsabilidad.** Proveer un sobre común para resultados heterogéneos sin imponerles contenido idéntico.

**Contenido obligatorio.** Solicitud, execution plan, artefactos producidos, arquitectura(s) candidata(s), subgrafos, esqueleto, reinstanciación opcional, alternativas, incertidumbres, fallos, validaciones, trace refs, consumer handoff, estado y promotion status.

**Qué reutiliza y cómo.** `PAT-COG-080` alternativas como resultado; `PAT-COG-089/090` núcleo multiconsumidor; `PAT-COG-103` resolución parcial; `PAT-COG-126` resultado como estrato distinto de ejecución; contrato de salida MCCR en `SRC-MCCR-PLAN`.

**Relaciones internas.** Consumido por AC-HIA, ACCD, aprendizaje, comparadores y almacenamiento de artefactos.

**Criterio reconstructivo.** Debe poder representar éxito, éxito parcial, alternativas no resueltas, fallo recuperable y bloqueo humano sin inventar una conclusión única.

---

## 4.5 `03_protocolos_operacionales/`

### `03_protocolos_operacionales/01_navegacion_estructural.md`

**Responsabilidad.** Examinar el campo nuevo antes de activar matching, clasificación o transferencia.

**Contenido obligatorio.** Delimitación; inventario de fuentes/materiales; capas; unidades; relaciones; contextos; conflictos; vacíos; cambios de resolución; candidatos estructurales sólo después de la navegación. Debe producir `STRUCTURAL_FIELD`, `MISSING_REGION_REPORT` y `SEARCH_SIGNATURE`.

**Qué reutiliza y cómo.** `PAT-COG-076` navegación antes de matching; `PAT-COG-105` recuperación mínima suficiente; `PAT-COG-001…006` para fuentes; `SRC-MAANC-STRUCTURAL` para extracción sin salto inmediato a construcción conceptual.

**Relaciones internas.** Precede retroconstrucción, comparación y reinstanciación; usa `field_builder` y entrega a `structure_selector`.

**Criterio reconstructivo.** El protocolo debe poder demostrar qué se descubrió antes de consultar el acervo y qué sesgos habría introducido una clasificación prematura.

### `03_protocolos_operacionales/02_retroconstruccion.md`

**Responsabilidad.** Reconstruir desde una o varias manifestaciones los subgrafos, la arquitectura candidata y el esqueleto que podrían haberlas producido.

**Contenido obligatorio.** Dos modos: fuente disponible y sólo manifestación. Etapas: ingestión; segmentación; extracción; redes realizadas; función/efecto; deslinealización; subgrafos; trayectoria; hipótesis estructurales; alternativas; red proyectada como-si; corte; expected result; esqueleto; validación. Debe marcar qué capas son observables y cuáles abductivas.

**Qué reutiliza y cómo.** `PAT-COG-026`, `064…073`, `093`, `095`; pipeline de `SRC-MRRE-SUBGRAPH`; algoritmo de `SRC-MRRE-DESIGN`, sección 10; MAANC como conjunto de observadores. La dirección inversa no se presenta como reversión perfecta.

**Relaciones internas.** Orquesta `multiscale_segmenter`, `subgraph_reconstructor`, `skeleton_inferer`, `epistemic_ledger` y validadores.

**Criterio reconstructivo.** Debe entregar al menos una arquitectura candidata, su evidencia, sus alternativas y el límite de lo que no puede inferirse.

### `03_protocolos_operacionales/03_triangulacion_multimanifestacion.md`

**Responsabilidad.** Integrar evidencia parcial procedente de manifestaciones heterogéneas sin asumir que todas representan el mismo corte o estado.

**Contenido obligatorio.** Registro independiente por manifestación; normalización de identidad; comparación de cortes; convergencias, contradicciones y complementariedades; temporalidad; modalidad; hipótesis de arquitectura compartida; regiones exclusivas; confidence update y solicitud de evidencia adicional.

**Qué reutiliza y cómo.** `SRC-CS-OPS`, sección 23; `PAT-COG-002` convergencia de fuentes; `PAT-COG-015/024` cortes; `PAT-COG-074/075` federación/campo multiplexado; `PAT-COG-107` acumulaciones no fusionables; `SRC-PIEA-CORE` para acumulación sin perder trayectoria.

**Relaciones internas.** Produce campos federados para retroconstrucción y alimenta el caso `triangulacion_multimodal/`.

**Criterio reconstructivo.** Debe preservar qué aporta cada manifestación y evitar que la agregación borre contradicciones o diferencias de contexto.

### `03_protocolos_operacionales/04_reinstanciacion.md`

**Responsabilidad.** Transferir un esqueleto validado a materiales nuevos preservando estructura funcional y explicitando pérdidas.

**Contenido obligatorio.** Declaración del esqueleto; navegación del dominio nuevo; búsqueda; equivalencia contractual; bindings; huecos; alternativas; composición; realización candidata; `STRUCTURE_PRESERVATION_DIFF`; reingreso; decisión humana. Debe admitir reinstanciación completa, parcial, bloqueada y múltiple.

**Qué reutiliza y cómo.** Arquitectura `PAT-COG-076…082`; `PAT-COG-044/045/046` adaptación y recomposición; `PAT-COG-078` equivalencia; `SRC-MTC-INSTANTIATE` aporta disciplina de pasos y validación contra otra instancia, sin confundir reinstanciación MRRE con instanciación de una MTC.

**Relaciones internas.** Usa schemas de esqueleto/binding, `structure_selector`, `reinstantiation_engine`, comparación y V&V.

**Criterio reconstructivo.** Debe mostrar qué se preservó, cambió, perdió, añadió y permanece sin resolver.

### `03_protocolos_operacionales/05_comparacion_y_transferencia.md`

**Responsabilidad.** Comparar manifestaciones, arquitecturas o esqueletos por relaciones y funciones, no sólo por vocabulario.

**Contenido obligatorio.** Nivel de comparación; firma; correspondencias; diferencias; invariantes compartidos; variaciones; contextos; equivalencias parciales; incompatibilidades; rutas transferibles y transferencias prohibidas.

**Qué reutiliza y cómo.** `SRC-MAANC-COMPOSITION`, superficie de transferencia; `PAT-COG-060` misma lógica/distinto sistema objetivo; `PAT-COG-068` variabilidad; `PAT-COG-078` equivalencia contractual; `PAT-COG-081` diff; `PAT-COG-120` representación operable declara pérdidas.

**Relaciones internas.** Alimenta taxonomía, invariantes aprendidos y reinstanciación.

**Criterio reconstructivo.** Una equivalencia debe indicar alcance, condiciones y relaciones conservadas; “se parece a” no constituye un resultado válido.

### `03_protocolos_operacionales/06_feedback_y_actualizacion.md`

**Responsabilidad.** Incorporar nueva evidencia sin tratar feedback como verdad ni reconstruir indiscriminadamente todo el paquete.

**Contenido obligatorio.** Captura; fuente/método; clasificación; capa afectada; hipótesis de corrección; dependientes; pruebas a reejecutar; reingreso; decisión; versionado; promoción. Debe distinguir actualización de ejecución, arquitectura candidata, acervo e invariante del kernel.

**Qué reutiliza y cómo.** `PAT-COG-040…046`, `082`, `108`, `114`, `115`; `SRC-MTC-FEEDBACK`; `SRC-MCCR-RUNLOG`; contrato `FEEDBACK_TO_CORRECTION_PROPOSAL` de `SRC-MRRE-DESIGN`, sección 19.8.

**Relaciones internas.** Actualiza artefactos, registros y decisiones bajo gobierno humano.

**Criterio reconstructivo.** Toda actualización debe indicar evidencia nueva, región afectada, versión previa, cambio propuesto y validaciones retroactivas.

---

## 4.6 `04_runtime/`

### `04_runtime/01_grafo_de_ejecucion.md`

**Responsabilidad.** Representar dependencias entre etapas y componentes sin convertir el procedimiento general en una cadena rígida.

**Contenido obligatorio.** Nodos de operación, pre/postcondiciones, entradas/salidas, gates, bifurcaciones, ciclos, reingresos, condiciones de omisión y paths mínimos por operación. Debe separar arquitectura MRRE, aplicación reusable, configuración situada, chain, ejecución y resultado.

**Qué reutiliza y cómo.** `PAT-COG-013` chain derivada de red; `PAT-COG-118` posible/disponible/activo/plan; `PAT-COG-126` estratificación; `PAT-COG-129` rutas y cortes; `SRC-MCCR-PIPELINE` como patrón de stages; `SRC-MTC-PIPELINE` como referencia de máquina de estados, no como pipeline copiado.

**Relaciones internas.** Es compilado por MCCR hacia execution plans y referencia el registro de componentes.

**Criterio reconstructivo.** Debe mostrar múltiples rutas válidas y los conjuntos de dependencias cuya falla bloquea una capacidad.

### `04_runtime/02_maquina_de_estados.md`

**Responsabilidad.** Dar consecuencias operativas explícitas al estado de una ejecución MRRE.

**Contenido obligatorio.** Estados como `RECEIVED`, `NORMALIZED`, `FIELD_NAVIGATED`, `RECONSTRUCTING`, `ALTERNATIVES_PENDING`, `VALIDATING`, `REINSTANTIATING`, `WAITING_HUMAN_DECISION`, `PARTIAL`, `COMPLETED`, `FAILED_RECOVERABLE`, `FAILED_TERMINAL`; eventos; guards; acciones; artefactos; rollback y replan.

**Qué reutiliza y cómo.** `PAT-COG-097` estado protocolario; `PAT-COG-102` fallo tipado; `SRC-MCCR-STATE`; `SRC-PIEA-TRANSITION` para tipos de transición; `SRC-MTC-PIPELINE` para distinguir transición de estado y manifestación.

**Relaciones internas.** Gobierna run logs, manejo de fallas y estado del resultado.

**Criterio reconstructivo.** Ningún estado puede ser una etiqueta sin precondiciones, consecuencias, eventos de salida y artefactos permitidos.

### `04_runtime/03_registro_de_componentes.yaml`

**Responsabilidad.** Declarar capacidades ejecutables y permitir a MCCR descubrirlas y componerlas.

**Contenido obligatorio.** ID, versión, archivo, capacidad, operación, input/output schemas, precondiciones, dependencias, modalities, costs, risks, gates, failure modes, observability, validators y compatibility. Debe distinguir available de active.

**Qué reutiliza y cómo.** `PAT-COG-014` capacidad reutilizable; `PAT-COG-087/088/090/118`; `SRC-MCCR-TOPOLOGY`, `SRC-MCCR-GRAPHS` y `SRC-MCCR-PLAN`.

**Relaciones internas.** Sincronizado con manifiesto, grafo de ejecución e integrador MCCR.

**Criterio reconstructivo.** MCCR debe poder construir un plan sin inferir capacidades ocultas a partir de prosa.

### `04_runtime/04_manejo_de_fallas_y_recuperacion.md`

**Responsabilidad.** Definir respuesta ante fallos epistemológicos, contractuales, operativos y de autoridad.

**Contenido obligatorio.** Taxonomía: portador inválido, fuente ausente, conflicto, navegación incompleta, no feasible plan, equivalencia no demostrada, binding imposible, causalidad no sustentada, trace roto, validador fallido, autorización ausente y consumidor incompatible. Para cada fallo: detector, severidad, estado, recuperación, degradación, escalamiento y artefacto.

**Qué reutiliza y cómo.** `PAT-COG-079/080/102/103`; `SRC-MCCR-FAILURES`; antipatrones de `SRC-KI-11`; gates de soberanía.

**Relaciones internas.** Usado por todos los componentes y por `mrre_result.schema.yaml`.

**Criterio reconstructivo.** Debe preferir resolución parcial trazable o detención explícita a completar huecos mediante invención.

### `04_runtime/componentes/01_field_builder.md`

**Responsabilidad.** Construir un campo estructural multicapas con límites, procedencia y conflictos visibles.

**Contenido obligatorio.** Contratos, procedimiento, tipos de capa, federación, multiplexación, source bindings, vacíos, conflictos, salidas y validadores.

**Herencia.** `SRC-MRRE-DESIGN`, secciones 5, 6 y 9; `PAT-COG-001…006`, `074/075/092/104`; `SRC-ACCD-REGIONS` como ejemplo de campo regional, sin copiar su ontología específica.

**Relaciones.** Precede `cut_engine`, triangulación y navegación.

**Aceptación.** No fusionar fuentes ni contextos incompatibles y conservar fronteras explícitas.

### `04_runtime/componentes/02_cut_engine.md`

**Responsabilidad.** Producir cortes orientados, reversibles y justificados.

**Contenido obligatorio.** Compilación de expected result, reglas de selección/exclusión/prominencia, roles situados, omisiones y trace al campo.

**Herencia.** `PAT-COG-015/024/025/070/083`; `INT-EXPECTED-RESULT-SELECCION-001`; `SRC-MRRE-DESIGN`, secciones 7.2, 7.3 y 8.

**Relaciones.** Consume field schema; entrega a organización, subgrafos y handoffs.

**Aceptación.** No alterar silenciosamente el campo ni confundir corte con instancia contextual.

### `04_runtime/componentes/03_multiscale_segmenter.md`

**Responsabilidad.** Descomponer manifestaciones en niveles funcionales sin perder orden, anidamiento o correspondencia con el portador.

**Contenido obligatorio.** Unidades, spans, jerarquía, orden, solapamientos, resolución, funciones locales y expansión perezosa hasta palabra cuando sea pertinente.

**Herencia.** `SRC-MAANC-UNDERSTANDING`, segmentación gruesa/fina; `SRC-MAANC-STRUCTURAL`; `PAT-COG-056/069/071/072/095`; `SRC-MRRE-SUBGRAPH`, multirresolución.

**Relaciones.** Alimenta subgraph reconstructor y trace graph.

**Aceptación.** Debe poder reconstruir de cada unidad su span y nivel superior/inferior.

### `04_runtime/componentes/04_subgraph_reconstructor.md`

**Responsabilidad.** Reconstruir unidades relacionales de función y efecto a partir de unidades segmentadas.

**Contenido obligatorio.** Nodos, edges, dependencias, estados, función, efecto, trayectoria, contexto, alternativas, certeza y módulos observadores participantes.

**Herencia.** `SRC-MRRE-SUBGRAPH`; `PAT-COG-011/012/013/017/026/070`; `SRC-MAANC-COMPOSITION` para relaciones tipadas.

**Relaciones.** Entrega a skeleton inferer, epistemic ledger y validación.

**Aceptación.** El efecto debe atribuirse a una configuración evidenciada, no a un nodo aislado por defecto.

### `04_runtime/componentes/05_skeleton_inferer.md`

**Responsabilidad.** Pasar de arquitectura candidata a esqueleto abstracto reinstanciable.

**Contenido obligatorio.** Abstracción de materiales, roles, relaciones, invariantes, variaciones, topología, rutas, huecos, alternativas y gradiente abductivo.

**Herencia.** `PAT-COG-064…069`, `073`, `080`, `128/129`; `SRC-MRRE-SUBGRAPH`, sección 17; `SRC-KI-11` para abstracción y dominio de validez.

**Relaciones.** Produce `structural_skeleton.schema.yaml`; alimenta taxonomía y reinstanciación.

**Aceptación.** No imponer tipología previa cuando el ejemplar requiera un esqueleto nuevo.

### `04_runtime/componentes/06_structure_selector.md`

**Responsabilidad.** Recuperar candidatos del acervo, evaluar equivalencias y proponer bindings sin colapsar las tres operaciones.

**Contenido obligatorio.** Firma de necesidad, búsqueda, ranking no vinculante, equivalencia contractual, alternativas, huecos, decisión y trazabilidad.

**Herencia.** `SRC-MRRE-DESIGN`, sección 12; `PAT-COG-076…080`, `087`, `104/105`; `SRC-MAANC-COMPOSITION`, operaciones de composición.

**Relaciones.** Consulta índice federado y entrega bindings al reinstantiation engine.

**Aceptación.** Una coincidencia de búsqueda nunca autoriza por sí sola integración o binding.

### `04_runtime/componentes/07_reinstantiation_engine.md`

**Responsabilidad.** Materializar una instancia nueva desde un esqueleto y bindings aprobados.

**Contenido obligatorio.** Población, composición, manejo de huecos, restricciones, validación descendente/ascendente, diff y reingreso.

**Herencia.** `PAT-COG-077…085`, `044…046`; `SRC-MTC-INSTANTIATE` como disciplina comparativa; `SRC-KI-11` para V&V.

**Relaciones.** Consume schemas de skeleton/binding y produce reinstanciaciones y trazas.

**Aceptación.** Debe reportar explícitamente preservaciones, modificaciones, pérdidas e invenciones prohibidas.

### `04_runtime/componentes/08_trace_graph.md`

**Responsabilidad.** Mantener un grafo reversible de derivación entre portador, unidades, subgrafos, arquitectura, esqueleto, bindings y resultado.

**Contenido obligatorio.** Tipos de enlace, granularidad, versionado, source spans, operaciones, actores, decisiones y consultas forward/backward.

**Herencia.** `PAT-COG-028/072/104`; `SRC-MCCR-RUNLOG`; `SRC-KI-11`, trazabilidad requisito→diseño→prueba→resultado.

**Relaciones.** Trabaja con epistemic ledger pero no lo sustituye: trace registra derivación; ledger registra autoridad epistémica.

**Aceptación.** Toda afirmación estructural debe llegar a fuente, inferencia o decisión identificada.

### `04_runtime/componentes/09_epistemic_ledger.md`

**Responsabilidad.** Registrar qué tipo de conocimiento representa cada elemento y qué promoción ha recibido.

**Contenido obligatorio.** Estados, precedencia, confianza, evidencia, inferencia, alternativas, autoridad, promoción, supersesión y conflictos.

**Herencia.** `PAT-COG-073/097/106/108/115`; `SRC-MRRE-DESIGN`, leyenda de autoridad; `SRC-CC-INSTALL`.

**Relaciones.** Se enlaza con trace graph, decisiones y acervo.

**Aceptación.** Ninguna hipótesis puede serializarse como observación ni un output como canon.

### `04_runtime/componentes/10_validation_orchestrator.md`

**Responsabilidad.** Seleccionar y ejecutar validadores por capa, consolidar resultados y bloquear promociones inválidas.

**Contenido obligatorio.** Registro de validators, orden, dependencias, severidad, gates, evidence refs, rerun, fallos y reporte.

**Herencia.** F6 y antipatrones de `SRC-KI-11`; `PAT-COG-006/036/082/093/099/100/114`; `SRC-ACHIA-VALIDATORS`; `SRC-MCCR-AUTH`.

**Relaciones.** Consume criterios de aceptación, métricas, matriz de cobertura y negative cases.

**Aceptación.** Debe distinguir prueba pasada, evidencia suficiente y autorización de promoción: ninguna implica automáticamente las otras.

---

## 4.7 `05_acervo_estructural/`

El acervo es evolutivo y federado. No forma parte del kernel invariante. Una entrada del acervo puede ser útil, estar validada y aun así no ser aplicable a una ejecución concreta.

### `05_acervo_estructural/01_indice_federado_de_patrones_mrre.md`

**Responsabilidad.** Hacer consultables los cuatro catálogos obligatorios sin duplicar sus definiciones dentro del MRRE.

**Contenido obligatorio.** Para cada `PAT-COG-*`: catálogo y ruta exacta, intención resumida, firma, operaciones MRRE que lo consultan, contextos permitidos, no-equivalencias, estado, tests relacionados y ejemplos. Debe incluir índices por operación, objeto ontológico, modalidad, fase y riesgo.

**Fuentes federadas.** `SRC-CAT-CS-01`, `SRC-CAT-MRRE-02`, `SRC-CAT-MRRE-03` y `SRC-CAT-ASIOO-04`. Las referencias de alta prioridad incluyen: fuentes `001…009`; redes/cortes `010…029`; gobierno `030…039`; aprendizaje/adaptación `040…046`; generación/estado `047…063`; inducción/reinstanciación/runtime `064…115`; integración/gobierno `116…125`; estratificación/topología/procedimiento `126…130`.

**Adaptación.** El índice declara usos, no redefine patrones. Puede añadir una `MRRE_APPLICATION_NOTE`, pero debe conservar intactos ID, fuente y estado epistemológico.

**Relaciones internas.** Consultado por `structure_selector`, protocolos, integraciones, taxonomía, validación y ejemplos.

**Criterio reconstructivo.** Debe ser posible localizar la definición original de cualquier patrón en un salto y saber por qué MRRE lo consulta.

### `05_acervo_estructural/CATALOGO_COMPLEMENTARIO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_2_0.md`

**Responsabilidad.** Conservar el catálogo ya existente que formaliza las estructuras nacidas del scaffolding MRRE y de decisiones relacionadas.

**Contenido que debe preservarse.** Patrones `PAT-COG-064…115`, arquitecturas compuestas, reglas de no colapso, tests 11–27 y trazabilidad documental. Son especialmente nucleares `064` aparato estable/configuración dinámica, `065` dos transformaciones, `066` inducción antes de generación, `076…082` reinstanciación sin invención, `086…095` runtime/recepción, `096…108` protocolariedad/epistemología y `109…115` scaffolding.

**Uso por MRRE.** Funciona como biblioteca de decisiones formalizadas y como fuente de validadores. No debe recortarse hasta convertirlo en documentación interna de un solo módulo.

**Relaciones internas.** Es fuente del índice federado, kernel, protocolos, schemas, runtime y plan de pruebas.

**Criterio reconstructivo.** Conservar nombre, versión, IDs, reglas de deduplicación y trazabilidad. Cualquier sucesor debe declarar compatibilidad y patrones superseded.

### `05_acervo_estructural/CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_3_0.md`

**Responsabilidad.** Conservar la extensión existente que conecta MRRE con ASIOO, gobierno, representación operable y coordinación.

**Contenido que debe preservarse.** `PAT-COG-116` función–información–coordinación; `117` integración situada; `118` reducción possible/available/active/plan; `119` estado compartido y vistas; `120` representación operable; `121` capas/capacidades transversales; `122` tejido de coordinación; `123` transformación semántica distribuida; `124` intensidad de gobierno; `125` plano de gobierno. Debe conservar el ledger de comandos e intuiciones.

**Uso por MRRE.** Ayuda a reconstruir sistemas orientados a objetivos, representar pérdidas y detectar dónde se produjo significado o gobierno. No transforma MRRE en ASIOO.

**Relaciones internas.** Fuente de integraciones ASIOO/Consciencia, ontología, campos, runtime y especializaciones sistémicas.

**Criterio reconstructivo.** Las correspondencias con MRRE deben permanecer como `STRUCTURAL_MAPPING / CANDIDATE_APPLICATION` cuando no sean decisiones canónicas.

### `05_acervo_estructural/02_taxonomia_de_esqueletos_estructurales.md`

**Responsabilidad.** Proveer una clasificación abierta para describir esqueletos descubiertos sin obligar a que cada caso pertenezca a una sola clase.

**Contenido obligatorio.** Al menos nueve familias candidatas —causal, temporal/procesual, funcional, sistémica/topológica, argumentativa, narrativa/expositiva, transformacional, instructiva y de efecto/intervención— con criterios, firmas, variantes, ejemplos, contraejemplos y combinaciones. Debe permitir `NEW_SKELETON_TYPE_CANDIDATE`.

**Qué reutiliza y cómo.** `PAT-COG-067/068/073/080`; patrones de chain, trayectorias y topología `013`, `050`, `128`, `129`; analizadores MAANC de `SRC-MAANC-MACRO`; especializaciones de `SRC-MRRE-DESIGN`, sección 21.

**Relaciones internas.** Usado por skeleton inferer, comparador, registro de arquitecturas y validación multicorpus.

**Criterio reconstructivo.** Cada clase debe tener condiciones de pertenencia y límites; no basta una lista de nombres.

### `05_acervo_estructural/03_registro_de_arquitecturas_retroconstruidas.yaml`

**Responsabilidad.** Indexar resultados validados o candidatos para recuperación comparativa sin convertirlos en patrones generales.

**Contenido obligatorio.** ID, objeto, manifestaciones, fuentes, versión, arquitectura, esqueleto, modalidades, contexts, confidence, alternatives, tests, trace refs, status, consumer y promotion. El registro almacena referencias, no necesariamente grafos completos.

**Qué reutiliza y cómo.** `PAT-COG-099/100` fixture y límite del ejemplo; `PAT-COG-101` calibración multicorpus; `PAT-COG-108/115` promoción; `SRC-KI-11` trazabilidad y versionado.

**Relaciones internas.** Apunta a `10_artefactos_generados/arquitecturas_retroconstruidas/` y alimenta comparación e invariantes aprendidos.

**Criterio reconstructivo.** Debe distinguir caso, arquitectura, esqueleto y patrón; compartir estructura no fusiona identidades.

### `05_acervo_estructural/04_registro_de_invariantes_aprendidos.md`

**Responsabilidad.** Conservar regularidades inducidas de múltiples casos bajo estado explícitamente no canónico hasta revisión humana.

**Contenido obligatorio.** Formulación, casos de apoyo, casos negativos, dominio, confidence, método inductivo, alternativas, excepciones, tests, dependientes y estado de promoción.

**Qué reutiliza y cómo.** `PAT-COG-041/042/045`, `066/067/068`, `101`, `108`, `114/115`; F7 de `SRC-KI-11`. La inducción nunca salta directamente de un caso a kernel.

**Relaciones internas.** Consulta registros de arquitecturas y regression; puede proponer cambios al catálogo o kernel mediante gobierno.

**Criterio reconstructivo.** Un invariante debe declarar qué evidencia lo refutaría y en qué dominio deja de aplicar.

### `05_acervo_estructural/05_mapa_de_procedencia_estructural.md`

**Responsabilidad.** Explicar la genealogía de patrones, esqueletos, intuiciones y conceptos utilizados por MRRE.

**Contenido obligatorio.** Relaciones `derived_from`, `specializes`, `adapts`, `contrasts_with`, `supersedes`, `tested_by`, `used_by`; rutas exactas; IDs `INT-*`; decisiones humanas; versiones y huecos.

**Qué reutiliza y cómo.** Ledger de `SRC-CAT-MRRE-03`, sección 4; ledger de `SRC-CS-OPS`, sección 33; `PAT-COG-072/104/108`; `SRC-MRRE-DESIGN`, sección 29.

**Relaciones internas.** Complementa gobierno/fuentes, trace graph y glosario.

**Criterio reconstructivo.** Debe permitir reconstruir la cadena conversación/intuición → patrón → componente MRRE → prueba, sin afirmar que todo antecedente tiene igual autoridad.

---

## 4.8 `06_especializaciones/`

Cada especialización añade restricciones, analizadores y validadores. No redefine el kernel. Debe declarar modalidad, objetos, módulos activables, schemas extendidos, corpus, fallos y criterios de pertenencia según `PAT-COG-091`.

### `06_especializaciones/01_retroconstruccion_textual.md`

**Responsabilidad.** Especializar MRRE para manifestaciones lingüísticas preservando jerarquía, orden, spans y función discursiva.

**Contenido obligatorio.** Ingestión textual; segmentación; mNodes; redes discursiva/realizada/asociativa; observadores argumentativo, causal, temporal, ontológico, retórico, narrativo y sistémico; negación, modalidad, referencia y procedencia; alternativas e intención no observable.

**Qué reutiliza y cómo.** `SRC-MRRE-SUBGRAPH`; `SRC-MAANC-UNDERSTANDING`, sección 14; `SRC-MAANC-STRUCTURAL`; `PAT-COG-069…073`, `084/085/095`; `SRC-MRRE-DESIGN`, sección 21.1.

**Relaciones internas.** Es primera especialización y fixture de todos los componentes nucleares.

**Criterio reconstructivo.** Debe deslinealizar sin perder orden y separar red discursiva, conocimiento supuesto y asociaciones proyectadas.

### `06_especializaciones/02_campo_de_acontecimientos.md`

**Responsabilidad.** Reconstruir un campo de eventos y comparar manifestaciones como cortes noticiosos, cronológicos, causales o centrados en actores.

**Contenido obligatorio.** Eventos, actores, estados, temporalidad, fuentes, versiones, omisiones, focalización, causalidad evidenciada, identidad selection y campo común. Reuters v1/v2 actúa como fixture inicial.

**Qué reutiliza y cómo.** `PAT-COG-015/024/025/050/074/075/083/092`; `INT-CORTES-DE-NUCLEO-REUTERS-001`; `SRC-MRRE-DESIGN`, sección 21.2.

**Relaciones internas.** Prueba field builder, cut engine, triangulación y comparación.

**Criterio reconstructivo.** Dos relatos no se consideran entidades distintas sólo por diferencias textuales ni idénticos sólo por compartir vocabulario.

### `06_especializaciones/03_explicacion_de_mecanismos.md`

**Responsabilidad.** Reconstruir mecanismos mediante partes, funciones, flujos, condiciones y secuencia causal.

**Contenido obligatorio.** Part-whole, inputs/outputs, transformación, dependencias, estados, controles, condiciones, rutas suficientes, cuellos de botella y modelos alternativos. La aspiradora es caso de referencia.

**Qué reutiliza y cómo.** `PAT-COG-012`, `056`, `063`, `084`, `116`, `128/129`; `SRC-KI-11` para descomposición y V&V; `SRC-MRRE-DESIGN`, secciones 14 y 21.3.

**Relaciones internas.** Tensiona alineación multiescala y validación causal.

**Criterio reconstructivo.** Debe distinguir explicación funcional, causalidad observada y modelo cotidiano no validado.

### `06_especializaciones/04_mapa_argumentativo.md`

**Responsabilidad.** Reconstruir soporte lógico y epistemológico sin confundir orden retórico con validez argumentativa.

**Contenido obligatorio.** Claims, evidencia, garantías, respaldos, objeciones, condiciones, modalidad, fuente, inferencias, contradicciones y alternativas.

**Qué reutiliza y cómo.** Analizador argumentativo de `SRC-MAANC-MACRO`; relaciones tipadas de `SRC-MAANC-COMPOSITION`; `PAT-COG-006/073/097/108`; `SRC-MRRE-DESIGN`, sección 21.4.

**Relaciones internas.** Usa epistemic ledger y validation orchestrator.

**Criterio reconstructivo.** Cada arista de soporte debe declarar evidencia o regla inferencial y su estatus.

### `06_especializaciones/05_trayectoria_narrativa_expositiva.md`

**Responsabilidad.** Reconstruir una manifestación como recorrido funcional por un grafo.

**Contenido obligatorio.** Punto de entrada, orientación, secuencia, foco, revelación, tensión, omisión, repetición, transición, cierre, efectos locales y globales; recorridos alternativos.

**Qué reutiliza y cómo.** Constructor de trayectoria, detector de esquemas y detector expositivo de `SRC-MAANC-MACRO`; `PAT-COG-013/050/069/070/071/084`; `SRC-MRRE-DESIGN`, sección 21.6.

**Relaciones internas.** Se conecta con textual, proyección instruccional y multimodal.

**Criterio reconstructivo.** El orden debe modelarse como relación funcional, no sólo como índice de párrafos o escenas.

### `06_especializaciones/06_proyeccion_instruccional.md`

**Responsabilidad.** Reinstanciar estructuras para que un receptor pueda reconstruir, discriminar, transferir y operar el conocimiento.

**Contenido obligatorio.** Perfil receptor, estado inicial, puentes, secuencia, contraste, ruptura de analogía, pruebas, feedback y evidencia de transferencia. Debe separar exposición, activación, evaluación, integración y aprendizaje.

**Qué reutiliza y cómo.** `SRC-AE-README` y fuente adjunta `APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf` como `PATH_PENDING_CONFIRMATION`; `PAT-COG-040/041/044/045/094`; `SRC-PIEA-CORE`; `SRC-MRRE-DESIGN`, sección 21.5.

**Relaciones internas.** Consume esqueletos/reinstanciaciones y aporta pruebas receptorales.

**Criterio reconstructivo.** No declarar aprendizaje sólo porque la manifestación fue presentada o verbalmente reconocida.

### `06_especializaciones/07_manifestaciones_multimodales.md`

**Responsabilidad.** Extender la retroconstrucción y triangulación a imágenes, secuencias, video, sonido e interfaces.

**Contenido obligatorio.** Unidades por modalidad, alineación temporal/espacial, invariantes, transformaciones, correspondencias intermodales, omisiones, redundancias, recepción y adapters. Debe admitir visual sequence, audiovisual script e interactive manifestation.

**Qué reutiliza y cómo.** `PAT-COG-002/015/024/069/071/090/092/095/107`; `SRC-MRRE-DESIGN`, sección 21.7; corpus adjunto `theme_visual_video_4.pdf`, `secuencia_de_imagenes.pdf`, `EC06`, `EC07`, `EC10`, `EC12`, conservado como corpus aplicado, no kernel.

**Relaciones internas.** Usa triangulación, registry de adapters y casos multimodales.

**Criterio reconstructivo.** Debe conservar qué modalidad evidencia cada relación y evitar traducir automáticamente rasgos visuales a proposiciones lingüísticas.

---

## 4.9 `07_integraciones/`

### `07_integraciones/01_AC_HIA_MRRE.md`

**Responsabilidad.** Definir cómo una intervención humana llega a MRRE y cómo sus resultados se vuelven inspeccionables sin convertir la interacción en un formulario permanente.

**Contenido obligatorio.** Flujo humano → frontend → normalización → backend → MCCR/MRRE; referencias elípticas; comandos múltiples; expected result; alcance; autoridad; vistas; correcciones; trace y no persistencia.

**Qué reutiliza y cómo.** `SRC-ACHIA-DEF`, `SRC-ACHIA-NORMALIZATION` fases NC-00…NC-12, `SRC-ACHIA-CONTRACTS`, `SRC-ACHIA-VALIDATORS`; `PAT-COG-031/035/062/086/109`.

**Frontera.** AC-HIA normaliza y presenta; MRRE analiza. El frontend no se confunde con field builder ni con analizador estructural.

**Relaciones internas.** Entrega solicitudes a MCCR, muestra resultados y activa decisiones humanas.

**Criterio reconstructivo.** Debe especificar handoffs concretos y qué información conserva cada capa.

### `07_integraciones/02_MCCR_MRRE.md`

**Responsabilidad.** Separar configuración runtime y ejecución semántica.

**Contenido obligatorio.** Capacidades MRRE discoverable; solicitud `Q_t`; selección de módulos, profundidad, mecanismos, umbrales, consumidor y presupuesto; execution plan; events; state update; replan; result y run log.

**Qué reutiliza y cómo.** `SRC-MCCR-DEF`, `SRC-MCCR-CONFIG`, `SRC-MCCR-REQUEST`, `SRC-MCCR-PLAN`, `SRC-MCCR-GRAPHS`, `SRC-MCCR-PIPELINE`, `SRC-MCCR-STATE`, `SRC-MCCR-RUNLOG` y `SRC-MCCR-AUTH`; `PAT-COG-087/088/090/118/126`.

**Frontera.** MCCR no inventa estructuras, slots, equivalencias ni criterios epistemológicos; MRRE no decide por sí mismo presupuesto o routing global.

**Relaciones internas.** Consume manifiesto/registro de componentes y produce planes para runtime.

**Criterio reconstructivo.** Debe incluir ejemplos completos entrada → configuración → plan → ejecución MRRE → monitoreo → resultado.

### `07_integraciones/03_MTC_MRRE.md`

**Responsabilidad.** Permitir que MRRE reconstruya arquitecturas de transformación cognitiva utilizando la ontología MTC sin apropiársela.

**Contenido obligatorio.** Mapeos intervención, estado, operador, acción, capacidad, contexto, manifestación y feedback; diferencias entre representación MRRE y entidad MTC; adapters; criterios de causalidad; trazabilidad.

**Qué reutiliza y cómo.** `SRC-MTC-CORE`, `SRC-MTC-ONTOLOGY`, `SRC-MTC-STATE`, `SRC-MTC-PIPELINE`, `SRC-MTC-MANIFESTATION`, `SRC-MTC-FEEDBACK` y `SRC-MTC-INSTANTIATE`; `INT-CONTENIDO-COMO-INTERVENCION-DE-TRANSFORMACION-DE-ESTADO-001`; `PAT-COG-017/020/049/050/057/059/093`.

**Frontera.** MTC explica transducción; MRRE reconstruye o abstrae la arquitectura manifestada. MRRE no infiere un estado mental como hecho sin evidencia.

**Relaciones internas.** Alimenta subgraph schema, especializaciones de efectos y análisis receptor.

**Criterio reconstructivo.** Cada correspondencia debe indicar si es equivalencia, adaptación, consumo o simple analogía estructural.

### `07_integraciones/04_ASIOO_MRRE.md`

**Responsabilidad.** Integrar lentes de sistemas orientados a objetivos para retroconstruir capacidades, coordinación y topología.

**Contenido obligatorio.** Objetivo como transición; función–información–coordinación; capacidad en subgrafo; integración situada; possible/available/active; representación operable; capas/capacidades transversales; tejido de coordinación; arquitectura/aplicación/chain/ejecución; rutas y cortes.

**Qué reutiliza y cómo.** `SRC-CAT-MRRE-03 / PAT-COG-116…122`; `SRC-CAT-ASIOO-04 / PAT-COG-126…130`; `PAT-COG-012/013/014/046/063`. Se transfieren principios funcionales, no metáforas militares ni inventarios de plataformas.

**Frontera.** ASIOO aporta estructuras retroconstruibles; MRRE aporta el procedimiento inverso y la reinstanciación.

**Relaciones internas.** Alimenta taxonomía sistémica, mechanism explanation y validación topológica.

**Criterio reconstructivo.** Debe poder aplicarse a un sistema organizacional y uno cognitivo conservando los mismos contratos abstractos.

### `07_integraciones/05_CONSCIENCIA_Y_SOBERANIA_MRRE.md`

**Responsabilidad.** Incorporar fuente/material/mediación/recepción, gobierno reflexivo y soberanía sin redefinir el paquete de origen.

**Contenido obligatorio.** Locus de gobierno; autoridad/capacidad; veto; cierre cognitivo; permeabilidad epistémica; aprovisionamiento; red de efectos; manifestación parcial; triple red; operación como reconfiguración; triangulación y soberanía humana de creación de realidad.

**Qué reutiliza y cómo.** `SRC-CAT-CS-01`, especialmente `PAT-COG-001…009`, `015…026`, `030…043`, `052…063`; `SRC-CS-OPS`; ledger `INT-*` de sus secciones 33–34; `SRC-CAT-MRRE-03 / PAT-COG-123…125`.

**Frontera.** MRRE identifica estructuras y produce alternativas; no redefine fines humanos ni declara estados de consciencia.

**Relaciones internas.** Gobierna autoridad, epistemic ledger, feedback y análisis de recepción.

**Criterio reconstructivo.** Debe mantener separación procesamiento/gobierno y hacer visible quién puede integrar, rechazar o promover una actualización.

### `07_integraciones/06_ACCD_MRRE.md`

**Responsabilidad.** Definir un handoff opcional entre arquitectura/corte reconstruido y realización codominial.

**Contenido obligatorio.** `REALIZATION_HANDOFF`, construcción conceptual de entrada, requisitos regionales, campos contextuales, invariantes, variación, clase de realización, pruebas, manifestación ingestion y projected-realized diff.

**Qué reutiliza y cómo.** `SRC-ACCD-EQUATION` secciones 5–12 y 22; `SRC-ACCD-REGIONS`; contratos 19.5–19.6 de `SRC-MRRE-DESIGN`; `PAT-COG-024/025/027/048/086/090/092`.

**Frontera.** Corte semántico ≠ instancia contextual; MRRE no redefine el operador de proyección ACCD; ACCD no modifica el campo MRRE silenciosamente.

**Relaciones internas.** Consume projected network y produce realized network/manifestation metadata.

**Criterio reconstructivo.** Debe existir una ejecución MRRE completa sin ACCD y una integración ACCD sin acoplar el kernel al codominio.

### `07_integraciones/07_APRENDIZAJE_ESTRUCTURAL_MRRE.md`

**Responsabilidad.** Conectar reconstrucción/reinstanciación con comprensión, discriminación y transferencia estructural.

**Contenido obligatorio.** Perfil receptor; estado inicial; puentes; repertorio; ruptura de analogía; pruebas fuertes; evidencia; feedback; diferencia activación/evaluación/integración/aprendizaje.

**Qué reutiliza y cómo.** `SRC-AE-README`; fuente adjunta `APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf` con ruta pendiente; `SRC-PIEA-CORE/TRANSITION`; `PAT-COG-040…045`, `051`, `094`, `099/100`.

**Frontera.** MRRE reconstruye/instancia estructuras; Aprendizaje Estructural determina si el receptor puede reconstruirlas y transferirlas.

**Relaciones internas.** Alimenta proyección instruccional, receiver analysis y pruebas.

**Criterio reconstructivo.** Debe declarar qué evidencia permite hablar de aprendizaje y qué sólo demuestra exposición o recuerdo verbal.

---

## 4.10 `08_validacion_y_pruebas/`

### `08_validacion_y_pruebas/01_plan_de_verificacion_y_validacion.md`

**Responsabilidad.** Definir la estrategia V&V por anillos y capas del paquete.

**Contenido obligatorio.** Verificación de schemas/contratos; validación de componentes; integración runtime; pruebas de especialización; validación epistemológica; pruebas de consumidor; adversarial/negative cases; regresión; promoción. Debe distinguir verificar conformidad y validar adecuación al propósito.

**Qué reutiliza y cómo.** F6, validaciones duras y antipatrones de `SRC-KI-11`; `SRC-MRRE-DESIGN`, secciones 23–24; `PAT-COG-006/036/082/093/099/100/101/114`; validadores AC-HIA/MCCR.

**Relaciones internas.** Orquesta métricas, cobertura, fixtures, expected results, negative cases y regression.

**Criterio reconstructivo.** Cada requisito e invariante debe tener al menos una prueba, y cada prueba debe declarar qué falla puede detectar.

### `08_validacion_y_pruebas/02_metricas_y_umbrales.md`

**Responsabilidad.** Convertir calidad estructural y epistemológica en criterios observables sin reducirla a una sola métrica.

**Contenido obligatorio.** Fidelidad al portador; cobertura; trazabilidad; completitud relacional; consistencia; parsimonia; diversidad de alternativas; calibración de certeza; preservación de invariantes; compatibilidad causal; utilidad para consumidor; costo y riesgo. Cada métrica debe declarar fórmula/regla, unidad, ventana, limitaciones y thresholds.

**Qué reutiliza y cómo.** Portada A–I, métrica faro y orquestador de `SRC-KI-11`; `PAT-COG-073`, `081`, `093`, `101`, `120`, `128/129`; métricas candidatas de `SRC-MRRE-DESIGN`, sección 23.3.

**Relaciones internas.** Usado por validation orchestrator, expected results y promotion gates.

**Criterio reconstructivo.** Una métrica alta no debe ocultar ruptura de invariantes, falta de procedencia o causalidad inventada.

### `08_validacion_y_pruebas/03_matriz_de_cobertura.md`

**Responsabilidad.** Enlazar decisiones, requisitos, fuentes, archivos, componentes y pruebas.

**Contenido obligatorio.** ID de requisito/invariante; procedencia; archivos que lo materializan; schema; componente; prueba positiva; prueba negativa; estado; evidencia; versión y dependientes.

**Qué reutiliza y cómo.** Trazabilidad A–I/T7 de `SRC-KI-11`; `PAT-COG-072/104/114`; validadores SC-V1…SC-V7 de `SRC-ACHIA-SCAFFOLD`.

**Relaciones internas.** Debe sincronizarse con manifiesto, decisiones, V&V, regresión y registro de componentes.

**Criterio reconstructivo.** No puede existir requisito “cubierto” sin archivo y prueba identificables.

### `08_validacion_y_pruebas/fixtures/`

**Responsabilidad.** Conservar entradas reproducibles y sus metadatos.

**Contenido mínimo por fixture.** `README.md`, portador/input, contexto, fuentes, alcance, hash, expected properties y restricciones. No debe incluir una única salida textual obligatoria cuando varias arquitecturas puedan ser válidas.

**Herencia.** `PAT-COG-099/100`; metodología de ejemplos MCCR; casos de `SRC-MRRE-DESIGN`, sección 24.

**Aceptación.** Debe ejecutarse sin recuperar el chat original.

### `08_validacion_y_pruebas/expected_results/`

**Responsabilidad.** Definir propiedades estructurales esperadas, límites y tolerancias por fixture.

**Contenido mínimo.** Elementos obligatorios/prohibidos; invariantes; alternativas permitidas; certeza máxima autorizada; trazas requeridas; fallos aceptables; métricas y thresholds.

**Herencia.** `PAT-COG-025` expected result como selector; `PAT-COG-080/103`; `SRC-ACHIA-NORMALIZATION`.

**Aceptación.** No confundir expected result con respuesta literal única.

### `08_validacion_y_pruebas/negative_cases/`

**Responsabilidad.** Detectar sobreinterpretación, colapsos y fallos peligrosos.

**Contenido mínimo.** Casos de fuente/material confundidos, manifestación=sistema, causalidad excesiva, slot inventado, binding léxico, contexto mezclado, feedback=verdad, output=canon, ejemplo=kernel, red proyectada=activada y falla de ruta=falla total.

**Herencia.** Tests 01–10 de `SRC-CAT-CS-01`, 11–27 de `SRC-CAT-MRRE-02`, 28–37 de `SRC-CAT-MRRE-03`, 38–46 de `SRC-CAT-ASIOO-04`, antipatrones de `SRC-KI-11`.

**Aceptación.** Cada no-colapso del kernel debe tener al menos un caso negativo.

### `08_validacion_y_pruebas/regression/`

**Responsabilidad.** Detectar pérdida de capacidades o cambios epistemológicos no intencionales después de modificar componentes o fuentes.

**Contenido mínimo.** Suites por versión, baseline, diff, dependientes, resultados, tolerancias, causas y decisión de promoción.

**Herencia.** `PAT-COG-081`, `101`, `114/115`; F7 de `SRC-KI-11`.

**Aceptación.** Todo cambio de invariante, schema o patrón debe disparar revalidación de sus dependientes.

---

## 4.11 `09_casos_y_ejemplos/`

Cada carpeta de caso debe contener como mínimo `README.md`, `inputs/`, `context/`, `expected_results/`, `runs/` y `lessons.md`. Los casos no se promueven al kernel.

### `09_casos_y_ejemplos/caso_del_collar/`

**Responsabilidad.** Probar actores, creencias, confianza, recursos, engaño, fases, MTC y transferencia estructural.

**Fuentes y uso.** `SRC-MTC-COLLAR`, `SRC-MTC-ADAPTER-FIXTURES` y memoria del caso dentro de COGNICIÓN_CENTRAL. Debe reconstruir subgrafos ACTOR, BELIEF, RESOURCE/CAPACITY, TRUST, VERIFICATION, TEMPORAL y MANIFESTATION.

**Pruebas.** Distinguir prestigio como valor movilizable y collar como material; comprobar si el esqueleto admite otro objeto sin perder relaciones.

**Aceptación.** La reinstanciación debe conservar mecanismo de movilización y engaño, no vocabulario histórico superficial.

### `09_casos_y_ejemplos/reuters/`

**Responsabilidad.** Probar un campo y múltiples cortes lingüísticos del mismo núcleo.

**Fuentes y uso.** `INT-CORTES-DE-NUCLEO-REUTERS-001`, `INT-EXPECTED-RESULT-SELECCION-001`, `PAT-COG-015/025/083`, `SRC-MRRE-DESIGN`, secciones 8–10 y 24.

**Pruebas.** Identidad local, selección, omisión, prominencia, versiones, fuentes y comparación de campos/cortes.

**Aceptación.** Debe explicar por qué textos distintos pueden ser estructuralmente equivalentes o por qué textos semejantes pueden organizar efectos diferentes.

### `09_casos_y_ejemplos/aspiradora/`

**Responsabilidad.** Probar explicación de mecanismos, parte–todo, causalidad y alineación fractal del efecto.

**Fuentes y uso.** `EX-ASPIRADORA-ALINEACION-FRACTAL-001`; `SRC-MRRE-DESIGN`, secciones 14.6, 21.3 y 24; `PAT-COG-056/084/128/129`.

**Pruebas.** Validación descendente y ascendente, modelos cotidianos imprecisos, rutas funcionales y cut-sets.

**Aceptación.** La explicación debe mostrar cómo cada parte contribuye a capacidad global y qué falla al eliminarla.

### `09_casos_y_ejemplos/puente_del_valle/`

**Responsabilidad.** Conservar un caso de análisis estructural vinculado a `analisis-de-estructuras.pdf` y tensionar la transferencia desde ingeniería material hacia arquitectura cognitiva.

**Fuentes y uso.** Fuente adjunta `analisis-de-estructuras.pdf` como introducción de trabajo y `SRC-KI-11`; su ruta interna debe confirmarse antes de materializar referencias canónicas.

**Pruebas.** Distinguir correspondencia funcional de metáfora; identificar cargas, relaciones, restricciones, fallos y observabilidad sólo cuando estén soportados por el caso.

**Aceptación.** No transferir términos físicos literalmente cuando no exista equivalente contractual.

### `09_casos_y_ejemplos/triangulacion_multimodal/`

**Responsabilidad.** Probar reconstrucción desde texto, imagen, secuencia y otros portadores parciales.

**Fuentes y uso.** `theme_visual_video_4.pdf`, `secuencia_de_imagenes.pdf`, `EC06`, `EC07`, `EC10`, `EC12`; `SRC-CS-OPS`, sección 23; `PAT-COG-002/015/074/075/107`.

**Pruebas.** Correspondencias, contradicciones, continuidad, invariantes visuales, transformación progresiva y diferencias de modalidad.

**Aceptación.** Debe conservar procedencia por modalidad y no fusionar evidencia no compatible.

---

## 4.12 `10_artefactos_generados/`

Esta zona pertenece a resultados, no a definiciones. Cada artefacto deberá conservar versión, run ID, input refs, plan, schemas, estado epistemológico y trazas.

### `10_artefactos_generados/analisis/`

Guarda navegación, segmentación, extracción y análisis intermedios. Un análisis puede ser parcial y no debe presentarse como arquitectura cerrada. Usa `manifestation_input`, field/cut y subgraph schemas.

### `10_artefactos_generados/arquitecturas_retroconstruidas/`

Guarda arquitecturas candidatas, redes, subgrafos, alternativas y reportes de validación. Cada entrada debe registrar su relación con el `03_registro_de_arquitecturas_retroconstruidas.yaml`.

### `10_artefactos_generados/reinstanciaciones/`

Guarda bindings, instancia producida, diff de preservación, huecos, pruebas y autorización. No debe contener sólo el producto final; debe conservar el proceso que demuestra la transferencia.

### `10_artefactos_generados/comparaciones/`

Guarda matrices, grafos de correspondencia, invariantes compartidos, diferencias, incompatibilidades y decisiones de equivalencia. Debe declarar nivel y contexto de comparación.

### `10_artefactos_generados/trazas/`

Guarda sidecars o grafos de procedencia y run logs. Se separa de los artefactos semánticos para permitir auditoría sin contaminar su contenido, pero mantiene referencias bidireccionales.

**Criterio común.** La existencia de un archivo en esta zona nunca lo promueve al acervo ni al canon; la promoción sigue `PAT-COG-115` y gobierno humano.

---

## 4.13 `90_historial/`

### `90_historial/antecedentes/`

**Responsabilidad.** Conservar los documentos que formaron el MRRE pero no representan su arquitectura materializada actual.

**Contenido inicial.** `DISENO_INTEGRAL_NUEVO_PAQUETE_v0_1_0.md`, `MANIFESTACION_LINGUISTICA_COMO_SUBGRAFO_MRRE_v0_1.md`, `ejemplo.md`, `lectura.md` y scaffolds previos, cuando sus contenidos hayan sido incorporados y exista copia preservada.

**Regla.** Mover un antecedente requiere registrar qué archivos activos absorbieron cada decisión.

### `90_historial/versiones_superadas/`

**Responsabilidad.** Conservar versiones reemplazadas de archivos MRRE con relación explícita de supersesión.

**Contenido mínimo.** Archivo, versión, fecha, reemplazo, razón, compatibilidad, decisiones y tests históricos. No deben reutilizarse silenciosamente por precedencia accidental.

### `90_historial/decisiones_historicas/`

**Responsabilidad.** Conservar decisiones cerradas, alternativas descartadas y cambios de dirección.

**Contenido mínimo.** Registros D1–D10 adaptados de `SRC-KI-11`, evidencia, autoridad, impacto y posibilidad de reapertura.

**Criterio común.** El historial es recuperable y trazable, pero no tiene precedencia sobre gobierno y archivos activos.

---

## 5. Matriz resumida de patrones y destinos MRRE

| Grupo de patrones | Uso principal en MRRE                                                    | Archivos destino prioritarios                                         |
| ----------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `PAT-COG-001…009` | Fuentes, materiales, mediaciones, observabilidad y validación            | manifestation input, field builder, navegación, Consciencia/Soberanía |
| `PAT-COG-010…023` | Subgrafos, chains, cortes, redes, efectos y escalas                      | ontología, subgraph reconstructor, runtime, ASIOO/MTC                 |
| `PAT-COG-024…029` | Campo, corte, manifestación y retroconstrucción                          | cut schema, cut engine, retroconstrucción, ACCD                       |
| `PAT-COG-030…039` | Gobierno, soberanía, autoridad y veto                                    | gobierno/autoridad, epistemic ledger, gates                           |
| `PAT-COG-040…046` | Aprendizaje, feedback, adaptación y recomposición                        | feedback, reinstanciación, aprendizaje estructural                    |
| `PAT-COG-047…063` | Heurística, generación, estados, aprovisionamiento y ciclos              | runtime, MTC, ASIOO, Consciencia/Soberanía                            |
| `PAT-COG-064…075` | Kernel dinámico, inducción, variabilidad, deslinealización y certeza     | kernel, ontología, segmentación, skeleton inferer                     |
| `PAT-COG-076…086` | Navegación, equivalencia, binding, diff, reingreso y contratos           | reinstanciación, schemas, selector, engine, validación                |
| `PAT-COG-087…095` | Configuración runtime, adapters, especialización y recepción             | MCCR, registry, integrations, multimodalidad                          |
| `PAT-COG-096…108` | Protocolos, estados, fallos, trazabilidad y precedencia                  | protocolo general, fallas, ledger, V&V                                |
| `PAT-COG-109…115` | Scaffolding, materialización y promoción                                 | este documento, gobierno, orden de construcción                       |
| `PAT-COG-116…125` | Integración, representación operable y gobierno                          | ASIOO, Consciencia/Soberanía, runtime, field/cut                      |
| `PAT-COG-126…130` | Estratos, objetivo, composición topológica, rutas/cortes y procedimiento | README, grafo de ejecución, mecanismos, protocolos                    |

---

## 6. Orden recomendado de materialización

La construcción debe seguir dependencias, no el orden arbitrario del árbol:

1. `00_gobierno/01…05` para fijar identidad, autoridad, fuentes y preguntas.
2. `01_kernel_estable/01…08` para cerrar invariantes, ontología, modelo y protocolo.
3. `02_contratos_y_schemas/` para estabilizar los objetos intercambiados.
4. `05_acervo_estructural/01_indice_federado...` para habilitar recuperación sin duplicación.
5. `04_runtime/03_registro_de_componentes.yaml` y archivos de componentes.
6. `03_protocolos_operacionales/` para ensamblar los componentes en operaciones.
7. `07_integraciones/01_AC_HIA_MRRE.md` y `02_MCCR_MRRE.md`, seguidas de las demás integraciones.
8. `08_validacion_y_pruebas/` antes de declarar una especialización terminada.
9. `06_especializaciones/01_retroconstruccion_textual.md` como primera implementación.
10. Casos collar, Reuters y aspiradora como fixtures nucleares.
11. Proyección instruccional y multimodalidad después de validar el núcleo textual.
12. README y manifiesto se redactan inicialmente al comienzo, pero se cierran y validan de nuevo al final.

Este orden especializa `PAT-COG-112 — MATERIALIZACIÓN ORDENADA POR DEPENDENCIAS`.

---

## 7. Validación de este scaffolding antes de materializar el paquete

El presente documento debe considerarse suficiente para iniciar materialización sólo si pasa:

- `SC-V1 COMPLETITUD ESTRUCTURAL`: todos los archivos del árbol tienen guía.
- `SC-V2 SUFICIENCIA DE GUÍA`: cada guía declara responsabilidad, contenido, fuentes, adaptación, relaciones y aceptación.
- `SC-V3 CONTEXTO`: decisiones humanas y no-colapsos están preservados.
- `SC-V4 TRANSFERIBILIDAD`: puede utilizarse sin el chat original.
- `SC-V5 CONSTRUCCIÓN EN CHAT`: permite desarrollo archivo por archivo.
- `SC-V6 CONSTRUCCIÓN AGENTIVA`: un agente puede resolver dependencias y detectar ambigüedades.
- `SC-V7 GOBIERNO`: no promueve decisiones ni canon sin autoridad humana.

Validaciones adicionales MRRE:

- Las cuatro rutas de catálogos solicitadas existen y están referenciadas.
- `SRC-KI-11`, Construcción Conceptual/MAANC, AC-HIA, MCCR, MTC, ASIOO, Consciencia/Soberanía y ACCD tienen usos y fronteras explícitos.
- No se inventaron rutas para fuentes adjuntas no localizadas dentro del artefacto.
- Kernel, acervo, runtime, especializaciones y artefactos están separados.
- Todos los tipos centrales tienen procedencia.
- Todos los patrones transferidos conservan su ID y catálogo de origen.
- El diseño admite esqueletos no previstos y resultados parciales.
- La trazabilidad es bidireccional y la promoción es humana.

---

## 8. Estado final de esta propuesta

```yaml
artifact:
  name: SCAFFOLDING_RECONSTRUCTIVO_ARQUITECTURA_MRRE
  version: 0.2.0
  status:
    - PROVISIONAL
    - RECONSTRUCTIVE
    - NON_CANONICAL
    - READY_FOR_HUMAN_REVIEW
  target_package:
    name: MOTOR_DE_RETROCONSTRUCCION_Y_REINSTANCIACION_ESTRUCTURAL
    id: PC-MRRE
  materialization:
    performed: false
    allowed_modes:
      - CHAT_FILE_BY_FILE
      - AGENT_AUTOMATED
  promotion:
    automatic: false
    authority: HUMAN
```

El siguiente paso permitido por este scaffolding es la revisión humana de la arquitectura y, después, la materialización ordenada. Este documento no declara construido ni canónico el paquete MRRE.
