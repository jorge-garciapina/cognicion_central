# Aplicación del `analizador_de_metadiscurso` al capítulo 1 de Carnegie

**id_documental:** `analisis_metadiscurso_carnegie_capitulo_1`  
**tipo:** `aplicacion_de_modelo`  
**modelo_usado:** `analizador_de_metadiscurso_maanc_v2`  
**texto_base:** `transcripcion_cap1_carnegie.md`  
**capítulo:** “Si quieres recoger miel, no des puntapiés a la colmena”  
**objetivo:** reconstruir la capa de conducción lectora del capítulo

---

## 0. Nota de alcance

Este documento no describe el modelo general. Sólo aplica el `analizador_de_metadiscurso` al capítulo de Carnegie. El objetivo no es resumir el capítulo, sino mostrar cómo el texto guía al lector mediante operaciones metadiscursivas.

El análisis usa el texto transcrito como base. Algunas citas se conservan breves para funcionar como evidencia local.

---

## 1. Perfil metadiscursivo global

```yaml
perfil_metadiscursivo_global:
  tipo_dominante:
    conduccion_persuasiva_por_acumulacion_de_casos_y_autoaplicacion

  modo_de_guia:
    - narrativo_ejemplificativo
    - autoritativo
    - lectoral_directo
    - afectivo_performativo
    - moral_practico

  operaciones_dominantes:
    - encuadrar
    - ejemplificar
    - generalizar
    - acumular_evidencia
    - convocar_al_lector
    - reorientar_la_lectura
    - autorizar_con_fuentes
    - proyectar_a_la_practica
    - insertar_experiencia_emocional
    - condensar_en_regla

  efecto_en_arquitectura_macro:
    transforma una serie de historias en una regla practica de conducta

  transformacion_del_lector:
    de juzgar a otros
    a reconocer el impulso de criticar
    a comprender sus efectos defensivos
    a adoptar una practica alternativa de comprension
```

El capítulo no avanza simplemente como una explicación sobre “no criticar”. Avanza como una conducción progresiva del lector desde el juicio externo hacia la autoaplicación moral.

---

## 2. Arquitectura macro metadiscursiva detectada

La arquitectura macro del capítulo puede reconstruirse así:

```txt
1. Encuadre proverbial
2. Caso extremo de autojustificación
3. Extracción de moraleja
4. Acumulación de evidencia criminal e institucional
5. Transferencia hacia la vida cotidiana del lector
6. Formulación de tesis psicológica sobre la crítica
7. Expansión histórica de la tesis
8. Reencuadre: no importa la culpa, importa el efecto de la crítica
9. Modelo alternativo: Lincoln
10. Proyección práctica hacia el lector
11. Experiencia personal del autor
12. Principio antropológico: las personas son emotivas
13. Modelo positivo: Bob Hoover
14. Inserción afectiva: “Papá olvida”
15. Síntesis comprensiva
16. Regla final
```

La conducción no se limita a presentar argumentos. El capítulo hace que el lector atraviese una serie de estados:

```txt
escándalo moral ante criminales
  → sorpresa ante su autojustificación
    → reconocimiento de un patrón humano
      → traslado del patrón a relaciones cotidianas
        → aceptación de la inutilidad de la crítica
          → admiración por modelos de autocontrol
            → autoexamen emocional
              → aceptación de la regla final
```

---

## 3. Mapa de conducción lectora

```yaml
mapa_de_conduccion_lectora:
  estado_lector_inicial:
    el lector probablemente acepta la critica como reaccion natural ante el error ajeno

  operaciones_de_guia:
    - caso_extremo_de_autojustificacion
    - acumulacion_de_evidencia
    - generalizacion_psicologica
    - transferencia_al_lector
    - demostracion_historica_de_fracaso_de_la_critica
    - modelo_alternativo_de_autocontrol
    - experiencia_personal_del_autor
    - ejemplo_positivo_de_no_humillacion
    - insercion_afectiva_de_arrepentimiento

  estado_lector_final:
    el lector queda preparado para aceptar que criticar, condenar y quejarse
    es menos efectivo que comprender, imaginar causas y evitar humillacion
```

---

## 4. Inventario de operaciones metadiscursivas principales

### OMD-01 — Encuadre proverbial

