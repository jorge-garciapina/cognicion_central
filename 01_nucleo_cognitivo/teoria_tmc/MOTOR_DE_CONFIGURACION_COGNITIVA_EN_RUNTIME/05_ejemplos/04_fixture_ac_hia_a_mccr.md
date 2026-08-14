# Fixture AC-HIA → MCCR

**ID:** `MCCR-FIX-ACHIA-MCCR-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba que el lenguaje humano se formaliza automáticamente y que MCCR no duplica frontend/normalización/backend.

**Oráculo principal:** El comando original se conserva, el grafo normalizado alimenta MCCR y el plan vuelve al backend.

## Comando humano de origen

> “Compara dos formas válidas de producir el guion y elige la más trazable, pero no guardes nada.”

## Estructuras de COGNICION_CENTRAL activadas

- HUMAN_COMMAND_EVENT
- COMMAND_NORMALIZER NC-00–NC-12
- COGNITIVE_BACKEND
- MCCR C0–C12

## Estado y condiciones iniciales

Dos cadenas candidatas conocidas; runtime textual disponible; persistencia efímera.

## Transformación paso a paso

1. Frontend captura portador.
2. Normalizador genera operaciones COMPARE→SELECT, objetivo trazabilidad y no persistencia.
3. Backend forma `EXECUTION_REQUEST`.
4. MCCR C0 admite y C4 compila hard/soft.
5. C7 conserva sólo cadenas válidas.
6. C8 evalúa trazabilidad.
7. C9 selecciona.
8. C12 devuelve plan al backend.

## Salida intermedia esperada

```yaml
normalized:
  operations: [COMPARE, SELECT]
  hard: [NO_PERSISTENCE]
  soft_priority: TRACEABILITY
```

## Salida final esperada

`EXECUTION_PLAN` seleccionado con razón: mayor cobertura de fuente→decisión→salida; estado `READY_FOR_HANDOFF`. No se ejecuta en este fixture de interfaz.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Portador | referenciado |
| Formalización automática | humano no escribe estructuras |
| Frontera | MCCR comienza después de normalización |
| Retorno | plan consumible por backend |

## Por qué demuestra el concepto

Aísla el borde exacto AC-HIA/MCCR y demuestra la premisa humano-lenguaje natural.

## Variantes negativas

- Pedir YAML al humano falla interfaz.
- MCCR normaliza de nuevo y cambia intención: falla frontera.
- Guardar el plan falla persistencia.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
