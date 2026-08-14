# Fixture MTC → ACCD

**ID:** `MCCR-FIX-MTC-ACCD-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba composición mediada entre transformación cognitiva MTC y realización ACCD.

**Oráculo principal:** MTC termina en una construcción conceptual validada; un adaptador explícito la entrega a ACCD, que produce la manifestación.

## Comando humano de origen

> “Transforma la idea de búsqueda cognitiva en una construcción conceptual y úsala como base de un guion corto ACCD; conserva las dos trazas.”

## Estructuras de COGNICION_CENTRAL activadas

- MTC-WORK y operadores
- adaptador MTC→construcción conceptual
- MCCR composición
- ACCD video corto

## Estado y condiciones iniciales

Fuentes MTC, Búsqueda Cognitiva y ACCD localizadas; host textual disponible; salida efímera.

## Transformación paso a paso

1. C3 recupera operadores MTC pertinentes y cadena ACCD.
2. C4 compila separación de responsabilidades y dos trazas.
3. C6 crea cadena MTC→adapter→ACCD.
4. C7 verifica que el puerto MTC produce construcción conceptual aceptable.
5. C10 crea pasos y gate entre módulos.
6. Runtime ejecuta MTC y valida construcción.
7. Gate habilita ACCD.
8. ACCD realiza y valida guion.

## Salida intermedia esperada

Construcción conceptual: portador→manifestación→firma→candidato→comparación→resultado trazable; `MTC_TRACE` termina antes del guion.

## Salida final esperada

Guion ACCD que realiza esa construcción y contiene `ACCD_TRACE`; el plan mantiene enlaces a ambas sin atribuir a MTC la manifestación.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Puerto MTC | construcción conceptual completa |
| Gate mediador | no ejecutar ACCD antes de PASS |
| Identidad | MTC y ACCD separados |
| Trazas | dos genealogías enlazadas |

## Por qué demuestra el concepto

Demuestra mediación y composición sin colapso de módulos.

## Variantes negativas

- MTC produce directamente el video: falla frontera.
- ACCD recibe idea cruda sin gate: falla puerto.
- Una sola traza borra procedencia: falla auditabilidad.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
