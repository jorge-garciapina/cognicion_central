# Modelo relacional: publicidad, sociedad, tecnología y logística

## 0. Propósito del modelo

Este documento formula un modelo para estudiar la publicidad como una forma histórica que depende del estado tecnológico, logístico, social, cultural, psicológico, económico y político de una región.

La tesis central es:

```txt
La publicidad no cambia sólo porque cambie la creatividad.
Cambia porque cambian los medios disponibles, las tecnologías de producción,
la logística de distribución, los hábitos de atención, las formas de confianza,
los valores culturales y los sistemas de medición.
```

El fin comercial puede permanecer relativamente estable —vender, activar respuesta, crear demanda, generar marca—, pero la forma publicitaria cambia según las condiciones materiales y sociales de cada época.

---

## 1. Fórmula general

```txt
forma_publicitaria =
  fin_comercial
  + medio_disponible
  + tecnología_de_producción
  + logística_de_distribución
  + cultura_del_receptor
  + estado_del_mercado
  + sistema_de_medición
  + regulación/política
```

En términos más sintéticos:

```txt
publicidad = fin_comercial × medio × logística × cultura × psicología × medición × regulación
```

Esta fórmula permite analizar por qué una misma intención comercial adopta formas distintas en diferentes sociedades y épocas.

Ejemplos:

```txt
periódico_en_blanco_y_negro:
  forma_publicitaria:
    - texto denso
    - precios
    - cupones
    - descripciones
    - tipografía funcional

revista_a_color:
  forma_publicitaria:
    - imagen aspiracional
    - fotografía
    - estética de marca
    - estilo de vida
    - color como signo emocional

radio:
  forma_publicitaria:
    - voz
    - jingle
    - repetición
    - memoria sonora
    - personalidad del locutor

televisión:
  forma_publicitaria:
    - demostración visual
    - escena familiar
    - movimiento
    - celebridad
    - aspiración doméstica

internet:
  forma_publicitaria:
    - clic
    - landing page
    - segmentación
    - rastreo
    - prueba A/B

redes_sociales:
  forma_publicitaria:
    - video corto
    - influencer
    - algoritmo
    - scroll
    - comentario público
    - remix cultural
```

---

## 2. Principio central: la publicidad como adaptación al medio

```txt
Cada tecnología abre un espacio publicitario nuevo,
pero cada sociedad decide cómo ese espacio se vuelve persuasivo.
```

La publicidad se adapta a las posibilidades expresivas del medio:

```txt
texto:
  permite argumento, precio, explicación, promesa, cupón.

imagen:
  permite demostración visual, deseo, estética, comparación, identidad.

color:
  permite emoción, codificación de marca, lujo, frescura, apetito, energía.

sonido:
  permite memoria, ritmo, repetición, familiaridad, voz de autoridad.

video:
  permite escena, acción, narrativa, demostración, emoción, celebridad.

internet:
  permite respuesta inmediata, medición, segmentación, personalización.

redes sociales:
  permiten interacción, viralidad, prueba social, creador, microtendencia.

IA generativa:
  permite producción escalable, variantes, personalización visual, prompts reutilizables.
```

Pero el medio no basta. La sociedad determina qué uso es creíble, deseable y aceptable.

---

## 3. Tecnología y logística: mensaje y cumplimiento

La publicidad depende de dos sistemas complementarios:

```txt
sistema_de_comunicación:
  ¿cómo llega el mensaje?

sistema_logístico:
  ¿cómo llega el producto?

sistema_de_medición:
  ¿cómo sabemos si funcionó?
```

Un formato publicitario sólo se vuelve dominante cuando existe una infraestructura capaz de sostenerlo.

```txt
un formato publicitario sólo se vuelve dominante
cuando existe una infraestructura capaz de sostenerlo.
```

Ejemplos:

```txt
catálogo_por_correo:
  necesita:
    - imprenta barata
    - sistema postal
    - ferrocarril
    - almacenes
    - inventario organizado
    - capacidad de procesar pedidos
    - confianza en compra a distancia

radio:
  necesita:
    - red de transmisión
    - receptores domésticos
    - horarios de escucha
    - patrocinadores
    - cultura de escucha colectiva

televisión:
  necesita:
    - cámaras
    - emisoras
    - hogares con televisión
    - producción audiovisual
    - marcas de consumo masivo
    - medición de audiencia

internet:
  necesita:
    - conectividad
    - navegadores
    - buscadores
    - medios de pago
    - logística de entrega
    - analítica digital

redes_sociales:
  necesitan:
    - smartphones
    - plataformas
    - algoritmos
    - producción barata de contenido
    - cultura de scroll
    - métricas de retención e interacción
```

---

## 4. Sociedad: la publicidad refleja y produce deseos

La publicidad no sólo refleja una sociedad. También ayuda a producir formas de deseo social.

Un anuncio puede vender un producto específico, pero al mismo tiempo revela:

```txt
qué se considera moderno
qué se considera deseable
qué estilo de vida se aspira a tener
qué cuerpos se idealizan
qué familias se imaginan
qué miedos se activan
qué futuro se promete
qué clase social se representa
qué relación existe entre tradición y modernidad
qué forma de confianza se considera legítima
```

Por eso una misma tecnología no produce la misma publicidad en todas partes. La televisión, el periódico, el catálogo o el smartphone no generan automáticamente la misma publicidad en Estados Unidos, Japón, China, India, México o Brasil. Cada sociedad traduce el medio según sus propias condiciones culturales.

---

## 5. Cultura: no existe “el consumidor universal”

La publicidad global vive una tensión constante entre estandarización y adaptación.

```txt
estandarización:
  usar el mismo mensaje global
  reducir costos
  mantener identidad de marca
  crear una imagen internacional coherente

adaptación:
  ajustar lenguaje
  ajustar símbolos
  ajustar valores
  ajustar humor
  ajustar estética
  ajustar medios
  ajustar ritmos de consumo
  evitar errores culturales
```

No basta con traducir palabras. Hay que traducir formas de deseo.

```txt
traducción superficial:
  cambiar idioma

traducción publicitaria profunda:
  cambiar códigos de confianza
  cambiar signos de estatus
  cambiar escenas de uso
  cambiar apelaciones emocionales
  cambiar autoridad cultural
  cambiar relación entre individuo, familia, grupo y sociedad
```

---

## 6. Modelo general por capas

```yaml
modelo_relacional_publicidad:
  capa_1_fin_comercial:
    pregunta: "¿Qué busca lograr la publicidad?"
    ejemplos:
      - vender
      - informar
      - crear marca
      - generar confianza
      - legitimar consumo
      - activar respuesta
      - producir recordación
      - modificar percepción

  capa_2_tecnologia_de_expresion:
    pregunta: "¿Qué puede representar el medio?"
    ejemplos:
      - texto
      - imagen
      - color
      - sonido
      - movimiento
      - interacción
      - personalización
      - realidad aumentada
      - IA generativa

  capa_3_logistica_de_distribucion:
    pregunta: "¿Cómo llega el producto o servicio?"
    ejemplos:
      - tienda local
      - correo
      - ferrocarril
      - catálogo
      - supermercado
      - delivery
      - marketplace
      - app
      - pago digital

  capa_4_infraestructura_de_medios:
    pregunta: "¿Cómo llega el mensaje?"
    ejemplos:
      - prensa
      - cartel
      - radio
      - televisión
      - buscador
      - red social
      - mensajería
      - influencer
      - plataforma algorítmica

  capa_5_psicologia_social:
    pregunta: "¿Qué estado mental domina la recepción?"
    ejemplos:
      - confianza
      - sospecha
      - aspiración
      - escasez
      - modernidad
      - nacionalismo
      - tradición
      - ansiedad
      - deseo de estatus
      - deseo de pertenencia
      - deseo de seguridad

  capa_6_cultura:
    pregunta: "¿Qué códigos vuelven persuasivo el mensaje?"
    ejemplos:
      - individualismo
      - familia
      - jerarquía
      - armonía
      - pureza
      - prestigio
      - tradición
      - innovación
      - comunidad
      - juventud
      - autoridad
      - ritual

  capa_7_medicion:
    pregunta: "¿Cómo se sabe si funcionó?"
    ejemplos:
      - cupones
      - pedidos por correo
      - llamadas
      - ratings
      - encuestas
      - clics
      - conversiones
      - retención
      - atribución
      - pruebas A/B
      - costo por adquisición
      - retorno de inversión

  capa_8_regulacion_y_politica:
    pregunta: "¿Qué se permite, se censura o se legitima?"
    ejemplos:
      - restricciones estatales
      - normas de consumo
      - publicidad infantil
      - propaganda
      - privacidad
      - alcohol/tabaco
      - datos personales
      - plataformas controladas
      - censura
      - regulación sanitaria
```

