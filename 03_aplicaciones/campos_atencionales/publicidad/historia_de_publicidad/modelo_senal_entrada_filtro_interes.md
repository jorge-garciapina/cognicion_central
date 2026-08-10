# Modelo — Señal de entrada como filtro de interés

## 0. Punto de partida

Este modelo toma como punto de partida el mNode:

```yaml
mnode_id: MN_SENAL_DE_ENTRADA_COMO_FILTRO_DE_INTERES
```

La idea central es que el **titular** que Hopkins analiza en el capítulo sobre *Headlines* no debe entenderse solamente como una frase colocada al inicio de un anuncio impreso. Debe entenderse como una **función estructural general**:

```txt
crear una señal inicial
  → que revele un interés posible
    → para que el receptor decida si concede atención
```

Por eso, aunque no todos los medios tienen titulares en sentido literal, todos los medios saturados necesitan alguna señal de entrada.

```txt
No todos los medios tienen “titulares” en sentido literal,
pero todos los medios saturados necesitan una señal de entrada.

Esa señal permite al receptor decidir:
  “esto me interesa”
  “esto no es para mí”
  “vale la pena seguir”
  “lo ignoro”
```

---

## 1. mNode base

```yaml
mnode_id: MN_SENAL_DE_ENTRADA_COMO_FILTRO_DE_INTERES
tipo_de_unidad: nucleo_esencificado
familia_cognitiva: FAM-Idea
formulacion: >
  En cualquier entorno saturado de opciones, existe una señal de entrada que permite
  al receptor decidir rápidamente si vale la pena conceder atención a un contenido,
  mensaje, producto o experiencia. Esa señal puede revelar o esconder un interés,
  funcionando como filtro inicial entre la atención posible y la atención efectiva.

problema_que_resuelve:
  - exceso_de_opciones
  - imposibilidad_de_consumir_todo
  - necesidad_de_decision_rapida
  - busqueda_de_relevancia
  - reduccion_de_incertidumbre

operacion_basica:
  - presentar_senal_inicial
  - condensar_promesa_o_interes
  - permitir_autoseleccion
  - filtrar_atencion
  - habilitar_consumo_posterior

resultado:
  - entrada_al_mensaje
  - descarte_del_mensaje
  - atencion_cualificada
  - abandono_por_falta_de_relevancia
```

---

## 2. Tesis general

La función del titular puede generalizarse más allá del anuncio impreso.

```txt
Nadie lee todo el periódico.
Nadie lee todos los anuncios.
Nadie ve todos los videos.
Nadie abre todos los emails.
Nadie entra a todos los resultados de búsqueda.
Nadie mira todos los productos de una tienda.
```

Por eso, antes de persuadir, hay que ser seleccionado.

```txt
ambiente_saturado
  → señal_de_entrada
    → evaluación_rápida
      → selección_o_descarte
        → consumo_del_contenido
```

La señal de entrada cumple una función de filtro:

```txt
señal_de_entrada
  → revela_interés
    → activa_autoselección
      → filtra_atención
        → habilita_consumo
          → permite_persuasión
```

---

## 3. Esencificación de la señal de entrada

La esencificación consiste en separar la forma histórica de la función estructural.

En Hopkins, la forma histórica es:

```txt
headline en anuncio impreso
```

Pero la función estructural es:

```txt
revelar interés
  → permitir selección
    → obtener lectura del anuncio
```

Por eso, el titular puede esencificarse así:

```yaml
esencificacion_senal_de_entrada:
  forma_historica_original:
    - titular_de_periodico
    - titular_publicitario_impreso

  funcion_esencial:
    - revelar_interes
    - seleccionar_receptor
    - filtrar_atencion
    - prometer_valor
    - reducir_incertidumbre
    - iniciar_consumo_del_mensaje

  no_esencial:
    - que_sea_texto
    - que_sea_una_frase
    - que_aparezca_en_papel
    - que_sea_estatico
    - que_ocupe_la_parte_superior
    - que_tenga_forma_de_titulo

  esencial:
    - aparece_antes_del_consumo_completo
    - condensa_la_razon_para_continuar
    - permite_decision_rapida
    - revela_o_esconde_interes
    - filtra_atencion_util_de_atencion_inutil
```

