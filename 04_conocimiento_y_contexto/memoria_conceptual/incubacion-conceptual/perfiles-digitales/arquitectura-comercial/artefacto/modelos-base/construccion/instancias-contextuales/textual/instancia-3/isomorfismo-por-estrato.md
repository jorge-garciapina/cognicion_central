# Isomorfismo por estrato
## Ejemplo de instancia contextual
## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo por estrato** respecto de la instancia
`AMT-IC-003`.

En este caso no se conserva toda la arquitectura interna de la instancia base.

Se preservan de forma fuerte estos estratos:

- `configuracion_narrativa` (`N`)
- `configuracion_discursiva` (`D`)

Se modifican de forma controlada estos estratos:

- `configuracion_conceptual` (`C`)
- `configuracion_lexica` (`L`)
- `configuracion_de_voz_o_comparecencia` (`V`)
- `configuracion_de_ritmo_y_legibilidad` (`R`)

Esto significa que la nueva instancia conserva la misma lógica contrastiva de
recorrido y la misma región discursiva captativa-explicativa, pero cambia el
tema y parte del modo de comparecencia.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-003-ISO-E1`
- `clase_de_unidad_textual`: `pieza_de_captacion_conceptual`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a abrir atención sobre la diferencia entre
  monetización directa y captura económica distribuida, con función fuerte de
  entrada y clarificación inicial.

---

## 2. Configuración conceptual (`C`) — estrato modificado

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_relacional
      contenido: "Monetización directa, captura económica distribuida, trayectoria y convertibilidad pertenecen a un mismo sistema de relaciones y no deben pensarse como piezas aisladas."
    rol_conceptual: nuclear
    peso_relativo: 0.34
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La necesidad de no confundir ingreso visible con captura estructural sostiene la relación entre las cuatro piezas."
      - idea_relacionada: I3
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La secuencia entre producción, trayectoria y convertibilidad despliega esta relación en forma operativa."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Cuando ingreso visible y captura económica se confunden, la lectura comercial del sistema se vuelve opaca y pierde fuerza analítica."
    rol_conceptual: nuclear
    peso_relativo: 0.26
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La crítica a la confusión entre ingreso y captura refuerza la separación analítica entre las piezas."
      - idea_relacionada: I4
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad diagnóstica aparece como consecuencia de separar correctamente monetización visible y convertibilidad real."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La secuencia correcta es: producción de valor, inscripción en trayectoria, convertibilidad y lectura de captura."
    rol_conceptual: puente
    peso_relativo: 0.18
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La secuencia convierte la relación entre las piezas en una estructura operable."
      - idea_relacionada: I4
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La secuencia facilita la claridad económica de la pieza."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_captativa
      contenido: "Entender la diferencia entre monetización directa y captura distribuida evita gran parte de la ingenuidad en el análisis comercial."
    rol_conceptual: complementaria
    peso_relativo: 0.14
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad económica aparece como consecuencia de no confundir ingreso visible con captura real."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La secuencia ordenada del fenómeno refuerza esta claridad."

  - idea_id: I5
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La captura económica distribuida no equivale a un ingreso visible puntual, sino a una organización de convertibilidad que atraviesa la trayectoria."
    rol_conceptual: complementaria
    peso_relativo: 0.08
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: subordinacion
        descripcion_de_la_relacion: "La definición precisa de captura distribuida desarrolla una de las diferencias centrales del sistema."
```

### Lectura resumida de `C`

La instancia gira principalmente alrededor de dos ideas nucleares:

1. monetización directa, captura distribuida, trayectoria y convertibilidad
   pertenecen a un mismo sistema de relaciones;
2. confundir ingreso visible con captura real produce opacidad analítica.

A esas ideas se añaden una secuencia operativa, una consecuencia diagnóstica y
una aclaración específica sobre la captura económica distribuida.

La suma de los pesos es `1.00`.

---

## 3. Configuración narrativa (`N`) — estrato preservado

### `configuracion_narrativa`

```yaml
estructura_global: contrastiva
funcion_de_apertura: "abrir con una distinción fuerte entre ingreso visible y captura distribuida"
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

La instancia conserva el mismo patrón narrativo general de la base: primero
separar dos niveles del fenómeno, luego mostrar el error de confundirlos,
después ofrecer una secuencia correcta y cerrar con una síntesis breve de
clarificación.

---

## 4. Configuración léxica (`L`) — estrato modificado

### `configuracion_lexica`

```yaml
registro_predominante: analitico
densidad_terminologica: media
grado_de_abstraccion: intermedio
accesibilidad_lexica: media
variacion_lexica: media
```

### Lectura resumida de `L`

A diferencia de la base, aquí el léxico ya no es predominantemente pedagógico.
Se desplaza hacia un registro analítico, con accesibilidad y abstracción medias.

---

## 5. Configuración de voz o comparecencia (`V`) — estrato modificado

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: media
autoridad: alta
calidez: baja
intensidad: media
sobriedad: alta
```

### Lectura resumida de `V`

La nueva instancia comparece con una voz más sobria, más autoritativa y menos
cálida que la de la base, aunque sin llegar a una distancia máxima.

---

## 6. Configuración de ritmo y legibilidad (`R`) — estrato modificado

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: alta
continuidad: alta
friccion_interpretativa: media
compresion: media
recapitulacion: media
```

### Lectura resumida de `R`

El recorrido sigue siendo altamente explícito, pero ahora gana continuidad y una
mayor regularidad analítica respecto de la base.

---

## 7. Configuración discursiva (`D`) — estrato preservado

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: captativa
region_secundaria: explicativa
```

### Lectura resumida de `D`

Se conserva exactamente la misma región discursiva:
predominio captativo con función explicativa secundaria.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-003-ISO-E1
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
> atención sobre una distinción básica del análisis comercial: monetización
> directa y captura económica distribuida no son lo mismo. La formulación
> conserva una organización contrastiva y una región discursiva captativa con
> apoyo explicativo, pero cambia el tema y modifica parcialmente el perfil
> léxico, la voz y el ritmo de lectura.

---

## 10. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo por estrato** porque no preserva toda la
arquitectura de la instancia base, sino solo algunos estratos determinados.

Se preservan:

- el estrato narrativo;
- y el estrato discursivo.

Se modifican:

- el estrato conceptual;
- el estrato léxico;
- la voz;
- y el ritmo/legibilidad.

Por eso, la correspondencia no es arquitectónica fuerte, sino localizada en
ciertos estratos del modelo.

---

## 11. Fórmula condensada

La instancia `AMT-IC-003-ISO-E1` conserva de la base la misma lógica narrativa y
la misma región discursiva, pero cambia el tema y parte del modo de
comparecencia, mostrando así un isomorfismo por estrato en la Arquitectura
Multidimensional del Texto.
