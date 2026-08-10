# Modelo especializado — `analizador_de_metadiscurso` del MAANC

**id_documental:** `modelo_analizador_de_metadiscurso_maanc_v2`  
**tipo:** `modelo_operativo_independiente`  
**sistema:** `MAANC / Arquitectura Macro Narrativo-Cognitiva`  
**módulo:** `11. analizador_de_metadiscurso`  
**uso:** análisis de textos existentes y apoyo a generación de manifestaciones ACCD  
**estado:** modelo detallado reutilizable para otros textos

---

## 0. Propósito del documento

Este documento describe el modelo operativo del `analizador_de_metadiscurso` sin mezclarlo con ningún ejemplo aplicado. Su función es servir como referencia reusable cuando se analicen otros textos, capítulos, discursos, ensayos, guiones, carousels, videos cortos o cualquier manifestación que tenga una arquitectura macro.

El modelo parte de esta idea:

```txt
contenido
  = lo que el texto dice

arquitectura_macro
  = cómo evoluciona narrativo-cognitivamente el texto

metadiscurso
  = cómo el texto guía al lector a través de esa evolución
```

El `analizador_de_metadiscurso` no se limita a detectar conectores. Reconstruye la **capa de conducción lectora** mediante la cual el texto se vuelve navegable, jerarquizado, interpretable y recorrible.

---

## 1. Definición especializada

El `analizador_de_metadiscurso` es el módulo del MAANC encargado de detectar, clasificar e interpretar las operaciones mediante las cuales un texto:

```txt
1. guía al lector dentro del recorrido;
2. marca aperturas, transiciones y cierres;
3. jerarquiza ideas;
4. reformula y aclara contenidos;
5. introduce ejemplos, analogías, mini-historias o pruebas;
6. convoca explícitamente al lector;
7. expresa postura autoral;
8. importa autoridad o evidencia;
9. regula certeza, duda, énfasis y afectividad;
10. convierte una secuencia textual en una trayectoria guiada.
```

Definición breve:

```txt
analizador_de_metadiscurso = módulo que reconstruye cómo el texto conduce su propia lectura
```

Definición extendida:

```txt
analizador_de_metadiscurso = módulo que detecta y modela las operaciones de guía,
encuadre, jerarquización, transición, reformulación, autorización, convocatoria,
advertencia, postura y cierre mediante las cuales una manifestación vuelve recorrible
su arquitectura macro.
```

---

## 2. Lugar del módulo dentro del MAANC

El MAANC analiza la arquitectura macro como evolución narrativo-cognitiva. En ese sistema, el `analizador_de_metadiscurso` no reemplaza a otros módulos: los complementa.

```txt
MAANC
  1. extractor_de_macroestructura
  2. detector_de_estructura_expositiva
  3. segmentador_funcional
  4. constructor_de_trayectoria_narrativa
  5. analizador_de_relaciones_retóricas
  6. analizador_de_coherencia
  7. modelador_de_situacion_cognitiva
  8. analizador_intencional_atencional
  9. detector_de_esquemas_narrativos
  10. analizador_de_moves_retoricos
  11. analizador_de_metadiscurso
  12. analizador_argumentativo
  13. integrador_ACCD
```

El `analizador_de_metadiscurso` aporta evidencia sobre:

```txt
- límites de sección;
- cambios de foco;
- cambios de operación cognitiva;
- jerarquía entre ideas;
- instrucciones de lectura;
- mecanismos de autoaplicación;
- marcadores de cierre o apertura;
- relación autor-lector;
- grado de guía explícita del texto.
```

---

## 3. Problema que resuelve

Sin este módulo, el análisis de arquitectura macro puede quedar limitado a una estructura externa:

```txt
sección 1 → sección 2 → sección 3
```

Pero los textos no sólo se componen de partes. También le dicen al lector cómo recorrer esas partes.

Ejemplos de funciones metadiscursivas:

```txt
“hasta aquí”
  → cierra un tramo

“ahora bien”
  → desplaza la lectura

“por ejemplo”
  → baja una idea a un caso

“en otras palabras”
  → reformula una idea

“lo central es”
  → jerarquiza un nodo conceptual

“recordemos”
  → reactiva memoria textual

“imaginemos”
  → convoca una operación mental del lector
```

El módulo convierte esas señales en información arquitectónica.

---

## 4. Unidad mínima: `OMD` — Operación Metadiscursiva

El análisis no debe tomar como unidad mínima la palabra o conector, sino la **operación metadiscursiva**.

