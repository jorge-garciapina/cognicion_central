https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0b974c-2a44-83e8-ba99-ecccda4fb683

# Procesamiento estructural — Ley N.º 32

**Texto raíz:** `transcripcion_ley_32.md`  
**Ley:** `LEY N.º 32 — Juegue con las fantasías de la gente`  
**Tipo de procesamiento:** `paso_1_procesamiento_estructural`  
**Función del documento:** estructurar linealmente las unidades cognitivas contenidas en el texto, respetando el orden de aparición, antes de construir modelos analíticos posteriores.

---

## 0. Principio rector del procesamiento

Este procesamiento no busca todavía construir un modelo profundo completo sobre fantasía, deseo, manipulación, mercado simbólico o formación de cultos. Su función inicial es más básica: **detectar las estructuras cognitivas contenidas en el texto y organizarlas como mNodes en el orden en que aparecen**.

La operación correcta es:

```txt
texto_en_crudo
  → lectura_lineal_de_estructuras_cognitivas
    → mNodes_candidatos
      → relaciones_locales
        → base_para_analisis_posterior
```

El núcleo textual de la ley puede formularse provisionalmente así:

```txt
La realidad suele ser dura, lenta, limitada y desagradable.
Quien sabe construir fantasías que alivian esa realidad, prometen transformación,
rescatan deseos reprimidos o mantienen una ilusión a distancia, obtiene poder sobre las masas.
```

La fórmula estructural más compacta del capítulo es:

```txt
realidad_deprimente_o_intolerable
  → deseo_de_escape_o_redencion
    → fantasia_adecuada
      → adhesion_del_publico
        → poder_para_el_forjador_de_fantasias
```

---

## 1. Texto raíz

```yaml
texto_raiz:
  texto_id: TEXTO_LEY_32_JUEGUE_CON_LAS_FANTASIAS_DE_LA_GENTE
  titulo: "Juegue con las fantasías de la gente"
  fuente_visible: "Las 48 leyes del poder"
  tipo_de_fuente: capitulo_de_regla_estrategica
  objetivo_del_paso: >
    Estructurar linealmente las unidades cognitivas contenidas en el texto,
    respetando el orden de aparición, sin convertir todavía la lectura en un
    modelo analítico posterior.
```

---

# 2. Secuencia lineal de mNodes detectados

---

## 00. `MN_TITULO_LEY_32`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_LEY_32
tipo_de_unidad: regla_titular
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Juegue con las fantasías de la gente"
formulacion: >
  Para obtener poder, no basta con comunicar la realidad; conviene manipular,
  organizar o producir fantasías capaces de satisfacer deseos colectivos.
rol_operativo: condensar_regla_en_formulacion_memorable
funcion_local_en_el_texto:
  - presentar la ley de manera directa
  - fijar el eje interpretativo del capítulo
  - anticipar la oposición central entre realidad desagradable y fantasía deseada
estructura_interna:
  objeto_de_accion: fantasias_de_la_gente
  accion: jugar_con / manipular / activar
  efecto_buscado: poder
conecta_con:
  - MN_CRITERIO_LEY_32
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - MET_FORJAR_FANTASIA_A_DISTANCIA
```

---

## 01. `MN_CRITERIO_LEY_32`

```yaml
orden_textual: 01
mnode_id: MN_CRITERIO_LEY_32
tipo_de_unidad: criterio_general
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Muchas veces se evita la verdad porque suele ser dura y desagradable..."
formulacion: >
  La verdad y la realidad suelen ser duras, desagradables y capaces de provocar ira
  cuando destruyen ilusiones; por eso, quienes inventan fantasías placenteras se
  vuelven atractores de poder.
rol_operativo: formular_principio_operativo_de_la_ley
funcion_local_en_el_texto:
  - explicar por qué la verdad puede ser estratégicamente peligrosa
  - presentar la fantasía como sustituto atractivo de una realidad dolorosa
  - definir el poder de quien conjura ilusiones para las masas
estructura_interna:
  realidad:
    rasgos:
      - dura
      - desagradable
      - problematica
      - desilusionante
  verdad:
    riesgo:
      - genera_ira_por_desilusion
  fantasia:
    rasgos:
      - oasis_en_el_desierto
      - alivio
      - promesa
      - fuente_de_poder
conecta_con:
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - MN_VERDAD_PROVOCA_DESILUSION
  - MN_FANTASIA_COMO_OASIS
```

---

## 02. `MN_VERDAD_PROVOCA_DESILUSION`

```yaml
orden_textual: 02
mnode_id: MN_VERDAD_PROVOCA_DESILUSION
tipo_de_unidad: idea_psicologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La verdad puede provocar ira porque obliga a enfrentar una realidad que destruye
  la ilusión que la gente desea conservar.
rol_operativo: establecer_peligro_de_la_realidad_directa
funcion_local_en_el_texto:
  - justificar por qué no conviene recurrir siempre a la verdad
  - preparar la necesidad estratégica de la fantasía
estructura_interna:
  verdad:
  efecto:
    - desilusion
    - ira
    - rechazo
conecta_con:
  - MN_CRITERIO_LEY_32
  - MN_FANTASIA_COMO_OASIS
```

---

## 03. `MN_FANTASIA_COMO_OASIS`

```yaml
orden_textual: 03
mnode_id: MN_FANTASIA_COMO_OASIS
tipo_de_unidad: metafora_directriz
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "...son como oasis en el desierto: todos van hacia ellas."
formulacion: >
  En una vida dura y problemática, quien ofrece fantasía funciona como oasis:
  concentra deseo, atención y movimiento colectivo.
rol_operativo: condensar_atraccion_de_la_fantasia
funcion_local_en_el_texto:
  - convertir la fantasía en imagen memorable
  - explicar por qué las masas se dirigen hacia quien ofrece ilusión
estructura_interna:
  desierto: vida_dura_y_problemática
  oasis: fantasia_placentera
  movimiento: atraccion_de_las_masas
conecta_con:
  - MN_CRITERIO_LEY_32
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
```

---

# 3. Observancia de la ley: Bragadino y Venecia

---

## 04. `HISTORIA_VENECIA_DECADENCIA`

```yaml
orden_textual: 04
mnode_id: HISTORIA_VENECIA_DECADENCIA
tipo_de_unidad: contexto_historico_de_realidad_deprimente
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "La ciudad-Estado de Venecia fue próspera... sin embargo, en el siglo XVI su suerte cambió..."
formulacion: >
  Venecia pasa de una identidad de prosperidad, fortuna y poder comercial a una
  condición de decadencia económica, pérdida de prestigio y humillación colectiva.
rol_operativo: construir_telón_de_fondo_de_realidad_opresiva
funcion_local_en_el_texto:
  - establecer la realidad dolorosa sobre la que podrá echar raíz la fantasía
  - mostrar contraste entre pasado glorioso y presente decadente
  - preparar la receptividad colectiva ante un salvador milagroso
estructura_interna:
  pasado:
    - monopolio_comercial_con_oriente
    - riqueza
    - libertad_republicana
    - prestigio
  presente:
    - desplazamiento_del_comercio_hacia_el_Atlantico
    - bancarrota_de_familias_nobles
    - cierre_de_bancos
    - perdida_de_Chipre
    - depresion_colectiva
  emocion_colectiva:
    - humillacion
    - nostalgia
    - deseo_de_retorno
conecta_con:
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
```

---

## 05. `MN_NOSTALGIA_COLECTIVA_DE_GLORIA`

```yaml
orden_textual: 05
mnode_id: MN_NOSTALGIA_COLECTIVA_DE_GLORIA
tipo_de_unidad: estado_psicologico_colectivo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Una comunidad que recuerda una gloria reciente puede vivir el presente decadente
  como humillación intolerable y desear una restauración milagrosa.
rol_operativo: explicar_vulnerabilidad_a_la_fantasia
funcion_local_en_el_texto:
  - mostrar por qué Venecia está preparada para creer
  - conectar nostalgia, humillación y fantasía redentora
