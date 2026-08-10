# Modelo de equivalencias estructurales de la segmentación publicitaria

**Tema:** segmentación como núcleo esencificado y sus adaptaciones contextuales según medio, soporte, espacio, tiempo, canal, comunidad, lista, intención y algoritmo.  
**Contexto:** estudio de la relación entre publicidad, medios, tecnología, logística, cultura y estructuras de audiencia.  
**Propósito:** modelar la segmentación no como una técnica única, sino como una operación abstracta que se manifiesta de formas distintas según las posibilidades materiales, sociales y comunicativas de cada medio.

---

# 1. Tesis principal

La segmentación publicitaria puede entenderse como una operación estructural común que adopta distintas formas según el medio donde se realiza.

```txt
SEGMENTAR
  = reducir incertidumbre sobre quién recibe el mensaje
    usando una señal disponible
    para construir una subaudiencia probable
    y adaptar el mensaje a esa subaudiencia.
```

La historia de la segmentación publicitaria no es solamente la historia de “más datos” o “mejores anuncios”. Es también la historia de las distintas formas en que cada medio permite inferir audiencia.

```txt
calle:
  señal = ubicación

radio:
  señal = horario + formato

televisión abierta:
  señal = franja horaria + programa

televisión por cable:
  señal = canal temático

revista:
  señal = tema editorial

periódico:
  señal = sección + ciudad + edición

zona comercial:
  señal = concentración física de oferta

plaza comercial:
  señal = organización interna por zonas de consumo

tienda departamental:
  señal = departamento, categoría, género, edad, ocasión de compra

correo directo:
  señal = lista + historial

buscador:
  señal = intención expresada lingüísticamente

red social:
  señal = contenido, interacción, comportamiento, comunidad y predicción algorítmica
```

La tesis compacta es:

```txt
La historia de la segmentación publicitaria es la historia de las señales
que cada medio permite usar para inferir audiencia.
```

---

# 2. Núcleo esencificado de la segmentación

Desde el punto de vista de la esencificación, no debemos definir la segmentación por una de sus realizaciones particulares. No debe definirse primero como horario, canal, lista, algoritmo, ubicación o comunidad. Todas esas son adaptaciones contextuales.

La esencia de segmentar es más abstracta:

```yaml
mnode_id: MN_NUCLEO_SEGMENTACION_PUBLICITARIA
tipo_de_unidad: nucleo_esencificado
familia_cognitiva: FAM-Idea
formulacion: >
  Segmentar consiste en dividir o filtrar una audiencia potencial mediante señales
  observables que permiten aumentar la probabilidad de que un mensaje publicitario
  sea relevante para un grupo determinado.

invariantes:
  - existe una audiencia total heterogénea
  - no todos los receptores tienen el mismo interés, necesidad, intención o disponibilidad
  - el anunciante necesita reducir incertidumbre sobre el receptor
  - se usa una señal observable o inferible
  - la señal permite construir una subaudiencia probable
  - el mensaje, la oferta, el canal, el horario o la forma se adaptan a esa subaudiencia
  - la eficacia se valida por respuesta, atención, venta, tráfico, recuerdo, conversión o permanencia

salida:
  - audiencia_mas_probable
  - mensaje_mas_relevante
  - menor_desperdicio_publicitario
  - mayor_probabilidad_de_respuesta
```

Fórmula mínima:

```txt
audiencia_total
  → señal_de_segmentación
    → inferencia_sobre_receptor
      → subaudiencia_probable
        → mensaje_adaptado
          → mayor_relevancia
```

---

# 3. Segmentación como operación de inferencia

Segmentar no significa saber con certeza quién es la persona. Significa usar alguna señal para inferir una mayor probabilidad de relevancia.

```txt
No sé exactamente quién eres,
pero sé algo del contexto en el que estás.
```

Ese “algo” puede ser:

```txt
el lugar por donde pasas
el horario en el que escuchas radio
el programa que ves
la revista que compras
el canal que eliges
la zona comercial a la que acudes
el departamento de tienda donde estás
la lista en la que apareces
la búsqueda que haces
el contenido que consumes
la comunidad a la que perteneces
el idioma que usas
la interacción que realizas
el comportamiento que repites
```

Estructura general:

```yaml
estructura_general_de_segmentacion:
  poblacion_total:
    descripcion: grupo amplio e indiferenciado

  señal_observable:
    descripcion: dato, contexto, conducta o forma de pertenencia que permite dividir la población

  inferencia:
    descripcion: suposición razonable sobre interés, necesidad, identidad, estado, intención o disponibilidad

  subaudiencia:
    descripcion: grupo resultante de aplicar la señal

  adaptacion_del_mensaje:
    descripcion: modificación del anuncio, oferta, canal, horario, formato, tono, estilo o punto de contacto

  criterio_de_validacion:
    descripcion: respuesta, conversión, atención, tráfico, venta, recuerdo, participación o permanencia
```

---

# 4. Fábrica de Adaptaciones Contextuales aplicada a la segmentación

El núcleo se conserva:

```txt
segmentar = reducir incertidumbre sobre la audiencia para aumentar relevancia.
```

Pero cada medio o entorno impone una operación concreta distinta.

```yaml
fabrica_de_adaptaciones_contextuales_segmentacion:
  nucleo_preservado:
    - reducir_incertidumbre_de_audiencia
    - aumentar_relevancia_del_mensaje
    - disminuir_desperdicio_publicitario
    - adaptar_forma_de_contacto_al_contexto
    - mejorar_probabilidad_de_respuesta

  adaptaciones_contextuales:
    - segmentacion_temporal
    - segmentacion_tematica
    - segmentacion_geografica
    - segmentacion_fisica_por_concentracion_comercial
    - segmentacion_fisica_interna
    - segmentacion_por_canal
    - segmentacion_por_lista
    - segmentacion_por_intencion
    - segmentacion_algoritmica
    - segmentacion_comunitaria
    - segmentacion_linguistica_cultural
```

La idea importante es que cada adaptación usa un tipo de señal distinto.

```txt
mismo núcleo:
  segmentar

adaptaciones:
  por tiempo
  por lugar
  por tema
  por canal
  por zona física
  por departamento
  por lista
  por intención
  por comunidad
  por algoritmo
```

---

# 5. Adaptación 1: Segmentación temporal

La segmentación temporal aparece con fuerza en medios lineales como radio y televisión abierta. El tiempo funciona como señal porque las rutinas sociales distribuyen audiencias de forma desigual a lo largo del día.

```yaml
mnode_id: ADAPT_SEGMENTACION_TEMPORAL
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_principales:
  - radio
  - television_abierta
  - television_lineal
  - programacion_por_horarios
señal_observable: horario
inferencia:
  - distintas_personas_estan_disponibles_en_distintos_momentos
  - distintas_rutinas_producen_distintas_audiencias
  - distintos_estados_psicologicos_aparecen_en_distintos_momentos
operacion:
  - dividir_el_dia_en_franjas
  - asociar_franjas_con_audiencias_probables
  - colocar_anuncios_en_horarios_compatibles_con_producto_y_receptor
criterio_de_validacion:
  - rating
  - alcance
  - frecuencia
  - respuesta
  - venta
  - recuerdo
```

Ejemplos:

```txt
radio matutina:
  café, desayuno, noticias, autos, servicios locales

televisión infantil en la tarde:
  juguetes, snacks, entretenimiento infantil

prime time:
  marcas masivas, autos, banca, telecomunicaciones, productos familiares

late night:
  entretenimiento, comida rápida, productos para adultos, servicios específicos
```

Estructura:

```txt
hora_del_día
  → rutina_probable
    → audiencia_probable
      → anuncio_compatible
```

Nota importante: la segmentación temporal es probabilística. No significa que un horario contenga exclusivamente un tipo de público. Significa que aumenta la probabilidad de encontrarlo.

---

# 6. Adaptación 2: Segmentación temática

La segmentación temática ocurre cuando el contenido funciona como filtro de audiencia. Quien consume un tipo de contenido probablemente comparte un interés, práctica, problema o aspiración.

```yaml
mnode_id: ADAPT_SEGMENTACION_TEMATICA
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_principales:
  - revistas
  - secciones_de_periodico
  - canales_por_cable
  - canales_de_youtube
  - newsletters
  - blogs
  - podcasts_tematicos
  - cuentas_tematicas_en_redes_sociales
señal_observable: tema_consumido
inferencia:
  - quien_consume_cierto_contenido_probablemente_comparte_cierto_interes
  - el_interes_tematico_permite_acercar_oferta_y_mensaje
operacion:
  - organizar_contenido_por_tema
  - atraer_audiencia_interesada_en_ese_tema
  - insertar_publicidad_compatible_con_el_interes
criterio_de_validacion:
  - engagement
  - suscripcion
  - respuesta
  - conversion
  - permanencia
```

Ejemplos:

```txt
revista de autos:
  anuncios de autos, seguros, accesorios, neumáticos

revista de moda:
  ropa, cosméticos, lujo, estilo personal

canal de cocina:
  alimentos, utensilios, electrodomésticos, recetarios

canal deportivo:
  bebidas, ropa deportiva, apuestas, equipamiento, autos

newsletter profesional:
  software, cursos, herramientas, consultoría
```

Estructura:

```txt
tema
  → interés_probable
    → audiencia_nicho
      → anuncio_relevante
```

---

# 7. Adaptación 3: Segmentación por canal

La segmentación por canal es una forma de segmentación temática institucionalizada. El canal no sólo contiene contenido; contiene una identidad reconocible.

```yaml
mnode_id: ADAPT_SEGMENTACION_POR_CANAL
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_principales:
  - television_por_cable
  - canales_de_streaming
  - canales_de_video
  - canales_tematicos_de_plataforma
señal_observable: eleccion_de_canal
inferencia:
  - quien_elige_un_canal_probablemente_comparte_intereses_o_identidad_de_audiencia
  - el_canal_funciona_como_contenedor_de_nicho
operacion:
  - crear_o_elegir_canales_con_promesa_tematica
  - ubicar_anuncios_compatibles_con_la_identidad_del_canal
  - vender_audiencias_por_afinidad
```

Ejemplos:

```txt
Cartoon Network / Nickelodeon / Disney Channel:
  infancia, familia, juguetes, entretenimiento infantil

MTV:
  juventud, música, cultura pop, moda, identidad generacional

CNN:
  actualidad, política, noticias, público informado

ESPN:
  deportes, eventos, fans, consumo asociado al deporte

Food Network:
  cocina, hogar, alimentos, utensilios, estilo de vida culinario
```

Equivalencia estructural:

```txt
revista_especializada
  ≈ canal_de_cable_especializado
  ≈ canal_de_youtube_tematico
  ≈ newsletter_de_nicho
```

No son iguales técnicamente, pero realizan una operación parecida: agrupan atención alrededor de un tema o identidad de consumo.

---

# 8. Adaptación 4: Segmentación geográfica

La segmentación geográfica usa la ubicación como señal. Puede ocurrir mediante letreros, publicidad exterior, tiendas físicas, mercados, distritos comerciales o anuncios cercanos al punto de venta.

```yaml
mnode_id: ADAPT_SEGMENTACION_GEOGRAFICA
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_principales:
  - letreros
  - escaparates
  - publicidad_exterior
  - carteles
  - negocios_locales
  - DOOH
señal_observable: ubicacion
inferencia:
  - quien_pasa_por_un_lugar_tiene_mayor_probabilidad_de_ser_relevante_para_esa_oferta
  - quien_esta_cerca_de_un_punto_de_venta_puede_actuar_con_menos_friccion
operacion:
  - colocar_anuncio_o_negocio_en_ubicacion_relevante
  - aprovechar_flujo_fisico
  - conectar_mensaje_con_proximidad_de_accion
criterio_de_validacion:
  - trafico_a_tienda
  - visitas
  - ventas_locales
  - recordacion_local
  - respuesta_por_zona
```

Ejemplos:

```txt
letrero de panadería en la calle:
  segmenta por paso cercano y posibilidad inmediata de compra

anuncio de restaurante cerca de oficinas:
  segmenta por ubicación + momento de comida

cartel de farmacia cerca de hospital:
  segmenta por proximidad contextual
```

Estructura:

```txt
ubicacion
  → presencia_probable
    → oportunidad_de_compra
      → anuncio_local_relevante
```

---

# 9. Adaptación 5: Segmentación física por concentración comercial

Esta segmentación ocurre cuando un territorio concentra negocios del mismo rubro o de rubros complementarios. El espacio físico se convierte en un filtro de intención.

```yaml
mnode_id: ADAPT_SEGMENTACION_FISICA_POR_CONCENTRACION_COMERCIAL
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Diseño
medios_o_entornos:
  - zonas_de_librerias
  - zonas_de_ferreterias
  - calles_de_mueblerias
  - mercados_de_refacciones
  - distritos_de_moda
  - mercados_especializados
  - plazas_de_tecnologia
señal_observable: presencia_en_zona_de_rubro
inferencia:
  - quien_acude_a_una_zona_especializada_probablemente_tiene_intencion_de_compra_o_comparacion
  - la_concentracion_de_oferta_reduce_costos_de_busqueda_para_el_comprador
operacion:
  - concentrar_negocios_similares_o_complementarios
  - atraer_demanda_intencional
  - permitir_comparacion_de_precios_y_calidad
  - aumentar_probabilidad_de_visita_con_proposito
criterio_de_validacion:
  - trafico_de_compradores_intencionales
  - comparacion_entre_tiendas
  - ventas_por_zona
  - permanencia_en_zona
```

