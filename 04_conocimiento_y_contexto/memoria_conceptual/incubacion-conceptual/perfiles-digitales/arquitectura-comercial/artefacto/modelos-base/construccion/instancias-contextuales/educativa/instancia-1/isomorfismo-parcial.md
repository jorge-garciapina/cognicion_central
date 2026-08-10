# Isomorfismo parcial
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo parcial** respecto de la instancia
`ETA-IC-001`.

En este caso no se conserva la arquitectura completa del caso base ni un estrato
entero de manera fuerte.

Lo que se preserva es solo una **porción delimitada de la forma estructural del
caso pedagógico**:

- la lógica de que el problema dominante se refleje directamente en el modo de
  verificación más fiable;
- la necesidad de una entrada mediada por estructura visible;
- y una tolerancia media a la abstracción.

Se modifican:

- la familiaridad con el tema;
- el grado de guía requerida;
- el ritmo de progresión compatible;
- y la forma concreta de entrada.

Esto significa que la correspondencia ya no es arquitectónica fuerte ni por
estrato, sino localizada en una fracción interna del diseño pedagógico del caso.

---

## 1. Identidad general de la instancia

- `instancia_id`: `ETB-IC-001-ISO-P1`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante con familiaridad incidental del Tema B, dificultad dominante
  expresiva, entrada más efectiva por esquema visual y verificación más fiable
  por reexplicación.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-001-ISO-P1
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: incidental
    descripcion: "Ha tenido encuentros parciales con el Tema B, pero sin una base todavía suficientemente organizada."

  tipo_de_dificultad_dominante:
    valor: expresiva
    descripcion: "Comprende más del Tema B de lo que logra formular con claridad, especialmente cuando debe reconstruir el contenido en sus propias palabras."

  modo_de_entrada_mas_efectivo:
    valor: esquema_visual
    descripcion: "La comprensión inicial mejora cuando el Tema B aparece condensado en una estructura visual que permita ver relaciones antes de verbalizarlas."

  grado_de_guia_requerida:
    valor: alta
    descripcion: "Necesita acompañamiento fuerte en la primera organización del contenido, aunque no porque carezca totalmente de contacto previo, sino porque todavía no estabiliza bien la formulación."

  ritmo_de_progresion_compatible:
    valor: micro_pasos
    descripcion: "Tolera mejor una progresión muy segmentada, con avances pequeños y explicitación constante de la relación entre partes."

  modo_de_verificacion_mas_fiable:
    valor: reexplicacion
    descripcion: "La comprensión se vuelve más legible cuando debe volver a explicar con claridad la estructura del Tema B."

  tolerancia_a_la_abstraccion:
    valor: media
    descripcion: "Puede sostener cierta abstracción si cuenta con apoyos visuales o estructurales que estabilicen el contenido."
```

---

## 3. Lectura resumida de la instancia

Esta instancia puede leerse así:

> Se trata de un estudiante con contacto incidental previo con el Tema B. Su
> principal dificultad no está en la transferencia a casos nuevos, sino en la
> formulación expresiva de lo que alcanza a comprender. Entra mejor por esquema
> visual, necesita guía alta, progresa mejor en micro-pasos, conviene verificar
> su comprensión mediante reexplicación y mantiene una tolerancia media a la
> abstracción.

---

## 4. Región de forma estructural que se preserva parcialmente

Lo que se conserva del caso base no es la configuración global completa, sino una
región interna del diseño pedagógico.

### a) Acoplamiento entre dificultad dominante y verificación

En la instancia base, el modelo mostraba una relación fuerte entre:
- la naturaleza del obstáculo principal;
- y el modo de verificación más fiable.

En esta nueva instancia se preserva esa misma lógica formal.

Aquí:
- `tipo_de_dificultad_dominante = expresiva`
- `modo_de_verificacion_mas_fiable = reexplicacion`

La verificación elegida corresponde de manera directa al tipo de obstáculo
detectado, porque el problema central está precisamente en volver formulable lo
que el estudiante ya logra comprender parcialmente.

### b) Necesidad de entrada por estructura visible

En la instancia base, la entrada al contenido estaba mediada por una forma de
hacer visible estructura: allí era comparación; aquí es esquema visual.

Lo que se preserva no es el mismo valor, sino la misma función pedagógica local:
el estudiante no entra mejor por abstracción desnuda, sino por una mediación que
hace visible la organización del contenido.

### c) Tolerancia media a la abstracción

Se conserva el valor `media`.

Esto preserva una zona parcial del caso: el estudiante no requiere reducción
total a lo concreto, pero tampoco puede sostener abstracción alta sin apoyo.

---

## 5. Componentes modificados

### a) `familiaridad_con_el_tema`
Cambia de `introductoria` a `incidental`.

El estudiante ya no parte de una base introductoria relativamente organizada,
sino de un contacto más fragmentario.

### b) `grado_de_guia_requerida`
Cambia de `media` a `alta`.

La necesidad de acompañamiento aumenta porque la formulación del contenido aún no
se estabiliza con suficiente autonomía.

### c) `ritmo_de_progresion_compatible`
Cambia de `pasos_medios` a `micro_pasos`.

La progresión debe hacerse más segmentada para sostener el recorrido.

### d) `modo_de_entrada_mas_efectivo`
Cambia de `comparacion` a `esquema_visual`.

No se conserva el mismo valor, aunque sí una función parcial semejante: dar
visibilidad estructural al contenido.

---

## 6. Coherencia interna de la instancia

La instancia sigue siendo coherente porque:

- una `familiaridad_con_el_tema = incidental` es compatible con una dificultad
  dominante `expresiva`, ya que el estudiante puede haber captado fragmentos del
  contenido sin poder todavía organizarlos verbalmente;
- el `modo_de_entrada_mas_efectivo = esquema_visual` es consistente con una
  dificultad expresiva, porque ver la estructura antes de formularla puede ayudar
  a estabilizar la comprensión;
- el `modo_de_verificacion_mas_fiable = reexplicacion` corresponde directamente
  al obstáculo principal detectado;
- y la combinación de `guia alta` con `micro_pasos` es coherente con una fase en
  que la organización expresiva todavía requiere fuerte acompañamiento.

---

## 7. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo parcial** porque solo preserva una porción
del diseño estructural del caso base.

No se preserva:

- la arquitectura completa del caso;
- ni un estrato completo como en el isomorfismo por estrato;
- ni la misma configuración general de autonomía, ritmo y familiaridad.

Se preserva solo una región delimitada:

- la lógica de correspondencia entre dificultad y verificación;
- la necesidad de mediación estructural en la entrada;
- y la misma tolerancia media a la abstracción.

Eso basta para afirmar una correspondencia parcial, pero no una conservación
global del caso.

---

## 8. Fórmula condensada de la instancia

La instancia `ETB-IC-001-ISO-P1` conserva solo una parte delimitada de la forma
estructural del caso base —la relación entre tipo de dificultad, modo de
verificación y entrada mediada por estructura visible— y modifica el resto de la
configuración, mostrando así un **isomorfismo parcial** dentro del modelo del
estudiante respecto del aprendizaje.
