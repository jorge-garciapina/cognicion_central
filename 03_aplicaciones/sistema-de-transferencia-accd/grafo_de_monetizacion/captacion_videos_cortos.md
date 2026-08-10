# Configuraciones dimensionales y ensamblajes para `captacion_videos_cortos`

**Ubicación conceptual:**

```txt
grafo_de_monetizacion/
  monetizacion_por_views/
    captacion/
      captacion_videos_cortos/
```

**Propósito del documento:** describir la estructura conceptual propuesta para `captacion_videos_cortos/` como una biblioteca de configuraciones dimensionales y explicar el mecanismo mediante el cual esas configuraciones se combinan para producir ensamblajes operativos.

**Regla base:** este documento no propone valores nuevos para el Grafo de Regiones. Las configuraciones aquí nombradas son orientaciones conceptuales del Grafo de Monetización. En una etapa posterior deberán resolverse como selecciones de campos y valores ya existentes en el Grafo de Regiones.

---

## 1. Descripción base de la estructura propuesta

Sí. La mejora correcta es convertir `captacion_videos_cortos/` en una **biblioteca conceptual de configuraciones dimensionales** y después usar esas configuraciones como piezas combinables dentro de `ensamblajes/`.

La regla principal sería esta: **cada configuración dimensional no inventa valores nuevos del Grafo de Regiones; solo nombra una orientación conceptual que después deberá resolverse como selección de campos y valores existentes**. Esto es coherente con la arquitectura actual: el Grafo de Regiones ya funciona como sistema mayor de dimensiones, campos, valores y restricciones reutilizables, mientras que la Instancia Regional habilita una parte de ese sistema y la Instancia Contextual selecciona valores concretos dentro del espacio habilitado.

Además, las dimensiones que estamos usando no son arbitrarias: corresponden al conjunto ya descrito para `video-corto`, incluyendo identidad operativa, orientación funcional, escala temporal, acoplamiento receptoral, dinámica atencional, construcción del caso, comparecencia, marco de materialización, composición segmental y recursos complementarios.

---

```txt
grafo_de_monetizacion/
  monetizacion_por_views/
    captacion/
      captacion_videos_cortos/
        configuraciones_dimensionales/

          identidad_operativa/
            configuracion_identidad_pieza_autonoma_captativa
            configuracion_identidad_apertura_serial
            configuracion_identidad_pieza_de_reenganche
            configuracion_identidad_pieza_de_prueba
            configuracion_identidad_interaccion_derivada
            configuracion_identidad_pieza_de_profundizacion

          orientacion_funcional_pragmatica/
            configuracion_captacion_por_curiosidad
            configuracion_captacion_por_comprension_rapida
            configuracion_captacion_por_interaccion
            configuracion_captacion_por_continuidad
            configuracion_captacion_por_utilidad_inmediata
            configuracion_captacion_por_promesa_de_profundizacion

          escala_temporal_y_resolucion/
            configuracion_resolucion_rapida_autosuficiente
            configuracion_resolucion_diferida_serial
            configuracion_microcontinuidad
            configuracion_transicion_a_profundizacion
            configuracion_acumulacion_suave_de_contexto
            configuracion_apertura_sin_cierre_total

          dinamica_atencional_y_procesual/
            configuracion_apertura_inmediata
            configuracion_reenganche_atencional
            configuracion_tension_resolucion
            configuracion_exploracion_condensada
            configuracion_sostenimiento_por_continuidad
            configuracion_interrupcion_recompensa

          construccion_del_caso/
            configuracion_caso_por_contraste
            configuracion_caso_por_anomalia
            configuracion_caso_por_patron_replicable
            configuracion_caso_por_mini_historia
            configuracion_caso_por_pregunta_problema
            configuracion_caso_por_demostracion

          acoplamiento_receptoral/
            configuracion_audiencia_fria_general
            configuracion_audiencia_con_interes_latente
            configuracion_audiencia_tecnica_simplificada
            configuracion_audiencia_lista_para_interaccion
            configuracion_audiencia_recurrente
            configuracion_audiencia_lista_para_profundizacion

          comparecencia_performativa/
            configuracion_autoridad_cercana
            configuracion_frontal_directa
            configuracion_demostrativa
            configuracion_narrativa_dramatica
            configuracion_sobria_de_confianza
            configuracion_energia_alta

          marco_de_materializacion/
            configuracion_multiplataforma_equivalente
            configuracion_reel
            configuracion_tiktok
            configuracion_youtube_short
            configuracion_multiplataforma_equivalente
            configuracion_plataforma_pendiente_de_especificacion

          composicion_segmental/
            configuracion_gancho_desarrollo_remate
            configuracion_apertura_contraste_resolucion
            configuracion_microbloques_acumulativos
            configuracion_interrupcion_recompensa
            configuracion_pregunta_promesa_respuesta
            configuracion_cierre_con_llamada_a_interaccion

          recursos_complementarios/
            configuracion_texto_minimo_de_refuerzo
            configuracion_texto_distribuido_de_anclaje
            configuracion_imagen_conceptual_distribuida
            configuracion_audio_puntual_de_refuerzo
            configuracion_recursos_mixtos_controlados
            configuracion_baja_dependencia_de_recursos
```

