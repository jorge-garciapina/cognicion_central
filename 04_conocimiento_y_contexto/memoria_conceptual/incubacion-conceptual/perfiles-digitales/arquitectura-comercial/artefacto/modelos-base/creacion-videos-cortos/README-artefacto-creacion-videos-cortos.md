# README — Artefacto del adaptador para creación de videos cortos

**Versión:** 1.0  
**Tipo de artefacto:** adaptador especializado de la ACCD para manifestaciones audiovisuales breves  
**Codominio principal:** video corto / TikTok  
**Unidad de entrada esperada:** instancia contextual del modelo base  
**Unidad de salida esperada:** manifestación codominial compuesta

---

## 0. Propósito de este README

Este README describe cómo debe ser entendido y utilizado el artefacto del **adaptador para creación de videos cortos**.

Su función es orientar a una IA —o a cualquier sistema que lea el artefacto— para que comprenda:

- qué es este artefacto;
- qué componentes lo forman;
- qué espera recibir como entrada;
- qué debe producir como salida;
- cuáles son sus responsabilidades;
- cuáles son sus límites;
- cómo se integra con la nueva arquitectura de ACCD basada en grafos, regiones de grafos, instancias contextuales y adaptadores;
- y qué comportamiento debe adoptar una IA al usarlo.

Este README debe leerse como el **mapa operativo del artefacto**.

No sustituye los documentos técnicos internos.  
Su función es explicar cómo se relacionan.

---

## 1. Definición general del artefacto

Este artefacto es un **adaptador especializado** para producir videos cortos.

Más específicamente, es un artefacto documental-operativo que permite transformar una **instancia contextual** en una **manifestación codominial compuesta** compatible con el codominio de video corto, especialmente TikTok.

La fórmula general es:

```txt
instancia_contextual_del_modelo_base
  ↓
protocolo_de_composicion_dimensional
  ↓
manifestacion_codominial_compuesta_para_video_corto
```

La instancia contextual no debe entenderse como una simple colección de datos.  
Es una configuración completa de valores distribuidos en las dimensiones del modelo base.

La manifestación codominial compuesta no debe entenderse como un texto corrido.  
Es una salida estructurada, estratificada y realizable, compuesta por cabecera, macroestructura, bloques, capas verbales, superficies textuales, recursos visuales, recursos audiovisuales, recursos auditivos, continuidad transversal y justificación de composición.

---

## 2. Responsabilidad principal del artefacto

La responsabilidad principal de este artefacto es:

> **recibir una instancia contextual compatible con el modelo base de videos cortos y construir, mediante el protocolo de composición dimensional, una manifestación codominial compuesta perteneciente al codominio video corto / TikTok.**

Esto implica que el artefacto debe:

1. leer una instancia contextual;
2. verificar que sus dimensiones, campos y valores estén suficientemente definidos;
3. aplicar las reglas del protocolo integrado por campo de salida;
4. construir la salida esperada con la estructura definida en `salida-esperada.md`;
5. conservar trazabilidad entre entrada, protocolo y salida;
6. justificar cómo cada dimensión contribuye a la manifestación final cuando sea necesario.

---

## 3. Lo que este artefacto no es

Este artefacto **no** es la entidad encargada de transformar cualquier idea en crudo en un grafo conceptual completo.

Esa responsabilidad pertenece a una arquitectura más amplia de ACCD, vinculada con:

- grafos conceptuales;
- grafos atencionales;
- grafos receptorales;
- grafos identitarios;
- grafos comerciales;
- grafos de materialización;
- regiones de grafos;
- subgrafos;
- campos atencionales;
- entidad federada;
- isomorfismos;
- trazabilidad conceptual.

Este artefacto puede **recibir** resultados de esos procesos, pero no debe asumir que su responsabilidad principal es construirlos desde cero.

La distinción correcta es:

```txt
grafos_y_subgrafos_externos
  ↓
instancia_contextual_condensadora
  ↓
adaptador_de_video_corto
  ↓
manifestacion_codominial_compuesta
```

Por tanto, este adaptador no empieza en la idea en crudo.  
Empieza, estrictamente, en la **instancia contextual**.

---

## 4. Relación con la nueva arquitectura ACCD

La nueva arquitectura de ACCD puede entenderse como una arquitectura de grafos estratificados.

