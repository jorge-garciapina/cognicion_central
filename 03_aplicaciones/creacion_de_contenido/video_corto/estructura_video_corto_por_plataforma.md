# Estructura de video corto por plataforma

**Tipo de documento:** estructura comparativa y operativa  
**Tema:** equivalente moderno de la economía de espacio de Hopkins en video corto  
**Uso:** base para protocolos de creación de contenido, video corto, anuncios verticales y análisis ACCD  
**Estado:** independiente de las ideas anteriores del hilo
**iNSPIRACIÓN:** CAPÍTULO 4 DE SCIENTIFIC ADVERTISING

---

## 0. Punto de partida conceptual

En el capítulo de publicidad por correo, Hopkins observa que los anuncios que viven o mueren por resultados medibles suelen usar **tipografía pequeña**. Esa práctica no es una preferencia estética: es una señal económica. Si la letra grande duplicara espacio y costo sin duplicar respuesta, no pagaría.

La pregunta equivalente para video corto es:

```txt
Si en publicidad impresa la estructura eficiente se manifiesta como economía de espacio,
¿en video corto cuál es la estructura eficiente?
```

La respuesta de este documento es:

```txt
En video corto, la estructura eficiente es una economía temporal-audiovisual de la atención.
```

No es sólo temporal, porque el video corto no organiza únicamente segundos. Organiza simultáneamente imagen, movimiento, sonido, texto, cortes, ritmo, marca, demostración, emoción y acción.

```txt
video_corto =
  tiempo
  + imagen
  + sonido
  + montaje
  + texto_en_pantalla
  + ritmo
  + interacción
  + CTA
```

La equivalencia central queda así:

```txt
Publicidad por correo:
  cada línea debe pagar su espacio.

Video corto:
  cada segundo debe ganar el siguiente segundo.
```

---

## 1. mNode central

```yaml
mnode_id: DIS_MOLDE_ECONOMIA_ATENCIONAL_VIDEO_CORTO
tipo_de_unidad: molde_temporal_audiovisual
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: sintesis_contemporanea
formulacion: >
  El video corto eficaz organiza sus segundos como unidades de atención:
  inicia con un estímulo fuerte, sostiene interés mediante progresión audiovisual,
  entrega valor con rapidez y cierra con una acción clara.

estructura:
  unidad_de_costo:
    - segundo
    - plano
    - corte
    - estimulo_sonoro
    - texto_en_pantalla
    - gesto
    - movimiento
    - espacio_de_pantalla

  unidad_de_resultado:
    - retencion
    - comprension
    - recuerdo
    - interaccion
    - conversion
    - accion

  fases_generales:
    apertura:
      funcion: detener_scroll
      recursos_posibles:
        - hook_visual
        - pregunta
        - tension
        - sorpresa
        - rostro
        - texto_directo
        - sonido_distintivo
        - movimiento_inicial

    desarrollo:
      funcion: entregar_valor_y_sostener_atencion
      recursos_posibles:
        - demostracion
        - comparacion
        - historia_comprimida
        - problema_solucion
        - cortes_dinamicos
        - prueba
        - beneficio_visible

    cierre:
      funcion: convertir_atencion_en_accion_o_memoria
      recursos_posibles:
        - CTA
        - oferta
        - remate
        - loop
        - marca
        - instruccion_de_siguiente_paso

criterio_de_validacion:
  - cada_segundo_aumenta_o_sostiene_probabilidad_de_ver_el_siguiente
  - la_promesa_aparece_temprano
  - el_producto_o_marca_no_llega_demasiado_tarde
  - el_CTA_no_es_ambiguo
  - el_video_funciona_en_movil
```

---

## 2. Diferencia entre estructura impresa y estructura de video corto

| Medio                 | Unidad escasa        | Estructura dominante     | Desperdicio típico                                           | Principio económico                          |
| --------------------- | -------------------- | ------------------------ | ------------------------------------------------------------ | -------------------------------------------- |
| Publicidad por correo | Espacio impreso      | Distribución visual fija | letra grande que no paga, bordes inútiles, imagen decorativa | Cada elemento debe ganar su espacio          |
| Video corto           | Atención por segundo | Secuencia audiovisual    | intro lenta, plano sin tensión, marca tardía, CTA confusa    | Cada segundo debe ganar el siguiente segundo |

