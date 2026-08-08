# REGISTRO DE ESTRUCTURAS COGNITIVAS

**ID:** `REG-EC-001`  
**Versión:** `0.1.0`  
**Fecha de corte:** `2026-08-08`  
**Autoridad:** `A3`  
**Estado del registro:** `LIVE`  
**Estado de las entradas:** `PROVISIONAL`  
**Origen:** comando humano ejecutado mediante `BÚSQUEDA_COGNITIVA v0.1.0`  

## 1. Función

Este registro inventaría estructuras cognitivas reutilizables y mantiene separadas tres entidades:

```text
archivo o artefacto = portador
fragmento o registro = manifestación
organización reconstruible = estructura cognitiva
```

Su unidad primaria no es un archivo. Es una estructura con identidad, rol operativo y proyección portable que satisface CS1-CS4.

## 2. Corpus del primer corte

La búsqueda examinó todos los archivos persistentes disponibles antes de generar este registro:

```yaml
corpus_snapshot:
  physical_files: 171
  markdown: 97
  txt: 53
  pdf: 18
  cjs: 2
  owl: 1
  artifact_carriers_ndjson: 9
  artifact_internal_records: 816
  raw_document_units: 978
  unique_exact_content_units: 760
  exact_duplicate_groups: 145
  parse_errors: 0
  pdf_errors: 0
```

Los nueve artefactos NDJSON se descompusieron en sus registros internos. Después se colapsaron unidades con contenido textual normalizado idéntico. Los PDF se extrajeron por página y las páginas utilizadas como evidencia representativa se revisaron visualmente.

## 3. Qué significa frecuencia

La frecuencia es **frecuencia documental estructural**, no número bruto de palabras.

Una unidad cuenta cuando una ventana de hasta 2,200 caracteres, con solapamiento de 700, satisface simultáneamente los componentes obligatorios y el umbral de una firma. Esto reduce coincidencias producidas por términos dispersos en documentos largos.

Las estructuras se solapan: una misma unidad puede realizar jerarquía, pipeline, trazabilidad y grafo. Por ello, los conteos no suman 760 ni definen categorías exclusivas.

## 4. Criterio de selección

Se probaron 16 firmas candidatas. Una estructura entró en este primer registro cuando:

1. calificó como estructura cognitiva mediante CS1-CS4;
2. apareció en al menos 90 de las 760 unidades únicas;
3. apareció en al menos seis áreas principales;
4. conservó un rol operativo diferenciable;
5. una auditoría manual encontró ejemplos fuertes y límites declarables.

El corte produce exactamente diez entradas. `Proyección de intención a ejecución gobernada`, con 76 unidades, es el primer candidato bajo el umbral y queda para una ampliación futura.

## 5. Ranking del corte

| Rango | ID | Estructura | Unidades únicas | Proporción | Áreas | Estado |
|---:|---|---|---:|---:|---:|---|
| 1 | `EC-FREQ-001` | Jerarquía de capas y estratos | 340 | 44.7% | 7 | PROVISIONAL |
| 2 | `EC-FREQ-002` | Pipeline de transformación entrada-salida | 225 | 29.6% | 7 | PROVISIONAL |
| 3 | `EC-FREQ-003` | Mediación entre estructuras heterogéneas | 219 | 28.8% | 7 | PROVISIONAL |
| 4 | `EC-FREQ-004` | Transición de estados | 151 | 19.9% | 6 | PROVISIONAL |
| 5 | `EC-FREQ-005` | Composición modular de capacidades | 126 | 16.6% | 7 | PROVISIONAL |
| 6 | `EC-FREQ-006` | Mapeo analógico y transferencia estructural | 110 | 14.5% | 7 | PROVISIONAL |
| 7 | `EC-FREQ-007` | Identidad preservada bajo variación | 105 | 13.8% | 7 | PROVISIONAL |
| 8 | `EC-FREQ-008` | Representación relacional en grafo | 103 | 13.6% | 6 | PROVISIONAL |
| 9 | `EC-FREQ-009` | Trazabilidad de fuente a resultado | 90 | 11.8% | 7 | PROVISIONAL |
| 10 | `EC-FREQ-010` | Instanciación contextual y realización | 90 | 11.8% | 6 | PROVISIONAL |

## 6. Mapa de composición

Las diez estructuras pueden organizarse como un sistema:

```text
INTENCIÓN O NECESIDAD
  → jerarquía sitúa el nivel de operación
  → identidad/variación fija qué debe preservarse
  → grafo representa partes y relaciones
  → instanciación configura un caso
  → mediación acopla fuente y destino
  → composición modular selecciona capacidades
  → pipeline ordena transformaciones
  → transición de estados describe el cambio
  → trazabilidad enlaza fuentes, decisiones y salidas
  → analogía transfiere la forma a otro dominio
```

Este mapa es una integración inferida. No obliga a usar las diez estructuras en todos los procesos.

## 7. Contrato mínimo de una entrada

```yaml
cognitive_structure_record:
  id:
  name:
  status:
  authority:
  dominant_role:
  family_candidates: []
  frequency_snapshot:
  definition:
  signature:
    nodes: []
    relations: []
    sequence: []
  invariants: []
  variation_domain: []
  operation:
  examples: []
  relations_to_other_structures: []
  validation: []
  failure_modes: []
  provenance: []
  uncertainty:
```

## 8. Autoridad y límites

- La orden humana autoriza su integración al núcleo y su uso operativo.
- La frecuencia no demuestra verdad, calidad ni precedencia.
- Las entradas son síntesis `A3 / PROVISIONAL`, no fuentes `A1`.
- El canon no fue modificado; una promoción canónica requiere un comando separado.
- La repetición dentro de memorias o artefactos puede reflejar concentración histórica de un proyecto. Los conteos deben leerse junto con dispersión por áreas y auditoría cualitativa.
- Una nueva fotografía puede modificar rangos y conteos sin borrar las versiones anteriores.

## 9. Archivos de entrada

- [`EC-FREQ-001`](estructuras_frecuentes/01_jerarquia_de_capas_y_estratos.md)
- [`EC-FREQ-002`](estructuras_frecuentes/02_pipeline_de_transformacion_entrada_salida.md)
- [`EC-FREQ-003`](estructuras_frecuentes/03_mediacion_entre_estructuras_heterogeneas.md)
- [`EC-FREQ-004`](estructuras_frecuentes/04_transicion_de_estados.md)
- [`EC-FREQ-005`](estructuras_frecuentes/05_composicion_modular_de_capacidades.md)
- [`EC-FREQ-006`](estructuras_frecuentes/06_mapeo_analogico_y_transferencia_estructural.md)
- [`EC-FREQ-007`](estructuras_frecuentes/07_identidad_preservada_bajo_variacion.md)
- [`EC-FREQ-008`](estructuras_frecuentes/08_representacion_relacional_en_grafo.md)
- [`EC-FREQ-009`](estructuras_frecuentes/09_trazabilidad_de_fuente_a_resultado.md)
- [`EC-FREQ-010`](estructuras_frecuentes/10_instanciacion_contextual_y_realizacion.md)

## 10. Actualización futura

Cada nueva búsqueda debe conservar fecha, versión del método, tamaño del corpus, reglas de deduplicación, firmas, resultados, falsos positivos auditados y huellas. Los cambios de identidad de una estructura requieren versión mayor; los cambios de frecuencia sólo actualizan su fotografía estadística.

