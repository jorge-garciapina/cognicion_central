# C5: poda y espacio de búsqueda factible

**ID:** `MCCR-OPS-C5-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

C5 elimina configuraciones que no pueden satisfacer reglas duras; no elige todavía la “mejor” ni relaja reglas para evitar un conjunto vacío.

## Responsabilidad

Este documento es responsable de:

- operadores de poda
- prueba de inclusión/exclusión
- detección temprana de inviabilidad

No es responsable de:

- puntuar calidad
- eliminar diversidad por preferencia
- confundir “no encontrado” con “imposible”

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| CANDIDATE_REGION | nodos/aristas posibles | REQUIRED |
| CONSTRAINT_MODEL | reglas duras | REQUIRED |
| CAPABILITY_SNAPSHOT | disponibilidad situada | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Eliminar identidades no calificadas o sin fuente.
2. Eliminar capacidades prohibidas/ausentes si son necesarias.
3. Eliminar puertos, tipos y dependencias incompatibles.
4. Propagar requisitos obligatorios y gates.
5. Separar `SOURCE_NOT_FOUND`, `UNKNOWN` e `INFEASIBLE`.
6. Emitir espacio factible o prueba de vacío.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| FEASIBLE_SEARCH_SPACE | componentes y combinaciones aún válidos | MCCR |
| PRUNING_TRACE | exclusiones y reglas | MCCR |
| NO_FEASIBLE_PLAN | si se demuestra vacío | MCCR |

## Especificación

La poda v1 puede operar con listas y reglas:

```text
P0 identidad/procedencia
P1 autoridad/alcance
P2 capacidad/permiso
P3 tipos y puertos
P4 dependencias y orden
P5 invariantes de dominio
P6 gates y resultado esperado
```

`FEASIBLE_SEARCH_SPACE` significa “no se conoce violación dura con la evidencia actual”; no garantiza que un candidato final exista. `UNKNOWN` indispensable requiere verificación o detención, no inclusión optimista.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Cada poda cita la regla responsable.
- Las preferencias no podan salvo que el humano las eleve explícitamente a requisito.

## Ejemplo operativo

La cadena que requiere una herramienta visual prohibida se excluye por P2. La cadena textual permanece si el resultado esperado incluye guion. La rapidez no elimina alternativas porque es preferencia.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Vacío por ausencia confirmada | `NO_FEASIBLE_PLAN` con dependencia faltante |
| Vacío por fuente no encontrada | declarar búsqueda incompleta, no imposibilidad absoluta |
| Poda sin regla | reinsertar candidato y corregir traza |

## Relaciones y límites

C5 usa reglas C4 y alimenta C6. Búsqueda Cognitiva puede ampliar candidatos, pero no convertir ausencia en factibilidad.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Se distinguen vacío demostrado y recuperación incompleta.
- No se usan objetivos blandos para podar.
- La traza permite revertir errores.
