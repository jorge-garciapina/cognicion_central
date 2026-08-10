# Entendimiento de la forma de trabajo — Instancia Contextual modular para `video_corto/`

**Estado:** documento de entendimiento operativo  
**Contexto:** desarrollo de configuraciones dimensionales para `captacion_videos_cortos` dentro del Grafo de Monetización  
**Propósito:** fijar la forma de trabajo que se usará para construir Instancias Contextuales modulares compatibles con la realización `video_corto/` de la ACCD.

---

## 1. Idea central

La forma de trabajo que se adoptará consiste en dejar de representar la Instancia Contextual de `video_corto/` como un único archivo monolítico y pasar a representarla como un **artefacto modular compuesto por registros separados**, donde cada registro corresponde a una dimensión de configuración.

Antes, una Instancia Contextual podía aparecer como un solo archivo de este tipo:

```txt
realizaciones/video_corto/ejemplos/fouquet/instancia-contextual-fouquet-luis-xiv.md
```

Ese archivo concentraba en un mismo documento todas las decisiones contextuales necesarias para que el protocolo de video corto pudiera producir una Manifestación Codominial.

La nueva forma de trabajo conserva la misma función de la Instancia Contextual, pero cambia su forma de representación. En lugar de un único archivo que contenga todas las dimensiones, la instancia se distribuirá en varios registros:

```json
{"path":"identidad_operativa", "...":"...", "text":""}
{"path":"orientacion_funcional_pragmatica", "...":"...", "text":""}
{"path":"escala_temporal_y_resolucion", "...":"...", "text":""}
{"path":"dinamica_atencional_y_procesual", "...":"...", "text":""}
{"path":"construccion_del_caso", "...":"...", "text":""}
{"path":"acoplamiento_receptoral", "...":"...", "text":""}
{"path":"comparecencia_performativa", "...":"...", "text":""}
{"path":"marco_de_materializacion", "...":"...", "text":""}
{"path":"composicion_segmental", "...":"...", "text":""}
{"path":"recursos_complementarios", "...":"...", "text":""}
{"path":"construccion_conceptual", "...":"...", "text":""}
```

Todos esos registros, tomados juntos, serán la Instancia Contextual.

La separación es material y operativa, no ontológica: no se están creando muchas instancias contextuales independientes, sino una sola Instancia Contextual compuesta por módulos.

---

## 2. La Instancia Contextual sigue ocupando el mismo lugar en la ACCD

Esta nueva forma de representación no modifica la arquitectura general de la ACCD.

La cadena sigue siendo:

```txt
grafo_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador / protocolo
        → manifestacion_codominial
```

La Instancia Regional sigue siendo el recorte que habilita las dimensiones, campos y valores disponibles para una realización. En este caso, la realización relevante es `video_corto/`.

La Instancia Contextual sigue siendo la selección concreta de valores dentro del espacio habilitado por la Instancia Regional.

El Protocolo sigue siendo el mecanismo que transforma la Instancia Contextual en una Manifestación Codominial.

Lo único que cambia es la forma de materializar la Instancia Contextual: ahora será un artefacto distribuido por dimensión.

---

## 3. Diferencia entre la forma anterior y la forma nueva

### 3.1. Forma anterior

En la forma anterior, una Instancia Contextual podía contener en un solo documento:

```txt
instancia-contextual-fouquet-luis-xiv.md
  ├─ identidad_operativa
  ├─ orientacion_funcional_pragmatica
  ├─ escala_temporal_y_resolucion
  ├─ dinamica_atencional_y_procesual
  ├─ construccion_del_caso
  ├─ acoplamiento_receptoral
  ├─ comparecencia_performativa
  ├─ marco_de_materializacion
  ├─ composicion_segmental
  ├─ recursos_complementarios
  └─ construccion_conceptual
```

Esta forma es útil para ejemplos completos, porque muestra una instancia ya consolidada.

Sin embargo, tiene una limitación: mezcla con facilidad dos planos que ahora conviene separar:

