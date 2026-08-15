https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7f4eb4-92f4-83e8-bc27-fe9081ef8d0a

# Scaffolding cognitivo para construcción de paquetes cognitivos

## Identidad

```yaml
document:
  id: AC-HIA-FUNC-SCAFFOLDING-001
  version: 0.1.0
  lifecycle: PROPOSED
  authority: HUMAN

recommended_location:
  path: 04_funcionalidades/04_scaffolding_cognitivo_para_construccion_de_paquetes.md
  operation: ADD

belongs_to:
  package: ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  package_id: PC-AC-HIA
  minimum_observed_package_version: 0.2.0

function:
  name: SCAFFOLDING_COGNITIVO_PARA_CONSTRUCCION_DE_PAQUETES
  family: BACKEND_ORGANIZATION
  scope: PACKAGE_CONSTRUCTION_AND_HANDOFF
  persistence_by_default: FILE
  canonical_effect_by_default: NONE
```

---

# 1. Propósito

Esta funcionalidad especifica una forma de construir paquetes cognitivos complejos cuando la versión final no puede, o no conviene, materializarse correctamente en una sola respuesta.

La intuición central es separar dos operaciones que con frecuencia se confunden:

```text
DISEÑAR LA ESTRUCTURA COMPLETA DEL PAQUETE
≠
ESCRIBIR DE UNA VEZ TODO EL CONTENIDO FINAL DEL PAQUETE
```

La primera operación puede realizarse con alta resolución incluso cuando la segunda excedería el presupuesto práctico de contexto, atención o tokens disponible en una sola ejecución.

La salida de esta funcionalidad es un **SCAFFOLDING_COGNITIVO**: un artefacto de construcción que conserva la arquitectura documental prevista del paquete, las instrucciones necesarias para desarrollar cada archivo, el contexto de diseño acumulado, las decisiones humanas que gobiernan la construcción, las fuentes que deben recuperarse y el protocolo mediante el cual la versión final será materializada posteriormente.

El scaffolding no es el paquete terminado.

Es el **estado intermedio estructurado que permite construirlo sin perder la cognición que produjo su diseño**.

---

# 2. Problema que atiende

## 2.1. El límite práctico de una construcción monolítica

Un paquete cognitivo puede contener decenas de archivos relacionados. Cada archivo puede requerir:

- definiciones;
- principios;
- contratos;
- ejemplos;
- fixtures;
- protocolos;
- fuentes;
- relaciones con otros paquetes;
- criterios de validación;
- salidas esperadas;
- contraejemplos;
- instrucciones de integración;
- estados epistemológicos;
- decisiones humanas acumuladas durante una conversación larga.

Si se intenta generar la versión final completa de todo el paquete en una sola manifestación, el espacio disponible para cada archivo disminuye.

El problema no es solamente cuantitativo.

La compresión puede producir:

```text
MENOS ESPACIO POR ARCHIVO
    ↓
DESCRIPCIONES MÁS SUPERFICIALES
    ↓
MENOS EJEMPLOS Y CONTRAEJEMPLOS
    ↓
MAYOR AMBIGÜEDAD
    ↓
MAYOR RIESGO DE INCONSISTENCIAS ENTRE ARCHIVOS
    ↓
PAQUETE FORMALMENTE COMPLETO,
PERO COGNITIVAMENTE INSUFICIENTE
```

Una estructura de 40, 60 o 100 archivos puede caber nominalmente dentro de un ZIP y, sin embargo, no estar desarrollada con la profundidad necesaria para ser utilizada por un humano o una IA.

Por ello:

> **La existencia física de todos los archivos no demuestra que el paquete cognitivo haya sido realmente construido.**

## 2.2. Segundo problema: pérdida del proceso de diseño

Durante una conversación, el humano puede introducir:

- correcciones;
- restricciones;
- intuiciones;
- relaciones entre estructuras;
- ejemplos;
- prioridades;
- exclusiones;
- decisiones terminológicas;
- observaciones sobre errores de versiones preliminares.

Si sólo se conserva la estructura de carpetas o una lista de títulos, una IA futura puede conocer **qué archivos existen**, pero no necesariamente **por qué deben construirse de cierta manera**.

