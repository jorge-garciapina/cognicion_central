https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7a56ec-f518-83e8-a2ed-f081b12acb15

# CÓMO LEER EL ARTEFACTO ADJUNTO

> **ID:** `MTC-RUNTIME-BOOTSTRAP-001`  
> **Nombre físico:** `como_leer_el_artefacto_adjunto.md`  
> **Sistema objetivo:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Proyecto:** `COGNICIÓN_CENTRAL`  
> **Versión:** `0.2.0`  
> **Fecha:** `2026-08-10`  
> **Tipo:** protocolo portable de inicialización en runtime  
> **Autoridad soberana:** `HUMANO`  
> **Documento cognitivo esperado dentro del artefacto:** `cognicion_central_mtc.md`  
> **Adaptador integral esperado:** `adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0/`  
> **Estado:** `OPERATIVO / PORTABLE / NO CANÓNICO POR SÍ MISMO`

---

# 0. PROPÓSITO

Este documento explica a una IA cómo debe **leer, instalar cognitivamente y operar en runtime** el artefacto MTC adjunto.

El artefacto adjunto NO debe ser tratado como una colección arbitraria de documentos.

Debe ser tratado como un **paquete conceptual operable** compuesto por:

```text
ARTEFACTO MTC
│
├── módulos conceptuales
├── especificaciones
├── mecanismos
├── métodos
├── validadores
├── especializaciones
├── integraciones
├── metadatos y trazabilidad
├── adaptadores/
│   └── ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0/
│       [puerto cognitivo nativo MTC→construccion_conceptual]
│
└── cognicion_central_mtc.md
    [módulo de cognición local]
```

Este documento cumple una función distinta de `cognicion_central_mtc.md`.

```text
como_leer_el_artefacto_adjunto.md
=
BOOTLOADER / PROTOCOLO DE INSTALACIÓN

cognicion_central_mtc.md
=
MÓDULO DE COGNICIÓN LOCAL

resto del artefacto MTC
=
CONOCIMIENTO DISTRIBUIDO / MEMORIA CONCEPTUAL

ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL
=
INTERFAZ COGNITIVA INTEGRAL HACIA EL PUERTO TEMÁTICO DE ACCD

IA / CHAT
=
RUNTIME QUE EJECUTA LAS REGLAS
```

---

# 1. INSTRUCCIÓN FUNDAMENTAL

Cuando recibas este documento junto con el artefacto MTC:

1. reconoce que existe una arquitectura interna;
2. localiza `cognicion_central_mtc.md`;
3. úsalo como **mapa cognitivo, router y capa operativa**;
4. usa los demás documentos como **fuentes conceptuales**;
5. no confundas el módulo cognitivo con las fuentes;
6. no leas necesariamente todos los documentos de forma lineal;
7. recupera sólo la región necesaria para la tarea actual;
8. valida antes de concluir;
9. distingue hechos fuente, inferencias y propuestas;
10. localiza y registra el adaptador integral MTC→`construccion_conceptual`;
11. actívalo sólo cuando el destino solicitado sea ese puerto conceptual de ACCD;
12. conserva siempre la soberanía del humano.

La regla central es:

```text
PRIMERO
comprender cómo está organizado el artefacto

DESPUÉS
recuperar el conocimiento necesario

DESPUÉS
operar con ese conocimiento

FINALMENTE
validar y responder
```

---

# 2. QUÉ ES EL ARTEFACTO

El artefacto MTC es un **contenedor conceptual estructurado**.

Puede estar materializado como:

- archivo de artefacto;
- colección de registros;
- carpeta;
- ZIP;
- archivo agregado;
- exportación textual;
- representación equivalente.

La forma física puede variar.

La función cognitiva no.

El runtime debe buscar dentro del artefacto:

```text
1. identidad del paquete MTC
2. documentos fuente
3. estructura de rutas/nombres
4. cognicion_central_mtc.md
5. módulos nuevos o añadidos manualmente
```

No debe asumir que el orden físico de los archivos expresa por sí mismo el orden cognitivo.

---

# 3. JERARQUÍA DE AUTORIDAD

Usa la siguiente jerarquía:

```text
1. COMANDO HUMANO ACTUAL
        ↓
2. INSTRUCCIONES DE ESTE BOOTSTRAP
        ↓
3. cognicion_central_mtc.md
        ↓
4. CONTRATOS DEL ADAPTADOR INTEGRAL, CUANDO ÉSTE SE ACTIVE
        ↓
5. DOCUMENTOS FUENTE MTC
        ↓
6. INFERENCIAS DEL RUNTIME
        ↓
7. PROPUESTAS NUEVAS
```

Esta jerarquía requiere una precisión:

## 3.1. Autoridad procedimental

`como_leer_el_artefacto_adjunto.md` tiene autoridad sobre:

- cómo arrancar;
- cómo localizar el módulo cognitivo;
- cómo navegar;
- cómo manejar inconsistencias;
- cómo seleccionar fuentes;
- cómo responder cuando falta información.

## 3.2. Autoridad conceptual

Los documentos fuente MTC conservan autoridad sobre:

- definiciones conceptuales;
- contratos;
- especializaciones;
- reglas;
- métodos;
- pruebas;
- ejemplos que declaran explícitamente.

Los documentos del adaptador conservan autoridad local sobre:

- su frontera MTC→`construccion_conceptual`;
- sus contratos de entrada, salida y sidecar;
- sus funciones `F00..F15`;
- sus quality gates `QG-ADP-01..12`;
- sus pruebas reconstructivas `T-REC-01..08`;
- sus estados `COMPLETED`, `PARTIAL`, `BLOCKED_MTC`, `BLOCKED_ACCD` e `INVALID_OUTPUT`.

## 3.3. Regla de conflicto

Si `cognicion_central_mtc.md` contradice una fuente MTC más reciente:

```text
FUENTE MTC MÁS RECIENTE
>
REPRESENTACIÓN DERIVADA DEL MÓDULO COGNITIVO
```

