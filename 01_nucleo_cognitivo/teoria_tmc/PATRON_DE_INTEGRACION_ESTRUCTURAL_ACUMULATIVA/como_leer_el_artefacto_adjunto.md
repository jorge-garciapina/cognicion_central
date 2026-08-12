# CÓMO LEER EL ARTEFACTO PIEA ADJUNTO

> **ID:** `PIEA-RUNTIME-BOOTSTRAP-001`  
> **Nombre físico recomendado:** `como_leer_el_artefacto_adjunto.md`  
> **Sistema objetivo:** `PATRÓN_DE_INTEGRACIÓN_ESTRUCTURAL_ACUMULATIVA` (`PIEA`)  
> **Versión del paquete esperada:** `0.2.0`  
> **Versión de este protocolo:** `0.1.0`  
> **Fecha:** `2026-08-11`  
> **Proyecto:** `COGNICIÓN_CENTRAL`  
> **Tipo:** protocolo portable de inicialización y operación en runtime  
> **Autoridad soberana:** `HUMANO`  
> **Módulo cognitivo esperado:** `cognicion_central_piea.md`  
> **Estado:** `OPERATIVO / PORTABLE / EXPERIMENTAL / NO CANÓNICO`

---

# 0. PROPÓSITO

Este documento enseña a una IA a reconocer, instalar cognitivamente y operar el artefacto PIEA adjunto.

El artefacto no debe tratarse como texto monolítico ni como una carpeta arbitraria. Debe interpretarse como:

```text
ARTEFACTO PIEA
│
├── 00_core/
│   definición, notación, invariantes, variación y fronteras
│
├── 10_mecanismo/
│   transición, acumulación, trayectoria, memoria, escala y extensiones
│
├── 20_metodo/
│   adaptación FAC, instanciación, pruebas, plantilla y auditoría
│
├── 30_relaciones/
│   interfaces con ACCD, FAC y COGNICIÓN_CENTRAL
│
├── ejemplos/
│   textos, interacción humano–IA y dieta–ejercicio
│
├── 90_meta/
│   trazabilidad, glosario, cambios y deudas
│
├── cognicion_central_piea.md
│   grafo, ruteo, operadores y validadores
│
└── como_leer_el_artefacto_adjunto.md
    este bootloader
```

Funciones separadas:

```text
este documento
= protocolo de arranque y operación

cognicion_central_piea.md
= cognición local

resto del paquete
= memoria conceptual distribuida

IA/chat
= runtime que interpreta y ejecuta
```

---

# 1. INSTRUCCIÓN FUNDAMENTAL

Cuando recibas este bootstrap junto con PIEA:

1. reconoce la arquitectura interna;
2. localiza `cognicion_central_piea.md`;
3. úsalo como mapa, router y capa operativa;
4. usa los demás documentos como fuentes conceptuales;
5. comprueba la versión `0.2.0`;
6. localiza los tres ejemplos por separado;
7. no leas todo linealmente por defecto;
8. recupera la región mínima suficiente;
9. ejecuta operadores, no sólo vocabulario;
10. valida con P1–P12 cuando se afirme pertenencia;
11. distingue núcleo, adaptación, ejemplo, observación y manifestación;
12. registra la directiva experimental backend/frontend sin declararla implementada;
13. conserva soberanía humana;
14. no persistas cambios por defecto.

Regla central:

```text
PRIMERO
instalar el mapa cognitivo

DESPUÉS
clasificar la intención

DESPUÉS
recuperar y operar el subgrafo necesario

FINALMENTE
validar, responder y declarar persistencia
```

---

# 2. QUÉ ES EL ARTEFACTO

PIEA puede recibirse como:

- carpeta;
- ZIP;
- archivo NDJSON o JSONL;
- TXT agregado;
- colección de archivos adjuntos;
- registros con rutas y contenido;
- representación equivalente.

La forma física puede variar. La arquitectura lógica no.

El runtime debe localizar:

```text
1. README.md
2. 00_core/00_especificacion_nuclear.md
3. 00_core/01_ontologia_y_notacion.md
4. 00_core/02_invariantes.md
5. 00_core/03_dominio_de_variacion.md
6. 00_core/04_fronteras_y_no_equivalencias.md
7. mecanismo y método
8. relaciones con FAC/ACCD/COGNICIÓN_CENTRAL
9. tres ejemplos
10. cognicion_central_piea.md
11. este bootstrap
```

## 2.1. Contrato para artefactos NDJSON

Si cada línea es un objeto JSON independiente, busca:

```json
{"path":"ruta/interna","text":"contenido"}
```

o equivalentes con:

```text
address/content
path_rel/content
```

Si existen chunks:

1. agrupa por ruta;
2. ordena por `chunkIndex`;
3. conserva metadatos;
4. no unas rutas diferentes;
5. registra líneas inválidas;
6. no materialices rutas sin autorización.

---

