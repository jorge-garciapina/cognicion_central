# Planteamiento del Adaptador

## Documento de definición actualizado para la arquitectura por Instancias Regionales

---

## 0. Propósito del documento

Este documento reformula el concepto de **Adaptador** dentro de la arquitectura actualizada de la ACCD y del sistema de transferencia estructural ampliado.

La versión anterior del planteamiento todavía podía leerse como si el Adaptador recibiera una **Instancia Contextual construida directamente sobre un Modelo Base local**. Esa formulación ya no es la más adecuada para la arquitectura nueva.

En la arquitectura actual, el Adaptador no debe entenderse como la pieza que cierra una cadena simple:

```txt
modelo_base_local
  → instancia_contextual
    → adaptador
      → manifestacion_codominial
```

Debe entenderse como la pieza que opera después de una cadena más precisa:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

Este documento existe para fijar esa actualización.

La nueva definición puede resumirse así:

> Un Adaptador es un operador protocolario de proyección codominial que recibe una Instancia Contextual compatible, construida dentro del espacio habilitado por una Instancia Regional, y la transforma en una Manifestación Codominial válida dentro de un codominio específico.

El cambio principal es este:

```txt
antes:
  Adaptador = transforma una Instancia Contextual construida sobre un Modelo Base.

ahora:
  Adaptador = transforma una Instancia Contextual habilitada por una Instancia Regional.
```

---

## 1. Definición breve

Un **Adaptador** es el mecanismo que proyecta una **Instancia Contextual** hacia una salida externa válida dentro de un **codominio** (i.e. "Manifestación Codominial").

Dicho de forma compacta:

```txt
Adaptador = operador de proyección codominial
            aplicado a una Instancia Contextual compatible
```

O de forma funcional:

```txt
adaptador_codominio_X(instancia_contextual)
  → manifestacion_codominial_X
```

El Adaptador no crea el sistema mayor de regiones.

El Adaptador no selecciona la Instancia Regional.

El Adaptador no selecciona los valores contextuales como función principal.

El Adaptador no es el Codominio.

El Adaptador no es la Manifestación final.

El Adaptador es el mecanismo que transforma una configuración ya seleccionada en una salida perteneciente a una familia formal de manifestaciones.

---

## 2. Definición desarrollada

Un Adaptador es una estructura operativa compuesta que define cómo una Instancia Contextual debe convertirse en una Manifestación Codominial.

La Instancia Contextual contiene valores seleccionados dentro de campos habilitados por una Instancia Regional.

El Adaptador lee esos valores y los interpreta como **instrucciones compositivas**.

Su tarea no consiste en “hacer bonito” un contenido ni en cambiar un texto de formato. Su tarea es más profunda:

```txt
1. recibir una configuración contextual validada;
2. reconocer qué valores están activos;
3. leer valores regionalmente fijados cuando sean relevantes;
4. aplicar reglas protocolarias de composición;
5. resolver tensiones entre contribuciones;
6. construir componentes de salida;
7. verificar compatibilidad con el codominio;
8. producir una Manifestación Codominial trazable.
```

Por tanto, el Adaptador pertenece al plano de la **transformación**.

La Instancia Contextual pertenece al plano de la **configuración de entrada**.

El Codominio pertenece al plano de la **forma válida de salida**.

La Manifestación Codominial pertenece al plano de la **salida concreta**.

---

## 3. Tesis central

La tesis central de este planteamiento es:

> El Adaptador no debe depender directamente de un Modelo Base local ni recibir una región completa como entrada activa; debe consumir una Instancia Contextual ya construida, validada y compatible con una Instancia Regional.

Esto separa responsabilidades:

```txt
modelo_base_de_regiones:
  organiza el sistema mayor de posibilidades.

grafo_de_regiones:
  materializa regiones, dimensiones, campos, valores y relaciones.

instancia_regional:
  habilita un espacio de posibilidades para una realización.

instancia_contextual:
  selecciona valores concretos dentro de ese espacio.

adaptador:
  proyecta esos valores hacia una salida codominial.

codominio:
  define la familia formal de salidas válidas.

manifestacion_codominial:
  es la salida concreta producida.
```

El Adaptador solo puede operar correctamente si la Instancia Contextual ya resolvió la selección de valores.

Si el Adaptador tiene que seleccionar campos, inventar valores o reconstruir la región, entonces está absorbiendo responsabilidades que no le corresponden.

---

## 4. Lugar dentro de la cadena completa

La cadena completa debe representarse así:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

El Adaptador ocupa el lugar de paso entre:

```txt
configuración contextual operable
```

y:

```txt
salida codominial construida
```

No ocupa el lugar de la región.

No ocupa el lugar de la instancia contextual.

No ocupa el lugar de la manifestación.

Su posición exacta es:

```txt
instancia_contextual
  → adaptador / protocolo
    → manifestacion_codominial
```

Cuando se incluye el codominio explícitamente:

```txt
instancia_contextual
  → adaptador / protocolo
    → codominio
      → manifestacion_codominial
```

La mención del codominio no significa que el Adaptador produzca primero un codominio y luego una manifestación. Significa que el Adaptador produce una manifestación **bajo las reglas del codominio**.

---

## 5. Fórmula operativa

La fórmula mínima es:

```txt
A_C(IC_i) → MC_C_i
```

Donde:

```txt
A_C = adaptador especializado en el codominio C
IC_i = instancia contextual i compatible con ese adaptador
MC_C_i = manifestación codominial producida en el codominio C
```

La cadena completa puede expresarse así:

```txt
IR_R = instancia_regional(realizacion_R)
IC_R_i = seleccion_contextual(IR_R, caso_i, contexto_i)
A_C(IC_R_i) = MC_C_i
```

