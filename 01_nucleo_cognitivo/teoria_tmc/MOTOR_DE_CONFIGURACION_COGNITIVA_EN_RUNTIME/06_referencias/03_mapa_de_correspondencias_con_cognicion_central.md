# Mapa de correspondencias con COGNICION_CENTRAL

**ID:** `MCCR-REF-CROSSWALK-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

El crosswalk muestra dónde se acopla cada objeto MCCR y qué frontera conserva. Su finalidad es detectar duplicación semántica y claims de autoridad indebidos.

## Responsabilidad

Este documento es responsable de:

- mapeo objeto MCCR→objeto CC
- tipo de relación
- no equivalencias y huecos

No es responsable de:

- declarar equivalencia no demostrada
- resolver el Orquestador ausente
- alterar fuentes mapeadas

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| MCCR_CONCEPTS | léxico local | REQUIRED |
| CC_SOURCE_MAP | conceptos recuperados | REQUIRED |
| INTEGRATION_RULES | fronteras | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Tomar concepto local.
2. Buscar objeto fuente/vecino.
3. Clasificar `SPECIALIZES`, `CONSUMES`, `PRODUCES_FOR`, `ADAPTS` o `NOT_EQUIVALENT`.
4. Registrar diferencia y evidencia.
5. Abrir decisión si la relación es material y no demostrada.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| CC_CROSSWALK | tabla de relaciones | MCCR |
| SEMANTIC_DUPLICATION_REPORT | solapamientos | MCCR |

## Especificación

| MCCR | CC relacionado | Relación | Límite |
|---|---|---|---|
| `MCCR_REQUEST` | AC-HIA `EXECUTION_REQUEST` | especializa/consume | no reemplaza normalización |
| `EXECUTION_PLAN` | AC-HIA `EXECUTION_PLAN` | detalla contrato | no es ejecución/resultado |
| C0–C12 | backend F4 | descompone localmente | no es canon ni pipeline MTC |
| `G_active` | MTC-WORK | analogía/adaptación | identidades no equivalentes |
| candidate region | Registro/Búsqueda | consume | recuperación no es selección |
| ACCD fragment | instancia/adaptador/codominio | configura | dominio sigue en ACCD |
| cApp plan | cApp/cNode | instancia | cApp conserva identidad |
| solver router MCCR | AC-HIA capability router | consume capacidad | no duplica disponibilidad |
| MCCR | Orquestador | posible servicio futuro | `[AUSENCIA]` contrato global |
| `EXECUTION_PLAN` | `IDENTITY_SELECTION` | `[HIPOTESIS]` | equivalencia no demostrada |

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Toda relación fuerte exige fuente directa.
- Los huecos se conservan como decisiones.

## Ejemplo operativo

MTC-WORK y `G_active` comparten intuición de corte mínimo, pero uno es objeto MTC y otro vista de configuración MCCR. Se registra `ADAPTS`, no `EQUALS`.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Equivalencia sin fuente | degradar a hipótesis |
| Dos módulos poseen la misma responsabilidad | rediseñar frontera |
| Hueco bloqueante | `OPEN_DECISION` |

## Relaciones y límites

Es la prueba principal contra duplicación de Registro/AC-HIA/MTC/ACCD/cApps/runtime.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt`: definición de cApp.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Las relaciones críticas están tipadas.
- La hipótesis IDENTITY_SELECTION sigue abierta.
- No hay sustitución silenciosa.
