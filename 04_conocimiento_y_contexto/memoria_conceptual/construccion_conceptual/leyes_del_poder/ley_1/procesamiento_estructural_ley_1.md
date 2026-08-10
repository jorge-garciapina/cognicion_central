https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0922de-0c44-83e8-8138-ce22cb6a40e9

# Procesamiento estructural — Ley N.º 1: Nunca le haga sombra a su amo

**Tipo de documento:** `paso_1_procesamiento_estructural`  
**Texto procesado:** Ley N.º 1, “Nunca le haga sombra a su amo”  
**Fuente visible en imágenes:** _Las 48 leyes del poder_  
**Propósito:** estructurar linealmente las unidades cognitivas contenidas en el texto, respetando el orden de aparición, sin convertir todavía la lectura en un modelo analítico posterior completo.

---

## 0. Principio rector de este procesamiento

Este documento realiza un **primer procesamiento estructural** del texto. Su objetivo no es resumir el capítulo ni construir todavía una interpretación profunda, sino transformar el texto en una secuencia organizada de estructuras cognitivas detectadas.

La operación correcta no es:

```txt
texto_en_crudo
  → resumen
  → ideas principales
```

La operación correcta para este paso es:

```txt
texto_en_crudo
  → lectura_lineal_de_estructuras_cognitivas
    → mNodes_candidatos
      → relaciones_locales
        → base_para_analisis_posterior
```

El resultado de este paso debe poder alimentar fases posteriores como:

```txt
lectura_por_familias_cognitivas
modelo_analitico_derivado
grafo_de_mnodes
construccion_conceptual_normalizada
realizaciones_codominiales
```

---

## 1. Nodo raíz

```yaml
texto_raiz:
  texto_id: TEXTO_LEY_1_NUNCA_HAGA_SOMBRA_A_SU_AMO
  titulo: "Ley N.º 1: Nunca le haga sombra a su amo"
  fuente_visible: "Las 48 leyes del poder"
  tipo_de_fuente: capitulo_de_regla_estrategica
  objetivo_del_paso: >
    Estructurar linealmente las unidades cognitivas contenidas en el texto,
    respetando el orden de aparición, sin convertir todavía la lectura en un
    modelo analítico posterior.
```

---

## 2. Secuencia lineal de mNodes detectados

La secuencia respeta el orden aproximado de aparición de las estructuras en el texto.

---

### 00. `MN_TITULO_LEY_1`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_LEY_1
tipo_de_unidad: regla_titular
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Nunca le haga sombra a su amo"
formulacion: >
  La presencia, talento o brillo de una persona subordinada no debe eclipsar
  la sensación de superioridad de quien ocupa una posición jerárquica superior.
rol_operativo: condensar_regla_en_formulacion_memorable
funcion_local_en_el_texto:
  - presentar la ley de manera directa
  - fijar el eje interpretativo de todo el capítulo
  - introducir una relación jerárquica amo/subordinado
estructura_interna:
  sujeto_superior: amo
  sujeto_subordinado: servidor / cortesano / dependiente / aspirante
  riesgo: hacer_sombra
  consecuencia_implicita: despertar_inseguridad_en_el_superior
conecta_con:
  - MN_CRITERIO_LEY_1
  - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
  - MET_HACER_BRILLAR_AL_AMO
```

Este nodo es una `FAM-Idea` porque estabiliza la distinción central: no basta con ser capaz; hay que cuidar cómo la capacidad afecta la autoimagen del superior.

---

### 01. `MN_CRITERIO_LEY_1`

```yaml
orden_textual: 01
mnode_id: MN_CRITERIO_LEY_1
tipo_de_unidad: criterio_general
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  Esfuércese siempre por lograr que quienes están jerárquicamente por encima
  de usted se sientan cómodos con su sensación de superioridad.
formulacion: >
  Quienes están por encima de uno deben sentirse seguros en su superioridad;
  exhibir demasiado talento puede generar temor, inseguridad y reacción contraria.
rol_operativo: formular_principio_operativo_de_la_ley
funcion_local_en_el_texto:
  - explicar el sentido práctico del título
  - definir el peligro de impresionar demasiado al superior
  - presentar la alternativa: hacer que el amo parezca más brillante
estructura_interna:
  condicion:
    - existe_jerarquia
    - hay_un_superior
    - hay_un_subordinado_con_talentos
  peligro:
    - deseo_de_complacer
    - deseo_de_impresionar
    - ostentacion_de_talento
  efecto_no_deseado:
    - temor
    - inseguridad
    - resentimiento
  accion_recomendada:
    - hacer_parecer_al_amo_mas_brillante
conecta_con:
  - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
  - DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
```

Aquí aparece la estructura general de toda la ley:

```txt
talento_subordinado_visible
  → inseguridad_del_superior
    → reaccion_defensiva_del_poder
```

---

## 3. Bloque de transgresión: Fouquet

---

### 02. `HISTORIA_FOUQUET_TRANSGRESION`

```yaml
orden_textual: 02
mnode_id: HISTORIA_FOUQUET_TRANSGRESION
tipo_de_unidad: historia_ancla_negativa
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  Nicolás Fouquet organiza una fiesta espectacular para Luis XIV en Vaux-le-Vicomte.
formulacion: >
  Fouquet intenta honrar e impresionar al rey mediante una fiesta extraordinaria,
  pero termina haciendo visible su propia riqueza, popularidad, gusto y poder,
  provocando inseguridad y resentimiento en Luis XIV.