```yaml
omd_id: OMD_01
fragmento: "Si quieres recoger miel, no des puntapiés a la colmena"
familia: FAM-MD-Encuadre
subfamilia: encuadre_analogico_proverbial
tipo_de_metadiscurso: estructural_afectivo
operacion_cognitiva: preparar_lectura_por_imagen_practica
alcance: global
unidad_afectada: capitulo_completo
responsabilidad_macro: anticipar que atacar a las personas produce reaccion defensiva
efecto_en_el_lector: instala una imagen sencilla antes de la regla moral
```

El título no funciona sólo como frase decorativa. Prepara una analogía: si se quiere obtener algo valioso de una colmena, no conviene agredirla. Esa imagen anticipa la tesis: si se quiere obtener cooperación humana, no conviene atacar la autoestima de las personas.

---

### OMD-02 — Giro desde crimen externo hacia autoimagen interna

```yaml
omd_id: OMD_02
fragmento: "¿qué pensaba 'Dos Pistolas' Crowley de sí mismo?"
familia: FAM-MD-Reorientacion
subfamilia: desplazamiento_a_interioridad
operacion_cognitiva: cambiar_foco_de_accion_a_autojustificacion
alcance: meso
unidad_afectada: mini_historia_Crowley
responsabilidad_macro: preparar la tesis sobre autojustificacion
efecto_en_el_lector: obliga a mirar no solo el crimen, sino la narracion interna del criminal
```

Después de narrar la violencia de Crowley, el capítulo no pregunta inmediatamente qué castigo merecía. Pregunta qué pensaba de sí mismo. Esa pregunta reorienta el texto desde la moral externa hacia la psicología de la autojustificación.

---

### OMD-03 — Extracción de moraleja

```yaml
omd_id: OMD_03
fragmento: "La moraleja de este relato es..."
familia: FAM-MD-Generalizacion
subfamilia: caso_a_regla
operacion_cognitiva: extraer_principio_desde_mini_historia
alcance: meso
unidad_afectada: caso_Crowley
responsabilidad_macro: convertir anecdota criminal en evidencia psicologica
efecto_en_el_lector: bloquea la lectura del caso como episodio aislado
```

Esta marca explicita cómo debe leerse la mini-historia. El caso de Crowley debe interpretarse como evidencia de que incluso personas culpables pueden no culparse a sí mismas.

---

### OMD-04 — Apertura de acumulación probatoria

```yaml
omd_id: OMD_04
fragmento: "¿Es ésta una actitud extraordinaria entre criminales? Si así le parece, escuche lo siguiente"
familia: FAM-MD-Apertura-de-Operacion
subfamilia: apertura_de_acumulacion_probatoria
operacion_cognitiva: anticipar_y_bloquear_excepcion
alcance: macro
unidad_afectada: bloque_Capone_Schultz_SingSing
responsabilidad_macro: pasar de caso unico a patron repetido
efecto_en_el_lector: evita que Crowley sea interpretado como excepcion
```

La pregunta anticipa una objeción: quizá Crowley es un caso extraordinario. La frase “escuche lo siguiente” abre una cadena de ejemplos que transforma el caso individual en patrón.

---

### OMD-05 — Acumulación ejemplificativa

```yaml
omd_id: OMD_05
fragmento: cadena_Crowley_Capone_Schultz_SingSing
familia: FAM-MD-Ejemplificacion
subfamilia: acumulacion_probatoria
operacion_cognitiva: formar_regularidad_por_repeticion_de_casos
alcance: macro
unidad_afectada: bloque_criminales_y_prisioneros
responsabilidad_macro: producir patron de autojustificacion
efecto_en_el_lector: convierte varios casos en una regularidad psicologica
```

La acumulación funciona metadiscursivamente aunque no dependa de una sola marca. El texto hace pasar al lector por varios casos para que vea una estructura repetida: el culpable tiende a justificarse.

---

### OMD-06 — Transferencia al mundo cotidiano del lector

```yaml
omd_id: OMD_06
fragmento: "¿qué diremos de las personas con quienes usted, lector, o yo, entramos en contacto?"
familia: FAM-MD-Convocatoria-del-Lector
subfamilia: transferencia_desde_extremos_a_cotidiano
operacion_cognitiva: reducir_distancia_entre_casos_extremos_y_relaciones_diarias
alcance: macro
unidad_afectada: transicion_criminales_a_vida_social
responsabilidad_macro: impedir que la tesis quede confinada al mundo criminal
efecto_en_el_lector: involucra al lector en el patron analizado
```

Esta operación es decisiva. El texto no permite que el lector piense: “eso sólo aplica a criminales”. Lo lleva hacia sus propias relaciones cotidianas.

