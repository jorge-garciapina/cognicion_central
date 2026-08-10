# Chapter 6 — Psychology

## paso_1_procesamiento_estructural

```yaml
texto_raiz:
  texto_id: TEXTO_HOPKINS_CH6_PSYCHOLOGY
  titulo: "Chapter 6 — Psychology"
  dominio: publicidad / psicología comercial / apelaciones / respuesta humana
  tipo_de_fuente: capitulo_metodologico_publicitario
  funcion_global: >
    Establecer que la publicidad eficaz depende de comprender efectos psicológicos
    estables: ciertas formas de presentar una oferta producen ciertas reacciones.
    El capítulo muestra que el mismo producto, oferta o beneficio puede multiplicar
    sus retornos cuando se formula según mecanismos psicológicos adecuados.
```

---

# 1. Núcleo estructural provisional

```yaml
nucleo_interpretativo_provisional:
  formulacion: >
    El publicista competente debe comprender la psicología humana porque ciertas
    formas de presentar una oferta producen reacciones previsibles. La naturaleza
    humana es relativamente permanente; por eso los efectos psicológicos que se
    descubren, prueban y registran pueden reutilizarse en otras campañas. El capítulo
    muestra múltiples mecanismos: curiosidad, precio como señal de valor, garantías
    más cercanas, aprobación sin pago inicial, personalización, exclusividad, comparación
    abierta, muestras solicitadas, impresión mental, apelación empática y halago.

  oposicion_central:
    publicidad_sin_psicologia:
      - presenta_ofertas_de_modo_plano
      - supone_que_el_valor_objetivo_basta
      - usa_garantias_comunes_sin_impacto
      - ofrece_gratis_sin_cuidar_impresion_de_valor
      - desconoce_reacciones_humanas
      - depende_de_instinto_o_azar

    publicidad_con_psicologia:
      - entiende_que_efectos_concretos_generan_reacciones
      - usa_curiosidad_y_valor_percibido
      - modifica_la_forma_de_la_oferta
      - personaliza_y_limita_el_beneficio
      - reduce_riesgo_percibido_sin_devaluar_el_producto
      - registra_metodos_ganadores_para_reutilizarlos
```

Fórmula compacta:

```txt
misma_oferta
  + formulacion_psicologicamente_correcta
    → mayor_interes
      → mayor_respeto_por_el_producto
        → mayor_respuesta
          → retornos_multiplicados
```

---

# 2. Secuencia lineal de mNodes detectados

---

## 00. `MN_TITULO_PSYCHOLOGY`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_PSYCHOLOGY
tipo_de_unidad: titulo_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Chapter 6 — Psychology"
formulacion: >
  La publicidad eficaz requiere comprender la psicología humana como base de reacción, interés, valor percibido y respuesta.
rol_operativo: anunciar_eje_conceptual_del_capitulo
funcion_local_en_el_texto:
  - presentar la psicología como dimensión necesaria de la publicidad
  - preparar una serie de efectos psicológicos aplicables a campañas
  - desplazar el foco desde el producto objetivo hacia la reacción humana ante su presentación
estructura_interna:
  condicion: existe_una_oferta_que_debe_generar_respuesta
  accion: analizar_efectos_psicologicos_que_guian_reacciones
  objetivo: aumentar_resultados_y_evitar_errores
conecta_con:
  - MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA
  - MN_EFECTOS_LLEVAN_A_REACCIONES
```

---

## 01. `MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA`

```yaml
orden_textual: 01
mnode_id: MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA
tipo_de_unidad: tesis_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The competent advertising man must understand psychology. The more he knows about it the better."
formulacion: >
  El publicista competente debe entender psicología; cuanto más sepa sobre ella, mejor podrá aumentar resultados y evitar errores.
rol_operativo: establecer_requisito_de_competencia_publicitaria
funcion_local_en_el_texto:
  - definir una condición básica del publicista competente
  - convertir la psicología en herramienta técnica, no en adorno teórico
  - preparar la serie de ejemplos que muestran efectos psicológicos concretos
estructura_interna:
  condicion: el_publicista_busca_mejorar_resultados
  accion: estudiar_psicologia_humana
  objetivo: usar_conocimiento_de_reacciones_para_decidir_mejores_formas_de_presentacion
conecta_con:
  - MN_EFECTOS_LLEVAN_A_REACCIONES
  - MN_NATURALEZA_HUMANA_PERMANENTE
```

---

## 02. `MN_EFECTOS_LLEVAN_A_REACCIONES`

```yaml
orden_textual: 02
mnode_id: MN_EFECTOS_LLEVAN_A_REACCIONES
tipo_de_unidad: principio_causal
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "He must learn that certain effects lead to certain reactions..."
formulacion: >
  Ciertos efectos producen ciertas reacciones; conocer esa relación permite aumentar resultados y evitar errores.
rol_operativo: formular_mecanismo_general_del_capitulo
funcion_local_en_el_texto:
  - establecer la lógica causal de las apelaciones psicológicas
  - justificar que los ejemplos posteriores no son anécdotas aisladas sino patrones reutilizables
  - conectar psicología con rendimiento publicitario
estructura_interna:
  condicion: una_presentacion_produce_un_efecto_mental
  accion: identificar_la_reaccion_asociada
  objetivo: usar_el_efecto_adecuado_y_evitar_el_efecto_perjudicial
premisas:
  - las_personas_reaccionan_a_estimulos_de_modo_recurrente
  - la_forma_de_la_oferta_altera_la_reaccion
  - el_publicista_puede_aprender_esos_patrones
conclusion: la_publicidad_debe_usar_efectos_psicologicos_probados
conecta_con:
  - MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA
  - DIS_MOLDE_EFECTO_REACCION_PUBLICITARIA
```

---

## 03. `MN_NATURALEZA_HUMANA_PERMANENTE`

```yaml
orden_textual: 03
mnode_id: MN_NATURALEZA_HUMANA_PERMANENTE
tipo_de_unidad: fundamento_antropologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Human nature is perpetual... the principles of psychology are fixed and enduring."
formulacion: >
  La naturaleza humana es relativamente permanente; por eso los principios psicológicos aprendidos en publicidad no necesitan desaprenderse continuamente.
rol_operativo: fundamentar_estabilidad_de_las_leyes_psicologicas
funcion_local_en_el_texto:
  - explicar por qué los efectos psicológicos pueden convertirse en principios duraderos
  - conectar el capítulo con la tesis general de leyes publicitarias
  - justificar la acumulación de experiencia psicológica
estructura_interna:
  condicion: la_naturaleza_humana_se_mantiene_en_lo_esencial
  accion: registrar_principios_psicologicos
  objetivo: construir_conocimiento_durable_para_publicidad
conecta_con:
  - MN_EFECTOS_LLEVAN_A_REACCIONES
  - MN_APRENDER_METODOS_GANADORES
```

---

## 04. `MN_CURIOSIDAD_INCENTIVO_FUERTE`

```yaml
orden_textual: 04
mnode_id: MN_CURIOSIDAD_INCENTIVO_FUERTE
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Curiosity is one of the strongest human incentives."
formulacion: >
  La curiosidad es uno de los incentivos humanos más fuertes y puede usarse para hacer atractiva una oferta.
