https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69dec1b6-dddc-83e8-b70a-5c93f7a83e48

# Tipificación para modelos base

## Metalenguaje general para la construcción de modelos base

## 1. Carácter de este documento

Este documento describe los **tipos** que pueden utilizarse al construir
modelos base.

No define por sí solo un modelo base concreto.
No sustituye la definición general de `modelos-base.md`.
No sustituye tampoco el refinamiento propuesto en `refinamiento-modelo-base.md`.

Su función es otra:

proporcionar un **metalenguaje de tipificación** que permita decir, para cada
elemento de un modelo base, qué clase de valor puede ocupar ese lugar.

Debe leerse, por tanto, como un documento complementario.

Su relación con los demás documentos del artefacto es la siguiente:

- `modelos-base.md` fija qué es un modelo base y qué problema resuelve;
- `refinamiento-modelo-base.md` muestra por qué un modelo base general no basta;
- este documento fija la **tipología general de valores** que puede usarse al
  construir modelos base más completos;
- y los documentos de ejemplos, como
  `arquitectura-multidimensional/arquitectura-multidimensional-de-texto.md`,
  pueden apoyarse en esta tipificación al definir sus elementos.

---

## 2. Qué es un tipo en este contexto

En este contexto, un **tipo** no es todavía el valor concreto de un elemento.

Tampoco es su definición semántica.
Tampoco es el espacio completo de valores posibles que puede tomar.

Un tipo responde a una pregunta más básica:

**¿qué clase de valor puede ocupar este lugar del modelo?**

Por eso, si un elemento de un modelo base se llama, por ejemplo,
`modo_de_cierre`, el tipo no dice todavía qué valores concretos tendrá.
Lo que dice es si ese lugar admite:

- una clase cerrada;
- una escala;
- una secuencia;
- una estructura compuesta;
- una referencia;
- o alguna otra forma general de valor.

Dicho de manera simple:

- el **nombre del elemento** dice qué lugar se quiere modelar;
- la **descripción del elemento** dice qué significa ese lugar;
- el **tipo** dice qué clase de valor puede ocuparlo;
- el **espacio de valores posibles** dice qué valores concretos puede tomar.

---

## 3. Qué no hace la tipificación por sí sola

La tipificación es necesaria, pero no suficiente.

Un modelo base sigue siendo incompleto si para cada elemento solo se da:

- el nombre;
- y el tipo.

Por ejemplo, no basta con decir:

`ideas_fuente_activas`  
Tipo: distributivo estructurado

Eso no basta porque todavía quedan abiertas preguntas como:

- qué significa exactamente “idea” en ese modelo;
- qué cuenta como idea activa;
- cómo se organiza internamente cada entrada;
- cómo se distingue una entrada válida de una inválida;
- y qué relación guarda ese elemento con los demás elementos del modelo.

Entonces, este documento no debe usarse para justificar modelos base incompletos.

Su función es más limitada y más precisa:

**dar el vocabulario tipológico con el que luego deben construirse los modelos.**

---

## 4. Para qué sirve la tipificación

La tipificación sirve para varias cosas al mismo tiempo.

### 4.1. Evita casilleros vacíos

Impide que los elementos del modelo base sean tratados como lugares donde puede
ponerse cualquier cosa.

### 4.2. Da forma al valor

Permite decir si un elemento admite una clase, una escala, una secuencia, una
referencia, una distribución, una estructura compuesta, etc.

### 4.3. Vuelve comparables las instancias

Si dos instancias llenan un mismo elemento con valores del mismo tipo, ya existe
una base mínima de comparabilidad formal.

### 4.4. Prepara la definición del espacio de valores

Antes de fijar qué valores concretos son posibles, conviene fijar qué clase de
objeto puede ocupar ese lugar.

### 4.5. Permite detectar errores de construcción

Si se intenta llenar un elemento con un valor de un tipo que no le corresponde,
el error ya puede detectarse.

---

## 5. Distinción fundamental: tipo de valor y espacio de valores posibles

Esta distinción es indispensable.

### 5.1. Tipo de valor

