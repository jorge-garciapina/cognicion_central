https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7d1934-8140-83e8-8779-9138307c87b2

# `INTERACTIVE_INTERFACE`

## Proyección interactiva creada y ejecutada dentro del chat

```yaml
document:
  id: AC-HIA-PROJECTION-INTERACTIVE-INTERFACE-001
  title: INTERACTIVE_INTERFACE
  version: 0.2.0
  lifecycle: PROPOSED
  representation: FRONTEND_PROJECTION_GUIDE

compatibility:
  package_id: PC-AC-HIA
  package_name: PAQUETE_COGNITIVO_ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  package_version_reference: 0.2.0

recommended_location:
  path: 02_modelo_operativo/proyecciones_frontend/01_interactive_interface.md
  operation: ADD_OR_REPLACE_PREVIOUS_PROPOSAL
```

---

## 1. Qué es realmente una `INTERACTIVE_INTERFACE`

Una `INTERACTIVE_INTERFACE` es una **interfaz visual e interactiva que ChatGPT debe crear y mostrar directamente dentro de la conversación**.

El resultado esperado no es una explicación de la interfaz, un documento que describa cómo podría verse, una imagen estática ni un archivo que el humano tenga que descargar y abrir. El resultado es la interfaz misma, insertada en la respuesta del chat y utilizable desde ahí.

En su realización habitual, se comporta como una pequeña aplicación de página única o SPA embebida en la conversación:

- aparece dentro del mensaje de ChatGPT;
- contiene una o varias vistas coordinadas;
- permite seleccionar, desplegar, filtrar, comparar o recorrer información;
- actualiza localmente la representación cuando el humano usa sus controles;
- no necesita recargar la conversación;
- no requiere que el humano descargue nada;
- no necesita abrir un sitio externo para cumplir su función básica.

```text
COMANDO HUMANO
“Genera una INTERACTIVE_INTERFACE sobre X”

RESULTADO CORRECTO
una interfaz ejecutable y visible dentro de la respuesta del chat

RESULTADO INCORRECTO
una descripción textual de la interfaz que podría construirse
```

### Definición compacta

> `INTERACTIVE_INTERFACE` es una proyección frontend construida por ChatGPT como una interfaz ejecutable dentro del chat, mediante la cual una estructura o conjunto de información se convierte en vistas, componentes visuales y controles que permiten inspeccionarlo de manera activa.

---

## 2. Qué debe entregar ChatGPT

Cuando el humano solicita una `INTERACTIVE_INTERFACE`, ChatGPT debe producir una superficie interactiva completa que pueda utilizarse inmediatamente.

La respuesta debe contener:

1. **una interfaz ya construida**;
2. **una primera vista útil sin exigir configuración previa**;
3. **componentes visuales adecuados a la estructura representada**;
4. **controles que realicen operaciones perceptibles y comprensibles**;
5. **contenido suficiente para que la interfaz sea una manifestación del objeto solicitado**;
6. **una breve explicación externa sólo cuando sea necesaria para usar o interpretar la interfaz**.

La respuesta no debe limitarse a:

- enumerar las pestañas que tendría la interfaz;
- mostrar un wireframe;
- devolver pseudocódigo;
- entregar solamente HTML como texto dentro de un bloque de código;
- presentar una captura estática;
- describir futuras funcionalidades;
- generar un archivo descargable como única forma de acceso;
- pedir al humano que instale dependencias o ejecute un servidor.

---

## 3. Naturaleza de la proyección

La interfaz no debe intentar mostrar indiscriminadamente todo lo que existe sobre un tema. Debe seleccionar y representar aquello que ayuda a realizar una operación cognitiva concreta.

```text
INFORMACIÓN O ESTRUCTURA DISPONIBLE
→ selección de lo relevante
→ elección de una forma visual
→ organización espacial
→ incorporación de controles
→ interfaz interactiva dentro del chat
```

La pregunta fundamental no es:

> “¿Qué elementos de interfaz puedo añadir?”

La pregunta fundamental es:

> “¿Qué debe poder ver, relacionar, comparar o recorrer el humano que sería más difícil de comprender en una respuesta lineal?”

