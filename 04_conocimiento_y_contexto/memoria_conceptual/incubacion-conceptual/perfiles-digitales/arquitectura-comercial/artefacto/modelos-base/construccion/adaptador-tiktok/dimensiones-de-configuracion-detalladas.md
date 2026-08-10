https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69e1a9ee-1998-83e8-9f9b-bfb9c701fe55

# Dimensiones de configuración

## Modelo base detallado

## Versión de trabajo para la reconstrucción completa del modelo

## 1. Nomenclatura

### 1.1. `dimensión`

Unidad mayor de organización del modelo.

Cada dimensión reúne un conjunto de campos que pertenecen a un mismo aspecto de
configuración.

### 1.2. `campo`

Elemento interno de una dimensión.

Cada campo debe tener:

- función;
- tipo de valor;
- cardinalidad;
- espacio de valores;
- descripción de valores;
- y restricciones.

### 1.3. `valor`

Posibilidad válida dentro del espacio de valores de un campo.

### 1.4. Alcance del presente documento

En este documento se describen:

- las **dimensiones**;
- los **campos** de cada dimensión;
- los **valores** de esos campos;
- y, cuando corresponde, las estructuras compuestas heredadas de los modelos
  previos.

---

## 2. Estructura general del modelo de configuración

Las dimensiones de configuración del nuevo modelo base son las siguientes:

1. `dimension_identidad_operativa_de_la_realizacion`
2. `dimension_orientacion_funcional_pragmatica`
3. `dimension_escala_temporal_y_resolucion_realizativa`
4. `dimension_acoplamiento_receptoral`
5. `dimension_dinamica_atencional_y_procesual`
6. `dimension_construccion_del_caso`
7. `dimension_comparecencia_performativa`
8. `dimension_marco_de_materializacion`
9. `dimension_composicion_segmental_de_la_salida`
10. `dimension_recursos_complementarios_de_manifestacion`

---

## 3. `dimension_identidad_operativa_de_la_realizacion`

### Función general de la dimensión

Describir la identidad declarativa de la realización que se busca construir,
indicando:

- cómo se formula;
- con qué precisión se formula;
- y con qué jerarquía opera dentro del sistema.

Esta dimensión no describe todavía el contenido del caso, ni su composición
segmental, ni su superficie audiovisual. Su función es fijar **qué realización se
está declarando** y con qué grado de centralidad.

---

### 3.1. `formulacion_canonica`

**Función:**
Nombrar de manera explícita la realización que será instanciada.

**Tipo de valor:**
Descriptivo controlado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**
Una formulación breve, inequívoca y operativa de la realización.

**Descripción del valor esperado:**
El valor de este campo no debe ser un tema, ni un título de archivo, ni una
instrucción de ejecución completa. Debe formular una finalidad de realización
legible como propósito adaptativo.

**Ejemplos estructuralmente válidos:**

- `crear guion para video de TikTok`
- `crear guion para video corto explicativo`
- `crear guion breve de contraste`
- `crear secuencia audiovisual de reexplicacion`
- `crear microguion de apertura de serie`

**Restricciones:**

- Debe formular una intención de realización, no un tema.
- No debe confundirse con el nombre de un archivo.
- No debe incluir todavía toda la lógica de composición.
- Debe poder funcionar como identidad declarativa de la pieza.

---

### 3.2. `nivel_de_especificidad`

**Función:**
Indicar el grado de precisión con el que está formulada la realización.

**Tipo de valor:**
Categorial ordinal.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `general`
- `intermedia`
- `especifica`

**Descripción de los valores:**

- `general`:
  La realización está formulada en un nivel amplio. Nombra una clase de salida o
  de operación sin fijar todavía con mucha precisión el tipo concreto de pieza.
  Deja abiertas varias formas realizativas compatibles.

- `intermedia`:
  La realización está formulada con un grado medio de precisión. Delimita mejor
  la clase de guión o de operación buscada, pero todavía deja margen para varias
  variantes compatibles dentro del mismo dominio.

- `especifica`:
  La realización está formulada con alta precisión. Ya orienta claramente el tipo
  concreto de pieza a construir y reduce de manera fuerte el espacio de salidas
  compatibles.

**Restricciones:**

- Toda instancia debe fijar exactamente un nivel de especificidad.
- La formulación canónica debe ser coherente con el nivel elegido.

---

### 3.3. `prioridad_de_intencion`

**Función:**
Indicar la jerarquía relativa de esta realización dentro del sistema de
configuración.

**Tipo de valor:**
Ordinal.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `principal`
- `secundaria`
- `terciaria`
- `auxiliar`

**Descripción de los valores:**

- `principal`:
  La realización ocupa el lugar dominante dentro del sistema. Si existen otras
  orientaciones activas, deben subordinarse a ésta.

