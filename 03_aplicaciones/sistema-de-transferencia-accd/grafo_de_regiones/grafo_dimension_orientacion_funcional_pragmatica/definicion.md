## 4. `dimension_orientacion_funcional_pragmatica`

### Función general de la dimensión

Describir qué quiere hacer la realización, qué efecto busca producir y qué clase
principal de respuesta espera activar.

Esta dimensión fija el vector pragmático de la pieza. No describe todavía su
segmentación ni su comparecencia local, pero sí el tipo de operación dominante
que la salida debe cumplir.

---

### 4.1. `funcion_dominante`

**Función:**
Fijar qué operación principal busca cumplir la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `enseñar`
- `sintetizar`
- `persuadir`
- `evaluar`
- `diagnosticar`
- `captar_atencion`
- `activar_interaccion`
- `convertir`
- `distribuir`
- `manifestar_comercialmente`
- `abrir_serie`
- `continuar_serie`
- `cerrar_serie`

**Descripción de los valores:**

- `enseñar`:
  La realización busca facilitar comprensión, asimilación o aprendizaje de una
  idea, estructura u operación.

- `sintetizar`:
  La realización busca condensar contenido, reducir extensión y ofrecer una forma
  concentrada de comprensión.

- `persuadir`:
  La realización busca inclinar al receptor hacia una posición, una interpretación
  o una disposición determinada.

- `evaluar`:
  La realización busca valorar, estimar o poner a prueba un contenido, criterio o
  desempeño.

- `diagnosticar`:
  La realización busca identificar un estado, problema, patrón o condición.

- `captar_atencion`:
  La realización busca abrir atención y atraer al receptor hacia el campo de la
  pieza.

- `activar_interaccion`:
  La realización busca producir una respuesta interactiva explícita, como
  comentar, responder o intervenir.

- `convertir`:
  La realización busca llevar al receptor hacia una decisión o cambio más fuerte,
  normalmente con una dirección práctica definida.

- `distribuir`:
  La realización busca circular contenido de forma eficiente y reconocible,
  priorizando transferibilidad o circulación.

- `manifestar_comercialmente`:
  La realización busca comparecer como pieza ligada a una lógica comercial,
  promocional o de posicionamiento.

- `abrir_serie`:
  La realización busca iniciar una secuencia de piezas relacionadas.

- `continuar_serie`:
  La realización busca sostener una secuencia ya abierta.

- `cerrar_serie`:
  La realización busca concluir una secuencia de piezas relacionadas.

**Restricciones:**

- Debe haber exactamente una función dominante.
- Las demás orientaciones pragmáticas deben ser compatibles con ella.

---

### 4.2. `efecto_buscado`

**Función:**
Describir el efecto principal que la realización pretende provocar en el
receptor.

**Tipo de valor:**
Categorial semiabierto.

**Cardinalidad:**
Uno o más valores, con una dominancia explícita.

**Espacio de valores sugerido:**

- `comprension_rapida`
- `curiosidad`
- `identificacion`
- `sorpresa`
- `urgencia`
- `retencion`
- `expectativa_de_resolucion`
- `deseo_de_guardar`
- `deseo_de_comentar`
- `deseo_de_compartir`
- `deseo_de_ver_hasta_el_final`
- `deseo_de_ir_al_perfil`
- `predisposicion_a_serie`
- `disposicion_a_accion`

**Descripción de los valores:**

- `comprension_rapida`:
  La pieza busca que el receptor entienda con rapidez una distinción, idea,
  estructura u operación.

- `curiosidad`:
  La pieza busca abrir una inquietud cognitiva que invite a seguir atendiendo o a
  explorar más.

- `identificacion`:
  La pieza busca que el receptor reconozca algo propio, vivido o cercano en el
  contenido.

- `sorpresa`:
  La pieza busca introducir una ruptura de expectativa que reorganice la atención.

- `urgencia`:
  La pieza busca intensificar la percepción de necesidad, inmediatez o relevancia
  práctica.

- `retencion`:
  La pieza busca permanecer en memoria o dejar una huella cognitiva reconocible.

