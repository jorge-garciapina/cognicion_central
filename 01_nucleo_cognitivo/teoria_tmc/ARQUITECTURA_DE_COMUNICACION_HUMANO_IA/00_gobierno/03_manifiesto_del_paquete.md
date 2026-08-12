# Manifiesto del paquete

## Identidad

```yaml
document:
  id: AC-HIA-GOV-MANIFEST-001
  version: 0.2.0
  lifecycle: DEVELOPMENT
  authority: HUMAN

recommended_location:
  path: 00_gobierno/03_manifiesto_del_paquete.md
  operation: REPLACE
```

## Manifiesto lógico

```yaml
manifest:
  package_id: PC-AC-HIA
  logical_name: PAQUETE_COGNITIVO_ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  human_name: ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  formal_name: ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  version: 0.2.0
  entrypoint: README.md
  lifecycle: DEVELOPMENT
  authority: HUMAN

  spaces:
    government: 00_gobierno
    core: 01_nucleo
    operational_model: 02_modelo_operativo
    contracts: 03_contratos
    functions: 04_funcionalidades
    examples: 05_ejemplos
    future_integration: 06_integracion_futura

  governing_documents:
    - 00_gobierno/01_ficha_del_paquete.md
    - 00_gobierno/02_autoridad_estado_y_versionado.md
    - 00_gobierno/03_manifiesto_del_paquete.md
    - 01_nucleo/03_invariantes.md

  core_documents:
    - 01_nucleo/01_definicion_y_limites.md
    - 01_nucleo/02_topologia_y_componentes.md
    - 01_nucleo/03_invariantes.md
    - 01_nucleo/04_configuracion_canonica_de_la_arquitectura.md
    - 02_modelo_operativo/01_modelo_de_comandos.md
    - 02_modelo_operativo/02_estado_e_integracion_acumulativa.md
    - 02_modelo_operativo/03_frontend_cognitivo.md
    - 02_modelo_operativo/04_backend_cognitivo.md
    - 02_modelo_operativo/05_ciclo_operativo.md
    - 02_modelo_operativo/06_normalizacion_de_comandos.md

  validation_documents:
    - 03_contratos/01_contratos_de_intercambio.md
    - 03_contratos/02_validadores.md

  functionality_documents:
    - 04_funcionalidades/01_catalogo_de_funcionalidades_basicas.md
    - 04_funcionalidades/02_snapshots_y_proyecciones.md
    - 04_funcionalidades/03_normalizacion_y_realizacion_textual.md

  example_documents:
    - 05_ejemplos/01_consulta_de_relacion.md
    - 05_ejemplos/02_correccion_de_alcance_local.md
    - 05_ejemplos/03_directiva_de_alcance_global.md
    - 05_ejemplos/04_catalogo_de_normalizacion_de_comandos.md

  future_documents:
    - 06_integracion_futura/01_puntos_de_extension.md

  dependencies:
    - id: PATRON_DE_INTEGRACION_ESTRUCTURAL_ACUMULATIVA
      version: 0.2.0
      state: REQUIRED_CONCEPTUAL_DEPENDENCY

    - id: COGNICION_CENTRAL
      state: AVAILABLE_NOT_AUTOMATICALLY_ACTIVE

    - id: FAC
      state: AVAILABLE_PENDING_BINDING

    - id: ACCD
      state: AVAILABLE_OPTIONAL

  deferred:
    - LOCAL_COGNITION_MAP_ROUTER_VALIDATORS
    - ARTIFACT_READING_BOOTLOADER
    - HOST_ADAPTER_IMPLEMENTATIONS
```

## Mapa de responsabilidad

| Necesidad | Documento responsable |
|---|---|
| Identidad y alcance | `00_gobierno/01_ficha_del_paquete.md` |
| Autoridad y versiones | `00_gobierno/02_autoridad_estado_y_versionado.md` |
| Manifiesto y recuperación | `00_gobierno/03_manifiesto_del_paquete.md` |
| Definiciones y fronteras | `01_nucleo/01_definicion_y_limites.md` |
| Componentes y topología | `01_nucleo/02_topologia_y_componentes.md` |
| Invariantes | `01_nucleo/03_invariantes.md` |
| Configuración canónica | `01_nucleo/04_configuracion_canonica_de_la_arquitectura.md` |
| Modelo general de comandos | `02_modelo_operativo/01_modelo_de_comandos.md` |
| Transiciones de estado | `02_modelo_operativo/02_estado_e_integracion_acumulativa.md` |
| Interfaz con el humano | `02_modelo_operativo/03_frontend_cognitivo.md` |
| Interfaz con el sistema de IA | `02_modelo_operativo/04_backend_cognitivo.md` |
| Ciclo completo | `02_modelo_operativo/05_ciclo_operativo.md` |
| Normalización de comandos | `02_modelo_operativo/06_normalizacion_de_comandos.md` |
| Intercambio entre componentes | `03_contratos/01_contratos_de_intercambio.md` |
| Criterios de aceptación | `03_contratos/02_validadores.md` |
| Funciones de la arquitectura | `04_funcionalidades/01_catalogo_de_funcionalidades_basicas.md` |
| Vistas del estado | `04_funcionalidades/02_snapshots_y_proyecciones.md` |
| Lenguaje y estructura | `04_funcionalidades/03_normalizacion_y_realizacion_textual.md` |
| Ejemplos de normalización | `05_ejemplos/04_catalogo_de_normalizacion_de_comandos.md` |
| Extensiones no implementadas | `06_integracion_futura/01_puntos_de_extension.md` |

## Relaciones críticas

```yaml
critical_relations:
  command_ingress:
    carrier: HUMAN_COMMAND_EVENT
    normalization: 02_modelo_operativo/06_normalizacion_de_comandos.md
    operational_input: NORMALIZED_COMMAND_GRAPH

  state_transition:
    governed_by: PATRON_DE_INTEGRACION_ESTRUCTURAL_ACUMULATIVA@0.2.0

  execution:
    organized_by: 02_modelo_operativo/04_backend_cognitivo.md
    cycle: 02_modelo_operativo/05_ciclo_operativo.md

  projection:
    source: LOCAL_COGNITIVE_STATE
    frontend: 02_modelo_operativo/03_frontend_cognitivo.md
```

## Regla de recuperación

El `README.md` es el punto de entrada. Para tareas particulares debe recuperarse el documento responsable y sus dependencias directas.

Orden recomendado:

```text
manifiesto
→ configuración canónica
→ documento responsable
→ contratos y validadores aplicables
→ ejemplos sólo cuando aporten ejecución mental o prueba
```

Los ejemplos no tienen mayor autoridad que el núcleo. Las estructuras relacionadas no se activan por aparecer en el manifiesto.

## Estado de integración

```yaml
integration_state:
  package_version: 0.2.0
  normalization_module_registered: true
  canonical_configuration_registered: true
  normalization_examples_registered: true
  contextual_installer: DEFERRED
  runtime_implementation: NOT_IMPLEMENTED
```

