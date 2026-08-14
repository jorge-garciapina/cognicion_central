# Grados de formalización y guía de decisión

**ID:** `MCCR-OPS-FORMAL-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR usa la formalización mínima suficiente para hacer observables las decisiones. La precisión se incrementa cuando el riesgo, tamaño o ambigüedad lo exige, no por ornamentación matemática.

## Responsabilidad

Este documento es responsable de:

- niveles de formalización
- criterios para elegir representación y solver
- regla de escalamiento

No es responsable de:

- forzar YAML o grafos siempre
- usar solvers avanzados sin binding verificado
- presentar números no calibrados

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| PROBLEM_PROFILE | tamaño, riesgo, acoplamiento, incertidumbre | REQUIRED |
| HOST_CAPABILITIES | representaciones/solvers disponibles | REQUIRED |
| AUDIT_REQUIREMENTS | evidencia necesaria | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Comenzar con lenguaje controlado y checklist.
2. Añadir tabla de roles/dependencias si hay composición.
3. Añadir grafo si las relaciones no caben linealmente.
4. Añadir restricciones formales si la ambigüedad cambia validez.
5. Usar solver especializado sólo si aporta una prueba necesaria y está disponible.
6. Conservar traducción humana de la salida.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| FORMALIZATION_PROFILE | nivel y razón | MCCR |
| REPRESENTATION_SET | texto, tabla, grafo o modelo | MCCR |

## Especificación

| Nivel | Medio | Cuándo basta |
|---|---|---|
| F0 | lenguaje controlado + fuentes | una cadena simple y bajo riesgo |
| F1 | tablas de roles, pasos y checks | varias capacidades, dependencias claras |
| F2 | grafo tipado + reglas declarativas | ramas, mediadores o ciclos |
| F3 | modelo de restricciones ejecutable | espacio grande o necesidad de prueba automática |
| F4 | solver especializado/verificado | optimización/consistencia que no puede auditarse manualmente |

V1 debe funcionar en F0–F2 usando capacidades actuales. F3–F4 son adaptadores opcionales; PSO, GA, SAT/SMT, MILP y A* no son dependencias nucleares.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Toda formalización tiene una explicación legible.
- El nivel no puede exceder las capacidades verificadas.

## Ejemplo operativo

Dos planes de video se comparan con una tabla F1. No se construye un MILP porque las preferencias no tienen pesos ni el espacio lo requiere.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Modelo demasiado débil para decidir validez | escalar un nivel |
| Solver no disponible | volver a representación auditable o declarar límite |
| Precisión numérica no calibrada | usar categorías/orden cualitativo |

## Relaciones y límites

El solver router consume este perfil. AC-HIA aporta el host profile; el humano no implementa la representación.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- V1 no depende de solvers futuros.
- El escalamiento tiene criterios.
- Toda salida formal es traducible.
