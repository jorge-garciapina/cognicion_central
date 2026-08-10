# chapter_2_procesamiento_estructural

**Texto raíz:** `chapter_2.md`  
**Capítulo:** Chapter 2 — _Just Salesmanship_  
**Tipo de documento:** paso_1_procesamiento_estructural  
**Dominio:** publicidad / ventas / redacción publicitaria / comunicación persuasiva  
**Función global:** establecer la concepción correcta de la publicidad como venta multiplicada, evaluada por estándares de vendedor y no por criterios literarios, estéticos o de entretenimiento.

---

# 0. Núcleo estructural provisional

Este capítulo establece una tesis directa:

```txt
Publicidad = venta en forma impresa / venta multiplicada.
```

El objetivo estructural del capítulo es corregir una concepción equivocada:

```txt
publicidad como escritura bonita / entretenimiento / arte literario / exhibición creativa
```

y sustituirla por:

```txt
publicidad como venta medida por resultados reales.
```

```yaml
nucleo_interpretativo_provisional:
  formulacion: >
    La publicidad debe entenderse como venta. Su finalidad es producir ventas
    reales, no entretener, impresionar, exhibir estilo ni mantener un nombre ante
    el público. Por eso toda decisión publicitaria debe juzgarse como se juzgaría
    una acción de un vendedor frente a un comprador real.

  oposicion_central:
    publicidad_como_venta:
      - busca ventas
      - se mide por resultados
      - habla al comprador
      - responde a necesidades
      - evita adornos que distraen
      - actúa como vendedor competente

    publicidad_como_exhibicion:
      - busca aplauso
      - busca entretenimiento
      - se centra en estilo literario
      - intenta impresionar
      - olvida al comprador
      - complace al vendedor o redactor
```

Fórmula compacta:

```txt
publicidad_correcta
  = venta_impresa
  = vendedor_multiplicado
  = comunicación orientada a comprador real
  = resultado medido en ventas
```

---

# 1. Texto raíz

```yaml
texto_raiz:
  texto_id: TEXTO_HOPKINS_CH2_JUST_SALESMANSHIP
  titulo: "Chapter 2 — Just Salesmanship"
  dominio: publicidad / ventas / redacción publicitaria / comunicación persuasiva
  tipo_de_fuente: capitulo_expositivo_normativo
  funcion_global: >
    Establecer la concepción correcta de la publicidad como venta multiplicada,
    evaluada por estándares de vendedor y no por criterios literarios,
    estéticos o de entretenimiento.
```

---

# 2. Secuencia lineal de mNodes detectados

---

## 00. `MN_TITULO_JUST_SALESMANSHIP`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_JUST_SALESMANSHIP
tipo_de_unidad: titulo_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Just Salesmanship"
formulacion: "La publicidad debe entenderse simplemente como venta."
rol_operativo: condensar_la_concepcion_correcta_del_capitulo
funcion_local_en_el_texto:
  - anunciar el principio central
  - reducir la publicidad a su función comercial básica
  - preparar la oposición contra publicidad como literatura, espectáculo o entretenimiento
estructura_interna:
  publicidad: salesmanship
  criterio: venta
  desviaciones_rechazadas:
    - literatura
    - entretenimiento
    - exhibicion_creativa
    - efecto_general
conecta_con:
  - MN_PUBLICIDAD_ES_VENTA
  - MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
```

---

## 01. `MN_PUBLICIDAD_ES_VENTA`

```yaml
orden_textual: 01
mnode_id: MN_PUBLICIDAD_ES_VENTA
tipo_de_unidad: definicion_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Advertising is salesmanship. Its principles are the principles of salesmanship."
formulacion: >
  La publicidad es venta; sus principios son los mismos principios de la venta.
rol_operativo: fijar_identidad_conceptual
funcion_local_en_el_texto:
  - establecer la concepción correcta desde el inicio
  - eliminar la separación falsa entre publicidad y venta
  - fundar todo el capítulo sobre estándares comerciales
estructura_interna:
  publicidad:
    identidad: venta
    principios: principios_de_salesmanship
  criterio_de_exito:
    - ventas
    - resultados_reales
conecta_con:
  - MN_UNICO_PROPOSITO_VENTAS
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - MN_PUBLICIDAD_MULTIPLICATED_SALESMANSHIP
```

Este es el mNode nuclear. Todo el capítulo deriva de aquí.

---

## 02. `MN_EXITO_Y_FRACASO_MISMAS_CAUSAS`

```yaml
orden_textual: 02
mnode_id: MN_EXITO_Y_FRACASO_MISMAS_CAUSAS
tipo_de_unidad: principio_de_equivalencia
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "Successes and failures in both lines are due to like causes."
formulacion: >
  Los éxitos y fracasos en publicidad y en venta personal obedecen a causas semejantes.
rol_operativo: justificar_transferencia_de_estandares
premisas:
  - la publicidad es venta
  - la venta personal y la publicidad buscan el mismo resultado
  - ambas dependen de persuadir a un comprador
regla_inferencial:
  - si dos prácticas comparten finalidad y mecanismo comercial, sus éxitos y fracasos deben juzgarse por causas semejantes
conclusion:
  - toda pregunta publicitaria debe responderse con estándares de vendedor
funcion_local_en_el_texto:
  - conectar definición con método de evaluación
  - preparar la regla de preguntar si algo ayudaría a un vendedor
conecta_con:
  - MN_PUBLICIDAD_ES_VENTA
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
```

---

## 03. `MN_UNICO_PROPOSITO_VENTAS`

```yaml
orden_textual: 03
mnode_id: MN_UNICO_PROPOSITO_VENTAS
tipo_de_unidad: tesis_funcional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The only purpose of advertising is to make sales."
formulacion: >
  El único propósito de la publicidad es producir ventas.
rol_operativo: delimitar_finalidad
funcion_local_en_el_texto:
  - excluir fines secundarios o vagos
  - colocar las ventas reales como criterio último
  - preparar la crítica a publicidad de “efecto general”
estructura_interna:
  finalidad_valida:
    - hacer_ventas
  criterios_de_evaluacion:
    - rentable
    - no_rentable
    - ventas_reales
conecta_con:
  - MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL
  - MET_FORZAR_ANUNCIO_A_JUSTIFICARSE
```

---

## 04. `MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL`

```yaml
orden_textual: 04
mnode_id: MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL
tipo_de_unidad: delimitacion_negativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "It is not for general effect. It is not to keep your name before the people..."
formulacion: >
  La publicidad no debe justificarse por efecto general, recordación vaga del nombre
  ni apoyo indirecto a vendedores, sino por ventas reales.
