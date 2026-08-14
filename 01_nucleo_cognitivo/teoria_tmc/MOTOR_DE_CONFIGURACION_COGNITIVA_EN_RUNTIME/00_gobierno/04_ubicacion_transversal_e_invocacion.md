# Ubicación transversal e invocación

**ID:** `MCCR-GOV-PLACE-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR se activa cuando una orden requiere elegir y acoplar estructuras/capacidades bajo restricciones situadas; no se activa para una respuesta simple que no exige configuración.

## Responsabilidad

Este documento es responsable de:

- criterios de activación y no activación
- puntos de llamada humana e interna
- ubicación candidata por función dominante

No es responsable de:

- forzar MCCR en toda conversación
- convertir ubicación provisional en decisión canónica
- ampliar alcance o permisos heredados

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| TRIGGER | necesidad de selección/composición | REQUIRED |
| PARENT_COMMAND | comando y alcance heredados | REQUIRED |
| CONTEXT_MODE | REFERENCE, CONTEXTUAL, DEVELOPMENT o AUDIT | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Detectar si hay múltiples componentes, restricciones, dependencias o capacidades variables.
2. Si no los hay, continuar con el backend normal.
3. Si los hay, invocar MCCR con alcance heredado.
4. Devolver plan o inviabilidad al llamador.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| INVOCATION_DECISION | ACTIVATE o BYPASS con razón | MCCR |
| MCCR_REQUEST | entrada estructurada y alcance heredado | MCCR |

## Especificación

Activar cuando exista al menos una condición material:

- hay que elegir entre varias cadenas o realizaciones;
- la disponibilidad del host modifica el diseño;
- una cApp compone varias capacidades;
- hay restricciones duras y preferencias concurrentes;
- un evento invalida un binding o un paso;
- se requiere demostrar que no existe un plan factible.

No activar para una consulta informativa directa, una única operación ya enlazada y válida, o cuando el usuario sólo pide inspección del Registro.

Ubicación candidata por función dominante: `02_metodos_y_herramientas/motor_de_configuracion_cognitiva_en_runtime/`. La carpeta actual `.../teoria_tmc/NUEVO_PAQUETE/` es taller de construcción. El traslado requiere aprobación humana.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La llamada interna hereda alcance y permisos; nunca los amplía.

## Ejemplo operativo

“Compara dos planes válidos para producir el video” activa MCCR. “¿Qué es ACCD?” no lo activa: se resuelve por recuperación y explicación.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Activación innecesaria | bypass y registro breve |
| Alcance padre ausente | no iniciar búsqueda interna |
| Ubicación final no aprobada | mantener paquete en taller |

## Relaciones y límites

AC-HIA/backend detecta el trigger. Búsqueda Cognitiva puede localizar componentes. La política de organización sustenta la ubicación propuesta.

## Procedencia

- [FUENTE_CC] `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`: ubicación por función dominante y contratos de carpetas.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Los triggers son observables.
- Existe regla de bypass.
- La ubicación se declara propuesta.
