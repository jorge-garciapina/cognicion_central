# MODELO — COMPOSICIÓN ASCENDENTE POR INSTANCIAS DE REGIÓN

## 0. Propósito del modelo

Este modelo describe una arquitectura de composición ascendente para organizar la relación entre:

- `modelo_base_de_regiones`
- `grafo_de_regiones`
- `instancia_regional`
- `instancia_contextual`
- `adaptador / protocolo`
- `manifestacion_codominial`

La finalidad del modelo es explicar cómo una arquitectura interna compuesta por grafos mayores puede producir realizaciones específicas sin duplicar definiciones, sin convertir cada realización en un sistema aislado y sin obligar a que todas las realizaciones compartan exactamente los mismos campos.

La tesis central es:

> Una realización específica no nace directamente de un modelo base local autónomo, sino de una `instancia_regional` que selecciona regiones, dimensiones, campos y valores posibles dentro de un sistema mayor de grafos. Luego, una `instancia_contextual` selecciona valores concretos dentro de esa Instancia Regional, y un adaptador transforma esa configuración en una manifestación codominial.

---

## 1. Problema que resuelve

En una arquitectura de creación de contenido, diferentes realizaciones pueden pertenecer a una misma entidad federada:

- `video-corto/`
- `carousel/`
- `newsletter/`
- `clase/`
- `landing/`
- `hilo/`
- `video-largo/`

Todas pueden compartir un sistema mayor, pero no necesariamente necesitan las mismas dimensiones, campos o valores.

Por ejemplo, una realización de `video-corto/` puede requerir campos como:

- voz;
- modalidad de guion;
- oralidad;
- escenificación;
- performance;
- audio.

Mientras que una realización de `carousel/` puede requerir campos como:

- tono editorial;
- estilo de titulares;
- densidad textual visible;
- jerarquía gráfica;
- presencia de marca;
- régimen de iconografía;
- estilo de composición visual.

Ambas realizaciones pueden compartir una dimensión abstracta como `dimension_comparecencia_de_la_manifestacion`, pero cada una necesita ramas distintas de esa dimensión.

El problema es evitar dos errores:

1. **Duplicación local:** redefinir desde cero cada campo en cada realización.
2. **Universalización forzada:** obligar a todas las realizaciones a usar exactamente el mismo modelo base aunque sus codominios sean distintos.

La solución propuesta es introducir la noción de `instancia_regional`.

---

## 2. Cadena general del modelo

La cadena completa de composición ascendente es:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial
```

Esta cadena debe leerse así:

1. El `modelo_base_de_regiones` organiza el espacio mayor de posibilidades.
2. Los `grafo_de_regiones` contienen regiones, dimensiones, campos y valores posibles.
3. La `instancia_regional` selecciona qué regiones o campos serán usados por una realización específica.
4. La `instancia_contextual` selecciona valores concretos dentro del espacio habilitado por la Instancia Regional.
5. El `adaptador / protocolo` transforma esa configuración operable en una salida válida.
6. La `manifestacion_codominial` es el objeto externo producido dentro de un codominio específico.

---

## 3. Componentes principales

### 3.1. `modelo_base_de_regiones`

El `modelo_base_de_regiones` es la estructura general que organiza los grafos mayores del sistema.

No está diseñado para producir una manifestación directa.

Su función es declarar el espacio amplio de regiones, dimensiones, campos y valores posibles que luego podrán ser seleccionados por distintas realizaciones.

Puede entenderse como una estructura de inteligibilidad superior.

#### Contiene o articula

- grafos mayores;
- dimensiones generales;
- campos posibles;
- valores posibles;
- relaciones entre campos;
- ramas especializadas;
- equivalencias entre realizaciones;
- zonas reutilizables;
- zonas específicas.

#### No debe confundirse con

- una instancia contextual;
- un adaptador;
- una manifestación codominial;
- una realización específica.

---

### 3.2. `grafo_de_regiones`

Los `grafo_de_regiones` son grandes estructuras de organización interna del sistema.

Cada grafo mayor agrupa una familia de regiones, nodos, relaciones y posibilidades.

Ejemplos:

```txt
grafos-mayores/
  grafo_conceptual.txt
  grafo_atencional.txt
  grafo_receptoral.txt
  grafo_identitario.txt
  grafo_de_materializacion.txt
  grafo_de_recursos.txt
  grafo_comercial.txt
  grafo_de_evidencia.txt
  grafo_de_trayectorias.txt
  grafo_de_isomorfismos.txt
