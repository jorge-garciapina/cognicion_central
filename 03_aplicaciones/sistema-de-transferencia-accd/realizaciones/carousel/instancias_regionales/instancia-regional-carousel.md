https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69ff768f-90c0-83e8-aa76-d583160dbb78

# Instancia Regional — Carousel

## 0. Identidad documental

- id documental: `instancia-regional-carousel`
- tipo: `instancia_regional`
- realización habilitada: `carousel`
- clase de salida regionalmente fijada: `secuencia_laminar_visual`
- plataforma regionalmente habilitada: `seleccionable_en_instancia_contextual`
- aplicación de plataforma regionalmente habilitada: `seleccionable_en_instancia_contextual`
- archivo sugerido: `realizaciones/carousel/instancias_regionales/instancia-regional-carousel.md`
- fuente de elementos: `ART_grafo_de_regiones.txt`
- fuente de molde estructural: `instancia-regional-video-corto-tiktok.md`

---

## 1. Función de esta instancia regional

Esta instancia regional selecciona, dentro de `grafo_de_regiones`, las dimensiones, campos, subcampos, valores y estructuras que quedan habilitados para construir instancias contextuales orientadas a la realización `carousel/`.

La realización habilitada no corresponde a una plataforma particular. `carousel/` queda definida regionalmente como una secuencia laminar visual-textual; Instagram, TikTok, LinkedIn o una orientación multiplataforma se seleccionan dentro de los campos `plataforma` y `aplicacion_de_plataforma`.

Esta instancia regional **no es una instancia contextual** y **no produce una manifestación final**. Su función es declarar el recorte regional desde el cual podrán construirse instancias contextuales posteriores, entendidas operativamente como ensamblaje de valores más construcción conceptual.

La diferencia operativa es:

```txt
instancia_regional
  selecciona nodos existentes del grafo_de_regiones
  declara ids canónicos
  habilita campos y valores posibles
  fija la clase material mínima de la realización
  no distribuye contenido en láminas concretas

instancia_contextual
  reúne ensamblaje + construccion_conceptual
  selecciona valores concretos dentro de lo habilitado
  configura un caso particular
  puede ser consumida por el protocolo/adaptador de carousel

protocolo_carousel
  transforma la instancia contextual en manifestacion_codominial_carousel
  distribuye la construcción conceptual en láminas
  decide composición local, continuidad y salida final
```

---

## 2. Regla de referencia obligatoria

Cada dimensión, campo, campo interno, valor o estructura habilitada debe referirse al `id` ya existente en `grafo_de_regiones`.

Por tanto, esta instancia regional no redefine las dimensiones del sistema mayor. Las traduce a una selección referencial para `carousel/`.

Regla:

```txt
nombre humano
  sirve para lectura

id
  sirve como referencia canónica al nodo existente

valores habilitados
  indican el espacio de selección disponible para instancias contextuales

valor regional fijado
  indica que la instancia contextual debe usar ese valor si opera dentro de esta región
```

---

## 3. Resumen regional

- dimensiones habilitadas: `10`
- campos directos habilitados: `28`
- campos internos habilitados: `17`
- valores referenciados directamente en el recorte: `209`

Dimensiones habilitadas:

1. `dimension_identidad_operativa_de_la_realizacion` — id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
2. `dimension_orientacion_funcional_pragmatica` — id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica`
3. `dimension_escala_temporal_y_resolucion_realizativa` — id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-dimension_escala_temporal_y_resolucion_realizativa`
4. `dimension_dinamica_atencional_y_procesual` — id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dimension_dinamica_atencional_y_procesual`
5. `dimension_acoplamiento_receptoral` — id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-dimension_acoplamiento_receptoral`
6. `dimension_construccion_del_caso` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso`
7. `dimension_comparecencia_performativa` — id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-dimension_comparecencia_performativa`
8. `dimension_marco_de_materializacion` — id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-dimension_marco_de_materializacion`
9. `dimension_composicion_segmental_de_la_salida` — id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida`
10. `dimension_recursos_complementarios_de_manifestacion` — id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-dimension_recursos_complementarios_de_manifestacion`

Valores regionalmente fijados:

```yaml
dimension_marco_de_materializacion:
  clase_de_materializacion:
    valor: secuencia_laminar_visual
    id: grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion-secuencia_laminar_visual-secuencia_laminar_visual
```

Valores regionalmente habilitados pero no fijados:

```yaml
dimension_marco_de_materializacion:
  plataforma:
    - instagram
    - tiktok
    - linkedin
    - multiplataforma
    - plataforma_pendiente_de_especificacion
  aplicacion_de_plataforma:
    - instagram_carousel_post
    - tiktok_photo_mode
    - linkedin_document_post
    - carousel_multiplataforma
    - aplicacion_pendiente_de_especificacion
```

---

## 4. Restricciones regionales generales

1. Toda instancia contextual construida desde esta instancia regional debe permanecer dentro de los campos y valores habilitados aquí.
2. La instancia contextual puede fijar valores concretos, pero no debe inventar nodos ni ids inexistentes.
3. Los campos descriptivos o semiabiertos pueden recibir valores concretos, pero deben respetar el tipo de valor declarado en su nodo de referencia.
4. Los campos marcados como obligatorios por el nodo de referencia deben declararse en la instancia contextual, salvo que el protocolo regional declare explícitamente una omisión justificada.
5. En `dimension_marco_de_materializacion`, el valor `secuencia_laminar_visual` queda regionalmente fijado como clase material mínima de `carousel/`.
6. Los valores de `plataforma` y `aplicacion_de_plataforma` quedan habilitados, pero no fijados regionalmente. La región es única para `carousel/`; no se crean regiones separadas para Instagram, TikTok o LinkedIn.
7. `dimension_comparecencia_performativa` sólo se habilita mediante `rama_visual_editorial`. No quedan habilitados los campos de oralidad, escena, performance visible, encuadre o acompañamiento auditivo propios de video corto.
8. `dimension_composicion_segmental_de_la_salida` habilita `cantidad_de_laminas`, pero no define funciones por lámina, textos por lámina ni estructura local de portada/cierre. Esas decisiones pertenecen al protocolo de carousel.
9. `dimension_recursos_complementarios_de_manifestacion` conserva su nombre antiguo, pero en `carousel/` sus recursos pueden operar como recursos estructurales de manifestación. El cambio nominal a `recursos_de_manifestacion` queda fuera de esta instancia regional.
10. Esta instancia regional no contiene el caso ni la construcción conceptual; sólo delimita el espacio desde el cual el caso podrá configurarse.

---

# 5. Región seleccionada

## 1. `dimension_identidad_operativa_de_la_realizacion`

- sección: `3`
- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
- resumen: Dimensión que describe la identidad declarativa de la realización que se busca construir.
- definición: Describir la identidad declarativa de la realización que se busca construir, indicando: cómo se formula; con qué precisión se formula; y con qué jerarquía opera dentro del sistema. Esta dimensión no describe todavía el contenido del caso, ni su composición segmental, ni su superficie audiovisual. Su función es fijar qué realización se está declarando y con qué grado de centralidad.

**Estado regional:** dimensión habilitada para declarar la identidad operativa de una realización carousel.

### Campos habilitados

#### `formulacion_canonica`

- sección: `3.1`
- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica`
- tipo de valor: Descriptivo controlado
- cardinalidad: Un valor obligatorio
- resumen: Campo que nombra de manera explícita la realización que será instanciada.
- definición: Nombrar de manera explícita la realización que será instanciada. El valor de este campo debe ser una formulación breve, inequívoca y operativa de la realización. No debe ser un tema, ni un título de archivo, ni una instrucción de ejecución completa. Debe formular una finalidad de realización legible como propósito adaptativo.

**Nota regional para carousel:** En esta región se habilitan formulaciones orientadas explícitamente al codominio carousel. La instancia contextual deberá seleccionar una formulación compatible con una salida laminar visual-textual.

##### Valores habilitados

- `crear_manifestacion_codominial_carousel`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_manifestacion_codominial_carousel-crear_manifestacion_codominial_carousel`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_manifestacion_codominial_carousel-crear_manifestacion_codominial_carousel`
  - resumen: Valor que define la intención operativa de producir una salida final perteneciente al codominio `carousel`.
  - definición: Valor que define la intención operativa de producir una salida final perteneciente al codominio `carousel`.

    No describe todavía la plataforma, la cantidad de láminas ni el contenido concreto. Su función es fijar que la realización esperada debe terminar en una **manifestación codominial carousel**, es decir, en una pieza ya construida según el protocolo correspondiente.

    Ejemplo de uso:

    ```txt
    formulacion_canonica: crear_manifestacion_codominial_carousel
    ```

    Sirve cuando se quiere enfatizar que el resultado no es una descripción del carousel, sino la salida final construida.

- `crear_secuencia_laminar_visual_textual`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_secuencia_laminar_visual_textual-crear_secuencia_laminar_visual_textual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_secuencia_laminar_visual_textual-crear_secuencia_laminar_visual_textual`
  - resumen: Valor que define la realización como una secuencia compuesta por unidades laminares, donde texto e imagen pueden operar como partes estructurales de la pieza.
  - definición: Valor que define la realización como una secuencia compuesta por unidades laminares, donde texto e imagen pueden operar como partes estructurales de la pieza.

    Este valor ayuda a distinguir `carousel/` de `video_corto/`: el primero se organiza por láminas; el segundo, por continuidad audiovisual temporal.

    Ejemplo de uso:

    ```txt
    formulacion_canonica: crear_secuencia_laminar_visual_textual
    ```

    Sirve cuando se quiere enfatizar la materialidad propia del carousel: una progresión visual-textual organizada por láminas.

- `crear_carousel_visual_textual`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_carousel_visual_textual-crear_carousel_visual_textual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_carousel_visual_textual-crear_carousel_visual_textual`
  - resumen: Valor más directo y legible para declarar que la realización esperada es un carousel compuesto por texto e imagen.
  - definición: Valor más directo y legible para declarar que la realización esperada es un carousel compuesto por texto e imagen.

    Puede funcionar como formulación práctica cuando no se necesita usar el término más técnico `manifestacion_codominial_carousel`.

    Ejemplo de uso:

    ```txt
    formulacion_canonica: crear_carousel_visual_textual
    ```

    Sirve para configuraciones más accesibles, especialmente cuando el ensamblaje o protocolo necesita conservar una formulación clara para humanos.

#### `nivel_de_especificidad`

- sección: `3.2`
- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad`
- tipo de valor: Categorial ordinal
- cardinalidad: Un valor obligatorio
- resumen: Campo que indica el grado de precisión con el que está formulada la realización.
- definición: Indicar el grado de precisión con el que está formulada la realización. Toda instancia debe fijar exactamente un nivel de especificidad, y la formulación canónica debe ser coherente con el nivel elegido.

##### Valores habilitados

- `general`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-general-general`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-general-general`
  - resumen: Valor general declarado para el campo nivel_de_especificidad.
  - definición: La realización está formulada en un nivel amplio. Nombra una clase de salida o de operación sin fijar todavía con mucha precisión el tipo concreto de pieza. Deja abiertas varias formas realizativas compatibles.
- `intermedia`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-intermedia-intermedia`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-intermedia-intermedia`
  - resumen: Valor intermedia declarado para el campo nivel_de_especificidad.
  - definición: La realización está formulada con un grado medio de precisión. Delimita mejor la clase de guión o de operación buscada, pero todavía deja margen para varias variantes compatibles dentro del mismo dominio.
- `especifica`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-especifica-especifica`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-especifica-especifica`
  - resumen: Valor especifica declarado para el campo nivel_de_especificidad.
  - definición: La realización está formulada con alta precisión. Ya orienta claramente el tipo concreto de pieza a construir y reduce de manera fuerte el espacio de salidas compatibles.

#### `prioridad_de_intencion`

- sección: `3.3`
- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion`
- tipo de valor: Ordinal
- cardinalidad: Un valor obligatorio
- resumen: Campo que indica la jerarquía relativa de esta realización dentro del sistema de configuración.
- definición: Indicar la jerarquía relativa de esta realización dentro del sistema de configuración. Debe haber exactamente una prioridad declarada, y la prioridad debe ser coherente con la jerarquía general de la configuración.

##### Valores habilitados

- `principal`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-principal-principal`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-principal-principal`
  - resumen: Valor principal declarado para el campo prioridad_de_intencion.
  - definición: La realización ocupa el lugar dominante dentro del sistema. Si existen otras orientaciones activas, deben subordinarse a ésta.
- `secundaria`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-secundaria-secundaria`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-secundaria-secundaria`
  - resumen: Valor secundaria declarado para el campo prioridad_de_intencion.
  - definición: La realización cumple una función relevante pero no dominante. Matiza, acompaña o refuerza una orientación principal.
- `terciaria`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-terciaria-terciaria`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-terciaria-terciaria`
  - resumen: Valor terciaria declarado para el campo prioridad_de_intencion.
  - definición: La realización tiene un peso complementario menor. Puede influir en detalles de composición, pero no define el criterio principal de éxito.
- `auxiliar`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-auxiliar-auxiliar`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-auxiliar-auxiliar`
  - resumen: Valor auxiliar declarado para el campo prioridad_de_intencion.
  - definición: La realización cumple una función instrumental o de soporte. Su presencia no estructura el núcleo del sistema, pero puede ayudar a estabilizarlo.

---

## 2. `dimension_orientacion_funcional_pragmatica`

- sección: `4`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica`
- resumen: Dimensión que describe qué quiere hacer la realización, qué efecto busca producir y qué respuesta espera activar.
- definición: Describir qué quiere hacer la realización, qué efecto busca producir y qué clase principal de respuesta espera activar. Esta dimensión fija el vector pragmático de la pieza. No describe todavía su segmentación ni su comparecencia local, pero sí el tipo de operación dominante que la salida debe cumplir.

**Estado regional:** dimensión habilitada para fijar la orientación funcional, el efecto buscado y la acción esperada de una pieza carousel.

### Campos habilitados

#### `funcion_dominante`

- sección: `4.1`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Campo que fija qué operación principal busca cumplir la realización.
- definición: Fijar qué operación principal busca cumplir la realización.

##### Valores habilitados

- `captar_atencion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-captar_atencion-captar_atencion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-captar_atencion-captar_atencion`
  - resumen: Valor captar_atencion declarado para el campo funcion_dominante.
  - definición: La realización busca abrir atención y atraer al receptor hacia el campo de la pieza.
- `sintetizar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-sintetizar-sintetizar`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-sintetizar-sintetizar`
  - resumen: Valor sintetizar declarado para el campo funcion_dominante.
  - definición: La realización busca condensar contenido, reducir extensión y ofrecer una forma concentrada de comprensión.
- `enseñar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-enseñar-enseñar`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-enseñar-enseñar`
  - resumen: Valor enseñar declarado para el campo funcion_dominante.
  - definición: La realización busca facilitar comprensión, asimilación o aprendizaje de una idea, estructura u operación.
- `activar_interaccion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-activar_interaccion-activar_interaccion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-activar_interaccion-activar_interaccion`
  - resumen: Valor activar_interaccion declarado para el campo funcion_dominante.
  - definición: La realización busca producir una respuesta interactiva explícita, como comentar, responder o intervenir.
- `distribuir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-distribuir-distribuir`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-distribuir-distribuir`
  - resumen: Valor distribuir declarado para el campo funcion_dominante.
  - definición: La realización busca circular contenido de forma eficiente y reconocible, priorizando transferibilidad o circulación.
- `convertir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-convertir-convertir`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-convertir-convertir`
  - resumen: Valor convertir declarado para el campo funcion_dominante.
  - definición: La realización busca llevar al receptor hacia una decisión o cambio más fuerte, normalmente con una dirección práctica definida.
- `abrir_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-abrir_serie-abrir_serie`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-abrir_serie-abrir_serie`
  - resumen: Valor abrir_serie declarado para el campo funcion_dominante.
  - definición: La realización busca iniciar una secuencia de piezas relacionadas.
