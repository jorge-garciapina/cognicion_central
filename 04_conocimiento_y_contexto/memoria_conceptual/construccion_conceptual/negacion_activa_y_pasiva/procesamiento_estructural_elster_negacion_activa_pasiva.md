https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0a8409-9ed8-83e8-a97c-c3d43a0f36e8

# Procesamiento estructural: La negación activa y pasiva

**Texto raíz:** `transcripcion.md`  
**Autor del texto analizado:** Jon Elster  
**Tema:** La negación activa y pasiva como herramienta lógica, psicológica y sociopolítica para comprender la sociología de Ibansk en Alexander Sinoviev.  
**Tipo de salida:** `paso_1_procesamiento_estructural`  
**Función del documento:** estructurar linealmente las unidades cognitivas contenidas en el texto, respetando el orden de aparición, sin convertir todavía la lectura en una construcción conceptual final.

---

## 0. Lectura global inicial

Este texto no está organizado principalmente como una serie de historias, sino como un **ensayo conceptual-analítico**. La estructura dominante es argumentativa: Elster construye una herramienta lógica —la diferencia entre negación activa y negación pasiva— y luego la usa para analizar la irracionalidad política de Ibansk/Sinoviev.

La forma general del texto es:

```txt
presentación de Sinoviev
  → definición del problema: comprender lo irracional
    → distinción conceptual: negación activa / negación pasiva
      → análisis lógico
        → genealogía filosófica
          → ejemplos psicológicos y pragmáticos
            → aplicación a Ibansk
              → aplicación al régimen
                → aplicación a la oposición
                  → aplicación al poder
                    → teoría de la negación de la negación
                      → conclusión metodológica
```

---

# paso_1_procesamiento_estructural

```yaml
texto_raiz:
  texto_id: TEXTO_ELSTER_NEGACION_ACTIVA_PASIVA
  titulo: "La negación activa y pasiva"
  autor: Jon Elster
  subtitulo: "Ensayo sobre la sociología de Ibansk"
  tipo_de_fuente: ensayo_filosofico_sociologico
  objeto_analizado: obra_de_Alexander_Sinoviev_sobre_Ibansk
  objetivo_del_paso: >
    Estructurar linealmente las unidades cognitivas contenidas en el texto,
    respetando el orden de aparición, sin convertir todavía la lectura en una
    construcción conceptual final.
```

---

## 1. Núcleo provisional del texto

Aunque este paso no busca todavía la construcción conceptual final, sí conviene fijar un núcleo provisional para orientar la lectura:

```txt
La distinción entre negación activa y negación pasiva permite comprender
formas de irracionalidad lógica, psicológica y política.

Sinoviev usa esta diferencia para mostrar que el universo de Ibansk
no es caótico, sino que está regido por principios irracionales pero inteligibles.

La confusión entre ambas negaciones produce paradojas prácticas:
querer olvidar, ordenar espontaneidad, prohibir lo no obligado,
callar intencionalmente, condenar para reconocer,
cambiar de forma intencional una estructura que sólo cambia sin intención.
```

La oposición central es:

```txt
negación pasiva:
  ausencia de p
  no presencia de p
  no obligación
  indiferencia real
  ausencia de deseo
  ausencia de conciencia

negación activa:
  presencia de lo contrario de p
  deseo de ausencia de p
  prohibición
  rechazo intencional
  condena
  indiferencia fingida
  conciencia de la ausencia
```

---

# 2. Secuencia lineal de mNodes detectados

## 00. `MN_TITULO_NEGACION_ACTIVA_PASIVA`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_NEGACION_ACTIVA_PASIVA
tipo_de_unidad: titulo_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "La diferencia entre negación activa y negación pasiva será el eje conceptual del ensayo."
rol_operativo: fijar_eje_conceptual
funcion_local_en_el_texto:
  - anunciar la distinción lógica central
  - preparar el análisis de Sinoviev
  - señalar que el ensayo no será sólo literario, sino lógico-sociológico
conecta_con:
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
  - DIS_APLICACION_A_IBANSK
```

---

## 01. `MN_SINOVIEV_AUTOR_HIBRIDO`

```yaml
orden_textual: 01
mnode_id: MN_SINOVIEV_AUTOR_HIBRIDO
tipo_de_unidad: caracterizacion_de_autor
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Sinoviev es presentado como lógico, novelista y sociólogo, creador de un
  género literario singular.
rol_operativo: situar_objeto_de_analisis
funcion_local_en_el_texto:
  - presentar a Sinoviev como figura difícil de clasificar
  - justificar que su obra debe leerse simultáneamente como literatura, lógica y sociología
  - preparar la comparación con Marx
conecta_con:
  - PR_SINOVIEV_COMO_MARX_DEL_COMUNISMO
```

---

## 02. `PR_SINOVIEV_COMO_MARX_DEL_COMUNISMO`

```yaml
orden_textual: 02
mnode_id: PR_SINOVIEV_COMO_MARX_DEL_COMUNISMO
tipo_de_unidad: comparacion_estructural
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  Sinoviev hace por el comunismo soviético lo que Marx hizo por el capitalismo:
  muestra el engranaje de su irracionalidad.
rol_operativo: legitimar_importancia_teorica_de_Sinoviev
premisas:
  - Marx revela la lógica irracional del capitalismo
  - Sinoviev revela la lógica irracional del comunismo soviético
conclusion:
  - Sinoviev debe leerse como analista profundo de un sistema social irracional pero inteligible
funcion_local_en_el_texto:
  - elevar el rango analítico de Sinoviev
  - introducir la tesis de que lo irracional puede tener estructura
conecta_con:
  - MN_IRRACIONAL_INTELIGIBLE
```

---

## 03. `MN_IRRACIONAL_INTELIGIBLE`

```yaml
orden_textual: 03
mnode_id: MN_IRRACIONAL_INTELIGIBLE
tipo_de_unidad: tesis_metodologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Lo irracional soviético no es caos; está regido por principios irracionales
  e inteligibles.
rol_operativo: fijar_objetivo_del_ensayo
funcion_local_en_el_texto:
  - establecer que el análisis buscará estructura en la irracionalidad
  - preparar el uso de herramientas lógicas para estudiar instituciones políticas
estructura_interna:
  objeto_irracional: sociedad_sovietica / Ibansk
  metodo: logica_formal + herencia_dialectica
  tarea: aprender_a_comprender_lo_irracional
conecta_con:
  - MN_PARADOJAS_AUTORREFERENCIALES
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
```

---

## 04. `MN_PARADOJAS_AUTORREFERENCIALES`

```yaml
orden_textual: 04
mnode_id: MN_PARADOJAS_AUTORREFERENCIALES
tipo_de_unidad: ejemplo_de_paradoja
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El universo de Ibansk está lleno de paradojas autorreferenciales, como medidas
  que buscan detectar oposición a la medida misma.
rol_operativo: introducir_irracionalidad_logicamente_estructurada
ejemplos:
  - "El objeto de la medida era encontrar a todos aquellos que no estaban de acuerdo con la aplicación de la misma."
  - "Esta proposición es falsa."
  - "Esta orden debe ser cumplida bajo pena de muerte."
funcion_local_en_el_texto:
  - mostrar que la irracionalidad de Ibansk tiene forma lógica
  - producir la sensación de vértigo autorreferencial
  - preparar la distinción entre negaciones
conecta_con:
  - MN_IRRACIONAL_INTELIGIBLE
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
```

---

## 05. `MN_DISTINCION_NEGACION_ACTIVA_PASIVA`

```yaml
orden_textual: 05
mnode_id: MN_DISTINCION_NEGACION_ACTIVA_PASIVA
tipo_de_unidad: distincion_conceptual_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La negación pasiva es la ausencia o no realización de p; la negación activa
  es la afirmación, deseo, conciencia o imposición de lo contrario de p.
rol_operativo: establecer_herramienta_conceptual_central
funcion_local_en_el_texto:
  - presentar el instrumento lógico del ensayo
  - permitir analizar instituciones soviéticas
  - distinguir ausencia de oposición activa
conecta_con:
  - DIS_MODELO_LOGICO_TRES_PROPOSICIONES
  - DIS_APLICACION_A_IBANSK
```

---

## 06. `DIS_USO_DOBLE_DE_LA_DISTINCION`

```yaml
orden_textual: 06
mnode_id: DIS_USO_DOBLE_DE_LA_DISTINCION
tipo_de_unidad: diseño_de_uso_conceptual
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  La diferencia entre negación activa y pasiva tiene dos usos en Sinoviev:
  explicar la irracionalidad del régimen y servir como herramienta de análisis institucional.
rol_operativo: organizar_doble_funcion_del_concepto
estructura:
  uso_1:
    funcion: fundamento_de_irracionalidad
    descripcion: confusion_de_ambas_negaciones
  uso_2:
    funcion: herramienta_analitica
    descripcion: analisis_de_instituciones_sovieticas
funcion_local_en_el_texto:
  - convertir la distinción lógica en herramienta sociológica
conecta_con:
  - MN_MENTALIDAD_PRIMITIVA_CONFUSION
  - DIS_APLICACION_A_IBANSK
```

---

## 07. `PLAN_ANALISIS_LOGICO_HISTORICO_SINOVIEV`

```yaml
orden_textual: 07
mnode_id: PLAN_ANALISIS_LOGICO_HISTORICO_SINOVIEV
tipo_de_unidad: plan_expositivo
familia_cognitiva: FAM-Plan
estatus_de_extraccion: textual_explicito
formulacion: >
  El ensayo procederá desde el análisis lógico, pasará por la historia conceptual
  y llegará finalmente a Sinoviev.
rol_operativo: secuenciar_exposicion
pasos:
  - analisis_logico
  - historia_de_los_conceptos
  - aplicacion_a_Sinoviev
funcion_local_en_el_texto:
  - ordenar el recorrido argumental
  - avisar que la aplicación política vendrá después de la fundamentación conceptual
conecta_con:
  - DIS_MODELO_LOGICO_TRES_PROPOSICIONES
```

---

## 08. `DIS_MODELO_LOGICO_TRES_PROPOSICIONES`

```yaml
orden_textual: 08
mnode_id: DIS_MODELO_LOGICO_TRES_PROPOSICIONES
tipo_de_unidad: modelo_formal_minimo
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  La diferencia entre negación activa y pasiva se formaliza mediante tres proposiciones:
  A cree p; no corresponde que A crea p; A cree lo contrario de p.
rol_operativo: construir_modelo_logico_minimo
estructura:
  I: "A cree p"
  II: "No corresponde que A crea p"
  III: "A cree lo contrario de p"
mapeo:
  II: negacion_pasiva_de_I
  III: negacion_activa_de_I
funcion_local_en_el_texto:
  - hacer operativa la distinción
  - mostrar que no creer p no equivale necesariamente a creer no-p
conecta_con:
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
  - MN_MENTALIDAD_PRIMITIVA_CONFUSION
```

---

## 09. `MN_MENTALIDAD_PRIMITIVA_CONFUSION`

```yaml
orden_textual: 09
mnode_id: MN_MENTALIDAD_PRIMITIVA_CONFUSION
tipo_de_unidad: tesis_sobre_confusion_logica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La mentalidad primitiva confunde negación activa y pasiva, tratando la ausencia
  de una creencia como si fuera la creencia de su contrario.
rol_operativo: explicar_fuente_de_irracionalidad_logica
funcion_local_en_el_texto:
  - mostrar cómo una distinción lógica mal usada genera errores políticos y psicológicos
  - introducir el patrón “o a favor o en contra”
ejemplos:
  - ateismo_vs_agnosticismo
  - "o se está a favor o se está en contra"
conecta_con:
  - DIS_MODELO_LOGICO_TRES_PROPOSICIONES
  - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
```

---

## 10. `DIS_EXTENSIONS_MODALES_DE_LA_DISTINCION`

```yaml
orden_textual: 10
mnode_id: DIS_EXTENSIONS_MODALES_DE_LA_DISTINCION
tipo_de_unidad: extension_logica
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  La diferencia entre negación activa y pasiva se extiende a lógica modal,
  deontológica, epistemológica, temporal e intencional.
rol_operativo: ampliar_dominio_formal_del_concepto
estructura:
  logica_modal:
    Np: necesidad_de_p
    M_p: posibilidad_de_p
  logica_deontologica:
    Np: debe_hacerse_p
    M_p: puede_hacerse_p
  logica_epistemologica:
    Np: A_sabe_p / A_cree_p
  logica_intencional:
    diferencia: deseo_de_x_vs_ausencia_de_deseo_de_x
funcion_local_en_el_texto:
  - mostrar que la distinción no es local, sino transversal
  - preparar ejemplos psicológicos como deseo, olvido, espontaneidad
conecta_con:
  - MN_VOLUNTAD_DE_OLVIDAR
  - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
```

---

## 11. Bloque Russell / descripciones definidas / presuposición ilegítima

Este bloque no debe reducirse a un simple ejemplo lógico. Su función es profundizar la distinción entre negación activa y negación pasiva mediante el caso de las descripciones definidas. El texto pasa por tres movimientos:

```txt
conjunción negativa
  → posible unidad causal entre sus miembros
    → error de la mentalidad primitiva al convertir experiencia en prejuicio
      → problema lógico de las descripciones definidas
        → diferencia entre negar toda la conjunción y negar sólo un predicado
          → preguntas que no admiten sí/no porque ambas respuestas aceptan una presuposición ilegítima
```

---

### 11.1. `MN_CONJUNCION_NEGATIVA_UNIDAD_CAUSAL`

```yaml
orden_textual: 11.1
mnode_id: MN_CONJUNCION_NEGATIVA_UNIDAD_CAUSAL
tipo_de_unidad: matizacion_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Sin duda, los miembros de la conjunción negativa frecuentemente están unidos
  entre sí de una manera causal, lo que justifica en parte el hecho de que se la
  trate como un complejo único."
formulacion: >
  Los miembros de una conjunción negativa pueden estar causalmente unidos en la
  experiencia, lo cual explica parcialmente por qué se los trata como si formaran
  un único complejo.
rol_operativo: introducir_matiz_antes_de_criticar_la_confusion
funcion_local_en_el_texto:
  - evitar una lectura demasiado simple de la crítica a la mentalidad primitiva
  - reconocer que la asociación entre componentes negativos puede tener base empírica
  - preparar la distinción entre conexión causal empírica y confusión lógica
estructura_interna:
  conjuncion_negativa:
    miembros:
      - componente_negativo_1
      - componente_negativo_2
      - componente_negativo_n
  relacion_posible:
    tipo: union_causal_frecuente
    efecto: apariencia_de_complejo_unico
  limite:
    - que los miembros estén causalmente relacionados no autoriza a borrar sus diferencias lógicas
conecta_con:
  - MN_MENTALIDAD_PRIMITIVA_PREJUICIO
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
```

---

### 11.2. `MN_MENTALIDAD_PRIMITIVA_PREJUICIO`

```yaml
orden_textual: 11.2
mnode_id: MN_MENTALIDAD_PRIMITIVA_PREJUICIO
tipo_de_unidad: diagnostico_cognitivo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Sin embargo, la característica curiosa de la mentalidad primitiva reside en
  que deja atrás la experiencia y se queda atrapada en los cepos de los prejuicios."
formulacion: >
  La mentalidad primitiva parte de asociaciones empíricas posibles, pero luego
  abandona la experiencia y convierte esas asociaciones en prejuicios rígidos.
rol_operativo: explicar_el_error_cognitivo_de_la_confusion
funcion_local_en_el_texto:
  - distinguir experiencia de prejuicio
  - mostrar que el problema no está sólo en asociar elementos, sino en absolutizar la asociación
  - preparar el paso hacia el problema formal de las descripciones definidas
estructura_interna:
  punto_de_partida:
    - experiencia
    - asociaciones_causales_frecuentes
  desviacion:
    - abandono_de_la_experiencia
    - fijacion_en_prejuicios
  resultado:
    - tratamiento_de_complejos_logicos_como_unidades_indiferenciadas
    - confusion_entre_negacion_pasiva_y_negacion_activa
conecta_con:
  - MN_CONJUNCION_NEGATIVA_UNIDAD_CAUSAL
  - DIS_DESCRIPCIONES_DEFINIDAS_RUSSELL
```

---

### 11.3. `DIS_DESCRIPCIONES_DEFINIDAS_RUSSELL`

```yaml
orden_textual: 11.3
mnode_id: DIS_DESCRIPCIONES_DEFINIDAS_RUSSELL
tipo_de_unidad: modelo_logico_formal
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La segunda diferenciación aborda un problema esotérico de la lógica: ¿cómo deben
  traducirse las descripciones definidas al lenguaje formal, es decir las expresiones
  que empiezan con los artículos definidos 'el' o 'la'?"
formulacion: >
  Las descripciones definidas sólo pueden analizarse dentro del contexto de una
  proposición completa, porque introducen una estructura conjuntiva que puede fallar
  en distintos niveles.
rol_operativo: formalizar_el_problema_de_la_presuposicion
estructura:
  proposicion_original: "El Rey de Francia es calvo"
  analisis_conjuntivo:
    componente_1_existencia:
      formulacion: "Existe un sujeto x que es Rey de Francia."
      funcion: afirmar_existencia_del_referente
    componente_2_unicidad:
      formulacion: "Todo y que sea Rey de Francia es x."
      funcion: afirmar_unicidad_del_referente
    componente_3_predicacion:
      formulacion: "x es calvo."
      funcion: atribuir_predicado_al_referente
  evaluacion_en_1979:
    resultado: proposicion_falsa
    razon: falla_el_componente_de_existencia
funcion_local_en_el_texto:
  - mostrar que una proposición aparentemente simple contiene una conjunción lógica interna
  - preparar la diferencia entre negar toda la conjunción y negar sólo el predicado
  - explicar por qué ciertas preguntas no admiten respuesta binaria simple
conecta_con:
  - MN_NEGACION_PASIVA_VS_ACTIVA_REY_DE_FRANCIA
  - MN_PREGUNTA_CAPCIOSA_PRESUPOSICION
```

---

### 11.4. `MN_NEGACION_PASIVA_VS_ACTIVA_REY_DE_FRANCIA`

```yaml
orden_textual: 11.4
mnode_id: MN_NEGACION_PASIVA_VS_ACTIVA_REY_DE_FRANCIA
tipo_de_unidad: distincion_logica_aplicada
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La negación pasiva es la verdadera proposición que niega la conjunción de (1),
  (2) y (3); la negación activa es la proposición errónea que confirma (1) y (2),
  mientras que niega (3)."
formulacion: >
  La negación pasiva de "El Rey de Francia es calvo" niega la conjunción completa;
  la negación activa conserva existencia y unicidad, pero niega sólo el predicado
  "calvo".
