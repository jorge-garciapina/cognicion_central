https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69f02862-0740-83e8-8585-9f714a4a66a8

# PROCESO DE CONVERSIÓN DE DEFINICIÓN A ARTEFACTO MATERIALIZABLE

## 0. Propósito del documento

Este documento describe, de forma autosuficiente, el proceso correcto para convertir una definición textual o Markdown en un **artefacto materializable** que represente un **grafo documental**.

El proceso sirve para tomar una definición estructurada —por ejemplo una dimensión con campos, valores, restricciones y relaciones internas— y transformarla en un conjunto de archivos JSON organizados en carpetas, listos para ser materializados desde un JSONL mediante un script como `materialize-src-from-jsonl.cjs`.

El objetivo es que una definición pueda convertirse en una estructura de grafo explícita, navegable, validable y compatible con herramientas posteriores como Cytoscape.

La conversión debe producir tres tipos de objetos internos:

```txt
graph/node/*
def/*
graph/edge/*
```

Pero estos nombres **no deben convertirse en carpetas físicas principales**. Son namespaces internos escritos dentro de cada archivo JSON mediante el campo `address`.

La regla central del proceso es:

```txt
La carpeta organiza físicamente.
El address interno clasifica semánticamente.
La arista explicita la relación.
El id absoluto evita colisiones.
```

---

## 1. Qué es un artefacto materializable

Un **artefacto materializable** es un archivo JSONL donde cada línea representa un archivo que será creado en una ruta específica.

Cada línea debe tener, como mínimo:

```json
{
  "path_rel": "ruta/fisica/del/archivo.json",
  "content": "contenido del archivo"
}
```

El campo `path_rel` indica dónde se materializará físicamente el archivo.

El campo `content` contiene el texto completo que se escribirá en ese archivo.

Ejemplo:

```json
{
  "path_rel": "grafo_de_regiones/grafo_ejemplo/campo_x/campo_x.json",
  "content": "{\n  \"address\": \"graph/node/grafo_de_regiones-grafo_ejemplo-campo_x\",\n  \"content\": { ... }\n}"
}
```

Al materializarlo, se crea:

```txt
grafo_de_regiones/
  grafo_ejemplo/
    campo_x/
      campo_x.json
```

Dentro del archivo físico aparece el objeto de grafo.

---

## 2. Distinción esencial: `path_rel` vs `address`

El proceso requiere separar dos planos.

### 2.1. `path_rel`

`path_rel` es la ruta física del archivo.

Responde a la pregunta:

```txt
¿Dónde se va a guardar este archivo dentro del proyecto materializado?
```

Ejemplo:

```txt
grafo_de_regiones/grafo_construccion_del_caso/construccion_conceptual/construccion_conceptual.json
```

La ruta física debe seguir la estructura conceptual de la definición.

### 2.2. `address`

`address` es la dirección interna del objeto grafo-documental.

Responde a la pregunta:

```txt
¿Qué tipo de objeto de grafo contiene este archivo?
```

Ejemplos:

```txt
graph/node/<id>
def/<id>
graph/edge/<id>
```

El `address` no define la carpeta física. Solo clasifica internamente el contenido.

### 2.3. Regla de separación

Correcto:

```txt
path_rel:
  grafo_de_regiones/grafo_x/campo_y/valor_z/valor_z.json

address:
  graph/node/grafo_de_regiones-grafo_x-campo_y-valor_z-valor_z
```

Incorrecto:

```txt
path_rel:
  grafo_de_regiones/grafo_x/graph/node/valor_z.json
```

No se deben materializar carpetas principales `graph/node`, `graph/edge` o `def`.

---

## 3. Error que este proceso evita

Una conversión incorrecta crea esta estructura:

```txt
grafo_de_regiones/
  grafo_x/
    graph/
      node/
      edge/
    def/
```

Esto es incorrecto para este método, porque confunde los namespaces internos del grafo con carpetas físicas.

La estructura correcta debe seguir la forma conceptual de la definición:

```txt
grafo_de_regiones/
  grafo_x/
    dimension_x.json
    def_dimension_x.json

    campo_a/
      campo_a.json
      def_campo_a.json

      valor_1/
        valor_1.json
        def_valor_1.json
        campo_a-has_value-valor_1.json

    campo_b/
      campo_b.json
      def_campo_b.json
```

Dentro de cada archivo `.json` aparece el `address` interno.

---

## 4. Estructura general de carpetas

La estructura física se construye a partir del recorrido conceptual de la definición.

Si la definición tiene esta forma:

```txt
dimension_x
  campo_a
    valor_1
    valor_2

  campo_compuesto_b
    campo_interno_b1
      valor_3
      valor_4
```

la estructura física debe ser:

```txt
grafo_de_regiones/
  grafo_x/
    dimension_x.json
    def_dimension_x.json
    aristas_dimension_x.json

    campo_a/
      campo_a.json
      def_campo_a.json
      aristas_campo_a.json

      valor_1/
        valor_1.json
        def_valor_1.json
        campo_a-has_value-valor_1.json

      valor_2/
        valor_2.json
        def_valor_2.json
        campo_a-has_value-valor_2.json

    campo_compuesto_b/
      campo_compuesto_b.json
      def_campo_compuesto_b.json
      aristas_campo_compuesto_b.json

      campo_interno_b1/
        campo_interno_b1.json
        def_campo_interno_b1.json
        campo_compuesto_b-has_internal_field-campo_interno_b1.json

        valor_3/
          valor_3.json
          def_valor_3.json
          campo_interno_b1-has_value-valor_3.json

        valor_4/
          valor_4.json
          def_valor_4.json
          campo_interno_b1-has_value-valor_4.json
```

La carpeta reproduce la forma de la definición. El contenido JSON declara el objeto grafo-documental.

---

## 5. Tipos de archivos

Una conversión correcta puede producir tres tipos de archivos físicos.

### 5.1. Archivo de nodo

Declara una entidad conceptual.

Ejemplo físico:

```txt
campo_a/campo_a.json
```

Contenido interno:

```json
{
  "address": "graph/node/grafo_de_regiones-grafo_x-campo_a",
  "content": {
    "id": "grafo_de_regiones-grafo_x-campo_a",
    "label": "campo_a",
    "type": "field_node",
    "definition_ref": "def/grafo_de_regiones-grafo_x-campo_a",
    "summary": "Resumen breve del campo."
  }
}
```

### 5.2. Archivo de definición

Declara la definición extensa de un nodo.

Ejemplo físico:

```txt
campo_a/def_campo_a.json
```

Contenido interno:

```json
{
  "address": "def/grafo_de_regiones-grafo_x-campo_a",
  "content": "Definición extensa del campo_a."
}
```

### 5.3. Archivo de arista

Declara una relación explícita entre dos nodos.

Ejemplo físico:

```txt
campo_a/valor_1/campo_a-has_value-valor_1.json
```

Contenido interno:

```json
{
  "address": "graph/edge/grafo_de_regiones-grafo_x-campo_a-has_value-grafo_de_regiones-grafo_x-campo_a-valor_1-valor_1",
  "content": {
    "id": "grafo_de_regiones-grafo_x-campo_a-has_value-grafo_de_regiones-grafo_x-campo_a-valor_1-valor_1",
    "from": "grafo_de_regiones-grafo_x-campo_a",
    "to": "grafo_de_regiones-grafo_x-campo_a-valor_1-valor_1",
    "type": "has_value",
    "rationale": "valor_1 es un valor declarado para campo_a."
  }
}
```

---

## 6. Regla de IDs absolutos para nodos

Los nodos no deben usar IDs cortos si esos IDs pueden repetirse en otros lugares.

Ejemplo incorrecto:

```json
{
  "address": "graph/node/construccion_conceptual",
  "content": {
    "id": "construccion_conceptual"
  }
}
```

Ejemplo correcto:

```json
{
  "address": "graph/node/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual",
  "content": {
    "id": "grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual"
  }
}
```

### 6.1. Fórmula del ID de nodo

