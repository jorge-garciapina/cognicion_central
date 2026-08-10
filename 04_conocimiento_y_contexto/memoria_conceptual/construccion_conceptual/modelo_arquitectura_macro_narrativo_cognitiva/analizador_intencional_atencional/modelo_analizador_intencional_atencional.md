# Modelo especializado: `analizador_intencional_atencional`

**Ubicación dentro del MAANC:** Módulo 8  
**Nombre operativo:** `analizador_intencional_atencional`  
**Tipo de módulo:** analizador de conducción intencional-atencional  
**Función general:** reconstruir cómo una manifestación organiza intenciones discursivas y focos de atención para transformar el estado interpretativo del receptor.  
**Modo de uso:** análisis de textos existentes y diseño/generación de manifestaciones nuevas.

---

## 0. Propósito del documento

Este documento describe el modelo general del `analizador_intencional_atencional` sin aplicarlo a ningún texto particular. Su función es servir como plantilla reutilizable para analizar capítulos de libros, artículos, ensayos, transcripciones, guiones, carousels, videos cortos, clases, conferencias o cualquier manifestación discursiva dentro de la arquitectura ACCD / MAANC.

El modelo no debe confundirse con una taxonomía superficial de partes textuales. Su tarea es reconstruir la **ingeniería interna de conducción mental** que una manifestación ejerce sobre el receptor.

---

## 1. Definición general

El `analizador_intencional_atencional` es el módulo encargado de reconstruir la trayectoria de intenciones discursivas y operaciones atencionales mediante las cuales una manifestación conduce al receptor desde un estado interpretativo inicial hacia un estado interpretativo final.

En forma breve:

```txt
analizador_intencional_atencional =
modelo de la conducción mental del receptor
```

En forma completa:

```txt
analizador_intencional_atencional =
módulo que identifica la intención global de una manifestación,
las intenciones locales de sus secciones y subsecciones,
los focos atencionales que se abren, sostienen, desplazan o clausuran,
las operaciones que modifican dichos focos,
y los estados atencionales que atraviesa el receptor durante el recorrido.
```

Dentro del MAANC, este módulo responde una pregunta central:

```txt
¿Qué quiere hacer el texto con la atención del receptor,
y mediante qué intenciones discursivas organiza ese recorrido?
```

---

## 2. Problema que resuelve

Sin este módulo, el análisis de arquitectura macro puede quedar reducido a una estructura formal demasiado pobre:

```txt
introducción → desarrollo → conclusión
```

o:

```txt
apertura → contraste → resolución
```

Aunque esos nombres pueden ser útiles, no explican qué ocurre con la mente del receptor. Dos textos pueden tener una misma estructura aparente, pero conducir la atención de maneras radicalmente distintas.

El `analizador_intencional_atencional` resuelve esa insuficiencia al preguntar:

```txt
1. ¿Qué intención tiene cada tramo?
2. ¿Qué foco mental instala?
3. ¿Qué operación realiza sobre ese foco?
4. ¿Qué estado atencional produce?
5. ¿Cómo se conecta ese estado con el anterior y el siguiente?
6. ¿Cómo contribuye esa sección a la intención global?
```

Su función no es etiquetar secciones, sino explicar **cómo una manifestación conduce, administra y transforma la atención**.

---

## 3. Fundamento teórico integrado

El modelo se apoya en varias tradiciones teóricas, pero las traduce al lenguaje operativo de la ACCD.

### 3.1. Grosz y Sidner: intención y atención en el discurso

La teoría de Grosz y Sidner permite entender el discurso como una estructura organizada por intenciones y estados atencionales. Esta fuente aporta la idea de que una manifestación no es sólo una cadena de enunciados, sino una organización de propósitos, focos y cambios de atención.

**Tarea dentro del módulo:** reconstruir intención global, intención local y foco atencional.

### 3.2. Centering Theory: continuidad y cambio de foco

La Centering Theory ayuda a pensar cómo un discurso mantiene coherencia local mediante continuidad, cambio y recuperación de entidades o focos centrales.

**Tarea dentro del módulo:** analizar cambios de foco, focos sostenidos, focos desplazados y rupturas de continuidad.

### 3.3. Rhetorical Structure Theory