rol_operativo: introducir_primer_efecto_psicologico_aplicable
funcion_local_en_el_texto:
  - abrir la serie de mecanismos psicológicos concretos
  - mostrar que una cualidad de presentación puede transformar un producto fallido
  - preparar el ejemplo de Puffed Wheat y Puffed Rice
estructura_interna:
  condicion: el_producto_no_logra_atencion_por_su_valor_ordinario
  accion: presentar_un_hecho_curioso_sobre_el_producto
  objetivo: despertar_interes_y_hacer_memorable_la_oferta
conecta_con:
  - EJ_PUFFED_WHEAT_RICE_CURIOSIDAD
  - DIS_MOLDE_EFECTO_REACCION_PUBLICITARIA
```

---

## 05. `EJ_PUFFED_WHEAT_RICE_CURIOSIDAD`

```yaml
orden_textual: 05
mnode_id: EJ_PUFFED_WHEAT_RICE_CURIOSIDAD
tipo_de_unidad: ejemplo_ancla
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Puffed Wheat and Puffed Rice... Grains puffed to 8 times... Foods shot from guns... 125 million steam explosions..."
formulacion: >
  Puffed Wheat y Puffed Rice fueron exitosos cuando se descubrió un factor de curiosidad:
  granos inflados, alimentos disparados desde cañones y explosiones de vapor en cada grano.
rol_operativo: ejemplificar_curiosidad_como_motor_de_exito
funcion_local_en_el_texto:
  - mostrar que una presentación curiosa puede rescatar productos fallidos
  - concretar el principio de curiosidad
  - iniciar el patrón de ejemplos donde una forma de decir cambia resultados
estructura_interna:
  condicion: los_productos_eran_fallidos_antes_de_descubrir_el_factor
  accion: comunicar_hechos_curiosos_y_sorprendentes
  objetivo: convertir_un_producto_ordinario_en_objeto_de_interes
conecta_con:
  - MN_CURIOSIDAD_INCENTIVO_FUERTE
  - MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS
```

---

## 06. `MN_CHEAPNESS_NO_APELACION_FUERTE`

```yaml
orden_textual: 06
mnode_id: MN_CHEAPNESS_NO_APELACION_FUERTE
tipo_de_unidad: principio_psicologico_contraintuitivo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Cheapness is not a strong appeal. Americans are extravagant. They want bargains but not cheapness."
formulacion: >
  La baratura no es una apelación fuerte: las personas quieren sentir que obtienen una ganga, pero no que consumen algo barato o inferior.
rol_operativo: distinguir_ganga_de_baratura
funcion_local_en_el_texto:
  - corregir la suposición de que bajo precio siempre vende mejor
  - mostrar que el comprador protege su autoimagen de capacidad y estatus
  - preparar el bloque de precio como señal de valor
estructura_interna:
  condicion: el_anunciante_considera_apelar_a_baratura
  accion: evitar_tratar_al_comprador_como_si_no_pudiera_pagar_lo_mejor
  objetivo: preservar_autoimagen_de_capacidad_y_deseo_de_calidad
conecta_con:
  - MN_PRECIO_COMO_SEÑAL_DE_VALOR
  - DIS_MOLDE_VALOR_PERCIBIDO_POR_PRECIO
```

---

## 07. `MN_PRECIO_COMO_SEÑAL_DE_VALOR`

```yaml
orden_textual: 07
mnode_id: MN_PRECIO_COMO_SEÑAL_DE_VALOR
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "People judge largely by price. They are not experts."
formulacion: >
  Las personas, al no ser expertas, juzgan en gran medida por el precio; el precio
  puede funcionar como señal de valor, prestigio o respeto.
rol_operativo: explicar_precio_como_indicador_psicologico
funcion_local_en_el_texto:
  - conectar precio con valor percibido
  - explicar por qué mencionar costos elevados puede aumentar respeto
  - preparar ejemplos de pintura, sombrero y fórmula costosa
estructura_interna:
  condicion: el_publico_no_puede_juzgar_expertamente_el_valor
  accion: usar_precio_o_costo_como_indicio_de_importancia
  objetivo: aumentar_respeto_y_percepcion_de_valor
conecta_con:
  - EJ_PINTURA_NATIONAL_GALLERY
  - EJ_SOMBRERO_MIL_DOLARES
  - MET_DECLARAR_COSTO_VALIOSO
```

---

## 08. `EJ_PINTURA_NATIONAL_GALLERY`

```yaml
orden_textual: 08
mnode_id: EJ_PINTURA_NATIONAL_GALLERY
tipo_de_unidad: ejemplo_ancla
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "In the British National Gallery... painting... cost $750,000... people return and surround it."
formulacion: >
  Una pintura ignorada por los visitantes gana atención cuando descubren que costó
  una suma enorme.
rol_operativo: ejemplificar_precio_como_activador_de_valor_percibido
funcion_local_en_el_texto:
  - mostrar que el precio puede cambiar la atención hacia un objeto
  - probar que las personas usan costo como criterio de importancia
estructura_interna:
  condicion: la_pintura_no_es_valorada_a_simple_vista
  accion: revelar_su_precio_elevado
  objetivo: activar_respeto_e_interes_por_valor_atribuido
conecta_con:
  - MN_PRECIO_COMO_SEÑAL_DE_VALOR
```

---

## 09. `EJ_SOMBRERO_MIL_DOLARES`

```yaml
orden_textual: 09
mnode_id: EJ_SOMBRERO_MIL_DOLARES
tipo_de_unidad: ejemplo_comercial
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "A department store advertised... a $1,000 hat... the floor could not hold the women who came to see it."
formulacion: >
  Un sombrero anunciado como de mil dólares atrae multitudes porque el precio elevado
  despierta curiosidad, prestigio y percepción de valor.
rol_operativo: trasladar_precio_como_señal_de_valor_a_contexto_comercial
funcion_local_en_el_texto:
  - reforzar que el precio alto puede atraer más que la baratura
  - mostrar la dimensión social y aspiracional del valor percibido
estructura_interna:
  condicion: tienda_busca_atencion_en_temporada_de_pascua
  accion: anunciar_sombrero_de_precio_extremo
  objetivo: atraer_interes_por_prestigio_y_excepcionalidad
conecta_con:
  - MN_PRECIO_COMO_SEÑAL_DE_VALOR
  - MET_DECLARAR_COSTO_VALIOSO
```

---

## 10. `MET_DECLARAR_COSTO_VALIOSO`

```yaml
orden_textual: 10
mnode_id: MET_DECLARAR_COSTO_VALIOSO
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "We state — as a fact — that we paid $100,000 for that formula."
formulacion: >
  Cuando se ofrece algo valioso pero abstracto, declarar el costo real pagado por ello
  puede aumentar respeto y credibilidad.
rol_operativo: convertir_precio_en_prueba_de_valor
funcion_local_en_el_texto:
  - transformar el principio de precio como señal en una técnica de copy
  - mostrar cómo hacer impresionante una afirmación que de otro modo sería vaga
estructura_interna:
  condicion: el_valor_del_producto_o_formula_no_es_evidente
  accion: declarar_un_costo_elevado_y_verificable
  objetivo: generar_respeto_por_la_inversion_y_valor_de_la_formula
