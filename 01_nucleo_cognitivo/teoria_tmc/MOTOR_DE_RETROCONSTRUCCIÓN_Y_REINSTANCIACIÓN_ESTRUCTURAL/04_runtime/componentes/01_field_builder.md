# FIELD_BUILDER

**Capacidad:** `FIELD_BUILD` · **Versión:** 0.1.0

## Contrato

Recibe portadores/fuentes autorizados y case spec; produce `STRUCTURAL_FIELD` multicapas con identidad, frontera, source bindings, conflictos y huecos. Nunca fusiona por coincidencia de nombre.

```mermaid
flowchart LR
    S["Fuentes/portadores"] --> I["Inventario y procedencia"]
    I --> E["Entidades/relaciones"]
    E --> C["Contextos y capas"]
    C --> F["Fusión por identidad probada"]
    F --> O["Campo + conflictos + huecos"]
```

## Procedimiento

Validar input; separar fuente/material/mediación; resolver identidad con evidencia; tipar relaciones; conservar contradicción y vigencia; crear capas y contexts; federar sólo mediante bridge; registrar regiones ausentes; emitir field y trace.

El grafo ACCD `SRC-ACCD-REGIONS` se usa como ejemplo material de dimensión→campo→valor→restricción, no como ontología universal MRRE. Sus 2 476 JSON se tratan como source graph tipado.

## Validadores y fallos

`V_FIELD_IDENTITY`, `V_SOURCE_BINDING`, `V_CONTEXT_SEPARATION`, `V_CONFLICT_PRESERVATION`. Fallos: `SOURCE_ABSENT`, `CONTEXT_CONFLICT`, `INCOMPLETE_NAVIGATION`. Aceptación: cada elemento se rastrea a fuente o inferencia, toda frontera es explícita y el campo admite varios cortes sin reconstrucción destructiva.

## Instrucciones de ejecución

1. crea una fila por portador con ID, cita relativa, modalidad, versión y contexto;
2. formula identidades como hipótesis con criterio discriminante;
3. declara frontera `in_scope/out_of_scope` antes de extraer relaciones;
4. añade sólo nodos/edges observados o afirmados por fuente; marca inferencias;
5. registra layers y contexts sin fusionarlos;
6. crea bridges explícitos para toda federación;
7. conserva conflictos y regiones ausentes;
8. emite el objeto conforme a [MRRE-SCHEMA-FIELD](../../02_contratos_y_schemas/structural_field_and_cut.schema.yaml).

**Ejemplo:** en [CASE-MRRE-REUTERS § A2](../../09_casos_y_ejemplos/reuters/DOSSIER_OPERATIVO.md#a2-campo-estructural-y-cortes), V1 y V2 sólo comparten campo después de comprobar persona, rol, institución y fecha; el componente conserva la alternativa de campos separados.

## Checklist de salida

- [ ] cada elemento tiene source binding o estatus inferencial;
- [ ] identidad y frontera tienen alternativa/falsador;
- [ ] conflictos no fueron promediados;
- [ ] el campo sigue existiendo sin un corte concreto;
- [ ] el matching aún no se ejecutó.

El algoritmo normativo es [MRRE-PROC-NAVIGATE](../../03_protocolos_operacionales/01_navegacion_estructural.md). ACCD se cita directamente como [SRC-ACCD-REGIONS](../../../../../03_aplicaciones/sistema-de-transferencia-accd/grafo_de_regiones/) (`EJEMPLO`, no ontología adoptada).
