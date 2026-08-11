# Contrato Adaptador → ACCD

## 1. Núcleo formal recuperado

`construccion_conceptual` es un campo estructural compuesto cuyo valor es una colección de una o más `idea_activa`.

Cada `idea_activa` debe declarar:

```text
formulacion_de_la_idea
rol_conceptual
peso_relativo
modo_de_presencia
relaciones_con_otras_ideas
```

La consistencia entre rol, peso, presencia y relaciones es obligatoria.

## 2. Forma material de interoperabilidad

Los protocolos ACCD reconstruyen la forma lógica siguiente:

```yaml
construccion_conceptual:
  coleccion_de_ideas_activas:
    ideas_activas:
      - idea_id:
        formulacion_de_la_idea:
        formulacion_textual_de_la_idea:
        rol_conceptual:
        peso_relativo:
        modo_de_presencia:
        relaciones_con_otras_ideas:
          - idea_relacionada:
            tipo_de_relacion:
            descripcion_de_la_relacion:
```

`idea_id` es consumido explícitamente por el protocolo de video y aparece en los ejemplos. `formulacion_textual_de_la_idea` aparece en las realizaciones vigentes y es necesaria para portar el contenido proposicional, aunque el Grafo de Regiones todavía no la declara como campo interno formal. Se conserva como perfil de interoperabilidad y se registra como deuda en `90_meta/01_huecos_ambiguedades_y_decisiones.md`.

## 3. Valores válidos

### `formulacion_de_la_idea`

```text
formulacion_abierta_controlada
proposicion_argumentativa
proposicion_definicional
proposicion_operativa
proposicion_relacional
```

### `rol_conceptual`

```text
nuclear
complementaria
puente
contrastiva
derivada
```

### `modo_de_presencia`

```text
explicita
explicita_reiterada
implicita_estructurante
localizada
transversal
```

### `tipo_de_relacion`

```text
articulacion_libre_controlada
condicion
consecuencia
contraste
equivalencia_parcial
expansion
soporte
subordinacion
```

### `peso_relativo`

Escalar normalizado en el rango inclusivo `0..1`. No existe en la fuente una obligación de que la suma sea `1.0`.

## 4. Cardinalidades

```text
construccion_conceptual              exactamente 1
coleccion_de_ideas_activas           exactamente 1
ideas_activas                        1..n
relaciones_con_otras_ideas por idea  0..n
```

Cada relación debe contener `idea_relacionada`, `tipo_de_relacion` y `descripcion_de_la_relacion`.

## 5. Prohibiciones de serialización

No emitir dentro de `construccion_conceptual`:

- etiquetas epistemológicas MTC;
- rutas de fuentes;
- operadores MTC;
- scores internos del adaptador;
- decisiones de descarte;
- campos audiovisuales;
- valores no declarados por ACCD.

En particular, no usar valores encontrados sólo en ejemplos y ausentes del grafo formal, como:

```text
proposicion_contrastiva
proposicion_consecuencial_abierta
localizada_con_recapitulacion
oposicion
derivacion
recapitulacion
```

Cuando una idea no encaje en las cuatro formas proposicionales cerradas, usar `formulacion_abierta_controlada`, sin añadir `ajuste_de_formato` al output.

## 6. Criterio de conformidad

Una salida es conforme si:

1. contiene al menos una idea;
2. todo `idea_id` es único y referenciable;
3. toda formulación textual expresa una proposición completa;
4. todos los valores categoriales pertenecen a las listas anteriores;
5. todos los pesos están entre 0 y 1;
6. toda referencia apunta a una idea existente;
7. las relaciones tienen descripción concreta;
8. roles, pesos y presencia no se contradicen;
9. no contiene decisiones propias de realización;
10. pasa validación reconstructiva contra el MTC_OUTPUT.

