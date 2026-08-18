https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7e330c-acb0-83e8-91e9-0b281041ace9

# CATÁLOGO COMPLEMENTARIO DE PATRONES DE DISEÑO COGNITIVO REUTILIZABLES

**ID:** `INT-EXTENSION-CATALOGO-PATRONES-COGNITIVOS-TRANSFERIBLES-002`  
**Versión:** `0.2.0`  
**Estado:** `EXPLORATORY / CROSS_CUTTING / NON_CANONICAL`  
**Tipo:** extensión deduplicada de catálogo de patrones de diseño cognitivo  
**Documento base:** `CATALOGO_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_1_0(1).md`  
**Cobertura del documento base:** `PAT-COG-001` a `PAT-COG-063`  
**Cobertura de esta extensión:** `PAT-COG-064` a `PAT-COG-115`

---

# 0. PROPÓSITO Y REGLA DE DEDUPLICACIÓN

Este documento incorpora estructuras cognitivas reutilizables que no estaban formalizadas como patrones independientes en el catálogo base.

No vuelve a definir los patrones `PAT-COG-001` a `PAT-COG-063`. Cuando una estructura observada resulta ser una aplicación, combinación o especialización de uno de ellos, se conserva únicamente como correspondencia en la sección 7.

La comparación se realizó sobre seis dimensiones:

```text
INTENCIÓN
+
PROBLEMA QUE RESUELVE
+
COMPONENTES
+
RELACIONES / FLUJO
+
INVARIANTES
+
CONDICIONES DE FALLO
```

Se aplicó la regla:

```text
MISMA INTENCIÓN
+
MISMOS INVARIANTES
+
MISMA TOPOLOGÍA FUNCIONAL
=
MISMO PATRÓN
```

aunque cambien los nombres o el dominio.

En cambio:

```text
MISMO DOMINIO
+
DISTINTA RESPONSABILIDAD
O
DISTINTA TOPOLOGÍA OPERATIVA
=
PATRÓN DIFERENTE
```

## 0.1. Estructuras deliberadamente no repetidas

Entre otras, no se vuelven a presentar:

- separación fuente/material/mediación/recepción (`PAT-COG-001`);
- convergencia de fuentes e inspección reflexiva (`PAT-COG-002`);
- materiales de Orden 1 y Orden 2 (`PAT-COG-003`);
- convergencia memoria/emoción/identidad (`PAT-COG-010`);
- nodo central con subgrafo satélite (`PAT-COG-011`);
- subgrafo como unidad de efecto (`PAT-COG-012`);
- chain como trayectoria de una red (`PAT-COG-013`);
- manifestación como corte (`PAT-COG-015`);
- red proyectada, realizada y activada (`PAT-COG-016`);
- red de efectos cognitivos (`PAT-COG-017`);
- reconfiguración de grafo (`PAT-COG-020`);
- campo → corte → proyección → manifestación (`PAT-COG-024`);
- resultado esperado como selector (`PAT-COG-025`);
- retroconstrucción general (`PAT-COG-026`);
- trazabilidad de manifestación (`PAT-COG-028`);
- locus de gobierno y separación gobierno/ejecución (`PAT-COG-030` y `PAT-COG-031`);
- fábrica de adaptaciones contextuales (`PAT-COG-044`);
- adaptación sin pérdida de identidad (`PAT-COG-045`);
- heurística gobernada (`PAT-COG-047`);
- generación estructuralmente guiada (`PAT-COG-048`);
- integración estructural acumulativa (`PAT-COG-051`);
- representación operable (`PAT-COG-061`).

## 0.2. Criterio de lectura

Cada patrón nuevo se describe mediante:

```text
INTENCIÓN
→ ESTRUCTURA
→ INVARIANTES
→ VARIACIONES
→ FALLOS
→ RELACIONES CON OTROS PATRONES
```

Los diagramas son proyecciones lineales de arquitecturas que pueden contener ramas, ciclos, alternativas, gates y subgrafos.

---

# 1. ÍNDICE DE PATRONES NUEVOS

| ID            | Nombre abreviado                                    | Familia                   |
| ------------- | --------------------------------------------------- | ------------------------- |
| `PAT-COG-064` | Aparato estable / configuración dinámica            | Inducción y abstracción   |
| `PAT-COG-065` | Retroconstrucción en dos transformaciones           | Inducción y abstracción   |
| `PAT-COG-066` | Inducción antes de generación                       | Inducción y abstracción   |
| `PAT-COG-067` | Esquema inducido por ejemplar                       | Inducción y abstracción   |
| `PAT-COG-068` | Tipología de variabilidad estructural               | Inducción y abstracción   |
| `PAT-COG-069` | Contrato multidimensional de posición variable      | Inducción y abstracción   |
| `PAT-COG-070` | Función relacionalmente situada                     | Inducción y abstracción   |
| `PAT-COG-071` | Linearización y deslinearización estructural        | Inducción y abstracción   |
| `PAT-COG-072` | Trazabilidad bidireccional multiescala              | Inducción y abstracción   |
| `PAT-COG-073` | Gradiente abductivo de certeza                      | Inducción y abstracción   |
| `PAT-COG-074` | Campo focal y federación explícita                  | Inducción y abstracción   |
| `PAT-COG-075` | Campo multiplexado con identidad compartida         | Inducción y abstracción   |
| `PAT-COG-076` | Navegación estructural antes de matching            | Reinstanciación           |
| `PAT-COG-077` | Recuperación, equivalencia y binding no colapsables | Reinstanciación           |
| `PAT-COG-078` | Equivalencia funcional-relacional contractual       | Reinstanciación           |
| `PAT-COG-079` | Población respaldada y hueco explícito              | Reinstanciación           |
| `PAT-COG-080` | Alternativas sobrevivientes como resultado          | Reinstanciación           |
| `PAT-COG-081` | Diff de preservación estructural                    | Reinstanciación           |
| `PAT-COG-082` | Validación circular por reingreso                   | Reinstanciación           |
| `PAT-COG-083` | Selección identitaria situada                       | Reinstanciación           |
| `PAT-COG-084` | Alineación descendente y ascendente del efecto      | Reinstanciación           |
| `PAT-COG-085` | Composición mediante operadores tipados             | Reinstanciación           |
| `PAT-COG-086` | Contratos fronterizos entre capas                   | Reinstanciación           |
| `PAT-COG-087` | Espacio de decisión antes de configuración          | Runtime e integración     |
| `PAT-COG-088` | Configurador transversal / ejecutor semántico       | Runtime e integración     |
| `PAT-COG-089` | Núcleo independiente del consumidor                 | Runtime e integración     |
| `PAT-COG-090` | Registro de adaptadores y routing por modalidad     | Runtime e integración     |
| `PAT-COG-091` | Especialización por restricciones añadidas          | Runtime e integración     |
| `PAT-COG-092` | Contextos tipados no intercambiables                | Runtime e integración     |
| `PAT-COG-093` | Validación por fronteras causales                   | Runtime e integración     |
| `PAT-COG-094` | Activación, evaluación e integración                | Runtime e integración     |
| `PAT-COG-095` | Representación de red multirresolución              | Runtime e integración     |
| `PAT-COG-096` | De lista nominal a protocolo operativo              | Protocolariedad           |
| `PAT-COG-097` | Estado protocolario                                 | Protocolariedad           |
| `PAT-COG-098` | Cierre léxico y referencia responsable              | Protocolariedad           |
| `PAT-COG-099` | Ejemplo como fixture de conocimiento                | Protocolariedad           |
| `PAT-COG-100` | El ejemplo tensiona, no define, el núcleo           | Protocolariedad           |
| `PAT-COG-101` | Calibración estratificada multicorpus               | Protocolariedad           |
| `PAT-COG-102` | Fallo tipado como control de flujo                  | Protocolariedad           |
| `PAT-COG-103` | Resolución parcial sin invención                    | Protocolariedad           |
| `PAT-COG-104` | Grafo de fuentes / grafo cognitivo / bindings       | Protocolariedad           |
| `PAT-COG-105` | Recuperación cognitiva mínima suficiente            | Protocolariedad           |
| `PAT-COG-106` | Espacios tipados de autoridad y trabajo             | Protocolariedad           |
| `PAT-COG-107` | Acumulaciones no fusionables                        | Protocolariedad           |
| `PAT-COG-108` | Precedencia epistemológica y promoción explícita    | Protocolariedad           |
| `PAT-COG-109` | Scaffolding estructural + contextual                | Construcción transferible |
| `PAT-COG-110` | Materialización diferida                            | Construcción transferible |
| `PAT-COG-111` | Guía accionable por unidad futura                   | Construcción transferible |
| `PAT-COG-112` | Materialización ordenada por dependencias           | Construcción transferible |
| `PAT-COG-113` | Modos de construcción con identidad invariante      | Construcción transferible |
| `PAT-COG-114` | Revalidación retroactiva incremental                | Construcción transferible |
| `PAT-COG-115` | Candidato → revisión → promoción                    | Construcción transferible |

---

# FAMILIA I — INDUCCIÓN, ABSTRACCIÓN Y REPRESENTACIÓN ESTRUCTURAL

---

# PAT-COG-064 — APARATO ESTABLE / CONFIGURACIÓN DINÁMICA

## Intención

Separar la identidad del sistema que analiza de la identidad de las estructuras particulares que produce.

## Estructura

```text
APARATO ESTABLE
├─ métodos
├─ protocolos
├─ tipos
├─ contratos
├─ validadores
└─ reglas epistemológicas
        │
        ▼
ENTRADA PARTICULAR
        │
        ▼
CONFIGURACIÓN DINÁMICA
├─ estructura inducida
├─ candidatos
├─ bindings
├─ hipótesis
└─ realización
```