La interfaz debe responder primero a esa necesidad. Los controles, pestañas, grafos y paneles aparecen después.

---

## 4. Las tres decisiones principales

Antes de construir la interfaz, ChatGPT debe resolver tres decisiones.

### 4.1 Qué se debe comprender

Debe identificarse el objetivo perceptivo o cognitivo principal.

Ejemplos:

- comprender relaciones entre conceptos;
- recorrer una jerarquía;
- observar una secuencia;
- comparar entidades;
- inspeccionar el estado de tareas;
- examinar variaciones por escala;
- explorar una distribución espacial;
- entender diferencias entre versiones;
- seleccionar una unidad y consultar sus detalles.

### 4.2 Qué debe representarse

Debe elegirse el conjunto mínimo suficiente de unidades y relaciones.

Ejemplo:

```yaml
selection:
  focal_units:
    - EXPECTED_RESULT
    - CORTE_ORIENTADO
    - RED_PROYECTADA
    - RED_REALIZADA
    - RED_ACTIVADA

  relations:
    - EXPECTED_RESULT ORIENTA CORTE_ORIENTADO
    - CORTE_ORIENTADO DELIMITA RED_PROYECTADA
    - RED_PROYECTADA GUIA RED_REALIZADA
    - RED_REALIZADA PROVEE_ESTIMULOS_PARA RED_ACTIVADA

  omitted:
    - historia_completa_de_cada_concepto
    - documentos_no_necesarios_para_la_vista
```

La selección evita dos fallos opuestos:

- **insuficiencia:** la interfaz no contiene las relaciones necesarias;
- **saturación:** la interfaz intenta mostrar todo y deja de comunicar una estructura reconocible.

### 4.3 Qué representación corresponde a esa estructura

La forma visual debe elegirse según el tipo de relación dominante.

| Lo que se necesita comprender | Representación dominante              |
| ----------------------------- | ------------------------------------- |
| Relaciones entre unidades     | Grafo interactivo                     |
| Jerarquía o pertenencia       | Árbol navegable                       |
| Secuencia o transformación    | Flujo por etapas o línea temporal     |
| Comparación exacta            | Tabla interactiva o paneles alineados |
| Estado operativo              | Panel de tareas y estados             |
| Cambio entre versiones        | Comparador de diferencias             |
| Variación entre niveles       | Navegador multiescala                 |
| Distribución geográfica       | Mapa interactivo                      |
| Composición de un total       | Gráfico de partes                     |
| Variación numérica            | Gráfico de datos                      |
| Exploración de alternativas   | Simulador con controles               |

No debe elegirse un grafo simplemente porque el tema contiene conceptos. Debe elegirse cuando las relaciones entre unidades son lo que el humano necesita ver.

---

## 5. Anatomía mínima de una `INTERACTIVE_INTERFACE`

Una interfaz puede contener muchos componentes, pero normalmente necesita cuatro regiones funcionales.

```text
┌──────────────────────────────────────────────────────────────┐
│ 1. CONTEXTO O CONTROL PRINCIPAL                              │
│    lente · escala · modo · comparación                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ 2. REPRESENTACIÓN DOMINANTE                                  │
│    grafo · árbol · flujo · tabla · mapa · gráfico            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ 3. DETALLE DE LA SELECCIÓN                                   │
│    identidad · explicación · relaciones · estado             │
├──────────────────────────────────────────────────────────────┤
│ 4. LEYENDA O LÍMITE NECESARIO                                │
│    sólo cuando la codificación no sea evidente               │
└──────────────────────────────────────────────────────────────┘
```

No todas las interfaces necesitan las cuatro regiones visibles permanentemente. La representación dominante debe ocupar la mayor parte de la superficie. El detalle puede aparecer sólo al seleccionar un elemento y la leyenda debe omitirse cuando las marcas se entiendan directamente.

### 5.1 Control principal

Sirve para cambiar la forma de observar el mismo contenido.

Ejemplos:

- seleccionar una lente;
- cambiar de escala;
- elegir una versión;
- cambiar el grupo comparado;
- mostrar u ocultar un tipo de relación;
- recorrer una etapa.

Debe existir sólo cuando modifica algo significativo de la representación.

