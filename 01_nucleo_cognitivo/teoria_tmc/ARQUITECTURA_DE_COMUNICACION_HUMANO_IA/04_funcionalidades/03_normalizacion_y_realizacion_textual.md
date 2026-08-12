# Normalización y realización textual

## Relación bidireccional

La normalización de comandos está estrechamente relacionada con la creación de textos. Ambas pueden compartir piezas estructuradas, pero operan en direcciones dominantes inversas.

```text
NORMALIZACIÓN
lenguaje → estructura

REALIZACIÓN TEXTUAL
estructura → lenguaje
```

## Normalización

Una formulación humana se descompone en piezas operables:

```text
prompt
→ unidades semánticas
→ relaciones
→ operación
→ objetivos
→ alcance
→ restricciones
→ resultado esperado
→ comando normalizado
```

Ejemplo:

```text
“¿Qué relación existe entre PIEA y el backend cognitivo?”
```

```yaml
operation: QUERY_RELATION
targets:
  - PIEA
  - COGNITIVE_BACKEND
expected_output:
  - EXPLANATION
  - RELATION_GRAPH
```

## Piezas normalizadas

Las piezas no tienen que ser todavía frases:

```yaml
normalized_piece:
  subject: PIEA
  relation: GOVERNS
  object: STATE_INTEGRATION
  domain: COGNITIVE_BACKEND_OPERATION
  epistemic_status: DESIGN_DEFINITION
  discourse_role: CORE_PROPOSITION
```

## Realización textual

La creación de texto puede tomar piezas normalizadas y convertirlas en lenguaje:

```text
piezas normalizadas
→ selección discursiva
→ jerarquía
→ orden
→ conexión
→ frases
→ párrafos
→ texto
```

Una realización posible de la pieza anterior es:

> PIEA gobierna la integración de los comandos y resultados procesados por el backend cognitivo dentro del estado estructural acumulado.

## Contrato compartido

```yaml
semantic_piece:
  id:
  entities: []
  relations: []
  attributes: []
  hierarchy:
  epistemic_status:
  provenance:
  discourse_role:
  constraints: []
```

## Invariantes de ida y vuelta

Al realizar texto desde piezas normalizadas deben preservarse:

- entidades;
- relaciones;
- negaciones;
- modalidad;
- alcance;
- jerarquía;
- procedencia cuando sea necesaria;
- estado epistemológico;
- restricciones discursivas.

## Asimetría

Los procesos son inversos en su dirección dominante, pero no son perfectamente reversibles:

- un prompt puede admitir varias normalizaciones;
- una misma estructura puede producir varias frases válidas;
- el texto incorpora decisiones de orden, énfasis, tono y audiencia;
- la normalización puede omitir rasgos estilísticos irrelevantes para la operación;
- la realización no debe inventar relaciones ausentes para llenar fluidez.

## Función dentro del diseño

```text
Frontend captura lenguaje humano.
Backend normaliza a estructura operativa.
Arquitectura local integra la estructura.
Backend organiza piezas para una salida.
Generador de representación realiza lenguaje.
Frontend presenta el texto al humano.
```

La realización textual es una funcionalidad coordinada por el backend y manifestada por el frontend; no redefine por sí sola a ninguno de los dos.

