Sí: **el hook de un video corto puede entenderse como un equivalente estructural del titular**, pero con una diferencia importante: el titular opera principalmente como **señal textual estática**, mientras que el hook opera como **señal temporal-audiovisual**.

La analogía se puede ampliar así:

```txt
titular de periódico
  → permite seleccionar qué noticia leer

titular de anuncio
  → permite seleccionar qué oferta mirar

hook de video corto
  → permite decidir si vale la pena seguir viendo

thumbnail + título de YouTube
  → permite decidir si vale la pena hacer clic

asunto de email
  → permite decidir si vale la pena abrir

snippet de buscador
  → permite decidir si vale la pena entrar

hero de landing page
  → permite decidir si vale la pena seguir bajando

portada / empaque / escaparate
  → permite decidir si vale la pena acercarse
```

El núcleo común no es “titular”, sino algo más abstracto:

```txt
señal_de_entrada
  → revela o esconde interés
    → permite autoselección
      → filtra atención
        → habilita consumo posterior
```

---

# 1. Núcleo estructural de la analogía

Hopkins dice que nadie lee todo el periódico; cada persona usa titulares para seleccionar lo que quiere leer. Esa misma estructura aparece en muchos medios. El receptor se enfrenta a demasiadas posibilidades, por lo que necesita una señal rápida que le diga: “esto es para mí” o “esto no es para mí”.

En términos estructurales:

```yaml
mnode_id: MN_SENAL_DE_ENTRADA_COMO_FILTRO_DE_INTERES
tipo_de_unidad: nucleo_esencificado
familia_cognitiva: FAM-Idea
formulacion: >
  En cualquier medio saturado de opciones, existe una señal de entrada que permite
  al receptor decidir rápidamente si el contenido merece atención. Esa señal puede
  revelar o esconder el interés relevante, funcionando como filtro de entrada hacia
  el mensaje completo.
invariantes:
  - existe más contenido del que el receptor puede consumir
  - el receptor decide mediante señales iniciales
  - la señal inicial condensa una promesa, tema, tensión o beneficio
  - si la señal revela el interés correcto, habilita consumo posterior
  - si la señal oculta el interés correcto, bloquea incluso al prospecto relevante
  - si la señal engaña, puede obtener atención inicial pero deteriorar confianza o retención
```

Esto conecta bien con la literatura de **selective exposure**: las personas no se exponen pasivamente a todo, sino que eligen entre opciones según señales de contenido, contexto, afinidad, interés o utilidad percibida. Un estudio sobre newsletters de salud encontró que las características de los titulares influyen en qué artículos eligen abrir los lectores, y otro estudio sobre selección de noticias encontró que los usuarios tienden a seleccionar titulares valorados como más noticiosos frente a alternativas disponibles. ([PubMed][1])

La fórmula general sería:

```txt
ambiente_saturado
  → señal_de_entrada
    → evaluación_rápida
      → selección / descarte
        → consumo_del_contenido
```

---

# 2. El titular como “information scent”

Una forma académica muy útil de entender esto es la teoría de **information foraging** y el concepto de **information scent**. Pirolli y Card proponen que las personas buscan información tratando de maximizar valor y reducir esfuerzo; las señales perceptibles ayudan a decidir si seguir una ruta informativa. En búsquedas web, el “scent” puede venir de títulos, URL, snippets, estilo visual e imágenes asociadas. ([ACT-R][2])

Esto encaja perfectamente con Hopkins:

```txt
titular que revela interés
  → alto information scent

titular que oculta interés
  → bajo information scent

titular engañoso
  → falso information scent
```

Entonces, el titular no sólo “llama la atención”. Su función más importante es **hacer predecible el valor del contenido**.

```txt
buena señal de entrada:
  “esto trata de lo que te interesa”

mala señal de entrada:
  “no se entiende qué hay aquí”

señal engañosa:
  “parece que hay algo valioso, pero no corresponde”
```

En publicidad, esto es crítico porque la atención equivocada no sirve. El objetivo no es atraer a todos, sino atraer al prospecto correcto.

---

# 3. Hook de video corto como equivalente temporal del titular

