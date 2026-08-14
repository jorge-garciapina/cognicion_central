# Integración con Búsqueda Cognitiva y recuperación

**ID:** `MCCR-INT-SEARCH-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MCCR llama Búsqueda Cognitiva cuando necesita localizar estructuras por rol, relación o transformación y el Registro/rutas conocidas no bastan. Recuperar un candidato no lo activa ni valida.

## Responsabilidad

Este documento es responsable de:

- triggers de búsqueda interna
- consulta heredada y sólo lectura
- consumo de resultados con procedencia/incertidumbre

No es responsable de:

- buscar fuera del alcance
- tratar similitud como identidad
- persistir índices o entradas automáticamente

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| STRUCTURAL_NEED | rol/puertos/relación faltante | REQUIRED |
| PARENT_SCOPE | permisos heredados | REQUIRED |
| SEARCH_RELATION | DEPENDENCIES, TRANSFORMATIONS, BRIDGES, etc. | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Intentar ruta conocida/Registro.
2. Si falta cobertura, construir consulta estructural.
3. Heredar alcance y `READ_ONLY`.
4. Recuperar candidatos y niveles de coincidencia.
5. Verificar CS1–CS4, autoridad, puertos y restricciones.
6. Añadir sólo candidatos calificados a C3.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| COGNITIVE_SEARCH_QUERY | consulta trazable | MCCR |
| QUALIFIED_SEARCH_RESULTS | candidatos para C3 | MCCR |
| SOURCE_NOT_FOUND | ausencia con cobertura | MCCR |

## Especificación

```yaml
internal_search_call:
  operation: SEARCH_COGNITIVE_STRUCTURES
  parent_command_id:
  need: {role: , accepts: [], produces: []}
  relation: FIND_TRANSFORMATIONS | FIND_DEPENDENCIES | FIND_BRIDGES
  scope: {inherit_from_parent_command: true}
  write_policy: READ_ONLY
```

Los niveles léxicos/semánticos generan candidatos; la compatibilidad del plan requiere relaciones, invariantes, restricciones y puertos. Duplicados no cuentan como evidencia independiente.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- La búsqueda interna no amplía permisos.
- Resultado de búsqueda es candidato, no selección.

## Ejemplo operativo

Falta un puente construcción conceptual→video. MCCR pide `FIND_TRANSFORMATIONS`; Búsqueda devuelve el adaptador ACCD con ruta. C3 lo incorpora; C7 valida sus puertos.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Relación de búsqueda ambigua | inferir y declarar o pedir aclaración |
| Resultado sólo L1/L2 | no usar para integración fuerte |
| Fuente externa no permitida | excluir |

## Relaciones y límites

Búsqueda Cognitiva es cApp provisional de infraestructura; MCCR la consume sin modificarla.

## Procedencia

- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Consulta hereda alcance.
- Se valida después de recuperar.
- Ausencia y baja coincidencia son visibles.