---

## 2. Lectura conceptual de las configuraciones

Estas configuraciones no son todavía valores. Son **formas de lectura monetizadora** sobre dimensiones que ya existen.

Por ejemplo:

```txt
dinamica_atencional_y_procesual/
  configuracion_apertura_inmediata
```

no significa que acabamos de crear un nuevo valor. Significa:

```txt
Cuando el objetivo económico-operativo sea captar atención por video corto,
esta configuración buscará seleccionar, dentro de la dimensión dinámica atencional,
un perfil compatible con apertura rápida de atención.
```

Lo mismo ocurre con:

```txt
construccion_del_caso/
  configuracion_caso_por_contraste
```

Eso no inventa un nuevo campo narrativo. Solo dice que, cuando se llegue al momento de construir la Instancia Contextual, el sistema deberá buscar dentro de `construccion_del_caso` una selección compatible con contraste, oposición, diferencia o tensión conceptual.

---

## 3. Ensamblajes conceptuales

Ahora los ensamblajes pueden construirse como combinaciones de configuraciones dimensionales.

```txt
grafo_de_monetizacion/
  monetizacion_por_views/
    captacion/
      captacion_videos_cortos/
        ensamblajes/
```

---

```txt
ensamblajes/
  captacion_base_video_corto/
    {
      descripcion: "Configuración general para una pieza breve cuyo objetivo principal es captar atención inicial sin depender de una serie previa ni de interacción posterior obligatoria.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_pieza_autonoma_captativa
        + orientacion_funcional_pragmatica.configuracion_captacion_por_curiosidad
        + escala_temporal_y_resolucion.configuracion_resolucion_rapida_autosuficiente
        + dinamica_atencional_y_procesual.configuracion_apertura_inmediata
        + construccion_del_caso.configuracion_caso_por_pregunta_problema
        + acoplamiento_receptoral.configuracion_audiencia_fria_general
        + comparecencia_performativa.configuracion_frontal_directa
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_gancho_desarrollo_remate
        + recursos_complementarios.configuracion_texto_minimo_de_refuerzo
    }
```

Este ensamblaje sería el equivalente a “video corto de captación estándar”. Sirve cuando el sistema no busca todavía serie, comunidad, venta, curso ni interacción profunda. Solo busca que una pieza entre bien en un campo atencional frío.

---

```txt
ensamblajes/
  captacion_serial_video_corto/
    {
      descripcion: "Configuración para una pieza que no busca resolverlo todo, sino abrir una continuidad atencional hacia piezas futuras.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_apertura_serial
        + orientacion_funcional_pragmatica.configuracion_captacion_por_continuidad
        + escala_temporal_y_resolucion.configuracion_resolucion_diferida_serial
        + dinamica_atencional_y_procesual.configuracion_sostenimiento_por_continuidad
        + construccion_del_caso.configuracion_caso_por_patron_replicable
        + acoplamiento_receptoral.configuracion_audiencia_con_interes_latente
        + comparecencia_performativa.configuracion_autoridad_cercana
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_microbloques_acumulativos
        + recursos_complementarios.configuracion_texto_distribuido_de_anclaje
    }
```

