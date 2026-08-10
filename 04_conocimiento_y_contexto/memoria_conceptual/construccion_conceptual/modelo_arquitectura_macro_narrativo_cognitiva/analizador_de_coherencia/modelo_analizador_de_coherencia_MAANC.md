# Modelo especializado: `analizador_de_coherencia`

**Sistema:** MAANC / Arquitectura Macro Narrativo-Cognitiva  
**Módulo:** 6. `analizador_de_coherencia`  
**Función:** reconstruir las relaciones de coherencia que conectan las unidades funcionales de una manifestación.  
**Uso previsto:** análisis de textos existentes y soporte para generación de manifestaciones dentro de la ACCD.  
**Estado:** modelo reusable, separado de cualquier ejemplo aplicado.

---

# 0. Propósito del documento

Este documento define el modelo especializado del módulo `analizador_de_coherencia`. Está diseñado para ser utilizado como herramienta independiente dentro del MAANC, pero también como componente compatible con la ACCD.

El documento no analiza ningún texto particular. Su objetivo es describir el modelo en detalle para que pueda aplicarse posteriormente a capítulos, ensayos, libros, transcripciones, guiones, carousels, videos cortos, clases, discursos o cualquier otra manifestación textual o multimodal.

---

# 1. Definición general

El `analizador_de_coherencia` es el módulo encargado de reconstruir el sistema de relaciones explícitas e implícitas que conecta las unidades funcionales de una manifestación.

Su tarea no es resumir el contenido, sino explicar **cómo una unidad se vuelve interpretable en relación con otra**.

En forma compacta:

```txt
analizador_de_coherencia = constructor de aristas interpretativas
```

En forma desarrollada:

```txt
analizador_de_coherencia =
módulo que detecta, clasifica, justifica y valida las relaciones cognitivas,
retóricas, narrativas, inferenciales, afectivas y organizativas que permiten
que las unidades de una manifestación formen una trayectoria continua de sentido.
```

Si el `segmentador_funcional` detecta los nodos de un texto, el `analizador_de_coherencia` detecta las aristas.

```txt
segmentador_funcional
  → identifica secciones, subsecciones y unidades locales

analizador_de_coherencia
  → identifica cómo esas unidades se conectan funcionalmente
```

---

# 2. Idea nuclear

La idea nuclear del módulo es:

```txt
Un texto no es coherente porque sus partes estén juntas.
Es coherente porque entre sus partes existen relaciones interpretables.
```

Dos unidades pueden aparecer una después de otra sin formar una relación fuerte. El módulo debe distinguir entre mera sucesión y conexión funcional.

```txt
sucesión = una unidad aparece después de otra
coherencia = una unidad se vuelve comprensible por su relación con otra
```

La coherencia puede estar marcada explícitamente mediante conectores, pero también puede ser inferida por el receptor.

```txt
coherencia explícita:
  marcada por expresiones como "por eso", "sin embargo", "por ejemplo".

coherencia implícita:
  reconstruida por inferencia aunque no haya marcador visible.
```

El módulo debe detectar ambas.

---

# 3. Posición dentro del MAANC

El módulo ocupa una posición intermedia dentro del modelo unificado.

```txt
texto
  → segmentador_funcional
    → extractor_de_macroestructura
      → analizador_de_coherencia
        → constructor_de_trayectoria_narrativa
          → integrador_ACCD
```

Su función es transformar una segmentación funcional en un grafo interpretativo.

Antes del módulo:

```yaml
secciones:
  - SEC_01
  - SEC_02
  - SEC_03
```

Después del módulo:

```yaml
secciones:
  - SEC_01
  - SEC_02
  - SEC_03

relaciones:
  - SEC_01 -> SEC_02: elaboracion
  - SEC_02 -> SEC_03: inferencia
```

El módulo también puede retroalimentar etapas anteriores. Si una relación parece débil, puede indicar que la segmentación fue incorrecta o que falta un agrupamiento intermedio.

---

# 4. Diferencia entre cohesión y coherencia

## 4.1 Cohesión

La cohesión es la conexión visible en la superficie del texto.

Incluye marcadores como:

```txt
por eso
sin embargo
además
en cambio
por ejemplo
como resultado
primero
después
finalmente
esto significa que
```

