# C0–C3: ingreso, resolución, capacidades y región candidata

**ID:** `MCCR-OPS-C0C3-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Las primeras etapas convierten una solicitud admitida en un problema configuracional situado sin elegir todavía un plan.

## Responsabilidad

Este documento es responsable de:

- C0 admisión
- C1 resolución semántica/autoridad
- C2 snapshot de capacidades
- C3 región candidata con procedencia

No es responsable de:

- optimizar candidatos
- formalizar al humano como autor del grafo
- presumir capacidades privadas

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| MCCR_REQUEST | contrato del núcleo | REQUIRED |
| LOCAL_STATE | estructuras/artefactos activos | REQUIRED |
| HOST_PROFILE | capacidades expuestas | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. C0 valida referencias, objetivo, resultado y snapshot.
2. C1 resuelve roles requeridos, identidad, alcance, autoridad y dependencias semánticas.
3. C2 clasifica cada capacidad `AVAILABLE`, `UNAVAILABLE`, `UNKNOWN` o `FORBIDDEN` con evidencia.
4. C3 consulta Registro/fuentes y, si es necesario, Búsqueda Cognitiva de sólo lectura; reúne candidatos y relaciones.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| ADMITTED_REQUEST | solicitud aceptada | MCCR |
| RESOLVED_NEED | roles, tipos y autoridad | MCCR |
| CAPABILITY_SNAPSHOT | estado efectivo | MCCR |
| CANDIDATE_REGION | estructuras y alternativas | MCCR |

## Especificación

```yaml
capability_snapshot:
  snapshot_id:
  observed_at:
  provider_and_runtime:
  capabilities:
    - capability_id:
      state: AVAILABLE | UNAVAILABLE | UNKNOWN | FORBIDDEN
      permissions: []
      limits: []
      evidence:

candidate_region:
  required_roles: []
  candidates:
    - identity:
      role:
      source:
      maturity:
      ports: {accepts: [], produces: []}
      dependencies: []
      availability_refs: []
```

C3 genera cobertura amplia, no un veredicto. Una coincidencia léxica o embedding sólo puede proponer un candidato; identidad y compatibilidad se validan después.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Búsqueda interna hereda alcance y es `READ_ONLY`.
- C3 conserva candidatos incompatibles sólo con marca, nunca como válidos.

## Ejemplo operativo

Para video corto, C1 identifica roles de construcción, instancia, protocolo y validación; C2 verifica texto/archivos pero marca imagen como no disponible; C3 recupera ACCD video y una alternativa de guion textual.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Solicitud sin snapshot temporal | crear snapshot antes de continuar |
| Capacidad desconocida indispensable | pedir verificación o bloquear |
| Búsqueda no encuentra un rol | registrar ausencia y pasar a inviabilidad si es obligatorio |

## Relaciones y límites

C0–C1 consumen AC-HIA; C2 consume host profile; C3 consume Registro/Búsqueda y fuentes de dominio.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- No se selecciona plan en C0–C3.
- Las capacidades tienen evidencia.
- La región candidata conserva procedencia.
