https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7a2524-1d20-83e8-8733-311386f767b8

# RED COGNITIVA — ESPECIFICACIÓN GENERAL Y FUNCIONALIDAD PROPUESTA

**Proyecto:** `COGNICION_CENTRAL`  
**Ámbito:** TMC / herramientas cognitivas transversales  
**Versión:** `0.1.0`  
**Fecha:** 2026-08-11  
**Estado:** `PROPUESTA FORMALIZADA / NO CANÓNICA`  
**Objeto principal:** `RED_COGNITIVA`  
**Funcionalidad propuesta:** `CONSTRUIR_ARQUITECTURA_COGNITIVA` / `CREAR_RED_COGNITIVA`  
**Ejemplo principal:** Pierre Bourdieu, _The Forms of Capital_ (1986)

---

# 0. PROPÓSITO

Este documento define **RED COGNITIVA** como un objeto general reutilizable dentro de `COGNICION_CENTRAL`.

La intención no es crear un nombre nuevo para un mapa mental ni para una red semántica. La finalidad es disponer de una funcionalidad invocable mediante comandos humanos del tipo:

```text
CREA UNA RED COGNITIVA DE X
```

o:

```text
CONSTRUYE LA ARQUITECTURA COGNITIVA DE X
```

de manera que el sistema sepa, sin necesidad de recibir nuevamente todo el procedimiento:

1. definir la frontera del objeto;
2. identificar sus elementos;
3. descomponer los elementos que sean demasiado gruesos;
4. buscar sistemáticamente las relaciones relevantes;
5. tipar esas relaciones;
6. distinguir relaciones documentadas de inferencias;
7. localizar jerarquías, dependencias, procesos y transformaciones;
8. detectar subgrafos;
9. mantener varias resoluciones del mismo objeto;
10. producir una arquitectura cognitiva operable;
11. proyectar esa arquitectura como uno o varios grafos;
12. conservar trazabilidad hacia las fuentes.

La red cognitiva es, por tanto, una **representación relacional de una arquitectura cognitiva**, no una colección libre de palabras asociadas.

---

# 1. PUNTO DE PARTIDA EN COGNICIÓN_CENTRAL

Dentro de los documentos del proyecto ya existen varias piezas que sirven de base.

`APRENDIZAJE_ESTRUCTURAL` define una **estructura** como una organización de elementos y relaciones que conserva cierta identidad y puede incluir jerarquías, secuencias, dependencias, bucles, restricciones o reglas de transformación. También define un **nodo** como una unidad distinguible que puede representar un concepto, entidad, regla, operación, condición u otro componente, y una **arista** como una conexión explícita que indica dependencia, secuencia, causalidad, pertenencia, transformación, analogía, validación u otra relación definida.

El mismo documento usa **grafo cognitivo** para una representación de estructuras cognitivas mediante nodos y relaciones: el interés no es sólo saber qué conceptos existen, sino cómo están organizados y de qué dependen.

Los documentos de `ARQUITECTURAS_COGNITIVAS_REUTILIZABLES` añaden otra distinción importante: una arquitectura no queda definida únicamente por su resultado final. Una capacidad reusable debe poder especificar **qué recibe, qué transforma, qué preserva y qué produce**.

A partir de esas bases, esta especificación introduce una funcionalidad nueva:

```text
FUENTES / MATERIAL
        ↓
CONSTRUCTOR DE ARQUITECTURA
        ↓
ARQUITECTURA COGNITIVA
        ↓
PROYECCIÓN
        ↓
RED COGNITIVA
```

La red no sustituye la arquitectura. La hace visible desde una perspectiva relacional.

---

# 2. DEFINICIÓN NUCLEAR

## 2.1. Red cognitiva

> **Una RED COGNITIVA es una representación relacional, tipada, trazable y potencialmente multirresolución de una arquitectura cognitiva, en la que los nodos representan elementos explícitamente definidos y las aristas representan relaciones cognitivamente relevantes cuya función, dirección, condiciones y estado epistemológico pueden ser especificados.**

Forma mínima:

```text
RED_COGNITIVA = (N, E)
```

donde:

```text
N = conjunto de nodos definidos
E = conjunto de relaciones tipadas entre nodos
```

Sin embargo, para que la red sea útil dentro de COGNICION_CENTRAL, la forma operacional debe ser más rica:

```text
RC = (
  N,
  E,
  Tn,
  Te,
  H,
  D,
  K,
  P,
  X,
  S,
  V
)
```

donde, provisionalmente:

- `N` = nodos;
- `E` = aristas;
- `Tn` = tipos de nodo;
- `Te` = tipos de relación;
- `H` = jerarquías;
- `D` = dependencias;
- `K` = contextos;
- `P` = procesos y dinámicas;
- `X` = transformaciones;
- `S` = fuentes y estados epistemológicos;
- `V` = vistas/proyecciones de la red.

La fórmula no pretende ser una formalización matemática cerrada. Expresa el contrato de información que una red cognitiva de alta resolución debería poder contener.

---

# 3. QUÉ NO ES UNA RED COGNITIVA

## 3.1. No es una red semántica simple

Una red semántica puede representar asociaciones:

```text
CAPITAL
├── dinero
├── inversión
├── riqueza
└── propiedad
```

Esto puede ser útil para significado léxico, asociación o recuperación conceptual, pero no explica necesariamente:

- qué tipos de capital existen;
- cómo se acumulan;
- qué forma adopta cada uno;
- qué depende de qué;
- qué puede convertirse en qué;
- qué condiciones modifican su eficacia;
- qué manifestaciones produce.

La red cognitiva exige relaciones **funcionales o estructurales**, no sólo proximidad de significado.

## 3.2. No es un mapa mental

Un mapa mental organiza conceptos alrededor de un centro:

```text
                    CAPITAL
             /        |        \
        social     cultural    económico
```