---

### OMD-07 — Formulación de tesis causal

```yaml
omd_id: OMD_07
fragmento: "La crítica es inútil porque..."
familia: FAM-MD-Jerarquizacion
subfamilia: tesis_causal_principal
operacion_cognitiva: condensar_ejemplos_en_explicacion
alcance: macro
unidad_afectada: bloque_teorico_sobre_critica
responsabilidad_macro: convertir patrones previos en principio explicativo
efecto_en_el_lector: fija el nodo conceptual dominante del capitulo
```

Después de los casos, el texto entrega el principio: la crítica pone a la persona en defensiva, hiere su orgullo y despierta resentimiento. La función metadiscursiva es jerarquizar esa explicación como clave interpretativa.

---

### OMD-08 — Autorización científica

```yaml
omd_id: OMD_08
fragmento: Skinner_y_Selye
familia: FAM-MD-Autorizacion
subfamilia: autoridad_psicologica
operacion_cognitiva: respaldar_tesis_con_autoridad_externa
alcance: meso
unidad_afectada: tesis_sobre_critica_y_respuesta_humana
responsabilidad_macro: aumentar_credibilidad_del_principio
efecto_en_el_lector: desplaza la tesis desde opinion moral a observacion respaldada
```

Skinner y Selye cumplen funciones de autoridad. Uno refuerza la idea de que el premio enseña mejor que el castigo; el otro refuerza la sensibilidad humana ante aprobación y condena.

---

### OMD-09 — Ejemplo de método alternativo

```yaml
omd_id: OMD_09
fragmento: caso_George_B_Johnston_y_los_cascos
familia: FAM-MD-Ejemplificacion
subfamilia: ejemplo_operativo_de_sustitucion
operacion_cognitiva: mostrar_alternativa_a_la_critica_autoritaria
alcance: meso
unidad_afectada: ejemplo_de_seguridad_laboral
responsabilidad_macro: demostrar que cambiar el trato cambia la obediencia
efecto_en_el_lector: ofrece una evidencia práctica antes de entrar a ejemplos historicos
```

El caso del coordinador de seguridad traduce la tesis a una situación laboral concreta: ordenar con autoridad produce obediencia desganada; preguntar con tono amistoso produce mejor resultado.

---

### OMD-10 — Apertura de prueba histórica

```yaml
omd_id: OMD_10
fragmento: "En mil páginas de la historia se encuentran ejemplos..."
familia: FAM-MD-Apertura-de-Operacion
subfamilia: ampliacion_historica
operacion_cognitiva: cambiar_de_escala_desde_interaccion_cotidiana_a_historia
alcance: macro
unidad_afectada: bloque_Roosevelt_Taft_Teapot_Dome
responsabilidad_macro: mostrar que la inutilidad de la critica tambien opera en politica e historia
efecto_en_el_lector: aumenta el peso del argumento mediante escala historica
```

La frase abre una ampliación de escala. La crítica ya no se analiza sólo en prisiones o lugares de trabajo, sino en episodios históricos con consecuencias públicas.

---

### OMD-11 — Reencuadre de la disputa Roosevelt/Taft

```yaml
omd_id: OMD_11
fragmento: "No lo sé, francamente, ni me importa. Lo que trato de hacer ver es..."
familia: FAM-MD-Reorientacion
subfamilia: bloqueo_de_lectura_moralizante
operacion_cognitiva: desplazar_foco_de_culpa_a_efecto_de_la_critica
alcance: meso
unidad_afectada: caso_Roosevelt_Taft
responsabilidad_macro: impedir que el lector se distraiga decidiendo quien tenia razon
efecto_en_el_lector: enfoca la lectura en la ineficacia persuasiva de la critica
```

Esta es una operación metadiscursiva muy fuerte. Carnegie no quiere que el lector evalúe quién fue culpable. Quiere que observe que la crítica no persuadió a Taft.

---

### OMD-12 — Generalización antropológica desde Teapot Dome

```yaml
omd_id: OMD_12
fragmento: "¡Ahí está! La naturaleza humana en acción..."
familia: FAM-MD-Generalizacion
subfamilia: generalizacion_antropologica
operacion_cognitiva: convertir_caso_historico_en_principio_humano
alcance: macro
unidad_afectada: caso_Albert_Fall
responsabilidad_macro: reforzar la tesis de que el culpable culpa a otros
efecto_en_el_lector: amplía el patrón hacia una condición humana general
```