En el documento adjunto sobre video corto, la estructura se formula como una **economía temporal-audiovisual de la atención**:

```txt
Mail order:
  cada línea debe pagar su espacio.

Video corto:
  cada segundo debe ganar el siguiente segundo.
```

Desde esta lógica, el hook es equivalente al titular porque cumple la misma función de entrada:

```txt
titular:
  decide si el lector entra al texto

hook:
  decide si el usuario sigue viendo
```

Pero el hook no es sólo una frase. Puede estar compuesto por:

```txt
primer frame
movimiento inicial
texto en pantalla
rostro
gesto
sonido
pregunta
tensión visual
promesa
contraste
sorpresa
situación incompleta
```

TikTok formula explícitamente una estructura `hook → body → close`: el hook capta atención mediante suspense, sorpresa o emoción; el body comunica el mensaje de marca; y el close ancla el anuncio con CTA. Google/YouTube propone el marco ABCD: Attention, Branding, Connection, Direction. Ambos confirman que, en video, la entrada del mensaje ya no es sólo un título, sino una unidad de captura audiovisual. ([TikTok For Business][3])

En mNode:

```yaml
mnode_id: MN_HOOK_COMO_TITULAR_TEMPORAL
tipo_de_unidad: equivalencia_estructural
familia_cognitiva: FAM-Idea
formulacion: >
  El hook de un video corto cumple una función equivalente al titular: revela una
  promesa, tensión o beneficio que permite al receptor decidir si concede más atención.
  A diferencia del titular impreso, el hook no es sólo textual; es una unidad temporal
  compuesta por imagen, sonido, movimiento, texto y ritmo.
estructura_interna:
  medio_impreso:
    unidad_de_entrada: titular
    decision: leer / no leer
  video_corto:
    unidad_de_entrada: hook
    decision: seguir viendo / deslizar / saltar
```

La diferencia fundamental:

```txt
titular = selector antes de leer
hook = selector mientras empieza el consumo
```

---

# 4. En YouTube: el titular se divide en título + thumbnail + primeros segundos

YouTube es especialmente interesante porque tiene una estructura compuesta. Antes de entrar al video, el usuario ve:

```txt
thumbnail
título
canal
duración
contexto de recomendación
```

Después de hacer clic, evalúa los primeros segundos.

Por eso el equivalente del titular en YouTube no es una sola pieza. Es un sistema:

```txt
thumbnail + título
  → filtro pre-click

primeros segundos
  → filtro post-click

retención inicial
  → confirmación o ruptura de la promesa
```

YouTube explica que los espectadores suelen ver primero el thumbnail y el título, y que esa información les da una idea del video y ayuda a decidir si quieren verlo. También afirma que 90% de los videos con mejor desempeño tienen thumbnails personalizados. ([Ayuda de Google][4])

Hay investigación empírica que respalda esta importancia. Un estudio de 16,215 “video covers” de YouTube encontró que los sentimientos expresados en títulos, thumbnails y captions influyen en las vistas; otro estudio examinó atributos visuales de thumbnails y su relación con atención y vistas, proponiendo guías para diseñar thumbnails que atraigan espectadores. ([ScienceDirect][5])

Modelo:

```yaml
mnode_id: DIS_MOLDE_YOUTUBE_TITULO_THUMBNAIL_HOOK
tipo_de_unidad: molde_selectivo_compuesto
familia_cognitiva: FAM-Diseño
formulacion: >
  En YouTube, la función del titular se distribuye entre thumbnail, título y apertura
  del video. El thumbnail atrae visualmente, el título formula la promesa o tema,
  y los primeros segundos confirman si la promesa era real.
estructura:
  thumbnail:
    funcion: capturar_atencion_visual
  titulo:
    funcion: formular_promesa_o_tema
  primeros_segundos:
    funcion: confirmar_promesa_y_sostener_retencion
  resultado:
    - click
    - retencion
    - satisfaccion_o_abandono
```

Aquí aparece una distinción muy importante:

```txt
título / thumbnail:
  generan clic

hook:
  justifica el clic
```

Si el título promete una cosa y el video empieza con otra, hay ruptura. El equivalente de un titular engañoso en periódico sería un thumbnail/título que consigue clic pero produce abandono.

