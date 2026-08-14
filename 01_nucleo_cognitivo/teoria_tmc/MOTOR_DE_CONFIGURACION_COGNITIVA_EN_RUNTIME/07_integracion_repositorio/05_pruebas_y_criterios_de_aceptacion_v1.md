# Pruebas y criterios de aceptación v1

**ID:** `MCCR-REPO-TEST-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

V1 se acepta como paquete conceptual cuando los 58 documentos son coherentes, los contratos pueden ejecutarse contextualmente y los fixtures detectan fallos previstos. No exige runtime de software ni solver externo.

## Responsabilidad

Este documento es responsable de:

- suite de aceptación documental/semántica/operativa
- criterios PASS/FAIL/BLOCKED
- fallos globales

No es responsable de:

- certificar producción
- ignorar decisiones abiertas
- contar presencia de archivo como calidad

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| PACKAGE_FILES | 58 documentos | REQUIRED |
| FIXTURES | 10 casos | REQUIRED |
| SOURCE_AND_HASH_REPORTS | integridad | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Validar inventario y marcadores.
2. Validar términos/estados y enlaces.
3. Ejecutar prueba del ciclo mínimo.
4. Ejecutar fixture NO_FEASIBLE.
5. Ejecutar replan y comparación.
6. Auditar fronteras de integración.
7. Generar cross-validation y estado final.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| ACCEPTANCE_REPORT | checks y evidencia | MCCR |
| RELEASE_STATE | candidato completo/con decisiones | MCCR |

## Especificación

Suite mínima:

| ID | Prueba | PASS |
|---|---|---|
| T01 | inventario | 58 paths finales existen |
| T02 | guías | no quedan marcadores de construcción |
| T03 | gobierno | NON_CANONICAL y HUMAN visibles |
| T04 | flujo | comando→estructura→capacidad→región→constraints→poda→candidatos→validación→selección→plan→handoff |
| T05 | ejecución | resultado→evento/estado→replan |
| T06 | inviabilidad | no relaja hard constraints |
| T07 | ejemplos | cada fixture tiene campos obligatorios |
| T08 | integración | no duplica AC-HIA/Registro/MTC/ACCD/runtime |
| T09 | implementación | no afirma Orquestador/runtime existentes |
| T10 | procedencia | fuentes/inferencias/ausencias distinguibles |

Fallos globales: contenido vacío/genérico; contradicción entre contrato y fixture; plan inválido tratado como óptimo; persistencia/canonización silenciosa; dependencia obligatoria de algoritmos futuros.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Un FAIL global impide `CANDIDATE_COMPLETE`.
- Un OPEN_DECISION no bloqueante conduce a `CANDIDATE_WITH_OPEN_DECISIONS`.

## Ejemplo operativo

Si T01–T10 pasan pero la ubicación y el Orquestador siguen abiertos, el estado correcto es `CANDIDATE_WITH_OPEN_DECISIONS / NON_CANONICAL`.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Check sin evidencia | no contar como PASS |
| Fixture bloqueado por fuente ausente | `BLOCKED`, no PASS |
| Decisión abierta ocultada | fallo de transparencia |

## Relaciones y límites

El resultado real se materializa en `CROSS_VALIDATION_REPORT.md` y `BUILD_REPORT.md`.

## Procedencia

- [DECISION_HUMANA] `ART_MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME.txt`: inventario y contrato de los 58 documentos.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.
- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- T01–T10 tienen evidencia.
- Estado final sigue reglas.
- No se exige software externo.