---

## 7. Periodización posible por tecnología publicitaria

### 7.1. Publicidad local / preindustrial

```yaml
periodo: publicidad_local_preindustrial
soportes:
  - signos
  - pregones
  - marcas de tienda
  - emblemas
  - avisos públicos
logistica:
  - mercado local
  - reputación directa
  - cercanía física
psicologia:
  - presencia
  - familiaridad
  - reconocimiento
  - confianza comunitaria
```

### 7.2. Publicidad impresa textual

```yaml
periodo: publicidad_impresa_textual
soportes:
  - periódicos
  - panfletos
  - clasificados
  - hojas sueltas
logistica:
  - comercio urbano
  - correo inicial
  - circulación impresa
psicologia:
  - información
  - precio
  - disponibilidad
  - promesa racional
```

### 7.3. Publicidad ilustrada y catálogo

```yaml
periodo: publicidad_ilustrada_y_catalogo
soportes:
  - grabado
  - ilustración
  - catálogo
  - impresión masiva
logistica:
  - ferrocarril
  - correo
  - almacenes
  - venta a distancia
psicologia:
  - imaginación del producto
  - confianza a distancia
  - comparación
  - deseo de acceso
```

### 7.4. Publicidad fotográfica y color

```yaml
periodo: publicidad_fotografica_y_color
soportes:
  - revistas
  - pósters
  - empaques
  - fotografía
  - impresión a color
logistica:
  - marcas nacionales
  - retail moderno
  - supermercados
psicologia:
  - aspiración
  - estilo de vida
  - deseo visual
  - identificación social
```

### 7.5. Publicidad sonora

```yaml
periodo: publicidad_sonora
soportes:
  - radio
  - jingle
  - locución
  - patrocinio de programas
logistica:
  - consumo masivo
  - hogares con receptores
  - redes de transmisión
psicologia:
  - memoria
  - familiaridad
  - repetición
  - confianza en la voz
```

### 7.6. Publicidad televisiva

```yaml
periodo: publicidad_televisiva
soportes:
  - imagen en movimiento
  - escena doméstica
  - celebridad
  - demostración audiovisual
logistica:
  - supermercados
  - marcas nacionales
  - hogares con televisión
psicologia:
  - aspiración doméstica
  - autoridad cultural
  - entretenimiento
  - imitación social
```

### 7.7. Publicidad digital temprana

```yaml
periodo: publicidad_digital_temprana
soportes:
  - banners
  - email
  - buscadores
  - landing pages
logistica:
  - e-commerce inicial
  - pagos digitales
  - páginas web
psicologia:
  - clic
  - búsqueda
  - conveniencia
  - respuesta inmediata
```

### 7.8. Publicidad social y móvil

```yaml
periodo: publicidad_social_y_movil
soportes:
  - feed
  - stories
  - reels
  - shorts
  - influencers
  - mensajería
logistica:
  - apps
  - delivery
  - pagos móviles
  - marketplaces
psicologia:
  - scroll
  - pertenencia
  - prueba social
  - microcomunidad
  - atención fragmentada
```

