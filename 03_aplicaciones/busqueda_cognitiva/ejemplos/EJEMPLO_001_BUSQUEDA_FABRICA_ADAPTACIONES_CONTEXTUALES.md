# EJEMPLO 001 — Búsqueda de la Fábrica de Adaptaciones Contextuales

**Aplicación:** `BÚSQUEDA_COGNITIVA v0.1.0`  
**ID del ejemplo:** `EX-BC-001`  
**Operación:** `SEARCH_COGNITIVE_STRUCTURES`  
**Activador:** consulta humana explícita  
**Fecha:** `2026-08-08`  
**Estado:** `PROVISIONAL / EJEMPLO DE USO`  
**Política de escritura de la búsqueda:** `READ_ONLY`; sólo este informe y sus registros de gobierno son persistentes  

## 1. Consulta humana

> Buscar el patrón de **Fábrica de Adaptaciones Contextuales** en diversas partes de los documentos y explicar qué parte del patrón aparece en cada ocasión.

La consulta no se interpretó como una búsqueda exclusiva de la expresión literal. Se buscó la estructura nombrada por esa expresión y también manifestaciones que realizan la misma organización con vocabulario diferente.

```yaml
cognitive_search_query:
  query_id: Q-BC-FAC-001
  issued_by: HUMAN
  objective: localizar_y_explicar_manifestaciones_de_FAC
  relations:
    - FIND_SOURCES
    - FIND_INSTANCES
    - FIND_TRANSFORMATIONS
    - FIND_ANALOGOUS
    - FIND_COMPLEMENTARY
  query_source:
    type: named_structure
    value: FAC-Fabrica-de-Adaptaciones-Contextuales
  scope:
    repository: COGNICION_CENTRAL
    include_active_areas: true
    include_cases: true
    include_history_for_genealogy: true
    external_web: false
  ranking:
    prefer:
      - explicit_identifier
      - preserved_invariants
      - preserved_relations
      - operational_role
      - provenance
  output:
    format: explained_search_example
    expose_uncertainty: true
```

## 2. Alcance realmente consultado

Antes de crear este informe, el repositorio contenía **155 archivos persistentes fuera de `tmp`**: 90 archivos Markdown, 44 TXT, 2 CJS, 1 OWL y 18 PDF.

La recuperación se realizó mediante:

1. búsqueda exacta y léxica sobre los portadores textuales;
2. expansión por términos estructurales: núcleo, invariantes, dominio de variación, contexto, instanciación, proyección, adaptador, manifestación, evidencia y corrección;
3. lectura de los registros internos de artefactos NDJSON, sin confundir el artefacto contenedor con cada documento serializado;
4. extracción textual de los PDF conceptualmente pertinentes;
5. inspección visual de las páginas PDF finalmente usadas como evidencia;
6. comparación de nodos, relaciones, secuencia, invariantes, restricciones y función operativa.

Los PDF de referencias visuales y los artículos externos de psicología del consumidor no se promovieron a candidatos porque su función y vocabulario no satisfacían la firma objetivo. El historial se incluyó expresamente para reconstruir la genealogía, pero no recibió precedencia sobre las fuentes activas.

## 3. Firma estructural objetivo

La fuente más explícita permite reconstruir la estructura así:

```text
NÚCLEO PRESERVABLE
  + COMPOSICIÓN CONTEXTUAL EXPLÍCITA
      sujeto + medio + distribución + ejecución
  + INTENCIÓN DE INTERVENCIÓN
  → CASO DE PROYECCIÓN CONTEXTUAL
  → TRANSFORMACIÓN CONTEXTUAL REGULADA
      heurísticas + restricciones + régimen de variación legítima
  → INTERVENCIÓN SITUADA
  → EVIDENCIA DE RETORNO
  → CORRECCIÓN ACUMULATIVA
  → futuras transformaciones del mismo núcleo
```

### Invariantes usados para calificar candidatos

