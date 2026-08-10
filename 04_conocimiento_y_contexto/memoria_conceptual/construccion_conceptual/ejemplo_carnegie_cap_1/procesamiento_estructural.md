https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a07e0ac-a564-83e8-9114-2213d1d51176

# procesamiento_estructural

**Tipo de documento:** ejemplo de referencia para IA  
**Función:** mostrar cómo realizar el primer procesamiento estructural de un texto en crudo antes de construir modelos analíticos profundos.  
**Caso usado como ejemplo:** capítulo “Si quieres recoger miel, no des puntapiés a la colmena” / regla “No critique, no condene ni se queje”.  
**Estado:** ejemplo operativo enriquecido.  
**Uso esperado:** una IA debe usar este documento como referencia cuando reciba una idea, texto, capítulo, nota o argumento en crudo y deba realizar el primer paso de conversión estructural.

---

## 0. Principio rector del paso 1

El `procesamiento_estructural` no busca construir todavía el modelo profundo final del texto. Su función es más básica y más importante: **convertir el texto en crudo en una secuencia ordenada de estructuras cognitivas detectadas**, respetando el orden en que aparecen.

La operación correcta no es:

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
      → relaciones_locales
        → base_para_analisis_posterior
```

Este primer paso debe producir la **Rama A** de una construcción conceptual multicapa:

```txt
TEXTO_CRUDO
├─ RAMA_A: estructuras_cognitivas_contenidas_en_el_texto     ← ESTE DOCUMENTO
```

El objetivo de esta fase es responder:

```txt
¿Qué estructuras cognitivas aparecen en el texto?
¿En qué orden aparecen?
¿Qué función cumplen localmente?
¿Qué familia cognitiva o forma derivada manifiestan?
Con qué otras estructuras se conectan?
```

---

## 1. Diferencia entre primer procesamiento y análisis profundo

En este paso todavía no se debe imponer un modelo analítico externo, salvo cuando sea necesario marcar una estructura local evidente.

Por ejemplo, en este capítulo puede construirse posteriormente un `modelo_de_juego_de_influencia`, con jugadores, disposición, fricción y rutas de influencia. Pero ese modelo **no aparece explícitamente en el texto**. Es una formalización posterior hecha por el analista.

---

## 2. Salida esperada del paso 1

La salida del paso 1 debe llamarse:

```yaml
procesamiento_estructural:
  texto_raiz:
  criterios_de_lectura:
  secuencia_lineal_de_mnodes:
  moldes_detectados:
  instancias_de_moldes:
  inferencias_locales:
  puentes:
  casos_metodologicos:
  citas_funcionales:
  modelos_positivos:
  cierres_afectivos:
  relaciones_basicas:
  observaciones_para_pasos_posteriores:
  validacion:
```

Este producto no es todavía la construcción conceptual final. Es la preparación estructural que permitirá construirla.

---

## 3. Esquema obligatorio para cada estructura detectada

Cada estructura cognitiva detectada debe registrarse con el siguiente esquema:

```yaml
estructura_detectada:
  orden_textual:
  mnode_id:
  tipo_de_unidad:
  familia_cognitiva:
  estatus_de_extraccion:
  segmento_fuente:
  formulacion:
  rol_operativo:
  funcion_local_en_el_texto:
  estructura_interna:
  conecta_con:
  observaciones:
```

### 3.1. `orden_textual`

Indica el lugar aproximado en que aparece la estructura dentro del texto. Debe preservarse el orden de aparición.

Ejemplo:

```yaml
orden_textual: 01
```

### 3.2. `mnode_id`

Identificador estable de la estructura cognitiva.

Ejemplo:

```yaml
mnode_id: HISTORIA_CROWLEY
```

### 3.3. `tipo_de_unidad`

Indica qué clase de unidad textual o cognitiva se detectó.

Valores recomendados para el caso actual:

```txt
metafora_directriz
historia_ancla
historia_de_aprendizaje
ejemplo_isomorfo
ejemplo_autobiografico
generalizacion_por_testimonio
molde
serie_isomorfa
inferencia_generalizante
mecanismo_psicologico
mecanismo_afectivo_identitario
soporte_experimental
cita_psicologica
cita_moral
formulacion_practica
formulacion_antropologica
metafora_funcional
caso_metodologico
modelo_operativo
submodelo_practico
submodelo_de_descarga
cierre_emotivo
regla_terminal
puente
```

### 3.4. `familia_cognitiva`

Debe usarse una familia base cuando sea posible:

```txt
FAM-Idea
FAM-Patrón-de-razonamiento
FAM-Diseño
FAM-Método
FAM-Plan
```

Cuando la unidad sea una forma compuesta, se puede marcar:

```txt
forma_compuesta
forma_derivada
```

y luego indicar la familia que soporta o activa.

Ejemplo:

```yaml
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
```

### 3.5. `estatus_de_extraccion`

Permite distinguir qué tan directamente viene la estructura del texto.

Valores recomendados:

```txt
textual_explicito
textual_implicito
inferencia_local
molde_derivado
estructura_analitica_posterior
```

Para este paso se debe privilegiar:

```txt
textual_explicito
textual_implicito
inferencia_local
molde_derivado
```

Y se debe evitar desarrollar ampliamente:

```txt
estructura_analitica_posterior
```

porque eso corresponde a pasos posteriores.

### 3.6. `segmento_fuente`

Fragmento o referencia breve al texto que origina la estructura.

No debe ser una transcripción extensa. Basta una indicación local.

### 3.7. `formulacion`

Formulación estructural del mNode detectado.

Debe ser más abstracta que el texto literal, pero no tan abstracta que pierda anclaje.

### 3.8. `rol_operativo`

Indica qué hace la estructura en el texto.

Ejemplos:

```txt
organizar_casos_isomorfos
generalizar_desde_casos_extremos
explicar_mecanismo_de_defensa
mostrar_alternativa_practica
legitimar_modelo
condensar_regla
cerrar_afectivamente
```

### 3.9. `funcion_local_en_el_texto`

Explica para qué aparece esa unidad justo en ese lugar.

Ejemplo:

```yaml
funcion_local_en_el_texto:
  - abrir el capítulo con un caso extremo
  - mostrar contraste entre culpa externa y autoimagen interna
  - preparar el molde de autojustificación
```

### 3.10. `estructura_interna`

Describe los campos internos de la unidad.

Ejemplo:

```yaml
estructura_interna:
  sujeto: Crowley
  falta_o_crimen: asesinato
  autopercepcion: "corazón bueno / esto me pasa por defenderme"
```

### 3.11. `conecta_con`

Lista los nodos con los que esta unidad se relaciona.

Ejemplo:

```yaml
conecta_con:
  - DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
  - PR_CASOS_EXTREMOS_A_REGLA_GENERAL
```

---

## 4. Reglas de lectura para la IA

La IA debe seguir estas reglas:

1. No resumir el texto antes de estructurarlo.
2. No convertir todo en “ideas principales”.
3. Primero detectar unidades cognitivas mínimas o compuestas.
4. Respetar el orden de aparición del texto.
5. Separar instancias, moldes, inferencias y reglas.
6. No confundir un ejemplo con el molde que ejemplifica.
7. No confundir un modelo analítico posterior con una idea textual.
8. Registrar conexiones mínimas entre nodos.
9. Marcar el estatus de extracción de cada nodo.
10. Dejar observaciones para análisis posteriores sin desarrollarlas todavía.

---

## 5. Ejemplo aplicado: capítulo “No critique, no condene ni se queje”

A continuación se presenta un ejemplo enriquecido de `procesamiento_estructural`, tomando como base el primer procesamiento manual del capítulo.

---

# procesamiento_estructural

```yaml
texto_raiz:
  texto_id: TEXTO_CRUDO_CAPITULO_CARNEGIE_CRITICA
  titulo: "Si quieres recoger miel, no des puntapiés a la colmena"
  regla_terminal_visible: "No critique, no condene ni se queje"
  tipo_de_fuente: capitulo_transcrito
  objetivo_del_paso: "Estructurar linealmente las unidades cognitivas contenidas en el texto antes de producir modelos analíticos profundos."