```yaml
operacion_metadiscursiva:
  omd_id:
  expresion_o_fragmento:
  tipo_de_marca:
  familia_funcional:
  subfamilia:
  operacion_cognitiva:
  alcance:
  unidad_afectada:
  responsabilidad_en_arquitectura_macro:
  efecto_sobre_el_lector:
  evidencia_textual:
  notas_de_ambiguedad:
```

Una `OMD` puede estar marcada explícitamente o ser implícita.

### 4.1. OMD explícita

Tiene una marca verbal clara.

```txt
“por tanto”
“en otras palabras”
“lo importante es”
“recordemos”
“tomemos, por ejemplo”
```

### 4.2. OMD implícita

No depende de un conector específico, sino de una operación estructural reconocible.

```txt
acumulación de ejemplos
cambio de escala
inserción de una historia
retorno a un caso previo
contraste entre dos modelos conductuales
```

---

## 5. Capas internas del analizador

El modelo opera con seis capas.

```txt
analizador_de_metadiscurso
  1. capa_de_marcacion
  2. capa_de_operacion
  3. capa_de_alcance
  4. capa_de_relacion
  5. capa_de_conduccion
  6. capa_de_validacion_macro
```

### 5.1. Capa de marcación

Detecta la señal visible o inferida.

```yaml
capa_de_marcacion:
  expresion:
  posicion:
  forma:
    - conector
    - marcador_de_marco
    - frase_autoral
    - pregunta_retórica
    - fórmula_de_reformulación
    - apelación_al_lector
    - inserción_de_fuente
    - movimiento_estructural_implícito
```

Pregunta rectora:

```txt
¿Qué señal aparece en el texto?
```

### 5.2. Capa de operación

Determina qué hace la marca.

```yaml
capa_de_operacion:
  operacion_cognitiva:
    - abrir
    - cerrar
    - desplazar
    - reformular
    - generalizar
    - particularizar
    - autorizar
    - advertir
    - convocar
    - jerarquizar
    - matizar
    - reforzar
    - proyectar
```

Pregunta rectora:

```txt
¿Qué operación realiza esta marca sobre la lectura?
```

### 5.3. Capa de alcance

Determina el tamaño de la unidad afectada.

```yaml
alcance:
  micro:
    descripcion: afecta una frase o idea local
  meso:
    descripcion: afecta un ejemplo, subsección o mini-historia
  macro:
    descripcion: afecta una sección completa
  global:
    descripcion: afecta la trayectoria completa del texto
```

Pregunta rectora:

```txt
¿Sobre qué tramo actúa esta operación?
```

### 5.4. Capa de relación

Determina cómo conecta unidades.

```yaml
relacion_metadiscursiva:
  tipo:
    - continuidad
    - contraste
    - ampliacion
    - ejemplificacion
    - generalizacion
    - reformulacion
    - recapitulacion
    - proyeccion
    - advertencia
    - correccion
    - cierre
  from:
  to:
  funcion:
```

Pregunta rectora:

```txt
¿Qué relación crea entre unidades textuales o cognitivas?
```

### 5.5. Capa de conducción

Reconstruye cómo guía al lector.

```yaml
conduccion_lectora:
  estado_lector_antes:
  accion_de_guia:
  estado_lector_despues:
  efecto_en_la_trayectoria:
```

Pregunta rectora:

```txt
¿Cómo cambia la posición interpretativa del lector?
```

### 5.6. Capa de validación macro

Verifica si las operaciones metadiscursivas respaldan la arquitectura macro detectada.

```yaml
validacion_macro:
  arquitectura_macro_preliminar:
  operaciones_que_la_confirman:
  operaciones_que_la_corrigen:
  operaciones_ambiguas:
  grado_de_soporte_metadiscursivo:
```

Pregunta rectora:

```txt
¿La conducción metadiscursiva confirma la arquitectura macro propuesta?
```

---

## 6. Familias funcionales metadiscursivas

El módulo usa familias funcionales. Cada familia clasifica una operación por su responsabilidad dentro del recorrido.

```txt
FAM-MD-Encuadre
FAM-MD-Apertura-de-Operacion
FAM-MD-Transicion
FAM-MD-Reorientacion
FAM-MD-Recuperacion
FAM-MD-Generalizacion
FAM-MD-Jerarquizacion
FAM-MD-Reformulacion
FAM-MD-Ejemplificacion
FAM-MD-Autorizacion
FAM-MD-Convocatoria-del-Lector
FAM-MD-Advertencia-Interpretativa
FAM-MD-Contraste-de-Lectura
FAM-MD-Cierre-Parcial
FAM-MD-Proyeccion-Practica
FAM-MD-Regla-Final
FAM-MD-Conduccion-Afectiva
FAM-MD-Autopresencia
FAM-MD-Mitigacion
FAM-MD-Refuerzo
```