- `secundaria`:
  La realización cumple una función relevante pero no dominante. Matiza,
  acompaña o refuerza una orientación principal.

- `terciaria`:
  La realización tiene un peso complementario menor. Puede influir en detalles de
  composición, pero no define el criterio principal de éxito.

- `auxiliar`:
  La realización cumple una función instrumental o de soporte. Su presencia no
  estructura el núcleo del sistema, pero puede ayudar a estabilizarlo.

**Restricciones:**

- Debe haber exactamente una prioridad declarada.
- La prioridad debe ser coherente con la jerarquía general de la configuración.

---

## 4. `dimension_orientacion_funcional_pragmatica`

### Función general de la dimensión

Describir qué quiere hacer la realización, qué efecto busca producir y qué clase
principal de respuesta espera activar.

Esta dimensión fija el vector pragmático de la pieza. No describe todavía su
segmentación ni su comparecencia local, pero sí el tipo de operación dominante
que la salida debe cumplir.

---

### 4.1. `funcion_dominante`

**Función:**
Fijar qué operación principal busca cumplir la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `enseñar`
- `sintetizar`
- `persuadir`
- `evaluar`
- `diagnosticar`
- `captar_atencion`
- `activar_interaccion`
- `convertir`
- `distribuir`
- `manifestar_comercialmente`
- `abrir_serie`
- `continuar_serie`
- `cerrar_serie`

**Descripción de los valores:**

- `enseñar`:
  La realización busca facilitar comprensión, asimilación o aprendizaje de una
  idea, estructura u operación.

- `sintetizar`:
  La realización busca condensar contenido, reducir extensión y ofrecer una forma
  concentrada de comprensión.

- `persuadir`:
  La realización busca inclinar al receptor hacia una posición, una interpretación
  o una disposición determinada.

- `evaluar`:
  La realización busca valorar, estimar o poner a prueba un contenido, criterio o
  desempeño.

- `diagnosticar`:
  La realización busca identificar un estado, problema, patrón o condición.

- `captar_atencion`:
  La realización busca abrir atención y atraer al receptor hacia el campo de la
  pieza.

- `activar_interaccion`:
  La realización busca producir una respuesta interactiva explícita, como
  comentar, responder o intervenir.

- `convertir`:
  La realización busca llevar al receptor hacia una decisión o cambio más fuerte,
  normalmente con una dirección práctica definida.

- `distribuir`:
  La realización busca circular contenido de forma eficiente y reconocible,
  priorizando transferibilidad o circulación.

- `manifestar_comercialmente`:
  La realización busca comparecer como pieza ligada a una lógica comercial,
  promocional o de posicionamiento.

- `abrir_serie`:
  La realización busca iniciar una secuencia de piezas relacionadas.

- `continuar_serie`:
  La realización busca sostener una secuencia ya abierta.

- `cerrar_serie`:
  La realización busca concluir una secuencia de piezas relacionadas.

**Restricciones:**

- Debe haber exactamente una función dominante.
- Las demás orientaciones pragmáticas deben ser compatibles con ella.

---

### 4.2. `efecto_buscado`

**Función:**
Describir el efecto principal que la realización pretende provocar en el
receptor.

**Tipo de valor:**
Categorial semiabierto.

**Cardinalidad:**
Uno o más valores, con una dominancia explícita.

**Espacio de valores sugerido:**

- `comprension_rapida`
- `curiosidad`
- `identificacion`
- `sorpresa`
- `urgencia`
- `retencion`
- `expectativa_de_resolucion`
- `deseo_de_guardar`
- `deseo_de_comentar`
- `deseo_de_compartir`
- `deseo_de_ver_hasta_el_final`
- `deseo_de_ir_al_perfil`
- `predisposicion_a_serie`
- `disposicion_a_accion`

**Descripción de los valores:**

- `comprension_rapida`:
  La pieza busca que el receptor entienda con rapidez una distinción, idea,
  estructura u operación.

- `curiosidad`:
  La pieza busca abrir una inquietud cognitiva que invite a seguir atendiendo o a
  explorar más.

- `identificacion`:
  La pieza busca que el receptor reconozca algo propio, vivido o cercano en el
  contenido.

- `sorpresa`:
  La pieza busca introducir una ruptura de expectativa que reorganice la atención.

- `urgencia`:
  La pieza busca intensificar la percepción de necesidad, inmediatez o relevancia
  práctica.

- `retencion`:
  La pieza busca permanecer en memoria o dejar una huella cognitiva reconocible.

- `expectativa_de_resolucion`:
  La pieza busca mantener al receptor esperando un cierre, una respuesta o una
  clarificación posterior.

- `deseo_de_guardar`:
  La pieza busca que el receptor perciba la salida como algo reutilizable o digno
  de conservar.