rol_operativo: aplicar_distincion_nuclear_a_un_caso_formal
estructura:
  proposicion_base:
    P: "El Rey de Francia es calvo"
    componentes:
      - existencia_del_Rey_de_Francia
      - unicidad_del_Rey_de_Francia
      - calvicie_del_Rey_de_Francia
  negacion_pasiva:
    formulacion: "No es verdadero que exista un único Rey de Francia que sea calvo."
    operacion: negar_conjuncion_completa
    resultado: verdadera_si_falla_la_existencia
  negacion_activa:
    formulacion: "Existe un único Rey de Francia y ese Rey no es calvo."
    operacion: aceptar_existencia_y_unicidad_pero_negar_predicado
    resultado: erronea_si_no_existe_el_referente
funcion_local_en_el_texto:
  - mostrar con precisión formal la diferencia entre negación activa y pasiva
  - revelar que la negación activa puede introducir presuposiciones falsas
  - preparar el análisis de preguntas que no admiten ni sí ni no
conecta_con:
  - DIS_DESCRIPCIONES_DEFINIDAS_RUSSELL
  - MN_PREGUNTA_CAPCIOSA_PRESUPOSICION
  - MN_MENTALIDAD_PRIMITIVA_PREJUICIO
```

---

### 11.5. `MN_PREGUNTA_CAPCIOSA_PRESUPOSICION`

```yaml
orden_textual: 11.5
mnode_id: MN_PREGUNTA_CAPCIOSA_PRESUPOSICION
tipo_de_unidad: ejemplo_logico_pragmatico
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Al formular la pregunta: '¿Es calvo el Rey de Francia?', se advierte que tanto
  'Sí' como 'No' son contestaciones inapropiadas... ¿Y qué hay que decir de la
  pregunta capciosa, '¿Ha dejado usted finalmente de maltratar a su mujer?'"
formulacion: >
  Algunas preguntas imponen una presuposición ilegítima, de modo que responder
  "sí" o "no" acepta ya el marco falso de la pregunta.
rol_operativo: mostrar_limite_pragmatico_de_respuestas_binarias
estructura:
  pregunta_1:
    texto: "¿Es calvo el Rey de Francia?"
    presuposicion: "Existe un único Rey de Francia."
    problema:
      - responder_si: acepta_existencia_y_predica_calvicie
      - responder_no: acepta_existencia_y_niega_calvicie
      - ambas_respuestas: aceptan_presuposicion_falsa
  pregunta_2:
    texto: "¿Ha dejado usted finalmente de maltratar a su mujer?"
    presuposicion: "Usted maltrataba a su mujer."
    problema:
      - responder_si: acepta_que_antes_la_maltrataba
      - responder_no: acepta_que_la_sigue_maltratando
      - ambas_respuestas: aceptan_marco_incriminador
funcion_local_en_el_texto:
  - mostrar que ciertas estructuras interrogativas atrapan al interlocutor
  - reforzar que la negación adecuada no siempre es una respuesta negativa interna al marco
  - conectar lógica formal con pragmática del lenguaje y mecanismos de imputación
conecta_con:
  - MN_NEGACION_PASIVA_VS_ACTIVA_REY_DE_FRANCIA
  - DIS_DERECHO_ANTITEXTO_REGRESSIO
  - MN_REGIMEN_CALLAR_O_CONDENAR
```

---

## 12. Bloque Kant / ejemplos de negación activa y pasiva / transición a Hegel

Este bloque no debe reducirse a una simple genealogía conceptual. Su función es más compleja: primero introduce a Kant como antecedente de la distinción, luego presenta una serie de ejemplos, después clasifica esos ejemplos en dos grupos, limita su valor lógico estricto y finalmente rescata una intuición que sirve como puente hacia Hegel: en ciertos actos intencionales, aquello que se desea negar permanece presente como objeto de la negación.

---

### 12.1. `MN_KANT_ANTECEDENTE_PRECRITICO`

```yaml
orden_textual: 12.1
mnode_id: MN_KANT_ANTECEDENTE_PRECRITICO
tipo_de_unidad: genealogia_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "En su ensayo precrítico 'Versuch, den Begriff der negativen Grössen in die
  Weltweisheit einzuführen', Kant desarrolla la diferenciación de que hablamos,
  entre negación activa y pasiva."
formulacion: >
  Kant aparece como antecedente filosófico de la diferencia entre negación activa
  y negación pasiva, aunque el texto citado sea oscuro y pertenezca a una
  controversia ya no central para el análisis.
rol_operativo: establecer_antecedente_filosofico_de_la_distincion
funcion_local_en_el_texto:
  - mostrar que la distinción usada por Sinoviev tiene historia filosófica previa
  - desplazar el análisis desde la lógica formal contemporánea hacia una genealogía conceptual
  - advertir que el texto kantiano no se adoptará sin crítica
estructura_interna:
  autor: Kant
  obra: "Versuch, den Begriff der negativen Grössen in die Weltweisheit einzuführen"
  estado_del_texto:
    - precritico
    - poco_claro
    - vinculado_a_controversia_historica_ya_no_central
  valor_para_el_ensayo:
    - fuente_de_ejemplos
    - antecedente_de_la_distincion
    - material_conceptual_estimulante
conecta_con:
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
  - DIS_SERIE_EJEMPLOS_KANTIANOS
```

---

### 12.2. `DIS_SERIE_EJEMPLOS_KANTIANOS`

```yaml
orden_textual: 12.2
mnode_id: DIS_SERIE_EJEMPLOS_KANTIANOS
tipo_de_unidad: serie_conceptual_de_ejemplos
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  Kant ofrece siete ejemplos: descanso, bienestar, diversión, virtud, atención,
  compromiso y deseo, cada uno con una negación pasiva y una negación activa.
formulacion: >
  Kant ilustra la diferencia entre negación pasiva y negación activa mediante
  una serie heterogénea de ejemplos que van desde movimiento físico hasta deseo,
  atención, compromiso y moralidad.
rol_operativo: organizar_ejemplos_de_la_distincion
estructura:
  ejemplos:
    - caso: descanso
      negacion_pasiva: movimiento
      negacion_activa: movimiento_en_direccion_contraria
    - caso: bienestar
      negacion_pasiva: pobreza
      negacion_activa: endeudamiento
    - caso: diversion
      negacion_pasiva: indiferencia_o_impasibilidad
      negacion_activa: descontento_o_fastidio
    - caso: virtud
      negacion_pasiva: faltas_de_los_santos_y_errores_de_las_almas_nobles
      negacion_activa:
        - pecado_de_omision
        - pecado_de_comision
    - caso: atencion
      negacion_pasiva: indiferencia
      negacion_activa: divagacion
    - caso: compromiso
      negacion_pasiva: no_compromiso
      negacion_activa: prohibicion
    - caso: deseo
      negacion_pasiva: indiferencia
      negacion_activa: abominacion
funcion_local_en_el_texto:
  - desplegar intuitivamente la diferencia entre dos maneras de negar
  - mostrar que la distinción puede aparecer en dominios físicos, afectivos, morales, atencionales, deónticos e intencionales
  - preparar la clasificación posterior entre ejemplos estrictos y ejemplos amplios
conecta_con:
  - MN_KANT_ANTECEDENTE_PRECRITICO
  - DIS_DOS_CATEGORIAS_EJEMPLOS_KANT
```

---

### 12.3. `DIS_DOS_CATEGORIAS_EJEMPLOS_KANT`

```yaml
orden_textual: 12.3
mnode_id: DIS_DOS_CATEGORIAS_EJEMPLOS_KANT
tipo_de_unidad: clasificacion_interna_de_ejemplos
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Según se observa, estos ejemplos corresponden a dos categorías. Por un lado,
  los casos (5), (6) y (7), que corresponden a la diferenciación modal entre
  'No(Np)' y 'N(no p)'. Por el otro, los ejemplos (1) a (4), que no pueden
  formularse con esta diferenciación."
formulacion: >
  Los ejemplos kantianos se dividen en dos grupos: unos corresponden estrictamente
  a la diferencia modal entre no necesidad de p y necesidad de no-p; otros sólo
  expresan una analogía más amplia y menos rigurosa.
rol_operativo: separar_usos_estrictos_y_usos_amplios_de_la_distincion
estructura:
  categoria_estricta:
    casos:
      - atencion
      - compromiso
      - deseo
    formula:
      negacion_pasiva: "No(Np)"
      negacion_activa: "N(no p)"
    interpretacion:
      atencion:
        negacion_pasiva: ausencia_de_conciencia_de_x
        negacion_activa: conciencia_de_la_ausencia_de_x
      compromiso:
        negacion_pasiva: no_compromiso
        negacion_activa: prohibicion
      deseo:
        negacion_pasiva: ausencia_de_deseo_de_x
        negacion_activa: deseo_de_la_ausencia_de_x
  categoria_amplia_o_no_estricta:
    casos:
      - descanso
      - bienestar
      - diversion
      - virtud
    problema:
      - no_pueden_formularse_de_modo_preciso_como_No_Np_vs_N_no_p
      - usan_la_idea_de_negacion_en_sentido_analogico
      - desplazan_la_negacion_desde_proposiciones_hacia_movimientos_estados_o_virtudes
funcion_local_en_el_texto:
  - evitar que todos los ejemplos kantianos tengan el mismo estatuto lógico
  - distinguir la utilidad intuitiva de los ejemplos de su validez formal estricta
  - preparar la crítica sobre la negación como operador proposicional
conecta_con:
  - DIS_SERIE_EJEMPLOS_KANTIANOS
  - MN_LIMITE_PROPOSICIONAL_DE_LA_NEGACION
```

---

### 12.4. `MN_LIMITE_PROPOSICIONAL_DE_LA_NEGACION`

```yaml
orden_textual: 12.4
mnode_id: MN_LIMITE_PROPOSICIONAL_DE_LA_NEGACION
tipo_de_unidad: precision_logica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Esto se debe a que la negación es, en sentido estricto, un operador que solamente
  puede relacionarse con proposiciones. Hablar de la negación de un movimiento,
  un placer o una virtud no tiene sentido."
formulacion: >
  En sentido estricto, la negación sólo opera sobre proposiciones; por eso,
  hablar de la negación de un movimiento, un placer o una virtud sólo tiene valor
  metafórico o analógico, no lógico formal.
rol_operativo: delimitar_validez_logica_de_los_ejemplos_kantianos
estructura_interna:
  tesis_logica:
    - la_negacion_es_operador_proposicional
  consecuencia:
    - no_se_niega_estrictamente_un_movimiento
    - no_se_niega_estrictamente_un_placer
    - no_se_niega_estrictamente_una_virtud
  problema_en_Kant:
    - algunos_ejemplos_extienden_la_negacion_a_objetos_no_proposicionales
    - la_imagen_es_intuitiva_pero_no_formalmente_rigurosa
funcion_local_en_el_texto:
  - corregir el alcance de los ejemplos kantianos
  - separar la precisión lógica del valor heurístico
  - impedir que la distinción se vuelva demasiado laxa
conecta_con:
  - DIS_DOS_CATEGORIAS_EJEMPLOS_KANT
  - MN_NEGACION_COMO_ANIQUILACION_COMPENSACION
```

---

### 12.5. `MN_NEGACION_COMO_ANIQUILACION_COMPENSACION`

```yaml
orden_textual: 12.5
mnode_id: MN_NEGACION_COMO_ANIQUILACION_COMPENSACION
tipo_de_unidad: interpretacion_de_imagen_kantiana
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Indudablemente Kant tenía la imagen de un movimiento, un acto o una sensación
  que en cierta forma aniquilaba una primera tendencia, una imagen que es
  comprensible para el movimiento en el espacio, pero que pierde su sentido en
  el área moral."
formulacion: >
  Kant parece imaginar la negación como una fuerza que anula o compensa otra
  fuerza anterior; esta imagen funciona relativamente bien en el movimiento
  espacial, pero se vuelve problemática en el dominio moral.
rol_operativo: explicar_la_intuicion_amplia_detras_de_los_ejemplos_no_estrictos
estructura_interna:
  imagen_kantiana:
    - movimiento_contrario_anula_movimiento_inicial
    - acto_contrario_compensa_acto_inicial
    - sensacion_contraria_neutraliza_sensacion_inicial
  dominio_mas_comprensible:
    - movimiento_en_el_espacio
  dominio_problematico:
    - moralidad
  limite_moral:
    - una_accion_moralmente_mala_puede_ser_perdonada
    - pero_no_puede_hacerse_que_no_haya_ocurrido
    - hay_varias_formas_de_pedir_perdon
    - no_hay_una_negacion_unica_que_restablezca_equilibrio
funcion_local_en_el_texto:
  - explicar por qué los ejemplos kantianos amplios son sugerentes pero imprecisos
  - mostrar que la anulación física no se traduce limpiamente al campo moral
  - preparar la idea de que Sinoviev usará la distinción en sentido estricto y amplio
conecta_con:
  - MN_LIMITE_PROPOSICIONAL_DE_LA_NEGACION
  - MN_USO_ESTRICTO_Y_AMPLIO_EN_SINOVIEV
```

---

### 12.6. `MN_USO_ESTRICTO_Y_AMPLIO_EN_SINOVIEV`

```yaml
orden_textual: 12.6
mnode_id: MN_USO_ESTRICTO_Y_AMPLIO_EN_SINOVIEV
tipo_de_unidad: puente_metodologico
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Aparte de esto, la idea de Kant sigue siendo estimulante aun en estos casos
  menos severos. Se verá más adelante que Sinoviev los utiliza por su parte,
  tanto en sentido estricto como en sentido amplio."
formulacion: >
  Aunque algunos ejemplos kantianos no sean rigurosos en sentido lógico estricto,
  conservan valor heurístico porque Sinoviev utilizará la distinción tanto de
  forma formal como de forma ampliada.
rol_operativo: justificar_rescate_de_Kant_para_el_analisis_de_Sinoviev
premisas:
  - algunos_ejemplos_kantianos_son_formalmente_estrictos
  - otros_son_amplios_o_analogicos
  - Sinoviev_usa_la_distincion_en_ambos_sentidos
conclusion:
  - la_discusion_de_Kant_debe_conservarse_como_material_conceptual_util
funcion_local_en_el_texto:
  - impedir que la crítica formal descarte completamente a Kant
  - preparar la aplicación flexible a Sinoviev
  - conectar historia conceptual con análisis sociológico posterior
conecta_con:
  - MN_NEGACION_COMO_ANIQUILACION_COMPENSACION
  - DIS_APLICACION_A_IBANSK
```

---

### 12.7. `MN_PRESENCIA_AUSENCIA_INTENCIONAL`

```yaml
orden_textual: 12.7
mnode_id: MN_PRESENCIA_AUSENCIA_INTENCIONAL
tipo_de_unidad: paradoja_intencional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "En el deseo de ausencia de x o en la conciencia de la ausencia de x, x está
  simultáneamente presente y ausente: presente como sujeto intencional del deseo
  de ausencia."
formulacion: >
  En ciertos actos intencionales, aquello que se quiere ausente permanece presente
  como objeto de la intención que desea su ausencia.
rol_operativo: formular_paradoja_intencional_de_la_negacion_activa
estructura_interna:
  caso_1:
    forma: deseo_de_ausencia_de_x
    ausencia: x_no_debe_estar
    presencia: x_permanece_como_objeto_intencional_del_deseo
  caso_2:
    forma: conciencia_de_la_ausencia_de_x
    ausencia: x_no_esta_presente_en_el_mundo
    presencia: x_esta_presente_como_contenido_de_conciencia
  paradoja:
    - x_esta_ausente_en_el_estado_deseado
    - x_esta_presente_en_la_intencion_que_desea_su_ausencia
funcion_local_en_el_texto:
  - mostrar el núcleo problemático de la negación activa
  - preparar la transición hacia Hegel
  - anticipar problemas posteriores como querer olvidar o querer ser indiferente
conecta_con:
  - MN_VOLUNTAD_DE_OLVIDAR
  - HISTORIA_CONCEPTUAL_HEGEL_DESEO_OBJETO
```

---

### 12.8. `HISTORIA_CONCEPTUAL_HEGEL_DESEO_OBJETO`

```yaml
orden_textual: 12.8
mnode_id: HISTORIA_CONCEPTUAL_HEGEL_DESEO_OBJETO
tipo_de_unidad: genealogia_conceptual_y_paradoja
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Hegel sigue desarrollando sistemáticamente esta observación citada por Kant
  al pasar... la autoconciencia se representa primeramente como deseo..."
formulacion: >
  Hegel sistematiza la paradoja según la cual la autoconciencia desea anular el
  objeto exterior para afirmarse, pero depende de ese objeto para obtener la
  confirmación de sí misma.
rol_operativo: desarrollar_filosoficamente_la_paradoja_de_la_negacion_activa
estructura_interna:
  sujeto: autoconciencia
  forma_inicial: deseo
  objetivo: dominar_o_anular_el_mundo_exterior
  medio: devorar_o_suprimir_el_objeto
  paradoja:
    - la_satisfaccion_depende_del_objeto
    - al_anular_el_objeto_el_deseo_pierde_la_condicion_de_su_confirmacion
    - el_deseo_reproduce_el_objeto_que_intenta_negar
funcion_local_en_el_texto:
  - conectar la intuición kantiana con la dialéctica hegeliana
  - mostrar que la negación activa puede depender de aquello que niega
  - preparar ejemplos posteriores de ateísmo militante, anticomunismo, voluntad de olvido y oposición política
conecta_con:
  - MN_PRESENCIA_AUSENCIA_INTENCIONAL
  - MN_PARADOJA_ATEISMO_MILITANTE
  - MN_VOLUNTAD_DE_OLVIDAR
```

---

## 13. `HISTORIA_CONCEPTUAL_HEGEL`

```yaml
orden_textual: 13
mnode_id: HISTORIA_CONCEPTUAL_HEGEL
tipo_de_unidad: genealogia_conceptual
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: >
  En Hegel, la negación activa aparece como deseo de anular un objeto del que,
  paradójicamente, depende la propia autoconciencia.
rol_operativo: mostrar_paradoja_de_dependencia_en_la_negacion_activa
estructura:
  sujeto: autoconciencia
  objeto: aquello_que_desea_anular
  paradoja:
    - el_sujeto_necesita_el_objeto_para_confirmarse
    - si_destruye_el_objeto_destruye_la_condicion_de_su_confirmacion
funcion_local_en_el_texto:
  - mostrar que la negación activa puede depender de aquello que niega
  - preparar ejemplos de ateísmo militante y anticomunismo
conecta_con:
  - MN_PRESENCIA_AUSENCIA_INTENCIONAL
  - HISTORIA_CONCEPTUAL_HEGEL_DESEO_OBJETO
  - MN_PARADOJA_ATEISMO_MILITANTE
```

---

## 14. `MN_PARADOJA_ATEISMO_MILITANTE`

```yaml
orden_textual: 14
mnode_id: MN_PARADOJA_ATEISMO_MILITANTE
tipo_de_unidad: ejemplo_de_negacion_activa_dependiente
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El ateísmo militante o el anticomunismo absoluto pueden depender de aquello
  que niegan, porque su identidad exige conservar al enemigo como objeto.