rol_operativo: excluir_falsos_criterios_de_publicidad
funcion_local_en_el_texto:
  - cerrar vías de justificación imprecisas
  - impedir que la publicidad evada responsabilidad comercial
  - preparar comparación con otros vendedores
estructura_interna:
  falsos_criterios:
    - efecto_general
    - mantener_nombre_ante_el_publico
    - ayudar_indirectamente_a_vendedores
  criterio_valido:
    - ventas
    - costo_y_resultado
conecta_con:
  - MN_UNICO_PROPOSITO_VENTAS
  - MET_FORZAR_ANUNCIO_A_JUSTIFICARSE
```

---

## 05. `MET_FORZAR_ANUNCIO_A_JUSTIFICARSE`

```yaml
orden_textual: 05
mnode_id: MET_FORZAR_ANUNCIO_A_JUSTIFICARSE
tipo_de_unidad: metodo_de_evaluacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Treat it as a salesman. Force it to justify itself. Compare it with other salesmen. Figure its cost and result."
formulacion: >
  Todo anuncio debe tratarse como vendedor: debe justificar su costo por resultados reales.
rol_operativo: convertir_tesis_en_procedimiento
entrada:
  - anuncio
  - costo_del_anuncio
  - resultados_obtenidos
  - otros_vendedores_o_canales_comparables
operaciones:
  - tratar_el_anuncio_como_vendedor
  - exigir_resultados
  - comparar_con_otros_vendedores
  - calcular_costo_y_resultado
  - rechazar_excusas_que_un_buen_vendedor_no_daria
salida:
  - juicio_comercial_del_anuncio
  - aceptacion_o_rechazo_segun_resultado
funcion_local_en_el_texto:
  - transformar la definición de publicidad en regla práctica
  - fijar un estándar de control
conecta_con:
  - MN_UNICO_PROPOSITO_VENTAS
  - MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
```

---

## 06. `MN_PUBLICIDAD_MULTIPLICATED_SALESMANSHIP`

```yaml
orden_textual: 06
mnode_id: MN_PUBLICIDAD_MULTIPLICATED_SALESMANSHIP
tipo_de_unidad: ampliacion_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Advertising is multiplied salesmanship."
formulacion: >
  La publicidad es venta multiplicada: un vendedor que habla simultáneamente a muchos.
rol_operativo: ampliar_definicion_por_escala
funcion_local_en_el_texto:
  - explicar diferencia entre vendedor personal y publicidad
  - introducir el problema del costo amplificado
  - preparar la exigencia de mayor cautela
estructura_interna:
  venta_personal:
    alcance: uno_a_uno
    costo_error: bajo
  publicidad:
    alcance: miles
    costo_error: alto
conecta_con:
  - MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO
  - MN_ANUNCIO_DEBE_SER_SUPER_VENDEDOR
```

---

## 07. `MN_ANUNCIO_DEBE_SER_SUPER_VENDEDOR`

```yaml
orden_textual: 07
mnode_id: MN_ANUNCIO_DEBE_SER_SUPER_VENDEDOR
tipo_de_unidad: consecuencia_normativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Therefore every ad should be a super-salesman."
formulacion: >
  Como la publicidad multiplica el alcance y el costo de la venta, cada anuncio
  debe funcionar como un supervendedor.
rol_operativo: derivar_exigencia_de_calidad
funcion_local_en_el_texto:
  - elevar el estándar de exigencia para anuncios
  - conectar escala con responsabilidad
  - preparar la crítica a anuncios mediocres
conecta_con:
  - MN_PUBLICIDAD_MULTIPLICATED_SALESMANSHIP
  - MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO
```

---

## 08. `MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO`

```yaml
orden_textual: 08
mnode_id: MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO
tipo_de_unidad: patron_de_riesgo
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "A salesman’s mistake may cost little. An advertiser’s mistake may cost a thousand times that much."
formulacion: >
  El error de un vendedor puede costar poco; el error publicitario puede multiplicar
  el daño por miles.
rol_operativo: justificar_mayor_cautela_en_publicidad
premisas:
  - el vendedor personal habla con pocos o uno
  - el anuncio puede hablar con miles
  - cada palabra o espacio publicitario implica costo
regla_inferencial:
  - si el alcance y costo son multiplicados, el error también se multiplica
conclusion:
  - la publicidad exige más cautela y exactitud que la venta individual
funcion_local_en_el_texto:
  - establecer gravedad de publicidad mediocre
  - justificar exigencia de precisión
conecta_con:
  - MN_ANUNCIO_DEBE_SER_SUPER_VENDEDOR
  - MET_FORZAR_ANUNCIO_A_JUSTIFICARSE
```

---

## 09. `MN_PUBLICIDAD_MEDIOCRE_AFECTA_TODO`

```yaml
orden_textual: 09
mnode_id: MN_PUBLICIDAD_MEDIOCRE_AFECTA_TODO
tipo_de_unidad: consecuencia_de_escala
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "A mediocre salesman may affect a small part of your trade. Mediocre advertising affects all of your trade."
formulacion: >
  Un vendedor mediocre afecta una parte limitada del negocio; una publicidad mediocre
  afecta todo el negocio.
rol_operativo: reforzar_riesgo_de_escala
funcion_local_en_el_texto:
  - intensificar la importancia de la precisión publicitaria
  - mostrar que el problema publicitario no es local sino general
conecta_con:
  - MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO
  - MN_ANUNCIO_DEBE_SER_SUPER_VENDEDOR
```

---

# 3. Bloque contra la publicidad literaria

## 10. `MN_PUBLICIDAD_NO_ES_ESCRITURA_LITERARIA`

```yaml
orden_textual: 10
mnode_id: MN_PUBLICIDAD_NO_ES_ESCRITURA_LITERARIA
tipo_de_unidad: delimitacion_negativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Many think of advertising as ad writing. Literary qualifications have no more to do with it than oratory has with salesmanship."
formulacion: >
  La publicidad no debe entenderse como escritura literaria; las cualidades literarias
  no son equivalentes a capacidad de vender.
rol_operativo: corregir_concepcion_erronea
funcion_local_en_el_texto:
  - atacar la idea de publicidad como redacción bonita
  - preparar crítica a estilo, oratoria y exhibición
  - devolver el foco a la venta
estructura_interna:
  error:
    - publicidad_como_ad_writing
    - publicidad_como_literatura
  correccion:
    - publicidad_como_salesmanship
conecta_con:
  - MN_FINE_WRITING_DESVENTAJA
  - MN_BUEN_VENDEDOR_NO_ES_ORADOR
