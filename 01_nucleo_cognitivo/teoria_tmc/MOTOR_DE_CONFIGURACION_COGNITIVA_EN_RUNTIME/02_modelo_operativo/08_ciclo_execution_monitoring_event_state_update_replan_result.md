# Ciclo execution–monitoring–event–state update–replan–result

**ID:** `MCCR-OPS-POST-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Después del handoff, MCCR no controla la ejecución; consume eventos clasificados para decidir si el plan sigue válido, debe replanificarse o debe detenerse.

## Responsabilidad

Este documento es responsable de:

- contrato de eventos relevantes para el plan
- condiciones de retorno a configuración
- relación entre evento, estado y resultado

No es responsable de:

- monitorizar directamente mecanismos privados
- actualizar estado canónico
- tratar cualquier feedback como obligación de replanificar

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| EXECUTION_EVENT | observación del runtime/backend | REQUIRED |
| PLAN_SNAPSHOT | plan y versión | REQUIRED |
| CLASSIFIED_RESULT | resultado validado o fallo | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Clasificar evento por tipo, evidencia y severidad.
2. Determinar si afecta una precondición, binding, hard constraint u objetivo blando.
3. Actualizar sólo el estado local autorizado.
4. Continuar si no afecta validez.
5. Pausar/replanificar si invalida el plan.
6. Clasificar resultado antes de proponer reintegración.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PLAN_CONTINUE | plan vigente | MCCR |
| REPLAN_REQUEST | delta y alcance | MCCR |
| STOP_DECISION | detención explicada | MCCR |
| RESULT_STATUS | válido, parcial, inválido o desconocido | MCCR |

## Especificación

Tipos mínimos de evento:

| Tipo | Ejemplo | Acción candidata |
|---|---|---|
| capability | herramienta deja de estar disponible | replanificar binding |
| source | archivo cambia o desaparece | invalidar snapshot |
| validation | postcondición falla | corregir/replanificar/detener |
| authority | humano revoca permiso | detener inmediatamente |
| preference | humano cambia prioridad | revaluar candidatos válidos |
| result | salida parcial o inesperada | clasificar antes de estado |

El evento no cambia el objetivo salvo nuevo comando humano. Una corrección humana se registra como comando/evento con autoridad, no como simple dato de entrenamiento.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Los eventos conservan fuente y tiempo.
- Sólo se actualiza estado en el alcance autorizado.

## Ejemplo operativo

Durante la generación de guion, el validador detecta que un valor ACCD no tuvo efecto. El resultado es inválido; se replanifica el paso de realización, no se cambia la intención del video.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Evento sin evidencia | mantener `UNVERIFIED_EVENT` |
| Revocación de autoridad | detener; no buscar workaround |
| Resultado parcial permitido | entregar como `PARTIAL` con límites, no como éxito total |

## Relaciones y límites

AC-HIA clasifica resultados y mantiene estado; MCCR reconfigura sólo mediante una solicitud de replan documentada.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/13_pipeline_y_maquina_de_estados.md`: pipeline y estado.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Evento, estado y resultado se distinguen.
- Hay criterio observable de retorno.
- La revocación detiene.
