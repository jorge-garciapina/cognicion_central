https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69ece6cd-0fe8-83e8-b100-3ed3b69c1558

# Planteamiento del Adaptador

## El Adaptador como mecanismo protocolario de proyección hacia un codominio

---

## 0. Propósito del documento

Este documento define el concepto de **Adaptador** dentro del sistema formado por:

1. **Modelo Base**
2. **Instancia Contextual**
3. **Adaptador / Protocolo**

El objetivo es describir al Adaptador como el tercer componente del sistema de transferencia estructural: la pieza que recibe una configuración interna ya organizada y la convierte en una manifestación externa perteneciente a un codominio específico.

Este documento debe poder usarse de forma general dentro de la ACCD, sin quedar limitado a un único caso de uso como video corto, TikTok, carrusel, newsletter o clase.

---

## 1. Definición breve

Un **Adaptador** es un operador protocolario que recibe una **Instancia Contextual** construida sobre un **Modelo Base** y la transforma en una **Manifestación Codominial** perteneciente a un codominio específico.

Dicho de forma más simple:

```txt
Adaptador = mecanismo que proyecta una instancia contextual hacia una salida externa válida
```

O de forma más estructural:

```txt
Modelo Base
  ↓
Instancia Contextual
  ↓
Adaptador
  ↓
Manifestación Codominial
```

El Adaptador no crea el Modelo Base.  
El Adaptador no sustituye la Instancia Contextual.  
El Adaptador no es la Manifestación final.

El Adaptador es el mecanismo que **hace pasar una configuración ya determinada hacia un objeto externo realizable**.

---

## 2. Definición ampliada

Un Adaptador es una estructura operativa compuesta que define cómo una Instancia Contextual debe transformarse en una Manifestación Codominial dentro de un codominio determinado.

Esto significa que el Adaptador cumple una función de mediación entre dos planos:

```txt
plano interno:
  instancia contextual
  valores configurados
  estructura cognitiva condensada

plano externo:
  manifestación codominial
  objeto realizable
  salida material o comunicativa
```

La Instancia Contextual contiene valores configurados dentro de dimensiones y campos. El Adaptador interpreta esos valores no como simples datos, sino como **instrucciones de composición**.

Por eso, el Adaptador no se limita a formatear una salida. Su tarea es más profunda:

- leer la configuración de entrada;
- identificar qué valores están activos;
- aplicar reglas de transformación;
- resolver tensiones entre contribuciones;
- construir una salida compatible con el codominio;
- y preservar trazabilidad entre entrada, regla aplicada y manifestación final.

---

## 3. El Adaptador dentro del sistema de transferencia estructural

El sistema de transferencia estructural funciona mediante tres componentes.

```txt
Sistema de transferencia estructural:

1. Modelo Base
   Define el espacio de inteligibilidad.

2. Instancia Contextual
   Selecciona una configuración particular dentro del Modelo Base.

3. Adaptador
   Proyecta esa configuración hacia una Manifestación Codominial.
```

El Adaptador ocupa el tercer lugar porque necesita que las dos operaciones anteriores ya hayan ocurrido.

Primero debe existir un Modelo Base que indique qué dimensiones, campos y valores son posibles.

Después debe existir una Instancia Contextual que seleccione valores concretos dentro de ese Modelo Base.

Solo entonces el Adaptador puede operar.

Por tanto:

```txt
sin Modelo Base → el Adaptador no sabe qué estructura debe leer
sin Instancia Contextual → el Adaptador no sabe qué configuración debe proyectar
sin Adaptador → la Instancia Contextual no se convierte en manifestación externa
```

---

## 4. Responsabilidad principal del Adaptador

La responsabilidad principal del Adaptador es transformar una Instancia Contextual en una Manifestación Codominial válida.

Esta transformación no debe entenderse como una traducción superficial.

No se trata simplemente de convertir un texto en otro texto, ni una idea en una pieza comunicativa.

Se trata de proyectar una estructura configurada hacia un codominio.

La fórmula general es:

```txt
Adaptador(instancia_contextual) → manifestación_codominial
```

