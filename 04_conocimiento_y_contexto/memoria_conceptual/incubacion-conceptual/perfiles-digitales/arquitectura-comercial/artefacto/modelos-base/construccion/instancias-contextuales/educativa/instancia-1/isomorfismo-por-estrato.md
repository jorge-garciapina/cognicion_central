# Isomorfismo por estrato
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo por estrato** respecto de la instancia
`ETA-IC-001`.

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

- `instancia_id`: `ETB-IC-001-ISO-E1`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante con familiaridad operativa del Tema B, dificultad dominante
  expresiva, entrada más efectiva por ejemplo resuelto y necesidad de guía media.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-001-ISO-E1
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: operativa
    descripcion: "Puede trabajar con el Tema B en tareas relativamente acotadas, aunque todavía no logre formularlo con plena estabilidad."

  tipo_de_dificultad_dominante:
    valor: expresiva
    descripcion: "Comprende más del Tema B de lo que logra formular con claridad, especialmente cuando debe explicar con sus propias palabras."

  modo_de_entrada_mas_efectivo:
    valor: ejemplo_resuelto
    descripcion: "La comprensión inicial mejora cuando ve el proceso del Tema B ya realizado y puede reconstruir después su lógica."

  grado_de_guia_requerida:
    valor: media
    descripcion: "Puede sostener parte del proceso con apoyo intermedio, pero no conviene dejarlo completamente solo en el primer recorrido."

  ritmo_de_progresion_compatible:
    valor: pasos_medios
    descripcion: "Tolera avances segmentados en bloques moderados; ni micro-pasos excesivos ni saltos demasiado compactos."

  modo_de_verificacion_mas_fiable:
    valor: reexplicacion
    descripcion: "La comprensión se vuelve más legible cuando debe volver a explicar con precisión lo trabajado en el Tema B."

  tolerancia_a_la_abstraccion:
    valor: media
    descripcion: "Puede sostener cierta abstracción si va acompañada de apoyos comparativos o ejemplos que estabilicen el contenido."
```

---

## 3. Lectura resumida de la instancia

Esta instancia puede leerse así:

> Se trata de un estudiante que ya posee un nivel operativo inicial del Tema B,
> pero cuya principal dificultad no está en la transferencia a nuevos casos, sino
> en la formulación expresiva de lo que ya comprende. Entra mejor por ejemplo
> resuelto, necesita un nivel medio de guía, soporta una progresión en pasos
> medios, conviene verificar su comprensión mediante reexplicación y mantiene una
> tolerancia media a la abstracción.

---

## 4. Estratos preservados

### a) `grado_de_guia_requerida`
Se conserva el valor `media`.

Esto preserva el mismo estrato de autonomía relativa del caso base:
el estudiante puede sostener parte del proceso, pero todavía requiere apoyo
intermedio.

### b) `ritmo_de_progresion_compatible`
Se conserva el valor `pasos_medios`.

Esto preserva el mismo estrato de densidad de avance:
el caso no exige ni micro-pasos extremos ni saltos demasiado compactos.

### c) `tolerancia_a_la_abstraccion`
Se conserva el valor `media`.

Esto preserva el mismo estrato de relación con la abstracción:
el estudiante puede sostener cierta conceptualización, pero no conviene separarlo
por completo de apoyos o anclajes.

---

## 5. Estratos modificados

### a) `familiaridad_con_el_tema`
Cambia de `introductoria` a `operativa`.

Ahora el estudiante no solo reconoce partes del Tema B, sino que ya puede operar
con él en tareas acotadas.

### b) `tipo_de_dificultad_dominante`
Cambia de `de_transferencia` a `expresiva`.

El problema dominante ya no está en aplicar el contenido a nuevos casos, sino en
formular con claridad lo que ya logra comprender.

### c) `modo_de_entrada_mas_efectivo`
Cambia de `comparacion` a `ejemplo_resuelto`.

La mejor entrada ya no depende primariamente del contraste entre casos, sino de
ver el proceso del Tema B ya desplegado.

### d) `modo_de_verificacion_mas_fiable`
Cambia de `aplicacion_a_nuevo_caso` a `reexplicacion`.

La verificación más fiable ya no consiste en usar el contenido en un caso no
visto, sino en volver a formularlo con claridad y precisión.

---

## 6. Coherencia interna de la instancia

La instancia sigue siendo coherente porque:

- una `familiaridad_con_el_tema = operativa` es compatible con una dificultad
  dominante `expresiva`, ya que el estudiante puede trabajar con el contenido sin
  lograr todavía explicarlo bien;
- el `modo_de_entrada_mas_efectivo = ejemplo_resuelto` es consistente con una
  dificultad expresiva, porque ver el proceso ya organizado puede estabilizar la
  estructura antes de exigir formulación propia;
- el `modo_de_verificacion_mas_fiable = reexplicacion` corresponde exactamente
  al tipo de obstáculo dominante detectado;
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
- y el estrato de verificación.

Por eso, la correspondencia no es arquitectónica fuerte, sino localizada en
ciertos estratos del modelo del estudiante.

---

## 8. Fórmula condensada de la instancia

La instancia `ETB-IC-001-ISO-E1` conserva del caso base el mismo régimen de guía,
progresión y abstracción, pero cambia la familiaridad, la dificultad dominante,
la entrada y la verificación, mostrando así un **isomorfismo por estrato** en el
modelo del estudiante respecto del aprendizaje.
