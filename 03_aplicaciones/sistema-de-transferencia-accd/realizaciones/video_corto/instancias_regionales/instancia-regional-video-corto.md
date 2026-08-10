# Instancia Regional — Video corto TikTok

## 0. Identidad documental

- id documental: `instancia-regional-video-corto-tiktok`
- tipo: `instancia_regional`
- realización habilitada: `video_corto_tiktok`
- clase de salida regionalmente fijada: `guion_audiovisual_breve`
- plataforma regionalmente fijada: `tiktok`
- aplicación de plataforma regionalmente fijada: `video_tiktok`
- archivo sugerido: `modelos/composicion-ascendente-por-instancias-de-region/realizaciones/video-corto/instancias-regionales/instancia-regional-video-corto-tiktok.md`
- fuente de elementos: `mb-contenido-digital.md`
- fuente de referencias: `ART_grafo_de_regiones.txt`

---

## 1. Función de esta instancia regional

Esta instancia regional selecciona, dentro de `grafo_de_regiones`, las dimensiones, campos, valores y estructuras que quedan habilitados para construir instancias contextuales orientadas a guiones audiovisuales breves para TikTok.

Esta instancia regional **no es una instancia contextual** y **no produce una manifestación final**. Su función es declarar el recorte regional desde el cual podrán construirse instancias contextuales posteriores.

La diferencia operativa es:

```txt
instancia_regional
  selecciona nodos existentes del grafo_de_regiones
  declara ids canónicos
  habilita campos y valores posibles
  fija restricciones regionales de plataforma/codominio

instancia_contextual
  selecciona valores concretos dentro de lo habilitado
  configura un caso particular
  puede ser consumida por un protocolo/adaptador
```

---

## 2. Regla de referencia obligatoria

Cada dimensión, campo, campo interno, valor o estructura habilitada debe referirse al `id` ya existente en `grafo_de_regiones`.

Por tanto, esta instancia regional no redefine las dimensiones del modelo antiguo. Las traduce a una selección referencial.

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
- campos directos habilitados: `40`
- campos internos habilitados: `20`
- valores referenciados directamente en el recorte: `237`

Dimensiones habilitadas:

1. `dimension_identidad_operativa_de_la_realizacion` — id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
2. `dimension_orientacion_funcional_pragmatica` — id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica`
3. `dimension_escala_temporal_y_resolucion_realizativa` — id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-dimension_escala_temporal_y_resolucion_realizativa`
4. `dimension_acoplamiento_receptoral` — id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-dimension_acoplamiento_receptoral`
5. `dimension_dinamica_atencional_y_procesual` — id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dimension_dinamica_atencional_y_procesual`
6. `dimension_construccion_del_caso` — id: `grafo_de_regiones-grafo_dimension_construccion_del_caso`
7. `dimension_comparecencia_performativa` — id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-dimension_comparecencia_performativa`
8. `dimension_marco_de_materializacion` — id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-dimension_marco_de_materializacion`
9. `dimension_composicion_segmental_de_la_salida` — id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida`
10. `dimension_recursos_complementarios_de_manifestacion` — id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-dimension_recursos_complementarios_de_manifestacion`

---

## 4. Restricciones regionales generales

1. Toda instancia contextual construida desde esta instancia regional debe permanecer dentro de los campos y valores habilitados aquí.
2. La instancia contextual puede fijar valores concretos, pero no debe inventar nodos ni ids inexistentes.
3. Los campos descriptivos o semiabiertos pueden recibir valores concretos, pero deben respetar el tipo de valor declarado en su nodo de referencia.
4. Los campos marcados como obligatorios por el nodo de referencia deben declararse en la instancia contextual, salvo que un protocolo regional posterior declare explícitamente una omisión justificada.
5. En `dimension_marco_de_materializacion`, los valores `guion_audiovisual_breve`, `tiktok` y `video_tiktok` quedan regionalmente fijados.
6. Esta instancia regional no contiene el caso; sólo delimita el espacio desde el cual el caso podrá configurarse.

---

# 5. Región seleccionada

## 1. `dimension_identidad_operativa_de_la_realizacion`

- sección: `3`
- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
- resumen: Dimensión que describe la identidad declarativa de la realización que se busca construir.
- definición: Describir la identidad declarativa de la realización que se busca construir, indicando: cómo se formula; con qué precisión se formula; y con qué jerarquía opera dentro del sistema. Esta dimensión no describe todavía el contenido del caso, ni su composición segmental, ni su superficie audiovisual. S…

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

### Campos habilitados

#### `formulacion_canonica`

- sección: `3.1`
- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica`
- tipo de valor: Descriptivo controlado
- cardinalidad: Un valor obligatorio
- resumen: Campo que nombra de manera explícita la realización que será instanciada.
- definición: Nombrar de manera explícita la realización que será instanciada. El valor de este campo debe ser una formulación breve, inequívoca y operativa de la realización. No debe ser un tema, ni un título de archivo, ni una instrucción de ejecución completa. Debe form…

Valores habilitados:

- Campo descriptivo controlado; no tiene nodos de valor cerrado en esta instancia regional.
- Valor contextual recomendado para video corto TikTok: `crear guion para video de TikTok`

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

- `especifica`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-especifica-especifica`
  - definición: La realización está formulada con alta precisión. Ya orienta claramente el tipo concreto de pieza a construir y reduce de manera fuerte el espacio de salidas compatibles.
- `general`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-general-general`
  - definición: La realización está formulada en un nivel amplio. Nombra una clase de salida o de operación sin fijar todavía con mucha precisión el tipo concreto de pieza. Deja abiertas varias formas realizativas compatibles.
- `intermedia`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-intermedia-intermedia`
  - definición: La realización está formulada con un grado medio de precisión. Delimita mejor la clase de guión o de operación buscada, pero todavía deja margen para varias variantes compatibles dentro del mismo dominio.

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

- `auxiliar`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-auxiliar-auxiliar`
  - definición: La realización cumple una función instrumental o de soporte. Su presencia no estructura el núcleo del sistema, pero puede ayudar a estabilizarlo.
- `principal`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-principal-principal`
  - definición: La realización ocupa el lugar dominante dentro del sistema. Si existen otras orientaciones activas, deben subordinarse a ésta.
- `secundaria`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-secundaria-secundaria`
  - definición: La realización cumple una función relevante pero no dominante. Matiza, acompaña o refuerza una orientación principal.
- `terciaria`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-terciaria-terciaria`
  - definición: La realización tiene un peso complementario menor. Puede influir en detalles de composición, pero no define el criterio principal de éxito.

---

## 2. `dimension_orientacion_funcional_pragmatica`

- sección: `4`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica`
- resumen: Dimensión que describe qué quiere hacer la realización, qué efecto busca producir y qué respuesta espera activar.
- definición: Describir qué quiere hacer la realización, qué efecto busca producir y qué clase principal de respuesta espera activar. Esta dimensión fija el vector pragmático de la pieza. No describe todavía su segmentación ni su comparecencia local, pero sí el tipo de operación dominante que la salida debe cump…

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

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

Restricciones registradas en el nodo:

- Debe haber exactamente una función dominante.
- Las demás orientaciones pragmáticas deben ser compatibles con ella.

##### Valores habilitados

- `abrir_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-abrir_serie-abrir_serie`
  - definición: La realización busca iniciar una secuencia de piezas relacionadas.
- `activar_interaccion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-activar_interaccion-activar_interaccion`
  - definición: La realización busca producir una respuesta interactiva explícita, como comentar, responder o intervenir.
- `captar_atencion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-captar_atencion-captar_atencion`
  - definición: La realización busca abrir atención y atraer al receptor hacia el campo de la pieza.
- `cerrar_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-cerrar_serie-cerrar_serie`
  - definición: La realización busca concluir una secuencia de piezas relacionadas.
- `continuar_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-continuar_serie-continuar_serie`
  - definición: La realización busca sostener una secuencia ya abierta.
- `convertir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-convertir-convertir`
  - definición: La realización busca llevar al receptor hacia una decisión o cambio más fuerte, normalmente con una dirección práctica definida.
- `diagnosticar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-diagnosticar-diagnosticar`
  - definición: La realización busca identificar un estado, problema, patrón o condición.
- `distribuir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-distribuir-distribuir`
  - definición: La realización busca circular contenido de forma eficiente y reconocible, priorizando transferibilidad o circulación.
- `enseñar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-enseñar-enseñar`
  - definición: La realización busca facilitar comprensión, asimilación o aprendizaje de una idea, estructura u operación.
- `evaluar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-evaluar-evaluar`
  - definición: La realización busca valorar, estimar o poner a prueba un contenido, criterio o desempeño.
- `manifestar_comercialmente`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-manifestar_comercialmente-manifestar_comercialmente`
  - definición: La realización busca comparecer como pieza ligada a una lógica comercial, promocional o de posicionamiento.