Puede ayudar a recordar o presentar información, pero normalmente no exige definición formal de nodos, tipos de arista, dirección, condiciones, causalidad, transformación, trazabilidad o estado epistemológico.

Una red cognitiva puede representarse visualmente de una manera parecida, pero su contrato interno es mucho más exigente.

## 3.3. No es una lista de relaciones inventadas

El comando:

```text
BUSCA TODAS LAS RELACIONES POSIBLES
```

NO significa:

```text
conecta todos los nodos con todos los nodos
```

Significa:

> examinar sistemáticamente las combinaciones plausibles de elementos para determinar si existe entre ellas una relación estructural relevante y justificable.

La exhaustividad debe existir en el **proceso de búsqueda**, no en la invención de aristas.

## 3.4. No es necesariamente una única imagen

Una arquitectura compleja puede requerir:

```text
RED GLOBAL
+
SUBRED ONTOLÓGICA
+
SUBRED CAUSAL
+
SUBRED DE DEPENDENCIAS
+
SUBRED DE TRANSFORMACIONES
+
SUBRED TEMPORAL
```

El objeto cognitivo puede ser uno; sus vistas pueden ser muchas.

---

# 4. ARQUITECTURA COGNITIVA VS RED COGNITIVA

## 4.1. Arquitectura cognitiva

> Organización completa de elementos, relaciones, roles, operadores, restricciones, estados, dependencias y reglas que permite comprender u operar un sistema.

Puede existir aunque todavía no se haya dibujado.

## 4.2. Red cognitiva

> Proyección de esa arquitectura en forma relacional.

Por tanto:

```text
TEORÍA / SISTEMA / FENÓMENO
        ↓
EXTRACCIÓN ESTRUCTURAL
        ↓
ARQUITECTURA COGNITIVA
        ↓
PROYECCIÓN RELACIONAL
        ↓
RED COGNITIVA
```

Y una misma arquitectura puede producir distintas vistas:

```text
ARQUITECTURA
│
├── grafo global
├── grafo causal
├── árbol jerárquico
├── matriz de dependencias
├── secuencia temporal
├── tabla de nodos
└── representación visual
```

---

# 5. OBJETIVO DE LA FUNCIONALIDAD

Nombre provisional:

```text
CONSTRUCTOR_DE_ARQUITECTURAS_COGNITIVAS
```

Alias de comando humano:

```text
CREA_RED_COGNITIVA
```

La funcionalidad debe convertir un objeto de estudio en una arquitectura relacional explícita.

## 5.1. Forma general

```text
OBJETO X
   ↓
DEFINIR FRONTERA
   ↓
IDENTIFICAR ELEMENTOS
   ↓
DESCOMPONER
   ↓
RELACIONAR
   ↓
TIPAR
   ↓
VALIDAR
   ↓
RECOMPONER
   ↓
ARQUITECTURA COGNITIVA
   ↓
PROYECTAR
   ↓
RED COGNITIVA
```

---

# 6. CONTRATO DE ENTRADA

La funcionalidad puede recibir:

```yaml
input:
  object:
  sources:
  human_intent:
  scope:
  exclusions:
  desired_resolution:
  desired_views:
  epistemic_policy:
  decomposition_depth:
  relation_exhaustiveness:
```

Ejemplo:

```yaml
input:
  object: "formas de capital según Pierre Bourdieu"
  sources:
    - forms_of_capital_bourdieu.md
  human_intent: comprender la arquitectura relacional del concepto de capital
  scope: artículo The Forms of Capital
  exclusions: no reconstruir toda la teoría sociológica de Bourdieu
  desired_resolution: HIGH
  desired_views:
    - ontology
    - conversion
    - dependency
  epistemic_policy:
    distinguish_source_from_inference: true
```

---

# 7. DEFINICIÓN DE FRONTERA

Una red cognitiva debe declarar qué modela.

No basta:

```text
TEMA = BOURDIEU
```

Debe definirse:

```yaml
scope:
  object: teoría de las formas de capital en el texto The Forms of Capital
  includes:
    - definición general de capital
    - capital económico
    - capital cultural
    - capital social
    - estados del capital cultural
    - convertibilidad
    - dependencia del campo
  excludes:
    - reconstrucción exhaustiva de Distinction
    - teoría completa de habitus
    - toda la obra de Bourdieu
```

La frontera evita crecimiento indefinido.

---

# 8. NODOS

## 8.1. Definición

> Un nodo es una unidad que la red necesita distinguir para representar una identidad, función, estado, actor, regla, proceso, condición, recurso, evidencia o salida.

Un nodo no debe existir sólo porque una palabra aparece frecuentemente. Debe justificar su existencia estructural.

## 8.2. Tipos de nodo candidatos

```text
CONCEPT
ACTOR
SYSTEM
SUBSYSTEM
STATE
PROCESS
OPERATOR
RESOURCE
CAPACITY
CONDITION
CONTEXT
RULE
CONSTRAINT
EVENT
OUTPUT
MANIFESTATION
EVIDENCE
INSTITUTION
REPRESENTATION
```

La lista no es cerrada.

## 8.3. Esquema mínimo

```yaml
node:
  id:
  label:
  definition:
  type:
  role:
  parent:
  components:
  inputs:
  outputs:
  conditions:
  constraints:
  manifestations:
  source_refs:
  epistemic_status:
```

---

# 9. ARISTAS / RELACIONES

## 9.1. Definición

> Una arista representa una relación explícita entre dos o más nodos y debe indicar qué clase de vínculo existe.

No usar:

```text
A — relacionado con → B
```

cuando sea posible indicar:

```text
A — ENABLES → B
A — REQUIRES → B
A — TRANSFORMS → B
A — MANIFESTS_AS → B
```

---

# 10. ONTOLOGÍA INICIAL DE RELACIONES

La funcionalidad debe disponer de un repertorio inicial. No es una ontología definitiva; es una biblioteca extensible.

## 10.1. Relaciones ontológicas

