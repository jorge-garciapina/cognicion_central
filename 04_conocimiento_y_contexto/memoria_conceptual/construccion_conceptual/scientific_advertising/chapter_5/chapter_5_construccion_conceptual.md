# Construcción conceptual del texto

## Chapter 5 — “Headlines”

```yaml
construccion_conceptual:
  texto_raiz:
    id: TEXTO_HOPKINS_CH5_HEADLINES
    titulo: "Chapter 5 — Headlines"
    dominio: publicidad / copywriting / medición / selección de audiencia / titulares
    tipo_de_texto: capítulo_metodológico_publicitario
    funcion_global: >
      Establecer que el titular no existe para atraer a todos, entretener o ser ingenioso,
      sino para seleccionar a las personas correctas, revelarles un interés relevante
      y conseguir que el anuncio sea leído por quienes pueden convertirse en compradores.
```

---

# 1. Núcleo interpretativo

El núcleo del capítulo es:

```txt
El titular funciona como filtro de atención:
no debe atraer indiscriminadamente,
sino llamar sólo a las personas que pueden interesarse en la oferta.

Un buen titular identifica al prospecto correcto,
revela el beneficio o interés relevante,
y permite que el anuncio tenga oportunidad de vender.
```

Formulado como mNode nuclear, usando la estructura normalizada del capítulo 4:

```yaml
orden_textual: 00
mnode_id: MN_NUCLEO_TITULAR_COMO_SELECTOR
tipo_de_unidad: tesis_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
segmento_fuente: "The purpose of a headline is to pick out people you can interest."
formulacion: >
  El titular es el mecanismo que selecciona a los lectores correctos dentro de una multitud,
  revelando a quienes tienen interés potencial que el anuncio contiene algo para ellos.
rol_operativo: estabilizar_tesis_central
funcion_local_en_el_texto:
  - condensar el argumento completo del capítulo
  - definir el titular como selector, no como adorno
  - preparar la diferencia entre atención útil y atención inútil
estructura_interna:
  condicion: "existe una multitud de lectores, pero sólo algunos pueden interesarse en la oferta"
  accion: "usar el titular para llamar a los prospectos correctos"
  objetivo: "lograr que el anuncio sea leído por quienes pueden comprar o responder"
  riesgo_si_falla:
    - atraer_curiosidad_inutil
    - ocultar_el_interes_al_prospecto_correcto
    - perder_la_oportunidad_de_venta
conecta_con:
  - MN_TITULAR_SELECCIONA_INTERESADOS
  - MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO
  - MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
```

La oposición central del capítulo es:

```txt
titular_correcto:
  selecciona prospectos
  revela interés
  llama a las personas adecuadas
  comunica beneficio
  permite que el anuncio sea leído por quien importa
  se valida por retornos medidos

titular_erróneo:
  atrae curiosidad general
  usa ingenio ciego
  oculta el asunto
  busca lectores irrelevantes
  genera atención inútil
  no permite al prospecto reconocer su interés
```

---

# 2. Invariantes de la construcción conceptual

```yaml
invariantes_globales:
  - el anuncio puede ser ignorado; por eso el titular debe ganar la atención correcta
  - no todos los lectores importan; sólo importan quienes pueden interesarse en la oferta
  - la función del titular es seleccionar, no entretener indiscriminadamente
  - un titular ciego puede atraer más curiosidad, pero atraer personas equivocadas
  - las personas deciden a simple vista si algo les interesa
  - el titular debe revelar el interés, no esconderlo
  - la calidad del titular puede multiplicar o hundir los retornos del mismo anuncio
  - los titulares deben probarse mediante retornos con clave
  - distintos públicos responden a distintos tipos de apelación
  - el anunciante debe conocer qué proporción de anuncios dedicar a cada apelación rentable
```

---

# 3. Campo conceptual

```yaml
campo_conceptual:
  interior:
    - titular_como_selector
    - atención_correcta
    - prospecto_interesado
    - titular_revelador
    - titular_ciego
    - llamada_al_publico_correcto
    - analogía_con_titulares_de_periódico
    - lector_apurado
    - anuncio_ignorable
    - medición_de_titulares
    - retornos_con_clave
    - apelaciones_multiples
    - diversidad_de_anuncios
    - proporción_de_apelaciones
    - titular_como_condición_de_venta

  frontera:
    criterios_de_pertenencia:
      - debe tratar sobre la función del titular en publicidad
      - debe conectar titular con selección de audiencia
      - debe distinguir atención útil de atención inútil
      - debe mostrar que el titular revela o esconde un interés
      - debe conectar titulares con retornos medibles

    criterios_de_exclusion:
      - no pertenece si trata el titular como simple adorno literario
      - no pertenece si valora el titular sólo por ingenio o curiosidad
      - no pertenece si busca atraer a todos sin segmentación
      - no pertenece si ignora la medición de respuestas

  envolvente:
    - atención_publicitaria
    - selección_de_audiencia
    - redacción_publicitaria
    - segmentación
    - prueba_de_apelaciones
    - medición_de_respuesta
    - economía_de_la_atención
    - diseño_de_campañas

  vecindad_relevante:
    - clickbait
    - headline_testing
    - A/B_testing
    - copywriting_direct_response
    - segmentación_por_interés
    - clasificación_de_beneficios
    - customer_research
```

---

# 4. Perfil multifamiliar

```yaml
perfil_multifamiliar:
  FAM-Idea:
    peso: muy_alto
    funcion: formular la naturaleza del titular y su diferencia frente a atención general
    ejemplos:
      - el titular selecciona a las personas correctas
      - las personas no leen anuncios por diversión
      - un titular debe revelar el interés

  FAM-Patrón-de-razonamiento:
    peso: alto
    funcion: justificar por qué atraer a muchos no equivale a vender mejor
    ejemplos:
      - si el titular atrae personas no interesadas, la atención es inútil
      - si el prospecto no reconoce su interés, no leerá el anuncio
      - si un titular cambia retornos cinco o diez veces, debe probarse

  FAM-Diseño:
    peso: alto
    funcion: organizar el sistema titular → selección → lectura → retorno
    ejemplos:
      - titular como filtro
      - periódico como sistema de selección por encabezados
      - portfolio de apelaciones para distintos públicos

  FAM-Método:
    peso: muy_alto
    funcion: convertir la escritura de titulares en procedimiento medible
    ejemplos:
      - probar muchos titulares
      - descartar decenas hasta hallar el correcto
      - comparar retornos con clave
      - distribuir anuncios según apelaciones rentables

  FAM-Plan:
    peso: medio
    funcion: organizar el programa operativo del capítulo
    ejemplos:
      - definir función del titular
      - contrastar titular correcto e incorrecto
      - explicar mediante analogía periodística
      - demostrar con retornos
      - extraer principio final: dirigirse sólo a quienes se busca
```

---

# 5. mNodes principales

## 5.1. `MN_ANUNCIO_PUEDE_SER_IGNORADO`