```

#### Función

Los grafos mayores contienen el material estructural que puede ser usado por muchas realizaciones distintas.

Por ejemplo:

- el `grafo_conceptual` puede alimentar la construcción del caso;
- el `grafo_atencional` puede alimentar la dinámica atencional;
- el `grafo_receptoral` puede alimentar la adecuación al público;
- el `grafo_identitario` puede alimentar la comparecencia;
- el `grafo_de_materializacion` puede alimentar la forma de salida;
- el `grafo_de_recursos` puede alimentar recursos visuales, textuales, auditivos o audiovisuales.

---

### 3.3. `instancia_regional`

La `instancia_regional` es una selección estructurada de regiones, dimensiones, campos y valores posibles provenientes del `modelo_base_de_regiones` y de los `grafo_de_regiones`.

Su función es delimitar qué partes del sistema mayor serán usadas por una realización específica.

Por ejemplo:

```txt
realizaciones/video-corto/instancias_regionales/instancia_regional_tipo_1.md
realizaciones/carousel/instancias_regionales/instancia_regional_tipo_1.md
realizaciones/newsletter/instancias_regionales/instancia_regional_tipo_1.md
```

La `instancia_regional` no selecciona todavía valores concretos para un caso particular.

Selecciona el espacio de configuración que estará disponible para las futuras instancias contextuales de esa realización.

#### Fórmula

```txt
instancia_regional(grafo_de_regiones)
  → espacio_configurable_de_realizacion
```

#### Ejemplo abstracto

```txt
instancia_regional_carousel:
  dimension_comparecencia_de_la_manifestacion:
    campos_incluidos:
      - campo_1
         * valor_1_1
         * valor_1_2
         * valor_1_3
      - campo_2
         * valor_2_1
         * valor_2_2
         * valor_2_3
      - campo_3
         * valor_3_1
         * valor_3_2
      - campo_4
         * valor_4_1
         * valor_4_2
         * valor_4_3
         * valor_4_4
      - campo_5
         * valor_5_1
      - campo_6
         * valor_5_1
         * valor_5_2
         * valor_5_3
         * valor_5_4
         * valor_5_5
      - campo_7
         * valor_6_1
         * valor_6_2
         * valor_6_3
```

Aquí no se redefinen esos campos. Solo se indica que la realización `carousel/` usará esos nodos del sistema mayor.

---

### 3.4. `instancia_contextual`

La `instancia_contextual` es una configuración particular de valores dentro del espacio habilitado por una `instancia_regional`.

La Instancia Regional dice qué campos existen para una realización.

La instancia contextual dice qué valores concretos toma cada campo para un caso particular.

#### Fórmula

```txt
instancia_contextual(instancia_regional)
  → configuracion_operable
```

#### Ejemplo abstracto

Si la Instancia Regional habilita estos campos:

```txt
campos_habilitados:
   campo_1
    * valor_1_1
    * valor_1_2
    * valor_1_3
   campo_2
    * valor_2_1
    * valor_2_2
    * valor_2_3
   campo_3
    * valor_3_1
    * valor_3_2
   campo_4
    * valor_4_1
    * valor_4_2
    * valor_4_3
    * valor_4_4
```

Una instancia contextual podría fijar:

```txt
instancia_contextual_carousel_1:
  campo_1: valor_1_1
  campo_2: valor_2_2
  campo_3: valor_3_1
  campo_4: valor_4_4
