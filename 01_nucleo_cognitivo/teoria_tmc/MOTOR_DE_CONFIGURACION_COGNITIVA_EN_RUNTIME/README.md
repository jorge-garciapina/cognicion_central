CONVERSACIÓN ORIGEN:
https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7f4eb4-92f4-83e8-bc27-fe9081ef8d0a

# Motor de Configuración Cognitiva en Runtime (MCCR)

**Paquete:** `PC-MCCR`  
**Versión candidata:** `0.1.0`  
**Estado:** `CANDIDATE_WITH_OPEN_DECISIONS / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Implementación:** `CONTEXTUAL_PROTOCOL_SPECIFIED`; runtime de software `NOT_IMPLEMENTED`

> MCCR transforma una arquitectura cognitiva de posibilidades en un plan de ejecución situado.

## Qué resuelve

COGNICION_CENTRAL puede registrar estructuras, AC-HIA puede normalizar comandos y coordinar el backend, MTC puede construir subgrafos de transformación, ACCD puede realizar manifestaciones y el host puede exponer herramientas. Aun así falta decidir, para un comando concreto, qué componentes están disponibles, cómo acoplarlos, en qué orden, bajo qué permisos y cómo detener/replanificar. Ésa es la responsabilidad de MCCR.

MCCR recibe una solicitud estructurada producida por AC-HIA/backend y devuelve:

- `EXECUTION_PLAN`: configuración completa, prevalidada y lista para handoff;
- `NO_FEASIBLE_PLAN`: explicación trazable de por qué ninguna configuración satisface todas las reglas duras.

No ejecuta herramientas, no sustituye al backend, no escribe en el Registro y no se promueve a canon.

## Flujo mínimo

```text
comando humano
→ AC-HIA preserva y normaliza
→ backend resuelve autoridad, estado y capacidades
→ MCCR C0–C12
   solicitud → capacidades → región candidata → constraints → poda
   → candidatos → validación → preferencias → selección → plan → handoff