- `expectativa_de_resolucion`:
  La pieza busca mantener al receptor esperando un cierre, una respuesta o una
  clarificación posterior.

- `deseo_de_guardar`:
  La pieza busca que el receptor perciba la salida como algo reutilizable o digno
  de conservar.

- `deseo_de_comentar`:
  La pieza busca generar reacción explícita.

- `deseo_de_compartir`:
  La pieza busca circular por recomendación o reenvío.

- `deseo_de_ver_hasta_el_final`:
  La pieza busca sostener la atención completa hasta el cierre.

- `deseo_de_ir_al_perfil`:
  La pieza busca extender la navegación hacia otras salidas o hacia la fuente.

- `predisposicion_a_serie`:
  La pieza busca preparar al receptor para continuidad serial.

- `disposicion_a_accion`:
  La pieza busca abrir una disposición práctica, de aplicación o respuesta.

**Restricciones:**

- Puede haber más de un efecto, pero uno debe ser dominante.
- Los efectos buscados deben ser compatibles con la función dominante.

---

### 4.3. `accion_esperada`

**Función:**
Fijar la acción concreta que la realización espera activar en el receptor.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Uno o más valores.

**Espacio de valores:**

- `ver_hasta_el_final`
- `comentar`
- `guardar`
- `compartir`
- `seguir_cuenta`
- `ir_al_perfil`
- `consumir_parte_siguiente`
- `solicitar_mas_informacion`
- `hacer_click`
- `aplicar_lo_mostrado`
- `ninguna_explicita`

**Descripción de los valores:**

- `ver_hasta_el_final`:
  La pieza busca que el receptor complete todo el recorrido.

- `comentar`:
  La pieza busca una intervención verbal o reactiva explícita.

- `guardar`:
  La pieza busca ser conservada para uso posterior.

- `compartir`:
  La pieza busca ser redistribuida por el receptor.

- `seguir_cuenta`:
  La pieza busca convertir la recepción en seguimiento estable.

- `ir_al_perfil`:
  La pieza busca extender la atención hacia el resto del ecosistema de salida.

- `consumir_parte_siguiente`:
  La pieza busca continuidad serial.

- `solicitar_mas_informacion`:
  La pieza busca abrir una demanda explícita de ampliación.

- `hacer_click`:
  La pieza busca una acción puntual sobre un enlace o elemento de salida.

- `aplicar_lo_mostrado`:
  La pieza busca que el receptor ejecute o ponga en práctica el contenido.

- `ninguna_explicita`:
  La pieza no exige una acción externa inmediata claramente declarada.

**Restricciones:**

- Debe ser coherente con la función dominante.
- Las acciones esperadas deben ser plausibles dentro del codominio elegido.

---

### 4.4. `configuracion_discursiva`

**Función:**
Describir el modo de formulación predominante de la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `definicional`
- `explicativa`
- `argumentativa`
- `operativa`
- `sintetizadora`
- `captativa`
- `hibrida_controlada`

**Descripción de los valores:**

- `definicional`:
  La realización se formula prioritariamente para fijar qué es algo,
  delimitarlo o precisarlo.

- `explicativa`:
  La realización se formula prioritariamente para hacer comprensible un
  contenido, desplegarlo o aclararlo.

- `argumentativa`:
  La realización se formula prioritariamente para sostener, defender o justificar
  una tesis.

- `operativa`:
  La realización se formula prioritariamente para indicar qué hacer, cómo
  proceder o qué operación ejecutar.

- `sintetizadora`:
  La realización se formula prioritariamente para condensar y reorganizar el
  contenido en forma resumida.

- `captativa`:
  La realización se formula prioritariamente para abrir atención, provocar
  entrada o intensificar interés inicial.

- `hibrida_controlada`:
  La realización combina más de una modalidad discursiva, pero mantiene una
  organización controlada y reconocible.

**Restricciones:**

- Debe haber exactamente una configuración discursiva predominante.
- Si es híbrida, la combinación debe seguir siendo identificable y controlada.