La cohesión ayuda a detectar relaciones, pero no las agota.

## 4.2 Coherencia

La coherencia es la relación interpretativa que permite integrar dos o más unidades dentro de una trayectoria de sentido.

Puede existir sin marcador explícito.

Ejemplo abstracto:

```txt
Unidad A: se plantea un problema.
Unidad B: se introduce un caso concreto.
```

Aunque no aparezca el conector “por ejemplo”, el módulo puede inferir que B ejemplifica A.

## 4.3 Regla operativa

```txt
El módulo debe usar la cohesión como pista,
pero debe reconstruir la coherencia como relación funcional.
```

---

# 5. Objeto de análisis: la relación de coherencia

La unidad principal del módulo es la `relacion_de_coherencia`.

```yaml
relacion_de_coherencia:
  relacion_id:
  origen:
  destino:
  nivel:
  tipo_relacional:
  subtipo_relacional:
  direccion:
  polaridad:
  fuente_de_coherencia:
  grado_de_explicitud:
  marcador_textual:
  inferencia_requerida:
  responsabilidad_cognitiva:
  funcion_en_la_arquitectura_macro:
  efecto_sobre_el_receptor:
  evidencia_textual:
  confianza:
  ambiguedades:
```

## 5.1 `relacion_id`

Identificador estable de la relación.

Ejemplo:

```yaml
relacion_id: REL_014
```

## 5.2 `origen`

Unidad desde la cual parte la relación.

Puede ser:

```txt
sección
subsección
párrafo
ejemplo
mini-historia
analogía
inferencia
pregunta
cita
regla
```

## 5.3 `destino`

Unidad que recibe, desarrolla, corrige, explica, ejemplifica, deriva, sintetiza o reencuadra el origen.

## 5.4 `nivel`

Indica el nivel estructural de la relación.

```txt
micro:
  entre frases, oraciones o párrafos locales.

meso:
  entre subsecciones o bloques funcionales.

macro:
  entre secciones principales.

transversal:
  entre unidades no contiguas.

global:
  entre una unidad y la tesis o trayectoria global del texto.
```

## 5.5 `tipo_relacional`

Familia general de la relación.

Ejemplos:

```txt
instalacion
ejemplificativa
acumulativa
generalizadora
causal
contrastiva
inferencial
analogica
organizativa
autoridad_testimonial
reencuadradora
emocional
normativa
metadiscursiva
```

## 5.6 `subtipo_relacional`

Precisión local del tipo.

Ejemplo:

```yaml
tipo_relacional: ejemplificativa
subtipo_relacional: caso_extremo
```

O:

```yaml
tipo_relacional: causal
subtipo_relacional: mecanismo_psicologico
```

## 5.7 `direccion`

Indica cómo se orienta la relación.

```txt
A → B
B → A
A ↔ B
A + B → C
A, B, C → generalización
```

Algunas relaciones son simétricas, como contraste. Otras son asimétricas, como causa, ejemplo o inferencia.

## 5.8 `polaridad`

Indica si la relación continúa, apoya, corrige o tensiona.

```txt
positiva:
  B continúa, desarrolla, apoya o amplía A.

negativa:
  B contrasta, corrige, limita, objeta o invierte A.

mixta:
  B continúa parcialmente A, pero introduce una modificación o tensión.
```

## 5.9 `fuente_de_coherencia`

Indica de dónde surge la relación.

```txt
semantica:
  la relación está en el contenido representado.

pragmatica:
  la relación depende del propósito comunicativo.

epistemica:
  la relación depende de inferencia, justificación o conocimiento.

emocional:
  la relación depende de continuidad afectiva.

metadiscursiva:
  la relación depende de guía explícita del propio discurso.

narrativa:
  la relación depende de avance de escena, episodio o acción.
```

## 5.10 `grado_de_explicitud`

```txt
explicita:
  hay conector o señal visible.

implicita:
  el receptor debe reconstruir la relación.

mixta:
  hay pistas, pero la relación necesita inferencia.
```

## 5.11 `marcador_textual`

Registra conectores o marcas visibles.

Ejemplos:

```txt
por eso
sin embargo
por ejemplo
en consecuencia
esto muestra que
ahora bien
```