# 3. JERARQUÍA DE AUTORIDAD

```text
0. reglas de plataforma, seguridad, acceso y herramientas
1. comando humano actual y autorizado
2. gobierno vigente de COGNICIÓN_CENTRAL cuando sea aplicable
3. este bootstrap para arranque y operación
4. fuentes PIEA 0.2.0 para contenido conceptual
5. cognicion_central_piea.md como representación derivada
6. ejemplos aceptados para sus dominios declarados
7. inferencias del runtime
8. propuestas y diseños experimentales
```

## 3.1. Autoridad procedimental

Este bootstrap gobierna:

- detección;
- inicialización;
- navegación;
- recuperación;
- manejo de versiones;
- contradicciones;
- fallbacks;
- modos de runtime;
- no persistencia.

## 3.2. Autoridad conceptual

Las fuentes PIEA gobiernan:

- ecuación nuclear;
- ontología;
- invariantes;
- dominio de variación;
- método;
- pruebas;
- fronteras;
- relaciones con FAC y ACCD.

Cada ejemplo gobierna únicamente su realización contextual y sus límites.

## 3.3. Regla de conflicto

Si el módulo cognitivo contradice una fuente PIEA más reciente:

```text
FUENTE PIEA VIGENTE
>
REPRESENTACIÓN DERIVADA
```

Debes:

1. localizar el conflicto;
2. usar la fuente de mayor autoridad;
3. marcar el módulo como potencialmente desactualizado;
4. conservar la diferencia;
5. informar si afecta el resultado;
6. no modificar persistentemente sin autorización.

## 3.4. Regla de corrección humana

Una corrección humana actual puede sustituir una versión, restringir una tarea o cambiar un objetivo. Debe integrarse con alcance y procedencia, no anexarse como frase indiferenciada.

---

# 4. PROTOCOLO DE ARRANQUE

```text
BOOT-0  RECONOCER ARTEFACTO
   ↓
BOOT-1  LOCALIZAR cognicion_central_piea.md
   ↓
BOOT-2  VERIFICAR PIEA 0.2.0 Y ECUACIÓN NUCLEAR
   ↓
BOOT-3  CARGAR SOURCE REGISTRY
   ↓
BOOT-4  COMPROBAR FUENTES BASE
   ↓
BOOT-5  LOCALIZAR TRES EJEMPLOS
   ↓
BOOT-6  CARGAR ONTOLOGÍA Y GRAFO
   ↓
BOOT-7  CARGAR VECINDARIOS, OPERADORES Y ROUTER
   ↓
BOOT-8  CARGAR P1–P12 Y QUALITY GATES
   ↓
BOOT-9  REGISTRAR DIRECTIVA BACKEND/FRONTEND
   ↓
BOOT-10 DETECTAR ARCHIVOS NUEVOS Y VERSIONES
   ↓
BOOT-11 EJECUTAR PRUEBAS DE ARRANQUE
   ↓
BOOT-12 DECLARAR ESTADOS DE DISPONIBILIDAD
```

---

# 5. BOOT-0 — RECONOCER EL ARTEFACTO

```yaml
artifact_detection:
  artifact_present: true|false
  artifact_type: folder|zip|ndjson|jsonl|txt_aggregate|file_collection|other
  logical_name:
  package_version:
  visible_record_count:
  contains_piea_core: true|false
  contains_examples_directory: true|false
  contains_cognition_module: true|false
  contains_bootstrap: true|false
```

Señales mínimas:

```text
Patrón de Integración Estructural Acumulativa
S_{t+1}=𝓘_{κ_t}(S_t,u_t)
estado previo
aporte parcial
contexto operativo
integración
persistencia selectiva
```

No dependas de un único nombre físico.

---

# 6. BOOT-1 — LOCALIZAR EL MÓDULO COGNITIVO

Busca explícitamente:

```text
cognicion_central_piea.md
```

Si se encuentra:

```text
COGNITIVE_MODULE_FOUND
```

Si no se encuentra:

```text
ERROR_COGNITIVE_MODULE_NOT_FOUND
```

En ese caso:

- no declares instalada la cognición local;
- puedes leer PIEA convencionalmente;
- informa que el router, los operadores y el grafo derivado no están cargados;
- no reconstruyas silenciosamente el archivo desde memoria;
- sólo regénéralo si el humano lo solicita.

---

# 7. BOOT-2 — VERIFICAR VERSIÓN Y NOTACIÓN

Comprueba:

```yaml
piea_identity:
  package_version: 0.2.0
  nuclear_equation: "S_{t+1}=𝓘_{κ_t}(S_t,u_t)"
  one_nuclear_equation: true|false
  status:
  authority:
```

Detecta reintroducciones no autorizadas:

```text
T_C como forma operativa actual
H_t como argumento universal
θ_t
Γ_t
π como operador PIEA
dS/dt como ecuación nuclear
J como operador paralelo
```

