# IDEA — Servicio de desglose del costo por respuesta

**Origen conceptual:** `CASO_ARTICULO_CINCO_DOLARES`  
**Capítulo base:** Chapter 4 — _Mail Order Advertising: What It Teaches_  
**Principio complementario:** Chapter 3 — _Offer Service_  
**Objetivo:** convertir el caso numérico de Hopkins en una idea-servicio dirigida al dueño de una empresa.  
**Tipo:** núcleo conceptual realizable para ACCD.

---

# 1. Formulación general

El caso del artículo de cinco dólares muestra algo muy poderoso: tres anuncios pueden vender o generar respuestas para el mismo producto, pero con costos radicalmente distintos.

```txt
Producto: artículo de cinco dólares

Anuncio 1:
  costo por respuesta = $0.85

Anuncio 2:
  costo por respuesta = $14.20

Anuncio 3:
  costo por respuesta = $0.41

Escala anual:
  250,000 respuestas
```

La diferencia no es estética. No se trata de cuál anuncio “se ve mejor”, cuál gusta más al dueño, cuál tiene mejor estilo o cuál parece más creativo.

La diferencia es económica:

```txt
cada respuesta tiene un costo
cada anuncio produce una respuesta a distinto costo
cada diferencia pequeña se multiplica al escalar
cada dólar desperdiciado aumenta el costo real de vender
```

El núcleo de la idea-servicio es este:

```txt
No le pidas al dueño de la empresa que compre publicidad.
Primero ofrécele un servicio:
mostrarle cuánto le cuesta realmente cada respuesta.
```

---

# 2. Nueva idea formulada como servicio

```yaml
idea_servicio:
  id: SERV_DESGLOSE_COSTO_POR_RESPUESTA
  nombre: "Desglose de Costo por Respuesta"
  formulacion: >
    Un servicio dirigido al dueño de una empresa que toma sus anuncios, campañas,
    piezas, canales o variantes publicitarias y le muestra cuánto le cuesta obtener
    una respuesta, un lead, una consulta, un clic relevante, una cotización o una venta.

  principio_base: >
    El dueño no necesita primero comprar más publicidad. Necesita ver con claridad
    cuánto está pagando por cada respuesta y cuánto dinero puede estar perdiendo
    por no medir ni comparar sus anuncios.

  inspirado_en:
    - CASO_ARTICULO_CINCO_DOLARES
    - PR_COSTO_POR_RESPUESTA_DEFINE_VALOR_DEL_ANUNCIO
    - MN_PELIGRO_CONTINUAR_SIN_KEY
    - Chapter 3: Offer Service

  publico_objetivo:
    - dueño_de_empresa
    - gerente_general
    - fundador
    - director_comercial
    - responsable_de_marketing
    - negocio_que_invierte_en_anuncios_sin_saber_costo_real_de_respuesta
```

---

# 3. Reformulación estilo “Offer Service”

La oferta no debe empezar diciendo:

```txt
Contráteme para hacer sus anuncios.
Págueme una campaña.
Compre mi servicio de marketing.
```

Debe empezar diciendo:

```txt
Permítame mostrarle cuánto le está costando cada respuesta que recibe.
```

O más directamente:

```txt
Antes de invertir más en publicidad, sepa cuánto le cuesta conseguir una respuesta.
```

La estructura tipo Hopkins sería:

```txt
No pedir compra
  → ofrecer diagnóstico
    → revelar costo oculto
      → comparar variantes
        → mostrar desperdicio
          → señalar ahorro potencial
            → abrir naturalmente la venta del servicio publicitario
```

---

# 4. Nombre posible del servicio

```yaml
nombres_posibles:
  - "Diagnóstico de Costo por Respuesta"
  - "Auditoría de Respuesta Publicitaria"
  - "Mapa de Fuga Publicitaria"
  - "Desglose de Rentabilidad de Anuncios"
  - "Radiografía de Costo por Lead"
  - "Análisis de Costo Real por Respuesta"
  - "Reporte de Desperdicio Publicitario"
```

Nombre recomendado:

```txt
Diagnóstico de Costo por Respuesta
```

Razón:

```txt
- Es claro.
- Habla el lenguaje del dueño.
- No promete creatividad, sino control económico.
- Convierte la publicidad en una conversación de negocio.
```