- `deseo_de_comentar`:
  La pieza busca generar reacción explícita.

- `deseo_de_compartir`:
  La pieza busca circular por recomendación o reenvío.

- `deseo_de_ver_hasta_el_final`:
  La pieza busca sostener la atención completa hasta el cierre.

- `deseo_de_ir_al_perfil`:
  La pieza busca extender la navegación hacia otras salidas o hacia la fuente.

- `predisposicion_a_serie`:
  La pieza busca preparar al receptor para continuidad serial.

- `disposicion_a_accion`:
  La pieza busca abrir una disposición práctica, de aplicación o respuesta.

**Restricciones:**

- Puede haber más de un efecto, pero uno debe ser dominante.
- Los efectos buscados deben ser compatibles con la función dominante.

---

### 4.3. `accion_esperada`

**Función:**
Fijar la acción concreta que la realización espera activar en el receptor.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Uno o más valores.

**Espacio de valores:**

- `ver_hasta_el_final`
- `comentar`
- `guardar`
- `compartir`
- `seguir_cuenta`
- `ir_al_perfil`
- `consumir_parte_siguiente`
- `solicitar_mas_informacion`
- `hacer_click`
- `aplicar_lo_mostrado`
- `ninguna_explicita`

**Descripción de los valores:**

- `ver_hasta_el_final`:
  La pieza busca que el receptor complete todo el recorrido.

- `comentar`:
  La pieza busca una intervención verbal o reactiva explícita.

- `guardar`:
  La pieza busca ser conservada para uso posterior.

- `compartir`:
  La pieza busca ser redistribuida por el receptor.

- `seguir_cuenta`:
  La pieza busca convertir la recepción en seguimiento estable.

- `ir_al_perfil`:
  La pieza busca extender la atención hacia el resto del ecosistema de salida.

- `consumir_parte_siguiente`:
  La pieza busca continuidad serial.

- `solicitar_mas_informacion`:
  La pieza busca abrir una demanda explícita de ampliación.

- `hacer_click`:
  La pieza busca una acción puntual sobre un enlace o elemento de salida.

- `aplicar_lo_mostrado`:
  La pieza busca que el receptor ejecute o ponga en práctica el contenido.

- `ninguna_explicita`:
  La pieza no exige una acción externa inmediata claramente declarada.

**Restricciones:**

- Debe ser coherente con la función dominante.
- Las acciones esperadas deben ser plausibles dentro del codominio elegido.

---

### 4.4. `configuracion_discursiva`

**Función:**
Describir el modo de formulación predominante de la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `definicional`
- `explicativa`
- `argumentativa`
- `operativa`
- `sintetizadora`
- `captativa`
- `hibrida_controlada`

**Descripción de los valores:**

- `definicional`:
  La realización se formula prioritariamente para fijar qué es algo,
  delimitarlo o precisarlo.

- `explicativa`:
  La realización se formula prioritariamente para hacer comprensible un
  contenido, desplegarlo o aclararlo.

- `argumentativa`:
  La realización se formula prioritariamente para sostener, defender o justificar
  una tesis.

- `operativa`:
  La realización se formula prioritariamente para indicar qué hacer, cómo
  proceder o qué operación ejecutar.

- `sintetizadora`:
  La realización se formula prioritariamente para condensar y reorganizar el
  contenido en forma resumida.

- `captativa`:
  La realización se formula prioritariamente para abrir atención, provocar
  entrada o intensificar interés inicial.

- `hibrida_controlada`:
  La realización combina más de una modalidad discursiva, pero mantiene una
  organización controlada y reconocible.

**Restricciones:**

- Debe haber exactamente una configuración discursiva predominante.
- Si es híbrida, la combinación debe seguir siendo identificable y controlada.

---

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

---

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

---

## 7. `dimension_dinamica_atencional_y_procesual`

### Función general de la dimensión

Describir la relación atencional dominante del receptor con la pieza y la forma
procesual del recorrido que la realización deberá activar o sostener.

---

### 7.1. `estado_atencional`

**Función:**
Describir la configuración dominante de la relación atencional del receptor con
la pieza al momento de la realización.

**Tipo de valor:**
Categorial semiabierto.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores sugerido:**

- `atencion_no_abierta`
- `atencion_inestable`
- `atencion_fragmentada`
- `atencion_superficial`
- `atencion_sostenida`
- `atencion_en_exploracion`
- `atencion_lista_para_profundizacion`
- `atencion_lista_para_activacion`
- `atencion_lista_para_continuidad`
- `atencion_requiere_reenganche`

**Descripción de los valores:**

- `atencion_no_abierta`:
  La atención aún no ha sido captada de forma efectiva.