estructura_interna:
  memoria:
    - gloria_pasada
    - prosperidad_perdida
  presente:
    - decadencia
    - humillacion
  deseo:
    - retorno_de_la_fortuna
    - restauracion_milagrosa
conecta_con:
  - HISTORIA_VENECIA_DECADENCIA
  - HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
```

---

## 06. `HISTORIA_BRAGADINO_RUMOR_ALQUIMICO`

```yaml
orden_textual: 06
mnode_id: HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
tipo_de_unidad: historia_ancla_de_fantasia_salvadora
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "En 1589 comenzó a correr por Venecia el rumor... Il Bragadino... maestro en alquimia..."
formulacion: >
  Bragadino aparece como figura misteriosa que supuestamente puede multiplicar el oro,
  y su rumor encaja exactamente con la fantasía veneciana de recuperar prosperidad.
rol_operativo: introducir_objeto_fantastico_que_responde_a_carencia_colectiva
funcion_local_en_el_texto:
  - mostrar aparición del agente que explota la fantasía
  - conectar profecía, rumor, oro visible y deseo colectivo
  - preparar la invitación oficial de Venecia
estructura_interna:
  agente: Il_Bragadino / Mamugna
  promesa: multiplicar_oro
  sustancia_simbolica: oro
  soporte_del_rumor:
    - profecia_previa
    - monedas_de_oro
    - palacio_repleto_de_objetos_de_oro
  deseo_colectivo_activado:
    - prosperidad_recuperada
    - gloria_de_Venecia
conecta_con:
  - DIS_MOLDE_FANTASIA_SALVADORA
  - MN_NOSTALGIA_COLECTIVA_DE_GLORIA
  - HISTORIA_INVITACION_A_BRAGADINO
```

---

## 07. `DIS_MOLDE_FANTASIA_SALVADORA`

```yaml
orden_textual: 07
mnode_id: DIS_MOLDE_FANTASIA_SALVADORA
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  Una colectividad deprimida o humillada acepta una fantasía salvadora cuando ésta
  promete resolver una carencia dolorosa sin enfrentar la dureza de la realidad.
rol_operativo: organizar_casos_de_explotacion_de_fantasia_colectiva
estructura:
  realidad_deprimente:
  deseo_colectivo:
  figura_o_promesa_fantastica:
  mecanismo_de_credibilidad:
  adhesion_del_publico:
  poder_para_el_forjador:
invariantes:
  - existe una realidad desagradable o intolerable
  - el público desea escapar de esa realidad
  - aparece una promesa simple, maravillosa o redentora
  - la promesa evita esfuerzo, dolor o verdad desagradable
  - la distancia, el misterio o la vaguedad aumentan la credibilidad
  - el forjador gana poder, dinero o seguidores
instancias:
  - Bragadino_en_Venecia
  - Thurneisser_y_los_elixires
  - Psalmanazar_y_Formosa
  - Mata_Hari_y_el_exotismo
  - Hartzell_y_el_tesoro_de_Drake
  - Van_Meegeren_y_los_Vermeer
criterio_de_validacion:
  - pertenece al molde si la fantasía compensa una realidad desagradable y produce adhesión
conecta_con:
  - HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - MET_FORJAR_FANTASIA_A_DISTANCIA
```

---

## 08. `HISTORIA_INVITACION_A_BRAGADINO`

```yaml
orden_textual: 08
mnode_id: HISTORIA_INVITACION_A_BRAGADINO
tipo_de_unidad: episodio_de_validacion_social
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  La nobleza y el Senado venecianos compiten por atraer a Bragadino cuando creen que
  Mantua podría obtener sus servicios, transformando rumor y fantasía en decisión institucional.
rol_operativo: mostrar_conversion_de_fantasia_en_accion_politica
funcion_local_en_el_texto:
  - mostrar que la fantasía ya no es rumor privado sino asunto estatal
  - introducir competencia como acelerador de credulidad
  - mostrar que el lujo del alquimista opera como prueba simbólica
estructura_interna:
  actores:
    - nobleza_veneciana
    - Senado_de_Venecia
    - duque_de_Mantua
    - Bragadino
  disparadores:
    - demostraciones_de_oro
    - rumor_de_competencia_con_Mantua
    - banquete_lujoso_en_palacio_de_Bragadino
  decision:
    - invitar_a_Bragadino
    - financiar_su_lujo
conecta_con:
  - HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
  - MN_COMPETENCIA_AUMENTA_CREDULIDAD
  - DIS_MOLDE_FANTASIA_SALVADORA
```

---

## 09. `MN_COMPETENCIA_AUMENTA_CREDULIDAD`

```yaml
orden_textual: 09
mnode_id: MN_COMPETENCIA_AUMENTA_CREDULIDAD
tipo_de_unidad: mecanismo_social
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
formulacion: >
  Cuando otros poderes desean al portador de la fantasía, aumenta la percepción
  de valor, urgencia y credibilidad del supuesto salvador.
rol_operativo: explicar_acelerador_social_de_la_fantasia
funcion_local_en_el_texto:
  - explicar por qué la amenaza de Mantua precipita la decisión de Venecia
  - mostrar cómo la competencia sustituye a la comprobación racional
estructura_interna:
  fantasia:
  competidor_externo:
  efecto:
    - urgencia
    - temor_a_perder_oportunidad
    - mayor_valor_percibido
conecta_con:
  - HISTORIA_INVITACION_A_BRAGADINO
  - MET_CREAR_AURA_DE_DEMANDA
```

---

## 10. `HISTORIA_BRAGADINO_AURA_PRESENCIA`

```yaml
orden_textual: 10
mnode_id: HISTORIA_BRAGADINO_AURA_PRESENCIA
tipo_de_unidad: construccion_de_aura
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Bragadino construye una presencia imponente y misteriosa mediante lujo, mastines,
  distancia, capricho y demora, haciendo que su figura sea más deseable y poderosa.
rol_operativo: mostrar_fabricacion_de_personaje_fantastico
funcion_local_en_el_texto:
  - mostrar cómo el forjador de fantasías se presenta como figura extraordinaria
  - explicar por qué la demora aumenta su popularidad
  - preparar el mecanismo de distancia y vaguedad
estructura_interna:
  atributos:
    - ojos_penetrantes
    - cejas_tupidas
    - mastines_negros
    - palacio_suntuoso
    - banquetes
    - ropa_costosa
    - conducta_altanera
    - demora_en_realizar_el_milagro
  efecto:
    - intimidacion
    - fascinacion
    - aura_de_poder
    - mayor_numero_de_seguidores
conecta_con:
  - MET_FORJAR_AURA_A_DISTANCIA
  - MN_DISTANCIA_AUMENTA_SUGESTION
```

---

## 11. `MN_DEMORA_AUMENTA_FANTASIA`

```yaml
orden_textual: 11
mnode_id: MN_DEMORA_AUMENTA_FANTASIA
tipo_de_unidad: mecanismo_de_suspension
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La demora en entregar el milagro puede aumentar la fantasía si el público desea
  seguir creyendo y el forjador conserva misterio, aura y promesa futura.
rol_operativo: explicar_suspension_del_resultado
funcion_local_en_el_texto:
  - explicar por qué la falta de producción inmediata de oro no destruye a Bragadino
  - mostrar que la expectativa puede ser más poderosa que la prueba
estructura_interna:
  promesa:
  demora:
  deseo_del_publico:
  efecto:
    - mayor_intriga
    - aumento_de_seguidores
    - mas_regalos
    - paciencia_institucional
conecta_con:
  - HISTORIA_BRAGADINO_AURA_PRESENCIA
  - MN_DISTANCIA_AUMENTA_SUGESTION
  - MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
```

---

## 12. `HISTORIA_SUSTANCIA_SIETE_AÑOS`

```yaml
orden_textual: 12
mnode_id: HISTORIA_SUSTANCIA_SIETE_AÑOS
tipo_de_unidad: maniobra_de_dilacion_fantastica
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Bragadino responde a la exigencia de resultados con una explicación que convierte
  la demora en promesa de mayor rendimiento: esperar siete años multiplicará el oro por treinta.