- `persuadir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-persuadir-persuadir`
  - definición: La realización busca inclinar al receptor hacia una posición, una interpretación o una disposición determinada.
- `sintetizar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-sintetizar-sintetizar`
  - definición: La realización busca condensar contenido, reducir extensión y ofrecer una forma concentrada de comprensión.

#### `efecto_buscado`

- sección: `4.2`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado`
- tipo de valor: Categorial semiabierto
- cardinalidad: Uno o más valores, con una dominancia explícita
- resumen: Campo que describe el efecto principal que la realización pretende provocar en el receptor.
- definición: Describir el efecto principal que la realización pretende provocar en el receptor.

Restricciones registradas en el nodo:

- Puede haber más de un efecto, pero uno debe ser dominante.
- Los efectos buscados deben ser compatibles con la función dominante.

##### Valores habilitados

- `comprension_rapida`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-comprension_rapida-comprension_rapida`
  - definición: La pieza busca que el receptor entienda con rapidez una distinción, idea, estructura u operación.
- `curiosidad`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-curiosidad-curiosidad`
  - definición: La pieza busca abrir una inquietud cognitiva que invite a seguir atendiendo o a explorar más.
- `deseo_de_comentar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_comentar-deseo_de_comentar`
  - definición: La pieza busca generar reacción explícita.
- `deseo_de_compartir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_compartir-deseo_de_compartir`
  - definición: La pieza busca circular por recomendación o reenvío.
- `deseo_de_guardar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_guardar-deseo_de_guardar`
  - definición: La pieza busca que el receptor perciba la salida como algo reutilizable o digno de conservar.
- `deseo_de_ir_al_perfil`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_ir_al_perfil-deseo_de_ir_al_perfil`
  - definición: La pieza busca extender la navegación hacia otras salidas o hacia la fuente.
- `deseo_de_ver_hasta_el_final`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_ver_hasta_el_final-deseo_de_ver_hasta_el_final`
  - definición: La pieza busca sostener la atención completa hasta el cierre.
- `disposicion_a_accion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-disposicion_a_accion-disposicion_a_accion`
  - definición: La pieza busca abrir una disposición práctica, de aplicación o respuesta.
- `expectativa_de_resolucion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-expectativa_de_resolucion-expectativa_de_resolucion`
  - definición: La pieza busca mantener al receptor esperando un cierre, una respuesta o una clarificación posterior.
- `identificacion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-identificacion-identificacion`
  - definición: La pieza busca que el receptor reconozca algo propio, vivido o cercano en el contenido.
- `predisposicion_a_serie`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-predisposicion_a_serie-predisposicion_a_serie`
  - definición: La pieza busca preparar al receptor para continuidad serial.
- `retencion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-retencion-retencion`
  - definición: La pieza busca permanecer en memoria o dejar una huella cognitiva reconocible.
- `sorpresa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-sorpresa-sorpresa`
  - definición: La pieza busca introducir una ruptura de expectativa que reorganice la atención.
- `urgencia`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-urgencia-urgencia`
  - definición: La pieza busca intensificar la percepción de necesidad, inmediatez o relevancia práctica.

#### `accion_esperada`

- sección: `4.3`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada`
- tipo de valor: Categorial cerrado
- cardinalidad: Uno o más valores
- resumen: Campo que fija la acción concreta que la realización espera activar en el receptor.
- definición: Fijar la acción concreta que la realización espera activar en el receptor.

Restricciones registradas en el nodo:

- Debe ser coherente con la función dominante.
- Las acciones esperadas deben ser plausibles dentro del codominio elegido.

##### Valores habilitados

- `aplicar_lo_mostrado`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-aplicar_lo_mostrado-aplicar_lo_mostrado`
  - definición: La pieza busca que el receptor ejecute o ponga en práctica el contenido.
- `comentar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-comentar-comentar`
  - definición: La pieza busca una intervención verbal o reactiva explícita.
- `compartir`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-compartir-compartir`
  - definición: La pieza busca ser redistribuida por el receptor.
- `consumir_parte_siguiente`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-consumir_parte_siguiente-consumir_parte_siguiente`
  - definición: La pieza busca continuidad serial.
- `guardar`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-guardar-guardar`
  - definición: La pieza busca ser conservada para uso posterior.
- `hacer_click`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-hacer_click-hacer_click`
  - definición: La pieza busca una acción puntual sobre un enlace o elemento de salida.
- `ir_al_perfil`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ir_al_perfil-ir_al_perfil`
  - definición: La pieza busca extender la atención hacia el resto del ecosistema de salida.
- `ninguna_explicita`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ninguna_explicita-ninguna_explicita`
  - definición: La pieza no exige una acción externa inmediata claramente declarada.
- `seguir_cuenta`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-seguir_cuenta-seguir_cuenta`
  - definición: La pieza busca convertir la recepción en seguimiento estable.
- `solicitar_mas_informacion`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-solicitar_mas_informacion-solicitar_mas_informacion`
  - definición: La pieza busca abrir una demanda explícita de ampliación.
- `ver_hasta_el_final`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ver_hasta_el_final-ver_hasta_el_final`
  - definición: La pieza busca que el receptor complete todo el recorrido.

#### `configuracion_discursiva`

- sección: `4.4`
- id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Campo que describe el modo de formulación predominante de la realización.
- definición: Describir el modo de formulación predominante de la realización.

Restricciones registradas en el nodo:

- Debe haber exactamente una configuración discursiva predominante.
- Si es híbrida, la combinación debe seguir siendo identificable y controlada.

##### Valores habilitados

- `argumentativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-argumentativa-argumentativa`
  - definición: La realización se formula prioritariamente para sostener, defender o justificar una tesis.
- `captativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-captativa-captativa`
  - definición: La realización se formula prioritariamente para abrir atención, provocar entrada o intensificar interés inicial.
- `definicional`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-definicional-definicional`
  - definición: La realización se formula prioritariamente para fijar qué es algo, delimitarlo o precisarlo.
- `explicativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-explicativa-explicativa`
  - definición: La realización se formula prioritariamente para hacer comprensible un contenido, desplegarlo o aclararlo.
- `hibrida_controlada`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-hibrida_controlada-hibrida_controlada`
  - definición: La realización combina más de una modalidad discursiva, pero mantiene una organización controlada y reconocible.
- `operativa`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-operativa-operativa`
  - definición: La realización se formula prioritariamente para indicar qué hacer, cómo proceder o qué operación ejecutar.
- `sintetizadora`
  - id: `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-sintetizadora-sintetizadora`
  - definición: La realización se formula prioritariamente para condensar y reorganizar el contenido en forma resumida.

---

## 3. `dimension_escala_temporal_y_resolucion_realizativa`

- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-dimension_escala_temporal_y_resolucion_realizativa`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-dimension_escala_temporal_y_resolucion_realizativa`
- resumen: Dimensión que describe la escala temporal y el régimen de resolución de la realización.
- definición: Describir la escala temporal y el régimen de resolución de la realización, indicando si la pieza es autosuficiente, seriada, acumulativa o transicional, y cómo distribuye su resolución en el tiempo.

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

### Campos habilitados

#### `alcance_de_realizacion`

- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion`
- tipo de valor: categorial_cerrado
- cardinalidad: un_valor_obligatorio
- resumen: Campo que indica si la realización busca una pieza aislada o una unidad dentro de una estructura mayor.
- definición: Indicar si la realización busca una pieza aislada o una unidad dentro de una estructura mayor. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `apertura_de_serie`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-apertura_de_serie-apertura_de_serie`
  - definición: Materialización cuya función principal es iniciar una secuencia de piezas relacionadas.
- `cierre_de_serie`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-cierre_de_serie-cierre_de_serie`
  - definición: Materialización cuya función principal es concluir una secuencia.