La RST permite comprender que las partes de un texto cumplen funciones relacionales: elaborar, justificar, contrastar, preparar, motivar, evidenciar, resumir.

**Tarea dentro del módulo:** conectar intención discursiva con relación funcional entre secciones.

### 3.4. Event Segmentation Theory

La segmentación de eventos ayuda a detectar límites funcionales no sólo por subtítulos o marcas tipográficas, sino por cambios de operación, objetivo, foco o estado cognitivo.

**Tarea dentro del módulo:** identificar cambios reales de sección desde el punto de vista atencional.

### 3.5. Situation Models

Los modelos de situación permiten pensar la comprensión como actualización progresiva de un modelo mental.

**Tarea dentro del módulo:** describir cómo cada tramo cambia el estado interpretativo del receptor.

### 3.6. ACCD / TMC

La ACCD aporta el marco de familias cognitivas, responsabilidades funcionales, arquitectura macro y manifestación codominial.

**Tarea dentro del módulo:** integrar la lectura intencional-atencional con secciones, subsecciones, familias cognitivas, mNodes y arquitectura macro.

---

## 4. Distinciones fundamentales

El modelo se sostiene sobre la separación de tres conceptos: **intención discursiva**, **foco atencional** y **operación atencional**.

---

## 4.1. Intención discursiva

La intención discursiva responde:

```txt
¿Para qué existe esta unidad dentro del texto?
```

No debe confundirse con el tema. Una sección puede hablar de un caso histórico, pero su intención puede ser demostrar, desestabilizar, ejemplificar, crear autoridad, inducir identificación o preparar una inferencia.

Ejemplos de intención discursiva:

```txt
abrir problema
producir shock
contextualizar
definir
distinguir
ejemplificar
contrastar
probar
refutar
generalizar
reencuadrar
inducir autoimplicación
formular regla
proyectar continuidad
```

Una mala formulación sería:

```txt
intencion_discursiva: hablar de X
```

Una buena formulación sería:

```txt
intencion_discursiva: introducir X para desplazar la interpretación inicial del receptor hacia una distinción más precisa
```

---

## 4.2. Foco atencional

El foco atencional responde:

```txt
¿Sobre qué objeto mental debe concentrarse el receptor en este momento?
```

El foco puede ser:

```txt
una idea
una tensión
una escena
una diferencia
una objeción
una consecuencia
una pregunta
un ejemplo
una relación causal
una emoción
una imagen mental
una categoría
```

Una mala formulación sería:

```txt
foco_atencional: el tema general
```

Una buena formulación sería:

```txt
foco_atencional:
  tipo: foco_contrastivo
  objeto: diferencia entre dos interpretaciones que el lector podría confundir
```

---

## 4.3. Operación atencional

La operación atencional responde:

```txt
¿Qué se le hace al foco?
```

Puede abrirse, sostenerse, intensificarse, desplazarse, dividirse, descomprimirse, reencuadrarse o clausurarse.

Ejemplos:

```txt
abrir_foco
capturar_foco
focalizar
mantener_foco
desplazar_foco
expandir_foco
contraer_foco
intensificar_foco
descomprimir_foco
recuperar_foco
reencuadrar_foco
cerrar_foco
proyectar_foco
```

---

## 5. Niveles de análisis

El módulo opera en cuatro niveles.

```txt
nivel global
  → intención global y foco global

nivel macroseccional
  → intención y foco de cada sección mayor

nivel subseccional
  → responsabilidad local de ejemplos, analogías, inferencias, mini-historias, transiciones

nivel transicional
  → operaciones entre una unidad y otra
```

---

## 5.1. Nivel global

Pregunta:

```txt
¿Qué transformación general busca producir la manifestación en el receptor?
```

Debe producir:

```yaml
intencion_global:
  formulacion:
  tipo:
  estrategia_dominante:
  estado_receptor_inicial:
  estado_receptor_final:
```

Ejemplos de tipos globales:

```txt
persuasion_practica
explicacion_conceptual
reencuadre_psicologico
demostracion_metodologica
apertura_investigativa
formacion_de_criterio
conversion_de_actitud
activacion_de_accion
```

---

## 5.2. Nivel macroseccional

Pregunta:

```txt
¿Qué intención cumple esta sección dentro de la trayectoria global?
```

Debe producir:

```yaml
seccion_macro:
  section_id:
  nombre_funcional:
  responsabilidad_intencional:
  foco_atencional:
  operacion_atencional_dominante:
  estado_atencional_de_entrada:
  estado_atencional_de_salida:
  relacion_con_trayectoria_global:
```

---

## 5.3. Nivel subseccional

Pregunta:

```txt
¿Qué operación local realiza esta unidad dentro de la sección?
```

Debe producir:

```yaml
subseccion:
  subsection_id:
  funcion_local:
  microfoco:
  operacion_local:
  efecto_en_receptor:
```

Una subsección puede ser:

```txt
ejemplo
mini-historia
analogía
cita de autoridad
contraejemplo
pregunta retórica
inferencias
recapitulación
formulación de regla
escena concreta
transición
```

---

## 5.4. Nivel transicional

Pregunta:

```txt
¿Cómo cambia la atención entre una unidad y otra?
```

Debe producir:

```yaml
transicion:
  from:
  to:
  tipo_de_transicion:
  cambio_de_foco:
  continuidad:
  ruptura:
  riesgo:
  mecanismo_de_estabilizacion:
```

---

## 6. Variables analíticas

El módulo debe evaluar variables, no sólo asignar etiquetas.

```yaml
variables_intencional_atencionales:
  apertura_de_foco:
  estabilidad_de_foco:
  intensidad_atencional:
  carga_cognitiva:
  carga_emocional:
  grado_de_tension:
  grado_de_identificacion:
  grado_de_generalizacion:
  grado_de_resistencia_prevista:
  grado_de_descompresion:
  continuidad_atencional:
  clausura_atencional:
```

---

## 6.1. `apertura_de_foco`

Mide cuánto abre una unidad un nuevo campo de atención.

Escala sugerida:

```txt
baja   → apenas introduce una variación menor
media  → abre un objeto nuevo pero conectado
alta   → instala un nuevo campo atencional dominante
```

---

## 6.2. `estabilidad_de_foco`

Mide si el texto sostiene el mismo objeto de atención o cambia constantemente.

```txt
baja   → cambios frecuentes sin estabilización
media  → cambios controlados
alta   → foco estable con variaciones subordinadas
```

---

## 6.3. `intensidad_atencional`

Mide fuerza de captura, sorpresa, tensión, energía o prominencia.

```txt
baja   → lectura tranquila
media  → atención sostenida
alta   → captura fuerte, shock, tensión o escena memorable
```

---

## 6.4. `carga_cognitiva`

Mide dificultad conceptual.

```txt
baja   → fácil de seguir
media  → exige atención moderada
alta   → requiere abstracción, memoria de relaciones o procesamiento complejo
```

---

## 6.5. `carga_emocional`

Mide presencia de afecto, vergüenza, culpa, admiración, indignación, ternura, miedo o empatía.

---

## 6.6. `grado_de_tension`

Mide conflicto interpretativo.

Puede haber tensión por:

```txt
contradicción moral
oposición conceptual
problema no resuelto
expectativa abierta
pregunta pendiente
objeción activa
```

---

## 6.7. `grado_de_identificacion`

Mide si el receptor se ve implicado.

```txt
bajo   → observa desde fuera
medio  → reconoce una posible relación
alto   → se siente incluido, aludido o afectado
```

---

## 6.8. `grado_de_generalizacion`

Mide si el texto pasa de casos particulares a regla general.

---

## 6.9. `grado_de_resistencia_prevista`

Mide si el texto anticipa objeciones o resistencia del receptor.

---

## 6.10. `grado_de_descompresion`

Mide si una unidad reduce tensión, abstracción o carga cognitiva.

---

## 6.11. `continuidad_atencional`

Mide si el foco avanza sin ruptura injustificada.

---

## 6.12. `clausura_atencional`

Mide si el foco abierto queda cerrado, resuelto, rematado o proyectado.

---

## 7. Estados atencionales especializados

El modelo usa estados atencionales para describir la trayectoria del receptor.

```yaml
estados_atencionales:
  A0_atencion_no_activada:
  A1_atencion_capturada:
  A2_atencion_intrigada:
  A3_atencion_en_disonancia:
  A4_atencion_focalizada:
  A5_atencion_expandida:
  A6_atencion_generalizante:
  A7_atencion_reflexiva:
  A8_atencion_identificatoria:
  A9_atencion_emocionalizada:
  A10_atencion_normativizada:
  A11_atencion_clausurada:
  A12_atencion_proyectada:
```

