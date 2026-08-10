https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69e699df-51d8-83e8-8d90-4db744ee06b1

# Distinción de responsabilidades entre el modelo base y el protocolo/salida

## Documento de apoyo para el desarrollo de Protocolo de composición dimensional y Manifestación codominial compuesta

---

## 0. Propósito del documento

Este documento expande una distinción que se volvió decisiva durante el
refinamiento del sistema:

- qué pertenece al **modelo base**;
- qué pertenece al **Protocolo de composición dimensional**;
- y qué pertenece a la **Manifestación codominial compuesta**.

La necesidad de esta distinción aparece porque el sistema ya no puede pensarse
como una simple traducción entre una entrada textual y una salida textual.

La arquitectura correcta es otra:

1. las `Dimensiones de configuración` organizan el dominio de entrada;
2. sus instancias contextuales son recibidas por el adaptador;
3. cada valor de cada campo activa una contraparte protocolaria;
4. esas contrapartes producen contribuciones locales y globales;
5. y la salida final es una `Manifestación codominial compuesta`, construida por
   integración de todas esas contribuciones.

Este documento no describe todavía valores concretos de cada protocolo, ni fija
la sintaxis definitiva de la salida. Su función es otra:

> **establecer con claridad qué clase de cosas debe contener el modelo base y qué clase de cosas deben dejarse para el protocolo y para la salida.**

Esto será útil para evitar dos errores recurrentes:

- cargar el modelo base con decisiones que en realidad pertenecen a la
  composición de salida;
- o, al contrario, dejar en el protocolo cosas que deberían estar ya fijadas por
  la configuración de entrada.

---

## 1. Tesis central

La distinción más importante que debe mantenerse es esta:

### Lo que pertenece al modelo base

Debe ser:

- **declarativo**;
- **relativamente estable**;
- **abstracto pero operativo**;
- y **reusable entre adaptadores**.

### Lo que pertenece al protocolo / salida

Debe ser:

- **composicional**;
- **localizado**;
- **distribuido por bloques o capas**;
- y **concretado en contenido realizable**.

Ésta es la diferencia principal.

Dicho de otra manera:

- el modelo base debe declarar **qué configuración existe**;
- el protocolo debe declarar **qué hace cada valor sobre la construcción de la salida**;
- y la salida debe mostrar **el resultado concreto de esa composición**.

---

## 2. Responsabilidades del modelo base

## 2.1. Función general del modelo base

El modelo base tiene la responsabilidad de describir el dominio de entrada del
adaptador.

No produce todavía la salida final, ni contiene la composición concreta de
bloques, ni fija el contenido exacto de los recursos visibles. Su tarea es otra:

> **organizar de manera formalizable los aspectos configurables del caso que después el protocolo deberá transformar en manifestación codominial.**

En términos prácticos, el modelo base debe decir:

- qué dimensiones existen;
- qué campos componen cada dimensión;
- qué valores puede tomar cada campo;
- qué restricciones tiene cada valor;
- y cómo se articula la entrada como conjunto de instancias contextuales.

---

## 2.2. Qué clase de información sí debe contener el modelo base

El modelo base debe contener información como la siguiente:

### a) Diferencias estructurales relativamente estables

Por ejemplo:

- `funcion_dominante`
- `alcance_de_realizacion`
- `horizonte_temporal`
- `publico_objetivo_inmediato`
- `arquitectura_macro`
- `segmentacion_interna`
- `modo_de_comparecencia_verbal`
- `duracion_objetivo`

Estas no son todavía piezas de salida concretas. Son **parámetros estructurales**.

### b) Espacios de valores reutilizables

Por ejemplo, es correcto que el modelo base fije valores como:

- `muy_breve`
- `breve`
- `breve_expandido`

para `duracion_objetivo`, porque esos valores no dependen necesariamente de un
solo adaptador.

Lo que cambia entre adaptadores no tiene por qué ser el valor, sino la forma en
que ese valor se traduce composicionalmente dentro del codominio.

### c) Condiciones de posibilidad de la salida

El modelo base puede declarar que una pieza:

- usa texto en pantalla o no;
- usa imagen generada o no;
- usa video generado o no;
- admite apoyo auditivo o no;
- requiere mayor o menor explicitación escénica.

Pero debe hacerlo de forma declarativa, no local por bloque.

---

## 2.3. Qué clase de información no debe contener el modelo base

El modelo base no debe contener decisiones que ya pertenezcan a la realización
concreta de la salida.

### No debería contener, por ejemplo:

- la frase exacta que irá en pantalla en el bloque 2;
- el prompt exacto para generar una imagen del bloque 3;
- la acción escénica exacta del cierre;
- la duración exacta en segundos de un clip auxiliar concreto;
- el texto exacto del remate verbal local.

Esas cosas no son configuración reusable. Son **resultado composicional**.

---

## 2.4. Criterio práctico para decidir si algo pertenece al modelo base

La mejor prueba es esta:

### Pregunta de pertenencia al modelo base

> **¿este elemento puede declararse como una condición relativamente estable de la pieza, reutilizable entre distintos adaptadores, sin necesidad de fijar todavía su forma local exacta?**

Si la respuesta es sí, probablemente pertenece al modelo base.

Si la respuesta es no, probablemente pertenece al protocolo o a la salida.

---

## 3. Responsabilidades del Protocolo de composición dimensional

## 3.1. Función general del protocolo

El `Protocolo de composición dimensional` tiene la responsabilidad de recibir
instancias contextuales construidas sobre las `Dimensiones de configuración` y
traducir sus valores en acciones concretas sobre la salida.

Esto implica que el protocolo no es solo una descripción paralela del modelo
base.

Es más bien:

> **una arquitectura de transformación valor por valor, campo por campo, dimensión por dimensión.**

---

## 3.2. Qué hace el protocolo exactamente

El protocolo debe hacer, al menos, estas cinco cosas.

### a) Leer los valores instanciados

Debe identificar qué valor tomó cada campo de cada dimensión.

### b) Activar una contraparte protocolaria de valor

Cada valor debe tener una regla o contraparte que indique:

- qué hace;
- dónde incide;
- con qué intensidad o prioridad;
- y con qué otras contribuciones debe coordinarse.

### c) Determinar la zona de incidencia en la salida

La contribución de un valor puede recaer, por ejemplo, sobre:

- la macroestructura global;
- la tipología de bloques;
- la función de un bloque;
- la realización verbal;
- el texto en pantalla;
- la superficie visual generable;
- la superficie audiovisual generable;
- la comparecencia local;
- la continuidad entre bloques;
- la resolución final;
- el acompañamiento auditivo.

### d) Componer contribuciones múltiples

En muchos casos, varios valores contribuirán sobre la misma zona de la salida.
El protocolo debe establecer reglas de:

- compatibilidad;
- precedencia;
- refuerzo;
- restricción;
- y resolución de tensiones.

### e) Producir elementos realizables

El protocolo no debe quedarse en un nivel puramente abstracto. Debe poder
producir componentes concretos de la salida final.

---

## 3.3. Qué no debe hacer el protocolo

El protocolo no debería redefinir el modelo base ni inventar arbitrariamente
nuevas dimensiones cuando el modelo ya fijó un espacio de configuración.

Tampoco debería operar como una caja negra que “decide todo” sin trazabilidad.

Debe ser:

- legible;
- verificable;
- justificable;
- y rastreable en su efecto sobre la salida.

---

## 3.4. Criterio práctico para decidir si algo pertenece al protocolo

### Pregunta de pertenencia al protocolo

> **¿este elemento depende de cómo un valor se traduce en una contribución concreta sobre la salida, y por tanto necesita una regla de composición para existir?**

Si la respuesta es sí, pertenece al protocolo.

Ejemplos claros:

- cómo se distribuyen los bloques dados ciertos valores de `arquitectura_macro`;
- cómo se traduce `muy_breve` en un rango efectivo dentro de un adaptador dado;
- cómo se transforma `texto_de_refuerzo_minimo` en frases puntuales por bloque;
- cómo se decide si una idea nuclear se convierte en imagen, texto en pantalla o
  remate verbal.

