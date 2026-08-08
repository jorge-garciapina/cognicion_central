# PROPUESTA DE INTEGRACIÓN CANÓNICA — COMMAND CENTER

**Estado:** `PROPUESTA / NO AUTOAPLICAR`  
**Versión propuesta del cambio:** incremento `MINOR` del canon cuando sea aprobado.

## 1. Objetivo

Formalizar la deuda actual relacionada con:

- `CC-CMD | Prompt → Comando | parcial`;
- gramática de comandos parcial;
- orquestador pendiente;
- necesidad de probar el ciclo comando → ejecución → evidencia → corrección.

## 2. Nueva estructura candidata

```yaml
candidate_structure:
  id: CC-CMD-PROTOCOL
  name: Comando Central
  family: Metodo+Diseno
  state: PROVISIONAL
  role:
    representar de forma operativa y trazable una intención humana
  invariants:
    - human_authority
    - original_prompt_preserved
    - explicit_scope
    - explicit_persistence
    - traceability
    - no_silent_escalation
```

## 3. Nueva aplicación candidata

```yaml
application:
  id: APP-CC-COMMAND-CENTER
  name: COMMAND_CENTER_COGNICION_CENTRAL
  state: PROVISIONAL
  purpose:
    ofrecer una superficie humana para emitir, inspeccionar, autorizar y revisar comandos centrales
```

## 4. Cambio sugerido en estado de madurez

Antes:

```text
Gramática de comandos | parcial
Orquestador | pendiente de formalización e implementación
```

Después de integrar estos documentos, pero antes de implementar software:

```text
Gramática de comandos | especificación v0.1 / requiere pruebas
Command Center | especificación operativa v0.1 / ejecutable por interpretación
Orquestador | diseño interpretativo parcial / backend autónomo pendiente
```

No declarar "implementación completa" mientras no exista runtime persistente probado.

## 5. Nueva regla propuesta

Todo prompt humano procesado bajo `COMMAND_CENTER` puede transformarse en un comando operacional, pero únicamente comandos que efectivamente cambien el estado canónico deben incorporarse al registro canónico de comandos humanos.

## 6. Nuevos modos

Reconocer como configuración de interfaz:

```text
CC-NORMAL
CC-TRACE
CC-STRICT
CC-DEV
```

Los modos afectan visibilidad y gates; no alteran autoridad.

## 7. Persistencia

Incorporar explícitamente la taxonomía:

```text
NONE
SESSION_ONLY
OUTPUT_PROPOSAL
PROJECT_PATCH
CANONICAL_CHANGE_REQUESTED
CANONICAL_CHANGE_APPLIED
```

## 8. Decisión humana requerida

La incorporación al canon debe ocurrir sólo tras una orden inequívoca como:

```text
APRUEBO LA INTEGRACIÓN CANÓNICA DE COMMAND_CENTER_COGNICION_CENTRAL V0.1.0.
GENERA LOS CAMBIOS VERSIONADOS Y EL REGISTRO CORRESPONDIENTE.
```