- Existe una identidad o núcleo que debe seguir siendo reconocible.
- El contexto modifica la realización, no sustituye arbitrariamente el núcleo.
- Se distingue lo preservable de lo variable.
- La transformación está mediada por reglas, restricciones o un adaptador.
- La operación desemboca en una salida situada y verificable.
- La evidencia del entorno puede corregir realizaciones posteriores.

Una manifestación puede ser parcial. Por ejemplo, un documento puede formalizar el adaptador sin describir la fábrica completa. En esos casos se declara el componente encontrado y no se presenta como equivalencia total.

## 4. Resumen de resultados

| Resultado | Parte localizada | Nivel principal | Correspondencia | Estado de la evidencia |
|---|---|---:|---|---|
| R01 | Definición completa de FAC | L0 + L5 | ALTA | Fuente activa `A3 / STABLE` |
| R02 | Formulación introductoria núcleo–variación–contexto | L1 + L5 | ALTA, incompleta | Documento `A5 / WORKING` |
| R03 | Patrón fundador de la Teoría de Máquinas Cognitivas | L1 + L5 | ALTA, comprimida | Fuente `A3 / WORKING` |
| R04 | Instancia Contextual como unidad producida por la fábrica | L0 + L4 | ALTA, componente | Artefacto de aplicación `A3 / WORKING` |
| R05 | Protocolo ACCD como operador de transformación | L4 + L5 | ALTA, mecanismo | Fuente `A3 / PROVISIONAL` |
| R06 | Adaptador-cApp como ejecutor materializante | L4 + L5 | ALTA, componente | Memoria `A4 / RAW` |
| R07 | Proyección Publisher como caso gobernado | L4 + L5 | ALTA, aplicación | Memoria `A4 / RAW` |
| R08 | Entidad federada como múltiples ramas del mismo núcleo | L0 + L4 | ALTA, aplicación | Artefacto de aplicación `A3 / WORKING` |
| R09 | Principios psicológicos como patrones transcontextuales | L4 + L5 | MEDIA-ALTA, aplicación parcial | Fuente `A3 / PROVISIONAL` |
| R10 | Canal/biblioteca como infraestructura derivativa | L3 + L5 | MEDIA, soporte de fábrica | Fuente `A3 / PROVISIONAL` |
| R11 | Automóvil producido en plantas distintas | L4 + L5 | ALTA, analogía | Caso `A5 / WORKING` |
| R12 | Cocina mexicana: identidad, realización, feedback y tradición adaptativa | L4 + L5 | ALTA, analogía completa | PDF derivado `A5 / GENERATED` |
| R13 | Una Instancia Contextual proyectada a cuatro salidas | L4 + L5 | ALTA, ejecución del sistema | PDF derivado `A3 / PROVISIONAL` |
| C01 | Reglas para validar funciones cognitivas reutilizables | L5 + L6 | ALTA, complemento | PDF derivado `A3 / PROVISIONAL` |

## 5. Explicación de cada aparición

### R01 — La definición fuente y el patrón completo

**Localización:** `FILE-CC-004`, registro interno `fabrica-de-adaptaciones-contextuales.txt` dentro de [`ART_core_tmc.txt`](../../../01_nucleo_cognitivo/teoria_tmc/ART_core_tmc.txt).

Es la coincidencia rectora. Nombra `FAC-Fabrica-de-Adaptaciones-Contextuales` y define una arquitectura capaz de realizar el mismo núcleo en varios contextos conservando identidad funcional. No se limita al par núcleo/contexto: establece la cadena completa de composición contextual, transformación regulada, intervención, evidencia y corrección acumulativa.

**Parte que cumple:** define la identidad, todos los componentes, sus relaciones, los invariantes, el dominio de variación y los criterios de aplicación y de falla.

**Límite:** el registro es una formalización conceptual; no constituye por sí mismo una implementación automática de la fábrica.

### R02 — La formulación introductoria del patrón

**Localización:** `FILE-CC-071`, [`analisis-de-estructuras.pdf`, página 1](../../../01_nucleo_cognitivo/cnode/analisis-de-estructuras.pdf).