El ID del nodo se construye a partir del recorrido conceptual completo:

```txt
<id> = grafo_de_regiones-grafo_de_region-subcarpeta-subcarpeta-nombre_de_nodo
```

Donde cada parte representa un segmento de la ruta conceptual.

### 6.2. Relación entre `address` e `id`

Debe cumplirse siempre:

```txt
address = graph/node/<id>
content.id = <id>
definition_ref = def/<id>
```

Ejemplo:

```json
{
  "address": "graph/node/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual",
  "content": {
    "id": "grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual",
    "label": "construccion_conceptual",
    "type": "compound_field_node",
    "definition_ref": "def/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual",
    "summary": "Campo compuesto estructural que explicita la composición de ideas activas que sostienen la realización."
  }
}
```

---

## 7. Regla de IDs profundos

Cuando un nodo está profundamente anidado, el ID debe conservar todo el recorrido.

Ejemplo de nodo local:

```txt
formulacion_abierta_controlada
```

Si pertenece al recorrido:

```txt
grafo_de_regiones/
  grafo_construccion_del_caso/
    construccion_conceptual/
      coleccion_de_ideas_activas/
        idea_activa/
          formulacion_de_la_idea/
            formulacion_abierta_controlada/
              formulacion_abierta_controlada.json
```

entonces el ID correcto es:

```txt
grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada
```

Y el nodo debe ser:

```json
{
  "address": "graph/node/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada",
  "content": {
    "id": "grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada",
    "label": "formulacion_abierta_controlada",
    "type": "value_node",
    "definition_ref": "def/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada",
    "summary": "Valor del campo formulacion_de_la_idea."
  }
}
```

### 7.1. Razón de la regla

Esta regla evita colisiones.

Valores como:

```txt
baja
media
alta
contraste
modular
abierta_controlada
```

pueden aparecer en muchos campos y grafos diferentes. Si se usan como IDs cortos, habrá errores al pasar el grafo a Cytoscape o a cualquier motor de grafo que requiera IDs únicos.

Por tanto:

```txt
label = nombre legible local
id = ruta conceptual completa
```

---

## 8. Regla de IDs para definiciones

Toda definición debe apuntar al mismo ID absoluto del nodo que define.

Si el nodo es:

```txt
grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual
```

entonces la definición debe ser:

```json
{
  "address": "def/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual",
  "content": "Definición extensa de construccion_conceptual."
}
```

Debe cumplirse:

```txt
node.content.definition_ref = def/<node.content.id>
def.address = def/<node.content.id>
```

---

## 9. Regla de IDs absolutos para aristas

La misma lógica de IDs absolutos aplica a las aristas.

Una arista no debe usar nombres locales cortos si sus nodos usan IDs absolutos.

### 9.1. Fórmula general de arista

```txt
edge_id = <from_full_id>-<edge_type>-<to_full_id>
```

Debe cumplirse:

```txt
address = graph/edge/<edge_id>
content.id = <edge_id>
content.from = <from_full_id>
content.to = <to_full_id>
content.type = <edge_type>
```

### 9.2. Ejemplo incorrecto

```json
{
  "address": "graph/edge/formulacion_de_la_idea-has_value-formulacion_abierta_controlada",
  "content": {
    "id": "formulacion_de_la_idea-has_value-formulacion_abierta_controlada",
    "from": "formulacion_de_la_idea",
    "to": "formulacion_abierta_controlada",
    "type": "has_value",
    "rationale": "..."
  }
}
```

Esto es incorrecto porque `from` y `to` no son IDs absolutos.

### 9.3. Ejemplo correcto

```json
{
  "address": "graph/edge/grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-has_value-grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada",
  "content": {
    "id": "grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-has_value-grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada",
    "from": "grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea",
    "to": "grafo_de_regiones-grafo_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada",
    "type": "has_value",
    "rationale": "formulacion_abierta_controlada es un valor declarado para el campo formulacion_de_la_idea."
  }
}
```

Aunque el ID de la arista sea largo, es seguro y no colisiona.