Por tanto, un scaffolding puramente documental también es insuficiente.

Debe conservar:

```text
ESTRUCTURA OBJETIVO
+
CONTEXTO DE DISEÑO
+
DECISIONES HUMANAS
+
FUENTES
+
DEPENDENCIAS
+
PROTOCOLO DE CONSTRUCCIÓN
```

---

# 3. Definición

## 3.1. Scaffolding cognitivo

> **Un SCAFFOLDING_COGNITIVO es un artefacto intermedio, estructurado y trazable que representa la arquitectura documental objetivo de un paquete cognitivo antes de que todo su contenido final haya sido materializado, e incluye las instrucciones y el contexto suficientes para permitir que ese contenido sea construido posteriormente sin reiniciar el razonamiento desde cero.**

Debe contener dos dimensiones inseparables:

```text
SCAFFOLDING_COGNITIVO
├── SCAFFOLDING ESTRUCTURAL
│   └── cómo será físicamente el paquete final
│
└── SCAFFOLDING CONTEXTUAL
    └── qué cognición debe gobernar su construcción
```

## 3.2. Scaffolding estructural

Es la representación anticipada del árbol final del paquete.

Ejemplo:

```text
PAQUETE_X/
├── README.md
├── 00_gobierno/
│   ├── 01_ficha.md
│   └── 02_autoridad.md
├── 01_nucleo/
│   ├── 01_definicion.md
│   └── 02_componentes.md
└── 02_modelo_operativo/
    └── 01_ciclo.md
```

En el scaffolding, esos archivos existen ya, pero todavía **no contienen necesariamente su redacción final**.

Cada uno contiene una guía específica para construir su futura manifestación.

## 3.3. Scaffolding contextual

Es el conjunto de información que permite reconstruir la intención de diseño.

Puede contener:

- contexto consolidado de la conversación;
- comandos y decisiones humanas;
- relaciones descubiertas;
- conceptos aceptados;
- conceptos rechazados;
- preguntas abiertas;
- fuentes internas;
- fuentes externas;
- hipótesis;
- ejemplos identificados;
- restricciones globales;
- criterios de aceptación.

El contexto no debe entenderse como una transcripción indiscriminada.

Su objetivo es conservar **la información material para reconstruir correctamente el paquete**.

---

# 4. Relación con la Arquitectura de comunicación humano–IA

Esta funcionalidad pertenece a AC-HIA porque resuelve un problema de **continuidad de la interacción cognitiva entre humano, arquitectura local y sistema de IA**.

AC-HIA ya distingue entre:

```text
HUMANO
FRONTEND COGNITIVO
ARQUITECTURA COGNITIVA LOCAL
BACKEND COGNITIVO
SISTEMA DE IA ANFITRIÓN
```

El scaffolding introduce una forma de convertir el estado cognitivo acumulado de una tarea de diseño en un artefacto que puede ser:

1. inspeccionado por el humano;
2. reutilizado en el mismo chat;
3. trasladado a otro runtime;
4. entregado a un agente como Codex;
5. usado para continuar la construcción sin perder las decisiones previas.

La relación puede expresarse así:

```text
INTERACCIÓN HUMANO–IA
        ↓
ESTADO COGNITIVO ACUMULADO
        ↓
DISEÑO DE PAQUETE
        ↓
SCAFFOLDING COGNITIVO
        ↓
MATERIALIZACIÓN DIFERIDA
        ↓
PAQUETE CANDIDATO
        ↓
REVISIÓN HUMANA
```

Por ello, esta capacidad no es solamente una técnica de generación de ZIP.

Es una **función de transferencia y preservación estructurada de trabajo cognitivo**.

---

# 5. Relación con PIEA

El scaffolding es compatible con el principio de integración estructural acumulativa.

La versión final de un paquete puede ser simultánea y relacional:

```text
ARCHIVO_A ↔ ARCHIVO_B ↔ ARCHIVO_C ↔ ...
```

pero su construcción puede realizarse sucesivamente:

```text
A
→ B
→ C
→ D
→ ...
```

El scaffolding conserva desde el principio la forma global prevista y permite que las unidades sean materializadas una a una sin perder la estructura de conjunto.

Por ello:

> **La construcción puede ser secuencial aunque el paquete resultante sea simultáneo, relacional y multidimensional.**

Esta relación debe entenderse como compatibilidad estructural. El scaffolding no sustituye a PIEA ni lo redefine.

---

# 6. Principio de materialización diferida

La funcionalidad adopta el siguiente principio:

> **Cuando la profundidad necesaria para construir correctamente un paquete excede lo que conviene materializar en una sola ejecución, primero debe preservarse su arquitectura de construcción y después materializarse el contenido por unidades controlables.**

La secuencia preferida es:

```text
ACERVO + CONVERSACIÓN + OBJETIVO
        ↓
DISEÑO DEL PAQUETE
        ↓
SCAFFOLDING COGNITIVO
        ↓
CONSTRUCCIÓN DISTRIBUIDA
        ↓
VALIDACIÓN CRUZADA
        ↓
PAQUETE CANDIDATO
```

No debe confundirse:

```text
MATERIALIZACIÓN DIFERIDA ≠ POSTERGAR EL DISEÑO
```

El diseño debe realizarse antes.

Lo que se difiere es la expansión completa de cada archivo.

---

# 7. Qué debe contener un scaffolding cognitivo

Un scaffolding suficientemente autónomo debería incluir, como mínimo, cuatro capas.

## 7.1. Capa A — Arquitectura documental objetivo

Debe contener la estructura de carpetas y archivos que se espera que tenga el paquete terminado.

No debe generar archivos genéricos simplemente para aumentar el número de documentos.

Cada archivo debe poseer una responsabilidad prevista.

## 7.2. Capa B — Guías de construcción por archivo

Cada archivo futuro debe contener temporalmente una especificación de cómo construir su versión final.

Una guía puede incluir:

```yaml
construction_guide:
  purpose:
  questions_to_resolve:
  concepts_to_define:
  internal_sources_to_recover:
  external_sources_if_applicable:
  relations_to_other_files:
  examples_to_build:
  negative_examples:
  expected_outputs:
  protocols_to_specify:
  terminology_to_define:
  open_decisions:
  acceptance_criteria:
```

La forma exacta puede variar.

Lo importante es que la guía conserve suficiente información para que una IA futura no tenga que adivinar qué debía contener el documento.

## 7.3. Capa C — Contexto de construcción

Debe acompañar al árbol documental.

Como base:

```text
contexto/
├── contexto_consolidado.md
├── decisiones_humanas.md
├── mapa_de_fuentes.md
├── relaciones_relevantes.md
├── cuestiones_abiertas.md
└── estado_epistemologico.md
```

Esta capa resuelve el problema de transferir el paquete a un sistema que no posee el contexto del chat original.

## 7.4. Capa D — Protocolo de materialización

Debe explicar cómo convertir el scaffolding en paquete final.

Puede contener:

```text
construccion/
├── protocolo_de_construccion.md
├── dependencias_entre_archivos.md
├── orden_recomendado.md
├── criterios_de_aceptacion.md
├── protocolo_de_validacion_cruzada.md
└── prompt_de_handoff_para_agente.md
```

Cuando el destino sea Codex u otro agente de repositorio, también puede incluir una plantilla de instrucciones persistentes adecuada al runtime disponible.

---

# 8. Estructura recomendada del artefacto

Ejemplo conceptual:

```text
SCAFFOLDING_PAQUETE_X/
│
├── README.md
│
├── 00_contexto_de_construccion/
│   ├── 01_contexto_consolidado.md
│   ├── 02_decisiones_humanas.md
│   ├── 03_mapa_de_fuentes.md
│   ├── 04_relaciones_y_dependencias_conceptuales.md
│   ├── 05_cuestiones_abiertas.md
│   └── 06_estado_epistemologico.md
│
├── 01_protocolo_de_construccion/
│   ├── 01_protocolo_general.md
│   ├── 02_dependencias_entre_archivos.md
│   ├── 03_criterios_de_aceptacion.md
│   ├── 04_validacion_cruzada.md
│   └── 05_prompt_de_handoff_codex.md
│
└── paquete/
    └── PAQUETE_X/
        ├── README.md
        ├── 00_gobierno/
        ├── 01_nucleo/
        ├── 02_modelo_operativo/
        └── ...
```

