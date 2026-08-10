https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69debe2a-f4a8-83e8-a24f-124ca9d8eb88

# Construcción de modelos base con ejemplo guiado

## Documento metodológico con un ejemplo transversal

## 0. Función de este documento

Este documento no sustituye a `modelos-base.md` ni a
`refinamiento-modelo-base.md`.

Su función es más concreta:

**mostrar cómo se construye un modelo base sin quedarse en definiciones vacías.**

Para hacerlo, el documento usará un **mismo ejemplo transversal** y, en cada
sección, mostrará cómo ese ejemplo se va refinando.

---

## 1. Ejemplo de trabajo que usaremos en todo el documento

Supongamos que queremos construir un modelo base para describir esta entidad:

**estudiante respecto del aprendizaje del Tema A**

No queremos describir:

- al estudiante en general;
- su personalidad completa;
- ni toda su trayectoria escolar.

Queremos describir algo mucho más preciso:

> cómo está configurado ese estudiante frente al aprendizaje del Tema A.

Éste será el ejemplo que usaremos para explicar todos los conceptos del
documento.

---

## 2. Primer error frecuente: creer que un modelo base es solo una lista de campos

Una mala construcción del modelo podría verse así:

- `nivel`
- `problema`
- `entrada`
- `ritmo`
- `resultado`

A primera vista parece un modelo, pero en realidad no lo es.

¿Por qué?

Porque nadie sabe con precisión:

- qué significa cada campo;
- qué valor puede tomar;
- si dos personas lo llenarían igual;
- ni cómo distinguir una instancia válida de una arbitraria.

### Microejemplo

Si alguien llena ese modelo así:

- `nivel = bien`
- `problema = comprensión`
- `entrada = ejemplos`
- `ritmo = lento`
- `resultado = mejora`

otra persona podría llenarlo así:

- `nivel = medio`
- `problema = abstracto`
- `entrada = ejercicios`
- `ritmo = paso a paso`
- `resultado = aceptable`

Y ambas personas creerían que están describiendo lo mismo.

Esto muestra el problema:

**sin construcción rigurosa, el modelo base sigue obligando a reconstruir el
modelo en cada caso.**

---

## 3. Qué significa realmente construir un modelo base

Construir un modelo base no consiste en poner nombres a casilleros.

Consiste en fijar una estructura suficientemente determinada para que distintos
casos puedan describirse sin rehacer el modelo desde cero.

En el ejemplo del estudiante, eso exige responder al menos estas preguntas:

- ¿qué estamos modelando exactamente?
- ¿qué dimensiones o regiones del caso son necesarias?
- ¿qué significa cada elemento del modelo?
- ¿qué tipo de valor admite?
- ¿qué valores puede tomar?
- ¿qué restricciones deben cumplirse?
- ¿cómo se ve una instancia válida?

Ésta es la diferencia entre:

- una lista de campos;
- y un verdadero modelo base.

---

## 4. Paso 1: delimitar la unidad modelada

Antes de proponer elementos, dimensiones, relaciones, tipos de valor o
restricciones, debe quedar fijada con precisión la **unidad modelada**.

Éste es el primer paso real de construcción del modelo base, porque un modelo no
puede organizarse correctamente mientras no se sepa con claridad qué entidad está
siendo descrita.

Dicho de manera simple:

un modelo base no empieza preguntando:

- qué campos tendrá,
- ni qué tipos de valor usará,
- ni cómo se instanciará.

Empieza preguntando:

**¿qué es exactamente aquello que este modelo pretende describir?**

### 4.1. Qué significa delimitar la unidad modelada

Delimitar la unidad modelada significa fijar:

- qué entidad constituye el objeto del modelo;
- qué cuenta como una instancia legítima de esa entidad;
- qué queda fuera de esa entidad;
- y en qué nivel del sistema existe esa unidad.

Esto último es especialmente importante, porque muchos errores de modelado no
aparecen por falta de inteligencia técnica, sino por una mala delimitación de
niveles.

Un modelo puede fallar porque mezcla:

- entidad y contexto;
- entidad y metadocumentación;
- entidad y adaptación;
- entidad y materialización final;
- o entidad y atributos de otra escala que no pertenecen a la misma unidad.

Por eso, delimitar la unidad modelada no es un paso preliminar trivial.  
Es el acto que fija el dominio real sobre el cual todo lo demás tendrá sentido.