- `continuar_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-continuar_serie-continuar_serie`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-continuar_serie-continuar_serie`
  - resumen: Valor continuar_serie declarado para el campo funcion_dominante.
  - definición: La realización busca sostener una secuencia ya abierta.
- `cerrar_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-cerrar_serie-cerrar_serie`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-cerrar_serie-cerrar_serie`
  - resumen: Valor cerrar_serie declarado para el campo funcion_dominante.
  - definición: La realización busca concluir una secuencia de piezas relacionadas.

#### `efecto_buscado`

- sección: `4.2`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado`
- tipo de valor: Categorial semiabierto
- cardinalidad: Uno o más valores, con una dominancia explícita
- resumen: Campo que describe el efecto principal que la realización pretende provocar en el receptor.
- definición: Describir el efecto principal que la realización pretende provocar en el receptor.

##### Valores habilitados

- `comprension_rapida`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-comprension_rapida-comprension_rapida`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-comprension_rapida-comprension_rapida`
  - resumen: Valor comprension_rapida declarado para el campo efecto_buscado.
  - definición: La pieza busca que el receptor entienda con rapidez una distinción, idea, estructura u operación.
- `deseo_de_guardar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_guardar-deseo_de_guardar`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_guardar-deseo_de_guardar`
  - resumen: Valor deseo_de_guardar declarado para el campo efecto_buscado.
  - definición: La pieza busca que el receptor perciba la salida como algo reutilizable o digno de conservar.
- `deseo_de_compartir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_compartir-deseo_de_compartir`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_compartir-deseo_de_compartir`
  - resumen: Valor deseo_de_compartir declarado para el campo efecto_buscado.
  - definición: La pieza busca circular por recomendación o reenvío.
- `curiosidad`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-curiosidad-curiosidad`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-curiosidad-curiosidad`
  - resumen: Valor curiosidad declarado para el campo efecto_buscado.
  - definición: La pieza busca abrir una inquietud cognitiva que invite a seguir atendiendo o a explorar más.
- `expectativa_de_resolucion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-expectativa_de_resolucion-expectativa_de_resolucion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-expectativa_de_resolucion-expectativa_de_resolucion`
  - resumen: Valor expectativa_de_resolucion declarado para el campo efecto_buscado.
  - definición: La pieza busca mantener al receptor esperando un cierre, una respuesta o una clarificación posterior.
- `retencion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-retencion-retencion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-retencion-retencion`
  - resumen: Valor retencion declarado para el campo efecto_buscado.
  - definición: La pieza busca permanecer en memoria o dejar una huella cognitiva reconocible.
- `identificacion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-identificacion-identificacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-identificacion-identificacion`
  - resumen: Valor identificacion declarado para el campo efecto_buscado.
  - definición: La pieza busca que el receptor reconozca algo propio, vivido o cercano en el contenido.
- `disposicion_a_accion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-disposicion_a_accion-disposicion_a_accion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-disposicion_a_accion-disposicion_a_accion`
  - resumen: Valor disposicion_a_accion declarado para el campo efecto_buscado.
  - definición: La pieza busca abrir una disposición práctica, de aplicación o respuesta.

#### `accion_esperada`

- sección: `4.3`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada`
- tipo de valor: Categorial cerrado
- cardinalidad: Uno o más valores
- resumen: Campo que fija la acción concreta que la realización espera activar en el receptor.
- definición: Fijar la acción concreta que la realización espera activar en el receptor.

##### Valores habilitados

- `guardar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-guardar-guardar`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-guardar-guardar`
  - resumen: Valor guardar declarado para el campo accion_esperada.
  - definición: La pieza busca ser conservada para uso posterior.
- `compartir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-compartir-compartir`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-compartir-compartir`
  - resumen: Valor compartir declarado para el campo accion_esperada.
  - definición: La pieza busca ser redistribuida por el receptor.
- `comentar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-comentar-comentar`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-comentar-comentar`
  - resumen: Valor comentar declarado para el campo accion_esperada.
  - definición: La pieza busca una intervención verbal o reactiva explícita.
- `ir_al_perfil`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ir_al_perfil-ir_al_perfil`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ir_al_perfil-ir_al_perfil`
  - resumen: Valor ir_al_perfil declarado para el campo accion_esperada.
  - definición: La pieza busca extender la atención hacia el resto del ecosistema de salida.
- `hacer_click`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-hacer_click-hacer_click`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-hacer_click-hacer_click`
  - resumen: Valor hacer_click declarado para el campo accion_esperada.
  - definición: La pieza busca una acción puntual sobre un enlace o elemento de salida.
- `seguir_cuenta`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-seguir_cuenta-seguir_cuenta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-seguir_cuenta-seguir_cuenta`
  - resumen: Valor seguir_cuenta declarado para el campo accion_esperada.
  - definición: La pieza busca convertir la recepción en seguimiento estable.
- `consumir_parte_siguiente`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-consumir_parte_siguiente-consumir_parte_siguiente`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-consumir_parte_siguiente-consumir_parte_siguiente`
  - resumen: Valor consumir_parte_siguiente declarado para el campo accion_esperada.
  - definición: La pieza busca continuidad serial.

#### `configuracion_discursiva`

- sección: `4.4`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Campo que describe el modo de formulación predominante de la realización.
- definición: Describir el modo de formulación predominante de la realización.

##### Valores habilitados

- `sintetizadora`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-sintetizadora-sintetizadora`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-sintetizadora-sintetizadora`
  - resumen: Valor sintetizadora declarado para el campo configuracion_discursiva.
  - definición: La realización se formula prioritariamente para condensar y reorganizar el contenido en forma resumida.
- `explicativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-explicativa-explicativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-explicativa-explicativa`
  - resumen: Valor explicativa declarado para el campo configuracion_discursiva.
  - definición: La realización se formula prioritariamente para hacer comprensible un contenido, desplegarlo o aclararlo.
- `operativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-operativa-operativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-operativa-operativa`
  - resumen: Valor operativa declarado para el campo configuracion_discursiva.
  - definición: La realización se formula prioritariamente para indicar qué hacer, cómo proceder o qué operación ejecutar.
- `definicional`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-definicional-definicional`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-definicional-definicional`
  - resumen: Valor definicional declarado para el campo configuracion_discursiva.
  - definición: La realización se formula prioritariamente para fijar qué es algo, delimitarlo o precisarlo.
- `argumentativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-argumentativa-argumentativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-argumentativa-argumentativa`
  - resumen: Valor argumentativa declarado para el campo configuracion_discursiva.
  - definición: La realización se formula prioritariamente para sostener, defender o justificar una tesis.
- `captativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-captativa-captativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-captativa-captativa`
  - resumen: Valor captativa declarado para el campo configuracion_discursiva.
  - definición: La realización se formula prioritariamente para abrir atención, provocar entrada o intensificar interés inicial.
- `hibrida_controlada`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-hibrida_controlada-hibrida_controlada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-hibrida_controlada-hibrida_controlada`
  - resumen: Valor hibrida_controlada declarado para el campo configuracion_discursiva.
  - definición: La realización combina más de una modalidad discursiva, pero mantiene una organización controlada y reconocible.

---

## 3. `dimension_escala_temporal_y_resolucion_realizativa`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-dimension_escala_temporal_y_resolucion_realizativa`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-dimension_escala_temporal_y_resolucion_realizativa`
- resumen: Dimensión que describe la escala temporal y el régimen de resolución de la realización.
- definición: Describir la escala temporal y el régimen de resolución de la realización, indicando si la pieza es autosuficiente, seriada, acumulativa o transicional, y cómo distribuye su resolución en el tiempo.

**Estado regional:** dimensión habilitada para regular alcance, horizonte y régimen de resolución sin confundirlos con cantidad de láminas.

### Campos habilitados

#### `alcance_de_realizacion`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Campo que indica si la realización busca una pieza aislada o una unidad dentro de una estructura mayor.
- definición: Indicar si la realización busca una pieza aislada o una unidad dentro de una estructura mayor. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `pieza_unica`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_unica-pieza_unica`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_unica-pieza_unica`
  - resumen: Valor declarado para el campo alcance_de_realizacion: pieza_unica.
  - definición: Materialización autosuficiente cuyo sentido inmediato no depende de piezas previas o posteriores.
- `pieza_de_acceso`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_acceso-pieza_de_acceso`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_acceso-pieza_de_acceso`
  - resumen: Valor declarado para el campo alcance_de_realizacion: pieza_de_acceso.
  - definición: Materialización pensada para introducir al receptor en un campo temático o de salida.
- `pieza_de_profundizacion`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_profundizacion-pieza_de_profundizacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_profundizacion-pieza_de_profundizacion`
  - resumen: Valor declarado para el campo alcance_de_realizacion: pieza_de_profundizacion.
  - definición: Materialización orientada a expandir o profundizar algo ya abierto.
- `pieza_de_prueba`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_prueba-pieza_de_prueba`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_prueba-pieza_de_prueba`
  - resumen: Valor declarado para el campo alcance_de_realizacion: pieza_de_prueba.
  - definición: Materialización orientada a explorar, ensayar o testear una forma de salida.
- `pieza_de_transicion`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_transicion-pieza_de_transicion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_transicion-pieza_de_transicion`
  - resumen: Valor declarado para el campo alcance_de_realizacion: pieza_de_transicion.
  - definición: Materialización que conecta dos zonas distintas del recorrido o cambia de fase.
- `pieza_de_validacion`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_validacion-pieza_de_validacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_validacion-pieza_de_validacion`
  - resumen: Valor declarado para el campo alcance_de_realizacion: pieza_de_validacion.
  - definición: Materialización orientada a verificar una hipótesis, una forma de presentación o una recepción esperada.
- `apertura_de_serie`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-apertura_de_serie-apertura_de_serie`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-apertura_de_serie-apertura_de_serie`
  - resumen: Valor declarado para el campo alcance_de_realizacion: apertura_de_serie.
  - definición: Materialización cuya función principal es iniciar una secuencia de piezas relacionadas.
- `continuidad_de_serie`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-continuidad_de_serie-continuidad_de_serie`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-continuidad_de_serie-continuidad_de_serie`
  - resumen: Valor declarado para el campo alcance_de_realizacion: continuidad_de_serie.
  - definición: Materialización que prolonga una secuencia ya abierta.
- `cierre_de_serie`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-cierre_de_serie-cierre_de_serie`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-cierre_de_serie-cierre_de_serie`
  - resumen: Valor declarado para el campo alcance_de_realizacion: cierre_de_serie.
  - definición: Materialización cuya función principal es concluir una secuencia.

#### `horizonte_temporal`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Campo que indica en qué escala temporal busca operar la realización.
- definición: Indicar en qué escala temporal busca operar la realización. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `inmediato`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-inmediato-inmediato`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-inmediato-inmediato`
  - resumen: Valor declarado para el campo horizonte_temporal: inmediato.
  - definición: La realización busca producir efectos en el mismo acto de recepción o muy poco después.
- `corto_plazo`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-corto_plazo-corto_plazo`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-corto_plazo-corto_plazo`
  - resumen: Valor declarado para el campo horizonte_temporal: corto_plazo.
  - definición: La realización busca operar en una escala breve posterior al contacto inicial.
- `mediano_plazo`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-mediano_plazo-mediano_plazo`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-mediano_plazo-mediano_plazo`
  - resumen: Valor declarado para el campo horizonte_temporal: mediano_plazo.
  - definición: La realización busca influir en una secuencia más extendida de recepción o elaboración.
- `seriado`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-seriado-seriado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-seriado-seriado`
  - resumen: Valor declarado para el campo horizonte_temporal: seriado.
  - definición: La realización busca operar explícitamente como parte de una secuencia serial.
- `acumulativo`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-acumulativo-acumulativo`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-acumulativo-acumulativo`
  - resumen: Valor declarado para el campo horizonte_temporal: acumulativo.
  - definición: La realización busca contribuir a un efecto que depende de varias piezas, repeticiones o exposiciones.

#### `regimen_de_resolucion_buscada`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Campo que fija cómo se distribuye la resolución del contenido dentro de la realización.
- definición: Fijar cómo se distribuye la resolución del contenido dentro de la realización. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `resolucion_inmediata`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_inmediata-resolucion_inmediata`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_inmediata-resolucion_inmediata`
  - resumen: Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_inmediata.
  - definición: La pieza cierra o resuelve rápidamente el núcleo que abre.
- `resolucion_parcial`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_parcial-resolucion_parcial`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_parcial-resolucion_parcial`
  - resumen: Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_parcial.
  - definición: La pieza resuelve solo una parte del problema o de la tensión presentada.
- `resolucion_progresiva`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_progresiva-resolucion_progresiva`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_progresiva-resolucion_progresiva`
  - resumen: Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_progresiva.
  - definición: La pieza distribuye la resolución a lo largo del recorrido, sin agotarla en el primer tramo.
- `resolucion_diferida`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_diferida-resolucion_diferida`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_diferida-resolucion_diferida`
  - resumen: Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_diferida.
  - definición: La pieza posterga el cierre o parte de él.
- `resolucion_abierta_a_continuidad`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_abierta_a_continuidad-resolucion_abierta_a_continuidad`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_abierta_a_continuidad-resolucion_abierta_a_continuidad`
  - resumen: Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_abierta_a_continuidad.
  - definición: La pieza deja deliberadamente abierta una continuidad futura.

---

## 4. `dimension_dinamica_atencional_y_procesual`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dimension_dinamica_atencional_y_procesual`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dimension_dinamica_atencional_y_procesual`
- resumen: Dimensión que describe la relación atencional dominante del receptor y la forma procesual del recorrido.
- definición: Describir la relación atencional dominante del receptor con la pieza y la forma procesual del recorrido que la realización deberá activar o sostener.

**Estado regional:** dimensión habilitada para regular la atención y la experiencia procesual del recorrido laminar.

### Campos habilitados

#### `estado_atencional`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Configuración dominante de la relación atencional del receptor con la pieza al momento de la realización.
- definición: Describir la configuración dominante de la relación atencional del receptor con la pieza al momento de la realización. Tipo de valor: categorial semiabierto. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `atencion_fragmentada`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_fragmentada-atencion_fragmentada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_fragmentada-atencion_fragmentada`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención está repartida, interrumpida o expuesta a dispersión fuerte.
- `atencion_superficial`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_superficial-atencion_superficial`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_superficial-atencion_superficial`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención está abierta, pero todavía en un nivel poco profundo.
- `atencion_en_exploracion`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_en_exploracion-atencion_en_exploracion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_en_exploracion-atencion_en_exploracion`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención está disponible para una entrada exploratoria.
- `atencion_sostenida`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_sostenida-atencion_sostenida`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_sostenida-atencion_sostenida`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención ya tiene un grado fuerte de continuidad.
- `atencion_lista_para_activacion`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_activacion-atencion_lista_para_activacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_activacion-atencion_lista_para_activacion`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención está lista para recibir una invitación más práctica o decisional.
- `atencion_lista_para_continuidad`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_continuidad-atencion_lista_para_continuidad`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_continuidad-atencion_lista_para_continuidad`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención está lista para enlazarse con piezas futuras.
- `atencion_lista_para_profundizacion`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_profundizacion-atencion_lista_para_profundizacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_profundizacion-atencion_lista_para_profundizacion`
  - resumen: Valor declarado para el campo estado_atencional.
  - definición: La atención está lista para avanzar hacia mayor densidad o desarrollo.

#### `regimen_de_activacion_atencional`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Modo principal en que la realización debe activar, sostener o reabrir la atención.
- definición: Fijar el modo principal en que la realización debe activar, sostener o reabrir la atención. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `apertura_inmediata`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_inmediata-apertura_inmediata`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_inmediata-apertura_inmediata`
  - resumen: Valor declarado para el campo regimen_de_activacion_atencional.
  - definición: La realización debe abrir atención desde el inicio, sin preámbulos extensos.
- `apertura_progresiva`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_progresiva-apertura_progresiva`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_progresiva-apertura_progresiva`
  - resumen: Valor declarado para el campo regimen_de_activacion_atencional.
  - definición: La realización puede construir la atención de forma escalonada.
- `sostenimiento_desde_el_inicio`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-sostenimiento_desde_el_inicio-sostenimiento_desde_el_inicio`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-sostenimiento_desde_el_inicio-sostenimiento_desde_el_inicio`
  - resumen: Valor declarado para el campo regimen_de_activacion_atencional.
  - definición: La atención debe ser captada y mantenida desde el primer tramo.
- `activacion_por_continuidad`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-activacion_por_continuidad-activacion_por_continuidad`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-activacion_por_continuidad-activacion_por_continuidad`
  - resumen: Valor declarado para el campo regimen_de_activacion_atencional.
  - definición: La atención se apoya en continuidad con piezas previas o contexto ya activo.
- `reenganche`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-reenganche-reenganche`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-reenganche-reenganche`
  - resumen: Valor declarado para el campo regimen_de_activacion_atencional.
  - definición: La realización debe recuperar una atención que ya estuvo abierta pero se aflojó.

#### `dinamica_procesual`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Experiencia de recorrido de la realización compuesta por cinco ejes obligatorios.
- definición: Describir la experiencia de recorrido de la realización. Tipo de valor: compuesto. Cardinalidad: un valor obligatorio compuesto por cinco ejes.

##### Campos internos habilitados

###### `compresion`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Eje que indica el grado de condensación del contenido en la realización.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: la realización se despliega con más amplitud. Media: combina condensación y despliegue. Alta: concentra mucho contenido en poco espacio.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-baja-baja`
  - resumen: Valor baja del eje compresion.
  - definición: La realización se despliega con más amplitud.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-media-media`
  - resumen: Valor media del eje compresion.
  - definición: Combina condensación y despliegue.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-alta-alta`
  - resumen: Valor alta del eje compresion.
  - definición: Concentra mucho contenido en poco espacio.

