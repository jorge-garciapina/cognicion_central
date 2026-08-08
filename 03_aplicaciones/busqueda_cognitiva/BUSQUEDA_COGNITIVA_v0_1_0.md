# BÚSQUEDA_COGNITIVA

**ID propuesto:** `APP-SEARCH`  
**Tipo:** cApp de infraestructura metodológica  
**Versión:** `0.1.0`  
**Fecha:** `2026-08-08`  
**Estado:** `PROVISIONAL / WORKING DRAFT`  
**Autoridad soberana:** `HUMANO`  
**Integración canónica:** pendiente de aprobación explícita

## 0. Propósito del documento

Formalizar una aplicación de COGNICION_CENTRAL orientada a localizar estructuras cognitivas a partir de sus manifestaciones en portadores del conocimiento.

La aplicación debe servir en dos situaciones mínimas:

1. una búsqueda solicitada explícitamente por el humano para comparar, comprender, transferir o construir analogías;
2. una búsqueda solicitada internamente por la IA para cumplir un comando humano o una etapa de un proceso autorizado.

Este documento define la arquitectura conceptual y el contrato operativo inicial. No constituye todavía un índice implementado, un motor de embeddings ni una modificación del canon.

## 1. Intuición fundacional

Los archivos y artefactos no son las estructuras cognitivas mismas. Son portadores que conservan manifestaciones mediante las cuales una estructura puede reconstruirse.

```text
PORTADOR DEL CONOCIMIENTO
  contiene
MANIFESTACIONES
  permiten reconstruir
ESTRUCTURAS COGNITIVAS CANDIDATAS
```

Una manifestación puede ser:

- lingüística;
- gráfica;
- matemática;
- ontológica;
- procedimental;
- visual;
- diagramática;
- una combinación de varias.

En la versión `0.1.0`, la prioridad está en manifestaciones lingüísticas y estructuradas. La extensión a imágenes y otras modalidades queda dentro del dominio de variación futuro.

## 2. Definición central

> **BÚSQUEDA_COGNITIVA es una aplicación de COGNICION_CENTRAL que transforma una intención o necesidad operativa en una consulta estructural, localiza manifestaciones candidatas en portadores autorizados, reconstruye las estructuras cognitivas que podrían expresar, compara sus roles, relaciones, invariantes y restricciones, y devuelve resultados trazables con correspondencias, límites e incertidumbre.**

No busca solamente documentos relevantes. Busca formas cognitivas potencialmente reutilizables.

## 3. Analogía con Google Lens

La analogía propuesta es estructural:

```text
GOOGLE LENS
imagen de entrada
→ extrae rasgos visuales
→ busca candidatos compatibles
→ devuelve imágenes u objetos relacionados

BÚSQUEDA_COGNITIVA
estructura o necesidad de entrada
→ extrae rasgos estructurales
→ busca candidatos compatibles
→ devuelve estructuras cognitivas relacionadas
```

### Qué preserva la analogía

- la consulta puede partir de un ejemplar, no sólo de palabras clave;
- el sistema construye una representación intermedia de rasgos;
- los resultados pueden compartir organización aunque cambie la superficie;
- cada resultado debe explicar por qué fue recuperado.

### Dónde se rompe

- una estructura cognitiva no es directamente observable como una imagen;
- debe reconstruirse desde manifestaciones parciales y contextuales;
- la semejanza estructural puede depender del propósito de búsqueda;
- dos textos similares pueden expresar estructuras distintas;
- dos textos muy diferentes pueden realizar la misma estructura;
- la interpretación siempre conserva incertidumbre y requiere validación.

Por tanto, la analogía sirve como puerta de entrada, no como especificación técnica completa.

## 4. Problema que resuelve

COGNICION_CENTRAL puede gobernar estructuras cognitivas sólo si puede localizarlas y distinguirlas.

La recuperación tradicional encuentra:

```text
palabras
fragmentos
documentos
temas
```

La búsqueda cognitiva debe poder encontrar:

```text
roles operativos
relaciones
invariantes
restricciones
procedimientos
patrones de transformación
dependencias
estructuras análogas
estructuras complementarias
contradicciones
```