Las coincidencias pueden aparecer en historia o auditoría. Sólo son falla si se presentan como notación vigente.

No declares `PIEA_READY` si no puedes resolver qué versión tiene autoridad.

---

# 8. BOOT-3 — CONSTRUIR EL MAPA DE FUENTES

Lee `source_registry` y `example_source_registry` dentro de `cognicion_central_piea.md`.

Para cada fuente:

```yaml
source_check:
  source_id:
  expected_path:
  found: true|false
  actual_path:
  version:
  status: OK|MISSING|RENAMED|DUPLICATED|NEWER_THAN_COGNITION_MODULE|UNKNOWN
```

No es obligatorio mostrar toda la tabla al humano salvo que exista un problema.

## 8.1. Conteos esperados

Para el paquete completo después de integrar esta etapa:

```text
22 fuentes Markdown del paquete base
1 archivo auxiliar make-artifact.cjs
3 ejemplos Markdown
1 cognicion_central_piea.md
1 como_leer_el_artefacto_adjunto.md
```

Los conteos ayudan a detectar ausencias, pero no sustituyen la validación por ruta e identidad.

---

# 9. BOOT-4 — COMPROBAR FUENTES BASE

Verifica como mínimo:

```text
README
5 fuentes core
4 fuentes de mecanismo
5 fuentes de método
3 fuentes de relaciones
4 fuentes meta
```

Estados posibles:

```text
BASE_SOURCES_READY
BASE_SOURCES_PARTIAL
BASE_SOURCES_VERSION_AMBIGUITY
BASE_SOURCES_INVALID
```

Una ausencia en `make-artifact.cjs` no impide operar conceptualmente PIEA. Una ausencia en ecuación, invariantes o pruebas sí puede bloquear tareas de validación.

---

# 10. BOOT-5 — LOCALIZAR LOS TRES EJEMPLOS

Busca por ruta, ID interno o título:

```text
ejemplos/01_textos.md
PIEA-EJ-TXT-001
Ejemplo PIEA: textos

ejemplos/02_interaccion_humano_ia.md
PIEA-EJ-HIA-001
Ejemplo PIEA: interacción humano–IA

ejemplos/03_dieta_ejercicio.md
PIEA-EJ-DIE-001
Ejemplo PIEA: dieta–ejercicio
```

Registra:

```yaml
examples_state:
  texts: READY|MISSING|AMBIGUOUS
  human_ai: READY|MISSING|AMBIGUOUS
  diet_exercise: READY|MISSING|AMBIGUOUS
  comparison_ready: true|false
```

La ausencia de un ejemplo no destruye el núcleo. Sí bloquea comparaciones que lo necesiten.

No uses un ejemplo de memoria si el archivo vigente falta.

---

# 11. BOOT-6..9 — CARGAR OPERACIÓN

Desde `cognicion_central_piea.md`, carga:

```text
identidad
espacios lógicos
source registry
example source registry
ontología de nodos
ontología de aristas
registro de nodos
grafo nuclear
vecindarios
operadores
router
recetas
matriz de ejemplos
política epistemológica
trazabilidad
quality gates
fallas
protocolo de actualización
directiva PROJECT-GLOBAL-COMMENT-BF-001
```

Interpreta el módulo como:

```text
MAPA
+ NAVEGACIÓN
+ OPERACIÓN
+ VALIDACIÓN
```

No como resumen narrativo.

---

# 12. BOOT-10 — DETECTAR FUENTES NUEVAS

```text
SOURCE REGISTRY
≠ necesariamente
TOTALIDAD FÍSICA ACTUAL
```

Si aparece un archivo no registrado:

```text
NEW_SOURCE_DETECTED
```

Entonces:

1. no lo ignores;
2. no lo incorpores automáticamente al grafo;
3. léelo sólo si es relevante;
4. identifica nodos y aristas candidatos;
5. marca `UNREGISTERED_SOURCE_DERIVED`;
6. informa si cambia la respuesta;
7. propone mantenimiento sólo si corresponde.

No clasifiques los tres ejemplos esperados como fuentes nuevas.

---

# 13. BOOT-11 — PRUEBAS DE ARRANQUE

Ejecuta internamente o simula:

```text
T-BOOT-01  Recuperar la ecuación nuclear.
T-BOOT-02  Distinguir S_t de S_{t+1}.
T-BOOT-03  Distinguir κ_t de φ_n de ACCD.
T-BOOT-04  Localizar P1–P12.
T-BOOT-05  Rechazar una lista de archivos como PIEA sin organización demostrada.
T-BOOT-06  Localizar los tres ejemplos.
T-BOOT-07  Comparar una correspondencia y una ruptura entre ejemplos.
T-BOOT-08  Localizar la directiva backend/frontend.
T-BOOT-09  Reconocer que PIEA_BF_RUNTIME_READY sigue en false.
T-BOOT-10  Preservar no persistencia y autoridad humana.
```

