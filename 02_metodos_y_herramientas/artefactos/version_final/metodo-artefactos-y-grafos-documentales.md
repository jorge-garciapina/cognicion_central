# MÉTODO GENERAL — ARTEFACTOS Y GRAFOS DOCUMENTALES

## 0. Propósito del documento

Este documento describe un método general para construir, serializar y compartir conocimiento estructurado mediante **artefactos** y **grafos documentales**.

El objetivo es conservar este proceso como una metodología independiente, reutilizable en proyectos futuros donde se quiera construir un sistema de conocimiento basado en:

- carpetas;
- archivos Markdown o texto;
- nodos documentales;
- aristas explícitas o implícitas;
- definiciones extensas;
- y artefactos serializados que puedan ser compartidos con una IA.

Este documento no depende de una migración específica. Puede usarse para construir otros grafos, otros paquetes conceptuales, otros sistemas de transferencia estructural o cualquier arquitectura documental que necesite ser legible, auditable y portable.

---

## 1. Idea central

La idea central del método es que un proyecto puede funcionar simultáneamente como:

```txt
1. una estructura de carpetas y archivos;
2. una red documental de nodos, aristas y definiciones;
3. una base de conocimiento legible por humanos;
4. un artefacto serializable legible por IA;
5. una fuente futura para visualización, análisis o implementación en grafo.
```

El proceso general es:

```txt
proyecto_en_filesystem
  → estructura_documental
    → artefacto_serializado
      → lectura_por_IA
        → reconstruccion_del_grafo
```

El proyecto vive como archivos. El artefacto captura esos archivos. La IA reconstruye la estructura conceptual a partir del artefacto.

---

## 2. Qué es un artefacto

Un **artefacto** es una representación serializada de un proyecto textual.

Normalmente se genera recorriendo una carpeta raíz y convirtiendo cada archivo textual en un registro estructurado.

El artefacto permite transportar un proyecto completo como un solo archivo de texto, normalmente en formato:

```txt
NDJSON
JSONL
TXT con líneas JSON
```

Cada línea representa un archivo o un fragmento de archivo.

El artefacto no sustituye al proyecto original. Es una **fotografía estructurada** del proyecto en un momento determinado.

---

## 3. Función del artefacto

El artefacto cumple varias funciones:

```txt
1. Portabilidad
   Permite compartir un proyecto completo como un solo archivo.

2. Lectura por IA
   Permite que una IA reciba muchas carpetas y archivos sin necesidad de acceder al filesystem original.

3. Trazabilidad
   Conserva rutas, tamaños, hashes y fechas de modificación.

4. Reconstrucción estructural
   Permite inferir relaciones entre archivos por su path.

5. Auditoría
   Permite detectar duplicados, versiones, cambios y archivos grandes.

6. Compactación cognitiva
   Convierte un proyecto distribuido en un paquete legible como unidad.
```

En un sistema de grafos documentales, el artefacto funciona como el medio de transporte del grafo.

---

## 4. El programa constructor de artefactos

El archivo `make-project-dump.cjs` es un programa de Node.js que recorre una raíz de proyecto, lee archivos textuales y genera un archivo NDJSON.

Uso básico:

```bash
node make-project-dump.cjs
```

Uso con raíz y salida explícitas:

```bash
node make-project-dump.cjs --root ./mi-proyecto --out ART_mi_proyecto.txt
```

Uso con seguimiento básico de `.gitignore`:

```bash
node make-project-dump.cjs --root ./mi-proyecto --out ART_mi_proyecto.txt --follow-gitignore
```

Uso con logging:

```bash
node make-project-dump.cjs --root ./mi-proyecto --out ART_mi_proyecto.txt --verbose
```

---

## 5. Opciones del constructor

El programa acepta estas opciones:

```txt
--root <ruta>
  Directorio raíz a escanear.
  Default: .

--out <ruta>
  Archivo de salida NDJSON.
  Default: project-dump.jsonl

--max-file-bytes <n>
  Umbral para decidir si un archivo se emite completo o en chunks.
  Default: 262144 bytes = 256 KiB

--chunk-bytes <n>
  Tamaño aproximado de cada chunk.
  Default: 131072 bytes = 128 KiB

--follow-gitignore
  Intenta leer .gitignore del root y omitir patrones básicos.

--verbose
  Emite logs informativos a stderr.
```