En el anuncio impreso, el receptor puede mirar el conjunto, saltar, volver y releer. En video corto, el receptor avanza en una secuencia temporal y puede abandonar en cualquier instante.

Por eso, el video corto no sólo tiene diseño visual. Tiene **diseño de continuidad atencional**.

```txt
si_un_segundo_no_sostiene_atencion
  → funciona_como_espacio_desperdiciado
```

---

# 3. Recomendaciones por plataforma

Las plataformas comparten algunos principios, pero no todas proponen el mismo modelo. A continuación se separa cada una por su propia lógica y por las recomendaciones que aparecen en sus guías o recursos oficiales.

---

## 3.1. TikTok

### Fuente principal

- TikTok for Business — _TikTok Creative Codes: 6 Principles for Creating Effective Ads_  
  https://ads.tiktok.com/business/en/creative-codes
- TikTok for Business — _Creative Best Practices for TikTok Ads_  
  https://ads.tiktok.com/business/en/blog/creative-best-practices-top-performing-ads
- TikTok for Business — _Creative best practices for performance ads_  
  https://ads.tiktok.com/help/article/creative-best-practices

### Modelo estructural de TikTok

TikTok propone explícitamente una estructura de tres partes:

```txt
hook → body → close
```

En términos operativos:

```yaml
plataforma: TikTok
estructura_recomendada:
  hook:
    funcion: captar_atencion
    recursos:
      - suspense
      - sorpresa
      - emocion
      - valor_temprano
      - movimiento
      - texto_en_pantalla

  body:
    funcion: comunicar_mensaje_de_marca
    recursos:
      - demostracion
      - producto_en_pantalla
      - branding_aditivo
      - historia_breve
      - beneficios

  close:
    funcion: cerrar_con_accion
    recursos:
      - CTA_fuerte
      - invitacion
      - oferta
      - cierre_memorable
```

### Recomendaciones específicas

TikTok enfatiza:

```yaml
recomendaciones_TikTok:
  formato:
    - grabar_vertical
    - usar_9_16
    - usar_video_de_alta_resolucion
    - dejar_espacio_para_interfaz_de_TikTok

  estructura:
    - usar_hook_body_close
    - comunicar_valor_temprano
    - mantener_mensaje_de_marca_en_el_cuerpo
    - cerrar_con_CTA_clara

  estimulacion:
    - musica
    - transiciones_dinamicas
    - movimiento
    - texto_en_pantalla
    - emojis
    - cambios_de_escena_rapidos

  aprendizaje:
    - refrescar_creativos_regularmente
    - testear_y_aprender_de_forma_continua
```

### Traducción a mNode

```yaml
mnode_id: DIS_MOLDE_TIKTOK_HOOK_BODY_CLOSE
familia_cognitiva: FAM-Diseño
tipo_de_unidad: molde_temporal_audiovisual
formulacion: >
  El video eficaz en TikTok se organiza como una secuencia de captura,
  desarrollo y cierre, usando estimulación audiovisual para sostener atención
  y una CTA clara para cerrar.

unidad_de_eficiencia:
  - retencion_temprana
  - valor_en_primeros_segundos
  - continuidad_de_estimulos
  - accion_final
```

### Lectura desde la economía atencional

```txt
TikTok no premia la introducción lenta.
Premia el valor temprano, la estimulación continua y la estructura clara.
```

---

## 3.2. YouTube / YouTube Shorts

### Fuentes principales

- Google Ads Help — _About the ABCDs of effective video ads_  
  https://support.google.com/google-ads/answer/14783551
- Google Business — _ABCDs of effective video ads_  
  https://business.google.com/in/resources/articles/abcds-of-effective-video-ads/
- Google Ads Help — _YouTube Shorts ads: Asset specs and best practices_  
  https://support.google.com/google-ads/answer/16041697
- Google / Think with Google — _ABCD principles PDF Playbook_  
  https://www.thinkwithgoogle.com/_qs/documents/15987/ABCDs_PDFPlaybook_April2022_Final.pdf

### Modelo estructural de YouTube

Google propone el marco **ABCD**:

```txt
Attention → Branding → Connection → Direction
```

