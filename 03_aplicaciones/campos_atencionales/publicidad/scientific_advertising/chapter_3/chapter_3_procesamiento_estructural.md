# chapter_3_procesamiento_estructural

**Texto raíz:** `chapter_3.md`  
**Capítulo:** Chapter 3 — *Offer Service*  
**Tipo de salida:** `paso_1_procesamiento_estructural`  
**Función:** estructurar linealmente las unidades cognitivas contenidas en el capítulo, respetando el orden de aparición, antes de construir una síntesis conceptual profunda o un modelo analítico posterior.

---

# 0. Principio rector del procesamiento

Este capítulo continúa la línea de los capítulos anteriores: la publicidad debe entenderse como **salesmanship**, pero ahora se enfoca en una dimensión específica de esa venta: **no pedir primero la compra, sino ofrecer servicio**.

La tesis estructural del capítulo puede formularse así:

```txt
La gente no actúa por el interés del anunciante, sino por su propio interés.
Por eso, la publicidad eficaz no comienza pidiendo compra, dinero o preferencia;
comienza ofreciendo servicio, información, prueba, muestra, utilidad o eliminación de riesgo.
```

En este primer paso no se construye todavía una teoría completa de reciprocidad, influencia o conversión. Se identifican las estructuras cognitivas que aparecen en el texto y se organizan en el orden en que se presentan.

---

# 1. Texto raíz

```yaml
texto_raiz:
  texto_id: TEXTO_HOPKINS_CH3_OFFER_SERVICE
  titulo: "Chapter 3 — Offer Service"
  dominio: publicidad / ventas / persuasión comercial / psicología del comprador
  tipo_de_fuente: capitulo_expositivo_normativo
  funcion_global: >
    Establecer que la publicidad eficaz debe comenzar desde el interés del comprador,
    ofreciendo servicio, utilidad, prueba o reducción de riesgo, en lugar de pedir
    directamente compra, dinero o preferencia de marca.
```

---

# 2. Núcleo estructural provisional

```yaml
nucleo_interpretativo_provisional:
  formulacion: >
    Las personas son egoístas en el sentido comercial: no se interesan por la ganancia,
    necesidad o deseo del anunciante, sino por el servicio que pueden recibir. Por eso,
    el anuncio eficaz no dice "cómprame", sino que ofrece algo útil: información,
    ventajas, muestras, prueba gratuita, aprobación sin riesgo o posibilidad de devolución.
    La compra aparece como resultado natural del servicio recibido.

  oposicion_central:
    publicidad_que_pide:
      - compra_mi_marca
      - dame_tu_dinero
      - cambia_el_comercio_que_das_a_otros
      - beneficia_mis_intereses
      - conduce_o_empuja_al_cliente

    publicidad_que_sirve:
      - ofrece_informacion_deseada
      - muestra_ventajas_para_el_usuario
      - ofrece_muestra
      - permite_prueba_sin_riesgo
      - permite_devolucion
      - genera_rec reciprocidad
      - conduce_naturalmente_a_la_compra
```

Fórmula compacta:

```txt
interés_del_comprador
  → oferta_de_servicio
    → prueba_sin_riesgo
      → confianza / reciprocidad / demostración
        → compra_como_resultado_natural
```

---

# 3. Secuencia lineal de mNodes detectados

---

## 00. `MN_TITULO_OFFER_SERVICE`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_OFFER_SERVICE
tipo_de_unidad: titulo_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Offer Service"
formulacion: "La publicidad eficaz debe ofrecer servicio antes que pedir compra."
rol_operativo: condensar_principio_del_capitulo
funcion_local_en_el_texto:
  - anunciar el principio central del capítulo
  - desplazar la publicidad desde petición de compra hacia servicio al comprador
  - preparar ejemplos de muestras, pruebas y ofertas sin riesgo
estructura_interna:
  accion_recomendada: ofrecer_servicio
  accion_rechazada: pedir_compra_directa
  receptor: comprador_potencial
conecta_con:
  - MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
  - MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
```

---

## 01. `MN_COMPRADOR_BUSCA_SERVICIO_PROPIO`

```yaml
orden_textual: 01
mnode_id: MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
tipo_de_unidad: formulacion_antropologica_comercial
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Remember the people you address are selfish, as we all are... They seek service for themselves."
formulacion: >
  Las personas a las que se dirige la publicidad buscan servicio para sí mismas;
  no se interesan por las ganancias, intereses o necesidades del anunciante.
rol_operativo: fijar_modelo_del_receptor
funcion_local_en_el_texto:
  - establecer la base psicológica del capítulo
  - explicar por qué pedir compra directamente falla
  - centrar la publicidad en el interés del comprador
estructura_interna:
  receptor:
    rasgo: egoismo_comercial
    busca:
      - servicio_para_si_mismo
      - utilidad
      - beneficio
      - ventaja
    no_busca:
      - beneficio_del_anunciante
      - ganancia_del_vendedor
      - interés_del_fabricante
conecta_con:
  - MN_ERROR_IGNORAR_INTERES_DEL_COMPRADOR
  - MN_ANUNCIO_EGOISTA_NO_APELA
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
```

Este mNode funciona como fundamento del capítulo. La publicidad falla cuando olvida que el comprador se mueve por su propio beneficio percibido.

---

## 02. `MN_ERROR_IGNORAR_INTERES_DEL_COMPRADOR`

```yaml
orden_textual: 02
mnode_id: MN_ERROR_IGNORAR_INTERES_DEL_COMPRADOR
tipo_de_unidad: diagnostico_de_error
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Ignoring this fact is a common mistake and a costly mistake in advertising."
formulacion: >
  Ignorar que el comprador busca su propio servicio es un error común y costoso en publicidad.
