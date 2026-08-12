# Ontología y notación

## 1. Vocabulario propio

| Símbolo   | Tipo                    | Definición operacional                                                                                  |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `X`       | sistema delimitado      | Entidad o proceso cuyo estado y transiciones se analizan.                                               |
| `t`       | índice de transición    | Orden lógico o temporal de una actualización; no exige tiempo físico uniforme.                          |
| `S_t`     | estado                  | Organización relevante de `X` antes de integrar `u_t`.                                                  |
| `u_t`     | aporte parcial          | Elemento, señal, acción, recurso o perturbación candidata a integración. Preferido: "unidad ontológica" |
| `κ_t`     | contexto operativo      | Condiciones que modifican la forma válida o efectiva de integrar en esa transición.                     |
| `𝓘_{κ_t}` | operador de integración | Regla, mecanismo o proceso que transforma `S_t` con `u_t` bajo `κ_t`.                                   |
| `S_{t+1}` | estado posterior        | Organización relevante de `X` después de la integración.                                                |
| `Δ_t`     | cambio analítico        | Comparación entre `S_t` y `S_{t+1}`; no es un argumento de la ecuación.                                 |

## 2. Estado

`S_t` no es necesariamente un vector numérico. Puede representarse como:

- grafo relacional;
- conjunto estructurado;
- configuración material;
- distribución de pesos;
- memoria operativa;
- estado fisiológico;
- estado conversacional;
- estructura híbrida.

La representación debe incluir sólo variables relevantes para explicar la integración en el nivel declarado.

## 3. Aporte parcial

`u_t` es parcial respecto del sistema. Puede ser externo, interno, material, simbólico, discreto, continuo o compuesto. No se presupone que sea aceptado íntegramente: la operación puede filtrarlo, transformarlo, inhibirlo o integrarlo sólo en parte.

## 4. Contexto operativo

`κ_t` no equivale a la instancia contextual `φ_n` de ACCD (NOTA POSTERIOR: VER DOCUMENTO 03_aplicaciones\campos_atencionales\diseno_campos_atencionales\base_teorica_ecuacion_de_protocolo_ACCD.md). En PIEA nombra las condiciones que participan en una transición interna. En ACCD, `φ_n` configura la proyección de una construcción conceptual hacia una manifestación codominial.

`κ_t` puede incluir, según el dominio:

- disponibilidad de recursos;
- restricciones locales;
- umbrales;
- condiciones ambientales;
- reglas activas;
- escala temporal;
- prioridades;
- compatibilidades entre estado y aporte.

## 5. Operador de integración

`𝓘` es una letra reservada por PIEA. Sustituye el símbolo `T` usado en la formulación descubriente para impedir una colisión con `T`, espacio de temas de ACCD (03_aplicaciones\campos_atencionales\diseno_campos_atencionales\base_teorica_ecuacion_de_protocolo_ACCD.md).

`𝓘` no designa un algoritmo universal. Es un rol estructural que debe materializarse en cada instancia mediante un mecanismo declarado o una descripción operacional suficiente.

## 6. Cambio analítico

Cuando resulte útil puede escribirse:

```math
\Delta_t := \operatorname{diff}(S_t,S_{t+1})
```

`Δ_t` sirve para describir qué cambió. No introduce otra entidad causal ni duplica el estado posterior.

## 7. Relaciones ontológicas

```txt
X --HAS_STATE--> S_t
X --EXPOSED_TO_OR_ACTIVATES--> u_t
κ_t --CONDITIONS--> 𝓘
𝓘 --INTEGRATES--> (S_t, u_t)
𝓘 --PRODUCES--> S_{t+1}
S_t --PRECEDES--> S_{t+1}
S_{t+1} --CONDITIONS--> future integration
```

## 8. Reservas respecto de ACCD

PIEA no redefine los siguientes símbolos de ACCD (03_aplicaciones\campos_atencionales\diseno_campos_atencionales\base_teorica_ecuacion_de_protocolo_ACCD.md):

| Símbolo ACCD | Uso reservado en ACCD                         |
| ------------ | --------------------------------------------- |
| `T`          | espacio de temas                              |
| `M^i`        | módulo MAANC                                  |
| `m^i_j`      | construcción conceptual                       |
| `𝓒`          | espacio de construcciones conceptuales        |
| `C`          | corriente segmentada de eventos               |
| `Φ`, `φ_n`   | espacio e instancia contextual de realización |
| `R`, `r_k`   | realizaciones                                 |
| `P^{r_k}`    | protocolo de proyección codominial            |
| `μ^{r_k}`    | manifestación codominial                      |
| `Ω^{r_k}`    | codominio de la realización                   |

Fuente: `[ACCD-EQ]`, especialmente §§2–10.
