# Primera condensación del proceso de modelado textual

## Arquitectura Multidimensional del Texto como instancia, adaptación y manifestación

## 1. Carácter de este documento

Este texto constituye una **primera condensación** del modelo en construcción.

No debe leerse como una formulación final cerrada, sino como una fijación
provisional de las partes que ya pueden enunciarse con suficiente claridad para
servir como base de desarrollo posterior.

Su función es reunir en una sola estructura los elementos ya estabilizados del
proceso de modelado textual que se está construyendo.

---

## 2. Tesis central

El texto no debe entenderse como una unidad simple ni como una secuencia plana
de palabras.

Debe entenderse como una **entidad modelable** cuya construcción pasa, al menos,
por tres momentos distinguibles:

1. **instanciación textual multidimensional**;
2. **adaptación**;
3. **manifestación material**.

La primera fija la configuración interna del texto.
La segunda traduce esa configuración a un contexto de salida específico.
La tercera constituye la comparecencia concreta del texto en un formato dado.

---

## 3. Arquitectura Multidimensional del Texto

La Arquitectura Multidimensional del Texto es el marco general bajo el cual un
texto puede describirse como una configuración compuesta por varias dimensiones
independientes.

Cada dimensión constituye un eje de modelado propio.
Ninguna de ellas agota por sí sola al texto.
Un texto concreto se obtiene cuando se fija una instancia en cada una de esas
dimensiones.

En su estado actual, el modelo reconoce al menos las siguientes dimensiones:

- dimensión conceptual;
- dimensión narrativa;
- dimensión léxica;
- dimensión de despliegue textual;
- dimensión de voz o comparecencia;
- dimensión de ritmo y legibilidad;
- dimensión discursiva.

Estas dimensiones no deben leerse como partes encadenadas causalmente, sino como
bloques independientes de descripción dentro de una misma entidad textual.

---

## 4. Modelos base por dimensión

Cada dimensión necesita un **modelo base propio**.

La razón de esto es que no basta con reconocer que el texto tiene varias
dimensiones: también es necesario evitar que cada análisis textual redefina
arbitrariamente qué cuenta como “conceptual”, “narrativo”, “léxico”, “voz”, etc.

El modelo base de una dimensión fija:

- los elementos internos que la componen;
- la forma en que pueden asignarse valores a esos elementos;
- los límites de variación aceptables;
- y la estructura mínima que hace comparables distintas instancias de esa
  dimensión.

Por tanto, la Arquitectura Multidimensional del Texto no consiste solo en una
lista de dimensiones, sino en una familia de **modelos base dimensionales**.

---

## 5. La instancia textual multidimensional y las dimensiones del texto

Una instancia textual multidimensional es una configuración concreta del texto
antes de su manifestación material.

No es todavía:

- el texto final publicado;
- ni la pieza visible;
- ni el artefacto ya adaptado a un formato;
- ni la salida concreta en un contexto de plataforma.

Es la fijación de valores sobre los modelos base de las dimensiones que
constituyen al texto como entidad modelable.

Formalmente, puede representarse como una tupla del tipo:

**T = (C, N, L, E, V, R, D, ...)**

donde:

- **C** = instancia de la dimensión conceptual;
- **N** = instancia de la dimensión narrativa;
- **L** = instancia de la dimensión léxica;
- **E** = instancia de la dimensión de despliegue textual;
- **V** = instancia de la dimensión de voz o comparecencia;
- **R** = instancia de la dimensión de ritmo y legibilidad;
- **D** = instancia de la dimensión discursiva.

Cada uno de estos componentes no es un valor simple, sino un **vector o tupla de
configuración** sobre el modelo base de su dimensión correspondiente.

Eso significa que una dimensión no debe colapsarse en una sola etiqueta. Por
ejemplo, la dimensión discursiva no debe reducirse a una palabra como
“explicación pedagógica”, sino entenderse como una configuración interna sobre su
modelo base, cuya lectura resumida puede ubicarse dentro de esa región
discursiva.

