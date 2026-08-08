# Modelo — Entidades organizadoras de atención

**Tipo de documento:** modelo conceptual ACCD  
**Campo de aplicación:** publicidad, medios, comercio físico, plataformas digitales, comunidades y arquitectura de contenidos  
**Sección propuesta dentro del Campo Atencional de Publicidad:** `SEC_ENTIDADES_ORGANIZADORAS_DE_ATENCION`  
**Núcleo:** entidades que convocan, ordenan, distribuyen y monetizan atención.

---

# 1. Punto de partida

De la idea anterior sobre **secciones como adaptaciones contextuales** se desprende un nivel superior de análisis: las entidades que contienen esas secciones.

Estas entidades pueden ser:

```txt
programas de televisión
canales de televisión
periódicos
revistas
tiendas
plazas comerciales
radios
podcasts
canales de YouTube
cuentas de redes sociales
newsletters
comunidades digitales
marketplaces
plataformas educativas
```

La propuesta es analizarlas no como medios aislados, sino como **entidades organizadoras de atención**.

Es decir, no preguntar solamente:

```txt
¿Qué es una revista?
¿Qué es una tienda?
¿Qué es un programa de televisión?
```

Sino preguntar:

```txt
¿Cómo esta entidad convoca atención?
¿Cómo la ordena internamente?
¿Cómo la divide en secciones?
¿Cómo guía el recorrido del receptor?
¿Cómo crea contextos publicitarios o comerciales?
¿Cómo monetiza esa atención?
```

---

# 2. Relación con Campo Atencional en ACCD

Dentro de ACCD, un **Campo Atencional** no debe entenderse únicamente como una audiencia. Es una infraestructura organizada de atención: incluye los mecanismos por los cuales la atención se capta, orienta, intensifica, estabiliza, distribuye, interpreta y reutiliza.

Por eso, dentro del **Campo Atencional de Publicidad**, tiene sentido crear una sección dedicada a estudiar las entidades que históricamente organizan atención.

```txt
Campo Atencional de Publicidad
  → sección: Entidades organizadoras de atención
```

Esta sección no estudia anuncios aislados. Estudia los contenedores donde los anuncios, productos, contenidos o mensajes se vuelven visibles, relevantes y monetizables.

---

# 3. Tesis central

```txt
Toda entidad comunicativa o comercial que organiza atención
puede analizarse como un contenedor atencional.

Ese contenedor:
  convoca una audiencia,
  ordena su atención,
  divide su contenido o productos en secciones,
  crea señales de entrada,
  genera hábitos de consumo,
  y permite insertar publicidad o monetización de forma contextual.
```

Formulación compacta:

```txt
entidad organizadora de atención
  = contenedor
  + audiencia convocada
  + estructura interna
  + señales de entrada
  + recorridos de consumo
  + posibilidades de monetización
```

Otra formulación:

```txt
Una entidad organizadora de atención es una forma estable
que reúne personas, ordena su atención y crea contextos
donde ciertos mensajes, productos o anuncios se vuelven más relevantes.
```

---

# 4. Nombre propuesto para la sección

```yaml
seccion_campo_atencional:
  id: SEC_ENTIDADES_ORGANIZADORAS_DE_ATENCION
  nombre: "Entidades organizadoras de atención"
  funcion: >
    Estudiar las distintas entidades mediáticas, comerciales, espaciales y digitales
    que captan, ordenan y distribuyen atención mediante estructuras internas
    como secciones, bloques, departamentos, zonas, categorías, playlists,
    pilares de contenido o recorridos.
```

Nombres alternativos posibles:

```txt
Contenedores atencionales
Entidades atencionales
Infraestructuras de organización atencional
Formas institucionales de atención
Entidades segmentadoras y organizadoras de atención
```

Para el estado actual del modelo, el nombre más claro es:

```txt
Entidades organizadoras de atención
```

---

# 5. Diferencia entre entidad, sección y pieza

Es importante separar tres niveles.