### 4.2. Qué debe quedar claro cuando se delimita la unidad

Una delimitación adecuada de la unidad modelada debe responder, al menos, a estas
preguntas:

#### a) ¿Qué se está modelando?

Debe decirse de forma positiva cuál es la entidad.

#### b) ¿Qué no se está modelando?

Debe decirse qué cosas, aunque sean cercanas o interesantes, no pertenecen a la
unidad.

#### c) ¿En qué nivel del sistema existe la unidad?

No es lo mismo modelar:

- una entidad general;
- una instancia contextual;
- una pieza final;
- una materialización;
- un protocolo;
- o una estructura documental.
- etcétera

#### d) ¿Qué cuenta como una instancia válida de esa unidad?

Debe quedar claro qué clase de caso podría ocupar legítimamente ese lugar.

### 4.3. Qué errores evita este paso

Delimitar correctamente la unidad modelada evita al menos cuatro errores graves.

#### Error 1: mezclar niveles

Se introducen como elementos del modelo cosas que pertenecen a:

- otro estrato;
- otra fase del proceso;
- otra escala de análisis;
- o a una entidad distinta.

#### Error 2: inflar artificialmente el modelo

Se añaden elementos que pueden ser interesantes en términos generales, pero que
no pertenecen realmente a la unidad que se quiere describir.

#### Error 3: construir un modelo sin frontera

El modelo termina pudiendo absorber cualquier cosa, porque nunca quedó claro qué
entra y qué no entra.

#### Error 4: volver imposible la selección de elementos relevantes

Si no se sabe cuál es la unidad, tampoco puede saberse qué elementos son
realmente necesarios para describirla.

### 4.4. Relación con los pasos siguientes

Este paso no da todavía los elementos del modelo.
Tampoco da aún su tipificación ni sus restricciones.

Su función es más básica:

**fijar el objeto del modelo de manera que los pasos posteriores no trabajen en el
vacío.**

Solo después de delimitar la unidad modelada tiene sentido preguntar:

- qué dimensiones o regiones posee;
- qué elementos deben entrar;
- qué tipo de valor admite cada uno;
- qué restricciones deben fijarse;
- y cómo se verá una instancia válida.

### 4.5. Criterio metodológico

Una delimitación está bien hecha cuando permite decir con claridad:

- qué pertenece a la unidad;
- qué no pertenece;
- y por qué.

Si todavía no puede responderse eso, entonces el modelo no debería pasar al paso
siguiente.

### 4.6. Fórmula condensada

Delimitar la unidad modelada consiste en fijar con precisión qué entidad se está
describiendo, en qué nivel del sistema existe, qué cuenta como instancia suya y
qué cosas deben quedar fuera del modelo para evitar mezclas, inflación y
ambigüedad estructural.

## 5. Paso 2: distinguir entidad modelada y metadocumentación

Una vez delimitada la unidad modelada, el siguiente paso consiste en evitar una
confusión muy frecuente: mezclar lo que pertenece a la **entidad modelada** con
lo que pertenece a la **documentación del proceso de modelado**.

Éste es un error especialmente peligroso porque, al principio, la mezcla puede
parecer inocente. Muchas veces ambos tipos de información aparecen juntos en la
práctica de trabajo:

- se modela una entidad;
- se toma nota de cómo fue descrita;
- se registra quién la definió;
- se anota su versión;
- se deja constancia del estado del documento;
- y todo eso termina acumulándose en la misma estructura.

El problema es que, si todo eso entra en el mismo nivel, el modelo base deja de
describir solo la entidad y empieza a describir también el proceso de trabajo
sobre ella.

### 5.1. Qué significa distinguir entidad modelada y metadocumentación

Distinguir entidad modelada y metadocumentación significa separar con claridad dos
clases de información:

#### a) Información de la entidad modelada

Es la información que describe la unidad que el modelo quiere representar.

Responde a preguntas como:

- ¿qué rasgos tiene esta entidad?
- ¿cómo está configurada?
- ¿qué diferencias estructurales posee?
- ¿qué elementos son necesarios para describirla?

#### b) Información de metadocumentación

Es la información que describe el proceso de construcción, registro, revisión o
gestión del modelo.

Responde a preguntas como:

- ¿quién construyó esta descripción?
- ¿cuándo fue revisada?
- ¿qué versión del documento se está usando?
- ¿qué estado tiene este archivo?
- ¿qué observaciones dejó el modelador?

Las dos clases de información pueden ser valiosas.
Pero no describen la misma cosa.
Por eso, no deben ocupar el mismo lugar dentro del modelo base de la entidad.

### 5.2. Por qué esta distinción es necesaria

Esta distinción es necesaria por al menos cuatro razones.

#### a) Protege la pureza descriptiva del modelo

Permite que el modelo siga describiendo la entidad y no el proceso administrativo
o documental que la rodea.

#### b) Evita inflación artificial

Si se mezclan entidad y metadocumentación, el modelo parece más rico, pero en
realidad solo se ha vuelto más heterogéneo.

#### c) Mejora la claridad estructural

La separación de niveles hace visible qué pertenece a la entidad y qué pertenece
a la gestión del modelo.

#### d) Facilita reutilización

Un modelo base se vuelve más reusable cuando su núcleo descriptivo no está
contaminado por datos circunstanciales del proceso de documentación.

### 5.3. Cómo detectar la metadocumentación

Una pregunta muy útil para detectar si un elemento es metadocumental es esta:

**¿este elemento describe la entidad, o describe el acto de haberla modelado,
registrado, corregido o versionado?**

Si describe:

- autoría;
- fecha de revisión;
- versión del documento;
- estado del archivo;
- responsable del modelado;
- notas de edición;
- o decisiones de gestión documental;

entonces probablemente pertenece a la metadocumentación y no al modelo base de
la entidad.

### 5.4. Qué errores aparecen cuando no se hace esta distinción

Si esta distinción no se hace, aparecen errores como:

#### Error 1: mezcla de niveles

El modelo contiene al mismo tiempo:

- rasgos de la entidad;
- y rastros del proceso de trabajo.

#### Error 2: falsa densidad

Parece que el modelo tiene muchos elementos descriptivos, cuando en realidad una
parte de ellos no describe la entidad sino el expediente del modelado.

#### Error 3: dificultad para seleccionar elementos relevantes

Si no se separa la metadocumentación, se vuelve más difícil decidir qué
componentes pertenecen realmente al núcleo del modelo.

#### Error 4: mala lectura por parte de otros agentes

Una IA o un lector humano puede confundir un rasgo documental con un rasgo
estructural de la entidad.

### 5.5. Dónde debe ir la metadocumentación

La solución no es eliminar toda la metadocumentación.

La solución es ubicarla en el lugar correcto.

Puede existir:

- en otro documento;
- en una capa auxiliar del sistema;
- en encabezados documentales;
- en campos separados de control;
- o en un nivel distinto del artefacto.

Lo importante es que no quede presentada como si fuera parte del modelo base de
la entidad.

### 5.6. Criterio metodológico

Cuando haya duda sobre un elemento, conviene aplicar este criterio:

- si el elemento ayuda a describir la configuración de la entidad, pertenece al
  modelo base;
- si el elemento ayuda a describir el proceso de modelado, revisión, control,
  autoría o documentación, pertenece a la metadocumentación.

### 5.7. Fórmula condensada

Distinguir entidad modelada y metadocumentación consiste en separar la
información que describe la unidad del modelo de aquella que describe el proceso
de haber construido, registrado o revisado ese modelo, evitando que ambas queden
mezcladas en la misma estructura.

## 6. Paso 3: proponer elementos relevantes

En este punto ya no basta con afirmar que el modelo necesita “campos” o
“componentes”. Ahora debe decidirse qué elementos merecen entrar al modelo base y
por qué.

Éste es uno de los pasos más delicados de toda la construcción, porque un modelo
base puede fallar en dos direcciones opuestas:

- por defecto, si deja fuera diferencias estructurales que luego serán necesarias
  para distinguir instancias;
- o por exceso, si incorpora rasgos irrelevantes, redundantes, decorativos o
  pertenecientes a otro nivel del sistema.

Por eso, antes de proponer una lista de elementos, conviene fijar qué se
entiende por **elemento relevante**.

### 6.1. Qué es un elemento relevante

Un elemento es relevante cuando cumple simultáneamente estas condiciones:

1. describe una diferencia estructural real dentro de la unidad modelada;
2. aporta información necesaria para distinguir instancias entre sí;
3. no puede absorberse sin pérdida en otro elemento ya existente;
4. no pertenece a otro nivel del sistema, como:
   - la metadocumentación,
   - la adaptación,
   - el codominio,
   - la materialización,
   - o la gestión del proceso;
5. puede definirse con suficiente claridad semántica y funcional;
6. puede recibir un tipo de valor y un espacio de valores posibles sin quedar
   como casillero vacío.

Dicho de otro modo:

un elemento relevante no es simplemente algo interesante sobre la entidad, sino
algo que el modelo necesita para describirla de manera estable, comparables sus
instancias y controlar su futura instanciación.

### 6.2. Qué preguntas deben hacerse antes de aceptar un elemento

Antes de incorporar un elemento al modelo base, conviene someterlo a estas
preguntas:

- ¿qué diferencia entre casos permite capturar?
- ¿esa diferencia es estructural o solo circunstancial?
- ¿el elemento describe la entidad o describe otra cosa distinta del objeto
  modelado?
- ¿podría reducirse a otro elemento ya propuesto?
- ¿su ausencia empobrecería realmente la capacidad descriptiva del modelo?
- ¿puede definirse con claridad?
- ¿puede instanciarse sin improvisación?
- ¿permite distinguir casos de manera estable?
- ¿pertenece al nivel del modelo base y no al de adaptación o materialización?

Si un candidato no resiste estas preguntas, probablemente no deba entrar al
modelo.

### 6.3. Qué tipos de errores evita este paso

La propuesta razonada de elementos sirve para evitar al menos cinco errores
frecuentes.

#### a) Error por acumulación arbitraria

Se añaden elementos porque “suenan útiles”, sin justificar qué diferencia real
aportan.

#### b) Error por mezcla de niveles

Se introducen elementos que pertenecen a:

- trazabilidad,
- documentación,
- adaptación,
- soporte,
- formato,
- o materialización,
  como si describieran la entidad misma.

#### c) Error por redundancia

Se añaden dos o más elementos que en realidad capturan la misma diferencia
estructural.

#### d) Error por opacidad semántica

Se proponen nombres de elementos que parecen técnicos, pero no se sabe qué
significan exactamente dentro del modelo.

#### e) Error por falsa exhaustividad

Se cree que el modelo está mejor porque tiene más elementos, cuando en realidad
solo se ha vuelto más cargado y menos inteligible.

### 6.4. Qué debe justificar una lista de elementos

Una lista de elementos no se considera metodológicamente aceptable solo porque
“parece razonable”.

Debe justificar, al menos:

- por qué cada elemento entra;
- qué diferencia estructural introduce;
- por qué no sobra;
- por qué no pertenece a otro nivel;
- y cómo se articula con los demás elementos del modelo.

Esto significa que la propuesta de elementos no debe presentarse como una lista
cerrada y autosuficiente desde el inicio, sino como una **selección razonada**
que todavía deberá pasar por:

- descripción semántica;
- determinación funcional;
- tipificación;
- definición del espacio de valores posibles;
- restricciones;
- y ejemplos de instanciación.

### 6.5. Qué relación tiene este paso con los pasos siguientes

Este paso no completa todavía el modelo base.

Su función es más acotada y más básica:

- seleccionar los elementos que merecen entrar;
- descartar los que pertenecen a otro nivel;
- y preparar una estructura sobre la cual luego se pueda trabajar con rigor.

Por eso, después de proponer elementos relevantes, todavía falta:

1. describir cada elemento semánticamente;
2. fijar su función dentro del modelo;
3. distinguir su tipo de valor;
4. fijar su espacio de valores posibles;
5. declarar sus restricciones;
6. y mostrar ejemplos de instanciación.

### 6.6. Criterio de suficiencia

Una propuesta de elementos puede considerarse suficientemente buena cuando logra
estas tres cosas a la vez:

- cubre las diferencias estructurales que el modelo necesita;
- evita introducir elementos ajenos al nivel de modelado;
- y deja abierta la posibilidad de una tipificación y una instanciación no
  arbitrarias.

### 6.7. Fórmula condensada

Proponer elementos relevantes no consiste en enumerar campos posibles.

