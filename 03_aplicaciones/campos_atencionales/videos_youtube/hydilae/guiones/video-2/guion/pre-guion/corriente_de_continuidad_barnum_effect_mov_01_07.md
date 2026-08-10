# Corriente de Continuidad — Guion YouTube sobre Barnum Effect

**Objeto:** Corriente de Continuidad derivada de la arquitectura argumentativa MOV_01–MOV_07  
**Protocolo aplicado:** PCMG — Protocolo Constructor de Corriente de Continuidad  
**Estado del artefacto:** pre-redaccional  
**Uso previsto:** base para redactar el guion final por ejecución de beats  
**Advertencia operativa:** este documento no es todavía el guion. No contiene voz final, líneas definitivas ni escenas cerradas. Su función es convertir la arquitectura argumentativa en unidades guionizables.

---

## 0. Tesis global y regla de construcción

### 0.1. Tesis global del video

```txt
El efecto Barnum revela que muchas veces no sentimos que una descripción es personal porque sea realmente precisa, sino porque nuestra mente completa sus ambigüedades con recuerdos, deseos, inseguridades y tensiones propias, produciendo una sensación de reconocimiento subjetivo.
```

### 0.2. Fórmula del mecanismo que debe sostener todo el guion

```txt
descripción general
  + apariencia de personalización
  + ambigüedad interpretativa
  + marco de validación
  + completado autobiográfico
    → sensación de reconocimiento subjetivo
      → posible confusión entre resonancia y precisión
```

### 0.3. Regla de conversión PCMG

```txt
MOV argumentativo
  → unidad guionizable
    → beats internos
      → redacción controlada
```

La trazabilidad obligatoria para la siguiente fase será:

```txt
línea_de_guion
  → beat_interno
    → unidad_guionizable
      → MOV
        → arquitectura_argumentativa_global
```

Si una línea futura no puede rastrearse a un beat, probablemente será decoración, repetición o improvisación.

---

## 1. Arquitectura macro fija

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

### 1.1. Función macro de cada unidad

| Unidad               | Función macro                           | Transformación cognitiva esperada                                                                                       |
| -------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MOV_01               | Apertura por doble caso                 | El espectador ve una anomalía: la misma frase funciona en vidas distintas.                                              |
| MOV_02               | Formalización del principio psicológico | El espectador entiende que la precisión sentida nace del completado autobiográfico.                                     |
| MOV_03               | Modelado del juego estratégico          | El espectador deja de ver el efecto como frase aislada y lo entiende como interacción entre emisor, mensaje y receptor. |
| PUENTE_MOV_03_MOV_04 | Reenfoque hacia el artefacto intermedio | El espectador entiende que hay que analizar bajo qué condiciones el mensaje puede operar.                               |
| MOV_04               | Marco de validación                     | El espectador entiende que la frase necesita respaldo interpretativo para no parecer arbitraria.                        |
| MOV_05               | Forma interna de la frase               | El espectador entiende cómo se construye verbalmente una frase de alta aplicabilidad.                                   |
| MOV_06               | Aplicaciones por variación contextual   | El espectador reconoce el mismo patrón en dominios distintos.                                                           |
| MOV_07               | Cierre por invariantes y adaptación     | El espectador conserva una matriz operativa para detectar o aplicar el modelo sin confundirlo con copia de frases.      |

---

## 2. Restricciones globales de guionización

### 2.1. Variación permitida

```yaml
variacion_permitida:
  - cantidad_de_beats_por_MOV
  - intensidad_dramatica_de_cada_unidad
  - recursos_visuales
  - orden_interno_de_subbeats_si_no_rompe_la_funcion
  - frase_bisagra_tentativa
  - seleccion_de_ejemplos_en_MOV_06
  - ritmo_y_duracion_de_cada_unidad
```

### 2.2. Variación no permitida

```yaml
variacion_no_permitida:
  - cambiar_el_orden_macro
  - convertir_MOV_01_en_explicacion_tecnica_total
  - introducir_aplicaciones_antes_de_MOV_06
  - explicar_forma_interna_de_la_frase_antes_de_MOV_05
  - cerrar_el_modelo_antes_de_MOV_07
  - convertir_MOV_06_en_lista_de_ejemplos_sin_invariantes
  - convertir_el_video_en_manual_de_manipulacion_sin_limite_critico
```

### 2.3. Regla de no adelantamiento

```txt
Cada MOV sólo puede usar información instalada por movimientos anteriores o perteneciente al MOV actual.
```

Ejemplos de aplicación:

```txt
MOV_01:
  Puede mostrar la anomalía.
  No debe explicar todavía todos los componentes del modelo.

MOV_02:
  Puede formalizar alta aplicabilidad, ambigüedad y completado.
  No debe abrir todavía publicidad, política o venta.

MOV_03:
  Puede modelar jugadores, mensaje y salidas.
  No debe analizar todavía el marco de validación como tema central.

MOV_04:
  Puede explicar respaldo interpretativo.
  No debe diseccionar todavía la forma verbal completa de la frase.

MOV_05:
  Puede analizar la forma interna.
  No debe desplegar aplicaciones por dominio.

MOV_06:
  Puede mostrar aplicaciones.
  No debe cerrar todavía con la matriz final de aplicación.

MOV_07:
  Puede sintetizar, extraer invariantes y establecer límites.
```

---

# 3. Matriz global de unidades guionizables

## 3.1. Vista compacta

| ID       | Unidad guionizable                      | Entrada cognitiva                    | Operación principal                                                                     | Salida cognitiva                                          | Pregunta que entrega                             |
| -------- | --------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------ |
| UG_01    | Instalación de anomalía por doble caso  | Curiosidad inicial                   | Mostrar dos receptores distintos completando una misma frase                            | La frase no necesitaba conocerlos individualmente         | ¿Cómo puede una frase general sentirse personal? |
| UG_02    | Extracción del principio psicológico    | Anomalía narrativa instalada         | Separar alta aplicabilidad, ambigüedad y completado autobiográfico                      | La resonancia no equivale a precisión                     | ¿Cómo se organiza esto como interacción?         |
| UG_03    | Modelado del juego Barnum               | Principio psicológico comprendido    | Modelar emisor, mensaje, receptor y salidas                                             | El efecto funciona como juego estratégico                 | ¿Qué hace que el mensaje sea tomado en serio?    |
| UG_03_04 | Reenfoque hacia el artefacto intermedio | Juego estratégico comprendido        | Aislar el mensaje Barnum como pieza crítica                                             | Hay que analizar sus condiciones de validación            | ¿Qué respaldo necesita la frase?                 |
| UG_04    | Marco que convierte frase en lectura    | Mensaje como artefacto intermedio    | Contrastar frase suelta vs frase respaldada                                             | El marco cambia el estatus de la frase                    | ¿Qué forma debe tener la frase?                  |
| UG_05    | Anatomía de la frase Barnum             | Necesidad de marco comprendida       | Diseccionar forma verbal: aplicabilidad, ambigüedad, especificidad aparente, resonancia | El mensaje necesita una forma abierta pero orientada      | ¿El patrón funciona fuera del tarot?             |
| UG_06    | Demostración por variación contextual   | Juego, marco y forma ya comprendidos | Instanciar el patrón en dominios distintos                                              | El espectador reconoce invariantes bajo variación         | ¿Qué se conserva al aplicarlo?                   |
| UG_07    | Cierre por invariantes y adaptación     | Aplicaciones ya vistas               | Extraer matriz operativa y límite ético                                                 | Aplicar el modelo es adaptar estructura, no copiar frases | Cierre final                                     |

---

# 4. Unidades guionizables detalladas

---

## UG_01 — MOV_01 — Instalación de anomalía por doble caso

```yaml
mov_id: MOV_01
nombre_funcional: apertura_por_doble_caso_y_generalizacion_del_mecanismo
posicion_en_arquitectura: apertura_argumentativa
responsabilidad_macro: instalar_el_fenomeno_en_forma_narrativa
```

### Identidad argumentativa

MOV_01 debe abrir el video con dos casos paralelos: Persona X y Persona Y. Sus vidas no son iguales, pero son análogas porque ambas tienen malestar, incertidumbre y necesidad de explicación. La figura emisora usa frases iguales o prácticamente equivalentes en ambas, y en ambas la frase funciona porque cada receptor la completa con material autobiográfico distinto.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  Hace que el espectador vea el efecto antes de recibir su explicación.
  La escena debe producir una sospecha: si la misma frase funcionó en dos vidas distintas,
  quizá la precisión no estaba completamente en la frase.

transformacion_cognitiva: >
  Pasar de "la tarotista acertó" a "algo ocurre cuando una frase amplia encuentra una vida dispuesta a completarla".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  Sólo sabe que entró a un video sobre el efecto Barnum. Todavía no tiene modelo.

pregunta_abierta: >
  ¿Por qué algunas frases generales se sienten como si hablaran exactamente de nosotros?

tension_recibida: >
  Curiosidad inicial y posible expectativa de ver un truco psicológico.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  Si una misma frase funciona en vidas distintas, entonces la precisión sentida no puede estar únicamente en la frase; parte de esa precisión nace del completado autobiográfico del receptor.

claims_secundarios:
  - Las personas no son vulnerables porque sean absurdamente crédulas, sino porque atraviesan condiciones humanas reconocibles.
  - La necesidad de explicación aumenta la apertura hacia sistemas interpretativos.
  - La misma frase puede activar asociaciones distintas en receptores distintos.
  - El reconocimiento subjetivo puede confundirse con diagnóstico.