Si no hay marcador:

```yaml
marcador_textual: null
```

## 5.12 `inferencia_requerida`

Explica qué debe inferir el receptor para conectar origen y destino.

```yaml
inferencia_requerida: >
  La segunda unidad debe leerse como respuesta al problema abierto por la primera.
```

## 5.13 `responsabilidad_cognitiva`

Describe qué trabajo cognitivo cumple la relación.

Ejemplos:

```txt
abrir problema
concretar abstracción
producir contraste
hacer transferible una regla
elevar caso a principio
desactivar objeción
activar empatía
introducir criterio práctico
cerrar normativamente
```

## 5.14 `funcion_en_la_arquitectura_macro`

Describe cómo la relación contribuye a la trayectoria global.

Este campo es obligatorio.

No basta con decir:

```txt
B ejemplifica A.
```

Debe decirse:

```txt
B ejemplifica A para transformar una tesis abstracta en una escena reconocible
que permite al receptor aceptar el principio posterior.
```

## 5.15 `efecto_sobre_el_receptor`

Describe qué cambio produce la relación en el estado interpretativo del receptor.

Ejemplos:

```txt
pasar de duda a comprensión
pasar de abstracción a reconocimiento concreto
pasar de resistencia a aceptación parcial
pasar de observador externo a implicación personal
pasar de diagnóstico a norma práctica
```

## 5.16 `evidencia_textual`

Incluye fragmentos breves o paráfrasis que justifican la relación.

## 5.17 `confianza`

```txt
alta:
  la relación está clara y apoyada por evidencia textual.

media:
  la relación es plausible, pero admite alternativas.

baja:
  la relación es débil, inferida o altamente ambigua.
```

## 5.18 `ambiguedades`

Registra relaciones alternativas posibles.

```yaml
ambiguedades:
  - tipo_alternativo: causal
    razon: el texto permite leer la transición como causa o como inferencia.
```

---

# 6. Taxonomía especializada de relaciones

El módulo usa una taxonomía abierta pero controlada. Los tipos no son etiquetas decorativas: cada uno representa una operación cognitiva.

## 6.1 Relación de instalación

Introduce el estado inicial de la arquitectura macro.

```txt
función:
  abrir campo de atención;
  instalar problema;
  preparar tesis;
  crear expectativa inicial.
```

Subtipos:

```txt
escena_de_apertura
pregunta_inicial
afirmacion_provocadora
marco_contextual
problema_inicial
tension_inicial
```

## 6.2 Relación ejemplificativa

Una unidad concreta o materializa otra.

```txt
función:
  hacer visible una idea;
  convertir abstracción en caso;
  aportar experiencia reconocible.
```

Subtipos:

```txt
ejemplo_concreto
caso_ancla
caso_extremo
mini_historia
escena_ilustrativa
contraejemplo
ejemplo_negativo
ejemplo_positivo
demostracion_historica
```

## 6.3 Relación acumulativa

Varias unidades se suman para confirmar, ampliar o intensificar un patrón.

```txt
función:
  convertir caso aislado en patrón;
  producir peso argumentativo por repetición;
  expandir dominio de aplicación.
```

Subtipos:

```txt
acumulacion_confirmatoria
acumulacion_por_variacion_de_casos
acumulacion_de_evidencia
acumulacion_intensificadora
```

## 6.4 Relación generalizadora

Una o más unidades particulares se elevan a principio general.

```txt
función:
  pasar de caso a regla;
  elevar ejemplos a tesis;
  convertir serie empírica en formulación abstracta.
```

Subtipos:

```txt
generalizacion_inductiva
generalizacion_antropologica
generalizacion_metodologica
generalizacion_normativa
```

## 6.5 Relación de puente de escala

Conecta dominios de diferente escala.

```txt
función:
  transferir una tesis desde un caso extremo a la vida ordinaria;
  pasar de individuo a sociedad;
  pasar de escena local a principio general;
  pasar de historia particular a regla aplicable.
```

Subtipos:

```txt
extremo_a_cotidiano
individual_a_general
local_a_global
historico_a_actual
abstracto_a_practico
```

## 6.6 Relación causal

Una unidad explica por qué ocurre otra o qué consecuencia produce.