## Invariantes

- el aparato conserva identidad entre ejecuciones;
- la salida puede cambiar de topología y profundidad;
- las reglas gobiernan cómo se induce y valida una estructura, no cuál debe ser siempre esa estructura;
- el dinamismo del producto no implica arbitrariedad del método.

## Problema que evita

```text
UNA SOLA PLANTILLA DE CONTENIDO
=
TODAS LAS MANIFESTACIONES POSIBLES
```

## Relación con el catálogo base

Complementa `PAT-COG-044` y `PAT-COG-045`: aquellos gobiernan adaptación de un núcleo; éste distingue el aparato que induce configuraciones de las configuraciones inducidas.

---

# PAT-COG-065 — RETROCONSTRUCCIÓN EN DOS TRANSFORMACIONES

## Intención

Evitar saltar directamente de una manifestación a una abstracción reusable sin reconstruir primero su arquitectura interna.

## Estructura

```text
TRANSFORMACIÓN 1

MANIFESTACIÓN
→ UNIDADES OBSERVABLES
→ SEGMENTOS FUNCIONALES
→ RELACIONES
→ FUNCIONES
→ ARQUITECTURA CONCEPTUAL INTEGRADA

TRANSFORMACIÓN 2

ARQUITECTURA CONCEPTUAL INTEGRADA
→ INVARIANTES
→ POSICIONES VARIABLES
→ CONTRATOS
→ RESTRICCIONES
→ ESQUELETO REUTILIZABLE
```

## Invariantes

- la primera transformación explica el ejemplar;
- la segunda determina qué puede conservarse y qué puede variar;
- cada transformación produce un artefacto inspeccionable;
- un error en la primera etapa invalida abstracciones posteriores.

## Diferencia respecto de `PAT-COG-026`

`PAT-COG-026` describe la dirección general de retroconstrucción. Este patrón especifica una frontera intermedia obligatoria: primero arquitectura conceptual, después esqueleto.

---

# PAT-COG-066 — INDUCCIÓN ANTES DE GENERACIÓN

## Intención

Construir reglas generativas a partir de análisis comparados y falsables, en lugar de declararlas únicamente desde intuiciones previas.

## Estructura

```text
EJEMPLARES
→ ANÁLISIS
→ RECONSTRUCCIONES
→ COMPARACIÓN
→ ALTERNATIVAS
→ CASOS NEGATIVOS
→ INVARIANTES CANDIDATOS
→ PRUEBAS
→ REGLAS GENERATIVAS CANDIDATAS
→ GENERACIÓN
```

## Invariantes

- el análisis precede a la producción general;
- los contraejemplos tienen capacidad de modificar las reglas;
- las reglas se mantienen como candidatas mientras falte calibración;
- generar no prueba que la regla generativa sea correcta.

## Anti-patrón

```text
INTUICIÓN DE DISEÑO
→ GRAMÁTICA UNIVERSAL
→ FORZAR EJEMPLARES
```

---

# PAT-COG-067 — ESQUEMA INDUCIDO POR EJEMPLAR

## Intención

Permitir que cada ejemplar produzca su propia hipótesis estructural sin exigir pertenencia previa a una plantilla universal.

## Estructura

```text
EJEMPLAR_i
        ↓
RECONSTRUCCIÓN_i
        ↓
ESQUEMA_i

EJEMPLAR_j
        ↓
RECONSTRUCCIÓN_j
        ↓
ESQUEMA_j
```

Después puede evaluarse:

```text
ESQUEMA_i ↔ ESQUEMA_j
        ↓
MISMA FAMILIA
O
FAMILIAS DIFERENTES
O
EVIDENCIA INSUFICIENTE
```

## Invariantes

- el esquema se deriva del ejemplar y conserva traza a él;
- dos ejemplares superficialmente similares pueden producir esqueletos diferentes;
- una familia se propone después de comparar, no antes de analizar;
- un solo ejemplar permite una hipótesis reusable, no garantiza universalidad.

---

# PAT-COG-068 — TIPOLOGÍA DE VARIABILIDAD ESTRUCTURAL

## Intención

Representar de manera explícita qué debe permanecer, qué puede variar, qué puede faltar y dónde se permite adaptación controlada.

## Estructura

```text
ARQUITECTURA ABSTRAÍDA
├─ INVARIANTE_FUERTE
├─ INVARIANTE_PARAMETRIZABLE
├─ SLOT_REQUERIDO
├─ SLOT_OPCIONAL
├─ SLOT_CONDICIONAL
├─ SLOT_REPETIBLE
├─ SLOT_SUBGRAPH
├─ ADAPTATION_POINT
└─ REALIZACIÓN_SUPERFICIAL
```

## Semántica operativa

- `INVARIANTE_FUERTE`: su ruptura cambia la identidad estructural.
- `INVARIANTE_PARAMETRIZABLE`: conserva relación o función, pero admite otro valor.
- `SLOT_REQUERIDO`: debe recibir un equivalente respaldado.
- `SLOT_OPCIONAL`: admite ausencia bajo regla explícita.
- `SLOT_CONDICIONAL`: sólo es obligatorio si se activa una condición.
- `SLOT_REPETIBLE`: admite cardinalidad variable.
- `SLOT_SUBGRAPH`: recibe una configuración relacional, no sólo una entidad.
- `ADAPTATION_POINT`: autoriza variación controlada y versionada.
- `REALIZACIÓN_SUPERFICIAL`: puede recompilarse sin alterar el esqueleto.

## Regla

Una etiqueta sólo es válida si incluye criterio de clasificación y prueba de preservación.

---

# PAT-COG-069 — CONTRATO MULTIDIMENSIONAL DE POSICIÓN VARIABLE

## Intención

Impedir que una posición variable sea llenada únicamente porque un candidato comparte nombre, tema o categoría.

## Estructura

```text
SLOT
├─ función requerida
├─ rol requerido
├─ tipos admisibles
├─ relaciones obligatorias
├─ escala
├─ posición secuencial
├─ política identitaria
├─ cardinalidad
├─ contribución de efecto
├─ evidencia mínima
└─ prueba de preservación
```

## Invariantes

- el contrato existe antes de seleccionar candidato;
- cada dimensión puede aprobar, debilitar o rechazar la correspondencia;
- los requisitos ausentes permanecen visibles;
- un slot puede aceptar nodo, relación o subgrafo si el contrato lo autoriza.

## Anti-patrón

```text
SLOT: "PERSONA IMPORTANTE"
→ CUALQUIER PERSONA CONOCIDA
```

---

# PAT-COG-070 — FUNCIÓN RELACIONALMENTE SITUADA

## Intención

Evitar atribuir una función permanente a un nodo cuando su papel depende de su posición dentro de una configuración.

## Estructura

```text
FUNCIÓN(P)
=
f(
  P,
  VECINDARIO,
  POSICIÓN,
  TRAYECTORIA,
  CORTE,
  PARTE,
  CONTEXTO
)
```

## Consecuencia

```text
MISMO NODO
+
DISTINTO CORTE / VECINDARIO / PARTE
=
DISTINTA FUNCIÓN LOCAL POSIBLE
```

Roles como foco, satélite, evidencia, fondo, puente o reparación pertenecen normalmente a una relación situada, no a la esencia del nodo.

## Relación con el catálogo base

Profundiza `PAT-COG-011` y `PAT-COG-012`, pero añade una regla funcional: la unidad de análisis no es sólo el nodo o el subgrafo, sino la participación situada del nodo en una trayectoria.

---

# PAT-COG-071 — LINEARIZACIÓN Y DESLINEALIZACIÓN ESTRUCTURAL

## Intención

Modelar la traducción entre arquitecturas relacionales simultáneas y manifestaciones secuenciales.

## Estructura

### Dirección generativa

```text
GRAFO DE CONOCIMIENTO
→ TRAYECTORIA COGNITIVA
→ RED DISCURSIVO-FUNCIONAL
→ PROYECCIÓN CONTEXTUAL
→ LINEARIZACIÓN
→ MANIFESTACIÓN
```

### Dirección reconstructiva

```text
MANIFESTACIÓN
→ SEGMENTACIÓN
→ IDENTIFICACIÓN FUNCIONAL
→ RECUPERACIÓN DE DEPENDENCIAS
→ DESLINEALIZACIÓN
→ SUBGRAFOS
→ ARQUITECTURA RELACIONAL CANDIDATA
```

## Invariantes

- el orden de presentación no equivale a la topología completa;
- relaciones simultáneas pueden realizarse sucesivamente;
- deslinearizar exige recuperar dependencias, no sólo reordenar frases;
- varias arquitecturas candidatas pueden explicar una misma secuencia.

---

# PAT-COG-072 — TRAZABILIDAD BIDIRECCIONAL MULTIESCALA

## Intención

Permitir recorrer una arquitectura desde sus capas globales hasta sus unidades perceptibles y regresar sin perder procedencia ni función.

## Estructura

```text
CAMPO
→ CORTE
→ ESTRUCTURA
→ MÓDULO
→ PARTE
→ UNIDAD
→ SPAN / PALABRA
```

y:

```text
SPAN / PALABRA
→ UNIDAD
→ PARTE
→ MÓDULO
→ ESTRUCTURA
→ CORTE
→ CAMPO
```

## Invariantes

- cada enlace declara tipo y procedencia;
- bajar de escala explica realización local;
- subir de escala explica contribución y pertenencia;
- la resolución puede ser desigual, pero sus omisiones deben declararse.

