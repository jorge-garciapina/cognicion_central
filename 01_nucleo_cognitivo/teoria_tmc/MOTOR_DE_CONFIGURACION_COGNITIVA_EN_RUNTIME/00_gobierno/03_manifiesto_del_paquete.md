# Manifiesto del paquete

**ID:** `MCCR-GOV-MANIFEST-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

El manifiesto hace recuperable MCCR por responsabilidad documental. La presencia de un archivo no activa su contenido ni eleva su autoridad.

## Responsabilidad

Este documento es responsable de:

- árbol lógico
- documentos normativos, fixtures y referencias
- regla de recuperación mínima

No es responsable de:

- duplicar el contenido de cada documento
- activar dependencias por enumerarlas
- ocultar archivos auxiliares de construcción

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| FILE_INVENTORY | 58 documentos finales y auxiliares | REQUIRED |
| DEPENDENCY_MAP | orden topológico | REQUIRED |
| SOURCE_AUDIT | procedencia y ausencias | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Abrir `README.md`.
2. Elegir el documento responsable de la necesidad.
3. Recuperar sus contratos y dependencias directas.
4. Usar fixtures sólo para prueba o comprensión.
5. Recuperar gobierno ante cambios, permisos, persistencia o conflicto.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PACKAGE_MANIFEST | rutas, clases y responsabilidades | MCCR |
| RECOVERY_ROUTE | conjunto mínimo de archivos | MCCR |

## Especificación

```yaml
manifest:
  package_id: PC-MCCR
  version: 0.1.0
  entrypoint: README.md
  lifecycle: DEVELOPMENT
  canonical_status: NON_CANONICAL
  spaces:
    government: 00_gobierno
    core: 01_nucleo
    operational_model: 02_modelo_operativo
    contracts: 03_contratos
    integrations: 04_integraciones
    fixtures: 05_ejemplos
    references: 06_referencias
    repository_integration_proposals: 07_integracion_repositorio
  terminal_outputs:
    - EXECUTION_PLAN
    - NO_FEASIBLE_PLAN
  external_writes: NONE
```

Documentos normativos: `00_gobierno`, `01_nucleo`, `02_modelo_operativo` y `03_contratos`. `04_integraciones` fija fronteras. `05_ejemplos` contiene fixtures subordinados. `06_referencias` conserva procedencia. `07_integracion_repositorio` sólo propone cambios futuros.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- README es entrada, no sustituto del núcleo.
- Un fixture no modifica un contrato.

## Ejemplo operativo

Para depurar una inviabilidad se recuperan `03_contratos/05_no_feasible_plan_fallos_y_degradacion.md`, el contrato duro relacionado y el fixture 06; no se carga todo el paquete por rutina.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Ruta normativa ausente | declarar `PARTIAL_RETRIEVAL` |
| Definiciones en conflicto | aplicar gobierno y registrar la diferencia |
| Ejemplo contradice núcleo | prevalece núcleo; abrir defecto del fixture |

## Relaciones y límites

Complementa el Prompt Central: éste instala y gobierna el contexto; el manifiesto local enruta dentro del paquete.

## Procedencia

- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`: ubicación por función dominante y contratos de carpetas.
- [DECISION_HUMANA] `ART_MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME.txt`: inventario y contrato de los 58 documentos.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Todas las áreas tienen función explícita.
- La recuperación mínima es aplicable.
- Se distinguen documentos normativos y fixtures.

## Inventario normativo de esta versión