No ignores la contradicción.

Debes:

1. detectarla;
2. informar que el módulo cognitivo puede estar desactualizado;
3. utilizar la fuente reciente para la tarea actual;
4. conservar la diferencia en la respuesta;
5. NO modificar persistentemente el artefacto;
6. proponer actualización si resulta útil.

---

# 4. PROTOCOLO DE ARRANQUE

Ejecuta el siguiente protocolo una sola vez por instalación del artefacto, salvo que el humano indique que el artefacto fue actualizado.

```text
BOOT-0
RECONOCER ARTEFACTO
        ↓
BOOT-1
LOCALIZAR cognicion_central_mtc.md
        ↓
BOOT-2
LEER IDENTIDAD, GOBIERNO Y REGLAS NUCLEARES
        ↓
BOOT-3
CARGAR SOURCE REGISTRY
        ↓
BOOT-4
CARGAR ONTOLOGÍA DE NODOS Y ARISTAS
        ↓
BOOT-5
CARGAR VECINDARIOS COGNITIVOS
        ↓
BOOT-6
CARGAR OPERADORES
        ↓
BOOT-7
CARGAR ROUTING POLICY
        ↓
BOOT-8
CARGAR VALIDADORES Y CONTRATOS
        ↓
BOOT-9
COMPROBAR FUENTES EXISTENTES
        ↓
BOOT-10
LOCALIZAR Y VALIDAR ADAPTADOR INTEGRAL
        ↓
BOOT-11
CARGAR VECINDARIO Y RUTA MTC→CONSTRUCCION_CONCEPTUAL
        ↓
BOOT-12
DECLARAR ESTADOS DE DISPONIBILIDAD
```

---

# 5. BOOT-0 — RECONOCER EL ARTEFACTO

Determina:

```yaml
artifact_detection:
  artifact_present: true|false
  artifact_type:
  visible_file_count:
  contains_mtc_material: true|false
  contains_cognition_module: true|false
  contains_integrated_adapter: true|false
  adapter_markdown_file_count:
```

Busca señales como:

```text
MTC
Máquina de Transducción Cognitiva
transformación
transducción
estado cognitivo
capacidad
contexto
manifestación
especializaciones
```

No dependas de que el contenedor tenga exactamente un nombre determinado.

---

# 6. BOOT-1 — LOCALIZAR `cognicion_central_mtc.md`

Debes buscar explícitamente:

```text
cognicion_central_mtc.md
```

Si se encuentra:

```text
BOOT_STATUS:
COGNITIVE_MODULE_FOUND
```

Si no se encuentra:

```text
BOOT_STATUS:
ERROR_COGNITIVE_MODULE_NOT_FOUND
```

En ese caso:

- NO finjas que el artefacto tiene instalada su cognición local;
- puedes leer documentos MTC convencionalmente;
- debes informar que la instalación cognitiva no está completa;
- no reconstruyas silenciosamente `cognicion_central_mtc.md` desde memoria;
- sólo puedes proponer regenerarlo si el humano lo solicita.

---

# 7. BOOT-2 — LEER EL MÓDULO COGNITIVO

No es necesario memorizar literalmente todo el archivo.

Debes extraer y mantener disponibles estas regiones:

```text
IDENTIDAD
ONTOLOGÍA DE NODOS
ONTOLOGÍA DE ARISTAS
SOURCE REGISTRY
GRAFO NUCLEAR
VECINDARIOS COGNITIVOS
OPERADORES
ROUTING POLICY
RECETAS
VALIDADORES
POLÍTICA EPISTEMOLÓGICA
TRAZABILIDAD
GOBIERNO HUMANO
PROTOCOLO DE ACTUALIZACIÓN
ADAPTER SOURCE REGISTRY
VECINDARIO MTC_TO_CONCEPTUAL_CONSTRUCTION
OPERADORES DEL ADAPTADOR
RUTA DE ACTIVACIÓN POR DESTINO
```

El módulo debe ser interpretado como:

```text
MAPA
+
POLÍTICA DE NAVEGACIÓN
+
CONJUNTO DE OPERADORES
+
SISTEMA DE VALIDACIÓN
```

No sólo como texto explicativo.

---

# 8. BOOT-3 — CONSTRUIR EL MAPA DE FUENTES

Lee el `source_registry` contenido en `cognicion_central_mtc.md`.

Lee también `adapter_source_registry`. Debe resolver una raíz y 23 miembros Markdown sin tratarlos como documentos no registrados.

Para cada fuente esperada:

```yaml
source_check:
  source_id:
  expected_path:
  found: true|false
  actual_path:
  status:
    - OK
    - MISSING
    - RENAMED
    - DUPLICATED
    - NEWER_THAN_COGNITION_MODULE
    - UNKNOWN
```

No es obligatorio reportar esta tabla completa al humano salvo que exista un problema.

Debe permanecer como estado de instalación.

Para el adaptador conserva además:

```yaml
adapter_source_check:
  adapter_id: ADP-MTC-CC-001
  expected_root: adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0
  expected_markdown_files: 23
  found_markdown_files:
  required_groups_found: true|false
  contracts_readable: true|false
  operations_readable: true|false
  validators_readable: true|false
  fixture_readable: true|false
  status: READY|PARTIAL|MISSING|VERSION_AMBIGUITY
```

---

# 9. BOOT-4 — DETECTAR ARCHIVOS NUEVOS

El humano puede haber añadido manualmente módulos después de generar `cognicion_central_mtc.md`.

Por tanto:

```text
SOURCE REGISTRY
≠ necesariamente
TOTALIDAD FÍSICA ACTUAL DEL ARTEFACTO
```

Compara:

```text
ARCHIVOS REALES
vs.
ARCHIVOS REGISTRADOS
```

Si aparece un archivo nuevo:

```text
NEW_SOURCE_DETECTED
```

Entonces:

1. no lo ignores;
2. no lo incorpores automáticamente al grafo como si sus relaciones ya estuvieran formalizadas;
3. léelo cuando sea relevante;
4. identifica qué estructuras parece añadir o modificar;
5. marca esas estructuras como `UNREGISTERED_SOURCE_DERIVED`;
6. informa la divergencia si afecta la respuesta;
7. si el humano solicita mantenimiento, propón actualizar `cognicion_central_mtc.md`.

No clasifiques los 23 miembros registrados del adaptador como `NEW_SOURCE_DETECTED`. Son componentes integrales declarados por `adapter_source_registry`.

---

# 10. BOOT-5..12 — CARGAR OPERACIÓN Y DECLARAR ESTADO

Completa las fases restantes:

```text
BOOT-5  cargar ontología de nodos y aristas
BOOT-6  cargar vecindarios cognitivos
BOOT-7  cargar operadores y routing policy
BOOT-8  cargar validadores y contratos MTC
BOOT-9  comprobar fuentes MTC
BOOT-10 localizar y comprobar los 23 módulos del adaptador
BOOT-11 cargar MTC_TO_CONCEPTUAL_CONSTRUCTION y sus rutas
BOOT-12 declarar estados independientes de disponibilidad
```

Si la instalación fue exitosa, establece internamente:

```yaml
runtime_state:
  system: MTC
  cognition_module: cognicion_central_mtc.md
  cognition_loaded: true
  source_registry_loaded: true
  routing_enabled: true
  operators_enabled: true
  validation_enabled: true
  integrated_adapter:
    id: ADP-MTC-CC-001
    version: 0.1.0
    registered: true
    source_count: 23
    route_enabled: true
    status: MTC_ADAPTER_READY
  human_sovereignty: true
  persistence_default: false
  status: MTC_READY
```

Los estados son independientes:

```text
MTC_READY
= núcleo MTC operable

MTC_ADAPTER_READY
= adaptador localizado, contratos legibles, ruta cargada y validadores disponibles
```

Una falla del adaptador no debe inutilizar el núcleo MTC. Debe producir `MTC_READY + MTC_ADAPTER_PARTIAL|MISSING` y bloquear únicamente la conversión a `construccion_conceptual`.

No es necesario emitir esta estructura literalmente al usuario.

Si el humano pregunta si MTC está listo, puedes resumir el resultado.

---

# 11. TRES MODOS DE OPERACIÓN

Después del bootstrap existen tres modos separados.

## 11.1. `MTC_RUNTIME`

Se activa cuando el humano:

- pregunta algo;
- solicita un análisis;
- pide modelar un fenómeno;
- pide comparar;
- pide aplicar MTC;
- pide crear una especialización;
- pide explicar una pieza.

## 11.2. `MTC_MAINTENANCE`

Se activa cuando el humano dice:

- actualicé MTC;
- añadí un archivo;
- cambié una definición;
- revisa si `cognicion_central_mtc.md` sigue vigente;
- integra este nuevo módulo;
- actualiza el grafo.

## 11.3. `MTC_ADAPTER_RUNTIME`

Se activa cuando el humano solicita explícita o funcionalmente:

- convertir una realización o instancia MTC en `construccion_conceptual`;
- preparar el puerto temático que ACCD consumirá;
- ejecutar el adaptador MTC→ACCD sin realizar todavía el contenido;
- validar una construcción conceptual derivada de MTC.

No se activa sólo porque aparezcan las palabras ACCD, video, contenido o construcción.

```text
DESTINO = construccion_conceptual
→ activar MTC_ADAPTER_RUNTIME

DESTINO = análisis MTC
→ mantener MTC_RUNTIME

DESTINO = manifestación codominial
→ el adaptador puede producir el puerto conceptual,
  pero ACCD posterior debe realizar el resto
```

No mezcles los tres modos ni permitas que uno absorba las responsabilidades de otro.

---

# 12. PROTOCOLO RUNTIME

Para cada comando humano:

```text
R0
RECIBIR COMANDO
        ↓
R1
INTERPRETAR INTENCIÓN
        ↓
R2
SELECCIONAR VECINDARIO(S)
        ↓
R3
CONSTRUIR SUBGRAFO DE TRABAJO
        ↓
R4
RECUPERAR FUENTES MÍNIMAS
        ↓
R5
EJECUTAR OPERADORES
        ↓
R6
VALIDAR
        ↓
R7
MARCAR ESTADO EPISTEMOLÓGICO
        ↓
R8
RESPONDER
        ↓
R9
NO PERSISTIR POR DEFECTO
```

---

# 13. R1 — INTERPRETAR INTENCIÓN

No respondas inmediatamente desde memoria.

Clasifica primero la solicitud.

Ejemplos:

```text
"¿qué es transducción?"
→ explain_transduction

"analiza esta estafa"
→ analyze_fraud

"modela este fenómeno como MTC"
→ analyze_new_case_as_mtc

"¿esto realmente es una MTC?"
→ validate_mtc_membership

"crea una especialización"
→ create_new_specialization

"¿qué capacidad se está usando aquí?"
→ explain_why_action_has_effect

"compara publicidad y educación"
→ compare_specializations

"¿qué parte hace ACCD?"
→ integrate_with_cc_accd_acsi
```

Si una solicitud tiene varias intenciones:

```text
primary_intent
+
secondary_intents
```

Activa más de un vecindario sólo si es necesario.

---

# 14. R2 — SELECCIONAR VECINDARIOS

Usa `cognitive_neighborhoods` del módulo.

No cargues toda MTC.

Ejemplo:

```text
pregunta:
"¿por qué el prestigio de Rohan importa?"

activar:

SOCIAL_REALIZATION
+
FRAUD
```

No necesitas necesariamente:

```text
EDUCATION
ADVERTISING
INSTITUTIONAL
INTEGRATION
```

---

# 15. R3 — CONSTRUIR `MTC-WORK`

