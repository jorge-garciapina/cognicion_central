https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69ece6cd-0fe8-83e8-b100-3ed3b69c1558

# Planteamiento del concepto de Modelo Base

## Documento de definición para la ACCD y el sistema de transferencia estructural

---

## 0. Propósito del documento

Este documento define el concepto de **Modelo Base** como una pieza arquitectónica general dentro de la ACCD y dentro de cualquier sistema que busque transformar estructuras internas en manifestaciones externas.

La definición aquí presentada no debe limitarse al caso del adaptador de video corto, ni al caso de TikTok, ni a ningún codominio particular. El Modelo Base es una noción más general: puede intervenir en adaptadores de video, texto, clase, producto, landing, hilo, carrusel, newsletter, análisis, diagnóstico, aprendizaje, trazabilidad conceptual, construcción de grafos o cualquier otra operación donde sea necesario describir casos distintos bajo una misma estructura formal.

La función de este documento es fijar una definición amplia, estable y reutilizable de Modelo Base para que después pueda articularse con otros documentos dedicados a:

- Instancia Contextual;
- Adaptador / Protocolo;
- y el sistema total formado por Modelo Base + Instancia Contextual + Adaptador.

En este marco, el Modelo Base debe entenderse como una **estructura de inteligibilidad**: una forma general que permite que muchos casos distintos puedan ser descritos, comparados, configurados y posteriormente proyectados hacia algún tipo de manifestación.

---

## 1. Definición breve

Un **Modelo Base** es una estructura de inteligibilidad compuesta por dimensiones de configuración, campos internos y espacios de valores posibles.

Su función es permitir que múltiples casos distintos puedan ser descritos bajo una misma organización general, de modo que después puedan producirse instancias contextuales particulares y, eventualmente, ser usadas por adaptadores para generar manifestaciones en codominios específicos.

Dicho de manera compacta:

> Un Modelo Base define **qué aspectos deben poder configurarse** para que una clase de casos sea inteligible, comparable, reutilizable y operable.

---

## 2. Definición desarrollada

Un Modelo Base es una estructura formal que organiza una región de realidad, conocimiento, intención, atención, contenido, materialización o acción en un conjunto de dimensiones explícitas.

Cada dimensión describe un aspecto necesario para comprender o configurar una clase de casos. Cada dimensión contiene campos. Cada campo tiene un espacio de valores posibles. Al seleccionar valores concretos para los campos del Modelo Base, se construye una instancia contextual.

El Modelo Base no es la instancia. Tampoco es la salida. Tampoco es el adaptador. Su tarea es anterior: fija la estructura que hará posible que algo sea instanciado.

Por eso, el Modelo Base responde a preguntas como:

- ¿qué debe poder describirse para que un caso sea inteligible?;
- ¿qué dimensiones son necesarias para comparar casos distintos?;
- ¿qué campos deben configurarse?;
- ¿qué valores puede tomar cada campo?;
- ¿qué restricciones existen entre campos?;
- ¿qué valores son compatibles o incompatibles?;
- ¿qué elementos deben permanecer estables para que muchas instancias pertenezcan a la misma familia?;
- ¿qué debe estar definido antes de que un adaptador pueda operar?

La respuesta a estas preguntas produce una estructura general. Esa estructura general es el Modelo Base.

---

## 3. El Modelo Base como estructura de inteligibilidad

La idea más importante es que el Modelo Base no debe entenderse como una plantilla superficial. Una plantilla solo ofrece espacios vacíos para llenar. Un Modelo Base hace algo más fuerte: define el modo en que una familia de casos puede ser comprendida.

Por eso se le llama **estructura de inteligibilidad**.

Esto significa que el Modelo Base establece:

- qué aspectos del caso importan;
- qué diferencias son relevantes;
- qué variaciones son posibles;
- qué valores son aceptables;
- qué relaciones deben cuidarse;
- qué configuraciones podrían ser válidas;
- y qué configuraciones serían incoherentes o insuficientes.

Por ejemplo, si se quiere construir un sistema para producir videos cortos, el Modelo Base no debería decir simplemente “tema”, “duración” y “público”. Eso sería demasiado pobre. Tendría que decir qué dimensiones hacen que una pieza de video corto sea inteligible como pieza configurada:

- identidad operativa de la realización;
- orientación funcional-pragmática;
- escala temporal y resolución;
- acoplamiento receptoral;
- dinámica atencional;
- construcción del caso;
- comparecencia performativa;
- marco de materialización;
- composición segmental;
- recursos complementarios.

Cada una de esas dimensiones hace visible una parte de la estructura que de otro modo quedaría implícita.

---

## 4. Lo que el Modelo Base no es

Para evitar confusiones, conviene definir negativamente el concepto.

### 4.1. El Modelo Base no es una salida

El Modelo Base no es el video, el guión, la clase, el carrusel, la newsletter ni el producto final.

El Modelo Base define el espacio de configuración que hará posible producir esas salidas, pero no equivale a ninguna de ellas.

### 4.2. El Modelo Base no es una instancia contextual

La instancia contextual aparece cuando se seleccionan valores concretos dentro del Modelo Base.

El Modelo Base define posibilidades. La instancia contextual fija una configuración particular.

### 4.3. El Modelo Base no es el adaptador

El adaptador transforma una instancia contextual en una manifestación codominial. El Modelo Base no transforma; estructura.

### 4.4. El Modelo Base no es un simple formulario

Aunque puede representarse como campos, no debe reducirse a una lista de casillas. Cada campo debe tener función, tipo de valor, cardinalidad, restricciones y lugar dentro de una arquitectura.

### 4.5. El Modelo Base no es una lista de conceptos

Una lista de conceptos no basta. Un Modelo Base requiere organización interna, jerarquía, relaciones, valores y criterios de validez.

---

## 5. Componentes internos de un Modelo Base

Un Modelo Base debe estar compuesto, como mínimo, por los siguientes niveles:

```txt
Modelo Base
  └── Dimensiones de configuración
        └── Campos
              └── Valores posibles
                    └── Restricciones / efectos / relaciones
```

Cada nivel cumple una función distinta.

---

## 6. Dimensión de configuración

Una **dimensión de configuración** es una región estructural del Modelo Base.

Cada dimensión organiza un aspecto distinto del caso que se quiere hacer inteligible. No todas las dimensiones son equivalentes: algunas describen contenido, otras describen atención, otras describen público, otras describen materialización, otras describen identidad, otras describen escala temporal o régimen de salida.

Una dimensión debe responder a una pregunta general.

Ejemplos:

- una dimensión de construcción del caso responde: ¿qué ideas, relaciones y configuración narrativa sostienen el caso?;
- una dimensión de acoplamiento receptoral responde: ¿para qué receptor debe configurarse la pieza?;
- una dimensión de dinámica atencional responde: ¿qué estado de atención se presupone y qué dinámica procesual debe seguir la manifestación?;
- una dimensión de composición segmental responde: ¿cómo debe dividirse la salida?;
- una dimensión de recursos complementarios responde: ¿qué recursos visuales, audiovisuales, textuales o auditivos acompañan la manifestación?

La dimensión no debe ser demasiado pequeña. Si es demasiado pequeña, deja de organizar una región estructural y se convierte en campo. Tampoco debe ser demasiado amplia. Si es demasiado amplia, mezcla responsabilidades distintas y vuelve difícil operar el modelo.

---

## 7. Campo

Un **campo** es un elemento interno de una dimensión de configuración.

Mientras la dimensión define una región general, el campo fija una decisión específica dentro de esa región.

Por ejemplo, dentro de una dimensión de acoplamiento receptoral podrían existir campos como:

- público objetivo inmediato;
- registro predominante;
- densidad terminológica;
- grado de abstracción;
- accesibilidad léxica.

Cada campo debe ser suficientemente específico para poder tomar valores. Si un campo no puede tomar valores, probablemente no está bien definido.

Un campo debe declarar:

- su función;
- el tipo de valor que acepta;
- su cardinalidad;
- sus valores posibles;
- sus restricciones;
- y, cuando corresponda, sus relaciones con otros campos.

---

## 8. Valor

Un **valor** es una opción posible dentro de un campo.

El valor representa una posición configuracional. No es todavía una salida. Tampoco es todavía una acción. Es una determinación dentro del Modelo Base.

