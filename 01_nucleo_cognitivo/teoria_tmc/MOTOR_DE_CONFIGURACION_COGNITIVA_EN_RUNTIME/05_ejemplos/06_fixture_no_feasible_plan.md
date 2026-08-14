# Fixture NO_FEASIBLE_PLAN

**ID:** `MCCR-FIX-NFP-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba detención correcta ante restricciones duras incompatibles.

**Oráculo principal:** No se emite `EXECUTION_PLAN`; se devuelve núcleo conflictivo, cobertura y opciones que requieren decisión humana.

## Comando humano de origen

> “Produce el video corto final de TikTok, pero no generes ninguna manifestación audiovisual ni textual, no uses archivos y no cambies el resultado solicitado.”

## Estructuras de COGNICION_CENTRAL activadas

- AC-HIA autoridad/normalización
- MCCR C4/C5
- contratos NO_FEASIBLE_PLAN

## Estado y condiciones iniciales

El resultado `video final` requiere alguna manifestación; el comando prohíbe todas las formas disponibles y prohíbe cambiar el resultado.

## Transformación paso a paso

1. C4 compila resultado obligatorio y prohibiciones.
2. Detecta que toda realización disponible viola al menos una prohibición.
3. C5 poda todas las cadenas.
4. Clasifica `CONSTRAINT_CONFLICT`.
5. Construye núcleo: requiere manifestación ∧ prohíbe manifestación.
6. Propone aclarar qué requisito cambiar sin hacerlo.

## Salida intermedia esperada

```text
H1 expected_result = final_video
H2 no audiovisual manifestation
H3 no textual manifestation
H4 no result change
feasible_space = ∅
```

## Salida final esperada

```yaml
status: NO_FEASIBLE_PLAN
classification: CONSTRAINT_CONFLICT
goal_changed: false
safe_next_actions:
  - ask_human_to_relax_H2_or_H3
  - ask_human_to_change_expected_result
```

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| No plan | ningún `EXECUTION_PLAN` emitido |
| No relajación | H1–H4 conservadas |
| Explicación | núcleo mínimo visible |
| Autoridad | sólo humano puede cambiar |

## Por qué demuestra el concepto

Demuestra que el motor puede detenerse y que una salida negativa es mejor que una falsa solución.

## Variantes negativas

- Producir artículo “como alternativa” falla H4.
- Ignorar H2/H3 falla hard constraints.
- Decir “error desconocido” falla explicabilidad.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
