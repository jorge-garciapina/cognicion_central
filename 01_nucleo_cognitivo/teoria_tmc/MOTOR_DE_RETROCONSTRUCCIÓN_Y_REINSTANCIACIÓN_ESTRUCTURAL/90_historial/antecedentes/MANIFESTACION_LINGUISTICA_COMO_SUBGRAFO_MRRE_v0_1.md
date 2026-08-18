# MANIFESTACIÓN LINGÜÍSTICA COMO SUBGRAFO
## Unidad retroconstruible de efecto para MRRE

**ID:** `INT-MRRE-MANIFESTACION-LINGUISTICA-COMO-SUBGRAFO-001`  
**Proyecto:** `COGNICIÓN_CENTRAL`  
**Paquete relacionado:** `MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL (MRRE)`  
**Estado:** `HIGH_RELEVANCE / MRRE_CORE_CANDIDATE / EXPLORATORY / NON_CANONICAL`  
**Origen:** consolidación del entendimiento desarrollado en `INT-MRRE-UNIDAD-RETROCONSTRUIBLE-COMO-SUBGRAFO-DE-EFECTO-001`

---

# 0. TESIS CENTRAL

Una manifestación lingüística no debe retroconstruirse como una colección de proposiciones aisladas.

Cada unidad visible puede funcionar como nodo de uno o varios subgrafos cuya eficacia depende de:

```text
relaciones
+
dependencias
+
contexto
+
memoria presupuesta
+
posición secuencial
+
estado cognitivo de entrada
+
función dentro de la trayectoria
```

Por tanto:

> **MRRE debería retroconstruir los subgrafos funcionales que las unidades lingüísticas materializan dentro de una arquitectura cognitiva mayor.**

La unidad mínima útil de retroconstrucción puede no ser:

```text
ORACIÓN
```

ni:

```text
PROPOSICIÓN
```

sino:

```text
SUBGRAFO_DE_EFECTO
```

entendido provisionalmente como:

> **región estructural mínima suficientemente rica para explicar qué función cognitiva realiza una o varias unidades de manifestación dentro de una trayectoria.**

---

# 1. EL PROBLEMA DE TRATAR LA ORACIÓN COMO UNIDAD AUTOSUFICIENTE

Tomemos:

```text
P0:
“La institución X ha fallado.”
```

Una lectura puramente lingüística podría recuperar:

```text
SUJETO:
institución X

PREDICADO:
ha fallado

PROPOSICIÓN:
FAIL(X)
```

Esto puede ser correcto semánticamente, pero para MRRE es insuficiente.

La función real de `P0` puede depender de:

```text
                        RECUERDO_PREVIO
                              │
                              ▼
                         DESCONFIANZA
                              ▲
                              │
P0 ─────→ ATRIBUCIÓN_DE_INTENCIÓN
 │
 ├──────→ COMPARACIÓN
 │
 ├──────→ SENTIMIENTO_DE_PÉRDIDA
 │
 └──────→ NECESIDAD_DE_ALTERNATIVA
```

Entonces:

```text
P0
```

es sólo la parte lingüísticamente visible.

La estructura relevante es aproximadamente:

```text
P0
+
relaciones
+
vecindario funcional
+
dependencias anteriores
+
consecuencias posteriores
+
posición dentro de la trayectoria
```

Ahí aparece el verdadero objeto de MRRE.

---

# 2. DE “PROPOSICIONES SATÉLITE” A NODOS FUNCIONALES

La intuición temprana:

```text
PROPOSICIÓN CENTRAL
      │
      ├── proposición satélite 1
      ├── proposición satélite 2
      └── proposición satélite 3
```

puede reinterpretarse con mayor resolución:

```text
NODO FOCAL P0
      │
      ├── relación R1 → P1
      ├── relación R2 → P2
      ├── relación R3 → P3
      └── relación R4 → P4
```

y después:

```text
SUBGRAFO
=
nodos
+
aristas tipadas
+
dirección
+
función
+
dependencias
+
estado epistemológico
+
posición en trayectoria
+
contexto
```

Una antigua “proposición satélite” puede ser:

```text
evidencia
presuposición
marco
contraste
ejemplo
consecuencia
condición
transición
activador asociativo
objetivo de interpretación
```

No todas son satélites en el mismo sentido.

Algunas:

```text
SOPORTAN P0
```

otras:

```text
SON ACTIVADAS POR P0
```

otras:

```text
PREPARAN P0
```

otras:

```text
SON HABILITADAS DESPUÉS DE P0
```

y otras:

```text
NO APARECEN EXPLÍCITAMENTE
PERO SON PRESUPUESTAS
```

Por ello:

```text
NODO
+
RELACIONES
+
FUNCIÓN_EN_SUBGRAFO
```

es una representación más potente.

---

# 3. MULTIRRESOLUCIÓN: mNODE ↔ SUBGRAFO

La arquitectura requiere una representación multirresolución.

Una frase puede aparecer inicialmente como:

```text
[M17]
```

y después abrirse:

```text
[M17]
  │
  ▼
┌───────────────────────────────┐
│ SUBGRAFO INTERNO              │
│                               │
│ P0 ──SUPPORTS────→ P1         │
│ │                             │
│ ├──ACTIVATES──→ P2            │
│ │                             │
│ └──PREPARES────→ P3           │
└───────────────────────────────┘
```

y posteriormente volver a encapsularse:

```text
SUBGRAFO
   ↓
mNode funcional
```

Esto permite:

```text
RESOLUCIÓN SUPERIOR
→ unidad funcional

RESOLUCIÓN INFERIOR
→ subgrafo interno
```

MRRE necesita precisamente esta capacidad para evitar dos errores:

```text
ATOMIZACIÓN EXCESIVA
```

y:

```text
AGREGACIÓN EXCESIVA
```

---

# 4. GRAFO DE CONOCIMIENTO ≠ RED LINGÜÍSTICA ≠ GUIÓN

Una distinción fundamental es:

```text
GRAFO DE CONOCIMIENTO
≠
RED LINGÜÍSTICA
≠
GUIÓN
```

La arquitectura generativa puede representarse así:

```text
GRAFO DE CONOCIMIENTO
        │
        ▼
TRAYECTORIA COGNITIVA
        │
        ▼
RED DISCURSIVO-LINGÜÍSTICA
        │
        ▼
PROYECCIÓN CONTEXTUAL
        │
        ▼
LINEALIZACIÓN
        │
        ▼
MANIFESTACIÓN LINGÜÍSTICA
```

Por tanto:

```text
TEXTO FINAL
≠
ARQUITECTURA LINGÜÍSTICA
```

El texto final es una realización linealizada de una arquitectura relacional mayor.

MRRE recorre aproximadamente el camino inverso.

---

# 5. MRRE COMO DESLINEALIZADOR

Supongamos que MRRE recibe:

```text
F1 → F2 → F3 → F4 → F5
```

porque el lenguaje obliga a colocar las unidades sucesivamente.

Eso no significa que la arquitectura original sea:

```text
F1 → F2 → F3 → F4 → F5
```

Podría ser:

```text
            P2
           ↗  ↘
P1 ─────→ P3 ─────→ P5
 │          ↑
 └────→ P4 ─┘
```

La serialización lingüística ocultó la simultaneidad relacional.

Por tanto:

```text
MANIFESTACIÓN SERIAL
        ↓
SEGMENTACIÓN
        ↓
IDENTIFICACIÓN FUNCIONAL
        ↓
RECUPERACIÓN DE DEPENDENCIAS
        ↓
DESLINEALIZACIÓN
        ↓
SUBGRAFOS
        ↓
ARQUITECTURA RELACIONAL CANDIDATA
```

La pregunta deja de ser:

```text
¿qué significa cada frase?
```

y pasa a ser:

```text
¿qué papel ocupa cada unidad
dentro de la arquitectura reconstruida?
```

---

# 6. DIRECCIÓN GENERATIVA Y DIRECCIÓN RETROCONSTRUCTIVA

En dirección generativa:

```text
SUBGRAFO
   ↓
TraversalBinding
   ↓
OPERACIÓN COGNITIVA
   ↓
ScriptUnit
   ↓
MANIFESTACIÓN
```

En dirección retroconstructiva:

```text
MANIFESTACIÓN
   ↓
ScriptUnit candidato
   ↓
OPERACIÓN COGNITIVA candidata
   ↓
TraversalBinding inferido
   ↓
SUBGRAFO candidato
```

Esto es más preciso que:

```text
frase
→ idea
```

porque preserva:

```text
estructura
+
función
+
trayectoria
+
dependencias
```

---

# 7. SUBGRAFO_DE_EFECTO

Definición provisional:

```text
SUBGRAFO_DE_EFECTO
=
región estructural mínima suficientemente rica
para explicar la función cognitiva que una o varias
unidades de manifestación realizan dentro de una trayectoria
```

Representación candidata:

```text
SGE = (
  nodo_focal,
  nodos_relacionados,
  aristas,
  funciones,
  dependencias,
  estado_entrada,
  estado_salida_proyectado,
  posición_trayectoria,
  contexto,
  estado_epistemológico
)
```

Esto puede ser una unidad más apropiada para MRRE que:

```text
sentence
```

o:

```text
proposition
```

porque el efecto puede no estar contenido en ninguna oración individual.

---

# 8. EJEMPLO: EL EFECTO EMERGE DE LA CONFIGURACIÓN

Consideremos:

```text
F1:
“Esta institución fue creada para proteger X.”

F2:
“Hace diez años ocurrió A.”

F3:
“Hoy ha ocurrido B.”

F4:
“No es la primera vez.”

F5:
“Quizá el problema no sea un error aislado.”
```

Una extracción proposicional produciría:

```text
P1
P2
P3
P4
P5
```

Pero la arquitectura puede ser:

```text
P1
│
│ establece expectativa
▼
NORMA_ESPERADA
        │
        │ contraste
        ▼
       P2
        │
        │ memoria precedente
        ▼
       P3
        │
        │ analogía
        ▼
       P4
        │
        │ generalización
        ▼
       P5
```

La unidad funcional completa sería:

```text
ESTABLECER NORMA
      ↓
RECORDAR PRECEDENTE
      ↓
MOSTRAR RECURRENCIA
      ↓
DESPLAZAR EXPLICACIÓN
caso aislado → patrón
```

El efecto:

```text
“interpretar B como parte de un patrón”
```

no existe en ninguna frase aislada.

**Emerge de la configuración.**

---

# 9. EL EFECTO PUEDE SER EMERGENTE

Por tanto:

```text
efecto(P0)
```

puede ser una representación insuficiente.

Puede ocurrir:

```text
efecto(P0) = pequeño
efecto(P1) = pequeño
efecto(P2) = pequeño
```

pero:

```text
efecto(P0 + P1 + P2 + relaciones + secuencia)
=
transformación importante
```

En términos de grafo:

```text
E(SG) ≠ Σ E(nodo_i)
```

porque la estructura relacional produce propiedades que no residen en nodos aislados.

---

# 10. EL ORDEN TAMBIÉN ES ESTRUCTURA

Con los mismos nodos:

```text
A B C D
```

Trayectoria 1:

```text
A → B → C → D
```

Trayectoria 2:

```text
C → A → D → B
```

El conjunto de proposiciones puede ser idéntico.

La operación cognitiva no.

Porque:

```text
E0
 ↓ A
E1
 ↓ B
E2
 ↓ C
E3
```

y:

```text
B(E1) ≠ B(E0)
```

Cada unidad encuentra un sistema modificado por las anteriores.

Por tanto, MRRE debe reconstruir:

```text
QUÉ NODOS HAY
```

y también:

```text
EN QUÉ ORDEN SE HACEN OPERABLES
```

---

# 11. GRAFOS QUE MRRE NO DEBE COLAPSAR

Se propone distinguir:

```text
G_K
G_D
G_P
G_R
G_A
G_U
```

## `G_K — GRAFO DE CONOCIMIENTO`

Modela aquello de lo que se habla.

## `G_D — GRAFO DISCURSIVO-LINGÜÍSTICO`

Organiza cómo se construye el recorrido.

## `G_P — RED ASOCIATIVA PROYECTADA`

Representa qué conceptos o relaciones se intenta hacer disponibles.