- `atencion_inestable`:
  La atención se abre, pero no se sostiene fácilmente.

- `atencion_fragmentada`:
  La atención está repartida, interrumpida o expuesta a dispersión fuerte.

- `atencion_superficial`:
  La atención está abierta, pero todavía en un nivel poco profundo.

- `atencion_sostenida`:
  La atención ya tiene un grado fuerte de continuidad.

- `atencion_en_exploracion`:
  La atención está disponible para una entrada exploratoria.

- `atencion_lista_para_profundizacion`:
  La atención está lista para avanzar hacia mayor densidad o desarrollo.

- `atencion_lista_para_activacion`:
  La atención está lista para recibir una invitación más práctica o decisional.

- `atencion_lista_para_continuidad`:
  La atención está lista para enlazarse con piezas futuras.

- `atencion_requiere_reenganche`:
  La atención necesita ser recuperada o reabierta.

---

### 7.2. `regimen_de_activacion_atencional`

**Función:**
Fijar el modo principal en que la realización debe activar, sostener o reabrir la
atención.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `apertura_inmediata`
- `apertura_progresiva`
- `reenganche`
- `sostenimiento_desde_el_inicio`
- `activacion_por_continuidad`

**Descripción de los valores:**

- `apertura_inmediata`:
  La realización debe abrir atención desde el inicio, sin preámbulos extensos.

- `apertura_progresiva`:
  La realización puede construir la atención de forma escalonada.

- `reenganche`:
  La realización debe recuperar una atención que ya estuvo abierta pero se aflojó.

- `sostenimiento_desde_el_inicio`:
  La atención debe ser captada y mantenida desde el primer tramo.

- `activacion_por_continuidad`:
  La atención se apoya en continuidad con piezas previas o contexto ya activo.

---

### 7.3. `dinamica_procesual`

**Función:**
Describir la experiencia de recorrido de la realización.

**Tipo de valor:**
Compuesto.

**Cardinalidad:**
Un valor obligatorio compuesto por cinco ejes.

**Campos internos obligatorios:**

- `explicitud`
- `continuidad`
- `friccion_interpretativa`
- `compresion`
- `recapitulacion`

#### 7.3.1. `explicitud`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: muchas cosas quedan implícitas;
  - `media`: parte importante del contenido se explicita;
  - `alta`: la realización vuelve muy claras sus relaciones principales.

#### 7.3.2. `continuidad`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: recorrido más cortado o discontinuo;
  - `media`: continuidad suficiente pero no completamente fluida;
  - `alta`: recorrido muy continuo y articulado.

#### 7.3.3. `friccion_interpretativa`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: el recorrido exige poco esfuerzo interpretativo adicional;
  - `media`: el recorrido contiene zonas moderadas de tensión interpretativa;
  - `alta`: el recorrido exige un trabajo inferencial fuerte.

#### 7.3.4. `compresion`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: la realización se despliega con más amplitud;
  - `media`: combina condensación y despliegue;
  - `alta`: concentra mucho contenido en poco espacio.

#### 7.3.5. `recapitulacion`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: pocas reformulaciones o recuperaciones del recorrido;
  - `media`: cierto grado de reformulación o síntesis parcial;
  - `alta`: fuerte presencia de recuperación, síntesis o reexpresión.

**Restricciones generales de `dinamica_procesual`:**

- Los cinco ejes deben declararse.
- Deben ser compatibles con el estado atencional y el régimen de activación.

---

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

---

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

---

## 10. `dimension_marco_de_materializacion`

### Función general de la dimensión

Describir la clase general de salida y el marco material en el que esa salida
pertenece al codominio.

---

### 10.1. `clase_de_materializacion`

**Función:**
Describir la clase de materialización textual válida para la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `guion_audiovisual_breve`

**Descripción del valor:**
La salida pertenece a la clase de guiones breves orientados a organizar una
realización audiovisual corta.

**Restricciones:**

- Toda instancia del modelo debe fijar esta clase.
- La salida debe ser reconocible como guión audiovisual breve.

---

### 10.2. `plataforma`

**Función:**
Describir el entorno de plataforma para el que se construye la salida.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `tiktok`

**Descripción del valor:**
La salida pertenece al entorno TikTok, con las restricciones y expectativas
materiales asociadas a esa plataforma.

---

### 10.3. `aplicacion_de_plataforma`

**Función:**
Describir la aplicación específica del entorno de plataforma dentro de la cual la
salida debe ser realizable.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `video_tiktok`

**Descripción del valor:**
La salida debe comparecer como video breve vertical dentro del entorno TikTok.

**Restricciones generales de la dimensión:**

- `clase_de_materializacion`, `plataforma` y `aplicacion_de_plataforma` deben ser
  compatibles entre sí.

---

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

---

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

---
