https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0b974c-2a44-83e8-ba99-ecccda4fb683

# Procesamiento estructural — Ley N.º 3: “Disimule sus intenciones”

**Tipo de documento:** `paso_1_procesamiento_estructural`  
**Texto raíz:** `transcripcion_ley_3.md`  
**Caso:** Ley N.º 3 — “Disimule sus intenciones”  
**Fuente textual:** transcripción adjunta por el usuario  
**Objetivo del procesamiento:** estructurar linealmente las unidades cognitivas contenidas en el texto, respetando el orden de aparición, sin convertir todavía la lectura en una construcción conceptual final ni en un modelo analítico posterior.

---

## 0. Principio rector del procesamiento

Este procesamiento no busca todavía producir una teoría completa sobre el engaño, la estrategia, la seducción o el poder. El objetivo es más básico: **convertir el texto en una secuencia ordenada de estructuras cognitivas detectadas**.

La operación no debe ser:

```txt
texto_en_crudo
  → resumen
  → ideas principales
```

La operación correcta es:

```txt
texto_en_crudo
  → lectura_lineal_de_estructuras_cognitivas
    → mNodes_candidatos
      → moldes_detectados
        → inferencias_locales
          → relaciones_basicas
            → base_para_analisis_posterior
```

En este paso, se registra lo que aparece en el texto, cómo aparece y qué función cumple localmente.

---

## 1. Texto raíz

```yaml
texto_raiz:
  texto_id: TEXTO_LEY_3_DISIMULE_SUS_INTENCIONES
  titulo: "Ley N.º 3 — Disimule sus intenciones"
  tipo_de_fuente: capitulo_de_regla_estrategica
  estructura_macro_visible:
    - ley
    - criterio
    - primera_parte: falsos_objetos_de_deseo_y_pistas_falsas
    - transgresion_de_la_ley
    - interpretacion_de_transgresion
    - observancia_de_la_ley
    - interpretacion_de_observancia
    - claves_para_alcanzar_el_poder
    - segunda_parte: cortina_de_humo
    - observancia_de_la_ley_I
    - interpretacion_de_observancia_I
    - observancia_de_la_ley_II
    - interpretacion_de_observancia_II
    - claves_para_alcanzar_el_poder
    - imagen_metaforica
    - autoridad
    - invalidacion
  objetivo_del_paso: >
    Registrar las estructuras cognitivas del texto en el orden en que aparecen:
    reglas, criterios, moldes, historias ancla, inferencias, métodos, imágenes,
    casos de observancia, casos de transgresión e invalidaciones.
```

---

## 2. Núcleo provisional del texto

Aunque este paso no construye todavía la síntesis final, el texto deja ver un núcleo provisional:

```txt
Para ejercer poder o manipular una situación estratégica, no revele directamente
sus verdaderas intenciones. Oriente la atención de los demás hacia objetos falsos,
pistas falsas, señales ambiguas o fachadas familiares, de modo que no puedan
preparar una defensa hasta que ya sea demasiado tarde.
```

Este núcleo se despliega en dos grandes técnicas:

```txt
Técnica 1:
  falsos objetos de deseo / pistas falsas
  → distraer la atención respecto del verdadero objetivo

Técnica 2:
  cortina de humo / fachada familiar
  → ocultar actos e intenciones bajo una apariencia cómoda, normal o inofensiva
```

---

## 3. Secuencia lineal de mNodes detectados

### 00. `MN_TITULO_LEY_3`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_LEY_3
tipo_de_unidad: regla_titular
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Disimule sus intenciones"
formulacion: >
  El sujeto estratégico no debe revelar directamente lo que quiere lograr,
  porque la exposición de sus propósitos permite que otros preparen defensas.
rol_operativo: condensar_regla_en_formulacion_directa
funcion_local_en_el_texto:
  - presentar la ley central
  - fijar el eje interpretativo de todo el capítulo
  - introducir la tensión entre intención real y apariencia visible
estructura_interna:
  intencion_real: aquello_que_el_sujeto_quiere_lograr
  apariencia_visible: lo_que_los_demas_pueden_observar
  riesgo: revelar_la_intencion
  estrategia: disimularla
conecta_con:
  - MN_CRITERIO_LEY_3
  - DIS_MOLDE_FALSA_PISTA
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 01. `MN_CRITERIO_LEY_3`

```yaml
orden_textual: 01
mnode_id: MN_CRITERIO_LEY_3
tipo_de_unidad: criterio_general
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Desconcierte a la gente y manténgala en la mayor ignorancia posible..."
formulacion: >
  Si los demás no comprenden qué se quiere lograr, no pueden defenderse con eficacia.
  Por eso conviene conducirlos por falsas suposiciones y envolverlos en una nube de humo.
rol_operativo: formular_principio_operativo_de_la_ley
funcion_local_en_el_texto:
  - explicar el propósito del disimulo
  - vincular ignorancia del otro con ventaja estratégica propia
  - anticipar los dos mecanismos centrales: falsa suposición y nube de humo
estructura_interna:
  condicion:
    - otros_intentan_interpretar_acciones
    - otros_podrian_preparar_defensa_si_conocen_el_objetivo
  tecnica:
    - falsas_suposiciones
    - nube_de_humo
    - desconcierto
  resultado:
    - defensa_imposible_o_tardia
    - ventaja_para_el_sujeto_estrategico
conecta_con:
  - MN_PARTE_1_FALSOS_OBJETOS
  - MN_PARTE_2_CORTINA_DE_HUMO
```

---

## 4. Primera parte: falsos objetos de deseo y pistas falsas

### 02. `MN_PARTE_1_FALSOS_OBJETOS`

```yaml
orden_textual: 02
mnode_id: MN_PARTE_1_FALSOS_OBJETOS
tipo_de_unidad: subregla_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Utilice falsos objetos de deseo y pistas falsas para distraer la atención de los demás."
formulacion: >
  Para ocultar el verdadero objetivo, conviene presentar señales, deseos o intereses
  falsos que desplacen la atención de los demás hacia una dirección equivocada.
rol_operativo: definir_primera_tecnica_de_disimulo
funcion_local_en_el_texto:
  - abrir la primera mitad de la ley
  - introducir la lógica de la distracción activa
  - preparar los casos Ninon/Marqués y Bismarck
estructura_interna:
  verdadero_objetivo: oculto
  objeto_falso: visible
  pista_falsa: visible
  efecto: confusion_del_observador
conecta_con:
  - HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
  - HISTORIA_BISMARCK_OBSERVANCIA
  - DIS_MOLDE_FALSA_PISTA
```

---

### 03. `DIS_MOLDE_FALSA_PISTA`

```yaml
orden_textual: 03
mnode_id: DIS_MOLDE_FALSA_PISTA
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  El sujeto estratégico presenta señales falsas, objetos falsos de deseo o conductas ambiguas
  para que el observador no pueda distinguir lo genuino de lo fingido ni anticipar el verdadero objetivo.
rol_operativo: organizar_casos_de_distraccion_por_falsa_senal
estructura:
  sujeto_estrategico:
  objetivo_real:
  receptor_u_observador:
  pista_falsa_o_senal_ambigua:
  interpretacion_erronea_del_receptor:
  resultado:
invariantes:
  - existe un objetivo real oculto
  - se presentan signos visibles que apuntan a otra cosa
  - el receptor se concentra en la señal falsa
  - la defensa del receptor se vuelve ineficaz o tardía
instancias:
  - plan_de_Ninon_para_el_marques
  - discurso_pacifista_de_Bismarck
  - fuerte_de_Marlborough
  - falsa_franqueza_de_Talleyrand_Yago_Weil
criterio_de_validacion:
  - pertenece al molde si una señal visible sustituye al objetivo real en la mente del receptor
conecta_con:
  - MN_PARTE_1_FALSOS_OBJETOS
  - MET_EMITIR_SENALES_AMBIGUAS
  - MET_FALSA_FRANQUEZA
```

