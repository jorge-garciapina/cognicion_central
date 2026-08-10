# Modelo: Especialización progresiva de la publicidad

**Archivo:** `modelo_especializacion_progresiva_publicidad_referencias.md`  
**Tema:** especialización de la publicidad por medio, horario, canal, audiencia, lista, dato y contexto.  
**Objetivo:** formular un modelo conceptual e histórico que explique cómo la publicidad pasa de exposición general a emparejamientos cada vez más precisos entre mensaje, audiencia, momento y contexto.

---

## 1. Tesis central

La historia de la publicidad puede entenderse como una **especialización progresiva de las formas de inferir audiencia**.

En los primeros soportes públicos —letreros, carteles, pregones, escaparates— la publicidad alcanzaba a una audiencia relativamente heterogénea. El anunciante podía saber algo del **lugar**, pero sabía poco sobre la persona concreta que recibía el mensaje. Con el desarrollo de periódicos, revistas, radio, televisión, cable, correo directo, internet, redes sociales y publicidad programática, la publicidad fue creando mecanismos cada vez más finos para inferir:

```txt
quién está prestando atención
cuándo está prestando atención
por qué está prestando atención
en qué contexto está prestando atención
qué puede estar dispuesto a hacer después de recibir el mensaje
```

La publicidad eficiente no busca solamente más exposición. Busca **exposición cualificada**.

```txt
publicidad_general:
  mensaje expuesto ante audiencia amplia y heterogénea

publicidad_especializada:
  mensaje ubicado donde, cuando y ante quienes tiene mayor probabilidad de ser relevante
```

La fórmula general del modelo es:

```txt
publicidad_eficiente =
  mensaje_correcto
  + audiencia_probable
  + contexto_adecuado
  + momento_oportuno
  + mecanismo_de_medición
```

---

## 2. Núcleo conceptual

```yaml
nucleo_conceptual:
  id: NC_ESPECIALIZACION_PROGRESIVA_PUBLICIDAD
  titulo: "La especialización progresiva de la publicidad"
  formulacion: >
    La historia de la publicidad puede entenderse como una progresiva especialización
    del encuentro entre mensaje y audiencia. A medida que los medios se diferencian,
    los horarios se organizan, los canales se tematizan, las listas se vuelven
    disponibles y los datos se vuelven procesables, la publicidad deja de hablar a
    una masa indiferenciada y comienza a dirigirse a públicos cada vez más probables,
    en momentos cada vez más específicos y contextos cada vez más interpretables.

  principio:
    - la publicidad no sólo busca atención
    - busca atención cualificada
    - la especialización aumenta la probabilidad de relevancia
    - cada medio crea su propia forma de inferir audiencia
    - la especialización siempre depende de tecnología, logística, medición y cultura

  formula:
    publicidad_eficiente:
      - mensaje_correcto
      - audiencia_probable
      - contexto_adecuado
      - momento_oportuno
      - medicion_de_respuesta
```

---

## 3. Idea rectora: cada medio ofrece una forma distinta de inferir audiencia

La parte más importante del modelo no es simplemente decir que “los juguetes se anuncian en horarios infantiles” o que “los autos se anuncian en deportes”. Eso sólo es un caso particular.

La idea más profunda es:

```txt
cada medio ofrece una forma distinta de inferir audiencia
```

Ejemplos:

```txt
calle:
  inferencia por ubicación

periódico:
  inferencia por lector, ciudad, sección y actualidad

revista:
  inferencia por interés y estilo de vida

radio:
  inferencia por rutina, horario, formato y localidad

televisión abierta:
  inferencia por horario, programa, género y rating

televisión por cable:
  inferencia por canal, nicho, identidad temática y afinidad cultural

correo directo:
  inferencia por lista, historial de compra, respuesta previa y geografía

internet:
  inferencia por búsqueda, contenido, conducta, intención y datos

DOOH:
  inferencia por lugar, hora, clima, tráfico, evento y tipo de venue

programmatic advertising:
  inferencia por señales contextuales, conductuales y de perfil procesadas en tiempo real
```

Por tanto:

```txt
historia_de_la_publicidad = historia_de_las_formas_de_inferir_audiencia
```

---

## 4. Modelo histórico de especialización publicitaria