```yaml
plataforma: YouTube
estructura_recomendada:
  attention:
    funcion: captar_y_sostener_atencion
    recursos:
      - apertura_fuerte
      - ritmo
      - encuadres_cerrados
      - estimulos_visuales
      - texto_visible

  branding:
    funcion: integrar_marca_de_forma_temprana_y_recurrente
    recursos:
      - producto_visible
      - colores_de_marca
      - senales_de_marca
      - logo_integrado

  connection:
    funcion: crear_relevancia_o_conexion
    recursos:
      - emocion
      - problema_del_usuario
      - demostracion
      - beneficio
      - historia

  direction:
    funcion: indicar_siguiente_paso
    recursos:
      - CTA
      - oferta
      - instruccion
      - direccion_clara
```

### Recomendaciones específicas para Shorts

```yaml
recomendaciones_YouTube_Shorts:
  formato:
    - usar_video_vertical_9_16
    - evitar_horizontal_cuando_el_objetivo_es_Shorts
    - adaptar_a_experiencia_movil_vertical

  estructura:
    - captar_atencion_desde_el_inicio
    - integrar_marca_temprano
    - conectar_con_necesidad_o_emocion
    - dirigir_hacia_accion

  produccion:
    - pensar_mobile_first
    - usar_encuadres_mas_cerrados
    - usar_texto_grande_y_legible
    - mantener_alto_contraste
    - usar_ritmo_visual
```

### Traducción a mNode

```yaml
mnode_id: DIS_MOLDE_YOUTUBE_ABCD_SHORTS
familia_cognitiva: FAM-Diseño
tipo_de_unidad: molde_audiovisual_de_video_ad
formulacion: >
  El anuncio eficaz para YouTube organiza atención, marca, conexión y dirección,
  adaptando esas capas a una experiencia vertical, móvil y de consumo rápido.

unidad_de_eficiencia:
  - atencion_inicial
  - marca_integrada
  - conexion_relevante
  - direccion_de_accion
```

### Lectura desde la economía atencional

```txt
YouTube no plantea sólo un hook.
Plantea una coordinación entre atención, marca, conexión y dirección.
```

Esto es importante: en YouTube, el riesgo no es solamente perder atención. También es captar atención sin que la marca o el siguiente paso queden claros.

---

## 3.3. Meta / Instagram Reels / Facebook Reels

### Fuentes principales

- Meta Business Help — _Best practices for Instagram video ads_  
  https://www.facebook.com/business/help/188534925073536
- Meta Business Learn — _How to apply creative best practices for your reels_  
  https://www.facebook.com/business/learn/lessons/create-fb-ig-reels
- Meta Business Help — _About text overlays and the safe zone for ads in Stories_  
  https://www.facebook.com/business/help/980593475366490
- Meta for Business — Reels ads examples / case studies using safe zones and first-three-seconds recommendations  
  https://www.facebook.com/business/success/standard-foods

### Modelo estructural de Meta Reels

Meta enfatiza una estructura de experiencia móvil y vertical:

```txt
primer_frame_compulsivo
  → mensaje_visible
    → formato_vertical
      → audio / texto / safe_zone
        → CTA / acción
```

```yaml
plataforma: Meta_Reels
estructura_recomendada:
  apertura:
    funcion: hook_visual_rapido
    recursos:
      - movimiento_en_primer_frame
      - visual_compelling
      - informacion_importante_temprana

  cuerpo:
    funcion: comunicar_valor_en_formato_movil
    recursos:
      - texto_overlay_claro
      - sonido_o_audio
      - demostracion_visual
      - contenido_vertical

  seguridad_visual:
    funcion: evitar_que_la_UI_obstruya_mensaje
    recursos:
      - safe_zone
      - texto_y_logo_no_obstruidos
      - elementos_clave_centrados

  cierre:
    funcion: CTA_o_siguiente_paso
    recursos:
      - llamada_a_la_accion
      - oferta
      - boton_o_instruccion
```

### Recomendaciones específicas

```yaml
recomendaciones_Meta_Reels:
  formato:
    - crear_video_vertical_9_16
    - construir_para_movil
    - usar_audio
    - respetar_safe_zones

  atencion:
    - usar_movimiento_o_visual_fuerte_en_primer_frame
    - incluir_informacion_compelling_en_los_primeros_segundos
    - no_dejar_el_valor_para_el_final

  texto:
    - usar_text_overlays_claros
    - poner_texto_importante_en_zona_visible
    - evitar_que_logo_o_texto_queden_tapados_por_interfaz

  accion:
    - incluir_CTA_clara
    - conectar_CTA_con_el_mensaje_visual
```