### 5.2 Representación dominante

Es la pieza principal de la interfaz. Debe hacer visible la estructura antes de que el humano interactúe.

Ejemplos:

- red de conceptos conectados;
- árbol de módulos;
- línea temporal con etapas;
- tabla de correspondencias;
- tres redes comparables;
- mapa con ubicaciones;
- flujo de transformación.

### 5.3 Detalle de selección

Muestra información que no cabe o no conviene mantener visible en la representación dominante.

Puede incluir:

- nombre completo;
- definición;
- relaciones directas;
- estado;
- procedencia;
- ejemplo;
- diferencia respecto de otra unidad;
- acciones de exploración.

El detalle debe cambiar cuando cambia la selección.

### 5.4 Leyenda

Debe explicar codificaciones que no sean autoevidentes:

- colores por categoría;
- tipos de línea;
- formas de nodo;
- estados;
- rangos numéricos.

No debe convertirse en una repetición textual de toda la interfaz.

---

## 6. Cómo convertir información en representación

La construcción puede seguir esta secuencia.

### Paso 1 — Inventariar unidades

Identificar qué cosas existen en el contenido fuente.

```yaml
units:
  - conceptos
  - entidades
  - acontecimientos
  - módulos
  - tareas
  - versiones
  - fuentes
  - etapas
  - métricas
```

### Paso 2 — Inventariar relaciones

Identificar cómo se conectan.

```yaml
relations:
  - DEPENDE_DE
  - PRODUCE
  - CONTIENE
  - PRECEDE
  - REINTERPRETA
  - CONTRADICE
  - ES_VERSION_DE
  - CONTRIBUYE_A
```

### Paso 3 — Identificar la relación dominante

La relación dominante determina la representación principal.

```text
CONTIENE / PERTENECE_A
→ árbol

PRECEDE / TRANSFORMA_EN
→ flujo o línea temporal

DEPENDE_DE / CONTRADICE / COMPLEMENTA
→ grafo

CORRESPONDE_A / DIFIERE_DE
→ tabla o comparación paralela

CAMBIA_SEGÚN_ESCALA
→ navegador multiescala
```

### Paso 4 — Elegir el foco inicial

La interfaz debe abrir en un estado útil. Debe decidir:

- qué unidad aparece seleccionada;
- qué escala se muestra;
- qué lente está activa;
- qué comparación se presenta;
- qué etapa está visible.

No debe abrir vacía ni obligar al humano a configurar controles antes de ver contenido.

### Paso 5 — Elegir interacciones

Cada interacción debe responder a una pregunta real.

| Pregunta humana                  | Interacción adecuada      |
| -------------------------------- | ------------------------- |
| ¿Qué significa esta unidad?      | Selección + inspector     |
| ¿Con qué está conectada?         | Resaltar vecinos          |
| ¿Qué depende de ella?            | Expandir dependencias     |
| ¿Cómo cambia por nivel?          | Control de escala         |
| ¿Qué diferencia hay entre A y B? | Selector de comparación   |
| ¿Qué ocurrió antes o después?    | Navegación por etapas     |
| ¿Qué relaciones quiero ver?      | Filtro de tipos de arista |
| ¿Cómo se obtuvo este resultado?  | Abrir procedencia         |

### Paso 6 — Eliminar controles sin función

No se deben añadir por defecto:

- buscadores cuando hay pocas unidades;
- filtros que no cambian la lectura;
- botones de reinicio cuando el estado inicial es fácil de recuperar;
- métricas inventadas;
- tarjetas de resumen que repiten el gráfico;
- pestañas para fragmentos que podrían coexistir en una sola vista;
- botones que no ejecutan ninguna transformación local.

### Paso 7 — Comprobar la primera lectura

Antes de considerar terminada la interfaz debe poder responderse:

1. ¿Qué estoy viendo?
2. ¿Cuál es la estructura principal?
3. ¿Qué puedo seleccionar o modificar?
4. ¿Qué cambió después de interactuar?
5. ¿Cómo regreso o elijo otra unidad?

---

## 7. Reglas de representación visual

### 7.1 Posición

La posición debe expresar una relación reconocible.

