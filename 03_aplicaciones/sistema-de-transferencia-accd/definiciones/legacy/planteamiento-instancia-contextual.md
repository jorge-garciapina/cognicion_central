https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69ece6cd-0fe8-83e8-b100-3ed3b69c1558

# Planteamiento de la Instancia Contextual

## 0. Propósito del documento

Este documento define el concepto de **Instancia Contextual** como segundo componente del sistema formado por:

1. **Modelo Base**
2. **Instancia Contextual**
3. **Adaptador / Protocolo**

La Instancia Contextual debe entenderse como la estructura que toma un **Modelo Base** y lo vuelve operable para un caso particular, seleccionando valores concretos dentro de los campos definidos por dicho modelo.

En términos generales:

```txt
Modelo Base
  → define posibilidades

Instancia Contextual
  → selecciona una configuración particular dentro de esas posibilidades

Adaptador / Protocolo
  → transforma esa configuración en una manifestación codominial
```

La Instancia Contextual no es todavía la salida final. Tampoco es el protocolo que produce la salida. Es la configuración situada que el adaptador recibe como entrada.

---

## 1. Definición breve

Una **Instancia Contextual** es una configuración particular construida a partir de un Modelo Base, mediante la selección de valores concretos para los campos de sus dimensiones de configuración.

Dicho de forma compacta:

```txt
Instancia Contextual = Modelo Base + valores seleccionados para un caso particular
```

O de manera más precisa:

> Una Instancia Contextual es una estructura operable que fija valores específicos dentro de las dimensiones, campos y espacios de valores definidos por un Modelo Base, con el fin de preparar un caso particular para ser transformado posteriormente por un adaptador o protocolo.

---

## 2. Función general de la Instancia Contextual

La función general de la Instancia Contextual es **particularizar** el Modelo Base.

El Modelo Base describe una familia de posibilidades. La Instancia Contextual selecciona una configuración concreta dentro de esa familia.

Por ejemplo:

```txt
Modelo Base:
  campo_1_1:
    valores_posibles:
      - valor_1_1_a
      - valor_1_1_b
      - valor_1_1_c

Instancia Contextual:
  campo_1_1: valor_1_1_b
```

El Modelo Base dice qué puede ser seleccionado. La Instancia Contextual dice qué fue seleccionado para este caso.

---

## 3. Lugar de la Instancia Contextual dentro del sistema

La Instancia Contextual ocupa una posición intermedia.

No está en el plano puramente interno del sistema, porque ya expresa una configuración particular. Pero tampoco está en el plano externo de la manifestación final, porque todavía no es video, clase, carrusel, newsletter, landing, producto ni hilo.

Su posición es esta:

```txt
estructura cognitiva interna / regiones de grafos / caso fuente
  ↓
Modelo Base
  ↓
Instancia Contextual
  ↓
Adaptador / Protocolo
  ↓
Manifestación Codominial
```

La Instancia Contextual es, por tanto, una estructura de mediación.

Permite pasar de una estructura general de inteligibilidad a una configuración particular que ya puede ser procesada por un adaptador.

---

## 4. Diferencia entre Modelo Base e Instancia Contextual

Es importante no confundir estos dos componentes.

### 4.1. El Modelo Base define el espacio de posibilidades

El Modelo Base declara:

- qué dimensiones existen;
- qué campos contiene cada dimensión;
- qué valores puede tomar cada campo;
- qué tipo de valor tiene cada campo;
- qué cardinalidad admite;
- qué restricciones deben respetarse;
- y qué relaciones pueden existir entre dimensiones o campos.

Ejemplo:

```txt
modelo_base:
  dimension_1:
    campo_1_1:
      valores_posibles:
        - valor_1_1_a
        - valor_1_1_b
        - valor_1_1_c
```

### 4.2. La Instancia Contextual selecciona una configuración concreta

La Instancia Contextual toma ese espacio de posibilidades y selecciona valores particulares.

Ejemplo:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b
```

### 4.3. Diferencia resumida

```txt
Modelo Base:
  define posibilidades

Instancia Contextual:
  fija una combinación concreta de posibilidades