La instancia textual multidimensional debe entenderse, entonces, como un objeto
compuesto por varias configuraciones independientes, cada una de las cuales
describe un aspecto distinto del texto.

---

### 5.1. Sentido general de las dimensiones

Las dimensiones del texto son ejes independientes de modelado.

Su función no es dividir el texto en partes físicas, sino permitir describir
distintos planos de configuración que, juntos, hacen posible una instancia
textual concreta.

Cada dimensión responde a una pregunta distinta:

- la dimensión conceptual responde a **qué contenido estructural entra al texto**;
- la dimensión narrativa responde a **cómo se organiza la exposición de ese contenido**;
- la dimensión léxica responde a **con qué tipo de materia verbal comparece**;
- la dimensión de despliegue responde a **cómo se distribuye materialmente**;
- la dimensión de voz responde a **qué tipo de presencia proyecta**;
- la dimensión de ritmo y legibilidad responde a **cómo se experimenta el
  recorrido del texto**;
- la dimensión discursiva responde a **qué modo de formulación adopta la
  instancia textual**.

Estas dimensiones no deben confundirse entre sí, ni deben colapsarse en una sola
descripción general del texto.

---

### 5.2. Necesidad de modelos base por dimensión

No basta con reconocer que el texto tiene varias dimensiones. También es
necesario fijar un **modelo base para cada una**.

La razón es estructural:

si cada vez que se quisiera describir un texto se redefiniera arbitrariamente qué
se entiende por “conceptual”, “narrativo”, “léxico”, “voz” o “discurso”, entonces
cada texto quedaría modelado bajo una estructura distinta.

Eso impediría:

- comparar textos;
- reconocer familias de configuración;
- detectar invariantes;
- trasladar soluciones;
- y construir una teoría acumulativa del modelado textual.

Por eso, cada dimensión debe poseer un modelo base estable, es decir, una
estructura mínima de elementos internos sobre los cuales pueda fijarse una
configuración concreta.

El modelo base de una dimensión determina:

- qué elementos internos la constituyen;
- qué valores pueden asignarse a esos elementos;
- cómo se describe una instancia de esa dimensión;
- y qué hace comparable una configuración con otra.

---

### 5.3. Dimensión conceptual

La dimensión conceptual modela el contenido estructural del texto.

Su función es fijar:

- qué ideas activas entran en la unidad;
- de dónde proviene cada una;
- qué función local cumple;
- cuánto aporta cada una;
- y qué grado de estabilización tiene.

En esta dimensión se ubica la **trazabilidad conceptual**.

#### Modelo base de la dimensión conceptual

El modelo base conceptual debe permitir describir cualquier unidad textual, al
menos, mediante los siguientes elementos:

- `unidad_de_destino`;
- `texto_consolidado` o formulación objetivo;
- `ideas_fuente_activas`;
- `origen_tipo`;
- `origen`;
- `idea_extraida`;
- `funcion_en_la_unidad`;
- `peso`;
- `modo_de_uso`;
- `estado`.

La configuración conceptual de una instancia textual consiste en asignar valores
a esos elementos.

Eso quiere decir que **C** no es una idea, ni un tema, ni un concepto aislado.
**C** es un vector de configuración sobre este modelo base.

Por ejemplo, una lectura resumida podría decir:
“esta instancia trabaja el tema de convertibilidad con fuerte apoyo en tres ideas
centrales y dos ideas complementarias”, pero esa frase no reemplaza a la
configuración conceptual misma.

#### Qué permite esta dimensión

Permite:

- saber qué sostiene realmente el texto;
- distinguir ideas nucleares y periféricas;
- trabajar con material ya documentado y con materia prima aún no estabilizada;
- y controlar la composición conceptual de una unidad textual.

---

### 5.4. Dimensión narrativa

La dimensión narrativa modela la organización de la exposición.

No fija qué ideas existen, sino cómo se distribuyen a lo largo de la trayectoria
del texto.

Su función es fijar:

- la forma de apertura;
- la lógica de progresión;
- el orden de exposición;
- las transiciones;
- los retornos o recapitulaciones;
- la forma de cierre;
- y el régimen general del recorrido narrativo.

