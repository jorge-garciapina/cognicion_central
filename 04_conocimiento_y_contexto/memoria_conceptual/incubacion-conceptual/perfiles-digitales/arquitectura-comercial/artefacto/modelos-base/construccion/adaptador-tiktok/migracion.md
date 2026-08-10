# Descripción de la migración hacia un modelo base unificado por campos

## Caso de uso: generación de guión para video corto, especialmente TikTok

---

## 0. Propósito de este documento

Este documento describe, de manera operativa y detallada, la **migración** desde la arquitectura actual basada en varios modelos relativamente separados hacia un **modelo base unificado por campos**.

Su función no es resolver todavía todos los detalles del nuevo modelo, sino dejar absolutamente claro:

- **qué se quiere migrar**;
- **por qué se quiere migrar**;
- **qué se espera conseguir**;
- **qué dimensiones actuales existen y qué pasará con cada una**;
- **cómo quedará reorganizado el sistema**;
- **cuál será la entrada esperada**;
- **cuál será la salida esperada**;
- **cómo deberá usarse el nuevo modelo**;
- y **qué decisiones deben mantenerse firmes** para no perder el rumbo durante el refinamiento.

Este texto debe servir como **guía de migración con baja fricción**.

---

## 1. Alcance y restricción fuerte de la migración

La migración **no** busca construir un modelo de “materialización textual general”.

La migración **sí** busca construir un modelo base unificado capaz de producir salidas dentro de una familia específica y coherente:

- **guión para video corto**
- y, de manera especialmente prioritaria,
- **guión para video de TikTok**

Esto significa que el nuevo modelo:

- **no debe abrirse** a materializaciones heterogéneas como:
  - texto para libro,
  - ensayo,
  - hilo,
  - newsletter,
  - artículo extenso,
  - etc.

La razón es estructural:

el modelo actual de codominio ya contiene dimensiones como:

- `esquema_de_texto_en_pantalla`
- `esquema_de_indicaciones_escenicas`
- `modalidad_de_guion`
- `duracion_objetivo`
- `segmentacion_interna`

y esas dimensiones pertenecen claramente a una familia de salida **guionizada, audiovisual, breve y segmentada**.

Por tanto, la máxima generalización válida del sistema no debe ser “texto en general”, sino:

> **guión para video corto**, con TikTok como caso privilegiado y plenamente modelado.

---

## 2. Objetivo general de la migración

El objetivo de la migración es este:

> **pasar de un conjunto de modelos separados —modelo de intención, modelo textual, modelo de codominio y un protocolo que intenta articularlos— a un solo modelo base unificado por campos, capaz de recibir una configuración global y producir una salida del tipo guión para video corto con estructura muy cercana a la que ya muestran los ejemplos de `mb-codominio/*`.**

Esto implica cuatro cambios de fondo:

1. dejar de pensar en “varios modelos + protocolo externo”;
2. pasar a pensar en “un solo modelo organizado por campos”;
3. reinterpretar lo protocolario como **lógica interna de articulación entre campos**;
4. mantener la salida dentro de una familia material coherente:
   - guiones para video corto,
   - especialmente TikTok.

---

## 3. Qué se espera conseguir con la migración

### 3.1. Unificación arquitectónica

Se espera que el sistema deje de sentirse como una suma de piezas externas que luego deben ensamblarse:

- instancia textual,
- intención,
- codominio,
- protocolo.

Y pase a sentirse como una **sola configuración global** distribuida por campos.

### 3.2. Reducción de redundancias aparentes

Se espera que las similitudes hoy dispersas entre modelos distintos dejen de verse como rarezas y pasen a ser entendidas como:

- pertenencia a un mismo campo,
- o proyecciones de una misma familia estructural.

### 3.3. Modularidad real

Se espera poder modificar partes relevantes del sistema sin rehacer toda la arquitectura.

Ejemplos:

- mantener el caso conceptual y cambiar la orientación funcional;
- mantener la intención y cambiar la comparecencia;
- mantener la comparecencia y cambiar la composición segmental;
- mantener casi todo y cambiar solo:
  - duración,
  - arquitectura macro,
  - texto en pantalla,
  - indicaciones escénicas.

### 3.4. Reusabilidad controlada

La reusabilidad buscada no es producir cualquier tipo de texto.

La reusabilidad correcta es esta:

- reusar configuraciones dentro de la familia de salida “guión para video corto”;
- cambiar componentes del guión sin reconstruir el sistema profundo;
- conservar la base estructural de una pieza y explorar variantes cercanas.