```

El Modelo Base es general. La Instancia Contextual es particular.

El Modelo Base es una estructura de inteligibilidad. La Instancia Contextual es una configuración situada.

---

## 5. Diferencia entre Instancia Contextual y Adaptador

La Instancia Contextual tampoco debe confundirse con el Adaptador.

### 5.1. La Instancia Contextual configura

La Instancia Contextual responde a preguntas como:

- ¿qué valores toma este caso dentro del modelo?
- ¿qué dimensiones están activadas?
- ¿qué configuración concreta se está usando?
- ¿qué rasgos deben ser considerados por el adaptador?

### 5.2. El Adaptador transforma

El Adaptador responde a preguntas como:

- ¿cómo se transforma esta configuración en una salida específica?
- ¿qué regla se aplica a cada valor?
- ¿qué parte de la salida se ve afectada?
- ¿cómo se compone la manifestación final?

### 5.3. Diferencia resumida

```txt
Instancia Contextual:
  contiene valores configurados

Adaptador:
  opera sobre esos valores
```

La Instancia Contextual no produce por sí sola la manifestación. El Adaptador es el encargado de realizar la proyección hacia un codominio.

---

## 6. Diferencia entre Instancia Contextual y Manifestación Codominial

La Manifestación Codominial es la salida producida después de aplicar un adaptador.

La Instancia Contextual no es todavía esa salida.

Por ejemplo:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b
  dimension_2:
    campo_2_1: valor_2_1_c

adaptador_video_corto:
  aplica_reglas_de_composicion

manifestacion_codominial:
  guion_video_corto
```

La Instancia Contextual puede contener valores que orientan un video, una clase o un carrusel, pero no es todavía ninguno de esos objetos.

---

## 7. Responsabilidad principal de la Instancia Contextual

La responsabilidad principal de la Instancia Contextual es fijar una configuración particular suficientemente determinada para que pueda ser usada por un adaptador.

Esto implica que una buena Instancia Contextual debe ser:

- completa respecto del Modelo Base que utiliza;
- coherente en sus valores seleccionados;
- explícita en sus decisiones;
- compatible con el adaptador que la usará;
- trazable respecto de sus fuentes o criterios de selección;
- y revisable por el usuario o por el sistema.

---

## 8. Estructura mínima de una Instancia Contextual

Una Instancia Contextual debería contener, como mínimo:

```txt
instancia_contextual:
  identificacion:
    nombre:
    modelo_base_usado:
    proposito:
    estado:

  configuracion:
    dimension_1:
      campo_1_1:
      campo_1_2:
      campo_1_3:

    dimension_2:
      campo_2_1:
      campo_2_2:
      campo_2_3:

    dimension_3:
      campo_3_1:
      campo_3_2:
      campo_3_3:

  notas_de_trazabilidad:
    origen_de_los_valores:
    criterios_de_seleccion:
    observaciones:
```

Esta estructura puede ampliarse según el proyecto, pero la idea central permanece igual: la instancia debe declarar qué valores fueron seleccionados dentro del espacio definido por el Modelo Base.

---

## 9. Instancia Contextual como selección de valores

Una Instancia Contextual siempre implica selección.

Si el Modelo Base contiene un campo con tres valores posibles:

```txt
campo_2_1:
  valores_posibles:
    - valor_2_1_a
    - valor_2_1_b
    - valor_2_1_c
```

La Instancia Contextual debe elegir uno de ellos, si la cardinalidad del campo es de un valor obligatorio:

```txt
campo_2_1: valor_2_1_c
```

Si el campo admite múltiples valores:

```txt
campo_2_2:
  cardinalidad: uno_o_mas_valores
  valores_posibles:
    - valor_2_2_a
    - valor_2_2_b
    - valor_2_2_c
    - valor_2_2_d
```

La Instancia Contextual puede seleccionar varios:

```txt
campo_2_2:
  - valor_2_2_a
  - valor_2_2_d
```

Si el campo admite valor escalar:

```txt
campo_2_3:
  tipo_de_valor: escalar_normalizado
  valores_posibles:
    minimo: 0
    maximo: 1
```

