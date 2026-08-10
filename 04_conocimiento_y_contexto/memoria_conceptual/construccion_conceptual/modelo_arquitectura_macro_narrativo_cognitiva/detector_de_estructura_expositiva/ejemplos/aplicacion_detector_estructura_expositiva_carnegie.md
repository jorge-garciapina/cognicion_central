https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0f8e61-a4ec-83e8-8a05-f5f286edde8a

# Aplicación del `detector_de_estructura_expositiva` a Carnegie

**Texto analizado:** Capítulo 1 — “Si quieres recoger miel, no des puntapiés a la colmena”  
**Autor:** Dale Carnegie  
**Fuente de trabajo:** `transcripcion_cap1_carnegie.md`  
**Tipo de documento:** aplicación del modelo a un caso concreto.  
**Importante:** este documento no define el modelo general. Sólo muestra su aplicación al capítulo analizado.

---

## 1. Diagnóstico global

```yaml
diagnostico_global:
  tipo_global: exposicion_persuasiva_practica
  subtipo: demostracion_por_acumulacion_de_casos_con_regla_final
  tesis_expositiva: >
    Criticar, condenar o quejarse rara vez corrige a las personas, porque activa
    defensa, autojustificación, orgullo herido y resentimiento. Por eso es más
    provechoso comprender, contener el impulso de censurar y comenzar por uno mismo.
  patron_de_avance:
    - caso_extremo
    - anomalía_psicológica
    - generalización
    - principio_psicológico
    - evidencia_histórica
    - modelo_positivo
    - transferencia_al_lector
    - interiorización_emocional
    - regla_práctica_final
  estado_cognitivo_inicial: >
    El lector puede aceptar intuitivamente que criticar es una forma legítima de
    corregir errores ajenos.
  estado_cognitivo_final: >
    El lector comprende que la crítica directa suele ser contraproducente y recibe
    una regla práctica: no criticar, no condenar y no quejarse.
```

La arquitectura expositiva del capítulo no es una simple estructura de introducción, desarrollo y conclusión. Tampoco es sólo problema-solución. La exposición funciona como una **conversión progresiva del lector**.

El capítulo primero lleva al lector a observar desde afuera: criminales, políticos, figuras históricas, pilotos, escritores. Después lo desplaza hacia adentro: usted, yo, los hijos, la familia, la propia conducta. La tesis no sólo se entiende; se interioriza.

La trayectoria global puede resumirse así:

```txt
caso extremo
  → anomalía psicológica
    → generalización humana
      → principio psicológico
        → acumulación de evidencia
          → modelos positivos de autocontrol
            → implicación del lector
              → interiorización emocional
                → regla práctica final
```

---

## 2. Macroarquitectura expositiva detectada

```txt
SEC_01. Apertura por caso extremo
SEC_02. Generalización desde criminales
SEC_03. Formulación del principio psicológico
SEC_04. Acumulación histórica de evidencia
SEC_05. Modelo positivo por transformación biográfica: Lincoln
SEC_06. Transferencia pragmática al lector
SEC_07. Reformulación antropológica: las personas son emotivas
SEC_08. Modelo positivo en situación crítica: Hoover
SEC_09. Interiorización emocional: “Papá olvida”
SEC_10. Normativización final
```

El capítulo está construido como una demostración práctica, no como una exposición neutral. Carnegie no sólo quiere que el lector sepa algo. Quiere que el lector deje de hacer algo.

---

## 3. Secciones expositivas

## SEC_01 — Apertura por caso extremo: Crowley

```yaml
section_id: SEC_01
rango_textual: paginas 31-32
forma_superficial: relato_criminal_sensacional
operacion_expositiva: apertura_por_caso_extremo
responsabilidad_cognitiva: capturar atención y preparar una inversión psicológica
funcion_macro: instalar el caso límite que hará visible la tesis
soporte_utilizado: caso_extremo
salida_cognitiva: >
  El lector descubre una disociación entre culpa objetiva y autopercepción subjetiva.
```

### Análisis

El capítulo abre con la persecución y captura de “Dos Pistolas” Crowley. La escena no funciona únicamente como narración de acción. Su función expositiva es colocar al lector frente a un caso moralmente extremo.

La expectativa inicial del lector es sencilla: un criminal violento debería reconocerse como culpable. Pero el texto invierte esa expectativa cuando muestra que Crowley se ve a sí mismo como alguien de buen corazón o como alguien que sólo se defendía.