Pero esta fórmula debe entenderse con más precisión:

```txt
Adaptador_codominio_X(
  valores_de_la_instancia_contextual
)
→ manifestación_válida_en_codominio_X
```

Por ejemplo:

```txt
adaptador_video_corto(instancia_contextual)
→ manifestación_codominial_video_corto

adaptador_carrusel(instancia_contextual)
→ manifestación_codominial_carrusel

adaptador_newsletter(instancia_contextual)
→ manifestación_codominial_newsletter

adaptador_clase(instancia_contextual)
→ manifestación_codominial_clase
```

El Adaptador siempre debe estar asociado a un codominio.

---

Sí, la corrección es adecuada. El problema es que el codominio no debe describirse solo por **tema o función comunicativa**, sino también por su **forma de salida**: qué tipo de objeto produce, cómo se organiza internamente y qué unidades lo componen.

Puedes reemplazar esa parte por esta versión:

## 5. Qué es un codominio

El **codominio** es el espacio de salidas posibles hacia el que proyecta un Adaptador.

No es una salida individual.  
No es una pieza concreta.  
No es un ejemplo.

Es la familia estructural de salidas válidas que un Adaptador puede producir.

Ejemplos de codominios:

```txt
codominio_video_corto
codominio_video_largo
codominio_carrusel
codominio_newsletter
codominio_clase
codominio_producto
codominio_landing
codominio_hilo
```

Cada codominio tiene exigencias distintas.

Estas exigencias no son solo temáticas.
También son **formales**, porque cada codominio impone una manera diferente de organizar la salida.

Por eso, un Adaptador no solo debe saber “de qué trata” la manifestación, sino también **qué forma debe tomar** dentro de un codominio específico.

Por ejemplo:

### `codominio_video_corto`

Un video corto no requiere solamente un tema breve o llamativo.

También requiere una forma de salida compatible con su codominio, por ejemplo:

- guión breve audiovisual;
- organización por bloques;
- apertura, desarrollo y cierre o remate;
- texto oral;
- posible texto en pantalla;
- posibles indicaciones escénicas;
- posibles prompts para imagen, video o audio;
- ritmo compatible con atención rápida.

En este codominio, la salida no es simplemente “un texto sobre un tema”, sino una **manifestación audiovisual breve estructurada**.

---

### `codominio_video_largo`

Un video largo no requiere solo desarrollar más el tema.

También puede exigir una forma más amplia, por ejemplo:

- guión extendido;
- introducción;
- secciones internas;
- transiciones;
- desarrollo argumental o explicativo;
- recapitulaciones parciales;
- cierre integrador;
- posibles momentos de pausa, ejemplo o demostración.

En este codominio, el Adaptador debe producir una salida con mayor capacidad de desarrollo y continuidad.

---

### `codominio_carrusel`

Un carrusel no requiere solo sintetizar un tema.

También exige una forma visual-secuencial, por ejemplo:

- división por láminas;
- función específica para cada slide;
- texto breve por lámina;
- progresión visual;
- relación entre portada, desarrollo y cierre;
- cierre guardable, compartible o accionable.

En este codominio, la salida debe organizarse como una **secuencia de unidades visuales**, no como texto continuo.

---

### `codominio_newsletter`

Una newsletter no requiere solo explicar un tema por escrito.

También exige una forma textual distribuida, por ejemplo:

- asunto o encabezado;
- apertura;
- cuerpo organizado en secciones;
- ritmo de lectura sostenida;
- transiciones internas;
- cierre;
- posible llamada a acción.

En este codominio, la salida debe ser una **pieza escrita navegable**, no una simple transcripción de ideas.

---

### `codominio_clase`

Una clase no requiere solo transmitir información.

También puede exigir una forma pedagógica, por ejemplo:

- objetivo de aprendizaje;
- introducción;
- desarrollo por momentos;
- ejemplos;
- recapitulaciones;
- ejercicios o preguntas;
- cierre didáctico.

En este codominio, la salida debe organizarse como una **secuencia de enseñanza**, no solo como exposición temática.