El tipo de valor responde a la pregunta:

**¿qué clase de objeto puede ocupar este lugar?**

Ejemplos:

- categorial cerrado;
- ordinal;
- escalar;
- secuencial;
- referencial;
- descriptivo abierto;
- compuesto estructurado.

### 5.2. Espacio de valores posibles

El espacio de valores posibles responde a otra pregunta:

**¿qué variantes concretas puede tomar ese valor?**

Por ejemplo, un elemento puede tener tipo:

- categorial cerrado

y su espacio de valores posibles puede ser:

- `definicional`
- `pedagogico`
- `argumentativo`
- `operativo`

Entonces:

- el tipo dice la forma general del valor;
- el espacio de valores posibles dice su repertorio concreto.

No distinguir estas dos cosas vuelve muy confusa la construcción del modelo.

---

## 6. Catálogo general de tipos

A continuación se fija una tipología general de valores que puede servir como
metalenguaje para construir modelos base.

No todos los modelos usarán todos estos tipos.
No todos los tipos serán igualmente relevantes en todos los dominios.
Pero el catálogo funciona como repertorio general.

---

## 7. Valor categorial cerrado

Un valor categorial cerrado es un valor tomado de un conjunto finito de clases
posibles.

Se usa cuando el elemento representa una **clase** y no una intensidad, una
secuencia o una estructura compleja.

### Cuándo usarlo

Conviene usarlo cuando el elemento responde a preguntas del tipo:

- ¿a qué clase pertenece?
- ¿qué modo dominante presenta?
- ¿qué tipo de caso es?
- ¿qué función general cumple?

### Qué no expresa

No expresa gradación interna fina.
No expresa orden continuo.
No expresa composición múltiple, salvo que se le combine con otra estructura.

### Ejemplo abstracto

Elemento: `modo_de_cierre`  
Tipo: categorial cerrado

Esto no dice todavía cuáles son los cierres posibles, pero sí dice que el valor
de ese elemento debe pertenecer a una clase cerrada y no a una escala o
descripción libre.

---

## 8. Valor ordinal

Un valor ordinal es un valor que expresa gradación ordenada sin requerir todavía
una cuantificación fina.

Se usa cuando importa el orden entre posiciones, pero no hace falta un continuo
numérico.

### Cuándo usarlo

Conviene usarlo para elementos que expresan:

- intensidad relativa;
- gradación comparativa;
- niveles cualitativos ordenados.

### Ejemplo abstracto

Elemento: `grado_de_guia_requerida`  
Tipo: ordinal

Esto dice que el elemento expresa una gradación ordenable, por ejemplo:
baja, media, alta.
Pero el tipo no agota todavía ese repertorio.

---

## 9. Valor escalar

Un valor escalar es un valor que expresa intensidad, magnitud o proporción sobre
una escala continua o semicon tinua.

Se usa cuando no basta con un orden cualitativo simple y conviene modelar una
gradación más fina.

### Cuándo usarlo

Conviene usarlo para elementos como:

- grados;
- pesos;
- niveles continuos;
- proporciones;
- intensidades cuantificables.

### Rasgo importante

Un valor escalar suele necesitar:

- rango permitido;
- unidad o forma de medida;
- y, cuando aplique, normalización.

### Ejemplo abstracto

Elemento: `peso`  
Tipo: escalar

Eso dice que el valor no será una clase ni una descripción libre, sino una
magnitud cuantificable.

---

## 10. Valor intervalar o de rango

Un valor intervalar no fija un punto exacto, sino un intervalo permitido.

Se usa cuando lo relevante no es un valor puntual, sino una banda de variación.

### Cuándo usarlo

Conviene usarlo cuando el modelo no quiere decir:

- exactamente cuánto vale algo,

sino:

- dentro de qué rango puede variar sin dejar de ser válido.

### Ejemplo abstracto

Elemento: `duracion_esperada`  
Tipo: intervalar

Eso indica que el modelo espera una banda válida y no una cifra única.

---

## 11. Valor descriptivo abierto

