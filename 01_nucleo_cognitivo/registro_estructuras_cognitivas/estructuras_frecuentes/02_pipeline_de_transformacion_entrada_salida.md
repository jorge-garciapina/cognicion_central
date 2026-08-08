# EC-FREQ-002 — Pipeline de transformación entrada-salida

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `2 de 10`  
**Frecuencia:** `225 / 760 unidades únicas (29.6%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** convertir entradas tipificadas en salidas mediante etapas controlables  
**Familias candidatas:** `Plan + Método + Diseño`  

## Definición

Un pipeline de transformación es una cadena organizada de etapas que recibe una entrada, produce cambios intermedios observables y entrega una salida bajo reglas de orden, contratos, validación y manejo de fallos.

Su identidad no depende del material procesado. Puede operar sobre datos, documentos, señales, decisiones, estructuras cognitivas, guiones o acciones.

## Firma estructural

```text
ENTRADA TIPIFICADA
  → ETAPA 1 / transformación local
  → ESTADO INTERMEDIO
  → ETAPA 2 / transformación local
  → ...
  → VALIDACIÓN
  → SALIDA TIPIFICADA

transversal: control + observabilidad + manejo de fallos
```

## Funcionamiento

1. Declara qué admite y qué rechaza la entrada.
2. Divide una transformación compleja en operaciones locales.
3. Define el orden y los contratos entre etapas.
4. Conserva estados intermedios suficientes para inspección o recuperación.
5. Valida localmente y al final.
6. Detiene, reintenta, corrige o escala cuando falla una etapa.
7. Produce una salida cuya pertenencia puede comprobarse.

El pipeline vuelve ejecutable y auditable un proceso que, de otro modo, sólo podría narrarse como “hacer algo con una entrada”.

## Invariantes

- Existen entrada y salida distinguibles.
- Hay al menos una transformación intermedia.
- El flujo y el orden están declarados.
- Las etapas tienen responsabilidades locales.
- Existe una condición de éxito o falla.
- Puede reconstruirse cómo la salida deriva de la entrada.

## Dominio de variación

Pueden variar el número de etapas, ejecución secuencial o paralela, ramificaciones, reintentos, estado persistido, automatización, granularidad, formatos y validadores. Deja de ser el mismo pipeline si se rompe el contrato extremo o desaparece la trayectoria de transformación.

## Ejemplos localizados

### 1. Definición explícita y modelo AIDA

[`pipeline-v2.pdf`, p. 1](../../../04_conocimiento_y_contexto/memoria_conceptual/pipelines_cognitivos/pipeline-v2.pdf) define entrada, etapas, conexiones, estado, salidas, contratos, restricciones, control, observabilidad, validación y manejo de errores. AIDA aparece como trayectoria Atención-Interés-Deseo-Acción.

### 2. Cognición como sistema

[`maquinas-cognitivas.txt`, sección 2.3](../../teoria_tmc/maquinas-cognitivas.txt) representa cognición como entradas del entorno y estado interno, transformaciones de representación/selección/inferencia/control, y salidas de creencias, decisiones, acciones o aprendizaje.

### 3. Ingeniería de Estructuras Cognitivas

[`ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt`](../../../02_metodos_y_herramientas/ingenieria_de_estructuras_cognitivas/ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt) encadena intención, normalización, clasificación, búsqueda, selección, ensamblaje, validación y persistencia como artefacto.

### 4. BÚSQUEDA_COGNITIVA

[`BUSQUEDA_COGNITIVA_v0_1_0.md`](../../../03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md) separa preparación del corpus y ejecución de consulta: portadores, manifestaciones, proyección estructural, candidatos, comparación, ranking, trazabilidad y resultados.

### 5. ACCD

[`base_teorica_ecuacion_de_protocolo_ACCD.md`](../../../03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md) condensa el tramo productivo en estructura cognitiva + instancia contextual + realización + protocolo = manifestación codominial.

## Relaciones con otras estructuras frecuentes

- Cada etapa puede ser un módulo compuesto.
- Los estados intermedios realizan transición de estados.
- Los contratos entre etapas son superficies de mediación.
- Un grafo permite representar ramas y dependencias no lineales.
- La trazabilidad registra la genealogía de la salida.

## Validación

Un pipeline pasa si dos ejecuciones comparables permiten rastrear entradas, estados, decisiones y salidas, y si las fallas tienen tratamiento definido. Falla cuando una etapa es una caja negra, el orden es accidental o la validación sólo comprueba apariencia final.

## Antipatrones

- Lista de pasos sin contratos.
- Flujo que pierde procedencia.
- Salida aceptada aunque no pertenezca al codominio.
- Etapas que duplican o contradicen responsabilidades.
- Automatización sin puntos de detención y recuperación.

## Lectura de frecuencia

La firma apareció en 225 unidades y las coincidencias de máxima cobertura fueron numerosas. La confianza estructural y el conteo comparativo son altos, aunque documentos muy extensos pueden realizar varios pipelines internos y sólo cuentan una vez.

## Proyección portable

```yaml
pipeline:
  input_contract:
  stages:
    - id:
      role:
      consumes:
      produces:
      validates:
      on_failure:
  output_contract:
  observability:
  stop_conditions:
```