---

## 5. Transgresión de la ley: el marqués de Sevigné y Ninon de Lenclos

### 04. `HISTORIA_MARQUES_SEVIGNE_TRANSGRESION`

```yaml
orden_textual: 04
mnode_id: HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
tipo_de_unidad: historia_ancla_negativa
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Ninon de Lenclos aconseja al marqués de Sevigné en la seducción de una condesa."
formulacion: >
  El marqués logra avanzar en la seducción mientras oculta y vuelve ambiguas sus intenciones,
  pero fracasa cuando revela directamente su amor.
rol_operativo: mostrar_transgresion_de_la_ley_mediante_caso_de_seduccion
funcion_local_en_el_texto:
  - dramatizar el peligro de revelar intenciones
  - mostrar que el misterio sostiene la seducción
  - mostrar que la declaración directa destruye el juego
estructura_interna:
  mentora: Ninon_de_Lenclos
  ejecutor: marques_de_Sevigne
  objetivo_real: seducir_a_la_condesa
  objeto: condesa_esquiva
  estrategia_recomendada:
    - fingir_distancia
    - presentarse_como_amigo
    - provocar_celos
    - aparecer_y_desaparecer_de_forma_impredecible
    - generar_confusion_emocional
  transgresion:
    - confesar_amor_directamente
  consecuencia:
    - la_condesa_comprende_el_juego
    - el_encanto_se_rompe
    - la_condesa_se_distancia
conecta_con:
  - MET_SEDUCCION_POR_AMBIGUEDAD
  - PR_REVELAR_INTENCION_ROMPE_ENCANTO
  - DIS_MOLDE_FALSA_PISTA
```

---

### 05. `MET_SEDUCCION_POR_AMBIGUEDAD`

```yaml
orden_textual: 05
mnode_id: MET_SEDUCCION_POR_AMBIGUEDAD
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  En la seducción, el deseo directo debe ocultarse mediante señales ambiguas,
  alternancia entre interés e indiferencia, celos y movimientos impredecibles.
rol_operativo: convertir_la_ley_en_procedimiento_de_seduccion
entrada:
  - sujeto_que_desea_seducir
  - objeto_de_seduccion
  - riesgo_de_revelar_intencion
operaciones:
  - aparecer_como_amigo_no_amante
  - introducir_distancia
  - provocar_celos
  - alternar_presencia_y_ausencia
  - impedir_que_el_otro_prediga_movimientos
salida:
  - confusion_emocional
  - intriga
  - expectativa
  - aumento_de_interes
criterio_de_falla:
  - revelar_directamente_el_deseo
conecta_con:
  - HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
  - MN_PARTE_1_FALSOS_OBJETOS
```

---

### 06. `PR_REVELAR_INTENCION_ROMPE_ENCANTO`

```yaml
orden_textual: 06
mnode_id: PR_REVELAR_INTENCION_ROMPE_ENCANTO
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Cuando el marqués pronuncia la palabra "amor", todo lo anterior se reinterpreta
  como maniobra obvia, y lo que era misterioso pierde encanto.
rol_operativo: explicar_por_que_la_transgresion_fracasa
premisas:
  - la condesa estaba intrigada por señales ambiguas
  - el misterio hacía que el juego resultara excitante
  - el marqués reveló directamente su intención amorosa
regla_inferencial:
  - si una intención oculta se revela antes de tiempo, las señales previas cambian de significado
conclusion:
  - la seducción fracasa porque el misterio se convierte en manipulación evidente
funcion_local_en_el_texto:
  - interpretar la historia de la transgresión
  - establecer que el secreto del juego era la ambigüedad
conecta_con:
  - HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
  - MN_PARTE_1_FALSOS_OBJETOS
```

---

### 07. `FORM_GRACIAN_ENCUBRIR_ENGANO`

```yaml
orden_textual: 07
mnode_id: FORM_GRACIAN_ENCUBRIR_ENGANO
tipo_de_unidad: cita_autoritativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "No debes ser tenido por hombre de trampas..."
formulacion: >
  La astucia consiste no sólo en usar engaño, sino en encubrir que se está engañando.
rol_operativo: legitimar_la_primera_parte_mediante_autoridad
funcion_local_en_el_texto:
  - condensar la lección de la transgresión
  - introducir la idea de ocultar incluso el carácter tramposo de la acción
conecta_con:
  - MN_PARTE_1_FALSOS_OBJETOS
  - MET_FALSA_FRANQUEZA
```

---

## 6. Observancia de la ley: Bismarck

### 08. `HISTORIA_BISMARCK_OBSERVANCIA`

```yaml
orden_textual: 08
mnode_id: HISTORIA_BISMARCK_OBSERVANCIA
tipo_de_unidad: historia_ancla_positiva
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Bismarck pronuncia un discurso pacifista contra sus propias inclinaciones bélicas."
formulacion: >
  Bismarck oculta su verdadero deseo de guerra futura contra Austria fingiendo apoyar
  una causa pacifista que detestaba, y con ello gana posición política para realizar más tarde su objetivo real.
rol_operativo: mostrar_observancia_exitosa_por_senal_contraria
funcion_local_en_el_texto:
  - contrastar con el marqués, que reveló directamente su intención
  - mostrar que apoyar en apariencia una causa opuesta puede ocultar el objetivo real
  - convertir el disimulo en estrategia política
estructura_interna:
  sujeto_estrategico: Otto_von_Bismarck
  objetivo_real:
    - fortalecer_Prusia
    - preparar_guerra_futura_con_Austria
    - unificar_Alemania_bajo_Prusia
  contexto_visible:
    - fiebre_belica_en_Prusia
    - rey_y_ministros_prefieren_paz
  senal_falsa:
    - discurso_pacifista
    - elogio_de_Austria
    - defensa_de_aplacar_al_vecino
  resultado:
    - confusion_del_parlamento
    - guerra_evitable_en_el_momento_inadecuado
    - nombramiento_de_Bismarck_como_ministro
    - acceso_posterior_al_poder
conecta_con:
  - MET_APOYAR_CAUSA_OPUESTA
  - PR_OCULTAR_OBJETIVO_MEDIANTE_SENAL_CONTRARIA
  - DIS_MOLDE_FALSA_PISTA
```

---

### 09. `MET_APOYAR_CAUSA_OPUESTA`

```yaml
orden_textual: 09
mnode_id: MET_APOYAR_CAUSA_OPUESTA
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: >
  Para ocultar una intención, puede apoyarse públicamente una causa opuesta a la intención real,
  haciendo que los demás interpreten la señal visible como cambio sincero de posición.
rol_operativo: convertir_el_caso_Bismarck_en_tecnica_general
entrada:
  - objetivo_real_que_conviene_ocultar
  - audiencia_que_podria_oponerse
  - causa_opuesta_creible
operaciones:
  - formular_apoyo_publico_a_la_causa_opuesta
  - hacer_creible_el_cambio_de_posicion
  - producir_confusion_o_desarme_en_la_audiencia
  - ganar_tiempo_o_posicion
salida:
  - objetivo_real_oculto
  - audiencia_despistada
  - ventaja_estrategica
conecta_con:
  - HISTORIA_BISMARCK_OBSERVANCIA
  - MN_PARTE_1_FALSOS_OBJETOS
```

