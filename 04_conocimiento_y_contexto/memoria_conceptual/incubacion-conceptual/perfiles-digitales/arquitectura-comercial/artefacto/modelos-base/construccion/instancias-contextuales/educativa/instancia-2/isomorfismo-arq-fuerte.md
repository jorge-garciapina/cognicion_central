# Isomorfismo arquitectónico fuerte
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo arquitectónico fuerte** respecto de la
instancia `ETA-IC-002`.

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

- `instancia_id`: `ETB-IC-002-ISO-001`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante sin familiaridad previa con el Tema B, con dificultad dominante
  conceptual, entrada más efectiva por caso concreto y necesidad de guía alta.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-002-ISO-001
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: nula
    descripcion: "No hay contacto previo relevante con el Tema B ni reconocimiento estable de su vocabulario o estructura."

  tipo_de_dificultad_dominante:
    valor: conceptual
    descripcion: "El principal obstáculo está en comprender qué significa el contenido y cómo se organiza como unidad conceptual."

  modo_de_entrada_mas_efectivo:
    valor: caso_concreto
    descripcion: "La comprensión inicial mejora cuando el Tema B aparece encarnado en una situación específica y reconocible."

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

> Se trata de un estudiante que parte sin familiaridad previa con el Tema B.
> Su principal dificultad es conceptual: todavía no logra comprender con claridad
> qué significa el contenido ni cómo se organiza. Entra mejor por casos
> concretos, necesita guía alta, requiere progresión en micro-pasos y conviene
> verificar su comprensión mediante resolución guiada. Su tolerancia a la
> abstracción es baja, por lo que necesita apoyos frecuentes en ejemplos.

---

## 4. Coherencia interna de la instancia

La instancia muestra una configuración coherente porque:

- la `familiaridad_con_el_tema = nula` es compatible con una dificultad
  dominante `conceptual`, ya que el estudiante aún no dispone de base suficiente
  para reconocer el contenido;
- el `modo_de_entrada_mas_efectivo = caso_concreto` es consistente con una
  `tolerancia_a_la_abstraccion = baja`, porque el acceso inicial mejora cuando el
  contenido aparece encarnado en ejemplos situados;
- el `grado_de_guia_requerida = alta` es coherente con
  `ritmo_de_progresion_compatible = micro_pasos`, ya que el caso exige apoyo
  fuerte y descomposición fina del avance;
- y el `modo_de_verificacion_mas_fiable = resolucion_guiada` corresponde a una
  situación en la que todavía no conviene exigir autonomía plena en la aplicación
  del contenido.

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

- una ausencia de familiaridad previa;
- una dificultad conceptual dominante;
- una entrada por caso concreto;
- una guía alta;
- una progresión en micro-pasos;
- verificación por resolución guiada;
- y una tolerancia baja a la abstracción.

Es decir:
se preserva la misma forma estructural del caso pedagógico.

---

## 7. Fórmula condensada de la instancia

La instancia `ETB-IC-002-ISO-001` conserva la arquitectura completa de
`ETA-IC-002`, pero sustituye el Tema A por el Tema B, mostrando así un
**isomorfismo arquitectónico fuerte** dentro del modelo del estudiante respecto
del aprendizaje.