### 7.9. Publicidad algorítmica y generativa

```yaml
periodo: publicidad_algoritmica_y_generativa
soportes:
  - personalización
  - IA generativa
  - contenido dinámico
  - anuncios adaptativos
  - prompts visuales
logistica:
  - plataformas integradas
  - marketplaces
  - datos
  - automatización
psicologia:
  - relevancia
  - fatiga publicitaria
  - sospecha
  - hipersegmentación
  - deseo de autenticidad
```

---

## 8. Modelo comparativo: Japón, China e India

## 8.1. Japón

```yaml
pais: Japon
eje_dominante: modernidad_tecnica_mas_sensibilidad_estetica
factores:
  - fuerte integración entre medios, agencias y marcas
  - modernización industrial
  - consumo doméstico de posguerra
  - importancia de calidad, detalle y confianza
  - sensibilidad estética y estacionalidad
  - alta codificación visual
forma_publicitaria_probable:
  - diseño cuidado
  - códigos visuales sutiles
  - confianza en marca
  - énfasis en calidad
  - detalle
  - temporada
  - ritual
  - armonía
  - tecnología amable
hipotesis_de_trabajo: >
  Japón desarrolla publicidad como traducción visual de modernidad cotidiana:
  hogar moderno, electrodomésticos, eficiencia, limpieza, diseño, urbanidad y
  tecnología integrada a la vida diaria.
```

### Lectura conceptual

Japón permite estudiar la publicidad como síntesis entre modernidad técnica y sensibilidad cultural. La publicidad japonesa no debe entenderse sólo como occidentalización, sino como adaptación local de medios masivos, diseño gráfico, códigos estacionales, confianza institucional y aspiraciones de consumo.

---

## 8.2. China

```yaml
pais: China
eje_dominante: modernizacion_acelerada_mas_estado_mas_plataformas
factores:
  - entrada temprana de publicidad comercial moderna
  - interrupción ideológica bajo el sistema comunista
  - reintroducción con reforma y apertura
  - crecimiento urbano
  - plataformas digitales integradas
  - relación entre mercado y legitimación política
forma_publicitaria_probable:
  - legitimación de modernidad
  - aspiración de movilidad social
  - mezcla de códigos globales y nacionales
  - fuerte papel de plataformas
  - adaptación política y cultural
  - consumo como signo de reforma y progreso
hipotesis_de_trabajo: >
  En China, la publicidad no sólo responde a tecnología y mercado, sino también a
  legitimidad política. Su forma moderna surge de la relación entre Estado, reforma,
  consumo urbano, plataformas digitales y aspiración de modernidad.
```

### Lectura conceptual

China muestra que la publicidad depende también de si una sociedad considera legítimo el consumo comercial. No basta con que exista impresión, televisión o internet. Debe existir un marco político y económico donde anunciar productos sea aceptable, permitido y funcional al proyecto social.

---

## 8.3. India

```yaml
pais: India
eje_dominante: pluralidad_cultural_mas_liberalizacion_mas_movil
factores:
  - prensa colonial
  - independencia nacional
  - lenguas regionales
  - familia y comunidad
  - televisión estatal y privada
  - liberalización económica
  - Bollywood
  - telefonía móvil
  - internet barato
  - plataformas sociales
forma_publicitaria_probable:
  - narrativas familiares
  - humor
  - música
  - celebridades
  - adaptación lingüística
  - tensión tradición/modernidad
  - importancia del precio
  - confianza
  - acceso
hipotesis_de_trabajo: >
  India muestra cómo la publicidad debe adaptarse a una sociedad multilingüe,
  estratificada y regionalmente diversa, donde el móvil y las plataformas digitales
  no sustituyen simplemente a la cultura previa, sino que se integran con familia,
  celebridad, tradición, aspiración y consumo regional.
```

### Lectura conceptual

India permite estudiar cómo una tecnología común —por ejemplo, televisión o smartphone— se fragmenta en múltiples formas publicitarias según lengua, región, religión, clase, ruralidad, urbanidad, tradición y modernidad.

