# Replanificación, estabilidad y costo de cambio

**ID:** `MCCR-OPS-REPLAN-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Replanificar es construir una nueva versión válida que responde a un delta; no significa empezar de cero ni degradar invariantes. Entre alternativas válidas se prefiere estabilidad cuando esa preferencia está autorizada.

## Responsabilidad

Este documento es responsable de:

- detección del delta
- conservación de partes válidas
- criterio de cambio mínimo y genealogía

No es responsable de:

- parchear un plan ya validado in situ
- preservar pasos inválidos por costo hundido
- cambiar objetivo para conservar factibilidad

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| REPLAN_REQUEST | evento y alcance | REQUIRED |
| CURRENT_PLAN | versión vigente | REQUIRED |
| CURRENT_STATE | nuevo snapshot | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Comparar snapshot viejo/nuevo.
2. Marcar componentes y restricciones afectados.
3. Congelar partes no afectadas si siguen válidas.
4. Regresar a la etapa C más temprana necesaria.
5. Generar y validar nueva versión completa.
6. Comparar estabilidad/costo sólo entre versiones válidas.
7. Registrar `supersedes` y handoff nuevo.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PLAN_DELTA | cambios y causas | MCCR |
| SUPERSEDING_EXECUTION_PLAN | nueva versión | MCCR |
| NO_FEASIBLE_PLAN | si el delta elimina toda alternativa | MCCR |

## Especificación

Regreso mínimo sugerido:

- cambio de capacidad → C2;
- nueva fuente/estructura → C3;
- nueva restricción → C4;
- fallo de candidato → C6/C7;
- preferencia nueva sin cambio de validez → C8;
- error de materialización → C10;
- rechazo de handoff por snapshot → C2 o C3.

El costo de cambio puede considerar número de pasos sustituidos, artefactos invalidados, nueva latencia, riesgo y carga de revisión. No se agregan pesos si el humano no los definió; se explican los tradeoffs.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Toda nueva versión revalida el contrato completo.
- Las partes conservadas mantienen hashes/referencias.

## Ejemplo operativo

Falla sólo la generación visual opcional. `Π-002` conserva recuperación, construcción conceptual y guion; sustituye el paso visual por marcadores textuales porque el resultado aceptado lo permite. La traza enumera el delta.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Cambio afecta objetivo | requiere nuevo comando, no replan automático |
| Costo menor pero plan inválido | rechazar |
| No se puede localizar el delta | revalidar desde C0 |

## Relaciones y límites

Se apoya en eventos/estado de AC-HIA y en versionado MCCR; no actualiza la memoria canónica.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/13_pipeline_y_maquina_de_estados.md`: pipeline y estado.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- La etapa de retorno es justificable.
- Se conserva genealogía.
- Estabilidad no sobrepasa validez.
