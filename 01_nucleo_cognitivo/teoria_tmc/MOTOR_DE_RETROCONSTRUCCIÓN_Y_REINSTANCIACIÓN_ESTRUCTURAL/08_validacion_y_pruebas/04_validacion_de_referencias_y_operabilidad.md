# Validación de referencias y operabilidad documental

**ID:** `MRRE-VAL-DOC`  
**Versión:** `0.2.0`  
**Validador:** [validate_documentation.mjs](scripts/validate_documentation.mjs)

## Propósito

Comprobar que el paquete puede ser recorrido y ejecutado por otra IA sin depender de rutas absolutas, conocimiento tácito ni una explicación externa. Complementa las pruebas semánticas de [MRRE-VAL-PLAN](01_plan_de_verificacion_y_validacion.md); no demuestra que toda reconstrucción de dominio sea correcta.

La norma evaluada es [MRRE-REF-NORM-01](../00_gobierno/06_norma_de_referencias_y_citacion.md), derivada de procedencia de [SRC-ACHIA-SCAFFOLD](../../ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/04_funcionalidades/04_scaffolding_cognitivo_para_construccion_de_paquetes.md) y run logs de [SRC-MCCR-RUNLOG](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/06_trazabilidad_observabilidad_y_run_log.md).

## Controles automatizados

| ID | Control | Falla cuando |
|---|---|---|
| `DOC-01` | H1 por documento activo | falta título |
| `DOC-02` | al menos un enlace relativo | el archivo queda aislado |
| `DOC-03` | cita `[ID](ruta)` en documentos normativos | sólo hay menciones/rutas en texto |
| `DOC-04` | resolución de enlaces locales | el destino no existe |
| `DOC-05` | prohibición de links absolutos | aparece drive, `/` raíz o `file://` |
| `DOC-06` | fences balanceados | bloque Markdown/Mermaid no cierra |
| `DOC-07` | dossiers de cinco casos | falta dossier o sección A0–A10 |
| `DOC-08` | Mermaid y proceso en cada dossier | no hay grafo o vínculo al protocolo |
| `DOC-09` | README operativo | faltan selector, índice, artefactos, casos o conexiones |
| `DOC-10` | manual/workbook | faltan P0–P13, plantillas o algoritmo de chains |
| `DOC-11` | bootstrap portable | faltan BOOT-0..12, estados de disponibilidad o vínculo al módulo cognitivo |
| `DOC-12` | cognición local | faltan router, `MRRE-WORK`, P0–P13, quality gates o límite de software |

Los archivos en `90_historial/` y los catálogos preservados se excluyen de la obligación de reescritura; se validan como antecedentes inmutables mediante hashes. Sus enlaces antiguos no definen la norma vigente.

## Ejecución

Desde la raíz del paquete:

```powershell
node .\08_validacion_y_pruebas\scripts\validate_documentation.mjs
```

El script no escribe archivos. Devuelve `0` si todos los controles pasan y `1` con una lista de errores si falla cualquiera.

## Pruebas manuales obligatorias

1. Elegir tres citas externas desde carpetas de distinta profundidad y abrir sus destinos.
2. Dar sólo [MRRE-RUNTIME-BOOTSTRAP-001](../como_leer_el_artefacto_adjunto.md) a un agente nuevo y comprobar que localiza el módulo, declara flags independientes y mantiene `MRRE_SOFTWARE_RUNTIME_READY=false`.
3. Dar sólo [COGNICION_CENTRAL_MRRE](../cognicion_central_mrre.md) y una intención; comprobar que selecciona modo, operación, `MRRE-WORK` y fuentes mínimas.
4. Dar [README-MRRE](../README.md) a un agente nuevo y pedirle que indique el orden de carga y artefactos A0–A10.
5. Darle un fixture y comprobar que produce chain con edges/evidencia, no sólo resumen.
6. Pedir reinstanciación con un rol sin candidato y comprobar `UNBOUND_GAP`.
7. Retirar una fuente multimodal y comprobar qué claims pierden soporte.
8. Intentar promover un resultado sin gate y comprobar bloqueo.

## Criterio de aceptación

`PASS_DOCUMENTATION` requiere todos los controles automatizados y las ocho pruebas manuales registradas. Un pass documental significa que la especificación es navegable y ejecutable; no significa runtime de software implementado, dominio validado universalmente ni promoción a canon.