rol_operativo: mostrar_transgresion_de_la_ley_mediante_caso_extremo
funcion_local_en_el_texto:
  - mostrar qué ocurre cuando el subordinado brilla demasiado
  - presentar una transgresión dramática de la ley
  - introducir la relación entre ostentación, superior herido y caída política
estructura_interna:
  sujeto_subordinado: Nicolas_Fouquet
  superior: Luis_XIV
  intencion_declarada: honrar_al_rey
  accion:
    - organizar_fiesta_espectacular
    - exhibir_riqueza
    - exhibir_buen_gusto
    - reunir_nobleza_y_artistas
    - mostrar_palacio_jardines_comida_teatro_musica_fuegos_artificiales
  efecto_real:
    - el_rey_se_siente_opacado
    - el_rey_se_siente_inseguro
    - el_rey_encuentra_excusa_para_eliminarlo
  consecuencia:
    - Fouquet_es_arrestado
    - Fouquet_es_juzgado
    - Fouquet_termina_en_prision
conecta_con:
  - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
  - PR_INTENCION_POSITIVA_EFECTO_NEGATIVO
  - MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO
```

Este caso es la **historia ancla negativa**. No es simplemente un ejemplo histórico. Es la estructura inicial que muestra la ley violada.

---

### 03. `DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO`

```yaml
orden_textual: 03
mnode_id: DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  Un subordinado intenta agradar o impresionar al superior, pero al exhibir
  demasiado brillo propio provoca inseguridad en él y termina castigado.
rol_operativo: organizar_casos_de_transgresion_de_la_ley
estructura:
  sujeto_subordinado:
  superior:
  intencion_del_subordinado:
  forma_de_ostentacion:
  percepcion_del_superior:
  reaccion_del_superior:
  consecuencia_para_el_subordinado:
invariantes:
  - existe una relación jerárquica
  - el subordinado brilla demasiado ante el superior
  - la acción puede tener intención positiva
  - el superior interpreta el brillo como amenaza o humillación
  - el superior busca forma directa o indirecta de neutralizar al subordinado
dominio_de_variacion:
  - Nicolas Fouquet
  - Astorre Manfredi
  - Sen no Rikyu
criterio_de_validacion:
  - pertenece al molde si el subordinado genera inseguridad en el superior al destacar demasiado
conecta_con:
  - HISTORIA_FOUQUET_TRANSGRESION
  - HISTORIA_ASTORRE_MANFREDI
  - HISTORIA_SEN_NO_RIKYU
```

Este molde será uno de los centros del procesamiento. Aparece primero en Fouquet, pero luego se repite en Manfredi y Rikyu.

---

### 04. `PR_INTENCION_POSITIVA_EFECTO_NEGATIVO`

```yaml
orden_textual: 04
mnode_id: PR_INTENCION_POSITIVA_EFECTO_NEGATIVO
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
formulacion: >
  Una acción destinada a complacer al superior puede producir el efecto contrario
  si lo hace sentirse menos brillante, menos central o menos seguro.
rol_operativo: derivar_contradiccion_estrategica
premisas:
  - Fouquet quería honrar a Luis XIV
  - la fiesta mostraba riqueza, gusto, popularidad y poder de Fouquet
  - Luis XIV quería ser el centro de atención
regla_inferencial:
  - si una acción de homenaje desplaza simbólicamente al superior, el homenaje se convierte en amenaza
conclusion:
  - la ostentación de Fouquet generó su caída
funcion_local_en_el_texto:
  - explicar por qué una intención positiva puede producir resultado negativo
  - preparar la interpretación de la transgresión
conecta_con:
  - HISTORIA_FOUQUET_TRANSGRESION
  - MN_CRITERIO_LEY_1
```

Este nodo es clave porque muestra una lógica recurrente en la ley:

```txt
intencion_de_complacer
  ≠
efecto_de_complacer
```

---

### 05. `MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO`

```yaml
orden_textual: 05
mnode_id: MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO
tipo_de_unidad: idea_psicologico_politica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Luis XIV era orgulloso y arrogante; no soportaba que nadie lo superase en opulencia."
formulacion: >
  El superior inseguro no castiga necesariamente el error objetivo, sino el brillo
  ajeno que hiere su vanidad o desafía su centralidad simbólica.
rol_operativo: explicar_mecanismo_psicologico_del_castigo
funcion_local_en_el_texto:
  - revelar el mecanismo interno de la caída de Fouquet
  - mostrar que el problema no fue solo político o legal
  - conectar vanidad, inseguridad y castigo
estructura_interna:
  superior:
    rasgos:
      - orgullo
      - arrogancia
      - deseo_de_centralidad
      - necesidad_de_superioridad
  amenaza_percibida:
    - opulencia_del_subordinado
    - popularidad_del_subordinado
    - buen_gusto_del_subordinado
    - autonomia_simbolica_del_subordinado
  respuesta:
    - buscar_excusa
    - remover_al_subordinado
    - reemplazarlo_por_alguien_menos_amenazante
conecta_con:
  - HISTORIA_FOUQUET_TRANSGRESION
  - HISTORIA_ASTORRE_MANFREDI
  - HISTORIA_SEN_NO_RIKYU
