# Modelo de Publicidad por Curiosidad

## 0. Propósito del documento

Este documento formula un **modelo reutilizable de publicidad por curiosidad** a partir del mecanismo psicológico trabajado en el capítulo 6 de _Scientific Advertising_:

```yaml
nodo_base:
  - MN_CURIOSIDAD_INCENTIVO_FUERTE
  - EJ_PUFFED_WHEAT_RICE_CURIOSIDAD
```

El objetivo no es sólo describir la curiosidad como recurso creativo, sino convertirla en un **patrón psicológico transcontextual** que pueda aplicarse a distintos contextos de distribución: anuncios impresos, publicidad exterior, televisión, video corto, redes sociales, email, landing pages, tiendas físicas, campañas teaser, campañas virales y sistemas transmedia.

---

## 1. Formulación base

```yaml
mnode_id: PSY_CURIOSIDAD_COMO_PATRON_TRANSCONTEXTUAL
tipo_de_unidad: mecanismo_psicologico_transcontextual
familia_cognitiva: FAM-Idea
formulacion: >
  La curiosidad es un patrón psicológico transcontextual que transforma una señal parcial, sorprendente, contradictoria o incompleta en deseo de resolución. En publicidad, permite convertir un producto, marca, mensaje o caso en objeto de exploración, siempre que la brecha de información sea manejable, relevante y se resuelva de forma satisfactoria.
```

La estructura mínima es:

```txt
señal_parcial_o_sorprendente
  → brecha_de_información
    → curiosidad
      → búsqueda_de_resolución
        → atención / lectura / clic / retención / conversación
          → recuerdo / evaluación / acción
```

---

## 2. Fundamento psicológico

La teoría más útil para conectar Hopkins con psicología contemporánea es la **information gap theory** de George Loewenstein. Según esta perspectiva, la curiosidad aparece cuando una persona percibe una brecha entre lo que sabe y lo que desea saber. Esa brecha genera una tensión cognitiva que motiva la búsqueda de información.

Referencia base:

- George Loewenstein, **“The Psychology of Curiosity: A Review and Reinterpretation”**. Carnegie Mellon University.  
  https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf

En publicidad, esta lógica se traduce así:

```txt
información_total
  → no hay curiosidad

información_casi_nula
  → confusión o indiferencia

información_parcial_relevante
  → curiosidad
```

La curiosidad publicitaria funciona mejor cuando el receptor recibe **suficiente información para interesarse**, pero no tanta como para que la brecha quede cerrada de inmediato.

---

## 3. Curiosidad en campañas teaser

La literatura sobre **teaser advertising** confirma que la publicidad puede usar misterio, secuencias parciales y revelaciones progresivas para activar curiosidad. El teaser opera con una lógica simple: capturar atención antes de contar toda la historia de la marca o del producto.

Referencia:

- Nesrine Abboud, Reham Gamal El Deen, Marwa Abdel Hakim Abdel Azim Abdel Aziz, **“The effect of creating curiosity theory (information gap) in teaser advertising campaigns on recipient behavior”**. DOAJ.  
  https://doaj.org/article/80402f9726d24bd489e00a216d610b77

La estructura de teaser es:

```txt
pista_inicial
  → especulación
    → conversación
      → revelación
        → relectura_de_la_campaña
```

Pero la curiosidad no debe confundirse con ocultamiento vacío. Una campaña puede abrir una brecha, pero debe resolverla de modo que el receptor sienta que la atención concedida tuvo sentido.

---

## 4. Modelo acción-reacción

```yaml
mnode_id: DIS_MOLDE_CURIOSIDAD_ACCION_REACCION
familia_cognitiva: FAM-Método
formulacion: >
  La curiosidad opera como una relación estímulo-mecanismo-reacción: una señal parcial, sorprendente o incompleta activa una brecha de información; esa brecha genera deseo de resolución; el receptor concede atención para cerrar la brecha.

estructura:
  estimulo:
    - hecho_sorprendente
    - pregunta
    - dato_incompleto
    - promesa_de_revelacion
    - contradiccion
    - ausencia
    - alteracion_de_identidad
    - proceso_oculto
    - disonancia_tonal
    - sistema_de_pistas

  mecanismo_psicologico:
    - information_gap
    - tension_cognitiva
    - deseo_de_cierre
    - busqueda_de_explicacion

  reaccion_probable:
    - mirar
    - leer
    - hacer_click
    - seguir_viendo
    - pedir_informacion
    - comentar
    - buscar
    - recordar
```