```yaml
modelo_especializacion_publicitaria:
  etapa_1_exposicion_local_general:
    soportes:
      - letrero
      - cartel
      - escaparate
      - pregon
      - anuncio_en_punto_de_venta
    criterio_de_segmentacion:
      - lugar
      - flujo_de_personas
      - proximidad_a_la_tienda
    precision: baja
    forma_de_inferencia: "Quien pasa por aquí puede comprar aquí."
    limite: >
      La audiencia es heterogénea. El medio sabe dónde está el receptor, pero no
      sabe mucho sobre sus intereses.

  etapa_2_impreso_general:
    soportes:
      - periodico
      - hoja_volante
      - folleto
      - clasificados
    criterio_de_segmentacion:
      - ciudad
      - lector_del_periodico
      - seccion
      - fecha
    precision: baja_media
    forma_de_inferencia: "Quien lee este periódico pertenece a cierta comunidad informativa."
    limite: >
      El periódico concentra lectores, pero todavía habla a públicos amplios.

  etapa_3_impreso_especializado:
    soportes:
      - revista_especializada
      - trade_publication
      - catalogo_tematico
    criterio_de_segmentacion:
      - interes
      - profesion
      - hobby
      - estilo_de_vida
    precision: media_alta
    forma_de_inferencia: "Quien lee esta revista ya se autoseleccionó por interés."
    limite: >
      La audiencia puede ser menor, pero más valiosa para ciertas categorías.

  etapa_4_horario_radio_tv:
    soportes:
      - radio
      - television_abierta
    criterio_de_segmentacion:
      - daypart
      - rutina_diaria
      - programa
      - genero_de_contenido
    precision: media
    forma_de_inferencia: "Quien está escuchando o viendo a esta hora tiene una rutina probable."
    limite: >
      La segmentación horaria es probabilística, no absoluta.

  etapa_5_canal_tematico:
    soportes:
      - cable_tv
      - canales_de_nicho
      - señales_de_noticias
      - canales_infantiles
      - canales_de_musica
      - canales_de_deportes
      - canales_de_estilo_de_vida
    criterio_de_segmentacion:
      - identidad_del_canal
      - tematica
      - afinidad_de_audiencia
      - paquete_de_suscripcion
    precision: media_alta
    forma_de_inferencia: "Quien ve este canal pertenece probablemente a un interés o perfil cultural."
    limite: >
      La audiencia se fragmenta; los canales son más precisos, pero pueden tener menos escala.

  etapa_6_lista_y_respuesta:
    soportes:
      - correo_directo
      - catalogos
      - email
      - bases_de_datos_de_clientes
    criterio_de_segmentacion:
      - comprador_previo
      - lista
      - geografia
      - respuesta_anterior
      - categoria_de_producto
    precision: alta
    forma_de_inferencia: "Quien está en esta lista ya mostró una relación comercial o probabilidad de interés."
    limite: >
      La calidad de la lista y la actualización de los datos determinan la eficacia.

  etapa_7_datos_y_algoritmos:
    soportes:
      - buscadores
      - redes_sociales
      - video_platforms
      - programmatic_display
      - retail_media
      - connected_tv
    criterio_de_segmentacion:
      - intencion
      - comportamiento
      - perfil
      - contexto
      - retargeting
      - lookalikes
      - señales_en_tiempo_real
    precision: muy_alta
    forma_de_inferencia: "El sistema decide impresión por impresión qué anuncio tiene mayor probabilidad de relevancia."
    limite: >
      Más precisión también implica problemas de privacidad, opacidad, saturación y fatiga publicitaria.

  etapa_8_contexto_dinamico:
    soportes:
      - DOOH
      - pantallas_digitales_en_tiendas
      - apps_moviles
      - geofencing
      - anuncios_contextuales
    criterio_de_segmentacion:
      - ubicacion
      - hora
      - clima
      - evento
      - tipo_de_venue
      - flujo_de_personas
      - contexto_de_consumo
    precision: contextual_alta
    forma_de_inferencia: "El anuncio se ajusta al lugar y situación en que aparece."
    limite: >
      La relevancia depende de interpretar correctamente el contexto, no sólo de mostrar dinámicamente un mensaje.
```

---

## 5. Especialización por medio

### 5.1. Calle, cartel, escaparate y publicidad exterior

La publicidad exterior no es completamente general. Tiene una forma básica de segmentación: **la ubicación**.

```yaml
segmentacion_por_lugar:
  medio:
    - letrero
    - cartel
    - escaparate
    - billboard
    - publicidad_exterior
  dato_disponible:
    - ubicacion
    - flujo_de_personas
    - cercania_al_punto_de_venta
    - tipo_de_zona
    - horario_de_transito
  ventaja:
    - alta_relevancia_local
    - proximidad_a_la_accion
    - repeticion_visual
  limitacion:
    - poca_informacion_individual
    - audiencia_heterogenea
    - medicion_historicamente_limitada
```

La versión contemporánea es **Digital Out-of-Home**. Según la definición de IAB, DOOH incluye pantallas digitales en espacios públicos o comerciales y permite contenido dinámico o interactivo. En versiones avanzadas puede incorporar señales como ubicación, hora del día, clima, venue, tipo de pantalla, geografía o contexto.

**Principio:**

```txt
letrero_estatico:
  segmenta por ubicación

DOOH:
  segmenta por ubicación + momento + contexto + señales dinámicas
```

---

### 5.2. Periódico

El periódico introduce una segmentación por comunidad de lectura, ciudad, actualidad y sección.

```yaml
periodico:
  segmentacion:
    - ciudad
    - circulacion
    - linea_editorial
    - seccion
    - dia_de_publicacion
    - clasificados
  ejemplos:
    - autos_en_seccion_de_autos
    - empleos_en_clasificados
    - teatro_en_cultura
    - supermercados_en_edicion_dominical
  tipo_de_inferencia: >
    El lector puede no ser conocido individualmente, pero el soporte permite inferir
    intereses según sección y hábito de lectura.
```

El periódico es importante porque combina dos lógicas:

```txt
alcance_local
  + actualidad
  + secciones
  + hábito de lectura
```

---

### 5.3. Revistas especializadas

La revista especializada es probablemente el antecedente impreso más claro del canal de cable especializado.