```yaml
niveles:
  entidad:
    definicion: >
      Contenedor mayor que convoca y organiza atención.
    ejemplos:
      - revista
      - periódico
      - programa de televisión
      - tienda
      - canal de YouTube
      - plaza comercial
      - comunidad digital
      - marketplace

  seccion_interna:
    definicion: >
      División recurrente dentro de la entidad.
    ejemplos:
      - deportes en un periódico
      - entrevistas en una revista
      - bloque de cocina en un programa
      - perfumería en una tienda
      - food court en una plaza
      - playlist en YouTube
      - canal de Discord

  pieza_o_unidad:
    definicion: >
      Manifestación concreta dentro de una sección.
    ejemplos:
      - un artículo
      - un episodio
      - un producto
      - un video
      - una publicación
      - un display
      - una oferta
```

Ejemplo editorial:

```txt
entidad:
  revista de tecnología

sección:
  reviews de productos

pieza:
  review del nuevo iPhone
```

Ejemplo comercial físico:

```txt
entidad:
  tienda departamental

sección:
  perfumería

pieza:
  display de una fragancia específica
```

Ejemplo televisivo:

```txt
entidad:
  programa de televisión matutino

sección:
  bloque de cocina

pieza:
  receta patrocinada por una marca de alimentos
```

Ejemplo digital:

```txt
entidad:
  canal de YouTube sobre finanzas personales

sección:
  playlist de análisis de tarjetas de crédito

pieza:
  video comparativo entre dos tarjetas
```

---

# 6. mNode principal

```yaml
mnode_id: MN_ENTIDAD_ORGANIZADORA_DE_ATENCION
tipo_de_unidad: nucleo_esencificado
familia_cognitiva: FAM-Idea
formulacion: >
  Una entidad organizadora de atención es un contenedor mediático, comercial,
  espacial o digital que convoca una audiencia y ordena su atención mediante
  estructuras internas reconocibles: secciones, bloques, departamentos, zonas,
  categorías, playlists, pilares de contenido o recorridos.

funcion_en_el_campo_atencional:
  - captar_atencion
  - orientar_atencion
  - segmentar_internamente
  - crear_habitos_de_consumo
  - facilitar_navegacion
  - permitir_publicidad_contextual
  - producir_contextos_monetizables
  - convertir_atencion_en_recorrido
  - estabilizar_expectativas

invariantes:
  - existe_un_contenedor_mayor
  - existe_una_audiencia_o_flujo_de_usuarios
  - existe_una_estructura_interna
  - existen_senales_de_entrada
  - existen_rutas_de_consumo
  - existe_posibilidad_de_insertar_mensajes_ofertas_o_publicidad
  - existe_alguna_forma_de_monetizacion_o_valor_generado
```

---

# 7. Esencificación de la entidad organizadora de atención

La esencificación consiste en separar lo esencial de lo accidental.

```yaml
esencificacion_entidad_organizadora_de_atencion:
  no_esencial:
    - que_sea_impresa
    - que_sea_audiovisual
    - que_sea_digital
    - que_sea_fisica
    - que_sea_comercial
    - que_tenga_publicidad_explicita
    - que_tenga_secciones_formales
    - que_tenga_un_nombre_editorial

  esencial:
    - convoca_un_flujo_de_atencion
    - organiza_ese_flujo
    - divide_la_atencion_en_rutas_o_subespacios
    - crea_expectativas_de_consumo
    - usa_senales_de_entrada
    - permite_navegacion_o_recorrido
    - vuelve_algunos_mensajes_mas_relevantes_por_contexto
    - puede_monetizar_o_aprovechar_la_atencion_organizada

  dominio_de_variacion:
    - periodico
    - revista
    - programa_de_television
    - canal_de_cable
    - tienda_departamental
    - plaza_comercial
    - marketplace
    - podcast
    - newsletter
    - comunidad_digital
    - canal_de_YouTube
    - cuenta_de_red_social
    - plataforma_educativa
```