conecta_con:
  - MN_PRECIO_COMO_SEÑAL_DE_VALOR
  - EJ_SOMBRERO_MIL_DOLARES
```

---

## 11. `MN_GARANTIA_COMUN_PIERDE_IMPACTO`

```yaml
orden_textual: 11
mnode_id: MN_GARANTIA_COMUN_PIERDE_IMPACTO
tipo_de_unidad: diagnostico_de_desgaste
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Many articles are sold under guarantee — so commonly sold that guarantees have ceased to be impressive."
formulacion: >
  Las garantías se han vuelto tan comunes que dejan de impresionar; para recuperar
  efecto deben cambiar su forma psicológica.
rol_operativo: mostrar_desgaste_de_una_apelacion_comercial
funcion_local_en_el_texto:
  - introducir la necesidad de reformular una oferta común
  - preparar el caso del warrant firmado por el dealer
estructura_interna:
  condicion: una_promesa_comercial_se_vuelve_comun
  accion: modificar_la_forma_de_responsabilidad_o_cercania
  objetivo: recuperar_confianza_e_impacto
conecta_con:
  - MET_GARANTIA_DEALER_LOCAL
  - DIS_MOLDE_REDUCCION_DE_RIESGO_PSICOLOGICA
```

```yaml
mecanismo:
  id: PSY_GARANTIA_LOCAL_COMO_RESPONSABILIDAD_CERCANA
  nombre: Garantía local como reducción de riesgo socialmente respaldada

  problema:
    - las_garantias_genericas_se_vuelven_comunes
    - la_promesa_abstracta_pierde_impacto
    - el_comprador_no_imagina_facilmente_como_reclamar
    - la_empresa_distante_puede_parecer_impersonal

  transformación:
    - el_dealer_local_firma_el_warrant
    - el_responsable_se_vuelve_identificable
    - la_reclamacion_se_vuelve_imaginable
    - la_promesa_se_incrusta_en_una_relacion_local

  mecanismos_psicologicos:
    - reduccion_de_riesgo_percibido
    - credibilidad_de_fuente
    - confianza_en_el_vendedor
    - proximidad_social
    - responsabilidad_identificable
    - costo_reputacional
    - facilidad_imaginada_de_reclamacion

  reacción_probable:
    - mayor_confianza
    - menor_resistencia
    - menor_miedo_a_perder
    - mayor_disposición_a_probar
    - mayor_probabilidad_de_compra
```

---

## 12. `MET_GARANTIA_DEALER_LOCAL`

```yaml
orden_textual: 12
mnode_id: MET_GARANTIA_DEALER_LOCAL
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "One concern made a fortune by offering a dealers signed warrant... a neighbor gave the warrant."
formulacion: >
  Una garantía firmada por el vendedor local resulta más efectiva que una garantía
  distante, porque desplaza la confianza hacia alguien cercano y responsable.
rol_operativo: reformular_garantia_por_cercania_y_responsabilidad
funcion_local_en_el_texto:
  - mostrar que la misma garantía cambia de efecto según quién la respalda
  - introducir cercanía social como factor de confianza
estructura_interna:
  condicion: la_garantia_general_ya_no_impresiona
  accion: hacer_que_el_dealer_local_firme_el_reembolso
  objetivo: aumentar_confianza_por_cercania_y_responsabilidad_personal
conecta_con:
  - MN_GARANTIA_COMUN_PIERDE_IMPACTO
  - DIS_MOLDE_REDUCCION_DE_RIESGO_PSICOLOGICA
```

---

## 13. `MET_APROBACION_SIN_PAGO_PREVIO`

```yaml
orden_textual: 13
mnode_id: MET_APROBACION_SIN_PAGO_PREVIO
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Send goods without any money down... Pay in a week if you like them."
formulacion: >
  Enviar bienes sin pago inicial y pedir pago sólo si gustan resulta más impresionante
  que prometer devolución después de cobrar.
rol_operativo: invertir_secuencia_de_riesgo_percibido
funcion_local_en_el_texto:
  - mostrar que pequeños cambios en la oferta modifican fuertemente la confianza
  - preparar la analogía de los dos caballos
estructura_interna:
  condicion: el_comprador_teme_arriesgar_dinero
  accion: permitir_prueba_antes_del_pago
  objetivo: reducir_friccion_y_aumentar_confianza
conecta_con:
  - HISTORIA_DOS_CABALLOS
  - MN_PERSONAS_HONESTAS_EN_APROBACION
  - DIS_MOLDE_REDUCCION_DE_RIESGO_PSICOLOGICA
```

---

## 14. `HISTORIA_DOS_CABALLOS`

```yaml
orden_textual: 14
mnode_id: HISTORIA_DOS_CABALLOS
tipo_de_unidad: analogia_comercial
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "Two men came to me, each offering me a horse... Come and pay me then."
formulacion: >
  Dos vendedores ofrecen caballos iguales; el comprador prefiere al que permite probar
  primero y pagar después.
rol_operativo: ejemplificar_superioridad_de_pago_posterior
funcion_local_en_el_texto:
  - hacer intuitiva la diferencia entre devolución y aprobación sin pago
  - reforzar que la forma de la promesa cambia la decisión
estructura_interna:
  condicion: dos_ofertas_con_reclamos_iguales
  accion: comparar_devolucion_posterior_vs_pago_despues_de_prueba
  objetivo: mostrar_que_pago_posterior_reduce_mas_el_riesgo_percibido
conecta_con:
  - MET_APROBACION_SIN_PAGO_PREVIO
```

---

## 15. `MN_PERSONAS_HONESTAS_EN_APROBACION`

```yaml
orden_textual: 15
mnode_id: MN_PERSONAS_HONESTAS_EN_APROBACION
tipo_de_unidad: principio_de_confianza
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "And we find that people are honest. The losses are very small."
formulacion: >
  En ofertas enviadas bajo aprobación, la mayoría de las personas actúa honestamente;
  las pérdidas son pequeñas.
rol_operativo: responder_objecion_contra_aprobacion_sin_pago
funcion_local_en_el_texto:
  - neutralizar el miedo a que la gente abuse de la oferta
  - justificar la expansión del método a múltiples productos
estructura_interna:
  condicion: el_anunciante_teme_perdidas_por_enviar_sin_pago
  accion: usar_experiencia_para_medir_honestidad_del_publico
  objetivo: legitimar_el_metodo_de_aprobacion
conecta_con:
  - MET_APROBACION_SIN_PAGO_PREVIO
```

---

## 16. `MN_NOMBRE_PROPIO_AGREGA_VALOR`

```yaml
orden_textual: 16
mnode_id: MN_NOMBRE_PROPIO_AGREGA_VALOR
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Names in gilt gave much added value to the books."
formulacion: >
  El nombre propio agregado a un objeto incrementa su valor percibido porque introduce
  personalización, pertenencia y apropiación simbólica.
rol_operativo: formular_principio_de_personalizacion
funcion_local_en_el_texto:
  - introducir un mecanismo distinto al precio o la garantía
  - mostrar que valor psicológico puede añadirse sin cambiar la utilidad material
estructura_interna:
  condicion: objeto_estandar_sin_diferenciacion_personal
  accion: añadir_nombre_del_comprador
  objetivo: aumentar_valor_percibido_por_personalizacion