Este ensamblaje sirve cuando la monetización por views no depende de una sola pieza, sino de crear **recurrencia de consumo**. Aquí la pieza no solo debe captar atención; debe dejar una expectativa organizada.

---

```txt
ensamblajes/
  captacion_interactiva_video_corto/
    {
      descripcion: "Configuración para convertir atención inicial en una acción mínima del receptor: comentar, pedir algo, enviar mensaje, guardar o seguir una continuación.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_interaccion_derivada
        + orientacion_funcional_pragmatica.configuracion_captacion_por_interaccion
        + escala_temporal_y_resolucion.configuracion_transicion_a_profundizacion
        + dinamica_atencional_y_procesual.configuracion_exploracion_condensada
        + construccion_del_caso.configuracion_caso_por_demostracion
        + acoplamiento_receptoral.configuracion_audiencia_lista_para_interaccion
        + comparecencia_performativa.configuracion_autoridad_cercana
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_cierre_con_llamada_a_interaccion
        + recursos_complementarios.configuracion_texto_minimo_de_refuerzo
    }
```

Este ensamblaje no busca solamente views pasivas. Busca que el view se vuelva señal: comentario, mensaje, guardado, seguimiento o solicitud de continuación. Dentro de monetización por views, esto puede funcionar como intensificador, porque la interacción puede alimentar redistribución, retorno y segmentación de audiencia.

---

```txt
ensamblajes/
  captacion_por_contraste_video_corto/
    {
      descripcion: "Configuración para captar atención mediante choque conceptual, diferencia inesperada, inversión de expectativa o comparación entre dos estados.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_pieza_autonoma_captativa
        + orientacion_funcional_pragmatica.configuracion_captacion_por_curiosidad
        + escala_temporal_y_resolucion.configuracion_resolucion_rapida_autosuficiente
        + dinamica_atencional_y_procesual.configuracion_tension_resolucion
        + construccion_del_caso.configuracion_caso_por_contraste
        + acoplamiento_receptoral.configuracion_audiencia_fria_general
        + comparecencia_performativa.configuracion_narrativa_dramatica
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_apertura_contraste_resolucion
        + recursos_complementarios.configuracion_imagen_conceptual_distribuida
    }
```

Este ensamblaje es útil cuando el tema permite una oposición fuerte: antes/después, apariencia/realidad, causa aparente/causa real, error común/estructura verdadera, creencia intuitiva/mecanismo oculto.

---

```txt
ensamblajes/
  captacion_por_sintesis_video_corto/
    {
      descripcion: "Configuración para captar atención ofreciendo condensación útil: una idea compleja convertida en una pieza breve, clara y reutilizable.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_pieza_autonoma_captativa
        + orientacion_funcional_pragmatica.configuracion_captacion_por_comprension_rapida
        + escala_temporal_y_resolucion.configuracion_resolucion_rapida_autosuficiente
        + dinamica_atencional_y_procesual.configuracion_exploracion_condensada
        + construccion_del_caso.configuracion_caso_por_patron_replicable
        + acoplamiento_receptoral.configuracion_audiencia_tecnica_simplificada
        + comparecencia_performativa.configuracion_sobria_de_confianza
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_pregunta_promesa_respuesta
        + recursos_complementarios.configuracion_texto_distribuido_de_anclaje
    }
```

Este ensamblaje es especialmente útil para contenido que quiere producir la sensación de: “esto me aclaró algo rápidamente”. No opera por dramatización fuerte, sino por condensación, claridad y utilidad inmediata.

---

