# Casos del libro convertidos al nuevo formato conceptual
## Instancias de `dimension_construccion_del_caso`

---

## 0. Criterio de conversión

Este documento convierte los dos ejemplos de `casos-de-libro.txt` al formato
conceptual requerido por el archivo de **Dimensiones de configuración**.

Dado que la petición se refiere explícitamente al **formato conceptual requerido
para poder ser usado como caso**, la conversión se organiza como instancias de:

- `dimension_construccion_del_caso`
  - `construccion_conceptual`
  - `configuracion_narrativa`

La lógica de esta decisión es la siguiente:

- los materiales del libro describen **casos**;
- el lugar del nuevo modelo donde un caso se vuelve utilizable como caso es la
  `dimension_construccion_del_caso`;
- y, dentro de ella, la colección de `idea_activa` permite convertir el material
  narrativo-histórico en una estructura conceptual reutilizable.

Por tanto, en cada caso se hace lo siguiente:

1. se preserva una identificación mínima del caso;
2. se reformula el contenido como una colección estructurada de ideas activas;
3. se asigna a cada idea:
   - una formulación de la idea,
   - un rol conceptual,
   - un peso relativo,
   - un modo de presencia,
   - y sus relaciones con otras ideas;
4. se fija una `configuracion_narrativa` predominante.

No se están llenando todavía las demás dimensiones de configuración.
Este documento solo convierte los casos al **formato conceptual requerido para
ser utilizados como caso** dentro del nuevo sistema.

---

# CASO 1 — NICOLÁS FOUQUET / LUIS XIV

## 1. Identificación mínima del caso

- **Centro patronal visible:** Luis XIV
- **Jugador:** Nicolás Fouquet
- **Escena visible principal:** fiesta de Vaux-le-Vicomte organizada por Fouquet en honor del rey
- **Resultado visible del caso:** arresto, juicio, condena y reclusión
- **Lectura mínima del tipo de caso:** intento de homenaje que termina siendo leído como exhibición de brillo propio y desplazamiento visible del centro

---

## 2. Caso en formato de `dimension_construccion_del_caso`

### 2.1. `construccion_conceptual`

#### `idea_activa_1`
**Identificador de trabajo:** `intento_de_homenaje_visible_al_centro`

- **formulacion_textual_de_la_idea:**
  Fouquet organiza una escena ceremonial destinada a honrar al rey y a devolver
  la gloria visible al centro patronal.
- **formulacion_de_la_idea:** `proposicion_relacional`
- **rol_conceptual:** `puente`
- **peso_relativo:** `0.55`
- **modo_de_presencia:** `explicita`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `desplazamiento_visible_de_la_fascinacion_hacia_fouquet`
    - `tipo_de_relacion:` `condicion`
    - `descripcion_de_la_relacion:`
      La intención ceremonial de homenaje constituye la condición inicial desde
      la cual puede medirse el fracaso del retorno de gloria al centro.
  - `idea_relacionada:` `subordinacion_erosionada_por_el_brillo_propio_del_jugador`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      La intención de homenaje sostiene la lectura de subordinación ceremonial,
      aunque esa subordinación termine erosionándose.

#### `idea_activa_2`
**Identificador de trabajo:** `desplazamiento_visible_de_la_fascinacion_hacia_fouquet`

- **formulacion_textual_de_la_idea:**
  La magnificencia de la fiesta hace que la fascinación social se desplace hacia
  Fouquet, reduciendo el retorno efectivo de gloria al rey.
- **formulacion_de_la_idea:** `proposicion_relacional`
- **rol_conceptual:** `nuclear`
- **peso_relativo:** `0.95`
- **modo_de_presencia:** `explicita_reiterada`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `intento_de_homenaje_visible_al_centro`
    - `tipo_de_relacion:` `contraste`
    - `descripcion_de_la_relacion:`
      La operación ceremonial buscaba una absorción favorable, pero el efecto
      visible real produce el resultado opuesto.
  - `idea_relacionada:` `autonomia_visible_del_jugador_como_poder_propio`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      El desplazamiento de fascinación se apoya en la visibilidad autónoma del
      poder, la riqueza y la capacidad organizativa de Fouquet.
  - `idea_relacionada:` `sancion_como_respuesta_a_la_primacia_visible_competidora`
    - `tipo_de_relacion:` `consecuencia`
    - `descripcion_de_la_relacion:`
      El eclipsamiento relativo del centro prepara y explica la reacción final de
      sanción.