conecta_con:
  - EJ_LIBROS_NOMBRE_DORADO
  - MET_REGALO_PERSONALIZADO_CON_SOLICITUD
  - DIS_MOLDE_PROPIEDAD_PSICOLOGICA
```

---

## 17. `EJ_LIBROS_NOMBRE_DORADO`

```yaml
orden_textual: 17
mnode_id: EJ_LIBROS_NOMBRE_DORADO
tipo_de_unidad: caso_metodologico
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Let us offer to put the buyers name in gilt lettering on each book... sold hundreds of thousands."
formulacion: >
  Un set de libros que no era rentable empieza a vender cientos de miles cuando se
  ofrece poner el nombre del comprador en letras doradas.
rol_operativo: demostrar_personalizacion_como_multiplicador_de_valor
funcion_local_en_el_texto:
  - ejemplificar cómo un pequeño toque psicológico transforma una oferta
  - mostrar valor agregado sin cambio sustancial del producto
estructura_interna:
  condicion: anuncios_impresionantes_pero_no_rentables
  accion: ofrecer_nombre_del_comprador_en_dorado
  objetivo: activar_orgullo_posesion_y_valor_personal
conecta_con:
  - MN_NOMBRE_PROPIO_AGREGA_VALOR
  - MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS
```

---

## 18. `MET_REGALO_PERSONALIZADO_CON_SOLICITUD`

```yaml
orden_textual: 18
mnode_id: MET_REGALO_PERSONALIZADO_CON_SOLICITUD
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "He had a leather-covered book with a man's name on it... It was waiting on him and would be sent on request."
formulacion: >
  Un regalo pequeño obtiene más respuesta cuando se presenta como algo personalizado,
  ya preparado y esperando al destinatario.
rol_operativo: activar_propiedad_psicologica_antes_de_la_posesion_real
funcion_local_en_el_texto:
  - mostrar cómo personalización puede inducir solicitud activa
  - permitir obtener información útil para futuras ventas
estructura_interna:
  condicion: pequeños_regalos_generan_poca_respuesta
  accion: decir_que_un_objeto_con_el_nombre_del_destinatario_ya_lo_espera
  objetivo: inducir_solicitud_y_obtener_informacion_de_venta
conecta_con:
  - MN_NOMBRE_PROPIO_AGREGA_VALOR
  - MN_PROPIEDAD_PSICOLOGICA_MUEVE_ESFUERZO
```

---

## 19. `MN_PROPIEDAD_PSICOLOGICA_MUEVE_ESFUERZO`

```yaml
orden_textual: 19
mnode_id: MN_PROPIEDAD_PSICOLOGICA_MUEVE_ESFUERZO
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "When a man knows that something belongs to them... he will make an effort to get it."
formulacion: >
  Cuando una persona siente que algo ya le pertenece, hace esfuerzo por obtenerlo,
  aunque el objeto sea pequeño.
rol_operativo: explicar_mecanismo_de_propiedad_anticipada
funcion_local_en_el_texto:
  - generalizar el caso del libro personalizado
  - explicar por qué la personalización induce acción
estructura_interna:
  condicion: el_destinatario_percibe_un_objeto_como_suyo
  accion: solicitar_o_reclamar_el_objeto
  objetivo: convertir_interes_pasivo_en_respuesta_activa
conecta_con:
  - MET_REGALO_PERSONALIZADO_CON_SOLICITUD
  - DIS_MOLDE_PROPIEDAD_PSICOLOGICA
```

---

## 20. `MN_OFERTA_LIMITADA_CLASE_MAS_EFECTIVA`

```yaml
orden_textual: 20
mnode_id: MN_OFERTA_LIMITADA_CLASE_MAS_EFECTIVA
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "An offer limited to a certain class of people is far more effective than a general offer."
formulacion: >
  Una oferta limitada a una clase específica de personas es más eficaz que una oferta
  general porque quienes tienen derecho a una ventaja hacen más esfuerzo por no perderla.
rol_operativo: formular_principio_de_exclusividad_y_derecho
funcion_local_en_el_texto:
  - extender la lógica de propiedad psicológica hacia pertenencia de grupo
  - mostrar que exclusividad aumenta respuesta
estructura_interna:
  condicion: la_oferta_puede_presentarse_como_privilegio_de_un_grupo
  accion: limitarla_a_veteranos_miembros_ejecutivos_u_otras_clases
  objetivo: activar_sentido_de_derecho_y_no_perder_ventaja
conecta_con:
  - DIS_MOLDE_EXCLUSIVIDAD_Y_VENTAJA
  - MN_PROPIEDAD_PSICOLOGICA_MUEVE_ESFUERZO
```

---

## 21. `MET_INVITAR_COMPARACION_CON_RIVALES`

```yaml
orden_textual: 21
mnode_id: MET_INVITAR_COMPARACION_CON_RIVALES
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Try our rivals' too... He invited comparisons and showed that he did not fear them."
formulacion: >
  Para combatir sustituciones, invitar a probar también a los rivales puede ser más
  eficaz que pedir egoístamente que no se compren sustitutos.
rol_operativo: convertir_confianza_en_arma_contra_sustitucion
funcion_local_en_el_texto:
  - mostrar que las apelaciones egoístas no movilizan al comprador
  - presentar confianza pública como señal de superioridad
estructura_interna:
  condicion: la_marca_sufre_sustitucion
  accion: invitar_a_comparar_con_rivales
  objetivo: hacer_que_el_comprador_busque_la_marca_superior_y_no_el_sustituto
conecta_con:
  - MN_APELACION_EGOISTA_FALLA
  - DIS_MOLDE_CONFIANZA_COMPARATIVA
```

---

## 22. `MN_APELACION_EGOISTA_FALLA`

```yaml
orden_textual: 22
mnode_id: MN_APELACION_EGOISTA_FALLA
tipo_de_unidad: diagnostico_de_fallo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Look out for substitutes... Those were selfish appeals."
formulacion: >
  Las apelaciones centradas en el interés del anunciante fallan cuando no le dan al
  comprador una razón propia para actuar.
rol_operativo: distinguir_interes_del_anunciante_de_interes_del_comprador
funcion_local_en_el_texto:
  - explicar por qué advertir contra sustitutos no funcionó
  - preparar el contraste con invitación a comparación
estructura_interna:
  condicion: el_anunciante_pide_proteger_su_marca
  accion: formular_apelacion_desde_el_interes_del_comprador
  objetivo: hacer_que_el_comprador_actue_por_confianza_en_superioridad_no_por_obediencia
conecta_con:
  - MET_INVITAR_COMPARACION_CON_RIVALES
```

---

## 23. `DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO`

```yaml
orden_textual: 23
mnode_id: DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
tipo_de_unidad: molde_comparativo
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Both offered a full-size package... one gave his package free. The other bought the package..."
formulacion: >
  Dos ofertas de muestra pueden parecer equivalentes, pero una muestra gratuita puede
  devaluar el producto mientras que pagar precio retail por la prueba aumenta respeto.
rol_operativo: comparar_dos_formas_de_muestreo
funcion_local_en_el_texto:
  - mostrar que la gratuidad puede perjudicar valor percibido
  - contrastar una misma oferta con dos impresiones mentales opuestas
