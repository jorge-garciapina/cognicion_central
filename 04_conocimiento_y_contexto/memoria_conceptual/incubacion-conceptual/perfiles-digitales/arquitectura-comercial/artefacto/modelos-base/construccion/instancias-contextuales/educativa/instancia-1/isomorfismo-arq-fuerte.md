# Isomorfismo arquitectónico fuerte
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo arquitectónico fuerte** respecto de la
instancia `ETA-IC-001`.

Se preserva de manera fuerte:

- `clase_de_unidad`
- cantidad de elementos del modelo
- tipo de configuración general del caso
- forma de descripción de cada elemento
- lógica interna de coherencia entre los elementos
- patrón de familiaridad
- patrón de dificultad dominante
- patrón de entrada
- patrón de guía requerida
- patrón de progresión
- patrón de verificación
- patrón de tolerancia a la abstracción

Lo que cambia es el **tema**.

En la instancia base, la unidad era:
- estudiante respecto del aprendizaje del **Tema A**.

En esta nueva instancia, la unidad es:
- estudiante respecto del aprendizaje del **Tema B**.

La estructura del caso se conserva: cambia el contenido temático, no la forma
arquitectónica de la instancia.

---

## 1. Identidad general de la instancia

- `instancia_id`: `ETB-IC-001-ISO-001`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante con familiaridad introductoria del Tema B, dificultad dominante de
  transferencia, entrada más efectiva por comparación y necesidad de guía media.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-001-ISO-001
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: introductoria
    descripcion: "Reconoce partes del Tema B y parte de su vocabulario básico, pero aún no puede operar con suficiente estabilidad."

  tipo_de_dificultad_dominante:
    valor: de_transferencia
    descripcion: "Comprende ejemplos ya trabajados del Tema B, pero falla al aplicar su estructura a casos nuevos."

  modo_de_entrada_mas_efectivo:
    valor: comparacion
    descripcion: "La comprensión inicial mejora cuando puede contrastar dos o más casos del Tema B y detectar semejanzas y diferencias estructurales."

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
    descripcion: "Puede sostener cierta abstracción si va acompañada de apoyos comparativos y anclajes parciales en casos del Tema B."
```

---

## 3. Lectura resumida de la instancia

Esta instancia puede leerse así:

> Se trata de un estudiante que ya posee una entrada introductoria al Tema B,
> pero cuyo principal problema no está en el reconocimiento inicial del
> contenido, sino en su transferencia a situaciones nuevas. Aprende mejor por
> comparación de casos, necesita un nivel medio de guía, soporta una progresión
> en pasos medios y conviene verificar su comprensión mediante aplicación a un
> caso nuevo.

---

## 4. Coherencia interna de la instancia

La instancia muestra una configuración coherente porque:

- la `familiaridad_con_el_tema = introductoria` es compatible con una dificultad
  dominante `de_transferencia`, ya que el estudiante no parte de cero;
- el `modo_de_entrada_mas_efectivo = comparacion` es consistente con la
  necesidad de distinguir estructuras y no solo repetir ejemplos;
- el `modo_de_verificacion_mas_fiable = aplicacion_a_nuevo_caso` corresponde
  exactamente al tipo de dificultad dominante detectado;
- y la `tolerancia_a_la_abstraccion = media` es consistente con un trabajo que
  puede sostener cierta conceptualización, siempre que conserve apoyo en
  contrastes y estructuras visibles.

---

## 5. Qué muestra este ejemplo

Este ejemplo muestra un **isomorfismo arquitectónico fuerte** porque conserva la
misma arquitectura de la instancia base y cambia únicamente el tema.

Se preserva:

- la misma clase de unidad;
- la misma cantidad de elementos;
- la misma configuración general del caso;
- la misma distribución de valores estructurales;
- la misma lógica de coherencia interna;
- y la misma forma de lectura pedagógica del caso.

Lo que cambia es el contenido temático:

- de `Tema A`
- a `Tema B`.

No cambia la forma del caso, sino el dominio específico sobre el que el caso se
instancia.

---

## 6. Variación mínima posible

Para mostrar que el cambio de tema no destruye el isomorfismo fuerte, basta notar
que la nueva instancia sigue describiendo:

- una entrada introductoria;
- una dificultad dominante de transferencia;
- una entrada comparativa;
- una guía media;
- un ritmo en pasos medios;
- verificación por aplicación a nuevo caso;
- y una tolerancia media a la abstracción.

Es decir:
se preserva la misma forma estructural del caso pedagógico.

---

## 7. Fórmula condensada de la instancia

La instancia `ETB-IC-001-ISO-001` conserva la arquitectura completa de
`ETA-IC-001`, pero sustituye el Tema A por el Tema B, mostrando así un
**isomorfismo arquitectónico fuerte** dentro del modelo del estudiante respecto
del aprendizaje.