---

## 10. Rutas físicas de aristas

La ruta física de una arista puede ser más corta y más legible que su ID interno.

Ejemplo:

```txt
grafo_de_regiones/grafo_construccion_del_caso/construccion_conceptual/coleccion_de_ideas_activas/idea_activa/formulacion_de_la_idea/formulacion_abierta_controlada/formulacion_de_la_idea-has_value-formulacion_abierta_controlada.json
```

Pero dentro del archivo, la arista debe usar IDs absolutos:

```json
{
  "address": "graph/edge/<from_full_id>-has_value-<to_full_id>",
  "content": {
    "id": "<from_full_id>-has_value-<to_full_id>",
    "from": "<from_full_id>",
    "to": "<to_full_id>",
    "type": "has_value",
    "rationale": "..."
  }
}
```

Así se separan dos niveles:

```txt
path_rel:
  navegación física humana

address/content.id:
  identidad semántica absoluta del grafo
```

---

## 11. Co-localización de aristas

La arista que integra un nodo hijo a su nodo padre debe colocarse cerca del nodo hijo.

### 11.1. Campo a valor

```txt
campo_a/
  valor_1/
    valor_1.json
    def_valor_1.json
    campo_a-has_value-valor_1.json
```

### 11.2. Campo compuesto a campo interno

```txt
campo_compuesto/
  campo_interno/
    campo_interno.json
    def_campo_interno.json
    campo_compuesto-has_internal_field-campo_interno.json
```

### 11.3. Dimensión a campo

```txt
grafo_x/
  campo_a/
    campo_a.json
    def_campo_a.json
    dimension_x-has_field-campo_a.json
```

La co-localización permite leer el nodo hijo junto con la relación que lo integra.

---

## 12. Relaciones estructurales obligatorias

Toda relación estructural de la definición debe tener una arista explícita.

### 12.1. Dimensión a campo

```txt
dimension_x --has_field--> campo_a
```

### 12.2. Campo compuesto a campo interno

```txt
campo_compuesto --has_internal_field--> campo_interno
```

### 12.3. Campo a valor

```txt
campo_a --has_value--> valor_1
```

### 12.4. Campo a estructura interna

```txt
campo_a --has_structural_value--> estructura_b
```

### 12.5. Colección a tipo de ítem

```txt
coleccion_x --has_item_type--> item_y
```

### 12.6. Entidad a componente requerido

```txt
idea_activa --has_required_component--> formulacion_de_la_idea
```

### 12.7. Restricción

```txt
campo_a --must_be_coherent_with--> campo_b
```

```txt
campo_a --must_be_compatible_with--> campo_b
```

```txt
campo_a --must_declare--> componente_x
```

---

## 13. Referencias externas y nodos de frontera

Si un elemento aparece mencionado en restricciones pero no se define dentro de la definición original, no debe convertirse en campo interno del grafo.

Debe representarse como referencia externa o nodo de frontera.

Ejemplo:

```txt
configuracion_narrativa debe ser coherente con arquitectura_macro
```

Si `arquitectura_macro` no está definido en esa definición, se crea:

```txt
referencias_externas/
  arquitectura_macro.json
```

Contenido:

```json
{
  "address": "graph/node/grafo_de_regiones-grafo_construccion_del_caso-referencias_externas-arquitectura_macro",
  "content": {
    "id": "grafo_de_regiones-grafo_construccion_del_caso-referencias_externas-arquitectura_macro",
    "label": "arquitectura_macro",
    "type": "external_reference_node",
    "definition_ref": "NO_DEFINIDO_EN_ESTE_GRAFO",
    "summary": "Referencia externa mencionada por restricciones de este grafo."
  }
}
```

Y la arista:

```json
{
  "address": "graph/edge/grafo_de_regiones-grafo_construccion_del_caso-configuracion_narrativa-must_be_coherent_with-grafo_de_regiones-grafo_construccion_del_caso-referencias_externas-arquitectura_macro",
  "content": {
    "id": "grafo_de_regiones-grafo_construccion_del_caso-configuracion_narrativa-must_be_coherent_with-grafo_de_regiones-grafo_construccion_del_caso-referencias_externas-arquitectura_macro",
    "from": "grafo_de_regiones-grafo_construccion_del_caso-configuracion_narrativa",
    "to": "grafo_de_regiones-grafo_construccion_del_caso-referencias_externas-arquitectura_macro",
    "type": "must_be_coherent_with",
    "rationale": "La configuración narrativa debe ser coherente con arquitectura_macro, aunque arquitectura_macro no se defina dentro de este grafo."
  }
}
```

---

## 14. Qué se toma de la definición original

La conversión debe tomar solo lo que existe en la definición original.

Deben extraerse:

```txt
- dimensión o región raíz;
- campos directos;
- campos compuestos;
- campos internos;
- valores posibles;
- cardinalidades;
- restricciones;
- compatibilidades;
- referencias externas mencionadas.
```

No se deben añadir campos que no existan en la definición.

No se deben añadir valores no declarados.

No se debe rediseñar la definición.

La operación correcta no es reinterpretar, sino **graficar fielmente**.

---

## 15. Criterio para crear carpetas

Se crea una carpeta cuando el elemento tiene descendientes conceptuales.

Ejemplos:

```txt
campo con valores
  → carpeta del campo

valor simple
  → carpeta del valor si debe contener nodo, def y arista

campo compuesto
  → carpeta del campo compuesto

campo interno con valores
  → carpeta del campo interno

restricciones agrupadas
  → carpeta restricciones

referencias externas
  → carpeta referencias_externas
```

Si un elemento es un nodo aislado sin hijos ni aristas locales, puede ser un archivo directo, pero por consistencia se recomienda usar carpetas para valores cuando hay aristas co-localizadas.

---

## 16. Criterio para crear `def`

Debe crearse una definición cuando el nodo tiene desarrollo conceptual propio.

Se recomienda crear `def` para:

```txt
- dimensión raíz;
- campos directos;
- campos compuestos;
- campos internos;
- valores con descripción propia;
- referencias externas relevantes;
- restricciones documentales complejas.
```

Si un valor es muy simple, se puede usar `definition_ref: "NO_NECESARIO_PARA_ESTE_TYPE"`, pero solo si esa convención está permitida explícitamente.

La opción más robusta para trazabilidad es crear `def` para todo nodo.

---

## 17. Tipos de nodo sugeridos

Los tipos internos pueden seguir esta convención:

```txt
dimension_node
region_node
field_node
compound_field_node
internal_field_node
structural_value_node
item_type_node
required_component_node
value_node
numeric_range_node
constraint_node
external_reference_node
```

El tipo debe describir la función del nodo dentro de la definición, no su ruta física.

---

## 18. Tipos de arista sugeridos

Los tipos más comunes son:

```txt
has_field
has_value
has_internal_field
has_structural_value
has_item_type
has_required_component
has_numeric_range
must_declare
must_contain
must_have_cardinality
must_be_coherent_with
must_be_compatible_with
allows_cardinality
references_external
```

El tipo de arista debe ser breve, estable y reutilizable.

---

## 19. Validación obligatoria

Antes de entregar un artefacto materializable, debe verificarse:

```txt
1. No existen carpetas físicas graph/node, graph/edge ni def como estructura principal.
2. Cada archivo JSON tiene un address interno válido.
3. Cada graph/node tiene content.id igual al sufijo de graph/node/.
4. Cada def tiene address def/<node_id> correspondiente a un nodo.
5. Cada graph/edge tiene content.id igual al sufijo de graph/edge/.
6. Cada graph/edge.content.from coincide exactamente con un node.content.id existente.
7. Cada graph/edge.content.to coincide exactamente con un node.content.id existente.
8. Cada node.content.definition_ref apunta a un def existente o a una convención explícita de no definición.
9. No hay IDs cortos que puedan colisionar.
10. No hay campos inventados.
11. No hay valores inventados.
12. La estructura física reproduce el recorrido conceptual de la definición.
13. Las aristas explícitas permiten reconstruir la estructura original.
14. El JSONL usa path_rel y content.
```