---

### `codominio_landing`

Una landing no requiere solo presentar una oferta o idea.

También exige una forma orientada a conversión, por ejemplo:

- encabezado principal;
- promesa;
- problema;
- solución;
- beneficios;
- prueba o evidencia;
- objeciones;
- llamada a acción.

En este codominio, la salida debe ser una **estructura de orientación y conversión**, no solo una descripción del producto o servicio.

---

### `codominio_hilo`

Un hilo no requiere solo dividir un tema en partes.

También exige una forma secuencial breve, por ejemplo:

- primer post de apertura;
- secuencia de publicaciones conectadas;
- progresión argumental;
- puntos autónomos pero relacionados;
- cierre sintético o llamada a interacción.

En este codominio, la salida debe ser una **cadena de unidades textuales conectadas**, no un texto largo fragmentado sin criterio.

---

Por tanto, el Adaptador debe conocer dos tipos de exigencias del codominio:

1. **Exigencias temáticas o funcionales**
   Qué debe lograr la manifestación: enseñar, persuadir, explicar, convertir, retener, introducir, profundizar, etc.

2. **Exigencias formales de salida**
   Qué forma debe tomar la manifestación: guión, bloques, slides, secciones, publicaciones encadenadas, módulos didácticos, estructura de conversión, etc.

La importancia del Adaptador está precisamente en esto:

> una misma Instancia Contextual puede proyectarse hacia codominios distintos, pero cada codominio exige una forma de salida diferente.

Por eso, el Adaptador no solo cambia el estilo superficial.
Cambia la **estructura de manifestación**.

```

```

---

## 6. Por qué el Adaptador no debe trabajar con ideas en crudo

El Adaptador no debe recibir ideas en crudo como entrada principal.

Una idea en crudo puede ser:

- una frase;
- una intuición;
- una fotografía;
- una página de libro;
- una conversación;
- una canción;
- un caso;
- un texto informal;
- un modelo incompleto;
- una observación visual.

Ese material todavía no tiene forma suficiente para ser proyectado directamente hacia un codominio.

Antes debe pasar por algún proceso de modelado, condensación o configuración.

El Adaptador debe recibir una Instancia Contextual porque la Instancia Contextual ya contiene:

- dimensiones configuradas;
- campos llenados;
- valores seleccionados;
- relaciones internas suficientemente determinadas;
- y una estructura operable.

Por eso:

```txt
idea_en_crudo ≠ entrada adecuada del Adaptador
instancia_contextual = entrada adecuada del Adaptador
```

Esto evita que el Adaptador tenga que adivinar lo que no fue configurado previamente.

---

## 7. Relación entre Adaptador y Modelo Base

El Adaptador depende estructuralmente del Modelo Base.

La razón es simple:

- el Modelo Base define qué dimensiones existen;
- cada dimensión define qué campos contiene;
- cada campo define qué valores son posibles;
- la Instancia Contextual selecciona valores dentro de esas posibilidades;
- y el Adaptador define qué hacer con esos valores.

Por tanto, el Adaptador no opera en el vacío.

Opera sobre un lenguaje estructural previamente definido.

```txt
Modelo Base:
  define dimensiones, campos y valores posibles

Instancia Contextual:
  selecciona valores concretos

Adaptador:
  asigna acciones compositivas a esos valores
```

Esto significa que un Adaptador bien diseñado debe conocer el Modelo Base que espera recibir.

No necesariamente debe redefinirlo, pero sí debe ser compatible con él.

---

## 8. Relación entre Adaptador e Instancia Contextual

La Instancia Contextual es el dominio inmediato del Adaptador.

El Adaptador no recibe el Modelo Base completo como caso activo.  
Recibe una Instancia Contextual creada a partir de ese Modelo Base.

La Instancia Contextual le dice al Adaptador:

- qué valores están activos;
- qué orientación debe respetarse;
- qué público se ha configurado;
- qué construcción del caso está seleccionada;
- qué dinámica atencional debe aplicarse;
- qué comparecencia debe mantenerse;
- qué marco de materialización se espera;
- qué recursos complementarios deben activarse.

