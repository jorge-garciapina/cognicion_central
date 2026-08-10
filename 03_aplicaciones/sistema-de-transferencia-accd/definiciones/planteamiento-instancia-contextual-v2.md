https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69f4169e-6bb8-83e8-9cfa-c958c73f7486

# Planteamiento de la Instancia Contextual

## Documento de definición actualizado para la arquitectura por Instancias Regionales

---

## 0. Propósito del documento

Este documento redefine el concepto de **Instancia Contextual** dentro de la arquitectura actualizada de la ACCD y del sistema de transferencia estructural ampliado.

La versión anterior del planteamiento de Instancia Contextual todavía podía leerse como si la instancia contextual se construyera directamente desde un `modelo_base` local. Esa lectura ya no es la más adecuada para la arquitectura nueva.

En la arquitectura actual, una realización específica no debe depender de un modelo base local autónomo. Debe depender de una **Instancia Regional** que selecciona, desde un sistema mayor de regiones, qué dimensiones, campos, valores posibles y restricciones quedan habilitados para esa realización.

Por tanto, la Instancia Contextual debe reformularse así:

```txt
antes:
  modelo_base_local
    → instancia_contextual
      → adaptador / protocolo
        → manifestacion_codominial

ahora:
  sistema_mayor_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial
```

Este documento existe para fijar esa actualización.

La nueva definición puede resumirse de esta manera:

> Una Instancia Contextual es una configuración operable de valores concretos seleccionados dentro del espacio habilitado por una Instancia Regional, orientada a un caso particular y preparada para ser consumida por un adaptador o protocolo.

---

## 1. Definición breve

Una **Instancia Contextual** es la selección concreta de valores de caso dentro de los campos habilitados por una **Instancia Regional**.

Dicho de forma compacta:

```txt
Instancia Contextual = selección contextual de valores
                       dentro de una Instancia Regional
```

La Instancia Contextual no crea regiones nuevas.

La Instancia Contextual no redefine campos.

La Instancia Contextual no inventa valores como si pertenecieran al sistema mayor.

La Instancia Contextual toma un caso particular y fija, dentro del espacio previamente habilitado, qué valores concretos serán usados para producir una configuración operable.

---

## 2. Definición desarrollada

Una Instancia Contextual es un documento de configuración.

Su función es convertir el espacio de posibilidades habilitado por una Instancia Regional en una configuración particular, aplicable a un caso específico.

La Instancia Regional responde:

```txt
¿Qué dimensiones, campos y valores posibles quedan disponibles para esta realización?
```

La Instancia Contextual responde:

```txt
Dentro de lo disponible para esta realización,
¿qué valores concretos toma este caso?
```

Por eso, la Instancia Contextual ocupa un lugar intermedio entre la Instancia Regional y el Adaptador:

```txt
instancia_regional
  → instancia_contextual
    → adaptador / protocolo
      → manifestacion_codominial
```

La Instancia Contextual no es todavía la salida final.

Tampoco es la región que habilita posibilidades.

Es la **configuración concreta de entrada** que el adaptador o protocolo usará para producir una manifestación codominial.

---

## 3. Tesis central

La tesis central de este planteamiento es:

> Una Instancia Contextual no debe construirse directamente desde un modelo base local, sino desde una Instancia Regional que ya delimitó el espacio de posibilidades para una realización.

Esto permite distinguir dos niveles de selección:

```txt
Nivel 1 — selección regional:
  sistema_mayor_de_regiones
    → instancia_regional

Nivel 2 — selección contextual:
  instancia_regional
    → instancia_contextual
```

El primer nivel selecciona posibilidades.

El segundo nivel selecciona valores concretos.

La Instancia Contextual pertenece al segundo nivel.

---

## 4. Lugar dentro de la cadena completa

La cadena completa es:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

Cada componente tiene una función distinta:

```txt
modelo_base_de_regiones:
  organiza el sistema mayor de posibilidades.

grafo_de_regiones:
  materializa regiones, dimensiones, campos, valores y relaciones.

instancia_regional:
  selecciona qué partes del sistema mayor quedan habilitadas para una realización.

instancia_contextual:
  selecciona valores concretos dentro de lo habilitado por la instancia regional.

adaptador / protocolo:
  transforma esa configuración operable en una salida.

codominio:
  define el espacio formal de salida válida.

manifestacion_codominial:
  es la salida concreta producida.
```

La Instancia Contextual es, por tanto, la unidad que vuelve accionable una Instancia Regional.

---

## 5. Fórmula operativa

La fórmula general puede expresarse así:

```txt
instancia_contextual = seleccion_contextual(
  instancia_regional,
  caso,
  contexto,
  criterios_de_seleccion
)
```

Su salida es:

```txt
configuracion_operable
```

Luego:

```txt
adaptador(configuracion_operable)
  → manifestacion_codominial
```

O, de forma equivalente:

```txt
IC_R_i(IR_R) → configuracion_operable_R_i
A_R(IC_R_i) → MC_R_i
```

Donde:

```txt
IR_R = instancia regional de la realización R
IC_R_i = instancia contextual i dentro de la instancia regional R
A_R = adaptador de la realización R
MC_R_i = manifestación codominial i de la realización R
```

---

## 6. Diferencia entre Instancia Regional e Instancia Contextual

Esta diferencia debe permanecer explícita en todo el sistema.

### 6.1. La Instancia Regional habilita posibilidades

La Instancia Regional declara:

```txt
estos campos existen para esta realización;
estos valores posibles están disponibles;
estos valores quedan fijados por la clase de realización;
estas restricciones aplican.
```

Ejemplo abstracto:

```yaml
instancia_regional_carousel:
  campos_habilitados:
    tono_editorial:
      valores_posibles:
        - tecnico
        - pedagogico_directo
        - divulgativo
        - comercial

    densidad_textual_visible:
      valores_posibles:
        - baja
        - media
        - alta
```

### 6.2. La Instancia Contextual selecciona valores de caso

La Instancia Contextual declara:

```txt
de esos campos y valores posibles,
este caso toma estos valores concretos.
```

Ejemplo abstracto:

```yaml
instancia_contextual_carousel_1:
  instancia_regional_usada: instancia_regional_carousel

  seleccion_contextual:
    tono_editorial: pedagogico_directo
    densidad_textual_visible: media
```

### 6.3. Fórmula comparativa

```txt
Instancia Regional : sistema mayor
::
selección de regiones : espacio de posibilidades
```

```txt
Instancia Contextual : Instancia Regional
::
selección de valores : campos habilitados
```

O de forma más directa:

```txt
Instancia Regional = qué puede usarse.
Instancia Contextual = qué se usa en este caso.
```

---

## 7. Diferencia entre Instancia Contextual y Adaptador

La Instancia Contextual no produce por sí misma la manifestación codominial.

Su función es preparar una configuración que pueda ser leída por el adaptador.

El adaptador sí realiza la transformación hacia una salida.

```txt
Instancia Contextual:
  configura valores concretos.

Adaptador / Protocolo:
  transforma la configuración en una manifestación.
```

Por eso, la cadena correcta es:

```txt
instancia_contextual
  → adaptador / protocolo
    → manifestacion_codominial
```

No debe ser:

```txt
instancia_contextual
  → manifestacion_codominial
```

salvo que el documento esté usando una abreviación explícita.

La Instancia Contextual puede contener información suficiente para guiar una salida, pero no debe confundirse con la salida.

---

## 8. Diferencia entre Instancia Contextual y Manifestación Codominial

La Instancia Contextual pertenece al lado de la configuración de entrada.

La Manifestación Codominial pertenece al lado de la salida.

```txt
lado de entrada:
  instancia_regional
  instancia_contextual

lado de transformación:
  adaptador / protocolo

lado de salida:
  codominio
  manifestacion_codominial
```

Ejemplo:

```txt
instancia_contextual:
  funcion_dominante: enseñar
  efecto_buscado: comprension_rapida
  tono: pedagogico_directo
  estructura: apertura_contraste_resolucion

manifestacion_codominial:
  guion, carrusel, newsletter, clase, hilo o pieza final construida.
```

La Instancia Contextual dice qué debe configurar el caso.

La Manifestación Codominial muestra cómo esa configuración aparece como salida concreta.

---

## 9. Diferencia entre Instancia Contextual y caso

La Instancia Contextual no es simplemente el caso.

El caso es el material o situación particular que se quiere trabajar.

La Instancia Contextual es la configuración formal que toma ese caso y lo vuelve operable dentro de una realización.

Ejemplo:

```txt
caso:
  Nicolás Fouquet frente a Luis XIV.

instancia_contextual:
  configuración de ese caso dentro de una realización concreta:
    función dominante: enseñar
    efecto buscado: comprensión estratégica
    estado atencional: atención superficial
    régimen de activación: apertura inmediata
    comparecencia: autoridad media, sobriedad alta
    estructura segmental: apertura, desarrollo, cierre
```

El caso aporta contenido.

La Instancia Contextual aporta configuración.

---

## 10. Diferencia entre valores regionalmente fijados y valores contextuales

Una Instancia Regional puede fijar algunos valores porque pertenecen a la clase de realización.

Ejemplo:

```yaml
valores_regionalmente_fijados:
  clase_de_materializacion: guion_audiovisual_breve
  plataforma: tiktok
  aplicacion_de_plataforma: video_tiktok
```

Esos valores no son elegidos por cada caso.

Pertenecen al recorte regional.

La Instancia Contextual debe reconocerlos, respetarlos y, cuando convenga, citarlos como valores heredados o fijados por la Instancia Regional.

Ejemplo:

```yaml
instancia_contextual:
  instancia_regional_usada: instancia-regional-video-corto-tiktok

  valores_regionales_reconocidos:
    clase_de_materializacion: guion_audiovisual_breve
    plataforma: tiktok
    aplicacion_de_plataforma: video_tiktok

  valores_contextuales_seleccionados:
    funcion_dominante: enseñar
    efecto_buscado: comprension_rapida
    regimen_de_activacion_atencional: apertura_inmediata
```