```

---

### 06. `HISTORIA_COLBERT_REEMPLAZO_NO_AMENAZANTE`

```yaml
orden_textual: 06
mnode_id: HISTORIA_COLBERT_REEMPLAZO_NO_AMENAZANTE
tipo_de_unidad: ejemplo_derivado
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Luis XIV reemplaza a Fouquet por Colbert, presentado como moderado."
formulacion: >
  Un superior puede preferir a un subordinado menos brillante pero menos amenazante
  antes que a un servidor más talentoso que lo opaque.
rol_operativo: reforzar_efecto_del_molde_de_transgresion
funcion_local_en_el_texto:
  - mostrar que el superior no necesariamente premia mayor talento
  - presentar la moderación como menos amenazante que el brillo
  - preparar la recomendación de disimular virtudes
estructura_interna:
  subordinado_eliminado: Fouquet
  rasgo_eliminado: brillo_excesivo / opulencia / popularidad
  sustituto: Colbert
  rasgo_preferido: moderacion / menor_amenaza
conecta_con:
  - MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO
  - MET_DISIMULAR_FORTALEZAS
```

---

## 4. Bloque de observancia: Galileo

---

### 07. `HISTORIA_GALILEO_OBSERVANCIA`

```yaml
orden_textual: 07
mnode_id: HISTORIA_GALILEO_OBSERVANCIA
tipo_de_unidad: historia_ancla_positiva
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Galileo dedica el descubrimiento de las lunas de Júpiter a los Médici."
formulacion: >
  Galileo deja de repartir sus descubrimientos entre varios patronos y convierte
  un descubrimiento científico en gloria simbólica para los Médici, logrando así
  apoyo, cargo y estabilidad.
rol_operativo: mostrar_observancia_exitosa_de_la_ley
funcion_local_en_el_texto:
  - contrastar con Fouquet
  - mostrar cómo hacer brillar al amo produce protección y ascenso
  - convertir la ley en estrategia positiva
estructura_interna:
  sujeto_subordinado: Galileo
  superiores_o_patronos: familia_Medici
  situacion:
    - dependencia_economica
    - necesidad_de_patronazgo
    - descubrimiento_de_lunas_de_Jupiter
  estrategia:
    - no_presentar_el_descubrimiento_como_brillo_propio
    - vincular_el_descubrimiento_al_simbolo_de_los_Medici
    - convertir_a_los_Medici_en_centro_cosmico_del_hallazgo
  resultado:
    - nombramiento_en_la_corte
    - salario
    - estabilidad
    - fin_de_pobreza_y_dependencia_insegura
conecta_con:
  - DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
  - MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR
```

---

### 08. `DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO`

```yaml
orden_textual: 08
mnode_id: DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: >
  El subordinado usa su talento no para exhibirse, sino para hacer que el superior
  parezca más brillante, más glorioso o más central.
rol_operativo: organizar_casos_de_observancia_de_la_ley
estructura:
  sujeto_subordinado:
  talento_o_recurso:
  superior:
  transformacion_simbolica:
  gloria_resultante_para_el_superior:
  beneficio_para_el_subordinado:
invariantes:
  - el subordinado posee un talento o descubrimiento
  - el talento podría hacerlo destacar por sí mismo
  - el subordinado transfiere el brillo simbólico al superior
  - el superior se siente engrandecido, no amenazado
  - el subordinado obtiene protección, favor o ascenso
dominio_de_variacion:
  - Galileo y los Médici
  - cortesano que atribuye ideas al amo
  - subordinado que pide consejo para hacer parecer más sabio al superior
criterio_de_validacion:
  - pertenece al molde si el subordinado convierte su propio valor en gloria percibida del superior
conecta_con:
  - HISTORIA_GALILEO_OBSERVANCIA
  - MET_HACER_BRILLAR_AL_AMO
```

---

### 09. `MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR`

```yaml
orden_textual: 09
mnode_id: MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: >
  Para obtener favor del superior, el subordinado debe traducir sus propios logros
  en símbolos de grandeza del amo.
rol_operativo: convertir_observancia_en_procedimiento
entrada:
  - talento_propio
  - descubrimiento
  - idea_creativa
  - capacidad_superior_a_la_del_amo
operaciones:
  - no_presentar_el_logro_como_victoria_personal
  - vincular_el_logro_con_el_superior
  - atribuir_simbolicamente_el_brillo_al_amo
  - hacer_que_el_amo_parezca_centro_de_la_accion
salida:
  - el_superior_se_siente_engrandecido
  - el_subordinado_gana_favor
  - el_brillo_propio_deja_de_ser_amenaza
funcion_local_en_el_texto:
  - extraer la técnica implícita en Galileo
  - preparar las claves para alcanzar el poder
conecta_con:
  - HISTORIA_GALILEO_OBSERVANCIA
  - MET_HACER_BRILLAR_AL_AMO
```

---

### 10. `PR_GALILEO_GANA_MAS_CON_SIMBOLO_QUE_CON_SUPLICA`

```yaml
orden_textual: 10
mnode_id: PR_GALILEO_GANA_MAS_CON_SIMBOLO_QUE_CON_SUPLICA
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Galileo ganó más con una sola estrategia simbólica que en años de súplicas,
  porque entendió que los amos desean brillar más que todos.
rol_operativo: justificar_eficacia_del_molde_positivo
premisas:
  - Galileo antes dependía de regalos dispersos y poco rentables
  - luego dedicó su descubrimiento completo a los Médici
  - los Médici recibieron gloria cósmica y simbólica
regla_inferencial:
  - si el talento del subordinado engrandece al superior, el superior recompensa el talento
conclusion:
  - hacer brillar al amo es más eficaz que exhibir el propio mérito directamente