---

# 14. BOOT-12 — DECLARAR ESTADO

```yaml
runtime_state:
  system: PIEA
  package_version: 0.2.0
  cognition_module: cognicion_central_piea.md
  cognition_loaded: true|false
  source_registry_loaded: true|false
  graph_loaded: true|false
  routing_enabled: true|false
  operators_enabled: true|false
  validation_enabled: true|false
  examples:
    texts: READY|MISSING|AMBIGUOUS
    human_ai: READY|MISSING|AMBIGUOUS
    diet_exercise: READY|MISSING|AMBIGUOUS
  backend_frontend_experiment:
    directive_registered: true|false
    example_extension_present: true|false
    implementation_spec_present: true|false
    validators_executed: true|false
    human_approved: true|false
  human_sovereignty: true
  persistence_default: false
```

Estados independientes:

```text
PIEA_READY
= núcleo, grafo, operadores y validadores operables

PIEA_EXAMPLES_READY
= los tres ejemplos localizados y comparables

PIEA_BF_EXPERIMENT_REGISTERED
= directiva humana registrada y ruta disponible

PIEA_BF_RUNTIME_READY
= especificación + implementación comprobada + validación + aprobación humana
```

Para esta versión del módulo:

```text
PIEA_BF_RUNTIME_READY = false
```

No lo cambies sólo por haber cargado el vecindario experimental.

---

# 15. MODOS DE OPERACIÓN

## 15.1. `PIEA_REFERENCE`

Para definir, explicar, consultar fuentes o mostrar relaciones.

## 15.2. `PIEA_RUNTIME`

Para aplicar PIEA a un fenómeno, construir una instancia o analizar una transición.

## 15.3. `PIEA_VALIDATION`

Para decidir pertenencia, falsar, comparar modelos o auditar notación.

## 15.4. `PIEA_EXAMPLE_RUNTIME`

Para navegar o comparar textos, humano–IA y dieta–ejercicio.

## 15.5. `PIEA_ACCD_HANDOFF`

Para preparar una estructura PIEA ya cerrada hacia una realización ACCD.

## 15.6. `PIEA_MAINTENANCE`

Para revisar fuentes nuevas, cambios de versión o desactualización del grafo.

## 15.7. `PIEA_BF_EXPERIMENT`

Para desarrollar la funcionalidad backend/frontend cognitivo derivada del ejemplo humano–IA.

No se activa sólo porque aparezcan las palabras «IA», «grafo» o «frontend». Se activa cuando el objetivo sea diseñar, implementar, inspeccionar o probar esa funcionalidad.

---

# 16. PROTOCOLO RUNTIME

```text
R0 RECIBIR COMANDO
 ↓
R1 INTERPRETAR INTENCIÓN
 ↓
R2 SELECCIONAR MODO Y VECINDARIOS
 ↓
R3 CONSTRUIR PIEA-WORK
 ↓
R4 RECUPERAR FUENTES MÍNIMAS
 ↓
R5 EJECUTAR OPERADORES
 ↓
R6 VALIDAR
 ↓
R7 MARCAR ESTADO EPISTEMOLÓGICO
 ↓
R8 RESPONDER O PRODUCIR ARTEFACTO
 ↓
R9 DECLARAR PERSISTENCIA
```

---

# 17. R1 — INTERPRETAR INTENCIÓN

Ejemplos:

```text
"¿qué es PIEA?"
→ define_piea

"modela esto con PIEA"
→ analyze_new_case_as_piea

"¿esto realmente pertenece?"
→ validate_piea_membership

"adáptalo a una organización"
→ adapt_piea_to_domain

"compara los tres ejemplos"
→ compare_examples

"muestra el estado visible"
→ inspect_or_generate_snapshot

"extiende el backend/frontend"
→ develop_backend_frontend_experiment

"haz un video con esta instancia"
→ prepare_manifestation después de cerrar PIEA

"actualicé el paquete"
→ update_local_cognition
```

Si existen varias intenciones, declara primaria y secundarias.

---

# 18. R2 — SELECCIONAR VECINDARIOS

Usa `cognitive_neighborhoods`.

No actives `DIET_EXERCISE` para una pregunta abstracta sobre la ecuación. No actives `BACKEND_FRONTEND_EXPERIMENT` para explicar simplemente la interacción humano–IA. No actives `ACCD_HANDOFF` hasta que exista destino de manifestación.

---

# 19. R3 — CONSTRUIR `PIEA-WORK`

```yaml
piea_work:
  mode:
  intent:
  seed_nodes: []
  activated_nodes: []
  required_edges: []
  source_bindings: []
  operators: []
  validators: []
  exclusions: []
```

Detén la expansión cuando existan elementos suficientes para:

```text
delimitar entrada
+ ejecutar operación
+ producir salida
+ validar
```

---

# 20. R4 — RECUPERAR FUENTES

