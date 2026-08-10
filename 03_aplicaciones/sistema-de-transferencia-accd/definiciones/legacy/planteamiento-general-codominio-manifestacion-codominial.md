# Planteamiento general de Codominio y Manifestación Codominial

## 0. Propósito del documento

Este documento presenta una formulación general del concepto de **Codominio** dentro del sistema compuesto por:

- `modelo_base`;
- `instancia_contextual`;
- `adaptador` o `protocolo`;
- `codominio`;
- `manifestacion_codominial`.

El objetivo es evitar que el concepto de Codominio quede reducido a un ejemplo concreto, como un guión de video corto, una clase, un carrusel o una newsletter.

La idea central es esta:

> Un Codominio es el espacio estructural de salidas posibles hacia el que proyecta un Adaptador. Una Manifestación Codominial es una salida concreta perteneciente a ese espacio.

Por tanto, el Codominio no debe confundirse con:

- una salida individual;
- un ejemplo de salida;
- un formato superficial;
- una plantilla aislada;
- una instancia contextual;
- ni el contenido temático que será expresado.

El Codominio es el **contrato formal de exteriorización** que define qué forma debe tomar una manifestación para ser considerada válida dentro de una familia de salidas.

---

## 1. Lugar del Codominio dentro del sistema de transferencia estructural

El sistema general puede representarse así:

```txt
estructura_cognitiva_interna
  ↓
modelo_base
  ↓
instancia_contextual
  ↓
adaptador / protocolo
  ↓
manifestacion_codominial ∈ codominio
```

Cada componente cumple una función distinta:

```txt
modelo_base:
  define una estructura de inteligibilidad

instancia_contextual:
  selecciona valores concretos dentro del modelo base

adaptador / protocolo:
  transforma la instancia contextual hacia una familia de salida

codominio:
  define la familia estructural de salidas válidas

manifestacion_codominial:
  salida concreta producida dentro de esa familia
```

El Codominio aparece en el último tramo del sistema. No organiza la entrada, sino la forma de salida.

---

## 2. Definición breve de Codominio

Un **Codominio** es el espacio de manifestaciones posibles que un Adaptador puede producir.

No es la manifestación misma. Es el espacio al que pertenece la manifestación.

Ejemplo abstracto:

```txt
codominio_x:
  espacio_de_salidas_validas

adaptador_x:
  instancia_contextual → manifestacion_codominial_x

manifestacion_codominial_x:
  elemento_concreto ∈ codominio_x
```

En fórmula:

```txt
adaptador_x(instancia_contextual) → manifestacion_codominial_x ∈ codominio_x
```

Esta fórmula muestra que la salida del Adaptador no es cualquier objeto externo, sino un objeto que debe pertenecer al Codominio que el Adaptador reconoce.

---

## 3. Definición breve de Manifestación Codominial

Una **Manifestación Codominial** es una salida concreta producida por un Adaptador y perteneciente a un Codominio específico.

La Manifestación Codominial es el resultado externo del proceso de transferencia estructural.

No es:

- el Modelo Base;
- la Instancia Contextual;
- el Adaptador;
- ni el Codominio completo.

Es un elemento particular dentro de un espacio de salidas válidas.

Ejemplo abstracto:

```txt
codominio_a:
  familia_de_salidas_tipo_a

manifestacion_codominial_a_001:
  salida_concreta_tipo_a

manifestacion_codominial_a_002:
  salida_concreta_tipo_a

manifestacion_codominial_a_003:
  salida_concreta_tipo_a
```

Todas esas manifestaciones pueden ser distintas entre sí, pero pertenecen al mismo Codominio porque respetan el mismo contrato estructural.

---

## 4. Distinción entre Codominio, especificación codominial y Manifestación Codominial

Para evitar confusiones, conviene distinguir tres niveles.

---

### 4.1. Codominio

El Codominio es la familia estructural de salidas posibles.

Ejemplo:

```txt
codominio_x
```

Este nombre designa el espacio completo de salidas válidas que un Adaptador puede producir.

---

### 4.2. Especificación codominial