Ejemplos:

```txt
zona de librerías:
  personas que buscan libros, ediciones, precios, recomendaciones

zona de ferreterías:
  compradores con problemas prácticos o proyectos de reparación

calle de muebles:
  compradores que desean comparar estilos, tamaños y precios

mercado de refacciones:
  compradores con intención técnica y necesidad específica
```

Estructura:

```txt
concentracion_de_oferta
  → atrae_demanda_intencional
    → reduce_costo_de_busqueda
      → facilita_comparacion
        → aumenta_probabilidad_de_compra
```

Equivalencia estructural:

```txt
canal_tematico:
  concentración temática de atención

zona_comercial_temática:
  concentración geográfica de intención
```

---

# 10. Adaptación 6: Segmentación física interna

Esta es la aclaración añadida: dentro de plazas comerciales, tiendas departamentales, supermercados y grandes superficies, también existe segmentación física. No sólo se segmenta por ciudad, calle o zona comercial; también se segmenta por organización interna del espacio.

```yaml
mnode_id: ADAPT_SEGMENTACION_FISICA_INTERNA
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Diseño
medios_o_entornos:
  - plazas_comerciales
  - tiendas_departamentales
  - supermercados
  - tiendas_de_autoservicio
  - centros_comerciales
  - grandes_almacenes
  - tiendas_especializadas_con_departamentos
señal_observable:
  - zona_visitada
  - departamento
  - pasillo
  - categoria_de_producto
  - proximidad_a_marca_o_estante
inferencia:
  - quien_entra_a_una_zona_o_departamento_muestra_interes_contextual
  - la_organizacion_fisica_reduce_busqueda_y_ordena_la_intencion_de_compra
operacion:
  - dividir_el_espacio_en_zonas_de_consumo
  - agrupar_productos_por_categoria, uso, genero, edad, ocasion_o_necesidad
  - colocar_mensajes, promociones, displays_o_productos_complementarios_en_zonas_relevantes
  - facilitar_recorrido_y_comparacion
criterio_de_validacion:
  - trafico_por_zona
  - ventas_por_departamento
  - permanencia_en_pasillo
  - conversion_en_punto_de_venta
  - venta_cruzada
```

Ejemplos en plazas comerciales:

```txt
zona de restaurantes:
  segmenta a quienes están en modo comida, descanso, reunión o espera

zona de entretenimiento:
  segmenta a familias, jóvenes o grupos que buscan ocio

zona de moda:
  agrupa tiendas de ropa y accesorios para compradores con intención de vestimenta

zona de servicios:
  concentra bancos, telefonía, ópticas, reparación o trámites
```

Ejemplos en tiendas departamentales:

```txt
perfumería:
  interés en fragancias, belleza, regalo, lujo accesible

ropa de hombre:
  género, talla, estilo, ocasión de uso

ropa de mujer:
  género, estilo, temporada, ocasión

niños / niñas:
  edad, género, familia, compra mediada por adultos

hogar:
  decoración, cocina, cama, baño, vida doméstica

electrónica:
  tecnología, entretenimiento, productividad, comparación técnica
```

Estructura:

```txt
espacio_interno
  → zona_o_departamento
    → intención_contextual
      → producto_o_mensaje_relevante
        → compra_o_comparación
```

Esta segmentación es estructuralmente parecida a una revista especializada o a un canal temático, pero ocurre dentro de un espacio físico organizado.

```txt
departamento_de_tienda
  ≈ sección_de_periódico
  ≈ canal_temático
  ≈ categoría_de_marketplace
```

La diferencia es que aquí el cuerpo del comprador ya está dentro de un entorno comercial y la segmentación ocurre en el recorrido físico.

---

# 11. Adaptación 7: Segmentación por lista

La segmentación por lista ocurre cuando se usa una base de personas o contactos que ya mostraron algún tipo de relación previa.