grounds_obligatorios:
  - Persona X tiene presión externa acumulada: dinero, pareja, trabajo, familia, estancamiento.
  - Persona Y tiene desorientación interna: futuro, identidad, cansancio, duda vital.
  - Ambas acuden a una tarotista o figura interpretativa equivalente.
  - Ambas reciben una frase general igual o equivalente.
  - Ambas llenan los huecos con su propia historia.

warrant_visible: >
  Si la misma descripción puede sentirse precisa en biografías distintas, entonces el efecto no depende sólo de información contenida en la descripción, sino de la interpretación autobiográfica del receptor.

backing_necesario: >
  Las personas comparten tensiones comunes: incertidumbre, deseo de explicación, búsqueda de dirección, necesidad de reconocimiento y miedo a haber tomado decisiones equivocadas.

qualifiers:
  - No se debe decir que todas las personas caerán siempre.
  - No se debe ridiculizar a los receptores.
  - No se debe explicar todavía todo el mecanismo.

rebuttals_o_riesgos:
  - Riesgo: que parezca una crítica simple al tarot.
  - Riesgo: que el espectador concluya demasiado pronto que todo es engaño.
  - Riesgo: que X y Y parezcan demasiado parecidos y se pierda la generalización.
```

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - dos personas distintas
  - situaciones analogas_pero_no_identicas
  - misma_frase_o_frase_equivalente
  - completado_distinto
  - reconocimiento_semejante
  - pregunta_de_anomalia

ejemplos_que_deben_aparecer:
  - Persona X: presion externa acumulada
  - Persona Y: desorientacion interna
  - tarotista_o_figura_interpretativa

distinciones_claras:
  - analogia_no_es_identidad
  - reconocimiento_no_es_prueba_de_precision
  - vulnerabilidad_no_es_estupidez

terminos_con_cuidado:
  - "diagnostico" debe aparecer como diagnostico percibido, no diagnostico real.
  - "funciona" debe significar produce reconocimiento subjetivo, no demuestra verdad.
```

### Recursos de guion

```yaml
forma_de_ejecucion: doble_escena_paralela
imagen_mental: pantalla_dividida_con_dos_vidas_distintas_y_una_misma_frase_en_el_centro
escena: dos_consultas_separadas_con_la_misma_tarotista_o_mismo_tipo_de_lectura
comparacion: dos_llaves_distintas_abriendo_la_misma_cerradura_pero_por_razones_distintas
frase_bisagra_tentativa: "Lo extraño no es que la frase sonara profunda. Lo extraño es que funcionó dos veces en vidas distintas."
posible_visual: split_screen_X_Y + frase_comun + recuerdos_personales_apareciendo_en_cada_lado
tono_funcional: narrativo_intrigante_sin_burla
```

### Beats internos

| Beat   | Tipo                | Deriva de                    | Función                                    | Operación cognitiva                        | Contenido mínimo                                    | Riesgo si falla                                                  |
| ------ | ------------------- | ---------------------------- | ------------------------------------------ | ------------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------------- |
| B01_01 | beat_de_instalacion | estado_cognitivo_entrada     | Presentar a Persona X                      | Activar empatía por presión externa        | Problemas acumulados y necesidad de explicación     | La escena parece genérica sin tensión humana                     |
| B01_02 | beat_de_instalacion | ground_X                     | Presentar a Persona Y                      | Mostrar variación del caso                 | Duda vital, cansancio, desorientación               | Y parece copia de X                                              |
| B01_03 | beat_de_contraste   | warrant_analogico            | Hacer visible que X e Y no son iguales     | Preparar generalización                    | Contraste presión externa vs desorientación interna | El espectador no percibe diferencia relevante                    |
| B01_04 | beat_de_instalacion | ground_figura_interpretativa | Introducir tarotista o figura de autoridad | Crear marco narrativo inicial              | Ambas buscan lectura/respuesta                      | Se adelanta demasiado MOV_04 si se explica el marco técnicamente |
| B01_05 | beat_de_anomalia    | claim_dominante              | Mostrar misma frase funcionando en ambas   | Provocar sospecha                          | Misma frase o frase equivalente en los dos casos    | Parece simple coincidencia o truco obvio                         |
| B01_06 | beat_de_contraste   | ground_completado            | Mostrar completado distinto                | Ver que cada persona agrega su propia vida | Recuerdos/problemas distintos llenan huecos         | El mecanismo se vuelve invisible                                 |
| B01_07 | beat_de_anomalia    | warrant_visible              | Formular la pregunta del video             | Abrir necesidad de explicación             | La precisión no estaba totalmente en la frase       | Se cierra demasiado pronto                                       |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no explicar todavia todas las capas del mecanismo
  - no hablar todavia de publicidad, politica, ecommerce o ventas
  - no desarrollar todavia marco_de_validacion como categoria tecnica

no_convertir_en:
  - burla_a_personas_credulas
  - critica_al_tarot_como_tema_principal
  - resumen_total_del_video

no_romper:
  - la diferencia entre X e Y
  - la pregunta abierta que entrega a MOV_02
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  La misma frase puede sentirse personal en vidas distintas porque cada persona la completa desde su propia historia.

pregunta_entregada_al_siguiente_MOV: >
  ¿Cuál es el principio psicológico que hace posible esa sensación de precisión?

criterio_listo_para_redaccion:
  funciona_si: >
    El espectador ve la anomalía antes de recibir la teoría.
  falla_si: >
    El movimiento explica demasiado pronto o reduce todo a credulidad.
```

---

## UG_02 — MOV_02 — Extracción del principio psicológico

```yaml
mov_id: MOV_02
nombre_funcional: formalizacion_general_del_mecanismo_barnum
posicion_en_arquitectura: principio
responsabilidad_macro: convertir_el_caso_en_modelo_psicologico
```

### Identidad argumentativa

MOV_02 toma el doble caso anterior y lo convierte en modelo. La operación central es extraer el principio: una frase amplia y ambigua activa asociaciones personales; el receptor completa los huecos con su biografía; luego confunde la resonancia subjetiva producida por sus propias asociaciones con precisión diagnóstica del mensaje.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  Entrega el primer modelo explícito del efecto Barnum.

transformacion_cognitiva: >
  Pasar de "la misma frase funcionó" a "la frase funcionó porque tenía una forma amplia y porque el receptor hizo parte del trabajo interpretativo".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  Vio dos personas distintas interpretar una frase general como si fuera personal.

pregunta_abierta: >
  ¿Qué hizo que esa frase pudiera sentirse precisa?

tension_recibida: >
  La anomalía narrativa del MOV_01 exige explicación.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  El efecto Barnum no funciona porque la descripción sea realmente precisa, sino porque una descripción amplia y ambigua activa asociaciones personales que el receptor usa para completarla.

claims_secundarios:
  - Alta aplicabilidad: la frase debe poder conectar con muchas personas.
  - Ambigüedad como espacio de completado: lo no dicho permite que el receptor introduzca su biografía.
  - Autoridad aparente: la sensación de precisión aumenta cuando la frase parece derivada de un método o lectura.
  - Completado autobiográfico: el receptor rellena la frase con recuerdos, deseos, inseguridades y tensiones.
  - Confusión central: resonancia subjetiva no es lo mismo que precisión diagnóstica.

grounds_obligatorios:
  - La frase del MOV_01 no contenía información verificable suficiente.
  - Contenía conceptos amplios: bloqueo, cambio, dolor, potencial, duda, dirección.
  - X e Y activaron asociaciones distintas ante una misma estructura verbal.
  - La autoridad o escena de lectura orientó la recepción.

warrant_visible: >
  Si una descripción no contiene información individual suficiente pero aun así se siente personal, entonces la precisión sentida debe explicarse por la interpretación del receptor y no sólo por el contenido de la frase.

backing_necesario: >
  Las descripciones Barnum suelen apoyarse en generalidad, ambigüedad, relevancia aparente y tensión humana común.

qualifiers:
  - No toda frase vaga produce efecto.
  - La ambigüedad debe estar orientada, no ser puro vacío.
  - La resonancia subjetiva puede ser real como experiencia, pero no prueba precisión objetiva.

rebuttals_o_riesgos:
  - Riesgo: explicar el efecto como si fuera sólo una frase vaga.
  - Riesgo: ignorar la participación activa del receptor.
  - Riesgo: no distinguir resonancia emocional de precisión diagnóstica.
```

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - alta_aplicabilidad
  - ambiguedad_interpretativa
  - apariencia_de_especificidad
  - activacion_asociativa
  - completado_autobiografico
  - resonancia_subjetiva_vs_precision_diagnostica

ejemplos_que_deben_aparecer:
  - relectura_de_la_frase_usada_en_MOV_01
  - posibles_completados_distintos

distinciones_claras:
  - general_no_es_inutil
  - ambiguo_no_es_accidental
  - resonar_no_equivale_a_acertar

terminos_con_cuidado:
  - "precisión" debe usarse como precisión sentida cuando se habla de percepción.
  - "diagnóstico" debe mantenerse como diagnóstico percibido salvo que haya evidencia real.
