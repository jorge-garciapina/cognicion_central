## Ejemplo del Paso 4 aplicado a la Arquitectura Multidimensional del Texto

En este ejemplo, los elementos seleccionados en el Paso 3 fueron:

- `configuracion_conceptual`
- `configuracion_narrativa`
- `configuracion_lexica`
- `configuracion_de_voz_o_comparecencia`
- `configuracion_de_ritmo_y_legibilidad`
- `configuracion_discursiva`

Ahora la tarea consiste en fijar el **espacio de valores posibles** de cada uno.

Dado que estos elementos son configuraciones de alto nivel, en algunos casos su
espacio de valores no se reduce a una sola lista cerrada simple, sino que se
organiza como una **estructura compuesta de regiones o ejes internos**.
Eso no elimina la obligación de describir los valores: al contrario, obliga a
hacer explícito qué significa cada uno.

---

### 1. Espacio de valores posibles de `configuracion_conceptual`

Esta configuración describe **las ideas sobre las que la instancia textual
operará**.

No debe reducirse a:

- un tema general;
- una sola etiqueta conceptual;
- o una clasificación abstracta del contenido.

Su función es más fuerte:

**hacer explícita la composición de ideas activas que sostienen la instancia
textual, indicando cuáles son, qué papel cumplen y cómo se articulan entre sí.**

Por eso, el valor de `configuracion_conceptual` no debe entenderse como una sola
categoría, sino como una **colección estructurada de ideas activas**.

#### Espacio de valores posibles

El espacio de valores posibles de `configuracion_conceptual` está formado por
configuraciones del tipo:

- `coleccion_de_ideas_activas`

Cada valor válido de `configuracion_conceptual` consiste en una colección de una
o más `idea_activa`.

---

#### Estructura de cada `idea_activa`

Cada `idea_activa` debe contener, al menos, los siguientes componentes:

- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`
- `relaciones_con_otras_ideas`

Esto significa que el espacio de valores posibles de `configuracion_conceptual`
no se agota en decir que hay “varias ideas”, sino en fijar **qué ideas son, qué
función tienen dentro de la instancia y cómo se relacionan**.

---

#### 1.1. Espacio de valores posibles de `formulacion_de_la_idea`

Este componente describe la idea misma.

##### Espacio de valores posibles

- `proposicion_definicional`
- `proposicion_relacional`
- `proposicion_argumentativa`
- `proposicion_operativa`
- `formulacion_abierta_controlada`

##### Descripción del espacio

###### `proposicion_definicional`

La idea formula qué es algo, qué lo distingue o cómo debe entenderse.

###### `proposicion_relacional`

La idea formula una relación entre dos o más términos, por ejemplo:

- causa;
- consecuencia;
- contraste;
- dependencia;
- equivalencia;
- subordinación.

###### `proposicion_argumentativa`

La idea sostiene, defiende, impugna o justifica una tesis.

###### `proposicion_operativa`

La idea orienta una acción, un procedimiento o una consecuencia práctica.

###### `formulacion_abierta_controlada`

La idea no encaja de manera exacta en las clases anteriores, pero puede
expresarse como una formulación conceptual clara y delimitable.

##### Qué queda fuera de este espacio

No pertenecen a este espacio:

- palabras sueltas sin formulación conceptual;
- temas genéricos no desarrollados como idea;
- o fragmentos cuyo contenido no pueda expresarse como una unidad conceptual.

---

#### 1.2. Espacio de valores posibles de `rol_conceptual`

Este componente describe qué lugar ocupa la idea dentro de la composición
conceptual total de la instancia.

##### Espacio de valores posibles

- `nuclear`
- `complementaria`
- `puente`
- `contrastiva`
- `derivada`

##### Descripción del espacio

###### `nuclear`

La idea forma parte del núcleo conceptual de la instancia.  
Sin ella, el texto dejaría de ser el mismo en su sostén semántico principal.

###### `complementaria`

La idea no constituye por sí sola el núcleo, pero amplía, precisa o fortalece el
contenido de una idea nuclear.

###### `puente`

La idea sirve para articular dos regiones del contenido que, sin ella, quedarían
separadas o mal conectadas.

###### `contrastiva`

La idea entra para tensionar, oponer o delimitar otra idea del sistema.

###### `derivada`

La idea aparece como consecuencia, extensión o resultado de otra idea principal,
sin constituir el centro del sostén conceptual.

##### Qué queda fuera de este espacio

No pertenecen a este espacio:

- roles vagos como `importante`, `secundaria`, `más o menos central`;
- ni clasificaciones que no indiquen función estructural en la composición.

---

#### 1.3. Espacio de valores posibles de `peso_relativo`

Este componente describe cuánto peso conceptual tiene la idea dentro del conjunto.

##### Espacio de valores posibles

- cualquier valor escalar normalizado entre `0` y `1`

##### Descripción del espacio

###### `0`

La idea no tiene peso operativo dentro de la instancia.

###### `0 < peso < 1`

La idea participa con una intensidad relativa dentro de la composición
conceptual.

###### `1`

La idea absorbe por completo el peso conceptual de la instancia.

##### Restricción del espacio

La suma de los `peso_relativo` de todas las `idea_activa` de una misma
`configuracion_conceptual` debe ser:

**1.00**

##### Qué queda fuera de este espacio

No pertenecen a este espacio:

- pesos negativos;
- pesos mayores a 1 por idea si se usa normalización total;
- o asignaciones sin criterio comparativo con el resto de la configuración.

---

#### 1.4. Espacio de valores posibles de `modo_de_presencia`

Este componente describe cómo comparece la idea dentro de la instancia textual.

##### Espacio de valores posibles

- `explicita`
- `explicita_reiterada`
- `implicita_estructurante`
- `localizada`
- `transversal`

##### Descripción del espacio

###### `explicita`

La idea aparece formulada de manera visible dentro del texto.

###### `explicita_reiterada`

La idea aparece formulada de manera visible y además reaparece varias veces con
peso estructural fuerte.

###### `implicita_estructurante`

La idea no siempre se formula de manera directa, pero organiza el texto como
principio de fondo.

###### `localizada`

La idea aparece en una región acotada de la instancia y no organiza todo el
recorrido.

###### `transversal`

La idea atraviesa varias partes del texto y mantiene presencia en distintas
regiones de la instancia.

##### Qué queda fuera de este espacio

No pertenecen a este espacio:

- descripciones vagas como `más o menos está`;
- o formulaciones que no distingan si la idea es visible, de fondo, local o
  transversal.

---

#### 1.5. Espacio de valores posibles de `relaciones_con_otras_ideas`

Este componente no debe entenderse como una lista abstracta de nombres de
relación, sino como una **descripción explícita de cómo cada idea activa se
vincula con otras ideas activas de la misma configuración conceptual**.

Eso significa que `relaciones_con_otras_ideas` no toma como valor una sola
etiqueta aislada, sino una **colección de relaciones formuladas**.

Cada relación debe poder responder al menos estas preguntas:

- ¿qué idea se está describiendo?
- ¿con qué otra idea se relaciona?
- ¿qué clase de relación las une?
- ¿cómo debe entenderse esa relación dentro de la configuración conceptual?

Por tanto, el valor de `relaciones_con_otras_ideas` debe construirse como una
lista de entradas del tipo:

- `idea_relacionada`
- `tipo_de_relacion`
- `descripcion_de_la_relacion`

---

##### Estructura de cada relación

Cada relación válida debe contener, al menos, estos componentes:

###### `idea_relacionada`

Indica con qué otra idea activa se vincula la idea que se está describiendo.

No debe ser una referencia vaga, sino una identificación clara de la otra idea
dentro de la misma configuración conceptual.

###### `tipo_de_relacion`

Indica qué clase de vínculo existe entre ambas ideas.

Su espacio de valores posibles es:

- `soporte`
- `subordinacion`
- `expansion`
- `contraste`
- `condicion`
- `consecuencia`
- `equivalencia_parcial`
- `articulacion_libre_controlada`

###### `descripcion_de_la_relacion`

Explica cómo debe entenderse concretamente ese vínculo en este caso.

No basta con poner solo el nombre del tipo de relación.
También debe aclararse de qué manera opera esa relación entre las dos ideas.

---

##### Espacio de valores posibles de `tipo_de_relacion`

###### `soporte`

Una idea refuerza, sostiene o da respaldo conceptual a otra.

Ejemplo de funcionamiento:
la idea “la convertibilidad requiere estructura previa” puede dar soporte a la
idea “no toda salida comercial implica captura económica”.

Aquí la primera no reemplaza a la segunda, sino que le da base o la fortalece.

###### `subordinacion`

Una idea depende jerárquicamente de otra más central.

Ejemplo de funcionamiento:
la idea “los puertos de inserción pueden diversificarse” puede estar subordinada
a la idea más general “la arquitectura comercial organiza puntos de acoplamiento
con el entorno”.

Aquí una idea no vale por sí sola al mismo nivel, sino que aparece como parte de
otra más central.

###### `expansion`

Una idea amplía, despliega o desarrolla otra idea previa.

Ejemplo de funcionamiento:
la idea “la memoria longitudinal permite corrección de trayectoria” puede
expandir la idea “la evidencia retroalimenta el sistema”.

Aquí la segunda idea se vuelve más rica o más específica por medio de la
primera.

###### `contraste`

Una idea entra para diferenciar, oponer o limitar otra.

Ejemplo de funcionamiento:
la idea “estructura configurada” puede entrar en contraste con la idea
“materialización concreta” para evitar que ambas se confundan.

Aquí la relación sirve para marcar diferencia estructural entre dos ideas.

###### `condicion`

Una idea opera como condición para que otra pueda sostenerse o realizarse.

Ejemplo de funcionamiento:
la idea “modelo base suficientemente completo” puede ser condición de la idea
“adaptador no opaco”.

Aquí una idea no se entiende como consecuencia ni como apoyo lateral, sino como
condición de posibilidad de otra.

###### `consecuencia`

Una idea aparece como resultado conceptual de otra.

Ejemplo de funcionamiento:
de la idea “el adaptador opera sobre una instancia ya determinada” puede seguirse
como consecuencia la idea “el adaptador no debe compensar vacíos ontológicos”.

Aquí una idea deriva de la otra como resultado o implicación.

###### `equivalencia_parcial`

Dos ideas guardan una correspondencia parcial o una convergencia semántica sin
ser idénticas.

Ejemplo de funcionamiento:
la idea “caso contextualizado” y la idea “instancia textual multidimensional”
pueden guardar equivalencia parcial si una funciona como realización local de la
otra, sin que ambas sean exactamente el mismo concepto.

Aquí la relación no es identidad, sino correspondencia parcial reconocible.

###### `articulacion_libre_controlada`

La relación no encaja de forma exacta en las clases anteriores, pero puede
describirse con claridad y sin arbitrariedad.

Esta clase solo debe usarse cuando:

- ninguna de las otras relaciones describe adecuadamente el vínculo;
- y aun así puede explicarse con precisión cómo se conectan las ideas.

No debe usarse como cajón de sastre para relaciones mal pensadas.

---

##### Ejemplo mínimo de instanciación

Supongamos una configuración conceptual con estas ideas activas:

- Idea A: “el adaptador opera sobre una instancia ya determinada”
- Idea B: “el adaptador no debe compensar vacíos ontológicos”
- Idea C: “el modelo base completo reduce opacidad”

Entonces, `relaciones_con_otras_ideas` para la Idea B podría verse así:

- `idea_relacionada`: Idea A  
  `tipo_de_relacion`: `consecuencia`  
  `descripcion_de_la_relacion`: la idea B se sigue de la idea A, porque si el
  adaptador opera sobre una instancia ya determinada, entonces no debe suplir
  por intuición lo que el modelo base no fijó.

- `idea_relacionada`: Idea C  
  `tipo_de_relacion`: `soporte`  
  `descripcion_de_la_relacion`: la idea C fortalece la idea B, porque explica
  por qué la reducción de opacidad vuelve innecesaria la compensación intuitiva.

Este ejemplo muestra que `relaciones_con_otras_ideas` no consiste en poner una
sola palabra como `soporte` o `consecuencia`, sino en construir relaciones
explícitas entre ideas identificables.

---

##### Qué queda fuera de este espacio

No pertenecen a este espacio:

- relaciones no formuladas;
- listas de etiquetas sin idea relacionada;
- vínculos donde no se explique cómo opera la relación;
- conexiones vagas como `se parece`, `va con`, `combina bien`;
- o relaciones cuya naturaleza no pueda describirse con precisión.

---

##### Qué permite este componente

Permite:

- reconstruir la arquitectura interna de la configuración conceptual;
- distinguir ideas aisladas de ideas articuladas;
- saber no solo qué ideas están activas, sino cómo se sostienen, limitan,
  desarrollan o derivan unas de otras;
- y evitar que la dimensión conceptual se reduzca a una lista plana sin
  organización interna.

#### 1.6. Restricciones mínimas del espacio de `configuracion_conceptual`

Para que una `configuracion_conceptual` sea válida, debe cumplir al menos estas
condiciones:

1. debe contener una o más `idea_activa`;
2. toda `idea_activa` debe tener:
   - `formulacion_de_la_idea`,
   - `rol_conceptual`,
   - `peso_relativo`,
   - `modo_de_presencia`,
   - y `relaciones_con_otras_ideas`;
3. debe existir al menos una idea con rol `nuclear`;
4. la suma de todos los `peso_relativo` debe ser `1.00`;
5. las ideas no pueden presentarse como lista arbitraria sin relaciones;
6. la configuración debe permitir responder con claridad:
   - de qué ideas habla la instancia;
   - cuáles son centrales;
   - cuáles son secundarias;
   - y cómo se articulan.

---

#### 1.7. Qué permite esta formulación del espacio

Con esta reformulación, `configuracion_conceptual` ya no es una etiqueta vacía ni
una simple clasificación general del contenido.

Permite:

- saber **de qué ideas habla realmente** la instancia textual;
- distinguir ideas nucleares y no nucleares;
- distribuir pesos conceptuales;
- identificar cómo comparecen las ideas en el texto;
- y reconstruir la articulación conceptual de la instancia.

Dicho de manera condensada:

`configuracion_conceptual` ya no clasifica el texto desde afuera;  
**muestra las ideas concretas sobre las que el texto operará.**

### 2. Espacio de valores posibles de `configuracion_narrativa`

Esta configuración describe cómo se organiza el recorrido interno del texto.

#### Espacio de valores posibles

- `lineal_progresiva`
- `apertura_profundizacion_cierre`
- `contrastiva`
- `acumulativa`
- `recapitulativa`
- `modular`
- `abierta_controlada`

#### Descripción del espacio

##### `lineal_progresiva`

El texto avanza de forma continua desde un punto de inicio hacia un desarrollo
posterior, sin grandes retrocesos estructurales ni reordenamientos internos.

##### `apertura_profundizacion_cierre`

El texto presenta una apertura claramente distinguible, un desarrollo que
profundiza el contenido y un cierre reconocible que concluye o reorganiza lo
expuesto.

##### `contrastiva`

El texto progresa mediante comparación, oposición o tensión entre elementos, de
modo que el recorrido depende del contraste.

##### `acumulativa`

El texto avanza por suma de capas, bloques o aportes sucesivos que aumentan la
densidad del recorrido.

##### `recapitulativa`

El texto incorpora retornos parciales, síntesis intermedias o reformulaciones que
reorganizan el recorrido y ayudan a consolidarlo.

##### `modular`

El texto se compone de bloques relativamente autónomos que conservan cierta
independencia local, aunque participen de una unidad mayor.

##### `abierta_controlada`

La organización no encaja plenamente en las clases anteriores, pero sigue siendo
reconstruible como recorrido y no como simple yuxtaposición de fragmentos.

#### Qué queda fuera de este espacio

No pertenecen a este espacio:

- secuencias sin progresión reconocible;
- acumulaciones de párrafos sin orden reconstruible;
- o recorridos que no permitan distinguir ninguna lógica de organización.

---

### 3. Espacio de valores posibles de `configuracion_lexica`

Esta configuración describe con qué materia verbal comparece la instancia
textual.

Como se trata de una configuración compuesta, su espacio de valores se organiza
mediante varios ejes internos.

#### Ejes internos mínimos de la configuración léxica

- `registro_predominante`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `accesibilidad_lexica`
- `variacion_lexica`

---

#### 3.1. Espacio de valores posibles de `registro_predominante`

Este eje describe cuál es el tipo de registro verbal que domina la instancia.

##### Espacio de valores posibles

- `tecnico`
- `pedagogico`
- `institucional`
- `analitico`
- `coloquial_controlado`
- `hibrido`

##### Descripción del espacio

###### `tecnico`

Predomina un vocabulario especializado, preciso y disciplinar, con baja
dependencia de reformulaciones simplificadoras.

###### `pedagogico`

Predomina un vocabulario orientado a hacer comprensible el contenido, con apoyo
en reformulación, mediación y explicitación.

###### `institucional`

Predomina un vocabulario regulado, formal y relativamente estable, propio de
marcos normativos, organizativos o administrativos.

###### `analitico`

Predomina un vocabulario orientado a distinguir, descomponer, comparar o
examinar componentes de un contenido con relativa precisión conceptual.

###### `coloquial_controlado`

Predomina un vocabulario más cercano al uso común, pero sin caer en desorden,
imprecisión excesiva o informalidad caótica.

###### `hibrido`

La instancia combina dos o más registros de manera estable y describible, sin que
uno solo absorba completamente la comparecencia verbal.

---

#### 3.2. Espacio de valores posibles de `densidad_terminologica`

Este eje describe cuánto peso tienen los términos especializados dentro del
tejido verbal del texto.

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La presencia de terminología especializada es reducida. El texto puede apoyarse
más en vocabulario general que en términos técnicos.

###### `media`

La terminología especializada aparece con regularidad, pero se combina con
vocabulario más accesible o mediado.

###### `alta`

La terminología especializada ocupa un lugar dominante en la formulación del
texto y estructura de manera visible su comparecencia verbal.

---

#### 3.3. Espacio de valores posibles de `grado_de_abstraccion`

Este eje describe el nivel de conceptualización con el que se formula el
contenido.

##### Espacio de valores posibles

- `concreto`
- `intermedio`
- `abstracto`

##### Descripción del espacio

###### `concreto`

La formulación se apoya de manera fuerte en casos, objetos, ejemplos o
situaciones fácilmente imaginables.

###### `intermedio`

La formulación combina momentos conceptuales con anclajes concretos sin quedar
absorbida del todo por ninguno de los dos polos.

###### `abstracto`

La formulación se sostiene principalmente en conceptos, relaciones, categorías o
estructuras poco dependientes de ejemplos concretos inmediatos.

---

#### 3.4. Espacio de valores posibles de `accesibilidad_lexica`

Este eje describe cuán fácil o difícil resulta el vocabulario desde el punto de
vista del acceso inicial del lector.

##### Espacio de valores posibles

- `alta`
- `media`
- `baja`

##### Descripción del espacio

###### `alta`

El vocabulario resulta relativamente accesible para un lector no especializado o
para un lector con entrada moderada al tema.

###### `media`

El vocabulario exige cierto esfuerzo, pero sigue siendo atravesable con apoyo
moderado del contexto textual.

###### `baja`

El vocabulario exige alto esfuerzo de lectura, conocimiento previo fuerte o
familiaridad significativa con el campo semántico en cuestión.

---

#### 3.5. Espacio de valores posibles de `variacion_lexica`

Este eje describe cuánto cambia o se diversifica la materia verbal a lo largo de
la instancia.

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

Predomina una repetición relativamente estable del vocabulario y de las formas de
nombrar.

###### `media`

Existe alternancia verbal controlada, pero sin dispersión fuerte del campo
léxico.

###### `alta`

La instancia moviliza un repertorio verbal más amplio y variado, con mayor
rotación de términos o formas de nombrar.

---

#### 3.6. Resultado global de `configuracion_lexica`

Una configuración léxica válida resulta de combinar de manera coherente un valor
de cada eje interno.

Ejemplos de configuraciones válidas:

- `tecnico` / `alta` / `abstracto` / `baja` / `media`
- `pedagogico` / `media` / `intermedio` / `alta` / `media`
- `institucional` / `media` / `intermedio` / `media` / `baja`
- `hibrido` / `media` / `abstracto` / `media` / `alta`

---

### 4. Espacio de valores posibles de `configuracion_de_voz_o_comparecencia`

Esta configuración describe la presencia que proyecta el texto ante el lector.

Su espacio de valores también se organiza por ejes internos.

#### Ejes internos mínimos de la configuración de voz

- `cercania`
- `autoridad`
- `calidez`
- `intensidad`
- `sobriedad`

---

#### 4.1. Espacio de valores posibles de `cercania`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La voz comparece con marcada distancia respecto del lector, sin buscar
proximidad explícita.

###### `media`

La voz conserva cierta distancia, pero admite zonas de conexión o mediación.

###### `alta`

La voz comparece buscando proximidad fuerte, acompañamiento o sensación de
interlocución cercana.

---

#### 4.2. Espacio de valores posibles de `autoridad`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La voz no se presenta fuertemente como fuente de autoridad o conducción.

###### `media`

La voz sostiene cierta autoridad, pero sin imponerse de manera dominante.

###### `alta`

La voz comparece con fuerte conducción, seguridad o jerarquía enunciativa.

---

#### 4.3. Espacio de valores posibles de `calidez`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La voz comparece de manera fría, contenida o poco afectiva.

###### `media`

La voz mantiene una calidez moderada, sin volverse ni distante ni fuertemente
afectiva.

###### `alta`

La voz comparece con cercanía afectiva visible, acompañamiento o suavidad
expresiva marcada.

---

#### 4.4. Espacio de valores posibles de `intensidad`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La voz comparece con baja presión expresiva y poca energía enunciativa.

###### `media`

La voz mantiene un nivel intermedio de empuje o énfasis.

###### `alta`

La voz comparece con fuerte energía expresiva, presión enunciativa o intensidad
retórica.

---

#### 4.5. Espacio de valores posibles de `sobriedad`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La voz admite más despliegue, marcas expresivas o recursos visibles de
comparecencia.

###### `media`

La voz conserva equilibrio entre contención y despliegue.

###### `alta`

La voz comparece con fuerte contención, austeridad expresiva y bajo ornamento.

---

#### 4.6. Resultado global de `configuracion_de_voz_o_comparecencia`

Una configuración de voz válida resulta de combinar de manera coherente estos
ejes.

Ejemplos de regiones posibles:

- cercanía baja / autoridad alta / calidez baja / intensidad media / sobriedad alta
- cercanía alta / autoridad media / calidez alta / intensidad media / sobriedad media
- cercanía media / autoridad alta / calidez media / intensidad alta / sobriedad baja

---

### 5. Espacio de valores posibles de `configuracion_de_ritmo_y_legibilidad`

Esta configuración describe la experiencia de recorrido de la instancia textual.

También se organiza por ejes internos.

#### Ejes internos mínimos de la configuración de ritmo y legibilidad

- `explicitud`
- `continuidad`
- `friccion_interpretativa`
- `compresion`
- `recapitulacion`

---

#### 5.1. Espacio de valores posibles de `explicitud`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

El texto deja más cosas implícitas y exige mayor trabajo inferencial del lector.

###### `media`

El texto explicita una parte relevante del contenido, pero mantiene zonas de
inferencia moderada.

###### `alta`

El texto formula de manera muy visible relaciones, pasos, definiciones o
transiciones, reduciendo la necesidad de inferencia.

---

#### 5.2. Espacio de valores posibles de `continuidad`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

El recorrido presenta más rupturas, saltos o cambios abruptos de avance.

###### `media`

El recorrido combina continuidad con algunos cambios de ritmo o transición.

###### `alta`

El texto avanza con fuerte sensación de continuidad, encadenamiento y fluidez de
recorrido.

---

#### 5.3. Espacio de valores posibles de `friccion_interpretativa`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

La interpretación exige poco esfuerzo adicional para seguir el recorrido.

###### `media`

El texto exige cierto esfuerzo interpretativo, pero de forma controlada.

###### `alta`

La interpretación exige alto esfuerzo para reconstruir conexiones, sentidos o
supuestos.

---

#### 5.4. Espacio de valores posibles de `compresion`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

El contenido se despliega con mayor amplitud y menor densidad por unidad de
formulación.

###### `media`

El contenido mantiene una densidad intermedia, sin máxima expansión ni máxima
condensación.

###### `alta`

El contenido se presenta muy condensado, con alta densidad de sentido por unidad
de formulación.

---

#### 5.5. Espacio de valores posibles de `recapitulacion`

##### Espacio de valores posibles

- `baja`
- `media`
- `alta`

##### Descripción del espacio

###### `baja`

El texto casi no retoma ni reorganiza lo ya expuesto.

###### `media`

El texto incorpora algunas recapitulaciones o retornos parciales.

###### `alta`

El texto recapitula con frecuencia o con peso estructural fuerte para consolidar
el recorrido.

---

#### 5.6. Resultado global de `configuracion_de_ritmo_y_legibilidad`

Una configuración válida resulta de combinar de manera coherente los cinco ejes.

Ejemplos de regiones posibles:

- explicitud alta / continuidad alta / fricción baja / compresión baja / recapitulación media
- explicitud media / continuidad media / fricción media / compresión media / recapitulación baja
- explicitud baja / continuidad media / fricción alta / compresión alta / recapitulación baja

---

### 6. Espacio de valores posibles de `configuracion_discursiva`

Esta configuración describe el modo de formulación predominante de la instancia.

#### Espacio de valores posibles

- `definicional`
- `explicativa`
- `argumentativa`
- `operativa`
- `sintetizadora`
- `captativa`
- `hibrida_controlada`

#### Descripción del espacio

##### `definicional`

La instancia se formula prioritariamente para fijar qué es algo, delimitarlo o
precisarlo.

##### `explicativa`

La instancia se formula prioritariamente para hacer comprensible un contenido,
desplegarlo o aclararlo.

##### `argumentativa`

La instancia se formula prioritariamente para sostener, defender o justificar una
tesis.

##### `operativa`

La instancia se formula prioritariamente para indicar qué hacer, cómo proceder o
qué operación ejecutar.

##### `sintetizadora`

La instancia se formula prioritariamente para condensar, reorganizar o resumir un
contenido más amplio.

##### `captativa`

La instancia se formula prioritariamente para abrir atención, atraer al lector o
producir entrada al contenido.

##### `hibrida_controlada`

La instancia combina dos o más regiones discursivas de forma estable y
describible, sin quedar reducida a mezcla arbitraria.

#### Qué queda fuera de este espacio

No pertenecen a este espacio:

- formulaciones sin región discursiva reconocible;
- mezclas caóticas de modos de formulación;
- o casos donde no pueda describirse ninguna orientación predominante.

---

### 7. Resultado del ejemplo

Crear el espacio de valores posibles en la Arquitectura Multidimensional del
Texto exige algo más que nombrar regiones generales.

Exige describir, para cada configuración y para cada eje interno pertinente:

- qué valores puede tomar;
- qué significa cada valor;
- qué diferencias introduce;
- y qué configuraciones siguen perteneciendo al espacio del modelo.

### 8. Fórmula condensada del ejemplo

En la Arquitectura Multidimensional del Texto, crear el espacio de valores
posibles en el Paso 4 consiste en fijar, para cada configuración base y para
cada eje interno relevante, un repertorio explícito de valores válidos con
significado diferencial, de modo que la instancia textual deje de depender de
suposiciones al ser construida.
