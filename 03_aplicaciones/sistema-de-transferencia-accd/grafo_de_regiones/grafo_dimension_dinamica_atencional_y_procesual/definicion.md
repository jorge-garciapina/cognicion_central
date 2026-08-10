## 7. `dimension_dinamica_atencional_y_procesual`

### Función general de la dimensión

Describir la relación atencional dominante del receptor con la pieza y la forma
procesual del recorrido que la realización deberá activar o sostener.

---

### 7.1. `estado_atencional`

**Función:**
Describir la configuración dominante de la relación atencional del receptor con
la pieza al momento de la realización.

**Tipo de valor:**
Categorial semiabierto.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores sugerido:**

- `atencion_no_abierta`
- `atencion_inestable`
- `atencion_fragmentada`
- `atencion_superficial`
- `atencion_sostenida`
- `atencion_en_exploracion`
- `atencion_lista_para_profundizacion`
- `atencion_lista_para_activacion`
- `atencion_lista_para_continuidad`
- `atencion_requiere_reenganche`

**Descripción de los valores:**

- `atencion_no_abierta`:
  La atención aún no ha sido captada de forma efectiva.

- `atencion_inestable`:
  La atención se abre, pero no se sostiene fácilmente.

- `atencion_fragmentada`:
  La atención está repartida, interrumpida o expuesta a dispersión fuerte.

- `atencion_superficial`:
  La atención está abierta, pero todavía en un nivel poco profundo.

- `atencion_sostenida`:
  La atención ya tiene un grado fuerte de continuidad.

- `atencion_en_exploracion`:
  La atención está disponible para una entrada exploratoria.

- `atencion_lista_para_profundizacion`:
  La atención está lista para avanzar hacia mayor densidad o desarrollo.

- `atencion_lista_para_activacion`:
  La atención está lista para recibir una invitación más práctica o decisional.

- `atencion_lista_para_continuidad`:
  La atención está lista para enlazarse con piezas futuras.

- `atencion_requiere_reenganche`:
  La atención necesita ser recuperada o reabierta.

---

### 7.2. `regimen_de_activacion_atencional`

**Función:**
Fijar el modo principal en que la realización debe activar, sostener o reabrir la
atención.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `apertura_inmediata`
- `apertura_progresiva`
- `reenganche`
- `sostenimiento_desde_el_inicio`
- `activacion_por_continuidad`

**Descripción de los valores:**

- `apertura_inmediata`:
  La realización debe abrir atención desde el inicio, sin preámbulos extensos.

- `apertura_progresiva`:
  La realización puede construir la atención de forma escalonada.

- `reenganche`:
  La realización debe recuperar una atención que ya estuvo abierta pero se aflojó.

- `sostenimiento_desde_el_inicio`:
  La atención debe ser captada y mantenida desde el primer tramo.

- `activacion_por_continuidad`:
  La atención se apoya en continuidad con piezas previas o contexto ya activo.

---

### 7.3. `dinamica_procesual`

**Función:**
Describir la experiencia de recorrido de la realización.

**Tipo de valor:**
Compuesto.

**Cardinalidad:**
Un valor obligatorio compuesto por cinco ejes.

**Campos internos obligatorios:**

- `explicitud`
- `continuidad`
- `friccion_interpretativa`
- `compresion`
- `recapitulacion`

#### 7.3.1. `explicitud`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: muchas cosas quedan implícitas;
  - `media`: parte importante del contenido se explicita;
  - `alta`: la realización vuelve muy claras sus relaciones principales.

#### 7.3.2. `continuidad`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: recorrido más cortado o discontinuo;
  - `media`: continuidad suficiente pero no completamente fluida;
  - `alta`: recorrido muy continuo y articulado.

#### 7.3.3. `friccion_interpretativa`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: el recorrido exige poco esfuerzo interpretativo adicional;
  - `media`: el recorrido contiene zonas moderadas de tensión interpretativa;
  - `alta`: el recorrido exige un trabajo inferencial fuerte.

#### 7.3.4. `compresion`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: la realización se despliega con más amplitud;
  - `media`: combina condensación y despliegue;
  - `alta`: concentra mucho contenido en poco espacio.

#### 7.3.5. `recapitulacion`

- **Valores:** `baja`, `media`, `alta`
- **Descripción:**
  - `baja`: pocas reformulaciones o recuperaciones del recorrido;
  - `media`: cierto grado de reformulación o síntesis parcial;
  - `alta`: fuerte presencia de recuperación, síntesis o reexpresión.

**Restricciones generales de `dinamica_procesual`:**

- Los cinco ejes deben declararse.
- Deben ser compatibles con el estado atencional y el régimen de activación.
