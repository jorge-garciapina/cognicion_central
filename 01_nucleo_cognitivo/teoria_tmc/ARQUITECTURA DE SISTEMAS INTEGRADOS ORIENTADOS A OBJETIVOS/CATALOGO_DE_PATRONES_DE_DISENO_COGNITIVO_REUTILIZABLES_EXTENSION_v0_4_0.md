https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0/c/6a81d74b-eb6c-83e8-80a8-fbb79cb2f174

# CATÁLOGO DE PATRONES DE DISEÑO COGNITIVO REUTILIZABLES — EXTENSIÓN v0.4.0

**ID:** `INT-EXTENSION-CATALOGO-PATRONES-COGNITIVOS-TRANSFERIBLES-004`  
**Versión:** `0.4.0`  
**Fecha:** `2026-08-17`  
**Estado:** `EXPLORATORY / CROSS_CUTTING / NON_CANONICAL`  
**Tipo:** extensión deduplicada de catálogo de patrones de diseño cognitivo  
**Cobertura nueva:** `PAT-COG-126` a `PAT-COG-130`

---

# 0. PROPÓSITO

Este documento formaliza únicamente estructuras cognitivas y patrones de diseño reutilizables que permanecían **diferencialmente no cubiertos** después de comparar las estructuras resaltadas en la discusión con los tres catálogos de precedencia:

1. `CATALOGO_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_1_0` — `PAT-COG-001…063`.
2. `CATALOGO_COMPLEMENTARIO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_2_0` — `PAT-COG-064…115`.
3. `CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_3_0` — `PAT-COG-116…125`.

No se vuelven a definir estructuras ya formalizadas en esos documentos.

La procedencia de un patrón no determina su identidad. Un patrón reconocido inicialmente en una arquitectura militar, organizacional, cognitiva, narrativa o informática se presenta aquí mediante su **función, topología, invariantes y dominio de variación**, no mediante el vocabulario del caso donde se descubrió.

Regla de lectura:

```text
CASO DE DESCUBRIMIENTO
≠
PATRÓN
```

```text
APLICACIÓN EN UN DOMINIO
≠
IDENTIDAD DEL PATRÓN
```

```text
SIMILITUD ESTRUCTURAL
≠
EQUIVALENCIA ONTOLÓGICA
```

---

# 0.1. Política de deduplicación

Se comparó cada estructura candidata mediante:

```text
INTENCIÓN
+
PROBLEMA QUE RESUELVE
+
NIVELES DE ABSTRACCIÓN
+
NODOS / COMPONENTES
+
RELACIONES / FLUJO
+
INVARIANTES
+
DOMINIO DE VARIACIÓN
+
CONDICIONES DE FALLO
```

Se aplicó:

```text
MISMA INTENCIÓN
+
MISMOS INVARIANTES
+
MISMA TOPOLOGÍA FUNCIONAL
=
MISMO PATRÓN
```

Por ello, estructuras ya cubiertas como `CHAIN`, subgrafo como unidad de efecto, función–información–coordinación, gradiente de integración, representación operable, tejido de coordinación, recomposición, feedback, locus de gobierno, autosimilitud multiescala o cApp como capacidad compuesta **no reciben nuevos identificadores aquí**.

---

# 0.2. Resultado de la depuración

Las estructuras no cubiertas de manera suficientemente independiente se agruparon en cinco patrones nuevos:

| ID            | Nombre                                                        | Responsabilidad diferencial                                                                                                                               |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PAT-COG-126` | Estratificación arquitectura → aplicación → chain → ejecución | Separa el espacio de capacidades, la forma reusable de usarlo, el camino situado y la ejecución real.                                                     |
| `PAT-COG-127` | Objetivo como transición de estado multidominio               | Permite abstraer objetivos espaciales, temporales, informacionales, cognitivos u organizacionales como estados deseados verificables.                     |
| `PAT-COG-128` | Composición de capacidad dependiente de topología             | Impide asumir una única ley de agregación; la contribución de nodos depende de la estructura serial, paralela, redundante, umbral o de cuello de botella. |
| `PAT-COG-129` | Dualidad rutas funcionales / cortes funcionales               | Une resiliencia y degradación sistémica mediante conjuntos de rutas suficientes y conjuntos de corte capaces de impedir la función.                       |
| `PAT-COG-130` | Precoordinación mediante procedimiento reusable               | Externaliza y estabiliza coordinación antes del runtime mediante protocolos, playbooks, doctrinas o aplicaciones practicables.                            |

---

# FAMILIA P — ESTRATIFICACIÓN OPERACIONAL Y TELEOLOGÍA

---

# PAT-COG-126 — ESTRATIFICACIÓN ARQUITECTURA → APLICACIÓN → CHAIN → EJECUCIÓN

## Intención

Evitar que se colapsen niveles distintos de una capacidad operacional: el sistema completo, una forma reusable de utilizarlo, el camino concreto seleccionado para una situación y la ejecución real que ocurre en runtime.

Este patrón responde a una confusión recurrente:

```text
UNA RUTA CONCRETA
≠
LA APLICACIÓN
≠
LA ARQUITECTURA COMPLETA
```

## Firma estructural

```text
ARQUITECTURA
= espacio de capacidades, componentes, relaciones y restricciones posibles
        │
        ▼
REPERTORIO DE APLICACIONES
= formas reutilizables de configurar capacidades para clases de objetivos
        │
        ▼
APLICACIÓN SELECCIONADA
= función compuesta activable bajo ciertas condiciones
        │
        ▼
CHAIN / SUBGRAFO SITUADO
= camino o configuración concreta para el estado actual
        │
        ▼
PLAN / BINDINGS / GATES
= organización situada de la ejecución
        │
        ▼
RUNTIME / EJECUCIÓN
        │
        ▼