La reacción no es automática. Es probabilística:

```txt
si la brecha es clara y relevante
  → aumenta la probabilidad de atención

si la brecha se resuelve satisfactoriamente
  → aumenta la probabilidad de evaluación positiva

si la brecha engaña o no se resuelve
  → aumenta la probabilidad de frustración o desconfianza
```

---

## 5. Fórmula compacta

```txt
curiosidad_publicitaria
  = pista_relevante
  + brecha_de_información_moderada
  + promesa_de_resolución
  + conexión_real_con_producto_o_marca
```

Frase nuclear:

```txt
La curiosidad no consiste en ocultar información; consiste en revelar lo suficiente para que el receptor quiera completar lo que falta.
```

---

## 6. Tipos de curiosidad publicitaria

```yaml
tipos_de_curiosidad_publicitaria:
  hecho_curioso_real:
    descripcion: >
      Se descubre una propiedad real del producto y se formula como fenómeno sorprendente.
    ejemplo_base: Quaker Puffed Wheat / Puffed Rice

  contradiccion_controlada:
    descripcion: >
      El anuncio parece decir algo negativo o contrario al producto, pero la resolución revela una ventaja.
    ejemplo_base: Volkswagen Lemon

  curiosidad_de_identidad:
    descripcion: >
      El anuncio provoca al receptor a preguntarse si pertenece o no al grupo implícito.
    ejemplo_base: The Economist

  historia_empezada_a_la_mitad:
    descripcion: >
      La campaña muestra una consecuencia emocional o narrativa sin explicar aún la causa.
    ejemplo_base: I Hate Steven Singer

  curiosidad_narrativa:
    descripcion: >
      El producto aparece como resolución de una historia enigmática.
    ejemplo_base: Apple 1984

  ambiguedad_realidad_ficcion:
    descripcion: >
      La campaña hace que el público investigue si lo que ve pertenece al mundo real o a una ficción.
    ejemplo_base: The Blair Witch Project

  ausencia_como_senal:
    descripcion: >
      Se retira una presencia esperada para crear una búsqueda de explicación.
    ejemplo_base: Taco Bell Blackout

  alteracion_minima_de_identidad:
    descripcion: >
      Se cambia un elemento pequeño de una marca conocida para activar especulación.
    ejemplo_base: IHOb

  sistema_de_pistas:
    descripcion: >
      Se dispersan piezas extrañas que sólo se entienden al descubrir el patrón.
    ejemplo_base: Did You Mean Mailchimp?

  incongruencia_audiovisual:
    descripcion: >
      La curiosidad se sostiene segundo a segundo mediante cambios inesperados de escena, tono, personaje o ritmo.
    ejemplo_base: Old Spice

  disonancia_tonal:
    descripcion: >
      Se presenta un tema serio con una forma inesperadamente lúdica, tierna o absurda.
    ejemplo_base: Dumb Ways to Die
```

---

# 7. Ejemplos concretos por contexto de distribución

---

## 7.1. Quaker Puffed Wheat / Puffed Rice — “Food Shot From Guns”

```yaml
campaña: Quaker Puffed Wheat / Puffed Rice
contexto_de_distribucion:
  - prensa
  - anuncios impresos
  - demostraciones de producto
  - activaciones físicas
señal_de_curiosidad:
  - "Food shot from guns"
  - granos inflados 8 veces
  - explosiones de vapor en cada grano
brecha_de_informacion:
  - ¿Cómo puede un alimento ser disparado desde cañones?
  - ¿Qué ocurre con el grano?
  - ¿Por qué ese proceso lo hace especial?
mecanismo:
  - hecho_curioso_real
  - proceso_oculto_revelado
  - sorpresa técnica
resolucion:
  - el cereal se fabrica mediante expansión por presión y vapor
leccion_transferible: >
  La curiosidad funciona con mucha fuerza cuando se encuentra una propiedad real
  del producto y se formula como hecho sorprendente.
```

Este caso es el punto de partida del capítulo. Hopkins no vende el cereal como algo ordinario; vende su proceso como espectáculo. El producto se vuelve interesante porque el anuncio revela un fenómeno oculto.

Referencias:

- Smithsonian Lemelson Center, **“Alexander Anderson and the Cereal Shot from Guns”**.  
  https://invention.si.edu/invention-stories/alexander-anderson-and-cereal-shot-guns
- The New Yorker, **“Puffed: The Magic of Cereal”**.  
  https://www.newyorker.com/tech/annals-of-technology/puffed-the-magic-of-cereal

