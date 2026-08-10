# Planteamiento general de Codominio y Manifestación Codominial — versión ajustada a Instancias Regionales

## 0. Propósito del documento

Este documento reformula el planteamiento general de **Codominio** y **Manifestación Codominial** para alinearlo con la arquitectura actual del sistema de transferencia estructural.

La formulación anterior describía el sistema mediante la cadena:

```txt
modelo_base
  → instancia_contextual
    → adaptador / protocolo
      → codominio
        → manifestacion_codominial
```

Esa formulación sigue siendo útil como antecedente, pero debe actualizarse porque el `modelo_base` local ya no ocupa el lugar inmediato de origen para la instancia contextual.

La cadena actual debe entenderse así:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial ∈ codominio
```

La corrección principal es:

> El Codominio sigue perteneciendo al lado de la salida, pero la entrada que llega al Adaptador ya no se entiende como una instancia contextual construida directamente sobre un modelo base local, sino como una instancia contextual construida dentro del espacio habilitado por una instancia regional.

Este documento debe poder usarse de forma general en `definiciones/`, sin quedar limitado a video corto, TikTok, carrusel, newsletter, clase o cualquier otro caso particular.

---

## 1. Definición breve de Codominio

Un **Codominio** es el espacio estructural de manifestaciones posibles hacia el cual proyecta un Adaptador.

No es una manifestación individual.

No es un ejemplo.

No es una instancia contextual.

No es la instancia regional.

No es el contenido temático.

No es el protocolo.

Es el espacio formal de salidas válidas.

Dicho de forma compacta:

```txt
Codominio = familia estructural de salidas válidas
```

O de manera operativa:

```txt
adaptador_codominio_x(instancia_contextual)
  → manifestacion_codominial_x ∈ codominio_x
```

El Codominio define qué forma debe tener una salida para ser considerada válida dentro de una familia de manifestaciones.

---

## 2. Definición breve de Manifestación Codominial

Una **Manifestación Codominial** es una salida concreta producida por un Adaptador a partir de una Instancia Contextual y perteneciente a un Codominio específico.

Dicho de forma compacta:

```txt
Manifestación Codominial = salida concreta perteneciente a un Codominio
```

O de manera más completa:

```txt
manifestacion_codominial_x:
  salida concreta
  producida por adaptador_x
  desde instancia_contextual_y
  perteneciente a codominio_x
```

La Manifestación Codominial no es el Codominio completo. Es una realización particular dentro de ese espacio.

---

## 3. Cambio conceptual respecto de la formulación anterior

La formulación anterior decía:

```txt
modelo_base
  → instancia_contextual
    → adaptador
      → manifestacion_codominial ∈ codominio
```

La formulación actual debe decir:

```txt
grafo_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador
        → manifestacion_codominial ∈ codominio
```

El cambio no está en la definición básica de Codominio.

El cambio está en la procedencia de la entrada que el Adaptador proyecta.

Antes:

```txt
la instancia_contextual seleccionaba valores dentro de un modelo_base local
```

Ahora:

```txt
la instancia_contextual selecciona valores dentro del espacio habilitado por una instancia_regional
```

Por tanto, el Codominio sigue siendo el espacio formal de salida, pero la trazabilidad completa de una Manifestación Codominial debe incluir la Instancia Regional que habilitó la Instancia Contextual de origen.

---

## 4. Lugar del Codominio dentro del sistema actualizado

El sistema actualizado puede representarse así:

```txt
lado_de_habilitacion:
  modelo_base_de_regiones
  grafo_de_regiones
  instancia_regional

lado_de_configuracion:
  instancia_contextual

lado_de_proyeccion:
  adaptador / protocolo

lado_de_salida:
  codominio
  manifestacion_codominial
```

Cada componente cumple una función distinta:

```txt
modelo_base_de_regiones:
  organiza el espacio general de regiones posibles

grafo_de_regiones:
  contiene dimensiones, campos, valores y relaciones ya materializados

instancia_regional:
  selecciona una región operable para una realización

instancia_contextual:
  selecciona valores concretos dentro de esa región

adaptador / protocolo:
  proyecta la configuración contextual hacia una salida

codominio:
  define el espacio estructural de salidas válidas

manifestacion_codominial:
  salida concreta perteneciente a ese espacio
