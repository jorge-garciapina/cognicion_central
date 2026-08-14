# Referencias externas y antecedentes

**ID:** `MCCR-REF-EXTERNAL-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR reconoce familias técnicas externas como antecedentes posibles, pero v0.1.0 no incorpora una fuente externa como autoridad normativa ni depende de un algoritmo externo.

## Responsabilidad

Este documento es responsable de:

- separación entre antecedente, analogía y dependencia
- registro de fuentes externas localizadas/no localizadas
- criterio de adopción futura

No es responsable de:

- fabricar bibliografía
- presentar nombres de algoritmos como capacidades disponibles
- transferir licencias/código sin auditoría

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| EXTERNAL_REFERENCE_CANDIDATE | paper, software o estándar | REQUIRED |
| SOURCE_AND_LICENSE | fuente primaria y condiciones | REQUIRED |
| INTERNAL_NEED | rol que podría cumplir | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Identificar la fuente primaria.
2. Verificar identidad, versión, licencia y acceso.
3. Describir correspondencia y ruptura con MCCR.
4. Tratarla como candidata hasta validación.
5. Proponer adaptador opcional.
6. Solicitar autorización antes de instalar o ejecutar.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| EXTERNAL_CROSSWALK | relación y límites | MCCR |
| ADAPTER_PROPOSAL | integración no aplicada | MCCR |
| SOURCE_NOT_FOUND | ausencia explícita | MCCR |

## Especificación

Antecedentes conceptuales no vinculantes: constraint satisfaction, planificación, workflow/orchestration, graph search, multiobjective optimization y replanning. Se mencionan como familias técnicas, no como definiciones fuente del paquete.

Adaptadores opcionales citados por el contexto humano: SAT/SMT, MILP, A*, PSO y algoritmos genéticos. Ninguno está requerido ni verificado en esta versión.

`[AUSENCIA]` No se localizó una definición/fuente estable para “kill-web”. El fixture 09 usa el término sólo como alias histórico para una superficie de descubrimiento y prohíbe atribuirle funciones concretas.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Fuente externa nunca sobreescribe gobierno interno.
- Una analogía declara dónde se rompe.

## Ejemplo operativo

Un solver SAT futuro podría comprobar combinaciones discretas; hasta que exista binding y modelo verificable, la ruta base sigue usando reglas/grafos/LLM y no afirma completitud.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Fuente primaria no localizada | `SOURCE_NOT_FOUND` |
| Licencia/permisos desconocidos | no integrar |
| Analogía convertida en equivalencia | corregir crosswalk |

## Relaciones y límites

El solver router consume adaptadores aceptados. Búsqueda Cognitiva puede descubrir fuentes sólo con alcance autorizado.

## Procedencia

- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- No hay bibliografía inventada.
- Opcionales no son dependencias.
- kill-web conserva etiqueta de ausencia.