```

---

## 5.1. Secuencia lineal enriquecida de mNodes

La siguiente secuencia respeta el orden aproximado de aparición de las estructuras en el capítulo.

---

### 00. `MN_TITULO_COLMENA`

```yaml
orden_textual: 00
mnode_id: MN_TITULO_COLMENA
tipo_de_unidad: metafora_directriz
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Si quieres recoger miel, no des puntapiés a la colmena."
formulacion: "Para obtener algo valioso de un sistema sensible, no conviene atacarlo de forma brusca."
rol_operativo: condensar_regla_en_imagen
funcion_local_en_el_texto:
  - anticipar el principio del capítulo mediante una metáfora
  - presentar la crítica como una acción torpe contra un sistema sensible
  - preparar la regla final sin formularla todavía de manera directa
estructura_interna:
  miel: resultado_deseado
  colmena: personas_o_sistema_humano_sensible
  puntapie: critica_censura_reproche
conecta_con:
  - MN_CRITICA_PRODUCE_DEFENSA
  - REGLA_1_NO_CRITIQUE
```

---

### 01. `HISTORIA_CROWLEY`

```yaml
orden_textual: 01
mnode_id: HISTORIA_CROWLEY
tipo_de_unidad: historia_ancla_extrema
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Diseño
estatus_de_extraccion: textual_explicito
segmento_fuente: "Dos Pistolas Crowley, persecución policial, carta escrita mientras era atacado, autopercepción de corazón bueno."
formulacion: "Crowley, aun siendo presentado como criminal extremo, se percibe a sí mismo como una persona de buen corazón que actúa en defensa propia."
rol_operativo: abrir_con_caso_extremo_de_autojustificacion
funcion_local_en_el_texto:
  - iniciar con un caso dramático de culpabilidad objetiva
  - mostrar contraste entre conducta externa y autoimagen interna
  - preparar el molde de sujetos culpables que no aceptan culpa
estructura_interna:
  sujeto: Crowley
  falta_o_crimen: asesinato / violencia criminal
  autopercepcion: "corazón bueno / esto me pasa por defenderme"
  contraste:
    juicio_externo: criminal_peligroso
    autoimagen_interna: persona_de_buen_corazon
conecta_con:
  - DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
  - SERIE_CRIMINALES_AUTOJUSTIFICADOS
```

---

### 02. `DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA`

```yaml
orden_textual: 02
mnode_id: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
tipo_de_unidad: molde
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
rol_operativo: organizar_casos_isomorfos
formulacion: "Sujetos socialmente culpables no adoptan esa culpa como identidad interna, sino que producen una autopercepción justificadora."
estructura_interna:
  sujeto:
  falta_o_crimen:
  autopercepcion:
  mecanismo_de_justificacion:
invariantes:
  - hay culpabilidad objetiva o socialmente atribuida
  - el sujeto no adopta esa culpabilidad como identidad interna
  - el sujeto formula una autopercepción justificadora
  - existe contraste entre juicio externo y autoimagen interna
dominio_de_variacion:
  - Crowley
  - Al Capone
  - Dutch Schultz
  - prisioneros de Sing Sing
criterio_de_validacion:
  - el caso pertenece al molde si muestra diferencia entre culpa externa y autopercepción justificadora
funcion_local_en_el_texto:
  - convertir varios ejemplos en una estructura repetible
  - preparar una generalización sobre la resistencia humana a aceptar culpa
conecta_con:
  - HISTORIA_CROWLEY
  - HISTORIA_AL_CAPONE
  - HISTORIA_DUTCH_SCHULTZ
  - HISTORIA_PRISIONEROS_SING_SING
  - PR_CASOS_EXTREMOS_A_REGLA_GENERAL
```

#### Instancias del molde

```yaml
instancias:
  - mnode_id: HISTORIA_CROWLEY
    tipo_de_unidad: historia_ancla_extrema
    estructura:
      sujeto: Crowley
      falta_o_crimen: asesinato
      autopercepcion: "Esto me pasa por defenderme / corazón bueno"
      mecanismo_de_justificacion: defensa_propia

  - mnode_id: HISTORIA_AL_CAPONE
    tipo_de_unidad: ejemplo_isomorfo
    estructura:
      sujeto: Al Capone
      falta_o_crimen: jefe de bandas criminales
      autopercepcion: benefactor_publico
      mecanismo_de_justificacion: servicio_a_los_demas

  - mnode_id: HISTORIA_DUTCH_SCHULTZ
    tipo_de_unidad: ejemplo_isomorfo
    estructura:
      sujeto: Dutch Schultz
      falta_o_crimen: criminal famoso de New York
      autopercepcion: benefactor_publico
      mecanismo_de_justificacion: autoimagen_social_positiva

  - mnode_id: HISTORIA_PRISIONEROS_SING_SING
    tipo_de_unidad: generalizacion_por_testimonio
    estructura:
      sujeto: prisioneros de Sing Sing
      falta_o_crimen: varios crímenes
      autopercepcion: "jamás se les debió apresar"
      mecanismo_de_justificacion: injusticia_recibida
```

---

### 03. `SERIE_CRIMINALES_AUTOJUSTIFICADOS`

```yaml
orden_textual: 03
mnode_id: SERIE_CRIMINALES_AUTOJUSTIFICADOS
tipo_de_unidad: serie_isomorfa
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
formulacion: "Crowley, Al Capone, Dutch Schultz y los prisioneros de Sing Sing manifiestan la misma estructura de autojustificación."
rol_operativo: reforzar_patron_por_repeticion
instancias:
  - Crowley
  - Al Capone
  - Dutch Schultz
  - prisioneros de Sing Sing
estructura_comun:
  culpabilidad_atribuida:
  autoimagen_positiva:
  justificacion:
funcion_local_en_el_texto:
  - impedir que Crowley parezca un caso aislado
  - convertir una historia extrema en patrón general
  - preparar el salto inferencial hacia personas comunes
conecta_con:
  - DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
  - PR_CASOS_EXTREMOS_A_REGLA_GENERAL
```

---

### 04. `PR_CASOS_EXTREMOS_A_REGLA_GENERAL`

```yaml
orden_textual: 04
mnode_id: PR_CASOS_EXTREMOS_A_REGLA_GENERAL
tipo_de_unidad: inferencia_generalizante
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_implicito
rol_operativo: generalizar_desde_casos_extremos
premisas:
  - Crowley se justifica
  - Al Capone se justifica
  - Dutch Schultz se justifica
  - prisioneros de Sing Sing se justifican
regla_inferencial:
  - si casos extremos de culpabilidad no aceptan culpa, casos ordinarios menos aún aceptarán censura directa
conclusion:
  - la crítica probablemente no producirá aceptación de culpa
funcion_local_en_el_texto:
  - pasar de criminales extremos a relaciones cotidianas
  - ampliar el dominio del molde
  - preparar la tesis sobre la inutilidad de la crítica