```

---

### 3.5. `adaptador / protocolo`

El adaptador o protocolo recibe una instancia contextual y la transforma en una manifestación codominial.

No recibe directamente el grafo mayor completo.

No recibe directamente la Instancia Regional.

Recibe una configuración operable producida dentro del espacio habilitado por la Instancia Regional.

#### Fórmula

```txt
adaptador(instancia_contextual)
  → manifestacion_codominial
```

#### Ejemplo

```txt
adaptador_carousel(instancia_contextual_carousel_1)
  → manifestacion_codominial_carousel_1
```

---

### 3.6. `manifestacion_codominial`

La `manifestacion_codominial` es el objeto externo producido por un adaptador dentro de un codominio específico.

Ejemplos:

- una secuencia de láminas para carrusel;
- un guion audiovisual breve para video corto;
- una clase estructurada;
- una newsletter;
- una landing;
- un hilo;
- un video largo.

La manifestación codominial es la salida concreta, no el codominio completo.

---

## 4. Analogía central

La analogía que estructura el modelo es:

```txt
Instancia Contextual : Instancia Regional
::
selección de valores : selección de regiones
```

También puede formularse así:

```txt
Instancia Contextual : campos habilitados por la Instancia Regional
::
Instancia Regional : regiones habilitadas por el Modelo Base de Regiones
```

Esto significa:

- la `instancia_regional` selecciona qué partes del sistema mayor serán pertinentes para una realización;
- la `instancia_contextual` selecciona valores concretos dentro de esas partes para un caso.

---

## 5. Dos niveles de selección

### 5.1. Nivel 1: selección de regiones

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
```

Este nivel responde:

> ¿Qué regiones, dimensiones y campos del sistema mayor necesita una realización específica?

Por ejemplo:

- `video-corto/` necesita ramas audiovisuales, performativas y temporales;
- `carousel/` necesita ramas visuales, editoriales y secuenciales;
- `newsletter/` necesita ramas textuales, editoriales y de lectura sostenida;
- `clase/` necesita ramas didácticas, progresivas y evaluativas.

---

### 5.2. Nivel 2: selección de valores

```txt
instancia_regional
  → instancia_contextual
```

Este nivel responde:

> Dentro de los campos habilitados para esta realización, ¿qué valores concretos toma este caso particular?

Ejemplo:

```txt
campo: tono_editorial
valores_posibles:
  - tecnico
  - pedagogico_directo
  - divulgativo
  - comercial

instancia_contextual:
  tono_editorial: pedagogico_directo
```

---

## 6. Ejemplo comparativo: video corto y carrusel

### 6.1. `video-corto/`

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → video-corto/instancias_regionales/instancia_regional_tipo_1.md
      selecciona:
        - construccion_conceptual
        - dinamica_atencional_para_video_breve
        - acoplamiento_receptoral_para_consumo_rapido
        - comparecencia_audiovisual_performativa
        - composicion_temporal_por_bloques
        - recursos_audiovisuales
      ↓
      video-corto/instancias_contextuales/instancia_contextual_1.md
        selecciona valores concretos
      ↓
      video-corto/protocolo/
      ↓
      video-corto/manifestaciones-codominiales/manifestacion-codominial-1.md
```

### 6.2. `carousel/`

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → carousel/instancias_regionales/instancia_regional_tipo_1.md
      selecciona:
        - construccion_conceptual
        - dinamica_atencional_para_lectura_secuencial
        - acoplamiento_receptoral_para_consumo_visual
        - comparecencia_visual_editorial
        - composicion_por_laminas
        - recursos_graficos_y_textuales
      ↓
      carousel/instancias_contextuales/instancia_contextual_1.md
        selecciona valores concretos
      ↓
      carousel/protocolo/
      ↓
      carousel/manifestaciones-codominiales/manifestacion-codominial-1.md
```

