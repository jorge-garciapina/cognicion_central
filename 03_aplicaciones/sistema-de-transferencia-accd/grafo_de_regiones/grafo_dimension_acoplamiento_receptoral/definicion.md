## 6. `dimension_acoplamiento_receptoral`

### Función general de la dimensión

Describir a qué receptor inmediato se orienta la realización y cómo debe
ajustarse verbalmente a ese receptor.

---

### 6.1. `publico_objetivo_inmediato`

**Función:**
Delimitar el público inmediato al que la realización orienta la salida.

**Tipo de valor:**
Categorial semiabierto.

**Cardinalidad:**
Uno o más valores.

**Espacio de valores sugerido:**

- `audiencia_fria`
- `audiencia_tibia`
- `audiencia_caliente`
- `seguidores_actuales`
- `personas_sin_conocimiento_previos`
- `personas_con_interes_previos`
- `personas_que_no_aplican`
- `personas_que_no_comprenden`
- `personas_que_ya_comprenden`

**Descripción de los valores:**

- `audiencia_fria`:
  Receptores sin relación previa fuerte con la fuente o con el contenido.

- `audiencia_tibia`:
  Receptores con cierta familiaridad o disposición favorable, pero todavía no
  plenamente comprometidos.

- `audiencia_caliente`:
  Receptores con alto nivel de interés, afinidad o predisposición favorable.

- `seguidores_actuales`:
  Receptores que ya mantienen un vínculo de seguimiento con la fuente.

- `personas_sin_conocimiento_previos`:
  Receptores que no conocen el tema o lo conocen muy poco.

- `personas_con_interes_previos`:
  Receptores que ya tienen alguna motivación o interés relacionado.

- `personas_que_no_aplican`:
  Receptores que no están usando ni llevando a la práctica lo que el contenido
  podría activar.

- `personas_que_no_comprenden`:
  Receptores que enfrentan un problema de inteligibilidad.

- `personas_que_ya_comprenden`:
  Receptores que ya entienden el tema en una medida relevante.

**Restricciones:**

- Debe ser compatible con la adecuación léxico-formulativa.
- Pueden coexistir varios públicos, pero debe haber uno dominante.

---

### 6.2. `adecuacion_lexico_formulativa`

**Función:**
Describir el ajuste verbal dominante de la realización en función del receptor.

**Tipo de valor:**
Compuesto.

**Cardinalidad:**
Un valor obligatorio compuesto por cinco ejes.

**Campos internos obligatorios:**

- `registro_predominante`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `accesibilidad_lexica`
- `variacion_lexica`

---

#### 6.2.1. `registro_predominante`

**Tipo de valor:**
Categorial cerrado.

**Espacio de valores:**

- `tecnico`
- `pedagogico`
- `institucional`
- `analitico`
- `coloquial_controlado`
- `hibrido`

**Descripción de los valores:**

- `tecnico`:
  Predomina vocabulario especializado y formulación disciplinar.

- `pedagogico`:
  Predomina una formulación orientada a facilitar comprensión y acompañar al
  receptor.

- `institucional`:
  Predomina una formulación marcada por sobriedad organizacional, formalidad y
  estabilidad.

- `analitico`:
  Predomina una formulación de distinción, precisión y descomposición conceptual.

- `coloquial_controlado`:
  Predomina una cercanía verbal compatible con uso oral, pero sin desorden o
  vulgarización excesiva.

- `hibrido`:
  Combina dos o más registros de manera controlada.

---

#### 6.2.2. `densidad_terminologica`

**Tipo de valor:**
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La realización usa pocos términos especializados o cargados conceptualmente.

- `media`:
  La realización introduce una cantidad moderada de términos relevantes sin
  saturar el recorrido.

- `alta`:
  La realización trabaja con una carga terminológica intensa.

---

#### 6.2.3. `grado_de_abstraccion`

**Tipo de valor:**
Categorial ordinal.

**Espacio de valores:**

- `concreto`
- `intermedio`
- `abstracto`

**Descripción de los valores:**

- `concreto`:
  La formulación se apoya en objetos, acciones, escenas o casos fácilmente
  imaginables.

- `intermedio`:
  La formulación combina elementos concretos con conceptos de nivel medio.

- `abstracto`:
  La formulación se apoya en categorías, estructuras o relaciones de mayor nivel.

---

#### 6.2.4. `accesibilidad_lexica`

**Tipo de valor:**
Categorial ordinal.

**Espacio de valores:**

- `alta`
- `media`
- `baja`

**Descripción de los valores:**

- `alta`:
  El vocabulario es fácilmente procesable por un receptor amplio.

- `media`:
  El vocabulario exige algún esfuerzo, pero sigue siendo razonablemente
  transitable.

- `baja`:
  El vocabulario exige mayor familiaridad previa o mayor esfuerzo interpretativo.

---

#### 6.2.5. `variacion_lexica`

**Tipo de valor:**
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La realización reutiliza repertorio verbal relativamente estable.

- `media`:
  La realización alterna formas verbales con una variación moderada.

- `alta`:
  La realización despliega repertorio verbal amplio y variado.

**Restricciones generales de `adecuacion_lexico_formulativa`:**

- Los cinco ejes deben declararse.
- Deben ser coherentes con el público objetivo inmediato.
- Su combinación debe ser viable dentro de la comparecencia y del codominio.
