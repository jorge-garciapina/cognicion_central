# Modelo de configuración operacional

**ID:** `MCCR-CORE-CONFIG-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Una configuración operacional es una asignación de roles, componentes, bindings, orden, validadores y gates suficiente para intentar el resultado autorizado en el contexto actual.

## Responsabilidad

Este documento es responsable de:

- estructura interna de una configuración
- criterios de completitud y consistencia
- diferencia entre diseño abstracto e instancia situada

No es responsable de:

- ejecutar la configuración
- afirmar que una configuración válida garantiza el resultado
- confundir disponibilidad con selección

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| ROLE_REQUIREMENTS | funciones necesarias | REQUIRED |
| CANDIDATE_COMPONENTS | estructuras/capacidades | REQUIRED |
| CONSTRAINT_SET | reglas duras y preferencias | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Asignar un componente a cada rol indispensable.
2. Resolver puertos, tipos y dependencias.
3. Ordenar operaciones y gates.
4. Enlazar roles al host efectivo.
5. Adjuntar validadores y política de fallo/replan.
6. Comprobar completitud y consistencia.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| OPERATIONAL_CONFIGURATION | instancia candidata | MCCR |
| COMPLETENESS_REPORT | roles cubiertos y ausencias | MCCR |

## Especificación

```yaml
operational_configuration:
  configuration_id:
  request_id:
  role_assignments: []
  active_components: []
  dependency_edges: []
  data_and_control_flow: []
  runtime_bindings: []
  hard_constraints: []
  soft_objectives: []
  validators: []
  gates: []
  stop_conditions: []
  failure_and_replan_policy: {}
  provenance: []
```

Es completa si cada rol obligatorio tiene una realización o una salida de fallo explícita. Es consistente si tipos, orden, autoridad, capacidades y restricciones no se contradicen. Es situada si todos los bindings remiten al snapshot actual.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Todo componente activo debe contribuir a un rol o validación declarada.
- Todo rol obligatorio debe estar cubierto.

## Ejemplo operativo

En video ACCD los roles son recuperar construcción, validar región, construir instancia contextual, aplicar adaptador, validar codominio y emitir manifestación. Un generador visual sólo se activa si un campo seleccionado lo necesita y el host lo permite.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Rol obligatorio sin componente | `INCOMPLETE_CONFIGURATION` |
| Ciclo de dependencias no autorizado | `INVALID_CONFIGURATION` |
| Binding desactualizado | invalidar y replanificar |

## Relaciones y límites

La configuración se convierte en `EXECUTION_PLAN` cuando añade identidad, estados, handoff y trazabilidad contractual.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/protocolo-videos-cortos.md`: realización video corto y efecto de valores.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- La configuración cubre roles y dependencias.
- Los bindings están situados.
- Se distingue configuración de ejecución.