### Responsabilidad cognitiva

La sección prepara una pregunta implícita:

```txt
Si incluso alguien así no se culpa, ¿qué podemos esperar de las personas comunes?
```

### Conexión

```yaml
conecta_con: SEC_02
tipo_de_conexion: generalizacion_desde_caso_extremo
funcion: convertir el caso de Crowley en entrada hacia un patrón humano más amplio
```

---

## SEC_02 — Generalización desde criminales

```yaml
section_id: SEC_02
rango_textual: paginas 32-33
forma_superficial: acumulacion_de_casos_criminales_y_testimonio_carcelario
operacion_expositiva: generalizacion_desde_caso_extremo
responsabilidad_cognitiva: mostrar que la autojustificación no es una rareza individual
funcion_macro: convertir la anécdota inicial en patrón humano
soporte_utilizado: casos_criminales + autoridad_penitenciaria
salida_cognitiva: >
  El lector deja de ver a Crowley como excepción y comienza a percibir una regla psicológica.
```

### Análisis

Después de Crowley, el texto introduce otros criminales y la perspectiva de un alcaide. La función no es añadir color histórico; es aumentar el alcance del patrón.

El texto pasa de:

```txt
Crowley no se culpa.
```

a:

```txt
Los criminales, en general, tienden a justificarse.
```

Ese paso es central porque permite que la exposición ascienda desde caso singular hacia fenómeno general.

### Responsabilidad cognitiva

La responsabilidad de esta sección es romper la hipótesis de que la autojustificación es una rareza de un individuo extremo.

### Conexión

```yaml
conecta_con: SEC_03
tipo_de_conexion: abstraccion_de_patron
funcion: preparar la formulación del principio psicológico sobre la crítica
```

---

## SEC_03 — Formulación del principio psicológico contra la crítica

```yaml
section_id: SEC_03
rango_textual: pagina 34
forma_superficial: afirmaciones_generales + autoridad_psicologica + ejemplo_laboral
operacion_expositiva: formulacion_de_principio_y_validacion_psicologica
responsabilidad_cognitiva: explicar por qué la crítica falla
funcion_macro: convertir observaciones en mecanismo explicativo
soporte_utilizado: principio_psicologico + autoridad_cientifica + ejemplo_practico
salida_cognitiva: >
  El lector entiende que la crítica no sólo es desagradable, sino psicológicamente contraproducente.
```

### Análisis

Esta sección realiza una operación nueva: deja de acumular casos y formula el mecanismo. La crítica pone a la persona a la defensiva, hiere su orgullo, afecta su sentido de importancia y genera resentimiento.

La referencia a experimentos y psicólogos da un tipo distinto de soporte. Ya no se trata sólo de historias. La exposición introduce legitimación psicológica.

El ejemplo de los cascos en la obra funciona como microdemostración práctica: ordenar con autoridad produce obediencia resentida; preguntar y explicar produce cooperación.

### Responsabilidad cognitiva

La sección convierte una intuición moral en mecanismo psicológico.

### Conexión

```yaml
conecta_con: SEC_04
tipo_de_conexion: expansion_probatoria
funcion: pasar del principio psicológico a evidencia histórica de gran escala
```

---

## SEC_04 — Acumulación histórica de evidencia

```yaml
section_id: SEC_04
rango_textual: paginas 35-37
forma_superficial: ejemplos_historicos_y_politicos
operacion_expositiva: acumulacion_de_evidencia_historica
responsabilidad_cognitiva: mostrar que la autojustificación aparece incluso en figuras públicas y contextos graves
funcion_macro: ampliar el alcance del principio hacia la historia política
soporte_utilizado: casos_historicos
salida_cognitiva: >
  El lector percibe que la crítica fracasa también en dominios públicos, políticos e institucionales.
```

### Análisis

El texto introduce la disputa Roosevelt-Taft y el escándalo Teapot Dome. El objetivo no es narrar historia política por sí misma. La función expositiva es demostrar que incluso personas poderosas, acusadas o criticadas en contextos graves, tienden a justificarse.

La exposición amplía el dominio:

```txt
criminales
  → políticos
    → funcionarios
      → presidentes
```

Esto refuerza la tesis: no se trata de una anomalía de criminales, sino de un patrón humano amplio.

