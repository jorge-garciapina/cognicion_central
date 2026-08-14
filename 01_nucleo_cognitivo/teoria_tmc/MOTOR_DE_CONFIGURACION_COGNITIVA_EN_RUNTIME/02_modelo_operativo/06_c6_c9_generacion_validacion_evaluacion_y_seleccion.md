# C6–C9: generación, validación, evaluación y selección

**ID:** `MCCR-OPS-C6C9-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

C6 compone alternativas; C7 decide validez; C8 compara preferencias; C9 selecciona de forma explicable. Esta separación impide que un puntaje alto legitime un plan inválido.

## Responsabilidad

Este documento es responsable de:

- generación de candidatos
- validación dura
- evaluación blanda
- selección y desempate

No es responsable de:

- prometer óptimo global
- usar el LLM como veredicto único
- forzar selección si no hay candidato válido

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| FEASIBLE_SEARCH_SPACE | región podada | REQUIRED |
| CONSTRAINT_MODEL | hard/soft | REQUIRED |
| SOLVER_ROUTE | mecanismos disponibles | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. C6 generar configuraciones completas y diversas.
2. C7 ejecutar todos los validadores duros y retener sólo `VALID`.
3. Si no quedan válidos, emitir inviabilidad.
4. C8 evaluar preferencias con evidencia y declarar incomparabilidad.
5. C9 aplicar orden humano, Pareto o desempate estable y seleccionar.
6. Conservar alternativas válidas y razón de descarte.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PLAN_CANDIDATES | configuraciones generadas | MCCR |
| VALID_CANDIDATES | subconjunto válido | MCCR |
| PREFERENCE_ASSESSMENT | tradeoffs | MCCR |
| SELECTED_CONFIGURATION | elección explicada | MCCR |

## Especificación

Regla central:

```text
VALID(candidate) = todas las restricciones duras pasan
PREFERRED(a,b) = comparación permitida sólo si VALID(a) y VALID(b)
SELECT = candidato válido favorecido por preferencias declaradas
```

Cuando las preferencias no ordenan totalmente, C9 puede: conservar frente de Pareto, aplicar desempate estable (menos cambios, menos dependencias, mayor madurez) si está autorizado, o solicitar elección humana. No inventa pesos numéricos.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- C7 produce evidencia por regla y candidato.
- C9 conserva alternativas válidas relevantes.

## Ejemplo operativo

Plan A usa sólo texto y tarda menos; Plan B añade visuales y preserva más valores ACCD. Ambos son válidos. Si el humano priorizó fidelidad, B gana; si no hay prioridad y el costo cambia materialmente, se presentan ambos.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Ningún candidato completo | `NO_FEASIBLE_PLAN` |
| Evaluaciones no comparables | conservar Pareto o pedir decisión |
| Selector recibe candidato `INVALID` | error contractual y detención |

## Relaciones y límites

El solver router decide técnicas; validadores externos aportan veredictos; MCCR conserva la secuencia validación→preferencia→selección.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Validez y preferencia están separadas.
- La selección tiene razón observable.
- No se promete óptimo global.