rol_operativo: ejemplificar_dependencia_de_la_negacion_activa
funcion_local_en_el_texto:
  - mostrar que negar activamente no equivale a estar libre del objeto negado
  - preparar el problema de querer producir negación pasiva por medios activos
conecta_con:
  - HISTORIA_CONCEPTUAL_HEGEL
  - HISTORIA_CONCEPTUAL_HEGEL_DESEO_OBJETO
  - MN_VOLUNTAD_DE_OLVIDAR
```

---

## 15. `DIS_REQUERIMIENTO_CONTRADICTORIO`

```yaml
orden_textual: 15
mnode_id: DIS_REQUERIMIENTO_CONTRADICTORIO
tipo_de_unidad: molde_psicologico_pragmatico
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Un requerimiento contradictorio manda realizar voluntariamente algo cuya esencia
  exige ausencia de deliberación, ausencia de obediencia, libertad afectiva o no
  focalización consciente.
rol_operativo: organizar_ejemplos_de_imposibilidad_pragmatica
estructura:
  mandato:
  contenido_manifiesto:
  condicion_pragmatica_negada:
  contradiccion:
  efecto:
    - imposibilidad
    - paradoja
    - doble_vinculo
    - produccion_del_efecto_contrario
invariantes:
  - existe un mandato dirigido a un destinatario
  - el mandato exige producir un estado o conducta
  - el estado exigido sólo puede existir si no es producido por obediencia directa
  - al intentar obedecer, el destinatario destruye la condición misma de cumplimiento
dominio_de_variacion:
  - "No seas tan sumiso"
  - "Sé espontáneo"
  - "Adórenme"
  - gratitud_exigida_a_los_esclavos
  - "Ten presente que no se debe ni pensar en estas cosas prohibidas"
  - Emily_Dickinson_olvido_y_contemplacion
criterio_de_validacion:
  - el caso pertenece al molde si obedecer el mandato impide realizar auténticamente lo mandado
funcion_local_en_el_texto:
  - trasladar la distinción lógica a situaciones psicológicas, familiares e institucionales
  - mostrar que algunos estados no pueden producirse por mandato directo
  - preparar el análisis de la voluntad de olvidar y de la producción activa de una negación pasiva
conecta_con:
  - MN_PRESENCIA_AUSENCIA_INTENCIONAL
  - MN_VOLUNTAD_DE_OLVIDAR
  - MN_KRUSCHOV_VIOLENCIA_PARA_DEJAR_VIOLENCIA
```

---

### 15.1. `EJ_NO_SEAS_TAN_SUMISO`

```yaml
orden_textual: 15.1
mnode_id: EJ_NO_SEAS_TAN_SUMISO
tipo_de_unidad: ejemplo_pragmatico_de_requerimiento_contradictorio
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Así, el requerimiento 'No seas tan sumiso' ... pone al destinatario en una
  situación imposible: para obedecer no debe obedecer."
formulacion: >
  El mandato "No seas tan sumiso" exige que el destinatario obedezca una orden
  cuyo contenido consiste precisamente en dejar de obedecer.
rol_operativo: ejemplificar_contradiccion_entre_obediencia_y_no_sumision
estructura:
  mandato: "No seas tan sumiso"
  contenido_manifiesto: "deja de comportarte como alguien obediente o sometido"
  condicion_pragmatica_negada:
    - la_no_sumision_debe_surgir_como_autonomia
    - no_debe_ser_simple_obediencia_a_una_orden
  contradiccion:
    - para_obedecer_el_mandato_debe_no_obedecer
    - si_obedece_demuestra_sumision
    - si_no_obedece_tampoco_cumple_como_orden
  efecto:
    - doble_vinculo
    - imposibilidad_pragmatica
    - captura_del_destinatario_en_la_estructura_del_mandato
funcion_local_en_el_texto:
  - introducir el patrón básico del requerimiento contradictorio
  - mostrar que ciertas órdenes destruyen la condición de su propio cumplimiento
  - conectar con la idea sartreana del amor como demanda imposible de libertad obediente
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - MN_PRESENCIA_AUSENCIA_INTENCIONAL
```

---

### 15.2. `EJ_SE_ESPONTANEO`

```yaml
orden_textual: 15.2
mnode_id: EJ_SE_ESPONTANEO
tipo_de_unidad: ejemplo_psicologico_de_requerimiento_contradictorio
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "De manera similar, el requerimiento 'Sé espontáneo' demanda un esfuerzo
  volitivo para realizar algo cuya esencia es precisamente la falta de deliberación."
formulacion: >
  El mandato "Sé espontáneo" exige producir mediante voluntad deliberada un estado
  que sólo es espontáneo si no surge de deliberación voluntaria.
rol_operativo: ejemplificar_contradiccion_entre_voluntad_y_espontaneidad
estructura:
  mandato: "Sé espontáneo"
  contenido_manifiesto: "actúa sin cálculo, sin deliberación, de manera natural"
  condicion_pragmatica_negada:
    - la_espontaneidad_exige_falta_de_deliberacion
    - la_espontaneidad_no_puede_ser_forzada_directamente
  contradiccion:
    - se_exige_un_esfuerzo_volitivo_para_producir_no_deliberacion
    - cuanto_mas_se_intenta_ser_espontaneo_menos_espontaneo_se_es
  efecto:
    - autoobservacion_excesiva
    - perdida_de_espontaneidad
    - produccion_del_efecto_contrario
funcion_local_en_el_texto:
  - ampliar el molde desde obediencia/no obediencia hacia deliberación/no deliberación
  - mostrar que ciertos estados psicológicos son destruidos por la intención directa de producirlos
  - preparar la estructura de "querer olvidar" y "querer no pensar"
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - MN_VOLUNTAD_DE_OLVIDAR
```

---

### 15.3. `EJ_ADORENME`

```yaml
orden_textual: 15.3
mnode_id: EJ_ADORENME
tipo_de_unidad: ejemplo_politico_afectivo_de_requerimiento_contradictorio
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Los gobernantes tiránicos de la Antigüedad exigían 'Adórenme'..."
formulacion: >
  El mandato "Adórenme" exige una actitud afectiva o reverencial que sólo tendría
  sentido si surgiera libremente, no como obediencia forzada.
rol_operativo: ejemplificar_imposibilidad_de_producir_adoracion_por_coaccion
estructura:
  mandato: "Adórenme"
  contenido_manifiesto: "sientan veneración, devoción o reverencia hacia mí"
  condicion_pragmatica_negada:
    - la_adoracion_autentica_exige_adhesion_afectiva
    - la_veneracion_no_puede_ser_equivalente_a_sumision_forzada
  contradiccion:
    - el_tirano_exige_como_libre_una_actitud_producida_por_miedo
    - la_obediencia_externa_no_garantiza_adoracion_interna
  efecto:
    - culto_vacio
    - simulacion_de_devocion
    - distancia_entre_conducta_externa_y_estado_interno
funcion_local_en_el_texto:
  - desplazar el requerimiento contradictorio del plano familiar o psicológico al plano político
  - mostrar que el poder puede exigir signos externos de una disposición interna que no puede producir
  - anticipar problemas institucionales de regímenes que confunden sumisión con adhesión real
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - MN_KRUSCHOV_VIOLENCIA_PARA_DEJAR_VIOLENCIA
```

---

### 15.4. `EJ_GRATITUD_DE_LOS_ESCLAVOS`

```yaml
orden_textual: 15.4
mnode_id: EJ_GRATITUD_DE_LOS_ESCLAVOS
tipo_de_unidad: ejemplo_social_moral_de_requerimiento_contradictorio
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Los esclavistas norteamericanos demandaban gratitud de sus esclavos, a la
  manera del Señor hegeliano: todas pretensiones incoherentes e imposibles."
formulacion: >
  Exigir gratitud a los esclavos es contradictorio porque la gratitud auténtica
  presupone libertad, reconocimiento de un beneficio y ausencia de coacción.
rol_operativo: ejemplificar_incoherencia_moral_de_exigir_disposiciones_afectivas_a_sujetos_dominados
estructura:
  mandato: "Sientan gratitud hacia sus amos"
  contenido_manifiesto: "reconozcan agradecidamente el supuesto beneficio recibido"
  condicion_pragmatica_negada:
    - la_gratitud_exige_libertad_afectiva
    - la_gratitud_presupone_beneficio_no_coaccion
    - la_gratitud_no_puede_ser_extraida_por_dominacion
  contradiccion:
    - se_exige_agradecimiento_a_quien_esta_sometido
    - el_contexto_de_esclavitud_destruye_las_condiciones_de_gratitud_autentica
  efecto:
    - gratitud_fingida
    - reconocimiento_forzado
    - reproduccion_de_la_relacion_amo_esclavo
funcion_local_en_el_texto:
  - conectar el requerimiento contradictorio con la dialéctica hegeliana del amo y el esclavo
  - mostrar que la dominación quiere recibir reconocimiento libre de quienes no son libres
  - reforzar el carácter incoherente de ciertas pretensiones políticas y morales
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - HISTORIA_CONCEPTUAL_HEGEL_DESEO_OBJETO
  - MN_PARADOJA_ATEISMO_MILITANTE
```

---

### 15.5. `EJ_NO_PENSAR_EN_COSAS_PROHIBIDAS`

```yaml
orden_textual: 15.5
mnode_id: EJ_NO_PENSAR_EN_COSAS_PROHIBIDAS
tipo_de_unidad: ejemplo_psicologico_central
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Una madre exhorta a su hija: 'Ten presente que no se debe ni pensar en estas
  cosas prohibidas', lo que lleva justamente a pensar en ellas para no pensar en ellas."
formulacion: >
  El mandato de no pensar en algo prohibido obliga a representarlo mentalmente
  para poder evitarlo, produciendo así el pensamiento que intenta prohibir.
rol_operativo: mostrar_produccion_activa_del_contenido_que_se_quiere_ausentar
estructura:
  mandato: "Ten presente que no se debe ni pensar en estas cosas prohibidas"
  contenido_manifiesto: "no pienses en x"
  condicion_pragmatica_negada:
    - no_pensar_en_x_exige_ausencia_de_x_en_la_conciencia
    - pero_controlar_no_pensar_en_x_exige_representar_x
  contradiccion:
    - para_no_pensar_en_x_hay_que_pensar_en_x
    - la_vigilancia_contra_el_pensamiento_prohibido_lo_vuelve_presente
  efecto:
    - retorno_del_contenido_prohibido
    - presencia_intencional_de_lo_ausente
    - imposibilidad_de_producir_olvido_o_ausencia_por_control_directo
funcion_local_en_el_texto:
  - introducir el ejemplo más importante para el contexto del ensayo
  - conectar requerimiento contradictorio con voluntad de olvidar
  - mostrar que la negación activa mantiene presente aquello que intenta excluir
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - MN_PRESENCIA_AUSENCIA_INTENCIONAL
  - MN_VOLUNTAD_DE_OLVIDAR
```

---

### 15.6. `CITA_EMILY_DICKINSON_CORAZON_NO_OLVIDA`

```yaml
orden_textual: 15.6
mnode_id: CITA_EMILY_DICKINSON_CORAZON_NO_OLVIDA
tipo_de_unidad: cita_poetica_condensadora
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "The Heart cannot forget / Unless it contemplate / What it declines."
formulacion: >
  El corazón no puede olvidar sin contemplar aquello que intenta rechazar; por
  eso, el acto de olvidar conserva presente lo olvidado como objeto de contemplación.
rol_operativo: condensar_poeticamente_la_paradoja_del_olvido
estructura:
  sujeto: el_corazon
  estado_deseado: olvidar
  condicion_paradojica:
    - para_olvidar_debe_contemplar
    - lo_rechazado_permanece_presente_como_objeto_de_rechazo
  consecuencia:
    - el_olvido_no_puede_producirse_por_simple_decision
    - el_rechazo_mantiene_vivo_lo_rechazado
funcion_local_en_el_texto:
  - cerrar el bloque de requerimiento contradictorio con una formulación poética
  - reforzar la transición hacia el problema de la voluntad de olvidar
  - mostrar en forma condensada que la negación activa conserva su objeto
conecta_con:
  - EJ_NO_PENSAR_EN_COSAS_PROHIBIDAS
  - MN_VOLUNTAD_DE_OLVIDAR
  - MN_PRESENCIA_AUSENCIA_INTENCIONAL
```

## 16. `MN_VOLUNTAD_DE_OLVIDAR`

```yaml
orden_textual: 16
mnode_id: MN_VOLUNTAD_DE_OLVIDAR
tipo_de_unidad: ejemplo_psicologico_central
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Querer olvidar es imposible porque exige mantener presente aquello cuya ausencia
  se quiere producir.
rol_operativo: ejemplificar_imposibilidad_de_producir_negacion_pasiva_por_negacion_activa
estructura:
  estado_deseado: olvido / indiferencia
  tipo_de_estado: negacion_pasiva
  acto_intencional: voluntad_de_olvidar
  problema: conciencia_de_la_ausencia_de_x_mantiene_x_presente
funcion_local_en_el_texto:
  - condensar la paradoja práctica de la negación activa
  - preparar los ejemplos de fe, inocencia, sinceridad y espontaneidad
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - DIS_APLICACION_A_IBANSK
```

---

## 17. Bloque de transición: de la distinción lógica a la sociología de Ibansk

Este bloque no debe procesarse como una simple transición expositiva. Su función es convertir la diferencia entre negación activa y negación pasiva en una herramienta para analizar fenómenos sociales concretos: régimen, oposición, carrerismo, denuncia, poder, mediocridad y proceso histórico.

---

### 17.1. `PLAN_APLICACION_A_SINOVIEV`

```yaml
orden_textual: 17.1
mnode_id: PLAN_APLICACION_A_SINOVIEV
tipo_de_unidad: plan_expositivo_de_aplicacion
familia_cognitiva: FAM-Plan
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Para poner en evidencia la significación de estas diferenciaciones en la obra
  de Sinoviev, se analizará primeramente el régimen de Ibansk, luego las relaciones
  de este régimen con la oposición (interna y externa) y finalmente la estructura
  interna de la oposición interna."
formulacion: >
  El ensayo pasa de la fundamentación lógico-filosófica a una aplicación sociológica
  escalonada: primero el régimen de Ibansk, luego su relación con la oposición y
  finalmente la estructura interna de la oposición.
rol_operativo: abrir_aplicacion_sociologica_de_la_distincion
estructura:
  fase_1:
    objeto: regimen_de_Ibansk
    funcion: analizar_mecanismos_institucionales
  fase_2:
    objeto: relacion_regimen_oposicion
    funcion: analizar_interaccion_entre_poder_y_negacion
  fase_3:
    objeto: estructura_interna_de_la_oposicion_interna
    funcion: mostrar_que_la_oposicion_tambien_esta_atrapada_en_la_logica_de_Ibansk
  resultado_esperado:
    - primera_conclusion_sobre_impotencia_del_regimen
    - diferenciacion_de_dos_sentidos_de_negacion_de_la_negacion
funcion_local_en_el_texto:
  - marcar el paso desde lógica y filosofía hacia sociología política
  - anunciar la arquitectura de la segunda mitad del ensayo
  - preparar la tesis sobre la impotencia profunda del régimen
conecta_con:
  - DIS_APLICACION_A_IBANSK
  - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
  - MN_NEGACION_DE_LA_NEGACION_DIALECTICA
  - MN_NEGACION_DE_LA_NEGACION_LOGICA
```

---

### 17.2. `PR_IMPOTENCIA_DEL_REGIMEN_A_NEGACION_DE_LA_NEGACION`

```yaml
orden_textual: 17.2
mnode_id: PR_IMPOTENCIA_DEL_REGIMEN_A_NEGACION_DE_LA_NEGACION
tipo_de_unidad: anticipacion_argumental
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "De allí resultará una primera conclusión referida a la profundidad de la
  impotencia del régimen, impotencia que finalmente permite diferenciar dos
  significados del concepto de 'negación de la negación' como forma del proceso histórico."
formulacion: >
  El análisis de Ibansk debe conducir a una conclusión sobre la impotencia del
  régimen, y esa impotencia permitirá distinguir dos sentidos históricos de la
  negación de la negación.
rol_operativo: anticipar_conclusion_teorica_desde_analisis_sociologico
premisas_anticipadas:
  - el_regimen_puede_destruir_pero_no_crear
  - la_sociedad_funciona_por_mecanismos_absurdos_pero_estables
  - los_intentos_de_reforma_quedan_atrapados_en_la_logica_que_intentan_negar
conclusion_anticipada:
  - la_negacion_de_la_negacion_no_debe_entenderse_de_un_solo_modo
funcion_local_en_el_texto:
  - avisar que los fenómenos sociológicos no serán ejemplos aislados
  - preparar el cierre sobre poder, impotencia e historia
conecta_con:
  - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
  - MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL
  - MN_NEGACION_DE_LA_NEGACION_LOGICA
```

---

### 17.3. `DIS_APLICACION_A_IBANSK`

```yaml
orden_textual: 17.3
mnode_id: DIS_APLICACION_A_IBANSK
tipo_de_unidad: aplicacion_sociologica
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Ibansk es el campo de aplicación donde la confusión entre negación activa y pasiva
  se vuelve principio de organización social e institucional.
rol_operativo: trasladar_herramienta_logica_a_sociologia_politica
estructura:
  regimen:
  instituciones:
  oposicion:
  derecho:
  poder:
  historia:
funcion_local_en_el_texto:
  - cambiar de análisis lógico a análisis sociológico
  - mostrar que una distinción formal puede explicar fenómenos políticos
  - organizar los bloques de denuncia, carrerismo, personalidad, derecho, poder y proceso histórico
conecta_con:
  - MN_DENUNCIA_SUSTITUYE_INFORMACION
  - DIS_SOCIOLOGIA_DEL_CARRERISMO
  - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
  - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
```

---

## 18. Bloque Ibansk: atmósfera tragicoburlesca y sociología de las minucias

### 18.1. `MN_ATMOSFERA_TRAGICOBURLESCA`

```yaml
orden_textual: 18.1
mnode_id: MN_ATMOSFERA_TRAGICOBURLESCA
tipo_de_unidad: caracterizacion_estetico_sociologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La atmósfera tragicoburlesca de Gähnende Höhen deriva del hecho de que Sinoviev
  somete fenómenos tales como la denuncia y el ansia de hacer carrera a un análisis
  sociológico que individualmente tiene un efecto burlesco, pero en conjunto
  impresionan como trágicos."
formulacion: >
  La obra de Sinoviev produce una atmósfera tragicoburlesca porque analiza
  sociológicamente fenómenos aparentemente pequeños, ridículos o burlescos que,
  al repetirse sistemáticamente, revelan una tragedia social.
rol_operativo: caracterizar_el_efecto_total_del_analisis_sinovieviano
estructura:
  fenomenos_analizados:
    - denuncia
    - ansia_de_hacer_carrera
    - minucias_sociales
  efecto_individual:
    - burlesco
    - grotesco
    - farsesco
  efecto_de_conjunto:
    - tragico
    - sistemico
    - opresivo
