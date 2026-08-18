# Preguntas abiertas

Una decisión provisional no elimina una pregunta. Cada entrada conserva impacto, alternativas, evidencia requerida, responsable y archivos dependientes.

| ID | Pregunta | Alternativas vivas | Evidencia necesaria | Dependientes | Estado |
|---|---|---|---|---|---|
| `Q-MRRE-001` | ¿Qué tipología mínima describe esqueletos sin imponer clases? | taxonomía abierta; tipos emergentes; composición múltiple | corpus heterogéneo y casos negativos | taxonomía, inferer | `OPEN` |
| `Q-MRRE-002` | ¿Qué prueba basta para equivalencia estructural? | contractual; topológica; funcional; híbrida | reinstanciaciones y rupturas de analogía | selector, binding | `OPEN` |
| `Q-MRRE-003` | ¿Dónde termina función proyectada y empieza intención psicológica? | abstención; perfil de evidencia; inferencia graduada | estudios con evidencia independiente | retroconstrucción textual | `OPEN` |
| `Q-MRRE-004` | ¿Cómo actualizar confianza al triangular modalidades? | bayesiana; reglas de precedencia; lógica paraconsistente | corpus multimodal con contradicciones | triangulación | `OPEN` |
| `Q-MRRE-005` | ¿Qué puede afirmarse sobre `G_A` sin medición receptoral? | riesgo proyectado; simulación tipada; abstención | perfiles y observación receptoral | MTC, PIEA, aprendizaje | `OPEN` |
| `Q-MRRE-006` | ¿Qué métricas topológicas son útiles sin fetichizar scores? | rutas; cut-sets; centralidad situada; cobertura contractual | validación causal y multicorpus | métricas, ASIOO | `OPEN` |
| `Q-MRRE-007` | ¿Cuándo una regularidad aprendida puede proponer un invariante? | umbral multicorpus; falsación; revisión experta | casos positivos/negativos y revalidación | registro de invariantes | `OPEN` |
| `Q-MRRE-008` | ¿Cómo representar correspondencias intermodales sin traducir todo a texto? | grafo multimodal; adapters; alineación temporal | corpus con anotación por modalidad | multimodalidad | `OPEN` |
| `Q-MRRE-009` | ¿Qué granularidad debe abrirse hasta palabra? | perezosa por riesgo; siempre; por consulta | costo/beneficio y casos como “succión” | segmentador | `OPEN` |
| `Q-MRRE-010` | ¿Cómo versionar cambios de fuente que invalidan arquitecturas derivadas? | invalidación transitiva; revalidación selectiva | run logs y grafos de dependencias | trace, regression | `OPEN` |

## Protocolo de cierre

Una pregunta sólo pasa a `RESOLVED_CANDIDATE` cuando existe decisión D1–D10, evidencia enlazada y matriz de impacto. Sólo la autoridad humana puede promoverla a `RESOLVED_CANONICAL`; nueva evidencia puede devolverla a `REVALIDATION_REQUIRED`.

## Cómo trabajar una pregunta

Convierte cada pregunta en objeto con decisión bloqueada, alternativas, evidencia necesaria, propietario y condición de cierre. Al recibir evidencia ejecuta [MRRE-PROC-FEEDBACK](../03_protocolos_operacionales/06_feedback_y_actualizacion.md); no edites silenciosamente el kernel.

```yaml
open_question: {question_id: OQ-MRRE-..., blocks: [], alternatives: [], evidence_needed: [], owner: HUMAN, status: OPEN}
```

La decisión sigue [SRC-MCCR-AUTH](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/07_autoridad_permisos_validadores_y_gates.md); las fuentes se citan desde [MRRE-BIB-CC](07_bibliografia_cognicion_central.md).