El caso de Albert Fall no queda como escándalo político. Se convierte en evidencia de una estructura humana: el malhechor culpa a todos menos a sí mismo.

---

### OMD-13 — Recuperación de archivo mental

```yaml
omd_id: OMD_13
fragmento: "recordemos a Al Capone, a Dos Pistolas Crowley y a Albert Fall"
familia: FAM-MD-Recuperacion
subfamilia: recuperacion_de_casos_probatorios
operacion_cognitiva: reunir_evidencia_prevista_en_memoria_operativa
alcance: macro
unidad_afectada: cadena_probatoria_previa
responsabilidad_macro: convertir ejemplos previos en repertorio de juicio futuro
efecto_en_el_lector: consolida los ejemplos como archivo mental disponible
```

Esta operación recapitula selectivamente los casos que sostienen el argumento y los vuelve utilizables para el lector.

---

### OMD-14 — Convocatoria a comprender

```yaml
omd_id: OMD_14
fragmento: "Comprendamos que las críticas son como palomas mensajeras"
familia: FAM-MD-Convocatoria-del-Lector
subfamilia: invitacion_a_asumir_principio
operacion_cognitiva: convertir_tesis_en_imagen_memorable
alcance: macro
unidad_afectada: principio_de_retorno_de_la_critica
responsabilidad_macro: hacer que el lector incorpore la tesis como regla practica
efecto_en_el_lector: transforma razonamiento en imagen recordable
```

La comparación con palomas mensajeras convierte la tesis en imagen: la crítica vuelve al emisor. Es una operación de comprensión y memorización.

---

### OMD-15 — Apertura de modelo alternativo: Lincoln

```yaml
omd_id: OMD_15
fragmento: "¿Cuál era el secreto de los triunfos de Lincoln...?"
familia: FAM-MD-Apertura-de-Operacion
subfamilia: apertura_de_modelo_alternativo
operacion_cognitiva: pasar_de_critica_inutil_a_autocontrol_comprensivo
alcance: macro
unidad_afectada: bloque_Lincoln
responsabilidad_macro: introducir una figura que encarna la alternativa conductual
efecto_en_el_lector: ofrece un modelo positivo despues de demostrar el fracaso de la critica
```

El capítulo deja de acumular fracasos de la crítica y comienza a mostrar una alternativa: Lincoln como modelo de autocontrol.

---

### OMD-16 — Caso de aprendizaje biográfico

```yaml
omd_id: OMD_16
fragmento: incidente_Lincoln_Shields
familia: FAM-MD-Ejemplificacion
subfamilia: ejemplo_de_transformacion_personal
operacion_cognitiva: mostrar_que_el_modelo_positivo_nacio_de_un_error
alcance: meso
unidad_afectada: biografia_Lincoln
responsabilidad_macro: hacer creible la transformacion de Lincoln
efecto_en_el_lector: presenta el autocontrol como aprendizaje, no como perfeccion innata
```

Lincoln no aparece como santo abstracto. Primero fue crítico y burlón; luego aprendió por experiencia. Esta estructura vuelve el modelo más aplicable.

---

### OMD-17 — Carta no enviada a Meade

```yaml
omd_id: OMD_17
fragmento: carta_no_enviada_a_Meade
familia: FAM-MD-Contraste-de-Lectura
subfamilia: critica_sentida_vs_critica_no_ejecutada
operacion_cognitiva: mostrar_diferencia_entre_sentir_ira_y_actuar_con_autocontrol
alcance: meso
unidad_afectada: ejemplo_Lincoln_Gettysburg
responsabilidad_macro: probar que no criticar no significa no sentir ira
efecto_en_el_lector: ofrece un modelo realista de contencion
```

El capítulo muestra que Lincoln sí sintió ira, escribió una carta severa, pero no la envió. Eso permite distinguir emoción de conducta.

---

### OMD-18 — Proyección práctica por pregunta Lincoln

```yaml
omd_id: OMD_18
fragmento: "¿Qué haría Lincoln si se viera en mi lugar?"
familia: FAM-MD-Proyeccion-Practica
subfamilia: pregunta_modelo_para_accion_futura
operacion_cognitiva: transformar_ejemplo_historico_en_procedimiento_personal
alcance: macro
unidad_afectada: lector_futuro
responsabilidad_macro: convertir historia en herramienta de autocontrol
efecto_en_el_lector: instala una pregunta práctica para momentos de tentacion critica
```