### 3.5. Mayor legibilidad del sistema

Se espera que quede claro:

- qué parte del sistema decide la función dominante;
- qué parte decide la adecuación al receptor;
- qué parte regula la atención;
- qué parte construye el caso;
- qué parte regula la comparecencia;
- y qué parte fija la composición del guión final.

### 3.6. Menor opacidad protocolaria

Se espera que el sistema ya no dependa de un protocolo concebido como archivo externo que “sabe coordinar” cosas heterogéneas, sino de una arquitectura donde la coordinación esté ya distribuida por campos y reglas internas.

### 3.7. Producción natural de salidas cercanas a `mb-codominio/*`

La migración debe hacer posible que el sistema produzca salidas muy cercanas a los ejemplos ya construidos en el modelo de codominio:

- con bloques;
- con segmentación;
- con duración razonable;
- con modalidad de guión;
- con comparecencia verbal;
- con texto en pantalla cuando corresponda;
- con indicaciones escénicas cuando corresponda.

Ésta es una condición decisiva del éxito de la migración.

---

## 4. Qué no busca la migración

La migración **no** busca:

- construir un supermodelo abstracto para “cualquier texto”;
- diluir el codominio actual hasta perder especificidad;
- permitir salidas incompatibles con la familia de video corto;
- convertir todas las dimensiones en submodelos innecesarios;
- ni producir un sistema más elegante pero menos utilizable.

La migración **sí** busca:

- unidad arquitectónica;
- modularidad real;
- reusabilidad localizada;
- y mejor trazabilidad,
  sin abandonar nunca la familia de salida guionizada que justifica el proyecto.

---

## 5. Inventario de los modelos actuales y destino de cada dimensión

---

## 5.1. Modelo actual: `mb-intencion.md`

### `formulacion_canonica`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de identidad operativa de la realización.
- **Razón:** fija cómo se declara la realización, no su contenido ni su salida.

### `funcion_dominante`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de orientación funcional-pragmática.
- **Razón:** se articula con efecto buscado, acción esperada y configuración discursiva.

### `efecto_buscado`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de orientación funcional-pragmática.
- **Razón:** prolonga la función al plano del efecto en el receptor.

### `accion_esperada`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de orientación funcional-pragmática.
- **Razón:** prolonga la función al plano conductual o interactivo.

### `nivel_de_especificidad`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de identidad operativa de la realización.
- **Razón:** describe el grado de precisión de la realización.

### `alcance_de_realizacion`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de escala temporal y resolución realizativa.
- **Razón:** fija si la pieza es única, seriada, de transición, de continuidad, etc.

### `prioridad_de_intencion`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de identidad operativa de la realización.
- **Razón:** fija jerarquía operativa.

### `publico_objetivo_inmediato`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de acoplamiento receptoral.
- **Razón:** describe el receptor supuesto y su cercanía cognitiva con el contenido.

### `estado_atencional`

- **Acción:** migra.
- **Nuevo destino:** campo de dinámica atencional y procesual.
- **Razón:** describe más bien la condición de entrada del procesamiento que el simple perfil de público.

### `horizonte_temporal`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de escala temporal y resolución realizativa.
- **Razón:** fija en qué escala temporal quiere operar la realización.

### `regimen_de_activacion_atencional`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de dinámica atencional y procesual.
- **Razón:** se articula directamente con estado atencional y ritmo/legibilidad.

### `regimen_de_resolucion_buscada`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de escala temporal y resolución realizativa.
- **Razón:** fija cómo se distribuye la resolución en el recorrido de la pieza.

---

## 5.2. Modelo actual: `mb-arquitectura-textual.md`

### `configuracion_conceptual`

- **Acción:** se promueve.
- **Nuevo destino:** submodelo explícito de construcción conceptual.
- **Nuevo campo:** campo de construcción del caso.
- **Razón:** ya no se comporta como una dimensión simple; contiene estructura interna propia.

### `configuracion_narrativa`

- **Acción:** se conserva con nota.
- **Nuevo destino:** campo de organización secuencial.
- **Razón:** sigue funcionando como dimensión fuerte, aunque es candidata a submodelo ligero si continúa densificándose.

### `configuracion_lexica`

