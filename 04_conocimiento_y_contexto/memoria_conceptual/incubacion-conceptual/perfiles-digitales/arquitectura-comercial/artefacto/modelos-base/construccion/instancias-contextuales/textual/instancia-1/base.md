https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69debe2a-f4a8-83e8-a24f-124ca9d8eb88

# Ejemplo de instancia contextual

## Arquitectura Multidimensional del Texto

### 0. Identidad general de la instancia

- `texto_id`: `AMT-IC-001`
- `clase_de_unidad_textual`: `explicacion_conceptual`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a explicar por qué un adaptador debe operar sobre
  una instancia ya determinada por un modelo base completo.

---

## 1. Configuración conceptual (`C`)

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "El adaptador opera sobre una instancia contextual ya configurada y no sobre material amorfo."
    rol_conceptual: nuclear
    peso_relativo: 0.35
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La idea de instancia ya configurada exige que exista previamente un modelo base suficientemente determinado."
      - idea_relacionada: I3
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "Si el adaptador opera sobre una instancia ya configurada, entonces no debe compensar vacíos ontológicos."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "El modelo base completo desplaza la complejidad ontológica al momento de construcción de la instancia."
    rol_conceptual: nuclear
    peso_relativo: 0.30
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La operación correcta del adaptador depende de que la instancia haya sido construida sobre un modelo base completo."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La completitud del modelo base sostiene la tesis de que el adaptador no debe rellenar vacíos."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Un adaptador bien construido no debe adivinar lo que la instancia no especificó."
    rol_conceptual: nuclear
    peso_relativo: 0.20
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La prohibición de adivinar se sigue del hecho de que el adaptador opera sobre una instancia ya configurada."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea de auditabilidad expande las consecuencias prácticas de no adivinar."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La claridad del adaptador mejora auditabilidad, reusabilidad e implementabilidad."
    rol_conceptual: complementaria
    peso_relativo: 0.15
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I3
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La mejora operativa desarrolla las consecuencias del principio de no compensación intuitiva."
```

### Lectura resumida de `C`

La instancia habla principalmente de cuatro ideas:

1. el adaptador opera sobre una instancia ya configurada;
2. eso exige un modelo base completo;
3. por tanto el adaptador no debe adivinar;
4. y de ahí se siguen ventajas operativas.

La suma de los pesos es `1.00`.

---

## 2. Configuración narrativa (`N`)

### `configuracion_narrativa`

```yaml
estructura_global: apertura_profundizacion_cierre
funcion_de_apertura: "plantear la diferencia entre adaptar una instancia y compensar un modelo incompleto"
modo_de_progresion: lineal_progresiva
distribucion_de_bloques:
  - bloque_1: "planteamiento del problema"
  - bloque_2: "tesis central"
  - bloque_3: "desarrollo de la dependencia respecto del modelo base"
  - bloque_4: "consecuencias operativas"
  - bloque_5: "cierre sintético"
transiciones: recapitulativas
modo_de_cierre: sintetizador
grado_de_recapitulacion: media
```

### Lectura resumida de `N`

El texto abre con un problema, fija una tesis, la desarrolla de manera lineal y
cierra con una síntesis de consecuencias.

---

## 3. Configuración léxica (`L`)

### `configuracion_lexica`

```yaml
registro_predominante: analitico
densidad_terminologica: media
grado_de_abstraccion: abstracto
accesibilidad_lexica: media
variacion_lexica: media
```

### Lectura resumida de `L`

La instancia usa un léxico analítico, relativamente técnico pero no extremo,
suficientemente abstracto y todavía transitable para un lector no totalmente
especializado.

---

## 4. Configuración de voz o comparecencia (`V`)

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: media
autoridad: alta
calidez: media
intensidad: media
sobriedad: alta
```

### Lectura resumida de `V`

La voz comparece como una voz explicativa con autoridad clara, contenida,
sobria y sin excesiva dramatización.

---

## 5. Configuración de ritmo y legibilidad (`R`)

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: alta
continuidad: alta
friccion_interpretativa: media
compresion: media
recapitulacion: media
```

### Lectura resumida de `R`

La instancia busca ser explícita y continua, sin volverse excesivamente densa ni
demasiado fragmentaria. Exige cierto esfuerzo conceptual, pero mantiene el
recorrido controlado.

---

## 6. Configuración discursiva (`D`)

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: explicativa
region_secundaria: argumentativa
```

### Lectura resumida de `D`

La formulación principal es explicativa: busca hacer comprensible una tesis.
Secundariamente es argumentativa, porque también defiende por qué esa tesis debe
aceptarse.

---

## 7. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-001
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

## 8. Lectura integrada de la instancia

Esta instancia textual puede leerse así:

> Se trata de una explicación conceptual estable, centrada en la tesis de que el
> adaptador debe operar sobre una instancia ya configurada por un modelo base
> completo. El texto organiza esa tesis en un recorrido lineal con cierre
> sintético, usando una voz sobria y autoritativa, léxico analítico de densidad
> media, alta explicitud y formulación predominantemente explicativa.

---

## 9. Qué muestra este ejemplo

Este ejemplo muestra que una instancia contextual de la Arquitectura
Multidimensional del Texto no se reduce a:

- un tema;
- una etiqueta discursiva;
- o una idea general.

Es una configuración compuesta de varias dimensiones que, juntas, hacen posible
su futura adaptación y materialización.