```yaml
orden_textual: 01
mnode_id: MN_ANUNCIO_PUEDE_SER_IGNORADO
tipo_de_unidad: contraste_inicial
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The salesman is there to demand attention. He cannot be ignored. The advertisement can be ignored."
formulacion: >
  A diferencia del vendedor personal, el anuncio puede ser ignorado; por eso necesita
  un titular que consiga audiencia entre las personas correctas.
rol_operativo: establecer_condicion_inicial_del_problema
funcion_local_en_el_texto:
  - diferenciar publicidad de venta personal
  - presentar la atención como problema específico del anuncio
  - preparar la función selectiva del titular
estructura_interna:
  condicion: "el anuncio no está físicamente presente para exigir atención"
  accion: "crear un mecanismo inicial que haga que el lector adecuado decida leer"
  objetivo: "conseguir audiencia voluntaria entre prospectos interesados"
  contraste:
    vendedor_personal:
      - esta_presente
      - exige_atencion
      - no_puede_ser_ignorado_facilmente
    anuncio:
      - puede_ser_ignorado
      - solo_lo_lee_quien_quiere
      - depende_de_un_llamado_inicial
conecta_con:
  - MN_TITULAR_SELECCIONA_INTERESADOS
  - MN_PUBLICIDAD_LEIDA_POR_VOLUNTAD
```

---

## 5.2. `MN_PUBLICIDAD_LEIDA_POR_VOLUNTAD`

```yaml
orden_textual: 02
mnode_id: MN_PUBLICIDAD_LEIDA_POR_VOLUNTAD
tipo_de_unidad: modelo_de_lectura_publicitaria
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The advertisement is read only by interested people who, by their own volition, study what we have to say."
formulacion: >
  El anuncio sólo es leído por personas interesadas que deciden voluntariamente estudiar lo que se les dice.
rol_operativo: definir_condicion_de_lectura_del_anuncio
funcion_local_en_el_texto:
  - mostrar que la atención publicitaria no se impone
  - diferenciar lector interesado de público indiferente
  - preparar el titular como mecanismo de autoselección
estructura_interna:
  condicion: "el lector tiene control sobre si lee o ignora el anuncio"
  accion: "presentar una señal de interés que active la lectura voluntaria"
  objetivo: "atraer a quienes ya tienen posibilidad de interés"
  implicacion:
    - no_se_debe_hablar_a_todos
    - debe_facilitarse_la_autoseleccion_del_prospecto
conecta_con:
  - MN_ANUNCIO_PUEDE_SER_IGNORADO
  - MN_TITULAR_SELECCIONA_INTERESADOS
```

---

## 5.3. `MN_TITULAR_SELECCIONA_INTERESADOS`

```yaml
orden_textual: 03
mnode_id: MN_TITULAR_SELECCIONA_INTERESADOS
tipo_de_unidad: definicion_funcional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The purpose of a headline is to pick out people you can interest."
formulacion: >
  El propósito del titular es seleccionar a las personas que pueden interesarse en la oferta.
rol_operativo: formular_funcion_del_titular
funcion_local_en_el_texto:
  - fijar la función nuclear del titular
  - desplazar el criterio desde atención general hacia atención cualificada
  - fundamentar toda la metodología posterior de titulares
estructura_interna:
  condicion: "existen muchas personas, pero sólo algunas pueden interesarse por la oferta"
  accion: "construir un titular que llame a esas personas y no necesariamente a todas"
  objetivo: "hacer que el prospecto correcto reconozca que el anuncio puede interesarle"
  invariantes:
    - existe_una_multitud_de_posibles_lectores
    - solo_un_porcentaje_puede_estar_interesado
    - el_titular_debe_llamar_a_ese_porcentaje
    - atraer_a_otros_lectores_carece_de_valor_comercial
conecta_con:
  - MN_NUCLEO_TITULAR_COMO_SELECTOR
  - MN_TITULAR_COMO_LLAMADO_NOMINAL
  - MET_CREAR_TITULAR_QUE_LLAMA_SOLO_A_LOS_CORRECTOS
```

---

## 5.4. `MN_TITULAR_COMO_LLAMADO_NOMINAL`

```yaml
orden_textual: 04
mnode_id: MN_TITULAR_COMO_LLAMADO_NOMINAL
tipo_de_unidad: analogia_funcional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "You wish to talk to someone in a crowd... ‘Hey there, Bill Jones’."
formulacion: >
  Un titular funciona como llamar a alguien por su nombre en una multitud: debe captar
  la atención de la persona correcta, no de todos.
rol_operativo: explicar_por_analogía
funcion_local_en_el_texto:
  - hacer visible la lógica selectiva del titular
  - mostrar que la atención valiosa es específica, no masiva
  - convertir el titular en acto de dirección nominal
estructura_interna:
  condicion: "el anunciante quiere hablar con cierto tipo de persona dentro de una multitud"
  accion: "usar un llamado que esa persona reconozca como dirigido a ella"
  objetivo: "activar atención cualificada"
  estructura_metaforica:
    multitud: lectores_potenciales
    llamado_nominal: titular_selectivo
    persona_correcta: prospecto_interesado
    llamado_equivocado: atencion_irrelevante
conecta_con:
  - MN_TITULAR_SELECCIONA_INTERESADOS
  - MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
```

---

## 5.5. `MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL`

```yaml
orden_textual: 05
mnode_id: MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
tipo_de_unidad: contraste_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Perhaps a blind headline or some clever conceit will attract many times as many..."
formulacion: >
  Un titular ciego o ingenioso puede atraer mucha atención, pero esa atención puede
  provenir de personas imposibles para la oferta y ocultar el anuncio a quienes sí importan.
rol_operativo: advertir_contra_falso_criterio_de_atencion
funcion_local_en_el_texto:
  - diferenciar atención bruta de atención útil
  - advertir contra titulares ingeniosos pero no selectivos
  - mostrar que la curiosidad general puede perjudicar la venta
estructura_interna:
  condicion: "un titular puede atraer muchas miradas sin revelar a quién le interesa la oferta"
  accion: "evitar titulares ciegos o meramente ingeniosos cuando ocultan el interés real"
  objetivo: "conseguir lectores relevantes, no curiosos irrelevantes"
  titular_ciego:
    efecto_aparente:
      - atrae_mas_curiosidad
      - genera_mas_lectores_casuales
    defecto:
      - no_revela_la_oferta
      - atrae_sujetos_imposibles
      - oculta_el_interes_al_prospecto_correcto
conecta_con:
  - MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO
  - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
```

---

## 5.6. `MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO`

