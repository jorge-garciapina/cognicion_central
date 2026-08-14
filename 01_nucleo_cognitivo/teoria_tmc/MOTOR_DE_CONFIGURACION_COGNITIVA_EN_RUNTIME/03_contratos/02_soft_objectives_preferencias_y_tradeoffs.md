# Soft objectives, preferencias y tradeoffs

**ID:** `MCCR-CON-SOFT-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Los objetivos blandos ordenan candidatos ya válidos. MCCR comunica tradeoffs y evita inventar pesos o fingir que existe una única mejor solución.

## Responsabilidad

Este documento es responsable de:

- representación de preferencias
- comparación cualitativa/ordinal
- Pareto, desempate y consulta humana

No es responsable de:

- compensar violaciones duras
- maximizar métricas sin calibración
- inferir prioridades materiales no expresadas

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| VALID_CANDIDATES | planes que pasaron hard constraints | REQUIRED |
| PREFERENCE_SET | prioridades y evidencia | REQUIRED |
| ASSESSMENTS | calidad, costo, latencia, estabilidad, madurez | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Confirmar que todos los candidatos son válidos.
2. Evaluar cada objetivo con evidencia comparable.
3. Aplicar prioridad lexicográfica si fue declarada.
4. Si no, construir relaciones de dominancia/Pareto.
5. Usar desempate estable autorizado o presentar opciones.
6. Registrar pérdida/ganancia por elección.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PREFERENCE_MATRIX | candidatos×objetivos | MCCR |
| TRADEOFF_REPORT | ventajas y costos | MCCR |
| SELECTION_RATIONALE | regla usada | MCCR |

## Especificación

Objetivos comunes: fidelidad al dominio, calidad prevista, menor latencia/costo, menos dependencias, mayor madurez, explicabilidad, estabilidad ante eventos y menor cambio en replanificación.

Categorías v1: `BETTER`, `EQUAL`, `WORSE`, `INCOMPARABLE`, siempre con razón. Los números sólo se usan cuando provienen de medición o de una preferencia humana explícita.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Un objetivo blando nunca cambia un FAIL duro a PASS.

## Ejemplo operativo

A y B cumplen ACCD. A es más rápido; B traza mejor cada valor. Sin prioridad humana ninguno domina: se muestran ambos. Si “máxima trazabilidad” fue declarada, B se selecciona.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Candidato inválido en matriz | retirarlo y corregir C7 |
| Pesos inventados | eliminarlos y usar orden cualitativo |
| Tradeoff material sin prioridad | pedir decisión humana |

## Relaciones y límites

C8 produce evaluación; C9 selecciona. La estabilidad de replan es un objetivo blando salvo mandato explícito.

## Procedencia

- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.
- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Sólo hay candidatos válidos.
- Las prioridades tienen fuente.
- Se conserva incomparabilidad.
