# Isomorfismo parcial
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo parcial** respecto de la instancia
`ETA-IC-002`.

En este caso no se conserva la arquitectura completa del caso base ni un estrato
entero de manera fuerte.

Lo que se preserva es solo una **porción delimitada de la forma estructural del
caso pedagógico**:

- la relación entre una dificultad que exige apoyo estructurado;
- un modo de verificación coherente con esa dificultad;
- y una baja tolerancia a la abstracción.

Se modifican:

- la familiaridad con el tema;
- el modo de entrada más efectivo;
- el grado de guía requerida;
- y el ritmo de progresión compatible.

Esto significa que la correspondencia ya no es arquitectónica fuerte ni por
estrato, sino localizada en una fracción interna del diseño pedagógico del caso.

---

## 1. Identidad general de la instancia

- `instancia_id`: `ETB-IC-002-ISO-P1`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante con familiaridad incidental del Tema B, dificultad dominante
  conceptual, entrada más efectiva por esquema visual y verificación más fiable
  por resolución guiada.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-002-ISO-P1
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: incidental
    descripcion: "Ha tenido encuentros parciales con el Tema B, pero sin una base todavía suficientemente organizada."

  tipo_de_dificultad_dominante:
    valor: conceptual
    descripcion: "El principal obstáculo sigue estando en comprender qué significa el contenido y cómo se organiza como unidad conceptual."

  modo_de_entrada_mas_efectivo:
    valor: esquema_visual
    descripcion: "La comprensión inicial mejora cuando el Tema B aparece condensado en una estructura visual que permita ver relaciones antes de formularlas."

  grado_de_guia_requerida:
    valor: media
    descripcion: "Necesita apoyo relevante, pero ya no un sostén totalmente intensivo durante todo el recorrido."

  ritmo_de_progresion_compatible:
    valor: pasos_medios
    descripcion: "Puede sostener bloques moderados de avance siempre que las transiciones y relaciones estén suficientemente explicitadas."

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

> Se trata de un estudiante con contacto incidental previo con el Tema B. Su
> principal dificultad sigue siendo conceptual: todavía no logra comprender con
> claridad qué significa el contenido ni cómo se organiza. Entra mejor por
> esquema visual, necesita guía media, puede progresar en pasos medios, conviene
> verificar su comprensión mediante resolución guiada y mantiene una tolerancia
> baja a la abstracción.

---

## 4. Región de forma estructural que se preserva parcialmente

Lo que se conserva del caso base no es la configuración global completa, sino una
región interna del diseño pedagógico.

### a) Persistencia de una dificultad conceptual dominante

Se conserva:

- `tipo_de_dificultad_dominante = conceptual`

Esto preserva una pieza clave de la forma interna del caso:
el problema principal sigue estando en la comprensión misma del contenido y no en
la transferencia, la expresión o el foco atencional.

### b) Correspondencia entre dificultad y verificación

También se conserva la coherencia entre:

- dificultad conceptual;
- y verificación por resolución guiada.

La lógica preservada es esta:

cuando el problema principal sigue siendo comprender la estructura del contenido,
la verificación más fiable no consiste aún en autonomía plena, sino en una
resolución que permita ver la comprensión mientras el andamiaje sigue presente.

### c) Baja tolerancia a la abstracción

Se conserva:

- `tolerancia_a_la_abstraccion = baja`

Esto preserva la misma relación estructural entre el caso y el nivel de
conceptualización del contenido:
el estudiante sigue necesitando fuerte apoyo en ejemplos, apoyos visibles y
anclajes concretos.

---

## 5. Componentes modificados

### a) `familiaridad_con_el_tema`
Cambia de `nula` a `incidental`.

El estudiante ya no parte de desconocimiento absoluto, pero tampoco dispone aún
de una base introductoria suficientemente organizada.

### b) `modo_de_entrada_mas_efectivo`
Cambia de `caso_concreto` a `esquema_visual`.

La entrada ya no depende tanto de una situación concreta encarnada, sino de una
estructura visible que ayude a ordenar el contenido.

### c) `grado_de_guia_requerida`
Cambia de `alta` a `media`.

Aunque el caso sigue exigiendo apoyo, la dependencia pedagógica disminuye
parcialmente.

### d) `ritmo_de_progresion_compatible`
Cambia de `micro_pasos` a `pasos_medios`.

La densidad de avance deja de ser tan fina como en el caso base, aunque todavía
no llega a un régimen compacto.

---

## 6. Coherencia interna de la instancia

La instancia sigue siendo coherente porque:

- una `familiaridad_con_el_tema = incidental` sigue siendo compatible con una
  dificultad dominante `conceptual`, ya que el estudiante puede tener contacto
  parcial sin comprender aún la estructura profunda del contenido;
- el `modo_de_entrada_mas_efectivo = esquema_visual` es consistente con una
  dificultad conceptual, porque ver la organización del contenido puede ayudar a
  estabilizar lo que todavía no se comprende verbalmente;
- el `modo_de_verificacion_mas_fiable = resolucion_guiada` sigue correspondiendo
  bien a un caso donde el problema principal está en la comprensión;
- y la combinación de `guia media` con `pasos_medios` muestra que el caso se ha
  desplazado un poco respecto del base, sin abandonar del todo su lógica inicial.

---

## 7. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo parcial** porque solo preserva una porción
del diseño estructural del caso base.

No se preserva:

- la arquitectura completa del caso;
- ni un estrato completo como en el isomorfismo por estrato;
- ni la misma combinación global de familiaridad, entrada, guía y ritmo.

Se preserva solo una región delimitada:

- dificultad conceptual dominante;
- verificación guiada coherente con esa dificultad;
- y baja tolerancia a la abstracción.

Eso basta para afirmar una correspondencia parcial, pero no una conservación
global del caso.

---

## 8. Fórmula condensada de la instancia

La instancia `ETB-IC-002-ISO-P1` conserva solo una parte delimitada de la forma
estructural del caso base —la relación entre dificultad conceptual, resolución
guiada y baja tolerancia a la abstracción— y modifica el resto de la
configuración, mostrando así un **isomorfismo parcial** dentro del modelo del
estudiante respecto del aprendizaje.