---

## 7.1. `A0_atencion_no_activada`

Estado previo a la apertura. El receptor todavía no está orientado hacia el problema o foco central.

---

## 7.2. `A1_atencion_capturada`

El receptor ha sido capturado por una escena, tensión, afirmación fuerte, pregunta o anomalía.

---

## 7.3. `A2_atencion_intrigada`

El receptor quiere saber cómo se resolverá algo, pero aún no hay tensión fuerte.

---

## 7.4. `A3_atencion_en_disonancia`

El receptor sostiene simultáneamente elementos incompatibles o tensionados.

---

## 7.5. `A4_atencion_focalizada`

El receptor ya sabe cuál es el objeto preciso de atención.

---

## 7.6. `A5_atencion_expandida`

El foco se amplía a más casos, dominios, ejemplos o implicaciones.

---

## 7.7. `A6_atencion_generalizante`

El receptor empieza a ver un patrón general detrás de casos particulares.

---

## 7.8. `A7_atencion_reflexiva`

El receptor analiza el mecanismo, causa, principio o regla detrás de lo mostrado.

---

## 7.9. `A8_atencion_identificatoria`

El receptor se reconoce implicado o reconoce una situación cercana.

---

## 7.10. `A9_atencion_emocionalizada`

El foco adquiere carga afectiva fuerte.

---

## 7.11. `A10_atencion_normativizada`

El texto transforma el recorrido en principio, regla, criterio o mandato práctico.

---

## 7.12. `A11_atencion_clausurada`

El foco queda cerrado o estabilizado.

---

## 7.13. `A12_atencion_proyectada`

El foco no se cierra del todo, sino que se orienta hacia una continuación.

---

## 8. Biblioteca de operaciones atencionales

El módulo debe trabajar con operaciones finas. Esta biblioteca puede ampliarse, pero sirve como base.

```yaml
operaciones_atencionales:
  abrir_foco:
  capturar_foco:
  secuestrar_atencion:
  focalizar:
  mantener_foco:
  expandir_foco:
  contraer_foco:
  desplazar_foco:
  reencuadrar_foco:
  intensificar_foco:
  descomprimir_foco:
  recuperar_foco:
  dividir_foco:
  fusionar_focos:
  contrastar_focos:
  generalizar_foco:
  particularizar_foco:
  emocionalizar_foco:
  normativizar_foco:
  cerrar_foco:
  proyectar_foco:
```

---

## 8.1. `abrir_foco`

Instala un objeto de atención que antes no estaba activo.

---

## 8.2. `capturar_foco`

Produce una entrada fuerte que obliga al receptor a mirar.

---

## 8.3. `secuestrar_atencion`

Captura intensa mediante shock, escena extrema, contradicción o promesa fuerte.

---

## 8.4. `focalizar`

Reduce un campo amplio a un objeto preciso.

---

## 8.5. `mantener_foco`

Sostiene el mismo objeto de atención a través de variaciones.

---

## 8.6. `expandir_foco`

Amplía el campo hacia más casos, dominios o implicaciones.

---

## 8.7. `contraer_foco`

Reduce la amplitud para concentrar la atención en un elemento puntual.

---

## 8.8. `desplazar_foco`

Mueve la atención de un objeto a otro.

---

## 8.9. `reencuadrar_foco`

Cambia la interpretación del mismo objeto.

---

## 8.10. `intensificar_foco`

Aumenta tensión, importancia, energía o urgencia.

---

## 8.11. `descomprimir_foco`

Reduce tensión, densidad o carga cognitiva.

---

## 8.12. `recuperar_foco`

Retoma un foco anterior para evitar pérdida de continuidad.

---

## 8.13. `dividir_foco`

Hace que el receptor atienda a dos elementos simultáneos.

---

## 8.14. `fusionar_focos`

Integra elementos previamente separados.

---

## 8.15. `contrastar_focos`

Coloca dos objetos en oposición significativa.

---

## 8.16. `generalizar_foco`

Pasa de caso local a patrón general.

---