Un valor descriptivo abierto es un valor expresado mediante texto controlado.

Se usa cuando aún no conviene cerrar el elemento mediante catálogo, escala o
estructura formal más rígida.

### Cuándo usarlo

Conviene usarlo cuando el elemento debe capturar:

- formulaciones todavía abiertas;
- notas semánticas;
- aclaraciones;
- o contenidos que no conviene clausurar prematuramente.

### Riesgo

Este tipo debe usarse con cuidado, porque si se usa demasiado puede devolver al
modelo al problema de la arbitrariedad.

### Ejemplo abstracto

Elemento: `descripcion_del_conflicto`  
Tipo: descriptivo abierto

---

## 12. Valor referencial

Un valor referencial es un valor cuyo papel principal no es describir una
propiedad interna, sino apuntar a otra unidad del sistema.

Se usa cuando el elemento no contiene contenido sustantivo propio, sino una
relación con otra entidad.

### Cuándo usarlo

Conviene usarlo para:

- identificadores;
- referencias a documentos;
- referencias a nodos;
- referencias a instancias;
- referencias a secciones, modelos o piezas.

### Ejemplo abstracto

Elemento: `texto_id`  
Tipo: referencial

---

## 13. Valor vectorial

Un valor vectorial es un valor compuesto por varios componentes coordinados que
deben ser leídos como una configuración conjunta.

Se usa cuando un elemento no puede reducirse a una sola clase, escala o
descripción simple.

### Cuándo usarlo

Conviene usarlo cuando el elemento es ya una configuración interna.

Por ejemplo:

- una dimensión completa;
- una configuración de voz;
- una configuración discursiva;
- una configuración narrativa compleja.

### Qué lo distingue

Un valor vectorial no es una colección arbitraria.
Es una configuración donde cada subcomponente ocupa una posición determinada.

### Ejemplo abstracto

Elemento: `configuracion_discursiva`  
Tipo: vectorial

---

## 14. Valor secuencial

Un valor secuencial es un valor compuesto por una lista ordenada de elementos.

Se usa cuando el orden interno importa y no puede perderse.

### Cuándo usarlo

Conviene usarlo cuando el elemento describe:

- progresiones;
- secuencias de pasos;
- orden de aparición;
- bloques en trayectoria;
- o transiciones encadenadas.

### Ejemplo abstracto

Elemento: `distribucion_de_bloques`  
Tipo: secuencial

---

## 15. Valor distributivo o ponderado

Un valor distributivo o ponderado es un valor compuesto por varios elementos con
pesos, prioridades o distribuciones internas.

Se usa cuando no hay un solo valor dominante o cuando la estructura requiere
distribución explícita.

### Cuándo usarlo

Conviene usarlo para:

- colecciones ponderadas;
- mezcla de componentes;
- ideas activas con pesos;
- prioridades relativas;
- o distribuciones de influencia interna.

### Ejemplo abstracto

Elemento: `ideas_fuente_activas`  
Tipo: distributivo estructurado

Pero aquí debe recordarse algo importante:
el tipo por sí solo no basta. Todavía haría falta describir:

- qué cuenta como idea,
- cómo se compone cada entrada,
- y cómo se interpreta la distribución.

---

## 16. Valor compuesto estructurado

Un valor compuesto estructurado es un valor que contiene varios campos internos,
cada uno con posible función y tipo propios.

Se usa cuando el elemento ya no es un valor simple, sino una pequeña unidad con
organización propia.

### Cuándo usarlo

Conviene usarlo para:

- una entrada compleja;
- una ficha interna;
- una idea con varios atributos;
- un bloque con estructura propia;
- una restricción enriquecida;
- o una salida compuesta.

### Ejemplo abstracto

Elemento: `idea_fuente`  
Tipo: compuesto estructurado

Aquí el punto es decisivo:
si un elemento tiene este tipo, ya no debe tratarse como si fuera un valor
simple ni ponerse al mismo nivel que los campos que lo componen.

---

## 17. Valor booleano

Un valor booleano indica una condición de sí/no o presencia/ausencia.