rol_operativo: diagnosticar_fallo_publicitario_recurrente
funcion_local_en_el_texto:
  - señalar la causa de muchos anuncios débiles
  - preparar la crítica a anuncios centrados en el anunciante
  - conectar psicología del comprador con costo comercial
estructura_interna:
  hecho_ignorado: comprador_busca_servicio_propio
  consecuencia:
    - error_comun
    - error_costoso
    - publicidad_poco_popular
conecta_con:
  - MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
  - MN_ANUNCIO_EGOISTA_NO_APELA
```

---

## 03. `MN_ANUNCIO_EGOISTA_NO_APELA`

```yaml
orden_textual: 03
mnode_id: MN_ANUNCIO_EGOISTA_NO_APELA
tipo_de_unidad: delimitacion_negativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Ads say in effect, 'Buy my brand... Let me have the money.' That is not a popular appeal."
formulacion: >
  El anuncio que pide compra, preferencia o dinero desde el interés del anunciante
  no constituye una apelación popular.
rol_operativo: excluir_forma_erronea_de_apelacion
funcion_local_en_el_texto:
  - mostrar la versión negativa de la publicidad
  - evidenciar que muchas apelaciones están centradas en el vendedor
  - preparar la alternativa basada en servicio
estructura_interna:
  frases_implicitas_erroneas:
    - compra_mi_marca
    - dame_el_comercio_que_das_a_otros
    - dame_tu_dinero
  problema:
    - habla_desde_interes_del_anunciante
    - ignora_interes_del_comprador
    - no_resulta_popular
conecta_con:
  - MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
```

---

## 04. `MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA`

```yaml
orden_textual: 04
mnode_id: MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA
tipo_de_unidad: tesis_contraintuitiva
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The best ads ask no one to buy. That is useless. Often they do not quote a price."
formulacion: >
  Los mejores anuncios no comienzan pidiendo compra; muchas veces ni siquiera
  mencionan precio, distribuidor o compra directa.
rol_operativo: invertir_expectativa_de_venta_directa
funcion_local_en_el_texto:
  - formular la tesis positiva inicial
  - separar venta eficaz de petición directa
  - preparar los mecanismos de servicio y prueba
estructura_interna:
  anuncio_eficaz_no_hace:
    - pedir_compra_directa
    - insistir_en_precio
    - hablar_de_distribuidores
  anuncio_eficaz_hace:
    - ofrecer_servicio
    - ofrecer_informacion
    - ofrecer_prueba
conecta_con:
  - MN_ANUNCIOS_BASADOS_EN_SERVICIO
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
```

---

## 05. `MN_ANUNCIOS_BASADOS_EN_SERVICIO`

```yaml
orden_textual: 05
mnode_id: MN_ANUNCIOS_BASADOS_EN_SERVICIO
tipo_de_unidad: definicion_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The ads are based entirely on service. They offer wanted information. They cite advantages to users..."
formulacion: >
  Los anuncios eficaces se basan en servicio: información deseada, ventajas para
  el usuario, muestras, pruebas gratuitas, aprobación o eliminación de riesgo.
rol_operativo: definir_contenido_positivo_del_anuncio_de_servicio
funcion_local_en_el_texto:
  - especificar qué significa ofrecer servicio
  - convertir una idea general en opciones concretas
  - preparar ejemplos de venta directa y por prueba
estructura_interna:
  formas_de_servicio:
    - informacion_deseada
    - ventajas_para_el_usuario
    - muestra
    - compra_del_primer_paquete_por_el_anunciante
    - envio_a_prueba
    - prueba_sin_costo
    - prueba_sin_riesgo
    - aprobacion_antes_de_compra_definitiva
conecta_con:
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
```

---

## 06. `MN_ALTRUISMO_APARENTE_ESTRATEGIA_HUMANA`

```yaml
orden_textual: 06
mnode_id: MN_ALTRUISMO_APARENTE_ESTRATEGIA_HUMANA
tipo_de_unidad: aclaracion_estrategica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Some of these ads seem altruistic. But they are based on the knowledge of human nature."
formulacion: >
  Aunque algunas ofertas de servicio parecen altruistas, en realidad se basan en
  conocimiento práctico de la naturaleza humana y de cómo las personas son llevadas a comprar.
rol_operativo: separar_altruismo_aparente_de_estrategia_comercial
funcion_local_en_el_texto:
  - evitar una lectura moralista ingenua
  - mostrar que el servicio es una técnica de salesmanship
  - conectar servicio con psicología de compra
estructura_interna:
  apariencia: altruismo
  fundamento_real:
    - conocimiento_de_naturaleza_humana
    - conocimiento_de_como_personas_compran
    - salesmanship
conecta_con:
  - MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
```

---

## 07. `MN_BUEN_VENDEDOR_PINTA_LADO_DEL_CLIENTE`

```yaml
orden_textual: 07
mnode_id: MN_BUEN_VENDEDOR_PINTA_LADO_DEL_CLIENTE
tipo_de_unidad: modelo_positivo_de_salesmanship
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The good salesman does not merely cry a name... He pictures the customer's side of his service until the natural result is to buy."
formulacion: >
  El buen vendedor no se limita a gritar un nombre ni a pedir compra; representa
  el servicio desde el lado del cliente hasta que la compra resulta natural.