funcion_local_en_el_texto:
  - explicar por qué Galileo tuvo éxito
  - contrastar con Fouquet
conecta_con:
  - DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
  - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
```

---

## 5. Claves para alcanzar el poder

---

### 11. `MN_TODOS_TENEMOS_INSEGURIDADES`

```yaml
orden_textual: 11
mnode_id: MN_TODOS_TENEMOS_INSEGURIDADES
tipo_de_unidad: formulacion_antropologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Todos tenemos inseguridades..."
formulacion: >
  Toda interacción de poder está atravesada por inseguridades, resentimientos,
  envidia y deseo de superioridad.
rol_operativo: fundamentar_psicologicamente_la_ley
funcion_local_en_el_texto:
  - generalizar la ley más allá de los casos históricos
  - explicar por qué el brillo personal puede generar resentimiento
  - conectar jerarquía, autoestima y vanidad
estructura_interna:
  emociones_relevantes:
    - inseguridad
    - resentimiento
    - envidia
    - sensacion_de_pequenez
    - vanidad
conecta_con:
  - MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO
  - MN_CRITERIO_LEY_1
```

---

### 12. `PR_TALENTO_VISIBLE_A_RESENTIMIENTO`

```yaml
orden_textual: 12
mnode_id: PR_TALENTO_VISIBLE_A_RESENTIMIENTO
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Mostrar talentos puede provocar admiración entre iguales, pero ante superiores
  puede provocar resentimiento, inseguridad y amenaza.
rol_operativo: diferenciar_contexto_horizontal_y_contexto_jerarquico
premisas:
  - ante el mundo, mostrar talentos puede generar admiración
  - ante superiores, mostrar talentos altera una relación jerárquica
  - los superiores desean sentirse por encima de quienes los rodean
regla_inferencial:
  - si el talento visible amenaza la superioridad simbólica del amo, deja de ser virtud y se vuelve peligro
conclusion:
  - con superiores, el talento debe administrarse estratégicamente
funcion_local_en_el_texto:
  - explicar por qué la misma conducta cambia de valor según el contexto
  - preparar las normas prácticas
conecta_con:
  - MET_DISIMULAR_FORTALEZAS
  - MET_HACER_BRILLAR_AL_AMO
```

---

### 13. `MET_DISIMULAR_FORTALEZAS`

```yaml
orden_textual: 13
mnode_id: MET_DISIMULAR_FORTALEZAS
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Disimular los aspectos fuertes ante el amo no es señal de debilidad, sino una
  estrategia para retener control y evitar convertirse en víctima de su inseguridad.
rol_operativo: transformar_autolimitacion_en_estrategia
entrada:
  - talento_personal
  - superior_inseguro
  - contexto_de_dependencia
operaciones:
  - reducir_ostentacion
  - evitar_comparaciones_directas
  - no_eclipsar_al_amo
  - dejar_que_el_amo_parezca_fuente_de_brillo
salida:
  - menor_amenaza_percibida
  - mayor_seguridad_del_superior
  - mayor_supervivencia_del_subordinado
funcion_local_en_el_texto:
  - convertir la regla en táctica aplicable
  - preparar ejemplos de Manfredi y Rikyu
conecta_con:
  - HISTORIA_ASTORRE_MANFREDI
  - HISTORIA_SEN_NO_RIKYU
  - MET_HACER_BRILLAR_AL_AMO
```

---

### 14. `HISTORIA_ASTORRE_MANFREDI`

```yaml
orden_textual: 14
mnode_id: HISTORIA_ASTORRE_MANFREDI
tipo_de_unidad: ejemplo_de_transgresion_involuntaria
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Astorre Manfredi, joven príncipe encantador, termina eliminado por César Borgia."
formulacion: >
  Manfredi hace sombra a Borgia no por una estrategia deliberada, sino por sus
  talentos naturales, encanto y popularidad.
rol_operativo: mostrar_que_tambien_se_puede_hacer_sombra_sin_intencion
estructura_interna:
  subordinado_o_dependiente: Astorre_Manfredi
  superior_peligroso: Cesar_Borgia
  rasgos_amenazantes:
    - juventud
    - encanto
    - generosidad
    - espiritu_abierto
    - popularidad
  reaccion_del_superior:
    - arresto
    - eliminacion
  justificacion_publica:
    - cargos_de_traicion_y_conspiracion
  causa_profunda:
    - vanidad_e_inseguridad_de_Borgia
funcion_local_en_el_texto:
  - ampliar el molde de Fouquet
  - mostrar que hacer sombra puede ocurrir sin ostentación consciente
  - advertir contra amos particularmente vanidosos
conecta_con:
  - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
  - MET_DISIMULAR_FORTALEZAS
```

---

### 15. `PR_HACER_SOMBRA_SIN_INTENCION`

```yaml
orden_textual: 15
mnode_id: PR_HACER_SOMBRA_SIN_INTENCION
tipo_de_unidad: patron_de_razonamiento
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
formulacion: >
  No solo la ostentación deliberada puede hacer sombra al amo; también el talento
  natural, el encanto o la popularidad pueden producir amenaza.
rol_operativo: ampliar_condiciones_de_riesgo
premisas:
  - Fouquet hizo sombra mediante una fiesta ostentosa
  - Manfredi hizo sombra por encanto y presencia natural
regla_inferencial:
  - si el superior se siente disminuido, la intención del subordinado es secundaria
conclusion:
  - la ley exige administrar no solo acciones, sino la propia presencia
