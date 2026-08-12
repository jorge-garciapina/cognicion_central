# Estado e integración acumulativa

## Estado cognitivo local

El estado no es la conversación completa. Es la organización vigente necesaria para continuar operando.

```yaml
cognitive_state:
  id:
  version:
  current_goal:

  authority:
    human:
    canonical_sources: []

  structures:
    active: []
    available: []
    superseded: []

  commands:
    active: []
    executed: []
    pending: []
    rejected: []
    superseded: []

  sources: []
  decisions: []
  constraints: []
  open_questions: []
  tasks: []
  generated_artifacts: []
  runtime_bindings: []
  traces: []
```

## Dependencia PIEA

Este paquete adopta como dependencia el `PATRÓN_DE_INTEGRACIÓN_ESTRUCTURAL_ACUMULATIVA` versión `0.2.0`. No redefine su núcleo.

La transición se expresa mediante:

\[
S_{t+1}=\mathcal{I}_{\kappa_t}(S_t,u_t)
\]

Donde:

- \(S_t\) es el estado estructural anterior;
- \(u_t\) es el aporte situado que debe integrarse;
- \(\kappa_t\) es el contexto de integración;
- \(\mathcal{I}\) es el mecanismo de integración;
- \(S_{t+1}\) es el estado reorganizado.

En esta aplicación, un comando humano puede ocupar el lugar de \(u_t\), pero el patrón no queda limitado a comandos: también puede integrar resultados clasificados, decisiones o cambios de contexto.

## Doble integración del ciclo

```text
ESTADO INICIAL
→ integración del comando
→ estado de trabajo
→ ejecución mediada
→ resultado clasificado
→ integración autorizada del resultado
→ estado actualizado
```

Formalmente:

\[
S_{t+\frac{1}{2}}=\mathcal{I}_{\kappa_t}(S_t,C_t)
\]

\[
R_t=\mathcal{E}_{A_t}(S_{t+\frac{1}{2}})
\]

\[
S_{t+1}=\mathcal{I}_{\kappa'_t}(S_{t+\frac{1}{2}},\widehat{R}_t)
\]

Donde:

- \(C_t\) es el comando normalizado;
- \(A_t\) es el adaptador y plan de ejecución;
- \(R_t\) es el resultado bruto;
- \(\widehat{R}_t\) es el resultado clasificado y validado.

El resultado bruto nunca se integra directamente por defecto.

## Tipos de efecto

Un comando puede:

- consultar sin modificar estructuras persistentes;
- activar temporalmente un subgrafo;
- introducir una restricción;
- sustituir una versión;
- abrir o cerrar una pregunta;
- aprobar una propuesta;
- producir una manifestación efímera;
- modificar un nodo;
- afectar todas las operaciones futuras dentro de un alcance;
- solicitar persistencia;
- quedar pendiente.

## Contexto de integración

```yaml
integration_context:
  human_authority:
  active_goal:
  command_scope:
  relevant_subgraph:
  governing_sources: []
  current_constraints: []
  dependencies: []
  runtime_capabilities: []
  unresolved_conflicts: []
  persistence_policy:
```

## Reglas

1. La integración reorganiza; no concatena indiscriminadamente.
2. Una versión sustituida permanece en historial, no en autoridad operativa.
3. Un snapshot es una vista del estado, no el estado mismo.
4. Un archivo es un portador, no memoria operativa automática.
5. Una propuesta no equivale a implementación.
6. La acumulación preserva relaciones relevantes y descarta redundancias operativas cuando la autoridad lo permite.