```yaml
orden_textual: 06
mnode_id: MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO
tipo_de_unidad: inferencia_nuclear
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
segmento_fuente: "But they may consist of mostly impossible subjects for what you have to offer."
formulacion: >
  La atención sólo tiene valor publicitario si proviene de personas que pueden interesarse en la oferta.
rol_operativo: separar_atencion_util_de_atencion_inutil
funcion_local_en_el_texto:
  - transformar la crítica al titular ciego en criterio general
  - fijar la diferencia entre tráfico y prospectos
  - justificar la selección por interés
estructura_interna:
  condicion: "un anuncio busca vender o generar respuesta comercial"
  accion: "evaluar la atención por calidad del lector, no por cantidad bruta"
  objetivo: "optimizar atención cualificada"
  premisas:
    - el_anuncio_busca_vender
    - solo_ciertos_lectores_pueden_interesarse_en_el_producto
    - atraer_lectores_imposibles_no_produce_ventas
  conclusion: "el titular debe optimizar atención cualificada, no atención bruta"
conecta_con:
  - MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
  - MET_PROBAR_TITULARES_POR_RETORNOS
```

## 5.6.1. `MN_PROSPECTO_CORRECTO_NO_RECONOCE_INTERES`

```yaml
orden_textual: 06.1
mnode_id: MN_PROSPECTO_CORRECTO_NO_RECONOCE_INTERES
tipo_de_unidad: riesgo_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "And the people you are after may never realize that the ad refers to something they may want."
formulacion: >
  El mayor riesgo de un titular ciego no es sólo atraer lectores irrelevantes,
  sino impedir que los prospectos correctos reconozcan que el anuncio contiene
  algo que podrían querer.
rol_operativo: identificar_riesgo_de_invisibilidad_ante_el_prospecto_correcto
funcion_local_en_el_texto:
  - completar la crítica al titular ciego mostrando su daño más grave
  - desplazar el problema desde atraer lectores inútiles hacia perder lectores valiosos
  - mostrar que ocultar el interés puede hacer invisible la oferta para quienes sí importan
estructura_interna:
  condicion: "el titular no revela con claridad la relación entre la oferta y el interés del prospecto"
  accion: "evitar titulares que obligan al lector correcto a adivinar si el anuncio le concierne"
  objetivo: "hacer que el prospecto correcto reconozca inmediatamente que el anuncio habla de algo que puede querer"
  riesgo_principal:
    - el_prospecto_correcto_no_identifica_su_interes
    - el_anuncio_pasa_desapercibido_para_quien_si_importa
    - la_oferta_no_llega_a_su_publico_valioso
    - el_titular_pierde_la_oportunidad_de_activar_lectura_relevante
  cadena_de_fallo:
    - titular_ciego_oculta_el_asunto
    - prospecto_correcto_no_reconoce_relacion_con_su_deseo
    - prospecto_correcto_no_lee_el_anuncio
    - el_salesmanship_del_cuerpo_no_tiene_oportunidad_de_actuar
conecta_con:
  - MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
  - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
  - MN_TITULAR_CONDICIONA_TODO_RETORNO
  - MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
```

---

# 6. Analogía con periódicos

## 6.1. `MN_TITULARES_COMO_NOTICIAS`

```yaml
orden_textual: 07
mnode_id: MN_TITULARES_COMO_NOTICIAS
tipo_de_unidad: analogia_periodistica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Headlines on ads are like headlines on news items. Nobody reads a whole newspaper."
formulacion: >
  Los titulares publicitarios funcionan como titulares de noticias: permiten a cada persona
  seleccionar lo que desea leer.
rol_operativo: trasladar_modelo_de_lectura_periodistica_a_publicidad
funcion_local_en_el_texto:
  - explicar cómo las personas filtran información
  - mostrar que el titular permite autoselección
  - reforzar la importancia de no engañar ni ocultar el interés
estructura_interna:
  condicion: "nadie lee todo el periódico ni todos los anuncios"
  accion: "usar encabezados para indicar con claridad el asunto de interés"
  objetivo: "permitir que cada lector seleccione rápidamente lo que le importa"
  estructura_comparativa:
    periodico:
      - nadie_lee_todo
      - cada_lector_busca_secciones_distintas
      - titulares_guian_la_seleccion
    anuncio:
      - nadie_lee_todos_los_anuncios
      - cada_prospecto_busca_su_interes
      - el_titular_debe_revelar_ese_interes
conecta_con:
  - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
  - MN_PERSONAS_DECIDEN_A_SIMPLE_VISTA
```

---

## 6.2. `MN_TITULAR_REVELA_O_CONCEAL_INTEREST`

```yaml
orden_textual: 08
mnode_id: MN_TITULAR_REVELA_O_CONCEAL_INTEREST
tipo_de_unidad: principio_selectivo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "They either conceal or reveal an interest."
formulacion: >
  Un titular puede revelar o esconder un interés; si lo esconde, incluso la persona más
  interesada puede no leer el contenido.
rol_operativo: definir_poder_selectivo_del_titular
funcion_local_en_el_texto:
  - presentar el titular como puerta de entrada o barrera
  - conectar claridad del titular con acceso del prospecto correcto
  - preparar el ejemplo de “Egyptian Psychology”
estructura_interna:
  condicion: "el lector decide qué leer a partir de señales iniciales"
  accion: "hacer que el titular revele el interés real del contenido"
  objetivo: "evitar que el prospecto interesado pase de largo"
  polaridad:
    revelar: "permite reconocer interés y leer"
    ocultar: "impide reconocer interés y bloquea lectura"
conecta_con:
  - MN_TITULARES_COMO_NOTICIAS
  - EJ_MUJER_BELLA_EGYPTIAN_PSYCHOLOGY
  - MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
```

---

## 6.3. `EJ_MUJER_BELLA_EGYPTIAN_PSYCHOLOGY`

```yaml
orden_textual: 09
mnode_id: EJ_MUJER_BELLA_EGYPTIAN_PSYCHOLOGY
tipo_de_unidad: ejemplo_ancla
familia_cognitiva: forma_compuesta
estatus_de_extraccion: textual_explicito
segmento_fuente: "A certain woman was the most beautiful in the city... headline was ‘Egyptian Psychology’."
formulacion: >
  Un contenido de intenso interés puede ser ignorado por su público natural si el titular oculta
  el interés real bajo una fórmula engañosa o irrelevante.
rol_operativo: ejemplificar_titular_que_oculta_interes
funcion_local_en_el_texto:
  - mostrar el costo de un titular mal clasificador
  - evidenciar que el contenido valioso no basta sin titular revelador
  - trasladar la analogía periodística al anuncio
estructura_interna:
  condicion: "existe un contenido muy relevante para una persona específica"
  accion: "titularlo de forma que no revele ese interés"
  objetivo: "mostrar cómo un titular puede bloquear la lectura del público correcto"
  ejemplo:
    contenido: "cierta mujer es la más bella de la ciudad"
    publico_correcto:
      - la_mujer
      - sus_amigos
    titular_erroneo: "Egyptian Psychology"
    resultado: "el público correcto no lee"
conecta_con:
  - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
  - MN_TITULAR_DEBE_TOCAR_INTERES_REAL
```

---

# 7. Modelo del lector

## 7.1. `MN_PERSONAS_SI_LEEN_ANUNCIOS_INTERESANTES`