El Adaptador transforma esa configuración en salida.

Ejemplo abstracto:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_a

  dimension_2:
    campo_2_1: valor_2_1_c
    campo_2_2: valor_2_2_d

adaptador:
  si campo_1_1 = valor_1_1_b:
    aplicar_contribucion_X

  si campo_1_2 = valor_1_2_a:
    aplicar_contribucion_Y

  si campo_2_1 = valor_2_1_c:
    aplicar_contribucion_Z
```

La Instancia Contextual fija el estado de entrada.  
El Adaptador ejecuta la transformación.

---

## 9. Adaptador y Protocolo

En este marco, un Adaptador puede entenderse como una estructura protocolaria.

Esto significa que el Adaptador no es solo una función abstracta.

Es una función regulada por un protocolo.

El protocolo indica:

- qué recibe el Adaptador;
- qué campos de la Instancia Contextual debe leer;
- qué valores debe reconocer;
- qué contribución corresponde a cada valor;
- sobre qué parte de la salida incide cada contribución;
- cómo se resuelven tensiones entre contribuciones;
- qué forma debe tener la Manifestación Codominial;
- y cómo se valida si la salida es correcta.

Por eso se puede decir:

```txt
Adaptador = función protocolizada de proyección codominial
```

O también:

```txt
Adaptador = protocolo operativo que transforma instancias contextuales en manifestaciones codominiales
```

---

## 10. Protocolo de composición dimensional

Cuando el Adaptador opera sobre una Instancia Contextual, no debe hacerlo de forma global e indiferenciada.

Debe considerar las dimensiones, campos y valores de la instancia.

Por eso puede hablarse de **Protocolo de composición dimensional**.

Un Protocolo de composición dimensional define cómo los valores de cada dimensión contribuyen a la construcción de la salida.

La estructura general es:

```txt
para cada dimension:
  para cada campo:
    para cada valor posible:
      definir_contribucion_sobre_la_salida
```

Ejemplo abstracto:

```txt
protocolo_de_composicion:
  dimension_1:
    campo_1_1:
      valor_1_1_a:
        contribucion: accion_A
        zona_de_salida: componente_X

      valor_1_1_b:
        contribucion: accion_B
        zona_de_salida: componente_Y

  dimension_2:
    campo_2_1:
      valor_2_1_a:
        contribucion: accion_C
        zona_de_salida: componente_Z
```

Esto permite que cada valor tenga incidencia efectiva en la Manifestación Codominial.

---

## 11. La contribución como unidad mínima de operación

La unidad mínima del Adaptador no es necesariamente el campo completo ni la dimensión completa.

La unidad mínima suele ser la **contribución asociada a un valor**.

Un valor activo dentro de una Instancia Contextual debe activar alguna contribución.

Una contribución puede:

- fijar;
- seleccionar;
- restringir;
- modular;
- intensificar;
- distribuir;
- ordenar;
- activar;
- desactivar;
- priorizar;
- derivar;
- proyectar;
- justificar.

Ejemplo:

```txt
valor_activo:
  campo: campo_3_2
  valor: valor_3_2_c

contribucion_protocolaria:
  tipo: modular
  zona_de_salida: capa_verbal
  efecto: aumentar_explicitud_del_texto
```

Esto permite que la salida no sea una improvisación, sino el resultado de una composición controlada.

---

## 12. Zonas de incidencia del Adaptador

El Adaptador debe saber sobre qué partes de la Manifestación Codominial puede actuar.

Una Manifestación Codominial puede tener distintas zonas de salida.

Por ejemplo, para una salida audiovisual breve:

```txt
manifestacion_codominial:
  cabecera
  arquitectura_global
  bloques
    capa_verbal
    capa_visual
    capa_escenica
    capa_auditiva
    recursos_generables
    continuidad
    justificacion
```

Para una clase:

```txt
manifestacion_codominial:
  titulo
  objetivo_de_aprendizaje
  introduccion
  desarrollo
  ejemplos
  ejercicios
  cierre
  evaluacion
