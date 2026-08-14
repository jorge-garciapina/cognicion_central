# Integración con validadores y runtime

**ID:** `MCCR-INT-RUNTIME-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR planifica contra capacidades expuestas y validadores con contratos. El runtime ejecuta; los validadores juzgan aspectos delimitados. `[AUSENCIA]` El repositorio no contiene un runtime completo implementado para AC-HIA/MCCR; su estado real es `NOT_IMPLEMENTED`.

## Responsabilidad

Este documento es responsable de:

- host profile consumido por MCCR
- asignación de validadores a pasos/gates
- estados contextual/especificado/implementado

No es responsable de:

- presumir herramientas
- declarar `RUNTIME_READY` por razonamiento en chat
- convertir validadores en autoridad general

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| HOST_PROFILE | modelos, herramientas, archivos, web, código, conectores | REQUIRED |
| VALIDATOR_CATALOG | contratos y estados | REQUIRED |
| EXECUTION_PLAN_DRAFT | pasos/bindings | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Observar capacidades expuestas.
2. Clasificar disponibilidad/permisos/límites.
3. Enlazar cada paso a binding real.
4. Asignar validadores previos y posteriores.
5. Prevalidar plan.
6. Después del handoff, recibir sólo eventos/veredictos.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| RUNTIME_BINDING_MAP | rol→capacidad | MCCR |
| VALIDATOR_BINDING_MAP | gate→prueba | MCCR |
| IMPLEMENTATION_STATUS | estado no inflado | MCCR |

## Especificación

```yaml
host_profile:
  provider:
  runtime:
  models_available: []
  tools_available: []
  file_access:
  web_access:
  code_execution:
  connectors: []
  persistence_destinations: []
  permissions: []
  limits: []
  unsupported: []
```

Estados permitidos: `SPECIFIED` (documentado), `CONTEXTUALLY_OPERABLE` (la IA puede seguir el protocolo), `IMPLEMENTED` (software existe), `VERIFIED` (pruebas pasan). Este candidato alcanza los dos primeros en contexto adecuado; no los dos últimos.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Un binding incluye evidencia del snapshot.
- Validador PASS sólo cubre su contrato.

## Ejemplo operativo

El host actual expone lectura/escritura de archivos y LLM, no un solver MILP. El plan usa reglas+grafo+LLM; no declara que ejecutó MILP.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Binding desaparece | rechazo/evento/replan |
| Validador no implementado | bloquear si es obligatorio |
| Estado de implementación inflado | corregir a evidencia real |

## Relaciones y límites

AC-HIA `CAPABILITY_ROUTER`, `HOST_COMPILER` y validadores rodean el plan; MCCR sólo consume sus contratos.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Se declara la ausencia de runtime completo.
- Todos los pasos tienen binding o fallo.
- Los cuatro estados se distinguen.