### Traducción a mNode

```yaml
mnode_id: DIS_MOLDE_META_REELS_VERTICAL_SAFE_ZONE
familia_cognitiva: FAM-Diseño
tipo_de_unidad: molde_visual_temporal_para_reels
formulacion: >
  El anuncio en Reels debe captar atención rápido, comunicar valor en formato vertical,
  usar audio o texto de apoyo, y ubicar elementos clave dentro de zonas seguras para
  que la interfaz no destruya el mensaje.

unidad_de_eficiencia:
  - primer_frame
  - legibilidad_movil
  - visibilidad_en_safe_zone
  - claridad_del_CTA
```

### Lectura desde la economía atencional

```txt
En Meta Reels, un segundo puede desperdiciarse no sólo por aburrido,
sino porque el texto, logo o CTA quedan tapados por la interfaz.
```

Por eso, aquí la economía no es sólo temporal. Es también **economía de visibilidad dentro de la interfaz**.

---

## 3.4. LinkedIn

### Fuente principal

- LinkedIn Marketing Blog — _Your One-Stop Shop for LinkedIn Video Ad Tips_  
  https://www.linkedin.com/business/marketing/blog/linkedin-ads/your-one-stop-shop-for-linkedin-video-ad-tips

### Modelo estructural de LinkedIn

LinkedIn es una plataforma profesional. Su lógica no es exactamente igual a TikTok o Reels. La recomendación principal encontrada es captar atención rápido, pero ajustando el mensaje a metas profesionales, industria y puntos de dolor.

```yaml
plataforma: LinkedIn
estructura_recomendada:
  apertura:
    funcion: dar_razon_profesional_para_detenerse
    recursos:
      - problema_de_industria
      - dato_relevante
      - pregunta_profesional
      - dolor_operativo
      - resultado_de_negocio

  desarrollo:
    funcion: conectar_con_objetivo_profesional
    recursos:
      - caso_de_uso
      - beneficio_B2B
      - eficiencia
      - ahorro
      - riesgo
      - autoridad

  cierre:
    funcion: proponer_siguiente_paso_profesional
    recursos:
      - descargar_guia
      - solicitar_demo
      - registrarse
      - contactar_ventas
      - aprender_mas
```

### Recomendaciones específicas

```yaml
recomendaciones_LinkedIn:
  atencion:
    - captar_atencion_en_los_primeros_3_segundos
    - dar_razon_para_detener_scroll

  audiencia:
    - adaptar_mensaje_a_la_audiencia
    - hablar_a_metas_profesionales
    - hablar_a_puntos_de_dolor_de_industria

  formato:
    - disenar_mobile_first
    - crear_video_que_funcione_en_pantallas_pequenas

  contenido:
    - priorizar_valor_profesional
    - evitar_ganchos_que_no_conecten_con_contexto_B2B
```

### Traducción a mNode

```yaml
mnode_id: DIS_MOLDE_LINKEDIN_HOOK_PROFESIONAL
familia_cognitiva: FAM-Diseño
tipo_de_unidad: molde_temporal_para_video_B2B
formulacion: >
  El video en LinkedIn debe captar atención rápido, pero con un gancho profesional:
  problema de negocio, dolor de industria, meta laboral, dato relevante o promesa de
  valor B2B.

unidad_de_eficiencia:
  - relevancia_profesional_temprana
  - claridad_del_valor_B2B
  - accion_profesional
```

### Lectura desde la economía atencional

```txt
En LinkedIn, el hook no debe ser sólo llamativo.
Debe ser profesionalmente relevante.
```

Esto impide forzar el modelo de TikTok sobre LinkedIn. Ambos piden atención temprana, pero el tipo de atención buscada es distinto.

---

## 3.5. Snapchat

### Fuentes principales

- Snapchat Business Help — _Single Image or Video Creative Best Practices_  
  https://businesshelp.snapchat.com/s/article/snap-ads-practices