La **especificación codominial** es el documento, modelo, esquema o contrato que describe la forma del Codominio.

No es todavía una salida concreta.

Puede aparecer bajo nombres como:

```txt
salida_esperada
modelo_de_salida
estructura_de_salida
contrato_de_salida
plantilla_codominial
especificacion_codominial
```

Lo importante no es el nombre del archivo, sino su función.

Si un documento define:

- qué partes debe tener una salida válida;
- qué capas debe contener;
- qué relaciones internas debe respetar;
- qué campos son obligatorios u opcionales;
- qué criterios determinan pertenencia;
- y cómo debe organizarse la manifestación final;

entonces ese documento está funcionando como **especificación codominial**.

---

### 4.3. Manifestación Codominial

La Manifestación Codominial es una salida concreta que llena la especificación codominial con contenido particular.

Ejemplo abstracto:

```txt
especificacion_codominial:
  seccion_1:
  seccion_2:
  seccion_3:

manifestacion_codominial_001:
  seccion_1: contenido_concreto
  seccion_2: contenido_concreto
  seccion_3: contenido_concreto
```

La especificación dice qué forma debe tener la salida.  
La manifestación es la salida ya construida.

---

## 5. Relación general entre especificación codominial y Manifestación Codominial

La especificación codominial establece la forma esperada de una clase de salida.

La Manifestación Codominial realiza esa forma en un caso particular.

```txt
especificacion_codominial
  → define la forma posible

manifestacion_codominial
  → realiza esa forma con contenido concreto
```

Por eso, una “salida esperada” puede cumplir dos funciones distintas según su nivel de concreción.

---

### 5.1. Salida esperada como ejemplo

Si el documento muestra una salida ya llena, con contenido particular, entonces funciona como ejemplo de Manifestación Codominial.

```txt
salida_esperada_ejemplo:
  contiene_texto_concreto
  contiene_partes_ya_resueltas
  contiene_decisiones_particulares
```

---

### 5.2. Salida esperada como especificación codominial

Si el documento muestra la forma que debe tener cualquier salida válida, sin depender de un caso concreto, entonces funciona como especificación codominial.

```txt
salida_esperada_como_especificacion:
  define_partes
  define_capas
  define_relaciones
  define_campos
  define_criterios_de_validez
```

En este segundo sentido, la salida esperada está muy cerca del Codominio, pero no es exactamente lo mismo.

La distinción precisa sería:

```txt
codominio:
  espacio_de_salidas_validas

especificacion_codominial:
  descripción_formal_de_ese_espacio

manifestacion_codominial:
  salida_concreta_perteneciente_a_ese_espacio
```

---

## 6. Por qué el Codominio no debe depender del tema

Un Codominio no se define por el tema tratado.

Se define por la forma de manifestación.

Dos manifestaciones pueden tratar el mismo tema y pertenecer a codominios distintos.

```txt
misma_instancia_contextual
  → adaptador_a
  → manifestacion_codominial_a ∈ codominio_a

misma_instancia_contextual
  → adaptador_b
  → manifestacion_codominial_b ∈ codominio_b

misma_instancia_contextual
  → adaptador_c
  → manifestacion_codominial_c ∈ codominio_c
```

El contenido puede ser similar, pero la forma codominial cambia.

Por ejemplo, una misma Instancia Contextual podría convertirse en:

```txt
manifestacion_codominial_video
manifestacion_codominial_clase
manifestacion_codominial_carrusel
manifestacion_codominial_articulo
manifestacion_codominial_hilo
manifestacion_codominial_landing
```

Cada una pertenece a un Codominio distinto porque cada una tiene exigencias formales diferentes.

---

## 7. Qué define un Codominio

Un Codominio debe definir, al menos, cinco regiones de exigencia.

---

### 7.1. Tipo de objeto externo

El Codominio debe indicar qué tipo de objeto puede aparecer al final.

Ejemplos abstractos:

```txt
objeto_audiovisual
objeto_textual_extenso
objeto_textual_breve
objeto_visual_secuencial
objeto_pedagogico
objeto_interactivo
objeto_comercial
objeto_documental
objeto_operativo
```

