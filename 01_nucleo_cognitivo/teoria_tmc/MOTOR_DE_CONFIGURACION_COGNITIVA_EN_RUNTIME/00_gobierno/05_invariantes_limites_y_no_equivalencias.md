# Invariantes, límites y no equivalencias

**ID:** `MCCR-GOV-INV-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

La utilidad de MCCR depende menos de generar muchos planes que de preservar fronteras: autoridad, identidad, tipos, permisos, procedencia y separación entre plan y ejecución.

## Responsabilidad

Este documento es responsable de:

- invariantes del paquete
- no equivalencias conceptuales
- condiciones de detención

No es responsable de:

- convertir preferencias en prohibiciones
- definir invariantes de dominios que no han sido recuperados
- relajar reglas para producir siempre una respuesta

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| CANDIDATE_PLAN | plan a revisar | REQUIRED |
| GOVERNING_RULES | canon, autoridad y dominio | REQUIRED |
| EVIDENCE_MAP | fuente de cada restricción | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Comprobar autoridad y alcance.
2. Comprobar identidad, tipos, puertos y dependencias.
3. Comprobar capacidades, permisos, gates y persistencia.
4. Rechazar si cualquier regla dura falla.
5. Evaluar preferencias sólo tras la validez.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| VALIDATION_VERDICT | VALID o INVALID con evidencia | MCCR |
| VIOLATION_SET | reglas, rutas y responsables | MCCR |

## Especificación

Invariantes nucleares:

```text
human_sovereignty
explicit_scope_and_permissions
source_to_plan_traceability
identity_preservation
versioned_change
system_application_separation
feedback_is_not_truth
explicit_memory_scope
valid_before_optimal
no_silent_hard_constraint_relaxation
real_capabilities_only
```

No equivalencias:

```text
MCCR ≠ AC-HIA backend
MCCR ≠ Orquestador global
MCCR ≠ Registro
MCCR ≠ solver único
MCCR ≠ runtime
EXECUTION_PLAN ≠ ejecución ≠ resultado
EXECUTION_PLAN ≠ IDENTITY_SELECTION (relación no demostrada)
disponible ≠ permitido ≠ seleccionado
NO_FEASIBLE_PLAN ≠ error técnico genérico
```

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Una capacidad no expuesta se clasifica `UNAVAILABLE` o `UNKNOWN`, nunca se presume.
- Un plan inválido no se rescata por tener mejor puntuación.

## Ejemplo operativo

Un plan de video usa un generador visual no expuesto. Aunque su calidad prevista sea alta, falla disponibilidad. Si el objetivo exige el video completo, no es válido; si acepta guion, debe construirse otro plan con un resultado distinto ya autorizado.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Confusión plan/resultado | rechazar handoff |
| Capacidad presumida | marcar `UNKNOWN` y bloquear si es indispensable |
| Feedback usado como verdad | clasificarlo como evento/evidencia revisable |

## Relaciones y límites

Estas reglas especializan los invariantes canónicos y los contratos AC-HIA sin reemplazarlos.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Las no equivalencias críticas están explícitas.
- Todo rechazo es trazable.
- No hay mecanismo de relajación silenciosa.