### Responsabilidad cognitiva

La sección aumenta la plausibilidad de la tesis por diversidad de casos.

### Conexión

```yaml
conecta_con: SEC_05
tipo_de_conexion: contraste_con_modelo_positivo
funcion: pasar de ejemplos de defensa y censura a un caso de autocontrol aprendido
```

---

## SEC_05 — Modelo positivo por transformación biográfica: Lincoln

```yaml
section_id: SEC_05
rango_textual: paginas 37-41
forma_superficial: relato_historico_biografico
operacion_expositiva: modelo_positivo_por_transformacion_biografica
responsabilidad_cognitiva: mostrar que la alternativa a criticar no es pasividad, sino autocontrol aprendido
funcion_macro: introducir un modelo de sabiduría práctica
soporte_utilizado: mini_biografia_ejemplar
salida_cognitiva: >
  El lector entiende que no criticar puede ser una disciplina adquirida, no una debilidad.
```

### Análisis

La sección de Lincoln tiene una subarquitectura interna muy importante:

```txt
Lincoln joven critica
  → la crítica le causa problemas
    → aprende por experiencia amarga
      → enfrenta una ocasión extrema para criticar
        → escribe una carta severa
          → decide no enviarla
```

Esto funciona como modelo positivo porque muestra transformación. Lincoln no aparece simplemente como sabio desde el inicio. Aparece como alguien que aprendió a contener la censura.

### Responsabilidad cognitiva

Esta sección convierte la tesis en conducta imitable. El lector recibe un modelo de autocontrol.

### Conexión

```yaml
conecta_con: SEC_06
tipo_de_conexion: transferencia_practica
funcion: desplazar la pregunta desde figuras históricas hacia el lector
```

---

## SEC_06 — Transferencia pragmática al lector

```yaml
section_id: SEC_06
rango_textual: pagina 42
forma_superficial: interpelacion_directa + consejo_practico + cita + anecdota_personal
operacion_expositiva: transferencia_pragmatica_al_receptor
responsabilidad_cognitiva: pasar de “ellos” a “yo”
funcion_macro: convertir el principio general en tarea personal
soporte_utilizado: pregunta_directa + proverbio + experiencia_personal
salida_cognitiva: >
  El lector deja de observar casos externos y queda implicado como posible agente de crítica.
```

### Análisis

Aquí ocurre un cambio decisivo de escala. Antes el lector observa criminales, políticos, escritores y figuras históricas. Ahora el texto lo interpela directamente: si quiere modificar a alguien, debería comenzar por sí mismo.

La anécdota personal del autor refuerza esa transferencia. Carnegie no se coloca como juez externo, sino como alguien que también cometió errores y sufrió el efecto duradero de una crítica.

### Responsabilidad cognitiva

El lector pasa de espectador de ejemplos a sujeto implicado.

### Conexión

```yaml
conecta_con: SEC_07
tipo_de_conexion: fundamentacion_antropologica
funcion: reforzar por qué el consejo es necesario al tratar con personas
```

---

## SEC_07 — Reformulación antropológica: las personas son emotivas

```yaml
section_id: SEC_07
rango_textual: pagina 43
forma_superficial: afirmacion_general + ejemplos_literarios + maxima_practica
operacion_expositiva: reformulacion_antropologica_del_principio
responsabilidad_cognitiva: explicar que tratar con personas exige partir de emoción, orgullo y vanidad
funcion_macro: dar base humanista a la regla práctica
soporte_utilizado: principio_antropologico + ejemplos_de_consecuencias_de_la_critica
salida_cognitiva: >
  El lector comprende que la crítica falla porque las personas no operan como entidades puramente lógicas.
```

### Análisis

Esta sección condensa una idea antropológica central: al tratar con personas no tratamos con seres puramente racionales, sino con seres emotivos, orgullosos y vulnerables al juicio.

La sección también introduce ejemplos de daño producido por críticas severas en escritores, y presenta a Franklin como modelo de diplomacia verbal.

### Responsabilidad cognitiva

La sección da profundidad psicológica y humanista al consejo práctico.

### Conexión

```yaml
conecta_con: SEC_08
tipo_de_conexion: aplicacion_modelo_positivo
funcion: mostrar cómo se ve la comprensión no crítica en una situación grave
```

---

## SEC_08 — Modelo positivo en situación crítica: Hoover