- Snapchat for Business — _Snapchat Ad Formats & Specs_  
  https://forbusiness.snapchat.com/advertising/ad-formats

### Modelo estructural de Snapchat

Snapchat recomienda anuncios simples que se sientan como Snaps normales, con storytelling lineal, breve y nativo.

```yaml
plataforma: Snapchat
estructura_recomendada:
  apertura:
    funcion: sentirse_nativo_y_directo
    recursos:
      - visual_simple
      - estilo_de_snap
      - mensaje_inmediato

  cuerpo:
    funcion: contar_una_historia_lineal_breve
    recursos:
      - demostracion_rapida
      - producto
      - gesto
      - accion
      - beneficio_directo

  cierre:
    funcion: activar_interaccion
    recursos:
      - swipe
      - click
      - compra
      - exploracion_de_producto
      - collection_tiles
```

### Recomendaciones específicas

```yaml
recomendaciones_Snapchat:
  duracion:
    - mantener_creativos_simples
    - recomendacion_de_aproximadamente_5_a_6_segundos_para_single_image_or_video

  formato:
    - usar_9_16
    - resolucion_720x1280_o_superior_segun_formato
    - respetar_especificaciones_de_formato

  narrativa:
    - storytelling_lineal
    - estilo_nativo_de_Snaps
    - mensaje_breve
    - evitar_complejidad_excesiva

  accion:
    - usar_interaccion_disponible_segun_formato
    - collection_ads_para_exhibir_productos_y_facilitar_compra
```

### Traducción a mNode

```yaml
mnode_id: DIS_MOLDE_SNAPCHAT_BITE_SIZED_LINEAR_STORY
familia_cognitiva: FAM-Diseño
tipo_de_unidad: molde_temporal_breve_nativo
formulacion: >
  El anuncio en Snapchat debe sentirse simple, nativo y lineal: una historia corta,
  fácil de procesar, con una acción inmediata compatible con la experiencia de Snap.

unidad_de_eficiencia:
  - brevedad
  - naturalidad_nativa
  - linealidad
  - accion_rapida
```

### Lectura desde la economía atencional

```txt
En Snapchat, el desperdicio no es sólo la intro lenta.
También lo es una estructura demasiado compleja para una experiencia breve y nativa.
```

---

## 3.6. Pinterest

### Fuente principal

- Pinterest Business — _Creative best practices for Pinterest ads_  
  https://business.pinterest.com/creative-best-practices/

### Modelo estructural de Pinterest

Pinterest no debe forzarse al mismo modelo de TikTok. Su lógica es más visual, inspiracional y de descubrimiento. Pinterest enfatiza que las imágenes y videos son lo primero, que los anuncios deben sentirse como contenido útil, inspirador y accionable, y que la composición puede organizarse apilando historia visual y texto.

```yaml
plataforma: Pinterest
estructura_recomendada:
  visual_first:
    funcion: inspirar_descubrimiento
    recursos:
      - visual_fuerte
      - movimiento
      - producto_visible
      - contexto_realista

  producto_y_marca:
    funcion: mostrar_que_se_ofrece
    recursos:
      - producto_central
      - logo_visible_no_invasivo
      - look_and_feel_de_marca

  story_stack:
    funcion: ordenar_mensaje_visual
    recursos:
      - visual_en_el_centro
      - texto_clave_arriba
      - detalles_abajo
      - CTA_especifica

  accion:
    funcion: guiar_a_descubrimiento_o_compra
    recursos:
      - mensaje_conciso
      - branding_claro
      - CTA_especifica
```

### Recomendaciones específicas

```yaml
recomendaciones_Pinterest:
  formato:
    - planear_para_canvas_vertical
    - usar_2_3_para_muchos_formatos_de_Pin
    - adaptar_assets_a_mobile

  visual:
    - visuales_primero
    - usar_assets_compelling
    - usar_movimiento_para_hacer_destacar_ads
    - producto_frente_y_centro
    - evitar_imagenes_abstractas_si_no_muestran_marca

  marca:
    - logo_o_nombre_de_marca_claramente_visible
    - marca_visible_sin_dominar_el_anuncio

  estructura:
    - stack_your_story
    - visuales_en_el_medio
    - texto_clave_arriba
    - detalles_abajo

  accion:
    - mensaje_conciso
    - branding_claro
    - CTA_especifica

  testing:
    - probar_diferentes_elementos_creativos
    - usar_AB_testing_o_comparar_resultados_cuando_corresponda
```