rol_operativo: definir_modelo_de_vendedor_que_el_anuncio_debe_imitar
funcion_local_en_el_texto:
  - vincular el capítulo con la tesis de publicidad como salesmanship
  - establecer que la compra debe surgir como consecuencia del servicio percibido
  - preparar los casos de muestras, prueba y reciprocidad
estructura_interna:
  mal_vendedor:
    - grita_nombre
    - dice_compra_mi_articulo
  buen_vendedor:
    - representa_lado_del_cliente
    - muestra_servicio_al_cliente
    - conduce_a_compra_natural
conecta_con:
  - MN_ANUNCIOS_BASADOS_EN_SERVICIO
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
```

---

## 08. `DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA`

```yaml
orden_textual: 08
mnode_id: DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  El vendedor ofrece primero un servicio, muestra, prueba, regalo o ausencia de riesgo;
  el comprador experimenta beneficio, confianza o reciprocidad, y la compra surge como resultado natural.
rol_operativo: organizar_casos_isomorfos_de_oferta_de_servicio
estructura:
  vendedor_o_anunciante:
  producto:
  servicio_inicial:
  riesgo_eliminado:
  reaccion_del_comprador:
  conversion_o_compra:
invariantes:
  - no se pide compra al inicio
  - se ofrece primero algo útil o ventajoso para el comprador
  - el comprador puede probar, elegir, recibir o evaluar sin riesgo inicial
  - la compra aparece como consecuencia natural de la experiencia
  - la técnica se basa en conocimiento de naturaleza humana
instancias:
  - CASO_VENDEDOR_DE_CEPILLOS
  - CASO_CAFE_POR_CARROS
  - CASO_MOTOR_MAQUINA_DE_COSER
  - CASO_CIGARROS_PRUEBA_Y_DEVOLUCION
  - CASO_PRODUCTOS_ENVIADOS_A_APROBACION
conecta_con:
  - MN_ANUNCIOS_BASADOS_EN_SERVICIO
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
```

---

# 4. Casos ancla del molde de servicio

---

## 09. `CASO_VENDEDOR_DE_CEPILLOS`

```yaml
orden_textual: 09
mnode_id: CASO_VENDEDOR_DE_CEPILLOS
tipo_de_unidad: caso_metodologico
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "A brush maker has some 2,000 canvassers... 'I was sent here to give you a brush...'"
formulacion: >
  Un vendedor de cepillos no pide compra; ofrece un cepillo para elegir, genera
  atención positiva, exposición a otros productos y deseo de reciprocidad.
rol_operativo: ejemplificar_servicio_inicial_que_conduce_a_pedido
estructura_interna:
  vendedor: canvasser_de_cepillos
  producto: cepillos
  entrada_en_la_casa:
    frase: "fui enviado para darle un cepillo"
    accion: muestra_opciones_y_pide_escoger
  reaccion_del_comprador:
    - sonrisa
    - atencion
    - ve_varios_cepillos_que_quiere
    - deseo_de_reciprocar_el_regalo
  resultado:
    - pedido
funcion_local_en_el_texto:
  - mostrar servicio como apertura de venta casa por casa
  - demostrar que no pedir compra puede producir más compra
  - introducir reciprocidad como mecanismo implícito
conecta_con:
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
  - PR_REGALO_A_RECIPROCIDAD_A_COMPRA
```

---

## 10. `PR_REGALO_A_RECIPROCIDAD_A_COMPRA`

```yaml
orden_textual: 10
mnode_id: PR_REGALO_A_RECIPROCIDAD_A_COMPRA
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
formulacion: >
  Cuando el vendedor ofrece un regalo o servicio inicial, el comprador presta atención,
  experimenta beneficio y puede sentirse inclinado a reciprocar mediante una compra.
rol_operativo: explicar_mecanismo_del_caso_de_cepillos
premisas:
  - el vendedor ofrece un cepillo antes de pedir compra
  - la compradora recibe atención y beneficio
  - al elegir un cepillo, ve otros que desea
  - aparece deseo de reciprocidad
regla_inferencial:
  - el servicio inicial reduce resistencia y activa respuesta positiva
conclusion:
  - el vendedor obtiene un pedido sin pedirlo frontalmente al inicio
funcion_local_en_el_texto:
  - hacer visible el mecanismo detrás del caso
  - conectar servicio inicial con compra natural
conecta_con:
  - CASO_VENDEDOR_DE_CEPILLOS
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
```

---

## 11. `CASO_CAFE_POR_CARROS`

```yaml
orden_textual: 11
mnode_id: CASO_CAFE_POR_CARROS
tipo_de_unidad: caso_metodologico
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Another concern sells coffee... drops in with a half-pound of coffee..."
formulacion: >
  El vendedor de café ofrece primero una muestra gratuita, vuelve a preguntar por
  la experiencia y luego conecta compras futuras con crédito para obtener un utensilio.
rol_operativo: mostrar_servicio_continuado_y_credito_como_mecanismo_de_venta
estructura_interna:
  producto: cafe
  servicio_inicial:
    - medio_libra_de_cafe_para_probar
  segunda_visita:
    - preguntar_como_le_gusto
    - no_pedir_orden_directamente
  oferta_complementaria:
    - utensilio_de_cocina
    - credito_de_cinco_centavos_por_libra_si_compra_cafe
  resultado:
    - compra_recurrente_potencial
    - servicio_percibido