La Instancia Contextual puede fijar:

```txt
campo_2_3: 0.75
```

---

## 10. Instancia Contextual como configuración situada

La Instancia Contextual no es una selección arbitraria de valores.

Debe estar situada en un caso, objetivo o contexto determinado.

Por eso conviene que incluya información como:

```txt
identificacion:
  nombre:
  caso:
  proposito:
  adaptador_previsto:
  observaciones:
```

Esto permite saber para qué fue construida.

Ejemplo:

```txt
identificacion:
  nombre: instancia_contextual_ejemplo_1
  caso: caso_particular_X
  proposito: preparar_el_caso_para_un_adaptador_especifico
  adaptador_previsto: adaptador_1
```

La misma selección de valores puede no servir igual para otro adaptador, otro público o una intención distinta. Por eso es importante conservar la dimensión contextual de la instancia.

---

## 11. Instancia Contextual como condensador

En una arquitectura más amplia, la Instancia Contextual puede funcionar como un **condensador**.

Esto significa que puede tomar información proveniente de distintas fuentes internas del sistema y convertirla en valores concretos dentro del Modelo Base.

Por ejemplo:

```txt
region_de_grafo_1
  → dimension_1

region_de_grafo_2
  → dimension_2

region_de_grafo_3
  → dimension_3

region_de_grafo_4
  → dimension_4
```

El resultado sería una única Instancia Contextual:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b

  dimension_2:
    campo_2_1: valor_2_1_c

  dimension_3:
    campo_3_1: valor_3_1_a

  dimension_4:
    campo_4_1: valor_4_1_b
```

Esto permite que una instancia sea el punto de encuentro entre diferentes estructuras internas del sistema y un adaptador concreto.

---

## 12. Instancia Contextual como puente entre grafos y adaptadores

En una arquitectura basada en grafos, distintas regiones pueden alimentar distintas dimensiones de una Instancia Contextual.

Por ejemplo:

```txt
grafo_conceptual
  → region_conceptual_seleccionada
  → dimension_1

grafo_atencional
  → region_atencional_seleccionada
  → dimension_2

grafo_receptoral
  → region_receptoral_seleccionada
  → dimension_3

grafo_de_materializacion
  → region_de_materializacion_seleccionada
  → dimension_4