---

# 5. En anuncios de video skippable: el hook compite contra el botón de saltar

En video advertising, la estructura de entrada se vuelve todavía más crítica cuando el usuario puede saltar el anuncio. Aquí el hook no sólo compite contra otros contenidos; compite contra una acción explícita de escape.

La investigación sobre pre-roll skippable estudia justamente por qué los consumidores no saltan anuncios cuando tienen la opción después de unos segundos. También hay literatura reciente sobre determinantes del skipping en pre-roll ads, lo que muestra que los primeros segundos son una zona decisiva para retener o perder atención. ([ResearchGate][6])

Google, en su investigación sobre los “first 5 seconds” de YouTube ads, señala una tensión interesante: mostrar la marca en los primeros cinco segundos puede aumentar recuerdo y awareness, pero también puede aumentar el skipping; por eso recomienda que, si se muestra logo temprano, esté conectado al producto o al mensaje, no sólo puesto como marca desnuda. ([Google Business][7])

Eso permite formular:

```yaml
mnode_id: MN_HOOK_CONTRA_SKIP
tipo_de_unidad: principio_de_retencion_temprana
familia_cognitiva: FAM-Idea
formulacion: >
  En video publicitario skippable, el hook funciona como defensa contra el abandono:
  debe dar una razón para no saltar antes de que el usuario ejerza su derecho de salida.
estructura_interna:
  amenaza:
    - skip
    - scroll
    - abandono
  respuesta:
    - promesa_temprana
    - tension
    - demostracion_inmediata
    - marca_funcional
    - beneficio_visible
```

Equivalencia:

```txt
titular débil:
  no se lee el anuncio

hook débil:
  se salta el video

thumbnail engañoso:
  hay clic, pero no retención

hook engañoso:
  hay atención inicial, pero abandono rápido
```

---

# 6. En email: el asunto funciona como titular de bandeja de entrada

El asunto del email es quizá el equivalente más directo al titular publicitario. En una bandeja de entrada, nadie lee todos los correos; se escanean asuntos y remitentes. El asunto revela o esconde interés.

```txt
bandeja_de_entrada
  → remitente + asunto + preheader
    → abrir / ignorar / borrar / marcar spam
```

La investigación sobre subject lines trata exactamente esta función. Un estudio de _Expert Systems with Applications_ propone modelos para medir la calidad de una línea de asunto según su potencial para promover la apertura del email. Otro estudio experimental encontró que subject lines personales, emocionales y cortos tuvieron mayores tasas de apertura que una línea de control. ([ScienceDirect][8])

mNode:

```yaml
mnode_id: MN_ASUNTO_EMAIL_COMO_TITULAR_DE_INBOX
tipo_de_unidad: equivalencia_estructural
familia_cognitiva: FAM-Idea
formulacion: >
  El asunto del email funciona como titular dentro de la bandeja de entrada:
  condensa una promesa o relevancia, permite al receptor seleccionar qué abrir,
  y puede revelar u ocultar el interés real del mensaje.
estructura:
  senales_de_entrada:
    - remitente
    - subject_line
    - preheader
  decision:
    - abrir
    - ignorar
    - borrar
    - marcar_spam
```

La diferencia con el titular clásico es que aquí también interviene la confianza del remitente:

```txt
titular de periódico:
  tema + interés

asunto de email:
  remitente + tema + urgencia + confianza
```

---

# 7. En buscadores: el titular se convierte en title tag + snippet

En buscadores, el equivalente estructural del titular es el resultado de búsqueda:

```txt
title
URL
snippet
rich result
imagen o icono
```

El usuario no entra a todos los resultados; escanea señales de relevancia. Aquí la idea de **information scent** es muy fuerte. Los resultados de búsqueda contienen señales textuales y visuales que permiten inferir si una página responderá la necesidad. Un estudio sobre SERPs señala que el scent puede provenir de texto en título, URL y snippets, además de señales visuales como estilo de texto o imágenes asociadas. ([City Research Online][9])

Modelo:

