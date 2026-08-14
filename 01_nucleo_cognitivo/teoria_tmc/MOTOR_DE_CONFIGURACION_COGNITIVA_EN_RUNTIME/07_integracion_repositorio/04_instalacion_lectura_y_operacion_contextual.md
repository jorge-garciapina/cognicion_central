# Instalación, lectura y operación contextual

**ID:** `MCCR-REPO-INSTALL-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Instalar contextualmente MCCR significa cargar su gobierno, contratos y bindings en `OVERLAY://`; no modifica la plataforma, el paquete fuente ni CC.

## Responsabilidad

Este documento es responsable de:

- boot sequence
- modos REFERENCE/CONTEXTUAL/DEVELOPMENT/AUDIT
- estado inicial y prueba mínima

No es responsable de:

- afirmar instalación persistente
- cargar todos los archivos siempre
- declarar runtime autónomo

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| PACKAGE_OR_ARTIFACT | árbol MCCR | REQUIRED |
| RECEIVER_CONTEXT | proyecto/chat | REQUIRED |
| HOST_PROFILE | capacidades | REQUIRED |
| MODE | modo solicitado | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Localizar README/manifiesto y verificar integridad.
2. Recuperar gobierno, núcleo y contrato responsable.
3. Caracterizar contexto y host.
4. Crear overlay efímero con bindings.
5. Ejecutar fixture AC-HIA→MCCR y NO_FEASIBLE.
6. Reportar estado real.
7. Operar con recuperación mínima por comando.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| MCCR_INSTALLATION_OVERLAY | configuración contextual | MCCR |
| INSTALLATION_REPORT | integridad, pruebas y límites | MCCR |

## Especificación

```text
PACKAGE:// = READ_ONLY
CC:// = READ_ONLY
CONTEXT:// = READ_ONLY salvo autorización
OVERLAY:// = EPHEMERAL
OUTPUT:// = REVIEWABLE_NOT_PERSISTED
```

Estados de informe: `REFERENCE_READY`, `CONTEXTUALLY_OPERABLE`, `PARTIALLY_CONFIGURED`, `SPECIFIED`, `NOT_INSTALLED`. No usar `RUNTIME_READY` sin software ejecutable verificado.

Recuperación por tarea: README → documento responsable → contratos/gates → integración aplicable → fixture pertinente. Gobierno se añade ante cambios, permisos o persistencia.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Instalación es overlay, no modificación de plataforma.
- El artefacto serializado es una fotografía.

## Ejemplo operativo

En un chat con lectura de archivos, la IA carga ficha, plan contract, C0–C12, hard constraints y fixture 04. Ejecuta prueba sin escribir y reporta `CONTEXTUALLY_OPERABLE` con runtime code ausente.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Artefacto inválido | no instalar |
| Documento normativo ausente | `PARTIALLY_CONFIGURED` |
| Prueba mínima falla | no declarar operativo |

## Relaciones y límites

Extiende el patrón del Prompt Central y AC-HIA sin sustituirlos.

## Procedencia

- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- El overlay es efímero.
- La recuperación es mínima.
- El estado no excede evidencia.
