# Colaboración entre LLM, grafos, reglas y validadores

**ID:** `MCCR-CON-HYBRID-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Cada mecanismo cumple un rol distinto: el LLM interpreta/genera; el grafo conserva relaciones; las reglas eliminan violaciones; los validadores emiten veredictos. La colaboración es explícita y trazable.

## Responsabilidad

Este documento es responsable de:

- reparto de responsabilidades
- contratos de intercambio
- controles contra alucinación y circularidad

No es responsable de:

- usar consenso aparente como verdad
- hacer que el mismo razonamiento sea evidencia de sí mismo
- ocultar transformaciones entre representaciones

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| NATURAL_AND_STRUCTURED_INPUT | comando y fuentes | REQUIRED |
| GRAPH_VIEW | dependencias | REQUIRED |
| RULE_SET | constraints | REQUIRED |
| VALIDATOR_CATALOG | pruebas | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. LLM proyecta una interpretación con etiquetas.
2. Grafo materializa identidades y aristas.
3. Reglas podan y comprueban condiciones decidibles.
4. LLM compone alternativas dentro del espacio restante.
5. Validadores independientes por contrato revisan candidatos.
6. Selector usa sólo evidencia validada.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| HYBRID_TRACE | contribución de cada mecanismo | MCCR |
| VALIDATED_CANDIDATES | candidatos y veredictos | MCCR |

## Especificación

| Mecanismo | Puede | No puede por sí solo |
|---|---|---|
| LLM | interpretar, recuperar, proponer, explicar | conceder autoridad; certificar verdad |
| grafo | representar identidad/dependencia/flujo | decidir semántica sin fuentes |
| reglas | comprobar condiciones explícitas | inventar excepciones o prioridades |
| validador | emitir veredicto en su contrato | ampliar su alcance a todo el plan |

Se evita circularidad haciendo que cada afirmación cite fuente o inferencia; que los hard validators usen pruebas distintas del puntaje generativo; y que la validación humana permanezca disponible para decisiones materiales.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La salida de un mecanismo declara tipo y confianza.
- El LLM no se presenta como autoridad humana.

## Ejemplo operativo

El LLM sugiere región ACCD; el grafo comprueba puertos; una regla verifica Selected⊆Allowed según la fuente; el validador de manifestación confirma efecto de valores. Sólo entonces la cadena es válida.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| LLM inventa nodo | excluir por falta de fuente |
| Regla contradice fuente vigente | versionar/corregir regla |
| Validador fuera de alcance | no usar su PASS como prueba global |

## Relaciones y límites

Implementa la ruta base del solver router y consume validadores AC-HIA/dominio.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/protocolo-videos-cortos.md`: realización video corto y efecto de valores.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Los roles no se colapsan.
- La traza muestra conversiones.
- No hay validación circular.