Por ejemplo, si un campo es `duracion_objetivo`, sus valores podrían ser:

- `muy_breve`;
- `breve`;
- `breve_expandido`.

Estos valores no son necesariamente segundos exactos. Son posiciones relativas dentro de una escala de configuración. El adaptador podrá interpretar cada valor de acuerdo con un codominio específico.

Esto es importante: un mismo valor puede tener realizaciones distintas según el adaptador.

Por ejemplo:

- en un adaptador de video corto, `breve` puede implicar una duración cercana a 45-60 segundos;
- en un adaptador de video largo, `breve` puede implicar una sección introductoria de pocos minutos;
- en un adaptador de clase, `breve` puede implicar un bloque explicativo compacto.

El valor pertenece al Modelo Base. La regla de realización pertenece al adaptador.

---

## 9. Cardinalidad

La cardinalidad indica cuántos valores puede tomar un campo.

Un campo puede ser:

- de valor único obligatorio;
- de valor único opcional;
- de múltiples valores obligatorios;
- de múltiples valores opcionales;
- de colección abierta controlada;
- de estructura compuesta.

La cardinalidad es importante porque evita ambigüedades.

Por ejemplo, un campo como `funcion_dominante` normalmente debería aceptar un valor principal. En cambio, un campo como `ideas_nucleares` puede aceptar varias ideas activas.

Si no se define cardinalidad, la instancia contextual puede volverse confusa: no se sabe si se espera una única decisión, una lista, una jerarquía o una red.

---

## 10. Tipo de valor

Cada campo debe declarar qué tipo de valor acepta.

Algunos tipos posibles:

### 10.1. Categorial cerrado

El campo acepta un conjunto limitado de valores previamente definidos.

Ejemplo:

```txt
configuracion_discursiva:
  - definicional
  - explicativa
  - argumentativa
  - operativa
  - sintetizadora
```

### 10.2. Categorial abierto controlado

El campo admite valores nuevos, pero bajo criterios claros.

Ejemplo: una etiqueta de subgrafo, siempre que se justifique su función.

### 10.3. Ordinal

El campo acepta valores ordenados.

Ejemplo:

```txt
intensidad:
  - baja
  - media
  - alta
```

### 10.4. Escalar

El campo acepta un número dentro de un rango.

Ejemplo:

```txt
peso_relativo: 0.75
```

### 10.5. Descriptivo controlado

El campo acepta texto, pero con función estructural definida.

Ejemplo:

```txt
formulacion_textual_de_la_idea:
  La idea explica que la superficie visual cambia sin alterar el núcleo operativo del negocio.
```

### 10.6. Estructura compuesta

El campo contiene subcampos.

Ejemplo:

```txt
construccion_conceptual:
  idea_activa:
    formulacion:
    rol:
    peso:
    relaciones:
```

---

## 11. Restricción

Una **restricción** indica condiciones que deben cumplirse para que una configuración sea válida.

Las restricciones pueden operar:

- dentro de un campo;
- entre campos de una misma dimensión;
- entre dimensiones diferentes;
- o entre el Modelo Base y un adaptador.

Ejemplo:

```txt
Si arquitectura_macro = apertura_lista_cierre,
entonces segmentacion_interna debe permitir una zona enumerativa.
```

Otro ejemplo:

```txt
Si publico_objetivo_inmediato = audiencia_fria,
entonces accesibilidad_lexica no debería ser baja salvo justificación.
```

Las restricciones evitan que el Modelo Base se convierta en una combinación arbitraria de valores.

---

## 12. Compatibilidad e incompatibilidad

Un Modelo Base robusto debe permitir identificar compatibilidades e incompatibilidades.

No todos los valores pueden combinarse de cualquier manera.

Por ejemplo:

- `funcion_dominante = enseñar` puede ser compatible con `configuracion_discursiva = explicativa`;
- `funcion_dominante = captar_atencion` puede ser compatible con `regimen_de_activacion_atencional = apertura_inmediata`;
- `densidad_terminologica = alta` puede entrar en tensión con `publico_objetivo_inmediato = audiencia_fria`;
- `duracion_objetivo = muy_breve` puede entrar en tensión con `configuracion_narrativa = acumulativa` si se requieren muchos pasos.