Este nivel define la clase general de manifestación.

---

### 7.2. Unidades internas

El Codominio debe indicar de qué unidades se compone la salida.

Ejemplos abstractos:

```txt
bloques
secciones
laminas
modulos
pasos
escenas
publicaciones
segmentos
preguntas
componentes
```

Estas unidades no tienen que ser iguales en todos los codominios.

Un Codominio puede organizarse por bloques.  
Otro puede organizarse por láminas.  
Otro por módulos.  
Otro por pasos.  
Otro por secciones.  
Otro por interacciones.

---

### 7.3. Capas de manifestación

El Codominio debe indicar qué capas puede o debe contener la salida.

Ejemplos abstractos:

```txt
capa_verbal
capa_visual
capa_auditiva
capa_interactiva
capa_escenica
capa_argumental
capa_pedagogica
capa_comercial
capa_documental
capa_de_justificacion
```

Las capas permiten que la Manifestación Codominial no sea tratada como una unidad plana.

---

### 7.4. Relaciones internas

El Codominio debe indicar cómo se relacionan las unidades internas.

Ejemplos abstractos:

```txt
secuencia
contraste
acumulacion
transicion
recapitulacion
progresion
jerarquia
bifurcacion
cierre
retorno
```

Esto permite distinguir una salida compuesta de una simple colección de partes.

---

### 7.5. Criterios de pertenencia

El Codominio debe permitir evaluar si una salida pertenece o no a la familia estructural correspondiente.

Ejemplos abstractos:

```txt
criterio_de_completitud
criterio_de_coherencia_interna
criterio_de_compatibilidad_formal
criterio_de_legibilidad
criterio_de_ejecucion
criterio_de_continuidad
criterio_de_progresion
criterio_de_cierre
criterio_de_trazabilidad
```

Sin criterios de pertenencia, el Codominio queda demasiado vago.

---

## 8. Esquema general de una especificación codominial

Una especificación codominial general podría organizarse así:

```txt
especificacion_codominial:
  nombre_del_codominio:
  tipo_de_objeto_externo:

  unidades_internas:
    unidad_1:
      funcion:
      campos_obligatorios:
      campos_opcionales:

    unidad_2:
      funcion:
      campos_obligatorios:
      campos_opcionales:

  capas_de_manifestacion:
    capa_1:
      funcion:
      presencia:
      restricciones:

    capa_2:
      funcion:
      presencia:
      restricciones:

  relaciones_internas:
    relacion_1:
    relacion_2:
    relacion_3:

  criterios_de_pertenencia:
    criterio_1:
    criterio_2:
    criterio_3:
```

Este esquema no pertenece a ningún codominio particular. Es una forma general para describir codominios.

---

## 9. Esquema general de una Manifestación Codominial

Una Manifestación Codominial general podría representarse así:

```txt
manifestacion_codominial:
  codominio_de_pertenencia:
  especificacion_codominial_usada:
  instancia_contextual_de_origen:
  adaptador_usado:

  objeto_externo:
    unidad_1:
      contenido:
      funcion:
      capas:
        capa_1:
        capa_2:

    unidad_2:
      contenido:
      funcion:
      capas:
        capa_1:
        capa_2:

  relaciones_entre_unidades:
    relacion_1:
    relacion_2:

  justificacion_de_pertenencia:
    criterio_1:
    criterio_2:
    criterio_3:
```

Esta forma permite registrar no solo la salida, sino también:

- a qué Codominio pertenece;
- qué especificación siguió;
- de qué Instancia Contextual proviene;
- qué Adaptador la produjo;
- y por qué es una salida válida.

---

## 10. Relación entre Adaptador y Codominio

El Adaptador debe conocer el Codominio.

Esto significa que el Adaptador no solo sabe leer la Instancia Contextual. También sabe proyectarla hacia una forma de salida específica.

```txt
adaptador_x:
  entrada:
    instancia_contextual

  conocimiento_de_salida:
    codominio_x
    especificacion_codominial_x
    criterios_de_pertenencia_x

  salida:
    manifestacion_codominial_x
```

El Adaptador funciona como operador de proyección:

```txt
instancia_contextual
  ↓
adaptador_x
  ↓
manifestacion_codominial_x ∈ codominio_x
```

La existencia del Codominio impide que el Adaptador produzca una salida sin forma.

---

## 11. Relación entre Instancia Contextual y Codominio

La Instancia Contextual no pertenece directamente al Codominio.

La Instancia Contextual pertenece al lado de la entrada.

El Codominio pertenece al lado de la salida.

```txt
lado_de_entrada:
  modelo_base
  instancia_contextual

lado_de_salida:
  codominio
  manifestacion_codominial
```

El Adaptador conecta ambos lados.

```txt
instancia_contextual
  → adaptador
    → manifestacion_codominial ∈ codominio
```

La misma Instancia Contextual puede proyectarse hacia distintos Codominios si existen adaptadores capaces de hacerlo.

---

## 12. Ejemplo abstracto con múltiples codominios

Supongamos una misma `instancia_contextual_001`.

```txt
instancia_contextual_001:
  dimension_1:
    campo_1_1: valor_1_1_b
    campo_1_2: valor_1_2_c

  dimension_2:
    campo_2_1: valor_2_1_a
    campo_2_2: valor_2_2_d

  dimension_3:
    campo_3_1: valor_3_1_c
```

Esa misma instancia puede ser proyectada hacia distintos Codominios:

```txt
adaptador_a(instancia_contextual_001)
  → manifestacion_codominial_a_001 ∈ codominio_a

adaptador_b(instancia_contextual_001)
  → manifestacion_codominial_b_001 ∈ codominio_b

adaptador_c(instancia_contextual_001)
  → manifestacion_codominial_c_001 ∈ codominio_c
```

La diferencia entre las manifestaciones no está necesariamente en el contenido de entrada, sino en la forma codominial de salida.

---

## 13. Ejemplo abstracto de diferencia formal entre codominios

La siguiente tabla usa nombres abstractos para mostrar que cada Codominio puede organizar la salida de manera distinta.

| Codominio | Unidad dominante | Capa principal | Relación dominante | Manifestación resultante |
|---|---|---|---|---|
| `codominio_a` | `bloque` | `capa_verbal` | `secuencia` | salida compuesta por bloques sucesivos |
| `codominio_b` | `lamina` | `capa_visual_textual` | `progresion` | salida compuesta por láminas conectadas |
| `codominio_c` | `modulo` | `capa_pedagogica` | `recapitulacion` | salida compuesta por módulos didácticos |
| `codominio_d` | `seccion` | `capa_argumental` | `desarrollo` | salida compuesta por secciones textuales |
| `codominio_e` | `paso` | `capa_operativa` | `procedimiento` | salida compuesta por pasos ejecutables |

Esta tabla no pretende definir codominios finales. Solo muestra que la diferencia codominial no depende únicamente del tema, sino de la forma interna de salida.

---

## 14. Manifestación Codominial simple y compuesta

Conviene distinguir dos tipos generales.

---

### 14.1. Manifestación Codominial simple

Una Manifestación Codominial simple tiene baja complejidad interna.

Ejemplos abstractos:

```txt
unidad_textual_breve
respuesta_directa
imagen_unica
frase_operativa
microinstruccion
```

Aun así, debe pertenecer a un Codominio.

---

### 14.2. Manifestación Codominial compuesta

Una Manifestación Codominial compuesta tiene múltiples unidades, capas o relaciones internas.

Ejemplos abstractos:

```txt
pieza_por_bloques
pieza_por_laminas
pieza_por_modulos
pieza_por_secciones
pieza_por_pasos
pieza_por_interacciones
```

La manifestación compuesta exige una especificación codominial más detallada.

---

## 15. Codominio como forma de control de validez

El Codominio permite evaluar la salida.

Una salida puede fallar aunque tenga buen contenido, si no pertenece formalmente al Codominio.

Ejemplo abstracto:

```txt
instancia_contextual:
  bien_configurada

adaptador:
  ejecutado

salida_generada:
  contenido_correcto
  forma_incompatible_con_el_codominio

resultado:
  manifestacion_no_valida
```