---

### 10. `PR_OCULTAR_OBJETIVO_MEDIANTE_SENAL_CONTRARIA`

```yaml
orden_textual: 10
mnode_id: PR_OCULTAR_OBJETIVO_MEDIANTE_SENAL_CONTRARIA
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Si el público espera que las acciones expresen sinceramente valores y opiniones,
  una señal contraria al objetivo real puede ocultarlo con eficacia.
rol_operativo: justificar_eficacia_del_metodo_Bismarck
premisas:
  - la mayoría cree que las posiciones públicas expresan convicciones reales
  - Bismarck hizo visible una posición contraria a su deseo profundo
  - nadie sospechó sus objetivos reales
conclusion:
  - la señal contraria permitió ocultar el objetivo y ganar poder
funcion_local_en_el_texto:
  - explicar por qué la observancia de Bismarck funciona
  - anticipar claves generales sobre apariencia y sinceridad
conecta_con:
  - HISTORIA_BISMARCK_OBSERVANCIA
  - MN_APARIENCIAS_CREIDAS_COMO_REALIDAD
```

---

## 7. Claves para alcanzar el poder — primera parte

### 11. `MN_SINCERIDAD_COMO_RIESGO`

```yaml
orden_textual: 11
mnode_id: MN_SINCERIDAD_COMO_RIESGO
tipo_de_unidad: formulacion_antropologico_estrategica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La sinceridad desinhibida vuelve al sujeto predecible, ofensivo y poco temible;
  por tanto, debilita su poder.
rol_operativo: invertir_valor_moral_de_la_sinceridad_en_contexto_de_poder
funcion_local_en_el_texto:
  - pasar de los casos a una regla general
  - establecer que la apertura espontánea es estratégicamente débil
estructura_interna:
  conducta:
    - decir_lo_que_se_siente
    - revelar_planes
    - manifestar_opiniones_sin_control
  consecuencias:
    - ofender_a_los_demas
    - volverse_predecible
    - perder_respeto_o_temor
conecta_con:
  - MN_CRITERIO_LEY_3
  - MET_CONTROLAR_REVELACION
```

---

### 12. `MN_APARIENCIAS_CREIDAS_COMO_REALIDAD`

```yaml
orden_textual: 12
mnode_id: MN_APARIENCIAS_CREIDAS_COMO_REALIDAD
tipo_de_unidad: formulacion_antropologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El primer instinto humano es creer en las apariencias; no se puede vivir dudando constantemente
  de todo lo que se ve y oye.
rol_operativo: fundamentar_psicologicamente_el_disimulo
funcion_local_en_el_texto:
  - explicar por qué las pistas falsas funcionan
  - mostrar que el engaño explota una necesidad cognitiva ordinaria
estructura_interna:
  tendencia_humana:
    - creer_en_lo_visible
    - aceptar_apariencias_como_realidad
  razon:
    - dudar_de_todo_agota_y_aterroriza
  consecuencia:
    - es_posible_disimular_intenciones_presentando_objetos_falsos
conecta_con:
  - DIS_MOLDE_FALSA_PISTA
  - MET_FALSA_FRANQUEZA
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 13. `HISTORIA_MARLBOROUGH_FUERTE_FRANCES`

```yaml
orden_textual: 13
mnode_id: HISTORIA_MARLBOROUGH_FUERTE_FRANCES
tipo_de_unidad: ejemplo_militar_de_pista_falsa
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Marlborough finge querer conservar un fuerte francés para que los franceses lo destruyan,
  dejando libre el camino que realmente quería usar.
rol_operativo: ejemplificar_objeto_falso_de_deseo_en_contexto_militar
estructura_interna:
  objetivo_real: abrir_paso_a_traves_de_Francia
  objeto_visible: fuerte_capturado
  falsa_intencion: usar_el_fuerte_para_sus_fines
  reaccion_del_enemigo:
    - franceses_recapturan_el_fuerte
    - franceses_lo_destruyen
  resultado:
    - camino_libre_para_Marlborough
funcion_local_en_el_texto:
  - mostrar aplicación no seductora ni política de la misma técnica
  - reforzar la transferibilidad del molde
conecta_con:
  - DIS_MOLDE_FALSA_PISTA
  - MET_PRESENTAR_OBJETO_FALSO_DE_DESEO
```

---

### 14. `MET_PRESENTAR_OBJETO_FALSO_DE_DESEO`

```yaml
orden_textual: 14
mnode_id: MET_PRESENTAR_OBJETO_FALSO_DE_DESEO
tipo_de_unidad: metodo_general
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Oculte sus intenciones hablando mucho de deseos y objetivos visibles, pero falsos;
  así parecerá abierto y hará que los rivales defiendan el flanco equivocado.
rol_operativo: convertir_la_primera_parte_en_tecnica_aplicable
operaciones:
  - no_cerrarse_por_completo
  - hablar_de_objetivos_aparentes
  - hacer_creible_la_apertura
  - ocultar_el_objetivo_real
  - inducir_defensa_equivocada
salida:
  - apariencia_de_franqueza
  - intencion_real_oculta
  - rivales_perdiendo_tiempo
conecta_con:
  - HISTORIA_MARLBOROUGH_FUERTE_FRANCES
  - HISTORIA_BISMARCK_OBSERVANCIA
```

---

### 15. `MET_FALSA_FRANQUEZA`

```yaml
orden_textual: 15
mnode_id: MET_FALSA_FRANQUEZA
tipo_de_unidad: metodo_general
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  La franqueza fingida funciona porque la gente confunde franqueza con sinceridad
  y desea creer en la sinceridad ajena.
rol_operativo: transformar_valor_social_en_señuelo
estructura_interna:
  apariencia_visible:
    - franqueza
    - sinceridad
    - confianza
  objetivo_oculto:
    - extraer_confianza
    - ocultar_accion_artera
    - hacer_dificil_cuestionar_la_realidad_del_senuelo
  ejemplos:
    - Yago_y_Otelo
    - Yellow_Kid_Weil
    - Talleyrand
funcion_local_en_el_texto:
  - introducir una herramienta concreta para despistar
  - conectar la primera parte con el caso posterior de Yellow Kid
conecta_con:
  - MN_APARIENCIAS_CREIDAS_COMO_REALIDAD
  - HISTORIA_YELLOW_KID_GEEZIL
```

---

## 8. Segunda parte: cortina de humo

### 16. `MN_PARTE_2_CORTINA_DE_HUMO`

```yaml
orden_textual: 16
mnode_id: MN_PARTE_2_CORTINA_DE_HUMO
tipo_de_unidad: subregla_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Utilice una cortina de humo para ocultar sus actos."
formulacion: >
  Una fachada neutra, familiar o inofensiva puede ocultar intenciones y actos reales,
  haciendo que la víctima avance por un sendero conocido hasta caer en la trampa.
rol_operativo: definir_segunda_tecnica_de_disimulo
funcion_local_en_el_texto:
  - pasar de la pista falsa a la cobertura ambiental
  - introducir la lógica de la fachada
  - preparar Yellow Kid, Selasie y los casos complementarios
estructura_interna:
  intencion_real: oculta
  fachada_visible: familiar_inofensiva_neutra
  efecto: atencion_adormecida
  resultado: victima_conducida_a_trampa
conecta_con:
  - DIS_MOLDE_CORTINA_DE_HUMO
  - HISTORIA_YELLOW_KID_GEEZIL
  - HISTORIA_SELASIE_BALCHA