```yaml
orden_textual: 10
mnode_id: MN_PERSONAS_SI_LEEN_ANUNCIOS_INTERESANTES
tipo_de_unidad: correccion_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "It is commonly said that people do not read advertisements. That is silly, of course."
formulacion: >
  Es falso que las personas no lean anuncios; leen aquellos que, a simple vista,
  parecen ofrecer algo interesante para ellas.
rol_operativo: corregir_creencia_equivocada
funcion_local_en_el_texto:
  - rechazar una idea común sobre la lectura publicitaria
  - mostrar que el problema no es el anuncio en sí, sino la relevancia percibida
  - sostener la función del titular como revelador de interés
estructura_interna:
  condicion: "existe la creencia de que la gente no lee anuncios"
  accion: "corregir la creencia: las personas sí leen anuncios relevantes"
  objetivo: "mostrar que la lectura depende del interés percibido"
  contraste:
    creencia_erronea: "la gente no lee anuncios"
    correccion: "la gente lee anuncios que le prometen algo interesante"
conecta_con:
  - MN_PERSONAS_NO_LEEN_POR_DIVERSION
  - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
```

---

## 7.2. `MN_PERSONAS_NO_LEEN_POR_DIVERSION`

```yaml
orden_textual: 11
mnode_id: MN_PERSONAS_NO_LEEN_POR_DIVERSION
tipo_de_unidad: delimitador_del_receptor
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "But people do not read ads for amusement."
formulacion: >
  Las personas no leen anuncios por diversión; los leen cuando perciben un beneficio o interés propio.
rol_operativo: delimitar_motivo_de_lectura_publicitaria
funcion_local_en_el_texto:
  - excluir entretenimiento como motivación primaria
  - centrar el anuncio en beneficio percibido
  - preparar la regla de mostrar valor en el titular
estructura_interna:
  condicion: "el lector está expuesto a muchos mensajes y no busca publicidad por diversión"
  accion: "mostrar un beneficio o interés reconocible"
  objetivo: "dar razón suficiente para que el lector lea"
  invariantes:
    - el_lector_esta_ocupado
    - el_lector_selecciona_temas
    - el_lector_evita_lo_que_parece_irrelevante
    - el_lector_lee_si_hay_beneficio_percibido
conecta_con:
  - MN_PERSONAS_APURADAS_ELIGEN
  - MN_TITULAR_SELECCIONA_INTERESADOS
```

---

## 7.3. `MN_PERSONAS_APURADAS_ELIGEN`

```yaml
orden_textual: 12
mnode_id: MN_PERSONAS_APURADAS_ELIGEN
tipo_de_unidad: condicion_de_atencion_limitada
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "People are hurried... They skip three-fourths of the reading matter..."
formulacion: >
  Las personas están ocupadas, tienen demasiado que leer y saltan gran parte del material
  disponible; por eso el titular debe mostrar de inmediato que vale la pena.
rol_operativo: establecer_condicion_de_atencion_limitada
funcion_local_en_el_texto:
  - explicar por qué el titular debe ser claro y relevante de inmediato
  - ubicar al lector como selector veloz
  - justificar el rechazo de charla comercial sin valor aparente
estructura_interna:
  condicion: "el lector está apurado y saturado de información"
  accion: "hacer visible desde el titular que el anuncio vale su tiempo"
  objetivo: "evitar que el anuncio sea saltado sin lectura"
  lector:
    - apurado
    - saturado_de_lectura
    - selectivo
    - evita_aburrimiento
conecta_con:
  - MN_PERSONAS_NO_LEEN_POR_DIVERSION
  - MET_CREAR_TITULAR_QUE_MUESTRA_BENEFICIO
```

---

## 7.4. `MN_LECTOR_ELIGE_TEMAS_COMO_COMPANIAS`

```yaml
orden_textual: 13
mnode_id: MN_LECTOR_ELIGE_TEMAS_COMO_COMPANIAS
tipo_de_unidad: modelo_de_autonomia_del_lector
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "But in print they choose their own companions, their own subjects."
formulacion: >
  En texto impreso, las personas eligen sus propios temas y compañías; no toleran aburrimiento,
  jactancia o asuntos irrelevantes como quizá lo harían en una conversación social.
rol_operativo: explicar_autonomia_del_lector_impreso
funcion_local_en_el_texto:
  - reforzar que el lector no está obligado a escuchar
  - explicar la diferencia entre interacción social y lectura impresa
  - sostener la necesidad de beneficio o entretenimiento real
estructura_interna:
  condicion: "en impresión, el lector puede abandonar inmediatamente lo irrelevante"
  accion: "presentar un tema, beneficio o interés elegible por el lector"
  objetivo: "ser elegido voluntariamente como asunto de lectura"
  contraste:
    conversacion_social: "puede haber escucha por cortesía"
    lectura_impresa: "se elige o descarta sin obligación"
conecta_con:
  - MN_PERSONAS_APURADAS_ELIGEN
  - MN_PERSONAS_NO_LEEN_POR_DIVERSION
```

---

## 7.5. `MET_CREAR_TITULAR_QUE_MUESTRA_BENEFICIO`

```yaml
orden_textual: 14
mnode_id: MET_CREAR_TITULAR_QUE_MUESTRA_BENEFICIO
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
segmento_fuente: "They want economy, beauty, labor savings, good things to eat and wear... headline or picture tells them."
formulacion: >
  El titular o la imagen deben mostrar de inmediato el beneficio que el lector puede querer:
  economía, belleza, ahorro de trabajo, comida, ropa u otro valor específico.
rol_operativo: convertir_modelo_del_lector_en_criterio_de_redaccion
funcion_local_en_el_texto:
  - convertir la comprensión del lector en método de titular
  - mostrar que el beneficio debe aparecer antes de pedir lectura
  - preparar la importancia de probar distintas apelaciones
estructura_interna:
  condicion: "el lector busca beneficios propios y descarta lo que no los muestra"
  accion: "hacer visible el beneficio relevante en el titular o la imagen"
  objetivo: "activar reconocimiento inmediato de interés"
  beneficios_posibles:
    - economia
    - belleza
    - ahorro_de_trabajo
    - comida
    - vestido
    - limpieza
    - salud
conecta_con:
  - MN_PERSONAS_APURADAS_ELIGEN
  - DIS_SISTEMA_APELACIONES_MEDIDAS
```

---

# 8. Método de trabajo con titulares

## 8.1. `MET_DEDICAR_TIEMPO_SUPERIOR_AL_TITULAR`

