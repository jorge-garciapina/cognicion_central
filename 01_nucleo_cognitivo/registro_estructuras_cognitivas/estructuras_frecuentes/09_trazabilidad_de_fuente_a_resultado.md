# EC-FREQ-009 — Trazabilidad de fuente a resultado

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `9 de 10`  
**Frecuencia:** `90 / 760 unidades únicas (11.8%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** reconstruir la genealogía de una afirmación, decisión, transformación o salida  
**Familias candidatas:** `Método + Diseño + Marco de evaluación`  

## Definición

La trazabilidad de fuente a resultado conserva una cadena explícita entre los materiales de origen, las unidades extraídas, las decisiones y transformaciones intermedias, y la salida producida.

No es acumulación de citas. Debe mostrar qué aportó cada fuente, dónde se usó, qué cambió durante el proceso y qué parte del resultado es inferencia.

## Firma estructural

```text
FUENTE
  → unidad extraída / idea / claim
  → función local o decisión
  → transformación / ensamblaje
  → salida / manifestación
  → evidencia / validación

metadatos: ID + versión + origen + estado + peso o relevancia
```

## Funcionamiento

1. Identifica y versiona portadores.
2. Extrae unidades con dirección precisa.
3. Registra origen, autoridad y estado.
4. Declara la función local de cada unidad.
5. Conserva decisiones de selección, exclusión y transformación.
6. Enlaza cada parte de la salida con sus antecedentes.
7. Separa fuentes, duplicados, inferencias y evidencia posterior.
8. Permite auditoría, corrección y reconstrucción.

## Invariantes

- Existe al menos una relación resoluble entre origen y destino.
- Las unidades tienen identidad suficiente.
- Se distingue fuente de inferencia.
- Versiones y transformaciones relevantes permanecen visibles.
- Los duplicados no cuentan como corroboración independiente.
- Un tercero puede reconstruir el recorrido con la información declarada.

## Dominio de variación

Pueden variar granularidad, formato, pesos, vocabulario, profundidad histórica, número de fuentes y sistema de IDs. La identidad se pierde si las referencias no resuelven, si se cita un documento completo sin localizar su aporte o si se borra una transformación intermedia.

## Ejemplos localizados

### 1. Trazabilidad conceptual con pesos

El registro `trazabilidad-conceptual.md` de [`ART_trazabilidad-conceptual.txt`](../../../02_metodos_y_herramientas/trazabilidad/ART_trazabilidad-conceptual.txt) descompone una definición en unidad de destino, texto consolidado, ideas fuente, origen, función local, peso y estado de formalización.

### 2. Registro físico de archivos

[`REGISTRO_DE_ARCHIVOS.md`](../../../00_gobierno/registros/REGISTRO_DE_ARCHIVOS.md) conserva ID, ruta anterior, ruta vigente, clase, autoridad, ciclo, representación, dependencias, decisiones y SHA-256.

### 3. Jerarquía de evidencia

[`Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf`, p. 35](../../arquitecturas/Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf) encadena fuente, unidad trazada, claim/nodo, manifestación, observación, feedback, evidencia validada, corrección y nueva versión.

### 4. BÚSQUEDA_COGNITIVA

[`BUSQUEDA_COGNITIVA_v0_1_0.md`](../../../03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md) exige carrier, address, versión, autoridad, ciclo, firmas reconstruidas, correspondencias, contradicciones, duplicados e inferencias.

### 5. ACCD

La arquitectura de Instancias Contextuales enlaza modelo base, región, caso, adaptador, codominio y manifestación, permitiendo trazabilidad hacia atrás y hacia adelante.

## Relaciones con otras estructuras frecuentes

- Recorre pipelines y transiciones de estado.
- Usa grafos para representar dependencias.
- Registra correspondencias de mediación y analogía.
- Permite auditar qué módulo produjo una salida.
- Separa identidad de cada versión y sus variaciones.

## Validación

Pasa si una afirmación o componente de salida puede remontarse a fuente, decisión y transformación, y si las referencias siguen resolviendo. Falla con citas decorativas, pesos sin origen, rutas rotas o inferencias presentadas como texto fuente.

## Lectura de frecuencia

La firma apareció en 90 unidades y siete áreas; 24 coincidencias cubrieron sus cinco indicadores. La frecuencia exacta es sensible a que algunos documentos trazan relaciones sin usar la palabra “trazabilidad”. La confianza cualitativa es alta por su formalización explícita y centralidad gubernamental.

## Proyección portable

```yaml
traceability_chain:
  source_units: []
  extracted_units: []
  decisions: []
  transformations: []
  output_units: []
  evidence: []
  inferred_elements: []
  duplicates: []
  versions: []
```