```

---

## 11. `MN_FINE_WRITING_DESVENTAJA`

```yaml
orden_textual: 11
mnode_id: MN_FINE_WRITING_DESVENTAJA
tipo_de_unidad: tesis_contraintuitiva
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Fine writing is a distinct disadvantage. So is unique literary style. They take attention from the subject. They reveal the hook."
formulacion: >
  La escritura elegante o el estilo literario singular pueden perjudicar la venta
  porque distraen del producto y hacen visible el intento de persuasión.
rol_operativo: explicar_peligro_de_estilo_visible
funcion_local_en_el_texto:
  - mostrar que el estilo puede competir contra el objeto vendido
  - presentar la persuasión visible como causa de resistencia
estructura_interna:
  estilo_elegante:
    efectos:
      - desvía_atención_del_producto
      - revela_el_gancho
      - hace_visible_el_intento_de_vender
      - crea_resistencia
conecta_con:
  - MN_PUBLICIDAD_NO_ES_ESCRITURA_LITERARIA
  - MN_PERSUASION_VISIBLE_CREA_RESISTENCIA
```

---

## 12. `MN_PERSUASION_VISIBLE_CREA_RESISTENCIA`

```yaml
orden_textual: 12
mnode_id: MN_PERSUASION_VISIBLE_CREA_RESISTENCIA
tipo_de_unidad: mecanismo_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Any studies done that attempt to sell, if apparent, creates corresponding resistance."
formulacion: >
  Cuando el esfuerzo de venta se vuelve demasiado visible, el comprador sospecha
  y resiste la influencia.
rol_operativo: explicar_rechazo_a_la_persuasión_exhibida
funcion_local_en_el_texto:
  - justificar por qué el estilo vistoso perjudica
  - conectar publicidad impresa con venta personal
estructura_interna:
  intento_de_vender_visible:
    - estilo_elegante
    - estilo_unico
    - oratoria
    - exhibicion
  respuesta_del_comprador:
    - sospecha
    - miedo_a_sobreinfluencia
    - resistencia
conecta_con:
  - MN_FINE_WRITING_DESVENTAJA
  - MN_FINE_TALKERS_RARAMENTE_BUENOS_VENDEDORES
```

---

## 13. `MN_FINE_TALKERS_RARAMENTE_BUENOS_VENDEDORES`

```yaml
orden_textual: 13
mnode_id: MN_FINE_TALKERS_RARAMENTE_BUENOS_VENDEDORES
tipo_de_unidad: analogia_con_venta_personal
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "Fine talkers are rarely good salesmen."
formulacion: >
  Los grandes oradores rara vez son buenos vendedores porque generan temor a la
  sobreinfluencia y sospecha de venta artificiosa.
rol_operativo: transferir_estandar_de_venta_personal_a_publicidad
premisas:
  - los compradores sospechan de quien habla demasiado bien
  - la oratoria visible sugiere manipulación
  - la venta eficaz requiere confianza
conclusion:
  - la publicidad no debe apoyarse en exhibición verbal o literaria
funcion_local_en_el_texto:
  - reforzar la analogía publicidad/venta personal
  - oponer sinceridad a oratoria
conecta_con:
  - MN_BUEN_VENDEDOR_SIMPLE_SINCERO
  - MN_PUBLICIDAD_NO_ES_ESCRITURA_LITERARIA
```

---

## 14. `MN_BUEN_VENDEDOR_SIMPLE_SINCERO`

```yaml
orden_textual: 14
mnode_id: MN_BUEN_VENDEDOR_SIMPLE_SINCERO
tipo_de_unidad: modelo_positivo_de_vendedor
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Successful salesmen are rarely good speech makers... plain and sincere men who know their customers and know their lines."
formulacion: >
  El buen vendedor suele ser simple, sincero, conoce a sus clientes y conoce lo que vende.
rol_operativo: definir_modelo_positivo
funcion_local_en_el_texto:
  - contraponer al orador brillante un vendedor eficaz
  - presentar las virtudes que debe imitar el anuncio
estructura_interna:
  buen_vendedor:
    - simple
    - sincero
    - conoce_clientes
    - conoce_producto
    - usa_palabras_que_convencen
  falso_vendedor:
    - oratorio
    - brillante
    - literario
    - exhibicionista
conecta_con:
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - MN_ABLES_AD_MEN_GRADUATE_SALESMEN
```

---

## 15. `MN_ABLES_AD_MEN_GRADUATE_SALESMEN`

```yaml
orden_textual: 15
mnode_id: MN_ABLES_AD_MEN_GRADUATE_SALESMEN
tipo_de_unidad: ejemplo_profesional_general
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Many of the ablest men in advertising are graduate salesmen... house-to-house canvassers."
formulacion: >
  Muchos de los mejores publicistas vienen de la venta directa, no de la retórica o literatura.
rol_operativo: legitimar_salesmanship_como_base_de_publicidad
funcion_local_en_el_texto:
  - reforzar que la experiencia de venta es superior a la formación literaria
  - conectar publicidad eficaz con contacto real con compradores
conecta_con:
  - MN_BUEN_VENDEDOR_SIMPLE_SINCERO
  - MET_SALIR_A_VENDER_ANTES_DE_ESCRIBIR
```

---

# 4. Método central: preguntar como vendedor

## 16. `MET_JUZGAR_ANUNCIO_COMO_VENDEDOR`

```yaml
orden_textual: 16
mnode_id: MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
tipo_de_unidad: metodo_principal
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Ask yourself, Would it help a salesman sell the goods? Would it help me sell them if I met a buyer in person?"
formulacion: >
  Toda decisión publicitaria debe evaluarse preguntando si ayudaría a vender
  frente a un comprador real.
rol_operativo: convertir_principio_en_prueba_decisoria
entrada:
  - idea_publicitaria
  - titular
  - argumento
  - slogan
  - recurso_creativo
  - extensión_del_anuncio
  - estilo_visual
operaciones:
  - imaginar_un_vendedor_frente_a_un_comprador
  - preguntar_si_el_recurso_ayudaria_a_vender
  - rechazar_lo_que_solo_complace_al_redactor
  - aceptar_lo_que_responde_a_intereses_del_comprador
salida:
  - decision_publicitaria_filtrada_por_estandar_de_venta
criterio_de_exito:
  - el recurso ayudaría a vender en una conversación real
funcion_local_en_el_texto:
  - ofrecer regla práctica para resolver muchas preguntas publicitarias
  - preparar evaluación de slogans, brevedad, tipografía, rareza, entretenimiento
conecta_con:
  - MN_PUBLICIDAD_ES_VENTA
  - MN_UNICO_PROPOSITO_VENTAS
  - DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
