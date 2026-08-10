https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a33227f-cc1c-83e8-b4fc-00ffeb9b8c46

# PCMG — Protocolo Constructor de Corriente de Continuidad

## Protocolo para convertir arquitecturas argumentativas en guiones controlados

**Sistema superior:** MAANC / ACCD / TMC  
**Base teórica:** `modelo_analizador_argumentativo_maanc12.md`  
**Submódulo relacionado:** `constructor_plano_logico_argumentativo.md`  
**Objeto producido:** Corriente de Continuidad  
**Uso principal:** construcción controlada de guiones a partir de movimientos argumentativos ordenados  
**Caso de aplicación inicial:** guion sobre Barnum Effect en publicidad, venta y otros contextos

---

# 0. Propósito del protocolo

Este protocolo define cómo convertir una **arquitectura argumentativa ya construida** en una **Corriente de Continuidad**, sin redactar todavía el guion final.

Su función no es escribir el guion de forma automática.

Su función es construir el artefacto intermedio que permite pasar de:

```txt
arquitectura argumentativa
  → Corriente de Continuidad
    → beats internos
      → guion redactado por ejecución de función
```

El protocolo evita tres errores frecuentes:

```txt
1. Redactar directamente desde la arquitectura argumentativa.
2. Convertir los MOV en una lista temática plana.
3. Reorganizar la arquitectura macro sin justificación.
```

En este marco, una Corriente de Continuidad no es una tabla auxiliar. Es un **dispositivo de traducción estructural** entre argumentación y guion.

---

# 1. Definición central

```txt
PCMG — Protocolo Constructor de Corriente de Continuidad =
  procedimiento estructural que toma una arquitectura argumentativa compuesta
  por movimientos argumentativos ordenados y convierte cada MOV en una unidad
  guionizable con beats internos, preservando la función macro, la relación
  inferencial y la transformación cognitiva de cada movimiento.
```

Dicho de otro modo:

```txt
El protocolo no toma ideas sueltas.
Toma movimientos argumentativos.

No produce texto final.
Produce unidades guionizables.

No decide libremente el orden.
Preserva la arquitectura macro.

No inventa beats por intuición.
Deriva beats desde la función argumentativa del MOV.
```

---

# 2. Diferencia entre arquitectura argumentativa, Corriente de Continuidad y guion

## 2.1. Arquitectura argumentativa

La arquitectura argumentativa responde:

```txt
¿Qué se defiende?
Con qué claims?
Con qué grounds?
Mediante qué warrants?
Con qué backing?
Con qué qualifiers?
Contra qué rebuttals?
En qué trayectoria macro?
```

Su unidad principal es el **MOV**.

---

## 2.2. Corriente de Continuidad

La Corriente de Continuidad responde:

```txt
¿Cómo se ejecuta cada MOV dentro de una pieza audiovisual?
Qué debe lograr en el espectador?
Qué debe mostrar, explicar, comparar o dramatizar?
Qué no debe adelantar?
Qué beats internos necesita?
Cómo prepara al MOV siguiente?
```

Su unidad principal es la **unidad guionizable**.

---

## 2.3. Guion

El guion responde:

```txt
Qué palabras, escenas, cortes, imágenes, transiciones y frases
materializan la unidad guionizable?
```

Su unidad principal es la **línea, escena, bloque o segmento redactado**.

---

# 3. Fórmula general de conversión

```txt
MOV argumentativo
  → unidad guionizable
    → beats internos
      → redacción controlada
```

La trazabilidad esperada es:

```txt
línea_de_guion
  → beat_interno
    → unidad_guionizable
      → MOV
        → arquitectura_argumentativa_global
```

Si una línea futura del guion no puede rastrearse a un beat, a una unidad guionizable y a un MOV, entonces probablemente es decoración, repetición o improvisación.

---

# 4. Entrada del protocolo

El protocolo recibe una arquitectura argumentativa previamente construida.

## 4.1. Entrada mínima