```text
IS_A
INSTANCE_OF
SUBTYPE_OF
PART_OF
CONTAINS
HAS_STATE
HAS_COMPONENT
```

## 10.2. Relaciones funcionales

```text
ENABLES
INHIBITS
AMPLIFIES
REGULATES
MAINTAINS
SUPPORTS
REQUIRES
```

## 10.3. Relaciones causales

```text
CAUSES
CONTRIBUTES_TO
INCREASES_PROBABILITY_OF
DECREASES_PROBABILITY_OF
TRIGGERS
```

`CAUSES` debe usarse con mayor exigencia que `CONTRIBUTES_TO` o `INFLUENCES`.

## 10.4. Relaciones transformacionales

```text
TRANSFORMS
CONVERTS_INTO
PRODUCES
DECOMPOSES_INTO
COMPOSES
INSTITUTIONALIZES
ACCUMULATES_AS
```

## 10.5. Relaciones de dependencia

```text
DEPENDS_ON
REQUIRES
CONDITION_FOR
CONSTRAINS
LIMITS
```

## 10.6. Relaciones informacionales

```text
REPRESENTS
ENCODES
TRANSMITS
INTERPRETS
SIGNALS
VALIDATES
```

## 10.7. Relaciones temporales

```text
PRECEDES
FOLLOWS
OCCURS_DURING
PERSISTS_AFTER
FEEDBACK_TO
```

## 10.8. Relaciones contextuales

```text
OPERATES_IN
EFFECTIVE_IN
VARIES_WITH
CONDITIONED_BY
MODULATED_BY
```

## 10.9. Relaciones de manifestación

```text
MANIFESTATION_OF
MANIFESTS_AS
REALIZES
EXTERNALIZES
CONDENSES
```

## 10.10. Relaciones comparativas

```text
STRUCTURALLY_SIMILAR_TO
ANALOGOUS_TO
CONTRASTS_WITH
INCOMPATIBLE_WITH
```

---

# 11. ESQUEMA DE ARISTA

```yaml
edge:
  id:
  from:
  to:
  relation_type:
  direction:
  definition:
  conditions:
  strength:
  temporal_scope:
  context_scope:
  source_refs:
  epistemic_status:
  confidence:
  rationale:
```

Ejemplo:

```yaml
edge:
  from: ECONOMIC_CAPITAL
  to: CULTURAL_CAPITAL
  relation_type: CONVERTIBLE_INTO
  conditions:
    - inversión
    - tiempo
    - condiciones del campo
  source_refs:
    - BOURDIEU_FORMS_OF_CAPITAL
  epistemic_status: SOURCE_DIRECT
```

---

# 12. ESTADO EPISTEMOLÓGICO

Una red cognitiva no debe presentar todas sus aristas como si fueran igualmente ciertas.

La especificación reutiliza una clasificación compatible con ACSI:

```text
SOURCE_DIRECT
SOURCE_SYNTHESIS
INFERENCE
HYPOTHESIS
DESIGN_DECISION
```

## 12.1. `SOURCE_DIRECT`

La relación o afirmación aparece explícitamente en la fuente.

## 12.2. `SOURCE_SYNTHESIS`

La formulación combina varias afirmaciones de fuente sin añadir un mecanismo nuevo.

## 12.3. `INFERENCE`

La relación es deducida por análisis.

## 12.4. `HYPOTHESIS`

La relación parece plausible pero necesita más evidencia.

## 12.5. `DESIGN_DECISION`

La relación pertenece al modelo o a la representación, no pretende ser un hecho del mundo.

---

# 13. PRINCIPIO DE EXHAUSTIVIDAD

La frase:

```text
LISTA TODAS LAS RELACIONES POSIBLES
```

debe transformarse en un protocolo.

## 13.1. Paso A — inventario de nodos

```text
N = {n1, n2, ... nn}
```

## 13.2. Paso B — generación de candidatos

Para cada nodo:

```text
¿de qué es parte?
¿qué contiene?
¿qué produce?
¿qué requiere?
¿qué transforma?
¿qué lo transforma?
¿qué lo condiciona?
¿qué manifiesta?
¿qué se manifiesta mediante él?
¿qué lo precede?
¿qué lo sigue?
¿qué lo valida?
¿qué lo limita?
¿con qué puede convertirse?
```

## 13.3. Paso C — evaluación

Cada relación candidata debe clasificarse:

```text
CONFIRMED
INFERRED
HYPOTHETICAL
REJECTED
UNKNOWN
```

## 13.4. Paso D — búsqueda transversal

Después de relaciones locales deben buscarse:

```text
relaciones entre ramas
relaciones entre niveles
feedback
conversiones
dependencias indirectas
relaciones de contexto
relaciones de manifestación
```

## 13.5. Regla

> La búsqueda debe ser amplia; la aceptación de aristas debe ser conservadora.

---

# 14. DESCOMPOSICIÓN RECURSIVA

Una propiedad central de esta funcionalidad es que un nodo no tiene que ser atómico.

## 14.1. Regla

Para cada nodo:

```text
¿SU REPRESENTACIÓN COMO UNA UNIDAD
OCULTA DIFERENCIAS ESTRUCTURALES
RELEVANTES?
```

Si sí:

```text
NODO
↓
SUBGRAFO
```

Ejemplo:

```text
CAPITAL
│
├── ECONÓMICO
├── CULTURAL
└── SOCIAL
```

Luego:

```text
CAPITAL CULTURAL
│
├── INCORPORADO
├── OBJETIVADO
└── INSTITUCIONALIZADO
```

La operación puede repetirse.

---

# 15. MULTIRRESOLUCIÓN

La misma arquitectura puede existir a varias resoluciones.

## R0 — compacta

```text
[CAPITAL]
```

## R1 — tipos principales

```text
CAPITAL
├── ECONÓMICO
├── CULTURAL
└── SOCIAL
```

## R2 — estructura interna