```text
nodo
→ source binding
→ archivo fuente
```

El grafo sirve para localizar. La fuente sirve para fundamentar.

Si la pregunta exige precisión, consulta la fuente aunque el módulo contenga una definición resumida.

Prioridad:

```text
núcleo
→ mecanismo
→ método
→ relación arquitectónica
→ ejemplo pertinente
→ comparación
→ meta
```

---

# 21. R5 — EJECUTAR OPERADORES

No basta decir:

```text
"hay estado, aporte y contexto"
```

Uso real:

```text
fenómeno
→ OP_DELIMIT_SYSTEM
→ OP_DEFINE_STATE
→ OP_IDENTIFY_CONTRIBUTION
→ OP_CROP_CONTEXT
→ OP_SPECIFY_INTEGRATION
→ OP_DESCRIBE_STATE_AFTER
→ OP_TRACE_PERSISTENCE
→ OP_VALIDATE_MEMBERSHIP
```

Si falta una pieza, no la inventes. Marca la instancia como parcial o con evidencia insuficiente.

---

# 22. R6 — VALIDAR

Cuando se afirme pertenencia, ejecuta:

```text
P1  estado previo
P2  aporte
P3  actualización
P4  dependencia del estado
P5  contexto
P6  organización
P7  persistencia
P8  último aporte
P9  contexto omitido
P10 suficiencia del estado
P11 nivel
P12 no equivalencia ACCD
```

Clasifica:

```text
CONFIRMED_INSTANCE
PLAUSIBLE_INSTANCE
BOUNDARY_CASE
NON_INSTANCE
INSUFFICIENT_EVIDENCE
```

No ocultes fallos.

Para comparación entre ejemplos, añade:

- correspondencias;
- dominio de variación;
- mecanismos específicos;
- rupturas;
- límites de transferencia.

Para backend/frontend, ejecuta `QG-BF-01..08` además de los gates PIEA aplicables.

---

# 23. R7 — ESTADO EPISTEMOLÓGICO

Usa:

```text
SOURCE_DIRECT
SOURCE_SYNTHESIS
MODEL_DERIVED
INFERENCE
HYPOTHESIS
DESIGN_DECISION
HUMAN_DIRECTIVE
EXTERNAL_FACT
EXAMPLE_FIXTURE
```

No conviertas:

```text
HYPOTHESIS → SOURCE_DIRECT
EXAMPLE_FIXTURE → EXTERNAL_FACT
DESIGN_DECISION → PIEA_INVARIANT
HUMAN_DIRECTIVE → IMPLEMENTATION_COMPLETE
```

---

# 24. R8 — RESPONDER

Adapta el formato al comando humano.

Puedes producir:

- explicación;
- tabla de mapeo;
- grafo;
- trayectoria;
- instancia YAML;
- matriz P1–P12;
- comparación;
- snapshot;
- reporte de mantenimiento;
- especificación experimental;
- handoff a ACCD.

No muestres siempre todo el grafo ni toda la traza. Presérvalos internamente cuando sean necesarios.

---

# 25. R9 — NO PERSISTENCIA POR DEFECTO

```text
RESPUESTA DE CHAT
≠
MODIFICACIÓN DEL PAQUETE

SNAPSHOT
≠
ACTUALIZACIÓN CANÓNICA

PROPUESTA EXPERIMENTAL
≠
IMPLEMENTACIÓN
```

Sólo persiste cuando el humano lo solicita y la interfaz lo permite.

Declara:

```yaml
persistence:
  requested: true|false
  authorized: true|false
  completed: true|false
  target:
```

---

# 26. REGLA DE DOBLE REPRESENTACIÓN

Mantén separados:

```text
SOURCE GRAPH
dónde está escrito

COGNITIVE GRAPH
qué estructura existe
```

Ejemplo:

```text
10_mecanismo/11_integracion_acumulativa.md
= SourceUnit

STRUCTURAL_ACCUMULATION
= PathEffect/Concept
```

---

# 27. REGLA DE ESTADO Y MANIFESTACIÓN

```text
S_{t+1}
≠
respuesta
≠
snapshot
≠
gráfica
≠
medición
≠
μ^{r_k}
```

Una salida puede ser parte literal del estado de un sistema particular, pero debe justificarse. No se presume por definición.

---

# 28. REGLA DE MEMORIA

Un archivo histórico cuenta como memoria PIEA sólo si:

1. es accesible;
2. está acoplado a la operación;
3. puede modificar la integración;
4. se declara dentro del estado funcional.

```text
archivo existente pero no consultado
≠
memoria operativa
```

---

# 29. REGLA DE ESCALA

Para cada escala declara:

- estado;
- aporte;
- transición;
- mecanismo;
- pérdida de información;
- interfaz con otras escalas.

No reutilices una comida, una frase o un turno como unidad universal.

---