funcion_local_en_el_texto:
  - introducir el tono sociológico-literario del análisis de Ibansk
  - mostrar que Sinoviev no analiza grandes abstracciones sino microfenómenos repetidos
  - preparar la idea de sistema de minucias
conecta_con:
  - MN_SISTEMA_DE_MINUCIAS
  - MN_DENUNCIA_SUSTITUYE_INFORMACION
  - DIS_SOCIOLOGIA_DEL_CARRERISMO
```

---

### 18.2. `MN_SISTEMA_DE_MINUCIAS`

```yaml
orden_textual: 18.2
mnode_id: MN_SISTEMA_DE_MINUCIAS
tipo_de_unidad: tesis_sociologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Una farsa que se repite regularmente también es una tragedia..."
  "Una minucia va, la otra viene pero el sistema de minucias permanece..."
formulacion: >
  En Ibansk, lo trágico no proviene sólo de grandes acontecimientos, sino de la
  repetición regular de farsas y minucias que forman un sistema estable.
rol_operativo: explicar_como_lo_burlesco_se_convierte_en_tragico
estructura:
  unidad_local:
    - farsa
    - minucia
    - episodio_ridiculo
  repeticion:
    - regularidad
    - permanencia
    - sustitucion_de_una_minucia_por_otra
  efecto_global:
    - tragedia_sistemica
    - estructura_social_opresiva
funcion_local_en_el_texto:
  - transformar la lectura de episodios ridículos en análisis de sistema
  - conectar la burla con la tragedia
  - justificar por qué denuncia y carrerismo deben tratarse sociológicamente
conecta_con:
  - MN_ATMOSFERA_TRAGICOBURLESCA
  - DIS_APLICACION_A_IBANSK
```

---

### 18.3. `MN_HISTORIA_TRAGEDIA_FARSA_SINOVIEV`

```yaml
orden_textual: 18.3
mnode_id: MN_HISTORIA_TRAGEDIA_FARSA_SINOVIEV
tipo_de_unidad: variacion_de_formula_historica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La historia se repite 'una vez como tragedia y otra como farsa'."
formulacion: >
  Sinoviev inserta la fórmula tragedia/farsa en una atmósfera donde la repetición
  de lo farsesco no elimina lo trágico, sino que lo reproduce como rutina social.
rol_operativo: conectar_repeticion_historica_con_repeticion_social
funcion_local_en_el_texto:
  - reforzar la idea de repetición degradada
  - preparar el análisis de instituciones que convierten absurdo local en tragedia global
conecta_con:
  - MN_SISTEMA_DE_MINUCIAS
  - MN_HISTORIA_NO_DEJA_HUELLAS_SINO_CONSECUENCIAS
```

---

## 19. Bloque denuncia / información / verdad

### 19.1. `MN_DENUNCIA_COMO_FENOMENO_CONSTITUTIVO`

```yaml
orden_textual: 19.1
mnode_id: MN_DENUNCIA_COMO_FENOMENO_CONSTITUTIVO
tipo_de_unidad: caracterizacion_institucional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "En lo que se refiere a la denuncia, un fenómeno constitutivo de todo estrato
  social en Ibansk..."
formulacion: >
  La denuncia no es un accidente marginal en Ibansk, sino un fenómeno constitutivo
  de todos los estratos sociales.
rol_operativo: introducir_denuncia_como_mecanismo_social_general
estructura:
  fenomeno: denuncia
  alcance:
    - todo_estrato_social
    - vida_institucional
    - relaciones_sociales
  estatuto:
    - constitutivo
    - sistemico
funcion_local_en_el_texto:
  - mostrar que la denuncia no pertenece sólo al aparato policial
  - preparar la idea de que la información se transforma en denuncia
conecta_con:
  - MN_DENUNCIA_SUSTITUYE_INFORMACION
```

---

### 19.2. `MN_DENUNCIA_SUSTITUYE_INFORMACION`

```yaml
orden_textual: 19.2
mnode_id: MN_DENUNCIA_SUSTITUYE_INFORMACION
tipo_de_unidad: mecanismo_institucional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La particularidad de la situación consiste en que la información es falaz en
  su calidad de fenómeno público y oficial y se convierte muy rápidamente en
  denuncia en su calidad de secreto."
formulacion: >
  En Ibansk, la información pública y oficial es falsa, mientras que la información
  secreta se transforma rápidamente en denuncia.
rol_operativo: mostrar_degradacion_institucional_de_la_informacion
estructura:
  informacion_publica_oficial:
    cualidad: falaz
    funcion_degradada: apariencia_informativa
  informacion_secreta:
    transformacion: denuncia
    funcion_degradada: arma_social_o_institucional
  resultado:
    - perdida_de_informacion_confiable
    - sustitucion_de_verdad_por_imputacion
    - circulacion_de_datos_como_sospecha
funcion_local_en_el_texto:
  - mostrar cómo una función racional se invierte institucionalmente
  - ejemplificar la sociología tragicoburlesca de Sinoviev
  - preparar la crítica a la idea ingenua de una central totalitaria omnisciente
conecta_con:
  - MN_DENUNCIA_COMO_FENOMENO_CONSTITUTIVO
  - PR_TOTALITARISMO_NO_OMNISCIENTE
  - DIS_MOLDE_INSTITUCION_IBANSKIANA
```

---

### 19.3. `PR_TOTALITARISMO_NO_OMNISCIENTE`

```yaml
orden_textual: 19.3
mnode_id: PR_TOTALITARISMO_NO_OMNISCIENTE
tipo_de_unidad: correccion_de_suposicion_ingenua
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Ingenuamente se querría suponer que en todo régimen totalitario debe haber una
  central en el ministerio del Interior que dispone de información completa y
  confiable... según Sinoviev, sin embargo, no es así, ya que nadie tiene interés
  en decir la verdad."
formulacion: >
  Aunque parecería que un régimen totalitario necesita información confiable para
  oprimir eficazmente, Sinoviev sostiene que tal información no existe porque
  nadie tiene interés en decir la verdad.
rol_operativo: desmontar_imagen_del_totalitarismo_como_omnisciencia
premisas:
  - un_regimen_totalitario_parece_necesitar_informacion_completa
  - la_informacion_completa_seria_util_para_ejercer_opresion
  - en_Ibansk_nadie_tiene_interes_en_decir_la_verdad
conclusion:
  - el_regimen_no_posee_un_centro_omnisciente_de_informacion_confiable
funcion_local_en_el_texto:
  - mostrar que el poder totalitario puede ser opresivo sin ser cognitivamente eficaz
  - preparar la tesis de poder negativamente todopoderoso y positivamente impotente
conecta_con:
  - MN_DENUNCIA_SUSTITUYE_INFORMACION
  - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
```

---

## 20. Bloque carrerismo / mediocridad / banalidad social

### 20.1. `DIS_SOCIOLOGIA_DEL_CARRERISMO`

```yaml
orden_textual: 20.1
mnode_id: DIS_SOCIOLOGIA_DEL_CARRERISMO
tipo_de_unidad: programa_sociologico
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Sinoviev debe ser considerado como fundamentador de una sociología del ansia
  de hacer carrera, un rasgo básico y general de la sociedad de Ibansk."
formulacion: >
  Sinoviev funda una sociología del carrerismo, entendido no como vicio individual
  aislado sino como rasgo básico y general de la sociedad de Ibansk.
rol_operativo: establecer_carrerismo_como_objeto_sociologico
estructura:
  objeto: ansia_de_hacer_carrera
  estatuto:
    - rasgo_basico
    - rasgo_general
    - mecanismo_social
  campo_de_aplicacion: sociedad_de_Ibansk
funcion_local_en_el_texto:
  - pasar de la denuncia a otro mecanismo constitutivo de Ibansk
  - ampliar el análisis desde información degradada hacia movilidad social degradada
conecta_con:
  - MN_CARRERISMO_CINICO_EVIDENTE
  - MN_CARRERISMO_MEDIOCRE
```

---

### 20.2. `MN_CARRERISMO_CINICO_EVIDENTE`

```yaml
orden_textual: 20.2
mnode_id: MN_CARRERISMO_CINICO_EVIDENTE
tipo_de_unidad: primer_tipo_de_carrerismo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "El autoprotagonista desarrolla sus reflexiones sobre este fenómeno haciéndolo
  ver en su forma más evidente, caracterizada por el cinismo, la falta total de
  una conciencia moral y por la picardía en el aprovechamiento juguetón de las
  relaciones personales."
formulacion: >
  La forma evidente del carrerismo ibanskiano combina cinismo, ausencia de
  conciencia moral y habilidad para explotar relaciones personales.
rol_operativo: presentar_tipo_visible_de_carrerismo
estructura:
  tipo: carrerista_cinico_talentoso
  rasgos:
    - cinismo
    - falta_de_conciencia_moral
    - picardia_social
    - uso_jugueton_de_relaciones_personales
  estatuto:
    - forma_evidente
    - forma_intuitivamente_reconocible
funcion_local_en_el_texto:
  - introducir el concepto de carrerismo en su forma más visible
  - preparar el contraste con una forma más profunda y desconcertante
conecta_con:
  - DIS_SOCIOLOGIA_DEL_CARRERISMO
  - MN_AGAFONOW_CARRERISMO_MEDIOCRE
```

---

### 20.3. `MN_AGAFONOW_CARRERISMO_MEDIOCRE`

```yaml
orden_textual: 20.3
mnode_id: MN_AGAFONOW_CARRERISMO_MEDIOCRE
tipo_de_unidad: ejemplo_ancla_de_segundo_tipo
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Este Agafonow en cambio, ha confundido todas mis imágenes de un arribista
  soviético... Y sin embargo, de pronto se fue violentamente hacia arriba..."
formulacion: >
  Agafonow representa un tipo desconcertante de ascenso: no es especialmente
  talentoso, cínico, protegido ni brillante, pero asciende violentamente en la
  estructura institucional.
rol_operativo: introducir_carrerismo_por_mediocridad
estructura:
  sujeto: Agafonow
  rasgos:
    - no_es_bello_pero_no_desagradable
    - no_es_inteligente_pero_tampoco_tonto
    - bonachon
    - indolente
    - soñoliento
    - sin_parientes_en_posiciones_elevadas
    - sin_protector
    - autor_de_libritos_filosofico_populares
  resultado:
    - entra_en_redaccion_importante
    - obtiene_catedra
    - se_vuelve_redactor
    - es_elegido_miembro_correspondiente_de_la_Academia
funcion_local_en_el_texto:
  - romper la imagen previa del carrerista cínico y talentoso
  - mostrar una forma más profunda de carrerismo: ascenso por ausencia de rasgos destacados
  - preparar la diferencia entre cualidades negativas y ausencia notable de cualidades
conecta_con:
  - MN_CARRERISMO_CINICO_EVIDENTE
  - MN_CARRERISMO_MEDIOCRE
```

---

### 20.4. `MN_PREMIO_A_AUTOR_SIN_TALENTO_NI_SERVICIO`

```yaml
orden_textual: 20.4
mnode_id: MN_PREMIO_A_AUTOR_SIN_TALENTO_NI_SERVICIO
tipo_de_unidad: ejemplo_isomorfo_de_mediocridad_recompensada
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Un misterio similar rodea el otorgamiento de un premio literario a un autor
  que no sólo carece por completo de talento... sino que ni siquiera ha servido
  con fidelidad y bravura al Partido o al Estado soviético."
formulacion: >
  El premio al autor sin talento y sin mérito partidario refuerza que en Ibansk
  el ascenso no depende ni de cualidades positivas ni de cualidades negativas
  notables, sino de una mediocridad estructuralmente conveniente.
rol_operativo: reforzar_por_segunda_instancia_el_molde_de_mediocridad_exitosa
estructura:
  sujeto: autor_premiado
  ausencia_de_merito:
    - sin_talento_literario
    - sin_servicio_fiel_y_bravo_al_Partido
    - sin_servicio_fiel_y_bravo_al_Estado
  resultado:
    - recibe_premio_literario
funcion_local_en_el_texto:
  - mostrar que Agafonow no es un caso aislado
  - preparar la regla general del segundo tipo de carrerismo
conecta_con:
  - MN_AGAFONOW_CARRERISMO_MEDIOCRE
  - MN_CARRERISMO_MEDIOCRE
```

---

### 20.5. `MN_CARRERISMO_MEDIOCRE`

```yaml
orden_textual: 20.5
mnode_id: MN_CARRERISMO_MEDIOCRE
tipo_de_unidad: distincion_sociologica_nuclear
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Ser un carrerista talentoso implica poseer notables cualidades negativas;
  ser extraordinariamente mediocre para hacer carrera supone una ausencia notable
  de cualidades. En la sociedad de Ibansk, el mayor éxito lo cosecha el segundo tipo."
formulacion: >
  En Ibansk el éxito máximo no corresponde al carrerista talentoso, que posee
  cualidades negativas notables, sino al extraordinariamente mediocre, definido
  por una ausencia notable de cualidades.
rol_operativo: formular_distincion_central_del_carrerismo_ibanskiano
estructura:
  tipo_1:
    nombre: carrerista_talentoso
    rasgo: cualidades_negativas_notables
    ejemplos:
      - cinismo
      - picardia
      - falta_de_conciencia_moral
  tipo_2:
    nombre: carrerista_extraordinariamente_mediocre
    rasgo: ausencia_notable_de_cualidades
    ventaja_en_Ibansk: maxima
  regla:
    formulacion: >
      Desde el punto de vista de hacer carrera, el más capacitado es justamente
      quien posee menos talento para hacer carrera.
funcion_local_en_el_texto:
  - invertir la expectativa normal sobre éxito social
  - conectar mediocridad con negación pasiva
  - preparar la tesis sobre banalidad del poder
conecta_con:
  - MN_AGAFONOW_CARRERISMO_MEDIOCRE
  - MN_PREMIO_A_AUTOR_SIN_TALENTO_NI_SERVICIO
  - MN_PODER_BANAL_INEXPUGNABLE
  - MN_TENSION_NEGACION_ACTIVA_PASIVA_HOMBRE_IBANSK
```

---

### 20.6. `MN_REY_DE_LAS_RATAS_NO_LEON`

```yaml
orden_textual: 20.6
mnode_id: MN_REY_DE_LAS_RATAS_NO_LEON
tipo_de_unidad: imagen_social_metaforica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "El rey de las ratas no puede ser un león."
formulacion: >
  El sistema de Ibansk no produce ni requiere figuras leoninas, sino sujetos
  perfectamente adecuados a un orden de ratas: banales, mediocres y funcionales.
rol_operativo: condensar_metaforicamente_la_adecuacion_entre_tipo_humano_y_sistema
estructura:
  sistema: Ibansk
  figura_adecuada: rey_de_las_ratas
  figura_imposible: leon
  inferencia:
    - un_sistema_banal_no_necesita_grandeza
    - la_mediocridad_no_es_accidental_sino_funcional
funcion_local_en_el_texto:
  - condensar la sociología de la mediocridad
  - preparar la noción de poder banal e inexpugnable
conecta_con:
  - MN_CARRERISMO_MEDIOCRE
  - MN_PODER_BANAL_INEXPUGNABLE
```

---

### 20.7. `MN_PODER_BANAL_INEXPUGNABLE`

```yaml
orden_textual: 20.7
mnode_id: MN_PODER_BANAL_INEXPUGNABLE
tipo_de_unidad: tesis_sociopolitica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La impresión de que se hubiera colisionado con un poder indescriptiblemente
  banal y por eso inexpugnable."
formulacion: >
  El poder de Ibansk es inexpugnable no por grandeza demoníaca o intensidad maligna,
  sino por su banalidad: no ofrece un objeto sólido contra el cual resistir.
rol_operativo: desplazar_el_mal_del_plano_individual_al_social
estructura:
  rasgo_del_poder: banalidad
  efecto: inexpugnabilidad
  razon:
    - no_hay_objeto_negativo_claro
    - no_hay_presencia_intensa_que_combatir
    - la_ausencia_de_cualidades_desactiva_la_resistencia
funcion_local_en_el_texto:
  - conectar carrerismo mediocre con poder social
  - preparar la idea de que no es posible oponerse a una ausencia
  - introducir la banalidad de lo malo en plano social
conecta_con:
  - MN_CARRERISMO_MEDIOCRE
  - MN_NO_ES_POSIBLE_OPONERSE_A_UNA_AUSENCIA
  - MN_BANALIDAD_SOCIAL_DE_LO_MALO
```

---

### 20.8. `MN_NO_ES_POSIBLE_OPONERSE_A_UNA_AUSENCIA`

```yaml
orden_textual: 20.8
mnode_id: MN_NO_ES_POSIBLE_OPONERSE_A_UNA_AUSENCIA
tipo_de_unidad: tesis_sobre_resistencia
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "No es posible oponerse a una ausencia; mejor sería la presencia de algo negativo
  que ofreciera un objetivo a la resistencia."
formulacion: >
  La resistencia necesita un objeto; por eso es más fácil oponerse a una presencia
  negativa que a una ausencia banal de cualidades.
rol_operativo: explicar_inexpugnabilidad_de_la_negacion_pasiva
estructura:
  objeto_resistible:
    tipo: presencia_negativa
    ejemplo: enemigo_identificable
  objeto_no_resistible:
    tipo: ausencia_banal
    ejemplo: mediocridad_sin_cualidades
  conclusion:
    - la_negacion_pasiva_puede_ser_mas_poderosa_que_la_negacion_activa
funcion_local_en_el_texto:
  - conectar mediocridad social con la lógica de negación pasiva
  - mostrar por qué lo malo triunfa cuando deja de aparecer como mal activo
conecta_con:
  - MN_PODER_BANAL_INEXPUGNABLE
  - MN_BANALIDAD_SOCIAL_DE_LO_MALO
  - MN_TENSION_NEGACION_ACTIVA_PASIVA_HOMBRE_IBANSK
```

---

### 20.9. `MN_BANALIDAD_SOCIAL_DE_LO_MALO`

```yaml
orden_textual: 20.9
mnode_id: MN_BANALIDAD_SOCIAL_DE_LO_MALO
tipo_de_unidad: desplazamiento_teorico
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Sinoviev retoma aquí el tema de la banalidad de lo malo al que desplaza del
  plano individual al social."
formulacion: >
  Sinoviev desplaza la banalidad de lo malo desde el individuo hacia la sociedad:
  lo malo triunfa no como intensidad demoníaca individual, sino como mediocridad
  social pasiva y banal.
rol_operativo: reformular_banalidad_del_mal_como_estructura_social
premisas:
  - la_mediocridad_exitosa_no_ofrece_objeto_claro_de_resistencia
  - la_ausencia_de_cualidades_puede_ser_funcional_al_sistema
  - lo_malo_activo_es_mas_identificable_que_lo_malo_pasivo
conclusion:
  - lo_malo_triunfa_cuando_se_convierte_en_negacion_pasiva_y_banal_de_lo_bueno