### Traducción a mNode

```yaml
mnode_id: DIS_MOLDE_PINTEREST_VISUAL_DISCOVERY_STACK
familia_cognitiva: FAM-Diseño
tipo_de_unidad: molde_visual_inspiracional
formulacion: >
  La pieza de Pinterest debe funcionar como descubrimiento visual: producto visible,
  marca clara, composición vertical, historia apilada y CTA específica.

unidad_de_eficiencia:
  - inspiracion_visual
  - claridad_producto
  - utilidad_del_contenido
  - accion_de_descubrimiento_o_compra
```

### Lectura desde la economía atencional

```txt
En Pinterest, el equivalente de “cada segundo debe ganar el siguiente”
se suaviza: no todo es velocidad. También importa que el anuncio sea visualmente útil,
inspirador y guardable/comprable.
```

---

# 4. Cosas transversales entre plataformas

Esta sección no fuerza un modelo único. Sólo registra patrones que aparecen en varias plataformas.

---

## 4.1. Atención temprana

Aparece claramente en:

```yaml
aparece_en:
  - TikTok
  - YouTube / Google ABCD
  - Meta Reels
  - LinkedIn
```

También está implícita en Snapchat y Pinterest, pero con matices distintos.

```txt
TikTok:
  hook temprano

YouTube:
  Attention dentro de ABCD

Meta:
  movimiento o visual fuerte en primer frame

LinkedIn:
  captar atención en primeros 3 segundos

Snapchat:
  brevedad y simplicidad desde el inicio

Pinterest:
  visual-first más que hook narrativo puro
```

Conclusión transversal:

```txt
La apertura no debe ser una introducción lenta.
Debe ser una unidad de captura o relevancia inmediata.
```

---

## 4.2. Mobile-first / verticalidad

Aparece claramente en:

```yaml
aparece_en:
  - TikTok
  - YouTube Shorts
  - Meta Reels
  - Snapchat
  - Pinterest
  - LinkedIn
```

Pero no siempre significa lo mismo.

```txt
TikTok / Reels / Shorts / Snapchat:
  vertical 9:16 como formato dominante.

Pinterest:
  verticalidad frecuente, pero muchas guías enfatizan 2:3 para Pins.

LinkedIn:
  mobile-first más que identidad puramente vertical de entretenimiento.
```

Conclusión transversal:

```txt
El video corto actual se diseña desde la pantalla móvil,
pero la proporción exacta y el tipo de composición dependen de la plataforma.
```

---

## 4.3. Claridad de acción

Aparece en:

```yaml
aparece_en:
  - TikTok: close con CTA fuerte
  - YouTube: Direction
  - Meta: CTA clara
  - Snapchat: interacción / swipe / compra / collection
  - Pinterest: CTA específica
  - LinkedIn: siguiente paso profesional
```

Conclusión transversal:

```txt
El video corto no debe terminar sólo con una impresión.
Debe dejar claro qué debe hacer, recordar o entender el usuario.
```

---

## 4.4. Integración temprana de marca o producto

Aparece en:

```yaml
aparece_en:
  - YouTube: Branding
  - TikTok: body con branding aditivo y producto en pantalla
  - Pinterest: logo visible y producto frente y centro
  - Meta: elementos clave visibles y safe zone
```

No debe forzarse igual en todas las plataformas. En algunas, marca demasiado brusca puede sentirse menos nativa; en otras, marca tardía destruye recuerdo.

Conclusión transversal:

```txt
La marca o producto debe aparecer de forma funcional,
no como logo decorativo ni como revelación demasiado tardía.
```

---

## 4.5. Estimulación audiovisual

Aparece especialmente en:

```yaml
aparece_en:
  - TikTok
  - YouTube
  - Meta Reels
  - Snapchat
```

En Pinterest, la recomendación es más visual-first y de movimiento/impacto, pero no necesariamente con la misma lógica de ritmo frenético.

Conclusión transversal:

```txt
Movimiento, sonido, cortes, texto y cambios visuales sostienen atención,
pero la intensidad debe adaptarse a la cultura de cada plataforma.
```

---

## 4.6. Safe zones e interfaz

