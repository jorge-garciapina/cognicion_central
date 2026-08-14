# Autoridad, estado y versionado

**ID:** `MCCR-GOV-AUTH-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Toda configuración está subordinada a autoridad, alcance y evidencia. Una versión del plan puede cambiar por un evento, pero no puede cambiar silenciosamente el objetivo, la autoridad ni un invariante.

## Responsabilidad

Este documento es responsable de:

- precedencia de fuentes
- estados epistemológicos, de ciclo de vida y de plan
- reglas de supersesión y revisión humana

No es responsable de:

- conceder permisos
- aprobar integración canónica
- confundir versión documental con estado de una ejecución

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| AUTHORITY_CONTEXT | autoridad humana, plataforma y permisos | REQUIRED |
| SOURCE_SET | fuentes con estado y versión | REQUIRED |
| CHANGE_EVENT | cambio propuesto o observado | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Clasificar cada afirmación por procedencia.
2. Aplicar precedencia y preservar conflictos al mismo nivel.
3. Determinar si el cambio es editorial, compatible o rompe contrato.
4. Crear nueva versión y enlazar `supersedes`; nunca reescribir la historia.
5. Solicitar decisión humana si cambia autoridad, objetivo, invariante o promoción.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| AUTHORITY_RESOLUTION | precedencia aplicada y conflictos | MCCR |
| VERSION_RECORD | cambio, motivo, autor y relación | MCCR |
| OPEN_DECISION | pregunta material no resuelta | MCCR |

## Especificación

Orden vinculante:

```text
plataforma/comando humano actual
> canon y gobierno CC
> decisiones humanas del contexto MCCR
> guía local del esqueleto
> fuentes no canónicas o externas
> inferencia
```

Estados separados:

| Eje | Valores candidatos |
|---|---|
| epistemológico | `SOURCE`, `DECISION`, `INFERENCE`, `HYPOTHESIS`, `ABSENCE` |
| ciclo de vida | `DEVELOPMENT`, `REVIEW`, `APPROVED`, `DEPRECATED` |
| integración | `NON_CANONICAL`, `PROPOSED`, `CANONICAL` |
| implementación | `SPECIFIED`, `CONTEXTUALLY_OPERABLE`, `IMPLEMENTED`, `VERIFIED` |

Sólo el humano puede aprobar promoción. “La IA produjo una respuesta” no cambia ningún eje por sí solo.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- El estado real nunca puede exceder la evidencia disponible.
- Toda supersesión conserva acceso a la versión anterior.

## Ejemplo operativo

Un evento informa que la herramienta visual no está disponible. Se crea `Π-002` que supersede `Π-001`; conserva el objetivo y cambia sólo el binding visual si la salida aceptada lo permite. Si no lo permite, el estado es `NO_FEASIBLE_PLAN`.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Fuentes de igual autoridad se contradicen | registrar conflicto y abrir decisión |
| Cambio sin motivo o procedencia | rechazar versión |
| Solicitud de canonización implícita | mantener `NON_CANONICAL` |

## Relaciones y límites

El canon gobierna; AC-HIA resuelve autoridad operativa; MCCR registra cómo esa resolución condiciona candidatos y versiones de plan.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Los cuatro ejes de estado no se colapsan.
- La precedencia es observable.
- La replanificación conserva genealogía.
