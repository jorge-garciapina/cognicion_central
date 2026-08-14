# Metodología de ejemplos y fixtures

**ID:** `MCCR-FIX-METHOD-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Define cómo convertir un ejemplo explicativo en prueba reproducible y cómo separar datos, procedimiento, oráculos y variaciones.

**Oráculo principal:** Un fixture pasa sólo si produce la salida declarada, conserva la traza y falla en las variantes negativas previstas.

## Comando humano de origen

> “Ejecuta el fixture indicado sin persistir cambios y reporta PASS/FAIL con evidencia.”

## Estructuras de COGNICION_CENTRAL activadas

- AC-HIA para comando/estado
- MCCR C0–C12
- validadores y gates aplicables
- estructura de dominio específica

## Estado y condiciones iniciales

`mode=CONTEXTUAL`, `persistence=EPHEMERAL`, fuentes localizadas, capability snapshot explícito y versión de cada documento fijada.

## Transformación paso a paso

1. Fijar comando y portador original.
2. Fijar snapshot de estado/capacidades.
3. Enumerar estructuras y fuentes.
4. Ejecutar C0–C12 conservando artefactos intermedios.
5. Comparar salida con oráculos duros.
6. Ejecutar variantes negativas.
7. Emitir reporte sin promover resultados.

## Salida intermedia esperada

Un `FIXTURE_RUN` contiene IDs de comando/plan, outputs C0–C12, eventos, hashes/rutas y veredictos.

## Salida final esperada

```yaml
fixture_report:
  fixture_id:
  status: PASS | FAIL | BLOCKED
  hard_oracles: []
  negative_cases: []
  trace_ref:
  persistence: EPHEMERAL
```

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Reproducibilidad | mismos inputs/snapshot producen misma estructura contractual |
| Procedencia | toda decisión material tiene fuente/inferencia |
| Negativos | cada variante falla en el gate previsto |
| No persistencia | ningún archivo externo cambia |

## Por qué demuestra el concepto

Hace que los ejemplos dejen de ser decoración: cada uno enseña el procedimiento, contiene un oráculo y puede detectar regresiones.

## Variantes negativas

- Omitir el snapshot debe bloquear.
- Cambiar una hard constraint sin nueva versión debe fallar.
- Marcar una simulación contextual como `RUNTIME_READY` debe fallar.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.
- [DECISION_HUMANA] `ART_MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME.txt`: inventario y contrato de los 58 documentos.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