```txt
1. La configuración dimensional del video corto.
2. El contenido conceptual particular del tema o caso.
```

Por ejemplo, en un caso como Fouquet/Luis XIV, el archivo único puede mezclar:

```txt
configuración de captación / video corto
+
contenido conceptual sobre Fouquet y Luis XIV
```

Eso dificulta reutilizar la misma configuración con otros temas.

---

### 3.2. Forma nueva

En la forma nueva, la Instancia Contextual se construye por módulos:

```txt
instancia_contextual_modular/
  identidad_operativa
  orientacion_funcional_pragmatica
  escala_temporal_y_resolucion
  dinamica_atencional_y_procesual
  construccion_del_caso
  acoplamiento_receptoral
  comparecencia_performativa
  marco_de_materializacion
  composicion_segmental
  recursos_complementarios
  construccion_conceptual
```

Esto permite que los módulos configuracionales puedan provenir de un ensamblaje del Grafo de Monetización, mientras que `construccion_conceptual` pueda enviarse por separado.

La nueva forma separa:

```txt
configuración reusable
+
contenido temático intercambiable
```

Esta separación hace posible que un mismo ensamblaje pueda aplicarse a distintos temas sin perder identidad estructural.

---

## 4. Relación con el Grafo de Monetización

El trabajo actual se sitúa dentro de esta región:

```txt
grafo_de_monetizacion/
  monetizacion_por_views/
    captacion/
      captacion_videos_cortos/
```

Dentro de esa zona, se están diseñando configuraciones y ensamblajes cuya función es orientar la realización `video_corto/` para que funcione como medio de captación atencional.

La estructura conceptual del Grafo de Monetización puede entenderse así:

```txt
monetizacion_por_views
  └─ captacion
      └─ captacion_videos_cortos
          ├─ configuraciones_dimensionales
          └─ ensamblajes
```

Las `configuraciones_dimensionales/` contienen piezas de orientación por dimensión.

Los `ensamblajes/` combinan esas piezas para construir una configuración más completa.

Un ensamblaje no es todavía una Manifestación Codominial. Tampoco es todavía un guion. Es una configuración reusable que puede condicionar una Instancia Contextual.

---

## 5. Función de las configuraciones dimensionales

Una configuración dimensional es una selección conceptual para una dimensión específica.

Por ejemplo:

```txt
configuraciones_dimensionales/
  orientacion_funcional_pragmatica/
    configuracion_captacion_por_curiosidad
```

Esta configuración no debe inventar valores nuevos del Grafo de Regiones. Su función es orientar la selección de valores ya existentes cuando se construya una Instancia Contextual.

La regla es:

```txt
Configuración dimensional = orientación de selección sobre una dimensión ya existente.
```

No es una extensión del Grafo de Regiones.

No es una salida.

No es el tema.

No es el protocolo.

Es una pieza modular que ayuda a construir Instancias Contextuales coherentes con una arquitectura de monetización.

---

## 6. Función de los ensamblajes

Un ensamblaje combina configuraciones dimensionales.

Ejemplo conceptual:

```txt
ensamblajes/
  captacion_base_video_corto/
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
```

Ese ensamblaje funciona como una configuración reusable para construir videos cortos de captación.

En la nueva forma de trabajo, cada ensamblaje podrá materializarse como un artefacto compuesto por registros dimensionales.

Es decir, cada ensamblaje tendrá su propia versión de:

```txt
identidad_operativa
orientacion_funcional_pragmatica
escala_temporal_y_resolucion
dinamica_atencional_y_procesual
construccion_del_caso
acoplamiento_receptoral
comparecencia_performativa
marco_de_materializacion
composicion_segmental
recursos_complementarios
```

Después, para un caso particular, se agregará:

```txt
construccion_conceptual
```

Con eso se completa la Instancia Contextual.

---

## 7. `construccion_conceptual` como puerto temático intercambiable

`construccion_conceptual` tendrá un estatus especial.

Aunque conceptualmente pertenece a la dimensión `construccion_del_caso`, se enviará por separado para que el mismo ensamblaje pueda recibir distintos temas.