---

## 6. Qué archivos procesa

El programa procesa archivos textuales.

Reconoce extensiones como:

```txt
.ts
.tsx
.js
.jsx
.mjs
.cjs
.json
.jsonc
.yml
.yaml
.toml
.xml
.md
.markdown
.txt
.env
.gitignore
.graphql
.gql
.prisma
.proto
.sql
.css
.scss
.less
```

También intenta detectar si un archivo sin extensión conocida parece texto, revisando si contiene bytes nulos.

Ignora por defecto carpetas como:

```txt
node_modules
.git
.hg
.svn
dist
build
out
.next
.turbo
.cache
.yarn
.pnpm-store
```

Esto lo vuelve adecuado para proyectos documentales y de código.

---

## 7. Forma de los registros del artefacto

Cuando un archivo es pequeño, el programa emite un registro de tipo `file`.

Ejemplo:

```json
{
  "path": "grafo_de_regiones/modelo_base_de_regiones.md",
  "type": "file",
  "lang": "md",
  "mediaType": "text/markdown",
  "size": 1234,
  "sha256": "...",
  "mtime": "2026-04-27T00:00:00.000Z",
  "text": "contenido del archivo"
}
```

Campos principales:

```txt
path:
  ruta relativa del archivo dentro del proyecto.

type:
  tipo de registro: file o chunk.

lang:
  lenguaje inferido por extensión.

mediaType:
  tipo MIME aproximado.

size:
  tamaño del archivo.

sha256:
  hash del archivo completo.

mtime:
  fecha de modificación.

text:
  contenido textual.
```

---

## 8. Chunking de archivos grandes

Si un archivo supera el umbral de `--max-file-bytes`, el programa lo divide en chunks.

Ejemplo:

```json
{
  "path": "documento-largo.md",
  "type": "chunk",
  "lang": "md",
  "mediaType": "text/markdown",
  "size": 900000,
  "sha256": "...",
  "mtime": "2026-04-27T00:00:00.000Z",
  "chunkIndex": 0,
  "lineStart": 1,
  "lineEnd": 150,
  "offsetBytes": 0,
  "text": "fragmento del archivo"
}
```

Campos adicionales para chunks:

```txt
chunkIndex:
  índice del fragmento.

lineStart:
  primera línea incluida.

lineEnd:
  última línea incluida.

offsetBytes:
  posición aproximada en bytes dentro del archivo original.
```

El programa intenta cortar los chunks en límites de línea para no romper el texto.

---

## 9. Qué hace y qué no hace el artefacto

### El artefacto hace

```txt
- recorre archivos;
- serializa contenido;
- conserva rutas;
- conserva metadatos;
- permite transportar el proyecto;
- permite lectura por IA;
- permite reconstruir estructura documental.
```

### El artefacto no hace

```txt
- no interpreta semánticamente los archivos;
- no crea nodos conceptuales por sí mismo;
- no infiere aristas complejas;
- no valida el grafo;
- no reemplaza la estructura del proyecto;
- no convierte automáticamente Markdown en Cytoscape.
```

La semántica debe estar codificada en la estructura de carpetas, nombres de archivo, contenido Markdown y convenciones documentales.

---

## 10. Relación entre filesystem y grafo documental

El método parte de esta equivalencia práctica:

```txt
carpeta / archivo
  → unidad documental
    → posible nodo del grafo
```

Una carpeta puede representar una región, agrupación o contenedor.

Un archivo puede representar:

```txt
- nodo primario;
- definición de región;
- definición de campo;
- valor posible;
- arista explícita;
- índice;
- manifiesto;
- protocolo;
- instancia;
- salida.
```

La estructura física del proyecto se vuelve parte de la estructura cognitiva del sistema.

---

## 11. Forma general de definir grafos con carpetas y archivos

Una estructura documental de grafo puede organizarse así:

```txt
grafo_documental/
  modelo_base.md
  region_1/
    definicion.md
    campo_1/
      definicion.md
      valor_1.md
      valor_2.md
    campo_2/
      definicion.md
      valor_1.md
      valor_2.md
  region_2/
    definicion.md
    campo_1/
      definicion.md
      valor_1.md
```

Lectura conceptual:

```txt
modelo_base.md
  = nodo primario o documento rector

region_1/definicion.md
  = nodo de región

region_1/campo_1/definicion.md
  = nodo de campo

region_1/campo_1/valor_1.md
  = nodo de valor
```

---

## 12. Forma instrumental de definir nodos

En los paquetes conceptuales, un nodo suele tener esta estructura lógica:

```json
{
  "address": "graph/node/<node_id>",
  "content": {
    "id": "<node_id>",
    "label": "<nombre visible>",
    "type": "<tipo_de_nodo>",
    "definition_ref": "def/<node_id>",
    "summary": "<resumen breve>"
  }
}
```

Campos:

```txt
address:
  dirección documental del nodo.

id:
  identificador estable.

label:
  nombre legible.

type:
  tipo funcional del nodo.

definition_ref:
  referencia a su definición extensa.

summary:
  resumen breve del rol del nodo.
```

En una estructura basada en Markdown, la misma lógica puede traducirse así:

```md
---
id: campo_tono_editorial
label: Tono editorial
type: campo
definition_ref: ./definicion.md
summary: Campo que regula la cualidad editorial de la manifestación.
---

# Tono editorial

Definición extensa del campo.
```

O, si se prefiere evitar frontmatter, así:

```md
# Nodo: campo_tono_editorial

## ID
campo_tono_editorial

## Label
Tono editorial

## Type
campo

## Definition ref
./definicion.md

## Summary
Campo que regula la cualidad editorial de la manifestación.

## Definición
Definición extensa del campo.
```

---

## 13. Forma instrumental de definir definiciones

En los paquetes conceptuales, las definiciones se separan del nodo.

Forma lógica:

```json
{
  "address": "def/<node_id>",
  "content": "Definición extensa del nodo."
}
```

El nodo apunta a esa definición mediante:

```txt
definition_ref: def/<node_id>
```

Relación:

```txt
graph/node/<node_id>
  → definition_ref
    → def/<node_id>
```

En Markdown, esto puede traducirse de dos maneras.

### Opción A: definición separada

```txt
campo_tono_editorial/
  nodo.md
  definicion.md
```

`nodo.md` contiene metadatos breves.

`definicion.md` contiene el desarrollo conceptual.

### Opción B: definición integrada

```txt
campo_tono_editorial/
  definicion.md
```

El mismo archivo contiene metadatos y definición.

Para proyectos pequeños o medianos, la opción B es más simple. Para proyectos grandes, la opción A facilita separar índice y desarrollo.

---

## 14. Forma instrumental de definir aristas

En los paquetes conceptuales, una arista suele tener esta estructura lógica:

```json
{
  "address": "graph/edge/<edge_id>",
  "content": {
    "id": "<edge_id>",
    "from": "<node_id_origen>",
    "to": "<node_id_destino>",
    "type": "<tipo_de_relacion>",
    "rationale": "<justificacion>"
  }
}
```

Campos:

```txt
address:
  dirección documental de la arista.

id:
  identificador estable de la arista.

from:
  nodo origen.

to:
  nodo destino.

type:
  tipo de relación.

rationale:
  justificación de la relación.
```

La forma conceptual es:

```txt
from --type--> to
```

Ejemplo:

```txt
campo_tono_editorial --belongs_to--> grafo_comparecencia_de_la_manifestacion
```

Pero la arista debe conservar su justificación:

```txt
rationale:
  El tono editorial pertenece a la comparecencia porque regula la forma en que la manifestación aparece discursivamente ante el receptor.
```

---

## 15. Aristas implícitas y explícitas

En una estructura por carpetas, algunas aristas pueden inferirse del path.

### Aristas implícitas

Ejemplo:

```txt
grafo_de_regiones/
  grafo_comparecencia/
    campo_tono_editorial/
      valor_pedagogico.md
```