Donde:

```txt
IR_R:
  habilita los campos, valores posibles y restricciones para la realización R.

IC_R_i:
  selecciona valores concretos para el caso i.

A_C:
  proyecta esa configuración hacia el codominio C.

MC_C_i:
  es la salida concreta producida.
```

La fórmula importante es:

```txt
adaptador(instancia_contextual_validada)
  → manifestacion_codominial
```

No debe formularse como:

```txt
adaptador(modelo_base)
  → manifestacion_codominial
```

ni como:

```txt
adaptador(instancia_regional)
  → manifestacion_codominial
```

salvo que se esté hablando de un proceso especial de generación o diagnóstico de adaptadores, no de la operación normal de proyección.

---

## 6. Diferencia entre Adaptador e Instancia Regional

La **Instancia Regional** habilita el espacio de posibilidades.

El **Adaptador** transforma una selección contextual dentro de ese espacio.

```txt
Instancia Regional:
  declara qué dimensiones, campos, valores posibles y restricciones quedan disponibles.

Adaptador:
  define cómo los valores seleccionados inciden en la construcción de la salida.
```

Ejemplo abstracto:

```yaml
instancia_regional:
  campo: funcion_dominante
  valores_posibles:
    - enseñar
    - persuadir
    - diagnosticar
    - convertir
```

La Instancia Regional no produce la salida.

La Instancia Contextual selecciona:

```yaml
instancia_contextual:
  funcion_dominante: enseñar
```

El Adaptador aplica una regla:

```yaml
adaptador:
  si funcion_dominante = enseñar: activar_estructura_explicativa
    priorizar_claridad
    insertar_momento_de_comprension
```

Por tanto:

```txt
Instancia Regional = qué puede seleccionarse.
Instancia Contextual = qué se seleccionó.
Adaptador = qué hacer compositivamente con lo seleccionado.
```

---

## 7. Diferencia entre Adaptador e Instancia Contextual

La **Instancia Contextual** configura valores.

El **Adaptador** proyecta esos valores hacia una salida.

```txt
Instancia Contextual:
  selecciona valores de caso dentro de campos habilitados.

Adaptador:
  transforma esos valores en componentes de manifestación.
```

La Instancia Contextual responde:

```txt
¿Qué valores toma este caso dentro de la región habilitada?
```

El Adaptador responde:

```txt
¿Cómo se convierten esos valores en una salida perteneciente a un codominio?
```

Ejemplo:

```yaml
instancia_contextual:
  funcion_dominante: enseñar
  efecto_buscado:
    dominante: comprension_rapida
  estado_atencional: atencion_superficial
  regimen_de_activacion_atencional: apertura_inmediata
```

El Adaptador puede traducir eso en:

```yaml
manifestacion_codominial:
  apertura:
    funcion: capturar_atencion_y_plantear_contraste
  desarrollo:
    funcion: explicar_mecanismo_central
  cierre:
    funcion: fijar_aprendizaje_en_formula_recordable
```

La Instancia Contextual no debería escribir directamente la apertura final.

El Adaptador sí puede construirla.

---

## 8. Diferencia entre Adaptador y Codominio

El **Codominio** es el espacio de salidas posibles.

El **Adaptador** es el mecanismo que produce una salida dentro de ese espacio.

```txt
Codominio:
  familia formal de salidas válidas.

Adaptador:
  operador que construye una salida perteneciente a esa familia.
```

Ejemplos de codominios:

```txt
codominio_video_corto
codominio_video_largo
codominio_carrusel
codominio_newsletter
codominio_clase
codominio_landing
codominio_hilo
codominio_documento_teorico
codominio_prompt_operativo
codominio_jsonl_materializable
```

Ejemplos de adaptadores:

```txt
adaptador_video_corto
adaptador_video_largo
adaptador_carrusel
adaptador_newsletter
adaptador_clase
adaptador_landing
adaptador_hilo
adaptador_documento_teorico
adaptador_prompt_operativo
adaptador_jsonl_materializable
```

La diferencia es esta:

```txt
codominio_video_corto:
  define qué cuenta como salida válida de video corto.

adaptador_video_corto:
  transforma una Instancia Contextual en una salida válida de video corto.
```

---

## 9. Diferencia entre Adaptador y Manifestación Codominial

La **Manifestación Codominial** es la salida concreta.

El **Adaptador** es el mecanismo que la produce.

```txt
Adaptador:
  proceso de proyección.

Manifestación Codominial:
  resultado de la proyección.
```

Ejemplo:

```txt
adaptador_carrusel:
  reglas para convertir una configuración en una secuencia de láminas.

manifestacion_codominial_carrusel:
  carrusel concreto con portada, slides internos y cierre.
```

No debe confundirse:

```txt
incorrecto:
  el adaptador es el guion final.

correcto:
  el adaptador produce el guion final.
```

---

## 10. Adaptador y Protocolo

En este marco, el Adaptador puede entenderse como una **función protocolizada**.

Esto significa que el Adaptador no es una función libre ni una intuición de salida.

Debe estar regulado por un protocolo.

El protocolo indica:

```txt
1. qué entrada recibe;
2. qué estructura debe tener la Instancia Contextual;
3. qué valores reconoce;
4. qué contribución corresponde a cada valor;
5. qué zonas de salida existen;
6. cómo se asignan valores a zonas de salida;
7. cómo se resuelven conflictos;
8. qué restricciones codominiales se respetan;
9. cómo se valida la salida;
10. cómo se conserva trazabilidad.
```

Por eso puede decirse:

```txt
Adaptador = función protocolizada de proyección codominial
```

Y también:

```txt
Protocolo = explicitación operativa del Adaptador
```

En algunos documentos puede aparecer la expresión:

```txt
adaptador / protocolo
```

Esa formulación es útil cuando todavía no se quiere separar estrictamente:

```txt
1. el mecanismo abstracto de transformación;
2. el documento operativo que declara sus reglas.
```

Pero para mayor precisión:

```txt
Adaptador:
  entidad funcional.

Protocolo:
  regla explícita o documento operativo que implementa esa entidad funcional.
```

---

## 11. Qué debe recibir un Adaptador

Un Adaptador debe recibir una **Instancia Contextual operable**.

Eso significa que la entrada debe declarar al menos:

```txt
1. la Instancia Regional usada;
2. la realización habilitada;
3. el caso configurado;
4. los valores regionales reconocidos;
5. la selección contextual de valores;
6. las restricciones activas;
7. la compatibilidad con el adaptador;
8. la familia codominial esperada;
9. la trazabilidad mínima hacia campos y valores.
```

El Adaptador no debería recibir como entrada principal:

```txt
idea_en_crudo
modelo_base_de_regiones
instancia_regional_completa
grafo_de_regiones_completo
manifestacion_ya_redactada
```

Puede consultar o referenciar esas entidades, pero su entrada activa debe ser la Instancia Contextual.

---

## 12. Por qué el Adaptador no debe trabajar con ideas en crudo

Una idea en crudo puede ser:

```txt
una frase
una intuición
una fotografía
una página de libro
una conversación
una canción
un caso
un texto informal
un modelo incompleto
una observación visual
```

Ese material todavía no está configurado dentro del sistema.

El Adaptador no debe ser responsable de convertir una intuición cruda en una configuración estructural.

Ese trabajo corresponde a fases anteriores:

```txt
material crudo
  → modelado / lectura / selección regional
    → instancia_contextual
      → adaptador
        → manifestacion_codominial
```

Si el Adaptador recibe ideas en crudo, se ve obligado a adivinar:

```txt
qué campos importan;
qué valores están activos;
qué restricciones aplican;
qué codominio conviene;
qué intención domina;
qué parte del caso debe preservarse;
qué forma de salida corresponde.
```

Eso vuelve opaca la salida.

La regla correcta es:

```txt
idea_en_crudo ≠ entrada adecuada del Adaptador
instancia_contextual_validada = entrada adecuada del Adaptador
```

---

## 13. Relación actualizada entre Adaptador y Modelo Base

El Adaptador no depende ya de un **Modelo Base local** como fuente inmediata.

Su relación con el Modelo Base debe entenderse de manera mediada:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador
```

Esto significa que el Adaptador puede estar diseñado con conocimiento del sistema regional mayor, pero no debe operar directamente sobre él como entrada principal.

La relación correcta es:

```txt
Modelo Base de Regiones:
  organiza el universo de posibilidades.

Grafo de Regiones:
  materializa las entidades disponibles.

Instancia Regional:
  habilita una zona de ese universo para una realización.

Instancia Contextual:
  selecciona valores concretos.

Adaptador:
  proyecta la selección hacia una salida.
```

Por tanto, debe evitarse la formulación:

```txt
El Adaptador depende estructuralmente del Modelo Base local.
```

Debe reemplazarse por:

```txt
El Adaptador depende de una Instancia Contextual válida, cuya validez depende de una Instancia Regional, la cual a su vez se apoya en el sistema mayor de regiones.
```

---

## 14. Compatibilidad de entrada

Un Adaptador debe declarar qué clase de Instancia Contextual puede consumir.

Ejemplo:

```yaml
entrada_esperada:
  tipo: instancia_contextual
  instancia_regional_compatible: instancia-regional-video-corto-tiktok
  realizacion_compatible: video_corto
  familia_codominial_esperada: guion_audiovisual_breve
  campos_obligatorios:
    - funcion_dominante
    - efecto_buscado
    - estado_atencional
    - regimen_de_activacion_atencional
    - construccion_del_caso
    - comparecencia_performativa
    - marco_de_materializacion
  campos_opcionales:
    - recursos_complementarios
    - restricciones_estilisticas
    - notas_de_ejecucion
```

La compatibilidad no debe basarse solo en el nombre del archivo.

Debe basarse en:

```txt
1. la Instancia Regional usada;
2. la realización habilitada;
3. los campos disponibles;
4. los valores seleccionados;
5. las restricciones activas;
6. el codominio esperado;
7. la completitud mínima de la configuración.
```

---

## 15. Protocolo de lectura

Antes de componer la salida, el Adaptador debe leer la Instancia Contextual.

Un protocolo de lectura debe definir:

```txt
1. qué campos se leen primero;
2. qué valores tienen prioridad;
3. qué campos actúan como restricciones;
4. qué campos actúan como orientadores globales;
5. qué campos actúan sobre zonas específicas de la salida;
6. qué hacer si falta un campo obligatorio;
7. qué hacer si aparece un valor no reconocido;
8. qué hacer si hay conflicto entre valores.
```

Ejemplo abstracto:

```yaml
protocolo_de_lectura:
  prioridad_1:
    - valores_regionales_reconocidos
    - familia_codominial_esperada
    - restricciones_activas

  prioridad_2:
    - funcion_dominante
    - efecto_buscado
    - accion_esperada

  prioridad_3:
    - dinamica_atencional
    - construccion_del_caso
    - comparecencia_performativa

  prioridad_4:
    - recursos_complementarios
    - notas_contextuales