```yaml
revistas:
  segmentacion:
    - interes
    - profesion
    - hobby
    - genero
    - clase
    - estilo_de_vida
    - comunidad_de_consumo
  ejemplos:
    - revista_de_autos
    - revista_de_moda
    - revista_medica
    - revista_de_negocios
    - revista_infantil
    - revista_de_hobbies
  tipo_de_inferencia: >
    El lector se autoselecciona por interés. Por eso el espacio publicitario puede
    tener menos alcance bruto, pero mayor afinidad con ciertas categorías.
```

Una fuente de Media Communication explica que la especialización de revistas refleja la especificidad creciente de mercados y audiencias; también señala que los anunciantes suelen preferir publicaciones especializadas porque sus anuncios llegan a una demografía más orientada al producto.

**Principio:**

```txt
el contenido especializa al lector,
y el lector especializado aumenta el valor del espacio publicitario.
```

---

### 5.4. Radio

La radio segmenta principalmente por **horario**, **formato**, **rutina** y **localidad**.

```yaml
radio:
  segmentacion:
    - daypart
    - formato_musical
    - locutor
    - rutina_diaria
    - region
    - estacion
  dayparts_tipicos:
    - morning_drive
    - midday
    - afternoon_drive
    - evening
    - overnight
  ejemplos:
    - cafe_y_desayuno_en_morning_drive
    - restaurantes_en_afternoon_drive
    - conciertos_en_estaciones_musicales
    - servicios_locales_en_horarios_de_traslado
```

El caso de la radio muestra que la segmentación temporal no sólo trata de audiencia, sino de **situación corporal y mental**:

```txt
mañana:
  inicio del día, traslado, noticias, energía, café

tarde:
  regreso, cansancio, comida, compras, entretenimiento

noche:
  nichos, programas especializados, menor movilidad
```

La investigación de Sweeting sobre el timing de comerciales de radio muestra que las estaciones pueden coordinar o diferenciar sus cortes comerciales de forma estratégica, y que el valor del comercial depende de cuántos oyentes lo escuchan y de la posibilidad de que cambien de estación.

---

### 5.5. Televisión abierta comercial

La televisión abierta comercial organiza audiencias por **daypart**, **programa**, **género** y **rating**.

```yaml
television_abierta_comercial:
  ingreso_principal:
    - publicidad
  activo_vendido:
    - audiencia
    - alcance
    - rating
    - franja_horaria
    - perfil_demografico
  logica:
    - atraer_audiencia_masiva
    - ordenar_horarios
    - vender_bloques_publicitarios
```

La televisión abierta no sólo vende “tiempo”; vende probabilidad de llegar a ciertos públicos en ciertos momentos.

```yaml
television_abierta_dayparting:
  manana:
    posibles_audiencias:
      - adultos_en_casa
      - noticias
      - publico_en_rutina_matinera
    publicidad_probable:
      - alimentos
      - limpieza
      - salud
      - retail

  tarde:
    posibles_audiencias:
      - ninos
      - adolescentes
      - publico_post_escuela
      - familias
    publicidad_probable:
      - juguetes
      - snacks
      - entretenimiento
      - productos_familiares

  prime_time:
    posibles_audiencias:
      - hogares_completos
      - adultos
      - familias
      - audiencia_masiva
    publicidad_probable:
      - autos
      - telecomunicaciones
      - banca
      - consumo_masivo
      - grandes_marcas

  late_night:
    posibles_audiencias:
      - adultos
      - jovenes
      - nichos
    publicidad_probable:
      - entretenimiento
      - comida_rapida
      - servicios
```

**Matiz importante:** la segmentación por horario es probabilística. No significa que un grupo sólo vea televisión en una franja. La FTC, por ejemplo, comparó exposición infantil a publicidad televisiva entre 1977 y 2004 y muestra que los niños no se concentran únicamente en “bloques infantiles”, sino que consumen televisión en múltiples momentos y contextos.

---

### 5.6. Televisión pública / servicio público

Conviene distinguir “televisión abierta” de “televisión pública”. La televisión abierta puede ser comercial. La televisión pública o de servicio público puede financiarse mediante fondos públicos, licencia, donaciones, patrocinios o mezclas reguladas.

```yaml
television_publica_servicio_publico:
  ingresos_posibles:
    - fondos_publicos
    - licencia
    - donaciones
    - patrocinios
    - publicidad_limitada_en_algunos_paises
  activo_principal:
    - legitimidad_publica
    - cobertura_nacional
    - servicio_cultural
    - informacion
    - educacion
  logica:
    - mandato_publico
    - pluralidad
    - educacion
    - informacion
    - cultura
```

En este modelo, la programación no se organiza exclusivamente para vender audiencias a anunciantes. También puede organizarse por mandato cultural, educativo, informativo o nacional.

---

### 5.7. Televisión por cable

El cable introduce una especialización más explícita: canales organizados por identidad temática.

```yaml
television_por_cable:
  ingresos:
    - suscripcion
    - carriage_fees
    - publicidad
  activo_vendido_a_anunciantes:
    - audiencia_segmentada
    - afinidad_con_canal
    - contexto_tematico
    - daypart
    - region
  activo_vendido_a_distribuidores:
    - contenido_deseado
    - marca_del_canal
    - lealtad_de_audiencia
```

Ejemplos de identidad temática:

```txt
Cartoon Network / Nickelodeon / Disney Channel:
  infancia, familia, juguetes, snacks, entretenimiento infantil

MTV:
  juventud, música, moda, cultura pop

CNN:
  noticias, política, actualidad, audiencia informada

ESPN:
  deportes, eventos en vivo, audiencia deportiva

Food Network:
  cocina, hogar, comida, utensilios

Discovery / History:
  documental, curiosidad, ciencia popular, historia, tecnología
```

Aquí el anunciante no sólo compra audiencia. Compra **contexto de significado**.

La televisión por cable puede describirse como transición de broadcasting a narrowcasting:

```txt
broadcasting:
  comunicar a audiencias amplias

narrowcasting:
  comunicar a públicos definidos por intereses o identidad temática
```

---

### 5.8. Correo directo, catálogo y bases de datos

El correo directo especializa mediante **listas**.

```yaml
correo_directo:
  segmentacion:
    - lista_de_clientes
    - compradores_previos
    - ubicacion
    - categoria_de_producto
    - respuesta_previa
    - perfil_comercial
  ejemplos:
    - catalogo_agricola_a_agricultores
    - herramientas_a_talleres
    - renovacion_a_clientes_existentes
    - oferta_de_producto_complementario_a_compradores_previos
```

El correo directo es una forma clave de especialización porque deja de depender sólo del soporte o del horario. La pregunta cambia:

```txt
¿quién lee este medio?
```

por:

```txt
¿quién está en esta lista?
```

Esto anticipa la lógica del marketing de base de datos.

---

### 5.9. Internet y redes sociales

Internet lleva la especialización a una escala mucho más fina.

```yaml
internet:
  segmentacion:
    - busqueda
    - contenido
    - comportamiento
    - datos_demograficos
    - intereses
    - retargeting
    - lookalikes
    - intencion
    - contexto
    - tiempo_real
  ejemplos:
    - anuncio_de_tenis_despues_de_visitar_tienda_deportiva
    - anuncio_contextual_en_articulo_de_running
    - anuncio_de_software_en_video_de_productividad
    - retargeting_de_carrito_abandonado
```

La publicidad digital puede operar por dos grandes familias:

```txt
publicidad_contextual:
  el anuncio se empareja con el contenido o contexto

publicidad_tracking-based / personalizada:
  el anuncio se empareja con datos de comportamiento, perfil o historial
```

El modelo programático automatiza esta relación:

```txt
impresion_disponible
  → señales_contextuales / datos_usuario
    → puja_en_tiempo_real
      → anuncio_seleccionado
        → medicion_de_resultado
```

---

### 5.10. DOOH y contexto dinámico

DOOH actualiza la publicidad exterior con pantallas digitales, datos contextuales y contenido dinámico.

```yaml
DOOH:
  segmentacion:
    - ubicacion
    - hora
    - clima
    - trafico
    - evento_cercano
    - tipo_de_venue
    - audiencia_estimada
  ejemplos:
    - cafe_por_la_manana_cerca_de_oficinas
    - comida_rapida_cerca_de_carreteras
    - bebidas_frias_en_dias_calidos
    - paraguas_en_dia_de_lluvia
    - anuncios_de_evento_cerca_de_estadio
```

El DOOH muestra que la especialización no siempre es individual. Puede ser **contextual**.

```txt
no necesito saber quién eres individualmente;
puedo saber dónde estás, qué hora es, qué clima hay y qué situación probablemente estás viviendo.
```

---

## 6. Diferencia entre televisión abierta, televisión pública y cable

| Medio | Financiamiento típico | Lógica publicitaria | Tipo de audiencia | Tipo de segmentación |
|---|---|---|---|---|
| Televisión abierta comercial | Publicidad | Vender alcance y rating | Masiva | Horario, programa, género, demografía |
| Televisión pública / servicio público | Fondos públicos, licencia, donaciones, patrocinios, publicidad limitada según país | Cumplir mandato público; publicidad no siempre central | Ciudadana / cultural / nacional | Programación por servicio, educación, cultura, información |
| Televisión por cable | Suscripción + publicidad + carriage fees | Vender audiencia segmentada y contexto temático | Nichos o comunidades de interés | Canal, tema, estilo, interés, paquete, daypart |

En términos simples:

```txt
television_abierta_comercial:
  maximizar alcance amplio y vender rating

television_publica:
  sostener servicio público, cultura e información

television_por_cable:
  combinar suscripción, nicho, identidad de canal y publicidad segmentada
```

---

## 7. Fragmentación de audiencia

La especialización de canales lleva a la fragmentación de audiencia.

```txt
menos concentración en pocos medios
  → más canales
    → más nichos
      → audiencias más dispersas
        → media planning más complejo
          → mayor necesidad de segmentación y medición
```

La FTC observó que en 1977 las tres grandes cadenas estadounidenses concentraban una proporción muy alta del viewing en prime time, mientras que en 2004 ese share se había reducido fuertemente con el crecimiento de cable, VHS, videojuegos y otras alternativas de pantalla. Esta fragmentación implica que ya no basta comprar unos pocos espacios masivos; hay que construir combinaciones de medios, horarios, canales y audiencias.

---

## 8. De la masa al contexto: estructura conceptual completa