```

### Recursos de guion

```yaml
forma_de_ejecucion: diseccion_explicativa_del_caso
imagen_mental: frase_como_molde_vacio_que_cada_persona_llena_con_recuerdos_distintos
escena: volver_a_la_frase_del_MOV_01_y_subrayar_sus_huecos
comparacion: una_constelacion_donde_el_receptor_une_los_puntos
frase_bisagra_tentativa: "La frase no contenía sus vidas. Les daba un espacio para meterlas dentro."
posible_visual: frase_en_pantalla_con_espacios_abiertos_que_se_llenan_con_recuerdos_de_X_y_Y
tono_funcional: analitico_claro_con_asombro_controlado
```

### Beats internos

| Beat   | Tipo                  | Deriva de               | Función                                 | Operación cognitiva                             | Contenido mínimo                                      | Riesgo si falla                                   |
| ------ | --------------------- | ----------------------- | --------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------- |
| B02_01 | beat_de_recuperacion  | MOV_01                  | Retomar doble caso                      | Conectar narración con explicación              | Recordar misma frase + dos completados                | Parece cambio brusco de tema                      |
| B02_02 | beat_de_diseccion     | claim_dominante         | Separar la frase en componentes         | Ver que no hay precisión verificable suficiente | Mostrar conceptos amplios                             | La frase parece específica sin análisis           |
| B02_03 | beat_de_abstraccion   | CL_alta_aplicabilidad   | Definir alta aplicabilidad              | Pasar de caso a categoría                       | Muchas personas podrían reconocerse                   | Se confunde con vaguedad total                    |
| B02_04 | beat_de_diseccion     | CL_ambiguedad           | Mostrar la ambigüedad como hueco activo | Entender que lo no dicho cumple una función     | Causas abiertas, temporalidad amplia, tensión general | La ambigüedad parece defecto accidental           |
| B02_05 | beat_de_modelado      | CL_completado           | Mostrar al receptor completando         | Ubicar la operación cognitiva central           | Recuerdos, deseos, inseguridades                      | El efecto parece estar sólo en el emisor          |
| B02_06 | beat_de_formalizacion | CL_resonancia_precision | Fijar la distinción central             | Separar sentir de demostrar                     | Resonancia subjetiva vs precisión diagnóstica         | El espectador cree que toda resonancia es mentira |
| B02_07 | beat_de_transicion    | salida_MOV_02           | Preparar MOV_03                         | Abrir la pregunta interaccional                 | Si hay emisor, mensaje y receptor, hay juego          | El paso al juego parece arbitrario                |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no convertir_la_explicacion_en_manual_de_frases
  - no introducir_ejemplos_de_aplicacion
  - no cerrar_con_invariantes_finales

no_repetir:
  - no volver_a_narrar_completo_MOV_01

no_convertir_en:
  - definicion_diccionario_del_Barnum_effect
  - leccion_psicologica_desconectada_del_caso

no_romper:
  - la distincion resonancia_vs_precision
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  Una frase Barnum se siente personal porque activa asociaciones amplias que yo mismo puedo completar.

pregunta_entregada_al_siguiente_MOV: >
  Si el receptor completa la frase, ¿cómo se organiza la interacción entre quien emite el mensaje y quien lo interpreta?

criterio_listo_para_redaccion:
  funciona_si: >
    El espectador puede nombrar las capas del mecanismo sin perder el caso de vista.
  falla_si: >
    La explicación se vuelve abstracta o no hace visible el completado autobiográfico.
```

---

## UG_03 — MOV_03 — Modelado del juego estratégico Barnum

```yaml
mov_id: MOV_03
nombre_funcional: formalizacion_del_juego_estrategico_barnum
posicion_en_arquitectura: puente_entre_principio_y_aplicacion
responsabilidad_macro: convertir_el_principio_psicologico_en_interaccion_estrategica
```

### Identidad argumentativa

MOV_03 no introduce todavía aplicaciones externas. Su función es convertir el principio psicológico en un juego compuesto por roles: emisor, receptor, mensaje Barnum, operaciones posibles y salidas. El emisor no controla directamente la mente del receptor; usa un artefacto intermedio. El receptor no recibe pasivamente; interpreta y valida o descarta.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  El espectador deja de mirar sólo la frase y empieza a ver una estructura de interacción.

transformacion_cognitiva: >
  Pasar de "una frase me afecta" a "hay un juego: alguien formula un mensaje, alguien lo interpreta y el resultado puede ser reconocimiento o descarte".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  Entiende alta aplicabilidad, ambigüedad, completado autobiográfico y confusión entre resonancia y precisión.

pregunta_abierta: >
  ¿Cómo se organiza ese mecanismo cuando hay alguien que emite el mensaje y alguien que lo interpreta?

tension_recibida: >
  El principio psicológico necesita convertirse en estructura interaccional.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  El efecto Barnum puede entenderse como un juego estratégico en el que un emisor introduce un mensaje de alta aplicabilidad y apariencia personal, mientras el receptor lo interpreta desde sus asociaciones; si convierte esa relevancia subjetiva en sensación de verdad, aparece reconocimiento, y si detecta la generalidad, el efecto se desactiva.

claims_secundarios:
  - El emisor tiene incentivo: atención, confianza, dinero, influencia, autoridad, obediencia o apertura a una acción posterior.
  - El receptor interpreta desde asociaciones personales, sin necesariamente ver la intención del emisor.
  - El mensaje Barnum funciona como artefacto intermedio entre intención del emisor y biografía del receptor.
  - La validación subjetiva es la salida exitosa del juego.
  - El descarte es una salida posible y evita que el modelo sea determinista.

grounds_obligatorios:
  - MOV_01 ya mostró emisora, receptores, frase e interpretación.
  - MOV_02 ya mostró el mecanismo psicológico que hace posible la interpretación.
  - Cuando el receptor dice "esto habla de mí", el juego produce reconocimiento.
  - Cuando el receptor detecta vaguedad, el juego falla.

warrant_visible: >
  Si el efecto requiere un mensaje formulado por alguien y una interpretación realizada por alguien, entonces puede modelarse como interacción entre roles.

backing_necesario: >
  El mensaje no actúa solo: media entre intención, forma verbal, contexto y campo autobiográfico del receptor.

qualifiers:
  - El juego no garantiza éxito.
  - El receptor puede validar o descartar.
  - El emisor no siempre tiene intención manipulativa explícita, pero sí ocupa el polo activo de formulación o transmisión.

rebuttals_o_riesgos:
  - Riesgo: presentar al receptor como pasivo.
  - Riesgo: presentar al emisor como omnipotente.
  - Riesgo: volver el modelo determinista.
```

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - emisor
  - receptor
  - mensaje_barnum
  - incentivo_del_emisor
  - interpretacion_del_receptor
  - salida_de_reconocimiento
  - salida_de_descarte

ejemplos_que_deben_aparecer:
  - regreso_breve_a_tarotista_X_Y_como_juego_no_nominalizado

distinciones_claras:
  - mensaje_no_controla_directamente_al_receptor
  - receptor_no_es_pasivo
  - reconocimiento_no_es_unica_salida

terminos_con_cuidado:
  - "juego" debe entenderse como estructura de interacción, no entretenimiento.
  - "estratégico" no debe implicar necesariamente conspiración total.
```

### Recursos de guion

```yaml
forma_de_ejecucion: diagrama_interaccional
imagen_mental: emisor_en_un_extremo_receptor_en_otro_mensaje_barnum_como_puente
escena: tablero_con_piezas_emisor_mensaje_receptor_salida
comparacion: una_pesca_con_anzuelo_general_que_solo_funciona_si_el_receptor_muerde_desde_su_propia_hambre
frase_bisagra_tentativa: "Hasta ahora parecía una frase. Pero en realidad es una interacción."
posible_visual: flujo_emisor_mensaje_receptor_con_dos_salidas_reconocimiento_descarte
tono_funcional: modelador_estrategico
```

### Beats internos

| Beat   | Tipo                           | Deriva de     | Función                                     | Operación cognitiva                       | Contenido mínimo                                  | Riesgo si falla                |
| ------ | ------------------------------ | ------------- | ------------------------------------------- | ----------------------------------------- | ------------------------------------------------- | ------------------------------ |
| B03_01 | beat_de_recuperacion           | MOV_02        | Recuperar mecanismo psicológico             | Mantener continuidad                      | Alta aplicabilidad + completado                   | MOV_03 parece desconectado     |
| B03_02 | beat_de_modelado               | CL_12         | Presentar emisor                            | Ubicar polo activo                        | Incentivo: atención/confianza/dinero/influencia   | Emisor parece irrelevante      |
| B03_03 | beat_de_modelado               | CL_13         | Presentar receptor                          | Ubicar polo interpretativo                | Asociaciones personales, validación o descarte    | Receptor parece pasivo         |
| B03_04 | beat_de_modelado               | CL_14         | Presentar mensaje como artefacto intermedio | Entender mediación                        | Mensaje conecta intención con biografía           | La frase parece autónoma       |
| B03_05 | beat_de_bifurcacion            | CL_15_CL_16   | Mostrar salidas del juego                   | Evitar determinismo                       | Reconocimiento vs descarte                        | Se exagera el poder del efecto |
| B03_06 | beat_de_formalizacion          | WR_08         | Fijar fórmula del juego                     | Consolidar modelo interaccional           | emisor → mensaje → receptor → validación/descarte | El modelo queda difuso         |
| B03_07 | beat_de_reenfoque_preparatorio | salida_MOV_03 | Preparar el puente                          | Hacer notar que falta explicar el mensaje | Pregunta por condiciones del artefacto            | MOV_04 parece salto temático   |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no explicar_todavia_marco_de_validacion_en_detalle
  - no diseccionar_todavia_forma_interna_de_la_frase
  - no desplegar_ejemplos_de_aplicacion

no_convertir_en:
  - teoria_de_juegos_formal_excesiva
  - condena_moral_total_del_emisor
  - manual_para_manipular

no_romper:
  - posibilidad_de_descarte
  - agencia_interpretativa_del_receptor
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  El efecto Barnum puede verse como un juego donde un mensaje media entre el emisor y la interpretación autobiográfica del receptor.

pregunta_entregada_al_siguiente_MOV: >
  ¿Qué condiciones necesita ese mensaje para no ser descartado como frase vaga?

