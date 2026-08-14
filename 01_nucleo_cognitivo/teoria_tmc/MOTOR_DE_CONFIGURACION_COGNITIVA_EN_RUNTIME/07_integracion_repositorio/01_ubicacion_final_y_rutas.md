# Ubicación final y rutas propuestas

**ID:** `MCCR-REPO-PLACE-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Por función dominante, MCCR parece un método/herramienta transversal, no teoría MTC ni aplicación final. La ubicación se propone; este build no mueve el paquete.

## Responsabilidad

Este documento es responsable de:

- ruta candidata
- plan de movimiento y enlaces
- condiciones para aprobar ubicación

No es responsable de:

- mover archivos automáticamente
- crear autoridad por ubicación
- romper rutas fuente

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| PACKAGE_CLASSIFICATION | rol dominante | REQUIRED |
| ORGANIZATION_POLICY | reglas CORE/METHOD/APP | REQUIRED |
| HUMAN_APPROVAL | decisión de destino | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Evaluar función dominante.
2. Comparar alternativas de ubicación.
3. Elegir ruta candidata.
4. Enumerar referencias que cambiarían.
5. Validar enlaces/artefacto.
6. Mover sólo mediante comando humano separado.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PROPOSED_PATH | ruta candidata | MCCR |
| MOVE_PLAN | operaciones no ejecutadas | MCCR |
| OPEN_DECISION | aprobación | MCCR |

## Especificación

Ruta actual de construcción:

`01_nucleo_cognitivo/teoria_tmc/NUEVO_PAQUETE/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/`

Ruta final recomendada:

`02_metodos_y_herramientas/motor_de_configuracion_cognitiva_en_runtime/`

Razón: su salida dominante es un procedimiento/contrato reutilizable de selección y configuración, no una teoría sobre cognición ni una cApp con un resultado de dominio. Alternativa: mantenerlo bajo teoría TMC si el humano decide que MCCR es extensión intrínseca de MTC; las fuentes actuales no obligan esa clasificación.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La ruta final requiere aprobación humana.
- El movimiento debe preservar historial y actualizar referencias en una sola operación gobernada.

## Ejemplo operativo

El paquete permanece en `NUEVO_PAQUETE` con estado candidato; tras aprobación se mueve y el Registro/README se actualizan mediante el manifiesto de integración.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Destino ya ocupado | comparar identidades/versiones antes de merge |
| Referencias externas no inventariadas | detener movimiento |
| Aprobación ausente | mantener ubicación actual |

## Relaciones y límites

Aplica ORG-CC 1.9.0. No modifica la política.

## Procedencia

- [FUENTE_CC] `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`: ubicación por función dominante y contratos de carpetas.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Ruta actual y propuesta están claras.
- Existe alternativa explícita.
- No se ejecuta el traslado.