rol_operativo: transformar_impaciencia_en_promesa_ampliada
funcion_local_en_el_texto:
  - mostrar cómo una fantasía evita la verificación inmediata
  - desplazar la prueba hacia el futuro
  - dividir al público entre creyentes e impacientes
estructura_interna:
  exigencia_publica:
    - producir_oro_de_inmediato
  respuesta_de_Bragadino:
    - sustancia_ya_depositada
    - uso_inmediato_duplica_oro
    - espera_de_siete_años_multiplica_por_treinta
  efecto:
    - parte_del_Senado_acepta_esperar
    - otros_se_enfurecen
conecta_con:
  - MN_DEMORA_AUMENTA_FANTASIA
  - MET_DESPLAZAR_PRUEBA_AL_FUTURO
  - MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
```

---

## 13. `MET_DESPLAZAR_PRUEBA_AL_FUTURO`

```yaml
orden_textual: 13
mnode_id: MET_DESPLAZAR_PRUEBA_AL_FUTURO
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: >
  Para sostener una fantasía, el forjador puede desplazar la verificación hacia un
  futuro lejano y convertir la espera en promesa de ganancia mayor.
rol_operativo: extraer_procedimiento_desde_Bragadino
entrada:
  - publico_impaciente
  - exigencia_de_prueba
  - fantasia_no_verificable
operaciones:
  - afirmar_que_la_prueba_ya_esta_en_proceso
  - prometer_mayor_resultado_si_no_se_interrumpe
  - presentar_impaciencia_como_error_del_publico
salida:
  - tiempo_adicional
  - continuidad_de_la_fantasia
  - division_entre_creyentes_y_escepticos
conecta_con:
  - HISTORIA_SUSTANCIA_SIETE_AÑOS
  - MET_FORJAR_FANTASIA_A_DISTANCIA
```

---

## 14. `HISTORIA_BRAGADINO_HUYE_A_MUNICH`

```yaml
orden_textual: 14
mnode_id: HISTORIA_BRAGADINO_HUYE_A_MUNICH
tipo_de_unidad: repeticion_de_esquema
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Cuando Venecia exige prueba inmediata, Bragadino acusa a la ciudad de impaciencia,
  abandona el lugar y repite el esquema en Múnich con un nuevo público necesitado.
rol_operativo: mostrar_transferibilidad_del_fraude_fantastico
funcion_local_en_el_texto:
  - cerrar observancia de la ley
  - mostrar que el esquema puede replicarse donde exista necesidad de fantasía
  - preparar la interpretación sobre naturaleza humana
estructura_interna:
  ruptura:
    - Venecia_exige_prueba
    - Bragadino_acusa_traicion
  nuevo_publico:
    - duque_de_Baviera
    - bancarrota
    - deseo_de_recuperar_riquezas
  repeticion:
    - vida_lujosa
    - promesa_alquimica
    - dependencia_de_fantasia
conecta_con:
  - DIS_MOLDE_FANTASIA_SALVADORA
  - HISTORIA_BRAGADINO_INTERPRETACION
  - MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
```

---

# 4. Interpretación

---

## 15. `MN_MAMUGNA_CONOCIMIENTO_NATURALEZA_HUMANA`

```yaml
orden_textual: 15
mnode_id: MN_MAMUGNA_CONOCIMIENTO_NATURALEZA_HUMANA
tipo_de_unidad: revelacion_del_mecanismo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Mamugná utilizó para su fraude sus conocimientos de la naturaleza humana."
formulacion: >
  El fraude de Bragadino no dependía principalmente de prestidigitación, sino de
  comprender la necesidad humana de redención fantasiosa ante la decadencia.
rol_operativo: revelar_el_mecanismo_detras_del_caso
funcion_local_en_el_texto:
  - pasar de narración a interpretación
  - explicar por qué la estafa funcionó
  - distinguir truco menor de explotación psicológica profunda
estructura_interna:
  charlatanes_menores: prestidigitacion
  Mamugna: conocimiento_de_naturaleza_humana
  blanco: Venecia_deprimida
conecta_con:
  - HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
  - DIS_MOLDE_FANTASIA_SALVADORA
```

---

## 16. `MET_FORJAR_AURA_A_DISTANCIA`

```yaml
orden_textual: 16
mnode_id: MET_FORJAR_AURA_A_DISTANCIA
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  El forjador de fantasías debe construir fama desde la distancia, hacer que su
  aura preceda a su presencia y permitir que el público complete la ilusión.
rol_operativo: convertir_interpretacion_en_tecnica
entrada:
  - publico_con_deseo_de_salvacion
  - promesa_fantastica
operaciones:
  - elegir_un_blanco_vulnerable
  - construir_fama_en_otro_lugar
  - dejar_que_el_rumor_llegue_antes_que_la_persona
  - presentarse_con_lujo_y_misterio
  - evitar_demostraciones_vulgares_demasiado_pronto
salida:
  - aura_de_poder
  - deseo_previo_del_publico
  - menor_necesidad_de_prueba_racional
funcion_local_en_el_texto:
  - explicar cómo Mamugná construyó poder simbólico antes de actuar
conecta_con:
  - MN_MAMUGNA_CONOCIMIENTO_NATURALEZA_HUMANA
  - HISTORIA_BRAGADINO_AURA_PRESENCIA
  - MN_DISTANCIA_AUMENTA_SUGESTION
```

---

## 17. `MN_RIQUEZA_VISIBLE_CONFIRMA_FANTASIA`

```yaml
orden_textual: 17
mnode_id: MN_RIQUEZA_VISIBLE_CONFIRMA_FANTASIA
tipo_de_unidad: mecanismo_de_autoconfirmacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La riqueza visible de Bragadino confirmaba su fama de alquimista, y esa fama
  atraía más dinero, permitiéndole mantener la apariencia que reforzaba la fantasía.
rol_operativo: explicar_ciclo_autorreforzante_de_reputacion
estructura_interna:
  riqueza_visible:
    - palacio
    - ropa_opulenta
    - monedas_de_oro
  inferencia_del_publico:
    - si_es_rico_debe_fabricar_oro
  resultado:
    - clientes_le_dan_dinero
    - mas_opulencia
    - mayor_reputacion
ciclo:
  riqueza_visible: confirma_fama
  fama: atrae_recursos
  recursos: sostienen_riqueza_visible
funcion_local_en_el_texto:
  - mostrar que la apariencia puede sustituir a la prueba racional
  - explicar por qué los trucos simples no eran detectados
conecta_con:
  - MET_FORJAR_AURA_A_DISTANCIA
  - HISTORIA_INVITACION_A_BRAGADINO
```

---

## 18. `MN_TODOS_QUERIAN_CREER`

```yaml
orden_textual: 18
mnode_id: MN_TODOS_QUERIAN_CREER
tipo_de_unidad: idea_psicologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "...todos querían creer en él."
formulacion: >
  Cuando el deseo de creer es suficientemente fuerte, el público deja de ver los
  trucos simples que contradicen la fantasía.
rol_operativo: explicar_ceguera_voluntaria
funcion_local_en_el_texto:
  - mostrar que la fantasía reduce la capacidad de verificación
  - explicar por qué el truco de la probeta oculta no fue detectado
estructura_interna:
  deseo:
    - creer_en_el_milagro
  efecto:
    - ceguera_selectiva
    - tolerancia_al_absurdo
    - omision_de_evidencias_contrarias
conecta_con:
  - MN_RIQUEZA_VISIBLE_CONFIRMA_FANTASIA
  - DIS_MOLDE_FANTASIA_SALVADORA
```

---

## 19. `MN_PROBLEMA_ATRIBUIDO_A_FUERZA_EXTERNA`

```yaml
orden_textual: 19
mnode_id: MN_PROBLEMA_ATRIBUIDO_A_FUERZA_EXTERNA
tipo_de_unidad: formulacion_antropologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La gente rara vez acepta que sus problemas provienen de sus propios errores;
  prefiere atribuirlos a fuerzas externas y esperar salvación desde fuera.