funcion_local_en_el_texto:
  - mostrar que el servicio puede extenderse en etapas
  - demostrar que incluso al regresar no se debe pedir compra de modo frontal
  - introducir continuidad de compra mediante beneficio acumulado
conecta_con:
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
  - MET_SERVICIO_ESCALONADO
```

---

## 12. `MET_SERVICIO_ESCALONADO`

```yaml
orden_textual: 12
mnode_id: MET_SERVICIO_ESCALONADO
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: >
  La venta puede organizarse en etapas: prueba gratuita, seguimiento, beneficio adicional
  y conversión progresiva sin petición directa inicial.
rol_operativo: extraer_procedimiento_desde_caso_de_cafe
entrada:
  - producto_recurrente
  - comprador_potencial
  - muestra_o_prueba
operaciones:
  - entregar_muestra
  - permitir_prueba
  - volver_para_recoger_experiencia
  - ofrecer_beneficio_complementario
  - vincular_compras_futuras_con_credito_o_premio
salida:
  - confianza
  - continuidad_de_compra
  - compra_sin_presion_frontal
conecta_con:
  - CASO_CAFE_POR_CARROS
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
```

---

## 13. `CASO_MOTOR_MAQUINA_DE_COSER`

```yaml
orden_textual: 13
mnode_id: CASO_MOTOR_MAQUINA_DE_COSER
tipo_de_unidad: caso_metodologico
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "The maker of the electric sewing machine motor... offered to send... a motor for one week's use..."
formulacion: >
  El fabricante del motor de máquina de coser deja de solicitar compra y ofrece una
  semana de uso gratis con demostración, eliminando costo y obligación inicial.
rol_operativo: mostrar_prueba_sin_riesgo_como_oferta_irresistible
estructura_interna:
  producto: motor_electrico_para_maquina_de_coser
  problema_inicial: publicidad_dificil
  cambio_estrategico:
    - cesar_solicitacion_de_compra
    - ofrecer_motor_por_una_semana
    - enviar_persona_para_mostrar_operacion
    - sin_costo
    - sin_obligacion
  resultado:
    - oferta_irresistible
    - nueve_de_cada_diez_pruebas_terminan_en_venta
funcion_local_en_el_texto:
  - mostrar el poder de eliminar riesgo y obligación
  - dar un resultado cuantitativo fuerte
  - reforzar la tesis de servicio antes de venta
conecta_con:
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
  - MET_PRUEBA_SIN_RIESGO
  - PR_DEMOSTRACION_A_CONVERSION
```

---

## 14. `MET_PRUEBA_SIN_RIESGO`

```yaml
orden_textual: 14
mnode_id: MET_PRUEBA_SIN_RIESGO
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: >
  Para vender un producto que requiere experiencia directa, se ofrece una prueba
  sin costo, sin obligación y con demostración, de modo que el comprador pueda verificar
  el valor antes de asumir riesgo.
rol_operativo: convertir_el_caso_del_motor_en_procedimiento
entrada:
  - producto_que_mejora_con_experiencia_directa
  - comprador_con_resistencia_a_compra_inicial
operaciones:
  - enviar_producto_para_uso_temporal
  - ofrecer_demostracion
  - eliminar_costo_inicial
  - eliminar_obligacion
  - permitir_verificacion_de_claims
salida:
  - confianza
  - experiencia_directa
  - conversion_alta
criterio_de_exito:
  - porcentaje_alto_de_pruebas_lleva_a_venta
conecta_con:
  - CASO_MOTOR_MAQUINA_DE_COSER
  - CASO_PRODUCTOS_ENVIADOS_A_APROBACION
```

---

## 15. `PR_DEMOSTRACION_A_CONVERSION`

```yaml
orden_textual: 15
mnode_id: PR_DEMOSTRACION_A_CONVERSION
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
formulacion: >
  Cuando el comprador prueba el producto sin costo ni obligación y comprueba sus ventajas,
  la venta aparece como consecuencia natural.
rol_operativo: explicar_conversion_por_prueba
premisas:
  - el comprador no asume riesgo inicial
  - el producto puede demostrar su utilidad durante el uso
  - una persona enseña cómo operarlo
  - el comprador verifica beneficios
conclusion:
  - la prueba conduce a venta en gran proporción de casos
funcion_local_en_el_texto:
  - explicar el éxito del motor de máquina de coser
  - generalizar hacia otros productos enviados a prueba
conecta_con:
  - CASO_MOTOR_MAQUINA_DE_COSER
  - MET_PRUEBA_SIN_RIESGO
```

---

# 5. Generalización a muchas líneas

---

## 16. `SERIE_PRODUCTOS_ENVIADOS_A_PRUEBA`

```yaml
orden_textual: 16
mnode_id: SERIE_PRODUCTOS_ENVIADOS_A_PRUEBA
tipo_de_unidad: serie_isomorfa
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Cigar makers... Makers of books, typewriters, washing machines, kitchen cabinets, vacuum sweepers..."
formulacion: >
  Muchas líneas comerciales aplican el mismo principio: enviar el producto, permitir
  uso o prueba y dejar que el comprador decida conservarlo o devolverlo.
rol_operativo: generalizar_molde_a_varias_categorias
instancias:
  - cigarros: fumar_diez_y_devolver_o_conservar
  - libros: envio_sujeto_a_devolucion
  - maquinas_de_escribir: prueba_o_aprobacion
  - lavadoras: prueba_o_aprobacion
  - gabinetes_de_cocina: prueba_o_aprobacion
  - aspiradoras: prueba_o_aprobacion
  - mercancia_por_correo: sujeta_a_devolucion