---

## 9. Tecnología no determina sola

La tecnología no determina automáticamente una forma publicitaria. Más bien:

```txt
la tecnología abre posibilidades;
la logística las hace ejecutables;
la sociedad las vuelve deseables o aceptables;
la cultura les da significado;
la medición selecciona qué sobrevive.
```

Ejemplos:

```txt
fotografía:
  permite mostrar productos,
  pero una sociedad decide qué cuerpos, hogares, familias y estilos de vida representar.

televisión:
  permite contar historias,
  pero una cultura decide qué tipo de familia, humor, autoridad o aspiración funciona.

internet:
  permite segmentar,
  pero la regulación, la confianza, los pagos y la privacidad determinan cómo se usa.

smartphone:
  permite video corto,
  pero el hábito del scroll define la economía temporal del anuncio.
```

---

## 10. Publicidad como índice del estado de una sociedad

Tesis:

```txt
La publicidad de una época revela qué infraestructura tiene una sociedad,
qué deseos considera legítimos,
qué tecnologías domina,
qué formas de confianza acepta
y qué futuro imagina.
```

Por eso estudiar publicidad es estudiar mucho más que anuncios.

```txt
publicidad como objeto de estudio:
  - medios
  - logística
  - deseo
  - tecnología
  - mercado
  - clase social
  - género
  - familia
  - Estado
  - modernidad
  - consumo
  - identidad
```

Cada anuncio puede procesarse como un grafo:

```txt
anuncio
  → medio_disponible
  → tecnología_expresiva
  → infraestructura_logística
  → cultura_receptora
  → psicología_de_compra
  → forma_de_medición
  → modelo_social_implícito
```

---

## 11. Núcleo conceptual normalizado

```yaml
nucleo_conceptual:
  id: NC_PUBLICIDAD_TECNOLOGIA_SOCIEDAD_LOGISTICA
  titulo: "La publicidad como forma histórica de una infraestructura social"
  formulacion: >
    La publicidad no es una técnica universal que simplemente cambia de estilo.
    Es una forma histórica que depende del estado tecnológico, logístico, mediático,
    cultural y psicológico de una sociedad. Cada nuevo medio —periódico, catálogo,
    radio, televisión, internet, red social o IA— abre posibilidades expresivas,
    pero esas posibilidades sólo se convierten en publicidad efectiva cuando encajan
    con la logística de distribución, los hábitos de atención, los valores culturales
    y las formas de confianza de una región.

  tesis:
    - el fin comercial puede permanecer, pero la forma publicitaria cambia
    - la tecnología abre posibilidades expresivas
    - la logística determina qué promesas pueden cumplirse
    - la cultura determina qué promesas son deseables
    - la psicología social determina qué mensajes son creíbles o resistidos
    - la medición determina qué formas sobreviven
    - la política/regulación determina qué formas son permitidas o legitimadas

  formula:
    publicidad: fin_comercial × medio × logística × cultura × psicología × medición × regulación
```

---

## 12. Modelo en formato mNode

