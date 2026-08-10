# Isomorfismo parcial
## Ejemplo de instancia contextual
## Arquitectura Multidimensional del Texto

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo parcial** respecto de la instancia
`AMT-IC-003`.

En este caso no se conserva la arquitectura completa de la instancia base ni un
estrato entero en sentido fuerte.

Lo que se preserva es solo una **porción delimitada de la organización
conceptual**:

- la cantidad de ideas activas;
- la distribución de roles conceptuales;
- la distribución de pesos;
- y la lógica interna entre:
  - una relación nuclear principal,
  - una idea nuclear crítica,
  - una idea puente operativa,
  - una idea complementaria de clarificación,
  - y una definición localizada de cierre.

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

- `texto_id`: `AMT-IC-003-ISO-P1`
- `clase_de_unidad_textual`: `argumento_critico_breve`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  instancia textual orientada a sostener que la publicidad no debe leerse solo
  como persuasión visible, sino como acoplamiento a compensaciones estructurales
  del sujeto de rendimiento.

---

## 2. Configuración conceptual (`C`) — región parcialmente preservada

### `configuracion_conceptual`

```yaml
tipo: coleccion_de_ideas_activas
ideas_activas:
  - idea_id: I1
    formulacion_de_la_idea:
      tipo: proposicion_relacional
      contenido: "Publicidad, compensación estructural, sujeto de rendimiento y monetización pertenecen a un mismo sistema de relaciones y no deben pensarse como piezas aisladas."
    rol_conceptual: nuclear
    peso_relativo: 0.34
    modo_de_presencia: explicita_reiterada
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La necesidad de no reducir la publicidad a persuasión visible sostiene la relación entre las cuatro piezas."
      - idea_relacionada: I3
        tipo_de_relacion: expansion
        descripcion_de_la_relacion: "La secuencia entre unilateralidad, compensación y monetización despliega esta relación en forma operativa."

  - idea_id: I2
    formulacion_de_la_idea:
      tipo: proposicion_argumentativa
      contenido: "Cuando la publicidad se interpreta solo como mensaje visible, se pierde la dimensión estructural por la que captura retornos de lo no integrado."
    rol_conceptual: nuclear
    peso_relativo: 0.26
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La crítica a la lectura superficial de la publicidad refuerza la relación entre compensación y monetización."
      - idea_relacionada: I4
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad crítica aparece como consecuencia de separar persuasión visible y captura estructural."

  - idea_id: I3
    formulacion_de_la_idea:
      tipo: proposicion_operativa
      contenido: "La secuencia correcta es: unilateralidad del sujeto, apertura compensatoria, acoplamiento publicitario y monetización del retorno."
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
      contenido: "Entender esta diferencia evita gran parte de la ingenuidad con la que suelen leerse las piezas publicitarias."
    rol_conceptual: complementaria
    peso_relativo: 0.14
    modo_de_presencia: transversal
    relaciones_con_otras_ideas:
      - idea_relacionada: I2
        tipo_de_relacion: consecuencia
        descripcion_de_la_relacion: "La claridad crítica aparece como consecuencia de no reducir la publicidad al mensaje visible."
      - idea_relacionada: I3
        tipo_de_relacion: soporte
        descripcion_de_la_relacion: "La secuencia ordenada del fenómeno refuerza esta claridad."

  - idea_id: I5
    formulacion_de_la_idea:
      tipo: proposicion_definicional
      contenido: "La monetización compensatoria no consiste solo en vender un producto, sino en capturar retornos abiertos por una unilateralidad histórica."
    rol_conceptual: complementaria
    peso_relativo: 0.08
    modo_de_presencia: localizada
    relaciones_con_otras_ideas:
      - idea_relacionada: I1
        tipo_de_relacion: subordinacion
        descripcion_de_la_relacion: "La definición precisa de monetización compensatoria desarrolla una de las diferencias centrales del sistema."
```

### Lectura resumida de `C`

La instancia conserva parcialmente la forma interna de la base:

1. una relación nuclear principal que organiza el sistema;
2. una segunda idea nuclear de crítica a una lectura superficial;
3. una idea puente que convierte la relación en secuencia operativa;
4. una idea complementaria de clarificación;
5. y una definición localizada que cierra una diferencia central.

La suma de los pesos sigue siendo `1.00`.

---

## 3. Configuración narrativa (`N`) — modificada

### `configuracion_narrativa`

```yaml
estructura_global: modular
funcion_de_apertura: "plantear la insuficiencia de una lectura superficial de la publicidad"
modo_de_progresion: contrastiva
distribucion_de_bloques:
  - bloque_1: "lectura visible de la publicidad"
  - bloque_2: "insuficiencia de esa lectura"
  - bloque_3: "secuencia estructural"
  - bloque_4: "consecuencia crítica"
transiciones: contrastivas
modo_de_cierre: argumentativo_sintetizador
grado_de_recapitulacion: baja
```

### Lectura resumida de `N`

La narrativa deja de ser una pieza captativa-explicativa con clarificación
rápida. Aquí se organiza de forma más modular y contrastiva, con menor
recapitulación y un cierre más argumentativo.

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

El léxico es más analítico, más abstracto y menos accesible que en la instancia
base. La pieza exige más familiaridad conceptual.

---

## 5. Configuración de voz o comparecencia (`V`) — modificada

### `configuracion_de_voz_o_comparecencia`

```yaml
cercania: baja
autoridad: alta
calidez: baja
intensidad: media
sobriedad: alta
```

### Lectura resumida de `V`

La voz es más distante, sobria y crítica que la de la base. Conserva autoridad,
pero pierde parte de la cercanía inicial.

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

La nueva instancia es más comprimida, menos explícita y exige mayor trabajo
interpretativo que la base.

---

## 7. Configuración discursiva (`D`) — modificada

### `configuracion_discursiva`

```yaml
region_discursiva_predominante: argumentativa
region_secundaria: sintetizadora
```

### Lectura resumida de `D`

La región discursiva predominante deja de ser captativa con apoyo explicativo y
pasa a ser argumentativa con cierre sintetizador.

---

## 8. Vector global de la instancia

```yaml
T:
  texto_id: AMT-IC-003-ISO-P1
  clase_de_unidad_textual: argumento_critico_breve
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

> Se trata de un argumento crítico breve sobre la publicidad entendida no solo
> como persuasión visible, sino como acoplamiento a compensaciones estructurales
> del sujeto de rendimiento. La instancia conserva parcialmente la forma interna
> de organización conceptual de la base —relación nuclear, crítica, secuencia
> operativa, clarificación y definición localizada—, pero cambia la narrativa,
> el léxico, la voz, el ritmo y la región discursiva.

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
- y misma lógica interna entre relación central, crítica, secuencia, clarificación
  y definición localizada.

---

## 11. Fórmula condensada

La instancia `AMT-IC-003-ISO-P1` conserva solo una parte delimitada de la forma
estructural de la base —la organización interna de la composición conceptual— y
modifica el resto de la arquitectura, mostrando así un isomorfismo parcial.