## Diferencia respecto de `PAT-COG-028`

`PAT-COG-028` traza procedencia hacia una manifestación. Este patrón exige además navegación reversible entre escalas funcionales.

---

# PAT-COG-073 — GRADIENTE ABDUCTIVO DE CERTEZA

## Intención

Evitar que todas las capas de una reconstrucción reciban el mismo nivel de certeza.

## Estructura

```text
OBSERVACIÓN DIRECTA
        ↓
RECONSTRUCCIÓN CERCANA
        ↓
RECONSTRUCCIÓN TRAZABLE
        ↓
INFERENCIA ESTRUCTURAL
        ↓
HIPÓTESIS DE DISEÑO
        ↓
HIPÓTESIS COMO-SI
        ↓
NO INFERIBLE SIN EVIDENCIA ADICIONAL
```

## Invariantes

- retroceder hacia causas generativas suele aumentar incertidumbre;
- una explicación elegante no eleva por sí sola su estatus;
- lo psicológicamente interno no se atribuye desde una superficie sin evidencia;
- cada artefacto conserva un registro de incertidumbre.

## Uso

Útil en análisis forense, diagnóstico, interpretación textual, reconstrucción de decisiones y cualquier inferencia desde efectos observables.

---

# PAT-COG-074 — CAMPO FOCAL Y FEDERACIÓN EXPLÍCITA

## Intención

Mantener coherencia local sin borrar incompatibilidades entre dominios, casos o conjuntos de fuentes.

## Estructura

```text
EJECUCIÓN
→ CAMPO FOCAL
   ├─ frontera
   ├─ identidad de caso
   ├─ fuentes
   ├─ conflictos internos
   └─ regiones faltantes
```

Cuando dos conjuntos no pueden integrarse sin forzar identidad:

```text
CAMPO A      CAMPO B
    \          /
     \        /
      FEDERACIÓN
      CON FRONTERAS
      Y PUENTES TIPADOS
```

## Regla

```text
UN SOLO NÚCLEO CONCEPTUAL
≠
AUTORIZACIÓN PARA BORRAR FRONTERAS
```

---

# PAT-COG-075 — CAMPO MULTIPLEXADO CON IDENTIDAD COMPARTIDA

## Intención

Representar distintas dimensiones de un mismo caso sin aplanarlas en una sola taxonomía o cronología.

## Estructura

```text
IDENTIFICADORES ESTABLES
        │
        ├─ CAPA DE ENTIDAD / IDENTIDAD
        ├─ CAPA TEMPORAL / EVENTOS
        ├─ CAPA CAUSAL / MECANISMOS
        ├─ CAPA ARGUMENTAL / EVIDENCIA
        ├─ CAPA DE OBJETIVOS / RESTRICCIONES
        ├─ CAPA CONTEXTUAL
        └─ CAPA ASOCIATIVA
```

## Invariantes

- una entidad puede comparecer en varias capas mediante el mismo identificador;
- cada capa conserva tipos de relación propios;
- integrar capas no significa hacer equivalentes sus relaciones;
- contradicciones y ausencias permanecen explícitas.

## Utilidad

Permite que analizadores especializados construyan vistas legítimas del mismo campo sin competir por una representación plana única.

---

# FAMILIA J — REINSTANCIACIÓN, EQUIVALENCIA Y PRESERVACIÓN

---

# PAT-COG-076 — NAVEGACIÓN ESTRUCTURAL ANTES DE MATCHING

## Intención

Evitar buscar equivalentes en materiales nuevos antes de comprender la organización del espacio en el que aparecen.

## Estructura

```text
FUENTES NUEVAS
→ INGESTA
→ SEGMENTACIÓN
→ CAPAS
→ NODOS / RELACIONES
→ COBERTURA
→ CONFLICTOS / AUSENCIAS
→ CAMPO ESTRUCTURAL NUEVO
→ RECUPERACIÓN DE CANDIDATOS
```

## Invariantes

- la selección humana de fuentes delimita alcance, no prueba equivalencia;
- el candidato se interpreta dentro de su vecindario y procedencia;
- la búsqueda conserva rutas recorridas y regiones no inspeccionadas;
- `NO_EQUIVALENT` no es válido si la navegación fue insuficiente.

## Anti-patrón

```text
SLOT
→ BÚSQUEDA LÉXICA GLOBAL
→ PRIMER RESULTADO FLUIDO
```

---

# PAT-COG-077 — RECUPERACIÓN, EQUIVALENCIA Y BINDING NO COLAPSABLES

## Intención

Separar tres decisiones que suelen confundirse: localizar algo, juzgar su compatibilidad y autorizar su uso.

## Estructura

```text
RECUPERACIÓN
→ CANDIDATO
→ EVALUACIÓN DE EQUIVALENCIA
→ MAPEO PROPUESTO
→ VALIDACIÓN
→ BINDING ACEPTADO
```

## Reglas de no colapso

```text
RECUPERADO ≠ EQUIVALENTE
EQUIVALENTE ≠ SELECCIONADO
SELECCIONADO ≠ VINCULADO SIN TRAZA
```

## Invariantes

- cada etapa produce un objeto distinto;
- pueden recuperarse muchos candidatos para un solo slot;
- un candidato puede ser plausible pero permanecer alternativo;
- el binding registra quién o qué lo autorizó.

---

# PAT-COG-078 — EQUIVALENCIA FUNCIONAL-RELACIONAL CONTRACTUAL

## Intención

Transferir estructuras entre dominios sin depender de semejanza verbal o temática.

## Estructura

```text
EQUIVALENCIA(CANDIDATO, SLOT)
=
COMPATIBILIDAD DE FUNCIÓN
+ COMPATIBILIDAD DE ROL
+ CONSERVACIÓN DE RELACIONES
+ COMPATIBILIDAD DE ESCALA
+ POSICIÓN EN TRAYECTORIA
+ CONTRIBUCIÓN DE EFECTO
+ SOPORTE EN FUENTES
- CONTRADICCIONES
- INVENCIÓN REQUERIDA
```

## Estados posibles

```text
ACCEPTED
ALTERNATIVE
WEAK
INCOMPATIBLE
NO_CANDIDATE
```

## Regla

Dos elementos con vocabulario distinto pueden ser equivalentes si preservan el contrato; dos elementos con vocabulario semejante pueden ser incompatibles si alteran función o relaciones.

---

# PAT-COG-079 — POBLACIÓN RESPALDADA Y HUECO EXPLÍCITO

## Intención

Conservar integridad epistemológica cuando una estructura requiere componentes que las fuentes disponibles no contienen.

## Estructura

```text
SLOT REQUERIDO
→ BUSCAR CANDIDATOS
→ EVALUAR
   ├─ EQUIVALENTE RESPALDADO → BINDING
   ├─ ALTERNATIVAS → CONSERVAR CONJUNTO
   └─ SIN EQUIVALENTE → HUECO EXPLÍCITO
```

## Rutas permitidas ante hueco

```text
BUSCAR OTRA FUENTE
O
BLOQUEAR REALIZACIÓN
O
SOLICITAR ADAPTACIÓN VERSIONADA
O
ESCALAR A DECISIÓN HUMANA
```

## Prohibición nuclear

```text
SLOT REQUERIDO
≠
PERMISO PARA FABRICAR CONTENIDO
```

---

# PAT-COG-080 — ALTERNATIVAS SOBREVIVIENTES COMO RESULTADO

## Intención

Representar ambigüedad material sin forzar una única respuesta cuando las restricciones no ordenan las alternativas.

## Estructura

```text
ENTRADA
→ ANÁLISIS
→ {HIPÓTESIS A, HIPÓTESIS B, HIPÓTESIS C}
→ PRUEBAS / RESTRICCIONES
→ {A, C}
→ RESULTADO PLURAL
```

Puede sobrevivir más de uno de los siguientes:

- esqueletos;
- candidatos para un slot;
- bindings;
- poblaciones;
- realizaciones;
- explicaciones receptorales.

## Invariantes

- cada alternativa conserva evidencia y diferencias;
- no se promedian estructuras incompatibles;
- la decisión humana sólo se solicita cuando la pluralidad bloquea el objetivo;
- la falta de unicidad no equivale a fallo.

## Relación con el catálogo base

Especializa la suspensión de cierre de `PAT-COG-039` en un contrato de salida algorítmico.

---

# PAT-COG-081 — DIFF DE PRESERVACIÓN ESTRUCTURAL

## Intención

Comparar una nueva configuración con una estructura de referencia por propiedades funcionales, no por similitud textual.

## Estructura

```text
ESTRUCTURA BASE
        +
ESTRUCTURA POBLADA / REALIZADA
        ↓
STRUCTURE_PRESERVATION_DIFF
├─ invariantes preservados
├─ invariantes rotos
├─ slots llenados
├─ slots abiertos
├─ correspondencias débiles
├─ cambios de topología
├─ cambios de secuencia
├─ cambios de efecto
└─ desviaciones aprobadas
```

## Regla

```text
PRESERVACIÓN ESTRUCTURAL
≠
PARECIDO DE SUPERFICIE
```

## Uso

Sirve para versionado, migración, adaptación contextual, transferencia entre dominios y validación de realizaciones generadas.

---

# PAT-COG-082 — VALIDACIÓN CIRCULAR POR REINGRESO

## Intención

Validar una salida derivada volviéndola a someter al analizador que produjo la abstracción de referencia.

## Estructura