rol_operativo: fundamentar_receptividad_a_fantasias_salvadoras
funcion_local_en_el_texto:
  - explicar por qué las soluciones duras son rechazadas
  - explicar por qué la salvación milagrosa resulta atractiva
estructura_interna:
  rechazo:
    - errores_propios
    - estupideces_propias
    - trabajo_duro
  atribucion_externa:
    - otros
    - mundo
    - dioses
  esperanza:
    - salvacion_externa
conecta_con:
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - MN_PROMETER_LUNA_NO_MEJORA_GRADUAL
```

---

## 20. `MN_REALIDAD_DOLOROSA_SOLUCION_DOLOROSA`

```yaml
orden_textual: 20
mnode_id: MN_REALIDAD_DOLOROSA_SOLUCION_DOLOROSA
tipo_de_unidad: contraste_realidad_fantasia
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La realidad desagradable suele exigir soluciones dolorosas, lentas o humillantes;
  la fantasía resulta más atractiva porque promete una salida simple y placentera.
rol_operativo: formular_contraste_central_de_la_ley
funcion_local_en_el_texto:
  - explicar por qué Venecia habría rechazado un análisis realista
  - preparar las claves para alcanzar el poder
estructura_interna:
  realidad:
    - analisis_de_causas
    - medidas_duras
    - trabajo_arduo
    - sacrificio
  fantasia:
    - alquimia
    - oro
    - redencion
    - retorno_de_gloria
conecta_con:
  - MN_PROBLEMA_ATRIBUIDO_A_FUERZA_EXTERNA
  - MN_PROMETER_LUNA_NO_MEJORA_GRADUAL
```

---

## 21. `MN_PROMETER_LUNA_NO_MEJORA_GRADUAL`

```yaml
orden_textual: 21
mnode_id: MN_PROMETER_LUNA_NO_MEJORA_GRADUAL
tipo_de_unidad: regla_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Nunca prometa una mejora gradual... Prometa, en cambio, la Luna..."
formulacion: >
  Para acceder al poder, no se debe prometer mejora gradual mediante gran esfuerzo;
  se debe prometer transformación repentina, total y fantástica.
rol_operativo: convertir_interpretacion_en_regla_practica
funcion_local_en_el_texto:
  - cerrar la interpretación con una regla aplicable
  - conectar placer, fantasía y poder
estructura_interna:
  no_prometer:
    - mejora_gradual
    - esfuerzo
    - paciencia
  prometer:
    - la_Luna
    - transformacion_repentina
    - vasija_llena_de_monedas_de_oro
conecta_con:
  - MET_FORJAR_FANTASIA_A_DISTANCIA
  - MN_IMAGEN_LUNA
```

---

## 22. `FORM_HUME_HIPOTESIS_EXTRAVAGANTE`

```yaml
orden_textual: 22
mnode_id: FORM_HUME_HIPOTESIS_EXTRAVAGANTE
tipo_de_unidad: cita_autoritativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Nadie debe desesperar de ganar seguidores para su hipótesis más extravagante..."
formulacion: >
  Incluso una hipótesis extravagante puede ganar seguidores si se presenta con arte
  bajo una luz favorable.
rol_operativo: legitimar_el_poder_de_la_presentacion_fantastica
funcion_local_en_el_texto:
  - reforzar la regla con autoridad filosófica
  - conectar fantasía con arte de presentación
conecta_con:
  - MN_PROMETER_LUNA_NO_MEJORA_GRADUAL
  - MET_FORJAR_FANTASIA_A_DISTANCIA
```

---

# 5. Claves para alcanzar el poder

---

## 23. `DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA`

```yaml
orden_textual: 23
mnode_id: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
tipo_de_unidad: molde_general
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Toda fantasía poderosa necesita una realidad monótona, opresiva o dolorosa como
  telón de fondo; la fantasía opera como compensación deseada frente a esa realidad.
rol_operativo: organizar_la_biblioteca_de_fantasias_del_capitulo
estructura:
  realidad_opresiva:
  carencia_o_dolor:
  fantasia_compensatoria:
  promesa:
  ejemplo_ancla:
invariantes:
  - existe una realidad desagradable o limitante
  - la realidad produce dolor, aburrimiento, frustración o impotencia
  - la fantasía promete escapar, revertir o suspender esa realidad
  - el público desea creer porque la fantasía es más agradable que la verdad
funcion_local_en_el_texto:
  - generalizar el caso Bragadino
  - abrir una taxonomía de fantasías recurrentes
conecta_con:
  - HISTORIA_VENECIA_DECADENCIA
  - FANTASIA_TRANSFORMACION_REPENTINA
  - FANTASIA_EXOTICO_AVENTURA
  - FANTASIA_UNION_MISTICA
  - FANTASIA_CAMBIAR_MUERTE_O_PASADO
```

---

## 24. `MET_DETECTAR_REALIDAD_OPRESIVA`

```yaml
orden_textual: 24
mnode_id: MET_DETECTAR_REALIDAD_OPRESIVA
tipo_de_unidad: metodo_principal
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Para crear una fantasía poderosa, hay que detectar primero qué realidad banal,
  pesada u opresiva aprisiona verdaderamente a la gente.
rol_operativo: convertir_principio_en_procedimiento
entrada:
  - publico_objetivo
  - realidad_social_o_personal
  - deseos_declarados
  - molestias_ocultas
operaciones:
  - ignorar_retratos_brillantes_que_la_gente_hace_de_si_misma
  - hurgar_en_lo_que_la_aprisiona
  - detectar_carencia_recurrente
  - construir_fantasia_compensatoria
salida:
  - clave_magica_de_poder
funcion_local_en_el_texto:
  - establecer método general para forjar fantasías
conecta_con:
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - MET_FORJAR_FANTASIA_A_DISTANCIA
```

---

## 25. `FANTASIA_TRANSFORMACION_REPENTINA`

```yaml
orden_textual: 25
mnode_id: FANTASIA_TRANSFORMACION_REPENTINA
tipo_de_unidad: tipo_de_fantasia
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "La realidad: el cambio es lento... La fantasía: una transformación repentina..."
formulacion: >
  Frente a una realidad donde el cambio exige tiempo, trabajo y sacrificio, la fantasía
  promete una transformación total y repentina.
rol_operativo: definir_primera_clase_de_fantasia
estructura_interna:
  realidad:
    - cambio_lento
    - trabajo_intenso
    - suerte
    - sacrificio
    - paciencia
  fantasia:
    - cambio_total
    - golpe_magico
    - riqueza_salud_o_dicha_inmediata
  ejemplos:
    - Bragadino
    - Thurneisser
conecta_con:
  - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  - HISTORIA_THURNEISSER_ELIXIRES
```

---

## 26. `HISTORIA_THURNEISSER_ELIXIRES`

```yaml
orden_textual: 26
mnode_id: HISTORIA_THURNEISSER_ELIXIRES
tipo_de_unidad: ejemplo_isomorfo
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Thurneisser ofrece elixires dulces, oro bebible, horóscopos y talismanes como
  fantasía de curación instantánea frente a tratamientos dolorosos y desagradables.
rol_operativo: ejemplificar_fantasia_de_transformacion_sin_dolor
estructura_interna:
  realidad_medica:
    - amputaciones
    - sangrias
    - purgantes_desagradables
  fantasia:
    - elixires_dulces
    - oro_bebible
    - talismanes
    - recuperacion_instantanea
  publico:
    - cortesanos_elegantes
  promesa:
    - salud_sin_sacrificio
conecta_con:
  - FANTASIA_TRANSFORMACION_REPENTINA
```

---

## 27. `FANTASIA_EXOTICO_AVENTURA`

```yaml
orden_textual: 27
mnode_id: FANTASIA_EXOTICO_AVENTURA
tipo_de_unidad: tipo_de_fantasia
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "La realidad: el ámbito social tiene códigos y fronteras rígidos... La fantasía: podemos ingresar en un mundo por entero nuevo..."
formulacion: >
  Frente a una realidad social rígida, codificada y repetitiva, la fantasía promete
  ingreso a un mundo exótico, nuevo, aventurero o prohibido.
