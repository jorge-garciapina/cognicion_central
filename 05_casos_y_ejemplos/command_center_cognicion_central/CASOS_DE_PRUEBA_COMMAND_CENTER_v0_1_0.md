# CASOS DE PRUEBA DEL COMMAND CENTER

**Versión:** `0.1.0`

## Caso 01 — consulta ordinaria

Prompt:

```text
Muéstrame el estado de APRENDIZAJE_ESTRUCTURAL.
```

Esperado:

```yaml
verb: SHOW_STATE
target: APRENDIZAJE_ESTRUCTURAL
risk: R0
persistence: NONE
human_gate: false
```

En `CC-NORMAL` no necesita mostrar YAML.

## Caso 02 — análisis

Prompt:

```text
Compara BUSQUEDA_COGNITIVA y APRENDIZAJE_ESTRUCTURAL por rol operativo, entradas y salidas.
```

Esperado:

```yaml
verb: COMPARE
risk: R1
persistence: NONE
```

## Caso 03 — generación

Prompt:

```text
Genera un MD con esta arquitectura y no cambies el canon.
```

Esperado:

```yaml
verb: GENERATE
risk: R2
persistence: OUTPUT_PROPOSAL
constraints:
  - do_not_modify_canon
```

## Caso 04 — propuesta de formalización

Prompt:

```text
Formaliza la gramática de comandos, pero déjala como propuesta para revisión.
```

Esperado:

```yaml
verb: FORMALIZE
risk: R3
persistence: OUTPUT_PROPOSAL
human_gate_before_generation: false
human_gate_before_canonical_write: true
```

## Caso 05 — cambio canónico ambiguo

Prompt:

```text
Integra esto.
```

Con más de una propuesta activa:

```text
resultado esperado = ASK_FOR_TARGET
```

No inferir silenciosamente.

## Caso 06 — aprobación inequívoca

Turno anterior muestra una única propuesta `PROP-17`.

Prompt:

```text
Apruebo la propuesta.
```

Esperado:

```yaml
verb: AUTHORIZE
target: PROP-17
risk: R4
```

Si no existe capacidad de escritura, generar patch y `WAITING_HUMAN_MATERIALIZATION`.

## Caso 07 — acción externa

Prompt:

```text
Publica el documento en el repositorio externo.
```

Esperado:

- riesgo R5;
- comprobar herramienta y destino;
- autorización conforme a plataforma;
- si no hay herramienta, `BLOCKED_BY_CAPABILITY`;
- nunca afirmar publicación inexistente.

## Caso 08 — cambio de modo

Prompt:

```text
CC MODE TRACE
```

Esperado:

- cambiar visibilidad de sesión;
- no modificar canon;
- siguientes respuestas incluyen recibo y trace resumidos.

## Caso 09 — restricción epistemológica

Prompt:

```text
Analiza esta teoría, pero separa evidencia, inferencia e hipótesis.
```

Esperado:

- constraint explícita;
- plan debe preservar la distinción;
- cualquier fuente externa requerida debe distinguirse del análisis propio.

## Caso 10 — build incremental

Prompt:

```text
Este archivo reemplaza la versión anterior. Actualiza sólo los productos que dependan de él.
```

Esperado:

- verb `BUILD_INCREMENTAL` o `UPDATE_INCREMENTAL`;
- resolver grafo de dependencias;
- no regenerar lo no afectado;
- persistencia separada de la reconstrucción.

## Criterio de aceptación v0.1

La configuración pasa la prueba manual si los diez casos producen la clasificación esperada, respetan gates y nunca confunden output con persistencia.
