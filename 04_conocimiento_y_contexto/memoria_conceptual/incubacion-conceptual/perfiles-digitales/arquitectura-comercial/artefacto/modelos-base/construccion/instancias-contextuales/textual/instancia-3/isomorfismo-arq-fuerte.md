# Isomorfismo arquitectónico fuerte
## Ejemplo de instancia contextual
## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo arquitectónico fuerte** respecto de la
instancia `AMT-IC-003`.

Se preserva de manera fuerte:

- `clase_de_unidad_textual`
- número de ideas activas
- distribución de pesos conceptuales
- roles conceptuales
- modos de presencia
- tipos de relación entre ideas
- configuración narrativa
- configuración léxica
- configuración de voz o comparecencia
- configuración de ritmo y legibilidad
- configuración discursiva

Lo que cambia es el **tema**.

En la instancia base, el núcleo temático giraba en torno a:
- modelo base;
- instancia;
- adaptador;
- materialización;
- y la importancia de no mezclar niveles.

En esta nueva instancia, el núcleo temático gira en torno a:
- libertad prometida por plataformas;
- captura de mediaciones;
- dependencia reestructurada;
- claridad diagnóstica;
- y la importancia de no confundir autonomía percibida con autonomía real.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-003-ISO-001`
- `clase_de_unidad_textual`: `pieza_de_captacion_conceptual`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a abrir atención sobre la diferencia entre
  autonomía percibida y dependencia estructural en plataformas digitales, con
  fuerte función de entrada y clarificación inicial.

---

## 2. Configuración conceptual (`C`)

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_relacional
      contenido: "Autonomía prometida, captura de mediaciones, dependencia reestructurada y plataforma pertenecen a un mismo sistema de relaciones y no deben pensarse como piezas aisladas."
    rol_conceptual: nuclear
    peso_relativo: 0.34
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La necesidad de no confundir libertad percibida con autonomía real sostiene la relación entre las cuatro piezas."
      - idea_relacionada: I3
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La secuencia de captura y reorganización despliega esta relación en forma operativa."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Cuando libertad percibida y dependencia estructural se confunden, el análisis de plataforma se vuelve opaco y pierde fuerza crítica."
    rol_conceptual: nuclear
    peso_relativo: 0.26
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La crítica a la confusión entre libertad y dependencia refuerza la separación analítica entre las piezas."
      - idea_relacionada: I4
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad diagnóstica aparece como consecuencia de separar correctamente autonomía percibida y captura real."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La secuencia correcta es: promesa de autonomía, captura de mediaciones, reorganización de dependencia y lectura diagnóstica."
    rol_conceptual: puente
    peso_relativo: 0.18
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La secuencia convierte la relación entre las piezas en una estructura operable."
      - idea_relacionada: I4
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La secuencia facilita la claridad crítica de la pieza."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_captativa
      contenido: "Entender la diferencia entre autonomía percibida y dependencia reestructurada evita gran parte de la ingenuidad en el análisis de plataformas."
    rol_conceptual: complementaria
    peso_relativo: 0.14
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad crítica aparece como consecuencia de no confundir libertad prometida con autonomía real."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La secuencia ordenada del fenómeno refuerza esta claridad."

  - idea_id: I5
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La dependencia reestructurada no es ausencia de libertad visible, sino configuración técnica de mediaciones que siguen organizando la relación."
    rol_conceptual: complementaria
    peso_relativo: 0.08
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: subordinacion
        descripcion_de_la_relacion: "La definición precisa de dependencia reestructurada desarrolla una de las diferencias centrales del sistema."
```

### Lectura resumida de `C`

La instancia gira principalmente alrededor de dos ideas nucleares:

1. autonomía prometida, captura de mediaciones, dependencia reestructurada y
   plataforma pertenecen a un mismo sistema de relaciones;
2. confundir libertad percibida con autonomía real produce opacidad analítica.

A esas ideas se añaden una secuencia operativa, una consecuencia diagnóstica y
una aclaración específica sobre la dependencia reestructurada.