```

La idea es que el Adaptador no lea todo como si tuviera el mismo peso.

Algunos valores gobiernan la arquitectura global.

Otros modulan zonas particulares.

Otros solo funcionan como restricciones o notas auxiliares.

---

## 16. Protocolo de composición dimensional

Cuando el Adaptador opera sobre una Instancia Contextual, no debe hacerlo de forma global e indiferenciada.

Debe considerar dimensiones, campos y valores.

La estructura general es:

```txt
para cada dimension relevante:
  para cada campo seleccionado:
    para cada valor activo:
      aplicar contribucion protocolaria
      sobre una zona de salida
      bajo restricciones del codominio
```

Ejemplo abstracto:

```yaml
protocolo_de_composicion:
  dimension_orientacion_funcional_pragmatica:
    funcion_dominante:
      enseñar:
        contribucion: activar_estructura_explicativa
        zona_de_salida: arquitectura_global

      persuadir:
        contribucion: activar_estructura_argumentativa
        zona_de_salida: arquitectura_global

    efecto_buscado:
      comprension_rapida:
        contribucion: reducir_carga_introductoria_y_priorizar_claridad
        zona_de_salida: apertura_y_desarrollo

      curiosidad:
        contribucion: introducir_brecha_de_informacion
        zona_de_salida: apertura
```

Esto permite que cada valor tenga una incidencia efectiva.

---

## 17. La contribución como unidad mínima de operación

La unidad mínima del Adaptador suele ser la **contribución asociada a un valor activo**.

Un valor activo debe activar una contribución.

Una contribución puede:

```txt
fijar
seleccionar
restringir
modular
intensificar
distribuir
ordenar
activar
desactivar
priorizar
derivar
proyectar
justificar
validar
```

Ejemplo:

```yaml
valor_activo:
  dimension: dimension_dinamica_atencional_y_procesual
  campo: regimen_de_activacion_atencional
  valor: apertura_inmediata

contribucion_protocolaria:
  tipo: ordenar
  zona_de_salida: apertura
  efecto: iniciar_sin_preámbulo_y_presentar_contraste_temprano
```

Esto evita que la salida dependa de intuición libre.

La salida se vuelve resultado de contribuciones compositivas.

---

## 18. Zonas de incidencia del Adaptador

El Adaptador debe saber sobre qué partes de la Manifestación Codominial puede actuar.

Cada codominio tiene sus propias zonas de salida.

### 18.1. Codominio de video corto

```yaml
zonas_de_salida:
  - apertura
  - desarrollo_breve
  - giro_o_contraste
  - cierre
  - texto_oral
  - texto_en_pantalla
  - indicaciones_visuales
  - indicaciones_sonoras
  - recursos_generables
```

### 18.2. Codominio de carrusel

```yaml
zonas_de_salida:
  - portada
  - lamina_1
  - laminas_de_desarrollo
  - lamina_de_contraste
  - lamina_de_sintesis
  - cierre_guardable
  - llamada_a_accion
```

### 18.3. Codominio de newsletter

```yaml
zonas_de_salida:
  - asunto
  - encabezado
  - apertura
  - cuerpo
  - secciones
  - transiciones
  - cierre
  - llamada_a_accion
```

### 18.4. Codominio de clase

```yaml
zonas_de_salida:
  - objetivo_de_aprendizaje
  - introduccion
  - explicación_principal
  - ejemplos
  - preguntas
  - ejercicios
  - recapitulacion
  - cierre_didactico
```

### 18.5. Codominio de documento teórico

```yaml
zonas_de_salida:
  - proposito
  - definicion_breve
  - definicion_desarrollada
  - lugar_en_la_arquitectura
  - relaciones_conceptuales
  - estructura_operativa
  - validacion
  - errores_frecuentes
  - cierre
```

El Adaptador traduce valores contextuales hacia estas zonas.

---

## 19. El Adaptador no es un simple formateador

Es un error pensar que el Adaptador solo cambia el formato de algo ya hecho.

Formulación incorrecta:

```txt
texto largo → carrusel
texto largo → video corto
texto largo → newsletter
```

Eso describe una conversión superficial.

La formulación correcta es:

```txt
instancia_contextual
  → reglas_de_proyeccion_codominial
    → manifestacion_codominial
```

El Adaptador no toma una salida acabada y la maquilla.

Toma una configuración estructural y construye una salida desde ella.

Por eso:

```txt
incorrecto:
  adaptador = formateador de contenido

correcto:
  adaptador = operador protocolario de proyección estructural
```

---

## 20. El Adaptador no debe compensar una Instancia Contextual incompleta

Otro error frecuente es diseñar Adaptadores que tienen que adivinar lo que la Instancia Contextual no declaró.

Una cadena débil se ve así:

```txt
instancia_contextual incompleta
  → adaptador obligado a inferir valores faltantes
    → salida opaca
```

Una cadena correcta se ve así:

```txt
instancia_regional clara
  → instancia_contextual validada
    → adaptador protocolario
      → manifestacion_codominial trazable
```

El Adaptador puede tener reglas de degradación para entradas incompletas, pero no debe normalizar la opacidad.

Debe poder decir:

```txt
no puedo proyectar porque falta un valor obligatorio;
no puedo proyectar porque el codominio esperado no coincide;
no puedo proyectar porque hay un valor no habilitado;
no puedo proyectar porque la configuración contradice una restricción activa.
```

El Adaptador correcto no es un compensador de vacíos.

Es un operador de transformación.

---

## 21. Adaptadores múltiples sobre una misma Instancia Contextual

Una misma Instancia Contextual puede alimentar distintos Adaptadores si la configuración contiene valores suficientemente generales y si cada Adaptador declara compatibilidad.

Ejemplo:

```txt
instancia_contextual_caso_X
  → adaptador_video_corto
    → manifestacion_video_corto