```

---

### 17. `DIS_MOLDE_CORTINA_DE_HUMO`

```yaml
orden_textual: 17
mnode_id: DIS_MOLDE_CORTINA_DE_HUMO
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  El sujeto estratégico crea una fachada normal, familiar, noble o previsible que ocupa
  la atención de la víctima mientras la acción real ocurre en otra dimensión.
rol_operativo: organizar_casos_de_ocultamiento_por_fachada
estructura:
  sujeto_estrategico:
  victima:
  fachada_visible:
  accion_real_oculta:
  mecanismo_de_distraccion:
  resultado:
invariantes:
  - existe una acción real que debe permanecer oculta
  - se crea una fachada interpretable como normal o tranquilizadora
  - la víctima concentra su atención en esa fachada
  - la operación real avanza sin ser detectada
instancias:
  - Yellow_Kid_y_Geezil
  - Selasie_y_Balcha
  - Duveen_y_Museo_Nacional
  - Jay_Gould_y_Western_Union
  - espias_britanicos_de_Guerra_Fria
criterio_de_validacion:
  - pertenece al molde si una apariencia ordinaria o confiable oculta una operación estratégica distinta
conecta_con:
  - MN_PARTE_2_CORTINA_DE_HUMO
  - MET_FACHADA_FAMILIAR
  - MET_FUSION_CON_ENTORNO
```

---

## 9. Observancia I: Yellow Kid y Sam Geezil

### 18. `HISTORIA_YELLOW_KID_GEEZIL`

```yaml
orden_textual: 18
mnode_id: HISTORIA_YELLOW_KID_GEEZIL
tipo_de_unidad: historia_ancla_positiva_de_cortina_de_humo
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Yellow Kid Weil usa un negocio inmobiliario aparentemente normal como cortina de humo
  para conducir a Geezil hacia una estafa de boxeo y robarle 35,000 dólares.
rol_operativo: mostrar_cortina_de_humo_familiar_en_estafa
estructura_interna:
  sujeto_estrategico: Yellow_Kid_Weil
  victima: Sam_Geezil
  objetivo_real: sacarle_35000_dolares
  cortina_visible:
    - venta_de_departamento
    - oportunidad_de_cabaña_de_caza
    - negocio_financiero_legal
    - contacto_con_financistas
  operacion_real:
    - match_de_boxeo_trucado
    - falsa_muerte_del_boxeador
    - panico_de_la_victima
  resultado:
    - Geezil_huye
    - abandona_el_dinero
    - estafadores_reparten_ganancia
funcion_local_en_el_texto:
  - mostrar cómo una fachada familiar ocupa la mente de la víctima
  - demostrar que la atención puede ser orientada paso a paso hacia una trampa
conecta_con:
  - DIS_MOLDE_CORTINA_DE_HUMO
  - PR_ATENCION_OCUPADA_NO_DETECTA_TRAMPA
  - MET_FACHADA_FAMILIAR
```

---

### 19. `PR_ATENCION_OCUPADA_NO_DETECTA_TRAMPA`

```yaml
orden_textual: 19
mnode_id: PR_ATENCION_OCUPADA_NO_DETECTA_TRAMPA
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Cuando la mente de la víctima está absorta en un negocio familiar y deseado,
  resulta más fácil conducirla hacia una operación lateral que no examina con cuidado.
rol_operativo: explicar_eficacia_de_la_cortina_de_humo
premisas:
  - Geezil estaba concentrado en el negocio de la cabaña
  - la oportunidad parecía normal y rentable
  - el match de boxeo apareció lateralmente cuando ya estaba involucrado
  - el pánico final bloqueó cualquier recuperación racional
conclusion:
  - la cortina de humo permite desplazar la atención hasta que la trampa ya está cerrada
funcion_local_en_el_texto:
  - interpretar la historia de Yellow Kid
  - convertirla en regla aplicable
conecta_con:
  - HISTORIA_YELLOW_KID_GEEZIL
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 20. `MET_FACHADA_FAMILIAR`

```yaml
orden_textual: 20
mnode_id: MET_FACHADA_FAMILIAR
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Encare a la víctima con una idea normal, familiar y poco llamativa para ocupar su mente
  y luego conducirla con cautela hacia la trampa lateral.
rol_operativo: convertir_Yellow_Kid_en_procedimiento
entrada:
  - victima_con_deseo_o_curiosidad
  - operacion_real_que_debe_ocultarse
  - fachada_familiar_creible
operaciones:
  - presentar_un_negocio_normal
  - despertar_interes_y_codicia
  - mantener_la_atencion_en_la_fachada
  - introducir_lateralmente_la_operacion_real
  - cerrar_la_trampa_antes_de_que_la_victima_entenda
salida:
  - victima_despistada
  - objetivo_real_cumplido
conecta_con:
  - HISTORIA_YELLOW_KID_GEEZIL
  - MN_PARTE_2_CORTINA_DE_HUMO
```

---

## 10. Observancia II: Selasie y Balcha

### 21. `HISTORIA_SELASIE_BALCHA`

```yaml
orden_textual: 21
mnode_id: HISTORIA_SELASIE_BALCHA
tipo_de_unidad: historia_ancla_positiva_de_cortina_de_humo
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Haile Selasie distrae a Balcha con deferencia, banquete y apariencia de sumisión,
  mientras desarma su ejército a distancia y lo deja sin opciones.
rol_operativo: mostrar_cortina_de_humo_con_victima_desconfiada
estructura_interna:
  sujeto_estrategico: Haile_Selasie
  adversario: Balcha_de_Sidamo
  objetivo_real:
    - neutralizar_a_Balcha
    - unificar_poder_en_Etiopia
  fachada_visible:
    - banquete_en_su_honor
    - cortesía
    - deferencia
    - permiso_para_llevar_guardia_armada
    - loas_a_Balcha
  accion_real_oculta:
    - ejército_aliado_rodea_campamento
    - compra_armas_de_los_soldados_de_Balcha
    - dispersa_sus_fuerzas
  resultado:
    - Balcha_queda_sin_ejercito
    - caminos_bloqueados
    - rendicion
    - retiro_al_monasterio
funcion_local_en_el_texto:
  - mostrar que incluso una víctima desconfiada puede ser engañada
  - demostrar que aplacar temores en un área oculta la acción en otra
conecta_con:
  - DIS_MOLDE_CORTINA_DE_HUMO
  - PR_CONTROL_APARENTE_OCULTA_GOLPE_REAL
  - MET_APLACAR_TEMOR_EN_UN_AREA
```

---

### 22. `PR_CONTROL_APARENTE_OCULTA_GOLPE_REAL`

```yaml
orden_textual: 22
mnode_id: PR_CONTROL_APARENTE_OCULTA_GOLPE_REAL
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Si la víctima cree que controla el punto que teme, deja de mirar la zona donde ocurre
  la verdadera operación.
rol_operativo: explicar_el_engaño_de_Selasie
premisas:
  - Balcha temía una trampa en el banquete
  - Selasie permitió que llevara guardia armada
  - Balcha creyó neutralizado el riesgo visible
  - la operación real ocurrió en su campamento
conclusion:
  - aplacar la desconfianza en un área puede cegar a la víctima en otra
funcion_local_en_el_texto:
  - interpretar el caso Selasie
  - formular una regla sobre paranoicos y desconfiados
conecta_con:
  - HISTORIA_SELASIE_BALCHA
  - MET_APLACAR_TEMOR_EN_UN_AREA
```

---

### 23. `MET_APLACAR_TEMOR_EN_UN_AREA`