criterio_listo_para_redaccion:
  funciona_si: >
    El espectador puede dibujar el juego con emisor, mensaje, receptor y dos salidas.
  falla_si: >
    El movimiento parece una explicación repetida de MOV_02 o adelanta MOV_04 y MOV_05.
```

---

## UG_03_04 — PUENTE_MOV_03_MOV_04 — Reenfoque del juego hacia el artefacto intermedio

```yaml
mov_id: PUENTE_MOV_03_MOV_04
nombre_funcional: reenfoque_del_juego_hacia_el_artefacto_intermedio
posicion_en_arquitectura: transicion_macro
responsabilidad_macro: justificar_el_paso_del_juego_completo_a_las_condiciones_de_funcionamiento_del_mensaje
```

### Identidad argumentativa

Este puente no debe convertirse en una explicación larga. Su función es cambiar el foco: una vez entendido el juego, el problema inmediato no es todavía aplicar el modelo a publicidad, política o venta, sino aislar el mensaje Barnum como pieza crítica. De su validación contextual y forma interna dependerá que el receptor lo procese como significativo o lo descarte.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  Evita que el paso de MOV_03 a MOV_04 parezca arbitrario.

transformacion_cognitiva: >
  Pasar de "entiendo el juego completo" a "necesito mirar la pieza que conecta al emisor con el receptor".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  Ya entiende emisor, receptor, mensaje y salidas.

pregunta_abierta: >
  ¿Qué hace que el mensaje sea procesado como significativo y no como frase genérica?

tension_recibida: >
  El juego depende de una pieza intermedia, pero esa pieza aún no ha sido refinada.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  Una vez entendido el juego Barnum, el siguiente problema consiste en aislar el mensaje_barnum como artefacto intermedio, porque de su condición de validación y de su forma interna depende que el receptor lo procese como significativo o lo descarte como descripción vaga.

grounds_obligatorios:
  - MOV_03 separó emisor, receptor, mensaje, validación y descarte.
  - El mensaje es la pieza que conecta intención del emisor con interpretación del receptor.
  - Las salidas dependen de cómo el receptor procesa ese mensaje.

warrant_visible: >
  Si un sistema estratégico depende de un artefacto intermedio para producir su salida, entonces el siguiente movimiento debe explicar bajo qué condiciones ese artefacto puede operar.

qualifiers:
  - El puente no debe resolver MOV_04 ni MOV_05.
  - Debe abrir pregunta, no responderla completamente.

rebuttals_o_riesgos:
  - Riesgo: repetir MOV_03.
  - Riesgo: adelantar ejemplos de aplicación.
  - Riesgo: convertir la transición en bloque explicativo largo.
```

### Recursos de guion

```yaml
forma_de_ejecucion: cambio_de_foco
imagen_mental: zoom_desde_el_tablero_completo_hacia_la_pieza_mensaje_barnum
escena: el_diagrama_del_juego_se_desvanece_salvo_el_mensaje_en_el_centro
comparacion: si_una_maquina_depende_de_una_pieza_hay_que_abrir_esa_pieza
frase_bisagra_tentativa: "Entonces el problema ya no es sólo quién habla y quién escucha. El problema es la pieza que queda en medio."
posible_visual: zoom_in_al_mensaje_barnum
tono_funcional: transicional_preciso
```

### Beats internos

| Beat    | Tipo                | Deriva de      | Función                            | Operación cognitiva          | Contenido mínimo                                   | Riesgo si falla                       |
| ------- | ------------------- | -------------- | ---------------------------------- | ---------------------------- | -------------------------------------------------- | ------------------------------------- |
| B034_01 | beat_de_reenfoque   | salida_MOV_03  | Cerrar el juego como mapa completo | Evitar dispersión            | Emisor, mensaje, receptor, salidas                 | Repite todo MOV_03                    |
| B034_02 | beat_de_reenfoque   | claim_puente   | Aislar mensaje_barnum              | Cambiar escala de análisis   | Mensaje como artefacto intermedio                  | No se entiende por qué vamos a MOV_04 |
| B034_03 | beat_de_preparacion | warrant_puente | Abrir pregunta por condiciones     | Preparar marco de validación | ¿Qué necesita el mensaje para ser tomado en serio? | Contesta demasiado pronto             |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no explicar_todos_los_marcos
  - no_desarrollar_forma_interna
  - no_usar_banco_de_ejemplos

no_convertir_en:
  - recapitulacion_larga
  - mini_MOV_independiente
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  Para entender por qué el juego funciona, hay que mirar el mensaje como artefacto intermedio.

pregunta_entregada_al_siguiente_MOV: >
  ¿Qué respaldo o marco hace que una frase general parezca resultado de una lectura?
```

---

## UG_04 — MOV_04 — Marco que convierte una frase en lectura o diagnóstico

```yaml
mov_id: MOV_04
nombre_funcional: condiciones_de_validacion_de_la_frase_barnum
posicion_en_arquitectura: refinamiento_del_mensaje_barnum
responsabilidad_macro: explicar_las_condiciones_contextuales_de_validacion
```

### Identidad argumentativa

MOV_04 explica que la frase Barnum no funciona sólo por su forma verbal. Necesita aparecer dentro de un marco que reduzca su arbitrariedad y haga parecer que proviene de una lectura, prueba, algoritmo, diagnóstico, entrevista, ritual, experto o sistema de evaluación.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  El espectador comprende que el contexto cambia el estatus de la frase.

transformacion_cognitiva: >
  Pasar de "la frase funciona por lo que dice" a "la frase también depende del marco que la hace parecer derivada de algo".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  El mensaje_barnum es la pieza intermedia entre emisor y receptor.

pregunta_abierta: >
  ¿Qué hace que el receptor no procese la frase como una ocurrencia cualquiera?

tension_recibida: >
  Una frase general podría ser descartada si parece dicha al azar.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  La frase Barnum no debe decirse en el vacío: para aumentar su eficacia, necesita un respaldo interpretativo que haga parecer que el emisor no está simplemente adivinando, sino leyendo, evaluando, midiendo, interpretando o derivando algo a partir de un procedimiento.

claims_secundarios:
  - El mismo contenido cambia de efecto según el marco donde aparece.
  - El respaldo reduce sensación de arbitrariedad.
  - El marco prolonga el juego estratégico: el emisor no sólo transmite una frase, la inserta en una escena de interpretación.

grounds_obligatorios:
  - Una misma frase cambia si aparece como lectura esotérica, quiz, examen psicológico, diagnóstico comercial, resultado de algoritmo o interpretación experta.
  - El respaldo aumenta disposición a tratar el mensaje como relevante.
  - El marco hace que el mensaje parezca derivado, no improvisado.

warrant_visible: >
  Si una frase general aparece dentro de un procedimiento, ritual, prueba, lectura o sistema de evaluación, el receptor tiene más razones para interpretarla como resultado de una lectura particular y no como frase genérica.

backing_necesario: >
  El efecto aumenta cuando el mensaje parece relevante para el sujeto y cuando el contexto sugiere que existe un procedimiento de evaluación o interpretación detrás del perfil entregado.

qualifiers:
  - El respaldo no tiene que ser científicamente válido para funcionar psicológicamente.
  - El respaldo no garantiza el efecto.
  - Una frase puede funcionar sin marco fuerte, pero será más vulnerable al descarte.

rebuttals_o_riesgos:
  - Objeción: si el respaldo es falso, todo es engaño.
  - Respuesta: este MOV explica función estructural, no justificación ética final.
  - Objeción: un test o autoridad no basta para cualquier frase.
  - Respuesta: MOV_05 explicará la forma interna de la frase.
```

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - frase_en_el_vacio
  - frase_en_marco_de_validacion
  - cambio_de_estatus
  - respaldo_interpretativo
  - no_azar

ejemplos_que_deben_aparecer:
  - lectura_esoterica
  - quiz_digital
  - algoritmo
  - diagnostico_comercial
  - experto_o_test

distinciones_claras:
  - respaldo_psicologico_no_equivale_a_validez_cientifica
  - marco_aumenta_probabilidad_no_garantiza_efecto
  - MOV_04_explica_contexto_MOV_05_explica_forma

terminos_con_cuidado:
  - "validación" debe usarse como validación subjetiva o contextual, no prueba objetiva.
  - "método" puede ser real, simbólico, ritual o comercial.