```yaml
entrada_minima:
  tesis_global:
  arquitectura_macro:
  movimientos_argumentativos:
    - mov_id:
      nombre_funcional:
      posicion_en_arquitectura:
      funcion_macro:
      claim_dominante:
      estado_cognitivo_entrada:
      estado_cognitivo_salida:
```

## 4.2. Entrada ideal

```yaml
entrada_ideal:
  tesis_global:
  arquitectura_macro:
  regla_de_orden:
  movimientos_argumentativos:
    - mov_id:
      nombre_funcional:
      posicion_en_arquitectura:
      tipo_de_movimiento:
      funcion_macro:
      funcion_narrativo_cognitiva:
      estado_cognitivo_entrada:
      estado_cognitivo_salida:
      claim_dominante:
      claims_secundarios:
      grounds:
      warrants:
      backing:
      qualifiers:
      rebuttals:
      esquemas_argumentativos:
      riesgos_de_falla:
      transicion_hacia_siguiente_MOV:
```

---

# 5. Salida del protocolo

La salida del protocolo es una **Corriente de Continuidad**.

```yaml
salida:
  corriente_de_continuidad:
    metadatos:
      titulo_del_proyecto:
      tesis_global:
      arquitectura_macro:
      regla_de_orden:

    unidades_guionizables:
      - unidad_guionizable_MOV_01
      - unidad_guionizable_MOV_02
      - unidad_guionizable_MOV_03
      - unidad_guionizable_MOV_N

    beats_internos_por_unidad:

    restricciones_de_orden:

    prohibiciones_de_adelantamiento:

    criterios_de_validacion:

    criterios_de_falla:
```

La matriz no debe contener redacción final extensa. Puede contener frases bisagra tentativas, imágenes mentales o recursos de guion, pero todavía no debe convertirse en guion completo.

---

# 6. Regla macro de orden

La arquitectura argumentativa puede tener distintos órdenes posibles según el proyecto. Pero una vez que el orden se fija, el protocolo debe tratarlo como **invariante macro**.

Para el caso Barnum Effect, el orden fijado es:

```txt
MOV_01
  → MOV_02
    → MOV_03
      → PUENTE_MOV_03_MOV_04
        → MOV_04
          → MOV_05
            → MOV_06
              → MOV_07
```

## 6.1. Restricción de orden

```yaml
restriccion_de_orden:
  orden_de_los_MOV: fijo
  reordenamiento_macro: prohibido
  variacion_permitida:
    - forma_interna_de_ejecucion_de_cada_MOV
    - numero_de_beats_por_MOV
    - recursos_de_guion
    - visuales
    - intensidad_narrativa
    - frase_bisagra
  variacion_no_permitida:
    - cambiar_posicion_de_MOV
    - adelantar_conclusiones_de_MOV_posteriores
    - usar_ejemplos_de_MOV_posteriores_antes_de_tiempo
    - cerrar_el_modelo_antes_del_MOV_de_cierre
```

---

# 7. Unidad guionizable: plantilla base

Cada MOV debe convertirse en una unidad guionizable con esta estructura:

```yaml
unidad_guionizable:
  mov_id:
  nombre_funcional:

  identidad_argumentativa:
    posicion_en_arquitectura:
    tipo_de_movimiento:
    responsabilidad_macro:
    funcion_narrativo_cognitiva:

  objetivo_en_el_video:
    que_logra_en_el_espectador:
    que_transformacion_cognitiva_produce:

  entrada:
    que_sabe_el_espectador_antes:
    que_pregunta_tiene_abierta:
    que_tension_recibe_del_MOV_anterior:

  nucleo_argumentativo:
    claim_dominante:
    claims_secundarios:
    grounds_obligatorios:
    warrant_que_debe_volverse_visible:
    backing_necesario:
    qualifiers_que_deben_respetarse:
    rebuttals_o_riesgos_que_deben_preverse:

  contenido_obligatorio:
    ideas_que_deben_aparecer:
    ejemplos_que_deben_aparecer:
    distinciones_que_deben_quedar_claras:
    terminos_que_deben_usarse_con_cuidado:

  recursos_de_guion:
    forma_de_ejecucion:
    tipo_de_apertura:
    imagen_mental:
    escena:
    comparacion:
    frase_bisagra:
    posible_visual:
    tono_funcional:

  beats_internos:
    - beat_id:
      tipo:
      deriva_de:
      funcion:
      operacion_cognitiva:
      contenido_minimo:
      efecto_en_el_espectador:
      riesgo_si_falla:

  prohibiciones:
    no_adelantar:
    no_repetir:
    no_convertir_en:
    no_romper:

  salida:
    que_debe_poder_decir_el_espectador:
    que_pregunta_entrega_al_siguiente_MOV:
    transicion_natural:

  criterio_de_listo_para_redaccion:
    el_MOV_funciona_si:
    el_MOV_falla_si:
```