RESULTADO / EFECTO
```

Forma compacta:

```text
CAPABILITY_SPACE
→ APPLICATION
→ SITUATED_PATH
→ EXECUTION
→ RESULT
```

## Semántica de los estratos

### Arquitectura

Contiene el espacio de posibilidades:

```text
nodos
+
relaciones
+
capacidades
+
interfaces
+
restricciones
+
políticas
+
rutas potenciales
```

No está ejecutando necesariamente una tarea particular.

### Aplicación

Es una organización reusable de la arquitectura para una **clase de efecto u objetivo**.

Puede encapsular:

- roles funcionales;
- requisitos de información;
- contratos;
- procedimientos;
- condiciones de activación;
- restricciones;
- puntos de decisión;
- rutas alternativas;
- criterios de éxito.

Una aplicación puede ser más amplia que una sola chain.

### Chain

Es un camino funcional concreto dentro de la arquitectura disponible.

Puede ser una realización de una aplicación bajo:

```text
ESTADO_t
+
OBJETIVO_t
+
RECURSOS_t
+
RESTRICCIONES_t
```

### Plan situado

Cuando se necesita mayor resolución, una chain o un conjunto de chains puede organizarse mediante:

- bindings;
- parámetros;
- runtimes;
- validadores;
- gates;
- permisos;
- fallbacks;
- orden parcial;
- sincronización.

El plan no es obligatorio como estrato nominal en todos los dominios; su función sí puede aparecer cuando la ejecución requiere coordinación situada adicional.

### Ejecución

Es la realización efectiva en el tiempo. Puede desviarse del plan por:

- fallos;
- latencias;
- decisiones locales;
- nueva información;
- degradación;
- contingencias.

### Resultado

Es el estado o efecto observado después de la ejecución. No debe confundirse con la aplicación ni con la intención previa.

## Diagrama

```text
                         ┌─────────────────────┐
                         │    ARQUITECTURA     │
                         │ espacio de capacidad│
                         └─────────┬───────────┘
                                   │
                 ┌─────────────────┼─────────────────┐
                 ▼                 ▼                 ▼
           APLICACIÓN A      APLICACIÓN B      APLICACIÓN C
                 │
          ┌──────┴──────┐
          ▼             ▼
       CHAIN A1       CHAIN A2
          │             │
          └──────┬──────┘
                 ▼
            PLAN SITUADO
                 │
                 ▼
             EJECUCIÓN
                 │
                 ▼
              EFECTO
```

## Invariantes

- la arquitectura contiene más posibilidades que una ejecución particular;
- una aplicación expresa una función reusable, no un evento único;
- una aplicación puede admitir múltiples chains;
- una chain puede variar por estado, disponibilidad, restricciones o contexto;
- el runtime puede degradar o modificar la realización sin redefinir automáticamente la aplicación;
- el resultado observado no sustituye la especificación de la aplicación;
- cada nivel debe poder trazarse al nivel superior que lo autoriza o hace posible.

## Dominio de variación

Puede variar:

- número de aplicaciones;
- granularidad con que se modelan;
- número de chains por aplicación;
- existencia de paralelismo;
- presencia de un plan explícito;
- tipo de runtime;
- grado de autonomía local;
- naturaleza física, organizacional, cognitiva o informática del efecto.

## Anti-patrones

```text
UNA CHAIN EXITOSA
=
LA ARQUITECTURA
```

```text
UN PROCEDIMIENTO
=
TODO EL SISTEMA
```

```text
UNA APLICACIÓN
=
UNA ÚNICA IMPLEMENTACIÓN FIJA
```

```text
EL RESULTADO OBSERVADO
=
LA DEFINICIÓN DE LA CAPACIDAD
```

## Diferencia respecto de patrones anteriores

- `PAT-COG-013` define `CHAIN` como trayectoria derivada de red.
- `PAT-COG-014` define una capacidad reusable como nodo compuesto.
- `PAT-COG-118` distingue posible, disponible, activo y plan.
- `PAT-COG-096` convierte una capacidad nominal en protocolo operativo.

`PAT-COG-126` no redefine ninguno. Añade la **estratificación de niveles** y sus no-equivalencias: arquitectura, aplicación, chain, plan/ejecución y resultado.

## Ejemplos de instanciación

### Sistema organizacional

```text
ARQUITECTURA DE ORGANIZACIÓN
→ APLICACIÓN: GESTIONAR_INCIDENTE
→ CHAIN: reporte → análisis → autorización → reasignación
→ EJECUCIÓN: incidente específico
→ RESULTADO: operación restablecida
```

### Sistema cognitivo

```text
ARQUITECTURA COGNITIVA
→ APLICACIÓN COMPUESTA
→ CHAIN DE OPERADORES
→ EJECUCIÓN SITUADA
→ ARTEFACTO / DECISIÓN / CAMBIO DE ESTADO
```

### Sistema técnico-operacional

```text
ARQUITECTURA DE CAPACIDADES
→ APLICACIÓN FUNCIONAL
→ CHAIN CONCRETA ENTRE NODOS
→ EJECUCIÓN
→ EFECTO
```

La equivalencia es estructural: no implica que las aplicaciones de dominios distintos sean ontológicamente iguales.

---

# PAT-COG-127 — OBJETIVO COMO TRANSICIÓN DE ESTADO MULTIDOMINIO

## Intención

Permitir que una arquitectura conserve identidad cuando cambia la naturaleza del objetivo. En lugar de definir el objetivo mediante un verbo o dominio particular, se representa como una condición deseada sobre el estado del sistema o del entorno.

## Problema

Una arquitectura se vuelve demasiado específica si presupone que todo objetivo debe ser:

- espacial;
- físico;
- destructivo;
- temporal;
- informacional;
- cognitivo;
- organizacional.

El patrón abstrae esas modalidades.

## Firma estructural

```text
ESTADO ACTUAL S(t0)
+
PREDICADO DE OBJETIVO O*
+
CRITERIOS DE ACEPTACIÓN
+
RESTRICCIONES
        ↓
CONFIGURACIÓN / ACCIÓN
        ↓
ESTADO RESULTANTE S(t1)
        ↓