---

# 5. Promesa del servicio

```yaml
promesa_principal:
  formulacion: >
    Le mostramos cuánto le cuesta cada respuesta generada por su publicidad y qué
    anuncios, canales o mensajes están encareciendo innecesariamente sus resultados.

  version_corta: >
    Descubra cuánto está pagando por cada respuesta antes de invertir más en anuncios.

  version_directa: >
    Si dos anuncios pueden vender lo mismo, pero uno consigue respuestas a la mitad
    del costo, usted necesita saber cuál es cuál.

  version_hopkins: >
    No le pedimos que compre publicidad. Primero le mostramos qué parte de su
    publicidad actual está pagando de más por conseguir respuestas.
```

---

# 6. Servicio como mNode

```yaml
mnode_id: SERV_DESGLOSE_COSTO_POR_RESPUESTA
familia_cognitiva: FAM-Método
subtipo: servicio_publicitario_de_diagnostico
estatus_de_extraccion: derivado_desde_CASO_ARTICULO_CINCO_DOLARES
formulacion: >
  Servicio que desglosa cuánto cuesta generar una respuesta en una campaña,
  compara variantes o canales, identifica desperdicio y muestra al dueño de empresa
  el valor económico de medir antes de seguir invirtiendo.

rol_operativo: convertir_caso_numerico_en_oferta_de_servicio

entrada:
  - inversión_publicitaria
  - anuncios_o_variantes
  - canal_de_publicación
  - respuestas_obtenidas
  - leads
  - consultas
  - cotizaciones
  - ventas
  - costo_total
  - periodo_de_tiempo

operaciones:
  - recopilar_datos_de_campaña
  - separar_anuncios_o_canales
  - calcular_costo_por_respuesta
  - calcular_costo_por_lead
  - calcular_costo_por_venta_si_hay_datos
  - comparar_variantes
  - identificar_anuncio_más_caro
  - identificar_anuncio_más_eficiente
  - estimar_desperdicio
  - estimar_ahorro_potencial
  - explicar_implicación_en_lenguaje_de_negocio

salida:
  - reporte_de_costo_por_respuesta
  - tabla_comparativa_de_anuncios
  - gráfico_de_desperdicio
  - diagnóstico_de_rentabilidad_publicitaria
  - hipótesis_de_mejora
  - recomendación_de_siguiente_prueba

criterio_de_valor:
  - el_dueño_entiende_cuánto_le_cuesta_cada_respuesta
  - el_dueño_detecta_si_está_pagando_de_más
  - el_dueño_ve_por_qué_medir_es_más_importante_que_opinar
  - el_dueño_identifica_un_siguiente_paso_de_optimización
```

---

# 7. Mecanismo psicológico del servicio

Este servicio funciona porque no entra por el deseo abstracto de “hacer mejor marketing”. Entra por una preocupación concreta del dueño:

```txt
¿Estoy perdiendo dinero sin darme cuenta?
```

Mecanismos psicológicos activados:

```yaml
mecanismos_psicologicos:
  visibilizacion_de_perdida:
    descripcion: >
      El dueño puede ignorar un problema mientras el desperdicio está oculto.
      Cuando ve que una respuesta cuesta $0.41 en un anuncio y $14.20 en otro,
      la pérdida se vuelve concreta.

  aversion_a_la_perdida:
    descripcion: >
      El servicio no se presenta como una promesa vaga de ganar más, sino como
      una forma de dejar de perder dinero en anuncios ineficientes.

  reduccion_de_incertidumbre:
    descripcion: >
      La publicidad deja de sentirse como apuesta cuando se desglosa en costos,
      respuestas, comparación y ahorro potencial.

  autoridad_por_diagnostico:
    descripcion: >
      Quien puede explicar el costo real de respuesta se posiciona como experto,
      sin necesidad de presumir creatividad.

  reciprocidad_por_valor_inicial:
    descripcion: >
      Al entregar claridad antes de pedir compra, el servicio sigue la lógica
      del capítulo 3: ofrecer servicio antes de pedir contratación.

  urgencia_racional:
    descripcion: >
      Si el dueño descubre que paga de 2 a 35 veces más de lo necesario por una
      respuesta, aparece una razón inmediata para actuar.
```