funcion_local_en_el_texto:
  - mostrar que el principio no es un caso aislado
  - presentar el servicio/prueba como principio general de salesmanship
  - conectar publicidad con práctica común de venta por correo
conecta_con:
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
  - MET_PRUEBA_SIN_RIESGO
  - MN_PRINCIPIO_COMUN_DE_SALESMANSHIP
```

---

## 17. `MN_PRINCIPIO_COMUN_DE_SALESMANSHIP`

```yaml
orden_textual: 17
mnode_id: MN_PRINCIPIO_COMUN_DE_SALESMANSHIP
tipo_de_unidad: generalizacion_practica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "These are all common principles of salesmanship. The most ignorant peddler applies them."
formulacion: >
  Ofrecer servicio, prueba o ausencia de riesgo antes de exigir compra es un principio
  común de salesmanship que incluso un vendedor ignorante aplica.
rol_operativo: elevar_los_casos_a_principio_general
funcion_local_en_el_texto:
  - mostrar que los ejemplos no son trucos aislados
  - vincular el capítulo con la publicidad como venta impresa
  - preparar la crítica al salesman-in-print que olvida estos principios
estructura_interna:
  principio: servicio_antes_de_compra
  aplicacion_intuitiva: vendedor_ambulante
  falla_publicitaria: vendedor_impreso_lo_olvida
conecta_con:
  - MN_SALESMAN_IN_PRINT_OLVIDA_SERVICIO
  - MN_PUBLICIDAD_COMO_SALESMANSHIP
```

---

# 6. Diagnóstico final: el vendedor impreso olvida el servicio

---

## 18. `MN_SALESMAN_IN_PRINT_OLVIDA_SERVICIO`

```yaml
orden_textual: 18
mnode_id: MN_SALESMAN_IN_PRINT_OLVIDA_SERVICIO
tipo_de_unidad: diagnostico_profesional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Yet the salesman-in-print very often forgets them."
formulacion: >
  El vendedor impreso, es decir, el anuncio, a menudo olvida principios de venta que
  incluso un vendedor ambulante aplica.
rol_operativo: diagnosticar_desconexion_entre_venta_real_y_publicidad
funcion_local_en_el_texto:
  - señalar la contradicción central del mal anuncio
  - conectar con el capítulo anterior sobre publicidad como salesmanship
  - preparar la crítica a hablar desde el interés del anunciante
conecta_con:
  - MN_PRINCIPIO_COMUN_DE_SALESMANSHIP
  - MN_ANUNCIANTE_HABLA_DE_SU_INTERES
```

---

## 19. `MN_ANUNCIANTE_HABLA_DE_SU_INTERES`

```yaml
orden_textual: 19
mnode_id: MN_ANUNCIANTE_HABLA_DE_SU_INTERES
tipo_de_unidad: diagnostico_de_error
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "He talks about his interest. He blazons a name... His phrase is, 'Drive people to the stores.'"
formulacion: >
  El mal anunciante habla de su propio interés, exhibe un nombre y busca conducir
  o empujar gente a las tiendas, olvidando que el comprador actúa por sí mismo.
rol_operativo: identificar_actitud_erronea_del_anunciante
estructura_interna:
  errores:
    - hablar_de_interes_propio
    - blazonar_nombre
    - creer_que_el_nombre_importa_por_si_mismo
    - querer_llevar_o_empujar_gente_a_tiendas
  actitud_subyacente:
    - publicidad_desde_el_anunciante
    - no_desde_el_comprador
funcion_local_en_el_texto:
  - cerrar el capítulo volviendo al error inicial
  - contrastar servicio con empuje comercial
conecta_con:
  - MN_ANUNCIO_EGOISTA_NO_APELA
  - MN_PERSONAS_COAXED_NOT_DRIVEN
```

---

## 20. `MN_PERSONAS_COAXED_NOT_DRIVEN`

```yaml
orden_textual: 20
mnode_id: MN_PERSONAS_COAXED_NOT_DRIVEN
tipo_de_unidad: regla_psicologica_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "People can be coaxed but not driven. Whatever they do they do to please themselves."
formulacion: >
  Las personas pueden ser persuadidas suavemente, pero no empujadas; lo que hacen
  lo hacen para complacerse a sí mismas.
rol_operativo: condensar_regla_psicologica_del_capitulo
funcion_local_en_el_texto:
  - resumir la diferencia entre servicio y presión
  - formular el principio final de acción publicitaria
  - conectar naturaleza humana con técnica de ventas
estructura_interna:
  accion_incorrecta: conducir_empujar_presionar
  accion_correcta: coaxing_persuasion_suave_servicio
  motivacion_del_comprador: complacerse_a_si_mismo
conecta_con:
  - MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
  - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
  - REGLA_FINAL_OFRECER_SERVICIO
```

---

## 21. `REGLA_FINAL_OFRECER_SERVICIO`

```yaml
orden_textual: 21
mnode_id: REGLA_FINAL_OFRECER_SERVICIO
tipo_de_unidad: regla_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
formulacion: >
  No pida primero la compra ni hable desde su propio interés. Ofrezca servicio,
  información, prueba, muestra o eliminación de riesgo, de modo que el comprador
  actúe por su propio beneficio y la compra surja como resultado natural.