La esencia no está en el soporte. Está en la función:

```txt
organizar atención dentro de un contenedor estable.
```

---

# 8. La sección dentro del Campo Atencional de Publicidad

Dentro del Campo Atencional de Publicidad, esta sección podría organizarse así:

```yaml
SEC_ENTIDADES_ORGANIZADORAS_DE_ATENCION:
  proposito: >
    Analizar las entidades que históricamente han organizado atención y permitido
    la inserción de publicidad, observando sus equivalencias estructurales.

  preguntas_guia:
    - ¿Qué tipo de atención convoca esta entidad?
    - ¿Cómo segmenta o presegmenta a su audiencia?
    - ¿Cómo organiza internamente esa atención?
    - ¿Qué secciones, bloques, departamentos, zonas o categorías contiene?
    - ¿Qué señales de entrada usa?
    - ¿Dónde puede insertarse publicidad?
    - ¿Qué tipo de monetización permite?
    - ¿Cuál es su equivalente estructural en otros medios?
    - ¿Qué recorrido produce en el receptor o comprador?
    - ¿Qué expectativas estabiliza?

  entidades_iniciales:
    - periodicos
    - revistas
    - programas_de_television
    - canales_de_television
    - radio
    - tiendas
    - plazas_comerciales
    - canales_de_YouTube
    - podcasts
    - newsletters
    - cuentas_de_redes_sociales
    - comunidades_digitales
    - marketplaces
    - plataformas_educativas
```

---

# 9. Tabla inicial de equivalencias

| Entidad | Forma de organizar atención | Secciones internas | Señales de entrada | Monetización posible |
|---|---|---|---|---|
| Periódico | Actualidad organizada por temas | Política, economía, deportes, cultura | Titulares, portada, secciones | Anuncios por sección |
| Revista | Audiencia por interés | Entrevistas, reportajes, reseñas, guías | Portada, titulares, diseño | Anuncios contextuales, patrocinios |
| Programa de TV | Tiempo y segmentos | Entrevista, cocina, noticias, espectáculo | Intro, conductor, cortinillas | Spots, menciones, product placement |
| Canal de cable | Tema o nicho | Programas, franjas, especiales | Marca del canal, programación | Spots por audiencia temática |
| Radio | Rutina temporal y formato | Noticias, música, llamadas, tráfico | Voz, jingle, bloque horario | Spots, menciones, patrocinios |
| Tienda | Recorrido físico de compra | Departamentos, pasillos, góndolas | Letreros, displays, escaparates | Promociones, exhibiciones, trade marketing |
| Plaza comercial | Zonas de intención | Food court, moda, servicios, entretenimiento | Señalética, tiendas ancla | Renta, activaciones, publicidad interna |
| YouTube | Canal y catálogo | Playlists, series, formatos recurrentes | Thumbnail, título, hook | Ads, patrocinios, membresías |
| Newsletter | Lectura recurrente | Editorial, enlaces, análisis, patrocinador | Asunto, remitente, estructura | Patrocinios, afiliados, productos |
| Comunidad digital | Participación organizada | Canales, flairs, categorías | Normas, nombres de canales, hilos fijados | Membresías, patrocinios, leads |
| Marketplace | Búsqueda y comparación | Categorías, filtros, fichas | Imagen, precio, rating, badges | Comisiones, ads internos, featured products |
| Plataforma educativa | Progresión de aprendizaje | Módulos, unidades, lecciones, evaluaciones | Títulos de módulo, índice, objetivos | Cursos, membresías, certificaciones |

---

# 10. Adaptaciones contextuales por dominio

## 10.1. Periódico

```yaml
dominio: periodico
entidad: periódico
forma_de_atencion: actualidad_general_organizada
estructura_interna:
  - portada
  - secciones
  - columnas
  - anuncios
  - clasificados
senales_de_entrada:
  - titulares
  - fotografías
  - ubicación_en_página
  - nombre_de_sección
monetizacion:
  - anuncios_display
  - clasificados
  - patrocinios
  - inserts
funcion_estructural: >
  Ordenar la actualidad en secciones navegables y permitir que la publicidad
  se inserte según contexto temático, ubicación o intención.
```