estructura_interna:
  condicion: dos_anunciantes_ofrecen_paquete_completo_de_prueba
  accion: comparar_regalo_gratis_vs_cupon_que_el_fabricante_paga_al_retailer
  objetivo: mostrar_que_la_forma_de_la_muestra_modifica_el_respeto_por_el_producto
conecta_con:
  - MN_GRATIS_PUEDE_DEVALUAR_PRODUCTO
  - MN_PAGO_RETAIL_AUMENTA_RESPETO
```

---

## 24. `MN_GRATIS_PUEDE_DEVALUAR_PRODUCTO`

```yaml
orden_textual: 24
mnode_id: MN_GRATIS_PUEDE_DEVALUAR_PRODUCTO
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "He cheapened his product by giving a 15-cent package away."
formulacion: >
  Dar gratis un producto puede abaratarlo mentalmente y hacer difícil que luego se
  pague por él.
rol_operativo: advertir_contra_gratuidad_mal_enmarcada
funcion_local_en_el_texto:
  - explicar el fracaso del primer anunciante de alimentos
  - mostrar que la muestra no sólo debe distribuirse, sino enmarcarse con respeto de valor
estructura_interna:
  condicion: se_regala_un_producto_que_despues_debe_venderse
  accion: evitar_que_la_prueba_se_perciba_como_regalo_sin_valor
  objetivo: preservar_disposicion_a_pagar
conecta_con:
  - DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
```

---

## 25. `MN_PAGO_RETAIL_AUMENTA_RESPETO`

```yaml
orden_textual: 25
mnode_id: MN_PAGO_RETAIL_AUMENTA_RESPETO
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "An article good enough for the maker to buy is good enough for the user to buy."
formulacion: >
  Cuando el fabricante paga precio de venta para que el consumidor pruebe el producto,
  comunica respeto y confianza en su valor.
rol_operativo: formular_enmarque_positivo_de_prueba_pagada
funcion_local_en_el_texto:
  - explicar el éxito del segundo anunciante de alimentos
  - mostrar que pagar por la prueba afirma valor en lugar de destruirlo
estructura_interna:
  condicion: el_fabricante_quiere_inducir_prueba_sin_devaluar
  accion: comprar_el_producto_para_el_usuario_a_precio_retail
  objetivo: aumentar_respeto_y_legitimar_pago_futuro
conecta_con:
  - DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
```

---

## 26. `MET_MUESTRA_SOLICITADA_TRAS_HISTORIA`

```yaml
orden_textual: 26
mnode_id: MET_MUESTRA_SOLICITADA_TRAS_HISTORIA
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Get her to ask for a sample after reading your story... she knows your claims... expects to find the qualities you told."
formulacion: >
  Una muestra solicitada después de leer la historia de venta recibe más respeto que
  una muestra entregada sin ser pedida.
rol_operativo: convertir_muestreo_en_accion_interesada
funcion_local_en_el_texto:
  - mostrar que el estado mental previo del receptor determina la eficacia de la muestra
  - conectar interés, expectativa y percepción de cualidades
estructura_interna:
  condicion: se_quiere_que_el_usuario_aprecie_la_muestra
  accion: hacer_que_la_persona_lea_los_argumentos_y_solicite_la_muestra
  objetivo: crear_interes_y_expectativa_antes_de_la_prueba
conecta_con:
  - MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION
  - MN_GRATIS_PUEDE_DEVALUAR_PRODUCTO
```

---

## 27. `MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION`

```yaml
orden_textual: 27
mnode_id: MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "There is a great deal in mental impression... point out in one some qualities to notice and everyone will find them."
formulacion: >
  La impresión mental previa orienta lo que las personas perciben, valoran y eligen.
rol_operativo: formular_principio_de_preencuadre_perceptivo
funcion_local_en_el_texto:
  - explicar por qué la historia previa modifica la experiencia de la muestra
  - conectar publicidad con percepción guiada de cualidades
estructura_interna:
  condicion: objetos_parecidos_o_equivalentes
  accion: señalar_cualidades_especificas_a_observar
  objetivo: guiar_percepcion_y_preferencia_hacia_un_articulo_o_marca
conecta_con:
  - MET_MUESTRA_SOLICITADA_TRAS_HISTORIA
  - MN_MARCA_FAVORECIDA_POR_IMPRESION_MENTAL
```

---

## 28. `MN_MARCA_FAVORECIDA_POR_IMPRESION_MENTAL`

```yaml
orden_textual: 28
mnode_id: MN_MARCA_FAVORECIDA_POR_IMPRESION_MENTAL
tipo_de_unidad: inferencia_aplicada
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "If people can be made sick or well by mental impressions, they can be made to favor a certain brand in that way."
formulacion: >
  Si las impresiones mentales pueden afectar estados físicos o percepciones, también
  pueden inclinar preferencia hacia una marca.
rol_operativo: transferir_principio_de_impresion_mental_a_brand_preference
funcion_local_en_el_texto:
  - convertir el fenómeno perceptivo en estrategia de marca
  - sostener que en algunas líneas esta puede ser la única vía de ganar preferencia
estructura_interna:
  condicion: la_diferencia_material_no_basta_para_ganar_preferencia
  accion: crear_impresion_mental_que_oriente_evaluacion
  objetivo: generar_favor_por_una_marca
conecta_con:
  - MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION
```

---

## 29. `DIS_APELACION_MATERNA_ROPA_A_CREDITO`

```yaml
orden_textual: 29
mnode_id: DIS_APELACION_MATERNA_ROPA_A_CREDITO
tipo_de_unidad: caso_comparativo
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Two concerns... women's clothing on installments... one treated them like poor girls... the other put a woman in charge..."
formulacion: >
  Dos negocios de ropa a crédito ofrecen algo similar a mujeres pobres, pero uno fracasa
  al tratarlas como pobres y el otro triunfa al hablarles mediante una figura femenina
  digna, maternal y empática.
rol_operativo: mostrar_diferencia_entre_apelacion_fría_y_apelacion_empatica
funcion_local_en_el_texto:
  - enseñar que el tono y la identidad del emisor cambian la recepción de una oferta
  - mostrar que una oferta sensible debe preservar dignidad del comprador
estructura_interna:
  condicion: publico_desea_vestir_mejor_pero_no_puede_pagar_al_contado
  accion: presentar_la_oferta_como_ayuda_empatica_de_una_mujer_digna
  objetivo: hacer_que_el_credito_no_parezca_reflejo_de_pobreza_sino_oportunidad_comprensiva
conecta_con:
  - MN_TRATAR_COMO_POBRE_GENERA_RECHAZO
  - MET_PERSONA_EMPÁTICA_COMO_EMISOR
```

---

## 30. `MN_TRATAR_COMO_POBRE_GENERA_RECHAZO`

```yaml
orden_textual: 30
mnode_id: MN_TRATAR_COMO_POBRE_GENERA_RECHAZO
tipo_de_unidad: principio_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
segmento_fuente: "One treated them like poor girls and made the bare business offer."
formulacion: >
  Tratar al comprador desde su carencia puede generar rechazo; la apelación eficaz
  debe preservar dignidad, deseo y aspiración.
rol_operativo: explicar_fallo_de_la_oferta_fría
funcion_local_en_el_texto:
  - conectar el caso con la idea previa de no tratar al comprador como incapaz
  - mostrar que el crédito puede sentirse como ayuda o como humillación según el encuadre
