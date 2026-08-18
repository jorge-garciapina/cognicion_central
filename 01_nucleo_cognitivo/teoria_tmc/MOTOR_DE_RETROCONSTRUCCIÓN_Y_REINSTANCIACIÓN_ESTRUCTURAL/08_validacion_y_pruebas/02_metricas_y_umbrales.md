# Métricas y umbrales

Los umbrales son baselines candidatos `0.1.0`, revisables por corpus. Ninguna métrica agregada sobreescribe una regla dura.

| ID | Métrica/regla | Unidad/ventana | Umbral candidato | Limitación |
|---|---|---|---|---|
| `MET-PORT` | claims observacionales con locator / claims observacionales | proporción por run | `1.00` | locator no prueba interpretación |
| `MET-COV` | peso de unidades/relaciones explicadas / peso total | por resolución | `≥0.90` fixture textual | depende de anotación |
| `MET-TRACE-F` | outputs fuertes alcanzables desde source | proporción | `1.00` | enlaces pueden ser semánticamente débiles |
| `MET-TRACE-B` | claims fuertes que llegan a fuente/decisión | proporción | `1.00` | no prueba suficiencia |
| `MET-REL` | relaciones con tipo, contexto y evidencia | proporción | `≥0.95`, críticas `1.00` | tipo incorrecto aún cuenta sin V&V |
| `MET-CONS` | contradicciones duras no registradas | conteo | `0` | registrar no resuelve |
| `MET-PARS` | complejidad relativa bajo cobertura/invariantes iguales | comparación | no dominada | no favorece simplicidad destructiva |
| `MET-ALT` | alternativas materialmente distintas conservadas | conteo | `≥2` si evidencia no discrimina | cantidad no garantiza calidad |
| `MET-CAL` | error entre confidence y frecuencia empírica | Brier/ECE multicorpus | baseline pendiente | requiere corpus grande |
| `MET-PRES` | invariantes críticos preservados | proporción por reinstanciación | `1.00` | no cubre utilidad contextual |
| `MET-INV` | invenciones prohibidas | conteo | `0` | depende de trace exhaustivo |
| `MET-CAUS` | edges causales con mecanismo/alternativas/evidencia | proporción | `1.00` | evidencia puede ser insuficiente |
| `MET-UTIL` | requisitos de consumidor satisfechos | contrato | todos los hard; soft reportados | aceptación no implica verdad |
| `MET-COST` | tiempo/tokens/módulos vs presupuesto | por run | dentro del plan o replan | costo bajo no implica calidad |
| `MET-RISK` | riesgos críticos sin mitigación | conteo | `0` | taxonomía puede estar incompleta |

## Gate métrico

```text
PASS_METRICS = hard_invariants_pass
               AND MET-TRACE-F = 1
               AND MET-TRACE-B = 1
               AND MET-INV = 0
               AND configured_thresholds_pass
```

`PASS_METRICS` no autoriza promoción. La ventana, corpus, versión del medidor y datos ausentes se reportan siempre. `PAT-COG-120` exige declarar pérdidas de la representación métrica.

## Uso operativo

Cada métrica enlaza artefacto, propósito, fórmula, corpus, versión, threshold, ausencia y falso positivo. Antes de agregarla se verifica que no sustituya un invariante duro. Los resultados se incorporan a [MRRE-SCHEMA-RESULT](../02_contratos_y_schemas/mrre_result.schema.yaml) y se interpretan con [MRRE-ACCEPTANCE](../01_kernel_estable/06_criterios_de_aceptacion_y_falsacion.md). El patrón fuente se resuelve desde [SRC-CAT-MRRE-03](../05_acervo_estructural/CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_3_0.md).