```text
CAPITAL
├── ECONÓMICO
├── CULTURAL
│   ├── INCORPORADO
│   ├── OBJETIVADO
│   └── INSTITUCIONALIZADO
└── SOCIAL
```

## R3 — mecanismos

Añade:

```text
adquisición
transmisión
convertibilidad
reconocimiento
campo
costos
```

La red debe permitir:

```text
ZOOM_IN(node)
ZOOM_OUT(subgraph)
```

Conceptualmente:

```text
NODO ↔ SUBGRAFO
```

---

# 16. ENCAPSULACIÓN

Una arquitectura superior no tiene que mostrar todos los detalles de un subgrafo.

Puede usar:

```text
[CAPITAL_CULTURAL]
```

como interfaz.

Al abrirlo:

```text
CAPITAL_CULTURAL
├── embodied
├── objectified
└── institutionalized
```

Esto permite escalabilidad.

La identidad externa debe mantenerse aunque la resolución interna aumente.

---

# 17. SUBGRAFOS FUNCIONALES

Una red cognitiva compleja debe poder proyectarse en vistas especializadas.

## 17.1. Ontológico

```text
¿QUÉ TIPOS DE COSA EXISTEN?
```

## 17.2. Jerárquico

```text
¿QUÉ CONTIENE QUÉ?
```

## 17.3. Funcional

```text
¿QUÉ HACE CADA PIEZA?
```

## 17.4. Causal

```text
¿QUÉ CONTRIBUYE A PRODUCIR QUÉ?
```

## 17.5. Dependencias

```text
¿QUÉ REQUIERE QUÉ?
```

## 17.6. Transformacional

```text
¿QUÉ PUEDE CONVERTIRSE EN QUÉ?
```

## 17.7. Temporal

```text
¿QUÉ OCURRE ANTES, DURANTE Y DESPUÉS?
```

## 17.8. Contextual

```text
¿QUÉ CAMBIA SEGÚN EL ENTORNO?
```

## 17.9. Manifestación

```text
¿QUÉ ESTRUCTURA INVISIBLE
PRODUCE QUÉ SALIDA OBSERVABLE?
```

## 17.10. Epistemológico

```text
¿QUÉ ESTÁ DOCUMENTADO,
QUÉ ES INFERENCIA
Y QUÉ SIGUE ABIERTO?
```

---

# 18. DINÁMICA

Una red cognitiva no debe congelar un proceso como si fuera una taxonomía.

Cuando existan cambios de estado:

```text
S0
 --τ1-->
S1
 --τ2-->
S2
```

deben representarse.

Un sistema puede contener simultáneamente:

```text
ESTRUCTURA ESTÁTICA
+
DINÁMICA
```

Ejemplo:

```text
capital económico
   │
   │ conversión bajo condiciones
   ▼
capital cultural
```

La relación no dice sólo que ambos conceptos están asociados. Describe una transformación.

---

# 19. CONTEXTO

Una capacidad puede comportarse de forma distinta según el contexto.

Por tanto, la red puede requerir nodos de contexto:

```text
CAPACIDAD V
+
CONTEXTO K
        ↓
EFICACIA
```

No asumir:

```text
X → Y
```

cuando la relación real es:

```text
X
+
K
→ Y
```

---

# 20. MANIFESTACIÓN

Una red cognitiva debe poder distinguir:

```text
SISTEMA
≠
MANIFESTACIÓN
```

Esta separación ya ha resultado útil dentro del proyecto en el estudio de la cocina mexicana:

```text
RED CULTURAL
      ↓
opera
      ↓
TORTILLA
```

La tortilla es una interfaz visible de una arquitectura más amplia; no es la arquitectura completa.

La misma regla puede usarse en otros dominios:

```text
CAPACIDAD
↓
opera en contexto
↓
MANIFESTACIÓN
```

---

# 21. TRAZABILIDAD

Toda relación importante debería poder reconstruirse:

```text
NODE
↓
EDGE
↓
CLAIM
↓
SOURCE
```

Ejemplo:

```yaml
claim:
  id: C-B-001
  statement: Bourdieu distingue tres formas fundamentales de capital
  source: forms_of_capital_bourdieu.md

edge:
  from: CAPITAL
  to: CULTURAL_CAPITAL
  relation_type: HAS_SUBTYPE
  claim_ref: C-B-001
  epistemic_status: SOURCE_DIRECT
```

---

# 22. VALIDACIÓN

La red cognitiva debe pasar por varios gates.

## V1 — frontera

```text
¿está claro qué se modela?
```

## V2 — nodos

```text
¿cada nodo tiene función?
¿hay nodos sólo decorativos?
```

## V3 — relaciones

```text
¿cada arista tiene tipo?
¿las aristas vagas pueden precisarse?
```

## V4 — evidencia

```text
¿se separa fuente de inferencia?
```

## V5 — resolución

```text
¿algún nodo está demasiado comprimido?
```

## V6 — dinámica

```text
¿se han confundido procesos con categorías?
```

## V7 — contexto

```text
¿alguna relación depende de condiciones omitidas?
```

## V8 — redundancia

```text
¿varias aristas dicen lo mismo?
```

## V9 — ruido

```text
¿la red añade relaciones que no aumentan comprensión?
```

## V10 — reconstrucción

```text
¿otra persona puede reconstruir
el funcionamiento del objeto
a partir de la red?
```

---

# 23. CRITERIOS DE PARADA

La descomposición no puede continuar indefinidamente.

Debe detenerse cuando:

```text
- el nodo ya sea operacionalmente suficiente;
- una mayor resolución no añada poder explicativo;
- la fuente no permita justificar más detalle;
- el análisis salga de la frontera declarada;
- la complejidad adicional introduzca más ruido que estructura.
```

Parámetro:

```yaml
decomposition:
  max_depth: 4
```

puede ser cambiado por el humano.

---

# 24. PRESUPUESTO RELACIONAL