La razón es que el tema particular debe entrar como una **lista de ideas activas**.

Esto permite que el sistema funcione de manera isomórfica.

Ejemplo:

```txt
ensamblaje_captacion_base_video_corto
  + construccion_conceptual_fouquet_luis_xiv
  → instancia_contextual_fouquet_luis_xiv
```

```txt
ensamblaje_captacion_base_video_corto
  + construccion_conceptual_linktree_monetizacion
  → instancia_contextual_linktree_monetizacion
```

```txt
ensamblaje_captacion_base_video_corto
  + construccion_conceptual_spotify_playlists
  → instancia_contextual_spotify_playlists
```

En los tres casos, el tema cambia, pero la estructura de captación se conserva.

Esto permite construir isomorfismos.

La fórmula sería:

```txt
misma configuración dimensional
+
distinta construcción conceptual
=
instancias contextuales isomorfas en configuración, distintas en contenido
```

---

## 8. Qué significa que haya un artefacto por ensamblaje

Existirá un artefacto modular para cada ensamblaje.

Por ejemplo:

```txt
ensamblajes/
  captacion_base_video_corto/
    artefacto_instancia_contextual_modular

  captacion_serial_video_corto/
    artefacto_instancia_contextual_modular

  captacion_interactiva_video_corto/
    artefacto_instancia_contextual_modular

  captacion_por_contraste_video_corto/
    artefacto_instancia_contextual_modular

  captacion_por_sintesis_video_corto/
    artefacto_instancia_contextual_modular
```

Cada uno de estos artefactos contendrá las dimensiones necesarias para configurar el video corto según una función particular de captación.

La ventaja es que será posible construir más ensamblajes en el futuro sin modificar la realización `video_corto/` ni el Grafo de Regiones.

Se podrá crear, por ejemplo:

```txt
captacion_por_reenganche_video_corto
captacion_para_profundizacion_video_corto
captacion_por_interaccion_video_corto
captacion_por_sorpresa_video_corto
captacion_por_contraste_video_corto
```

Cada ensamblaje sería una combinación distinta de módulos dimensionales.

---

## 9. Cómo se usará el protocolo de video corto

La generación de la Manifestación Codominial no ocurre en el momento de construir el ensamblaje.

Ocurre después.

El flujo previsto será:

```txt
1. Se elige un ensamblaje.
2. Se obtiene su artefacto modular de configuración dimensional.
3. Se añade `construccion_conceptual` como lista de ideas activas.
4. El conjunto se considera Instancia Contextual.
5. En una nueva pregunta se adjuntará:
   - el protocolo de video corto;
   - la Instancia Contextual modular completa;
   - un prompt que indique la operación esperada.
6. El chat aplicará el protocolo.
7. El resultado será una Manifestación Codominial de video corto.
```

La fórmula del flujo es:

```txt
ensamblaje_monetizable
  + construccion_conceptual
    → instancia_contextual_modular
      + protocolo_video_corto
        → manifestacion_codominial_video_corto
```

El protocolo no debe inventar la Instancia Contextual.

El protocolo debe recibirla.

La Manifestación Codominial debe derivar de esa instancia.

---

## 10. Compatibilidad con `video_corto/`

Toda configuración dimensional que se desarrolle debe ser compatible con la realización `video_corto/` ya existente.

Eso significa:

1. Debe usar las dimensiones que la Instancia Regional de `video_corto/` habilita.
2. Debe seleccionar valores existentes del Grafo de Regiones.
3. Debe respetar la estructura que el protocolo de video corto espera recibir.
4. Debe conservar la separación entre Instancia Contextual y Manifestación Codominial.
5. Debe mantener `construccion_conceptual` como entrada temática separada.

La finalidad no es crear un nuevo protocolo.

La finalidad es construir mejores entradas para el protocolo existente.

---

## 11. Reels, TikTok y YouTube Shorts

En esta etapa, `reel`, `tiktok` y `youtube_short` serán tratados como equivalentes dentro de `captacion_videos_cortos`.