¿O*(S(t1)) = TRUE?
```

Forma compacta:

```text
S0
→ INTERVENCIÓN
→ S1
→ TEST DE OBJETIVO
```

## Dimensiones posibles del estado objetivo

```text
ESPACIAL
TEMPORAL
INFORMACIONAL
COGNITIVO
ORGANIZACIONAL
ECONÓMICO
RELACIONAL
DE RIESGO
DE CALIDAD
MIXTO
```

Un objetivo puede combinar varias dimensiones.

## Ejemplo abstracto espacial

```text
S0:
objeto X se encuentra dentro de región no deseada

O*:
objeto X fuera de la región / condición neutralizada
```

## Ejemplo abstracto temporal

```text
S0:
proyecto incompleto en t0

O*:
proyecto completado bajo criterios C antes de t_deadline
```

## Ejemplo informacional

```text
S0:
estado ambiguo / conocimiento insuficiente

O*:
representación operable con cobertura y confianza mínimas
```

## Ejemplo cognitivo

```text
S0:
receptor no distingue dos conceptos

O*:
receptor puede diferenciarlos y aplicarlos bajo prueba
```

## Invariantes

- el objetivo debe poder expresarse como condición evaluable, aunque sea cualitativa;
- debe existir distinción entre estado actual y estado deseado;
- el objetivo no prescribe necesariamente una única acción;
- varias chains pueden conducir al mismo estado objetivo;
- una misma acción puede contribuir a objetivos distintos según contexto;
- el criterio de éxito debe estar separado del mecanismo que intenta producirlo.

## Regla de no colapso

```text
OBJETIVO
≠
ACCIÓN
```

```text
EFECTO DESEADO
≠
MÉTODO PARA PRODUCIRLO
```

```text
DOMINIO DEL OBJETIVO
≠
IDENTIDAD DE LA ARQUITECTURA
```

## Dominio de variación

Puede variar:

- dimensión dominante;
- horizonte temporal;
- granularidad del estado;
- criterio de suficiencia;
- tolerancia;
- incertidumbre aceptable;
- forma de medir éxito;
- composición de objetivos parciales.

## Fallos característicos

### Objetivo anclado a medio

```text
"usar herramienta X"
```

se toma como fin aunque X sea sólo un medio.

### Objetivo no verificable

```text
"mejorar mucho"
```

sin condición de aceptación.

### Captura del objetivo

Una métrica local sustituye silenciosamente el estado global deseado.

## Diferencia respecto de patrones anteriores

- `PAT-COG-050` modela trayectorias de estados.
- `PAT-COG-063` integra objetivos en un ciclo general.
- `PAT-COG-037` protege el fin frente a medios.

`PAT-COG-127` añade la **normalización del objetivo como estado/predicado multidominio**, permitiendo transferencia entre sistemas donde la dimensión dominante cambia.

---

# FAMILIA Q — COMPOSICIÓN DE CAPACIDAD Y TOPOLOGÍA

---

# PAT-COG-128 — COMPOSICIÓN DE CAPACIDAD DEPENDIENTE DE TOPOLOGÍA

## Intención

Evitar asignar una misma regla de agregación a toda arquitectura. La capacidad resultante de un conjunto de componentes depende de cómo están conectados, qué dependencias son obligatorias, qué rutas son alternativas y qué condición lógica define éxito.

## Problema

La intuición multiplicativa puede ser útil en una cadena estrictamente serial:

```text
A → B → C → D
```

pero no constituye una ley universal para:

- redes con redundancia;
- ramas paralelas;
- votación;
- umbrales;
- sustitución funcional;
- cuellos de botella;
- funciones compensatorias.

## Firma estructural

```text
COMPONENTES
+
TOPOLOGÍA
+
CONDICIÓN DE ÉXITO
+
CALIDAD / DISPONIBILIDAD LOCAL
        ↓
OPERADOR DE COMPOSICIÓN ADECUADO
        ↓
CAPACIDAD SISTÉMICA ESTIMADA
```

## Regla nuclear

```text
CAPACIDAD DEL SISTEMA
≠
SUMA AUTOMÁTICA DE CAPACIDADES LOCALES
```

Y tampoco:

```text
CAPACIDAD DEL SISTEMA
≠
PRODUCTO UNIVERSAL DE CAPACIDADES LOCALES
```

## Casos topológicos básicos

### 1. Dependencia serial AND

```text
A → B → C → D
```

Todos son necesarios.

Heurística cuantitativa posible si las magnitudes son probabilidades compatibles e independientes bajo un modelo válido:

```text
P(success) ≈ P(A) × P(B) × P(C) × P(D)
```

En lectura cualitativa puede dominar el eslabón limitante.

### 2. Redundancia OR

```text
      ┌→ B ─┐
A ────┤     ├→ D
      └→ C ─┘
```

B o C pueden mantener la función.

La caída de uno no implica capacidad cero.

### 3. Cuello de botella

```text
A(0.9) → B(0.3) → C(0.95)
```

La capacidad efectiva puede estar dominada por B aunque los demás nodos sean excelentes.

### 4. Umbral k-de-n

```text
{A, B, C, D, E}
→ requieren al menos 3 contribuciones válidas
```

No corresponde ni a suma simple ni a producto puro.

### 5. Fusión ponderada

```text
A ─┐
B ─┼→ FUSIÓN → RESULTADO
C ─┘
```

Las contribuciones pueden tener pesos distintos y correlaciones.

### 6. Inhibición / gate

```text
A → B → C
    ▲
   GATE
```

La capacidad puede depender de autorización o veto, no sólo de rendimiento técnico.

## Contrato del operador de composición

```yaml
capability_composition:
  target_function:
  topology_type:
  required_nodes: []
  alternative_paths: []
  gates: []
  threshold_rule:
  aggregation_operator:
  assumptions: []
  correlations: []
  uncertainty:
  validation_method:
```

## Invariantes

- primero se identifica la topología, después el operador;
- un modelo numérico declara sus supuestos;
- la relación entre calidad local y capacidad global debe ser trazable;
- redundancia, gates y sustitución cambian la forma de composición;
- una heurística útil en un caso no se promueve automáticamente a ley general.

## Fallos característicos

```text
TODAS LAS CADENAS
→ MULTIPLICAR
```

```text
TODOS LOS NODOS
→ PROMEDIAR
```

```text
MÁS NODOS
→ MÁS CAPACIDAD
```

sin analizar dependencias.

## Diferencia respecto de patrones anteriores

- `PAT-COG-012` ubica la capacidad en el subgrafo.
- `PAT-COG-116` exige alinear función, información y coordinación.
- `PAT-COG-117` representa integración como perfil situado.

`PAT-COG-128` especifica **cómo la topología condiciona la composición de capacidad**, incluyendo la intuición de que la multiplicación puede ser correcta en algunos subgrafos seriales pero no en todos.

---

# PAT-COG-129 — DUALIDAD RUTAS FUNCIONALES / CORTES FUNCIONALES

## Intención

Modelar resiliencia y degradación sistémica como operaciones duales sobre una misma topología funcional.

La función del sistema puede sobrevivir mientras exista al menos una configuración o ruta suficientemente válida para producir el efecto requerido. De manera dual, degradar una capacidad exige afectar un conjunto de nodos, relaciones, permisos o recursos cuya pérdida impida **todas** las rutas funcionales suficientes relevantes.

## Firma estructural

```text
ARQUITECTURA
      ↓
CONJUNTOS DE RUTAS FUNCIONALES SUFICIENTES
      │
      ├─ PATH_SET_1
      ├─ PATH_SET_2
      └─ PATH_SET_3
```

Resiliencia:

```text
FALLO
→ PATH_SET_1 INVALIDADO
→ ¿EXISTE PATH_SET_2 O PATH_SET_3?
   ├─ SÍ → RECOMPOSICIÓN → FUNCIÓN CONTINÚA
   └─ NO → CAPACIDAD PERDIDA / DEGRADADA
```

Disrupción:

```text
IDENTIFICAR CONJUNTO DE CORTE
→ afectar nodos / aristas / permisos / recursos críticos
→ invalidar todas las rutas suficientes
→ función deja de producirse
```

## Definiciones funcionales

### Ruta funcional suficiente

Subgrafo o chain que satisface los requisitos mínimos para producir la función objetivo.

### Conjunto de rutas

Familia de rutas alternativas capaces de mantener la función bajo diferentes condiciones.

### Conjunto de corte funcional

Conjunto de elementos cuya indisponibilidad simultánea impide todas las rutas funcionales suficientes consideradas.

El conjunto de corte puede contener:

- nodos;
- enlaces;
- permisos;
- fuentes;
- recursos;
- sincronización;
- tejido de coordinación;
- capacidades transversales.

No tiene que ser puramente físico.

## Principio

```text
DESTRUIR / PERDER UN NODO
≠
DESTRUIR / PERDER LA FUNCIÓN
```

Y:

```text
CONSERVAR TODOS LOS NODOS
≠
CONSERVAR LA FUNCIÓN
```

si las relaciones críticas están degradadas.

## Relación dual

```text
RESILIENCIA
→ maximiza / preserva rutas funcionales suficientes

DISRUPCIÓN SISTÉMICA
→ encuentra y afecta cortes funcionales
```

## Invariantes

- la unidad de análisis es la función, no el inventario de objetos;
- la pérdida de una ruta no equivale automáticamente a pérdida de capacidad;
- la recomposición puede restaurar capacidad con una topología distinta;
- un enlace o servicio transversal puede ser más crítico que un nodo terminal;
- el análisis debe declarar qué cuenta como función suficiente;
- el corte depende de misión, estado y tiempo.

## Dominio de variación

Puede aplicarse a:

- redes técnicas;
- organizaciones;
- cadenas de suministro;
- sistemas cognitivos;
- arquitecturas de software;
- procesos de investigación;
- pipelines con fallback;
- sistemas humano–IA.

## Anti-patrones

```text
NODO MÁS VISIBLE
=
NODO MÁS CRÍTICO
```

```text
PÉRDIDA DE COMPONENTE
=
PÉRDIDA DE SISTEMA
```

```text
REDUNDANCIA NOMINAL
=
RESILIENCIA REAL
```

## Diferencia respecto de patrones anteriores

- `PAT-COG-046` define recomposición funcional.
- `PAT-COG-059` define intervención funcional-estructural.
- `PAT-COG-012` sitúa capacidad en un subgrafo.

`PAT-COG-129` formaliza su **dualidad topológica**: rutas suficientes para preservar la función frente a conjuntos de corte capaces de impedirla.

---

# FAMILIA R — PROCEDIMIENTOS COMO COORDINACIÓN PRECOMPILADA

---

# PAT-COG-130 — PRECOORDINACIÓN MEDIANTE PROCEDIMIENTO REUSABLE

## Intención

Reducir el costo de coordinación durante una ejecución al codificar por adelantado una parte de las relaciones funcionales, informacionales y de autoridad necesarias para una clase recurrente de situaciones.

Un procedimiento reusable no es sólo una lista de pasos. Puede funcionar como **coordinación precompilada**.

## Problema

Sin precoordinación, cada evento exige reconstruir en runtime:

```text
quién hace qué
+
qué información necesita
+
cuándo actúa
+
qué entrega
+
quién autoriza
+
qué ocurre si falla
```

El procedimiento estabiliza parte de esa estructura antes de que ocurra el caso concreto.

## Firma estructural

### Fase de diseño / entrenamiento

```text
CLASE DE OBJETIVO
+
ARQUITECTURA DISPONIBLE
+
ROLES
+
FLUJOS DE INFORMACIÓN
+
AUTORIDAD
+
HANDOFFS
+
GATES
+
CONTINGENCIAS
        ↓
PROCEDIMIENTO / PLAYBOOK / APLICACIÓN REUSABLE
```

### Fase de runtime

```text
TRIGGER
+
ESTADO SITUADO
+
PROCEDIMIENTO REUSABLE
        ↓