```txt
exposición general:
  "que lo vea quien pase"

segmentación por lugar:
  "que lo vea quien está cerca"

segmentación por soporte:
  "que lo vea quien lee este periódico o revista"

segmentación por sección:
  "que lo vea quien está leyendo sobre este tema"

segmentación por horario:
  "que lo vea quien probablemente está disponible a esta hora"

segmentación por programa:
  "que lo vea quien eligió este contenido"

segmentación por canal:
  "que lo vea quien se identifica con este canal o tema"

segmentación por lista:
  "que lo reciba quien ya mostró probabilidad de interés"

segmentación por datos:
  "que lo vea quien muestra señales de intención o perfil"

segmentación contextual dinámica:
  "que lo vea quien está en esta situación concreta"
```

---

## 9. mNode central

```yaml
mnode_id: NC_ESPECIALIZACION_PROGRESIVA_PUBLICIDAD
familia_cognitiva: FAM-Idea
estatus_de_extraccion: sintesis_conceptual
formulacion: >
  La publicidad se especializa cuando los medios permiten inferir mejor la audiencia.
  Cada avance mediático, logístico y tecnológico introduce una forma nueva de
  cualificar atención: lugar, soporte, sección, horario, programa, canal, lista,
  comportamiento, intención o contexto.
rol_operativo: modelar_evolucion_publicitaria_por_precision_de_audiencia
estructura_interna:
  unidad_inicial: exposicion_general
  variable_de_evolucion: precision_de_inferencia_de_audiencia
  medios:
    - calle
    - periodico
    - revista
    - radio
    - television_abierta
    - television_por_cable
    - correo_directo
    - internet
    - redes_sociales
    - DOOH
    - programmatic
  resultado:
    - audiencia_mas_probable
    - mensaje_mas_relevante
    - contexto_mas_preciso
    - medicion_mas_fina
conecta_con:
  - NC_PUBLICIDAD_TECNOLOGIA_SOCIEDAD_LOGISTICA
  - MODELO_RELACIONAL_PUBLICIDAD
  - HISTORIA_DE_LAS_FORMAS_DE_INFERIR_AUDIENCIA
```

---

## 10. Moldes derivados

### 10.1. Molde de especialización por medio

```yaml
mnode_id: DIS_MOLDE_ESPECIALIZACION_POR_MEDIO
familia_cognitiva: FAM-Diseño
formulacion: >
  Cada medio publicitario permite inferir audiencia mediante una variable dominante:
  ubicación, lector, sección, horario, programa, canal, lista, dato o contexto.
estructura:
  medio:
  variable_de_inferencia:
  tipo_de_audiencia_probable:
  tipo_de_mensaje_adecuado:
  limitacion:
  forma_de_medicion:
```

### 10.2. Molde de dayparting

```yaml
mnode_id: DIS_MOLDE_DAYPARTING_PUBLICITARIO
familia_cognitiva: FAM-Diseño
formulacion: >
  La segmentación por horario organiza la publicidad según rutinas probables,
  disponibilidad mental y composición demográfica de la audiencia.
estructura:
  franja_horaria:
  rutina_probable:
  audiencia_probable:
  estado_psicologico:
  categorias_publicitarias_adecuadas:
  riesgo_de_mala_ubicacion:
```

### 10.3. Molde de canal especializado

```yaml
mnode_id: DIS_MOLDE_CANAL_ESPECIALIZADO
familia_cognitiva: FAM-Diseño
formulacion: >
  Un canal especializado convierte el contenido en señal de audiencia: quien mira
  un canal temático probablemente comparte un interés, edad, estilo de vida o marco
  cultural asociado con ese canal.
estructura:
  canal:
  identidad_tematica:
  audiencia_probable:
  anunciantes_afines:
  riesgo_de_sobregeneralizacion:
  forma_de_medicion:
```

### 10.4. Molde de publicidad por lista

```yaml
mnode_id: DIS_MOLDE_PUBLICIDAD_POR_LISTA
familia_cognitiva: FAM-Diseño
formulacion: >
  La publicidad por lista reemplaza la inferencia por soporte con una inferencia
  basada en relación previa, historial o probabilidad de interés.
estructura:
  lista:
  fuente_de_lista:
  criterio_de_inclusion:
  producto_ofrecido:
  respuesta_esperada:
  medicion:
```

### 10.5. Molde de publicidad contextual-dinámica

```yaml
mnode_id: DIS_MOLDE_PUBLICIDAD_CONTEXTUAL_DINAMICA
familia_cognitiva: FAM-Diseño
formulacion: >
  La publicidad contextual-dinámica selecciona o adapta el mensaje según señales
  de situación: lugar, hora, clima, contenido, evento, dispositivo o entorno.
estructura:
  contexto:
  señal_disponible:
  inferencia:
  mensaje_adaptado:
  accion_esperada:
  medicion:
```

---

## 11. Reglas del modelo

