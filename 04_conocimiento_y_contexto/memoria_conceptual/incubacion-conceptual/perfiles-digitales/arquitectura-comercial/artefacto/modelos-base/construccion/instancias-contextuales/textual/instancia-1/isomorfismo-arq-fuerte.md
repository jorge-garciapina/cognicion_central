# Isomorfismo arquitectónico fuerte

## Ejemplo de instancia contextual

## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo arquitectónico fuerte** respecto de la
instancia `AMT-IC-001`.

La preservación estructural se mantiene en:

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

En la instancia original, el núcleo temático giraba en torno a:

- adaptador,
- modelo base completo,
- no compensación intuitiva,
- y ventajas operativas.

En esta nueva instancia, el núcleo temático gira en torno a:

- evidencia,
- trayectoria,
- corrección del modelo,
- y ventajas operativas del diagnóstico transversal.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-001-ISO-001`
- `clase_de_unidad_textual`: `explicacion_conceptual`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a explicar por qué la evidencia debe operar sobre
  una trayectoria ya suficientemente registrada y por qué el diagnóstico no debe
  improvisar lo que la trayectoria no mostró.

---

## 2. Configuración conceptual (`C`)

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La evidencia opera sobre una trayectoria ya registrada y no sobre material histórico amorfo."
    rol_conceptual: nuclear
    peso_relativo: 0.35
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La idea de trayectoria ya registrada exige que exista previamente una memoria longitudinal suficientemente determinada."
      - idea_relacionada: I3
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "Si la evidencia opera sobre una trayectoria ya registrada, entonces el diagnóstico no debe compensar vacíos históricos no mostrados."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La memoria longitudinal completa desplaza la complejidad histórica al momento de construcción de la trayectoria."
    rol_conceptual: nuclear
    peso_relativo: 0.30
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La operación correcta de la evidencia depende de que la trayectoria haya sido construida sobre una memoria longitudinal suficientemente completa."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La completitud de la memoria longitudinal sostiene la tesis de que el diagnóstico no debe rellenar vacíos."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Un diagnóstico bien construido no debe adivinar lo que la trayectoria no especificó."
    rol_conceptual: nuclear
    peso_relativo: 0.20
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La prohibición de adivinar se sigue del hecho de que la evidencia opera sobre una trayectoria ya registrada."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea de corrección transversal expande las consecuencias prácticas de no adivinar."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La claridad del diagnóstico mejora auditabilidad, reorientación y corrección de trayectoria."
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

1. la evidencia opera sobre una trayectoria ya registrada;
2. eso exige una memoria longitudinal suficientemente completa;
3. por tanto el diagnóstico no debe adivinar;
4. y de ahí se siguen ventajas operativas de corrección.

La suma de los pesos es `1.00`.

---

## 3. Configuración narrativa (`N`)

### `configuracion_narrativa`

```yaml
estructura_global: apertura_profundizacion_cierre
funcion_de_apertura: "plantear la diferencia entre diagnosticar una trayectoria y compensar una memoria incompleta"
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

El texto abre con un problema, fija una tesis, la desarrolla de manera lineal y
cierra con una síntesis de consecuencias.

---

## 4. Configuración léxica (`L`)

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

## 5. Configuración de voz o comparecencia (`V`)

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

## 6. Configuración de ritmo y legibilidad (`R`)

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

## 7. Configuración discursiva (`D`)

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

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-001-ISO-001
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

Esta instancia textual puede leerse así:

> Se trata de una explicación conceptual estable, centrada en la tesis de que la
> evidencia debe operar sobre una trayectoria ya registrada por una memoria
> longitudinal suficientemente completa. El texto organiza esa tesis en un
> recorrido lineal con cierre sintético, usando una voz sobria y autoritativa,
> léxico analítico de densidad media, alta explicitud y formulación
> predominantemente explicativa.

---

## 10. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo arquitectónico fuerte** porque conserva la
misma arquitectura de la instancia base y cambia únicamente el tema.

Se preserva:

- la misma clase de unidad textual;
- la misma configuración global;
- la misma estructura conceptual de cuatro ideas;
- la misma distribución de pesos;
- la misma organización narrativa;
- el mismo perfil léxico;
- la misma voz;
- el mismo ritmo;
- y la misma región discursiva.

Lo que cambia es el contenido temático:

- de adaptador / modelo base / no compensación / ventajas operativas
- a evidencia / memoria longitudinal / diagnóstico no intuitivo / corrección de trayectoria

---

## 11. Fórmula condensada

La instancia `AMT-IC-001-ISO-001` conserva la forma arquitectónica de la
instancia original, pero sustituye su núcleo temático por una explicación sobre
evidencia, trayectoria y diagnóstico, mostrando así un isomorfismo
arquitectónico fuerte con cambio de tema.