El Modelo Base no siempre debe prohibir estas combinaciones, pero sí debe permitir detectarlas.

---

## 13. Modelo Base e instancia contextual

La relación entre Modelo Base e instancia contextual es fundamental.

El Modelo Base define el espacio de posibilidades.

La instancia contextual selecciona una configuración concreta dentro de ese espacio.

```txt
Modelo Base:
  campo_A:
    valores_posibles: [x, y, z]

Instancia Contextual:
  campo_A: y
```

Sin Modelo Base, la instancia contextual sería una descripción suelta. Sin instancia contextual, el Modelo Base sería una estructura vacía.

Ambos se necesitan, pero no cumplen la misma función.

---

## 14. Modelo Base y adaptador

El adaptador necesita el Modelo Base porque debe saber qué tipo de instancia recibirá.

Sin Modelo Base, el adaptador tendría que interpretar demasiado. Tendría que adivinar qué significa cada parte de la entrada. Eso haría que el proceso fuera opaco, poco repetible y difícil de auditar.

Con Modelo Base, el adaptador puede operar sobre una estructura conocida:

- sabe qué dimensiones existen;
- sabe qué campos contiene cada dimensión;
- sabe qué valores pueden aparecer;
- sabe qué reglas deben aplicarse;
- y puede definir contrapartes protocolarias para los valores.

Por eso, el Modelo Base reduce la carga interpretativa del adaptador.

La inteligencia descriptiva pertenece al Modelo Base. La inteligencia composicional pertenece al adaptador.

---

## 15. Modelo Base como mediador entre grafos e instancias

En la arquitectura ampliada de la ACCD, las estructuras internas del sistema pueden representarse mediante grafos.

Puede haber grafos de varios tipos:

- grafo conceptual;
- grafo atencional;
- grafo receptoral;
- grafo identitario;
- grafo de materialización;
- grafo de recursos;
- grafo de evidencia;
- grafo comercial;
- grafo de trayectorias;
- grafo de isomorfismos.

El Modelo Base no es necesariamente uno de esos grafos. Más bien, puede funcionar como una estructura de lectura que permite condensar regiones de esos grafos en una instancia contextual.

Por ejemplo:

```txt
Región del grafo conceptual
  → valores para dimension_construccion_del_caso

Región del grafo atencional
  → valores para dimension_dinamica_atencional_y_procesual

Región del grafo receptoral
  → valores para dimension_acoplamiento_receptoral

Región del grafo identitario
  → valores para dimension_comparecencia_performativa
```

El Modelo Base define qué dimensiones y campos deben recibir esos valores.

Así, el Modelo Base sirve como gramática de condensación: permite convertir regiones de grafos en una configuración operable.

---

## 16. Modelo Base como estructura portable

Un Modelo Base debe ser portable.

Esto significa que no debe depender demasiado de una única salida concreta, salvo que su función sea explícitamente específica.

Por ejemplo, un Modelo Base para “video corto” puede tener cierta especificidad audiovisual. Pero conceptos como:

- construcción del caso;
- acoplamiento receptoral;
- orientación funcional;
- dinámica atencional;
- identidad operativa;
- comparecencia performativa;

pueden servir en muchos adaptadores distintos.

Por eso, al diseñar un Modelo Base, debe cuidarse no introducir restricciones demasiado locales si no son necesarias.

La regla general es:

> el Modelo Base debe fijar diferencias estructurales estables; el adaptador debe fijar realizaciones específicas del codominio.

---

## 17. Modelo Base e isomorfismo

Un Modelo Base hace posible detectar isomorfismos.

Dos casos son más fáciles de comparar cuando han sido descritos bajo el mismo Modelo Base.

Por ejemplo, dos casos distintos pueden compartir la misma configuración estructural aunque traten temas diferentes:

```txt
Caso A:
  nucleo_estable + superficie_modificada → reposicionamiento_perceptual

Caso B:
  nucleo_estable + superficie_modificada → reposicionamiento_perceptual
```

Si ambos casos se instancian bajo un mismo Modelo Base, se vuelve más fácil detectar que comparten una forma estructural.

El Modelo Base permite entonces:

- comparar casos;
- transferir estructuras;
- construir series;
- reutilizar configuraciones;
- identificar patrones;
- y generar adaptaciones isomórficas.

---

## 18. Modelo Base y entidad federada

Una entidad federada puede contener múltiples ramas, adaptadores, grafos, subgrafos y manifestaciones.

Para que esas ramas no se vuelvan sistemas inconexos, necesitan compartir estructuras portables.

El Modelo Base puede cumplir esa función.

Una entidad federada puede usar varios Modelos Base, cada uno dedicado a una región de operación:

- Modelo Base de contenido conceptual;
- Modelo Base de atención;
- Modelo Base de recepción;
- Modelo Base de identidad;
- Modelo Base de materialización;
- Modelo Base de salida;
- Modelo Base de evidencia.

Estos modelos permiten que distintas ramas de la entidad federada puedan ser distintas sin dejar de ser comparables.

---

## 19. Modelo Base y trazabilidad conceptual

La trazabilidad conceptual requiere saber cómo una idea o estructura interna aparece finalmente en una manifestación.

El Modelo Base ayuda a la trazabilidad porque obliga a declarar las mediaciones.

En vez de pasar directamente de:

```txt
idea → video
```

se pasa por:

```txt
idea / región de grafo
  → campo del Modelo Base
  → valor de la instancia contextual
  → regla del adaptador
  → campo de salida
  → manifestación final
```

Esto permite reconstruir el recorrido.

Si una parte de la salida no funciona, se puede preguntar:

- ¿el problema estaba en el grafo?;
- ¿en la selección de región?;
- ¿en el Modelo Base?;
- ¿en la instancia contextual?;
- ¿en el adaptador?;
- ¿en el codominio?;
- ¿o en la manifestación final?

Sin Modelo Base, esta trazabilidad se vuelve mucho más difícil.

---

## 20. Criterios para diseñar un buen Modelo Base

Un buen Modelo Base debe cumplir varios criterios.

### 20.1. Completitud suficiente

Debe incluir los aspectos necesarios para describir una clase de casos sin dejar vacíos estructurales importantes.

### 20.2. No sobredeterminación

No debe imponer detalles que pertenecen al adaptador o a un codominio específico, salvo que el Modelo Base sea explícitamente codominial.

### 20.3. Claridad dimensional

Cada dimensión debe tener una responsabilidad clara.

### 20.4. Campos operables

Cada campo debe poder tomar valores y ser usado posteriormente por una instancia o adaptador.

### 20.5. Valores definidos

Los valores no deben ser ambiguos. Deben tener descripción, alcance y restricciones.

### 20.6. Compatibilidad con instancias

Debe ser posible construir instancias contextuales completas a partir del Modelo Base.

### 20.7. Compatibilidad con adaptadores

Debe ser posible definir protocolos que usen los valores del Modelo Base.

### 20.8. Reusabilidad

Debe permitir múltiples casos, no solo un ejemplo.

### 20.9. Trazabilidad

Debe permitir seguir cómo una decisión configuracional afecta una salida.

### 20.10. Evolutividad

Debe poder refinarse sin destruir su estructura central.

---

## 21. Errores frecuentes al construir un Modelo Base

### 21.1. Confundirlo con una lista de campos

Un Modelo Base no es una lista. Cada campo necesita función, valores, cardinalidad y restricciones.

### 21.2. Mezclar niveles

No debe mezclarse dimensión, campo, valor, instancia, protocolo y salida.

### 21.3. Hacerlo demasiado específico

Si todos los valores dependen de un solo codominio, el Modelo Base pierde portabilidad.

### 21.4. Hacerlo demasiado abstracto

Si los campos no sirven para construir instancias ni adaptadores, el Modelo Base se vuelve inútil.

### 21.5. No definir valores

Un campo sin espacio de valores no puede generar configuraciones estables.

### 21.6. No declarar restricciones

Sin restricciones, cualquier combinación parece válida.

### 21.7. No considerar trazabilidad

Si el Modelo Base no permite rastrear decisiones, será difícil corregir errores.

### 21.8. No distinguir lo interno y lo externo

El Modelo Base pertenece al plano interno de inteligibilidad; la manifestación pertenece al plano externo.

---

## 22. Ejemplo abstracto generalizado

