# Patch propuesto para Prompt Central y registro de capacidad

**ID:** `MCCR-REPO-PATCH-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

El Prompt Central ya exige recuperación mínima, capacidades reales y selección de componentes; MCCR no necesita reescribirlo para funcionar. Sólo se propone una regla de routing y una entrada de capacidad, sujetas a aprobación.

## Responsabilidad

Este documento es responsable de:

- evaluación `NO_PATCH_REQUIRED`
- snippet mínimo opcional
- registro de capacidad propuesto

No es responsable de:

- editar archivos externos
- añadir MCCR al canon
- duplicar el protocolo completo

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| CURRENT_PROMPT_CENTRAL | protocolo vigente | REQUIRED |
| MCCR_INTERFACE | trigger y contrato | REQUIRED |
| REGISTRY_SCHEMA | entrada futura | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Comparar funciones existentes con necesidad MCCR.
2. Declarar si hay gap.
3. Si sólo falta descubribilidad, proponer patch mínimo.
4. Separar patch de Prompt y entrada de Registro.
5. Someter ambos a revisión humana.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| PATCH_DECISION | `NO_PATCH_REQUIRED_FOR_V1` | MCCR |
| OPTIONAL_PATCH | texto no aplicado | MCCR |
| CAPABILITY_RECORD_PROPOSAL | entrada no aplicada | MCCR |

## Especificación

Decisión v1: `NO_PATCH_REQUIRED_FOR_V1`. El Prompt Central ya ordena recuperar sólo lo necesario, perfilar capacidades, seleccionar estructuras y no persistir silenciosamente.

Patch opcional de routing:

```diff
+ Si una operación requiere seleccionar o recomponer múltiples estructuras/capacidades
+ bajo restricciones situadas, recupera PC-MCCR y solicita EXECUTION_PLAN o
+ NO_FEASIBLE_PLAN. No actives MCCR para consultas directas de una sola operación.
```

Entrada propuesta:

```yaml
capability_record:
  id: PC-MCCR
  role: SITUATED_EXECUTION_CONFIGURATION
  entrypoint: README.md
  input: EXECUTION_REQUEST
  outputs: [EXECUTION_PLAN, NO_FEASIBLE_PLAN]
  state: PROPOSED_NON_CANONICAL
  activation: EXPLICIT_OR_BACKEND_TRIGGER
```

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Un patch opcional no se presenta como aplicado.
- El registro conserva `NON_CANONICAL`.

## Ejemplo operativo

Una instalación sin patch puede abrir README por ruta explícita. Con patch aprobado, el router descubre MCCR cuando detecta configuración compleja.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Prompt ya cubre la regla | evitar duplicación |
| Registro no admite estado propuesto | esperar decisión de schema |
| Aplicación sin orden | prohibida |

## Relaciones y límites

La propuesta completa está resumida en `PROPOSED_EXTERNAL_CHANGES.md`.

## Procedencia

- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Se concluye no necesidad para v1.
- El snippet es mínimo.
- Nada fue aplicado.