###### `continuidad`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Eje que indica la fluidez o discontinuidad del recorrido de la realización.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: recorrido más cortado o discontinuo. Media: continuidad suficiente pero no completamente fluida. Alta: recorrido muy continuo y articulado.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-baja-baja`
  - resumen: Valor baja del eje continuidad.
  - definición: Recorrido más cortado o discontinuo.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-media-media`
  - resumen: Valor media del eje continuidad.
  - definición: Continuidad suficiente pero no completamente fluida.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-alta-alta`
  - resumen: Valor alta del eje continuidad.
  - definición: Recorrido muy continuo y articulado.

###### `explicitud`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Eje que indica el grado en que la realización explicita sus relaciones principales.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: muchas cosas quedan implícitas. Media: parte importante del contenido se explicita. Alta: la realización vuelve muy claras sus relaciones principales.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-baja-baja`
  - resumen: Valor baja del eje explicitud.
  - definición: Muchas cosas quedan implícitas.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-media-media`
  - resumen: Valor media del eje explicitud.
  - definición: Parte importante del contenido se explicita.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-alta-alta`
  - resumen: Valor alta del eje explicitud.
  - definición: La realización vuelve muy claras sus relaciones principales.

###### `friccion_interpretativa`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Eje que indica el esfuerzo interpretativo adicional exigido por el recorrido.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: el recorrido exige poco esfuerzo interpretativo adicional. Media: el recorrido contiene zonas moderadas de tensión interpretativa. Alta: el recorrido exige un trabajo inferencial fuerte.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-baja-baja`
  - resumen: Valor baja del eje friccion_interpretativa.
  - definición: El recorrido exige poco esfuerzo interpretativo adicional.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-media-media`
  - resumen: Valor media del eje friccion_interpretativa.
  - definición: El recorrido contiene zonas moderadas de tensión interpretativa.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-alta-alta`
  - resumen: Valor alta del eje friccion_interpretativa.
  - definición: El recorrido exige un trabajo inferencial fuerte.

###### `recapitulacion`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Eje que indica el grado de recuperación, síntesis o reexpresión del recorrido.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: pocas reformulaciones o recuperaciones del recorrido. Media: cierto grado de reformulación o síntesis parcial. Alta: fuerte presencia de recuperación, síntesis o reexpresión.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-baja-baja`
  - resumen: Valor baja del eje recapitulacion.
  - definición: Pocas reformulaciones o recuperaciones del recorrido.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-media-media`
  - resumen: Valor media del eje recapitulacion.
  - definición: Cierto grado de reformulación o síntesis parcial.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-alta-alta`
  - resumen: Valor alta del eje recapitulacion.
  - definición: Fuerte presencia de recuperación, síntesis o reexpresión.

---

## 5. `dimension_acoplamiento_receptoral`

- sección: `6`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-dimension_acoplamiento_receptoral`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-dimension_acoplamiento_receptoral`
- resumen: Dimensión que describe a qué receptor inmediato se orienta la realización y cómo debe ajustarse verbalmente a ese receptor.
- definición: Describir a qué receptor inmediato se orienta la realización y cómo debe ajustarse verbalmente a ese receptor.

**Estado regional:** dimensión habilitada para ajustar receptor, registro, abstracción, terminología y accesibilidad textual.

### Campos habilitados

#### `publico_objetivo_inmediato`

- sección: `6.1`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato`
- tipo de valor: Categorial semiabierto
- cardinalidad: Uno o más valores
- resumen: Campo que delimita el público inmediato al que la realización orienta la salida.
- definición: Delimitar el público inmediato al que la realización orienta la salida. Tipo de valor: categorial semiabierto. Cardinalidad: uno o más valores.

##### Valores habilitados

- `audiencia_fria`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_fria-audiencia_fria`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_fria-audiencia_fria`
  - resumen: Valor audiencia_fria declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores sin relación previa fuerte con la fuente o con el contenido.
- `audiencia_tibia`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_tibia-audiencia_tibia`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_tibia-audiencia_tibia`
  - resumen: Valor audiencia_tibia declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores con cierta familiaridad o disposición favorable, pero todavía no plenamente comprometidos.
- `audiencia_caliente`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_caliente-audiencia_caliente`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_caliente-audiencia_caliente`
  - resumen: Valor audiencia_caliente declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores con alto nivel de interés, afinidad o predisposición favorable.
- `seguidores_actuales`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-seguidores_actuales-seguidores_actuales`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-seguidores_actuales-seguidores_actuales`
  - resumen: Valor seguidores_actuales declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores que ya mantienen un vínculo de seguimiento con la fuente.
- `personas_sin_conocimiento_previos`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_sin_conocimiento_previos-personas_sin_conocimiento_previos`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_sin_conocimiento_previos-personas_sin_conocimiento_previos`
  - resumen: Valor personas_sin_conocimiento_previos declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores que no conocen el tema o lo conocen muy poco.
- `personas_con_interes_previos`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_con_interes_previos-personas_con_interes_previos`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_con_interes_previos-personas_con_interes_previos`
  - resumen: Valor personas_con_interes_previos declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores que ya tienen alguna motivación o interés relacionado.
- `personas_que_no_comprenden`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_no_comprenden-personas_que_no_comprenden`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_no_comprenden-personas_que_no_comprenden`
  - resumen: Valor personas_que_no_comprenden declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores que enfrentan un problema de inteligibilidad.
- `personas_que_ya_comprenden`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_ya_comprenden-personas_que_ya_comprenden`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_ya_comprenden-personas_que_ya_comprenden`
  - resumen: Valor personas_que_ya_comprenden declarado para el campo publico_objetivo_inmediato.
  - definición: Receptores que ya entienden el tema en una medida relevante.

#### `adecuacion_lexico_formulativa`

- sección: `6.2`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa`
- tipo de valor: Compuesto
- cardinalidad: Un valor obligatorio compuesto por cinco ejes
- resumen: Campo que describe el ajuste verbal dominante de la realización en función del receptor.
- definición: Describir el ajuste verbal dominante de la realización en función del receptor. Tipo de valor: compuesto. Cardinalidad: un valor obligatorio compuesto por cinco ejes.

##### Campos internos habilitados

###### `accesibilidad_lexica`

- sección: `6.2.4`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio dentro de adecuacion_lexico_formulativa
- resumen: Eje interno que describe la accesibilidad léxica de la realización.
- definición: Tipo de valor: categorial ordinal. Describe qué tan procesable es el vocabulario para el receptor.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-baja-baja`
  - resumen: Valor baja declarado para el campo interno accesibilidad_lexica.
  - definición: El vocabulario exige mayor familiaridad previa o mayor esfuerzo interpretativo.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-media-media`
  - resumen: Valor media declarado para el campo interno accesibilidad_lexica.
  - definición: El vocabulario exige algún esfuerzo, pero sigue siendo razonablemente transitable.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-alta-alta`
  - resumen: Valor alta declarado para el campo interno accesibilidad_lexica.
  - definición: El vocabulario es fácilmente procesable por un receptor amplio.

###### `densidad_terminologica`

- sección: `6.2.2`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio dentro de adecuacion_lexico_formulativa
- resumen: Eje interno que describe la densidad terminológica de la realización.
- definición: Tipo de valor: categorial ordinal. Describe la carga de términos especializados o conceptualmente relevantes.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-baja-baja`
  - resumen: Valor baja declarado para el campo interno densidad_terminologica.
  - definición: La realización usa pocos términos especializados o cargados conceptualmente.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-media-media`
  - resumen: Valor media declarado para el campo interno densidad_terminologica.
  - definición: La realización introduce una cantidad moderada de términos relevantes sin saturar el recorrido.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-alta-alta`
  - resumen: Valor alta declarado para el campo interno densidad_terminologica.
  - definición: La realización trabaja con una carga terminológica intensa.

###### `grado_de_abstraccion`

- sección: `6.2.3`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio dentro de adecuacion_lexico_formulativa
- resumen: Eje interno que describe el grado de abstracción de la formulación.
- definición: Tipo de valor: categorial ordinal. Describe si la formulación se apoya en elementos concretos, intermedios o abstractos.

####### Valores habilitados

- `concreto`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-concreto-concreto`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-concreto-concreto`
  - resumen: Valor concreto declarado para el campo interno grado_de_abstraccion.
  - definición: La formulación se apoya en objetos, acciones, escenas o casos fácilmente imaginables.
- `intermedio`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-intermedio-intermedio`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-intermedio-intermedio`
  - resumen: Valor intermedio declarado para el campo interno grado_de_abstraccion.
  - definición: La formulación combina elementos concretos con conceptos de nivel medio.
- `abstracto`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-abstracto-abstracto`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-abstracto-abstracto`
  - resumen: Valor abstracto declarado para el campo interno grado_de_abstraccion.
  - definición: La formulación se apoya en categorías, estructuras o relaciones de mayor nivel.

###### `registro_predominante`

- sección: `6.2.1`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante`
- tipo de valor: Categorial cerrado
- cardinalidad: Eje obligatorio dentro de adecuacion_lexico_formulativa
- resumen: Eje interno que describe el registro verbal predominante de la realización.
- definición: Tipo de valor: categorial cerrado. Describe el registro verbal predominante de la realización.

####### Valores habilitados

- `coloquial_controlado`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-coloquial_controlado-coloquial_controlado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-coloquial_controlado-coloquial_controlado`
  - resumen: Valor coloquial_controlado declarado para el campo interno registro_predominante.
  - definición: Predomina una cercanía verbal compatible con uso oral, pero sin desorden o vulgarización excesiva.
- `pedagogico`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-pedagogico-pedagogico`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-pedagogico-pedagogico`
  - resumen: Valor pedagogico declarado para el campo interno registro_predominante.
  - definición: Predomina una formulación orientada a facilitar comprensión y acompañar al receptor.
- `tecnico`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-tecnico-tecnico`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-tecnico-tecnico`
  - resumen: Valor tecnico declarado para el campo interno registro_predominante.
  - definición: Predomina vocabulario especializado y formulación disciplinar.
- `analitico`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-analitico-analitico`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-analitico-analitico`
  - resumen: Valor analitico declarado para el campo interno registro_predominante.
  - definición: Predomina una formulación de distinción, precisión y descomposición conceptual.
- `institucional`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-institucional-institucional`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-institucional-institucional`
  - resumen: Valor institucional declarado para el campo interno registro_predominante.
  - definición: Predomina una formulación marcada por sobriedad organizacional, formalidad y estabilidad.
- `hibrido`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-hibrido-hibrido`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-hibrido-hibrido`
  - resumen: Valor hibrido declarado para el campo interno registro_predominante.
  - definición: Combina dos o más registros de manera controlada.

###### `variacion_lexica`

- sección: `6.2.5`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio dentro de adecuacion_lexico_formulativa
- resumen: Eje interno que describe la variación léxica de la realización.
- definición: Tipo de valor: categorial ordinal. Describe la amplitud o estabilidad del repertorio verbal desplegado.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-baja-baja`
  - resumen: Valor baja declarado para el campo interno variacion_lexica.
  - definición: La realización reutiliza repertorio verbal relativamente estable.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-media-media`
  - resumen: Valor media declarado para el campo interno variacion_lexica.
  - definición: La realización alterna formas verbales con una variación moderada.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-alta-alta`
  - resumen: Valor alta declarado para el campo interno variacion_lexica.
  - definición: La realización despliega repertorio verbal amplio y variado.

---

## 6. `dimension_construccion_del_caso`

- sección: `8`
- id: `grafo_de_regiones-grafo_dimension_construccion_del_caso`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso`
- resumen: Dimensión que describe la composición conceptual del caso y su organización narrativa dentro de la realización.
- definición: Describir la composición conceptual del caso y la forma en que ese caso se organiza narrativamente dentro de la realización.

**Estado regional:** dimensión habilitada sólo en su campo de configuración narrativa; la construcción conceptual concreta pertenece a la instancia contextual.

### Campos habilitados

#### `construccion_conceptual`

- sección: `8.1`
- id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual`
- tipo de nodo: `compound_structural_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual`
- tipo de valor: Compuesto estructural
- cardinalidad: Una colección de una o más idea_activa
- resumen: Campo que hace explícita la composición de ideas activas que sostienen la realización.
- definición: Hacer explícita la composición de ideas activas que sostienen la realización, indicando cuáles son, qué papel cumplen y cómo se articulan entre sí.

Restricciones registradas en el nodo:

- Toda instancia debe contener una o más ideas activas.
- Cada idea activa debe declarar todos sus componentes mínimos.
- Debe existir consistencia entre rol, peso, presencia y relaciones.

##### Valores habilitados

- `coleccion_de_ideas_activas`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-coleccion_de_ideas_activas`
  - definición: Valor estructural general de construccion_conceptual: una colección de una o más idea_activa.

##### Tipos estructurales habilitados

