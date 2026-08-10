## 5. `dimension_escala_temporal_y_resolucion_realizativa`

### Función general de la dimensión

Describir la escala temporal y el régimen de resolución de la realización,
indicando si la pieza es autosuficiente, seriada, acumulativa o transicional, y
cómo distribuye su resolución en el tiempo.

---

### 5.1. `alcance_de_realizacion`

**Función:**
Indicar si la realización busca una pieza aislada o una unidad dentro de una
estructura mayor.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `pieza_unica`
- `apertura_de_serie`
- `continuidad_de_serie`
- `cierre_de_serie`
- `pieza_de_transicion`
- `pieza_de_prueba`
- `pieza_de_validacion`
- `pieza_de_acceso`
- `pieza_de_profundizacion`

**Descripción de los valores:**

- `pieza_unica`:
  Materialización autosuficiente cuyo sentido inmediato no depende de piezas
  previas o posteriores.

- `apertura_de_serie`:
  Materialización cuya función principal es iniciar una secuencia de piezas
  relacionadas.

- `continuidad_de_serie`:
  Materialización que prolonga una secuencia ya abierta.

- `cierre_de_serie`:
  Materialización cuya función principal es concluir una secuencia.

- `pieza_de_transicion`:
  Materialización que conecta dos zonas distintas del recorrido o cambia de fase.

- `pieza_de_prueba`:
  Materialización orientada a explorar, ensayar o testear una forma de salida.

- `pieza_de_validacion`:
  Materialización orientada a verificar una hipótesis, una forma de presentación
  o una recepción esperada.

- `pieza_de_acceso`:
  Materialización pensada para introducir al receptor en un campo temático o de
  salida.

- `pieza_de_profundizacion`:
  Materialización orientada a expandir o profundizar algo ya abierto.

**Restricciones:**

- Debe haber exactamente un alcance dominante.
- El alcance debe ser coherente con horizonte y resolución.

---

### 5.2. `horizonte_temporal`

**Función:**
Indicar en qué escala temporal busca operar la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `inmediato`
- `corto_plazo`
- `mediano_plazo`
- `acumulativo`
- `seriado`

**Descripción de los valores:**

- `inmediato`:
  La realización busca producir efectos en el mismo acto de recepción o muy poco
  después.

- `corto_plazo`:
  La realización busca operar en una escala breve posterior al contacto inicial.

- `mediano_plazo`:
  La realización busca influir en una secuencia más extendida de recepción o
  elaboración.

- `acumulativo`:
  La realización busca contribuir a un efecto que depende de varias piezas,
  repeticiones o exposiciones.

- `seriado`:
  La realización busca operar explícitamente como parte de una secuencia serial.

**Restricciones:**

- Debe ser coherente con el alcance de realización.
- El horizonte `seriado` exige compatibilidad con piezas de apertura,
  continuidad o cierre de serie.

---

### 5.3. `regimen_de_resolucion_buscada`

**Función:**
Fijar cómo se distribuye la resolución del contenido dentro de la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `resolucion_inmediata`
- `resolucion_progresiva`
- `resolucion_diferida`
- `resolucion_parcial`
- `resolucion_abierta_a_continuidad`

**Descripción de los valores:**

- `resolucion_inmediata`:
  La pieza cierra o resuelve rápidamente el núcleo que abre.

- `resolucion_progresiva`:
  La pieza distribuye la resolución a lo largo del recorrido, sin agotarla en el
  primer tramo.

- `resolucion_diferida`:
  La pieza posterga el cierre o parte de él.

- `resolucion_parcial`:
  La pieza resuelve solo una parte del problema o de la tensión presentada.

- `resolucion_abierta_a_continuidad`:
  La pieza deja deliberadamente abierta una continuidad futura.

**Restricciones:**

- Debe ser compatible con el alcance y el horizonte temporal.
- Una pieza única con resolución diferida exige justificación.
