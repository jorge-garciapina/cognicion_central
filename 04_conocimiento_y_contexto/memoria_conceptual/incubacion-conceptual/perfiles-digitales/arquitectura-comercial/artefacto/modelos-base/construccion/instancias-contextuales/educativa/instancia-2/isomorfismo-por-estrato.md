# Isomorfismo por estrato
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo por estrato** respecto de la instancia
`ETA-IC-002`.

En este caso no se conserva toda la arquitectura interna del caso base.

Se preservan de forma fuerte estos estratos del caso pedagógico:

- `grado_de_guia_requerida`
- `ritmo_de_progresion_compatible`
- `tolerancia_a_la_abstraccion`

Se modifican de forma controlada estos estratos:

- `familiaridad_con_el_tema`
- `tipo_de_dificultad_dominante`
- `modo_de_entrada_mas_efectivo`
- `modo_de_verificacion_mas_fiable`

Esto significa que la nueva instancia conserva el mismo régimen general de
acompañamiento, progresión y abstracción, pero cambia la situación inicial del
estudiante y la lógica dominante de acceso y verificación del aprendizaje.

---

## 1. Identidad general de la instancia

- `instancia_id`: `ETB-IC-002-ISO-E1`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante con familiaridad introductoria del Tema B, dificultad dominante
  procedimental, entrada más efectiva por ejemplo resuelto y necesidad de guía alta.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-002-ISO-E1
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: introductoria
    descripcion: "Reconoce partes del Tema B y parte de su vocabulario básico, pero aún no puede operar con plena estabilidad en tareas más complejas."

  tipo_de_dificultad_dominante:
    valor: procedimental
    descripcion: "El principal obstáculo no está en comprender qué significa el Tema B, sino en ejecutar correctamente los pasos u operaciones que exige."

  modo_de_entrada_mas_efectivo:
    valor: ejemplo_resuelto
    descripcion: "La comprensión inicial mejora cuando ve el proceso del Tema B ya realizado y puede reconstruir después su secuencia operativa."

  grado_de_guia_requerida:
    valor: alta
    descripcion: "El estudiante necesita acompañamiento fuerte, instrucciones explícitas y sostén continuo durante el primer recorrido."

  ritmo_de_progresion_compatible:
    valor: micro_pasos
    descripcion: "Tolera mejor una progresión muy segmentada, con avances pequeños y alta explicitación de cada paso."

  modo_de_verificacion_mas_fiable:
    valor: resolucion_guiada
    descripcion: "La comprensión se vuelve más legible cuando el estudiante resuelve con apoyo estructurado y andamiaje explícito."

  tolerancia_a_la_abstraccion:
    valor: baja
    descripcion: "Necesita apoyo frecuente en ejemplos concretos y no puede sostener durante mucho tiempo formulaciones abstractas sin anclaje."
```

---

## 3. Lectura resumida de la instancia

Esta instancia puede leerse así:

> Se trata de un estudiante que ya posee una entrada introductoria al Tema B,
> pero cuyo principal problema ya no es conceptual en sentido fuerte, sino
> procedimental: no logra ejecutar con seguridad la secuencia operativa del
> contenido. Entra mejor por ejemplo resuelto, necesita guía alta, requiere
> progresión en micro-pasos, conviene verificar su comprensión mediante resolución
> guiada y mantiene una tolerancia baja a la abstracción.

---

## 4. Estratos preservados

### a) `grado_de_guia_requerida`
Se conserva el valor `alta`.

Esto preserva el mismo estrato de dependencia pedagógica del caso base:
el estudiante sigue necesitando acompañamiento fuerte y sostén continuo.

### b) `ritmo_de_progresion_compatible`
Se conserva el valor `micro_pasos`.

Esto preserva el mismo estrato de densidad de avance:
el caso sigue exigiendo una descomposición fina y altamente explicitada del
recorrido.

### c) `tolerancia_a_la_abstraccion`
Se conserva el valor `baja`.

Esto preserva el mismo estrato de relación con la abstracción:
el estudiante sigue necesitando apoyo frecuente en ejemplos y anclajes concretos.

---

## 5. Estratos modificados

### a) `familiaridad_con_el_tema`
Cambia de `nula` a `introductoria`.

Ahora el estudiante ya no parte de ausencia total de contacto con el Tema B, sino
de un reconocimiento básico todavía insuficiente para operar con estabilidad.

### b) `tipo_de_dificultad_dominante`
Cambia de `conceptual` a `procedimental`.

El problema dominante ya no está en comprender qué significa el contenido, sino
en saber ejecutarlo correctamente.

### c) `modo_de_entrada_mas_efectivo`
Cambia de `caso_concreto` a `ejemplo_resuelto`.

La mejor entrada ya no depende tanto de la simple concreción situacional, sino de
ver el procedimiento ya desplegado.

### d) `modo_de_verificacion_mas_fiable`
Se mantiene en la misma familia operativa de apoyo estructurado, pero ahora se
lee más directamente como confirmación de la dificultad procedimental:
la resolución guiada permite ver si el estudiante ya puede sostener la secuencia
de acciones sin perderse.

---

## 6. Coherencia interna de la instancia

La instancia sigue siendo coherente porque:

- una `familiaridad_con_el_tema = introductoria` es compatible con una dificultad
  dominante `procedimental`, ya que el estudiante ya reconoce el contenido, pero
  todavía no logra ejecutarlo con suficiencia;
- el `modo_de_entrada_mas_efectivo = ejemplo_resuelto` es consistente con una
  dificultad procedimental, porque ver el proceso ya organizado ayuda a
  reconstruir su secuencia operativa;
- el `modo_de_verificacion_mas_fiable = resolucion_guiada` corresponde a un caso
  en que todavía no conviene exigir autonomía plena en la ejecución;
- y los estratos preservados (`guia`, `ritmo`, `abstraccion`) mantienen el mismo
  régimen general de acompañamiento que en la instancia base.

---

## 7. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo por estrato** porque no preserva toda la
instancia base, sino solo algunos estratos del caso pedagógico.

Se preservan:

- el estrato de guía;
- el estrato de ritmo de progresión;
- y el estrato de tolerancia a la abstracción.

Se modifican:

- el estrato de familiaridad;
- el estrato de dificultad dominante;
- el estrato de entrada;
- y la interpretación funcional de la verificación.

Por eso, la correspondencia no es arquitectónica fuerte, sino localizada en
ciertos estratos del modelo del estudiante.

---

## 8. Fórmula condensada de la instancia

La instancia `ETB-IC-002-ISO-E1` conserva del caso base el mismo régimen de guía,
progresión y abstracción, pero cambia la familiaridad, la dificultad dominante y
la forma de entrada al contenido, mostrando así un **isomorfismo por estrato** en
el modelo del estudiante respecto del aprendizaje.