- `idea_activa`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa`
  - tipo de nodo: `structural_item_node`
  - definición: Estructura obligatoria de cada idea activa dentro de construccion_conceptual. Cada idea_activa debe declarar formulacion_de_la_idea, rol_conceptual, peso_relativo, modo_de_presencia y relaciones_con_otras_ideas.
  - campos internos obligatorios/habilitados:
    - `formulacion_de_la_idea`
      - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-formulacion_de_la_idea`
      - definición: Campo interno obligatorio de idea_activa. Su tipo de valor es categorial controlado y describe la forma de formulación conceptual de la idea.
      - valores habilitados:
        - `formulacion_abierta_controlada` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-formulacion_de_la_idea-formulacion_abierta_controlada-formulacion_abierta_controlada`
        - `proposicion_argumentativa` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-formulacion_de_la_idea-proposicion_argumentativa-proposicion_argumentativa`
        - `proposicion_definicional` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-formulacion_de_la_idea-proposicion_definicional-proposicion_definicional`
        - `proposicion_operativa` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-formulacion_de_la_idea-proposicion_operativa-proposicion_operativa`
        - `proposicion_relacional` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-formulacion_de_la_idea-proposicion_relacional-proposicion_relacional`
    - `modo_de_presencia`
      - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-modo_de_presencia`
      - definición: Campo interno obligatorio de idea_activa. Su tipo de valor es categorial cerrado y describe el modo de presencia de la idea.
      - valores habilitados:
        - `explicita` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-modo_de_presencia-explicita-explicita`
        - `explicita_reiterada` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-modo_de_presencia-explicita_reiterada-explicita_reiterada`
        - `implicita_estructurante` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-modo_de_presencia-implicita_estructurante-implicita_estructurante`
        - `localizada` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-modo_de_presencia-localizada-localizada`
        - `transversal` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-modo_de_presencia-transversal-transversal`
    - `peso_relativo`
      - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-peso_relativo`
      - definición: Este campo expresa el peso estructural relativo de la idea dentro del conjunto. No es una categoría verbal cerrada, sino una graduación que permite jerarquizar ideas activas.
    - `relaciones_con_otras_ideas`
      - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas`
      - definición: Colección estructurada de relaciones formuladas. Cardinalidad: cero o más relaciones por idea activa. Sus componentes mínimos son idea*relacionada, tipo_de_relacion y descripcion*…
      - subcampos internos:
        - `descripcion_de_la_relacion` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-descripcion_de_la_relacion`
        - `idea_relacionada` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-idea_relacionada`
        - `tipo_de_relacion` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion`
          - valores habilitados:
            - `articulacion_libre_controlada` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-articulacion_libre_controlada-articulacion_libre_controlada`
            - `condicion` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-condicion-condicion`
            - `consecuencia` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-consecuencia-consecuencia`
            - `contraste` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-contraste-contraste`
            - `equivalencia_parcial` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-equivalencia_parcial-equivalencia_parcial`
            - `expansion` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-expansion-expansion`
            - `soporte` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-soporte-soporte`
            - `subordinacion` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-relaciones_con_otras_ideas-tipo_de_relacion-subordinacion-subordinacion`
    - `rol_conceptual`
      - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-rol_conceptual`
      - definición: Campo interno obligatorio de idea_activa. Su tipo de valor es categorial cerrado y describe el rol conceptual de la idea.
      - valores habilitados:
        - `complementaria` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-rol_conceptual-complementaria-complementaria`
        - `contrastiva` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-rol_conceptual-contrastiva-contrastiva`
        - `derivada` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-rol_conceptual-derivada-derivada`
        - `nuclear` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-rol_conceptual-nuclear-nuclear`
        - `puente` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-idea_activa-rol_conceptual-puente-puente`

#### `configuracion_narrativa`

- sección: `8.2`
- id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa`
- tipo de valor: Categorial controlado
- cardinalidad: Un valor obligatorio
- resumen: Campo que describe cómo se organiza el recorrido interno de la realización.
- definición: Describir cómo se organiza el recorrido interno de la realización.

##### Valores habilitados

- `modular`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-modular-modular`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-modular-modular`
  - resumen: Valor modular declarado para configuracion_narrativa.
  - definición: El recorrido se organiza en módulos relativamente autónomos, aunque conectados.
- `acumulativa`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-acumulativa-acumulativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-acumulativa-acumulativa`
  - resumen: Valor acumulativa declarado para configuracion_narrativa.
  - definición: El recorrido avanza por suma sucesiva de capas, aportes o bloques.
- `contrastiva`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-contrastiva-contrastiva`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-contrastiva-contrastiva`
  - resumen: Valor contrastiva declarado para configuracion_narrativa.
  - definición: El recorrido progresa mediante oposición, comparación o tensión entre partes.
- `lineal_progresiva`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-lineal_progresiva-lineal_progresiva`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-lineal_progresiva-lineal_progresiva`
  - resumen: Valor lineal_progresiva declarado para configuracion_narrativa.
  - definición: El recorrido avanza de forma continua desde un punto de inicio hacia un desarrollo posterior, sin grandes retrocesos ni reordenamientos.
- `recapitulativa`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-recapitulativa-recapitulativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-recapitulativa-recapitulativa`
  - resumen: Valor recapitulativa declarado para configuracion_narrativa.
  - definición: El recorrido incorpora reformulaciones o recuperaciones internas del trayecto.
- `apertura_profundizacion_cierre`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-apertura_profundizacion_cierre-apertura_profundizacion_cierre`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-apertura_profundizacion_cierre-apertura_profundizacion_cierre`
  - resumen: Valor apertura_profundizacion_cierre declarado para configuracion_narrativa.
  - definición: La realización presenta una apertura distinguible, un desarrollo de profundización y un cierre reconocible.

---

## 7. `dimension_comparecencia_performativa`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-dimension_comparecencia_performativa`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-dimension_comparecencia_performativa`
- resumen: Dimensión que describe cómo comparece la pieza como presencia verbal, corporal y performativa.
- definición: Describir cómo comparece la pieza como presencia verbal, corporal y performativa, indicando cómo suena, cómo se presenta, cuánto depende de la ejecución visible y en qué grado necesita explicitación escénica. Esta dimensión no describe todavía recursos complementarios externos como imágenes, videos o texto de apoyo generados, pero sí regula la forma en que la pieza debe ser realizada por un emisor visible o audible.

**Estado regional:** dimensión habilitada de forma restringida mediante `rama_visual_editorial`; no se habilitan campos de performance visible, oralidad, escena o encuadre audiovisual.

### Campos habilitados

#### `rama_visual_editorial`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: La `rama_visual_editorial` agrupa campos que describen cómo comparece visualmente un carousel: tono, titulares, densidad textual, jerarquía gráfica, presencia de marca, iconografía y estilo compositivo.
- definición: La `rama_visual_editorial` agrupa campos que describen cómo comparece visualmente un carousel: tono, titulares, densidad textual, jerarquía gráfica, presencia de marca, iconografía y estilo compositivo.

**Nota regional para carousel:** En esta región se habilita únicamente la rama visual-editorial de comparecencia. No se habilitan los campos audiovisuales, orales, escénicos o performativos propios de video corto.

##### Campos internos habilitados

###### `tono_editorial`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe el tono general con el que la pieza comparece como objeto visual-editorial.
- definición: Tipo de valor: categorial controlado. Campo interno de rama_visual_editorial que describe la actitud editorial dominante con la que la pieza comparece visual y verbalmente ante el receptor.

No equivale al registro léxico ni a la función pragmática; orienta la manera en que el carousel se presenta como objeto editorial: más pedagógico, analítico, divulgativo, técnico, provocador o comercial. Sirve para que los titulares, la densidad textual, la jerarquía gráfica y los recursos visuales mantengan una presencia coherente.

Ejemplos de uso: pedagogico_directo enseña de forma clara; analitico_sobrio mantiene una lectura seria y estructurada; divulgativo_claro vuelve accesible una idea compleja; tecnico_controlado admite especialización sin perder legibilidad; provocador_controlado abre tensión interpretativa sin exageración vacía; comercial_sutil orienta hacia conversión o acción sin volver la pieza agresivamente publicitaria.

####### Valores habilitados

- `pedagogico_directo`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-pedagogico_directo-pedagogico_directo`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-pedagogico_directo-pedagogico_directo`
  - resumen: Valor que orienta la pieza hacia una explicación clara, didáctica y sin rodeos.
  - definición: Valor que orienta la pieza hacia una explicación clara, didáctica y sin rodeos.

    El carousel adopta un tono de enseñanza práctica: define, separa, ordena o guía al receptor sin exceso ornamental.

    Ejemplos:

    ```txt
    “Esto es lo que significa estrategia.”
    “Primero entiende esta diferencia.”
    “Usa esta estructura para ordenar tu idea.”
    ```

    Sirve para carruseles educativos, guías rápidas, aclaraciones conceptuales y piezas que buscan comprensión inmediata.

- `analitico_sobrio`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-analitico_sobrio-analitico_sobrio`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-analitico_sobrio-analitico_sobrio`
  - resumen: Valor que orienta la pieza hacia una lectura seria, estructurada y de baja espectacularidad emocional.
  - definición: Valor que orienta la pieza hacia una lectura seria, estructurada y de baja espectacularidad emocional.

    El carousel aparece como una herramienta de análisis: distingue capas, relaciones, condiciones o consecuencias sin depender de exageración visual.

    Ejemplos:

    ```txt
    “Hay tres niveles en esta decisión.”
    “Lo visible no explica toda la estrategia.”
    “Este caso se entiende mejor si separas función y forma.”
    ```

    Sirve para autoridad conceptual, análisis de casos, explicación estratégica y contenidos con tono experto.

- `divulgativo_claro`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-divulgativo_claro-divulgativo_claro`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-divulgativo_claro-divulgativo_claro`
  - resumen: Valor que orienta la pieza hacia la explicación accesible de una idea que podría ser compleja.
  - definición: Valor que orienta la pieza hacia la explicación accesible de una idea que podría ser compleja.

    No reduce la estructura conceptual, pero la presenta con lenguaje sencillo, ejemplos claros y progresión amable.

    Ejemplos:

    ```txt
    “Una forma simple de entenderlo es esta.”
    “Piensa en esto como un mapa.”
    “Si lo vemos por partes, se vuelve claro.”
    ```

    Sirve para audiencias frías o tibias, piezas introductorias y carousels que buscan abrir acceso a un tema.

- `tecnico_controlado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-tecnico_controlado-tecnico_controlado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-tecnico_controlado-tecnico_controlado`
  - resumen: Valor que permite usar lenguaje especializado, pero con control de densidad y legibilidad.
  - definición: Valor que permite usar lenguaje especializado, pero con control de densidad y legibilidad.

    El carousel puede incluir términos técnicos, categorías o distinciones formales, siempre que estén organizadas de manera visualmente procesable.

    Ejemplos:

    ```txt
    “Función dominante.”
    “Acoplamiento receptoral.”
    “Manifestación codominial.”
    ```

    Sirve para audiencias con conocimiento previo, documentación operativa, sistemas conceptuales y piezas destinadas a usuarios internos o avanzados.

- `provocador_controlado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-provocador_controlado-provocador_controlado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-provocador_controlado-provocador_controlado`
  - resumen: Valor que orienta el carousel hacia una apertura con tensión, contraste o desafío interpretativo, sin caer en exageración vacía.
  - definición: Valor que orienta el carousel hacia una apertura con tensión, contraste o desafío interpretativo, sin caer en exageración vacía.

    La provocación está subordinada a una estructura conceptual: se usa para activar atención, no para reemplazar el contenido.

    Ejemplos:

    ```txt
    “Tu contenido no falla por falta de ideas.”
    “Publicar más no significa tener una estrategia.”
    “La mayoría confunde atención con valor.”
    ```

    Sirve para captación, reestructuración interpretativa, contraste fuerte y piezas que necesitan romper una lectura común.

- `comercial_sutil`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-comercial_sutil-comercial_sutil`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-comercial_sutil-comercial_sutil`
  - resumen: Valor que permite orientar el carousel hacia una acción de valor o conversión, pero sin volverlo agresivamente publicitario.
  - definición: Valor que permite orientar el carousel hacia una acción de valor o conversión, pero sin volverlo agresivamente publicitario.

    El énfasis está en mostrar utilidad, transformación o posibilidad de profundización antes que en vender de forma directa.

    Ejemplos:

    ```txt
    “Guarda este mapa para diseñar tu próxima pieza.”
    “Si quieres la plantilla, comenta ‘estructura’.”
    “Esto es solo la capa visible del sistema.”
    ```

    Sirve para conversión relacional, CTA suave, captación de leads, cursos, prompts, plantillas o continuidad hacia otra pieza.

###### `estilo_de_titulares`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe la forma predominante de los titulares usados para abrir, orientar o tensionar la lectura.
- definición: Tipo de valor: categorial controlado. Campo interno de rama_visual_editorial que determina la forma dominante de los titulares usados para abrir, conducir o segmentar la lectura de una realización carousel.

No fija el titular concreto de cada lámina; fija la estrategia formal mediante la cual el titular activa atención, plantea tensión, promete comprensión, ordena una lista, formula una tesis o condensa una idea memorable. Sirve para orientar la entrada cognitiva del receptor antes de que el protocolo distribuya el contenido específico.

Ejemplos de uso: pregunta_directa abre una interrogación explícita; promesa_de_comprension anuncia que la pieza aclarará algo; contraste_conceptual opone dos nociones; afirmacion_tesis presenta una posición; advertencia señala un riesgo o error; lista_numerada ordena una cantidad cerrada de elementos; formula_memorable convierte la idea en una expresión breve y recordable.

####### Valores habilitados

- `pregunta_directa`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-pregunta_directa-pregunta_directa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-pregunta_directa-pregunta_directa`
  - resumen: Valor en el que el titular se formula como una pregunta clara que activa reflexión o curiosidad.
  - definición: Valor en el que el titular se formula como una pregunta clara que activa reflexión o curiosidad.

    La pregunta debe abrir una tensión concreta, no ser decorativa.

    Ejemplos:

    ```txt
    “¿Qué función cumple esta pieza?”
    “¿Tu audiencia entiende o solo mira?”
    “¿Estás publicando contenido o diseñando una arquitectura?”
    ```

    Sirve para portadas, transiciones, cierres reflexivos y láminas que buscan detener el desplazamiento.

- `promesa_de_comprension`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-promesa_de_comprension-promesa_de_comprension`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-promesa_de_comprension-promesa_de_comprension`
  - resumen: Valor en el que el titular promete que el receptor entenderá algo de forma más clara después de recorrer el carousel.
  - definición: Valor en el que el titular promete que el receptor entenderá algo de forma más clara después de recorrer el carousel.

    No promete solo información; promete reorganización cognitiva.

    Ejemplos:

    ```txt
    “Después de esto entenderás por qué tu contenido no convierte.”
    “Una forma simple de entender la diferencia entre tema y función.”
    “Este mapa te ayudará a ordenar tus ideas.”
    ```

    Sirve para carruseles educativos, sintéticos, explicativos o de clarificación conceptual.