En esta dimensión se ubica la **trazabilidad narrativa**.

#### Modelo base de la dimensión narrativa

El modelo base narrativo debe permitir describir, al menos:

- `unidad_de_destino`;
- `estrategia_narrativa_general`;
- `funcion_de_apertura`;
- `modo_de_progresion`;
- `distribucion_de_bloques`;
- `transiciones`;
- `modo_de_cierre`;
- `grado_de_recapitulacion`;
- `peso_narrativo` o distribución interna de decisiones narrativas;
- `estado_narrativo`.

La configuración narrativa de una instancia consiste en asignar valores a esos
elementos.

Eso quiere decir que **N** no debe colapsarse en una sola expresión como
“desarrollo escalonado” o “apertura por pregunta”. Esas expresiones pueden ser
lecturas parciales o nombres de regiones dentro del espacio narrativo, pero no
agotan la configuración narrativa completa.

#### Qué permite esta dimensión

Permite:

- mantener fijo el contenido y variar la forma de exposición;
- comparar dos textos con la misma base conceptual pero con recorrido distinto;
- y construir familias de organización narrativa reutilizables.

---

### 5.5. Dimensión léxica

La dimensión léxica modela el tipo de materia verbal con la que comparece el
texto.

No se reduce a elegir entre “formal” e “informal”. Su función es describir el
perfil verbal de la instancia textual.

Fija cosas como:

- formalidad;
- tecnicidad;
- accesibilidad;
- densidad terminológica;
- abstracción;
- registro predominante;
- proximidad coloquial o institucional;
- y nivel de especialización del vocabulario.

#### Modelo base de la dimensión léxica

El modelo base léxico debe permitir describir, al menos:

- `grado_de_formalidad`;
- `grado_de_tecnicidad`;
- `grado_de_accesibilidad`;
- `densidad_terminologica`;
- `grado_de_abstraccion`;
- `registro_predominante`;
- `tipo_de_vocabulario_dominante`;
- `variacion_lexica`;
- `estado_lexico`.

La configuración léxica de una instancia textual consiste en asignar valores a
estos elementos.

Eso quiere decir que **L** no es “formalidad alta” ni “léxico técnico” como
etiquetas sueltas. Es un vector de valores sobre este modelo base.

#### Qué permite esta dimensión

Permite:

- comparar textos con el mismo contenido pero distinta textura verbal;
- modular dificultad y accesibilidad;
- y estabilizar perfiles léxicos según el tipo de lector o la función del texto.

---

### 5.6. Dimensión de despliegue textual

La dimensión de despliegue textual modela cómo se distribuye materialmente el
texto.

No se limita al número total de palabras. Incluye la forma en que el texto ocupa
el espacio de lectura.

Fija:

- longitud total;
- longitud media de párrafos;
- longitud media de frases;
- grado de compactación;
- segmentación;
- granularidad material;
- relación entre bloques;
- y densidad visible del texto.

#### Modelo base de la dimensión de despliegue

El modelo base de despliegue debe permitir describir, al menos:

- `longitud_total`;
- `numero_de_bloques`;
- `longitud_media_de_parrafo`;
- `longitud_media_de_frase`;
- `grado_de_segmentacion`;
- `grado_de_compactacion`;
- `granularidad_material`;
- `densidad_visual`;
- `estado_de_despliegue`.

La configuración de despliegue consiste en fijar una instancia sobre esos
elementos.

Eso quiere decir que **E** no debe reducirse a “texto corto” o “párrafos largos”.
Esas son lecturas resumidas de una configuración de despliegue, no la dimensión
misma.

#### Qué permite esta dimensión

Permite:

- distinguir textos semánticamente cercanos pero materialmente muy distintos;
- controlar la forma visible de la comparecencia textual;
- y diseñar salidas compatibles con distintas condiciones de lectura.

---

### 5.7. Dimensión de voz o comparecencia

La dimensión de voz modela la presencia que el texto proyecta.