Con muchos nodos, probar todas las combinaciones produce una explosión combinatoria.

El constructor debe priorizar:

```text
1. relaciones explícitas en fuentes;
2. relaciones por jerarquía;
3. relaciones funcionales locales;
4. relaciones de dependencia;
5. transformaciones;
6. relaciones transversales;
7. relaciones hipotéticas de alta relevancia.
```

Después debe realizar una segunda pasada para buscar aristas no obvias.

---

# 25. PAQUETE COGNITIVO DE SALIDA

El comando:

```text
CREA UNA RED COGNITIVA DE X
```

no debería producir sólo una imagen.

La salida ideal es:

```text
COGNITIVE_NETWORK_PACKAGE
│
├── 00_scope
├── 01_node_registry
├── 02_edge_registry
├── 03_hierarchies
├── 04_subgraphs
├── 05_dynamics
├── 06_transformations
├── 07_contexts
├── 08_manifestations
├── 09_epistemic_map
├── 10_open_questions
├── 11_validation
└── 12_graph_views
```

---

# 26. COMANDOS HUMANOS

## 26.1. Comando mínimo

```text
CREA UNA RED COGNITIVA DE X.
```

Interpretación:

```text
CONSTRUIR_ARQUITECTURA_COGNITIVA(X)
+
PROYECTAR_COMO_RED(X)
```

## 26.2. Alta resolución

```text
CREA UNA RED COGNITIVA DE X EN ALTA RESOLUCIÓN.
DESCOMPÓN RECURSIVAMENTE LOS NODOS.
```

## 26.3. Exhaustividad relacional

```text
CREA UNA RED COGNITIVA DE X.
BUSCA SISTEMÁTICAMENTE TODAS LAS RELACIONES RELEVANTES,
PERO NO INVENTES ARISTAS.
```

## 26.4. Con trazabilidad

```text
CREA UNA RED COGNITIVA DE X.
SEPARA SOURCE_DIRECT, INFERENCE E HYPOTHESIS.
```

## 26.5. Vista específica

```text
CONSTRUYE LA ARQUITECTURA COGNITIVA DE X
Y MUÉSTRAME SÓLO LA RED DE CONVERSIONES.
```

## 26.6. Comparación

```text
CREA REDES COGNITIVAS DE X E Y
Y COMPARA SUS SUBGRAFOS ESTRUCTURALMENTE COMPATIBLES.
```

---

# 27. NIVELES DE RESOLUCIÓN PROPUESTOS

## `R0 — RECONOCIMIENTO`

- conceptos principales;
- relaciones principales.

## `R1 — ESTRUCTURAL`

- nodos definidos;
- aristas tipadas;
- jerarquías.

## `R2 — FUNCIONAL`

Añade:

- roles;
- inputs;
- outputs;
- condiciones;
- dependencias.

## `R3 — DINÁMICO`

Añade:

- procesos;
- estados;
- transformaciones;
- feedback;
- contexto.

## `R4 — EXHAUSTIVO`

Añade:

- descomposición recursiva;
- relaciones transversales;
- vistas múltiples;
- epistemología;
- trazabilidad;
- invariantes;
- dominio de variación;
- preguntas abiertas.

---

# 28. EJEMPLO — BOURDIEU COMO CASO DE PRUEBA

Esta sección utiliza el archivo compartido:

```text
forms_of_capital_bourdieu.md
Pierre Bourdieu, "The Forms of Capital" (1986)
```

La finalidad no es desarrollar toda la sociología de Bourdieu, sino mostrar cómo la funcionalidad transforma un texto conceptual en una red cognitiva.

---

# 29. PASO 1 — UNIDAD COMPRIMIDA

Podríamos comenzar con:

```text
[CAPITAL]
```

Esta representación tiene baja resolución.

El propio texto de Bourdieu rechaza reducir el funcionamiento del mundo social a una sola forma de capital y propone estudiar el capital en varias formas.

---

# 30. PASO 2 — DESCOMPOSICIÓN PRINCIPAL

Del texto se obtienen tres formas fundamentales:

```text
                       CAPITAL
             ┌───────────┼───────────┐
             ▼           ▼           ▼
         ECONÓMICO    CULTURAL     SOCIAL
```

Estas relaciones pueden tiparse:

```text
CAPITAL HAS_FORM ECONOMIC_CAPITAL
CAPITAL HAS_FORM CULTURAL_CAPITAL
CAPITAL HAS_FORM SOCIAL_CAPITAL
```

Estado:

```text
SOURCE_DIRECT
```

---

# 31. PASO 3 — DESCOMPOSICIÓN DE CAPITAL CULTURAL

Bourdieu distingue tres estados del capital cultural:

```text
                 CULTURAL_CAPITAL
           ┌──────────┼──────────┐
           ▼          ▼          ▼
       EMBODIED   OBJECTIFIED  INSTITUTIONALIZED
```

Relaciones:

```text
CULTURAL_CAPITAL HAS_STATE EMBODIED
CULTURAL_CAPITAL HAS_STATE OBJECTIFIED
CULTURAL_CAPITAL HAS_STATE INSTITUTIONALIZED
```

Esto muestra por qué la descomposición es recursiva.

`CULTURAL_CAPITAL` era nodo en R1 y se vuelve subgrafo en R2.

---

# 32. PASO 4 — CONVERSIONES

Bourdieu no presenta los tipos como cajas totalmente independientes.

En el texto aparece explícitamente la cuestión de las transformaciones y la convertibilidad.

Podemos construir:

```text
ECONOMIC_CAPITAL
      │
      │ puede convertirse bajo condiciones
      ▼
CULTURAL_CAPITAL

SOCIAL_CAPITAL
      │
      │ puede convertirse bajo condiciones
      ▼
ECONOMIC_CAPITAL

CULTURAL_CAPITAL
      │
      │ puede convertirse bajo condiciones
      ▼
ECONOMIC_CAPITAL
```

