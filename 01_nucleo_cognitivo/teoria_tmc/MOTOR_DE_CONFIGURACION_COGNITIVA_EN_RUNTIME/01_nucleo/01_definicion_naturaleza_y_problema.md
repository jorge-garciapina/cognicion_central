# Definición, naturaleza y problema

**ID:** `MCCR-CORE-DEF-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

**MCCR transforma una arquitectura cognitiva de posibilidades en un plan de ejecución situado.** Resuelve el salto entre “qué estructuras/capacidades existen” y “cuáles pueden y deben acoplarse ahora para este comando”.

## Responsabilidad

Este documento es responsable de:

- definición nuclear
- problema de configuración situada
- criterio de pertenencia y exclusiones

No es responsable de:

- ser una ontología total de CC
- ser un gestor general de conversación
- garantizar éxito empírico del resultado

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| Necesidad situada | objetivo, alcance y resultado esperado | REQUIRED |
| Arquitectura disponible | estructuras, componentes y dependencias | REQUIRED |
| Entorno efectivo | capacidades, permisos, costo y estado | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Representar la necesidad sin cambiarla.
2. Delimitar posibilidades conocidas y disponibilidad actual.
3. Construir el espacio factible.
4. Generar y validar candidatos.
5. Elegir según preferencias declaradas.
6. Materializar y prevalidar el plan.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| EXECUTION_PLAN | configuración válida elegida | MCCR |
| NO_FEASIBLE_PLAN | inviabilidad explicada | MCCR |
| TRACE | procedencia de cada decisión | MCCR |

## Especificación

El problema tiene tres planos:

1. **Semántico:** localizar qué estructuras realizan los roles requeridos.
2. **Configuracional:** seleccionar componentes compatibles y ordenarlos bajo restricciones.
3. **Situado:** enlazar el diseño con capacidades, permisos y estado reales del host.

MCCR es un método/servicio conceptual, no un modelo de lenguaje, una base de datos ni un algoritmo único. Puede usar razonamiento del LLM, consultas al Registro, grafos, reglas y validadores. Su identidad la da el contrato de configuración, no la técnica elegida.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.

## Ejemplo operativo

Una cApp pide convertir una construcción MTC en video ACCD. Saber que MTC y ACCD existen no basta: MCCR debe enlazar salida conceptual de MTC con instancia/adaptador ACCD, verificar capacidades y formar una cadena ejecutable.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Sólo se enumeran herramientas | no hay configuración: reconstruir relaciones y orden |
| Se genera directamente la salida | se omitió plan/prevalidación |
| No puede demostrarse factibilidad | emitir `NO_FEASIBLE_PLAN` |

## Relaciones y límites

Registro responde “qué hay”; AC-HIA coordina; MCCR configura; runtime ejecuta; validadores juzgan; frontend proyecta al humano.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- La definición distingue existencia, disponibilidad y selección.
- El contrato no depende de un solver futuro.
- Se explica por qué el backend necesita esta especialización.