funcion_local_en_el_texto:
  - conectar Sinoviev con una tradición de análisis del mal banal
  - preparar las referencias a Yeats, Tocqueville y Marx
conecta_con:
  - MN_NO_ES_POSIBLE_OPONERSE_A_UNA_AUSENCIA
  - PR_EXISTIR_COMO_OBJETO_DE_NEGACION
```

---

### 20.10. `PR_EXISTIR_COMO_OBJETO_DE_NEGACION`

```yaml
orden_textual: 20.10
mnode_id: PR_EXISTIR_COMO_OBJETO_DE_NEGACION
tipo_de_unidad: patron_de_razonamiento_con_apoyos_intertextuales
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Según Yeats...", "Según Tocqueville...", "Según el joven Marx..."
  "Existir como objeto de una negación es, no obstante, una forma de existencia
  que tiene más peso que la ausencia total de conciencia de los seres humanos."
formulacion: >
  Ser objeto de una negación activa otorga más existencia que no aparecer en la
  conciencia; por eso la oposición intensa puede ser menos terrible que la
  indiferencia pasiva y banal.
rol_operativo: sostener_con_ejemplos_intertextuales_la_superioridad_existencial_de_la_negacion_activa
estructura:
  apoyos_intertextuales:
    Yeats:
      estructura: mejores_sin_esperanza_vs_peores_con_intensidad
    Tocqueville:
      estructura: religion_en_crisis_con_amigos_tibios_y_adversarios_violentos
    joven_Marx:
      estructura: libertad_de_prensa_amenazada_por_amigos_platonicos_y_adversarios_violentos
  regla_inferencial:
    - ser_negado_activamente_es_todavia_ser_tomado_como_objeto
    - no_ser_objeto_de_conciencia_es_una_forma_mas_radical_de_anulacion
conclusion:
  - lo_malo_triunfa_cuando_se_vuelve_negacion_pasiva_banal_de_lo_bueno
funcion_local_en_el_texto:
  - reforzar la tesis de que la ausencia puede ser más devastadora que la oposición
  - conectar el análisis de Ibansk con ejemplos literarios, religiosos y políticos
conecta_con:
  - MN_BANALIDAD_SOCIAL_DE_LO_MALO
  - MN_NO_ES_POSIBLE_OPONERSE_A_UNA_AUSENCIA
```

---

### 20.11. `PR_CONDUCTAS_EFECTIVAS_CUANDO_NO_BUSCAN_META`

```yaml
orden_textual: 20.11
mnode_id: PR_CONDUCTAS_EFECTIVAS_CUANDO_NO_BUSCAN_META
tipo_de_unidad: principio_general_de_eficacia_paradojica
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Determinadas conductas sólo son efectivas cuando ya no son efectivas para
  lograr la meta."
formulacion: >
  Algunas conductas sólo alcanzan su efecto cuando no son realizadas con la
  intención directa de alcanzar ese efecto.
rol_operativo: formular_principio_general_para_explicar_exito_de_la_mediocridad
estructura:
  conducta:
    - desconcertar
    - inspirar_amor
    - producir_numeros_casuales
    - escribir_best_seller
    - hacer_carrera_en_Ibansk
  condicion_de_eficacia:
    - ausencia_de_intencion_visible
    - incorporacion_real_del_horizonte
    - no_explotacion_calculada_desde_fuera
  razon:
    - la_intencion_es_dificil_de_ocultar
    - cuando_se_advierte_el_proposito_se_produce_disgusto
funcion_local_en_el_texto:
  - explicar por qué el mediocre auténtico tiene ventaja sobre el carrerista calculador
  - conectar carrerismo con espontaneidad, azar, amor y producción cultural
  - retomar el tema general de requerimientos contradictorios y efectos no intencionales
conecta_con:
  - MN_CARRERISMO_MEDIOCRE
  - EJ_SE_ESPONTANEO
  - MN_VOLUNTAD_DE_OLVIDAR
  - MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL
```

---

### 20.12. `EJ_AUTOR_TALENTOSO_BESTSELLER`

```yaml
orden_textual: 20.12
mnode_id: EJ_AUTOR_TALENTOSO_BESTSELLER
tipo_de_unidad: ejemplo_cultural_de_eficacia_paradojica
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "También deben recordarse las dificultades con que tropieza un autor talentoso
  cuando se dispone a escribir un best-seller..."
formulacion: >
  El autor talentoso que intenta escribir deliberadamente un best-seller fracasa
  porque su producto será demasiado bueno o demasiado malo; para acertar tendría
  que compartir realmente el horizonte limitado del público masivo.
rol_operativo: ejemplificar_principio_de_eficacia_no_intencional
estructura:
  sujeto: autor_talentoso
  meta: escribir_best_seller_para_ganarse_el_sustento
  problema:
    - si_trabaja_demasiado_bien_resulta_demasiado_bueno
    - si_trabaja_mal_otros_saben_trabajar_mal_mejor
  condicion_real_de_exito:
    - compartir_horizonte_y_prejuicios_del_publico_masivo
    - no_explotarlos_desde_una_distancia_superior
funcion_local_en_el_texto:
  - mostrar que el cálculo externo no sustituye la pertenencia real al horizonte mediocre
  - reforzar la ventaja estructural del mediocre auténtico
conecta_con:
  - PR_CONDUCTAS_EFECTIVAS_CUANDO_NO_BUSCAN_META
  - MN_CARRERISMO_MEDIOCRE
```

---

### 20.13. `MN_TENSION_MEDIOCRIDAD_PASIVA_PERSONALIDAD_NEGATIVA`

```yaml
orden_textual: 20.13
mnode_id: MN_TENSION_MEDIOCRIDAD_PASIVA_PERSONALIDAD_NEGATIVA
tipo_de_unidad: tension_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Pero este análisis del hombre de Ibansk parece contradecir la opinión reflejada
  en el párrafo siguiente..."
formulacion: >
  El análisis de la mediocridad como ausencia notable de cualidades parece entrar
  en tensión con la descripción de una personalidad negativa que no es simple
  ausencia, sino presencia de cualidades inversas.
rol_operativo: introducir_problema_de_coexistencia_entre_negacion_pasiva_y_negacion_activa
estructura:
  tesis_previa:
    nombre: mediocridad_pasiva
    descripcion: ausencia_notable_de_cualidades
  nueva_tesis_aparente:
    nombre: personalidad_negativa
    descripcion: presencia_de_cualidades_opuestas_a_las_positivas
  problema:
    - parece_haber_contradiccion
    - el_hombre_de_Ibansk_parece_ser_ausencia_y_presencia_negativa_a_la_vez
funcion_local_en_el_texto:
  - preparar el nodo posterior sobre personalidad negativa
  - mostrar que el análisis debe distinguir tipos de negatividad
  - impedir una lectura demasiado simple de la mediocridad como mera falta
conecta_con:
  - MN_CARRERISMO_MEDIOCRE
  - MN_TENSION_NEGACION_ACTIVA_PASIVA_HOMBRE_IBANSK
```

---

## 21. Bloque personalidad negativa / normalidad / negación pasiva del hombre de Ibansk

Este bloque resuelve un problema conceptual importante: ¿el hombre de Ibansk es una negación activa del hombre racional y moral, o una negación pasiva? Primero introduce la hipótesis activa mediante la imagen de una personalidad negativa cargada de cualidades inversas. Luego corrige esa lectura: la forma más desarrollada del hombre de Ibansk es pasiva, normal, banal y amoral.

### 21.1. `MN_TENSION_NEGACION_ACTIVA_PASIVA_HOMBRE_IBANSK`

```yaml
orden_textual: 21.1
mnode_id: MN_TENSION_NEGACION_ACTIVA_PASIVA_HOMBRE_IBANSK
tipo_de_unidad: tension_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "¿Es entonces el hombre de Ibansk la negación activa del hombre racional y moral,
  como parece indicarlo el párrafo precedente, o es la negación pasiva del tipo de Agafonow?"
formulacion: >
  El texto introduce una tensión: el hombre de Ibansk parece ser, por un lado,
  una ausencia mediocre de cualidades; pero, por otro lado, una personalidad
  negativa con cualidades inversas a las del hombre racional y moral.
rol_operativo: plantear_problema_de_clasificacion_antropologica
estructura:
  lectura_1:
    nombre: negacion_pasiva
    descripcion: ausencia_notable_de_cualidades
    ejemplo_soporte: tipo_Agafonow
  lectura_2:
    nombre: negacion_activa
    descripcion: presencia_de_cualidades_inversas_a_lo_racional_y_moral
    ejemplo_soporte: cita_de_Gaehnende_Hoehen_sobre_personalidad_negativa
  problema:
    - ambas_lecturas_parecen_aplicables
    - hay_que_decidir_cual_es_la_forma_mas_desarrollada
funcion_local_en_el_texto:
  - retomar la discusión previa sobre carrerismo mediocre
  - introducir una posible contradicción en el análisis del hombre de Ibansk
  - preparar la distinción entre personalidad negativa activa y normalidad pasiva
conecta_con:
  - MN_CARRERISMO_MEDIOCRE
  - MN_PERSONALIDAD_NEGATIVA_ELECTRON_POSITRON
  - PR_NEGACION_PASIVA_FORMA_MAS_DESARROLLADA
```

---

### 21.2. `MN_PERSONALIDAD_NEGATIVA_ELECTRON_POSITRON`

```yaml
orden_textual: 21.2
mnode_id: MN_PERSONALIDAD_NEGATIVA_ELECTRON_POSITRON
tipo_de_unidad: cita_conceptual_ancla
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Aquí no se trata simplemente de la falta de algo, sino de la presencia de otra cosa.
  El resultado final es un tipo de personalidad curiosamente negativa..."
formulacion: >
  La personalidad negativa no sería mera ausencia de cualidades positivas, sino
  presencia de cualidades inversas, análogas a una carga negativa frente a una positiva.
rol_operativo: formular_la_hipotesis_de_negacion_activa_del_hombre_moral
estructura:
  inversiones_valorativas:
    espiritu_y_entendimiento_sobresalientes: considerados_anormales
    tonteria_sobresaliente: considerada_signo_de_espiritu_y_entendimiento
    gran_jerarquia_moral: vista_como_indecencia_moral
    ceros_infames: vistos_como_modelos_de_virtud
  analogia:
    positivo: positron_o_carga_positiva
    negativo: electron_o_carga_negativa
    punto_clave:
      - la_presencia_de_carga_negativa_no_es_simple_ausencia_de_positiva
      - la_personalidad_negativa_posee_determinadas_cualidades
funcion_local_en_el_texto:
  - dar fuerza a la hipótesis de negación activa
  - mostrar que Ibansk no sólo invierte valores, sino que produce tipos humanos con cualidades propias
  - preparar la pregunta sobre si esta es la forma fundamental del hombre de Ibansk
conecta_con:
  - MN_TENSION_NEGACION_ACTIVA_PASIVA_HOMBRE_IBANSK
  - PR_NEGACION_PASIVA_FORMA_MAS_DESARROLLADA
```

---

### 21.3. `PR_NEGACION_PASIVA_FORMA_MAS_DESARROLLADA`

```yaml
orden_textual: 21.3
mnode_id: PR_NEGACION_PASIVA_FORMA_MAS_DESARROLLADA
tipo_de_unidad: resolucion_de_tension_conceptual
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Hay que suponer que la negación pasiva es la forma más desarrollada de la
  personalidad ibanskiana, aun cuando la negación activa es la más desconcertante
  debido a sus cualidades."
formulacion: >
  Aunque la negación activa resulta más visible y desconcertante porque posee
  cualidades inversas, la forma más desarrollada de la personalidad ibanskiana es
  la negación pasiva: normalidad mediocre, ausencia sistemática de cualidades
  notables y amoralidad banal.
rol_operativo: resolver_la_clasificacion_antropologica_del_hombre_de_Ibansk
premisas:
  - la_personalidad_negativa_activa_posee_cualidades_inversas
  - esas_cualidades_la_hacen_mas_desconcertante
  - el_universo_de_Ibansk_es_descrito_como_normal_y_sano
  - no_esta_poblado_por_demonios_ni_predicadores_de_inmoralidad
  - la_amoralidad_es_mas_fundamental_que_la_inmoralidad
conclusion:
  - la_negacion_pasiva_es_la_forma_mas_desarrollada_de_la_personalidad_ibanskiana
funcion_local_en_el_texto:
  - resolver la tensión entre Agafonow y la personalidad negativa
  - desplazar el análisis desde lo demoníaco hacia lo normalizado
  - preparar la tesis de amoralidad y negación lógica de la negación
conecta_con:
  - MN_PERSONALIDAD_NEGATIVA_ELECTRON_POSITRON
  - MN_NORMALIDAD_AMORALIDAD_IBANSK
  - MN_NEGACION_DE_LA_NEGACION_LOGICA_MORAL
```

---

### 21.4. `MN_NORMALIDAD_AMORALIDAD_IBANSK`

```yaml
orden_textual: 21.4
mnode_id: MN_NORMALIDAD_AMORALIDAD_IBANSK
tipo_de_unidad: caracterizacion_antropologica_social
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "No se lo puede curar porque es completamente normal y sano... No está poblado
  por demonios y predicadores de la inmoralidad; en el peor de los casos se puede
  hablar de amoralidad."
formulacion: >
  Ibansk no es un mundo de maldad demoníaca, sino un universo normalizado y sano
  según sus propios parámetros, donde la conciencia moral ha muerto y el resultado
  es amoralidad más que inmoralidad.
rol_operativo: caracterizar_la_normalidad_patologica_de_Ibansk
estructura:
  diagnostico_negado:
    - enfermedad
    - anormalidad
    - demonismo
    - inmoralidad_predicada
  diagnostico_afirmado:
    - normalidad
    - salud_del_sistema
    - muerte_de_la_conciencia_moral
    - amoralidad
  efecto_conceptual:
    - lo_malo_no_aparece_como_mal_activo
    - lo_malo_aparece_como_ausencia_normalizada_de_moral
funcion_local_en_el_texto:
  - justificar por qué la negación pasiva es más fundamental
  - impedir una lectura melodramática de Ibansk como sociedad demoníaca
  - preparar la idea de que la moral es negación de la conducta ciega
conecta_con:
  - PR_NEGACION_PASIVA_FORMA_MAS_DESARROLLADA
  - MN_NEGACION_DE_LA_NEGACION_LOGICA_MORAL
```

---

### 21.5. `MN_NEGACION_DE_LA_NEGACION_LOGICA_MORAL`

```yaml
orden_textual: 21.5
mnode_id: MN_NEGACION_DE_LA_NEGACION_LOGICA_MORAL
tipo_de_unidad: puente_hacia_teoria_historica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Si la moral es la negación de la conducta ciega, irreflexiva, Ibansk ofrece la
  negación de la negación, pero más bien en sentido lógico que en sentido dialéctico."
formulacion: >
  Si la moral niega la conducta ciega e irreflexiva, Ibansk niega esa negación:
  no produce una superación dialéctica, sino un retorno lógico hacia una conducta
  pre-moral, amoral y normalizada.
rol_operativo: conectar_antropologia_ibanskiana_con_negacion_de_la_negacion
estructura:
  primer_termino:
    conducta_ciega_irreflexiva: p
  primera_negacion:
    moral: negacion_de_conducta_ciega
  segunda_negacion:
    Ibansk: negacion_de_la_moral
  sentido:
    logico: retorno_o_cancelacion_de_la_negacion
    no_dialectico: no_superacion_en_un_nivel_mas_alto
funcion_local_en_el_texto:
  - introducir anticipadamente la distinción posterior entre negación lógica y dialéctica
  - conectar personalidad ibanskiana con proceso histórico
  - mostrar que Ibansk no supera la moral, sino que cancela su función reflexiva
conecta_con:
  - MN_NORMALIDAD_AMORALIDAD_IBANSK
  - MN_NEGACION_DE_LA_NEGACION_LOGICA
  - MN_NEGACION_DE_LA_NEGACION_DIALECTICA
```

---

## 22. Bloque contrasentido institucional / solución que busca problema

### 22.1. `MN_CONTRASENTIDO_GENERALIZADO_IBANSK`

```yaml
orden_textual: 22.1
mnode_id: MN_CONTRASENTIDO_GENERALIZADO_IBANSK
tipo_de_unidad: tesis_institucional_general
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "El contrasentido reina en todas las áreas de la sociedad ibanskiana, así se trate
  de la planificación económica, de la educación o de la lucha contra la delincuencia."
formulacion: >
  En Ibansk el contrasentido no es un accidente local, sino una forma transversal
  de organización institucional que atraviesa economía, educación y lucha contra
  la delincuencia.
rol_operativo: generalizar_la_irracionalidad_institucional
estructura:
  dominios:
    - planificacion_economica
    - educacion
    - lucha_contra_la_delincuencia
  rasgo_comun:
    - contrasentido
    - inversion_de_fines_y_medios
    - racionalidad_grotesca_pero_inteligible
funcion_local_en_el_texto:
  - pasar desde la antropología del hombre de Ibansk hacia instituciones concretas
  - preparar el principio de solución que busca problema
conecta_con:
  - PR_SOLUCION_BUSCA_PROBLEMA
  - DIS_DELITOS_FICTICIOS_METRICA
  - MN_HIPOCRESIA_AL_CUADRADO
```

---

### 22.2. `PR_SOLUCION_BUSCA_PROBLEMA`

```yaml
orden_textual: 22.2
mnode_id: PR_SOLUCION_BUSCA_PROBLEMA
tipo_de_unidad: patron_de_razonamiento_institucional
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "En lugar de buscar una solución efectiva para problemas reales, es necesario
  encontrar un problema que corresponda a las soluciones posibles o deseadas."
formulacion: >
  La racionalidad institucional de Ibansk invierte el orden normal: no parte de
  problemas reales para buscar soluciones efectivas, sino de soluciones disponibles
  o deseadas para encontrar problemas que las justifiquen.
rol_operativo: describir_inversion_funcional_de_la_racionalidad
estructura:
  racionalidad_normal:
    problema_real: punto_de_partida
    solucion_efectiva: objetivo
  racionalidad_ibanskiana:
    solucion_posible_o_deseada: punto_de_partida
    problema_correspondiente: objeto_a_encontrar_o_fabricar
  efecto:
    - fabricacion_de_problemas
    - deformacion_de_indicadores
    - sustitucion_de_realidad_por_ajuste_a_la_solucion
funcion_local_en_el_texto:
  - formular el principio general del contrasentido institucional
  - preparar el ejemplo de delitos ficticios
  - conectar Ibansk con críticas a modelos teóricos que buscan condiciones para probar teoremas deseados
conecta_con:
  - MN_CONTRASENTIDO_GENERALIZADO_IBANSK
  - EJ_TEORIA_ECONOMICA_CONDICIONES_PARA_TEOREMA
  - DIS_DELITOS_FICTICIOS_METRICA