La red cognitiva debe registrar las condiciones, no sólo la flecha.

```yaml
edge:
  relation_type: CONVERTIBLE_INTO
  conditions:
    - transformation_cost
    - time
    - field_conditions
```

---

# 33. PASO 5 — CAMPO / CONTEXTO

El texto señala que las formas de capital funcionan dependiendo del campo y de transformaciones que condicionan su eficacia.

La red debe evitar:

```text
CAPITAL → EFICACIA
```

y preferir:

```text
CAPITAL
+
FIELD
+
TRANSFORMATION_CONDITIONS
        ↓
EFFICACY
```

Subgrafo:

```text
           CAPITAL
              │
              ▼
        OPERATES_IN
              │
              ▼
            FIELD
              │
              ▼
          CONDITIONS
              │
              ▼
           EFFICACY
```

---

# 34. PASO 6 — CAPITAL SOCIAL COMO RED

En la sección sobre capital social, Bourdieu vincula su volumen con:

1. el tamaño de la red de conexiones que un agente puede movilizar efectivamente;
2. el volumen de capital poseído por las personas con las que está conectado.

La representación deja de ser:

```text
PERSONA
└── social_capital = 75
```

y pasa a:

```text
                         AGENTE A
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
          ACTOR B         ACTOR C        ACTOR D
             │              │              │
          capital         capital        capital
```

Por tanto, la posición en el grafo importa.

Esto demuestra una característica central de una red cognitiva:

> algunas propiedades no pertenecen solamente a nodos aislados; emergen de la topología de las relaciones.

---

# 35. PASO 7 — ACUMULACIÓN Y TIEMPO

Bourdieu trata el capital como algo acumulado y señala que determinadas formas requieren tiempo para adquirirse.

La red puede contener:

```text
TIME
  │
  ▼
ENABLES_ACCUMULATION
  │
  ▼
CULTURAL_CAPITAL
```

y para el estado incorporado:

```text
PERSONAL_TIME
+
INCULCATION
+
ASSIMILATION
        ↓
EMBODIED_CULTURAL_CAPITAL
```

No estamos añadiendo sólo conceptos. Estamos representando mecanismo.

---

# 36. RED COGNITIVA SIMPLIFICADA DEL EJEMPLO

```text
                                  CAPITAL
                   ┌────────────────┼────────────────┐
                   ▼                ▼                ▼
             ECONOMIC          CULTURAL           SOCIAL
                                  │                  │
                     ┌────────────┼────────────┐     │
                     ▼            ▼            ▼     │
                 EMBODIED     OBJECTIFIED  INSTITUTIONALIZED
                     │            │            │
                     │            │            └──→ qualification
                     │            │
                     │            └──→ cultural goods
                     │
                     └──→ dispositions / embodied capacity

ECONOMIC ──CONVERTIBLE_INTO──→ CULTURAL
CULTURAL ──CONVERTIBLE_INTO──→ ECONOMIC
SOCIAL   ──CONVERTIBLE_INTO──→ ECONOMIC

SOCIAL
  │
  ├── DEPENDS_ON → MOBILIZABLE_NETWORK_SIZE
  └── DEPENDS_ON → CAPITAL_OF_CONNECTIONS

CAPITAL
  │
  └── OPERATES_IN → FIELD
                       │
                       └── CONDITIONS → EFFICACY
```

Esta red es sólo una **vista**. El paquete cognitivo completo incluiría definiciones, fuentes, condiciones y estados epistemológicos.

---

# 37. QUÉ APRENDEMOS DEL EJEMPLO

Bourdieu es útil como caso de prueba porque su texto ejecuta varias operaciones que el constructor debe poder reconocer:

```text
1. DESCOMPOSICIÓN
capital → tipos

2. DESCOMPOSICIÓN RECURSIVA
capital cultural → estados

3. RELACIÓN
formas de capital ↔ conversiones

4. CONTEXTO
capital + campo → eficacia

5. DINÁMICA
acumulación / transmisión / transformación

6. TOPOLOGÍA
capital social depende de redes movilizables

7. MANIFESTACIÓN / INSTITUCIONALIZACIÓN
formas de capital pueden adquirir realizaciones institucionales
```

Una red semántica superficial perdería la mayor parte de estas operaciones.

---

# 38. EJEMPLO GENÉRICO — PUBLICIDAD

El mismo constructor podría recibir:

```text
OBJETO:
proceso publicitario
```

y hallar:

```text
MENSAJE
↓
ATENCIÓN
↓
INTERÉS
↓
DESEO
↓
INTENCIÓN
↓
ACCIÓN
↓
COMPRA
```

Pero después podría abrir:

```text
ATENCIÓN
│
├── saliencia
├── novedad
├── relevancia
└── interrupción
```

y relacionar:

```text
TRUST ENABLES INTENTION
FRICTION INHIBITS ACTION
REPETITION INCREASES_FAMILIARITY
```

Así la funcionalidad no depende del dominio sociológico.

---

# 39. EJEMPLO GENÉRICO — SISTEMA CULTURAL

Objeto:

```text
COCINA MEXICANA COMO SISTEMA
```

Podría construir:

```text
TERRITORIO ENABLES AGRICULTURA
AGRICULTURA PRODUCES INGREDIENTES
TECNICA TRANSFORMS INGREDIENTES
COMUNIDAD TRANSMITS TECNICA
MEMORIA TRANSMITS PRACTICES
RITUAL MAINTAINS SIGNIFICANCE
TORTILLA MANIFESTATION_OF CULTURAL_SYSTEM
```

Aquí la red permite pasar:

```text
PLATILLO
```

de objeto aislado a:

```text
INTERFAZ VISIBLE DE UNA ARQUITECTURA
```

---

# 40. EJEMPLO GENÉRICO — ESTAFA

Una red cognitiva podría separar:

```text
ACTOR GRAPH
BELIEF GRAPH
RESOURCE/CAPACITY GRAPH
TRUST GRAPH
VERIFICATION GRAPH
TEMPORAL GRAPH
MANIFESTATION GRAPH
```

y después superponerlos.

Esto muestra por qué la funcionalidad debe poder crear **subredes especializadas** sin perder un modelo común.

---

# 41. RELACIÓN CON mNODES

La red cognitiva puede usar `mNodes`, pero no debe reducirse a una simple red de nombres.

Principio:

```text
mNode visto desde resolución superior
=
unidad funcional

mNode visto desde resolución inferior
=
posible subgrafo
```

Por tanto:

```text
mNode
↕
subgraph
```

cuando la resolución lo requiera.

La funcionalidad de red cognitiva puede servir para **abrir mNodes**, inspeccionar su arquitectura interna y después volver a encapsularlos.

---

# 42. RELACIÓN CON TMC

La TMC trabaja con formas cognitivas, relaciones, estados, operadores y transformaciones.

Una red cognitiva puede funcionar como:

```text
SUPERFICIE DE INSPECCIÓN
```

de esa arquitectura.

Puede hacer visible:

```text
qué mNodes existen;
qué peso o función poseen;
qué relaciones mantienen;
qué operador transforma qué;
qué estado depende de qué;
qué salida manifiesta qué configuración.
```

No debe confundirse:

```text
TMC = teoría / arquitectura general
RED_COGNITIVA = funcionalidad representacional y analítica
```

---

# 43. RELACIÓN CON COGNICIÓN_CENTRAL

Dentro de COGNICION_CENTRAL, la funcionalidad puede ocupar una posición semejante a otras capacidades invocables.

```text
COGNICION_CENTRAL
│
├── recuperar
├── comparar
├── transformar
├── validar
├── crear artefactos
│
└── CONSTRUIR_ARQUITECTURA_COGNITIVA
       │
       └── PROYECTAR_RED_COGNITIVA
```

El humano conserva el comando soberano.

El sistema:

```text
interpreta
→ recupera fuentes
→ construye
→ valida
→ presenta
```

La creación de una red no modifica automáticamente el canon.

---

# 44. ANALOGÍA CON ARTEFACTOS

La semejanza funcional con los artefactos es importante.

Un artefacto tiene:

```text
schema
estructura
reglas
materialización
versionado
```

La red cognitiva también:

```text
schema
nodos
aristas
validación
proyecciones
versionado
```

Podemos pensar:

```text
ARTEFACTO
=
objeto materializable y portable

ARQUITECTURA_COGNITIVA
=
objeto relacional y operable

RED_COGNITIVA
=
una representación/proyección del segundo
```

Por eso el comando puede ser de alto nivel, igual que:

```text
CREA UN ARTEFACTO
```

puede activar un contrato interno.

---

# 45. VERSIONADO

Una red cognitiva debe poder evolucionar.

```yaml
network:
  id: RC-BOURDIEU-CAPITAL
  version: 0.1.0
  status: DRAFT
```

Cambios:

```text
PATCH
→ corrección local de nodo/arista

MINOR
→ añade subgrafos o nuevas relaciones sin romper identidad

MAJOR
→ cambia ontología, frontera o interpretación nuclear
```

---

# 46. DIFERENCIAS ENTRE FUENTE Y MODELO

Especialmente cuando se usa bibliografía:

```text
FUENTE
≠
MODELO
```

Ejemplo:

```text
BOURDIEU:
describe formas de capital y conversiones.

RED COGNITIVA:
reconstruye esas afirmaciones usando
nodos, aristas y tipos definidos por COGNICION_CENTRAL.
```

No atribuir a Bourdieu términos como:

```text
mNode
RED_COGNITIVA
ACCD
```

salvo que se diga explícitamente que son una reconstrucción del proyecto.

---

# 47. MODOS DE EJECUCIÓN

## `DISCOVERY`

Descubre nodos y relaciones.

## `REFINEMENT`

Abre nodos demasiado gruesos.

## `VALIDATION`

Busca contradicciones y relaciones débiles.

## `PROJECTION`

Produce una vista específica.

## `COMPARISON`

Compara dos arquitecturas.

## `UPDATE`

Integra nuevas fuentes y modifica la red sin reconstruir todo.

---

# 48. ALGORITMO GENERAL PROPUESTO

```text
RC-0  recibir comando
RC-1  identificar objeto
RC-2  definir scope
RC-3  recuperar fuentes
RC-4  segmentar afirmaciones
RC-5  identificar nodos candidatos
RC-6  definir nodos
RC-7  descomponer recursivamente
RC-8  extraer relaciones directas
RC-9  generar relaciones candidatas
RC-10 validar candidatas
RC-11 tipar aristas
RC-12 identificar jerarquías
RC-13 identificar dependencias
RC-14 identificar procesos
RC-15 identificar transformaciones
RC-16 identificar contexto
RC-17 identificar manifestaciones
RC-18 construir subgrafos
RC-19 realizar búsqueda transversal
RC-20 marcar estado epistemológico
RC-21 validar red
RC-22 construir paquete cognitivo
RC-23 proyectar vistas solicitadas
RC-24 entregar
```

---

# 49. ERRORES A EVITAR

## 49.1. Mapa mental disfrazado

Síntoma:

```text
muchos sustantivos
+
flechas sin verbo
```

## 49.2. Sobrerrelación

Todo conectado con todo.

## 49.3. Causalidad excesiva

Usar `CAUSES` donde sólo existe asociación o contribución.

## 49.4. Falta de contexto

Representar capacidades como universales.

## 49.5. Confusión sistema/manifestación

Tomar una salida visible como sistema completo.

## 49.6. Colapso de resolución

Mantener como átomo algo que necesita subgrafo.

## 49.7. Fragmentación

Descomponer sin volver a reconstruir relaciones.

## 49.8. Pérdida de procedencia