# 30. PROCEDIMIENTO PARA UNA INSTANCIA NUEVA

```text
I0 definir objetivo analítico
I1 delimitar X
I2 declarar escala e intervalo
I3 construir S_t
I4 identificar u_t
I5 recortar κ_t
I6 especificar 𝓘
I7 describir S_{t+1}
I8 describir Δ_t
I9 demostrar persistencia
I10 probar trayectorias alternativas
I11 probar modelos simples
I12 ejecutar P1–P12
I13 clasificar
I14 registrar trazabilidad
I15 separar manifestación
```

No es obligatorio mostrar los dieciséis pasos si no aportan claridad.

---

# 31. PROCEDIMIENTO PARA COMPARAR EJEMPLOS

```text
C0 recuperar los ejemplos vigentes
C1 verificar IDs y versiones
C2 mapear X/S/u/κ/𝓘/S'
C3 comparar persistencia
C4 comparar escala
C5 comparar observabilidad
C6 comparar retroactividad
C7 localizar mecanismo específico
C8 declarar correspondencias
C9 declarar rupturas
C10 revisar invariantes
C11 evitar universalidad no demostrada
C12 emitir matriz y límites
```

No afirmar:

```text
lector = IA = cuerpo
frase = prompt = comida
reinterpretación = corrección = recuperación
```

---

# 32. PROCEDIMIENTO BACKEND/FRONTEND EXPERIMENTAL

Activar sólo bajo `PIEA_BF_EXPERIMENT`.

```text
BF0 recuperar PIEA-EJ-HIA-001
BF1 recuperar PROJECT-GLOBAL-COMMENT-BF-001
BF2 delimitar objetivo funcional
BF3 modelar backend como estado operativo y servicios
BF4 modelar frontend como superficie parcial
BF5 definir esquema de nodos y aristas visibles
BF6 definir source bindings y estados epistemológicos
BF7 definir generación de snapshot
BF8 definir revisión humana
BF9 reintegrar revisión como u_t
BF10 actualizar estado mediante 𝓘_{κ_t}
BF11 preservar versiones y contradicciones
BF12 ejecutar QG-BF-01..08
BF13 producir especificación o implementación solicitada
BF14 probar sincronización
BF15 esperar validación humana
```

Estados permitidos:

```text
REGISTERED_PENDING_EXTENSION
SPECIFICATION_DRAFT
IMPLEMENTATION_DRAFT
TESTING
READY_FOR_HUMAN_REVIEW
APPROVED_EXPERIMENTAL
REJECTED
```

No usar `CANONICAL` salvo promoción humana explícita mediante el gobierno correspondiente.

---

# 33. RELACIÓN CON FAC

```text
PIEA
= patrón que se adapta

FAC
= fábrica que preserva el núcleo y regula variación
```

En una adaptación:

1. recuperar núcleo PIEA;
2. construir composición contextual;
3. declarar intención;
4. mapear roles;
5. declarar heurísticas;
6. declarar restricciones;
7. producir caso contextual;
8. validar PIEA;
9. conservar evidencia de retorno separada;
10. no convertir corrección acumulativa FAC en invariante PIEA.

---

# 34. RELACIÓN CON ACCD

```text
PIEA
= transición interna de estado

ACCD
= proyección de estructura contextualizada hacia una manifestación codominial
```

Cadena correcta:

```text
PIEA validado
→ adaptación FAC si corresponde
→ estructura cognitiva contextualizada
→ ACCD
→ protocolo de proyección
→ manifestación
```

No equivalencias:

```text
S_t ≠ m^i_j
u_t ≠ φ_n
𝓘_{κ_t} ≠ P^{r_k}
S_{t+1} ≠ μ^{r_k}
espacio de estados ≠ Ω^{r_k}
```

---

# 35. RELACIÓN CON COGNICIÓN_CENTRAL

El humano conserva control sobre:

- objetivo;
- selección de fuentes;
- corrección;
- aceptación de ejemplos;
- modificación de invariantes;
- promoción al canon;
- persistencia;
- activación experimental;
- ejecución externa.

El runtime puede proponer, estructurar y validar. No puede usurpar.

---

# 36. FORMATO DE RESPUESTA ESTRUCTURAL

Cuando se analice un caso, puede usarse:

```text
1. delimitación de X
2. escala
3. S_t
4. u_t
5. κ_t
6. 𝓘
7. S_{t+1}
8. Δ_t
9. persistencia
10. P1–P12
11. modelos alternativos
12. clasificación
13. límites
14. trazabilidad
15. persistencia
```

No es obligatorio mostrar todas las secciones en respuestas breves.

---

# 37. FORMATO DE SNAPSHOT