estructura_interna:
  condicion: oferta_dirigida_a_personas_con_limitacion_economica
  accion: evitar_reflejarles_su_pobreza_de_modo_desnudo
  objetivo: preservar_autoimagen_y_dignidad_del_comprador
conecta_con:
  - DIS_APELACION_MATERNA_ROPA_A_CREDITO
  - MN_CHEAPNESS_NO_APELACION_FUERTE
```

---

## 31. `MET_PERSONA_EMPATICA_COMO_EMISOR`

```yaml
orden_textual: 31
mnode_id: MET_PERSONA_EMPATICA_COMO_EMISOR
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "They used her picture. She signed all ads and letters. She wrote to these girls like a friend."
formulacion: >
  En ofertas sensibles, una figura emisora empática, digna y cercana puede transformar
  una transacción fría en relación de confianza.
rol_operativo: humanizar_y_dignificar_la_oferta
funcion_local_en_el_texto:
  - explicar el éxito del negocio de ropa a crédito
  - mostrar cómo identidad del emisor altera la percepción de la oferta
estructura_interna:
  condicion: el_producto_o_credito_puede_hacer_sentir_inferior_al_comprador
  accion: usar_una_persona_creible_que_comparta_o_comprenda_su_situacion
  objetivo: crear_confianza_y_dignidad_en_lugar_de_humillacion
conecta_con:
  - DIS_APELACION_MATERNA_ROPA_A_CREDITO
  - MET_CREDITO_HALAGADOR_POR_RECOMENDACION
```

---

## 32. `MET_CREDITO_HALAGADOR_POR_RECOMENDACION`

```yaml
orden_textual: 32
mnode_id: MET_CREDITO_HALAGADOR_POR_RECOMENDACION
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Mrs. ___ tells us that you are one of her good customers... we have opened with you a credit account..."
formulacion: >
  Ofrecer crédito como reconocimiento personal basado en recomendación resulta halagador
  y más eficaz que ofrecer crédito como necesidad de pobres.
rol_operativo: convertir_credito_en_privilegio_y_confianza
funcion_local_en_el_texto:
  - extender el caso de ropa a mobiliario
  - mostrar que el crédito puede enmarcarse como prestigio, no carencia
estructura_interna:
  condicion: se_quiere_vender_mobiliario_a_clientes_de_credito
  accion: presentar_credito_como_cuenta_abierta_por_buena_reputacion_y_recomendacion
  objetivo: hacer_que_el_cliente_se_sienta_confiable_y_distinguido
conecta_con:
  - MET_PERSONA_EMPÁTICA_COMO_EMISOR
  - MN_OFERTA_LIMITADA_CLASE_MAS_EFECTIVA
  - DIS_MOLDE_DIGNIFICAR_OFERTA_SENSIBLE
```

---

## 33. `MN_APRENDER_METODOS_GANADORES`

```yaml
orden_textual: 33
mnode_id: MN_APRENDER_METODOS_GANADORES
tipo_de_unidad: principio_de_acumulacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Some people know them by instinct. Many of them are taught by experience. But we learn most of them from others."
formulacion: >
  Las fases de la psicología publicitaria pueden conocerse por instinto, experiencia
  propia o aprendizaje de métodos ganadores de otros.
rol_operativo: conectar_psicologia_con_acumulacion_de_experiencia
funcion_local_en_el_texto:
  - cerrar la serie de ejemplos como repertorio acumulable
  - reforzar que cada método ganador debe registrarse para uso futuro
estructura_interna:
  condicion: existen_multiples_fases_de_psicologia_publicitaria
  accion: aprender_de_instinto_experiencia_y_metodos_de_otros
  objetivo: formar_repertorio_de_respuestas_psicologicas_efectivas
conecta_con:
  - MN_NATURALEZA_HUMANA_PERMANENTE
  - MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS
```

---

## 34. `MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS`

```yaml
orden_textual: 34
mnode_id: MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS
tipo_de_unidad: regla_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "An identical offer made in a different way may bring multiplied returns."
formulacion: >
  Una oferta idéntica, presentada de una forma diferente, puede producir retornos
  multiplicados.
rol_operativo: condensar_principio_final_del_capitulo
funcion_local_en_el_texto:
  - sintetizar todos los ejemplos previos
  - convertir la psicología en criterio de formulación de ofertas
  - cerrar el capítulo con una regla general de búsqueda del mejor método
estructura_interna:
  condicion: la_oferta_base_es_la_misma
  accion: cambiar_forma_psicologica_de_presentacion
  objetivo: multiplicar_retornos
conecta_con:
  - EJ_PUFFED_WHEAT_RICE_CURIOSIDAD
  - EJ_LIBROS_NOMBRE_DORADO
  - MET_APROBACION_SIN_PAGO_PREVIO
  - DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
  - MET_CREDITO_HALAGADOR_POR_RECOMENDACION
```

---

## 35. `MET_BUSCAR_MEJOR_METODO_EN_EXPERIENCIA`

```yaml
orden_textual: 35
mnode_id: MET_BUSCAR_MEJOR_METODO_EN_EXPERIENCIA
tipo_de_unidad: metodo_terminal
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Somewhere in the mines of business experience we must find the best method somehow."
formulacion: >
  El publicista debe buscar en la experiencia de negocios el mejor método de formular
  una oferta para activar la reacción psicológica correcta.
rol_operativo: convertir_el_capitulo_en_tarea_de_busqueda_y_registro
funcion_local_en_el_texto:
  - cerrar el capítulo con una orientación práctica
  - conectar experiencia comercial con descubrimiento de métodos psicológicos
estructura_interna:
  condicion: existen_multiples_formas_de_presentar_una_misma_oferta
  accion: buscar_en_experiencia_de_negocios_el_metodo_que_mejor_funciona
  objetivo: elegir_la_forma_psicologica_de_mayor_retorno
conecta_con:
  - MN_APRENDER_METODOS_GANADORES
  - MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS
```

---

# 3. Moldes estructurales detectados

## Molde 1: `DIS_MOLDE_EFECTO_REACCION_PUBLICITARIA`

```yaml
molde:
  mnode_id: DIS_MOLDE_EFECTO_REACCION_PUBLICITARIA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Una forma de presentar la oferta produce un efecto mental específico; ese efecto
    activa una reacción que puede aumentar o reducir resultados.
  estructura:
    oferta_base:
    forma_de_presentacion:
    efecto_psicologico:
    reaccion_del_publico:
    resultado_comercial:
  invariantes:
    - existe una oferta o producto
    - se modifica su forma de presentación
    - la modificación produce impresión mental
    - la impresión altera respuesta y retorno
  instancias:
    - EJ_PUFFED_WHEAT_RICE_CURIOSIDAD
    - MET_DECLARAR_COSTO_VALIOSO
    - MET_APROBACION_SIN_PAGO_PREVIO
    - EJ_LIBROS_NOMBRE_DORADO
    - DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