```yaml
orden_textual: 15
mnode_id: MET_DEDICAR_TIEMPO_SUPERIOR_AL_TITULAR
tipo_de_unidad: metodo_principal
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "The writer of this chapter spends far more time on headlines than on writing."
formulacion: >
  El titular merece más tiempo que la redacción del cuerpo, porque de él depende que
  el anuncio consiga audiencia.
rol_operativo: establecer_prioridad_de_produccion
funcion_local_en_el_texto:
  - traducir importancia del titular en disciplina de trabajo
  - legitimar el descarte de muchos titulares
  - preparar la medición de retornos por titular
estructura_interna:
  condicion: "el retorno del anuncio depende de atraer al lector correcto"
  accion: "dedicar horas, generar muchas opciones y descartar titulares débiles"
  objetivo: "seleccionar un titular capaz de conseguir la audiencia correcta"
  operaciones:
    - escribir_muchos_titulares
    - descartar_decenas
    - buscar_el_titular_correcto
    - no_dar_por_bueno_el_primer_enfoque
conecta_con:
  - MN_TITULAR_CONDICIONA_TODO_RETORNO
  - MET_PROBAR_TITULARES_POR_RETORNOS
```

---

## 8.2. `MN_TITULAR_CONDICIONA_TODO_RETORNO`

```yaml
orden_textual: 16
mnode_id: MN_TITULAR_CONDICIONA_TODO_RETORNO
tipo_de_unidad: tesis_economica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "For the entire return from an ad depends on attracting the right sort of readers."
formulacion: >
  Todo el retorno de un anuncio depende de atraer al tipo correcto de lectores; el mejor
  salesmanship no tiene oportunidad si no consigue audiencia.
rol_operativo: formular_importancia_economica_del_titular
funcion_local_en_el_texto:
  - mostrar que el titular condiciona la posibilidad de venta
  - diferenciar trabajo del titular y trabajo del cuerpo del anuncio
  - justificar la inversión superior de tiempo en titulares
estructura_interna:
  condicion: "el cuerpo del anuncio sólo puede vender si antes obtiene lectura"
  accion: "hacer que el titular consiga una audiencia cualificada"
  objetivo: "dar oportunidad al salesmanship del anuncio"
  cadena:
    titular: consigue_hearing
    cuerpo_del_anuncio: vende_una_vez_obtenida_la_atencion
    falla: sin_titular_correcto_no_hay_lectura_ni_venta
conecta_con:
  - MN_NUCLEO_TITULAR_COMO_SELECTOR
  - MET_DEDICAR_TIEMPO_SUPERIOR_AL_TITULAR
```

---

## 8.3. `MET_PROBAR_TITULARES_POR_RETORNOS`

```yaml
orden_textual: 17
mnode_id: MET_PROBAR_TITULARES_POR_RETORNOS
tipo_de_unidad: metodo_nuclear
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "The identical ad run with various headlines differs tremendously in its returns."
formulacion: >
  Los titulares deben compararse mediante retornos con clave, porque el mismo anuncio
  puede producir resultados muy distintos sólo por cambiar el titular.
rol_operativo: medir_apelaciones_de_titulares
funcion_local_en_el_texto:
  - convertir el juicio sobre titulares en medición
  - mostrar que no basta preferir un titular por gusto
  - preparar el sistema de apelaciones rentables
estructura_interna:
  condicion: "un mismo anuncio puede variar radicalmente según el titular"
  accion: "publicar variantes y comparar retornos con clave"
  objetivo: "identificar qué apelación paga mejor"
  operaciones:
    - publicar_variantes
    - medir_retornos
    - comparar_resultados
    - identificar_apelaciones_superiores
    - registrar_tipo_de_titular_usado
conecta_con:
  - MN_CAMBIO_TITULAR_MULTIPLICA_RETORNOS
  - DIS_SISTEMA_APELACIONES_MEDIDAS
```

---

## 8.4. `MN_CAMBIO_TITULAR_MULTIPLICA_RETORNOS`

```yaml
orden_textual: 18
mnode_id: MN_CAMBIO_TITULAR_MULTIPLICA_RETORNOS
tipo_de_unidad: evidencia_inferencial
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "A change in headlines [can] multiply returns from five or ten times over."
formulacion: >
  Un cambio de titular puede multiplicar los retornos cinco, diez o incluso muchas veces,
  por lo que el titular debe tratarse como variable crítica.
rol_operativo: justificar_experimentacion_con_titulares
funcion_local_en_el_texto:
  - demostrar la magnitud económica del titular
  - justificar pruebas sistemáticas
  - reforzar la centralidad metodológica del capítulo
estructura_interna:
  condicion: "el anuncio puede ser idéntico salvo por el titular"
  accion: "comparar retornos generados por titulares distintos"
  objetivo: "detectar el titular o apelación que multiplica resultados"
  inferencia:
    premisas:
      - el_anuncio_puede_permanecer_casi_identico
      - el_titular_cambia
      - los_retornos_varian_enormemente
    conclusion: "si una variable altera radicalmente los retornos, debe probarse y optimizarse"
conecta_con:
  - MET_PROBAR_TITULARES_POR_RETORNOS
  - MN_TITULAR_CONDICIONA_TODO_RETORNO
```

---

# 9. Sistema de apelaciones

## 9.1. `DIS_SISTEMA_APELACIONES_MEDIDAS`

```yaml
orden_textual: 19
mnode_id: DIS_SISTEMA_APELACIONES_MEDIDAS
tipo_de_unidad: diseño_metodologico
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_implicito
segmento_fuente: "The product has many uses... Thus we learn what type of headline has the most widespread appeal."
formulacion: >
  Un producto puede tener varias apelaciones posibles; los titulares permiten medir qué
  interés busca cada clase de lector y en qué proporción conviene usar cada apelación.
rol_operativo: organizar_relacion_producto_atributos_publicos_retornos
funcion_local_en_el_texto:
  - explicar por qué se registran titulares junto con retornos
  - mostrar que distintas cualidades del producto atraen a distintos públicos
  - convertir titulares en sistema de investigación de deseos
estructura_interna:
  condicion: "un producto tiene múltiples usos o beneficios potenciales"
  accion: "probar titulares que destaquen distintas cualidades"
  objetivo: "conocer qué cualidad busca la mayor parte de lectores y cuáles siguen siendo rentables"
  componentes:
    - producto_con_multiples_usos
    - titulares_por_apelacion
    - clases_de_lectores
    - retornos_medidos
    - apelacion_principal
    - apelaciones_secundarias_rentables
    - proporcion_de_anuncios_por_apelacion
conecta_con:
  - MET_PROBAR_TITULARES_POR_RETORNOS
  - MN_NO_DESCUIDAR_CAMPOS_RENTABLES
```

---

## 9.2. `MN_NO_DESCUIDAR_CAMPOS_RENTABLES`