Consiste en seleccionar, con justificación explícita, aquellos componentes sin
los cuales el modelo perdería capacidad real de describir, distinguir e
instanciar la entidad que pretende modelar.

## 7. Paso 4: crear espacio de valores posibles

Una vez que ya se propusieron los elementos relevantes del modelo, el siguiente
paso consiste en fijar el **espacio de valores posibles** de cada uno.

Este paso no debe confundirse con la tipificación.

La tipificación responde a la pregunta:

**¿qué clase formal de valor puede ocupar este lugar?**

El espacio de valores posibles responde a otra pregunta:

**¿qué valores concretos o qué familia concreta de configuraciones puede tomar
ese elemento dentro de este modelo?**

La distinción es decisiva porque un elemento puede estar correctamente nombrado y
correctamente tipificado, y aun así seguir siendo inútil si no se sabe qué
valores puede tomar.

### 7.1. Qué significa crear el espacio de valores posibles

Crear el espacio de valores posibles significa fijar, para cada elemento del
modelo:

- qué repertorio de valores concretos admite;
- si ese repertorio es cerrado, abierto o mixto;
- si sus valores se organizan como clases, niveles, rangos, secuencias o
  estructuras compuestas;
- y qué límites separan un valor válido de uno que ya no pertenece al modelo.

Dicho de manera simple:

no basta con saber “qué tipo de cosa va ahí”.
También hay que saber “qué cosas concretas pueden ir ahí”.

### 7.2. Qué no debe hacerse en este paso

Este paso falla cuando se incurre en alguno de estos errores:

#### a) dejar el espacio implícito

Se dice el tipo, pero se deja al lector o al agente la tarea de imaginar los
valores.

#### b) dar ejemplos aislados en vez de fijar un espacio

Se ponen dos o tres casos de muestra, pero sin aclarar si agotan el repertorio,
si son orientativos o si pertenecen a una familia más amplia.

#### c) mezclar tipos de valor con valores concretos

Se presenta como “espacio de valores” algo que en realidad sigue siendo una
tipificación general.

#### d) no describir el significado de cada valor

Se nombran valores posibles, pero no se explica qué diferencia modelan.

### 7.3. Qué debe quedar definido al crear un espacio de valores

Para que el espacio de valores posibles de un elemento quede suficientemente
construido, deben resolverse al menos estas preguntas:

1. **¿el espacio es cerrado, abierto o mixto?**
2. **¿cuáles son sus valores posibles o sus familias de valores?**
3. **¿qué significa cada valor dentro del modelo?**
4. **¿cómo se distinguen entre sí esos valores?**
5. **¿hay un orden, una jerarquía o una proximidad entre ellos?**
6. **¿qué cuenta como valor inválido o externo al espacio?**

### 7.4. Espacio cerrado, abierto y mixto

#### Espacio cerrado

Es aquel donde el repertorio de valores queda fijado de forma explícita.

Conviene usarlo cuando:

- el modelo necesita alta comparabilidad;
- el repertorio es relativamente estable;
- o la diversidad de casos no exige apertura fuerte.

#### Espacio abierto

Es aquel donde no se fija una lista cerrada de valores, sino una familia de
configuraciones posibles bajo criterios definidos.

Conviene usarlo cuando:

- el modelo trabaja con gran variedad semántica;
- el objeto no puede reducirse a un catálogo corto;
- o la riqueza del dominio exige flexibilidad.

#### Espacio mixto

Es aquel donde una parte del espacio está cerrada y otra queda abierta o
estructurada de modo más flexible.

Conviene usarlo cuando:

- el modelo necesita comparabilidad en unos aspectos;
- pero también necesita admitir diversidad en otros.

### 7.5. Qué relación tiene este paso con la tipificación

La tipificación no reemplaza este paso.
Lo prepara.

Por ejemplo, si un elemento tiene tipo:

- categorial cerrado,

eso todavía no dice si sus valores serán:

- `alto / medio / bajo`,
- `introductorio / operativo / estructurado`,
- o cualquier otro repertorio.

Y si un elemento tiene tipo:

- compuesto estructurado,

eso todavía no dice cuáles son los campos internos del valor ni qué clases de
configuración interna pertenecen al espacio del modelo.

Entonces, la secuencia correcta es:

1. nombrar el elemento;
2. describir qué significa;
3. fijar su función;
4. tipificarlo;
5. y solo después construir su espacio de valores posibles.