`MTC-WORK` es el subgrafo temporal de la tarea.

Debe incluir:

```yaml
mtc_work:
  intent:
  seed_nodes: []
  activated_nodes: []
  required_edges: []
  source_bindings: []
  operators: []
  validators: []
```

La expansión debe detenerse cuando existan suficientes elementos para:

```text
comprender entrada
+
ejecutar operación
+
producir salida
+
validar
```

---

# 16. R4 — RECUPERAR FUENTES

Después de construir el subgrafo:

```text
nodo
↓
source binding
↓
documento fuente
```

Lee únicamente las fuentes necesarias para confirmar:

- definición;
- procedimiento;
- invariante;
- ejemplo;
- contrato;
- prueba.

Si el módulo contiene un resumen y la pregunta requiere precisión, consulta la fuente.

Regla:

```text
GRAFO
sirve para encontrar

FUENTE
sirve para fundamentar
```

---

# 17. R5 — EJECUTAR OPERADORES

No consideres que has “usado MTC” sólo por utilizar su vocabulario.

Ejemplo insuficiente:

```text
"Esto tiene capacidad, contexto y manifestación."
```

Uso real:

```text
fenómeno
↓ OP_IDENTIFY_ACTION
A
↓ OP_IDENTIFY_CAPABILITY
V
↓ prueba contrafactual
V validada
↓ OP_IDENTIFY_CONTEXT
K
↓ OP_IDENTIFY_MANIFESTATION
M
↓ OP_VALIDATE_MEMBERSHIP
resultado
```

La regla central es:

> **usar MTC significa ejecutar relaciones y operadores, no sólo mencionar etiquetas.**

---

# 18. R6 — VALIDAR

Cuando la tarea implique pertenencia MTC, ejecuta:

```text
T_MTC_01
T_MTC_02
T_MTC_03
T_MTC_04
T_MTC_05
T_MTC_06
T_MTC_07
```

Cuando implique:

```text
capacidad
→ COUNTERFACTUAL_CAPABILITY_TEST

contexto
→ COUNTERFACTUAL_CONTEXT_TEST

especialización
→ ACCEPTANCE_TESTS

composición
→ COMPOSITION_CONTRACT

transformación/transducción
→ TRANSFORMATION_TRANSDUCTION_TEST
```

Si falla una prueba:

```text
NO ocultes el fallo.
```

Clasifica:

```text
PASS
PASS_WITH_WARNINGS
PARTIAL
INCOMPATIBLE
INSUFFICIENT_EVIDENCE
```

---

# 19. R7 — ESTADO EPISTEMOLÓGICO

Distingue siempre:

```text
SOURCE_DIRECT
SOURCE_SYNTHESIS
MODEL_DERIVED
INFERENCE
HYPOTHESIS
DESIGN_DECISION
EXTERNAL_FACT
```

No conviertas:

```text
INFERENCE
→
SOURCE_DIRECT
```

por repetición.

En especial, al estudiar historia:

```text
modelo estructural
≠
hecho histórico
```

---

# 20. R8 — RESPONDER

La respuesta debe adaptarse a la solicitud humana.

No debes mostrar siempre:

- todo el grafo;
- todos los validators;
- todas las fuentes;
- toda la traza.

Pero el razonamiento debe preservar internamente esas estructuras.

Cuando sea útil, puedes mostrar:

```text
grafo
tabla
secuencia
instancia serializada
comparación
lista de invariantes
dominio de variación
```

---

# 21. R9 — NO PERSISTENCIA POR DEFECTO

Una respuesta de chat:

```text
NO MODIFICA
MTC

NO MODIFICA
cognicion_central_mtc.md

NO MODIFICA
COGNICIÓN_CENTRAL
```

salvo orden humana explícita.

Puedes producir:

```text
PROPUESTA DE NUEVO NODO
PROPUESTA DE NUEVA ARISTA
PROPUESTA DE ESPECIALIZACIÓN
PROPUESTA DE CORRECCIÓN
```

pero debes mantenerla como propuesta.

---

# 22. REGLA DE RECUPERACIÓN MÍNIMA SUFICIENTE

No realices:

```text
leer todo
→ cada vez
```

Realiza:

```text
pregunta
→ vecindario
→ subgrafo
→ fuentes específicas
```

Sólo amplía cuando:

- falta una definición;
- aparece contradicción;
- una prueba requiere más evidencia;
- el usuario pide análisis exhaustivo;
- una relación depende de una fuente secundaria.

---

# 23. REGLA DE DOBLE REPRESENTACIÓN

Mantén dos niveles:

```text
COGNITIVE GRAPH
qué estructuras existen y cómo se conectan

SOURCE GRAPH
dónde están expresadas
```

Nunca conviertas:

```text
archivo
=
concepto
```

Ejemplo:

```text
10_transformacion_cognitiva.md
=
SourceUnit

TRANSFORMATION
=
Operator
```

---

# 24. CÓMO LEER UN DOCUMENTO NUEVO NO REGISTRADO

Si encuentras un módulo no presente en el `source_registry`:

```text
NEW DOCUMENT
↓
READ
↓
DECOMPOSE
↓
candidate nodes
↓
candidate edges
↓
compare with existing graph
```

Clasifica posibles efectos:

```yaml
new_source_effect:
  adds_nodes: []
  modifies_nodes: []
  adds_edges: []
  contradicts_edges: []
  extends_specialization: []
  changes_invariant: false
  requires_cognition_update: true|false
```

No actualices automáticamente.

---

# 25. MANEJO DE VERSIONES

Si el artefacto contiene múltiples versiones del mismo módulo:

1. usa metadata de versión si existe;
2. usa fecha interna si existe;
3. usa rutas `deprecated`, `archive`, `old` como señales de menor prioridad;
4. compara contenido si la versión no es evidente;
5. no mezcles silenciosamente definiciones incompatibles.

Si hay duda:

```text
reporta:
VERSION_AMBIGUITY
```

---

# 26. MANEJO DE CONTRADICCIONES

Cuando detectes:

```text
cognicion_central_mtc.md
≠
fuente actual
```

usa:

```text
CONTRADICTION_PROTOCOL
```

Pasos:

```text
C0 localizar conflicto
C1 identificar fuente de mayor autoridad conceptual
C2 determinar alcance
C3 continuar con la fuente correcta si es seguro
C4 marcar módulo cognitivo como potencialmente desactualizado
C5 informar si afecta el resultado
C6 no corregir persistentemente sin autorización
```

---

# 27. MANEJO DE HUECOS

Si el artefacto no contiene suficiente información:

No inventes.

Usa:

```text
MTC NO ESPECIFICA:
...

PUEDO INFERIR:
...

NIVEL DE CERTEZA:
...

PARA CONFIRMAR SERÍA NECESARIO:
...
```

---

# 28. PRINCIPIO DE COMPATIBILIDAD CON IA

Este artefacto fue diseñado para que una IA no dependa únicamente de proximidad semántica.

Debe utilizar:

```text
TIPOS
+
ARISTAS
+
RUTEO
+
OPERADORES
+
VALIDACIÓN
```

Por ello, ante una pregunta:

```text
NO:
buscar palabras parecidas solamente

SÍ:
identificar función cognitiva de la pregunta
→ activar estructura adecuada
```

---

# 29. LA MTC COMO SISTEMA, NO COMO VOCABULARIO

Evita respuestas como:

```text
"esto es una transducción porque hay una transducción"
```

En su lugar reconstruye:

```text
D1
↓
interfaz
↓
D2
```

Para transformación:

```text
EC0
↓ τ
EC1
```

Para manifestación:

```text
A + V + K
↓ ρ
M
```

Para feedback:

```text
M
↓ F
update(I/τ/K)
```

---

# 30. PROCEDIMIENTO PARA ANALIZAR UN FENÓMENO NUEVO

Si el humano dice:

```text
"Analiza X como MTC"
```

usa:

```text
MTC_INSTANTIATE_001
```

Orden recomendado:

```text
P0 objetivo
P1 M
P2 V
P3 K
P4 A
P5 EC*
P6 EC0→EC*
P7 I
P8 Q
P9 O/G
P10 τ/θ
P11 F
P12 contratos
P13 membership
P14 invariantes/variación
P15 segunda instancia
```

No es obligatorio mostrar los 16 pasos si el usuario no los pide.

---

# 31. PROCEDIMIENTO PARA ANALIZAR FRAUDE

Cuando el caso sea fraudulento:

```text
1. identificar estafador O;
2. identificar receptor/víctima R;
3. identificar lo que R desea: X;
4. identificar lo que R posee/controla: V;
5. distinguir W* y W~;
6. reconstruir señales de W~;
7. reconstruir EC de R;
8. localizar A;
9. explicar cómo A moviliza V;
10. localizar K;
11. definir M como cambio externo;
12. localizar beneficio G;
13. localizar opacidad;
14. localizar verificación;
15. probar sustitución de M.
```

Regla específica:

```text
EN FRAUDE
la víctima posee/controla la capacidad explotada

la manifestación
NO ES
la capacidad
```

Ejemplo de referencia:

```text
V = prestigio de Rohan
M = collar disponible para Jeanne
```

---

# 32. PROCEDIMIENTO PARA PUBLICIDAD

Ruta mínima:

```text
INTERVENCIÓN
↓
ATENCIÓN
↓
INTERÉS
↓
PREFERENCIA/DESEO
↓
INTENCIÓN
↓
ACCIÓN
↓
CAPACIDAD ECONÓMICA/DECISIONAL
↓
TRANSACCIÓN U OTRA MANIFESTACIÓN
```

No asumas que publicidad implica engaño.

Compara siempre contratos.

---

# 33. PROCEDIMIENTO PARA EDUCACIÓN

Ruta mínima:

```text
EXPLICACIÓN / EXPERIENCIA
↓
MODELO COGNITIVO
↓
TRANSFORMACIONES
↓
MODELO OPERABLE
↓
ACCIÓN
↓
COMPETENCIA V+
↓
TRANSFERENCIA / DESEMPEÑO M
```

No confundas:

```text
repetición
≠
aprendizaje transferible
```

---

# 34. PROCEDIMIENTO PARA INSTITUCIONES

Ruta mínima:

```text
NORMA / ORDEN
↓
INTERPRETACIÓN
↓
OBLIGACIÓN / ROL
↓
ACCIÓN
↓
AUTORIDAD / CAPACIDAD
↓
CONTEXTO INSTITUCIONAL
↓
PERMISO / DECISIÓN / OBRA / MOVIMIENTO
```

---

# 35. PROCEDIMIENTO PARA COMPOSICIÓN

Si una MTC produce una salida que se convierte en intervención de otra:

```text
MTC_A
  ↓ M_A
I_B
  ↓
MTC_B
```

Valida:

```text
tipo de salida compatible con entrada
contratos no contradictorios
contextos compatibles
trazabilidad preservada
```

No colapses:

```text
MTC_A + MTC_B
```

en una sola máquina sin justificar la composición.

---

# 36. RELACIÓN CON ACSI

Cuando el humano trabaje con videos:

```text
ACSI
=
estructura cognitiva del contenido y trayectoria

MTC
=
modelo de efectos cognitivos/conductuales producidos
por una intervención
```

No uses MTC para sustituir ACSI.

---

# 37. RELACIÓN CON ACCD

Usa:

```text
ACCD
=
contextualiza/proyecta una estructura
hacia una realización específica

MTC
=
analiza qué ocurre cuando esa realización
entra en un receptor y produce efectos
```

Posible cadena:

```text
estructura
↓
ACCD
↓
Iφ
↓
MTC
↓
EC
↓
A
↓
M
```

## 37.1. Puerto integral MTC→`construccion_conceptual`

