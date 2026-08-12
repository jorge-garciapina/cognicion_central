# Modelo de comandos

## Unidad humana de intervención

En esta arquitectura, todo prompt humano es el portador lingüístico de uno o más comandos.

```text
PROMPT
= expresión lingüística introducida por el humano.

COMANDO
= interpretación funcional de esa expresión dentro del estado.
```

Un comando puede adoptar la forma lingüística de:

- pregunta;
- orden;
- corrección;
- aprobación;
- rechazo;
- declaración;
- hipótesis;
- restricción;
- solicitud de representación;
- indicación de persistencia.

La forma gramatical no determina por sí sola la función arquitectónica.

## Dimensiones

```yaml
command_dimensions:
  operation: WHAT_MUST_HAPPEN
  targets: WHAT_IS_AFFECTED
  scope: HOW_FAR_EFFECTS_APPLY
  authority: WHO_AUTHORIZES
  payload: WHAT_CONTENT_IS_SUPPLIED
  constraints: WHAT_MUST_NOT_HAPPEN
  expected_result: WHAT_COUNTS_AS_RESPONSE
  persistence: WHERE_EFFECTS_MAY_REMAIN
  validation: HOW_ACCEPTANCE_IS_DECIDED
```

## Operaciones básicas

| Operación | Función |
|---|---|
| `QUERY` | Recuperar o construir una respuesta sin asumir cambio persistente. |
| `DEFINE` | Introducir una definición candidata o vigente. |
| `CORRECT` | Modificar una interpretación o estructura. |
| `REPLACE` | Sustituir una versión o formulación. |
| `RESTRICT` | Añadir una prohibición o límite. |
| `ACTIVATE` | Habilitar una estructura, función o regla. |
| `DEACTIVATE` | Deshabilitarla dentro de un alcance. |
| `APPROVE` | Autorizar una propuesta o transición. |
| `REJECT` | Impedir su incorporación o ejecución. |
| `PROJECT` | Solicitar una manifestación del estado. |
| `PERSIST` | Solicitar escritura en un destino. |
| `STOP` | Detener una operación o flujo. |

Las aplicaciones pueden definir operaciones especializadas conservando estas dimensiones.

## Alcances

```yaml
scope_levels:
  - NODE
  - RELATION
  - SECTION
  - SUBGRAPH
  - OUTPUT
  - TASK
  - CHAT
  - PROJECT
  - GLOBAL
```

`LOCAL` y `GLOBAL` no son clases de comentario: son valores del alcance de un comando.

## Esquema normalizado

```yaml
command:
  id:
  timestamp:

  authority:
    actor: HUMAN
    level: SOVEREIGN_WITHIN_PLATFORM_LIMITS

  carrier:
    type: PROMPT
    raw_content:

  interpretation:
    operations: []
    expected_results: []
    confidence:
    ambiguity:

  scope:
    level:
    targets: []
    exclusions: []

  context:
    active_goal:
    state_reference:
    sources: []
    structures: []

  effects:
    expected: []
    prohibited: []

  persistence:
    requested: false
    destination:

  validation:
    validators: []
    human_confirmation_required: false

  execution:
    status: REGISTERED
    backend_adapter:
    capabilities_used: []

  trace:
    previous_state:
    resulting_state:
    outputs: []
```

## Un prompt con varios comandos

```text
“Corrige la definición, conserva el ejemplo y genera un snapshot sin persistirlo.”
```

Debe poder descomponerse así:

```yaml
commands:
  - operation: CORRECT
    target: DEFINITION
  - operation: PRESERVE
    target: EXAMPLE
  - operation: PROJECT
    target: CURRENT_STATE
    representation: SNAPSHOT
    persistence: EPHEMERAL
```

La normalización no debe borrar la relación entre los comandos ni el orden requerido.

## Ambigüedad

El sistema puede continuar sin preguntar cuando la interpretación es reversible, de bajo riesgo y no produce rutas materialmente diferentes. Debe detenerse o pedir resolución cuando:

- el objetivo no es identificable;
- existen varios destinos persistentes plausibles;
- se afectaría una versión canónica;
- la operación es destructiva;
- dos interpretaciones producen resultados incompatibles;
- falta autoridad para ejecutar.

