# Ficha del paquete MCCR

**ID:** `MCCR-GOV-FICHA-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

`[INFERENCIA]` MCCR es un paquete metodológico transversal que especializa la planificación del backend: convierte una solicitud situada y un perfil real de capacidades en un `EXECUTION_PLAN` prevalidado o explica por qué no existe uno.

## Responsabilidad

Este documento es responsable de:

- identidad, alcance, consumidores y estado del paquete
- criterios mínimos para que una realización cuente como MCCR
- límites entre especificación contextual e implementación ejecutable

No es responsable de:

- normalizar el lenguaje humano desde cero
- ejecutar herramientas o modelos
- promoverse a canon o escribir en otros módulos

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| NORMALIZED_COMMAND_GRAPH o equivalente | necesidad operativa situada | REQUIRED |
| LOCAL_COGNITIVE_STATE | estado, fuentes y estructuras activas | REQUIRED |
| HOST_PROFILE | capacidades y permisos efectivos | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Recibir la solicitud desde AC-HIA/backend.
2. Construir el espacio de configuraciones que respeta autoridad y capacidades.
3. Emitir un plan prevalidado o `NO_FEASIBLE_PLAN`.
4. Devolver el objeto al backend para handoff, ejecución y reintegración.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| EXECUTION_PLAN | configuración operable y trazable | AC-HIA/backend |
| NO_FEASIBLE_PLAN | prueba de inviabilidad y opciones humanas | AC-HIA/frontend |

## Especificación

```yaml
package:
  id: PC-MCCR
  name: MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME
  alias: MCCR
  version: 0.1.0
  lifecycle: DEVELOPMENT
  authority: HUMAN
  canonical_status: NON_CANONICAL
  implementation_state: CONTEXTUAL_PROTOCOL_SPECIFIED
  runtime_code: NOT_IMPLEMENTED
  final_state: CANDIDATE_WITH_OPEN_DECISIONS
classification:
  type: TRANSVERSAL_COGNITIVE_METHOD_PACKAGE
  dominant_role: SITUATED_EXECUTION_CONFIGURATION
consumers:
  - AC-HIA COGNITIVE_BACKEND / EXECUTION_PLANNER
  - cApps
  - MTC pipelines
  - ACCD realizations
  - contextual AI hosts
```

Una realización pertenece a MCCR si: recibe objetivo y contexto situados; distingue posibilidades de disponibilidad; formaliza restricciones con procedencia; construye al menos un candidato o demuestra inviabilidad; valida antes de optimizar; materializa bindings, pasos, gates y trazas; y no ejecuta ni persiste por sí misma.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.

## Ejemplo operativo

“Construye un guion ACCD de video corto sin persistirlo” llega normalizado. MCCR selecciona la región `video_corto`, la instancia contextual, el adaptador textual y los validadores; devuelve un plan. El host, no MCCR, redacta el guion.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Falta objetivo material | solicitar aclaración; no construir plan |
| Capacidad indispensable ausente | emitir `NO_FEASIBLE_PLAN` |
| Sólo falta una preferencia | continuar y marcarla `UNKNOWN` |

## Relaciones y límites

MCCR es llamado por el backend de AC-HIA. Consulta Registro/Búsqueda, reutiliza MTC/ACCD/cApps y entrega al runtime mediante un handoff. No equivale a ninguno de ellos.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.
- [DECISION_HUMANA] `ART_MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME.txt`: inventario y contrato de los 58 documentos.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- La identidad y el estado no canónico son inequívocos.
- Las dos salidas terminales están definidas.
- No se atribuye runtime ejecutable al paquete.