```

Para una newsletter:

```txt
manifestacion_codominial:
  asunto
  apertura
  cuerpo
  secciones
  llamada_a_la_accion
  cierre
```

El Adaptador debe traducir los valores de la Instancia Contextual hacia las zonas propias del codominio.

---

## 13. El Adaptador no es un simple formateador

Es un error pensar que el Adaptador solo cambia el formato de una salida.

Por ejemplo:

```txt
texto → guion
texto → carrusel
texto → newsletter
```

Pero eso sería demasiado superficial.

El Adaptador no convierte una salida ya hecha en otro formato.

El Adaptador construye una Manifestación Codominial a partir de una configuración estructural previa.

Dicho de otra forma:

```txt
incorrecto:
  adaptador = formateador de contenido

correcto:
  adaptador = operador de proyección estructural hacia un codominio
```

Esta distinción es importante porque el Adaptador no debe limitarse a cambiar la superficie material. Debe usar la Instancia Contextual para decidir qué estructura debe tener la salida.

---

## 14. El Adaptador no debe compensar un Modelo Base incompleto

Otro error frecuente es construir Adaptadores que tienen que adivinar lo que el Modelo Base no definió.

Eso genera adaptadores opacos, inconsistentes y difíciles de auditar.

Un buen Adaptador no debería preguntarse:

```txt
¿qué habrá querido decir este campo?
¿qué significa realmente esta orientación?
¿qué tipo de salida conviene inventar aquí?
¿qué parte del caso será importante?
```

Un buen Adaptador debería recibir una Instancia Contextual suficientemente determinada y operar sobre ella.

Por eso:

```txt
Modelo Base incompleto
  → Instancia Contextual débil
  → Adaptador obligado a adivinar
  → salida opaca

Modelo Base suficientemente completo
  → Instancia Contextual determinada
  → Adaptador protocolario
  → salida trazable
```

El Adaptador correcto no debe ser un compensador de vacíos.

Debe ser un operador de transformación.

---

## 15. Adaptadores múltiples sobre una misma Instancia Contextual

Una misma Instancia Contextual puede alimentar distintos Adaptadores.

Ejemplo:

```txt
instancia_contextual_X
  ↓
adaptador_video_corto
  ↓
manifestacion_video_corto

instancia_contextual_X
  ↓
adaptador_carrusel
  ↓
manifestacion_carrusel

instancia_contextual_X
  ↓
adaptador_newsletter
  ↓
manifestacion_newsletter
```

Esto es posible porque la Instancia Contextual no pertenece de forma exclusiva a un codominio.

La Instancia Contextual condensa una configuración estructural. Distintos Adaptadores pueden proyectar esa configuración en salidas distintas.

Esto aumenta la reutilización del sistema.

También permite comparar adaptadores:

```txt
misma instancia
+ adaptador distinto
= manifestación distinta
```

---

## 16. Adaptadores distintos sobre un mismo Modelo Base

También es posible construir distintos Adaptadores para un mismo Modelo Base.

Por ejemplo:

```txt
modelo_base_contenido_digital
  → instancia_contextual_A
  → adaptador_video_corto

modelo_base_contenido_digital
  → instancia_contextual_A
  → adaptador_video_largo

modelo_base_contenido_digital
  → instancia_contextual_A
  → adaptador_clase
```

Esto muestra que el Modelo Base puede ser general, mientras que cada Adaptador especializa la salida.

La diferencia entre adaptadores no está necesariamente en los valores de entrada, sino en las reglas de composición hacia el codominio.

Por ejemplo, un campo como:

```txt
duracion_objetivo: breve
```

puede significar cosas distintas según el Adaptador.

En un Adaptador de video corto, `breve` puede proyectarse como una duración muy comprimida.

En un Adaptador de clase, `breve` puede proyectarse como una sección introductoria corta dentro de una sesión más amplia.

El valor de entrada puede ser el mismo, pero su realización codominial cambia según el Adaptador.

---

## 17. Adaptador como especialización de codominio

Cada Adaptador especializa un codominio.

Esto significa que un Adaptador debe contener conocimiento suficiente sobre la familia de salidas que produce.

Por ejemplo:

```txt
adaptador_video_corto:
  codominio: video_corto
  sabe_construir:
    - apertura breve
    - bloques cortos
    - ritmo acelerado
    - texto en pantalla
    - indicaciones visuales
    - cierre sintético