- `contraste_conceptual`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-contraste_conceptual-contraste_conceptual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-contraste_conceptual-contraste_conceptual`
  - resumen: Valor en el que el titular se construye mediante oposición entre dos conceptos, prácticas o interpretaciones.
  - definición: Valor en el que el titular se construye mediante oposición entre dos conceptos, prácticas o interpretaciones.

    La fuerza del titular está en hacer visible una diferencia que suele confundirse.

    Ejemplos:

    ```txt
    “Tema vs función.”
    “Publicar contenido vs diseñar sistema.”
    “Imagen bonita vs lámina operativa.”
    ```

    Sirve para reestructuración interpretativa, comparación, desmontaje de mitos y distinciones estratégicas.

- `afirmacion_tesis`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-afirmacion_tesis-afirmacion_tesis`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-afirmacion_tesis-afirmacion_tesis`
  - resumen: Valor en el que el titular presenta una tesis clara que el carousel desarrollará o demostrará.
  - definición: Valor en el que el titular presenta una tesis clara que el carousel desarrollará o demostrará.

    La primera lámina no pregunta: afirma una posición interpretativa.

    Ejemplos:

    ```txt
    “El contenido efectivo no empieza con ideas.”
    “Un carousel es una secuencia de decisiones cognitivas.”
    “La atención solo vale si se convierte en continuidad.”
    ```

    Sirve para piezas argumentativas, posicionamiento epistémico, autoridad conceptual y análisis sobrio.

- `advertencia`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-advertencia-advertencia`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-advertencia-advertencia`
  - resumen: Valor en el que el titular avisa sobre un error, riesgo, confusión o consecuencia negativa.
  - definición: Valor en el que el titular avisa sobre un error, riesgo, confusión o consecuencia negativa.

    La advertencia debe estar conectada con una explicación posterior, no quedarse en alarma vacía.

    Ejemplos:

    ```txt
    “No diseñes tu carousel así.”
    “Este error hace que tu audiencia abandone.”
    “Cuidado: más información no significa más claridad.”
    ```

    Sirve para captación, prevención, corrección de errores y piezas orientadas a mejorar práctica.

- `lista_numerada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-lista_numerada-lista_numerada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-lista_numerada-lista_numerada`
  - resumen: Valor en el que el titular anuncia una cantidad cerrada de elementos, pasos, errores, señales o niveles.
  - definición: Valor en el que el titular anuncia una cantidad cerrada de elementos, pasos, errores, señales o niveles.

    La numeración promete orden y facilita el recorrido laminar.

    Ejemplos:

    ```txt
    “5 errores al diseñar un carousel.”
    “3 niveles de una estrategia.”
    “7 señales de que tu contenido no tiene función.”
    ```

    Sirve para carruseles guardables, pedagógicos, operativos y de consumo rápido.

- `formula_memorable`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-formula_memorable-formula_memorable`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-formula_memorable-formula_memorable`
  - resumen: Valor en el que el titular se presenta como una fórmula conceptual breve y recordable.
  - definición: Valor en el que el titular se presenta como una fórmula conceptual breve y recordable.

    No necesariamente es matemática; puede expresar una relación estructural entre componentes.

    Ejemplos:

    ```txt
    “Contenido efectivo = atención + claridad + acción.”
    “Carousel = secuencia + progresión + cierre.”
    “Autoridad = distinción + precisión + consistencia.”
    ```

    Sirve para memorabilidad simbólica, síntesis, posicionamiento conceptual y cierre fuerte.

###### `densidad_textual_visible`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe cuánta información textual aparece visualmente en la composición editorial.
- definición: Tipo de valor: categorial ordinal controlado. Campo interno de rama_visual_editorial que regula la cantidad de texto visible que puede aparecer en cada lámina de una realización carousel.

No determina todavía el texto concreto de la lámina; determina el margen de carga textual que el protocolo podrá usar al distribuir la construcción conceptual. Sirve para decidir si la pieza debe apoyarse en frases nucleares, explicaciones breves, bloques textuales más densos o variación controlada entre láminas.

Ejemplos de uso: una densidad baja favorece titulares, preguntas y frases centrales; una densidad media permite explicación breve con apoyo visual; una densidad alta admite desarrollo textual más compacto; una densidad variable_controlada permite alternar láminas ligeras con láminas de mayor explicación cuando la arquitectura del carousel lo requiere.

####### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-baja-baja`
  - resumen: Valor que indica que cada lámina debe contener poco texto visible.
  - definición: Valor que indica que cada lámina debe contener poco texto visible.

    La pieza prioriza lectura rápida, impacto visual, frases nucleares o preguntas breves.

    Ejemplos:

    ```txt
    “Tema no es función.”
    “Primero captura. Luego organiza.”
    “¿Qué debe cambiar?”
    ```

    Sirve para audiencias frías, portadas, contrastes visuales, pausas reflexivas o carruseles muy visuales.

- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-media-media`
  - resumen: Valor que indica una cantidad moderada de texto por lámina.
  - definición: Valor que indica una cantidad moderada de texto por lámina.

    Permite explicar una idea con una frase principal y una frase de soporte sin saturar la composición.

    Ejemplo:

    ```txt
    Titular: “El problema no es la falta de ideas.”
    Apoyo: “El problema es no saber qué función debe cumplir cada pieza.”
    ```

    Sirve para la mayoría de carruseles educativos, analíticos y de síntesis.

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-alta-alta`
  - resumen: Valor que permite una mayor carga textual por lámina.
  - definición: Valor que permite una mayor carga textual por lámina.

    Debe usarse con cuidado: requiere jerarquía clara, separación visual y una audiencia dispuesta a leer más.

    Ejemplo:

    ```txt
    Una lámina que explica una distinción con definición, ejemplo breve y consecuencia.
    ```

    Sirve para audiencias tibias o calientes, contenido técnico, documentos visuales y carruseles de profundización.

- `variable_controlada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-variable_controlada-variable_controlada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-variable_controlada-variable_controlada`
  - resumen: Valor que permite variar la densidad textual entre láminas, pero siguiendo una lógica explícita.
  - definición: Valor que permite variar la densidad textual entre láminas, pero siguiendo una lógica explícita.

    Por ejemplo: portada de baja densidad, desarrollo de densidad media, lámina técnica de densidad alta y cierre de baja densidad.

    Ejemplo:

    ```txt
    Lámina 1: frase breve.
    Lámina 2-4: explicación media.
    Lámina 5: matriz más densa.
    Lámina 6: CTA breve.
    ```

    Sirve para carousels que combinan captación, explicación, herramienta y cierre.

###### `jerarquia_grafica`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe qué elemento organiza visualmente la lámina: titular, texto, imagen, diagrama o estructura mixta.
- definición: Tipo de valor: categorial controlado. Campo interno de rama_visual_editorial que define qué elemento organiza la prioridad visual de la lámina o de la secuencia laminar.

No indica aún el diseño concreto, pero sí establece qué tipo de elemento debe recibir mayor peso perceptivo: titular, texto, imagen, diagrama o combinación mixta. Sirve para evitar que la composición compita consigo misma y para que cada lámina tenga una lectura dominante reconocible.

Ejemplos de uso: titular_dominante coloca la frase principal como eje de lectura; texto_visual_balanceado reparte peso entre formulación verbal y estructura visual; imagen_dominante_texto_secundario permite que la escena o símbolo conduzca la recepción; diagrama_dominante hace que la estructura gráfica sea el núcleo explicativo; estructura_mixta_controlada combina varios elementos sin perder orden jerárquico.

####### Valores habilitados

- `titular_dominante`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-titular_dominante-titular_dominante`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-titular_dominante-titular_dominante`
  - resumen: Valor en el que el titular ocupa la mayor jerarquía visual de la lámina.
  - definición: Valor en el que el titular ocupa la mayor jerarquía visual de la lámina.

    El resto de elementos, si existen, funcionan como soporte.

    Ejemplos:

    ```txt
    Titular grande al centro.
    Subtítulo breve debajo.
    Icono o fondo simbólico secundario.
    ```

    Sirve para portadas, cierres, preguntas guía, contraste fuerte y láminas de alto impacto.

- `texto_visual_balanceado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-texto_visual_balanceado-texto_visual_balanceado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-texto_visual_balanceado-texto_visual_balanceado`
  - resumen: Valor en el que texto e imagen comparten peso compositivo.
  - definición: Valor en el que texto e imagen comparten peso compositivo.

    La lámina no se apoya solo en frase ni solo en imagen: ambos elementos colaboran en la comprensión.

    Ejemplos:

    ```txt
    Mitad izquierda: frase central.
    Mitad derecha: símbolo, escena o diagrama simple.
    ```

    Sirve para explicación visual, ejemplos, metáforas, casos y secuencias educativas.

- `imagen_dominante_texto_secundario`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-imagen_dominante_texto_secundario-imagen_dominante_texto_secundario`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-imagen_dominante_texto_secundario-imagen_dominante_texto_secundario`
  - resumen: Valor en el que la imagen o escena ocupa el peso principal de la lámina, mientras el texto guía la interpretación.
  - definición: Valor en el que la imagen o escena ocupa el peso principal de la lámina, mientras el texto guía la interpretación.

    La imagen no es decoración: crea contexto, emoción o metáfora.

    Ejemplos:

    ```txt
    Imagen de una puerta abierta + frase breve.
    Persona frente a varias rutas + pregunta.
    Ciudad como red + interpretación.
    ```

    Sirve para activación emocional, metáfora visual, escena conceptual y memorabilidad.

- `diagrama_dominante`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-diagrama_dominante-diagrama_dominante`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-diagrama_dominante-diagrama_dominante`
  - resumen: Valor en el que la estructura visual principal es un diagrama, flujo, matriz, mapa, tabla o esquema.
  - definición: Valor en el que la estructura visual principal es un diagrama, flujo, matriz, mapa, tabla o esquema.

    El texto funciona como etiqueta o explicación mínima.

    Ejemplos:

    ```txt
    Flowchart de decisión.
    Matriz 2x2.
    Embudo.
    Mapa conceptual.
    ```

    Sirve para contenido operable, clasificación, diagnóstico, metodología y comprensión rápida de sistemas.

- `estructura_mixta_controlada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-estructura_mixta_controlada-estructura_mixta_controlada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-estructura_mixta_controlada-estructura_mixta_controlada`
  - resumen: Valor en el que se combinan varios recursos visuales y textuales con una jerarquía definida.
  - definición: Valor en el que se combinan varios recursos visuales y textuales con una jerarquía definida.

    No es mezcla libre: cada componente debe cumplir una función reconocible.

    Ejemplos:

    ```txt
    Titular + mini-diagrama + ejemplo breve.
    Pregunta + matriz + CTA.
    Tabla + flecha + conclusión.
    ```

    Sirve para carousels más complejos que integran explicación, herramienta y cierre operativo.

###### `presencia_de_marca`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe el grado en que la marca aparece como componente visible de la composición.
- definición: Tipo de valor: categorial ordinal controlado. Campo interno de rama_visual_editorial que describe el grado en que la marca, identidad visual, firma, estilo propietario o sistema reconocible del emisor aparece dentro de la pieza.

No define una marca concreta ni determina elementos gráficos específicos; regula el nivel de visibilidad de la marca dentro de la composición. Sirve para diferenciar piezas neutras, piezas discretamente identificables, piezas claramente asociadas a una identidad y piezas donde la marca estructura la apariencia general.

Ejemplos de uso: ausente permite una pieza sin huella explícita de marca; minima admite firma, color o marca de agua discreta; moderada permite consistencia visual reconocible sin dominar el contenido; dominante hace que la identidad de marca organice fuertemente la forma, el estilo y la lectura de la pieza.

####### Valores habilitados

- `ausente`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-ausente-ausente`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-ausente-ausente`
  - resumen: Valor en el que la pieza no incluye elementos explícitos de marca.
  - definición: Valor en el que la pieza no incluye elementos explícitos de marca.

    No hay logo, firma, paleta reconocible ni señal visual de identidad institucional.

    Sirve para piezas neutras, documentos internos, pruebas de estructura o contenidos donde se prioriza la idea sobre la identidad visual.

- `minima`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-minima-minima`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-minima-minima`
  - resumen: Valor en el que la marca aparece de forma discreta.
  - definición: Valor en el que la marca aparece de forma discreta.

    Puede incluir una firma pequeña, un nombre de cuenta, un color reconocible o una marca secundaria al final.

    Ejemplos:

    ```txt
    Logo pequeño en esquina.
    Firma en última lámina.
    Color de marca usado con baja intensidad.
    ```

    Sirve para mantener reconocimiento sin interferir con la lectura.

- `moderada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-moderada-moderada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-moderada-moderada`
  - resumen: Valor en el que la marca participa de forma visible pero no domina la pieza.
  - definición: Valor en el que la marca participa de forma visible pero no domina la pieza.

    Puede haber consistencia de paleta, estilo tipográfico, firma recurrente y elementos visuales propios.

    Sirve para contenido público, marca personal, perfiles digitales y sistemas de contenido donde la identidad visual importa.

- `dominante`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-dominante-dominante`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-dominante-dominante`
  - resumen: Valor en el que la marca organiza fuertemente la apariencia de la pieza.
  - definición: Valor en el que la marca organiza fuertemente la apariencia de la pieza.

    La estética, colores, firma, sistema gráfico o identidad institucional son claramente reconocibles.

    Sirve para campañas, contenido corporativo, lanzamientos, material promocional o piezas donde el reconocimiento de marca es objetivo central.

###### `regimen_de_iconografia`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe el uso de iconos o signos gráficos como sistema de apoyo visual.
- definición: Tipo de valor: categorial controlado. Campo interno de rama_visual_editorial que determina si la realización carousel usa iconos y qué función cumplen dentro de la lectura visual.

No selecciona iconos concretos ni sustituye el recurso visual de cada lámina; establece el grado de participación de la iconografía como apoyo, guía, sistema de señalización o estructura recurrente. Sirve para decidir si los iconos deben estar ausentes, aparecer puntualmente, ordenar funciones o sostener una gramática visual constante.

Ejemplos de uso: sin_iconografia evita iconos como parte de la composición; iconografia_minima usa pocos signos visuales para acompañar; iconografia_funcional emplea iconos para señalar pasos, categorías, alertas o acciones; iconografia_sistematica convierte la iconografía en un sistema visual repetible a lo largo del carousel.

####### Valores habilitados

- `sin_iconografia`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-sin_iconografia-sin_iconografia`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-sin_iconografia-sin_iconografia`
  - resumen: Valor en el que no se usan iconos como parte de la composición.
  - definición: Valor en el que no se usan iconos como parte de la composición.

    La pieza se sostiene en texto, imagen, fotografía, diagrama o composición tipográfica sin sistema icónico.

    Sirve para estilos sobrios, editoriales, minimalistas o conceptuales.

- `iconografia_minima`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_minima-iconografia_minima`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_minima-iconografia_minima`
  - resumen: Valor en el que se usan pocos iconos, de forma puntual.
  - definición: Valor en el que se usan pocos iconos, de forma puntual.

    Los iconos ayudan a señalar, separar o reforzar una idea, pero no estructuran toda la pieza.

    Ejemplos:

    ```txt
    Un icono de alerta.
    Una flecha simple.
    Un marcador visual para cada punto.
    ```

    Sirve para mantener claridad sin sobrecargar la composición.

- `iconografia_funcional`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_funcional-iconografia_funcional`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_funcional-iconografia_funcional`
  - resumen: Valor en el que los iconos cumplen una función operativa en la lectura.
  - definición: Valor en el que los iconos cumplen una función operativa en la lectura.

    Ayudan a clasificar, indicar pasos, marcar rutas, diferenciar tipos o guiar la navegación visual.

    Ejemplos:

    ```txt
    Iconos distintos para problema, causa y acción.
    Flechas para proceso.
    Símbolos para opciones de decisión.
    ```

    Sirve para carruseles educativos, métodos, listas estructuradas y diagramas simples.

- `iconografia_sistematica`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_sistematica-iconografia_sistematica`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_sistematica-iconografia_sistematica`
  - resumen: Valor en el que la iconografía forma un sistema visual recurrente a lo largo de todo el carousel.
  - definición: Valor en el que la iconografía forma un sistema visual recurrente a lo largo de todo el carousel.

    Los iconos no aparecen de forma aislada: tienen reglas de uso, significado constante y relación con la estructura de la pieza.

    Ejemplos:

    ```txt
    Cada tipo de lámina tiene un icono fijo.
    Cada categoría usa un símbolo recurrente.
    Cada fase del proceso tiene una marca visual propia.
    ```

    Sirve para sistemas de contenido, series, piezas metodológicas y carousels con arquitectura visual compleja.