No se refiere solo al tono superficial, sino a la forma en que la instancia
textual comparece ante el lector como entidad expresiva.

Fija cosas como:

- cercanía;
- distancia;
- autoridad;
- calidez;
- intensidad;
- sobriedad;
- marcación subjetiva;
- impersonalidad;
- y régimen general de comparecencia.

#### Modelo base de la dimensión de voz

El modelo base de voz debe permitir describir, al menos:

- `grado_de_cercania`;
- `grado_de_distancia`;
- `grado_de_autoridad`;
- `grado_de_calidez`;
- `grado_de_intensidad`;
- `grado_de_sobriedad`;
- `modo_de_comparecencia`;
- `marcacion_de_la_voz`;
- `estado_de_voz`.

La configuración de voz consiste en fijar una instancia sobre esos elementos.

Eso quiere decir que **V** no es simplemente “voz sobria” o “voz cercana”.
Es una configuración interna más rica, cuya lectura resumida puede caer en una
de esas etiquetas.

#### Qué permite esta dimensión

Permite:

- distinguir textos que dicen casi lo mismo pero comparecen como entidades
  distintas;
- trabajar la relación entre texto y lector;
- y estabilizar una forma de presencia textual coherente.

---

### 5.8. Dimensión de ritmo y legibilidad

La dimensión de ritmo y legibilidad modela la experiencia de recorrido del texto.

No se refiere al contenido ni al tono, sino a cómo se siente el procesamiento del
texto para el lector.

Fija cosas como:

- velocidad percibida;
- explicitud;
- continuidad;
- recapitulación;
- fricción;
- dificultad de procesamiento;
- compresión;
- respiración textual.

#### Modelo base de la dimensión de ritmo y legibilidad

El modelo base de esta dimensión debe permitir describir, al menos:

- `velocidad_percibida`;
- `grado_de_explicitud`;
- `grado_de_continuidad`;
- `grado_de_recapitulacion`;
- `nivel_de_friccion`;
- `dificultad_de_procesamiento`;
- `grado_de_compresion`;
- `respiracion_textual`;
- `estado_de_recorrido`.

La configuración correspondiente consiste en asignar valores a esos elementos.

Eso quiere decir que **R** no debe reducirse a “texto claro”, “texto denso” o
“texto fluido”. Esas expresiones son simplificaciones de una configuración
vectorial más compleja.

#### Qué permite esta dimensión

Permite:

- describir por qué un texto se siente pesado, ligero, claro o exigente;
- y separar problemas de legibilidad de problemas conceptuales o narrativos.

---

### 5.9. Dimensión discursiva

La dimensión discursiva modela el tipo de formulación textual que adopta la
instancia.

Su función no es fijar el formato material final, sino la región de formulación
a la que pertenece la instancia textual antes de su adaptación.

Fija cosas como:

- orientación definicional;
- orientación pedagógica;
- orientación argumentativa;
- orientación operativa;
- orientación de captación;
- grado de guía discursiva;
- régimen de cierre;
- tipo de mediación.

#### Modelo base de la dimensión discursiva

El modelo base discursivo debe permitir describir, al menos:

- `modo_discursivo_predominante`;
- `grado_de_formulacion_definicional`;
- `grado_de_mediacion_pedagogica`;
- `grado_de_orientacion_argumentativa`;
- `grado_de_orientacion_operativa`;
- `grado_de_funcion_de_captacion`;
- `tipo_de_cierre_discursivo`;
- `grado_de_guia_al_lector`;
- `estado_discursivo`.

La configuración discursiva consiste en asignar valores a esos elementos.

Eso quiere decir que **D** no debe colapsarse en una sola etiqueta como
“explicación pedagógica” o “definición técnica”. Esas expresiones son lecturas
abreviadas de regiones dentro del espacio discursivo, no la configuración
discursiva completa.

#### Qué permite esta dimensión

Permite:

- distinguir una misma base conceptual expresada bajo distintas lógicas de
  formulación;