## 5. Tipo y rol operativo

```yaml
application:
  id: APP-SEARCH
  class: cApp_de_infraestructura_metodologica
  dominant_family: FAM-Método
  supporting_families:
    - FAM-Diseño
    - FAM-Patrón-de-razonamiento
  dominant_role:
    localizar_y_comparar_estructuras_cognitivas
```

Se considera una aplicación porque ensambla múltiples capacidades y ofrece una interfaz operable. Al mismo tiempo, presta un servicio transversal a otras aplicaciones y al orquestador.

## 6. Modos de activación

### 6.1 Búsqueda explícita del humano

El humano solicita directamente localizar estructuras.

Ejemplos:

```text
"Busca estructuras análogas a este modelo."

"Encuentra en mis artefactos una estructura que me ayude a explicar X."

"¿Dónde aparece una estructura de control central con ejecución distribuida?"

"Compara esta idea con estructuras que ya existen en COGNICION_CENTRAL."
```

La salida se presenta al humano antes de que una estructura recuperada sea integrada, modificada o ejecutada.

### 6.2 Búsqueda interna solicitada por la IA

Durante la ejecución de un comando, la IA detecta que necesita una estructura auxiliar.

```text
COMANDO HUMANO
  ↓
PLAN DE EJECUCIÓN
  ↓
NECESIDAD ESTRUCTURAL
  ↓
BÚSQUEDA_COGNITIVA INTERNA
  ↓
CANDIDATOS
  ↓
SELECCIÓN JUSTIFICADA
  ↓
CONTINUACIÓN DEL PROCESO
```

La búsqueda interna hereda el alcance y los permisos del comando que la originó. No amplía por sí misma el acceso a memoria ni autoriza cambios persistentes.

## 7. Objetos fundamentales

### 7.1 Portador del conocimiento

Objeto material o digital que conserva manifestaciones recuperables.

Ejemplos:

- archivo Markdown o texto;
- artefacto NDJSON;
- PDF;
- ontología OWL;
- registro de eventos;
- base de datos;
- grafo;
- imagen o diagrama en versiones futuras.

### 7.2 Manifestación

Expresión observable mediante la cual una estructura puede proyectarse parcialmente.

Una manifestación no garantiza que la estructura haya sido reconstruida correctamente.

### 7.3 Estructura cognitiva candidata

Hipótesis de que una región de una manifestación expresa una forma con identidad, rol operativo, invariantes y variación reconstruibles.

Debe permanecer como candidata hasta superar los criterios de calificación y validación pertinentes.

### 7.4 Proyección estructural

Representación explícita y portable construida desde una o más manifestaciones.

### 7.5 Firma estructural

Conjunto normalizado de rasgos utilizados para comparar una consulta con candidatos.

```yaml
structural_signature:
  family_candidates: []
  dominant_role:
  nodes: []
  relations: []
  invariants: []
  constraints: []
  inputs: []
  outputs: []
  transformations: []
  variation_domain: []
  validation_criteria: []
```

La firma es una representación de búsqueda, no la totalidad de la estructura.

### 7.6 Resultado cognitivo

Unidad devuelta por la búsqueda que enlaza una estructura candidata con sus portadores, manifestaciones, razones de coincidencia, límites y estado.

## 8. Relaciones de búsqueda

La consulta debe declarar qué relación busca. `SIMILAR` por sí sola suele ser insuficiente.

| Operación | Pregunta |
|---|---|
| `FIND_EQUIVALENT` | ¿Existe una proyección de la misma estructura? |
| `FIND_ANALOGOUS` | ¿Qué estructura de otro dominio preserva relaciones útiles? |
| `FIND_SIMILAR_ROLE` | ¿Qué realiza la misma función dominante? |
| `FIND_COMPLEMENTARY` | ¿Qué estructura aporta una función faltante? |
| `FIND_DEPENDENCIES` | ¿De qué estructuras depende ésta? |
| `FIND_INSTANCES` | ¿Qué realizaciones pertenecen a esta estructura? |
| `FIND_SOURCES` | ¿Qué portadores sustentan o desarrollan esta estructura? |
| `FIND_CONTRADICTIONS` | ¿Qué estructuras o afirmaciones entran en conflicto? |
| `FIND_TRANSFORMATIONS` | ¿Qué métodos convierten una entrada de este tipo en la salida requerida? |
| `FIND_BRIDGES` | ¿Qué estructura conocida puede funcionar como puente hacia la estructura objetivo? |