```

### Recursos de guion

```yaml
forma_de_ejecucion: contraste_de_contextos
imagen_mental: misma_frase_escrita_en_una_servilleta_vs_misma_frase_impresa_como_resultado_de_un_test
escena: una_frase_suelta_que_suena_vacia_y_luego_la_misma_frase_dentro_de_un_resultado_de_quiz_o_lectura
comparacion: el_mismo_objeto_en_un_museo_y_en_el_suelo_no_se_interpreta_igual
frase_bisagra_tentativa: "La frase no cambia. Lo que cambia es el marco que le dice al receptor cómo debe leerla."
posible_visual: etiqueta_de_contexto_sobre_la_misma_frase: azar / tarot / test / algoritmo / experto
tono_funcional: explicativo_contextual
```

### Beats internos

| Beat   | Tipo                           | Deriva de              | Función                           | Operación cognitiva                              | Contenido mínimo                                   | Riesgo si falla                                        |
| ------ | ------------------------------ | ---------------------- | --------------------------------- | ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------ |
| B04_01 | beat_de_contraste_de_contextos | claim_dominante        | Mostrar frase sin marco           | Activar percepción de arbitrariedad              | Frase dicha al azar                                | El espectador no siente el problema                    |
| B04_02 | beat_de_validacion_contextual  | grounds                | Mostrar la misma frase con marco  | Ver cambio de estatus                            | Tarot/test/algoritmo/experto                       | Parece que el marco es magia explicativa suficiente    |
| B04_03 | beat_de_cambio_de_estatus      | warrant                | Explicar por qué el marco importa | Conectar contexto con disposición interpretativa | La frase parece derivada de algo                   | Warrant invisible                                      |
| B04_04 | beat_de_diseccion_contextual   | mecanismo_respaldo     | Clasificar marcos posibles        | Ampliar sin aplicar todavía                      | Ritual, método, algoritmo, entrevista              | Se convierte en MOV_06 si aparecen aplicaciones largas |
| B04_05 | beat_de_limite                 | qualifiers_rebuttals   | Matizar el alcance                | Evitar absolutismo                               | Marco aumenta probabilidad, no garantiza           | Se sobrevende el modelo                                |
| B04_06 | beat_de_transicion             | relación_MOV_04_MOV_05 | Preparar forma interna            | Abrir necesidad de analizar la frase             | Marco no basta si la frase no tiene forma adecuada | MOV_05 parece repetición                               |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no_diseccionar_todos_los_componentes_de_la_frase
  - no_abrir_banco_de_ejemplos_de_dominios
  - no_hacer_evaluacion_etica_final

no_convertir_en:
  - defensa_de_tests_o_algoritmos
  - critica_esoterica
  - explicacion_de_la_frase_como_si_el_marco_fuera_suficiente

no_romper:
  - diferencia_MOV_04_contexto_vs_MOV_05_forma
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  Una frase general tiene más probabilidad de sentirse personal cuando parece venir de un procedimiento, lectura o sistema de interpretación.

pregunta_entregada_al_siguiente_MOV: >
  Si el marco hace que la frase sea tomada en serio, ¿qué debe tener la frase para poder ser completada como personal?

criterio_listo_para_redaccion:
  funciona_si: >
    El espectador entiende que el marco cambia el estatus interpretativo del mensaje.
  falla_si: >
    El movimiento se vuelve una lista de contextos sin explicar el cambio de estatus.
```

---

## UG_05 — MOV_05 — Anatomía de la frase Barnum

```yaml
mov_id: MOV_05
nombre_funcional: forma_interna_de_la_frase_barnum
posicion_en_arquitectura: analisis_de_forma_del_mensaje
responsabilidad_macro: definir_la_forma_verbal_que_permite_completado_autobiografico
```

### Identidad argumentativa

MOV_05 explica qué forma debe tener la frase para que el marco no sostenga una afirmación vacía. La frase Barnum debe tocar tensiones comunes, mantener ambigüedad controlada, parecer más específica de lo que es, activar resonancia emocional y aprovechar el contexto para orientar el completado autobiográfico.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  El espectador entiende la estructura verbal interna de una frase Barnum.

transformacion_cognitiva: >
  Pasar de "el contexto valida la frase" a "la frase necesita una forma diseñada para abrir espacio autobiográfico".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  La frase necesita un marco de validación para no parecer arbitraria.

pregunta_abierta: >
  ¿Qué debe contener la frase para que, una vez tomada en serio, pueda sentirse personal?

tension_recibida: >
  El marco puede sostener la atención, pero no puede salvar una frase sin forma psicológica adecuada.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  La frase Barnum funciona cuando adopta la forma de un enunciado de alta aplicabilidad: toca tensiones comunes, describe situaciones ampliamente compartidas, mantiene ambigüedad suficiente para permitir completado autobiográfico y aprovecha el contexto para parecer más específica de lo que realmente es.

claims_secundarios:
  - Alta aplicabilidad: debe poder ser reconocida por muchas personas.
  - Ambigüedad controlada: debe permitir que el receptor complete lo no dicho.
  - Apariencia de especificidad: debe parecer más individual de lo que es.
  - Resonancia emocional: debe activar zonas subjetivamente importantes.
  - Aprovechamiento del contexto: debe orientar la interpretación sin volverse demasiado verificable.

grounds_obligatorios:
  - Las frases Barnum usan inseguridad, deseo de reconocimiento, potencial no realizado, contradicción interna, cansancio, duda o búsqueda de sentido.
  - Evitan detalles demasiado verificables.
  - El contexto orienta qué asociaciones debe activar el receptor.

warrant_visible: >
  Si una frase activa una tensión común y deja abierto el modo exacto en que esa tensión debe completarse, muchos receptores pueden encontrar en ella una conexión autobiográfica suficiente para sentirla personal.

backing_necesario: >
  Las descripciones Barnum suelen apoyarse en generalidad, ambigüedad, relevancia aparente, formulaciones favorables o equilibradas y rasgos comunes.

qualifiers:
  - Alta aplicabilidad no significa máxima vaguedad.
  - La frase no debe ser tan específica que falle fácilmente ni tan general que pierda fuerza.
  - La forma Barnum gana fuerza cuando está sostenida por el marco de MOV_04.

rebuttals_o_riesgos:
  - Objeción: si aplica a muchas personas, debería ser obvio que no describe a nadie.
  - Respuesta: se siente personal cuando el receptor la completa con detalles propios.
  - Objeción: una frase común no debería producir diagnóstico.
  - Respuesta: el diagnóstico percibido aparece cuando frase, marco y asociaciones se combinan.
```

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - tension_humana_comun
  - ambiguedad_controlada
  - apariencia_de_especificidad
  - resonancia_emocional
  - aprovechamiento_del_contexto
  - completado_autobiografico

ejemplos_que_deben_aparecer:
  - frase_demostrativa_no_final
  - version_demasiado_vaga
  - version_demasiado_especifica
  - version_barnum_equilibrada

distinciones_claras:
  - alta_aplicabilidad_no_es_vacio_total
  - ambiguedad_controlada_no_es_confusion_absoluta
  - especificidad_aparente_no_es_precision_real

terminos_con_cuidado:
  - "construir" debe significar analizar forma, no dar receta manipulativa final.
  - "diagnostico" debe mantenerse como percepción o efecto, no prueba.
```

### Recursos de guion

```yaml
forma_de_ejecucion: diseccion_de_artefacto
imagen_mental: frase_barnum_abierta_como_un_molde_con_zonas_de_llenado
escena: laboratorio_de_frases_donde_se_prueba_una_frase_demasiado_vacia_otra_demasiado_especifica_y_otra_equilibrada
comparacion: una_red_demasiado_cerrada_no_atrapa_muchas_vidas_y_una_demasiado_abierta_no_sostiene_nada
frase_bisagra_tentativa: "La frase debe ser general, pero no hueca; ambigua, pero no inútil; personal, pero sin tener datos personales."
posible_visual: barras_de_control: aplicabilidad / ambiguedad / especificidad_aparente / emocion / contexto
tono_funcional: tecnico_pedagogico
```

### Beats internos

| Beat   | Tipo                              | Deriva de                 | Función                                         | Operación cognitiva                  | Contenido mínimo                                         | Riesgo si falla                        |
| ------ | --------------------------------- | ------------------------- | ----------------------------------------------- | ------------------------------------ | -------------------------------------------------------- | -------------------------------------- |
| B05_01 | beat_de_presentacion_del_objeto   | claim_dominante           | Presentar frase como artefacto                  | Cambiar de contexto a forma          | Frase Barnum como objeto de análisis                     | Parece repetición de MOV_04            |
| B05_02 | beat_de_diseccion                 | CL_alta_aplicabilidad     | Explicar alta aplicabilidad                     | Ver que debe tocar tensiones comunes | Inseguridad, potencial, duda, reconocimiento             | Se interpreta como pura vaguedad       |
| B05_03 | beat_de_diseccion                 | CL_ambiguedad             | Explicar ambigüedad controlada                  | Ver que el hueco cumple función      | Causas abiertas, temporalidad amplia                     | Parece frase mal escrita               |
| B05_04 | beat_de_diseccion                 | CL_especificidad_aparente | Explicar apariencia de especificidad            | Ver cómo parece individual sin serlo | Segunda persona, tono diagnóstico, conflicto interno     | Se confunde con precisión real         |
| B05_05 | beat_de_diseccion                 | CL_resonancia             | Explicar resonancia emocional                   | Ver qué zonas activan completado     | Deseo, miedo, frustración, potencial                     | Queda frío o abstracto                 |
| B05_06 | beat_de_prueba_de_componentes     | qualifiers                | Comparar demasiado vago vs demasiado específico | Entender equilibrio                  | Tres versiones de una frase                              | Se vuelve receta rígida                |
| B05_07 | beat_de_formalizacion             | warrant                   | Fijar fórmula del MOV_05                        | Consolidar forma del mensaje         | tensión + ambigüedad + especificidad aparente + contexto | El modelo no queda memorizable         |
| B05_08 | beat_de_preparacion_de_aplicacion | salida_MOV_05             | Abrir MOV_06                                    | Preguntar por portabilidad           | ¿Esto aparece fuera del tarot?                           | Adelanta ejemplos antes de prepararlos |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no_desplegar_ejemplos_por_dominio_como_MOV_06
  - no_cerrar_con_invariantes_finales
  - no_convertir_formula_en_guion_final

no_convertir_en:
  - manual_de_copywriting_manipulativo
  - lista_de_frases_para_copiar
  - clase_de_redaccion_desconectada_del_mecanismo

no_romper:
  - equilibrio_generalidad_vs_especificidad
  - dependencia_de_MOV_04
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  Una frase Barnum debe ser amplia, ambigua, emocionalmente relevante, aparentemente específica y contextualizable para que el receptor pueda completarla.

pregunta_entregada_al_siguiente_MOV: >
  ¿Esta estructura aparece sólo en tarot o puede trasladarse a otros dominios?

criterio_listo_para_redaccion:
  funciona_si: >
    El espectador puede reconocer los componentes de una frase Barnum sin reducirla a "frase vaga".
  falla_si: >
    La unidad se vuelve una lista de trucos verbales o pierde la conexión con marco y receptor.
