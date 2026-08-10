# Modelo — Principios psicológicos como patrones transcontextuales

## 1. Idea central

Este modelo parte de una inferencia desarrollada durante la lectura del capítulo 6, **Psychology**, de *Scientific Advertising*:

> Si la naturaleza humana conserva ciertos patrones relativamente estables, entonces los principios psicológicos de la publicidad pueden funcionar como estructuras transferibles entre contextos.

La intuición puede formularse así:

```txt
la técnica cambia;
el mecanismo psicológico permanece.
```

O, de forma más estructural:

```txt
principio psicológico
  → núcleo estable
    → adaptación contextual
      → manifestación publicitaria concreta
        → resultado medible
```

La comparación con **design patterns** y **algoritmos** no debe entenderse como una comparación centrada en programación, sino como una analogía con una categoría más general: estructuras reutilizables que resuelven problemas recurrentes y pueden implementarse en entornos distintos.

Así como un algoritmo puede implementarse en JavaScript, Python, Java o C++ conservando su lógica, un principio psicológico puede implementarse en mail order, prensa, televisión, tienda física, email, marketplace, buscador, video corto o redes sociales conservando su mecanismo humano central.

---

## 2. Núcleo conceptual

```yaml
nucleo_conceptual:
  id: NC_PRINCIPIOS_PSICOLOGICOS_COMO_PATRONES_TRANSCONTEXTUALES
  formulacion: >
    Los principios psicológicos en publicidad funcionan como patrones
    transcontextuales: conservan relaciones estables entre estímulos, mecanismos
    mentales y reacciones probables, pero pueden manifestarse en distintos medios,
    secciones, segmentos y realizaciones. Al igual que un algoritmo o un design
    pattern puede implementarse en distintos lenguajes, un principio psicológico
    puede implementarse en mail order, televisión, tienda, revista, video corto,
    email, buscador, marketplace o comunidad, siempre que se adapte a las
    restricciones del contexto.

  tesis:
    - la naturaleza humana ofrece regularidades relativamente estables
    - esas regularidades pueden convertirse en principios publicitarios
    - los principios no pertenecen esencialmente a un medio
    - cada medio los implementa con recursos distintos
    - mail order los revela con fuerza porque mide respuesta de forma severa
    - la adaptación contextual permite transferirlos sin copiarlos superficialmente
```

---

## 3. Punto de partida en Hopkins

El capítulo 6 plantea que el publicista competente debe comprender psicología porque ciertos efectos producen ciertas reacciones. La publicidad, desde esta perspectiva, no consiste solamente en redactar mensajes persuasivos, sino en diseñar condiciones que activen respuestas humanas relativamente previsibles.

La estructura básica sería:

```txt
configuración publicitaria
  → mecanismo psicológico activado
    → reacción probable
      → resultado publicitario
```

No se trata de una reacción mecánica absoluta. Es una relación probabilística, mediada por el contexto, el receptor, la oferta, el medio y el estado psicológico de la persona.

Ejemplos:

```txt
garantía fuerte
  → reducción de riesgo percibido
    → menor resistencia
      → mayor probabilidad de prueba o compra
```

```txt
oferta exclusiva
  → percepción de acceso limitado
    → aumento de valor percibido
      → mayor disposición a actuar
```

```txt
muestra solicitada
  → participación voluntaria
    → mayor compromiso
      → mayor probabilidad de atención y conversión
```

---

## 4. Relación con el capítulo 4: mail order como escuela severa

El capítulo 4 presenta la publicidad por correo como una prueba extrema. Allí el publicista no puede refugiarse fácilmente en teorías vagas, orgullo creativo o estética superficial, porque costo y resultado aparecen de forma inmediata.

La inferencia puede formularse así:

```txt
mail order advertising
  → entorno severo
    → resultados visibles
      → teorías falsas se eliminan
        → sobreviven principios fuertes
```

Sin embargo, conviene corregir una inferencia demasiado absoluta:

```txt
Inferencia fuerte pero imprecisa:
  Si alguien triunfa en mail advertising, triunfará en cualquier rubro.

Inferencia más precisa:
  Si alguien domina los principios que hacen funcionar el mail advertising,
  posee principios transferibles que pueden adaptarse a otros rubros.
```

Mail order es importante porque obliga a resolver tres problemas estructurales:

```txt
1. Distancia:
   el comprador no ve físicamente el producto ni al vendedor.

2. Acción:
   el comprador debe responder sin presión presencial.

3. Medición:
   el anuncio paga o no paga, y eso se ve en los retornos.
```