conecta_con:
  - DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
  - MN_NADIE_SE_CRITICA_A_SI_MISMO
  - MN_CRITICA_PRODUCE_DEFENSA
```

---

### 05. `FORM_WANAMAKER_NO_REGAÑAR`

```yaml
orden_textual: 05
mnode_id: FORM_WANAMAKER_NO_REGAÑAR
tipo_de_unidad: formulacion_practica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Wanamaker afirma que es una tontería regañar a los demás y que bastante tiene con sus propias limitaciones."
formulacion: "Regañar a los demás es inútil; es más sensato controlar la propia irritación."
rol_operativo: introducir_autocontrol_como_alternativa
funcion_local_en_el_texto:
  - trasladar la tesis desde casos extremos a vida práctica
  - introducir la idea de controlar la propia reacción
  - anticipar modelos posteriores como Lincoln, Franklin y Confucio
conecta_con:
  - MN_NADIE_SE_CRITICA_A_SI_MISMO
  - MET_LINCOLN
  - FORM_CONFUCIO_MIRAR_PROPIA_CASA
```

---

### 06. `MN_NADIE_SE_CRITICA_A_SI_MISMO`

```yaml
orden_textual: 06
mnode_id: MN_NADIE_SE_CRITICA_A_SI_MISMO
tipo_de_unidad: generalizacion_psicologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Noventa y nueve veces de cada cien ningún hombre se critica a sí mismo, por grandes que sean sus errores."
formulacion: "La mayoría de las personas no se critican a sí mismas, incluso cuando han cometido errores graves."
rol_operativo: formular_generalizacion_psicologica
funcion_local_en_el_texto:
  - hacer explícita la generalización preparada por los ejemplos criminales
  - conectar autojustificación extrema con comportamiento humano ordinario
conecta_con:
  - PR_CASOS_EXTREMOS_A_REGLA_GENERAL
  - MN_CRITICA_PRODUCE_DEFENSA
```

---

### 07. `MN_CRITICA_PRODUCE_DEFENSA`

```yaml
orden_textual: 07
mnode_id: MN_CRITICA_PRODUCE_DEFENSA
tipo_de_unidad: mecanismo_psicologico
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "La crítica pone a la persona en defensiva y hace que trate de justificarse."
rol_operativo: explicar_fallo_cognitivo_de_la_critica
estructura_interna:
  critica:
  efecto_cognitivo:
    - defensiva
    - justificacion
funcion_local_en_el_texto:
  - explicar por qué la crítica es inútil
  - conectar autojustificación con relaciones cotidianas
conecta_con:
  - MN_NADIE_SE_CRITICA_A_SI_MISMO
  - MN_CRITICA_DAÑA_ORGULLO
  - DIS_MOLDE_CRITICA_NO_PERSUADE
```

---

### 08. `SOP_SKINNER_REFUERZO_POSITIVO`

```yaml
orden_textual: 08
mnode_id: SOP_SKINNER_REFUERZO_POSITIVO
tipo_de_unidad: soporte_experimental
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
segmento_fuente: "B. F. Skinner demostró que un animal premiado por buena conducta aprende con más rapidez que uno castigado por mala conducta."
formulacion: "El premio enseña mejor que el castigo."
rol_operativo: sostener_alternativa_positiva_con_evidencia
premisa_experimental:
  - premiar la buena conducta produce aprendizaje más rápido y retención más eficaz que castigar la mala conducta
conclusion_soportada:
  - el refuerzo positivo es más eficaz que el castigo para modificar conducta
funcion_local_en_el_texto:
  - introducir evidencia psicológica
  - abrir la rama positiva del capítulo
conecta_con:
  - MN_REFUERZO_POSITIVO_MAS_EFICAZ
  - CASO_JOHNSTON_CASCOS
```

---

### 09. `FORM_SELYE_APROBACION_CONDENA`

```yaml
orden_textual: 09
mnode_id: FORM_SELYE_APROBACION_CONDENA
tipo_de_unidad: cita_psicologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Tanto como anhelamos la aprobación, tememos la condena."
formulacion: "Las personas anhelan aprobación y temen condena."
rol_operativo: condensar_base_afectiva_de_la_rama_positiva
funcion_local_en_el_texto:
  - explicar por qué aprobación y reconocimiento influyen
  - explicar por qué condena y crítica producen resistencia
conecta_con:
  - MN_CRITICA_DAÑA_ORGULLO
  - MN_REFUERZO_POSITIVO_MAS_EFICAZ
```

---

### 10. `MN_CRITICA_DAÑA_ORGULLO`

```yaml
orden_textual: 10
mnode_id: MN_CRITICA_DAÑA_ORGULLO
tipo_de_unidad: mecanismo_afectivo_identitario
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "La crítica lastima el orgullo, hiere el sentido de importancia y despierta resentimiento."
rol_operativo: explicar_fallo_afectivo_de_la_critica
estructura_interna:
  critica:
  efecto_identitario:
    - orgullo_herido
    - sentido_de_importancia_herido
    - resentimiento
    - desmoralizacion
    - no_correccion
funcion_local_en_el_texto:
  - mostrar que la crítica no solo falla cognitivamente sino afectivamente
  - preparar los ejemplos de resentimiento y daño persistente
conecta_con:
  - MN_CRITICA_PRODUCE_DEFENSA
  - HISTORIA_RICHARD_HARDING_DAVIS
  - EJEMPLOS_DAÑO_EXTREMO_CRITICA
```

---

### 11. `MN_REFUERZO_POSITIVO_MAS_EFICAZ`

```yaml
orden_textual: 11
mnode_id: MN_REFUERZO_POSITIVO_MAS_EFICAZ
tipo_de_unidad: idea_alternativa
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_implicito
formulacion: "El reconocimiento, el premio y la aprobación son más eficaces que la crítica y el castigo."
rol_operativo: formular_ruta_positiva
funcion_local_en_el_texto:
  - sintetizar la alternativa a la crítica
  - conectar Skinner, Selye y Johnston
conecta_con:
  - SOP_SKINNER_REFUERZO_POSITIVO
  - FORM_SELYE_APROBACION_CONDENA
  - CASO_JOHNSTON_CASCOS
```

---

### 12. `CASO_JOHNSTON_CASCOS`

```yaml
orden_textual: 12
mnode_id: CASO_JOHNSTON_CASCOS
tipo_de_unidad: caso_metodologico
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "George B. Johnston corrige a empleados que no usan casco, primero con autoridad y luego con trato amistoso."
formulacion: "Corregir sin humillar produce más obediencia y menos resentimiento que ordenar con autoridad."
rol_operativo: mostrar_metodo_de_correccion_sin_humillacion
estructura_interna:
  problema:
    - empleados_no_usan_casco
  estrategia_autoritaria:
    accion: ordenar_con_autoridad
    resultado:
      - obediencia_desganada
      - reincidencia
      - posible_resentimiento
  estrategia_amigable:
    accion:
      - preguntar_si_el_casco_incomoda
      - recordar_que_protege
      - sugerir_uso_en_tono_amistoso
    resultado:
      - mayor_obediencia
      - sin_resentimiento
      - mejor_disposicion
funcion_local_en_el_texto:
  - convertir el refuerzo positivo en método práctico
  - mostrar una situación laboral concreta
conecta_con:
  - MN_REFUERZO_POSITIVO_MAS_EFICAZ
  - MET_CORREGIR_SIN_HUMILLAR