Supongamos que queremos construir un `modelo_base` para describir una familia de casos que después podrán ser transformados por distintos adaptadores.

El punto importante es que el `modelo_base` no describe todavía una salida final.  
Solo define:

1. qué dimensiones deben configurarse;
2. qué campos contiene cada dimensión;
3. qué valores puede tomar cada campo;
4. y qué combinaciones podrán ser usadas después por una `instancia_contextual`.

---

## 22.1. Modelo Base abstracto

modelo_base:
nombre: modelo_base_abstracto_de_ejemplo

dimensiones:
dimension_1:
descripcion_general: aspecto_estructural_1_del_caso

      campos:
        campo_1_1:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_1_1_a
            - valor_1_1_b
            - valor_1_1_c

        campo_1_2:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_1_2_a
            - valor_1_2_b
            - valor_1_2_c

        campo_1_3:
          tipo_de_valor: ordinal_controlado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - bajo
            - medio
            - alto

    dimension_2:
      descripcion_general: aspecto_estructural_2_del_caso

      campos:
        campo_2_1:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_2_1_a
            - valor_2_1_b
            - valor_2_1_c
            - valor_2_1_d

        campo_2_2:
          tipo_de_valor: multivalor_controlado
          cardinalidad: uno_o_mas_valores
          valores_posibles:
            - valor_2_2_a
            - valor_2_2_b
            - valor_2_2_c
            - valor_2_2_d

        campo_2_3:
          tipo_de_valor: escalar_normalizado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            minimo: 0
            maximo: 1

    dimension_3:
      descripcion_general: aspecto_estructural_3_del_caso

      campos:
        campo_3_1:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_3_1_a
            - valor_3_1_b
            - valor_3_1_c

        campo_3_2:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_3_2_a
            - valor_3_2_b
            - valor_3_2_c

        campo_3_3:
          tipo_de_valor: ordinal_controlado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - bajo
            - medio_bajo
            - medio
            - medio_alto
            - alto

    dimension_4:
      descripcion_general: aspecto_estructural_4_del_caso

      campos:
        campo_4_1:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_4_1_a
            - valor_4_1_b
            - valor_4_1_c

        campo_4_2:
          tipo_de_valor: categorial_cerrado
          cardinalidad: un_valor_obligatorio
          valores_posibles:
            - valor_4_2_a
            - valor_4_2_b
            - valor_4_2_c
            - valor_4_2_d

        campo_4_3:
          tipo_de_valor: texto_controlado
          cardinalidad: un_valor_opcional
          valores_posibles:
            - descripcion_abierta_controlada

## 22.2. Lectura del ejemplo

En este ejemplo abstracto:

- `dimension_1`, `dimension_2`, `dimension_3` y `dimension_4` representan zonas distintas del modelo;
- cada dimensión contiene campos;
- cada campo tiene un espacio de valores posible;
- y una futura `instancia_contextual` deberá seleccionar valores concretos dentro de esos espacios.

El modelo base todavía no dice:

salida_final:
tipo: video

ni tampoco dice:

salida_final:
tipo: clase

ni:

salida_final:
tipo: carrusel

El modelo base solo define el espacio de configuración.

## 22.3. Ejemplo de instancia contextual derivada del modelo base

Una `instancia_contextual` toma valores específicos dentro del espacio definido por el `modelo_base`.

instancia_contextual:
modelo_base_usado: modelo_base_abstracto_de_ejemplo

dimension_1:
campo_1_1: valor_1_1_b
campo_1_2: valor_1_2_a
campo_1_3: alto

dimension_2:
campo_2_1: valor_2_1_c
campo_2_2: - valor_2_2_a - valor_2_2_d
campo_2_3: 0.75

dimension_3:
campo_3_1: valor_3_1_a
campo_3_2: valor_3_2_c
campo_3_3: medio_alto

dimension_4:
campo_4_1: valor_4_1_b
campo_4_2: valor_4_2_d
campo_4_3: descripcion_abierta_controlada

## 22.4. Qué muestra este ejemplo

Este ejemplo muestra la diferencia entre `modelo_base` e `instancia_contextual`.

### El Modelo Base define posibilidades

campo_1_1:
valores_posibles: - valor_1_1_a - valor_1_1_b - valor_1_1_c