---

## 4. Responsabilidades de la Manifestación codominial compuesta

## 4.1. Función general de la salida

La `Manifestación codominial compuesta` es el elemento final del codominio.

No es otra instancia contextual del mismo tipo que las entradas.
No es el protocolo.
No es el modelo base.

Es:

> **el objeto final construido por integración de todas las contribuciones protocolarias.**

---

## 4.2. Qué debe contener la salida

La salida debe contener lo que ya ha sido compuesto por el protocolo en una forma
realizable.

En el caso de este proyecto, eso implica al menos:

- identidad de la pieza;
- arquitectura global;
- bloques;
- función local de cada bloque;
- realización verbal;
- superficie textual;
- superficie escénica;
- superficie visual generable;
- superficie audiovisual generable;
- acompañamiento auditivo;
- y justificación de composición.

---

## 4.3. Qué clase de contenido sí pertenece a la salida

La salida sí puede y debe contener cosas como:

- texto oral exacto por bloque;
- texto en pantalla exacto por bloque;
- indicaciones escénicas concretas;
- prompts de imagen copiables;
- prompts de video copiables;
- notas de coherencia visual;
- sugerencias de duración local;
- continuidad entre bloques;
- remates verbales concretos.

Todo eso ya es contenido realizable o casi realizable.

---

## 4.4. Qué no debe confundirse con la salida

La salida no debe confundirse con:

- una lista de valores de entrada;
- una repetición del modelo base;
- una nota conceptual suelta;
- una explicación abstracta de lo que el guión “haría”;
- o un simple resumen del tema.

La salida es el punto donde la configuración se vuelve **manifestación**.

---

## 5. Ejemplos de distinción correcta

## 5.1. Ejemplo con `duracion_objetivo`

### En el modelo base

`duracion_objetivo` puede tomar valores como:

- `muy_breve`
- `breve`
- `breve_expandido`

Eso es correcto porque sigue siendo una diferencia estructural reusable.

### En el protocolo

El protocolo define qué significa `breve` en un adaptador concreto.

Por ejemplo:

- en video corto, puede significar una pieza comprimida con tres bloques breves;
- en video largo, puede significar un tramo introductorio o una pieza secundaria
  dentro de una arquitectura más amplia.

### En la salida

La salida ya contiene, por ejemplo:

- duración aproximada del bloque 1;
- duración aproximada del bloque 2;
- duración aproximada del recurso visual insertado;
- y distribución efectiva del tiempo de la pieza.

---

## 5.2. Ejemplo con `texto en pantalla`

### En el modelo base

Debe declararse algo como:

- si la pieza usa texto en pantalla;
- qué papel general tiene;
- si su presencia es mínima, distribuida, dominante o mixta.

### En el protocolo

Se decide:

- en qué bloques aparece;
- qué función local cumple;
- y cómo se reparte respecto de la voz y la imagen.

### En la salida

Ya aparece:

- el texto exacto por bloque;
- su posición aproximada;
- su duración en pantalla;
- y su integración con otros recursos.

---

## 5.3. Ejemplo con `imagen generada por IA`

### En el modelo base

Debe declararse si la pieza admite o requiere recursos visuales generables y qué
papel general cumplen.

### En el protocolo

Se decide:

- en qué bloque conviene insertar imagen;
- si funciona como ilustración, contraste o apoyo conceptual;
- y qué descripción debe transformarse en prompt.

### En la salida

Aparece ya algo como:

- `descripcion_conceptual`
- `prompt_de_generacion`
- `notas_de_coherencia`

Es decir, contenido ya usable en una IA de imagen.

---

## 5.4. Ejemplo con `indicaciones escénicas`

Éste es un caso especialmente importante.

### En el modelo base

Lo más razonable no es declarar las indicaciones exactas por bloque, sino el
**régimen general de explicitación escénica** o su necesidad relativa.

### En el protocolo

Se decide:

- dónde hacen falta indicaciones;
- qué función cumplen;
- y cómo se integran con comparecencia, texto y recursos visuales.

### En la salida