No poder distinguir fuente de inferencia.

## 49.9. Red visual como objeto final

Confundir imagen con arquitectura.

---

# 50. CRITERIO DE ÉXITO

La funcionalidad se considera exitosa cuando una persona puede pasar de:

```text
"sé cuáles son los conceptos"
```

a:

```text
"sé qué piezas existen,
cómo se descomponen,
cómo se relacionan,
qué depende de qué,
qué transforma qué,
qué condiciones importan,
qué manifestaciones producen
y qué parte de esta arquitectura
está apoyada por qué fuente."
```

---

# 51. DEFINICIÓN OPERATIVA FINAL

> **RED COGNITIVA es una proyección relacional de una arquitectura cognitiva. Se construye identificando y definiendo nodos, descomponiéndolos cuando sea necesario, buscando sistemáticamente relaciones relevantes, tipándolas, contextualizándolas y vinculándolas con evidencia. Puede contener jerarquías, dependencias, procesos, transformaciones, manifestaciones y estados epistemológicos, y puede proyectarse en múltiples subgrafos según la pregunta del humano.**

---

# 52. COMANDO DE ALTO NIVEL PROPUESTO

```text
CREA UNA RED COGNITIVA DE <OBJETO>
```

Interpretación interna:

```text
1. CONSTRUIR_ARQUITECTURA_COGNITIVA(<OBJETO>)
2. VALIDAR_ARQUITECTURA
3. PROYECTAR_COMO_RED_COGNITIVA
4. ENTREGAR NODOS + RELACIONES + SUBGRAFOS + TRAZABILIDAD
```

Opciones:

```text
RESOLUCIÓN = R0 | R1 | R2 | R3 | R4
EXHAUSTIVIDAD = BAJA | MEDIA | ALTA
FUENTES = CURRENT | PROJECT | EXPLICIT
INFERENCIAS = NONE | LABELED
VIEW = GLOBAL | CAUSAL | DEPENDENCY | TRANSFORMATION | TEMPORAL | MANIFESTATION | EPISTEMIC
```

---

# 53. PLANTILLA DE SALIDA RECOMENDADA

```yaml
cognitive_network:
  id:
  label:
  version:
  status:

  scope:
    includes: []
    excludes: []

  sources: []

  nodes: []

  edges: []

  hierarchies: []

  processes: []

  transformations: []

  contexts: []

  manifestations: []

  subgraphs: []

  epistemic_map:
    source_direct: []
    source_synthesis: []
    inference: []
    hypothesis: []
    design_decision: []

  open_questions: []

  validation:
    status:
    warnings: []

  views:
    global:
    ontology:
    dependency:
    transformation:
    temporal:
    manifestation:
```

---

# 54. FUENTES UTILIZADAS PARA ESTA ESPECIFICACIÓN

## Fuente externa compartida

**Pierre Bourdieu.** _The Forms of Capital_ (1986), versión compartida en:

```text
forms_of_capital_bourdieu.md
```

El ejemplo de Bourdieu utiliza del texto compartido, entre otras piezas:

- capital como acumulación con capacidad potencial de producir efectos;
- necesidad de considerar formas de capital más allá de la económica;
- capital económico, cultural y social como formas fundamentales;
- capital cultural incorporado, objetivado e institucionalizado;
- convertibilidad entre formas bajo determinadas condiciones;
- dependencia de la eficacia respecto del campo;
- capital social ligado a redes movilizables y al capital de los contactos.

## Fuentes internas de COGNICION_CENTRAL

- `APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf`
- `Arquitecturas_Cognitivas_Reutilizables_COGNICION_CENTRAL.pdf`
- `NUEVA_HERRAMIENTA_COGNICION_CENTRAL_TRANSFORMACION_COGNITIVA_v0_1.pdf`
- `ACSI_ARQUITECTURA_COGNITIVA_SECCION_INSTANCIABLE_v0_1_0.md`
- `Comida_Mexicana_como_Sistema_Estudio_UNESCO.pdf`
- artefactos actuales de `COGNICION_CENTRAL` y MTC usados como contexto conceptual.

---

# 55. ESTADO DE LA PROPUESTA

Este documento **no declara automáticamente `RED_COGNITIVA` como pieza canónica de COGNICION_CENTRAL**.

Estado recomendado:

```yaml
proposal:
  name: RED_COGNITIVA
  type:
    - cognitive_object
    - relational_projection
  paired_functionality:
    - CONSTRUIR_ARQUITECTURA_COGNITIVA
    - PROYECTAR_RED_COGNITIVA
  status: FORMALIZED_PROPOSAL
  persistence: NOT_CANONICAL_BY_DEFAULT
  next_steps:
    - probar con dominios heterogéneos
    - validar ontología inicial de relaciones
    - probar multirresolución
    - definir contrato de comparación entre redes
    - integrar con TMC si el humano lo autoriza
```

---

# 56. SÍNTESIS

La funcionalidad propuesta puede resumirse así:

```text
NO:
tema
→ lista de palabras
→ dibujo

SÍ:
tema / sistema / teoría
→ fuentes
→ elementos
→ descomposición
→ relaciones tipadas
→ dinámica
→ contexto
→ manifestaciones
→ validación
→ arquitectura cognitiva
→ red cognitiva
```

El ejemplo de Bourdieu demuestra por qué esta diferencia importa.

Una lectura superficial produce:

```text
CAPITAL
├── económico
├── cultural
└── social
```

Una red cognitiva intenta reconstruir además:

```text
qué significa cada forma
cómo se subdivide
cómo se acumula
cómo se transmite
cómo se convierte
qué condiciones necesita
en qué campo es eficaz
qué depende de redes
qué manifestaciones institucionales puede adoptar
```

El objetivo final de la funcionalidad no es dibujar más flechas.

Es **aumentar la resolución con la que COGNICION_CENTRAL puede representar, inspeccionar, comparar y operar estructuras complejas**.