---

# 8. Fórmula económica del caso

Datos del caso:

```yaml
caso_articulo_cinco_dolares:
  producto: articulo_de_cinco_dolares
  respuestas_anuales: 250000
  variantes:
    anuncio_1:
      costo_por_respuesta: 0.85
      costo_total_250000_respuestas: 212500
    anuncio_2:
      costo_por_respuesta: 14.20
      costo_total_250000_respuestas: 3550000
    anuncio_3:
      costo_por_respuesta: 0.41
      costo_total_250000_respuestas: 102500
```

Comparación:

```yaml
comparacion:
  diferencia_anuncio_1_vs_anuncio_3:
    diferencia_por_respuesta: 0.44
    diferencia_en_250000_respuestas: 110000

  diferencia_anuncio_2_vs_anuncio_3:
    diferencia_por_respuesta: 13.79
    diferencia_en_250000_respuestas: 3447500

  diferencia_anuncio_2_vs_anuncio_1:
    diferencia_por_respuesta: 13.35
    diferencia_en_250000_respuestas: 3337500
```

Lectura de negocio:

```txt
Un anuncio puede parecer mejor y aun así costar millones más al escalar.
El dueño no necesita primero una opinión creativa.
Necesita saber cuánto cuesta cada respuesta.
```

---

# 9. Tabla de desglose que ofrecería el servicio

```md
| Anuncio / Canal | Inversión | Respuestas | Costo por respuesta | Diferencia vs mejor anuncio | Desperdicio estimado |
| --------------- | --------: | ---------: | ------------------: | --------------------------: | -------------------: |
| Anuncio A       |   $\_\_\_ |     \_\_\_ |             $\_\_\_ |                     $\_\_\_ |              $\_\_\_ |
| Anuncio B       |   $\_\_\_ |     \_\_\_ |             $\_\_\_ |                     $\_\_\_ |              $\_\_\_ |
| Anuncio C       |   $\_\_\_ |     \_\_\_ |             $\_\_\_ |                     $\_\_\_ |              $\_\_\_ |
```

Versión aplicada al caso Hopkins:

```md
| Anuncio   | Respuestas anuales | Costo por respuesta | Costo total | Diferencia vs anuncio de $0.41 |
| --------- | -----------------: | ------------------: | ----------: | -----------------------------: |
| Anuncio 1 |            250,000 |               $0.85 |    $212,500 |                       $110,000 |
| Anuncio 2 |            250,000 |              $14.20 |  $3,550,000 |                     $3,447,500 |
| Anuncio 3 |            250,000 |               $0.41 |    $102,500 |                             $0 |
```

---

# 10. Estructura del servicio

```yaml
servicio:
  nombre: "Diagnóstico de Costo por Respuesta"

  fase_1_recoleccion:
    objetivo: obtener_datos_minimos
    datos:
      - gasto_publicitario
      - periodo
      - anuncios_activos
      - canal
      - respuestas
      - leads
      - ventas_si_existen
      - conversiones

  fase_2_calculo:
    objetivo: traducir_publicidad_a_unidades_economicas
    metricas:
      - costo_por_respuesta
      - costo_por_lead
      - costo_por_venta
      - tasa_de_respuesta
      - tasa_de_conversion
      - costo_de_desperdicio

  fase_3_comparacion:
    objetivo: detectar_diferencias_entre_variantes
    preguntas:
      - qué_anuncio_responde_mejor
      - qué_anuncio_responde_peor
      - cuál_es_la_diferencia_por_respuesta
      - cuánto_se_pierde_al_escalar

  fase_4_diagnostico:
    objetivo: explicar_la_causa_probable
    ejes:
      - oferta
      - promesa
      - headline
      - imagen
      - CTA
      - canal
      - segmentacion
      - friccion_de_respuesta
      - ausencia_de_key_o_tracking

  fase_5_recomendacion:
    objetivo: proponer_siguiente_prueba
    salida:
      - mantener_control_actual
      - pausar_anuncio_costoso
      - crear_variante_testable
      - instalar_tracking
      - mejorar_mecanismo_de_respuesta
```

---

# 11. Oferta comercial en lenguaje del dueño

