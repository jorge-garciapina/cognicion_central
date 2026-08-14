# Grafos posible, disponible y activo

**ID:** `MCCR-CORE-GRAPHS-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR reduce progresivamente un universo de posibilidades a un subgrafo mínimo ejecutable. Cada reducción conserva la razón de inclusión y exclusión.

## Responsabilidad

Este documento es responsable de:

- semántica de `G_possible`, `G_available` y `G_active`
- operadores de reducción
- procedencia de nodos y aristas

No es responsable de:

- exigir una base de grafos implementada
- tratar coincidencia semántica como compatibilidad
- confundir activo con ejecutado

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| STRUCTURE_CANDIDATES | Registro/Búsqueda/fuentes | REQUIRED |
| HOST_PROFILE | disponibilidad y permisos | REQUIRED |
| MCCR_REQUEST | roles y restricciones | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Construir `G_possible` con identidades y dependencias conocidas.
2. Filtrar localización, versión, compatibilidad, permisos y capacidad para `G_available(t)`.
3. Seleccionar el corte mínimo que cubre roles y validadores para `G_active(Q_t)`.
4. Registrar nodos/aristas excluidos y motivos.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| G_POSSIBLE | posibilidades conocidas | MCCR |
| G_AVAILABLE | posibilidades utilizables ahora | MCCR |
| G_ACTIVE | subgrafo del candidato/plan | MCCR |

## Especificación

Tipos mínimos de nodo: estructura cognitiva, cApp, componente, capacidad del host, fuente, validador, gate y artefacto. Tipos mínimos de arista: `requires`, `produces`, `accepts`, `validates`, `binds_to`, `forbidden_with`, `supersedes` y `derived_from`.

```text
G_possible = identidades y relaciones conocidas
G_available(t) = nodos/aristas posibles que están accesibles, compatibles y permitidos en t
G_active(Q_t) = corte seleccionado para cumplir la solicitud Q_t
```

Estas expresiones no presuponen algoritmo ni puntaje. Una tabla de adyacencia o una lista trazada es suficiente en v1.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Todo nodo activo pertenece al disponible.
- Todo nodo disponible pertenece al posible o registra una extensión autorizada.

## Ejemplo operativo

El generador de imagen figura en `G_possible`; el host actual no lo expone y queda fuera de `G_available`. El adaptador ACCD textual sí está disponible y entra en `G_active` si el objetivo acepta guion.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Nodo sin identidad/procedencia | mantener como candidato no activable |
| Arista de tipos incompatible | podar |
| Dependencia activa excluida | configuración incompleta |

## Relaciones y límites

El Registro aporta identidades; Búsqueda genera candidatos; MTC aporta la idea de subgrafo de trabajo; MCCR aplica la reducción situada.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Las tres capas no se colapsan.
- Cada exclusión tiene motivo.
- La representación puede ejecutarse sin infraestructura de grafo.