#### `idea_activa_3`
**Identificador de trabajo:** `autonomia_visible_del_jugador_como_poder_propio`

- **formulacion_textual_de_la_idea:**
  Fouquet aparece en la escena como foco visible de riqueza, gusto, redes,
  capacidad organizativa y poder propio, es decir, como un jugador con alta
  autonomía simbólica.
- **formulacion_de_la_idea:** `proposicion_definicional`
- **rol_conceptual:** `complementaria`
- **peso_relativo:** `0.85`
- **modo_de_presencia:** `transversal`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `desplazamiento_visible_de_la_fascinacion_hacia_fouquet`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      La visibilidad de poder propio de Fouquet es una condición central para que
      la fascinación se desplace hacia él.
  - `idea_relacionada:` `subordinacion_erosionada_por_el_brillo_propio_del_jugador`
    - `tipo_de_relacion:` `expansion`
    - `descripcion_de_la_relacion:`
      La autonomía simbólica explica por qué la subordinación ceremonial no logra
      estabilizarse como subordinación efectiva.

#### `idea_activa_4`
**Identificador de trabajo:** `subordinacion_erosionada_por_el_brillo_propio_del_jugador`

- **formulacion_textual_de_la_idea:**
  La subordinación visible sí existe en la superficie ceremonial, pero queda
  erosionada por el propio brillo de Fouquet, que compite con la centralidad del
  rey.
- **formulacion_de_la_idea:** `proposicion_argumentativa`
- **rol_conceptual:** `contrastiva`
- **peso_relativo:** `0.75`
- **modo_de_presencia:** `transversal`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `intento_de_homenaje_visible_al_centro`
    - `tipo_de_relacion:` `contraste`
    - `descripcion_de_la_relacion:`
      La subordinación ceremonial inicial no se sostiene plenamente en la lectura
      efectiva del caso.
  - `idea_relacionada:` `desplazamiento_visible_de_la_fascinacion_hacia_fouquet`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      El eclipse relativo del centro es la prueba visible de que la subordinación
      no logró consolidarse.
  - `idea_relacionada:` `sancion_como_respuesta_a_la_primacia_visible_competidora`
    - `tipo_de_relacion:` `condicion`
    - `descripcion_de_la_relacion:`
      La erosión de la subordinación es una condición importante de la sanción
      posterior.

#### `idea_activa_5`
**Identificador de trabajo:** `sancion_como_respuesta_a_la_primacia_visible_competidora`

- **formulacion_textual_de_la_idea:**
  El caso culmina en sanción porque el centro patronal interpreta la escena como
  una competencia intolerable de primacía visible.
- **formulacion_de_la_idea:** `proposicion_consecuencial_abierta`
- **ajuste_de_formato:** `formulacion_abierta_controlada`
- **rol_conceptual:** `derivada`
- **peso_relativo:** `0.85`
- **modo_de_presencia:** `localizada`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `desplazamiento_visible_de_la_fascinacion_hacia_fouquet`
    - `tipo_de_relacion:` `consecuencia`
    - `descripcion_de_la_relacion:`
      La reacción punitiva se deriva del desplazamiento visible de centralidad.
  - `idea_relacionada:` `subordinacion_erosionada_por_el_brillo_propio_del_jugador`
    - `tipo_de_relacion:` `consecuencia`
    - `descripcion_de_la_relacion:`
      La sanción también se deriva de que la subordinación no logró fijarse como
      subordinación efectiva.
  - `idea_relacionada:` `autonomia_visible_del_jugador_como_poder_propio`
    - `tipo_de_relacion:` `condicion`
    - `descripcion_de_la_relacion:`
      La existencia de poder visible propio en el jugador hace posible la lectura
      de competencia que desemboca en castigo.

> **Nota de formato:**
> El archivo de dimensiones solo admite como valor de `formulacion_de_la_idea`
> una de estas categorías:
> `proposicion_definicional`, `proposicion_relacional`,
> `proposicion_argumentativa`, `proposicion_operativa`,
> `formulacion_abierta_controlada`.
>
> En esta idea, el contenido es de carácter consecuencial, pero se codifica bajo
> `formulacion_abierta_controlada` porque la función principal de la idea es
> estructurar una derivación compleja y no una simple definición o relación.

### 2.2. `configuracion_narrativa`

- `contrastiva`

### 2.3. Justificación breve de la `configuracion_narrativa`