rol_operativo: condensar_recorrido_del_capitulo
funcion_local_en_el_texto:
  - sintetizar el principio de servicio
  - convertir ejemplos en regla operativa
  - cerrar la continuidad con publicidad como salesmanship
conecta_con:
  - MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
  - MN_ANUNCIOS_BASADOS_EN_SERVICIO
  - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
  - MN_PERSONAS_COAXED_NOT_DRIVEN
```

---

# 7. Métodos derivados principales

---

## `MET_OFRECER_SERVICIO_ANTES_DE_VENDER`

```yaml
mnode_id: MET_OFRECER_SERVICIO_ANTES_DE_VENDER
familia_cognitiva: FAM-Método
tipo_de_unidad: metodo_principal
estatus_de_extraccion: inferencia_local
formulacion: >
  Antes de solicitar compra, estructurar el anuncio como una oferta de servicio útil
  para el comprador.
entrada:
  - producto_o_servicio
  - comprador_potencial
  - barrera_de_compra
  - interes_del_comprador
operaciones:
  - identificar_que_servicio_o_utilidad_desea_el_comprador
  - evitar_pedir_compra_al_inicio
  - ofrecer_informacion_ventajas_muestra_prueba_o_aprobacion
  - eliminar_costo_riesgo_u_obligacion_inicial
  - permitir_que_el_comprador_verifique_claims
  - dejar_que_la_compra_surja_naturalmente
salida:
  - mayor_atencion
  - menor_resistencia
  - mayor_confianza
  - compra_por_interes_propio_del_comprador
criterio_de_exito:
  - el comprador percibe servicio antes de percibir presión_de_venta
```

---

## `MET_PRUEBA_APROBACION_DEVOLUCION`

```yaml
mnode_id: MET_PRUEBA_APROBACION_DEVOLUCION
familia_cognitiva: FAM-Método
tipo_de_unidad: metodo_generalizado
estatus_de_extraccion: inferencia_local
formulacion: >
  Enviar productos sujetos a prueba, aprobación o devolución permite que el comprador
  experimente valor sin riesgo inicial.
operaciones:
  - enviar_producto
  - permitir_uso_temporal
  - permitir_devolucion
  - no_exigir_prepago_en_ciertos_modelos
  - dejar_decision_final_al_comprador
resultado_esperado:
  - reducción_de_riesgo
  - demostración_directa
  - confianza
  - ventas_por_experiencia
instancias:
  - cigars_smoke_ten
  - books
  - typewriters
  - washing_machines
  - kitchen_cabinets
  - vacuum_sweepers
  - merchandise_sold_by_mail
```

---

# 8. Moldes estructurales detectados

## Molde 1: `DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA`

```yaml
molde:
  mnode_id: DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    El anunciante o vendedor ofrece primero servicio, muestra, información, prueba
    o eliminación de riesgo; el comprador recibe valor y la compra surge como resultado.
  estructura:
    vendedor_o_anunciante:
    producto:
    servicio_inicial:
    riesgo_eliminado:
    reaccion_del_comprador:
    conversion_o_compra:
  invariantes:
    - no se pide compra directamente al inicio
    - se ofrece algo útil para el comprador
    - se reduce riesgo, costo o resistencia inicial
    - se permite experiencia o evaluación
    - la compra aparece como consecuencia natural
  instancias:
    - CASO_VENDEDOR_DE_CEPILLOS
    - CASO_CAFE_POR_CARROS
    - CASO_MOTOR_MAQUINA_DE_COSER
    - SERIE_PRODUCTOS_ENVIADOS_A_PRUEBA
```

---

## Molde 2: `DIS_MOLDE_ANUNCIO_EGOISTA`

```yaml
molde:
  mnode_id: DIS_MOLDE_ANUNCIO_EGOISTA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Un anuncio falla cuando habla desde el interés del anunciante y no desde el
    beneficio del comprador.
  estructura:
    anunciante:
    peticion_al_comprador:
    interes_del_anunciante:
    interes_ignorado_del_comprador:
    efecto:
  invariantes:
    - el anuncio pide compra, dinero o preferencia
    - la apelación se centra en el vendedor
    - el comprador no percibe servicio propio
    - la apelación resulta poco popular o ineficaz
  instancias:
    - compra_mi_marca
    - dame_tu_dinero
    - drive_people_to_the_stores
    - blazonar_nombre
```

---

## Molde 3: `DIS_MOLDE_PRUEBA_SIN_RIESGO`

```yaml
molde:
  mnode_id: DIS_MOLDE_PRUEBA_SIN_RIESGO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    La resistencia a comprar disminuye cuando el comprador puede probar el producto
    sin costo, obligación o riesgo.
  estructura:
    producto:
    prueba_ofrecida:
    costo_inicial:
    obligacion:
    experiencia_del_comprador:
    conversion:
  invariantes:
    - el comprador prueba antes de comprar
    - el riesgo inicial se reduce o elimina
    - el producto demuestra su valor en uso
    - la decisión final queda en manos del comprador
  instancias:
    - CASO_MOTOR_MAQUINA_DE_COSER
    - CASO_CIGARROS_PRUEBA_Y_DEVOLUCION
    - productos_por_correo_sujetos_a_devolucion