```yaml
orden_textual: 23
mnode_id: MET_APLACAR_TEMOR_EN_UN_AREA
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Gane la confianza de una persona desconfiada en un área visible para impedir que vea
  la operación real en otra zona.
rol_operativo: convertir_Selasie_en_procedimiento
entrada:
  - adversario_desconfiado
  - temor_identificado
  - operacion_real_oculta
operaciones:
  - permitirle_controlar_el_punto_que_teme
  - fingir_deferencia
  - darle_sensacion_de_dominar_la_situacion
  - actuar_en_otra_area_no_observada
salida:
  - adversario_confiado_en_el_punto_equivocado
  - ataque_real_no_detectado
conecta_con:
  - HISTORIA_SELASIE_BALCHA
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 24. `FORM_BALCHA_RATON_LEON`

```yaml
orden_textual: 24
mnode_id: FORM_BALCHA_RATON_LEON
tipo_de_unidad: cita_terminal_de_caso
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Se escurre sigilosamente como un ratón, pero tiene las mandíbulas de un león."
formulacion: >
  Selasie combina apariencia débil y sigilosa con capacidad de golpe decisivo.
rol_operativo: condensar_la_estructura_del_caso_Selasie
funcion_local_en_el_texto:
  - cerrar el caso con una imagen memorable
  - mostrar contraste entre apariencia y poder real
conecta_con:
  - HISTORIA_SELASIE_BALCHA
  - MN_PARTE_2_CORTINA_DE_HUMO
```

---

## 11. Claves para alcanzar el poder — segunda parte

### 25. `MN_ATENCION_UNICA`

```yaml
orden_textual: 25
mnode_id: MN_ATENCION_UNICA
tipo_de_unidad: formulacion_psicologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La gente sólo puede centrar su atención en una cosa a la vez; por eso una fachada
  uniforme puede ocultar una intención simultánea.
rol_operativo: fundamentar_psicologicamente_la_cortina_de_humo
funcion_local_en_el_texto:
  - explicar por qué la cortina de humo funciona
  - conectar distracción, confusión y limitación atencional
conecta_con:
  - DIS_MOLDE_CORTINA_DE_HUMO
  - MET_FACHADA_FAMILIAR
```

---

### 26. `MET_CARA_DE_POQUER`

```yaml
orden_textual: 26
mnode_id: MET_CARA_DE_POQUER
tipo_de_unidad: metodo_de_fachada_neutra
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Una expresión facial inofensiva, hermética o aburrida puede reducir al mínimo
  las interpretaciones ajenas y ocultar intenciones.
rol_operativo: convertir_cortina_de_humo_en_control_expresivo
instancias:
  - Franklin_D_Roosevelt
  - James_Rothschild
  - Talleyrand
  - Henry_Kissinger
  - jugador_de_poquer
funcion_local_en_el_texto:
  - mostrar la forma más simple de cortina de humo
  - conectar poder con indescifrabilidad expresiva
conecta_con:
  - MN_ATENCION_UNICA
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 27. `MET_GESTO_NOBLE_COMO_CORTINA`

```yaml
orden_textual: 27
mnode_id: MET_GESTO_NOBLE_COMO_CORTINA
tipo_de_unidad: metodo_de_fachada_moral
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Un gesto noble puede ocultar intereses prácticos porque la gente desea creer
  en la generosidad aparente.
rol_operativo: transformar_la_moralidad_visible_en_cortina_de_humo
funcion_local_en_el_texto:
  - mostrar otro nivel de aplicación de la cortina de humo
  - preparar el caso Duveen
conecta_con:
  - HISTORIA_DUVEEN_MUSEO_NACIONAL
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 28. `HISTORIA_DUVEEN_MUSEO_NACIONAL`

```yaml
orden_textual: 28
mnode_id: HISTORIA_DUVEEN_MUSEO_NACIONAL
tipo_de_unidad: ejemplo_de_gesto_noble_como_cortina
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Duveen usa el Museo Nacional como fachada noble que permite a sus clientes reducir impuestos,
  liberar espacio, disminuir oferta de cuadros y elevar precios, todo bajo apariencia de beneficencia.
rol_operativo: ejemplificar_cortina_de_humo_moral
estructura_interna:
  fachada: donacion_generosa_al_museo
  intereses_ocultos:
    - eludir_impuestos
    - liberar_espacio_para_nuevas_adquisiciones
    - reducir_cuadros_en_circulacion
    - elevar_precios
  resultado_visible: benefactores_publicos
funcion_local_en_el_texto:
  - mostrar que un gesto noble puede cubrir intereses económicos
conecta_con:
  - MET_GESTO_NOBLE_COMO_CORTINA
```

---

### 29. `MET_ESQUEMA_PREVISIBLE`

```yaml
orden_textual: 29
mnode_id: MET_ESQUEMA_PREVISIBLE
tipo_de_unidad: metodo_de_cortina_por_patron
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Establecer una serie de acciones repetidas induce a la víctima a creer que el futuro
  seguirá el mismo esquema, lo cual permite sorprenderla cuando el objetivo real cambia.
rol_operativo: convertir_previsibilidad_en_arma
funcion_local_en_el_texto:
  - introducir una cortina de humo basada en repetición de patrón
  - preparar el caso Jay Gould
conecta_con:
  - HISTORIA_JAY_GOULD_WESTERN_UNION
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

### 30. `HISTORIA_JAY_GOULD_WESTERN_UNION`

```yaml
orden_textual: 30
mnode_id: HISTORIA_JAY_GOULD_WESTERN_UNION
tipo_de_unidad: ejemplo_de_esquema_previsible
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Jay Gould repite varias veces el patrón de crear empresas competidoras para ser comprado,
  hasta que Western Union cree conocer su objetivo y no advierte que ahora busca tomar el control total.
rol_operativo: mostrar_engano_por_esquema_repetido
estructura_interna:
  patron_inicial:
    - Gould_crea_empresa_competidora
    - Western_Union_la_compra
    - Western_Union_cree_eliminar_amenaza
  repeticion:
    - el_patron_se_repite
  golpe_real:
    - adquisicion_agresiva
    - control_absoluto_de_Western_Union
funcion_local_en_el_texto:
  - demostrar que la previsibilidad fabricada puede ocultar una intención distinta
conecta_con:
  - MET_ESQUEMA_PREVISIBLE
```

---

### 31. `MET_FUSION_CON_ENTORNO`

```yaml
orden_textual: 31
mnode_id: MET_FUSION_CON_ENTORNO
tipo_de_unidad: metodo_de_cortina_por_apariencia_grupal
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Fusionarse con el entorno hace que los demás confundan apariencia de pertenencia
  con pertenencia real, reduciendo sospechas.
rol_operativo: explotar_confusion_apariencia_realidad
funcion_local_en_el_texto:
  - mostrar una cortina de humo basada en normalidad social
  - preparar el ejemplo de espionaje
conecta_con:
  - HISTORIA_ESPIAS_BRITANICOS_GUERRA_FRIA
  - MN_APARIENCIAS_CREIDAS_COMO_REALIDAD
```

---

### 32. `HISTORIA_ESPIAS_BRITANICOS_GUERRA_FRIA`

```yaml
orden_textual: 32
mnode_id: HISTORIA_ESPIAS_BRITANICOS_GUERRA_FRIA
tipo_de_unidad: ejemplo_de_fusion_con_entorno
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Funcionarios británicos pudieron pasar información secreta a la Unión Soviética porque parecían
  miembros decentes y perfectamente adaptados a su entorno social.
rol_operativo: ejemplificar_cortina_de_humo_por_pertenencia_aparente
estructura_interna:
  fachada:
    - tipos_decentes
    - mejores_escuelas
    - adecuacion_al_entorno
  accion_oculta:
    - espionaje
    - paso_de_informacion_secreta
  razon_de_no_deteccion:
    - apariencia_de_pertenencia_social
funcion_local_en_el_texto:
  - mostrar que pasar inadvertido puede ser la mejor protección
conecta_con:
  - MET_FUSION_CON_ENTORNO
```