Regla:

```txt
valor regionalmente fijado:
  define la clase de realización habilitada.

valor contextual:
  define el caso particular dentro de esa realización.
```

---

## 11. Componentes internos mínimos de una Instancia Contextual

Una Instancia Contextual debería contener, como mínimo, los siguientes componentes:

```txt
instancia_contextual:
  identificacion
  instancia_regional_usada
  realizacion_habilitada
  caso_configurado
  proposito_contextual
  valores_regionales_reconocidos
  seleccion_contextual_de_valores
  justificacion_de_seleccion
  restricciones_activas
  compatibilidad_con_adaptador
  salida_esperada_o_familia_codominial
  trazabilidad
  validacion
```

Cada sección cumple una función distinta.

---

## 12. Identificación

Toda Instancia Contextual debe declarar su identidad.

Ejemplo:

```yaml
identificacion:
  id: instancia-contextual-video-corto-fouquet-luis-xiv-001
  tipo: instancia_contextual
  nombre: Instancia Contextual — Fouquet / Luis XIV para video corto
  estado: borrador | provisional | validada | en_revision
```

La identificación debe evitar nombres demasiado genéricos.

No basta con:

```txt
instancia_contextual_1
```

salvo que el contexto de carpeta ya garantice unicidad y trazabilidad.

La opción preferible es incluir:

```txt
realizacion + caso + número o versión
```

Ejemplos:

```txt
instancia-contextual-video-corto-fouquet-luis-xiv-001
instancia-contextual-carousel-estrategia-politica-caso-001
instancia-contextual-newsletter-campo-atencional-betterware-001
instancia-contextual-clase-introductoria-esencificacion-001
```

---

## 13. Instancia Regional usada

La Instancia Contextual debe declarar explícitamente la Instancia Regional que la habilita.

Ejemplo:

```yaml
instancia_regional_usada:
  id: instancia-regional-video-corto-tiktok
  ruta: realizaciones/video-corto/instancias_regionales/instancia-regional-video-corto-tiktok.md
```

Esto es obligatorio porque la Instancia Contextual no es autónoma.

Su validez depende de que los campos y valores que selecciona estén habilitados por esa Instancia Regional.

Una Instancia Contextual sin Instancia Regional usada queda incompleta, porque no se puede validar:

- qué campos podía usar;
- qué valores podía seleccionar;
- qué valores estaban fijados regionalmente;
- qué restricciones aplicaban;
- qué adaptador podía consumirla.

---

## 14. Realización habilitada

La Instancia Contextual debe declarar para qué realización se está configurando.

Ejemplo:

```yaml
realizacion_habilitada:
  tipo: video_corto
  familia_codominial_preparada: guion_audiovisual_breve
  adaptador_previsto: protocolo-videos-cortos
```

La realización habilitada debe ser compatible con la Instancia Regional usada.

No debe ocurrir esto:

```yaml
instancia_regional_usada: instancia-regional-carousel
realizacion_habilitada: video_corto_tiktok
```

salvo que se trate de una adaptación puente explícitamente declarada.

---

## 15. Caso configurado

La Instancia Contextual debe decir qué caso, situación, idea, tema, estructura o material está siendo configurado.

Ejemplo:

```yaml
caso_configurado:
  nombre: Nicolás Fouquet frente a Luis XIV
  tipo: caso_historico_estrategico
  descripcion_breve: Caso usado para mostrar un error estratégico frente a un centro de poder.
```

El caso puede tener distintas formas:

```txt
caso histórico
caso comercial
caso educativo
caso narrativo
caso de negocio
caso identitario
caso estratégico
caso visual
caso conceptual
caso de campo atencional
```

La Instancia Contextual no debe limitarse a nombrar el caso.

Debe configurarlo mediante valores.

---

## 16. Propósito contextual

El propósito contextual explica qué se busca lograr con este caso dentro de esta realización.

Ejemplo:

```yaml
proposito_contextual:
  descripcion: Mostrar cómo una acción visible puede convertirse en amenaza frente a un centro de poder.
  funcion_pragmatica_dominante: enseñar
  efecto_buscado: comprension_estrategica
```

El propósito contextual no sustituye los campos de la selección contextual.

Sirve como lectura humana de la configuración.

---

## 17. Selección contextual de valores

Esta es la sección central de la Instancia Contextual.

Debe declarar qué valores concretos toma cada campo habilitado.

Ejemplo:

```yaml
seleccion_contextual_de_valores:
  dimension_orientacion_funcional_pragmatica:
    funcion_dominante:
      valor: enseñar
      id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-ensenar-ensenar

    efecto_buscado:
      dominante:
        valor: comprension_rapida
        id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-comprension_rapida-comprension_rapida
      secundarios:
        - valor: curiosidad
          id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-curiosidad-curiosidad

    accion_esperada:
      - valor: ver_hasta_el_final
        id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ver_hasta_el_final-ver_hasta_el_final
      - valor: guardar
        id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-guardar-guardar
```