El documento introduce literalmente la Fábrica de Adaptaciones Contextuales mediante cuatro elementos: núcleo central, invariantes, dominio de variación y contexto. En la misma página aplica el esquema a la venta de seguros, la enseñanza de un concepto y la creación de contenido para nichos diferentes.

**Parte que cumple:** explica de manera pedagógica cómo preservar una identidad y variar su modo de presentación según el destinatario.

**Límite:** es una formulación temprana. Todavía no explicita composición contextual multidimensional, intervención situada, evidencia de retorno ni corrección acumulativa.

### R03 — El patrón como punto de partida de las máquinas cognitivas

**Localización:** `FILE-CC-074`, [`maquinas-cognitivas.txt`, líneas 38–48](../../../01_nucleo_cognitivo/teoria_tmc/maquinas-cognitivas.txt).

La teoría parte de una observación transversal: un núcleo conserva identidad, se adapta a contextos distintos y utiliza un dominio de variación sin tocar sus invariantes. El texto llama a esto una fábrica y la resume como una plantilla base que produce realizaciones locales.

**Parte que cumple:** muestra que FAC no es sólo una aplicación lateral; es uno de los patrones generativos desde los cuales se generalizan estructuras cognitivas, familias, proyección, cNodes y cApps.

**Límite:** esta aparición comprime el patrón en identidad más variación. La versión extensa de `FILE-CC-004` añade gobierno de la transformación y aprendizaje por retorno.

### R04 — La Instancia Contextual como producto intermedio

**Localización:** `FILE-CC-019`, registro interno `definiciones/planteamiento-instancia-contextual-v2.md` de [`ART_arquitectura-operativa-accd.txt`](../../../03_aplicaciones/creacion_de_contenido/ART_arquitectura-operativa-accd.txt), especialmente la sección 33.

El documento expresa que la fábrica recibe una realización objetivo, una Instancia Regional, un caso, contexto, restricciones e intención; produce una **Instancia Contextual compatible con un adaptador**.

**Parte que cumple:** materializa el `Caso de Proyección Contextual`. Convierte condiciones dispersas en una configuración operable anterior a la salida final.

**Límite:** la Instancia Contextual no es la fábrica ni la manifestación. Es el objeto intermedio sobre el que actuará el mecanismo de transformación.

### R05 — El protocolo ACCD como operador de transformación

**Localización:** `FILE-CC-096`, [`base_teorica_ecuacion_de_protocolo_ACCD.md`, líneas 12–28 y 405–439](../../../03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md).

La ecuación organiza `estructura cognitiva + instancia contextual + realización + protocolo = manifestación codominial`. El protocolo recibe una construcción conceptual y una configuración contextual, y las proyecta al codominio de una realización.

**Parte que cumple:** formaliza la **transformación contextual regulada** y la conversión en **intervención situada**. El codominio funciona como restricción de salida: no cualquier producto cuenta como realización válida.

**Límite:** la ecuación describe con mucha precisión el tramo productivo, pero no agota por sí sola el retorno del entorno ni la corrección histórica de futuras adaptaciones.

### R06 — El adaptador-cApp como ejecutor local

**Localización:** `FILE-CC-028`, registro interno `perfiles-digitales/arquitectura-comercial/artefacto/modelos-base/adaptador/relacion-capp-adaptador.md` de [`ART_incubacion-conceptual.txt`](../../../04_conocimiento_y_contexto/memoria_conceptual/ART_incubacion-conceptual.txt).

El adaptador aparece como una cApp especializada en proyección contextual: recibe una Instancia Contextual suficientemente determinada y la transforma, bajo protocolo, en una materialización de un codominio definido.

**Parte que cumple:** implementa localmente el puente `caso configurado → transformación → salida`. Sus invariantes, entrada estructurada y criterios de validez impiden que adaptar signifique improvisar.

**Límite:** el propio paquete FAC advierte que un adaptador no equivale a la fábrica completa. No decide por sí solo qué núcleo preservar, qué contexto componer ni cómo acumular evidencia.