```yaml
orden_textual: 20
mnode_id: MN_NO_DESCUIDAR_CAMPOS_RENTABLES
tipo_de_unidad: matiz_estrategico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "One sort of appeal may bring half the returns of another, yet be important enough to be profitable. We overlook no field that pays."
formulacion: >
  Una apelación puede generar menos retornos que otra y aun así ser suficientemente rentable
  como para no abandonarla.
rol_operativo: equilibrar_apelacion_dominante_y_apelaciones_secundarias
funcion_local_en_el_texto:
  - evitar que la medición se convierta en concentración ciega en una sola apelación
  - mostrar que rentabilidad secundaria también importa
  - preparar la necesidad de variedad de anuncios
estructura_interna:
  condicion: "distintas apelaciones generan retornos de distinta magnitud"
  accion: "conservar las apelaciones que pagan aunque no sean las principales"
  objetivo: "cubrir todos los campos rentables"
  estructura:
    apelacion_principal:
      - mayor_retorno
      - mayor_proporcion_de_anuncios
    apelacion_secundaria:
      - menor_retorno
      - aun_rentable
      - no_debe_ser_olvidada
conecta_con:
  - DIS_SISTEMA_APELACIONES_MEDIDAS
  - MET_VARIAR_ANUNCIOS_SEGUN_APELACION
```

---

## 9.3. `MET_VARIAR_ANUNCIOS_SEGUN_APELACION`

```yaml
orden_textual: 21
mnode_id: MET_VARIAR_ANUNCIOS_SEGUN_APELACION
tipo_de_unidad: metodo_de_portafolio
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "For this same reason we employ a vast variety of ads... We wish to reach them all."
formulacion: >
  Conviene usar una gran variedad de anuncios, porque distintos públicos responden a distintos
  enfoques y las circulaciones se superponen.
rol_operativo: crear_portafolio_de_anuncios
funcion_local_en_el_texto:
  - traducir el sistema de apelaciones a planificación de campaña
  - justificar variedad de anuncios en múltiples revistas
  - ampliar cobertura sin abandonar medición
estructura_interna:
  condicion: "hay públicos superpuestos y distintas formas de enfoque que atraen a distintos porcentajes"
  accion: "usar variedad de anuncios y titulares por medio o publicación"
  objetivo: "alcanzar todos los públicos rentables"
  operaciones:
    - diseñar_varios_anuncios
    - usar_distintos_titulares
    - cubrir_varios_intereses_rentables
    - adaptar_enfoques_por_publicacion
conecta_con:
  - MN_NO_DESCUIDAR_CAMPOS_RENTABLES
  - DIS_SISTEMA_APELACIONES_MEDIDAS
```

---

# 10. Ejemplos de titulares y apelaciones

## 10.1. `EJ_SOAP_APPEALS`

```yaml
orden_textual: 22
mnode_id: EJ_SOAP_APPEALS
tipo_de_unidad: ejemplo_comparativo_de_apelaciones
familia_cognitiva: forma_compuesta
estatus_de_extraccion: textual_explicito
segmento_fuente: "On a soap... ‘Keep Clean’... ‘No animal fat’... ‘It floats’... beauty or complexion."
formulacion: >
  En jabón, titulares como “Keep Clean” o “No animal fat” pueden atraer poco,
  mientras que “It floats” o apelaciones a belleza y complexión pueden atraer mucho más.
rol_operativo: ejemplificar_diferencia_de_apelacion
funcion_local_en_el_texto:
  - mostrar que distintos atributos del mismo producto activan niveles distintos de interés
  - hacer concreta la necesidad de probar titulares
  - evidenciar que lo obvio para el anunciante puede no ser lo más atractivo para el lector
estructura_interna:
  condicion: "un producto posee múltiples atributos posibles para titular"
  accion: "comparar qué beneficio genera mayor respuesta"
  objetivo: "identificar apelaciones más potentes para el público"
  producto: jabon
  apelaciones:
    higiene_general: "Keep Clean"
    composicion: "No animal fat"
    propiedad_diferenciadora: "It floats"
    belleza_complexion: "posible apelación más potente"
conecta_con:
  - DIS_SISTEMA_APELACIONES_MEDIDAS
  - MET_PROBAR_TITULARES_POR_RETORNOS
```

---

## 10.2. `EJ_AUTOMOBILE_UNIVERSAL_JOINT_VS_SPORT_BODY`

```yaml
orden_textual: 23
mnode_id: EJ_AUTOMOBILE_UNIVERSAL_JOINT_VS_SPORT_BODY
tipo_de_unidad: ejemplo_comparativo_de_apelaciones
familia_cognitiva: forma_compuesta
estatus_de_extraccion: textual_explicito
segmento_fuente: "An automobile ad might refer... good universal joint... ‘The Sportiest of Sport Bodies’."
formulacion: >
  Un titular sobre una junta universal puede fallar porque pocos compradores piensan en ella,
  mientras que un titular sobre carrocería deportiva puede superar al otro cincuenta a uno.
rol_operativo: mostrar_diferencia_extrema_de_interes
funcion_local_en_el_texto:
  - mostrar que el atributo técnico no siempre coincide con el deseo del comprador
  - reforzar que el titular debe tocar el interés real
  - evidenciar magnitudes extremas de diferencia entre apelaciones
estructura_interna:
  condicion: "el anunciante puede elegir entre un atributo técnico y una apelación aspiracional"
  accion: "probar cuál de ambos titulares atrae al comprador real"
  objetivo: "evitar titulares técnicamente ciertos pero comercialmente débiles"
  producto: automovil
  titular_tecnico: "good universal joint"
  problema: "pocos compradores piensan en eso"
  titular_aspiracional: "The Sportiest of Sport Bodies"
  resultado: "puede superar 50 a 1"
conecta_con:
  - MN_CAMBIO_TITULAR_MULTIPLICA_RETORNOS
  - MN_TITULAR_DEBE_TOCAR_INTERES_REAL
```

---

## 10.3. `MN_TITULAR_DEBE_TOCAR_INTERES_REAL`

```yaml
orden_textual: 24
mnode_id: MN_TITULAR_DEBE_TOCAR_INTERES_REAL
tipo_de_unidad: criterio_de_apelacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
segmento_fuente: "The appeals we like best will rarely prove best... So we learn on each line by experiment."
formulacion: >
  El titular debe tocar el interés que realmente mueve al comprador, no el atributo que
  el anunciante considera interesante desde su propia perspectiva.
rol_operativo: formular_criterio_de_apelacion
funcion_local_en_el_texto:
  - extraer el principio común de los ejemplos de jabón y automóvil
  - separar gusto del anunciante de deseo del público
  - justificar aprendizaje por experimento en cada línea
estructura_interna:
  condicion: "el anunciante no conoce por intuición suficiente el promedio de deseos del público"
  accion: "aprender por experimento qué apelación responde"
  objetivo: "alinear titular con deseo real del comprador"
  advertencia:
    - las_apelaciones_preferidas_por_el_anunciante_no_suelen_ser_las_mejores
    - se_debe_aprender_en_cada_linea_por_experimento
conecta_con:
  - EJ_SOAP_APPEALS
  - EJ_AUTOMOBILE_UNIVERSAL_JOINT_VS_SPORT_BODY
  - MET_PROBAR_TITULARES_POR_RETORNOS
```

---

# 11. Principio final

## 11.1. `MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS`