La selección debe ser explícita.

No debe depender de frases vagas como:

```txt
usar un tono adecuado
hacerlo interesante
volverlo más dinámico
```

Si se usan descripciones libres, deben estar conectadas a campos habilitados o declararse como notas auxiliares no estructurales.

---

## 18. Campos obligatorios, opcionales y omitidos

La Instancia Contextual debe distinguir entre:

```txt
campos seleccionados:
  campos habilitados por la Instancia Regional que reciben valor en este caso.

campos heredados/fijados:
  campos cuyo valor ya quedó fijado regionalmente.

campos omitidos:
  campos habilitados que no se usan en este caso.
```

Ejemplo:

```yaml
campos_omitidos:
  dimension_recursos_complementarios_de_manifestacion:
    uso_de_imagen_generada:
      razon: no se solicita recurso visual externo para esta manifestación.
      estado: omitido_validamente
```

Omitir un campo no debe ser silencioso cuando el campo es obligatorio.

Si un campo obligatorio no recibe valor, la Instancia Contextual queda incompleta.

---

## 19. Cardinalidad

La Instancia Contextual debe respetar la cardinalidad de cada campo heredada de la Instancia Regional.

Ejemplo:

```yaml
campo: funcion_dominante
cardinalidad: un_valor_obligatorio
seleccion:
  - enseñar
```

Esto es válido.

No sería válido:

```yaml
campo: funcion_dominante
cardinalidad: un_valor_obligatorio
seleccion:
  - enseñar
  - persuadir
```

salvo que la Instancia Regional permita una dominancia explícita con secundarios.

Para campos multivalor, debe indicarse el valor dominante cuando sea necesario.

Ejemplo:

```yaml
efecto_buscado:
  cardinalidad: uno_o_mas_con_dominancia
  dominante: comprension_rapida
  secundarios:
    - curiosidad
    - memorabilidad_simbolica
```

---

## 20. Justificación de selección

Cada selección relevante debería poder justificarse.

No todas las selecciones requieren una explicación larga, pero la Instancia Contextual debe permitir trazabilidad interpretativa.

Ejemplo:

```yaml
justificacion_de_seleccion:
  funcion_dominante:
    valor: enseñar
    razon: El caso se usa para explicar una estructura estratégica, no solo para narrar un hecho histórico.

  regimen_de_activacion_atencional:
    valor: apertura_inmediata
    razon: La realización busca capturar atención desde el primer bloque por tratarse de una pieza breve.
```

La justificación cumple tres funciones:

1. hacer auditable la configuración;
2. ayudar al adaptador a interpretar la intención;
3. permitir comparación entre instancias contextuales cercanas.

---

## 21. Restricciones activas

La Instancia Contextual debe declarar las restricciones que están activas en el caso.

Estas restricciones pueden venir de varias fuentes:

```txt
1. restricciones heredadas del sistema mayor;
2. restricciones habilitadas por la Instancia Regional;
3. restricciones de cardinalidad;
4. restricciones del codominio preparado;
5. restricciones del adaptador o protocolo;
6. restricciones contextuales del caso.
```

Ejemplo:

```yaml
restricciones_activas:
  - id: restriccion-compatibilidad-funcion-dominante-efecto-buscado
    descripcion: La función dominante debe ser coherente con el efecto buscado.

  - id: restriccion-duracion-video-breve
    descripcion: La configuración debe poder proyectarse a una salida breve.

  - id: restriccion-no-usar-campos-no-habilitados
    descripcion: No se pueden seleccionar campos fuera de la Instancia Regional usada.
```

---

## 22. Compatibilidad con adaptador o protocolo

La Instancia Contextual debe declarar qué adaptador o protocolo puede consumirla.

Ejemplo:

```yaml
compatibilidad_con_adaptador:
  adaptador_previsto: protocolo-videos-cortos
  tipo_de_salida: guion_audiovisual_breve
  estado: compatible
```

El adaptador debe recibir una configuración operable, no una región completa.

Por eso, una Instancia Contextual debe estar suficientemente completa para que el adaptador pueda responder:

```txt
¿qué caso debo transformar?
¿qué función cumple la salida?
¿qué tono o comparecencia debe tener?
¿qué estructura temporal debe seguir?
¿qué restricciones del codominio debo respetar?
¿qué valores ya vienen fijados regionalmente?
```

---

## 23. Familia codominial esperada

La Instancia Contextual puede declarar la familia codominial esperada.

Ejemplo:

```yaml
familia_codominial_esperada:
  codominio: guion_audiovisual_breve
  manifestacion_esperada: guion_para_video_corto
```

Esto no convierte la Instancia Contextual en codominio.

Solo establece compatibilidad de salida.

---

## 24. Trazabilidad

La Instancia Contextual debe poder rastrearse hacia atrás y hacia adelante.

### 24.1. Trazabilidad hacia atrás

Debe poder rastrearse hacia:

```txt
instancia_regional
  → grafo_de_regiones
    → modelo_base_de_regiones
```

### 24.2. Trazabilidad hacia adelante

Debe poder rastrearse hacia:

```txt
adaptador / protocolo
  → manifestacion_codominial
```

### 24.3. Cadena de trazabilidad completa

```txt
valor_del_sistema_mayor
  → habilitacion_regional
    → seleccion_contextual
      → regla_del_adaptador
        → componente_de_manifestacion
```

Sin trazabilidad, la Instancia Contextual se vuelve una lista de decisiones sueltas.

Con trazabilidad, cada decisión puede explicarse como selección dentro de una arquitectura mayor.

---

## 25. IDs y referencias

Cuando la Instancia Contextual seleccione un valor, debe conservar el `id` canónico del valor si está disponible.

Ejemplo:

```yaml
funcion_dominante:
  valor: enseñar
  id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-ensenar-ensenar
```

Cuando no exista un `id` canónico, debe declararse el estado del valor.

Ejemplo:

```yaml
valor: microtension_inicial
estado: extension_contextual_no_materializada
accion_requerida: decidir si debe añadirse al grafo_de_regiones o mantenerse como nota local.
```

Regla:

```txt
La Instancia Contextual puede contener notas contextuales libres,
pero no debe hacer pasar una nota libre como valor canónico del grafo.
```

---

## 26. Valores libres y extensiones contextuales

A veces un caso requiere un valor que no está todavía habilitado por la Instancia Regional.

En ese caso no debe introducirse silenciosamente.

Debe declararse como extensión.

Ejemplo:

```yaml
extensiones_contextuales_propuestas:
  - campo: regimen_de_tension_narrativa
    valor_propuesto: amenaza_por_exceso_de_visibilidad
    razon: El caso exige modelar una tensión específica no disponible en la región actual.
    estado: propuesta_no_validada
```

Hay tres opciones:

```txt
1. Rechazar la extensión y seleccionar un valor existente.
2. Actualizar la Instancia Regional si el valor ya existe en el sistema mayor pero no estaba habilitado.
3. Actualizar el grafo_de_regiones si el valor todavía no existe y se decide materializarlo.
```

Lo que no debe hacerse:

```txt
usar el valor nuevo como si ya fuera parte del sistema mayor.
```

---

## 27. Estructura mínima recomendada del archivo

Un archivo de Instancia Contextual debería seguir esta forma mínima:

```md
# Instancia Contextual — Nombre del caso

## 0. Identificación

- id:
- tipo: `instancia_contextual`
- estado:
- versión:

## 1. Instancia Regional usada

- id:
- ruta:
- realización habilitada:

## 2. Caso configurado

- nombre:
- tipo:
- descripción breve:
- material fuente o referencia:

## 3. Propósito contextual

Descripción de qué se quiere lograr con este caso dentro de esta realización.

## 4. Valores regionales reconocidos

Valores fijados por la Instancia Regional que esta Instancia Contextual hereda.

## 5. Selección contextual de valores

Valores concretos seleccionados para cada dimensión/campo habilitado.

## 6. Justificación de selección

Razones por las que se eligieron los valores principales.

## 7. Restricciones activas

Restricciones heredadas, regionales, codominiales y contextuales.

## 8. Compatibilidad con adaptador/protocolo

Adaptador previsto y condiciones mínimas para que pueda consumir esta configuración.

## 9. Trazabilidad

Referencias hacia Instancia Regional, campos, valores, adaptador y manifestación esperada.

## 10. Validación

Checklist de consistencia.
```

---

## 28. Ejemplo abstracto completo

```yaml
instancia_contextual:
  identificacion:
    id: instancia-contextual-ejemplo-001
    tipo: instancia_contextual
    estado: provisional

  instancia_regional_usada:
    id: instancia-regional-realizacion-x
    ruta: realizaciones/realizacion-x/instancias_regionales/instancia-regional-realizacion-x.md

  caso_configurado:
    nombre: caso_x
    tipo: caso_conceptual
    descripcion_breve: Caso usado para mostrar una estructura particular dentro de la realización x.

  valores_regionales_reconocidos:
    dimension_marco_de_materializacion:
      clase_de_materializacion:
        valor: salida_x
        estado: fijado_regionalmente

  seleccion_contextual_de_valores:
    dimension_1:
      campo_1:
        valor: valor_1_2
        id: grafo_de_regiones-grafo_dimension_1-campo_1-valor_1_2-valor_1_2

      campo_2:
        valor: valor_2_1
        id: grafo_de_regiones-grafo_dimension_1-campo_2-valor_2_1-valor_2_1

    dimension_2:
      campo_3:
        dominante:
          valor: valor_3_1
          id: grafo_de_regiones-grafo_dimension_2-campo_3-valor_3_1-valor_3_1
        secundarios:
          - valor: valor_3_2
            id: grafo_de_regiones-grafo_dimension_2-campo_3-valor_3_2-valor_3_2

  justificacion_de_seleccion:
    campo_1:
      razon: Este valor organiza mejor el caso dentro del propósito contextual.

  restricciones_activas:
    - no_usar_campos_no_habilitados
    - respetar_cardinalidad_de_la_instancia_regional
    - producir_configuracion_compatible_con_adaptador_x

  compatibilidad_con_adaptador:
    adaptador_previsto: adaptador_x
    estado: compatible

  trazabilidad:
    hacia_atras:
      - instancia-regional-realizacion-x
      - grafo_de_regiones
    hacia_adelante:
      - adaptador_x
      - manifestacion_codominial_x
```