La conclusión de esta esencificación:

```txt
señal_de_entrada
  ≠ necesariamente titular textual

señal_de_entrada
  = unidad inicial que permite decidir si conceder atención
```

Esto permite ver que un hook, una portada, un asunto de email, un thumbnail, un empaque o un escaparate pueden cumplir la misma función estructural aunque no se parezcan superficialmente.

---

## 4. La señal de entrada como micro-segmentación

La señal de entrada está conectada con la segmentación, pero opera en un nivel distinto.

```txt
segmentación_de_medio:
  intenta colocar el mensaje frente a una audiencia probable

señal_de_entrada:
  intenta hacer que el receptor correcto se reconozca dentro de esa audiencia
```

Por eso el titular es una forma de **micro-segmentación instantánea**.

Ejemplo en revista:

```txt
un anuncio aparece en una revista de salud
  → ya hay segmentación temática

pero dentro de esa revista:
  un titular sobre "dolor de espalda al trabajar sentado"
  filtra a quienes tienen ese problema específico
```

Ejemplo en video:

```txt
un video aparece en un feed de marketing
  → ya hay segmentación algorítmica o temática

pero el hook:
  "Tu anuncio no falla por diseño, falla por audiencia"
  filtra a quienes tienen interés en performance publicitario
```

mNode complementario:

```yaml
mnode_id: MN_SENAL_ENTRADA_COMO_MICROSEGMENTADOR
tipo_de_unidad: principio_selectivo
familia_cognitiva: FAM-Idea
formulacion: >
  La señal de entrada funciona como microsegmentador situado: dentro de una audiencia
  ya expuesta al mensaje, permite que el receptor relevante se reconozca y que el
  receptor irrelevante pase de largo.

estructura:
  audiencia_expuesta:
    - heterogenea
    - parcialmente_segmentada
    - limitada_en_atencion

  señal_de_entrada:
    - revela_problema
    - revela_beneficio
    - revela_tema
    - revela_identidad
    - revela_tension
    - revela_promesa

  resultado:
    - autoseleccion_del_receptor_relevante
    - descarte_por_receptor_irrelevante
```

La señal de entrada no reemplaza la segmentación. La afina.

---

## 5. Fábrica de Adaptaciones Contextuales

La **Fábrica de Adaptaciones Contextuales** permite entender cómo un mismo núcleo se realiza de formas distintas según el medio.

El núcleo preservado es:

```txt
revelar interés para filtrar atención
```

Las adaptaciones cambian según soporte, ritmo, interfaz, modalidad y tipo de decisión esperada.

```yaml
mnode_id: FAB_SENAL_DE_ENTRADA_ADAPTACIONES_CONTEXTUALES
tipo_de_unidad: fabrica_de_adaptaciones_contextuales
familia_cognitiva: FAM-Diseño
formulacion: >
  La función estructural del titular se adapta a distintos medios mediante señales
  de entrada específicas. Cada adaptación conserva el núcleo de revelar interés y
  filtrar atención, pero modifica la forma de la señal según el soporte, el ritmo,
  la interfaz, el contexto de consumo y el tipo de decisión que debe provocar.

nucleo_preservado:
  - revelar_interes
  - permitir_autoseleccion
  - filtrar_atencion
  - prometer_valor
  - reducir_incertidumbre
  - habilitar_consumo_posterior

variables_de_adaptacion:
  soporte:
    ejemplos:
      - papel
      - pantalla
      - audio
      - video
      - tienda
      - feed
      - buscador
      - inbox

  temporalidad:
    ejemplos:
      - estatico
      - secuencial
      - instantaneo
      - recurrente
      - skippable
      - scrollable

  modalidad:
    ejemplos:
      - texto
      - imagen
      - sonido
      - movimiento
      - espacio
      - interfaz
      - objeto_fisico

  decision_esperada:
    ejemplos:
      - leer
      - abrir
      - hacer_click
      - seguir_viendo
      - acercarse
      - comprar
      - guardar
      - responder
```