---

## 7. Fichas de familias funcionales

### 7.1. `FAM-MD-Encuadre`

**Función:** establecer cómo debe leerse una unidad o el texto completo.

**Criterios obligatorios:**

```txt
1. Introduce un marco de interpretación.
2. Prepara al lector para una operación posterior.
3. Afecta una unidad mayor que la frase inmediata.
```

**Señales típicas:**

```txt
títulos proverbiales
preguntas iniciales
frases de orientación
imágenes marco
advertencias introductorias
```

**Salida esperada:**

```yaml
familia: FAM-MD-Encuadre
operacion: preparar_lectura
alcance: macro | global
responsabilidad: definir_el_modo_de_entrada_al_texto
```

---

### 7.2. `FAM-MD-Apertura-de-Operacion`

**Función:** abrir una operación textual nueva: ejemplo, prueba, explicación, contraste, historia, advertencia.

**Criterios obligatorios:**

```txt
1. Marca inicio de un tramo funcional.
2. Introduce una nueva responsabilidad narrativa o cognitiva.
3. Cambia el modo de avance del texto.
```

**Señales típicas:**

```txt
tomemos por ejemplo
veamos ahora
consideremos
escuche lo siguiente
un caso interesante
```

---

### 7.3. `FAM-MD-Transicion`

**Función:** conectar dos unidades y señalar dirección de avance.

**Criterios obligatorios:**

```txt
1. Conecta dos unidades.
2. Indica relación de continuidad, contraste, consecuencia o desplazamiento.
3. Afecta la lectura de la unidad siguiente.
```

**Subtipos:**

```txt
transicion_aditiva
transicion_contrastiva
transicion_causal
transicion_consecutiva
transicion_de_escala
transicion_de_ejemplo_a_regla
```

---

### 7.4. `FAM-MD-Reorientacion`

**Función:** desplazar el foco interpretativo.

**Criterios obligatorios:**

```txt
1. El lector podría seguir una línea interpretativa.
2. El texto bloquea o modifica esa línea.
3. Se instala un nuevo foco de lectura.
```

**Ejemplos de operación:**

```txt
no importa quién tuvo la culpa
lo que importa es el efecto de la crítica
no leamos esto como simple historia
leámoslo como evidencia de una regla
```

---

### 7.5. `FAM-MD-Recuperacion`

**Función:** reactivar información previa para usarla en el tramo actual.

**Criterios obligatorios:**

```txt
1. Remite a una unidad anterior.
2. Reactiva memoria textual.
3. Usa esa memoria para sostener el avance.
```

**Señales típicas:**

```txt
recordemos
como vimos
volvamos a
esto nos devuelve a
como se dijo antes
```

---

### 7.6. `FAM-MD-Generalizacion`

**Función:** extraer una regla desde un caso, ejemplo o serie de casos.

**Criterios obligatorios:**

```txt
1. Sigue a una unidad particular.
2. Formula una regularidad.
3. Desplaza del caso a una tesis más general.
```

**Subtipos:**

```txt
generalizacion_desde_caso
generalizacion_desde_acumulacion
generalizacion_antropologica
generalizacion_practica
```

---

### 7.7. `FAM-MD-Jerarquizacion`

**Función:** marcar qué idea debe considerarse central.

**Criterios obligatorios:**

```txt
1. Eleva una idea sobre otras.
2. Redirige la atención hacia un nodo dominante.
3. Afecta la interpretación del tramo.
```

**Señales típicas:**

```txt
lo central es
lo importante aquí
la clave
lo que trato de mostrar
el punto fundamental
```

---

### 7.8. `FAM-MD-Reformulacion`

**Función:** volver a decir una idea para aclararla, traducirla o precisarla.

**Criterios obligatorios:**

```txt
1. Existe una unidad previa.
2. Existe una segunda formulación.
3. La segunda formulación cambia accesibilidad, precisión o énfasis.
```

**Señales típicas:**

```txt
es decir
en otras palabras
dicho de otro modo
más precisamente
esto significa que
```

---

### 7.9. `FAM-MD-Ejemplificacion`