Aparece claramente en:

```yaml
aparece_en:
  - TikTok
  - Meta Reels / Stories
```

También es relevante para cualquier formato vertical con interfaz superpuesta, pero las fuentes más explícitas aquí son TikTok y Meta.

Conclusión transversal:

```txt
En plataformas con UI superpuesta, no basta con diseñar el video.
Hay que diseñar el video dentro de la interfaz.
```

---

## 4.7. Testing y aprendizaje

Aparece en:

```yaml
aparece_en:
  - TikTok
  - Meta
  - Pinterest
  - Google / YouTube como marco data-backed
```

Conclusión transversal:

```txt
La estructura recomendada no debe tratarse como dogma.
Debe funcionar como hipótesis creativa que se prueba y ajusta.
```

---

# 5. Matriz comparativa por plataforma

| Plataforma       | Modelo explícito                           | Unidad crítica                            | Apertura                                    | Desarrollo                            | Cierre                   | Riesgo principal                                                            |
| ---------------- | ------------------------------------------ | ----------------------------------------- | ------------------------------------------- | ------------------------------------- | ------------------------ | --------------------------------------------------------------------------- |
| TikTok           | Hook → Body → Close                        | Primeros segundos + estimulación          | Suspense, sorpresa, emoción, valor temprano | Mensaje de marca, producto, estímulos | CTA fuerte               | Intro lenta o falta de estimulación                                         |
| YouTube / Shorts | ABCD                                       | Atención + marca + conexión + dirección   | Attention                                   | Branding + Connection                 | Direction                | Captar atención sin marca o sin dirección                                   |
| Meta Reels       | Vertical + audio + safe zone + hook visual | Primer frame + visibilidad móvil          | Movimiento o visual fuerte                  | Texto/audio/demostración              | CTA                      | Elementos tapados por UI o valor tardío                                     |
| LinkedIn         | Hook profesional + valor B2B               | Relevancia profesional temprana           | Problema, dato o dolor profesional          | Caso, beneficio, autoridad            | Demo, descarga, contacto | Hook llamativo pero no relevante                                            |
| Snapchat         | Simple, nativo, lineal, breve              | Brevedad + naturalidad                    | Snap-like, directo                          | Historia lineal simple                | Swipe/interacción        | Complejidad excesiva                                                        |
| Pinterest        | Visual-first + story stack                 | Inspiración visual + claridad de producto | Visual fuerte                               | Producto, marca, texto apilado        | CTA específica           | Forzar estructura de entretenimiento rápido en un entorno de descubrimiento |

---

# 6. Modelo general no-forzado

No hay una única estructura universal de video corto. Lo que sí existe es una familia de principios:

```yaml
familia_de_principios:
  atencion_temprana:
    descripcion: abrir_con_algo_que_justifique_detenerse
    plataformas_fuertes:
      - TikTok
      - YouTube
      - Meta
      - LinkedIn

  diseño_movil:
    descripcion: pensar_primero_en_pantalla_pequena
    plataformas_fuertes:
      - TikTok
      - YouTube_Shorts
      - Meta_Reels
      - Snapchat
      - Pinterest
      - LinkedIn

  progresion_audiovisual:
    descripcion: sostener_interes_mediante_cambios_o_desarrollo
    plataformas_fuertes:
      - TikTok
      - YouTube
      - Meta
      - Snapchat

  claridad_de_accion:
    descripcion: cerrar_con_siguiente_paso_o_intencion_clara
    plataformas_fuertes:
      - TikTok
      - YouTube
      - Meta
      - LinkedIn
      - Snapchat
      - Pinterest

  producto_o_marca_funcional:
    descripcion: integrar_marca_producto_sin_que_sea_solo_decoracion
    plataformas_fuertes:
      - YouTube
      - TikTok
      - Pinterest
      - Meta

  testing:
    descripcion: tratar_la_estructura_como_hipotesis_medible
    plataformas_fuertes:
      - TikTok
      - Meta
      - Pinterest
      - YouTube
```

---

# 7. Reformulación final

```txt
La estructura del video corto es temporal,
pero no solamente temporal.

Es una arquitectura audiovisual de atención,
donde cada segundo, plano, sonido, corte, texto y gesto
debe justificar su lugar dentro de la secuencia.
```

