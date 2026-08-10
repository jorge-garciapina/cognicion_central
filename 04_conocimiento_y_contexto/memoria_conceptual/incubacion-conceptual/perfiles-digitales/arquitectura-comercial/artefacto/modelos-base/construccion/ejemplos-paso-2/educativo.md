## Ejemplo del Paso 2 aplicado al modelo del estudiante respecto del aprendizaje del Tema A

### 1. Qué sería la entidad modelada en este caso

En este modelo, la entidad es:

**estudiante respecto del aprendizaje del Tema A**

Eso significa que pertenecen al modelo base elementos que describen cómo está
configurado ese estudiante frente al aprendizaje del tema.

Por ejemplo:

- `familiaridad_con_el_tema`
- `tipo_de_dificultad_dominante`
- `modo_de_entrada_mas_efectivo`
- `grado_de_guia_requerida`
- `ritmo_de_progresion_compatible`
- `modo_de_verificacion_mas_fiable`
- `tolerancia_a_la_abstraccion`

Todos estos elementos describen rasgos del caso pedagógico.

### 2. Qué sería metadocumentación en este caso

Ahora bien, junto a esa descripción podrían aparecer datos como:

- `fecha_de_ultima_revision`
- `autor_del_modelo`
- `responsable_del_diagnostico`
- `version_del_documento`
- `observaciones_de_edicion`

Estos datos pueden ser útiles para gestionar el modelo o el archivo, pero no
describen al estudiante respecto del aprendizaje del Tema A.

Describen otra cosa:

- el proceso de registro,
- la administración del documento,
- o la trazabilidad del modelado.

### 3. Ejemplo concreto de mezcla incorrecta

Imagina que se propusiera este modelo:

- `tipo_de_dificultad_dominante`
- `modo_de_entrada_mas_efectivo`
- `fecha_de_ultima_revision`
- `autor_del_modelo`

Aquí hay una mezcla.

Porque:

- `tipo_de_dificultad_dominante`
- y `modo_de_entrada_mas_efectivo`

sí describen al estudiante en cuanto caso de aprendizaje del Tema A.

Pero:

- `fecha_de_ultima_revision`
- y `autor_del_modelo`

describen la documentación del proceso.

### 4. Por qué esta mezcla sería un error

Si esos elementos se dejaran al mismo nivel, el modelo quedaría describiendo a la
vez:

- al estudiante respecto del aprendizaje del Tema A;
- y el expediente documental de cómo se construyó ese modelo.

Eso generaría varios problemas.

#### a) Oscurece el núcleo del modelo

Ya no se distinguiría bien qué describe al estudiante y qué describe el archivo.

#### b) Dificulta la selección de elementos relevantes

Parecería que todo pertenece por igual a la unidad modelada.

#### c) Contamina la instanciación

Otro agente podría llenar el modelo creyendo que datos documentales son rasgos
del caso pedagógico.

### 5. Qué debe hacerse en este ejemplo

La solución correcta es separar niveles.

#### Nivel del modelo base del estudiante respecto del Tema A

- `familiaridad_con_el_tema`
- `tipo_de_dificultad_dominante`
- `modo_de_entrada_mas_efectivo`
- `grado_de_guia_requerida`
- `ritmo_de_progresion_compatible`
- `modo_de_verificacion_mas_fiable`
- `tolerancia_a_la_abstraccion`

#### Nivel de metadocumentación

- `fecha_de_ultima_revision`
- `autor_del_modelo`
- `version_del_documento`
- `observaciones_de_revision`

Así, el modelo base describe la entidad correcta y la metadocumentación sigue
existiendo sin interferir con la estructura del caso.

### 6. Qué enseña este ejemplo

Este ejemplo muestra que, en la construcción de modelos base, no basta con elegir
elementos “útiles”.

También hay que decidir si describen:

- la entidad modelada;
  o
- el proceso de haberla modelado.

La distinción es decisiva porque evita que el modelo del estudiante se convierta
en una mezcla entre caso pedagógico y expediente documental.

### 7. Fórmula condensada del ejemplo

En el caso del estudiante respecto del aprendizaje del Tema A, distinguir entidad
modelada y metadocumentación significa separar los elementos que describen la
configuración pedagógica del estudiante de aquellos que solo registran cómo fue
documentada, revisada o versionada esa descripción.