```yaml
section_id: SEC_08
rango_textual: paginas 43-44
forma_superficial: anecdota_ejemplar
operacion_expositiva: modelo_positivo_de_no_critica_en_situacion_de_alto_riesgo
responsabilidad_cognitiva: mostrar cómo actuar sin crítica ante un error grave
funcion_macro: demostrar aplicabilidad del principio en una situación extrema
soporte_utilizado: ejemplo_profesional_de_alto_riesgo
salida_cognitiva: >
  El lector ve que comprender y confiar puede sustituir al reproche incluso ante un error serio.
```

### Análisis

Bob Hoover enfrenta una situación donde la crítica parecería justificable: un error mecánico pudo costar vidas. Sin embargo, la respuesta del piloto no destruye al mecánico con censura. El ejemplo funciona como prueba positiva.

La exposición ya no sólo dice que criticar es inútil. Muestra una conducta alternativa.

### Responsabilidad cognitiva

El lector observa un modelo concreto de aplicación.

### Conexión

```yaml
conecta_con: SEC_09
tipo_de_conexion: desplazamiento_a_interiorizacion_emocional
funcion: pasar de aplicación profesional a experiencia íntima familiar
```

---

## SEC_09 — Interiorización emocional: “Papá olvida”

```yaml
section_id: SEC_09
rango_textual: paginas 44-47
forma_superficial: mini_historia_emocional_incrustada
operacion_expositiva: interiorizacion_emocional_del_principio
responsabilidad_cognitiva: hacer sentir el daño cotidiano de la crítica
funcion_macro: trasladar la tesis desde casos externos hacia la intimidad familiar
soporte_utilizado: relato_confesional_emocional
salida_cognitiva: >
  El lector puede reconocerse emocionalmente como alguien que critica, exige o hiere sin advertirlo.
```

### Análisis

La pieza “Papá olvida” tiene una función especial. No introduce simplemente otro ejemplo. Cambia el modo de procesamiento: de demostración a identificación emocional.

Hasta aquí el lector podía aceptar racionalmente que la crítica es dañina. Esta sección busca que lo sienta. La escena del padre que reconoce su dureza cotidiana con el hijo convierte el principio en experiencia afectiva.

La función no es informativa, sino interiorizadora.

### Responsabilidad cognitiva

La sección transforma comprensión en remordimiento reparador.

### Conexión

```yaml
conecta_con: SEC_10
tipo_de_conexion: normativizacion_desde_experiencia_emocional
funcion: convertir el reconocimiento emocional en regla final
```

---

## SEC_10 — Normativización final

```yaml
section_id: SEC_10
rango_textual: pagina 47
forma_superficial: regla_practica_final + cita_de_apoyo
operacion_expositiva: normativizacion_final
responsabilidad_cognitiva: fijar el aprendizaje como regla memorable
funcion_macro: cierre normativo del capítulo
soporte_utilizado: regla + principio_de_comprension
salida_cognitiva: >
  El lector recibe una formulación final aplicable: sustituir crítica por comprensión.
```

### Análisis

El cierre transforma toda la trayectoria en norma práctica. La regla final no aparece como una frase aislada; es el resultado acumulado de la arquitectura previa.

El capítulo concluye desplazando al lector desde el juicio hacia la comprensión.

### Responsabilidad cognitiva

La exposición termina como principio conductual.

---

## 4. Agrupamientos detectados

## GRP_01 — Evidencia negativa de autojustificación

```yaml
group_id: GRP_01
nombre: evidencia_negativa_de_autojustificacion
secciones: [SEC_01, SEC_02, SEC_04]
criterio_de_agrupamiento: casos donde alguien criticable se defiende o justifica
funcion_en_la_trayectoria: mostrar que la crítica no produce reconocimiento de culpa
```

Incluye criminales, políticos y figuras públicas. El agrupamiento muestra amplitud del patrón.

---

## GRP_02 — Explicación psicológica del mecanismo

```yaml
group_id: GRP_02
nombre: explicacion_psicologica_del_mecanismo
secciones: [SEC_03, SEC_07]
criterio_de_agrupamiento: formulaciones generales sobre orgullo, resentimiento, emoción y vanidad
funcion_en_la_trayectoria: explicar por qué la crítica fracasa
```

Este agrupamiento aporta la base conceptual de la tesis.

---

## GRP_03 — Modelos positivos de no crítica