---

### 33. `MN_INDESCIFRABILIDAD_COMO_PODER`

```yaml
orden_textual: 33
mnode_id: MN_INDESCIFRABILIDAD_COMO_PODER
tipo_de_unidad: formulacion_practica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Apagar los colores brillantes, usar una máscara anodina y volverse indescifrable
  puede atraer a la gente y producir apariencia de poder.
rol_operativo: condensar_clave_practica_de_la_cortina_de_humo
funcion_local_en_el_texto:
  - cerrar las claves de la cortina de humo
  - preparar imagen de la piel de oveja
conecta_con:
  - MET_CARA_DE_POQUER
  - MET_FUSION_CON_ENTORNO
  - MN_IMAGEN_PIEL_DE_OVEJA
```

---

### 34. `MN_IMAGEN_PIEL_DE_OVEJA`

```yaml
orden_textual: 34
mnode_id: MN_IMAGEN_PIEL_DE_OVEJA
tipo_de_unidad: imagen_metaforica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Cubierto con una piel de oveja, un zorro puede entrar en el gallinero sin ser detectado."
formulacion: >
  Una apariencia dócil e inofensiva permite que una intención depredadora entre en un espacio vulnerable
  sin ser reconocida.
rol_operativo: condensar_metaforicamente_la_cortina_de_humo
estructura_interna:
  zorro: sujeto_estrategico_dep_recador
  piel_de_oveja: fachada_inofensiva
  gallinero: espacio_de_victimas
  efecto: no_deteccion
funcion_local_en_el_texto:
  - convertir la segunda parte en imagen memorable
conecta_con:
  - DIS_MOLDE_CORTINA_DE_HUMO
  - MN_INDESCIFRABILIDAD_COMO_PODER
```

---

### 35. `FORM_AUTORIDAD_NINON_GENERAL`

```yaml
orden_textual: 35
mnode_id: FORM_AUTORIDAD_NINON_GENERAL
tipo_de_unidad: cita_autoritativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Obtenga la victoria antes de declarar la guerra."
formulacion: >
  El propósito y los progresos deben ocultarse hasta que ya no haya forma de oponerse;
  la victoria debe estar asegurada antes de revelar la guerra.
rol_operativo: legitimar_la_ley_con_imagen_militar
funcion_local_en_el_texto:
  - cerrar la sección de cortina de humo
  - volver explícito el principio de ocultamiento hasta el punto irreversible
conecta_con:
  - MN_TITULO_LEY_3
  - MN_PARTE_2_CORTINA_DE_HUMO
```

---

## 12. Invalidación

### 36. `MN_INVALIDACION_FAMA_DE_ESTAFADOR`

```yaml
orden_textual: 36
mnode_id: MN_INVALIDACION_FAMA_DE_ESTAFADOR
tipo_de_unidad: invalidacion_o_excepcion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Si alguien ya tiene fama de estafador, las cortinas de humo y la falsa inocencia dejan de funcionar;
  conviene entonces sincerarse y actuar como rufián honesto o arrepentido.
rol_operativo: delimitar_condiciones_de_aplicacion_de_la_ley
funcion_local_en_el_texto:
  - evitar aplicación absoluta de la ley
  - introducir una estrategia alternativa cuando el disimulo ya no es creíble
estructura_interna:
  condicion_de_falla:
    - fama_de_estafador
    - exitos_previos_revelan_tretas
    - ingenuidad_fingida_parece_hipocresia
  estrategia_alternativa:
    - sincerarse
    - actuar_de_frente
    - presentarse_como_rufian_honesto
conecta_con:
  - HISTORIA_BARNUM_RUFIAN_HONESTO
  - MN_TITULO_LEY_3
```

---

### 37. `HISTORIA_BARNUM_RUFIAN_HONESTO`

```yaml
orden_textual: 37
mnode_id: HISTORIA_BARNUM_RUFIAN_HONESTO
tipo_de_unidad: ejemplo_de_invalidacion
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  P. T. Barnum aprende a usar su fama de estafador; al asumir el engaño como parte de su figura,
  el público se divierte y lo acepta en lugar de sentirse traicionado.
rol_operativo: ejemplificar_estrategia_alternativa_cuando_el_disimulo_falla
estructura_interna:
  sujeto: P_T_Barnum
  problema:
    - fama_de_fraude
    - dificultad_para_parecer_ingenuo
  estrategia:
    - asumir_farsa
    - convertir_engano_en_espectaculo
    - confesar_tretas
  resultado:
    - publico_lo_ama_por_su_franqueza
    - puede_seguir_usando_estratagemas
funcion_local_en_el_texto:
  - mostrar que la ley tiene una excepción estratégica
conecta_con:
  - MN_INVALIDACION_FAMA_DE_ESTAFADOR
```

---

### 38. `MN_INVALIDACION_GESTO_COLORIDO`

```yaml
orden_textual: 38
mnode_id: MN_INVALIDACION_GESTO_COLORIDO
tipo_de_unidad: invalidacion_o_excepcion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Aunque la fachada inofensiva suele ser más estable, en ocasiones un gesto colorido,
  sospechoso o espectacular puede ser la distracción perfecta.
rol_operativo: delimitar_cuando_la_cortina_llamativa_funciona
funcion_local_en_el_texto:
  - introducir una segunda excepción a la fachada neutra
  - distinguir entre ocultamiento por aburrimiento y ocultamiento por espectáculo
conecta_con:
  - HISTORIA_CHARLATANES_ESPECTACULO
  - MN_INVALIDACION_FAMA_DE_ESTAFADOR
```

---

### 39. `HISTORIA_CHARLATANES_ESPECTACULO`

```yaml
orden_textual: 39
mnode_id: HISTORIA_CHARLATANES_ESPECTACULO
tipo_de_unidad: ejemplo_de_distraccion_colorida
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Los charlatanes de feria usan humor, espectáculo, payasos y demostraciones como distracción,
  mientras su verdadero negocio es vender elixires y pociones.
rol_operativo: ejemplificar_cortina_de_humo_colorida
estructura_interna:
  fachada_visible:
    - humor
    - diversion
    - espectaculo
    - payasos
    - saltimbanquis
    - demostraciones
  negocio_real:
    - venta_de_elixires
    - venta_de_pociones
  limitacion:
    - el_publico_se_cansa
    - se_corre_la_voz
    - hay_que_moverse_rapido
funcion_local_en_el_texto:
  - mostrar una excepción útil pero limitada
  - cerrar el capítulo distinguiendo fachada estable y espectáculo temporal
conecta_con:
  - MN_INVALIDACION_GESTO_COLORIDO
  - DIS_MOLDE_CORTINA_DE_HUMO
```

---

## 13. Moldes estructurales detectados

### 13.1. `DIS_MOLDE_FALSA_PISTA`

```yaml
molde:
  mnode_id: DIS_MOLDE_FALSA_PISTA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    El sujeto estratégico oculta el objetivo real mediante una señal visible falsa
    que captura la interpretación del receptor.
  estructura:
    sujeto_estrategico:
    objetivo_real:
    receptor:
    pista_visible:
    interpretacion_erronea:
    resultado:
  instancias:
    - HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
    - HISTORIA_BISMARCK_OBSERVANCIA
    - HISTORIA_MARLBOROUGH_FUERTE_FRANCES
    - MET_FALSA_FRANQUEZA
```