- `continuidad_de_serie`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-continuidad_de_serie-continuidad_de_serie`
  - definición: Materialización que prolonga una secuencia ya abierta.
- `pieza_de_acceso`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_acceso-pieza_de_acceso`
  - definición: Materialización pensada para introducir al receptor en un campo temático o de salida.
- `pieza_de_profundizacion`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_profundizacion-pieza_de_profundizacion`
  - definición: Materialización orientada a expandir o profundizar algo ya abierto.
- `pieza_de_prueba`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_prueba-pieza_de_prueba`
  - definición: Materialización orientada a explorar, ensayar o testear una forma de salida.
- `pieza_de_transicion`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_transicion-pieza_de_transicion`
  - definición: Materialización que conecta dos zonas distintas del recorrido o cambia de fase.
- `pieza_de_validacion`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_validacion-pieza_de_validacion`
  - definición: Materialización orientada a verificar una hipótesis, una forma de presentación o una recepción esperada.
- `pieza_unica`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_unica-pieza_unica`
  - definición: Materialización autosuficiente cuyo sentido inmediato no depende de piezas previas o posteriores.

#### `horizonte_temporal`

- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal`
- tipo de valor: categorial_cerrado
- cardinalidad: un_valor_obligatorio
- resumen: Campo que indica en qué escala temporal busca operar la realización.
- definición: Indicar en qué escala temporal busca operar la realización. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `acumulativo`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-acumulativo-acumulativo`
  - definición: La realización busca contribuir a un efecto que depende de varias piezas, repeticiones o exposiciones.
- `corto_plazo`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-corto_plazo-corto_plazo`
  - definición: La realización busca operar en una escala breve posterior al contacto inicial.
- `inmediato`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-inmediato-inmediato`
  - definición: La realización busca producir efectos en el mismo acto de recepción o muy poco después.
- `mediano_plazo`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-mediano_plazo-mediano_plazo`
  - definición: La realización busca influir en una secuencia más extendida de recepción o elaboración.
- `seriado`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-seriado-seriado`
  - definición: La realización busca operar explícitamente como parte de una secuencia serial.

#### `regimen_de_resolucion_buscada`

- id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada`
- tipo de valor: categorial_cerrado
- cardinalidad: un_valor_obligatorio
- resumen: Campo que fija cómo se distribuye la resolución del contenido dentro de la realización.
- definición: Fijar cómo se distribuye la resolución del contenido dentro de la realización. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `resolucion_abierta_a_continuidad`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_abierta_a_continuidad-resolucion_abierta_a_continuidad`
  - definición: La pieza deja deliberadamente abierta una continuidad futura.
- `resolucion_diferida`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_diferida-resolucion_diferida`
  - definición: La pieza posterga el cierre o parte de él.
- `resolucion_inmediata`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_inmediata-resolucion_inmediata`
  - definición: La pieza cierra o resuelve rápidamente el núcleo que abre.
- `resolucion_parcial`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_parcial-resolucion_parcial`
  - definición: La pieza resuelve solo una parte del problema o de la tensión presentada.
- `resolucion_progresiva`
  - id: `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_progresiva-resolucion_progresiva`
  - definición: La pieza distribuye la resolución a lo largo del recorrido, sin agotarla en el primer tramo.

---

## 4. `dimension_acoplamiento_receptoral`

- sección: `6`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-dimension_acoplamiento_receptoral`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-dimension_acoplamiento_receptoral`
- resumen: Dimensión que describe a qué receptor inmediato se orienta la realización y cómo debe ajustarse verbalmente a ese receptor.
- definición: Describir a qué receptor inmediato se orienta la realización y cómo debe ajustarse verbalmente a ese receptor.

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

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

Restricciones registradas en el nodo:

- Debe ser compatible con la adecuación léxico-formulativa.
- Pueden coexistir varios públicos, pero debe haber uno dominante.

##### Valores habilitados

- `audiencia_caliente`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_caliente-audiencia_caliente`
  - definición: Receptores con alto nivel de interés, afinidad o predisposición favorable.
- `audiencia_fria`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_fria-audiencia_fria`
  - definición: Receptores sin relación previa fuerte con la fuente o con el contenido.
- `audiencia_tibia`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_tibia-audiencia_tibia`
  - definición: Receptores con cierta familiaridad o disposición favorable, pero todavía no plenamente comprometidos.
- `personas_con_interes_previos`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_con_interes_previos-personas_con_interes_previos`
  - definición: Receptores que ya tienen alguna motivación o interés relacionado.
- `personas_que_no_aplican`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_no_aplican-personas_que_no_aplican`
  - definición: Receptores que no están usando ni llevando a la práctica lo que el contenido podría activar.
- `personas_que_no_comprenden`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_no_comprenden-personas_que_no_comprenden`
  - definición: Receptores que enfrentan un problema de inteligibilidad.
- `personas_que_ya_comprenden`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_ya_comprenden-personas_que_ya_comprenden`
  - definición: Receptores que ya entienden el tema en una medida relevante.
- `personas_sin_conocimiento_previos`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_sin_conocimiento_previos-personas_sin_conocimiento_previos`
  - definición: Receptores que no conocen el tema o lo conocen muy poco.
- `seguidores_actuales`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-seguidores_actuales-seguidores_actuales`
  - definición: Receptores que ya mantienen un vínculo de seguimiento con la fuente.

#### `adecuacion_lexico_formulativa`

- sección: `6.2`
- id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa`
- tipo de valor: Compuesto
- cardinalidad: Un valor obligatorio compuesto por cinco ejes
- resumen: Campo que describe el ajuste verbal dominante de la realización en función del receptor.
- definición: Describir el ajuste verbal dominante de la realización en función del receptor. Tipo de valor: compuesto. Cardinalidad: un valor obligatorio compuesto por cinco ejes.

Restricciones registradas en el nodo:

- Los cinco ejes deben declararse.
- Deben ser coherentes con el público objetivo inmediato.
- Su combinación debe ser viable dentro de la comparecencia y del codominio.

##### Campos internos habilitados

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

- `analitico`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-analitico-analitico`
  - definición: Predomina una formulación de distinción, precisión y descomposición conceptual.
- `coloquial_controlado`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-coloquial_controlado-coloquial_controlado`
  - definición: Predomina una cercanía verbal compatible con uso oral, pero sin desorden o vulgarización excesiva.
- `hibrido`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-hibrido-hibrido`
  - definición: Combina dos o más registros de manera controlada.
- `institucional`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-institucional-institucional`
  - definición: Predomina una formulación marcada por sobriedad organizacional, formalidad y estabilidad.
- `pedagogico`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-pedagogico-pedagogico`
  - definición: Predomina una formulación orientada a facilitar comprensión y acompañar al receptor.
- `tecnico`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-tecnico-tecnico`
  - definición: Predomina vocabulario especializado y formulación disciplinar.

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

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-alta-alta`
  - definición: La realización trabaja con una carga terminológica intensa.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-baja-baja`
  - definición: La realización usa pocos términos especializados o cargados conceptualmente.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-media-media`
  - definición: La realización introduce una cantidad moderada de términos relevantes sin saturar el recorrido.

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

- `abstracto`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-abstracto-abstracto`
  - definición: La formulación se apoya en categorías, estructuras o relaciones de mayor nivel.
- `concreto`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-concreto-concreto`
  - definición: La formulación se apoya en objetos, acciones, escenas o casos fácilmente imaginables.
- `intermedio`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-intermedio-intermedio`
  - definición: La formulación combina elementos concretos con conceptos de nivel medio.

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

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-alta-alta`
  - definición: El vocabulario es fácilmente procesable por un receptor amplio.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-baja-baja`
  - definición: El vocabulario exige mayor familiaridad previa o mayor esfuerzo interpretativo.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-media-media`
  - definición: El vocabulario exige algún esfuerzo, pero sigue siendo razonablemente transitable.

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

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-alta-alta`
  - definición: La realización despliega repertorio verbal amplio y variado.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-baja-baja`
  - definición: La realización reutiliza repertorio verbal relativamente estable.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-media-media`
  - definición: La realización alterna formas verbales con una variación moderada.