```yaml
group_id: GRP_03
nombre: modelos_positivos_de_no_critica
secciones: [SEC_05, SEC_08]
criterio_de_agrupamiento: ejemplos de personas que contienen el impulso de censurar
funcion_en_la_trayectoria: mostrar alternativas conductuales imitables
```

Lincoln y Hoover no sólo son ejemplos: son modelos prácticos.

---

## GRP_04 — Conversión del lector

```yaml
group_id: GRP_04
nombre: conversion_del_lector
secciones: [SEC_06, SEC_09, SEC_10]
criterio_de_agrupamiento: tramos que desplazan el principio hacia la conducta del lector
funcion_en_la_trayectoria: convertir tesis externa en regla interiorizada
```

Este agrupamiento es decisivo porque transforma el capítulo en experiencia práctica.

---

## 5. Transiciones principales

## TR_01 — De caso extremo a patrón general

```yaml
transition_id: TR_01
from: SEC_01
to: SEC_02
tipo_de_transicion: caso_a_patron
funcion: evitar que Crowley sea leído como excepción
cambio_cognitivo: el lector pasa de observar un criminal a reconocer una tendencia humana
```

---

## TR_02 — De criminales a personas comunes

```yaml
transition_id: TR_02
from: SEC_02
to: SEC_03
tipo_de_transicion: universalizacion
funcion: extender la autojustificación desde criminales hacia cualquier persona
cambio_cognitivo: el lector comprende que el mecanismo no pertenece sólo a delincuentes
```

---

## TR_03 — De casos a mecanismo

```yaml
transition_id: TR_03
from: SEC_02
to: SEC_03
tipo_de_transicion: abstraccion_explicativa
funcion: convertir ejemplos en principio psicológico
cambio_cognitivo: el lector entiende por qué la crítica produce defensa
```

---

## TR_04 — De principio a evidencia histórica

```yaml
transition_id: TR_04
from: SEC_03
to: SEC_04
tipo_de_transicion: validacion_por_amplitud
funcion: mostrar el principio en contextos políticos e históricos
cambio_cognitivo: el lector percibe mayor alcance de la tesis
```

---

## TR_05 — De evidencia negativa a modelo positivo

```yaml
transition_id: TR_05
from: SEC_04
to: SEC_05
tipo_de_transicion: negativo_a_positivo
funcion: pasar de fracaso de la crítica a aprendizaje del autocontrol
cambio_cognitivo: el lector deja de ver sólo lo que falla y recibe una alternativa
```

---

## TR_06 — De figuras históricas al lector

```yaml
transition_id: TR_06
from: SEC_05
to: SEC_06
tipo_de_transicion: externalidad_a_implicacion_personal
funcion: transferir el principio desde modelos externos hacia la conducta del lector
cambio_cognitivo: el lector se vuelve responsable de aplicar la regla
```

---

## TR_07 — De comprensión racional a interiorización emocional

```yaml
transition_id: TR_07
from: SEC_08
to: SEC_09
tipo_de_transicion: razonamiento_a_reconocimiento_afectivo
funcion: hacer sentir el daño cotidiano de la crítica
cambio_cognitivo: el lector ya no sólo entiende; puede reconocerse emocionalmente
```

---

## TR_08 — De experiencia emocional a regla

```yaml
transition_id: TR_08
from: SEC_09
to: SEC_10
tipo_de_transicion: experiencia_a_norma
funcion: convertir el reconocimiento afectivo en regla práctica final
cambio_cognitivo: el lector recibe una fórmula conductual aplicable
```

---

## 6. Grafo expositivo

```txt
SEC_01 Crowley
  función: caso extremo
  conecta_con SEC_02 por generalización

SEC_02 Criminales se justifican
  función: patrón humano
  conecta_con SEC_03 por abstracción explicativa

SEC_03 Crítica provoca defensa
  función: principio psicológico
  conecta_con SEC_04 por validación histórica

SEC_04 Roosevelt, Taft, Teapot Dome
  función: acumulación histórica
  conecta_con SEC_05 por contraste con modelo positivo

SEC_05 Lincoln
  función: modelo positivo de autocontrol
  conecta_con SEC_06 por transferencia al lector

SEC_06 Empezar por uno mismo
  función: implicación personal
  conecta_con SEC_07 por fundamentación antropológica

SEC_07 Personas emotivas
  función: base psicológica-humanista
  conecta_con SEC_08 por aplicación positiva

SEC_08 Hoover
  función: aplicación en situación grave
  conecta_con SEC_09 por interiorización emocional

SEC_09 Papá olvida
  función: identificación afectiva
  conecta_con SEC_10 por normativización

SEC_10 Regla final
  función: cierre práctico
```