```

El Codominio no organiza la entrada.

El Codominio organiza la validez formal de la salida.

---

## 5. Fórmula general actualizada

La relación completa puede condensarse así:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional_r
      → instancia_contextual_c
        → adaptador_codominio_x
          → manifestacion_codominial_x ∈ codominio_x
```

Donde:

```txt
instancia_regional_r:
  habilita el espacio de selección

instancia_contextual_c:
  selecciona valores concretos dentro de ese espacio

adaptador_codominio_x:
  transforma esa configuración hacia una familia de salida

codominio_x:
  define el espacio de salidas válidas

manifestacion_codominial_x:
  salida concreta generada dentro de ese espacio
```

La Manifestación Codominial queda así conectada, de manera indirecta, con el sistema mayor:

```txt
grafo_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador
        → manifestacion_codominial
```

---

## 6. Distinción entre Codominio, especificación codominial y Manifestación Codominial

Para evitar confusiones, conviene distinguir tres niveles.

---

### 6.1. Codominio

El **Codominio** es la familia estructural de salidas posibles.

Ejemplo:

```txt
codominio_video_corto
codominio_carrusel
codominio_newsletter
codominio_clase
codominio_landing
codominio_hilo
```

Un Codominio define el espacio completo de salidas válidas que un Adaptador puede producir.

---

### 6.2. Especificación codominial

La **especificación codominial** es el documento, esquema o contrato que describe la forma del Codominio.

Puede aparecer bajo nombres como:

```txt
salida_esperada
modelo_de_salida
estructura_de_salida
contrato_de_salida
plantilla_codominial
especificacion_codominial
```

La especificación codominial no es todavía una salida concreta.

Su función es declarar:

- qué partes debe tener una salida válida;
- qué unidades internas la componen;
- qué capas puede o debe contener;
- qué relaciones internas debe respetar;
- qué campos son obligatorios u opcionales;
- qué criterios determinan pertenencia;
- cómo se evalúa si una manifestación pertenece al codominio.

---

### 6.3. Manifestación Codominial

La **Manifestación Codominial** es una salida concreta que realiza la especificación codominial con contenido particular.

Ejemplo abstracto:

```txt
especificacion_codominial:
  seccion_1
  seccion_2
  seccion_3

manifestacion_codominial:
  seccion_1: contenido concreto
  seccion_2: contenido concreto
  seccion_3: contenido concreto
```

La especificación dice qué forma debe tener la salida.

La Manifestación Codominial es la salida ya construida.

---

## 7. Relación entre Instancia Regional y Codominio

La Instancia Regional no es el Codominio.

Pero puede preparar o restringir el camino hacia un Codominio.

Ejemplo:

```txt
instancia_regional_video_corto_tiktok:
  habilita dimensiones y campos compatibles con video corto TikTok

codominio_video_corto_tiktok:
  define la forma válida de una salida de video corto TikTok
```

La Instancia Regional pertenece al lado de la entrada:

```txt
instancia_regional:
  define qué valores podrán seleccionar las instancias contextuales
```

El Codominio pertenece al lado de la salida:

```txt
codominio:
  define qué forma debe tener la manifestación resultante
```

La relación entre ambos es indirecta:

```txt
instancia_regional
  → instancia_contextual
    → adaptador
      → manifestacion_codominial ∈ codominio
```

Sin embargo, una Instancia Regional puede contener valores regionalmente fijados que preparen un Codominio.

Ejemplo:

```yaml
valores_regionalmente_fijados:
  clase_de_materializacion:
    valor: guion_audiovisual_breve

  plataforma:
    valor: tiktok

  aplicacion_de_plataforma:
    valor: video_tiktok
```

Esto no convierte a la Instancia Regional en Codominio.

Solo indica que la región está preparada para alimentar un Adaptador que proyectará hacia ese Codominio.

---

## 8. Relación entre Instancia Contextual y Codominio

La Instancia Contextual no pertenece directamente al Codominio.

La Instancia Contextual pertenece al lado de la entrada configurada.

El Codominio pertenece al lado de la salida.

```txt
lado_de_entrada:
  instancia_regional
  instancia_contextual

lado_de_salida:
  codominio
  manifestacion_codominial
```

La Instancia Contextual contiene valores seleccionados dentro de una Instancia Regional.

El Adaptador interpreta esos valores como instrucciones de composición y los proyecta hacia una Manifestación Codominial.