```

```txt
adaptador_clase:
  codominio: clase
  sabe_construir:
    - objetivo didáctico
    - explicación progresiva
    - ejemplos
    - actividad
    - cierre recapitulativo
```

```txt
adaptador_carrusel:
  codominio: carrusel
  sabe_construir:
    - portada
    - slides internos
    - progresión visual
    - texto breve por lámina
    - cierre guardable
```

El Adaptador debe describir con precisión el codominio que produce.

---

## 18. Adaptador como función de muchas variables

El Adaptador puede entenderse como una función que recibe una Instancia Contextual compuesta por muchas dimensiones.

Cada dimensión puede entenderse como un vector de valores.

```txt
instancia_contextual:
  vector_dimension_1
  vector_dimension_2
  vector_dimension_3
  ...
  vector_dimension_n
```

Entonces, el Adaptador puede representarse como:

```txt
Adaptador(
  vector_dimension_1,
  vector_dimension_2,
  vector_dimension_3,
  ...,
  vector_dimension_n
)
→ manifestacion_codominial
```

Esta analogía es útil porque muestra que el Adaptador no depende de un único campo.

La salida resulta de la interacción entre muchas variables configuradas.

Sin embargo, la analogía matemática debe usarse con cuidado.

No se trata necesariamente de una función numérica.

Es una función composicional, semántica y protocolaria.

---

## 19. Adaptador e instancias como condensaciones intergrafales

En una arquitectura más amplia, una Instancia Contextual puede condensar regiones de distintos grafos.

Por ejemplo:

```txt
grafo_conceptual
  → dimension_construccion_del_caso

grafo_atencional
  → dimension_dinamica_atencional

grafo_receptoral
  → dimension_acoplamiento_receptoral

grafo_identitario
  → dimension_comparecencia_performativa

grafo_de_materializacion
  → dimension_composicion_segmental
```

El Adaptador no consume directamente todos esos grafos.

Consume la Instancia Contextual que ya los condensó.

Esto permite separar responsabilidades:

```txt
grafos:
  almacenan y organizan estructuras internas

instancia_contextual:
  condensa regiones relevantes en valores configurados

adaptador:
  proyecta la configuración hacia una salida
```

Así, el Adaptador se mantiene operativo y no se vuelve responsable de toda la arquitectura cognitiva previa.

---

## 20. Tipos generales de Adaptadores

Pueden existir muchos tipos de Adaptadores.

### 20.1. `adaptador_video_corto`

Recibe una Instancia Contextual y produce una Manifestación Codominial compatible con video corto.

### 20.2. `adaptador_video_largo`

Recibe una Instancia Contextual y produce una manifestación audiovisual extensa o más desarrollada.

### 20.3. `adaptador_carrusel`

Recibe una Instancia Contextual y produce una secuencia visual por láminas.

### 20.4. `adaptador_newsletter`

Recibe una Instancia Contextual y produce una pieza escrita distribuible por correo o publicación periódica.

### 20.5. `adaptador_clase`

Recibe una Instancia Contextual y produce una estructura didáctica para enseñanza.

### 20.6. `adaptador_producto`

Recibe una Instancia Contextual y produce una manifestación orientada a producto, oferta o empaquetamiento comercial.

### 20.7. `adaptador_landing`

Recibe una Instancia Contextual y produce una página de presentación, conversión o captura.

### 20.8. `adaptador_hilo`

Recibe una Instancia Contextual y produce una secuencia textual breve distribuida en publicaciones encadenadas.

Estos Adaptadores pueden compartir una lógica común, pero cada uno tiene reglas de composición propias.

---

## 21. Estructura interna recomendada de un Adaptador

Un Adaptador suficientemente claro debería contener al menos estas partes:

```txt
adaptador:
  identificacion:
    nombre:
    codominio:
    tipo_de_manifestacion:

  entrada_esperada:
    modelo_base_compatible:
    forma_de_instancia_contextual:
    campos_obligatorios:
    campos_opcionales:

  protocolo_de_lectura:
    como_leer_la_instancia:
    orden_de_prioridad:
    deteccion_de_incompletitud:

  protocolo_de_composicion:
    reglas_por_dimension:
    reglas_por_campo:
    reglas_por_valor:

  estructura_de_salida:
    componentes_de_la_manifestacion:
    capas:
    bloques:
    restricciones:

  reglas_de_integracion:
    resolucion_de_conflictos:
    prioridades:
    compatibilidades:

  criterios_de_validacion:
    salida_valida:
    salida_incompleta:
    salida_incompatible:

  trazabilidad:
    justificacion_de_decisiones:
    correspondencia_entrada_salida:
```

Esta estructura permite diseñar Adaptadores auditables.

---

## 22. Ejemplo abstracto de Adaptador

Supongamos un Modelo Base abstracto:

```txt
modelo_base:
  dimension_1:
    campo_1_1:
      valores_posibles:
        - valor_1_1_a
        - valor_1_1_b

  dimension_2:
    campo_2_1:
      valores_posibles:
        - valor_2_1_a
        - valor_2_1_b
```

Una Instancia Contextual selecciona:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b

  dimension_2:
    campo_2_1: valor_2_1_a
```

Un Adaptador define:

```txt
adaptador_X:
  codominio: codominio_X

  protocolo_de_composicion:
    dimension_1:
      campo_1_1:
        valor_1_1_a:
          contribucion: accion_A
          zona_de_salida: componente_1

        valor_1_1_b:
          contribucion: accion_B
          zona_de_salida: componente_2

    dimension_2:
      campo_2_1:
        valor_2_1_a:
          contribucion: accion_C
          zona_de_salida: componente_3

        valor_2_1_b:
          contribucion: accion_D
          zona_de_salida: componente_4
```

La salida resultante sería:

```txt
manifestacion_codominial_X:
  componente_2:
    construido_por: accion_B

  componente_3:
    construido_por: accion_C
```

El Adaptador no usó todos los valores posibles. Usó los valores activos en la Instancia Contextual.

---

## 23. Ejemplo generalizado con múltiples Adaptadores

Una misma Instancia Contextual puede ser proyectada por distintos Adaptadores.

```txt
instancia_contextual_A:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_c

  dimension_2:
    campo_2_1: valor_2_1_a
```

### Adaptador 1

```txt
adaptador_1:
  codominio: codominio_1
  salida:
    manifestacion_codominial_1
```

### Adaptador 2

```txt
adaptador_2:
  codominio: codominio_2
  salida:
    manifestacion_codominial_2
```

### Adaptador 3

```txt
adaptador_3:
  codominio: codominio_3
  salida:
    manifestacion_codominial_3
```

El mismo contenido estructural puede aparecer de forma distinta según el Adaptador.

---

## 24. Trazabilidad del Adaptador

Un Adaptador debe permitir reconstruir por qué la salida quedó como quedó.

Esto exige trazabilidad.

La trazabilidad puede representarse así:

```txt
valor_de_entrada:
  dimension: dimension_2
  campo: campo_2_1
  valor: valor_2_1_a

contribucion_aplicada:
  tipo: seleccionar
  zona_de_salida: componente_3
  efecto: construir_componente_3_con_forma_X

resultado:
  componente_3:
    forma: forma_X
```

Esto permite auditar el proceso.

Si la salida falla, se puede revisar:

- si el valor de entrada era incorrecto;
- si la regla protocolaria estaba mal diseñada;
- si hubo conflicto con otra contribución;
- o si la estructura de salida era insuficiente.

---

## 25. Validación del Adaptador

Un Adaptador debe poder evaluarse.

Algunos criterios de validación son:

### 25.1. Compatibilidad de entrada