## 8.17. `particularizar_foco`

Pasa de regla general a caso concreto.

---

## 8.18. `emocionalizar_foco`

Carga el foco con afecto.

---

## 8.19. `normativizar_foco`

Convierte el recorrido en regla, principio, criterio o mandato.

---

## 8.20. `cerrar_foco`

Clausura la atención abierta.

---

## 8.21. `proyectar_foco`

Abre continuidad hacia otra sección, pieza, problema o acción.

---

## 9. Taxonomía de intenciones discursivas

```yaml
intenciones_discursivas:
  apertura:
  focalizacion:
  contextualizacion:
  problematizacion:
  definicion:
  distincion:
  ejemplificacion:
  analogizacion:
  narrativizacion:
  contraste:
  objecion:
  refutacion:
  justificacion:
  demostracion:
  inferencia:
  generalizacion:
  particularizacion:
  recapitulacion:
  sintesis:
  transicion:
  intensificacion:
  descompresion:
  cierre:
  remate:
  proyeccion:
```

Cada intención debe formularse siempre como una operación, no como un tema.

Incorrecto:

```yaml
intencion_discursiva: hablar de autoridad
```

Correcto:

```yaml
intencion_discursiva: introducir autoridad para legitimar una inferencia previamente formulada
```

---

## 10. Taxonomía de focos atencionales

```yaml
focos_atencionales:
  foco_tematico:
  foco_conceptual:
  foco_problematico:
  foco_contrastivo:
  foco_causal:
  foco_agentivo:
  foco_procedimental:
  foco_ejemplificativo:
  foco_emocional:
  foco_argumentativo:
  foco_metadiscursivo:
  foco_proyectivo:
  foco_moral:
  foco_psicologico:
  foco_historico:
  foco_pragmatico:
```

El foco debe formularse con objeto específico.

Incorrecto:

```yaml
foco_atencional: la crítica
```

Correcto:

```yaml
foco_atencional:
  tipo: foco_causal_psicologico
  objeto: relación entre una crítica recibida y la activación defensiva del interlocutor
```

---

## 11. Criterios de segmentación intencional-atencional

Una nueva sección o subsección se justifica cuando ocurre al menos uno de estos cambios:

```txt
1. cambia la intención discursiva dominante;
2. cambia el foco atencional principal;
3. cambia el estado atencional del receptor;
4. aparece una nueva operación atencional dominante;
5. cambia la escala del análisis;
6. se pasa de caso a regla o de regla a caso;
7. se introduce una objeción, contraste o reencuadre;
8. se abre o se cierra una tensión;
9. se produce una descompresión o intensificación clara;
10. aparece una transición funcional hacia otra fase del texto.
```

---

## 12. Salida formal del módulo

La salida recomendada es:

```yaml
analisis_intencional_atencional:
  identidad_del_analisis:
    texto:
    unidad_analizada:
    objetivo_del_modulo:

  intencion_global:
    formulacion:
    tipo:
    estrategia_dominante:
    estado_receptor_inicial:
    estado_receptor_final:

  foco_global:
    objeto_de_atencion:
    tipo:
    tension_central:
    desplazamiento_principal:
    clausura_o_proyeccion:

  trayectoria_atencional:
    curva:
      - estado:
        seccion:
        operacion:
        funcion:
        evidencia:

  secciones_macro:
    - section_id:
      rango:
      nombre_funcional:
      responsabilidad_intencional:
      foco_atencional:
      operacion_atencional_dominante:
      estado_atencional_de_entrada:
      estado_atencional_de_salida:
      demanda_cognitiva:
      carga_emocional:
      tension:
      relacion_con_trayectoria_global:
      subsecciones:
        - subsection_id:
          funcion_local:
          microfoco:
          operacion_local:
          efecto_en_receptor:

  transiciones:
    - from:
      to:
      tipo_de_transicion:
      cambio_de_foco:
      continuidad:
      riesgo:
      mecanismo_de_estabilizacion:

  diagnostico:
    focos_abiertos:
    focos_cerrados:
    focos_recurrentes:
    zonas_de_saturacion:
    zonas_de_descompresion:
    puntos_de_autoimplicacion:
    grado_de_control_atencional:
    coherencia_intencional:
```

---

## 13. Procedimiento operativo