Por eso muchos principios operativos del mail order revelan mecanismos psicológicos profundos:

```txt
cupón:
  operativo: atribuye respuesta
  psicológico: facilita acción y reduce olvido

garantía:
  operativo: reduce riesgo comercial
  psicológico: disminuye miedo a pérdida

lista:
  operativo: segmenta audiencia
  psicológico: aumenta relevancia percibida

historia completa:
  operativo: informa
  psicológico: reduce incertidumbre

testing:
  operativo: compara variantes
  psicológico: descubre qué estímulo produce mejor reacción
```

---

## 5. Categoría común: patrones abstractos reutilizables

La comparación entre principios psicológicos, algoritmos y design patterns apunta a un núcleo común:

```txt
estructura abstracta reutilizable
  → resuelve un problema recurrente
  → conserva una lógica estable
  → admite implementaciones diversas
  → puede adaptarse a distintos contextos
```

| Ejemplo | Qué conserva | Qué cambia |
|---|---|---|
| Algoritmo | Secuencia lógica para resolver un problema | Lenguaje, sintaxis, implementación |
| Design pattern | Organización recurrente de componentes | Framework, lenguaje, arquitectura concreta |
| Principio psicológico | Relación estímulo-mecanismo-reacción | Medio, formato, oferta, audiencia |
| Molde de sección | Arquitectura cognitiva de producción | Video, carousel, newsletter, clase |
| Segmentación | Reducir incertidumbre sobre audiencia | Tiempo, tema, lugar, lista, algoritmo |

La categoría común puede llamarse:

```txt
patrones operativos transcontextuales
```

O también:

```txt
estructuras transferibles de solución
```

---

## 6. mNode principal

```yaml
mnode_id: MN_PRINCIPIO_PSICOLOGICO_COMO_PATRON_TRANSCONTEXTUAL
orden_textual: derivado
familia_cognitiva: FAM-Idea
estatus_de_extraccion: inferencia_conceptual
formulacion: >
  Un principio psicológico publicitario funciona como un patrón transcontextual:
  conserva una relación estable entre estímulo, mecanismo mental y reacción probable,
  pero puede manifestarse de formas distintas según el medio, la audiencia, la sección,
  el formato y la realización.

estructura:
  problema_recurrente:
    - captar_atencion
    - reducir_riesgo
    - aumentar_valor_percibido
    - producir_confianza
    - activar_curiosidad
    - inducir_compromiso
    - facilitar_accion

  nucleo:
    - mecanismo_psicologico_estable

  entrada:
    - oferta
    - titular
    - precio
    - garantia
    - muestra
    - imagen
    - canal
    - contexto

  salida:
    - atencion
    - lectura
    - confianza
    - prueba
    - compra
    - recuerdo
    - respuesta

  adaptacion:
    - mail_order
    - anuncio_impreso
    - video_corto
    - tienda_fisica
    - newsletter
    - landing_page
    - marketplace
    - comunidad
```

Fórmula:

```txt
principio psicológico
  = problema humano recurrente
  + mecanismo estable
  + forma contextual de activación
  + reacción probable
  + validación por resultado
```

---

## 7. Modelo de capas

Los principios psicológicos no actúan solos. Se manifiestan mediante técnicas operativas, dentro de contextos concretos, y se validan con resultados.

```yaml
modelo_capas_principios_publicitarios:
  capa_1_psicologica:
    descripcion: >
      Regularidades de la naturaleza humana: curiosidad, riesgo, valor percibido,
      confianza, compromiso, comparación, orgullo, escasez, pertenencia.
    funcion: explicar por qué una forma publicitaria produce reacción.

  capa_2_operativa:
    descripcion: >
      Técnicas que activan o aprovechan mecanismos psicológicos: cupón, garantía,
      muestra, titular, lista, precio, prueba, comparación, personalización.
    funcion: convertir principios psicológicos en acciones de diseño.

  capa_3_contextual:
    descripcion: >
      Medio o entorno donde la técnica se manifiesta: mail order, revista, tienda,
      video corto, email, marketplace, comunidad, buscador.
    funcion: adaptar la técnica a restricciones materiales y culturales.

  capa_4_validacion:
    descripcion: >
      Métrica o señal que confirma si el principio funcionó: respuesta, venta,
      retención, click, apertura, compra, prueba, permanencia.
    funcion: separar teoría verdadera de teoría falsa.
```