**Función:** introducir una unidad particular para hacer visible una idea general.

**Criterios obligatorios:**

```txt
1. Hay una idea general o principio.
2. Se introduce un caso particular.
3. El caso concreta, prueba, ilustra o complica la idea.
```

**Subtipos:**

```txt
ejemplo_ancla
ejemplo_probatorio
ejemplo_contrastivo
ejemplo_emocional
ejemplo_modelo
```

---

### 7.10. `FAM-MD-Autorizacion`

**Función:** reforzar una afirmación mediante fuente, autoridad, experiencia o testimonio.

**Criterios obligatorios:**

```txt
1. Se introduce una fuente externa o figura reconocida.
2. Esa fuente respalda una idea o conducta.
3. El texto aumenta legitimidad mediante esa fuente.
```

**Subtipos:**

```txt
autoridad_cientifica
autoridad_historica
autoridad_moral
autoridad_experiencial
autoridad_testimonial
```

---

### 7.11. `FAM-MD-Convocatoria-del-Lector`

**Función:** involucrar directamente al lector en una operación cognitiva.

**Criterios obligatorios:**

```txt
1. El texto usa usted, nosotros, recordemos, imaginemos, consideremos o equivalentes.
2. El lector es llamado a pensar, recordar, imaginar, aplicar o compararse.
3. La distancia entre texto y lector disminuye.
```

**Subtipos:**

```txt
convocatoria_a_recordar
convocatoria_a_imaginar
convocatoria_a_autoaplicar
convocatoria_a_juzgar
convocatoria_a_suspender_juicio
```

---

### 7.12. `FAM-MD-Advertencia-Interpretativa`

**Función:** prevenir una lectura equivocada o una reacción no deseada.

**Criterios obligatorios:**

```txt
1. El texto anticipa una expectativa del lector.
2. Corrige, bloquea o desplaza esa expectativa.
3. Redirige la lectura hacia otro efecto.
```

---

### 7.13. `FAM-MD-Contraste-de-Lectura`

**Función:** presentar dos modos de actuar, pensar o interpretar.

**Criterios obligatorios:**

```txt
1. Hay dos alternativas.
2. Una se muestra como insuficiente, dañina o errónea.
3. La otra se presenta como preferible o transformadora.
```

---

### 7.14. `FAM-MD-Cierre-Parcial`

**Función:** clausurar un tramo sin cerrar la trayectoria completa.

**Criterios obligatorios:**

```txt
1. Recapitula o estabiliza un punto.
2. Permite pasar a otro tramo.
3. No agota la arquitectura global.
```

---

### 7.15. `FAM-MD-Proyeccion-Practica`

**Función:** transformar una idea en conducta futura.

**Criterios obligatorios:**

```txt
1. Usa una forma prospectiva: la próxima vez, cuando ocurra, si usted quiere.
2. Convierte comprensión en acción.
3. Orienta al lector hacia una práctica.
```

---

### 7.16. `FAM-MD-Regla-Final`

**Función:** condensar la trayectoria en una máxima operativa.

**Criterios obligatorios:**

```txt
1. Aparece al final o cerca del cierre.
2. Resume la enseñanza o regla central.
3. Tiene forma recordable.
4. Depende del recorrido previo.
```

---

### 7.17. `FAM-MD-Conduccion-Afectiva`

**Función:** guiar la reacción emocional del lector.

**Criterios obligatorios:**

```txt
1. Introduce una escena, ejemplo o formulación que modifica la disposición afectiva.
2. Esa disposición afecta la aceptación de la tesis.
3. La emoción cumple función estructural.
```

---

### 7.18. `FAM-MD-Autopresencia`

**Función:** hacer visible al autor como sujeto de experiencia, criterio o responsabilidad.

**Criterios obligatorios:**

```txt
1. El autor aparece como yo, nosotros, propongo, he visto, sostengo, recuerdo.
2. Esa presencia modifica credibilidad, cercanía o postura.
3. La voz autoral cumple una función dentro del recorrido.
```

---

### 7.19. `FAM-MD-Mitigacion`

**Función:** reducir fuerza, certeza o imposición.

**Criterios obligatorios:**

```txt
1. Aparece una formulación cautelosa.
2. La afirmación queda presentada como posibilidad, opinión o matiz.
3. La mitigación afecta la relación autor-lector o la fuerza argumentativa.
```

---

### 7.20. `FAM-MD-Refuerzo`

**Función:** aumentar fuerza, certeza o prominencia.

