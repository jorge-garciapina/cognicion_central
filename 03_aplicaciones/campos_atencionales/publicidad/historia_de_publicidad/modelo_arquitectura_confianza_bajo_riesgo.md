# Modelo de Arquitectura de Confianza Bajo Riesgo

## 0. Propósito del modelo

Este modelo surge del análisis del fragmento de Hopkins sobre garantías:

> Many articles are sold under guarantee — so commonly sold that guarantees have ceased to be impressive. But one concern made a fortune by offering a dealers signed warrant. The dealer to whom one paid his money agreed in writing to pay it back if asked. Instead of a far-away stranger, a neighbor gave the warrant. The results have led many to try that plan, and it has always proved effective.

El punto central no es solamente que una garantía pueda vender más. La idea profunda es que una compra bajo incertidumbre requiere una arquitectura de confianza: el comprador necesita sentir que el riesgo no cae completamente sobre él.

El caso de la garantía firmada por el vendedor local muestra una transformación psicológica clave:

```txt
promesa genérica de una empresa distante
  → responsabilidad cercana, firmada e identificable
    → reducción del riesgo percibido
      → mayor confianza
        → mayor disposición a comprar
```

---

## 1. Tesis central

```txt
El comprador desea algo,
pero no actúa si el riesgo percibido supera su deseo.

La publicidad, la garantía, la reputación, la cercanía social,
las políticas de devolución, las pruebas gratuitas y los intermediarios confiables
funcionan como mecanismos para reducir el miedo,
hacer visible la responsabilidad
y volver psicológicamente aceptable la compra.
```

La compra no depende sólo de deseo. Depende de una comparación interna entre:

```txt
deseo / necesidad / aspiración
  vs.
miedo / riesgo / incertidumbre
```

La persona puede querer mucho un producto y aun así no comprarlo si piensa:

```txt
puedo perder mi dinero
puede no funcionar
puede ser falso
puedo ser engañado
no sabré cómo reclamar
nadie responderá
me será difícil devolverlo
```

Por eso el problema publicitario no es únicamente:

```txt
hacer que la persona quiera el producto
```

sino también:

```txt
hacer que la persona se sienta segura actuando
```

---

## 2. Fórmula base

```txt
compra probable
  = deseo suficiente
    + riesgo percibido reducido
    + confianza en que alguien responderá si algo falla
```

O, en una forma más estratégica:

```txt
deseo alto + miedo alto
  → indecisión

deseo alto + miedo bajo
  → compra probable

deseo medio + confianza alta
  → prueba posible

deseo bajo + garantía fuerte
  → quizá no basta

deseo alto + vendedor no confiable
  → abandono o búsqueda de alternativa
```

La garantía, la reputación, la cercanía y la devolución no crean deseo por sí solas. Lo que hacen es permitir que el deseo existente se convierta en acción.

---

## 3. mNode principal

```yaml
mnode_id: PSY_ARQUITECTURA_DE_CONFIANZA_BAJO_RIESGO
tipo_de_unidad: mecanismo_psicologico_estrategico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: sintesis_de_bloque_textual_y_desarrollo_conceptual
formulacion: >
  Cuando una compra implica incertidumbre, el comprador compara el deseo por el
  producto contra el miedo a perder dinero, tiempo, seguridad, reputación o control.
  La publicidad y el diseño comercial aumentan la conversión cuando reducen el
  riesgo percibido mediante garantías, pruebas, reputación, cercanía social,
  políticas de devolución, intermediarios confiables o mecanismos que hacen visible
  la responsabilidad del vendedor.

estructura:
  deseo:
    - necesidad
    - aspiracion
    - curiosidad
    - oportunidad
    - urgencia

  riesgo_percibido:
    - perdida_de_dinero
    - producto_defectuoso
    - engaño
    - baja_calidad
    - dificultad_de_reclamo
    - perdida_de_tiempo
    - daño_social_o_psicologico

  mecanismos_de_confianza:
    - garantia
    - devolucion_facil
    - prueba_gratuita
    - muestra
    - reputacion_de_marca
    - reputacion_del_vendedor
    - reviews
    - vendedor_local
    - plataforma_intermediaria
    - influencer_o_recomendador
    - soporte_visible
    - certificaciones
    - demostraciones

  resultado:
    - menor_miedo
    - mayor_confianza
    - mayor_disposicion_a_probar
    - mayor_probabilidad_de_compra
```

---

## 4. El caso de Hopkins como instancia del modelo

### 4.1. Garantía común

La garantía común dice:

```txt
“garantizado”
```

Pero como muchas empresas dicen lo mismo, deja de impresionar. Se vuelve una frase genérica.