El texto usa a Lincoln como dispositivo de acción futura: ante la tentación de reprochar, el lector puede preguntarse cómo actuaría Lincoln.

---

### OMD-19 — Autopresencia del autor

```yaml
omd_id: OMD_19
fragmento: "Cuando yo era aún joven..."
familia: FAM-MD-Autopresencia
subfamilia: exposicion_de_vulnerabilidad_autoral
operacion_cognitiva: introducir_experiencia_personal_como_evidencia_afectiva
alcance: meso
unidad_afectada: caso_Richard_Harding_Davis
responsabilidad_macro: mostrar que la critica hiere incluso cuando es justificable
efecto_en_el_lector: aumenta cercania y credibilidad emocional
```

Carnegie se incluye como alguien herido por una crítica. Esta autopresencia reduce la distancia moral: no sólo “otros” son sensibles; el propio autor lo fue.

---

### OMD-20 — Advertencia sobre resentimiento duradero

```yaml
omd_id: OMD_20
fragmento: "Si usted o yo queremos despertar mañana un resentimiento..."
familia: FAM-MD-Advertencia-Interpretativa
subfamilia: advertencia_de_consecuencia_afectiva
operacion_cognitiva: proyectar_efecto_futuro_de_una_critica_punzante
alcance: macro
unidad_afectada: conducta_del_lector
responsabilidad_macro: convertir experiencia personal en advertencia general
efecto_en_el_lector: hace previsible el daño emocional de criticar
```

La crítica no se presenta sólo como ineficaz, sino como generadora de resentimiento persistente.

---

### OMD-21 — Principio antropológico

```yaml
omd_id: OMD_21
fragmento: "no tratamos con criaturas lógicas..."
familia: FAM-MD-Generalizacion
subfamilia: modelo_antropologico_practico
operacion_cognitiva: definir_la_naturaleza_del_interlocutor_humano
alcance: global
unidad_afectada: tesis_central_del_capitulo
responsabilidad_macro: justificar por que la critica fracasa
efecto_en_el_lector: cambia el modelo mental de persona racional a persona emotiva y defensiva
```

Esta operación sostiene el corazón psicológico del capítulo: las personas no responden a la crítica como máquinas lógicas, sino como seres afectivos, orgullosos y vulnerables.

---

### OMD-22 — Modelo positivo: Bob Hoover

```yaml
omd_id: OMD_22
fragmento: caso_Bob_Hoover
familia: FAM-MD-Ejemplificacion
subfamilia: ejemplo_modelo_de_no_humillacion
operacion_cognitiva: mostrar_conducta_alternativa_frente_a_error_grave
alcance: meso
unidad_afectada: ejemplo_Hoover_mecanico
responsabilidad_macro: demostrar que no criticar puede ser firme, eficaz y reparador
efecto_en_el_lector: ofrece una imagen concreta de respuesta no humillante
```

Hoover tenía motivos para estallar, pero no lo hizo. En lugar de humillar al mecánico, reafirmó confianza. El caso muestra la regla funcionando en una situación extrema.

---

### OMD-23 — Suspensión de instrucción directa

```yaml
omd_id: OMD_23
fragmento: "Quizás el lector espera que yo le diga: no lo haga. Pero no lo haré."
familia: FAM-MD-Advertencia-Interpretativa
subfamilia: suspension_de_expectativa_pedagogica
operacion_cognitiva: evitar_mandato_directo_y_preparar_experiencia_emocional
alcance: macro
unidad_afectada: introduccion_a_Papa_Olvida
responsabilidad_macro: preparar al lector para sentir antes que recibir una regla
efecto_en_el_lector: aumenta apertura afectiva
```

Este movimiento es sofisticado. Carnegie anticipa una expectativa del lector y la suspende: no dará todavía la instrucción, sino que insertará una pieza emocional.

---

### OMD-24 — Inserción performativa: “Papá olvida”

```yaml
omd_id: OMD_24
fragmento: bloque_Papa_Olvida
familia: FAM-MD-Conduccion-Afectiva
subfamilia: insercion_performativa_de_arrepentimiento
operacion_cognitiva: hacer_experimentar_el_daño_de_la_critica
alcance: macro
unidad_afectada: bloque_emocional_final
responsabilidad_macro: convertir la tesis en autoexamen afectivo
efecto_en_el_lector: desplaza de razonamiento externo a identificacion emocional
```