---

## 7. Trayectoria expositiva completa

```yaml
trayectoria_expositiva:
  estado_inicial: >
    El lector puede creer que la crítica es una forma razonable de corregir
    errores o mejorar a los demás.

  transformacion_1:
    nombre: caso_extremo_de_autojustificacion
    secciones: [SEC_01]
    efecto: >
      El lector ve que incluso un caso moralmente extremo puede producir
      autojustificación.

  transformacion_2:
    nombre: generalizacion_del_patron
    secciones: [SEC_02]
    efecto: >
      El lector entiende que la autojustificación no es excepción, sino tendencia.

  transformacion_3:
    nombre: explicacion_psicologica_del_fracaso_de_la_critica
    secciones: [SEC_03, SEC_07]
    efecto: >
      El lector entiende que la crítica activa defensa, orgullo herido y resentimiento.

  transformacion_4:
    nombre: validacion_por_acumulacion
    secciones: [SEC_04]
    efecto: >
      El lector percibe que el patrón aparece en dominios históricos y políticos.

  transformacion_5:
    nombre: introduccion_de_modelos_positivos
    secciones: [SEC_05, SEC_08]
    efecto: >
      El lector observa formas concretas de actuar sin censurar.

  transformacion_6:
    nombre: transferencia_al_lector
    secciones: [SEC_06]
    efecto: >
      El lector deja de mirar a otros y comienza a revisar su propia conducta.

  transformacion_7:
    nombre: interiorizacion_emocional
    secciones: [SEC_09]
    efecto: >
      El lector siente el daño de la crítica en una escena íntima y cotidiana.

  estado_final: >
    El lector recibe una regla práctica: evitar crítica, condena y queja;
    sustituirlas por comprensión, autocontrol y simpatía.
```

---

## 8. Forma profunda de la exposición

El capítulo puede nombrarse funcionalmente como:

```txt
demostracion_practica_por_acumulacion_de_casos_y_conversion_del_receptor
```

También puede describirse así:

```txt
exposicion_persuasiva_por_casos_con_interiorizacion_emocional_y_regla_final
```

La forma profunda no es solamente:

```txt
casos + consejo
```

sino:

```txt
casos externos
  → principio psicológico
    → modelos de autocontrol
      → implicación personal
        → experiencia emocional
          → regla conductual
```

---

## 9. Validación del análisis

```yaml
validacion:
  cobertura_textual: alta
  coherencia_de_trayectoria: alta
  estructura_dominante: exposicion_persuasiva_practica
  estructuras_locales:
    - relato_ejemplar
    - acumulacion_de_casos
    - explicacion_psicologica
    - validacion_por_autoridad
    - modelo_positivo
    - interpelacion_directa
    - mini_historia_emocional
    - regla_final
  ambiguedades:
    - Algunos casos históricos podrían clasificarse también como evidencia argumentativa.
    - La sección de Lincoln puede funcionar simultáneamente como relato biográfico y modelo positivo.
    - “Papá olvida” puede clasificarse como mini-historia emocional, exemplum moral o interiorización afectiva.
  confianza: alta
```

---

## 10. Conclusión analítica

El capítulo no sólo expone una regla. Construye una conversión progresiva del lector.

Primero muestra que incluso un criminal extremo se justifica. Luego amplía el patrón hacia otros criminales, políticos y figuras públicas. Después formula un principio psicológico: la crítica hiere, defiende y genera resentimiento. Más tarde introduce modelos positivos de autocontrol, desplaza la responsabilidad hacia el lector, produce una escena de interiorización emocional y termina con una regla práctica.

La arquitectura expositiva completa puede resumirse así:

```txt
observación extrema
  → patrón humano
    → mecanismo psicológico
      → validación histórica
        → modelo positivo
          → implicación personal
            → interiorización emocional
              → regla práctica
```

La función global del capítulo es transformar una intuición común:

```txt
criticar ayuda a corregir
```

en una regla práctica contraria:

```txt
criticar suele dañar; comprender es más eficaz.
```