Distintos estratos pueden representarse como grafos o regiones de grafos:

- grafo conceptual;
- grafo atencional;
- grafo receptoral;
- grafo identitario;
- grafo contextual;
- grafo comercial;
- grafo de materialización;
- grafo de recursos;
- grafo de evidencia;
- grafo de retorno.

Una **instancia contextual** funciona como un **condensador intergrafal**.

Esto significa que una instancia contextual puede recibir valores derivados de distintas regiones de distintos grafos.

Por ejemplo:

```txt
dimension_construccion_del_caso
  ← región seleccionada del grafo conceptual

 dimension_dinamica_atencional_y_procesual
  ← región seleccionada del grafo atencional

 dimension_acoplamiento_receptoral
  ← región seleccionada del grafo de públicos o recepción

 dimension_comparecencia_performativa
  ← región seleccionada del grafo identitario / performativo

 dimension_composicion_segmental_de_la_salida
  ← región seleccionada del grafo de formatos o materialización

 dimension_recursos_complementarios_de_manifestacion
  ← región seleccionada del grafo de recursos visuales, audiovisuales y auditivos
```

El adaptador de video corto no consume directamente todos esos grafos.  
Consume la instancia contextual que los condensa.

---

## 5. Papel de la instancia contextual

La instancia contextual es la unidad de entrada del adaptador.

Debe entenderse como:

> **una configuración operable que condensa regiones seleccionadas de uno o varios grafos arquitectónicos en valores compatibles con las dimensiones del modelo base, para que un adaptador pueda producir una manifestación codominial específica.**

Versión breve:

> **la instancia contextual es el puente entre regiones de grafos y una salida adaptada.**

Versión técnica:

```txt
instancia_contextual = condensador_intergrafal_orientado_a_manifestacion
```

La instancia contextual no es:

- el grafo completo;
- la idea en crudo;
- la salida final;
- el protocolo;
- ni el adaptador.

Es la forma mediadora que permite que el adaptador opere.

---

## 6. Componentes principales del artefacto

El artefacto contiene tres componentes técnicos principales.

---

### 6.1. `dimensiones-de-configuracion-detalladas.md`

#### Función

Define el **modelo base** que organiza la entrada esperada por el adaptador.

#### Qué contiene

Contiene las **dimensiones de configuración** del sistema, con sus campos, valores y restricciones.

Las dimensiones principales son:

1. `dimension_identidad_operativa_de_la_realizacion`
2. `dimension_orientacion_funcional_pragmatica`
3. `dimension_escala_temporal_y_resolucion_realizativa`
4. `dimension_acoplamiento_receptoral`
5. `dimension_dinamica_atencional_y_procesual`
6. `dimension_construccion_del_caso`
7. `dimension_comparecencia_performativa`
8. `dimension_marco_de_materializacion`
9. `dimension_composicion_segmental_de_la_salida`
10. `dimension_recursos_complementarios_de_manifestacion`

#### Responsabilidad dentro del artefacto

Este archivo responde a la pregunta:

> **¿qué debe estar configurado para que el adaptador pueda operar?**

Define la estructura de la instancia contextual.

#### Qué debe hacer una IA con este archivo

Una IA debe usarlo para:

- validar si una instancia contextual está completa;
- detectar campos faltantes;
- comprender los valores permitidos;
- revisar coherencia entre dimensiones;
- explicar al usuario qué significa cada decisión de configuración;
- y preparar la entrada del protocolo.

---

### 6.2. `protocolo-integrado-por-campo-de-salida.md`

#### Función

Define el **protocolo de composición dimensional**.

#### Qué contiene

Contiene reglas que indican cómo los valores de entrada contribuyen a campos específicos de la salida.

En vez de organizarse únicamente por dimensión de entrada, este protocolo se organiza por **campo de salida**.

Para cada campo de salida, debe indicar:

- qué campos de entrada contribuyen;
- qué valores activan qué contribuciones;
- qué tipo de acción protocolaria se aplica;
- qué interacciones son relevantes;
- y qué restricciones deben respetarse.

#### Responsabilidad dentro del artefacto

Este archivo responde a la pregunta:

> **¿cómo se transforma una instancia contextual en una manifestación codominial compuesta?**

#### Qué debe hacer una IA con este archivo

Una IA debe usarlo para:

- no improvisar la salida;
- convertir valores de entrada en acciones compositivas;
- decidir qué parte de la salida se fija, modula, restringe o deriva de cada valor;
- resolver tensiones entre contribuciones;
- y construir la manifestación final de forma trazable.

---

### 6.3. `salida-esperada.md`

#### Función

Define la estructura de la **manifestación codominial compuesta**.

#### Qué contiene

Contiene la forma esperada de la salida final, organizada en capas.

Entre sus componentes principales están:

- cabecera de identidad general de la pieza;
- capa macroestructural;
- capa de bloques;
- capa verbal;
- capa de superficie textual;
- capa de superficie escénica;
- capa visual generable;
- capa audiovisual generable;
- capa auditiva;
- capa de continuidad transversal;
- capa de justificación de composición.

#### Responsabilidad dentro del artefacto

Este archivo responde a la pregunta:

> **¿qué forma debe tener el resultado final para ser una salida válida?**

#### Qué debe hacer una IA con este archivo

Una IA debe usarlo para:

- estructurar la salida final;
- evitar entregar solo texto corrido;
- producir bloques completos;
- integrar recursos visuales, audiovisuales y auditivos cuando correspondan;
- y mostrar justificaciones dimensionales cuando sean necesarias.

---

## 7. Flujo operativo del artefacto

El flujo correcto de uso es:

```txt
1. Recibir o construir una instancia contextual
2. Validarla contra dimensiones-de-configuracion-detalladas.md
3. Aplicar protocolo-integrado-por-campo-de-salida.md
4. Construir salida según salida-esperada.md
5. Revisar coherencia y trazabilidad
6. Entregar manifestación codominial compuesta
```

En forma más extensa:

```txt
regiones_de_grafos_externos
  ↓
instancia_contextual_condensadora
  ↓
validacion_con_modelo_base
  ↓
aplicacion_del_protocolo_por_campo_de_salida
  ↓
construccion_de_cabecera_macroestructura_bloques_y_capas
  ↓
manifestacion_codominial_compuesta
```

---

## 8. Modos de uso del artefacto

Este artefacto puede ser usado en distintos modos.

---

### 8.1. Modo de ejecución directa

El usuario proporciona una instancia contextual completa.

La IA debe:

1. leer la instancia;
2. validar que esté completa;
3. aplicar el protocolo;
4. producir la manifestación codominial compuesta.

Este es el uso más limpio del artefacto.

---

### 8.2. Modo de revisión de instancia

El usuario proporciona una instancia contextual y pide revisarla.

La IA debe:

- verificar si todos los campos obligatorios están presentes;
- detectar contradicciones o tensiones;
- señalar campos débiles;
- proponer ajustes;
- explicar cómo esos cambios afectarían la salida.

No debe rehacer toda la instancia si el usuario solo quiere revisar una parte.

---

### 8.3. Modo de construcción asistida de instancia

El usuario no tiene una instancia completa, pero sí tiene un recorte conceptual, un subgrafo o una intención de salida.

La IA puede ayudar a construir la instancia contextual, pero debe recordar que:

- la transformación conceptual profunda no es responsabilidad principal de este artefacto;
- si falta un grafo externo o subgrafo preparado, la IA puede producir una aproximación provisional;
- pero debe marcar claramente qué partes son inferidas.

Este modo es válido, pero debe usarse con cuidado.

---

### 8.4. Modo de ensamblaje intergrafal

El usuario proporciona varias fuentes parciales:

- una región conceptual;
- una región atencional;
- una región receptoral;
- una configuración de comparecencia;
- un criterio de materialización;
- recursos visuales o auditivos.

La IA debe condensar esas regiones en una instancia contextual coherente.

Este modo es especialmente importante para la nueva arquitectura ACCD.

---

### 8.5. Modo de variación controlada

El usuario proporciona una instancia que ya funcionó y quiere generar variantes.

La IA puede modificar:

- público objetivo;
- régimen atencional;
- arquitectura macro;
- duración;
- comparecencia;
- recursos visuales;
- o acción esperada.

Pero debe conservar la trazabilidad de lo que cambió.

---

### 8.6. Modo de diagnóstico de salida

El usuario trae una salida ya generada y quiere evaluarla.

La IA debe revisar si la manifestación:

- corresponde a la instancia;
- aplica el protocolo;
- usa todas las dimensiones relevantes;
- mantiene coherencia entre bloques;
- integra recursos complementarios adecuadamente;
- y respeta el codominio video corto.

---

## 9. Alcances del artefacto

Este artefacto puede:

- producir guiones audiovisuales breves;
- estructurar videos para TikTok;
- generar texto oral por bloque;
- generar texto en pantalla;
- generar indicaciones escénicas;
- generar prompts para imagen en pantalla;
- generar prompts para video en pantalla;
- generar prompts o descripciones para recursos auditivos;
- organizar continuidad entre bloques;
- justificar la composición de cada bloque;
- revisar instancias contextuales;
- comparar variantes de una misma instancia;
- y funcionar como adaptador especializado dentro de ACCD.

---

## 10. Límites del artefacto

Este artefacto no debe intentar resolver por sí solo todo el trabajo de ACCD.

No es responsable principal de:

- construir el grafo conceptual general de un tema;
- diseñar una entidad federada completa;
- definir todos los campos atencionales de una estrategia comercial;
- construir subgrafos de serie desde cero;
- hacer minería conceptual profunda de grandes corpus;
- administrar evidencia histórica del rendimiento de piezas;
- ni reemplazar todos los demás adaptadores.

Puede colaborar en esas tareas si el usuario lo solicita, pero debe tratarlas como tareas externas o previas al adaptador.

---

## 11. Comportamiento esperado de una IA que use este artefacto

Una IA que use este artefacto debe comportarse como un operador estructural, no como un generador libre.

Debe:

- leer primero el README para comprender el sistema;
- identificar si tiene o no una instancia contextual válida;
- no saltar directamente de una idea cruda a una salida final si faltan dimensiones críticas;
- validar la instancia contra el modelo base;
- aplicar el protocolo campo por campo;
- producir la salida con la estructura esperada;
- y explicar las inferencias importantes.

Además, debe ser capaz de decir:

- qué dimensión está usando;
- qué campo está leyendo;
- qué valor activa una contribución;
- qué parte de la salida recibe esa contribución;
- y qué resultado produjo.

---

## 12. Reglas de uso obligatorio

### Regla 1 — No confundir idea en crudo con instancia contextual

Una idea en crudo no es automáticamente entrada válida del adaptador.

Debe convertirse antes en una instancia contextual o en un paquete suficientemente compatible.

### Regla 2 — No confundir grafo externo con instancia contextual

Un grafo externo puede alimentar una instancia, pero no es la instancia completa.

### Regla 3 — No confundir instancia con salida

La instancia configura.  
La salida manifiesta.

### Regla 4 — No omitir dimensiones sin justificación

Si una dimensión no se usa, debe explicarse por qué.

### Regla 5 — No producir texto corrido como salida final

La salida debe seguir la estructura de `salida-esperada.md`.

### Regla 6 — No tratar recursos visuales como decoración automática

Imagen, video y audio deben tener función compositiva.

### Regla 7 — No romper el codominio

La salida debe seguir perteneciendo a la familia video corto / TikTok.

---

## 13. Relación entre dimensiones y grafos externos

Una dimensión de configuración puede recibir valores derivados de una región de un grafo externo.

Ejemplos:

```txt
dimension_construccion_del_caso
  ← grafo_conceptual

 dimension_dinamica_atencional_y_procesual
  ← grafo_atencional

 dimension_acoplamiento_receptoral
  ← grafo_receptoral

 dimension_comparecencia_performativa
  ← grafo_identitario_performativo

 dimension_marco_de_materializacion
  ← grafo_de_codominios_y_formatos

 dimension_composicion_segmental_de_la_salida
  ← grafo_de_piezas_y_formatos

 dimension_recursos_complementarios_de_manifestacion
  ← grafo_de_recursos_visuales_audiovisuales_y_auditivos
```

Esta relación no es obligatoria en todos los usos simples, pero es la orientación arquitectónica de mayor alcance.

---

## 14. Relación entre instancia contextual y función de varias variables

La instancia contextual puede pensarse como una entrada compuesta por vectores.

Cada dimensión funciona como un vector de configuración.

El adaptador puede representarse de forma abstracta así:

```txt
adaptador_video_corto(
  vector_identidad_operativa,
  vector_orientacion_funcional,
  vector_escala_temporal,
  vector_acoplamiento_receptoral,
  vector_dinamica_atencional,
  vector_construccion_del_caso,
  vector_comparecencia,
  vector_marco_materializacion,
  vector_composicion_segmental,
  vector_recursos_complementarios
)
→ manifestacion_codominial_compuesta
```

En la nueva arquitectura, cada vector puede entenderse como resultado de una condensación:

```txt
vector_dimension_i = condensacion(region_de_grafo_i)
```

Así, el adaptador no recibe grafos completos, sino vectores ya condensados en la instancia contextual.

---

## 15. Criterios de validación de una instancia contextual

Una instancia contextual es válida si:

- declara las dimensiones esperadas;
- fija valores para los campos obligatorios;
- no mezcla niveles incompatibles;
- puede ser leída por el protocolo;
- tiene suficiente información para construir la salida;
- y sus valores son coherentes entre sí.

Una instancia es débil si:

- omite campos clave;
- mezcla información conceptual con salida ya redactada;
- no distingue receptor, atención y comparecencia;
- usa valores fuera del espacio permitido;
- o no permite justificar cómo se construirá la manifestación.

---

## 16. Criterios de validación de una salida

Una manifestación codominial compuesta es válida si:

- pertenece al codominio video corto / TikTok;
- tiene cabecera general;
- tiene capa macroestructural;
- está organizada en bloques;
- cada bloque tiene función local;
- cada bloque tiene capa verbal;
- incluye superficie textual cuando corresponde;
- incluye superficie escénica cuando corresponde;
- incluye recursos visuales, audiovisuales o auditivos cuando corresponde;
- mantiene continuidad transversal;
- y puede justificar sus decisiones compositivas.

---

## 17. Integración con otros adaptadores

Este artefacto debe ser entendido como un adaptador especializado dentro de una familia potencial de adaptadores.

Otros adaptadores podrían tener la misma forma general:

```txt
instancia_contextual
  ↓
protocolo_especifico
  ↓
manifestacion_codominial_especifica
```

Ejemplos posibles:

- adaptador para video largo;
- adaptador para carrusel;
- adaptador para newsletter;
- adaptador para clase;
- adaptador para landing;
- adaptador para hilo;
- adaptador para producto educativo.

Lo importante es que todos podrían recibir instancias contextuales, aunque cada uno tenga un protocolo y una salida distintos.

---

## 18. Relación con entidad federada

Dentro de ACCD, este adaptador puede operar como una rama de una entidad federada.

Una entidad federada puede producir muchas ramas o superficies a partir de un núcleo portable.

En ese marco:

- los grafos externos organizan el campo general;
- las instancias contextuales condensan regiones del campo;
- los adaptadores especializan la manifestación;
- las salidas producen evidencia;
- la evidencia puede retornar a la arquitectura.

Así, el adaptador de video corto no es una herramienta aislada.  
Es una superficie especializada de una arquitectura distribuida.

---

## 19. Orden recomendado de lectura

Cuando una IA use este artefacto, debe leer los archivos en este orden:

1. `README.md`
2. `dimensiones-de-configuracion-detalladas.md`
3. `protocolo-integrado-por-campo-de-salida.md`
4. `salida-esperada.md`

Si la tarea es solo revisar una salida, puede leer primero `salida-esperada.md`, pero debe volver al modelo base y al protocolo si necesita diagnosticar causas.

---

## 20. Resumen operativo final

Este artefacto debe entenderse así:

> **un adaptador especializado de la ACCD que recibe una instancia contextual —entendida como condensador intergrafal de valores distribuidos por dimensiones— y produce, mediante un protocolo de composición dimensional integrado por campo de salida, una manifestación codominial compuesta compatible con video corto / TikTok.**

La responsabilidad del artefacto no es construir todo el universo conceptual del tema, sino convertir una configuración contextual ya preparada en una salida audiovisual breve, estructurada, justificable y realizable.

---

## 21. Nota de mantenimiento

Este README debe actualizarse si cambia cualquiera de estas piezas:

- lista de dimensiones;
- campos del modelo base;
- estructura del protocolo;
- estructura de la salida esperada;
- relación entre grafos externos e instancia contextual;
- o alcance del adaptador dentro de ACCD.

Si el README no se actualiza, otra IA podría operar con una imagen obsoleta del artefacto.