- separar la configuración discursiva de la manifestación material;
- y explicar por qué una misma instancia puede luego adaptarse a formatos
  distintos sin dejar de pertenecer a una región discursiva reconocible.

---

### 5.10. Lectura de conjunto de la instancia textual multidimensional

La instancia textual multidimensional no debe leerse como una colección de
etiquetas, sino como una configuración simultánea de vectores sobre modelos base.

Por tanto, cuando se dice:

**T = (C, N, L, E, V, R, D, ...)**

lo que se está afirmando es que el texto, antes de manifestarse materialmente,
puede ser descrito como:

- una configuración conceptual;
- una configuración narrativa;
- una configuración léxica;
- una configuración de despliegue;
- una configuración de voz;
- una configuración de ritmo y legibilidad;
- y una configuración discursiva.

Cada una de estas configuraciones es independiente de las demás en cuanto
dimensión de modelado, aunque todas coexistan dentro de la misma instancia.

Ésta es la forma mínima en que el texto queda fijado como objeto del dominio
antes de pasar por un adaptador y convertirse en una manifestación material
concreta.

### 5.11. Tipificación de valores y criterio de asignación

La Arquitectura Multidimensional del Texto no queda suficientemente definida
cuando se enuncian las dimensiones y los elementos internos de sus modelos base.

Para que dichos modelos base sean realmente operables, comparables e
instanciables, es necesario fijar también la **tipificación de valores** que
puede tomar cada uno de sus elementos.

Esto significa que, además de decir que una dimensión posee ciertos componentes,
debe indicarse:

- qué tipo de valor admite cada componente;
- si admite un valor único o múltiples valores;
- si ese valor pertenece a un catálogo cerrado, a una escala, a una estructura
  secuencial o a una descripción abierta;
- y qué restricciones deben cumplirse para que la instancia resultante siga
  siendo válida.

Dicho de forma más fuerte:

un modelo base no está completo mientras sus elementos sigan funcionando como
casilleros vacíos rellenables de manera arbitraria.

Por eso, la tipificación de valores constituye una capa necesaria de la
Arquitectura Multidimensional del Texto.

---

#### 5.11.1. Función de la tipificación de valores

La tipificación de valores cumple al menos cinco funciones:

1. evita que cada nueva descripción textual invente un modelo distinto en la
   práctica;
2. vuelve comparables entre sí las instancias de una misma dimensión;
3. distingue entre elementos que admiten escalas, clases, secuencias o
   configuraciones más complejas;
4. permite construir instancias textuales multidimensionales mejor determinadas;
5. reduce el margen de opacidad que luego cargarían los adaptadores.

En este sentido, la tipificación de valores no es un refinamiento lateral del
modelo, sino una condición de posibilidad para que los modelos base de las
dimensiones puedan considerarse completos.

---

#### 5.11.2. Tipos generales de valores que conviene distinguir

A continuación se fijan, de manera provisional, los tipos generales de valores
que conviene distinguir dentro de los modelos base de las dimensiones.

##### a) Valor categorial cerrado

Es un valor tomado de un conjunto finito de clases posibles.

Se usa cuando el elemento representa una clase y no una intensidad.

Ejemplos típicos:

- tipo de apertura;
- modo de cierre;
- registro predominante;
- origen tipo;
- estado.

##### b) Valor ordinal

Es un valor ordenado, aunque no necesariamente continuo.

Se usa cuando importa la gradación pero no se requiere precisión fina.

Ejemplos típicos:

- bajo / medio / alto;
- débil / medio / fuerte;
- mínimo / moderado / intenso.

##### c) Valor escalar normalizado

Es un valor numérico dentro de un intervalo controlado, típicamente entre 0 y 1.

Se usa cuando interesa medir intensidad, proporción o distribución.

Ejemplos típicos:

- peso;
- grado de formalidad;
- grado de explicitud;
- grado de cercanía;
- grado de tecnicidad.

##### d) Valor intervalar o de rango

Es un intervalo admisible en vez de un punto único.

Se usa cuando la configuración no exige exactitud puntual sino una banda de
variación compatible.