```

---

### 22.3. `EJ_TEORIA_ECONOMICA_CONDICIONES_PARA_TEOREMA`

```yaml
orden_textual: 22.3
mnode_id: EJ_TEORIA_ECONOMICA_CONDICIONES_PARA_TEOREMA
tipo_de_unidad: analogia_metodologica
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Aquí hay que recordar el procedimiento de la teoría matemática de la economía
  política que prefiere buscar las condiciones que permitan demostrar un teorema
  considerado importante..."
formulacion: >
  Elster compara el principio ibanskiano con una práctica teórica: buscar condiciones
  que permitan demostrar un teorema deseado, en vez de buscar teoremas que deriven
  de condiciones plausibles.
rol_operativo: analogar_la_inversion_ibanskiana_con_un_vicio_metodologico_teorico
estructura:
  procedimiento_criticable:
    teorema_deseado: existencia_del_equilibrio_economico_general
    accion: buscar_condiciones_para_demostrarlo
  procedimiento_alternativo:
    condiciones_plausibles: punto_de_partida
    teoremas_derivables: resultado
  paralelismo_con_Ibansk:
    - solucion_deseada_antes_que_problema_real
    - ajuste_de_condiciones_para_validar_resultado_preferido
funcion_local_en_el_texto:
  - mostrar que el contrasentido ibanskiano tiene analogías fuera de Ibansk
  - reforzar la crítica de racionalidad invertida
conecta_con:
  - PR_SOLUCION_BUSCA_PROBLEMA
```

---

## 23. Bloque delitos ficticios / métrica / síntesis grotesca

### 23.1. `DIS_DELITOS_FICTICIOS_METRICA`

```yaml
orden_textual: 23.1
mnode_id: DIS_DELITOS_FICTICIOS_METRICA
tipo_de_unidad: modelo_grotesco_de_indicador
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Para reducir el porcentaje de los delitos no esclarecidos se puede aumentar
  el número de delitos ficticios..."
formulacion: >
  Para mejorar artificialmente el indicador de delitos esclarecidos, las autoridades
  pueden aumentar el número de delitos ficticios rápidamente resueltos.
rol_operativo: ejemplificar_racionalidad_perversa_por_indicadores
estructura:
  n:
    descripcion: numero_de_delitos_reales
  m:
    descripcion: numero_de_delitos_reales_esclarecidos
  a:
    descripcion: numero_de_delitos_ficticios_endosados_a_inocentes_y_rapidamente_penados
  indicador:
    formula: "(m + a) / (n + a)"
    comportamiento: crece_al_aumentar_a
  incentivo_institucional:
    - hacer_a_lo_mas_grande_posible
    - producir_delitos_ficticios
    - condenar_inocentes_para_mejorar_porcentaje
funcion_local_en_el_texto:
  - mostrar cómo un indicador puede volverse fin en sí mismo
  - exhibir una lógica grotesca pero matemáticamente inteligible
  - ejemplificar el principio de solución que busca problema
conecta_con:
  - PR_SOLUCION_BUSCA_PROBLEMA
  - MN_CONTRADICCIONES_DIALECTICAS_COMISARIA
```

---

### 23.2. `MN_CONTRADICCIONES_DIALECTICAS_COMISARIA`

```yaml
orden_textual: 23.2
mnode_id: MN_CONTRADICCIONES_DIALECTICAS_COMISARIA
tipo_de_unidad: contradiccion_institucional_grotesca
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Lo único enojoso es que hay que estar en situación de poder reunir contradicciones
  dialécticas, por ejemplo que no haya delitos en la comisaría de policía y que
  la superioridad esté convencida de que todos los delitos son esclarecidos con éxito."
formulacion: >
  La institución debe sostener simultáneamente dos exigencias contradictorias:
  que no haya delitos y que todos los delitos sean esclarecidos exitosamente.
rol_operativo: mostrar_presion_contradictoria_que_genera_sintesis_absurda
estructura:
  exigencia_1:
    formulacion: no_hay_delitos
    valor_institucional: orden_y_control
  exigencia_2:
    formulacion: todos_los_delitos_son_esclarecidos
    valor_institucional: eficacia_policial
  contradiccion:
    - si_no_hay_delitos_no_hay_nada_que_esclarecer
    - si_hay_esclarecimiento_exitoso_debe_haber_delitos
funcion_local_en_el_texto:
  - preparar la síntesis grotesca de eliminar delincuentes antes del delito
  - mostrar que la institución debe producir una solución absurda para satisfacer indicadores incompatibles
conecta_con:
  - DIS_DELITOS_FICTICIOS_METRICA
  - MN_SINTESIS_ELIMINAR_DELINCUENTES_ANTES
```

---

### 23.3. `MN_SINTESIS_ELIMINAR_DELINCUENTES_ANTES`

```yaml
orden_textual: 23.3
mnode_id: MN_SINTESIS_ELIMINAR_DELINCUENTES_ANTES
tipo_de_unidad: sintesis_grotesca_de_contradiccion
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La síntesis que anula la contradicción consiste en eliminar los delincuentes
  aun antes de que puedan empezar a cometer delitos."
formulacion: >
  La solución grotesca a la contradicción policial consiste en suprimir delincuentes
  antes de que cometan delitos, es decir, eliminar el problema antes de que exista.
rol_operativo: mostrar_sintesis_absurda_de_racionalidad_institucional
premisas:
  - se_exige_que_no_haya_delitos
  - se_exige_que_los_delitos_sean_esclarecidos
  - la_institucion_necesita_mostrar_eficacia
regla_inferencial:
  - si_el_problema_debe_desaparecer_y_a_la_vez_ser_controlado, se_lo_elimina_preventivamente
conclusion:
  - la_prevencion_se_convierte_en_supresion_de_posibles_sujetos_del_delito
funcion_local_en_el_texto:
  - llevar al extremo la lógica de solución que busca problema
  - mostrar la continuidad entre absurdo burlesco y violencia seria
conecta_con:
  - MN_CONTRADICCIONES_DIALECTICAS_COMISARIA
  - EJ_MERCADO_NEGRO_SUPRIMIR_PRODUCTOS
```

---

### 23.4. `EJ_MERCADO_NEGRO_SUPRIMIR_PRODUCTOS`

```yaml
orden_textual: 23.4
mnode_id: EJ_MERCADO_NEGRO_SUPRIMIR_PRODUCTOS
tipo_de_unidad: analogia_seria_de_sintesis_grotesca
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Una idea grotesca que sin embargo encuentra una analogía seria en la lucha
  contra los traficantes del mercado negro..."
formulacion: >
  Para suprimir especuladores y traficantes, la solución consiste en dejar de
  llevar al mercado los productos que podrían ser objeto de especulación.
rol_operativo: mostrar_traduccion_institucional_seria_de_la_logica_grotesca
estructura:
  problema_declarado:
    - traficantes_del_mercado_negro
    - maleantes_que_reintroducen_sistema_monetario
  solucion:
    - retirar_del_mercado_productos_especulables
  efecto:
    - eliminacion_del_objeto_de_especulacion
    - destruccion_del_mercado_en_lugar_de_solucion_del_problema
funcion_local_en_el_texto:
  - mostrar que el absurdo policial tiene analogía realista
  - conectar burla institucional con política económica concreta
conecta_con:
  - MN_SINTESIS_ELIMINAR_DELINCUENTES_ANTES
  - PR_SOLUCION_BUSCA_PROBLEMA
```

---

## 24. Bloque educación / hipocresía / antieducación

### 24.1. `MN_CRITICA_LITERARIA_DE_LA_HIPOCRESIA_MUNDANA`

```yaml
orden_textual: 24.1
mnode_id: MN_CRITICA_LITERARIA_DE_LA_HIPOCRESIA_MUNDANA
tipo_de_unidad: critica_de_una_critica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La literatura crítica del pasado reciente, que ha revelado la hipocresía de la
  sociedad mundana, ha realizado... una obra bastante antipática."
formulacion: >
  La crítica literaria de la hipocresía mundana puede ser equivocada porque confunde
  educación social y autocontrol con simple falsedad moral.
rol_operativo: cuestionar_la_negacion_directa_de_la_hipocresia_social
estructura:
  critica_literaria:
    tesis: la_cortesia_social_es_hipocresia
  problema:
    - reduce_educacion_a_disfraz
    - ignora_funcion_social_del_autodominio
    - no_distingue_hipocresia_de_civilidad
funcion_local_en_el_texto:
  - introducir el ejemplo educativo de Ibansk
  - preparar la diferencia entre hipocresía de primer grado e hipocresía al cuadrado
conecta_con:
  - MN_EDUCACION_MUNDANA_PROTEGE_DE_SI_MISMOS
  - MN_HIPOCRESIA_AL_CUADRADO
```

---

### 24.2. `MN_EDUCACION_MUNDANA_PROTEGE_DE_SI_MISMOS`

```yaml
orden_textual: 24.2
mnode_id: MN_EDUCACION_MUNDANA_PROTEGE_DE_SI_MISMOS
tipo_de_unidad: funcion_social_de_la_educacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "También es el resultado de una buena educación, que es uno de los medios sociales
  de que disponen las personas para protegerse de sí mismas."
formulacion: >
  La educación mundana no es necesariamente hipocresía; puede ser un medio social
  de autocontrol que permite a las personas protegerse de sus impulsos y convivir.
rol_operativo: rehabilitar_la_educacion_social_como_autodominio
estructura:
  conducta_externa:
    - sonreir
    - felicitar
    - expresar_agrado
    - mostrar_compasion
  vida_interior_posible:
    - envidia
    - desprecio
    - disgusto
    - alegria_por_fracaso_ajeno
  funcion_de_la_educacion:
    - dominarse
    - contener_impulsos
    - posibilitar_trato_normal
    - proteger_a_las_personas_de_si_mismas
funcion_local_en_el_texto:
  - diferenciar civilidad de simple falsedad
  - preparar la crítica a la antieducación de Ibansk
  - mostrar que una primera hipocresía puede tener función social protectora
conecta_con:
  - MN_CRITICA_LITERARIA_DE_LA_HIPOCRESIA_MUNDANA
  - MN_ANTIEDUCACION_IBANSKIANA
```

---

### 24.3. `MN_ANTIEDUCACION_IBANSKIANA`

```yaml
orden_textual: 24.3
mnode_id: MN_ANTIEDUCACION_IBANSKIANA
tipo_de_unidad: definicion_de_mecanismo_formativo
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Debe decirse que en este caso se trata de una educación antimundana. Ignorar y
  denigrar lo notable, así como cantar loas a lo mediocre, es un estilo educativo
  que no es sencillo."
formulacion: >
  La antieducación ibanskiana no es simple falta de educación, sino un estilo
  sistemático que ignora o denigra lo notable y elogia lo mediocre.
rol_operativo: definir_negacion_activa_de_la_educacion_racional_y_mundana
estructura:
  no_es:
    - simple_falta_de_educacion
    - espontanea_groseria
    - ausencia_casual_de_modales
  si_es:
    - educacion_antimundana
    - denigracion_de_lo_notable
    - exaltacion_de_lo_mediocre
    - estilo_formativo_sistematico
funcion_local_en_el_texto:
  - mostrar que Ibansk no carece simplemente de educación
  - introducir una educación negativa activa que produce mediocridad
  - preparar el mecanismo de producción de negación pasiva en otros
conecta_con:
  - MN_EDUCACION_MUNDANA_PROTEGE_DE_SI_MISMOS
  - MN_HIPOCRESIA_AL_CUADRADO
  - PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
```

---

### 24.4. `MN_HIPOCRESIA_AL_CUADRADO`

```yaml
orden_textual: 24.4
mnode_id: MN_HIPOCRESIA_AL_CUADRADO
tipo_de_unidad: distincion_etico_social
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La hipocresía con el pretexto de la negación de la hipocresía es hipocresía al cuadrado."
formulacion: >
  Negar activamente la hipocresía mundana puede producir una forma más profunda
  de hipocresía: una hipocresía que se presenta como anti-hipocresía.
rol_operativo: mostrar_negacion_activa_de_la_hipocresia_que_reproduce_hipocresia
estructura:
  hipocresia_de_primer_grado:
    descripcion: diferencia_entre_cortesia_externa_y_sentimiento_interno
    posible_funcion: autocontrol_social
  negacion_de_la_hipocresia:
    descripcion: denuncia_de_la_cortesia_como_falsedad
  hipocresia_al_cuadrado:
    descripcion: falsa_autenticidad_que_denigra_lo_notable_y_exalta_lo_mediocre
    mecanismo: hipocresia_bajo_pretexto_de_antihipocresia
funcion_local_en_el_texto:
  - mostrar que la negación activa de una norma puede producir una deformación superior
  - conectar educación con personalidad ibanskiana
  - preparar la tesis de antieducación como producción de mediocridad
conecta_con:
  - MN_ANTIEDUCACION_IBANSKIANA
  - PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
```

---

## 25. Bloque antieducación activa / producción de negación pasiva en otros

### 25.1. `PR_CIUDADANO_IBANSK_PRODUCTO_DE_ANTIEDUCACION`

```yaml
orden_textual: 25.1
mnode_id: PR_CIUDADANO_IBANSK_PRODUCTO_DE_ANTIEDUCACION
tipo_de_unidad: conclusion_antropologico_formativa
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "El ciudadano de Ibansk es en sí mismo la negación pasiva del hombre racional y
  moral, pero el producto de una educación que es la negación activa de una educación
  racional y moral."
formulacion: >
  El ciudadano de Ibansk es una negación pasiva del hombre racional y moral, pero
  esa pasividad es producida por una antieducación activa.
rol_operativo: resolver_relacion_entre_forma_pasiva_y_produccion_activa
estructura:
  resultado:
    nombre: ciudadano_de_Ibansk
    tipo: negacion_pasiva_del_hombre_racional_y_moral
    rasgo: ausencia_sistematica_de_cualidades_notables
  causa_formativa:
    nombre: antieducacion
    tipo: negacion_activa_de_la_educacion_racional_y_moral
    operacion:
      - denigrar_lo_notable
      - exaltar_lo_mediocre
      - destruir_autodominio_civilizador
conclusion:
  - la_negacion_pasiva_puede_ser_producto_de_una_negacion_activa_aplicada_sobre_otros
funcion_local_en_el_texto:
  - conectar personalidad ibanskiana con educación
  - resolver la aparente contradicción entre negación activa y pasiva
  - preparar la tesis de que se puede producir ignorancia o pasividad en otros
conecta_con:
  - MN_ANTIEDUCACION_IBANSKIANA
  - PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
  - MN_PRODUCIR_NEGACION_PASIVA_EN_OTROS
```

---

### 25.2. `MN_ANTIEDUCACION_NO_PRODUCE_ANTIHOMBRE`

```yaml
orden_textual: 25.2
mnode_id: MN_ANTIEDUCACION_NO_PRODUCE_ANTIHOMBRE
tipo_de_unidad: correccion_conceptual
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "La antieducación no produce el antihombre."
formulacion: >
  La antieducación no produce una figura activamente opuesta al hombre racional
  y moral, sino un sujeto pasivo, mediocre, normalizado y carente de cualidades
  notables.
rol_operativo: evitar_interpretacion_simetrica_de_la_negacion
estructura:
  expectativa_erronea:
    antieducacion: produciria_antihombre
    antihombre: negacion_activa_del_hombre_moral
  tesis_correcta:
    antieducacion: produce_mediocridad_pasiva
    ciudadano_de_Ibansk: ausencia_sistematica_de_cualidades
funcion_local_en_el_texto:
  - impedir que la negación activa de la educación sea entendida como producción de un opuesto activo
  - reforzar que el resultado más desarrollado es pasivo
conecta_con:
  - PR_CIUDADANO_IBANSK_PRODUCTO_DE_ANTIEDUCACION
  - PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
```

---

### 25.3. `PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD`

```yaml
orden_textual: 25.3
mnode_id: PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
tipo_de_unidad: mecanismo_formativo
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
segmento_fuente: >
  "La ausencia sistemática de cualidades notables... no puede producirse en ausencia
  de una educación sistemática. La simple falta de educación produciría toda clase
  de personas..."
formulacion: >
  La mediocridad normalizada de Ibansk no surge de falta de educación, sino de una
  educación sistemática orientada a producir ausencia de cualidades notables.
rol_operativo: explicar_necesidad_de_produccion_activa_de_la_pasividad
premisas:
  - la_simple_falta_de_educacion_produciria_toda_clase_de_personas
  - Ibansk_no_produce_diversidad_sino_norma_de_mediocridad
  - una_norma_social_estable_requiere_formacion_sistematica
conclusion:
  - la_ausencia_sistematica_de_cualidades_notables_es_producto_de_una_antieducacion_sistematica
estructura:
  causa_insuficiente:
    nombre: falta_simple_de_educacion
    resultado_esperado: diversidad_de_tipos
  causa_suficiente:
    nombre: antieducacion_sistematica
    resultado: mediocridad_normalizada
funcion_local_en_el_texto:
  - explicar por qué la negación pasiva social requiere producción activa
  - resolver el enigma de la normalidad mediocre de Ibansk
  - conectar educación con sociología del carrerismo y personalidad ibanskiana
conecta_con:
  - MN_ANTIEDUCACION_IBANSKIANA
  - MN_CARRERISMO_MEDIOCRE
  - MN_PRODUCIR_NEGACION_PASIVA_EN_OTROS
```

---

### 25.4. `MN_PRODUCIR_NEGACION_PASIVA_EN_OTROS`

```yaml
orden_textual: 25.4
mnode_id: MN_PRODUCIR_NEGACION_PASIVA_EN_OTROS
tipo_de_unidad: principio_general_de_produccion_social
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Aun cuando no puedo producir en mí mismo un estado de negación pasiva a través
  de un acto de negación activa, nada me impide lograr este resultado con éxito
  en otros. Y aun si no puedo convencerme de olvidar intencionalmente, puedo
  producir un estado de ignorancia en los demás."
formulacion: >
  Un sujeto no puede producir directamente en sí mismo una negación pasiva mediante
  negación activa, pero sí puede producir en otros estados pasivos como ignorancia,
  mediocridad o ausencia de cualidades.
rol_operativo: formular_diferencia_entre_autoaplicacion_y_heteroaplicacion_de_la_negacion_activa
estructura:
  imposibilidad_en_si_mismo:
    ejemplo: querer_olvidar_intencionalmente
    razon: el_acto_de_querer_mantiene_presente_el_objeto
  posibilidad_en_otros:
    ejemplo: producir_ignorancia_en_los_demas
    razon: se_puede_intervenir_en_el_entorno_formativo_de_otro
  principio:
    - no_puedo_autoinducir_facilmente_negacion_pasiva_por_voluntad_directa
    - puedo_heteroinducir_negacion_pasiva_mediante_instituciones_y_educacion
funcion_local_en_el_texto:
  - conectar el bloque educativo con el problema previo de la voluntad de olvidar
  - explicar cómo una sociedad puede producir sujetos pasivamente mediocres
  - formular el mecanismo central de la antieducación ibanskiana