instancia_contextual_caso_X
  → adaptador_carrusel
    → manifestacion_carrusel

instancia_contextual_caso_X
  → adaptador_newsletter
    → manifestacion_newsletter
```

Pero esta reutilización tiene un límite.

Si cada codominio exige valores regionales diferentes, entonces puede ser necesaria una Instancia Contextual distinta para cada Instancia Regional.

Ejemplo:

```txt
caso_X
  → instancia_regional_video_corto
    → instancia_contextual_video_corto_caso_X
      → adaptador_video_corto

caso_X
  → instancia_regional_carrusel
    → instancia_contextual_carrusel_caso_X
      → adaptador_carrusel
```

La regla es:

```txt
misma Instancia Contextual puede alimentar varios Adaptadores
solo si todos los Adaptadores reconocen esa configuración como compatible.
```

---

## 22. Adaptadores distintos dentro de una misma realización

También pueden existir varios Adaptadores para una misma realización.

Por ejemplo, dentro de una realización de video corto:

```txt
adaptador_video_corto_explicativo
adaptador_video_corto_persuasivo
adaptador_video_corto_narrativo
adaptador_video_corto_comercial
adaptador_video_corto_documental
```

Todos pueden pertenecer al mismo codominio general:

```txt
codominio_video_corto
```

pero aplicar reglas distintas de composición.

Esto permite especializar el modo de proyección sin alterar el sistema regional previo.

---

## 23. Adaptador como función de muchas variables

El Adaptador puede entenderse como una función compositiva que recibe muchos valores activos.

```txt
A_C(
  valor_1,
  valor_2,
  valor_3,
  ...,
  valor_n
)
→ MC_C
```

Pero esos valores no llegan sueltos.

Llegan organizados dentro de una Instancia Contextual.

Por eso la forma correcta es:

```txt
A_C(IC)
  → MC_C
```

La analogía de función es útil porque muestra que la salida no depende de un único valor.

La manifestación resulta de interacciones entre:

```txt
función dominante
efecto buscado
estado atencional
estructura temporal
comparecencia
caso configurado
restricciones codominiales
recursos complementarios
```

Sin embargo, no se trata necesariamente de una función numérica.

Es una función composicional, semántica y protocolaria.

---

## 24. Adaptador e instancias como condensaciones intergrafales

La Instancia Contextual puede condensar valores provenientes de distintas zonas del sistema mayor:

```txt
grafo_funcional
  → dimensión de orientación pragmática

grafo_atencional
  → dimensión de dinámica atencional

grafo_receptoral
  → dimensión de acoplamiento receptoral

grafo_identitario
  → dimensión de comparecencia performativa

grafo_materializador
  → dimensión de marco de materialización
```

El Adaptador no debe consumir directamente todos esos grafos.

Debe consumir la Instancia Contextual que ya hizo la selección.

Esto conserva una separación útil:

```txt
grafos:
  almacenan estructura y posibilidades.

instancia_regional:
  habilita un subconjunto de esas posibilidades.

instancia_contextual:
  selecciona valores concretos.

adaptador:
  proyecta los valores seleccionados.
```

---

## 25. Tipos generales de Adaptadores

Pueden existir muchos tipos de Adaptadores.

### 25.1. `adaptador_video_corto`

Recibe una Instancia Contextual compatible y produce una Manifestación Codominial de video corto.

### 25.2. `adaptador_video_largo`

Recibe una Instancia Contextual compatible y produce una manifestación audiovisual extensa o desarrollada.

### 25.3. `adaptador_carrusel`

Recibe una Instancia Contextual compatible y produce una secuencia visual por láminas.

### 25.4. `adaptador_newsletter`

Recibe una Instancia Contextual compatible y produce una pieza escrita distribuible por correo o publicación periódica.

### 25.5. `adaptador_clase`

Recibe una Instancia Contextual compatible y produce una estructura didáctica para enseñanza.

### 25.6. `adaptador_producto`

Recibe una Instancia Contextual compatible y produce una manifestación orientada a producto, oferta o empaquetamiento comercial.

### 25.7. `adaptador_landing`

Recibe una Instancia Contextual compatible y produce una página de presentación, conversión o captura.

### 25.8. `adaptador_hilo`

Recibe una Instancia Contextual compatible y produce una secuencia textual breve distribuida en publicaciones encadenadas.

### 25.9. `adaptador_documento_teorico`

Recibe una Instancia Contextual compatible y produce un documento conceptual estructurado.

### 25.10. `adaptador_jsonl_materializable`

Recibe una Instancia Contextual compatible y produce un artefacto materializable en JSONL.

Estos Adaptadores pueden compartir una lógica común, pero cada uno debe declarar sus reglas de salida.

---

## 26. Estructura interna recomendada de un Adaptador

Un Adaptador suficientemente claro debería contener al menos estas partes:

```yaml
adaptador:
  identificacion:
    id:
    nombre:
    tipo: adaptador
    version:
    estado:

  codominio:
    id:
    familia_codominial:
    tipo_de_manifestacion:
    descripcion_de_salida_valida:

  entrada_esperada:
    tipo: instancia_contextual
    instancia_regional_compatible:
    realizacion_compatible:
    familia_codominial_esperada:
    campos_obligatorios:
    campos_opcionales:
    valores_regionales_requeridos:

  protocolo_de_lectura:
    orden_de_prioridad:
    campos_globales:
    campos_moduladores:
    campos_restrictivos:
    manejo_de_incompletitud:
    manejo_de_valores_no_reconocidos:

  protocolo_de_composicion:
    reglas_por_dimension:
    reglas_por_campo:
    reglas_por_valor:
    contribuciones:

  zonas_de_salida:
    componentes:
    capas:
    bloques:
    restricciones_formales:

  reglas_de_integracion:
    resolucion_de_conflictos:
    prioridades:
    compatibilidades:
    criterios_de_precedencia:

  criterios_de_validacion:
    compatibilidad_de_entrada:
    cobertura_protocolaria:
    incidencia_efectiva:
    compatibilidad_codominial:
    coherencia_interna:
    trazabilidad:
    reusabilidad:

  trazabilidad:
    correspondencia_valor_contribucion:
    correspondencia_contribucion_componente:
    justificacion_de_decisiones:
```

Esta estructura vuelve auditable el Adaptador.

---

## 27. Ejemplo abstracto actualizado

Supongamos una Instancia Regional:

```yaml
instancia_regional_x:
  campos_habilitados:
    dimension_1:
      campo_1:
        valores_posibles:
          - valor_1_a
          - valor_1_b
    dimension_2:
      campo_2:
        valores_posibles:
          - valor_2_a
          - valor_2_b
```

Una Instancia Contextual selecciona:

```yaml
instancia_contextual_x_001:
  instancia_regional_usada: instancia_regional_x

  seleccion_contextual_de_valores:
    dimension_1:
      campo_1: valor_1_b
    dimension_2:
      campo_2: valor_2_a
```

Un Adaptador define:

```yaml
adaptador_codominio_y:
  entrada_esperada:
    tipo: instancia_contextual
    instancia_regional_compatible: instancia_regional_x

  protocolo_de_composicion:
    dimension_1:
      campo_1:
        valor_1_a:
          contribucion: accion_A
          zona_de_salida: componente_1
        valor_1_b:
          contribucion: accion_B
          zona_de_salida: componente_2

    dimension_2:
      campo_2:
        valor_2_a:
          contribucion: accion_C
          zona_de_salida: componente_3
        valor_2_b:
          contribucion: accion_D
          zona_de_salida: componente_4
```

La Manifestación Codominial resultante contendrá:

```yaml
manifestacion_codominial_y:
  componente_2:
    construido_por: accion_B
    origen: dimension_1.campo_1.valor_1_b

  componente_3:
    construido_por: accion_C
    origen: dimension_2.campo_2.valor_2_a
```

El Adaptador no usó todos los valores posibles.

Usó los valores activos seleccionados por la Instancia Contextual.

---

## 28. Trazabilidad del Adaptador

Un Adaptador debe permitir reconstruir por qué la salida quedó como quedó.

La cadena de trazabilidad completa es:

```txt
valor_del_sistema_mayor
  → habilitacion_regional
    → seleccion_contextual
      → regla_del_adaptador
        → contribucion_protocolaria
          → componente_de_manifestacion
```

Ejemplo:

```yaml
trazabilidad:
  entrada:
    dimension: dimension_dinamica_atencional_y_procesual
    campo: regimen_de_activacion_atencional
    valor: apertura_inmediata

  regla_del_adaptador:
    id: regla-apertura-inmediata-video-corto
    tipo: ordenar

  contribucion:
    efecto: iniciar_sin_preámbulo
    zona_de_salida: apertura

  resultado:
    componente: apertura
    forma: contraste_directo_desde_el_inicio
```

Si la salida falla, la trazabilidad permite revisar:

```txt
1. si el valor de entrada era incorrecto;
2. si el valor no estaba habilitado regionalmente;
3. si la selección contextual fue débil;
4. si la regla del adaptador estaba mal diseñada;
5. si hubo conflicto con otra contribución;
6. si el codominio estaba mal especificado;
7. si la manifestación final no respetó la estructura esperada.
```

---

## 29. Validación del Adaptador

Un Adaptador es válido cuando cumple al menos lo siguiente:

```txt
[ ] Declara el codominio al que proyecta.
[ ] Declara qué tipo de Instancia Contextual puede recibir.
[ ] Declara la Instancia Regional o familia de Instancias Regionales compatibles.
[ ] Declara campos obligatorios y opcionales.
[ ] Declara protocolo de lectura.
[ ] Declara protocolo de composición.
[ ] Asocia valores activos con contribuciones efectivas.
[ ] Asocia contribuciones con zonas de salida.
[ ] Declara reglas de resolución de conflictos.
[ ] Declara criterios de compatibilidad codominial.
[ ] Puede detectar entradas incompletas o incompatibles.
[ ] No inventa valores no seleccionados.
[ ] No introduce campos no habilitados como si fueran canónicos.
[ ] Produce una Manifestación Codominial válida.
[ ] Conserva trazabilidad entrada → regla → salida.
[ ] Puede reutilizarse con más de una Instancia Contextual compatible.
```

---

## 30. Errores frecuentes

### 30.1. Seguir usando el Modelo Base local como entrada inmediata

Error:

```txt
modelo_base_local
  → adaptador
```

Corrección:

```txt
instancia_contextual
  → adaptador
```

Con cadena completa:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador
```

### 30.2. Confundir Adaptador con Instancia Regional

Error:

```txt
El Adaptador declara qué campos existen.
```

Corrección:

```txt
La Instancia Regional declara qué campos existen.
El Adaptador declara cómo los valores seleccionados inciden en la salida.
```

### 30.3. Confundir Adaptador con Instancia Contextual

Error:

```txt
El Adaptador selecciona los valores del caso.
```

Corrección:

```txt
La Instancia Contextual selecciona valores.
El Adaptador transforma valores seleccionados.
```

