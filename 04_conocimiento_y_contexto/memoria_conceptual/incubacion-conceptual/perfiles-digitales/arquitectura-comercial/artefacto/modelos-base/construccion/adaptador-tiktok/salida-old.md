# Diseño de una estructura de salida suficientemente rica

## Para que ninguna dimensión ni ningún campo quede sin incidencia efectiva en la construcción final

---

## 0. Propósito del documento

Este documento propone una **estructura de salida** para la `Manifestación codominial compuesta` y explica su relación con los `Protocolos de composición dimensional`.

La finalidad es resolver el siguiente problema:

- las `Dimensiones de configuración` ya organizan la entrada del sistema;
- los `Protocolos de composición dimensional` deben recibir instancias contextuales construidas sobre esas dimensiones;
- pero la salida final todavía no cuenta con una **arquitectura suficientemente rica** que permita que **cada valor de cada campo de cada dimensión** tenga un lugar efectivo donde contribuir.

Por tanto, este documento no describe todavía un adaptador completo ni todas las reglas de composición valor por valor. Su función es otra:

> **proponer una estructura formal de salida lo bastante rica como para que todos los protocolos dimensionales tengan puntos de inserción, modificación o restricción dentro de la manifestación final.**

Además, este diseño incorpora una ampliación importante:

- no solo debe haber equivalentes de `texto en pantalla` o `indicaciones escénicas`;
- también deben existir equivalentes para:
  - `imagen en pantalla`
  - `video en pantalla`

Estos dos últimos no deben limitarse a “describir lo visual”, sino que deben incluir **prompts de generación** que puedan copiarse y pegarse en IAs de creación de imágenes o video.

---

## 1. Tesis central

La `Manifestación codominial compuesta` no debe entenderse como:

- un texto corrido;
- una simple lista de bloques;
- ni una mera versión “final” de las instancias de entrada.

Debe entenderse como un **objeto compuesto**, con varias capas de construcción, capaz de recibir contribuciones de todos los protocolos dimensionales.

Dicho con precisión:

- las `Dimensiones de configuración` organizan el dominio de entrada;
- los `Protocolos de composición dimensional` traducen valores de campos en acciones composicionales;
- la `Manifestación codominial compuesta` es el resultado integrado de todas esas acciones.

Por eso, si la estructura de salida es pobre, ocurren dos errores:

1. algunos campos de entrada no encuentran dónde incidir;
2. el sistema recibe información que luego no utiliza.

Y si eso ocurriera, sería una señal de diseño defectuoso.

---

## 2. Condición de completitud de la estructura de salida

La estructura propuesta debe cumplir esta condición fuerte:

> **para cada campo de cada dimensión de configuración debe existir al menos un locus de contribución dentro de la Manifestación codominial compuesta.**

Eso significa que la salida debe tener lugares donde puedan incidir, por ejemplo:

- la identidad operativa;
- la función dominante;
- el efecto buscado;
- la acción esperada;
- el alcance de realización;
- el horizonte temporal;
- el régimen de resolución;
- el público objetivo inmediato;
- la adecuación léxico-formulativa;
- el estado atencional;
- el régimen de activación;
- la dinámica procesual;
- la construcción conceptual;
- la configuración narrativa;
- la comparecencia performativa;
- el marco de materialización;
- la composición segmental;
- y la inscripción de superficie.

La salida, por tanto, no debe ser mínima. Debe ser **estratificada**.

---

## 3. Principio de diseño

El principio de diseño de la salida será este:

> **la Manifestación codominial compuesta debe tener una arquitectura en capas, de modo que distintas clases de contribuciones puedan recaer sobre distintas regiones del objeto final.**

En vez de pensar la salida como “guión final”, conviene pensarla como un objeto compuesto por:

1. capa de identidad de la pieza;
2. capa macroestructural;
3. capa de bloques;
4. capa verbal por bloque;
5. capa de superficie textual;
6. capa de superficie escénica;
7. capa visual generable;
8. capa audiovisual generable;
9. capa de continuidad transversal;
10. capa de justificación de composición.

Éste es el corazón de la propuesta.

