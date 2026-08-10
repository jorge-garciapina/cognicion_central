# Isomorfismo parcial

## Ejemplo de instancia contextual

## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo parcial** respecto de la instancia
`AMT-IC-001`.

En este caso no se preserva ni toda la arquitectura global ni un estrato completo
en sentido fuerte. Lo que se conserva es solo una **parte delimitada de la forma
estructural** de la instancia base.

Se preserva parcialmente:

- la lógica de composición conceptual de cuatro ideas activas;
- la distribución de roles conceptuales;
- la distribución de pesos;
- y la relación entre una tesis central, su condición, una consecuencia y una
  expansión operativa.

Se modifican:

- el tema;
- la narrativa global;
- el perfil léxico;
- la voz;
- el ritmo;
- y la región discursiva predominante.

Esto significa que la correspondencia ya no es arquitectónica fuerte ni
propiamente por estrato, sino localizada en una porción estructural del plano
conceptual.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-001-ISO-P1`
- `clase_de_unidad_textual`: `sintesis_analitica`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a condensar la tesis de que la autonomía prometida
  por ciertas plataformas digitales suele implicar una nueva forma de dependencia
  estructural.

---

## 2. Configuración conceptual (`C`) — región parcialmente preservada

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "Las plataformas que prometen autonomía individual suelen reorganizar esa autonomía como nueva dependencia estructural."
    rol_conceptual: nuclear
    peso_relativo: 0.35
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La transformación de autonomía en dependencia exige un entorno técnico que capture mediaciones antes distribuidas."
      - idea_relacionada: I3
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "Si la autonomía queda reestructurada por plataforma, entonces la libertad prometida ya no puede leerse de manera simple."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La captura de mediaciones sociales por plataformas desplaza al entorno técnico funciones que antes eran difusas o colectivas."
    rol_conceptual: nuclear
    peso_relativo: 0.30
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La reorganización de la autonomía depende de la captura técnica de mediaciones."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La captura de mediaciones sostiene la crítica a la lectura ingenua de la libertad prometida."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "La independencia percibida en el uso de plataformas no elimina la dependencia; la redistribuye."
    rol_conceptual: nuclear
    peso_relativo: 0.20
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La crítica a la independencia simple se sigue de la reorganización estructural producida por plataforma."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "Las consecuencias económicas y subjetivas desarrollan esta redistribución de dependencia."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "Comprender esta redistribución permite diagnosticar mejor los puntos reales de captura y subordinación."
    rol_conceptual: complementaria
    peso_relativo: 0.15
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I3
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "El diagnóstico de captura expande la crítica a la dependencia redistribuida."
```

### Lectura resumida de `C`

La instancia conserva la misma forma parcial de organización conceptual que la
base:

1. una idea nuclear principal;
2. una segunda idea nuclear que actúa como condición;
3. una tercera idea nuclear que funciona como consecuencia o reformulación
   crítica;
4. y una idea complementaria que expande el rendimiento operativo del conjunto.

La suma de los pesos sigue siendo `1.00`.

---

## 3. Configuración narrativa (`N`) — modificada

### `configuracion_narrativa`

```yaml
estructura_global: modular
funcion_de_apertura: "presentar una aparente paradoja entre autonomía y dependencia"
modo_de_progresion: contrastiva
distribucion_de_bloques:
  - bloque_1: "promesa de autonomía"
  - bloque_2: "captura de mediaciones"
  - bloque_3: "redistribución de dependencia"
  - bloque_4: "consecuencia diagnóstica"
transiciones: contrastivas
modo_de_cierre: analitico
grado_de_recapitulacion: baja
```

### Lectura resumida de `N`

A diferencia de la base, aquí la narrativa no sigue el mismo patrón lineal de
problema, tesis, desarrollo y consecuencias. Se organiza en módulos contrastivos
con recapitulación menor.

---

## 4. Configuración léxica (`L`) — modificada

### `configuracion_lexica`

```yaml
registro_predominante: analitico
densidad_terminologica: alta
grado_de_abstraccion: abstracto
accesibilidad_lexica: baja
variacion_lexica: baja
```

### Lectura resumida de `L`

El léxico aquí es más denso y menos accesible que en la instancia base.

---

## 5. Configuración de voz o comparecencia (`V`) — modificada

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: baja
autoridad: alta
calidez: baja
intensidad: baja
sobriedad: alta
```

### Lectura resumida de `V`

La voz es más distante, fría y contenida que en la instancia original.

---

## 6. Configuración de ritmo y legibilidad (`R`) — modificada

### `configuracion_de_ritmo_y_legibilidad`

```yaml
explicitud: media
continuidad: media
friccion_interpretativa: alta
compresion: alta
recapitulacion: baja
```

### Lectura resumida de `R`

El recorrido es más comprimido, menos explícito y con mayor fricción
interpretativa que el de la base.

---

## 7. Configuración discursiva (`D`) — modificada

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: argumentativa
region_secundaria: sintetizadora
```

### Lectura resumida de `D`

Aquí ya no predomina lo explicativo con apoyo argumentativo. Predomina una
región argumentativa con cierre sintetizador.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-001-ISO-P1
  clase_de_unidad_textual: sintesis_analitica
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

> Se trata de una síntesis analítica estable sobre la falsa autonomía prometida
> por plataformas digitales. La instancia conserva una forma parcial de la
> organización conceptual de la base —tesis principal, condición, consecuencia y
> expansión operativa—, pero modifica la narrativa, el léxico, la voz, el ritmo y
> la región discursiva.

---

## 10. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo parcial** porque solo preserva una región
del diseño estructural de la instancia base: una parte bien delimitada de la
composición conceptual.

No se preserva:

- la arquitectura global completa;
- ni un estrato entero de forma fuerte;
- ni la misma organización narrativa;
- ni la misma región discursiva;
- ni la misma comparecencia verbal.

Se preserva solo una forma parcial de composición conceptual:

- misma cantidad de ideas activas;
- misma distribución de roles;
- misma distribución de pesos;
- y misma lógica interna entre tesis, condición, consecuencia y expansión.

---

## 11. Fórmula condensada

La instancia `AMT-IC-001-ISO-P1` conserva solo una parte delimitada de la forma
estructural de la base —la organización conceptual interna de cuatro ideas con
roles y pesos análogos— y modifica el resto de la arquitectura, mostrando así un
isomorfismo parcial.
