## 10. `dimension_marco_de_materializacion`

### Función general de la dimensión

Describir la clase general de salida y el marco material en el que esa salida
pertenece al codominio.

---

### 10.1. `clase_de_materializacion`

**Función:**
Describir la clase de materialización textual válida para la realización.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `guion_audiovisual_breve`

**Descripción del valor:**
La salida pertenece a la clase de guiones breves orientados a organizar una
realización audiovisual corta.

**Restricciones:**

- Toda instancia del modelo debe fijar esta clase.
- La salida debe ser reconocible como guión audiovisual breve.

---

### 10.2. `plataforma`

**Función:**
Describir el entorno de plataforma para el que se construye la salida.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `tiktok`

**Descripción del valor:**
La salida pertenece al entorno TikTok, con las restricciones y expectativas
materiales asociadas a esa plataforma.

---

### 10.3. `aplicacion_de_plataforma`

**Función:**
Describir la aplicación específica del entorno de plataforma dentro de la cual la
salida debe ser realizable.

**Tipo de valor:**
Categorial cerrado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `video_tiktok`

**Descripción del valor:**
La salida debe comparecer como video breve vertical dentro del entorno TikTok.

**Restricciones generales de la dimensión:**

- `clase_de_materializacion`, `plataforma` y `aplicacion_de_plataforma` deben ser
  compatibles entre sí.
