# POLITICA DE ORGANIZACION DE COGNICION_CENTRAL

**ID:** `ORG-CC`  
**Versión:** `1.9.0`
**Fecha:** `2026-08-08`  
**Autoridad:** humano  
**Estado:** vigente

## 1. Propósito

Mantener el repositorio legible por humanos e IA a medida que crece, preservando autoridad, identidad, procedencia, versiones y capacidad de recuperación.

La organización física es una superficie de navegación. El significado completo de un archivo resulta de su ubicación más los metadatos registrados.

## 2. Principio de clasificación

La ubicación primaria se decide por la pregunta:

> ¿Qué función cumple este archivo dentro de COGNICION_CENTRAL?

No se decide principalmente por tema, extensión, tamaño o prefijo del nombre.

## 3. Clases operativas

| Código | Carpeta | Función dominante |
|---|---|---|
| `GOV` | `00_gobierno` | define estado, autoridad, protocolos y registros |
| `CORE` | `01_nucleo_cognitivo` | define estructuras y capacidades cognitivas reutilizables |
| `METHOD` | `02_metodos_y_herramientas` | describe procedimientos o ejecuta utilidades transversales |
| `APP` | `03_aplicaciones` | adapta la arquitectura a un objetivo o dominio específico |
| `CONTEXT` | `04_conocimiento_y_contexto` | aporta memoria, fuentes, notas o evidencia recuperable |
| `CASE` | `05_casos_y_ejemplos` | demuestra, enseña o valida una estructura mediante instancias |
| `ARTIFACT` | `06_artefactos_generados` | conserva salidas serializadas generadas por el sistema |
| `HIST` | `90_historial` | preserva versiones sustituidas, genealogía y material inmutable |
| `INBOX` | `99_entrada` | recibe archivos aún no clasificados |

## 4. Parámetros obligatorios

Cada archivo debe poder describirse con los siguientes campos:

```yaml
file_record:
  id: FILE-CC-NNN
  name:
  current_path:
  previous_path:
  operational_class: GOV | CORE | METHOD | APP | CONTEXT | CASE | ARTIFACT | HIST | INBOX
  function:
  authority: A1 | A2 | A3 | A4 | A5 | A6
  lifecycle: LIVE | STABLE | WORKING | PROVISIONAL | RAW | SUPERSEDED | IMMUTABLE | GENERATED
  representation: SOURCE | PRIMARY_SOURCE | ARTIFACT_SNAPSHOT | DERIVED_PDF | ONTOLOGY | SCRIPT | NOTES
  domain:
  version:
  dependencies: []
  related_files: []
  duplicate_of:
  decision:
  last_reviewed:
```

## 5. Niveles de autoridad documental

| Nivel | Significado |
|---|---|
| `A1` | canon vivo aprobado |
| `A2` | protocolo operativo o decisión explícita vigente |
| `A3` | módulo, método o aplicación formalizada |
| `A4` | fuente de contexto, evidencia o memoria autorizada |
| `A5` | caso, ejemplo, explicación o artefacto derivado |
| `A6` | borrador, discusión, versión sustituida o material histórico |

La autoridad documental no sustituye la soberanía humana. Un comando humano actual y explícito puede ordenar una revisión, pero el cambio persistente debe quedar registrado.

## 6. Ciclo de vida

- `LIVE`: documento vivo que puede recibir cambios versionados.
- `STABLE`: estructura formalizada que sigue siendo referencia activa.
- `WORKING`: borrador activo en desarrollo.
- `PROVISIONAL`: propuesta suficientemente desarrollada, aún pendiente de validación.
- `RAW`: materia prima sin consolidar.
- `SUPERSEDED`: reemplazado por una versión posterior.
- `IMMUTABLE`: fotografía histórica que no debe modificarse.
- `GENERATED`: salida producida a partir de otras fuentes.

## 7. Representaciones

- `SOURCE`: documento activo que desarrolla directamente una estructura.
- `PRIMARY_SOURCE`: publicación, corpus o documento externo original que funciona como evidencia primaria; no implica adopción de sus conclusiones por el proyecto.
- `ARTIFACT_SNAPSHOT`: serialización de un proyecto o conjunto de archivos; no equivale al proyecto vivo.
- `DERIVED_PDF`: realización visual o portable derivada de fuentes y decisiones.
- `ONTOLOGY`: vocabulario, clases o relaciones formalizadas en un lenguaje ontológico.
- `SCRIPT`: herramienta ejecutable.
- `NOTES`: discusión, prompt, transcripción o material de procedencia.

El prefijo `ART_` identifica una representación, no una carpeta obligatoria. Por ejemplo, `ART_core_tmc.txt` se ubica en el núcleo porque su función dominante es teórica, aunque su representación sea un artefacto.

## 8. Árbol de decisión para archivos nuevos

