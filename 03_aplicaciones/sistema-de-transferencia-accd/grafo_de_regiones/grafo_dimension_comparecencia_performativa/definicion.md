## 9. `dimension_comparecencia_performativa`

### Función general de la dimensión

Describir cómo comparece la pieza como presencia verbal, corporal y performativa,
indicando:

- cómo suena;
- cómo se presenta;
- cuánto depende de la ejecución visible;
- y en qué grado necesita explicitación escénica.

Esta dimensión no describe todavía los recursos complementarios externos
(imágenes, videos o texto de apoyo generados), pero sí regula la forma en que la
pieza debe ser realizada por un emisor visible o audible.

---

### 9.1. `comparecencia_performativa`

**Función:**  
Fijar la configuración general de presencia performativa del emisor.

**Tipo de valor:**  
Estructura compuesta.

**Cardinalidad:**  
Una estructura obligatoria.

**Campos internos:**

- `cercania`
- `autoridad`
- `calidez`
- `intensidad`
- `sobriedad`

---

#### 9.1.1. `cercania`

**Tipo de valor:**  
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La comparecencia mantiene distancia marcada y evita tono de proximidad.

- `media`:
  La comparecencia combina cercanía moderada con cierta reserva expresiva.

- `alta`:
  La comparecencia busca proximidad inmediata y relación directa con el receptor.

---

#### 9.1.2. `autoridad`

**Tipo de valor:**  
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La voz no se apoya especialmente en autoridad explícita o seguridad marcada.

- `media`:
  La voz transmite control suficiente sin volverse dominante o magistral.

- `alta`:
  La voz comparece con seguridad fuerte y alto peso de validación expresiva.

---

#### 9.1.3. `calidez`

**Tipo de valor:**  
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La comparecencia prioriza neutralidad o reserva afectiva.

- `media`:
  La comparecencia conserva una tonalidad cordial sin apoyarse fuertemente en lo afectivo.

- `alta`:
  La comparecencia enfatiza acogida, empatía o acompañamiento afectivo.

---

#### 9.1.4. `intensidad`

**Tipo de valor:**  
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La realización mantiene baja carga expresiva y ritmo contenido.

- `media`:
  La realización sostiene energía perceptible sin volverse enfática de forma constante.

- `alta`:
  La realización exige energía expresiva marcada y alta presencia ejecutiva.

---

#### 9.1.5. `sobriedad`

**Tipo de valor:**  
Categorial ordinal.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La pieza admite una realización más libre, expresiva o marcada.

- `media`:
  La pieza combina control formal con cierta flexibilidad expresiva.

- `alta`:
  La pieza exige contención formal y moderación visible en la ejecución.

---

### 9.2. `modalidad_de_guion`

**Función:**  
Indicar la modalidad general bajo la cual el guión comparece como pieza
realizable.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `presentacion_a_camara`
- `voz_en_off`
- `escenificado`
- `mixto`

**Descripción de los valores:**

- `presentacion_a_camara`:
  La pieza se apoya principalmente en comparecencia directa ante cámara.

- `voz_en_off`:
  La pieza se realiza principalmente mediante voz sin presencia frontal dominante.

- `escenificado`:
  La pieza exige una realización basada en acciones o escenas visibles.

- `mixto`:
  La pieza combina de manera controlada varias modalidades de realización.

**Restricciones:**

- Debe ser coherente con el modo de comparecencia verbal.
- Debe ser realizable dentro del marco de materialización declarado.

---

### 9.3. `modo_de_comparecencia_verbal`

**Función:**  
Indicar cómo comparece verbalmente la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `oral_directo`
- `oral_guiado`
- `oral_escenico`
- `oral_mixto`

**Descripción de los valores:**

- `oral_directo`:
  La verbalización se presenta de forma directa, continua y frontal.

- `oral_guiado`:
  La verbalización sigue una conducción más marcada o más estructurada.

- `oral_escenico`:
  La verbalización depende de una situación escénica o de acciones visibles.

- `oral_mixto`:
  La verbalización combina varios modos de comparecencia oral.

**Restricciones:**

- Debe ser coherente con la modalidad de guion.
- Debe ser compatible con la configuración performativa general.

---

### 9.4. `realizacion_verbal_de_bloque`

**Función:**  
Indicar qué componentes verbales locales puede activar la pieza en sus bloques.

**Tipo de valor:**  
Estructura compuesta.

**Cardinalidad:**  
Una estructura disponible para composición local.

**Campos internos:**

- `emisor`
- `dialogo`

---

#### 9.4.1. `emisor`

**Tipo de valor:**  
Descriptivo controlado.

**Cardinalidad:**  
Cero o uno por bloque.

**Descripción del valor esperado:**  
Debe indicar qué tipo de emisor verbal comparece localmente cuando el bloque lo
requiere.

---

#### 9.4.2. `dialogo`

**Tipo de valor:**  
Descriptivo controlado.

**Cardinalidad:**  
Cero o más unidades por bloque.

**Descripción del valor esperado:**  
Debe indicar el contenido verbal local realizable en un bloque cuando exista
material dialogado o equivalente.

---

### 9.5. `acompanamiento_auditivo`

**Función:**  
Indicar qué tipos de acompañamiento auditivo puede admitir la pieza.

**Tipo de valor:**  
Estructura compuesta.

**Cardinalidad:**  
Una estructura opcionalmente activable.

**Campos internos:**

- `musica`
- `sonido_ambiente`
- `efecto_sonoro`

---

#### 9.5.1. `musica`