- izquierda → derecha para una secuencia;
- arriba → abajo para una jerarquía;
- centro → periferia para foco y relaciones directas;
- columnas paralelas para comparación;
- capas concéntricas para escalas.

Si la posición sólo sirve para evitar colisiones, no debe interpretarse como significado.

### 7.2 Color

El color puede representar categoría, estado, serie, selección o diferencia. No debe usarse un color distinto para cada elemento sin que exista una categoría real. El estado seleccionado debe distinguirse también mediante forma, borde, etiqueta o posición, no sólo por color.

### 7.3 Tamaño

El tamaño puede representar importancia declarada, magnitud, centralidad calculada o jerarquía. Si no existe una regla que justifique la diferencia, los elementos equivalentes deben conservar tamaños equivalentes.

### 7.4 Forma

Las formas pueden distinguir clases de unidades.

```text
círculo        = concepto
rectángulo     = módulo
rombo          = decisión
línea sólida   = relación vigente
línea punteada = relación hipotética
```

La interfaz debe usar pocas formas y mantener su significado en todas las vistas.

### 7.5 Texto

Los elementos principales deben tener etiquetas breves. Las definiciones largas pertenecen al inspector.

```text
NODO
“Red activada”

INSPECTOR
“Conjunto de asociaciones reconstruidas por un receptor…”
```

### 7.6 Movimiento

Las transiciones pueden mostrar cambios de escala, reordenamientos, avances entre etapas, expansión de subgrafos o actualización de valores. No deben existir animaciones decorativas continuas que compitan con la inspección.

---

## 8. Patrones principales de interfaz

### 8.1 Grafo interactivo

Debe elegirse cuando el objetivo sea comprender relaciones entre unidades.

#### Construcción

```yaml
graph_interface:
  focus: CONCEPTO_CENTRAL
  nodes:
    - id
    - label
    - category
    - short_definition
  edges:
    - origin
    - relation
    - destination
  initial_selection: CONCEPTO_CENTRAL
  interactions:
    - SELECT_NODE
    - HIGHLIGHT_NEIGHBORS
    - CHANGE_LENS
```

#### Primera vista

- el nodo focal aparece destacado;
- sus relaciones principales son legibles;
- las aristas muestran su tipo;
- el inspector explica el nodo focal;
- seleccionar otro nodo actualiza resaltado e inspector.

#### No hacer

- introducir decenas de nodos sin agrupación;
- esconder el tipo de relación;
- usar fuerzas físicas como si expresaran causalidad;
- mostrar todos los metadatos dentro del nodo;
- añadir zoom si el grafo cabe completo.

### 8.2 Árbol navegable

Debe elegirse cuando la relación principal sea pertenencia, composición o especialización.

```text
ARQUITECTURA DE COMUNICACIÓN HUMANO–IA
├── Núcleo
├── Modelo operativo
│   ├── Frontend cognitivo
│   ├── Backend cognitivo
│   └── Ciclo operativo
├── Contratos
└── Funcionalidades
```

Sus interacciones características son expandir, contraer, seleccionar una unidad, mostrar su ruta y abrir su descripción. No debe usarse cuando una unidad pertenece a varias ramas importantes o cuando las relaciones laterales son más relevantes que la pertenencia.

### 8.3 Flujo o secuencia interactiva

Debe elegirse cuando la pregunta principal sea “¿cómo se transforma A en B?” o “¿qué ocurre después?”.

```text
GRAFO FUENTE
→ CORTE ORIENTADO
→ ORGANIZACIÓN
→ PROYECCIÓN
→ MANIFESTACIÓN
→ RECEPCIÓN
```

Debe permitir seleccionar una etapa, avanzar o retroceder, comparar su entrada y salida o mostrar una ruta alternativa. No debe representar como cadena simple un proceso con bifurcaciones decisivas.

### 8.4 Comparador interactivo

Debe elegirse cuando se necesiten correspondencias y diferencias exactas.

| Dimensión   | Red proyectada        | Red realizada         | Red activada               |
| ----------- | --------------------- | --------------------- | -------------------------- |
| Pertenece a | Diseño                | Manifestación         | Recepción                  |
| Contiene    | Asociaciones objetivo | Piezas presentes      | Asociaciones reconstruidas |
| Depende de  | Resultado esperado    | Elecciones expresivas | Contexto del receptor      |