Aparecen ya:

- indicaciones escénicas concretas por bloque;
- acciones locales;
- sugerencias de gesto, encuadre o movimiento.

---

## 6. El caso especial de los recursos complementarios

Aquí se vuelve especialmente útil la distinción.

Recursos como:

- texto en pantalla,
- imagen generada,
- video generado,
- audio generado,

no deberían modelarse, en su forma concreta final, directamente en el modelo
base.

Lo que sí debe modelarse en el modelo base es su **régimen de uso**.

Por ejemplo:

- si se usan o no;
- qué función general cumplen;
- qué peso relativo tienen;
- si son constantes o localizados;
- y qué grado de protagonismo tienen dentro de la pieza.

A partir de ahí, el protocolo podrá transformar esos valores en:

- frases de texto en pantalla;
- prompts de imagen;
- prompts de video;
- sugerencias de audio;
- y decisiones por bloque.

Esta distinción hace el sistema más estable y reusable.

---

## 7. Regla metodológica recomendada

A partir de esta distinción, conviene fijar esta regla:

### Regla de distribución de responsabilidades

#### El modelo base debe contener

- lo que el sistema necesita declarar antes de componer;
- lo que puede permanecer relativamente estable entre distintos adaptadores;
- y lo que puede describirse como configuración reusable.

#### El protocolo debe contener

- la traducción operativa valor por valor;
- la determinación de zonas de incidencia;
- la composición entre contribuciones;
- y la producción de contenido localizable.

#### La salida debe contener

- el contenido ya realizado;
- las decisiones locales por bloque o capa;
- y los recursos concretos o casi concretos que puedan ejecutarse o copiarse.

---

## 8. Criterios de diagnóstico

Si tienes dudas sobre dónde ubicar un elemento, puedes usar estas preguntas.

### Pregunta 1 — Modelo base

> ¿esto puede declararse de manera estable antes de la composición, y seguir
> teniendo sentido aunque cambie el adaptador?

Si sí, probablemente pertenece al modelo base.

### Pregunta 2 — Protocolo

> ¿esto depende de una regla que traduzca valores de entrada en una decisión de
> composición sobre la salida?

Si sí, probablemente pertenece al protocolo.

### Pregunta 3 — Salida

> ¿esto ya aparece como contenido concreto, localizado, visible, audible o
> realizable dentro de la pieza final?

Si sí, probablemente pertenece a la salida.

---

## 9. Consecuencia práctica para los hilos de trabajo

Esta distinción permite dividir el desarrollo en dos líneas de trabajo sin
mezclarlas:

### Línea A — Desarrollo del modelo base

Aquí se trabaja en:

- dimensiones,
- campos,
- valores,
- descripciones,
- restricciones,
- y relaciones configurativas.

### Línea B — Desarrollo del protocolo y la salida

Aquí se trabaja en:

- contraparte protocolaria de valor,
- reglas de composición,
- estructura de la manifestación,
- bloques,
- capas,
- prompts,
- y elementos realizables.

Esta separación no rompe la unidad del sistema; al contrario, la vuelve más
legible.

---

## 10. Fórmula final

La mejor formulación de esta distinción es la siguiente:

> **el modelo base debe declarar configuraciones estructurales relativamente estables y reusables; el Protocolo de composición dimensional debe traducir los valores de esas configuraciones en acciones composicionales sobre la salida; y la Manifestación codominial compuesta debe contener el resultado concreto, localizado y realizable de esa composición.**

Dicho de forma todavía más breve:

- el modelo base **declara**;
- el protocolo **compone**;
- la salida **manifiesta**.

---

## 11. Cierre operativo

Este documento debe usarse como criterio de control en los hilos donde se
trabaje:

- el refinamiento del modelo base;
- la construcción del protocolo;
- o el diseño de la salida.

Cada vez que aparezca una duda sobre dónde ubicar un elemento, habrá que decidir
si ese elemento:

1. pertenece a la configuración reusable;
2. pertenece a la regla de composición;
3. o pertenece a la manifestación final.

Esa decisión es la que mantiene consistente toda la arquitectura.