INSTANCIACIÓN
        ↓
AJUSTES LOCALES AUTORIZADOS
        ↓
CHAIN(S) / SUBGRAFO ACTIVO
        ↓
EJECUCIÓN
        ↓
RESULTADO
        ↓
FEEDBACK
        ↓
REVISIÓN DEL PROCEDIMIENTO SI CORRESPONDE
```

## Qué puede quedar precompilado

- roles;
- funciones;
- interfaces;
- información mínima;
- formato de handoff;
- orden parcial;
- condiciones de activación;
- gates;
- autoridad local;
- escalamiento;
- fallbacks;
- criterios de éxito;
- criterios de abortar;
- mecanismos de validación.

## Qué debe permanecer situado

- estado actual;
- disponibilidad real;
- bindings concretos;
- valores de parámetros;
- ruta específica;
- excepciones;
- decisiones que exceden autoridad delegada.

## Invariantes

- el procedimiento codifica una clase de coordinación, no un caso único;
- el procedimiento no reemplaza la evaluación del estado actual;
- una aplicación reusable puede permitir múltiples chains;
- practicar o formalizar un procedimiento puede reducir latencia y ambigüedad de coordinación;
- el runtime conserva capacidad de adaptación dentro de límites autorizados;
- feedback posterior puede modificar futuras versiones mediante cambio gobernado.

## No equivalencias

```text
PROCEDIMIENTO
≠
CHAIN CONCRETA
```

```text
PROCEDIMIENTO
≠
ARQUITECTURA COMPLETA
```

```text
PROCEDIMIENTO ESTABLE
≠
EJECUCIÓN RÍGIDA
```

```text
ENTRENAMIENTO
≠
GARANTÍA DE ÉXITO
```

## Diferencia respecto de patrones anteriores

- `PAT-COG-096` exige convertir capacidades nominales en protocolos operativos.
- `PAT-COG-014` modela capacidades reutilizables.
- `PAT-COG-116` alinea función, información y coordinación.
- `PAT-COG-126` separa arquitectura, aplicación y chain.

`PAT-COG-130` añade la idea diferencial de que un procedimiento reusable **almacena coordinación previamente resuelta** y permite reinstanciarla con menor costo cognitivo/operacional.

## Ejemplos abstractos

### Organización

```text
INCIDENT_RESPONSE_PLAYBOOK
→ roles predefinidos
→ fuentes requeridas
→ gates
→ escalamiento
→ rutas de recuperación
```

### Sistema cognitivo

```text
cApp / método reusable
→ operadores
→ contratos
→ validadores
→ resultados esperados
→ múltiples ejecuciones situadas
```

### Arquitectura distribuida

```text
procedimiento practicado
→ nodos distintos conocen su rol
→ handoffs previsibles
→ menor necesidad de coordinación ad hoc
```

---

# 1. ARQUITECTURAS COMPUESTAS DERIVADAS SIN NUEVO ID

Las siguientes estructuras son combinaciones de patrones existentes y de los cinco patrones nuevos. Se conservan como arquitecturas compuestas porque no requieren un patrón atómico adicional.

---

## 1.1. REPERTORIO DE APLICACIONES SOBRE UNA ARQUITECTURA

```text
PAT-COG-126  estratificación operacional
+
PAT-COG-118  posible → disponible → activo → plan
+
PAT-COG-130  procedimiento reusable
+
PAT-COG-025  objetivo como selector
=
ARQUITECTURA CAPAZ DE ELEGIR E INSTANCIAR APLICACIONES SEGÚN OBJETIVO Y ESTADO
```

Forma:

```text
ARQUITECTURA
├─ APLICACIÓN A
├─ APLICACIÓN B
├─ APLICACIÓN C
└─ APLICACIÓN D
        │
        ▼
OBJETIVO + ESTADO
        │
        ▼
SELECCIÓN / CONFIGURACIÓN
        │
        ▼
CHAIN(S)
        │
        ▼
