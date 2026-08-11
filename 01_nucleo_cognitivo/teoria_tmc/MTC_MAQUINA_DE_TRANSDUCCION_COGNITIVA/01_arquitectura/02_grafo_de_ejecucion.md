# Grafo de ejecución

```mermaid
flowchart TD
    H["Comando humano + realización"] --> P0["F00 · Preflight"]
    P0 -->|contratos disponibles| P1["F01 · Solicitar vista MTC"]
    P0 -->|falta contrato| B0["Bloquear y reportar"]
    P1 --> MTC["MTC · Cognición local"]
    MTC --> P2["F02 · Validar recepción"]
    P2 -->|insuficiente| RQ["Solicitud de ampliación a MTC"]
    RQ --> MTC
    P2 -->|suficiente| P3["F03 · Mapa de derivación"]
    P3 --> P4["F04 · Núcleo y mecanismos"]
    P4 --> P5["F05 · Obligaciones de preservación"]
    P5 --> P6["F06 · Ideas candidatas"]
    P6 --> P7["F07 · Filtrar y fusionar"]
    P7 --> P8["F08 · Grafo de ideas"]
    P8 --> P9["F09 · Roles"]
    P9 --> P10["F10 · Pesos"]
    P10 --> P11["F11 · Presencia"]
    P11 --> P12["F12 · Seguridad epistemológica"]
    P12 --> P13["F13 · Serializar ACCD"]
    P13 --> P14["F14 · Validación reconstructiva"]
    P14 -->|falla reparable| P6
    P14 -->|falla de entrada| RQ
    P14 -->|válido| P15["F15 · Emitir"]
    P15 --> CC["construccion_conceptual"]
    P15 --> TS["sidecar de trazabilidad"]
    P15 --> VR["informe de validación"]
    CC --> ACCD["ACCD · realización posterior"]
```

## Flujo de información

```text
REALIZACIÓN
  ↓
PETICIÓN COGNITIVA
  ↓
MTC_INSTANCE + TRACE + EPISTEMIC STATUS
  ↓
MAPA_DE_DERIVACIÓN_CONCEPTUAL
  ├─ claims seleccionables
  ├─ mecanismos reconstructibles
  ├─ distinciones protegidas
  ├─ descartes candidatos
  └─ huecos
  ↓
GRAFO_DE_IDEAS_CANDIDATAS
  ↓
CLASIFICACIÓN ACCD
  ├─ formulación
  ├─ rol
  ├─ peso
  ├─ presencia
  └─ relaciones
  ↓
CONSTRUCCION_CONCEPTUAL + SIDECAR
```

## Bucles permitidos

Sólo existen dos retornos:

1. `entrada insuficiente → MTC`: solicita información que la cognición local puede producir.
2. `pérdida reconstructiva → ideas candidatas`: corrige selección o formulación.

El adaptador no retorna hacia ACCD para pedir decisiones audiovisuales y no modifica MTC para hacer coincidir la salida.