```yaml
mnode_id: MN_RESULTADO_BUSQUEDA_COMO_TITULAR_FUNCIONAL
tipo_de_unidad: equivalencia_estructural
familia_cognitiva: FAM-Idea
formulacion: >
  En buscadores, el resultado actúa como titular funcional: title, URL y snippet
  revelan o esconden la relevancia de la página ante una intención explícita de búsqueda.
estructura:
  consulta:
    funcion: expresa_intencion
  title:
    funcion: formula_respuesta_probable
  snippet:
    funcion: amplía_information_scent
  click:
    funcion: entrada_al_contenido
```

Aquí hay una diferencia importante con redes sociales:

```txt
buscador:
  el usuario ya declaró intención

feed social:
  el contenido debe despertar intención
```

Por eso el “titular” en búsqueda debe responder con claridad, mientras que el hook en feed muchas veces debe crear tensión o interés antes de que exista una intención explícita.

---

# 8. En landing pages: el hero section es el titular de la página

En una landing page, el equivalente del titular es el bloque inicial o **hero**:

```txt
headline
subheadline
imagen hero
CTA
prueba inicial
```

Su función:

```txt
confirmar que el usuario llegó al lugar correcto
revelar la promesa
reducir duda inicial
indicar siguiente paso
```

Aquí opera una estructura parecida a la del buscador: el usuario ya entró, pero todavía decide si seguir o abandonar.

```yaml
mnode_id: MN_HERO_LANDING_COMO_TITULAR_EXPANDIDO
tipo_de_unidad: equivalencia_estructural
familia_cognitiva: FAM-Diseño
formulacion: >
  El hero de una landing page funciona como titular expandido: confirma la promesa,
  orienta la lectura, revela el beneficio central y decide si el visitante seguirá
  desplazándose o abandonará.
estructura:
  headline:
    funcion: promesa_central
  subheadline:
    funcion: clarificacion
  visual:
    funcion: concretar_valor
  CTA:
    funcion: accion_inicial
```

Si un anuncio promete una cosa y la landing inicia con otra, ocurre el equivalente moderno de un titular engañoso:

```txt
mismatch
  → pérdida_de_confianza
    → abandono
```

---

# 9. En podcasts y streaming: título + portada + primeros segundos

En contenidos de audio, la señal de entrada se divide entre:

```txt
título
cover art
descripción
voz inicial
primeros segundos
```

El equivalente estructural es similar a YouTube, pero con mayor peso del audio una vez que inicia el contenido.

```yaml
mnode_id: MN_PODCAST_TITULO_PORTADA_OPENING
tipo_de_unidad: equivalencia_estructural
familia_cognitiva: FAM-Diseño
formulacion: >
  En podcast o audio bajo demanda, el título, portada y descripción funcionan como
  filtro pre-escucha, mientras que los primeros segundos de voz funcionan como hook
  auditivo que confirma si el episodio merece continuidad.
estructura:
  pre_entrada:
    - titulo
    - portada
    - descripcion
  post_entrada:
    - voz_inicial
    - promesa_del_episodio
    - ritmo_de_inicio
```

Aquí el hook se vuelve auditivo:

```txt
¿qué voy a obtener si sigo escuchando?
¿quién habla?
¿cuánto tarda en prometer valor?
```

---

# 10. En tiendas físicas: escaparate, empaque y señalización como titulares espaciales

Si ampliamos más la analogía, también hay equivalentes físicos. En una tienda o calle comercial, las personas no examinan todo. Se orientan por señales:

```txt
escaparate
letrero
fachada
categoría
empaque
precio visible
sección de tienda
display
```

Estas señales cumplen la misma operación:

```txt
revelar o esconder interés
```

Un empaque funciona como titular cuando dice visualmente:

```txt
qué es
para quién es
qué beneficio promete
qué categoría ocupa
por qué merece ser tomado del anaquel
```

mNode:

```yaml
mnode_id: MN_ESCAPARATE_EMPAQUE_COMO_TITULAR_ESPACIAL
tipo_de_unidad: equivalencia_estructural
familia_cognitiva: FAM-Idea
formulacion: >
  En entornos físicos, escaparate, empaque y señalización cumplen una función
  equivalente al titular: revelan categoría, beneficio o identidad de producto
  para que el comprador decida si se acerca, toma, compara o ignora.
estructura:
  entorno:
    - calle
    - tienda
    - anaquel
    - plaza
  senales:
    - fachada
    - display
    - empaque
    - color
    - precio
    - categoría
  decision:
    - acercarse
    - entrar
    - tomar
    - comparar
    - ignorar
```