```

Fórmula:

```txt
¿Ayudaría esto a un vendedor frente a un comprador?
  sí  → conservar
  no  → descartar
```

---

## 17. `DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA`

```yaml
orden_textual: 17
mnode_id: DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
tipo_de_unidad: molde_evaluativo
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  Cada decisión publicitaria se evalúa trasladándola al escenario de venta personal.
rol_operativo: organizar_casos_de_decision_publicitaria
estructura:
  pregunta_publicitaria:
  equivalente_en_venta_personal:
  ayudaria_a_vender:
  decision:
invariantes:
  - existe una decisión publicitaria dudosa
  - se imagina su uso por un vendedor frente a comprador
  - si no ayudaría al vendedor, se descarta
dominio_de_variacion:
  - slogans
  - clever conceits
  - brevedad forzada
  - tipografía grande
  - rareza_visual
  - anuncios_entretenidos
conecta_con:
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - MET_EVALUAR_SLOGANS_Y_CONCEITS
  - MET_EVALUAR_BREVEDAD
  - MET_EVALUAR_TIPOGRAFIA_GRANDE
  - MET_EVALUAR_DISTINTIVIDAD_RARA
```

---

## 18. `MET_EVALUAR_SLOGANS_Y_CONCEITS`

```yaml
orden_textual: 18
mnode_id: MET_EVALUAR_SLOGANS_Y_CONCEITS
tipo_de_unidad: submetodo_de_evaluacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Some argue for slogans, some like clever conceits. Would you use them in personal salesmanship?"
formulacion: >
  Los slogans y ocurrencias ingeniosas deben descartarse si no ayudarían a vender
  en una conversación personal con un comprador.
rol_operativo: aplicar_estandar_de_vendedor_a_recursos_creativos
funcion_local_en_el_texto:
  - criticar recursos que complacen al redactor pero no al comprador
  - mostrar el uso del método central
conecta_con:
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
```

---

# 5. Bloque de objeciones publicitarias resueltas por estándar de vendedor

## 19. `MET_EVALUAR_BREVEDAD`

```yaml
orden_textual: 19
mnode_id: MET_EVALUAR_BREVEDAD
tipo_de_unidad: submetodo_de_evaluacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Some say Be very brief. People will read for little. Would you say that to a salesman?"
formulacion: >
  La brevedad no debe imponerse arbitrariamente; se debe dar al prospecto suficiente
  información para actuar.
rol_operativo: corregir_mito_de_brevedad_publicitaria
estructura_interna:
  tesis_erronea:
    - la_gente_lee_poco
    - hay_que_ser_muy_breve
  prueba_por_salesmanship:
    - no_limitaríamos_a_un_vendedor_frente_a_un_prospecto
    - el_comprador_interesado_busca_informacion
  conclusion:
    - dar_suficiente_informacion_para_obtener_accion
funcion_local_en_el_texto:
  - aplicar estándar de vendedor al problema de extensión
  - redefinir al lector como prospecto interesado
conecta_con:
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - MN_LECTORES_SON_PROSPECTOS_INTERESADOS
```

---

## 20. `MN_LECTORES_SON_PROSPECTOS_INTERESADOS`

```yaml
orden_textual: 20
mnode_id: MN_LECTORES_SON_PROSPECTOS_INTERESADOS
tipo_de_unidad: modelo_del_receptor
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The only readers we get are people whom our subject interests... Consider them as prospects standing before you, seeking for information."
formulacion: >
  Quienes leen un anuncio son prospectos interesados que buscan información,
  no lectores casuales que buscan entretenimiento.
rol_operativo: redefinir_receptor_publicitario
funcion_local_en_el_texto:
  - justificar anuncios suficientemente informativos
  - conectar lector de anuncio con comprador frente al vendedor
estructura_interna:
  lector_del_anuncio:
    - interesado_en_el_asunto
    - busca_informacion
    - potencial_comprador
  no_es:
    - lector_por_entretenimiento
    - masa_indiferenciada
conecta_con:
  - MET_EVALUAR_BREVEDAD
  - MET_PENSAR_COMPRADOR_TIPICO
```

---

## 21. `MET_EVALUAR_TIPOGRAFIA_GRANDE`

```yaml
orden_textual: 21
mnode_id: MET_EVALUAR_TIPOGRAFIA_GRANDE
tipo_de_unidad: submetodo_de_evaluacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Some advocate large type and big headlines... they do not admire salesmen who talk in loud voices."
formulacion: >
  La tipografía grande y los titulares enormes deben evaluarse como voz alta en ventas:
  pueden ser inútiles, costosos o parecer estridentes.
rol_operativo: trasladar_recurso_visual_a_analogía_de_venta
estructura_interna:
  recurso_publicitario:
    - large_type
    - big_headlines
  equivalente_en_venta:
    - hablar_en_voz_alta
  efecto:
    - no_gana_atencion_valiosa
    - multiplica_costo
    - puede_parecer_blatant
funcion_local_en_el_texto:
  - criticar la búsqueda de atención superficial
  - mostrar que mayor tamaño no implica mayor persuasión
conecta_con:
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
```

---

## 22. `MET_EVALUAR_DISTINTIVIDAD_RARA`

```yaml
orden_textual: 22
mnode_id: MET_EVALUAR_DISTINTIVIDAD_RARA
tipo_de_unidad: submetodo_de_evaluacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Others look for something queer and unusual... Would you want that in a salesman?"
formulacion: >
  Lo raro, inusual o excesivamente distintivo debe rechazarse si haría mala impresión
  en un vendedor personal.
rol_operativo: evaluar_originalidad_por_criterio_de_confianza
estructura_interna:
  recurso_publicitario:
    - estilo_raro
    - ilustracion_inusual
    - anuncio_dressy
  equivalente_en_vendedor:
    - vestir_o_actuar_de_modo_anormal
  criterio:
    - los_hombres_normales_generan_mejor_impresion
    - el_exceso_de_adorno_es_falla
funcion_local_en_el_texto:
  - criticar la rareza como objetivo publicitario
  - subordinar la distinción visual a confianza comercial
conecta_con:
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - MN_PUBLICIDAD_NO_ES_PERFORMANCE
```

---

## 23. `MN_PUBLICIDAD_NO_ES_ENTRETENIMIENTO`

```yaml
orden_textual: 23
mnode_id: MN_PUBLICIDAD_NO_ES_ENTRETENIMIENTO
tipo_de_unidad: delimitacion_negativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Ads are not written to entertain."
formulacion: >
  Los anuncios no se escriben para entretener; se escriben para vender a compradores potenciales.