En la interfaz, el humano podría seleccionar `manifestación`, `parte`, `oración` o `palabra`, y la comparación se actualizaría conservando las tres columnas. Las entidades comparadas no deben esconderse detrás de pestañas si necesitan observarse simultáneamente.

### 8.5 Navegador multiescala

Debe elegirse cuando una estructura reaparece o cambia en distintos niveles.

```text
MANIFESTACIÓN
↕
ESTRATO
↕
MÓDULO
↕
PARTE
↕
PÁRRAFO
↕
ORACIÓN
↕
PALABRA
```

El control de escala no debe simplemente agrandar o reducir el mismo dibujo. Debe cambiar qué unidad es focal, qué partes la componen, a qué nivel superior contribuye y qué relaciones son pertinentes.

### 8.6 Panel operativo

Debe elegirse para inspeccionar tareas, estados, dependencias, resultados y siguientes decisiones. No debe usarse como forma genérica para cualquier contenido, inventar porcentajes de avance ni añadir métricas decorativas.

---

## 9. Ejemplo completo 1: explorar una arquitectura cognitiva

### Objetivo

Permitir que el humano comprenda los componentes de una arquitectura y seleccione cada uno para inspeccionar su función y relaciones.

### Selección

```yaml
focal_units:
  - HUMANO
  - FRONTEND_COGNITIVO
  - ARQUITECTURA_LOCAL
  - BACKEND_COGNITIVO
  - SISTEMA_DE_IA

relations:
  - HUMANO INTERACTUA_MEDIANTE FRONTEND_COGNITIVO
  - FRONTEND_COGNITIVO PROYECTA ARQUITECTURA_LOCAL
  - ARQUITECTURA_LOCAL SOLICITA_OPERACIONES_A BACKEND_COGNITIVO
  - BACKEND_COGNITIVO MEDIA_CON SISTEMA_DE_IA
```

### Representación

Un grafo o flujo horizontal porque importa entender los componentes y el acoplamiento entre ellos.

```text
[vista general] [dirección humana] [dirección IA]

HUMANO ↔ FRONTEND ↔ ARQUITECTURA LOCAL ↔ BACKEND ↔ SISTEMA DE IA

[inspector del componente seleccionado]
```

### Interacciones

- seleccionar un componente;
- resaltar sus entradas y salidas;
- cambiar la dirección observada;
- leer su función en el inspector.

Una tabla explicaría los componentes, pero haría menos perceptible el circuito y las direcciones de intercambio.

---

## 10. Ejemplo completo 2: redes proyectada, realizada y activada

### Objetivo

Distinguir tres redes y observar cómo cambian al seleccionar diferentes niveles de una manifestación.

### Selección

```yaml
networks:
  - PROJECTED
  - REALIZED
  - ACTIVATED

levels:
  - MANIFESTATION
  - PART
  - SENTENCE
  - WORD

comparison_dimensions:
  - central_node
  - associations
  - relation_types
  - dependencies
```

### Representación

Tres grafos pequeños alineados horizontalmente y un selector común de escala.

```text
[Manifestación] [Parte] [Oración] [Palabra]

RED PROYECTADA  |  RED REALIZADA  |  RED ACTIVADA
      grafo      |       grafo      |       grafo

[diferencias principales de la escala seleccionada]
```

### Interacciones

- cambiar el nivel;
- seleccionar un nodo en cualquiera de las redes;
- resaltar correspondencias en las otras dos;
- mostrar asociaciones exclusivas de cada red.

Debe abrir en `MANIFESTATION`, mostrar las tres redes simultáneamente y seleccionar sus nodos centrales. Ocultar las redes en pestañas impediría compararlas.

---

## 11. Ejemplo completo 3: genealogía de una idea

### Objetivo

Mostrar cómo una intuición inicial fue corregida, reinterpretada y conectada con desarrollos posteriores.