Estructura:

```txt
producto_ordinario
  → proceso_oculto_sorprendente
    → curiosidad
      → memorabilidad
        → interés_comercial
```

---

## 7.2. Volkswagen Beetle — “Lemon”

```yaml
campaña: Volkswagen Beetle — Lemon
contexto_de_distribucion:
  - anuncio impreso
  - revista
  - prensa
señal_de_curiosidad:
  - titular negativo aplicado al propio producto: "Lemon"
brecha_de_informacion:
  - ¿Por qué una marca llamaría "limón" a su propio auto?
  - ¿Está confesando un defecto?
  - ¿Cuál es el giro?
mecanismo:
  - contradiccion_controlada
  - autonegacion_aparente
  - tensión entre expectativa y explicación
resolucion:
  - el auto fue rechazado por un control de calidad extremadamente exigente
leccion_transferible: >
  La curiosidad puede surgir cuando el anuncio parece ir contra el producto, pero
  la explicación convierte la contradicción en confianza.
```

Referencias:

- Wikipedia, **“Volkswagen advertising”** — incluye referencia a la campaña “Lemon” y su legado.  
  https://en.wikipedia.org/wiki/Volkswagen_advertising
- Adweek, **“How Volkswagen Just Squandered 55 Years of Great Advertising”** — menciona “We pluck the lemons; you get the plums.”  
  https://www.adweek.com/brand-marketing/how-volkswagen-just-squandered-55-years-great-advertising-167239/
- ResearchGate, imagen/referencia del anuncio **“Lemon advertising for the Volkswagen Beetle 1960, by Doyle Dane Bernbach”**.  
  https://www.researchgate.net/figure/Lemon-advertising-for-the-Volkswagen-Beetle-1960-by-Doyle-Dane-Bernbach_fig5_306040740

Estructura:

```txt
titular_contraintuitivo
  → tensión
    → lectura_del_copy
      → revelación
        → confianza
```

---

## 7.3. The Economist — “I never read The Economist”

```yaml
campaña: The Economist — I never read The Economist
contexto_de_distribucion:
  - publicidad exterior
  - posters
  - print
señal_de_curiosidad:
  - frase negativa provocadora
brecha_de_informacion:
  - ¿Quién dice eso?
  - ¿Por qué una revista usaría una frase contra sí misma?
  - ¿Qué tipo de persona no la lee?
mecanismo:
  - curiosidad_de_identidad
  - inferencia_de_estatus
  - autoselección aspiracional
resolucion:
  - la frase define indirectamente al lector deseado al mostrar quién no pertenece
leccion_transferible: >
  La curiosidad puede usarse para segmentar por identidad: el receptor quiere
  descubrir si pertenece al grupo que entiende la pieza.
```

Referencias:

- D&AD Awards Archive, **“I Never Read The Economist”**.  
  https://www.dandad.org/work/d-ad-awards-archive/i-never-read-the-economist
- Creative Review, **“The Economist’s latest campaign reacts to trying times”** — menciona la frase clásica de David Abbott.  
  https://www.creativereview.co.uk/the-economists-latest-campaign-reacts-to-trying-times/
- Campaign Live, **“Best ads in 50 years: The Economist poster that defined a brand and an agency”**.  
  https://www.campaignlive.co.uk/article/best-ads-50-years-economist-poster-defined-brand-agency/1519024

Estructura:

```txt
frase_negativa
  → pregunta_implícita
    → inferencia_de_estatus
      → autoselección
```

---

## 7.4. Steven Singer Jewelers — “I Hate Steven Singer”

```yaml
campaña: I Hate Steven Singer
contexto_de_distribucion:
  - billboards
  - radio
  - web
  - marca completa
señal_de_curiosidad:
  - afirmación emocional sin contexto: "I Hate Steven Singer"
brecha_de_informacion:
  - ¿Quién es Steven Singer?
  - ¿Por qué alguien lo odia?
  - ¿Por qué él mismo pagaría por ese mensaje?
mecanismo:
  - historia_empezada_a_la_mitad
  - consecuencia emocional sin causa explicada
resolucion:
  - la marca cuenta la historia de un cliente que culpa a Steven Singer por las consecuencias de regalar joyería
leccion_transferible: >
  La curiosidad puede nacer de una historia empezada a la mitad: se muestra una
  emoción intensa y el receptor quiere conocer la causa.
```

Referencias:

