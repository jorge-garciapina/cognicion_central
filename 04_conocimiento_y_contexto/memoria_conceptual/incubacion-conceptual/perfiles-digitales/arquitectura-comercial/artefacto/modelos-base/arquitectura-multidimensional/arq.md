# Modelo base de la Arquitectura Multidimensional del Texto

## Formulación reconstruida en el estado actual de la teoría de modelos base

## 0. Carácter de este documento

Este documento fija un **nuevo modelo base** para la Arquitectura
Multidimensional del Texto.

No debe leerse como una simple corrección menor del planteamiento anterior, sino
como una reconstrucción guiada por el estado actual de la teoría de modelos
base.

Su función es definir:

- qué unidad textual se modela;
- qué dimensiones constituyen esa unidad;
- qué elementos mínimos componen el modelo base de cada dimensión;
- qué tipo de valores admite cada elemento;
- y qué condiciones mínimas debe cumplir una instancia válida.

Este documento se ocupa **solo del modelo base**.
No desarrolla aquí:

- adaptadores;
- codominios;
- protocolos;
- ni materializaciones concretas.

---

## 1. Unidad modelada

La unidad modelada es el **texto como instancia multidimensional proyectable**.

Esto significa que el texto no se modela aquí como:

- una mera secuencia de frases;
- un contenido abstracto aislado;
- una manifestación material ya realizada;
- un formato de salida;
- ni una pieza ya adaptada a plataforma o soporte.

Se modela como una **entidad textual previa a su materialización específica**,
capaz de ser descrita mediante una configuración de dimensiones independientes.

Dicho de forma más precisa:

el modelo base de la Arquitectura Multidimensional del Texto describe el texto
en cuanto **caso textual instanciable**, no en cuanto pieza final ya adaptada.

---

## 2. Tesis central

Un texto, dentro de esta arquitectura, no debe entenderse como un bloque plano,
sino como una **configuración compuesta** por varias dimensiones de modelado.

Cada dimensión captura un aspecto distinto del caso textual.

Una instancia textual válida no consiste en asignar una sola etiqueta al texto,
sino en construir una configuración del tipo:

**T = (C, N, L, V, R, D)**

donde:

- **C** = configuración conceptual;
- **N** = configuración narrativa;
- **L** = configuración léxica;
- **V** = configuración de voz o comparecencia;
- **R** = configuración de ritmo y legibilidad;
- **D** = configuración discursiva.

Cada uno de estos componentes es, a su vez, una **tupla o vector de valores**
sobre el modelo base de su dimensión correspondiente.

---

## 3. Decisión estructural sobre las dimensiones base

En esta reconstrucción, la arquitectura textual conserva como dimensiones base:

- dimensión conceptual;
- dimensión narrativa;
- dimensión léxica;
- dimensión de voz o comparecencia;
- dimensión de ritmo y legibilidad;
- dimensión discursiva.

No se incluye aquí, como dimensión base, una dimensión de despliegue textual
entendida como longitud concreta, cantidad de palabras, tamaño de párrafos o
distribución material final.

La razón es estructural:

esas propiedades dependen con demasiada fuerza de la adaptación, del codominio y
de la materialización específica.

Por tanto, no pertenecen al núcleo del modelo base del texto en cuanto instancia
multidimensional proyectable, sino al plano de su realización posterior.

---

## 4. Qué cuenta como instancia válida de este modelo

Una instancia válida del modelo base de la Arquitectura Multidimensional del
Texto debe cumplir, al menos, estas condiciones:

1. describir una unidad textual reconocible;
2. contener una configuración en todas las dimensiones base;
3. usar, en cada dimensión, elementos y tipos de valor admitidos por el modelo;
4. respetar las restricciones internas de cada dimensión;
5. no colapsar la instancia con la materialización final;
6. no sustituir configuraciones vectoriales por etiquetas simples;
7. mantener separadas:
   - la estructura del texto,
   - su eventual adaptación,
   - y su materialización posterior.

---

## 5. Componentes globales mínimos del modelo base

Toda instancia textual modelada bajo esta arquitectura debería poder describirse,
al menos, mediante los siguientes componentes globales:

- `texto_id`
- `clase_de_unidad_textual`
- `configuracion_conceptual`
- `configuracion_narrativa`
- `configuracion_lexica`
- `configuracion_de_voz`
- `configuracion_de_ritmo_y_legibilidad`
- `configuracion_discursiva`
- `restricciones_globales`
- `estado_de_instancia`
- `version`
- `observaciones_de_modelado` cuando aplique