“Papá olvida” no sólo ilustra el principio. Lo ejecuta emocionalmente. El lector no sólo entiende que criticar puede dañar; atraviesa una escena de arrepentimiento.

---

### OMD-25 — Síntesis sustitutiva

```yaml
omd_id: OMD_25
fragmento: "En lugar de censurar a la gente, tratemos de comprenderla"
familia: FAM-MD-Regla-Final
subfamilia: sustitucion_operativa
operacion_cognitiva: reemplazar_critica_por_comprension
alcance: global
unidad_afectada: cierre_del_capitulo
responsabilidad_macro: formular alternativa positiva
efecto_en_el_lector: transforma una prohibicion en una practica interpretativa
```

La regla no se limita a “no critique”. Propone el sustituto: comprender por qué las personas hacen lo que hacen.

---

### OMD-26 — Autoridad moral final

```yaml
omd_id: OMD_26
fragmento: cita_del_Dr_Johnson
familia: FAM-MD-Autorizacion
subfamilia: autoridad_moral_de_cierre
operacion_cognitiva: reforzar_el_no_juzgar_mediante_autoridad_externa
alcance: global
unidad_afectada: cierre_moral
responsabilidad_macro: cerrar la tesis con autoridad moral
efecto_en_el_lector: fortalece la regla final como principio ético
```

La cita final refuerza la idea de no juzgar prematuramente. Funciona como respaldo moral antes de la regla 1.

---

### OMD-27 — Regla final condensada

```yaml
omd_id: OMD_27
fragmento: "No critique, no condene ni se queje"
familia: FAM-MD-Regla-Final
subfamilia: maxima_operativa
operacion_cognitiva: condensar_toda_la_trayectoria_en_regla_memorable
alcance: global
unidad_afectada: capitulo_completo
responsabilidad_macro: entregar formula practica final
efecto_en_el_lector: convierte la experiencia del capitulo en mandato recordable
```

La regla final es el punto de llegada de toda la conducción metadiscursiva.

---

## 5. Grafo metadiscursivo del capítulo

```yaml
grafo_metadiscursivo_carnegie_cap1:
  nodos:
    - id: MD_01
      funcion: encuadre_proverbial
      tramo: titulo

    - id: MD_02
      funcion: caso_extremo_de_autojustificacion
      tramo: Crowley

    - id: MD_03
      funcion: extraccion_de_moraleja
      tramo: cierre_Crowley

    - id: MD_04
      funcion: acumulacion_probatoria
      tramo: Capone_Schultz_SingSing

    - id: MD_05
      funcion: transferencia_al_lector
      tramo: lector_y_personas_cotidianas

    - id: MD_06
      funcion: formulacion_teorica_de_la_critica
      tramo: critica_es_inutil

    - id: MD_07
      funcion: prueba_operativa
      tramo: George_B_Johnston

    - id: MD_08
      funcion: prueba_historica
      tramo: Roosevelt_Taft_Teapot_Dome

    - id: MD_09
      funcion: modelo_alternativo
      tramo: Lincoln

    - id: MD_10
      funcion: proyeccion_practica
      tramo: pregunta_Lincoln

    - id: MD_11
      funcion: herida_personal
      tramo: Richard_Harding_Davis

    - id: MD_12
      funcion: principio_antropologico
      tramo: criaturas_emotivas

    - id: MD_13
      funcion: modelo_positivo
      tramo: Bob_Hoover

    - id: MD_14
      funcion: insercion_afectiva
      tramo: Papa_Olvida

    - id: MD_15
      funcion: regla_final
      tramo: cierre_y_regla_1

  aristas:
    - from: MD_01
      to: MD_02
      tipo: prepara_lectura

    - from: MD_02
      to: MD_03
      tipo: caso_a_moraleja

    - from: MD_03
      to: MD_04
      tipo: moraleja_a_patron

    - from: MD_04
      to: MD_05
      tipo: patron_extremo_a_vida_cotidiana

    - from: MD_05
      to: MD_06
      tipo: transferencia_a_tesis

    - from: MD_06
      to: MD_07
      tipo: tesis_a_ejemplo_operativo

    - from: MD_07
      to: MD_08
      tipo: ejemplo_operativo_a_prueba_historica

    - from: MD_08
      to: MD_09
      tipo: fracaso_de_critica_a_modelo_alternativo

    - from: MD_09
      to: MD_10
      tipo: modelo_a_practica

    - from: MD_10
      to: MD_11
      tipo: practica_a_experiencia_personal

    - from: MD_11
      to: MD_12
      tipo: experiencia_a_antropologia

    - from: MD_12
      to: MD_13
      tipo: principio_a_modelo_positivo

    - from: MD_13
      to: MD_14
      tipo: modelo_positivo_a_experiencia_afectiva

    - from: MD_14
      to: MD_15
      tipo: experiencia_a_regla
```