La Instancia Contextual debe pertenecer al Modelo Base esperado.

### 25.2. Cobertura protocolaria

Cada campo relevante debe tener reglas asociadas.

### 25.3. Incidencia efectiva

Los valores activos deben afectar alguna parte de la salida.

### 25.4. Compatibilidad codominial

La salida debe pertenecer al codominio del Adaptador.

### 25.5. Coherencia interna

Las contribuciones no deben producir contradicciones no resueltas.

### 25.6. Trazabilidad

Debe poder explicarse qué valores produjeron qué efectos.

### 25.7. Reusabilidad

El Adaptador debe poder aplicarse a más de una Instancia Contextual compatible.

---

## 26. Errores frecuentes

### 26.1. Confundir Adaptador con salida

El Adaptador no es la manifestación final.

### 26.2. Confundir Adaptador con Modelo Base

El Adaptador no define el espacio de inteligibilidad general.

### 26.3. Confundir Adaptador con Instancia Contextual

El Adaptador no selecciona valores como función principal; transforma una selección ya hecha.

### 26.4. Confundir Adaptador con formateador

El Adaptador no solo cambia la forma superficial de un contenido.

### 26.5. Hacer que el Adaptador adivine

Si la entrada no está suficientemente determinada, el Adaptador no debería inventar silenciosamente.

### 26.6. Diseñar Adaptadores sin codominio claro

Todo Adaptador debe saber qué familia de salidas produce.

### 26.7. Diseñar reglas sin trazabilidad

Si no puede reconstruirse qué valor causó qué efecto, el Adaptador es opaco.

---

## 27. Relación con ACCD

Dentro de la ACCD, el Adaptador permite conectar estructuras internas con manifestaciones externas.

Las estructuras internas pueden estar organizadas como:

- grafos conceptuales;
- grafos atencionales;
- grafos receptorales;
- grafos identitarios;
- grafos comerciales;
- grafos de materialización;
- grafos de evidencia.

Pero el Adaptador no necesita consumir directamente todos esos grafos.

Lo que consume es una Instancia Contextual construida a partir de ellos.

Por eso, el Adaptador cumple una función de proyección final:

```txt
grafos internos
  ↓
instancia contextual
  ↓
adaptador
  ↓
manifestación externa
```

La ACCD puede tener muchos Adaptadores, cada uno orientado a un codominio distinto.

Esto permite que una misma arquitectura interna produzca múltiples superficies externas sin perder coherencia estructural.

---

## 28. Definición canónica propuesta

```txt
Un Adaptador es una función protocolizada de proyección codominial que recibe una
Instancia Contextual construida sobre un Modelo Base y la transforma en una
Manifestación Codominial válida dentro de un codominio específico.

Su responsabilidad no es describir el caso ni seleccionar valores, sino aplicar
reglas de composición que convierten los valores activos de la Instancia
Contextual en componentes de salida, preservando compatibilidad, coherencia y
trazabilidad.
```

---

## 29. Fórmula resumida

```txt
Modelo Base
  → define posibilidades

Instancia Contextual
  → selecciona valores

Adaptador
  → proyecta la configuración hacia un codominio

Manifestación Codominial
  → salida externa construida
```

O en forma funcional:

```txt
Adaptador_codominio_X(Instancia_Contextual)
  = Manifestación_Codominial_X
```

---

## 30. Cierre

El Adaptador es la pieza que permite que una configuración interna deje de ser solo estructura y se convierta en manifestación.

Sin Adaptador, la Instancia Contextual queda como una configuración no realizada.

Sin Instancia Contextual, el Adaptador no tiene una entrada suficientemente determinada.

Sin Modelo Base, la Instancia Contextual no tiene una estructura general de inteligibilidad.

Por eso, el Adaptador debe entenderse como el componente que cierra el sistema de transferencia estructural:

```txt
inteligibilidad → configuración → proyección → manifestación
```

El Modelo Base hace inteligible.  
La Instancia Contextual configura.  
El Adaptador proyecta.  
La Manifestación Codominial comparece.