La carpeta `paquete/PAQUETE_X/` debe reproducir desde el principio el árbol previsto del paquete final.

Durante la fase de scaffolding, cada archivo contiene su guía de construcción.

Durante la materialización, la guía es sustituida o transformada en el documento final correspondiente.

---

# 9. Contexto: qué conservar y qué no

## 9.1. Debe conservarse

Información que modifica materialmente cómo debería construirse el paquete:

- decisiones humanas explícitas;
- correcciones;
- restricciones;
- términos aceptados;
- términos rechazados;
- relaciones estructurales;
- ejemplos considerados esenciales;
- fuentes indicadas;
- prioridades;
- órdenes de no hacer;
- hipótesis que deben permanecer como hipótesis;
- dudas todavía abiertas;
- decisiones sobre ubicación e integración;
- criterios de aceptación.

## 9.2. No es necesario conservar indiscriminadamente

- repeticiones sin efecto;
- conversación social;
- formulaciones sustituidas cuando no aportan trazabilidad útil;
- salidas intermedias claramente descartadas, salvo que expliquen un anti-patrón importante;
- texto que no afecta al diseño.

## 9.3. Regla epistemológica

El scaffolding debe distinguir, cuando sea importante:

```text
FUENTE
DECISIÓN_HUMANA
INFERENCIA
HIPÓTESIS
PREGUNTA_ABIERTA
PROPUESTA
ELEMENTO_RECHAZADO
```

El objetivo no es únicamente preservar información.

Es preservar **su estatus**.

---

# 10. Modalidades de construcción final

La funcionalidad define dos modalidades principales.

---

## 10.1. Modo A — Construcción archivo por archivo en el mismo chat

### Naturaleza

Es una construcción incremental con revisión humana frecuente.

### Proceso

```text
SCAFFOLDING
    ↓
HUMANO SELECCIONA ARCHIVO
    ↓
ENTREGA/PEGA LA GUÍA EN EL CHAT
    ↓
IA RECUPERA:
  - contexto relevante;
  - fuentes;
  - dependencias;
  - archivos ya construidos
    ↓
IA CONSTRUYE VERSIÓN FINAL DEL ARCHIVO
    ↓
HUMANO REVISA / CORRIGE
    ↓
ARCHIVO SE ACEPTA O SE REITERA
    ↓
SIGUIENTE ARCHIVO
```

### Ventajas

- máxima intervención humana;
- posibilidad de refinamiento fino;
- alta resolución por archivo;
- cada archivo dispone de un presupuesto de respuesta propio;
- las decisiones nuevas pueden retroalimentar archivos todavía no construidos.

### Riesgo principal

Las decisiones nuevas surgidas durante la construcción pueden afectar documentos anteriores.

Por ello debe existir una regla de revisión cruzada.

### Uso recomendado

Cuando:

- el paquete es conceptualmente novedoso;
- todavía existen preguntas abiertas importantes;
- la calidad de las definiciones es más importante que la velocidad;
- el humano quiere participar en cada decisión.

---

## 10.2. Modo B — Construcción automatizada mediante Codex u otro agente de repositorio

### Naturaleza

Es una materialización agentiva del scaffolding usando acceso directo al acervo documental.

### Condición mínima

El agente debe disponer de:

```text
1. SCAFFOLDING COGNITIVO COMPLETO
2. ACCESO A COGNICIÓN CENTRAL
3. PROTOCOLO DE CONSTRUCCIÓN
4. CRITERIOS DE ACEPTACIÓN
5. INSTRUCCIÓN DE NO INVENTAR ANTE AMBIGÜEDAD
```

### Proceso

```text
AGENTE RECIBE SCAFFOLDING
        ↓
LEE CONTEXTO
        ↓
AUDITA FUENTES EN COGNICIÓN CENTRAL
        ↓
CONSTRUYE MAPA DE DEPENDENCIAS
        ↓
DETERMINA ORDEN DE CONSTRUCCIÓN
        ↓
MATERIALIZA ARCHIVOS
        ↓
CONSTRUYE EJEMPLOS / FIXTURES
        ↓
VALIDA CADA ARCHIVO
        ↓
VALIDA COHERENCIA GLOBAL
        ↓
GENERA REPORTE DE DECISIONES ABIERTAS
        ↓
ENTREGA PAQUETE CANDIDATO
```