### 13.2. `DIS_MOLDE_CORTINA_DE_HUMO`

```yaml
molde:
  mnode_id: DIS_MOLDE_CORTINA_DE_HUMO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    El sujeto estratégico crea una fachada familiar, neutra, noble, previsible o integrada
    que oculta la operación real.
  estructura:
    sujeto_estrategico:
    victima:
    fachada_visible:
    accion_real_oculta:
    mecanismo_de_distraccion:
    resultado:
  instancias:
    - HISTORIA_YELLOW_KID_GEEZIL
    - HISTORIA_SELASIE_BALCHA
    - HISTORIA_DUVEEN_MUSEO_NACIONAL
    - HISTORIA_JAY_GOULD_WESTERN_UNION
    - HISTORIA_ESPIAS_BRITANICOS_GUERRA_FRIA
```

### 13.3. `DIS_MOLDE_REVELACION_PREMATURA`

```yaml
molde:
  mnode_id: DIS_MOLDE_REVELACION_PREMATURA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    La estrategia funciona mientras la intención permanece velada; fracasa cuando el objetivo real
    se revela antes de que el resultado esté asegurado.
  estructura:
    sujeto_estrategico:
    objetivo_real:
    fase_de_misterio:
    revelacion:
    reinterpretacion_del_receptor:
    fracaso:
  instancia_principal:
    - HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
```

### 13.4. `DIS_MOLDE_INVALIDACION_POR_REPUTACION`

```yaml
molde:
  mnode_id: DIS_MOLDE_INVALIDACION_POR_REPUTACION
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Cuando el sujeto ya es conocido como engañador, fingir inocencia deja de ser creíble;
    entonces debe convertir su fama de engañador en parte de su fachada.
  estructura:
    sujeto_con_reputacion:
    intento_de_fingir_inocencia:
    riesgo_de_hipocresia:
    estrategia_alternativa:
    resultado:
  instancia_principal:
    - HISTORIA_BARNUM_RUFIAN_HONESTO
```

---

## 14. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: MN_TITULO_LEY_3
    tipo: desarrolla_en
    destino: MN_CRITERIO_LEY_3

  - origen: MN_CRITERIO_LEY_3
    tipo: se_bifurca_en
    destino: MN_PARTE_1_FALSOS_OBJETOS

  - origen: MN_CRITERIO_LEY_3
    tipo: se_bifurca_en
    destino: MN_PARTE_2_CORTINA_DE_HUMO

  - origen: MN_PARTE_1_FALSOS_OBJETOS
    tipo: se_modela_por
    destino: DIS_MOLDE_FALSA_PISTA

  - origen: HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
    tipo: transgrede
    destino: MN_PARTE_1_FALSOS_OBJETOS

  - origen: HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
    tipo: soporta
    destino: PR_REVELAR_INTENCION_ROMPE_ENCANTO

  - origen: PR_REVELAR_INTENCION_ROMPE_ENCANTO
    tipo: justifica
    destino: MN_TITULO_LEY_3

  - origen: HISTORIA_BISMARCK_OBSERVANCIA
    tipo: observa
    destino: MN_PARTE_1_FALSOS_OBJETOS

  - origen: HISTORIA_BISMARCK_OBSERVANCIA
    tipo: instancia_de
    destino: DIS_MOLDE_FALSA_PISTA

  - origen: MET_APOYAR_CAUSA_OPUESTA
    tipo: deriva_de
    destino: HISTORIA_BISMARCK_OBSERVANCIA

  - origen: MN_APARIENCIAS_CREIDAS_COMO_REALIDAD
    tipo: fundamenta
    destino: DIS_MOLDE_FALSA_PISTA

  - origen: HISTORIA_MARLBOROUGH_FUERTE_FRANCES
    tipo: instancia_de
    destino: DIS_MOLDE_FALSA_PISTA

  - origen: MET_FALSA_FRANQUEZA
    tipo: subtecnica_de
    destino: DIS_MOLDE_FALSA_PISTA

  - origen: MN_PARTE_2_CORTINA_DE_HUMO
    tipo: se_modela_por
    destino: DIS_MOLDE_CORTINA_DE_HUMO

  - origen: HISTORIA_YELLOW_KID_GEEZIL
    tipo: instancia_de
    destino: DIS_MOLDE_CORTINA_DE_HUMO

  - origen: HISTORIA_YELLOW_KID_GEEZIL
    tipo: soporta
    destino: PR_ATENCION_OCUPADA_NO_DETECTA_TRAMPA

  - origen: HISTORIA_SELASIE_BALCHA
    tipo: instancia_de
    destino: DIS_MOLDE_CORTINA_DE_HUMO

  - origen: HISTORIA_SELASIE_BALCHA
    tipo: soporta
    destino: PR_CONTROL_APARENTE_OCULTA_GOLPE_REAL

  - origen: MN_ATENCION_UNICA
    tipo: fundamenta
    destino: DIS_MOLDE_CORTINA_DE_HUMO

  - origen: MET_CARA_DE_POQUER
    tipo: subtecnica_de
    destino: DIS_MOLDE_CORTINA_DE_HUMO

  - origen: HISTORIA_DUVEEN_MUSEO_NACIONAL
    tipo: instancia_de
    destino: MET_GESTO_NOBLE_COMO_CORTINA

  - origen: HISTORIA_JAY_GOULD_WESTERN_UNION
    tipo: instancia_de
    destino: MET_ESQUEMA_PREVISIBLE

  - origen: HISTORIA_ESPIAS_BRITANICOS_GUERRA_FRIA
    tipo: instancia_de
    destino: MET_FUSION_CON_ENTORNO

  - origen: MN_IMAGEN_PIEL_DE_OVEJA
    tipo: condensa_metaforicamente
    destino: DIS_MOLDE_CORTINA_DE_HUMO

  - origen: FORM_AUTORIDAD_NINON_GENERAL
    tipo: legitima
    destino: MN_TITULO_LEY_3

  - origen: MN_INVALIDACION_FAMA_DE_ESTAFADOR
    tipo: delimita
    destino: MN_TITULO_LEY_3

  - origen: HISTORIA_BARNUM_RUFIAN_HONESTO
    tipo: instancia_de
    destino: MN_INVALIDACION_FAMA_DE_ESTAFADOR

  - origen: HISTORIA_CHARLATANES_ESPECTACULO
    tipo: instancia_de
    destino: MN_INVALIDACION_GESTO_COLORIDO