Cadena completa:

```txt
naturaleza humana estable
  → principio psicológico
    → técnica operativa
      → adaptación contextual
        → resultado medible
```

---

## 8. Fábrica de adaptaciones contextuales de principios psicológicos

```yaml
mnode_id: FAB_PRINCIPIOS_PSICOLOGICOS_ADAPTACIONES_CONTEXTUALES
tipo_de_unidad: fabrica_de_adaptaciones_contextuales
familia_cognitiva: FAM-Diseño
formulacion: >
  Los principios psicológicos funcionan como núcleos transcontextuales que pueden
  adaptarse a distintos medios, secciones y formas de segmentación. La fábrica toma
  un mecanismo humano estable y lo traduce a una técnica operativa adecuada al
  contexto.

entrada:
  - principio_psicologico
  - problema_publicitario
  - medio_o_contexto
  - audiencia_o_segmento
  - seccion_productiva
  - objetivo_de_respuesta

operaciones:
  - identificar_mecanismo_humano
  - extraer_invariante
  - elegir_forma_de_activacion
  - adaptar_a_medio
  - adaptar_a_seccion
  - adaptar_a_segmentacion
  - definir_metrica_de_validacion

salida:
  - tecnica_contextual
  - pieza_publicitaria
  - regla_transferible
  - aprendizaje_acumulable
```

Ejemplo:

```txt
principio psicológico:
  curiosidad

problema:
  detener atención

contexto:
  video corto

sección:
  errores publicitarios

adaptación:
  hook paradójico

manifestación:
  “Este anuncio se veía mejor, por eso fue peor.”

validación:
  retención inicial / finalización / comentarios / shares
```

---

## 9. Aplicación en contextos de segmentación

La segmentación define **a quién** y **en qué contexto** se activa un principio psicológico.

### 9.1. Segmentación temporal

```txt
radio / TV abierta:
  señal = horario
```

Principio psicológico aplicado:

```txt
mañana:
  rutina, urgencia, inicio del día, necesidad práctica

noche:
  descanso, entretenimiento, familia, aspiración
```

Ejemplo:

```txt
principio: conveniencia inmediata
manifestación temporal:
  anuncio de café o desayuno en horario matutino
```

El horario no es el mecanismo psicológico. El horario es el contexto que aumenta la probabilidad de cierta disposición mental.

---

### 9.2. Segmentación temática

```txt
revistas / canales / newsletters:
  señal = tema consumido
```

Principio psicológico aplicado:

```txt
si alguien consume contenido de cocina,
  probablemente está abierto a utensilios, recetas, ingredientes,
  ahorro de tiempo, mejora de habilidad o prestigio doméstico.
```

Ejemplo:

```txt
principio: aspiración de competencia
manifestación temática:
  guía de cocina que promete “cocinar como chef en casa”
```

---

### 9.3. Segmentación geográfica

```txt
tiendas / plazas / zonas comerciales:
  señal = ubicación
```

Principio psicológico aplicado:

```txt
si alguien está en una zona de ferreterías,
  no sólo está cerca;
  probablemente está en modo búsqueda, comparación o reparación.
```

Ejemplo:

```txt
principio: reducción de esfuerzo
manifestación geográfica:
  concentración de negocios del mismo rubro que facilita comparar opciones
```

Esto se parece a un buscador físico:

```txt
Google:
  intención expresada con palabras

zona comercial:
  intención expresada con desplazamiento
```

---

### 9.4. Segmentación por lista

```txt
correo directo / email / CRM:
  señal = historial o pertenencia
```

Principio psicológico aplicado:

```txt
compra previa
  → familiaridad
    → confianza
      → mayor probabilidad de respuesta
```

Ejemplo:

```txt
principio: continuidad de relación
manifestación en mail order:
  catálogo enviado a compradores previos

manifestación moderna:
  email personalizado con recomendación basada en compra anterior
```

---

### 9.5. Segmentación por intención

```txt
buscadores / marketplaces / directorios:
  señal = búsqueda activa
```

Principio psicológico aplicado:

```txt
cuando la persona busca,
  no hay que crear interés desde cero;
  hay que reducir incertidumbre y facilitar decisión.
```

Ejemplo:

```txt
principio: claridad ante intención activa
manifestación moderna:
  anuncio de búsqueda que responde exactamente a la consulta
```

En este contexto, un titular misterioso puede fallar. La psicología de búsqueda exige claridad.

---