## `G_R — RED REALIZADA`

Representa lo que efectivamente quedó codificado en la manifestación.

## `G_A — RED ACTIVADA`

Representa lo que efectivamente activa el receptor.

## `G_U — GRAFO COGNITIVO ACTUALIZADO`

Representa el estado resultante del receptor después de la interacción.

Regla de no-colapso:

```text
G_K
≠
G_D
≠
G_P
≠
G_R
≠
G_A
≠
G_U
```

---

# 12. GRADIENTE EPISTEMOLÓGICO

Desde la manifestación, MRRE puede observar:

```text
G_R
```

con mayor evidencia.

Puede reconstruir:

```text
G_D
```

e inferir parcialmente:

```text
G_P
```

Pero no debería afirmar directamente:

```text
G_A
```

sin evidencia del receptor.

Dos personas pueden recibir:

```text
M
```

y producir:

```text
G_A1 ≠ G_A2
```

debido a:

```text
memoria previa
conocimiento
valores
experiencias
contexto
atención
estado emocional
```

Por tanto:

```text
ACTIVACIÓN PROYECTADA
```

debe distinguirse de:

```text
ACTIVACIÓN OBSERVADA
```

Esta separación protege a MRRE de atribuciones psicológicas arbitrarias.

---

# 13. MÓDULOS ANALÍTICOS COMO OBSERVADORES DEL MISMO SUBGRAFO

Segmentación funcional, macroestructura, estructura expositiva, relaciones retóricas, coherencia, argumentación, moves, metadiscurso, intención, atención proyectada, trayectoria y esquemas no deberían producir informes aislados.

Pueden funcionar como observadores complementarios del mismo objeto:

```text
                  UNIDAD M17
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
  RETÓRICA       ATENCIÓN       ARGUMENTO
       │             │             │
       ▼             ▼             ▼
 relación R1      saliencia      soporte R2
       │             │             │
       └─────────────┼─────────────┘
                     ▼
               SUBGRAFO LOCAL
```

La integración conceptual no sería:

```text
análisis retórico
+
análisis argumental
+
análisis narrativo
+
análisis atencional
```

como informes independientes.

Sería:

```text
MÚLTIPLES OBSERVADORES
→
UNA MISMA ARQUITECTURA RELACIONAL
```

---

# 14. INTEGRATED_CONCEPTUAL_ARCHITECTURE

Una lectura más fuerte de `INTEGRATED_CONCEPTUAL_ARCHITECTURE` sería:

```text
                         P0
                  ┌──────┼──────┐
                  │      │      │
              soporte contraste atención
                  │      │      │
                  ▼      ▼      ▼
                 P1     P2     P3
                  \      │      /
                   \     │     /
                    ▼    ▼    ▼
                 ESTADO OBJETIVO
```

Cada análisis aporta una dimensión del mismo grafo.

La arquitectura integrada debería unificar:

```text
nodos
+
relaciones
+
funciones
+
dependencias
+
trayectoria
+
efectos proyectados
+
estatus epistemológico
```

---

# 15. RED DISCURSIVA ≠ RED ASOCIATIVA

Una red discursivo-lingüística puede ser:

```text
P1
  ↓ evidencia
P2
  ↓ contraste
P3
```

Mientras una red asociativa proyectada puede ser:

```text
P2
 ├──→ recuerdo
 ├──→ categoría
 ├──→ emoción
 ├──→ comparación
 └──→ expectativa
```

La primera describe:

```text
cómo está organizado el discurso
```

La segunda intenta modelar:

```text
qué región cognitiva se pretende volver disponible
```

Relación:

```text
RED DISCURSIVA
        │
        │ realiza
        ▼
MANIFESTACIÓN
        │
        │ proyecta
        ▼
RED ASOCIATIVA
```

No hay necesariamente correspondencia 1:1.

---

# 16. LA FUNCIÓN DEPENDE DEL VECINDARIO

Tomemos:

```text
“La empresa perdió 40 millones.”
```

Aislada, es una afirmación factual.

En:

```text
ganó 200 millones
↓
perdió 40 millones
↓
pero mantiene liquidez
```

puede funcionar como:

```text
MATIZACIÓN
```

En:

```text
primer trimestre perdió 10
↓
segundo perdió 20
↓
tercero perdió 40
```

puede funcionar como:

```text
ESCALAMIENTO
```

En:

```text
se afirma que la estrategia funciona
↓
perdió 40 millones
```

puede funcionar como:

```text
CONTRAARGUMENTO
```

Por tanto:

```text
FUNCIÓN(P)
≠
propiedad intrínseca de P
```

sino:

```text
FUNCIÓN(P)
=
f(P, vecindario, posición, trayectoria, contexto)
```

MRRE debe reconstruir precisamente esa función situada.

---

# 17. EL ESQUELETO NO DEBE SER UNA PLANTILLA EDITORIAL

Un esqueleto superficial:

```text
INTRO
PROBLEMA
DESARROLLO
CONCLUSIÓN
```

puede capturar forma editorial, pero perder:

```text
qué nodo prepara qué
qué relación habilita una reinterpretación
qué memoria se presupone
qué contraste desplaza el estado
qué dependencia debe preceder a otra
qué rutas alternativas admite la red
```

Un esqueleto estructural debería parecerse más a:

```text
ESTABILIZAR X
      ↓
INTRODUCIR CONTRADICCIÓN Y
      ↓
ACTIVAR MARCO Z
      ↓
REINTERPRETAR X
      ↓
TRANSFERIR Z A CASO W
```

Cada etapa puede abrirse como subgrafo.

---

# 18. MANIFESTACIÓN COMO CORTE DEL GRAFO MAYOR

```text
ARQUITECTURA TOTAL
        │
        ▼
GRAFO MAYOR
        │
        │ selección contextual
        ▼
SUBGRAFO RELEVANTE
        │
        │ proyección
        ▼
MANIFESTACIÓN
```

La manifestación lingüística es un corte.

MRRE recibe ese corte:

```text
CORTE
 ↓
retroconstrucción
 ↓
región de arquitectura
```

pero no debe concluir:

```text
región reconstruida
=
arquitectura completa
```

La manifestación es evidencia parcial de una arquitectura mayor.

---

# 19. IMAGEN AMPLIADA DE MRRE

Versión simple:

```text
MANIFESTACIÓN
      ↓
ESQUELETO
      ↓
REINSTANCIACIÓN
```

Versión de mayor resolución:

```text
MANIFESTACIÓN M
      │
      ▼
SEGMENTACIÓN MULTIRRESOLUCIÓN
      │
      ▼
UNIDADES FUNCIONALES
      │
      ▼
NODOS + ARISTAS
      │
      ▼
SUBGRAFOS LOCALES
      │
      ▼
DEPENDENCIAS ENTRE SUBGRAFOS
      │
      ▼
TRAYECTORIA COGNITIVA
      │
      ▼
ARQUITECTURA GENERADORA CANDIDATA
      │
      ▼
INVARIANTES
      │
      ▼
DOMINIO DE VARIACIÓN
      │
      ▼
ESQUELETO REINSTANCIABLE
```

Esta segunda imagen expresa con mayor precisión la función de un motor de retroconstrucción y reinstanciación estructural.

---

# 20. REINSTANCIACIÓN COMO PRESERVACIÓN ESTRUCTURAL

Supongamos que MRRE descubre:

```text
EXPECTATIVA
    ↓
CONTRADICCIÓN
    ↓
PRECEDENTE
    ↓
PATRÓN
    ↓
REINTERPRETACIÓN
```

No necesita copiar frases ni sustantivos originales.

Puede reinstanciar:

```text
EXPECTATIVA'
    ↓
CONTRADICCIÓN'
    ↓
PRECEDENTE'
    ↓
PATRÓN'
    ↓
REINTERPRETACIÓN'
```

en otro contexto.

La validación debe preguntar:

```text
¿se preservó la función?
¿se preservaron las dependencias?
¿se preservó la topología?
¿se preservó la trayectoria?
¿se preservaron los invariantes?
```

No sólo:

```text
¿se parecen los textos?
```

---

# 21. SALTO CONCEPTUAL

Evolución:

```text
ANTES

PROPOSICIÓN
=
unidad de significado
```

Luego:

```text
PROPOSICIÓN + SATÉLITES
=
unidad ampliada de significado
```

Ahora:

```text
SUBGRAFO DE EFECTO
=
unidad relacional de operación cognitiva
```

La pregunta central deja de ser:

> ¿Qué significa este fragmento?

y pasa a ser:

> **¿Qué operación realiza este fragmento dentro de la arquitectura y qué región relacional necesita para realizarla?**

---

# 22. FORMULACIÓN CANDIDATA PARA MRRE

> **Una manifestación lingüística no debe retroconstruirse como una colección de proposiciones aisladas. Cada unidad visible puede funcionar como nodo de uno o varios subgrafos cuya eficacia depende de relaciones, dependencias, contexto, memoria presupuesta, posición secuencial y estado cognitivo de entrada. MRRE debe reconstruir esos subgrafos, integrarlos en una trayectoria y distinguir la arquitectura discursiva realizada de la red asociativa proyectada y de cualquier activación real atribuible al receptor.**

Y:

> **La unidad mínima útil de retroconstrucción puede no ser la oración ni la proposición, sino el subgrafo de efecto suficientemente completo para explicar qué transformación cognitiva intenta realizar una región de la manifestación.**

---

# 23. REGLAS DE NO-COLAPSO

```text
PROPOSICIÓN
≠
SUBGRAFO
```

```text
NODO FOCAL
≠
VECINDARIO
```

```text
RED DISCURSIVA
≠
RED ASOCIATIVA
```

```text
RED PROYECTADA
≠
RED REALIZADA
≠
RED ACTIVADA
```

```text
MANIFESTACIÓN
≠
ARQUITECTURA COMPLETA
```

```text
ORDEN LINGÜÍSTICO
≠
TOPOLOGÍA
```

```text
FUNCIÓN DEL NODO
≠
PROPIEDAD INTRÍNSECA DEL NODO
```

```text
ACTIVACIÓN PROYECTADA
≠
ACTIVACIÓN OBSERVADA
```

```text
ESQUELETO
≠
PLANTILLA EDITORIAL
```

```text
PRESERVACIÓN ESTRUCTURAL
≠
SIMILITUD TEXTUAL
```

---

# 24. OBJETO CANDIDATO

```yaml
subgrafo_de_efecto:
  focal_node:
  related_nodes: []
  typed_edges: []
  local_functions: []
  dependencies:
    previous: []
    simultaneous: []
    subsequent: []
    presupposed: []
  input_state:
  projected_output_state:
  trajectory_position:
  context:
  epistemic_status:
  source_bindings: []
  projected_associations: []
  realized_relations: []
  observed_activation: null
```

Este objeto es una propuesta de trabajo, no un schema canónico.

---

# 25. PIPELINE CANDIDATO PARA MRRE

```text
MANIFESTACIÓN
↓
SEGMENTACIÓN
↓
UNIDADES VISIBLES
↓
CANDIDATOS A NODO FOCAL
↓
VECINDARIOS FUNCIONALES
↓
RELACIONES TIPADAS
↓
DEPENDENCIAS
↓
DESLINEALIZACIÓN
↓
SUBGRAFOS LOCALES
↓
FUNCIONES SITUADAS
↓
TRAYECTORIA
↓
ARQUITECTURA CONCEPTUAL INTEGRADA
↓
INVARIANTES
↓
DOMINIO DE VARIACIÓN
↓
ESQUELETO REINSTANCIABLE
↓
STRUCTURE_PRESERVATION_DIFF
```

---

# 26. ESTADO

```yaml
concept:
  id: INT-MRRE-MANIFESTACION-LINGUISTICA-COMO-SUBGRAFO-001
  status:
    - HIGH_RELEVANCE
    - MRRE_CORE_CANDIDATE
    - EXPLORATORY
    - NON_CANONICAL

  core_claim:
    manifestation_unit_is_not_assumed_atomic: true
    focal_node_can_expand_to_subgraph: true
    effect_can_be_emergent: true
    order_is_structural: true
    delinearization_required: true
    graph_layers_must_not_collapse: true
    reinstantiation_requires_structural_preservation: true
```

**FIN DEL DOCUMENTO**
