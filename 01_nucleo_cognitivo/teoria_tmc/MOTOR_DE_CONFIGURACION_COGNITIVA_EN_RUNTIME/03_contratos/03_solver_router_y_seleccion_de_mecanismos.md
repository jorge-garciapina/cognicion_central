# Solver router y selección de mecanismos

**ID:** `MCCR-CON-SOLVER-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

El solver router elige el mecanismo mínimo suficiente según tipo de problema y capacidades reales. MCCR no es sinónimo de un algoritmo y no depende de solvers futuros.

## Responsabilidad

Este documento es responsable de:

- clasificación del problema
- selección y combinación de mecanismos
- fallbacks y evidencia del routing

No es responsable de:

- descargar o activar herramientas sin autorización
- atribuir completitud a una heurística
- usar algoritmos avanzados como decoración

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| PROBLEM_PROFILE | tamaño, tipos, restricciones | REQUIRED |
| FORMALIZATION_PROFILE | F0–F4 | REQUIRED |
| HOST_PROFILE | mecanismos disponibles | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Clasificar si predomina recuperación, grafo, reglas, composición o optimización.
2. Elegir mecanismos disponibles.
3. Asignar generación y validación a roles separados.
4. Definir stop conditions y fallback.
5. Registrar garantías reales y límites.
6. Ejecutar la ruta dentro del proceso C5–C9.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| SOLVER_ROUTE | mecanismos, roles y orden | MCCR |
| SOLVER_LIMITS | garantías/no garantías | MCCR |

## Especificación

Ruta base v1:

```text
LLM estructurado: interpreta y genera candidatos
listas/grafo simple: dependencias y composición
reglas/checklists: poda y hard validation
validadores de dominio: pertenencia y resultado
comparación ordinal: soft objectives
```

Adaptadores opcionales: búsqueda de grafo/A*, SAT/SMT, CSP, MILP, PSO, GA u otros. Sólo se usan si están disponibles, su entrada está bien definida y su salida puede auditarse. Una heurística produce candidatos; no sustituye validación.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- El router declara qué garantías no ofrece.
- Una técnica externa no amplía permisos.

## Ejemplo operativo

Para dos cadenas ACCD basta ruta base. Para cientos de combinaciones con restricciones discretas podría usarse SAT si existe un binding verificado; de lo contrario se reduce el espacio y se documenta cobertura parcial.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Mecanismo ausente | fallback o límite explícito |
| Salida opaca sin prueba | tratar como candidato, no veredicto |
| Espacio no cubierto exhaustivamente | no afirmar óptimo global |

## Relaciones y límites

El router es un componente lógico MCCR llamado por el backend; no sustituye al capability router de AC-HIA, que determina disponibilidad.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- La ruta base funciona con capacidades actuales.
- Los opcionales están desacoplados.
- Las garantías son explícitas.