```

---

## UG_06 — MOV_06 — Demostración por variación contextual

```yaml
mov_id: MOV_06
nombre_funcional: ejemplos_de_aplicacion_del_patron_barnum
posicion_en_arquitectura: aplicacion_modular_del_mecanismo
responsabilidad_macro: demostrar_portabilidad_del_patron_bajo_variacion_de_dominio
```

### Identidad argumentativa

MOV_06 no introduce un mecanismo nuevo. Su función es mostrar que el patrón ya construido puede instanciarse en distintos dominios conservando la misma arquitectura: jugadores, marco de validación, frase Barnum situada y salida de reconocimiento o descarte. Los ejemplos deben funcionar como nodos derivados de un nodo mayor, no como lista temática.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  El espectador aprende a reconocer el patrón Barnum en distintos contextos.

transformacion_cognitiva: >
  Pasar de "esto ocurre en tarot o tests" a "esto es una arquitectura transferible que cambia de superficie, pero conserva invariantes".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  Entiende el juego, el marco de validación y la forma interna de la frase.

pregunta_abierta: >
  ¿El mismo patrón aparece en otros dominios?

tension_recibida: >
  Si el modelo es real, debería poder conservar su estructura bajo variación contextual.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  El efecto Barnum puede trasladarse a distintos dominios porque no depende de un contenido particular, sino de una arquitectura repetible: un emisor presenta una frase de alta aplicabilidad dentro de un marco de validación, y el receptor la completa con material propio hasta sentirla personalmente significativa.

claims_secundarios:
  - En todos los ejemplos hay jugadores: emisor y receptor.
  - En todos hay marco de validación: lectura, test, algoritmo, entrevista, diagnóstico, manifiesto o recomendación.
  - En todos hay frase Barnum situada: tensión amplia + ambigüedad + apariencia de especificidad.
  - En todos existe salida de reconocimiento o descarte.
  - Cada ejemplo cambia dominio, pero conserva estructura.

grounds_obligatorios:
  - Recurrencia de jugadores.
  - Recurrencia del marco de validación.
  - Recurrencia de la forma Barnum.
  - Variación contextual controlada.

warrant_visible: >
  Si un mecanismo conserva sus invariantes al cambiar de dominio, entonces los ejemplos no funcionan sólo como ilustraciones, sino como demostraciones de portabilidad estructural.

backing_necesario: >
  MOV_03 definió el juego, MOV_04 explicó el marco y MOV_05 explicó la forma. MOV_06 puede mostrar aplicaciones sin reconstruir todo desde cero.

qualifiers:
  - No es obligatorio usar todos los ejemplos.
  - Los ejemplos no deben competir entre sí.
  - Para un video concentrado bastan cuatro o cinco ejemplos fuertes.
  - Las frases de ejemplo son frases de trabajo, no redacción final obligatoria.

rebuttals_o_riesgos:
  - Riesgo: convertir el MOV en lista de casos.
  - Riesgo: reconstruir el mecanismo completo en cada ejemplo y volver lento el video.
  - Riesgo: elegir ejemplos demasiado parecidos entre sí.
  - Riesgo: hacer que el video parezca una guía de explotación persuasiva.
```

### Nodo mayor que gobierna todos los ejemplos

```yaml
nodo_mayor: aplicacion_contextual_del_patron_barnum
invariantes:
  jugadores:
    emisor: entidad_que_formula_o_transmite_el_mensaje
    receptor: entidad_que_interpreta_el_mensaje
  marco_de_validacion:
    funcion: hacer_que_la_frase_no_parezca_dicha_en_el_vacio
  frase_barnum:
    funcion: formular_tension_de_alta_aplicabilidad_con_ambiguedad_suficiente
  salida_posible:
    reconocimiento: "esto habla de mí"
    descarte: "esto es demasiado vago"

dominio_de_variacion:
  - dominio_de_aplicacion
  - tipo_de_emisor
  - tipo_de_receptor
  - tipo_de_marco_de_validacion
  - tension_base_activada
  - forma_superficial_de_la_frase
  - accion_posterior_posible
```

### Banco modular de ejemplos

| Nodo  | Dominio                                 | Emisor              | Receptor                        | Marco de validación                   | Tensión activada                         | Función dentro del MOV                       |
| ----- | --------------------------------------- | ------------------- | ------------------------------- | ------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| EX_01 | Esoterismo / tarot                      | Tarotista           | Consultante                     | Lectura ritual                        | Incertidumbre vital                      | Anclar el patrón en el caso más reconocible. |
| EX_02 | Quiz digital de personalidad            | Plataforma / marca  | Usuario                         | Test o resultado personalizado        | Deseo de autocomprensión                 | Mostrar modernización del marco.             |
| EX_03 | Publicidad de productividad             | Marca / creador     | Profesional saturado            | Diagnóstico de bloqueo                | Potencial no realizado                   | Conectar con publicidad.                     |
| EX_04 | Venta consultiva                        | Vendedor / asesor   | Cliente                         | Entrevista o auditoría                | Problema difuso que necesita explicación | Mostrar conversión a acción comercial.       |
| EX_05 | Ecommerce / recomendación personalizada | Tienda / algoritmo  | Comprador                       | Recomendación basada en perfil        | Necesidad de ajuste individual           | Mostrar oferta como encaje.                  |
| EX_06 | Política                                | Candidato / campaña | Ciudadano                       | Discurso identitario / manifiesto     | Sentirse ignorado por el sistema         | Mostrar uso identitario colectivo.           |
| EX_07 | Carrera profesional / coaching          | Coach               | Persona estancada               | Diagnóstico de carrera                | Potencial bloqueado                      | Mostrar lectura aspiracional.                |
| EX_08 | Fitness / acondicionamiento físico      | Entrenador / app    | Persona que quiere cambiar      | Evaluación física o promesa de método | Falta de disciplina o sistema            | Mostrar promesa de transformación.           |
| EX_09 | Educación / curso online                | Creador / academia  | Estudiante                      | Diagnóstico de aprendizaje            | Sentirse incapaz o atrasado              | Mostrar aplicación pedagógica/comercial.     |
| EX_10 | Comunidad digital / membresía           | Comunidad / líder   | Usuario aislado                 | Narrativa de pertenencia              | Sentirse diferente o incomprendido       | Mostrar marco comunitario.                   |
| EX_11 | Finanzas personales                     | Asesor / app        | Persona con ansiedad financiera | Perfil financiero                     | Deseo de control y seguridad             | Mostrar lectura de comportamiento económico. |
| EX_12 | Relaciones / dating app                 | App / coach         | Usuario que busca pareja        | Perfil relacional                     | No sentirse comprendido                  | Mostrar personalización emocional.           |

### Ruta recomendada para el guion final

```yaml
ruta_recomendada_media:
  - EX_01_esoterismo_tarot
  - EX_02_quiz_digital
  - EX_03_publicidad_productividad
  - EX_04_venta_consultiva
  - EX_06_politica
  - EX_10_comunidad_digital

justificacion: >
  Esta ruta cubre ritual, plataforma digital, publicidad, venta, identidad política y pertenencia comunitaria. Permite mostrar portabilidad sin saturar el video.
```

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - los_ejemplos_derivan_de_un_mismo_nodo_mayor
  - cada_ejemplo_cambia_dominio_pero_conserva_invariantes
  - el_objetivo_no_es_acumular_casos_sino_reconocer_patron
  - se_puede_seleccionar_un_subconjunto_de_ejemplos

distinciones_claras:
  - ejemplo_no_es_mecanismo_nuevo
  - variacion_contextual_no_rompe_identidad
  - marco_y_frase_cambian_de_superficie_no_de_funcion

terminos_con_cuidado:
  - "aplicar" debe significar instanciar estructura, no copiar frase.
  - "publicidad" y "política" deben tratarse como dominios de análisis, no como instrucciones de manipulación.