```txt
función:
  introducir mecanismo;
  explicar consecuencia;
  establecer condición;
  justificar resultado.
```

Subtipos:

```txt
causa_directa
consecuencia
mecanismo_psicologico
condicion
medio_fin
motivacion
resultado
```

## 6.7 Relación contrastiva

Una unidad se opone, corrige, limita o diferencia respecto a otra.

```txt
función:
  producir tensión;
  corregir expectativa;
  distinguir alternativas;
  mostrar cambio de método o interpretación.
```

Subtipos:

```txt
correccion
oposicion
inversion
concesion
contraste_moral
contraste_metodologico
sustitucion_de_metodo
modelo_contrastivo
```

## 6.8 Relación inferencial

Una unidad deriva una conclusión de otra.

```txt
función:
  extraer consecuencia conceptual;
  convertir evidencia en tesis;
  producir criterio;
  formular conclusión.
```

Subtipos:

```txt
conclusion
deduccion
induccion
abduccion
criterio_derivado
implicacion
```

## 6.9 Relación analógica

Una unidad permite comprender otra mediante transferencia estructural.

```txt
función:
  transferir comprensión desde un dominio fuente;
  construir equivalencia parcial;
  hacer visible una estructura abstracta.
```

Subtipos:

```txt
analogia_estructural
metafora_explicativa
comparacion_iluminadora
modelo_fuente_destino
transferencia_parcial
```

## 6.10 Relación de autoridad testimonial

Una unidad respalda otra mediante una autoridad, testimonio, experimento, institución, figura histórica o fuente reconocida.

```txt
función:
  legitimar tesis;
  aportar respaldo externo;
  desplazar la afirmación desde opinión del autor hacia evidencia autorizada.
```

Subtipos:

```txt
respaldo_cientifico
respaldo_historico
testimonio_de_autoridad
cita_autorizada
caso_institucional
```

## 6.11 Relación reencuadradora

Una unidad cambia el marco de interpretación de otra.

```txt
función:
  desplazar el centro del problema;
  reinterpretar el sentido de lo anterior;
  mover responsabilidad;
  convertir diagnóstico en práctica.
```

Subtipos:

```txt
reencuadre_conceptual
reencuadre_moral
reencuadre_metodologico
desplazamiento_del_otro_al_yo
desplazamiento_de_caso_a_principio
```

## 6.12 Relación emocional

Una unidad intensifica, desplaza o transforma la disposición afectiva del receptor.

```txt
función:
  hacer sentir una tesis;
  producir empatía;
  activar culpa, ternura, indignación, admiración o remordimiento;
  convertir argumento en experiencia afectiva.
```

Subtipos:

```txt
intensificacion_afectiva
interiorizacion_emocional
escena_sentimental
activacion_de_empatia
activacion_de_remordimiento
```

## 6.13 Relación normativa

Una unidad deriva una regla, principio o prescripción.

```txt
función:
  convertir recorrido anterior en norma;
  condensar aprendizaje;
  fijar conducta esperada;
  cerrar con principio práctico.
```

Subtipos:

```txt
derivacion_normativa
regla_final
principio_practico
prescripcion_moral
criterio_de_accion
```

## 6.14 Relación metadiscursiva

Una unidad guía explícitamente la lectura de otras.

```txt
función:
  anunciar estructura;
  orientar al lector;
  recapitular;
  abrir una nueva fase;
  cerrar una fase.
```

Subtipos:

```txt
anuncio_de_estructura
transicion_explicitada
recapitulacion
cierre_parcial
apertura_de_fase
```

---

# 7. Cadenas de coherencia

Una innovación importante del módulo es que no produce solamente relaciones aisladas. También detecta **cadenas de coherencia**.

Una cadena es una serie de relaciones que sostienen una misma función macro.

```yaml
cadena_de_coherencia:
  chain_id:
  nombre:
  unidades:
  relacion_dominante:
  funcion_global:
  efecto_en_la_arquitectura_macro:
```

Ejemplos de tipos de cadena:

```txt
cadena_de_ejemplificacion
cadena_de_autojustificacion
cadena_de_causalidad
cadena_de_contraste
cadena_de_modelos_positivos
cadena_de_intensificacion_emocional
cadena_de_derivacion_normativa
```