```txt
garantía común
  → frase comercial esperada
    → bajo impacto psicológico
      → poca diferenciación
        → menor reducción adicional de riesgo
```

### 4.2. Garantía firmada por dealer local

La garantía del dealer local cambia la estructura psicológica:

```txt
empresa lejana:
  promesa abstracta

dealer local:
  persona identificable
  firma
  cercanía
  reputación local
  reclamación imaginable
```

La fuerza psicológica aparece porque el comprador puede imaginar con claridad:

```txt
si algo sale mal, sé con quién ir
```

Ese es el punto central:

```txt
El comprador confía más cuando puede imaginar qué ocurre si algo sale mal.
```

---

## 5. Capas del modelo

```yaml
modelo_por_capas:
  capa_1_deseo:
    pregunta: "¿La persona quiere o necesita esto?"
    ejemplos:
      - necesidad
      - aspiracion
      - urgencia
      - curiosidad
      - oportunidad

  capa_2_riesgo:
    pregunta: "¿Qué teme perder?"
    ejemplos:
      - dinero
      - tiempo
      - seguridad
      - reputacion
      - tranquilidad
      - control

  capa_3_confianza:
    pregunta: "¿Qué señal reduce el miedo?"
    ejemplos:
      - garantia
      - reviews
      - vendedor_local
      - prueba_gratuita
      - marca_reconocida
      - soporte
      - politica_de_devolucion

  capa_4_responsabilidad:
    pregunta: "¿Quién responde si algo falla?"
    ejemplos:
      - dealer_local
      - plataforma
      - empresa
      - influencer
      - vendedor
      - comunidad

  capa_5_enforcement:
    pregunta: "¿Por qué creo que cumplirá?"
    ejemplos:
      - reputacion
      - costo_de_incumplir
      - contrato
      - firma
      - reviews_publicas
      - relacion_social
      - perdida_de_acceso_a_plataforma

  capa_6_accion:
    pregunta: "¿La persona se siente segura para actuar?"
    ejemplos:
      - compra
      - prueba
      - solicitud_de_demo
      - suscripcion
      - visita_a_tienda
```

---

## 6. Núcleo psicológico: deseo contra miedo

El riesgo percibido tiene una raíz psicológica profunda porque se basa en una forma de miedo anticipado. No es sólo una duda racional. El comprador imagina pérdidas posibles:

```txt
quiero algo
  → lo encuentro en un lugar poco confiable
    → deseo comprar
      vs.
    → miedo a perder dinero / ser engañado / recibir algo malo
```

La decisión depende de qué fuerza domina:

```txt
si el deseo supera al miedo:
  compro o pruebo

si el miedo supera al deseo:
  pospongo, busco más información o abandono
```

La publicidad interviene en dos direcciones:

```txt
1. Aumentar deseo.
2. Reducir miedo.
```

En el caso de la garantía, la intervención principal está en la segunda dirección.

---

## 7. Familia de mecanismos para reducir riesgo percibido

La garantía es sólo una técnica dentro de una familia más amplia de mecanismos de reducción de riesgo.

```yaml
mecanismos_para_reducir_riesgo_percibido:
  garantia:
    funcion: "si falla, puedo recuperar dinero"

  muestra_gratis:
    funcion: "puedo probar antes de comprometerme"

  prueba_gratuita:
    funcion: "puedo experimentar sin riesgo inicial"

  reputacion_de_marca:
    funcion: "otros ya confían en esta marca"

  reputacion_del_vendedor:
    funcion: "este vendedor tiene algo que perder"

  reviews_y_testimonios:
    funcion: "otros compradores validan la experiencia"

  certificaciones:
    funcion: "una autoridad externa respalda calidad o seguridad"

  comparaciones:
    funcion: "puedo evaluar contra alternativas"

  demostracion:
    funcion: "veo el producto funcionando"

  informacion_detallada:
    funcion: "reduzco incertidumbre antes de decidir"

  politica_de_devolucion_clara:
    funcion: "sé exactamente cómo reclamar"

  pago_con_proteccion:
    funcion: "hay intermediario si algo sale mal"

  vendedor_local:
    funcion: "sé a quién acudir físicamente"
```

La idea profunda es:

```txt
la publicidad no sólo debe aumentar deseo;
también debe disminuir miedo.
```

---

## 8. Submodelo estratégico: confiar porque el otro tiene algo que perder

Aquí aparece una lógica de juego estratégico:

```txt
confío en ti no porque te conozca,
sino porque sé que tienes algo que perder si me engañas.
```

El vendedor puede elegir:

```txt
cumplir
  → gana confianza futura

engañar
  → gana algo hoy
  → pero pierde reputación, clientes, acceso o relación
```