### Regla de ambigüedad

Si no existe base suficiente para una decisión:

```text
NO INVENTAR
→ REGISTRAR OPEN_DECISION
→ MOSTRAR ALTERNATIVAS
→ CONTINUAR CON LO RESOLUBLE
```

### Estado de salida

Por defecto:

```yaml
package_build:
  status: CANDIDATE
  canonical: false
  human_review: REQUIRED
```

El agente construye.

El humano conserva la autoridad de aceptación e integración.

---

# 11. Scaffolding unificado

```text
UN SOLO ARTEFACTO
=
ESTRUCTURA DEL FUTURO PAQUETE
+
CONTEXTO NECESARIO PARA CONSTRUIRLO
+
PROTOCOLO DE MATERIALIZACIÓN
```

---

# 12. Procedimiento para generar un scaffolding

## Stage SC-0 — Delimitar el objetivo

Identificar:

- qué paquete se desea construir;
- qué problema debe resolver;
- qué estado tiene actualmente;
- qué elementos ya existen;
- qué espera el humano del resultado.

No comenzar todavía a redactar archivos finales.

## Stage SC-1 — Recuperar el acervo

Buscar dentro de COGNICIÓN_CENTRAL:

- paquetes relacionados;
- nomenclaturas;
- estructuras reutilizables;
- contratos;
- ejemplos;
- rutas;
- decisiones previas.

Regla:

> **No crear desde cero lo que ya existe y puede ser reutilizado.**

## Stage SC-2 — Consolidar la cognición de la conversación

Extraer:

- comandos humanos;
- correcciones;
- relaciones;
- ejemplos;
- restricciones;
- decisiones;
- dudas;
- hipótesis.

Desduplicar sin borrar diferencias epistemológicas.

## Stage SC-3 — Diseñar el árbol final

Definir desde el principio:

- carpetas;
- archivos;
- responsabilidad de cada archivo;
- dependencias.

El objetivo es que la topología del scaffolding sea lo más cercana posible a la topología del paquete final.

## Stage SC-4 — Construir guía por archivo

Para cada archivo, especificar cómo deberá ser construido.

Una guía no debe limitarse a:

```text
TODO: explicar X
```

Debe indicar:

```text
qué explicar
por qué
qué fuentes recuperar
qué relaciones mostrar
qué ejemplos construir
qué errores evitar
qué outputs mostrar
qué criterios permiten considerar terminado el archivo
```

## Stage SC-5 — Construir contexto de transferencia

Crear la capa contextual necesaria para una IA sin acceso a la conversación original.

## Stage SC-6 — Construir dependencias y orden

No asumir que todos los archivos pueden construirse en cualquier secuencia.

Ejemplo:

```text
DEFINICIÓN
    ↓
COMPONENTES
    ↓
CONTRATOS
    ↓
PROTOCOLOS
    ↓
EJEMPLOS
    ↓
VALIDACIÓN GLOBAL
```

El orden final debe derivarse de las dependencias reales del paquete.

## Stage SC-7 — Construir modos de materialización

Debe existir al menos:

- protocolo `CHAT_FILE_BY_FILE`;
- protocolo `AGENT_AUTOMATED`, cuando el runtime lo permita.

## Stage SC-8 — Validar el scaffolding

Antes de entregarlo comprobar:

- ¿están todos los archivos previstos?;
- ¿cada archivo tiene responsabilidad?;
- ¿cada guía contiene suficiente información?;
- ¿el contexto conserva decisiones humanas?;
- ¿se identifican las fuentes?;
- ¿las preguntas abiertas están visibles?;
- ¿existe orden de construcción?;
- ¿se definen criterios de aceptación?;
- ¿un agente sin el chat podría comenzar sin inventar?

---

# 13. Ejemplo: paquete MCCR

La funcionalidad fue descubierta durante la construcción del paquete provisional `MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME`.

## Problema

Se había identificado una arquitectura documental extensa.

Intentar escribir simultáneamente todos los archivos finales habría obligado a comprimir:

- descripciones;
- stages;
- ejemplos;
- restricciones;
- solver router;
- estados del plan;
- integraciones;
- fixtures;
- bibliografía;
- protocolos.