```

---

### 13. `MET_CORREGIR_SIN_HUMILLAR`

```yaml
orden_textual: 13
mnode_id: MET_CORREGIR_SIN_HUMILLAR
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: "Para corregir una conducta, conviene evitar humillación y activar cooperación mediante respeto, explicación y tono amistoso."
rol_operativo: extraer_procedimiento_desde_caso
entrada:
  - conducta_ajena_incorrecta
  - deseo_de_modificar_conducta
operaciones:
  - evitar_censura_directa
  - preguntar_o_abrir_dialogo
  - explicar_proposito_de_la_norma
  - preservar_dignidad_del_otro
salida:
  - mayor_disposicion_a_corregir
  - menor_resentimiento
funcion_local_en_el_texto:
  - convertir Johnston en procedimiento reutilizable
conecta_con:
  - CASO_JOHNSTON_CASCOS
  - CASO_BOB_HOOVER_CORREGIR_SIN_HUMILLAR
  - MET_LINCOLN
```

---

### 14. `DIS_MOLDE_CRITICA_NO_PERSUADE`

```yaml
orden_textual: 14
mnode_id: DIS_MOLDE_CRITICA_NO_PERSUADE
tipo_de_unidad: molde_isomorfo
familia_cognitiva: FAM-Diseño
estatus_de_extraccion: molde_derivado
rol_operativo: organizar_casos_isomorfos
formulacion: "La crítica externa busca producir reconocimiento del error, pero el sujeto criticado se defiende o justifica, de modo que la crítica fracasa como persuasión."
estructura_interna:
  sujeto_criticado:
  culpa_o_error_atribuido:
  fuente_de_critica:
  autopercepcion_o_defensa:
  resultado_de_la_critica:
invariantes:
  - hay una crítica externa fuerte
  - la crítica busca mostrar al sujeto que se equivocó
  - el sujeto no adopta la culpa como identidad interna
  - aparece defensa o justificación
  - la crítica fracasa como mecanismo de corrección
dominio_de_variacion:
  - Taft
  - Albert B. Fall
criterio_de_validacion:
  - el caso pertenece al molde si la crítica produce defensa o justificación en lugar de reconocimiento del error
funcion_local_en_el_texto:
  - extender el patrón de autojustificación a casos históricos y políticos
  - reforzar la inutilidad de la crítica pública
conecta_con:
  - HISTORIA_TAFT
  - HISTORIA_ALBERT_FALL
  - MN_CRITICA_PRODUCE_DEFENSA
```

#### Instancias del molde

```yaml
instancias:
  - mnode_id: HISTORIA_TAFT
    tipo_de_unidad: ejemplo_historico
    estructura:
      sujeto_criticado: William Howard Taft
      culpa_o_error_atribuido: haber procedido mal políticamente según Roosevelt
      fuente_de_critica: Theodore Roosevelt
      autopercepcion_o_defensa: "No veo cómo podía haber procedido de otro modo"

  - mnode_id: HISTORIA_ALBERT_FALL
    tipo_de_unidad: ejemplo_historico
    estructura:
      sujeto_criticado: Albert B. Fall
      culpa_o_error_atribuido: escándalo Teapot Dome Oil
      fuente_de_critica: prensa, nación, tribunales, opinión pública
      autopercepcion_o_defensa: no aparece como culpable arrepentido; se sostiene que fue traicionado o crucificado
```

---

### 15. `MN_CRITICAS_COMO_PALOMAS_MENSAJERAS`

```yaml
orden_textual: 15
mnode_id: MN_CRITICAS_COMO_PALOMAS_MENSAJERAS
tipo_de_unidad: metafora_funcional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Las críticas son como palomas mensajeras: siempre vuelven al nido."
formulacion: "La crítica tiende a regresar contra quien critica, porque provoca defensa, resentimiento o contraataque."
rol_operativo: condensar_mecanismo_de_retorno_de_la_critica
funcion_local_en_el_texto:
  - cerrar el bloque de ejemplos negativos
  - mostrar que criticar no solo falla, sino que puede volverse contra el crítico
conecta_con:
  - MN_CRITICA_PRODUCE_DEFENSA
  - MN_CRITICA_DAÑA_ORGULLO
  - DIS_MOLDE_CRITICA_NO_PERSUADE
```

---

### 16. `PR_LEGITIMACION_DEL_MODELO_LINCOLN`

```yaml
orden_textual: 16
mnode_id: PR_LEGITIMACION_DEL_MODELO_LINCOLN
tipo_de_unidad: legitimacion_de_modelo
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: "Lincoln puede funcionar como modelo fiable para tratar con personas porque se lo presenta como figura admirable y gobernante excepcional."
rol_operativo: justificar_autoridad_de_modelo
premisas:
  - Lincoln es reconocido como figura admirable
  - Stanton lo describe como el gobernante más perfecto conocido
  - el autor declara haber estudiado durante años el método de Lincoln
conclusion:
  - Lincoln puede funcionar como modelo fiable para tratar con personas
funcion_local_en_el_texto:
  - cambiar de ejemplos negativos a modelo positivo
  - preparar el método Lincoln
conecta_con:
  - MET_LINCOLN
  - MODELO_LINCOLN_NO_CENSURAR_GENERALES
```

---

### 17. `HISTORIA_LINCOLN_APRENDE_NO_CRITICAR`

```yaml
orden_textual: 17
mnode_id: HISTORIA_LINCOLN_APRENDE_NO_CRITICAR
tipo_de_unidad: historia_de_aprendizaje
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: "Lincoln aprendió por experiencia amarga que la crítica y el ridículo pueden producir consecuencias peligrosas."
rol_operativo: mostrar_origen_experiencial_del_metodo
estructura_interna:
  etapa_1: Lincoln critica y ridiculiza
  incidente: carta contra James Shields
  consecuencia:
    - resentimiento
    - desafio_a_duelo
    - riesgo_de_muerte
  aprendizaje:
    - no volver a escribir cartas insultantes
    - casi nunca volver a criticar a los demás
funcion_local_en_el_texto:
  - mostrar que Lincoln no aparece como modelo perfecto desde el inicio
  - explicar la génesis de su autocontrol
conecta_con:
  - PR_LEGITIMACION_DEL_MODELO_LINCOLN
  - MET_LINCOLN
```

---

### 18. `MODELO_LINCOLN_NO_CENSURAR_GENERALES`

```yaml
orden_textual: 18
mnode_id: MODELO_LINCOLN_NO_CENSURAR_GENERALES
tipo_de_unidad: modelo_operativo
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: "Lincoln evita censurar con dureza incluso cuando sus generales cometen errores graves."
rol_operativo: encarnar_autocontrol_en_condiciones_extremas
estructura_interna:
  situacion:
    - generales_cometen_errores_graves
    - media_nacion_los_censura
  conducta_de_Lincoln:
    - conserva_calma
    - evita_critica_acerba
    - sostiene_maxima_de_no_juzgar
funcion_local_en_el_texto:
  - mostrar aplicación madura del aprendizaje de Lincoln
  - presentar autocontrol como forma superior de trato humano
conecta_con:
  - MET_LINCOLN
  - CASO_LINCOLN_CARTA_A_MEADE
```

---

### 19. `CASO_LINCOLN_CARTA_A_MEADE`

```yaml
orden_textual: 19
mnode_id: CASO_LINCOLN_CARTA_A_MEADE
tipo_de_unidad: caso_metodologico
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: "Lincoln escribe una carta severa a Meade, pero no la envía al anticipar sus efectos negativos."
rol_operativo: mostrar_contencion_del_impulso_critico
entrada:
  - frustracion_extrema_por_la_fuga_de_Lee
  - deseo_de_reprochar_a_Meade