```text
EJEMPLAR
→ EXTRACCIÓN
→ ESQUELETO
→ REINSTANCIACIÓN
→ MANIFESTACIÓN DERIVADA
→ RETROCONSTRUCCIÓN DE LA DERIVADA
→ COMPARACIÓN
→ DIFF
```

## Invariantes

- el analizador de retorno no recibe por defecto la respuesta esperada;
- la comparación distingue estructura proyectada de estructura realizada;
- una salida fluida puede fallar el reingreso;
- el ciclo puede revelar pérdidas introducidas por el consumidor o medio.

## Diferencia respecto del feedback genérico

No observa sólo éxito externo. Reconstruye la salida para comprobar si conserva la arquitectura que debía realizar.

---

# PAT-COG-083 — SELECCIÓN IDENTITARIA SITUADA

## Intención

Representar una entidad mediante una vista parcial adecuada a una función sin confundir esa vista con su identidad completa.

## Estructura

```text
ENTIDAD DEL CAMPO
        +
CORTE
        +
PARTE
        +
FUNCIÓN
        +
RECEPTOR / RESTRICCIONES
        ↓
IDENTITY_VIEW
├─ atributos seleccionados
├─ relaciones seleccionadas
├─ historia seleccionada
├─ omisiones
├─ prominencia
└─ riesgos de ambigüedad
```

## Invariantes

- la vista no modifica la entidad fuente;
- cada inclusión y omisión tiene justificación local;
- la misma entidad puede proyectarse de manera distinta en otra parte;
- los atributos prohibidos o no respaldados no se añaden por conveniencia narrativa.

---

# PAT-COG-084 — ALINEACIÓN DESCENDENTE Y ASCENDENTE DEL EFECTO

## Intención

Comprobar que un efecto global está sustentado por contribuciones locales y que cada contribución local sirve al efecto mayor.

## Estructura

```text
DESCENDENTE

EFECTO GLOBAL
→ SUBEFECTO DE MÓDULO
→ SUBEFECTO DE PARTE
→ CONTRIBUCIÓN DE UNIDAD
→ DECISIÓN LOCAL
```

```text
ASCENDENTE

DECISIONES LOCALES
→ CONTRIBUCIONES DE UNIDAD
→ EFECTOS DE PARTE
→ EFECTOS DE MÓDULO
→ EFECTO EMERGENTE TOTAL
```

## Invariantes

- contribuir no significa repetir el objetivo completo a menor escala;
- una unidad puede preparar, conectar, inhibir, reparar o reponderar;
- la validación falla si el efecto global sólo se afirma al final;
- una asociación local que distorsiona el efecto global debe detectarse.

---

# PAT-COG-085 — COMPOSICIÓN MEDIANTE OPERADORES TIPADOS

## Intención

Construir arquitecturas a partir de estructuras parciales sin reducir la composición a yuxtaposición.

## Estructura

```text
ESTRUCTURA A
        │
        ├─ SEQUENCE
        ├─ NEST
        ├─ PARALLEL
        ├─ CONTRAST
        ├─ SUPPORT
        ├─ GATE
        ├─ REPAIR
        ├─ REWEIGHT
        └─ BRIDGE
        │
ESTRUCTURA B
        ↓
GRAFO DE COMPOSICIÓN
```

## Invariantes

- cada operador declara semántica y dirección;
- las interfaces de entrada/salida deben ser compatibles;
- relaciones de fuente, inferencia y diseño permanecen separadas;
- una alternativa simple debe preferirse si explica la misma función con menos supuestos.

---

# PAT-COG-086 — CONTRATOS FRONTERIZOS ENTRE CAPAS

## Intención

Impedir que una capa absorba silenciosamente responsabilidades de otra.

## Estructura

```text
CAPA A
→ OBJETO TIPADO DE HANDOFF
   ├─ contenido autorizado
   ├─ restricciones
   ├─ trazas
   ├─ campos abiertos
   ├─ invariantes
   └─ callback de validación
→ CAPA B
```

## Invariantes

- el contrato define dónde termina A y comienza B;
- B puede rechazar o devolver incompatibilidades, pero no reabrir silenciosamente decisiones cerradas;
- los cambios cruzan la frontera como solicitudes explícitas;
- el objeto de handoff es versionado y auditable.

## Utilidad

Útil entre análisis y realización, backend y frontend, planeación y ejecución, o cualquier par productor/consumidor con responsabilidades distintas.

---

# FAMILIA K — CONFIGURACIÓN RUNTIME, INTEGRACIÓN Y RECEPCIÓN

---

# PAT-COG-087 — ESPACIO DE DECISIÓN ANTES DE CONFIGURACIÓN

## Intención

Permitir configuración dinámica sin delegar al configurador la invención de criterios válidos.

## Estructura

```text
SISTEMA ESPECIALISTA
→ DEFINE:
   ├─ decisiones permitidas
   ├─ parámetros
   ├─ restricciones
   ├─ evidencia requerida
   ├─ alternativas
   ├─ consecuencias
   └─ validadores
        ↓
CONFIGURADOR RUNTIME
→ SELECCIONA CONFIGURACIÓN SITUADA
        ↓
SISTEMA ESPECIALISTA EJECUTA
```

## Regla

```text
SELECCIONAR DENTRO DE UN ESPACIO
≠
INVENTAR EL ESPACIO
```

## Relación con el catálogo base

Es una especialización de la separación gobierno/ejecución, pero añade una interfaz intermedia explícita: el espacio de configuración autorizado.

---

# PAT-COG-088 — CONFIGURADOR TRANSVERSAL / EJECUTOR SEMÁNTICO

## Intención

Reutilizar un configurador en múltiples procesos sin convertirlo en propietario de la semántica de cada proceso.

## Estructura

```text
CONFIGURADOR TRANSVERSAL
├─ selecciona módulos
├─ selecciona mecanismos
├─ fija profundidad
├─ aplica umbrales autorizados
├─ selecciona estrategia
└─ enruta consumidor
        │ configura
        ▼
EJECUTOR ESPECIALIZADO
├─ interpreta semántica
├─ produce artefactos de dominio
└─ valida resultados de dominio
```

## Invariantes

- el configurador puede servir a más de un paquete;
- el ejecutor conserva sus criterios sustantivos;
- los fallos de configuración y los fallos semánticos se distinguen;
- replanificar no autoriza redefinir invariantes.

---

# PAT-COG-089 — NÚCLEO INDEPENDIENTE DEL CONSUMIDOR

## Intención

Evitar que el producto central de un sistema quede definido por un único realizador o formato de salida.

## Estructura

```text
NÚCLEO
→ PRODUCTO NEUTRO / HANDOFF GENÉRICO
        ├─→ CONSUMIDOR A
        ├─→ CONSUMIDOR B
        ├─→ CONSUMIDOR C
        └─→ CONSUMIDOR FUTURO
```

## Invariantes

- el producto neutral contiene semántica, restricciones y trazas suficientes;
- ningún consumidor redefine el núcleo;
- el sistema puede terminar válidamente antes de realizar una salida;
- añadir un consumidor no exige modificar la ontología nuclear.

## Anti-patrón

```text
TODO PRODUCTO
→ UN SOLO PAQUETE REALIZADOR
```

---

# PAT-COG-090 — REGISTRO DE ADAPTADORES Y ROUTING POR MODALIDAD

## Intención

Seleccionar un realizador según capacidades, medio y restricciones sin llenar el núcleo de dependencias específicas.

## Estructura

```text
HANDOFF GENÉRICO
        +
REQUISITOS DE REALIZACIÓN
        ↓
REGISTRO DE ADAPTADORES
├─ capacidades
├─ medios soportados
├─ precondiciones
├─ límites
├─ versión
└─ callback de validación
        ↓
ROUTER
        ↓
ADAPTADOR SELECCIONADO
        ↓
CONSUMIDOR
```

## Invariantes

- el routing se realiza por contrato, no por nombre preferido;
- un consumidor puede cubrir sólo ciertas modalidades;
- la ausencia de adaptador válido produce estado explícito;
- el resultado puede permanecer sin realización automática.

---

# PAT-COG-091 — ESPECIALIZACIÓN POR RESTRICCIONES AÑADIDAS

## Intención

Extender un núcleo a un dominio o medio sin copiarlo literalmente ni redefinirlo desde cero.

## Estructura

```text
NÚCLEO
+ VOCABULARIO ESPECIALIZADO
+ TIPOS ADICIONALES
+ RESTRICCIONES DEL MEDIO
+ OPERADORES
+ ADAPTADORES
+ FIXTURES
+ PRUEBAS NEGATIVAS
        ↓
ESPECIALIZACIÓN
```

## Invariantes

- la especialización declara qué hereda y qué añade;
- las unidades del medio se derivan de evidencia pertinente;
- las divergencias se documentan;
- una analogía con otro medio no basta para transferir causalidad o protocolo.

## Relación con el catálogo base

Complementa `PAT-COG-060`: éste describe transferencia a otro sistema objetivo; el presente define cómo encapsular una especialización gobernada.

---

# PAT-COG-092 — CONTEXTOS TIPADOS NO INTERCAMBIABLES

## Intención

Evitar que la palabra “contexto” fusione objetos que cumplen funciones diferentes.

## Estructura

```text
CONTEXTO DE FUENTE / CAMPO
≠
CONTEXTO DE SELECCIÓN / CORTE
≠
CONTEXTO DE PROYECCIÓN
≠
CONTEXTO DE REALIZACIÓN
≠
CONTEXTO DE RECEPCIÓN / INTEGRACIÓN
```

## Invariantes

