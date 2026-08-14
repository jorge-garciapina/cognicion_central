# Fixture cApp multichain

**ID:** `MCCR-FIX-CAPP-MULTI-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba una cApp con ramas paralelas, convergencia y una cadena final de realización.

**Oráculo principal:** Las ramas conservan identidad/estado, convergen mediante gate y la cApp produce un resultado único verificable.

## Comando humano de origen

> “Activa una cApp de contenido que investigue las fuentes internas, construya el concepto y produzca un guion ACCD con procedencia.”

## Estructuras de COGNICION_CENTRAL activadas

- cApp compuesta
- Búsqueda Cognitiva de fuentes
- MTC conceptual
- ACCD realización
- MCCR composición

## Estado y condiciones iniciales

Lectura interna autorizada; escritura externa no autorizada; ramas de búsqueda y construcción pueden ejecutarse en paralelo.

## Transformación paso a paso

1. C1 descompone resultado en evidencia, construcción y manifestación.
2. C3 recupera tres cadenas.
3. C6 configura búsqueda y MTC en paralelo.
4. Gate G-merge exige fuentes calificadas y construcción validada.
5. Cadena ACCD consume ambas.
6. C7 valida contratos de estado y puertos.
7. C10 materializa plan multichain.
8. Runtime ejecuta y frontend proyecta resultado.

## Salida intermedia esperada

```text
branch A: sources → provenance map
branch B: MTC → conceptual construction
G-merge: A.PASS && B.PASS
branch C: ACCD(A,B) → script
```

## Salida final esperada

Un guion con mapa de procedencia y estado efímero; cada subresultado conserva `producer_id` y hash/referencia.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Ramas | sin escrituras conflictivas |
| Convergencia | ambas precondiciones PASS |
| cApp | objetivo e invariantes preservados |
| Salida | un resultado contractual |

## Por qué demuestra el concepto

Demuestra composición no lineal y la diferencia entre cApp y chain.

## Variantes negativas

- Ejecutar ACCD antes del gate falla.
- Fusionar trazas falla identidad.
- Búsqueda amplía alcance falla permisos.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt`: definición de cApp.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