```yaml
mnode_id: ADAPT_SEGMENTACION_POR_LISTA
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_principales:
  - correo_directo
  - catalogos
  - email_marketing
  - CRM
  - programas_de_lealtad
señal_observable:
  - pertenencia_a_lista
  - compra_previa
  - solicitud_de_informacion
  - suscripcion
  - respuesta_anterior
  - historial_de_cliente
inferencia:
  - quien_ya_compro_o_respondio_tiene_mayor_probabilidad_de_responder_de_nuevo
  - la_lista_preserva_memoria_comercial
operacion:
  - construir_lista
  - clasificar_por_historial
  - enviar_mensaje_adaptado
  - medir_respuesta
  - actualizar_lista
criterio_de_validacion:
  - tasa_de_apertura
  - respuesta
  - recompra
  - renovacion
  - conversion
  - valor_de_cliente
```

Estructura:

```txt
comportamiento_pasado
  → pertenencia_a_lista
    → mensaje_mas_especifico
      → respuesta_medible
        → lista_actualizada
```

La lista funciona como memoria comercial.

---

# 12. Adaptación 8: Segmentación por intención

La segmentación por intención aparece cuando el receptor expresa una tarea activa: buscar, comparar, preguntar, visitar una zona, entrar a una categoría o consultar un directorio.

```yaml
mnode_id: ADAPT_SEGMENTACION_POR_INTENCION
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_o_entornos:
  - buscadores
  - marketplaces
  - directorios
  - comparadores
  - zonas_comerciales_especializadas
  - categorias_de_ecommerce
  - departamentos_de_tienda
señal_observable:
  - busqueda
  - consulta
  - visita_a_categoria
  - presencia_en_zona_comercial
  - ingreso_a_departamento
  - comparacion_de_precios
inferencia:
  - el_receptor_no_solo_tiene_interes_general
  - probablemente_esta_en_modo_busqueda_o_compra
operacion:
  - interceptar_intencion
  - presentar_oferta_relevante
  - facilitar_comparacion_o_decision
criterio_de_validacion:
  - clic
  - consulta
  - compra
  - agregar_al_carrito
  - visita_a_tienda
  - solicitud_de_informacion
```

Equivalencia clave:

```txt
Google Search:
  intención expresada lingüísticamente

zona comercial especializada:
  intención expresada espacialmente

departamento de tienda:
  intención expresada por recorrido físico

marketplace:
  intención expresada por categoría y búsqueda
```

Estructura:

```txt
intención_observable
  → tarea_activa
    → mensaje_u_oferta_relevante
      → acción_facilitada
```

---

# 13. Adaptación 9: Segmentación comunitaria

La segmentación comunitaria ocurre cuando una audiencia se agrupa no sólo por interés, sino por identidad compartida, lenguaje, códigos, reputación, confianza y pertenencia.

```yaml
mnode_id: ADAPT_SEGMENTACION_COMUNITARIA
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_o_entornos:
  - comunidades
  - influencers
  - foros
  - clubes
  - asociaciones
  - fandoms
  - grupos_profesionales
  - subculturas
señal_observable:
  - pertenencia
  - participación
  - lenguaje_compartido
  - símbolos_comunes
  - confianza_en_un_mediador
  - normas_del_grupo
inferencia:
  - quienes_comparten_comunidad_comparten_codigos_y_posibles_intereses
  - la_confianza_interna_modifica_la_recepcion_del_mensaje
operacion:
  - insertar_mensaje_en_comunidad
  - adaptar_lenguaje_a_codigos_internos
  - usar_mediadores_confiables
  - respetar_normas_del_grupo
criterio_de_validacion:
  - aceptación
  - participación
  - conversación
  - recomendación
  - conversión
```

Diferencia entre tema y comunidad:

```txt
tema:
  interés compartido

comunidad:
  interés + identidad + normas + lenguaje + confianza
```

Ejemplos:

```txt
influencer de maquillaje:
  comunidad basada en estética, confianza, estilo personal y recomendación

foro de programadores:
  comunidad basada en lenguaje técnico, reputación y utilidad práctica

club de ciclistas:
  comunidad basada en práctica física, equipo, experiencia y pertenencia

fandom:
  comunidad basada en símbolos, identidad cultural y afecto compartido
```

---

# 14. Adaptación 10: Segmentación algorítmica

La segmentación algorítmica no debe tratarse como algo totalmente separado de las demás. Es una forma compuesta que automatiza, combina y actualiza múltiples señales.