- **Acción:** se promueve.
- **Nuevo destino:** submodelo explícito de adecuación léxico-formulativa.
- **Nuevo campo:** campo de acoplamiento receptoral.
- **Razón:** regula la adecuación verbal al receptor y ya posee demasiada estructura para seguir siendo dimensión simple.

### `configuracion_de_voz_o_comparecencia`

- **Acción:** se promueve.
- **Nuevo destino:** submodelo explícito de comparecencia performativa.
- **Nuevo campo:** campo de comparecencia performativa.
- **Razón:** articula una región de voz/comparecencia suficientemente densa y conectada con la materialización.

### `configuracion_de_ritmo_y_legibilidad`

- **Acción:** se promueve.
- **Nuevo destino:** submodelo explícito de dinámica procesual.
- **Nuevo campo:** campo de dinámica atencional y procesual.
- **Razón:** regula procesamiento, legibilidad y sostenimiento atencional; ya no es un rasgo simple del texto.

### `configuracion_discursiva`

- **Acción:** migra.
- **Nuevo destino:** campo de orientación funcional-pragmática.
- **Razón:** textualiza la función dominante de la realización; no debe seguir agrupada con narrativa.

---

## 5.3. Modelo actual: `mb-codominio/mb-codominio.md`

### `clase_de_materializacion`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de marco de materialización.
- **Razón:** fija la clase general de salida.

### `plataforma`

- **Acción:** se conserva como dimensión simple.
- **Nuevo destino:** campo de marco de materialización.
- **Razón:** fija el entorno general de realización.

### `aplicacion_de_plataforma`

- **Acción:** se conserva con nota.
- **Nuevo destino:** campo de marco de materialización.
- **Razón:** sigue siendo útil distinguir plataforma de aplicación concreta, aunque en algunos casos muy específicos parezca redundante.

### `modalidad_de_guion`

- **Acción:** migra.
- **Nuevo destino:** campo de comparecencia performativa.
- **Razón:** regula la modalidad expresiva o performativa del guión más que su simple composición material.

### `duracion_objetivo`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de composición segmental de la salida.
- **Razón:** participa de la misma lógica que arquitectura macro, segmentación y longitud de segmentos.

### `arquitectura_macro`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de composición segmental de la salida.
- **Razón:** describe la gran organización del guión ya materializado.

### `segmentacion_interna`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de composición segmental de la salida.
- **Razón:** fija cómo se divide la pieza.

### `unidad_de_segmento`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de composición segmental de la salida.
- **Razón:** fija la célula compositiva mínima.

### `modo_de_comparecencia_verbal`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de comparecencia performativa.
- **Razón:** pertenece claramente a la misma familia que voz/comparecencia y modalidad de guión.

### `esquema_de_texto_en_pantalla`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de inscripción de superficie de la salida.
- **Razón:** regula marcas visibles de superficie, no comparecencia ni composición profunda.

### `esquema_de_indicaciones_escenicas`

- **Acción:** migra.
- **Nuevo destino:** campo de inscripción de superficie de la salida.
- **Razón:** es más análogo a `esquema_de_texto_en_pantalla` que al régimen de comparecencia performativa.

### `longitud_por_segmento`

- **Acción:** se reagrupa.
- **Nuevo destino:** campo de composición segmental de la salida.
- **Razón:** pertenece al mismo problema que duración, segmentación y tamaño de unidad.

---

## 6. Nuevos campos del modelo unificado y sus componentes

---

## 6.1. Campo de identidad operativa de la realización

### Función

Describir qué operación está siendo declarada, con qué precisión y con qué centralidad.

### Componentes

- `formulacion_canonica`
- `nivel_de_especificidad`
- `prioridad_de_intencion`

### Qué resuelve

Evita que el sistema reciba una realización mal definida o demasiado ambigua.

### Ejemplo

No es lo mismo entrar con:

- “explicar críticamente el problema del mínimo de palabras”,

que con:

- “hacer una pieza breve de captación sobre la diferencia entre cantidad y pensamiento”.

Ambas pueden compartir tema, pero no son la misma identidad operativa.

---

## 6.2. Campo de orientación funcional-pragmática

### Función

Describir qué quiere hacer la pieza, qué efecto busca producir y qué acción espera activar.

### Componentes

- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `configuracion_discursiva`

### Qué resuelve

Fija el vector pragmático de la realización.

### Ejemplo

Dos configuraciones distintas sobre un mismo caso:

#### Configuración A

- función dominante: enseñar
- efecto buscado: comprensión
- acción esperada: guardar / reinterpretar
- configuración discursiva: explicativa

