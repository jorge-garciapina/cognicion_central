# Isomorfismo con sustitución local
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo con sustitución local** respecto de la
instancia `ETA-IC-001`.

En este caso se conserva prácticamente toda la arquitectura del caso base.

Se preserva:

- `clase_de_unidad`
- cantidad de elementos del modelo
- estado general de la instancia
- familiaridad con el tema
- tipo de dificultad dominante
- grado de guía requerida
- ritmo de progresión compatible
- modo de verificación más fiable
- tolerancia a la abstracción
- lógica general de coherencia del caso

Se sustituye localmente solo un componente:

- `modo_de_entrada_mas_efectivo`

La sustitución no altera la arquitectura global del caso, sino que reemplaza una
pieza local por otra funcionalmente análoga dentro de la misma lógica pedagógica.

---

## 1. Identidad general de la instancia

- `instancia_id`: `ETB-IC-001-ISO-SL1`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante con familiaridad introductoria del Tema B, dificultad dominante de
  transferencia, entrada más efectiva por esquema visual y necesidad de guía media.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-001-ISO-SL1
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: introductoria
    descripcion: "Reconoce partes del Tema B y parte de su vocabulario básico, pero aún no puede operar con suficiente estabilidad."

  tipo_de_dificultad_dominante:
    valor: de_transferencia
    descripcion: "Comprende ejemplos ya trabajados del Tema B, pero falla al aplicar su estructura a casos nuevos."

  modo_de_entrada_mas_efectivo:
    valor: esquema_visual
    descripcion: "La comprensión inicial mejora cuando el Tema B aparece condensado en una estructura visual que permita ver relaciones antes de aplicarlas en casos."

  grado_de_guia_requerida:
    valor: media
    descripcion: "Puede sostener parte del proceso con apoyo intermedio, pero no conviene dejarlo completamente solo en el primer recorrido del Tema B."

  ritmo_de_progresion_compatible:
    valor: pasos_medios
    descripcion: "Tolera avances segmentados en bloques moderados; ni micro-pasos excesivos ni saltos demasiado compactos."

  modo_de_verificacion_mas_fiable:
    valor: aplicacion_a_nuevo_caso
    descripcion: "La comprensión se vuelve más legible cuando debe usar lo aprendido del Tema B en un caso no visto previamente."

  tolerancia_a_la_abstraccion:
    valor: media
    descripcion: "Puede sostener cierta abstracción si va acompañada de apoyos estructurales y anclajes parciales en casos del Tema B."
```

---

## 3. Componente sustituido localmente

### Componente base
- `modo_de_entrada_mas_efectivo = comparacion`

### Componente sustituto
- `modo_de_entrada_mas_efectivo = esquema_visual`

### Sentido de la sustitución

La sustitución no destruye la lógica general del caso porque ambos valores
cumplen una función pedagógica local análoga:

- hacer visible la estructura del contenido;
- evitar una entrada excesivamente abstracta;
- y preparar mejor la posterior transferencia a casos nuevos.

En la instancia base, esa visibilidad estructural se lograba principalmente por
**comparación entre casos**.

En esta nueva instancia, esa visibilidad estructural se logra por
**esquematización visual**.

Por eso, la sustitución es local:
no cambia el tipo de dificultad,
no cambia la familiaridad general,
no cambia el régimen de guía,
no cambia el ritmo,
no cambia la verificación,
ni cambia la tolerancia a la abstracción.

Solo reemplaza un punto específico de acceso inicial al contenido.

---

## 4. Lectura resumida de la instancia

Esta instancia puede leerse así:

> Se trata de un estudiante que ya posee una entrada introductoria al Tema B,
> cuyo principal problema sigue estando en la transferencia a situaciones nuevas.
> Conserva un nivel medio de guía, soporta progresión en pasos medios, conviene
> verificar su comprensión por aplicación a nuevo caso y mantiene una tolerancia
> media a la abstracción. La única modificación relevante es que la mejor entrada
> al contenido ya no ocurre por comparación, sino por esquema visual.

---

## 5. Coherencia interna de la instancia

La instancia sigue siendo coherente porque:

- la `familiaridad_con_el_tema = introductoria` sigue siendo compatible con una
  dificultad dominante `de_transferencia`;
- el nuevo `modo_de_entrada_mas_efectivo = esquema_visual` sigue cumpliendo una
  función de visibilización estructural que puede ayudar a la posterior
  transferencia;
- el `modo_de_verificacion_mas_fiable = aplicacion_a_nuevo_caso` sigue siendo
  completamente coherente con el obstáculo principal;
- y el mantenimiento de `guia media`, `pasos_medios` y `abstraccion media`
  preserva la arquitectura general del caso.

---

## 6. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo con sustitución local** porque la forma
global del caso se conserva casi por completo, pero una pieza específica es
reemplazada por otra que ocupa el mismo lugar funcional dentro del modelo.

No se trata de:

- un isomorfismo arquitectónico fuerte puro, porque sí hay sustitución;
- ni de un isomorfismo por estrato, porque no cambia un estrato completo;
- ni de un isomorfismo parcial amplio, porque la modificación está concentrada en
  un punto localizado del caso.

Se trata de una sustitución local de un componente por otro funcionalmente
análogo.

---

## 7. Fórmula condensada de la instancia

La instancia `ETB-IC-001-ISO-SL1` conserva casi intacta la arquitectura del caso
base, pero sustituye localmente el modo de entrada desde `comparacion` hacia
`esquema_visual`, mostrando así un **isomorfismo con sustitución local** dentro
del modelo del estudiante respecto del aprendizaje.