operaciones:
  - escribir_una_carta_severa
  - imaginar_las_circunstancias_de_Meade
  - anticipar_justificacion_y_resentimiento
  - decidir_no_enviar_la_carta
salida:
  - contencion_de_la_critica
  - preservacion_de_la_relacion_y_funcion_del_general
funcion_local_en_el_texto:
  - convertir la regla en método concreto
  - mostrar cómo se transforma el impulso crítico en comprensión
conecta_con:
  - MET_LINCOLN
  - SUBMODELO_MARK_TWAIN_CARTAS_NO_ENVIADAS
```

---

### 20. `MET_LINCOLN`

```yaml
orden_textual: 20
mnode_id: MET_LINCOLN
tipo_de_unidad: metodo_derivado
familia_cognitiva: FAM-Método
estatus_de_extraccion: inferencia_local
formulacion: "Transformar el impulso de censura en comprensión mediante autocontrol, consideración de circunstancias y contención del reproche."
rol_operativo: transformar_impulso_de_censura_en_comprension
entrada:
  - conducta_ajena_que_produce_ira_frustracion_o_reproche
operaciones:
  - contener_reaccion_inmediata
  - considerar_circunstancias_del_otro
  - imaginar_que_uno_podria_actuar_igual_en_condiciones_similares
  - escribir_o_formular_el_reproche_sin_necesariamente_enviarlo
  - sustituir_condena_por_comprension_o_intervencion_prudente
salida:
  - menor_daño_relacional
  - mayor_autocontrol
  - mayor_posibilidad_de_influencia
criterio_de_exito:
  - no_se_despierta_resentimiento_innecesario
  - se_preserva_la_dignidad_del_otro
  - se_actua_desde_mesura
funcion_local_en_el_texto:
  - extraer método operativo desde el modelo Lincoln
conecta_con:
  - HISTORIA_LINCOLN_APRENDE_NO_CRITICAR
  - CASO_LINCOLN_CARTA_A_MEADE
  - SUBMODELO_ROOSEVELT_QUE_HARIA_LINCOLN
  - REGLA_1_NO_CRITIQUE
```

---

### 21. `SUBMODELO_ROOSEVELT_QUE_HARIA_LINCOLN`

```yaml
orden_textual: 21
mnode_id: SUBMODELO_ROOSEVELT_QUE_HARIA_LINCOLN
tipo_de_unidad: submodelo_practico
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "Theodore Roosevelt mira el retrato de Lincoln y se pregunta qué haría Lincoln en su lugar."
formulacion: "Usar a Lincoln como modelo interno de decisión para regular la propia conducta."
rol_operativo: activar_modelo_interno_de_decision
procedimiento:
  - enfrentar_problema_grave
  - mirar_o_recordar_modelo_admirable
  - preguntar_que_haria_el_modelo_en_esta_situacion
  - ajustar_la_propia_reaccion_a_ese_criterio
funcion_local_en_el_texto:
  - mostrar cómo el modelo Lincoln puede incorporarse como método personal
conecta_con:
  - MET_LINCOLN
```

---

### 22. `SUBMODELO_MARK_TWAIN_CARTAS_NO_ENVIADAS`

```yaml
orden_textual: 22
mnode_id: SUBMODELO_MARK_TWAIN_CARTAS_NO_ENVIADAS
tipo_de_unidad: submodelo_de_descarga
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: "Escribir cartas de ira puede descargar presión, pero no deben enviarse si dañan a otros."
rol_operativo: descargar_sin_dañar
procedimiento:
  - escribir_cartas_violentas_o_descargas_emocionales
  - permitir_descarga_privada
  - impedir_envio_o_publicacion
  - evitar_daño_interpersonal
funcion_local_en_el_texto:
  - mostrar técnica de descarga sin daño
  - reforzar el método de no enviar la carta de reproche
conecta_con:
  - CASO_LINCOLN_CARTA_A_MEADE
  - MET_LINCOLN
```

---

### 23. `FORM_CONFUCIO_MIRAR_PROPIA_CASA`

```yaml
orden_textual: 23
mnode_id: FORM_CONFUCIO_MIRAR_PROPIA_CASA
tipo_de_unidad: cita_moral
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "No te quejes de la nieve en el techo del vecino cuando también cubre el umbral de tu casa."
formulacion: "Antes de quejarse de otros, conviene mirar primero las propias faltas."
rol_operativo: desplazar_critica_externa_a_autoexamen
funcion_local_en_el_texto:
  - reforzar la idea de empezar por uno mismo
  - preparar ejemplos personales de resentimiento ante la crítica
conecta_con:
  - FORM_WANAMAKER_NO_REGAÑAR
  - MN_BASE_ANTROPOLOGICA
  - REGLA_1_NO_CRITIQUE
```

---

### 24. `HISTORIA_RICHARD_HARDING_DAVIS`

```yaml
orden_textual: 24
mnode_id: HISTORIA_RICHARD_HARDING_DAVIS
tipo_de_unidad: ejemplo_autobiografico
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "Una crítica punzante puede herir durante años, incluso cuando la crítica sea merecida."
rol_operativo: mostrar_resentimiento_duradero_por_experiencia_personal
estructura_interna:
  error_del_autor:
    - usa_frase_pretenciosa: "Dictada pero no leída"
  critica_recibida:
    - Davis_devuelve_reproche_punzante
  efecto:
    - herida_emocional_duradera
    - recuerdo_persistente_tras_la_muerte_de_Davis
funcion_local_en_el_texto:
  - volver personal la tesis sobre la crítica
  - mostrar que una crítica justificada puede producir resentimiento
conecta_con:
  - MN_CRITICA_DAÑA_ORGULLO
  - MN_BASE_ANTROPOLOGICA
```

---

### 25. `MN_BASE_ANTROPOLOGICA`

```yaml
orden_textual: 25
jerarquia_logica: fundamento_global
mnode_id: MN_BASE_ANTROPOLOGICA
tipo_de_unidad: formulacion_antropologica
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "No tratamos con criaturas lógicas. Tratamos con criaturas emotivas, erizadas de prejuicios e impulsadas por el orgullo y la vanidad."
formulacion: "Las personas no son criaturas puramente lógicas; son criaturas emotivas, atravesadas por prejuicios, orgullo y vanidad."
rol_operativo: fijar_condicion_antropologica_del_texto
funcion_local_en_el_texto:
  - explicar retrospectivamente todo lo anterior
  - dar fundamento psicológico a la inutilidad de la crítica
  - preparar la transición hacia comprensión y perdón
funcion_logica_global:
  - fundamentar todo el sistema del capítulo
conecta_con:
  - MN_CRITICA_PRODUCE_DEFENSA
  - MN_CRITICA_DAÑA_ORGULLO
  - FORM_SELYE_APROBACION_CONDENA
  - CIERRE_PAPA_OLVIDA
```

---

### 26. `EJEMPLOS_DAÑO_EXTREMO_CRITICA`

```yaml
orden_textual: 26
mnode_id: EJEMPLOS_DAÑO_EXTREMO_CRITICA
tipo_de_unidad: ejemplos_de_consecuencia_extrema
familia_cognitiva: FAM-Patrón-de-razonamiento
estatus_de_extraccion: textual_explicito
formulacion: "La crítica puede producir consecuencias extremas: abandonar una actividad creativa o incluso destruir la vida."
rol_operativo: intensificar_gravedad_de_la_tesis
instancias:
  - Thomas Hardy deja de escribir novelas
  - Thomas Chatterton se suicida