---

## 6. Aplicaciones por dominio

---

### 6.1. Periódico

En el periódico, la señal de entrada es el titular de noticia.

```yaml
adaptacion:
  id: ADAPT_TITULAR_PERIODISTICO
  medio: periodico
  señal_de_entrada:
    - titular
    - subtitulo
    - seccion
    - ubicacion_en_pagina
    - fotografia
  decision:
    - leer
    - saltar
    - escanear
  funcion:
    - revelar_tema
    - revelar_relevancia
    - ordenar_prioridad_de_lectura
```

Estructura:

```txt
periodico_completo
  → titulares
    → seleccion_de_noticias
      → lectura
```

El titular periodístico no sólo atrae atención. Organiza la lectura dentro de un universo demasiado grande para ser consumido completo.

```txt
nadie lee todo
  → el titular permite elegir
```

---

### 6.2. Anuncio impreso

En publicidad impresa, la señal de entrada es el headline.

```yaml
adaptacion:
  id: ADAPT_HEADLINE_ANUNCIO_IMPRESO
  medio: anuncio_impreso
  señal_de_entrada:
    - headline
    - imagen_principal
    - layout
    - primera_linea
  decision:
    - leer_anuncio
    - ignorarlo
  funcion:
    - revelar_beneficio
    - identificar_prospecto
    - evitar_atencion_inutil
    - abrir_la_venta
```

Estructura:

```txt
pagina_con_muchos_anuncios
  → headline
    → prospecto_reconoce_interes
      → lee_anuncio
```

Aquí aparece con fuerza la diferencia entre atención útil y atención inútil.

```txt
titular_correcto:
  atrae a quien puede comprar

titular_ciego:
  atrae curiosidad, pero puede ocultar el interés real
```

La señal de entrada en un anuncio no debe buscar “más lectores” en abstracto. Debe buscar lectores adecuados.

---

### 6.3. Video corto

En video corto, el equivalente estructural no es sólo una frase. Es el hook.

```yaml
adaptacion:
  id: ADAPT_HOOK_VIDEO_CORTO
  medio: video_corto
  señal_de_entrada:
    - primer_frame
    - primera_frase
    - texto_en_pantalla
    - gesto_inicial
    - movimiento
    - sonido
    - tension_visual
    - promesa
  decision:
    - seguir_viendo
    - deslizar
    - abandonar
  funcion:
    - detener_scroll
    - prometer_valor
    - abrir_tension
    - hacer_que_el_siguiente_segundo_importe
```

Estructura:

```txt
feed_infinito
  → primer_segundo
    → hook
      → retencion_inicial
        → desarrollo
          → cierre
```

El hook es un titular temporal-audiovisual.

```txt
titular:
  “lee esto”

hook:
  “sigue viendo”
```

Diferencia importante:

```txt
titular impreso:
  se evalua antes de leer

hook de video:
  se evalua mientras el video ya empezo
```

Por eso el hook tiene que cumplir dos funciones al mismo tiempo:

```txt
capturar atención
  + iniciar desarrollo
```

No basta con sorprender. Debe revelar una razón para continuar.

---

### 6.4. YouTube

En YouTube, la señal de entrada se distribuye en varias partes.

```yaml
adaptacion:
  id: ADAPT_YOUTUBE_THUMBNAIL_TITULO_HOOK
  medio: YouTube
  señal_de_entrada:
    - thumbnail
    - titulo
    - nombre_del_canal
    - duracion
    - primeros_segundos
  decision:
    - hacer_click
    - no_hacer_click
    - seguir_viendo
    - abandonar
  funcion:
    - prometer_valor_pre_click
    - generar_curiosidad_visual
    - establecer_expectativa
    - confirmar_promesa_en_la_apertura
```

Estructura:

```txt
recomendaciones_de_YouTube
  → thumbnail + titulo
    → click
      → primeros_segundos
        → confirmacion_o_abandono
```