## 9. Contrato de consulta

```yaml
cognitive_search_query:
  id:
  issued_by: HUMAN | AI_INTERNAL
  parent_command_id:
  objective:
  relation:
  query_source:
    type: natural_language | structure_id | cnode | fragment | graph | example
    value:
  target_signature:
    family_candidates: []
    dominant_role:
    required_relations: []
    required_invariants: []
    prohibited_relations: []
    constraints: []
  scope:
    allowed_areas: []
    excluded_areas: []
    memory_entities: []
    include_history: false
    include_external_sources: false
  ranking_preferences:
    prioritize_structure_over_vocabulary: true
    diversity_of_domains:
    maturity_minimum:
    authority_minimum:
  output:
    maximum_candidates:
    include_manifestation_excerpt: true
    include_limits: true
    include_provenance: true
  authorization:
    read_only: true
    persistent_write: false
```

Si la consulta no especifica una relación, el sistema debe inferir una candidata y declararla, o pedir aclaración cuando la elección cambie materialmente el resultado.

## 10. Arquitectura general

La aplicación posee dos ciclos relacionados: preparación del espacio buscable y ejecución de consultas.

### 10.1 Ciclo de preparación

```text
PORTADORES AUTORIZADOS
  ↓
INVENTARIO Y DIRECCIONAMIENTO
  ↓
SEGMENTACIÓN DE MANIFESTACIONES
  ↓
EXTRACCIÓN DE CANDIDATOS
  ↓
PROYECCIÓN A FIRMA ESTRUCTURAL
  ↓
CALIFICACIÓN CS1-CS4
  ↓
DEDUPLICACIÓN Y PROCEDENCIA
  ↓
REGISTRO DE ESTRUCTURAS
  ↓
ÍNDICES DE RECUPERACIÓN
```

### 10.2 Ciclo de consulta

```text
INTENCIÓN O NECESIDAD
  ↓
CONSTRUCTOR DE CONSULTA
  ↓
FIRMA OBJETIVO
  ↓
GENERACIÓN DE CANDIDATOS
  ↓
COMPARACIÓN ESTRUCTURAL
  ↓
VALIDACIÓN DE RESTRICCIONES
  ↓
RANKING JUSTIFICADO
  ↓
TRAZABILIDAD
  ↓
RESULTADOS COGNITIVOS
```

## 11. Componentes propuestos

### 11.1 `GESTOR_DE_PORTADORES`

Localiza archivos, artefactos y otras fuentes autorizadas. Conserva dirección, tipo, versión, autoridad, entidad propietaria y permisos.

### 11.2 `SEGMENTADOR_DE_MANIFESTACIONES`

Divide un portador en regiones recuperables sin perder la relación con el contexto mayor.

Una región puede ser una sección, registro NDJSON, definición, tabla, grafo, procedimiento o fragmento visual futuro.

### 11.3 `PROYECTOR_ESTRUCTURAL`

Reconstruye candidatos mediante rol, nodos, relaciones, invariantes, restricciones, transformaciones y criterios de validación.

### 11.4 `CALIFICADOR_DE_ESTRUCTURAS`

Aplica, como mínimo, los criterios existentes:

```text
CS1 límite de identidad reconstruible
CS2 rol operativo explícito
CS3 clasificación por familia posible
CS4 proyección portable posible
```

Lo que no supera la prueba puede conservarse como contenido o manifestación, pero no debe registrarse como estructura confirmada.

### 11.5 `REGISTRO_DE_ESTRUCTURAS`

Catálogo operativo con identificadores, firmas, portadores, relaciones, versiones, estado y evidencia.

### 11.6 `CONSTRUCTOR_DE_CONSULTAS`

Transforma lenguaje natural o una necesidad interna en una firma objetivo y una relación de búsqueda explícita.