```

La Instancia Contextual traduce esas regiones en valores de un Modelo Base.

Por eso puede decirse que:

```txt
Instancia Contextual = puente entre regiones de grafos y adaptadores
```

O de manera más técnica:

```txt
Instancia Contextual = condensación intergrafal orientada a adaptación
```

---

## 13. Instancia Contextual como vector compuesto

La Instancia Contextual puede compararse con un vector compuesto.

Cada dimensión del Modelo Base puede entenderse como un subvector:

```txt
instancia_contextual = (
  vector_dimension_1,
  vector_dimension_2,
  vector_dimension_3,
  vector_dimension_4
)
```

Cada subvector contiene los valores seleccionados para los campos de esa dimensión.

Ejemplo:

```txt
vector_dimension_1 = (
  campo_1_1: valor_1_1_b,
  campo_1_2: valor_1_2_a,
  campo_1_3: alto
)
```

La instancia completa sería:

```txt
instancia_contextual = (
  dimension_1(campo_1_1, campo_1_2, campo_1_3),
  dimension_2(campo_2_1, campo_2_2, campo_2_3),
  dimension_3(campo_3_1, campo_3_2, campo_3_3),
  dimension_4(campo_4_1, campo_4_2, campo_4_3)
)
```

Esta analogía es útil porque muestra que el adaptador no opera sobre un valor aislado, sino sobre una configuración compuesta.

---

## 14. Relación funcional con el Adaptador

Un Adaptador puede entenderse como una función que recibe una Instancia Contextual y produce una manifestación.

```txt
adaptador(instancia_contextual) → manifestacion_codominial
```

Si la Instancia Contextual es un vector compuesto, entonces el adaptador recibe una estructura de múltiples dimensiones.

```txt
adaptador(
  dimension_1,
  dimension_2,
  dimension_3,
  dimension_4
)
→ manifestacion_codominial
```

Esto permite entender por qué la Instancia Contextual debe estar bien formada.

Si faltan valores, el adaptador queda obligado a inferir o inventar. Si los valores están mal configurados, la salida puede volverse incoherente.

---

## 15. Tipos de Instancia Contextual

Dependiendo de su estado, una Instancia Contextual puede clasificarse de distintas maneras.

### 15.1. Instancia Contextual completa

Contiene todos los valores obligatorios requeridos por el Modelo Base.

```txt
estado: completa
```

### 15.2. Instancia Contextual parcial

Tiene algunos valores fijados, pero aún faltan campos necesarios.

```txt
estado: parcial
```

### 15.3. Instancia Contextual provisional

Fue construida como hipótesis de trabajo y debe ser validada.

```txt
estado: provisional
```

### 15.4. Instancia Contextual validada

Fue revisada y puede ser usada por un adaptador.

```txt
estado: validada
```

### 15.5. Instancia Contextual reutilizable

Puede ser aplicada a casos análogos o isomorfos.

```txt
estado: reutilizable
```

---

## 16. Validación de una Instancia Contextual

Una Instancia Contextual debe validarse antes de ser entregada a un adaptador.

La validación debe revisar al menos:

1. **Completitud**  
   Todos los campos obligatorios tienen valores.

2. **Validez de valores**  
   Cada valor seleccionado pertenece al espacio permitido por el Modelo Base.

3. **Cardinalidad**  
   Cada campo respeta la cantidad de valores que admite.

4. **Coherencia interna**  
   Los valores seleccionados no se contradicen entre sí.

5. **Compatibilidad con el adaptador**  
   La instancia contiene los valores que el adaptador necesita para operar.

6. **Trazabilidad**  
   Se puede explicar de dónde provienen o por qué fueron seleccionados los valores principales.

7. **Suficiencia operativa**  
   La instancia está suficientemente determinada para que el adaptador no tenga que adivinar.

---

## 17. Error frecuente: tratar la Instancia Contextual como resumen

Una Instancia Contextual no es un resumen del caso.

Un resumen puede decir:

```txt
Este caso trata sobre una persona que intenta explicar una idea a una audiencia poco familiarizada con el tema.
```

Una Instancia Contextual debe decir algo más estructurado:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_c

  dimension_2:
    campo_2_1: valor_2_1_a
    campo_2_2:
      - valor_2_2_a
      - valor_2_2_c
```

El resumen puede ayudar a construir la instancia, pero no la reemplaza.

---

## 18. Error frecuente: tratar la Instancia Contextual como salida

Otro error frecuente es pensar que la instancia ya es la pieza final.

No lo es.

Por ejemplo, una instancia puede decir:

```txt
campo_3_1: valor_3_1_a
campo_3_2: valor_3_2_c
```

Pero eso todavía no es:

```txt
guion_de_video
```

ni:

```txt
carrusel
```

ni:

```txt
clase
```

La pieza final solo aparece después de que un adaptador aplica sus reglas.

---

## 19. Error frecuente: construir instancias sin Modelo Base explícito

Una Instancia Contextual siempre debe estar vinculada a un Modelo Base.

Si no se sabe qué Modelo Base está usando, entonces no se puede validar:

- si sus campos son correctos;
- si sus valores son válidos;
- si su estructura está completa;
- si respeta cardinalidad;
- si puede ser usada por el adaptador.

Por eso toda instancia debería declarar:

```txt
modelo_base_usado:
```

Ejemplo:

```txt
instancia_contextual:
  modelo_base_usado: modelo_base_abstracto_de_ejemplo
```

---

## 20. Error frecuente: obligar al Adaptador a completar la instancia

Si una Instancia Contextual está incompleta, el adaptador podría verse obligado a inventar o inferir valores que no fueron fijados.

Eso debe evitarse.

El Adaptador no debe compensar una instancia mal construida.

La responsabilidad de la Instancia Contextual es llegar suficientemente configurada.