###### `estilo_de_composicion_visual`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual`
- tipo de nodo: `subfield_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Subcampo que describe la lógica compositiva dominante de la pieza visual-editorial.
- definición: Tipo de valor: categorial controlado. Campo interno de rama_visual_editorial que describe el régimen compositivo dominante con el que la pieza se presenta visualmente como secuencia laminar.

No define el contenido conceptual ni sustituye la selección de recursos visuales; define la lógica de organización visual que debe guiar la disposición de texto, imagen, espacio, contraste, iconografía, diagrama o estructura editorial. Sirve para que el protocolo mantenga una comparecencia visual coherente a lo largo del carousel.

Ejemplos de uso: limpio_minimal prioriza lectura inmediata y poco ruido visual; editorial_sobrio aproxima la pieza a un documento o ensayo visual; didactico_visual ordena la composición para enseñar; conceptual_simbolico representa ideas abstractas mediante imágenes o metáforas; infografico integra información, flechas, categorías o procesos; contraste_fuerte organiza la lámina mediante oposición visual clara.

####### Valores habilitados

- `limpio_minimal`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-limpio_minimal-limpio_minimal`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-limpio_minimal-limpio_minimal`
  - resumen: Valor que prioriza pocos elementos, mucho espacio visual y lectura inmediata.
  - definición: Valor que prioriza pocos elementos, mucho espacio visual y lectura inmediata.

    La composición evita saturación y reduce ornamento.

    Ejemplos:

    ```txt
    Fondo claro.
    Titular central.
    Un solo elemento gráfico.
    Pocas palabras por lámina.
    ```

    Sirve para claridad, elegancia, lectura rápida y contenidos donde la idea necesita respirar.

- `editorial_sobrio`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-editorial_sobrio-editorial_sobrio`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-editorial_sobrio-editorial_sobrio`
  - resumen: Valor que adopta una apariencia cercana a una publicación editorial, ensayo visual o documento analítico.
  - definición: Valor que adopta una apariencia cercana a una publicación editorial, ensayo visual o documento analítico.

    Puede usar tipografía marcada, composición ordenada, bloques de texto y jerarquía refinada.

    Sirve para autoridad, análisis, contenido institucional, pensamiento estratégico y perfiles de tono serio.

- `didactico_visual`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-didactico_visual-didactico_visual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-didactico_visual-didactico_visual`
  - resumen: Valor que organiza la lámina para enseñar algo de manera clara.
  - definición: Valor que organiza la lámina para enseñar algo de manera clara.

    Usa jerarquías, separaciones, ejemplos, flechas, numeraciones o apoyos visuales para facilitar comprensión.

    Ejemplos:

    ```txt
    Paso 1 / Paso 2 / Paso 3.
    Definición + ejemplo.
    Error + corrección.
    ```

    Sirve para educación, tutoriales, explicaciones y contenido guardable.

- `conceptual_simbolico`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-conceptual_simbolico-conceptual_simbolico`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-conceptual_simbolico-conceptual_simbolico`
  - resumen: Valor que usa imágenes, metáforas o símbolos para representar ideas abstractas.
  - definición: Valor que usa imágenes, metáforas o símbolos para representar ideas abstractas.

    La composición no solo explica: intenta hacer visible una estructura conceptual mediante imagen simbólica.

    Ejemplos:

    ```txt
    Puente = mediación.
    Laberinto = confusión.
    Raíz = núcleo.
    Máquina = sistema.
    ```

    Sirve para memorabilidad, identidad conceptual, activación emocional y contenido más interpretativo.

- `infografico`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-infografico-infografico`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-infografico-infografico`
  - resumen: Valor que combina información, estructura visual, iconos, flechas, datos, categorías o procesos.
  - definición: Valor que combina información, estructura visual, iconos, flechas, datos, categorías o procesos.

    La lámina se comporta como una mini-infografía o parte de una infografía mayor.

    Ejemplos:

    ```txt
    Anatomía de una estrategia.
    Embudo de conversión.
    Mapa de una pieza de contenido.
    Componentes de un perfil digital.
    ```

    Sirve para claridad, utilidad práctica, explicación de sistemas y alta guardabilidad.

- `contraste_fuerte`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-contraste_fuerte-contraste_fuerte`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-contraste_fuerte-contraste_fuerte`
  - resumen: Valor que organiza la composición mediante oposición visual clara.
  - definición: Valor que organiza la composición mediante oposición visual clara.

    Puede usar división de pantalla, colores contrastantes, columnas opuestas o diferencias tipográficas fuertes.

    Ejemplos:

    ```txt
    Antes / Después.
    Tema / Función.
    Superficial / Profundo.
    Publicar / Diseñar.
    ```

    Sirve para captación rápida, reestructuración interpretativa y láminas de comparación.

---

## 8. `dimension_marco_de_materializacion`

- sección: `10`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-dimension_marco_de_materializacion`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-dimension_marco_de_materializacion`
- resumen: Describir la clase general de salida y el marco material en el que esa salida pertenece al codominio.
- definición: Describir la clase general de salida y el marco material en el que esa salida pertenece al codominio.

**Estado regional:** dimensión habilitada para declarar la clase laminar visual y permitir selección de plataforma/aplicación sin crear regiones separadas.

### Campos habilitados

#### `clase_de_materializacion`

- sección: `10.1`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion`
- tipo de valor: Categorial cerrado.
- cardinalidad: Un valor obligatorio.
- resumen: Describir la clase de materialización textual válida para la realización.
- definición: Describir la clase de materialización textual válida para la realización. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio.

**Nota regional para carousel:** Este campo queda regionalmente fijado en `secuencia_laminar_visual`, porque define la materialidad mínima de la realización carousel.

##### Valores habilitados

- `secuencia_laminar_visual`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion-secuencia_laminar_visual-secuencia_laminar_visual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion-secuencia_laminar_visual-secuencia_laminar_visual`
  - resumen: Valor que fija la materialidad propia de `carousel/`: una salida compuesta por láminas visuales organizadas en secuencia.
  - definición: Valor que fija la materialidad propia de `carousel/`: una salida compuesta por láminas visuales organizadas en secuencia.

    No equivale a video, hilo o documento largo. Su unidad compositiva dominante es la lámina.

    Ejemplo de uso:

    ```txt
    clase_de_materializacion: secuencia_laminar_visual
    ```

    Sirve para declarar que el protocolo debe producir una pieza laminar visual-textual, no un guion audiovisual ni un texto corrido.

#### `plataforma`

- sección: `10.2`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma`
- tipo de valor: Categorial cerrado.
- cardinalidad: Un valor obligatorio.
- resumen: Describir el entorno de plataforma para el que se construye la salida.
- definición: Describir el entorno de plataforma para el que se construye la salida. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio.

**Nota regional para carousel:** Este campo queda habilitado como selección contextual. La región no se divide por plataforma; la plataforma se elige dentro del espacio permitido.

##### Valores habilitados

- `instagram`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-instagram-instagram`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-instagram-instagram`
  - resumen: Valor que indica que la manifestación será adaptada para publicación en Instagram.
  - definición: Valor que indica que la manifestación será adaptada para publicación en Instagram.

    No crea una región distinta; solo informa al protocolo que debe respetar condiciones, estilo y expectativas propias de esa plataforma.

    Sirve para carousels visuales, educativos, de marca personal, divulgativos, guardables o de interacción social.

- `tiktok`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-tiktok-tiktok`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-tiktok-tiktok`
  - resumen: Valor declarado para el campo plataforma: tiktok.
  - definición: La salida pertenece al entorno TikTok, con las restricciones y expectativas materiales asociadas a esa plataforma.
- `linkedin`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-linkedin-linkedin`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-linkedin-linkedin`
  - resumen: Valor que indica que la manifestación será adaptada a un entorno profesional, educativo, técnico o institucional.
  - definición: Valor que indica que la manifestación será adaptada a un entorno profesional, educativo, técnico o institucional.

    El protocolo puede favorecer mayor claridad conceptual, tono sobrio, utilidad profesional y estructuras como documentos visuales o carousels de aprendizaje.

    Sirve para autoridad, análisis, modelos de negocio, estrategia, productividad, tecnología, educación profesional y marca personal experta.

- `multiplataforma`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-multiplataforma-multiplataforma`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-multiplataforma-multiplataforma`
  - resumen: Valor que indica que el carousel debe construirse de forma suficientemente general para poder adaptarse a más de una plataforma.
  - definición: Valor que indica que el carousel debe construirse de forma suficientemente general para poder adaptarse a más de una plataforma.

    El protocolo debe evitar decisiones demasiado dependientes de un entorno específico.

    Sirve cuando se busca reutilizar una misma pieza base en Instagram, TikTok, LinkedIn u otros canales con ajustes menores.

- `plataforma_pendiente_de_especificacion`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-plataforma_pendiente_de_especificacion-plataforma_pendiente_de_especificacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-plataforma_pendiente_de_especificacion-plataforma_pendiente_de_especificacion`
  - resumen: Valor provisional para casos en los que aún no se decide la plataforma final.
  - definición: Valor provisional para casos en los que aún no se decide la plataforma final.

    Permite construir o preconfigurar una instancia sin bloquear el proceso, dejando la adaptación específica para una fase posterior.

    Sirve para borradores, pruebas, generación temprana de ideas o configuraciones que todavía no tienen canal definitivo.

#### `aplicacion_de_plataforma`

- sección: `10.3`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma`
- tipo de valor: Categorial cerrado.
- cardinalidad: Un valor obligatorio.
- resumen: Describir la aplicación específica del entorno de plataforma dentro de la cual la salida debe ser realizable.
- definición: Describir la aplicación específica del entorno de plataforma dentro de la cual la salida debe ser realizable. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio.

**Nota regional para carousel:** Este campo queda habilitado como selección contextual compatible con `plataforma`. No crea una instancia regional distinta.

##### Valores habilitados

- `instagram_carousel_post`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-instagram_carousel_post-instagram_carousel_post`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-instagram_carousel_post-instagram_carousel_post`
  - resumen: Valor que indica que la pieza se publicará como post carousel en Instagram.
  - definición: Valor que indica que la pieza se publicará como post carousel en Instagram.

    El protocolo debe construir una secuencia de láminas visuales con énfasis en portada, continuidad, guardabilidad y cierre accionable.

    Sirve para contenido educativo, listas, explicaciones visuales, marca personal, promoción suave y piezas compartibles.

- `tiktok_photo_mode`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-tiktok_photo_mode-tiktok_photo_mode`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-tiktok_photo_mode-tiktok_photo_mode`
  - resumen: Valor que indica que la pieza se adaptará al modo fotográfico o carousel de TikTok.
  - definición: Valor que indica que la pieza se adaptará al modo fotográfico o carousel de TikTok.

    El protocolo debe considerar captación rápida, lectura simple, frases fuertes, progresión directa y potencial de interacción.

    Sirve para carousels breves, visuales, provocadores, explicativos o de contraste fuerte.

- `linkedin_document_post`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-linkedin_document_post-linkedin_document_post`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-linkedin_document_post-linkedin_document_post`
  - resumen: Valor que indica que la pieza se adaptará como documento, carrusel o secuencia visual consumible dentro de LinkedIn.
  - definición: Valor que indica que la pieza se adaptará como documento, carrusel o secuencia visual consumible dentro de LinkedIn.

    El protocolo puede favorecer tono profesional, utilidad clara, autoridad, estructura lógica y valor guardable.

    Sirve para frameworks, análisis, guías, modelos, procesos, diagnósticos y contenido B2B.

- `carousel_multiplataforma`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-carousel_multiplataforma-carousel_multiplataforma`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-carousel_multiplataforma-carousel_multiplataforma`
  - resumen: Valor que indica que la manifestación se construirá como base reutilizable para varias plataformas.
  - definición: Valor que indica que la manifestación se construirá como base reutilizable para varias plataformas.

    El protocolo debe priorizar una estructura flexible: texto claro, láminas relativamente independientes, visuales adaptables y CTA no excesivamente específico.

    Sirve para sistemas de contenido que buscan producir una pieza madre y luego derivar versiones por canal.

- `aplicacion_pendiente_de_especificacion`
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-aplicacion_pendiente_de_especificacion-aplicacion_pendiente_de_especificacion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-aplicacion_pendiente_de_especificacion-aplicacion_pendiente_de_especificacion`
  - resumen: Valor provisional para casos en los que se conoce que la realización será carousel, pero aún no se sabe bajo qué aplicación concreta de plataforma se publicará.
  - definición: Valor provisional para casos en los que se conoce que la realización será carousel, pero aún no se sabe bajo qué aplicación concreta de plataforma se publicará.

    Permite avanzar con la configuración general sin forzar una decisión temprana.

    Sirve para exploración, borradores, construcción conceptual inicial y flujos donde la plataforma se decide después.

---

## 9. `dimension_composicion_segmental_de_la_salida`

- sección: `11`
- id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida`
- resumen: Dimensión que describe cómo se organiza la salida en el tiempo y en la distribución interna de bloques, tramos y unidades de construcción.
- definición: Describir cómo se organiza la salida en el tiempo y en la distribución interna de bloques, tramos y unidades de construcción.

**Estado regional:** dimensión habilitada para arquitectura macro y cantidad de láminas; los detalles de distribución por lámina pertenecen al protocolo.

### Campos habilitados

#### `arquitectura_macro`

- sección: `11.2`
- id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Campo que describe la organización estructural general del guión.
- definición: Describir la organización estructural general del guión.

##### Valores habilitados

- `apertura_desarrollo_cierre`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_cierre-apertura_desarrollo_cierre`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_cierre-apertura_desarrollo_cierre`
  - resumen: Valor apertura_desarrollo_cierre declarado para el campo arquitectura_macro.
  - definición: Entrada inicial, desarrollo central y cierre explícito.
- `apertura_lista_cierre`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_lista_cierre-apertura_lista_cierre`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_lista_cierre-apertura_lista_cierre`
  - resumen: Valor apertura_lista_cierre declarado para el campo arquitectura_macro.
  - definición: Apertura, núcleo en forma de lista y cierre.
- `apertura_contraste_resolucion`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_contraste_resolucion-apertura_contraste_resolucion`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_contraste_resolucion-apertura_contraste_resolucion`
  - resumen: Valor apertura_contraste_resolucion declarado para el campo arquitectura_macro.
  - definición: Apertura, núcleo contrastivo y resolución final.
- `apertura_secuencia_remate`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_secuencia_remate-apertura_secuencia_remate`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_secuencia_remate-apertura_secuencia_remate`
  - resumen: Valor apertura_secuencia_remate declarado para el campo arquitectura_macro.
  - definición: Apertura, desarrollo por pasos o momentos secuenciales y remate breve.
- `apertura_desarrollo_remate`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_remate-apertura_desarrollo_remate`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_remate-apertura_desarrollo_remate`
  - resumen: Valor apertura_desarrollo_remate declarado para el campo arquitectura_macro.
  - definición: Apertura, desarrollo y remate terminal breve y marcado.

#### `cantidad_de_laminas`

- sección: `sin_seccion_declarada_en_nodo`
- id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas`
- tipo de valor: no_especificado_en_nodo
- cardinalidad: no_especificada_en_nodo
- resumen: Campo que fija la extensión laminar compatible de una salida carousel.
- definición: Tipo de valor: rango categorial cerrado. Campo que fija la extensión laminar compatible de una salida carousel, entendida como cantidad de láminas disponibles para distribuir una construcción conceptual.

En realizaciones laminares, este campo cumple una función equivalente a duracion_objetivo en realizaciones temporales, pero no mide segundos ni tiempo de reproducción. Mide el espacio segmental disponible para portada, desarrollo, contraste, explicación, recapitulación, herramienta o cierre. Debe ser compatible con arquitectura_macro, configuración narrativa y profundidad conceptual del caso.

Ejemplos de uso: 2 indica una secuencia mínima para contraste o entrada breve; 3_a_5 permite una estructura corta de apertura, desarrollo y cierre; 6_a_8 permite una progresión media con mayor espacio para explicar, comparar, ejemplificar o convertir la pieza en herramienta operable.

**Nota regional para carousel:** Este campo reemplaza funcionalmente a `duracion_objetivo` para carousel: la extensión de la salida se regula por cantidad de láminas, no por duración temporal.

##### Valores habilitados

- `2`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-2-2`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-2-2`
  - resumen: Valor que indica una secuencia mínima de dos láminas.
  - definición: Valor que indica una secuencia mínima de dos láminas.

    Es útil para estructuras binarias, contrastes simples o piezas de entrada muy breves.

    Ejemplos:

    ```txt
    Lámina 1: problema.
    Lámina 2: resolución.
    ```

    ```txt
    Lámina 1: antes.
    Lámina 2: después.
    ```

    Sirve para micro-carousels, piezas de contraste, antes/después y mensajes de alta síntesis.