### 11.7 `GENERADOR_DE_CANDIDATOS`

Recupera un conjunto amplio mediante múltiples índices: textual, semántico, taxonómico, relacional, procedimental y de grafo.

### 11.8 `MOTOR_DE_COMPATIBILIDAD`

Compara firmas sin reducir compatibilidad a parecido verbal.

### 11.9 `RANKEADOR_EXPLICABLE`

Ordena candidatos según la relación solicitada, autoridad, madurez, cobertura estructural, contradicciones y diversidad requerida.

### 11.10 `RESOLVEDOR_DE_TRAZABILIDAD`

Une cada candidato con sus manifestaciones, portadores, versiones, duplicados y transformaciones.

### 11.11 `PRESENTADOR_DE_RESULTADOS`

Entrega resultados comprensibles para el humano o consumibles por otra cApp.

### 11.12 `VALIDADOR_DE_BÚSQUEDA`

Registra selecciones útiles, falsos positivos, analogías fallidas y estructuras ausentes para mejorar índices y criterios sin convertir feedback en verdad automática.

## 12. Niveles de coincidencia

La búsqueda puede utilizar varios niveles, pero debe declarar cuál sustentó cada resultado.

```text
L0 coincidencia de identificador o referencia exacta
L1 coincidencia léxica
L2 proximidad semántica
L3 coincidencia por Familia Cognitiva y rol operativo
L4 correspondencia de nodos y relaciones
L5 compatibilidad de invariantes, restricciones y transformaciones
L6 compatibilidad para integración o transferencia
```

Los niveles bajos sirven para generar candidatos. Una analogía fuerte o una integración no debe aprobarse sólo con L1 o L2.

## 13. Comparación estructural

Dimensiones mínimas:

| Dimensión | Pregunta |
|---|---|
| Roles | ¿Los componentes realizan funciones comparables? |
| Relaciones | ¿Se conserva el tipo de conexión entre componentes? |
| Jerarquía | ¿Los niveles se organizan de forma compatible? |
| Secuencia | ¿Existe una trayectoria equivalente? |
| Flujo | ¿Circula información, control, materia o valor de forma comparable? |
| Transformación | ¿La operación central cambia el estado de modo compatible? |
| Invariantes | ¿Permanece visible lo que define la identidad? |
| Restricciones | ¿Existen límites compatibles o contradicciones? |
| Validación | ¿Los criterios de éxito pueden alinearse? |
| Borde | ¿Las dependencias permitidas y prohibidas son compatibles? |

La versión inicial debe preferir categorías justificadas `ALTA`, `MEDIA`, `BAJA` o `INCOMPATIBLE`. No debe fingir precisión numérica sin calibración.

## 14. Contrato de resultado

```yaml
cognitive_search_result:
  query_id:
  candidate_id:
  status: CANDIDATE | QUALIFIED | VALIDATED
  name:
  family_candidates: []
  dominant_role:
  source_locations:
    - carrier_id:
      path:
      address:
      version:
      authority:
      lifecycle:
  reconstructed_signature:
    nodes: []
    relations: []
    invariants: []
    constraints: []
    transformations: []
  match:
    requested_relation:
    level:
    category: HIGH | MEDIUM | LOW | INCOMPATIBLE
    preserved_relations: []
    non_preserved_relations: []
    contradictions: []
    rationale:
  provenance:
    independent_sources: []
    duplicate_representations: []
    inferred_elements: []
  uncertainty:
  permitted_next_operations: []
```

## 15. Presentación de resultados al humano

La respuesta mínima debe permitir contestar:

```text
¿Qué estructura encontraste?
¿Dónde está manifestada?
¿Por qué corresponde con mi búsqueda?
¿Qué relaciones preserva?
¿Dónde deja de corresponder?
¿Qué parte es fuente y qué parte es inferencia?
¿Qué tan madura y autorizada está?
¿Qué puedo hacer después con ella?
```

## 16. Interfaz interna para IA

Una cApp u orquestador puede emitir:

```yaml
internal_call:
  operation: SEARCH_COGNITIVE_STRUCTURES
  parent_command_id: CMD-...
  need:
    role: seleccionar_por_criterios
    objective: localizar_un_puente_para_explicar_X
  relation: FIND_BRIDGES
  scope:
    inherit_from_parent_command: true
  stop_conditions:
    maximum_candidates: 5
    minimum_category: MEDIUM
  write_policy: READ_ONLY
```

La aplicación devuelve candidatos. La IA que ejecuta el comando conserva responsabilidad por justificar la selección y respetar el punto de autorización correspondiente.

## 17. Permisos y memoria

### Invariantes de acceso

- Toda búsqueda declara alcance.
- La búsqueda interna hereda permisos; no los expande.
- No se mezclan memorias de entidades sin autorización.
- El historial está excluido por defecto para trabajo operativo.
- Las fuentes externas se distinguen de las definiciones internas.
- Un artefacto y el archivo que serializa no cuentan como fuentes independientes.
- Los resultados sensibles no se vuelven persistentes automáticamente.

### Estado de lectura y escritura

La operación de búsqueda es `READ_ONLY` por defecto.

Requieren autorización adicional:

- materializar una estructura extraída;
- incorporarla al registro operativo;
- actualizar un índice persistente;
- modificar una aplicación;
- modificar el canon;
- usar el resultado para ejecutar una acción crítica.

## 18. Invariantes de la aplicación

```yaml
invariants:
  - structure_over_surface_similarity
  - explicit_search_relation
  - provenance_required
  - carrier_is_not_structure
  - manifestation_is_not_proof
  - uncertainty_must_be_visible
  - duplicates_are_not_independent_evidence
  - memory_scope_is_explicit
  - feedback_is_not_truth
  - human_sovereignty
```

## 19. Prohibiciones

- No presentar una coincidencia léxica como equivalencia estructural.
- No inventar estructuras ausentes para completar una consulta.
- No ocultar contradicciones o relaciones no preservadas.
- No atribuir acceso a portadores no disponibles.
- No contar versiones o artefactos duplicados como corroboraciones independientes.
- No buscar fuera del alcance autorizado.
- No insertar automáticamente el resultado en el canon.
- No usar embeddings, puntajes o grafos como prueba suficiente de identidad.
- No tratar una metáfora atractiva como analogía estructural validada.

## 20. Antipatrones

| Antipatrón | Falla | Corrección |
|---|---|---|
| Buscador de palabras renombrado | devuelve textos, no estructuras | proyectar firma y comparar relaciones |
| Embedding como veredicto | confunde proximidad con identidad | usarlo sólo para candidatos |
| Fragmentación sin contexto | pierde dependencias y negaciones | conservar dirección y envolvente |
| Analogía sin ruptura | sobreextiende correspondencias | declarar límites explícitos |
| Ranking opaco | no permite auditar resultados | explicar dimensiones y procedencia |
| Inflación por duplicados | repeticiones aparentan evidencia | resolver genealogía y hashes |
| Búsqueda universal | filtra memorias entre entidades | imponer alcance y permisos |
| Resultado sin acción permitida | la IA asume autorización | declarar operaciones siguientes |

## 21. Dependencias

```text
BÚSQUEDA_COGNITIVA
  depends_on → COGNICION_CENTRAL
  depends_on → INTERPRETACION_DE_COMANDOS
  depends_on → MEMORIA_COGNITIVA
  depends_on → LENGUAJE_DE_ESTRUCTURAS
  depends_on → FAMILIAS_COGNITIVAS
  depends_on → CNODE / PROYECCION_ESTRUCTURAL
  depends_on → INGENIERIA_DE_ESTRUCTURAS_COGNITIVAS
  depends_on → TRAZABILIDAD_CONCEPTUAL
  depends_on → REGISTRO_DE_ARCHIVOS
  requires → REGISTRO_DE_ESTRUCTURAS_COGNITIVAS
  requires → MAPA_DE_DEPENDENCIAS
  may_use → ARTEFACTOS
  may_use → INDICES_TEXTUALES
  may_use → EMBEDDINGS
  may_use → GRAFOS
  may_use → MODELOS_DE_LENGUAJE
```