```txt
mala_practica:
  instancia_incompleta
  → adaptador_inventa_valores

buena_practica:
  instancia_contextual_validada
  → adaptador_aplica_protocolo
```

---

## 21. Instancia Contextual e isomorfismo

Una Instancia Contextual puede ser reutilizada cuando distintos casos comparten una estructura semejante.

Esto permite construir isomorfismos.

Por ejemplo:

```txt
instancia_contextual_A:
  dimension_1:
    campo_1_1: valor_1_1_b
  dimension_2:
    campo_2_1: valor_2_1_c
  dimension_3:
    contenido_material: contenido_A
```

Si otro caso comparte la misma estructura, se puede construir:

```txt
instancia_contextual_B:
  dimension_1:
    campo_1_1: valor_1_1_b
  dimension_2:
    campo_2_1: valor_2_1_c
  dimension_3:
    contenido_material: contenido_B
```

Aunque los contenidos materiales sean distintos, la configuración estructural puede ser equivalente.

Esto permite reutilizar:

- estrategias;
- adaptadores;
- protocolos;
- patrones de salida;
- rutas narrativas;
- y configuraciones de atención.

---

## 22. Instancia Contextual y variación controlada

Una Instancia Contextual puede ser modificada parcialmente para producir variaciones.

Por ejemplo, si una instancia está configurada así:

```txt
instancia_contextual_base:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_a

  dimension_2:
    campo_2_1: valor_2_1_c
```

Puede generarse una variación cambiando solo un campo:

```txt
instancia_contextual_variacion:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_c

  dimension_2:
    campo_2_1: valor_2_1_c
```

Esto permite experimentar sin rehacer toda la configuración.

La variación controlada es útil para:

- adaptar a otro público;
- cambiar intensidad;
- modificar duración;
- ajustar tono;
- probar otro codominio;
- o construir una serie.

---

## 23. Ejemplo abstracto de Modelo Base e Instancia Contextual

### 23.1. Modelo Base abstracto

```txt
modelo_base:
  nombre: modelo_base_abstracto

  dimension_1:
    campo_1_1:
      valores_posibles:
        - valor_1_1_a
        - valor_1_1_b
        - valor_1_1_c

    campo_1_2:
      valores_posibles:
        - valor_1_2_a
        - valor_1_2_b
        - valor_1_2_c

  dimension_2:
    campo_2_1:
      valores_posibles:
        - valor_2_1_a
        - valor_2_1_b
        - valor_2_1_c

    campo_2_2:
      valores_posibles:
        - valor_2_2_a
        - valor_2_2_b
        - valor_2_2_c

  dimension_3:
    campo_3_1:
      valores_posibles:
        - valor_3_1_a
        - valor_3_1_b
        - valor_3_1_c
```

### 23.2. Instancia Contextual derivada

```txt
instancia_contextual:
  modelo_base_usado: modelo_base_abstracto

  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_a

  dimension_2:
    campo_2_1: valor_2_1_c
    campo_2_2: valor_2_2_b

  dimension_3:
    campo_3_1: valor_3_1_a
```

### 23.3. Lectura del ejemplo

El Modelo Base define las posibilidades.

La Instancia Contextual selecciona una combinación particular:

```txt
campo_1_1: valor_1_1_b
campo_1_2: valor_1_2_a
campo_2_1: valor_2_1_c
campo_2_2: valor_2_2_b
campo_3_1: valor_3_1_a
```

Esa combinación queda lista para ser usada por un adaptador.

---

## 24. Ejemplo abstracto con procedencia de grafos

Una Instancia Contextual puede indicar de dónde provienen sus valores.

```txt
instancia_contextual:
  modelo_base_usado: modelo_base_abstracto

  dimension_1:
    fuente: region_A_del_grafo_1
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_a

  dimension_2:
    fuente: region_C_del_grafo_2
    campo_2_1: valor_2_1_c
    campo_2_2: valor_2_2_b

  dimension_3:
    fuente: region_B_del_grafo_3
    campo_3_1: valor_3_1_a
```

Esto no siempre será obligatorio, pero es muy útil para trazabilidad.

Permite saber qué región interna del sistema alimentó cada parte de la instancia.