funcion_local_en_el_texto:
  - mostrar que la crítica puede destruir ánimo, producción o vida
  - reforzar la peligrosidad de la crítica acerba
conecta_con:
  - MN_CRITICA_DAÑA_ORGULLO
  - MN_BASE_ANTROPOLOGICA
```

---

### 27. `MODELO_FRANKLIN_NO_HABLAR_MAL`

```yaml
orden_textual: 27
mnode_id: MODELO_FRANKLIN_NO_HABLAR_MAL
tipo_de_unidad: modelo_practico
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
segmento_fuente: "No hablaré mal de hombre alguno, y de todos diré todo lo bueno que sepa."
formulacion: "No hablar mal de nadie y decir lo bueno que se sepa de todos es una regla práctica de trato social."
rol_operativo: ofrecer_regla_positiva_de_interaccion
funcion_local_en_el_texto:
  - presentar una versión positiva de la regla
  - conectar diplomacia, tacto y éxito interpersonal
conecta_con:
  - MN_REFUERZO_POSITIVO_MAS_EFICAZ
  - REGLA_1_NO_CRITIQUE
```

---

### 28. `FORM_CARLYLE_GRANDEZA_TRATO_PEQUEÑOS`

```yaml
orden_textual: 28
mnode_id: FORM_CARLYLE_GRANDEZA_TRATO_PEQUEÑOS
tipo_de_unidad: cita_moral
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Un gran hombre demuestra su grandeza por la forma en que trata a los pequeños."
formulacion: "La grandeza de una persona se demuestra por cómo trata a quienes tienen menos poder o estatus."
rol_operativo: elevar_la_regla_a_criterio_de_caracter
funcion_local_en_el_texto:
  - conectar dominio de sí mismo con grandeza personal
  - convertir el trato comprensivo en señal de carácter
conecta_con:
  - MODELO_FRANKLIN_NO_HABLAR_MAL
  - CASO_BOB_HOOVER_CORREGIR_SIN_HUMILLAR
```

---

### 29. `CASO_BOB_HOOVER_CORREGIR_SIN_HUMILLAR`

```yaml
orden_textual: 29
mnode_id: CASO_BOB_HOOVER_CORREGIR_SIN_HUMILLAR
tipo_de_unidad: caso_metodologico
familia_cognitiva: FAM-Método
estatus_de_extraccion: textual_explicito
formulacion: "Bob Hoover corrige un error grave sin humillar al mecánico responsable, reforzando confianza en lugar de producir destrucción emocional."
rol_operativo: mostrar_correccion_sin_humillacion_en_situacion_extrema
estructura_interna:
  problema:
    - mecanico_carga_combustible_equivocado
    - error_pudo_causar_muerte
    - avion_dañado
  respuesta_esperada:
    - ira
    - reproche
    - sancion
  respuesta_de_Hoover:
    - no_critica
    - pone_el_brazo_sobre_el_hombro_del_mecanico
    - le_confia_nuevamente_responsabilidad
funcion_local_en_el_texto:
  - repetir el patrón de Johnston con mayor carga dramática
  - mostrar que confianza y dignidad pueden producir responsabilidad
conecta_con:
  - CASO_JOHNSTON_CASCOS
  - MET_CORREGIR_SIN_HUMILLAR
  - FORM_CARLYLE_GRANDEZA_TRATO_PEQUEÑOS
```

---

### 30. `CIERRE_PAPA_OLVIDA`

```yaml
orden_textual: 30
mnode_id: CIERRE_PAPA_OLVIDA
tipo_de_unidad: cierre_emotivo
familia_cognitiva: forma_compuesta
familia_soportada: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "Un padre reconoce que critica injustamente a su hijo al exigirle madurez adulta, y decide comprenderlo mejor."
rol_operativo: cerrar_afectivamente_la_regla
estructura_interna:
  sujeto_que_critica: padre
  sujeto_criticado: hijo
  conducta_del_padre:
    - regaña
    - exige_demasiado
    - mide_al_niño_con_vara_adulta
  giro:
    - remordimiento
    - reconocimiento_de_injusticia
    - comprension_de_que_el_hijo_es_solo_un_niño
  promesa:
    - morderse_la_lengua
    - recordar_que_es_un_niño_pequeño
    - acompañar_y_comprender
funcion_local_en_el_texto:
  - trasladar la regla al ámbito familiar
  - hacer que el lector se identifique con quien critica
  - producir cierre afectivo antes de la regla final
conecta_con:
  - MN_BASE_ANTROPOLOGICA
  - FORM_SABERLO_TODO_ES_PERDONARLO_TODO
  - REGLA_1_NO_CRITIQUE
```

---

### 31. `FORM_SABERLO_TODO_ES_PERDONARLO_TODO`

```yaml
orden_textual: 31
mnode_id: FORM_SABERLO_TODO_ES_PERDONARLO_TODO
tipo_de_unidad: formulacion_moral
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "Saberlo todo es perdonarlo todo."
formulacion: "Comprender completamente las circunstancias de alguien reduce la tendencia a condenarlo."
rol_operativo: condensar_comprension_como_perdon
funcion_local_en_el_texto:
  - unir comprensión y perdón
  - preparar la regla final
conecta_con:
  - CIERRE_PAPA_OLVIDA
  - REGLA_1_NO_CRITIQUE
```

---

### 32. `FORM_DR_JOHNSON_NO_JUZGAR_ANTES_DEL_FINAL`

```yaml
orden_textual: 32
mnode_id: FORM_DR_JOHNSON_NO_JUZGAR_ANTES_DEL_FINAL
tipo_de_unidad: cita_moral
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "Dios mismo no propone juzgar al hombre sino hasta el fin de sus días."
rol_operativo: reforzar_suspension_del_juicio
funcion_local_en_el_texto:
  - llevar la regla de no juzgar a una formulación moral elevada
  - reforzar la idea de postergar o evitar la condena
conecta_con:
  - FORM_SABERLO_TODO_ES_PERDONARLO_TODO
  - REGLA_1_NO_CRITIQUE
```

---

### 33. `REGLA_1_NO_CRITIQUE`

```yaml
orden_textual: 33
jerarquia_logica: regla_terminal_del_capitulo
mnode_id: REGLA_1_NO_CRITIQUE
tipo_de_unidad: regla_terminal
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
formulacion: "No critique, no condene ni se queje."
rol_operativo: condensar_todo_el_recorrido_en_principio_practico
funcion_local_en_el_texto:
  - cerrar el capítulo como regla operativa
  - convertir ejemplos, inferencias, métodos y cierres afectivos en principio final
conecta_con:
  - MN_TITULO_COLMENA
  - MN_CRITICA_PRODUCE_DEFENSA
  - MN_CRITICA_DAÑA_ORGULLO
  - MN_REFUERZO_POSITIVO_MAS_EFICAZ
  - MET_LINCOLN
  - CIERRE_PAPA_OLVIDA
```

---

## 5.2. Moldes detectados

### Molde 1: `DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA`

```yaml
molde:
  mnode_id: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
  familia_cognitiva: FAM-Diseño
  estructura:
    sujeto:
    falta_o_crimen:
    autopercepcion:
    mecanismo_de_justificacion:
  invariantes:
    - culpabilidad objetiva o socialmente atribuida
    - no adopción interna de la culpa
    - autopercepción justificadora
    - contraste juicio externo / autoimagen interna
  instancias:
    - HISTORIA_CROWLEY
    - HISTORIA_AL_CAPONE
    - HISTORIA_DUTCH_SCHULTZ
    - HISTORIA_PRISIONEROS_SING_SING