`REGISTRO_DE_ESTRUCTURAS_COGNITIVAS` y `MAPA_DE_DEPENDENCIAS` son dependencias funcionales todavía pendientes de formalización. La aplicación puede operar manualmente en modo exploratorio antes de que existan, pero no alcanzar recuperación sistemática completa.

## 22. Relación con APRENDIZAJE_ESTRUCTURAL

```text
APRENDIZAJE_ESTRUCTURAL
  necesita localizar
  estructuras ya dominadas compatibles

BÚSQUEDA_COGNITIVA
  puede recuperar
  anclas, puentes, contraejemplos y transferencias
```

La búsqueda no enseña por sí misma. Localiza candidatos que el módulo de aprendizaje puede convertir en una trayectoria didáctica.

## 23. Relación con la IEC

La Ingeniería de Estructuras Cognitivas ya identifica `BÚSQUEDA EN CATÁLOGO` como problema recurrente y reconoce cApps metodológicas para búsqueda, validación y persistencia.

BÚSQUEDA_COGNITIVA formaliza esa capacidad pendiente:

```text
IEC
  transforma intención en estructura operable

BÚSQUEDA_COGNITIVA
  localiza estructuras existentes
  que pueden seleccionarse, compararse o ensamblarse
```

## 24. Ejemplo conceptual

Consulta:

```text
"Busca una estructura que permita coordinar múltiples unidades especializadas
sin quitar al humano la decisión final."
```

Firma objetivo provisional:

```yaml
dominant_role: coordinacion
required_relations:
  - autoridad_humana_over_sistema
  - coordinador_routes_unidades_especializadas
  - unidades_produce_resultados_parciales
  - integracion_precedes_validacion
required_invariants:
  - soberania_humana
  - especializacion_sin_homogeneizacion
  - validacion_antes_de_cambio_critico
```

La generación de candidatos podría recuperar manifestaciones expresadas como:

- sistema operativo y procesos;
- cocina y estaciones;
- orquesta y secciones;
- torre de control y aeronaves;
- orquestador y estructuras cognitivas.

La aplicación debería distinguir que esos candidatos no son equivalentes. Cada uno preserva regiones distintas de la firma y posee puntos de ruptura específicos.

## 25. Validación y métricas

### Calidad de recuperación

- precisión de estructuras calificadas;
- cobertura de estructuras relevantes conocidas;
- tasa de falsos equivalentes;
- cobertura de procedencia;
- detección de duplicados;
- detección de contradicciones;
- diversidad útil de dominios cuando se solicita analogía.

### Utilidad operativa

- proporción de resultados seleccionados por el humano o la cApp consumidora;
- reducción de tiempo para localizar dependencias;
- calidad de puentes producidos;
- éxito posterior de ensamblaje, explicación o transferencia;
- capacidad para justificar por qué un resultado fue recuperado.

### Pruebas mínimas

```text
[ ] recupera una coincidencia exacta conocida
[ ] recupera una estructura equivalente con vocabulario distinto
[ ] distingue similitud temática de similitud estructural
[ ] declara el punto de ruptura de una analogía
[ ] excluye un candidato con invariante contradictorio
[ ] conserva dirección exacta del portador
[ ] colapsa representaciones duplicadas
[ ] respeta alcance y permisos
[ ] permite a un tercero reconstruir el razonamiento de búsqueda
```

## 26. Implementación progresiva

### Fase 0 - Operación manual asistida

- utilizar el registro de archivos y README;
- recuperar fuentes por alcance;
- proyectar manualmente firmas;
- comparar candidatos con justificación;
- registrar resultados de prueba.

### Fase 1 - Registro estructural

- formalizar `REGISTRO_DE_ESTRUCTURAS_COGNITIVAS`;
- asignar IDs a estructuras calificadas;
- enlazar cada estructura con sus manifestaciones;
- formalizar `MAPA_DE_DEPENDENCIAS`.

### Fase 2 - Índice híbrido

- índice léxico y semántico para generación de candidatos;
- índice por familias, roles e invariantes;
- almacenamiento de firmas estructurales;
- deduplicación por procedencia y contenido.