conecta_con:
  - MN_VOLUNTAD_DE_OLVIDAR
  - PR_CIUDADANO_IBANSK_PRODUCTO_DE_ANTIEDUCACION
  - PR_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
```

## 26. `MN_CONFUSION_NO_OBLIGACION_PROHIBICION`

```yaml
orden_textual: 26
mnode_id: MN_CONFUSION_NO_OBLIGACION_PROHIBICION
tipo_de_unidad: mecanismo_legal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  En Ibansk se confunde la ausencia de obligación con la existencia de una prohibición.
rol_operativo: aplicar_negacion_activa_pasiva_al_derecho
estructura:
  sociedad_racional:
    diferencia:
      - falta_de_norma
      - norma_negativa
  Ibansk:
    confusion:
      - no_obligatorio_equivale_a_prohibido
funcion_local_en_el_texto:
  - mostrar cómo la confusión lógica se vuelve sistema legal
  - preparar el análisis de emigración, oposición y antitexto
conecta_con:
  - MN_EMIGRACION_COMO_DELITO
  - DIS_DERECHO_ANTITEXTO_REGRESSIO
```

---

## 27. `MN_EMIGRACION_COMO_DELITO`

```yaml
orden_textual: 27
mnode_id: MN_EMIGRACION_COMO_DELITO
tipo_de_unidad: paradoja_legal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  En Ibansk el deseo de emigrar puede ser delito y, al mismo tiempo, motivo para
  destierro, aunque el régimen niegue admitir ese deseo.
rol_operativo: ejemplificar_mundo_legal_invertido
funcion_local_en_el_texto:
  - mostrar paradoja entre derecho de emigrar y derecho de proscripción
  - reforzar el universo Catch-22 de Ibansk
conecta_con:
  - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
```

---

---

### 27.1. `EJ_PATRIOTA_ARRESTADO_POR_OFRECERSE_VOLUNTARIAMENTE`

```yaml
orden_textual: 27.1
mnode_id: EJ_PATRIOTA_ARRESTADO_POR_OFRECERSE_VOLUNTARIAMENTE
tipo_de_unidad: ejemplo_legal_pragmatico_de_mundo_invertido
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: >
  "Le habían impuesto diez días de arresto por haberse presentado voluntariamente
  para ir al frente... se había ordenado que cincuenta alumnos de la escuela fueran
  al frente, los que no tenían deseo alguno de hacerlo."
formulacion: >
  En Ibansk, el Patriota es castigado no por negarse a obedecer una orden, sino
  por anticiparse voluntariamente a ella, porque su acto espontáneo introduce una
  voluntad propia donde sólo debía operar la voluntad de la autoridad.
rol_operativo: ejemplificar_la_irracionalidad_legal_del_destino_dirigido_por_la_autoridad
estructura:
  sujeto: el_Patriota
  situacion:
    - una_autoridad_ordena_que_cincuenta_alumnos_vayan_al_frente
    - los_alumnos_designados_no_tienen_deseo_de_ir
    - el_Patriota_se_presenta_voluntariamente_para_ir_al_frente
  aparente_paradoja:
    - el_Patriota_quiere_hacer_lo_que_la_autoridad_exige_a_otros
    - sin_embargo_es_castigado_con_diez_dias_de_arresto
  logica_ibanskiana:
    principio:
      - una_autoridad_superior_dirige_el_destino_del_sujeto
      - el_sujeto_no_debe_conformar_su_destino_de_acuerdo_con_su_propia_voluntad
    transgresion:
      - presentarse_voluntariamente_equivale_a_exteriorizar_voluntad_propia
      - exteriorizar_voluntad_propia_viola_la_ley_exterior_de_la_sociedad
    castigo:
      - el_arresto_reafirma_que_la_voluntad_valida_es_la_de_la_autoridad
  inversion:
    racionalidad_normal:
      - ofrecerse_voluntariamente_para_cumplir_un_deber_podria_ser_meritorio
    racionalidad_ibanskiana:
      - ofrecerse_voluntariamente_es_culpable_porque_usurpa_la_funcion_de_la_autoridad
  contradiccion:
    - se_exige_obediencia
    - pero_se_castiga_el_cumplimiento_si_nace_de_la_voluntad_del_sujeto
    - el_problema_no_es_la_accion_realizada_sino_el_origen_volitivo_de_la_accion
  efecto:
    - la_autonomia_aparece_como_delito
    - la_obediencia_solo_es_valida_si_es_producida_desde_fuera
    - la_espontaneidad_politica_es_recodificada_como_transgresion
funcion_local_en_el_texto:
  - reforzar el universo Catch-22 de Ibansk
  - mostrar que la ley no regula sólo acciones, sino la fuente de la voluntad
  - conectar la paradoja legal con la oposición entre voluntad propia y voluntad impuesta
  - preparar el análisis posterior de la relación entre régimen, oposición y libertad negativa
conecta_con:
  - MN_EMIGRACION_COMO_DELITO
  - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
  - MN_REGIMEN_CALLAR_O_CONDENAR
  - DIS_REQUERIMIENTO_CONTRADICTORIO
```

## 28. `DIS_DERECHO_ANTITEXTO_REGRESSIO`

```yaml
orden_textual: 28
mnode_id: DIS_DERECHO_ANTITEXTO_REGRESSIO
tipo_de_unidad: modelo_logico_legal
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Todo código que clasifica textos como antitextos permite producir un nuevo texto
  sobre ese texto, generando una regresión que abre posibilidad de oposición.
rol_operativo: mostrar_limite_formal_del_derecho_represivo
estructura:
  texto_A: contenido_oposicionista
  norma_B: sistema_legal_que_lo_condena
  texto_N_A: "N sostiene que A"
  problema:
    - si_N_A_es_antitexto_el_fiscal_tambien_lo_repite
    - si_no_lo_es_se_abre_espacio_de_oposicion
  regresion:
    - "M sostiene que N sostiene que A"
funcion_local_en_el_texto:
  - mostrar que el derecho estrictamente formal genera espacio para oposición
  - conectar lógica formal con política
conecta_con:
  - MN_PRESUPOSICION_REY_DE_FRANCIA
  - MN_REGIMEN_CALLAR_O_CONDENAR
```

---

## 29. `MN_REGIMEN_CALLAR_O_CONDENAR`

```yaml
orden_textual: 29
mnode_id: MN_REGIMEN_CALLAR_O_CONDENAR
tipo_de_unidad: dilema_politico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El régimen enfrenta un dilema ante la oposición: si condena, le da difusión;
  si calla, parece admitir que tiene razón.
rol_operativo: mostrar_doble_trampa_de_la_reaccion_estatal
estructura:
  opcion_1: condenar
  efecto_1:
    - reconocimiento
    - difusion
  opcion_2: callar
  efecto_2:
    - sospecha_de_razon_del_opositor
funcion_local_en_el_texto:
  - introducir la relación régimen-oposición como problema de negación
  - explicar por qué la oposición puede pedir ser condenada
conecta_con:
  - MN_INDIFERENCIA_ACTIVA
```

---

## 30. `MN_INDIFERENCIA_ACTIVA`

```yaml
orden_textual: 30
mnode_id: MN_INDIFERENCIA_ACTIVA
tipo_de_unidad: concepto_intermedio
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La indiferencia activa es una negación activa que se oculta bajo la apariencia
  externa de una negación pasiva.
rol_operativo: refinar_tipologia_de_negacion
estructura:
  apariencia: indiferencia_pasiva
  realidad: intencion_de_negar_activamente
  evidencia: sistematicidad_del_silencio
funcion_local_en_el_texto:
  - resolver el caso del silencio intencional del régimen
  - mostrar que la intención no desaparece por disfrazarse de ausencia
conecta_con:
  - MN_REGIMEN_CALLAR_O_CONDENAR
  - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
```

---

## 31. `MN_OPOSICION_EXTERNA_PARADOJA_DEL_EXTRANJERO`

```yaml
orden_textual: 31
mnode_id: MN_OPOSICION_EXTERNA_PARADOJA_DEL_EXTRANJERO
tipo_de_unidad: paradoja_relacional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Para Ibansk, el extranjero es valioso sólo si rechaza el acercamiento; si acepta,
  se degrada por haberse dejado atraer.
rol_operativo: extender_la_logica_paradojica_a_la_oposicion_externa
estructura:
  si_extranjero_rechaza:
    valor: respetable
  si_extranjero_acepta:
    valor: sinverguenza
  si_extranjero_se_vuelve_como_Ibansk:
    valor: aun_peor
funcion_local_en_el_texto:
  - mostrar un efecto de contagio simbólico
  - conectar con la idea de Groucho Marx sobre no pertenecer a un club que lo aceptaría
conecta_con:
  - MN_MENTALIDAD_PRIMITIVA_CONFUSION
```

---

# 5. Kruschov, incapacidad y poder

## 32. `MN_KRUSCHOV_VIOLENCIA_PARA_DEJAR_VIOLENCIA`

```yaml
orden_textual: 32
mnode_id: MN_KRUSCHOV_VIOLENCIA_PARA_DEJAR_VIOLENCIA
tipo_de_unidad: paradoja_de_reforma
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El régimen no puede dejar de ejercer violencia, porque sólo puede realizar
  su deseo de dejar de ser violento en forma de violencia.
rol_operativo: mostrar_incapacidad_del_regimen_para_reformarse
estructura:
  deseo: dejar_de_ser_violento
  medio_disponible: violencia
  resultado: cambio_de_forma_de_la_violencia
funcion_local_en_el_texto:
  - introducir a Kruschov como símbolo de impotencia reformista
  - conectar reforma política con requerimiento contradictorio
conecta_con:
  - DIS_REQUERIMIENTO_CONTRADICTORIO
  - MN_DESESTALINIZACION_NEGACION_ACTIVA
```

---

## 33. `MN_DESESTALINIZACION_NEGACION_ACTIVA`

```yaml
orden_textual: 33
mnode_id: MN_DESESTALINIZACION_NEGACION_ACTIVA
tipo_de_unidad: caso_politico_de_negacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La desestalinización fracasa porque pasa de no nombrar a Stalin a prohibir citarlo,
  convirtiendo una negación pasiva en negación activa.
rol_operativo: aplicar_distincion_a_un_caso_historico
estructura:
  fase_1: autorizacion_de_no_nombrar_a_Stalin
  fase_2: recomendacion_o_prohibicion_de_no_citarlo
  resultado: Stalin_sigue_triunfando_en_su_derrota
funcion_local_en_el_texto:
  - mostrar que la forma de negar puede reproducir aquello que se niega
  - conectar Kruschov con la confusión no obligación/prohibición
conecta_con:
  - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
  - MN_KRUSCHOV_VIOLENCIA_PARA_DEJAR_VIOLENCIA
```

---

## 34. `DIS_DOS_FORMAS_DE_NO_PODER`

```yaml
orden_textual: 34
mnode_id: DIS_DOS_FORMAS_DE_NO_PODER
tipo_de_unidad: distincion_analitica
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  No poder actuar puede significar dos cosas: estar impedido por presiones externas
  o no reconocer subjetivamente la posibilidad disponible.
rol_operativo: diferenciar_incapacidad_objetiva_e_incapacidad_subjetiva
estructura:
  no_poder_tipo_1:
    nombre: imposibilidad_por_presiones_externas
    descripcion: no_hay_espacio_para_eleccion
  no_poder_tipo_2:
    nombre: incapacidad_por_ceguera_o_pensamiento_forzado
    descripcion: hay_posibilidad_pero_no_se_la_reconoce
funcion_local_en_el_texto:
  - clarificar el fracaso de Kruschov
  - conectar negación activa/pasiva con teoría de la acción
conecta_con:
  - MN_DESESTALINIZACION_NEGACION_ACTIVA
```

---

## 35. `MN_DISIDENTE_NO_DESEO_VS_DESEO_DE_NO`

```yaml
orden_textual: 35
mnode_id: MN_DISIDENTE_NO_DESEO_VS_DESEO_DE_NO
tipo_de_unidad: ejemplo_de_oposicion_interna
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  No tener deseo de hacer algo no equivale a tener el deseo de no hacerlo.
rol_operativo: aplicar_distincion_a_la_oposicion_interna
ejemplo:
  - no_sentia_deseo_de_postularse
  - fue_propuesto_y_presento_antecedentes
  - no_hay_inconsecuencia_si_se_distingue_ausencia_de_deseo_y_falta_de_deseo
funcion_local_en_el_texto:
  - mostrar que hasta la oposición reproduce confusiones de Ibansk
  - conectar lógica intencional con conducta política
conecta_con:
  - DIS_EXTENSIONS_MODALES_DE_LA_DISTINCION
```

---

## 36. `MN_DISIDENTE_SE_ADAPTA_A_LA_NORMA`

```yaml
orden_textual: 36
mnode_id: MN_DISIDENTE_SE_ADAPTA_A_LA_NORMA
tipo_de_unidad: mecanismo_social_de_adaptacion
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Incluso quien supera obstáculos para conservar su individualidad termina adaptándose
  lentamente a la norma de la sociedad contra la que lucha.
rol_operativo: mostrar_contagio_social_de_Ibansk_en_la_oposicion
funcion_local_en_el_texto:
  - debilitar la oposición como exterior puro
  - mostrar que no se puede vivir en una sociedad y ser independiente de ella
conecta_con:
  - MN_DISIDENTE_NO_DESEO_VS_DESEO_DE_NO
```

---

## 37. `MN_PODER_NEGATIVAMENTE_TODOPODEROSO`

```yaml
orden_textual: 37
mnode_id: MN_PODER_NEGATIVAMENTE_TODOPODEROSO
tipo_de_unidad: definicion_de_poder_ibanskiano
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El poder de Ibansk es negativamente todopoderoso y positivamente impotente:
  puede destruir, pero no puede crear.
rol_operativo: sintetizar_asimetria_del_poder
estructura:
  poder_negativo:
    capacidad: hacer_mal_sin_castigo
    fuerza: destructiva
  poder_positivo:
    capacidad: hacer_bien_gratuitamente
    fuerza: creadora_infima
funcion_local_en_el_texto:
  - formular la tesis central sobre la impotencia del régimen
  - preparar la lista de obstáculos ibanskianos
conecta_con:
  - MN_OBSTACULOS_IBANSKIANOS_A_CREAR
  - MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL
```

---

## 38. `MN_OBSTACULOS_IBANSKIANOS_A_CREAR`

```yaml
orden_textual: 38
mnode_id: MN_OBSTACULOS_IBANSKIANOS_A_CREAR
tipo_de_unidad: lista_de_mecanismos
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  La incapacidad creadora de Ibansk surge de una serie de obstáculos institucionales:
  denuncia, ideología, contradicción, mediocridad, complejización inútil y desconfianza.
rol_operativo: descomponer_causas_de_impotencia_positiva
componentes:
  - informacion_degenerada_en_denuncia
  - eficiencia_ideologica_sobre_eficiencia_tecnica
  - planos_contradictorios
  - produccion_de_mediocres_que_bloquean
  - problemas_simples_convertidos_en_problemas_teoricos
  - precauciones_que_realizan_lo_peor_temido
funcion_local_en_el_texto:
  - explicar por qué el poder puede bloquear pero no construir
conecta_con:
  - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
```

---

## 39. `MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL`

```yaml
orden_textual: 39
mnode_id: MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL
tipo_de_unidad: ley_institucional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  En Ibansk, quien se propone cambiar no cambia nada; sólo cambia quien al principio
  no se proponía hacerlo.
rol_operativo: formular_impotencia_del_cambio_volitivo
estructura:
  cambio_intencional: fracasa
  cambio_no_intencional: ocurre
funcion_local_en_el_texto:
  - sintetizar la imposibilidad de reforma voluntaria
  - conectar con la teoría de negación de la negación
conecta_con:
  - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
  - MN_NEGACION_DE_LA_NEGACION_LOGICA
```

---

## 40. `MN_CAUSALIDAD_SUSTITUIDA_POR_CULPA`

```yaml
orden_textual: 40
mnode_id: MN_CAUSALIDAD_SUSTITUIDA_POR_CULPA
tipo_de_unidad: mecanismo_oficial
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  En Ibansk se sustituye la pregunta científica por la causa por la pregunta oficial
  por el culpable.
rol_operativo: mostrar_personificacion_burocratica_de_la_causalidad
estructura:
  mirada_cientifica:
    pregunta: causa
  mirada_oficial:
    pregunta: culpable
  efecto:
    - todo_mal_debe_tener_responsable_externo_a_la_conduccion
funcion_local_en_el_texto:
  - explicar los postulados segundo y tercero
  - mostrar cómo la burocracia se autojustifica
conecta_con:
  - MN_SEGUNDO_TERCER_POSTULADO_IBANSK
```

---

## 41. `MN_SEGUNDO_TERCER_POSTULADO_IBANSK`

```yaml
orden_textual: 41
mnode_id: MN_SEGUNDO_TERCER_POSTULADO_IBANSK
tipo_de_unidad: postulado_institucional
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: textual_explicito
formulacion: >
  Todo éxito pertenece a la conducción; todo fracaso tiene un responsable externo
  a la conducción.
rol_operativo: formalizar_autofortalecimiento_burocratico
estructura:
  segundo_postulado:
    regla: exitos_son_de_la_conduccion
  tercer_postulado:
    regla: catastrofes_tienen_responsable_fuera_de_la_conduccion
funcion_local_en_el_texto:
  - mostrar cómo el poder captura méritos y expulsa culpa
  - conectar burocracia, causalidad y culpabilización
conecta_con:
  - MN_CAUSALIDAD_SUSTITUIDA_POR_CULPA
```

---

# 6. Negación de la negación

## 42. `MN_NEGACION_DE_LA_NEGACION_DIALECTICA`

```yaml
orden_textual: 42
mnode_id: MN_NEGACION_DE_LA_NEGACION_DIALECTICA
tipo_de_unidad: definicion_semiestricta
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  En sentido dialéctico, la negación de la negación supone un proceso p-q-r
  donde q es una fase intermedia necesaria entre p y r.
rol_operativo: precisar_uso_dialectico_del_concepto
estructura:
  proceso: p_q_r
  condiciones:
    - elementos_forman_grupo_articulado_incompatible
    - transicion_p_r_imposible
    - transicion_p_q_imposible
    - no_hay_q_alternativo_que_permita_p_q_r
funcion_local_en_el_texto:
  - contrastar Marx y Sinoviev
  - preparar uso lógico de la negación de la negación
conecta_con:
  - MN_NEGACION_DE_LA_NEGACION_LOGICA
```

---

## 43. `MN_NEGACION_DE_LA_NEGACION_LOGICA`

```yaml
orden_textual: 43
mnode_id: MN_NEGACION_DE_LA_NEGACION_LOGICA
tipo_de_unidad: distincion_final
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Para Sinoviev, la negación de la negación debe entenderse en sentido lógico:
  como retorno al punto de partida, no como superación dialéctica.
rol_operativo: distinguir_uso_logico_y_uso_dialectico
funcion_local_en_el_texto:
  - explicar por qué la revolución soviética puede devolver a formas precomunistas
  - conectar cambio no intencional con retorno histórico