**Tipo de valor:**  
Descriptivo controlado.

**Cardinalidad:**  
Cero o una configuración por bloque o por pieza.

**Descripción del valor esperado:**  
Debe indicar el uso local o global de música cuando ésta forme parte de la realización.

---

#### 9.5.2. `sonido_ambiente`

**Tipo de valor:**  
Descriptivo controlado.

**Cardinalidad:**  
Cero o una configuración por bloque o por pieza.

**Descripción del valor esperado:**  
Debe indicar el uso de ambientación sonora cuando ésta acompañe la pieza.

---

#### 9.5.3. `efecto_sonoro`

**Tipo de valor:**  
Descriptivo controlado.

**Cardinalidad:**  
Cero o más por bloque.

**Descripción del valor esperado:**  
Debe indicar efectos sonoros puntuales relevantes para la ejecución local.

---

### 9.6. `regimen_de_explicitacion_escenica`

**Función:**  
Indicar el grado general en que la realización necesita que su dimensión escénica
quede explícitamente señalada.

**Tipo de valor:**  
Categorial ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `ninguna`
- `minima`
- `moderada`
- `detallada`

**Descripción de los valores:**

- `ninguna`:
  La pieza no requiere explicitación escénica relevante en la configuración de entrada.

- `minima`:
  La pieza solo necesita un señalamiento escénico básico y muy controlado.

- `moderada`:
  La pieza necesita varias marcas de realización escénica para funcionar con claridad.

- `detallada`:
  La pieza depende de una explicitación escénica frecuente y estructuralmente importante.

**Restricciones:**

- Debe ser coherente con la modalidad de guion.
- Debe ser compatible con la densidad de acción visible.
- No sustituye todavía las indicaciones escénicas concretas por bloque.

---

### 9.7. `tipo_de_escenificacion_admitida`

**Función:**  
Indicar qué tipo general de escenificación es compatible con la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Uno o más valores compatibles.

**Espacio de valores:**

- `estatica`
- `gestual`
- `demostrativa`
- `con_objetos`
- `con_desplazamiento_controlado`
- `escenificada`
- `mixta_controlada`

**Descripción de los valores:**

- `estatica`:
  La pieza puede realizarse con mínima variación espacial y bajo alta estabilidad corporal.

- `gestual`:
  La pieza admite una realización apoyada en gestos visibles y marcación corporal.

- `demostrativa`:
  La pieza admite mostrar, señalar o ejemplificar visualmente elementos del contenido.

- `con_objetos`:
  La pieza admite incorporar objetos como parte relevante de la realización.

- `con_desplazamiento_controlado`:
  La pieza admite movimiento moderado y regulado del emisor dentro del encuadre.

- `escenificada`:
  La pieza admite una realización claramente montada como escena o microescena.

- `mixta_controlada`:
  La pieza puede combinar varios tipos de escenificación sin perder coherencia.

**Restricciones:**

- Debe ser coherente con el régimen de encuadre performativo.
- Debe ser realizable dentro del codominio elegido.

---

### 9.8. `densidad_de_accion_visible`

**Función:**  
Indicar cuánta acción corporal o visible debe esperarse en la pieza.

**Tipo de valor:**  
Categorial ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `baja`
- `media`
- `alta`

**Descripción de los valores:**

- `baja`:
  La pieza depende poco de acciones visibles y puede realizarse con mínima actividad corporal.

- `media`:
  La pieza requiere una cantidad moderada de acciones visibles distribuidas en la ejecución.

- `alta`:
  La pieza depende de una presencia activa y de acciones visibles frecuentes o relevantes.

**Restricciones:**

- Debe ser coherente con el tipo de escenificación admitida.
- Debe ser compatible con la modalidad de guion.

---

### 9.9. `regimen_de_encuadre_performativo`

**Función:**  
Indicar el tipo general de encuadre compatible con la comparecencia de la pieza.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `encuadre_fijo_frontal`
- `encuadre_fijo_variable`
- `encuadre_con_reencuadre_controlado`
- `encuadre_dinamico_controlado`
- `encuadre_mixto`

**Descripción de los valores:**

- `encuadre_fijo_frontal`:
  La pieza se realiza principalmente en un encuadre frontal estable.

- `encuadre_fijo_variable`:
  La pieza conserva estabilidad general, pero admite pequeñas variaciones de toma o plano.

- `encuadre_con_reencuadre_controlado`:
  La pieza admite cambios de encuadre puntuales y regulados como parte de su realización.

- `encuadre_dinamico_controlado`:
  La pieza admite una movilidad visual mayor, pero todavía sujeta a control compositivo.

- `encuadre_mixto`:
  La pieza combina distintos regímenes de encuadre de manera organizada.

**Restricciones:**

- Debe ser coherente con el tipo de escenificación admitida.
- Debe ser compatible con la densidad de acción visible.

---

### 9.10. `grado_de_dependencia_de_la_performance_visible`

**Función:**  
Indicar en qué medida la eficacia de la pieza depende de la ejecución corporal o
visible del emisor.

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
  La pieza puede sostenerse incluso con performance visible reducida.

- `media`:
  La performance visible aporta valor importante, aunque no carga por sí sola la pieza.

- `alta`:
  La performance visible resulta decisiva para la eficacia de la pieza.

- `dominante`:
  La performance visible ocupa un lugar central y casi definitorio en la realización.

**Restricciones:**

- Debe ser coherente con el tipo de escenificación admitida.
- Debe ser compatible con la modalidad de guion y con el modo de comparecencia verbal.