---

# 8. Mapeo entre componentes argumentativos y Corriente de Continuidad

La matriz no debe llenarse por intuición. Debe construirse mediante reglas de correspondencia.

```yaml
mapeo_MOV_a_unidad_guionizable:
  mov_id:
    se_convierte_en:
      - mov_id
      - identidad_argumentativa.posicion_en_arquitectura

  nombre_funcional:
    se_convierte_en:
      - nombre_funcional
      - recursos_de_guion.forma_de_ejecucion

  funcion_macro:
    se_convierte_en:
      - identidad_argumentativa.responsabilidad_macro
      - objetivo_en_el_video.que_logra_en_el_espectador

  funcion_narrativo_cognitiva:
    se_convierte_en:
      - objetivo_en_el_video.que_transformacion_cognitiva_produce
      - recursos_de_guion.tono_funcional
      - beats_internos.operacion_cognitiva

  estado_cognitivo_entrada:
    se_convierte_en:
      - entrada.que_sabe_el_espectador_antes
      - entrada.que_pregunta_tiene_abierta
      - entrada.que_tension_recibe_del_MOV_anterior

  estado_cognitivo_salida:
    se_convierte_en:
      - salida.que_debe_poder_decir_el_espectador
      - salida.que_pregunta_entrega_al_siguiente_MOV
      - salida.transicion_natural

  claim_dominante:
    se_convierte_en:
      - nucleo_argumentativo.claim_dominante
      - contenido_obligatorio.ideas_que_deben_aparecer

  claims_secundarios:
    se_convierten_en:
      - nucleo_argumentativo.claims_secundarios
      - beats_internos.contenido_minimo

  grounds:
    se_convierten_en:
      - nucleo_argumentativo.grounds_obligatorios
      - contenido_obligatorio.ejemplos_que_deben_aparecer
      - recursos_de_guion.escena
      - recursos_de_guion.comparacion
      - beats_internos.contenido_minimo

  warrant:
    se_convierte_en:
      - nucleo_argumentativo.warrant_que_debe_volverse_visible
      - beats_internos.operacion_cognitiva
      - recursos_de_guion.frase_bisagra

  backing:
    se_convierte_en:
      - nucleo_argumentativo.backing_necesario
      - recursos_de_guion.posible_visual
      - contenido_obligatorio.terminos_que_deben_usarse_con_cuidado

  qualifier:
    se_convierte_en:
      - nucleo_argumentativo.qualifiers_que_deben_respetarse
      - prohibiciones.no_convertir_en
      - criterio_de_listo_para_redaccion.el_MOV_falla_si

  rebuttal:
    se_convierte_en:
      - nucleo_argumentativo.rebuttals_o_riesgos_que_deben_preverse
      - prohibiciones.no_romper
      - beats_internos.riesgo_si_falla

  esquema_argumentativo:
    se_convierte_en:
      - recursos_de_guion.forma_de_ejecucion
      - beats_internos.tipo
```

---

# 9. Taxonomía de beats internos

Los beats no son pasos externos. Son micro-operaciones internas de cada MOV.