```

## Molde 2: `DIS_MOLDE_VALOR_PERCIBIDO_POR_PRECIO`

```yaml
molde:
  mnode_id: DIS_MOLDE_VALOR_PERCIBIDO_POR_PRECIO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Cuando el público no puede juzgar técnicamente un valor, precio o costo elevado
    puede funcionar como señal de importancia.
  estructura:
    objeto_o_formula:
    valor_no_evidente:
    precio_o_costo_declarado:
    reaccion_de_respeto:
    resultado:
  instancias:
    - EJ_PINTURA_NATIONAL_GALLERY
    - EJ_SOMBRERO_MIL_DOLARES
    - MET_DECLARAR_COSTO_VALIOSO
```

## Molde 3: `DIS_MOLDE_REDUCCION_DE_RIESGO_PSICOLOGICA`

```yaml
molde:
  mnode_id: DIS_MOLDE_REDUCCION_DE_RIESGO_PSICOLOGICA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Reducir el riesgo percibido no depende sólo de ofrecer garantía, sino de quién
    asume la responsabilidad y cuándo se exige el pago.
  estructura:
    oferta:
    riesgo_percibido:
    forma_de_respaldo:
    secuencia_de_pago:
    confianza_resultante:
  instancias:
    - MET_GARANTIA_DEALER_LOCAL
    - MET_APROBACION_SIN_PAGO_PREVIO
    - HISTORIA_DOS_CABALLOS
```

## Molde 4: `DIS_MOLDE_PROPIEDAD_PSICOLOGICA`

```yaml
molde:
  mnode_id: DIS_MOLDE_PROPIEDAD_PSICOLOGICA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Cuando una persona percibe que un objeto ya está asociado con ella o le pertenece,
    hace más esfuerzo por reclamarlo.
  estructura:
    objeto:
    personalizacion:
    percepcion_de_posesion:
    esfuerzo_de_reclamo:
    informacion_o_venta_obtenida:
  instancias:
    - EJ_LIBROS_NOMBRE_DORADO
    - MET_REGALO_PERSONALIZADO_CON_SOLICITUD
```

## Molde 5: `DIS_MOLDE_EXCLUSIVIDAD_Y_VENTAJA`

```yaml
molde:
  mnode_id: DIS_MOLDE_EXCLUSIVIDAD_Y_VENTAJA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Una oferta limitada a una clase activa el deseo de no perder una ventaja percibida.
  estructura:
    grupo_elegible:
    ventaja_aparente:
    sentido_de_derecho:
    esfuerzo_por_no_perder:
    respuesta:
  instancias:
    - oferta_para_veteranos
    - oferta_para_miembros_de_lodge_o_secta
    - oferta_para_ejecutivos
```

## Molde 6: `DIS_MOLDE_DIGNIFICAR_OFERTA_SENSIBLE`

```yaml
molde:
  mnode_id: DIS_MOLDE_DIGNIFICAR_OFERTA_SENSIBLE
  familia_cognitiva: FAM-Diseño
  formulacion: >
    En ofertas relacionadas con carencia, crédito o limitación económica, la formulación
    debe dignificar al comprador en lugar de recordarle su debilidad.
  estructura:
    comprador_con_limitacion:
    oferta_sensible:
    encuadre_humillante:
    encuadre_dignificante:
    resultado_comparado:
  instancias:
    - DIS_APELACION_MATERNA_ROPA_A_CREDITO
    - MET_CREDITO_HALAGADOR_POR_RECOMENDACION
```

---

# 4. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: MN_TITULO_PSYCHOLOGY
    tipo: desarrolla_en
    destino: MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA

  - origen: MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA
    tipo: fundamenta
    destino: MN_EFECTOS_LLEVAN_A_REACCIONES

  - origen: MN_NATURALEZA_HUMANA_PERMANENTE
    tipo: justifica_acumulacion_de
    destino: MN_APRENDER_METODOS_GANADORES

  - origen: MN_CURIOSIDAD_INCENTIVO_FUERTE
    tipo: ejemplificada_por
    destino: EJ_PUFFED_WHEAT_RICE_CURIOSIDAD

  - origen: MN_CHEAPNESS_NO_APELACION_FUERTE
    tipo: contrasta_con
    destino: MN_PRECIO_COMO_SEÑAL_DE_VALOR

  - origen: MN_PRECIO_COMO_SEÑAL_DE_VALOR
    tipo: ejemplificada_por
    destino: EJ_PINTURA_NATIONAL_GALLERY

  - origen: MN_PRECIO_COMO_SEÑAL_DE_VALOR
    tipo: ejemplificada_por
    destino: EJ_SOMBRERO_MIL_DOLARES

  - origen: MN_PRECIO_COMO_SEÑAL_DE_VALOR
    tipo: operacionalizada_por
    destino: MET_DECLARAR_COSTO_VALIOSO

  - origen: MN_GARANTIA_COMUN_PIERDE_IMPACTO
    tipo: corrige_mediante
    destino: MET_GARANTIA_DEALER_LOCAL

  - origen: MET_APROBACION_SIN_PAGO_PREVIO
    tipo: explicada_por
    destino: HISTORIA_DOS_CABALLOS

  - origen: MET_APROBACION_SIN_PAGO_PREVIO
    tipo: validada_por
    destino: MN_PERSONAS_HONESTAS_EN_APROBACION

  - origen: MN_NOMBRE_PROPIO_AGREGA_VALOR
    tipo: ejemplificada_por
    destino: EJ_LIBROS_NOMBRE_DORADO

  - origen: MN_NOMBRE_PROPIO_AGREGA_VALOR
    tipo: operacionalizada_por
    destino: MET_REGALO_PERSONALIZADO_CON_SOLICITUD

  - origen: MET_REGALO_PERSONALIZADO_CON_SOLICITUD
    tipo: explica
    destino: MN_PROPIEDAD_PSICOLOGICA_MUEVE_ESFUERZO

  - origen: MN_OFERTA_LIMITADA_CLASE_MAS_EFECTIVA
    tipo: variante_de
    destino: DIS_MOLDE_EXCLUSIVIDAD_Y_VENTAJA

  - origen: MN_APELACION_EGOISTA_FALLA
    tipo: contrasta_con
    destino: MET_INVITAR_COMPARACION_CON_RIVALES

  - origen: DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
    tipo: produce
    destino: MN_GRATIS_PUEDE_DEVALUAR_PRODUCTO

  - origen: DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
    tipo: produce
    destino: MN_PAGO_RETAIL_AUMENTA_RESPETO

  - origen: MET_MUESTRA_SOLICITADA_TRAS_HISTORIA
    tipo: depende_de
    destino: MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION

  - origen: MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION
    tipo: deriva_en
    destino: MN_MARCA_FAVORECIDA_POR_IMPRESION_MENTAL

  - origen: DIS_APELACION_MATERNA_ROPA_A_CREDITO
    tipo: soporta
    destino: MET_PERSONA_EMPÁTICA_COMO_EMISOR

  - origen: MN_TRATAR_COMO_POBRE_GENERA_RECHAZO
    tipo: explica_fallo_en
    destino: DIS_APELACION_MATERNA_ROPA_A_CREDITO

  - origen: MET_PERSONA_EMPÁTICA_COMO_EMISOR
    tipo: extiende_a
    destino: MET_CREDITO_HALAGADOR_POR_RECOMENDACION

  - origen: MN_APRENDER_METODOS_GANADORES
    tipo: conduce_a
    destino: MET_BUSCAR_MEJOR_METODO_EN_EXPERIENCIA

  - origen: MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS
    tipo: condensa
    destino: MN_EFECTOS_LLEVAN_A_REACCIONES
```

