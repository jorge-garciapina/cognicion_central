# Isomorfismo por estrato

## Ejemplo de instancia contextual

## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo por estrato** respecto de la instancia
`AMT-IC-001`.

En este caso **no** se conserva toda la arquitectura interna de la instancia
original.

Se preservan de forma fuerte estos estratos:

- `configuracion_narrativa` (`N`)
- `configuracion_discursiva` (`D`)

Se modifican de forma controlada estos estratos:

- `configuracion_conceptual` (`C`)
- `configuracion_lexica` (`L`)
- `configuracion_de_voz_o_comparecencia` (`V`)
- `configuracion_de_ritmo_y_legibilidad` (`R`)

Esto significa que la nueva instancia conserva la **misma lógica de recorrido**
y la **misma región discursiva predominante/secundaria**, pero cambia el
contenido temático y parte del modo de comparecencia.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-001-ISO-E1`
- `clase_de_unidad_textual`: `explicacion_conceptual`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a explicar por qué la evidencia solo puede cumplir
  función correctiva cuando opera sobre una trayectoria suficientemente
  registrada.

---

## 2. Configuración conceptual (`C`) — estrato modificado

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La evidencia solo puede corregir una trayectoria si existe una memoria longitudinal suficientemente registrada."
    rol_conceptual: nuclear
    peso_relativo: 0.34
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La corrección por evidencia depende de que la trayectoria haya sido registrada de manera acumulativa."
      - idea_relacionada: I3
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "Si la evidencia opera sobre trayectoria registrada, entonces el diagnóstico no debe suplir vacíos con intuición."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La memoria longitudinal desplaza la complejidad histórica al momento de registrar la trayectoria."
    rol_conceptual: nuclear
    peso_relativo: 0.28
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La evidencia solo se vuelve legible como criterio de corrección cuando existe memoria longitudinal."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La completitud de la memoria sostiene la tesis de que el diagnóstico no debe adivinar."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Un diagnóstico transversal bien construido no debe compensar con intuición lo que la trayectoria no mostró."
    rol_conceptual: nuclear
    peso_relativo: 0.22
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La no-compensación se sigue del hecho de que la evidencia debe trabajar sobre trayectoria mostrada."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "Las mejoras de corrección desarrollan la tesis de no compensación."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La claridad de la evidencia mejora auditabilidad, corrección y reorientación de trayectoria."
    rol_conceptual: complementaria
    peso_relativo: 0.16
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I3
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La mejora operativa desarrolla las consecuencias prácticas de no adivinar."
```

### Lectura resumida de `C`

La nueva instancia gira alrededor de cuatro ideas:

1. la evidencia correctiva requiere trayectoria registrada;
2. eso exige memoria longitudinal;
3. por tanto el diagnóstico no debe compensar vacíos históricos;
4. y de ahí se siguen ventajas de corrección y auditabilidad.

La suma de los pesos es `1.00`.

---

## 3. Configuración narrativa (`N`) — estrato preservado

### `configuracion_narrativa`

```yaml
estructura_global: apertura_profundizacion_cierre
funcion_de_apertura: "plantear la diferencia entre leer una trayectoria y compensar una memoria incompleta"
modo_de_progresion: lineal_progresiva
distribucion_de_bloques:
  - bloque_1: "planteamiento del problema"
  - bloque_2: "tesis central"
  - bloque_3: "desarrollo de la dependencia respecto de la memoria longitudinal"
  - bloque_4: "consecuencias operativas"
  - bloque_5: "cierre sintético"
transiciones: recapitulativas
modo_de_cierre: sintetizador
grado_de_recapitulacion: media
```

### Lectura resumida de `N`

La instancia conserva el mismo patrón narrativo general de la base:
problema, tesis, desarrollo, consecuencias y cierre sintético.

---

## 4. Configuración léxica (`L`) — estrato modificado

### `configuracion_lexica`

```yaml
registro_predominante: tecnico
densidad_terminologica: alta
grado_de_abstraccion: abstracto
accesibilidad_lexica: media
variacion_lexica: baja
```

### Lectura resumida de `L`

A diferencia de la instancia base, aquí el léxico es más técnico y más estable,
con mayor densidad terminológica y menor variación verbal.

---

## 5. Configuración de voz o comparecencia (`V`) — estrato modificado

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: baja
autoridad: alta
calidez: baja
intensidad: media
sobriedad: alta
```

### Lectura resumida de `V`

La nueva instancia comparece con una voz más distante, menos cálida y más
estrictamente analítica que la de la instancia base.

---

## 6. Configuración de ritmo y legibilidad (`R`) — estrato modificado

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: media
continuidad: alta
friccion_interpretativa: alta
compresion: alta
recapitulacion: media
```

### Lectura resumida de `R`

El recorrido sigue siendo continuo, pero ahora es más comprimido y exige mayor
esfuerzo interpretativo que el ejemplo base.

---

## 7. Configuración discursiva (`D`) — estrato preservado

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: explicativa
region_secundaria: argumentativa
```

### Lectura resumida de `D`

Se conserva exactamente la misma región discursiva:
predominio explicativo con soporte argumentativo.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-001-ISO-E1
  clase_de_unidad_textual: explicacion_conceptual
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

> Se trata de una explicación conceptual estable, centrada en la tesis de que la
> evidencia correctiva solo puede operar sobre una trayectoria suficientemente
> registrada por memoria longitudinal. El recorrido conserva la misma lógica de
> apertura, tesis, desarrollo, consecuencias y cierre sintético, y mantiene una
> formulación predominantemente explicativa con soporte argumentativo. Sin
> embargo, cambia el tema y también cambia el perfil léxico, la voz y la
> exigencia de lectura.

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

La instancia `AMT-IC-001-ISO-E1` conserva de la base la misma lógica narrativa y
la misma región discursiva, pero cambia el tema y parte del modo de
comparecencia, mostrando así un isomorfismo por estrato en la Arquitectura
Multidimensional del Texto.