### Fase 3 - Motor de compatibilidad

- comparación de subgrafos;
- reglas de invariantes y restricciones;
- ranking explicable;
- pruebas calibradas con conjuntos conocidos.

### Fase 4 - Servicio interno

- interfaz invocable por otras cApps;
- herencia automática de permisos;
- eventos y observabilidad;
- feedback validado y corrección acumulativa.

## 27. Memoria recomendada

Registrar:

- consultas y firmas objetivo;
- candidatos recuperados;
- candidatos seleccionados y rechazados;
- justificaciones;
- falsos positivos;
- estructuras no encontradas;
- duplicados detectados;
- relaciones de analogía y sus rupturas;
- contexto y fecha de validación;
- aplicación o comando consumidor.

No registrar como verdad automática las preferencias observadas en una sola consulta.

## 28. Trazabilidad conceptual inicial

| ID | Idea fuente | Origen | Función local | Estado |
|---|---|---|---|---|
| `IF-BC-01` | localizar estructuras para que COGNICION_CENTRAL pueda operarlas | comando humano del 2026-08-08 | propósito central | propuesta explícita |
| `IF-BC-02` | dos modos: búsqueda humana y búsqueda interna de IA | comando humano del 2026-08-08 | modos de activación | propuesta explícita |
| `IF-BC-03` | relación con Google Lens | comando humano del 2026-08-08 | analogía fundacional | propuesta explícita |
| `IF-BC-04` | búsqueda en catálogo como problema recurrente | Ingeniería de Estructuras Cognitivas | antecedente metodológico | working draft |
| `IF-BC-05` | catálogo indexado para búsqueda y comparación | Ingeniería de Estructuras Cognitivas | requisito de infraestructura | working draft |
| `IF-BC-06` | criterios CS1-CS4 | Estructuras Cognitivas / cNode | calificación de candidatos | working draft |
| `IF-BC-07` | Familias y Rol Operativo | núcleo TMC | comparación funcional | estable en núcleo |
| `IF-BC-08` | trazabilidad y procedencia | COGNICION_CENTRAL | auditabilidad | formalizada |
| `IF-BC-09` | puentes y compatibilidad estructural | APRENDIZAJE_ESTRUCTURAL | búsqueda de analogías | aplicación v0.1 |

## 29. Preguntas abiertas

1. ¿Cuál será la representación intermedia canónica de una firma estructural?
2. ¿Qué unidad mínima debe indexarse: fragmento, definición, cNode, subgrafo o varias?
3. ¿Cuándo una estructura candidata merece un ID persistente?
4. ¿Cómo se calibrarán categorías de compatibilidad?
5. ¿Cómo se versionará una estructura reconstruida desde portadores que cambian?
6. ¿Qué resultados puede consumir automáticamente otra cApp y cuáles requieren selección humana?
7. ¿Cómo se representarán estructuras multimodales?
8. ¿Cómo se distinguirán ausencia real, falta de acceso y fallo de recuperación?
9. ¿Qué parte de la aplicación pertenece finalmente al núcleo o al orquestador?

## 30. Decisiones requeridas antes de integración canónica

- aprobar el nombre `BÚSQUEDA_COGNITIVA`;
- aprobar su condición de cApp de infraestructura metodológica;
- aprobar los dos modos de activación;
- elegir o formalizar la representación intermedia;
- establecer niveles de autonomía para búsquedas internas;
- formalizar registro de estructuras y mapa de dependencias;
- ejecutar casos de prueba sobre el repositorio actual.

## 31. Definición compacta

```text
BÚSQUEDA_COGNITIVA
=
consulta estructural
+ localización de manifestaciones
+ proyección de candidatos
+ comparación estructura-a-estructura
+ trazabilidad
+ límites e incertidumbre
```

## 32. Regla final

> **BÚSQUEDA_COGNITIVA no debe limitarse a encontrar dónde aparecen palabras. Debe permitir que COGNICION_CENTRAL descubra qué formas cognitivas existen, dónde están manifestadas, con qué otras formas son compatibles y por qué pueden o no utilizarse para cumplir una intención humana.**