funcion_local_en_el_texto:
  - hacer más estricta la ley
  - mostrar que la intención no protege contra el castigo del superior
conecta_con:
  - HISTORIA_ASTORRE_MANFREDI
  - MN_CRITERIO_LEY_1
```

---

### 16. `HISTORIA_SEN_NO_RIKYU`

```yaml
orden_textual: 16
mnode_id: HISTORIA_SEN_NO_RIKYU
tipo_de_unidad: ejemplo_de_transgresion_por_exceso_de_favor
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Sen no Rikyu, favorito de Hideyoshi, coloca una estatua propia en un lugar de alto prestigio."
formulacion: >
  Un favorito cae en desgracia al olvidar que su posición depende del amo y al
  actuar simbólicamente como si poseyera un rango propio comparable al poder superior.
rol_operativo: advertir_contra_dar_por_sentada_la_posicion
estructura_interna:
  sujeto: Sen_no_Rikyu
  superior: Hideyoshi
  posicion: favorito_de_la_corte
  transgresion_simbolica:
    - estatua_propia_en_templo_importante
    - pose_alta
    - aparicion_sobre_la_realeza
  interpretacion_del_superior:
    - Rikyu_no_conoce_sus_limites
    - Rikyu_olvida_dependencia
    - Rikyu_asume_derechos_de_la_nobleza
  consecuencia:
    - condena_a_muerte
funcion_local_en_el_texto:
  - mostrar que el favor recibido puede producir exceso de confianza
  - advertir que la cercanía al amo no elimina la jerarquía
conecta_con:
  - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
  - MN_NO_TOMAR_POSICION_POR_SEGURA
```

---

### 17. `MN_NO_TOMAR_POSICION_POR_SEGURA`

```yaml
orden_textual: 17
mnode_id: MN_NO_TOMAR_POSICION_POR_SEGURA
tipo_de_unidad: advertencia_operativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Nunca dé por segura su posición ni permita que los favores del amo se le suban
  a la cabeza.
rol_operativo: formular_advertencia_derivada_de_Rikyu
funcion_local_en_el_texto:
  - extraer la regla práctica del caso Rikyu
  - advertir contra la confusión entre favor recibido y poder propio
conecta_con:
  - HISTORIA_SEN_NO_RIKYU
  - MET_DISIMULAR_FORTALEZAS
```

---

## 6. Métodos de aplicación de la ley

---

### 18. `MET_HACER_BRILLAR_AL_AMO`

```yaml
orden_textual: 18
mnode_id: MET_HACER_BRILLAR_AL_AMO
tipo_de_unidad: metodo_principal
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Para ascender, el subordinado debe hacer que el amo parezca más brillante,
  inteligente, poderoso, generoso o central de lo que realmente es.
rol_operativo: convertir_ley_en_procedimiento_general
entrada:
  - relacion_jerarquica
  - talento_o_capacidad_del_subordinado
  - superior_que_necesita_sentirse_central
operaciones:
  - halagar_de_modo_no_obvio
  - pedir_consejo_para_hacerlo_parecer_sabio
  - atribuir_ideas_propias_al_superior
  - reducir_humor_si_opaca_al_superior
  - no_convertirse_en_nube_que_tapa_su_sol
  - hacer_que_el_amo_parezca_fuente_de_luz
salida:
  - amo_seguro_en_su_superioridad
  - subordinado_percibido_como_util
  - mayor_posibilidad_de_ascenso
funcion_local_en_el_texto:
  - convertir la ley en reglas prácticas
  - desarrollar técnicas concretas de aplicación
conecta_con:
  - MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR
  - MET_DISIMULAR_FORTALEZAS
  - MN_IMAGEN_UN_SOLO_SOL
```

---

### 19. `MET_ELOGIO_INDIRECTO`

```yaml
orden_textual: 19
mnode_id: MET_ELOGIO_INDIRECTO
tipo_de_unidad: submétodo
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  El elogio indirecto es más poderoso que el elogio abierto, porque no parece
  obvio ni servil.
rol_operativo: refinar_metodo_de_hacer_brillar_al_amo
operaciones:
  - no_elogiar_de_modo_excesivamente_directo
  - actuar_con_ingenuidad_si_usted_es_mas_inteligente
  - pedir_ayuda_o_consejo
  - presentar_ideas_propias_como_eco_del_consejo_del_amo
funcion_local_en_el_texto:
  - evitar que la adulación parezca burda
  - mostrar una técnica más sutil de subordinación estratégica
conecta_con:
  - MET_HACER_BRILLAR_AL_AMO
```

---

### 20. `MET_ATRIBUIR_IDEAS_AL_AMO`

```yaml
orden_textual: 20
mnode_id: MET_ATRIBUIR_IDEAS_AL_AMO
tipo_de_unidad: submétodo
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Si las ideas propias son más creativas que las del amo, conviene atribuirlas
  públicamente a él o presentarlas como desarrollo de su consejo.
rol_operativo: evitar_competencia_intelectual_con_el_superior
funcion_local_en_el_texto:
  - mostrar cómo administrar superioridad intelectual
  - convertir creatividad propia en fuente de prestigio para el amo
conecta_con:
  - MET_HACER_BRILLAR_AL_AMO
  - MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR
```

---

### 21. `MET_REDUCIR_PROPIO_BRILLO_SOCIAL`

```yaml
orden_textual: 21
mnode_id: MET_REDUCIR_PROPIO_BRILLO_SOCIAL
tipo_de_unidad: submétodo
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: >
  Si el subordinado es más gracioso, sociable, generoso o encantador que el amo,
  debe moderar esos rasgos para no convertirse en la nube que tapa su sol.
rol_operativo: administrar_encanto_y_presencia_social
funcion_local_en_el_texto:
  - ampliar la ley más allá de inteligencia y talento técnico
  - mostrar que también encanto, humor o generosidad pueden ser amenazas
conecta_con:
  - HISTORIA_ASTORRE_MANFREDI
  - MN_IMAGEN_UN_SOLO_SOL
```

---

## 7. Imagen y autoridad

---

### 22. `MN_IMAGEN_UN_SOLO_SOL`

```yaml
orden_textual: 22
mnode_id: MN_IMAGEN_UN_SOLO_SOL
tipo_de_unidad: imagen_metaforica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Los astros del cielo. Sólo puede haber un Sol por vez..."
formulacion: >
  En un sistema jerárquico solo puede haber un centro luminoso; los demás deben
  encontrar su forma de brillar aumentando la luz del centro, no compitiendo con él.
rol_operativo: condensar_la_ley_en_imagen_cosmica
estructura_interna:
  sol: amo / centro_de_poder
  astros: subordinados / cortesanos / dependientes
  regla: no_competir_con_la_luz_del_sol
  accion_recomendada: aumentar_intensidad_del_astro_central
funcion_local_en_el_texto:
  - convertir la ley en imagen memorable
  - reforzar el ejemplo de Galileo y los Médici
  - explicar simbólicamente la relación amo/subordinado
conecta_con:
  - HISTORIA_GALILEO_OBSERVANCIA
  - MET_HACER_BRILLAR_AL_AMO
```

---

### 23. `FORM_AUTORIDAD_GRACIAN`

```yaml
orden_textual: 23
mnode_id: FORM_AUTORIDAD_GRACIAN
tipo_de_unidad: cita_autoritativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Evite las victorias sobre su amo. Toda superioridad es odiosa..."
formulacion: >
  Toda superioridad sobre el príncipe o amo resulta odiosa; es fatal vencerlo
  simbólicamente.
rol_operativo: legitimar_la_ley_mediante_autoridad_externa
funcion_local_en_el_texto:
  - reforzar la regla con una autoridad clásica
  - condensar el peligro de superar al superior
conecta_con:
  - MN_TITULO_LEY_1
  - MN_IMAGEN_UN_SOLO_SOL
```

---

## 8. Invalidación / excepción

---

### 24. `MN_INVALIDACION_LEY_1`

```yaml
orden_textual: 24
mnode_id: MN_INVALIDACION_LEY_1
tipo_de_unidad: invalidacion_o_excepcion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  Usted no puede vivir cuidándose de no contrariar a ninguna de todas las personas...
formulacion: >
  La ley no se aplica de modo absoluto a todos; si el superior está en decadencia
  o es muy débil, puede ser conveniente dejarlo caer o superarlo selectivamente.
rol_operativo: delimitar_condiciones_de_aplicacion_de_la_ley
funcion_local_en_el_texto:
  - evitar lectura absoluta o ingenua de la ley
  - introducir condiciones de excepción
  - distinguir superior firme de superior débil o decadente
estructura_interna:
  ley_general:
    - no_hacer_sombra_al_amo_firme
  excepciones:
    - amo_en_decadencia
    - amo_muy_debil
    - amo_a_punto_de_caer
  conducta_recomendada:
    - si_esta_firme: paciencia_y_disimulo
    - si_esta_cayendo: dejarlo_caer
    - si_es_debil: jugar_cartas_con_habilidad
conecta_con:
  - MN_CRITERIO_LEY_1
  - MET_EVALUAR_FUERZA_DEL_AMO
```

---

### 25. `MET_EVALUAR_FUERZA_DEL_AMO`

```yaml
orden_textual: 25
mnode_id: MET_EVALUAR_FUERZA_DEL_AMO
tipo_de_unidad: metodo_de_excepcion
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: >
  Antes de aplicar la ley, conviene evaluar si el amo está firme, débil,
  en decadencia o a punto de caer.
rol_operativo: convertir_invalidacion_en_criterio_de_decision
entrada:
  - posicion_del_superior
  - estabilidad_del_poder_del_superior
  - capacidad_propia_del_subordinado
operaciones:
  - detectar_si_el_amo_esta_firme
  - detectar_si_el_amo_esta_debilitado
  - esperar_si_el_amo_aun_controla_el_poder
  - actuar_si_el_amo_esta_cayendo
salida:
  - estrategia_adecuada_a_la_fuerza_del_superior
funcion_local_en_el_texto:
  - cerrar la ley con criterio condicional
  - evitar aplicación rígida
conecta_con:
  - MN_INVALIDACION_LEY_1
```

---

## 9. Moldes estructurales detectados

### 9.1. Molde 1: transgresión de la ley

```yaml
molde:
  mnode_id: DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    El subordinado brilla demasiado ante el superior y termina generando
    inseguridad, castigo o eliminación.
  estructura:
    subordinado:
    superior:
    brillo_exhibido:
    intencion_del_subordinado:
    percepcion_del_superior:
    reaccion_del_superior:
    consecuencia:
  instancias:
    - HISTORIA_FOUQUET_TRANSGRESION
    - HISTORIA_ASTORRE_MANFREDI
    - HISTORIA_SEN_NO_RIKYU