## Primera operación

Se generó un ZIP con el árbol completo y 58 archivos.

Cada archivo contenía una guía de construcción.

Conceptualmente:

```text
MCCR/
├── archivo_01.md  ← guía para construir archivo_01 final
├── archivo_02.md  ← guía para construir archivo_02 final
├── archivo_03.md  ← guía para construir archivo_03 final
└── ...
```

## Problema detectado

Un agente externo podría leer las guías y COGNICIÓN_CENTRAL, pero no conocería todas las correcciones y decisiones de la conversación que originaron esas guías.

## Segunda operación

Se construyó un artefacto adicional con:

- contexto consolidado;
- decisiones humanas;
- mapa de reutilización;
- historia de descubrimiento;
- requisitos globales;
- criterios de aceptación;
- protocolo de construcción;
- prompt para Codex.

## Refinamiento resultante

La forma general correcta no es depender permanentemente de dos artefactos.

El **SCAFFOLDING_COGNITIVO** debe integrar ambas dimensiones desde su origen:

```text
SCAFFOLDING_MCCR
=
ÁRBOL FINAL PREVISTO
+
GUÍAS POR ARCHIVO
+
CONTEXTO DE DISEÑO
+
DECISIONES HUMANAS
+
FUENTES
+
DEPENDENCIAS
+
VALIDACIÓN
+
PROTOCOLO CHAT
+
PROTOCOLO CODEX
```

Éste es el patrón generalizable que debe conservar AC-HIA.

---

# 14. Ejemplo de una guía de construcción correcta

Una guía insuficiente sería:

```markdown
# Execution Plan

TODO: explicar qué es el execution plan.
```

Una guía útil debería aproximarse a:

```yaml
future_document:
  title: EXECUTION_PLAN

construction:
  define:
    - naturaleza del objeto
    - diferencia entre arquitectura, subgrafo, chain, plan y runtime

  recover_from_cognition_central:
    - Registro/Orquestador
    - cApps
    - runtime
    - validadores
    - AC-HIA

  relationships:
    - generated_by: MCCR
    - consumed_by: RUNTIME
    - validated_by: VALIDATORS

  examples:
    - ACCD manifestación lingüística
    - ACCD video corto
    - caso NO_FEASIBLE_PLAN
    - caso de replanificación

  show_expected_outputs:
    - plan válido
    - plan rechazado
    - plan invalidado

  terminology:
    - definir todo término no heredado

  acceptance:
    - humano puede comprender el objeto sin conversación original
    - IA puede construir/usar un plan sin inferir campos esenciales
```

La guía todavía no es la explicación final.

Pero contiene la **cognición necesaria para construirla**.

---

# 15. Diferencia entre scaffolding, resumen y paquete final

```text
RESUMEN
= reduce información existente.

SCAFFOLDING
= preserva y organiza información necesaria para producir algo todavía no materializado por completo.

PAQUETE FINAL
= contiene las especificaciones definitivas que gobiernan su uso.
```

Por tanto:

```text
SCAFFOLDING ≠ RESUMEN DEL PAQUETE
SCAFFOLDING ≠ PAQUETE VACÍO
SCAFFOLDING ≠ LISTA DE TODOS
SCAFFOLDING ≠ TRANSCRIPT DEL CHAT
SCAFFOLDING ≠ PAQUETE CANÓNICO
```

---

# 16. Criterios para decidir cuándo usar esta funcionalidad

Debe considerarse cuando aparezcan varias de estas condiciones:

- el paquete tendrá muchos archivos;
- cada archivo necesita explicaciones extensas;
- existen múltiples ejemplos importantes;
- el trabajo acumuló una conversación larga;
- las decisiones humanas son difíciles de reconstruir desde el repositorio;
- hay relaciones con muchos paquetes existentes;
- construir todo en una sola respuesta obligaría a comprimir;
- se desea delegar la materialización a Codex;
- se desea construir manualmente archivo por archivo;
- el paquete todavía contiene decisiones abiertas;
- la validación cruzada es importante.

No es necesario usar scaffolding completo para un paquete de dos o tres archivos simples cuya construcción íntegra sea razonable en una sola ejecución.