---

## 6. Familias detectadas en el capítulo

```yaml
familias_metadiscursivas_detectadas:
  FAM-MD-Encuadre:
    funcion_en_capitulo: preparar la lectura mediante imagen proverbial
    peso: alto

  FAM-MD-Apertura-de-Operacion:
    funcion_en_capitulo: abrir bloques de prueba, historia, ejemplo y modelo
    peso: alto

  FAM-MD-Generalizacion:
    funcion_en_capitulo: convertir casos en reglas humanas generales
    peso: muy_alto

  FAM-MD-Convocatoria-del-Lector:
    funcion_en_capitulo: trasladar el argumento al lector
    peso: muy_alto

  FAM-MD-Jerarquizacion:
    funcion_en_capitulo: marcar la tesis sobre inutilidad de la critica
    peso: alto

  FAM-MD-Reorientacion:
    funcion_en_capitulo: impedir lecturas centradas en culpa y desplazar hacia eficacia
    peso: alto

  FAM-MD-Autorizacion:
    funcion_en_capitulo: respaldar tesis con autoridades psicologicas, historicas y morales
    peso: alto

  FAM-MD-Proyeccion-Practica:
    funcion_en_capitulo: convertir modelos históricos en conducta futura
    peso: alto

  FAM-MD-Conduccion-Afectiva:
    funcion_en_capitulo: hacer sentir el daño de la critica mediante Papá olvida
    peso: muy_alto

  FAM-MD-Regla-Final:
    funcion_en_capitulo: condensar el recorrido en una máxima operativa
    peso: muy_alto
```

---

## 7. Análisis por grandes tramos

### Tramo 1 — Crowley: escándalo moral y autojustificación

```yaml
tramo_id: TR_01
funcion_macro: caso_extremo_de_autojustificacion
operaciones_metadiscursivas:
  - reorientacion_desde_crimen_hacia_autoimagen
  - generalizacion_desde_caso
responsabilidad: hacer visible que incluso un criminal extremo puede verse como inocente o bueno
efecto_en_lector: sorpresa y apertura a la tesis psicologica
```

### Tramo 2 — Capone, Schultz, Sing Sing: patrón repetido

```yaml
tramo_id: TR_02
funcion_macro: acumulacion_de_evidencia
operaciones_metadiscursivas:
  - apertura_de_acumulacion
  - ejemplificacion_probatoria
  - generalizacion_por_repeticion
responsabilidad: impedir que Crowley sea visto como excepción
efecto_en_lector: reconocimiento de regularidad
```

### Tramo 3 — Transferencia al lector y tesis psicológica

```yaml
tramo_id: TR_03
funcion_macro: traslado_a_relaciones_cotidianas
operaciones_metadiscursivas:
  - convocatoria_directa_al_lector
  - jerarquizacion_de_tesis
  - autorizacion_psicologica
responsabilidad: aplicar el patron a la vida comun
efecto_en_lector: autoimplicacion
```

### Tramo 4 — Pruebas operativas e históricas

```yaml
tramo_id: TR_04
funcion_macro: expansion_probatoria
operaciones_metadiscursivas:
  - ejemplo_operativo
  - ampliacion_historica
  - reencuadre_de_culpa_a_efecto
responsabilidad: mostrar que la critica fracasa en trabajo, politica e historia
efecto_en_lector: robustecimiento del principio
```

### Tramo 5 — Lincoln: modelo alternativo

```yaml
tramo_id: TR_05
funcion_macro: sustitucion_de_critica_por_autocontrol
operaciones_metadiscursivas:
  - apertura_de_modelo_alternativo
  - ejemplo_de_transformacion_personal
  - contraste_entre_ira_y_no_envio
  - proyeccion_practica
responsabilidad: mostrar que no criticar es una conducta aprendida y aplicable
efecto_en_lector: aparición de modelo positivo
```

### Tramo 6 — Experiencia personal y antropología emocional