```txt
beat =
  unidad mínima de avance dentro de un MOV
  que modifica atención, comprensión, sospecha, emoción o expectativa.
```

## 9.1. Tipos de beats

```yaml
tipos_de_beats:
  beat_de_instalacion:
    funcion: introducir_situacion_o_tension
    uso_tipico: apertura_de_caso_o_escena

  beat_de_contraste:
    funcion: mostrar_diferencia_relevante_entre_dos_casos_o_estados
    uso_tipico: doble_caso_comparativo

  beat_de_anomalia:
    funcion: hacer_que_el_espectador_detecte_algo_que_no_cuadra
    uso_tipico: apertura_de_pregunta

  beat_de_recuperacion:
    funcion: retomar_material_instalado_en_un_MOV_anterior
    uso_tipico: pasar_de_caso_a_principio

  beat_de_diseccion:
    funcion: separar_componentes_de_un_fenomeno_o_mecanismo
    uso_tipico: explicar_partes_de_una_frase_o_sistema

  beat_de_abstraccion:
    funcion: pasar_de_caso_a_principio
    uso_tipico: generalizacion_controlada

  beat_de_modelado:
    funcion: mostrar_relaciones_entre_jugadores_partes_o_fases
    uso_tipico: convertir_principio_en_mecanismo

  beat_de_bifurcacion:
    funcion: mostrar_posibles_salidas_de_un_mecanismo
    uso_tipico: validacion_vs_descarte

  beat_de_reenfoque:
    funcion: cambiar_el_foco_sin_cambiar_el_orden_macro
    uso_tipico: puente_entre_MOVs

  beat_de_validacion_contextual:
    funcion: mostrar_como_el_entorno_modifica_el_estatus_de_un_mensaje
    uso_tipico: explicar_marcos_de_validacion

  beat_de_formalizacion:
    funcion: fijar_una_regla_o_formula_del_mecanismo
    uso_tipico: cierre_de_explicacion_tecnica

  beat_de_transferencia:
    funcion: llevar_el_modelo_a_otro_contexto_sin_romper_su_identidad
    uso_tipico: ejemplos_de_aplicacion

  beat_de_comparacion_de_instancias:
    funcion: mostrar_que_cambia_el_contexto_pero_no_la_estructura
    uso_tipico: MOV_de_aplicaciones

  beat_de_sintesis:
    funcion: condensar_lo_ya_construido
    uso_tipico: cierre

  beat_de_limite_etico:
    funcion: impedir_lectura_manipulativa_o_sobregeneralizada
    uso_tipico: cierre_aplicativo_o_modelos_persuasivos

  beat_de_cierre:
    funcion: dejar_una_formula_memorable_o_criterio_final
    uso_tipico: final_del_video
```

---

# 10. Reglas de derivación de beats según tipo de MOV

Los beats deben derivarse del tipo de movimiento argumentativo.

```yaml
derivacion_de_beats:
  si_el_MOV_instala_un_caso:
    beats_probables:
      - beat_de_instalacion
      - beat_de_contraste
      - beat_de_anomalia
      - beat_de_apertura_de_pregunta

  si_el_MOV_generaliza_un_principio:
    beats_probables:
      - beat_de_recuperacion
      - beat_de_diseccion
      - beat_de_abstraccion
      - beat_de_distincion
      - beat_de_transicion

  si_el_MOV_modela_un_mecanismo:
    beats_probables:
      - beat_de_modelado
      - beat_de_relacion_entre_partes
      - beat_de_flujo_operativo
      - beat_de_bifurcacion
      - beat_de_formalizacion

  si_el_MOV_reenfoca_el_problema:
    beats_probables:
      - beat_de_reenfoque
      - beat_de_ampliacion_de_campo
      - beat_de_preparacion

  si_el_MOV_introduce_condiciones_contextuales:
    beats_probables:
      - beat_de_contraste_de_contextos
      - beat_de_cambio_de_estatus
      - beat_de_validacion_contextual
      - beat_de_regla

  si_el_MOV_disecciona_un_artefacto:
    beats_probables:
      - beat_de_presentacion_del_objeto
      - beat_de_diseccion
      - beat_de_prueba_de_componentes
      - beat_de_formalizacion
      - beat_de_preparacion_de_aplicacion

  si_el_MOV_aplica_el_modelo:
    beats_probables:
      - beat_de_recuperacion_del_patron
      - beat_de_transferencia
      - beat_de_instancia_contextual
      - beat_de_comparacion_de_instancias
      - beat_de_identificacion_de_invariantes

  si_el_MOV_cierra:
    beats_probables:
      - beat_de_sintesis
      - beat_de_extraccion_de_invariantes
      - beat_de_criterio_aplicable
      - beat_de_limite_etico
      - beat_de_cierre
```