---

## 4. Estructura general propuesta de la Manifestación codominial compuesta

A continuación se propone una estructura de salida suficientemente rica.

### 4.1. Cabecera de la manifestación

Esta capa reúne la identidad general de la pieza ya compuesta.

```yaml
manifestacion_codominial_compuesta:
  identificacion_general:
    id_de_manifestacion:
    clase_de_materializacion:
    plataforma:
    aplicacion_de_plataforma:
    alcance_de_realizacion:
    horizonte_temporal:
    regimen_de_resolucion_buscada:

  identidad_operativa_resultante:
    formulacion_canonica:
    nivel_de_especificidad:
    prioridad_de_intencion:

  orientacion_funcional_resultante:
    funcion_dominante:
    efecto_buscado:
    accion_esperada:
    configuracion_discursiva:

  acoplamiento_receptoral_resultante:
    publico_objetivo_inmediato:
    adecuacion_lexico_formulativa:
      registro_predominante:
      densidad_terminologica:
      grado_de_abstraccion:
      accesibilidad_lexica:
      variacion_lexica:

  dinamica_atencional_resultante:
    estado_atencional:
    regimen_de_activacion_atencional:
    dinamica_procesual:
      explicitud:
      continuidad:
      friccion_interpretativa:
      compresion:
      recapitulacion:
```

### Función de esta capa

Esta cabecera no sustituye los bloques. Su función es fijar el marco general de la pieza ya compuesta.

Sirve para que la salida final conserve, en forma visible, la memoria estructural de:

- qué clase de pieza es;
- bajo qué orientación funcional fue compuesta;
- para qué receptor fue ajustada;
- y bajo qué régimen temporal y procesual debe leerse o ejecutarse.

---

### 4.2. Capa macroestructural

Esta capa expresa la forma global de la pieza.

```yaml
arquitectura_global:
  duracion_objetivo:
  arquitectura_macro:
  componentes_macroestructurales_activados:
  segmentacion_interna:
  unidad_de_segmento:
  longitud_por_segmento:
  cantidad_total_de_bloques:
```

### Función de esta capa

Esta capa da forma al esqueleto general del guión.

Aquí deben poder incidir de manera directa, entre otros:

- `duracion_objetivo`
- `arquitectura_macro`
- `segmentacion_interna`
- `unidad_de_segmento`
- `longitud_por_segmento`
- `configuracion_narrativa`
- `regimen_de_resolucion_buscada`

Es decir: esta capa es el soporte principal de la **composición estructural** de la salida.

---

### 4.3. Capa de bloques

Éste es el corazón local de la manifestación.

Cada bloque debe ser una unidad de realización suficientemente rica como para recibir múltiples contribuciones.

```yaml
bloques:
  - bloque_id:
    tipo_de_bloque:
    posicion_en_arquitectura_macro:
    funcion_del_bloque:
    objetivo_local:

    relacion_con_el_caso:
      ideas_nucleares_activadas:
      ideas_complementarias_activadas:
      ideas_de_puente_activadas:
      ideas_contrastivas_activadas:
      ideas_derivadas_activadas:
      relaciones_entre_ideas_activadas:

    composicion_local:
      duracion_estimada:
      longitud_verbal_estimada:
      grado_de_carga_conceptual:
      grado_de_resolucion_local:

    comparecencia_local:
      modalidad_de_guion:
      modo_de_comparecencia_verbal:
      comparecencia_performativa:
        cercania:
        autoridad:
        calidez:
        intensidad:
        sobriedad:

    realizacion_verbal:
      emisor:
      dialogo:
      texto_oral_principal:
      texto_oral_secundario:
      remate_verbal_local:
```

### Función de esta capa

Aquí deben converger contribuciones procedentes de:

- la orientación funcional;
- la construcción conceptual;
- la configuración narrativa;
- la comparecencia performativa;
- la composición segmental;
- y partes del régimen atencional y procesual.

Cada bloque no debe ser pensado como “trozo de texto”, sino como **unidad local de composición codominial**.

---

### 4.4. Capa de superficie textual