El caso se organiza de forma dominantemente `contrastiva` porque su inteligibilidad depende de la oposición entre:

- intención de homenaje al centro;
- y efecto visible de eclipsamiento del centro por el jugador.

La escena solo se vuelve plenamente comprensible cuando se lee como inversión de
la finalidad declarada.

---

## 3. Lectura sintética del caso en el nuevo formato

En el nuevo formato conceptual, el caso Fouquet / Luis XIV queda estructurado
como un caso en el que:

- existe una intención inicial de retorno de gloria al centro;
- pero el brillo visible del jugador genera desplazamiento de fascinación;
- la subordinación ceremonial se erosiona;
- la autonomía simbólica del jugador se vuelve demasiado visible;
- y el resultado final aparece como consecuencia sancionadora de esa competencia
  de primacía visible.

---

# CASO 2 — GALILEO / MÉDICI

## 1. Identificación mínima del caso

- **Centro patronal visible:** la casa de los Médici, con referencia específica a Cosme II
- **Jugador:** Galileo
- **Escena visible principal:** reconducción simbólica del descubrimiento de las lunas de Júpiter hacia la grandeza de los Médici
- **Resultado visible del caso:** nombramiento oficial en la corte y salario respetable
- **Lectura mínima del tipo de caso:** un mérito propio valioso es absorbido y reinyectado como gloria del centro patronal, evitando eclipsamiento y fortaleciendo el patronazgo

---

## 2. Caso en formato de `dimension_construccion_del_caso`

### 2.1. `construccion_conceptual`

#### `idea_activa_1`
**Identificador de trabajo:** `descubrimiento_propio_del_jugador_con_alto_valor_simbolico`

- **formulacion_textual_de_la_idea:**
  Galileo posee un descubrimiento propio de gran valor simbólico y cognitivo,
  susceptible de convertirse en brillo autónomo.
- **formulacion_de_la_idea:** `proposicion_definicional`
- **rol_conceptual:** `complementaria`
- **peso_relativo:** `0.45`
- **modo_de_presencia:** `explicita`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `reinyeccion_del_hallazgo_en_la_gloria_del_centro_patronal`
    - `tipo_de_relacion:` `condicion`
    - `descripcion_de_la_relacion:`
      Solo porque el hallazgo es valioso puede ser reconducido de manera eficaz a
      la gloria de los Médici.
  - `idea_relacionada:` `merito_propio_subordinado_sin_convertirse_en_sombra`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      El mérito propio del jugador sigue existiendo, pero no toma la forma de un
      foco rival autónomo.

#### `idea_activa_2`
**Identificador de trabajo:** `reinyeccion_del_hallazgo_en_la_gloria_del_centro_patronal`

- **formulacion_textual_de_la_idea:**
  Galileo convierte deliberadamente su descubrimiento en un acontecimiento
  simbólico que engrandece a los Médici y devuelve gloria visible al centro.
- **formulacion_de_la_idea:** `proposicion_relacional`
- **rol_conceptual:** `nuclear`
- **peso_relativo:** `0.95`
- **modo_de_presencia:** `explicita_reiterada`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `descubrimiento_propio_del_jugador_con_alto_valor_simbolico`
    - `tipo_de_relacion:` `condicion`
    - `descripcion_de_la_relacion:`
      La operación simbólica solo es posible porque el hallazgo posee valor real.
  - `idea_relacionada:` `merito_propio_subordinado_sin_convertirse_en_sombra`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      La reinyección simbólica al centro explica cómo el mérito propio del
      jugador puede permanecer subordinado sin volverse amenaza.
  - `idea_relacionada:` `recompensa_patronal_como_resultado_de_la_operacion_simbolica`
    - `tipo_de_relacion:` `consecuencia`
    - `descripcion_de_la_relacion:`
      El nombramiento y el salario aparecen como consecuencia de la operación de
      engrandecimiento del centro.

#### `idea_activa_3`
**Identificador de trabajo:** `merito_propio_subordinado_sin_convertirse_en_sombra`

- **formulacion_textual_de_la_idea:**
  El caso muestra que el jugador puede poseer mérito propio visible sin eclipsar
  al centro, siempre que lo reintegre de manera subordinada a la grandeza del
  patrono.