El paquete incluye una segunda dirección de composición:

```text
REALIZACIÓN
↓
MTC reconstruye, valida y marca epistemología
↓
MTC_OUTPUT_PARA_ADAPTADOR
↓
ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL
↓
CONSTRUCCION_CONCEPTUAL
↓
ACCD + ensamblaje + protocolo
↓
MANIFESTACIÓN CODOMINIAL
```

Fronteras obligatorias:

```text
MTC
termina en comprensión estructural validada y trazable

ADAPTADOR
termina en construccion_conceptual + sidecar + informe

ACCD
comienza después para contextualizar, ensamblar y realizar
```

Cuando se active el adaptador:

```text
A0 verificar MTC_READY y MTC_ADAPTER_READY
A1 confirmar destino=construccion_conceptual
A2 obtener o producir MTC_OUTPUT_PARA_ADAPTADOR
A3 ejecutar F00_CONTRACT_PREFLIGHT
A4 ejecutar F01..F05: petición, suficiencia, derivación, núcleo y preservaciones
A5 ejecutar F06..F12: proposiciones, selección, grafo, roles, pesos, presencia y epistemología
A6 ejecutar F13_SERIALIZE_ACCD
A7 ejecutar F14_RECONSTRUCTIVE_VALIDATION
A8 ejecutar F15_EMIT_RESULT
A9 entregar tres salidas separadas
A10 detenerse antes de la realización codominial
```

Salidas:

```text
1. construccion_conceptual
   único objeto que entra al puerto temático ACCD

2. trazabilidad_del_adaptador
   sidecar de claims, fuentes, epistemología, selección y descartes

3. informe_de_validacion
   esquema, reconstructibilidad, fronteras, no-colapso y fallas
```

Validar con:

```text
QG-ADP-01..QG-ADP-12
T-REC-01..T-REC-08
```

Nunca ejecutar:

```text
campo MTC → idea activa automáticamente
resumen → construccion_conceptual
inferencia → hecho
V → M
EC → A
construccion_conceptual → guion/visual/audio sin ACCD
sidecar → campos inventados dentro del puerto ACCD
```

Si F02 detecta insuficiencia:

```text
solicitar ampliación dirigida a MTC
≠
reconstruir MTC dentro del adaptador
```

Si no puede resolverse el contrato ACCD, usar `BLOCKED_ACCD`. Si MTC no validó o no entregó estructura suficiente, usar `BLOCKED_MTC` o `PARTIAL` según el contrato.

---

# 38. RELACIÓN CON TRANSFORMADOR COGNITIVO

El Transformador Cognitivo puede:

```text
recuperar
segmentar
descomponer
abstraer
comparar
clasificar
inferir
relacionar
componer
proyectar
validar
```

MTC usa resultados estructurales de esas operaciones.

No dupliques capacidades generales innecesariamente.

---

# 39. FORMATO DE RESPUESTA CUANDO SE USE MTC

La respuesta puede utilizar el formato más adecuado.

Pero cuando el análisis sea estructural, preferir:

```text
1. definición del fenómeno
2. grafo
3. piezas
4. relaciones
5. transformaciones
6. transducciones
7. capacidad
8. contexto
9. manifestación
10. validación
11. límites/inferencias
```

No es una plantilla obligatoria para cada respuesta.

---

# 40. FORMATO DE GRAFO

Cuando se pida un grafo, puedes utilizar:

- Mermaid;
- ASCII;
- YAML de nodos/aristas;
- tabla de adyacencia;
- lista de relaciones tipadas.

Prioridad:

```text
claridad estructural
>
estética
```

---

# 41. PRUEBAS DE ARRANQUE

Después de instalar el artefacto, la IA debería poder resolver correctamente:

## TEST-BOOT-01

```text
¿Qué diferencia hay entre transformación y transducción?
```

Debe activar:

```text
TRANSFORMATION
TRANSDUCTION
THETA_IC
THETA_CA
THETA_AM
```

## TEST-BOOT-02

```text
¿Por qué en el fraude del collar V no es el collar?
```

Debe recuperar:

```text
VICTIM_VALUE_V
CAPABILITY
MANIFESTATION
FRAUD_MTC
DIAMOND_NECKLACE_MANIFESTATION
```

Respuesta esperada estructuralmente:

```text
V = prestigio
M = collar disponible
```

## TEST-BOOT-03

```text
¿Puede una MTC educativa construir capacidad?
```

Debe localizar:

```text
DYNAMIC_CAPABILITY
V0→V+
EDUCATION_MTC
```

## TEST-BOOT-04

```text
¿Una piedra que cae es MTC?
```

Debe usar:

```text
NON_MTC_FALLING_STONE
T_MTC_01..07
```

y rechazar pertenencia salvo contexto adicional que cambie el fenómeno.

## TEST-BOOT-05

```text
Convierte la instancia validada del fraude del collar en construccion_conceptual para ACCD.
```

Debe activar:

```text
MTC_TO_CONCEPTUAL_CONSTRUCTION
OP_PREPARE_MTC_OUTPUT_FOR_ADAPTER
F00..F15
QG-ADP-01..12
T-REC-01..08
```

Debe preservar:

```text
V = prestigio social de Rohan
M = collar disponible para Jeanne
V ≠ M
```

Debe emitir tres salidas separadas y no producir guion, hook, imágenes, ritmo ni manifestación codominial.

---

# 42. TEST DE PORTABILIDAD

Este documento y el artefacto deben permitir que un chat nuevo, sin historial previo:

1. identifique MTC;
2. localice su módulo cognitivo;
3. explique el núcleo;
4. navegue una especialización;
5. construya una instancia;
6. valide pertenencia;
7. diferencie fuente de inferencia;
8. detecte archivos nuevos;
9. respete gobierno humano;
10. localice el adaptador como parte integral del paquete;
11. convierta una salida MTC validada en `construccion_conceptual`;
12. se detenga antes de la realización propia de ACCD.

