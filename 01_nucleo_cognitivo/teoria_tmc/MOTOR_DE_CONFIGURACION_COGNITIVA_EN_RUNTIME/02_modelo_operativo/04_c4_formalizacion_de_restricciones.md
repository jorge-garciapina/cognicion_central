# C4: formalización de restricciones

**ID:** `MCCR-OPS-C4-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

C4 transforma reglas lingüísticas y contractuales en criterios comprobables sin pedir formalización técnica al humano y sin inventar prioridades.

## Responsabilidad

Este documento es responsable de:

- clasificación hard/soft
- procedencia, prioridad y prueba de cada regla
- detección de contradicciones

No es responsable de:

- negociar reglas duras sin autorización
- confundir preferencia intensa con prohibición
- ocultar inferencias del compilador

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| RESOLVED_NEED | objetivo/autoridad/resultado | REQUIRED |
| CANDIDATE_REGION | tipos y dependencias | REQUIRED |
| SOURCE_RULES | canon, dominio y comando | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Extraer reglas explícitas y heredadas.
2. Clasificar fuente y autoridad.
3. Formular una prueba observable y alcance.
4. Separar hard constraints de objetivos blandos.
5. Detectar contradicciones y precedencia.
6. Emitir modelo con incertidumbres y decisiones abiertas.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| CONSTRAINT_MODEL | reglas tipadas y trazables | MCCR |
| CONFLICT_REPORT | contradicciones y resolución/decisión | MCCR |

## Especificación

```yaml
constraint:
  id:
  kind: HARD | SOFT
  statement:
  source_ref:
  authority_level:
  applies_to: []
  observable_test:
  failure_effect:
  inferred: false
  confidence:
```

Orden típico de reglas duras: plataforma/seguridad; autoridad humana; alcance/permisos/persistencia; identidad e invariantes; tipos y codominio; dependencias/capacidades indispensables; gates. Las preferencias declaran orden o niveles, no números ficticios.

Ejemplo de compilación: “sólo borrador, no lo guardes” produce `persistence=EPHEMERAL` como hard constraint y `review_gate=HUMAN` antes de cualquier escritura.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Toda regla dura tiene fuente y prueba.
- Una inferencia reversible no se etiqueta como mandato humano.

## Ejemplo operativo

ACCD aporta “valores dentro de región” y “cada valor activo tiene efecto”. El humano aporta “sin persistir”. C4 crea tres pruebas independientes; no exige al humano escribirlas.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Contradicción dura con precedencia resoluble | aplicar precedencia y registrar |
| Contradicción al mismo nivel | `OPEN_DECISION` o `NO_FEASIBLE_PLAN` |
| Regla no observable | reformular o declarar no verificable |

## Relaciones y límites

C4 consume normalización AC-HIA y contratos de dominio; alimenta C5 y C7.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md`: NORMALIZED_COMMAND_GRAPH.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/protocolo-videos-cortos.md`: realización video corto y efecto de valores.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Hard/soft están separados.
- Cada regla tiene prueba.
- Las contradicciones no se borran.