#### Configuración B

- función dominante: captar atención
- efecto buscado: sorpresa
- acción esperada: comentar / seguir viendo
- configuración discursiva: captativa con contraste

La base conceptual puede ser similar, pero el guión final cambia por completo.

---

## 6.3. Campo de escala temporal y resolución realizativa

### Función

Describir la escala de la pieza y cómo distribuye su resolución en el tiempo.

### Componentes

- `alcance_de_realizacion`
- `horizonte_temporal`
- `regimen_de_resolucion_buscada`

### Qué resuelve

Permite distinguir, por ejemplo:

- pieza única con cierre rápido,
- apertura de serie,
- pieza de continuidad,
- pieza de transición,
- cierre de secuencia.

### Ejemplo

No es lo mismo un TikTok que:

- resuelve completamente su idea en 35 segundos,

que un TikTok que:

- abre una tensión conceptual y deja el desarrollo para otra pieza.

---

## 6.4. Campo de acoplamiento receptoral

### Función

Describir para quién está orientada la pieza y cómo debe ajustarse verbalmente a ese receptor.

### Componentes

- `publico_objetivo_inmediato`
- submodelo explícito de adecuación léxico-formulativa

### Submodelo explícito sugerido

`adecuacion_lexico_formulativa` con ejes como:

- registro predominante
- densidad terminológica
- grado de abstracción
- accesibilidad léxica
- variación léxica

### Qué resuelve

Hace posible ajustar el guión a:

- audiencia fría,
- audiencia tibia,
- audiencia caliente,
- público que reconoce el problema pero no lo entiende,
- público que ya comprende parcialmente,
- etc.

### Ejemplo

No se formula igual un guión para:

- personas que jamás pensaron el problema,
  que para:
- personas que ya lo viven pero no lo conceptualizan.

---

## 6.5. Campo de dinámica atencional y procesual

### Función

Describir cómo entra, se sostiene y se procesa la atención durante el recorrido de la pieza.

### Componentes

- `estado_atencional`
- `regimen_de_activacion_atencional`
- submodelo explícito de dinámica procesual

### Submodelo explícito sugerido

`dinamica_procesual` con ejes como:

- explicitud
- continuidad
- fricción interpretativa
- compresión
- recapitulación

### Qué resuelve

Hace posible diferenciar, por ejemplo:

- una pieza que necesita enganchar en el primer segundo y sostener brevemente;
- una pieza que puede entrar más despacio;
- una pieza que exige recapitulación;
- una pieza que soporta mayor compresión y menor explicitud.

### Ejemplo

Un público disperso con entrada fría exige:

- alta explicitud,
- baja fricción,
- compresión media-alta,
- y una activación inmediata.

---

## 6.6. Campo de construcción del caso

### Función

Describir el contenido estructural del caso y su organización secuencial.

### Componentes

- submodelo explícito de construcción conceptual
- `configuracion_narrativa`

### Submodelo explícito sugerido

`construccion_conceptual`, que reemplace a `configuracion_conceptual` como dimensión simple.

### Qué resuelve

Permite declarar:

- cuáles son las ideas nucleares;
- cuáles son complementarias;
- cuáles contrastan;
- cuáles derivan;
- cómo se relacionan;
- y cómo se organiza el despliegue del caso.

### Ejemplo

Para una pieza sobre el problema del mínimo de palabras, el caso podría contener:

- idea nuclear 1: cantidad no equivale a pensamiento;
- idea nuclear 2: la estructura de la idea es más importante que su inflación verbal;
- idea derivada: la IA debería servir para desglosar ideas.

Y la narrativa podría ser:

- contraste inicial → explicación → cierre propositivo.

---

## 6.7. Campo de comparecencia performativa

### Función

Describir cómo comparece la pieza como presencia verbal y modalidad de ejecución.

### Componentes

- submodelo explícito de comparecencia performativa
- `modalidad_de_guion`
- `modo_de_comparecencia_verbal`

### Submodelo explícito sugerido

`comparecencia_performativa`, con ejes como:

- cercanía
- autoridad
- calidez
- intensidad
- sobriedad

### Qué resuelve

Fija:

- cómo “suena” la pieza;
- qué tipo de presencia asume;
- y bajo qué modalidad performativa se realiza el guión.

### Ejemplo

No es lo mismo una pieza:

- muy cercana, intensa y oral directa,

que una pieza:

- más sobria, guiada y estructurada.