Aquí conviene distinguir dos señales:

```txt
senal_pre-click:
  thumbnail + titulo

senal_post-click:
  primeros segundos
```

El error típico es que el thumbnail o título prometa algo que el inicio del video no confirma.

```txt
promesa_pre-click
  ≠ contenido_inicial
    → abandono
    → perdida_de_confianza
```

La señal de entrada en YouTube no es una pieza única: es una cadena de señales que deben ser consistentes.

---

### 6.5. Email

En email, la señal de entrada es el asunto, pero también el remitente y el preheader.

```yaml
adaptacion:
  id: ADAPT_ASUNTO_EMAIL
  medio: email
  señal_de_entrada:
    - remitente
    - subject_line
    - preheader
    - hora_de_llegada
  decision:
    - abrir
    - ignorar
    - borrar
    - marcar_spam
  funcion:
    - revelar_relevancia
    - activar_confianza
    - diferenciarse_en_inbox
    - justificar_apertura
```

Estructura:

```txt
bandeja_saturada
  → remitente + asunto
    → apertura
      → lectura
        → click
```

El asunto de email es probablemente uno de los equivalentes más directos del titular.

Pero tiene una particularidad:

```txt
en el titular impreso importa mucho el tema;
en el email importa también quién lo envía.
```

Por eso:

```txt
asunto_relevante + remitente_desconocido
  → puede generar sospecha

asunto_menos_intenso + remitente_confiable
  → puede abrirse
```

La señal de entrada aquí combina **interés** y **confianza**.

---

### 6.6. Buscadores

En buscadores, la señal de entrada es el resultado de búsqueda.

```yaml
adaptacion:
  id: ADAPT_RESULTADO_BUSQUEDA
  medio: buscador
  señal_de_entrada:
    - title_tag
    - URL
    - meta_description
    - rich_snippet
    - favicon
    - posicion_en_SERP
  decision:
    - hacer_click
    - seguir_buscando
    - reformular_consulta
  funcion:
    - mostrar_relevancia
    - responder_a_intencion
    - diferenciarse_de_resultados_vecinos
    - prometer_solucion
```

Estructura:

```txt
consulta
  → lista_de_resultados
    → title + snippet
      → click
        → evaluacion_de_pagina
```

Aquí la señal de entrada tiene una diferencia muy importante respecto al feed social:

```txt
buscador:
  el usuario ya expreso intencion

feed social:
  el contenido debe despertar intencion
```

Entonces el resultado de búsqueda no debe ser misterioso. Debe revelar claramente correspondencia con la intención.

Ejemplo:

```txt
consulta:
  "mejor software de facturacion para pymes"

senal_de_entrada_correcta:
  "Los 7 mejores software de facturacion para pymes en 2026"

senal_de_entrada_debil:
  "Soluciones modernas para negocios inteligentes"
```

En búsqueda, claridad suele pesar más que misterio.

---

### 6.7. Landing page

En una landing page, la señal de entrada es el hero.

```yaml
adaptacion:
  id: ADAPT_HERO_LANDING_PAGE
  medio: landing_page
  señal_de_entrada:
    - headline
    - subheadline
    - imagen_hero
    - CTA_inicial
    - prueba_social_inicial
  decision:
    - permanecer
    - hacer_scroll
    - hacer_click
    - abandonar
  funcion:
    - confirmar_promesa_del_anuncio
    - revelar_beneficio_central
    - orientar_la_lectura
    - reducir_duda_inicial
```

Estructura:

```txt
click_desde_anuncio
  → hero
    → confirmacion_de_relevancia
      → scroll_o_CTA
```

El hero no sólo debe atraer. Debe confirmar.

```txt
anuncio:
  promete algo

landing:
  debe confirmar de inmediato que el usuario llego al lugar correcto
```

Si no hay continuidad entre anuncio y landing, se rompe la cadena de confianza.

```txt
promesa_del_anuncio
  → expectativa
    → hero_incongruente
      → abandono
```

