# EC-FREQ-004 — Transición de estados

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `4 de 10`  
**Frecuencia:** `151 / 760 unidades únicas (19.9%)`  
**Dispersión:** `6 áreas`  
**Rol dominante:** representar y gobernar el paso de una configuración a otra  
**Familias candidatas:** `Plan + Modelo mental + Patrón de razonamiento`  

## Definición

Una transición de estados describe cómo una entidad pasa de una configuración inicial a otra final mediante una operación, evento o secuencia bajo condiciones y restricciones explícitas.

El estado no es sólo una etiqueta temporal. Es el conjunto de propiedades relevantes que determina qué operaciones están habilitadas y qué cambio cuenta como válido.

## Firma estructural

```text
ESTADO S0
  + evento / condición / operación T
  → ESTADO S1

precondiciones(T, S0)
efectos(T)
invariantes(S0, S1)
criterio_de_transición_válida
```

## Funcionamiento

1. Selecciona variables relevantes del estado inicial.
2. Declara la transición y sus precondiciones.
3. Ejecuta o modela el cambio.
4. Produce un estado posterior observable.
5. Compara propiedades preservadas, creadas, eliminadas o modificadas.
6. Decide si la transición fue válida, fallida o parcial.
7. Puede encadenar el nuevo estado como entrada de la transición siguiente.

## Invariantes

- Hay al menos dos estados distinguibles o un estado y un cambio esperado.
- Existe un operador, evento o causa de transición.
- Se conocen condiciones de activación.
- El cambio relevante puede observarse o inferirse con criterios.
- Se distingue transformación de mera descripción estática.

## Dominio de variación

Pueden variar variables de estado, granularidad temporal, determinismo, reversibilidad, ramificación, número de transiciones y tipo de operador. La identidad se pierde si no puede determinarse qué cambió o por qué.

## Ejemplos localizados

### 1. Trayectoria cognitiva de una audiencia

[`protocolo_prompt_titulos_youtube_v3.md`](../../../03_aplicaciones/creacion_de_contenido/youtube/protocolo_prompt_titulos_youtube_v3.md) reconstruye el estado inicial y final probable del espectador y el recorrido general que el texto intenta producir.

### 2. AIDA como trayectoria

[`pipeline-v2.pdf`, p. 1](../../../04_conocimiento_y_contexto/memoria_conceptual/pipelines_cognitivos/pipeline-v2.pdf) interpreta Atención-Interés-Deseo-Acción como plan/método para provocar una trayectoria de estado en el receptor.

### 3. MAANC y movimientos narrativo-cognitivos

Los registros de `ART_construccion_conceptual.txt` describen movimientos con `estado_cognitivo_entrada`, operación y `estado_cognitivo_salida`. La continuidad se valida cuando la salida de un movimiento prepara la entrada del siguiente.

### 4. Corrección acumulativa de FAC

`fabrica-de-adaptaciones-contextuales.txt` dentro de [`ART_core_tmc.txt`](../../teoria_tmc/ART_core_tmc.txt) transforma evidencia de retorno en cambios de heurísticas, restricciones y decisiones para futuras realizaciones, preservando el núcleo.

### 5. Ciclo de vida documental

La política de organización usa estados `RAW`, `WORKING`, `PROVISIONAL`, `STABLE`, `SUPERSEDED` e `IMMUTABLE`. Un evento de gobierno autoriza la transición; cambiar la palabra sin decisión registrada no cambia realmente el estado.

## Relaciones con otras estructuras frecuentes

- Un pipeline encadena transiciones.
- La jerarquía decide en qué nivel ocurre cada cambio.
- La trazabilidad registra estado anterior, operación y estado posterior.
- La validación determina si el estado alcanzado cumple el criterio.
- La instanciación contextual fija variables de estado para un caso.

## Validación

La estructura pasa si puede responder: cuál era el estado anterior, qué operación se aplicó, bajo qué condiciones, qué cambió y qué evidencia sostiene el estado nuevo. Falla cuando sólo hay antes/después narrativo sin mecanismo o cuando el mismo estado recibe nombres distintos.

## Lectura de frecuencia

La firma apareció en 151 unidades y 80 cubrieron sus cinco componentes. El conteo tiene confianza alta para documentos de procesos y narrativa; puede subrepresentar transiciones expresadas sin la palabra “estado”.

## Proyección portable

```yaml
state_transition:
  state_before:
  trigger:
  preconditions: []
  operation:
  state_after:
  preserved_properties: []
  changed_properties: []
  validation:
```