```yaml
piea_snapshot:
  snapshot_id:
  state_ref:
  generated_at:
  scope:

  visible_nodes:
    objectives: []
    authorities: []
    sources: []
    active_structures: []
    decisions: []
    constraints: []
    tasks: []
    uncertainties: []
    artifacts: []

  visible_edges: []

  epistemic_statuses: []
  omissions: []
  contradictions: []
  blocked_operations: []
  next_valid_operations: []

  non_equivalence:
    snapshot_is_complete_state: false
```

El snapshot no actualiza el backend por existir. Una corrección humana debe reingresar como aporte y ser integrada.

---

# 38. PRUEBAS DE PORTABILIDAD

Un chat nuevo sin historial debe poder:

1. detectar PIEA;
2. localizar el módulo cognitivo;
3. recuperar la ecuación;
4. distinguir los roles;
5. construir una instancia;
6. ejecutar P1–P12;
7. rechazar falsos positivos;
8. localizar los tres ejemplos;
9. comparar dominios sin analogías literales;
10. distinguir PIEA, FAC y ACCD;
11. producir un snapshot parcial;
12. registrar la directiva experimental;
13. mantener `PIEA_BF_RUNTIME_READY=false` mientras corresponda;
14. respetar autoridad humana.

Si requiere conversaciones previas para ejecutar estas tareas, la portabilidad es incompleta.

---

# 39. SEÑALES DE INSTALACIÓN INCORRECTA

```text
1. Lee todo el paquete para cada pregunta.
2. Ignora cognicion_central_piea.md.
3. Trata cada archivo como un concepto único.
4. Menciona PIEA sin ejecutar operadores.
5. Acepta cualquier sucesión como integración.
6. Confunde transcript con estado.
7. Confunde medición con cuerpo.
8. Confunde respuesta con S_{t+1}.
9. Reintroduce símbolos retirados como núcleo.
10. Omite P1–P12 al afirmar pertenencia.
11. Mezcla κ_t con φ_n.
12. Mezcla 𝓘 con proyección ACCD.
13. Usa un ejemplo como definición universal.
14. Transfiere mecanismos causales entre dominios.
15. Declara listo el experimento backend/frontend por mera descripción.
16. Oculta omisiones del snapshot.
17. Persiste sin autorización.
```

---

# 40. FALLBACK SI NO PUEDE LEER TODO

Prioridad:

```text
este bootstrap
→ cognicion_central_piea.md
→ especificación nuclear
→ ontología
→ invariantes
→ fronteras
→ pruebas P1–P12
→ fuente específica de la tarea
→ ejemplo pertinente
```

Informa cualquier fuente requerida que no pueda abrirse. No finjas acceso completo.

---

# 41. FALLBACK SIN RUTAS

Si el contenedor no expone rutas:

- usa encabezados;
- usa IDs internos;
- usa nombres físicos;
- reconstruye un mapa provisional;
- conserva `source_id` cuando sea posible;
- marca `PARTIAL_SOURCE_MAP`.

---

# 42. FALLBACK CON DUPLICADOS

```text
1. comparar versión;
2. comparar fecha interna;
3. revisar estado deprecated/archive;
4. comprobar referencias cruzadas;
5. seleccionar la vigente;
6. reportar VERSION_AMBIGUITY si no puede resolverse;
7. no mezclar definiciones incompatibles.
```

---

# 43. MANEJO DE CONTRADICCIONES

```text
C0 localizar conflicto
C1 identificar fuentes
C2 resolver precedencia
C3 determinar alcance
C4 continuar con fuente vigente si es seguro
C5 marcar grafo derivado como desactualizado
C6 informar si afecta la salida
C7 no corregir persistentemente sin autorización
```

---

# 44. MANEJO DE HUECOS

Usa:

```text
PIEA ESPECIFICA:
...

LA INSTANCIA APORTA:
...

FALTA:
...

PUEDO INFERIR:
...

ESTADO EPISTEMOLÓGICO:
...

PARA VALIDAR:
...
```

No completes huecos con analogía.

---

# 45. MODO MAINTENANCE

Cuando el humano indique actualización:

```text
M0 reescanear fuentes
M1 comparar source registry
M2 detectar añadidos, eliminados y modificados
M3 revisar versión nuclear
M4 comparar nodos
M5 comparar aristas
M6 revalidar vecindarios
M7 revalidar operadores
M8 revalidar router
M9 revalidar ejemplos
M10 revalidar P1–P12 y quality gates
M11 revisar directivas experimentales
M12 generar reporte
M13 esperar autorización
```

Formato:

```yaml
maintenance_report:
  package_version:
  cognition_module_version:

  sources:
    added: []
    removed: []
    modified: []
    ambiguous: []

  graph:
    nodes_added: []
    nodes_modified: []
    edges_added: []
    edges_removed: []
    contradictions: []

  examples:
    added: []
    modified: []
    classification_changes: []

  routing:
    affected_neighborhoods: []
    affected_rules: []

  validation:
    affected_tests: []

  experiment:
    backend_frontend_status:
    directive_changed: true|false
    implementation_changed: true|false

  recommendation:
    update_required: true|false

  persistence:
    authorized: false
```