El hero es un titular expandido porque combina texto, imagen, CTA y prueba inicial.

---

### 6.8. Podcast y audio

En audio, la señal de entrada funciona antes y después del inicio.

```yaml
adaptacion:
  id: ADAPT_PODCAST_AUDIO
  medio: podcast_audio
  señal_de_entrada:
    - titulo_del_episodio
    - portada
    - descripcion
    - voz_inicial
    - primeras_frases
    - musica_de_apertura
  decision:
    - reproducir
    - saltar
    - seguir_escuchando
    - abandonar
  funcion:
    - revelar_tema
    - establecer_tono
    - generar_confianza_en_la_voz
    - prometer_valor_del_episodio
```

Estructura:

```txt
lista_de_episodios
  → titulo + portada
    → reproduccion
      → apertura_de_audio
        → continuidad
```

En audio, el hook no depende de imagen una vez que empezó. Depende de:

```txt
voz
ritmo
claridad
promesa
tono
autoridad
intimidad
```

Aquí el equivalente del titular puede ser una frase inicial:

```txt
"Hoy vamos a explicar por qué los anuncios que más llaman la atención pueden ser los peores."
```

Esa frase revela interés y crea expectativa auditiva.

---

### 6.9. Tienda física

En el espacio físico, las señales de entrada son materiales y espaciales.

```yaml
adaptacion:
  id: ADAPT_TIENDA_FISICA_SENALETICA_EMPAQUE
  medio: tienda_fisica
  señal_de_entrada:
    - fachada
    - escaparate
    - seccion
    - letrero
    - empaque
    - display
    - precio_visible
    - iluminacion
    - color
  decision:
    - entrar
    - acercarse
    - tomar_producto
    - comparar
    - ignorar
  funcion:
    - revelar_categoria
    - revelar_beneficio
    - orientar_recorrido
    - activar_deseo
    - reducir_esfuerzo_de_busqueda
```

Estructura:

```txt
entorno_fisico
  → señal_visual_espacial
    → acercamiento
      → contacto_con_producto
        → evaluacion
```

Aquí el titular no es necesariamente texto. Puede ser una composición espacial.

Ejemplos:

```txt
escaparate:
  “esta tienda vende ropa elegante”

seccion:
  “aquí está perfumería”

empaque:
  “este producto es para piel sensible”

display:
  “este producto está en promoción”
```

El empaque funciona como titular cuando permite al comprador entender rápidamente:

```txt
qué es
para quién es
qué promete
por qué tomarlo
```

---

### 6.10. Marketplace / ecommerce

En ecommerce, cada producto compite dentro de una grilla.

```yaml
adaptacion:
  id: ADAPT_MARKETPLACE_PRODUCT_CARD
  medio: marketplace_ecommerce
  señal_de_entrada:
    - imagen_principal
    - nombre_del_producto
    - precio
    - rating
    - numero_de_reviews
    - etiqueta_de_descuento
    - envio
    - badge
  decision:
    - hacer_click_en_producto
    - comparar
    - guardar
    - ignorar
  funcion:
    - revelar_categoria
    - revelar_valor
    - mostrar_confianza
    - permitir_comparacion_rapida
```

Estructura:

```txt
grilla_de_productos
  → tarjeta_de_producto
    → click
      → pagina_de_producto
        → compra_o_abandono
```

Aquí el titular se distribuye en una tarjeta:

```txt
imagen + nombre + precio + rating
```

La tarjeta completa funciona como señal de entrada.

Un mal nombre de producto, mala imagen o ausencia de confianza puede ocultar el interés, aunque el producto sea bueno.

---

### 6.11. Redes sociales

En redes sociales, la señal de entrada puede ser extremadamente compuesta.

```yaml
adaptacion:
  id: ADAPT_FEED_SOCIAL
  medio: redes_sociales
  señal_de_entrada:
    - primera_imagen
    - primer_frame
    - caption_inicial
    - texto_en_pantalla
    - rostro
    - musica
    - cuenta_que_publica
    - formato
    - contexto_algoritmico
  decision:
    - detener_scroll
    - ver
    - deslizar
    - guardar
    - compartir
    - comentar
    - hacer_click
  funcion:
    - detener_movimiento
    - revelar_relevancia
    - activar_identidad
    - abrir_curiosidad
    - provocar_interaccion
```