```yaml
units:
  - INTUICION_INICIAL
  - CORRECCION
  - REINTERPRETACION
  - COROLARIO_1
  - COROLARIO_2
  - PREGUNTA_ABIERTA

relations:
  - ORIGINA
  - CORRIGE
  - REINTERPRETA
  - FORTALECE
  - DEPENDE_DE
  - DEJA_ABIERTA
```

### Representación

Un grafo genealógico organizado de izquierda a derecha.

```text
posición horizontal = orden de desarrollo
forma               = tipo de unidad
línea sólida        = relación establecida
línea punteada      = hipótesis o relación provisional
resaltado           = selección actual
```

### Interacciones

- seleccionar un registro;
- resaltar antecedentes;
- resaltar consecuencias;
- alternar entre “origen”, “dependencias” e “impacto”;
- mostrar la formulación completa en el inspector.

No debe usarse una disposición libre de fuerzas si el orden temporal es importante.

---

## 12. Ejemplo completo 4: estructura documental

### Objetivo

Explorar un paquete cognitivo sin leer inicialmente todos sus documentos.

### Representación

Árbol navegable con un inspector de archivo.

```text
[ruta activa]

ÁRBOL DEL PAQUETE                DETALLE
├── 00_gobierno                 función
├── 01_nucleo                   entradas
├── 02_modelo_operativo         salidas
│   ├── frontend                dependencias
│   └── backend                 límites
└── 03_contratos
```

### Interacciones

- expandir carpetas;
- seleccionar documento;
- mostrar función;
- mostrar dependencias directas;
- cambiar a vista de relaciones cuando un archivo tiene vínculos transversales.

El árbol manifiesta organización física o jerárquica. Las dependencias transversales no deben forzarse dentro de él: pueden mostrarse en el inspector o en una segunda vista de grafo.

---

## 13. Cómo solicitar una `INTERACTIVE_INTERFACE`

### Forma breve

```text
GENERA UNA INTERACTIVE_INTERFACE DENTRO DEL CHAT SOBRE <OBJETO>.

OBJETIVO: <QUÉ DEBO PODER COMPRENDER O EXPLORAR>.
REPRESENTACIÓN DOMINANTE: <GRAFO | ÁRBOL | FLUJO | COMPARADOR | OTRA>.
INTERACCIONES: <SELECCIONAR | CAMBIAR ESCALA | COMPARAR | EXPANDIR>.
NO GENERES UN ARCHIVO DESCARGABLE.
```

### Forma estructurada

```yaml
projection_request:
  type: INTERACTIVE_INTERFACE
  delivery: INLINE_IN_CHAT

  subject:
  cognitive_goal:
  audience:

  source_material:
  focal_units: []
  focal_relations: []

  dominant_representation:
  secondary_representation:

  initial_view:
  interactions: []

  include: []
  exclude: []

  constraints:
    - RUN_INSIDE_CHAT
    - NO_DOWNLOAD_REQUIRED
    - FIRST_RENDER_MUST_BE_USEFUL
```

Cuando el humano no especifica la representación, ChatGPT debe elegirla a partir de la estructura dominante y construirla directamente. Sólo debe preguntar cuando existan representaciones plausibles que conduzcan a experiencias materialmente distintas y el objetivo no permita elegir.

---

## 14. Plantilla de diseño para ChatGPT

Antes de generar la interfaz, ChatGPT puede resolver internamente esta ficha:

```yaml
interactive_interface_design:
  one_sentence_goal:

  source_structure:
    units: []
    dominant_relations: []
    important_states: []

  representation:
    dominant_view:
    reason:
    secondary_detail:

  visual_mapping:
    position_means:
    color_means:
    shape_means:
    size_means:
    line_style_means:

  initial_state:
    selected_unit:
    active_view:
    active_scale:

  interactions:
    - control:
      changes:
      visible_effect:

  responsive_behavior:
  accessibility:
  omissions: []
```

La ficha sirve para diseñar. No tiene que mostrarse antes de la interfaz salvo que el humano solicite la trazabilidad de la proyección.

---

## 15. Realización técnica dentro del chat

La forma realizativa esperada es una superficie web autocontenida que el entorno del chat pueda renderizar y ejecutar.

Habitualmente incluye:

- un fragmento HTML para la estructura;
- estilos CSS para disposición y estados visuales;
- JavaScript para las interacciones locales;
- datos incorporados en la propia interfaz;
- componentes SVG cuando se necesitan grafos o visualizaciones precisas.

### Esqueleto técnico

```html
<div id="interactive-interface-example">
  <nav aria-label="Vistas">
    <button type="button" data-view="graph">Grafo</button>
    <button type="button" data-view="sequence">Secuencia</button>
  </nav>

  <section data-panel="graph">
    <svg role="img" aria-label="Relaciones principales"></svg>
    <div data-selected-detail></div>
  </section>

  <section data-panel="sequence" hidden>
    <div data-step-view></div>
  </section>
</div>

<style>
  /* Disposición y estados visuales. */
</style>

<script>
  // Los controles actualizan la representación sin abandonar el chat.
</script>
```

Este fragmento es sólo un esqueleto. Una `INTERACTIVE_INTERFACE` real debe incorporar datos, marcas visuales, selección inicial y comportamientos funcionales.

### Requisitos técnicos

- debe funcionar sin que el humano copie código;
- debe renderizarse dentro de la conversación;
- debe ser autocontenida para su función principal;
- debe evitar llamadas de red innecesarias;
- debe mostrar contenido útil antes de interactuar;
- debe funcionar en el ancho disponible del chat;
- debe reorganizarse para pantallas estrechas;
- debe usar controles accesibles;
- debe conservar etiquetas legibles;
- debe evitar desplazamiento horizontal de toda la superficie;
- debe mantener interacciones locales predecibles.

---

## 16. Primera vista y revelado progresivo

La primera vista debe contener el nivel mínimo suficiente para comprender la estructura principal.

```text
PRIMERA VISTA
estructura general + foco + relaciones principales

DESPUÉS DE SELECCIONAR
detalle de una unidad

DESPUÉS DE CAMBIAR RESOLUCIÓN
subestructura o información adicional
```

No debe mostrarse todo desde el inicio. La interfaz debe usar revelado progresivo:

- lo esencial permanece visible;
- el detalle aparece por selección;
- las relaciones secundarias aparecen por lente o profundidad;
- los metadatos aparecen sólo cuando son pertinentes;
- la explicación extensa no desplaza la visualización principal.

---

## 17. Uso de varias vistas

Se deben añadir varias vistas sólo cuando el mismo objeto necesita operaciones perceptivas diferentes.

Ejemplo válido:

```text
GRAFO
→ comprender relaciones

SECUENCIA
→ comprender orden de formación

COMPARACIÓN
→ examinar diferencias exactas
```

Ejemplo inválido:

```text
RESUMEN
→ repite los datos

TARJETAS
→ repiten los datos

TABLA
→ vuelve a repetir los mismos datos
```

Cada vista debe responder una pregunta diferente. Si no lo hace, debe eliminarse.

---

## 18. Interactividad local y acciones externas

La interfaz creada dentro del chat puede ejecutar directamente cambios de presentación:

- seleccionar;
- resaltar;
- filtrar;
- cambiar pestaña;
- cambiar escala;
- desplegar detalle;
- reproducir una secuencia;
- recalcular una visualización a partir de controles locales.

No debe simular como completadas acciones que requieren una nueva operación del sistema o una modificación externa.

```text
PUEDE HACER LOCALMENTE
“resaltar dependencias de este nodo”

NO DEBE FINGIR QUE HIZO
“modificar permanentemente el paquete cognitivo”
```

Cuando una acción no puede realizarse desde la propia superficie, el control no debe aparecer como si fuera funcional.

---

## 19. Errores característicos de representación

