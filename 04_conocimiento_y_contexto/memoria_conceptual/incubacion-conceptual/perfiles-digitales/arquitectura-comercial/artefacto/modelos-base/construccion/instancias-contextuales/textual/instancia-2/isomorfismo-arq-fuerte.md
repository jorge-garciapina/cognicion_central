# Isomorfismo arquitectónico fuerte
## Ejemplo de instancia contextual
## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo arquitectónico fuerte** respecto de la
instancia `AMT-IC-002`.

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
- modelo base completo;
- adaptador;
- no compensación intuitiva;
- comparabilidad;
- y mejoras operativas.

En esta nueva instancia, el núcleo temático gira en torno a:
- evidencia;
- memoria longitudinal;
- diagnóstico transversal;
- comparabilidad entre trayectorias;
- y mejoras operativas del seguimiento.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-002-ISO-001`
- `clase_de_unidad_textual`: `sintesis_operativa`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a condensar un planteamiento sobre por qué la
  memoria longitudinal completa permite que la evidencia deje de depender de
  intuiciones parciales y pase a operar con mayor claridad diagnóstica.

---

## 2. Configuración conceptual (`C`)

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La memoria longitudinal completa determina con suficiente claridad la trayectoria sobre la que operará la evidencia."
    rol_conceptual: nuclear
    peso_relativo: 0.32
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La reducción de opacidad del diagnóstico depende de que la trayectoria llegue suficientemente registrada."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparación entre trayectorias se sostiene mejor cuando todas operan sobre el mismo régimen de registro."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Cuando la trayectoria llega bien formada, la evidencia no necesita completar por intuición lo que el registro no fijó."
    rol_conceptual: nuclear
    peso_relativo: 0.28
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad de la trayectoria hace posible que la evidencia opere sin compensación histórica."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "Las mejoras operativas desarrollan las consecuencias prácticas de esta no-compensación."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_relacional
      contenido: "La estandarización del registro vuelve comparables distintos diagnósticos y distintas trayectorias."
    rol_conceptual: complementaria
    peso_relativo: 0.18
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La determinación de la memoria longitudinal sostiene la comparabilidad entre trayectorias."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La comparación entre diagnósticos permite leer mejor las ganancias de auditabilidad."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La operación sobre trayectorias bien formadas mejora seguimiento, auditabilidad y capacidad de corrección."
    rol_conceptual: complementaria
    peso_relativo: 0.14
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "Las mejoras operativas se siguen del hecho de que el diagnóstico deja de adivinar."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparabilidad entre trayectorias refuerza la inteligibilidad de estas mejoras."

  - idea_id: I5
    formulacion_de_la_idea:
      tipo: proposicion_sintetizadora
      contenido: "La memoria longitudinal completa desplaza la complejidad hacia la construcción de la trayectoria y libera a la evidencia para corregir."
    rol_conceptual: puente
    peso_relativo: 0.08
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea sintetiza el papel estructural de la memoria longitudinal."
      - idea_relacionada: I2
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea sintetiza el nuevo estatuto operativo de la evidencia."
```

### Lectura resumida de `C`

La instancia se organiza alrededor de dos ideas nucleares:

1. la memoria longitudinal completa determina la trayectoria con claridad
   suficiente;
2. por eso la evidencia deja de compensar vacíos por intuición.

A partir de ellas se añaden tres ideas complementarias o puente:

- la comparabilidad entre trayectorias,
- las mejoras operativas del seguimiento,
- y una síntesis que articula el desplazamiento de complejidad desde la evidencia
  hacia la construcción de la trayectoria.

La suma de los pesos es `1.00`.

---

## 3. Configuración narrativa (`N`)

### `configuracion_narrativa`

```yaml
estructura_global: recapitulativa
funcion_de_apertura: "condensar el problema de la opacidad del diagnóstico"
modo_de_progresion: acumulativa
distribucion_de_bloques:
  - bloque_1: "tesis sobre la memoria longitudinal completa"
  - bloque_2: "consecuencia sobre la evidencia"
  - bloque_3: "mejoras operativas"
  - bloque_4: "síntesis final"
transiciones: contrastivas_y_recapitulativas
modo_de_cierre: operativo_sintetizador
grado_de_recapitulacion: alta
```

### Lectura resumida de `N`

El recorrido no busca expansión larga, sino acumulación controlada con retornos
parciales. El cierre reorganiza la secuencia en una fórmula sintética y operativa.

---

## 4. Configuración léxica (`L`)

### `configuracion_lexica`

```yaml
registro_predominante: tecnico
densidad_terminologica: alta
grado_de_abstraccion: abstracto
accesibilidad_lexica: media
variacion_lexica: baja
```

### Lectura resumida de `L`

La instancia usa un léxico técnico y relativamente estable, con alta densidad
terminológica y fuerte abstracción, pero todavía con un grado medio de acceso
para lectores ya introducidos en la discusión.

---

## 5. Configuración de voz o comparecencia (`V`)

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: baja
autoridad: alta
calidez: baja
intensidad: media
sobriedad: alta
```

### Lectura resumida de `V`

La voz comparece de forma analítica, sobria y autoritativa. No busca cercanía
afectiva, sino precisión y control conceptual.

---

## 6. Configuración de ritmo y legibilidad (`R`)

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: media
continuidad: alta
friccion_interpretativa: alta
compresion: alta
recapitulacion: alta
```

### Lectura resumida de `R`

La instancia es comprimida y conceptualmente exigente, pero compensa parte de esa
densidad con alta continuidad y recapitulación frecuente.

---

## 7. Configuración discursiva (`D`)

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: sintetizadora
region_secundaria: operativa
```

### Lectura resumida de `D`

La formulación principal condensa una arquitectura conceptual ya discutida.
Secundariamente, esa condensación se orienta a consecuencias operativas.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-002-ISO-001
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

> Se trata de una síntesis operativa estable, centrada en la idea de que la
> memoria longitudinal completa determina la trayectoria con suficiente claridad y,
> por ello, libera a la evidencia de la compensación intuitiva. La formulación es
> técnica, abstracta, sobria y de alta densidad, organizada en un recorrido
> acumulativo con recapitulación fuerte y cierre sintético-operativo.

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

- de modelo base / adaptador / no compensación / comparabilidad / implementabilidad
- a memoria longitudinal / evidencia / diagnóstico no intuitivo / comparabilidad / seguimiento

---

## 11. Fórmula condensada

La instancia `AMT-IC-002-ISO-001` conserva la forma arquitectónica de la
instancia original, pero sustituye su núcleo temático por una síntesis sobre
memoria longitudinal, evidencia y diagnóstico, mostrando así un isomorfismo
arquitectónico fuerte.