- cada contexto declara propietario funcional;
- cada uno contiene variables y alcance propios;
- un valor puede propagarse entre contextos sólo mediante mapping explícito;
- compartir la palabra “contexto” no autoriza sustitución.

## Problema que evita

Una restricción de medio, por ejemplo, no debe reinterpretarse automáticamente como hecho del campo fuente.

---

# PAT-COG-093 — VALIDACIÓN POR FRONTERAS CAUSALES

## Intención

Evaluar cada transición relevante sin saltar desde intención inicial hasta efecto final como si existiera una sola relación causal.

## Estructura

```text
OBJETIVO
↔ ESTRUCTURA PROYECTADA        [ALINEACIÓN]

ESTRUCTURA PROYECTADA
↔ ESTRUCTURA REALIZADA         [FIDELIDAD]

ESTRUCTURA REALIZADA
↔ ESTRUCTURA ACTIVADA          [EFICACIA / RECEPCIÓN]

ESTRUCTURA ACTIVADA / EFECTO
↔ OBJETIVO                     [RESULTADO]
```

## Invariantes

- cada frontera tiene evidencia y fallo propios;
- aprobar la primera no prueba las siguientes;
- un fallo final no identifica automáticamente la frontera defectuosa;
- la evaluación extremo a extremo se construye a partir de evaluaciones parciales.

## Relación con el catálogo base

Opera sobre `PAT-COG-016`, pero no repite la triple red: añade el patrón de validación entre sus capas.

---

# PAT-COG-094 — ACTIVACIÓN, EVALUACIÓN E INTEGRACIÓN

## Intención

Distinguir que una relación se vuelva disponible, que sea examinada y que modifique funcionalmente el estado del receptor.

## Estructura

```text
ACTIVACIÓN
una relación se vuelve disponible
        ↓
EVALUACIÓN
se contrasta con entrada, estado y contexto
        ↓
INTEGRACIÓN
se incorpora, inhibe, repondera, sustituye,
reorganiza o rechaza con efecto
```

## Reglas

```text
ACTIVADO ≠ CREÍDO
EVALUADO ≠ INTEGRADO
RECHAZADO ≠ SIN EFECTO NECESARIAMENTE
```

## Invariantes

- la evidencia requerida aumenta al avanzar;
- una simulación sólo propone rutas posibles;
- la integración debe observarse mediante cambios o pruebas pertinentes;
- el autorreporte es señal, no acceso causal directo.

---

# PAT-COG-095 — REPRESENTACIÓN DE RED MULTIRRESOLUCIÓN

## Intención

Preservar navegación desde arquitectura global hasta unidades finas sin duplicar un grafo completo para cada escala.

## Estructura

```text
GRAFO BASE CON IDENTIFICADORES ESTABLES
        +
OVERLAYS DE CORTE / PROYECCIÓN
        +
JERARQUÍA DE UNIDADES PERCEPTIBLES
        +
ENLACES DISPERSOS SPAN ↔ NODO
        +
EXPANSIÓN DETALLADA BAJO DEMANDA
        +
DELTAS POR VERSIÓN / TRAYECTORIA
```

## Invariantes

- retirar un nodo de una vista no lo borra de la fuente;
- el análisis fino se materializa cuando existe necesidad;
- los overlays conservan referencia al grafo base;
- cada delta declara adiciones, exclusiones de vista, reponderaciones y cambios de binding.

## Utilidad

Reduce costo de estado sin renunciar a inspección léxica, comparación de versiones o reconstrucción local.

---

# FAMILIA L — PROTOCOLARIEDAD, CONOCIMIENTO OPERATIVO Y EPISTEMOLOGÍA

---

# PAT-COG-096 — DE LISTA NOMINAL A PROTOCOLO OPERATIVO

## Intención

Convertir declaraciones de capacidad en procedimientos realmente ejecutables y verificables.

## Estructura

```text
VERBO / CAPACIDAD NOMINAL
        ↓
RESPONSABILIDAD
→ TRIGGER
→ INPUT
→ PRECONDICIONES
→ PROCEDIMIENTO
→ ARTEFACTOS INTERMEDIOS
→ OUTPUT TIPADO
→ GATES
→ FALLOS
→ RECUPERACIÓN
→ EJEMPLO
→ CONTRAEJEMPLO
→ CRITERIO DE CIERRE
```

## Regla

```text
"SEGMENTAR / TIPAR / VALIDAR"
≠
MÉTODO PARA SEGMENTAR / TIPAR / VALIDAR
```

## Invariantes

- debe identificarse un responsable;
- cada paso transforma un estado o artefacto;
- los fallos alteran el flujo;
- la aceptación puede ser comprobada por otra instancia.

---

# PAT-COG-097 — ESTADO PROTOCOLARIO

## Intención

Evitar que una etiqueta de resultado funcione como adorno sin consecuencias operativas.

## Estructura

```text
ESTADO
├─ emisor autorizado
├─ trigger
├─ evidencia mínima
├─ alcance
├─ severidad
├─ artefactos afectados
├─ continuar / detener
├─ acción obligatoria
├─ recuperación
├─ gate humano
├─ estados siguientes
└─ ejemplo / contraejemplo
```

## Invariantes

- el mismo término produce el mismo contrato de respuesta;
- pueden coexistir estados de distintos alcances;
- resolver el estado requiere evidencia, no sólo cambiar la etiqueta;
- las transiciones imposibles quedan prohibidas.

---

# PAT-COG-098 — CIERRE LÉXICO Y REFERENCIA RESPONSABLE

## Intención

Impedir que una arquitectura dependa de términos cuyo significado operativo sólo existe en la memoria del diseñador.

## Estructura

```text
TÉRMINO USADO
        ↓
¿ES NATIVO?
├─ SÍ → DEFINICIÓN + CONTRATO LOCAL
└─ NO → PAQUETE + RUTA + VERSIÓN + RESPONSABILIDAD
```

## Invariantes

- todo término esencial puede resolverse;
- referenciar no equivale a copiar la dependencia;
- una adaptación declara diferencias respecto de la fuente;
- una dependencia faltante produce `SOURCE_MISSING`, no una definición inventada.

## Anti-patrón

Usar “perfil”, “simulación”, “feedback”, “trayectoria” o cualquier tecnicismo como si fuera autoexplicativo.

---

# PAT-COG-099 — EJEMPLO COMO FIXTURE DE CONOCIMIENTO

## Intención

Convertir ejemplos en componentes capaces de enseñar, probar y proteger la operación de un método.

## Estructura

```text
FIXTURE
├─ entrada
├─ precondiciones
├─ pasos esperados
├─ artefactos intermedios
├─ output esperado
├─ alternativas válidas
├─ anti-output
├─ diagnóstico esperado
└─ test de regresión
```

## Invariantes

- el ejemplo muestra cómo se opera el método;
- el anti-output hace visibles confusiones frecuentes;
- una nueva versión debe reejecutar el fixture;
- el ejemplo conserva procedencia y alcance.

## Regla

```text
EJEMPLO ORNAMENTAL
≠
CONOCIMIENTO OPERATIVO
```

---

# PAT-COG-100 — EL EJEMPLO TENSIONA, NO DEFINE, EL NÚCLEO

## Intención

Usar ejemplos para descubrir límites y correcciones sin convertir un caso particular en definición universal.

## Estructura

```text
EJEMPLO
→ EVIDENCIA DE REALIZACIÓN
→ POSIBLE EVIDENCIA DE LÍMITE
→ POSIBLE ORIGEN DE CORRECCIÓN

EJEMPLO
≠
NÚCLEO
```

## Invariantes

- un ejemplo instancia una estructura bajo condiciones;
- múltiples ejemplos ayudan a distinguir invariante de coincidencia;
- un contraejemplo puede cuestionar alcance o clasificación;
- modificar el núcleo exige procedimiento y autoridad, no mera presencia del caso.

## Relación con `PAT-COG-099`

`PAT-COG-099` define el ejemplo como fixture operativo. Éste define su relación epistemológica con el núcleo que prueba.

---

# PAT-COG-101 — CALIBRACIÓN ESTRATIFICADA MULTICORPUS

## Intención

Evitar calibrar un sistema sobre una sola familia de casos y confundir adaptación local con generalidad.

## Estructura

```text
CORPUS
├─ casos positivos
├─ casos ambiguos
├─ casos negativos
├─ casos defectuosos
├─ dominios diferentes
├─ modalidades diferentes
├─ escalas diferentes
└─ pares comparables
        ↓
CALIBRACIÓN POR ESTRATOS
        ↓
MÉTRICAS + UMBRALES + LÍMITES
```

## Invariantes

- los estratos se reportan por separado antes de agregarse;
- un caso rector no monopoliza la evaluación;
- los falsos positivos y negativos se rastrean por familia;
- la profundidad útil puede variar por modalidad o dominio.

---

# PAT-COG-102 — FALLO TIPADO COMO CONTROL DE FLUJO

## Intención

Convertir condiciones problemáticas en señales que gobiernan acciones, bloqueos y recuperación.

## Estructura

```text
DETECCIÓN
→ FALLO TIPADO
   ├─ alcance
   ├─ severidad
   ├─ evidencia
   ├─ artefacto afectado
   ├─ acción automática permitida
   ├─ acción prohibida
   └─ escalamiento
→ TRANSICIÓN
```

## Ejemplos de familias

```text
EVIDENCIA INSUFICIENTE
ALTERNATIVAS MATERIALES
SIN EQUIVALENTE
INVARIANTE ROTO
ADAPTACIÓN REQUERIDA
DESAJUSTE DE REALIZACIÓN
DIVERGENCIA DE RECEPCIÓN
PLAN NO FACTIBLE
```