La confianza aparece cuando el comprador percibe que:

```txt
la pérdida futura del vendedor por engañar
es mayor que la ganancia inmediata del engaño.
```

En el caso de Hopkins:

```txt
dealer local
  → tiene reputación local
  → tiene tienda
  → puede perder clientes
  → puede ser reclamado directamente
```

Por eso su garantía pesa más que la de una empresa distante.

```yaml
submodelo_juego_de_confianza:
  jugador_1: comprador
  jugador_2: vendedor

  problema_del_comprador:
    - no_conoce_la_calidad_real
    - teme_perder_dinero
    - teme_no_poder_reclamar

  opciones_del_comprador:
    - comprar
    - no_comprar
    - buscar_otro_vendedor

  opciones_del_vendedor:
    - cumplir
    - engañar
    - responder_si_hay_reclamo
    - evadir_responsabilidad

  mecanismo_de_confianza:
    - reputacion_visible
    - firma
    - cercania
    - posibilidad_de_reclamo
    - costo_reputacional

  condicion_de_confianza:
    - el_vendedor_tiene_algo_valioso_que_perder
```

---

## 9. Submodelo relacional: venta directa, multinivel y confianza social

La garantía local y ciertos modelos de venta directa tienen una similitud estructural: ambos usan confianza relacional y proximidad social.

No son lo mismo, pero comparten esta lógica:

```txt
empresa distante
  → baja confianza directa

intermediario cercano
  → presta su reputación
    → reduce distancia social
      → aumenta disposición a escuchar o probar
```

En una garantía local:

```txt
la empresa distante se vuelve confiable
porque el dealer cercano pone su rostro y reputación
```

En venta directa o multinivel:

```txt
el producto o empresa distante se vuelve más aceptable
porque llega por una persona conocida, cercana o socialmente conectada
```

La similitud estructural es:

```txt
la empresa usa una red de confianza personal
para reducir resistencia frente a una oferta comercial.
```

Pero aparece una tensión ética:

```txt
la misma confianza que reduce miedo
puede convertirse en presión social.
```

Por eso, en este modelo la confianza relacional debe analizarse con doble lectura:

```yaml
confianza_relacional:
  funcion_positiva:
    - reduce_distancia_social
    - facilita_prueba
    - permite_explicacion_personalizada
    - hace_mas_reclamable_la_oferta

  riesgo_etico:
    - puede_presionar_relaciones_personales
    - puede_confundir_amizad_con_venta
    - puede_explotar_confianza_familiar_o_comunitaria
```

---

## 10. Submodelo competitivo: absorber riesgo como ventaja de entrada

Una empresa nueva en un mercado competido tiene un problema:

```txt
nadie me conoce
nadie confía todavía en mí
mis competidores tienen reputación
el comprador teme probar algo nuevo
```

Entonces puede usar una estrategia:

```txt
como todavía no confías en mí,
yo absorbo más riesgo que tú.
```

Esto puede manifestarse como:

```txt
prueba gratuita
garantía fuerte
devolución fácil
cancelación sin fricción
soporte inmediato
reembolso rápido
instalación gratuita
demo personalizada
compra protegida
primer pedido sin riesgo
```

El modelo de negocio no se basa sólo en vender producto. Se basa en vender una condición psicológica:

```txt
puedes probar sin miedo
```

```yaml
modelo_de_negocio_por_reduccion_de_riesgo:
  problema_de_mercado:
    - alta_competencia
    - marcas_establecidas
    - bajo_nivel_de_confianza_inicial
    - miedo_a_probar_producto_nuevo

  propuesta:
    - prueba_sin_riesgo
    - devolucion_facil
    - reembolso_rapido
    - soporte_visible
    - garantia_clara
    - proceso_de_reclamo_sin_friccion

  promesa_psicologica:
    - "no arriesgas tú, arriesgamos nosotros"

  efecto_esperado:
    - mayor_prueba_inicial
    - menor_barrera_de_compra
    - mayor_confianza
    - diferenciacion_frente_a_competidores
```

### Advertencia estratégica

Una política demasiado generosa puede atraer abuso, elevar costos logísticos o afectar márgenes. Por eso la ventaja competitiva no consiste simplemente en “devolver todo siempre”, sino en diseñar una política que reduzca miedo sin destruir el negocio.

```yaml
diseño_de_politica_de_reduccion_de_riesgo:
  debe_ser:
    - clara
    - facil_de_entender
    - visible_antes_de_la_compra
    - economicamente_sostenible
    - operacionalmente_ejecutable
    - suficientemente_generosa_para_reducir_miedo
    - suficientemente_controlada_para_evitar_abuso
```