Ejemplos típicos:

- longitud entre 600 y 900 palabras;
- número de bloques entre 5 y 8;
- longitud media de frase dentro de cierto rango.

##### e) Valor descriptivo abierto

Es una formulación textual controlada que todavía no conviene cerrar por catálogo
o escala.

Se usa cuando el elemento requiere mantener riqueza semántica.

Ejemplos típicos:

- idea extraída;
- texto consolidado;
- descripción de una restricción;
- nota metodológica.

##### f) Valor referencial

Es un valor cuyo papel principal es apuntar a otra unidad del sistema.

Se usa cuando el elemento no describe una propiedad interna, sino una relación
con otra entidad.

Ejemplos típicos:

- unidad de destino;
- origen;
- id de idea fuente;
- id de adaptador;
- id de documento.

##### g) Valor vectorial

Es una configuración compuesta por varios subvalores simultáneos.

Se usa cuando el elemento no puede reducirse a una sola etiqueta ni a una sola
escala.

Ejemplos típicos:

- cualquier dimensión completa;
- configuración de voz;
- configuración discursiva;
- distribución interna de una instancia narrativa.

##### h) Valor secuencial

Es una lista ordenada de elementos.

Se usa cuando importa el orden interno y no solo la pertenencia a una clase.

Ejemplos típicos:

- distribución de bloques;
- secuencia de transiciones;
- progresión narrativa;
- orden de exposición.

##### i) Valor distributivo o ponderado

Es un conjunto de elementos con pesos asociados.

Se usa cuando la unidad no posee un solo valor dominante, sino una composición.

Ejemplos típicos:

- ideas fuente activas con peso;
- mezcla de estrategias narrativas;
- combinación de funciones discursivas;
- composición de registros.

##### j) Valor compuesto estructurado

Es una mini-estructura con varios campos internos de distinto tipo.

Se usa cuando el elemento ya posee organización propia y no conviene
simplificarlo.

Ejemplos típicos:

- una idea fuente completa;
- una transición compleja;
- una salida concreta de adaptador;
- un bloque narrativo enriquecido.

---

#### 5.11.3. Criterio general para asignar tipos de valor

La asignación de tipos de valor a los elementos de una dimensión no debe hacerse
de manera arbitraria.

Cada elemento del modelo base debería poder describirse, al menos, por medio de
los siguientes criterios:

1. **tipo formal de valor**  
   determina si el elemento admite un valor categorial, ordinal, escalar,
   secuencial, referencial, descriptivo, vectorial, distributivo o compuesto;

2. **familia o espacio de valores posibles**  
   determina cuáles son los valores admisibles o qué región de valores puede
   tomar;

3. **cardinalidad**  
   determina si el elemento admite:
   - un solo valor,
   - varios valores,
   - una secuencia,
   - o una distribución ponderada;

4. **restricciones de validez**  
   determina qué condiciones deben cumplirse para que la asignación siga siendo
   consistente con el modelo;

5. **grado de cierre del espacio de valores**  
   determina si el elemento se resuelve mediante:
   - catálogo cerrado,
   - escala,
   - rango,
   - descripción abierta controlada,
   - o configuración mixta.

Este criterio evita que los elementos del modelo base se interpreten libremente
en cada nueva instancia.

---

#### 5.11.4. Consecuencia metodológica

La consecuencia metodológica de esta tipificación es decisiva:

la Arquitectura Multidimensional del Texto deja de ser solo una enumeración de
dimensiones con componentes internos y comienza a convertirse en una arquitectura
de instanciación verdaderamente controlada.

Eso quiere decir que:

- cada dimensión no solo tiene elementos;
- cada elemento no solo tiene nombre;
- y cada nombre no solo tiene una función;

sino que además cada elemento posee una estructura de valores posible que lo
vuelve instanciable de manera consistente.

Solo en ese punto la instancia textual multidimensional deja de ser una
composición abierta y comienza a derivarse de modelos base suficientemente
determinados.

---

#### 5.11.5. Relación con el desarrollo futuro del modelo