- `3_a_5`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-3_a_5-3_a_5`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-3_a_5-3_a_5`
  - resumen: Valor que indica una secuencia breve y manejable de tres a cinco láminas.
  - definición: Valor que indica una secuencia breve y manejable de tres a cinco láminas.

    Permite construir una progresión mínima: apertura, desarrollo y cierre.

    Ejemplos:

    ```txt
    Lámina 1: apertura.
    Lámina 2: explicación.
    Lámina 3: ejemplo.
    Lámina 4: síntesis.
    Lámina 5: CTA.
    ```

    Sirve para carousels de comprensión rápida, listas cortas, contrastes, mini-frameworks y piezas guardables.

- `6_a_8`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-6_a_8-6_a_8`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-6_a_8-6_a_8`
  - resumen: Valor que indica una secuencia media, adecuada para desarrollar una idea con mayor profundidad.
  - definición: Valor que indica una secuencia media, adecuada para desarrollar una idea con mayor profundidad.

    Permite introducir varias capas, ejemplos, pasos, errores o categorías sin llegar a una pieza excesivamente extensa.

    Ejemplos:

    ```txt
    Lámina 1: hook.
    Lámina 2: problema.
    Lámina 3: distinción principal.
    Lámina 4: ejemplo.
    Lámina 5: método.
    Lámina 6: aplicación.
    Lámina 7: síntesis.
    Lámina 8: CTA.
    ```

    Sirve para carruseles educativos, metodológicos, analíticos y de profundización controlada.

---

## 10. `dimension_recursos_complementarios_de_manifestacion`

- sección: `12`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-dimension_recursos_complementarios_de_manifestacion`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-dimension_recursos_complementarios_de_manifestacion`
- resumen: Dimensión que describe el régimen general de uso de recursos complementarios que acompañan al guión.
- definición: Describir el régimen general de uso de recursos complementarios que acompañan al guión sin fijar todavía su realización local por bloque. Su función es declarar, a nivel de entrada, qué clases de recursos complementarios usa la pieza, con qué peso los usa, qué función general cumplen, cómo se distribuyen y bajo qué criterio general deben mantenerse coherentes.

**Estado regional:** dimensión habilitada de forma restringida para texto, imagen, video, audio y función de recursos. Aunque conserva el nombre antiguo, en carousel varios recursos operan como estructurales.

### Campos habilitados

#### `uso_de_texto_en_pantalla`

- sección: `12.1`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de texto en pantalla como recurso complementario de la pieza.
- definición: Indicar el régimen general de uso de texto en pantalla como recurso complementario de la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: Debe ser coherente con la modalidad de guion. No fija todavía contenidos concretos por bloque.

##### Valores habilitados

- `texto_estructural`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_estructural-texto_estructural`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_estructural-texto_estructural`
  - resumen: Valor texto_estructural declarado para el campo uso_de_texto_en_pantalla.
  - definición: El texto visible cumple una función importante en la organización de la pieza.
- `texto_variable_segun_bloque`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_variable_segun_bloque-texto_variable_segun_bloque`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_variable_segun_bloque-texto_variable_segun_bloque`
  - resumen: Valor texto_variable_segun_bloque declarado para el campo uso_de_texto_en_pantalla.
  - definición: La presencia de texto visible cambia según la función local de cada bloque.
- `sin_texto_visible`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-sin_texto_visible-sin_texto_visible`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-sin_texto_visible-sin_texto_visible`
  - resumen: Valor que indica que la lámina puede no contener texto visible o usarlo de manera nula.
  - definición: Valor que indica que la lámina puede no contener texto visible o usarlo de manera nula.

    En carousel, este valor debe usarse con cuidado, porque la pieza suele depender de texto. Sin embargo, puede ser útil cuando una lámina funciona como pausa visual, escena simbólica o transición.

    Ejemplos:

    ```txt
    Una imagen simbólica sin texto.
    Una escena conceptual que prepara la siguiente lámina.
    Un separador visual dentro de una secuencia.
    ```

    Sirve para respiración visual, transición emocional, pausa narrativa o refuerzo simbólico.

#### `uso_de_imagen_generada`

- sección: `12.2`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de imágenes generadas o imágenes de apoyo dentro de la pieza.
- definición: Indicar el régimen general de uso de imágenes generadas o imágenes de apoyo dentro de la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: No fija todavía la imagen concreta ni su prompt local. Debe ser coherente con el criterio general de coherencia de recursos.

##### Valores habilitados

- `sin_imagen_generada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-sin_imagen_generada-sin_imagen_generada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-sin_imagen_generada-sin_imagen_generada`
  - resumen: Valor sin_imagen_generada declarado para el campo uso_de_imagen_generada.
  - definición: La pieza no incorpora imágenes generadas como recurso complementario.
- `texto_imagen_simbolica`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-texto_imagen_simbolica-texto_imagen_simbolica`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-texto_imagen_simbolica-texto_imagen_simbolica`
  - resumen: Aquí hay una imagen de fondo o elemento visual, pero el sentido principal sigue estando en el texto.
  - definición: Aquí hay una imagen de fondo o elemento visual, pero el sentido principal sigue estando en el texto.

    Ejemplos:

    ```txt
    Foto oscura + frase central.
    Rostro expresivo + pregunta.
    Objeto simbólico + idea.
    Imagen histórica + interpretación.
    Fondo abstracto + concepto.
    ```

    Ejemplo:

    ```txt
    Una puerta medio abierta con el texto:
    “Toda estrategia empieza con una entrada que casi nadie ve.”
    ```

    Este tipo sirve para activación emocional, posicionamiento identitario y memorabilidad.

- `flowchart_o_diagrama_de_decision`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-flowchart_o_diagrama_de_decision-flowchart_o_diagrama_de_decision`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-flowchart_o_diagrama_de_decision-flowchart_o_diagrama_de_decision`
  - resumen: Sirve para representar rutas, bifurcaciones o decisiones.
  - definición: Sirve para representar rutas, bifurcaciones o decisiones.

    Ejemplo:

    ```txt
    ¿La audiencia entiende el problema?
            ↓
          No → lámina de clarificación
            ↓
          Sí → lámina de profundización
    ```

    Puede usarse para diagnósticos, decisiones, procesos, métodos, clasificaciones operativas o estructuras tipo “si pasa A, haz B”.

    Es especialmente útil cuando se quiere que el carousel no sea solo informativo, sino operable.

- `tabla_comparativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-tabla_comparativa-tabla_comparativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-tabla_comparativa-tabla_comparativa`
  - resumen: La lámina compara dos o más elementos.
  - definición: La lámina compara dos o más elementos.

    Ejemplo:

    ```txt
    Tipo        | Uso
    Estrategia  | Dirección general
    Táctica     | Movimiento local
    Técnica     | Forma de ejecución
    ```

    Puede tomar formas como:

    ```txt
    Antes vs después.
    Correcto vs incorrecto.
    Superficial vs profundo.
    Principiante vs experto.
    Mito vs realidad.
    Opción A vs opción B.
    ```

    Este formato es muy fuerte para reestructuración interpretativa, porque cambia cómo el receptor separa conceptos.

- `antes_despues`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-antes_despues-antes_despues`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-antes_despues-antes_despues`
  - resumen: Muy útil cuando se quiere mostrar transformación.
  - definición: Muy útil cuando se quiere mostrar transformación.

    Ejemplos:

    ```txt
    Antes: idea confusa.
    Después: idea estructurada.
    ```

    ```txt
    Antes: perfil débil.
    Después: perfil posicionado.
    ```

    ```txt
    Antes: contenido aislado.
    Después: sistema de contenido.
    ```

    Puede ser visual, textual o mixto.

    Sirve para mostrar progreso, contraste, mejora, transformación conceptual o cambio de estado.

- `caso_o_escena`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-caso_o_escena-caso_o_escena`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-caso_o_escena-caso_o_escena`
  - resumen: La lámina muestra un caso concreto, real o hipotético.
  - definición: La lámina muestra un caso concreto, real o hipotético.

    Ejemplos:

    ```txt
    “Un político no responde al ataque directamente…”
    “Una marca no vende el producto, vende la transformación…”
    “Un estudiante no falla por ignorancia, falla por falta de estructura…”
    ```

    Puede incluir microhistoria, escena breve, personaje, situación, conflicto o resultado.

    Este tipo sirve para bajar una abstracción a una situación visible.

- `visualizacion_de_datos`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-visualizacion_de_datos-visualizacion_de_datos`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-visualizacion_de_datos-visualizacion_de_datos`
  - resumen: No es exactamente un diagrama conceptual; aquí hay datos, magnitudes, distribuciones o relaciones cuantificables.
  - definición: No es exactamente un diagrama conceptual; aquí hay datos, magnitudes, distribuciones o relaciones cuantificables.

    Ejemplos:

    ```txt
    Barras.
    Línea temporal.
    Distribución.
    Embudo.
    Porcentajes.
    Ranking.
    Mapa de calor.
    Matriz 2x2.
    ```

    Ejemplo conceptual:

    ```txt
    Atención
      ↑
      |       contenido emocional
      | contenido útil
      |________________→ profundidad
    ```

    Puede servir para autoridad, claridad y comprensión rápida.

- `timeline_o_secuencia_temporal`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-timeline_o_secuencia_temporal-timeline_o_secuencia_temporal`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-timeline_o_secuencia_temporal-timeline_o_secuencia_temporal`
  - resumen: La lámina muestra evolución, proceso o cambio a través del tiempo.
  - definición: La lámina muestra evolución, proceso o cambio a través del tiempo.

    Ejemplos:

    ```txt
    Paso 1 → Paso 2 → Paso 3
    Ayer → hoy → mañana
    Origen → crisis → transformación
    Problema → tensión → resolución
    Fase 1 → fase 2 → fase 3
    ```

    Muy útil para carruseles que enseñan procesos, etapas, trayectorias o transformaciones.

- `matriz_o_mapa_de_posicionamiento`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-matriz_o_mapa_de_posicionamiento-matriz_o_mapa_de_posicionamiento`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-matriz_o_mapa_de_posicionamiento-matriz_o_mapa_de_posicionamiento`
  - resumen: Sirve para ubicar elementos en dos o más ejes.
  - definición: Sirve para ubicar elementos en dos o más ejes.

    Ejemplo:

    ```txt
                     Profundo
                        ↑
                        |
    Difícil de compartir | Fácil de compartir
                        |
                        ↓
                    Superficial
    ```

    Otros ejemplos:

    ```txt
    Emoción alta / emoción baja.
    Utilidad alta / utilidad baja.
    Riesgo alto / riesgo bajo.
    Claridad alta / complejidad alta.
    Autoridad alta / cercanía alta.
    ```

    Este tipo es excelente para crear categorías nuevas y ubicar fenómenos en un espacio interpretativo.

- `lista_estructurada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-lista_estructurada-lista_estructurada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-lista_estructurada-lista_estructurada`
  - resumen: No es solo una lista de bullets; es una lista con lógica interna.
  - definición: No es solo una lista de bullets; es una lista con lógica interna.

    Ejemplos:

    ```txt
    5 errores.
    3 niveles.
    7 señales.
    4 tipos.
    6 pasos.
    10 preguntas.
    3 capas de análisis.
    ```

    Ejemplo:

    ```txt
    3 niveles de una estrategia:
      1. Lo que se ve.
      2. Lo que produce.
      3. Lo que reorganiza.
    ```

    Este formato funciona muy bien en carousel porque cada punto puede ocupar una lámina o una sección de la secuencia.

- `formula_o_ecuacion_conceptual`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-formula_o_ecuacion_conceptual-formula_o_ecuacion_conceptual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-formula_o_ecuacion_conceptual-formula_o_ecuacion_conceptual`
  - resumen: No necesariamente matemática; puede ser una fórmula de relaciones.
  - definición: No necesariamente matemática; puede ser una fórmula de relaciones.

    Ejemplos:

    ```txt
    Contenido efectivo = atención + claridad + continuidad + acción
    ```

    ```txt
    Carrusel = secuencia de láminas + progresión cognitiva + cierre operativo
    ```

    ```txt
    Autoridad = distinción + precisión + consistencia
    ```

    Muy útil para memorabilidad simbólica, síntesis y construcción de frases recordables.

- `metafora_visual`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-metafora_visual-metafora_visual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-metafora_visual-metafora_visual`
  - resumen: La lámina usa una imagen para explicar una idea abstracta.
  - definición: La lámina usa una imagen para explicar una idea abstracta.

    Ejemplos:

    ```txt
    Laberinto = confusión.
    Puente = mediación.
    Llave = acceso.
    Máquina = sistema.
    Mapa = estrategia.
    Raíz = núcleo.
    Máscara = identidad pública.
    Caja negra = proceso oculto.
    ```

    Ejemplo:

    ```txt
    Una imagen de engranes con el texto:
    “La audiencia no ve el sistema. Solo ve la salida.”
    ```

    Este tipo ayuda mucho a hacer recordable una idea.

- `ilustracion_o_escena_generada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-ilustracion_o_escena_generada-ilustracion_o_escena_generada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-ilustracion_o_escena_generada-ilustracion_o_escena_generada`
  - resumen: Aquí la imagen no es solo decoración: representa un concepto mediante una escena visual.
  - definición: Aquí la imagen no es solo decoración: representa un concepto mediante una escena visual.

    Ejemplos:

    ```txt
    Persona frente a un muro de decisiones.
    Ciudad como red de poder.
    Cerebro conectado a nodos.
    Máquina transformando ideas en piezas.
    Personaje viendo varias rutas.
    ```

    Esto sirve cuando el contenido es abstracto y se necesita una visualización más narrativa o simbólica.

- `mini_infografia`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-mini_infografia-mini_infografia`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-mini_infografia-mini_infografia`
  - resumen: Combina texto, iconos, flechas y estructura.
  - definición: Combina texto, iconos, flechas y estructura.

    Ejemplos:

    ```txt
    “Cómo funciona X”.
    “Anatomía de una estrategia”.
    “Componentes de un perfil digital”.
    “Mapa de una pieza de contenido”.
    “Embudo de conversión de carrusel”.
    ```

    Es uno de los formatos más naturales para carruseles educativos, porque concentra estructura y explicación visual.

- `plantilla_rellenable`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-plantilla_rellenable-plantilla_rellenable`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-plantilla_rellenable-plantilla_rellenable`
  - resumen: La lámina no solo informa; da una estructura para usar.
  - definición: La lámina no solo informa; da una estructura para usar.

    Ejemplos:

    ```txt
    Mi idea central es: ______
    Mi audiencia necesita: ______
    La tensión principal es: ______
    La acción esperada es: ______
    ```

    Esto convierte el carousel en herramienta. Puede activar guardados, uso práctico y conversión metodológica.

- `pregunta_guia`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-pregunta_guia-pregunta_guia`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-pregunta_guia-pregunta_guia`
  - resumen: Una lámina puede ser únicamente una pregunta potente.
  - definición: Una lámina puede ser únicamente una pregunta potente.

    Ejemplos:

    ```txt
    “¿Qué está viendo tu audiencia que tú no estás diseñando?”
    “¿Esta pieza informa, convierte o posiciona?”
    “¿Qué función cumple esta lámina?”
    “¿Qué debe cambiar en la mente del receptor después de leer esto?”
    ```

    Sirve para pausa, reflexión, transición, apertura o cierre.

- `contraste_visual_fuerte`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-contraste_visual_fuerte-contraste_visual_fuerte`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-contraste_visual_fuerte-contraste_visual_fuerte`
  - resumen: La lámina divide el espacio en oposición.
  - definición: La lámina divide el espacio en oposición.

    Ejemplos:

    ```txt
    Publicar contenido
    vs
    Diseñar una arquitectura de contenido
    ```

    ```txt
    Tema
    vs
    Función
    ```

    ```txt
    Imagen bonita
    vs
    Lámina operativa
    ```

    Este tipo es muy útil porque el contraste se entiende rápido y facilita reestructuración interpretativa.