EJECUCIÓN
```

---

## 1.2. INTEGRACIÓN HETEROGÉNEA SIN HOMOGENEIZACIÓN

La observación de que componentes provenientes de ecosistemas distintos pueden formar una capacidad común no requiere un patrón nuevo si se compone:

```text
PAT-COG-086  contratos fronterizos
+
PAT-COG-090  adaptadores y routing
+
PAT-COG-116  función–información–coordinación
+
PAT-COG-117  integración situada
+
PAT-COG-122  tejido de coordinación
=
INTEGRACIÓN FUNCIONAL DE COMPONENTES HETEROGÉNEOS
```

Principio:

```text
INTEGRACIÓN
≠
HOMOGENEIDAD DE ORIGEN
```

La compatibilidad requerida es funcional, informacional y coordinativa bajo contratos suficientes.

---

## 1.3. PERCEPCIÓN DISTRIBUIDA → EFECTO CONVERGENTE

Ya cubierta en la extensión v0.3 como arquitectura compuesta. Se referencia, no se redefine.

Uso junto con `PAT-COG-127`:

```text
PERCEPCIÓN DISTRIBUIDA
→ REPRESENTACIÓN OPERABLE
→ CONFIGURACIÓN
→ EFECTO CONVERGENTE
→ ESTADO OBJETIVO
```

El efecto puede ser espacial, temporal, informacional, cognitivo u organizacional.

---

## 1.4. RESILIENCIA / DISRUPCIÓN COMO PROBLEMA DUAL

```text
PAT-COG-046  recomposición
+
PAT-COG-059  intervención funcional-estructural
+
PAT-COG-117  integración situada
+
PAT-COG-118  disponibilidad/activación
+
PAT-COG-129  rutas/cortes
=
ANÁLISIS DUAL DE SUPERVIVENCIA Y PÉRDIDA DE CAPACIDAD
```

---

## 1.5. OBJETIVO INDEPENDIENTE DEL MEDIO

```text
PAT-COG-127  objetivo como estado deseado
+
PAT-COG-037  protección teleológica
+
PAT-COG-060  misma lógica / distinto sistema objetivo
=
TRANSFERENCIA DE ARQUITECTURA SIN FIJAR EL MEDIO DE ACCIÓN
```

Esto permite transferir una lógica de sistemas entre dominios sin conservar literalmente el tipo de efecto original.

---

# 2. LEDGER DE ESTRUCTURAS RESALTADAS EN COMANDOS Y SU DISPOSICIÓN

Esta sección no redefine patrones previos. Su función es demostrar cobertura y señalar qué estructuras produjeron patrones nuevos o quedaron correctamente absorbidas por catálogos anteriores.

| Estructura resaltada                                                                                                      | Disposición                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Un objetivo puede completarse mediante función–información–colaboración/coordinación                                      | Ya cubierta por `PAT-COG-116`.                                                                                               |
| Percepción distribuida con fuentes heterogéneas                                                                           | Ya cubierta por `PAT-COG-002`, `007`, `116`, `119`.                                                                          |
| Acción concentrada / acción efectuada desde percepción distribuida                                                        | Arquitectura compuesta ya documentada en v0.3.                                                                               |
| El éxito de una acción depende de la coordinación de la cadena funcional completa                                         | `PAT-COG-012`, `116`, `122`; no requiere nuevo ID.                                                                           |
| Una “materia”, procedimiento o aplicación es una forma de utilizar la arquitectura para un fin                            | Formalizada aquí por `PAT-COG-126` y `PAT-COG-130`.                                                                          |
| BVR entendido como aplicación dentro de una arquitectura mayor                                                            | Instancia de `PAT-COG-126` y `PAT-COG-130`; no patrón dependiente de BVR.                                                    |
| `Radar → C2 → actor → efector` como recorrido concreto                                                                    | `PAT-COG-013` dentro de la estratificación `PAT-COG-126`.                                                                    |
| `kill chain : kill web :: aplicación/paquete : arquitectura mayor`                                                        | `PAT-COG-013`, `014` y nuevo `PAT-COG-126`.                                                                                  |
| Los caminos dentro de una red son chains                                                                                  | Ya cubierta por `PAT-COG-013`.                                                                                               |
| Una cApp es una capacidad compuesta reusable, no la chain concreta                                                        | Ya cubierta por `PAT-COG-014`; `PAT-COG-126` añade su posición estratificada.                                                |
| `[CAPACIDAD COMPUESTA] : ARQUITECTURA :: cApp : COGNICIÓN_CENTRAL`                                                        | Aplicación de `PAT-COG-014`, `060`, `126`.                                                                                   |
| Entrada → proceso interno → resultado como estructura de una capacidad compuesta                                          | Cubierta en parte por `PAT-COG-014` y `096`; la composición no universal del proceso se formaliza en `PAT-COG-128`.          |
| La multiplicación puede ser útil en cadenas seriales, pero no es ley universal                                            | Nuevo `PAT-COG-128`.                                                                                                         |
| Objetivo espacial en una especialización y temporal en otra                                                               | Nuevo `PAT-COG-127`.                                                                                                         |
| `destruir/interceptar una entidad : arquitectura A :: cumplir meta : arquitectura B`                                      | Instancia de `PAT-COG-127` + `PAT-COG-060`.                                                                                  |
| La misma arquitectura debe admitir varias especializaciones sin quedar acoplada a una                                     | Ya cubierta por `PAT-COG-060`, `091`, `101`.                                                                                 |
| Datalink/enlace como mecanismo de coordinación entre componentes                                                          | Ya cubierta por `PAT-COG-122`.                                                                                               |
| El sistema se modifica a partir de sus resultados                                                                         | Ya cubierta por `PAT-COG-041`, `042`, `063`.                                                                                 |
| Grafo dinámico / configuración activa dependiente del estado                                                              | Ya cubierta por `PAT-COG-118` y `020`.                                                                                       |
| Resiliencia como capacidad esencial                                                                                       | Ya cubierta por `PAT-COG-046`, `117`, `118`; dualidad con disrupción formalizada en `PAT-COG-129`.                           |
| No basta afectar una unidad; la pérdida de capacidad ocurre cuando deja de existir una configuración funcional suficiente | Nuevo `PAT-COG-129`, apoyado en `PAT-COG-012`, `046`, `059`.                                                                 |
| Mismo patrón funcional observado a distinta escala                                                                        | Ya cubierta por `PAT-COG-022`, `023`.                                                                                        |
| Descripción por capas + capacidades transversales                                                                         | Ya cubierta por `PAT-COG-121`.                                                                                               |
| Cuadro operacional / representación operable                                                                              | Ya cubierta por `PAT-COG-119`, `120`; queda pendiente su profundización especializada, no un nuevo patrón en este documento. |
| El caso o autor de entrada no debe dominar la arquitectura generalizada                                                   | Aplicación de `PAT-COG-100` y `060`; no se crea nuevo ID.                                                                    |
| Componentes heterogéneos pueden integrarse sin compartir origen o ecosistema                                              | Arquitectura compuesta de `PAT-COG-086`, `090`, `116`, `117`, `122`; no nuevo ID.                                            |
| Procedimientos practicados almacenan relaciones de coordinación y reducen reconstrucción ad hoc                           | Nuevo `PAT-COG-130`.                                                                                                         |

---

# 3. RELACIONES CANDIDATAS CON EL MOTOR DE RETROCONSTRUCCIÓN Y REINSTANCIACIÓN ESTRUCTURAL (MRRE)

Esta sección conserva únicamente **aplicaciones o especializaciones candidatas**. No redefine patrones que el catálogo v0.2 ya atribuye al scaffolding de MRRE.

El material de construcción de MRRE preserva, entre otras decisiones, que:

```text
MRRE
→ ejecuta análisis estructural

MCCR
→ configura módulos, profundidad, mecanismos y consumidor