---

## 7. Campos como nodos

En este modelo, los campos pueden entenderse como nodos dentro de una dimensión.

Los valores son nodos conectados a esos campos.

Ejemplo:

```txt
dimension_comparecencia_de_la_manifestacion
  ├── voz
  │   ├── valor_voz_1
  │   ├── valor_voz_2
  │   └── valor_voz_n
  ├── modalidad_de_guion
  │   ├── valor_modalidad_1
  │   ├── valor_modalidad_2
  │   └── valor_modalidad_n
  ├── oralidad
  │   ├── valor_oralidad_1
  │   ├── valor_oralidad_2
  │   └── valor_oralidad_n
  ├── tono_editorial
  │   ├── valor_tono_1
  │   ├── valor_tono_2
  │   └── valor_tono_n
  └── jerarquia_grafica
      ├── valor_jerarquia_1
      ├── valor_jerarquia_2
      └── valor_jerarquia_n
```

La Instancia Regional selecciona algunos de esos campos.

La instancia contextual selecciona valores concretos dentro de los campos seleccionados.

---

## 8. Ejemplo: misma dimensión, distintas ramas

Una dimensión abstracta puede ser compartida por varias realizaciones, aunque cada realización use ramas distintas.

Ejemplo:

```txt
dimension_comparecencia_de_la_manifestacion
```

Rama audiovisual-performativa:

```txt
voz
modalidad_de_guion
oralidad
escenificacion
performance
audio
```

Rama visual-editorial:

```txt
tono_editorial
estilo_de_titulares
densidad_textual_visible
jerarquia_grafica
presencia_de_marca
regimen_de_iconografia
estilo_de_composicion_visual
```

`video-corto/` puede seleccionar la rama audiovisual-performativa.

`carousel/` puede seleccionar la rama visual-editorial.

Así se preserva una equivalencia estructural sin forzar que ambas realizaciones usen los mismos campos.

---

## 9. Ventajas del modelo

### 9.1. Evita duplicación

Los campos y valores no tienen que redefinirse en cada realización.

Viven en el sistema mayor y se seleccionan por Instancia Regional.

---

### 9.2. Permite realizaciones hermanas

`video-corto/`, `carousel/`, `newsletter/`, `clase/`, `landing/`, `hilo/` y `video-largo/` pueden ser realizaciones hermanas porque derivan del mismo sistema mayor, aunque no tengan los mismos campos.

---

### 9.3. Permite equivalencias sin identidad total

Dos realizaciones pueden resolver una misma función abstracta mediante ramas diferentes.

Ejemplo:

```txt
video-corto:
  comparecencia audiovisual-performativa

carousel:
  comparecencia visual-editorial
```

Ambas resuelven comparecencia, pero no del mismo modo.

---

### 9.4. Permite extensión modular

Para añadir una nueva realización, no es necesario reconstruir todo el sistema.

Basta con:

1. identificar qué regiones del sistema mayor necesita;
2. crear una Instancia Regional;
3. definir o asociar su codominio;
4. definir su protocolo;
5. crear instancias contextuales;
6. producir manifestaciones codominiales.

---

### 9.5. Permite trazabilidad

Cada manifestación puede rastrearse hacia atrás:

```txt
manifestacion_codominial
  ← adaptador
  ← instancia_contextual
  ← instancia_regional
  ← grafo_de_regiones
  ← modelo_base_de_regiones
```

Esto permite saber qué región del sistema mayor alimentó cada salida.

---

## 10. Estructura de carpetas recomendada