```

### 9.2. Molde 2: observancia de la ley

```yaml
molde:
  mnode_id: DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    El subordinado transforma su talento en gloria del superior y obtiene favor.
  estructura:
    subordinado:
    talento_o_logro:
    superior:
    transferencia_de_brillo:
    beneficio_del_superior:
    beneficio_del_subordinado:
  instancia_principal:
    - HISTORIA_GALILEO_OBSERVANCIA
```

### 9.3. Molde 3: superior inseguro

```yaml
molde:
  mnode_id: DIS_MOLDE_SUPERIOR_INSEGURO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Un superior que necesita sentirse central reacciona negativamente ante cualquier
    subordinado que lo haga sentirse menor.
  estructura:
    superior:
    inseguridad:
    subordinado_amenazante:
    forma_de_amenaza:
    respuesta:
  instancias:
    - Luis_XIV_frente_a_Fouquet
    - Cesar_Borgia_frente_a_Manfredi
    - Hideyoshi_frente_a_Rikyu
```

---

## 10. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: MN_TITULO_LEY_1
    tipo: desarrolla_en
    destino: MN_CRITERIO_LEY_1

  - origen: MN_CRITERIO_LEY_1
    tipo: se_demuestra_por_transgresion
    destino: HISTORIA_FOUQUET_TRANSGRESION

  - origen: HISTORIA_FOUQUET_TRANSGRESION
    tipo: instancia_de
    destino: DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO

  - origen: HISTORIA_FOUQUET_TRANSGRESION
    tipo: soporta
    destino: PR_INTENCION_POSITIVA_EFECTO_NEGATIVO

  - origen: PR_INTENCION_POSITIVA_EFECTO_NEGATIVO
    tipo: explica
    destino: MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO

  - origen: HISTORIA_COLBERT_REEMPLAZO_NO_AMENAZANTE
    tipo: refuerza
    destino: MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO

  - origen: HISTORIA_GALILEO_OBSERVANCIA
    tipo: instancia_de
    destino: DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO

  - origen: HISTORIA_GALILEO_OBSERVANCIA
    tipo: contrasta_con
    destino: HISTORIA_FOUQUET_TRANSGRESION

  - origen: HISTORIA_GALILEO_OBSERVANCIA
    tipo: soporta
    destino: MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR

  - origen: MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR
    tipo: se_generaliza_en
    destino: MET_HACER_BRILLAR_AL_AMO

  - origen: MN_TODOS_TENEMOS_INSEGURIDADES
    tipo: fundamenta
    destino: MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO

  - origen: PR_TALENTO_VISIBLE_A_RESENTIMIENTO
    tipo: justifica
    destino: MET_DISIMULAR_FORTALEZAS

  - origen: HISTORIA_ASTORRE_MANFREDI
    tipo: instancia_de
    destino: DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO

  - origen: HISTORIA_ASTORRE_MANFREDI
    tipo: soporta
    destino: PR_HACER_SOMBRA_SIN_INTENCION

  - origen: HISTORIA_SEN_NO_RIKYU
    tipo: instancia_de
    destino: DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO

  - origen: HISTORIA_SEN_NO_RIKYU
    tipo: soporta
    destino: MN_NO_TOMAR_POSICION_POR_SEGURA

  - origen: MET_HACER_BRILLAR_AL_AMO
    tipo: incluye
    destino: MET_ELOGIO_INDIRECTO

  - origen: MET_HACER_BRILLAR_AL_AMO
    tipo: incluye
    destino: MET_ATRIBUIR_IDEAS_AL_AMO

  - origen: MET_HACER_BRILLAR_AL_AMO
    tipo: incluye
    destino: MET_REDUCIR_PROPIO_BRILLO_SOCIAL

  - origen: MN_IMAGEN_UN_SOLO_SOL
    tipo: condensa_metaforicamente
    destino: MN_TITULO_LEY_1

  - origen: FORM_AUTORIDAD_GRACIAN
    tipo: legitima
    destino: MN_TITULO_LEY_1

  - origen: MN_INVALIDACION_LEY_1
    tipo: delimita
    destino: MN_TITULO_LEY_1

  - origen: MN_INVALIDACION_LEY_1
    tipo: produce
    destino: MET_EVALUAR_FUERZA_DEL_AMO
```

---

## 11. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: formular regla, criterio, advertencias, metáforas e imagen central
    nodos:
      - MN_TITULO_LEY_1
      - MN_CRITERIO_LEY_1
      - MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO
      - MN_TODOS_TENEMOS_INSEGURIDADES
      - MN_NO_TOMAR_POSICION_POR_SEGURA
      - MN_IMAGEN_UN_SOLO_SOL
      - MN_INVALIDACION_LEY_1

  FAM-Patrón-de-razonamiento:
    funcion: explicar por qué una intención positiva puede producir castigo y por qué hacer brillar al amo funciona
    nodos:
      - PR_INTENCION_POSITIVA_EFECTO_NEGATIVO
      - PR_GALILEO_GANA_MAS_CON_SIMBOLO_QUE_CON_SUPLICA
      - PR_TALENTO_VISIBLE_A_RESENTIMIENTO
      - PR_HACER_SOMBRA_SIN_INTENCION

  FAM-Diseño:
    funcion: organizar moldes de transgresión, observancia y superior inseguro
    nodos:
      - DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
      - DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
      - DIS_MOLDE_SUPERIOR_INSEGURO

  FAM-Método:
    funcion: convertir la ley en procedimientos prácticos
    nodos:
      - MET_CONVERTIR_BRILLO_PROPIO_EN_GLORIA_DEL_SUPERIOR
      - MET_DISIMULAR_FORTALEZAS
      - MET_HACER_BRILLAR_AL_AMO
      - MET_ELOGIO_INDIRECTO
      - MET_ATRIBUIR_IDEAS_AL_AMO
      - MET_REDUCIR_PROPIO_BRILLO_SOCIAL
      - MET_EVALUAR_FUERZA_DEL_AMO

  formas_compuestas:
    funcion: historias ancla y casos que manifiestan moldes
    nodos:
      - HISTORIA_FOUQUET_TRANSGRESION
      - HISTORIA_GALILEO_OBSERVANCIA
      - HISTORIA_ASTORRE_MANFREDI
      - HISTORIA_SEN_NO_RIKYU