```

---

## 15. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: formular regla, criterio, fundamentos psicológicos, imágenes e invalidaciones
    nodos:
      - MN_TITULO_LEY_3
      - MN_CRITERIO_LEY_3
      - MN_PARTE_1_FALSOS_OBJETOS
      - MN_PARTE_2_CORTINA_DE_HUMO
      - MN_SINCERIDAD_COMO_RIESGO
      - MN_APARIENCIAS_CREIDAS_COMO_REALIDAD
      - MN_ATENCION_UNICA
      - MN_INDESCIFRABILIDAD_COMO_PODER
      - MN_IMAGEN_PIEL_DE_OVEJA
      - MN_INVALIDACION_FAMA_DE_ESTAFADOR
      - MN_INVALIDACION_GESTO_COLORIDO

  FAM-Patrón-de-razonamiento:
    funcion: explicar por qué revelar intenciones fracasa y por qué pistas falsas/cortinas de humo funcionan
    nodos:
      - PR_REVELAR_INTENCION_ROMPE_ENCANTO
      - PR_OCULTAR_OBJETIVO_MEDIANTE_SENAL_CONTRARIA
      - PR_ATENCION_OCUPADA_NO_DETECTA_TRAMPA
      - PR_CONTROL_APARENTE_OCULTA_GOLPE_REAL

  FAM-Diseño:
    funcion: organizar moldes estratégicos de falsa pista, cortina de humo e invalidación por reputación
    nodos:
      - DIS_MOLDE_FALSA_PISTA
      - DIS_MOLDE_CORTINA_DE_HUMO
      - DIS_MOLDE_REVELACION_PREMATURA
      - DIS_MOLDE_INVALIDACION_POR_REPUTACION

  FAM-Método:
    funcion: convertir la ley en técnicas aplicables
    nodos:
      - MET_SEDUCCION_POR_AMBIGUEDAD
      - MET_APOYAR_CAUSA_OPUESTA
      - MET_PRESENTAR_OBJETO_FALSO_DE_DESEO
      - MET_FALSA_FRANQUEZA
      - MET_FACHADA_FAMILIAR
      - MET_APLACAR_TEMOR_EN_UN_AREA
      - MET_CARA_DE_POQUER
      - MET_GESTO_NOBLE_COMO_CORTINA
      - MET_ESQUEMA_PREVISIBLE
      - MET_FUSION_CON_ENTORNO

  formas_compuestas:
    funcion: historias ancla y ejemplos que manifiestan los moldes
    nodos:
      - HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
      - HISTORIA_BISMARCK_OBSERVANCIA
      - HISTORIA_MARLBOROUGH_FUERTE_FRANCES
      - HISTORIA_YELLOW_KID_GEEZIL
      - HISTORIA_SELASIE_BALCHA
      - HISTORIA_DUVEEN_MUSEO_NACIONAL
      - HISTORIA_JAY_GOULD_WESTERN_UNION
      - HISTORIA_ESPIAS_BRITANICOS_GUERRA_FRIA
      - HISTORIA_BARNUM_RUFIAN_HONESTO
      - HISTORIA_CHARLATANES_ESPECTACULO
```

---

## 16. Síntesis estructural del texto

```txt
LEY:
  Disimule sus intenciones.

CRITERIO:
  Si los demás ignoran lo que usted quiere, no pueden preparar defensa.

PRIMERA TÉCNICA:
  use falsos objetos de deseo y pistas falsas.

TRANSGRESIÓN:
  el marqués revela su amor y destruye la seducción.

OBSERVANCIA:
  Bismarck finge pacifismo para ganar poder y preparar su verdadero objetivo.

CLAVES:
  la sinceridad vuelve predecible;
  la gente cree en apariencias;
  un señuelo visible oculta la intención real;
  la falsa franqueza es un arma.

SEGUNDA TÉCNICA:
  use una cortina de humo.

OBSERVANCIA I:
  Yellow Kid usa una fachada familiar de negocio para ocultar una estafa.

OBSERVANCIA II:
  Selasie usa deferencia y banquete para ocultar el desarme del ejército de Balcha.

CLAVES:
  la atención se centra en una cosa;
  fachada neutra, gesto noble, esquema previsible y fusión con el entorno pueden ocultar intenciones.

IMAGEN:
  piel de oveja: zorro cubierto de apariencia inofensiva.

AUTORIDAD:
  obtenga la victoria antes de declarar la guerra.

INVALIDACIÓN:
  si ya tiene fama de estafador, use la franqueza o el espectáculo como estrategia alternativa.
```

---

## 17. Fórmula estructural compacta

```txt
intencion_revelada
  → defensa_del_otro
    → fracaso_estrategico

intencion_oculta
  + pista_falsa
    → atencion_desviada
      → defensa_equivocada_o_tardia
        → ventaja_estrategica

intencion_oculta
  + cortina_de_humo
    → atencion_adormecida
      → operacion_real_no_detectada
        → golpe_consumado
```

---

## 18. Observaciones para pasos posteriores

```yaml
observaciones_para_pasos_posteriores:
  posible_modelo_de_juego:
    descripcion: >
      El texto puede modelarse como un juego estratégico de información asimétrica:
      un sujeto A posee intención real, el sujeto B intenta inferirla y defenderse,
      y A manipula señales visibles para controlar la inferencia de B.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_modelo_de_estado_del_receptor:
    descripcion: >
      El receptor puede estar en estados de sospecha, confianza, confusión,
      absorción atencional o falsa seguridad. Cada táctica mueve al receptor
      hacia un estado conveniente para el sujeto estratégico.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_grafo_conceptual:
    nodo_central: MN_TITULO_LEY_3
    ramas:
      - falsos_objetos_de_deseo
      - transgresion_marques
      - observancia_Bismarck
      - claves_de_pistas_falsas
      - cortina_de_humo
      - Yellow_Kid
      - Selasie
      - tecnicas_de_cortina
      - imagen_piel_de_oveja
      - invalidacion
    estatus: grafo_posterior

  posible_construccion_conceptual_normalizada:
    descripcion: >
      Este procesamiento lineal puede servir como base para una construcción conceptual
      donde los mNodes se organicen alrededor de información asimétrica, manipulación de señales,
      limitaciones atencionales y control estratégico de apariencias.
    estatus: producto_posterior
```

---

## 19. Validación del paso 1

```txt
[✓] Se identificó el texto raíz.
[✓] Se preservó el orden general de aparición.
[✓] Se separaron ley, criterio, partes, transgresión, observancias, claves, imagen e invalidación.
[✓] Se detectaron moldes estructurales.
[✓] Se separaron instancias de moldes.
[✓] Se registraron inferencias locales.
[✓] Se identificaron métodos derivados.
[✓] Se marcaron formas compuestas como historias y ejemplos.
[✓] Se dejaron modelos analíticos posteriores como observaciones, sin desarrollarlos como si fueran textuales.
```

---

## 20. Resultado del procesamiento

El texto queda estructurado como una secuencia de mNodes que puede alimentar análisis posteriores:

```txt
MN_TITULO_LEY_3
  → MN_CRITERIO_LEY_3
    → MN_PARTE_1_FALSOS_OBJETOS
      → HISTORIA_MARQUES_SEVIGNE_TRANSGRESION
        → PR_REVELAR_INTENCION_ROMPE_ENCANTO
      → HISTORIA_BISMARCK_OBSERVANCIA
        → MET_APOYAR_CAUSA_OPUESTA
      → MET_PRESENTAR_OBJETO_FALSO_DE_DESEO
      → MET_FALSA_FRANQUEZA
    → MN_PARTE_2_CORTINA_DE_HUMO
      → HISTORIA_YELLOW_KID_GEEZIL
        → PR_ATENCION_OCUPADA_NO_DETECTA_TRAMPA
      → HISTORIA_SELASIE_BALCHA
        → PR_CONTROL_APARENTE_OCULTA_GOLPE_REAL
      → MET_CARA_DE_POQUER
      → MET_GESTO_NOBLE_COMO_CORTINA
      → MET_ESQUEMA_PREVISIBLE
      → MET_FUSION_CON_ENTORNO
      → MN_IMAGEN_PIEL_DE_OVEJA
    → MN_INVALIDACION_FAMA_DE_ESTAFADOR
      → HISTORIA_BARNUM_RUFIAN_HONESTO
      → MN_INVALIDACION_GESTO_COLORIDO
```

La frase estructural del texto sería:

```txt
Controle lo que los demás creen que usted quiere;
si no pueden ver su objetivo real, no pueden defenderse a tiempo.
```
