# Ejemplo 3 — Directiva de alcance global

## Prompt

```text
La interacción humano–IA no se limita al lenguaje. Puede utilizar grafos,
imágenes, snapshots y otras manifestaciones.
```

## Normalización

```yaml
command:
  id: CMD-EX-003
  authority: HUMAN
  carrier: PROMPT
  operation: DEFINE_INTERACTION_POLICY
  scope:
    level: GLOBAL
    domain: HUMAN_AI_INTERACTION_ARCHITECTURE
  payload:
    rule: ENABLE_MULTIMODAL_MANIFESTATIONS
  applies_to:
    - FRONTEND_PROJECTIONS
    - OUTPUT_SELECTION
    - SNAPSHOT_GENERATION
    - INTERACTION_CONTROLS
  persistence:
    requested: CHAT_STATE
```

## Integración

La directiva se registra como regla transversal dentro del dominio indicado. No obliga a utilizar imágenes o grafos en todas las respuestas. Autoriza al frontend y al backend a seleccionarlos cuando sean útiles y estén disponibles.

## Organización del backend

```yaml
component_policy_update:
  GENERATORS:
    allowed:
      - TEXT_GENERATOR
      - GRAPH_GENERATOR
      - IMAGE_GENERATOR
      - TABLE_GENERATOR
      - DOCUMENT_GENERATOR
  ROUTER:
    selection_criterion: COGNITIVE_UTILITY
  HOST_ADAPTER:
    requirement: VERIFY_CAPABILITY_BEFORE_USE
```

## Efecto sobre el frontend

El frontend puede proyectar el mismo estado mediante diferentes manifestaciones según el propósito:

- texto para explicación;
- grafo para relaciones;
- tabla para comparación;
- imagen para una manifestación perceptiva no exacta;
- documento para una entrega estable.

## Límites

- La directiva no crea capacidades ausentes.
- No elimina la necesidad de elegir una representación adecuada.
- No autoriza persistencia automática.
- No convierte cada salida en multimodal obligatoria.