```txt
ensamblajes/
  captacion_por_reenganche_video_corto/
    {
      descripcion: "Configuración para recuperar atención cuando el receptor ya fue expuesto al tema, al perfil o a una serie, pero su atención se debilitó.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_pieza_de_reenganche
        + orientacion_funcional_pragmatica.configuracion_captacion_por_continuidad
        + escala_temporal_y_resolucion.configuracion_microcontinuidad
        + dinamica_atencional_y_procesual.configuracion_reenganche_atencional
        + construccion_del_caso.configuracion_caso_por_anomalia
        + acoplamiento_receptoral.configuracion_audiencia_recurrente
        + comparecencia_performativa.configuracion_frontal_directa
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_gancho_desarrollo_remate
        + recursos_complementarios.configuracion_audio_puntual_de_refuerzo
    }
```

Este ensamblaje sirve para piezas orientadas a públicos que ya tuvieron contacto previo. No se comporta igual que la captación fría: presupone alguna memoria, aunque sea débil.

---

```txt
ensamblajes/
  captacion_por_interrupcion_recompensa_video_corto/
    {
      descripcion: "Configuración para crear una interrupción controlada en un momento de tensión y luego entregar una continuación que funcione como recompensa atencional.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_pieza_de_prueba
        + orientacion_funcional_pragmatica.configuracion_captacion_por_curiosidad
        + escala_temporal_y_resolucion.configuracion_apertura_sin_cierre_total
        + dinamica_atencional_y_procesual.configuracion_interrupcion_recompensa
        + construccion_del_caso.configuracion_caso_por_mini_historia
        + acoplamiento_receptoral.configuracion_audiencia_fria_general
        + comparecencia_performativa.configuracion_narrativa_dramatica
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_interrupcion_recompensa
        + recursos_complementarios.configuracion_recursos_mixtos_controlados
    }
```

Este ensamblaje es más delicado, porque la interrupción puede mejorar retención o puede romper confianza. Por eso debería usarse como configuración específica, no como regla general de todo video corto.

---

```txt
ensamblajes/
  captacion_para_profundizacion_video_corto/
    {
      descripcion: "Configuración para captar atención y conducirla hacia una capa posterior de mayor densidad: otro video, hilo, curso, prompt, documento, comunidad o conversación privada.",

      ensamblaje:
        identidad_operativa.configuracion_identidad_pieza_de_profundizacion
        + orientacion_funcional_pragmatica.configuracion_captacion_por_promesa_de_profundizacion
        + escala_temporal_y_resolucion.configuracion_transicion_a_profundizacion
        + dinamica_atencional_y_procesual.configuracion_exploracion_condensada
        + construccion_del_caso.configuracion_caso_por_patron_replicable
        + acoplamiento_receptoral.configuracion_audiencia_lista_para_profundizacion
        + comparecencia_performativa.configuracion_autoridad_cercana
        + marco_de_materializacion.configuracion_multiplataforma_equivalente
        + composicion_segmental.configuracion_cierre_con_llamada_a_interaccion
        + recursos_complementarios.configuracion_texto_distribuido_de_anclaje
    }
```

Este ensamblaje es importante porque conecta monetización por views con otras arquitecturas futuras. Aunque esté dentro de `monetizacion_por_views`, puede funcionar como frontera hacia monetización por cursos, consultoría, comunidad, prompts, documentos o productos.

---

## 4. Resultado conceptual

La estructura quedaría así:

```txt
captacion_videos_cortos/
  configuraciones_dimensionales/
    identidad_operativa/
    orientacion_funcional_pragmatica/
    escala_temporal_y_resolucion/
    dinamica_atencional_y_procesual/
    construccion_del_caso/
    acoplamiento_receptoral/
    comparecencia_performativa/
    marco_de_materializacion/
    composicion_segmental/
    recursos_complementarios/

  ensamblajes/
    captacion_base_video_corto/
    captacion_serial_video_corto/
    captacion_interactiva_video_corto/
    captacion_por_contraste_video_corto/
    captacion_por_sintesis_video_corto/
    captacion_por_reenganche_video_corto/
    captacion_por_interrupcion_recompensa_video_corto/
    captacion_para_profundizacion_video_corto/

  plataformas/
    reel/
    tiktok/
    youtube_short/
```