| Error                                                    | Corrección                                                |
| -------------------------------------------------------- | --------------------------------------------------------- |
| Describir la interfaz sin construirla                    | Generar la superficie interactiva dentro del chat.        |
| Mostrar un grafo estático cuando se pidió interactividad | Permitir selección y actualización del detalle.           |
| Usar un dashboard para cualquier contenido               | Elegir la vista según la relación dominante.              |
| Añadir demasiadas pestañas                               | Conservar sólo vistas con funciones cognitivas distintas. |
| Abrir en blanco                                          | Elegir un foco y una vista inicial útiles.                |
| Mostrar todos los detalles permanentemente               | Usar inspector y revelado progresivo.                     |
| Representar jerarquía mediante un grafo desordenado      | Usar árbol o niveles alineados.                           |
| Representar comparación mediante pestañas separadas      | Mostrar entidades simultáneamente.                        |
| Confundir escala con zoom                                | Cambiar la unidad focal y las relaciones mostradas.       |
| Usar colores sin semántica                               | Asignar color sólo a categorías o estados reales.         |
| Usar tamaños arbitrarios                                 | Mantener igualdad o declarar la medida representada.      |
| Añadir controles decorativos                             | Vincular cada control con un cambio visible.              |
| Repetir contenido en gráfico, tarjetas y tabla           | Elegir una representación dominante.                      |
| Saturar con metadatos                                    | Mostrar detalle bajo demanda.                             |
| Exigir descarga                                          | Renderizar la interfaz directamente en la conversación.   |
| Entregar HTML como texto                                 | Hacer que el chat lo presente como superficie ejecutable. |

---

## 20. Lista de verificación

### Objetivo

- [ ] Puede expresarse en una frase qué debe comprender o explorar el humano.
- [ ] La interfaz es más útil que una respuesta lineal para ese objetivo.

### Selección

- [ ] Se identificaron las unidades focales.
- [ ] Se identificaron las relaciones dominantes.
- [ ] Se excluyó información que no contribuye a la vista.

### Representación

- [ ] La vista principal corresponde con la estructura dominante.
- [ ] La posición tiene un significado claro o se reconoce como disposición auxiliar.
- [ ] Color, tamaño, forma y líneas poseen semántica consistente.
- [ ] La primera vista ya comunica la estructura básica.

### Interacción

- [ ] Cada control responde una pregunta real.
- [ ] Cada control produce un cambio visible.
- [ ] La selección actual se distingue claramente.
- [ ] El detalle cambia con la selección.
- [ ] No se simulan acciones que la interfaz no puede ejecutar.

### Entrega

- [ ] La interfaz aparece dentro del chat.
- [ ] Puede utilizarse sin descargar archivos.
- [ ] No requiere copiar o ejecutar código.
- [ ] Funciona en pantallas estrechas.
- [ ] Los controles y relaciones principales son accesibles.

---

## 21. Regla operativa resumida

```text
SI EL HUMANO SOLICITA:
“GENERA UNA INTERACTIVE_INTERFACE”

CHATGPT DEBE:
1. identificar qué debe comprenderse;
2. seleccionar unidades y relaciones;
3. elegir una representación dominante;
4. definir una primera vista útil;
5. incorporar sólo interacciones funcionales;
6. construir la interfaz;
7. renderizarla dentro de la respuesta del chat;
8. evitar exigir descarga o ejecución externa.

CHATGPT NO DEBE:
1. responder únicamente con una descripción;
2. entregar sólo un plan de interfaz;
3. sustituir la interfaz por una imagen;
4. mostrar código sin ejecutarlo;
5. repetir indiscriminadamente el contenido fuente;
6. añadir controles o métricas sin función representacional.
```

---

## 22. Síntesis

`INTERACTIVE_INTERFACE` designa una forma concreta de salida de ChatGPT: una interfaz construida y ejecutada dentro del propio chat.

Su función es convertir información o estructuras en una experiencia de inspección activa. Para hacerlo, ChatGPT debe elegir qué unidades mostrar, qué relaciones conservar, qué representación corresponde con ellas, cuál será el estado inicial y qué interacciones ayudan realmente a comprender el objeto.

La calidad de una `INTERACTIVE_INTERFACE` no depende de cuántos paneles, controles o efectos contenga. Depende de la correspondencia entre:

```text
OBJETIVO COGNITIVO
↔ CONTENIDO SELECCIONADO
↔ ESTRUCTURA REPRESENTADA
↔ FORMA VISUAL
↔ INTERACCIONES DISPONIBLES
```

Cuando esa correspondencia es correcta, la interfaz permite ver y explorar una estructura que una respuesta lineal sólo podría describir. Cuando es incorrecta, la interfaz se convierte en decoración, repetición o complejidad innecesaria.