### 9.6. Segmentación comunitaria

```txt
comunidades / influencers / foros:
  señal = pertenencia y confianza
```

Principio psicológico aplicado:

```txt
la confianza viaja por relaciones compartidas
```

Ejemplo:

```txt
principio: prueba social / confianza del mediador
manifestación antigua:
  clubes de compra o recomendación local

manifestación moderna:
  influencer que presenta un producto a una comunidad que confía en él
```

Aquí el mecanismo psicológico no está sólo en el producto, sino en la relación social.

---

### 9.7. Segmentación algorítmica

```txt
redes sociales / plataformas:
  señal = conducta, contenido, tiempo, interacción
```

Principio psicológico aplicado:

```txt
el algoritmo no crea principios nuevos;
combina señales para presentar estímulos psicológicamente compatibles.
```

Ejemplo:

```txt
principio: curiosidad
manifestación algorítmica:
  hook diseñado para usuarios que interactúan con contenido de misterio,
  comparación o revelación
```

La segmentación algorítmica automatiza la selección contextual del estímulo, pero el mecanismo psicológico sigue siendo humano.

---

## 10. Aplicación en contextos de secciones

La sección define **cómo** se transforma el principio psicológico en una forma recurrente.

### 10.1. Sección de noticias

```yaml
funcion: informar actualidad
principios_psicologicos_dominantes:
  - novedad
  - urgencia
  - relevancia_inmediata
  - amenaza_oportunidad
```

Señal productiva:

```txt
esto acaba de pasar
esto te afecta
esto cambia algo
```

---

### 10.2. Sección de reseñas

```yaml
funcion: ayudar a decidir
principios_psicologicos_dominantes:
  - reduccion_de_riesgo
  - comparacion
  - autoridad
  - prueba
```

Estructura:

```txt
review de producto
  → muestra pros/contras
    → reduce incertidumbre
      → facilita compra
```

---

### 10.3. Sección de guías de compra

```yaml
funcion: orientar elección
principios_psicologicos_dominantes:
  - claridad
  - reduccion_de_esfuerzo
  - jerarquizacion
  - confianza
```

Mecanismo:

```txt
demasiadas opciones
  → fatiga
    → guía estructurada
      → decisión más fácil
```

---

### 10.4. Sección de errores publicitarios

```yaml
funcion: aprender por contraste
principios_psicologicos_dominantes:
  - curiosidad
  - inversion_de_expectativa
  - aprendizaje_por_falla
```

Hook típico:

```txt
“Este anuncio se veía mejor, por eso vendía peor.”
```

Mecanismo:

```txt
contradicción
  → curiosidad
    → atención
      → explicación
```

---

### 10.5. Sección de mecanismos psicológicos

```yaml
funcion: revelar causa oculta
principios_psicologicos_dominantes:
  - curiosidad_explicativa
  - busqueda_de_causalidad
  - deseo_de_entender_lo_invisible
```

Estructura:

```txt
caso visible
  → conducta observada
    → mecanismo psicológico
      → regla transferible
```

---

### 10.6. Sección de historia tecnológica de la publicidad

```yaml
funcion: mostrar evolución histórica
principios_psicologicos_dominantes:
  - continuidad
  - comparacion_antes_despues
  - comprension_de_origen
```

Hook típico:

```txt
“Antes del pixel, estaba el cupón.”
```

Mecanismo:

```txt
equivalencia histórica
  → sorpresa cognitiva
    → transferencia conceptual
```

---

### 10.7. Sección de tiendas físicas / departamentos

```yaml
funcion: organizar búsqueda y comparación
principios_psicologicos_dominantes:
  - reduccion_de_esfuerzo
  - orientacion_espacial
  - intencion_localizada
```

Ejemplo:

```txt
departamento de perfumería
  → agrupa opciones
    → facilita comparación
      → aumenta probabilidad de compra
```

---

## 11. Tabla de principios psicológicos como patrones

