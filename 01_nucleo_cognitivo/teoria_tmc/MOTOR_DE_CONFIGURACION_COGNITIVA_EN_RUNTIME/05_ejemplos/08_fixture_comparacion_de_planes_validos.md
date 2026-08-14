# Fixture de comparación de planes válidos

**ID:** `MCCR-FIX-COMPARE-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba `VALID` antes de `OPTIMAL` y comparación explicable sin falsa precisión.

**Oráculo principal:** Sólo planes PASS llegan a la matriz; selección sigue la prioridad humana o conserva incomparabilidad.

## Comando humano de origen

> “Entre planes válidos, prioriza trazabilidad, después estabilidad y por último rapidez.”

## Estructuras de COGNICION_CENTRAL activadas

- MCCR C7–C9
- soft objectives
- traza

## Estado y condiciones iniciales

A: alta rapidez, media trazabilidad, media estabilidad. B: media rapidez, alta trazabilidad, alta estabilidad. C: alta rapidez pero escribe sin permiso.

## Transformación paso a paso

1. C7 valida hard constraints.
2. C queda `INVALID` y se excluye.
3. C8 evalúa A/B con categorías y evidencia.
4. Aplica prioridad lexicográfica declarada.
5. B gana por trazabilidad; estabilidad confirma.
6. Registra que rapidez no se evaluó como desempate decisivo.

## Salida intermedia esperada

| Plan | Hard | Trazabilidad | Estabilidad | Rapidez |
|---|---|---|---|---|
| A | PASS | MEDIA | MEDIA | ALTA |
| B | PASS | ALTA | ALTA | MEDIA |
| C | FAIL | ALTA | MEDIA | ALTA |

## Salida final esperada

`SELECTED_CONFIGURATION=B`; razón: prioridad 1. C se conserva sólo en la traza de rechazo.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Filtro duro | C ausente de C8/C9 |
| Prioridad | orden humano aplicado |
| Precisión | categorías con evidencia, sin scores inventados |
| Alternativas | A conservado como válido no elegido |

## Por qué demuestra el concepto

Aísla la diferencia entre validez y preferencia.

## Variantes negativas

- Seleccionar C por rapidez falla.
- Promediar categorías con pesos inventados falla.
- Borrar A falla trazabilidad.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