---

# 11. Plantilla completa de beat

Cada beat debe tener estructura propia.

```yaml
beat:
  beat_id:
  tipo:

  deriva_de:
    mov_id:
    componente_argumentativo:
      - claim
      - ground
      - warrant
      - backing
      - qualifier
      - rebuttal
      - estado_cognitivo

  funcion:
    que_hace_dentro_del_MOV:

  operacion_cognitiva:
    que_cambia_en_la_mente_del_espectador:

  contenido_minimo:
    que_debe_aparecer_para_que_el_beat_funcione:

  recurso_posible:
    escena:
    visual:
    comparacion:
    frase:

  efecto_en_el_espectador:
    que_debe_entender_sentir_o_preguntarse:

  riesgo_si_falla:
    que_error_aparece_si_el_beat_no_cumple_su_funcion:
```

---

# 12. Reglas de no adelantamiento

Cada MOV sólo puede usar información disponible hasta ese punto de la arquitectura.

```yaml
reglas_de_no_adelantamiento:
  principio_general: >
    Un MOV sólo puede usar información instalada por MOVs anteriores o perteneciente
    al MOV actual.

  prohibido:
    - usar_conclusiones_de_MOVs_posteriores
    - introducir_ejemplos_de_aplicacion_antes_del_MOV_de_aplicaciones
    - cerrar_el_modelo_antes_del_MOV_de_cierre
    - explicar_el_marco_de_validacion_antes_de_presentar_el_juego_si_la_arquitectura_no_lo_permite
    - convertir_un_MOV_temprano_en_resumen_total_del_video

  permitido:
    - dejar_preguntas_abiertas
    - anticipar_sin_resolver
    - preparar_necesidad_del_MOV_siguiente
    - usar_frases_bisagra_controladas
```

---

# 13. Criterios de validación de la matriz

La Corriente de Continuidad debe pasar pruebas de calidad antes de redactar el guion.

```yaml
criterios_de_validacion:
  trazabilidad:
    pregunta: >
      ¿Cada beat puede rastrearse a una función del MOV?
    falla_si: >
      Aparece un beat interesante pero desconectado de la arquitectura.

  continuidad:
    pregunta: >
      ¿La salida cognitiva de un MOV prepara la entrada del siguiente?
    falla_si: >
      El siguiente MOV necesita información que aún no fue instalada.

  orden_macro:
    pregunta: >
      ¿La matriz conserva el orden de la arquitectura?
    falla_si: >
      Se reordenan MOVs o se mezclan funciones de movimientos distintos.

  no_adelantamiento:
    pregunta: >
      ¿Cada MOV evita usar conclusiones de movimientos posteriores?
    falla_si: >
      Un MOV temprano contiene cierre, aplicación o ejemplos que pertenecen después.

  warrant_visible:
    pregunta: >
      ¿El salto inferencial principal del MOV se vuelve comprensible?
    falla_si: >
      El espectador oye una afirmación correcta pero no entiende por qué se sigue.

  especificidad_audiovisual:
    pregunta: >
      ¿Cada MOV tiene imagen mental, escena, comparación o visual propio?
    falla_si: >
      Todos los MOV suenan como explicación abstracta indiferenciada.

  control_de_repeticion:
    pregunta: >
      ¿El MOV evita repetir lo que ya cumplió un MOV anterior?
    falla_si: >
      La matriz produce redundancia bajo nombres distintos.

  respeto_de_qualifiers:
    pregunta: >
      ¿El MOV conserva matices y límites del argumento?
    falla_si: >
      La redacción futura tendería a exagerar, absolutizar o simplificar.

  tratamiento_de_rebuttals:
    pregunta: >
      ¿La matriz prevé objeciones, riesgos o condiciones de falla?
    falla_si: >
      El argumento queda vulnerable a objeciones previsibles.
```