### 5.1. Tipificación de los componentes globales

#### `texto_id`

Tipo de valor: referencial  
Función: identificar la instancia textual.

#### `clase_de_unidad_textual`

Tipo de valor: categorial cerrado  
Función: indicar qué clase de unidad se está modelando.  
Ejemplos de clase:

- texto completo;
- sección;
- definición;
- explicación;
- argumento;
- guión base;
- núcleo textual.

#### `configuracion_conceptual`

Tipo de valor: vectorial  
Función: contener la instancia de la dimensión conceptual.

#### `configuracion_narrativa`

Tipo de valor: vectorial  
Función: contener la instancia de la dimensión narrativa.

#### `configuracion_lexica`

Tipo de valor: vectorial  
Función: contener la instancia de la dimensión léxica.

#### `configuracion_de_voz`

Tipo de valor: vectorial  
Función: contener la instancia de la dimensión de voz.

#### `configuracion_de_ritmo_y_legibilidad`

Tipo de valor: vectorial  
Función: contener la instancia de la dimensión de ritmo y legibilidad.

#### `configuracion_discursiva`

Tipo de valor: vectorial  
Función: contener la instancia de la dimensión discursiva.

#### `restricciones_globales`

Tipo de valor: compuesto estructurado  
Función: declarar restricciones que afectan a la instancia en su conjunto.

#### `estado_de_instancia`

Tipo de valor: categorial cerrado  
Valores posibles mínimos:

- `provisional`
- `estable`
- `en_revision`

#### `version`

Tipo de valor: referencial o escalar discreto  
Función: indicar la versión de la instancia.

#### `observaciones_de_modelado`

Tipo de valor: descriptivo abierto controlado  
Función: registrar aclaraciones que no modifiquen la estructura del modelo.

---

## 6. Dimensión conceptual

### 6.1. Función

La dimensión conceptual modela **qué contenido estructural entra al texto**.

Su función es fijar:

- qué ideas activas participan;
- de dónde provienen;
- qué función cumplen;
- cuánto pesan;
- y cómo se organiza el sostén semántico de la instancia.

### 6.2. Forma de la configuración conceptual

La configuración conceptual puede representarse así:

**C = (unidad_de_destino, ideas_fuente_activas, pesos, funciones, modos_de_uso, estado_conceptual, ...)**

### 6.3. Elementos mínimos del modelo base conceptual

- `unidad_de_destino`
- `ideas_fuente_activas`
- `origen_tipo`
- `origen`
- `idea_extraida`
- `funcion_en_la_unidad`
- `peso`
- `modo_de_uso`
- `estado_conceptual`

### 6.4. Tipificación mínima

#### `unidad_de_destino`

Tipo: referencial

#### `ideas_fuente_activas`

Tipo: distributivo estructurado

#### `origen_tipo`

Tipo: categorial cerrado

#### `origen`

Tipo: referencial

#### `idea_extraida`

Tipo: descriptivo abierto controlado

#### `funcion_en_la_unidad`

Tipo: categorial cerrado o semiabierto

#### `peso`

Tipo: escalar normalizado

#### `modo_de_uso`

Tipo: categorial cerrado

#### `estado_conceptual`

Tipo: categorial cerrado

### 6.5. Restricción mínima

La suma de los pesos de las ideas fuente activas en una misma unidad debe ser
**1.00**.

---

## 7. Dimensión narrativa

### 7.1. Función

La dimensión narrativa modela **cómo se organiza la exposición del contenido**.

No fija qué entra conceptualmente, sino cómo se ordena, progresa, conecta y
cierra el recorrido textual.

### 7.2. Forma de la configuración narrativa

**N = (estrategia_narrativa_general, funcion_de_apertura, modo_de_progresion, distribucion_de_bloques, transiciones, modo_de_cierre, grado_de_recapitulacion, estado_narrativo, ...)**

### 7.3. Elementos mínimos del modelo base narrativo

- `estrategia_narrativa_general`
- `funcion_de_apertura`
- `modo_de_progresion`
- `distribucion_de_bloques`
- `transiciones`
- `modo_de_cierre`
- `grado_de_recapitulacion`
- `peso_narrativo`
- `estado_narrativo`

### 7.4. Tipificación mínima

#### `estrategia_narrativa_general`

Tipo: categorial cerrado o distributivo

#### `funcion_de_apertura`

