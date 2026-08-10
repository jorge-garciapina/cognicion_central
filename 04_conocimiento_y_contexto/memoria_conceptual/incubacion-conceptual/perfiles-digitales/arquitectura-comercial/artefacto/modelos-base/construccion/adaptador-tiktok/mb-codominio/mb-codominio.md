https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69e27f03-4864-83e8-ae1c-0d9019bab5a3

# Modelo base completo del codominio

## Guión para video de TikTok

## 1. Unidad modelada

**Unidad modelada:**  
`guion_para_video_de_tiktok`

**Definición de la unidad modelada:**  
Materialización textual orientada a organizar de manera realizable el contenido
verbal y, cuando aplique, las indicaciones mínimas de comparecencia visual de un
video de TikTok.

**Función del modelo:**  
Delimitar qué cuenta como una salida válida dentro del codominio
`guion_para_video_de_tiktok`.

**Alcance del modelo:**  
Este modelo no describe:

- la intención estratégica de la adaptación;
- ni las reglas de transformación de la instancia contextual.

Este modelo describe exclusivamente:

- la estructura formal de la salida;
- sus restricciones materiales;
- sus configuraciones válidas;
- y sus criterios de pertenencia al codominio.

---

## 2. Estructura general del modelo base del codominio

Una instancia válida de este codominio debe poder fijar, al menos, las
siguientes dimensiones:

- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`
- `modalidad_de_guion`
- `duracion_objetivo`
- `arquitectura_macro`
- `segmentacion_interna`
- `unidad_de_segmento`
- `modo_de_comparecencia_verbal`
- `esquema_de_texto_en_pantalla`
- `esquema_de_indicaciones_escenicas`
- `longitud_por_segmento`

---

## 3. Elementos del modelo base

### 3.1. `clase_de_materializacion`

**Función:**  
Fijar la clase general de salida a la que pertenece la unidad modelada y
describir su estructura de manifestación.

Esta dimensión responde a la pregunta:

**¿qué tipo de manifestación es esta y mediante qué estructura se realiza?**

En este caso, la unidad modelada pertenece a una clase de salida textual
orientada a organizar una realización audiovisual breve mediante una estructura
de guión compuesta por componentes macroestructurales y bloques locales de
manifestación.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `guion_audiovisual_breve`

**Descripción del valor:**

- `guion_audiovisual_breve`:  
  Manifestación textual orientada a organizar una realización audiovisual corta,
  diseñada para lectura operativa, grabación o producción rápida, y construida
  mediante una estructura de guión explícita.

  Este valor implica que la materialización se organiza en tres niveles principales:

**0. Nivel de lectura previa**
Antes de la explicitación macroestructural de la pieza, la instancia debe
presentar una sección de lectura previa de bloques.

Esta sección tiene como función ofrecer una vista rápida y lineal del contenido
verbal principal de todos los bloques de la manifestación, para facilitar la
lectura global del guión antes de entrar al detalle estructural.

Puede expresarse mediante un campo como:

LECTURA_PREVIA_DE_BLOQUES

LECTURA_PREVIA_DE_BLOQUES debe contener, como mínimo:

la identificación de cada bloque en el orden en que aparece en la pieza;
el emisor principal del bloque, si aplica;
y el texto verbal principal del bloque.

Su función no es reemplazar la manifestación detallada, sino anticiparla de
forma compacta y legible.

En esta sección, cada bloque debe aparecer resumido linealmente, por ejemplo:

APERTURA → texto principal del bloque
DESARROLLO — BLOQUE 1 → texto principal del bloque
DESARROLLO — BLOQUE 2 → texto principal del bloque
CIERRE → texto principal del bloque

Esta sección es obligatoria en las instancias de guion_audiovisual_breve
cuando se quiera facilitar lectura, revisión o evaluación rápida del guión.

**1. Nivel macroestructural**  
 La pieza adopta una organización general determinada por la dimensión
`arquitectura_macro`.

Según el valor activo de esa dimensión, la manifestación se distribuye en
componentes como:

- `APERTURA`
- `DESARROLLO`
- `CIERRE`
- `REMATE`
- `LISTA`
- `CONTRASTE`
- `SECUENCIA`
- `RESOLUCION`

Estos componentes macroestructurales constituyen la forma general del guión.

**2. Nivel de bloques locales**  
 Dentro de cada componente macroestructural, la pieza se organiza en bloques
locales de manifestación. Cada bloque desarrolla una parte de la idea total y
se construye mediante capas de manifestación obligatorias.

**Capas de manifestación del bloque**

**a) Capa metaestructural**  
 Contiene la descripción estructural del bloque dentro de la pieza. Esta capa es
obligatoria y permite identificar qué función cumple el bloque, qué parte de la
idea desarrolla y por qué pertenece a los valores activos de las dimensiones
del modelo.

Puede expresarse mediante campos como:

- `FUNCION_DEL_BLOQUE`  
  Describe el papel estructural que el bloque cumple dentro del recorrido de la
  manifestación.  
  Debe indicar para qué sirve ese bloque en la organización general de la
  pieza, por ejemplo: abrir el tema, presentar una diferencia, desarrollar una
  consecuencia, cerrar una conclusión o rematar una secuencia.

- `IDEA_DESARROLLADA`  
  Describe la porción específica de contenido que el bloque trabaja dentro de
  la idea general de la pieza.  
  Debe indicar qué parte de la tesis, explicación o recorrido conceptual se
  desarrolla en ese bloque y permitir distinguirlo de los demás.

- `JUSTIFICACIONES_DIMENSIONALES`  
  Contiene la justificación explícita de por qué el bloque pertenece a los
  valores activos de las dimensiones relevantes del modelo.  
  Debe organizarse como un conjunto de justificaciones diferenciadas por
  dimensión.  
  Como mínimo, debe poder justificar la pertenencia del bloque a dimensiones
  como:
  - `arquitectura_macro`
  - `segmentacion_interna`
  - `unidad_de_segmento`
  - `modo_de_comparecencia_verbal`
  - `esquema_de_texto_en_pantalla`
  - `esquema_de_indicaciones_escenicas`

  Cada justificación debe explicar qué rasgos concretos del bloque realizan el
  valor activo de esa dimensión.

**b) Capa verbal**  
 Contiene la realización verbal del bloque.

Puede expresarse mediante campos como:

- `EMISOR`  
  Identifica quién emite verbalmente el contenido del bloque.  
  Debe indicar la fuente de voz o enunciación que realiza el segmento, por
  ejemplo: presentador, voz en off, personaje, narrador u otra fuente verbal
  explícita.

- `DIALOGO`  
  Contiene el contenido verbal efectivo del bloque.  
  Debe expresar exactamente qué se dice en esa unidad de la manifestación y en
  qué formulación aparece realizado.

**c) Capa visual**  
 Contiene los elementos visibles que acompañan la realización verbal.

Puede expresarse mediante campos como:

- `TEXTO_EN_PANTALLA`  
  Describe el texto visible que aparece en pantalla durante el bloque.  
  Debe indicar su contenido efectivo y cumplir la función que le corresponda
  dentro del esquema de texto en pantalla activo.

- `IMAGEN_EN_PANTALLA`  
  Describe la configuración visual dominante del bloque.  
  Debe indicar qué se ve en pantalla como imagen principal del segmento:
  encuadre, objeto central, disposición visible o situación dominante.

**d) Capa escénica**  
 Contiene las acciones o instrucciones de realización visibles del bloque.

Puede expresarse mediante campos como:

- `ACCIONES`  
  Describe qué ocurre o qué debe ejecutarse en el bloque a nivel de acción,
  gesto, manipulación de objetos, desplazamiento o puesta en escena.  
  Debe indicar de manera explícita qué operación visible acompaña o realiza el
  contenido del segmento.

**e) Capa auditiva**  
 Contiene los apoyos sonoros de la manifestación.

Puede expresarse mediante campos como:

- `MUSICA`  
  Describe la presencia, tipo o función de la música dentro del bloque.  
  Debe indicar si existe música y, en caso de existir, qué papel cumple en la
  realización del segmento.

- `SONIDO_AMBIENTE`  
  Describe la presencia de ambiente sonoro en el bloque.  
  Debe indicar si hay un fondo auditivo reconocible y cuál es su función o
  cualidad dominante.

- `EFECTO_SONORO`  
  Describe los sonidos puntuales que acompañan o enfatizan el bloque.  
  Debe indicar qué efectos aparecen y qué papel cumplen dentro de la
  materialización.

En conjunto, `guion_audiovisual_breve` designa una manifestación que:

- posee soporte textual;
- organiza una realización audiovisual;
- opera en escala breve;
- se distribuye por componentes macroestructurales;
- y se realiza por bloques compuestos por capas obligatorias de
  manifestación.

**Restricciones:**

- Debe tomar exactamente este valor en todas las instancias de este codominio.
- Las demás dimensiones del modelo deben ser compatibles con esta estructura de
  manifestación.
- Toda instancia válida debe conservar coherencia con el carácter de:
  - guión,
  - audiovisual,
  - breve,
  - macroestructuralmente organizado,
  - y compuesto por bloques de manifestación.
- La `arquitectura_macro` debe quedar explícitamente realizada en la
  organización general de la pieza.
- Cada bloque local debe incluir:
  - capa metaestructural,
  - capa verbal,
  - capa visual,
  - capa escénica,
  - y capa auditiva.
- Si alguna capa no presenta contenido activo en un bloque, su campo
  correspondiente debe declararse explícitamente como vacío, ausente o nulo
  dentro de la convención adoptada para la instancia.
- La capa metaestructural debe estar presente en todos los bloques junto con sus
  `JUSTIFICACIONES_DIMENSIONALES`.
- Cada `JUSTIFICACION_DIMENSIONAL` debe corresponder a una dimensión activa del
  modelo y explicar la pertenencia del bloque a su valor declarado.
- Toda instancia válida debe incluir una sección LECTURA_PREVIA_DE_BLOQUES antes de la explicitación macroestructural de la manifestación.

---

**Ejemplo:**

# Ejemplo detallado de instancia de `guion_audiovisual_breve`

## Idea general de la pieza

Tomar notas a mano ayuda a estudiar mejor porque obliga a resumir y procesar la
información en vez de copiarla de manera mecánica.

---

## Configuración general de la manifestación

- `clase_de_materializacion`: `guion_audiovisual_breve`
- `plataforma`: `tiktok`
- `aplicacion_de_plataforma`: `video_tiktok`
- `modalidad_de_guion`: `presentacion_a_camara`
- `duracion_objetivo`: `breve`
- `arquitectura_macro`: `apertura_desarrollo_cierre`
- `segmentacion_interna`: `segmentado`
- `unidad_de_segmento`: `accion_mas_enunciado`
- `modo_de_comparecencia_verbal`: `oral_directo`
- `esquema_de_texto_en_pantalla`: `texto_de_refuerzo_segmentado`
- `esquema_de_indicaciones_escenicas`: `moderadas`
- `longitud_por_segmento`: `corta`

---

## Manifestación

## Lectura previa de bloques

`LECTURA_PREVIA_DE_BLOQUES`:

- `APERTURA`  
  `EMISOR:` `PRESENTADOR`  
  `DIALOGO:` “Tomar notas a mano puede ayudarte a estudiar mejor. Y no es solo porque escribes: es porque te obliga a procesar lo que estás aprendiendo.”

- `DESARROLLO — BLOQUE 1`  
  `EMISOR:` `PRESENTADOR`  
  `DIALOGO:` “Cuando escribes a mano, no puedes copiar tan rápido como en teclado. Ya desde ahí cambia la forma en que tomas notas.”

- `DESARROLLO — BLOQUE 2`  
  `EMISOR:` `PRESENTADOR`  
  `DIALOGO:` “Eso te obliga a resumir, elegir y reorganizar lo importante. En vez de copiar todo, tienes que decidir qué sí vale la pena anotar.”

- `DESARROLLO — BLOQUE 3`  
  `EMISOR:` `PRESENTADOR`  
  `DIALOGO:` “Entonces procesas mejor la información mientras estudias. La nota deja de ser una copia y se convierte en una elaboración de lo que entendiste.”

- `CIERRE`  
  `EMISOR:` `PRESENTADOR`  
  `DIALOGO:` “Y por eso recuerdas mejor lo que estudias. Escribir a mano no solo guarda información: te obliga a trabajarla mientras aprendes.”

### APERTURA

{
CAPA_METAESTRUCTURAL: {
FUNCION_DEL_BLOQUE: "Abrir el tema, formular la tesis inicial y situar la pregunta principal de la pieza.",
IDEA_DESARROLLADA: "Tomar notas a mano sí influye en la calidad del estudio.",
JUSTIFICACIONES_DIMENSIONALES: {
arquitectura_macro: "El bloque funciona como entrada del recorrido y presenta el tema central, por lo que realiza la función de APERTURA dentro de `apertura_desarrollo_cierre`.",
segmentacion_interna: "El bloque constituye una unidad clara e independiente dentro de una pieza `segmentada`; no está fragmentado en microtramos ni expandido como bloque extenso.",
unidad_de_segmento: "El bloque combina una acción visible —mostrar libreta y laptop— con un enunciado verbal principal, por lo que corresponde a `accion_mas_enunciado`.",
modo_de_comparecencia_verbal: "La formulación verbal es frontal, clara y dirigida directamente al espectador, sin marcadores de lista ni dramatización; por eso corresponde a `oral_directo`.",
esquema_de_texto_en_pantalla: "El texto visible acompaña específicamente este bloque con una pregunta breve, por lo que realiza `texto_de_refuerzo_segmentado`.",
esquema_de_indicaciones_escenicas: "El bloque incluye varias instrucciones realizativas claras —mirar a cámara, levantar objetos, disponer el plano— sin llegar a una saturación de detalles; por eso corresponde a `moderadas`."
}
},

CAPA_VERBAL: {
EMISOR: "PRESENTADOR",
DIALOGO: "Tomar notas a mano puede ayudarte a estudiar mejor. Y no es solo porque escribes: es porque te obliga a procesar lo que estás aprendiendo."
},

CAPA_VISUAL: {
TEXTO_EN_PANTALLA: "¿Escribir a mano ayuda a estudiar?",
IMAGEN_EN_PANTALLA: "Presentador en escritorio. A la izquierda, laptop abierta con texto visible. A la derecha, libreta y bolígrafo."
},

CAPA_ESCENICA: {
ACCIONES: "El presentador mira directamente a cámara. Levanta primero la laptop, luego la libreta, y deja ambos elementos visibles sobre la mesa para marcar el contraste entre soportes."
},

CAPA_AUDITIVA: {
MUSICA: "Base suave y continua, de fondo, sin competir con la voz.",
SONIDO_AMBIENTE: "Ambiente neutro de habitación de estudio.",
EFECTO_SONORO: "Ninguno."
}
}

---

### DESARROLLO — BLOQUE 1

{
CAPA_METAESTRUCTURAL: {
FUNCION_DEL_BLOQUE: "Introducir la diferencia material entre escribir a mano y copiar en teclado.",
IDEA_DESARROLLADA: "Escribir a mano reduce la posibilidad de copiar de forma rápida y automática.",
JUSTIFICACIONES_DIMENSIONALES: {
arquitectura_macro: "El bloque desarrolla la tesis inicial aportando el primer fundamento, por lo que pertenece al DESARROLLO.",
segmentacion_interna: "Se trata de un bloque breve pero completo, coherente con una estructura `segmentada`.",
unidad_de_segmento: "La unidad se construye por la combinación de una acción concreta —apartar la laptop y empezar a escribir— con el enunciado verbal correspondiente.",
modo_de_comparecencia_verbal: "La voz sigue siendo directa y expositiva, sin teatralización ni organización listada; por ello mantiene `oral_directo`.",
esquema_de_texto_en_pantalla: "El texto visible de este bloque sintetiza su idea principal con una frase breve propia del segmento; por ello corresponde a `texto_de_refuerzo_segmentado`.",
esquema_de_indicaciones_escenicas: "El bloque incorpora varias acciones relevantes —mover objetos, comenzar a escribir, recentrar el plano—, suficientes para orientar la realización con un nivel `moderadas`."
}
},

CAPA_VERBAL: {
EMISOR: "PRESENTADOR",
DIALOGO: "Cuando escribes a mano, no puedes copiar tan rápido como en teclado. Ya desde ahí cambia la forma en que tomas notas."
},

CAPA_VISUAL: {
TEXTO_EN_PANTALLA: "Bloque 1: menos copia automática",
IMAGEN_EN_PANTALLA: "La laptop se desplaza a un lado del encuadre. La libreta queda en el centro. Se ve la mano del presentador empezando a escribir."
},

CAPA_ESCENICA: {
ACCIONES: "El presentador aparta la laptop con una mano, centra la libreta, toma el bolígrafo y escribe una primera línea visible en cámara."
},

CAPA_AUDITIVA: {
MUSICA: "Continúa la base suave de fondo.",
SONIDO_AMBIENTE: "Leve sonido ambiente de escritorio.",
EFECTO_SONORO: "Sonido sutil de la laptop al moverse y del bolígrafo tocando el papel."
}
}

---

### DESARROLLO — BLOQUE 2

{
CAPA_METAESTRUCTURAL: {
FUNCION_DEL_BLOQUE: "Desarrollar la consecuencia operativa de escribir a mano.",
IDEA_DESARROLLADA: "Si no puedes copiar rápido, tienes que resumir, elegir y reorganizar.",
JUSTIFICACIONES_DIMENSIONALES: {
arquitectura_macro: "El bloque sigue ampliando la explicación central, por lo que se mantiene dentro del DESARROLLO.",
segmentacion_interna: "Constituye un segundo segmento breve y reconocible, claramente separado del anterior y del siguiente.",
unidad_de_segmento: "La pieza mínima vuelve a ser `accion_mas_enunciado`, porque la explicación verbal se acopla a la manipulación visible del apunte.",
modo_de_comparecencia_verbal: "El bloque conserva una voz frontal y directamente explicativa; no adopta dramatización ni guía enumerativa.",
esquema_de_texto_en_pantalla: "El texto visible acompaña este tramo con una condensación breve de la idea específica del bloque.",
esquema_de_indicaciones_escenicas: "Se incluyen acciones múltiples —tachar, subrayar, encerrar conceptos—, lo que confirma un nivel `moderadas`."
}
},

CAPA_VERBAL: {
EMISOR: "PRESENTADOR",
DIALOGO: "Eso te obliga a resumir, elegir y reorganizar lo importante. En vez de copiar todo, tienes que decidir qué sí vale la pena anotar."
},

CAPA_VISUAL: {
TEXTO_EN_PANTALLA: "Bloque 2: resumir / elegir / reorganizar",
IMAGEN_EN_PANTALLA: "Plano cercano de la libreta. Se ve una frase larga, luego tachada, y debajo palabras clave más cortas con flechas y subrayados."
},

CAPA_ESCENICA: {
ACCIONES: "El presentador tacha una frase larga, subraya una palabra clave, encierra dos conceptos centrales y traza una flecha entre ellos para mostrar reorganización."
},

CAPA_AUDITIVA: {
MUSICA: "Continúa estable.",
SONIDO_AMBIENTE: "Ambiente neutro de escritorio.",
EFECTO_SONORO: "Raspado del bolígrafo al tachar y subrayar."
}
}

---

### DESARROLLO — BLOQUE 3

{
CAPA_METAESTRUCTURAL: {
FUNCION_DEL_BLOQUE: "Conectar la operación de resumir con el efecto cognitivo central de la pieza.",
IDEA_DESARROLLADA: "Resumir y reorganizar mejora el procesamiento de la información durante el estudio.",
JUSTIFICACIONES_DIMENSIONALES: {
arquitectura_macro: "El bloque continúa el desarrollo, pero ahora enlaza causa y efecto dentro del mismo recorrido explicativo.",
segmentacion_interna: "Se mantiene como un segmento autónomo breve, diferenciable de los otros bloques del desarrollo.",
unidad_de_segmento: "Se combinan nuevamente acción visible y enunciado, lo que sostiene `accion_mas_enunciado`.",
modo_de_comparecencia_verbal: "La voz sigue siendo inmediata y explicativa; no cambia el régimen de oralidad.",
esquema_de_texto_en_pantalla: "El texto visible ofrece el apoyo específico de este segmento, siguiendo el patrón `texto_de_refuerzo_segmentado`.",
esquema_de_indicaciones_escenicas: "La comparación entre texto original y apunte final está claramente guiada, pero sin saturación excesiva de instrucciones."
}
},

CAPA_VERBAL: {
EMISOR: "PRESENTADOR",
DIALOGO: "Entonces procesas mejor la información mientras estudias. La nota deja de ser una copia y se convierte en una elaboración de lo que entendiste."
},

CAPA_VISUAL: {
TEXTO_EN_PANTALLA: "Bloque 3: procesas mejor lo importante",
IMAGEN_EN_PANTALLA: "A la izquierda aparece un párrafo original largo; a la derecha, la libreta resumida con pocas palabras y estructura clara."
},

CAPA_ESCENICA: {
ACCIONES: "El presentador señala primero el texto largo original y luego el apunte reducido. Mantiene ambos en pantalla el tiempo suficiente para marcar la diferencia."
},

CAPA_AUDITIVA: {
MUSICA: "Sigue la base de fondo.",
SONIDO_AMBIENTE: "Ambiente neutro.",
EFECTO_SONORO: "Ligero sonido de transición visual entre el texto largo y la libreta."
}
}

---

### CIERRE

{
CAPA_METAESTRUCTURAL: {
FUNCION_DEL_BLOQUE: "Cerrar la pieza con una consecuencia final clara y condensada.",
IDEA_DESARROLLADA: "Mejor procesamiento durante el estudio produce mejor recuerdo posterior.",
JUSTIFICACIONES_DIMENSIONALES: {
arquitectura_macro: "El bloque cumple función de CIERRE porque concluye el recorrido y formula la consecuencia final de la pieza.",
segmentacion_interna: "Se mantiene como bloque breve final, coherente con una organización `segmentada`.",
unidad_de_segmento: "Sigue articulando una acción simple de clausura con el enunciado verbal final.",
modo_de_comparecencia_verbal: "La voz continúa en registro `oral_directo`, formulando la conclusión de manera frontal y breve.",
esquema_de_texto_en_pantalla: "El texto visible resume el bloque final con una frase breve propia del cierre.",
esquema_de_indicaciones_escenicas: "Las acciones finales —cerrar la libreta, volver a cámara, asentir— son suficientes para orientar visualmente el cierre sin convertirlo en escena detallada."
}
},

CAPA_VERBAL: {
EMISOR: "PRESENTADOR",
DIALOGO: "Y por eso recuerdas mejor lo que estudias. Escribir a mano no solo guarda información: te obliga a trabajarla mientras aprendes."
},

CAPA_VISUAL: {
TEXTO_EN_PANTALLA: "Cierre: mejor procesamiento, mejor recuerdo",
IMAGEN_EN_PANTALLA: "Plano medio del presentador. La libreta se cierra y queda sobre la mesa frente a cámara."
},

CAPA_ESCENICA: {
ACCIONES: "El presentador cierra la libreta lentamente, deja ambas manos sobre la mesa, mira a cámara y asiente antes del corte final."
},

CAPA_AUDITIVA: {
MUSICA: "La base de fondo continúa y baja ligeramente al final.",
SONIDO_AMBIENTE: "Ambiente neutro de habitación.",
EFECTO_SONORO: "Sonido leve del cierre de la libreta."
}
}

---

## Observación estructural del ejemplo

Esta instancia muestra que `guion_audiovisual_breve` se realiza como:

- una **macroestructura explícita**: `APERTURA` + `DESARROLLO` + `CIERRE`;
- una serie de **bloques locales** dentro de esa macroestructura;
- y, en cada bloque, un conjunto de **capas obligatorias de manifestación**:
  - `CAPA_METAESTRUCTURAL`
  - `CAPA_VERBAL`
  - `CAPA_VISUAL`
  - `CAPA_ESCENICA`
  - `CAPA_AUDITIVA`

También muestra que la **capa metaestructural** no es decorativa:
permite declarar qué hace el bloque, qué idea desarrolla y por qué pertenece a
los valores activos de las dimensiones del modelo.

---

### 3.2. `plataforma`

**Función:**  
Fijar la plataforma de pertenencia de la materialización y situar la salida
dentro del entorno general en el que debe realizarse.

Esta dimensión responde a la pregunta:

**¿en qué plataforma existe y cobra sentido esta clase de materialización?**

Su función es anclar el codominio a un marco de salida reconocible, dentro del
cual se interpretan el resto de las dimensiones del modelo.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `tiktok`

**Descripción del valor:**

- `tiktok`:  
  Plataforma de circulación audiovisual breve, basada en consumo secuencial
  rápido, visibilidad vertical y compatibilidad con piezas pensadas para
  atención inmediata y realización breve.

**Restricciones:**

- Debe tomar exactamente este valor en todas las instancias de este codominio.
- Las demás dimensiones del modelo deben ser compatibles con la pertenencia de la
  salida a esta plataforma.

---

### 3.3. `aplicacion_de_plataforma`

**Función:**  
Precisar la aplicación específica de materialización dentro de la plataforma y
fijar la clase concreta de salida a la que debe pertenecer la instancia del
codominio.

Esta dimensión responde a la pregunta:

**¿qué forma específica de realización adopta la materialización dentro de la
plataforma declarada?**

Su función es situar la salida no solo en una plataforma general, sino en una
aplicación concreta de esa plataforma. Gracias a esta dimensión, el modelo puede
distinguir entre distintas clases de materialización que pertenecen al mismo
entorno general, pero que no comparten exactamente la misma estructura de
salida.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `video_tiktok`

**Descripción del valor:**

- `video_tiktok`:  
  Pieza audiovisual vertical breve, con comparecencia secuencial continua,
  compatible con consumo rápido dentro del flujo de TikTok.

  Este valor implica que la materialización:
  - adopta la forma de video;
  - circula dentro del régimen de visualización propio de TikTok;
  - se organiza como una secuencia continua;
  - y debe ser compatible con una realización breve y directa.

**Restricciones:**

- Debe tomar exactamente este valor en todas las instancias de este codominio.
- Las demás dimensiones del modelo deben ser compatibles con esta aplicación
  específica de plataforma.
- Toda instancia válida debe conservar coherencia con el carácter de:
  - video,
  - TikTok,
  - y secuencia audiovisual breve.

---

### 3.4. `modalidad_de_guion`

**Función:**  
Describir la modalidad operativa del guión como pieza textual de salida y fijar
la forma principal en que el contenido debe comparecer dentro de la realización
audiovisual.

Esta dimensión responde a la pregunta:

**¿de qué manera se organiza el guión para hacerse realizable como video?**

Su función es precisar la modalidad dominante de la salida y orientar la forma en
que se distribuyen voz, acción y presencia escénica dentro de la pieza.

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
  El guión organiza principalmente habla directa de una voz o figura en cámara.

  Este valor implica que la salida:
  - se apoya en enunciación frontal o directa;
  - concentra el peso expresivo en la voz visible;
  - y organiza el contenido como comparecencia hablada ante cámara.

- `voz_en_off`:  
  El guión organiza principalmente una voz superpuesta a acciones, imágenes o
  secuencias no centradas en habla directa a cámara.

  Este valor implica que la salida:
  - distribuye el contenido principal en una voz no necesariamente visible;
  - articula la pieza con apoyo fuerte en imagen o acción;
  - y organiza la secuencia verbal como acompañamiento estructurante del video.

- `escenificado`:  
  El guión organiza una secuencia de acciones, parlamentos o comparecencias con
  dimensión performativa explícita.

  Este valor implica que la salida:
  - distribuye el contenido en acciones o situaciones representadas;
  - organiza la materialización como secuencia performativa;
  - y requiere una construcción más marcada de escena o actuación.

- `mixto`:  
  El guión combina al menos dos de las modalidades anteriores.

  Este valor implica que la salida:
  - articula más de una lógica de comparecencia;
  - distribuye el contenido entre modalidades diferenciables;
  - y exige identificar con claridad cómo se combinan esas modalidades dentro de
    la pieza.

**Restricciones:**

- Debe haber exactamente una modalidad dominante.
- Si el valor es `mixto`, deben quedar identificables los componentes mezclados.
- Las demás dimensiones del modelo deben ser compatibles con la modalidad
  declarada.

---

### 3.5. `duracion_objetivo`

**Función:**  
Fijar el rango temporal compatible de la salida y delimitar la escala de
desarrollo que puede asumir la materialización dentro del codominio.

Esta dimensión responde a la pregunta:

**¿en qué rango de duración debe realizarse esta salida?**

Su función es situar la pieza dentro de una escala temporal operativa que
condiciona:

- la cantidad de desarrollo compatible;
- la amplitud de los segmentos;
- el grado de condensación de la salida;
- y la organización general del guión.

**Tipo de valor:**  
Rango categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores sugerido:**

- `muy_breve`
- `breve`
- `breve_expandido`

**Descripción de los valores:**

- `muy_breve`:  
  Guión orientado a una realización extremadamente corta.

  Este valor implica que la salida:
  - trabaja con alto nivel de condensación;
  - requiere una organización muy compacta;
  - y admite solo un desarrollo mínimo dentro de la pieza.

- `breve`:  
  Guión orientado a una realización breve estándar.

  Este valor implica que la salida:
  - admite un desarrollo corto pero reconocible;
  - permite mayor articulación interna que `muy_breve`;
  - y conserva una escala claramente breve de realización.

- `breve_expandido`:  
  Guión orientado a una realización breve con mayor desarrollo interno.

  Este valor implica que la salida:
  - permite más amplitud relativa en la organización del guión;
  - admite una distribución interna más desarrollada;
  - y sigue perteneciendo a una escala breve, aunque con margen mayor de
    despliegue.

**Referencia temporal operativa sugerida:**

- `muy_breve`: 10 a 20 segundos
- `breve`: 20 a 40 segundos
- `breve_expandido`: 40 a 75 segundos

**Restricciones:**

- Toda instancia debe fijar uno de estos rangos.
- La arquitectura macro y la segmentación interna deben ser coherentes con la
  duración elegida.
- Las demás dimensiones del modelo deben ser compatibles con la escala temporal
  declarada.

**Ejemplo:**

**Idea que se tratará:**  
Tomar notas a mano ayuda a estudiar mejor porque obliga a resumir y procesar la
información en vez de copiarla.

**Secuencia en la que se presentará:**

1. Relación con estudiar mejor
2. Diferencia frente a copiar
3. Procesamiento de la información
4. Mejor recuerdo de lo estudiado

**Versiones según `duracion_objetivo`:**

### `muy_breve`

- “Tomar notas a mano puede ayudarte a estudiar mejor.”
- “Al escribir, no copias tan fácil: tienes que resumir.”
- “Eso te obliga a procesar lo importante.”
- “Y por eso recuerdas mejor lo que estudias.”

### `breve`

- “Tomar notas a mano puede ayudarte a estudiar mejor.”
- “Cuando escribes en papel no puedes copiar tan rápido como en teclado.”
- “Eso te obliga a resumir, elegir y reorganizar lo importante.”
- “En lugar de transcribir, procesas la información.”
- “Por eso muchas veces recuerdas mejor lo que escribiste a mano.”

### `breve_expandido`

- “Tomar notas a mano no solo sirve para guardar información.”
- “También cambia la forma en que la procesas mientras estudias.”
- “Cuando usas teclado puedes copiar casi todo sin decidir demasiado.”
- “En cambio, escribir a mano te obliga a ir más lento.”
- “Ese ritmo te hace seleccionar, resumir y reorganizar lo importante.”
- “Entonces la nota deja de ser una copia y se vuelve una elaboración.”
- “Y cuando elaboras mejor, entiendes mejor.”
- “Por eso muchas personas recuerdan más cuando estudian escribiendo a mano.”

---

---

### 3.6. `arquitectura_macro`

**Función:**  
Describir la organización estructural general del guión y fijar la forma amplia
en que la salida distribuye sus partes principales.

Esta dimensión responde a la pregunta:

**¿cómo se organiza globalmente la materialización?**

Su función es establecer el patrón estructural dominante de la pieza, es decir,
la manera general en que apertura, núcleo y cierre se articulan dentro del
guión. Gracias a esta dimensión, la salida puede tomar una forma macro
reconocible y coherente con su duración, su segmentación y su modalidad de
comparecencia.

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
  El guión se organiza en una entrada inicial, un desarrollo central y un cierre
  explícito.

  Este valor implica que la salida:
  - presenta una estructura lineal y reconocible;
  - distribuye el contenido en tres momentos principales;
  - y favorece una organización clara de inicio, despliegue y conclusión.

- `apertura_desarrollo_remate`:  
  El guión se organiza en apertura, desarrollo y remate final breve.

  Este valor implica que la salida:
  - concentra su cierre en una unidad corta y marcada;
  - orienta la pieza hacia un final compacto;
  - y favorece una clausura rápida con peso terminal reconocible.

- `apertura_lista_cierre`:  
  El guión se organiza mediante una apertura, un desarrollo en forma de lista y
  un cierre.

  Este valor implica que la salida:
  - distribuye el núcleo en elementos enumerables;
  - ordena el contenido como serie breve de puntos;
  - y favorece una progresión basada en ítems o unidades listadas.

- `apertura_contraste_resolucion`:  
  El guión se organiza a partir de una apertura, un núcleo estructurado por
  contraste y una resolución final.

  Este valor implica que la salida:
  - articula el contenido mediante oposición, diferencia o tensión;
  - organiza su desarrollo alrededor de dos polos o estados contrastables;
  - y culmina en una resolución estructuralmente ligada a ese contraste.

- `apertura_secuencia_remate`:  
  El guión se organiza mediante una apertura, un desarrollo por pasos o momentos
  secuenciales y un remate breve.

  Este valor implica que la salida:
  - distribuye el núcleo en una progresión ordenada;
  - organiza el contenido como secuencia de momentos o pasos;
  - y culmina en un cierre breve que condensa el recorrido anterior.

**Restricciones:**

- Debe haber exactamente una arquitectura macro dominante.
- La segmentación interna debe ser compatible con la arquitectura elegida.
- La duración objetivo debe ser compatible con la amplitud estructural de la
  arquitectura declarada.
- La modalidad de guión debe poder realizarse coherentemente dentro de la
  arquitectura macro seleccionada.

---

### 3.7. `segmentacion_interna`

**Función:**  
Fijar el número y la distribución general de los segmentos operativos del guión y
delimitar cómo se reparte internamente la materialización.

Esta dimensión responde a la pregunta:

**¿cómo se distribuye el guión en bloques operativos a lo largo de la pieza?**

Su función es establecer la escala de fragmentación del guión, es decir, cuántos
bloques reconocibles contiene la salida y qué amplitud relativa puede tener cada
uno. Gracias a esta dimensión, la materialización puede tomar una organización
interna coherente con su duración, su arquitectura macro, su modalidad de guión
y su densidad verbal.

**Tipo de valor:**  
Categorial ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `microsegmentado`
- `segmentado`
- `segmentado_extenso`

**Descripción de los valores:**

- `microsegmentado`:  
  Guión dividido en bloques muy cortos y altamente recortados.

  Este valor implica que la salida:
  - organiza su contenido en muchas unidades breves;
  - favorece cambios frecuentes entre segmentos;
  - y trabaja con una distribución interna de alta fragmentación.

- `segmentado`:  
  Guión dividido en bloques breves pero no mínimos.

  Este valor implica que la salida:
  - organiza su contenido en una cantidad moderada de segmentos;
  - permite que cada bloque desarrolle una unidad reconocible;
  - y mantiene una distribución interna breve pero más estable que la del
    microsegmentado.

- `segmentado_extenso`:  
  Guión dividido en menos bloques, cada uno con mayor amplitud relativa.

  Este valor implica que la salida:
  - concentra más contenido en cada segmento;
  - distribuye el recorrido en menos unidades;
  - y favorece una organización interna menos recortada y más continua.

**Restricciones:**

- Debe ser coherente con `duracion_objetivo`.
- No debe usarse `segmentado_extenso` con `muy_breve` salvo justificación
  explícita.
- La `arquitectura_macro` debe poder realizarse de manera consistente dentro de
  la segmentación elegida.
- La `longitud_por_segmento` debe ser compatibles
  con el valor declarado.

---

### 3.8. `unidad_de_segmento`

**Función:**  
Describir la unidad formal mínima con la que se construyen los segmentos del
guión y fijar el tipo básico de pieza compositiva que organiza internamente cada
bloque de la materialización.

Esta dimensión responde a la pregunta:

**¿cuál es la unidad mínima dominante con la que se construye cada segmento del
guión?**

Su función es precisar si los segmentos se construyen principalmente a partir de:

- frases breves;
- bloques cortos de oraciones;
- intervenciones de voz;
- combinaciones de acción y enunciado;
- o una mezcla organizada de esas unidades.

Gracias a esta dimensión, el modelo puede distinguir entre segmentación y unidad
de construcción: una cosa es cuántos segmentos hay y cómo se distribuyen; otra,
qué tipo de unidad mínima compone esos segmentos.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `enunciado_breve`
- `bloque_de_oraciones`
- `parlamento_breve`
- `accion_mas_enunciado`
- `unidad_mixta`

**Descripción de los valores:**

- `enunciado_breve`:  
  Cada segmento se articula principalmente como una frase o unidad verbal breve.

  Este valor implica que la salida:
  - construye sus bloques a partir de unidades mínimas muy recortadas;
  - favorece una composición rápida y concentrada;
  - y organiza el contenido mediante frases breves de alta autonomía relativa.

- `bloque_de_oraciones`:  
  Cada segmento contiene un pequeño bloque de dos o más oraciones.

  Este valor implica que la salida:
  - construye sus segmentos con unidades algo más desarrolladas;
  - permite una pequeña expansión interna dentro de cada bloque;
  - y favorece una organización verbal breve, pero no mínima.

- `parlamento_breve`:  
  Cada segmento se organiza como intervención breve de voz.

  Este valor implica que la salida:
  - se construye a partir de intervenciones enunciativas reconocibles;
  - favorece una lógica de habla breve con identidad propia por bloque;
  - y organiza el guión como secuencia de parlamentos cortos.

- `accion_mas_enunciado`:  
  Cada segmento articula una acción con su soporte verbal.

  Este valor implica que la salida:
  - combina en cada unidad mínima una dimensión de acción y una dimensión
    enunciativa;
  - favorece una construcción audiovisual más explícita;
  - y organiza los segmentos como pares o conjuntos breves de hacer + decir.

- `unidad_mixta`:  
  El guión combina más de un tipo de unidad mínima.

  Este valor implica que la salida:
  - no se construye desde una sola unidad dominante simple;
  - articula distintas unidades mínimas de forma reconocible;
  - y exige una combinación consistente entre ellas.

**Restricciones:**

- Debe haber un tipo dominante.
- Si se usa `unidad_mixta`, la mezcla debe ser realizable y consistente con la
  modalidad de guión.
- La `segmentacion_interna` debe ser compatible con la `unidad_de_segmento`
  declarada.
- La `longitud_por_segmento` debe poder realizarse coherentemente a partir de la
  unidad mínima elegida.
- La `modalidad_de_guion` debe ser compatible con el tipo de unidad dominante.

---

### 3.9. `modo_de_comparecencia_verbal`

**Función:**  
Describir la forma verbal compatible de la salida y fijar el modo en que el
guión está construido para sonar al ser realizado.

Esta dimensión responde a la pregunta:

**¿cómo debe comparecer verbalmente la materialización?**

Su función es precisar la configuración verbal dominante de la pieza, es decir,
la forma en que la salida se organiza para ser dicha, escuchada o performada.
Gracias a esta dimensión, el modelo puede distinguir entre distintas formas de
oralización compatibles con el codominio.

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
  La pieza está escrita para sonar como habla directa, fluida y frontal.

  Este valor implica que la salida:
  - favorece una comparecencia verbal inmediata;
  - organiza el contenido como habla dirigida de forma clara;
  - y mantiene una oralidad simple, continua y directamente realizable.

- `oral_guiado`:  
  La pieza conserva oralidad, pero con mayor soporte organizativo y textual.

  Este valor implica que la salida:
  - mantiene condición oral;
  - organiza el contenido con mayor apoyo estructural;
  - y favorece una comparecencia verbal más guiada y marcada en su formulación.

- `oral_escenico`:  
  La oralidad está subordinada a una organización performativa o dramatizada.

  Este valor implica que la salida:
  - organiza la voz en relación con una situación escénica;
  - favorece una comparecencia verbal con mayor carga performativa;
  - y distribuye el contenido como parte de una realización más marcada en gesto,
    actuación o escena.

- `oral_mixto`:  
  La pieza combina dos o más formas de comparecencia verbal.

  Este valor implica que la salida:
  - no se apoya en una sola forma dominante simple;
  - articula diferentes regímenes de oralidad dentro de la pieza;
  - y exige una combinación clara y realizable entre ellos.

**Restricciones:**

- Toda salida del codominio debe ser compatible con oralización.
- La modalidad de guión debe ser coherente con el modo de comparecencia verbal
  declarado.
- Si se usa `oral_mixto`, la combinación debe ser identificable y consistente
  dentro de la pieza.
- La estructura verbal de la salida debe ser realizable como video breve dentro
  del codominio.

---

### 3.10. `esquema_de_texto_en_pantalla`

**Función:**  
Fijar el régimen de presencia textual visible complementaria a la voz y
describir cómo se distribuye el texto en pantalla dentro de la materialización.

Esta dimensión responde a la pregunta:

**¿qué papel cumple el texto visible dentro de la pieza?**

Su función es precisar si el texto en pantalla:

- está ausente;
- aparece solo como refuerzo mínimo;
- acompaña cada segmento;
- ocupa un lugar estructural dominante;
- o varía según bloques y funciones.

Gracias a esta dimensión, el modelo puede distinguir entre distintas formas de
articulación entre voz y texto visible dentro del codominio.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `sin_texto_en_pantalla`
- `texto_de_refuerzo_minimo`
- `texto_de_refuerzo_segmentado`
- `texto_en_pantalla_dominante`
- `texto_en_pantalla_mixto`

**Descripción de los valores:**

- `sin_texto_en_pantalla`:  
  La salida no requiere texto visible complementario.

  Este valor implica que la pieza:
  - se sostiene principalmente en voz, imagen y acción;
  - no depende de apoyo textual en pantalla;
  - y organiza su comparecencia sin capas visibles de texto.

- `texto_de_refuerzo_minimo`:  
  Solo aparecen palabras clave o apoyos mínimos.

  Este valor implica que la pieza:
  - usa texto visible de forma puntual;
  - incorpora apoyos breves de refuerzo;
  - y mantiene el peso principal de la realización fuera del texto en pantalla.

- `texto_de_refuerzo_segmentado`:  
  Cada tramo o segmento puede llevar apoyo textual breve.

  Este valor implica que la pieza:
  - distribuye texto visible a lo largo de sus bloques;
  - acompaña cada segmento con apoyo verbal breve;
  - y organiza una relación estable entre segmentación y texto en pantalla.

- `texto_en_pantalla_dominante`:  
  El texto visible tiene un papel estructural central.

  Este valor implica que la pieza:
  - apoya fuertemente su organización en el texto visible;
  - distribuye buena parte de la información mediante pantalla;
  - y exige una coordinación más estricta entre voz, lectura y ritmo visual.

- `texto_en_pantalla_mixto`:  
  La presencia textual varía según segmentos o funciones.

  Este valor implica que la pieza:
  - no mantiene un solo régimen de texto visible;
  - alterna entre ausencia, refuerzo, acompañamiento o dominancia;
  - y organiza el texto en pantalla de forma diferencial según el tramo de la
    materialización.

**Restricciones:**

- Si la modalidad de guión es `voz_en_off` o `mixto`, este elemento debe quedar
  explícitamente fijado.
- Si se usa `texto_en_pantalla_dominante`, la densidad verbal compatible debe
  ajustarse para no volver irrealizable la salida.
- La `segmentacion_interna` debe ser compatible con el esquema de texto en
  pantalla declarado.
- La relación entre `modo_de_comparecencia_verbal` y texto visible debe ser
  realizable dentro de la pieza.
- Toda instancia debe presentar un régimen de texto en pantalla coherente con su
  organización general.
  ere mayor peso estructural.

---

### 3.11. `esquema_de_indicaciones_escenicas`

**Función:**  
Describir el grado y tipo de indicaciones escénicas que la salida incluye y
fijar cuánto de la realización debe quedar explícitamente señalado dentro del
guión.

Esta dimensión responde a la pregunta:

**¿en qué medida la materialización incorpora instrucciones visibles de acción,
encuadre o comparecencia escénica?**

Su función es precisar si el guión:

- no incorpora indicaciones escénicas;
- incluye solo marcas básicas;
- desarrolla varias indicaciones relevantes;
- o distribuye instrucciones frecuentes y explícitas a lo largo de la pieza.

Gracias a esta dimensión, el modelo puede distinguir entre distintos niveles de
explicitación escénica dentro del codominio.

**Tipo de valor:**  
Categorial ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `ninguna`
- `minimas`
- `moderadas`
- `detalladas`

**Descripción de los valores:**

- `ninguna`:  
  La salida no requiere indicaciones escénicas explícitas.

  Este valor implica que la pieza:
  - se sostiene principalmente en la organización verbal;
  - no necesita instrucciones visibles de acción o encuadre;
  - y deja la realización escénica en un nivel no desarrollado dentro del guión.

- `minimas`:  
  Solo incluye marcas básicas de acción o encuadre.

  Este valor implica que la pieza:
  - incorpora indicaciones escénicas puntuales;
  - señala solo apoyos básicos para la realización;
  - y mantiene el peso principal del guión fuera de la instrucción escénica.

- `moderadas`:  
  Incluye varias indicaciones relevantes para la realización.

  Este valor implica que la pieza:
  - distribuye instrucciones escénicas en varios bloques;
  - usa indicaciones como parte reconocible de la organización de la salida;
  - y orienta la realización con mayor claridad sin volverla completamente
    dependiente de instrucciones detalladas.

- `detalladas`:  
  La salida incorpora instrucciones escénicas explícitas y frecuentes.

  Este valor implica que la pieza:
  - desarrolla de forma amplia la dimensión escénica;
  - apoya buena parte de la realización en instrucciones visibles;
  - y exige una articulación estrecha entre voz, acción, encuadre o
    comparecencia visual.

**Restricciones:**

- Debe ser coherente con `modalidad_de_guion`.
- Si la modalidad es `escenificado`, no debería usarse `ninguna` salvo caso muy
  excepcional.
- La `unidad_de_segmento` debe ser compatible con el grado de explicitación
  escénica declarado.
- El `esquema_de_texto_en_pantalla` y el `esquema_de_indicaciones_escenicas`
  deben poder coexistir de manera realizable dentro de la pieza.
- Toda instancia debe presentar un grado de indicación escénica consistente con
  su organización general.

---

## 4. Restricciones globales del modelo

1. Toda instancia de este codominio debe fijar valores para todos los elementos
   obligatorios.
2. Ningún elemento del modelo debe describir:
   - finalidad estratégica,
   - efecto buscado,
   - acción esperada,
   - o lógica de transformación.
3. Esos contenidos pertenecen respectivamente al modelo base de la intención y
   al modelo base del protocolo.
4. Toda salida válida debe poder ser reconocida como:
   - guión,
   - para video,
   - dentro de TikTok,
   - y compatible con la modalidad de guión declarada.

---

## 5. Fórmula condensada del modelo

El modelo base del codominio `guion_para_video_de_tiktok` describe la clase de
materialización textual válida para organizar una realización audiovisual breve
en TikTok, fijando su estructura formal, sus restricciones materiales, sus
modos de comparecencia y sus criterios de pertenencia, sin absorber ni la
intención estratégica de la adaptación ni la lógica protocolaria de la
transformación.