---

## 25. Instancia Contextual como contrato de entrada del Adaptador

Para un Adaptador, la Instancia Contextual funciona como contrato de entrada.

Esto significa que el adaptador espera recibir ciertos valores ya fijados.

Ejemplo:

```txt
adaptador_1:
  espera:
    dimension_1:
      campo_1_1
      campo_1_2

    dimension_2:
      campo_2_1
      campo_2_2
```

La instancia debe proveerlos:

```txt
instancia_contextual:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_a

  dimension_2:
    campo_2_1: valor_2_1_c
    campo_2_2: valor_2_2_b
```

Si no los provee, el adaptador no debería operar sin antes solicitar corrección o completar la instancia de manera explícita.

---

## 26. Instancia Contextual y trazabilidad

Una Instancia Contextual bien construida debe permitir responder:

- ¿qué Modelo Base usa?
- ¿qué valores fueron seleccionados?
- ¿por qué se eligieron esos valores?
- ¿de qué fuente o región provienen?
- ¿qué adaptador puede consumirla?
- ¿qué variaciones podrían construirse?
- ¿qué valores son centrales y cuáles son secundarios?

La trazabilidad no siempre tiene que aparecer en la manifestación final, pero debe poder ser recuperada durante revisión o refinamiento.

---

## 27. Buenas prácticas de construcción

Para construir una Instancia Contextual conviene seguir estas reglas:

1. Declarar siempre el Modelo Base usado.
2. Respetar nombres de dimensiones y campos.
3. Usar únicamente valores permitidos por el Modelo Base.
4. No inventar valores sin declarar que se trata de una extensión o apertura controlada.
5. Completar todos los campos obligatorios.
6. Marcar campos pendientes si la instancia es provisional.
7. Registrar criterios de selección cuando el valor no sea evidente.
8. Revisar coherencia entre dimensiones.
9. Validar compatibilidad con el adaptador previsto.
10. Mantener la instancia separada de la salida final.

---

## 28. Fórmula general

La Instancia Contextual puede formularse así:

```txt
instancia_contextual = seleccion(modelo_base, caso, contexto, criterios)
```

O de forma expandida:

```txt
instancia_contextual = {
  dimension_1: {
    campo_1_1: valor_seleccionado,
    campo_1_2: valor_seleccionado
  },
  dimension_2: {
    campo_2_1: valor_seleccionado,
    campo_2_2: valor_seleccionado
  },
  ...
}
```

Si se considera su procedencia desde grafos:

```txt
instancia_contextual = condensacion(
  region_grafo_1,
  region_grafo_2,
  region_grafo_3,
  modelo_base
)
```

Y si se considera su uso posterior:

```txt
adaptador(instancia_contextual) → manifestacion_codominial
```

---

## 29. Definición larga consolidada

Una Instancia Contextual es una estructura particular derivada de un Modelo Base mediante la selección de valores concretos para los campos de sus dimensiones de configuración. Su función es convertir una posibilidad general de descripción en una configuración situada, suficientemente determinada y operable, que pueda ser usada por un adaptador o protocolo para producir una manifestación codominial específica. En arquitecturas basadas en grafos, la Instancia Contextual también puede funcionar como condensador intergrafal, al traducir regiones seleccionadas de distintos grafos en valores compatibles con un Modelo Base.

---

## 30. Definición corta consolidada

Una Instancia Contextual es una configuración particular de valores dentro de un Modelo Base, construida para que un adaptador pueda transformar esa configuración en una manifestación codominial.

---

## 31. Resumen operativo

```txt
Modelo Base:
  define el espacio de posibilidades

Instancia Contextual:
  selecciona valores particulares dentro de ese espacio

Adaptador / Protocolo:
  transforma la instancia en una salida concreta
```

La Instancia Contextual es el punto donde una estructura general se convierte en una configuración concreta.

Sin Instancia Contextual, el adaptador no tiene una entrada suficientemente determinada.

Con una Instancia Contextual bien construida, distintos adaptadores pueden producir distintas manifestaciones a partir de la misma configuración o de variaciones controladas de ella.