## Regla

El nombre del fallo no basta: deben definirse criterios y consecuencias.

---

# PAT-COG-103 — RESOLUCIÓN PARCIAL SIN INVENCIÓN

## Intención

Permitir que un proceso continúe en regiones resolubles aunque existan ambigüedades o fuentes faltantes.

## Estructura

```text
PROBLEMA / FUENTE FALTANTE
→ REGISTRAR OPEN_DECISION O SOURCE_MISSING
→ DELIMITAR IMPACTO
→ BLOQUEAR SUBÁRBOL AFECTADO
→ CONSERVAR ALTERNATIVAS
→ CONTINUAR CON LO INDEPENDIENTE
→ SOLICITAR DECISIÓN SÓLO CUANDO SEA NECESARIA
```

## Invariantes

- ninguna laguna se rellena por memoria o analogía no autorizada;
- el bloqueo es localizado, no necesariamente global;
- el resultado parcial declara cobertura;
- reanudar exige resolver la dependencia concreta.

## Utilidad

Útil en agentes, investigación, construcción documental, compiladores cognitivos y sistemas con fuentes incompletas.

---

# PAT-COG-104 — GRAFO DE FUENTES / GRAFO COGNITIVO / BINDINGS

## Intención

Separar dónde está formulado el conocimiento de qué estructura cognitiva se representa.

## Estructura

```text
SOURCE GRAPH
  archivos, fragmentos, versiones, ejemplos, evidencias

COGNITIVE GRAPH
  conceptos, estructuras, relaciones, capacidades, restricciones

SOURCE BINDINGS
  CognitiveStructure
  --DEFINED_IN / SUPPORTED_BY / EXEMPLIFIED_BY-->
  SourceUnit
```

## Reglas de no colapso

```text
SourceUnit ≠ CognitiveStructure
UN ARCHIVO PUEDE DEFINIR VARIOS NODOS
UN NODO PUEDE DEPENDER DE VARIOS ARCHIVOS
```

## Invariantes

- cada grafo puede evolucionar sin borrar la relación entre ambos;
- cambiar una fuente obliga a revalidar bindings y vecindarios afectados;
- una estructura sin binding visible pierde auditabilidad;
- repetir una fuente no equivale a añadir una operación cognitiva.

---

# PAT-COG-105 — RECUPERACIÓN COGNITIVA MÍNIMA SUFICIENTE

## Intención

Activar sólo la región de conocimiento necesaria para una tarea, junto con sus dependencias materiales.

## Estructura

```text
INTENCIÓN
→ VECINDARIO
→ NODOS SEMILLA
→ DEPENDENCIAS NECESARIAS
→ SOURCE BINDINGS
→ FUENTES
```

## Invariantes

- la intención delimita la región inicial;
- los nodos semilla no bastan si faltan dependencias;
- las fuentes se recuperan desde bindings, no mediante carga indiscriminada;
- el alcance puede expandirse si la validación revela contexto omitido.

## Anti-patrón

```text
CARGAR TODO EL ACERVO
PARA CUALQUIER PREGUNTA
```

## Relación con el catálogo base

Complementa `PAT-COG-007`: aquel distribuye información pertinente; éste define cómo recuperar la región mínima con trazabilidad.

---

# PAT-COG-106 — ESPACIOS TIPADOS DE AUTORIDAD Y TRABAJO

## Intención

Evitar que la ubicación de un artefacto o su mera generación cambie silenciosamente su autoridad.

## Estructura

```text
CC://
  fuentes centrales vigentes

PROJECT://
  conversación, archivos y decisiones del proyecto

OVERLAY://
  bindings y estructuras locales no promovidas

OUTPUT://
  artefactos generados para revisión
```

## Invariantes

- cada espacio tiene política de lectura, escritura y promoción;
- un output no se convierte automáticamente en fuente central;
- un overlay puede operar localmente sin afirmar pertenencia canónica;
- mover o promover requiere evento explícito, trazable y autorizado.

## Variación

Los nombres de los espacios pueden cambiar. Lo invariante es separar autoridad, trabajo local, proyección y salida.

---

# PAT-COG-107 — ACUMULACIONES NO FUSIONABLES

## Intención

Distinguir procesos que ambos “acumulan”, pero modifican objetos y horizontes temporales diferentes.

## Estructura

```text
ACUMULACIÓN DE ESTADO

APORTE_t + ESTADO_t
→ ESTADO_{t+1}
→ condiciona el siguiente aporte
```

frente a:

```text
CORRECCIÓN ACUMULATIVA DE ADAPTACIONES

EVIDENCIA DE REALIZACIÓN_n
→ CORRECCIÓN VERSIONADA
→ modifica futuras adaptaciones_{n+1}
```

## Regla

```text
CAMBIO CONSERVADO DENTRO DE UNA TRAYECTORIA
≠
APRENDIZAJE QUE MODIFICA FUTURAS INSTANCIACIONES
```

## Invariantes

- debe declararse qué objeto acumula;
- debe declararse en qué horizonte opera;
- la evidencia que modifica una trayectoria no necesariamente modifica el generador;
- corregir futuras versiones no reescribe retroactivamente el estado observado.

---

# PAT-COG-108 — PRECEDENCIA EPISTEMOLÓGICA Y PROMOCIÓN EXPLÍCITA

## Intención

Preservar diferencias de autoridad entre fuentes, decisiones, inferencias y propuestas durante la evolución de una arquitectura.

## Estructura

```text
FUENTE
DECISIÓN_HUMANA
INFERENCIA
HIPÓTESIS
PROPUESTA
PREGUNTA_ABIERTA
ELEMENTO_RECHAZADO
        ↓
REGISTRO DE ESTATUS Y PRECEDENCIA
        ↓
USO LOCAL
        ↓
GATE DE PROMOCIÓN
        ↓
ESTADO APROBADO O NO APROBADO
```

## Invariantes

- una reformulación posterior puede sustituir otra sin borrar trazabilidad;
- una inferencia no se convierte en decisión por repetición;
- una salida generada no se promueve por existir;
- la promoción declara autoridad, alcance, versión y destino.

---

# FAMILIA M — CONSTRUCCIÓN COGNITIVA TRANSFERIBLE

---

# PAT-COG-109 — SCAFFOLDING ESTRUCTURAL + CONTEXTUAL

## Intención

Transferir el diseño de un sistema todavía no materializado por completo sin perder ni su forma futura ni la cognición que debe gobernar su construcción.

## Estructura

```text
SCAFFOLDING COGNITIVO
├─ SCAFFOLDING ESTRUCTURAL
│  ├─ árbol objetivo
│  ├─ responsabilidades por unidad
│  ├─ dependencias
│  └─ guías de construcción
│
└─ SCAFFOLDING CONTEXTUAL
   ├─ decisiones humanas
   ├─ correcciones
   ├─ fuentes
   ├─ relaciones
   ├─ hipótesis
   ├─ preguntas abiertas
   ├─ ejemplos
   └─ criterios de aceptación
```

## Invariantes

- estructura y contexto viajan juntos;
- el scaffolding no es paquete final ni resumen;
- cada unidad futura tiene responsabilidad prevista;
- otra IA debe poder continuar sin reiniciar el razonamiento.

---

# PAT-COG-110 — MATERIALIZACIÓN DIFERIDA

## Intención

Conservar profundidad y coherencia cuando expandir todo un diseño en una sola ejecución degradaría el resultado.

## Estructura

```text
ACERVO + CONVERSACIÓN + OBJETIVO
→ DISEÑO COMPLETO
→ SCAFFOLDING
→ MATERIALIZACIÓN DISTRIBUIDA
→ VALIDACIÓN CRUZADA
→ SISTEMA CANDIDATO
```

## Regla nuclear

```text
MATERIALIZACIÓN DIFERIDA
≠
DISEÑO DIFERIDO
```

El diseño global se resuelve primero. Lo que se difiere es la expansión completa de las unidades.

## Relación con el catálogo base

Es compatible con `PAT-COG-051`: la construcción puede ser secuencial aunque el sistema resultante sea simultáneo y relacional.

---

# PAT-COG-111 — GUÍA ACCIONABLE POR UNIDAD FUTURA

## Intención

Permitir que cada archivo, módulo o componente sea construido posteriormente sin una instrucción genérica ni necesidad de adivinar su propósito.

## Estructura

```text
UNIDAD FUTURA
→ GUÍA DE CONSTRUCCIÓN
   ├─ propósito
   ├─ preguntas por resolver
   ├─ conceptos por definir
   ├─ fuentes por recuperar
   ├─ dependencias
   ├─ relaciones
   ├─ ejemplos y contraejemplos
   ├─ outputs
   ├─ protocolos
   ├─ decisiones abiertas
   └─ aceptación
```

## Invariantes

- la guía es específica de la unidad;
- indica qué, por qué, con qué y cómo validar;
- no contiene sólo `TODO: explicar X`;
- se sustituye por contenido final durante la materialización.

---

# PAT-COG-112 — MATERIALIZACIÓN ORDENADA POR DEPENDENCIAS

## Intención

Construir unidades en el orden requerido por sus relaciones semánticas y contractuales, no sólo por su posición en el árbol.

## Estructura

```text
GRAFO DE DEPENDENCIAS
        ↓
ORDEN DE CONSTRUCCIÓN

DEFINICIONES
→ ONTOLOGÍA / COMPONENTES
→ CONTRATOS
→ PROTOCOLOS
→ EJEMPLOS
→ VALIDACIÓN GLOBAL
```

## Invariantes