---

## 29. Ejemplo aplicado de lectura

Si una Instancia Regional para una realización de video corto habilita campos de:

```txt
orientación funcional-pragmática
escala temporal
acoplamiento receptoral
dinámica atencional
construcción del caso
comparecencia performativa
marco de materialización
composición segmental
recursos complementarios
```

entonces una Instancia Contextual puede seleccionar valores como:

```yaml
seleccion_contextual_de_valores:
  dimension_orientacion_funcional_pragmatica:
    funcion_dominante: enseñar
    efecto_buscado:
      dominante: comprension_rapida
      secundarios:
        - curiosidad
        - memorabilidad_simbolica

  dimension_escala_temporal_y_resolucion_realizativa:
    alcance_de_realizacion: pieza_unica
    horizonte_temporal: inmediato

  dimension_dinamica_atencional_y_procesual:
    estado_atencional: atencion_superficial
    regimen_de_activacion_atencional: apertura_inmediata

  dimension_comparecencia_performativa:
    cercania: media
    autoridad: alta
    calidez: media
    intensidad: media
    sobriedad: alta
```

Este ejemplo no define la región.

Solo selecciona valores dentro de una región previamente habilitada.

---

## 30. Tipos de Instancia Contextual

Pueden existir varios tipos de Instancia Contextual.

### 30.1. Instancia Contextual completa

Tiene todos los valores obligatorios necesarios para que el adaptador pueda producir una manifestación.

```txt
estado: completa
```

### 30.2. Instancia Contextual parcial

Selecciona algunos valores, pero todavía no basta para activar el adaptador.

```txt
estado: parcial
```

### 30.3. Instancia Contextual exploratoria

Se usa para probar una configuración o estudiar posibilidades.

```txt
estado: exploratoria
```

### 30.4. Instancia Contextual validada

Fue revisada contra la Instancia Regional y puede alimentar un adaptador.

```txt
estado: validada
```

### 30.5. Instancia Contextual derivada

Se crea a partir de otra Instancia Contextual, modificando algunos valores dentro del dominio de variación permitido.

```txt
estado: derivada
instancia_origen: instancia-contextual-x
```

### 30.6. Instancia Contextual comparativa

Se usa para comparar configuraciones alternativas de un mismo caso.

Ejemplo:

```txt
caso_x_version_pedagogica
caso_x_version_persuasiva
caso_x_version_comercial
```

---

## 31. Instancias Contextuales como variaciones controladas

Una misma Instancia Regional puede producir muchas Instancias Contextuales.

Ejemplo:

```txt
instancia_regional_video_corto
  ├── instancia_contextual_fouquet_001
  ├── instancia_contextual_betterware_001
  ├── instancia_contextual_soriana_001
  ├── instancia_contextual_valentin_gnostico_001
  └── instancia_contextual_campo_atencional_001
```

Todas pertenecen a la misma realización, pero seleccionan valores distintos.

También puede ocurrir que un mismo caso produzca varias Instancias Contextuales dentro de distintas realizaciones.

Ejemplo:

```txt
caso_fouquet
  ├── instancia_contextual_video_corto
  ├── instancia_contextual_carousel
  ├── instancia_contextual_newsletter
  └── instancia_contextual_clase
```

En este caso, cada Instancia Contextual dependerá de una Instancia Regional distinta.

---

## 32. Relación con composición ascendente

La Instancia Contextual participa en la composición ascendente porque convierte una región habilitada en una configuración concreta.

```txt
sistema mayor
  → selección de región
    → selección de valores
      → composición adaptada
        → salida concreta
```

La Instancia Contextual no es un archivo auxiliar decorativo.

Es el punto en el que el sistema deja de ser posibilidad general y comienza a convertirse en caso operable.

---

## 33. Relación con la Fábrica de Adaptaciones Contextuales

La Instancia Contextual puede entenderse como una unidad producida por una fábrica de adaptaciones contextuales.

La fábrica recibe:

```txt
1. una realización objetivo;
2. una Instancia Regional;
3. un caso;
4. condiciones de contexto;
5. restricciones;
6. propósito de salida;
```

Y produce:

```txt
una Instancia Contextual compatible con un adaptador.
```

Esto puede expresarse así:

```txt
fabrica_de_adaptaciones_contextuales(
  instancia_regional,
  caso,
  contexto,
  intencion,
  restricciones
)
→ instancia_contextual
```

La Instancia Contextual es entonces una adaptación, pero no una adaptación libre.