Estructura:

```txt
scroll_continuo
  → señal_de_entrada
    → detencion
      → consumo
        → interaccion
```

Aquí la señal de entrada no sólo compite contra otros mensajes. Compite contra el movimiento mismo del usuario.

```txt
en periódico:
  compites contra otros textos

en redes:
  compites contra el gesto de seguir deslizando
```

Por eso la señal de entrada debe ser muy rápida, clara o intensa.

---

### 6.12. Notificaciones push

En una notificación, la señal de entrada es casi todo el mensaje.

```yaml
adaptacion:
  id: ADAPT_NOTIFICACION_PUSH
  medio: notificacion_push
  señal_de_entrada:
    - app_emisora
    - titulo
    - primera_linea
    - icono
    - hora
  decision:
    - abrir
    - descartar
    - silenciar
    - desinstalar
  funcion:
    - justificar_interrupcion
    - revelar_utilidad_inmediata
    - activar_urgencia_o_relevancia
```

Estructura:

```txt
interrupcion
  → señal_breve
    → abrir_o_descartar
```

Aquí el riesgo es alto porque la señal no sólo pide atención; interrumpe.

```txt
señal_relevante:
  abre

señal_irrelevante:
  molesta

señal_repetidamente_irrelevante:
  desactiva_notificaciones
```

Por eso la señal de entrada debe justificar su interrupción.

---

## 7. Patrones de falla

La señal de entrada puede fallar de varias formas.

```yaml
fallas_de_senal_de_entrada:
  senal_debil:
    descripcion: >
      No revela con suficiente claridad por qué vale la pena continuar.
    resultado:
      - indiferencia
      - no_click
      - no_lectura
      - abandono

  senal_ciega:
    descripcion: >
      Oculta el interés real del contenido.
    resultado:
      - prospectos_relevantes_no_reconocen_valor
      - atencion_perdida

  senal_enganosa:
    descripcion: >
      Promete algo que el contenido no entrega.
    resultado:
      - click_inicial
      - baja_retencion
      - desconfianza
      - fatiga

  senal_demasiado_general:
    descripcion: >
      Intenta atraer a todos y no llama con precisión a nadie.
    resultado:
      - atencion_no_cualificada
      - baja_conversion

  senal_demasiado_interna:
    descripcion: >
      Usa lenguaje del emisor, pero no del receptor.
    resultado:
      - falta_de_reconocimiento
      - no_autoseleccion

  senal_desalineada:
    descripcion: >
      La señal inicial no coincide con el mensaje posterior.
    resultado:
      - ruptura_de_expectativa
      - abandono
```

Conexión directa con Hopkins:

```txt
Un titular puede revelar o esconder interés.

Una señal de entrada puede:
  revelar interés correcto
  ocultar interés correcto
  fingir un interés que no existe
```

---

## 8. Matriz de adaptaciones

| Dominio | Señal de entrada | Decisión | Núcleo preservado |
|---|---|---|---|
| Periódico | Titular | Leer / saltar | Revelar tema de interés |
| Anuncio impreso | Headline | Leer anuncio / ignorar | Revelar beneficio u oferta |
| Video corto | Hook | Seguir viendo / deslizar | Revelar tensión o valor |
| YouTube | Thumbnail + título + apertura | Click + retención | Prometer y confirmar valor |
| Email | Remitente + asunto + preheader | Abrir / borrar | Justificar apertura |
| Buscador | Title + snippet | Click / seguir buscando | Responder intención |
| Landing page | Hero | Seguir / abandonar | Confirmar promesa |
| Podcast | Título + portada + voz inicial | Escuchar / salir | Prometer valor auditivo |
| Tienda física | Escaparate / empaque / sección | Acercarse / ignorar | Revelar categoría y deseo |
| Marketplace | Product card | Click / comparar | Mostrar valor y confianza |
| Redes sociales | Primer frame / caption / cuenta | Detener scroll / pasar | Detener movimiento y revelar relevancia |
| Push notification | Título breve | Abrir / descartar | Justificar interrupción |