La mejora principal es que `captacion_videos_cortos/` deja de ser una sola configuración plana y se vuelve una **fábrica conceptual de ensamblajes**. Cada ensamblaje puede producir, más adelante, una Instancia Operativa distinta; y cada Instancia Operativa podrá orientar la creación de Instancias Contextuales concretas sin modificar el Grafo de Regiones.

---

# 5. Explicación del mecanismo

## 5.1 Qué problema resuelve este mecanismo

El problema que se intenta resolver es que una configuración plana de `captacion_videos_cortos` resulta demasiado rígida. Si se define una sola selección global para todos los videos cortos de captación, el sistema pierde capacidad de variación. Todos los videos cortos tenderían a la misma forma: misma identidad operativa, misma orientación funcional, misma dinámica atencional, misma composición segmental y mismos recursos complementarios.

La estructura modular resuelve este problema porque permite separar dos niveles:

```txt
Nivel 1: configuraciones dimensionales
  piezas conceptuales parciales que orientan una dimensión concreta.

Nivel 2: ensamblajes
  combinaciones de configuraciones dimensionales que producen una orientación operativa completa.
```

Así, `captacion_videos_cortos/` deja de ser una única receta y se convierte en una biblioteca de piezas combinables.

---

## 5.2 Qué es una configuración dimensional

Una configuración dimensional es una orientación conceptual asociada a una dimensión específica de la Instancia Contextual de video-corto.

Por ejemplo:

```txt
orientacion_funcional_pragmatica.configuracion_captacion_por_curiosidad
```

no es todavía una Instancia Contextual. Tampoco es un valor del Grafo de Regiones. Es una orientación que dice:

```txt
Cuando esta configuración sea usada,
la dimensión orientación funcional pragmática deberá resolverse
hacia campos y valores existentes compatibles con captación por curiosidad.
```

Otro ejemplo:

```txt
composicion_segmental.configuracion_apertura_contraste_resolucion
```

no crea una estructura nueva dentro del Grafo de Regiones. Indica que, cuando llegue el momento de resolver la Instancia Contextual, se buscará una composición ya disponible que permita abrir con contraste y conducir hacia algún tipo de resolución.

La configuración dimensional funciona como una unidad intermedia:

```txt
no es valor del Grafo de Regiones
no es Instancia Contextual completa
no es guion
no es manifestación

es una orientación modular del Grafo de Monetización
que luego deberá traducirse a valores existentes.
```

---

## 5.3 Qué es un ensamblaje

Un ensamblaje es una composición de configuraciones dimensionales.

Un ensamblaje toma una configuración por cada dimensión relevante y las une para formar una orientación operativa completa.

Ejemplo:

```txt
captacion_base_video_corto =
  identidad_operativa.configuracion_identidad_pieza_autonoma_captativa
  + orientacion_funcional_pragmatica.configuracion_captacion_por_curiosidad
  + escala_temporal_y_resolucion.configuracion_resolucion_rapida_autosuficiente
  + dinamica_atencional_y_procesual.configuracion_apertura_inmediata
  + construccion_del_caso.configuracion_caso_por_pregunta_problema
  + acoplamiento_receptoral.configuracion_audiencia_fria_general
  + comparecencia_performativa.configuracion_frontal_directa
  + marco_de_materializacion.configuracion_multiplataforma_equivalente
  + composicion_segmental.configuracion_gancho_desarrollo_remate
  + recursos_complementarios.configuracion_texto_minimo_de_refuerzo
```

Este ensamblaje no produce todavía un video. Produce una orientación completa para construir una Instancia Contextual de video-corto con función de captación base.

La cadena sería:

```txt
ensamblaje conceptual
  → resolución en campos y valores del Grafo de Regiones
    → Instancia Contextual de video-corto
      → protocolo/adaptador de video-corto
        → manifestación codominial
```

