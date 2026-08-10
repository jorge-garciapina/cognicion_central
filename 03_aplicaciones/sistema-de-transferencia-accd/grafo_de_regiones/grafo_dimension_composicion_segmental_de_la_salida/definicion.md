## 11. `dimension_composicion_segmental_de_la_salida`

### Función general de la dimensión

Describir cómo se organiza la salida en el tiempo y en la distribución interna de
bloques, tramos y unidades de construcción.

---

### 11.1. `duracion_objetivo`

**Función:**
Fijar el rango temporal compatible de la salida.

**Tipo de valor:**
Rango categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `muy_breve`
- `breve`
- `breve_expandido`

**Descripción de los valores:**

- `muy_breve`:
  Salida extremadamente corta, con alta condensación y desarrollo mínimo.

- `breve`:
  Salida breve estándar, con desarrollo corto pero reconocible.

- `breve_expandido`:
  Salida breve con mayor margen relativo de desarrollo interno.

**Restricciones:**

- Debe ser coherente con arquitectura, segmentación y modalidad de guión.

---

### 11.2. `arquitectura_macro`

**Función:**
Describir la organización estructural general del guión.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `apertura_desarrollo_cierre`
- `apertura_desarrollo_remate`
- `apertura_lista_cierre`
- `apertura_contraste_resolucion`
- `apertura_secuencia_remate`

**Descripción de los valores:**

- `apertura_desarrollo_cierre`:
  Entrada inicial, desarrollo central y cierre explícito.

- `apertura_desarrollo_remate`:
  Apertura, desarrollo y remate terminal breve y marcado.

- `apertura_lista_cierre`:
  Apertura, núcleo en forma de lista y cierre.

- `apertura_contraste_resolucion`:
  Apertura, núcleo contrastivo y resolución final.

- `apertura_secuencia_remate`:
  Apertura, desarrollo por pasos o momentos secuenciales y remate breve.

**Restricciones:**

- Debe haber exactamente una arquitectura macro dominante.
- Debe ser compatible con segmentación, duración y modalidad de guión.