- Steven Singer Jewelers, **“History”**.  
  https://www.ihatestevensinger.com/pages/history
- Braithwaite Communications, **“The Marketing Legend Behind Those ‘I Hate Steven Singer’ Billboards”**.  
  https://gobraithwaite.com/thinking/thinking-the-marketing-legend-behind-those-i-hate-steven-singer-billboards/
- Philadelphia Magazine, **“Steven Singer Loves the Haters”**.  
  https://www.phillymag.com/news/2025/02/15/steven-singer-jeweler/

Estructura:

```txt
opinión_fuerte_sin_contexto
  → misterio
    → búsqueda
      → descubrimiento_de_marca
```

---

## 7.5. Apple Macintosh — “1984”

```yaml
campaña: Apple Macintosh — 1984
contexto_de_distribucion:
  - televisión
  - Super Bowl
señal_de_curiosidad:
  - narrativa cinematográfica distópica sin demostración directa del producto
brecha_de_informacion:
  - ¿Qué se está anunciando?
  - ¿Quién es el enemigo?
  - ¿Qué significa la escena?
  - ¿Qué va a pasar al final?
mecanismo:
  - curiosidad_narrativa
  - tensión simbólica
  - revelación tardía de marca
resolucion:
  - Macintosh aparece como símbolo de liberación frente al conformismo
leccion_transferible: >
  En televisión, la curiosidad puede operar como relato: el producto no aparece
  primero, sino como resolución simbólica de una tensión narrativa.
```

Referencias:

- Smithsonian Lemelson Center, **“Remembering Apple’s 1984 Super Bowl Ad”**.  
  https://invention.si.edu/invention-stories/remembering-apples-1984-super-bowl-ad
- Wired, **“Jan. 22, 1984: Dawn of the Mac”**.  
  https://www.wired.com/2007/01/jan-22-1984-dawn-of-the-mac
- Wikipedia, **“1984 (advertisement)”** — útil para datos de producción, agencia, director y emisión.  
  https://en.wikipedia.org/wiki/1984_(advertisement)

Estructura:

```txt
escena_extraña
  → tensión_narrativa
    → expectativa
      → revelación_de_marca
        → posicionamiento
```

---

## 7.6. The Blair Witch Project — mito, web y viralidad

```yaml
campaña: The Blair Witch Project
contexto_de_distribucion:
  - web
  - foros
  - cine
  - boca a boca
  - PR
señal_de_curiosidad:
  - ambigüedad entre ficción y realidad
  - documentos falsos
  - reportes policiales simulados
  - missing posters
brecha_de_informacion:
  - ¿Esto ocurrió realmente?
  - ¿Quiénes son los desaparecidos?
  - ¿Qué es la Bruja de Blair?
mecanismo:
  - ambiguedad_realidad_ficcion
  - investigación colectiva
  - mito transmedia
resolucion:
  - la campaña alimenta el universo narrativo de la película y vuelve al público investigador
leccion_transferible: >
  La curiosidad puede convertirse en investigación colectiva cuando el público siente
  que debe reconstruir una verdad oculta.
```

Referencias:

- Wikipedia, **“The Blair Witch Project — Marketing”**.  
  https://en.wikipedia.org/wiki/The_Blair_Witch_Project#Marketing
- Mainstreethost, **“How The Blair Witch Project Revolutionized Marketing”**.  
  https://www.mainstreethost.com/blog/how-the-blair-witch-project-revolutionized-marketing/
- People, **“True Story Behind The Blair Witch Project”**.  
  https://people.com/true-story-behind-the-blair-witch-project-8685471

Estructura:

```txt
ficción_presentada_como_documento
  → duda
    → búsqueda_colectiva
      → conversación
        → viralidad
```

---

## 7.7. Taco Bell — Social Media Blackout

```yaml
campaña: Taco Bell Blackout
contexto_de_distribucion:
  - redes sociales
  - app móvil
  - web
  - TV complementaria
señal_de_curiosidad:
  - ausencia deliberada
  - apagón de canales
  - mensaje mínimo: #onlyintheapp
brecha_de_informacion:
  - ¿Por qué desapareció Taco Bell de redes?
  - ¿Dónde está ahora?
  - ¿Qué significa que sólo esté en la app?
mecanismo:
  - ausencia_como_senal
  - interrupción de expectativa
  - migración forzada de atención
resolucion:
  - la marca dirige la atención hacia la nueva app
leccion_transferible: >
  La curiosidad también puede producirse retirando señales habituales. La ausencia
  se vuelve señal.
```