Ambas pueden compartir el mismo caso, pero ya no son el mismo guión.

---

## 6.8. Campo de marco de materialización

### Función

Describir el entorno general de la salida.

### Componentes

- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`

### Qué resuelve

Permite fijar que el resultado pertenece a una clase de salida específica.

### Ejemplo

Para este proyecto, lo esperable es algo como:

- clase de materialización: guión breve audiovisual
- plataforma: TikTok
- aplicación de plataforma: video corto vertical

---

## 6.9. Campo de composición segmental de la salida

### Función

Describir la composición temporal y segmental del guión.

### Componentes

- `duracion_objetivo`
- `arquitectura_macro`
- `segmentacion_interna`
- `unidad_de_segmento`
- `longitud_por_segmento`

### Qué resuelve

Hace posible modelar salidas como las de `mb-codominio/*`, donde ya importa:

- cuánto dura la pieza;
- cómo está dividida;
- cuántos bloques tiene;
- qué tamaño tiene cada uno.

### Ejemplo

Una configuración típica podría ser:

- duración: breve
- arquitectura macro: apertura / desarrollo / cierre
- segmentación interna: 3 bloques
- unidad de segmento: bloque corto oralizable
- longitud por segmento: breve

---

## 6.10. Campo de inscripción de superficie de la salida

### Función

Describir las marcas visibles o explícitas que acompañan la salida.

### Componentes

- `esquema_de_texto_en_pantalla`
- `esquema_de_indicaciones_escenicas`

### Qué resuelve

Permite decidir:

- si habrá texto en pantalla;
- cuánto;
- con qué función;
- y qué tipo de indicaciones escénicas deben acompañar la realización.

### Ejemplo

Dos piezas pueden compartir casi todo, pero diferir en:

- una con texto en pantalla mínimo e indicaciones escénicas mínimas;
- otra con texto de refuerzo por segmento y escenificación más visible.

---

## 7. Entrada esperada del nuevo modelo

La entrada del nuevo modelo no debe entenderse como varios modelos externos pegados después.

La entrada esperada debe entenderse como:

> **una configuración global de valores distribuida en los campos del modelo unificado**.

Esto puede representarse de dos maneras:

### A. Ontológicamente

Como una sola instancia global del modelo base unificado.

### B. Operativamente

Como uno o varios documentos que, juntos, expresan esa configuración global.

La segunda opción puede ser útil para implementación, pero no debe ocultar la primera.

---

## 8. Forma de la entrada esperada

Una entrada válida debería contener valores para:

- identidad operativa;
- orientación funcional-pragmática;
- escala temporal y resolución;
- acoplamiento receptoral;
- dinámica atencional y procesual;
- construcción del caso;
- comparecencia performativa;
- marco de materialización;
- composición segmental de salida;
- inscripción de superficie.

### Ejemplo mínimo de entrada global

# Ejemplo de entrada sin valores

## Correspondencia 1:1 con los campos 6.1–6.10

> Este ejemplo muestra **solo la forma de la entrada**.  
> No fija ningún valor.  
> Su función es servir como plantilla estructural correcta mientras el modelo sigue refinándose.

```text
campo_identidad_operativa_de_la_realizacion:
  formulacion_canonica:
  nivel_de_especificidad:
  prioridad_de_intencion:

campo_orientacion_funcional_pragmatica:
  funcion_dominante:
  efecto_buscado:
  accion_esperada:
  configuracion_discursiva:

campo_escala_temporal_y_resolucion_realizativa:
  alcance_de_realizacion:
  horizonte_temporal:
  regimen_de_resolucion_buscada:

campo_acoplamiento_receptoral:
  publico_objetivo_inmediato:
  adecuacion_lexico_formulativa:
    registro_predominante:
    densidad_terminologica:
    grado_de_abstraccion:
    accesibilidad_lexica:
    variacion_lexica:

campo_dinamica_atencional_y_procesual:
  estado_atencional:
  regimen_de_activacion_atencional:
  dinamica_procesual:
    explicitud:
    continuidad:
    friccion_interpretativa:
    compresion:
    recapitulacion:

campo_construccion_del_caso:
  construccion_conceptual:
    ideas_nucleares:
    ideas_complementarias:
    ideas_de_puente:
    ideas_contrastivas:
    ideas_derivadas:
    relaciones_entre_ideas:
  configuracion_narrativa:

campo_comparecencia_performativa:
  comparecencia_performativa:
    cercania:
    autoridad:
    calidez:
    intensidad:
    sobriedad:
  modalidad_de_guion:
  modo_de_comparecencia_verbal:

campo_marco_de_materializacion:
  clase_de_materializacion:
  plataforma:
  aplicacion_de_plataforma:

campo_composicion_segmental_de_la_salida:
  duracion_objetivo:
  arquitectura_macro:
  segmentacion_interna:
  unidad_de_segmento:
  longitud_por_segmento:

campo_inscripcion_de_superficie_de_la_salida:
  esquema_de_texto_en_pantalla:
  esquema_de_indicaciones_escenicas:
```

---

## 9. Salida esperada del nuevo modelo

La salida del sistema debe permanecer dentro de una familia muy precisa:

> **guión para TikTok o, como máxima generalización válida, guión para video corto**

La salida no debe abrirse a materializaciones heterogéneas.

### Características esperadas de la salida

La salida final debe poder contener cosas como:

- bloques reconocibles;
- arquitectura macro clara;
- segmentación interna;
- modalidad de guión;
- distribución verbal por segmento;
- texto en pantalla cuando corresponda;
- indicaciones escénicas cuando correspondan.

### Ejemplo de un bloque de la salida

#### Plantilla estructural de un bloque de guión para video corto

> Este ejemplo **no fija valores concretos**.  
> Su función es mostrar **cómo podría verse un bloque individual** dentro de la salida final del sistema.

```yaml
bloque:
  id:
  tipo_de_bloque:
  funcion_estructural:
  objetivo_local:
  relacion_con_ideas_del_caso:
    ideas_nucleares_activadas:
    ideas_complementarias_activadas:
    ideas_de_contraste_activadas:
    ideas_derivadas_activadas:
  posicion_en_arquitectura_macro:
  duracion_estimada:
  longitud_verbal_estimada:
  modo_de_comparecencia_verbal:
  modalidad_de_guion:
  comparecencia_performativa:
    cercania:
    autoridad:
    calidez:
    intensidad:
    sobriedad:
  texto_oral:
  texto_en_pantalla:
    presencia:
    funcion:
    contenido:
  indicaciones_escenicas:
    presencia:
    funcion:
    contenido:
  continuidad_con_bloque_anterior:
  proyeccion_hacia_bloque_siguiente:
  observaciones_de_validacion:
```

Éste es el tipo de salida que el nuevo modelo debe poder producir de forma natural.

## Descripción de cada parte del bloque

### `id`

Identificador del bloque dentro de la pieza.

Sirve para:

- distinguir bloques entre sí;
- referirlos en revisiones;
- y mantener trazabilidad dentro de la salida completa.

Ejemplos posibles en una futura implementación:

- `bloque_1`
- `apertura_1`
- `desarrollo_2`

---

### `tipo_de_bloque`

Indica qué clase de bloque es dentro de la arquitectura macro.

No debe confundirse con la arquitectura macro completa.
Solo fija la función local del bloque.

Ejemplos de clases posibles:

- apertura
- desarrollo
- cierre
- giro
- recapitulacion
- transicion

---

### `funcion_estructural`

Describe qué papel cumple este bloque dentro del guión total.

No dice todavía “qué texto dice”, sino **qué hace** dentro del recorrido.

Ejemplos de función estructural:

- abrir atención
- introducir contraste
- explicar idea nuclear
- reformular
- cerrar con síntesis
- activar acción final

---

### `objetivo_local`

Fija el objetivo inmediato del bloque.

Mientras `funcion_estructural` lo ubica dentro del conjunto, `objetivo_local`
aclara qué debe lograr específicamente ese tramo.

Ejemplos:

- producir reconocimiento inmediato
- volver explícita una oposición
- hacer comprensible una idea
- condensar el criterio final

---

### `relacion_con_ideas_del_caso`

Este subbloque permite que la salida siga conectada con el campo
`campo_construccion_del_caso`.

Sirve para declarar qué ideas del caso están siendo activadas en este bloque.

#### `ideas_nucleares_activadas`

Lista de ideas nucleares que entran efectivamente en el bloque.

#### `ideas_complementarias_activadas`

Lista de ideas de apoyo o precisión.

#### `ideas_de_contraste_activadas`

Lista de ideas cuya función es tensionar o diferenciar.

#### `ideas_derivadas_activadas`

Lista de ideas que aparecen como consecuencia o ampliación.

Esto es importante porque evita que el bloque se vuelva un fragmento arbitrario
despegado de la configuración conceptual.

---

### `posicion_en_arquitectura_macro`

Indica dónde cae este bloque en la composición general de la pieza.

No reemplaza a `tipo_de_bloque`, sino que lo sitúa dentro de la secuencia mayor.

Ejemplos:

- primer bloque
- segundo bloque
- bloque final
- segmento intermedio

---

### `duracion_estimada`

Fija la duración prevista del bloque.

No tiene que ser necesariamente numérica en esta etapa.
Puede ser:

- muy_breve
- breve
- media
- extensa_controlada

Su función es mantener coherencia con:

- `duracion_objetivo`
- `segmentacion_interna`
- `longitud_por_segmento`

---

### `longitud_verbal_estimada`

Describe la cantidad verbal aproximada del bloque.

No es aún texto concreto, sino una restricción de volumen verbal.

Ejemplos posibles:

- minima
- breve
- media
- alta_compresion

Esto ayuda a no producir bloques incompatibles con el codominio.

---

### `modo_de_comparecencia_verbal`

Trae al bloque la dimensión correspondiente del campo
`campo_comparecencia_performativa`.

Sirve para declarar cómo debe sonar verbalmente ese bloque.

Ejemplos posibles:

- oral_directo
- oral_guiado
- oral_escenico
- oral_mixto

---

### `modalidad_de_guion`

También proviene del campo de comparecencia performativa, pero fija la modalidad
más general del tramo.

Ejemplos:

- oral_directo_reflexivo
- oral_directo_enfatico
- oral_guiado_explicativo
- oral_contrastivo

---

### `comparecencia_performativa`

Este subbloque baja a nivel local la región performativa del caso.

Puede contener:

- `cercania`
- `autoridad`
- `calidez`
- `intensidad`
- `sobriedad`

No significa necesariamente que cada bloque cambie radicalmente estos valores,
pero sí permite, si se quiere, modularlos localmente.

Por ejemplo:

- apertura con intensidad alta,
- desarrollo con intensidad media,
- cierre con sobriedad más alta.

---

### `texto_oral`

Aquí iría el contenido oral efectivo del bloque.

En esta plantilla se deja vacío porque la función del ejemplo es mostrar la
estructura y no fijar todavía realizaciones textuales concretas.

Éste es el campo donde el bloque ya comparece como fragmento de guión.

---

### `texto_en_pantalla`

Este subbloque conecta con el campo
`campo_inscripcion_de_superficie_de_la_salida`.

#### `presencia`

Indica si el bloque lleva o no texto en pantalla.

#### `funcion`

Indica para qué sirve el texto en pantalla en este bloque.

Ejemplos:

- refuerzo
- contraste
- subtitulo_conceptual
- palabra_clave
- resumen_breve

#### `contenido`

Aquí se colocaría el texto visible correspondiente.

---

### `indicaciones_escenicas`

También conecta con el campo
`campo_inscripcion_de_superficie_de_la_salida`.

#### `presencia`

Indica si existen indicaciones escénicas en este bloque.

#### `funcion`

Indica para qué sirven.

Ejemplos:

- marcar énfasis
- sugerir pausa
- orientar gesto
- orientar encuadre
- orientar transición

#### `contenido`

Aquí se describe la indicación correspondiente.

---

### `continuidad_con_bloque_anterior`

Sirve para declarar cómo se conecta este bloque con el anterior.

Es útil sobre todo cuando:

- la continuidad es alta,
- hay contraste,
- o hay que justificar un giro.

Ejemplos:

- continuidad_directa
- profundizacion
- contraste
- reformulacion
- consecuencia

---

### `proyeccion_hacia_bloque_siguiente`

Describe cómo este bloque prepara el siguiente.

Es útil para mantener legible la articulación interna del guión.

Ejemplos:

- abre_pregunta
- deja_tension
- prepara_explicacion
- prepara_cierre
- no_aplica

---

### `observaciones_de_validacion`

Campo libre para registrar si el bloque:

- cumple su función estructural;
- mantiene coherencia con el caso;
- respeta la duración;
- no rompe el modo de comparecencia;
- y sigue siendo compatible con el codominio.

---

## Lectura resumida

Este bloque muestra que una salida final no tiene por qué pensarse solo como
texto corrido.

También puede entenderse como una **articulación de bloques** donde cada bloque
porta, al menos, estas capas:

1. una función estructural;
2. una relación con las ideas del caso;
3. una forma de comparecencia;
4. una restricción de duración y longitud;
5. una realización oral;
6. y una posible inscripción de superficie.

---

## Fórmula breve

Un bloque de salida, dentro del nuevo modelo, debería ser entendido como una
unidad local de realización que articula:

- función estructural,
- contenido conceptual activado,
- comparecencia performativa,
- composición temporal,
- texto oral,
- y marcas de superficie.

---

## 10. Forma de uso del nuevo modelo

El nuevo modelo no se usará como un texto teórico ni como un prompt plano.

Se usará como una **arquitectura de configuración del guión**.

### Uso previsto

1. se fija una configuración global por campos;
2. se revisa su coherencia interna;
3. se valida que pertenezca a la familia de salida correcta;
4. se genera una salida del tipo guión para video corto;
5. se ajustan campos específicos sin rehacer toda la arquitectura.

### Qué permite este uso

Permite, por ejemplo:

- conservar el caso conceptual y cambiar la función dominante;
- conservar la intención y cambiar la comparecencia;
- conservar casi todo y cambiar solo:
  - duración,
  - segmentación,
  - texto en pantalla,
  - indicaciones escénicas.

Ésa es la modularidad que la migración quiere hacer posible.

---

## 11. Qué debe saberse antes de comenzar a construir el nuevo modelo

### 11.1. El sistema no quiere producir “textos en general”

Quiere producir una familia acotada de salidas:

- guiones para video corto,
- especialmente TikTok.

### 11.2. La modularidad no debe romper la familia de salida

Cambiar partes del sistema no debe abrirlo a codominios incompatibles con su arquitectura actual.

### 11.3. La configuración global es una sola

Aunque se documenten campos por separado, ontológicamente la entrada debe entenderse como una única configuración global.

### 11.4. No todas las dimensiones tienen el mismo estatuto

Algunas deben seguir como dimensiones simples.
Otras deben promoverse a submodelos.
Otras deben migrar o reagruparse.

### 11.5. El nuevo modelo no elimina lo protocolario

Lo protocolario sigue existiendo, pero ya no como archivo externo opaco, sino como lógica interna de articulación entre campos.

### 11.6. La salida final debe seguir pareciéndose a `mb-codominio/*`

Ésta es una restricción fuerte de diseño y de validación.

### 11.7. La claridad arquitectónica es más importante que la expansión indiscriminada

No se trata de añadir más y más campos, sino de separar bien las responsabilidades.

---

## 12. Señales de que la migración está bien hecha

La migración podrá considerarse bien encaminada si ocurre esto:

1. ya no se siente que texto, intención y codominio sean modelos “pegados” externamente;
2. las dimensiones parecidas dejan de generar sospecha de redundancia;
3. el sistema puede variar partes sin rehacer todo;
4. la salida sigue siendo claramente un guión para video corto;
5. y el resultado final se parece mucho a la familia de ejemplos de `mb-codominio/*`.

---

## 13. Señales de que la migración se está desviando

La migración se estaría desviando si:

- el modelo empieza a aceptar salidas demasiado heterogéneas;
- la salida ya no se parece a un guión para video corto;
- todo se convierte en submodelo y se pierde claridad;
- o el nuevo modelo se vuelve tan abstracto que deja de servir para producir piezas reales.

---

## 14. Fórmula final de la migración

La migración puede formularse así:

> **La migración busca construir un modelo base unificado por campos cuya entrada sea una configuración global de valores distribuidos en regiones de responsabilidad diferenciadas —identidad operativa, orientación funcional, escala temporal, acoplamiento receptoral, dinámica atencional, construcción del caso, comparecencia performativa y materialización— y cuya función sea producir, de manera coherente, reusable y legible, una base suficiente para generar salidas del tipo guión para TikTok o, como máxima generalización válida, guión para video corto, manteniendo una forma final muy cercana a la que ya muestran los ejemplos de `mb-codominio/*`.**

---

## 15. Cierre operativo

Este documento debe leerse como guía de migración.

No resuelve todavía el nuevo modelo en detalle, pero deja fijado:

- el objetivo;
- el alcance;
- la restricción de salida;
- el inventario de migración;
- los nuevos campos;
- la entrada esperada;
- la salida esperada;
- la forma de uso;
- y las condiciones que deben mantenerse para que el refinamiento posterior no pierda dirección.

Con esto, la migración puede comenzar con mucha menos fricción.