rol_operativo: definir_segunda_clase_de_fantasia
estructura_interna:
  realidad:
    - codigos_sociales_rigidos
    - fronteras
    - circulos_conocidos
    - aburrimiento
  fantasia:
    - mundo_nuevo
    - codigos_diferentes
    - aventura
    - exotismo
  ejemplos:
    - Psalmanazar
    - Mata_Hari
    - estafas_de_tesoro_y_aventura
conecta_con:
  - HISTORIA_PSALMANAZAR_FORMOSA
  - HISTORIA_MATA_HARI_EXOTISMO
```

---

## 28. `HISTORIA_PSALMANAZAR_FORMOSA`

```yaml
orden_textual: 28
mnode_id: HISTORIA_PSALMANAZAR_FORMOSA
tipo_de_unidad: ejemplo_isomorfo
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Psalmanazar inventa una identidad formoseña completa para explotar el deseo inglés
  de exotismo, rareza y mundo desconocido.
rol_operativo: ejemplificar_fantasia_exotica
estructura_interna:
  realidad_del_publico:
    - rigidez_cultural_britanica
    - ignorancia_sobre_Formosa
    - deseo_de_exotico
  fantasia_creada:
    - idioma
    - alfabeto
    - historia
    - geografia
    - costumbres
  resultado:
    - exito_social
    - contrato_en_Oxford
    - invitaciones_de_la_realeza
conecta_con:
  - FANTASIA_EXOTICO_AVENTURA
```

---

## 29. `HISTORIA_MATA_HARI_EXOTISMO`

```yaml
orden_textual: 29
mnode_id: HISTORIA_MATA_HARI_EXOTISMO
tipo_de_unidad: ejemplo_de_fantasia_exotica_sexualizada
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Mata Hari obtiene poder no por belleza física directa, sino por construir una
  fantasía exótica, indescifrable e imposible de conocer a fondo.
rol_operativo: advertir_que_la_fantasia_debe_permanecer_parcialmente_insatisfecha
estructura_interna:
  fantasia:
    - naturaleza_extraña
    - exotismo
    - misterio
    - indescifrabilidad
  riesgo:
    - lo_fisico_se_toca_y_cansa
    - satisfaccion_total_destruye_fantasia
  regla:
    - mantener_insatisfaccion_parcial
conecta_con:
  - FANTASIA_EXOTICO_AVENTURA
  - MN_FANTASIA_DEBE_SER_INASIBLE
```

---

## 30. `FANTASIA_UNION_MISTICA`

```yaml
orden_textual: 30
mnode_id: FANTASIA_UNION_MISTICA
tipo_de_unidad: tipo_de_fantasia
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "La realidad: la sociedad está fragmentada... La fantasía: los hombres pueden encontrarse en una mística unión de almas."
formulacion: >
  Frente a una sociedad fragmentada y conflictiva, la fantasía promete unión mística,
  pertenencia emocional y cruzada común.
rol_operativo: definir_tercera_clase_de_fantasia
estructura_interna:
  realidad:
    - fragmentacion_social
    - conflicto
    - aislamiento
  fantasia:
    - union_de_almas
    - comunidad_emocional
    - causa_compartida
  ejemplo:
    - Oscar_Hartzell_y_tesoro_de_Drake
conecta_con:
  - HISTORIA_HARTZELL_TESORO_DRAKE
```

---

## 31. `HISTORIA_HARTZELL_TESORO_DRAKE`

```yaml
orden_textual: 31
mnode_id: HISTORIA_HARTZELL_TESORO_DRAKE
tipo_de_unidad: ejemplo_de_union_mistica
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Hartzell convierte la promesa del tesoro perdido de Drake en una cruzada emocional
  que une a personas oprimidas bajo una fantasía de herencia legítima y lucha común.
rol_operativo: ejemplificar_poder_y_riesgo_de_fantasia_comunitaria
estructura_interna:
  realidad:
    - fragmentacion
    - opresion_percibida
  fantasia:
    - tesoro_perdido
    - herederos_legitimos
    - cruzada_contra_gobierno
    - union_mistica_de_los_Drake
  advertencia:
    - poder_peligroso
    - puede_volverse_contra_el_forjador
    - ideal_para_demagogos
conecta_con:
  - FANTASIA_UNION_MISTICA
  - MN_FANTASIA_PELIGROSA_PUEDE_VOLVERSE_CONTRA_FORJADOR
```

---

## 32. `FANTASIA_CAMBIAR_MUERTE_O_PASADO`

```yaml
orden_textual: 32
mnode_id: FANTASIA_CAMBIAR_MUERTE_O_PASADO
tipo_de_unidad: tipo_de_fantasia
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "La realidad: la muerte... La fantasía: un repentino cambio de esa realidad intolerable."
formulacion: >
  Frente a realidades intolerables como la muerte, la irreversibilidad o la rareza
  de algo perdido, la fantasía promete resurrección, cambio del pasado o aparición milagrosa.
rol_operativo: definir_cuarta_clase_de_fantasia
estructura_interna:
  realidad:
    - muerte
    - pasado_irreversible
    - perdida
    - escasez_irremediable
  fantasia:
    - resurreccion
    - aparicion_milagrosa
    - pasado_modificado
  ejemplo:
    - nuevos_Vermeer
conecta_con:
  - HISTORIA_VAN_MEEGEREN_VERMEER
```

---

## 33. `HISTORIA_VAN_MEEGEREN_VERMEER`

```yaml
orden_textual: 33
mnode_id: HISTORIA_VAN_MEEGEREN_VERMEER
tipo_de_unidad: ejemplo_de_resurreccion_fantastica
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Van Meegeren falsifica nuevos Vermeer porque entiende que expertos y coleccionistas
  desean desesperadamente creer en la aparición de obras raras e imposibles.
rol_operativo: ejemplificar_fantasia_de_modificar_pasado_o_resucitar_lo_perdido
estructura_interna:
  realidad:
    - Vermeer_hizo_pocos_cuadros
    - obras_raras_en_el_mercado
  fantasia:
    - nuevos_Vermeer
    - resurreccion_del_pasado
    - coronacion_de_carrera_de_coleccionista
  mecanismo:
    - deseo_de_creer_en_autenticidad
    - ceguera_de_expertos
conecta_con:
  - FANTASIA_CAMBIAR_MUERTE_O_PASADO
  - MN_TODOS_QUERIAN_CREER
```

---

## 34. `MN_DISTANCIA_AUMENTA_SUGESTION`

```yaml
orden_textual: 34
mnode_id: MN_DISTANCIA_AUMENTA_SUGESTION
tipo_de_unidad: regla_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Recuerde: la clave para imponer la fantasía es la distancia."
formulacion: >
  La fantasía gana poder cuando permanece distante, vaga, inasible y no plenamente
  verificable; lo demasiado conocido pierde poder de sugestión.
rol_operativo: formular_principio_tecnico_de_la_fantasia
funcion_local_en_el_texto:
  - sintetizar la técnica común a los casos
  - preparar la metáfora de la Luna
estructura_interna:
  distancia:
    efectos:
      - sugestión
      - promesa
      - simplicidad_aparente
      - ausencia_de_problemas_visibles
  peligro:
    - cercania_excesiva
    - familiaridad
    - verificacion
    - agotamiento_de_deseo
conecta_con:
  - MN_FANTASIA_DEBE_SER_INASIBLE
  - MN_IMAGEN_LUNA
  - MET_FORJAR_FANTASIA_A_DISTANCIA
```

---

## 35. `MN_FANTASIA_DEBE_SER_INASIBLE`

```yaml
orden_textual: 35
mnode_id: MN_FANTASIA_DEBE_SER_INASIBLE
tipo_de_unidad: regla_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Lo ofrecido como fantasía debe mantenerse como espejismo: suficientemente cercano
  para tentar, pero suficientemente lejano para que el deseo continúe.
