# Isomorfismo por estrato
## Ejemplo de instancia contextual
## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo por estrato** respecto de la instancia
`AMT-IC-002`.

En este caso no se conserva toda la arquitectura interna de la instancia base.

Se preservan de forma fuerte estos estratos:

- `configuracion_narrativa` (`N`)
- `configuracion_discursiva` (`D`)

Se modifican de forma controlada estos estratos:

- `configuracion_conceptual` (`C`)
- `configuracion_lexica` (`L`)
- `configuracion_de_voz_o_comparecencia` (`V`)
- `configuracion_de_ritmo_y_legibilidad` (`R`)

Esto significa que la nueva instancia conserva la misma lógica de recorrido
recapitulativo y la misma región discursiva sintetizadora-operativa, pero cambia
el tema, la densidad conceptual y el modo de comparecencia.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-002-ISO-E1`
- `clase_de_unidad_textual`: `sintesis_operativa`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a condensar la tesis de que una federación de
  microentidades puede distribuir funciones sin perder unidad estructural.

---

## 2. Configuración conceptual (`C`) — estrato modificado

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "Una federación de microentidades puede funcionar como una sola entidad si comparte un mismo núcleo estructural."
    rol_conceptual: nuclear
    peso_relativo: 0.32
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La unidad federada depende de que exista un mismo contrato estructural distribuido."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparabilidad entre piezas se sostiene mejor cuando comparten una misma base."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "La distribución de funciones entre microentidades no destruye la unidad si preserva la lógica del conjunto."
    rol_conceptual: nuclear
    peso_relativo: 0.28
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La preservación del núcleo permite que la multiplicidad no destruya la entidad."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "Las ventajas operativas desarrollan las consecuencias prácticas de esta distribución."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_relacional
      contenido: "La comparabilidad entre piezas y trayectorias aumenta cuando todas pertenecen a la misma arquitectura federada."
    rol_conceptual: complementaria
    peso_relativo: 0.18
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La unidad estructural sostiene la comparabilidad entre microentidades."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La comparación entre piezas permite leer mejor las ventajas de la federación."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La federación bien construida mejora escalabilidad, especialización y continuidad operativa."
    rol_conceptual: complementaria
    peso_relativo: 0.14
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "Las mejoras operativas se siguen del reparto estructuralmente controlado de funciones."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparabilidad entre piezas refuerza la inteligibilidad de estas mejoras."

  - idea_id: I5
    formulacion_de_la_idea:
      tipo: proposicion_sintetizadora
      contenido: "La federación desplaza complejidad desde la pieza única hacia una arquitectura distribuida que sigue siendo una sola entidad."
    rol_conceptual: puente
    peso_relativo: 0.08
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea sintetiza la unidad estructural de la federación."
      - idea_relacionada: I2
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea sintetiza la redistribución funcional sin pérdida de conjunto."
```

### Lectura resumida de `C`

La nueva instancia se organiza alrededor de dos ideas nucleares:

1. una federación de microentidades puede funcionar como una sola entidad;
2. esa unidad se conserva si la distribución funcional preserva la lógica del conjunto.

A partir de ellas se añaden tres ideas complementarias o puente:

- la comparabilidad entre piezas,
- las ventajas operativas de la federación,
- y una síntesis sobre el desplazamiento de complejidad hacia una arquitectura
  distribuida.

La suma de los pesos es `1.00`.

---

## 3. Configuración narrativa (`N`) — estrato preservado

### `configuracion_narrativa`

```yaml
estructura_global: recapitulativa
funcion_de_apertura: "condensar el problema de la unidad en una entidad distribuida"
modo_de_progresion: acumulativa
distribucion_de_bloques:
  - bloque_1: "tesis sobre la federación"
  - bloque_2: "consecuencia sobre la unidad estructural"
  - bloque_3: "mejoras operativas"
  - bloque_4: "síntesis final"
transiciones: contrastivas_y_recapitulativas
modo_de_cierre: operativo_sintetizador
grado_de_recapitulacion: alta
```

### Lectura resumida de `N`

La instancia conserva el mismo patrón narrativo general de la base:
tesis inicial, consecuencia estructural, mejoras operativas y síntesis final,
con acumulación controlada y fuerte recapitulación.

---

## 4. Configuración léxica (`L`) — estrato modificado

### `configuracion_lexica`

```yaml
registro_predominante: analitico
densidad_terminologica: media
grado_de_abstraccion: abstracto
accesibilidad_lexica: media
variacion_lexica: media
```

### Lectura resumida de `L`

A diferencia de la base, aquí el léxico es algo menos técnico, con densidad
terminológica media y mayor variación verbal.

---

## 5. Configuración de voz o comparecencia (`V`) — estrato modificado

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: media
autoridad: alta
calidez: media
intensidad: media
sobriedad: alta
```

### Lectura resumida de `V`

La nueva instancia comparece con una voz algo menos distante y algo más cálida
que la de la base, aunque mantiene autoridad y sobriedad altas.

---

## 6. Configuración de ritmo y legibilidad (`R`) — estrato modificado

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: alta
continuidad: alta
friccion_interpretativa: media
compresion: media
recapitulacion: alta
```

### Lectura resumida de `R`

El recorrido sigue siendo continuo y recapitulativo, pero ahora es más explícito
y menos comprimido que el ejemplo base.

---

## 7. Configuración discursiva (`D`) — estrato preservado

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: sintetizadora
region_secundaria: operativa
```

### Lectura resumida de `D`

Se conserva exactamente la misma región discursiva:
predominio sintetizador con orientación operativa secundaria.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-002-ISO-E1
  clase_de_unidad_textual: sintesis_operativa
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

> Se trata de una síntesis operativa estable, centrada en la tesis de que una
> federación de microentidades puede conservar unidad estructural si comparte un
> mismo núcleo y una misma lógica de distribución funcional. El recorrido
> conserva la misma lógica recapitulativa de la base y la misma región discursiva
> sintetizadora-operativa, pero cambia el tema y modifica parcialmente el léxico,
> la voz y el ritmo de lectura.

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

La instancia `AMT-IC-002-ISO-E1` conserva de la base la misma lógica narrativa y
la misma región discursiva, pero cambia el tema y parte del modo de
comparecencia, mostrando así un isomorfismo por estrato en la Arquitectura
Multidimensional del Texto.