rol_operativo: excluir_estandar_de_entretenimiento
funcion_local_en_el_texto:
  - cerrar la serie de falsos criterios
  - oponer ventas a diversión, aplauso y performance
estructura_interna:
  falso_objetivo:
    - entretener
    - conseguir_aplauso
    - actuar_como_performer
  objetivo_valido:
    - vender
    - activar_comprador_potencial
conecta_con:
  - MN_AD_WRITERS_ABANDONAN_PAPEL_DE_VENDEDORES
```

---

## 24. `MN_AD_WRITERS_ABANDONAN_PAPEL_DE_VENDEDORES`

```yaml
orden_textual: 24
mnode_id: MN_AD_WRITERS_ABANDONAN_PAPEL_DE_VENDEDORES
tipo_de_unidad: diagnostico_de_error_profesional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Ad writers abandon their parts. They forget they are salesmen and try to be performers. Instead of sales, they seek applause."
formulacion: >
  El error de muchos redactores publicitarios es olvidar que son vendedores y actuar
  como performers que buscan aplauso en lugar de ventas.
rol_operativo: identificar_error_profesional_central
funcion_local_en_el_texto:
  - sintetizar los errores de estilo, entretenimiento, rareza y exhibición
  - reforzar la identidad vendedor/anuncio
conecta_con:
  - MN_PUBLICIDAD_NO_ES_ENTRETENIMIENTO
  - MN_PUBLICIDAD_ES_VENTA
```

---

# 6. Bloque del comprador típico

## 25. `MET_PENSAR_COMPRADOR_TIPICO`

```yaml
orden_textual: 25
mnode_id: MET_PENSAR_COMPRADOR_TIPICO
tipo_de_unidad: metodo_principal_de_redaccion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "When you plan or prepare an advertisement, keep before you a typical buyer."
formulacion: >
  Al preparar un anuncio, hay que mantener delante a un comprador típico y escribir
  como si se le hablara cara a cara.
rol_operativo: convertir_receptor_en_individuo_concreto
entrada:
  - producto
  - posible_comprador
  - titular
  - argumento
  - oferta
operaciones:
  - imaginar_un_comprador_tipico
  - asumir_que_el_titular_ya_gano_su_atencion
  - guiarse_por_lo_que_se_haria_cara_a_cara
  - hacer_el_mejor_esfuerzo_de_vendedor
salida:
  - anuncio_orientado_a_comprador_real
funcion_local_en_el_texto:
  - pasar de crítica de errores a método de producción
  - concretar el estándar de salesmanship en práctica de escritura
conecta_con:
  - MN_LECTORES_SON_PROSPECTOS_INTERESADOS
  - MN_NO_PENSAR_EN_MASA
```

---

## 26. `MN_NO_PENSAR_EN_MASA`

```yaml
orden_textual: 26
mnode_id: MN_NO_PENSAR_EN_MASA
tipo_de_unidad: advertencia_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Don’t think of people in the mass. That gives you a blurred view."
formulacion: >
  No hay que pensar en las personas como masa, porque eso produce una visión borrosa;
  hay que pensar en un individuo típico que probablemente quiera lo que se vende.
rol_operativo: delimitar_modelo_de_receptor
funcion_local_en_el_texto:
  - evitar abstracciones vagas de público
  - centrar la redacción en un comprador concreto
estructura_interna:
  enfoque_erroneo:
    - masa
    - publico_general
    - vista_borrosa
  enfoque_correcto:
    - individuo_tipico
    - hombre_o_mujer_con_probable_interes
conecta_con:
  - MET_PENSAR_COMPRADOR_TIPICO
  - MN_COMPRAR_ES_ASUNTO_SERIO
```

---

## 27. `MN_COMPRAR_ES_ASUNTO_SERIO`

```yaml
orden_textual: 27
mnode_id: MN_COMPRAR_ES_ASUNTO_SERIO
tipo_de_unidad: principio_psicologico_del_comprador
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Money spending is a serious matter."
formulacion: >
  Gastar dinero es un asunto serio; por eso el comprador no debe tratarse como
  espectador de entretenimiento sino como persona que evalúa una decisión.
rol_operativo: explicar_seriedad_del_contexto_de_compra
funcion_local_en_el_texto:
  - justificar rechazo del entretenimiento
  - orientar el tono del anuncio hacia información y confianza
conecta_con:
  - MN_PUBLICIDAD_NO_ES_ENTRETENIMIENTO
  - MET_PENSAR_COMPRADOR_TIPICO
```

---

## 28. `MN_NO_BOAST_NO_SHOW_OFF`

```yaml
orden_textual: 28
mnode_id: MN_NO_BOAST_NO_SHOW_OFF
tipo_de_unidad: regla_de_tono
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Don’t boast... Don’t try to show off."
formulacion: >
  No hay que presumir ni tratar de lucirse, porque las personas resienten la jactancia
  y desconfían de la exhibición.
rol_operativo: delimitar_tono_de_venta
funcion_local_en_el_texto:
  - traducir salesmanship a estilo comunicativo
  - reforzar sinceridad, claridad y orientación al comprador
conecta_con:
  - MN_BUEN_VENDEDOR_SIMPLE_SINCERO
  - MET_PENSAR_COMPRADOR_TIPICO
```

---

# 7. Aprendizaje desde compradores reales

## 29. `MET_SALIR_A_VENDER_ANTES_DE_ESCRIBIR`

```yaml
orden_textual: 29
mnode_id: MET_SALIR_A_VENDER_ANTES_DE_ESCRIBIR
tipo_de_unidad: metodo_de_investigacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Some advertising men go out in person and sell to people before they plan to write an ad."
formulacion: >
  Antes de escribir un anuncio, algunos publicistas venden personalmente para aprender
  las reacciones reales de los compradores.
rol_operativo: obtener_conocimiento_directo_del_comprador
entrada:
  - producto
  - compradores_potenciales
  - argumentos_posibles
  - enfoques_posibles
operaciones:
  - vender_casa_por_casa
  - observar_reacciones
  - probar_argumentos
  - aprender_qué_desean_los_compradores
  - detectar_factores_que_no_apelan
salida:
  - argumentos_probados
  - conocimiento_de_respuesta_del_cliente
  - anuncio_mejor_orientado
funcion_local_en_el_texto:
  - mostrar que la escritura publicitaria debe basarse en contacto con compradores
  - conectar publicidad con investigación empírica
conecta_con:
  - MN_ABLES_AD_MEN_GRADUATE_SALESMEN
  - MET_INVESTIGAR_COMPRADORES