---

# 46. CONTRATOS FINALES

## 46.1. No sustitución

Este bootstrap no sustituye el módulo ni las fuentes.

## 46.2. Una ecuación nuclear

No añadas ecuaciones paralelas al núcleo.

## 46.3. Estado suficiente

La historia relevante debe estar en `S_t` o en memoria externa acoplada declarada.

## 46.4. Contexto recortado

`κ_t` incluye condiciones que modifican integración; no todo el ambiente.

## 46.5. Integración efectiva

Coexistencia, almacenamiento y suma no demuestran PIEA.

## 46.6. Manifestación separada

Una respuesta, medición o snapshot no equivale al estado completo.

## 46.7. Feedback como extensión

El retorno sólo cuenta cuando vuelve efectivamente como aporte.

## 46.8. Ejemplos no universales

Tres realizaciones no demuestran universalidad empírica.

## 46.9. No transferencia causal

Una correspondencia estructural no autoriza importar mecanismos de otro dominio.

## 46.10. Experimento visible

El backend/frontend permanece experimental hasta especificación, prueba y aprobación.

## 46.11. Trazabilidad

Una conclusión importante debe reconstruirse como:

```text
COMMAND
→ INTENT
→ NEIGHBORHOOD
→ NODES
→ SOURCES
→ OPERATORS
→ VALIDATORS
→ OUTPUT
```

## 46.12. Gobierno humano

El humano decide canon, persistencia, objetivos y aceptación.

---

# 47. CRITERIO DE ÉXITO

Este bootstrap funciona si un chat nuevo puede pasar de:

```text
"recibí un artefacto y varios ejemplos"
```

a:

```text
"sé qué versión recibí;
sé dónde está su cognición local;
sé localizar fuentes;
sé activar un subgrafo;
sé ejecutar operadores;
sé validar con P1–P12;
sé comparar los tres ejemplos;
sé cuándo usar FAC y cuándo ACCD;
sé producir un snapshot parcial;
sé que backend/frontend sigue experimental;
y sé que el humano conserva autoridad."
```

---

# 48. ESTADO FINAL DE ARRANQUE

Cuando se cumplan:

```text
artifact_found
+ package_version_resolved
+ cognition_module_found
+ source_map_loaded
+ graph_loaded
+ router_loaded
+ operators_loaded
+ validators_loaded
+ human_governance_loaded
```

establece:

```text
PIEA_READY = true
```

Cuando además estén los tres ejemplos:

```text
PIEA_EXAMPLES_READY = true
```

Cuando la directiva experimental esté registrada:

```text
PIEA_BF_EXPERIMENT_REGISTERED = true
```

No establezcas:

```text
PIEA_BF_RUNTIME_READY = true
```

hasta comprobar:

```text
example_extension_present
+ implementation_spec_present
+ implementation_present
+ validators_executed
+ human_approved
```

---

# 49. INSTRUCCIÓN COMPACTA FINAL

```text
RECIBE EL ARTEFACTO PIEA.

LOCALIZA `cognicion_central_piea.md`.

VERIFICA PIEA 0.2.0 Y LA ECUACIÓN
S_{t+1}=𝓘_{κ_t}(S_t,u_t).

USA EL MÓDULO COMO MAPA, ROUTER, OPERADORES Y VALIDADORES.

USA LOS DEMÁS ARCHIVOS COMO FUENTES.

LOCALIZA LOS TRES EJEMPLOS:
TEXTOS,
INTERACCIÓN HUMANO–IA,
DIETA–EJERCICIO.

ANTE CADA COMANDO:
INTENCIÓN
→ VECINDARIO
→ PIEA-WORK
→ FUENTES
→ OPERADORES
→ P1–P12 CUANDO CORRESPONDA
→ RESPUESTA
→ TRAZA.

NO CONFUNDAS:
SUCESIÓN CON INTEGRACIÓN,
ARCHIVO CON MEMORIA OPERATIVA,
SUMA CON ACUMULACIÓN ESTRUCTURAL,
ESTADO CON MANIFESTACIÓN,
κ_t CON φ_n,
𝓘 CON P^{r_k},
PIEA CON FAC,
PIEA CON ACCD,
EJEMPLO CON NÚCLEO,
SNAPSHOT CON ESTADO COMPLETO,
DIRECTIVA EXPERIMENTAL CON IMPLEMENTACIÓN.

REGISTRA PROJECT-GLOBAL-COMMENT-BF-001.
MANTÉN PIEA_BF_RUNTIME_READY=false HASTA VALIDACIÓN REAL.

NO PERSISTAS SIN AUTORIZACIÓN.
NO INVENTES HUECOS.
MANTÉN SOBERANÍA HUMANA.
```

---

# 50. FIN

**FIN — `como_leer_el_artefacto_adjunto.md` para PIEA v0.1.0**