```

---

## 12. Síntesis estructural del texto

```txt
LEY:
  Nunca le haga sombra a su amo.

CRITERIO:
  El superior debe sentirse cómodo con su superioridad.

TRANSGRESIÓN:
  Fouquet intenta honrar a Luis XIV, pero lo opaca.
  Resultado: caída, arresto, prisión.

INTERPRETACIÓN:
  El superior inseguro castiga el brillo ajeno.
  La intención positiva no importa si el efecto es amenaza.

OBSERVANCIA:
  Galileo convierte su descubrimiento en gloria de los Médici.
  Resultado: cargo, salario, protección.

INTERPRETACIÓN:
  Los amos desean brillar más que todos.
  El talento del subordinado debe hacerlos parecer más grandes.

CLAVES:
  Todos tienen inseguridades.
  Con superiores, mostrar talento puede ser fatal.
  Hay que disimular fortalezas y administrar el propio brillo.

CASOS COMPLEMENTARIOS:
  Manfredi: hace sombra sin querer.
  Rikyu: olvida sus límites por exceso de favor.

MÉTODOS:
  elogio indirecto
  atribuir ideas al amo
  pedir consejo
  moderar humor, inteligencia, encanto y generosidad
  hacer que el amo parezca el Sol

IMAGEN:
  sólo puede haber un Sol por vez.

AUTORIDAD:
  Gracián: evite victorias sobre su amo.

INVALIDACIÓN:
  si el superior está débil o cayendo, la ley puede modificarse.
```

---

## 13. Núcleo interpretativo provisional

Aunque este paso no busca todavía la construcción conceptual final, sí puede dejar un núcleo provisional:

```txt
En relaciones jerárquicas, el talento visible del subordinado puede ser interpretado
por el superior como amenaza a su centralidad. La estrategia eficaz consiste en
administrar el propio brillo para que parezca aumentar el brillo del superior,
no competir con él. La ley se aplica especialmente cuando el superior conserva
poder firme; puede invalidarse cuando está débil o en caída.
```

---

## 14. Observaciones para pasos posteriores

```yaml
observaciones_para_pasos_posteriores:
  posible_modelo_de_juego:
    descripcion: >
      Puede modelarse como un juego de jerarquía donde el subordinado busca ascenso
      y el superior busca conservar centralidad simbólica. La estrategia del subordinado
      afecta la inseguridad del superior.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_modelo_de_disposicion_del_amo:
    descripcion: >
      La variable central podría ser seguridad/inseguridad del superior. Si el subordinado
      aumenta la seguridad simbólica del superior, gana favor. Si la reduce, provoca castigo.
    estatus: modelo_analitico_posterior
    no_desarrollar_en_paso_1: true

  posible_grafo_conceptual:
    nodo_central: MN_TITULO_LEY_1
    ramas:
      - transgresion_Fouquet
      - observancia_Galileo
      - claves_operativas
      - casos_complementarios
      - imagen_del_Sol
      - invalidacion
    estatus: grafo_posterior
```

---

## 15. Resultado del procesamiento

El texto queda preparado como una secuencia de estructuras cognitivas:

```txt
MN_TITULO_LEY_1
  → MN_CRITERIO_LEY_1
    → HISTORIA_FOUQUET_TRANSGRESION
      → DIS_MOLDE_TRANSGRESION_SOMBRA_AL_AMO
        → MN_SUPERIOR_INSEGURO_CASTIGA_BRILLO
          → HISTORIA_GALILEO_OBSERVANCIA
            → DIS_MOLDE_OBSERVANCIA_ENSALSAR_AL_AMO
              → MET_HACER_BRILLAR_AL_AMO
                → HISTORIA_ASTORRE_MANFREDI
                → HISTORIA_SEN_NO_RIKYU
                → MN_IMAGEN_UN_SOLO_SOL
                  → MN_INVALIDACION_LEY_1
```

La fórmula estructural más compacta es:

```txt
brillo_propio_visible
  → inseguridad_del_superior
    → castigo_o_eliminacion

brillo_propio_transferido_al_superior
  → seguridad_y_gloria_del_superior
    → favor_y_ascenso_del_subordinado
```

---

## 16. Cierre operativo

Este documento corresponde al **primer procesamiento estructural**. No agota el análisis del texto. Su función es dejar el texto organizado como material estructural para fases posteriores.

El siguiente paso podría ser construir uno de estos productos:

```txt
1. grafo_de_mnodes
2. lectura_por_familias_cognitivas
3. modelo_de_juego_de_jerarquia
4. construccion_conceptual_normalizada
5. manifestación codominial en video corto o carousel
```