```

---

## 30. `MET_INVESTIGAR_COMPRADORES`

```yaml
orden_textual: 30
mnode_id: MET_INVESTIGAR_COMPRADORES
tipo_de_unidad: metodo_de_investigacion
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "It is quite customary to interview hundreds of possible customers. Others send out questionnaires..."
formulacion: >
  El publicista debe investigar a compradores posibles mediante entrevistas,
  cuestionarios o venta directa para conocer sus actitudes y respuestas.
rol_operativo: sistematizar_aprendizaje_del_consumidor
operaciones:
  - entrevistar_cientos_de_posibles_clientes
  - enviar_cuestionarios
  - probar_argumentos
  - detectar_acordes_responsivos
  - evitar_guesswork
criterio_de_exito:
  - saber qué argumentos activan respuesta
  - reducir conjetura costosa
funcion_local_en_el_texto:
  - presentar investigación del comprador como base de anuncio eficaz
  - conectar salesmanship con conocimiento del consumidor
conecta_con:
  - MN_GUESSWORK_ES_COSTOSO
  - MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
```

---

## 31. `MN_GUESSWORK_ES_COSTOSO`

```yaml
orden_textual: 31
mnode_id: MN_GUESSWORK_ES_COSTOSO
tipo_de_unidad: advertencia_metodologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Guesswork is very expensive."
formulacion: >
  La conjetura en publicidad es muy costosa; debe reemplazarse por conocimiento
  obtenido de compradores reales.
rol_operativo: justificar_investigacion_previa
funcion_local_en_el_texto:
  - reforzar venta directa, entrevistas y cuestionarios
  - conectar con el capítulo anterior sobre medición y leyes
conecta_con:
  - MET_INVESTIGAR_COMPRADORES
  - MET_SALIR_A_VENDER_ANTES_DE_ESCRIBIR
```

---

# 8. Bloque vendedor/fabricante/publicista

## 32. `MN_FABRICANTE_PUEDE_DESVIARSE_POR_SU_CONOCIMIENTO`

```yaml
orden_textual: 32
mnode_id: MN_FABRICANTE_PUEDE_DESVIARSE_POR_SU_CONOCIMIENTO
tipo_de_unidad: advertencia_epistemica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The maker... knows the manufacturing side... But this very knowledge often leads him astray in respect to customers."
formulacion: >
  El fabricante conoce producción y distribución, pero ese conocimiento puede desviarlo
  respecto al interés real del comprador.
rol_operativo: distinguir_perspectiva_del_vendedor_y_del_comprador
funcion_local_en_el_texto:
  - advertir que saber fabricar no equivale a saber vender
  - mostrar conflicto entre intereses del fabricante y del consumidor
estructura_interna:
  fabricante:
    conoce:
      - manufactura
      - distribuidores
    riesgo:
      - confundir_sus_intereses_con_los_del_comprador
  comprador:
    intereses:
      - distintos_de_los_del_fabricante
conecta_con:
  - MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
  - MN_INTERES_DEL_COMPRADOR_OLVIDADO
```

---

## 33. `MN_PUBLICISTA_ESTUDIA_CONSUMIDOR`

```yaml
orden_textual: 33
mnode_id: MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
tipo_de_unidad: definicion_de_funcion_profesional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The advertising man studies the consumer. He tries to place himself in the position of the buyer."
formulacion: >
  El publicista estudia al consumidor y trata de colocarse en la posición del comprador.
rol_operativo: definir_tarea_central_del_publicista
funcion_local_en_el_texto:
  - completar el modelo de salesmanship
  - establecer empatía comercial como habilidad central
  - cerrar el argumento sobre investigación
estructura_interna:
  publicista:
    operaciones:
      - estudiar_consumidor
      - ponerse_en_posicion_del_comprador
      - excluir_perspectivas_ajenas
  exito:
    depende_de:
      - adoptar_punto_de_vista_del_comprador
conecta_con:
  - MET_INVESTIGAR_COMPRADORES
  - MN_FABRICANTE_PUEDE_DESVIARSE_POR_SU_CONOCIMIENTO
  - MN_INTERES_DEL_COMPRADOR_OLVIDADO
```

---

## 34. `MN_INTERES_DEL_COMPRADOR_OLVIDADO`

```yaml
orden_textual: 34
mnode_id: MN_INTERES_DEL_COMPRADOR_OLVIDADO
tipo_de_unidad: diagnostico_de_fracaso
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "They are written to please the seller. The interest of the buyer are forgotten."
formulacion: >
  Muchos anuncios fracasan porque se escriben para complacer al vendedor, no para
  responder al interés del comprador.
rol_operativo: diagnosticar_causa_de_fracaso_publicitario
funcion_local_en_el_texto:
  - cerrar el capítulo retomando el problema inicial
  - unir publicidad como venta con orientación al comprador
estructura_interna:
  error:
    - escribir_para_placer_del_vendedor
    - olvidar_interes_del_comprador
  consecuencia:
    - no_se_puede_vender_rentablemente
conecta_con:
  - MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
  - MN_PUBLICIDAD_ES_VENTA
  - REGLA_FINAL_PUBLICIDAD_COMO_SALESMANSHIP
```

---

## 35. `MN_FALTA_DE_SALESMANSHIP_CAUSA_FRACASO`

```yaml
orden_textual: 35
mnode_id: MN_FALTA_DE_SALESMANSHIP_CAUSA_FRACASO
tipo_de_unidad: tesis_de_importancia_del_capitulo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "This book will contain no more important chapter than this one on salesmanship..."
formulacion: >
  Después de intentar vender lo que la gente no quiere, la falta de verdadero
  salesmanship es una de las mayores causas de fracaso publicitario.
rol_operativo: elevar_importancia_del_capitulo
funcion_local_en_el_texto:
  - justificar por qué este capítulo es central
  - presentar salesmanship como requisito básico de publicidad
conecta_con:
  - MN_PUBLICIDAD_ES_VENTA
  - MN_INTERES_DEL_COMPRADOR_OLVIDADO
```

---

## 36. `REGLA_FINAL_PUBLICIDAD_COMO_SALESMANSHIP`

```yaml
orden_textual: 36
mnode_id: REGLA_FINAL_PUBLICIDAD_COMO_SALESMANSHIP
tipo_de_unidad: regla_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
formulacion: >
  Escriba y evalúe todo anuncio como si fuera un vendedor frente a un comprador:
  con claridad, sinceridad, conocimiento del cliente, orientación a ventas y rechazo
  de todo recurso que sólo busque aplauso o complacencia del vendedor.
rol_operativo: condensar_recorrido_del_capitulo
funcion_local_en_el_texto:
  - sintetizar tesis, métodos y advertencias del capítulo
  - convertir el capítulo en principio operativo