```

---

# 9. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: MN_TITULO_OFFER_SERVICE
    tipo: desarrolla_en
    destino: MN_COMPRADOR_BUSCA_SERVICIO_PROPIO

  - origen: MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
    tipo: explica
    destino: MN_ERROR_IGNORAR_INTERES_DEL_COMPRADOR

  - origen: MN_ERROR_IGNORAR_INTERES_DEL_COMPRADOR
    tipo: se_manifiesta_en
    destino: MN_ANUNCIO_EGOISTA_NO_APELA

  - origen: MN_ANUNCIO_EGOISTA_NO_APELA
    tipo: contrasta_con
    destino: MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA

  - origen: MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA
    tipo: se_desarrolla_en
    destino: MN_ANUNCIOS_BASADOS_EN_SERVICIO

  - origen: MN_ANUNCIOS_BASADOS_EN_SERVICIO
    tipo: fundamenta
    destino: MET_OFRECER_SERVICIO_ANTES_DE_VENDER

  - origen: MN_ALTRUISMO_APARENTE_ESTRATEGIA_HUMANA
    tipo: aclara
    destino: MN_ANUNCIOS_BASADOS_EN_SERVICIO

  - origen: MN_BUEN_VENDEDOR_PINTA_LADO_DEL_CLIENTE
    tipo: modela
    destino: MET_OFRECER_SERVICIO_ANTES_DE_VENDER

  - origen: DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
    tipo: instancia_en
    destino: CASO_VENDEDOR_DE_CEPILLOS

  - origen: CASO_VENDEDOR_DE_CEPILLOS
    tipo: soporta
    destino: PR_REGALO_A_RECIPROCIDAD_A_COMPRA

  - origen: DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
    tipo: instancia_en
    destino: CASO_CAFE_POR_CARROS

  - origen: CASO_CAFE_POR_CARROS
    tipo: soporta
    destino: MET_SERVICIO_ESCALONADO

  - origen: DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
    tipo: instancia_en
    destino: CASO_MOTOR_MAQUINA_DE_COSER

  - origen: CASO_MOTOR_MAQUINA_DE_COSER
    tipo: soporta
    destino: MET_PRUEBA_SIN_RIESGO

  - origen: MET_PRUEBA_SIN_RIESGO
    tipo: explica
    destino: PR_DEMOSTRACION_A_CONVERSION

  - origen: SERIE_PRODUCTOS_ENVIADOS_A_PRUEBA
    tipo: generaliza
    destino: DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA

  - origen: SERIE_PRODUCTOS_ENVIADOS_A_PRUEBA
    tipo: soporta
    destino: MN_PRINCIPIO_COMUN_DE_SALESMANSHIP

  - origen: MN_PRINCIPIO_COMUN_DE_SALESMANSHIP
    tipo: contrasta_con
    destino: MN_SALESMAN_IN_PRINT_OLVIDA_SERVICIO

  - origen: MN_SALESMAN_IN_PRINT_OLVIDA_SERVICIO
    tipo: se_manifiesta_en
    destino: MN_ANUNCIANTE_HABLA_DE_SU_INTERES

  - origen: MN_ANUNCIANTE_HABLA_DE_SU_INTERES
    tipo: contrasta_con
    destino: MN_PERSONAS_COAXED_NOT_DRIVEN

  - origen: MN_PERSONAS_COAXED_NOT_DRIVEN
    tipo: condensa
    destino: REGLA_FINAL_OFRECER_SERVICIO
```

---

# 10. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: formular tesis, modelo del receptor, errores publicitarios y reglas de acción
    nodos:
      - MN_TITULO_OFFER_SERVICE
      - MN_COMPRADOR_BUSCA_SERVICIO_PROPIO
      - MN_ERROR_IGNORAR_INTERES_DEL_COMPRADOR
      - MN_ANUNCIO_EGOISTA_NO_APELA
      - MN_MEJORES_ANUNCIOS_NO_PIDEN_COMPRA
      - MN_ANUNCIOS_BASADOS_EN_SERVICIO
      - MN_ALTRUISMO_APARENTE_ESTRATEGIA_HUMANA
      - MN_BUEN_VENDEDOR_PINTA_LADO_DEL_CLIENTE
      - MN_PRINCIPIO_COMUN_DE_SALESMANSHIP
      - MN_SALESMAN_IN_PRINT_OLVIDA_SERVICIO
      - MN_ANUNCIANTE_HABLA_DE_SU_INTERES
      - MN_PERSONAS_COAXED_NOT_DRIVEN
      - REGLA_FINAL_OFRECER_SERVICIO

  FAM-Patrón-de-razonamiento:
    funcion: explicar por qué servicio, regalo, prueba y demostración conducen a compra
    nodos:
      - PR_REGALO_A_RECIPROCIDAD_A_COMPRA
      - PR_DEMOSTRACION_A_CONVERSION

  FAM-Diseño:
    funcion: organizar moldes de servicio, anuncio egoísta y prueba sin riesgo
    nodos:
      - DIS_MOLDE_SERVICIO_ANTES_DE_COMPRA
      - DIS_MOLDE_ANUNCIO_EGOISTA
      - DIS_MOLDE_PRUEBA_SIN_RIESGO

  FAM-Método:
    funcion: convertir la tesis en procedimientos de venta y publicidad
    nodos:
      - MET_OFRECER_SERVICIO_ANTES_DE_VENDER
      - MET_SERVICIO_ESCALONADO
      - MET_PRUEBA_SIN_RIESGO
      - MET_PRUEBA_APROBACION_DEVOLUCION

  formas_compuestas:
    funcion: casos ancla que manifiestan el molde de servicio
    nodos:
      - CASO_VENDEDOR_DE_CEPILLOS
      - CASO_CAFE_POR_CARROS
      - CASO_MOTOR_MAQUINA_DE_COSER
      - SERIE_PRODUCTOS_ENVIADOS_A_PRUEBA