```

### Recursos de guion

```yaml
forma_de_ejecucion: secuencia_modular_de_instancias
imagen_mental: misma_plantilla_transparente_colocada_sobre_distintos_contextos
escena: tablero_con_nodo_mayor_y_ramas_hacia_ejemplos
comparacion: mismo_esqueleto_con_distintos_trajes
frase_bisagra_tentativa: "Cuando cambia el escenario, cambia la superficie. Pero si los jugadores, el marco y la frase siguen ahí, el patrón sigue siendo el mismo."
posible_visual: matriz_de_ejemplos_con_columnas_jugadores_marco_frase_salida
tono_funcional: demostrativo_comparativo
```

### Beats internos

| Beat   | Tipo                              | Deriva de       | Función                             | Operación cognitiva                          | Contenido mínimo                                              | Riesgo si falla                                       |
| ------ | --------------------------------- | --------------- | ----------------------------------- | -------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| B06_01 | beat_de_recuperacion_del_patron   | backing         | Recordar juego + marco + forma      | Preparar transferencia                       | MOV_03, MOV_04, MOV_05 en fórmula breve                       | Repite demasiado movimientos previos                  |
| B06_02 | beat_de_transferencia             | claim_dominante | Presentar nodo mayor                | Ver ejemplos como derivados                  | Invariantes y dominios de variación                           | Ejemplos parecen lista suelta                         |
| B06_03 | beat_de_instancia_contextual      | EX_01           | Mostrar esoterismo/tarot            | Reconocer patrón base                        | Emisor, receptor, marco, frase, salida                        | Queda como único caso posible                         |
| B06_04 | beat_de_instancia_contextual      | EX_02           | Mostrar quiz digital                | Ver modernización del marco                  | Test, resultado, perfil, identificación                       | Parece tema distinto                                  |
| B06_05 | beat_de_instancia_contextual      | EX_03_EX_04     | Mostrar publicidad/venta            | Ver conversión de reconocimiento en acción   | Diagnóstico comercial + oferta                                | Se vuelve manual de venta si no hay distancia crítica |
| B06_06 | beat_de_instancia_contextual      | EX_06           | Mostrar política                    | Ver uso identitario colectivo                | Emisor político + ciudadano + frase de agravio/reconocimiento | Riesgo de partidismo o ejemplo demasiado específico   |
| B06_07 | beat_de_instancia_contextual      | EX_10           | Mostrar comunidad digital           | Ver marco ambiental/comunitario              | “este mensaje era para ti”, pertenencia, exclusividad         | Se adelanta demasiado MOV_07 si se cierra aquí        |
| B06_08 | beat_de_comparacion_de_instancias | warrant         | Comparar qué cambia y qué permanece | Convertir ejemplos en prueba de portabilidad | Tabla de invariantes                                          | Si falta, MOV_06 es catálogo disperso                 |
| B06_09 | beat_de_preparacion_de_cierre     | salida_MOV_06   | Preparar MOV_07                     | Abrir pregunta por invariantes finales       | ¿Qué estructura se conserva en todos?                         | Cierra antes de tiempo                                |

### Plantilla para cada ejemplo seleccionado

```yaml
ejemplo_MOV_06:
  id:
  dominio:
  jugadores:
    emisor:
    receptor:
  marco_de_validacion:
    tipo:
    funcion:
  frase_barnum_situada:
    tension_base:
    formulacion_de_trabajo:
    ambiguedad:
    apariencia_de_especificidad:
  salida:
    reconocimiento_posible:
    descarte_posible:
  accion_posterior_posible:
  invariante_que_demuestra:
```

### Prohibiciones específicas

```yaml
no_adelantar:
  - no_entregar_todavia_matriz_final_de_aplicacion
  - no_cerrar_con_regla_etica_final
  - no_reconstruir_todos_los_MOV_en_cada_ejemplo

no_convertir_en:
  - lista_de_ejemplos_sin_columna_de_invariantes
  - tutorial_de_persuasion
  - catalogo_de_frases_barnum

no_romper:
  - dependencia_de_MOV_03_MOV_04_MOV_05
  - comparacion_entre_instancias
  - modularidad_del_banco_de_ejemplos
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  El efecto Barnum puede aparecer en muchos dominios porque conserva la misma arquitectura aunque cambie el contexto.

pregunta_entregada_al_siguiente_MOV: >
  ¿Cuáles son las invariantes que debo conservar para detectar o aplicar el modelo sin romperlo?

criterio_listo_para_redaccion:
  funciona_si: >
    Los ejemplos demuestran portabilidad estructural y no se sienten como casos sueltos.
  falla_si: >
    El espectador recuerda ejemplos, pero no sabe qué patrón común los une.
```

---

## UG_07 — MOV_07 — Cierre por invariantes y adaptación contextual

```yaml
mov_id: MOV_07
nombre_funcional: cierre_aplicativo_por_invariantes_y_adaptacion_contextual
posicion_en_arquitectura: clausura_operativa_del_guion
responsabilidad_macro: convertir_la_comprension_acumulada_en_criterio_aplicable
```

### Identidad argumentativa

MOV_07 cierra el guion condensando el mecanismo y convirtiéndolo en arquitectura aplicable. No introduce una nueva teoría ni un ejemplo largo adicional. Extrae invariantes, muestra dominio de variación, aclara que aplicar el modelo no equivale a copiar frases y establece un límite ético-pragmático.

### Objetivo en el video

```yaml
que_logra_en_el_espectador: >
  Deja una herramienta mental para detectar o construir instancias del patrón con control estructural.

transformacion_cognitiva: >
  Pasar de "ya vi ejemplos" a "puedo reconocer la estructura que todos conservan y distinguir aplicación legítima de simulación engañosa".
```

### Entrada

```yaml
que_sabe_el_espectador_antes: >
  Conoce el caso, el principio, el juego, el marco, la forma de la frase y ejemplos de aplicación.

pregunta_abierta: >
  ¿Qué se conserva cuando el modelo cambia de contexto?

tension_recibida: >
  El espectador necesita una regla final para no quedarse con casos dispersos.
```

### Núcleo argumentativo

```yaml
claim_dominante: >
  Aplicar el modelo Barnum no consiste en repetir frases generales, sino en conservar la estructura del mecanismo —jugadores, marco de validación, frase de alta aplicabilidad, completado del receptor y salida de reconocimiento— adaptándola al contexto específico en el que la frase aparecerá.

claims_secundarios:
  - La frase general necesita contexto; no debe ser indiferente al entorno.
  - El marco de validación puede ser físico, procedimental, ambiental, narrativo, simbólico, comunitario o digital.
  - En YouTube y plataformas digitales, el título, miniatura, algoritmo, comentarios, estética y lenguaje de exclusividad pueden operar como marco ambiental.
  - La adaptación no debe romper invariantes.
  - El modelo puede usarse para relevancia comunicativa, pero se vuelve problemático cuando simula precisión individual que no posee.
  - El cierre debe dejar una matriz operativa para detectar el patrón.

grounds_obligatorios:
  - MOV_02 estableció operaciones internas: alta aplicabilidad, ambigüedad, completado y confusión resonancia/precisión.
  - MOV_03 estableció juego: emisor, mensaje, receptor, reconocimiento/descarte.
  - MOV_04 estableció marco de validación.
  - MOV_05 estableció forma interna de la frase.
  - MOV_06 mostró portabilidad por ejemplos.

warrant_visible: >
  Si todos los movimientos anteriores mostraron componentes que reaparecen bajo variación, entonces el cierre puede extraerlos como invariantes aplicables.

backing_necesario: >
  La arquitectura completa ya probó que el patrón no depende de un dominio único, sino de relaciones funcionales que pueden conservarse en contextos distintos.

qualifiers:
  - Aplicar el modelo no significa manipular necesariamente.
  - El uso ético exige no fingir datos individuales inexistentes.
  - La estructura se adapta, pero no todo cambio es válido.
  - El entorno digital puede funcionar como marco, pero no garantiza validación.

rebuttals_o_riesgos:
  - Objeción: esto enseña a manipular.
  - Respuesta: el cierre debe incluir criterio crítico y límite ético.
  - Objeción: si todo puede ser Barnum, nada lo es.
  - Respuesta: sólo cuenta si conserva las invariantes estructurales.
  - Objeción: una frase general puede ser útil sin ser engañosa.
  - Respuesta: correcto; el problema aparece cuando simula precisión individual inexistente o induce acción conveniente para el emisor sin base suficiente.
```

### Invariantes finales del modelo

```yaml
invariantes_Barnum:
  - emisor_o_fuente_del_mensaje
  - receptor_que_interpreta
  - marco_de_validacion_o_respaldo_interpretativo
  - frase_de_alta_aplicabilidad
  - ambiguedad_controlada
  - apariencia_de_especificidad
  - activacion_autobiografica
  - salida_de_reconocimiento_o_descarte
  - posible_accion_posterior
```

### Dominio de variación

```yaml
dominio_de_variacion:
  - tipo_de_emisor
  - tipo_de_receptor
  - canal
  - marco_disponible
  - tension_humana_activada
  - profundidad_del_diagnostico
  - formato_de_la_frase
  - intensidad_emocional
  - accion_posterior
  - limite_etico
```

### Matriz operativa final para detectar o construir una instancia

| Paso                         | Pregunta operativa                                                | Salida esperada                                                                   |
| ---------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1. Jugadores                 | ¿Quién emite y quién interpreta?                                  | Emisor / receptor definidos.                                                      |
| 2. Contexto                  | ¿En qué situación aparece el mensaje?                             | Canal, expectativa, problema o escena.                                            |
| 3. Marco de validación       | ¿Por qué la frase no parece dicha al azar?                        | Ritual, test, algoritmo, experto, comunidad, estética o entorno.                  |
| 4. Tensión común             | ¿Qué experiencia ampliamente reconocible activa?                  | Duda, bloqueo, potencial, inseguridad, búsqueda de sentido, agravio, pertenencia. |
| 5. Frase Barnum situada      | ¿Cómo se formula de forma amplia pero orientada?                  | Enunciado general, ambiguo, resonante y contextual.                               |
| 6. Completado autobiográfico | ¿Qué huecos debe llenar el receptor?                              | Recuerdos, deseos, tensiones, miedos o aspiraciones propias.                      |
| 7. Salida                    | ¿Qué ocurre si funciona o falla?                                  | Reconocimiento subjetivo o descarte por vaguedad.                                 |
| 8. Límite ético              | ¿Se está orientando o simulando precisión individual inexistente? | Uso legítimo, zona gris o manipulación.                                           |

### Contenido obligatorio

```yaml
ideas_que_deben_aparecer:
  - aplicar_no_es_copiar_frases
  - estructura_se_conserva_contexto_se_adapta
  - marco_puede_ser_fisico_procedimental_ambiental_o_digital
  - YouTube_puede_funcionar_como_marco_ambiental
  - limite_etico
  - matriz_operativa_final

ejemplos_que_pueden_aparecer:
  - video_de_YouTube_que_dice_"este_video_te_aparecio_por_algo"
  - canal_que_construye_exclusividad_interpretativa
  - titulo_miniatura_comentarios_algoritmo_como_marco

distinciones_claras:
  - relevancia_contextual_no_es_precision_individual
  - adaptacion_no_es_repeticion
  - uso_critico_no_es_manual_de_explotacion