## 10.2. Revista

```yaml
dominio: revista
entidad: revista
forma_de_atencion: interes_tematico_o_estilo_de_vida
estructura_interna:
  - editorial
  - reportajes
  - entrevistas
  - reseñas
  - guías
  - publicidad_contextual
senales_de_entrada:
  - portada
  - titulares
  - diseño_visual
  - fotografía
  - nombre_de_sección
monetizacion:
  - anuncios_por_interes
  - publirreportajes
  - patrocinios
  - afiliados
funcion_estructural: >
  Convocar una audiencia por afinidad temática y organizarla mediante secciones
  que permiten tratamientos distintos de un mismo campo de interés.
```

## 10.3. Programa de televisión

```yaml
dominio: television
entidad: programa_de_television
forma_de_atencion: audiencia_temporal_en_franja_o_rutina
estructura_interna:
  - apertura
  - segmentos
  - bloques
  - cortes_publicitarios
  - cierre
senales_de_entrada:
  - intro
  - conductor
  - cortinillas
  - avance_del_segmento
  - grafismos
monetizacion:
  - spots
  - menciones
  - product_placement
  - patrocinios_de_segmento
funcion_estructural: >
  Organizar la atención en el tiempo mediante bloques reconocibles que sostienen
  ritmo, retención y oportunidades de inserción publicitaria.
```

## 10.4. Tienda física

```yaml
dominio: comercio_fisico
entidad: tienda
forma_de_atencion: recorrido_de_compra
estructura_interna:
  - departamentos
  - pasillos
  - góndolas
  - displays
  - cajas
  - zonas_promocionales
senales_de_entrada:
  - escaparate
  - señalética
  - etiquetas
  - empaque
  - iluminación
  - precio_visible
monetizacion:
  - venta_directa
  - exhibiciones_pagadas
  - trade_marketing
  - promociones_de_marca
funcion_estructural: >
  Ordenar la intención de compra mediante departamentos, recorridos y displays
  que hacen más fácil encontrar, comparar y elegir productos.
```

## 10.5. Plaza comercial

```yaml
dominio: comercio_espacial
entidad: plaza_comercial
forma_de_atencion: flujo_fisico_de_visitantes
estructura_interna:
  - zonas_de_restaurantes
  - tiendas_ancla
  - corredores
  - zona_de_entretenimiento
  - zona_de_servicios
  - estacionamiento
senales_de_entrada:
  - directorios
  - letreros
  - señalética
  - fachadas
  - vitrinas
  - mapas
monetizacion:
  - renta_de_locales
  - activaciones
  - publicidad_interna
  - eventos
  - patrocinios_de_zona
funcion_estructural: >
  Agrupar intenciones de consumo en zonas físicas que ordenan el recorrido,
  aumentan permanencia y crean contextos de compra y publicidad.
```

## 10.6. Canal de YouTube

```yaml
dominio: video_digital
entidad: canal_de_YouTube
forma_de_atencion: catálogo_recurrente_de_video
estructura_interna:
  - playlists
  - series
  - formatos_recurrentes
  - directos
  - comunidad
senales_de_entrada:
  - thumbnail
  - título
  - descripción
  - hook
  - nombre_del_canal
monetizacion:
  - ads
  - patrocinios
  - membresías
  - afiliados
  - productos_propios
funcion_estructural: >
  Convertir un tema o identidad de canal en catálogo navegable, donde cada serie
  o playlist funciona como sección recurrente de atención.
```

## 10.7. Newsletter