```text
ARCHIVO NUEVO
  ↓
99_entrada
  ↓
¿modifica autoridad o estado vigente?
  ├─ sí → GOV; requiere decisión humana explícita
  └─ no
      ↓
¿define una capacidad cognitiva reusable?
  ├─ sí → CORE
  └─ no
      ↓
¿define un procedimiento o herramienta transversal?
  ├─ sí → METHOD
  └─ no
      ↓
¿persigue un objetivo de dominio específico?
  ├─ sí → APP
  └─ no
      ↓
¿aporta memoria, evidencia o contexto?
  ├─ sí → CONTEXT
  └─ no
      ↓
¿demuestra o enseña mediante una instancia?
  ├─ sí → CASE
  └─ no
      ↓
¿es una salida serializada generada?
  ├─ sí → ARTIFACT
  └─ no
      ↓
¿está sustituido o sólo se conserva por genealogía?
  ├─ sí → HIST
  └─ no → permanece en INBOX con estado pendiente
```

## 9. Procedimiento de ingreso

1. Depositar el archivo en `99_entrada` sin renombrarlo.
2. Comprobar extensión, tamaño, legibilidad y hash.
3. Detectar duplicados exactos y versiones semánticamente relacionadas.
4. Identificar función dominante, autoridad, ciclo de vida y representación.
5. Identificar dependencias y referencias internas.
6. Proponer ubicación y estado.
7. Solicitar decisión humana si el ingreso afecta canon, esencia, permisos o precedencia.
8. Mover el archivo sin modificar su contenido.
9. Añadirlo al registro de archivos y al README de destino.
10. Registrar el evento en la bitácora.

### Delimitación del alcance de ingreso

- Una lista de archivos explícitos constituye el alcance operativo del evento.
- Una carpeta personal amplia —por ejemplo, `Escritorio` o `Documentos`— no se incorpora por el solo hecho de ser mencionada junto a archivos. Debe presentarse una subcarpeta temática delimitada o una instrucción inequívoca para inventariarla.
- Toda exclusión de un contenedor amplio se registra en la bitácora para que la decisión pueda repetirse en ingresos futuros.

### Señales de vigencia y genealogía

- Las marcas de procedencia como `legacy`, `deprecated`, `archive` o equivalentes son señales de revisión, no meros nombres de carpeta.
- Antes de clasificar una fuente marcada de ese modo, se buscan versiones posteriores o correcciones semánticas dentro de su contexto inmediato.
- Si existe sustitución o corrección, el archivo se preserva en `90_historial` con autoridad `A6`; sus ideas reutilizables no vuelven vigente el modelo completo.
- Materializar una dependencia resuelve su localización, pero no le concede autoridad activa ni canónica.
- En una pareja explícita `v1`/`v2`, la versión anterior se conserva en historial y la posterior sólo adquiere el estado activo que justifiquen su contenido y validación; el número de versión no concede autoridad canónica.
- Un estado autodeclarado dentro de un archivo no prevalece sobre errores, marcadores incompletos o contradicciones verificables durante el ingreso.

### Documentación, herramientas y aplicaciones

- Un documento que contiene código embebido se registra como `SOURCE` o `NOTES`; sólo recibe representación `SCRIPT` si el archivo mismo es una unidad ejecutable autónoma.
- Cuando un proyecto coordina componentes reutilizables, la definición y configuración del proyecto se ubican en `APP`, mientras los procedimientos transversales permanecen en `METHOD`.
- Marcadores de cita dependientes de una conversación o interfaz externa no se consideran referencias resolubles; las relaciones persistentes deben registrarse mediante rutas o IDs locales.

### Excepción para documentos generados internamente

Un documento creado dentro del repositorio como resultado directo de un comando humano puede generarse en su ubicación definitiva cuando su función, clase, autoridad y estado ya estén determinados. No necesita simular un tránsito físico por `99_entrada`, pero debe recibir ID, hash, registro, README de destino y evento de bitácora. Esta excepción no aplica a archivos externos ni permite integrar silenciosamente contenido al canon.

### Registro semántico de estructuras cognitivas

- `REGISTRO_DE_ARCHIVOS.md` gobierna unidades físicas; `01_nucleo_cognitivo/registro_estructuras_cognitivas` gobierna identidades estructurales que pueden manifestarse en varios portadores.
- Una entrada del registro semántico debe declarar identidad, rol, firma, invariantes, variación, funcionamiento, ejemplos trazables, validación, frecuencia o criterio de admisión, versión y límites.
- Una entrada generada por búsqueda puede formar parte del núcleo activo como `A3 / PROVISIONAL` sin adquirir autoridad canónica. Su promoción a `A1` requiere una decisión humana separada.
- Las fotografías extensas de conteos, firmas, coincidencias y deduplicación se conservan en `06_artefactos_generados`; no se confunden con las estructuras descritas en el núcleo.

### README como interfaz de una subunidad del artefacto