---

# 14. Criterios de falla

Una Corriente de Continuidad falla cuando:

```yaml
criterios_de_falla:
  falla_por_lista_tematica:
    descripcion: >
      Los MOV se reducen a temas o títulos, sin función argumentativa.

  falla_por_redaccion_prematura:
    descripcion: >
      La matriz se convierte en guion antes de fijar los beats internos.

  falla_por_reordenamiento:
    descripcion: >
      Se altera el orden macro de los MOV sin autorización del proyecto.

  falla_por_abstraccion_excesiva:
    descripcion: >
      La matriz conserva claims pero no propone forma audiovisual concreta.

  falla_por_visual_decorativo:
    descripcion: >
      Los visuales no derivan del MOV, sólo adornan.

  falla_por_warrant_invisible:
    descripcion: >
      Se presentan conclusiones sin hacer visible el puente inferencial.

  falla_por_repeticion:
    descripcion: >
      Varios MOV cumplen la misma función con palabras distintas.

  falla_por_adelantamiento:
    descripcion: >
      Un MOV temprano usa información que pertenece a un MOV posterior.

  falla_por_manualizacion_etica:
    descripcion: >
      En temas persuasivos o manipulativos, la matriz se convierte en manual de explotación
      sin límites analíticos, críticos o éticos.
```

---

# 15. Aplicación inicial al caso Barnum Effect

## 15.1. Arquitectura macro fija

```txt
MOV_01:
  apertura por doble caso y anomalía de reconocimiento

MOV_02:
  generalización del caso al principio psicológico

MOV_03:
  modelado del juego estratégico

PUENTE_MOV_03_MOV_04:
  reenfoque del juego hacia el marco y el artefacto intermedio

MOV_04:
  condiciones de validación de la frase Barnum

MOV_05:
  forma interna de la frase Barnum

MOV_06:
  ejemplos de aplicación como instancias del patrón

MOV_07:
  cierre aplicativo por invariantes y adaptación contextual
```

---

## 15.2. Conversión esperada por MOV

```yaml
conversion_Barnum:
  MOV_01:
    unidad_guionizable: instalacion_de_anomalia_por_doble_caso
    beats:
      - instalacion_persona_X
      - instalacion_persona_Y
      - misma_frase_o_frase_equivalente
      - reconocimiento_en_ambas
      - pregunta_abierta

  MOV_02:
    unidad_guionizable: extraccion_del_principio_psicologico
    beats:
      - recuperacion_del_caso
      - diseccion_de_la_frase
      - completado_autobiografico
      - distincion_resonancia_vs_precision
      - transicion_a_mecanismo

  MOV_03:
    unidad_guionizable: modelado_del_juego_barnum
    beats:
      - presentar_emisor
      - presentar_receptor
      - presentar_mensaje_barnum
      - mostrar_validacion_o_descarte
      - preparar_reenfoque_hacia_marco

  PUENTE_MOV_03_MOV_04:
    unidad_guionizable: cambio_de_foco_del_juego_al_marco
    beats:
      - indicar_que_no_basta_mirar_la_frase
      - ampliar_hacia_contexto
      - preparar_marco_de_validacion

  MOV_04:
    unidad_guionizable: marco_que_convierte_frase_en_diagnostico
    beats:
      - frase_sin_marco
      - frase_en_marco_ritual_o_metodo
      - cambio_de_estatus
      - marco_fisico_digital_o_algoritmico
      - transicion_a_forma_interna

  MOV_05:
    unidad_guionizable: anatomia_de_la_frase_barnum
    beats:
      - presentar_frase
      - separar_componentes
      - alta_aplicabilidad
      - ambiguedad_controlada
      - apariencia_de_especificidad
      - resonancia_emocional
      - formula_de_construccion

  MOV_06:
    unidad_guionizable: demostracion_por_variacion_contextual
    beats:
      - recuperar_patron_base
      - instancia_esoterismo
      - instancia_publicidad
      - instancia_venta_quiz_o_algoritmo
      - comparar_invariantes
      - preparar_cierre

  MOV_07:
    unidad_guionizable: cierre_por_invariantes_y_adaptacion
    beats:
      - sintetizar_mecanismo
      - extraer_invariantes
      - adaptar_a_contexto
      - incluir_limite_etico
      - cierre_memorable
```

