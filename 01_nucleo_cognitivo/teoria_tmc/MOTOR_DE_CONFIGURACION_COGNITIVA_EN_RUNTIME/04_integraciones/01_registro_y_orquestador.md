# Integración con Registro y Orquestador

**ID:** `MCCR-INT-REG-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

El Registro aporta identidades y evidencia; MCCR configura; el backend coordina. `[AUSENCIA]` No existe un paquete independiente del Orquestador global y el canon lo declara pendiente, por lo que no se inventa su contrato.

## Responsabilidad

Este documento es responsable de:

- consulta al Registro
- frontera registro/configuración/coordinación
- adaptación futura a un Orquestador formal

No es responsable de:

- hacer ranking semántico dentro del Registro
- presentar el Orquestador como implementado
- escribir nuevas entradas sin autorización

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| REGISTRY_QUERY | roles, familias, puertos y estado | REQUIRED |
| REGISTRY_RECORDS | candidatos y procedencia | REQUIRED |
| BACKEND_CALL | solicitud de configuración | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Consultar por identidad/rol/dependencia.
2. Verificar estado, autoridad, versión y evidencia.
3. Convertir entradas en nodos de `G_possible`, no en selecciones.
4. Configurar desde el backend actual.
5. Mantener una interfaz de invocación estable para un futuro Orquestador.
6. Proponer cualquier escritura como cambio separado.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| REGISTRY_CANDIDATE_VIEW | candidatos semánticos | MCCR |
| MCCR_INVOCATION_RESULT | plan o inviabilidad | MCCR |
| OPEN_DECISION | binding futuro del Orquestador | MCCR |

## Especificación

Contrato de lectura:

```yaml
registry_lookup:
  requested_roles: []
  family_candidates: []
  required_ports: []
  maturity_minimum:
  allowed_statuses: []
  read_only: true
```

Frontera exacta v1:

```text
Registro: sabe qué estructura está documentada y dónde.
AC-HIA backend: coordina la solicitud y los servicios.
MCCR: decide qué combinación es válida/preferida para el caso.
Runtime: ejecuta el plan aceptado.
```

La palabra “orquestador” en ejemplos locales o cApps no prueba la existencia del Orquestador global canónico.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Una entrada `PROVISIONAL` conserva ese estado al ser recuperada.
- Lectura del Registro es `READ_ONLY` por defecto.

## Ejemplo operativo

El Registro devuelve `EC-FREQ-005 composición modular` y `EC-FREQ-010 instanciación contextual`. MCCR puede usarlas para razonar, pero no las declara canónicas ni suficientes para el plan.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Entrada ausente | usar Búsqueda Cognitiva o declarar ausencia |
| Estado/madurez incompatible | no activar sin excepción autorizada |
| Orquestador requerido como software | declarar `NOT_IMPLEMENTED` |

## Relaciones y límites

Esta integración queda lista para un adaptador futuro; hoy el `COGNITIVE_BACKEND` de AC-HIA es el coordinador especificado.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- No se inventa Orquestador.
- Registro no selecciona planes.
- Se conservan estados de las entradas.