La suma de los pesos es `1.00`.

---

## 3. Configuración narrativa (`N`)

### `configuracion_narrativa`

```yaml
estructura_global: contrastiva
funcion_de_apertura: "abrir con una distinción fuerte entre autonomía aparente y dependencia reestructurada"
modo_de_progresion: lineal_con_contrastes
distribucion_de_bloques:
  - bloque_1: "distinción inicial"
  - bloque_2: "error de confusión"
  - bloque_3: "secuencia correcta"
  - bloque_4: "cierre de clarificación"
transiciones: contrastivas
modo_de_cierre: captativo_sintetizador
grado_de_recapitulacion: media
```

### Lectura resumida de `N`

El texto se organiza como una pieza contrastiva: primero separa dos niveles del
fenómeno, luego muestra el error de confundirlos, después ofrece una secuencia
más precisa y cierra con una síntesis breve de clarificación.

---

## 4. Configuración léxica (`L`)

### `configuracion_lexica`

```yaml
registro_predominante: pedagogico
densidad_terminologica: media
grado_de_abstraccion: intermedio
accesibilidad_lexica: alta
variacion_lexica: media
```

### Lectura resumida de `L`

La instancia usa un léxico pedagógico con terminología suficiente para mantener
precisión, pero con alta accesibilidad y abstracción intermedia para facilitar la
entrada al tema.

---

## 5. Configuración de voz o comparecencia (`V`)

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: alta
autoridad: media
calidez: media
intensidad: media
sobriedad: media
```

### Lectura resumida de `V`

La voz comparece de manera cercana y orientadora, sin perder estructura ni caer
en excesiva rigidez magistral.

---

## 6. Configuración de ritmo y legibilidad (`R`)

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: alta
continuidad: media
friccion_interpretativa: baja
compresion: media
recapitulacion: media
```

### Lectura resumida de `R`

La instancia prioriza la explicitud y la baja fricción interpretativa. Busca ser
rápidamente legible sin convertirse en mera simplificación vacía.

---

## 7. Configuración discursiva (`D`)

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: captativa
region_secundaria: explicativa
```

### Lectura resumida de `D`

La formulación principal busca abrir atención y producir entrada al problema.
Secundariamente cumple una función explicativa para aclarar la distinción entre
niveles.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-003-ISO-001
  clase_de_unidad_textual: pieza_de_captacion_conceptual
  estado_de_instancia: estable
  C: configuracion_conceptual
  N: configuracion_narrativa
  L: configuracion_lexica
  V: configuracion_de_voz_o_comparecencia
  R: configuracion_de_ritmo_y_legibilidad
  D: configuracion_discursiva
```

---

## 9. Lectura integrada de la instancia

Esta instancia puede leerse así:

> Se trata de una pieza de captación conceptual estable, orientada a abrir
> atención sobre una distinción básica del análisis de plataformas: autonomía
> percibida y dependencia reestructurada no son lo mismo. La formulación usa una
> organización contrastiva, léxico pedagógico accesible, voz cercana y una región
> discursiva predominantemente captativa con apoyo explicativo.

---

## 10. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo arquitectónico fuerte** porque conserva la
misma arquitectura de la instancia base y cambia únicamente el tema.

Se preserva:

- la misma clase de unidad textual;
- la misma configuración global;
- la misma estructura conceptual de cinco ideas;
- la misma distribución de pesos;
- la misma organización narrativa;
- el mismo perfil léxico;
- la misma voz;
- el mismo ritmo;
- y la misma región discursiva.

Lo que cambia es el contenido temático:

- de modelo base / instancia / adaptador / materialización
- a autonomía percibida / captura de mediaciones / dependencia reestructurada / plataforma

---

## 11. Fórmula condensada

La instancia `AMT-IC-003-ISO-001` conserva la forma arquitectónica de la
instancia original, pero sustituye su núcleo temático por una pieza de captación
sobre plataformas, autonomía aparente y dependencia estructural, mostrando así un
isomorfismo arquitectónico fuerte.