conecta_con:
  - MN_PUBLICIDAD_ES_VENTA
  - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
  - MET_PENSAR_COMPRADOR_TIPICO
  - MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
```

---

# 9. Moldes estructurales detectados

## Molde 1: `DIS_MOLDE_PUBLICIDAD_COMO_VENDEDOR`

```yaml
molde:
  mnode_id: DIS_MOLDE_PUBLICIDAD_COMO_VENDEDOR
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Todo elemento publicitario debe ser juzgado como si fuera una acción de un
    vendedor frente a un comprador real.
  estructura:
    elemento_publicitario:
    equivalente_en_venta_personal:
    ayudaria_a_vender:
    costo_o_riesgo:
    decision:
  invariantes:
    - existe una decisión publicitaria
    - se la traslada a una situación de venta personal
    - se evalúa si ayuda a vender
    - se rechaza si sólo entretiene, luce o complace al vendedor
  instancias:
    - slogans
    - ocurrencias_ingeniosas
    - brevedad_forzada
    - tipografia_grande
    - anuncios_raros
    - entretenimiento
```

---

## Molde 2: `DIS_MOLDE_FALSO_CRITERIO_PUBLICITARIO`

```yaml
molde:
  mnode_id: DIS_MOLDE_FALSO_CRITERIO_PUBLICITARIO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Un recurso publicitario falla cuando se evalúa por aplauso, estilo, entretenimiento,
    rareza o satisfacción del vendedor, en lugar de ventas.
  estructura:
    falso_criterio:
    razon_por_la_que_atrae_al_redactor:
    equivalente_en_venta_personal:
    efecto_en_comprador:
    criterio_correctivo:
  invariantes:
    - el recurso parece atractivo desde el punto de vista del redactor o vendedor
    - no ayuda necesariamente al comprador a decidir
    - puede generar sospecha o distracción
    - debe evaluarse por salesmanship
  instancias:
    - fine_writing
    - oratory
    - slogans
    - clever_conceits
    - big_type
    - queer_unusual_ads
    - entertainment
```

---

## Molde 3: `DIS_MOLDE_CONOCER_COMPRADOR_ANTES_DE_ESCRIBIR`

```yaml
molde:
  mnode_id: DIS_MOLDE_CONOCER_COMPRADOR_ANTES_DE_ESCRIBIR
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Antes de escribir publicidad eficaz, hay que conocer directamente al comprador,
    sus reacciones, deseos, objeciones y respuestas a distintos argumentos.
  estructura:
    producto:
    comprador_potencial:
    metodo_de_contacto:
    reaccion_observada:
    argumento_validado:
    anuncio_resultante:
  invariantes:
    - se estudia al comprador antes de escribir
    - se evita conjetura
    - se prueban formas de argumento
    - se escribe desde la posición del comprador
  instancias:
    - vender_casa_por_casa
    - entrevistar_compradores
    - enviar_cuestionarios
```

---

# 10. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: MN_TITULO_JUST_SALESMANSHIP
    tipo: desarrolla_en
    destino: MN_PUBLICIDAD_ES_VENTA

  - origen: MN_PUBLICIDAD_ES_VENTA
    tipo: fundamenta
    destino: MN_UNICO_PROPOSITO_VENTAS

  - origen: MN_PUBLICIDAD_ES_VENTA
    tipo: fundamenta
    destino: MET_JUZGAR_ANUNCIO_COMO_VENDEDOR

  - origen: MN_EXITO_Y_FRACASO_MISMAS_CAUSAS
    tipo: justifica
    destino: MET_JUZGAR_ANUNCIO_COMO_VENDEDOR

  - origen: MN_UNICO_PROPOSITO_VENTAS
    tipo: excluye
    destino: MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL

  - origen: MN_PUBLICIDAD_MULTIPLICATED_SALESMANSHIP
    tipo: justifica
    destino: MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO

  - origen: MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO
    tipo: soporta
    destino: MN_ANUNCIO_DEBE_SER_SUPER_VENDEDOR

  - origen: MN_PUBLICIDAD_NO_ES_ESCRITURA_LITERARIA
    tipo: soporta
    destino: MN_FINE_WRITING_DESVENTAJA

  - origen: MN_FINE_WRITING_DESVENTAJA
    tipo: explica
    destino: MN_PERSUASION_VISIBLE_CREA_RESISTENCIA

  - origen: MN_PERSUASION_VISIBLE_CREA_RESISTENCIA
    tipo: soporta
    destino: MN_FINE_TALKERS_RARAMENTE_BUENOS_VENDEDORES

  - origen: MN_BUEN_VENDEDOR_SIMPLE_SINCERO
    tipo: modelo_positivo_para
    destino: MET_JUZGAR_ANUNCIO_COMO_VENDEDOR

  - origen: MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
    tipo: produce
    destino: DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA

  - origen: DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
    tipo: instancia_en
    destino: MET_EVALUAR_SLOGANS_Y_CONCEITS

  - origen: DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
    tipo: instancia_en
    destino: MET_EVALUAR_BREVEDAD

  - origen: DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
    tipo: instancia_en
    destino: MET_EVALUAR_TIPOGRAFIA_GRANDE

  - origen: DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
    tipo: instancia_en
    destino: MET_EVALUAR_DISTINTIVIDAD_RARA

  - origen: MN_PUBLICIDAD_NO_ES_ENTRETENIMIENTO
    tipo: explica
    destino: MN_AD_WRITERS_ABANDONAN_PAPEL_DE_VENDEDORES

  - origen: MET_PENSAR_COMPRADOR_TIPICO
    tipo: operacionaliza
    destino: MN_LECTORES_SON_PROSPECTOS_INTERESADOS

  - origen: MN_NO_PENSAR_EN_MASA
    tipo: refina
    destino: MET_PENSAR_COMPRADOR_TIPICO

  - origen: MET_SALIR_A_VENDER_ANTES_DE_ESCRIBIR
    tipo: instancia_de
    destino: DIS_MOLDE_CONOCER_COMPRADOR_ANTES_DE_ESCRIBIR

  - origen: MET_INVESTIGAR_COMPRADORES
    tipo: generaliza
    destino: DIS_MOLDE_CONOCER_COMPRADOR_ANTES_DE_ESCRIBIR

  - origen: MN_GUESSWORK_ES_COSTOSO
    tipo: justifica
    destino: MET_INVESTIGAR_COMPRADORES

  - origen: MN_FABRICANTE_PUEDE_DESVIARSE_POR_SU_CONOCIMIENTO
    tipo: contrasta_con
    destino: MN_PUBLICISTA_ESTUDIA_CONSUMIDOR

  - origen: MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
    tipo: corrige
    destino: MN_INTERES_DEL_COMPRADOR_OLVIDADO

  - origen: MN_INTERES_DEL_COMPRADOR_OLVIDADO
    tipo: converge_en
    destino: REGLA_FINAL_PUBLICIDAD_COMO_SALESMANSHIP
```