```yaml
dominio: email_editorial
entidad: newsletter
forma_de_atencion: lectura_recurrente_en_inbox
estructura_interna:
  - asunto
  - editorial_inicial
  - análisis_principal
  - enlaces
  - patrocinador
  - cierre
senales_de_entrada:
  - remitente
  - subject_line
  - preheader
  - regularidad
monetizacion:
  - patrocinios
  - afiliados
  - productos_propios
  - suscripción
funcion_estructural: >
  Crear una rutina de lectura predecible, organizada por bloques recurrentes,
  donde el lector reconoce rápidamente dónde está el valor.
```

## 10.8. Comunidad digital

```yaml
dominio: comunidad_digital
entidad: comunidad
forma_de_atencion: participación_colectiva_organizada
estructura_interna:
  - canales
  - categorías
  - flairs
  - hilos_fijados
  - normas
  - roles
senales_de_entrada:
  - nombres_de_canales
  - etiquetas
  - reglas
  - mensajes_fijados
  - reputación_de_miembros
monetizacion:
  - membresías
  - patrocinios
  - leads
  - eventos
  - venta_de_productos
funcion_estructural: >
  Ordenar interacción social alrededor de temas, normas y roles, permitiendo
  que la atención no sea sólo consumida sino participada.
```

## 10.9. Marketplace

```yaml
dominio: comercio_digital
entidad: marketplace
forma_de_atencion: búsqueda_y_comparación_de_productos
estructura_interna:
  - categorías
  - filtros
  - resultados
  - fichas_de_producto
  - recomendaciones
  - carrito
senales_de_entrada:
  - imagen_principal
  - nombre_del_producto
  - precio
  - rating
  - reviews
  - badges
  - envío
monetizacion:
  - comisión
  - anuncios_internos
  - featured_products
  - suscripciones_de_vendedor
funcion_estructural: >
  Organizar la intención de compra digital mediante categorías, filtros y señales
  comparativas que reducen la fricción de elección.
```

---

# 11. Relación con modelos anteriores

Esta nueva sección conecta tres modelos ya trabajados:

```txt
1. Segmentación
   → cómo se convoca o filtra una audiencia

2. Secciones
   → cómo se organiza internamente esa audiencia

3. Señales de entrada
   → cómo cada unidad llama la atención dentro de la estructura
```

Relación completa:

```txt
entidad organizadora de atención
  → segmenta o convoca audiencia
    → divide esa atención en secciones
      → cada sección contiene piezas
        → cada pieza necesita señales de entrada
          → cada señal filtra interés
            → cada interacción puede monetizarse o convertirse
```

Ejemplo con revista:

```txt
revista de moda
  → convoca audiencia interesada en moda
    → secciones: belleza, tendencias, entrevistas, compras
      → pieza: artículo sobre perfumes
        → titular: "Las fragancias limpias que dominarán esta temporada"
          → lector interesado entra
            → anuncio de perfume tiene contexto adecuado
```

Ejemplo con tienda:

```txt
tienda departamental
  → convoca compradores generales
    → departamentos: perfumería, ropa, niños, hogar
      → display de fragancia
        → empaque / cartel / promoción como señal de entrada
          → comprador se acerca
            → posibilidad de compra
```

Ejemplo con YouTube:

```txt
canal de YouTube sobre publicidad
  → convoca audiencia interesada en marketing
    → playlists: historia, casos, errores, estrategias
      → video: análisis de Hopkins
        → thumbnail + título como señal de entrada
          → usuario hace clic
            → patrocinio o monetización contextual
```

---

# 12. Por qué esto pertenece al Campo Atencional de Publicidad

Porque el Campo Atencional no sólo estudia contenidos o anuncios. Estudia la infraestructura que organiza atención.

Dentro del campo de publicidad, estas entidades son importantes porque funcionan como:

```txt
contenedores de atención
organizadores de recorridos
productores de contexto
generadores de expectativas
superficies de monetización
```

En términos ACCD:

```yaml
campo_atencional_publicidad:
  secciones_posibles:
    - principios_publicitarios
    - historia_de_medios_publicitarios
    - segmentacion_y_audiencias
    - senales_de_entrada
    - secciones_y_modulos_de_atencion
    - entidades_organizadoras_de_atencion
    - estrategias_de_conversion
    - modelos_de_monetizacion
```