Tipo: categorial cerrado

#### `modo_de_progresion`

Tipo: categorial cerrado o secuencial

#### `distribucion_de_bloques`

Tipo: secuencial estructurado

#### `transiciones`

Tipo: secuencial o multiconjunto categorial

#### `modo_de_cierre`

Tipo: categorial cerrado

#### `grado_de_recapitulacion`

Tipo: ordinal o escalar

#### `peso_narrativo`

Tipo: distributivo

#### `estado_narrativo`

Tipo: categorial cerrado

---

## 8. Dimensión léxica

### 8.1. Función

La dimensión léxica modela **con qué materia verbal comparece la instancia**.

No se reduce al registro superficial, sino que fija el perfil verbal de la
configuración textual.

### 8.2. Forma de la configuración léxica

**L = (grado_de_formalidad, grado_de_tecnicidad, grado_de_accesibilidad, densidad_terminologica, grado_de_abstraccion, registro_predominante, variacion_lexica, estado_lexico, ...)**

### 8.3. Elementos mínimos del modelo base léxico

- `grado_de_formalidad`
- `grado_de_tecnicidad`
- `grado_de_accesibilidad`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `registro_predominante`
- `tipo_de_vocabulario_dominante`
- `variacion_lexica`
- `estado_lexico`

### 8.4. Tipificación mínima

#### `grado_de_formalidad`

Tipo: escalar u ordinal

#### `grado_de_tecnicidad`

Tipo: escalar u ordinal

#### `grado_de_accesibilidad`

Tipo: escalar u ordinal

#### `densidad_terminologica`

Tipo: escalar

#### `grado_de_abstraccion`

Tipo: escalar u ordinal

#### `registro_predominante`

Tipo: categorial cerrado

#### `tipo_de_vocabulario_dominante`

Tipo: categorial semiabierto

#### `variacion_lexica`

Tipo: escalar

#### `estado_lexico`

Tipo: categorial cerrado

---

## 9. Dimensión de voz o comparecencia

### 9.1. Función

La dimensión de voz modela **qué tipo de presencia proyecta el texto**.

No equivale solo a tono. Describe el modo de comparecencia de la instancia ante
el lector.

### 9.2. Forma de la configuración de voz

**V = (grado_de_cercania, grado_de_distancia, grado_de_autoridad, grado_de_calidez, grado_de_intensidad, grado_de_sobriedad, modo_de_comparecencia, marcacion_de_la_voz, estado_de_voz, ...)**

### 9.3. Elementos mínimos del modelo base de voz

- `grado_de_cercania`
- `grado_de_distancia`
- `grado_de_autoridad`
- `grado_de_calidez`
- `grado_de_intensidad`
- `grado_de_sobriedad`
- `modo_de_comparecencia`
- `marcacion_de_la_voz`
- `estado_de_voz`

### 9.4. Tipificación mínima

#### `grado_de_cercania`

Tipo: escalar

#### `grado_de_distancia`

Tipo: escalar

#### `grado_de_autoridad`

Tipo: escalar

#### `grado_de_calidez`

Tipo: escalar

#### `grado_de_intensidad`

Tipo: escalar

#### `grado_de_sobriedad`

Tipo: escalar

#### `modo_de_comparecencia`

Tipo: categorial cerrado o mixto

#### `marcacion_de_la_voz`

Tipo: escalar

#### `estado_de_voz`

Tipo: categorial cerrado

---

## 10. Dimensión de ritmo y legibilidad

### 10.1. Función

La dimensión de ritmo y legibilidad modela **cómo se experimenta el recorrido del
texto**.

No fija el contenido ni la voz, sino la experiencia de tránsito por la instancia.

### 10.2. Forma de la configuración de ritmo y legibilidad

**R = (velocidad_percibida, grado_de_explicitud, grado_de_continuidad, grado_de_recapitulacion, nivel_de_friccion, dificultad_de_procesamiento, grado_de_compresion, respiracion_textual, estado_de_recorrido, ...)**

### 10.3. Elementos mínimos del modelo base de ritmo y legibilidad

- `velocidad_percibida`
- `grado_de_explicitud`
- `grado_de_continuidad`
- `grado_de_recapitulacion`
- `nivel_de_friccion`
- `dificultad_de_procesamiento`
- `grado_de_compresion`
- `respiracion_textual`
- `estado_de_recorrido`

### 10.4. Tipificación mínima

#### `velocidad_percibida`

