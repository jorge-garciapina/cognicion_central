# Fixture de replanificación por evento

**ID:** `MCCR-FIX-REPLAN-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba replanificación mínima ante pérdida de una capacidad opcional.

**Oráculo principal:** La nueva versión conserva objetivo/invariantes, cambia sólo pasos afectados y enlaza `supersedes`.

## Comando humano de origen

> “Genera un guion ACCD con sugerencias visuales; si la herramienta visual no está disponible, usa descripciones textuales, sin cambiar el propósito.”

## Estructuras de COGNICION_CENTRAL activadas

- MCCR plan/versionado
- AC-HIA eventos
- ACCD video

## Estado y condiciones iniciales

`Π-001` contiene guion + generación visual; la alternativa textual fue autorizada. Evento: herramienta visual pasa `AVAILABLE→UNAVAILABLE` antes del paso.

## Transformación paso a paso

1. Runtime emite capability event.
2. Backend clasifica y pausa.
3. MCCR vuelve a C2.
4. Marca sólo binding visual afectado.
5. Conserva pasos de guion y validadores.
6. Genera `Π-002` con descripciones textuales.
7. Revalida todo.
8. Handoff acepta; `Π-001` queda `SUPERSEDED`.

## Salida intermedia esperada

```yaml
plan_delta:
  from: Pi-001
  to: Pi-002
  changed_steps: [visual_generation]
  preserved_steps: [source, concept, script, validation]
  goal_changed: false
```

## Salida final esperada

`Π-002 READY_FOR_HANDOFF`, sugerencias visuales expresadas como descripciones, traza del evento y costo de cambio.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Genealogía | `supersedes=Π-001` |
| Cambio mínimo | sólo binding/paso afectado |
| Validez | todas las hard constraints revalidadas |
| Objetivo | sin cambio |

## Por qué demuestra el concepto

Demuestra estabilidad sin apego a un componente inválido.

## Variantes negativas

- Editar Π-001 in situ falla versionado.
- Omitir sugerencias falla objetivo.
- Usar herramienta ausente falla capacidad.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/protocolo-videos-cortos.md`: realización video corto y efecto de valores.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