---

# 16. Relación con ejemplos de análisis argumentativo

Los análisis argumentativos de textos previos no deben usarse para copiar orden, estilo o estrategia discursiva. Deben usarse como modelos para reconocer responsabilidades funcionales.

## 16.1. Uso correcto

```txt
Carnegie:
  muestra cómo casos concretos pueden preparar una generalización práctica.

Ley 27:
  muestra cómo un principio psicológico puede convertirse en método operativo,
  casos y límites.

Negación activa y pasiva:
  muestra cómo una distinción conceptual puede conservar identidad al pasar por
  múltiples dominios.
```

## 16.2. Uso incorrecto

```txt
Copiar el orden de Carnegie.
Copiar la estructura procedimental de Ley 27.
Copiar la expansión conceptual de Elster sin respetar los MOV del proyecto.
```

La regla es:

```txt
Los ejemplos enseñan responsabilidad argumentativa,
no autorizan reordenamiento de la arquitectura del caso actual.
```

---

# 17. Protocolo resumido en pseudocódigo

```txt
INPUT:
  arquitectura_argumentativa_ordenada

FOR cada MOV en orden_macro:
  leer funcion_macro
  leer estado_cognitivo_entrada
  leer estado_cognitivo_salida
  leer claim_dominante
  leer grounds
  leer warrant
  leer backing
  leer qualifiers
  leer rebuttals

  construir unidad_guionizable:
    fijar identidad_argumentativa
    fijar objetivo_en_video
    fijar entrada_cognitiva
    fijar nucleo_argumentativo
    traducir grounds a recursos_de_guion
    traducir warrant a inferencia_visible
    traducir qualifiers a prohibiciones_y_matices
    traducir rebuttals a riesgos_y_advertencias
    derivar beats_internos segun tipo_de_MOV
    fijar salida_cognitiva
    fijar criterio_de_listo_para_redaccion

  validar:
    no_reordenamiento
    no_adelantamiento
    trazabilidad
    continuidad
    warrant_visible
    especificidad_audiovisual

OUTPUT:
  corriente_de_continuidad_validada
```

---

# 18. Fórmula final del protocolo

```txt
PCMG =
  preservación del orden macro
  + conversión de cada MOV en unidad guionizable
  + mapeo explícito de componentes argumentativos
  + derivación controlada de beats internos
  + prohibiciones de adelantamiento
  + validación de trazabilidad
```

En forma compacta:

```txt
No se transforma la arquitectura en texto.
Se transforma la arquitectura en una máquina de guionización.
Luego el texto se obtiene ejecutando esa máquina en orden.
```

---

# 19. Cierre operativo

Este protocolo permite usar arquitecturas argumentativas como base para guiones sin caer en generación automática descontrolada.

Su valor está en que cada elemento del guion futuro queda obligado a responder a una función:

```txt
línea → beat → unidad guionizable → MOV → arquitectura macro
```

Por eso, el PCMG puede usarse tanto en el caso del Barnum Effect como en proyectos posteriores donde exista una arquitectura argumentativa previa y se necesite convertirla en guion, clase, conferencia, documental breve o pieza audiovisual argumentativa.
