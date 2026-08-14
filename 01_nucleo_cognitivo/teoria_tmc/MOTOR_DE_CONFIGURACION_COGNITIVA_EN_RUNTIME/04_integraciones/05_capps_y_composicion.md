# Integración con cApps y composición

**ID:** `MCCR-INT-CAPPS-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Una cApp conserva un fin e identidad operativa propios y puede requerir varias cadenas. MCCR configura esas cadenas para una ejecución concreta sin convertir la cApp en una lista accidental de herramientas.

## Responsabilidad

Este documento es responsable de:

- mapeo cApp→roles/chains/gates
- composición secuencial/paralela/anidada
- preservación de invariantes de aplicación

No es responsable de:

- definir qué cApps existen
- fusionar estados entre cApps
- ampliar el alcance de la aplicación

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| CAPP_CONTRACT | propósito, entradas, salida, invariantes | REQUIRED |
| CHAIN_CANDIDATES | fragmentos operativos | REQUIRED |
| CONTEXT | estado/capacidades | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Recuperar contrato y rol dominante de la cApp.
2. Descomponer en resultados intermedios verificables.
3. Asignar cadenas y puertos.
4. Insertar gates de aplicación y globales.
5. Validar composición y estado compartido.
6. Materializar plan conservando `capp_id`.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| CAPP_OPERATIONAL_CONFIGURATION | chains y controles | MCCR |
| CAPP_EXECUTION_PLAN | plan con identidad de aplicación | MCCR |

## Especificación

Una cApp es una estructura operativa compuesta orientada a resultado reproducible mediante formas cognitivas, familias y criterios. En MCCR se proyecta como:

```yaml
capp_binding:
  capp_id:
  objective:
  invariants: []
  chains: []
  shared_state_contract:
  convergence_gates: []
  final_result_contract:
```

La cApp puede anidar otra por contrato. La salida de una sub-cApp no se integra en el estado padre hasta pasar el gate de convergencia.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La cApp conserva identidad y criterios.
- El estado compartido tiene propietario y política.

## Ejemplo operativo

Una cApp de contenido usa cadena A para construir concepto, B para trazabilidad de fuentes y C para realizar video. A y B pueden ir en paralelo; C espera su gate de convergencia.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| cApp sin resultado verificable | no configurar hasta aclarar contrato |
| Ramas producen estados incompatibles | mediar/serializar/rechazar |
| Sub-cApp falla | aplicar política padre sin ocultar fallo |

## Relaciones y límites

El Registro/cNode define identidad; MCCR instancia la composición; AC-HIA coordina ejecución.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt`: definición de cApp.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Se soportan múltiples cadenas.
- Los gates de convergencia son explícitos.
- La identidad de cApp se preserva.
