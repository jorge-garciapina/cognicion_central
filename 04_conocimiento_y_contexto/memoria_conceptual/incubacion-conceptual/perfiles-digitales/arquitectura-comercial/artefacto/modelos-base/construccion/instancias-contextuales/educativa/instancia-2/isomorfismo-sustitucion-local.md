# Isomorfismo con sustitución local
## Ejemplo de instancia
## Modelo del estudiante respecto del aprendizaje del Tema B

### 0. Nota de isomorfismo

Este documento presenta un **isomorfismo con sustitución local** respecto de la
instancia `ETA-IC-002`.

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

- `instancia_id`: `ETB-IC-002-ISO-SL1`
- `clase_de_unidad`: `estudiante_aprendizaje_tema_b`
- `estado_de_instancia`: `estable`
- `descripcion_breve`:
  estudiante sin familiaridad previa con el Tema B, con dificultad dominante
  conceptual, entrada más efectiva por esquema visual y necesidad de guía alta.

---

## 2. Instancia del modelo

```yaml
E:
  instancia_id: ETB-IC-002-ISO-SL1
  clase_de_unidad: estudiante_aprendizaje_tema_b
  estado_de_instancia: estable

  familiaridad_con_el_tema:
    valor: nula
    descripcion: "No hay contacto previo relevante con el Tema B ni reconocimiento estable de su vocabulario o estructura."

  tipo_de_dificultad_dominante:
    valor: conceptual
    descripcion: "El principal obstáculo está en comprender qué significa el contenido y cómo se organiza como unidad conceptual."

  modo_de_entrada_mas_efectivo:
    valor: esquema_visual
    descripcion: "La comprensión inicial mejora cuando el Tema B aparece condensado en una estructura visual que permita ver sus relaciones antes de recorrer ejemplos completos."

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

## 3. Componente sustituido localmente

### Componente base
- `modo_de_entrada_mas_efectivo = caso_concreto`

### Componente sustituto
- `modo_de_entrada_mas_efectivo = esquema_visual`

### Sentido de la sustitución

La sustitución no destruye la lógica general del caso porque ambos valores
cumplen una función pedagógica local análoga:

- reducir la opacidad del contenido en una fase inicial;
- evitar una entrada demasiado abstracta;
- y ofrecer una primera forma de visibilidad estructural del Tema B.

En la instancia base, esa visibilidad inicial se lograba por
**encarnación del contenido en una situación concreta**.

En esta nueva instancia, esa visibilidad inicial se logra por
**condensación del contenido en una estructura visual**.

Por eso, la sustitución es local:
no cambia la dificultad dominante,
no cambia la familiaridad general,
no cambia el régimen de guía,
no cambia el ritmo,
no cambia la verificación,
ni cambia la tolerancia a la abstracción.

Solo reemplaza un punto específico de acceso inicial al contenido.

---

## 4. Lectura resumida de la instancia

Esta instancia puede leerse así:

> Se trata de un estudiante que parte sin familiaridad previa con el Tema B.
> Su principal dificultad sigue siendo conceptual: todavía no logra comprender
> con claridad qué significa el contenido ni cómo se organiza. Conserva guía
> alta, progresión en micro-pasos, verificación por resolución guiada y baja
> tolerancia a la abstracción. La única modificación relevante es que la mejor
> entrada al contenido ya no ocurre por caso concreto, sino por esquema visual.

---

## 5. Coherencia interna de la instancia

La instancia sigue siendo coherente porque:

- la `familiaridad_con_el_tema = nula` sigue siendo compatible con una dificultad
  dominante `conceptual`;
- el nuevo `modo_de_entrada_mas_efectivo = esquema_visual` sigue cumpliendo una
  función de visibilización inicial del contenido, adecuada para un caso donde la
  comprensión conceptual todavía no está constituida;
- el `modo_de_verificacion_mas_fiable = resolucion_guiada` sigue siendo
  completamente coherente con el obstáculo principal;
- y el mantenimiento de `guia alta`, `micro_pasos` y `abstraccion baja`
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

La instancia `ETB-IC-002-ISO-SL1` conserva casi intacta la arquitectura del caso
base, pero sustituye localmente el modo de entrada desde `caso_concreto` hacia
`esquema_visual`, mostrando así un **isomorfismo con sustitución local** dentro
del modelo del estudiante respecto del aprendizaje.