Referencias:

- The One Club, **“Taco Bell Blackout”**.  
  https://www.oneclub.org/awards/theoneshow/-award/22979/taco-bell-blackout/
- Marketing Dive, **“Taco Bell’s social media blackout worked”**.  
  https://www.marketingdive.com/news/taco-bells-social-media-blackout-worked/327201/
- Adweek, **“Taco Bell Explains Its Social Media Blackout…”**.  
  https://www.adweek.com/performance-marketing/taco-bell-explains-its-social-media-blackout-and-how-it-lit-mobile-orders-within-hours-161094/

Estructura:

```txt
canales_apagados
  → interrupción_de_expectativa
    → búsqueda_de_explicación
      → migración_a_app
```

---

## 7.8. IHOP → IHOb

```yaml
campaña: IHOP / IHOb
contexto_de_distribucion:
  - social media
  - PR
  - TV
  - digital
señal_de_curiosidad:
  - cambio parcial de nombre
  - una sola letra modificada
brecha_de_informacion:
  - ¿Qué significa la “b”?
  - ¿La marca realmente cambió?
  - ¿Por qué una casa de pancakes hablaría de burgers?
mecanismo:
  - alteracion_minima_de_identidad
  - especulación colectiva
  - disonancia de marca
resolucion:
  - la “b” significaba burgers
leccion_transferible: >
  Una alteración mínima en una identidad conocida puede abrir una brecha grande
  de curiosidad y conversación.
```

Referencias:

- Adweek, **“Burger Sales Quadrupled After IHOP Became IHOB”**.  
  https://www.adweek.com/brand-marketing/burger-sales-quadrupled-after-ihop-became-ihob/
- ARF David Ogilvy Awards Case Summary, **IHOb / International House**.  
  https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Ogilvy%20Award%20Case%20Studies/2019%20ARF%20David%20Ogilvy%20Award%20CS/ihob-international-house.pdf
- Droga5, **IHOb case / work**.  
  https://droga5.com/work/ihob/

Estructura:

```txt
marca_familiar
  → cambio_pequeño_pero_visible
    → especulación
      → conversación
        → revelación_de_producto
```

---

## 7.9. Mailchimp — “Did You Mean Mailchimp?”

```yaml
campaña: Did You Mean Mailchimp?
contexto_de_distribucion:
  - podcast
  - búsqueda
  - videos
  - música
  - micrositios
  - cultura digital
  - social media
señal_de_curiosidad:
  - nombres raros parecidos a Mailchimp
  - errores fonéticos convertidos en campaña
  - piezas aparentemente inconexas
brecha_de_informacion:
  - ¿Qué es MailShrimp?
  - ¿Qué es JailBlimp?
  - ¿Por qué todo esto suena a Mailchimp?
mecanismo:
  - sistema_de_pistas
  - rareza fonética
  - búsqueda inducida
resolucion:
  - los nombres conducen al reconocimiento de Mailchimp
leccion_transferible: >
  La curiosidad puede construirse como sistema de pistas dispersas: piezas raras
  que parecen inconexas hasta que el receptor descubre el patrón.
```

Referencias:

- Droga5, **“Did You Mean Mailchimp?”**.  
  https://droga5.com/work/mailchimp/
- The One Club, **“Did You Mean Mailchimp?”**.  
  https://www.oneclub.org/awards/theoneshow/-award/29669/did-you-mean-mailchimpa/
- Columbia Digital Storytelling Lab, **“Did You Mean Mailchimp?”**.  
  https://digitalstorytellinglab.com/breakthroughs/did-you-mean-mailchimp

Estructura:

```txt
variaciones_extrañas
  → reconocimiento_fonético
    → búsqueda
      → descubrimiento_de_marca
```

---

## 7.10. Old Spice — “The Man Your Man Could Smell Like”

```yaml
campaña: Old Spice — The Man Your Man Could Smell Like
contexto_de_distribucion:
  - TV
  - YouTube
  - social media
  - respuestas personalizadas
señal_de_curiosidad:
  - absurdo rápido
  - cambios imposibles en una sola toma
  - personaje que interpela directamente
brecha_de_informacion:
  - ¿Qué va a pasar en el siguiente segundo?
  - ¿Cómo cambia tan rápido la escena?
  - ¿Por qué este personaje habla así?
mecanismo:
  - incongruencia_audiovisual
  - sorpresa acumulativa
  - expectativa de próximo cambio
resolucion:
  - el anuncio convierte el producto en parte de una fantasía absurda y memorable
leccion_transferible: >
  En video, la curiosidad puede sostenerse segundo a segundo mediante cambios
  inesperados, no sólo mediante una pregunta inicial.
```

