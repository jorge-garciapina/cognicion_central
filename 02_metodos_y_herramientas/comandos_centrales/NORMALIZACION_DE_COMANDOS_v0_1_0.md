# NORMALIZACIÓN DE COMANDOS

**ID:** `METH-CC-CMD-NORM`  
**Versión:** `0.1.0`

## Objetivo

Transformar un prompt o entrada HMI en un `CommandEnvelope` sin perder intención, procedencia ni restricciones.

## Pipeline

```text
INPUT
  ↓
PRESERVAR ORIGINAL
  ↓
DETECTAR INTENCIÓN
  ↓
RESOLVER VERBO
  ↓
RESOLVER TARGET
  ↓
EXTRAER OBJETIVO
  ↓
EXTRAER CONSTRAINTS
  ↓
RESOLVER SCOPE
  ↓
RESOLVER OUTPUT
  ↓
RESOLVER PERSISTENCE
  ↓
CLASIFICAR CAMPOS EXPLÍCITOS/INFERIDOS
  ↓
VALIDAR CONTRATO
```

## Paso 1 — preservar original

Nunca reescribir el prompt fuente como si hubiera sido emitido en forma normalizada.

## Paso 2 — intención dominante

Identificar qué transformación solicita el humano. El tema no determina el verbo.

## Paso 3 — target

Resolver usando registros y contexto. Si hay varias coincidencias con impacto material, detenerse.

## Paso 4 — restricciones

Detectar:

- prohibiciones;
- límites temporales;
- límites de fuente;
- condiciones epistemológicas;
- formatos;
- requisitos de validación;
- autorización o ausencia de ella.

## Paso 5 — scope

Usar espacios lógicos:

```text
CC://
PROJECT://
OVERLAY://
OUTPUT://
```

Un mismo comando puede leer de varios y escribir sólo en uno.

## Paso 6 — persistencia

Por defecto `NONE`.

Palabras como "guardar", "integrar", "actualizar", "registrar" requieren resolver destino y tipo de cambio.

## Paso 7 — inferencia

Campos inferidos deben poder explicarse.

Regla:

```text
riesgo bajo + inferencia reversible → puede continuar
riesgo alto + inferencia crítica → human gate
```

## Salida

```yaml
normalization:
  command:
  unresolved_fields: []
  inferred_fields: []
  confidence:
  requires_human_clarification:
```
