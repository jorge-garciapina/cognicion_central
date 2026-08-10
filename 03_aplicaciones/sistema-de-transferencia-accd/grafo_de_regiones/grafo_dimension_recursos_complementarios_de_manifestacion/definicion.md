## 12. `dimension_recursos_complementarios_de_manifestacion`

### Función general de la dimensión

Describir el régimen general de uso de recursos complementarios que acompañan al
guión sin fijar todavía su realización local por bloque.

Su función es declarar, a nivel de entrada:

- qué clases de recursos complementarios usa la pieza;
- con qué peso los usa;
- qué función general cumplen;
- cómo se distribuyen;
- y bajo qué criterio general deben mantenerse coherentes.

---

### 12.1. `uso_de_texto_en_pantalla`

**Función:**  
Indicar el régimen general de uso de texto en pantalla como recurso
complementario de la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `sin_texto_en_pantalla`
- `texto_minimo_de_refuerzo`
- `texto_distribuido_de_refuerzo`
- `texto_estructural`
- `texto_variable_segun_bloque`

**Descripción de los valores:**

- `sin_texto_en_pantalla`:
  La pieza no depende de texto visible como recurso complementario.

- `texto_minimo_de_refuerzo`:
  La pieza usa solo palabras clave o apoyos textuales muy breves.

- `texto_distribuido_de_refuerzo`:
  La pieza reparte pequeños apoyos textuales a lo largo de varios bloques.

- `texto_estructural`:
  El texto visible cumple una función importante en la organización de la pieza.

- `texto_variable_segun_bloque`:
  La presencia de texto visible cambia según la función local de cada bloque.

**Restricciones:**

- Debe ser coherente con la modalidad de guion.
- No fija todavía contenidos concretos por bloque.

---

### 12.2. `uso_de_imagen_generada`

**Función:**  
Indicar el régimen general de uso de imágenes generadas o imágenes de apoyo
dentro de la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `sin_imagen_generada`
- `imagen_puntual_de_refuerzo`
- `imagen_distribuida`
- `imagen_estructural`
- `imagen_variable_segun_bloque`

**Descripción de los valores:**

- `sin_imagen_generada`:
  La pieza no incorpora imágenes generadas como recurso complementario.

- `imagen_puntual_de_refuerzo`:
  La pieza usa imágenes aisladas para reforzar momentos específicos.

- `imagen_distribuida`:
  La pieza reparte imágenes de apoyo en varios tramos del recorrido.

- `imagen_estructural`:
  La pieza depende de imágenes como parte relevante de su composición general.

- `imagen_variable_segun_bloque`:
  El uso de imagen cambia según la función y necesidad de cada bloque.

**Restricciones:**

- No fija todavía la imagen concreta ni su prompt local.
- Debe ser coherente con el criterio general de coherencia de recursos.

---

### 12.3. `uso_de_video_generado`

**Función:**  
Indicar el régimen general de uso de fragmentos visuales dinámicos o videos
generados que acompañan la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `sin_video_generado`
- `video_puntual_de_refuerzo`
- `video_distribuido`
- `video_estructural`
- `video_variable_segun_bloque`

**Descripción de los valores:**

- `sin_video_generado`:
  La pieza no incorpora fragmentos de video generado como recurso complementario.

- `video_puntual_de_refuerzo`:
  La pieza usa videos breves solo en momentos específicos de apoyo.

- `video_distribuido`:
  La pieza reparte fragmentos de video en varios bloques o segmentos.

- `video_estructural`:
  La pieza depende de video complementario como parte importante de su organización.

- `video_variable_segun_bloque`:
  El uso de video cambia según la función local de los bloques.

**Restricciones:**

- No fija todavía el video concreto ni su prompt local.
- Debe ser realizable dentro del marco de materialización.

---

### 12.4. `uso_de_audio_generado`

**Función:**  
Indicar el régimen general de uso de recursos sonoros o auditivos generados que
acompañan el guión.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `sin_audio_generado`
- `audio_puntual_de_refuerzo`
- `audio_distribuido`
- `audio_estructural`
- `audio_variable_segun_bloque`

**Descripción de los valores:**

- `sin_audio_generado`:
  La pieza no incorpora audio generado como recurso complementario específico.

- `audio_puntual_de_refuerzo`:
  La pieza usa apoyos sonoros aislados en momentos localizados.

- `audio_distribuido`:
  La pieza distribuye apoyos sonoros a lo largo de distintos bloques.

- `audio_estructural`:
  El recurso sonoro cumple un papel relevante en la composición global de la pieza.

- `audio_variable_segun_bloque`:
  El uso de audio complementario cambia según la función local de los bloques.

**Restricciones:**

- No fija todavía el contenido sonoro exacto por bloque.
- Debe ser coherente con el acompañamiento auditivo general de la pieza.

---

### 12.5. `funcion_predominante_de_los_recursos_complementarios`

