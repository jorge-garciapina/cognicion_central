# Cognitive Atlas — Motivation (`ctp_C10`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Motivation** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C10` — Motivation
- **Definición registrada en la ontología:** Motivation
- **TRM conectados directamente:** 12
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 3
- **Relaciones `kind_of` encontradas para esos TRM:** 3

## 2. Cómo leer esta categoría
En este archivo, una categoría superior `ctp_` funciona como un contenedor amplio. Los términos `trm_` no son todos del mismo tipo filosófico: algunos son procesos, capacidades, fenómenos, constructos psicológicos, tareas o etiquetas de uso histórico. Por eso este documento no debe leerse como una taxonomía perfecta, sino como una **superficie de organización ontológica**.
Estructura mínima:
```txt
ctp_ categoría superior
  → trm_ término conectado directamente por hasTopConcept
      → posible padre trm_ mediante kind_of
      → definición textual si existe
```
## 3. TRM conectados directamente
| # | trm_id | término | padre(s) `kind_of` | definición registrada |
|---:|---|---|---|---|
| 1 | `trm_4a3fd79d097b4` | altruism | — | helping others in the absence of an immediately obvious reward. |
| 2 | `trm_4a3fd79d097bf` | altruistic motivation | — | A desire or need to help others driven by selflessness. |
| 3 | `trm_4a3fd79d09877` | appetitive motivation | — | behavior directed toward goals that are usually associated with positive hedonic processes. |
| 4 | `trm_om88i12KUeI1R` | aversive salience | `trm_GfkAJLeHghfmp` motivational salience | attention that confers avoidance behavior to an unpleasant stimulus |
| 5 | `trm_4f3bdeedcc99d` | curiosity | — | wanting knowledge or understanding, often of a novel or unfamiliar entity |
| 6 | `trm_4a3fd79d0a0ad` | desire | — | to long or hope for, exhibit or feel desire for; to express a wish for. |
| 7 | `trm_4ebfe9a465449` | expectancy | — | A belief about something in the future. Sometimes requires explicit, conscious awareness, distinct from unconscious, conditioning-based learning. |
| 8 | `trm_4a3fd79d0a28c` | extrinsic motivation | — | motivated by external factors, as opposed to the internal drivers of intrinsic motivation. Extrinsic motivation drives one to do things for tangible rewards or pressures. |
| 9 | `trm_QehTtEcwPuRtK` | incentive salience | `trm_GfkAJLeHghfmp` motivational salience | attention that confers desire to a rewarding stimulus |
| 10 | `trm_4a3fd79d0a6e8` | intrinsic motivation | — | a highly desired form of incentive that stems from a person&#39;s internal desire for self-satisfaction or pleasure in performing the task itself. |
| 11 | `trm_GfkAJLeHghfmp` | motivational salience | `trm_4a3fd79d09902` attention | attention that propels an individual's behavior |
| 12 | `trm_557b4add1837e` | task difficulty | — | the perceived effort required to complete some mental or physical activity |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_GfkAJLeHghfmp` — motivational salience
- `trm_om88i12KUeI1R` — aversive salience
- `trm_QehTtEcwPuRtK` — incentive salience

## 5. Padres `kind_of` externos a la categoría
Estos padres aparecen como superiores de términos de esta categoría, pero no están conectados directamente a esta misma categoría superior en el conjunto `hasTopConcept` usado aquí. Esto muestra que la ontología no opera como árbol limpio, sino como grafo.

### `trm_4a3fd79d09902` — attention
- `trm_GfkAJLeHghfmp` — motivational salience

## 6. Interpretación estructural
La categoría **Motivation** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