```yaml
mnode_id: MOD_PUBLICIDAD_INFRAESTRUCTURA_SOCIAL
familia_cognitiva: FAM-Diseño
tipo_de_unidad: modelo_relacional
estatus_de_extraccion: construccion_conceptual
formulacion: >
  La forma publicitaria de una época o región emerge de la interacción entre
  fin comercial, medio disponible, tecnología expresiva, logística de distribución,
  cultura receptora, psicología social, medición y regulación política.

estructura:
  fin_comercial:
    pregunta: "¿Qué busca lograr el anuncio?"
    ejemplos:
      - vender
      - recordar
      - posicionar
      - legitimar
      - activar respuesta

  medio_disponible:
    pregunta: "¿Por qué canal circula el mensaje?"
    ejemplos:
      - periódico
      - catálogo
      - radio
      - televisión
      - internet
      - red social
      - plataforma algorítmica

  tecnologia_expresiva:
    pregunta: "¿Qué formas expresivas permite el medio?"
    ejemplos:
      - texto
      - imagen
      - color
      - sonido
      - movimiento
      - interacción
      - personalización
      - IA generativa

  logistica_distribucion:
    pregunta: "¿Cómo se cumple la promesa comercial?"
    ejemplos:
      - tienda
      - correo
      - ferrocarril
      - supermercado
      - marketplace
      - delivery
      - app

  cultura_receptora:
    pregunta: "¿Qué códigos vuelven deseable o creíble el mensaje?"
    ejemplos:
      - familia
      - estatus
      - armonía
      - tradición
      - modernidad
      - juventud
      - comunidad
      - autoridad

  psicologia_social:
    pregunta: "¿Qué disposición mental domina la recepción?"
    ejemplos:
      - confianza
      - sospecha
      - aspiración
      - ansiedad
      - deseo de pertenencia
      - deseo de seguridad
      - deseo de movilidad

  medicion:
    pregunta: "¿Cómo se valida la eficacia?"
    ejemplos:
      - cupón
      - pedido
      - llamada
      - rating
      - clic
      - conversión
      - retención
      - prueba A/B

  regulacion_politica:
    pregunta: "¿Qué permite o restringe el entorno institucional?"
    ejemplos:
      - censura
      - privacidad
      - regulación infantil
      - regulación sanitaria
      - control de plataformas
      - normas de consumo

relaciones:
  - tecnologia_expresiva abre posibilidades de forma
  - logistica_distribucion limita o habilita la promesa
  - cultura_receptora define códigos de persuasión
  - psicologia_social define resistencia o aceptación
  - medicion selecciona qué formas sobreviven
  - regulacion_politica permite, restringe o legitima la práctica publicitaria
```

---

## 13. Preguntas guía para analizar una publicidad histórica o regional

```yaml
preguntas_guia:
  medio:
    - ¿En qué soporte circula el anuncio?
    - ¿Qué permite ese soporte que otros no permiten?
    - ¿Qué limita ese soporte?

  tecnologia:
    - ¿El anuncio usa texto, imagen, color, sonido, movimiento o interacción?
    - ¿Qué tecnologías de producción lo hacen posible?
    - ¿Qué elementos expresivos todavía no estaban disponibles?

  logistica:
    - ¿Cómo se compraba el producto?
    - ¿Cómo se entregaba?
    - ¿Qué infraestructura permitía cumplir la promesa?
    - ¿El anuncio vendía localmente, por correo, por tienda o por plataforma?

  sociedad:
    - ¿Qué aspiración social aparece?
    - ¿Qué modelo de familia, individuo, clase o futuro se representa?
    - ¿Qué miedo o deseo social activa?

  cultura:
    - ¿Qué símbolos vuelven persuasivo el mensaje?
    - ¿Qué valores aparecen: tradición, modernidad, familia, estatus, armonía, eficiencia?
    - ¿Qué códigos serían diferentes en otra región?

  psicologia:
    - ¿Busca informar, seducir, tranquilizar, provocar, demostrar o activar respuesta?
    - ¿Reduce riesgo?
    - ¿Construye confianza?
    - ¿Usa aspiración o prueba social?

  medicion:
    - ¿Cómo podía saber el anunciante si funcionó?
    - ¿Había cupón, pedido, llamada, rating, clic o conversión?
    - ¿El medio permitía comparar variantes?

  regulacion:
    - ¿Qué prácticas estaban permitidas?
    - ¿Qué restricciones existían?
    - ¿La publicidad estaba legitimada o era políticamente sospechosa?
```

---

## 14. Aplicación mínima del modelo

### 14.1. Anuncio de periódico en blanco y negro

```yaml
tipo: anuncio_periodico_blanco_y_negro
medio: periódico
tecnologia_expresiva:
  - texto
  - tipografía
  - composición básica
  - imagen limitada o inexistente
logistica:
  - tienda local
  - correo
  - pedido directo
psicologia:
  - información
  - precio
  - disponibilidad
  - confianza textual
forma_publicitaria:
  - copy denso
  - argumento racional
  - titular funcional
  - cupón o dirección
```