Esta sección no cierra todavía los espacios de valores de cada elemento de cada
dimensión.

Su función es más básica y más importante:

fijar la necesidad de tipificar esos valores y establecer el marco general bajo
el cual esa tipificación deberá realizarse después.

Por tanto, el siguiente refinamiento natural del modelo consiste en trabajar
dimensión por dimensión y, dentro de cada una, elemento por elemento, hasta
especificar:

- el tipo de valor correspondiente;
- el conjunto o familia de valores posibles;
- las restricciones internas;
- y las regiones típicas de configuración que comiencen a emerger.

## 6. Descripción mínima de las dimensiones actuales

### 6.1. Dimensión conceptual

Modela qué contenido estructural entra al texto.

Su función es fijar:

- ideas activas;
- origen de esas ideas;
- función local de cada una;
- peso relativo;
- estado de formalización.

Aquí se ubica la trazabilidad conceptual.

### 6.2. Dimensión narrativa

Modela cómo se organiza la exposición del contenido.

Su función es fijar:

- apertura;
- progresión;
- orden de aparición;
- transiciones;
- forma de cierre;
- régimen general de exposición.

Aquí se ubica la trazabilidad narrativa.

### 6.3. Dimensión léxica

Modela con qué tipo de materia verbal comparece el texto.

Su función es fijar:

- formalidad;
- tecnicidad;
- accesibilidad;
- densidad terminológica;
- abstracción;
- registro predominante.

### 6.4. Dimensión de despliegue textual

Modela cómo se distribuye materialmente el texto.

Su función es fijar:

- longitud total;
- tamaño de párrafos;
- longitud de frases;
- segmentación;
- compactación;
- granularidad material.

### 6.5. Dimensión de voz o comparecencia

Modela qué tipo de presencia proyecta el texto.

Su función es fijar:

- cercanía;
- autoridad;
- distancia;
- intensidad;
- sobriedad;
- forma de comparecencia textual.

### 6.6. Dimensión de ritmo y legibilidad

Modela cómo se experimenta el recorrido del texto.

Su función es fijar:

- velocidad percibida;
- explicitud;
- continuidad;
- recapitulación;
- fricción;
- dificultad de procesamiento.

### 6.7. Dimensión discursiva

Modela el tipo de formulación textual que adopta la instancia.

Su función es fijar regiones como:

- definición técnica;
- explicación pedagógica;
- síntesis operativa;
- exposición argumentativa;
- pieza de captación;
- u otras formas equivalentes de formulación.

Estas regiones no constituyen todavía la manifestación material final, sino
configuraciones posibles dentro de la propia instancia textual.

---

## 7. El dominio

El dominio del proceso de adaptación está formado por el conjunto de instancias
textuales multidimensionales.

Es decir, el dominio no es el tema ni el texto ya publicado, sino el conjunto de
configuraciones del tipo:

**X = { T | T = (C, N, L, E, V, R, D, ...) }**

donde cada componente de **T** es una tupla o vector sobre su modelo base.

El dominio es, por tanto, el espacio de todas las instancias textuales
proyectables bajo la arquitectura multidimensional.

---

## 8. El adaptador

El adaptador es el operador que toma una instancia textual multidimensional ya
fijada y la traduce a una manifestación material concreta.

No debe entenderse como una simple función abstracta ni como una mera plantilla
editorial.

Debe entenderse como una **función protocolizada de manifestación**.

Es función porque:

- toma un elemento del dominio;
- y produce una salida perteneciente a un espacio de codominio.

Es protocolizada porque:

- prescribe reglas concretas de transformación;
- opera bajo restricciones;
- garantiza consistencia;
- y permite repetibilidad en la adaptación.

En este marco, el adaptador refina simultáneamente:

- la idea de **función**, porque asocia instancias a salidas;
- la idea de **protocolo**, porque esa asociación está normada por un procedimiento.

---

## 9. El codominio

El codominio no debe confundirse con el “contexto” en abstracto ni con una sola
salida puntual.