- `CTA_visual`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-CTA_visual-CTA_visual`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-CTA_visual-CTA_visual`
  - resumen: La última o penúltima lámina puede contener una acción visualmente clara.
  - definición: La última o penúltima lámina puede contener una acción visualmente clara.

    Ejemplos:

    ```txt
    “Guarda este mapa.”
    “Comenta ‘estrategia’ y te mando el prompt.”
    “Desliza al inicio y revisa tu contenido con esta matriz.”
    “Usa esta plantilla en tu próxima publicación.”
    “Sígueme para ver la parte 2.”
    ```

    No es solo cierre; es desplazamiento hacia otra acción.

#### `uso_de_video_generado`

- sección: `12.3`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de fragmentos visuales dinámicos o videos generados que acompañan la pieza.
- definición: Indicar el régimen general de uso de fragmentos visuales dinámicos o videos generados que acompañan la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: No fija todavía el video concreto ni su prompt local. Debe ser realizable dentro del marco de materialización.

**Nota regional para carousel:** Para la V1 de carousel se restringe a `sin_video_generado`, porque la realización se define como secuencia laminar visual.

##### Valores habilitados

- `sin_video_generado`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-sin_video_generado-sin_video_generado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-sin_video_generado-sin_video_generado`
  - resumen: Valor sin_video_generado declarado para el campo uso_de_video_generado.
  - definición: La pieza no incorpora fragmentos de video generado como recurso complementario.

#### `uso_de_audio_generado`

- sección: `12.4`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de recursos sonoros o auditivos generados que acompañan el guión.
- definición: Indicar el régimen general de uso de recursos sonoros o auditivos generados que acompañan el guión. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: No fija todavía el contenido sonoro exacto por bloque. Debe ser coherente con el acompañamiento auditivo general de la pieza.

**Nota regional para carousel:** Para la V1 de carousel se restringe a `sin_audio_generado`, porque la realización no depende de capa auditiva generada.

##### Valores habilitados

- `sin_audio_generado`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-sin_audio_generado-sin_audio_generado`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-sin_audio_generado-sin_audio_generado`
  - resumen: Valor sin_audio_generado declarado para el campo uso_de_audio_generado.
  - definición: La pieza no incorpora audio generado como recurso complementario específico.

#### `funcion_predominante_de_los_recursos_complementarios`

- sección: `12.5`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios`
- tipo de valor: Categorial cerrado múltiple controlado
- cardinalidad: Uno o más valores compatibles
- resumen: Indicar qué función cumplen predominantemente los recursos complementarios dentro de la pieza.
- definición: Indicar qué función cumplen predominantemente los recursos complementarios dentro de la pieza. Tipo de valor: Categorial cerrado múltiple controlado. Cardinalidad: Uno o más valores compatibles. Restricciones: Los valores seleccionados deben ser compatibles entre sí. La función predominante debe ser coherente con la función dominante de la pieza.

##### Valores habilitados

- `explicativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-explicativa-explicativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-explicativa-explicativa`
  - resumen: Valor explicativa declarado para el campo funcion_predominante_de_los_recursos_complementarios.
  - definición: Los recursos complementarios ayudan a hacer más comprensible el contenido principal.
- `ilustrativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-ilustrativa-ilustrativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-ilustrativa-ilustrativa`
  - resumen: Valor ilustrativa declarado para el campo funcion_predominante_de_los_recursos_complementarios.
  - definición: Los recursos complementarios sirven principalmente para mostrar o representar el contenido.
- `simbolica`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-simbolica-simbolica`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-simbolica-simbolica`
  - resumen: Valor simbolica declarado para el campo funcion_predominante_de_los_recursos_complementarios.
  - definición: Los recursos complementarios aportan imágenes, sonidos o elementos de valor simbólico.
- `atencional`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-atencional-atencional`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-atencional-atencional`
  - resumen: Valor atencional declarado para el campo funcion_predominante_de_los_recursos_complementarios.
  - definición: Los recursos complementarios ayudan a captar, sostener o reactivar la atención.
- `contrastiva`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-contrastiva-contrastiva`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-contrastiva-contrastiva`
  - resumen: Valor contrastiva declarado para el campo funcion_predominante_de_los_recursos_complementarios.
  - definición: Los recursos complementarios introducen o refuerzan oposiciones relevantes.
- `operativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-operativa-operativa`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-operativa-operativa`
  - resumen: Valor que indica que el recurso no solo ilustra, sino que ayuda a ejecutar una acción o aplicar una estructura.
  - definición: Valor que indica que el recurso no solo ilustra, sino que ayuda a ejecutar una acción o aplicar una estructura.

    Ejemplos:

    ```txt
    Checklist.
    Flowchart.
    Plantilla.
    Mapa de decisión.
    Paso a paso.
    ```

    Sirve cuando el carousel debe convertirse en herramienta de uso práctico, no solo en explicación.

- `metodologica`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-metodologica-metodologica`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-metodologica-metodologica`
  - resumen: Valor que indica que el recurso presenta o sostiene un método.
  - definición: Valor que indica que el recurso presenta o sostiene un método.

    No se limita a mostrar una acción; organiza un procedimiento repetible.

    Ejemplos:

    ```txt
    Método para clasificar piezas.
    Proceso para diseñar un carousel.
    Secuencia para diagnosticar un problema.
    Framework para convertir ideas en contenido.
    ```

    Sirve para carousels que buscan conversión metodológica, formación, guardabilidad y transferencia práctica.

- `mixta_controlada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-mixta_controlada-mixta_controlada`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-mixta_controlada-mixta_controlada`
  - resumen: Valor mixta_controlada declarado para el campo funcion_predominante_de_los_recursos_complementarios.
  - definición: Los recursos complementarios combinan varias funciones de forma organizada.

#### `grado_de_dependencia_de_recursos_complementarios`

- sección: `12.6`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios`
- tipo de valor: Categorial ordinal
- cardinalidad: Un valor obligatorio
- resumen: Indicar en qué medida la pieza depende de los recursos complementarios para funcionar correctamente.
- definición: Indicar en qué medida la pieza depende de los recursos complementarios para funcionar correctamente. Tipo de valor: Categorial ordinal. Cardinalidad: Un valor obligatorio. Restricciones: Debe ser coherente con el uso declarado de cada tipo de recurso. No debe contradecir la modalidad general de realización.

##### Valores habilitados

- `baja`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-baja-baja`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-baja-baja`
  - resumen: Valor baja declarado para el campo grado_de_dependencia_de_recursos_complementarios.
  - definición: La pieza puede sostenerse casi por completo sin depender de recursos complementarios.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-media-media`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-media-media`
  - resumen: Valor media declarado para el campo grado_de_dependencia_de_recursos_complementarios.
  - definición: Los recursos complementarios aportan valor importante, pero no cargan el núcleo de la pieza.
- `alta`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-alta-alta`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-alta-alta`
  - resumen: Valor alta declarado para el campo grado_de_dependencia_de_recursos_complementarios.
  - definición: La pieza depende claramente de esos recursos para alcanzar su forma esperada.
- `dominante`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-dominante-dominante`
  - definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-dominante-dominante`
  - resumen: Valor dominante declarado para el campo grado_de_dependencia_de_recursos_complementarios.
  - definición: Los recursos complementarios ocupan un lugar central en la eficacia de la pieza.

---

# 6. Recorte regional compacto

Este bloque resume la misma región seleccionada en una forma compacta, útil para verificación rápida o comparación con futuras versiones.

```yaml
dimension_identidad_operativa_de_la_realizacion:
  formulacion_canonica:
    - crear_manifestacion_codominial_carousel
    - crear_secuencia_laminar_visual_textual
    - crear_carousel_visual_textual

  nivel_de_especificidad:
    - general
    - intermedia
    - especifica

  prioridad_de_intencion:
    - principal
    - secundaria
    - terciaria
    - auxiliar

dimension_orientacion_funcional_pragmatica:
  funcion_dominante:
    - captar_atencion
    - sintetizar
    - enseñar
    - activar_interaccion
    - distribuir
    - convertir
    - abrir_serie
    - continuar_serie
    - cerrar_serie

  efecto_buscado:
    - comprension_rapida
    - deseo_de_guardar
    - deseo_de_compartir
    - curiosidad
    - expectativa_de_resolucion
    - retencion
    - identificacion
    - disposicion_a_accion

  accion_esperada:
    - guardar
    - compartir
    - comentar
    - ir_al_perfil
    - hacer_click
    - seguir_cuenta
    - consumir_parte_siguiente

  configuracion_discursiva:
    - sintetizadora
    - explicativa
    - operativa
    - definicional
    - argumentativa
    - captativa
    - hibrida_controlada

dimension_escala_temporal_y_resolucion_realizativa:
  alcance_de_realizacion:
    - pieza_unica
    - pieza_de_acceso
    - pieza_de_profundizacion
    - pieza_de_prueba
    - pieza_de_transicion
    - pieza_de_validacion
    - apertura_de_serie
    - continuidad_de_serie
    - cierre_de_serie

  horizonte_temporal:
    - inmediato
    - corto_plazo
    - mediano_plazo
    - seriado
    - acumulativo

  regimen_de_resolucion_buscada:
    - resolucion_inmediata
    - resolucion_parcial
    - resolucion_progresiva
    - resolucion_diferida
    - resolucion_abierta_a_continuidad

dimension_dinamica_atencional_y_procesual:
  estado_atencional:
    - atencion_fragmentada
    - atencion_superficial
    - atencion_en_exploracion
    - atencion_sostenida
    - atencion_lista_para_activacion
    - atencion_lista_para_continuidad
    - atencion_lista_para_profundizacion

  regimen_de_activacion_atencional:
    - apertura_inmediata
    - apertura_progresiva
    - sostenimiento_desde_el_inicio
    - activacion_por_continuidad
    - reenganche

  dinamica_procesual:
    compresion:
      - baja
      - media
      - alta
    continuidad:
      - baja
      - media
      - alta
    explicitud:
      - baja
      - media
      - alta
    friccion_interpretativa:
      - baja
      - media
      - alta
    recapitulacion:
      - baja
      - media
      - alta

dimension_acoplamiento_receptoral:
  publico_objetivo_inmediato:
    - audiencia_fria
    - audiencia_tibia
    - audiencia_caliente
    - seguidores_actuales
    - personas_sin_conocimiento_previos
    - personas_con_interes_previos
    - personas_que_no_comprenden
    - personas_que_ya_comprenden

  adecuacion_lexico_formulativa:
    accesibilidad_lexica:
      - baja
      - media
      - alta
    densidad_terminologica:
      - baja
      - media
      - alta
    grado_de_abstraccion:
      - concreto
      - intermedio
      - abstracto
    registro_predominante:
      - coloquial_controlado
      - pedagogico
      - tecnico
      - analitico
      - institucional
      - hibrido
    variacion_lexica:
      - baja
      - media
      - alta

dimension_construccion_del_caso:
  configuracion_narrativa:
    - modular
    - acumulativa
    - contrastiva
    - lineal_progresiva
    - recapitulativa
    - apertura_profundizacion_cierre

dimension_comparecencia_performativa:
  rama_visual_editorial:
    tono_editorial:
      - pedagogico_directo
      - analitico_sobrio
      - divulgativo_claro
      - tecnico_controlado
      - provocador_controlado
      - comercial_sutil
    estilo_de_titulares:
      - pregunta_directa
      - promesa_de_comprension
      - contraste_conceptual
      - afirmacion_tesis
      - advertencia
      - lista_numerada
      - formula_memorable
    densidad_textual_visible:
      - baja
      - media
      - alta
      - variable_controlada
    jerarquia_grafica:
      - titular_dominante
      - texto_visual_balanceado
      - imagen_dominante_texto_secundario
      - diagrama_dominante
      - estructura_mixta_controlada
    presencia_de_marca:
      - ausente
      - minima
      - moderada
      - dominante
    regimen_de_iconografia:
      - sin_iconografia
      - iconografia_minima
      - iconografia_funcional
      - iconografia_sistematica
    estilo_de_composicion_visual:
      - limpio_minimal
      - editorial_sobrio
      - didactico_visual
      - conceptual_simbolico
      - infografico
      - contraste_fuerte

dimension_marco_de_materializacion:
  clase_de_materializacion:
    - secuencia_laminar_visual

  plataforma:
    - instagram
    - tiktok
    - linkedin
    - multiplataforma
    - plataforma_pendiente_de_especificacion

  aplicacion_de_plataforma:
    - instagram_carousel_post
    - tiktok_photo_mode
    - linkedin_document_post
    - carousel_multiplataforma
    - aplicacion_pendiente_de_especificacion

dimension_composicion_segmental_de_la_salida:
  arquitectura_macro:
    - apertura_desarrollo_cierre
    - apertura_lista_cierre
    - apertura_contraste_resolucion
    - apertura_secuencia_remate
    - apertura_desarrollo_remate

  cantidad_de_laminas:
    - 2
    - 3_a_5
    - 6_a_8

dimension_recursos_complementarios_de_manifestacion:
  uso_de_texto_en_pantalla:
    - texto_estructural
    - texto_variable_segun_bloque
    - sin_texto_visible

  uso_de_imagen_generada:
    - sin_imagen_generada
    - texto_imagen_simbolica
    - flowchart_o_diagrama_de_decision
    - tabla_comparativa
    - antes_despues
    - caso_o_escena
    - visualizacion_de_datos
    - timeline_o_secuencia_temporal
    - matriz_o_mapa_de_posicionamiento
    - lista_estructurada
    - formula_o_ecuacion_conceptual
    - metafora_visual
    - ilustracion_o_escena_generada
    - mini_infografia
    - plantilla_rellenable
    - pregunta_guia
    - contraste_visual_fuerte
    - CTA_visual

  uso_de_video_generado:
    - sin_video_generado

  uso_de_audio_generado:
    - sin_audio_generado

  funcion_predominante_de_los_recursos_complementarios:
    - explicativa
    - ilustrativa
    - simbolica
    - atencional
    - contrastiva
    - operativa
    - metodologica
    - mixta_controlada

  grado_de_dependencia_de_recursos_complementarios:
    - baja
    - media
    - alta
    - dominante
```

---

# 7. Criterios de validación

Una instancia contextual es compatible con `instancia-regional-carousel` si cumple estas condiciones:

1. Declara `instancia_regional_usada: instancia-regional-carousel`.
2. Usa `clase_de_materializacion: secuencia_laminar_visual`.
3. Selecciona `plataforma` y `aplicacion_de_plataforma` sólo entre los valores habilitados en esta región.
4. No introduce campos audiovisuales o performativos que no están habilitados en la rama visual-editorial.
5. Usa `cantidad_de_laminas` para regular extensión laminar, no `duracion_objetivo`.
6. No incluye contenido de láminas concretas dentro de la instancia regional; esa distribución corresponde al protocolo de carousel.
7. Mantiene trazabilidad de cada valor seleccionado hacia un nodo existente del `grafo_de_regiones`.

---

# 8. Compatibilidad protocolaria

Esta instancia regional está preparada para ser consumida por un protocolo de realización `carousel/` que transforme una instancia contextual en una `manifestacion_codominial_carousel`.

El protocolo deberá tomar:

```txt
ensamblaje
+ construccion_conceptual
+ valores seleccionados dentro de esta región
```

y producir:

```txt
manifestacion_codominial_carousel
  cabecera_identidad_general_de_la_pieza
  capa_macroestructural_laminar
  capa_de_laminas
  capa_visual_editorial
  capa_de_recursos_de_manifestacion
  capa_de_continuidad_transversal
  capa_de_justificacion_de_composicion
```

La instancia regional no construye esa salida; sólo deja preparado el espacio de valores desde el cual el protocolo podrá construirla.