Referencias:

- Wieden+Kennedy, **“Old Spice: Smell Like A Man, Man”**.  
  https://www.wk.com/work/old-spice-smell-like-a-man-man/
- D&AD, **“Case Study: Old Spice Response Campaign”**.  
  https://www.dandad.org/insights/awards/old-spice-case-study-insights
- Effie Awards, **“The Man Your Man Could Smell Like” case PDF**.  
  https://apaceffie.com/docs/default-source/resource-library/oldspice_case_pdf.pdf

Estructura:

```txt
incongruencia
  → sorpresa
    → expectativa_del_siguiente_cambio
      → retención
        → conversación
```

---

## 7.11. Dumb Ways to Die

```yaml
campaña: Dumb Ways to Die
contexto_de_distribucion:
  - video musical
  - YouTube
  - social media
  - app / game
  - posters
  - PSA / seguridad pública
señal_de_curiosidad:
  - título extraño
  - tono infantil aplicado a muertes absurdas
  - canción pegadiza sobre un tema grave
brecha_de_informacion:
  - ¿Qué son “formas tontas de morir”?
  - ¿Por qué una campaña de seguridad suena como canción pop?
  - ¿Cómo conecta esto con trenes?
mecanismo:
  - disonancia_tonal
  - contraste entre forma lúdica y tema mortal
  - atención por rareza afectiva
resolucion:
  - el mensaje final conecta las muertes absurdas con seguridad ferroviaria
leccion_transferible: >
  La curiosidad puede nacer de una disonancia tonal: un tema serio se presenta
  con una forma inesperada para activar atención.
```

Referencias:

- The Guardian, **“Cannes Lions: Dumb Ways to Die scoops top award”**.  
  https://www.theguardian.com/media/2013/jun/22/cannes-lions-advertising-awards
- McCann Australia, **“Dumb Ways to Die — Metro Trains”**.  
  https://mccann.com.au/work/dumb-ways-to-die/
- ResearchGate, **“Fun Ways to Engage with Rail Safety Through the Dumb Ways to Die Social Marketing Campaign”**.  
  https://www.researchgate.net/publication/333344586_Fun_Ways_to_Engage_with_Rail_Safety_Through_the_Dumb_Ways_to_Die_Social_Marketing_Campaign

Estructura:

```txt
tema_serio
  → tratamiento_lúdico
    → sorpresa
      → atención
        → mensaje_de_seguridad
```

---

# 8. Matriz comparativa de casos

| Caso                 | Contexto                        | Tipo de curiosidad          | Brecha creada                         | Resolución                |
| -------------------- | ------------------------------- | --------------------------- | ------------------------------------- | ------------------------- |
| Quaker Puffed        | Impreso / producto / activación | Hecho curioso real          | ¿Alimento disparado desde cañones?    | Proceso de puffing        |
| VW “Lemon”           | Print                           | Contradicción controlada    | ¿Por qué insultan su auto?            | Control de calidad        |
| The Economist        | OOH / print                     | Identidad / estatus         | ¿Quién no lee esto?                   | Segmentación aspiracional |
| I Hate Steven Singer | OOH / radio / web               | Historia incompleta         | ¿Por qué lo odian?                    | Relato de marca           |
| Apple “1984”         | TV / Super Bowl                 | Narrativa enigmática        | ¿Qué se anuncia?                      | Macintosh como liberación |
| Blair Witch          | Web / cine / PR                 | Ambigüedad realidad-ficción | ¿Es real?                             | Mito transmedia           |
| Taco Bell Blackout   | Social / app / web              | Ausencia                    | ¿Por qué desapareció?                 | La app como destino       |
| IHOb                 | Social / PR                     | Cambio parcial de identidad | ¿Qué significa la b?                  | Burgers                   |
| Mailchimp            | Podcast / búsqueda / transmedia | Sistema de pistas           | ¿Qué son esos nombres?                | Mailchimp                 |
| Old Spice            | TV / digital / social           | Incongruencia audiovisual   | ¿Qué pasará ahora?                    | Marca/personaje           |
| Dumb Ways to Die     | Video / social / PSA            | Disonancia tonal            | ¿Por qué esta canción habla de morir? | Seguridad ferroviaria     |

---

# 9. Aplicación por contextos de distribución

