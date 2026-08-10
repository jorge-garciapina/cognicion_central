## 8. `dimension_construccion_del_caso`

### Función general de la dimensión

Describir la composición conceptual del caso y la forma en que ese caso se
organiza narrativamente dentro de la realización.

---

### 8.1. `construccion_conceptual`

**Función:**
Hacer explícita la composición de ideas activas que sostienen la realización,
indicando cuáles son, qué papel cumplen y cómo se articulan entre sí.

**Tipo de valor:**
Compuesto estructural.

**Cardinalidad:**
Una colección de una o más `idea_activa`.

**Valor estructural general:**

- `coleccion_de_ideas_activas`

#### Estructura obligatoria de cada `idea_activa`

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`
- `relaciones_con_otras_ideas`

---

#### 8.1.1. `formulacion_de_la_idea`

**Tipo de valor:**
Categorial controlado.

**Espacio de valores:**

- `proposicion_definicional`
- `proposicion_relacional`
- `proposicion_argumentativa`
- `proposicion_operativa`
- `formulacion_abierta_controlada`

**Descripción de los valores:**

- `proposicion_definicional`:
  La idea formula qué es algo, lo delimita o lo precisa.

- `proposicion_relacional`:
  La idea formula una relación entre entidades, factores o zonas del caso.

- `proposicion_argumentativa`:
  La idea formula una tesis, defensa o justificación.

- `proposicion_operativa`:
  La idea formula una operación, procedimiento o modo de hacer.

- `formulacion_abierta_controlada`:
  La idea no entra completamente en una forma cerrada anterior, pero sigue siendo
  estructurable y controlable.

---

#### 8.1.2. `rol_conceptual`

**Tipo de valor:**
Categorial cerrado.

**Espacio de valores:**

- `nuclear`
- `complementaria`
- `puente`
- `contrastiva`
- `derivada`

**Descripción de los valores:**

- `nuclear`:
  Idea estructuralmente central del caso.

- `complementaria`:
  Idea que apoya o matiza una idea nuclear.

- `puente`:
  Idea que conecta zonas distintas del caso.

- `contrastiva`:
  Idea cuya función es diferenciar, tensionar u oponer.

- `derivada`:
  Idea que surge como consecuencia o ampliación de otras ideas.

---

#### 8.1.3. `peso_relativo`

**Tipo de valor:**
Escalar normalizado.

**Espacio de valores:**
Cualquier valor entre `0` y `1`.

**Descripción del valor:**
Este campo expresa el peso estructural relativo de la idea dentro del conjunto.
No es una categoría verbal cerrada, sino una graduación que permite jerarquizar
ideas activas.

---

#### 8.1.4. `modo_de_presencia`

**Tipo de valor:**
Categorial cerrado.

**Espacio de valores:**

- `explicita`
- `explicita_reiterada`
- `implicita_estructurante`
- `localizada`
- `transversal`

**Descripción de los valores:**

- `explicita`:
  La idea aparece de manera clara y reconocible.

- `explicita_reiterada`:
  La idea aparece varias veces o con fuerte insistencia.

- `implicita_estructurante`:
  La idea no siempre se nombra, pero organiza la pieza desde debajo.

- `localizada`:
  La idea aparece en una zona o tramo determinado.

- `transversal`:
  La idea atraviesa varias partes de la pieza.

---

#### 8.1.5. `relaciones_con_otras_ideas`

**Tipo de valor:**
Colección estructurada de relaciones formuladas.

**Cardinalidad:**
Cero o más relaciones por idea activa.

**Componentes mínimos de cada relación:**

- `idea_relacionada`
- `tipo_de_relacion`
- `descripcion_de_la_relacion`

##### `idea_relacionada`

- **Tipo de valor:** descriptivo controlado.
- **Descripción:** identifica la otra idea con la que esta idea se articula.

##### `tipo_de_relacion`

- **Tipo de valor:** categorial cerrado.
- **Espacio de valores:**
  - `soporte`
  - `subordinacion`
  - `expansion`
  - `contraste`
  - `condicion`
  - `consecuencia`
  - `equivalencia_parcial`
  - `articulacion_libre_controlada`

- **Descripción de los valores:**
  - `soporte`: una idea sostiene o refuerza a otra;
  - `subordinacion`: una idea queda estructuralmente dependiente de otra;
  - `expansion`: una idea amplía o despliega a otra;
  - `contraste`: una idea se organiza por oposición o diferencia con otra;
  - `condicion`: una idea opera como condición para otra;
  - `consecuencia`: una idea se deriva de otra;
  - `equivalencia_parcial`: dos ideas comparten parcialmente función o contenido;
  - `articulacion_libre_controlada`: relación no reducible a categorías previas,
    pero todavía formulable de manera controlada.

##### `descripcion_de_la_relacion`

- **Tipo de valor:** descriptivo controlado.
- **Descripción:** explicita la forma concreta en que se establece la relación.

**Restricciones generales de `construccion_conceptual`:**

- Toda instancia debe contener una o más ideas activas.
- Cada idea activa debe declarar todos sus componentes mínimos.
- Debe existir consistencia entre rol, peso, presencia y relaciones.

---

### 8.2. `configuracion_narrativa`

**Función:**
Describir cómo se organiza el recorrido interno de la realización.

**Tipo de valor:**
Categorial controlado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `lineal_progresiva`
- `apertura_profundizacion_cierre`
- `contrastiva`
- `acumulativa`
- `recapitulativa`
- `modular`
- `abierta_controlada`

**Descripción de los valores:**

- `lineal_progresiva`:
  El recorrido avanza de forma continua desde un punto de inicio hacia un
  desarrollo posterior, sin grandes retrocesos ni reordenamientos.

- `apertura_profundizacion_cierre`:
  La realización presenta una apertura distinguible, un desarrollo de
  profundización y un cierre reconocible.

- `contrastiva`:
  El recorrido progresa mediante oposición, comparación o tensión entre partes.

- `acumulativa`:
  El recorrido avanza por suma sucesiva de capas, aportes o bloques.

- `recapitulativa`:
  El recorrido incorpora reformulaciones o recuperaciones internas del trayecto.

- `modular`:
  El recorrido se organiza en módulos relativamente autónomos, aunque conectados.

- `abierta_controlada`:
  El recorrido no se somete por completo a una arquitectura cerrada única, pero
  mantiene una coherencia controlada.

**Restricciones:**

- Debe haber exactamente una configuración narrativa predominante.
- Debe ser coherente con la arquitectura macro y la segmentación de la salida.