```txt
sistema-de-transferencia/
   definiciones/
   realizaciones/
      video-corto/
         codominio/
         instancias_regionales/
            instancia_regional_tipo_1.md
         protocolo/
         instancias_contextuales/
            instancia_contextual_1.md
         manifestaciones-codominiales/
            manifestacion-codominial-1.md

      carousel/
         codominio/
         instancias_regionales/
            instancia_regional_tipo_1.md
         protocolo/
         instancias_contextuales/
            instancia_contextual_1.md
         manifestaciones-codominiales/
            manifestacion-codominial-1.md

      newsletter/
      clase/
      landing/
      hilo/
      video-largo/

   grafo_de_regiones/
      modelo_base_de_regiones.md
      grafo_de_region_r1/
         definicion.md
         campo_r1c1_1/
            definicion.md
            valor_r1c1_1.md
            valor_r1c1_2.md
            valor_r1c1_3.md
         campo_r1c2/
            definicion.md
            valor_r1c2_1.md
            valor_r1c2_2.md
         campo__r1c3/
            definicion.md
            valor_r1c3_1.md
            valor_r1c3_2.md
            valor_r1c3_3.md
            valor_r1c3_4.md
            valor_r1c3_5.md
      grafo_de_region_r2/
         definicion.md
            campo_r2c1/
            valor_r2c1_1.md
            valor_r2c1_2.md
            valor_r2c1_3.md
         campo_r2c2/
            definicion.md
            valor_r2c2_1.md
            valor_r2c2_2.md
      grafo_de_region_r3/
         definicion.md
            campo_r3c1/
               definicion.md
            valor_r3c1_1.md
         campo_r3c2/
            definicion.md
            valor_r3c2_1.md
            valor_r3c2_2.md
```

---

## 11. Reglas de uso

### Regla 1

Una realización no debe redefinir campos que ya existen en el sistema mayor.

Debe referenciarlos mediante una `instancia_regional`.

---

### Regla 2

Una `instancia_regional` no debe seleccionar valores concretos para un caso.

Solo debe seleccionar regiones, dimensiones, campos y valores posibles disponibles.

---

### Regla 3

Una `instancia_contextual` no debe seleccionar regiones nuevas.

Debe trabajar dentro del espacio habilitado por la Instancia Regional.

---

### Regla 4

Un adaptador no debe recibir grafos mayores directamente.

Debe recibir una instancia contextual operable.

---

### Regla 5

Una manifestación codominial debe poder rastrearse hacia su instancia contextual y hacia la Instancia Regional que habilitó sus campos.

---

## 12. Fórmula final del modelo

```txt
MBR = modelo_base_de_regiones
G = grafo_de_regiones organizados por MBR
IR_R = instancia_regional de la realizacion R
IC_R_i = instancia_contextual i dentro de IR_R
A_R = adaptador de la realizacion R
MC_R_i = manifestacion_codominial i de la realizacion R
```

Entonces:

```txt
IR_R(G) → espacio_configurable_R
```

```txt
IC_R_i(IR_R) → configuracion_operable_R_i
```

```txt
A_R(IC_R_i) → MC_R_i
```

Cadena completa:

```txt
MBR
  → G
    → IR_R
      → IC_R_i
        → A_R
          → MC_R_i
```

---

## 13. Cierre conceptual

Este modelo describe una arquitectura de composición ascendente en la que:

- el `modelo_base_de_regiones` organiza grafos mayores;
- los `grafo_de_regiones` contienen regiones, dimensiones, campos y valores posibles;
- cada `instancia_regional` selecciona qué partes del sistema mayor serán usadas por una realización;
- cada `instancia_contextual` selecciona valores concretos dentro de esa región;
- cada `adaptador / protocolo` transforma esa configuración en una salida válida;
- cada `manifestacion_codominial` aparece como objeto externo dentro de un codominio.

La idea central es que la arquitectura no avanza de una idea aislada a una pieza aislada, sino de un sistema mayor de regiones hacia realizaciones específicas mediante dos niveles de selección:

```txt
selección de regiones
  → selección de valores
    → adaptación codominial
```

Eso permite que muchas realizaciones distintas pertenezcan a una misma entidad federada sin ser copias entre sí y sin volverse sistemas independientes.