Cada adaptador opera respecto de un **espacio de codominio** definido por un
formato-plataforma-contexto determinado.

Por ejemplo:

- **Y_IG_Car** = espacio de manifestaciones compatibles con un carrusel de Instagram
- **Y_IG_Reel** = espacio de manifestaciones compatibles con un reel de Instagram
- **Y_FB_Post** = espacio de manifestaciones compatibles con una publicación de Facebook
- **Y_YT_Short** = espacio de manifestaciones compatibles con un short de YouTube
- **Y_YT_Long** = espacio de manifestaciones compatibles con un video largo de YouTube
- **Y_Newsletter** = espacio de manifestaciones compatibles con una newsletter
- **Y_Thread** = espacio de manifestaciones compatibles con un hilo

Eso significa que el formato-plataforma no es una salida individual, sino el
marco que define un conjunto de salidas posibles.

---

## 10. Manifestación material

La manifestación material es la salida concreta del adaptador.

Es una realización específica que comparece dentro de uno de los espacios de
codominio.

Por ejemplo:

- **A_IG_Car(T1) = m1, donde m1 pertenece a Y_IG_Car**
- **A_Newsletter(T1) = m2, donde m2 pertenece a Y_Newsletter**
- **A_Thread(T1) = m3, donde m3 pertenece a Y_Thread**

Aquí:

- **T1** es una instancia textual multidimensional del dominio;
- **m1**, **m2**, **m3** son manifestaciones materiales concretas;
- cada una pertenece al espacio de codominio correspondiente.

La misma instancia puede, en principio, ser pasada por adaptadores distintos y
dar lugar a manifestaciones materiales distintas, siempre que sean compatibles
con las reglas del adaptador usado.

---

## 11. Secuencia general del proceso

En su forma más condensada, el proceso queda así:

**modelos base por dimensión  
→ instancia textual multidimensional  
→ adaptador como función protocolizada  
→ manifestación material en un espacio de codominio**

O, en fórmula más explícita:

1. se fijan los modelos base de cada dimensión;
2. se construye una instancia textual multidimensional asignando valores a los
   elementos de cada modelo base;
3. se selecciona un adaptador orientado a un contexto-formato específico;
4. la instancia es traducida a una manifestación material concreta;
5. dicha manifestación comparece como pieza textual contextualizada.

---

## 12. Qué aporta este proceso

Este proceso permite:

- distinguir claramente entre configuración textual y pieza final;
- modelar textos como instancias comparables;
- separar dominio y manifestación;
- entender la adaptación como operación normada;
- usar una misma instancia en contextos de salida distintos;
- y evitar que cada análisis textual invente categorías incompatibles.

También permite integrar, dentro de una misma estructura:

- la trazabilidad conceptual;
- la trazabilidad narrativa;
- y otras dimensiones que todavía no han sido completamente desarrolladas.

---

## 13. Estado actual del modelo

Este modelo debe leerse como una estructura en construcción ya suficientemente
estable en sus principios principales, pero todavía abierta en varios puntos, por
ejemplo:

- refinamiento del modelo base de cada dimensión;
- identificación de nuevas dimensiones;
- definición más precisa de los protocolos de adaptación;
- formalización de reglas de compatibilidad entre instancia y codominio;
- y expansión de los tipos de manifestación material.

---

## 14. Fórmula provisional final

La Arquitectura Multidimensional del Texto puede describirse, en esta primera
condensación, como un proceso en el que un texto es modelado como una instancia
multidimensional compuesta por vectores de configuración sobre modelos base
dimensionales, y luego es traducido por un adaptador —concebido como función
protocolizada— a una manifestación material concreta dentro de un espacio de
codominio definido por un formato y un contexto de salida.

---

## 15. Cierre

El núcleo del proceso ya puede formularse así:

el texto no nace directamente como pieza visible.

Primero se configura como instancia textual multidimensional.
Luego se adapta bajo un protocolo.
Finalmente comparece como manifestación material.

Esa secuencia constituye, por ahora, la forma más condensada y estable del modelo
en construcción.