---

## 11. Aplicaciones por contexto

### 11.1. Mail advertising

```txt
problema:
  empresa distante, producto no visible

solución:
  garantía clara, devolución, cupón, prueba, dealer local

mecanismo:
  reducir riesgo de comprar sin ver
```

### 11.2. Tienda física

```txt
problema:
  miedo a equivocarse o no poder devolver

solución:
  vendedor responsable, cambio inmediato, garantía local

mecanismo:
  reclamación fácil e imaginable
```

### 11.3. Ecommerce

```txt
problema:
  producto no tangible, vendedor distante

solución:
  reviews, devolución gratis, tracking, pago protegido

mecanismo:
  plataforma y proceso reducen riesgo
```

### 11.4. Marketplace

```txt
problema:
  vendedores desconocidos

solución:
  reputación del seller, ratings, protección al comprador

mecanismo:
  el vendedor tiene algo que perder
```

### 11.5. Influencer commerce

```txt
problema:
  marca desconocida

solución:
  creador confiable explica, demuestra y recomienda

mecanismo:
  confianza interpersonal transferida a la oferta
```

### 11.6. Multinivel / venta directa

```txt
problema:
  empresa/producto distante o poco conocido

solución:
  persona cercana introduce la oferta

mecanismo:
  la relación social reduce resistencia inicial
```

### 11.7. SaaS / productos digitales

```txt
problema:
  miedo a pagar por algo que no se usará o no funcionará

solución:
  free trial, demo, cancelación simple, onboarding, soporte

mecanismo:
  prueba antes del compromiso total
```

---

## 12. Matriz de transformación

| Situación inicial | Riesgo percibido | Mecanismo de confianza | Resultado esperado |
|---|---|---|---|
| Empresa distante | No sé si responderán | Dealer local firmado | Reclamación imaginable |
| Producto nuevo | No sé si funciona | Prueba gratuita / muestra | Prueba sin compromiso |
| Ecommerce desconocido | No sé si llegará bien | Reviews + pago protegido | Compra más segura |
| Marketplace | No conozco al vendedor | Ratings + reputación | Confianza por historial |
| Marca nueva | No tiene reputación | Garantía fuerte / devolución fácil | Reducción de barrera inicial |
| Venta directa | No conozco la empresa | Persona cercana recomienda | Confianza transferida |
| SaaS | Miedo a pagar y no usar | Free trial + cancelación simple | Prueba antes de pagar |

---

## 13. Relación con ACCD

Este modelo puede convertirse en una sección productiva dentro del Campo Atencional de Publicidad.

```yaml
seccion_productiva:
  id: SEC_CONFIANZA_RIESGO_Y_GARANTIA
  nombre: Confianza, riesgo y garantía
  funcion_dentro_del_campo_atencional: >
    Analizar cómo la publicidad y el diseño comercial reducen el miedo del comprador,
    hacen visible la responsabilidad y permiten que el deseo se convierta en acción.

  promesa_recurrente: >
    Mostrar cómo una oferta se vuelve comprable cuando el riesgo deja de caer
    completamente sobre el comprador.

  operacion_cognitiva_principal:
    - identificar_riesgo
    - identificar_miedo
    - mostrar_mecanismo_de_confianza
    - explicar_responsabilidad
    - extraer_principio_transferible

  posibles_realizaciones:
    - video_corto
    - carousel
    - newsletter
    - clase
    - caso_ancla
    - modelo_de_negocio
```

---

## 14. Frases nucleares

```txt
La garantía es sólo una forma particular de una operación más general:
redistribuir psicológicamente el riesgo de la compra.
```

```txt
La confianza comercial aparece cuando el comprador siente que el riesgo ya no cae completamente sobre él.
```

```txt
El comprador confía cuando puede ver quién responderá,
cómo responderá,
y qué perderá si no responde.
```

```txt
El comprador confía más cuando puede imaginar qué ocurre si algo sale mal.
```

```txt
Una garantía abstracta reduce riesgo legal.
Una garantía cercana reduce riesgo psicológico.
```

---

## 15. Fórmula final del modelo

```txt
Modelo de Arquitectura de Confianza Bajo Riesgo:

1. Hay deseo.
2. Hay riesgo percibido.
3. El riesgo produce miedo o fricción.
4. La publicidad o el diseño comercial introducen un mecanismo de confianza.
5. Ese mecanismo hace visible quién responde si algo falla.
6. El comprador siente que el riesgo ya no cae completamente sobre él.
7. La acción se vuelve psicológicamente posible.
```

Versión compacta:

```txt
deseo
  + miedo
    → indecisión

deseo
  + confianza
    + responsabilidad visible
      → acción
```