---

## 5.4 Relación con el Grafo de Regiones

El Grafo de Monetización no debe competir con el Grafo de Regiones. El Grafo de Monetización no tiene que volver a definir qué campos existen en video-corto. Esa tarea ya pertenece al Grafo de Regiones.

La relación correcta es:

```txt
Grafo de Regiones:
  define el espacio realizativo.
  Contiene dimensiones, campos, campos internos, valores y restricciones.

Grafo de Monetización:
  define criterios de selección monetizable.
  Organiza configuraciones que seleccionarán valores ya existentes.
```

Entonces, una configuración dimensional debe resolverse siempre contra el Grafo de Regiones.

Ejemplo:

```txt
configuracion_captacion_por_curiosidad
```

no inventa `curiosidad` si no existiera. Solo puede resolverse si el Grafo de Regiones ya ofrece algún campo/valor compatible con esa orientación. Si no existe, entonces esa configuración quedaría pendiente, inválida o exigiría una fase distinta de expansión del Grafo de Regiones. Pero en este mecanismo, la regla es no modificar el Grafo de Regiones.

---

## 5.5 Relación con la Instancia Regional de video-corto

La Instancia Regional de video-corto funciona como el recorte habilitado del Grafo de Regiones para esa realización.

Por eso, el mecanismo real no se resuelve contra todo el Grafo de Regiones, sino contra lo que la Instancia Regional de video-corto habilita.

La cadena precisa sería:

```txt
Grafo de Regiones
  → Instancia Regional de video-corto
    → espacio habilitado para construir Instancias Contextuales de video-corto
```

El Grafo de Monetización entra así:

```txt
Grafo de Monetización
  → monetizacion_por_views
    → captacion
      → captacion_videos_cortos
        → ensamblaje conceptual
          → perfil de selección sobre la Instancia Regional de video-corto
```

Entonces:

```txt
Instancia Contextual de video-corto =
  Instancia Regional de video-corto
  + ensamblaje de captación
  + colección de ideas activas
  + contexto particular
```

---

## 5.6 Relación con el tema

El tema no pertenece al branch.

El branch no debe decir:

```txt
este ensamblaje es para política
este ensamblaje es para negocios
este ensamblaje es para música
este ensamblaje es para religión
```

El tema entra por separado como colección de ideas activas:

```txt
construccion_del_caso/
  construccion_conceptual/
    coleccion_de_ideas_activas
```

Esto significa que el ensamblaje aporta una forma funcional de captación, mientras que la colección de ideas activas aporta el contenido conceptual que será realizado.

La Instancia Contextual final surge de la tensión entre ambos elementos:

```txt
ensamblaje de captación:
  quiere cierta forma funcional.

colección de ideas activas:
  aporta el contenido temático disponible.

Instancia Contextual:
  resuelve ambos dentro de los valores permitidos por la Instancia Regional.
```

Esto es importante porque evita que las configuraciones de monetización se vuelvan temáticas. El mismo ensamblaje puede aplicarse a temas distintos, siempre que la colección de ideas activas pueda resolverse de manera coherente dentro de esa forma de captación.

---

## 5.7 Relación con reel, TikTok y YouTube Short

Dentro de esta etapa, `reel`, `tiktok` y `youtube_short` se tratan como subnodos equivalentes bajo `captacion_videos_cortos`.

Eso significa:

```txt
captacion_videos_cortos/
  plataformas/
    reel/
    tiktok/
    youtube_short/
```

Por ahora no se crean diferencias propias para cada plataforma. La configuración base aplica a las tres porque todavía no existe una diferenciación operativa suficientemente refinada.

La estructura debe conservar el lugar para la diferenciación futura:

```txt
captacion_videos_cortos/
  plataformas/
    reel/
      ajustes_pendientes

    tiktok/
      ajustes_pendientes

    youtube_short/
      ajustes_pendientes
```

Pero, en el estado actual, la regla es:

```txt
reel = tiktok = youtube_short
para efectos de captación por videos cortos.
```

---

## 5.8 Flujo completo del mecanismo

El flujo completo puede describirse así:

```txt
1. Se elige la zona del Grafo de Monetización:

   monetizacion_por_views/captacion/captacion_videos_cortos

2. Se elige un ensamblaje conceptual:

   captacion_base_video_corto
   captacion_serial_video_corto
   captacion_interactiva_video_corto
   captacion_por_contraste_video_corto
   captacion_por_sintesis_video_corto
   captacion_por_reenganche_video_corto
   captacion_por_interrupcion_recompensa_video_corto
   captacion_para_profundizacion_video_corto

3. El ensamblaje invoca una configuración por dimensión:

   identidad_operativa.configuracion_X
   orientacion_funcional_pragmatica.configuracion_Y
   escala_temporal_y_resolucion.configuracion_Z
   ...

4. Cada configuración dimensional se resuelve contra campos y valores ya existentes
   en la Instancia Regional de video-corto.

5. El tema entra como colección de ideas activas.

6. La Instancia Contextual resultante combina:

   - espacio habilitado por la Instancia Regional,
   - orientación del ensamblaje,
   - colección de ideas activas,
   - contexto particular.

7. El protocolo/adaptador de video-corto recibe la Instancia Contextual.

8. El sistema produce la manifestación codominial:

   reel, TikTok o YouTube Short.

9. La manifestación cumple una función de captación dentro de monetización por views.
```

---

## 5.9 Por qué este mecanismo mejora el modelo

Este mecanismo mejora el modelo por cinco razones.

Primero, evita una configuración única y rígida para todos los videos cortos. No todos los videos cortos de captación deben funcionar igual. Algunos deben captar por curiosidad, otros por contraste, otros por síntesis, otros por reenganche, otros por interacción.

Segundo, permite reutilización. Una misma configuración dimensional puede aparecer en varios ensamblajes. Por ejemplo, `configuracion_apertura_inmediata` puede aparecer tanto en un ensamblaje base como en un ensamblaje por contraste.

Tercero, mantiene intacto el Grafo de Regiones. El Grafo de Monetización no crea valores nuevos; solo organiza selecciones. Esto respeta la separación entre espacio realizativo y espacio monetizable.

Cuarto, permite evolución gradual. Hoy `reel`, `tiktok` y `youtube_short` son equivalentes. Más adelante, si se descubren diferencias relevantes, se pueden introducir ajustes por plataforma sin rehacer toda la estructura.

Quinto, permite composición ascendente. Las configuraciones dimensionales construyen ensamblajes; los ensamblajes pueden producir Instancias Operativas; las Instancias Operativas pueden orientar muchas Instancias Contextuales; y esas Instancias Contextuales pueden generar múltiples manifestaciones codominiales.

---

## 5.10 Fórmula de cierre

La fórmula del mecanismo es:

```txt
configuración dimensional
  = orientación conceptual sobre una dimensión existente

ensamblaje
  = combinación de configuraciones dimensionales

instancia operativa
  = ensamblaje aplicado a una función monetizable concreta

instancia contextual
  = resolución del ensamblaje dentro de la Instancia Regional,
    más colección de ideas activas,
    más contexto particular

manifestación codominial
  = salida producida por el protocolo/adaptador de video-corto
```

En forma completa:

```txt
Grafo de Monetización
  → captacion_videos_cortos
    → configuraciones_dimensionales
      → ensamblaje conceptual
        → resolución contra Instancia Regional de video-corto
          → Instancia Contextual
            → protocolo/adaptador
              → manifestación codominial
                → función de captación
```

La idea central es:

```txt
captacion_videos_cortos/ no es una configuración plana.
Es una fábrica conceptual de ensamblajes.

Cada ensamblaje combina configuraciones dimensionales.
Cada configuración dimensional orienta una dimensión ya existente.
Cada orientación deberá resolverse después en campos y valores existentes del Grafo de Regiones.
```