---

## 9. Modelo general para ACCD

```yaml
modelo_ACCD_senal_de_entrada:
  nombre: "Señal de entrada como filtro de interés"
  tesis: >
    Toda realización de contenido necesita una señal inicial que permita al receptor
    reconocer si el contenido tiene valor para él. Esa señal no siempre adopta la
    forma de un titular textual; puede ser frase, imagen, sonido, movimiento, portada,
    empaque, asunto, thumbnail, hero o primer frame. Su función estructural es revelar
    interés, filtrar atención y habilitar consumo posterior.

  secuencia:
    - ambiente_saturado
    - señal_de_entrada
    - reconocimiento_o_no_reconocimiento_de_interes
    - autoseleccion
    - consumo_o_descarte
    - validacion_por_retencion_click_lectura_apertura_o_conversion

  regla_operativa: >
    Antes de diseñar el contenido completo, hay que diseñar la señal por la cual
    el receptor correcto reconocerá que ese contenido le corresponde.

  pregunta_de_diseño:
    - ¿Qué interés debe revelar esta señal?
    - ¿A quién debe llamar?
    - ¿A quién debe dejar pasar?
    - ¿Qué promesa inicial hace?
    - ¿El contenido posterior cumple esa promesa?
    - ¿La señal atrae atención útil o sólo curiosidad?
```

---

## 10. Reglas operativas de diseño

```yaml
reglas_operativas:
  R1_revelar_interes:
    pregunta: "¿La señal deja claro por qué esto podría importarle al receptor correcto?"

  R2_filtrar_no_solo_atraer:
    pregunta: "¿La señal atrae al prospecto útil o sólo genera curiosidad amplia?"

  R3_no_ocultar_valor:
    pregunta: "¿La persona más interesada podría reconocer aquí su interés?"

  R4_no_enganar:
    pregunta: "¿La promesa inicial coincide con lo que el contenido realmente entrega?"

  R5_adaptar_al_medio:
    pregunta: "¿La señal usa la modalidad adecuada del medio: texto, imagen, sonido, movimiento, espacio o interfaz?"

  R6_confirmar_en_la_continuidad:
    pregunta: "¿Lo que viene después confirma la señal inicial?"

  R7_medicion:
    pregunta: "¿Cómo se valida que la señal funcionó: apertura, clic, lectura, retención, acercamiento, compra?"
```

---

## 11. Fórmula final

```txt
señal_de_entrada
  → revela_interés
    → activa_autoselección
      → filtra_atención
        → habilita_consumo
          → permite_persuasión
```

Frase conceptual:

```txt
Todo medio necesita un titular,
pero no todo titular tiene forma de frase.
```

Versión técnica:

```txt
La señal de entrada es la adaptación contextual de la función titular
en cualquier dominio donde el receptor debe elegir entre múltiples posibilidades
de atención.
```

Aplicado a Hopkins:

```txt
El titular de anuncio no es sólo una técnica de copywriting.
Es una instancia histórica de una función más general:

  crear una señal inicial
  que revele el interés correcto
  antes de pedir atención completa.
```

---

## 12. Cierre del modelo

La utilidad de modelarlo con esencificación y fábrica de adaptaciones contextuales es que permite ver que el titular, el hook, el asunto, el thumbnail, el snippet, el hero, el empaque y el escaparate no son piezas sueltas.

Son realizaciones diferentes de una misma operación cognitiva:

```txt
hacer visible la razón para atender.
```

Por eso, dentro de ACCD, este modelo puede funcionar como una estructura transversal para diseñar contenidos y realizaciones en distintos dominios:

```txt
núcleo_conceptual
  → señal_de_entrada
    → reconocimiento_de_interés
      → consumo
        → persuasión
          → acción
```