---

# 17. Responsabilidades

## Humano

- define el objetivo;
- aprueba la estructura;
- corrige decisiones;
- decide persistencia;
- aprueba o rechaza la versión candidata.

## AC-HIA / arquitectura local

- preserva contexto relevante;
- distingue decisiones de inferencias;
- organiza la transferencia;
- identifica fuentes y estructuras activas;
- mantiene trazabilidad.

## IA constructora del scaffolding

- diseña el árbol;
- construye guías;
- consolida contexto;
- identifica dependencias;
- prepara protocolos;
- no inventa decisiones humanas ausentes.

## IA materializadora

- recupera fuentes;
- sigue guías;
- desarrolla contenido;
- construye ejemplos;
- valida consistencia;
- registra cuestiones abiertas.

---

# 18. Invariantes

```yaml
invariants:
  - HUMAN_AUTHORITY_IS_PRESERVED
  - SCAFFOLDING_IS_NOT_FINAL_PACKAGE
  - SCAFFOLDING_IS_NOT_CANON_BY_DEFAULT
  - CONTEXT_MUST_TRAVEL_WITH_STRUCTURE
  - FILE_GUIDE_MUST_BE_ACTIONABLE
  - SOURCE_CLAIMS_REQUIRE_SOURCE_RECOVERY
  - OPEN_AMBIGUITY_MUST_NOT_BE_SILENTLY_INVENTED
  - EXAMPLES_ARE_PART_OF_CONSTRUCTION_KNOWLEDGE
  - BUILD_MODE_DOES_NOT_CHANGE_PACKAGE_IDENTITY
  - AUTOMATION_DOES_NOT_IMPLY_CANONICAL_APPROVAL
```

---

# 19. Fallos característicos

| Fallo                                                                     | Consecuencia                                                     |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Crear sólo carpetas y nombres de archivo                                  | La IA futura conoce la topología pero no sabe qué construir.     |
| Guardar sólo un resumen del chat                                          | Se pierden decisiones locales y relaciones importantes.          |
| Guardar toda la conversación sin consolidación                            | El agente debe volver a descubrir qué era importante.            |
| No separar decisión humana de inferencia                                  | Una hipótesis puede convertirse en regla.                        |
| Generar todos los documentos finales en una sola respuesta por obligación | La cobertura nominal aumenta mientras disminuye la profundidad.  |
| No construir dependencias                                                 | Los archivos pueden definirse de manera circular o incompatible. |
| No incluir ejemplos en las guías                                          | La materialización futura tiende a volverse abstracta.           |
| Entregar scaffolding a Codex sin protocolo                                | El agente puede completar archivos en un orden incorrecto.       |
| Permitir que Codex modifique canon automáticamente                        | Se confunde construcción candidata con integración.              |
| Mantener estructura y contexto en artefactos no vinculados                | Se puede perder una mitad del estado de construcción.            |

---

# 20. Validadores

## SC-V1 — Completitud estructural

- ¿Existe un árbol objetivo completo?
- ¿Cada archivo tiene una función prevista?

## SC-V2 — Suficiencia de guía

- ¿Una IA puede saber qué desarrollar?
- ¿Se identifican fuentes, relaciones y ejemplos?

## SC-V3 — Contexto

- ¿Se preservan las decisiones humanas relevantes?
- ¿Las correcciones posteriores sustituyen correctamente formulaciones anteriores?
- ¿se distingue hipótesis de decisión?

## SC-V4 — Transferibilidad

Pregunta crítica:

> ¿Podría una IA que no participó en la conversación original comenzar la construcción sin tener que inventar el significado de las guías?

## SC-V5 — Construcción en chat

- ¿los archivos pueden desarrollarse individualmente?;
- ¿cada uno puede recuperar sus dependencias?;
- ¿la construcción incremental puede reintegrar nuevas decisiones?

## SC-V6 — Construcción agentiva

- ¿existe protocolo?;
- ¿existe mapa de fuentes?;
- ¿existe orden/dependencias?;
- ¿existen criterios de aceptación?;
- ¿las ambigüedades tienen procedimiento?

## SC-V7 — Gobierno