Tipo: escalar u ordinal

#### `grado_de_explicitud`

Tipo: escalar

#### `grado_de_continuidad`

Tipo: escalar

#### `grado_de_recapitulacion`

Tipo: escalar u ordinal

#### `nivel_de_friccion`

Tipo: escalar

#### `dificultad_de_procesamiento`

Tipo: escalar

#### `grado_de_compresion`

Tipo: escalar

#### `respiracion_textual`

Tipo: categorial ordinal o escalar

#### `estado_de_recorrido`

Tipo: categorial cerrado

---

## 11. Dimensión discursiva

### 11.1. Función

La dimensión discursiva modela **qué modo de formulación adopta la instancia**.

No fija todavía la materialización final, pero sí la región de formulación a la
que pertenece el caso textual.

### 11.2. Forma de la configuración discursiva

**D = (modo_discursivo_predominante, grado_de_formulacion_definicional, grado_de_mediacion_pedagogica, grado_de_orientacion_argumentativa, grado_de_orientacion_operativa, grado_de_funcion_de_captacion, tipo_de_cierre_discursivo, grado_de_guia_al_lector, estado_discursivo, ...)**

### 11.3. Elementos mínimos del modelo base discursivo

- `modo_discursivo_predominante`
- `grado_de_formulacion_definicional`
- `grado_de_mediacion_pedagogica`
- `grado_de_orientacion_argumentativa`
- `grado_de_orientacion_operativa`
- `grado_de_funcion_de_captacion`
- `tipo_de_cierre_discursivo`
- `grado_de_guia_al_lector`
- `estado_discursivo`

### 11.4. Tipificación mínima

#### `modo_discursivo_predominante`

Tipo: categorial cerrado o distributivo

#### `grado_de_formulacion_definicional`

Tipo: escalar

#### `grado_de_mediacion_pedagogica`

Tipo: escalar

#### `grado_de_orientacion_argumentativa`

Tipo: escalar

#### `grado_de_orientacion_operativa`

Tipo: escalar

#### `grado_de_funcion_de_captacion`

Tipo: escalar

#### `tipo_de_cierre_discursivo`

Tipo: categorial cerrado

#### `grado_de_guia_al_lector`

Tipo: escalar

#### `estado_discursivo`

Tipo: categorial cerrado

---

## 12. Restricciones globales mínimas

Además de las restricciones internas de cada dimensión, este modelo base fija
estas restricciones globales mínimas:

1. toda instancia textual válida debe contener las seis configuraciones base:
   `C`, `N`, `L`, `V`, `R`, `D`;

2. ninguna dimensión puede colapsarse en una sola etiqueta resumida si el estado
   de instancia es `estable`;

3. la instancia no puede incorporar todavía decisiones de materialización
   específica propias de un codominio;

4. la instancia no debe confundirse con un adaptador ni con una pieza ya
   materializada;

5. los componentes globales deben mantenerse distinguibles de los componentes
   internos de cada dimensión.

---

## 13. Qué queda fuera de este modelo base

Este modelo base no fija todavía:

- protocolos de adaptación;
- codominios específicos;
- mejores prácticas de plataformas concretas;
- criterios de materialización para Reel, Carousel, newsletter, hilo, etc.;
- ni estrategias de salida particulares.

Tampoco fija aquí de manera exhaustiva los catálogos completos de valores
posibles de cada elemento.

Lo que fija es la **estructura base suficiente** para que ese trabajo posterior
pueda hacerse sin reconstruir el modelo desde cero.

---

## 14. Fórmula final del modelo

La Arquitectura Multidimensional del Texto, en su reconstrucción actual, puede
definirse así:

un texto, en cuanto instancia proyectable, se modela como una configuración
multidimensional compuesta por seis dimensiones base —conceptual, narrativa,
léxica, de voz, de ritmo y legibilidad, y discursiva—, cada una definida por un
modelo base propio con elementos mínimos, tipos de valor y restricciones
suficientes para permitir instancias comparables, reutilizables y operables.

---

## 15. Cierre

Este modelo base no constituye todavía la teoría completa del texto dentro del
sistema.

Constituye, más exactamente, la infraestructura mínima necesaria para que una
instancia textual deje de depender de descripciones improvisadas y pueda
construirse como caso formalizable.

En este punto, la Arquitectura Multidimensional del Texto deja de ser solo una
intuición útil y comienza a convertirse en un ejemplo local coherente con la
teoría actual de modelos base.
