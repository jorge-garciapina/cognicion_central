# Autoridad, estado y versionado

## Orden de autoridad

```text
0. Reglas y capacidades efectivas de plataforma, seguridad y acceso.
1. Comando humano actual, explícito y autorizado.
2. Decisiones humanas vigentes registradas en el estado local.
3. Canon y protocolos activos de COGNICIÓN_CENTRAL, cuando esté instalada.
4. Especificación vigente de este paquete.
5. Estructuras cognitivas y aplicaciones dependientes.
6. Resultados de modelos, herramientas y fuentes externas.
7. Historial, ejemplos y versiones sustituidas.
```

El humano gobierna objetivos, alcance, aceptación y persistencia. Esta soberanía no elimina restricciones superiores de seguridad, permisos o capacidades técnicas.

## Estados del contenido

Todo elemento integrado debe declarar, cuando corresponda:

```yaml
content_status:
  epistemic:
    - SOURCE
    - INFERENCE
    - HYPOTHESIS
    - OPEN_QUESTION
    - HUMAN_DECISION
  lifecycle:
    - PROPOSED
    - ACTIVE
    - EXECUTED
    - PENDING
    - REJECTED
    - SUPERSEDED
    - ARCHIVED
  persistence:
    - EPHEMERAL
    - CHAT_STATE
    - PROJECT_STATE
    - FILE
    - CANON
```

La generación de una respuesta no cambia por sí sola el estado de persistencia.

## Cambio y versionado

Una corrección puede:

- modificar una instancia local;
- sustituir una definición vigente;
- producir una propuesta de nueva versión;
- actualizar el paquete completo.

No debe confundirse:

```text
corrección en el chat ≠ archivo modificado
archivo generado ≠ canon aprobado
versión propuesta ≠ versión vigente
resultado del modelo ≠ decisión humana
```

## Regla de sustitución

Cuando un comando humano sustituya una formulación anterior:

```yaml
supersession:
  previous_id: REQUIRED
  new_id: REQUIRED
  reason: REQUIRED
  semantic_content_preserved: true | false | partial
  effective_scope: REQUIRED
  human_authority: REQUIRED
```

La versión sustituida se conserva para trazabilidad, pero deja de gobernar operaciones futuras dentro del alcance declarado.

## Estado de este paquete

```yaml
current_package_state:
  version: 0.1.0
  lifecycle: DEVELOPMENT
  label: ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  human_approval: FORMALIZE_AS_COGNITIVE_PACKAGE
  canonical_integration: NOT_REQUESTED
  installation_layer: DEFERRED
```