- ¿el artefacto se mantiene como construcción candidata?;
- ¿se preserva autoridad humana?;
- ¿no existe persistencia canónica silenciosa?

---

# 21. Salidas esperadas

La funcionalidad puede producir:

```yaml
outputs:
  primary:
    - COGNITIVE_SCAFFOLDING_ZIP

  embedded:
    - TARGET_PACKAGE_TREE
    - PER_FILE_CONSTRUCTION_GUIDES
    - CONSOLIDATED_CONTEXT
    - HUMAN_DECISION_REGISTER
    - SOURCE_MAP
    - DEPENDENCY_MAP
    - BUILD_PROTOCOL
    - ACCEPTANCE_CRITERIA
    - OPEN_DECISIONS
    - CHAT_BUILD_INSTRUCTIONS
    - AGENT_HANDOFF_PROMPT

  optional:
    - AGENTS_TEMPLATE
    - BUILD_STATE_SCHEMA
    - VALIDATION_REPORT_TEMPLATE
```

---

# 22. Nomenclatura recomendada

Para distinguirlo del paquete definitivo:

```text
SCAFFOLDING_<NOMBRE_DEL_PAQUETE>_vX_Y_Z.zip
```

Ejemplo:

```text
SCAFFOLDING_MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME_v0_1_0.zip
```

El identificador de versión corresponde al scaffolding, no necesariamente a la versión final del paquete que materializará.

---

# 23. Protocolo de invocación

La funcionalidad puede activarse cuando el humano solicite expresiones equivalentes a:

```text
“diseña el paquete pero no escribas todavía todo el contenido”
“genera el esqueleto completo y luego lo construimos archivo por archivo”
“quiero un ZIP que Codex pueda terminar”
“preserva el contexto necesario para que otra IA continúe”
“crea las guías de construcción de cada archivo”
```

La normalización de comandos debe conservar el objetivo dominante:

```yaml
operation:
  type: BUILD_COGNITIVE_SCAFFOLDING

expected_result:
  artifact: COGNITIVE_SCAFFOLDING_ZIP

prohibited_interpretation:
  - GENERATE_SHALLOW_FINAL_PACKAGE
```

El scaffolding no debe activarse automáticamente sólo porque un paquete sea largo. La preferencia humana sobre el modo de construcción conserva prioridad.

---

# 24. Integración recomendada con el catálogo de funcionalidades

Al integrar esta función en una revisión futura del catálogo de AC-HIA, puede añadirse una entrada equivalente a:

```yaml
function:
  id: TO_BE_ASSIGNED_BY_PACKAGE_MAINTAINER
  name: Construir scaffolding cognitivo de un paquete
  family: BACKEND_ORGANIZATION
  dominant_responsible: BACKEND_COGNITIVO + ARQUITECTURA_LOCAL
  input:
    - objetivo humano
    - estado cognitivo local
    - acervo disponible
    - decisiones de diseño
  output:
    - scaffolding cognitivo transferible
```

El ID no debe inventarse aquí como definitivo si el catálogo vigente requiere una secuencia o política propia.

---

# 25. Integración recomendada con el manifiesto

La versión futura del manifiesto de AC-HIA puede registrar este documento dentro de:

```yaml
functionality_documents:
  - 04_funcionalidades/04_scaffolding_cognitivo_para_construccion_de_paquetes.md
```

Esta incorporación debe realizarse como cambio explícito del paquete y no como efecto automático de generar este archivo.

---

# 26. Regla final

> **Cuando la construcción completa de un paquete en una sola manifestación reduciría la profundidad, la coherencia o la trazabilidad del resultado, AC-HIA puede convertir primero el diseño acumulado en un scaffolding cognitivo transferible. Ese scaffolding conserva tanto la estructura del futuro paquete como la cognición necesaria para materializarla posteriormente, ya sea archivo por archivo con revisión humana o de forma agentiva mediante Codex.**

Forma compacta:

```text
DISEÑO ACUMULADO
        ↓
SCAFFOLDING COGNITIVO
   ┌────┴────┐
   ↓         ↓
CHAT       CODEX
archivo     construcción
por archivo automatizada
   ↓         ↓
   └────┬────┘
        ↓
PAQUETE CANDIDATO
        ↓
REVISIÓN HUMANA
```