### R07 — La proyección Publisher como unidad de operación

**Localización:** `FILE-CC-028`, registro interno `perfiles-digitales/arquitectura-comercial/artefacto/bibliografia/proyeccion-contextual.txt` de [`ART_incubacion-conceptual.txt`](../../../04_conocimiento_y_contexto/memoria_conceptual/ART_incubacion-conceptual.txt).

El caso Publisher articula un núcleo con sujeto, distribución, intención, restricciones y heurísticas para producir una pieza operable. El texto distingue el núcleo, la operación de proyección, la pieza, la recepción y la convertibilidad.

**Parte que cumple:** aplica FAC al sistema editorial/digital y evita reducirlo a una “fábrica de piezas”. Lo que se fabrica son proyecciones gobernadas; la pieza visible es una salida, no el origen del sistema.

**Límite:** está preservado dentro de memoria conceptual `RAW`; debe tratarse como formulación de trabajo y no como autoridad equivalente al núcleo.

### R08 — La entidad federada como diversificación coordinada

**Localización principal:** `FILE-CC-019`, registro interno `definiciones/entidad-federada.md` de [`ART_arquitectura-operativa-accd.txt`](../../../03_aplicaciones/creacion_de_contenido/ART_arquitectura-operativa-accd.txt).

Una misma ACCD comparece a través de microentidades, canales o superficies diferenciadas. Las ramas comparten núcleo portable y contrato estructural, pero se ajustan a distintos sujetos, regímenes de distribución, umbrales de atención y formas de valor.

**Parte que cumple:** muestra que una fábrica puede producir no sólo piezas, sino una **constelación coordinada de realizaciones**. La identidad se conserva en una capa superior y cada rama especializa su modo de comparecer.

**Límite y duplicados:** el mismo documento también está serializado en `FILE-CC-028` y `FILE-CC-054`. Son representaciones duplicadas o genealógicamente vinculadas, no tres corroboraciones independientes.

### R09 — Principios psicológicos como patrones transcontextuales

**Localización:** `FILE-CC-092`, [`modelo_principios_psicologicos_patrones_transcontextuales.md`, líneas 19–53](../../../03_aplicaciones/campos_atencionales/modelos/principios_psicologicos/modelo_principios_psicologicos_patrones_transcontextuales.md).

El modelo conserva una relación estable entre estímulo, mecanismo mental y reacción probable, y la realiza de manera diferente según medio, sección, segmento y pieza publicitaria. La secuencia explícita es `principio → núcleo estable → adaptación contextual → manifestación → resultado medible`.

**Parte que cumple:** proyecta FAC al diseño publicitario y añade un retorno medible que puede alimentar refinamiento.

**Límite:** un principio psicológico no determina por sí solo toda la intervención. Su uso depende de evidencia, moderadores y restricciones éticas; por eso se califica como aplicación parcial y provisional.

### R10 — Canal y biblioteca como soporte de derivaciones

**Localización activa:** `FILE-CC-060`, [`canales_como_infraestructura.md`, líneas 135–137 y 214–234](../../../03_aplicaciones/creacion_de_contenido/modelos_expresivos/canales_como_infraestructura.md).  
**Antecedente:** `FILE-CC-068`, [`escenas_reutilizables.md`, líneas 376–381](../../../90_historial/desarrollo_conceptual/biblioteca_escenica_composable/escenas_reutilizables.md).

El canal se concibe como infraestructura que entrega escenas o unidades con núcleo reconocible, dominio de variación, documentación y puntos de adaptación. Otros agentes pueden convertirlas en animación, música, doblaje, meme, análisis, videojuego u otras obras.

**Parte que cumple:** aporta el **repositorio de núcleos proyectables** y sus superficies de adaptación. Hace posible la producción repetida de variaciones contextualizadas.

**Límite:** una biblioteca no es automáticamente una fábrica. Para completar FAC necesita selección del caso, transformación regulada, salida situada, evidencia y corrección.