```yaml
mnode_id: ADAPT_SEGMENTACION_ALGORITMICA
tipo_de_unidad: adaptacion_contextual_compuesta
familia_cognitiva: FAM-Diseño
medios_principales:
  - redes_sociales
  - plataformas_de_video
  - buscadores
  - marketplaces
  - programmatic_ads
  - apps
señal_observable:
  - contenido_consumido
  - interacciones
  - tiempo_de_visualizacion
  - busquedas
  - compras
  - ubicacion
  - idioma
  - red_social
  - dispositivo
  - horario
  - comportamiento_parecido_a_otros
inferencia:
  - el_sistema_predice_probabilidad_de_interes_o_accion
operacion:
  - recolectar_senales
  - clasificar_patrones
  - predecir_relevancia
  - distribuir_contenido_o_anuncio
  - medir_respuesta
  - ajustar_entrega
criterio_de_validacion:
  - retencion
  - clic
  - conversion
  - engagement
  - compra
  - valor_predicho
```

La segmentación algorítmica puede combinar:

```txt
temática:
  qué contenido consumes

temporal:
  cuándo te conectas

geográfica:
  desde dónde interactúas

lingüística:
  qué idioma o códigos usas

social:
  con quién interactúas

conductual:
  qué haces

intencional:
  qué buscas o compras

cultural:
  qué símbolos entiendes

rítmica:
  qué velocidad o formato retiene tu atención
```

La idea clave:

```txt
la segmentación algorítmica no reemplaza todas las anteriores;
las recombina, automatiza y actualiza en tiempo real.
```

---

# 15. Adaptación 11: Segmentación lingüística-cultural

Esta adaptación aparece cuando el mensaje se ajusta al idioma, variante lingüística, código cultural, símbolos, valores, humor, referencias o formas de confianza de una audiencia.

```yaml
mnode_id: ADAPT_SEGMENTACION_LINGUISTICA_CULTURAL
tipo_de_unidad: adaptacion_contextual
familia_cognitiva: FAM-Método
medios_o_entornos:
  - publicidad_internacional
  - campañas_multilingues
  - radio_local
  - television_regional
  - redes_sociales
  - comunidades_migrantes
  - mercados_multiculturales
señal_observable:
  - idioma
  - dialecto
  - referencias_culturales
  - valores
  - humor
  - símbolos
  - religión
  - región
inferencia:
  - quienes_comparten_codigo_linguistico_o_cultural_pueden_responder_mejor_a_mensajes_adaptados
operacion:
  - traducir_no_solo_palabras_sino_codigos
  - adaptar_tono_y_simbolos
  - evitar_ruido_cultural
  - usar_referencias_reconocibles
criterio_de_validacion:
  - comprensión
  - aceptación
  - identificación
  - respuesta
  - menor_resistencia
```

Estructura:

```txt
codigo_cultural
  → comprensión_compartida
    → mensaje_adaptado
      → mayor_identificación
```

---

# 16. Tabla de equivalencias estructurales

| Núcleo | Medio / entorno | Señal usada | Operación concreta | Equivalente estructural |
|---|---|---|---|---|
| Segmentar | Radio | Horario | Comprar daypart | Tiempo como filtro de audiencia |
| Segmentar | TV abierta | Horario / programa | Colocar anuncio en franja | Rutina como proxy de público |
| Segmentar | Cable | Canal temático | Elegir red especializada | Canal como contenedor de nicho |
| Segmentar | Revista | Tema editorial | Comprar espacio en revista especializada | Publicación como contenedor de nicho |
| Segmentar | Periódico | Sección / ciudad | Anunciar en sección relevante | Sección como filtro de interés |
| Segmentar | Calle | Ubicación | Poner letrero donde pasa audiencia | Lugar como filtro de oportunidad |
| Segmentar | Zona comercial | Concentración de rubro | Ubicar negocio entre similares | Lugar como agregador de intención |
| Segmentar | Plaza comercial | Zona interna | Agrupar restaurantes, servicios, moda, entretenimiento | Zona como filtro de modo de consumo |
| Segmentar | Tienda departamental | Departamento | Organizar perfumería, ropa, niños, hogar, electrónica | Departamento como categoría física de intención |
| Segmentar | Correo directo | Lista | Enviar a compradores o prospectos | Lista como memoria comercial |
| Segmentar | Buscador | Consulta | Anunciar contra búsqueda | Lenguaje como señal de intención |
| Segmentar | Marketplace | Categoría / búsqueda | Mostrar oferta en categoría | Catálogo digital como zona de intención |
| Segmentar | Redes sociales | Contenido / interacción | Distribuir por afinidades | Comportamiento como señal dinámica |
| Segmentar | Comunidad | Pertenencia / código | Insertarse mediante lenguaje y mediador | Identidad compartida como filtro |
| Segmentar | DOOH | Lugar / hora / contexto | Mostrar anuncio según entorno | Contexto físico-dinámico como filtro |
| Segmentar | Campañas multiculturales | Idioma / código | Adaptar lenguaje y símbolos | Cultura como filtro de interpretación |