Esta capa recoge todo lo relacionado con `texto en pantalla`.

```yaml
superficie_textual:
  esquema_de_texto_en_pantalla:
  texto_en_pantalla:
    presencia:
    funcion:
    contenido:
    posicion_aproximada:
    duracion_en_pantalla:
```

### Función de esta capa

Permitir que el campo `esquema_de_texto_en_pantalla` y sus protocolos asociados tengan un lugar explícito de incidencia.

No debe confundirse con el texto oral.

Aquí el protocolo puede decidir, por ejemplo:

- si hay o no texto en pantalla;
- si el texto sirve para reforzar, contrastar, subtitular o condensar;
- cuánto dura;
- y cómo se reparte por bloque.

---

### 4.5. Capa de superficie escénica

Esta capa recoge todo lo relacionado con `indicaciones escénicas` y con acciones de ejecución.

```yaml
superficie_escenica:
  esquema_de_indicaciones_escenicas:
  indicaciones_escenicas:
    presencia:
    funcion:
    contenido:
  acciones_por_bloque:
    presencia:
    funcion:
    contenido:
```

### Función de esta capa

Dar lugar a contribuciones de:

- `esquema_de_indicaciones_escenicas`
- `acciones_por_bloque`
- y otras reglas de protocolización performativa local.

Esto evita que la escenificación quede flotando fuera del sistema.

---

### 4.6. Capa visual generable

Aquí aparece una ampliación nueva y deliberada: la salida debe poder contener no solo texto en pantalla, sino también **equivalentes visuales generables**.

```yaml
superficie_visual_generable:
  imagen_en_pantalla:
    presencia:
    funcion:
    descripcion_conceptual:
    prompt_de_generacion:
    notas_de_coherencia:
```

### Función de esta capa

Permitir que la salida incluya prompts copiables para IA de imagen.

La idea no es solo “poner una imagen”, sino declarar:

- para qué sirve la imagen en el bloque;
- qué relación tiene con la idea del caso;
- y qué prompt exacto puede generarla.

### Tipo de contenido esperado en `prompt_de_generacion`

El prompt debe describir un recurso visual asociado al tema del bloque, por ejemplo:

- una escena conceptual;
- un símbolo visual de contraste;
- una representación minimalista de una idea;
- una imagen de apoyo para reforzar un punto del discurso.

No estamos fijando aún una sintaxis definitiva del prompt, pero la estructura debe reservar un lugar para él.

---

### 4.7. Capa audiovisual generable

Además de imagen en pantalla, debe existir un equivalente para **video en pantalla**.

```yaml
superficie_audiovisual_generable:
  video_en_pantalla:
    presencia:
    funcion:
    descripcion_conceptual:
    prompt_de_generacion:
    duracion_sugerida:
    notas_de_coherencia:
```

### Función de esta capa

Permitir que la salida incluya prompts copiables para IA de video.

La función de este campo no es duplicar el bloque verbal, sino añadir un recurso visual-dinámico que pueda:

- ilustrar una idea;
- reforzar una metáfora;
- mostrar un antes/después;
- representar un contraste;
- o acompañar un momento secuencial.

De nuevo, no se fija todavía una sintaxis cerrada, pero la estructura debe contener el lugar donde ese prompt será producido.

---

### 4.8. Capa auditiva

Esta capa conserva el acompañamiento sonoro como parte explícita de la manifestación.

```yaml
acompanamiento_auditivo:
  musica:
  sonido_ambiente:
  efecto_sonoro:
```

### Función de esta capa

Permitir que campos y protocolos asociados a la realización sonora tengan un lugar de contribución.

No siempre será obligatoria, pero debe existir en la estructura para evitar que estos componentes queden sin incidencia posible.

---

### 4.9. Capa de continuidad transversal

Esta capa sirve para articular los bloques entre sí.

```yaml
continuidad_transversal:
  continuidad_con_bloque_anterior:
  proyeccion_hacia_bloque_siguiente:
  continuidad_argumental:
  continuidad_atencional:
```

### Función de esta capa

Permitir que los protocolos que regulan:

- continuidad,
- recapitulación,
- progresión,
- y reenganche

no queden limitados a decisiones locales sueltas, sino que afecten también la trabazón entre bloques.

---

### 4.10. Capa de justificación de composición

Esta capa sirve para hacer visible por qué el bloque quedó como quedó.

```yaml
justificacion_de_composicion:
  justificaciones_dimensionales:
    dimension_identidad_operativa_de_la_realizacion:
    dimension_orientacion_funcional_pragmatica:
    dimension_escala_temporal_y_resolucion_realizativa:
    dimension_acoplamiento_receptoral:
    dimension_dinamica_atencional_y_procesual:
    dimension_construccion_del_caso:
    dimension_comparecencia_performativa:
    dimension_marco_de_materializacion:
    dimension_composicion_segmental_de_la_salida:
    dimension_inscripcion_de_superficie_de_la_salida:
```

### Función de esta capa

No es solo documentación adicional.

Sirve para garantizar una condición fuerte del sistema:

> que ninguna dimensión quede sin incidencia efectiva en la construcción del bloque y de la pieza.

Si una dimensión no puede justificar ninguna contribución, eso indica que la estructura sigue siendo insuficiente o que el campo está mal integrado.

---

## 5. Relación entre Protocolos de composición dimensional y la estructura de salida

Ahora se propone una relación explícita entre cada dimensión y los loci de salida donde sus protocolos deben poder incidir.

### 5.1. `dimension_identidad_operativa_de_la_realizacion`

#### Campos

- `formulacion_canonica`
- `nivel_de_especificidad`
- `prioridad_de_intencion`

#### Loci de contribución en la salida

- `identidad_operativa_resultante`
- `funcion_del_bloque`
- `objetivo_local`
- `justificacion_de_composicion`

#### Tipo de contribución esperada

- fijación del objetivo general de la pieza;
- determinación del grado de detalle;
- control de jerarquía entre operaciones competidoras.

---

### 5.2. `dimension_orientacion_funcional_pragmatica`

#### Campos

- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `configuracion_discursiva`

#### Loci de contribución

- `orientacion_funcional_resultante`
- `funcion_del_bloque`
- `objetivo_local`
- `texto_oral_principal`
- `remate_verbal_local`
- `continuidad_argumental`

#### Tipo de contribución esperada

- definir qué hace la pieza;
- orientar el tipo de efecto;
- moldear la función de apertura, desarrollo y cierre;
- determinar la clase de remate o llamada local.

---

### 5.3. `dimension_escala_temporal_y_resolucion_realizativa`

#### Campos

- `alcance_de_realizacion`
- `horizonte_temporal`
- `regimen_de_resolucion_buscada`

#### Loci de contribución

- `identificacion_general`
- `arquitectura_global`
- `duracion_estimada`
- `grado_de_resolucion_local`
- `proyeccion_hacia_bloque_siguiente`

#### Tipo de contribución esperada

- fijar si la pieza resuelve o abre;
- regular el peso del cierre;
- orientar si hay continuidad o autosuficiencia.

---

### 5.4. `dimension_acoplamiento_receptoral`

#### Campos

- `publico_objetivo_inmediato`
- `adecuacion_lexico_formulativa`

#### Loci de contribución

- `acoplamiento_receptoral_resultante`
- `texto_oral_principal`
- `texto_en_pantalla.contenido`
- `descripcion_conceptual` de imagen/video
- `justificacion_de_composicion`

#### Tipo de contribución esperada

- ajustar registro, densidad, abstracción y accesibilidad;
- controlar complejidad conceptual y verbal;
- orientar la forma de formulación de recursos visuales.

---

### 5.5. `dimension_dinamica_atencional_y_procesual`

#### Campos

- `estado_atencional`
- `regimen_de_activacion_atencional`
- `dinamica_procesual`

#### Loci de contribución

- `tipo_de_bloque`
- `funcion_del_bloque`
- `duracion_estimada`
- `longitud_verbal_estimada`
- `continuidad_con_bloque_anterior`
- `continuidad_atencional`
- `texto_en_pantalla.funcion`

#### Tipo de contribución esperada