- **formulacion_de_la_idea:** `proposicion_argumentativa`
- **rol_conceptual:** `nuclear`
- **peso_relativo:** `0.85`
- **modo_de_presencia:** `transversal`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `reinyeccion_del_hallazgo_en_la_gloria_del_centro_patronal`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      La subordinación visible del mérito propio se logra porque el descubrimiento
      es reescrito como gloria del centro.
  - `idea_relacionada:` `el_centro_brilla_mas_que_el_jugador_en_la_escena_visible`
    - `tipo_de_relacion:` `expansion`
    - `descripcion_de_la_relacion:`
      Esta idea se despliega en la afirmación de que el centro termina brillando
      más que el jugador.

#### `idea_activa_4`
**Identificador de trabajo:** `el_centro_brilla_mas_que_el_jugador_en_la_escena_visible`

- **formulacion_textual_de_la_idea:**
  La operación de Galileo evita producir sombra sobre los Médici y, por el
  contrario, los hace brillar más que nadie.
- **formulacion_de_la_idea:** `proposicion_relacional`
- **rol_conceptual:** `contrastiva`
- **peso_relativo:** `0.80`
- **modo_de_presencia:** `explicita`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `reinyeccion_del_hallazgo_en_la_gloria_del_centro_patronal`
    - `tipo_de_relacion:` `soporte`
    - `descripcion_de_la_relacion:`
      El brillo reforzado del centro es la prueba visible de la reinyección
      simbólica lograda por Galileo.
  - `idea_relacionada:` `descubrimiento_propio_del_jugador_con_alto_valor_simbolico`
    - `tipo_de_relacion:` `contraste`
    - `descripcion_de_la_relacion:`
      Aunque el descubrimiento es propio del jugador, la escena visible final no
      lo deja como foco principal de reconocimiento.

#### `idea_activa_5`
**Identificador de trabajo:** `recompensa_patronal_como_resultado_de_la_operacion_simbolica`

- **formulacion_textual_de_la_idea:**
  El resultado del caso es favorable porque la operación simbólica fortalece al
  centro y produce reconocimiento patronal para el jugador.
- **formulacion_de_la_idea:** `proposicion_argumentativa`
- **rol_conceptual:** `derivada`
- **peso_relativo:** `0.80`
- **modo_de_presencia:** `localizada`
- **relaciones_con_otras_ideas:**
  - `idea_relacionada:` `reinyeccion_del_hallazgo_en_la_gloria_del_centro_patronal`
    - `tipo_de_relacion:` `consecuencia`
    - `descripcion_de_la_relacion:`
      La recompensa patronal se deriva directamente del éxito de la reinyección
      simbólica.
  - `idea_relacionada:` `el_centro_brilla_mas_que_el_jugador_en_la_escena_visible`
    - `tipo_de_relacion:` `consecuencia`
    - `descripcion_de_la_relacion:`
      La ausencia de eclipsamiento relativo favorece el resultado positivo del
      caso.

### 2.2. `configuracion_narrativa`

- `lineal_progresiva`

### 2.3. Justificación breve de la `configuracion_narrativa`

El caso se organiza mejor como `lineal_progresiva` porque su recorrido puede
leerse como una secuencia relativamente continua:

- descubrimiento valioso;
- elección exclusiva del centro patronal;
- reconducción simbólica del hallazgo hacia la gloria del centro;
- fortalecimiento visible del patrono;
- recompensa final.

No necesita una estructura dominantemente contrastiva para hacerse inteligible,
porque el caso no gira sobre la inversión fallida de una operación, sino sobre la
eficacia progresiva de una absorción favorable.

---

## 3. Lectura sintética del caso en el nuevo formato

En el nuevo formato conceptual, el caso Galileo / Médici queda estructurado como
un caso en el que:

- existe mérito propio real del jugador;
- pero ese mérito no se presenta como foco autónomo rival;
- el hallazgo es reconducido a la gloria del centro patronal;
- el centro brilla más que el jugador en la escena visible;
- y el resultado final aparece como patronazgo favorable y recompensa.

---

## 4. Observación final

La conversión realizada aquí no pretende reemplazar toda la riqueza narrativa de
los ejemplos originales del libro.

Su objetivo es más preciso:

> volverlos utilizables como **casos conceptualmente estructurados** dentro del
> nuevo sistema de `Dimensiones de configuración`, en particular dentro de la
> `dimension_construccion_del_caso`.

Si después se quisiera, estos mismos casos podrían ser extendidos para llenar
otras dimensiones del modelo, pero este documento ya los deja en un formato
suficientemente explícito como para ser tratados como caso dentro del nuevo
marco conceptual.