La nueva sección quedaría aquí:

```txt
Campo Atencional de Publicidad
  → Entidades organizadoras de atención
```

Y esa sección serviría para estudiar:

```txt
cómo distintas formas sociales, mediáticas y comerciales
ordenan la atención antes de que aparezca una pieza publicitaria concreta.
```

---

# 13. Preguntas de análisis para cualquier entidad

Para estudiar una entidad dentro de esta sección del campo atencional, se puede usar este molde:

```yaml
molde_analisis_entidad_organizadora_de_atencion:
  entidad:
  dominio:
  audiencia_convocada:
  tipo_de_atencion:
  forma_de_segmentacion:
  estructura_interna:
  secciones_o_zonas:
  señales_de_entrada:
  recorridos_de_consumo:
  puntos_de_monetizacion:
  anuncios_o_mensajes_posibles:
  equivalentes_en_otros_medios:
  funcion_estructural:
```

Ejemplo breve:

```yaml
molde_analisis_entidad_organizadora_de_atencion:
  entidad: tienda_departamental
  dominio: comercio_fisico
  audiencia_convocada: compradores_generales
  tipo_de_atencion: busqueda_y_comparacion_de_productos
  forma_de_segmentacion: espacial_por_departamentos
  estructura_interna:
    - departamentos
    - pasillos
    - displays
    - cajas
  secciones_o_zonas:
    - perfumeria
    - ropa_hombre
    - ropa_mujer
    - niños
    - hogar
  señales_de_entrada:
    - señalética
    - displays
    - empaque
    - precio
  recorridos_de_consumo:
    - entrada
    - búsqueda_por_departamento
    - comparación
    - prueba
    - compra
  puntos_de_monetizacion:
    - venta_directa
    - exhibicion_promocional
    - trade_marketing
  equivalentes_en_otros_medios:
    - secciones_de_revista
    - categorías_de_marketplace
    - playlists_de_YouTube
  funcion_estructural: >
    Ordenar intención de compra mediante divisiones espaciales reconocibles.
```

---

# 14. Modelo final

```yaml
modelo_entidades_organizadoras_de_atencion:
  tesis: >
    Antes de estudiar un anuncio aislado, conviene estudiar la entidad que organiza
    la atención donde ese anuncio aparece. Periódicos, revistas, programas de
    televisión, tiendas, plazas comerciales, canales de YouTube, comunidades,
    newsletters y marketplaces son manifestaciones distintas de una misma función
    estructural: convocar atención, ordenarla internamente, hacerla navegable,
    segmentable y monetizable.

  formula:
    entidad_organizadora_de_atencion:
      - contenedor
      - audiencia_convocada
      - estructura_interna
      - secciones_o_zonas
      - señales_de_entrada
      - recorridos_de_consumo
      - puntos_de_monetizacion

  relacion_con_campo_atencional:
    campo: publicidad
    seccion: entidades_organizadoras_de_atencion
    funcion: >
      Estudiar las infraestructuras mediáticas, comerciales, espaciales y digitales
      donde la atención se organiza antes de ser monetizada o convertida.
```

---

# 15. Frases nucleares

```txt
Antes de estudiar el anuncio aislado,
hay que estudiar la entidad que organiza la atención donde ese anuncio aparece.
```

```txt
Una entidad organizadora de atención es una forma estable
que reúne personas, ordena su atención y crea contextos
donde ciertos mensajes, productos o anuncios se vuelven más relevantes.
```

```txt
Si la segmentación decide quién entra,
la sección decide cómo se ordena lo que encuentra dentro,
y la señal de entrada decide qué pieza recibe atención efectiva.
```

```txt
Periódicos, revistas, tiendas, programas, canales, comunidades y marketplaces
no son sólo medios distintos: son formas distintas de organizar atención.
```
