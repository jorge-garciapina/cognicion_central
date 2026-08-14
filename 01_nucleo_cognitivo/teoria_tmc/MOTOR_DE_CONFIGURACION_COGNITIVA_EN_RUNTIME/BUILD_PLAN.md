# Plan de construcción del candidato MCCR

## Objetivo

Sustituir las 58 guías del esqueleto por documentos finales coherentes y autosuficientes, conservar los tres artefactos de construcción, producir informes de auditoría y no tocar fuentes externas al paquete.

## Orden de trabajo

| Etapa | Archivos | Criterio de salida |
|---|---|---|
| 0. Preparación | `BUILD_STATE_00_PREPARED`, auditoría, dependencias, léxico y este plan | fuentes y fronteras explícitas |
| 1. Gobierno | `00_gobierno/*` | identidad, autoridad, versión, manifiesto e invariantes |
| 2. Núcleo | `01_nucleo/*` | conceptos y contratos nucleares estables |
| 3. Operación | `02_modelo_operativo/*` | C0–C12, ejecución, eventos y replanificación |
| 4. Contratos | `03_contratos/*` | validez, preferencia, routing, fallo, traza y gates |
| 5. Integraciones | `04_integraciones/*` | fronteras exactas con CC |
| 6. Fixtures | `05_ejemplos/*` | casos completos y resultados esperados |
| 7. Referencias | `06_referencias/*` | procedencia, ausencias y crosswalk |
| 8. Integración propuesta | `07_integracion_repositorio/*` | parches sólo documentados, no aplicados |
| 9. Entrada | `README.md` | navegación y flujo mínimo |
| 10. Segunda pasada | todos | consistencia, enlaces, términos, ejemplos y estados |

## Reglas de redacción

1. Cada archivo explica propósito, responsabilidades, entradas, proceso, salidas, relaciones, límites, fallos y al menos un ejemplo cuando aplica.
2. El humano aporta intención y decisiones; AC-HIA/backend materializa grafos, restricciones y contratos. Ningún ejemplo exige YAML al humano.
3. Primero se busca un plan `VALID`; sólo entre planes válidos se evalúa `OPTIMAL` según preferencias declaradas.
4. Ninguna restricción dura se relaja silenciosamente. Si no existe plan válido: `NO_FEASIBLE_PLAN`.
5. La ausencia de Orquestador o runtime implementado se declara; no se rellena con una afirmación ficticia.
6. Las capacidades futuras —PSO, GA, SAT/SMT, MILP, A*— son adaptadores opcionales. La v1 funciona con capacidades actuales del host.
7. Ejemplos y fixtures no elevan autoridad respecto del núcleo y los contratos.
8. Todas las propuestas fuera de este directorio quedan en `07_integracion_repositorio` y requieren comando humano posterior.

## Estrategia de validación

- comprobar existencia de los 58 paths previstos;
- comprobar eliminación de marcadores de guía y contenido pendiente;
- comprobar estado candidato/no canónico en gobierno y README;
- comprobar contratos `EXECUTION_PLAN` y `NO_FEASIBLE_PLAN`;
- comprobar que los diez fixtures declaran comando, estructuras, estado, pasos, salidas y validación;
- comprobar que no se presenta runtime u Orquestador como implementados;
- generar hashes de los documentos finales;
- registrar decisiones abiertas y resultado de cross-validation.

## Estado al cierre de esta fase


```yaml
phase_0: COMPLETE
ready_for_final_documents: true
unresolved_items_are_non_blocking_for_candidate: true
next_state: BUILDING_GOVERNANCE_AND_CORE
```