**Función:**  
Indicar qué función cumplen predominantemente los recursos complementarios dentro
de la pieza.

**Tipo de valor:**  
Categorial cerrado múltiple controlado.

**Cardinalidad:**  
Uno o más valores compatibles.

**Espacio de valores:**

- `ilustrativa`
- `explicativa`
- `contrastiva`
- `ambiental`
- `atencional`
- `simbolica`
- `demostrativa`
- `narrativa`
- `mixta_controlada`

**Descripción de los valores:**

- `ilustrativa`:
  Los recursos complementarios sirven principalmente para mostrar o representar el contenido.

- `explicativa`:
  Los recursos complementarios ayudan a hacer más comprensible el contenido principal.

- `contrastiva`:
  Los recursos complementarios introducen o refuerzan oposiciones relevantes.

- `ambiental`:
  Los recursos complementarios ayudan a construir atmósfera o contexto sensorial.

- `atencional`:
  Los recursos complementarios ayudan a captar, sostener o reactivar la atención.

- `simbolica`:
  Los recursos complementarios aportan imágenes, sonidos o elementos de valor simbólico.

- `demostrativa`:
  Los recursos complementarios sirven para mostrar un procedimiento, caso o evidencia.

- `narrativa`:
  Los recursos complementarios contribuyen al avance narrativo o secuencial de la pieza.

- `mixta_controlada`:
  Los recursos complementarios combinan varias funciones de forma organizada.

**Restricciones:**

- Los valores seleccionados deben ser compatibles entre sí.
- La función predominante debe ser coherente con la función dominante de la pieza.

---

### 12.6. `grado_de_dependencia_de_recursos_complementarios`

**Función:**  
Indicar en qué medida la pieza depende de los recursos complementarios para
funcionar correctamente.

**Tipo de valor:**  
Categorial ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `baja`
- `media`
- `alta`
- `dominante`

**Descripción de los valores:**

- `baja`:
  La pieza puede sostenerse casi por completo sin depender de recursos complementarios.

- `media`:
  Los recursos complementarios aportan valor importante, pero no cargan el núcleo de la pieza.

- `alta`:
  La pieza depende claramente de esos recursos para alcanzar su forma esperada.

- `dominante`:
  Los recursos complementarios ocupan un lugar central en la eficacia de la pieza.

**Restricciones:**

- Debe ser coherente con el uso declarado de cada tipo de recurso.
- No debe contradecir la modalidad general de realización.

---

### 12.7. `regimen_de_distribucion_de_recursos_complementarios`

**Función:**  
Indicar cómo se distribuyen globalmente los recursos complementarios a lo largo
de la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `concentrado_en_apertura`
- `concentrado_en_desarrollo`
- `concentrado_en_cierre`
- `distribuido_regularmente`
- `distribuido_selectivamente`
- `distribucion_variable_controlada`

**Descripción de los valores:**

- `concentrado_en_apertura`:
  Los recursos complementarios se usan principalmente al inicio de la pieza.

- `concentrado_en_desarrollo`:
  Los recursos complementarios se usan sobre todo en el núcleo de desarrollo.

- `concentrado_en_cierre`:
  Los recursos complementarios se reservan principalmente para la clausura.

- `distribuido_regularmente`:
  Los recursos complementarios se reparten con relativa regularidad a lo largo de la pieza.

- `distribuido_selectivamente`:
  Los recursos complementarios aparecen solo en puntos estratégicos seleccionados.

- `distribucion_variable_controlada`:
  La distribución cambia según necesidades locales, pero bajo un criterio estable.

**Restricciones:**

- Debe ser coherente con la arquitectura macro.
- Debe poder realizarse dentro de la segmentación interna declarada.

---

### 12.8. `criterio_de_coherencia_de_recursos_complementarios`

**Función:**  
Indicar el principio general que debe guiar la coherencia entre los recursos
complementarios y el contenido principal del guión.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `coherencia_literal`
- `coherencia_conceptual`
- `coherencia_metaforica`
- `coherencia_atmosferica`
- `coherencia_mixta_controlada`

**Descripción de los valores:**

- `coherencia_literal`:
  Los recursos complementarios deben corresponder de manera directa y visible con el contenido.

- `coherencia_conceptual`:
  Los recursos complementarios deben alinearse con la idea o estructura conceptual del guión.

- `coherencia_metaforica`:
  Los recursos complementarios pueden operar mediante equivalencias o asociaciones no literales.

- `coherencia_atmosferica`:
  Los recursos complementarios deben sostener la atmósfera general más que ilustrar literalmente.

- `coherencia_mixta_controlada`:
  La coherencia puede combinar varios criterios, siempre que la combinación sea estable.

**Restricciones:**

- Debe ser coherente con la función predominante de los recursos complementarios.
- Debe poder sostenerse de manera consistente a lo largo de la pieza.