```yaml
reglas_del_modelo:
  R1:
    nombre: "La segmentación es probabilística"
    formulacion: >
      Ningún horario, canal o soporte garantiza una audiencia pura; sólo aumenta
      la probabilidad de encontrar cierto tipo de receptor.

  R2:
    nombre: "Cada medio infiere audiencia de forma distinta"
    formulacion: >
      La calle infiere por ubicación, la radio por rutina, la revista por interés,
      el cable por canal, el correo por lista y lo digital por datos/contexto.

  R3:
    nombre: "La especialización aumenta relevancia, pero puede reducir escala"
    formulacion: >
      A mayor precisión de audiencia, puede haber menor alcance bruto; el valor está
      en la relación entre afinidad, costo y resultado.

  R4:
    nombre: "El contenido cualifica audiencia"
    formulacion: >
      Un programa, sección, revista o canal no sólo entretiene o informa; también
      clasifica probabilísticamente a quienes lo consumen.

  R5:
    nombre: "La logística sostiene la promesa publicitaria"
    formulacion: >
      La especialización publicitaria sólo funciona si el producto, distribución,
      compra y entrega pueden responder a esa audiencia.

  R6:
    nombre: "La medición selecciona qué especialización sobrevive"
    formulacion: >
      Una segmentación puede parecer lógica, pero sólo su desempeño medido muestra
      si realmente produce respuesta, ventas o recuerdo.
```

---

## 12. Tabla comparativa de medios y formas de inferencia

| Medio | Variable dominante de inferencia | Tipo de especialización | Ejemplo | Riesgo |
|---|---|---|---|---|
| Letrero / cartel | Ubicación | Local | Restaurante cerca de oficina | Audiencia heterogénea |
| Periódico | Ciudad / sección / actualidad | Cívica y temática parcial | Anuncio de autos en sección autos | Lector amplio |
| Revista | Interés / estilo de vida | Nicho | Cosmética en revista de moda | Menor alcance |
| Radio | Horario / formato / rutina | Temporal y local | Café en morning drive | Zapping / cambio de estación |
| TV abierta | Daypart / programa / rating | Masiva con franjas | Autos en prime time | Costo alto / audiencia amplia |
| TV pública | Mandato cultural / informativo | Servicio público | Campañas educativas | Publicidad limitada o regulada |
| Cable | Canal / temática / suscripción | Narrowcasting | Deportes en ESPN | Fragmentación / escala limitada |
| Correo directo | Lista / historial | Relacional | Catálogo a compradores previos | Lista desactualizada |
| Internet | Búsqueda / conducta / contenido | Intención y comportamiento | Anuncio tras búsqueda | Privacidad / saturación |
| Redes sociales | Intereses / algoritmo / interacción | Microsegmentación | Retargeting / lookalike | Fatiga / opacidad algorítmica |
| DOOH | Lugar / hora / clima / venue | Contexto dinámico | Bebida fría en día caluroso | Medición indirecta |
| Programmatic | Señales en tiempo real | Impresión por impresión | RTB con audiencia y contexto | Privacidad / transparencia |

---

## 13. Aplicación a creación de contenido ACCD

Este modelo puede generar múltiples realizaciones:

```yaml
realizaciones_posibles:
  video_corto:
    hook: "La historia de la publicidad es la historia de cómo aprendimos a saber quién está mirando."
    estructura:
      - calle: segmentación por lugar
      - periódico: segmentación por sección
      - radio: segmentación por horario
      - cable: segmentación por canal
      - internet: segmentación por datos
      - tesis: cada medio inventa una forma de inferir audiencia

  carousel:
    titulo: "La publicidad no se volvió más creativa: se volvió más precisa"
    laminas:
      - exposición general
      - lugar
      - sección
      - horario
      - canal
      - lista
      - datos
      - contexto dinámico
      - fórmula final

  clase:
    tema: "De broadcasting a programmatic: historia de la especialización publicitaria"
    ejes:
      - medios y audiencia
      - dayparting
      - revistas y canales de nicho
      - cable y fragmentación
      - direct mail y bases de datos
      - digital y programmatic
      - límites: privacidad, fragmentación, saturación

  grafo:
    nodo_raiz: NC_ESPECIALIZACION_PROGRESIVA_PUBLICIDAD
    ramas:
      - lugar
      - soporte
      - sección
      - horario
      - canal
      - lista
      - dato
      - contexto
```

---

## 14. Tesis final del estudio

La publicidad no evoluciona sólo porque cambian las técnicas creativas. Evoluciona porque cambian las formas de identificar, inferir, agrupar y activar audiencias.

```txt
En la calle, la audiencia se infería por ubicación.
En el periódico, por comunidad de lectura y sección.
En la revista, por interés.
En la radio, por rutina y horario.
En la televisión abierta, por programa y daypart.
En el cable, por identidad de canal.
En el correo directo, por lista.
En internet, por intención, comportamiento y contexto.
En DOOH, por situación ambiental.
En programmatic, por señales procesadas impresión por impresión.
```

Por tanto:

```txt
La especialización publicitaria es el proceso histórico mediante el cual
los medios aumentan la capacidad de inferir audiencia probable y adaptar
mensajes a contextos de recepción cada vez más precisos.
```

---

# Referencias aumentadas

## A. Especialización de revistas, nichos y medios impresos

1. **Specialization of Magazines — Media Communication / Pressbooks**  
   URL: https://oer.pressbooks.pub/mediacommunication/chapter/specialization-of-magazines/  
   Uso: explica cómo las revistas se especializan en nichos y cómo esa especialización atrae anunciantes que quieren llegar a audiencias específicas.

