https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69e6ad58-6020-83e8-95ab-19b471eed25b

# Protocolo de composición dimensional integrado por campo de salida

## Relación refinada entre cada campo de cada capa de la Manifestación codominial compuesta y los campos de las Dimensiones de configuración

---

## 0. Propósito del documento

Este documento continúa la misma línea de la **Estructura general propuesta de la Manifestación codominial compuesta**, pero añade un nivel más fino de explicitación.

Su objetivo ya no es solo decir:

- qué campos de las `Dimensiones de configuración` intervienen en cada campo de salida;
- y de qué modo general contribuyen;

sino también:

- indicar **cómo contribuye cada valor** de los campos fuente en la construcción del campo de salida;
- mantener esa explicación **dentro de la estructura de la manifestación**;
- y evitar el tratamiento aislado de los campos fuente, de modo que el lector pueda ver la mecánica composicional directamente sobre el objeto de salida.

Este documento, por tanto, debe leerse como un **prompt de construcción integrado**:

> dado un conjunto de instancias contextuales de las `Dimensiones de configuración`, construir una `Manifestación codominial compuesta` recorriendo sus capas y campos, y usando en cada punto las contribuciones valor-por-valor de los campos fuente correspondientes.

No redefine las dimensiones. Tampoco redefine la manifestación. Su función es otra:

- volver explícita la **mecánica de composición** entre ambas.

---

## 1. Regla de lectura

Para cada campo de salida se presentan cuatro niveles.

### A. Campo de salida

El campo concreto dentro de una capa de la `Manifestación codominial compuesta`.

### B. Campos de las dimensiones que contribuyen

Los campos de entrada que intervienen en su construcción.

### C. Contribución por valores

La forma en que **cada valor** de los campos fuente modifica, restringe, modula, distribuye o deriva la forma final del campo de salida.

### D. Interacciones relevantes

Cómo se resuelven tensiones o cooperaciones entre varios campos fuente cuando afectan el mismo campo de salida.

---

## 2. Modos de contribución

Para mantener consistencia terminológica se usan estos verbos:

- **fija**: determina directamente el campo de salida.
- **restringe**: reduce el rango de configuraciones admisibles.
- **modula**: ajusta intensidad, densidad, tono, forma o grado.
- **distribuye**: reparte contenido, recursos o peso entre bloques o capas.
- **activa**: vuelve obligatoria una presencia o recurso.
- **desactiva**: suprime o vuelve no obligatoria una presencia o recurso.
- **prioriza**: da precedencia a una opción frente a otras compatibles.
- **deriva**: no fija directamente, pero permite construir el campo de salida por inferencia controlada.
- **proyecta**: orienta el comportamiento del campo hacia otros bloques o capas.
- **justifica**: deja trazabilidad explícita de por qué la salida fue compuesta así.

---

## 3. Cabecera o identidad general de la pieza

### 3.1. `identificacion_general.id_de_manifestacion`

**Campos que contribuyen:**

- `formulacion_canonica`
- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`
- `alcance_de_realizacion`

**Contribución por valores:**

#### `formulacion_canonica`

No tiene un conjunto finito cerrado de valores. Cualquier formulación válida contribuye así:

- aporta el núcleo temático del identificador;
- fija qué pieza concreta se está rastreando;
- debe aparecer en forma condensada y normalizada, no como frase completa libre.

#### `clase_de_materializacion`

- `guion_audiovisual_breve` → el identificador debe marcar que la pieza pertenece a la familia de guiones audiovisuales breves y no a otra clase de salida.

#### `plataforma`

- `tiktok` → el identificador debe marcar pertenencia al entorno general de TikTok.

#### `aplicacion_de_plataforma`

- `video_tiktok` → el identificador debe refinar la pertenencia anterior indicando que se trata específicamente de video dentro de TikTok.

#### `alcance_de_realizacion`

- `pieza_unica` → el identificador debe construirse como pieza autosuficiente, sin marca de continuidad.
- `apertura_de_serie` → el identificador debe marcar que la pieza abre una secuencia.
- `continuidad_de_serie` → el identificador debe marcar continuidad dentro de una secuencia.
- `cierre_de_serie` → el identificador debe marcar clausura de secuencia.
- `pieza_de_transicion` → el identificador debe marcar función puente.
- `pieza_de_prueba` → el identificador debe marcar carácter experimental.
- `pieza_de_validacion` → el identificador debe marcar función de validación.
- `pieza_de_acceso` → el identificador debe marcar función de entrada.
- `pieza_de_profundizacion` → el identificador debe marcar función de desarrollo o profundización.

**Regla de decisión:**
El `id_de_manifestacion` no debe elegirse libremente. Debe construirse siempre combinando, en orden estable:

1. marcador de `plataforma`;
2. marcador de `aplicacion_de_plataforma`;
3. marcador de `clase_de_materializacion`;
4. marcador de `alcance_de_realizacion`;
5. núcleo temático condensado derivado de `formulacion_canonica`.

**Interacciones relevantes:**

- `formulacion_canonica` aporta el núcleo temático del identificador;
- `clase_de_materializacion`, `plataforma` y `aplicacion_de_plataforma` fijan el marco codominial de identificación;
- `alcance_de_realizacion` decide si el identificador debe leerse como pieza autónoma, seriada, de transición, de prueba o de profundización;
- el identificador final debe surgir de la combinación estable de esos cinco componentes y no de una elección arbitraria del constructor.

**Ejemplo 1**

- `formulacion_canonica` → “explicar por qué pedir más palabras no garantiza pensamiento”
- `clase_de_materializacion` → `guion_audiovisual_breve`
- `plataforma` → `tiktok`
- `aplicacion_de_plataforma` → `video_tiktok`
- `alcance_de_realizacion` → `pieza_unica`

**Resultado posible de `id_de_manifestacion`:**
`tiktok__video_tiktok__guion_audiovisual_breve__pieza_unica__mas_palabras_no_garantiza_pensamiento`

**Ejemplo 2**

- `formulacion_canonica` → “mostrar cómo una idea puede desglosarse mejor con ayuda de IA”
- `clase_de_materializacion` → `guion_audiovisual_breve`
- `plataforma` → `tiktok`
- `aplicacion_de_plataforma` → `video_tiktok`
- `alcance_de_realizacion` → `apertura_de_serie`

**Resultado posible de `id_de_manifestacion`:**
`tiktok__video_tiktok__guion_audiovisual_breve__apertura_de_serie__desglosar_ideas_con_ia`

**Ejemplo 3**

- `formulacion_canonica` → “comparar cantidad verbal y estructura conceptual”
- `clase_de_materializacion` → `guion_audiovisual_breve`
- `plataforma` → `tiktok`
- `aplicacion_de_plataforma` → `video_tiktok`
- `alcance_de_realizacion` → `pieza_de_profundizacion`

**Resultado posible de `id_de_manifestacion`:**
`tiktok__video_tiktok__guion_audiovisual_breve__pieza_de_profundizacion__cantidad_verbal_vs_estructura_conceptual`

### 3.2. `identificacion_general.clase_de_materializacion`

**Campos que contribuyen:**

- `clase_de_materializacion`

**Contribución por valores:**

#### `clase_de_materializacion`

- `guion_audiovisual_breve` → fija que la manifestación debe construirse como una pieza audiovisual guionizada, pensada para ejecución en video breve. Protocolariamente, esto implica:
  - duración total estimada en un rango breve, normalmente **entre 1 y 3 minutos**;
  - organización en bloques claramente distinguibles y ejecutables;
  - predominio de un soporte verbal oralizable, no de prosa continua;
  - necesidad de apertura funcional rápida, desarrollo comprimido y cierre reconocible;
  - compatibilidad con recursos complementarios breves de refuerzo: texto en pantalla, imagen, video e insumos auditivos;
  - y una densidad compositiva controlada: cada bloque debe cumplir una función clara sin sobrecargar la pieza.

**Interacciones relevantes:**

- `clase_de_materializacion` restringe la escala global de la manifestación;
- condiciona `duracion_objetivo`, `arquitectura_macro`, `segmentacion_interna`, `unidad_de_segmento` y `longitud_por_segmento`;
- obliga a que los recursos complementarios funcionen como apoyo breve y no como piezas autónomas.

---

### 3.3. `identificacion_general.plataforma`

**Campos que contribuyen:**

- `plataforma`

**Contribución por valores:**

#### `plataforma`

- `tiktok` → fija que la salida debe adaptarse al entorno general de TikTok. Protocolariamente, esto implica:
  - orientación a consumo rápido y captación temprana de atención;
  - necesidad de que la apertura tenga fuerza inmediata;
  - preferencia por bloques breves, legibles y de transición rápida;
  - ritmo alto o medio-alto, con baja fricción interpretativa al inicio;
  - compatibilidad con texto en pantalla de apoyo corto y visualidad orientada a formato vertical;
  - y presión estructural hacia claridad, contraste, remate o progresión rápida.

**Interacciones relevantes:**

- `plataforma` restringe el régimen atencional admisible de la pieza;
- modula la forma en que se concretan `funcion_dominante`, `efecto_buscado` y `regimen_de_activacion_atencional`;
- condiciona la forma final de los bloques, la economía verbal y el uso de recursos complementarios.

---

### 3.4. `identificacion_general.aplicacion_de_plataforma`

**Campos que contribuyen:**

- `aplicacion_de_plataforma`

**Contribución por valores:**

#### `aplicacion_de_plataforma`

- `video_tiktok` → fija la modalidad concreta de publicación dentro de TikTok: una pieza realizable como video breve vertical. Protocolariamente, esto implica:
  - distribución de contenido en bloques compatibles con continuidad audiovisual vertical;
  - expectativa de correspondencia entre voz, superficie textual y recursos visuales por bloque;
  - uso de apoyos visuales o auditivos subordinados al flujo principal del video;
  - necesidad de que cada bloque pueda visualizarse y ejecutarse como parte de una secuencia audiovisual compacta;
  - y compatibilidad con una composición donde texto oral, texto en pantalla, imagen/video en pantalla y capa auditiva puedan coordinarse sin competir excesivamente.

**Interacciones relevantes:**

- `aplicacion_de_plataforma` refina las restricciones de `plataforma`;
- condiciona la realización concreta de `texto_en_pantalla`, `imagen_en_pantalla`, `video_en_pantalla` y `recurso_auditivo` (Esto ocurre porque `video_tiktok` no solo fija que la salida pertenezca a TikTok, sino que exige una forma concreta de ejecución audiovisual. Por eso, `texto_en_pantalla`, `imagen_en_pantalla`, `video_en_pantalla` y `recurso_auditivo` ya no pueden componerse de manera genérica: deben resolverse como apoyos compatibles con una pieza vertical, breve, de consumo rápido y articulada por bloques. En consecuencia, cada uno de esos recursos debe definirse según su función local dentro del flujo del video, su duración admisible, sus dimensiones, su grado de protagonismo, su coordinación con la voz principal de modo que acompañen la manifestación sin romper la continuidad ni competir excesivamente con el núcleo verbal);
- obliga a que la manifestación no solo sea breve, sino específicamente ejecutable como **video TikTok** y no como otra pieza audiovisual genérica.

### 3.5. `identidad_operativa_resultante.formulacion_canonica`

**Campos que contribuyen:**

- `formulacion_canonica`
- `nivel_de_especificidad`
- `prioridad_de_intencion`

**Contribución por valores:**

#### `formulacion_canonica`

Cualquier valor válido contribuye así:

- fija el propósito declarado de la pieza;
- define el núcleo temático-operativo que debe reaparecer en la salida;
- aporta la base verbal sobre la que se construye la formulación resultante.

#### `nivel_de_especificidad`

- `general` → la formulación resultante debe conservar un propósito amplio, sin bajar todavía a una delimitación muy estrecha.
- `intermedia` → la formulación resultante debe especificar mejor qué tipo de pieza se construye y qué problema aborda.
- `especifica` → la formulación resultante debe quedar estrecha, concreta y con mínimo margen de desviación interpretativa.

#### `prioridad_de_intencion`

- `principal` → la formulación resultante debe redactarse como eje rector explícito de la pieza.
- `secundaria` → la formulación resultante debe aparecer subordinada al eje principal, como apoyo funcional.
- `terciaria` → la formulación resultante solo debe modular la orientación, sin ocupar el centro.
- `auxiliar` → la formulación resultante, si se explicita, debe aparecer como soporte instrumental.

**Regla protocolaria de construcción:**

La `identidad_operativa_resultante.formulacion_canonica` debe construirse siempre siguiendo esta secuencia:

1. tomar la `formulacion_canonica` de entrada como base;
2. identificar su núcleo operativo: qué se quiere hacer y sobre qué;
3. ajustar su grado de apertura o cierre según `nivel_de_especificidad`;
4. resolver su jerarquía según `prioridad_de_intencion`;
5. reescribirla en una forma breve, estable y reutilizable, apta para funcionar como formulación operativa de la pieza.

**Plantilla replicable:**

<verbo operativo principal> + <objeto o problema central> + <grado de delimitación según especificidad> + <marca jerárquica según prioridad>

**Interacciones relevantes:**

- `formulacion_canonica` aporta el núcleo verbal y operativo;
- `nivel_de_especificidad` decide cuánto se abre o se cierra la formulación;
- `prioridad_de_intencion` decide si la formulación aparece como eje, apoyo, modulación o instrumento.

**Ejemplos:**

**Ejemplo 1**

- `formulacion_canonica` → “explicar por qué pedir más palabras no garantiza pensamiento”
- `nivel_de_especificidad` → `general`
- `prioridad_de_intencion` → `principal`

**Resultado posible:**

- “Explicar el problema de confundir cantidad verbal con pensamiento.”

**Ejemplo 2**

- `formulacion_canonica` → “explicar por qué pedir más palabras no garantiza pensamiento”
- `nivel_de_especificidad` → `intermedia`
- `prioridad_de_intencion` → `principal`

**Resultado posible:**

- “Explicar por qué exigir más palabras no equivale a exigir una idea mejor estructurada.”

**Ejemplo 3**

- `formulacion_canonica` → “explicar por qué pedir más palabras no garantiza pensamiento”
- `nivel_de_especificidad` → `especifica`
- `prioridad_de_intencion` → `principal`

**Resultado posible:**

- “Explicar por qué, en tareas escolares, aumentar la cantidad de palabras no garantiza una mejor estructura conceptual.”

**Ejemplo 4**

- `formulacion_canonica` → “mostrar cómo la IA puede servir para desglosar ideas”
- `nivel_de_especificidad` → `intermedia`
- `prioridad_de_intencion` → `secundaria`

**Resultado posible:**

- “Mostrar, como apoyo, que la IA puede utilizarse para desglosar ideas con mayor claridad.”

### 3.6. `identidad_operativa_resultante.nivel_de_especificidad`

**Campos que contribuyen:**

- `nivel_de_especificidad`

**Contribución por valores:**

#### `nivel_de_especificidad`

- `general` → la pieza debe construirse con mayor elasticidad compositiva. Protocolariamente, esto permite:
  - bloques más amplios en función;
  - recursos complementarios con mayor libertad de apoyo;
  - formulaciones menos cerradas y más transferibles;
  - y una tolerancia mayor a variaciones locales mientras no se rompa el propósito principal.

- `intermedia` → la pieza debe construirse con foco moderado. Protocolariamente, esto exige:
  - bloques más controlados en función y desarrollo;
  - menor dispersión temática;
  - recursos complementarios subordinados al foco principal;
  - y una formulación operativa suficientemente delimitada, aunque no extrema.

- `especifica` → la pieza debe construirse con máxima consistencia temática, funcional y material. Protocolariamente, esto obliga a:
  - bloques estrictamente alineados con el núcleo de la pieza;
  - mínima desviación temática;
  - recursos complementarios solo si refuerzan directamente el eje principal;
  - y alta coherencia entre formulación operativa, estructura, superficie y realización verbal.

**Regla protocolaria de construcción:**

El `identidad_operativa_resultante.nivel_de_especificidad` debe usarse siempre como un **modulador de tolerancia compositiva**.

Su aplicación debe seguir esta secuencia:

1. identificar el nivel declarado en la entrada;
2. traducirlo a un grado de apertura o cierre compositivo;
3. ajustar según ese grado:
   - la elasticidad de los bloques,
   - la tolerancia a desvíos locales,
   - el margen de expansión de recursos complementarios,
   - y la precisión exigida a la formulación resultante;
4. mantener ese mismo criterio a lo largo de toda la manifestación.

**Plantilla replicable:**

si nivel_de_especificidad = general:
permitir mayor elasticidad compositiva

si nivel_de_especificidad = intermedia:
permitir elasticidad controlada y foco moderado

si nivel_de_especificidad = especifica:
exigir máxima coherencia y mínimo desvío

**Interacciones relevantes:**

- `nivel_de_especificidad` modula cuán abierta o cerrada queda la construcción global de la pieza;
- condiciona el margen admisible de variación en bloques, recursos complementarios y formulación;
- debe leerse junto con `formulacion_canonica` y `prioridad_de_intencion`, porque no define por sí solo el contenido de la pieza, sino el grado de cierre con que debe realizarse.

**Ejemplos:**

**Ejemplo 1**

- `nivel_de_especificidad` → `general`

**Resultado protocolario esperado:**

- apertura más amplia;
- bloques con mayor elasticidad funcional;
- recursos complementarios con margen de apoyo relativamente libre.

**Ejemplo 2**

- `nivel_de_especificidad` → `intermedia`

**Resultado protocolario esperado:**

- foco reconocible;
- bloques más controlados;
- recursos complementarios permitidos, pero subordinados al eje temático.

**Ejemplo 3**

- `nivel_de_especificidad` → `especifica`

**Resultado protocolario esperado:**

- construcción cerrada;
- bloques estrictamente alineados con el propósito principal;
- recursos complementarios solo si refuerzan directamente el núcleo de la pieza.

---

### 3.7. `identidad_operativa_resultante.prioridad_de_intencion`

**Campos que contribuyen:**

- `prioridad_de_intencion`

**Contribución por valores:**

#### `prioridad_de_intencion`

- `principal` → la línea correspondiente debe operar como eje rector de la pieza. Protocolariamente, esto implica:
  - prevalecer cuando haya conflicto entre contribuciones;
  - definir la orientación dominante de bloques, recursos y remates;
  - y fijar el criterio principal de coherencia global.

- `secundaria` → la línea correspondiente puede modular la construcción, pero no dominarla. Protocolariamente, esto implica:
  - aportar matices;
  - reforzar o complementar el eje principal;
  - y operar solo si no desplaza la intención principal.

- `terciaria` → la línea correspondiente debe permanecer subordinada a prioridades mayores. Protocolariamente, esto implica:
  - intervenir solo de forma localizada;
  - no reorganizar la pieza;
  - y limitarse a pequeños ajustes compatibles con líneas superiores.

- `auxiliar` → la línea correspondiente solo puede aportar soporte instrumental o local. Protocolariamente, esto implica:
  - no definir el centro de la manifestación;
  - no alterar la arquitectura global;
  - y aparecer solo como ayuda funcional puntual.

**Regla protocolaria de construcción:**

La `identidad_operativa_resultante.prioridad_de_intencion` debe usarse siempre como un **criterio de jerarquización de contribuciones**.

Su aplicación debe seguir esta secuencia:

1. identificar la prioridad declarada;
2. asignarle un rango jerárquico estable;
3. comparar cualquier contribución potencialmente conflictiva con ese rango;
4. resolver el conflicto subordinando la contribución de menor prioridad;
5. mantener la misma jerarquía a lo largo de toda la manifestación.

**Plantilla replicable:**

    si prioridad_de_intencion = principal:
      usar como criterio rector de composición

    si prioridad_de_intencion = secundaria:
      permitir modulación sin dominancia

    si prioridad_de_intencion = terciaria:
      permitir solo incidencia subordinada

    si prioridad_de_intencion = auxiliar:
      permitir solo soporte instrumental local

**Interacciones relevantes:**

- `prioridad_de_intencion` no define por sí sola el contenido de la pieza, sino la jerarquía con la que una línea de intención puede incidir;
- debe leerse junto con `formulacion_canonica` y `nivel_de_especificidad`, porque regula qué contribuciones prevalecen y cuáles quedan subordinadas;
- en caso de conflicto entre orientaciones, bloques o recursos, la prioridad más alta debe actuar como criterio de resolución.

**Ejemplos:**

#### Ejemplo 1

- `prioridad_de_intencion` → `principal`

**Resultado protocolario esperado:**

- la línea correspondiente define el eje de la pieza;
- cualquier contribución en tensión debe subordinarse a ella.

#### Ejemplo 2

- `prioridad_de_intencion` → `secundaria`

**Resultado protocolario esperado:**

- la línea correspondiente puede reforzar o matizar;
- pero no puede desplazar la orientación principal.

#### Ejemplo 3

- `prioridad_de_intencion` → `terciaria`

**Resultado protocolario esperado:**

- la línea correspondiente solo ajusta detalles locales;
- no reorganiza bloques ni redefine el propósito principal.

#### Ejemplo 4

- `prioridad_de_intencion` → `auxiliar`

**Resultado protocolario esperado:**

- la línea correspondiente aparece solo como apoyo funcional;
- no debe asumir protagonismo estructural.

---

### 3.8. `orientacion_funcional_resultante.funcion_dominante`

**Campos que contribuyen:**

- `funcion_dominante`

**Contribución por valores:**

#### `funcion_dominante`

- `enseñar` → la pieza debe construirse para volver algo entendible. Protocolariamente:
  - aumentar claridad y explicitud;
  - favorecer progresión ordenada;
  - y cerrar de forma comprensible.

- `sintetizar` → la pieza debe concentrar contenido. Protocolariamente:
  - reducir digresión;
  - comprimir bloques;
  - y favorecer remates condensados.

- `persuadir` → la pieza debe orientar una toma de postura. Protocolariamente:
  - intensificar contraste;
  - reforzar la línea argumentativa;
  - y empujar hacia cierre con inclinación direccional.

- `evaluar` → la pieza debe comparar o juzgar. Protocolariamente:
  - introducir criterios;
  - ordenar opciones o estados;
  - y favorecer contraste evaluativo.

- `diagnosticar` → la pieza debe identificar un problema, estado o patrón. Protocolariamente:
  - priorizar detección y caracterización;
  - organizar signos o rasgos;
  - y cerrar con lectura del estado observado.

- `captar_atencion` → la pieza debe privilegiar entrada fuerte. Protocolariamente:
  - dar máximo peso a apertura y reenganche;
  - reducir demora explicativa inicial;
  - y subordinar el resto al gancho.

- `activar_interaccion` → la pieza debe mover a respuesta. Protocolariamente:
  - favorecer preguntas, tensión abierta o formulación discutible;
  - y orientar el cierre a reacción.

- `convertir` → la pieza debe mover a cambio de postura o decisión. Protocolariamente:
  - organizar progresión con dirección clara;
  - restringir dispersión;
  - y cerrar con empuje decisional.

- `distribuir` → la pieza debe circular rápido. Protocolariamente:
  - favorecer resumibilidad;
  - claridad transmisible;
  - y baja dependencia de contexto adicional.

- `manifestar_comercialmente` → la pieza debe expresar propuesta o posicionamiento. Protocolariamente:
  - integrar valor de oferta o identidad;
  - subordinar recursos a visibilidad de propuesta;
  - y evitar que el eje comercial quede difuso.

- `abrir_serie` → la pieza debe iniciar continuidad. Protocolariamente:
  - restringir cierre conclusivo;
  - introducir proyección;
  - y dejar continuidad reconocible.

- `continuar_serie` → la pieza debe operar como tramo medio. Protocolariamente:
  - exigir continuidad con piezas previas;
  - evitar reinicio completo;
  - y mantener enlace con la secuencia.

- `cerrar_serie` → la pieza debe clausurar continuidad. Protocolariamente:
  - reforzar síntesis;
  - resolver tensiones abiertas;
  - y marcar cierre global.

**Regla protocolaria de construcción:**

La `funcion_dominante` debe usarse como **criterio rector de composición funcional**.

Su aplicación debe seguir esta secuencia:

1. identificar la función dominante declarada;
2. traducirla a una exigencia principal de composición;
3. ajustar apertura, desarrollo, cierre y recursos según esa exigencia;
4. verificar que los demás campos no desplacen la función dominante;
5. mantenerla como criterio rector de toda la pieza.

**Plantilla replicable:**

    si funcion_dominante = enseñar:
      priorizar claridad y cierre entendible

    si funcion_dominante = sintetizar:
      priorizar compresión y condensación

    si funcion_dominante = persuadir:
      priorizar contraste y dirección argumentativa

    si funcion_dominante = evaluar:
      priorizar criterio y comparación

    si funcion_dominante = diagnosticar:
      priorizar identificación de estado o problema

    si funcion_dominante = captar_atencion:
      priorizar apertura y reenganche

    si funcion_dominante = activar_interaccion:
      priorizar tensión y respuesta

    si funcion_dominante = convertir:
      priorizar orientación a decisión

    si funcion_dominante = distribuir:
      priorizar transmisibilidad

    si funcion_dominante = manifestar_comercialmente:
      priorizar propuesta y posicionamiento

    si funcion_dominante = abrir_serie:
      priorizar proyección de continuidad

    si funcion_dominante = continuar_serie:
      priorizar enlace con secuencia previa

    si funcion_dominante = cerrar_serie:
      priorizar síntesis y resolución global

**Interacciones relevantes:**

- `funcion_dominante` condiciona la lectura de `efecto_buscado`, `accion_esperada` y `configuracion_discursiva`;
- cuando otros campos permitan varias composiciones posibles, debe prevalecer la composición más coherente con la función dominante;
- en caso de conflicto, la organización de bloques y remates debe resolverse a su favor.

**Ejemplos:**

#### Ejemplo 1

- `funcion_dominante` → `enseñar`

**Resultado protocolario esperado:**

- apertura clara;
- desarrollo explicativo;
- cierre entendible.

#### Ejemplo 2

- `funcion_dominante` → `captar_atencion`

**Resultado protocolario esperado:**

- apertura con máximo peso;
- desarrollo comprimido;
- reenganche fuerte o remate de tensión.

---

### 3.9. `orientacion_funcional_resultante.efecto_buscado`

**Campos que contribuyen:**

- `efecto_buscado`
- `funcion_dominante`

**Contribución por valores:**

#### `efecto_buscado`

- `comprension_rapida` → aumentar explicitud, claridad y orden lineal.
- `curiosidad` → dosificar información y favorecer apertura incompleta.
- `identificacion` → acercar registro, escenas o formulaciones al receptor.
- `sorpresa` → intensificar contraste, giro o ruptura esperable.
- `urgencia` → acelerar ritmo, compresión y presión secuencial.
- `retencion` → favorecer continuidad y remates memorables.
- `expectativa_de_resolucion` → abrir tensión y aplazar parte de la resolución.
- `deseo_de_guardar` → exigir condensación reusable, sobre todo en el cierre.
- `deseo_de_comentar` → favorecer formulación discutible, abierta o tensiva.
- `deseo_de_compartir` → privilegiar resumibilidad y transmisibilidad.
- `deseo_de_ver_hasta_el_final` → organizar progresión interna fuerte.
- `deseo_de_ir_al_perfil` → proyectar la pieza fuera del video.
- `predisposicion_a_serie` → favorecer cierre proyectivo o continuidad explícita.
- `disposicion_a_accion` → orientar la pieza a aplicación posterior.

#### `funcion_dominante`

No añade un efecto distinto, pero **restringe cuáles efectos pueden dominar la composición**.

Ejemplos de restricción:

- `enseñar` favorece `comprension_rapida`, `retencion`, `deseo_de_guardar`;
- `captar_atencion` favorece `curiosidad`, `sorpresa`, `deseo_de_ver_hasta_el_final`;
- `activar_interaccion` favorece `deseo_de_comentar`, `disposicion_a_accion`;
- `abrir_serie` favorece `predisposicion_a_serie`, `expectativa_de_resolucion`;
- `cerrar_serie` restringe efectos que dependan de apertura fuerte de continuidad.

**Regla protocolaria de construcción:**

El `efecto_buscado` debe usarse como **criterio de impacto esperado en el receptor**.

Su aplicación debe seguir esta secuencia:

1. identificar el efecto buscado declarado;
2. verificar si es coherente con la `funcion_dominante`;
3. traducirlo a ajustes de ritmo, apertura, progresión, cierre y superficie;
4. si hay varios efectos, jerarquizarlos según compatibilidad con la función dominante;
5. construir la pieza para maximizar ese efecto sin romper la coherencia funcional.

**Plantilla replicable:**

    si efecto_buscado = comprension_rapida:
      aumentar claridad, explicitud y orden lineal

    si efecto_buscado = curiosidad:
      dosificar información y abrir tensión

    si efecto_buscado = deseo_de_guardar:
      condensar una fórmula reusable en el cierre

    si efecto_buscado = deseo_de_ver_hasta_el_final:
      reforzar progresión interna y continuidad

**Interacciones relevantes:**

- `funcion_dominante` restringe qué efectos son compositivamente coherentes;
- cuando hay varios efectos activos, el dominante debe ordenar la jerarquía entre ellos;
- el efecto buscado ajusta sobre todo apertura, progresión, cierre y tipo de remate.

**Ejemplos:**

#### Ejemplo 1

- `funcion_dominante` → `enseñar`
- `efecto_buscado` → `comprension_rapida`

**Resultado protocolario esperado:**

- alta explicitud;
- progresión lineal;
- cierre claro.

#### Ejemplo 2

- `funcion_dominante` → `captar_atencion`
- `efecto_buscado` → `curiosidad`

**Resultado protocolario esperado:**

- apertura incompleta;
- tensión sostenida;
- resolución parcial o diferida.

---

### 3.10. `orientacion_funcional_resultante.accion_esperada`

**Campos que contribuyen:**

- `accion_esperada`
- `funcion_dominante`
- `regimen_de_resolucion_buscada`

**Contribución por valores:**

#### `accion_esperada`

- `ver_hasta_el_final` → obliga a proyección entre bloques y continuidad fuerte.
- `comentar` → favorece cierres abiertos, tensivos o discutibles.
- `guardar` → exige formulación condensada y reusable.
- `compartir` → favorece resumibilidad y claridad transmisible.
- `seguir_cuenta` → proyecta continuidad identitaria fuera de la pieza.
- `ir_al_perfil` → remite explícitamente fuera del video.
- `consumir_parte_siguiente` → exige continuidad seriada clara.
- `solicitar_mas_informacion` → deja zonas ampliables o aperturas.
- `hacer_click` → cierre con salida externa clara.
- `aplicar_lo_mostrado` → la pieza debe incluir valor operativo o transferible.
- `ninguna_explicita` → evita llamada visible a la acción y permite cierre más conceptual.

#### `funcion_dominante`

Restringe qué acción esperada puede ocupar el centro:

- `enseñar` favorece `guardar`, `aplicar_lo_mostrado`, `ver_hasta_el_final`;
- `activar_interaccion` favorece `comentar`, `solicitar_mas_informacion`;
- `distribuir` favorece `compartir`;
- `abrir_serie` o `continuar_serie` favorecen `consumir_parte_siguiente`;
- `convertir` favorece acciones con salida decisional o externa.

#### `regimen_de_resolucion_buscada`

Modula la forma en que la acción esperada se inserta:

- resolución inmediata → permite llamada clara y cierre directo;
- resolución progresiva → reparte preparación de acción entre bloques;
- resolución diferida → favorece acciones proyectivas;
- resolución parcial → deja margen de continuidad o ampliación;
- resolución abierta a continuidad → favorece serie, perfil o información posterior.

**Regla protocolaria de construcción:**

La `accion_esperada` debe usarse como **criterio de orientación post-recepción**.

Su aplicación debe seguir esta secuencia:

1. identificar la acción esperada;
2. verificar su coherencia con `funcion_dominante`;
3. ajustar su forma según `regimen_de_resolucion_buscada`;
4. decidir si la acción debe quedar explícita, implícita o proyectiva;
5. componer el cierre y la progresión interna para favorecer esa acción.

**Plantilla replicable:**

    si accion_esperada = guardar:
      construir cierre condensado y reusable

    si accion_esperada = comentar:
      construir cierre abierto o discutible

    si accion_esperada = consumir_parte_siguiente:
      construir cierre proyectivo y serial

    si accion_esperada = ninguna_explicita:
      evitar llamada visible y cerrar conceptualmente

**Interacciones relevantes:**

- `funcion_dominante` restringe la acción esperada central admisible;
- `regimen_de_resolucion_buscada` decide si la acción aparece resuelta, preparada o proyectada;
- la acción esperada condiciona sobre todo cierre, remate y continuidad entre bloques.

**Ejemplos:**

#### Ejemplo 1

- `accion_esperada` → `guardar`
- `funcion_dominante` → `enseñar`
- `regimen_de_resolucion_buscada` → `resolucion_inmediata`

**Resultado protocolario esperado:**

- cierre compacto;
- formulación reusable;
- resolución clara.

#### Ejemplo 2

- `accion_esperada` → `consumir_parte_siguiente`
- `funcion_dominante` → `abrir_serie`
- `regimen_de_resolucion_buscada` → `resolucion_abierta_a_continuidad`

**Resultado protocolario esperado:**

- cierre proyectivo;
- continuidad explícita;
- resolución no conclusiva.

---

### 3.11. `orientacion_funcional_resultante.configuracion_discursiva`

**Campos que contribuyen:**

- `configuracion_discursiva`
- `funcion_dominante`

**Contribución por valores:**

#### `configuracion_discursiva`

- `definicional` → organizar el discurso alrededor de delimitaciones, nombramiento y distinción conceptual.
- `explicativa` → organizar el discurso alrededor de aclaración, causalidad o desarrollo esclarecedor.
- `argumentativa` → organizar el discurso alrededor de razones, apoyos y justificaciones.
- `operativa` → organizar el discurso alrededor de instrucción, aplicación o transferencia.
- `sintetizadora` → organizar el discurso para condensar al máximo.
- `captativa` → organizar el discurso con alto peso en apertura, enganche y retención.
- `hibrida_controlada` → combinar regímenes, pero exigiendo consistencia explícita entre ellos.

#### `funcion_dominante`

Restringe la elección discursiva dominante:

- `enseñar` favorece `definicional` o `explicativa`;
- `persuadir` favorece `argumentativa`;
- `diagnosticar` favorece `explicativa` o `definicional`;
- `captar_atencion` favorece `captativa`;
- `sintetizar` favorece `sintetizadora`;
- `manifestar_comercialmente` puede combinar `captativa`, `argumentativa` u `operativa` según el caso.

**Regla protocolaria de construcción:**

La `configuracion_discursiva` debe usarse como **criterio de organización del régimen de discurso**.

Su aplicación debe seguir esta secuencia:

1. identificar la configuración discursiva declarada;
2. verificar su coherencia con `funcion_dominante`;
3. traducirla a una forma reconocible de organizar apertura, desarrollo y cierre;
4. mantener ese régimen a lo largo de la pieza;
5. si la configuración es híbrida, explicitar cuál régimen domina y cuál complementa.

**Plantilla replicable:**

    si configuracion_discursiva = definicional:
      organizar por delimitación y nombramiento

    si configuracion_discursiva = explicativa:
      organizar por aclaración y desarrollo causal

    si configuracion_discursiva = argumentativa:
      organizar por razones y justificaciones

    si configuracion_discursiva = operativa:
      organizar por instrucción y aplicación

    si configuracion_discursiva = sintetizadora:
      organizar por condensación máxima

    si configuracion_discursiva = captativa:
      organizar por apertura fuerte y retención

    si configuracion_discursiva = hibrida_controlada:
      combinar regímenes con jerarquía explícita

**Interacciones relevantes:**

- `funcion_dominante` restringe qué configuración discursiva puede ocupar el centro;
- la configuración discursiva organiza la forma del recorrido verbal de la pieza;
- en caso híbrido, debe quedar explícito qué régimen domina para evitar incoherencia compositiva.

**Ejemplos:**

#### Ejemplo 1

- `configuracion_discursiva` → `explicativa`
- `funcion_dominante` → `enseñar`

**Resultado protocolario esperado:**

- apertura de aclaración;
- desarrollo ordenado;
- cierre comprensible.

#### Ejemplo 2

- `configuracion_discursiva` → `captativa`
- `funcion_dominante` → `captar_atencion`

**Resultado protocolario esperado:**

- máximo peso en apertura;
- progresión orientada a retención;
- remate con fuerza de continuidad o impacto.

### 3.12. `escala_temporal_y_resolucion_resultante.alcance_de_realizacion`

**Campos que contribuyen:**

- `alcance_de_realizacion`

**Contribución por valores:**

#### `alcance_de_realizacion`

- `pieza_unica` → la pieza debe construirse como unidad relativamente autosuficiente. Protocolariamente:
  - no debe depender de piezas previas para ser entendible;
  - el cierre debe tener consistencia propia;
  - y la continuidad externa, si existe, no debe ser necesaria para la comprensión básica.

- `apertura_de_serie` → la pieza debe construirse como inicio de secuencia. Protocolariamente:
  - exigir apertura fuerte;
  - introducir la línea principal sin resolverla completamente;
  - y cerrar dejando proyección clara hacia continuidad.

- `continuidad_de_serie` → la pieza debe construirse como tramo medio. Protocolariamente:
  - mantener enlace con piezas previas;
  - no reiniciar por completo el recorrido;
  - y proyectar continuidad posterior o desarrollo intermedio.

- `cierre_de_serie` → la pieza debe construirse como clausura de secuencia. Protocolariamente:
  - reforzar síntesis;
  - cerrar tensiones abiertas;
  - y marcar resolución global más fuerte que en otros alcances.

- `pieza_de_transicion` → la pieza debe comportarse como puente. Protocolariamente:
  - enlazar dos momentos, estados o secuencias;
  - reducir cierre autosuficiente fuerte;
  - y privilegiar función de pasaje.

- `pieza_de_prueba` → la pieza puede admitir mayor exploración. Protocolariamente:
  - permitir ensayo compositivo o experimental;
  - tolerar menor estabilidad formal;
  - y privilegiar observación de funcionamiento.

- `pieza_de_validacion` → la pieza debe reforzar confirmación o contraste. Protocolariamente:
  - priorizar criterio;
  - verificar una hipótesis, lectura o estructura;
  - y cerrar con mayor peso confirmatorio.

- `pieza_de_acceso` → la pieza debe facilitar entrada. Protocolariamente:
  - simplificar complejidad inicial;
  - priorizar inteligibilidad de acceso;
  - y reducir presuposiciones fuertes.

- `pieza_de_profundizacion` → la pieza debe aumentar espesor. Protocolariamente:
  - permitir mayor carga conceptual;
  - desarrollar partes ya abiertas;
  - y tolerar menor simplificación que una pieza de acceso.

**Regla protocolaria de construcción:**

El `alcance_de_realizacion` debe usarse siempre como **criterio de posición funcional de la pieza dentro de su recorrido global**.

Su aplicación debe seguir esta secuencia:

1. identificar el alcance declarado;
2. traducirlo a una exigencia de autosuficiencia, continuidad, apertura, cierre, puente, prueba, validación, acceso o profundización;
3. ajustar apertura, desarrollo y cierre según esa exigencia;
4. mantener el mismo régimen a lo largo de toda la pieza.

**Plantilla replicable:**

    si alcance_de_realizacion = pieza_unica:
      construir como unidad relativamente autosuficiente

    si alcance_de_realizacion = apertura_de_serie:
      construir como inicio con proyección

    si alcance_de_realizacion = continuidad_de_serie:
      construir como tramo medio enlazado

    si alcance_de_realizacion = cierre_de_serie:
      construir como clausura y síntesis

    si alcance_de_realizacion = pieza_de_transicion:
      construir como puente

    si alcance_de_realizacion = pieza_de_prueba:
      construir como exploración controlada

    si alcance_de_realizacion = pieza_de_validacion:
      construir como confirmación o contraste

    si alcance_de_realizacion = pieza_de_acceso:
      construir como entrada simplificada

    si alcance_de_realizacion = pieza_de_profundizacion:
      construir como desarrollo de mayor espesor

**Interacciones relevantes:**

- `alcance_de_realizacion` condiciona el grado de autosuficiencia de la pieza;
- modula la fuerza del cierre y la proyección hacia continuidad;
- debe leerse junto con `horizonte_temporal` y `regimen_de_resolucion_buscada`, porque no basta con saber qué pieza es, sino también cómo se despliega temporalmente y cómo resuelve.

**Ejemplos:**

#### Ejemplo 1

- `alcance_de_realizacion` → `pieza_unica`

**Resultado protocolario esperado:**

- apertura suficiente para situar;
- desarrollo autónomo;
- cierre con consistencia propia.

#### Ejemplo 2

- `alcance_de_realizacion` → `apertura_de_serie`

**Resultado protocolario esperado:**

- inicio fuerte;
- resolución no total;
- proyección explícita de continuidad.

---

### 3.13. `escala_temporal_y_resolucion_resultante.horizonte_temporal`

**Campos que contribuyen:**

- `horizonte_temporal`

**Contribución por valores:**

#### `horizonte_temporal`

- `inmediato` → la pieza debe producir eficacia principal dentro de sí misma. Protocolariamente:
  - exigir impacto y comprensión en la misma unidad;
  - reducir dependencia de efectos diferidos;
  - y favorecer resolución operativa dentro del propio recorrido.

- `corto_plazo` → la pieza puede proyectar efecto cercano. Protocolariamente:
  - permitir salida breve hacia continuidad o acción;
  - sostener memoria corta de la pieza;
  - y cerrar dejando una proyección próxima.

- `mediano_plazo` → la pieza puede operar con espesor mayor. Protocolariamente:
  - habilitar continuidad más elaborada;
  - permitir desarrollo menos inmediato;
  - y aceptar efectos que maduran fuera de la misma unidad.

- `acumulativo` → la pieza debe entenderse como parte de acumulación. Protocolariamente:
  - subordinar parte de su eficacia a suma con otras piezas;
  - privilegiar consistencia serial o temática;
  - y no exigir clausura plena en cada unidad.

- `seriado` → la pieza debe componerse como nodo de secuencia. Protocolariamente:
  - obligar a lectura en continuidad;
  - reforzar enlaces entre piezas;
  - y reducir la autosuficiencia total de cada unidad aislada.

**Regla protocolaria de construcción:**

El `horizonte_temporal` debe usarse como **criterio de proyección temporal de los efectos de la pieza**.

Su aplicación debe seguir esta secuencia:

1. identificar el horizonte temporal declarado;
2. traducirlo a un grado de concentración o proyección del efecto;
3. ajustar cierre, continuidad y expectativa según ese horizonte;
4. mantener coherencia entre duración de la pieza y tiempo de operación esperado.

**Plantilla replicable:**

    si horizonte_temporal = inmediato:
      concentrar eficacia en la misma pieza

    si horizonte_temporal = corto_plazo:
      permitir proyección breve

    si horizonte_temporal = mediano_plazo:
      permitir proyección con mayor espesor

    si horizonte_temporal = acumulativo:
      construir como parte de acumulación

    si horizonte_temporal = seriado:
      construir como nodo de secuencia

**Interacciones relevantes:**

- `horizonte_temporal` modula cuánto debe resolverse dentro de la misma pieza y cuánto puede proyectarse fuera de ella;
- condiciona la lectura de `alcance_de_realizacion`;
- debe leerse junto con `regimen_de_resolucion_buscada`, porque el horizonte no solo indica duración del efecto, sino también forma esperada de cierre o continuidad.

**Ejemplos:**

#### Ejemplo 1

- `horizonte_temporal` → `inmediato`

**Resultado protocolario esperado:**

- comprensión o efecto principal dentro de la misma pieza;
- baja dependencia de continuidad externa.

#### Ejemplo 2

- `horizonte_temporal` → `acumulativo`

**Resultado protocolario esperado:**

- pieza legible como parte de una suma;
- menor exigencia de clausura total;
- mayor énfasis en consistencia con otras piezas.

---

### 3.14. `escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`

**Campos que contribuyen:**

- `regimen_de_resolucion_buscada`
- `alcance_de_realizacion`
- `horizonte_temporal`

**Contribución por valores:**

#### `regimen_de_resolucion_buscada`

- `resolucion_inmediata` → la pieza debe cerrar de forma clara dentro de sí misma. Protocolariamente:
  - resolver su línea principal en el mismo recorrido;
  - evitar aplazamiento fuerte;
  - y concentrar la clausura en esta unidad.

- `resolucion_progresiva` → la pieza debe distribuir la resolución. Protocolariamente:
  - repartir cierres parciales entre bloques;
  - avanzar por grados;
  - y evitar tanto clausura instantánea como apertura total.

- `resolucion_diferida` → la pieza debe aplazar la resolución principal. Protocolariamente:
  - abrir una línea fuerte;
  - reservar parte importante del cierre para otra unidad o momento;
  - y reforzar proyección.

- `resolucion_parcial` → la pieza debe resolver solo una parte. Protocolariamente:
  - cerrar un componente;
  - dejar otro abierto;
  - y marcar con claridad qué queda pendiente.

- `resolucion_abierta_a_continuidad` → la pieza debe cerrar sin clausura total. Protocolariamente:
  - producir sensación de cierre suficiente;
  - pero mantener continuidad disponible;
  - y evitar tanto la ruptura abrupta como la clausura exhaustiva.

#### `alcance_de_realizacion`

Restringe el régimen de resolución admisible:

- `pieza_unica` favorece `resolucion_inmediata` o `resolucion_parcial` fuerte;
- `apertura_de_serie` favorece `resolucion_diferida` o `resolucion_abierta_a_continuidad`;
- `continuidad_de_serie` favorece `resolucion_progresiva` o `resolucion_parcial`;
- `cierre_de_serie` favorece `resolucion_inmediata` o resolución progresiva culminante;
- `pieza_de_transicion` favorece resolución abierta o parcial;
- `pieza_de_prueba` y `pieza_de_validacion` pueden modular el cierre según función experimental o confirmatoria;
- `pieza_de_acceso` favorece resolución suficientemente clara;
- `pieza_de_profundizacion` permite más desarrollo antes del cierre.

#### `horizonte_temporal`

Modula cuánto puede proyectarse la resolución:

- `inmediato` favorece `resolucion_inmediata`;
- `corto_plazo` admite `resolucion_progresiva` o parcialmente diferida;
- `mediano_plazo` admite mayor distribución;
- `acumulativo` favorece `resolucion_parcial` o abierta;
- `seriado` favorece `resolucion_diferida` o abierta a continuidad.

**Regla protocolaria de construcción:**

El `regimen_de_resolucion_buscada` debe usarse como **criterio de cierre y distribución de resolución**.

Su aplicación debe seguir esta secuencia:

1. identificar el régimen de resolución declarado;
2. verificar su coherencia con `alcance_de_realizacion`;
3. ajustar su proyección según `horizonte_temporal`;
4. traducirlo a decisiones sobre apertura, progresión, cierre y continuidad;
5. mantener el mismo régimen como regla de clausura de la pieza.

**Plantilla replicable:**

    si regimen_de_resolucion_buscada = resolucion_inmediata:
      cerrar claramente en la misma pieza

    si regimen_de_resolucion_buscada = resolucion_progresiva:
      distribuir la resolución por grados

    si regimen_de_resolucion_buscada = resolucion_diferida:
      aplazar la resolución principal

    si regimen_de_resolucion_buscada = resolucion_parcial:
      resolver una parte y dejar otra abierta

    si regimen_de_resolucion_buscada = resolucion_abierta_a_continuidad:
      cerrar sin clausura total

**Interacciones relevantes:**

- `alcance_de_realizacion` restringe qué forma de resolución es coherente con el tipo de pieza;
- `horizonte_temporal` modula cuánto puede concentrarse o proyectarse la resolución;
- `regimen_de_resolucion_buscada` condiciona especialmente apertura, progresión, remate y continuidad entre piezas.

**Ejemplos:**

#### Ejemplo 1

- `regimen_de_resolucion_buscada` → `resolucion_inmediata`
- `alcance_de_realizacion` → `pieza_unica`
- `horizonte_temporal` → `inmediato`

**Resultado protocolario esperado:**

- cierre claro;
- línea principal resuelta dentro de la misma pieza;
- baja dependencia de continuidad.

#### Ejemplo 2

- `regimen_de_resolucion_buscada` → `resolucion_abierta_a_continuidad`
- `alcance_de_realizacion` → `apertura_de_serie`
- `horizonte_temporal` → `seriado`

**Resultado protocolario esperado:**

- cierre suficiente, pero no total;
- proyección clara hacia continuidad;
- resolución retenida para piezas siguientes.

---

### 3.15. `acoplamiento_receptoral_resultante.publico_objetivo_inmediato`

**Campos que contribuyen:**

- `publico_objetivo_inmediato`

**Contribución por valores:**

#### `publico_objetivo_inmediato`

- `audiencia_fria` → la pieza debe construirse con alta accesibilidad inicial. Protocolariamente:
  - aumentar explicitud;
  - reducir presuposiciones;
  - y evitar densidad alta al inicio.

- `audiencia_tibia` → la pieza puede construirse con equilibrio entre claridad y densidad. Protocolariamente:
  - mantener accesibilidad suficiente;
  - permitir algo más de compresión;
  - y no depender totalmente de explicación básica.

- `audiencia_caliente` → la pieza puede construirse con mayor compresión. Protocolariamente:
  - tolerar menor explicitud;
  - permitir más condensación;
  - y asumir familiaridad contextual.

- `seguidores_actuales` → la pieza puede asumir cierto contexto compartido. Protocolariamente:
  - reducir introducción contextual;
  - activar continuidad identitaria;
  - y apoyar más en memoria previa del receptor.

- `personas_sin_conocimiento_previos` → la pieza debe construirse como entrada comprensible. Protocolariamente:
  - reducir abstracción y tecnicidad;
  - privilegiar formulaciones guiadas;
  - y evitar saltos conceptuales abruptos.

- `personas_con_interes_previos` → la pieza puede cargar más tema. Protocolariamente:
  - permitir mayor densidad temática;
  - reducir mediación introductoria;
  - y acelerar entrada al núcleo.

- `personas_que_no_aplican` → la pieza debe orientar a transferencia o activación. Protocolariamente:
  - introducir utilidad o paso aplicable;
  - reforzar puente entre comprensión y uso;
  - y evitar cierre puramente contemplativo.

- `personas_que_no_comprenden` → la pieza debe reforzar explicación. Protocolariamente:
  - aumentar recapitulación;
  - descomponer más el contenido;
  - y favorecer cierre aclaratorio.

- `personas_que_ya_comprenden` → la pieza puede orientarse a síntesis o profundización. Protocolariamente:
  - reducir explicación básica;
  - permitir mayor compresión;
  - y favorecer desarrollo de espesor.

**Regla protocolaria de construcción:**

El `publico_objetivo_inmediato` debe usarse como **criterio de calibración receptoral**.

Su aplicación debe seguir esta secuencia:

1. identificar el tipo de receptor declarado;
2. traducirlo a un nivel de mediación necesario;
3. ajustar explicitud, densidad, abstracción y recapitulación según ese nivel;
4. mantener esa calibración a lo largo de la pieza.

**Plantilla replicable:**

    si publico_objetivo_inmediato = audiencia_fria:
      aumentar accesibilidad y reducir presuposiciones

    si publico_objetivo_inmediato = audiencia_tibia:
      equilibrar claridad y densidad

    si publico_objetivo_inmediato = audiencia_caliente:
      permitir mayor compresión y menor explicitud

    si publico_objetivo_inmediato = personas_que_no_comprenden:
      aumentar explicación y recapitulación

    si publico_objetivo_inmediato = personas_que_ya_comprenden:
      permitir síntesis o profundización

**Interacciones relevantes:**

- `publico_objetivo_inmediato` condiciona la combinación admisible de `registro_predominante`, `densidad_terminologica`, `grado_de_abstraccion`, `accesibilidad_lexica` y `variacion_lexica`;
- debe leerse junto con `estado_atencional`, porque no basta con saber quién recibe, sino también en qué disposición recibe;
- también debe leerse junto con `funcion_dominante` y `configuracion_discursiva`, porque el tipo de receptor restringe cómo puede realizarse la función y el discurso.

**Ejemplos:**

#### Ejemplo 1

- `publico_objetivo_inmediato` → `audiencia_fria`

**Resultado protocolario esperado:**

- apertura más guiada;
- menor densidad visible;
- cierre comprensible sin depender de contexto previo.

#### Ejemplo 2

- `publico_objetivo_inmediato` → `personas_que_ya_comprenden`

**Resultado protocolario esperado:**

- menor recapitulación;
- más compresión;
- posibilidad de cierre sintético o de profundización.

---

### 3.16. `acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.*`

**Campos que contribuyen:**

- `registro_predominante`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `accesibilidad_lexica`
- `variacion_lexica`

---

#### `registro_predominante`

**Contribución por valores:**

- `tecnico` → construir con vocabulario especializado y mediación baja.
- `pedagogico` → construir con claridad guiada, tono explicativo y apoyo verbal.
- `institucional` → construir con mayor formalidad, sobriedad y control expresivo.
- `analitico` → construir con alta precisión conceptual y mayor peso de distinción.
- `coloquial_controlado` → construir con cercanía verbal sin perder orden ni control.
- `hibrido` → combinar registros, pero con jerarquía explícita y sin incoherencia.

**Regla protocolaria:**
Usar `registro_predominante` para decidir el tono verbal base de toda la pieza.

**Ejemplos:**

- `tecnico` → uso de terminología especializada, definiciones menos mediadas y formulaciones apoyadas en vocabulario propio del tema.
- `pedagogico` → definiciones guiadas, aclaraciones progresivas y tono didáctico.
- `institucional` → formulación sobria, ordenada y formal, con baja coloquialidad y alto control expresivo.
- `analitico` → énfasis en distinciones conceptuales, relaciones precisas y formulaciones de alta claridad categorial.
- `coloquial_controlado` → cercanía, frases naturales y control formal suficiente.
- `hibrido` → combinación regulada, por ejemplo apertura coloquial, desarrollo pedagógico y cierre analítico, sin perder coherencia entre tramos.

---

#### `densidad_terminologica`

**Contribución por valores:**

- `baja` → reducir tecnicidad visible y limitar concentración de términos.
- `media` → equilibrar precisión y accesibilidad.
- `alta` → concentrar más terminología; exige receptor y atención compatibles.

**Regla protocolaria:**
Usar `densidad_terminologica` para regular cuántos términos especializados pueden
aparecer por bloque y con qué frecuencia deben ser mediado o no.

**Ejemplos:**

- `baja` → pocos términos técnicos, mayor reformulación.
- `alta` → más concentración conceptual, menor redundancia explicativa.

---

#### `grado_de_abstraccion`

**Contribución por valores:**

- `concreto` → construir con escenas, ejemplos y formulaciones tangibles.
- `intermedio` → combinar ejemplo y concepto.
- `abstracto` → construir con mayor peso relacional o conceptual.

**Regla protocolaria:**
Usar `grado_de_abstraccion` para decidir si el bloque debe apoyarse más en ejemplo,
mixto o concepto puro.

**Ejemplos:**

- `concreto` → casos visibles, formulación situada, escenas reconocibles o ejemplos directos.
- `intermedio` → combinación de ejemplo y concepto, con paso explícito entre caso particular y formulación general.
- `abstracto` → relaciones generales, formulación de alto nivel y mayor peso conceptual que ejemplificativo.

---

#### `accesibilidad_lexica`

**Contribución por valores:**

- `alta` → construir piezas fáciles de seguir verbalmente.
- `media` → permitir complejidad moderada.
- `baja` → permitir vocabulario más exigente o especializado.

**Regla protocolaria:**
Usar `accesibilidad_lexica` para regular la facilidad de seguimiento oral del
léxico principal de la pieza.

**Ejemplos:**

- `alta` → vocabulario llano, seguimiento rápido.
- `baja` → léxico exigente, seguimiento más lento o concentrado.

---

#### `variacion_lexica`

**Contribución por valores:**

- `baja` → usar reiteración útil para fijación y claridad.
- `media` → equilibrar repetición y diversidad.
- `alta` → permitir diversidad expresiva, siempre que no rompa claridad.

**Regla protocolaria:**
Usar `variacion_lexica` para decidir cuánto se repiten o se reemplazan los núcleos
verbales a lo largo de la pieza.

**Ejemplos:**

- `baja` → repetir formulaciones clave para fijar comprensión.
- `alta` → variar más, pero sin perder el hilo principal.

---

**Regla protocolaria de construcción del conjunto:**

La `adecuacion_lexico_formulativa` debe usarse como **sistema de calibración verbal del receptor**.

Su aplicación debe seguir esta secuencia:

1. fijar el `registro_predominante`;
2. ajustar `densidad_terminologica` según receptor y atención;
3. decidir el `grado_de_abstraccion`;
4. regular `accesibilidad_lexica`;
5. modular `variacion_lexica`;
6. verificar que la combinación final siga siendo coherente con el público, la función y el discurso.

**Plantilla replicable:**

    fijar registro_predominante
    ajustar densidad_terminologica
    decidir grado_de_abstraccion
    regular accesibilidad_lexica
    modular variacion_lexica
    verificar coherencia global

**Interacciones relevantes:**

- `publico_objetivo_inmediato`, `estado_atencional`, `funcion_dominante` y `configuracion_discursiva` restringen la combinación adecuada de estos cinco campos;
- `densidad_terminologica` y `accesibilidad_lexica` no deben escalar juntas sin control si el receptor requiere alta mediación;
- `grado_de_abstraccion` y `variacion_lexica` deben moderarse cuando se privilegia comprensión rápida;
- `registro_predominante` actúa como eje ordenador de los demás campos.

**Ejemplos de combinación:**

#### Ejemplo 1

- `registro_predominante` → `pedagogico`
- `densidad_terminologica` → `baja`
- `grado_de_abstraccion` → `concreto`
- `accesibilidad_lexica` → `alta`
- `variacion_lexica` → `baja`

**Resultado protocolario esperado:**

- pieza altamente guiada;
- fácil de seguir;
- con reiteración útil y ejemplos visibles.

#### Ejemplo 2

- `registro_predominante` → `analitico`
- `densidad_terminologica` → `alta`
- `grado_de_abstraccion` → `abstracto`
- `accesibilidad_lexica` → `baja`
- `variacion_lexica` → `media`

**Resultado protocolario esperado:**

- pieza de alto espesor conceptual;
- menor mediación;
- mayor exigencia para el receptor.

#### Ejemplo 3

- `registro_predominante` → `coloquial_controlado`
- `densidad_terminologica` → `baja`
- `grado_de_abstraccion` → `intermedio`
- `accesibilidad_lexica` → `alta`
- `variacion_lexica` → `media`

**Resultado protocolario esperado:**

- pieza cercana y fácil de seguir;
- equilibrio entre naturalidad y orden;
- conceptos presentados con apoyo de ejemplos sin perder claridad.

#### Ejemplo 4

- `registro_predominante` → `tecnico`
- `densidad_terminologica` → `alta`
- `grado_de_abstraccion` → `intermedio`
- `accesibilidad_lexica` → `media`
- `variacion_lexica` → `baja`

**Resultado protocolario esperado:**

- pieza especializada, pero todavía controlable;
- vocabulario técnico con cierta mediación;
- repetición útil de términos clave para fijar precisión.

#### Ejemplo 5

- `registro_predominante` → `institucional`
- `densidad_terminologica` → `media`
- `grado_de_abstraccion` → `intermedio`
- `accesibilidad_lexica` → `media`
- `variacion_lexica` → `baja`

**Resultado protocolario esperado:**

- pieza sobria y formal;
- formulación controlada, con baja dispersión expresiva;
- equilibrio entre claridad y seriedad institucional.

#### Ejemplo 6

- `registro_predominante` → `pedagogico`
- `densidad_terminologica` → `media`
- `grado_de_abstraccion` → `intermedio`
- `accesibilidad_lexica` → `alta`
- `variacion_lexica` → `media`

**Resultado protocolario esperado:**

- pieza guiada, pero no excesivamente simplificada;
- buena combinación de claridad conceptual y desarrollo explicativo;
- vocabulario accesible con margen para precisión.

#### Ejemplo 7

- `registro_predominante` → `hibrido`
- `densidad_terminologica` → `media`
- `grado_de_abstraccion` → `abstracto`
- `accesibilidad_lexica` → `media`
- `variacion_lexica` → `alta`

**Resultado protocolario esperado:**

- pieza de composición verbal más móvil;
- alternancia entre momentos accesibles y momentos de mayor espesor conceptual;
- diversidad expresiva controlada por una jerarquía clara de registros.

#### Ejemplo 8

- `registro_predominante` → `analitico`
- `densidad_terminologica` → `media`
- `grado_de_abstraccion` → `intermedio`
- `accesibilidad_lexica` → `media`
- `variacion_lexica` → `baja`

**Resultado protocolario esperado:**

- pieza precisa y estructurada;
- énfasis en distinciones y relaciones conceptuales;
- reiteración suficiente para sostener la claridad analítica.

#### Ejemplo 9

- `registro_predominante` → `coloquial_controlado`
- `densidad_terminologica` → `baja`
- `grado_de_abstraccion` → `concreto`
- `accesibilidad_lexica` → `alta`
- `variacion_lexica` → `alta`

**Resultado protocolario esperado:**

- pieza muy accesible y cercana;
- fuerte apoyo en escenas o ejemplos reconocibles;
- variación expresiva amplia, pero todavía contenida por un eje claro.

#### Ejemplo 10

- `registro_predominante` → `tecnico`
- `densidad_terminologica` → `alta`
- `grado_de_abstraccion` → `abstracto`
- `accesibilidad_lexica` → `baja`
- `variacion_lexica` → `media`

**Resultado protocolario esperado:**

- pieza de alta exigencia conceptual;
- fuerte concentración terminológica;
- mediación baja y mayor dependencia de un receptor ya compatible con ese nivel de abstracción.

---

### 3.17. `dinamica_atencional_y_procesual_resultante.*`

**Campos que contribuyen:**

- `estado_atencional`
- `regimen_de_activacion_atencional`
- `dinamica_procesual.explicitud`
- `dinamica_procesual.continuidad`
- `dinamica_procesual.friccion_interpretativa`
- `dinamica_procesual.compresion`
- `dinamica_procesual.recapitulacion`

---

#### `estado_atencional`

**Contribución por valores:**

- `atencion_no_abierta` → la pieza debe construir apertura casi desde cero. Protocolariamente:
  - reforzar el primer bloque;
  - reducir presuposiciones;
  - y priorizar entrada clara antes de densificar.

- `atencion_inestable` → la pieza debe sostener atención frágil. Protocolariamente:
  - introducir reenganches frecuentes;
  - evitar bloques demasiado largos;
  - y controlar la pérdida de foco entre tramos.

- `atencion_fragmentada` → la pieza debe construirse con cortes claros. Protocolariamente:
  - favorecer segmentación visible;
  - reducir transiciones demasiado sutiles;
  - y controlar la compresión para no saturar.

- `atencion_superficial` → la pieza debe facilitar comprensión inmediata. Protocolariamente:
  - aumentar claridad inicial;
  - reducir densidad innecesaria;
  - y priorizar formulaciones de lectura rápida.

- `atencion_sostenida` → la pieza puede admitir mayor estabilidad de recorrido. Protocolariamente:
  - tolerar bloques más trabados;
  - permitir mayor continuidad;
  - y aceptar algo más de desarrollo interno.

- `atencion_en_exploracion` → la pieza debe abrir campo para tanteo. Protocolariamente:
  - favorecer curiosidad;
  - permitir progresión exploratoria;
  - y no exigir clausura inmediata demasiado fuerte.

- `atencion_lista_para_profundizacion` → la pieza puede aumentar carga conceptual. Protocolariamente:
  - permitir más densidad;
  - reducir mediación básica;
  - y habilitar desarrollo de mayor espesor.

- `atencion_lista_para_activacion` → la pieza puede orientarse a acción. Protocolariamente:
  - permitir cierres operativos;
  - reforzar valor transferible;
  - y reducir contemplación excesiva.

- `atencion_lista_para_continuidad` → la pieza puede operar como nodo de secuencia. Protocolariamente:
  - favorecer enlaces seriales;
  - proyectar continuidad;
  - y aceptar resolución no total.

- `atencion_requiere_reenganche` → la pieza debe recuperar atención en curso. Protocolariamente:
  - reforzar aperturas parciales dentro de la pieza;
  - aumentar puntos de recuperación;
  - y construir continuidad fuerte entre bloques.

**Regla protocolaria:**
Usar `estado_atencional` como criterio de **grado de apertura atencional disponible** al inicio de la pieza.

**Ejemplos:**

- `atencion_no_abierta` → apertura más fuerte, menor presuposición, entrada guiada.
- `atencion_inestable` → reenganches más frecuentes, bloques con menor agotamiento atencional y progresión cuidada para no perder foco.
- `atencion_fragmentada` → bloques más cortos, cortes visibles, progresión controlada.
- `atencion_superficial` → formulaciones inmediatas, baja densidad inicial y claridad alta desde el primer tramo.
- `atencion_sostenida` → desarrollo más estable, mayor continuidad entre bloques y tolerancia a recorridos menos interrumpidos.
- `atencion_en_exploracion` → apertura que habilita tanteo, desarrollo con curiosidad progresiva y menor presión de clausura inmediata.
- `atencion_lista_para_profundizacion` → mayor carga conceptual y menor recapitulación básica.
- `atencion_lista_para_activacion` → cierres más operativos, transferencia más visible y orientación más directa hacia acción o aplicación.
- `atencion_lista_para_continuidad` → enlaces seriales más claros, proyección hacia piezas siguientes y cierre menos clausurante.
- `atencion_requiere_reenganche` → múltiples puntos de recuperación, refuerzo de transición entre bloques y continuidad fuerte para evitar caída atencional.

---

#### `regimen_de_activacion_atencional`

**Contribución por valores:**

- `apertura_inmediata` → intensificar los primeros bloques. Protocolariamente:
  - dar máximo peso a la apertura;
  - reducir demora expositiva;
  - y activar interés desde el inicio.

- `apertura_progresiva` → permitir entrada escalonada. Protocolariamente:
  - graduar la activación;
  - distribuir mejor el acceso al núcleo;
  - y no forzar un arranque de máxima intensidad.

- `reenganche` → exigir recuperación de atención en curso. Protocolariamente:
  - insertar puntos de reactivación;
  - reforzar cambios de bloque;
  - y evitar tramos planos largos.

- `sostenimiento_desde_el_inicio` → exigir continuidad fuerte desde el primer tramo. Protocolariamente:
  - construir apertura ya enlazada con el desarrollo;
  - sostener progresión sin caída notable;
  - y reducir cortes bruscos.

- `activacion_por_continuidad` → favorecer enlaces explícitos. Protocolariamente:
  - reforzar continuidad argumental y atencional;
  - usar cada bloque como apoyo del siguiente;
  - y proyectar progresión continua.

**Regla protocolaria:**
Usar `regimen_de_activacion_atencional` como criterio de **modo de entrada y sostenimiento del foco**.

**Ejemplos:**

- `apertura_inmediata` → gancho fuerte desde el primer tramo, entrada rápida al eje principal y activación alta desde el comienzo.
- `apertura_progresiva` → entrada escalonada, activación en aumento y acceso gradual al núcleo de la pieza.
- `reenganche` → necesidad de puntos internos de recuperación, cambios de bloque más marcados y refuerzos periódicos del foco.
- `sostenimiento_desde_el_inicio` → apertura ya conectada con el desarrollo, progresión continua y menor caída atencional entre tramos.
- `activacion_por_continuidad` → bloques enlazados con proyección visible, continuidad fuerte entre segmentos y activación sostenida por arrastre del recorrido.

---

#### `dinamica_procesual.explicitud`

**Contribución por valores:**

- `baja` → construir con mayor implicación inferencial. Protocolariamente:
  - reducir explicación directa;
  - dejar más trabajo interpretativo;
  - y no sobreaclarar relaciones.

- `media` → construir con equilibrio entre explicación e inferencia. Protocolariamente:
  - aclarar lo suficiente;
  - pero sin convertir toda relación en explicación exhaustiva.

- `alta` → construir con explicación directa visible. Protocolariamente:
  - hacer explícitas relaciones importantes;
  - reforzar claridad;
  - y reducir ambigüedad innecesaria.

**Regla protocolaria:**
Usar `explicitud` para regular cuánto del recorrido debe quedar dicho de forma directa.

**Ejemplos:**

- `baja` → más sugerencia, menos desarrollo aclaratorio.
- `media` → equilibrio entre claridad e inferencia.
- `alta` → explicación directa y relaciones verbalizadas.

---

#### `dinamica_procesual.continuidad`

**Contribución por valores:**

- `baja` → construir bloques más autónomos. Protocolariamente:
  - permitir mayor independencia local;
  - reducir enlaces obligatorios;
  - y tolerar saltos más visibles.

- `media` → construir con trabazón moderada. Protocolariamente:
  - enlazar bloques sin dependencia absoluta;
  - mantener progresión reconocible;
  - y permitir cierta autonomía parcial.

- `alta` → construir con enlaces fuertes. Protocolariamente:
  - reforzar progresión continua;
  - hacer que cada bloque dependa más del anterior y proyecte más al siguiente;
  - y reducir sensación de fragmentación.

**Regla protocolaria:**
Usar `continuidad` para regular el grado de enlace estructural entre bloques.

**Ejemplos:**

- `baja` → bloques más autosuficientes.
- `media` → secuencia reconocible con autonomía parcial.
- `alta` → recorrido fuertemente encadenado.

---

#### `dinamica_procesual.friccion_interpretativa`

**Contribución por valores:**

- `baja` → construir para lectura fácil. Protocolariamente:
  - reducir ambigüedad;
  - favorecer claridad de relaciones;
  - y minimizar esfuerzo interpretativo.

- `media` → construir con exigencia moderada. Protocolariamente:
  - permitir algo de complejidad;
  - sin volver opaco el recorrido.

- `alta` → construir con mayor exigencia interpretativa. Protocolariamente:
  - tolerar relaciones menos explícitas;
  - permitir mayor densidad conceptual;
  - y exigir más trabajo del receptor.

**Regla protocolaria:**
Usar `friccion_interpretativa` para regular cuánta resistencia cognitiva puede ofrecer la pieza.

**Ejemplos:**

- `baja` → lectura guiada y directa.
- `media` → cierta exigencia, pero controlada.
- `alta` → mayor espesor y trabajo interpretativo.

---

#### `dinamica_procesual.compresion`

**Contribución por valores:**

- `baja` → construir con mayor despliegue. Protocolariamente:
  - permitir desarrollo más extendido;
  - reducir condensación extrema;
  - y tolerar mayor explicitación.

- `media` → construir con equilibrio entre despliegue y condensación. Protocolariamente:
  - mantener densidad controlada;
  - sin expansión excesiva ni máxima compactación.

- `alta` → construir con condensación fuerte. Protocolariamente:
  - comprimir formulaciones;
  - reducir redundancia;
  - y exigir mayor economía verbal.

**Regla protocolaria:**
Usar `compresion` para regular cuánta información o elaboración debe concentrarse por tramo.

**Ejemplos:**

- `baja` → más desarrollo y mayor despliegue.
- `media` → equilibrio entre extensión y síntesis.
- `alta` → fuerte condensación y economía verbal.

---

#### `dinamica_procesual.recapitulacion`

**Contribución por valores:**

- `baja` → construir con poca recuperación explícita del trayecto. Protocolariamente:
  - evitar repeticiones de síntesis;
  - confiar más en continuidad o memoria inmediata.

- `media` → construir con recapitulación controlada. Protocolariamente:
  - introducir recuperación cuando ayude a la progresión;
  - sin volver redundante la pieza.

- `alta` → construir con recuperación visible del trayecto. Protocolariamente:
  - reforzar síntesis parciales;
  - reiterar puntos clave;
  - y facilitar reanclaje conceptual del receptor.

**Regla protocolaria:**
Usar `recapitulacion` para regular cuánta recuperación explícita del recorrido debe aparecer en la pieza.

**Ejemplos:**

- `baja` → poca recuperación explícita.
- `media` → recapitulación puntual cuando conviene.
- `alta` → síntesis parciales visibles y refuerzo de trayecto.

---

**Regla protocolaria de construcción del conjunto:**

La `dinamica_atencional_y_procesual_resultante` debe usarse como **sistema de regulación del foco, del ritmo de procesamiento y del esfuerzo cognitivo**.

Su aplicación debe seguir esta secuencia:

1. fijar el `estado_atencional`;
2. definir el `regimen_de_activacion_atencional`;
3. ajustar `explicitud`, `continuidad`, `friccion_interpretativa`, `compresion` y `recapitulacion`;
4. verificar que la combinación final sea coherente con receptor, función y arquitectura;
5. mantener esa lógica a lo largo de toda la pieza.

**Plantilla replicable:**

    fijar estado_atencional
    decidir regimen_de_activacion_atencional
    regular explicitud
    regular continuidad
    regular friccion_interpretativa
    regular compresion
    regular recapitulacion
    verificar coherencia global

**Interacciones relevantes:**

- `estado_atencional` restringe cuánta compresión, fricción y densidad son admisibles;
- `regimen_de_activacion_atencional` condiciona especialmente la apertura y la continuidad entre bloques;
- `explicitud`, `friccion_interpretativa` y `recapitulacion` deben equilibrarse entre sí;
- `continuidad` y `compresion` no deben escalar juntas sin control cuando la atención es frágil;
- esta dimensión debe leerse junto con `publico_objetivo_inmediato`, `funcion_dominante`, `efecto_buscado` y `arquitectura_macro`.

**Ejemplos de combinación:**

> Idea de base usada en todos los ejemplos:
> **“Pedir más palabras no garantiza mejor pensamiento.”**
>
> En cada caso se muestra:
>
> 1. la configuración;
> 2. el resultado protocolario esperado;
> 3. un ejemplo simple de desarrollo por bloques.

---

#### Ejemplo 1

- `estado_atencional` → `atencion_no_abierta`
- `regimen_de_activacion_atencional` → `apertura_inmediata`
- `explicitud` → `alta`
- `continuidad` → `media`
- `friccion_interpretativa` → `baja`
- `compresion` → `media`
- `recapitulacion` → `media`

**Resultado protocolario esperado:**

- apertura fuerte;
- claridad alta;
- baja resistencia interpretativa;
- progresión suficientemente guiada.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura:**
  “Te hacen escribir más palabras, como si eso automáticamente significara pensar mejor.”

- **Bloque 2 — Desarrollo:**
  “Pero una respuesta larga puede seguir vacía. Lo importante no es cuánto se escribe, sino si la idea distingue, conecta y sostiene algo.”

- **Bloque 3 — Cierre:**
  “Por eso, exigir más palabras no siempre mejora el pensamiento. A veces solo infla la respuesta.”

---

#### Ejemplo 2

- `estado_atencional` → `atencion_lista_para_profundizacion`
- `regimen_de_activacion_atencional` → `sostenimiento_desde_el_inicio`
- `explicitud` → `media`
- `continuidad` → `alta`
- `friccion_interpretativa` → `media`
- `compresion` → `alta`
- `recapitulacion` → `baja`

**Resultado protocolario esperado:**

- recorrido continuo;
- alta densidad;
- menor necesidad de recapitulación;
- mayor tolerancia a compresión conceptual.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura enlazada:**
  “Confundir cantidad verbal con pensamiento es un error de criterio.”

- **Bloque 2 — Desarrollo continuo:**
  “La longitud no garantiza estructura. Una idea vale por su articulación interna: por cómo diferencia niveles, conecta relaciones y organiza su propio núcleo.”

- **Bloque 3 — Cierre:**
  “Si el criterio de evaluación mide volumen antes que estructura, premia expansión verbal y no rigor conceptual.”

---

#### Ejemplo 3

- `estado_atencional` → `atencion_fragmentada`
- `regimen_de_activacion_atencional` → `reenganche`
- `explicitud` → `alta`
- `continuidad` → `media`
- `friccion_interpretativa` → `baja`
- `compresion` → `baja`
- `recapitulacion` → `alta`

**Resultado protocolario esperado:**

- cortes claros;
- varios puntos de recuperación;
- bajo esfuerzo interpretativo;
- recapitulación visible para sostener el recorrido.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura:**
  “Más palabras no significa mejor pensamiento.”

- **Bloque 2 — Reenganche 1:**
  “Pausa. Lo repito: una respuesta larga puede seguir diciendo casi nada.”

- **Bloque 3 — Reenganche 2:**
  “Lo importante es otra cosa: que la idea tenga forma, no solo tamaño.”

- **Bloque 4 — Cierre recapitulativo:**
  “Entonces: más extensión no siempre es más claridad. A veces solo es más ruido.”

---

#### Ejemplo 4

- `estado_atencional` → `atencion_superficial`
- `regimen_de_activacion_atencional` → `apertura_inmediata`
- `explicitud` → `alta`
- `continuidad` → `baja`
- `friccion_interpretativa` → `baja`
- `compresion` → `alta`
- `recapitulacion` → `baja`

**Resultado protocolario esperado:**

- entrada muy directa;
- comprensión inmediata;
- bloques autónomos y rápidos;
- mínima exigencia interpretativa.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura:**
  “Escribir más no es pensar mejor.”

- **Bloque 2 — Desarrollo rápido:**
  “Puedes llenar una página y seguir sin una idea clara.”

- **Bloque 3 — Cierre:**
  “La calidad está en la estructura, no en la cantidad.”

---

#### Ejemplo 5

- `estado_atencional` → `atencion_en_exploracion`
- `regimen_de_activacion_atencional` → `apertura_progresiva`
- `explicitud` → `media`
- `continuidad` → `media`
- `friccion_interpretativa` → `media`
- `compresion` → `media`
- `recapitulacion` → `media`

**Resultado protocolario esperado:**

- apertura menos agresiva;
- curiosidad progresiva;
- desarrollo por tanteo;
- cierre que aclara sin clausurar demasiado pronto.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura exploratoria:**
  “A veces se cree que una respuesta mejora solo porque se alarga.”

- **Bloque 2 — Desarrollo:**
  “Pero eso depende de qué entendamos por mejorar. Si mejorar significa decir más, la longitud ayuda. Si significa pensar mejor, la cosa cambia.”

- **Bloque 3 — Cierre aclaratorio:**
  “Porque pensar mejor no es expandirse más, sino organizar mejor la idea.”

---

#### Ejemplo 6

- `estado_atencional` → `atencion_inestable`
- `regimen_de_activacion_atencional` → `reenganche`
- `explicitud` → `alta`
- `continuidad` → `baja`
- `friccion_interpretativa` → `baja`
- `compresion` → `media`
- `recapitulacion` → `alta`

**Resultado protocolario esperado:**

- varios puntos de recuperación;
- tramos breves;
- mensaje repetido con variación mínima;
- cierre muy anclado.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura:**
  “Te piden más palabras.”

- **Bloque 2 — Reenganche:**
  “Pero más palabras no garantiza una mejor idea.”

- **Bloque 3 — Reenganche:**
  “Porque una idea mala también puede ocupar mucho espacio.”

- **Bloque 4 — Cierre recapitulativo:**
  “Entonces, no confundas extensión con pensamiento.”

---

#### Ejemplo 7

- `estado_atencional` → `atencion_lista_para_activacion`
- `regimen_de_activacion_atencional` → `sostenimiento_desde_el_inicio`
- `explicitud` → `alta`
- `continuidad` → `alta`
- `friccion_interpretativa` → `baja`
- `compresion` → `media`
- `recapitulacion` → `media`

**Resultado protocolario esperado:**

- recorrido estable;
- orientación a aplicación;
- cierre operativo;
- buena transferencia hacia acción.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura:**
  “Si evalúas un texto solo por su extensión, estás usando un criterio débil.”

- **Bloque 2 — Desarrollo:**
  “Un mejor criterio sería revisar si la idea tiene estructura: si distingue partes, si conecta razones, si sabe qué quiere decir.”

- **Bloque 3 — Cierre operativo:**
  “Así que cambia la consigna: no pidas más palabras; pide mejor organización de la idea.”

---

#### Ejemplo 8

- `estado_atencional` → `atencion_lista_para_continuidad`
- `regimen_de_activacion_atencional` → `activacion_por_continuidad`
- `explicitud` → `media`
- `continuidad` → `alta`
- `friccion_interpretativa` → `media`
- `compresion` → `media`
- `recapitulacion` → `baja`

**Resultado protocolario esperado:**

- pieza leída como nodo de secuencia;
- fuerte enlace con lo anterior o lo siguiente;
- cierre no clausurante;
- progresión visible entre bloques.

**Desarrollo simple por bloques:**

- **Bloque 1 — Apertura con continuidad:**
  “Ya vimos que escribir más no equivale automáticamente a pensar mejor.”

- **Bloque 2 — Desarrollo:**
  “Ahora el punto es otro: si la cantidad no basta, entonces el verdadero criterio debe estar en la estructura de la idea.”

- **Bloque 3 — Cierre proyectivo:**
  “Y eso abre la siguiente pregunta: ¿cómo se reconoce, en concreto, una idea bien estructurada?”

---

**Lectura comparativa rápida:**

- Los ejemplos 1 y 4 muestran configuraciones para entrada rápida y comprensión inmediata.
- Los ejemplos 2 y 8 muestran configuraciones más compatibles con continuidad o mayor espesor.
- Los ejemplos 3 y 6 muestran configuraciones para atención frágil que requieren reenganche visible.
- El ejemplo 7 muestra una configuración orientada a transferencia o activación posterior.
- El ejemplo 5 muestra una configuración más exploratoria y menos abrupta.

---

### 3.18. `construccion_del_caso_resultante.*`

#### `construccion_conceptual.ideas_nucleares_activadas_globalmente`

**Campos que contribuyen:**

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Contribución por valores:**

- `rol_conceptual = nuclear` → la idea debe entrar en `ideas_nucleares_activadas_globalmente`.
- `formulacion_de_la_idea = proposicion_definicional` → la idea nuclear entra como definición o delimitación central.
- `formulacion_de_la_idea = proposicion_relacional` → la idea nuclear entra como vínculo estructural principal.
- `formulacion_de_la_idea = proposicion_argumentativa` → la idea nuclear entra como tesis o razón central.
- `formulacion_de_la_idea = proposicion_operativa` → la idea nuclear entra como criterio de uso o instrucción principal.
- `formulacion_de_la_idea = formulacion_abierta_controlada` → la idea nuclear entra con mayor libertad expresiva, pero debe conservar consistencia.
- `peso_relativo` alto → aumenta prioridad de aparición, reiteración o desarrollo dentro del conjunto nuclear.
- `peso_relativo` bajo → mantiene pertenencia nuclear, pero reduce expansión relativa frente a otras ideas nucleares.
- `modo_de_presencia = explicita` → la idea debe aparecer nombrada en la salida global.
- `modo_de_presencia = explicita_reiterada` → la idea debe aparecer varias veces o quedar muy marcada.
- `modo_de_presencia = implicita_estructurante` → la idea puede no repetirse siempre, pero debe organizar la pieza.
- `modo_de_presencia = localizada` → la idea nuclear aparece en una zona puntual, aunque sigue siendo central.
- `modo_de_presencia = transversal` → la idea nuclear atraviesa varios bloques o tramos.

---

#### `construccion_conceptual.ideas_complementarias_activadas_globalmente`

**Campos que contribuyen:**

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Contribución por valores:**

- `rol_conceptual = complementaria` → la idea debe entrar en `ideas_complementarias_activadas_globalmente`.
- `formulacion_de_la_idea` determina si la idea complementaria afina por definición, relación, argumento, operación o formulación abierta.
- `peso_relativo` regula cuánto espacio complementario recibe.
- `modo_de_presencia` regula si se nombra, se reitera, se localiza o atraviesa parcialmente la pieza.

---

#### `construccion_conceptual.ideas_de_puente_activadas_globalmente`

**Campos que contribuyen:**

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Contribución por valores:**

- `rol_conceptual = puente` → la idea debe entrar en `ideas_de_puente_activadas_globalmente`.
- `formulacion_de_la_idea` determina cómo conecta regiones del caso:
  - definicionalmente,
  - relacionalmente,
  - argumentativamente,
  - operativamente,
  - o con formulación abierta controlada.
- `peso_relativo` regula cuán visible debe ser el puente.
- `modo_de_presencia` determina si el puente se declara de forma explícita o si opera como articulación más implícita.

---

#### `construccion_conceptual.ideas_contrastivas_activadas_globalmente`

**Campos que contribuyen:**

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Contribución por valores:**

- `rol_conceptual = contrastiva` → la idea debe entrar en `ideas_contrastivas_activadas_globalmente`.
- `formulacion_de_la_idea` determina si el contraste se formula como oposición definicional, relacional, argumentativa, operativa o abierta.
- `peso_relativo` regula el peso estructural del contraste dentro del caso.
- `modo_de_presencia` determina si el contraste se nombra directamente o si estructura la pieza con menor explicitud.

---

#### `construccion_conceptual.ideas_derivadas_activadas_globalmente`

**Campos que contribuyen:**

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Contribución por valores:**

- `rol_conceptual = derivada` → la idea debe entrar en `ideas_derivadas_activadas_globalmente`.
- `formulacion_de_la_idea` determina la forma de esa derivación:
  - definición derivada,
  - relación derivada,
  - tesis derivada,
  - instrucción derivada,
  - o formulación abierta derivada.
- `peso_relativo` regula cuánto desarrollo recibe la derivación.
- `modo_de_presencia` regula si se explicita o si aparece solo como consecuencia localizada.

---

#### `construccion_conceptual.relaciones_entre_ideas_activadas_globalmente`

**Campos que contribuyen:**

- `relaciones_con_otras_ideas.tipo_de_relacion`
- `peso_relativo`
- `modo_de_presencia`

**Contribución por valores:**

- `soporte` → la salida debe mostrar que una idea apoya a otra.
- `subordinacion` → la salida debe mostrar dependencia estructural entre ideas.
- `expansion` → la salida debe mostrar que una idea amplía a otra.
- `contraste` → la salida debe mostrar oposición estructurada entre ideas.
- `condicion` → la salida debe mostrar que una idea funciona como condición de otra.
- `consecuencia` → la salida debe mostrar derivación o resultado entre ideas.
- `equivalencia_parcial` → la salida debe mostrar correspondencia limitada entre ideas.
- `articulacion_libre_controlada` → la salida debe conservar flexibilidad, pero sin perder control compositivo.
- `peso_relativo` regula qué relaciones deben quedar más visibles o desarrolladas.
- `modo_de_presencia` regula si la relación se formula explícitamente o si queda como organización implícita del caso.

---

#### `configuracion_narrativa`

**Campos que contribuyen:**

- `configuracion_narrativa`
- distribución resultante de ideas por rol
- relaciones activadas entre ideas

**Contribución por valores:**

- `lineal_progresiva` → la salida debe ordenar las ideas como recorrido continuo.
- `apertura_profundizacion_cierre` → la salida debe distribuir las ideas en apertura, desarrollo y cierre reconocibles.
- `contrastiva` → la salida debe organizar el núcleo del caso alrededor de oposición o diferencia.
- `acumulativa` → la salida debe sumar elementos progresivamente.
- `recapitulativa` → la salida debe volver con frecuencia sobre lo ya dicho.
- `modular` → la salida debe permitir bloques relativamente autónomos.
- `abierta_controlada` → la salida puede flexibilizar el orden, pero sin perder coherencia estructural.

---

**Regla protocolaria de construcción:**

La `construccion_del_caso_resultante` debe construirse siempre siguiendo esta secuencia:

1. clasificar cada idea según `rol_conceptual`;
2. ubicarla en el campo global correspondiente:
   - nuclear,
   - complementaria,
   - de puente,
   - contrastiva,
   - derivada;
3. ajustar prioridad, expansión o reiteración según `peso_relativo`;
4. decidir cómo aparece según `modo_de_presencia`;
5. registrar las relaciones activadas entre ideas según `tipo_de_relacion`;
6. organizar el conjunto bajo la `configuracion_narrativa` elegida.

---

**Ejemplo simple:**

Supongamos este caso conceptual:

- idea 1: “más palabras no garantizan mejor pensamiento”
- idea 2: “lo importante es la estructura de la idea”
- idea 3: “la IA puede servir para desglosar ideas”
- relación entre idea 1 e idea 2: `contraste`
- relación entre idea 2 e idea 3: `consecuencia`
- `configuracion_narrativa = contrastiva`

**Resultado protocolario esperado:**

- `ideas_nucleares_activadas_globalmente`:
  - “más palabras no garantizan mejor pensamiento”
  - “lo importante es la estructura de la idea”

- `ideas_derivadas_activadas_globalmente`:
  - “la IA puede servir para desglosar ideas”

- `relaciones_entre_ideas_activadas_globalmente`:
  - contraste entre cantidad verbal y estructura conceptual
  - consecuencia entre estructura conceptual y uso de IA para desglosar ideas

- `configuracion_narrativa`:
  - la salida debe organizar el recorrido global apoyándose en el contraste entre la primera y la segunda idea, y hacer aparecer la tercera como derivación posterior.

---

**Interacciones relevantes:**

- `rol_conceptual` decide en qué campo global de salida entra cada idea;
- `formulacion_de_la_idea` decide cómo se formula esa presencia;
- `peso_relativo` regula prioridad, reiteración y expansión;
- `modo_de_presencia` regula si la idea o relación se declara, se repite, se localiza o atraviesa la pieza;
- `tipo_de_relacion` organiza la articulación entre ideas;
- `configuracion_narrativa` decide la forma global del recorrido del caso.

---

### 3.19. `comparecencia_performativa_resultante.*`

**Campos que contribuyen:**

- `modalidad_de_guion`
- `modo_de_comparecencia_verbal`
- `comparecencia_performativa.cercania`
- `comparecencia_performativa.autoridad`
- `comparecencia_performativa.calidez`
- `comparecencia_performativa.intensidad`
- `comparecencia_performativa.sobriedad`
- `realizacion_verbal_de_bloque.emisor`
- `realizacion_verbal_de_bloque.dialogo`
- `acompanamiento_auditivo`
- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `regimen_de_encuadre_performativo`
- `grado_de_dependencia_de_la_performance_visible`

---

#### `modalidad_de_guion`

**Contribución por valores:**

- `presentacion_a_camara` → construir la pieza con presencia frontal directa. Protocolariamente:
  - privilegiar comparecencia visible del emisor;
  - organizar la voz y los recursos alrededor de esa frontalidad;
  - y evitar que la pieza dependa demasiado de mediaciones externas.

- `voz_en_off` → construir la pieza desplazando el peso al relato no frontal. Protocolariamente:
  - permitir mayor apoyo en imagen, video o superficie visual;
  - reducir dependencia de la presencia directa en cámara;
  - y hacer que la voz guíe el recorrido sin necesidad de frontalidad constante.

- `escenificado` → construir la pieza con mayor peso de puesta en escena. Protocolariamente:
  - exigir más visualidad performativa;
  - integrar mejor acciones, encuadre y escenificación;
  - y no resolver todo solo en el plano verbal.

- `mixto` → construir la pieza combinando regímenes. Protocolariamente:
  - distribuir presencia frontal, voz mediada y visualidad escénica;
  - explicitar qué régimen domina y cuál complementa;
  - y evitar mezcla arbitraria.

**Ejemplos:**

- `presentacion_a_camara` → emisor visible, frontalidad clara, soporte principal en la voz directa.
- `voz_en_off` → narración principal sobre imágenes, apoyos visuales o secuencias.
- `escenificado` → desarrollo apoyado en acciones visibles y puesta en escena.
- `mixto` → apertura a cámara, desarrollo con voz en off y cierre frontal.

---

#### `modo_de_comparecencia_verbal`

**Contribución por valores:**

- `oral_directo` → construir el discurso como habla frontal y directa.
- `oral_guiado` → construir el discurso con mayor pauta o conducción.
- `oral_escenico` → integrar la verbalización con acción visible y puesta en escena.
- `oral_mixto` → combinar varios regímenes de oralidad sin incoherencia.

**Regla protocolaria:**
Usar `modo_de_comparecencia_verbal` para decidir **cómo suena** la pieza y qué relación guarda la voz con la escena.

**Ejemplos:**

- `oral_directo` → frases frontales, apelación directa, menor mediación.
- `oral_guiado` → desarrollo más pautado, explicaciones conducidas, ritmo más controlado.
- `oral_escenico` → verbalización integrada a acciones o demostraciones visibles.
- `oral_mixto` → tramos frontales combinados con tramos guiados o escénicos.

---

#### `comparecencia_performativa.cercania`

**Contribución por valores:**

- `baja` → construir con mayor distancia expresiva, menor intimidad y menor cercanía afectiva.
- `media` → construir con cercanía controlada, sin extrema distancia ni intimidad.
- `alta` → construir con alta proximidad expresiva y sensación de interlocución cercana.

**Ejemplos:**

- `baja` → tono más distante, menos apelación íntima.
- `media` → cercanía moderada, equilibrio.
- `alta` → tono próximo, sensación de hablarle directamente al receptor.

---

#### `comparecencia_performativa.autoridad`

**Contribución por valores:**

- `baja` → reducir el peso de la voz como fuente fuerte de criterio.
- `media` → sostener autoridad suficiente sin rigidez excesiva.
- `alta` → construir con fuerte peso de seguridad, criterio y dirección.

**Ejemplos:**

- `baja` → tono menos categórico.
- `media` → seguridad equilibrada.
- `alta` → voz firme, con mayor fuerza de conducción.

---

#### `comparecencia_performativa.calidez`

**Contribución por valores:**

- `baja` → construir con menor suavidad relacional y menor acogida afectiva.
- `media` → mantener una relación cordial, pero controlada.
- `alta` → construir con tono acogedor, amable o relacionalmente próximo.

**Ejemplos:**

- `baja` → trato más seco o sobrio.
- `media` → cordialidad moderada.
- `alta` → tono amable, acogedor y más afectivamente próximo.

---

#### `comparecencia_performativa.intensidad`

**Contribución por valores:**

- `baja` → construir con menor empuje performativo.
- `media` → mantener intensidad controlada.
- `alta` → construir con mayor energía, presión o empuje expresivo.

**Ejemplos:**

- `baja` → ritmo y énfasis más contenidos.
- `media` → energía equilibrada.
- `alta` → énfasis fuerte, empuje visible, mayor carga expresiva.

---

#### `comparecencia_performativa.sobriedad`

**Contribución por valores:**

- `baja` → permitir mayor soltura performativa y menor contención formal.
- `media` → equilibrio entre control y soltura.
- `alta` → construir con fuerte contención, control formal y menor exhibición expresiva.

**Ejemplos:**

- `baja` → más soltura o expresividad abierta.
- `media` → control suficiente sin rigidez.
- `alta` → tono contenido, limpio y sobrio.

---

#### `realizacion_verbal_de_bloque.emisor`

**Contribución por valores:**

Campo descriptivo abierto. Protocolariamente:

- fija quién porta la voz del bloque;
- decide si la pieza habla desde una única fuente o desde varias;
- y condiciona la coherencia de comparecencia entre bloques.

**Ejemplos:**

- un emisor único y estable;
- cambio de emisor entre bloques;
- emisor principal con apoyos secundarios.

---

#### `realizacion_verbal_de_bloque.dialogo`

**Contribución por valores:**

Campo descriptivo abierto. Protocolariamente:

- fija si el bloque se resuelve como monólogo, diálogo, intercambio guiado o equivalente;
- condiciona el ritmo verbal local;
- y modula la relación entre comparecencia verbal y escenificación.

**Ejemplos:**

- monológico;
- dialogado;
- pseudo-dialogado;
- alternancia breve entre voces.

---

#### `acompanamiento_auditivo`

**Contribución por valores:**

- `musica` → introducir refuerzo atmosférico, tonal o emocional.
- `sonido_ambiente` → introducir contexto, entorno o inmersión.
- `efecto_sonoro` → introducir marcación local, énfasis o señal de transición.

**Regla protocolaria:**
Usar `acompanamiento_auditivo` para decidir qué parte del sentido de la pieza recae también en la capa sonora.

**Ejemplos:**

- `musica` → sostener tono general o reforzar clima.
- `sonido_ambiente` → situar al receptor en un entorno o escena.
- `efecto_sonoro` → remarcar un giro, corte o punto de énfasis.

---

#### `regimen_de_explicitacion_escenica`

**Contribución por valores:**

- `ninguna` → suprimir explicitación escénica visible.
- `minima` → incluir solo lo indispensable para orientar ejecución.
- `moderada` → mantener explicitación regular, pero no invasiva.
- `detallada` → construir con alta explicitación de acciones, encuadre o ejecución.

**Ejemplos:**

- `ninguna` → casi toda la pieza se sostiene sin indicaciones escénicas.
- `minima` → solo marcas puntuales.
- `moderada` → indicaciones frecuentes pero controladas.
- `detallada` → guía visible abundante de la puesta en escena.

---

#### `tipo_de_escenificacion_admitida`

**Contribución por valores:**

- `ninguna` → suprimir escenificación visible como recurso relevante.
- `gestual_basica` → permitir gestualidad mínima como apoyo.
- `presentacion_a_camara` → privilegiar frontalidad simple como forma escénica.
- `demostrativa` → permitir mostrar objetos, procesos o apoyos visibles.
- `escenificada` → permitir mayor teatralización o puesta en escena.
- `mixta_controlada` → combinar varios tipos con control explícito.

**Ejemplos:**

- `ninguna` → sin puesta visible relevante.
- `gestual_basica` → manos, rostro o postura como apoyo mínimo.
- `presentacion_a_camara` → frontalidad simple sostenida.
- `demostrativa` → mostrar material, pantalla, objeto o procedimiento.
- `escenificada` → mayor teatralización.
- `mixta_controlada` → alternancia regulada entre frontalidad, gesto y demostración.

---

#### `densidad_de_accion_visible`

**Contribución por valores:**

- `baja` → pocas acciones visibles; predominio de estabilidad.
- `media` → equilibrio entre acción visible y estabilidad.
- `alta` → presencia fuerte de acción visible a lo largo de la pieza.

**Ejemplos:**

- `baja` → pocas acciones, más quietud.
- `media` → acciones puntuales distribuidas.
- `alta` → movimiento, demostración o acción frecuente.

---

#### `regimen_de_encuadre_performativo`

**Contribución por valores:**

- `estable` → construir con encuadre sobrio y fijo.
- `dinamico_controlado` → permitir variación, pero con control.
- `variado` → admitir mayor movilidad o diversidad de encuadre.
- `mixto` → combinar estabilidad y variación según tramo.

**Ejemplos:**

- `estable` → encuadre casi fijo.
- `dinamico_controlado` → algunos cambios de plano o ajuste visible.
- `variado` → movilidad más marcada.
- `mixto` → apertura estable, desarrollo variado, cierre nuevamente estable.

---

#### `grado_de_dependencia_de_la_performance_visible`

**Contribución por valores:**

- `baja` → la pieza puede sostenerse casi sin performance visible.
- `media` → la performance ayuda de forma clara, pero no determina toda la pieza.
- `alta` → la performance visible pesa mucho en la eficacia de la pieza.
- `dominante` → la performance visible es estructural y no puede retirarse sin romper la pieza.

**Ejemplos:**

- `baja` → el contenido sigue funcionando aunque se reduzca la puesta visible.
- `media` → la performance mejora mucho la pieza, pero no la sostiene sola.
- `alta` → la presencia visible ya es una parte fuerte del sentido.
- `dominante` → sin performance visible la pieza pierde su estructura principal.

---

**Regla protocolaria de construcción del conjunto:**

La `comparecencia_performativa_resultante` debe usarse como **sistema de construcción de presencia**, donde se decide:

1. cómo aparece la pieza como acto visible o audible;
2. qué tipo de voz la porta;
3. cuánto depende del cuerpo, la escena, la acción y el encuadre;
4. y cómo se integran verbalidad, visualidad y sonido en una misma comparecencia.

Su aplicación debe seguir esta secuencia:

1. fijar `modalidad_de_guion`;
2. fijar `modo_de_comparecencia_verbal`;
3. calibrar `cercania`, `autoridad`, `calidez`, `intensidad` y `sobriedad`;
4. definir `emisor` y `dialogo`;
5. decidir `acompanamiento_auditivo`;
6. fijar régimen escénico y performativo:
   - `regimen_de_explicitacion_escenica`
   - `tipo_de_escenificacion_admitida`
   - `densidad_de_accion_visible`
   - `regimen_de_encuadre_performativo`
   - `grado_de_dependencia_de_la_performance_visible`
7. verificar coherencia global entre todos estos elementos.

**Plantilla replicable:**

    fijar modalidad_de_guion
    fijar modo_de_comparecencia_verbal
    calibrar perfil performativo
    decidir emisor y dialogo
    decidir acompanamiento_auditivo
    fijar régimen escénico
    verificar coherencia global

**Interacciones relevantes:**

- `modalidad_de_guion` restringe la combinación admisible de verbalidad, escena y visualidad;
- `modo_de_comparecencia_verbal` debe ser coherente con `tipo_de_escenificacion_admitida`;
- `cercania`, `autoridad`, `calidez`, `intensidad` y `sobriedad` no deben combinarse arbitrariamente;
- `regimen_de_explicitacion_escenica`, `densidad_de_accion_visible` y `grado_de_dependencia_de_la_performance_visible` deben escalar de forma compatible;
- esta dimensión debe leerse junto con `plataforma`, `aplicacion_de_plataforma`, `funcion_dominante` y `configuracion_discursiva`.

**Ejemplos de combinación**

> Idea de base usada en ambos ejemplos:
> **“Pedir más palabras no garantiza mejor pensamiento.”**

---

#### Ejemplo 1

- `modalidad_de_guion` → `presentacion_a_camara`
- `modo_de_comparecencia_verbal` → `oral_directo`
- `cercania` → `alta`
- `autoridad` → `media`
- `calidez` → `alta`
- `intensidad` → `media`
- `sobriedad` → `media`
- `dialogo` → `monologico`
- `acompanamiento_auditivo` → `musica`
- `regimen_de_explicitacion_escenica` → `minima`
- `tipo_de_escenificacion_admitida` → `presentacion_a_camara`
- `densidad_de_accion_visible` → `baja`
- `regimen_de_encuadre_performativo` → `estable`
- `grado_de_dependencia_de_la_performance_visible` → `media`

**Resultado protocolario esperado:**

- pieza frontal;
- voz directa;
- cercanía alta con control suficiente;
- apoyo sonoro discreto;
- escenificación mínima.

**Desarrollo simple de la idea:**

- **Bloque 1 — Apertura a cámara:**
  “Te piden escribir más palabras… como si eso automáticamente significara pensar mejor.”

- **Bloque 2 — Desarrollo frontal:**
  “Pero una respuesta larga puede seguir vacía. El problema no es cuánto ocupa, sino si la idea tiene estructura.”

- **Bloque 3 — Cierre directo:**
  “Por eso, pedir más palabras no siempre mejora el pensamiento. A veces solo alarga el ruido.”

**Lectura performativa del ejemplo:**

- la pieza se sostiene principalmente en la presencia directa del emisor;
- la música solo acompaña, no compite;
- la acción visible es mínima: mirada a cámara, pausas, pequeños gestos;
- el encuadre estable refuerza claridad y cercanía;
- la performance ayuda, pero el núcleo sigue estando en la voz frontal.

---

#### Ejemplo 2

- `modalidad_de_guion` → `escenificado`
- `modo_de_comparecencia_verbal` → `oral_escenico`
- `cercania` → `media`
- `autoridad` → `media`
- `calidez` → `media`
- `intensidad` → `alta`
- `sobriedad` → `baja`
- `dialogo` → `dialogado`
- `acompanamiento_auditivo` → `efecto_sonoro`
- `regimen_de_explicitacion_escenica` → `detallada`
- `tipo_de_escenificacion_admitida` → `escenificada`
- `densidad_de_accion_visible` → `alta`
- `regimen_de_encuadre_performativo` → `variado`
- `grado_de_dependencia_de_la_performance_visible` → `dominante`

**Resultado protocolario esperado:**

- pieza con fuerte peso de puesta en escena;
- verbalidad integrada a la acción;
- alta visibilidad performativa;
- fuerte dependencia de la escena para sostener la pieza.

**Desarrollo simple de la idea:**

- **Bloque 1 — Apertura escenificada:**
  Persona A deja caer varias hojas sobre una mesa.
  Persona B pregunta: “¿Y esto qué demuestra?”
  Persona A responde: “Que escribí mucho.”
  Efecto sonoro breve de golpe o caída.

- **Bloque 2 — Desarrollo con acción visible:**
  Persona B toma una hoja, la mira y dice:
  “Sí, pero aquí hay muchas palabras y casi ninguna idea clara.”
  Persona A se detiene.
  Persona B continúa:
  “Pensar mejor no es llenar espacio. Es organizar lo que quieres decir.”

- **Bloque 3 — Cierre performativo:**
  Persona A aparta las hojas.
  Persona B coloca una sola tarjeta con una frase breve:
  “Menos volumen. Más estructura.”
  Efecto sonoro de marcación final.

**Lectura performativa del ejemplo:**

- la idea no se transmite solo por el texto oral, sino por la escena;
- el diálogo distribuye la tensión entre dos posiciones;
- la acción visible hace comprensible el contraste entre cantidad y estructura;
- los efectos sonoros remarcan cortes y énfasis;
- la pieza depende mucho más de la performance que en el ejemplo frontal.

---

#### Comparación rápida entre ambos ejemplos

- En el **Ejemplo 1**, la idea se transmite sobre todo por **voz directa y presencia frontal**.
- En el **Ejemplo 2**, la idea se transmite por **puesta en escena, diálogo y acción visible**.
- En el primero, la performance acompaña.
- En el segundo, la performance sostiene estructuralmente la pieza.

---

### 3.20. `marco_de_materializacion_resultante.*`

**Campos que contribuyen:**

- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`

**Contribución por valores:**

#### `clase_de_materializacion`

- `guion_audiovisual_breve` → fija que la salida debe construirse como una pieza guionizada breve. Protocolariamente:
  - organizar la manifestación en bloques realizables;
  - privilegiar soporte verbal oralizable;
  - mantener duración global breve;
  - y subordinar recursos complementarios a la pieza principal.

#### `plataforma`

- `tiktok` → fija el entorno general de realización. Protocolariamente:
  - exigir captación temprana de atención;
  - favorecer ritmo alto o medio-alto;
  - restringir exceso de demora expositiva;
  - y orientar la salida a consumo rápido en entorno de video breve.

#### `aplicacion_de_plataforma`

- `video_tiktok` → fija la modalidad concreta de publicación. Protocolariamente:
  - exigir compatibilidad con video vertical breve;
  - coordinar voz, bloques, superficie textual y recursos complementarios como parte de un flujo audiovisual único;
  - y restringir la salida a una pieza ejecutable como video TikTok y no como otro objeto audiovisual genérico.

**Regla protocolaria de construcción:**

El `marco_de_materializacion_resultante` debe usarse como **criterio de restricción codominial global**.

Su aplicación debe seguir esta secuencia:

1. fijar la clase de materialización;
2. fijar la plataforma;
3. fijar la aplicación concreta dentro de la plataforma;
4. traducir esa combinación a restricciones globales sobre:
   - duración;
   - segmentación;
   - comparecencia verbal;
   - superficie textual;
   - recursos complementarios;
   - y ritmo general;
5. verificar que ninguna capa de la manifestación contradiga ese marco.

**Plantilla replicable:**

    fijar clase_de_materializacion
    fijar plataforma
    fijar aplicacion_de_plataforma
    derivar restricciones globales de codominio
    verificar compatibilidad de toda la manifestacion con ese marco

**Interacciones relevantes:**

- `clase_de_materializacion` fija el tipo general de objeto que puede construirse;
- `plataforma` restringe el régimen atencional, la economía verbal y el entorno de recepción;
- `aplicacion_de_plataforma` concreta cómo deben realizarse bloques, voz, texto en pantalla y recursos complementarios;
- los tres campos deben leerse conjuntamente, porque el marco no se define por uno solo, sino por su combinación estable.

**Ejemplos:**

#### Ejemplo 1

- `clase_de_materializacion` → `guion_audiovisual_breve`
- `plataforma` → `tiktok`
- `aplicacion_de_plataforma` → `video_tiktok`

**Resultado protocolario esperado:**

- pieza breve;
- bloques realizables;
- apertura rápida;
- soporte verbal oralizable;
- recursos complementarios subordinados al flujo del video.

#### Ejemplo 2

Idea de base: “Pedir más palabras no garantiza mejor pensamiento.”

**Resultado simple de construcción bajo este marco:**

- **Bloque 1:** apertura rápida con frase de impacto;
- **Bloque 2:** desarrollo breve y claro;
- **Bloque 3:** cierre condensado;
- `texto_en_pantalla` breve;
- `imagen_en_pantalla` o `video_en_pantalla` solo como apoyo;
- duración global compatible con pieza breve de TikTok.

---

## 4. Capa macroestructural

### 4.1. `arquitectura_global.duracion_objetivo`

**Campos que contribuyen:**

- `duracion_objetivo`
- `grado_de_dependencia_de_recursos_complementarios`
- `funcion_dominante`
- `estado_atencional`

**Contribución por valores:**

#### `duracion_objetivo`

- `muy_breve` → construir la pieza con alta compresión global. Protocolariamente:
  - reducir expansión conceptual;
  - limitar cantidad o desarrollo de bloques;
  - y usar recursos complementarios solo si aportan rápido y sin frenar el flujo.

- `breve` → construir la pieza con equilibrio entre claridad y economía. Protocolariamente:
  - permitir desarrollo suficiente sin exceso;
  - sostener bloques distinguibles;
  - y distribuir recursos complementarios de forma controlada.

- `breve_expandido` → construir la pieza con mayor margen de despliegue. Protocolariamente:
  - habilitar más bloques o bloques más desarrollados;
  - permitir más recursos complementarios o mayor presencia de éstos;
  - y tolerar mayor espesor conceptual si el resto de campos lo permite.

#### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → la duración puede sostenerse principalmente en la verbalidad central.
- `media` → la duración debe reservar espacio para apoyos complementarios visibles o auditivos.
- `alta` → la duración debe contemplar mayor articulación entre núcleo verbal y recursos complementarios.
- `dominante` → la duración debe construirse considerando que los recursos complementarios son estructurales y no accesorios.

#### `funcion_dominante`

Restringe la duración más coherente:

- `captar_atencion`, `sintetizar` y `distribuir` favorecen duraciones más comprimidas;
- `enseñar`, `diagnosticar` o `pieza_de_profundizacion` toleran algo más de desarrollo;
- `abrir_serie` o `continuar_serie` pueden admitir duración orientada a proyección más que a clausura total.

#### `estado_atencional`

Modula cuánto tiempo puede sostenerse el recorrido:

- estados frágiles favorecen duración más comprimida por bloque;
- estados listos para profundización toleran mayor desarrollo;
- estados que requieren reenganche exigen administrar duración con puntos claros de recuperación.

**Regla protocolaria de construcción:**

Usar `duracion_objetivo` como criterio de **escala temporal global de la pieza**.

Su aplicación debe seguir esta secuencia:

1. fijar la duración declarada;
2. ajustar cuánto desarrollo total admite la pieza;
3. modular ese margen según dependencia de recursos, función dominante y estado atencional;
4. verificar que la duración final siga siendo compatible con video breve TikTok.

**Plantilla replicable:**

    si duracion_objetivo = muy_breve:
      comprimir bloques y limitar expansión

    si duracion_objetivo = breve:
      equilibrar claridad y economía

    si duracion_objetivo = breve_expandido:
      permitir mayor desarrollo controlado

**Interacciones relevantes:**

- dependencia alta o dominante de recursos puede empujar a más subdivisión interna;
- `captar_atencion` y estados atencionales frágiles tienden a favorecer duraciones más comprimidas por bloque;
- `enseñar` o `diagnosticar` pueden requerir algo más de espacio si la densidad conceptual es alta.

**Ejemplos:**

- `muy_breve` + `captar_atencion` + `atencion_fragmentada` → pieza muy comprimida, bloques cortos, pocos recursos y reenganche rápido.
- `breve` + `enseñar` + `dependencia_media` → pieza equilibrada, desarrollo suficiente, apoyos controlados.
- `breve_expandido` + `diagnosticar` + `atencion_lista_para_profundizacion` → más margen para explicar, ejemplificar y sostener recursos.

---

### 4.2. `arquitectura_global.arquitectura_macro`

**Campos que contribuyen:**

- `arquitectura_macro`
- `configuracion_narrativa`
- `regimen_de_resolucion_buscada`
- `funcion_dominante`

**Contribución por valores:**

#### `arquitectura_macro`

- `apertura_desarrollo_cierre` → construir tres grandes tramos con clausura clara.
- `apertura_desarrollo_remate` → construir cierre final más breve, compacto y terminal.
- `apertura_lista_cierre` → construir desarrollo como serie de ítems o puntos.
- `apertura_contraste_resolucion` → construir núcleo apoyado en oposición y resolución.
- `apertura_secuencia_remate` → construir desarrollo por pasos, momentos o fases y cerrar con remate breve.

#### `configuracion_narrativa`

Modula la forma de la arquitectura:

- `contrastiva` refuerza estructuras basadas en oposición;
- `acumulativa` empuja a desarrollos sumativos;
- `recapitulativa` refuerza retorno sobre lo anterior;
- `modular` permite mayor autonomía entre tramos;
- `lineal_progresiva` favorece continuidad estable;
- `abierta_controlada` flexibiliza sin romper coherencia.

#### `regimen_de_resolucion_buscada`

Modula la fuerza del componente terminal:

- `resolucion_inmediata` refuerza cierres claros;
- `resolucion_diferida` o `abierta_a_continuidad` debilitan clausura total;
- `resolucion_parcial` obliga a distinguir qué se cierra y qué se deja abierto.

#### `funcion_dominante`

Restringe la arquitectura más coherente:

- `enseñar` favorece recorridos claros;
- `persuadir` refuerza contraste o desarrollo argumentativo;
- `sintetizar` favorece remates compactos;
- `abrir_serie` y `continuar_serie` restringen cierres totalmente conclusivos;
- `cerrar_serie` favorece cierre más fuerte.

**Regla protocolaria de construcción:**

Usar `arquitectura_macro` como criterio de **forma global del recorrido**.

Su aplicación debe seguir esta secuencia:

1. fijar la arquitectura declarada;
2. modularla según la narrativa;
3. ajustar la fuerza del cierre según el régimen de resolución;
4. verificar su coherencia con la función dominante.

**Plantilla replicable:**

    fijar arquitectura_macro
    modular con configuracion_narrativa
    ajustar cierre con regimen_de_resolucion_buscada
    verificar coherencia con funcion_dominante

**Interacciones relevantes:**

- narrativa `contrastiva` refuerza `apertura_contraste_resolucion`;
- `resolucion_abierta_a_continuidad` debilita cierres totalmente conclusivos;
- `cerrar_serie` favorece cierre más fuerte.

**Ejemplos:**

- `apertura_desarrollo_cierre` + `lineal_progresiva` + `resolucion_inmediata` → recorrido clásico y clausura clara.
- `apertura_contraste_resolucion` + `contrastiva` + `persuadir` → oposición central y resolución dirigida.
- `apertura_secuencia_remate` + `operativa` + `sintetizar` → pasos claros con remate breve final.

---

### 4.3. `arquitectura_global.componentes_macroestructurales_activados`

**Descripción de los componentes posibles:**

- `apertura` → componente inicial que abre el campo de atención, introduce el problema, el tema o la tensión principal, y prepara el ingreso al núcleo de la pieza.
- `desarrollo` → componente central de despliegue, donde se expone, explica, argumenta o desarrolla el núcleo principal.
- `cierre` → componente terminal de clausura relativamente completa, que recoge el recorrido y le da una forma de finalización reconocible.
- `remate` → componente terminal breve, de impacto o condensación, más corto y más terminal que un cierre desarrollado.
- `lista` → componente nuclear organizado como serie de puntos, ítems o elementos enumerables.
- `contraste` → componente nuclear organizado alrededor de oposición, diferencia o tensión entre polos.
- `secuencia` → componente nuclear distribuido en pasos, momentos, fases o tramos progresivos.
- `resolucion` → componente terminal que responde a una tensión, oposición o problema previamente abierto.

- `apertura` puede descomponerse en:
  - `gancho`
  - `planteamiento`
  - `umbral_de_ingreso`

- `desarrollo` puede descomponerse en:
  - `despliegue`
  - `ejemplificacion`
  - `aclaracion`
  - `avance`

- `cierre` puede descomponerse en:
  - `recogida`
  - `sintesis`
  - `clausura`

- `remate` puede descomponerse en:
  - `golpe_final`
  - `formula_terminal`
  - `salida_breve`

- `lista` puede descomponerse en:
  - `criterio_de_lista`
  - `item_1`
  - `item_2`
  - `item_n`

- `contraste` puede descomponerse en:
  - `polo_a`
  - `polo_b`
  - `tension`
  - `diferenciacion`

- `secuencia` puede descomponerse en:
  - `paso_1`
  - `paso_2`
  - `paso_n`

- `resolucion` puede descomponerse en:
  - `respuesta`
  - `descompresion`
  - `salida_resolutiva`

Esto implica que `componentes_macroestructurales_activados` no solo debe indicar
qué componentes mayores aparecen, sino también **qué grado de desarrollo interno**
puede o debe tener cada uno.

**Campos que contribuyen:**

- `arquitectura_macro`
- `configuracion_narrativa`
- `regimen_de_resolucion_buscada`
- `duracion_objetivo`
- `segmentacion_interna`
- `unidad_de_segmento`
- `longitud_por_segmento`

**Contribución por valores:**

#### `arquitectura_macro`

- `apertura_desarrollo_cierre` →
  activa:
  - `apertura`
  - `desarrollo`
  - `cierre`
    Protocolariamente:
  - la `apertura` debe tener al menos ingreso y planteamiento;
  - el `desarrollo` debe funcionar como núcleo principal;
  - el `cierre` debe tener capacidad de recogida y clausura.

- `apertura_desarrollo_remate` →
  activa:
  - `apertura`
  - `desarrollo`
  - `remate`
    Protocolariamente:
  - el núcleo sigue estando en `desarrollo`;
  - el terminal ya no es un cierre amplio, sino un `remate` breve;
  - el componente final exige condensación y golpe terminal.

- `apertura_lista_cierre` →
  activa:
  - `apertura`
  - `lista`
  - `cierre`
    Protocolariamente:
  - el núcleo no es un desarrollo continuo, sino una `lista`;
  - la `lista` exige subcomponentes enumerables;
  - el `cierre` debe recoger o unificar la serie.

- `apertura_contraste_resolucion` →
  activa:
  - `apertura`
  - `contraste`
  - `resolucion`
    Protocolariamente:
  - el núcleo debe organizarse en polos contrastivos;
  - `contraste` exige subcomponentes de oposición;
  - `resolucion` responde a la tensión abierta por el contraste.

- `apertura_secuencia_remate` →
  activa:
  - `apertura`
  - `secuencia`
  - `remate`
    Protocolariamente:
  - el núcleo se organiza por pasos o momentos;
  - `secuencia` exige subcomponentes seriables;
  - `remate` cierra brevemente el recorrido.

#### `configuracion_narrativa`

- `lineal_progresiva` →
  los componentes deben comparecer como recorrido continuo;
  sus subcomponentes se encadenan con baja discontinuidad.

- `apertura_profundizacion_cierre` →
  refuerza especialmente:
  - una `apertura` más nítida,
  - un núcleo con mayor espesor,
  - y un terminal más claramente distinguible.

- `contrastiva` →
  intensifica la oposición interna de los componentes;
  incluso si la arquitectura no tiene `contraste` como núcleo, puede volver más
  contrastivos los subcomponentes del desarrollo.

- `acumulativa` →
  hace que los componentes y sus subcomponentes comparezcan por suma progresiva.

- `recapitulativa` →
  introduce subcomponentes de retorno, recuperación o relectura dentro de los
  componentes mayores.

- `modular` →
  vuelve más autónomos los componentes y también sus subcomponentes;
  reduce dependencia lineal estricta.

- `abierta_controlada` →
  permite mayor flexibilidad en la distribución interna de subcomponentes, pero
  sin romper la arquitectura global elegida.

#### `regimen_de_resolucion_buscada`

- `resolucion_inmediata` →
  fortalece el componente terminal y sus subcomponentes de clausura.

- `resolucion_progresiva` →
  reparte funciones resolutivas entre varios componentes o subcomponentes, no solo
  en el último.

- `resolucion_diferida` →
  debilita la clausura interna de la pieza y reduce el peso resolutivo del
  componente terminal actual.

- `resolucion_parcial` →
  el terminal debe resolver solo una parte; algunos subcomponentes quedan abiertos
  o proyectivos.

- `resolucion_abierta_a_continuidad` →
  mantiene componente terminal, pero su subestructura no debe clausurar del todo;
  debe dejar continuidad posible.

#### `duracion_objetivo`

- `muy_breve` →
  obliga a componentes compactos y con pocos subcomponentes.

- `breve` →
  permite componentes reconocibles con subestructura controlada.

- `breve_expandido` →
  permite componentes más desarrollados y con mayor subdivisión interna.

#### `segmentacion_interna`

No activa componentes nuevos, pero decide cuán visibles deben ser sus divisiones
internas.

- segmentación más baja → componentes más compactos;
- segmentación más alta → componentes con subtramos más visibles.

#### `unidad_de_segmento`

Decide de qué tipo serán los subcomponentes mínimos de los componentes mayores.

- unidades más breves → subcomponentes más compactos;
- unidades más desarrolladas → subcomponentes con mayor despliegue local.

#### `longitud_por_segmento`

Modula el tamaño efectivo de los subcomponentes.

- mayor longitud → subcomponentes más desarrollados;
- menor longitud → subcomponentes más condensados.

**Regla protocolaria de construcción:**

Este campo debe construirse en dos niveles:

1. identificar los **componentes macroestructurales mayores** activados;
2. decidir, para cada uno, qué **subcomponentes internos** necesita según:
   - narrativa,
   - resolución,
   - duración,
   - segmentación,
   - unidad,
   - y longitud por segmento.

**Plantilla replicable:**

    identificar arquitectura_macro
    extraer componentes mayores obligatorios
    para cada componente mayor:
      decidir si requiere subcomponentes internos
      modular esos subcomponentes con configuracion_narrativa
      ajustar su fuerza terminal con regimen_de_resolucion_buscada
      ajustar su amplitud con duracion_objetivo
      ajustar su visibilidad con segmentacion_interna
      ajustar su tamaño con unidad_de_segmento y longitud_por_segmento

**Interacciones relevantes:**

- `arquitectura_macro` decide qué componentes mayores existen;
- `configuracion_narrativa` decide cómo comparecen y qué tipo de subestructura interna conviene;
- `regimen_de_resolucion_buscada` modula sobre todo la composición del componente terminal;
- `duracion_objetivo`, `segmentacion_interna`, `unidad_de_segmento` y `longitud_por_segmento` deciden cuánta subdivisión interna es viable;
- a menor duración, menor cantidad o visibilidad de subcomponentes;
- a mayor modularidad o segmentación, mayor explicitación de subcomponentes.

**Ejemplos:**

- `apertura_contraste_resolucion` + `contrastiva` + `breve` →
  activa:
  - `apertura`
  - `contraste`
  - `resolucion`
    y permite:
  - `apertura = gancho + planteamiento`
  - `contraste = polo_a + polo_b + tension`
  - `resolucion = respuesta_breve`

- `apertura_lista_cierre` + `acumulativa` + `breve_expandido` →
  activa:
  - `apertura`
  - `lista`
  - `cierre`
    y permite:
  - `apertura = ingreso + criterio_de_lista`
  - `lista = item_1 + item_2 + item_3`
  - `cierre = recogida + condensacion`

- `apertura_secuencia_remate` + `lineal_progresiva` + `muy_breve` →
  activa:
  - `apertura`
  - `secuencia`
  - `remate`
    y exige:
  - `apertura` compacta
  - `secuencia` con pocos pasos visibles
  - `remate` muy condensado

---

### 4.4. `arquitectura_global.segmentacion_interna`

**Campos que contribuyen:**

- `duracion_objetivo`
- `arquitectura_macro`
- `configuracion_narrativa`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

#### `duracion_objetivo`

- `muy_breve` → favorecer menos segmentos o segmentos muy compactos.
- `breve` → permitir segmentación equilibrada.
- `breve_expandido` → permitir más segmentos o segmentación más visible.

#### `arquitectura_macro`

- arquitecturas con `lista` o `secuencia` favorecen segmentación funcional mayor;
- arquitecturas más lineales pueden sostener segmentación más simple.

#### `configuracion_narrativa`

- `modular` → refuerza segmentación marcada;
- `lineal_progresiva` → favorece continuidad más trabada;
- `recapitulativa` puede introducir segmentos de recuperación;
- `contrastiva` favorece cortes que separen polos u oposiciones.

#### `regimen_de_distribucion_de_recursos_complementarios`

- distribución concentrada → menos segmentación motivada por recursos;
- distribución distribuida → más segmentos locales para alojar recursos;
- distribución variable por bloque → segmentación ajustada a heterogeneidad de apoyos.

**Regla protocolaria de construcción:**

La `segmentacion_interna` debe derivarse controladamente.

Su aplicación debe seguir esta secuencia:

1. fijar el margen de segmentación que permite la duración;
2. verificar qué arquitectura exige más o menos segmentos;
3. modular con la narrativa;
4. ajustar según la distribución de recursos complementarios.

**Plantilla replicable:**

    duracion mas breve -> segmentos mas compactos
    lista o secuencia -> mayor segmentacion funcional
    narrativa modular -> segmentacion mas marcada
    recursos distribuidos -> mas segmentacion local

**Interacciones relevantes:**

- duraciones más breves → menos segmentos o segmentos más compactos;
- arquitecturas con `lista` o `secuencia` → mayor segmentación funcional;
- narrativa modular → segmentación más marcada;
- distribución más distribuida de recursos → mayor segmentación local.

**Ejemplos:**

- `muy_breve` + `apertura_desarrollo_cierre` + recursos concentrados → 3 segmentos compactos.
- `breve` + `apertura_lista_cierre` + recursos distribuidos → segmentación más visible con ítems diferenciados.
- `breve_expandido` + `modular` + distribución variable → más bloques o segmentos heterogéneos.

---

### 4.5. `arquitectura_global.unidad_de_segmento`

**Campos que contribuyen:**

- `arquitectura_macro`
- `configuracion_discursiva`
- `modo_de_comparecencia_verbal`

**Contribución por valores:**

#### `arquitectura_macro`

- `apertura_desarrollo_cierre` → favorece unidades continuas de desarrollo breve o medio, aptas para introducir, desplegar y cerrar sin fragmentación excesiva.
- `apertura_desarrollo_remate` → favorece unidades relativamente continuas en apertura y desarrollo, pero exige una unidad terminal más corta y concentrada para el remate.
- `apertura_lista_cierre` → favorece unidades enumerables, ítems distinguibles o segmentos seriales fáciles de separar.
- `apertura_contraste_resolucion` → favorece unidades oposicionales, comparativas o de tensión entre dos polos.
- `apertura_secuencia_remate` → favorece unidades de paso, momento o fase, con progresión visible entre una y otra.

#### `configuracion_discursiva`

- `definicional` → favorece unidades compactas centradas en delimitar, nombrar o precisar.
- `explicativa` → favorece unidades algo más desarrolladas, capaces de aclarar, expandir o conectar causas y efectos.
- `argumentativa` → favorece unidades que contengan una razón, un apoyo o una mini-tesis local.
- `operativa` → favorece unidades aplicativas, instructivas o orientadas a uso.
- `sintetizadora` → favorece unidades muy compactas, de condensación alta.
- `captativa` → favorece unidades de impacto rápido, especialmente al inicio.
- `hibrida_controlada` → permite combinar tipos de unidad, pero exige jerarquía clara entre ellas.

#### `modo_de_comparecencia_verbal`

- `oral_directo` → favorece segmentos breves, decibles y de avance rápido.
- `oral_guiado` → favorece segmentos algo más pautados, con articulación verbal más conducida.
- `oral_escenico` → favorece unidades ligadas a acción visible, gesto, demostración o situación.
- `oral_mixto` → permite combinar tipos de unidad, pero con control y consistencia entre tramos.

**Regla protocolaria de construcción:**

La `unidad_de_segmento` debe derivarse como la **unidad mínima dominante** más coherente con:

1. la arquitectura global del recorrido;
2. el régimen discursivo principal;
3. y la forma de comparecencia verbal.

Su construcción debe seguir esta secuencia:

1. identificar qué tipo de núcleo exige `arquitectura_macro`:
   - continuo,
   - enumerable,
   - oposicional,
   - o secuencial;
2. modular esa base con `configuracion_discursiva`;
3. ajustar la decibilidad o escenicidad con `modo_de_comparecencia_verbal`;
4. fijar una unidad dominante que pueda repetirse sin romper coherencia.

**Plantilla replicable:**

    si arquitectura_macro favorece lista:
      usar unidad enumerable

    si arquitectura_macro favorece contraste:
      usar unidad oposicional

    si arquitectura_macro favorece secuencia:
      usar unidad de paso o momento

    si configuracion_discursiva = definicional o sintetizadora:
      compactar la unidad

    si configuracion_discursiva = explicativa o argumentativa:
      desarrollar un poco más la unidad

    si modo_de_comparecencia_verbal = oral_directo:
      hacer la unidad breve y decible

    si modo_de_comparecencia_verbal = oral_escenico:
      hacer la unidad compatible con acción visible

**Interacciones relevantes:**

- arquitecturas de lista favorecen unidades enumerables;
- arquitecturas contrastivas favorecen unidades oposicionales;
- arquitecturas secuenciales favorecen unidades de paso;
- discursividad definicional o sintetizadora favorece unidades más compactas;
- discursividad explicativa o argumentativa favorece unidades algo más desarrolladas;
- oralidad más directa favorece segmentos breves y decibles;
- oralidad escénica favorece segmentos vinculados a acción visible.

**Ejemplos:**

- `apertura_lista_cierre` + `sintetizadora` + `oral_directo` → unidades breves enumerables.
- `apertura_contraste_resolucion` + `argumentativa` + `oral_guiado` → unidades oposicionales con razones claras.
- `apertura_secuencia_remate` + `operativa` + `oral_escenico` → unidades de paso con acción visible.
- `apertura_desarrollo_cierre` + `explicativa` + `oral_directo` → unidades continuas breves de aclaración progresiva.

---

### 4.6. `arquitectura_global.longitud_por_segmento`

**Campos que contribuyen:**

- `duracion_objetivo`
- `compresion`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `funcion_dominante`

**Contribución por valores:**

#### `duracion_objetivo`

- duración más breve → segmentos más cortos;
- duración más expandida → segmentos con mayor margen de desarrollo.

#### `compresion`

- `baja` → permitir segmentos más desplegados;
- `media` → equilibrio;
- `alta` → exigir segmentos más condensados.

#### `densidad_terminologica`

- `baja` → no exige segmentos largos para procesar términos;
- `media` → equilibrio;
- `alta` → puede exigir algo más de desarrollo si la función lo justifica.

#### `grado_de_abstraccion`

- `concreto` → puede resolverse con segmentos más breves;
- `intermedio` → equilibrio;
- `abstracto` → puede requerir más desarrollo verbal si la función dominante lo permite.

#### `funcion_dominante`

- `sintetizar` y `captar_atencion` favorecen segmentos menores;
- `enseñar` y `diagnosticar` pueden requerir segmentos algo más desarrollados;
- `distribuir` favorece segmentos transmisibles y no demasiado largos.

**Regla protocolaria de construcción:**

La `longitud_por_segmento` debe derivarse regulando el espacio verbal disponible por unidad local.

Su aplicación debe seguir esta secuencia:

1. fijar el margen general de duración;
2. ajustar por compresión;
3. verificar densidad terminológica y abstracción;
4. modular finalmente según la función dominante.

**Plantilla replicable:**

    menor duracion + mayor compresion -> segmentos mas cortos
    mayor densidad + abstraccion + enseñar/diagnosticar -> segmentos algo mas desarrollados
    sintetizar o captar_atencion -> segmentos menores

**Interacciones relevantes:**

- más compresión y menor duración → segmentos más cortos;
- mayor densidad y abstracción pueden exigir segmentos algo más desarrollados si la función es enseñar o diagnosticar;
- funciones como sintetizar o captar atención favorecen longitud menor por segmento.

**Ejemplos:**

- `muy_breve` + `alta compresion` + `captar_atencion` → segmentos muy cortos.
- `breve` + `media compresion` + `densidad media` → segmentos equilibrados.
- `breve_expandido` + `abstraccion alta` + `enseñar` → segmentos algo más desarrollados para sostener claridad.

---

### 4.7. `arquitectura_global.cantidad_total_de_bloques`

**Campos que contribuyen:**

- `duracion_objetivo`
- `arquitectura_macro`
- `alcance_de_realizacion`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

#### `duracion_objetivo`

- `muy_breve` → favorece menor cantidad total de bloques. Protocolariamente:
  - restringe expansión del recorrido;
  - reduce margen para bloques intermedios adicionales;
  - y obliga a que los bloques cumplan funciones más concentradas.

- `breve` → permite una cantidad moderada de bloques. Protocolariamente:
  - habilita equilibrio entre compresión y diferenciación funcional;
  - permite distinguir apertura, núcleo y cierre sin expansión excesiva.

- `breve_expandido` → permite mayor cantidad total de bloques. Protocolariamente:
  - habilita desarrollo más desplegado;
  - permite introducir bloques funcionales adicionales;
  - y tolera mayor subdivisión interna del recorrido.

#### `arquitectura_macro`

- `apertura_desarrollo_cierre` → favorece una cantidad más contenida de bloques, porque la arquitectura ya organiza el recorrido en tres grandes funciones.
- `apertura_desarrollo_remate` → favorece cantidad contenida, pero puede introducir un bloque terminal más breve y separado para el remate.
- `apertura_lista_cierre` → favorece más bloques funcionales, porque la `lista` puede distribuirse en varios ítems diferenciados.
- `apertura_contraste_resolucion` → favorece una cantidad intermedia, con posibilidad de separar polos contrastivos en bloques distintos.
- `apertura_secuencia_remate` → favorece más bloques cuando la `secuencia` necesita varios pasos o momentos visibles.

#### `alcance_de_realizacion`

- `pieza_unica` → favorece cantidad de bloques ajustada a la autosuficiencia de una sola pieza.
- `apertura_de_serie` → puede exigir un bloque proyectivo adicional o un terminal menos clausurante.
- `continuidad_de_serie` → puede exigir bloque de enlace con piezas previas o siguientes.
- `cierre_de_serie` → puede exigir un bloque terminal de síntesis o clausura reforzada.
- `pieza_de_transicion` → puede introducir un bloque puente adicional.
- `pieza_de_prueba` → permite mayor libertad en la cantidad, siempre que no rompa legibilidad.
- `pieza_de_validacion` → puede añadir bloque de contraste, confirmación o cierre confirmatorio.
- `pieza_de_acceso` → favorece cantidades más contenidas y legibles.
- `pieza_de_profundizacion` → tolera mayor cantidad de bloques si el desarrollo lo necesita.

#### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado` → favorece menos bloques, porque los recursos se agrupan en zonas puntuales.
- `distribuido` → puede aumentar la cantidad de bloques o microtramos, porque reparte apoyos a lo largo del recorrido.
- `variable_por_bloque` → favorece cantidad más flexible, ya que cada tramo puede requerir distinto grado de soporte complementario.
- `estructural` → puede aumentar la cantidad o subdivisión visible, porque los recursos pasan a formar parte de la organización del recorrido.

**Regla protocolaria de construcción:**

La `cantidad_total_de_bloques` debe derivarse como una **decisión de escala compositiva global**.

Su aplicación debe seguir esta secuencia:

1. fijar el margen general según `duracion_objetivo`;
2. identificar cuántas funciones macro exige `arquitectura_macro`;
3. ajustar si `alcance_de_realizacion` exige bloques de enlace, proyección, síntesis o transición;
4. corregir la cantidad según el modo de distribución de recursos complementarios;
5. verificar que la cantidad final siga siendo legible y compatible con video breve TikTok.

**Plantilla replicable:**

    si duracion_objetivo = muy_breve:
      reducir cantidad de bloques

    si arquitectura_macro = lista o secuencia:
      permitir más bloques funcionales

    si alcance_de_realizacion exige proyeccion, enlace o cierre reforzado:
      considerar bloque adicional

    si recursos_complementarios = distribuidos o estructurales:
      permitir mayor subdivisión

**Interacciones relevantes:**

- duraciones más breves y arquitecturas lineales favorecen menos bloques;
- arquitecturas de lista o secuencia favorecen más bloques funcionales;
- aperturas o continuidades de serie pueden exigir un bloque proyectivo adicional;
- distribución distribuida o variable de recursos puede aumentar cantidad de bloques o microtramos;
- la cantidad final no debe fijarse solo por suma mecánica, sino por compatibilidad global con la claridad y el ritmo de la pieza.

**Ejemplos:**

- `muy_breve` + `apertura_desarrollo_cierre` + `pieza_unica` + `concentrado` → cantidad reducida de bloques, normalmente 3 o equivalente funcional compacto.
- `breve` + `apertura_lista_cierre` + `pieza_unica` + `distribuido` → cantidad intermedia o alta, porque la lista puede descomponerse en varios bloques.
- `breve_expandido` + `apertura_secuencia_remate` + `pieza_de_profundizacion` + `estructural` → cantidad mayor de bloques, con secuencia visible y apoyos distribuidos.
- `breve` + `apertura_contraste_resolucion` + `apertura_de_serie` + `variable_por_bloque` → cantidad intermedia con posible bloque proyectivo adicional al final.

---

### 4.8. `recursos_complementarios_globales.*`

**Campos que contribuyen:**

- `uso_de_texto_en_pantalla`
- `uso_de_imagen_generada`
- `uso_de_video_generado`
- `uso_de_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`

**Contribución por valores:**

#### `uso_de_texto_en_pantalla`

- `sin_texto_en_pantalla` → desactiva el texto en pantalla como recurso global; solo se admite en casos excepcionales y no como soporte regular.
- `texto_minimo_de_refuerzo` → activa pocos puntos de texto, breves y funcionales, principalmente para reforzar o fijar algo dicho verbalmente.
- `texto_distribuido_de_refuerzo` → reparte texto en varios bloques, pero sin volverlo soporte estructural principal.
- `texto_estructural` → el texto en pantalla pasa a sostener parte del recorrido; algunos bloques dependen de él para fijar progresión, conceptos o remates.
- `texto_variable_segun_bloque` → no impone un régimen uniforme; cada bloque decide si usa o no texto y con qué intensidad.

#### `uso_de_imagen_generada`

- `sin_imagen_generada` → desactiva la imagen generada como recurso global.
- `imagen_puntual_de_refuerzo` → activa una o pocas imágenes estratégicas para reforzar bloques específicos.
- `imagen_distribuida` → reparte imágenes en varios bloques, como apoyo frecuente pero no necesariamente estructural.
- `imagen_estructural` → la imagen pasa a formar parte del esqueleto de la pieza; el recorrido depende en parte de sus apariciones.
- `imagen_variable_segun_bloque` → la presencia de imagen se resuelve localmente, según necesidad de cada tramo.

#### `uso_de_video_generado`

- `sin_video_generado` → desactiva clips o apoyos de video generados.
- `video_puntual_de_refuerzo` → activa uno o pocos clips breves para reforzar momentos concretos.
- `video_distribuido` → reparte clips en varios bloques.
- `video_estructural` → el video generado pasa a sostener parte de la progresión de la pieza.
- `video_variable_segun_bloque` → la decisión se toma localmente, bloque por bloque.

#### `uso_de_audio_generado`

- `sin_audio_generado` → desactiva audio adicional generado como recurso global.
- `audio_puntual_de_refuerzo` → activa sonidos o apoyos puntuales en momentos específicos.
- `audio_distribuido` → reparte apoyos auditivos a lo largo de varios bloques.
- `audio_estructural` → el audio acompaña o sostiene la estructura global de la pieza.
- `audio_variable_segun_bloque` → la presencia de audio generado se decide de forma local.

#### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → los recursos complementarios deben aclarar, remarcar o apoyar el núcleo verbal.
- `expansion` → los recursos complementarios pueden añadir contenido o ampliar el campo del bloque.
- `contraste` → los recursos deben marcar oposición, diferencia o tensión.
- `ambientacion` → los recursos deben construir clima, tono o marco sensible.
- `ritmizacion` → los recursos deben ayudar a organizar el tiempo del recorrido, marcar tramos o transiciones.
- `anclaje_conceptual` → los recursos deben volver visible una idea, relación o concepto clave.
- `mixta_controlada` → varias funciones pueden coexistir, pero con jerarquía explícita y sin confusión entre ellas.

#### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → los recursos son accesorios; la pieza debe sostenerse sin ellos.
- `media` → los recursos apoyan de forma importante, pero no cargan el centro estructural.
- `alta` → la pieza se apoya fuertemente en ellos; quitar recursos debilita mucho la construcción.
- `dominante` → la pieza depende estructuralmente de esos recursos; sin ellos se rompe la forma prevista.

#### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → los recursos se cargan sobre todo al inicio, para abrir atención, situar o fijar tono.
- `concentrado_en_nucleo` → los recursos se cargan principalmente en el desarrollo, como apoyo del núcleo.
- `concentrado_en_cierre` → los recursos se reservan sobre todo para cierre, remate o condensación final.
- `distribuido_regularmente` → los recursos se reparten de forma relativamente estable entre bloques.
- `variable_segun_bloque` → la distribución no sigue patrón fijo; depende de la función local de cada bloque.

#### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → los recursos deben describir o representar directamente el contenido verbal.
- `conceptual` → los recursos deben representar estructuras, relaciones o ideas, no solo objetos literales.
- `metaforico` → los recursos deben operar por analogía, imagen simbólica o traducción figurada.
- `atmosferico` → los recursos deben priorizar clima, sensación o tono por encima de representación directa.
- `mixto_controlado` → varios criterios pueden combinarse, pero con consistencia explícita.

**Regla protocolaria de construcción:**

Los `recursos_complementarios_globales` deben usarse como **sistema de regulación del régimen global de apoyos no nucleares**.

Su aplicación debe seguir esta secuencia:

1. fijar qué tipos de recursos están activos:
   - texto,
   - imagen,
   - video,
   - audio;
2. decidir la función predominante de esos recursos;
3. fijar cuánto depende la pieza de ellos;
4. decidir cómo se distribuyen globalmente;
5. fijar el criterio de coherencia que regirá su diseño;
6. verificar que esa combinación sea compatible con la duración, la arquitectura macro, la comparecencia y la claridad general de la pieza.

**Plantilla replicable:**

    activar o desactivar texto, imagen, video y audio
    fijar funcion_predominante_de_los_recursos_complementarios
    fijar grado_de_dependencia_de_recursos_complementarios
    fijar regimen_de_distribucion_de_recursos_complementarios
    fijar criterio_de_coherencia_de_recursos_complementarios
    verificar compatibilidad con la pieza completa

**Interacciones relevantes:**

- los usos de texto, imagen, video y audio no deben activarse todos con igual peso sin justificación;
- `grado_de_dependencia_de_recursos_complementarios` modula cuánto puede descansar la pieza en ellos;
- `funcion_predominante_de_los_recursos_complementarios` decide para qué existen esos recursos, no solo si están presentes;
- `regimen_de_distribucion_de_recursos_complementarios` decide dónde pesan más;
- `criterio_de_coherencia_de_recursos_complementarios` decide cómo deben diseñarse para no romper unidad;
- esta sección debe leerse junto con:
  - `duracion_objetivo`,
  - `cantidad_total_de_bloques`,
  - `modalidad_de_guion`,
  - `modo_de_comparecencia_verbal`,
  - y `grado_de_dependencia_de_la_performance_visible`.

**Ejemplos:**

#### Ejemplo 1

- `uso_de_texto_en_pantalla` → `texto_minimo_de_refuerzo`
- `uso_de_imagen_generada` → `sin_imagen_generada`
- `uso_de_video_generado` → `sin_video_generado`
- `uso_de_audio_generado` → `sin_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios` → `refuerzo`
- `grado_de_dependencia_de_recursos_complementarios` → `baja`
- `regimen_de_distribucion_de_recursos_complementarios` → `concentrado_en_cierre`
- `criterio_de_coherencia_de_recursos_complementarios` → `literal`

**Resultado protocolario esperado:**

- pieza sostenida principalmente por la voz;
- pocos apoyos complementarios;
- texto en pantalla breve, sobre todo al final;
- recursos diseñados para reforzar de forma directa lo verbal.

#### Ejemplo 2

- `uso_de_texto_en_pantalla` → `texto_distribuido_de_refuerzo`
- `uso_de_imagen_generada` → `imagen_distribuida`
- `uso_de_video_generado` → `sin_video_generado`
- `uso_de_audio_generado` → `audio_puntual_de_refuerzo`
- `funcion_predominante_de_los_recursos_complementarios` → `anclaje_conceptual`
- `grado_de_dependencia_de_recursos_complementarios` → `media`
- `regimen_de_distribucion_de_recursos_complementarios` → `distribuido_regularmente`
- `criterio_de_coherencia_de_recursos_complementarios` → `conceptual`

**Resultado protocolario esperado:**

- la pieza sigue sosteniéndose verbalmente, pero los recursos ayudan mucho a fijar ideas;
- texto e imagen aparecen en varios bloques;
- el audio entra de forma puntual;
- los recursos no describen solo objetos, sino relaciones o conceptos.

#### Ejemplo 3

- `uso_de_texto_en_pantalla` → `texto_estructural`
- `uso_de_imagen_generada` → `imagen_estructural`
- `uso_de_video_generado` → `video_distribuido`
- `uso_de_audio_generado` → `audio_estructural`
- `funcion_predominante_de_los_recursos_complementarios` → `mixta_controlada`
- `grado_de_dependencia_de_recursos_complementarios` → `dominante`
- `regimen_de_distribucion_de_recursos_complementarios` → `variable_segun_bloque`
- `criterio_de_coherencia_de_recursos_complementarios` → `mixto_controlado`

**Resultado protocolario esperado:**

- la pieza depende fuertemente de la articulación entre voz y recursos;
- texto, imagen, video y audio participan en la estructura global;
- la distribución cambia según la función de cada bloque;
- la mezcla de criterios exige control fuerte para no romper coherencia.

---

## 5. Capa de bloques

### 5.1. `bloque_id`

**Campos que contribuyen:**

- `arquitectura_macro`
- `alcance_de_realizacion`
- `cantidad_total_de_bloques`

**Contribución por valores:**

#### `arquitectura_macro`

No fija por sí sola el identificador completo, pero sí define el **repertorio de posiciones funcionales posibles** del bloque.

- `apertura_desarrollo_cierre` → el `bloque_id` debe poder identificar bloques como `apertura`, `desarrollo`, `cierre`.
- `apertura_desarrollo_remate` → el `bloque_id` debe poder identificar `apertura`, `desarrollo`, `remate`.
- `apertura_lista_cierre` → el `bloque_id` debe poder identificar `apertura`, uno o varios bloques de `lista`, y `cierre`.
- `apertura_contraste_resolucion` → el `bloque_id` debe poder identificar `apertura`, `contraste`, `resolucion`.
- `apertura_secuencia_remate` → el `bloque_id` debe poder identificar `apertura`, uno o varios bloques de `secuencia`, y `remate`.

#### `alcance_de_realizacion`

No define la posición interna del bloque, pero sí añade el **marco de lectura global** del identificador.

- `pieza_unica` → los bloques deben leerse como parte de una pieza autosuficiente.
- `apertura_de_serie` → los bloques deben quedar identificados como parte de una pieza de apertura.
- `continuidad_de_serie` → los bloques deben quedar identificados como parte de una pieza de continuidad.
- `cierre_de_serie` → los bloques deben quedar identificados como parte de una pieza de cierre.
- `pieza_de_transicion` → los bloques deben quedar identificados como parte de una pieza puente.
- `pieza_de_prueba` → los bloques deben quedar identificados como parte de una pieza de prueba.
- `pieza_de_validacion` → los bloques deben quedar identificados como parte de una pieza de validación.
- `pieza_de_acceso` → los bloques deben quedar identificados como parte de una pieza de acceso.
- `pieza_de_profundizacion` → los bloques deben quedar identificados como parte de una pieza de profundización.

#### `cantidad_total_de_bloques`

Determina el **rango ordinal posible** de los bloques.

- cantidades menores → repertorio corto de identificadores;
- cantidades mayores → repertorio más amplio y posible repetición de tipos funcionales como `lista_1`, `lista_2` o `secuencia_1`, `secuencia_2`.

**Regla protocolaria de construcción:**

El `bloque_id` debe construirse como un **identificador técnico local**, no como una etiqueta libre.

Debe derivarse siempre combinando:

1. el marco global dado por `alcance_de_realizacion`;
2. la posición funcional permitida por `arquitectura_macro`;
3. y el índice local permitido por `cantidad_total_de_bloques`.

**Plantilla replicable:**

    <alcance_de_realizacion>__<tipo_funcional_de_bloque>__b<n>

**Ejemplos:**

- `pieza_unica` + `apertura_desarrollo_cierre` + 3 bloques →
  - `pieza_unica__apertura__b1`
  - `pieza_unica__desarrollo__b2`
  - `pieza_unica__cierre__b3`

- `apertura_de_serie` + `apertura_lista_cierre` + 4 bloques →
  - `apertura_de_serie__apertura__b1`
  - `apertura_de_serie__lista__b2`
  - `apertura_de_serie__lista__b3`
  - `apertura_de_serie__cierre__b4`

- `pieza_de_profundizacion` + `apertura_secuencia_remate` + 5 bloques →
  - `pieza_de_profundizacion__apertura__b1`
  - `pieza_de_profundizacion__secuencia__b2`
  - `pieza_de_profundizacion__secuencia__b3`
  - `pieza_de_profundizacion__secuencia__b4`
  - `pieza_de_profundizacion__remate__b5`

**Interacciones relevantes:**

- `arquitectura_macro` define qué nombres funcionales de bloque son admisibles;
- `alcance_de_realizacion` da el marco global del identificador;
- `cantidad_total_de_bloques` restringe cuántos identificadores locales pueden existir;
- si hay repetición de un mismo tipo funcional, el índice local es obligatorio para distinguir bloques.

---

### 5.2. `tipo_de_bloque`

**Corrección de enfoque:**
`tipo_de_bloque` no debe pensarse solo como una etiqueta gruesa del tipo:

- `apertura`
- `desarrollo`
- `cierre`
- `remate`
- `lista`
- `contraste`
- `secuencia`
- `resolucion`

También puede designar una **instanciación local más fina** de un componente mayor, cuando la arquitectura y la segmentación hagan visible esa subdivisión.

Por tanto, el `tipo_de_bloque` debe poder resolverse en dos niveles:

1. **tipo mayor de bloque**
   - `apertura`
   - `desarrollo`
   - `cierre`
   - `remate`
   - `lista`
   - `contraste`
   - `secuencia`
   - `resolucion`

2. **tipo derivado o subcomponente visible**
   - `gancho`  
     Subcomponente inicial cuya función es capturar atención de forma inmediata.  
     Debe abrir el campo con fuerza, curiosidad, tensión o impacto reconocible.

   - `planteamiento`  
     Subcomponente que explicita el tema, problema, pregunta o eje que la pieza va a trabajar.  
     Ordena la entrada después del gancho o como apertura principal si no hay gancho separado.

   - `umbral_de_ingreso`  
     Subcomponente de transición entre la apertura y el núcleo.  
     Su función es hacer que el receptor entre efectivamente al recorrido principal sin salto brusco.

   - `despliegue`  
     Subcomponente donde el núcleo empieza a desarrollarse de manera sostenida.  
     Es el tramo de exposición principal del contenido.

   - `ejemplificacion`  
     Subcomponente que introduce casos, escenas, muestras o instancias concretas para volver más inteligible el contenido.

   - `aclaracion`  
     Subcomponente cuya función es despejar ambigüedad, precisar sentido o hacer más comprensible una parte del desarrollo.

   - `avance`  
     Subcomponente que hace progresar el recorrido.  
     No solo repite o explica, sino que mueve la pieza hacia un nuevo nivel, tramo o punto.

   - `recogida`  
     Subcomponente que retoma lo desarrollado y lo vuelve a concentrar.  
     Funciona como recuperación del trayecto antes del cierre final.

   - `sintesis`  
     Subcomponente que condensa el núcleo del recorrido en una formulación más compacta.  
     Resume sin necesariamente clausurar del todo.

   - `clausura`  
     Subcomponente terminal que cierra de forma más completa y reconocible.  
     Da sensación clara de finalización estructural.

   - `golpe_final`  
     Subcomponente terminal de impacto.  
     Busca dejar una impresión fuerte, rápida y marcada.

   - `formula_terminal`  
     Subcomponente final formulado de manera condensada y recordable.  
     Suele funcionar como frase de cierre, consigna o idea fijadora.

   - `salida_breve`  
     Subcomponente terminal mínimo, de baja expansión.  
     Cierra sin desarrollo amplio y permite terminar con rapidez.

   - `criterio_de_lista`  
     Subcomponente que explicita bajo qué criterio se enumeran los elementos.  
     Ordena la serie antes de los ítems o al inicio del tramo listal.

   - `item`  
     Subcomponente unitario de una lista.  
     Cada item introduce un punto, elemento o parte distinguible dentro de la serie.

   - `polo_a`  
     Primer término de la oposición estructural.  
     Introduce una de las dos posiciones, estados o modos que serán contrastados.

   - `polo_b`  
     Segundo término de la oposición estructural.  
     Completa el par contrastivo frente a `polo_a`.

   - `tension`  
     Subcomponente que hace visible el conflicto, diferencia o fricción entre polos.  
     No solo muestra dos lados, sino la relación conflictiva entre ellos.

   - `diferenciacion`  
     Subcomponente que precisa en qué consiste la diferencia entre polos.  
     Ordena la oposición y evita que el contraste quede borroso.

   - `paso`  
     Subcomponente unitario de una secuencia.  
     Representa una fase, momento o etapa dentro de un recorrido progresivo.

   - `respuesta`  
     Subcomponente que responde a la pregunta, tensión o problema abierto antes.  
     Es el núcleo resolutivo más directo.

   - `descompresion`  
     Subcomponente que baja la tensión después del punto resolutivo.  
     Ayuda a salir del conflicto o de la intensidad acumulada.

   - `salida_resolutiva`  
     Subcomponente terminal que deja la resolución en una forma ya estabilizada.  
     No solo responde, sino que permite salir del recorrido con sensación de resolución suficiente.

**Campos que contribuyen:**

- `arquitectura_macro`
- `configuracion_narrativa`
- `regimen_de_resolucion_buscada`
- `duracion_objetivo`
- `segmentacion_interna`
- `unidad_de_segmento`
- `longitud_por_segmento`

**Contribución por valores:**

#### `arquitectura_macro`

Define el **repertorio mayor de tipos de bloque admisibles** y fija cuál es la
función estructural gruesa que cada bloque puede ocupar dentro de la pieza.

- `apertura_desarrollo_cierre` → el bloque debe tipificarse principalmente como:
  - `apertura`, si introduce el tema, el problema o el ingreso al recorrido;
  - `desarrollo`, si despliega el núcleo;
  - `cierre`, si recoge y clausura el recorrido.

- `apertura_desarrollo_remate` → el bloque debe tipificarse principalmente como:
  - `apertura`, si abre el campo;
  - `desarrollo`, si sostiene el núcleo;
  - `remate`, si concentra el golpe final en un tramo breve.

- `apertura_lista_cierre` → el bloque debe tipificarse principalmente como:
  - `apertura`, si instala el criterio de la serie;
  - `lista`, si desarrolla el núcleo en ítems;
  - `cierre`, si recoge, condensa o unifica la serie.

- `apertura_contraste_resolucion` → el bloque debe tipificarse principalmente como:
  - `apertura`, si instala la tensión o problema;
  - `contraste`, si organiza la oposición;
  - `resolucion`, si responde a la tensión abierta.

- `apertura_secuencia_remate` → el bloque debe tipificarse principalmente como:
  - `apertura`, si introduce el punto de partida;
  - `secuencia`, si distribuye el núcleo por pasos o momentos;
  - `remate`, si cierra con fórmula breve y terminal.

#### `configuracion_narrativa`

Decide si el `tipo_de_bloque` debe permanecer en el nivel del **componente mayor**
o si conviene explicitar un **subcomponente visible**.

- `lineal_progresiva` → favorece tipos de bloque más continuos, menos subdivididos y con menor ruptura interna.
- `apertura_profundizacion_cierre` → favorece una tipificación más nítida de apertura, núcleo desarrollado y terminal claramente reconocible.
- `contrastiva` → favorece subtipos como:
  - `polo_a`
  - `polo_b`
  - `tension`
  - `diferenciacion`
    especialmente cuando la oposición es estructuralmente visible.
- `acumulativa` → favorece subtipos repetibles como:
  - `item`
  - `avance`
  - `paso`
    cuando la progresión depende de suma o adición.
- `recapitulativa` → favorece subtipos como:
  - `recogida`
  - `sintesis`
  - `aclaracion`
    cuando el recorrido necesita recuperación de lo ya dicho.
- `modular` → favorece bloques más autónomos y, por tanto, subtipos más localmente distinguibles.
- `abierta_controlada` → permite mayor flexibilidad en la tipificación, pero exige que la elección siga siendo compatible con la arquitectura macro dominante.

#### `regimen_de_resolucion_buscada`

Modula principalmente la **tipificación del tramo terminal** y, en algunos casos,
de bloques intermedios con función resolutiva parcial.

- `resolucion_inmediata` → favorece tipos terminales fuertes como:
  - `cierre`
  - `clausura`
  - `resolucion`
  - `salida_resolutiva`

- `resolucion_progresiva` → favorece que la resolución se distribuya en varios tramos, haciendo visibles subtipos como:
  - `avance`
  - `aclaracion`
  - `respuesta`
  - `recogida`

- `resolucion_diferida` → debilita la presencia de tipos plenamente clausurantes y favorece terminales no conclusivos o proyectivos.

- `resolucion_parcial` → favorece tipos terminales o semiterminales como:
  - `respuesta`
  - `sintesis`
  - `remate`
    cuando solo una parte del recorrido debe cerrarse.

- `resolucion_abierta_a_continuidad` → favorece tipos terminales como:
  - `remate`
  - `formula_terminal`
  - `salida_breve`
  - `descompresion`
    cuando el final debe dejar continuidad posible.

#### `duracion_objetivo`

Decide cuánta **granularidad tipológica visible** puede soportar la pieza.

- `muy_breve` → favorece tipos mayores y pocas subdivisiones visibles.
- `breve` → permite algunos subtipos claramente distinguibles.
- `breve_expandido` → permite mayor detalle tipológico y más bloques-subcomponente.

#### `segmentacion_interna`

Decide cuánta subdivisión efectiva puede comparecer como bloque autónomo.

- segmentación baja → favorece que el `tipo_de_bloque` permanezca en nivel mayor.
- segmentación media → permite mezcla entre tipos mayores y algunos subtipos visibles.
- segmentación alta → favorece que subcomponentes como `gancho`, `item`, `paso`, `respuesta` o `sintesis` aparezcan como tipos de bloque autónomos.

#### `unidad_de_segmento`

Decide qué clases de subcomponentes son viables como bloques.

- unidades compactas → favorecen tipos breves como:
  - `gancho`
  - `item`
  - `golpe_final`
  - `formula_terminal`

- unidades más desarrolladas → favorecen tipos como:
  - `despliegue`
  - `aclaracion`
  - `diferenciacion`
  - `respuesta`

#### `longitud_por_segmento`

Modula el tamaño efectivo del tipo de bloque.

- longitud menor → favorece tipos compactos y terminales breves.
- longitud mayor → permite tipos más desarrollados o con mayor densidad interna.

**Regla protocolaria de construcción:**

El `tipo_de_bloque` debe construirse como una **clasificación funcional visible**
del bloque dentro de la arquitectura global.

Su aplicación debe seguir esta secuencia:

1. identificar el componente mayor exigido por `arquitectura_macro`;
2. verificar si la `configuracion_narrativa` obliga a mantener ese nivel o a descender a un subtipo visible;
3. verificar si `regimen_de_resolucion_buscada` modifica la tipificación del tramo terminal;
4. comprobar si `duracion_objetivo`, `segmentacion_interna`, `unidad_de_segmento` y `longitud_por_segmento` permiten que ese subtipo aparezca como bloque autónomo;
5. fijar finalmente el `tipo_de_bloque` en el nivel más fino que siga siendo legible y estructuralmente justificado.

**Plantilla replicable:**

    identificar componente mayor exigido por arquitectura_macro
    verificar si configuracion_narrativa exige subtipificacion
    verificar si regimen_de_resolucion_buscada modifica el tipo terminal
    verificar si la escala compositiva permite explicitar el subtipo
    fijar tipo_de_bloque final

**Interacciones relevantes:**

- `arquitectura_macro` decide el repertorio mayor de tipos posibles;
- `configuracion_narrativa` decide si conviene mantener tipos gruesos o explicitar subtipos;
- `regimen_de_resolucion_buscada` afecta sobre todo la tipificación de los bloques terminales o semiterminales;
- `duracion_objetivo`, `segmentacion_interna`, `unidad_de_segmento` y `longitud_por_segmento` deciden cuánta granularidad tipológica es viable;
- a menor duración y menor segmentación, más probable es usar tipos mayores;
- a mayor segmentación y mayor amplitud, más probable es explicitar subcomponentes como tipos de bloque autónomos.

**Ejemplos:**

- `apertura_contraste_resolucion` + `contrastiva` + `breve` + segmentación alta →
  el `tipo_de_bloque` puede resolverse no solo como `contraste`, sino como:
  - `polo_a`
  - `polo_b`
  - `tension`

- `apertura_lista_cierre` + `acumulativa` + `breve_expandido` →
  el `tipo_de_bloque` puede resolverse como:
  - `criterio_de_lista`
  - `item`
  - `item`
  - `cierre`

- `apertura_secuencia_remate` + `muy_breve` + segmentación baja →
  el `tipo_de_bloque` probablemente quede en nivel mayor:
  - `apertura`
  - `secuencia`
  - `remate`

- `apertura_desarrollo_cierre` + `recapitulativa` + `resolucion_parcial` →
  el terminal puede tipificarse no solo como `cierre`, sino como:
  - `recogida`
  - `sintesis`
    según la visibilidad que permita la segmentación.

---

### 5.3. `posicion_en_arquitectura_macro`

**Campos que contribuyen:**

- `arquitectura_macro`
- `cantidad_total_de_bloques`

**Contribución por valores:**

#### `arquitectura_macro`

- `apertura_desarrollo_cierre` → las posiciones válidas deben repartirse entre `apertura`, `desarrollo` y `cierre`.
- `apertura_desarrollo_remate` → las posiciones válidas deben repartirse entre `apertura`, `desarrollo` y `remate`.
- `apertura_lista_cierre` → las posiciones válidas deben repartirse entre `apertura`, uno o varios tramos de `lista`, y `cierre`.
- `apertura_contraste_resolucion` → las posiciones válidas deben repartirse entre `apertura`, `contraste` y `resolucion`.
- `apertura_secuencia_remate` → las posiciones válidas deben repartirse entre `apertura`, uno o varios tramos de `secuencia`, y `remate`.

#### `cantidad_total_de_bloques`

- cantidad menor → menos posiciones diferenciadas y menor subdivisión interna.
- cantidad mayor → más posiciones posibles y mayor probabilidad de repetición de componentes como `lista` o `secuencia`.

**Regla protocolaria de construcción:**

La `posicion_en_arquitectura_macro` debe derivarse como una **ubicación funcional** del bloque dentro del recorrido total.

Su aplicación debe seguir esta secuencia:

1. identificar la arquitectura macro;
2. extraer las posiciones funcionales admisibles;
3. distribuirlas según la cantidad total de bloques;
4. asignar a cada bloque una posición compatible con el recorrido general.

**Plantilla replicable:**

    identificar arquitectura_macro
    extraer posiciones funcionales posibles
    repartirlas segun cantidad_total_de_bloques
    asignar una posicion funcional a cada bloque

**Ejemplos:**

- `apertura_desarrollo_cierre` + 3 bloques →
  - bloque 1 = `apertura`
  - bloque 2 = `desarrollo`
  - bloque 3 = `cierre`

- `apertura_lista_cierre` + 5 bloques →
  - bloque 1 = `apertura`
  - bloque 2 = `lista`
  - bloque 3 = `lista`
  - bloque 4 = `lista`
  - bloque 5 = `cierre`

- `apertura_secuencia_remate` + 4 bloques →
  - bloque 1 = `apertura`
  - bloque 2 = `secuencia`
  - bloque 3 = `secuencia`
  - bloque 4 = `remate`

**Interacciones relevantes:**

- `arquitectura_macro` define qué posiciones son admisibles;
- `cantidad_total_de_bloques` define cuántas veces pueden repetirse ciertas posiciones;
- la posición del bloque restringe después qué `funcion_del_bloque` y qué `objetivo_local` son coherentes.

---

### 5.4. `funcion_del_bloque`

**Campos que contribuyen:**

- `funcion_dominante`
- `efecto_buscado`
- `configuracion_discursiva`
- `configuracion_narrativa`
- `arquitectura_macro`
- `accion_esperada`

**Contribución por valores:**

#### `funcion_dominante`

- `enseñar` → favorece bloques aclaratorios, explicativos o de ordenación conceptual.
- `sintetizar` → favorece bloques de condensación, reducción o reformulación breve.
- `persuadir` → favorece bloques de contraste, justificación o inclinación direccional.
- `evaluar` → favorece bloques de criterio, comparación o valoración.
- `diagnosticar` → favorece bloques de identificación de problema, patrón o estado.
- `captar_atencion` → favorece aperturas con función de gancho.
- `activar_interaccion` → favorece cierres o tramos de invitación a respuesta.
- `convertir` → favorece bloques orientados a cambio de postura o decisión.
- `distribuir` → favorece bloques resumibles y transmisibles.
- `manifestar_comercialmente` → favorece bloques de propuesta, valor o posicionamiento.
- `abrir_serie` → favorece funciones proyectivas.
- `continuar_serie` → favorece funciones de enlace y continuidad.
- `cerrar_serie` → favorece funciones de síntesis y resolución.

#### `efecto_buscado`

- `comprension_rapida` → refuerza funciones aclaratorias.
- `curiosidad` → refuerza funciones de tensión o apertura incompleta.
- `identificacion` → refuerza funciones de proximidad o reconocimiento.
- `sorpresa` → refuerza funciones de giro o contraste.
- `urgencia` → refuerza funciones de empuje rápido.
- `retencion` → refuerza funciones memorables o de fijación.
- `expectativa_de_resolucion` → refuerza funciones proyectivas.
- `deseo_de_guardar` → refuerza funciones condensadoras en cierre o remate.
- `deseo_de_comentar` → refuerza funciones de apertura a respuesta.
- `deseo_de_compartir` → refuerza funciones transmisibles.
- `deseo_de_ver_hasta_el_final` → refuerza funciones de progresión.
- `deseo_de_ir_al_perfil` → refuerza funciones de proyección externa.
- `predisposicion_a_serie` → refuerza funciones de continuidad.
- `disposicion_a_accion` → refuerza funciones aplicativas u orientadas a ejecución.

#### `configuracion_discursiva`

- `definicional` → hace dominante la función de delimitar o nombrar.
- `explicativa` → hace dominante la función de aclarar o desarrollar.
- `argumentativa` → hace dominante la función de sostener o justificar.
- `operativa` → hace dominante la función de instruir o transferir.
- `sintetizadora` → hace dominante la función de condensar.
- `captativa` → hace dominante la función de enganchar.
- `hibrida_controlada` → permite combinar funciones, pero con una dominante clara.

#### `configuracion_narrativa`

- `lineal_progresiva` → favorece funciones encadenadas y continuas.
- `apertura_profundizacion_cierre` → refuerza funciones de introducción, desarrollo y clausura clara.
- `contrastiva` → refuerza funciones oposicionales.
- `acumulativa` → refuerza funciones de suma progresiva.
- `recapitulativa` → refuerza funciones de recuperación o síntesis parcial.
- `modular` → permite funciones más autónomas por bloque.
- `abierta_controlada` → flexibiliza funciones locales sin perder coherencia general.

#### `arquitectura_macro`

- `apertura_desarrollo_cierre` → restringe funciones a apertura, núcleo y cierre relativamente clásicos.
- `apertura_desarrollo_remate` → exige un terminal de golpe o condensación breve.
- `apertura_lista_cierre` → permite funciones de enumeración o serialización.
- `apertura_contraste_resolucion` → favorece funciones de oposición y respuesta.
- `apertura_secuencia_remate` → favorece funciones de paso, fase o momento.

#### `accion_esperada`

- `ver_hasta_el_final` → refuerza funciones que proyectan continuidad entre bloques.
- `comentar` → refuerza funciones de invitación a posicionarse.
- `guardar` → refuerza funciones de condensación reusable.
- `compartir` → refuerza funciones transmisibles.
- `seguir_cuenta` → refuerza funciones de proyección identitaria.
- `ir_al_perfil` → refuerza funciones de salida externa.
- `consumir_parte_siguiente` → refuerza funciones seriales o proyectivas.
- `solicitar_mas_informacion` → refuerza funciones de apertura ampliable.
- `hacer_click` → refuerza funciones con salida externa clara.
- `aplicar_lo_mostrado` → refuerza funciones operativas o transferibles.
- `ninguna_explicita` → permite funciones más conceptuales o no llamadas a acción.

**Regla protocolaria de construcción:**

La `funcion_del_bloque` debe derivarse como la **responsabilidad principal** que el bloque cumple dentro del recorrido.

Su aplicación debe seguir esta secuencia:

1. tomar la `posicion_en_arquitectura_macro`;
2. identificar la función dominante de la pieza;
3. modularla con efecto buscado, discursividad y narrativa;
4. ajustar según la acción esperada;
5. redactar una función breve y verificable para el bloque.

**Plantilla replicable:**

    identificar posicion del bloque
    fijar funcion base segun funcion_dominante
    modular con efecto_buscado y configuracion_discursiva
    ajustar con configuracion_narrativa y accion_esperada
    formular funcion_del_bloque

**Ejemplos:**

- `captar_atencion` + `curiosidad` + bloque de `apertura` → función del bloque: `enganchar e instalar tension inicial`.
- `enseñar` + `comprension_rapida` + `explicativa` + bloque de `desarrollo` → función del bloque: `aclarar el nucleo del caso`.
- `sintetizar` + `guardar` + bloque terminal → función del bloque: `condensar una formula reusable`.
- `activar_interaccion` + `comentar` + cierre → función del bloque: `abrir posicionamiento o respuesta`.

**Interacciones relevantes:**

- la `posicion_en_arquitectura_macro` restringe qué funciones son plausibles;
- `funcion_dominante` aporta la orientación principal;
- `efecto_buscado` y `accion_esperada` refinan la meta local;
- `configuracion_discursiva` y `configuracion_narrativa` modulan la forma que toma esa función.

---

### 5.5. `objetivo_local`

**Campos que contribuyen:**

- `funcion_dominante`
- `efecto_buscado`
- `estado_atencional`
- `regimen_de_activacion_atencional`
- `accion_esperada`

**Contribución por valores:**

#### `funcion_dominante`

- `enseñar` → objetivos locales de aclarar, ordenar o hacer comprensible.
- `sintetizar` → objetivos locales de condensar.
- `persuadir` → objetivos locales de inclinar o justificar.
- `evaluar` → objetivos locales de comparar o valorar.
- `diagnosticar` → objetivos locales de identificar o caracterizar.
- `captar_atencion` → objetivos locales de abrir foco o sostener interés.
- `activar_interaccion` → objetivos locales de suscitar respuesta.
- `convertir` → objetivos locales de mover a decisión.
- `distribuir` → objetivos locales de volver transmisible.
- `manifestar_comercialmente` → objetivos locales de mostrar propuesta o valor.
- `abrir_serie` / `continuar_serie` / `cerrar_serie` → objetivos locales de proyectar, enlazar o resolver secuencia.

#### `efecto_buscado`

- `curiosidad` o `sorpresa` → objetivos locales de tensión, giro o apertura incompleta.
- `comprension_rapida` → objetivos locales de claridad inmediata.
- `retencion` → objetivos locales de fijación o memorabilidad.
- `deseo_de_guardar` → objetivos locales de condensación reusable.
- `deseo_de_comentar` → objetivos locales de posicionamiento abierto.
- `deseo_de_ver_hasta_el_final` → objetivos locales de proyección al siguiente bloque.
- `disposicion_a_accion` → objetivos locales de transferencia o salida operativa.

#### `estado_atencional`

- estados frágiles → primer objetivo local: abrir o reenganchar.
- estados superficiales → objetivo local: clarificar rápido.
- estados en exploración → objetivo local: abrir curiosidad o tanteo.
- estados listos para profundización → objetivo local: aumentar espesor.
- estados listos para activación → objetivo local: llevar a uso o decisión.
- estados listos para continuidad → objetivo local: proyectar serie.

#### `regimen_de_activacion_atencional`

- `apertura_inmediata` → objetivo local temprano: enganchar rápido.
- `apertura_progresiva` → objetivo local temprano: abrir campo gradualmente.
- `reenganche` → objetivo local recurrente: recuperar foco.
- `sostenimiento_desde_el_inicio` → objetivo local: mantener continuidad sin caída.
- `activacion_por_continuidad` → objetivo local: enlazar explícitamente con el siguiente tramo.

#### `accion_esperada`

- `guardar` → objetivo local terminal: condensar.
- `comentar` → objetivo local terminal: abrir posicionamiento.
- `compartir` → objetivo local: dejar una fórmula transmisible.
- `seguir_cuenta` / `ir_al_perfil` / `hacer_click` → objetivo local: proyectar fuera de la pieza.
- `consumir_parte_siguiente` → objetivo local: dejar continuidad serial visible.
- `solicitar_mas_informacion` → objetivo local: abrir ampliación.
- `aplicar_lo_mostrado` → objetivo local: dejar algo transferible.
- `ninguna_explicita` → objetivo local: cerrar sin llamada visible.

**Regla protocolaria de construcción:**

El `objetivo_local` debe derivarse como la **meta inmediata del bloque**, más concreta que `funcion_del_bloque`.

Su aplicación debe seguir esta secuencia:

1. identificar la función general de la pieza;
2. precisar qué efecto debe producir este bloque;
3. ajustar según el estado atencional disponible;
4. modular con el régimen de activación;
5. cerrar la formulación del objetivo según la acción esperada.

**Plantilla replicable:**

    fijar objetivo base segun funcion_dominante
    refinar con efecto_buscado
    ajustar segun estado_atencional
    modular con regimen_de_activacion_atencional
    precisar segun accion_esperada

**Ejemplos:**

- `captar_atencion` + `curiosidad` + `atencion_no_abierta` + `apertura_inmediata` → objetivo local: `abrir el foco e instalar tension desde el primer bloque`.
- `enseñar` + `comprension_rapida` + `atencion_superficial` → objetivo local: `volver entendible de inmediato el punto principal`.
- `sintetizar` + `guardar` + cierre → objetivo local: `condensar una formula clara y reusable`.
- `activar_interaccion` + `comentar` + `reenganche` → objetivo local: `reactivar foco y dejar una pregunta o tension discutible`.

**Interacciones relevantes:**

- `funcion_dominante` fija el tipo de meta local admisible;
- `efecto_buscado` dice qué efecto debe producir esa meta;
- `estado_atencional` y `regimen_de_activacion_atencional` ajustan cuán ambicioso o básico debe ser el objetivo;
- `accion_esperada` decide hacia qué salida posterior debe apuntar el bloque.

---

### 5.6. `relacion_con_el_caso.*`

**Campos que contribuyen:**

- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `configuracion_narrativa`
- `configuracion_discursiva`

**Contribución por valores:**

#### `construccion_conceptual.formulacion_de_la_idea`

- `proposicion_definicional` → el bloque debe relacionarse con el caso delimitando, nombrando o precisando una idea.
- `proposicion_relacional` → el bloque debe relacionarse con el caso mostrando vínculos, conexiones o dependencias entre ideas.
- `proposicion_argumentativa` → el bloque debe relacionarse con el caso sosteniendo una tesis, razón o defensa local.
- `proposicion_operativa` → el bloque debe relacionarse con el caso traduciendo la idea a uso, criterio o aplicación.
- `formulacion_abierta_controlada` → el bloque puede formular la idea con mayor libertad, pero sin romper coherencia con el caso global.

#### `construccion_conceptual.rol_conceptual`

- `nuclear` → la relación del bloque con el caso debe pasar por una idea central; el bloque debe cargar parte importante del núcleo.
- `complementaria` → el bloque debe afinar, apoyar o matizar una idea mayor.
- `puente` → el bloque debe enlazar regiones, tramos o ideas del caso.
- `contrastiva` → el bloque debe organizar una oposición, diferencia o tensión.
- `derivada` → el bloque debe hacer aparecer una consecuencia, ampliación o extensión del caso.

#### `construccion_conceptual.peso_relativo`

No tiene conjunto discreto cerrado. Protocolariamente:

- peso más alto → aumenta la probabilidad de que la idea entre en bloques centrales, reciba más desarrollo o reaparezca;
- peso más bajo → reduce espacio, frecuencia o centralidad;
- en bloques periféricos, un peso alto puede justificar presencia resumida pero muy marcada;
- en bloques nucleares, un peso alto puede justificar mayor despliegue.

#### `construccion_conceptual.modo_de_presencia`

- `explicita` → la idea debe aparecer nombrada o formulada directamente en el bloque.
- `explicita_reiterada` → la idea debe reaparecer varias veces o quedar fuertemente marcada en el recorrido del bloque.
- `implicita_estructurante` → la idea puede no nombrarse de forma directa, pero debe ordenar el bloque desde dentro.
- `localizada` → la idea debe comparecer en un punto específico del bloque y no necesariamente atravesarlo entero.
- `transversal` → la idea debe atravesar varias partes del bloque o incluso varios bloques conectados.

#### `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`

- `soporte` → el bloque debe mostrar que una idea apoya o refuerza a otra.
- `subordinacion` → el bloque debe mostrar dependencia estructural entre ideas.
- `expansion` → el bloque debe ampliar una idea previa.
- `contraste` → el bloque debe hacer visible una oposición.
- `condicion` → el bloque debe presentar una idea como requisito o condición de otra.
- `consecuencia` → el bloque debe presentar una idea como resultado de otra.
- `equivalencia_parcial` → el bloque debe mostrar correspondencia limitada entre dos ideas.
- `articulacion_libre_controlada` → el bloque puede articular ideas con mayor libertad, pero sin perder trazabilidad estructural.

#### `configuracion_narrativa`

- `lineal_progresiva` → la relación del bloque con el caso debe avanzar el recorrido de forma continua.
- `apertura_profundizacion_cierre` → la relación del bloque con el caso debe ajustarse al momento narrativo: introducir, profundizar o cerrar.
- `contrastiva` → la relación del bloque con el caso debe tender a oponer, diferenciar o tensar ideas.
- `acumulativa` → la relación del bloque con el caso debe sumar elementos progresivamente.
- `recapitulativa` → la relación del bloque con el caso debe recuperar algo ya activado.
- `modular` → la relación del bloque con el caso puede ser más autónoma localmente.
- `abierta_controlada` → la relación del bloque con el caso puede flexibilizarse, pero sin perder coherencia global.

#### `configuracion_discursiva`

- `definicional` → el bloque debe relacionarse con el caso delimitando o nombrando.
- `explicativa` → el bloque debe relacionarse con el caso aclarando o desarrollando.
- `argumentativa` → el bloque debe relacionarse con el caso justificando o defendiendo.
- `operativa` → el bloque debe relacionarse con el caso traduciendo a criterio, uso o instrucción.
- `sintetizadora` → el bloque debe relacionarse con el caso condensando lo esencial.
- `captativa` → el bloque debe relacionarse con el caso priorizando impacto y enganche.
- `hibrida_controlada` → el bloque puede combinar regímenes, pero con una dominante clara.

**Regla protocolaria de construcción:**

La `relacion_con_el_caso` debe construirse como la **forma específica en que el bloque toma, transforma o articula el caso global**.

Su aplicación debe seguir esta secuencia:

1. identificar qué idea o conjunto de ideas entra en el bloque;
2. clasificar su rol conceptual;
3. ajustar su centralidad según el peso relativo;
4. decidir cómo comparece según el modo de presencia;
5. explicitar qué relación mantiene con otras ideas si esa relación es estructuralmente relevante;
6. modular la forma final con `configuracion_narrativa` y `configuracion_discursiva`.

**Plantilla replicable:**

    identificar idea o ideas activadas en el bloque
    fijar rol_conceptual
    ajustar centralidad con peso_relativo
    decidir modo_de_presencia
    fijar tipo_de_relacion si corresponde
    modular con configuracion_narrativa
    modular con configuracion_discursiva
    formular relacion_con_el_caso del bloque

**Interacciones relevantes:**

- `rol_conceptual` decide qué clase de presencia del caso es admisible en el bloque;
- `peso_relativo` regula cuánto espacio y repetición merece esa presencia;
- `modo_de_presencia` decide si la idea debe verse directamente o solo estructurar el bloque;
- `tipo_de_relacion` decide si el bloque debe mostrar apoyo, contraste, consecuencia u otra articulación;
- `configuracion_narrativa` modula la posición de esa relación dentro del recorrido general;
- `configuracion_discursiva` modula la forma verbal con que esa relación comparece.

**Ejemplos:**

#### Ejemplo 1

- `rol_conceptual` → `nuclear`
- `peso_relativo` → alto
- `modo_de_presencia` → `explicita`
- `configuracion_discursiva` → `explicativa`

**Resultado protocolario esperado:**

- el bloque debe tomar una idea central;
- nombrarla directamente;
- darle espacio suficiente;
- y aclararla como parte del núcleo del caso.

**Idea desarrollada en el bloque:**

- idea activada:
  - “pedir más palabras no garantiza mejor pensamiento”

- realización simple posible:
  - “Aquí está el problema central: escribir más no significa pensar mejor.  
    Una respuesta puede crecer en extensión y seguir siendo pobre en estructura.  
    Lo que vuelve mejor una idea no es su tamaño, sino cómo organiza lo que quiere decir.”

---

#### Ejemplo 2

- `rol_conceptual` → `contrastiva`
- `tipo_de_relacion` → `contraste`
- `configuracion_narrativa` → `contrastiva`
- `configuracion_discursiva` → `argumentativa`

**Resultado protocolario esperado:**

- el bloque debe oponer dos ideas o polos;
- hacer visible la tensión entre ellos;
- y usar esa oposición como núcleo de su función local.

**Idea desarrollada en el bloque:**

- polos activados:
  - polo A: “más palabras”
  - polo B: “mejor estructura conceptual”

- realización simple posible:
  - “Una cosa es aumentar la cantidad de palabras y otra muy distinta mejorar la estructura de una idea.  
    Lo primero puede inflar una respuesta; lo segundo la vuelve más clara, más articulada y más defendible.  
    Por eso, medir pensamiento por extensión verbal confunde volumen con organización conceptual.”

---

#### Ejemplo 3

- `rol_conceptual` → `derivada`
- `tipo_de_relacion` → `consecuencia`
- `modo_de_presencia` → `localizada`
- `configuracion_discursiva` → `operativa`

**Resultado protocolario esperado:**

- el bloque debe presentar una consecuencia concreta del caso;
- ubicarla en un punto específico del recorrido local;
- y traducirla a uso o aplicación.

**Idea desarrollada en el bloque:**

- consecuencia activada:
  - “si lo importante es la estructura de la idea, entonces conviene pedir desglose conceptual y no solo extensión”

- realización simple posible:
  - “La consecuencia práctica es clara: en lugar de pedir solamente más palabras, conviene pedir que la idea se descomponga.  
    Por ejemplo: define el punto central, distingue sus partes y explica cómo se conectan.  
    Así la exigencia ya no recae en el volumen del texto, sino en la calidad de la estructura.”

---

### 5.7. `composicion_local.*`

**Campos que contribuyen:**

- `duracion_objetivo`
- `arquitectura_macro`
- `estado_atencional`
- `dinamica_procesual.explicitud`
- `dinamica_procesual.continuidad`
- `dinamica_procesual.friccion_interpretativa`
- `dinamica_procesual.compresion`
- `dinamica_procesual.recapitulacion`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.formulacion_de_la_idea`
- `grado_de_dependencia_de_recursos_complementarios`

---

#### `duracion_estimada`

**Campos que contribuyen:**

- `duracion_objetivo`
- `arquitectura_macro`
- `estado_atencional`
- `grado_de_dependencia_de_recursos_complementarios`

**Contribución por valores:**

##### `duracion_objetivo`

- `muy_breve` → el bloque debe construirse con margen temporal muy comprimido.
- `breve` → el bloque puede sostener un desarrollo local equilibrado.
- `breve_expandido` → el bloque puede recibir mayor despliegue temporal si su función lo justifica.

##### `arquitectura_macro`

- `apertura_desarrollo_cierre` → reparte la duración local entre apertura, núcleo y cierre con proporción relativamente estable.
- `apertura_desarrollo_remate` → tiende a reservar menos duración al terminal y más al núcleo.
- `apertura_lista_cierre` → puede repartir duración en varios bloques listales más cortos.
- `apertura_contraste_resolucion` → puede concentrar más duración en el bloque contrastivo o resolutivo.
- `apertura_secuencia_remate` → puede distribuir duración entre varios pasos o momentos.

##### `estado_atencional`

- estados frágiles → favorecen bloques de menor duración local.
- estados exploratorios o listos para profundización → toleran mayor duración local.
- estados que requieren reenganche → obligan a controlar duración para no perder foco.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → la duración local puede apoyarse casi totalmente en el núcleo verbal.
- `media` → la duración local debe reservar algo de espacio para apoyos.
- `alta` → la duración local debe contemplar mayor articulación entre verbalidad y recursos.
- `dominante` → la duración local debe construirse considerando que parte importante del bloque se realiza a través de recursos complementarios.

**Regla protocolaria:**
La `duracion_estimada` debe derivarse como el **tiempo local disponible** para que el bloque cumpla su función sin romper el ritmo global de la pieza.

---

#### `longitud_verbal_estimada`

**Campos que contribuyen:**

- `duracion_objetivo`
- `dinamica_procesual.compresion`
- `dinamica_procesual.explicitud`
- `dinamica_procesual.friccion_interpretativa`
- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `estado_atencional`

**Contribución por valores:**

##### `duracion_objetivo`

- `muy_breve` → obliga a menor longitud verbal por bloque.
- `breve` → permite longitud verbal intermedia.
- `breve_expandido` → permite mayor longitud verbal si el bloque lo necesita.

##### `dinamica_procesual.compresion`

- `baja` → permite más despliegue verbal.
- `media` → favorece equilibrio entre síntesis y desarrollo.
- `alta` → exige condensación verbal fuerte.

##### `dinamica_procesual.explicitud`

- `baja` → permite decir menos de forma directa.
- `media` → equilibrio entre explicación e inferencia.
- `alta` → aumenta necesidad de verbalización clara y, por tanto, puede expandir la longitud local.

##### `dinamica_procesual.friccion_interpretativa`

- `baja` → favorece formulaciones más directas y de seguimiento fácil.
- `media` → permite cierta complejidad controlada.
- `alta` → permite formulaciones más densas, pero exige receptor compatible.

##### `construccion_conceptual.formulacion_de_la_idea`

- `proposicion_definicional` → puede requerir formulación precisa pero relativamente compacta.
- `proposicion_relacional` → puede exigir verbalización de vínculos o dependencias.
- `proposicion_argumentativa` → suele requerir algo más de desarrollo para sostener razones.
- `proposicion_operativa` → puede requerir formulación clara de criterio, paso o uso.
- `formulacion_abierta_controlada` → permite longitud más flexible, pero sin perder control.

##### `construccion_conceptual.rol_conceptual`

- `nuclear` → favorece mayor espacio verbal relativo.
- `complementaria` → favorece menor espacio verbal que una idea nuclear.
- `puente` → favorece longitud intermedia orientada a enlace.
- `contrastiva` → favorece espacio verbal suficiente para oponer.
- `derivada` → favorece longitud subordinada al núcleo principal.

##### `construccion_conceptual.peso_relativo`

- peso alto → aumenta la probabilidad de mayor longitud verbal local.
- peso bajo → reduce espacio verbal relativo.

##### `estado_atencional`

- estados frágiles o superficiales → obligan a controlar longitud para no saturar.
- estados listos para profundización → toleran mayor longitud verbal.

**Regla protocolaria:**
La `longitud_verbal_estimada` debe derivarse como el **espacio verbal local admisible** para que el bloque siga siendo decible, legible y compatible con su carga conceptual.

---

#### `grado_de_carga_conceptual`

**Campos que contribuyen:**

- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.formulacion_de_la_idea`
- `estado_atencional`
- `dinamica_procesual.friccion_interpretativa`
- `dinamica_procesual.compresion`

**Contribución por valores:**

##### `construccion_conceptual.rol_conceptual`

- `nuclear` → aumenta la carga conceptual del bloque.
- `complementaria` → aporta carga menor o de apoyo.
- `puente` → aporta carga intermedia de articulación.
- `contrastiva` → aumenta carga si la oposición es estructuralmente relevante.
- `derivada` → aporta carga secundaria o aplicada.

##### `construccion_conceptual.peso_relativo`

- peso alto → aumenta la carga conceptual local.
- peso bajo → reduce la centralidad conceptual del bloque.

##### `construccion_conceptual.formulacion_de_la_idea`

- `proposicion_definicional` → carga centrada en precisión.
- `proposicion_relacional` → carga centrada en articulación de vínculos.
- `proposicion_argumentativa` → carga centrada en sostener tesis o razón.
- `proposicion_operativa` → carga centrada en transferencia o uso.
- `formulacion_abierta_controlada` → carga más flexible, pero dependiente del contexto.

##### `estado_atencional`

- estados listos para profundización → permiten mayor carga conceptual.
- estados frágiles o superficiales → obligan a moderarla.

##### `dinamica_procesual.friccion_interpretativa`

- `baja` → favorece menor carga o mayor mediación de la carga.
- `media` → permite carga moderada.
- `alta` → permite bloques de mayor exigencia conceptual.

##### `dinamica_procesual.compresion`

- `baja` → permite desplegar carga conceptual con más espacio.
- `media` → equilibrio.
- `alta` → concentra carga conceptual en menos espacio.

**Regla protocolaria:**
El `grado_de_carga_conceptual` debe derivarse como la **densidad conceptual local** del bloque, teniendo en cuenta no solo qué idea porta, sino cómo la porta y qué tipo de receptor/atención puede sostenerla.

---

#### `grado_de_resolucion_local`

**Campos que contribuyen:**

- `arquitectura_macro`
- `regimen_de_resolucion_buscada`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`

**Contribución por valores:**

##### `arquitectura_macro`

- bloques de `apertura` → tienden a menor resolución local.
- bloques de `desarrollo` → tienden a resolución intermedia o progresiva.
- bloques de `cierre`, `remate` o `resolucion` → tienden a mayor resolución local.
- bloques de `lista`, `contraste` o `secuencia` → su resolución depende de si funcionan como núcleo abierto o como tramo ya terminal.

##### `regimen_de_resolucion_buscada`

- `resolucion_inmediata` → aumenta el grado de resolución local, especialmente en bloques terminales.
- `resolucion_progresiva` → distribuye la resolución entre varios bloques.
- `resolucion_diferida` → reduce la resolución local y favorece proyección.
- `resolucion_parcial` → permite que el bloque cierre solo una parte.
- `resolucion_abierta_a_continuidad` → mantiene resolución suficiente sin clausura total.

##### `construccion_conceptual.rol_conceptual`

- `nuclear` → puede concentrar mayor resolución si el bloque es terminal o central.
- `complementaria` → tiende a menor resolución propia.
- `puente` → suele tener resolución baja o intermedia, más orientada a enlace.
- `contrastiva` → puede resolver parcialmente al distinguir polos.
- `derivada` → puede ofrecer resolución local aplicada o secundaria.

##### `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`

- `soporte` o `subordinacion` → suelen dar resolución parcial de apoyo.
- `expansion` → suele dejar resolución abierta o progresiva.
- `contraste` → puede cerrar diferenciando, aunque no siempre clausura el caso.
- `condicion` → suele dejar algo pendiente de cumplimiento.
- `consecuencia` → puede aumentar resolución local al mostrar resultado.
- `equivalencia_parcial` → suele mantener resolución moderada.
- `articulacion_libre_controlada` → mantiene resolución más flexible.

**Regla protocolaria:**
El `grado_de_resolucion_local` debe derivarse como el **grado en que el bloque cierra, responde o estabiliza algo del recorrido**, aunque no cierre la pieza completa.

---

**Regla protocolaria de construcción del conjunto:**

La `composicion_local` debe construirse como la **configuración interna del bloque** en términos de:

- cuánto dura;
- cuánto dice;
- cuánta densidad conceptual soporta;
- y cuánto resuelve localmente.

Su aplicación debe seguir esta secuencia:

1. derivar `duracion_estimada`;
2. derivar `longitud_verbal_estimada`;
3. derivar `grado_de_carga_conceptual`;
4. derivar `grado_de_resolucion_local`;
5. verificar que las cuatro decisiones sean coherentes entre sí y con la función del bloque.

**Plantilla replicable:**

    derivar duracion_estimada
    derivar longitud_verbal_estimada
    derivar grado_de_carga_conceptual
    derivar grado_de_resolucion_local
    verificar coherencia local del bloque

**Interacciones relevantes:**

- `duracion_estimada` y `longitud_verbal_estimada` no deben crecer sin control si la atención es frágil;
- `grado_de_carga_conceptual` debe moderarse cuando la fricción interpretativa es baja y el receptor requiere alta mediación;
- `grado_de_resolucion_local` depende mucho de la posición del bloque dentro de la arquitectura;
- dependencia alta de recursos complementarios puede redistribuir parte de la carga o de la duración fuera del núcleo verbal.

**Ejemplos:**

#### Ejemplo 1

- `duracion_objetivo` → `muy_breve`
- `rol_conceptual` → `nuclear`
- `peso_relativo` → alto
- `compresion` → `alta`
- `estado_atencional` → `atencion_superficial`

**Resultado protocolario esperado:**

- `duracion_estimada` baja;
- `longitud_verbal_estimada` contenida;
- `grado_de_carga_conceptual` medio-alto pero muy comprimido;
- `grado_de_resolucion_local` intermedio si el bloque no es terminal.

#### Ejemplo 2

- `duracion_objetivo` → `breve_expandido`
- `rol_conceptual` → `contrastiva`
- `formulacion_de_la_idea` → `proposicion_argumentativa`
- `friccion_interpretativa` → `media`
- `regimen_de_resolucion_buscada` → `resolucion_parcial`

**Resultado protocolario esperado:**

- `duracion_estimada` media o alta;
- `longitud_verbal_estimada` suficiente para sostener oposición y razones;
- `grado_de_carga_conceptual` alto;
- `grado_de_resolucion_local` parcial, no totalmente clausurante.

#### Ejemplo 3

- `duracion_objetivo` → `breve`
- `rol_conceptual` → `derivada`
- `formulacion_de_la_idea` → `proposicion_operativa`
- `grado_de_dependencia_de_recursos_complementarios` → `media`
- `regimen_de_resolucion_buscada` → `resolucion_inmediata`

**Resultado protocolario esperado:**

- `duracion_estimada` intermedia;
- `longitud_verbal_estimada` moderada;
- `grado_de_carga_conceptual` medio;
- `grado_de_resolucion_local` alto si el bloque traduce una consecuencia a uso claro.

---

## 6. Capa verbal

## 6. Capa verbal

### Criterio general de la capa

La `capa verbal` debe construirse como la región donde el bloque comparece
principalmente por voz.

Dentro de esta capa:

- `emisor` fija quién porta la voz;
- `dialogo` fija la forma relacional de esa voz;
- `texto_oral_principal` realiza el núcleo verbal del bloque;
- `texto_oral_secundario` acompaña, apoya o modula ese núcleo;
- `remate_verbal_local` concentra la salida verbal terminal del bloque.

Las cinco secciones deben leerse juntas, porque no son decisiones aisladas:
la elección del emisor y del diálogo condiciona cómo puede sonar el texto oral;
la longitud y el tono del texto principal condicionan cuánto espacio queda para
texto secundario;
y el remate verbal local no puede contradecir ni la función del bloque ni la
lógica verbal ya construida.

---

### 6.1. `realizacion_verbal.emisor`

**Campos que contribuyen:**

- `realizacion_verbal_de_bloque.emisor`
- `modalidad_de_guion`
- `modo_de_comparecencia_verbal`

**Contribución por valores:**

#### `realizacion_verbal_de_bloque.emisor`

Campo descriptivo abierto. Protocolariamente:

- fija quién porta la voz principal del bloque;
- decide si la voz comparece desde una fuente única o múltiple;
- y restringe la estabilidad o variación de la enunciación local.

Su formulación debe resolverse como una de estas posibilidades funcionales:

- emisor único estable;
- emisor principal con apoyo secundario;
- alternancia de emisores;
- o distribución equivalente de voz.

#### `modalidad_de_guion`

- `presentacion_a_camara` → favorece un emisor visible, frontal y reconocible.
- `voz_en_off` → favorece un emisor no necesariamente visible, pero sí verbalmente estable.
- `escenificado` → permite que el emisor se distribuya entre presencia visible, acción y escena.
- `mixto` → permite alternar emisor visible y emisor no frontal, pero con jerarquía explícita.

#### `modo_de_comparecencia_verbal`

- `oral_directo` → favorece un emisor frontal, nítido y de voz principal estable.
- `oral_guiado` → favorece un emisor que conduce o pauta la verbalización.
- `oral_escenico` → permite un emisor más integrado a acción visible, gesto o situación.
- `oral_mixto` → permite varias formas de emisor, pero exige consistencia entre tramos.

**Regla protocolaria de construcción:**

El `emisor` debe derivarse como la **fuente verbal dominante del bloque**.

Su aplicación debe seguir esta secuencia:

1. identificar el emisor declarado o implícito;
2. verificar si la modalidad de guion exige visibilidad frontal, voz mediada o integración escénica;
3. ajustar la forma del emisor al modo de comparecencia verbal;
4. fijar si el bloque tiene emisor único, emisor principal con apoyo o alternancia controlada.

**Plantilla replicable:**

    fijar fuente verbal del bloque
    ajustar visibilidad segun modalidad_de_guion
    ajustar forma de comparecencia segun modo_de_comparecencia_verbal
    formular emisor local estable

**Interacciones relevantes:**

- `emisor` condiciona el tipo de `dialogo` posible;
- una modalidad más frontal favorece emisor único y visible;
- una modalidad más escénica o mixta permite más variación de portadores de voz;
- el emisor debe seguir siendo compatible con `texto_oral_principal` y `texto_oral_secundario`.

**Ejemplos:**

- `presentacion_a_camara` + `oral_directo` → emisor único frontal.
- `voz_en_off` + `oral_guiado` → emisor no frontal, pero conductor claro.
- `escenificado` + `oral_escenico` → emisor integrado a la situación o acción visible.

---

### 6.2. `realizacion_verbal.dialogo`

**Campos que contribuyen:**

- `realizacion_verbal_de_bloque.dialogo`
- `modalidad_de_guion`
- `tipo_de_escenificacion_admitida`

**Contribución por valores:**

#### `realizacion_verbal_de_bloque.dialogo`

Campo abierto. Protocolariamente:

- fija si el bloque es monológico, dialogado, pseudo-dialogado o equivalente;
- determina cuánto de la verbalidad se distribuye entre una o varias voces;
- y modula el ritmo local del bloque.

Su formulación debe resolverse, al menos, dentro de estas posibilidades funcionales:

- monológico;
- dialogado;
- pseudo-dialogado;
- alternancia breve;
- o intervención mínima secundaria.

#### `modalidad_de_guion`

- `presentacion_a_camara` → favorece diálogo reducido o monológico.
- `voz_en_off` → favorece diálogo bajo o mediado, salvo integración escénica adicional.
- `escenificado` → permite diálogo más amplio e integrado a la escena.
- `mixto` → permite combinar monólogo y diálogo, pero con control explícito.

#### `tipo_de_escenificacion_admitida`

- `ninguna` → reduce fuertemente el diálogo real y favorece monólogo.
- `gestual_basica` → permite apoyos mínimos, pero no exige diálogo desarrollado.
- `presentacion_a_camara` → favorece monólogo frontal o pseudo-interlocución.
- `demostrativa` → permite diálogo funcional si ayuda a mostrar proceso, objeto o contraste.
- `escenificada` → favorece diálogo visible y más elaborado.
- `mixta_controlada` → permite varios regímenes de diálogo, pero sin dispersión arbitraria.

**Regla protocolaria de construcción:**

El `dialogo` debe derivarse como el **régimen relacional de la voz del bloque**.

Su aplicación debe seguir esta secuencia:

1. identificar si el bloque necesita una o varias voces;
2. verificar qué permite la modalidad de guion;
3. verificar qué permite la escenificación admitida;
4. fijar el diálogo en el nivel mínimo necesario para cumplir la función del bloque.

**Plantilla replicable:**

    decidir si el bloque es monologico o plurivocal
    restringir segun modalidad_de_guion
    restringir segun tipo_de_escenificacion_admitida
    fijar dialogo final del bloque

**Interacciones relevantes:**

- `dialogo` depende del `emisor`: no puede haber diálogo real sin pluralidad compatible de voz;
- modalidades más monológicas reducen la complejidad dialogal;
- modalidades escenificadas o mixtas permiten crecimiento del diálogo;
- el diálogo no debe invadir espacio que el `texto_oral_principal` necesita para cumplir la función del bloque.

**Ejemplos:**

- `presentacion_a_camara` + `presentacion_a_camara` → monológico.
- `escenificado` + `escenificada` → dialogado o alternancia visible.
- `mixto` + `mixta_controlada` → monólogo principal con intervenciones secundarias.

---

### 6.3. `realizacion_verbal.texto_oral_principal`

**Campos que contribuyen:**

- `funcion_del_bloque`
- `objetivo_local`
- `funcion_dominante`
- `efecto_buscado`
- `configuracion_discursiva`
- `publico_objetivo_inmediato`
- `adecuacion_lexico_formulativa.registro_predominante`
- `adecuacion_lexico_formulativa.densidad_terminologica`
- `adecuacion_lexico_formulativa.grado_de_abstraccion`
- `adecuacion_lexico_formulativa.accesibilidad_lexica`
- `adecuacion_lexico_formulativa.variacion_lexica`
- `estado_atencional`
- `regimen_de_activacion_atencional`
- `dinamica_procesual.explicitud`
- `dinamica_procesual.continuidad`
- `dinamica_procesual.friccion_interpretativa`
- `dinamica_procesual.compresion`
- `dinamica_procesual.recapitulacion`
- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `configuracion_narrativa`
- `duracion_objetivo`
- `arquitectura_macro`
- `tipo_de_bloque`

**Contribución por valores:**

#### `funcion_del_bloque` y `objetivo_local`

Estos dos campos fijan la responsabilidad verbal inmediata del bloque.

Protocolariamente:

- `funcion_del_bloque` decide qué hace el texto;
- `objetivo_local` decide qué debe conseguir en este tramo concreto.

El `texto_oral_principal` debe ser la realización verbal más directa de ambos.

#### `funcion_dominante`

- `enseñar` → favorece texto aclaratorio, guiado y entendible.
- `sintetizar` → favorece texto comprimido y de alta condensación.
- `persuadir` → favorece texto direccional, justificativo o contrastivo.
- `evaluar` → favorece texto de criterio y comparación.
- `diagnosticar` → favorece texto de identificación de problema o patrón.
- `captar_atencion` → favorece texto de entrada fuerte.
- `activar_interaccion` → favorece texto tensivo o invitador.
- `convertir` → favorece texto de empuje decisional.
- `distribuir` → favorece texto transmisible.
- `manifestar_comercialmente` → favorece texto de propuesta o posicionamiento.
- `abrir_serie` / `continuar_serie` / `cerrar_serie` → favorecen texto proyectivo, enlazador o resolutivo según el caso.

#### `efecto_buscado`

- `comprension_rapida` → aumenta claridad y orden lineal.
- `curiosidad` → dosifica información y puede dejar huecos de tensión.
- `identificacion` → acerca registro y situaciones.
- `sorpresa` → permite giros, contrastes o cortes más marcados.
- `urgencia` → acelera ritmo y acorta formulación.
- `retencion` → favorece reiteración útil y formulaciones memorables.
- `expectativa_de_resolucion` → favorece texto proyectivo.
- `deseo_de_guardar` → favorece fórmulas condensadas y reutilizables.
- `deseo_de_comentar` → favorece formulaciones discutibles o abiertas.
- `deseo_de_compartir` → favorece resumibilidad.
- `deseo_de_ver_hasta_el_final` → favorece progresión interna.
- `deseo_de_ir_al_perfil` → proyecta el texto fuera del bloque o de la pieza.
- `predisposicion_a_serie` → favorece proyección serial.
- `disposicion_a_accion` → favorece transferibilidad verbal.

#### `configuracion_discursiva`

- `definicional` → organiza el texto oral principal como delimitación o nombramiento.
- `explicativa` → organiza el texto como aclaración o desarrollo esclarecedor.
- `argumentativa` → organiza el texto como razón, apoyo o defensa.
- `operativa` → organiza el texto como instrucción, criterio o aplicación.
- `sintetizadora` → organiza el texto como condensación.
- `captativa` → organiza el texto con máximo peso de enganche.
- `hibrida_controlada` → permite mezcla, pero con una dominante verbal clara.

#### `publico_objetivo_inmediato` y `adecuacion_lexico_formulativa.*`

Estos campos regulan:

- el tono verbal;
- la densidad terminológica;
- el grado de abstracción;
- la accesibilidad;
- y la variación del léxico.

Protocolariamente:

- públicos más fríos o sin conocimiento previo exigen mayor mediación;
- públicos más compatibles permiten mayor compresión y menor explicación;
- registro, densidad, abstracción, accesibilidad y variación deben componer un perfil verbal coherente.

#### `estado_atencional` y `regimen_de_activacion_atencional`

Regulan:

- fuerza de apertura local;
- necesidad de reenganche;
- tolerancia a longitud, densidad y continuidad;
- y forma del ingreso verbal al bloque.

#### `dinamica_procesual.*`

- `explicitud` regula cuánto del contenido se verbaliza directamente.
- `continuidad` regula cuán encadenado debe sonar el tramo.
- `friccion_interpretativa` regula la exigencia cognitiva.
- `compresion` regula la condensación verbal.
- `recapitulacion` regula cuánto se recupera explícitamente del recorrido previo.

#### `construccion_conceptual`

Aporta el contenido del texto oral principal:

- qué idea entra;
- con qué rol;
- con qué peso;
- con qué modo de presencia;
- y con qué relaciones a otras ideas.

#### `configuracion_narrativa`, `duracion_objetivo`, `arquitectura_macro`, `tipo_de_bloque`

Estos campos restringen:

- cuánto puede decir el bloque;
- con qué forma de progresión;
- en qué posición estructural habla;
- y qué tipo de tramo verbal se espera.

**Regla protocolaria de construcción:**

El `texto_oral_principal` debe construirse como la **realización verbal dominante del bloque**.

Su aplicación debe seguir esta secuencia:

1. fijar función y objetivo local del bloque;
2. fijar la forma discursiva dominante;
3. calibrar el texto al receptor;
4. ajustar el régimen atencional y procesual;
5. introducir el contenido conceptual que el bloque debe portar;
6. ajustar longitud, compresión y posición estructural;
7. redactar el texto principal como núcleo verbal decible del bloque.

**Plantilla replicable:**

    fijar funcion_del_bloque
    fijar objetivo_local
    elegir forma discursiva
    calibrar al receptor
    ajustar dinamica atencional y procesual
    insertar contenido conceptual
    ajustar longitud y posicion estructural
    redactar texto_oral_principal

**Interacciones relevantes:**

- el texto principal no puede contradecir la `funcion_del_bloque`;
- debe ser compatible con `emisor` y `dialogo`;
- su longitud debe dejar espacio posible para texto secundario y remate;
- la carga conceptual debe ser compatible con el estado atencional y el perfil léxico del receptor.

---

### 6.4. `realizacion_verbal.texto_oral_secundario`

**Campos que contribuyen:**

- los mismos que `texto_oral_principal`
- `texto_oral_principal`

**Contribución por valores:**

El `texto_oral_secundario` no debe construirse como una segunda voz principal, sino
como una **capa subordinada** del bloque.

Protocolariamente:

- hereda el mismo marco funcional y conceptual del texto principal;
- pero comparece con menor peso relativo;
- y debe quedar subordinado al foco dominante del bloque.

Su función suele resolverse como una de estas posibilidades:

- aclaración breve;
- matiz;
- repetición útil;
- ejemplificación mínima;
- contraste local;
- o apoyo al remate.

**Regla protocolaria de construcción:**

El `texto_oral_secundario` debe construirse solo si aporta algo que el texto
principal no resuelve por sí mismo.

Su aplicación debe seguir esta secuencia:

1. construir primero el texto oral principal;
2. identificar si hace falta apoyo verbal secundario;
3. decidir si ese apoyo aclara, matiza, ejemplifica, contrasta o refuerza;
4. mantenerlo subordinado en peso, longitud y protagonismo;
5. verificar que no compita con el texto principal ni con el remate verbal local.

**Plantilla replicable:**

    construir texto_oral_principal
    decidir si hace falta apoyo secundario
    elegir funcion secundaria
    redactar texto breve y subordinado
    verificar que no compita con el nucleo verbal

**Interacciones relevantes:**

- depende del mismo marco que el texto principal;
- no debe repetir innecesariamente lo ya dicho;
- debe coordinarse con `dialogo` si el bloque es plurivocal;
- puede absorber parte de la recapitulación o de la aclaración si eso alivia el texto principal.

**Ejemplos:**

- texto principal explicativo + texto secundario aclaratorio.
- texto principal contrastivo + texto secundario de matiz.
- texto principal operativo + texto secundario ejemplificador breve.

---

### 6.5. `realizacion_verbal.remate_verbal_local`

**Campos que contribuyen:**

- `accion_esperada`
- `efecto_buscado`
- `regimen_de_resolucion_buscada`
- `funcion_dominante`
- `arquitectura_macro`
- `tipo_de_bloque`

**Contribución por valores:**

#### `accion_esperada`

- `guardar` → remate condensado y reusable.
- `comentar` → remate abierto, tensivo o interrogativo.
- `compartir` → remate resumible y transmisible.
- `seguir_cuenta` / `consumir_parte_siguiente` → remate proyectivo.
- `ir_al_perfil` / `hacer_click` → remate orientado a salida externa.
- `solicitar_mas_informacion` → remate ampliable.
- `aplicar_lo_mostrado` → remate con transferencia clara.
- `ninguna_explicita` → remate más conceptual o clausurante.

#### `efecto_buscado`

- `deseo_de_guardar` → favorece fórmula memorable.
- `deseo_de_comentar` → favorece apertura de respuesta.
- `deseo_de_compartir` → favorece compacidad transmisible.
- `deseo_de_ver_hasta_el_final` → favorece remate que cierre progresión.
- `sorpresa` → favorece remate más corto y marcado.
- `urgencia` → favorece remate rápido, fuerte y comprimido.
- `retencion` → favorece remate fijador.
- `predisposicion_a_serie` → favorece remate proyectivo.

#### `regimen_de_resolucion_buscada`

- `resolucion_inmediata` → favorece remate conclusivo.
- `resolucion_progresiva` → favorece remate que cierre localmente, pero no agote todo el recorrido.
- `resolucion_diferida` → favorece remate no conclusivo.
- `resolucion_parcial` → favorece remate que cierre solo una parte.
- `resolucion_abierta_a_continuidad` → favorece remate no clausurado.

#### `funcion_dominante`

- `enseñar` → remate aclaratorio o condensador.
- `sintetizar` → remate muy comprimido.
- `persuadir` → remate de inclinación o cierre direccional.
- `captar_atencion` → remate impactante o proyectivo.
- `activar_interaccion` → remate invitador.
- `distribuir` → remate transmisible.
- `abrir_serie` / `continuar_serie` / `cerrar_serie` → remate proyectivo, enlazador o resolutivo según el caso.

#### `arquitectura_macro` y `tipo_de_bloque`

- arquitecturas con `remate` o bloques terminales tipo `remate` → favorecen fórmulas breves y de golpe final.
- arquitecturas con `cierre` → permiten remates más clausurantes o recapitulativos.
- arquitecturas con `resolucion` → favorecen remates que respondan a una tensión previa.

**Regla protocolaria de construcción:**

El `remate_verbal_local` debe construirse como la **salida verbal terminal del bloque**.

Su aplicación debe seguir esta secuencia:

1. identificar si el bloque admite o exige remate;
2. fijar hacia qué acción o efecto debe apuntar;
3. ajustar el grado de clausura según el régimen de resolución;
4. modular el tono según la función dominante;
5. ajustar la forma final según la arquitectura y el tipo de bloque;
6. redactar un remate breve, compatible con el resto del bloque.

**Plantilla replicable:**

    verificar si el bloque exige remate
    fijar accion o efecto esperado
    ajustar clausura con regimen_de_resolucion_buscada
    modular tono con funcion_dominante
    ajustar forma con arquitectura_macro y tipo_de_bloque
    redactar remate_verbal_local

**Interacciones relevantes:**

- el remate no debe contradecir la resolución local del bloque;
- debe ser compatible con la acción esperada y el efecto buscado;
- no debe competir con el texto principal, sino cerrar o proyectar lo que ese texto ya abrió;
- su forma depende mucho de si el bloque es terminal, semiterminal o todavía de núcleo.

**Ejemplos:**

- `guardar` + `sintetizar` + `resolucion_inmediata` → remate breve y reusable.
- `comentar` + `activar_interaccion` + `resolucion_abierta_a_continuidad` → remate abierto o discutible.
- `consumir_parte_siguiente` + `abrir_serie` → remate proyectivo.

---

### 6.6. `comparecencia_local.*`

**Campos que contribuyen:**

- `modalidad_de_guion`
- `modo_de_comparecencia_verbal`
- `comparecencia_performativa.cercania`
- `comparecencia_performativa.autoridad`
- `comparecencia_performativa.calidez`
- `comparecencia_performativa.intensidad`
- `comparecencia_performativa.sobriedad`
- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`
- `grado_de_dependencia_de_la_performance_visible`

---

#### `comparecencia_local.modalidad_de_guion`

**Contribución por valores:**

- `presentacion_a_camara` → la comparecencia local debe resolverse como presencia frontal directa.
- `voz_en_off` → la comparecencia local debe desplazarse hacia una voz no frontal o no plenamente visible.
- `escenificado` → la comparecencia local debe integrarse más a acción, situación o puesta en escena.
- `mixto` → la comparecencia local puede combinar frontalidad, mediación y escena, pero con jerarquía clara.

**Regla protocolaria:**
Este campo fija el **régimen principal de aparición local** del bloque.

---

#### `comparecencia_local.modo_de_comparecencia_verbal`

**Contribución por valores:**

- `oral_directo` → la comparecencia local debe sonar frontal, inmediata y poco mediada.
- `oral_guiado` → la comparecencia local debe sonar más pautada, conducida o explicativamente dirigida.
- `oral_escenico` → la comparecencia local debe integrar la voz con acción visible, gesto o situación.
- `oral_mixto` → la comparecencia local puede alternar regímenes de oralidad, pero sin incoherencia.

**Regla protocolaria:**
Este campo fija **cómo suena verbalmente** la comparecencia local dentro del régimen de guion elegido.

---

#### `comparecencia_local.comparecencia_performativa.cercania`

**Contribución por valores:**

- `baja` → la comparecencia local debe mantener mayor distancia expresiva.
- `media` → la comparecencia local debe equilibrar distancia y proximidad.
- `alta` → la comparecencia local debe sentirse próxima, directa y relacionalmente cercana.

**Regla protocolaria:**
Modula el **grado de proximidad expresiva** del bloque.

---

#### `comparecencia_local.comparecencia_performativa.autoridad`

**Contribución por valores:**

- `baja` → la comparecencia local debe evitar exceso de voz directiva o categórica.
- `media` → la comparecencia local debe sostener suficiente seguridad sin rigidez excesiva.
- `alta` → la comparecencia local debe transmitir criterio fuerte, seguridad y conducción clara.

**Regla protocolaria:**
Modula el **peso de criterio o firmeza** con que el bloque comparece.

---

#### `comparecencia_local.comparecencia_performativa.calidez`

**Contribución por valores:**

- `baja` → la comparecencia local debe mantener menor acogida afectiva.
- `media` → la comparecencia local debe conservar cordialidad controlada.
- `alta` → la comparecencia local debe sentirse amable, acogedora o afectivamente próxima.

**Regla protocolaria:**
Modula el **grado de acogida relacional** del bloque.

---

#### `comparecencia_local.comparecencia_performativa.intensidad`

**Contribución por valores:**

- `baja` → la comparecencia local debe sostener energía contenida.
- `media` → la comparecencia local debe mantener empuje equilibrado.
- `alta` → la comparecencia local debe comparecer con energía marcada, presión o énfasis visible.

**Regla protocolaria:**
Modula el **nivel de empuje performativo** del bloque.

---

#### `comparecencia_local.comparecencia_performativa.sobriedad`

**Contribución por valores:**

- `baja` → la comparecencia local puede admitir mayor soltura performativa.
- `media` → la comparecencia local debe equilibrar control y soltura.
- `alta` → la comparecencia local debe mantener contención, limpieza y control formal.

**Regla protocolaria:**
Modula el **grado de contención formal** del bloque.

---

### Influencias externas sobre `comparecencia_local`

Los siguientes campos no forman parte de la estructura interna de `comparecencia_local`, pero sí modulan **cómo se realiza o cuánto se hace visible** esa comparecencia:

#### `regimen_de_explicitacion_escenica`

- `ninguna` → la comparecencia local no necesita marcas escénicas visibles adicionales.
- `minima` → la comparecencia local puede mantenerse casi desnuda, con pocas marcas de ejecución.
- `moderada` → la comparecencia local puede recibir apoyo escénico regular.
- `detallada` → la comparecencia local puede requerir más señalamiento de ejecución o puesta en escena.

#### `tipo_de_escenificacion_admitida`

- `ninguna` → reduce la visibilidad escénica de la comparecencia local.
- `gestual_basica` → permite apoyo mínimo por gesto o postura.
- `presentacion_a_camara` → refuerza frontalidad simple.
- `demostrativa` → permite que la comparecencia local se apoye en objetos, procesos o demostración.
- `escenificada` → permite mayor integración con escena visible.
- `mixta_controlada` → permite combinaciones controladas.

#### `grado_de_dependencia_de_la_performance_visible`

- `baja` → la comparecencia local puede sostenerse casi solo por la voz.
- `media` → la comparecencia local mejora con performance visible, pero no depende totalmente de ella.
- `alta` → la comparecencia local requiere fuerte apoyo visible.
- `dominante` → la comparecencia local depende estructuralmente de la performance visible.

---

**Regla protocolaria de construcción del conjunto:**

La `comparecencia_local` debe construirse así:

1. fijar `modalidad_de_guion`;
2. fijar `modo_de_comparecencia_verbal`;
3. calibrar:
   - `cercania`
   - `autoridad`
   - `calidez`
   - `intensidad`
   - `sobriedad`
4. verificar después cuánto de esa comparecencia debe hacerse visible o escénicamente explícita según:
   - `regimen_de_explicitacion_escenica`
   - `tipo_de_escenificacion_admitida`
   - `grado_de_dependencia_de_la_performance_visible`

**Plantilla replicable:**

    fijar modalidad_de_guion
    fijar modo_de_comparecencia_verbal
    calibrar cercania, autoridad, calidez, intensidad y sobriedad
    verificar cuanto de esa comparecencia debe hacerse visible
    mantener la estructura interna de comparecencia_local sin alterarla

**Interacciones relevantes:**

- `modalidad_de_guion` y `modo_de_comparecencia_verbal` fijan el régimen principal de comparecencia;
- `cercania`, `autoridad`, `calidez`, `intensidad` y `sobriedad` modulan el delivery local;
- `regimen_de_explicitacion_escenica`, `tipo_de_escenificacion_admitida` y `grado_de_dependencia_de_la_performance_visible` no redefinen la comparecencia local, pero sí regulan cuánto de ella debe comparecer visiblemente o escénicamente;
- la estructura interna de `comparecencia_local` debe conservarse estable aunque cambie el grado de explicitación externa.

---

## 7. Capa de superficie textual

### Criterio general de la capa

La `capa de superficie textual` debe construirse como la región donde el bloque
incorpora **texto visible en pantalla** como recurso complementario.

Dentro de esta capa:

- `esquema_de_texto_en_pantalla` fija el régimen general del uso textual visible;
- `presencia` decide si el recurso aparece efectivamente en el bloque;
- `funcion` decide para qué aparece;
- `contenido` decide qué texto visible entra;
- `posicion_aproximada`, `duracion_en_pantalla` y `notas_de_coherencia` regulan
  cómo comparece ese texto sin romper el flujo del bloque.

Estas secciones deben leerse juntas, porque:

- no basta con activar texto en pantalla;
- hay que decidir **si aparece**, **para qué**, **qué dice** y **cómo se integra**
  al ritmo general de la pieza.

---

### 7.1. `inscripcion_de_superficie_textual.esquema_de_texto_en_pantalla`

**Campos que contribuyen:**

- `uso_de_texto_en_pantalla`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

#### `uso_de_texto_en_pantalla`

- `sin_texto_en_pantalla` → el esquema general debe tender a desactivar texto visible, salvo necesidad excepcional muy justificada.
- `texto_minimo_de_refuerzo` → el esquema debe favorecer apariciones breves, puntuales y estratégicas.
- `texto_distribuido_de_refuerzo` → el esquema debe permitir presencia textual en varios bloques, pero sin volverla soporte estructural dominante.
- `texto_estructural` → el esquema debe admitir que el texto visible sostenga parte del recorrido, de la progresión o de la fijación conceptual.
- `texto_variable_segun_bloque` → el esquema no impone uniformidad; debe resolverse localmente según la función de cada bloque.

#### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → el esquema debe orientar el texto a subrayar o aclarar lo verbal.
- `expansion` → el esquema debe permitir que el texto añada una capa adicional.
- `contraste` → el esquema debe permitir que el texto marque oposición o diferencia.
- `ambientacion` → el esquema debe permitir que el texto aporte tono o clima, pero sin invadir el núcleo verbal.
- `ritmizacion` → el esquema debe usar el texto como apoyo de transiciones, pausas o marcaciones del recorrido.
- `anclaje_conceptual` → el esquema debe favorecer texto que fije términos, fórmulas o relaciones centrales.
- `mixta_controlada` → el esquema puede combinar funciones, pero con prioridad explícita.

#### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → el esquema textual debe ser claramente accesorio.
- `media` → el esquema textual puede ser importante, pero no central.
- `alta` → el esquema textual puede cargar parte importante del funcionamiento del bloque.
- `dominante` → el esquema textual puede ser estructural para el bloque o para varios tramos de la pieza.

#### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → el esquema textual debe cargar más presencia al inicio.
- `concentrado_en_nucleo` → el esquema textual debe favorecer presencia en los bloques centrales.
- `concentrado_en_cierre` → el esquema textual debe reservar mayor peso al final.
- `distribuido_regularmente` → el esquema textual debe sostener una presencia relativamente estable entre bloques.
- `variable_segun_bloque` → el esquema textual debe dejar la decisión abierta a la función local.

**Regla protocolaria de construcción:**

El `esquema_de_texto_en_pantalla` debe construirse como el **régimen global de
uso del texto visible** en la pieza.

Su aplicación debe seguir esta secuencia:

1. fijar si el texto en pantalla está activo o no;
2. decidir para qué tipo de función se usará;
3. fijar cuánto depende la pieza de ese recurso;
4. decidir cómo se distribuye a lo largo del recorrido;
5. traducir esa combinación a un esquema global de uso textual visible.

**Plantilla replicable:**

    fijar uso_de_texto_en_pantalla
    fijar funcion_predominante_de_los_recursos_complementarios
    fijar grado_de_dependencia_de_recursos_complementarios
    fijar regimen_de_distribucion_de_recursos_complementarios
    derivar esquema_de_texto_en_pantalla

**Interacciones relevantes:**

- `uso_de_texto_en_pantalla` fija si el esquema tiende a activarse o desactivarse;
- `funcion_predominante_de_los_recursos_complementarios` define el para qué del esquema;
- `grado_de_dependencia_de_recursos_complementarios` define cuánto peso estructural puede tener;
- `regimen_de_distribucion_de_recursos_complementarios` define dónde comparece con mayor fuerza.

---

### 7.2. `texto_en_pantalla.presencia`

**Campos que contribuyen:**

- `uso_de_texto_en_pantalla`
- `grado_de_dependencia_de_recursos_complementarios`

**Contribución por valores:**

#### `uso_de_texto_en_pantalla`

- `sin_texto_en_pantalla` → la presencia debe resolverse normalmente como ausencia.
- `texto_minimo_de_refuerzo` → la presencia, si aparece, debe ser puntual y no constante.
- `texto_distribuido_de_refuerzo` → la presencia puede repetirse en varios bloques.
- `texto_estructural` → la presencia puede ser obligatoria en bloques clave o incluso en la mayor parte del recorrido.
- `texto_variable_segun_bloque` → la presencia se decide localmente según necesidad del bloque.

#### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → aunque el texto aparezca, no debe ser imprescindible.
- `media` → su presencia puede ser importante en varios bloques.
- `alta` → la presencia textual puede volverse funcionalmente fuerte.
- `dominante` → la presencia textual puede ser casi obligatoria en bloques relevantes.

**Regla protocolaria de construcción:**

La `presencia` debe construirse como la **decisión local de activación** del
texto en pantalla dentro del bloque.

Su aplicación debe seguir esta secuencia:

1. verificar si el régimen global activa o desactiva el texto;
2. verificar cuánto depende la pieza de recursos complementarios;
3. decidir si en este bloque la presencia es:
   - ausente,
   - puntual,
   - necesaria,
   - o estructural.

**Plantilla replicable:**

    verificar uso_de_texto_en_pantalla
    verificar grado_de_dependencia_de_recursos_complementarios
    decidir presencia local del texto

**Interacciones relevantes:**

- `uso_de_texto_en_pantalla` decide el margen general de presencia;
- `grado_de_dependencia_de_recursos_complementarios` decide cuánto cuesta retirar el recurso;
- la presencia local debe ser compatible con la función y la carga del bloque.

---

### 7.3. `texto_en_pantalla.funcion`

**Campos que contribuyen:**

- `funcion_predominante_de_los_recursos_complementarios`
- `funcion_dominante`
- `efecto_buscado`

**Contribución por valores:**

#### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → la función del texto debe ser aclarar, remarcar o subrayar.
- `expansion` → la función del texto debe ser añadir una capa adicional al bloque.
- `contraste` → la función del texto debe ser oponer, diferenciar o tensar.
- `ambientacion` → la función del texto debe ser contribuir al clima o tono.
- `ritmizacion` → la función del texto debe ser marcar pausas, cortes, transiciones o ritmo.
- `anclaje_conceptual` → la función del texto debe ser fijar una idea, término o fórmula central.
- `mixta_controlada` → la función puede combinar varias de las anteriores, con prioridad clara.

#### `funcion_dominante`

Restringe qué funciones del texto son más coherentes:

- `enseñar` → favorece funciones de refuerzo o anclaje conceptual.
- `sintetizar` → favorece condensación, fijación o cierre breve.
- `persuadir` → favorece contraste o marcación direccional.
- `captar_atencion` → favorece texto de impacto o de entrada fuerte.
- `activar_interaccion` → favorece texto que abra respuesta o tensión.
- `distribuir` → favorece texto resumible y transmisible.

#### `efecto_buscado`

Refina la función local del texto:

- `comprension_rapida` → favorece función aclaratoria;
- `curiosidad` → favorece función tensiva o incompleta;
- `retencion` → favorece fijación memorable;
- `deseo_de_guardar` → favorece fórmulas guardables;
- `deseo_de_comentar` → favorece marcas discutibles u oposicionales;
- `deseo_de_ver_hasta_el_final` → favorece función de progresión o reenganche.

**Regla protocolaria de construcción:**

La `funcion` debe construirse como el **papel preciso que el texto visible cumple
en este bloque**.

Su aplicación debe seguir esta secuencia:

1. identificar la función predominante global de los recursos;
2. verificar qué permite o refuerza la función dominante de la pieza;
3. ajustar según el efecto buscado en el receptor;
4. fijar una función textual local única o jerarquizada.

**Plantilla replicable:**

    fijar funcion_predominante_de_los_recursos_complementarios
    verificar compatibilidad con funcion_dominante
    ajustar con efecto_buscado
    fijar funcion local del texto en pantalla

**Interacciones relevantes:**

- la función global de los recursos da el marco principal;
- la función dominante de la pieza restringe funciones incompatibles;
- el efecto buscado decide el matiz local de la función textual.

---

### 7.4. `texto_en_pantalla.contenido`

**Campos que contribuyen:**

- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `configuracion_discursiva`
- `adecuacion_lexico_formulativa.registro_predominante`
- `adecuacion_lexico_formulativa.densidad_terminologica`
- `adecuacion_lexico_formulativa.grado_de_abstraccion`
- `adecuacion_lexico_formulativa.accesibilidad_lexica`
- `adecuacion_lexico_formulativa.variacion_lexica`
- `accion_esperada`

**Contribución por valores:**

#### `construccion_conceptual.*`

Estos campos deciden **qué entra** al texto visible:

- ideas nucleares → favorecen términos, fórmulas o núcleos centrales;
- ideas complementarias → favorecen matices o apoyos breves;
- ideas contrastivas → favorecen oposiciones visibles;
- ideas derivadas → favorecen consecuencias o aplicaciones resumidas;
- relaciones como `contraste`, `consecuencia`, `soporte` o `condicion` pueden hacerse visibles en forma breve.

#### `configuracion_discursiva`

Decide la forma del contenido:

- `definicional` → favorece definiciones o delimitaciones breves;
- `explicativa` → favorece frases aclaratorias;
- `argumentativa` → favorece tesis, razones o contrastes;
- `operativa` → favorece instrucciones o criterios;
- `sintetizadora` → favorece fórmulas comprimidas;
- `captativa` → favorece frases de impacto;
- `hibrida_controlada` → permite mezcla, pero con eje claro.

#### `adecuacion_lexico_formulativa.*`

Decide **cómo debe escribirse** el texto visible:

- registro;
- densidad;
- abstracción;
- accesibilidad;
- y variación léxica deben seguir siendo compatibles con el receptor y con la función del bloque.

#### `accion_esperada`

Refina qué clase de contenido conviene:

- `guardar` → favorece fórmulas breves, guardables y claras;
- `comentar` → favorece frases discutibles o abiertas;
- `compartir` → favorece contenido transmisible;
- `aplicar_lo_mostrado` → favorece criterios o instrucciones visibles;
- `consumir_parte_siguiente` → favorece texto proyectivo.

**Regla protocolaria de construcción:**

El `contenido` debe construirse como el **texto visible específico** que el bloque
hará aparecer en pantalla.

Su aplicación debe seguir esta secuencia:

1. seleccionar la idea o relación que conviene visibilizar;
2. decidir qué forma discursiva debe adoptar;
3. ajustar su formulación al perfil léxico del receptor;
4. verificar si debe orientar a una acción posterior;
5. redactar un contenido breve, visible y coherente con el bloque.

**Plantilla replicable:**

    seleccionar idea o relacion a visibilizar
    fijar forma discursiva
    ajustar al perfil lexico
    verificar orientacion por accion_esperada
    redactar contenido de texto en pantalla

**Interacciones relevantes:**

- el contenido no debe duplicar innecesariamente el texto oral principal;
- debe seleccionar solo aquello que convenga volver visible;
- debe ser compatible con la función del recurso y con la carga cognitiva del bloque.

---

### 7.5. `texto_en_pantalla.posicion_aproximada`, `duracion_en_pantalla`, `notas_de_coherencia`

**Campos que contribuyen:**

- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`
- `dinamica_procesual.continuidad`
- `dinamica_procesual.compresion`

---

#### `texto_en_pantalla.posicion_aproximada`

**Contribución por valores:**

##### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → favorece posiciones tempranas dentro del bloque o de la pieza.
- `concentrado_en_nucleo` → favorece posiciones medias.
- `concentrado_en_cierre` → favorece posiciones terminales.
- `distribuido_regularmente` → favorece posiciones repartidas de modo más estable.
- `variable_segun_bloque` → la posición se decide localmente.

##### `dinamica_procesual.continuidad`

- `baja` → permite posiciones más sueltas o más autónomas.
- `media` → exige posiciones compatibles con progresión moderada.
- `alta` → exige posiciones que no rompan el encadenamiento del bloque.

##### `dinamica_procesual.compresion`

- `baja` → permite mayor margen de inserción visible.
- `media` → exige equilibrio.
- `alta` → obliga a insertar texto con economía y precisión, evitando saturación.

**Regla protocolaria:**
La `posicion_aproximada` debe indicar **en qué tramo del bloque** aparece el texto visible sin romper el flujo principal.

---

#### `texto_en_pantalla.duracion_en_pantalla`

**Contribución por valores:**

##### `regimen_de_distribucion_de_recursos_complementarios`

- regímenes concentrados → favorecen duraciones puntuales pero estratégicas;
- regímenes distribuidos → favorecen varias duraciones breves o medias;
- regímenes variables → permiten duraciones heterogéneas por bloque.

##### `dinamica_procesual.continuidad`

- continuidad alta → desaconseja permanencias que frenen demasiado la progresión.
- continuidad baja o media → tolera más margen si el bloque lo admite.

##### `dinamica_procesual.compresion`

- compresión alta → favorece duraciones breves.
- compresión media → permite duraciones equilibradas.
- compresión baja → tolera mayor permanencia si la función lo justifica.

**Regla protocolaria:**
La `duracion_en_pantalla` debe fijarse como el **tiempo suficiente para legibilidad y función**, pero sin romper el ritmo del bloque.

---

#### `texto_en_pantalla.notas_de_coherencia`

**Contribución por valores:**

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → las notas deben verificar correspondencia directa entre texto visible y contenido verbal o visual.
- `conceptual` → las notas deben verificar que el texto represente una relación o estructura, no solo un objeto.
- `metaforico` → las notas deben verificar consistencia analógica.
- `atmosferico` → las notas deben verificar que el texto sostenga tono o clima sin romper comprensión.
- `mixto_controlado` → las notas deben verificar la jerarquía entre criterios y evitar mezcla arbitraria.

##### `dinamica_procesual.continuidad`

- continuidad alta → las notas deben vigilar que el texto no corte el flujo.
- continuidad baja o media → permiten más autonomía local del recurso.

##### `dinamica_procesual.compresion`

- compresión alta → las notas deben vigilar economía máxima y ausencia de exceso.
- compresión baja o media → permiten algo más de expansión visible si sigue siendo funcional.

**Regla protocolaria:**
Las `notas_de_coherencia` deben fijar **por qué ese texto visible es compatible**
con el bloque, con el recurso y con la pieza total.

---

**Regla protocolaria de construcción del conjunto:**

La `capa de superficie textual` debe construirse así:

1. fijar el esquema global de uso de texto en pantalla;
2. decidir la presencia local del recurso;
3. fijar la función textual del bloque;
4. seleccionar y redactar el contenido;
5. fijar posición, duración y criterios de coherencia;
6. verificar que el texto visible acompañe la pieza sin competir destructivamente con el núcleo verbal.

**Plantilla replicable:**

    fijar esquema_de_texto_en_pantalla
    decidir presencia local
    fijar funcion del texto
    construir contenido
    fijar posicion_aproximada
    fijar duracion_en_pantalla
    redactar notas_de_coherencia
    verificar integracion con el bloque

**Interacciones relevantes:**

- el esquema global condiciona la presencia local;
- la función condiciona el contenido;
- la coherencia condiciona posición y duración;
- la capa textual no debe duplicar sin necesidad ni competir excesivamente con la capa verbal.

**Ejemplos:**

#### Ejemplo 1

- `uso_de_texto_en_pantalla` → `texto_minimo_de_refuerzo`
- `funcion_predominante_de_los_recursos_complementarios` → `anclaje_conceptual`
- `accion_esperada` → `guardar`
- `criterio_de_coherencia_de_recursos_complementarios` → `conceptual`

**Resultado protocolario esperado:**

- poca presencia textual;
- texto breve;
- función de fijar una fórmula central;
- contenido comprimido y guardable;
- posición estratégica sin romper el flujo.

#### Ejemplo 2

- `uso_de_texto_en_pantalla` → `texto_distribuido_de_refuerzo`
- `funcion_predominante_de_los_recursos_complementarios` → `contraste`
- `regimen_de_distribucion_de_recursos_complementarios` → `distribuido_regularmente`
- `compresion` → `media`

**Resultado protocolario esperado:**

- varios bloques con texto visible;
- función oposicional o diferenciadora;
- contenido breve y contrastivo;
- duración controlada y buena continuidad entre apariciones.

---

## 8. Capa de superficie escénica

### Criterio general de la capa

La `capa de superficie escénica` debe construirse como la región donde el bloque
hace visible **cómo debe comparecer o realizarse corporal, gestual o visualmente**
la pieza, sin confundir esa explicitación con la capa verbal ni con los recursos
complementarios.

Dentro de esta capa:

- `esquema_de_indicaciones_escenicas` fija el régimen general de explicitación;
- `indicaciones_escenicas` fija qué debe mostrarse, señalarse o ejecutarse;
- `acciones_por_bloque` fija qué acciones visibles concretas realiza el bloque.

Estas tres secciones deben leerse juntas, porque:

- el esquema general decide cuánta explicitación es admisible;
- las indicaciones escénicas traducen ese esquema en instrucciones visibles;
- y las acciones por bloque concretan qué hace efectivamente el bloque en escena.

---

### 8.1. `inscripcion_de_superficie_escenica.esquema_de_indicaciones_escenicas`

**Campos que contribuyen:**

- `regimen_de_explicitacion_escenica`

**Contribución por valores:**

#### `regimen_de_explicitacion_escenica`

- `ninguna` → el esquema debe tender a no incluir indicaciones escénicas explícitas.  
  La pieza debe sostenerse casi sin señalamiento visible de ejecución.

- `minima` → el esquema debe incluir solo las indicaciones indispensables.  
  Debe señalar lo justo para orientar la realización sin cargar la superficie.

- `moderada` → el esquema debe permitir explicitación regular, pero controlada.  
  Las indicaciones pueden aparecer en varios bloques si ayudan a la claridad o a la performance.

- `detallada` → el esquema debe admitir explicitación abundante.  
  La ejecución visible, el gesto, la puesta en escena o el encuadre pueden quedar más desarrollados.

**Regla protocolaria de construcción:**

El `esquema_de_indicaciones_escenicas` debe construirse como el **régimen global
de explicitación de la ejecución visible**.

Su aplicación debe seguir esta secuencia:

1. identificar el régimen de explicitación declarado;
2. traducirlo a un nivel de presencia escénica:
   - ausente,
   - mínima,
   - regular,
   - o abundante;
3. verificar que ese nivel sea compatible con la comparecencia local y con la pieza total.

**Plantilla replicable:**

    fijar regimen_de_explicitacion_escenica
    traducirlo a nivel general de explicitacion
    verificar compatibilidad con la pieza

**Interacciones relevantes:**

- este esquema no decide aún qué acción concreta aparece, sino cuánto puede o debe explicitarse;
- condiciona tanto a `indicaciones_escenicas` como a `acciones_por_bloque`;
- debe leerse junto con el grado de dependencia de la performance visible, aunque no lo absorba como subcampo.

**Ejemplos:**

- `ninguna` → bloque casi sin señalamiento escénico explícito.
- `minima` → una o dos marcas escénicas puntuales.
- `moderada` → varias orientaciones visibles, pero sin saturar.
- `detallada` → guía abundante de ejecución, gesto o puesta en escena.

---

### 8.2. `indicaciones_escenicas.*`

**Campos que contribuyen:**

- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `regimen_de_encuadre_performativo`
- `grado_de_dependencia_de_la_performance_visible`

**Contribución por valores:**

#### `regimen_de_explicitacion_escenica`

- `ninguna` → las indicaciones escénicas deben tender a ausencia o residualidad.
- `minima` → las indicaciones deben limitarse a orientación indispensable.
- `moderada` → las indicaciones pueden acompañar regularmente la ejecución.
- `detallada` → las indicaciones pueden especificar con mayor amplitud cómo debe verse el bloque.

#### `tipo_de_escenificacion_admitida`

- `ninguna` → restringe fuertemente la posibilidad de indicación escénica; cualquier señalamiento debe ser excepcional.
- `gestual_basica` → las indicaciones deben centrarse en gesto, mirada, postura o movimiento mínimo.
- `presentacion_a_camara` → las indicaciones deben privilegiar frontalidad, presencia simple y orientación a cámara.
- `demostrativa` → las indicaciones pueden centrarse en mostrar objetos, procesos, materiales o apoyos.
- `escenificada` → las indicaciones pueden incluir situación, interacción, desplazamiento o puesta en escena más compleja.
- `mixta_controlada` → las indicaciones pueden combinar varios tipos, pero con jerarquía clara.

#### `densidad_de_accion_visible`

- `baja` → las indicaciones deben ser pocas y de baja intensidad.
- `media` → las indicaciones pueden repartirse con equilibrio entre quietud y acción.
- `alta` → las indicaciones pueden ser más numerosas o más activas dentro del bloque.

#### `regimen_de_encuadre_performativo`

- `estable` → las indicaciones deben ser compatibles con visualidad sobria y encuadre fijo o casi fijo.
- `dinamico_controlado` → las indicaciones pueden incluir cierta variación de encuadre o de atención visual.
- `variado` → las indicaciones pueden admitir mayor movilidad, alternancia o dinamismo visual.
- `mixto` → las indicaciones pueden cambiar de régimen según el tramo del bloque.

#### `grado_de_dependencia_de_la_performance_visible`

- `baja` → las indicaciones escénicas deben pesar poco; la voz y la estructura principal deben sostener el bloque.
- `media` → las indicaciones ayudan claramente, pero no cargan toda la eficacia.
- `alta` → las indicaciones tienen peso fuerte en la realización del bloque.
- `dominante` → las indicaciones son estructurales; sin ellas, el bloque pierde gran parte de su forma prevista.

**Regla protocolaria de construcción:**

Las `indicaciones_escenicas` deben construirse como la **traducción local visible**
del régimen escénico del bloque.

Su aplicación debe seguir esta secuencia:

1. fijar cuánto puede explicitarse;
2. decidir qué tipo de escenificación se admite;
3. ajustar la cantidad e intensidad de indicaciones según la densidad de acción visible;
4. verificar si el encuadre exige estabilidad o dinamismo;
5. ajustar el peso real de las indicaciones según la dependencia de la performance visible.

**Plantilla replicable:**

    fijar nivel de explicitacion
    fijar tipo_de_escenificacion_admitida
    ajustar cantidad segun densidad_de_accion_visible
    ajustar forma segun regimen_de_encuadre_performativo
    verificar peso real segun grado_de_dependencia_de_la_performance_visible

**Interacciones relevantes:**

- más explicitación no implica necesariamente más acción: puede implicar más guía visible;
- escenificaciones más simples restringen la clase de indicación posible;
- encuadres más estables favorecen indicaciones sobrias;
- mayor dependencia de performance visible aumenta la importancia real de esta capa.

**Ejemplos:**

- `minima` + `presentacion_a_camara` + `baja` + `estable` + `media` → indicaciones breves de frontalidad, gesto mínimo y mirada a cámara.
- `moderada` + `demostrativa` + `media` + `dinamico_controlado` + `alta` → indicaciones de mostrar objeto o proceso con variación visual controlada.
- `detallada` + `escenificada` + `alta` + `variado` + `dominante` → indicaciones amplias de acción, situación, desplazamiento y encuadre.

---

### 8.3. `acciones_por_bloque.*`

**Campos que contribuyen:**

- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `grado_de_dependencia_de_la_performance_visible`
- `funcion_dominante`
- `funcion_predominante_de_los_recursos_complementarios`

**Contribución por valores:**

#### `tipo_de_escenificacion_admitida`

- `ninguna` → las acciones por bloque deben tender a ausencia o mínima actividad visible.
- `gestual_basica` → las acciones deben centrarse en gesto simple, mirada, mano, postura o microdesplazamiento.
- `presentacion_a_camara` → las acciones deben ser compatibles con frontalidad simple: mirar, señalar, enfatizar, sostener presencia.
- `demostrativa` → las acciones pueden consistir en mostrar, comparar, señalar, manipular o evidenciar algo.
- `escenificada` → las acciones pueden implicar interacción, dramatización, desplazamiento o situación visible.
- `mixta_controlada` → las acciones pueden combinar varios regímenes, pero sin perder coherencia local.

#### `densidad_de_accion_visible`

- `baja` → el bloque debe tener pocas acciones visibles y de baja frecuencia.
- `media` → el bloque puede equilibrar habla y acción.
- `alta` → el bloque puede cargar muchas acciones visibles o una acción sostenida de alto peso.

#### `grado_de_dependencia_de_la_performance_visible`

- `baja` → las acciones cumplen función accesoria.
- `media` → las acciones ayudan a clarificar o sostener la pieza.
- `alta` → las acciones participan fuertemente en el sentido local.
- `dominante` → las acciones son parte estructural del bloque y no simple acompañamiento.

#### `funcion_dominante`

Restringe qué clase de acción conviene:

- `enseñar` → favorece acciones que muestren, aclaren o acompañen explicación.
- `sintetizar` → favorece acciones mínimas, precisas y no dispersivas.
- `persuadir` → favorece acciones que refuercen contraste, énfasis o dirección.
- `evaluar` → favorece acciones comparativas, señaladoras o de distinción.
- `diagnosticar` → favorece acciones de identificación, evidencia o lectura de rasgos.
- `captar_atencion` → favorece acciones de gancho o marcación fuerte.
- `activar_interaccion` → favorece acciones que abran respuesta o involucramiento.
- `convertir` → favorece acciones con dirección clara hacia decisión o cambio.
- `distribuir` → favorece acciones simples, transmisibles y de lectura rápida.
- `manifestar_comercialmente` → favorece acciones que muestren propuesta, valor o presencia de oferta.

#### `funcion_predominante_de_los_recursos_complementarios`

Refina para qué se usan las acciones:

- `refuerzo` → las acciones deben apoyar el núcleo verbal.
- `expansion` → las acciones pueden añadir una capa más de información o sentido.
- `contraste` → las acciones pueden hacer visible una oposición.
- `ambientacion` → las acciones pueden contribuir a tono o clima.
- `ritmizacion` → las acciones pueden marcar cortes, pausas o transiciones.
- `anclaje_conceptual` → las acciones pueden fijar visualmente una idea.
- `mixta_controlada` → varias funciones pueden coexistir, pero con jerarquía explícita.

**Regla protocolaria de construcción:**

Las `acciones_por_bloque` deben construirse como el **conjunto de acciones visibles
que el bloque realiza o exige** para sostener su función local.

Su aplicación debe seguir esta secuencia:

1. identificar qué tipo de escenificación admite el bloque;
2. decidir cuánta acción visible puede contener;
3. verificar cuánto depende el bloque de esa acción;
4. ajustar la clase de acción según la función dominante;
5. refinar su uso según la función predominante de los recursos complementarios.

**Plantilla replicable:**

    fijar tipo_de_escenificacion_admitida
    fijar densidad_de_accion_visible
    fijar grado_de_dependencia_de_la_performance_visible
    ajustar clase de accion segun funcion_dominante
    refinar uso segun funcion_predominante_de_los_recursos_complementarios
    formular acciones_por_bloque

**Interacciones relevantes:**

- escenificaciones más estáticas reducen repertorio de acción visible;
- escenificaciones demostrativas o escenificadas permiten acciones más precisas y visibles;
- mayor densidad de acción aumenta la carga de esta capa;
- funciones explicativas, diagnósticas u operativas suelen aprovechar mejor la acción como apoyo;
- si la dependencia de performance visible es baja, las acciones no deben competir con la capa verbal.

**Ejemplos:**

- `presentacion_a_camara` + `baja` + `media` + `enseñar` + `refuerzo` → acciones mínimas de señalar, mirar a cámara o marcar un punto clave.
- `demostrativa` + `media` + `alta` + `diagnosticar` + `anclaje_conceptual` → acciones de mostrar objeto, señalar rasgo o evidenciar diferencia.
- `escenificada` + `alta` + `dominante` + `captar_atencion` + `contraste` → acciones visibles fuertes que construyen tensión, diferencia o impacto.

---

## 9. Capa visual generable

### Criterio general de la capa

La `capa visual generable` debe construirse como la región donde el bloque puede
incorporar **imagen generada** como recurso complementario visible.

Dentro de esta capa, `imagen_en_pantalla.*` debe resolverse localmente en campos como:

- `presencia`
- `funcion`
- `descripcion_conceptual`
- `prompt_de_generacion`
- `notas_de_coherencia`

Estos campos no deben tratarse como decisiones aisladas.
Primero debe decidirse **si la imagen aparece**; después, **para qué aparece**;
luego, **qué debe mostrar**; y por último, **cómo garantizar su coherencia**
con el bloque y con la pieza.

---

### 9.1. `imagen_en_pantalla.*`

**Campos que contribuyen:**

- `uso_de_imagen_generada`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`
- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `configuracion_narrativa`

---

#### `imagen_en_pantalla.presencia`

**Campos que contribuyen:**

- `uso_de_imagen_generada`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

##### `uso_de_imagen_generada`

- `sin_imagen_generada` → la presencia debe resolverse normalmente como ausencia.
- `imagen_puntual_de_refuerzo` → la presencia debe aparecer solo en momentos estratégicos.
- `imagen_distribuida` → la presencia puede repetirse en varios bloques.
- `imagen_estructural` → la presencia puede ser necesaria en bloques clave o en buena parte del recorrido.
- `imagen_variable_segun_bloque` → la presencia debe decidirse localmente según la función del bloque.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → la imagen no debe ser imprescindible.
- `media` → la imagen puede ser importante, pero no central.
- `alta` → la imagen puede cargar parte fuerte de la eficacia del bloque.
- `dominante` → la imagen puede ser estructural para el bloque.

##### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → favorece presencia visual sobre todo en bloques iniciales.
- `concentrado_en_nucleo` → favorece presencia en bloques centrales.
- `concentrado_en_cierre` → favorece presencia visual en cierre o remate.
- `distribuido_regularmente` → favorece presencia repartida con cierta estabilidad.
- `variable_segun_bloque` → deja la decisión abierta a la función local.

**Regla protocolaria:**
La `presencia` debe construirse como la **decisión local de activación de imagen**
dentro del bloque.

---

#### `imagen_en_pantalla.funcion`

**Campos que contribuyen:**

- `funcion_predominante_de_los_recursos_complementarios`
- `construccion_conceptual`
- `configuracion_narrativa`

**Contribución por valores:**

##### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → la imagen debe aclarar, subrayar o apoyar lo verbal.
- `expansion` → la imagen puede añadir una capa de contenido o interpretación.
- `contraste` → la imagen debe hacer visible una oposición, diferencia o tensión.
- `ambientacion` → la imagen debe construir clima, tono o marco sensible.
- `ritmizacion` → la imagen debe ayudar a marcar transición, pausa o cambio de tramo.
- `anclaje_conceptual` → la imagen debe fijar una idea, término o relación central.
- `mixta_controlada` → la imagen puede combinar funciones, pero con prioridad clara.

##### `construccion_conceptual`

- ideas nucleares → favorecen imagen que represente el núcleo del bloque.
- ideas complementarias → favorecen imagen de apoyo o matiz.
- ideas contrastivas → favorecen imagen que oponga dos polos o estados.
- ideas derivadas → favorecen imagen que muestre consecuencia, aplicación o extensión.
- relaciones como `contraste`, `consecuencia`, `soporte` o `condicion` pueden orientar la función exacta de la imagen.

##### `configuracion_narrativa`

- `lineal_progresiva` → la imagen debe acompañar el avance sin romper continuidad.
- `contrastiva` → la imagen puede enfatizar oposición.
- `acumulativa` → la imagen puede sumar capas o hitos.
- `recapitulativa` → la imagen puede recuperar visualmente algo ya visto.
- `modular` → la imagen puede cumplir funciones más autónomas por bloque.
- `abierta_controlada` → la imagen puede flexibilizar su función, pero sin romper coherencia.

**Regla protocolaria:**
La `funcion` debe construirse como el **papel preciso que la imagen cumple**
en este bloque.

---

#### `imagen_en_pantalla.descripcion_conceptual`

**Campos que contribuyen:**

- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `criterio_de_coherencia_de_recursos_complementarios`
- `configuracion_narrativa`

**Contribución por valores:**

##### `construccion_conceptual.formulacion_de_la_idea`

- `proposicion_definicional` → la descripción debe girar en torno a una forma que delimite o haga reconocible una idea.
- `proposicion_relacional` → la descripción debe mostrar vínculos, conexiones o dependencias.
- `proposicion_argumentativa` → la descripción debe ayudar a hacer visible una tesis, apoyo o confrontación.
- `proposicion_operativa` → la descripción debe volver visible un uso, criterio, paso o aplicación.
- `formulacion_abierta_controlada` → la descripción puede ser más flexible, pero debe conservar un eje claro.

##### `construccion_conceptual.rol_conceptual`

- `nuclear` → la descripción debe centrarse en el núcleo principal del bloque.
- `complementaria` → la descripción debe apoyar o matizar.
- `puente` → la descripción debe conectar regiones del caso.
- `contrastiva` → la descripción debe organizar oposición o diferencia.
- `derivada` → la descripción debe mostrar consecuencia, ampliación o salida.

##### `construccion_conceptual.peso_relativo`

- peso alto → la descripción debe hacer más visible la idea o relación.
- peso bajo → la descripción debe mantener función secundaria o subordinada.

##### `construccion_conceptual.modo_de_presencia`

- `explicita` → la imagen debe hacer visible directamente la idea.
- `explicita_reiterada` → la imagen puede retomar de forma insistente la misma idea o motivo visual.
- `implicita_estructurante` → la imagen puede sugerir la idea sin decirla frontalmente.
- `localizada` → la imagen debe resolver una función puntual.
- `transversal` → la imagen puede sostener un motivo visual que atraviese varios bloques.

##### `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`

- `soporte` → la descripción debe mostrar apoyo entre elementos.
- `subordinacion` → la descripción debe mostrar jerarquía o dependencia.
- `expansion` → la descripción debe ampliar visualmente una idea previa.
- `contraste` → la descripción debe hacer visible oposición.
- `condicion` → la descripción debe sugerir requisito o condición.
- `consecuencia` → la descripción debe mostrar resultado o derivación.
- `equivalencia_parcial` → la descripción debe mostrar correspondencia limitada.
- `articulacion_libre_controlada` → la descripción puede ser más flexible, pero sin perder trazabilidad conceptual.

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → la descripción debe representar de forma directa lo que se quiere mostrar.
- `conceptual` → la descripción debe representar relaciones, estructuras o esquemas.
- `metaforico` → la descripción debe operar por analogía o traducción visual figurada.
- `atmosferico` → la descripción debe priorizar tono, clima o sensación.
- `mixto_controlado` → la descripción puede combinar criterios, pero con jerarquía explícita.

##### `configuracion_narrativa`

Modula si la descripción debe:

- avanzar linealmente;
- oponer;
- acumular;
- recuperar;
- o funcionar como módulo autónomo.

**Regla protocolaria:**
La `descripcion_conceptual` debe construirse como la **traducción visual inteligible**
de la idea o relación que el bloque quiere volver visible.

---

#### `imagen_en_pantalla.prompt_de_generacion`

**Campos que contribuyen:**

- `descripcion_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion`
- `grado_de_dependencia_de_recursos_complementarios`

**Contribución por valores:**

##### `descripcion_conceptual`

Aporta el contenido base que el prompt debe traducir a una instrucción de generación visual.

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → el prompt debe pedir una imagen directamente representativa.
- `conceptual` → el prompt debe pedir una imagen relacional, esquemática o estructural.
- `metaforico` → el prompt debe pedir una imagen analógica.
- `atmosferico` → el prompt debe pedir una imagen orientada a clima o tono.
- `mixto_controlado` → el prompt debe combinar criterios sin perder eje dominante.

##### `funcion`

Ajusta el énfasis del prompt:

- si la función es `refuerzo`, el prompt debe ser claro y estable;
- si es `contraste`, debe marcar oposición;
- si es `ambientacion`, debe reforzar tono;
- si es `anclaje_conceptual`, debe ayudar a fijar una idea central.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → el prompt puede ser más simple y accesorio.
- `media` → el prompt debe ser claro y útil.
- `alta` → el prompt debe ser más preciso y funcional.
- `dominante` → el prompt debe ser muy controlado, porque la imagen sostiene parte importante del bloque.

**Regla protocolaria:**
El `prompt_de_generacion` debe construirse como una **instrucción copiable**
capaz de producir una imagen coherente con la función y el contenido del bloque.

---

#### `imagen_en_pantalla.notas_de_coherencia`

**Campos que contribuyen:**

- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion`
- `configuracion_narrativa`
- `grado_de_dependencia_de_recursos_complementarios`

**Contribución por valores:**

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → las notas deben verificar correspondencia directa entre imagen y contenido.
- `conceptual` → las notas deben verificar que la imagen represente relación o estructura.
- `metaforico` → las notas deben verificar consistencia analógica.
- `atmosferico` → las notas deben verificar coherencia tonal.
- `mixto_controlado` → las notas deben verificar jerarquía entre criterios.

##### `funcion`

Las notas deben explicar por qué la imagen:

- refuerza;
- expande;
- contrasta;
- ambienta;
- ritma;
- o ancla conceptualmente.

##### `configuracion_narrativa`

Las notas deben verificar si la imagen:

- acompaña la progresión;
- intensifica contraste;
- suma elementos;
- recupera algo previo;
- o funciona modularmente.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → las notas pueden ser breves.
- `media` → las notas deben justificar bien el aporte.
- `alta` o `dominante` → las notas deben dejar claro por qué la imagen es estructuralmente importante.

**Regla protocolaria:**
Las `notas_de_coherencia` deben fijar **por qué la imagen es consistente**
con el bloque, con el recurso y con el criterio visual global.

---

**Regla protocolaria de construcción del conjunto:**

La `capa visual generable` debe construirse así:

1. decidir si la imagen está activa en el bloque;
2. fijar la función de esa imagen;
3. construir una descripción conceptual clara;
4. traducirla a un prompt de generación copiable;
5. añadir notas de coherencia que justifiquen su uso;
6. verificar que la imagen acompañe la pieza sin competir destructivamente con la capa verbal o con la superficie textual.

**Plantilla replicable:**

    decidir presencia de imagen
    fijar funcion local
    construir descripcion_conceptual
    traducir a prompt_de_generacion
    redactar notas_de_coherencia
    verificar integracion con el bloque

**Interacciones relevantes:**

- la presencia depende del régimen global y de la dependencia de recursos;
- la función condiciona la descripción conceptual;
- la descripción conceptual condiciona el prompt;
- las notas de coherencia verifican que la imagen no sea arbitraria;
- la imagen no debe duplicar inútilmente lo verbal, sino aportar una capa visual funcional.

**Ejemplos:**

#### Ejemplo 1

- `uso_de_imagen_generada` → `imagen_puntual_de_refuerzo`
- `funcion_predominante_de_los_recursos_complementarios` → `anclaje_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios` → `conceptual`
- `rol_conceptual` → `nuclear`

**Resultado protocolario esperado:**

- una imagen puntual;
- función de fijar una idea central;
- descripción conceptual orientada a relación o estructura;
- prompt claro y no meramente decorativo.

#### Ejemplo 2

- `uso_de_imagen_generada` → `imagen_distribuida`
- `funcion_predominante_de_los_recursos_complementarios` → `contraste`
- `criterio_de_coherencia_de_recursos_complementarios` → `metaforico`
- `configuracion_narrativa` → `contrastiva`

**Resultado protocolario esperado:**

- varias imágenes en distintos bloques;
- función oposicional;
- imágenes analógicas o figuradas que hagan visible una diferencia;
- coherencia visual sostenida a lo largo del recorrido.

#### Ejemplo 3

- `uso_de_imagen_generada` → `imagen_estructural`
- `funcion_predominante_de_los_recursos_complementarios` → `ambientacion`
- `grado_de_dependencia_de_recursos_complementarios` → `dominante`
- `criterio_de_coherencia_de_recursos_complementarios` → `atmosferico`

**Resultado protocolario esperado:**

- imagen con peso estructural en la pieza;
- función fuerte de tono o clima;
- prompts consistentes entre bloques;
- notas de coherencia más exigentes, porque la imagen participa en la arquitectura del bloque.

---

## 10. Capa audiovisual generable

### Criterio general de la capa

La `capa audiovisual generable` debe construirse como la región donde el bloque
puede incorporar **video generado** como recurso complementario visible y
temporal.

Dentro de esta capa, `video_en_pantalla.*` debe resolverse localmente en campos como:

- `presencia`
- `funcion`
- `descripcion_conceptual`
- `prompt_de_generacion`
- `duracion_sugerida`
- `notas_de_coherencia`

Estos campos no deben tratarse como decisiones aisladas.
Primero debe decidirse **si el video aparece**; después, **para qué aparece**;
luego, **qué debe mostrar**; después, **cuánto debe durar**; y por último,
**cómo garantizar su coherencia** con el bloque y con la pieza.

---

### 10.1. `video_en_pantalla.*`

**Campos que contribuyen:**

- `uso_de_video_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`
- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `configuracion_narrativa`
- `duracion_objetivo`

---

#### `video_en_pantalla.presencia`

**Campos que contribuyen:**

- `uso_de_video_generado`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

##### `uso_de_video_generado`

- `sin_video_generado` → la presencia debe resolverse normalmente como ausencia.
- `video_puntual_de_refuerzo` → la presencia debe aparecer solo en uno o pocos momentos estratégicos.
- `video_distribuido` → la presencia puede repetirse en varios bloques como apoyo frecuente.
- `video_estructural` → la presencia puede ser necesaria en bloques clave o en gran parte del recorrido.
- `video_variable_segun_bloque` → la presencia debe decidirse localmente según la función del bloque.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → el video no debe ser imprescindible.
- `media` → el video puede ser importante, pero no central.
- `alta` → el video puede cargar parte fuerte de la eficacia del bloque.
- `dominante` → el video puede ser estructural para el bloque o para varios tramos de la pieza.

##### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → favorece presencia audiovisual sobre todo en bloques iniciales.
- `concentrado_en_nucleo` → favorece presencia en bloques centrales.
- `concentrado_en_cierre` → favorece presencia en cierre, remate o resolución.
- `distribuido_regularmente` → favorece presencia repartida con cierta estabilidad.
- `variable_segun_bloque` → deja la decisión abierta a la función local.

**Regla protocolaria:**
La `presencia` debe construirse como la **decisión local de activación del video**
dentro del bloque.

---

#### `video_en_pantalla.funcion`

**Campos que contribuyen:**

- `funcion_predominante_de_los_recursos_complementarios`
- `construccion_conceptual`
- `configuracion_narrativa`

**Contribución por valores:**

##### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → el video debe aclarar, subrayar o apoyar lo verbal.
- `expansion` → el video puede añadir una capa adicional de contenido o desarrollo.
- `contraste` → el video debe hacer visible una oposición, diferencia o tensión.
- `ambientacion` → el video debe construir clima, tono o marco sensible.
- `ritmizacion` → el video debe ayudar a marcar transición, pausa, aceleración o cambio de tramo.
- `anclaje_conceptual` → el video debe fijar una idea, relación, proceso o estructura central.
- `mixta_controlada` → el video puede combinar funciones, pero con prioridad clara.

##### `construccion_conceptual`

- ideas nucleares → favorecen video que haga visible el núcleo principal del bloque.
- ideas complementarias → favorecen video de apoyo o matiz.
- ideas de puente → favorecen video que conecte o haga pasar entre regiones del caso.
- ideas contrastivas → favorecen video que haga visible oposición o diferencia.
- ideas derivadas → favorecen video que muestre consecuencia, aplicación o extensión.
- relaciones como `contraste`, `consecuencia`, `soporte` o `condicion` pueden orientar la función exacta del video.

##### `configuracion_narrativa`

- `lineal_progresiva` → el video debe acompañar el avance sin romper continuidad.
- `contrastiva` → el video puede enfatizar oposición o cambio de polo.
- `acumulativa` → el video puede sumar capas, momentos o elementos.
- `recapitulativa` → el video puede recuperar visualmente algo ya abierto.
- `modular` → el video puede cumplir funciones más autónomas por bloque.
- `abierta_controlada` → el video puede flexibilizar su función, pero sin romper coherencia.

**Regla protocolaria:**
La `funcion` debe construirse como el **papel preciso que el video cumple**
en este bloque.

---

#### `video_en_pantalla.descripcion_conceptual`

**Campos que contribuyen:**

- `construccion_conceptual.formulacion_de_la_idea`
- `construccion_conceptual.rol_conceptual`
- `construccion_conceptual.peso_relativo`
- `construccion_conceptual.modo_de_presencia`
- `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`
- `criterio_de_coherencia_de_recursos_complementarios`
- `configuracion_narrativa`

**Contribución por valores:**

##### `construccion_conceptual.formulacion_de_la_idea`

- `proposicion_definicional` → la descripción debe mostrar una forma audiovisual que delimite o haga reconocible una idea.
- `proposicion_relacional` → la descripción debe mostrar vínculos, transformaciones o dependencias entre elementos.
- `proposicion_argumentativa` → la descripción debe ayudar a hacer visible una tesis, apoyo o confrontación en movimiento.
- `proposicion_operativa` → la descripción debe volver visible un uso, criterio, paso o aplicación.
- `formulacion_abierta_controlada` → la descripción puede ser más flexible, pero debe conservar un eje claro.

##### `construccion_conceptual.rol_conceptual`

- `nuclear` → la descripción debe centrarse en el núcleo principal del bloque.
- `complementaria` → la descripción debe apoyar o matizar.
- `puente` → la descripción debe conectar regiones del caso o hacer visible un pasaje.
- `contrastiva` → la descripción debe organizar oposición, cambio o tensión.
- `derivada` → la descripción debe mostrar consecuencia, ampliación o salida.

##### `construccion_conceptual.peso_relativo`

- peso alto → la descripción debe hacer más visible o más estable la idea o relación.
- peso bajo → la descripción debe mantener función secundaria o subordinada.

##### `construccion_conceptual.modo_de_presencia`

- `explicita` → el video debe hacer visible directamente la idea.
- `explicita_reiterada` → el video puede retomar de forma insistente el mismo motivo audiovisual.
- `implicita_estructurante` → el video puede sugerir la idea sin exponerla frontalmente.
- `localizada` → el video debe resolver una función puntual en un tramo concreto.
- `transversal` → el video puede sostener un motivo audiovisual que atraviese varios bloques.

##### `construccion_conceptual.relaciones_con_otras_ideas.tipo_de_relacion`

- `soporte` → la descripción debe mostrar apoyo entre elementos.
- `subordinacion` → la descripción debe mostrar jerarquía o dependencia.
- `expansion` → la descripción debe ampliar visualmente una idea previa.
- `contraste` → la descripción debe hacer visible oposición, cambio o diferencia.
- `condicion` → la descripción debe sugerir requisito o preparación.
- `consecuencia` → la descripción debe mostrar derivación o resultado.
- `equivalencia_parcial` → la descripción debe mostrar correspondencia limitada.
- `articulacion_libre_controlada` → la descripción puede ser más flexible, pero sin perder trazabilidad conceptual.

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → la descripción debe representar directamente lo que se quiere mostrar.
- `conceptual` → la descripción debe representar relaciones, estructuras o procesos.
- `metaforico` → la descripción debe operar por analogía audiovisual.
- `atmosferico` → la descripción debe priorizar tono, clima o sensación.
- `mixto_controlado` → la descripción puede combinar criterios, pero con jerarquía explícita.

##### `configuracion_narrativa`

Modula si la descripción debe:

- avanzar linealmente;
- oponer;
- acumular;
- recuperar;
- o funcionar como módulo autónomo.

**Regla protocolaria:**
La `descripcion_conceptual` debe construirse como la **traducción audiovisual inteligible**
de la idea o relación que el bloque quiere volver visible en movimiento.

---

#### `video_en_pantalla.prompt_de_generacion`

**Campos que contribuyen:**

- `descripcion_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion`
- `grado_de_dependencia_de_recursos_complementarios`
- `duracion_objetivo`

**Contribución por valores:**

##### `descripcion_conceptual`

Aporta el contenido base que el prompt debe traducir a una instrucción de generación audiovisual.

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → el prompt debe pedir un video directamente representativo.
- `conceptual` → el prompt debe pedir un video relacional, esquemático o procesual.
- `metaforico` → el prompt debe pedir un video analógico.
- `atmosferico` → el prompt debe pedir un video orientado a clima o tono.
- `mixto_controlado` → el prompt debe combinar criterios sin perder eje dominante.

##### `funcion`

Ajusta el énfasis del prompt:

- si la función es `refuerzo`, el prompt debe ser claro y estable;
- si es `contraste`, debe marcar oposición, cambio o diferencia;
- si es `ambientacion`, debe reforzar tono;
- si es `ritmizacion`, debe facilitar transición o marcación temporal;
- si es `anclaje_conceptual`, debe fijar una idea central.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → el prompt puede ser más simple y accesorio.
- `media` → el prompt debe ser claro y útil.
- `alta` → el prompt debe ser más preciso y funcional.
- `dominante` → el prompt debe ser muy controlado, porque el video sostiene parte importante del bloque.

##### `duracion_objetivo`

- `muy_breve` → el prompt debe favorecer clips mínimos y de lectura rápida.
- `breve` → el prompt debe favorecer clips compactos.
- `breve_expandido` → el prompt puede admitir clips algo más desarrollados, sin romper el ritmo global.

**Regla protocolaria:**
El `prompt_de_generacion` debe construirse como una **instrucción copiable**
capaz de producir un clip coherente con la función, el contenido y la escala temporal del bloque.

---

#### `video_en_pantalla.duracion_sugerida`

**Campos que contribuyen:**

- `duracion_objetivo`
- `funcion`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

##### `duracion_objetivo`

- `muy_breve` → la duración sugerida debe tender a clips mínimos.
- `breve` → la duración sugerida debe tender a clips compactos.
- `breve_expandido` → la duración sugerida puede admitir clips algo más desarrollados.

##### `funcion`

- `refuerzo` → favorece duraciones breves.
- `expansion` → puede justificar algo más de desarrollo.
- `contraste` → favorece clips breves o medios que hagan visible la oposición sin dispersión.
- `ambientacion` → puede permitir duraciones algo más sostenidas si no rompen ritmo.
- `ritmizacion` → favorece duraciones precisas y controladas.
- `anclaje_conceptual` → favorece clips lo bastante claros como para fijar una idea, sin exceder.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → la duración debe mantenerse claramente subordinada al núcleo verbal.
- `media` → la duración puede ser relevante, pero controlada.
- `alta` → la duración puede crecer si el bloque depende fuertemente del video.
- `dominante` → la duración puede ser estructural dentro del bloque.

##### `regimen_de_distribucion_de_recursos_complementarios`

- regímenes concentrados → favorecen clips puntuales, pero estratégicos.
- distribuido_regularmente → favorece clips más breves y equilibrados entre bloques.
- variable_segun_bloque → permite duraciones heterogéneas según función local.

**Regla protocolaria:**
La `duracion_sugerida` debe fijarse como el **tiempo suficiente para cumplir la función audiovisual**
sin romper el ritmo del bloque ni de la pieza.

---

#### `video_en_pantalla.notas_de_coherencia`

**Campos que contribuyen:**

- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion`
- `configuracion_narrativa`
- `grado_de_dependencia_de_recursos_complementarios`
- `duracion_sugerida`

**Contribución por valores:**

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → las notas deben verificar correspondencia directa entre video y contenido.
- `conceptual` → las notas deben verificar que el video represente relación, estructura o proceso.
- `metaforico` → las notas deben verificar consistencia analógica.
- `atmosferico` → las notas deben verificar coherencia tonal o climática.
- `mixto_controlado` → las notas deben verificar jerarquía entre criterios.

##### `funcion`

Las notas deben explicar por qué el video:

- refuerza;
- expande;
- contrasta;
- ambienta;
- ritmiza;
- o ancla conceptualmente.

##### `configuracion_narrativa`

Las notas deben verificar si el video:

- acompaña la progresión;
- intensifica contraste;
- suma elementos;
- recupera algo previo;
- o funciona modularmente.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → las notas pueden ser breves.
- `media` → las notas deben justificar bien el aporte.
- `alta` o `dominante` → las notas deben dejar claro por qué el video es estructuralmente importante.

##### `duracion_sugerida`

Las notas deben verificar que la duración no rompa:

- continuidad;
- compresión global;
- o predominio de la capa verbal cuando ésta siga siendo dominante.

**Regla protocolaria:**
Las `notas_de_coherencia` deben fijar **por qué el video es consistente**
con el bloque, con el recurso y con el criterio audiovisual global.

---

**Regla protocolaria de construcción del conjunto:**

La `capa audiovisual generable` debe construirse así:

1. decidir si el video está activo en el bloque;
2. fijar la función de ese video;
3. construir una descripción conceptual clara;
4. traducirla a un prompt de generación copiable;
5. fijar una duración sugerida compatible con la pieza;
6. añadir notas de coherencia que justifiquen su uso;
7. verificar que el video acompañe la pieza sin competir destructivamente con la capa verbal o con la superficie textual.

**Plantilla replicable:**

    decidir presencia de video
    fijar funcion local
    construir descripcion_conceptual
    traducir a prompt_de_generacion
    fijar duracion_sugerida
    redactar notas_de_coherencia
    verificar integracion con el bloque

**Interacciones relevantes:**

- la presencia depende del régimen global y de la dependencia de recursos;
- la función condiciona la descripción conceptual;
- la descripción conceptual condiciona el prompt;
- `duracion_objetivo` modula la duración sugerida;
- las notas de coherencia verifican que el video no sea arbitrario;
- el video no debe duplicar inútilmente lo verbal, sino aportar una capa audiovisual funcional.

**Ejemplos:**

#### Ejemplo 1

- `uso_de_video_generado` → `video_puntual_de_refuerzo`
- `funcion_predominante_de_los_recursos_complementarios` → `anclaje_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios` → `conceptual`
- `duracion_objetivo` → `muy_breve`
- `rol_conceptual` → `nuclear`

**Resultado protocolario esperado:**

- un clip puntual;
- función de fijar una idea central;
- descripción conceptual orientada a relación o proceso;
- prompt claro y no decorativo;
- duración mínima o muy breve.

#### Ejemplo 2

- `uso_de_video_generado` → `video_distribuido`
- `funcion_predominante_de_los_recursos_complementarios` → `contraste`
- `criterio_de_coherencia_de_recursos_complementarios` → `metaforico`
- `configuracion_narrativa` → `contrastiva`
- `duracion_objetivo` → `breve`

**Resultado protocolario esperado:**

- varios clips en distintos bloques;
- función oposicional;
- videos analógicos o figurados que hagan visible una diferencia;
- coherencia audiovisual sostenida;
- duraciones compactas.

#### Ejemplo 3

- `uso_de_video_generado` → `video_estructural`
- `funcion_predominante_de_los_recursos_complementarios` → `ritmizacion`
- `grado_de_dependencia_de_recursos_complementarios` → `dominante`
- `criterio_de_coherencia_de_recursos_complementarios` → `mixto_controlado`
- `duracion_objetivo` → `breve_expandido`

**Resultado protocolario esperado:**

- video con peso estructural en la pieza;
- función fuerte de ritmo y articulación;
- prompts consistentes entre bloques;
- duraciones algo más desarrolladas;
- notas de coherencia más exigentes, porque el video participa en la arquitectura del bloque.

---

## 11. Capa auditiva

### Criterio general de la capa

La `capa auditiva` debe construirse como la región donde el bloque puede
incorporar **recursos sonoros generables o acompañamientos auditivos**
que no pertenecen al núcleo verbal principal, pero que sí pueden:

- reforzar;
- expandir;
- contrastar;
- ambientar;
- ritmizar;
- o anclar conceptualmente

el recorrido del bloque.

Dentro de esta capa hay dos zonas distintas:

- `recurso_auditivo.*`  
  cuando se quiere formular un recurso sonoro generable de manera explícita,
  con presencia, función, tipo, descripción conceptual, prompt, duración y notas
  de coherencia;

- `musica`, `sonido_ambiente`, `efecto_sonoro`  
  cuando se quiere especificar clases más tradicionales de acompañamiento
  auditivo dentro del bloque.

Ambas zonas deben leerse juntas, porque:

- el `recurso_auditivo.*` fija un régimen más explícito y generable;
- mientras que `musica`, `sonido_ambiente` y `efecto_sonoro` permiten
  concretar cómo comparece ese acompañamiento en la práctica local del bloque.

---

### 11.1. `recurso_auditivo.*`

**Campos que contribuyen:**

- `uso_de_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`
- `acompanamiento_auditivo`

---

#### `recurso_auditivo.presencia`

**Campos que contribuyen:**

- `uso_de_audio_generado`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

##### `uso_de_audio_generado`

- `sin_audio_generado` → la presencia debe resolverse normalmente como ausencia.
- `audio_puntual_de_refuerzo` → la presencia debe activarse solo en momentos estratégicos.
- `audio_distribuido` → la presencia puede repetirse en varios bloques o tramos.
- `audio_estructural` → la presencia puede ser necesaria en bloques clave o en buena parte del recorrido.
- `audio_variable_segun_bloque` → la presencia debe decidirse localmente según la función del bloque.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → el recurso auditivo no debe ser imprescindible.
- `media` → el recurso puede ser importante, pero no central.
- `alta` → el recurso puede cargar parte fuerte de la eficacia del bloque.
- `dominante` → el recurso puede ser estructural para el bloque.

##### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → favorece presencia sonora al inicio.
- `concentrado_en_nucleo` → favorece presencia auditiva en bloques centrales.
- `concentrado_en_cierre` → favorece presencia al final, en remate o resolución.
- `distribuido_regularmente` → favorece presencia repartida con cierta estabilidad.
- `variable_segun_bloque` → deja la decisión abierta a la función local.

**Regla protocolaria:**
La `presencia` debe construirse como la **decisión local de activación del recurso auditivo** en el bloque.

---

#### `recurso_auditivo.funcion`

**Campos que contribuyen:**

- `funcion_predominante_de_los_recursos_complementarios`
- `acompanamiento_auditivo`

**Contribución por valores:**

##### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → el recurso auditivo debe subrayar o apoyar lo verbal.
- `expansion` → el recurso auditivo puede añadir una capa adicional de sentido.
- `contraste` → el recurso auditivo debe marcar oposición, giro o diferencia.
- `ambientacion` → el recurso auditivo debe construir clima, tono o marco sensible.
- `ritmizacion` → el recurso auditivo debe marcar pausas, cortes, transiciones o progresión.
- `anclaje_conceptual` → el recurso auditivo debe ayudar a fijar una idea o momento central.
- `mixta_controlada` → el recurso puede combinar varias funciones, pero con prioridad clara.

##### `acompanamiento_auditivo`

- `musica` → orienta la función hacia atmósfera, tono, ritmo o apoyo emocional.
- `sonido_ambiente` → orienta la función hacia contexto o inmersión.
- `efecto_sonoro` → orienta la función hacia énfasis local, giro, marca o transición.

**Regla protocolaria:**
La `funcion` debe construirse como el **papel preciso que el recurso auditivo cumple** en el bloque.

---

#### `recurso_auditivo.tipo_de_recurso`

**Campos que contribuyen:**

- `acompanamiento_auditivo`
- `funcion_predominante_de_los_recursos_complementarios`

**Contribución por valores:**

##### `acompanamiento_auditivo`

- `musica` → el tipo de recurso debe tender a música, base sonora o capa tonal.
- `sonido_ambiente` → el tipo de recurso debe tender a atmósfera, entorno o fondo inmersivo.
- `efecto_sonoro` → el tipo de recurso debe tender a marca puntual, golpe, transición, señal o énfasis.

##### `funcion_predominante_de_los_recursos_complementarios`

Refina el tipo:

- si la función es `ambientacion`, favorece música o ambiente;
- si es `ritmizacion`, favorece pulsos, marcas o efectos rítmicos;
- si es `contraste`, favorece efectos o cambios sonoros más marcados;
- si es `refuerzo`, favorece tipos discretos y subordinados.

**Regla protocolaria:**
El `tipo_de_recurso` debe construirse como la **clase sonora dominante** del apoyo auditivo local.

---

#### `recurso_auditivo.descripcion_conceptual`

**Campos que contribuyen:**

- `funcion_predominante_de_los_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`
- `acompanamiento_auditivo`

**Contribución por valores:**

##### `funcion_predominante_de_los_recursos_complementarios`

La descripción debe explicar si el recurso:

- refuerza;
- expande;
- contrasta;
- ambienta;
- ritmiza;
- o ancla conceptualmente.

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → la descripción debe referirse a un recurso sonoro directamente asociado al contenido.
- `conceptual` → la descripción debe representar una estructura, relación o estado mediante sonido.
- `metaforico` → la descripción debe operar por analogía sonora.
- `atmosferico` → la descripción debe priorizar clima, sensación o tono.
- `mixto_controlado` → la descripción puede combinar criterios, pero con jerarquía explícita.

##### `acompanamiento_auditivo`

Ayuda a precisar si la descripción se orienta a:

- música;
- ambiente;
- o efecto puntual.

**Regla protocolaria:**
La `descripcion_conceptual` debe construirse como la **traducción sonora inteligible**
de la función que el bloque necesita.

---

#### `recurso_auditivo.prompt_de_generacion`

**Campos que contribuyen:**

- `descripcion_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion`
- `tipo_de_recurso`
- `grado_de_dependencia_de_recursos_complementarios`

**Contribución por valores:**

##### `descripcion_conceptual`

Aporta el contenido base del prompt.

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → el prompt debe pedir un recurso sonoro directamente representativo.
- `conceptual` → el prompt debe pedir un recurso que traduzca relación o estructura.
- `metaforico` → el prompt debe pedir una analogía sonora.
- `atmosferico` → el prompt debe pedir una capa auditiva de tono o clima.
- `mixto_controlado` → el prompt debe combinar criterios sin perder eje dominante.

##### `funcion` y `tipo_de_recurso`

Ajustan si el prompt debe pedir:

- una base musical;
- un ambiente;
- un efecto;
- o una combinación controlada.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → el prompt puede ser más simple.
- `media` → el prompt debe ser claro y útil.
- `alta` → el prompt debe ser más preciso.
- `dominante` → el prompt debe ser muy controlado, porque el sonido sostiene parte importante del bloque.

**Regla protocolaria:**
El `prompt_de_generacion` debe construirse como una **instrucción copiable**
capaz de producir un recurso sonoro coherente con la función y el bloque.

---

#### `recurso_auditivo.duracion_sugerida`

**Campos que contribuyen:**

- `uso_de_audio_generado`
- `funcion`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`

**Contribución por valores:**

##### `uso_de_audio_generado`

- `audio_puntual_de_refuerzo` → favorece duraciones breves o puntuales.
- `audio_distribuido` → favorece varias duraciones breves o medias.
- `audio_estructural` → puede justificar duraciones mayores o continuidad entre tramos.
- `audio_variable_segun_bloque` → permite duraciones heterogéneas.

##### `funcion`

- `refuerzo` → favorece duraciones discretas.
- `expansion` → puede justificar algo más de desarrollo.
- `contraste` → favorece duraciones breves o medias de alto efecto.
- `ambientacion` → puede admitir mayor continuidad.
- `ritmizacion` → favorece duraciones precisas y controladas.
- `anclaje_conceptual` → favorece una duración suficiente para fijar el momento clave.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → la duración debe ser subordinada.
- `media` → la duración puede ser relevante, pero controlada.
- `alta` → la duración puede crecer si el bloque depende del recurso.
- `dominante` → la duración puede ser estructural dentro del bloque.

##### `regimen_de_distribucion_de_recursos_complementarios`

- regímenes concentrados → favorecen apoyos puntuales y estratégicos;
- regímenes distribuidos → favorecen varias apariciones controladas;
- regímenes variables → permiten duraciones heterogéneas.

**Regla protocolaria:**
La `duracion_sugerida` debe fijarse como el **tiempo suficiente para cumplir la función sonora**
sin romper el ritmo del bloque.

---

#### `recurso_auditivo.notas_de_coherencia`

**Campos que contribuyen:**

- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion`
- `grado_de_dependencia_de_recursos_complementarios`
- `acompanamiento_auditivo`

**Contribución por valores:**

##### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → las notas deben verificar correspondencia directa entre recurso y contenido.
- `conceptual` → las notas deben verificar que el recurso traduzca estructura o relación.
- `metaforico` → las notas deben verificar consistencia analógica.
- `atmosferico` → las notas deben verificar coherencia tonal o climática.
- `mixto_controlado` → las notas deben verificar jerarquía entre criterios.

##### `funcion`

Las notas deben explicar por qué el recurso:

- refuerza;
- expande;
- contrasta;
- ambienta;
- ritmiza;
- o ancla conceptualmente.

##### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → las notas pueden ser breves.
- `media` → las notas deben justificar bien el aporte.
- `alta` o `dominante` → las notas deben dejar claro por qué el recurso es estructuralmente importante.

##### `acompanamiento_auditivo`

Las notas deben precisar si la coherencia se juega principalmente en:

- música;
- ambiente;
- o efecto puntual.

**Regla protocolaria:**
Las `notas_de_coherencia` deben fijar **por qué el recurso auditivo es consistente**
con el bloque, con la pieza y con el criterio sonoro adoptado.

---

### 11.2. `musica`, `sonido_ambiente`, `efecto_sonoro`

**Campos que contribuyen:**

- `acompanamiento_auditivo`
- `uso_de_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`

**Contribución por valores:**

#### `acompanamiento_auditivo`

- `musica` → debe tender a construir atmósfera, ritmo, tono o apoyo emocional.
- `sonido_ambiente` → debe tender a construir contexto, inmersión o entorno sensible.
- `efecto_sonoro` → debe tender a marcar énfasis local, giro, corte o transición.

#### `uso_de_audio_generado`

- `sin_audio_generado` → desactiva normalmente estas capas como recursos generables adicionales.
- `audio_puntual_de_refuerzo` → permite activarlas de forma puntual.
- `audio_distribuido` → permite que aparezcan en varios bloques.
- `audio_estructural` → permite que sostengan parte del recorrido.
- `audio_variable_segun_bloque` → deja su activación a decisión local.

#### `funcion_predominante_de_los_recursos_complementarios`

- `refuerzo` → orienta `musica`, `sonido_ambiente` y `efecto_sonoro` a acompañar el núcleo verbal.
- `expansion` → orienta el sonido a añadir una capa más de sentido.
- `contraste` → orienta el sonido a marcar diferencia o cambio.
- `ambientacion` → orienta especialmente música y ambiente a sostener clima.
- `ritmizacion` → orienta especialmente música y efecto sonoro a marcar tiempo, cortes o progresión.
- `anclaje_conceptual` → orienta el sonido a fijar una idea o momento clave.
- `mixta_controlada` → permite varias orientaciones, pero con prioridad clara.

#### `grado_de_dependencia_de_recursos_complementarios`

- `baja` → música, ambiente o efecto deben ser accesorios.
- `media` → pueden apoyar claramente, pero sin cargar el centro estructural.
- `alta` → pueden tener peso fuerte en la eficacia del bloque.
- `dominante` → pueden volverse estructurales dentro del bloque.

#### `regimen_de_distribucion_de_recursos_complementarios`

- `concentrado_en_apertura` → favorece usos sonoros iniciales.
- `concentrado_en_nucleo` → favorece uso en el desarrollo.
- `concentrado_en_cierre` → favorece uso en remate o salida.
- `distribuido_regularmente` → favorece presencia repartida.
- `variable_segun_bloque` → deja la distribución a la función local.

#### `criterio_de_coherencia_de_recursos_complementarios`

- `literal` → la música, ambiente o efecto deben corresponder directamente al contenido.
- `conceptual` → deben traducir una relación o estructura más que un objeto literal.
- `metaforico` → deben operar por analogía sonora.
- `atmosferico` → deben priorizar clima, tono o sensación.
- `mixto_controlado` → pueden combinar criterios, pero con jerarquía explícita.

**Regla protocolaria de construcción:**

`musica`, `sonido_ambiente` y `efecto_sonoro` deben construirse como
**subregímenes auditivos concretos** del bloque.

Su aplicación debe seguir esta secuencia:

1. verificar si el acompañamiento auditivo está activo;
2. decidir cuál de los tres regímenes comparece:
   - música,
   - ambiente,
   - efecto;
3. fijar su orientación concreta según la función predominante;
4. ajustar su peso real según la dependencia de recursos;
5. verificar distribución y coherencia.

**Plantilla replicable:**

    verificar si hay acompanamiento_auditivo
    decidir si comparece como musica, sonido_ambiente o efecto_sonoro
    fijar orientacion concreta segun funcion_predominante
    ajustar peso segun grado_de_dependencia
    verificar distribucion y coherencia

**Interacciones relevantes:**

- `acompanamiento_auditivo` fija la clase general del apoyo;
- `uso_de_audio_generado` decide si puede aparecer y con qué frecuencia;
- la función predominante decide su orientación concreta;
- la dependencia decide cuánto pesa realmente;
- la coherencia decide cómo debe sonar para no romper unidad con el bloque.

---

**Regla protocolaria de construcción del conjunto:**

La `capa auditiva` debe construirse así:

1. decidir si el bloque activa recurso auditivo generable;
2. fijar su función, tipo, descripción, prompt, duración y coherencia;
3. decidir si comparece como música, ambiente o efecto;
4. verificar que el sonido acompañe el bloque sin competir destructivamente con la capa verbal;
5. asegurar que su peso auditivo sea coherente con el régimen global de recursos.

**Plantilla replicable:**

    decidir presencia de recurso_auditivo
    fijar funcion
    fijar tipo_de_recurso
    construir descripcion_conceptual
    traducir a prompt_de_generacion
    fijar duracion_sugerida
    redactar notas_de_coherencia
    decidir musica, sonido_ambiente o efecto_sonoro
    verificar integracion con el bloque

**Interacciones relevantes:**

- el recurso auditivo no debe invadir ni tapar la capa verbal;
- `musica`, `sonido_ambiente` y `efecto_sonoro` concretan localmente el régimen auditivo;
- la función condiciona el tipo de recurso;
- la coherencia condiciona cómo debe sonar;
- la dependencia decide cuánto puede descansar el bloque en esta capa.

**Ejemplos:**

#### Ejemplo 1

- `uso_de_audio_generado` → `audio_puntual_de_refuerzo`
- `funcion_predominante_de_los_recursos_complementarios` → `ritmizacion`
- `acompanamiento_auditivo` → `efecto_sonoro`
- `grado_de_dependencia_de_recursos_complementarios` → `baja`

**Resultado protocolario esperado:**

- recurso auditivo puntual;
- efecto sonoro breve;
- función de marcar corte, giro o transición;
- bajo peso estructural.

#### Ejemplo 2

- `uso_de_audio_generado` → `audio_distribuido`
- `funcion_predominante_de_los_recursos_complementarios` → `ambientacion`
- `acompanamiento_auditivo` → `sonido_ambiente`
- `criterio_de_coherencia_de_recursos_complementarios` → `atmosferico`

**Resultado protocolario esperado:**

- varios apoyos auditivos distribuidos;
- clima o entorno sensible sostenido;
- coherencia tonal entre bloques.

#### Ejemplo 3

- `uso_de_audio_generado` → `audio_estructural`
- `funcion_predominante_de_los_recursos_complementarios` → `anclaje_conceptual`
- `acompanamiento_auditivo` → `musica`
- `grado_de_dependencia_de_recursos_complementarios` → `dominante`

**Resultado protocolario esperado:**

- música con peso estructural;
- función fuerte de fijar tono o idea central;
- recurso auditivo importante dentro del recorrido del bloque.

---

## 12. Capa de continuidad transversal

### Criterio general de la capa

La `capa de continuidad transversal` debe construirse como la región donde el bloque
se vincula:

- con el bloque anterior;
- con el bloque siguiente;
- con el recorrido argumental global;
- y con la continuidad atencional de la pieza.

Por tanto, esta capa no describe el contenido principal del bloque, sino su
**función de enlace** dentro del trayecto mayor.

Debe preservarse la estructura local que aparece en la Manifestación codominial compuesta:

- `continuidad_transversal.continuidad_con_bloque_anterior`
- `continuidad_transversal.proyeccion_hacia_bloque_siguiente`
- `continuidad_transversal.continuidad_argumental`
- `continuidad_transversal.continuidad_atencional`

---

### 12.1. `continuidad_transversal.*`

**Campos que contribuyen:**

- `configuracion_narrativa`
- `arquitectura_macro`
- `regimen_de_resolucion_buscada`
- `estado_atencional`
- `regimen_de_activacion_atencional`
- `dinamica_procesual.continuidad`
- `dinamica_procesual.recapitulacion`
- `alcance_de_realizacion`

---

#### `continuidad_transversal.continuidad_con_bloque_anterior`

**Contribución por valores:**

##### `configuracion_narrativa`

- `lineal_progresiva` → la continuidad con el bloque anterior debe ser fuerte, directa y poco disruptiva.
- `apertura_profundizacion_cierre` → la continuidad debe reflejar el paso funcional entre entrada, desarrollo y cierre.
- `contrastiva` → la continuidad puede darse por oposición, corrección o inversión respecto al bloque anterior.
- `acumulativa` → la continuidad debe darse por suma o adición de elementos.
- `recapitulativa` → la continuidad debe recuperar explícitamente algo del bloque anterior.
- `modular` → la continuidad puede ser más débil o más autónoma localmente.
- `abierta_controlada` → la continuidad puede flexibilizarse, pero sin romper la inteligibilidad del trayecto.

##### `arquitectura_macro`

- arquitecturas más lineales → favorecen continuidad más estable entre bloques.
- arquitecturas de `lista` → la continuidad puede darse por serie o enumeración.
- arquitecturas de `contraste` → la continuidad puede darse por oposición entre polos.
- arquitecturas de `secuencia` → la continuidad debe darse por paso o progresión.

##### `dinamica_procesual.continuidad`

- `baja` → la continuidad con el bloque anterior puede ser más laxa.
- `media` → la continuidad debe ser reconocible, pero no necesariamente fuerte.
- `alta` → la continuidad con el bloque anterior debe ser clara, explícita o perceptible.

##### `dinamica_procesual.recapitulacion`

- `baja` → la continuidad puede apoyarse menos en recuperación explícita.
- `media` → la continuidad puede reforzarse con recapitulación puntual.
- `alta` → la continuidad debe recuperar visiblemente algo del bloque anterior.

##### `alcance_de_realizacion`

- `pieza_unica` → la continuidad con el bloque anterior debe servir a la autosuficiencia de la pieza.
- `apertura_de_serie` / `continuidad_de_serie` / `cierre_de_serie` → la continuidad interna puede reforzarse porque la pieza misma pertenece a una secuencia mayor.
- `pieza_de_transicion` → la continuidad con el bloque anterior puede tomar forma de puente o desplazamiento.
- `pieza_de_profundizacion` → la continuidad puede reforzarse por desarrollo progresivo del caso.

**Regla protocolaria:**
Este campo debe construirse como la **forma específica en que el bloque recoge o enlaza el tramo anterior**.

---

#### `continuidad_transversal.proyeccion_hacia_bloque_siguiente`

**Contribución por valores:**

##### `configuracion_narrativa`

- `lineal_progresiva` → la proyección debe preparar el siguiente paso del recorrido.
- `apertura_profundizacion_cierre` → la proyección debe orientar al siguiente momento funcional.
- `contrastiva` → la proyección puede preparar oposición, respuesta o diferenciación.
- `acumulativa` → la proyección debe abrir espacio para sumar otro elemento.
- `recapitulativa` → la proyección puede salir de la recuperación hacia un nuevo tramo.
- `modular` → la proyección puede ser más débil o más localizada.
- `abierta_controlada` → la proyección puede flexibilizarse, pero sin perder orientación.

##### `arquitectura_macro`

- arquitecturas con `desarrollo` → favorecen proyección hacia mayor despliegue.
- arquitecturas con `lista` → favorecen proyección hacia otro ítem o cierre de serie.
- arquitecturas con `contraste` → favorecen proyección hacia resolución o diferenciación posterior.
- arquitecturas con `secuencia` → favorecen proyección a paso siguiente.
- arquitecturas con `remate` o `cierre` terminales → reducen o cierran la necesidad de proyección interna.

##### `regimen_de_resolucion_buscada`

- `resolucion_inmediata` → reduce la proyección hacia el bloque siguiente si el bloque ya resuelve mucho.
- `resolucion_progresiva` → exige proyectar parte de la resolución al siguiente bloque.
- `resolucion_diferida` → favorece proyección fuerte hacia delante.
- `resolucion_parcial` → exige proyectar lo no resuelto.
- `resolucion_abierta_a_continuidad` → favorece proyección clara sin clausura total.

##### `alcance_de_realizacion`

- `pieza_unica` → la proyección debe servir a la continuidad interna de la misma pieza.
- `apertura_de_serie` / `continuidad_de_serie` → favorecen bloques con proyección más fuerte.
- `cierre_de_serie` → reduce o estabiliza la proyección hacia delante.
- `pieza_de_transicion` → favorece proyección puente.
- `pieza_de_acceso` → puede proyectar hacia bloques de desarrollo.
- `pieza_de_profundizacion` → favorece proyección hacia mayor espesor.

**Regla protocolaria:**
Este campo debe construirse como la **manera en que el bloque deja preparado el ingreso al siguiente**.

---

#### `continuidad_transversal.continuidad_argumental`

**Contribución por valores:**

##### `configuracion_narrativa`

- `lineal_progresiva` → la continuidad argumental debe avanzar sin quiebres fuertes.
- `apertura_profundizacion_cierre` → la continuidad argumental debe seguir la lógica de introducción, despliegue y salida.
- `contrastiva` → la continuidad argumental puede organizarse por tensión entre polos.
- `acumulativa` → la continuidad argumental debe sumar elementos o capas.
- `recapitulativa` → la continuidad argumental debe integrar recuperación de lo ya dicho.
- `modular` → la continuidad argumental puede ser más fragmentada o distribuida por módulos.
- `abierta_controlada` → la continuidad argumental puede flexibilizarse sin perder eje.

##### `arquitectura_macro`

- `apertura_desarrollo_cierre` → la continuidad argumental debe seguir un recorrido clásico.
- `apertura_desarrollo_remate` → la continuidad argumental debe concentrar su salida al final.
- `apertura_lista_cierre` → la continuidad argumental debe mantenerse aunque el núcleo esté distribuido por ítems.
- `apertura_contraste_resolucion` → la continuidad argumental debe sostener tensión y respuesta.
- `apertura_secuencia_remate` → la continuidad argumental debe mantener progresión por pasos.

##### `regimen_de_resolucion_buscada`

- `resolucion_inmediata` → favorece continuidad argumental más concentrada y cerrada.
- `resolucion_progresiva` → favorece continuidad argumental distribuida por tramos.
- `resolucion_diferida` → favorece continuidad argumental proyectiva.
- `resolucion_parcial` → favorece continuidad argumental que distingue lo resuelto y lo pendiente.
- `resolucion_abierta_a_continuidad` → favorece continuidad argumental no clausurada.

##### `alcance_de_realizacion`

- `pieza_unica` → la continuidad argumental debe cerrar dentro de la misma pieza o tender a ello.
- `apertura_de_serie` / `continuidad_de_serie` → la continuidad argumental puede ser más serial.
- `cierre_de_serie` → la continuidad argumental debe reforzar síntesis y resolución.
- `pieza_de_prueba` / `pieza_de_validacion` → la continuidad argumental puede orientarse a exploración o confirmación.
- `pieza_de_acceso` / `pieza_de_profundizacion` → la continuidad argumental puede tender a entrada o espesor respectivamente.

**Regla protocolaria:**
Este campo debe construirse como la **forma en que el bloque sigue sosteniendo el caso o argumento global** sin volverse una unidad aislada.

---

#### `continuidad_transversal.continuidad_atencional`

**Contribución por valores:**

##### `estado_atencional`

- `atencion_no_abierta` → la continuidad atencional debe trabajar fuerte el ingreso desde cero.
- `atencion_inestable` → la continuidad atencional debe reforzar reenganche y transición clara.
- `atencion_fragmentada` → la continuidad atencional debe sostener el paso entre bloques con cortes legibles.
- `atencion_superficial` → la continuidad atencional debe evitar saturación y mantener claridad inmediata.
- `atencion_sostenida` → la continuidad atencional puede ser más estable y menos redundante.
- `atencion_en_exploracion` → la continuidad atencional puede sostener curiosidad progresiva.
- `atencion_lista_para_profundizacion` → la continuidad atencional puede tolerar mayor densidad y menos reexplicación.
- `atencion_lista_para_activacion` → la continuidad atencional puede orientarse a tramos más operativos.
- `atencion_lista_para_continuidad` → la continuidad atencional puede reforzar proyección serial.
- `atencion_requiere_reenganche` → la continuidad atencional debe hacer visibles puntos de recuperación.

##### `regimen_de_activacion_atencional`

- `apertura_inmediata` → la continuidad atencional debe sostener el impulso inicial sin caída rápida.
- `apertura_progresiva` → la continuidad atencional debe aumentar por escalones.
- `reenganche` → la continuidad atencional debe introducir puntos internos de recuperación.
- `sostenimiento_desde_el_inicio` → la continuidad atencional debe ser alta desde el primer tramo.
- `activacion_por_continuidad` → la continuidad atencional debe apoyarse explícitamente en el arrastre entre bloques.

##### `dinamica_procesual.continuidad`

- `baja` → la continuidad atencional puede ser más laxa.
- `media` → la continuidad atencional debe ser moderada y suficiente.
- `alta` → la continuidad atencional debe ser clara y sostenida.

##### `dinamica_procesual.recapitulacion`

- `baja` → la continuidad atencional debe apoyarse menos en recuperación explícita.
- `media` → la continuidad atencional puede apoyarse en recordatorios puntuales.
- `alta` → la continuidad atencional debe reforzarse mediante recuperación visible del trayecto.

##### `alcance_de_realizacion`

- piezas seriadas o de apertura/continuidad de serie → favorecen continuidad atencional proyectiva;
- piezas únicas → favorecen continuidad atencional autosuficiente;
- piezas de transición → favorecen continuidad atencional puente;
- piezas de profundización → favorecen continuidad atencional sostenida por densidad.

**Regla protocolaria:**
Este campo debe construirse como la **manera en que el bloque mantiene vivo el foco del receptor** entre un tramo y otro.

---

**Regla protocolaria de construcción del conjunto:**

La `continuidad_transversal` debe construirse así:

1. fijar cómo el bloque recoge el anterior;
2. fijar cómo proyecta hacia el siguiente;
3. fijar cómo mantiene el hilo argumental;
4. fijar cómo sostiene el foco atencional;
5. verificar que las cuatro dimensiones de continuidad sean compatibles entre sí.

**Plantilla replicable:**

    construir continuidad_con_bloque_anterior
    construir proyeccion_hacia_bloque_siguiente
    construir continuidad_argumental
    construir continuidad_atencional
    verificar coherencia del enlace transversal

**Interacciones relevantes:**

- `configuracion_narrativa` y `arquitectura_macro` fijan la forma gruesa del enlace;
- `regimen_de_resolucion_buscada` decide cuánto debe cerrarse o proyectarse;
- `estado_atencional` y `regimen_de_activacion_atencional` regulan el enlace desde el punto de vista del foco;
- `dinamica_procesual.continuidad` y `dinamica_procesual.recapitulacion` deciden si ese enlace debe sentirse estable, visible o recuperativo;
- `alcance_de_realizacion` modula si la continuidad es autosuficiente, serial, puente, de acceso o de profundización.

**Ejemplos:**

#### Ejemplo 1

- `configuracion_narrativa` → `lineal_progresiva`
- `regimen_de_resolucion_buscada` → `resolucion_progresiva`
- `estado_atencional` → `atencion_sostenida`
- `dinamica_procesual.continuidad` → `alta`

**Resultado protocolario esperado:**

- fuerte enlace con el bloque anterior;
- clara proyección al siguiente;
- continuidad argumental estable;
- continuidad atencional sostenida sin necesidad de mucho reenganche.

#### Ejemplo 2

- `configuracion_narrativa` → `modular`
- `regimen_de_resolucion_buscada` → `resolucion_parcial`
- `estado_atencional` → `atencion_fragmentada`
- `dinamica_procesual.recapitulacion` → `alta`

**Resultado protocolario esperado:**

- bloques más autónomos;
- continuidad menos automática;
- recuperación explícita de elementos previos;
- mayor cuidado en la continuidad atencional.

#### Ejemplo 3

- `configuracion_narrativa` → `contrastiva`
- `arquitectura_macro` → `apertura_contraste_resolucion`
- `regimen_de_resolucion_buscada` → `resolucion_abierta_a_continuidad`
- `alcance_de_realizacion` → `apertura_de_serie`

**Resultado protocolario esperado:**

- continuidad con el bloque anterior por tensión u oposición;
- proyección fuerte al siguiente bloque;
- continuidad argumental abierta;
- continuidad atencional apoyada en expectativa de resolución posterior.

---

## 13. Capa de justificación de composición

### Criterio general de la capa

La `capa de justificación de composición` no añade contenido nuevo a la pieza.
Su función es **hacer trazable** por qué un bloque, un recurso o una decisión de
salida quedaron construidos de cierta manera.

Por tanto, esta capa debe registrar, para cada decisión relevante:

- qué dimensión intervino;
- qué campo fuente fue usado;
- qué valor activó la contribución;
- qué tipo de incidencia produjo;
- y, cuando haga falta, cómo se resolvió un conflicto o una derivación no trivial.

Debe preservarse una estructura del tipo:

- `justificaciones_dimensionales.dimension_interviniente`
- `justificaciones_dimensionales.campo_fuente`
- `justificaciones_dimensionales.valor_activador`
- `justificaciones_dimensionales.tipo_de_contribucion`
- `justificaciones_dimensionales.descripcion_de_incidencia`
- `justificaciones_dimensionales.interacciones_relevantes`
- `justificaciones_dimensionales.condicion_de_obligatoriedad`

No siempre será necesario rellenar toda esta capa con el mismo nivel de detalle.
Su activación depende del grado de opacidad o conflictividad de la decisión.

---

### 13.1. `justificaciones_dimensionales.*`

**Campos que contribuyen:**

- todas las dimensiones de configuración
- todas las decisiones derivadas de composición
- todas las activaciones o inhibiciones no triviales de recursos, bloques, subcomponentes o capas

---

#### `justificaciones_dimensionales.dimension_interviniente`

**Contribución:**

Debe registrar **qué dimensión** participó en la decisión justificada.

Puede tomar valores como:

- `dimension_identidad_operativa_de_la_realizacion`
- `dimension_orientacion_funcional_pragmatica`
- `dimension_escala_temporal_y_resolucion_realizativa`
- `dimension_acoplamiento_receptoral`
- `dimension_dinamica_atencional_y_procesual`
- `dimension_construccion_del_caso`
- `dimension_comparecencia_performativa`
- `dimension_marco_de_materializacion`
- `dimension_composicion_segmental_de_la_salida`
- `dimension_recursos_complementarios_de_manifestacion`

**Regla protocolaria:**
No debe anotarse una dimensión genérica si no intervino realmente.  
Solo deben registrarse dimensiones con incidencia efectiva en la decisión local.

---

#### `justificaciones_dimensionales.campo_fuente`

**Contribución:**

Debe registrar **qué campo concreto** de la dimensión fue usado como fuente de decisión.

Ejemplos:

- `funcion_dominante`
- `efecto_buscado`
- `arquitectura_macro`
- `regimen_de_resolucion_buscada`
- `publico_objetivo_inmediato`
- `uso_de_texto_en_pantalla`
- `criterio_de_coherencia_de_recursos_complementarios`

**Regla protocolaria:**
No basta con mencionar la dimensión.  
Debe identificarse el campo exacto que activó o restringió la construcción.

---

#### `justificaciones_dimensionales.valor_activador`

**Contribución:**

Debe registrar **qué valor** del campo fuente activó la contribución.

Ejemplos:

- `enseñar`
- `deseo_de_guardar`
- `apertura_contraste_resolucion`
- `resolucion_abierta_a_continuidad`
- `atencion_fragmentada`
- `texto_estructural`
- `conceptual`

**Regla protocolaria:**
La justificación no debe quedarse en el nivel del campo.  
Debe descender al valor concreto que produjo la incidencia.

---

#### `justificaciones_dimensionales.tipo_de_contribucion`

**Contribución por valores:**

Este campo debe registrar **cómo** incidió el valor activador sobre la decisión.
Los tipos mínimos de contribución son:

- `fijacion` → el valor fijó directamente una forma, estructura o elección.
- `restriccion` → el valor descartó opciones o redujo el repertorio admisible.
- `modulacion` → el valor no fijó por completo, pero ajustó intensidad, tono, peso o grado.
- `distribucion` → el valor decidió dónde se reparte algo a lo largo del recorrido.
- `activacion` → el valor encendió un recurso, bloque, componente o capa.
- `desactivacion` → el valor inhibió o suprimió un recurso, bloque, componente o capa.
- `derivacion` → el valor no produjo una salida directa, pero participó en una construcción derivada.
- `justificacion` → el valor no cambió la forma final, pero explica por qué esa forma es coherente.
- `resolucion_de_conflicto` → el valor ayudó a decidir entre contribuciones incompatibles o tensivas.

**Regla protocolaria:**
Debe elegirse el tipo de incidencia más preciso posible.  
No conviene usar `modulacion` si en realidad hubo `fijacion`, ni usar `justificacion`
si en realidad hubo `restriccion` o `activacion`.

---

#### `justificaciones_dimensionales.descripcion_de_incidencia`

**Contribución:**

Debe describir, en una frase breve y verificable, **qué produjo** esa contribución.

Ejemplos de formulación:

- “activó remate proyectivo en el bloque terminal”
- “restringió la longitud verbal del bloque”
- “justificó la ausencia de texto en pantalla”
- “moduló la densidad terminológica hacia un nivel medio”
- “forzó continuidad explícita con el bloque siguiente”

**Regla protocolaria:**
La descripción debe ser:

- breve;
- localizada;
- y observable en la salida.

No debe convertirse en una explicación vaga del sistema completo.

---

#### `justificaciones_dimensionales.interacciones_relevantes`

**Contribución:**

Debe registrar si la decisión justificada surgió de una interacción entre varios campos
o entre varias dimensiones.

Ejemplos:

- `funcion_dominante = enseñar` + `efecto_buscado = comprension_rapida`
- `arquitectura_macro = apertura_contraste_resolucion` + `configuracion_narrativa = contrastiva`
- `uso_de_texto_en_pantalla = texto_variable_segun_bloque` + `grado_de_dependencia_de_recursos_complementarios = alta`

**Regla protocolaria:**
Este subcampo debe usarse cuando la decisión no pueda atribuirse limpiamente a un solo campo fuente.

---

#### `justificaciones_dimensionales.condicion_de_obligatoriedad`

**Contribución por valores:**

Este campo debe indicar por qué la justificación era obligatoria.

Valores típicos:

- `conflicto_entre_contribuciones` → dos o más campos empujaban en direcciones distintas.
- `activacion_no_trivial_de_recurso` → un recurso fue activado por una combinación no obvia.
- `desactivacion_no_trivial_de_recurso` → un recurso fue inhibido por una regla no inmediata.
- `decision_derivada_no_obvia` → la salida no se infiere solo por inspección simple.
- `trazabilidad_exigida` → se requiere dejar rastro explícito de la decisión.
- `no_obligatoria` → la justificación se incluye solo por claridad adicional.

**Regla protocolaria:**
No toda decisión necesita una justificación extensa.  
Este campo debe marcar si la justificación es necesaria por complejidad real o solo por documentación adicional.

---

**Regla protocolaria de construcción del conjunto:**

La `justificacion_dimensional` debe construirse así:

1. identificar una decisión local de salida;
2. verificar si esa decisión puede inferirse directamente o si requiere trazabilidad;
3. registrar la dimensión interviniente;
4. registrar el campo fuente;
5. registrar el valor activador;
6. clasificar el tipo de contribución;
7. describir la incidencia concreta;
8. añadir interacciones si hubo combinación de factores;
9. marcar la condición de obligatoriedad.

**Plantilla replicable:**

    identificar decision local
    verificar si exige justificacion
    registrar dimension_interviniente
    registrar campo_fuente
    registrar valor_activador
    registrar tipo_de_contribucion
    redactar descripcion_de_incidencia
    registrar interacciones_relevantes si corresponde
    marcar condicion_de_obligatoriedad

**Interacciones relevantes:**

- esta capa debe activarse especialmente cuando la salida no sea autoevidente;
- una misma decisión puede requerir varias entradas de justificación si intervinieron campos distintos;
- la justificación no reemplaza la salida: solo la vuelve trazable;
- si un recurso fue activado, inhibido o derivado por combinación de reglas, esta capa debe registrar esa operación;
- si hubo conflicto entre contribuciones, esta capa debe dejar rastro de cómo se resolvió.

**Cuándo esta capa debe ser obligatoria:**

Debe ser obligatoria cuando:

- haya conflicto entre contribuciones;
- un recurso haya sido activado o inhibido por reglas no triviales;
- la decisión no pueda inferirse solo por inspección de la salida;
- o sea importante dejar trazabilidad explícita de una derivación.

**Ejemplos:**

#### Ejemplo 1

- `dimension_interviniente` → `dimension_orientacion_funcional_pragmatica`
- `campo_fuente` → `accion_esperada`
- `valor_activador` → `guardar`
- `tipo_de_contribucion` → `fijacion`
- `descripcion_de_incidencia` → “fijó un remate verbal local condensado y reusable”
- `condicion_de_obligatoriedad` → `decision_derivada_no_obvia`

#### Ejemplo 2

- `dimension_interviniente` → `dimension_recursos_complementarios_de_manifestacion`
- `campo_fuente` → `uso_de_texto_en_pantalla`
- `valor_activador` → `texto_variable_segun_bloque`
- `tipo_de_contribucion` → `activacion`
- `descripcion_de_incidencia` → “permitió activar texto en pantalla solo en bloques de anclaje conceptual”
- `interacciones_relevantes` → `grado_de_dependencia_de_recursos_complementarios = alta`
- `condicion_de_obligatoriedad` → `activacion_no_trivial_de_recurso`

#### Ejemplo 3

- `dimension_interviniente` → `dimension_dinamica_atencional_y_procesual`
- `campo_fuente` → `estado_atencional`
- `valor_activador` → `atencion_fragmentada`
- `tipo_de_contribucion` → `modulacion`
- `descripcion_de_incidencia` → “redujo la longitud verbal del bloque y aumentó la recapitulación visible”
- `interacciones_relevantes` → `regimen_de_activacion_atencional = reenganche`
- `condicion_de_obligatoriedad` → `conflicto_entre_contribuciones`

---

## 14. Regla final para el constructor

El constructor debe operar así:

1. leer todas las instancias contextuales de las dimensiones;
2. identificar todos los campos activos y sus valores;
3. recorrer la manifestación capa por capa y campo por campo;
4. aplicar, dentro de cada campo de salida, las contribuciones valor-por-valor de los campos fuente correspondientes;
5. resolver interacciones por prioridad, restricción, compatibilidad y coherencia global;
6. registrar en `justificaciones_dimensionales` las decisiones no triviales.

La regla crítica es esta:

> ningún valor de ningún campo debe quedar sin efecto potencial sobre la salida, salvo que una regla explícita de desactivación, incompatibilidad o subordinación lo impida.

---

## 15. Fórmula de cierre

Este documento debe leerse como una especificación integrada de construcción: no presenta primero los campos fuente y luego la salida como cosas separadas, sino que describe la salida misma como un objeto multicapa dentro del cual cada campo es construido por contribuciones valor-por-valor provenientes de las `Dimensiones de configuración`.

```

```