- COGNICION_CENTRAL se interpreta como un artefacto integral cuya frontera es el repositorio completo. El README raíz es su manifiesto y punto de entrada.
- Cada carpeta persistente debe contener un README que la describa como subunidad del artefacto, no sólo como contenedor de archivos.
- La ficha mínima declara `Función`, `Entradas`, `Salidas`, `Consumidores` y `Límite`.
- `Función` identifica la responsabilidad o transformación dominante; `Entradas` y `Salidas` hacen explícito el flujo cognitivo; `Consumidores` registra qué otras partes dependen de la unidad; `Límite` evita transferencias indebidas de autoridad, alcance o evidencia.
- Crear, retirar o cambiar la función dominante de una carpeta exige actualizar su README y reflejar la decisión en política, registro o bitácora según corresponda.
- Una serialización del repositorio representa una fotografía versionada del artefacto integral y debe declarar alcance, exclusiones, fecha, herramienta y hash. No sustituye automáticamente la representación viva.

## 10. Convenciones físicas

- Las carpetas utilizan prefijo numérico para expresar orden de consulta, no autoridad absoluta.
- Los nombres de carpeta usan `snake_case` ASCII para estabilidad entre sistemas.
- Los nombres originales de archivo se preservan salvo colisión, ambigüedad grave o orden humano explícito.
- No se crean copias para representar relaciones múltiples; se usan enlaces y registros.
- La raíz conserva sólo el README y las carpetas estructurales.
- Cada carpeta contiene un README que declara función, contenido y reglas de admisión.

## 11. Reglas de versión e historial

- El archivo canónico sin versión representa el estado vivo.
- Las versiones con sufijo se mueven a `90_historial` y son inmutables.
- Una versión ampliada puede sustituir operativamente a una anterior sin borrarla.
- La similitud no equivale a duplicación; sólo un hash idéntico demuestra igualdad binaria.
- Una versión histórica nunca se usa como fuente vigente si existe una versión activa aprobada.

## 12. Política de recuperación para IA

Para cada tarea, la IA debe recuperar el conjunto mínimo suficiente:

```text
canon y reglas pertinentes
+ módulo activo
+ dependencias directas
+ contexto necesario
+ evidencia o caso cuando aporte validación
```

No debe cargar indiscriminadamente todo el repositorio ni tratar repeticiones como evidencia independiente.

## 13. Cambio de esta taxonomía

Un cambio compatible —nueva subcarpeta o aclaración— incrementa `MINOR` o `PATCH`. Un cambio en las clases principales o sus reglas de precedencia incrementa `MAJOR`. Todo cambio debe actualizar esta política, los README afectados, el registro y la bitácora.

## 14. Historial de la política

- `1.9.0` — Se reconoce el repositorio completo como artefacto cognitivo integral y se estandarizan los README como interfaces de sus subunidades mediante función, entradas, salidas, consumidores y límite. Se distingue la representación viva de sus serializaciones fechadas. No cambian las clases principales ni su precedencia.
- `1.8.0` — Se formalizan el registro semántico de estructuras cognitivas dentro del núcleo y una subárea de artefactos para fotografías de BÚSQUEDA_COGNITIVA. Se separan identidad estructural, portador físico y resultado estadístico; las nuevas entradas permanecen provisionales y no modifican el canon. No cambian las clases principales ni su precedencia.
- `1.7.0` — Se formalizan áreas para transferencia estructural, el ciclo COMPANY CODE y entendimiento de proyectos. Se precisan el tratamiento de parejas versionadas, estados autodeclarados, código embebido y separación entre una aplicación y sus métodos reutilizables. No cambian las clases principales ni su precedencia.
- `1.6.0` — Se formalizan una subárea activa para bases de la ACCD y una genealogía histórica de campos atencionales. Se explicita la separación entre modelos vigentes, notas germinales y fuentes marcadas `legacy`; una dependencia puede quedar materializada sin adquirir vigencia operativa. No cambian las clases principales ni su precedencia.
- `1.5.0` — Se formaliza `busqueda_cognitiva` como subárea de aplicaciones y se distingue el ingreso de archivos externos de la generación interna de documentos ya clasificados. No cambian las clases principales ni su precedencia.
- `1.4.0` — Se formalizan áreas separadas para modelos aplicados de principios psicológicos y para fuentes primarias de psicología cognitiva o del consumidor. Se añade `PRIMARY_SOURCE` para no confundir evidencia externa original con realizaciones PDF derivadas por el proyecto. No cambian las clases principales ni su precedencia.
- `1.3.0` — Se formalizan áreas para campos atencionales, video corto, diseño atencional, memoria de pipelines cognitivos y síntesis de teorías cognitivas o discursivas. Se explicita el tratamiento de duplicados ya registrados sin crear nuevos IDs. No cambian las clases principales ni su precedencia.
- `1.2.0` — Se formalizan áreas para YouTube, prompts de artefactos, Ingeniería de Estructuras Cognitivas y genealogías conceptuales específicas. No cambian las clases principales ni su precedencia.
- `1.1.0` — Se formalizan subáreas de creación de contenido para bibliotecas composables, modelos expresivos y referencias de estilo. No cambian las clases principales ni su precedencia.
- `1.0.0` — Taxonomía inicial y procedimiento de ingreso.