```yaml
tramo_id: TR_06
funcion_macro: interiorizacion_de_la_tesis
operaciones_metadiscursivas:
  - autopresencia
  - advertencia_de_resentimiento
  - generalizacion_antropologica
responsabilidad: mostrar que la critica hiere de forma persistente
efecto_en_lector: empatía y reconocimiento de vulnerabilidad humana
```

### Tramo 7 — Hoover y “Papá olvida”: modelo positivo y experiencia afectiva

```yaml
tramo_id: TR_07
funcion_macro: performacion_emocional_de_la_regla
operaciones_metadiscursivas:
  - ejemplo_modelo_de_no_humillacion
  - suspension_de_mandato_directo
  - insercion_afectiva
responsabilidad: hacer sentir la alternativa a la critica
efecto_en_lector: autoexamen afectivo
```

### Tramo 8 — Cierre y regla final

```yaml
tramo_id: TR_08
funcion_macro: condensacion_normativa
operaciones_metadiscursivas:
  - sintesis_sustitutiva
  - autoridad_moral_final
  - regla_final
responsabilidad: convertir toda la trayectoria en principio operativo
efecto_en_lector: retención de máxima práctica
```

---

## 8. Contribución del metadiscurso a la arquitectura macro

El metadiscurso confirma que el capítulo no es una colección accidental de anécdotas. Es una trayectoria cuidadosamente conducida.

```txt
caso extremo
  → moraleja
    → patrón
      → transferencia al lector
        → tesis psicológica
          → prueba histórica
            → modelo alternativo
              → práctica futura
                → experiencia afectiva
                  → regla final
```

Cada operación metadiscursiva cumple una responsabilidad:

```txt
encuadrar
  → prepara la lectura

generalizar
  → convierte casos en reglas

convocar
  → involucra al lector

reorientar
  → evita lecturas desviadas

autorizar
  → refuerza credibilidad

proyectar
  → convierte comprensión en acción

conducir afectivamente
  → produce identificación emocional

condensar
  → entrega regla final
```

---

## 9. Evaluación de densidad metadiscursiva

```yaml
densidad_metadiscursiva:
  inicio:
    nivel: alto
    motivo: título proverbial, caso extremo, pregunta sobre autoimagen, extracción de moraleja

  desarrollo_inicial:
    nivel: alto
    motivo: acumulación de casos, convocatoria al lector, tesis explícita

  desarrollo_historico:
    nivel: medio_alto
    motivo: aperturas de ejemplo, reencuadres de culpa, generalizaciones

  bloque_Lincoln:
    nivel: alto
    motivo: modelo alternativo, aprendizaje biográfico, proyección práctica

  bloque_emocional_final:
    nivel: muy_alto
    motivo: suspensión de instrucción directa, inserción de Papá olvida, síntesis y regla final
```

---

## 10. Validación del análisis

### Validador 1 — Cada operación tiene función

Cumplido. Las operaciones no se etiquetan únicamente por marca superficial; se interpretan por su responsabilidad dentro del recorrido.

### Validador 2 — Cada operación tiene alcance

Cumplido. Las OMD se clasifican con alcance meso, macro o global.

### Validador 3 — Cada operación se vincula con arquitectura macro

Cumplido. Cada OMD explica cómo modifica el recorrido del capítulo.

### Validador 4 — Se distingue metadiscurso explícito e implícito

Cumplido. Se incluyen marcas explícitas y operaciones estructurales como acumulación de casos, inserción afectiva y cambio de escala.

### Validador 5 — Se identifica efecto en el lector

Cumplido. Cada OMD incluye un efecto sobre el lector.

### Validador 6 — No se sobreinterpreta conector menor

Cumplido parcialmente. El análisis prioriza operaciones estructuralmente relevantes y no inventaría función macro para conectores de baja importancia.

---

## 11. Síntesis final

El metadiscurso del capítulo de Carnegie cumple una función global:

```txt
conduce al lector desde el juicio externo hacia la autoaplicación comprensiva.
```

La conducción se logra mediante una progresión:

```txt
1. mostrar que incluso criminales se justifican;
2. convertir esa observación en patrón humano;
3. trasladar el patrón al lector común;
4. demostrar que la crítica fracasa;
5. ofrecer modelos de autocontrol;
6. hacer sentir emocionalmente el daño de criticar;
7. cerrar con una regla operativa.
```

La regla final:

```txt
No critique, no condene ni se queje.
```

no aparece como mandato aislado. Es el resultado de una arquitectura metadiscursiva completa que prepara, prueba, reorienta, convoca, afecta y finalmente condensa.