rol_operativo: definir_condicion_de_sostenimiento_de_la_fantasia
funcion_local_en_el_texto:
  - precisar cómo administrar promesa, distancia y deseo
  - evitar la destrucción de la fantasía por exceso de concreción
estructura_interna:
  acercamiento_minimo:
    - ver
    - sentirse_tentado
  distancia_necesaria:
    - seguir_soñando
    - seguir_deseando
    - no_comprobar_completamente
conecta_con:
  - MN_DISTANCIA_AUMENTA_SUGESTION
  - HISTORIA_MATA_HARI_EXOTISMO
  - MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
```

---

## 36. `MN_IMAGEN_LUNA`

```yaml
orden_textual: 36
mnode_id: MN_IMAGEN_LUNA
tipo_de_unidad: imagen_metaforica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Imagen: La Luna. Inalcanzable, de forma siempre cambiante..."
formulacion: >
  La fantasía debe parecer como la Luna: inalcanzable, cambiante, visible pero no poseíble,
  siempre capaz de generar sueño y deseo.
rol_operativo: condensar_metaforicamente_la_ley
estructura_interna:
  luna:
    - inalcanzable
    - cambiante
    - desaparece_y_reaparece
    - genera_sueños
    - genera_ansia
  regla:
    - no_ofrecer_lo_obvio
    - prometer_la_Luna
funcion_local_en_el_texto:
  - convertir la técnica de distancia en imagen memorable
conecta_con:
  - MN_DISTANCIA_AUMENTA_SUGESTION
  - MN_PROMETER_LUNA_NO_MEJORA_GRADUAL
```

---

## 37. `FORM_JOSEPH_WEIL_VERDAD_Y_MENTIRA`

```yaml
orden_textual: 37
mnode_id: FORM_JOSEPH_WEIL_VERDAD_Y_MENTIRA
tipo_de_unidad: cita_autoritativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Una mentira es una ilusión... es mucho más interesante y rentable fantasear que decir la verdad."
formulacion: >
  La mentira adornada como fantasía resulta más grata, interesante y rentable que
  la verdad fría y basada en hechos concretos.
rol_operativo: legitimar_la_ley_desde_la_experiencia_del_estafador
funcion_local_en_el_texto:
  - reforzar la oposición verdad fría / fantasía placentera
  - cerrar la sección de metáforas y autoridad
conecta_con:
  - MN_VERDAD_PROVOCA_DESILUSION
  - MN_FANTASIA_COMO_OASIS
```

---

# 6. Invalidación

---

## 38. `MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA`

```yaml
orden_textual: 38
mnode_id: MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
tipo_de_unidad: invalidacion_o_riesgo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "...nunca acercarse demasiado a un punto en que le exijan que demuestre resultados concretos."
formulacion: >
  La fantasía otorga poder mientras mantiene distancia y juego; se vuelve peligrosa
  cuando el público exige resultados concretos y verificables.
rol_operativo: delimitar_condicion_de_riesgo_de_la_ley
funcion_local_en_el_texto:
  - advertir que la fantasía no puede acercarse demasiado a la verificación
  - preparar la caída de Bragadino en Múnich
estructura_interna:
  fantasia:
    - elemento_ludico
    - ilusion_disfrutada
  riesgo:
    - exigencia_de_prueba
    - demanda_de_resultados
    - gasto_sin_retorno
conecta_con:
  - HISTORIA_BRAGADINO_MUNICH_HORCA
  - MN_FANTASIA_DEBE_SER_INASIBLE
  - MET_DESPLAZAR_PRUEBA_AL_FUTURO
```

---

## 39. `HISTORIA_BRAGADINO_MUNICH_HORCA`

```yaml
orden_textual: 39
mnode_id: HISTORIA_BRAGADINO_MUNICH_HORCA
tipo_de_unidad: caso_de_invalidacion
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  En Múnich, Bragadino fracasa porque juzga mal la paciencia del público bávaro,
  no cristaliza la fantasía prometida y termina en la horca.
rol_operativo: mostrar_limite_practico_de_la_fantasia
estructura_interna:
  publico:
    - bavaros_pragmaticos
    - menor_fe_en_alquimia
  creyente_principal:
    - duque_de_Baviera
  estrategia_de_Bragadino:
    - ganar_tiempo
    - aceptar_regalos
    - prometer_sin_cumplir
  ruptura:
    - publico_exige_justicia
    - imposibilidad_de_cristalizar_fantasia
  consecuencia:
    - horca
funcion_local_en_el_texto:
  - mostrar que la fantasía exige calibrar paciencia e indulgencia del público
  - cerrar el arco de Bragadino con una advertencia
conecta_con:
  - MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
  - HISTORIA_BRAGADINO_HUYE_A_MUNICH
```

---

## 40. `MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA`

```yaml
orden_textual: 40
mnode_id: MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA
tipo_de_unidad: invalidacion_o_matiz
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Nunca cometa el error de imaginar que la fantasía siempre es fantástica."
formulacion: >
  La fantasía no siempre consiste en lo extraordinario; cuando la realidad es teatral,
  excesiva o agotadora, la fantasía puede ser la simplicidad, lo común o lo popular.
rol_operativo: matizar_la_ley_y_evitar_aplicacion_rigida
funcion_local_en_el_texto:
  - ampliar el rango de fantasías posibles
  - introducir ejemplos de fantasía de simplicidad popular
estructura_interna:
  error:
    - creer_que_fantasia_siempre_es_extravagante
  correccion:
    - fantasia_puede_ser_simpleza
    - fantasia_puede_ser_hombre_comun
    - fantasia_puede_ser_anti_grandeza
conecta_con:
  - HISTORIA_LINCOLN_ABOGADO_RURAL
  - HISTORIA_TOM_THUMB_BARNUM
```

---

## 41. `HISTORIA_LINCOLN_ABOGADO_RURAL`

```yaml
orden_textual: 41
mnode_id: HISTORIA_LINCOLN_ABOGADO_RURAL
tipo_de_unidad: ejemplo_de_fantasia_simpleza_popular
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Lincoln construye una imagen de abogado rural simple, una fantasía de cercanía
  popular que puede ser más poderosa que una imagen extraordinaria.
rol_operativo: ejemplificar_fantasia_de_simplicidad
funcion_local_en_el_texto:
  - mostrar que la fantasía puede consistir en lo sencillo
  - introducir la idea de personaje popular mantenido a distancia
conecta_con:
  - MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA
```

---

## 42. `HISTORIA_TOM_THUMB_BARNUM`

```yaml
orden_textual: 42
mnode_id: HISTORIA_TOM_THUMB_BARNUM
tipo_de_unidad: ejemplo_de_fantasia_popular_anti_soberana
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Barnum convierte a Tom Thumb en una fantasía popular donde el hombre común ridiculiza
  a los soberanos vanagloriosos y parece más feliz que ricos y poderosos.
rol_operativo: ejemplificar_fantasia_de_inversion_popular
estructura_interna:
  personaje: Tom_Thumb
  representacion:
    - disfrazarse_de_lideres_del_pasado
    - ridiculizar_a_Napoleon_y_soberanos
  fantasia_subyacente:
    - el_hombre_simple_no_tiene_problemas
    - el_hombre_comun_es_mas_feliz_que_los_poderosos
    - basta_de_soberanos_vanagloriosos
funcion_local_en_el_texto:
  - ampliar la ley hacia fantasías de lo popular y simple
  - mostrar que lo extraño puede convertirse en ideal del hombre común
conecta_con:
  - MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA
  - MN_DISTANCIA_PERSONAJE_POPULAR
```

---

## 43. `MN_DISTANCIA_PERSONAJE_POPULAR`

```yaml
orden_textual: 43
mnode_id: MN_DISTANCIA_PERSONAJE_POPULAR
tipo_de_unidad: regla_de_invalidacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Incluso cuando se juega con la fantasía de lo popular o simple, hay que mantener
  distancia para que el personaje no se vuelva demasiado familiar y deje de proyectarse como fantasía.