Es una adaptación regulada por la Instancia Regional.

---

## 34. Relación con los documentos existentes de `definiciones/`

Este planteamiento implica ajustes en los documentos existentes.

### 34.1. Relación con `planteamiento-modelo-base.md`

El Modelo Base local ya no debe ser la fuente inmediata de la Instancia Contextual.

La fuente inmediata debe ser la Instancia Regional.

Cambio recomendado:

```txt
antes:
  Instancia Contextual = selección de valores dentro de un Modelo Base.

ahora:
  Instancia Contextual = selección de valores dentro del espacio habilitado por una Instancia Regional.
```

### 34.2. Relación con `planteamiento-instancia-regional.md`

La Instancia Regional habilita el espacio de configuración.

La Instancia Contextual selecciona dentro de ese espacio.

Cambio recomendado:

```txt
Instancia Regional:
  declara campos y valores posibles.

Instancia Contextual:
  selecciona valores concretos de caso.
```

### 34.3. Relación con `planteamiento-adaptador.md`

El Adaptador debe recibir una Instancia Contextual operable.

No debe recibir directamente:

```txt
grafo_de_regiones completo
instancia_regional completa
modelo_base_de_regiones
```

Cambio recomendado:

```txt
adaptador(instancia_contextual)
  → manifestacion_codominial
```

### 34.4. Relación con `planteamiento-general-codominio-manifestacion-codominial.md`

La Instancia Contextual no sustituye al Codominio.

La Instancia Contextual configura el caso.

El Codominio define la forma válida de salida.

La Manifestación Codominial es la salida concreta.

### 34.5. Relación con `documento-unificacion-sistema-transferencia-estructural.md`

El documento de unificación debe representar la cadena nueva:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

---

## 35. Reglas de construcción

### Regla 1 — Declarar la Instancia Regional usada

Toda Instancia Contextual debe declarar la Instancia Regional desde la que se construye.

### Regla 2 — No seleccionar regiones nuevas

La Instancia Contextual no debe activar dimensiones, campos o valores que no estén habilitados.

### Regla 3 — Respetar valores regionalmente fijados

Los valores fijados por la Instancia Regional deben reconocerse como heredados, no reabrirse como si fueran decisiones del caso.

### Regla 4 — Seleccionar valores concretos

La Instancia Contextual debe tomar decisiones de configuración, no limitarse a describir el caso de forma narrativa.

### Regla 5 — Respetar cardinalidad

Cada campo debe respetar su cardinalidad heredada.

### Regla 6 — Justificar selecciones relevantes

Las selecciones importantes deben tener una razón contextual.

### Regla 7 — Mantener compatibilidad con el adaptador

La configuración debe ser consumible por el adaptador o protocolo correspondiente.

### Regla 8 — Conservar trazabilidad

Los campos y valores deben poder rastrearse hacia el sistema mayor.

### Regla 9 — Declarar extensiones

Todo valor no habilitado debe declararse como extensión propuesta, no como valor canónico.

### Regla 10 — No confundir configuración con salida

La Instancia Contextual no debe escribirse como si ya fuera la manifestación codominial.

---

## 36. Validación de una Instancia Contextual

Una Instancia Contextual es válida cuando cumple al menos lo siguiente:

```txt
[ ] Declara una Instancia Regional usada.
[ ] La Instancia Regional existe o está claramente referenciada.
[ ] La realización habilitada coincide con la Instancia Regional.
[ ] Declara el caso configurado.
[ ] Reconoce valores regionalmente fijados cuando existan.
[ ] Selecciona valores concretos en campos habilitados.
[ ] No introduce regiones nuevas de forma silenciosa.
[ ] Respeta cardinalidades.
[ ] Declara restricciones activas.
[ ] Es compatible con un adaptador o protocolo.
[ ] Puede producir una configuración operable.
[ ] Mantiene trazabilidad hacia campos y valores del sistema mayor.
[ ] Distingue caso, configuración y salida.
[ ] Declara extensiones si usa valores no habilitados.
```

---

## 37. Errores frecuentes

### 37.1. Seguir usando el Modelo Base local como fuente inmediata

Error:

```txt
modelo_base_local → instancia_contextual
```

Corrección:

```txt
instancia_regional → instancia_contextual
```

### 37.2. Confundir Instancia Contextual con Instancia Regional

Error:

```txt
La instancia contextual declara qué campos existen para una realización.
```

Corrección:

```txt
La Instancia Regional declara qué campos existen.
La Instancia Contextual selecciona valores dentro de esos campos.
```

### 37.3. Introducir campos no habilitados

Error:

```yaml
seleccion_contextual:
  campo_no_habilitado: valor_x
```

Corrección:

```yaml
extensiones_contextuales_propuestas:
  - campo: campo_no_habilitado
    estado: propuesta_no_validada
```

### 37.4. No distinguir valores fijados y valores seleccionados

Error:

```txt
plataforma: tiktok
```

sin aclarar si el valor fue fijado regionalmente o seleccionado por el caso.

Corrección:

```yaml
valores_regionales_reconocidos:
  plataforma: tiktok
```

### 37.5. Redactar la Instancia Contextual como guion final

Error:

```txt
Hola, hoy te voy a contar la caída de Fouquet...
```

Corrección:

```yaml
funcion_dominante: enseñar
estructura_segmental: apertura_contraste_resolucion
caso_configurado: Fouquet / Luis XIV
```

La frase final pertenece a la manifestación codominial, no a la Instancia Contextual.

### 37.6. Omitir trazabilidad

Error:

```yaml
funcion_dominante: enseñar
```

sin referencia al campo, valor o dimensión de origen.

Corrección:

```yaml
funcion_dominante:
  valor: enseñar
  id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-ensenar-ensenar
```

### 37.7. Convertir la Instancia Contextual en resumen narrativo

Error:

```txt
Este caso trata sobre una persona que comete un error estratégico.
```

Corrección:

```yaml
caso_configurado:
  descripcion_breve: Caso de error estratégico frente a centro de poder.

seleccion_contextual_de_valores:
  funcion_dominante: enseñar
  efecto_buscado: comprension_estrategica
  tension_principal: amenaza_por_exceso_de_visibilidad
```

---

## 38. Patrón recomendado para una IA

Una IA que construya una Instancia Contextual debe seguir este proceso:

### 38.1. Leer la Instancia Regional

Debe identificar qué dimensiones, campos y valores están habilitados.

### 38.2. Identificar el caso

Debe comprender qué caso, idea o situación se quiere configurar.

### 38.3. Distinguir valores fijados de valores abiertos

Debe reconocer qué valores ya vienen determinados regionalmente y cuáles deben seleccionarse contextualemente.

### 38.4. Seleccionar valores concretos

Debe elegir valores permitidos y respetar cardinalidad.

### 38.5. Justificar selecciones principales

Debe explicar por qué ciertos valores organizan mejor el caso.

### 38.6. Validar contra restricciones

Debe revisar compatibilidad con la Instancia Regional y el adaptador.

### 38.7. Entregar configuración operable

Debe producir una Instancia Contextual que pueda ser consumida por el protocolo.

---

## 39. Definición larga consolidada

Una Instancia Contextual es una configuración operable de valores concretos seleccionados dentro del espacio habilitado por una Instancia Regional. Su función es tomar un caso, contexto o material particular y convertirlo en una estructura de entrada compatible con un adaptador o protocolo. A diferencia de una Instancia Regional, no selecciona regiones, dimensiones ni campos desde el sistema mayor, sino valores dentro de campos ya habilitados. A diferencia de una Manifestación Codominial, no es la salida final, sino la configuración que permite producirla. Su validez depende de respetar la Instancia Regional usada, conservar trazabilidad hacia los campos y valores del sistema mayor, declarar restricciones activas y mantener compatibilidad con el adaptador correspondiente.

---

## 40. Definición corta consolidada

Una Instancia Contextual es la selección concreta de valores de caso dentro del espacio configurativo habilitado por una Instancia Regional.

---

## 41. Definición operativa propuesta

Operativamente, una Instancia Contextual es el documento que declara:

```txt
1. qué Instancia Regional la habilita;
2. qué realización está configurando;
3. qué caso o material particular toma como contenido;
4. qué valores regionales reconoce como fijados;
5. qué valores contextuales selecciona;
6. qué restricciones están activas;
7. qué adaptador o protocolo podrá consumirla;
8. qué familia codominial espera alimentar;
9. y cómo se conserva trazabilidad hacia el sistema mayor.
```

---

## 42. Fórmula sintética

```txt
Instancia Regional:
  habilita campos y valores posibles.

Instancia Contextual:
  selecciona valores concretos para un caso.

Adaptador:
  transforma la configuración en salida.

Manifestación Codominial:
  aparece como objeto final dentro del codominio.
```

O en forma de cadena:

```txt
instancia_regional
  → instancia_contextual
    → adaptador / protocolo
      → manifestacion_codominial
```

---

## 43. Cierre

La actualización de este planteamiento es necesaria porque la Instancia Contextual ya no debe entenderse como una instancia directa de un Modelo Base local.

La nueva arquitectura exige una mediación previa:

```txt
Instancia Regional
```

La Instancia Regional selecciona el espacio de posibilidades.

La Instancia Contextual selecciona valores dentro de ese espacio.

El Adaptador transforma esa configuración en una manifestación.

La Manifestación Codominial aparece como salida concreta.

Por tanto, la migración conceptual puede resumirse así:

```txt
antes:
  Instancia Contextual = caso configurado dentro de un Modelo Base local.

ahora:
  Instancia Contextual = caso configurado dentro de una Instancia Regional.
```

Esta reformulación conserva la utilidad de la Instancia Contextual, pero la ubica correctamente dentro de la arquitectura nueva.

Su función no desaparece.

Se vuelve más precisa:

```txt
convertir un caso particular en una configuración operable,
seleccionando valores concretos dentro de una región previamente habilitada.
```