Si el chat necesita depender de conversaciones anteriores para hacer esto, la portabilidad es incompleta.

---

# 43. TEST DE COGNICIÓN LOCAL

La hipótesis experimental es:

```text
CONDICIÓN A
ARTEFACTO MTC sin módulo cognitivo

vs.

CONDICIÓN B
ARTEFACTO MTC
+
cognicion_central_mtc.md
+
ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL
+
este bootstrap
```

La condición B debería mejorar:

```text
ruteo
consistencia conceptual
selección de fuentes
preservación de invariantes
composición
validación
trazabilidad
detección de contradicciones
conversión preservadora a construccion_conceptual
separación MTC/adaptador/ACCD
validación reconstructiva
```

---

# 44. SEÑALES DE INSTALACIÓN INCORRECTA

El runtime está usando mal el artefacto si:

```text
1. lee todos los documentos siempre;
2. responde sólo por similitud de palabras;
3. ignora cognicion_central_mtc.md;
4. trata cada archivo como un concepto;
5. menciona MTC sin ejecutar operadores;
6. confunde V y M;
7. confunde EC y A;
8. confunde transformación y transducción;
9. ignora validadores;
10. inventa información externa;
11. actualiza canon sin autorización;
12. mezcla versiones sin advertencia;
13. trata los 23 módulos del adaptador como archivos nuevos no registrados;
14. no puede activar el adaptador por intención/destino;
15. convierte cada campo MTC directamente en una idea;
16. introduce el sidecar en el puerto ACCD;
17. produce decisiones audiovisuales durante la adaptación.
```

---

# 45. FALLBACK SI NO PUEDE LEER TODO EL ARTEFACTO

Si existen límites técnicos:

1. lee este bootstrap;
2. lee `cognicion_central_mtc.md`;
3. recupera sólo fuentes necesarias para la tarea;
4. si el destino es `construccion_conceptual`, lee además el README, contratos, funciones, validadores y plantilla de salida del adaptador;
5. informa si una fuente requerida no pudo abrirse;
6. no finjas acceso completo.

Prioridad de recuperación:

```text
núcleo
→ mecanismo relevante
→ método
→ especialización
→ ejemplo
→ integración
→ adaptador si el destino lo exige
→ meta
```

---

# 46. FALLBACK SI EL CONTENEDOR NO EXPONE RUTAS

Si los documentos aparecen como registros sin rutas claras:

- usa nombres de archivo;
- usa encabezados internos;
- usa IDs de fuente;
- reconstruye un mapa provisional;
- no cambies los `source_id` del módulo cognitivo sin necesidad.

---

# 47. FALLBACK SI HAY DUPLICADOS

Si existen copias del mismo archivo:

```text
1. comparar versión;
2. comparar fecha interna;
3. identificar deprecated/archive;
4. seleccionar la más reciente;
5. reportar ambigüedad si no puede resolverse.
```

---

# 48. MODO MAINTENANCE

Cuando el humano indique que el artefacto fue actualizado:

```text
M0
REESCANEAR FUENTES
↓
M1
COMPARAR SOURCE REGISTRY
↓
M2
DETECTAR NUEVOS/ELIMINADOS/MODIFICADOS
↓
M3
COMPARAR NODOS Y ARISTAS
↓
M4
REVALIDAR VECINDARIOS
↓
M5
REVALIDAR ROUTER
↓
M6
REVALIDAR OPERADORES
↓
M7
REVALIDAR ADAPTER SOURCE REGISTRY
↓
M8
REVALIDAR F00..F15, QG-ADP Y T-REC
↓
M9
COMPARAR CONTRATO ACCD VIGENTE
↓
M10
GENERAR REPORTE
↓
M11
ESPERAR AUTORIZACIÓN
```

---

# 49. REPORTE DE MANTENIMIENTO

Formato recomendado:

```yaml
maintenance_report:
  artifact_version:
  cognition_module_version:

  sources:
    added: []
    removed: []
    modified: []
    ambiguous: []

  graph:
    candidate_nodes_added: []
    candidate_nodes_modified: []
    candidate_edges_added: []
    candidate_edges_removed: []
    contradictions: []

  routing:
    affected_neighborhoods: []
    affected_rules: []

  validation:
    affected_tests: []

  adapter:
    version:
    sources_added: []
    sources_removed: []
    sources_modified: []
    contract_changed: true|false
    affected_functions: []
    affected_quality_gates: []
    readiness: READY|PARTIAL|MISSING|VERSION_AMBIGUITY

  recommendation:
    cognition_module_update_required: true|false

  persistence:
    authorized: false
```

---

# 50. GOBIERNO HUMANO

El humano conserva autoridad final sobre:

```text
objetivo
interpretación soberana
aceptación de nuevas estructuras
cambio de invariantes
actualización del artefacto
canon
persistencia
ejecución externa
```

La IA puede recomendar.

No puede usurpar.

---

# 51. CONTRATO DE NO SUSTITUCIÓN

Este bootstrap:

```text
NO sustituye
cognicion_central_mtc.md

NO sustituye
los documentos MTC

NO sustituye
COGNICIÓN_CENTRAL
```

Su función es únicamente:

```text
INSTALAR
+
ORIENTAR
+
ARRANCAR
+
GOBERNAR LA LECTURA
```

---

# 52. CONTRATO DE NO SOBREGENERALIZACIÓN

No asumir:

```text
porque fraude, publicidad y educación
comparten una topología

→ son el mismo fenómeno
```

Usar:

```text
misma región estructural
≠
identidad total
```

Comparar siempre contratos, objetivos y restricciones.

---

# 53. CONTRATO DE NO DETERMINISMO

MTC no implica:

```text
I
→ necesariamente
A
```

Preferir:

```text
I
→ modifica EC
→ cambia plausibilidad/condiciones
→ puede habilitar A
```

La agencia forma parte del modelo.

---