---

## 5. `dimension_dinamica_atencional_y_procesual`

- sección: `7`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dimension_dinamica_atencional_y_procesual`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dimension_dinamica_atencional_y_procesual`
- tipo de valor: Dimensión
- cardinalidad: Contenedor conceptual de campos
- resumen: Dimensión que describe la relación atencional dominante del receptor y la forma procesual del recorrido.
- definición: Describir la relación atencional dominante del receptor con la pieza y la forma procesual del recorrido que la realización deberá activar o sostener.

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

### Campos habilitados

#### `estado_atencional`

- sección: `7.1`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional`
- tipo de valor: Categorial semiabierto
- cardinalidad: Un valor obligatorio
- resumen: Configuración dominante de la relación atencional del receptor con la pieza al momento de la realización.
- definición: Describir la configuración dominante de la relación atencional del receptor con la pieza al momento de la realización. Tipo de valor: categorial semiabierto. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `atencion_en_exploracion`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_en_exploracion-atencion_en_exploracion`
  - definición: La atención está disponible para una entrada exploratoria.
- `atencion_fragmentada`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_fragmentada-atencion_fragmentada`
  - definición: La atención está repartida, interrumpida o expuesta a dispersión fuerte.
- `atencion_inestable`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_inestable-atencion_inestable`
  - definición: La atención se abre, pero no se sostiene fácilmente.
- `atencion_lista_para_activacion`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_activacion-atencion_lista_para_activacion`
  - definición: La atención está lista para recibir una invitación más práctica o decisional.
- `atencion_lista_para_continuidad`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_continuidad-atencion_lista_para_continuidad`
  - definición: La atención está lista para enlazarse con piezas futuras.
- `atencion_lista_para_profundizacion`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_profundizacion-atencion_lista_para_profundizacion`
  - definición: La atención está lista para avanzar hacia mayor densidad o desarrollo.
- `atencion_no_abierta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_no_abierta-atencion_no_abierta`
  - definición: La atención aún no ha sido captada de forma efectiva.
- `atencion_requiere_reenganche`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_requiere_reenganche-atencion_requiere_reenganche`
  - definición: La atención necesita ser recuperada o reabierta.
- `atencion_sostenida`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_sostenida-atencion_sostenida`
  - definición: La atención ya tiene un grado fuerte de continuidad.
- `atencion_superficial`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_superficial-atencion_superficial`
  - definición: La atención está abierta, pero todavía en un nivel poco profundo.

#### `regimen_de_activacion_atencional`

- sección: `7.2`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Modo principal en que la realización debe activar, sostener o reabrir la atención.
- definición: Fijar el modo principal en que la realización debe activar, sostener o reabrir la atención. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `activacion_por_continuidad`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-activacion_por_continuidad-activacion_por_continuidad`
  - definición: La atención se apoya en continuidad con piezas previas o contexto ya activo.
- `apertura_inmediata`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_inmediata-apertura_inmediata`
  - definición: La realización debe abrir atención desde el inicio, sin preámbulos extensos.
- `apertura_progresiva`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_progresiva-apertura_progresiva`
  - definición: La realización puede construir la atención de forma escalonada.
- `reenganche`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-reenganche-reenganche`
  - definición: La realización debe recuperar una atención que ya estuvo abierta pero se aflojó.
- `sostenimiento_desde_el_inicio`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-sostenimiento_desde_el_inicio-sostenimiento_desde_el_inicio`
  - definición: La atención debe ser captada y mantenida desde el primer tramo.

#### `dinamica_procesual`

- sección: `7.3`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual`
- tipo de valor: Compuesto
- cardinalidad: Un valor obligatorio compuesto por cinco ejes
- resumen: Experiencia de recorrido de la realización compuesta por cinco ejes obligatorios.
- definición: Describir la experiencia de recorrido de la realización. Tipo de valor: compuesto. Cardinalidad: un valor obligatorio compuesto por cinco ejes.

##### Campos internos habilitados

###### `explicitud`

- sección: `7.3.1`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio de dinamica_procesual
- resumen: Eje que indica el grado en que la realización explicita sus relaciones principales.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: muchas cosas quedan implícitas. Media: parte importante del contenido se explicita. Alta: la realización vuelve muy claras sus relaciones principales.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-alta-alta`
  - definición: La realización vuelve muy claras sus relaciones principales.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-baja-baja`
  - definición: Muchas cosas quedan implícitas.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-media-media`
  - definición: Parte importante del contenido se explicita.

###### `continuidad`

- sección: `7.3.2`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio de dinamica_procesual
- resumen: Eje que indica la fluidez o discontinuidad del recorrido de la realización.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: recorrido más cortado o discontinuo. Media: continuidad suficiente pero no completamente fluida. Alta: recorrido muy continuo y articulado.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-alta-alta`
  - definición: Recorrido muy continuo y articulado.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-baja-baja`
  - definición: Recorrido más cortado o discontinuo.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-media-media`
  - definición: Continuidad suficiente pero no completamente fluida.

###### `friccion_interpretativa`

- sección: `7.3.3`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio de dinamica_procesual
- resumen: Eje que indica el esfuerzo interpretativo adicional exigido por el recorrido.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: el recorrido exige poco esfuerzo interpretativo adicional. Media: el recorrido contiene zonas moderadas de tensión interpretativa. Alta: el recorrido exige un trabajo inferenc…

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-alta-alta`
  - definición: El recorrido exige un trabajo inferencial fuerte.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-baja-baja`
  - definición: El recorrido exige poco esfuerzo interpretativo adicional.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-media-media`
  - definición: El recorrido contiene zonas moderadas de tensión interpretativa.

###### `compresion`

- sección: `7.3.4`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio de dinamica_procesual
- resumen: Eje que indica el grado de condensación del contenido en la realización.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: la realización se despliega con más amplitud. Media: combina condensación y despliegue. Alta: concentra mucho contenido en poco espacio.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-alta-alta`
  - definición: Concentra mucho contenido en poco espacio.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-baja-baja`
  - definición: La realización se despliega con más amplitud.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-media-media`
  - definición: Combina condensación y despliegue.

###### `recapitulacion`

- sección: `7.3.5`
- id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion`
- tipo de valor: Categorial ordinal
- cardinalidad: Eje obligatorio de dinamica_procesual
- resumen: Eje que indica el grado de recuperación, síntesis o reexpresión del recorrido.
- definición: Eje de dinámica procesual con valores baja, media y alta. Baja: pocas reformulaciones o recuperaciones del recorrido. Media: cierto grado de reformulación o síntesis parcial. Alta: fuerte presencia de recuperación, síntesis o reexpresión.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-alta-alta`
  - definición: Fuerte presencia de recuperación, síntesis o reexpresión.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-baja-baja`
  - definición: Pocas reformulaciones o recuperaciones del recorrido.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-media-media`
  - definición: Cierto grado de reformulación o síntesis parcial.

---

## 6. `dimension_construccion_del_caso`

- sección: `8`
- id: `grafo_de_regiones-grafo_dimension_construccion_del_caso`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_construccion_del_caso`
- resumen: Dimensión que describe la composición conceptual del caso y su organización narrativa dentro de la realización.
- definición: Describir la composición conceptual del caso y la forma en que ese caso se organiza narrativamente dentro de la realización.

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

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

Restricciones registradas en el nodo:

- Debe haber exactamente una configuración narrativa predominante.
- Debe ser coherente con la arquitectura macro y la segmentación de la salida.

##### Valores habilitados

- `abierta_controlada`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-abierta_controlada-abierta_controlada`
  - definición: El recorrido no se somete por completo a una arquitectura cerrada única, pero mantiene una coherencia controlada.