rol_operativo: cerrar_invalidacion_con_regla_de_distancia
funcion_local_en_el_texto:
  - reconectar las excepciones con la regla general de distancia
  - cerrar el capítulo reafirmando que toda fantasía requiere manejo de distancia
conecta_con:
  - HISTORIA_LINCOLN_ABOGADO_RURAL
  - HISTORIA_TOM_THUMB_BARNUM
  - MN_DISTANCIA_AUMENTA_SUGESTION
```

---

# 7. Moldes estructurales detectados

## 7.1. `DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA`

```yaml
molde:
  mnode_id: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Una realidad dolorosa, lenta, rígida, fragmentada o intolerable genera una
    fantasía compensatoria que promete alivio, transformación o escape.
  estructura:
    realidad_opresiva:
    dolor_o_carencia:
    fantasia_compensatoria:
    promesa:
    mecanismo_de_adhesion:
    poder_obtenido:
  instancias:
    - Venecia_y_Bragadino
    - Thurneisser_y_elixires
    - Psalmanazar_y_Formosa
    - Mata_Hari_y_exotismo
    - Hartzell_y_tesoro_de_Drake
    - Van_Meegeren_y_Vermeer
    - Lincoln_abogado_rural
    - Tom_Thumb_Barnum
```

## 7.2. `DIS_MOLDE_FANTASIA_SALVADORA`

```yaml
molde:
  mnode_id: DIS_MOLDE_FANTASIA_SALVADORA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Un público en decadencia o necesidad acepta una figura salvadora que promete
    restauración milagrosa sin enfrentar la realidad dolorosa.
  estructura:
    publico_en_crisis:
    fantasia_redentora:
    figura_portadora:
    signos_de_aura:
    demora_o_vaguedad:
    adhesion:
  instancias:
    - Bragadino_en_Venecia
    - Bragadino_en_Munich
```

## 7.3. `DIS_MOLDE_FANTASIA_A_DISTANCIA`

```yaml
molde:
  mnode_id: DIS_MOLDE_FANTASIA_A_DISTANCIA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    La fantasía conserva poder cuando se mantiene inasible, vaga, lejana o parcialmente
    insatisfecha; pierde poder cuando se vuelve demasiado concreta, familiar o verificable.
  estructura:
    promesa:
    distancia:
    deseo_sostenido:
    riesgo_de_verificacion:
    colapso_posible:
  instancias:
    - Bragadino_demora_oro
    - Mata_Hari_misterio_exotico
    - Luna_como_imagen
    - Lincoln_y_Tom_Thumb_como_personajes_populares_a_distancia
```

---

# 8. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: MN_TITULO_LEY_32
    tipo: desarrolla_en
    destino: MN_CRITERIO_LEY_32

  - origen: MN_CRITERIO_LEY_32
    tipo: fundamenta
    destino: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA

  - origen: HISTORIA_VENECIA_DECADENCIA
    tipo: construye_telón_de_fondo_para
    destino: HISTORIA_BRAGADINO_RUMOR_ALQUIMICO

  - origen: MN_NOSTALGIA_COLECTIVA_DE_GLORIA
    tipo: explica_receptividad_de
    destino: HISTORIA_BRAGADINO_RUMOR_ALQUIMICO

  - origen: HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
    tipo: instancia_de
    destino: DIS_MOLDE_FANTASIA_SALVADORA

  - origen: HISTORIA_INVITACION_A_BRAGADINO
    tipo: convierte_fantasia_en
    destino: decision_institucional

  - origen: MN_COMPETENCIA_AUMENTA_CREDULIDAD
    tipo: explica
    destino: HISTORIA_INVITACION_A_BRAGADINO

  - origen: HISTORIA_BRAGADINO_AURA_PRESENCIA
    tipo: soporta
    destino: MET_FORJAR_AURA_A_DISTANCIA

  - origen: MN_DEMORA_AUMENTA_FANTASIA
    tipo: soporta
    destino: MET_DESPLAZAR_PRUEBA_AL_FUTURO

  - origen: HISTORIA_SUSTANCIA_SIETE_AÑOS
    tipo: instancia_de
    destino: MET_DESPLAZAR_PRUEBA_AL_FUTURO

  - origen: HISTORIA_BRAGADINO_HUYE_A_MUNICH
    tipo: demuestra_transferibilidad_de
    destino: DIS_MOLDE_FANTASIA_SALVADORA

  - origen: MN_MAMUGNA_CONOCIMIENTO_NATURALEZA_HUMANA
    tipo: interpreta
    destino: HISTORIA_BRAGADINO_RUMOR_ALQUIMICO

  - origen: MN_RIQUEZA_VISIBLE_CONFIRMA_FANTASIA
    tipo: explica_ciclo_de
    destino: aura_de_Bragadino

  - origen: MN_TODOS_QUERIAN_CREER
    tipo: explica_ceguera_ante
    destino: trucos_de_Bragadino

  - origen: MN_PROBLEMA_ATRIBUIDO_A_FUERZA_EXTERNA
    tipo: fundamenta
    destino: DIS_MOLDE_FANTASIA_SALVADORA

  - origen: MN_REALIDAD_DOLOROSA_SOLUCION_DOLOROSA
    tipo: contrasta_con
    destino: MN_PROMETER_LUNA_NO_MEJORA_GRADUAL

  - origen: FORM_HUME_HIPOTESIS_EXTRAVAGANTE
    tipo: legitima
    destino: MN_PROMETER_LUNA_NO_MEJORA_GRADUAL

  - origen: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
    tipo: organiza
    destino: FANTASIA_TRANSFORMACION_REPENTINA

  - origen: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
    tipo: organiza
    destino: FANTASIA_EXOTICO_AVENTURA

  - origen: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
    tipo: organiza
    destino: FANTASIA_UNION_MISTICA

  - origen: DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
    tipo: organiza
    destino: FANTASIA_CAMBIAR_MUERTE_O_PASADO

  - origen: HISTORIA_THURNEISSER_ELIXIRES
    tipo: instancia_de
    destino: FANTASIA_TRANSFORMACION_REPENTINA

  - origen: HISTORIA_PSALMANAZAR_FORMOSA
    tipo: instancia_de
    destino: FANTASIA_EXOTICO_AVENTURA

  - origen: HISTORIA_MATA_HARI_EXOTISMO
    tipo: instancia_de
    destino: FANTASIA_EXOTICO_AVENTURA

  - origen: HISTORIA_HARTZELL_TESORO_DRAKE
    tipo: instancia_de
    destino: FANTASIA_UNION_MISTICA

  - origen: HISTORIA_VAN_MEEGEREN_VERMEER
    tipo: instancia_de
    destino: FANTASIA_CAMBIAR_MUERTE_O_PASADO

  - origen: MN_DISTANCIA_AUMENTA_SUGESTION
    tipo: fundamenta
    destino: MN_FANTASIA_DEBE_SER_INASIBLE

  - origen: MN_IMAGEN_LUNA
    tipo: condensa_metaforicamente
    destino: MN_DISTANCIA_AUMENTA_SUGESTION

  - origen: FORM_JOSEPH_WEIL_VERDAD_Y_MENTIRA
    tipo: legitima
    destino: MN_CRITERIO_LEY_32

  - origen: MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
    tipo: invalida_si_no_se_respeta
    destino: MET_FORJAR_FANTASIA_A_DISTANCIA

  - origen: HISTORIA_BRAGADINO_MUNICH_HORCA
    tipo: instancia_de
    destino: MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA

  - origen: MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA
    tipo: matiza
    destino: MN_TITULO_LEY_32

  - origen: HISTORIA_LINCOLN_ABOGADO_RURAL
    tipo: instancia_de
    destino: MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA

  - origen: HISTORIA_TOM_THUMB_BARNUM
    tipo: instancia_de
    destino: MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA

  - origen: MN_DISTANCIA_PERSONAJE_POPULAR
    tipo: reconecta_excepcion_con
    destino: MN_DISTANCIA_AUMENTA_SUGESTION
```