Por eso, el Codominio debe tener criterios de validación.

Una salida válida debe responder afirmativamente a preguntas como:

```txt
¿Tiene las unidades internas requeridas?
¿Respeta las relaciones internas esperadas?
¿Usa las capas necesarias del codominio?
¿Evita partes incompatibles?
¿Puede reconocerse como miembro de la familia de salidas?
¿Su forma corresponde al adaptador usado?
```

---

## 16. Codominio y trazabilidad

Una Manifestación Codominial debería poder conservar trazabilidad hacia:

- la Instancia Contextual que la originó;
- el Adaptador que la produjo;
- la especificación codominial que siguió;
- y el Codominio al que pertenece.

Esto puede representarse así:

```txt
manifestacion_codominial:
  origen:
    instancia_contextual:
    adaptador:
    codominio:
    especificacion_codominial:
```

La trazabilidad permite responder:

```txt
¿Por qué esta salida tiene esta forma?
¿Qué adaptador la produjo?
¿Qué codominio la regula?
¿Qué instancia configuró su contenido?
¿Qué criterios permiten declararla válida?
```

---

## 17. Codominio como condición de reutilización

El Codominio permite reutilizar Adaptadores y comparar manifestaciones.

Si varias manifestaciones pertenecen al mismo Codominio, pueden compararse bajo una misma especificación.

```txt
manifestacion_codominial_a_001 ∈ codominio_a
manifestacion_codominial_a_002 ∈ codominio_a
manifestacion_codominial_a_003 ∈ codominio_a
```

Esto permite evaluar diferencias como:

- mejor o peor composición;
- mayor o menor claridad;
- mejor o peor uso de unidades internas;
- mejor o peor correspondencia con la Instancia Contextual;
- mayor o menor eficacia de las reglas del Adaptador.

Sin Codominio, esas comparaciones serían demasiado vagas.

---

## 18. Codominio y pluralidad de adaptadores

Un mismo Modelo Base puede alimentar múltiples Adaptadores.

Cada Adaptador puede apuntar a un Codominio distinto.

```txt
modelo_base
  ↓
instancia_contextual
  ├─ adaptador_a → codominio_a
  ├─ adaptador_b → codominio_b
  ├─ adaptador_c → codominio_c
  └─ adaptador_d → codominio_d
```

Esto permite que una misma estructura configurada se exteriorice en muchas formas diferentes.

La diferencia entre esas formas no debe entenderse como simple cambio de estilo. Es cambio de Codominio.

---

## 19. Definición canónica propuesta

### Codominio

Un **Codominio** es el espacio estructural de manifestaciones posibles hacia el cual proyecta un Adaptador. Define la familia de salidas válidas, sus unidades internas, capas, relaciones, restricciones y criterios de pertenencia.

### Especificación codominial

Una **especificación codominial** es el documento, esquema o contrato que describe la estructura del Codominio. Puede aparecer bajo nombres como `salida_esperada`, `modelo_de_salida`, `estructura_de_salida` o `contrato_de_salida`, siempre que su función sea definir la forma de cualquier salida válida dentro de ese Codominio.

### Manifestación Codominial

Una **Manifestación Codominial** es una salida concreta producida por un Adaptador a partir de una Instancia Contextual y perteneciente a un Codominio específico.

---

## 20. Fórmula final

La relación completa puede condensarse así:

```txt
modelo_base
  → instancia_contextual
    → adaptador_codominio_x
      → manifestacion_codominial_x ∈ codominio_x
```

Donde:

```txt
modelo_base:
  define posibilidades de configuración

instancia_contextual:
  fija una configuración particular

adaptador_codominio_x:
  proyecta la configuración hacia una familia de salida

codominio_x:
  define el espacio de salidas válidas

manifestacion_codominial_x:
  salida concreta perteneciente a ese espacio
```

La idea fundamental es esta:

> El Codominio no es la pieza final, sino el espacio formal que hace posible declarar una pieza como válida. La Manifestación Codominial es la pieza concreta que aparece dentro de ese espacio después de que un Adaptador proyecta una Instancia Contextual.