```yaml
orden_textual: 25
mnode_id: MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
tipo_de_unidad: regla_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Address the people you seek, and them only."
formulacion: >
  Diríjase a las personas que busca, y sólo a ellas.
rol_operativo: condensar_regla_terminal
funcion_local_en_el_texto:
  - cerrar el capítulo con una regla de selección
  - condensar la función del titular como llamado específico
  - rechazar la aspiración de atraer a todos
estructura_interna:
  condicion: "hay millones de lectores, pero sólo un porcentaje interesa"
  accion: "dirigir el titular al porcentaje buscado"
  objetivo: "maximizar lectura cualificada y evitar atención irrelevante"
  invariantes:
    - hay_una_multitud_de_lectores
    - solo_un_porcentaje_interesa
    - el_titular_debe_llamar_a_ese_porcentaje
    - el_anuncio_no_debe_esperar_que_todos_lean_para_descubrir_si_les_interesa
conecta_con:
  - MN_TITULAR_SELECCIONA_INTERESADOS
  - MN_PERSONAS_DECIDEN_A_SIMPLE_VISTA
  - MN_NUCLEO_TITULAR_COMO_SELECTOR
```

---

## 11.2. `MN_PERSONAS_DECIDEN_A_SIMPLE_VISTA`

```yaml
orden_textual: 26
mnode_id: MN_PERSONAS_DECIDEN_A_SIMPLE_VISTA
tipo_de_unidad: fundamento_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "They will decide at a glance — by your headline or your pictures."
formulacion: >
  Las personas no leerán el anuncio para descubrir si les interesa; decidirán de un vistazo,
  por el titular o la imagen.
rol_operativo: establecer_condicion_final_de_lectura
funcion_local_en_el_texto:
  - justificar la regla terminal
  - reforzar que el titular debe revelar interés inmediatamente
  - cerrar el capítulo con la economía de la decisión visual
estructura_interna:
  condicion: "el lector no invertirá esfuerzo previo para averiguar relevancia"
  accion: "hacer que titular o imagen comuniquen interés a simple vista"
  objetivo: "evitar que el prospecto descarte el anuncio antes de reconocer su valor"
  mecanismo:
    - vistazo
    - titular
    - imagen
    - decision_inmediata
conecta_con:
  - MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
  - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
```

---

# 12. Relaciones conceptuales principales

```yaml
relaciones_conceptuales:
  - origen: MN_ANUNCIO_PUEDE_SER_IGNORADO
    tipo: justifica_necesidad_de
    destino: MN_TITULAR_SELECCIONA_INTERESADOS

  - origen: MN_PUBLICIDAD_LEIDA_POR_VOLUNTAD
    tipo: refuerza
    destino: MN_TITULAR_SELECCIONA_INTERESADOS

  - origen: MN_TITULAR_SELECCIONA_INTERESADOS
    tipo: se_explica_por
    destino: MN_TITULAR_COMO_LLAMADO_NOMINAL

  - origen: MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
    tipo: contrasta_con
    destino: MN_TITULAR_SELECCIONA_INTERESADOS

  - origen: MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO
    tipo: fundamenta
    destino: MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL

  - origen: MN_TITULARES_COMO_NOTICIAS
    tipo: analogia_de
    destino: MN_TITULAR_SELECCIONA_INTERESADOS

  - origen: MN_TITULAR_REVELA_O_CONCEAL_INTEREST
    tipo: desarrolla
    destino: MN_TITULARES_COMO_NOTICIAS

  - origen: EJ_MUJER_BELLA_EGYPTIAN_PSYCHOLOGY
    tipo: ejemplifica
    destino: MN_TITULAR_REVELA_O_CONCEAL_INTEREST

  - origen: MN_PERSONAS_SI_LEEN_ANUNCIOS_INTERESANTES
    tipo: corrige
    destino: "la_gente_no_lee_anuncios"

  - origen: MN_PERSONAS_NO_LEEN_POR_DIVERSION
    tipo: delimita
    destino: MN_PERSONAS_SI_LEEN_ANUNCIOS_INTERESANTES

  - origen: MN_PERSONAS_APURADAS_ELIGEN
    tipo: justifica
    destino: MET_CREAR_TITULAR_QUE_MUESTRA_BENEFICIO

  - origen: MET_DEDICAR_TIEMPO_SUPERIOR_AL_TITULAR
    tipo: operacionaliza
    destino: MN_TITULAR_CONDICIONA_TODO_RETORNO

  - origen: MET_PROBAR_TITULARES_POR_RETORNOS
    tipo: valida
    destino: MN_CAMBIO_TITULAR_MULTIPLICA_RETORNOS

  - origen: MN_CAMBIO_TITULAR_MULTIPLICA_RETORNOS
    tipo: justifica
    destino: MET_PROBAR_TITULARES_POR_RETORNOS

  - origen: MET_PROBAR_TITULARES_POR_RETORNOS
    tipo: produce
    destino: DIS_SISTEMA_APELACIONES_MEDIDAS

  - origen: DIS_SISTEMA_APELACIONES_MEDIDAS
    tipo: organiza
    destino: MET_VARIAR_ANUNCIOS_SEGUN_APELACION

  - origen: EJ_SOAP_APPEALS
    tipo: instancia_de
    destino: DIS_SISTEMA_APELACIONES_MEDIDAS

  - origen: EJ_AUTOMOBILE_UNIVERSAL_JOINT_VS_SPORT_BODY
    tipo: instancia_de
    destino: DIS_SISTEMA_APELACIONES_MEDIDAS

  - origen: MN_TITULAR_DEBE_TOCAR_INTERES_REAL
    tipo: sintetiza
    destino:
      - EJ_SOAP_APPEALS
      - EJ_AUTOMOBILE_UNIVERSAL_JOINT_VS_SPORT_BODY

  - origen: MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
    tipo: condensa
    destino: MN_NUCLEO_TITULAR_COMO_SELECTOR
```

---

# 13. Modelos estructurales derivados

## 13.1. Modelo 1: titular como filtro selectivo

```yaml
modelo_id: MOD_TITULAR_COMO_FILTRO_SELECTIVO
estatus: modelo_analitico_derivado
formulacion: >
  El titular filtra una multitud de lectores para seleccionar sólo a quienes pueden
  estar interesados en la oferta.
cadena:
  multitud_de_lectores:
  titular:
  reconocimiento_de_interes:
  lectura_del_anuncio:
  posibilidad_de_venta:
```

Fórmula:

```txt
multitud
  → titular_selectivo
    → prospecto_reconoce_interés
      → lee_anuncio
        → posibilidad_de_venta
```

---

## 13.2. Modelo 2: titular como variable de retorno

```yaml
modelo_id: MOD_TITULAR_COMO_VARIABLE_DE_RETORNO
estatus: modelo_analitico_derivado
formulacion: >
  El titular es una variable crítica de rendimiento: el mismo anuncio con titulares
  distintos puede producir retornos radicalmente diferentes.
cadena:
  mismo_anuncio:
  titulares_distintos:
  retornos_medidos:
  comparación:
  apelación_superior:
  distribución_de_campaña:
```

Fórmula:

```txt
mismo_anuncio
  + titulares_distintos
    → retornos_distintos
      → identificación_de_apelación
        → uso_proporcional_de_enfoques
```

---

## 13.3. Modelo 3: sistema de apelaciones múltiples

```yaml
modelo_id: MOD_APELACIONES_MULTIPLES
estatus: modelo_analitico_derivado
formulacion: >
  Un producto puede interesar por distintas razones; cada titular prueba una apelación
  y permite distribuir la campaña entre públicos rentables.
estructura:
  producto:
    atributos_o_beneficios:
      - beneficio_1
      - beneficio_2
      - beneficio_3
  titulares:
    - titular_apelacion_1
    - titular_apelacion_2
    - titular_apelacion_3
  públicos:
    - publico_1
    - publico_2
    - publico_3
  medición:
    - retorno_por_titular
    - rentabilidad_por_apelacion
  decisión:
    - priorizar_apelacion_mayor
    - conservar_apelaciones_secundarias_rentables
```

---

# 14. Construcción conceptual normalizada

```yaml
construccion_conceptual_normalizada:
  id: CC_HOPKINS_CH5_HEADLINES
  titulo: "Headlines como sistema de selección de prospectos"

  nucleo_interpretativo:
    formulacion: >
      El titular es el mecanismo que permite que un anuncio sea leído por las personas
      correctas. No debe atraer curiosidad general ni entretener, sino revelar de inmediato
      un interés relevante para el prospecto. Como las personas deciden a simple vista
      qué leer, el titular determina si el mejor salesmanship tendrá oportunidad de actuar.
      Por eso los titulares deben escribirse, probarse, compararse y distribuirse según
      retornos reales.

  tesis_principal:
    - el titular selecciona personas interesadas
    - atraer a muchos no sirve si no son prospectos posibles
    - el titular debe revelar el interés, no esconderlo
    - los lectores no leen anuncios por diversión
    - el rendimiento del anuncio depende en gran medida del titular
    - los titulares deben medirse por retornos con clave

  subtesis:
    - la publicidad es ignorable, a diferencia del vendedor personal
    - el titular cumple la función de llamar al individuo correcto en una multitud
    - los titulares de anuncios funcionan como titulares de noticias
    - el mismo anuncio puede multiplicar retornos al cambiar el titular
    - un producto puede tener varias apelaciones rentables
    - conviene usar variedad de anuncios para alcanzar distintos intereses
    - el anunciante debe dirigirse sólo a quienes busca

  mnodes_nucleares:
    - MN_NUCLEO_TITULAR_COMO_SELECTOR
    - MN_TITULAR_SELECCIONA_INTERESADOS
    - MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
    - MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO
    - MN_TITULAR_REVELA_O_CONCEAL_INTEREST
    - MN_TITULAR_CONDICIONA_TODO_RETORNO
    - MN_DIRIGIRSE_SOLO_A_LOS_BUSCADOS

  mnodes_de_soporte:
    - MN_ANUNCIO_PUEDE_SER_IGNORADO
    - MN_PUBLICIDAD_LEIDA_POR_VOLUNTAD
    - MN_TITULAR_COMO_LLAMADO_NOMINAL
    - MN_TITULARES_COMO_NOTICIAS
    - EJ_MUJER_BELLA_EGYPTIAN_PSYCHOLOGY
    - MN_PERSONAS_SI_LEEN_ANUNCIOS_INTERESANTES
    - MN_PERSONAS_NO_LEEN_POR_DIVERSION
    - MN_PERSONAS_APURADAS_ELIGEN
    - MET_CREAR_TITULAR_QUE_MUESTRA_BENEFICIO
    - MET_DEDICAR_TIEMPO_SUPERIOR_AL_TITULAR
    - MET_PROBAR_TITULARES_POR_RETORNOS
    - DIS_SISTEMA_APELACIONES_MEDIDAS
    - MET_VARIAR_ANUNCIOS_SEGUN_APELACION

  regla_operativa:
    formulacion: >
      No escriba titulares para atraer a todos. Escriba titulares que llamen con claridad
      a las personas que pueden interesarse en la oferta, revelen el beneficio relevante
      y pruebe distintas apelaciones hasta saber cuál produce retornos rentables.

  criterio_de_validacion:
    - un titular es válido si permite al prospecto correcto reconocer su interés
    - un titular es débil si atrae atención no cualificada
    - una apelación debe conservarse si produce retornos rentables, aunque no sea la principal
    - la calidad de un titular se valida por retornos, no por gusto personal o ingenio
```

---

# 15. Superficie de transferencia

```yaml
superficie_de_transferencia:
  nucleo_preservable:
    - titular_como_selector_de_prospectos
    - atención_cualificada_vs_atención_bruta
    - revelar_interés_en_lugar_de_ocultarlo
    - lector_apurado_y_selectivo
    - prueba_de_titulares_por_retornos
    - múltiples_apelaciones_rentables

  variacion_legitima:
    video_corto:
      puede:
        - abrir con contraste: "un titular no busca que todos miren"
        - usar analogía de llamar a alguien por su nombre en una multitud
        - cerrar con fórmula: "atraer a todos es perder precisión"
      no_debe:
        - reducir el capítulo a "haz titulares llamativos"

    carousel:
      puede:
        - separar láminas por función: filtro, error, analogía, prueba, apelaciones
        - mostrar grafo: multitud → titular → prospecto → lectura → retorno
        - comparar titular ciego vs titular selectivo
      no_debe:
        - presentar titulares como simple creatividad verbal

    clase:
      puede:
        - explicar titulares como economía de atención
        - hacer ejercicio de probar apelaciones para un producto
        - analizar ejemplos jabón/automóvil
      no_debe:
        - omitir medición de retornos

    ensayo:
      puede:
        - conectar con segmentación, A/B testing y direct response
        - analizar la diferencia entre atención bruta y atención cualificada
      no_debe:
        - interpretar el capítulo como defensa de clickbait
```

---

# 16. Síntesis final

La construcción conceptual del capítulo puede condensarse así:

```txt
El titular es un mecanismo de selección.

El anuncio puede ser ignorado, y las personas no leen anuncios por diversión.
Leen aquello que, a simple vista, parece contener algo para ellas.
Por eso, el titular debe llamar a los prospectos correctos, como si se llamara
a una persona específica dentro de una multitud.

Un titular ciego o ingenioso puede atraer a muchos, pero si atrae personas
irrelevantes o esconde el interés al prospecto real, fracasa.

El titular determina si el anuncio tendrá oportunidad de vender.
Por eso debe escribirse con enorme cuidado, probarse mediante retornos con clave,
compararse contra alternativas y adaptarse a distintas apelaciones rentables.
```

Fórmula mínima:

```txt
titular
  → selección_de_prospecto
    → reconocimiento_de_interés
      → lectura_del_anuncio
        → posibilidad_de_venta
          → retorno_medido
```

Y la regla terminal:

```txt
Diríjase a las personas que busca, y sólo a ellas.
```