## 9.1. Anuncio impreso

```yaml
contexto: anuncio_impreso
formas_de_curiosidad:
  - titular_contraintuitivo
  - hecho_sorprendente
  - dato_incompleto
  - imagen_contraria_a_expectativa
ejemplos:
  - Quaker Puffed
  - Volkswagen Lemon
principio: >
  El titular debe abrir una brecha clara y relevante, pero el cuerpo del anuncio debe
  resolverla de forma que fortalezca la propuesta.
```

## 9.2. Publicidad exterior

```yaml
contexto: publicidad_exterior
formas_de_curiosidad:
  - frase_corta_y_ambigua
  - identidad_provocadora
  - historia_incompleta
  - pregunta_visual
ejemplos:
  - The Economist
  - I Hate Steven Singer
principio: >
  La brecha debe ser comprensible en segundos. La curiosidad exterior no puede depender
  de una explicación larga en el primer contacto.
```

## 9.3. Televisión y video narrativo

```yaml
contexto: television_video
formas_de_curiosidad:
  - escena_enigmatica
  - relato_incompleto
  - revelacion_tardia_de_marca
  - tension_visual
ejemplos:
  - Apple 1984
  - Old Spice
principio: >
  El video permite que la curiosidad se despliegue temporalmente: cada segundo puede
  abrir o cerrar una pequeña brecha.
```

## 9.4. Redes sociales

```yaml
contexto: redes_sociales
formas_de_curiosidad:
  - cambio_de_identidad
  - ausencia_de_publicaciones
  - hook_paradojico
  - pieza_rara_compartible
ejemplos:
  - IHOb
  - Taco Bell Blackout
  - Old Spice Response Campaign
principio: >
  En redes, la curiosidad se vuelve conversación. La pieza no sólo debe ser vista:
  debe provocar especulación, respuesta o búsqueda.
```

## 9.5. Web, búsqueda y transmedia

```yaml
contexto: web_busqueda_transmedia
formas_de_curiosidad:
  - pistas_distribuidas
  - micrositios
  - dominios_extraños
  - documentos_falsos
  - resultados_de_busqueda_intervenidos
ejemplos:
  - The Blair Witch Project
  - Did You Mean Mailchimp?
principio: >
  La curiosidad puede convertirse en investigación activa cuando la campaña deja
  pistas suficientes para que el público reconstruya el patrón.
```

## 9.6. App y migración de canal

```yaml
contexto: app_movil
formas_de_curiosidad:
  - blackout
  - contenido_disponible_solo_en_app
  - retirada_de_canales_habituales
ejemplo:
  - Taco Bell Blackout
principio: >
  La curiosidad puede usarse para redirigir comportamiento: no sólo para mirar más,
  sino para migrar de un canal a otro.
```

## 9.7. Social marketing / campañas públicas

```yaml
contexto: social_marketing
formas_de_curiosidad:
  - disonancia_tonal
  - tema_grave_con_forma_ludica
  - canción_o_formato_memorable
ejemplo:
  - Dumb Ways to Die
principio: >
  Cuando el público no quiere escuchar un mensaje serio, la curiosidad puede abrir
  una vía indirecta de entrada.
```

---

# 10. Reglas de diseño

```yaml
reglas_publicidad_por_curiosidad:
  R1_brecha_moderada:
    formulacion: >
      La brecha debe ser suficiente para activar interés, pero no tan grande como
      para producir confusión.

  R2_pista_relevante:
    formulacion: >
      La señal inicial debe tener relación con el producto, la marca, la historia o
      la acción deseada.

  R3_resolucion_valiosa:
    formulacion: >
      La campaña debe resolver la curiosidad de forma satisfactoria. Si no hay payoff,
      la curiosidad se convierte en frustración.

  R4_no_confundir_curiosidad_con_clickbait:
    formulacion: >
      La curiosidad engañosa puede producir atención inicial, pero deteriora confianza,
      retención y evaluación.

  R5_adaptar_al_contexto:
    formulacion: >
      En búsqueda conviene más claridad; en video puede sostenerse misterio; en OOH
      la brecha debe entenderse en segundos; en redes debe invitar a conversación.

  R6_conectar_con_mecanismo_de_compra:
    formulacion: >
      La curiosidad debe conducir a una evaluación, deseo, recuerdo, acción o conversación
      útil para la marca.
```

---

# 11. Fallas comunes