```txt
instancia_contextual
  → adaptador_codominio_x
    → manifestacion_codominial_x ∈ codominio_x
```

Una misma Instancia Contextual puede, en principio, proyectarse hacia varios Codominios si existen Adaptadores capaces de hacerlo.

Ejemplo:

```txt
instancia_contextual_001
  ├─ adaptador_video_corto
  │    → manifestacion_video_corto ∈ codominio_video_corto
  ├─ adaptador_carrusel
  │    → manifestacion_carrusel ∈ codominio_carrusel
  └─ adaptador_newsletter
       → manifestacion_newsletter ∈ codominio_newsletter
```

La diferencia entre las salidas no es solamente estilo. Es diferencia codominial.

---

## 9. Relación entre Adaptador y Codominio

El Adaptador debe conocer el Codominio al que proyecta.

Esto significa que el Adaptador no solo sabe leer una Instancia Contextual. También sabe producir una forma de salida válida.

```txt
adaptador_x:
  entrada:
    instancia_contextual validada

  conocimiento_de_salida:
    codominio_x
    especificacion_codominial_x
    criterios_de_pertenencia_x

  salida:
    manifestacion_codominial_x
```

El Adaptador funciona como operador de proyección:

```txt
Adaptador_codominio_x(instancia_contextual)
  → manifestacion_codominial_x ∈ codominio_x
```

El Codominio impide que el Adaptador produzca una salida sin forma.

La especificación codominial impide que el Adaptador produzca una salida formalmente vaga.

---

## 10. Por qué el Codominio no debe depender del tema

Un Codominio no se define por el tema tratado.

Se define por la forma de manifestación.

Dos manifestaciones pueden tratar el mismo tema y pertenecer a Codominios distintos.

Ejemplo:

```txt
misma instancia contextual:
  tema: estrategia política
  caso: Fouquet / Luis XIV

adaptador_video_corto:
  → guion audiovisual breve

adaptador_carrusel:
  → secuencia de láminas

adaptador_newsletter:
  → pieza escrita por secciones

adaptador_clase:
  → módulo pedagógico
```

El contenido temático puede ser similar.

La forma codominial cambia.

Por eso, el Codominio debe definirse por:

- tipo de objeto externo;
- unidades internas;
- capas de manifestación;
- relaciones internas;
- criterios de pertenencia;
- condiciones de ejecución o uso;
- restricciones formales.

No por el tema.

---

## 11. Qué define un Codominio

Un Codominio debe definir, como mínimo, las siguientes regiones de exigencia.

---

### 11.1. Tipo de objeto externo

El Codominio debe indicar qué tipo de objeto puede aparecer al final.

Ejemplos:

```txt
objeto_audiovisual
objeto_textual_extenso
objeto_textual_breve
objeto_visual_secuencial
objeto_pedagogico
objeto_interactivo
objeto_comercial
objeto_documental
objeto_operativo
```

Este nivel define la clase general de manifestación.

---

### 11.2. Unidades internas

El Codominio debe indicar de qué unidades se compone la salida.

Ejemplos:

```txt
bloques
secciones
laminas
modulos
pasos
escenas
publicaciones
segmentos
preguntas
componentes
```

Las unidades internas no tienen que ser iguales en todos los Codominios.

Un video corto puede organizarse por bloques o escenas.

Un carrusel puede organizarse por láminas.

Una clase puede organizarse por módulos.

Una landing puede organizarse por secciones de conversión.

---

### 11.3. Capas de manifestación

El Codominio debe indicar qué capas puede o debe contener la salida.

Ejemplos:

```txt
capa_verbal
capa_visual
capa_auditiva
capa_interactiva
capa_escenica
capa_argumental
capa_pedagogica
capa_comercial
capa_documental
capa_de_justificacion
```

Las capas permiten que la Manifestación Codominial no sea tratada como una unidad plana.

---

### 11.4. Relaciones internas

El Codominio debe indicar cómo se relacionan las unidades internas.

Ejemplos:

```txt
secuencia
contraste
acumulacion
transicion
recapitulacion
progresion
jerarquia
bifurcacion
cierre
retorno
```

Estas relaciones permiten distinguir una salida compuesta de una simple colección de partes.

---

### 11.5. Criterios de pertenencia

