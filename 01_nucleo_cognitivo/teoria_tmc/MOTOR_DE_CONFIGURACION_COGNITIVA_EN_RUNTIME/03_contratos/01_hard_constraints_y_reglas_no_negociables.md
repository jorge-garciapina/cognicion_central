# Hard constraints y reglas no negociables

**ID:** `MCCR-CON-HARD-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Una hard constraint es una condición cuya violación invalida el candidato. Su fuerza proviene de autoridad, seguridad, identidad o contrato, no de que parezca importante al planificador.

## Responsabilidad

Este documento es responsable de:

- tipos, precedencia y verificación de reglas duras
- evidencia de cumplimiento
- prohibición de relajación silenciosa

No es responsable de:

- transformar preferencias en reglas duras
- resolver conflictos de soberanía por puntuación
- ofrecer degradación que cambie el objetivo

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| HARD_CONSTRAINT_SET | reglas compiladas C4 | REQUIRED |
| PLAN_CANDIDATE | configuración a comprobar | REQUIRED |
| EVIDENCE | fuentes y snapshot | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Ordenar reglas por autoridad.
2. Ejecutar prueba observable por candidato.
3. Registrar PASS/FAIL/UNKNOWN y evidencia.
4. Tratar UNKNOWN indispensable como bloqueo.
5. Rechazar candidato ante cualquier FAIL.
6. Si todos fallan, emitir inviabilidad.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| HARD_VALIDATION_REPORT | matriz regla×candidato | MCCR |
| VALID_CANDIDATE_SET | sólo candidatos PASS | MCCR |

## Especificación

Familias: plataforma/seguridad; autoridad; alcance/permisos; persistencia; identidad/invariantes; tipos/puertos/codominio; dependencias/capacidades; orden/gates; resultado mínimo.

```yaml
hard_verdict:
  constraint_id:
  candidate_id:
  status: PASS | FAIL | UNKNOWN
  evidence_refs: []
  violated_path:
  consequence: REJECT | BLOCK_AND_VERIFY
```

No existe `RELAX_AUTOMATICALLY`. Una alternativa con otro resultado sólo es posible si el resultado esperado ya incluía esa variante o el humano lo autoriza mediante nuevo comando.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.

## Ejemplo operativo

“No persistir” es hard. Un candidato que escribe el guion al Registro falla aunque sea más conveniente. Un candidato efímero pasa esa regla.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Regla sin fuente | no elevar a hard; revisar compilación |
| UNKNOWN indispensable | verificar o detener |
| Conflicto hard irresoluble | `NO_FEASIBLE_PLAN`/decisión humana |

## Relaciones y límites

C4 compila; C5 poda; C7 valida. Los validadores AC-HIA aportan gates complementarios.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/02_validadores.md`: V0–V8.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Cada regla tiene autoridad y prueba.
- FAIL excluye siempre.
- No hay relajación automática.