- las dependencias externas se auditan antes de construir;
- un ciclo exige contrato provisional o rediseño;
- los artefactos fundacionales se estabilizan antes de sus consumidores;
- el orden puede cambiar si nuevas decisiones alteran el grafo.

---

# PAT-COG-113 — MODOS DE CONSTRUCCIÓN CON IDENTIDAD INVARIANTE

## Intención

Permitir distintas estrategias de materialización sin cambiar la identidad del sistema construido.

## Estructura

```text
MISMO SCAFFOLDING
        ├─→ MODO INTERACTIVO
        │    unidad por unidad
        │    revisión humana frecuente
        │
        └─→ MODO AGENTIVO
             construcción automatizada
             auditoría y reporte
        ↓
MISMO PAQUETE CANDIDATO ESPERADO
```

## Invariantes

- ambos modos comparten árbol, decisiones, fuentes y aceptación;
- la automatización no reduce autoridad humana;
- el modo interactivo no autoriza contradicciones locales;
- el modo de construcción no redefine la identidad del producto.

---

# PAT-COG-114 — REVALIDACIÓN RETROACTIVA INCREMENTAL

## Intención

Mantener coherencia cuando una decisión surgida durante la construcción de una unidad afecta unidades construidas anteriormente.

## Estructura

```text
UNIDAD_n
→ NUEVA DECISIÓN D
→ LOCALIZAR DEPENDIENTES DE D
→ MARCAR UNIDADES AFECTADAS
→ GENERAR DIFF
→ REVALIDAR
→ ACTUALIZAR O CONSERVAR CON JUSTIFICACIÓN
```

## Invariantes

- las decisiones nuevas se registran una vez y se propagan por dependencias;
- no se reescribe todo indiscriminadamente;
- cada actualización conserva traza a la decisión que la causó;
- una unidad aceptada puede volver a estado de revisión.

## Utilidad

Es esencial en construcción incremental, documentación viva, migraciones y paquetes con contratos cruzados.

---

# PAT-COG-115 — CANDIDATO → REVISIÓN → PROMOCIÓN

## Intención

Separar construcción técnicamente completa de incorporación autorizada al sistema vigente.

## Estructura

```text
ARTEFACTO CONSTRUIDO
→ CANDIDATE
→ VALIDACIÓN TÉCNICA
→ DECISIONES ABIERTAS
→ REVISIÓN HUMANA
   ├─ RECHAZAR
   ├─ SOLICITAR CAMBIOS
   ├─ ACEPTAR LOCALMENTE
   └─ PROMOVER EXPLÍCITAMENTE
→ ESTADO DESTINO
```

## Invariantes

- terminar la construcción no equivale a canonizar;
- la promoción requiere autoridad explícita;
- versión, alcance y destino quedan registrados;
- un agente puede producir candidatos, pero no aprobar su propia incorporación.

---

# 7. APLICACIONES Y ESPECIALIZACIONES DE PATRONES YA EXISTENTES

Esta sección conserva estructuras relevantes sin volver a presentarlas como descubrimientos independientes.

| Estructura observada o aplicación                                                                                 | Patrón base que la cubre                    | Especialización o precisión                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `MENSAJE → MEMORIA`, `MENSAJE → EMOCIÓN`, `EVENTO → IDENTIDAD` convergen en interpretación/decisión               | `PAT-COG-010`                               | Las ramas concretas son una instancia de convergencia asociativa multicanal.                  |
| Fuentes → inspección de evidencia/marco/interés → criterio humano → interpretación revisable → acción → evidencia | `PAT-COG-002`, `PAT-COG-038`, `PAT-COG-054` | Combina integración multifuente, topología soberana y feedback reflexivo.                     |
| Distinguir qué entra, quién hace que entre y cómo lo recibe el sistema                                            | `PAT-COG-001`                               | Aplicación transversal a percepción distribuida, redes de inteligencia y recepción cognitiva. |
| `Orden 1 ≈ materiales/situación/dominio`; `Orden 2 ≈ manifestación lingüística`                                   | `PAT-COG-003`                               | Correspondencia estructural aproximada, nunca equivalencia 1:1.                               |
| Fuente mixta que entrega señales y marcos                                                                         | `PAT-COG-004`                               | Especialización de fuentes de realidad que mezclan Orden 1 y Orden 2.                         |
| Percepción distribuida como red de fuentes de realidad                                                            | `PAT-COG-002`, `PAT-COG-007`, `PAT-COG-053` | Convergencia, routing y aprovisionamiento aplicados a percepción distribuida.                 |
| `P0 + P1…P6` como unidad retroconstruible                                                                         | `PAT-COG-011`, `PAT-COG-012`                | La unidad del análisis es un subgrafo de efecto.                                              |
| Manifestación lingüística como corte de un grafo mayor                                                            | `PAT-COG-015`, `PAT-COG-024`                | Aplicación a comunicación y reconstrucción discursiva.                                        |
| Red proyectada, realizada y activada                                                                              | `PAT-COG-016`                               | `PAT-COG-093` añade validación entre fronteras; no redefine las tres redes.                   |
| Campo → resultado esperado → selección de región                                                                  | `PAT-COG-025`                               | El resultado esperado opera como selector del subgrafo pertinente.                            |
| Manifestación → hipótesis de arquitectura generativa                                                              | `PAT-COG-026`                               | `PAT-COG-065` y `PAT-COG-071` detallan las transformaciones intermedias.                      |
| Grafo base + protocolo + instancia contextual → manifestación completa generada por IA                            | `PAT-COG-048`                               | La IA resuelve microdecisiones; el humano conserva gobierno macro y validación.               |
| Esqueleto + invariantes + dominio de variación + contexto                                                         | `PAT-COG-044`, `PAT-COG-045`                | `PAT-COG-068` añade una tipología contractual de posiciones variables.                        |
| Salida visible o snapshot no equivale al estado completo                                                          | `PAT-COG-015`, `PAT-COG-029`, `PAT-COG-061` | Aplicación a frontend cognitivo y superficies de inspección.                                  |
| Corrección humana almacenada debe reintegrarse para modificar el estado                                           | `PAT-COG-041`, `PAT-COG-042`, `PAT-COG-051` | Almacenar feedback no equivale a integrarlo operativamente.                                   |
| Receptor transformado se convierte en nueva fuente                                                                | `PAT-COG-019`                               | Aplicación a propagación de manifestaciones y nuevo material cognitivo.                       |
| Misma lógica estructural en dominios diferentes sin identidad 1:1                                                 | `PAT-COG-060`                               | Requiere declarar correspondencias válidas y rupturas de analogía.                            |

---

# 8. ARQUITECTURAS COMPUESTAS DERIVADAS

Los patrones nuevos pueden combinarse en arquitecturas mayores.

## 8.1. Arquitectura de inducción dinámica

```text
PAT-COG-064  aparato estable / configuración dinámica
+
PAT-COG-065  dos transformaciones
+
PAT-COG-067  esquema por ejemplar
+
PAT-COG-068  tipología de variabilidad
+
PAT-COG-073  gradiente de certeza
=
INDUCTOR DE ESTRUCTURAS REUTILIZABLES
```

Forma compacta:

```text
EJEMPLAR
→ ARQUITECTURA RECONSTRUIDA
→ ESQUELETO TIPADO
→ ALTERNATIVAS + INCERTIDUMBRE
```

## 8.2. Arquitectura de reinstanciación sin invención

```text
PAT-COG-076  navegación estructural
+
PAT-COG-077  separación recuperación/equivalencia/binding
+
PAT-COG-078  equivalencia contractual
+
PAT-COG-079  hueco explícito
+
PAT-COG-080  alternativas sobrevivientes
+
PAT-COG-081  diff de preservación
=
REINSTANCIADOR ESTRUCTURAL TRAZABLE
```

```text
ESQUELETO + FUENTES NUEVAS
→ CAMPO
→ CANDIDATOS
→ EQUIVALENCIAS
→ BINDINGS
→ POBLACIÓN
→ DIFF
```

## 8.3. Arquitectura multiconsumidor

```text
PAT-COG-086  contrato fronterizo
+
PAT-COG-087  espacio de decisión
+
PAT-COG-088  configuración/ejecución
+
PAT-COG-089  núcleo independiente
+
PAT-COG-090  adaptadores y routing
+
PAT-COG-091  especialización
=
NÚCLEO PORTABLE CON REALIZACIONES HETEROGÉNEAS
```

## 8.4. Arquitectura de construcción cognitiva transferible

```text
PAT-COG-109  scaffolding dual
+
PAT-COG-110  materialización diferida
+
PAT-COG-111  guías accionables
+
PAT-COG-112  orden por dependencias
+
PAT-COG-113  modos de construcción
+
PAT-COG-114  revalidación retroactiva
+
PAT-COG-115  promoción explícita
=
TRANSFERENCIA DE DISEÑO SIN PÉRDIDA DE CONTEXTO NI AUTORIDAD
```

## 8.5. Arquitectura de operación bajo conocimiento incompleto

```text
PAT-COG-073  certeza graduada
+
PAT-COG-080  alternativas sobrevivientes
+
PAT-COG-097  estados protocolarios
+
PAT-COG-102  fallos tipados
+
PAT-COG-103  resolución parcial
+
PAT-COG-108  precedencia epistemológica
=
OPERACIÓN TRAZABLE SIN CIERRE FORZADO
```

---

# 9. REGLAS ADICIONALES DE NO COLAPSO

```text
APARATO ESTABLE
≠
ESTRUCTURA DINÁMICA PRODUCIDA
```