---

# 17. Equivalencias por familia de operación

## 17.1. Operaciones basadas en tiempo

```txt
radio daypart
  ≈ televisión por franja
  ≈ programación lineal
  ≈ publicidad por horario de rutina
```

Núcleo común:

```txt
la hora permite inferir disponibilidad, rutina y estado psicológico probable.
```

---

## 17.2. Operaciones basadas en tema

```txt
revista especializada
  ≈ sección de periódico
  ≈ canal de cable
  ≈ canal de YouTube
  ≈ newsletter temática
  ≈ podcast especializado
```

Núcleo común:

```txt
el contenido elegido permite inferir interés.
```

---

## 17.3. Operaciones basadas en ubicación

```txt
letrero local
  ≈ escaparate
  ≈ billboard
  ≈ DOOH
  ≈ anuncio cerca del punto de venta
```

Núcleo común:

```txt
el lugar permite inferir oportunidad física de acción.
```

---

## 17.4. Operaciones basadas en concentración física

```txt
zona de librerías
  ≈ zona de ferreterías
  ≈ calle de muebles
  ≈ mercado de refacciones
  ≈ plaza de tecnología
```

Núcleo común:

```txt
la concentración física de oferta atrae demanda intencional.
```

---

## 17.5. Operaciones basadas en organización interna del espacio

```txt
zona de restaurantes en plaza comercial
  ≈ departamento de perfumería
  ≈ sección de ropa de hombre
  ≈ pasillo de cereales
  ≈ área de electrónica
  ≈ categoría física dentro de tienda
```

Núcleo común:

```txt
la organización interna del espacio ordena la intención del comprador
y permite presentar mensajes, productos o promociones en el contexto adecuado.
```

---

## 17.6. Operaciones basadas en historial

```txt
lista de correo
  ≈ catálogo para cliente previo
  ≈ email marketing
  ≈ CRM
  ≈ programa de lealtad
```

Núcleo común:

```txt
el comportamiento pasado permite inferir respuesta futura.
```

---

## 17.7. Operaciones basadas en intención

```txt
búsqueda en Google
  ≈ búsqueda en marketplace
  ≈ visita a zona comercial especializada
  ≈ entrada a departamento de tienda
  ≈ consulta en directorio
```

Núcleo común:

```txt
la acción de búsqueda o desplazamiento revela tarea activa.
```

---

## 17.8. Operaciones basadas en comunidad

```txt
influencer
  ≈ foro
  ≈ club
  ≈ fandom
  ≈ grupo profesional
  ≈ comunidad de práctica
```

Núcleo común:

```txt
la pertenencia compartida permite adaptar lenguaje, confianza y mediación.
```

---

## 17.9. Operaciones algorítmicas

```txt
feed social
  ≈ recomendador de video
  ≈ programmatic advertising
  ≈ marketplace personalizado
  ≈ retargeting
```

Núcleo común:

```txt
el sistema combina señales múltiples para predecir relevancia.
```

---

# 18. Segmentación física interna: relación con tiendas y plazas

La aclaración sobre plazas comerciales y tiendas departamentales es importante porque muestra que la segmentación no sólo ocurre “antes” de llegar al comprador. También ocurre mientras el comprador se mueve dentro de un entorno comercial.

```txt
segmentación_externa:
  llevar al comprador al lugar correcto

segmentación_interna:
  ordenar el recorrido del comprador dentro del lugar
```

Ejemplo:

```txt
plaza_comercial:
  nivel 1: ubicación de la plaza
  nivel 2: tipo de tiendas que contiene
  nivel 3: zonas internas: restaurantes, entretenimiento, moda, servicios
  nivel 4: tienda específica
  nivel 5: departamento interno de la tienda
  nivel 6: estante, pasillo, promoción o display
```

En una tienda departamental:

```txt
tienda
  → departamento
    → categoría
      → marca
        → producto
          → promoción
```

Esto crea una segmentación por recorrido:

```txt
el comprador revela intención conforme se desplaza.
```

Por ejemplo:

```txt
entrada a perfumería:
  interés probable en fragancia, belleza, regalo o lujo accesible

entrada a ropa infantil:
  compra probable mediada por adultos, familia, edad, talla, temporada

entrada a electrónica:
  comparación técnica, precio, innovación, especificaciones

entrada a zona de restaurantes:
  estado de hambre, pausa, descanso, reunión, espera o socialización
```

