# Puntos de extensión

## Propósito

Este documento identifica extensiones futuras sin implementarlas ni incluir los documentos de instalación solicitados para una etapa posterior.

## Instalación contextual futura

El sistema deberá poder distribuirse como:

```text
ARTEFACTO CON LA LÓGICA DEL PAQUETE
+
DOCUMENTO DE COGNICIÓN LOCAL, MAPA Y ROUTER
+
DOCUMENTO BOOTLOADER PARA LEER EL ARTEFACTO
→
CHAT RECEPTOR
→
ACOPLAMIENTO DE LA LÓGICA AL CONTEXTO LOCAL
```

El chat receptor no debe limitarse a resumir el artefacto. Debe:

1. reconocer su estructura interna;
2. recuperar los módulos necesarios;
3. construir una superposición contextual;
4. identificar capacidades y restricciones del runtime receptor;
5. configurar el backend y el frontend locales;
6. conservar autoridad, procedencia y versiones;
7. ejecutar una prueba mínima;
8. declarar el estado real de instalación.

## Documentos diferidos

```yaml
deferred_documents:
  - conceptual_role: LOCAL_COGNITION_MAP_ROUTER_VALIDATORS
    analogous_to: cognicion_central_piea.md
    status: NOT_GENERATED

  - conceptual_role: ARTIFACT_READING_BOOTLOADER
    analogous_to: como_leer_el_artefacto_adjunto.md
    status: NOT_GENERATED
```

Los nombres definitivos deberán corresponder a la identidad formal de este paquete y evitar sugerir que pertenecen al paquete PIEA.

## Adaptadores futuros

### Adaptador ChatGPT

- proyectos y chats;
- lectura de archivos;
- herramientas disponibles;
- memoria expuesta;
- Library o almacenamiento autorizado;
- restricciones de sesión.

### Adaptador API

- esquema de comandos;
- recuperación externa;
- llamadas a modelos y herramientas;
- base de datos de estado;
- colas y eventos;
- autenticación y permisos.

### Adaptador local

- modelo en PC o DGX;
- almacenamiento privado;
- herramientas de filesystem;
- motores de búsqueda locales;
- control de recursos.

### Adaptador híbrido

- política de routing;
- clasificación de sensibilidad;
- compatibilidad de contratos;
- reintegración común de resultados.

## Interfaz interactiva futura

Podrá incluir:

- grafo navegable;
- inspector de nodos;
- historial de comandos;
- panel de versiones;
- control de alcance;
- aprobaciones;
- comparación de snapshots;
- visualización de procedencia;
- selección de runtime;
- estado de componentes.

## Persistencia futura

Se requerirá definir:

- modelo de datos del estado;
- identidad estable de nodos;
- eventos y transiciones;
- almacenamiento de artefactos;
- política de versiones;
- reconstrucción de estado;
- separación entre estado operativo y canon;
- migraciones.

## Condiciones antes de declarar instalación funcional

```yaml
installation_readiness:
  package_version_resolved: required
  artifact_integrity_checked: required
  component_registry_built: required
  host_capabilities_mapped: required
  authority_boundaries_declared: required
  validators_available: required
  minimal_test_passed: required
  human_review_completed: required
```

Mientras estos requisitos no se cumplan, el estado debe declararse `SPECIFIED` o `PARTIALLY_CONFIGURED`, nunca `RUNTIME_READY`.