terminos_con_cuidado:
  - "aplicar" como preservar estructura bajo variación.
  - "ético" como límite operativo, no sermón final desconectado.
```

### Recursos de guion

```yaml
forma_de_ejecucion: sintesis_operativa
imagen_mental: plantilla_transparente_del_modelo_colocada_sobre_distintos_contextos
escena: regresar_al_mapa_total_y_marcar_los_componentes_que_no_pueden_faltar
comparacion: no_copiar_la_llave_sino_entender_la_cerradura
frase_bisagra_tentativa: "El modelo no se copia. Se conserva su estructura y se adapta su superficie."
posible_visual: checklist_final_con_invariantes_y_semáforo_ético
tono_funcional: conclusivo_operativo_critico
```

### Beats internos

| Beat   | Tipo                                    | Deriva de         | Función                                | Operación cognitiva              | Contenido mínimo                                                    | Riesgo si falla                                    |
| ------ | --------------------------------------- | ----------------- | -------------------------------------- | -------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| B07_01 | beat_de_sintesis                        | grounds_MOV_02_06 | Recuperar lo construido                | Integrar todo sin repetir        | Caso, principio, juego, marco, forma, aplicaciones                  | Cierre parece resumen largo                        |
| B07_02 | beat_de_extraccion_de_invariantes       | claim_global      | Listar invariantes                     | Convertir ejemplos en estructura | Emisor, receptor, marco, frase, completado, salida                  | Queda demasiado abstracto                          |
| B07_03 | beat_de_criterio_aplicable              | CL_metodologico   | Presentar matriz operativa             | Dar herramienta usable           | Preguntas por jugadores, contexto, marco, tensión, frase, salida    | Parece manual si no se limita                      |
| B07_04 | beat_de_adaptacion_contextual           | CL_contextual     | Mostrar que contexto cambia superficie | Evitar copia de frases           | Contexto, canal, audiencia, entorno                                 | Se pierde la identidad del modelo                  |
| B07_05 | beat_de_validacion_contextual_extendida | CL_marco_digital  | Incluir marcos ambientales/digitales   | Ampliar MOV_04                   | YouTube: título, miniatura, algoritmo, comunidad                    | Introduce ejemplo largo nuevo y compite con MOV_06 |
| B07_06 | beat_de_limite_etico                    | CL_etico          | Establecer frontera crítica            | Evitar lectura explotadora       | Uso legítimo vs simulación de precisión inexistente                 | El video termina como manual manipulativo          |
| B07_07 | beat_de_cierre                          | principio_final   | Dejar fórmula memorable                | Fijar aprendizaje final          | "No creemos porque sea precisa; la volvemos precisa al completarla" | Cierre débil o moralizante                         |

### Prohibiciones específicas

```yaml
no_adelantar:
  - no_aplica_por_ser_el_cierre

no_repetir:
  - no_recontar_todos_los_ejemplos_de_MOV_06
  - no_reexplicar_completo_MOV_02

no_convertir_en:
  - sermon_moral
  - manual_de_manipulacion
  - conclusion_sin_herramienta_operativa

no_romper:
  - distincion_relevancia_contextual_vs_precision_individual
  - estructura_vs_superficie
  - limite_etico
```

### Salida

```yaml
que_debe_poder_decir_el_espectador: >
  El efecto Barnum se reconoce cuando una fuente presenta una frase general, validada por un marco, que el receptor completa con su biografía hasta sentirla personal. Aplicarlo no es copiar frases: es conservar esa estructura y adaptarla al contexto, cuidando el límite ético.

pregunta_entregada_al_siguiente_MOV: null

criterio_listo_para_redaccion:
  funciona_si: >
    El espectador termina con una herramienta mental para detectar el patrón y con una frontera crítica sobre su uso.
  falla_si: >
    El cierre sólo resume, moraliza o entrega una receta manipulativa.
```

---

# 5. Matriz de trazabilidad por beat

| Beat            | MOV    | Componente fuente                                             | Resultado guionizable                          |
| --------------- | ------ | ------------------------------------------------------------- | ---------------------------------------------- |
| B01_01–B01_07   | MOV_01 | doble caso, grounds narrativos, warrant de generalización     | Apertura narrativa con anomalía.               |
| B02_01–B02_07   | MOV_02 | claim causal, claims de aplicabilidad, ambigüedad, completado | Explicación psicológica del mecanismo.         |
| B03_01–B03_07   | MOV_03 | claim interaccional, roles, salidas                           | Modelo estratégico del juego.                  |
| B034_01–B034_03 | PUENTE | claim arquitectónico, warrant de artefacto intermedio         | Cambio de foco hacia mensaje.                  |
| B04_01–B04_06   | MOV_04 | claim pragmático-interaccional, grounds de marco, qualifiers  | Contextualización del respaldo interpretativo. |
| B05_01–B05_08   | MOV_05 | claim definicional-funcional, componentes de forma Barnum     | Anatomía de la frase.                          |
| B06_01–B06_09   | MOV_06 | claim de portabilidad, nodo mayor, banco modular              | Demostración por variación contextual.         |
| B07_01–B07_07   | MOV_07 | claim aplicativo, invariantes, límite ético                   | Cierre operativo y crítico.                    |

---

# 6. Criterios de validación antes de redactar

## 6.1. Validación de trazabilidad

```yaml
pregunta: >
  ¿Cada beat puede rastrearse a una función del MOV correspondiente?
falla_si: >
  Aparece una escena interesante pero no se puede conectar con claim, ground, warrant, qualifier o rebuttal.
```

## 6.2. Validación de continuidad

```yaml
pregunta: >
  ¿La salida cognitiva de cada MOV prepara la entrada del siguiente?
falla_si: >
  El siguiente MOV necesita información que no fue instalada.
```

## 6.3. Validación de orden macro

```yaml
pregunta: >
  ¿La matriz conserva MOV_01 → MOV_02 → MOV_03 → PUENTE → MOV_04 → MOV_05 → MOV_06 → MOV_07?
falla_si: >
  Se mezclan ejemplos, cierre o forma interna antes de su momento.
```

## 6.4. Validación de warrant visible

```yaml
pregunta: >
  ¿El espectador entenderá por qué el ground sostiene el claim?
falla_si: >
  El video afirma cosas correctas, pero los saltos inferenciales quedan invisibles.
```

## 6.5. Validación audiovisual

```yaml
pregunta: >
  ¿Cada MOV tiene imagen mental, escena, comparación o visual derivado de su función?
falla_si: >
  Todos los MOV suenan como explicación abstracta indiferenciada.
```

## 6.6. Validación ética

```yaml
pregunta: >
  ¿La matriz mantiene una distancia crítica frente al uso persuasivo del modelo?
falla_si: >
  El guion futuro puede convertirse en manual de explotación sin límite analítico o ético.
```

---

# 7. Criterios de falla de la matriz

```yaml
falla_por_lista_tematica:
  descripcion: >
    Los MOV se reducen a temas como "historia", "psicología", "publicidad", "ejemplos" sin función argumentativa.

falla_por_redaccion_prematura:
  descripcion: >
    La matriz se convierte en guion literal antes de fijar beats y operaciones cognitivas.

falla_por_adelantamiento:
  descripcion: >
    Un MOV temprano usa aplicaciones, cierre o matriz final pertenecientes a movimientos posteriores.

falla_por_repeticion:
  descripcion: >
    MOV_02, MOV_03, MOV_04 y MOV_05 repiten la misma explicación sin diferenciar principio, juego, marco y forma.

falla_por_visual_decorativo:
  descripcion: >
    Los visuales adornan, pero no ejecutan la función argumentativa del beat.

falla_por_manualizacion:
  descripcion: >
    La matriz produce una guía de manipulación en lugar de una explicación crítica del mecanismo.

falla_por_perdida_de_invariantes:
  descripcion: >
    MOV_06 o MOV_07 muestran variaciones sin dejar claro qué estructura se conserva.
```

---

# 8. Guía para la siguiente fase: redacción controlada

La redacción del guion debe ejecutarse por unidades. No se debe redactar todo el video de una sola vez sin pasar por los beats.

## 8.1. Orden recomendado de redacción

```txt
1. Redactar MOV_01 como apertura narrativa.
2. Validar que MOV_01 deja pregunta abierta, no teoría completa.
3. Redactar MOV_02 como explicación del principio.
4. Validar distinción resonancia vs precisión.
5. Redactar MOV_03 como diagrama de juego.
6. Redactar puente breve hacia MOV_04.
7. Redactar MOV_04 como contraste de marcos.
8. Redactar MOV_05 como anatomía de la frase.
9. Seleccionar ruta de ejemplos de MOV_06.
10. Redactar MOV_06 con tabla de invariantes visible o implícita.
11. Redactar MOV_07 como cierre operativo, no moralina ni manual.
```

## 8.2. Regla para evaluar cada bloque redactado

Después de redactar cada segmento, debe responderse:

```yaml
revision_de_segmento:
  - que_MOV_ejecuta:
  - que_beats_ejecuta:
  - que_claim_sostiene:
  - que_warrant_vuelve_visible:
  - que_no_adelanta:
  - que_entrega_al_siguiente_MOV:
```

---

# 9. Fórmula de cierre de la matriz

```txt
La arquitectura argumentativa dice qué debe defender el video.
La Corriente de Continuidad dice cómo ejecutar esa defensa audiovisualmente.
El guion final deberá escribir sólo aquello que ejecute un beat.
```

Fórmula compacta:

```txt
MOV → unidad guionizable → beat → línea de guion
```

Principio operativo:

```txt
No escribir frases interesantes.
Escribir funciones argumentativas materializadas como escena, explicación, contraste, visual o transición.
```
