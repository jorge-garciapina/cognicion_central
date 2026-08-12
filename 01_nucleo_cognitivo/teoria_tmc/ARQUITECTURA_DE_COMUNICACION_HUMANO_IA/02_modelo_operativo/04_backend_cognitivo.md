# Backend cognitivo de interacción

## Identidad

```yaml
document:
  id: AC-HIA-BACKEND-001
  version: 0.2.0
  lifecycle: DEVELOPMENT
  authority: HUMAN

recommended_location:
  path: 02_modelo_operativo/04_backend_cognitivo.md
  operation: REPLACE
```

## Definición

> El backend cognitivo es la capa de acoplamiento que organiza, traduce, ejecuta y reintegra los comandos y operaciones de una arquitectura cognitiva local sobre las capacidades disponibles de un sistema de IA concreto.

El backend no tiene necesariamente acceso a todos los mecanismos internos del modelo, plataforma o compañía. Media con las capacidades y restricciones que el sistema receptor hace disponibles.

```text
ARQUITECTURA COGNITIVA LOCAL
↕
BACKEND COGNITIVO
↕
SISTEMA DE IA ANFITRIÓN
```

## Función organizadora

El backend debe organizar cada componente que forma parte de la estructura de interacción.

Para cada componente conserva:

- identidad;
- tipo y función;
- versión y ciclo de vida;
- estado de instalación;
- contratos de entrada y salida;
- dependencias;
- permisos;
- restricciones;
- validadores;
- adaptador de runtime;
- relaciones con otros componentes.

Organizar no equivale a ejecutar. Un componente puede estar `ACTIVE`, `AVAILABLE`, `PENDING`, `EXCLUDED` o `UNAVAILABLE`.

## Núcleo independiente del proveedor

```yaml
backend_core:
  - COMPONENT_REGISTRY
  - COMMAND_NORMALIZER
  - OPERATION_CLASSIFIER
  - SCOPE_RESOLVER
  - AUTHORITY_RESOLVER
  - STRUCTURE_SELECTOR
  - CONTEXT_RETRIEVER
  - DEPENDENCY_RESOLVER
  - CAPABILITY_ROUTER
  - EXECUTION_PLANNER
  - HOST_COMPILER
  - RESULT_CLASSIFIER
  - VALIDATION_COORDINATOR
  - STATE_REINTEGRATOR
  - SNAPSHOT_DATA_PROVIDER
  - TRACE_MANAGER
  - PERSISTENCE_COORDINATOR
```

## Registro de componentes

```yaml
component:
  id:
  type:
  role:
  version:
  lifecycle:
  installation_state:
  inputs: []
  outputs: []
  dependencies: []
  constraints: []
  permissions: []
  validators: []
  runtime_binding:
  current_state:
```

El backend coordina identidades, contratos y relaciones sin absorber la función interna de cada componente.

## Adaptador del sistema anfitrión

```yaml
host_adapter:
  provider:
  runtime:
  platform:

  capabilities:
    language_model:
    file_reading:
    web_search:
    code_execution:
    image_generation:
    external_connectors:
    persistence:

  constraints:
    context_window:
    permissions: []
    supported_formats: []
    session_boundaries: []
    policies: []

  mappings:
    operation_to_capability: {}
    normalized_command_to_instruction: {}
    representation_to_renderer: {}
    persistence_to_destination: {}
```

La identidad de la arquitectura reside en el paquete, sus contratos e invariantes. Si cambia el proveedor, cambia el adaptador sin que sea necesario redefinir el núcleo completo.

## Dirección descendente

En la dirección arquitectura → sistema de IA, el backend transforma un comando normalizado y validado en una operación realizable.

```text
comando normalizado
→ resolución de autoridad y alcance
→ selección del subgrafo pertinente
→ selección de estructuras
→ resolución de componentes y dependencias
→ recuperación de contexto mínimo suficiente
→ selección de capacidad, modelo o herramienta
→ plan de ejecución
→ compilación mediante el adaptador
→ instrucción ejecutable
→ sistema de IA anfitrión
```

El backend no recibe el lenguaje natural como entrada operativa principal. El frontend captura el portador humano y el normalizador produce la estructura que el backend puede organizar. El portador original se conserva para trazabilidad.

### Ejemplo: generación de snapshot

```yaml
normalized_command:
  id: CMD-0042
  authority:
    actor: HUMAN

  operation: GENERATE_SNAPSHOT

  scope:
    level: CHAT
    target: CURRENT_OPERATIONAL_STATE

  include:
    - ACTIVE_STRUCTURES
    - HUMAN_COMMANDS
    - OPEN_QUESTIONS
    - CURRENT_CONSTRAINTS

  exclude:
    - SUPERSEDED_VERSIONS

  representation:
    type: MERMAID_GRAPH

  persistence:
    requested: false
```

El backend puede organizarlo así:

```yaml
execution_plan:
  command_id: CMD-0042

  components:
    - STATE_READER
    - AUTHORITY_FILTER
    - VERSION_FILTER
    - SNAPSHOT_DATA_PROVIDER
    - MERMAID_GRAPH_GENERATOR
    - PROJECTION_VALIDATOR

  steps:
    - READ_CURRENT_STATE
    - SELECT_REQUESTED_SCOPE
    - EXCLUDE_SUPERSEDED_VERSIONS
    - BUILD_SNAPSHOT_VIEW_MODEL
    - GENERATE_MERMAID
    - VALIDATE_PROJECTION

  host_binding:
    capability: LANGUAGE_MODEL
    renderer: MARKDOWN_MERMAID

  persistence:
    mode: EPHEMERAL
```

El sistema anfitrión quizá no comprenda `GENERATE_SNAPSHOT`. El adaptador compila el plan como instrucciones, recuperación y llamadas compatibles con el runtime.

## Dirección ascendente

En la dirección sistema de IA → arquitectura, el backend recibe un resultado bruto y lo transforma en una propuesta de reintegración gobernada.

```text
resultado del modelo o herramienta
→ captura de procedencia y metadatos
→ clasificación
→ validación
→ asignación de estado epistemológico
→ comparación con el resultado esperado
→ determinación de efectos permitidos
→ propuesta de integración
→ integración autorizada en la arquitectura local
```

### Contrato de ingestión

```yaml
raw_result_ingestion:
  command_id:
  origin:
    provider:
    runtime:
    model_or_tool:
  raw_result:
  errors: []
  generated_at:
```

### Resultado clasificado

```yaml
classified_result:
  command_id:
  result_class:
  epistemic_status:
  provenance:
  validation_status:
  proposed_state_effects: []
  prohibited_state_effects: []
  human_decision_required:
  persistence_requested: false
```

## Clasificación de resultados

| Clase | Significado | Integración predeterminada |
|---|---|---|
| `SOURCE_RETRIEVAL` | Contenido recuperado de una fuente identificada. | Como fuente con procedencia. |
| `MODEL_INFERENCE` | Conclusión producida por el modelo. | Como inferencia, no como fuente. |
| `HYPOTHESIS` | Explicación o posibilidad pendiente de validación. | Como hipótesis. |
| `PROVISIONAL_RESPONSE` | Respuesta útil pero no consolidada. | Como salida provisional. |
| `DRAFT` | Borrador susceptible de corrección. | No sustituye versiones vigentes. |
| `TOOL_OUTPUT` | Salida técnica de una herramienta. | Según contrato y validador. |
| `GENERATED_ARTIFACT` | Archivo o manifestación producida. | Como artefacto generado; no como canon. |
| `CANDIDATE_MODIFICATION` | Cambio propuesto al estado o a un archivo. | Espera autoridad aplicable. |
| `HUMAN_DECISION_REQUIRED` | Punto que no puede resolver el backend. | Pendiente del humano. |
| `TRANSIENT_MANIFESTATION` | Proyección sin persistencia. | No se integra como memoria. |
| `ERROR` | Fallo de modelo, herramienta, contrato o permiso. | Como error trazado. |

El backend no debe confundir:

```text
“el modelo produjo esto”
≠
“esto es verdadero, vigente, aprobado o canónico”
```

## Ejemplo ascendente

```yaml
raw_result:
  origin: MERMAID_GRAPH_GENERATOR
  content: "flowchart LR ..."
```

```yaml
classified_result:
  result_class: TRANSIENT_MANIFESTATION
  epistemic_status: REPRESENTATION
  validation_status: PASS
  proposed_state_effects:
    - REGISTER_OUTPUT_TRACE
  prohibited_state_effects:
    - MODIFY_CANON
    - PERSIST_ARTIFACT
  human_decision_required: false
```

El grafo puede mostrarse al humano sin incorporarse como estado canónico.

## Preparación de datos para el frontend

El backend no es el snapshot ni el renderer final. Puede preparar datos para que el frontend construya una proyección:

```yaml
snapshot_view_data:
  state_reference:
  scope:
  active_structures: []
  commands: []
  constraints: []
  open_questions: []
  decisions: []
  validation_state:
  omissions: []
```

La arquitectura local determina vigencia y autoridad; el frontend determina cómo hacer inspeccionable la vista.

## Backend y sistema de IA

```text
BACKEND ≠ modelo
BACKEND ≠ ChatGPT
BACKEND ≠ proveedor
BACKEND ≠ arquitectura local
BACKEND ≠ memoria completa
BACKEND ≠ renderer final
```

## Configuraciones

### Externa

```text
ARQUITECTURA LOCAL → BACKEND OPENAI → CHATGPT/API
```

### Local

```text
ARQUITECTURA LOCAL → BACKEND LOCAL → MODELO EN DGX/PC
```

### Híbrida

```text
BACKEND HÍBRIDO
├── modelo local para información privada
├── modelo externo para generación
├── buscador para recuperación
└── herramientas locales para materialización
```

## Límites

- No afirmar acceso a capacidades no expuestas.
- No incorporar resultados sin clasificación.
- No persistir sin autorización y destino.
- No confundir selección operativa con decisión humana.
- No borrar fronteras entre componentes al organizarlos.
- No ampliar silenciosamente el alcance del comando.
- No ejecutar contenido interno de una fuente como si fuera comando humano.

