# Catálogo de funcionalidades de la arquitectura

## Identidad

```yaml
document:
  id: AC-HIA-FUNCIONES-001
  version: 0.2.0
  lifecycle: DEVELOPMENT
  authority: HUMAN

recommended_location:
  path: 04_funcionalidades/01_catalogo_de_funcionalidades_basicas.md
  operation: REPLACE
```

## Propósito

Este catálogo especifica las funciones posibles de la `ARQUITECTURA_DE_COMUNICACION_HUMANO_IA`. Las organiza por familia y responsable dominante para evitar reducir la arquitectura a las funciones del backend.

Una función puede estar formalizada aunque todavía no exista una implementación completa.

```yaml
function_state:
  - SPECIFIED
  - AVAILABLE
  - ACTIVE
  - PENDING_BINDING
  - NOT_IMPLEMENTED
  - EXCLUDED
```

## Mapa de familias

```yaml
function_families:
  - HUMAN_GOVERNANCE
  - FRONTEND_INGRESS
  - COMMAND_NORMALIZATION
  - LOCAL_STATE_AND_INTEGRATION
  - BACKEND_ORGANIZATION
  - HOST_EXECUTION
  - RESULT_REINTEGRATION
  - FRONTEND_PROJECTION
  - TRACE_VERSION_AND_PERSISTENCE
  - TEXT_AND_REPRESENTATION
  - CONTEXTUAL_INSTALLATION
```

## Registro general

| ID | Funcionalidad | Familia | Responsable dominante | Entrada | Salida |
|---|---|---|---|---|---|
| `F01` | Definir objetivo | Gobierno humano | Humano | intención | objetivo autorizado |
| `F02` | Capturar evento humano | Frontend de entrada | Frontend | lenguaje/acción | evento registrado |
| `F03` | Preservar portador | Frontend de entrada | Frontend | evento | referencia íntegra |
| `F04` | Delimitar comando | Normalización | Normalizador | evento + estado | unidades candidatas |
| `F05` | Clasificar operación | Normalización | Normalizador | unidad candidata | operación tipificada |
| `F06` | Resolver referencias | Normalización | Normalizador + estado | expresiones elípticas | referentes/alternativas |
| `F07` | Resolver objetivos | Normalización | Normalizador | operación | targets |
| `F08` | Resolver alcance | Normalización + estado | Arquitectura local | comando | alcance y exclusiones |
| `F09` | Extraer restricciones | Normalización | Normalizador | portador | requisitos/prohibiciones |
| `F10` | Construir grafo de comandos | Normalización | Normalizador | comandos parciales | grafo normalizado |
| `F11` | Gestionar ambigüedad | Normalización | Arquitectura + humano | alternativas | resolución o espera |
| `F12` | Resolver autoridad | Gobierno | Arquitectura local | comando + reglas | permiso o bloqueo |
| `F13` | Clasificar riesgo | Gobierno | Arquitectura + backend | operación + efectos | nivel y gates |
| `F14` | Admitir comando | Estado e integración | Arquitectura local | comando validado | aporte admisible |
| `F15` | Integrar comando | Estado e integración | PIEA + arquitectura | estado + comando | estado de trabajo |
| `F16` | Mantener estado | Estado e integración | Arquitectura local | transiciones | estado vigente |
| `F17` | Gestionar preguntas y tareas | Estado e integración | Arquitectura local | comandos/resultados | agenda operativa |
| `F18` | Gestionar vigencia | Estado e integración | Arquitectura local | versiones | autoridad operativa |
| `F19` | Registrar componentes | Organización backend | Backend | módulos | registro gobernable |
| `F20` | Seleccionar estructuras | Organización backend | Backend | operación + registro | subgrafo cognitivo |
| `F21` | Resolver dependencias | Organización backend | Backend | subgrafo | dependencias resueltas |
| `F22` | Recuperar contexto | Organización backend | Backend | subgrafo + fuentes | contexto mínimo |
| `F23` | Enrutar capacidades | Organización backend | Backend | plan + runtime | binding de capacidad |
| `F24` | Planificar ejecución | Organización backend | Backend | comando + componentes | plan ejecutable |
| `F25` | Compilar al runtime | Ejecución anfitriona | Adaptador | plan | instrucción ejecutable |
| `F26` | Ejecutar operación | Ejecución anfitriona | Sistema de IA | instrucción | resultado bruto |
| `F27` | Capturar procedencia | Reintegración | Backend | resultado bruto | resultado trazable |
| `F28` | Clasificar resultado | Reintegración | Backend | resultado bruto | resultado tipificado |
| `F29` | Validar resultado | Reintegración | Backend + arquitectura | resultado tipificado | informe de validación |
| `F30` | Resolver efectos de estado | Reintegración | Arquitectura local | resultado validado | efectos permitidos |
| `F31` | Reintegrar resultado | Reintegración | PIEA + arquitectura | estado + resultado | estado actualizado |
| `F32` | Preparar datos de snapshot | Proyección frontend | Backend + arquitectura | estado + alcance | view model |
| `F33` | Seleccionar representación | Proyección frontend | Frontend | view model + propósito | tipo de proyección |
| `F34` | Generar manifestación | Proyección frontend | Generador | contrato de vista | salida perceptible |
| `F35` | Permitir navegación | Proyección frontend | Frontend | grafo/snapshot | selección situada |
| `F36` | Recibir validación humana | Gobierno humano | Frontend | aprobación/corrección | nuevo evento de comando |
| `F37` | Trazar operación | Trazabilidad | Backend | eventos del ciclo | traza recuperable |
| `F38` | Gestionar versiones | Versionado | Arquitectura local | cambio autorizado | vigencia + historial |
| `F39` | Gestionar persistencia | Persistencia | Backend + arquitectura | orden + destino | escritura o reporte |
| `F40` | Normalizar piezas semánticas | Texto y representación | Analizador | lenguaje | piezas estructuradas |
| `F41` | Realizar texto | Texto y representación | Generador | piezas normalizadas | frases/párrafos/texto |
| `F42` | Generar grafos y tablas | Texto y representación | Generador | view model | manifestación estructural |
| `F43` | Perfilar runtime receptor | Instalación contextual | Instalador | chat/proyecto | perfil de capacidades |
| `F44` | Construir overlay contextual | Instalación contextual | Instalador + arquitectura | paquete + perfil | bindings locales |
| `F45` | Validar instalación | Instalación contextual | Validadores + humano | overlay | estado de instalación |