```

---

# 11. Plan expositivo del capítulo

```yaml
mnode_id: PLAN_RECORRIDO_CAPITULO_3
familia_cognitiva: FAM-Plan
tipo_de_unidad: plan_expositivo
estatus_de_extraccion: molde_derivado
formulacion: >
  El capítulo comienza con una base antropológica del comprador, critica la publicidad
  centrada en el anunciante, presenta la publicidad basada en servicio, demuestra el
  principio con casos de venta directa y generaliza hacia una regla final: las personas
  pueden ser persuadidas mediante servicio, pero no empujadas.
secuencia:
  - afirmar_que_el_comprador_busca_servicio_propio
  - diagnosticar_como_error_ignorar_ese_hecho
  - criticar_anuncios_que_piden_compra_dinero_o_preferencia
  - proponer_anuncios_basados_en_servicio
  - conectar_servicio_con_conocimiento_de_naturaleza_humana
  - mostrar_buen_vendedor_que_pinta_lado_del_cliente
  - caso_cepillos_regalo_y_reciprocidad
  - caso_cafe_muestra_y_credito
  - caso_motor_prueba_sin_costo_ni_obligacion
  - generalizacion_a_productos_enviados_a_prueba
  - recordar_que_estos_son_principios_comunes_de_salesmanship
  - criticar_al_salesman_in_print_que_olvida_esos_principios
  - cerrar_con_personas_pueden_ser_coaxed_no_driven
```

---

# 12. Síntesis estructural del capítulo

```txt
BASE ANTROPOLÓGICA:
  Las personas buscan servicio para sí mismas.
  No se preocupan por el interés o ganancia del anunciante.

ERROR PUBLICITARIO:
  Pedir compra, dinero o preferencia de marca.
  Hablar desde el interés del anunciante.
  Intentar conducir o empujar personas a tiendas.

PRINCIPIO CORRECTO:
  Ofrecer servicio.
  Dar información deseada.
  Mostrar ventajas para usuarios.
  Permitir prueba, muestra, aprobación o devolución.

MODELO DE VENDEDOR:
  El buen vendedor no grita un nombre.
  No dice solamente “compra mi artículo”.
  Pinta el lado del servicio que interesa al cliente.

CASOS:
  Cepillos: regalo inicial → atención → reciprocidad → pedido.
  Café: muestra → seguimiento → utensilio por créditos → compra recurrente.
  Motor de máquina de coser: prueba gratis por una semana → demostración → 9/10 ventas.
  Cigarros y productos varios: uso, aprobación o devolución.

GENERALIZACIÓN:
  Estos son principios comunes de salesmanship.
  Incluso un vendedor ambulante ignorante los aplica.

DIAGNÓSTICO FINAL:
  El salesman-in-print los olvida.
  Habla de su propio interés.
  Quiere empujar personas a tiendas.

REGLA TERMINAL:
  Las personas pueden ser persuadidas suavemente, pero no empujadas.
  Todo lo que hacen lo hacen para complacerse a sí mismas.
```

---

# 13. Núcleo interpretativo final del procesamiento estructural

```txt
El capítulo establece que la publicidad eficaz no debe comenzar con una petición
centrada en el anunciante, sino con una oferta de servicio centrada en el comprador.
Las personas actúan para satisfacer sus propios intereses; por eso, el anuncio debe
ofrecer información, ventajas, muestras, pruebas, aprobación o eliminación de riesgo.

La compra no se fuerza: se vuelve el resultado natural de una experiencia en la que
el comprador recibe valor, comprueba beneficios y actúa para complacerse a sí mismo.
El buen vendedor no empuja; persuade suavemente. El buen anuncio debe hacer lo mismo.
```

Fórmula compacta:

```txt
no_pedir_compra
  → ofrecer_servicio
    → eliminar_riesgo
      → permitir_prueba
        → generar_confianza_o_reciprocidad
          → compra_natural
```

Fórmula normativa:

```txt
si_el_anuncio_habla_del_interes_del_anunciante
  → falla_como_salesmanship

si_el_anuncio_ofrece_servicio_al_comprador
  → reduce_resistencia_y_facilita_compra
```

---

# 14. Observaciones para pasos posteriores

```yaml
observaciones_para_pasos_posteriores:
  posible_modelo_de_juego:
    descripcion: >
      Puede modelarse como un juego de influencia comercial donde el anunciante busca
      compra, pero el comprador sólo actúa si percibe servicio propio. La estrategia
      "pedir compra" aumenta resistencia; la estrategia "ofrecer servicio" reduce
      resistencia y activa confianza o reciprocidad.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_modelo_de_reciprocidad:
    descripcion: >
      El caso de los cepillos sugiere un mecanismo de reciprocidad: regalo inicial,
      atención positiva, deseo de corresponder y pedido. Este modelo puede desarrollarse
      después como subgrafo de influencia.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_modelo_de_eliminacion_de_riesgo:
    descripcion: >
      Los casos de motor, cigarros y productos enviados a aprobación pueden formar un
      modelo de conversión por reducción de riesgo: uso previo, confianza, experiencia
      directa y compra posterior.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  continuidad_con_chapter_2:
    descripcion: >
      El capítulo 2 define la publicidad como salesmanship; el capítulo 3 especifica
      una regla de ese salesmanship: ofrecer servicio antes de pedir compra.
    estatus: relacion_intercapitular
```