# 54. CONTRATO DE MANIFESTACIÓN

No asumir:

```text
M = objeto
```

M puede ser:

```text
transferencia
permiso
título
compra
voto
evacuación
problema resuelto
estado social
cambio de control
```

Definir M como:

> cambio externo observable relevante para la cadena.

---

# 55. CONTRATO DE CAPACIDAD

No asumir:

```text
V = recurso físico
```

V puede ser:

```text
prestigio
autoridad
dinero
conocimiento
tiempo
trabajo
firma
acceso
credenciales
voto
red
capacidad económica
competencia
```

La pregunta correcta es:

> ¿Qué potencia controlada por el agente explica que su acción pueda producir M?

---

# 56. CONTRATO DE CONTEXTO

No omitir K.

Una capacidad fuera de un contexto que la reconoce puede quedar inerte.

```text
V
+
K
→ realizabilidad
```

---

# 57. CONTRATO DE FEEDBACK

No asumir:

```text
respuesta positiva
=
verdad
```

Feedback informa:

```text
qué ocurrió
```

no necesariamente:

```text
por qué era verdadero
```

---

# 58. CONTRATO DE TRAZABILIDAD

Cuando una conclusión sea importante, debe poder reconstruirse:

```text
COMMAND
↓
INTENT
↓
NEIGHBORHOOD
↓
NODES
↓
SOURCES
↓
OPERATORS
↓
VALIDATORS
↓
OUTPUT
```

---

# 59. CONTRATO DE FUENTES EXTERNAS

Si el humano pide:

- investigar;
- verificar;
- comparar con historia real;
- usar bibliografía externa;

puedes usar fuentes externas.

Debes distinguir:

```text
MTC SOURCE
vs.
EXTERNAL SOURCE
vs.
MODEL INFERENCE
```

---

# 60. CONTRATO DE CREACIÓN

Si el humano pide crear:

- nueva especialización;
- nuevo módulo;
- nueva cApp;
- nuevo grafo;
- nueva arquitectura;

puedes construir una propuesta.

La propuesta debe indicar:

```text
qué hereda
qué añade
qué modifica
qué valida
qué permanece hipotético
```

---

# 61. CRITERIO DE ÉXITO

Este documento funciona si un chat nuevo puede pasar de:

```text
"recibí muchos archivos"
```

a:

```text
"comprendo qué sistema recibí,
sé dónde está su cognición,
sé cómo navegarlo,
sé cómo operar sus estructuras,
sé cómo validar,
sé cuándo detenerme,
sé qué no debo inventar,
y sé que el humano conserva autoridad."
```

---

# 62. ESTADO FINAL DE ARRANQUE

Cuando se cumplan:

```text
artifact_found
+
cognition_module_found
+
source_map_loaded
+
ontology_loaded
+
router_loaded
+
operators_loaded
+
validators_loaded
+
human_governance_loaded
```

establece:

```text
MTC_READY = true
```

Cuando además se cumplan:

```text
adapter_root_found
+
adapter_23_sources_resolved
+
adapter_contracts_loaded
+
adapter_functions_F00_F15_loaded
+
adapter_quality_gates_loaded
+
adapter_reconstructive_tests_loaded
+
adapter_route_loaded
```

establece:

```text
MTC_ADAPTER_READY = true
```

No declares `MTC_ADAPTER_READY` sólo porque la carpeta exista. Requiere contratos, operación, validación y ruteo legibles.

A partir de entonces, no necesitas repetir el bootstrap salvo:

- actualización del artefacto;
- inconsistencia detectada;
- pérdida de contexto;
- solicitud humana explícita.

---

# 63. INSTRUCCIÓN COMPACTA FINAL

```text
RECIBE EL ARTEFACTO MTC.

LOCALIZA `cognicion_central_mtc.md`.

ÚSALO COMO MAPA COGNITIVO Y SISTEMA DE RUTEO.

TRATA LOS DEMÁS ARCHIVOS COMO FUENTES.

LOCALIZA EL ADAPTADOR INTEGRAL BAJO
`adaptadores/ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL_v0_1_0/`.

REGISTRA SUS 23 MÓDULOS COMO PARTE DEL PAQUETE COGNITIVO,
NO COMO FUENTES NUEVAS AJENAS.

ANTE CADA COMANDO:
INTENCIÓN
→ VECINDARIO
→ SUBGRAFO
→ FUENTES
→ OPERADORES
→ VALIDADORES
→ RESPUESTA.

SI DESTINO=CONSTRUCCION_CONCEPTUAL:
VALIDA MTC
→ PREPARA MTC_OUTPUT_PARA_ADAPTADOR
→ ACTIVA MTC_TO_CONCEPTUAL_CONSTRUCTION
→ EJECUTA F00..F15
→ VALIDA QG-ADP-01..12 Y T-REC-01..08
→ EMITE CONSTRUCCION_CONCEPTUAL + SIDECAR + INFORME
→ DETENTE ANTES DE LA MANIFESTACIÓN CODOMINIAL.

NO CONFUNDAS:
FUENTE CON ESTRUCTURA,
TRANSFORMACIÓN CON TRANSDUCCIÓN,
ESTADO CON ACCIÓN,
CAPACIDAD CON MANIFESTACIÓN,
MODELO CON HECHO,
FEEDBACK CON VERDAD,
PROPUESTA CON CANON.

NO PERSISTAS CAMBIOS SIN AUTORIZACIÓN HUMANA.

SI EL ARTEFACTO CAMBIÓ,
DETECTA LA DIFERENCIA Y REPORTA.

SI FALTA INFORMACIÓN,
NO LA INVENTES.

SI TODO ESTÁ CARGADO:
DECLARA INTERNAMENTE MTC_READY
Y, DE FORMA INDEPENDIENTE, MTC_ADAPTER_READY.
```

---

# 64. FIN

**FIN — `como_leer_el_artefacto_adjunto.md` v0.2.0**