El Codominio debe permitir evaluar si una salida pertenece o no a la familia estructural correspondiente.

Ejemplos:

```txt
criterio_de_completitud
criterio_de_coherencia_interna
criterio_de_compatibilidad_formal
criterio_de_legibilidad
criterio_de_ejecucion
criterio_de_continuidad
criterio_de_progresion
criterio_de_cierre
criterio_de_trazabilidad
```

Sin criterios de pertenencia, el Codominio queda demasiado vago.

---

### 11.6. Restricciones de compatibilidad con Adaptadores

El Codominio debe indicar qué clase de Adaptadores pueden proyectar hacia él.

Ejemplo:

```yaml
codominio_video_corto:
  adaptadores_compatibles:
    - adaptador_video_corto
    - adaptador_guion_audiovisual_breve
```

Esto impide que cualquier protocolo produzca cualquier salida.

---

### 11.7. Requisitos de trazabilidad

El Codominio debe permitir rastrear una Manifestación Codominial hacia:

- Instancia Contextual de origen;
- Instancia Regional usada;
- Adaptador aplicado;
- Especificación codominial seguida;
- criterios de pertenencia cumplidos.

Esto es especialmente importante en la arquitectura actual, porque la Manifestación Codominial no debe ocultar la cadena que la hizo posible.

---

## 12. Esquema general de una especificación codominial

Una especificación codominial general puede organizarse así:

```yaml
especificacion_codominial:
  nombre_del_codominio:
  tipo_de_objeto_externo:
  familia_de_salida:

  unidades_internas:
    unidad_1:
      funcion:
      campos_obligatorios:
      campos_opcionales:
      restricciones:

    unidad_2:
      funcion:
      campos_obligatorios:
      campos_opcionales:
      restricciones:

  capas_de_manifestacion:
    capa_1:
      funcion:
      presencia:
      restricciones:

    capa_2:
      funcion:
      presencia:
      restricciones:

  relaciones_internas:
    - relacion_1
    - relacion_2
    - relacion_3

  criterios_de_pertenencia:
    - criterio_1
    - criterio_2
    - criterio_3

  adaptadores_compatibles:
    - adaptador_x
    - adaptador_y

  trazabilidad_requerida:
    - instancia_regional
    - instancia_contextual
    - adaptador
    - codominio
```

Este esquema no pertenece a ningún Codominio particular. Es una forma general para describir Codominios.

---

## 13. Esquema general de una Manifestación Codominial

Una Manifestación Codominial general puede representarse así:

```yaml
manifestacion_codominial:
  id:
  codominio_de_pertenencia:
  especificacion_codominial_usada:
  instancia_regional_de_origen:
  instancia_contextual_de_origen:
  adaptador_usado:

  objeto_externo:
    unidad_1:
      contenido:
      funcion:
      capas:
        capa_1:
        capa_2:

    unidad_2:
      contenido:
      funcion:
      capas:
        capa_1:
        capa_2:

  relaciones_entre_unidades:
    - relacion_1
    - relacion_2

  justificacion_de_pertenencia:
    criterio_1:
    criterio_2:
    criterio_3:

  trazabilidad:
    valores_contextuales_usados:
      - dimension:
        campo:
        valor:
        contribucion_en_salida:
```

Esta forma permite registrar no solo la salida, sino también:

- a qué Codominio pertenece;
- qué especificación siguió;
- de qué Instancia Regional deriva indirectamente;
- de qué Instancia Contextual proviene;
- qué Adaptador la produjo;
- y por qué es una salida válida.

---

## 14. Manifestación Codominial simple y compuesta

Conviene distinguir dos tipos generales.

---

### 14.1. Manifestación Codominial simple

Una Manifestación Codominial simple tiene baja complejidad interna.

Ejemplos:

```txt
unidad_textual_breve
respuesta_directa
imagen_unica
frase_operativa
microinstruccion
```

Aun así, debe pertenecer a un Codominio.

La baja complejidad no elimina la necesidad de pertenencia formal.

---

### 14.2. Manifestación Codominial compuesta

Una Manifestación Codominial compuesta tiene múltiples unidades, capas o relaciones internas.

Ejemplos:

```txt
pieza_por_bloques
pieza_por_laminas
pieza_por_modulos
pieza_por_secciones
pieza_por_pasos
pieza_por_interacciones
```

