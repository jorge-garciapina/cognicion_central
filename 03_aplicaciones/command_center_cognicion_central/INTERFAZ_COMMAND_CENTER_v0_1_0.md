# INTERFAZ COMMAND CENTER — ESPECIFICACIÓN HMI

**Versión:** `0.1.0`  
**Estado:** `DISEÑO MATERIALIZABLE`

## Propósito

Definir la futura interfaz visual que opere el mismo contrato de comandos que hoy puede ejecutarse mediante chat.

La HMI no crea una segunda semántica. Debe construir exactamente el mismo `CommandEnvelope` que produce el lenguaje natural.

## Paneles mínimos

### 1. Estado del sistema

Mostrar:

- versión canónica;
- autoridad;
- modo Command Center;
- runtime activo;
- capacidades disponibles;
- estado de persistencia;
- alertas.

### 2. Command Composer

Campos sugeridos:

```text
VERB
TARGET
OBJECTIVE
SCOPE
CONTEXT
CONSTRAINTS
EXPECTED OUTPUT
PERSISTENCE
```

Debe coexistir con una caja de lenguaje natural.

### 3. Command Preview

Antes de operaciones de riesgo:

```text
PROMPT ORIGINAL
↓
COMANDO NORMALIZADO
↓
CAMBIOS INFERIDOS
↓
RIESGO
↓
AUTORIZACIÓN
```

### 4. Plan

Vista secuencial o grafo:

```text
resolve target
→ load governance
→ resolve dependencies
→ select capabilities
→ execute
→ validate
→ stop / persist
```

### 5. Execution Trace

Debe permitir observar:

- stage actual;
- entradas consumidas;
- outputs parciales;
- herramientas invocadas;
- validaciones;
- bloqueos;
- time stamps cuando existan.

### 6. Resultados

Separar visualmente:

```text
RESULTADO
EVIDENCIA
ARTEFACTOS
PROPUESTAS
CAMBIOS PERSISTIDOS
```

### 7. Human Gate

Acciones:

```text
APROBAR
RECHAZAR
MODIFICAR
PAUSAR
CANCELAR
REINTENTAR
MATERIALIZAR
```

## Dos vías de entrada

```text
LENGUAJE NATURAL ─┐
                  ├→ COMMAND NORMALIZER → CommandEnvelope
CONTROLES HMI ────┘
```

## Reglas de UX

- no mostrar complejidad innecesaria en R0-R1;
- no ocultar alcance y persistencia en R3-R5;
- colores de riesgo son secundarios al texto explícito;
- siempre permitir inspeccionar el prompt original;
- toda inferencia visible en modo DEV debe marcarse como inferida;
- la interfaz no debe presentar `OUTPUT://` como si fuera `CC://`;
- deshabilitar visualmente acciones que el runtime no puede ejecutar.

## Realizaciones futuras compatibles

- React + Node.js;
- ChatGPT App / MCP App;
- aplicación local conectada a NAS;
- panel web para DGX/runtime local;
- interfaz híbrida ChatGPT + herramientas propias.

Todas deben conservar el mismo protocolo de comandos.