---

# 11. El titular como operación, no como formato

La conclusión más importante es que “titular” no debe pensarse sólo como una línea de texto. Debe pensarse como una **operación cognitiva de entrada**.

```yaml
operacion_titular:
  nucleo: revelar_interes
  funcion: seleccionar_receptor
  mecanismo: señal_inicial
  resultado: entrada_o_descarte
```

Cada medio adapta esa operación:

| Medio           | Equivalente del titular                | Forma de revelar interés                 | Decisión que produce        |
| --------------- | -------------------------------------- | ---------------------------------------- | --------------------------- |
| Periódico       | Titular de noticia                     | Tema / relevancia / actualidad           | Leer o saltar               |
| Anuncio impreso | Headline                               | Beneficio / problema / oferta            | Leer el anuncio o ignorarlo |
| Video corto     | Hook                                   | Tensión / promesa / sorpresa / beneficio | Seguir viendo o deslizar    |
| YouTube         | Thumbnail + título + primeros segundos | Promesa visual y verbal                  | Clic + retención            |
| Email           | Subject line + preheader               | Relevancia / urgencia / remitente        | Abrir o ignorar             |
| Buscador        | Title + snippet                        | Relevancia frente a intención            | Clic o descarte             |
| Landing page    | Hero headline + visual + CTA           | Confirmación de promesa                  | Seguir o abandonar          |
| Podcast         | Título + portada + apertura            | Tema + voz + promesa auditiva            | Escuchar o salir            |
| Tienda física   | Escaparate / empaque / señalética      | Categoría / deseo / utilidad             | Acercarse o ignorar         |

---

# 12. Titular, hook y señal de entrada: similitudes y diferencias

## Similitudes

```txt
1. Operan antes del consumo completo.
2. Reducen incertidumbre.
3. Permiten autoselección.
4. Revelan o esconden interés.
5. Pueden atraer atención útil o inútil.
6. Pueden generar confianza o decepción.
7. Determinan si el contenido tiene oportunidad de actuar.
```

## Diferencias

```txt
Titular impreso:
  estático
  textual
  escaneable
  permite volver atrás

Hook de video:
  temporal
  audiovisual
  secuencial
  irreversible en el flujo normal
  debe sostener continuidad

Thumbnail/título:
  pre-click
  visual + textual
  compite en una grilla o feed

Asunto de email:
  textual
  depende mucho del remitente
  compite en una bandeja saturada

Snippet de búsqueda:
  textual-contextual
  responde a intención explícita

Escaparate/empaque:
  espacial
  visual-material
  compite en entorno físico
```

---

# 13. Cómo usar esto dentro de ACCD

Para el sistema ACCD, yo lo modelaría como una fábrica de adaptaciones contextuales:

```yaml
mnode_id: FAB_SENAL_DE_ENTRADA_ADAPTACIONES_CONTEXTUALES
tipo_de_unidad: fabrica_de_adaptaciones_contextuales
familia_cognitiva: FAM-Diseño
formulacion: >
  La función estructural del titular —revelar interés y seleccionar atención—
  se adapta a distintos medios mediante señales de entrada específicas:
  titular, hook, thumbnail, asunto, snippet, hero, portada, empaque o escaparate.
nucleo_preservado:
  - revelar_interes
  - permitir_autoseleccion
  - filtrar_atencion
  - habilitar_consumo_posterior
  - evitar_atencion_inutil
adaptaciones:
  titular_periodistico:
    medio: periódico
    señal: headline
    decision: leer_noticia
  titular_publicitario:
    medio: anuncio_impreso
    señal: headline
    decision: leer_anuncio
  hook_video_corto:
    medio: video_corto
    señal: primeros_segundos
    decision: seguir_viendo
  thumbnail_titulo:
    medio: YouTube
    señal: thumbnail + title
    decision: hacer_click
  subject_line:
    medio: email
    señal: asunto + preheader
    decision: abrir
  search_snippet:
    medio: buscador
    señal: title + snippet + URL
    decision: click
  hero_landing:
    medio: landing_page
    señal: headline + visual + CTA
    decision: seguir_o_abandonar
  empaque_escaparate:
    medio: físico
    señal: fachada / empaque / display
    decision: acercarse_o_tomar_producto
```