**Criterios obligatorios:**

```txt
1. Aparece una marca de énfasis o certeza.
2. La afirmación gana prioridad o fuerza.
3. El lector es orientado a tomarla como punto fuerte.
```

---

## 8. Tipos de metadiscurso

El módulo debe distinguir cinco tipos.

### 8.1. Metadiscurso explícito

Tiene marcas visibles.

```txt
“por ejemplo”
“recordemos”
“la moraleja es”
“en conclusión”
```

### 8.2. Metadiscurso estructural

No depende de una marca local, sino de un patrón organizativo.

```txt
acumulación de casos
alternancia de ejemplos
retorno circular
progresión de escala
inserción de pieza externa
```

### 8.3. Metadiscurso afectivo

Guía la emoción del lector.

```txt
culpa
vergüenza
compasión
sorpresa
indignación
ternura
identificación
```

### 8.4. Metadiscurso de autoridad

Importa legitimidad.

```txt
citas de autores
figuras históricas
estudios científicos
testimonios
experiencia personal
```

### 8.5. Metadiscurso performativo

El texto ejecuta la operación que quiere enseñar.

```txt
no sólo dice “comprenda”; hace que el lector experimente comprensión
no sólo dice “recuerde”; hace que active una memoria textual
no sólo dice “no critique”; muestra emocionalmente el daño de criticar
```

---

## 9. Procedimiento de análisis

### Paso 1. Lectura global

Leer el texto completo sin segmentar prematuramente. Identificar la trayectoria general.

### Paso 2. Separación preliminar entre contenido y conducción

Para cada tramo preguntar:

```txt
¿Este fragmento aporta contenido temático?
¿Guía cómo leer el contenido?
¿Hace ambas cosas?
```

### Paso 3. Detección de marcas explícitas

Buscar:

```txt
conectores
marcadores de marco
apelaciones al lector
frases de jerarquización
frases de reformulación
preguntas retóricas
introducciones de ejemplo
citas de autoridad
cierres y recapitulaciones
```

### Paso 4. Detección de operaciones implícitas

Buscar:

```txt
acumulaciones
cambios de escala
cambios de tono
inserciones narrativas
pasos de caso a regla
pasos de teoría a práctica
modelos positivos y negativos
```

### Paso 5. Construcción de OMD

Cada operación detectada se convierte en una ficha `OMD`.

### Paso 6. Clasificación por familia

Cada OMD se asigna a una familia funcional.

### Paso 7. Determinación de alcance

Determinar si el alcance es micro, meso, macro o global.

### Paso 8. Vinculación con arquitectura macro

Indicar qué hace la operación en la evolución del texto.

### Paso 9. Reconstrucción de conducción lectora

Armar la cadena:

```txt
estado del lector antes
  → operación metadiscursiva
    → estado del lector después
```

### Paso 10. Validación

Verificar que no se etiqueten conectores sin función, que cada operación tenga alcance y que cada operación relevante contribuya a la arquitectura macro.

---

## 10. Salida esperada del módulo

```yaml
salida_analizador_de_metadiscurso:
  perfil_global:
    tipo_de_conduccion:
    densidad_metadiscursiva:
    funcion_global:
    relacion_con_arquitectura_macro:

  operaciones_metadiscursivas:
    - omd_id:
      fragmento:
      familia:
      subfamilia:
      tipo_de_metadiscurso:
      operacion_cognitiva:
      alcance:
      unidad_afectada:
      responsabilidad_macro:
      efecto_en_el_lector:
      evidencia_textual:
      notas_de_ambiguedad:

  mapa_de_conduccion:
    estado_lector_inicial:
    operaciones_de_guia:
    estado_lector_final:

  grafo_metadiscursivo:
    nodos:
      - id:
        funcion:
        tramo:
    aristas:
      - from:
        to:
        tipo:
        funcion:

  contribucion_a_otros_modulos:
    segmentador_funcional:
      limites_sugeridos:
    constructor_de_trayectoria_narrativa:
      cambios_de_estado_confirmados:
    analizador_de_relaciones_retóricas:
      relaciones_sugeridas:
    modelador_de_situacion_cognitiva:
      actualizaciones_del_modelo_mental:
    integrador_ACCD:
      familias_funcionales_detectadas:

  validacion:
    marcas_con_funcion_clara:
    marcas_ambiguas:
    zonas_sin_metadiscurso_explicito:
    sobreinterpretaciones_posibles:
```

---

