# Manifiesto de integración propuesto

**ID:** `MCCR-REPO-MANIFEST-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

La integración futura debe ser una transacción revisable: validar candidato, aprobar identidad/ubicación, mover, registrar, actualizar rutas, regenerar artefacto y comprobar rollback.

## Responsabilidad

Este documento es responsable de:

- operaciones externas propuestas
- precondiciones y postcondiciones
- rollback y verificación

No es responsable de:

- aplicar cambios ahora
- promover automáticamente a canon
- borrar el taller sin respaldo

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| HUMAN_APPROVAL | scope exacto | REQUIRED |
| CANDIDATE_HASHES | integridad | REQUIRED |
| TARGET_STATE | rutas/registro actuales | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Congelar hashes.
2. Resolver OPEN_DECISIONS bloqueantes.
3. Aprobar nombre, versión, ubicación y estado.
4. Mover/copiar de forma recuperable.
5. Aplicar patch de Registro/README/Prompt si corresponde.
6. Regenerar artefacto.
7. Ejecutar aceptación y rollback test.
8. Emitir evento organizativo.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| INTEGRATION_TRANSACTION | operaciones ordenadas | MCCR |
| POST_INTEGRATION_REPORT | rutas/hashes/pruebas | MCCR |
| ROLLBACK_PLAN | recuperación | MCCR |

## Especificación

```yaml
integration_manifest:
  package_id: PC-MCCR
  candidate_version: 0.1.0
  current_path: 01_nucleo_cognitivo/teoria_tmc/NUEVO_PAQUETE/MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME
  proposed_path: 02_metodos_y_herramientas/motor_de_configuracion_cognitiva_en_runtime
  operations:
    - VERIFY_HASHES
    - HUMAN_APPROVE_IDENTITY_AND_PATH
    - MOVE_PACKAGE
    - ADD_REGISTRY_RECORD
    - UPDATE_PARENT_READMES
    - APPLY_PROMPT_PATCH_IF_APPROVED
    - REBUILD_ARTIFACT
    - RUN_ACCEPTANCE
    - EMIT_ORG_EVENT
  status: PROPOSED_NOT_APPLIED
```

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La transacción no comienza sin hashes y aprobación.
- Rollback conserva el candidato.

## Ejemplo operativo

Si la prueba de instalación contextual falla después del movimiento, se revierte la ruta y se conserva el reporte; no se corrige el canon a ciegas.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Hash cambió durante integración | abortar y reaudar |
| Patch parcialmente aplicado | rollback transaccional |
| Pruebas fallan | no declarar integrado |

## Relaciones y límites

Coordina las propuestas de los otros cinco documentos de esta carpeta.

## Procedencia

- [FUENTE_CC] `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`: ubicación por función dominante y contratos de carpetas.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Operaciones están ordenadas.
- Estado dice `PROPOSED_NOT_APPLIED`.
- Hay rollback.
