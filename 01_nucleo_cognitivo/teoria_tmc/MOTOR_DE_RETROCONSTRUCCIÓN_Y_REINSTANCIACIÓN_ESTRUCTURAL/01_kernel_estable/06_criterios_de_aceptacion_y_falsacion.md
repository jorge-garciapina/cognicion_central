# Criterios de aceptación y falsación

## Cuatro preguntas distintas

1. **Verificación:** ¿el artefacto cumple schemas, invariantes y contratos?
2. **Validación:** ¿sirve al propósito y consumidor declarados?
3. **Falsación local:** ¿qué evidencia contradice una relación o arquitectura?
4. **Evaluación receptoral:** ¿qué ocurrió en receptores bajo un método válido?

## Criterios por capa

| Criterio | Evidencia | Regla/umbral inicial | Falso positivo | Acción ante fallo |
|---|---|---|---|---|
| fidelidad al portador | spans/hash/ref | 100% claims observacionales trazables | normalización confundida con original | invalidar claims afectados |
| cobertura | unidades/relaciones explicadas | ≥0.90 en fixture; huecos explícitos | cobertura por relaciones triviales | revisar ponderación |
| consistencia relacional | tipos, guards, contextos | cero contradicción dura no registrada | resolver contradicción borrándola | restaurar conflicto |
| parsimonia | alternativas y complejidad | no existe candidata más simple con igual cobertura | preferir lo simple aunque pierda invariantes | mantener alternativa |
| trazabilidad | forward/backward queries | 100% claims fuertes | links sin semántica | bloquear promoción |
| diversidad de alternativas | modelos sobrevivientes | ≥2 cuando evidencia no discrimina | alternativas cosméticas | producir ruptura material |
| causalidad | evidencia/adapter MTC | ninguna arista causal sólo por secuencia | coherencia narrativa | degradar a asociación |
| preservación | diff | 100% invariantes críticos; 0 invención prohibida | score compensa ruptura | bloquear reinstanciación |
| utilidad | test de consumidor | contrato satisfecho | consumidor acepta salida incorrecta | reevaluar propósito |
| autoridad | gate y actor | 100% acciones críticas autorizadas | permiso implícito | `WAITING_HUMAN_DECISION` |

## Estados de salida

`ACCEPTED_CANDIDATE`, `PARTIAL`, `ALTERNATIVES_PENDING`, `FALSIFIED_LOCAL`, `REJECTED`, `WAITING_HUMAN_DECISION` y `REVALIDATION_REQUIRED`. `ACCEPTED_CANDIDATE` no significa canónico.

## Falsadores mínimos

- span o fuente que contradice un nodo atribuido;
- relación requerida que no aparece ni puede inferirse con la regla declarada;
- explicación alternativa más parsimoniosa con cobertura equivalente;
- cambio de orden que preserva claims pero destruye la función propuesta;
- reinstanciación que conserva vocabulario y rompe topología/función;
- evidencia receptoral incompatible con activación proyectada;
- dependencia o contexto donde la estructura deja de operar.

## Reingreso

La reinstanciación puede reingresar a retroconstrucción. Si el esqueleto reinstanciado no se recupera dentro de tolerancias, se revisan bindings, dominio de variación o la propia abstracción (`PAT-COG-082`). Reingreso pasado es evidencia, no prueba universal.

## Procedimiento de prueba

1. transforma cada criterio del `CASE_SPEC` en validator con evidencia esperada;
2. ejecuta schema/invariantes antes de métricas blandas;
3. aplica remoción, inversión, sustitución y alternativa rival;
4. registra `PASS/PARTIAL/FAIL/NOT_RUN` por prueba;
5. impide que un promedio compense fallo duro;
6. separa verificación, utilidad, suficiencia y autoridad;
7. declara corpus/dominio de todo umbral cuantitativo.

```yaml
validator_result:
  validator_id: V-CHAIN-REMOVAL
  artifact_ref: CH-01
  mutation: {operation: REMOVE, target: EDGE-03}
  expected_loss: "se pierde la mediación"
  observed_loss: "..."
  result: PASS
  scope: "fixture local"
```

La disciplina de V&V procede de [SRC-KI-11](../../../../04_conocimiento_y_contexto/memoria_conceptual/incubacion-conceptual/ingenieria/kernel-de-ingenieria-1-1.txt). Ejemplos concretos están en [CASE-MRRE-VACUUM § A5](../09_casos_y_ejemplos/aspiradora/DOSSIER_OPERATIVO.md#a5-chain-principal-y-pruebas) y [CASE-MRRE-MULTIMODAL § A8–A9](../09_casos_y_ejemplos/triangulacion_multimodal/DOSSIER_OPERATIVO.md#a8a9-pruebas-de-remoción-y-diff).