## Versión breve

```txt
Antes de invertir más en anuncios, le mostramos cuánto le cuesta cada respuesta.
```

## Versión directa

```txt
Podemos revisar sus anuncios actuales y desglosar cuánto está pagando por cada respuesta, lead o consulta. El objetivo no es venderle una campaña de inmediato, sino mostrarle si su publicidad está generando respuestas a un costo razonable o si está pagando de más sin saberlo.
```

## Versión tipo Hopkins

```txt
No le pedimos que compre más publicidad.
Primero le ofrecemos un desglose de lo que ya está pagando.

Tomamos sus anuncios, su inversión y sus respuestas.
Luego le mostramos cuánto cuesta cada respuesta y qué diferencia habría si su mejor anuncio pudiera reemplazar al peor.

En muchos negocios, el problema no es gastar poco.
El problema es no saber qué parte del gasto se desperdicia.
```

---

# 12. Mensaje publicitario del servicio

```yaml
mensaje_publicitario:
  headline_1: "¿Cuánto le cuesta realmente una respuesta?"
  headline_2: "Antes de gastar más en anuncios, mida el costo de cada respuesta."
  headline_3: "Un anuncio puede parecer mejor y costar 35 veces más."
  headline_4: "Su publicidad no necesita más opiniones. Necesita números."
  headline_5: "Descubra qué anuncio le cuesta menos por respuesta."

  subheadline: >
    Analizamos sus anuncios actuales y le mostramos cuánto paga por cada respuesta,
    lead, consulta o venta generada.

  promesa: >
    Un desglose claro para saber qué anuncio funciona, cuál encarece sus resultados
    y cuánto podría ahorrar al medir antes de invertir más.

  CTA:
    - "Solicitar diagnóstico"
    - "Calcular mi costo por respuesta"
    - "Revisar mis anuncios"
    - "Quiero ver mi desglose"
```

---

# 13. Servicio como realización ACCD

```yaml
realizacion_ACCD:
  tipo: nucleo_conceptual_realizable
  idea_id: IDEA_SERV_COSTO_POR_RESPUESTA
  ramas:
    - publicidad_cientifica
    - respuesta_directa
    - servicios_publicitarios
    - analitica_para_dueños
    - economia_del_anuncio
    - offer_service

  realizaciones_posibles:
    video_corto:
      hook: "Un anuncio puede parecer mejor y costar 35 veces más."
      desarrollo: >
        Hopkins cuenta el caso de un producto de cinco dólares: un anuncio generaba
        respuestas a 85 centavos, otro a 14.20 dólares y otro a 41 centavos.
        La diferencia, multiplicada por 250,000 respuestas, era enorme.
      cierre: >
        Antes de vender publicidad, ofrece un servicio: mostrarle al dueño cuánto
        le cuesta cada respuesta.

    carousel:
      titulo: "¿Cuánto cuesta una respuesta?"
      laminas:
        - "Tres anuncios. Mismo producto. Costos radicalmente distintos."
        - "Anuncio 1: $0.85 por respuesta."
        - "Anuncio 2: $14.20 por respuesta."
        - "Anuncio 3: $0.41 por respuesta."
        - "A 250,000 respuestas, la diferencia es enorme."
        - "El dueño no necesita opiniones. Necesita desglose."
        - "Servicio: diagnóstico de costo por respuesta."

    lead_magnet:
      nombre: "Calculadora de Costo por Respuesta"
      descripcion: >
        Herramienta gratuita para que el dueño ingrese inversión y respuestas,
        calcule costo por respuesta y compare variantes.

    auditoria:
      nombre: "Auditoría de Respuesta Publicitaria"
      descripcion: >
        Servicio consultivo donde se revisan campañas existentes y se detecta
        desperdicio por ausencia de tracking, comparación o anuncios control.
```

---

# 14. Estructura de una landing page del servicio

