# Pipeline C0–C12

**ID:** `MCCR-OPS-C0C12-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

`C0–C12` es la descomposición local y auditable de la configuración MCCR. No se atribuye a MTC ni al canon; reutiliza sus principios sin renombrarlos como fuente.

## Responsabilidad

Este documento es responsable de:

- definición y contrato de cada etapa
- artefactos intermedios
- gates y retornos

No es responsable de:

- exigir que un runtime implemente trece procesos separados
- ocultar etapas porque una IA las realiza en una sola inferencia
- usar numeración como autoridad externa

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| MCCR_REQUEST | solicitud estructurada | REQUIRED |
| COGNITIVE_AND_COMPONENT_SOURCES | candidatos | REQUIRED |
| HOST_PROFILE | snapshot de capacidades | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. C0 admitir solicitud y snapshot.
2. C1 resolver objetivo, autoridad e identidades.
3. C2 resolver capacidades efectivas.
4. C3 construir región candidata.
5. C4 formalizar restricciones y preferencias.
6. C5 podar al espacio factible.
7. C6 generar candidatos de configuración.
8. C7 validar restricciones duras.
9. C8 evaluar objetivos blandos.
10. C9 seleccionar o declarar inviabilidad.
11. C10 materializar `EXECUTION_PLAN`.
12. C11 prevalidar contrato, gates y traza.
13. C12 entregar mediante handoff.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| C_STAGE_TRACE | entradas/salidas/veredictos por etapa | MCCR |
| EXECUTION_PLAN | salida C12 | MCCR |
| NO_FEASIBLE_PLAN | salida C5, C7 o C9 | MCCR |

## Especificación

| Etapa | Entrada dominante | Salida | Gate |
|---|---|---|---|
| C0 | solicitud | `ADMITTED_REQUEST` | forma mínima |
| C1 | comando/estado | `RESOLVED_NEED` | autoridad/identidad |
| C2 | perfil host | `CAPABILITY_SNAPSHOT` | evidencia de disponibilidad |
| C3 | fuentes | `CANDIDATE_REGION` | procedencia/cobertura |
| C4 | necesidad/región | `CONSTRAINT_MODEL` | contradicción explícita |
| C5 | región/reglas | `FEASIBLE_SEARCH_SPACE` | no vacío o prueba |
| C6 | espacio factible | `PLAN_CANDIDATES` | al menos un candidato |
| C7 | candidatos | `VALID_CANDIDATES` | todas las reglas duras |
| C8 | válidos | `PREFERENCE_ASSESSMENT` | evidencia comparable |
| C9 | evaluación | `SELECTED_CONFIGURATION` | selección explicable |
| C10 | selección | `EXECUTION_PLAN_DRAFT` | completitud |
| C11 | borrador | `READY_FOR_HANDOFF` | prevalidación |
| C12 | plan listo | `HANDOFF_RECEIPT` | aceptación del consumidor |

Cada etapa registra `input_refs`, `decision`, `output_ref`, `validator`, `uncertainty` y `timestamp/snapshot` cuando el host lo permita.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- C8 nunca recibe candidatos inválidos.
- C12 no ejecuta; entrega.

## Ejemplo operativo

En el fixture de video, C3 localiza región/adaptador; C4 compila “borrador, no persistir”; C5 excluye bindings no disponibles; C7 valida región; C8 prefiere menor costo; C10 materializa los pasos; C12 entrega al backend.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Etapa sin salida comprobable | marcar traza incompleta y detener si es material |
| Espacio factible vacío | `NO_FEASIBLE_PLAN` |
| Handoff rechazado | evento posterior, no falsificar C12 PASS |

## Relaciones y límites

C0–C12 se inserta en F4 del backend AC-HIA. MTC aporta subgrafo/estado; no aporta esta numeración.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/13_pipeline_y_maquina_de_estados.md`: pipeline y estado.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Las 13 etapas tienen artefacto y gate.
- La autoría local de la numeración es explícita.
- Hay salida terminal en inviabilidad.
