# Snapshots y proyecciones

## Definición

Un snapshot es una manifestación parcial, selectiva, corregible e inspeccionable del estado cognitivo local.

```text
SNAPSHOT ≠ ESTADO COMPLETO
SNAPSHOT ≠ BACKEND
SNAPSHOT ≠ TRANSCRIPCIÓN
SNAPSHOT ≠ PERSISTENCIA AUTOMÁTICA
```

## Producción distribuida

```text
Backend
→ recupera y organiza datos necesarios.

Arquitectura local
→ determina vigencia, alcance y autoridad.

Frontend
→ selecciona la forma comprensible.

Snapshot
→ manifiesta una vista para inspección humana.
```

## Esquema

```yaml
snapshot:
  id:
  generated_at:
  state_reference:
  scope:
  purpose:
  resolution:

  current_goal:
  active_structures: []
  active_sources: []

  human_commands:
    active: []
    executed: []
    pending: []
    superseded: []

  constraints: []
  open_questions: []
  approved_decisions: []
  pending_tasks: []
  generated_artifacts: []

  epistemic_state:
  validation_state:
  persistence_state:

  omissions: []
  available_actions: []
```

## Tipos básicos

### Snapshot de orientación

Muestra objetivo, estado, restricciones y siguiente decisión.

### Snapshot estructural

Muestra nodos, relaciones, dependencias, versiones y fuentes.

### Snapshot operativo

Muestra comandos, tareas, ejecución, errores y componentes activos.

### Snapshot de auditoría

Muestra trazas, procedencia, validadores, sustituciones y persistencia.

## Selección de representación

| Necesidad | Representación recomendada |
|---|---|
| Relaciones entre componentes | Grafo |
| Comparación exacta | Tabla |
| Jerarquía | Árbol |
| Cambio temporal | Línea de tiempo |
| Comprensión introductoria | Explicación narrativa |
| Decisiones y tareas | Panel |
| Entrega estable | Documento o artefacto |

## Comandos sobre snapshots

El humano puede:

- cambiar el alcance;
- aumentar o reducir la resolución;
- seleccionar un nodo;
- ocultar versiones sustituidas;
- mostrar procedencia;
- pedir otra manifestación;
- corregir una relación;
- aprobar o rechazar un cambio;
- solicitar persistencia.

Cada intervención se convierte en un nuevo comando situado.