---

# 14. La frase nuclear

La frase fuerte sería:

```txt
Todo medio necesita un titular,
pero no todo titular tiene forma de frase.
```

O, de forma más técnica:

```txt
Toda pieza comunicativa necesita una señal de entrada
que revele al receptor por qué debería conceder atención.
```

Y, conectando directamente con Hopkins:

```txt
Si el titular de periódico permite elegir qué noticia leer,
y el titular publicitario permite elegir qué anuncio leer,
el hook de video permite elegir si vale la pena seguir mirando.

En todos los casos, la función es la misma:
revelar el interés antes de exigir consumo completo.
```

---

# 15. Modelo final

```yaml
modelo_equivalencia_titular_hook:
  nombre: "Señales de entrada y filtros de interés"
  tesis: >
    La analogía de Hopkins entre titulares periodísticos y titulares publicitarios
    puede generalizarse a otros medios. En todo entorno saturado de información,
    existe una señal de entrada que permite al receptor decidir si concede atención.
    Esa señal puede ser textual, visual, audiovisual, auditiva, espacial o algorítmica,
    pero su núcleo estructural es el mismo: revelar interés, filtrar audiencia y
    habilitar consumo posterior.

  formula:
    ambiente_saturado:
    señal_de_entrada:
    evaluación_rapida:
    autoseleccion:
    consumo_o_descarte:

  equivalencia_minima:
    headline:
      funcion: revelar_interes_para_leer
    hook:
      funcion: revelar_interes_para_continuar
    thumbnail_title:
      funcion: revelar_interes_para_click
    subject_line:
      funcion: revelar_interes_para_abrir
    search_snippet:
      funcion: revelar_interes_para_entrar
    hero:
      funcion: revelar_interes_para_permanecer
    empaque_escaparate:
      funcion: revelar_interes_para_acercarse
```

La utilidad para nuestro estudio es clara: el capítulo 5 no trata solamente de “cómo escribir titulares”; trata de una operación más general de la publicidad y de la comunicación:

```txt
antes de persuadir,
hay que ser seleccionado.
```

Y esa selección depende de una señal inicial que puede revelar o esconder el interés correcto.

[1]: https://pubmed.ncbi.nlm.nih.gov/28255280/?utm_source=chatgpt.com "Selective Exposure to Health Information: The Role ... - PubMed"
[2]: https://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/280uir-1999-05-pirolli.pdf?utm_source=chatgpt.com "Information Foraging"
[3]: https://ads.tiktok.com/business/en/creative-codes?utm_source=chatgpt.com "TikTok Creative Codes: 6 Principles for Creating Effective Ads"
[4]: https://support.google.com/youtube/answer/12340300?hl=en&utm_source=chatgpt.com "Thumbnail & title tips - YouTube Help"
[5]: https://www.sciencedirect.com/science/article/abs/pii/S0148296324003539?utm_source=chatgpt.com "Clicks for money: Predicting video views through a ..."
[6]: https://www.researchgate.net/publication/317666403_Understanding_Why_Consumers_Don%27t_Skip_Pre-Roll_Video_Ads?utm_source=chatgpt.com "Understanding Why Consumers Don't Skip Pre-Roll Video ..."
[7]: https://www.thinkwithgoogle.com/_qs/documents/953/creating-youtube-ads-that-break-through-in-a-skippable-world.pdf?utm_source=chatgpt.com "The First 5 Seconds: Creating YouTube Ads That Break ..."
[8]: https://www.sciencedirect.com/science/article/pii/S0957417422012040?utm_source=chatgpt.com "Using the subject line to anticipate the open rate"
[9]: https://openaccess.city.ac.uk/id/eprint/12416/1/loumakis_CIKM2011.pdf?utm_source=chatgpt.com "effects of image information scent in search engine results ..."
