# Isomorfismo parcial
## Ejemplo de instancia contextual
## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo parcial** respecto de la instancia
`AMT-IC-002`.

En este caso no se conserva la arquitectura completa de la instancia base ni un
estrato completo en sentido fuerte.

Lo que se preserva es solo una **porción delimitada de la organización
conceptual**:

- la cantidad de ideas activas;
- la distribución de roles conceptuales;
- la distribución de pesos;
- y la lógica interna entre:
  - una tesis central,
  - una condición estructural,
  - una idea relacional complementaria,
  - una consecuencia operativa,
  - y una idea puente sintetizadora.

Se modifican:

- el tema;
- la narrativa global;
- el perfil léxico;
- la voz;
- el ritmo;
- y la región discursiva predominante.

Esto significa que la correspondencia no es arquitectónica fuerte ni por estrato,
sino localizada en una fracción de la forma estructural de la instancia base.

---

## 1. Identidad general de la instancia

- `texto_id`: `AMT-IC-002-ISO-P1`
- `clase_de_unidad_textual`: `argumento_analitico`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a sostener que la promesa de autonomía ofrecida por
  ciertas plataformas digitales suele reorganizarse como una nueva dependencia
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
      contenido: "La autonomía prometida por ciertas plataformas suele reorganizarse como una nueva dependencia estructural."
    rol_conceptual: nuclear
    peso_relativo: 0.32
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: condicion
        descripcion_de_la_relacion: "La dependencia reestructurada exige que la plataforma capture mediaciones antes distribuidas."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparabilidad entre dependencias técnicas se sostiene mejor cuando se reconoce su misma lógica de captura."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "La captura técnica de mediaciones sociales es la condición de posibilidad de esa autonomía reorganizada."
    rol_conceptual: nuclear
    peso_relativo: 0.28
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La promesa de autonomía solo puede volverse dependencia si la plataforma concentra mediaciones."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "Las consecuencias operativas desarrollan los efectos de esa captura."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_relacional
      contenido: "La comparación entre distintas plataformas permite reconocer una misma matriz de dependencia reconfigurada."
    rol_conceptual: complementaria
    peso_relativo: 0.18
    modo_de_presencia: explicita
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparación entre plataformas refuerza la tesis de la dependencia reestructurada."
      - idea_relacionada: I4
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La lectura comparativa amplía la inteligibilidad de las consecuencias."

  - idea_id: I4
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "Comprender esta reorganización permite diagnosticar con más precisión los puntos reales de captura y subordinación."
    rol_conceptual: complementaria
    peso_relativo: 0.14
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La capacidad diagnóstica se sigue del reconocimiento de la captura de mediaciones."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La comparación entre plataformas refuerza la lectura operativa de la captura."

  - idea_id: I5
    formulacion_de_la_idea:
      tipo: proposicion_sintetizadora
      contenido: "La autonomía de plataforma desplaza dependencia desde formas visibles de mediación hacia una infraestructura técnica que sigue organizando la relación."
    rol_conceptual: puente
    peso_relativo: 0.08
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea sintetiza la redefinición estructural de la autonomía."
      - idea_relacionada: I2
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La idea sintetiza el papel de la captura técnica como condición de posibilidad."
```

### Lectura resumida de `C`

La instancia conserva parcialmente la forma interna de la base:

1. una tesis nuclear principal;
2. una segunda idea nuclear que funciona como condición;
3. una idea relacional complementaria;
4. una consecuencia operativa;
5. y una idea puente que sintetiza el conjunto.

La suma de los pesos sigue siendo `1.00`.

---

## 3. Configuración narrativa (`N`) — modificada

### `configuracion_narrativa`

```yaml
estructura_global: contrastiva
funcion_de_apertura: "plantear la paradoja entre autonomía prometida y dependencia efectiva"
modo_de_progresion: modular
distribucion_de_bloques:
  - bloque_1: "promesa de autonomía"
  - bloque_2: "captura de mediaciones"
  - bloque_3: "reorganización de dependencia"
  - bloque_4: "consecuencia diagnóstica"
transiciones: contrastivas
modo_de_cierre: analitico_sintetizador
grado_de_recapitulacion: baja
```

### Lectura resumida de `N`

La narrativa ya no es recapitulativa-acumulativa como en la base. Aquí se
organiza por contraste y módulos, con menor recapitulación y cierre más analítico.

---

## 4. Configuración léxica (`L`) — modificada

### `configuracion_lexica`

```yaml
registro_predominante: analitico
densidad_terminologica: alta
grado_de_abstraccion: abstracto
accesibilidad_lexica: baja
variacion_lexica: media
```

### Lectura resumida de `L`

El léxico es menos técnico-administrado que en la base, pero sigue siendo de alta
densidad y ahora con menor accesibilidad.

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

La voz es más distante, más fría y más contenida que la de la instancia base.

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

La nueva instancia es más comprimida y exige mayor trabajo interpretativo, con
continuidad y recapitulación menores que en la base.

---

## 7. Configuración discursiva (`D`) — modificada

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: argumentativa
region_secundaria: sintetizadora
```

### Lectura resumida de `D`

La región discursiva predominante deja de ser sintetizadora-operativa y pasa a
ser argumentativa con cierre sintetizador.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-002-ISO-P1
  clase_de_unidad_textual: argumento_analitico
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

> Se trata de un argumento analítico estable sobre la falsa autonomía ofrecida
> por plataformas digitales. La instancia conserva parcialmente la forma interna
> de organización conceptual de la base —tesis principal, condición estructural,
> relación complementaria, consecuencia operativa y síntesis puente—, pero cambia
> la narrativa, el léxico, la voz, el ritmo y la región discursiva.

---

## 10. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo parcial** porque solo preserva una porción
del diseño estructural de la instancia base.

No se preserva:

- la arquitectura global completa;
- ni un estrato entero de manera fuerte;
- ni la misma narrativa;
- ni la misma región discursiva;
- ni el mismo modo general de comparecencia.

Se preserva solo una región delimitada del plano conceptual:

- misma cantidad de ideas activas;
- misma distribución de roles;
- misma distribución de pesos;
- y misma lógica interna entre tesis, condición, relación complementaria,
  consecuencia y síntesis puente.

---

## 11. Fórmula condensada

La instancia `AMT-IC-002-ISO-P1` conserva solo una parte delimitada de la forma
estructural de la base —la organización interna de la composición conceptual— y
modifica el resto de la arquitectura, mostrando así un isomorfismo parcial.