- regular apertura, reenganche, sostenimiento y recapitulación;
- ajustar compresión y fricción;
- organizar el flujo atencional entre bloques.

---

### 5.6. `dimension_construccion_del_caso`

#### Campos

- `construccion_conceptual`
- `configuracion_narrativa`

#### Loci de contribución

- `relacion_con_el_caso`
- `funcion_del_bloque`
- `objetivo_local`
- `continuidad_argumental`
- `arquitectura_global`

#### Tipo de contribución esperada

- repartir ideas entre bloques;
- fijar qué idea nuclear o derivada entra en qué tramo;
- determinar contraste, secuencia, acumulación o cierre.

---

### 5.7. `dimension_comparecencia_performativa`

#### Campos

- `comparecencia_performativa`
- `modalidad_de_guion`
- `modo_de_comparecencia_verbal`
- `realizacion_verbal_de_bloque`
- `acompanamiento_auditivo`

#### Loci de contribución

- `comparecencia_local`
- `realizacion_verbal`
- `acompanamiento_auditivo`
- `indicaciones_escenicas`

#### Tipo de contribución esperada

- definir tono, cercanía, intensidad, sobriedad;
- fijar cómo se verbaliza cada bloque;
- orientar componentes auditivos y performativos.

---

### 5.8. `dimension_marco_de_materializacion`

#### Campos

- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`

#### Loci de contribución

- `identificacion_general`
- `arquitectura_global`
- restricciones globales sobre bloques y capas

#### Tipo de contribución esperada

- fijar el tipo de objeto final;
- imponer compatibilidad con el codominio;
- restringir la forma global de ejecución.

---

### 5.9. `dimension_composicion_segmental_de_la_salida`

#### Campos

- `duracion_objetivo`
- `arquitectura_macro`
- `componentes_macroestructurales_posibles`
- `segmentacion_interna`
- `unidad_de_segmento`
- `longitud_por_segmento`
- `lectura_previa_de_bloques`
- `estructura_local_de_bloque`

#### Loci de contribución

- `arquitectura_global`
- `bloques[*].tipo_de_bloque`
- `bloques[*].posicion_en_arquitectura_macro`
- `bloques[*].duracion_estimada`
- `bloques[*].longitud_verbal_estimada`
- `bloques[*].estructura_local_de_bloque`

#### Tipo de contribución esperada

- decidir cuántos bloques hay;
- qué tipo de bloques aparecen;
- cuánto dura cada tramo;
- y cómo se reparte la estructura local del guión.

Aquí es donde, por ejemplo, el protocolo del campo `arquitectura_macro` puede contener ejemplos concretos de arquitecturas posibles por valor y luego proyectarlas sobre la macroestructura y sobre la clase de cada bloque.

---

### 5.10. `dimension_inscripcion_de_superficie_de_la_salida`

#### Campos

- `esquema_de_texto_en_pantalla`
- `esquema_de_indicaciones_escenicas`
- `texto_en_pantalla_por_bloque`
- `imagen_en_pantalla_por_bloque`
- `acciones_por_bloque`

#### Loci de contribución

- `superficie_textual`
- `superficie_escenica`
- `superficie_visual_generable`
- `superficie_audiovisual_generable`

#### Tipo de contribución esperada

- decidir presencia o ausencia de texto en pantalla;
- decidir grado de explicitación escénica;
- insertar prompts de imagen;
- insertar prompts de video;
- articular acciones visibles en el bloque.

Ésta es la dimensión que más claramente justifica la ampliación del modelo de salida hacia recursos visuales generables.

---

## 6. Ejemplo abstracto de salida completa

A continuación se muestra un esqueleto general simplificado de la manifestación.

```yaml
manifestacion_codominial_compuesta:
  identificacion_general:
    id_de_manifestacion:
    clase_de_materializacion:
    plataforma:
    aplicacion_de_plataforma:
    alcance_de_realizacion:
    horizonte_temporal:
    regimen_de_resolucion_buscada:

  identidad_operativa_resultante:
    formulacion_canonica:
    nivel_de_especificidad:
    prioridad_de_intencion:

  orientacion_funcional_resultante:
    funcion_dominante:
    efecto_buscado:
    accion_esperada:
    configuracion_discursiva:

  arquitectura_global:
    duracion_objetivo:
    arquitectura_macro:
    componentes_macroestructurales_activados:
    segmentacion_interna:
    unidad_de_segmento:
    longitud_por_segmento:
    cantidad_total_de_bloques:

  bloques:
    - bloque_id:
      tipo_de_bloque:
      posicion_en_arquitectura_macro:
      funcion_del_bloque:
      objetivo_local:
      relacion_con_el_caso:
        ideas_nucleares_activadas:
        ideas_complementarias_activadas:
        ideas_de_puente_activadas:
        ideas_contrastivas_activadas:
        ideas_derivadas_activadas:
      composicion_local:
        duracion_estimada:
        longitud_verbal_estimada:
        grado_de_carga_conceptual:
        grado_de_resolucion_local:
      comparecencia_local:
        modalidad_de_guion:
        modo_de_comparecencia_verbal:
        comparecencia_performativa:
          cercania:
          autoridad:
          calidez:
          intensidad:
          sobriedad:
      realizacion_verbal:
        emisor:
        dialogo:
        texto_oral_principal:
        texto_oral_secundario:
        remate_verbal_local:
      superficie_textual:
        esquema_de_texto_en_pantalla:
        texto_en_pantalla:
          presencia:
          funcion:
          contenido:
          posicion_aproximada:
          duracion_en_pantalla:
      superficie_escenica:
        esquema_de_indicaciones_escenicas:
        indicaciones_escenicas:
          presencia:
          funcion:
          contenido:
        acciones_por_bloque:
          presencia:
          funcion:
          contenido:
      superficie_visual_generable:
        imagen_en_pantalla:
          presencia:
          funcion:
          descripcion_conceptual:
          prompt_de_generacion:
          notas_de_coherencia:
      superficie_audiovisual_generable:
        video_en_pantalla:
          presencia:
          funcion:
          descripcion_conceptual:
          prompt_de_generacion:
          duracion_sugerida:
          notas_de_coherencia:
      acompanamiento_auditivo:
        musica:
        sonido_ambiente:
        efecto_sonoro:
      continuidad_transversal:
        continuidad_con_bloque_anterior:
        proyeccion_hacia_bloque_siguiente:
        continuidad_argumental:
        continuidad_atencional:
      justificacion_de_composicion:
        justificaciones_dimensionales:
          dimension_identidad_operativa_de_la_realizacion:
          dimension_orientacion_funcional_pragmatica:
          dimension_escala_temporal_y_resolucion_realizativa:
          dimension_acoplamiento_receptoral:
          dimension_dinamica_atencional_y_procesual:
          dimension_construccion_del_caso:
          dimension_comparecencia_performativa:
          dimension_marco_de_materializacion:
          dimension_composicion_segmental_de_la_salida:
          dimension_inscripcion_de_superficie_de_la_salida:
```

---

## 7. Criterio final de validación de la estructura

La estructura propuesta será suficientemente rica si permite comprobar lo siguiente:

1. ninguna dimensión queda sin locus de contribución;
2. ningún campo queda sin efecto composicional posible;
3. la macroestructura global y la estructura local de bloque pueden coexistir;
4. la comparecencia verbal, la superficie textual y la superficie visual no se confunden;
5. la salida puede contener prompts de imagen y video como recursos copiables;
6. la pieza final sigue siendo compatible con la familia de guión para video corto;
7. el sistema puede justificar, bloque por bloque, qué aportó cada dimensión.

---

## 8. Fórmula de cierre

La `Manifestación codominial compuesta` debe ser entendida como un objeto de salida multicapa, donde la macroestructura, los bloques, la verbalización, la superficie textual, la superficie escénica, los recursos visuales generables, los recursos audiovisuales generables y la justificación de composición reciben contribuciones de los `Protocolos de composición dimensional`, de modo que ninguna dimensión ni ningún campo del sistema quede sin incidencia efectiva en la construcción final.
