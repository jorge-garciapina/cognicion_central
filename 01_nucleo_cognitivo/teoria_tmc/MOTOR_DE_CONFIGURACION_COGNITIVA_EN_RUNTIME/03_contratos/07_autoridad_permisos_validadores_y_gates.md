# Autoridad, permisos, validadores y gates

**ID:** `MCCR-CON-GATES-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Un gate detiene el flujo hasta que una condición observable pasa. Autoridad y permisos se resuelven antes de la ejecución; un validador no puede conceder lo que la autoridad no permite.

## Responsabilidad

Este documento es responsable de:

- catálogo de gates MCCR
- composición de veredictos
- escalamiento humano

No es responsable de:

- simular consentimiento
- usar PASS parcial como aprobación global
- persistir porque una herramienta puede escribir

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| AUTHORITY_RESOLUTION | quién puede decidir | REQUIRED |
| PERMISSION_SNAPSHOT | qué puede hacerse | REQUIRED |
| VALIDATOR_RESULTS | V0–V8 y dominio | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Resolver autoridad y alcance.
2. Verificar permisos por acción/destino.
3. Asignar validadores a cada gate.
4. Evaluar `PASS`, `FAIL`, `UNKNOWN`, `NOT_APPLICABLE`.
5. Bloquear en FAIL/UNKNOWN indispensable.
6. Solicitar aprobación humana en gates reservados.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| GATE_REPORT | estado y evidencia | MCCR |
| HUMAN_REVIEW_REQUEST | decisión requerida | MCCR |
| AUTHORIZATION_BLOCK | acción prohibida | MCCR |

## Especificación

Gates mínimos:

| Gate | Momento | Requisito |
|---|---|---|
| G0 | admisión | comando/resultado interpretables |
| G1 | C1 | autoridad y alcance |
| G2 | C2 | capacidad/permiso verificables |
| G3 | C5/C7 | factibilidad dura |
| G4 | C11 | plan completo y prevalidado |
| G5 | C12 | handoff aceptado |
| G6 | post-ejecución | resultado clasificado y válido |
| G7 | reintegración | persistencia/estado autorizados |

Los validadores AC-HIA V0–V8 se reutilizan por referencia. Los validadores de dominio —por ejemplo ACCD región/codominio— se añaden sin reemplazarlos.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Capacidad técnica no equivale a permiso.
- Un gate humano no puede autoaprobarse.

## Ejemplo operativo

El plan genera un borrador efímero con G1/G2/G4 PASS. Guardarlo en el Registro requiere G7 humano; que el host tenga escritura no satisface ese gate.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Validador ausente indispensable | bloquear o implementarlo con autorización |
| Veredictos contradictorios | aplicar alcance/precedencia y escalar |
| Gate omitido | invalidar transición |

## Relaciones y límites

AC-HIA aporta autoridad, permisos y V0–V8; MCCR los inserta en la topología del plan.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Los gates tienen momento y requisito.
- Permiso y capacidad se distinguen.
- La revisión humana no se simula.