las capacidades / operaciones / estados / fases
→ deben ser protocolos, no listas nominales
```

A partir de ello pueden observarse las siguientes correspondencias.

## 3.1. Aplicación candidata de `PAT-COG-126`

```text
ARQUITECTURA MRRE
        ↓
APLICACIÓN / OPERACIÓN REUSABLE
(p. ej. retroconstrucción o reinstanciación bajo protocolo)
        ↓
CONFIGURACIÓN SITUADA
(expected_result + campo + restricciones + bindings)
        ↓
CHAIN / SECUENCIA OPERATIVA CONCRETA
        ↓
EJECUCIÓN
        ↓
ARTEFACTOS / RESULTADO
```

**Estado epistemológico:** `STRUCTURAL_MAPPING / CANDIDATE_APPLICATION`, no redefinición del kernel MRRE.

## 3.2. Aplicación candidata de `PAT-COG-130`

El scaffolding de MRRE exige que una operación se describa mediante:

```text
RESPONSABILIDAD
→ TRIGGER
→ INPUT
→ PRECONDICIONES
→ PROCEDIMIENTO
→ ARTEFACTOS
→ OUTPUT
→ GATES
→ FALLOS / RECUPERACIÓN
→ EJEMPLO
→ CONTRAEJEMPLO
→ ACEPTACIÓN
```

Esto puede entenderse como especialización de **precoordinación mediante procedimiento reusable**: una parte de la coordinación futura queda codificada en el protocolo antes de la ejecución particular.

No implica que todo protocolo MRRE sea idéntico a una aplicación operacional en otros dominios.

## 3.3. `PAT-COG-128` como criterio posible de análisis interno

Si una arquitectura retroconstruida contiene dependencias seriales, paralelas, gates o redundancias, MRRE podría describir la **topología de composición** sin asumir que todos los nodos contribuyen mediante la misma función de agregación.

Esto es una aplicación potencial. No se incorpora automáticamente al kernel MRRE.

## 3.4. `PAT-COG-129` como objeto retroconstruible

MRRE podría retroconstruir:

```text
rutas funcionales suficientes
+
cuellos de botella
+
conjuntos de corte
```

cuando la manifestación o sistema analizado contenga evidencia suficiente de esas relaciones.

Debe conservarse el gradiente abductivo de certeza: un cut-set no puede inventarse sólo porque resulte elegante.

---

# 4. REGLAS DE NO COLAPSO AÑADIDAS

```text
ARQUITECTURA
≠
APLICACIÓN
≠
CHAIN
≠
PLAN
≠
EJECUCIÓN
≠
RESULTADO
```

```text
OBJETIVO
≠
ACCIÓN
≠
MEDIO
```

```text
OBJETIVO ESPACIAL
Y
OBJETIVO TEMPORAL
PUEDEN SER
INSTANCIAS DE UNA MISMA FORMA DE TRANSICIÓN DE ESTADO
```

```text
CAPACIDAD SISTÉMICA
≠
SUMA AUTOMÁTICA
≠
PRODUCTO AUTOMÁTICO
DE CAPACIDADES LOCALES
```

```text
RUTA FUNCIONAL
≠
ARQUITECTURA COMPLETA
```

```text
PÉRDIDA DE RUTA
≠
PÉRDIDA DE CAPACIDAD
```

```text
PÉRDIDA DE NODO
≠
PÉRDIDA DE FUNCIÓN
```

```text
PROCEDIMIENTO REUSABLE
≠
EJECUCIÓN RÍGIDA
```

```text
PRECOORDINACIÓN
≠
ELIMINACIÓN DE ADAPTACIÓN EN RUNTIME
```

```text
INTEGRACIÓN HETEROGÉNEA
≠
HOMOGENEIZACIÓN DE COMPONENTES
```

---

# 5. TESTS TRANSVERSALES NUEVOS

## TEST-38 — ¿SE CONFUNDE LA ARQUITECTURA CON UNA APLICACIÓN?

Si todo el sistema queda definido por un solo procedimiento:

```text
ARCHITECTURE_APPLICATION_COLLAPSE
```

## TEST-39 — ¿SE CONFUNDE LA APLICACIÓN CON UNA CHAIN?

Si una ruta concreta se toma como única implementación posible de una capacidad reusable:

```text
APPLICATION_PATH_COLLAPSE
```

## TEST-40 — ¿EL OBJETIVO ESTÁ ANCLADO AL MEDIO?

Si el fin sólo puede expresarse mediante la herramienta o acción prevista:

```text
GOAL_MEANS_COLLAPSE
```

## TEST-41 — ¿EL OBJETIVO TIENE UN ESTADO DE ACEPTACIÓN?

Si no puede explicarse qué condición debe ser verdadera después de la intervención:

```text
UNTESTABLE_OBJECTIVE
```

## TEST-42 — ¿LA LEY DE COMPOSICIÓN RESPETA LA TOPOLOGÍA?

Si se multiplican, suman o promedian componentes sin justificar dependencias, redundancia o gates:

```text
TOPOLOGY_AGGREGATION_MISMATCH
```

## TEST-43 — ¿SE CONFUNDE FALLA DE RUTA CON FALLA DEL SISTEMA?

Si existe otra ruta suficiente pero el sistema se declara incapaz:

```text
FALSE_CAPABILITY_LOSS
```

## TEST-44 — ¿SE DECLARA CAPACIDAD AUNQUE TODAS LAS RUTAS SUFICIENTES ESTÉN CORTADAS?

```text
PHANTOM_CAPABILITY
```

## TEST-45 — ¿EL PROCEDIMIENTO ALMACENA COORDINACIÓN O SÓLO PASOS?

Si no declara roles, información, handoffs, autoridad, gates o contingencias relevantes:

```text
SHALLOW_PROCEDURE
```

## TEST-46 — ¿EL PROCEDIMIENTO PERMITE ADAPTACIÓN SITUADA?

Si obliga a ejecutar una secuencia fija aunque el estado cambie:

```text
PROCEDURAL_BRITTLENESS
```

---

# 6. PREGUNTAS ABIERTAS

1. ¿Debe `APPLICATION` formalizarse como entidad transversal de COGNICIÓN_CENTRAL o permanecer como clase conceptual cuya realización específica puede ser cApp, procedimiento, playbook u otra forma?
2. ¿Qué diferencia mínima debe existir entre `APPLICATION` y `SUBGRAFO_FUNCIONAL` para evitar que sean sinónimos?
3. ¿Una aplicación debe contener chains explícitas o sólo contratos para generar chains en runtime?
4. ¿Conviene representar el objetivo mediante un único `target_state` o mediante un conjunto de predicados parciales con prioridades?
5. ¿Cómo representar objetivos que no son binarios sino graduales, multiobjetivo o sujetos a trade-offs?
6. ¿Qué operadores de composición deben soportarse como primitivas: AND, OR, k-of-n, MIN, MAX, weighted fusion, product, gate, threshold, voting?
7. ¿Cómo distinguir correlación entre fallos de verdadera dependencia topológica al estimar capacidad?
8. ¿Los conjuntos de corte deben modelar sólo infraestructura y recursos o también permisos, información, sincronización y autoridad?
9. ¿Cuándo un procedimiento reusable deja de ser una aplicación y pasa a ser parte de la arquitectura base?
10. ¿Cómo versionar procedimientos para que el feedback mejore futuras instancias sin modificar retrospectivamente ejecuciones históricas?
11. ¿Qué parte de la coordinación debe quedar precompilada y qué parte debe resolverse en runtime?
12. ¿Cómo representar una aplicación capaz de usar simultáneamente varias chains paralelas y recomponerlas durante la ejecución?

---

# 7. PLANTILLA PARA INSTANCIAR LOS PATRONES v0.4

```yaml
pattern_v04_instance:
  pattern_id:
  objective:

  architecture:
    capability_space:
    applications: []

  application:
    id:
    function:
    reusable_contract:
    triggers: []
    information_requirements: []
    coordination_requirements: []
    allowed_variation: []

  situated_execution:
    state_ref:
    selected_chains: []
    bindings: []
    gates: []
    fallbacks: []
    runtime:

  target_state:
    dimensions: []
    predicates: []
    deadline:
    tolerance:
    acceptance_test:

  topology:
    nodes: []
    edges: []
    path_sets: []
    cut_sets: []
    composition_operator:
    assumptions: []

  procedure_precoordination:
    encoded_roles: []
    encoded_handoffs: []
    encoded_authority: []
    encoded_contingencies: []
    runtime_decisions: []

  result:
    observed_state:
    target_satisfied:
    evidence: []
    deviations: []

  validation:
    invariants_preserved: []
    failures: []
    open_questions: []
