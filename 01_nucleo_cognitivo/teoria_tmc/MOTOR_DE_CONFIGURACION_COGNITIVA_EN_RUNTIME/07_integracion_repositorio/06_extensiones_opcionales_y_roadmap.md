# Extensiones opcionales y roadmap

**ID:** `MCCR-REPO-ROADMAP-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

El roadmap extiende un núcleo funcional sin convertir posibilidades futuras en dependencias actuales. Cada extensión entra por contrato, prueba y decisión humana.

## Responsabilidad

Este documento es responsable de:

- secuencia de maduración
- adaptadores opcionales
- gates de adopción

No es responsable de:

- prometer fechas/capacidades
- posponer la funcionalidad base
- incorporar herramientas sin auditoría

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| V1_REPORT | límites y métricas | REQUIRED |
| NEW_CAPABILITY | propuesta | REQUIRED |
| HUMAN_PRIORITY | orden de adopción | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Medir necesidad real en fixtures.
2. Definir contrato del adaptador.
3. Verificar fuente, licencia, permisos y host.
4. Implementar aislado.
5. Ejecutar regresión y negativos.
6. Promover sólo con aprobación.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| ROADMAP_ITEM | valor, riesgo, dependencia y gate | MCCR |
| ADAPTER_RELEASE | versión opcional verificada | MCCR |

## Especificación

Orden recomendado:

1. estabilizar contratos y resolver ubicación/nombre;
2. formalizar interfaz con Registro y futuro Orquestador;
3. implementar runtime mínimo y adaptador de host;
4. automatizar validadores/grafos y artefactos;
5. añadir métricas de cobertura/estabilidad;
6. evaluar SAT/SMT/MILP/A* para problemas formales;
7. evaluar PSO/GA sólo donde exista función objetivo calibrada;
8. integrar descubrimiento externo seguro;
9. interfaz visual para planes, trazas y replan.

Cada ítem es `OPTIONAL`; ninguno forma parte de los criterios de validez v0.1.0.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Una extensión no puede debilitar el modo base.
- Todo adaptador puede desactivarse sin romper el núcleo.

## Ejemplo operativo

Un adaptador SAT se añade para un fixture grande; si no está disponible, el router vuelve a reglas/grafo y declara límites, sin cambiar el contrato MCCR.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Extensión altera invariantes | rechazar |
| Métrica no calibrada | no optimizarla |
| Dependencia obligatoria accidental | restaurar fallback base |

## Relaciones y límites

Consume OPEN_DECISIONS y resultados de aceptación; no modifica documentos externos.

## Procedencia

- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Las extensiones son opcionales.
- Cada una tiene gate.
- V1 permanece utilizable sin ellas.