### La Instancia Contextual selecciona una posibilidad

campo_1_1: valor_1_1_b

## 22.5. Relación posterior con adaptadores

Una vez construida la `instancia_contextual`, distintos adaptadores pueden usarla para producir salidas diferentes.

instancia_contextual
↓
adaptador_1
↓
manifestacion_codominial_1

instancia_contextual
↓
adaptador_2
↓
manifestacion_codominial_2

instancia_contextual
↓
adaptador_3
↓
manifestacion_codominial_3

Por ejemplo, sin cambiar la lógica abstracta:

instancia_contextual
↓
adaptador_video_corto
↓
manifestacion_codominial_video_corto

instancia_contextual
↓
adaptador_clase
↓
manifestacion_codominial_clase

instancia_contextual
↓
adaptador_carrusel
↓
manifestacion_codominial_carrusel

---

## 22.6. Fórmula general

modelo_base:
define_dimensiones
define_campos
define_valores_posibles

instancia_contextual:
selecciona_valores_concretos

adaptador:
transforma_la_instancia_contextual_en_una_manifestacion_codominial

O de forma más compacta:

modelo_base
→ espacio_de_posibilidades

instancia_contextual
→ configuracion_particular_dentro_del_espacio

adaptador
→ proyeccion_de_la_configuracion_hacia_un_codominio

## 23. Modelo Base dentro del sistema de transferencia estructural

Dentro del sistema compuesto por Modelo Base + Instancia Contextual + Adaptador, el Modelo Base ocupa el primer lugar lógico.

Su función no es producir la manifestación, sino hacer posible que exista una instancia que luego pueda ser adaptada.

El sistema completo puede representarse así:

```txt
estructura interna del sistema
  ↓
Modelo Base
  ↓
Instancia Contextual
  ↓
Adaptador / Protocolo
  ↓
Manifestación codominial
```

El Modelo Base cumple la primera operación:

```txt
hacer inteligible
```

La instancia contextual cumple la segunda:

```txt
particularizar
```

El adaptador cumple la tercera:

```txt
proyectar / materializar
```

Por eso, el Modelo Base es la condición de posibilidad de la transferencia estructural.

---

## 24. Definición canónica propuesta

La siguiente definición puede usarse como definición canónica provisional:

> Un Modelo Base es una estructura de inteligibilidad que organiza una clase de casos mediante dimensiones de configuración, campos internos y valores posibles. Su función es permitir que múltiples casos distintos puedan ser descritos bajo una misma estructura general, de modo que puedan producirse instancias contextuales comparables, reutilizables y operables por adaptadores o protocolos orientados a codominios específicos.

---

## 25. Definición operativa propuesta

> Operativamente, un Modelo Base es el esquema formal que declara qué debe poder configurarse, qué valores puede tomar cada campo, qué restricciones regulan esas configuraciones y qué estructura debe respetar toda instancia contextual que pretenda pertenecer a ese modelo.

---

## 26. Definición dentro de ACCD

> Dentro de la ACCD, un Modelo Base es una estructura portable que permite condensar regiones de grafos, campos atencionales, estructuras conceptuales o configuraciones estratégicas en instancias contextuales capaces de alimentar adaptadores especializados y producir manifestaciones codominiales trazables.

---

## 27. Fórmula sintética

```txt
Modelo Base = estructura de inteligibilidad
Instancia Contextual = configuración particular
Adaptador = operador de proyección codominial
```

O, todavía más condensado:

```txt
Modelo Base:
  define el espacio de lo configurable.
```

---

## 28. Cierre

El Modelo Base es una pieza central porque impide que el sistema opere por intuición local o por improvisación. Hace posible que muchos casos distintos puedan ser tratados bajo una misma estructura, que las instancias sean comparables, que los adaptadores sepan qué reciben y que las manifestaciones puedan ser trazadas hasta las decisiones configuracionales que las produjeron.

En el desarrollo posterior, este documento debe articularse con:

- un documento dedicado a Instancia Contextual;
- un documento dedicado a Adaptador / Protocolo;
- y un documento de unificación donde los tres elementos sean tratados como partes de un mismo sistema de transferencia estructural.

```

```