```yaml
fallas_curiosidad_publicitaria:
  misterio_excesivo:
    descripcion: >
      La pieza oculta tanto que el receptor no sabe por qué debería interesarse.

  curiosidad_sin_producto:
    descripcion: >
      La campaña genera conversación, pero la marca o producto no queda integrado
      al mecanismo.

  clickbait:
    descripcion: >
      La señal promete una revelación que el contenido no entrega.

  resolucion_debil:
    descripcion: >
      El payoff es menos interesante que la brecha inicial.

  atencion_inutil:
    descripcion: >
      La curiosidad atrae personas equivocadas o interés que no se convierte en
      recuerdo, evaluación o acción.

  desalineacion_de_contexto:
    descripcion: >
      La forma de curiosidad no corresponde al medio: demasiado misterio en búsqueda,
      demasiada explicación en OOH, demasiada lentitud en video corto.
```

---

# 12. Modelo ACCD reutilizable

```yaml
modelo_publicidad_por_curiosidad:
  entrada:
    - producto
    - marca
    - contexto_de_distribucion
    - audiencia
    - objetivo_de_respuesta

  detectar_material_curioso:
    preguntas:
      - ¿Hay un proceso oculto interesante?
      - ¿Hay una contradicción aprovechable?
      - ¿Hay una historia que pueda empezarse a la mitad?
      - ¿Hay una identidad familiar que pueda alterarse mínimamente?
      - ¿Hay un contraste tonal que despierte atención?
      - ¿Hay una pista que el público pueda reconstruir?

  construir_brecha:
    condiciones:
      - debe_ser_moderada
      - debe_ser_relevante
      - debe_ser_comprensible
      - debe_promesa_resolucion

  adaptar_a_contexto:
    impreso: titular_y_copy
    OOH: frase_breve_y_memorable
    video: hook_y_payoff_temporal
    social: conversación_y_especulación
    email: asunto_y_preheader
    búsqueda: curiosidad_controlada_por_claridad
    tienda: empaque_display_demostracion
    transmedia: pistas_distribuidas

  resolver:
    tipos:
      - explicación
      - demostración
      - revelación_de_producto
      - relato_de_marca
      - CTA
      - comparación
      - experiencia

  validar:
    metricas:
      - lectura
      - clic
      - apertura
      - retención
      - búsqueda
      - conversación
      - recuerdo
      - prueba
      - compra
      - migración_de_canal
```

---

# 13. mNode final

```yaml
mnode_id: MN_MODELO_PUBLICIDAD_POR_CURIOSIDAD
familia_cognitiva: FAM-Diseño
tipo_de_unidad: modelo_psicologico_operativo
formulacion: >
  La publicidad por curiosidad consiste en diseñar una brecha de información
  relevante que haga que el receptor quiera completar lo que falta. Esa brecha puede
  tomar la forma de un hecho sorprendente, una contradicción, una historia incompleta,
  una ausencia, una alteración de identidad, una disonancia tonal o un sistema de
  pistas. Para funcionar publicitariamente, la curiosidad debe estar conectada con
  el producto, la marca, la acción o el aprendizaje final, y debe resolverse de forma
  satisfactoria.

estructura:
  estimulo:
    - hecho_curioso
    - pregunta
    - contradiccion
    - misterio
    - ausencia
    - alteracion_de_identidad
    - incongruencia
    - pista
  mecanismo:
    - brecha_de_informacion
    - tension_cognitiva
    - deseo_de_resolucion
  reaccion:
    - mirar
    - leer
    - hacer_click
    - seguir_viendo
    - buscar
    - conversar
    - recordar
  validacion:
    - atención
    - retención
    - conversación
    - búsqueda
    - conversión
    - recuerdo

principio: >
  La curiosidad es útil cuando convierte una brecha en atención cualificada;
  es peligrosa cuando convierte una brecha en engaño, frustración o atención inútil.
```

---

# 14. Síntesis final

La curiosidad publicitaria no es un solo recurso. Puede aparecer como:

```txt
hecho curioso
contradicción
pregunta
misterio
historia incompleta
ausencia
alteración mínima de identidad
sistema de pistas
incongruencia audiovisual
disonancia tonal
```

Pero en todos los casos conserva la misma estructura:

```txt
pista relevante
  → brecha de información
    → deseo de resolución
      → atención
        → payoff
          → recuerdo / evaluación / acción
```

Frase final:

```txt
La curiosidad no vende por ocultar;
vende cuando hace que el receptor quiera descubrir algo que aumenta el valor percibido de la marca, producto o mensaje.
```