- `acumulativa`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-acumulativa-acumulativa`
  - definición: El recorrido avanza por suma sucesiva de capas, aportes o bloques.
- `apertura_profundizacion_cierre`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-apertura_profundizacion_cierre-apertura_profundizacion_cierre`
  - definición: La realización presenta una apertura distinguible, un desarrollo de profundización y un cierre reconocible.
- `contrastiva`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-contrastiva-contrastiva`
  - definición: El recorrido progresa mediante oposición, comparación o tensión entre partes.
- `lineal_progresiva`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-lineal_progresiva-lineal_progresiva`
  - definición: El recorrido avanza de forma continua desde un punto de inicio hacia un desarrollo posterior, sin grandes retrocesos ni reordenamientos.
- `modular`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-modular-modular`
  - definición: El recorrido se organiza en módulos relativamente autónomos, aunque conectados.
- `recapitulativa`
  - id: `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-recapitulativa-recapitulativa`
  - definición: El recorrido incorpora reformulaciones o recuperaciones internas del trayecto.

---

## 7. `dimension_comparecencia_performativa`

- sección: `9`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-dimension_comparecencia_performativa`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-dimension_comparecencia_performativa`
- tipo de valor: dimension
- resumen: Dimensión que describe cómo comparece la pieza como presencia verbal, corporal y performativa.
- definición: Describir cómo comparece la pieza como presencia verbal, corporal y performativa, indicando cómo suena, cómo se presenta, cuánto depende de la ejecución visible y en qué grado necesita explicitación escénica. Esta dimensión no describe todavía recursos complementarios externos como imágenes, videos…

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

### Campos habilitados

#### `comparecencia_performativa`

- sección: `9.1`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa`
- tipo de valor: Estructura compuesta
- cardinalidad: Una estructura obligatoria
- resumen: Configuración general de presencia performativa del emisor.
- definición: Fijar la configuración general de presencia performativa del emisor. Tipo de valor: estructura compuesta. Cardinalidad: una estructura obligatoria.

##### Campos internos habilitados

###### `autoridad`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-autoridad`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-autoridad`
- tipo de valor: Categorial ordinal
- resumen: Grado de autoridad expresiva con que comparece la voz.
- definición: Indica el grado de autoridad expresiva de la comparecencia. Tipo de valor: categorial ordinal. Espacio de valores: baja, media, alta.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-autoridad-alta-alta`
  - definición: La voz comparece con seguridad fuerte y alto peso de validación expresiva.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-autoridad-baja-baja`
  - definición: La voz no se apoya especialmente en autoridad explícita o seguridad marcada.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-autoridad-media-media`
  - definición: La voz transmite control suficiente sin volverse dominante o magistral.

###### `calidez`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-calidez`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-calidez`
- tipo de valor: Categorial ordinal
- resumen: Grado de calidez afectiva o reserva emocional de la comparecencia.
- definición: Indica el grado de calidez de la comparecencia. Tipo de valor: categorial ordinal. Espacio de valores: baja, media, alta.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-calidez-alta-alta`
  - definición: La comparecencia enfatiza acogida, empatía o acompañamiento afectivo.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-calidez-baja-baja`
  - definición: La comparecencia prioriza neutralidad o reserva afectiva.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-calidez-media-media`
  - definición: La comparecencia conserva una tonalidad cordial sin apoyarse fuertemente en lo afectivo.

###### `cercania`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-cercania`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-cercania`
- tipo de valor: Categorial ordinal
- resumen: Grado de proximidad o distancia expresiva de la comparecencia.
- definición: Indica el grado de cercanía de la comparecencia performativa. Tipo de valor: categorial ordinal. Espacio de valores: baja, media, alta.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-cercania-alta-alta`
  - definición: La comparecencia busca proximidad inmediata y relación directa con el receptor.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-cercania-baja-baja`
  - definición: La comparecencia mantiene distancia marcada y evita tono de proximidad.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-cercania-media-media`
  - definición: La comparecencia combina cercanía moderada con cierta reserva expresiva.

###### `intensidad`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-intensidad`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-intensidad`
- tipo de valor: Categorial ordinal
- resumen: Grado de energía expresiva y presencia ejecutiva de la realización.
- definición: Indica el grado de intensidad de la realización. Tipo de valor: categorial ordinal. Espacio de valores: baja, media, alta.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-intensidad-alta-alta`
  - definición: La realización exige energía expresiva marcada y alta presencia ejecutiva.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-intensidad-baja-baja`
  - definición: La realización mantiene baja carga expresiva y ritmo contenido.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-intensidad-media-media`
  - definición: La realización sostiene energía perceptible sin volverse enfática de forma constante.

###### `sobriedad`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-sobriedad`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-sobriedad`
- tipo de valor: Categorial ordinal
- resumen: Grado de contención formal o libertad expresiva admitida por la pieza.
- definición: Indica el grado de sobriedad de la realización. Tipo de valor: categorial ordinal. Espacio de valores: baja, media, alta.

####### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-sobriedad-alta-alta`
  - definición: La pieza exige contención formal y moderación visible en la ejecución.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-sobriedad-baja-baja`
  - definición: La pieza admite una realización más libre, expresiva o marcada.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-comparecencia_performativa-sobriedad-media-media`
  - definición: La pieza combina control formal con cierta flexibilidad expresiva.

#### `modalidad_de_guion`

- sección: `9.2`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modalidad_de_guion`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-modalidad_de_guion`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Modalidad general bajo la cual el guion comparece como pieza realizable.
- definición: Indicar la modalidad general bajo la cual el guión comparece como pieza realizable. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `escenificado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modalidad_de_guion-escenificado-escenificado`
  - definición: La pieza exige una realización basada en acciones o escenas visibles.
- `mixto`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modalidad_de_guion-mixto-mixto`
  - definición: La pieza combina de manera controlada varias modalidades de realización.
- `presentacion_a_camara`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modalidad_de_guion-presentacion_a_camara-presentacion_a_camara`
  - definición: La pieza se apoya principalmente en comparecencia directa ante cámara.
- `voz_en_off`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modalidad_de_guion-voz_en_off-voz_en_off`
  - definición: La pieza se realiza principalmente mediante voz sin presencia frontal dominante.

#### `modo_de_comparecencia_verbal`

- sección: `9.3`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modo_de_comparecencia_verbal`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-modo_de_comparecencia_verbal`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Modo en que la pieza comparece verbalmente.
- definición: Indicar cómo comparece verbalmente la pieza. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `oral_directo`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modo_de_comparecencia_verbal-oral_directo-oral_directo`
  - definición: La verbalización se presenta de forma directa, continua y frontal.
- `oral_escenico`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modo_de_comparecencia_verbal-oral_escenico-oral_escenico`
  - definición: La verbalización depende de una situación escénica o de acciones visibles.
- `oral_guiado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modo_de_comparecencia_verbal-oral_guiado-oral_guiado`
  - definición: La verbalización sigue una conducción más marcada o más estructurada.
- `oral_mixto`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-modo_de_comparecencia_verbal-oral_mixto-oral_mixto`
  - definición: La verbalización combina varios modos de comparecencia oral.

#### `realizacion_verbal_de_bloque`

- sección: `9.4`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-realizacion_verbal_de_bloque`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-realizacion_verbal_de_bloque`
- tipo de valor: Estructura compuesta
- cardinalidad: Una estructura disponible para composición local
- resumen: Componentes verbales locales que puede activar la pieza en sus bloques.
- definición: Indicar qué componentes verbales locales puede activar la pieza en sus bloques. Tipo de valor: estructura compuesta. Cardinalidad: una estructura disponible para composición local.

##### Campos internos habilitados

###### `dialogo`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-realizacion_verbal_de_bloque-dialogo`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-realizacion_verbal_de_bloque-dialogo`
- tipo de valor: Descriptivo controlado
- cardinalidad: Cero o más unidades por bloque
- resumen: Contenido verbal local realizable cuando exista material dialogado o equivalente.
- definición: Debe indicar el contenido verbal local realizable en un bloque cuando exista material dialogado o equivalente. Tipo de valor: descriptivo controlado. Cardinalidad: cero o más unidades por bloque.

Valores habilitados:

- Campo de valor abierto/controlado; la instancia contextual deberá declarar el valor concreto respetando el tipo de valor.

###### `emisor`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-realizacion_verbal_de_bloque-emisor`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-realizacion_verbal_de_bloque-emisor`
- tipo de valor: Descriptivo controlado
- cardinalidad: Cero o uno por bloque
- resumen: Tipo de emisor verbal que comparece localmente cuando un bloque lo requiere.
- definición: Debe indicar qué tipo de emisor verbal comparece localmente cuando el bloque lo requiere. Tipo de valor: descriptivo controlado. Cardinalidad: cero o uno por bloque.

Valores habilitados:

- Campo de valor abierto/controlado; la instancia contextual deberá declarar el valor concreto respetando el tipo de valor.

#### `acompanamiento_auditivo`

- sección: `9.5`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo`
- tipo de nodo: `compound_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo`
- tipo de valor: Estructura compuesta
- cardinalidad: Una estructura opcionalmente activable
- resumen: Tipos de acompañamiento auditivo que puede admitir la pieza.
- definición: Indicar qué tipos de acompañamiento auditivo puede admitir la pieza. Tipo de valor: estructura compuesta. Cardinalidad: una estructura opcionalmente activable.

##### Campos internos habilitados

###### `efecto_sonoro`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo-efecto_sonoro`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo-efecto_sonoro`
- tipo de valor: Descriptivo controlado
- cardinalidad: Cero o más por bloque
- resumen: Efectos sonoros puntuales relevantes para la ejecución local.
- definición: Debe indicar efectos sonoros puntuales relevantes para la ejecución local. Tipo de valor: descriptivo controlado. Cardinalidad: cero o más por bloque.

Valores habilitados:

- Campo de valor abierto/controlado; la instancia contextual deberá declarar el valor concreto respetando el tipo de valor.

###### `musica`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo-musica`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo-musica`
- tipo de valor: Descriptivo controlado
- cardinalidad: Cero o una configuración por bloque o por pieza
- resumen: Uso local o global de música cuando forme parte de la realización.
- definición: Debe indicar el uso local o global de música cuando ésta forme parte de la realización. Tipo de valor: descriptivo controlado. Cardinalidad: cero o una configuración por bloque o por pieza.

Valores habilitados:

- Campo de valor abierto/controlado; la instancia contextual deberá declarar el valor concreto respetando el tipo de valor.

###### `sonido_ambiente`

- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo-sonido_ambiente`
- tipo de nodo: `internal_field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-acompanamiento_auditivo-sonido_ambiente`
- tipo de valor: Descriptivo controlado
- cardinalidad: Cero o una configuración por bloque o por pieza
- resumen: Uso de ambientación sonora cuando acompañe la pieza.
- definición: Debe indicar el uso de ambientación sonora cuando ésta acompañe la pieza. Tipo de valor: descriptivo controlado. Cardinalidad: cero o una configuración por bloque o por pieza.

Valores habilitados:

- Campo de valor abierto/controlado; la instancia contextual deberá declarar el valor concreto respetando el tipo de valor.

#### `regimen_de_explicitacion_escenica`

- sección: `9.6`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_explicitacion_escenica`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_explicitacion_escenica`
- tipo de valor: Categorial ordinal
- cardinalidad: Un valor obligatorio
- resumen: Grado general en que la realización necesita explicitación escénica.
- definición: Indicar el grado general en que la realización necesita que su dimensión escénica quede explícitamente señalada. Tipo de valor: categorial ordinal. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `detallada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_explicitacion_escenica-detallada-detallada`
  - definición: La pieza depende de una explicitación escénica frecuente y estructuralmente importante.
- `minima`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_explicitacion_escenica-minima-minima`
  - definición: La pieza solo necesita un señalamiento escénico básico y muy controlado.
- `moderada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_explicitacion_escenica-moderada-moderada`
  - definición: La pieza necesita varias marcas de realización escénica para funcionar con claridad.
- `ninguna`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_explicitacion_escenica-ninguna-ninguna`
  - definición: La pieza no requiere explicitación escénica relevante en la configuración de entrada.

#### `tipo_de_escenificacion_admitida`

- sección: `9.7`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida`
- tipo de valor: Categorial cerrado
- cardinalidad: Uno o más valores compatibles
- resumen: Tipo general de escenificación compatible con la pieza.
- definición: Indicar qué tipo general de escenificación es compatible con la pieza. Tipo de valor: categorial cerrado. Cardinalidad: uno o más valores compatibles.

##### Valores habilitados

- `con_desplazamiento_controlado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-con_desplazamiento_controlado-con_desplazamiento_controlado`
  - definición: La pieza admite movimiento moderado y regulado del emisor dentro del encuadre.
- `con_objetos`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-con_objetos-con_objetos`
  - definición: La pieza admite incorporar objetos como parte relevante de la realización.
- `demostrativa`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-demostrativa-demostrativa`
  - definición: La pieza admite mostrar, señalar o ejemplificar visualmente elementos del contenido.
- `escenificada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-escenificada-escenificada`
  - definición: La pieza admite una realización claramente montada como escena o microescena.
- `estatica`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-estatica-estatica`
  - definición: La pieza puede realizarse con mínima variación espacial y bajo alta estabilidad corporal.
- `gestual`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-gestual-gestual`
  - definición: La pieza admite una realización apoyada en gestos visibles y marcación corporal.
- `mixta_controlada`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-tipo_de_escenificacion_admitida-mixta_controlada-mixta_controlada`
  - definición: La pieza puede combinar varios tipos de escenificación sin perder coherencia.

#### `densidad_de_accion_visible`

- sección: `9.8`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-densidad_de_accion_visible`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-densidad_de_accion_visible`
- tipo de valor: Categorial ordinal
- cardinalidad: Un valor obligatorio
- resumen: Cantidad de acción corporal o visible esperada en la pieza.
- definición: Indicar cuánta acción corporal o visible debe esperarse en la pieza. Tipo de valor: categorial ordinal. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-densidad_de_accion_visible-alta-alta`
  - definición: La pieza depende de una presencia activa y de acciones visibles frecuentes o relevantes.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-densidad_de_accion_visible-baja-baja`
  - definición: La pieza depende poco de acciones visibles y puede realizarse con mínima actividad corporal.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-densidad_de_accion_visible-media-media`
  - definición: La pieza requiere una cantidad moderada de acciones visibles distribuidas en la ejecución.

#### `regimen_de_encuadre_performativo`

- sección: `9.9`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Tipo general de encuadre compatible con la comparecencia de la pieza.
- definición: Indicar el tipo general de encuadre compatible con la comparecencia de la pieza. Tipo de valor: categorial cerrado. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `encuadre_con_reencuadre_controlado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo-encuadre_con_reencuadre_controlado-encuadre_con_reencuadre_controlado`
  - definición: La pieza admite cambios de encuadre puntuales y regulados como parte de su realización.
- `encuadre_dinamico_controlado`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo-encuadre_dinamico_controlado-encuadre_dinamico_controlado`
  - definición: La pieza admite una movilidad visual mayor, pero todavía sujeta a control compositivo.
- `encuadre_fijo_frontal`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo-encuadre_fijo_frontal-encuadre_fijo_frontal`
  - definición: La pieza se realiza principalmente en un encuadre frontal estable.
- `encuadre_fijo_variable`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo-encuadre_fijo_variable-encuadre_fijo_variable`
  - definición: La pieza conserva estabilidad general, pero admite pequeñas variaciones de toma o plano.