```

---

# 8. SÍNTESIS

Los patrones añadidos en esta extensión permiten distinguir cinco estructuras que permanecían parcialmente implícitas:

```text
1.
ARQUITECTURA
→ APLICACIÓN
→ CHAIN
→ EJECUCIÓN
```

```text
2.
ESTADO ACTUAL
→ INTERVENCIÓN
→ ESTADO OBJETIVO
```

```text
3.
TOPOLOGÍA
→ DETERMINA
CÓMO SE COMPONE LA CAPACIDAD
```

```text
4.
RUTAS ALTERNATIVAS
↔
CORTES FUNCIONALES
```

```text
5.
COORDINACIÓN DISEÑADA ANTES DEL RUNTIME
→ PROCEDIMIENTO REUSABLE
→ INSTANCIACIÓN SITUADA
```

Juntas producen una lectura más precisa de sistemas complejos:

```text
ARQUITECTURA
= espacio de capacidades

APLICACIÓN
= forma reusable de organizar capacidades para una clase de objetivo

CHAIN
= camino funcional concreto seleccionado en una situación

PROCEDIMIENTO
= coordinación parcialmente precompilada que facilita esa instanciación

OBJETIVO
= condición deseada sobre el estado, no el medio empleado

CAPACIDAD
= propiedad emergente cuya composición depende de la topología

RESILIENCIA
= preservación o recomposición de rutas funcionales suficientes

DISRUPCIÓN SISTÉMICA
= afectación de conjuntos de corte que impiden todas las rutas suficientes relevantes
```

El valor transferible de estas estructuras consiste en que pueden aparecer en paquetes cognitivos, arquitecturas humano–IA, organizaciones, pipelines, sistemas técnicos, herramientas de investigación y modelos de decisión sin conservar el vocabulario del dominio donde fueron reconocidas.

---

# 9. ESTADO

```yaml
catalog_extension:
  id: INT-EXTENSION-CATALOGO-PATRONES-COGNITIVOS-TRANSFERIBLES-004
  version: 0.4.0
  status:
    - EXPLORATORY
    - CROSS_CUTTING
    - NON_CANONICAL

  precedence:
    - PAT-COG-001..063
    - PAT-COG-064..115
    - PAT-COG-116..125

  new_coverage:
    - PAT-COG-126
    - PAT-COG-127
    - PAT-COG-128
    - PAT-COG-129
    - PAT-COG-130

  new_pattern_count: 5
  promotion_required: true

  deduplication_policy:
    - do_not_restate_existing_patterns
    - references_are_allowed_without_redefinition
    - application_is_not_pattern_identity
    - structural_similarity_is_not_ontological_identity
    - user_command_and_model_inference_must_remain_distinguishable

  intended_use:
    - cognitive_package_design
    - architecture_analysis
    - application_design
    - runtime_configuration
    - resilience_analysis
    - structural_transfer
    - goal_modeling
    - capability_composition
    - procedure_design

  warnings:
    - pattern_is_not_automatic_canon
    - topology_must_be_validated_before_quantitative_composition
    - objective_must_not_be_collapsed_into_method
    - procedure_must_not_be_collapsed_into_execution
    - system_loss_must_not_be_inferred_from_single_node_loss
```

**FIN DE LA EXTENSIÓN v0.4.0**