---

# 5. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: formular principios psicológicos, advertencias y reglas de percepción de valor
    nodos:
      - MN_PUBLICISTA_DEBE_ENTENDER_PSICOLOGIA
      - MN_NATURALEZA_HUMANA_PERMANENTE
      - MN_CURIOSIDAD_INCENTIVO_FUERTE
      - MN_CHEAPNESS_NO_APELACION_FUERTE
      - MN_PRECIO_COMO_SEÑAL_DE_VALOR
      - MN_GARANTIA_COMUN_PIERDE_IMPACTO
      - MN_NOMBRE_PROPIO_AGREGA_VALOR
      - MN_PROPIEDAD_PSICOLOGICA_MUEVE_ESFUERZO
      - MN_OFERTA_LIMITADA_CLASE_MAS_EFECTIVA
      - MN_IMPRESION_MENTAL_ORIENTA_PERCEPCION
      - MN_TRATAR_COMO_POBRE_GENERA_RECHAZO
      - MN_MISMA_OFERTA_FORMA_DISTINTA_MULTIPLICA_RETORNOS

  FAM-Patrón-de-razonamiento:
    funcion: justificar transformaciones de reacción por cambio de presentación
    nodos:
      - MN_EFECTOS_LLEVAN_A_REACCIONES
      - HISTORIA_DOS_CABALLOS
      - MN_MARCA_FAVORECIDA_POR_IMPRESION_MENTAL

  FAM-Diseño:
    funcion: organizar moldes psicológicos de valor, riesgo, propiedad, exclusividad y dignidad
    nodos:
      - DIS_MOLDE_EFECTO_REACCION_PUBLICITARIA
      - DIS_MOLDE_VALOR_PERCIBIDO_POR_PRECIO
      - DIS_MOLDE_REDUCCION_DE_RIESGO_PSICOLOGICA
      - DIS_MOLDE_PROPIEDAD_PSICOLOGICA
      - DIS_MOLDE_EXCLUSIVIDAD_Y_VENTAJA
      - DIS_MOLDE_DIGNIFICAR_OFERTA_SENSIBLE
      - DIS_SAMPLE_GRATIS_VS_PAQUETE_COMPRADO
      - DIS_APELACION_MATERNA_ROPA_A_CREDITO

  FAM-Método:
    funcion: convertir hallazgos psicológicos en procedimientos publicitarios
    nodos:
      - MET_DECLARAR_COSTO_VALIOSO
      - MET_GARANTIA_DEALER_LOCAL
      - MET_APROBACION_SIN_PAGO_PREVIO
      - MET_REGALO_PERSONALIZADO_CON_SOLICITUD
      - MET_INVITAR_COMPARACION_CON_RIVALES
      - MET_MUESTRA_SOLICITADA_TRAS_HISTORIA
      - MET_PERSONA_EMPÁTICA_COMO_EMISOR
      - MET_CREDITO_HALAGADOR_POR_RECOMENDACION
      - MET_BUSCAR_MEJOR_METODO_EN_EXPERIENCIA

  formas_compuestas:
    funcion: casos, analogías y ejemplos que manifiestan los mecanismos psicológicos
    nodos:
      - EJ_PUFFED_WHEAT_RICE_CURIOSIDAD
      - EJ_PINTURA_NATIONAL_GALLERY
      - EJ_SOMBRERO_MIL_DOLARES
      - HISTORIA_DOS_CABALLOS
      - EJ_LIBROS_NOMBRE_DORADO
      - DIS_APELACION_MATERNA_ROPA_A_CREDITO
```

---

# 6. Plan expositivo del capítulo

```yaml
mnode_id: PLAN_RECORRIDO_CAPITULO_6
familia_cognitiva: FAM-Plan
tipo_de_unidad: plan_expositivo
estatus_de_extraccion: molde_derivado
formulacion: >
  El capítulo define la psicología como requisito del publicista, establece que la
  naturaleza humana es estable y luego acumula ejemplos de mecanismos psicológicos
  que modifican el rendimiento de las ofertas.
secuencia:
  - establecer_necesidad_de_psicologia_para_el_publicista
  - justificar_estabilidad_de_principios_psicologicos
  - mostrar_curiosidad_como_incentivo
  - distinguir_ganga_de_baratura
  - usar_precio_como_señal_de_valor
  - reformular_garantias_y_aprobacion
  - activar_personalizacion_y_propiedad_psicologica
  - usar_exclusividad_y_derecho_de_clase
  - invitar_comparacion_para_combatir_sustitucion
  - cuidar_impresion_de_valor_en_muestras
  - guiar_percepcion_mediante_impresion_mental
  - dignificar_ofertas_sensibles_mediante_emisor_empatico
  - aprender_metodos_de_experiencia_propia_y_ajena
  - cerrar_con_regla_de_forma_distinta_retorno_multiplicado
```

---

# 7. Síntesis estructural del capítulo

```txt
TESIS:
  El publicista competente debe entender psicología.

FUNDAMENTO:
  La naturaleza humana es permanente.
  Ciertos efectos producen ciertas reacciones.

MECANISMOS:
  Curiosidad:
    Puffed Wheat / Puffed Rice.

  Valor percibido:
    precio alto, fórmula costosa, sombrero de mil dólares.

  Riesgo y confianza:
    garantía local, aprobación sin pago previo, prueba y pago posterior.

  Personalización:
    nombre en libros, objeto con nombre esperando al destinatario.

  Exclusividad:
    ofertas limitadas a clases o grupos.

  Comparación:
    invitar a probar rivales muestra confianza y reduce sustitución.

  Gratuidad y valor:
    una muestra gratis puede abaratar el producto;
    una prueba pagada por el fabricante puede aumentar respeto.

  Impresión mental:
    señalar cualidades guía percepción y preferencia.

  Dignidad del comprador:
    no tratar como pobre a quien compra con crédito;
    usar una figura empática puede transformar la oferta.

CIERRE:
  Una oferta idéntica, formulada de otra manera, puede multiplicar retornos.
  El publicista debe buscar en la experiencia de negocios el mejor método.
```

---

# 8. Núcleo interpretativo final del procesamiento estructural

```txt
El capítulo sostiene que la publicidad eficaz depende de conocer y aplicar efectos
psicológicos estables. La oferta objetiva no basta; importa cómo se la presenta,
quién la respalda, qué impresión mental genera, qué dignidad preserva y qué reacción
activa en el comprador.

El mismo producto puede fracasar o multiplicar sus retornos según la forma de la oferta:
una palabra, una garantía local, un nombre personalizado, una restricción de clase,
un pago posterior, una muestra solicitada o una figura empática pueden cambiar la
respuesta humana.

Por eso la psicología publicitaria no es especulación abstracta, sino un repertorio de
métodos descubiertos por experiencia, registrados y reutilizados para aumentar resultados.
```

Fórmula mínima:

```txt
oferta_base
  → forma_psicologica_de_presentacion
    → impresion_mental
      → reaccion_humana
        → respuesta_comercial
          → retorno
```

Y la regla terminal:

```txt
Una oferta idéntica, presentada de otra manera, puede producir retornos multiplicados.
```