La manifestación compuesta exige una especificación codominial más detallada.

---

## 15. Codominio como forma de control de validez

El Codominio permite evaluar la salida.

Una salida puede fallar aunque tenga buen contenido, si no pertenece formalmente al Codominio.

Ejemplo:

```txt
instancia_regional:
  correctamente definida

instancia_contextual:
  bien configurada

adaptador:
  ejecutado

salida_generada:
  contenido correcto
  forma incompatible con el codominio

resultado:
  manifestacion_no_valida
```

Por eso, el Codominio debe tener criterios de validación.

Una salida válida debe responder afirmativamente a preguntas como:

```txt
¿Tiene las unidades internas requeridas?
¿Respeta las relaciones internas esperadas?
¿Usa las capas necesarias del Codominio?
¿Evita partes incompatibles?
¿Puede reconocerse como miembro de la familia de salidas?
¿Su forma corresponde al Adaptador usado?
¿Puede trazarse hacia la Instancia Contextual?
¿Puede trazarse hacia la Instancia Regional que habilitó esa instancia?
```

---

## 16. Codominio y trazabilidad

La trazabilidad actualizada debe incluir la cadena completa:

```txt
grafo_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador
        → manifestacion_codominial ∈ codominio
```

Por tanto, una Manifestación Codominial debería poder declarar:

```yaml
origen:
  instancia_regional:
  instancia_contextual:
  adaptador:
  codominio:
  especificacion_codominial:
```

La trazabilidad permite responder:

```txt
¿Por qué esta salida tiene esta forma?
¿Qué región habilitó la configuración?
¿Qué instancia contextual fijó los valores activos?
¿Qué adaptador proyectó esos valores?
¿Qué codominio regula la salida?
¿Qué especificación codominial se siguió?
¿Qué criterios permiten declararla válida?
```

Sin trazabilidad, la Manifestación Codominial puede parecer una salida aislada.

Con trazabilidad, se vuelve resultado auditado de una cadena estructural.

---

## 17. Codominio como condición de reutilización

El Codominio permite reutilizar Adaptadores y comparar Manifestaciones Codominiales.

Si varias manifestaciones pertenecen al mismo Codominio, pueden compararse bajo una misma especificación.

```txt
manifestacion_codominial_a_001 ∈ codominio_a
manifestacion_codominial_a_002 ∈ codominio_a
manifestacion_codominial_a_003 ∈ codominio_a
```

Esto permite evaluar diferencias como:

- mejor o peor composición;
- mayor o menor claridad;
- mejor o peor uso de unidades internas;
- mejor o peor correspondencia con la Instancia Contextual;
- mayor o menor eficacia del Adaptador;
- mayor o menor conservación de la intención regional;
- mayor o menor cumplimiento de criterios codominiales.

Sin Codominio, esas comparaciones serían demasiado vagas.

---

## 18. Codominio y pluralidad de Adaptadores

Una misma Instancia Contextual puede alimentar múltiples Adaptadores si la estructura configurada tiene suficiente información para ello.

Cada Adaptador puede apuntar a un Codominio distinto.

```txt
instancia_regional
  → instancia_contextual
    ├─ adaptador_a → codominio_a
    ├─ adaptador_b → codominio_b
    ├─ adaptador_c → codominio_c
    └─ adaptador_d → codominio_d
```

Esto permite que una misma configuración se exteriorice en muchas formas diferentes.

La diferencia entre esas formas no debe entenderse como simple cambio de estilo.

Es cambio de Codominio.

---

## 19. Codominio y valores regionalmente fijados

Una Instancia Regional puede fijar ciertos valores porque la realización habilitada exige una salida de una clase determinada.

Ejemplo:

```yaml
dimension_marco_de_materializacion:
  clase_de_materializacion:
    valor: guion_audiovisual_breve

  plataforma:
    valor: tiktok

  aplicacion_de_plataforma:
    valor: video_tiktok
```

Estos valores no son todavía Codominio, pero orientan la configuración hacia un Codominio compatible.

La relación sería:

```txt
valores regionalmente fijados
  → condicionan qué instancias contextuales pueden construirse
    → condicionan qué adaptadores son compatibles
      → condicionan qué codominio puede recibir la proyección
```

Por tanto, el Codominio puede ser preparado por la Instancia Regional, pero no queda absorbido por ella.

---