```yaml
landing_page:
  hero:
    headline: "¿Cuánto le cuesta realmente una respuesta?"
    subheadline: >
      Antes de invertir más en anuncios, descubra qué campañas le generan respuestas
      a buen costo y cuáles están encareciendo sus resultados.
    CTA: "Solicitar diagnóstico"

  problema:
    titulo: "Muchos negocios pagan de más sin saberlo"
    puntos:
      - invierten_en_anuncios_sin_comparar_variantes
      - miden_clicks_pero_no_respuestas_reales
      - no_saben_cual_anuncio_encarece_el_resultado
      - siguen_gastando_en_piezas_que_no_pagan_su_costo

  caso:
    titulo: "El caso del artículo de cinco dólares"
    contenido: >
      Tres anuncios para el mismo producto produjeron respuestas a $0.85, $14.20
      y $0.41. A escala, la diferencia se vuelve enorme. Lo mismo puede estar
      ocurriendo en su publicidad.

  servicio:
    titulo: "Qué recibe en el diagnóstico"
    entregables:
      - cálculo_de_costo_por_respuesta
      - comparación_de_anuncios_o_canales
      - identificación_de_desperdicio
      - estimación_de_ahorro_potencial
      - recomendación_de_siguiente_prueba

  cierre:
    headline: "No invierta más a ciegas."
    CTA: "Quiero conocer mi costo por respuesta"
```

---

# 15. Relación con Chapter 3 — Offer Service

Este servicio aplica directamente la lógica del capítulo 3.

```txt
No empieza pidiendo compra.
Empieza ofreciendo claridad.
```

Estructura:

```txt
servicio_inicial:
  desglose_de_costo_por_respuesta

valor_para_el_dueño:
  descubre_si_paga_de_mas
  entiende_su_gasto
  ve_ahorro_potencial
  reduce_incertidumbre

venta_posterior:
  optimización_de_anuncios
  instalación_de_tracking
  campañas_de_respuesta_directa
  consultoría_publicitaria
```

El servicio es útil porque transforma una conversación difícil:

```txt
"contráteme para hacer marketing"
```

en una conversación más fuerte:

```txt
"déjeme mostrarle cuánto le cuesta hoy conseguir una respuesta"
```

---

# 16. Relación con Chapter 4 — Mail Order Advertising

El capítulo 4 enseña que la publicidad por correo fue una escuela porque obligaba a medir.

Este servicio traslada esa lógica al dueño moderno:

```txt
mail_order_advertising:
  cada anuncio debe pagar por sí mismo
  cada respuesta se mide
  cada error se vuelve visible

servicio_moderno:
  cada campaña debe mostrar su costo por respuesta
  cada canal debe compararse
  cada anuncio debe justificar su inversión
```

La idea central:

```txt
La publicidad no debe juzgarse por apariencia.
Debe juzgarse por lo que cuesta producir una respuesta útil.
```

---

# 17. Núcleo final

```yaml
nucleo_final:
  id: NC_SERVICIO_DESGLOSE_COSTO_RESPUESTA
  formulacion: >
    A partir del caso del artículo de cinco dólares, puede construirse un servicio
    publicitario dirigido al dueño de una empresa: desglosar cuánto cuesta cada
    respuesta generada por sus anuncios. El servicio no comienza vendiendo campañas,
    sino ofreciendo claridad económica. Al mostrar diferencias entre anuncios,
    costos por respuesta y desperdicio potencial, convierte la medición en una
    oferta de valor inicial y abre naturalmente la posibilidad de optimización.

  regla: >
    Antes de pedirle al dueño que invierta más, muéstrele cuánto está pagando por
    cada respuesta.

  formula:
    - anuncios_actuales
    - inversión
    - respuestas
    - costo_por_respuesta
    - comparación
    - desperdicio_visible
    - ahorro_potencial
    - siguiente_prueba

  potencia_para_ACCD:
    - puede convertirse en video corto
    - puede convertirse en carousel
    - puede convertirse en lead magnet
    - puede convertirse en landing page
    - puede convertirse en servicio consultivo real
    - conecta Offer Service con Mail Order Advertising
```

---

# 18. Fórmula compacta

```txt
caso_numérico_de_Hopkins
  → costo_por_respuesta
    → desperdicio_visible
      → servicio_de_diagnóstico
        → valor_inicial_para_el_dueño
          → confianza
            → venta_natural_de_optimización
```

La frase central para recordar:

```txt
No vendas publicidad primero.
Primero ofrece al dueño una radiografía de lo que le cuesta obtener una respuesta.
```