conecta_con:
  - MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL
  - MN_TERCERA_ESCLAVITUD
```

---

## 44. `MN_TERCERA_ESCLAVITUD`

```yaml
orden_textual: 44
mnode_id: MN_TERCERA_ESCLAVITUD
tipo_de_unidad: consecuencia_historica
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
formulacion: >
  Un proceso de degradación imperceptible puede instaurar una tercera esclavitud
  que no podría producirse voluntaria o intencionalmente.
rol_operativo: aplicar_negacion_logica_de_la_negacion_al_proceso_historico
premisas:
  - el régimen no puede transformar la sociedad de forma intencional
  - sólo quedan transformaciones casuales o no dirigidas
  - el pasado puede sobrevivir ocultando su origen
conclusion:
  - una restauración degradada puede emerger sin ser buscada
funcion_local_en_el_texto:
  - mostrar la dimensión histórica de la distinción lógica
  - conectar memoria, causalidad y transformación
conecta_con:
  - MN_NEGACION_DE_LA_NEGACION_LOGICA
```

---

## 45. `MN_HISTORIA_NO_DEJA_HUELLAS_SINO_CONSECUENCIAS`

```yaml
orden_textual: 45
mnode_id: MN_HISTORIA_NO_DEJA_HUELLAS_SINO_CONSECUENCIAS
tipo_de_unidad: tesis_historica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  La historia no deja huellas; deja consecuencias que pueden no parecerse a sus causas.
rol_operativo: cerrar_reflexion_sobre_memoria_y_proceso_historico
funcion_local_en_el_texto:
  - mostrar que el pasado puede sobrevivir de forma objetiva y oculta
  - conectar memoria con capacidad de dirigir el futuro
conecta_con:
  - MN_TERCERA_ESCLAVITUD
```

---

## 46. `MN_CONCLUSION_SINOVIEV_LOGICA_DIALECTICA`

```yaml
orden_textual: 46
mnode_id: MN_CONCLUSION_SINOVIEV_LOGICA_DIALECTICA
tipo_de_unidad: conclusion_metodologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  Sinoviev muestra que lógica formal y análisis dialéctico no son inconciliables;
  una no es plenamente comprensible sin el otro.
rol_operativo: cerrar_argumento_metodologico
funcion_local_en_el_texto:
  - resumir la importancia metodológica de Sinoviev
  - desplazar la conclusión hacia la ciencia política
conecta_con:
  - MN_IRRACIONAL_INTELIGIBLE
  - DIS_APLICACION_A_IBANSK
```

---

## 47. `MN_CONCLUSION_IRRACIONALIDAD_POLITICA`

```yaml
orden_textual: 47
mnode_id: MN_CONCLUSION_IRRACIONALIDAD_POLITICA
tipo_de_unidad: conclusion_sociopolitica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: >
  El aporte principal de Sinoviev es abrir una perspectiva sobre la irracionalidad
  política como fenómeno estructurado y poco atendido.
rol_operativo: formular_aporte_final_del_texto
funcion_local_en_el_texto:
  - cerrar el ensayo
  - presentar la obra de Sinoviev como universo ficticio, alucinante, convincente y realista
conecta_con:
  - MN_IRRACIONAL_INTELIGIBLE
  - MN_CONCLUSION_SINOVIEV_LOGICA_DIALECTICA
```

---

# 7. Moldes estructurales detectados

## Molde 1: `DIS_MOLDE_CONFUSION_NEGACIONES`

```yaml
molde:
  mnode_id: DIS_MOLDE_CONFUSION_NEGACIONES
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Una estructura se vuelve irracional cuando confunde ausencia de p con presencia
    de no-p, o cuando intenta producir pasividad mediante actividad.
  estructura:
    estado_inicial:
    negacion_pasiva:
    negacion_activa:
    confusion:
    consecuencia:
  instancias:
    - ateismo_vs_agnosticismo
    - no_obligacion_vs_prohibicion
    - ausencia_de_deseo_vs_deseo_de_no
    - olvido_vs_voluntad_de_olvidar
    - silencio_real_vs_indiferencia_activa
```

---

## Molde 2: `DIS_MOLDE_REQUERIMIENTO_CONTRADICTORIO`

```yaml
molde:
  mnode_id: DIS_MOLDE_REQUERIMIENTO_CONTRADICTORIO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Un mandato exige que el destinatario produzca voluntariamente un estado que,
    por definición, sólo puede existir sin voluntad directa.
  estructura:
    mandato:
    estado_exigido:
    condicion_de_posibilidad_del_estado:
    contradiccion:
    efecto:
  instancias:
    - "No seas tan sumiso"
    - "Sé espontáneo"
    - "Adórenme"
    - "No pienses en lo prohibido"
    - "Olvida voluntariamente"
```

---

## Molde 3: `DIS_MOLDE_INSTITUCION_IBANSKIANA`

```yaml
molde:
  mnode_id: DIS_MOLDE_INSTITUCION_IBANSKIANA
  familia_cognitiva: FAM-Diseño
  formulacion: >
    Una institución de Ibansk transforma una función racional en su contrario
    mediante incentivos, contradicciones o confusión lógica.
  estructura:
    funcion_racional:
    transformacion_ibanskiana:
    resultado_irracional_pero_inteligible:
  instancias:
    - informacion_que_se_convierte_en_denuncia
    - delitos_ficticios_para_mejorar_indicadores
    - educacion_convertida_en_antieducacion
    - derecho_convertido_en_trampa_logica
    - poder_convertido_en_destruccion_sin_creacion
```

---

## Molde 4: `DIS_MOLDE_PODER_NEGATIVO`

```yaml
molde:
  mnode_id: DIS_MOLDE_PODER_NEGATIVO
  familia_cognitiva: FAM-Diseño
  formulacion: >
    El poder puede ser máximo para impedir, castigar, bloquear o destruir,
    pero mínimo para crear, reformar o producir bienes.
  estructura:
    poder_destructivo:
    impotencia_creadora:
    mecanismo_de_bloqueo:
    consecuencia:
  instancias:
    - poder_de_Ibansk
    - desestalinizacion_de_Kruschov
    - directivas_que_generan_resultado_opuesto
    - cambio_intencional_que_no_cambia
```

---

# 8. Relaciones básicas entre mNodes

> Nota de versión corregida: las relaciones globales se conservan como mapa macro. Las relaciones internas de los bloques refinados aparecen dentro de cada bloque numerado, con mayor granularidad que esta sección global.

```yaml
relaciones_basicas:
  - origen: MN_TITULO_NEGACION_ACTIVA_PASIVA
    tipo: anuncia
    destino: MN_DISTINCION_NEGACION_ACTIVA_PASIVA

  - origen: MN_SINOVIEV_AUTOR_HIBRIDO
    tipo: prepara
    destino: PR_SINOVIEV_COMO_MARX_DEL_COMUNISMO

  - origen: PR_SINOVIEV_COMO_MARX_DEL_COMUNISMO
    tipo: soporta
    destino: MN_IRRACIONAL_INTELIGIBLE

  - origen: MN_IRRACIONAL_INTELIGIBLE
    tipo: se_ejemplifica_con
    destino: MN_PARADOJAS_AUTORREFERENCIALES

  - origen: MN_PARADOJAS_AUTORREFERENCIALES
    tipo: prepara
    destino: MN_DISTINCION_NEGACION_ACTIVA_PASIVA

  - origen: MN_DISTINCION_NEGACION_ACTIVA_PASIVA
    tipo: se_formaliza_en
    destino: DIS_MODELO_LOGICO_TRES_PROPOSICIONES

  - origen: DIS_MODELO_LOGICO_TRES_PROPOSICIONES
    tipo: permite_detectar
    destino: MN_MENTALIDAD_PRIMITIVA_CONFUSION

  - origen: MN_MENTALIDAD_PRIMITIVA_CONFUSION
    tipo: se_extiende_a
    destino: MN_CONFUSION_NO_OBLIGACION_PROHIBICION

  - origen: DIS_EXTENSIONS_MODALES_DE_LA_DISTINCION
    tipo: prepara
    destino: MN_VOLUNTAD_DE_OLVIDAR

  - origen: HISTORIA_CONCEPTUAL_KANT
    tipo: antecedente_de
    destino: MN_DISTINCION_NEGACION_ACTIVA_PASIVA

  - origen: HISTORIA_CONCEPTUAL_HEGEL
    tipo: profundiza
    destino: MN_PARADOJA_ATEISMO_MILITANTE

  - origen: DIS_REQUERIMIENTO_CONTRADICTORIO
    tipo: ejemplifica
    destino: MN_VOLUNTAD_DE_OLVIDAR

  - origen: MN_VOLUNTAD_DE_OLVIDAR
    tipo: demuestra
    destino: DIS_MOLDE_CONFUSION_NEGACIONES

  - origen: PLAN_APLICACION_A_SINOVIEV
    tipo: abre
    destino: DIS_APLICACION_A_IBANSK

  - origen: DIS_APLICACION_A_IBANSK
    tipo: contiene
    destino: MN_DENUNCIA_SUSTITUYE_INFORMACION

  - origen: MN_DENUNCIA_SUSTITUYE_INFORMACION
    tipo: instancia_de
    destino: DIS_MOLDE_INSTITUCION_IBANSKIANA

  - origen: MN_CARRERISMO_MEDIOCRE
    tipo: soporta
    destino: MN_PERSONALIDAD_NEGATIVA

  - origen: MN_HIPOCRESIA_AL_CUADRADO
    tipo: soporta
    destino: MN_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD

  - origen: MN_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
    tipo: explica
    destino: MN_PERSONALIDAD_NEGATIVA

  - origen: MN_CONFUSION_NO_OBLIGACION_PROHIBICION
    tipo: instancia_de
    destino: DIS_MOLDE_CONFUSION_NEGACIONES

  - origen: DIS_DERECHO_ANTITEXTO_REGRESSIO
    tipo: explica_posibilidad_de
    destino: MN_REGIMEN_CALLAR_O_CONDENAR

  - origen: MN_REGIMEN_CALLAR_O_CONDENAR
    tipo: se_refina_en
    destino: MN_INDIFERENCIA_ACTIVA

  - origen: MN_KRUSCHOV_VIOLENCIA_PARA_DEJAR_VIOLENCIA
    tipo: instancia_de
    destino: DIS_REQUERIMIENTO_CONTRADICTORIO

  - origen: MN_DESESTALINIZACION_NEGACION_ACTIVA
    tipo: instancia_de
    destino: DIS_MOLDE_CONFUSION_NEGACIONES

  - origen: DIS_DOS_FORMAS_DE_NO_PODER
    tipo: aclara
    destino: MN_DESESTALINIZACION_NEGACION_ACTIVA

  - origen: MN_PODER_NEGATIVAMENTE_TODOPODEROSO
    tipo: se_descompone_en
    destino: MN_OBSTACULOS_IBANSKIANOS_A_CREAR

  - origen: MN_PODER_NEGATIVAMENTE_TODOPODEROSO
    tipo: soporta
    destino: MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL

  - origen: MN_CAUSALIDAD_SUSTITUIDA_POR_CULPA
    tipo: fundamenta
    destino: MN_SEGUNDO_TERCER_POSTULADO_IBANSK

  - origen: MN_PRIMERA_LEY_CAMBIO_NO_INTENCIONAL
    tipo: prepara
    destino: MN_NEGACION_DE_LA_NEGACION_LOGICA

  - origen: MN_NEGACION_DE_LA_NEGACION_DIALECTICA
    tipo: contrasta_con
    destino: MN_NEGACION_DE_LA_NEGACION_LOGICA

  - origen: MN_NEGACION_DE_LA_NEGACION_LOGICA
    tipo: soporta
    destino: MN_TERCERA_ESCLAVITUD

  - origen: MN_TERCERA_ESCLAVITUD
    tipo: conecta_con
    destino: MN_HISTORIA_NO_DEJA_HUELLAS_SINO_CONSECUENCIAS

  - origen: MN_CONCLUSION_SINOVIEV_LOGICA_DIALECTICA
    tipo: cierra
    destino: MN_CONCLUSION_IRRACIONALIDAD_POLITICA
```

---

# 9. Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion: fijar distinciones, tesis y conceptos nucleares
    nodos_principales:
      - MN_DISTINCION_NEGACION_ACTIVA_PASIVA
      - MN_IRRACIONAL_INTELIGIBLE
      - MN_MENTALIDAD_PRIMITIVA_CONFUSION
      - MN_VOLUNTAD_DE_OLVIDAR
      - MN_PERSONALIDAD_NEGATIVA
      - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
      - MN_INDIFERENCIA_ACTIVA
      - MN_PODER_NEGATIVAMENTE_TODOPODEROSO
      - MN_NEGACION_DE_LA_NEGACION_LOGICA

  FAM-Patrón-de-razonamiento:
    funcion: derivar consecuencias desde distinciones lógicas
    nodos_principales:
      - PR_SINOVIEV_COMO_MARX_DEL_COMUNISMO
      - PR_SOLUCION_BUSCA_PROBLEMA
      - MN_ANTIEDUCACION_PRODUCE_MEDIOCRIDAD
      - MN_TERCERA_ESCLAVITUD
      - HISTORIA_CONCEPTUAL_HEGEL

  FAM-Diseño:
    funcion: organizar moldes, sistemas y estructuras institucionales
    nodos_principales:
      - DIS_MODELO_LOGICO_TRES_PROPOSICIONES
      - DIS_USO_DOBLE_DE_LA_DISTINCION
      - DIS_REQUERIMIENTO_CONTRADICTORIO
      - DIS_APLICACION_A_IBANSK
      - DIS_DERECHO_ANTITEXTO_REGRESSIO
      - DIS_DOS_FORMAS_DE_NO_PODER
      - DIS_MOLDE_INSTITUCION_IBANSKIANA
      - DIS_MOLDE_PODER_NEGATIVO

  FAM-Método:
    funcion: usar la distinción lógica como herramienta de análisis sociológico
    nodos_principales:
      - DIS_APLICACION_A_IBANSK
      - PLAN_APLICACION_A_SINOVIEV
      - MN_CONFUSION_NO_OBLIGACION_PROHIBICION
      - MN_CAUSALIDAD_SUSTITUIDA_POR_CULPA

  FAM-Plan:
    funcion: ordenar el recorrido expositivo del ensayo
    nodos_principales:
      - PLAN_ANALISIS_LOGICO_HISTORICO_SINOVIEV
      - PLAN_APLICACION_A_SINOVIEV
```

---

# 10. Síntesis estructural del texto

La estructura total del ensayo puede resumirse así:

```txt
1. Presentación de Sinoviev:
   Sinoviev revela la estructura inteligible de lo irracional soviético.

2. Problema central:
   La irracionalidad soviética no es caos, sino sistema.

3. Herramienta conceptual:
   Diferencia entre negación pasiva y negación activa.

4. Formalización:
   A cree p / No corresponde que A crea p / A cree no-p.

5. Error fundamental:
   Confundir ausencia de p con presencia de no-p.

6. Historia conceptual:
   Kant → Hegel → Sartre/Palo Alto → psicología de la espontaneidad, olvido y fe.

7. Principio práctico:
   No se puede producir intencionalmente un estado pasivo como olvido, sinceridad,
   espontaneidad o inocencia.

8. Aplicación a Ibansk:
   La sociedad soviética ficticia de Sinoviev está organizada por paradojas
   de negación, inversión y autorreferencia.

9. Régimen:
   Información → denuncia.
   Solución → búsqueda de problema adecuado.
   Educación → antieducación.
   Derecho → trampa lógica.
   Poder → destrucción sin creación.

10. Oposición:
   Condenar reconoce.
   Callar sistemáticamente revela intención.
   Indiferencia activa simula indiferencia pasiva.

11. Reforma:
   Kruschov no puede desestalinizar porque niega activamente a Stalin
   con la misma lógica que pretende superar.

12. Poder:
   Ibansk es negativamente todopoderoso y positivamente impotente.

13. Historia:
   El cambio intencional fracasa; el cambio no buscado puede ocurrir.

14. Negación de la negación:
   Marx la piensa dialécticamente; Sinoviev la piensa lógicamente como retorno.

15. Conclusión:
   Sinoviev muestra una irracionalidad política estructurada, donde lógica formal
   y análisis dialéctico se necesitan mutuamente.
```

---

# 11. Fórmula estructural compacta

```txt
distinción lógica:
  negación pasiva ≠ negación activa

confusión de la distinción:
  ausencia de p se toma como presencia de no-p

efecto psicológico:
  querer producir ausencia mantiene presente lo negado

efecto institucional:
  no obligación se convierte en prohibición
  silencio se convierte en indiferencia activa
  información se convierte en denuncia
  causalidad se convierte en culpa
  poder creador se convierte en poder destructor

efecto histórico:
  la negación de la negación no supera, sino que puede retornar al punto de partida
```

---

# 12. Núcleo interpretativo provisional

```txt
El ensayo muestra que la irracionalidad política de Ibansk puede comprenderse
como una serie de efectos derivados de la confusión entre negación activa y
negación pasiva. Esta confusión permite explicar fenómenos lógicos,
psicológicos, jurídicos, institucionales e históricos: querer olvidar,
ordenar espontaneidad, prohibir lo no obligatorio, callar intencionalmente,
condenar dando reconocimiento, reformar reproduciendo violencia y cambiar
sólo cuando no se quería cambiar. En Sinoviev, la sociedad soviética aparece
como un universo absurdo pero estructurado, donde la lógica formal y la
dialéctica convergen para hacer inteligible lo irracional.
```

---

# 13. Observaciones para pasos posteriores

```yaml
observaciones_para_pasos_posteriores:
  posible_modelo_grafo:
    nodo_central: MN_DISTINCION_NEGACION_ACTIVA_PASIVA
    ramas:
      - formalizacion_logica
      - genealogia_filosofica
      - paradojas_psicologicas
      - instituciones_de_Ibansk
      - regimen_y_oposicion
      - poder_negativo
      - negacion_de_la_negacion
    estatus: grafo_posterior

  posible_modelo_analitico:
    nombre: modelo_de_irracionalidad_inteligible
    descripcion: >
      Modelo donde una distinción lógica mínima genera una red de paradojas
      prácticas, psicológicas e institucionales.
    estatus: modelo_posterior

  posible_construccion_conceptual_normalizada:
    nucleo: negacion_activa_vs_negacion_pasiva
    campo_conceptual:
      - logica
      - filosofia
      - psicologia
      - derecho
      - sociologia_politica
      - teoria_del_poder
      - historia
    estatus: producto_posterior
```

---

# 14. Resultado del procesamiento

Este documento corresponde al primer procesamiento estructural del texto. Su función no es cerrar la construcción conceptual, sino preparar el texto para análisis posteriores:

```txt
texto_crudo
  → procesamiento_estructural
    → lectura_por_familias_cognitivas
      → grafo_de_mnodes
        → construcción_conceptual_normalizada
          → realizaciones posteriores
```