---

## 20. Forma final del JSONL materializable

Cada archivo a crear se representa como una línea JSONL:

```json
{
  "path_rel": "grafo_de_regiones/grafo_x/campo_a/valor_1/valor_1.json",
  "content": "{\n  \"address\": \"graph/node/<id>\",\n  \"content\": { ... }\n}"
}
```

Ejemplo de nodo:

```json
{
  "path_rel": "grafo_de_regiones/grafo_x/campo_a/campo_a.json",
  "content": "{\n  \"address\": \"graph/node/grafo_de_regiones-grafo_x-campo_a\",\n  \"content\": {\n    \"id\": \"grafo_de_regiones-grafo_x-campo_a\",\n    \"label\": \"campo_a\",\n    \"type\": \"field_node\",\n    \"definition_ref\": \"def/grafo_de_regiones-grafo_x-campo_a\",\n    \"summary\": \"Resumen.\"\n  }\n}"
}
```

Ejemplo de definición:

```json
{
  "path_rel": "grafo_de_regiones/grafo_x/campo_a/def_campo_a.json",
  "content": "{\n  \"address\": \"def/grafo_de_regiones-grafo_x-campo_a\",\n  \"content\": \"Definición extensa.\"\n}"
}
```

Ejemplo de arista:

```json
{
  "path_rel": "grafo_de_regiones/grafo_x/campo_a/valor_1/campo_a-has_value-valor_1.json",
  "content": "{\n  \"address\": \"graph/edge/grafo_de_regiones-grafo_x-campo_a-has_value-grafo_de_regiones-grafo_x-campo_a-valor_1-valor_1\",\n  \"content\": {\n    \"id\": \"grafo_de_regiones-grafo_x-campo_a-has_value-grafo_de_regiones-grafo_x-campo_a-valor_1-valor_1\",\n    \"from\": \"grafo_de_regiones-grafo_x-campo_a\",\n    \"to\": \"grafo_de_regiones-grafo_x-campo_a-valor_1-valor_1\",\n    \"type\": \"has_value\",\n    \"rationale\": \"valor_1 es un valor declarado para campo_a.\"\n  }\n}"
}
```

---

## 21. Comando de materialización

Un artefacto JSONL con la estructura anterior puede materializarse con:

```bash
node materialize-src-from-jsonl.cjs \
  --jsonl ART_grafo_x_materializable.jsonl \
  --out ./prueba-materializacion
```

Para verificar:

```bash
find ./prueba-materializacion -type f
```

---

## 22. Procedimiento completo

El procedimiento completo para convertir una definición en artefacto materializable es:

```txt
1. Leer la definición original.
2. Identificar la dimensión o región raíz.
3. Identificar campos directos.
4. Identificar campos compuestos.
5. Identificar campos internos.
6. Identificar valores.
7. Identificar restricciones y referencias externas.
8. Diseñar la estructura física según el recorrido conceptual.
9. Crear nodos con IDs absolutos.
10. Crear definiciones vinculadas por def/<id>.
11. Crear aristas con from/to absolutos.
12. Co-localizar aristas con los nodos hijos o con restricciones.
13. Crear líneas JSONL con path_rel y content.
14. Validar que no existan colisiones ni aristas rotas.
15. Entregar el JSONL materializable.
```

---

## 23. Resumen final

La conversión correcta no es:

```txt
definición original
  → graph/node como carpeta
  → graph/edge como carpeta
  → def como carpeta
```

La conversión correcta es:

```txt
definición original
  → estructura física según recorrido conceptual
  → archivos JSON co-localizados con su contexto
  → address interno graph/node, graph/edge o def
  → IDs absolutos construidos desde la ruta conceptual
  → aristas explícitas con from/to absolutos
  → artefacto JSONL materializable
```

La regla final es:

```txt
path_rel organiza.
address clasifica.
id identifica de forma absoluta.
label nombra localmente.
edge.from y edge.to apuntan a IDs reales.
```