---

# 11. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: formular definiciones, tesis, advertencias y criterios de publicidad como venta
    nodos:
      - MN_PUBLICIDAD_ES_VENTA
      - MN_UNICO_PROPOSITO_VENTAS
      - MN_PUBLICIDAD_NO_ES_EFECTO_GENERAL
      - MN_PUBLICIDAD_MULTIPLICATED_SALESMANSHIP
      - MN_PUBLICIDAD_NO_ES_ESCRITURA_LITERARIA
      - MN_FINE_WRITING_DESVENTAJA
      - MN_PUBLICIDAD_NO_ES_ENTRETENIMIENTO
      - MN_LECTORES_SON_PROSPECTOS_INTERESADOS
      - MN_NO_PENSAR_EN_MASA
      - MN_COMPRAR_ES_ASUNTO_SERIO
      - MN_PUBLICISTA_ESTUDIA_CONSUMIDOR
      - MN_INTERES_DEL_COMPRADOR_OLVIDADO

  FAM-Patrón-de-razonamiento:
    funcion: justificar equivalencias, riesgos y consecuencias prácticas
    nodos:
      - MN_EXITO_Y_FRACASO_MISMAS_CAUSAS
      - MN_ERROR_PUBLICITARIO_COSTO_MULTIPLICADO
      - MN_FINE_TALKERS_RARAMENTE_BUENOS_VENDEDORES

  FAM-Diseño:
    funcion: organizar moldes evaluativos y estructuras recurrentes
    nodos:
      - DIS_MOLDE_PUBLICIDAD_COMO_VENDEDOR
      - DIS_MOLDE_FALSO_CRITERIO_PUBLICITARIO
      - DIS_MOLDE_PREGUNTA_PUBLICITARIA_COMO_PREGUNTA_DE_VENTA
      - DIS_MOLDE_CONOCER_COMPRADOR_ANTES_DE_ESCRIBIR

  FAM-Método:
    funcion: convertir la tesis en procedimientos de evaluación, redacción e investigación
    nodos:
      - MET_FORZAR_ANUNCIO_A_JUSTIFICARSE
      - MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
      - MET_EVALUAR_SLOGANS_Y_CONCEITS
      - MET_EVALUAR_BREVEDAD
      - MET_EVALUAR_TIPOGRAFIA_GRANDE
      - MET_EVALUAR_DISTINTIVIDAD_RARA
      - MET_PENSAR_COMPRADOR_TIPICO
      - MET_SALIR_A_VENDER_ANTES_DE_ESCRIBIR
      - MET_INVESTIGAR_COMPRADORES

  FAM-Plan:
    funcion: organizar recorrido expositivo del capítulo
    nodos:
      - PLAN_RECORRIDO_CAPITULO_2
```

---

# 12. Plan expositivo del capítulo

```yaml
mnode_id: PLAN_RECORRIDO_CAPITULO_2
familia_cognitiva: FAM-Plan
tipo_de_unidad: plan_expositivo
estatus_de_extraccion: molde_derivado
formulacion: >
  El capítulo primero define la publicidad como venta, luego excluye criterios falsos,
  después aplica el estándar de vendedor a recursos específicos y finalmente dirige
  la práctica hacia el comprador real.
secuencia:
  - definir_publicidad_como_salesmanship
  - establecer_ventas_reales_como_unico_objetivo
  - explicar_escala_y_riesgo_de_publicidad
  - rechazar_publicidad_como_literatura
  - definir_buen_vendedor_como_modelo
  - introducir_prueba_de_vendedor
  - aplicar_prueba_a_slogans_brevedad_tipografia_rareza_entretenimiento
  - construir_comprador_tipico
  - recomendar_contacto_real_con_compradores
  - distinguir_fabricante_de_publicista
  - cerrar_con_interes_del_comprador_como_principio_final
```

---

# 13. Síntesis estructural del capítulo

```txt
DEFINICIÓN:
  La publicidad es venta.

FINALIDAD:
  Su único propósito es producir ventas reales.

CRITERIO:
  Debe juzgarse como vendedor:
    costo
    resultado
    ventas
    comparación con otros vendedores

ESCALA:
  La publicidad es venta multiplicada.
  Por eso un error publicitario cuesta mucho más que un error de vendedor personal.

CORRECCIÓN DE FALSAS CONCEPCIONES:
  No es literatura.
  No es oratoria.
  No es entretenimiento.
  No es exhibición creativa.
  No es búsqueda de aplauso.

MODELO POSITIVO:
  El buen vendedor es claro, simple, sincero, conoce al cliente y conoce el producto.

MÉTODO CENTRAL:
  Preguntar siempre:
    ¿esto ayudaría a un vendedor frente a un comprador real?

APLICACIONES:
  slogans
  brevedad
  tipografía grande
  rareza visual
  entretenimiento
  adornos

RECEPTOR:
  No pensar en masa.
  Pensar en comprador típico.
  Escribir para alguien interesado en información.

INVESTIGACIÓN:
  Vender personalmente.
  Entrevistar compradores.
  Usar cuestionarios.
  Evitar conjeturas.

CIERRE:
  El fabricante piensa desde su interés.
  El publicista debe pensar desde el comprador.
  La publicidad fracasa cuando olvida el interés del comprador.
```

---

# 14. Núcleo interpretativo final del procesamiento estructural

```txt
El capítulo establece que la publicidad debe ser concebida, escrita y evaluada
como venta. Todo recurso publicitario debe pasar la prueba del vendedor:
¿ayudaría a vender si se usara frente a un comprador real?

La publicidad no debe buscar aplauso, entretenimiento, estilo literario ni efecto
general, sino ventas reales. Como la publicidad multiplica el alcance del vendedor,
también multiplica el costo del error; por eso exige mayor cautela, precisión e
investigación del comprador.

La buena publicidad no nace del gusto del vendedor ni de la vanidad del redactor,
sino de comprender al comprador, hablarle con claridad y darle suficiente información
para actuar.
```

Fórmula compacta:

```txt
publicidad
  → venta_multiplicada
    → costo_y_riesgo_multiplicados
      → necesidad_de_estandar_de_vendedor
        → comprador_tipico
          → investigación_del_consumidor
            → anuncio_orientado_a_ventas
```

Fórmula normativa:

```txt
si_no_ayudaría_a_un_vendedor
  → no_debe_usarse_en_un_anuncio
```
