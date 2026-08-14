# Integración con AC-HIA: frontend, normalización y backend

**ID:** `MCCR-INT-ACHIA-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

AC-HIA envuelve a MCCR: frontend preserva el comando, el normalizador produce el grafo operativo, el backend invoca la configuración y después compila/ejecuta/clasifica. MCCR no duplica esas funciones.

## Responsabilidad

Este documento es responsable de:

- punto de llamada al `EXECUTION_PLANNER`
- mapeo `EXECUTION_REQUEST`↔MCCR
- devolución de plan, inviabilidad y eventos

No es responsable de:

- capturar UI
- normalizar NC-00–NC-12
- compilar al proveedor o reintegrar estado

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| NORMALIZED_COMMAND_GRAPH | salida del normalizador | REQUIRED |
| EXECUTION_REQUEST | contrato local→backend | REQUIRED |
| HOST/STATE CONTEXT | snapshot | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Frontend captura `HUMAN_COMMAND_EVENT`.
2. Normalizador produce uno o más comandos y dependencias.
3. Arquitectura local resuelve estado/autoridad.
4. Backend determina necesidad de MCCR.
5. MCCR produce plan/inviabilidad.
6. Backend hace handoff, clasifica resultado y coordina reintegración.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| EXECUTION_PLAN | respuesta compatible al backend | MCCR |
| NO_FEASIBLE_PLAN | incompatibilidad explicable | MCCR |
| REPLAN_REQUEST | evento situado | MCCR |

## Especificación

Mapeo de responsabilidades:

| AC-HIA | MCCR |
|---|---|
| `COMMAND_NORMALIZER` | consume, no reemplaza |
| `STRUCTURE_SELECTOR` | aporta candidatos/roles |
| `DEPENDENCY_RESOLVER` | aporta dependencias |
| `CAPABILITY_ROUTER` | aporta snapshot/bindings posibles |
| `EXECUTION_PLANNER` | punto anfitrión de la especialización MCCR |
| `HOST_COMPILER` | consume plan después de C12 |
| `RESULT_CLASSIFIER` | clasifica salida de ejecución |
| `STATE_REINTEGRATOR` | aplica sólo efectos autorizados |

Estado real: AC-HIA formaliza el diseño y funciones, pero declara runtime/adaptadores `NOT_IMPLEMENTED`. MCCR puede operar como protocolo contextual ejecutado por una IA anfitriona; no debe informar `RUNTIME_READY`.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- El portador humano permanece fuera de MCCR pero referenciado.
- El backend conserva la coordinación total.

## Ejemplo operativo

La frase humana se normaliza a CREATE+constraints. MCCR recibe el grafo, produce `Π-001`; `HOST_COMPILER` genera la instrucción textual y `RESULT_CLASSIFIER` valida la respuesta. MCCR no se atribuye esos pasos.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Grafo normalizado inválido | volver al normalizador |
| Backend no expone host profile | plan sólo `SPECIFIED`, no listo |
| Runtime ausente | simulación contextual con estado declarado |

## Relaciones y límites

Es la integración principal y define el borde de ejecución.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- No se duplican componentes AC-HIA.
- Se declara `NOT_IMPLEMENTED` correctamente.
- Entrada y retorno tienen contratos.