## 11. Relación con otros módulos del MAANC

### Con `segmentador_funcional`

El metadiscurso sugiere límites.

```txt
“ahora bien” → posible cambio de sección funcional
“hasta aquí” → posible cierre parcial
“tomemos por ejemplo” → apertura de unidad ejemplificativa
```

### Con `constructor_de_trayectoria_narrativa`

El metadiscurso muestra cómo el texto cambia de estado.

```txt
caso → moraleja → patrón → regla
```

### Con `analizador_de_relaciones_retóricas`

Las marcas metadiscursivas sugieren relaciones.

```txt
por ejemplo → ejemplificación
sin embargo → contraste
por tanto → consecuencia
es decir → reformulación
```

### Con `modelador_de_situacion_cognitiva`

El metadiscurso muestra cómo se actualiza la comprensión del lector.

```txt
“esto significa que” → actualización conceptual
“recordemos” → recuperación de memoria textual
“la próxima vez” → proyección a conducta futura
```

### Con `integrador_ACCD`

El metadiscurso se traduce a familias funcionales y responsabilidades de conducción.

---

## 12. Validadores especializados

### Validador 1. No etiquetar sin función

No basta con identificar la marca. Debe explicarse qué hace.

### Validador 2. No confundir marca con operación

La misma marca puede cumplir funciones distintas.

### Validador 3. Determinar alcance

Toda operación debe tener alcance micro, meso, macro o global.

### Validador 4. Vincular con arquitectura macro

Cada operación relevante debe explicar cómo contribuye a la evolución del texto.

### Validador 5. Distinguir conducción explícita e implícita

La acumulación de ejemplos, la inserción de una historia o el cambio de escala pueden funcionar metadiscursivamente aunque no haya conectores obvios.

### Validador 6. Identificar efecto en el lector

Cada operación debe responder:

```txt
¿Qué hace que el lector piense, recuerde, espere, acepte, dude, se identifique o aplique?
```

### Validador 7. Evitar sobreinterpretación

No todo conector local tiene peso macro. El módulo debe distinguir marcas de baja relevancia y operaciones estructuralmente decisivas.

---

## 13. Errores frecuentes

### Error 1. Convertir el análisis en lista de conectores

Incorrecto:

```txt
por ejemplo = ejemplo
sin embargo = contraste
```

Correcto:

```yaml
expresion: "por ejemplo"
funcion: abrir una unidad ejemplificativa que baja una tesis abstracta a un caso concreto
alcance: meso
responsabilidad_macro: sostener una generalización mediante evidencia narrativa
```

### Error 2. No determinar alcance

Una marca puede actuar localmente o reorganizar todo un tramo. Sin alcance, el análisis pierde precisión.

### Error 3. No vincular con arquitectura macro

El metadiscurso debe explicar la evolución del texto, no quedar como inventario separado.

### Error 4. Confundir contenido con conducción

Una frase puede tener contenido y metadiscurso al mismo tiempo. Hay que distinguir ambas funciones.

### Error 5. Ignorar metadiscurso estructural

A veces el texto guía por acumulación, contraste o inserción de escenas, aunque no use marcadores explícitos.

---

## 14. Criterios de calidad del análisis

### Nivel bajo

```txt
lista conectores y los clasifica superficialmente
```

### Nivel medio

```txt
identifica marcas y funciones locales
```

### Nivel alto

```txt
vincula operaciones metadiscursivas con secciones, subsecciones y arquitectura macro
```

### Nivel experto

```txt
reconstruye la conducción lectora global, identifica efectos sobre el receptor,
produce grafo metadiscursivo, valida arquitectura macro y distingue operaciones
explícitas, implícitas, afectivas, autoritativas y performativas.
```

---

## 15. Definición final

```txt
El analizador_de_metadiscurso es el módulo del MAANC que reconstruye la capa
de conducción lectora de una manifestación.

Su tarea no es listar conectores, sino identificar operaciones metadiscursivas:
encuadres, transiciones, generalizaciones, convocatorias, reformulaciones,
autorizaciones, advertencias, cierres y proyecciones prácticas.

Cada operación debe analizarse por su marca, alcance, familia funcional,
responsabilidad dentro de la arquitectura macro y efecto sobre el lector.
```

---

## 16. Fórmula operativa

```txt
texto
  → marcas explícitas + operaciones implícitas
    → operaciones_metadiscursivas
      → familias_funcionales
        → mapa_de_conduccion_lectora
          → validación_de_arquitectura_macro
```
