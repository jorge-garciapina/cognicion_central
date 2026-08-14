# Subgrafo, cadena, plan y composición

**ID:** `MCCR-CORE-COMP-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Un subgrafo enumera relaciones activas; una cadena ordena transformaciones; una configuración asigna bindings y controles; un plan contractualiza la configuración para ejecución. Las cuatro vistas se conectan, pero no son equivalentes.

## Responsabilidad

Este documento es responsable de:

- distinción entre vistas
- reglas de composición secuencial, paralela y anidada
- compatibilidad de puertos y handoffs internos

No es responsable de:

- reducir toda composición a secuencia lineal
- fusionar identidades de componentes
- crear dependencias implícitas

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| ACTIVE_COMPONENTS | nodos y roles | REQUIRED |
| PORT_CONTRACTS | tipos de entrada/salida | REQUIRED |
| CONTROL_REQUIREMENTS | orden, paralelismo y gates | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Formar el subgrafo de dependencias.
2. Construir cadenas donde los puertos sean compatibles.
3. Añadir ramas paralelas sólo si no violan estado o autoridad.
4. Insertar mediadores/adaptadores explícitos.
5. Materializar configuración y luego plan.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| ACTIVE_SUBGRAPH | vista relacional | MCCR |
| COGNITIVE_CHAIN_SET | vista de transformación | MCCR |
| EXECUTION_PLAN | vista contractual situada | MCCR |

## Especificación

```text
subgrafo: qué participa y cómo se relaciona
chain: qué transforma qué y en qué orden
configuración: quién realiza cada rol bajo qué binding
plan: contrato versionado, validado y entregable
cApp: aplicación compuesta con fin e identidad propios; puede requerir varias chains
```

Composición permitida:

- secuencial: la salida validada de A satisface la entrada de B;
- paralela: ramas independientes se unen mediante un gate explícito;
- condicional: una regla observable elige una rama;
- anidada: una cApp invoca otra sin absorber su estado o autoridad;
- mediada: un adaptador transforma tipos sin ocultar pérdida.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La identidad de cada componente sobrevive a la composición.
- Toda convergencia tiene regla de unión y validador.

## Ejemplo operativo

MTC produce una construcción conceptual y traza. ACCD la recibe mediante el puerto temático, construye una instancia contextual y genera manifestación. El adaptador MTC→ACCD es una arista explícita; no se dice que MTC produjo el video.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Puertos incompatibles | insertar mediador autorizado o podar |
| Ramas escriben el mismo estado sin regla | serializar o rechazar |
| cApp pierde invariantes al anidarse | invalidar composición |

## Relaciones y límites

MTC sustenta subgrafo y composición; ACCD aporta un caso de mediación; cApp aporta identidad orientada a resultado; MCCR los configura.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/13_pipeline_y_maquina_de_estados.md`: pipeline y estado.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt`: definición de cApp.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Las cuatro vistas se distinguen.
- Se soporta paralelismo y mediación.
- Los puertos son verificables.