```

### Molde 2: `DIS_MOLDE_CRITICA_NO_PERSUADE`

```yaml
molde:
  mnode_id: DIS_MOLDE_CRITICA_NO_PERSUADE
  familia_cognitiva: FAM-Diseño
  estructura:
    sujeto_criticado:
    culpa_o_error_atribuido:
    fuente_de_critica:
    autopercepcion_o_defensa:
    resultado_de_la_critica:
  invariantes:
    - crítica externa fuerte
    - intención de corregir o exhibir error
    - defensa o justificación del sujeto criticado
    - fracaso de la crítica como persuasión
  instancias:
    - HISTORIA_TAFT
    - HISTORIA_ALBERT_FALL
```

### Molde 3: `MET_CORREGIR_SIN_HUMILLAR`

```yaml
molde:
  mnode_id: MET_CORREGIR_SIN_HUMILLAR
  familia_cognitiva: FAM-Método
  estructura:
    problema:
    respuesta_esperada_de_critica:
    respuesta_sin_humillacion:
    resultado:
  invariantes:
    - existe error o conducta que se desea corregir
    - se evita humillación directa
    - se preserva dignidad del sujeto
    - se busca mayor disposición y menor resentimiento
  instancias:
    - CASO_JOHNSTON_CASCOS
    - CASO_BOB_HOOVER_CORREGIR_SIN_HUMILLAR
    - CASO_LINCOLN_CARTA_A_MEADE
```

---

## 5.3. Inferencias locales principales

```yaml
inferencias_locales:
  - mnode_id: PR_CASOS_EXTREMOS_A_REGLA_GENERAL
    origen:
      - DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
    conclusion: "la crítica probablemente no producirá aceptación de culpa"

  - mnode_id: PR_CRITICA_A_DEFENSA
    origen:
      - MN_NADIE_SE_CRITICA_A_SI_MISMO
      - MN_CRITICA_PRODUCE_DEFENSA
    conclusion: "criticar activa defensa y justificación"

  - mnode_id: PR_CRITICA_A_RESENTIMIENTO
    origen:
      - MN_CRITICA_DAÑA_ORGULLO
      - FORM_SELYE_APROBACION_CONDENA
    conclusion: "la crítica despierta resentimiento porque amenaza orgullo y necesidad de aprobación"

  - mnode_id: PR_REFUERZO_POSITIVO_A_CORRECCION
    origen:
      - SOP_SKINNER_REFUERZO_POSITIVO
      - CASO_JOHNSTON_CASCOS
    conclusion: "el reconocimiento o la corrección sin humillación funcionan mejor que castigo y censura"

  - mnode_id: PR_LINCOLN_COMO_MODELO
    origen:
      - PR_LEGITIMACION_DEL_MODELO_LINCOLN
      - HISTORIA_LINCOLN_APRENDE_NO_CRITICAR
      - CASO_LINCOLN_CARTA_A_MEADE
    conclusion: "Lincoln puede funcionar como modelo operativo de contención y comprensión"
```

---

## 5.4. Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen: HISTORIA_CROWLEY
    tipo: instancia_de
    destino: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA

  - origen: HISTORIA_AL_CAPONE
    tipo: instancia_de
    destino: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA

  - origen: HISTORIA_DUTCH_SCHULTZ
    tipo: instancia_de
    destino: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA

  - origen: HISTORIA_PRISIONEROS_SING_SING
    tipo: instancia_de
    destino: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA

  - origen: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
    tipo: soporta
    destino: PR_CASOS_EXTREMOS_A_REGLA_GENERAL

  - origen: PR_CASOS_EXTREMOS_A_REGLA_GENERAL
    tipo: prepara
    destino: MN_NADIE_SE_CRITICA_A_SI_MISMO

  - origen: MN_NADIE_SE_CRITICA_A_SI_MISMO
    tipo: soporta
    destino: MN_CRITICA_PRODUCE_DEFENSA

  - origen: MN_CRITICA_PRODUCE_DEFENSA
    tipo: complementa
    destino: MN_CRITICA_DAÑA_ORGULLO

  - origen: SOP_SKINNER_REFUERZO_POSITIVO
    tipo: soporta
    destino: MN_REFUERZO_POSITIVO_MAS_EFICAZ

  - origen: FORM_SELYE_APROBACION_CONDENA
    tipo: explica_base_afectiva_de
    destino: MN_REFUERZO_POSITIVO_MAS_EFICAZ

  - origen: CASO_JOHNSTON_CASCOS
    tipo: instancia_metodologica_de
    destino: MET_CORREGIR_SIN_HUMILLAR

  - origen: HISTORIA_TAFT
    tipo: instancia_de
    destino: DIS_MOLDE_CRITICA_NO_PERSUADE

  - origen: HISTORIA_ALBERT_FALL
    tipo: instancia_de
    destino: DIS_MOLDE_CRITICA_NO_PERSUADE

  - origen: DIS_MOLDE_CRITICA_NO_PERSUADE
    tipo: refuerza
    destino: MN_CRITICA_PRODUCE_DEFENSA

  - origen: MN_CRITICAS_COMO_PALOMAS_MENSAJERAS
    tipo: condensa
    destino: MN_CRITICA_PRODUCE_DEFENSA

  - origen: PR_LEGITIMACION_DEL_MODELO_LINCOLN
    tipo: legitima
    destino: MET_LINCOLN

  - origen: HISTORIA_LINCOLN_APRENDE_NO_CRITICAR
    tipo: explica_origen_de
    destino: MET_LINCOLN

  - origen: CASO_LINCOLN_CARTA_A_MEADE
    tipo: instancia_de
    destino: MET_LINCOLN

  - origen: SUBMODELO_ROOSEVELT_QUE_HARIA_LINCOLN
    tipo: aplica
    destino: MET_LINCOLN

  - origen: SUBMODELO_MARK_TWAIN_CARTAS_NO_ENVIADAS
    tipo: varia_metodo_de
    destino: CASO_LINCOLN_CARTA_A_MEADE

  - origen: FORM_CONFUCIO_MIRAR_PROPIA_CASA
    tipo: desplaza_hacia
    destino: autoexamen

  - origen: HISTORIA_RICHARD_HARDING_DAVIS
    tipo: ejemplifica
    destino: MN_CRITICA_DAÑA_ORGULLO

  - origen: MN_BASE_ANTROPOLOGICA
    tipo: fundamenta
    destino: MN_CRITICA_PRODUCE_DEFENSA

  - origen: MN_BASE_ANTROPOLOGICA
    tipo: fundamenta
    destino: MN_CRITICA_DAÑA_ORGULLO

  - origen: EJEMPLOS_DAÑO_EXTREMO_CRITICA
    tipo: intensifica
    destino: MN_CRITICA_DAÑA_ORGULLO

  - origen: MODELO_FRANKLIN_NO_HABLAR_MAL
    tipo: formula_version_positiva_de
    destino: REGLA_1_NO_CRITIQUE

  - origen: CASO_BOB_HOOVER_CORREGIR_SIN_HUMILLAR
    tipo: instancia_metodologica_de
    destino: MET_CORREGIR_SIN_HUMILLAR

  - origen: CIERRE_PAPA_OLVIDA
    tipo: cierre_afectivo_de
    destino: REGLA_1_NO_CRITIQUE

  - origen: FORM_SABERLO_TODO_ES_PERDONARLO_TODO
    tipo: condensa
    destino: comprension_antes_de_condena

  - origen: FORM_DR_JOHNSON_NO_JUZGAR_ANTES_DEL_FINAL
    tipo: refuerza
    destino: REGLA_1_NO_CRITIQUE
```