Las cadenas permiten identificar que varias unidades no son independientes, sino que actúan juntas para producir un efecto mayor.

---

# 8. Agrupamientos de coherencia

Un agrupamiento reúne unidades que forman un bloque funcional.

```yaml
agrupamiento_de_coherencia:
  group_id:
  unidades:
  criterio_de_agrupamiento:
  relacion_dominante:
  funcion_macro:
  unidad_resultante_sugerida:
```

Ejemplo abstracto:

```yaml
agrupamiento_de_coherencia:
  group_id: GRP_01
  unidades: [SEC_02, SEC_03, SEC_04]
  criterio_de_agrupamiento: acumulacion_de_ejemplos
  relacion_dominante: ejemplificativa
  funcion_macro: sostener tesis inicial por variación de casos
```

El agrupamiento permite evitar que el análisis quede demasiado fragmentado.

---

# 9. Rupturas, saltos y debilidades de coherencia

El módulo también debe detectar problemas.

```yaml
ruptura_de_coherencia:
  ruptura_id:
  origen:
  destino:
  tipo_de_problema:
  descripcion:
  posible_reparacion:
  confianza:
```

Tipos de problema:

```txt
salto_tematico
falta_de_puente
relacion_ambigua
cambio_de_escala_no_marcado
contraste_no_resuelto
ejemplo_no_integrado
conclusion_no_derivada
recapitulacion_insuficiente
```

En análisis textual, esto permite evaluar si la arquitectura macro está bien construida o si hay discontinuidades.

---

# 10. Procedimiento operativo

El módulo debe trabajar en etapas.

## Paso 1. Recibir unidades funcionales

Recibe unidades del segmentador funcional o las propone si no existen.

## Paso 2. Identificar pares y conjuntos conectables

No analiza sólo unidades consecutivas. También detecta conexiones transversales.

```txt
SEC_01 → SEC_02
SEC_02 → SEC_03
SEC_01 → SEC_05
SEC_02 + SEC_03 + SEC_04 → SEC_06
```

## Paso 3. Detectar marcadores explícitos

Busca conectores, frases guía, repeticiones, anáforas, recapitulaciones y señales metadiscursivas.

## Paso 4. Inferir relaciones implícitas

Pregunta:

```txt
¿Qué debe inferir el receptor para que esta transición tenga sentido?
```

## Paso 5. Clasificar la relación

Asigna tipo, subtipo, fuente, polaridad, dirección, nivel y explicitud.

## Paso 6. Determinar función macro

Explica qué papel cumple la relación dentro de la arquitectura macro.

## Paso 7. Construir cadenas

Agrupa relaciones repetidas o complementarias que sostienen una misma función global.

## Paso 8. Construir agrupamientos

Propone bloques de unidades conectadas por una función común.

## Paso 9. Detectar rupturas

Registra saltos, ambigüedades o conexiones débiles.

## Paso 10. Emitir salida estructurada

Produce grafo de coherencia, cadenas, agrupamientos, rupturas y validación.

---

# 11. Salida formal del módulo

```yaml
analisis_de_coherencia:
  texto:
    titulo:
    unidad_analizada:

  tesis_de_coherencia_global:
    formulacion:

  relaciones_de_coherencia:
    - relacion_id:
      from:
      to:
      nivel:
      tipo_relacional:
      subtipo_relacional:
      direccion:
      polaridad:
      fuente_de_coherencia:
      grado_de_explicitud:
      marcador_textual:
      inferencia_requerida:
      responsabilidad_cognitiva:
      funcion_en_la_arquitectura_macro:
      efecto_sobre_el_receptor:
      evidencia_textual:
      confianza:
      ambiguedades:

  cadenas_de_coherencia:
    - chain_id:
      nombre:
      unidades:
      relacion_dominante:
      funcion_global:
      efecto_en_la_arquitectura_macro:

  agrupamientos:
    - group_id:
      unidades:
      criterio:
      relacion_dominante:
      funcion_macro:

  rupturas_o_saltos:
    - ruptura_id:
      origen:
      destino:
      tipo_de_problema:
      descripcion:
      posible_reparacion:
      confianza:

  validacion:
    continuidad_global:
    cobertura_de_unidades:
    relaciones_transversales_detectadas:
    ambiguedades_principales:
    calidad_del_grafo:
```