Esta segmentación física interna puede verse como una forma pre-digital de clasificación contextual.

```txt
departamento físico
  ≈ categoría digital

pasillo físico
  ≈ navegación de marketplace

zona de restaurantes
  ≈ categoría “food” en app

exhibidor de punto de venta
  ≈ recomendación contextual
```

---

# 19. Modelo final: segmentar como correspondencia señal-receptor

```yaml
modelo_final_segmentacion:
  nucleo:
    nombre: segmentar
    formulacion: >
      Crear una correspondencia más precisa entre oferta y receptor usando una señal
      disponible que permita inferir interés, necesidad, disponibilidad, identidad,
      intención o probabilidad de respuesta.

  componentes:
    audiencia_total:
      descripcion: conjunto heterogéneo de receptores posibles

    señal:
      descripcion: dato o contexto disponible para filtrar la audiencia
      tipos:
        - tiempo
        - tema
        - canal
        - lugar
        - concentración_comercial
        - zona_interna
        - departamento
        - lista
        - intención
        - comunidad
        - idioma
        - comportamiento
        - algoritmo

    inferencia:
      descripcion: lectura probable del receptor a partir de la señal

    subaudiencia:
      descripcion: grupo construido por la inferencia

    adaptacion:
      descripcion: ajuste del mensaje, oferta, formato, espacio, horario, canal o tono

    validacion:
      descripcion: medición de respuesta o adecuación

  principio:
    - la_segmentacion_no_es_un_medio
    - la_segmentacion_es_una_operacion
    - cada_medio_la_realiza_con_sus_propias_senales
    - cada_entorno_impone_sus_adaptaciones
```

---

# 20. Fórmula sintética

```txt
SEGMENTAR
  = seleccionar una señal
    → inferir una audiencia probable
      → adaptar el mensaje
        → reducir desperdicio
          → aumentar relevancia
            → validar respuesta
```

Versiones por medio:

```txt
radio:
  segmentar = usar horario

televisión abierta:
  segmentar = usar franja y programa

cable:
  segmentar = usar canal temático

revista:
  segmentar = usar interés editorial

calle:
  segmentar = usar ubicación

zona comercial:
  segmentar = usar concentración de rubro

plaza comercial:
  segmentar = usar zona interna de consumo

tienda departamental:
  segmentar = usar departamento físico

correo directo:
  segmentar = usar lista

buscador:
  segmentar = usar consulta

marketplace:
  segmentar = usar categoría y comportamiento de compra

red social:
  segmentar = usar contenido, interacción y predicción

comunidad:
  segmentar = usar pertenencia y código compartido
```

---

# 21. Tesis final del modelo

```txt
La segmentación publicitaria es una operación estructural que se adapta al medio.

En cada época y soporte, la publicidad encuentra una señal disponible para reducir
la incertidumbre sobre el receptor: tiempo en radio y televisión, tema en revistas
y cable, ubicación en calle y comercio físico, departamento en tiendas, lista en
correo directo, búsqueda en internet, pertenencia en comunidades y comportamiento
en plataformas algorítmicas.

Estas no son técnicas aisladas. Son adaptaciones contextuales de una misma operación:
hacer corresponder oferta, mensaje y receptor mediante la mejor señal que el medio
permite observar.
```

---

# 22. Núcleo conceptual para ACCD

```yaml
nucleo_conceptual:
  id: NC_SEGMENTACION_COMO_ADAPTACION_CONTEXTUAL
  titulo: "La segmentación como fábrica de adaptaciones contextuales"
  formulacion: >
    La segmentación publicitaria puede entenderse como un núcleo esencificado que
    se adapta contextualmente a cada medio. Su esencia es reducir incertidumbre
    sobre el receptor usando señales disponibles; sus realizaciones concretas
    varían según el soporte: tiempo, tema, lugar, canal, zona física, departamento,
    lista, intención, comunidad, idioma o algoritmo.

  potencia_analitica:
    - permite comparar medios distintos sin confundirlos
    - permite encontrar equivalencias estructurales entre radio, TV, cable, revistas, tiendas y redes sociales
    - permite analizar publicidad como operación de correspondencia entre mensaje y audiencia
    - permite integrar espacios físicos y digitales en un mismo modelo
    - permite estudiar la evolución histórica de la segmentación publicitaria

  regla_de_uso:
    - no preguntar primero "qué medio es"
    - preguntar primero "qué señal usa para inferir audiencia"
    - luego identificar la adaptación contextual concreta
```