### 7.6. Criterio metodológico

El espacio de valores posibles de un elemento está bien construido cuando:

- ya no obliga a improvisar qué valores puede tomar;
- permite distinguir casos válidos de casos inválidos;
- y hace posible que dos agentes distintos instancien el mismo elemento sin
  rehacer su repertorio desde cero.

### 7.7. Fórmula condensada

Crear el espacio de valores posibles consiste en fijar el repertorio concreto de
valores o configuraciones que puede tomar cada elemento del modelo, indicando su
estructura, sus límites y el significado diferencial de cada una de sus
variantes, de modo que la instanciación deje de depender de improvisación.

## 8. Relación con los ejemplos del artefacto

Este documento no busca agotar por sí solo la construcción completa de un modelo
base.

Su función es fijar la secuencia metodológica mínima hasta el momento en que ya
puede decirse que un modelo:

- tiene una unidad modelada delimitada;
- distingue la entidad de su metadocumentación;
- justifica sus elementos relevantes;
- y fija, para esos elementos, un espacio de valores posibles.

A partir de ahí, los ejemplos del artefacto muestran cómo estas decisiones se
aplican en casos concretos.

### 8.1. Qué muestran los ejemplos

Los ejemplos no deben leerse como anexos ilustrativos secundarios.
Deben leerse como pruebas de que la metodología ya puede operar sobre casos
reales.

Más precisamente, los ejemplos muestran:

- cómo una unidad modelada se delimita de manera distinta según el caso;
- cómo cambian los elementos relevantes al cambiar la entidad;
- cómo se construyen espacios de valores posibles no arbitrarios;
- y cómo una misma metodología puede sostener modelos de naturaleza distinta.

### 8.2. Ejemplos del artefacto y su función

#### `construccion/ejemplos-paso-1/*`

Estos ejemplos muestran cómo se delimita correctamente la unidad modelada.

Su función principal es evitar:

- mezclas de nivel;
- inflación del modelo;
- y ambigüedad sobre qué entidad se está describiendo.

#### `construccion/ejemplos-paso-2/*`

Estos ejemplos muestran cómo separar la entidad modelada de la metadocumentación.

Su función principal es evitar que el modelo absorba:

- datos de autoría;
- fechas de revisión;
- versiones documentales;
- u otros componentes que no describen la entidad misma.

#### `construccion/ejemplos-paso-3/*`

Estos ejemplos muestran cómo justificar la propuesta de elementos relevantes.

Su función principal es evitar:

- listas arbitrarias de campos;
- redundancias;
- y selección de elementos sin justificación estructural.

#### `construccion/ejemplos-paso-4/*`

Estos ejemplos muestran cómo construir espacios de valores posibles suficientemente
determinados.

Su función principal es evitar:

- tipos vacíos sin repertorio concreto;
- valores mal definidos;
- y espacios que obliguen a improvisar la instanciación.

### 8.3. Cómo debe usarse este documento junto con los ejemplos

La lectura correcta no consiste en leer primero toda la teoría y solo después
mirar los ejemplos como ilustración opcional.

La lectura correcta es de ida y vuelta:

- este documento fija la regla;
- los ejemplos muestran cómo opera esa regla;
- y los ejemplos, a su vez, ayudan a verificar si la regla está formulada con
  suficiente claridad.

Por eso, cuando una sección de este documento parezca todavía demasiado abstracta,
debe contrastarse inmediatamente con el ejemplo correspondiente del artefacto.

---

## 9. Cierre

La construcción de modelos base no comienza con la tipificación ni con la
instanciación.

Comienza antes:

- delimitando con precisión la unidad modelada;
- separando la entidad de su metadocumentación;
- justificando qué elementos merecen entrar al modelo;
- y fijando, para cada uno, un espacio de valores posibles suficientemente claro.

Ésa es la infraestructura mínima sin la cual el resto del trabajo se vuelve
opaco.

La utilidad de este documento consiste en fijar esa infraestructura como método.

La utilidad de los ejemplos consiste en mostrar que ese método ya puede aplicarse
a casos concretos sin recaer en improvisación.

Dicho de manera condensada:

este documento establece cómo debe comenzar la construcción de un modelo base;
los ejemplos muestran que ese comienzo puede sostenerse en la práctica.