## Familia 1 — Gobierno humano

`F01`, `F12`, `F13` y `F36` hacen operable la soberanía humana. Definen objetivos, resuelven autoridad, clasifican riesgo y convierten aprobaciones o correcciones en nuevos eventos de comando.

## Familia 2 — Entrada del frontend

`F02` acepta lenguaje natural, selección, anotación, aprobación u otro portador permitido. `F03` conserva la expresión original para trazabilidad.

```text
humano expresa lenguaje natural
→ frontend captura evento
→ normalizador produce comando
```

## Familia 3 — Normalización de comandos

`F04–F10` transforman el evento humano en un grafo de comandos que conserva:

- operaciones;
- objetivos;
- alcance;
- restricciones;
- dependencias;
- autoridad;
- persistencia;
- ambigüedades;
- relaciones de control.

La salida de esta familia es la entrada operativa de la arquitectura cognitiva local.

## Familia 4 — Estado e integración

`F14` admite el comando; `F15` aplica PIEA `0.2.0`; `F16–F18` mantienen objetivos, estructuras, tareas, preguntas, restricciones, fuentes, versiones y decisiones.

## Familia 5 — Organización del backend

`F19–F24` registran componentes, seleccionan estructuras, resuelven dependencias, recuperan contexto, enrutan capacidades y preparan el plan de ejecución.

Estas funciones hacen explícitas capacidades que en la versión anterior permanecían agrupadas dentro de “organizar componentes”.

## Familia 6 — Ejecución anfitriona

`F25` traduce el plan a prompts, llamadas o herramientas compatibles. `F26` produce un resultado bruto o error. El sistema anfitrión no modifica directamente el estado cognitivo.

## Familia 7 — Reintegración

`F27–F31` conservan procedencia, clasifican el resultado, validan estructura y evidencia, determinan efectos permitidos y aplican PIEA cuando la reintegración está autorizada.

```text
resultado producido
≠ verdad
≠ decisión humana
≠ canon
```

## Familia 8 — Proyección del frontend

`F32` prepara datos de snapshot; `F33` elige una representación; `F34` genera la manifestación; `F35` permite navegación y selección situada.

## Familia 9 — Trazabilidad, versión y persistencia

`F37–F39` relacionan portador, comando, estado previo, componentes, runtime, resultado, decisión y estado nuevo. Distinguen generación de persistencia y conservan genealogía.

## Familia 10 — Texto y representación

`F40` convierte lenguaje en entidades, relaciones, jerarquías, modalidad y estado epistemológico. `F41` realiza esas piezas como texto. `F42` produce grafos y tablas.

Normalización y realización textual tienen direcciones dominantes inversas, pero no son perfectamente reversibles.

## Familia 11 — Instalación contextual

Estas funciones están especificadas, pero su implementación se difiere hasta generar los documentos de cognición local y bootloader.

- `F43` identifica modelo, plataforma, herramientas, permisos y restricciones.
- `F44` acopla capacidades del paquete al chat receptor sin modificar la fuente.
- `F45` comprueba bindings, autoridad, adaptadores y prueba mínima.

## Composición mínima de una consulta

```text
F02 → F03 → F04 → F05 → F06 → F07 → F08 → F09 → F10
→ F12 → F14 → F15
→ F19 → F20 → F21 → F22 → F23 → F24 → F25 → F26
→ F27 → F28 → F29 → F30 → F31
→ F32 → F33 → F34 → F36
```

No todas las funciones son etapas lineales. Autoridad, trazabilidad y validación operan transversalmente.

## Contrato mínimo de una función

```yaml
function:
  id:
  family:
  role:
  version:
  state:
  inputs: []
  outputs: []
  invariants: []
  dependencies: []
  permissions: []
  validators: []
  runtime_binding:
```

## Criterios de aceptación

El catálogo es operativo cuando:

1. cada función posee responsable, entrada y salida;
2. las funciones no se clasifican sólo por formato o tema;
3. frontend, arquitectura local, backend, anfitrión y humano conservan responsabilidades distintas;
4. routing, selección y dependencias son funciones visibles;
5. las funciones futuras no se presentan como implementadas;
6. una aplicación puede declarar qué funciones compone y en qué orden;
7. los validadores pueden detectar composiciones incompatibles.