---

# 9. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: formular regla, contraste realidad/fantasía, principios psicológicos, advertencias y metáforas
    nodos:
      - MN_TITULO_LEY_32
      - MN_CRITERIO_LEY_32
      - MN_VERDAD_PROVOCA_DESILUSION
      - MN_FANTASIA_COMO_OASIS
      - MN_NOSTALGIA_COLECTIVA_DE_GLORIA
      - MN_PROBLEMA_ATRIBUIDO_A_FUERZA_EXTERNA
      - MN_REALIDAD_DOLOROSA_SOLUCION_DOLOROSA
      - MN_PROMETER_LUNA_NO_MEJORA_GRADUAL
      - MN_DISTANCIA_AUMENTA_SUGESTION
      - MN_FANTASIA_DEBE_SER_INASIBLE
      - MN_IMAGEN_LUNA
      - MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
      - MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA
      - MN_DISTANCIA_PERSONAJE_POPULAR

  FAM-Patrón-de-razonamiento:
    funcion: explicar por qué la fantasía funciona, por qué el público cree y por qué la verificación destruye el poder
    nodos:
      - MN_COMPETENCIA_AUMENTA_CREDULIDAD
      - MN_TODOS_QUERIAN_CREER
      - MN_RIQUEZA_VISIBLE_CONFIRMA_FANTASIA
      - HISTORIA_BRAGADINO_MUNICH_HORCA

  FAM-Diseño:
    funcion: organizar moldes y tipos de fantasía compensatoria
    nodos:
      - DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
      - DIS_MOLDE_FANTASIA_SALVADORA
      - DIS_MOLDE_FANTASIA_A_DISTANCIA
      - FANTASIA_TRANSFORMACION_REPENTINA
      - FANTASIA_EXOTICO_AVENTURA
      - FANTASIA_UNION_MISTICA
      - FANTASIA_CAMBIAR_MUERTE_O_PASADO

  FAM-Método:
    funcion: convertir la ley en procedimientos prácticos para fabricar y sostener fantasías
    nodos:
      - MET_FORJAR_AURA_A_DISTANCIA
      - MET_DESPLAZAR_PRUEBA_AL_FUTURO
      - MET_DETECTAR_REALIDAD_OPRESIVA
      - MET_FORJAR_FANTASIA_A_DISTANCIA

  formas_compuestas:
    funcion: historias ancla y casos que manifiestan moldes
    nodos:
      - HISTORIA_VENECIA_DECADENCIA
      - HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
      - HISTORIA_INVITACION_A_BRAGADINO
      - HISTORIA_BRAGADINO_AURA_PRESENCIA
      - HISTORIA_SUSTANCIA_SIETE_AÑOS
      - HISTORIA_BRAGADINO_HUYE_A_MUNICH
      - HISTORIA_THURNEISSER_ELIXIRES
      - HISTORIA_PSALMANAZAR_FORMOSA
      - HISTORIA_MATA_HARI_EXOTISMO
      - HISTORIA_HARTZELL_TESORO_DRAKE
      - HISTORIA_VAN_MEEGEREN_VERMEER
      - HISTORIA_LINCOLN_ABOGADO_RURAL
      - HISTORIA_TOM_THUMB_BARNUM
```

---

# 10. Síntesis estructural del texto

```txt
LEY:
  Juegue con las fantasías de la gente.

CRITERIO:
  La verdad y la realidad suelen ser duras, desagradables y capaces de producir ira.
  La fantasía es placentera, compensatoria y atractiva.

OBSERVANCIA:
  Venecia está en decadencia y desea restauración milagrosa.
  Bragadino aparece como alquimista capaz de multiplicar oro.
  Su aura, lujo, distancia y demora alimentan la fantasía.
  La ciudad financia su vida porque quiere creer en la redención.

INTERPRETACIÓN:
  Mamugná no explota sólo trucos, sino la naturaleza humana.
  La gente prefiere una salvación externa antes que aceptar errores propios.
  La fantasía vence a la realidad porque es más agradable y menos dolorosa.

CLAVES:
  La fantasía necesita una realidad opresiva como telón de fondo.
  Detecte lo que aprisiona al público.
  Prometa transformación repentina, salud sin dolor, exotismo, unión mística,
  resurrección del pasado o escape de la monotonía.

TÉCNICA CENTRAL:
  Mantenga distancia.
  La fantasía debe ser vaga, inasible, prometedora y no plenamente verificable.
  No ofrezca lo obvio: prometa la Luna.

INVALIDACIÓN:
  Si el público exige resultados concretos, la fantasía puede colapsar.
  Bragadino muere en Múnich porque juzga mal la paciencia de su nuevo público.
  Además, la fantasía no siempre es extravagante: a veces puede ser simplicidad,
  popularidad o retorno al hombre común.
```

---

# 11. Núcleo interpretativo provisional

```txt
El texto enseña que la fantasía es una herramienta de poder porque responde a una
carencia producida por la realidad. Las masas no se adhieren a la fantasía sólo por
ignorancia, sino porque la fantasía les permite evitar una verdad desagradable,
imaginar una solución sin esfuerzo, escapar de lo común, unirse en una causa o
modificar simbólicamente lo intolerable. El forjador de fantasías obtiene poder si
sabe detectar la realidad que aprisiona al público, construir una promesa deseable,
mantenerla a distancia y evitar que se le exijan pruebas concretas demasiado pronto.
```

---

# 12. Observaciones para pasos posteriores

```yaml
observaciones_para_pasos_posteriores:
  posible_modelo_de_juego:
    descripcion: >
      Puede modelarse como un juego entre forjador de fantasías y público. El público
      posee una carencia o dolor; el forjador ofrece una fantasía que reduce fricción
      psicológica. El riesgo aparece cuando el público cambia de disfrute de ilusión
      a exigencia de prueba concreta.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_modelo_de_mercado_de_fantasias:
    descripcion: >
      Las fantasías funcionan como productos simbólicos que sustituyen soluciones
      difíciles por promesas placenteras. Cada tipo de fantasía responde a una realidad
      opresiva distinta.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_grafo_conceptual:
    nodo_central: MN_TITULO_LEY_32
    ramas:
      - criterio_realidad_vs_fantasia
      - observancia_Bragadino_Venecia
      - interpretacion_naturaleza_humana
      - taxonomia_de_fantasias
      - distancia_y_Luna
      - invalidacion_y_riesgo
    estatus: grafo_posterior
```

---

# 13. Resultado del procesamiento

El texto queda preparado como una secuencia de estructuras cognitivas:

```txt
MN_TITULO_LEY_32
  → MN_CRITERIO_LEY_32
    → HISTORIA_VENECIA_DECADENCIA
      → HISTORIA_BRAGADINO_RUMOR_ALQUIMICO
        → DIS_MOLDE_FANTASIA_SALVADORA
          → MN_MAMUGNA_CONOCIMIENTO_NATURALEZA_HUMANA
            → DIS_MOLDE_REALIDAD_DURA_FANTASIA_COMPENSATORIA
              → FANTASIA_TRANSFORMACION_REPENTINA
              → FANTASIA_EXOTICO_AVENTURA
              → FANTASIA_UNION_MISTICA
              → FANTASIA_CAMBIAR_MUERTE_O_PASADO
                → MN_DISTANCIA_AUMENTA_SUGESTION
                  → MN_IMAGEN_LUNA
                    → MN_RIESGO_DE_EXIGENCIA_DE_PRUEBA
                      → MN_FANTASIA_NO_SIEMPRE_ES_FANTASTICA
```

La fórmula estructural más compacta es:

```txt
realidad_dura
  → deseo_de_escape
    → fantasia_compensatoria
      → adhesion_del_publico
        → poder_para_el_forjador

pero:

fantasia_demasiado_cercana_o_verificable
  → exigencia_de_resultados
    → colapso_de_la_ilusion
      → riesgo_para_el_forjador
```
