## Ejemplo del Paso 2 aplicado a la Arquitectura Multidimensional del Texto

### 1. Qué sería la entidad modelada en este caso

En la Arquitectura Multidimensional del Texto, la entidad modelada es el
**texto como instancia multidimensional proyectable**.

Por tanto, pertenecen a la entidad cosas como:

- su configuración conceptual;
- su configuración narrativa;
- su configuración léxica;
- su configuración de voz;
- su configuración de ritmo y legibilidad;
- su configuración discursiva.

Esos elementos describen cómo está estructurado el texto en cuanto instancia.

### 2. Qué sería metadocumentación en este caso

Ahora bien, alrededor de esa instancia textual pueden aparecer otros datos que
también son útiles, por ejemplo:

- quién construyó el modelo;
- cuándo se revisó el documento;
- qué versión del archivo se está usando;
- si la formulación está en borrador o consolidada;
- qué comentario dejó el modelador;
- qué hilo del proyecto dio origen al documento.

Esa información puede ser importante para el trabajo documental, pero no describe
la entidad modelada.

No describe el texto en cuanto instancia multidimensional proyectable.
Describe el proceso de construcción, revisión o administración del modelo.

### 3. Ejemplo concreto de mezcla incorrecta

Imagina que alguien propone esta lista para el modelo base textual:

- `configuracion_conceptual`
- `configuracion_narrativa`
- `configuracion_discursiva`
- `autor_del_documento`
- `fecha_de_revision`
- `version_del_archivo`

Aquí hay una mezcla clara.

Porque:

- `configuracion_conceptual`
- `configuracion_narrativa`
- `configuracion_discursiva`

sí describen el texto como entidad modelada.

Pero:

- `autor_del_documento`
- `fecha_de_revision`
- `version_del_archivo`

describen la documentación del proceso.

### 4. Por qué la mezcla sería problemática

Si estos elementos quedaran al mismo nivel, el modelo textual empezaría a
confundir dos cosas distintas:

- cómo está configurado el texto;
- y cómo fue documentado el archivo que lo describe.

Eso provocaría varios problemas.

#### a) Dificultad para leer el núcleo del modelo

Ya no quedaría claro qué elementos pertenecen realmente al texto.

#### b) Inflación artificial del modelo

El modelo parecería más rico, pero en realidad solo tendría más capas
heterogéneas superpuestas.

#### c) Riesgo de mala instanciación

Otro agente podría creer que “versión del archivo” o “fecha de revisión” forman
parte de la entidad textual misma.

### 5. Qué debe hacerse en este caso

La solución correcta no es eliminar esa información documental.

La solución es separarla.

Por ejemplo:

#### Nivel del modelo base del texto

- `configuracion_conceptual`
- `configuracion_narrativa`
- `configuracion_lexica`
- `configuracion_de_voz`
- `configuracion_de_ritmo_y_legibilidad`
- `configuracion_discursiva`

#### Nivel de metadocumentación

- `autor_del_documento`
- `fecha_de_revision`
- `version_del_archivo`
- `estado_del_documento`
- `observaciones_editoriales`

De esta manera, el modelo base sigue describiendo la entidad correcta, y la
metadocumentación sigue existiendo sin contaminarlo.

### 6. Qué enseña este ejemplo

Este ejemplo muestra que, en la Arquitectura Multidimensional del Texto, no basta
con saber qué dimensiones describen el texto.

También hay que cuidar que el modelo no absorba:

- el historial del documento;
- la autoría;
- el versionado;
- ni la gestión del archivo.

Todo eso puede formar parte del artefacto general, pero no del núcleo del modelo
base de la entidad textual.

### 7. Fórmula condensada del ejemplo

En la Arquitectura Multidimensional del Texto, distinguir entidad modelada y
metadocumentación significa separar las configuraciones que describen la
estructura del texto de los datos que registran cómo fue construido, revisado o
versionado el documento que porta esa descripción.