La estructura conceptual es:

```txt
grafo_de_monetizacion/
  monetizacion_por_views/
    captacion/
      captacion_videos_cortos/
        reel
        tiktok
        youtube_short
```

Por ahora, el sistema no intentará diferenciar configuraciones específicas para cada plataforma.

La regla provisional será:

```txt
captacion_videos_cortos aplica de forma equivalente a:
  - reel
  - tiktok
  - youtube_short
```

Más adelante, si aparecen diferencias operativas relevantes, podrán crearse ajustes específicos por plataforma.

Pero por ahora se trabajará sobre la clase común:

```txt
video corto como medio de captación
```

---

## 12. Relación con isomorfismos

La separación de `construccion_conceptual` es la base para construir isomorfismos.

Un isomorfismo aparece cuando distintos temas usan la misma configuración estructural.

Ejemplo:

```txt
Tema A:
  Fouquet y Luis XIV

Tema B:
  Linktree como interfaz de monetización

Tema C:
  Spotify y playlists como contenedores regionales

Misma configuración:
  captacion_base_video_corto
```

Cada caso produce una Instancia Contextual distinta porque la construcción conceptual cambia.

Pero todas comparten el mismo ensamblaje.

Por tanto, son isomorfas en la dimensión operativa de captación.

Esto permite comparar temas diferentes bajo una misma forma de realización.

---

## 13. Regla de no sustitución

La nueva forma de trabajo debe respetar la separación entre componentes.

```txt
configuración dimensional:
  orienta selección de valores.

ensamblaje:
  combina configuraciones dimensionales.

construccion_conceptual:
  introduce el tema como colección de ideas activas.

instancia_contextual_modular:
  reúne ensamblaje + construcción conceptual.

protocolo:
  transforma la instancia en manifestación.

manifestacion_codominial:
  es la salida final.
```

No se debe confundir:

```txt
ensamblaje ≠ manifestación codominial
construccion_conceptual ≠ ensamblaje
protocolo ≠ instancia contextual
instancia contextual ≠ video final
```

Esta separación mantiene el sistema auditable y reutilizable.

---

## 14. Fórmula final de la forma de trabajo

La forma de trabajo puede resumirse así:

```txt
grafo_de_monetizacion/
  monetizacion_por_views/
    captacion/
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

        plataformas/
          reel/
          tiktok/
          youtube_short/
```

Cada ensamblaje podrá materializarse como:

```txt
artefacto_instancia_contextual_modular/
  identidad_operativa
  orientacion_funcional_pragmatica
  escala_temporal_y_resolucion
  dinamica_atencional_y_procesual
  construccion_del_caso
  acoplamiento_receptoral
  comparecencia_performativa
  marco_de_materializacion
  composicion_segmental
  recursos_complementarios
  construccion_conceptual
```

Y será usado así:

```txt
ensamblaje
  + construccion_conceptual
    → instancia_contextual_modular
      + protocolo_video_corto
        → manifestacion_codominial_video_corto
```

---

## 15. Conclusión

El entendimiento final es que la Instancia Contextual de `video_corto/` pasará a representarse como un artefacto modular. Esta modularización permite separar la configuración operativa del contenido temático.

Los ensamblajes del Grafo de Monetización aportarán configuraciones dimensionales reutilizables. La `construccion_conceptual` aportará el tema particular como colección de ideas activas. La unión de ambos formará la Instancia Contextual que posteriormente será entregada al protocolo de video corto.

Esta forma de trabajo permite:

- reutilizar configuraciones con distintos temas;
- construir isomorfismos;
- crear múltiples ensamblajes sin modificar el Grafo de Regiones;
- mantener compatibilidad con la realización `video_corto/` existente;
- separar configuración, tema, protocolo y manifestación;
- y conservar trazabilidad dentro de la ACCD.

La idea clave queda así:

```txt
El ensamblaje configura la forma operativa.
La construcción conceptual introduce el tema.
La Instancia Contextual modular reúne ambos.
El protocolo produce la Manifestación Codominial.
```