---

## 5.5. Observaciones para pasos posteriores

Estas observaciones no deben desarrollarse en el paso 1, pero deben conservarse para análisis posteriores.

```yaml
observaciones_para_pasos_posteriores:
  modelo_de_juego_inferido:
    estatus: estructura_analitica_posterior
    descripcion: >
      El capítulo puede formalizarse como un juego de influencia donde un sujeto A
      intenta modificar conducta o actitud de un sujeto B. La crítica reduce disposición
      porque activa defensa y resentimiento; la comprensión y el reconocimiento aumentan
      disposición porque preservan dignidad.
    no_desarrollar: true

  arquitectura_retórica_del_capitulo:
    estatus: estructura_analitica_posterior
    descripcion: >
      El capítulo organiza una secuencia persuasiva: caso extremo, serie isomorfa,
      generalización, mecanismo psicológico, alternativa positiva, casos históricos,
      modelo Lincoln, submodelos, cierre emotivo y regla final.
    no_desarrollar: true

  lectura_por_familias_cognitivas:
    estatus: clasificacion_transversal_posterior
    descripcion: >
      En un paso posterior se puede construir un perfil multifamiliar completo:
      FAM-Idea, FAM-Patrón-de-razonamiento, FAM-Diseño, FAM-Método y FAM-Plan.
    no_desarrollar: true

  construccion_conceptual_normalizada:
    estatus: producto_posterior
    descripcion: >
      El paso 1 produce la base estructural, pero todavía no produce la síntesis final
      transferible a realizaciones como video corto o carousel.
    no_desarrollar: true
```

---

## 6. Plantilla reusable para cualquier texto en crudo

Cuando una IA reciba un nuevo texto en crudo, debe producir algo como esto:

```yaml
procesamiento_estructural:
  texto_raiz:
    texto_id:
    titulo_o_descripcion:
    tipo_de_fuente:
    objetivo_del_paso:

  criterios_de_lectura:
    - preservar_orden_textual
    - detectar_mnodes_candidatos
    - separar_instancias_moldes_inferencias_metodos_reglas
    - no_construir_modelos_analiticos_profundos_todavia
    - registrar_estatus_de_extraccion

  secuencia_lineal_de_mnodes:
    - orden_textual:
      mnode_id:
      tipo_de_unidad:
      familia_cognitiva:
      estatus_de_extraccion:
      segmento_fuente:
      formulacion:
      rol_operativo:
      funcion_local_en_el_texto:
      estructura_interna:
      conecta_con:
      observaciones:

  moldes_detectados:
    - mnode_id:
      estructura:
      invariantes:
      dominio_de_variacion:
      instancias:
      criterio_de_validacion:

  relaciones_basicas:
    - origen:
      tipo:
      destino:
      justificacion:

  observaciones_para_pasos_posteriores:
    modelos_analiticos_posibles:
    arquitectura_retórica_posible:
    lectura_familiar_posible:
    construccion_conceptual_normalizada_pendiente:

  validacion:
    preserva_orden_textual:
    separa_moldes_de_instancias:
    distingue_textual_de_derivado:
    registra_relaciones_minimas:
    evita_modelos_profundos_prematuros:
```

---

## 7. Checklist de validación del paso 1

Antes de considerar terminado el paso 1, la IA debe verificar:

```txt
[ ] Se identificó el texto raíz.
[ ] Se preservó el orden de aparición del texto.
[ ] Se detectaron estructuras cognitivas, no solo ideas sueltas.
[ ] Cada estructura tiene `mnode_id`.
[ ] Cada estructura tiene `tipo_de_unidad`.
[ ] Cada estructura tiene `familia_cognitiva` o forma compuesta justificada.
[ ] Cada estructura tiene `estatus_de_extraccion`.
[ ] Se separaron moldes de instancias.
[ ] Se separaron ejemplos, inferencias, métodos, citas y reglas.
[ ] Se registraron relaciones básicas entre mNodes.
[ ] Las inferencias locales tienen premisas, regla inferencial y conclusión.
[ ] Los casos metodológicos tienen problema, operaciones y resultado.
[ ] Las citas funcionales indican qué función cumplen localmente.
[ ] Las observaciones para pasos posteriores no fueron confundidas con contenido textual.
[ ] El paso 1 queda listo para alimentar análisis posteriores.
```

---

## 8. Errores frecuentes que la IA debe evitar

### Error 1: resumir en vez de estructurar

Incorrecto:

```txt
El texto dice que no hay que criticar porque la crítica causa resentimiento.
```

Correcto:

```yaml
mnode_id: MN_CRITICA_DAÑA_ORGULLO
tipo_de_unidad: mecanismo_afectivo_identitario
estructura:
  critica:
  efecto_identitario:
    - orgullo_herido
    - resentimiento
    - desmoralizacion
```

### Error 2: mezclar instancia y molde

Incorrecto:

```yaml
mnode_id: Crowley_no_acepta_culpa
```

como si Crowley fuera el molde completo.

Correcto:

```yaml
molde: DIS_MOLDE_CRIMINAL_NO_ACEPTA_CULPA
instancia: HISTORIA_CROWLEY
```

### Error 3: desarrollar modelos posteriores demasiado pronto

Incorrecto en paso 1:

```yaml
modelo_de_juego:
  jugador_A:
  jugador_B:
  disposicion:
```

Correcto en paso 1:

```yaml
observacion_para_pasos_posteriores:
  posible_modelo_de_juego_inferido:
    estatus: estructura_analitica_posterior
```

### Error 4: llamar “idea” a todo

Incorrecto:

```txt
idea 1: Crowley
idea 2: Skinner
idea 3: Lincoln
```

Correcto:

```yaml
HISTORIA_CROWLEY:
  tipo_de_unidad: historia_ancla_extrema

SOP_SKINNER_REFUERZO_POSITIVO:
  tipo_de_unidad: soporte_experimental

MET_LINCOLN:
  tipo_de_unidad: metodo_derivado
```

### Error 5: ignorar función local

Cada nodo debe decir qué hace en ese lugar del texto. No basta con identificarlo.

---

## 9. Fórmula final del paso 1

```txt
texto_en_crudo
  → preservacion_de_orden_textual
    → deteccion_de_estructuras_cognitivas
      → separacion_de_moldes_instancias_inferencias_metodos_citas_reglas
        → relaciones_basicas
          → base_para_construccion_conceptual_posterior
```

La frase que condensa el paso 1 es:

```txt
Antes de interpretar profundamente un texto, hay que convertirlo en una secuencia explícita de estructuras cognitivas detectadas.
```

---

## 10. Resultado esperado

Una IA que use este documento como referencia debe producir una salida capaz de servir como base para:

```txt
lectura_por_familias_cognitivas
modelo_analitico_derivado
arquitectura_retórica
construccion_conceptual_normalizada
grafo_de_mnodes
realizaciones codominiales posteriores
```

Pero en este paso solo debe entregar:

```txt
primer_procesamiento_estructural_del_texto
```

con el mayor grado posible de orden, trazabilidad y separación entre tipos de unidades.