## 20. Especificación codominial como contrato de exteriorización

La especificación codominial es el contrato de exteriorización.

Debe responder:

```txt
¿Qué tipo de objeto aparece?
¿Qué unidades internas debe tener?
¿Qué capas pueden aparecer?
¿Cómo se organizan sus partes?
¿Qué relaciones internas debe respetar?
¿Qué criterios de pertenencia debe cumplir?
¿Qué adaptadores pueden producirlo?
¿Qué trazabilidad mínima debe conservar?
```

Una especificación codominial bien diseñada permite que el Adaptador no improvise la forma de salida.

También permite que una persona o una IA evalúe si una Manifestación Codominial pertenece realmente al Codominio.

---

## 21. Diferencia entre salida esperada y especificación codominial

Una “salida esperada” puede funcionar de dos maneras.

---

### 21.1. Salida esperada como ejemplo

Si el documento muestra una salida ya llena, con contenido particular, entonces funciona como ejemplo de Manifestación Codominial.

```txt
salida_esperada_ejemplo:
  contiene_texto_concreto
  contiene_partes_ya_resueltas
  contiene_decisiones_particulares
```

---

### 21.2. Salida esperada como especificación codominial

Si el documento muestra la forma que debe tener cualquier salida válida, sin depender de un caso concreto, entonces funciona como especificación codominial.

```txt
salida_esperada_como_especificacion:
  define_partes
  define_capas
  define_relaciones
  define_campos
  define_criterios_de_validez
```

La distinción precisa es:

```txt
codominio:
  espacio de salidas válidas

especificacion_codominial:
  descripción formal de ese espacio

manifestacion_codominial:
  salida concreta perteneciente a ese espacio
```

---

## 22. Errores frecuentes

### 22.1. Confundir Codominio con Manifestación Codominial

El Codominio es el espacio.

La Manifestación Codominial es una salida dentro de ese espacio.

### 22.2. Confundir especificación codominial con ejemplo

Una especificación define forma.

Un ejemplo muestra una salida particular.

### 22.3. Confundir Codominio con tema

El Codominio no es “sobre qué habla” la salida.

Es “qué forma de salida es”.

### 22.4. Confundir Instancia Regional con Codominio

La Instancia Regional habilita un espacio de entrada.

El Codominio define un espacio de salida.

### 22.5. Confundir Instancia Contextual con Manifestación Codominial

La Instancia Contextual configura valores.

La Manifestación Codominial exterioriza esos valores como salida.

### 22.6. Confundir Adaptador con Codominio

El Adaptador proyecta.

El Codominio evalúa pertenencia formal de la salida proyectada.

### 22.7. No conservar trazabilidad

Una Manifestación Codominial sin trazabilidad puede ser útil como salida, pero pierde valor estructural dentro del sistema.

### 22.8. Definir Codominio solo por formato superficial

Un Codominio no debe limitarse a “video”, “texto” o “imagen”.

Debe definir unidades, capas, relaciones y criterios de pertenencia.

---

## 23. Relación con los documentos existentes de `definiciones/`

Los documentos anteriores pueden seguir funcionando con ajustes.

### 23.1. Relación con `planteamiento-modelo-base.md`

La noción de Modelo Base local debe dejar de ser el origen directo de las instancias contextuales en realizaciones específicas.

Cuando exista un sistema mayor de regiones, debe usarse:

```txt
instancia_regional
  → instancia_contextual
```

en lugar de:

```txt
modelo_base_local
  → instancia_contextual
```

### 23.2. Relación con `planteamiento-instancia-regional.md`

La Instancia Regional es el recorte habilitante del lado de entrada.

Puede preparar o restringir compatibilidad con ciertos Codominios, pero no los sustituye.

### 23.3. Relación con `planteamiento-instancia-contextual.md`

La Instancia Contextual es la configuración concreta que el Adaptador recibe.

Debe conservar referencia a la Instancia Regional usada, para que la Manifestación Codominial pueda conservar trazabilidad completa.

### 23.4. Relación con `planteamiento-adaptador.md`

El Adaptador es el mecanismo que lee la Instancia Contextual y la proyecta hacia un Codominio.

Debe conocer la especificación codominial que regula la salida.

### 23.5. Relación con documentos de salida esperada

Los documentos de salida esperada deben clasificarse según su función:

```txt
si muestran forma general:
  especificacion_codominial

si muestran salida concreta:
  manifestacion_codominial_ejemplo

si hacen ambas cosas:
  documento mixto, pero con niveles separados
```

---

## 24. Checklist de validación de un Codominio

Un Codominio está bien definido si permite responder:

```txt
[ ] ¿Qué tipo de objeto externo produce?
[ ] ¿Cuáles son sus unidades internas?
[ ] ¿Qué capas de manifestación admite o exige?
[ ] ¿Qué relaciones internas organizan esas unidades?
[ ] ¿Qué criterios determinan pertenencia?
[ ] ¿Qué adaptadores pueden proyectar hacia él?
[ ] ¿Qué restricciones formales impone?
[ ] ¿Qué tipo de trazabilidad exige?
[ ] ¿Qué diferencias lo separan de otros Codominios?
[ ] ¿Puede evaluar si una salida pertenece o no pertenece?
```

---

## 25. Checklist de validación de una Manifestación Codominial

Una Manifestación Codominial está bien formada si permite responder:

```txt
[ ] ¿A qué Codominio pertenece?
[ ] ¿Qué especificación codominial siguió?
[ ] ¿Qué Adaptador la produjo?
[ ] ¿Qué Instancia Contextual fue usada como entrada?
[ ] ¿Qué Instancia Regional habilitó esa Instancia Contextual?
[ ] ¿Qué unidades internas contiene?
[ ] ¿Qué capas de manifestación aparecen?
[ ] ¿Qué relaciones internas organiza?
[ ] ¿Qué criterios de pertenencia cumple?
[ ] ¿Qué valores contextuales se reflejan en la salida?
[ ] ¿Qué decisiones del Adaptador explican su forma?
```

---

## 26. Definición canónica propuesta

### Codominio

Un **Codominio** es el espacio estructural de manifestaciones posibles hacia el cual proyecta un Adaptador. Define la familia de salidas válidas, sus unidades internas, capas, relaciones, restricciones, adaptadores compatibles, criterios de pertenencia y exigencias mínimas de trazabilidad.

### Especificación codominial

Una **especificación codominial** es el documento, esquema o contrato que describe formalmente la estructura de un Codominio. Define qué forma debe tener cualquier salida válida dentro de ese espacio.

### Manifestación Codominial

Una **Manifestación Codominial** es una salida concreta producida por un Adaptador a partir de una Instancia Contextual validada, perteneciente a un Codominio específico y trazable hacia la Instancia Regional que habilitó su configuración.

---

## 27. Fórmula final

La fórmula actualizada es:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador_codominio_x
          → manifestacion_codominial_x ∈ codominio_x
```

Donde:

```txt
modelo_base_de_regiones:
  organiza el sistema mayor

grafo_de_regiones:
  materializa dimensiones, campos, valores y relaciones

instancia_regional:
  habilita una región operable para una realización

instancia_contextual:
  fija valores concretos dentro de esa región

adaptador_codominio_x:
  proyecta la configuración hacia una familia de salida

codominio_x:
  define el espacio formal de salidas válidas

manifestacion_codominial_x:
  salida concreta perteneciente a ese espacio
```

La idea fundamental es:

> El Codominio no es la pieza final, sino el espacio formal que permite declarar una pieza como válida. La Manifestación Codominial es la pieza concreta que aparece dentro de ese espacio después de que un Adaptador proyecta una Instancia Contextual construida desde una Instancia Regional.

---

## 28. Cierre

La migración hacia Instancias Regionales no elimina la noción de Codominio.

La vuelve más precisa.

Antes, el Codominio aparecía como destino de una Instancia Contextual construida desde un Modelo Base local.

Ahora, el Codominio aparece como destino de una Instancia Contextual construida dentro de una Instancia Regional que selecciona elementos de un sistema mayor.

Esto permite conservar tres separaciones fundamentales:

```txt
Instancia Regional:
  habilita el espacio de configuración

Instancia Contextual:
  fija valores concretos

Codominio:
  define el espacio de salida válida
```

Y una cuarta operación:

```txt
Adaptador:
  proyecta la configuración hacia ese espacio de salida
```

Con esta corrección, Codominio y Manifestación Codominial siguen cumpliendo la misma función general, pero ahora quedan integrados en una arquitectura más amplia, trazable y reutilizable.
