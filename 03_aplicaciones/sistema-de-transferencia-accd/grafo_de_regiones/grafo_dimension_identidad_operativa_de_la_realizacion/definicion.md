## 3. `dimension_identidad_operativa_de_la_realizacion`

### Función general de la dimensión

Describir la identidad declarativa de la realización que se busca construir,
indicando:

- cómo se formula;
- con qué precisión se formula;
- y con qué jerarquía opera dentro del sistema.

Esta dimensión no describe todavía el contenido del caso, ni su composición
segmental, ni su superficie audiovisual. Su función es fijar **qué realización se
está declarando** y con qué grado de centralidad.

---

### 3.1. `formulacion_canonica`

**Función:**
Nombrar de manera explícita la realización que será instanciada.

**Tipo de valor:**
Descriptivo controlado.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**
Una formulación breve, inequívoca y operativa de la realización.

**Descripción del valor esperado:**
El valor de este campo no debe ser un tema, ni un título de archivo, ni una
instrucción de ejecución completa. Debe formular una finalidad de realización
legible como propósito adaptativo.

**Ejemplos estructuralmente válidos:**

- `crear guion para video de TikTok`
- `crear guion para video corto explicativo`
- `crear guion breve de contraste`
- `crear secuencia audiovisual de reexplicacion`
- `crear microguion de apertura de serie`

**Restricciones:**

- Debe formular una intención de realización, no un tema.
- No debe confundirse con el nombre de un archivo.
- No debe incluir todavía toda la lógica de composición.
- Debe poder funcionar como identidad declarativa de la pieza.

---

### 3.2. `nivel_de_especificidad`

**Función:**
Indicar el grado de precisión con el que está formulada la realización.

**Tipo de valor:**
Categorial ordinal.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `general`
- `intermedia`
- `especifica`

**Descripción de los valores:**

- `general`:
  La realización está formulada en un nivel amplio. Nombra una clase de salida o
  de operación sin fijar todavía con mucha precisión el tipo concreto de pieza.
  Deja abiertas varias formas realizativas compatibles.

- `intermedia`:
  La realización está formulada con un grado medio de precisión. Delimita mejor
  la clase de guión o de operación buscada, pero todavía deja margen para varias
  variantes compatibles dentro del mismo dominio.

- `especifica`:
  La realización está formulada con alta precisión. Ya orienta claramente el tipo
  concreto de pieza a construir y reduce de manera fuerte el espacio de salidas
  compatibles.

**Restricciones:**

- Toda instancia debe fijar exactamente un nivel de especificidad.
- La formulación canónica debe ser coherente con el nivel elegido.

---

### 3.3. `prioridad_de_intencion`

**Función:**
Indicar la jerarquía relativa de esta realización dentro del sistema de
configuración.

**Tipo de valor:**
Ordinal.

**Cardinalidad:**
Un valor obligatorio.

**Espacio de valores:**

- `principal`
- `secundaria`
- `terciaria`
- `auxiliar`

**Descripción de los valores:**

- `principal`:
  La realización ocupa el lugar dominante dentro del sistema. Si existen otras
  orientaciones activas, deben subordinarse a ésta.

- `secundaria`:
  La realización cumple una función relevante pero no dominante. Matiza,
  acompaña o refuerza una orientación principal.

- `terciaria`:
  La realización tiene un peso complementario menor. Puede influir en detalles de
  composición, pero no define el criterio principal de éxito.

- `auxiliar`:
  La realización cumple una función instrumental o de soporte. Su presencia no
  estructura el núcleo del sistema, pero puede ayudar a estabilizarlo.

**Restricciones:**

- Debe haber exactamente una prioridad declarada.
- La prioridad debe ser coherente con la jerarquía general de la configuración.