2. **Specialization of Magazines — Texas A&M Open Educational Resources**  
   URL: https://odp.library.tamu.edu/mediacommunication2e/chapter/specialization-of-magazines/  
   Uso: versión alternativa del mismo contenido educativo; útil como respaldo para la idea de fragmentación y nichos editoriales.

3. **Lumen Learning — Specialization of Magazines**  
   URL: https://courses.lumenlearning.com/suny-massmedia/chapter/5-6-specialization-of-magazines/  
   Uso: explica que los mercados de nicho pueden tener menos lectores, pero resultan atractivos para anunciantes porque concentran intereses.

## B. Radio: dayparting, horarios y estrategia publicitaria

4. **Edison Research — The dayparts when audio platforms see peak listening**  
   URL: https://www.edisonresearch.com/the-dayparts-when-audio-platforms-see-peak-listening/  
   Uso: muestra el concepto de morning drive time y picos de escucha en audio.

5. **Andrew Sweeting — Coordination, Differentiation and the Timing of Radio Commercials**  
   URL: https://econweb.umd.edu/~sweeting/ASweeting_RFTimingAccepted.pdf  
   Uso: estudio académico sobre timing de comerciales de radio, coordinación entre estaciones, zapping y valor de los cortes comerciales.

6. **The Media Handbook, Second Edition — Media planning and radio dayparts**  
   URL: https://ndl.ethernet.edu.et/bitstream/123456789/18320/1/120pdf.pdf  
   Uso: manual de medios que explica que la radio se planifica principalmente por dayparts y ratings de periodos de tiempo.

7. **South Seas Broadcasting — Radio Glossary: Dayparts**  
   URL: https://www.southseasbroadcasting.com/advertise-with-us/glossary/  
   Uso: referencia básica de industria sobre dayparts de radio.

## C. Televisión abierta, prime time y segmentación por horario

8. **Deng & Mela — TV Viewing and Advertising Targeting**  
   URL: https://www.jstor.org/stable/44879545  
   Uso: artículo académico sobre viewing televisivo y targeting publicitario; define prime time y se enfoca en la distribución del viewing y gasto publicitario.

9. **FTC — Children's Exposure to Television Advertising in 1977 and 2004**  
   URL: https://www.ftc.gov/reports/childrens-exposure-television-advertising-1977-2004-information-obesity-debate-bureau-economics  
   PDF: https://www.ftc.gov/sites/default/files/documents/reports/childrens-exposure-television-advertising-1977-and-2004-information-obesity-debate-bureau-economics/cabebw.pdf  
   Uso: muestra cambios en exposición infantil a publicidad televisiva y evidencia de fragmentación del entorno televisivo.

10. **Ofcom — The TV Advertising Sector Discussion Paper**  
    URL: https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/economic-discussion-papers-/the-tv-advertising-sector-discussion-paper.pdf?v=390893  
    Uso: analiza el sector de publicidad televisiva, ingresos de broadcasters comerciales, cambios de audiencia y desplazamiento hacia plataformas digitales.

11. **Ofcom — Review of Public Service Media 2019–2023**  
    URL: https://www.ofcom.org.uk/siteassets/resources/documents/tv-radio-and-on-demand/broadcast-guidance/psb/2024/review-of-public-service-media-2019-2023.pdf?v=389567  
    Uso: útil para distinguir servicio público, broadcasters comerciales y cambios de ingresos publicitarios.

12. **Reuters Institute — Is there Still a Place for Public Service Television?**  
    URL: https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2017-11/Is%20There%20Still%20a%20Place%20for%20Public%20Service%20Television.pdf  
    Uso: discute el papel de la televisión pública/servicio público y las presiones sobre modelos financiados por publicidad.

## D. Cable, narrowcasting, canales especializados y fragmentación

13. **Amazon Ads — Cable TV advertising: Benefits, costs, how it works**  
    URL: https://advertising.amazon.com/library/guides/cable-tv-advertising  
    Uso: fuente de industria que explica cómo la programación especializada de cable conecta anunciantes con audiencias por intereses y preferencias de canal.

14. **Joseph Turow — Segmenting the Audience, excerpt from Breaking Up America**  
    URL: https://press.uchicago.edu/Misc/Chicago/817490.html  
    Uso: fuente clave sobre cómo print, broadcast y online media segmentan audiencias y cómo las marcas de medios atraen segmentos deseados.

15. **Joseph Turow — Breaking Up America: Advertisers and the New Media World**  
    URL: https://bibliovault.org/BV.landing.epl?ISBN=9780226817507  
    Internet Archive: https://archive.org/details/breakingupameric0000turo  
    Uso: estudio importante sobre el giro de mass marketing a target marketing y fragmentación social por medios.

16. **Hyeonjin Lin — Basic Cable Network Segmentation Toward Minorities and Niche Audiences**  
    URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2032250  
    Uso: estudio empírico sobre segmentación de basic cable networks y tarifas publicitarias.

17. **Hyuhn-Suhck Bae — Product Differentiation in Cable Programming: Cable National All-News Networks**  
    URL: https://www.academia.edu/3498094/Product_Differentiation_in_Cable_Programming_The_Case_in_the_Cable_National_All_News_Networks  
    Uso: analiza diferenciación de programación y segmentación entre redes de noticias por cable.