- `encuadre_mixto`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-regimen_de_encuadre_performativo-encuadre_mixto-encuadre_mixto`
  - definición: La pieza combina distintos regímenes de encuadre de manera organizada.

#### `grado_de_dependencia_de_la_performance_visible`

- sección: `9.10`
- id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-grado_de_dependencia_de_la_performance_visible`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_comparecencia_performativa-grado_de_dependencia_de_la_performance_visible`
- tipo de valor: Categorial ordinal
- cardinalidad: Un valor obligatorio
- resumen: Medida en que la eficacia de la pieza depende de la ejecución corporal o visible del emisor.
- definición: Indicar en qué medida la eficacia de la pieza depende de la ejecución corporal o visible del emisor. Tipo de valor: categorial ordinal. Cardinalidad: un valor obligatorio.

##### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-grado_de_dependencia_de_la_performance_visible-alta-alta`
  - definición: La performance visible resulta decisiva para la eficacia de la pieza.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-grado_de_dependencia_de_la_performance_visible-baja-baja`
  - definición: La pieza puede sostenerse incluso con performance visible reducida.
- `dominante`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-grado_de_dependencia_de_la_performance_visible-dominante-dominante`
  - definición: La performance visible ocupa un lugar central y casi definitorio en la realización.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_comparecencia_performativa-grado_de_dependencia_de_la_performance_visible-media-media`
  - definición: La performance visible aporta valor importante, aunque no carga por sí sola la pieza.

---

## 8. `dimension_marco_de_materializacion`

- sección: `10`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-dimension_marco_de_materializacion`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-dimension_marco_de_materializacion`
- resumen: Describir la clase general de salida y el marco material en el que esa salida pertenece al codominio.
- definición: Describir la clase general de salida y el marco material en el que esa salida pertenece al codominio.

Restricciones registradas en el nodo:

- `clase_de_materializacion`, `plataforma` y `aplicacion_de_plataforma` deben ser compatibles entre sí.

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

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

##### Valores habilitados

- `guion_audiovisual_breve` **[valor regional fijado]**
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion-guion_audiovisual_breve-guion_audiovisual_breve`
  - definición: La salida pertenece a la clase de guiones breves orientados a organizar una realización audiovisual corta.

#### `plataforma`

- sección: `10.2`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma`
- tipo de valor: Categorial cerrado.
- cardinalidad: Un valor obligatorio.
- resumen: Describir el entorno de plataforma para el que se construye la salida.
- definición: Describir el entorno de plataforma para el que se construye la salida. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio.

##### Valores habilitados

- `tiktok` **[valor regional fijado]**
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-tiktok-tiktok`
  - definición: La salida pertenece al entorno TikTok, con las restricciones y expectativas materiales asociadas a esa plataforma.

#### `aplicacion_de_plataforma`

- sección: `10.3`
- id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma`
- tipo de valor: Categorial cerrado.
- cardinalidad: Un valor obligatorio.
- resumen: Describir la aplicación específica del entorno de plataforma dentro de la cual la salida debe ser realizable.
- definición: Describir la aplicación específica del entorno de plataforma dentro de la cual la salida debe ser realizable. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio.

##### Valores habilitados

- `video_tiktok` **[valor regional fijado]**
  - id: `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-video_tiktok-video_tiktok`
  - definición: La salida debe comparecer como video breve vertical dentro del entorno TikTok.

---

## 9. `dimension_composicion_segmental_de_la_salida`

- sección: `11`
- id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida`
- resumen: Dimensión que describe cómo se organiza la salida en el tiempo y en la distribución interna de bloques, tramos y unidades de construcción.
- definición: Describir cómo se organiza la salida en el tiempo y en la distribución interna de bloques, tramos y unidades de construcción.

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

### Campos habilitados

#### `duracion_objetivo`

- sección: `11.1`
- id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-duracion_objetivo`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-duracion_objetivo`
- tipo de valor: Rango categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Campo que fija el rango temporal compatible de la salida.
- definición: Fijar el rango temporal compatible de la salida.

##### Valores habilitados

- `breve`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-duracion_objetivo-breve-breve`
  - definición: Salida breve estándar, con desarrollo corto pero reconocible.
- `breve_expandido`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-duracion_objetivo-breve_expandido-breve_expandido`
  - definición: Salida breve con mayor margen relativo de desarrollo interno.
- `muy_breve`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-duracion_objetivo-muy_breve-muy_breve`
  - definición: Salida extremadamente corta, con alta condensación y desarrollo mínimo.

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

- `apertura_contraste_resolucion`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_contraste_resolucion-apertura_contraste_resolucion`
  - definición: Apertura, núcleo contrastivo y resolución final.
- `apertura_desarrollo_cierre`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_cierre-apertura_desarrollo_cierre`
  - definición: Entrada inicial, desarrollo central y cierre explícito.
- `apertura_desarrollo_remate`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_remate-apertura_desarrollo_remate`
  - definición: Apertura, desarrollo y remate terminal breve y marcado.
- `apertura_lista_cierre`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_lista_cierre-apertura_lista_cierre`
  - definición: Apertura, núcleo en forma de lista y cierre.
- `apertura_secuencia_remate`
  - id: `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_secuencia_remate-apertura_secuencia_remate`
  - definición: Apertura, desarrollo por pasos o momentos secuenciales y remate breve.

---

## 10. `dimension_recursos_complementarios_de_manifestacion`

- sección: `12`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-dimension_recursos_complementarios_de_manifestacion`
- tipo de nodo: `dimension_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-dimension_recursos_complementarios_de_manifestacion`
- resumen: Dimensión que describe el régimen general de uso de recursos complementarios que acompañan al guión.
- definición: Describir el régimen general de uso de recursos complementarios que acompañan al guión sin fijar todavía su realización local por bloque. Su función es declarar, a nivel de entrada, qué clases de recursos complementarios usa la pieza, con qué peso los usa, qué función general cumplen, cómo se distr…

**Estado regional:** dimensión habilitada para construir instancias contextuales de video corto TikTok.

### Campos habilitados

#### `uso_de_texto_en_pantalla`

- sección: `12.1`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de texto en pantalla como recurso complementario de la pieza.
- definición: Indicar el régimen general de uso de texto en pantalla como recurso complementario de la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: Debe ser coherente con la modalidad de guion. No fija todavía contenidos conc…

##### Valores habilitados

- `sin_texto_en_pantalla`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-sin_texto_en_pantalla-sin_texto_en_pantalla`
  - definición: La pieza no depende de texto visible como recurso complementario.
- `texto_distribuido_de_refuerzo`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_distribuido_de_refuerzo-texto_distribuido_de_refuerzo`
  - definición: La pieza reparte pequeños apoyos textuales a lo largo de varios bloques.
- `texto_estructural`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_estructural-texto_estructural`
  - definición: El texto visible cumple una función importante en la organización de la pieza.
- `texto_minimo_de_refuerzo`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_minimo_de_refuerzo-texto_minimo_de_refuerzo`
  - definición: La pieza usa solo palabras clave o apoyos textuales muy breves.
- `texto_variable_segun_bloque`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_variable_segun_bloque-texto_variable_segun_bloque`
  - definición: La presencia de texto visible cambia según la función local de cada bloque.

#### `uso_de_imagen_generada`

- sección: `12.2`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de imágenes generadas o imágenes de apoyo dentro de la pieza.
- definición: Indicar el régimen general de uso de imágenes generadas o imágenes de apoyo dentro de la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: No fija todavía la imagen concreta ni su prompt local. Debe ser coherente con…

##### Valores habilitados

- `imagen_distribuida`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-imagen_distribuida-imagen_distribuida`
  - definición: La pieza reparte imágenes de apoyo en varios tramos del recorrido.
- `imagen_estructural`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-imagen_estructural-imagen_estructural`
  - definición: La pieza depende de imágenes como parte relevante de su composición general.
- `imagen_puntual_de_refuerzo`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-imagen_puntual_de_refuerzo-imagen_puntual_de_refuerzo`
  - definición: La pieza usa imágenes aisladas para reforzar momentos específicos.
- `imagen_variable_segun_bloque`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-imagen_variable_segun_bloque-imagen_variable_segun_bloque`
  - definición: El uso de imagen cambia según la función y necesidad de cada bloque.
- `sin_imagen_generada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-sin_imagen_generada-sin_imagen_generada`
  - definición: La pieza no incorpora imágenes generadas como recurso complementario.

#### `uso_de_video_generado`

- sección: `12.3`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de fragmentos visuales dinámicos o videos generados que acompañan la pieza.
- definición: Indicar el régimen general de uso de fragmentos visuales dinámicos o videos generados que acompañan la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: No fija todavía el video concreto ni su prompt local. Debe ser…

##### Valores habilitados

- `sin_video_generado`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-sin_video_generado-sin_video_generado`
  - definición: La pieza no incorpora fragmentos de video generado como recurso complementario.