### R11 — Fabricación del mismo automóvil en plantas distintas

**Localización:** `FILE-CC-036`, [`fabrica.txt`, líneas 14–18, 62–64, 262–289 y 332–335](../../../05_casos_y_ejemplos/cnode/fabrica.txt).

El diseño, las especificaciones, tolerancias y funciones constituyen el núcleo; maquinaria, proveedores, regulación, clima, habilidades y logística constituyen condiciones locales. Cada planta puede cambiar la secuencia de ensamblaje y distribución del trabajo sin perder la identidad del automóvil. Los vehículos y reportes de calidad son salidas y evidencia.

**Parte que cumple:** es una analogía estructural fuerte porque preserva identidad, contexto, variación controlada, proceso productivo, manifestación y validación.

**Límite:** la evidencia industrial está centrada en conformidad y calidad. Para equivaler plenamente a FAC debe explicitar cómo los reportes corrigen heurísticas y restricciones de plantas futuras.

### R12 — Cocina mexicana, variación regional y tradición adaptativa

**Localización:** `FILE-CC-003`, [`COGNICION_CENTRAL_EXPLICADA_CON_ANALOGIAS_v0_1.pdf`, página 13](../../../00_gobierno/explicaciones/COGNICION_CENTRAL_EXPLICADA_CON_ANALOGIAS_v0_1.pdf).

La página relaciona identidad del platillo, memoria distribuida, técnicas, preparación concreta, prueba/ajuste, tradición adaptativa y cocinas regionales. La pregunta sobre cuánto puede cambiar un mole sin dejar de reconocerse delimita el régimen de variación legítima.

**Parte que cumple:** es una analogía casi completa: identidad, contexto regional, realización, feedback, corrección y repetición histórica. Además, muestra que el conocimiento que preserva el núcleo puede estar distribuido entre receta, cuerpo y comunidad.

**Límite:** el PDF declara sus analogías como superficies didácticas. Sirven para comprender y transferir la estructura, pero no sustituyen la definición formal de `FILE-CC-004`.

### R13 — Una Instancia Contextual y cuatro manifestaciones

**Localización:** `FILE-CC-010`, [`Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf`, página 35](../../../01_nucleo_cognitivo/arquitecturas/Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf).

La misma Instancia Contextual de un proyecto industrial se proyecta a brief ejecutivo, slides, video de seguridad y dashboard. Cada salida tiene una función distinta. En la misma página aparece la jerarquía de evidencia `fuente → manifestación → observación → feedback → evidencia validada → corrección → nueva versión`.

**Parte que cumple:** realiza de manera integrada la multiplicación contextual de salidas y el circuito de retorno. La continuidad no depende de que las cuatro piezas tengan la misma forma, sino de que procedan de la misma configuración trazada y preserven su estructura relevante.

**Límite:** la página muestra el sistema por jerarquías; para auditar cada transformación todavía deben consultarse los contratos y adaptadores específicos de cada salida.

### C01 — Documento complementario de validación

**Localización:** `FILE-CC-009`, [`Arquitecturas_Cognitivas_Reutilizables_COGNICION_CENTRAL.pdf`, página 19](../../../01_nucleo_cognitivo/arquitecturas/Arquitecturas_Cognitivas_Reutilizables_COGNICION_CENTRAL.pdf).

No es una instancia independiente de FAC. Proporciona criterios para saber si una función que participa en la fábrica es realmente reutilizable: rol explícito, entrada delimitada, transformación, salida tipificada, invariantes, dominio de variación, validación, repetibilidad y transferibilidad.

**Parte que cumple:** funciona como validador de componentes y como criterio de integración `L6`.

**Límite:** valida la capacidad de adaptación, pero no constituye por sí mismo una adaptación ni una fábrica.

## 6. Estructura común reconstruida a partir de las apariciones

La búsqueda permite distinguir capas que estaban distribuidas entre documentos:

```text
CAPA 1 — IDENTIDAD
  fuente estructural / núcleo / invariantes

CAPA 2 — ESPACIO DE POSIBILIDADES
  dominio de variación / instancia regional / biblioteca reusable

CAPA 3 — CONFIGURACIÓN DEL CASO
  contexto + intención + restricciones → instancia contextual

CAPA 4 — REALIZACIÓN
  adaptador o protocolo → codominio → intervención o manifestación

CAPA 5 — DIVERSIFICACIÓN
  múltiples piezas, canales, plantas, regiones o superficies

CAPA 6 — RETORNO
  observación → evidencia → validación → corrección acumulativa
```

Esta reconstrucción es una **inferencia de BÚSQUEDA_COGNITIVA**. Ningún documento de aplicación aislado contiene necesariamente las seis capas con el mismo vocabulario; la definición FAC de `FILE-CC-004` es la que autoriza su integración como una estructura común.

## 7. Lo que la búsqueda habría perdido si sólo buscara palabras

Una búsqueda literal habría recuperado con facilidad R01, R02, R03, R08, R10 y algunas referencias internas. Habría tratado débilmente o perdido:

- la ecuación de protocolo de R05, aunque ejecuta el corazón transformador del patrón;
- el adaptador-cApp de R06, aunque materializa el paso hacia una salida;
- la proyección múltiple y el ciclo de evidencia de R13;
- la correlación entre ramas o manifestaciones que comparten una estructura generativa;
- el papel complementario del validador C01.

Éste es precisamente el valor diferencial del ejemplo: localizar una estructura por las relaciones que conserva, no sólo por el nombre que recibe.

## 8. Candidatos rechazados o degradados

- Una mención aislada de “adaptación” fue rechazada cuando no permitía identificar núcleo, contexto y transformación.
- Las traducciones o cambios de formato sin invariantes declarables no se consideraron FAC.
- Las listas de variantes sin una identidad común se degradaron a coincidencia léxica.
- Una biblioteca de componentes sin caso, intención ni feedback se calificó como infraestructura complementaria, no como fábrica completa.
- Las copias del mismo documento dentro de varios artefactos no se contaron como evidencia independiente.
- Los documentos históricos se usaron para genealogía y contraste, no para desplazar formulaciones activas.

## 9. Respuesta final de la búsqueda

La **Fábrica de Adaptaciones Contextuales** no está confinada a un solo archivo. Dentro de COGNICION_CENTRAL aparece como:

1. patrón conceptual explícito;
2. punto de partida de la Teoría de Máquinas Cognitivas;
3. generador de Instancias Contextuales;
4. transformación implementada por protocolos y adaptadores;
5. arquitectura de proyección Publisher;
6. diversificación federada de canales;
7. transferencia de principios psicológicos entre medios;
8. infraestructura de escenas y obras derivables;
9. analogía industrial de producción distribuida;
10. analogía cultural de variación regional;
11. sistema multi-salida con evidencia y corrección.

La conclusión estructural es:

> **FAC es el patrón que gobierna cómo una identidad operativa puede producir realizaciones diferentes bajo condiciones situadas, aprender de sus resultados y seguir siendo la misma estructura.**

## 10. Incertidumbre y siguientes operaciones permitidas

```yaml
uncertainty:
  overall: MEDIUM_LOW
  reasons:
    - varios resultados son documentos provisionales o memoria RAW
    - algunos componentes sólo realizan una parte de la fábrica
    - existen representaciones duplicadas dentro de artefactos
    - aún no existe un REGISTRO_DE_ESTRUCTURAS_COGNITIVAS operativo

permitted_next_operations:
  - comparar_FAC_con_otra_estructura
  - materializar_un_mapa_de_dependencias_con_autorizacion
  - convertir_la_firma_en_caso_de_prueba
  - buscar_instancias_en_nuevos_archivos
  - evaluar_si_un_sistema_propuesto_califica_como_FAC

not_performed:
  - modificar_fuentes
  - promover_resultados_al_canon
  - ejecutar_intervenciones_externas
  - tratar_inferencias_como_hechos_fuente
```