---

# 12. Criterios de validación

## 12.1 Cobertura

El análisis debe cubrir todas las unidades funcionales relevantes.

```txt
ninguna sección macro debe quedar desconectada sin justificación
```

## 12.2 Trazabilidad

Cada relación debe poder justificarse mediante evidencia textual, paráfrasis o inferencia explícita.

## 12.3 Nivel correcto

El módulo debe distinguir relaciones micro, meso, macro, transversales y globales.

## 12.4 No reducción a conectores

No basta con registrar conectores superficiales. Debe reconstruirse la relación interpretativa.

## 12.5 Función macro obligatoria

Toda relación importante debe explicar su función dentro de la arquitectura macro.

## 12.6 Ambigüedad registrada

Si una relación admite más de una lectura, debe registrarse.

## 12.7 Cadenas detectadas

Cuando varias relaciones forman una serie funcional, deben agruparse en una cadena.

## 12.8 Rupturas detectadas

Si la coherencia es débil, el módulo debe indicarlo.

---

# 13. Errores frecuentes

## Error 1. Confundir sucesión con coherencia

Incorrecto:

```txt
SEC_02 sigue a SEC_01, por tanto están conectadas.
```

Correcto:

```txt
SEC_02 sigue a SEC_01, pero hay que determinar qué relación permite esa transición.
```

## Error 2. Depender sólo de conectores

Incorrecto:

```txt
No hay “porque”, entonces no hay causalidad.
```

Correcto:

```txt
Puede haber causalidad implícita si el receptor debe inferir una relación causa-consecuencia.
```

## Error 3. Clasificar sin función macro

Débil:

```yaml
tipo_relacional: ejemplificativa
```

Fuerte:

```yaml
tipo_relacional: ejemplificativa
funcion_en_la_arquitectura_macro: >
  Concretar una tesis abstracta para que el receptor pueda reconocerla en una escena local.
```

## Error 4. No distinguir niveles

Una relación puede ser localmente ejemplificativa pero globalmente argumentativa.

```txt
SUB_02 ejemplifica SUB_01.
Pero SEC_02 en conjunto funciona como evidencia para la tesis global.
```

## Error 5. No detectar cadenas

Si el texto ofrece cinco ejemplos con la misma función, no deben tratarse como cinco relaciones aisladas. Deben formar una cadena.

## Error 6. No registrar ambigüedad

Cuando la relación pueda ser causal o inferencial, debe declararse la ambigüedad.

---

# 14. Relación con otros módulos del MAANC

## 14.1 Con `segmentador_funcional`

El segmentador entrega nodos; el analizador de coherencia entrega aristas.

## 14.2 Con `extractor_de_macroestructura`

La macroestructura semántica permite saber qué relaciones sostienen macroproposiciones globales.

## 14.3 Con `constructor_de_trayectoria_narrativa`

Las relaciones de coherencia permiten construir la trayectoria narrativa-cognitiva.

## 14.4 Con `analizador_de_relaciones_retóricas`

El análisis retórico puede refinar relaciones como evidencia, elaboración, contraste, motivación o preparación.

## 14.5 Con `modelador_de_situacion_cognitiva`

Las relaciones explican cómo se actualiza el modelo mental del receptor.

## 14.6 Con `integrador_ACCD`

Las relaciones se convierten en aristas dentro del grafo narrativo-cognitivo de la arquitectura macro.

---

# 15. Definición final

```txt
analizador_de_coherencia =
módulo del MAANC que reconstruye el sistema de relaciones explícitas e implícitas
entre unidades funcionales, detectando conexiones locales, meso, macro y transversales,
para explicar cómo una manifestación produce continuidad, transformación cognitiva
y arquitectura macro auditable.
```

Versión compacta:

```txt
analizador_de_coherencia = constructor de aristas narrativo-cognitivas
```

---

# 16. Fórmula operativa

```txt
unidades funcionales
  → relaciones de coherencia
    → cadenas de coherencia
      → agrupamientos funcionales
        → grafo narrativo-cognitivo
          → arquitectura macro auditable
```