### 14.2. Catálogo por correo

```yaml
tipo: catalogo_por_correo
medio: catálogo impreso
tecnologia_expresiva:
  - texto
  - ilustración
  - fotografía posterior
  - tabla de precios
logistica:
  - sistema postal
  - ferrocarril
  - almacenes
  - pedidos remotos
psicologia:
  - confianza a distancia
  - imaginación del producto
  - comparación
  - acceso a bienes no locales
forma_publicitaria:
  - descripción detallada
  - precio visible
  - ordenamiento por categorías
  - instrucciones de pedido
```

### 14.3. Comercial televisivo de consumo masivo

```yaml
tipo: comercial_televisivo
medio: televisión
tecnologia_expresiva:
  - imagen en movimiento
  - sonido
  - actuación
  - escena
  - demostración
logistica:
  - supermercado
  - marca nacional
  - distribución masiva
psicologia:
  - aspiración
  - entretenimiento
  - identificación familiar
  - repetición
forma_publicitaria:
  - historia corta
  - demostración
  - jingle
  - marca memorable
```

### 14.4. Video corto en red social

```yaml
tipo: video_corto_red_social
medio: feed vertical algorítmico
tecnologia_expresiva:
  - video vertical
  - texto sobre pantalla
  - sonido
  - edición rápida
  - interacción
logistica:
  - app
  - marketplace
  - link
  - pago digital
  - delivery
psicologia:
  - scroll
  - atención fragmentada
  - prueba social
  - autenticidad
  - microtendencia
forma_publicitaria:
  - hook temprano
  - ritmo rápido
  - demostración comprimida
  - creador o rostro
  - CTA directo
```

---

## 15. Síntesis final

La publicidad debe entenderse como una forma histórica de una infraestructura social.

```txt
no existe publicidad abstracta;
existe publicidad situada.
```

Cada anuncio responde a una configuración:

```txt
medio disponible
  + tecnología expresiva
  + logística de cumplimiento
  + cultura receptora
  + psicología social
  + sistema de medición
  + regulación
  = forma publicitaria posible
```

El fin comercial puede mantenerse, pero la forma concreta cambia:

```txt
vender_en_periódico
  ≠ vender_en_radio
  ≠ vender_en_televisión
  ≠ vender_en_TikTok
  ≠ vender_en_WeChat
  ≠ vender_en_un_catálogo_de_1890
```

La publicidad de una época revela su infraestructura, sus deseos, sus miedos, sus medios, sus capacidades logísticas y su imaginación social.

---

## 16. Referencias iniciales para ampliar

> Nota: estas referencias funcionan como punto de partida para estudiar la relación entre publicidad, medios, tecnología, logística y cultura. Conviene verificarlas y ampliarlas según el caso regional que se estudie.

### Historia general, tecnología y medios

- *History and Development of Advertising through Media Technology*.
- *History of Advertising* — Open Educational Resources / Media Communication.
- USPS — *Advertising Mail: A Brief History*.
- University of Chicago Library — *Mail-Order Catalogs: Printing for the Modern Age*.

### Japón

- Advertising Museum Tokyo — *Japanese Advertising History*.
- Dentsu Group — *History / Foundation in 1901*.
- Studies on development of mass media in Japan and postwar television.

### China

- Hong, Cheng. *The Resurrection of Advertising in China*.
- Studies on advertising and China’s reform/opening period.
- Research on Chinese advertising design and its development stages.

### India

- *Advertising in India: The Journey So Far and Road Ahead*.
- Studies on new media practices in India.
- Historical accounts of advertising in India from colonial print to liberalization and mobile media.

### Cultura y publicidad internacional

- De Mooij, Marieke and Hofstede, Geert. Work on culture, global branding and advertising.
- Research on standardization/adaptation in international advertising.
- Cross-cultural advertising appeals research.
```