| Principio psicológico | Núcleo | Mail advertising | Contexto moderno |
|---|---|---|---|
| Curiosidad | Lo incompleto o sorprendente atrae atención | “Foods shot from guns” | Hook de video, thumbnail, asunto de email |
| Precio como señal de valor | Lo caro puede parecer más valioso | Fórmula de $100,000 | Producto premium, pricing page, luxury branding |
| No apelar a cheapness | La gente quiere bargain, no sentirse pobre | Evitar tratar al comprador como incapaz | Descuento presentado como oportunidad, no como baja categoría |
| Garantía cercana | Confianza aumenta si el garante es próximo | Dealer signed warrant | Reviews locales, seller verified, influencer confiable |
| Pago posterior | Menor riesgo inicial aumenta prueba | “Pay in a week if you like” | Free trial, buy now pay later, returns |
| Comparación abierta | La transparencia aumenta confianza | Invitar a comparar | Comparadores, tablas, reviews, demos |
| Muestra solicitada | Participación voluntaria aumenta compromiso | Sample by request | Lead magnet, demo request, opt-in |
| Personalización | Lo dirigido personalmente aumenta implicación | “For you” / cartas | Email personalizado, retargeting, CRM |
| Exclusividad | Acceso limitado aumenta valor percibido | Oferta especial | Membresía, early access, drops |
| Imagen mental | Visualizar uso aumenta deseo | Descripciones vívidas | Demo video, AR, UGC, before/after |
| Halago / estatus | La persona responde a sentirse capaz o valiosa | Tratarla como quien merece lo mejor | Premium positioning, aspirational branding |

---

## 12. Relación con segmentación y secciones

### 12.1. En segmentación

La segmentación define **dónde**, **cuándo**, **ante quién** y **bajo qué disposición** se activa el principio psicológico.

Ejemplo con curiosidad:

```txt
principio psicológico:
  curiosidad

segmentación temporal:
  curiosidad sobre noticia de último momento en horario matutino

segmentación temática:
  curiosidad técnica en revista especializada

segmentación comunitaria:
  curiosidad sobre secreto interno del grupo

segmentación algorítmica:
  curiosidad optimizada por patrones de retención
```

### 12.2. En secciones

La sección define **cómo** se transforma el principio en una forma recurrente.

Ejemplo con reducción de riesgo:

```txt
principio psicológico:
  reducción de riesgo

sección reviews:
  pros/contras, prueba, comparación

sección guías:
  recomendación estructurada

sección casos:
  ejemplo de decisión correcta/incorrecta

sección marketplace:
  rating, garantía, devolución
```

---

## 13. Modelo completo

```yaml
modelo_principios_psicologicos_patrones_transcontextuales:
  premisa: >
    La naturaleza humana ofrece regularidades relativamente estables. En publicidad,
    esas regularidades pueden formularse como principios psicológicos transferibles.
    Cada principio conserva un núcleo estímulo-mecanismo-reacción, pero puede
    manifestarse de forma distinta según el medio, la sección, la audiencia, la
    segmentación y la realización.

  estructura_base:
    estimulo:
      descripcion: "Configuración publicitaria que activa el mecanismo."
      ejemplos:
        - titular
        - precio
        - garantia
        - muestra
        - oferta
        - comparacion
        - imagen
        - personalizacion

    mecanismo_psicologico:
      descripcion: "Regularidad humana activada por el estímulo."
      ejemplos:
        - curiosidad
        - reduccion_de_riesgo
        - valor_percibido
        - confianza
        - compromiso
        - escasez
        - pertenencia
        - estatus

    reaccion_probable:
      descripcion: "Respuesta esperada del receptor."
      ejemplos:
        - atencion
        - lectura
        - apertura
        - click
        - prueba
        - compra
        - permanencia
        - recomendacion

    adaptacion_contextual:
      descripcion: "Forma concreta que toma el principio en un medio o sección."
      ejemplos:
        - cupón
        - hook
        - subject_line
        - landing_page
        - review
        - display
        - video_demo
        - influencer_recommendation

    validacion:
      descripcion: "Resultado que permite comprobar si el principio funcionó."
      ejemplos:
        - respuesta
        - venta
        - retencion
        - CTR
        - conversion
        - CAC
        - ROAS
        - recompra
```

---

## 14. Fórmulas finales

```txt
Los principios psicológicos son patrones de reacción humana reutilizables.
```

```txt
La técnica cambia; el mecanismo psicológico permanece.
```

```txt
Así como un algoritmo puede implementarse en distintos lenguajes,
un principio psicológico puede implementarse en distintos medios publicitarios.
```

```txt
principio psicológico
  → técnica operativa
    → adaptación contextual
      → manifestación concreta
        → resultado medible
```

Versión compatible con ACCD:

```txt
Un principio psicológico es un núcleo esencificado:
conserva una relación estímulo-mecanismo-reacción,
mientras la fábrica de adaptaciones contextuales lo traduce a medios,
secciones, audiencias y realizaciones distintas.
```