Puede implicar:

```txt
grafo_de_regiones contains grafo_comparecencia
grafo_comparecencia has_field campo_tono_editorial
campo_tono_editorial has_value valor_pedagogico
```

Estas aristas nacen de la jerarquía documental.

### Aristas explícitas

Son necesarias cuando la relación no es puramente jerárquica.

Ejemplos:

```txt
campo_tono_editorial depends_on campo_publico_objetivo
valor_densidad_alta incompatible_with publico_frio
campo_jerarquia_grafica supports campo_estilo_de_titulares
```

Estas aristas deben documentarse en archivos específicos o en una sección dedicada.

---

## 16. Formas recomendadas para guardar aristas explícitas

Hay varias opciones.

### Opción A: archivo único de aristas por grafo

```txt
grafo_comparecencia/
  definicion.md
  aristas.md
```

Ejemplo de `aristas.md`:

```md
# Aristas — grafo_comparecencia

```json
{
  "id": "campo_tono_editorial-belongs_to-grafo_comparecencia",
  "from": "campo_tono_editorial",
  "to": "grafo_comparecencia",
  "type": "belongs_to",
  "rationale": "El tono editorial pertenece a este grafo porque regula la comparecencia discursiva de la manifestación."
}
```
```

Ventaja: simple y compacto.

Desventaja: puede crecer demasiado.

### Opción B: carpeta de aristas

```txt
grafo_comparecencia/
  definicion.md
  aristas/
    campo_tono_editorial-belongs_to-grafo_comparecencia.md
    campo_jerarquia_grafica-supports-campo_estilo_de_titulares.md
```

Ventaja: cada arista es auditable individualmente.

Desventaja: más archivos.

### Opción C: aristas junto al nodo origen

```txt
campo_tono_editorial/
  definicion.md
  aristas_salida.md
```

Ventaja: facilita leer qué relaciones salen de un nodo.

Desventaja: dificulta ver el grafo completo.

Recomendación general: para un proyecto en crecimiento, usar **Opción B** en grafos grandes y **Opción A** en grafos pequeños.

---

## 17. Tipos útiles de nodos

Una taxonomía inicial de nodos podría ser:

```txt
modelo_base
region
campo
valor
agrupacion
criterio
regla
instancia
adaptador
codominio
manifestacion
```

Para grafos de regiones, los tipos mínimos serían:

```txt
modelo_base_de_regiones
region
campo
valor
arista
```

Ejemplo:

```txt
modelo_base_de_regiones.md
  type: modelo_base_de_regiones

grafo_comparecencia/definicion.md
  type: region

grafo_comparecencia/campo_tono_editorial/definicion.md
  type: campo

grafo_comparecencia/campo_tono_editorial/valor_pedagogico.md
  type: valor
```

---

## 18. Tipos útiles de aristas

Una taxonomía inicial de aristas podría incluir:

```txt
contains
has_region
has_field
has_value
belongs_to
depends_on
uses
refines
specializes
generalizes
supports
constrains
incompatible_with
compatible_with
enables
derives_from
references
projects_to
```

Para un grafo documental de regiones, las más básicas serían:

```txt
has_region
has_field
has_value
belongs_to
references
compatible_with
incompatible_with
depends_on
```

Ejemplo:

```txt
modelo_base_de_regiones --has_region--> grafo_comparecencia

grafo_comparecencia --has_field--> campo_tono_editorial

campo_tono_editorial --has_value--> valor_pedagogico

campo_tono_editorial --depends_on--> campo_publico_objetivo
```

---

## 19. Convenciones de identificadores

Para que el artefacto sea legible por IA y portable a herramientas de grafo, los identificadores deben ser estables.

Recomendaciones:

```txt
1. Usar minúsculas.
2. Evitar espacios.
3. Usar guion bajo o guion medio de forma consistente.
4. No cambiar IDs una vez usados.
5. Evitar nombres demasiado genéricos.
6. Incluir prefijo si hay riesgo de colisión.
```

Ejemplos:

```txt
region_comparecencia_manifestacion
campo_tono_editorial
valor_tono_pedagogico_directo
edge_campo_tono_editorial-has_value-valor_tono_pedagogico_directo
```

Si el sistema usará Cytoscape.js, los IDs deben poder mapearse a:

```js
{ data: { id, label, type, definition_ref, summary } }
```

para nodos, y:

```js
{ data: { id, source, target, type, rationale } }
```

para aristas.

---

## 20. Relación con Cytoscape.js

La estructura documental puede proyectarse a Cytoscape.js.

Contrato recomendado para nodos:

```js
{
  data: {
    id: "campo_tono_editorial",
    label: "Tono editorial",
    type: "campo",
    definition_ref: "grafo_comparecencia/campo_tono_editorial/definicion.md",
    summary: "Regula la cualidad editorial de la manifestación."
  }
}
```

Contrato recomendado para aristas:

```js
{
  data: {
    id: "campo_tono_editorial-belongs_to-grafo_comparecencia",
    source: "campo_tono_editorial",
    target: "grafo_comparecencia",
    type: "belongs_to",
    rationale: "El tono editorial pertenece a la comparecencia porque regula la forma discursiva de aparición de la manifestación."
  }
}
```

Así, el mismo proyecto puede servir para:

```txt
- documentación humana;
- lectura por IA;
- visualización en Cytoscape;
- validación de consistencia;
- navegación conceptual.
```

---

## 21. Estructura recomendada para un grafo documental reutilizable

Para construir otro grafo siguiendo este método, se puede usar esta estructura:

```txt
mi_grafo/
  README.md
  modelo_base.md
  regiones/
    region_1/
      definicion.md
      campos/
        campo_1/
          definicion.md
          valores/
            valor_1.md
            valor_2.md
        campo_2/
          definicion.md
          valores/
            valor_1.md
    region_2/
      definicion.md
  aristas/
    edge_1.md
    edge_2.md
  manifiesto_grafo.md
```

Una variante más compacta:

```txt
mi_grafo/
  modelo_base.md
  region_1/
    definicion.md
    campo_1/
      definicion.md
      valor_1.md
      valor_2.md
  region_2/
    definicion.md
    campo_1/
      definicion.md
      valor_1.md
  aristas.md
```

La primera es más ordenada. La segunda es más rápida.

---

## 22. Manifiesto de grafo

Todo grafo documental debería tener un archivo manifiesto.

Ejemplo:

```txt
manifiesto_grafo.md
```

Contenido recomendado:

```md
# Manifiesto del grafo

## ID del grafo
mi_grafo

## Propósito
Explicar qué organiza este grafo.

## Nodo primario
modelo_base.md

## Tipos de nodos permitidos
- region
- campo
- valor
- regla

## Tipos de aristas permitidas
- has_region
- has_field
- has_value
- depends_on
- compatible_with
- incompatible_with

## Reglas de path
Explicar cómo se mapean carpetas y archivos a nodos.

## Reglas de trazabilidad
Explicar cómo seguir un valor hasta su región y modelo base.
```

El manifiesto ayuda a que una IA interprete el artefacto correctamente.

---

## 23. Reglas de construcción

### Regla 1: cada nodo debe tener identidad estable

No basta con crear un archivo. El archivo debe declarar su ID o permitir derivarlo claramente del path.

### Regla 2: cada nodo importante debe tener definición

Los nodos sin definición son difíciles de reutilizar.

### Regla 3: cada arista no trivial debe tener justificación

Las relaciones no evidentes deben explicar su `rationale`.

### Regla 4: las aristas jerárquicas pueden ser implícitas

Relaciones como región → campo → valor pueden inferirse del path si el manifiesto lo declara.

### Regla 5: las aristas semánticas deben ser explícitas

Dependencias, compatibilidades, restricciones y equivalencias deben documentarse.

### Regla 6: el artefacto no debe ser la única fuente

El filesystem del proyecto sigue siendo la fuente primaria. El artefacto es una serialización.

### Regla 7: el proyecto debe poder reconstruirse mentalmente desde el artefacto

Los paths y nombres deben ser suficientemente claros.

---

## 24. Flujo recomendado de trabajo