### Paso 1. Identificar unidad de análisis

Determinar si se analizará capítulo, sección, ensayo, guion, transcripción, clase o pieza completa.

### Paso 2. Detectar intención global preliminar

Formular qué transformación general busca producir el texto.

### Paso 3. Detectar foco global

Identificar el objeto mental central alrededor del cual se organiza la atención.

### Paso 4. Segmentar por cambios de intención y foco

Dividir el texto según cambios reales de operación, no sólo por títulos visibles.

### Paso 5. Analizar cada sección

Para cada sección:

```txt
intención
foco
operación
estado de entrada
estado de salida
demanda cognitiva
carga emocional
tensión
relación con trayectoria global
```

### Paso 6. Analizar subsecciones

Detectar ejemplos, analogías, citas, historias, argumentos, transiciones, recapitulaciones y microcierres.

### Paso 7. Construir trayectoria atencional

Ordenar los estados producidos por cada sección.

### Paso 8. Diagnosticar continuidad

Verificar si los focos se sostienen, se desplazan correctamente o quedan abiertos sin cierre.

### Paso 9. Integrar con arquitectura macro

Relacionar la curva atencional con la trayectoria narrativo-cognitiva general.

### Paso 10. Producir salida YAML/MD

Entregar el análisis con estructura trazable.

---

## 14. Criterios de calidad

Una buena aplicación del módulo cumple estos criterios:

```txt
1. No confunde tema con intención.
2. No confunde tema con foco atencional.
3. Formula intenciones como operaciones funcionales.
4. Identifica cambios reales de foco.
5. Detecta estados atencionales de entrada y salida.
6. Explica la función de subsecciones.
7. Reconstruye transiciones entre secciones.
8. Detecta zonas de intensidad, saturación y descompresión.
9. Identifica puntos de autoimplicación del receptor.
10. Relaciona cada sección con la intención global.
11. Integra la salida con arquitectura macro.
12. Puede reutilizarse para textos distintos.
```

---

## 15. Errores frecuentes

### Error 1. Etiquetar por tema

```yaml
incorrecto:
  intencion: hablar de un caso histórico
```

Debe corregirse a:

```yaml
correcto:
  intencion: usar un caso histórico para producir evidencia, autoridad o transferencia de patrón
```

### Error 2. Reducir la atención a interés

Atención no significa sólo “captar interés”. También incluye sostener, focalizar, desplazar, descomprimir, cerrar y proyectar.

### Error 3. Hacer segmentación tipográfica

Los títulos no siempre coinciden con cambios funcionales.

### Error 4. Confundir emoción con decoración

La carga emocional puede cumplir funciones estructurales: autoimplicación, cierre, intensificación o normativización.

### Error 5. Ignorar transiciones

Las transiciones son zonas críticas porque ahí se mueve la atención.

---

## 16. Relación con otros módulos del MAANC

### Con `extractor_de_macroestructura`

El extractor dice cuál es el sentido global; este módulo dice cómo se instala ese sentido en la atención.

### Con `segmentador_funcional`

El segmentador detecta límites; este módulo explica qué cambio de intención o foco justifica esos límites.

### Con `constructor_de_trayectoria_narrativa`

La trayectoria narrativa describe evolución; este módulo describe la conducción de atención dentro de esa evolución.

### Con `analizador_de_relaciones_retóricas`

RST detecta relaciones; este módulo traduce esas relaciones en efectos sobre foco y estado atencional.

### Con `modelador_de_situacion_cognitiva`

El modelador de situación explica cambios en representación mental; este módulo explica qué foco permitió esos cambios.

### Con `integrador_ACCD`

El integrador ACCD convierte esta salida en parte de la arquitectura macro, familias cognitivas y procesamiento estructural.

---

## 17. Definición final

```txt
El analizador_intencional_atencional reconstruye el campo atencional interno
 de una manifestación: identifica qué intención global gobierna el texto,
qué focos se abren y se cierran, qué operaciones desplazan o intensifican
la atención, qué estados atencionales atraviesa el receptor, y cómo cada
sección o subsección contribuye a transformar su disposición interpretativa.
```

En una frase:

```txt
analizador_intencional_atencional =
mapa de cómo el texto dirige la mente del receptor mientras avanza
```