- `video_distribuido`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-video_distribuido-video_distribuido`
  - definición: La pieza reparte fragmentos de video en varios bloques o segmentos.
- `video_estructural`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-video_estructural-video_estructural`
  - definición: La pieza depende de video complementario como parte importante de su organización.
- `video_puntual_de_refuerzo`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-video_puntual_de_refuerzo-video_puntual_de_refuerzo`
  - definición: La pieza usa videos breves solo en momentos específicos de apoyo.
- `video_variable_segun_bloque`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-video_variable_segun_bloque-video_variable_segun_bloque`
  - definición: El uso de video cambia según la función local de los bloques.

#### `uso_de_audio_generado`

- sección: `12.4`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el régimen general de uso de recursos sonoros o auditivos generados que acompañan el guión.
- definición: Indicar el régimen general de uso de recursos sonoros o auditivos generados que acompañan el guión. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: No fija todavía el contenido sonoro exacto por bloque. Debe ser coherente…

##### Valores habilitados

- `audio_distribuido`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-audio_distribuido-audio_distribuido`
  - definición: La pieza distribuye apoyos sonoros a lo largo de distintos bloques.
- `audio_estructural`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-audio_estructural-audio_estructural`
  - definición: El recurso sonoro cumple un papel relevante en la composición global de la pieza.
- `audio_puntual_de_refuerzo`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-audio_puntual_de_refuerzo-audio_puntual_de_refuerzo`
  - definición: La pieza usa apoyos sonoros aislados en momentos localizados.
- `audio_variable_segun_bloque`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-audio_variable_segun_bloque-audio_variable_segun_bloque`
  - definición: El uso de audio complementario cambia según la función local de los bloques.
- `sin_audio_generado`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-sin_audio_generado-sin_audio_generado`
  - definición: La pieza no incorpora audio generado como recurso complementario específico.

#### `funcion_predominante_de_los_recursos_complementarios`

- sección: `12.5`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios`
- tipo de valor: Categorial cerrado múltiple controlado
- cardinalidad: Uno o más valores compatibles
- resumen: Indicar qué función cumplen predominantemente los recursos complementarios dentro de la pieza.
- definición: Indicar qué función cumplen predominantemente los recursos complementarios dentro de la pieza. Tipo de valor: Categorial cerrado múltiple controlado. Cardinalidad: Uno o más valores compatibles. Restricciones: Los valores seleccionados deben ser compatibles e…

##### Valores habilitados

- `ambiental`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-ambiental-ambiental`
  - definición: Los recursos complementarios ayudan a construir atmósfera o contexto sensorial.
- `atencional`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-atencional-atencional`
  - definición: Los recursos complementarios ayudan a captar, sostener o reactivar la atención.
- `contrastiva`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-contrastiva-contrastiva`
  - definición: Los recursos complementarios introducen o refuerzan oposiciones relevantes.
- `demostrativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-demostrativa-demostrativa`
  - definición: Los recursos complementarios sirven para mostrar un procedimiento, caso o evidencia.
- `explicativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-explicativa-explicativa`
  - definición: Los recursos complementarios ayudan a hacer más comprensible el contenido principal.
- `ilustrativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-ilustrativa-ilustrativa`
  - definición: Los recursos complementarios sirven principalmente para mostrar o representar el contenido.
- `mixta_controlada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-mixta_controlada-mixta_controlada`
  - definición: Los recursos complementarios combinan varias funciones de forma organizada.
- `narrativa`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-narrativa-narrativa`
  - definición: Los recursos complementarios contribuyen al avance narrativo o secuencial de la pieza.
- `simbolica`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-simbolica-simbolica`
  - definición: Los recursos complementarios aportan imágenes, sonidos o elementos de valor simbólico.

#### `grado_de_dependencia_de_recursos_complementarios`

- sección: `12.6`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios`
- tipo de valor: Categorial ordinal
- cardinalidad: Un valor obligatorio
- resumen: Indicar en qué medida la pieza depende de los recursos complementarios para funcionar correctamente.
- definición: Indicar en qué medida la pieza depende de los recursos complementarios para funcionar correctamente. Tipo de valor: Categorial ordinal. Cardinalidad: Un valor obligatorio. Restricciones: Debe ser coherente con el uso declarado de cada tipo de recurso. No debe…

##### Valores habilitados

- `alta`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-alta-alta`
  - definición: La pieza depende claramente de esos recursos para alcanzar su forma esperada.
- `baja`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-baja-baja`
  - definición: La pieza puede sostenerse casi por completo sin depender de recursos complementarios.
- `dominante`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-dominante-dominante`
  - definición: Los recursos complementarios ocupan un lugar central en la eficacia de la pieza.
- `media`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-media-media`
  - definición: Los recursos complementarios aportan valor importante, pero no cargan el núcleo de la pieza.

#### `regimen_de_distribucion_de_recursos_complementarios`

- sección: `12.7`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar cómo se distribuyen globalmente los recursos complementarios a lo largo de la pieza.
- definición: Indicar cómo se distribuyen globalmente los recursos complementarios a lo largo de la pieza. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: Debe ser coherente con la arquitectura macro. Debe poder realizarse dentro de la…

##### Valores habilitados

- `concentrado_en_apertura`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios-concentrado_en_apertura-concentrado_en_apertura`
  - definición: Los recursos complementarios se usan principalmente al inicio de la pieza.
- `concentrado_en_cierre`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios-concentrado_en_cierre-concentrado_en_cierre`
  - definición: Los recursos complementarios se reservan principalmente para la clausura.
- `concentrado_en_desarrollo`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios-concentrado_en_desarrollo-concentrado_en_desarrollo`
  - definición: Los recursos complementarios se usan sobre todo en el núcleo de desarrollo.
- `distribucion_variable_controlada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios-distribucion_variable_controlada-distribucion_variable_controlada`
  - definición: La distribución cambia según necesidades locales, pero bajo un criterio estable.
- `distribuido_regularmente`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios-distribuido_regularmente-distribuido_regularmente`
  - definición: Los recursos complementarios se reparten con relativa regularidad a lo largo de la pieza.
- `distribuido_selectivamente`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-regimen_de_distribucion_de_recursos_complementarios-distribuido_selectivamente-distribuido_selectivamente`
  - definición: Los recursos complementarios aparecen solo en puntos estratégicos seleccionados.

#### `criterio_de_coherencia_de_recursos_complementarios`

- sección: `12.8`
- id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios`
- tipo de nodo: `field_node`
- definition_ref: `def/grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios`
- tipo de valor: Categorial cerrado
- cardinalidad: Un valor obligatorio
- resumen: Indicar el principio general que debe guiar la coherencia entre los recursos complementarios y el contenido principal del guión.
- definición: Indicar el principio general que debe guiar la coherencia entre los recursos complementarios y el contenido principal del guión. Tipo de valor: Categorial cerrado. Cardinalidad: Un valor obligatorio. Restricciones: Debe ser coherente con la función predominan…

##### Valores habilitados

- `coherencia_atmosferica`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios-coherencia_atmosferica-coherencia_atmosferica`
  - definición: Los recursos complementarios deben sostener la atmósfera general más que ilustrar literalmente.
- `coherencia_conceptual`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios-coherencia_conceptual-coherencia_conceptual`
  - definición: Los recursos complementarios deben alinearse con la idea o estructura conceptual del guión.
- `coherencia_literal`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios-coherencia_literal-coherencia_literal`
  - definición: Los recursos complementarios deben corresponder de manera directa y visible con el contenido.
- `coherencia_metaforica`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios-coherencia_metaforica-coherencia_metaforica`
  - definición: Los recursos complementarios pueden operar mediante equivalencias o asociaciones no literales.
- `coherencia_mixta_controlada`
  - id: `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-criterio_de_coherencia_de_recursos_complementarios-coherencia_mixta_controlada-coherencia_mixta_controlada`
  - definición: La coherencia puede combinar varios criterios, siempre que la combinación sea estable.

---