No siempre será central en todos los modelos, pero conviene incluirlo en el
metalenguaje.

### Cuándo usarlo

Conviene usarlo cuando el elemento expresa:

- presencia o ausencia;
- activación o desactivación;
- cumplimiento o incumplimiento de una condición binaria.

### Ejemplo abstracto

Elemento: `requiere_validacion`  
Tipo: booleano

---

## 18. Valor mixto

Un valor mixto es un valor cuya estructura combina más de un tipo de valor.

Se usa cuando un elemento no puede describirse adecuadamente con un solo tipo
simple.

### Cuándo usarlo

Conviene usarlo cuando un elemento exige, por ejemplo:

- una clase dominante y además una escala;
- una referencia y además una descripción abierta;
- una secuencia y además restricciones cuantitativas.

### Ejemplo abstracto

Elemento: `modo_discursivo_predominante`  
Tipo: mixto

Si, por ejemplo, el modelo exige:

- una clase dominante,
- más una distribución secundaria,
- o una categoría con intensidad asociada.

---

## 19. Cómo debe usarse este catálogo

Este catálogo no debe utilizarse como una lista decorativa.

Cada vez que se construya un modelo base, para cada elemento debería poder
responderse al menos:

1. qué significa el elemento;
2. qué función cumple dentro del modelo;
3. qué tipo de valor admite;
4. cuál es su espacio de valores posibles;
5. si admite un solo valor o varios;
6. qué restricciones debe cumplir;
7. y, si es compuesto, cómo se organiza internamente.

Por eso, la tipificación no reemplaza a la definición del elemento.
La acompaña.

---

## 20. Relación con la ficha por elemento

La tipificación debe integrarse en una ficha más rica por cada elemento del
modelo base.

Una ficha mínima bien construida debería poder incluir:

- nombre del elemento;
- función del elemento;
- descripción semántica;
- tipo de valor;
- estructura interna del valor cuando aplique;
- espacio de valores posibles;
- cardinalidad;
- restricciones de validez;
- relación con otros elementos;
- ejemplo mínimo de instanciación.

Eso significa que este documento sobre tipos no agota la construcción de
modelos base.

Solo aporta una capa específica del trabajo: el **metalenguaje tipológico**.

---

## 21. Qué errores ayuda a evitar este documento

Usar bien la tipificación ayuda a evitar varios errores frecuentes.

### 21.1. Mezclar tipos incompatibles

Por ejemplo, tratar una secuencia como si fuera una clase simple.

### 21.2. Dejar elementos como casilleros vacíos

Por ejemplo, poner solo el nombre del elemento sin decir qué tipo de valor lo
llena.

### 21.3. Colapsar contenedor y contenido

Por ejemplo, poner al mismo nivel una colección y los atributos internos de cada
elemento de esa colección.

### 21.4. Confundir metadatos con contenido del modelo

Por ejemplo, mezclar trazabilidad documental con estructura propia de la unidad
modelada sin distinguir niveles.

### 21.5. Usar tipos como si reemplazaran la descripción semántica

Por ejemplo, creer que decir “distributivo estructurado” ya explica qué debe ir
en el elemento.

---

## 22. Fórmula final

La tipificación funciona como metalenguaje para construir modelos base porque
permite decir, para cada elemento, qué clase de valor puede ocupar ese lugar.

Pero un modelo base solo queda realmente bien construido cuando esa tipificación
se articula con:

- la definición del elemento;
- su función en el modelo;
- su espacio de valores posibles;
- su estructura interna;
- y sus restricciones de validez.

---

## 23. Cierre

Este documento no construye por sí solo ningún modelo base concreto.

Su tarea es más básica y más general:

fijar el lenguaje de tipos con el que luego pueden construirse modelos base más
claros, más comparables y menos arbitrarios.

Leído junto con `modelos-base.md` y `refinamiento-modelo-base.md`, este documento
debe servir como una pieza metodológica para evitar que los futuros modelos base
vuelvan a caer en el problema de nombrar elementos sin determinar qué clase de
valor pueden recibir.