- `00_gobierno/01_ficha_del_paquete.md` — gobierno, identidad y límites.
- `00_gobierno/02_autoridad_estado_y_versionado.md` — gobierno, identidad y límites.
- `00_gobierno/03_manifiesto_del_paquete.md` — gobierno, identidad y límites.
- `00_gobierno/04_ubicacion_transversal_e_invocacion.md` — gobierno, identidad y límites.
- `00_gobierno/05_invariantes_limites_y_no_equivalencias.md` — gobierno, identidad y límites.
- `01_nucleo/01_definicion_naturaleza_y_problema.md` — definiciones y contratos nucleares.
- `01_nucleo/02_topologia_componentes_y_responsabilidades.md` — definiciones y contratos nucleares.
- `01_nucleo/03_modelo_de_configuracion_operacional.md` — definiciones y contratos nucleares.
- `01_nucleo/04_modelo_de_solicitud_estructurada.md` — definiciones y contratos nucleares.
- `01_nucleo/05_execution_plan_definicion_y_contrato.md` — definiciones y contratos nucleares.
- `01_nucleo/06_grafos_possible_available_active.md` — definiciones y contratos nucleares.
- `01_nucleo/07_subgrafo_chain_plan_y_composicion.md` — definiciones y contratos nucleares.
- `01_nucleo/08_glosario_notacion_y_bibliografia_de_procedencia.md` — definiciones y contratos nucleares.
- `02_modelo_operativo/01_ciclo_extremo_a_extremo.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/02_pipeline_c0_c12.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/03_c0_c3_ingreso_resolucion_capacidades_y_region_candidata.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/04_c4_formalizacion_de_restricciones.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/05_c5_poda_y_feasible_search_space.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/06_c6_c9_generacion_validacion_evaluacion_y_seleccion.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/07_c10_c12_materializacion_prevalidacion_y_handoff.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/08_ciclo_execution_monitoring_event_state_update_replan_result.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/09_replanificacion_estabilidad_y_costo_de_cambio.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/10_estados_y_maquina_de_estados_del_plan.md` — proceso C0–C12, estado y replanificación.
- `02_modelo_operativo/11_grados_de_formalizacion_y_guia_de_decision.md` — proceso C0–C12, estado y replanificación.
- `03_contratos/01_hard_constraints_y_reglas_no_negociables.md` — reglas ejecutables, validación y fallo.
- `03_contratos/02_soft_objectives_preferencias_y_tradeoffs.md` — reglas ejecutables, validación y fallo.
- `03_contratos/03_solver_router_y_seleccion_de_mecanismos.md` — reglas ejecutables, validación y fallo.
- `03_contratos/04_colaboracion_llm_grafos_reglas_y_validadores.md` — reglas ejecutables, validación y fallo.
- `03_contratos/05_no_feasible_plan_fallos_y_degradacion.md` — reglas ejecutables, validación y fallo.
- `03_contratos/06_trazabilidad_observabilidad_y_run_log.md` — reglas ejecutables, validación y fallo.
- `03_contratos/07_autoridad_permisos_validadores_y_gates.md` — reglas ejecutables, validación y fallo.
- `04_integraciones/01_registro_y_orquestador.md` — frontera con componentes de CC.
- `04_integraciones/02_ac_hia_frontend_normalizacion_y_backend.md` — frontera con componentes de CC.
- `04_integraciones/03_mtc.md` — frontera con componentes de CC.
- `04_integraciones/04_accd.md` — frontera con componentes de CC.
- `04_integraciones/05_capps_y_composicion.md` — frontera con componentes de CC.
- `04_integraciones/06_validadores_y_runtime.md` — frontera con componentes de CC.
- `04_integraciones/07_busqueda_cognitiva_y_recuperacion.md` — frontera con componentes de CC.
- `05_ejemplos/00_metodologia_de_ejemplos_y_fixtures.md` — fixture normativo reproducible.
- `05_ejemplos/01_fixture_accd_manifestacion_linguistica.md` — fixture normativo reproducible.
- `05_ejemplos/02_fixture_accd_video_corto.md` — fixture normativo reproducible.
- `05_ejemplos/03_fixture_mtc_a_accd.md` — fixture normativo reproducible.
- `05_ejemplos/04_fixture_ac_hia_a_mccr.md` — fixture normativo reproducible.
- `05_ejemplos/05_fixture_capp_multichain.md` — fixture normativo reproducible.
- `05_ejemplos/06_fixture_no_feasible_plan.md` — fixture normativo reproducible.
- `05_ejemplos/07_fixture_replanificacion_por_evento.md` — fixture normativo reproducible.
- `05_ejemplos/08_fixture_comparacion_de_planes_validos.md` — fixture normativo reproducible.
- `05_ejemplos/09_superficie_de_descubrimiento_kill_web.md` — fixture normativo reproducible.
- `06_referencias/01_mapa_de_fuentes_internas.md` — procedencia y correspondencias.
- `06_referencias/02_referencias_externas_y_antecedentes.md` — procedencia y correspondencias.
- `06_referencias/03_mapa_de_correspondencias_con_cognicion_central.md` — procedencia y correspondencias.
- `07_integracion_repositorio/01_ubicacion_final_y_rutas.md` — propuesta no aplicada de integración.
- `07_integracion_repositorio/02_manifiesto_de_integracion.md` — propuesta no aplicada de integración.
- `07_integracion_repositorio/03_patch_prompt_central_y_registro_de_capacidad.md` — propuesta no aplicada de integración.
- `07_integracion_repositorio/04_instalacion_lectura_y_operacion_contextual.md` — propuesta no aplicada de integración.
- `07_integracion_repositorio/05_pruebas_y_criterios_de_aceptacion_v1.md` — propuesta no aplicada de integración.
- `07_integracion_repositorio/06_extensiones_opcionales_y_roadmap.md` — propuesta no aplicada de integración.
- `README.md` — entrada, navegación e instalación.

El inventario contiene exactamente 58 documentos finales. Los reportes auxiliares y artefactos serializados no alteran ese contrato.