```txt
1. Diseñar la estructura de carpetas.
2. Definir el nodo primario.
3. Crear regiones.
4. Crear campos.
5. Crear valores.
6. Crear aristas implícitas mediante estructura.
7. Crear aristas explícitas para relaciones semánticas.
8. Crear manifiesto del grafo.
9. Ejecutar make-project-dump.cjs.
10. Compartir el artefacto con una IA.
11. Pedir validación estructural.
12. Corregir paths, nodos, aristas o definiciones.
```

---

## 25. Ejecución del artefacto

Desde la raíz del proyecto:

```bash
node make-project-dump.cjs --root ./mi_grafo --out ART_mi_grafo.txt --verbose
```

Si el constructor está en la raíz del proyecto completo:

```bash
node make-project-dump.cjs --root ./sistema-de-transferencia --out ART_sistema_de_transferencia.txt --verbose
```

Si se quiere solo una subcarpeta:

```bash
node make-project-dump.cjs --root ./sistema-de-transferencia/grafo_de_regiones --out ART_grafo_de_regiones.txt --verbose
```

---

## 26. Cómo debe leer una IA el artefacto

Una IA debe interpretar el artefacto en tres niveles.

### Nivel 1: lectura documental

```txt
¿Qué archivos existen?
¿Qué contiene cada archivo?
¿Qué rutas tienen?
```

### Nivel 2: lectura estructural

```txt
¿Qué rutas implican jerarquías?
¿Qué archivos son nodos?
¿Qué archivos son definiciones?
¿Qué archivos son aristas?
```

### Nivel 3: lectura semántica

```txt
¿Qué significa cada nodo?
¿Qué relaciones existen?
¿Qué restricciones o compatibilidades aparecen?
¿Qué partes están incompletas?
```

El artefacto ofrece la materia prima. La IA reconstruye el grafo usando las convenciones.

---

## 27. Errores frecuentes

### Error 1: confundir artefacto con grafo

El artefacto transporta el grafo documental, pero no es el grafo en sí.

### Error 2: crear archivos sin IDs estables

Si los nombres cambian constantemente, la trazabilidad se rompe.

### Error 3: depender solo de jerarquía

La jerarquía sirve para aristas básicas, pero no basta para relaciones complejas.

### Error 4: duplicar definiciones

Si el mismo campo se redefine en muchas partes, el sistema pierde coherencia.

### Error 5: no justificar aristas semánticas

Una arista sin `rationale` puede volverse opaca.

### Error 6: mezclar nodos y ejemplos

Una cosa es definir un valor posible; otra cosa es usar ese valor en una instancia.

### Error 7: no tener manifiesto

Sin manifiesto, cada lector debe adivinar cómo interpretar la estructura.

---

## 28. Patrón general reusable

El método puede resumirse así:

```txt
filesystem estructurado
  + archivos Markdown con definiciones
  + convenciones de nodos
  + convenciones de aristas
  + manifiesto
  + constructor de artefacto
  = grafo documental portable
```

Y el flujo de uso:

```txt
crear grafo en carpetas
  → ejecutar make-project-dump.cjs
    → obtener ART_*.txt
      → compartir artefacto
        → IA reconstruye y analiza
```

---

## 29. Definición final

Un **artefacto** es una serialización textual de un proyecto documental, producida mediante un programa que recorre archivos, conserva paths, metadatos y contenido, y emite registros NDJSON.

Un **grafo documental** es una estructura de conocimiento construida mediante carpetas y archivos que representan nodos, definiciones y aristas.

El método conjunto consiste en construir grafos documentales dentro del filesystem y luego convertirlos en artefactos portables para que puedan ser leídos, auditados, refinados o implementados por humanos, IA o herramientas de visualización.

---

## 30. Fórmula de cierre

```txt
Proyecto documental
  → carpetas y archivos
    → nodos, definiciones y aristas
      → artefacto NDJSON
        → lectura por IA
          → reconstrucción del grafo
            → validación / visualización / reutilización
```

Este método permite convertir conocimiento distribuido en una estructura portable, auditable y preparada para futuros sistemas de grafo.