### 30.4. Confundir Adaptador con Manifestación Codominial

Error:

```txt
El Adaptador es el guion, carrusel, clase o newsletter final.
```

Corrección:

```txt
El Adaptador produce el guion, carrusel, clase o newsletter final.
```

### 30.5. Diseñar Adaptadores sin Codominio claro

Error:

```txt
adaptador_generico_de_contenido
```

sin declarar qué familia de salida produce.

Corrección:

```yaml
adaptador:
  codominio: codominio_carrusel
  tipo_de_manifestacion: secuencia_visual_por_laminas
```

### 30.6. Hacer que el Adaptador adivine

Error:

```txt
La Instancia Contextual no declara efecto buscado, pero el Adaptador inventa uno.
```

Corrección:

```txt
El Adaptador debe marcar incompletitud o aplicar una regla explícita de degradación.
```

### 30.7. Diseñar reglas sin trazabilidad

Error:

```txt
La salida tiene apertura dramática, pero no se sabe qué valor la produjo.
```

Corrección:

```yaml
apertura:
  origen:
    campo: regimen_de_activacion_atencional
    valor: apertura_inmediata
  regla: regla-apertura-inmediata
```

### 30.8. Usar el Adaptador como formateador superficial

Error:

```txt
Tomar un texto largo y dividirlo en slides.
```

Corrección:

```txt
Construir una secuencia de slides desde una Instancia Contextual, respetando función, efecto, atención, caso, restricciones y codominio.
```

---

## 31. Relación con ACCD

Dentro de la ACCD, el Adaptador permite conectar configuraciones internas con manifestaciones externas.

Las estructuras internas pueden estar organizadas como:

```txt
grafos conceptuales
grafos atencionales
grafos receptorales
grafos identitarios
grafos comerciales
grafos de materialización
grafos de evidencia
grafos de regiones
```

Pero el Adaptador no debe consumir directamente todos esos grafos.

La cadena correcta es:

```txt
grafos internos
  → instancia_regional
    → instancia_contextual
      → adaptador
        → manifestación externa
```

El Adaptador cumple una función de proyección final.

Permite que una misma arquitectura interna produzca múltiples superficies externas sin perder coherencia estructural.

---

## 32. Relación con `planteamiento-instancia-contextual.md`

El planteamiento actualizado de Instancia Contextual establece que esta ya no debe construirse directamente desde un Modelo Base local.

La Instancia Contextual se construye desde una Instancia Regional.

Por tanto, el Adaptador debe actualizarse de forma equivalente.

Cambio recomendado:

```txt
antes:
  Adaptador recibe una Instancia Contextual construida sobre un Modelo Base.

ahora:
  Adaptador recibe una Instancia Contextual construida dentro del espacio habilitado por una Instancia Regional.
```

El Adaptador debe validar que la Instancia Contextual sea compatible con su contrato de entrada.

---

## 33. Relación con `planteamiento-instancia-regional.md`

La Instancia Regional habilita campos y valores.

El Adaptador no debe repetir esa función.

Cambio recomendado:

```txt
Instancia Regional:
  habilita el espacio de posibilidades.

Instancia Contextual:
  selecciona valores concretos.

Adaptador:
  transforma valores seleccionados en salida.
```

Si un Adaptador necesita un campo que la Instancia Regional no habilitó, no debe inventarlo.

Debe declarar incompatibilidad o solicitar actualización de la Instancia Regional.

---

## 34. Relación con `planteamiento-general-codominio-manifestacion-codominial.md`

El Adaptador debe declarar el codominio que produce.

El codominio define qué cuenta como salida válida.

La Manifestación Codominial es el objeto concreto que resulta.

Cambio recomendado:

```txt
Adaptador:
  mecanismo de proyección.

Codominio:
  espacio formal de salida válida.

Manifestación Codominial:
  salida concreta producida.
```

---

## 35. Relación con `documento-unificacion-sistema-transferencia-estructural.md`

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

El Adaptador debe aparecer como el componente que transforma la configuración contextual, no como el componente que lee directamente el modelo base.

---

## 36. Patrón recomendado para una IA que construye un Adaptador

Una IA que construya un Adaptador debe seguir este proceso:

### 36.1. Identificar el codominio

Debe determinar qué familia de salida producirá el Adaptador.

Ejemplo:

```txt
codominio_carrusel
codominio_clase
codominio_documento_teorico
```

### 36.2. Leer la Instancia Regional compatible

Debe identificar qué campos y valores podrá recibir por medio de las Instancias Contextuales compatibles.

### 36.3. Definir entrada esperada

Debe declarar qué estructura debe tener la Instancia Contextual.

### 36.4. Definir zonas de salida

Debe declarar qué componentes tendrá la Manifestación Codominial.

### 36.5. Asociar valores con contribuciones

Debe definir qué efecto tiene cada valor relevante sobre la salida.

### 36.6. Definir reglas de integración

Debe resolver conflictos, prioridades y compatibilidades.

### 36.7. Definir validación

Debe declarar cómo se reconoce una salida válida.

### 36.8. Mantener trazabilidad

Debe poder explicar cada componente de salida por referencia a valores de entrada y reglas aplicadas.

---

## 37. Estructura mínima recomendada del archivo

Un archivo de Adaptador debería seguir esta forma mínima:

```md
# Adaptador — Nombre del adaptador

## 0. Identificación

- id:
- tipo: `adaptador`
- estado:
- versión:

## 1. Codominio producido

- codominio:
- familia codominial:
- tipo de manifestación:
- descripción de salida válida:

## 2. Entrada esperada

- tipo de entrada: `instancia_contextual`
- Instancia Regional compatible:
- realización compatible:
- campos obligatorios:
- campos opcionales:
- restricciones de entrada:

## 3. Protocolo de lectura

Orden y modo de lectura de la Instancia Contextual.

## 4. Zonas de salida

Componentes, capas o bloques que puede construir el Adaptador.

## 5. Protocolo de composición

Reglas por dimensión, campo y valor.

## 6. Reglas de integración

Prioridades, resolución de conflictos y compatibilidades.

## 7. Criterios de validación

Checklist para decidir si la salida es válida.

## 8. Trazabilidad

Correspondencia entre valores de entrada, reglas y componentes de salida.

## 9. Errores o estados de rechazo

Casos en los que el Adaptador no debe producir salida.
```

---

## 38. Ejemplo aplicado no limitado a video corto

Supongamos una misma configuración conceptual:

```yaml
instancia_contextual:
  caso_configurado: error_estrategico_frente_a_centro_de_poder
  funcion_dominante: enseñar
  efecto_buscado:
    dominante: comprension_estrategica
  dinamica_atencional: apertura_inmediata
  comparecencia:
    autoridad: alta
    sobriedad: alta
```

Un Adaptador de carrusel podría proyectar así:

```yaml
adaptador_carrusel:
  portada:
    regla: convertir_el_caso_en_promesa_de_aprendizaje
  laminas_de_desarrollo:
    regla: dividir_mecanismo_en_pasos_visuales
  cierre:
    regla: producir_formula_guardable
```

Un Adaptador de clase podría proyectar así:

```yaml
adaptador_clase:
  objetivo_de_aprendizaje:
    regla: formular_competencia_de_lectura_estrategica
  desarrollo:
    regla: explicar_caso_y_extraer_mecanismo
  ejercicio:
    regla: pedir_aplicacion_del_mecanismo_a_un_caso_nuevo
```

Un Adaptador de newsletter podría proyectar así:

```yaml
adaptador_newsletter:
  asunto:
    regla: presentar_contraste_estrategico
  apertura:
    regla: introducir_caso_como_pregunta
  cuerpo:
    regla: desarrollar_el_mecanismo_en_secciones
  cierre:
    regla: conectar_con_aplicacion_practica
```

La Instancia Contextual puede ser parecida.

La Manifestación cambia porque cada Adaptador proyecta hacia un codominio diferente.

---

## 39. Definición larga consolidada

Un Adaptador es una función protocolizada de proyección codominial que recibe una Instancia Contextual compatible, construida dentro del espacio habilitado por una Instancia Regional, y la transforma en una Manifestación Codominial válida dentro de un codominio específico. Su responsabilidad no es seleccionar regiones, declarar campos, elegir valores contextuales ni redactar una salida por intuición libre, sino aplicar reglas explícitas de lectura, composición, integración, validación y trazabilidad que convierten los valores activos de la Instancia Contextual en componentes de salida. El Adaptador pertenece al plano de la transformación: conecta configuración contextual con manifestación externa sin absorber las responsabilidades del sistema regional ni de la instancia contextual.

---

## 40. Definición corta consolidada

Un Adaptador es el operador protocolario que transforma una Instancia Contextual compatible en una Manifestación Codominial válida dentro de un codominio.

---

## 41. Definición operativa propuesta

Operativamente, un Adaptador es el documento o módulo que declara:

```txt
1. qué codominio produce;
2. qué tipo de Instancia Contextual puede recibir;
3. qué Instancia Regional o familia regional es compatible;
4. qué campos y valores reconoce;
5. cómo lee la configuración de entrada;
6. qué zonas de salida puede construir;
7. qué contribución corresponde a cada valor activo;
8. cómo integra contribuciones múltiples;
9. cómo resuelve conflictos;
10. cómo valida la salida;
11. y cómo conserva trazabilidad entrada → regla → manifestación.
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

Codominio:
  define la familia formal de salida válida.

Manifestación Codominial:
  aparece como objeto final dentro del codominio.
```

Cadena:

```txt
instancia_regional
  → instancia_contextual
    → adaptador / protocolo
      → codominio
        → manifestacion_codominial
```

Fórmula:

```txt
adaptador_codominio_X(instancia_contextual_validada)
  → manifestacion_codominial_X
```

---

## 43. Cierre

La actualización de este planteamiento es necesaria porque el Adaptador ya no debe entenderse como una pieza que recibe una Instancia Contextual construida directamente desde un Modelo Base local.

La nueva arquitectura exige una mediación previa:

```txt
Instancia Regional
```

La Instancia Regional habilita el espacio de posibilidades.

La Instancia Contextual selecciona valores dentro de ese espacio.

El Adaptador transforma esa configuración en una manifestación.

La Manifestación Codominial aparece como salida concreta dentro de un codominio.

Por tanto, la migración conceptual puede resumirse así:

```txt
antes:
  Adaptador = operador que proyecta una Instancia Contextual construida sobre un Modelo Base.

ahora:
  Adaptador = operador que proyecta una Instancia Contextual validada, habilitada regionalmente, hacia un codominio.
```

Esta reformulación conserva lo útil del Adaptador anterior, pero lo ubica correctamente dentro de la arquitectura nueva.

El Adaptador sigue siendo la pieza que permite que una configuración interna deje de ser solo estructura y se convierta en manifestación.

Pero ahora su entrada queda mejor definida:

```txt
no recibe el sistema completo;
no recibe la región completa;
no recibe ideas en crudo;
recibe una Instancia Contextual operable.
```

Y su responsabilidad queda mejor delimitada:

```txt
proyectar valores contextuales hacia componentes codominiales
mediante reglas protocolarias trazables.
```