18. **Rust — Positioning Strategy for Cable Television Networks**  
    URL: https://www.jstor.org/stable/4188690  
    Uso: artículo académico sobre posicionamiento de programación de cable para crear nichos de mercado.

19. **ScienceDirect Topic — Cable Television**  
    URL: https://www.sciencedirect.com/topics/social-sciences/cable-television  
    Uso: resume el paso de broadcasting a narrowcasting, fragmentación de la audiencia y crecimiento de canales de nicho.

## E. Media planning y planificación general

20. **Advertising Media Planning: A Brand Management Approach**  
    URL: https://iimsedu.com/wp-content/uploads/2019/11/Advertising-Media-Planning-A-Brand-Management-Approach.pdf  
    Uso: texto amplio sobre planeación de medios, audiencia, timing, alcance, frecuencia y decisiones de colocación.

21. **Media Planning Notes**  
    URL: https://www.apcollege.in/wp-content/uploads/2015/10/Media-Planning-notes-17.pdf  
    Uso: notas de planificación de medios; útiles para definiciones básicas de cuándo, dónde y cómo comunicar.

22. **Media Planning PDF — MAP Research**  
    URL: https://www.mapresearch.org/file/Media%20Planning.pdf  
    Uso: guía práctica que enfatiza target audience, geografía, timing y medios creativos.

## F. DOOH, publicidad contextual y programmatic

23. **IAB — DOOH Definition**  
    URL: https://www.iab.com/wp-content/uploads/2024/12/IAB_DOOH_Definition_December_2024.pdf  
    Uso: define Digital Out-of-Home y sus parámetros contextuales como ubicación, venue, daypart y señales dinámicas.

24. **Germanwatch — The Potential of Contextual Advertising Compared with Tracking-based Personalised Advertising**  
    URL: https://www.germanwatch.org/sites/default/files/2025-08/Germanwatch_Working%20Paper_Potential%20of%20Contextual%20Advertising_2025_1.pdf  
    Uso: compara publicidad contextual con publicidad personalizada basada en tracking y explica procesos de programmatic/RTB.

25. **Samuel et al. — Programmatic advertising: An exegesis of consumer concerns**  
    URL: https://www.sciencedirect.com/science/article/abs/pii/S0747563220304040  
    Uso: artículo académico sobre programmatic advertising como fenómeno tecnológico que reacciona e impacta conducta del consumidor.

26. **Gourmet Ads — How Does Contextual Targeting in Programmatic Work?**  
    URL: https://www.gourmetads.com/articles/how-does-contextual-targeting-in-programmatic-work/  
    Uso: explicación industrial de contextual targeting dentro de programmatic.

27. **El Toro — Understanding Dayparting for Digital Ad Campaigns**  
    URL: https://eltoro.com/what-is-dayparting/  
    Uso: muestra continuidad del dayparting desde TV/radio hacia campañas digitales.

## G. Fragmentación, addressable TV y cambios recientes

28. **TV Technology — Addressable TV Unlocks Growth in a Fragmented Market**  
    URL: https://www.tvtechnology.com/news/study-addressable-tv-unlocks-growth-in-a-fragmented-market  
    Uso: referencia contemporánea sobre fragmentación, addressable TV y targeting en televisión.

29. **Ofcom — Media Nations 2025 UK Report**  
    URL: https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/multi-sector/media-nations/2025/media-nations-2025-uk-report.pdf?v=401287  
    Uso: reporte reciente sobre audiencias, ingresos y cambio hacia plataformas digitales.

30. **Government UK — Up Next: the government's vision for the broadcasting sector**  
    URL: https://www.gov.uk/government/publications/up-next-the-governments-vision-for-the-broadcasting-sector/up-next-the-governments-vision-for-the-broadcasting-sector  
    Uso: contexto regulatorio y político sobre broadcasting, servicio público y futuro de medios.

---

## 15. Referencias mínimas recomendadas para investigación inicial

Si se quiere iniciar una investigación más profunda, empezaría con estas diez referencias:

1. Turow — *Breaking Up America*  
2. FTC — *Children’s Exposure to Television Advertising in 1977 and 2004*  
3. Sweeting — *Timing of Radio Commercials*  
4. Deng & Mela — *TV Viewing and Advertising Targeting*  
5. Ofcom — *The TV Advertising Sector Discussion Paper*  
6. IAB — *DOOH Definition*  
7. Germanwatch — *Contextual Advertising vs Tracking-based Advertising*  
8. Pressbooks — *Specialization of Magazines*  
9. Amazon Ads — *Cable TV Advertising*  
10. Lin — *Basic Cable Network Segmentation Toward Minorities and Niche Audiences*

---

## 16. Cierre conceptual

La especialización progresiva de la publicidad puede verse como una historia de precisión creciente.

```txt
publicidad como exposición:
  estar visible ante muchos

publicidad como segmentación:
  estar visible ante los más probables

publicidad como contexto:
  estar visible en el momento y situación adecuados

publicidad como sistema algorítmico:
  decidir impresión por impresión qué mensaje tiene mayor probabilidad de producir resultado
```

La tesis final:

```txt
La publicidad moderna no sólo inventa nuevos mensajes;
inventa nuevas formas de saber a quién, cuándo, dónde y en qué contexto hablarle.
```