```text
ARQUITECTURA CONCEPTUAL INTEGRADA
≠
ESQUELETO EXTRAÍDO
```

```text
EJEMPLAR
≠
PLANTILLA UNIVERSAL
```

```text
SLOT
≠
ESPACIO LIBRE SIN CONTRATO
```

```text
RECUPERAR CANDIDATO
≠
DECLARAR EQUIVALENCIA
≠
ACEPTAR BINDING
```

```text
SIMILITUD LÉXICA
≠
EQUIVALENCIA ESTRUCTURAL
```

```text
HUECO ESTRUCTURAL
≠
PERMISO DE INVENCIÓN
```

```text
PLURALIDAD DE ALTERNATIVAS
≠
FALLO
```

```text
CONFIGURADOR
≠
EJECUTOR SEMÁNTICO
```

```text
PRODUCTO NUCLEAR
≠
FORMATO DE UN CONSUMIDOR
```

```text
CONTEXTO DE FUENTE
≠
CONTEXTO DE REALIZACIÓN
≠
CONTEXTO DE RECEPCIÓN
```

```text
ACTIVACIÓN
≠
EVALUACIÓN
≠
INTEGRACIÓN
```

```text
CAPACIDAD NOMBRADA
≠
PROTOCOLO OPERATIVO
```

```text
ESTADO ETIQUETADO
≠
ESTADO PROTOCOLARIO
```

```text
EJEMPLO
≠
NÚCLEO
```

```text
SOURCE GRAPH
≠
COGNITIVE GRAPH
```

```text
ACUMULACIÓN DE ESTADO
≠
CORRECCIÓN DE FUTURAS ADAPTACIONES
```

```text
OUTPUT
≠
CANON
```

```text
SCAFFOLDING
≠
RESUMEN
≠
PAQUETE FINAL
```

```text
MATERIALIZACIÓN DIFERIDA
≠
DISEÑO DIFERIDO
```

```text
CONSTRUCCIÓN COMPLETA
≠
PROMOCIÓN AUTORIZADA
```

---

# 10. PLANTILLA PARA INSTANCIAR LOS PATRONES COMPLEMENTARIOS

```yaml
complementary_pattern_instance:
  pattern_id:
  objective:

  system_boundary:
    focal_field:
    federated_fields: []

  stable_apparatus:
    methods: []
    protocols: []
    validators: []

  dynamic_products:
    architectures: []
    skeletons: []
    candidates: []
    alternatives: []

  epistemology:
    observed: []
    reconstructed: []
    inferred: []
    hypothetical: []
    non_inferable: []

  variability:
    strong_invariants: []
    parameterized_invariants: []
    required_slots: []
    optional_slots: []
    conditional_slots: []
    repeatable_slots: []
    subgraph_slots: []
    adaptation_points: []
    surface_realizations: []

  matching:
    field_navigation:
    candidate_sets: []
    equivalence_contracts: []
    bindings: []
    unresolved_slots: []

  interfaces:
    input_contracts: []
    handoff_contracts: []
    adapters: []
    callbacks: []

  execution:
    responsibility:
    trigger:
    preconditions: []
    steps: []
    artifacts: []
    outputs: []
    gates: []
    failures: []
    recovery: []

  examples:
    fixtures: []
    counterexamples: []
    anti_outputs: []
    regression_tests: []

  preservation:
    structural_diff:
    broken_invariants: []
    approved_deviations: []

  authority:
    epistemic_status:
    current_space:
    promotion_gate:
    human_decision_ref:
```

---

# 11. TESTS TRANSVERSALES COMPLEMENTARIOS

## TEST-11 — ¿EL APARATO ESTABLE IMPONE UNA ÚNICA SALIDA?

Si toda entrada debe producir la misma topología:

```text
UNIVERSAL_TEMPLATE_RISK
```

## TEST-12 — ¿EXISTE ARQUITECTURA INTERMEDIA ANTES DEL ESQUELETO?

Si la abstracción salta directamente desde superficie a plantilla:

```text
UNSUPPORTED_ABSTRACTION
```

## TEST-13 — ¿CADA SLOT TIENE CONTRATO?

Si una posición admite cualquier sustitución:

```text
UNCONTROLLED_VARIATION
```

## TEST-14 — ¿SE NAVEGÓ EL CAMPO ANTES DE DECLARAR EQUIVALENCIA?

Si no existe cobertura ni traza de búsqueda:

```text
PREMATURE_NO_EQUIVALENT_OR_MATCH
```

## TEST-15 — ¿RECUPERACIÓN, EQUIVALENCIA Y BINDING SON OBJETOS DISTINTOS?

Si se colapsan:

```text
SELECTION_TRACE_FAILURE
```

## TEST-16 — ¿UN HUECO PRODUCE INVENCIÓN?

Si el sistema fabrica contenido para cerrar la forma:

```text
SOURCELESS_POPULATION
```

## TEST-17 — ¿EL DIFF COMPARA ESTRUCTURA O SÓLO TEXTO?

Si sólo mide vocabulario, estilo o distancia superficial:

```text
FALSE_PRESERVATION_SIGNAL
```

## TEST-18 — ¿EL CONFIGURADOR INVENTA CRITERIOS?

Si decide fuera del espacio autorizado:

```text
CONFIGURATION_AUTHORITY_LEAK
```

## TEST-19 — ¿EL NÚCLEO DEPENDE DE UN CONSUMIDOR ÚNICO?

Si no existe salida neutral:

```text
CONSUMER_LOCK_IN
```

## TEST-20 — ¿SE CONFUNDEN CONTEXTOS?

Si una restricción de realización altera silenciosamente hechos fuente:

```text
CONTEXT_COLLAPSE
```

## TEST-21 — ¿UNA CAPACIDAD ES SÓLO UNA LISTA DE VERBOS?

Si faltan entradas, pasos, artefactos, gates y fallos:

```text
NOMINAL_CAPABILITY
```

## TEST-22 — ¿UN ESTADO TIENE CONSECUENCIAS?

Si una etiqueta no modifica el flujo:

```text
DECORATIVE_STATUS
```

## TEST-23 — ¿LOS EJEMPLOS PUEDEN EJECUTARSE COMO FIXTURES?

Si no contienen output esperado, anti-output ni regresión:

```text
ORNAMENTAL_EXAMPLE
```

## TEST-24 — ¿LA RECUPERACIÓN CARGA MÁS DE LO NECESARIO?

Si no existe intención, vecindario ni dependencias:

```text
UNBOUNDED_CONTEXT_LOADING
```

## TEST-25 — ¿UN OUTPUT SE PROMUEVE POR SU MERA EXISTENCIA?

Si no existe gate:

```text
SILENT_CANON_PROMOTION
```

## TEST-26 — ¿EL SCAFFOLDING PUEDE USARSE SIN EL CHAT ORIGINAL?

Si una IA necesita adivinar propósito, fuentes o decisiones:

```text
TRANSFER_CONTEXT_GAP
```

## TEST-27 — ¿UNA NUEVA DECISIÓN REVALIDA SUS DEPENDIENTES?

Si no se identifica impacto retroactivo:

```text
INCREMENTAL_INCONSISTENCY
```

---

# 12. TRAZABILIDAD DOCUMENTAL

Las estructuras de esta extensión se consolidaron a partir de:

- las decisiones humanas preservadas en el scaffolding del paquete `MOTOR_DE_RETROCONSTRUCCIÓN_Y_REINSTANCIACIÓN_ESTRUCTURAL`;
- el diseño histórico que introdujo extracción, slots, equivalencias, bindings, población y diffs;
- la corrección que estableció construcción conceptual/MAANC como kernel operativo;
- la separación de MCCR como configurador transversal y del núcleo como ejecutor semántico;
- la sustitución de un consumidor único por handoff genérico y adaptadores;
- el protocolo `SCAFFOLDING_COGNITIVO_PARA_CONSTRUCCION_DE_PAQUETES`;
- las estructuras de fuente/grafo/bindings, recuperación mínima y espacios de autoridad preservadas en el acervo de COGNICIÓN_CENTRAL;
- las correcciones posteriores sobre Orden 1/Orden 2, fuente/entrada/recepción y generación por grafo + protocolo + instancia contextual, registradas aquí únicamente como especializaciones de patrones ya existentes.

La procedencia explica dónde se reconocieron los patrones. No limita su uso a esos paquetes.

---

# 13. ESTADO

```yaml
catalog_extension:
  id: INT-EXTENSION-CATALOGO-PATRONES-COGNITIVOS-TRANSFERIBLES-002
  version: 0.2.0
  status: EXPLORATORY
  canonical: false
  human_review: REQUIRED

  base_catalog:
    file: CATALOGO_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_1_0(1).md
    covered_ids: PAT-COG-001..PAT-COG-063

  extension:
    covered_ids: PAT-COG-064..PAT-COG-115
    new_pattern_count: 52

  deduplication_policy:
    - do_not_restate_base_patterns
    - map_specializations_to_base_ids
    - structural_similarity_is_not_identity
    - preserve_epistemic_status

  intended_use:
    - cognitive_package_design
    - architecture_induction
    - structural_reinstantiation
    - runtime_configuration
    - multi_consumer_handoff
    - protocol_design
    - example_driven_validation
    - cognitive_scaffolding
    - provenance_and_promotion_governance

  warnings:
    - pattern_is_not_automatic_canon
    - exemplar_is_not_universal_template
    - recovered_candidate_is_not_accepted_binding
    - missing_source_does_not_authorize_invention
    - generated_output_is_not_promoted_source
```

**FIN DEL CATÁLOGO COMPLEMENTARIO**