La fórmula más útil para integrar al sistema es:

```txt
Mail order:
  cada línea debe pagar su espacio.

Video corto:
  cada segundo debe ganar el siguiente segundo.
```

Pero por plataforma cambia el modo de ganar ese siguiente segundo:

```txt
TikTok:
  estimulación + hook + estructura nativa

YouTube:
  atención + marca + conexión + dirección

Meta Reels:
  primer frame + verticalidad + safe zone + CTA

LinkedIn:
  relevancia profesional inmediata

Snapchat:
  simplicidad nativa y lineal

Pinterest:
  descubrimiento visual, producto claro e inspiración accionable
```

---

# 8. Plantilla ACCD para análisis de video corto

```yaml
analisis_video_corto:
  plataforma:
  objetivo:
  audiencia:
  formato:

  estructura_temporal:
    apertura:
      segundo_inicio:
      segundo_fin:
      funcion:
      elemento_de_captura:
      evaluacion:

    desarrollo:
      segundo_inicio:
      segundo_fin:
      funcion:
      progresion:
      evaluacion:

    cierre:
      segundo_inicio:
      segundo_fin:
      funcion:
      CTA:
      evaluacion:

  estructura_audiovisual:
    primer_frame:
    movimiento:
    texto_en_pantalla:
    sonido:
    ritmo_de_cortes:
    marca_producto:
    safe_zone:

  economia_de_atencion:
    segundos_que_ganan_atencion:
    segundos_debilitados:
    posibles_desperdicios:
      - intro_lenta
      - plano_sin_funcion
      - texto_ilegible
      - marca_tardia
      - CTA_confusa
      - elemento_tapado_por_UI

  validacion:
    se_entiende_en_2_segundos:
    hay_valor_temprano:
    hay_progresion:
    hay_CTA_clara:
    cumple_modelo_de_plataforma:
    requiere_test:
```

---

# 9. Referencias

## TikTok

- TikTok for Business. **TikTok Creative Codes: 6 Principles for Creating Effective Ads.**  
  https://ads.tiktok.com/business/en/creative-codes

- TikTok for Business. **Creative Best Practices for TikTok Ads.**  
  https://ads.tiktok.com/business/en/blog/creative-best-practices-top-performing-ads

- TikTok Ads Help Center. **Creative best practices for performance ads.**  
  https://ads.tiktok.com/help/article/creative-best-practices

## YouTube / Google

- Google Ads Help. **About the ABCDs of effective video ads.**  
  https://support.google.com/google-ads/answer/14783551

- Google Business. **ABCDs of effective video ads.**  
  https://business.google.com/in/resources/articles/abcds-of-effective-video-ads/

- Google Ads Help. **YouTube Shorts ads: Asset specs and best practices.**  
  https://support.google.com/google-ads/answer/16041697

- Think with Google. **ABCD principles PDF Playbook.**  
  https://www.thinkwithgoogle.com/_qs/documents/15987/ABCDs_PDFPlaybook_April2022_Final.pdf

## Meta / Instagram / Facebook Reels

- Meta Business Help. **Best practices for Instagram video ads.**  
  https://www.facebook.com/business/help/188534925073536

- Meta Business Learn. **How to apply creative best practices for your reels.**  
  https://www.facebook.com/business/learn/lessons/create-fb-ig-reels

- Meta Business Help. **About text overlays and the safe zone for ads in Stories.**  
  https://www.facebook.com/business/help/980593475366490

- Meta for Business. **Standard Foods case study.**  
  https://www.facebook.com/business/success/standard-foods

## LinkedIn

- LinkedIn Marketing Blog. **Your One-Stop Shop for LinkedIn Video Ad Tips.**  
  https://www.linkedin.com/business/marketing/blog/linkedin-ads/your-one-stop-shop-for-linkedin-video-ad-tips

## Snapchat

- Snapchat Business Help. **Single Image or Video Creative Best Practices.**  
  https://businesshelp.snapchat.com/s/article/snap-ads-practices

- Snapchat for Business. **Snapchat Ad Formats & Specs.**  
  https://forbusiness.snapchat.com/advertising/ad-formats

## Pinterest

- Pinterest Business. **Creative best practices for Pinterest ads.**  
  https://business.pinterest.com/creative-best-practices/