→ runtime/adaptador ejecuta
→ validadores clasifican resultado
→ evento/estado
→ MCCR replanifica si la validez cambió
```

Regla cardinal: primero `VALID`; después `OPTIMAL` entre planes válidos. Nunca se relaja una hard constraint de forma silenciosa.

## Ejemplo mínimo

Humano: “Crea un borrador de guion ACCD de video corto y no lo persistas”. AC-HIA convierte la frase en un comando con objetivo, alcance y persistencia efímera. MCCR recupera la región `video_corto`, comprueba capacidades, selecciona instancia/protocolo/validadores y emite un plan de cinco pasos. El host redacta después del handoff. ACCD valida que la salida pertenece al codominio y que cada valor activo tuvo efecto. La respuesta queda revisable, no persistida.

## Navegación rápida

| Necesidad               | Abrir                                                                         |
| ----------------------- | ----------------------------------------------------------------------------- |
| identidad/estado        | `00_gobierno/01_ficha_del_paquete.md`                                         |
| invariantes y fronteras | `00_gobierno/05_invariantes_limites_y_no_equivalencias.md`                    |
| definición nuclear      | `01_nucleo/01_definicion_naturaleza_y_problema.md`                            |
| solicitud de entrada    | `01_nucleo/04_modelo_de_solicitud_estructurada.md`                            |
| contrato del plan       | `01_nucleo/05_execution_plan_definicion_y_contrato.md`                        |
| proceso completo        | `02_modelo_operativo/02_pipeline_c0_c12.md`                                   |
| hard constraints        | `03_contratos/01_hard_constraints_y_reglas_no_negociables.md`                 |
| no factibilidad         | `03_contratos/05_no_feasible_plan_fallos_y_degradacion.md`                    |
| integración AC-HIA      | `04_integraciones/02_ac_hia_frontend_normalizacion_y_backend.md`              |
| ejemplos ejecutables    | `05_ejemplos/00_metodologia_de_ejemplos_y_fixtures.md`                        |
| fuentes y estados       | `SOURCE_AUDIT.md` y `06_referencias/01_mapa_de_fuentes_internas.md`           |
| instalación contextual  | `07_integracion_repositorio/04_instalacion_lectura_y_operacion_contextual.md` |
| aceptación              | `CROSS_VALIDATION_REPORT.md`                                                  |

## Regla de recuperación para IA

1. Abrir este README y el manifiesto.
2. Recuperar el documento responsable de la operación.
3. Recuperar sólo sus contratos/gates e integración directa.
4. Añadir el fixture pertinente para prueba mental o regresión.
5. Recuperar gobierno si hay cambio, permiso, persistencia o conflicto.
6. Si falta una dependencia, declarar `PARTIAL_RETRIEVAL`, usar un fallback autorizado o detenerse; nunca inventar su contenido.

## Estado real y decisiones abiertas

El contenido conceptual está completo, pero la ubicación final, el nombre definitivo, la interfaz con un futuro Orquestador, los nombres de estados y la integración canónica requieren decisión humana. AC-HIA declara runtime/adaptadores no implementados. Por ello el estado correcto es `CANDIDATE_WITH_OPEN_DECISIONS`, no `RUNTIME_READY` ni `CANONICAL`.

## Árbol y responsabilidad de cada archivo

### `00_gobierno`

- `00_gobierno/01_ficha_del_paquete.md` — Ficha del paquete MCCR.
- `00_gobierno/02_autoridad_estado_y_versionado.md` — Autoridad, estado y versionado.
- `00_gobierno/03_manifiesto_del_paquete.md` — Manifiesto del paquete.
- `00_gobierno/04_ubicacion_transversal_e_invocacion.md` — Ubicación transversal e invocación.
- `00_gobierno/05_invariantes_limites_y_no_equivalencias.md` — Invariantes, límites y no equivalencias.

### `01_nucleo`

- `01_nucleo/01_definicion_naturaleza_y_problema.md` — Definición, naturaleza y problema.
- `01_nucleo/02_topologia_componentes_y_responsabilidades.md` — Topología, componentes y responsabilidades.
- `01_nucleo/03_modelo_de_configuracion_operacional.md` — Modelo de configuración operacional.
- `01_nucleo/04_modelo_de_solicitud_estructurada.md` — Modelo de solicitud estructurada.
- `01_nucleo/05_execution_plan_definicion_y_contrato.md` — EXECUTION_PLAN: definición y contrato.
- `01_nucleo/06_grafos_possible_available_active.md` — Grafos posible, disponible y activo.
- `01_nucleo/07_subgrafo_chain_plan_y_composicion.md` — Subgrafo, cadena, plan y composición.
- `01_nucleo/08_glosario_notacion_y_bibliografia_de_procedencia.md` — Glosario, notación y bibliografía de procedencia.

### `02_modelo_operativo`

- `02_modelo_operativo/01_ciclo_extremo_a_extremo.md` — Ciclo extremo a extremo.
- `02_modelo_operativo/02_pipeline_c0_c12.md` — Pipeline C0–C12.
- `02_modelo_operativo/03_c0_c3_ingreso_resolucion_capacidades_y_region_candidata.md` — C0–C3: ingreso, resolución, capacidades y región candidata.
- `02_modelo_operativo/04_c4_formalizacion_de_restricciones.md` — C4: formalización de restricciones.
- `02_modelo_operativo/05_c5_poda_y_feasible_search_space.md` — C5: poda y espacio de búsqueda factible.
- `02_modelo_operativo/06_c6_c9_generacion_validacion_evaluacion_y_seleccion.md` — C6–C9: generación, validación, evaluación y selección.
- `02_modelo_operativo/07_c10_c12_materializacion_prevalidacion_y_handoff.md` — C10–C12: materialización, prevalidación y handoff.
- `02_modelo_operativo/08_ciclo_execution_monitoring_event_state_update_replan_result.md` — Ciclo execution–monitoring–event–state update–replan–result.
- `02_modelo_operativo/09_replanificacion_estabilidad_y_costo_de_cambio.md` — Replanificación, estabilidad y costo de cambio.
- `02_modelo_operativo/10_estados_y_maquina_de_estados_del_plan.md` — Estados y máquina de estados del plan.
- `02_modelo_operativo/11_grados_de_formalizacion_y_guia_de_decision.md` — Grados de formalización y guía de decisión.

### `03_contratos`

- `03_contratos/01_hard_constraints_y_reglas_no_negociables.md` — Hard constraints y reglas no negociables.
- `03_contratos/02_soft_objectives_preferencias_y_tradeoffs.md` — Soft objectives, preferencias y tradeoffs.
- `03_contratos/03_solver_router_y_seleccion_de_mecanismos.md` — Solver router y selección de mecanismos.
- `03_contratos/04_colaboracion_llm_grafos_reglas_y_validadores.md` — Colaboración entre LLM, grafos, reglas y validadores.
- `03_contratos/05_no_feasible_plan_fallos_y_degradacion.md` — NO_FEASIBLE_PLAN, fallos y degradación.
- `03_contratos/06_trazabilidad_observabilidad_y_run_log.md` — Trazabilidad, observabilidad y run log.
- `03_contratos/07_autoridad_permisos_validadores_y_gates.md` — Autoridad, permisos, validadores y gates.

### `04_integraciones`

- `04_integraciones/01_registro_y_orquestador.md` — Integración con Registro y Orquestador.
- `04_integraciones/02_ac_hia_frontend_normalizacion_y_backend.md` — Integración con AC-HIA: frontend, normalización y backend.
- `04_integraciones/03_mtc.md` — Integración con MTC.
- `04_integraciones/04_accd.md` — Integración con ACCD.
- `04_integraciones/05_capps_y_composicion.md` — Integración con cApps y composición.
- `04_integraciones/06_validadores_y_runtime.md` — Integración con validadores y runtime.
- `04_integraciones/07_busqueda_cognitiva_y_recuperacion.md` — Integración con Búsqueda Cognitiva y recuperación.

### `05_ejemplos`

- `05_ejemplos/00_metodologia_de_ejemplos_y_fixtures.md` — Metodología de ejemplos y fixtures.
- `05_ejemplos/01_fixture_accd_manifestacion_linguistica.md` — Fixture ACCD: manifestación lingüística.
- `05_ejemplos/02_fixture_accd_video_corto.md` — Fixture ACCD: video corto.
- `05_ejemplos/03_fixture_mtc_a_accd.md` — Fixture MTC → ACCD.
- `05_ejemplos/04_fixture_ac_hia_a_mccr.md` — Fixture AC-HIA → MCCR.
- `05_ejemplos/05_fixture_capp_multichain.md` — Fixture cApp multichain.
- `05_ejemplos/06_fixture_no_feasible_plan.md` — Fixture NO_FEASIBLE_PLAN.
- `05_ejemplos/07_fixture_replanificacion_por_evento.md` — Fixture de replanificación por evento.
- `05_ejemplos/08_fixture_comparacion_de_planes_validos.md` — Fixture de comparación de planes válidos.
- `05_ejemplos/09_superficie_de_descubrimiento_kill_web.md` — Superficie de descubrimiento “kill-web”.

### `06_referencias`

- `06_referencias/01_mapa_de_fuentes_internas.md` — Mapa de fuentes internas.
- `06_referencias/02_referencias_externas_y_antecedentes.md` — Referencias externas y antecedentes.
- `06_referencias/03_mapa_de_correspondencias_con_cognicion_central.md` — Mapa de correspondencias con COGNICION_CENTRAL.

### `07_integracion_repositorio`

- `07_integracion_repositorio/01_ubicacion_final_y_rutas.md` — Ubicación final y rutas propuestas.
- `07_integracion_repositorio/02_manifiesto_de_integracion.md` — Manifiesto de integración propuesto.
- `07_integracion_repositorio/03_patch_prompt_central_y_registro_de_capacidad.md` — Patch propuesto para Prompt Central y registro de capacidad.
- `07_integracion_repositorio/04_instalacion_lectura_y_operacion_contextual.md` — Instalación, lectura y operación contextual.
- `07_integracion_repositorio/05_pruebas_y_criterios_de_aceptacion_v1.md` — Pruebas y criterios de aceptación v1.
- `07_integracion_repositorio/06_extensiones_opcionales_y_roadmap.md` — Extensiones opcionales y roadmap.

## Archivos auxiliares

- `BUILD_STATE_00_PREPARED.md`: prueba histórica de preparación antes del contenido final.
- `SOURCE_AUDIT.md`: fuentes recuperadas, estado y ausencias.
- `DEPENDENCY_MAP.md`: orden topológico y fronteras.
- `LEXICON_REGISTER.md`: vocabulario controlado.
- `BUILD_PLAN.md`: método de construcción.
- `OPEN_DECISIONS.md`: decisiones humanas pendientes.
- `CROSS_VALIDATION_REPORT.md`: pruebas de consistencia.
- `PROPOSED_EXTERNAL_CHANGES.md`: cambios externos no aplicados.
- `BUILD_REPORT.md`: entrega y estado final.
- `CANDIDATE_FILE_HASHES.json`: integridad de los 58 documentos.
- `BUILD_INPUT_ARTIFACT_A_GUIDES_v0_1_0.txt`: copia preservada del Artefacto A original con las guías de construcción.

Los artefactos `.txt/.jsonl` son fotografías serializadas del paquete. La fuente viva son los archivos organizados; leer un artefacto no activa automáticamente MCCR.

## Orden recomendado de lectura

Para diseño: gobierno → núcleo → contratos → integraciones. Para operación: solicitud → C0–C12 → contrato de plan → gates → fixture. Para depuración: run log → estado/replan → no factibilidad → fuente responsable. Para integración: auditoría → crosswalk → carpeta 07 → aceptación.

## Instalación compacta

```text
LOCALIZA PC-MCCR y verifica su inventario.
RECUPERA README, gobierno, contrato responsable y fixture pertinente.
PERFILA capacidades y permisos reales del host.
CONFIGURA un overlay efímero; no modifiques PACKAGE:// ni CC://.
EJECUTA los fixtures mínimos AC-HIA→MCCR y NO_FEASIBLE_PLAN.
DECLARA integridad, dependencias, límites y estado real.
OPERA por solicitudes estructuradas y recuperación mínima.
```

La integración o persistencia fuera de este paquete exige un comando humano separado.
