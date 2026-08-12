# Frontend cognitivo de interacción

## Definición

El frontend cognitivo media entre el humano y la arquitectura cognitiva local.

```text
HUMANO ↔ FRONTEND COGNITIVO ↔ ARQUITECTURA LOCAL
```

No es sólo una salida visual. Es una superficie bidireccional de inspección, navegación, comando y validación.

## Dirección arquitectura → humano

El frontend proyecta:

- estado actual;
- objetivos y tareas;
- estructuras activas;
- relaciones;
- versiones y cambios;
- fuentes y procedencia;
- preguntas abiertas;
- comandos activos o pendientes;
- resultados que requieren validación;
- conflictos;
- capacidades disponibles.

## Dirección humano → arquitectura

El frontend captura:

- prompts;
- selección de nodos;
- cambios de alcance;
- correcciones;
- aprobaciones;
- rechazos;
- activaciones;
- solicitudes de representación;
- órdenes de persistencia;
- cambios de objetivo;
- interrupciones.

## Manifestaciones

```yaml
frontend_projections:
  - SNAPSHOT
  - COGNITIVE_GRAPH
  - TABLE
  - TREE
  - TIMELINE
  - NARRATIVE_EXPLANATION
  - TASK_PANEL
  - VERSION_HISTORY
  - COMMAND_MAP
  - DOCUMENT
  - IMAGE
  - INTERACTIVE_INTERFACE
```

La representación se selecciona por utilidad cognitiva, no por decoración.

## Grafo de entendimiento

Un grafo visible puede funcionar como snapshot navegable:

- cada nodo representa una unidad relevante;
- cada arista declara una relación;
- el color, posición o agrupación pueden manifestar estado;
- el humano puede seleccionar un nodo y emitir un comando situado;
- el grafo guía la atención sin agotar el estado completo.

## Contrato de proyección

```yaml
projection_request:
  source_state:
  scope:
  audience:
  purpose:
  representation:
  resolution:
  include: []
  exclude: []
  provenance_visibility:
  interaction_controls: []
  persistence: EPHEMERAL
```

## Resolución variable

El mismo estado puede proyectarse en varios niveles:

| Resolución | Contenido |
|---|---|
| Compacta | objetivo, estado, siguiente decisión |
| Operativa | comandos, tareas, restricciones, resultados |
| Estructural | nodos, relaciones, versiones y dependencias |
| Auditoría | trazas, procedencia, validadores y cambios |

## Límite

El frontend no decide por sí solo qué es verdadero o canónico. Hace inspeccionable la organización determinada por la arquitectura local y captura la intervención humana.

La antigua terminología en la que “frontend cognitivo” significaba analizador de fuentes queda fuera de este nivel. Esa capacidad debe denominarse `ANALIZADOR_COGNITIVO` y puede ser invocada por el backend.

